// 剑龙山真实感版 v10.1：Cesium + 本地 heightmap 地形 + Esri 卫星影像。
// v9（2026-11-26）：界面换肤——按 Three.js v2.11.8 参考图：白底 pill 标注（红字标高）、
// 浅蓝虚线路线、顶栏 logo + 附近 pill + 刷新/首页、底部 6 按钮 dock、聊天 FAB 深色圆；
// 地形/影像/数据一字不动；v8 高清三项（DPR 2.0、影像 17 级、msse 2）保留。
// 地形是我们的真实 DEM（136×144），高度真实、无竖向夸张；
// 四峰标签用 KML 高程（用户已定）；农田不画贴片——卫星图上本来就是真农田。
// v8（2026-11-26）：高清测试版——只提窄屏清晰度：DPR 上限 1.0→2.0、影像 15→17 级、
// 静止 msse 3→2。字糊的主因查过：主标签是 Cesium SDF（48px 母字形，与分辨率无关，
// 清晰度只跟帧缓冲走）；补给站 pill canvas 本来就是 2 倍绘制（300×44→150×22，
// 设施图标 40×40→20×20），不用再改。所以字与影像糊的根子是帧缓冲 1.0 + 15 级瓦片。
// 桌面端不动；其余窄屏减负（tileCache 50、并发 3、视角记忆、20km）不动。
// 注意：这是测试版——3x iPhone 上帧缓冲像素数是 v7 的 4 倍，iOS 微信杀进程白屏
// 可能回来，手机实测为准。
// v7（2026-11-26）：按 4.kml 重建（四峰/路线/途点/设施/停车场/补给站），
// 功能与 UI 按 v2.11.7 同步：二级标注错开 ±10px + 引出线、二级按距离渐变透明、
// 近景拖动放慢、四峰弹窗照片、附近推荐固定顺序、访客中心升一级；
// 山脊支线已删（4.kml 与 v2.10.11 均无）；树/云/水坝/雾不加回来。
import { DATA } from './data.js';

const $ = (id) => document.getElementById(id);
const setStatus = (t) => { $('status').textContent = t; window.__status = t; };
const log = (t) => console.log('[cesium-jls] ' + t);

window.__ready = false;
window.__error = null;

// 窄屏（手机 ≤760px）才做减负：电脑端一律不动
const isNarrow = window.innerWidth <= 760;

// ---------- 地形瓦片是 base64 文本（GitHub 连接器只接受 UTF-8 文本上传） ----------
// 瓦片字节一字不动：取数时把 .terrain.b64 文本解码回 ArrayBuffer 再交给
// Cesium 自身解码，四峰精度与之前验证的 ≤0.4m 完全一致。
// 拦截点：CesiumTerrainProvider 经 Resource.getDerivedResource().fetchArrayBuffer()
// 取瓦片；getDerivedResource 内部调 this.clone()，基类 clone 返回普通 Resource——
// 所以子类必须重写 clone()，让派生资源仍是本类，否则拦截在第一跳就丢了
// （Resource.createIfNeeded 传 Resource 实例时也会先 getDerivedResource 一次）。
class B64TerrainResource extends Cesium.Resource {
  clone(result) {
    if (result) return super.clone(result);
    return new B64TerrainResource({
      url: this._url,
      queryParameters: this.queryParameters,
      templateValues: this.templateValues,
      headers: this.headers,
      proxy: this.proxy,
      retryCallback: this.retryCallback,
      retryAttempts: this.retryAttempts,
      request: this.request ? this.request.clone() : undefined,
      parseUrl: false,
      credits: this.credits ? this.credits.slice() : undefined,
    });
  }
  async fetchArrayBuffer() {
    const url = this.url;
    if (typeof url === 'string' && url.endsWith('.terrain')) {
      const res = await fetch(url + '.b64');
      if (!res.ok) throw new Error(`地形瓦片取数失败 ${res.status} ${url}.b64`);
      const bin = atob((await res.text()).trim());
      const buf = new ArrayBuffer(bin.length);
      const u8 = new Uint8Array(buf);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      return buf;
    }
    return super.fetchArrayBuffer();
  }
}

try {
  setStatus('加载地形中…');
  log('地形 provider：./terrain（base64 文本瓦片）');
  const terrainProvider = await Cesium.CesiumTerrainProvider.fromUrl(
    new B64TerrainResource({ url: './terrain' }));
  log('地形 provider 就绪');

  // 注意：1.147 的 Viewer 已没有 imageryProvider 选项（静默忽略），
  // 影像要走 baseLayer: new Cesium.ImageryLayer(provider)。
  // ArcGIS API key：公开应用 key，随页面代码下发（靠来源网址 Referrer 限制保护，
  // 不靠保密）。只放这一处；不要抄到报告、日志或 BUILD-NOTES 里。
  const ARCGIS_API_KEY = 'AAPTa3ElsJROTHE12I328JVC1Wg..9c7pYJs-60w4T61Mq5pLtKb5fTO1Gm2XsgUXiLmIfDDjk_ObQQjqo7dBjmST0Y9HFTE-8eBGWLqSTR1gUJq5Q8JYd0hzudDv216YhlbRLesURM6a_7BayGrrPFyiNkEhLGI-XQxNdDshn_9CpPEiNq4-qFXwFh_iK4Mq5gGDqyeFycgmqyZ1EYjxwp2Wpmvv8YxFyU2pSsXqAi5KaKNEsVv13OtsceOHSKfvM9rzhAT5jMoyMjzu0-k.AT1_JCyw5th4';
  // ---------- 底图风格（4 种，点着换） ----------
  // 卫星走带 key 的 ibasemaps World_Imagery（已验证 200 + 真 JPEG）；
  // 地形/街道/深灰走 ArcGIS 静态底图切片服务（官方文档的对等服务——
  // ibasemaps 主机上只有 World_Imagery，World_Topo_Map 等服务名在那返回 404；
  // 服务自带的 /self 列表确认地形对应 arcgis/outdoor，街道 arcgis/streets，
  // 深灰 arcgis/dark-gray，均已验证 200 + 真 PNG）。静态切片是 512×512 PNG，
  // provider 要设 tileWidth/tileHeight 512；卫星是 256×256 JPEG。
  // 4 种风格共用同一个 ARCGIS_API_KEY；影像矩形与 Esri 署名与之前一致。
  const BASEMAPS = [
    { id: 'imagery', name: '卫星', chip: '真实卫星影像', note: 'Esri 卫星影像（默认，真实感最强）。', url: 'https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?token=' + ARCGIS_API_KEY, tileSize: 256, color: { saturation: 1.40, contrast: 1.15, brightness: 1.02, gamma: 0.98 } },
    { id: 'outdoor', name: '地形', chip: '地形 · 等高线 · 水系', note: 'ArcGIS Outdoor：地形、等高线、山脊水系，适合看地形。', url: 'https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/arcgis/outdoor/static/tile/{z}/{y}/{x}?token=' + ARCGIS_API_KEY, tileSize: 512, color: { saturation: 1.15, contrast: 1.05, brightness: 1.0, gamma: 1.0 } },
    { id: 'streets', name: '街道', chip: '道路 · 村庄 · 建筑', note: 'ArcGIS Streets：道路、村庄、建筑，适合看路网。', url: 'https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/arcgis/streets/static/tile/{z}/{y}/{x}?token=' + ARCGIS_API_KEY, tileSize: 512, color: { saturation: 1.10, contrast: 1.03, brightness: 1.0, gamma: 1.0 } },
    { id: 'dark', name: '深灰', chip: '深色底图，标注醒目', note: 'ArcGIS Dark Gray：深色底图，路线和标注更醒目。', url: 'https://static-map-tiles-api.arcgis.com/arcgis/rest/services/static-basemap-tiles-service/v1/arcgis/dark-gray/static/tile/{z}/{y}/{x}?token=' + ARCGIS_API_KEY, tileSize: 512, color: { saturation: 1.0, contrast: 1.0, brightness: 1.0, gamma: 1.0 } },
  ];
  // 底图选择持久化：localStorage，下次打开恢复上次的风格（与视角记忆同一套做法；
  // 视角记忆只在窄屏，底图选择是用户偏好，宽屏窄屏都存取）。
  const BASEMAP_KEY = 'jls-cesium-basemap-v1';
  const readSavedBasemap = () => {
    try {
      const id = localStorage.getItem(BASEMAP_KEY);
      return BASEMAPS.some((b) => b.id === id) ? id : 'imagery';
    } catch (e) { return 'imagery'; }
  };
  let curBasemap = readSavedBasemap();
  const makeImageryProvider = (style) => new Cesium.UrlTemplateImageryProvider({
    url: style.url,
    tileWidth: style.tileSize, tileHeight: style.tileSize,
    maximumLevel: isNarrow ? 17 : 18, // v8 高清：窄屏 15→17（影像糊的主因是 15 级瓦片被拉大；宽屏仍 18；换底图后同样生效）
    // 影像只拉 20km 范围矩形（覆盖地形外层框 + 余量），别全 globe 拉瓦片
    rectangle: Cesium.Rectangle.fromDegrees(106.78, 22.92, 107.29, 23.39),
    credit: 'Esri, Maxar, Earthstar Geographics',
  });
  // v10 真实感增强：每种底图自带色彩参数（ImageryLayer brightness/contrast/
  // saturation/gamma，运行时可改、切底图时重设）。卫星是主角，用实验胜出值
  // （sat 1.40/con 1.15/bri 1.02/gam 0.98，见 BUILD-NOTES v10）；地形/街道
  // 只轻微提色；深灰是灰阶图，饱和度无意义，保持原样。hue 一律 0（不偏色）。
  const applyLayerColor = (layer, style) => {
    const c = (style && style.color) || {};
    layer.brightness = c.brightness ?? 1.0;
    layer.contrast = c.contrast ?? 1.0;
    layer.saturation = c.saturation ?? 1.0;
    layer.gamma = c.gamma ?? 1.0;
    layer.hue = 0;
  };
  let imageryLayer = new Cesium.ImageryLayer(makeImageryProvider(BASEMAPS.find((b) => b.id === curBasemap)));
  applyLayerColor(imageryLayer, BASEMAPS.find((b) => b.id === curBasemap));
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider,
    baseLayer: imageryLayer,
    baseLayerPicker: false, geocoder: false, homeButton: false, sceneModePicker: false,
    navigationHelpButton: false, animation: false, timeline: false, fullscreenButton: false,
    vrButton: false, infoBox: false, selectionIndicator: false,
    requestRenderMode: true, maximumRenderTimeChange: Infinity,
  });
  // ---- 流畅度（拖动卡）：手机降分辨率 + 拖动时降地形细节 ----
  // v8 高清测试：窄屏 DPR 上限 1.0→2.0（v4 防刷新时从 1.5 压到 1.0）。
  // 实测校正（Cesium 1.147 源码 + DSF=3 探针）：Viewer 默认
  // useBrowserRecommendedResolution=true，所以帧缓冲像素比 = resolutionScale
  // 本身（不是 devicePixelRatio×resolutionScale）。v7 窄屏像素比 1.0→画布只有
  // 390×844、被浏览器放大 3 倍贴到 1170×2532 的屏上，这才是字和影像糊的根子；
  // v8 像素比 2.0→画布 780×1688，像素数是 v7 的 4 倍，只再放大 1.5 倍。
  // 显存与解码压力同步上去——刷新白屏可能回来，手机实测为准。宽屏仍 1.5。
  // 本地 SwiftShader 帧率不代表手机，只看瓦片数/分辨率等可量化指标。
  const dprCap = isNarrow ? 2.0 : 1.5;
  viewer.resolutionScale = Math.min(window.devicePixelRatio || 1, dprCap);
  // 雾已关（用户要求去掉）：Cesium 内置 scene.fog 关闭，季节不再调雾密度。
  // 大气散射仍关（每帧算，贵；预设视角俯角大，天空基本不出画）。
  viewer.scene.fog.enabled = false;
  viewer.scene.skyAtmosphere.show = false; // 大气散射每帧算，关掉；天空用底色（见 index.html 背景）
  // v8 高清：窄屏静止 msse 3→2（与宽屏同值，地形更细；拖动时仍 4）
  const REST_MSSE = 2;
  viewer.scene.globe.maximumScreenSpaceError = REST_MSSE;
  // 窄屏地形瓦片缓存 50（默认 100），省显存；宽屏不动
  if (isNarrow) viewer.scene.globe.tileCacheSize = 50;
  // 窄屏每服务器并发 3（默认 6），削平加载尖峰；宽屏不动
  Cesium.RequestScheduler.maximumRequestsPerServer = isNarrow ? 3 : 6;
  // 拖动时放宽到 4：瓦片细节降一档，拖动中少拉/少解码瓦片；停稳恢复 REST_MSSE
  viewer.camera.moveStart.addEventListener(() => {
    viewer.scene.globe.maximumScreenSpaceError = 4;
  });

  // ---- 20km 范围限制：最大视野就是周边约 20km，不许缩到看整个地球 ----
  const CENTER_LON = 107.0365, CENTER_LAT = 23.155;
  const ctrl = viewer.scene.screenSpaceCameraController;
  ctrl.maximumZoomDistance = 15000; // 相机到目标最远 15km（约 20km 范围的视野）
  ctrl.minimumZoomDistance = 100;
  // 兜底：moveEnd 时相机高度 >12km 或地面位置离中心 >18km 就拉回
  const clampCamera = () => {
    const cart = viewer.camera.positionCartographic;
    if (!cart) return;
    const h = cart.height;
    const lon = Cesium.Math.toDegrees(cart.longitude), lat = Cesium.Math.toDegrees(cart.latitude);
    const distM = Math.hypot((lon - CENTER_LON) * 102000, (lat - CENTER_LAT) * 111000);
    if (h <= 12000 && distM <= 18000) return;
    const nh = Math.min(h, 12000);
    let nlon = lon, nlat = lat;
    if (distM > 18000) {
      const s = 18000 / distM;
      nlon = CENTER_LON + (lon - CENTER_LON) * s;
      nlat = CENTER_LAT + (lat - CENTER_LAT) * s;
    }
    viewer.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(nlon, nlat, nh),
      orientation: { heading: viewer.camera.heading, pitch: viewer.camera.pitch, roll: 0 },
    });
    viewer.scene.requestRender();
  };
  viewer.camera.moveEnd.addEventListener(clampCamera);
  viewer.scene.globe.depthTestAgainstTerrain = true;
  // ---- v10 真实感增强：固定下午斜阳（地形光影） ----
  // 实验结论（两轮 10 组截图对比，见 BUILD-NOTES v10）：
  // 28° 低太阳角压暗画面（D/E 均暗于无光照 C，否决）；55° 高太阳角 + 强度 1.0
  // 既出立体感又不压暗（G 胜出）；强度 1.2 + lambert 1.3 则发灰泛白（H/I 否决）。
  // 用 DirectionalLight 固定光向，不碰时钟——动画用 Date.now()，flyTo 的 tween
  // 走时钟，固定时钟会冻住飞行；固定光向无此问题。太阳方位西南（225°）、
  // 高度角 55°（近午后斜阳）。光照只影响地形+影像（globe），白底 pill/路线/
  // 标注是公告板/折线、不受光。额外显存/瓦片成本为 0，不影响 v4 防刷新。
  const SUN_ENU = new Cesium.Cartesian3(
    Math.cos(55 * Math.PI / 180) * Math.SQRT1_2,
    Math.cos(55 * Math.PI / 180) * Math.SQRT1_2,
    -Math.sin(55 * Math.PI / 180));
  const sunFrame = Cesium.Transforms.eastNorthUpToFixedFrame(
    Cesium.Cartesian3.fromDegrees(CENTER_LON, CENTER_LAT, 0));
  const sunDir = Cesium.Matrix4.multiplyByPointAsVector(sunFrame, SUN_ENU, new Cesium.Cartesian3());
  Cesium.Cartesian3.normalize(sunDir, sunDir);
  viewer.scene.light = new Cesium.DirectionalLight({ direction: sunDir, intensity: 1.0 });
  viewer.scene.globe.enableLighting = true; // lambertDiffuseMultiplier 保持默认 1.0
  window.__viewer = viewer;
  window.__DATA__ = DATA;
  window.__terrainProvider = terrainProvider;

  // ---------- 徒步路线：三段环线（穿四峰），浅蓝底带 + 深蓝虚线；公路灰色 ----------
  // v9 换肤，颜色按 v2.11.8 图例：底 #9fc3dd、虚线 #2e5a87；
  // Cesium 地面贴合折线可用 PolylineDashMaterialProperty，gap 透明以露出底带。
  // 4.kml 的三段路线（登山 24 点/1036m、下山 28 点/889m、应急通道 11 点/308m，
  // 两段直连 chord 已含在点列里，环线严格闭合）；山脊支线已删（4.kml 里没有）。
  for (const t of DATA.trails) {
    const linePos = Cesium.Cartesian3.fromDegreesArray(t.pts.flat());
    viewer.entities.add({
      name: t.name,
      polyline: {
        positions: linePos,
        clampToGround: true, width: 5,
        material: Cesium.Color.fromCssColorString('#9fc3dd'),
      },
    });
    viewer.entities.add({
      name: t.name + '（虚线）',
      polyline: {
        positions: linePos,
        clampToGround: true, width: 2,
        material: new Cesium.PolylineDashMaterialProperty({
          color: Cesium.Color.fromCssColorString('#2e5a87'),
          gapColor: Cesium.Color.TRANSPARENT, dashLength: 16,
        }),
      },
    });
  }
  viewer.entities.add({
    name: '公路',
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray(DATA.road.flat()),
      clampToGround: true, width: 3,
      material: Cesium.Color.fromCssColorString('#9aa0a6'),
    },
  });

  // ---------- 伏曼水库：不画扁平多边形——Esri 卫星影像上本来就是真水库，
  // 实测扁平亮蓝多边形像贴纸（见 BUILD-NOTES），反而破坏真实感。
  // 水库只保留视角预设（飞到湖心上空）和图例；范围以影像上的真实水面为准。
  // DEM 湖格轮廓与影像水面吻合（A/B 对照已验证），不需要再画。 ----------

  // ---------- 标注总表：declutter 按这张表排叠（四峰 + 一级地点 + 二级途点等） ----------
  // tier A（四峰/入口/广场/出口/水库）：高度 ≤2000m 显示标签，点常显；
  // tier B（途点/停车场/村庄）：高度 ≤1500m 才显示（点+标签一起），更近景才出现，
  // 与 v2.10.11 的分级（L2/L3 缩小才显示）同义。设施图标走公告板，不进排叠。
  const labelItems = []; // {entity, anchor, tier, main, halfW, halfH, dy}
  const D2R = Cesium.Math.toRadians;

  // ---------- 白底 pill 标注（v9 换肤，样式按 v2.11.8 .marker） ----------
  // 白底 rgba(255,252,243,.94)、1px 边框、深色字 #263c35、标高红字 #ac4931；
  // canvas 2 倍绘制（SS=2），显示尺寸 = 画布/2，DPR 2.0 下依然清晰。
  // 一个 Cesium label 画不出两种颜色的字，所以改用 canvas 公告板（复用补给站 pill 的做法）；
  // 排叠/透明度/引出线逻辑不变，declutter 里只把 label 换成 billboard。
  // 几何与 v7 一致：A 档高 26px（halfH 13）、B 档高 22px（halfH 11）。
  const PILL_STYLE = {
    peak: { bg: 'rgba(255,252,243,0.94)', border: '#8a9a7a', ink: '#263c35', rust: '#ac4931' },
    place: { bg: 'rgba(255,252,243,0.94)', border: '#b9bfa9', ink: '#263c35', rust: '#ac4931' },
    wp: { bg: 'rgba(255,252,243,0.94)', border: '#b9bfa9', ink: '#4a5a50', rust: '#ac4931' },
    park: { bg: '#dbe7f2', border: '#7ba3c4', ink: '#2f4a66', rust: '#ac4931' },
  };
  const makeLabelBoard = (name, heightText, fontPx, kind) => {
    const st = PILL_STYLE[kind] || PILL_STYLE.wp;
    const h = fontPx === 13 ? 26 : 22;
    const padX = 10, gap = 6, SS = 2;
    const probe = document.createElement('canvas').getContext('2d');
    probe.font = `bold ${fontPx}px sans-serif`;
    const nameW = probe.measureText(name).width;
    const heightW = heightText ? probe.measureText(heightText).width : 0;
    const w = Math.ceil(padX * 2 + nameW + (heightText ? gap + heightW : 0));
    const cv = document.createElement('canvas');
    cv.width = w * SS; cv.height = h * SS;
    const ctx = cv.getContext('2d');
    ctx.scale(SS, SS);
    ctx.beginPath(); ctx.roundRect(0.5, 0.5, w - 1, h - 1, h / 2);
    ctx.fillStyle = st.bg; ctx.fill();
    ctx.strokeStyle = st.border; ctx.lineWidth = 1; ctx.stroke();
    ctx.font = `bold ${fontPx}px sans-serif`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillStyle = st.ink;
    ctx.fillText(name, padX, h / 2 + 0.5);
    if (heightText) { ctx.fillStyle = st.rust; ctx.fillText(heightText, padX + nameW + gap, h / 2 + 0.5); }
    return { cv, w, h };
  };

  // ---------- 四峰标注：KML 高程做标签，锚点在网格实测高度 +40m ----------
  const peakEntities = [];
  for (const p of DATA.peaks) {
    const pos = Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.gridH + 40);
    const board = makeLabelBoard(`${p.num}号峰 ${p.short}`, `${p.kmlH}m`, 13, 'peak');
    const e = viewer.entities.add({
      name: `${p.num}号峰 ${p.short}`,
      position: pos,
      point: { pixelSize: 7, color: Cesium.Color.WHITE, outlineColor: Cesium.Color.BLACK, outlineWidth: 2 },
      billboard: {
        image: board.cv, width: board.w, height: board.h,
        pixelOffset: new Cesium.Cartesian2(0, -18),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
    e._popup = { title: `${p.num}号峰 ${p.short}`, meta: `${p.kmlH} m`, body: DATA.chatPeaks.find((c) => c.id === p.id)?.text || '', photo: 'peak-' + p.id, fly: { lon: p.lon, lat: p.lat, h: p.gridH + 450, pitch: -35 } };
    peakEntities.push(e);
    labelItems.push({ entity: e, anchor: pos, tier: 'A', main: false, halfW: Math.ceil(board.w / 2), halfH: board.h / 2, dy: -30, stag: 0 });
  }

  // ---------- 地面高程采样：途点/设施/村子/徒步环线/雨滴，一次批量取 ----------
  // 用显示的地形本身采样（与峰高核对同一调用），点位落点与地形一致。
  const haversineM = (a, b) => {
    const R = 6371000, dLa = (b[1] - a[1]) * Math.PI / 180, dLo = (b[0] - a[0]) * Math.PI / 180;
    const la1 = a[1] * Math.PI / 180, la2 = b[1] * Math.PI / 180;
    const h = Math.sin(dLa / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLo / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };
  // 徒步环线：登山→下山→应急通道收尾（4.kml 三段在归元峰/应急出口/广场三处交汇，严格闭合）
  const loopPts = [
    ...DATA.trails[0].pts,
    ...DATA.trails[1].pts.slice(1),
    ...DATA.trails[2].pts.slice(1),
  ];
  const loopCum = [0];
  for (let i = 1; i < loopPts.length; i++) loopCum.push(loopCum[i - 1] + haversineM(loopPts[i - 1], loopPts[i]));
  const loopTotal = loopCum[loopCum.length - 1];
  // 雨滴撒在环线一带上空（±434m × ±260m，高出地面 0–200m）
  const rainSeeds = [];
  for (let i = 0; i < 160; i++) {
    rainSeeds.push([CENTER_LON + (Math.random() * 2 - 1) * 434 / 102000, CENTER_LAT + (Math.random() * 2 - 1) * 260 / 111000]);
  }
  const sampleCarts = [];
  const cartFor = (lon, lat) => {
    const c = Cesium.Cartographic.fromDegrees(lon, lat);
    sampleCarts.push(c);
    return c;
  };
  const wpCarts = DATA.waypoints.map((w) => cartFor(w.lon, w.lat));
  const parkCarts = DATA.parking.map((p) => cartFor(p.lon, p.lat));
  const facCarts = DATA.facilities.map((f) => cartFor(f.lon, f.lat));
  const vilCarts = DATA.villages.map((v) => cartFor(v.lon, v.lat));
  const plazaCart = cartFor(DATA.plaza.lon, DATA.plaza.lat);
  const parkExitCart = cartFor(DATA.park_exit.lon, DATA.park_exit.lat);
  const emgCart = cartFor(DATA.emergency_exit.lon, DATA.emergency_exit.lat);
  const entCart = cartFor(DATA.entrance.lon, DATA.entrance.lat);
  const lakeCart = cartFor(DATA.places[0].lon, DATA.places[0].lat);
  const loopCarts = loopPts.map((p) => cartFor(p[0], p[1]));
  const rainCarts = rainSeeds.map((p) => cartFor(p[0], p[1]));
  let sampledOk = true;
  try {
    await Cesium.sampleTerrainMostDetailed(terrainProvider, sampleCarts);
    log(`地面采样完成：${sampleCarts.length} 点`);
  } catch (e) {
    sampledOk = false;
    log('地面采样失败（途点/徒步者暂不建）：' + e);
  }
  const groundStats = { sampledOk, sampled: sampleCarts.length, trees: 0, hikers: 0, clouds: 0 };
  window.__groundStats = groundStats;

  // ---------- 画布小图工具（补给站标签、设施图标、徒步者、雨丝都画在 canvas 上） ----------
  const makeCanvas = (w, h, draw) => {
    const cv = document.createElement('canvas');
    cv.width = w; cv.height = h;
    draw(cv.getContext('2d'), w, h);
    return cv;
  };
  // 医疗红十字（v2.10.11 的 MED_ICO 同款：红底圆角 + 白十字）
  const drawMed = (ctx, x, y, s) => {
    ctx.fillStyle = '#c0392b';
    ctx.beginPath(); ctx.roundRect(x, y, s, s, s * 0.2); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = s * 0.16; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x + s / 2, y + s * 0.2); ctx.lineTo(x + s / 2, y + s * 0.8); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + s * 0.2, y + s / 2); ctx.lineTo(x + s * 0.8, y + s / 2); ctx.stroke();
  };
  // 卫生间徽（蓝底白字 WC——canvas 里 🚻 在无头环境可能画成方框，WC 稳定可读）
  const drawWc = (ctx, x, y, s) => {
    ctx.fillStyle = '#2f7fc4';
    ctx.beginPath(); ctx.roundRect(x, y, s, s, s * 0.2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.round(s * 0.52)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('WC', x + s / 2, y + s / 2 + 1);
  };

  // ---------- 标注点位：L1 地点 + 途点 + 停车场 + 村庄 ----------
  // 点位样式沿用 v2.10.11 的分级（L1 常显、L2/L3 缩小才显），但 Cesium 里按
  // 相机高度分两档：A 档 ≤2000m、B 档 ≤1500m（见 labelItems 注释）。
  // v2.11.7 同步（v2.11.2）：B 档标注上下交替错开 ±10px（一个计数器按创建顺序
  // 走遍全部 B 档：途点 → 停车场 → 村庄 → 设施；与 v2.11.7 的 18 个 L2
  // 相位一致——村庄是 Cesium 才有的 6 个 B 档，偶数个，不打乱后续相位）。
  // A 档（四峰/一级地点）钉死点位正上方，不错开、无引出线。
  const tierBBoards = []; // B 档公告板（补给站标签、设施图标）：moveEnd 时与 B 档标签同显隐
  let l2StagN = 0;
  const nextStag = () => (l2StagN++ % 2 === 0 ? -10 : 10);
  const addMarkerEntity = (lon, lat, h, text, popup, tier, stag = 0, heightText = null, kind = 'wp') => {
    const pos = Cesium.Cartesian3.fromDegrees(lon, lat, h);
    const fontPx = tier === 'A' ? 13 : 11;
    const board = makeLabelBoard(text, heightText, fontPx, kind);
    const e = viewer.entities.add({
      position: pos,
      point: { pixelSize: tier === 'A' ? 7 : 5, color: Cesium.Color.WHITE, outlineColor: Cesium.Color.BLACK, outlineWidth: 2 },
      billboard: {
        image: board.cv, width: board.w, height: board.h,
        pixelOffset: new Cesium.Cartesian2(0, -18),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
    if (popup) e._popup = popup;
    labelItems.push({ entity: e, anchor: pos, tier, main: false, halfW: Math.ceil(board.w / 2), halfH: board.h / 2, dy: tier === 'A' ? -28 : -26 + stag, stag });
    return e;
  };
  if (sampledOk) {
    // L1：登山入口 / 访客集散广场 / 园区出口 / 应急出口 / 伏曼水库
    const L1 = [
      { key: 'entrance', lon: DATA.entrance.lon, lat: DATA.entrance.lat, cart: entCart, text: '登山入口',
        popup: { title: '登山入口', meta: '水库北岸 · 海拔约 488 m', body: '水库环线登山路线起点，自水库北岸上归元峰；访客集散广场在入口旁，园区出口与应急通道在南侧。', photo: DATA.entrance.photo, fly: { lon: DATA.entrance.lon, lat: DATA.entrance.lat, h: 900, pitch: -55 } } },
      { key: 'plaza', lon: DATA.plaza.lon, lat: DATA.plaza.lat, cart: plazaCart, text: '访客集散广场 ★',
        popup: { title: '访客集散广场', meta: '', body: '登山起点广场，水库北岸公路旁，停车、集散、出发。', photo: null, fly: { lon: DATA.plaza.lon, lat: DATA.plaza.lat, h: 900, pitch: -55 } } },
      { key: 'parkexit', lon: DATA.park_exit.lon, lat: DATA.park_exit.lat, cart: parkExitCart, text: '园区出口',
        popup: { title: '园区出口', meta: '应急通道起点 · 海拔约 498 m', body: '水库环线应急通道（下山中间的路）起点旁，下山路线终点附近，村道通往公路；应急出口在东侧下山路线终点。', photo: null, fly: { lon: DATA.park_exit.lon, lat: DATA.park_exit.lat, h: 900, pitch: -55 } } },
      { key: 'emergency', lon: DATA.emergency_exit.lon, lat: DATA.emergency_exit.lat, cart: emgCart, text: '应急出口',
        popup: { title: '应急出口', meta: '', body: '应急出口，下山路线终点（原园区出口处），村道直通公路。', photo: null, fly: { lon: DATA.emergency_exit.lon, lat: DATA.emergency_exit.lat, h: 900, pitch: -55 } } },
      { key: 'lake', lon: DATA.places[0].lon, lat: DATA.places[0].lat, cart: lakeCart, text: '伏曼水库', height: '497m',
        popup: { title: '伏曼水库', meta: '湖面海拔约 497 m', body: '伏曼水库，东侧碧绿水库，湖心五岛，湖面海拔约 497 米。', photo: DATA.places[0].photo, fly: { lon: DATA.places[0].lon, lat: DATA.places[0].lat, h: 1200, pitch: -55 } } },
    ];
    for (const m of L1) {
      addMarkerEntity(m.lon, m.lat, (m.cart.height ?? 600) + 15, m.text, m.popup, 'A', 0, m.height || null, 'place');
    }
    // 13 途点：点 + 标签；补给站的标签是画出来的整块 pill（图标贴进标签里，
    // 不是 20 米外的独立标记），所以这两处不用 Cesium 文字标签，只留点位。
    // v2.11.7 同步（v2.10.14）：访客中心升一级，按 A 档建（仍在 waypoints 数据里，
    // 只改 marker 等级）；其余 12 个途点是 B 档，交替错开。
    const supplyBoards = viewer.scene.primitives.add(new Cesium.BillboardCollection());
    DATA.waypoints.forEach((w, i) => {
      const h = wpCarts[i].height ?? 600;
      const popup = { title: w.label, meta: '', body: w.text, photo: null, fly: { lon: w.lon, lat: w.lat, h: 900, pitch: -55 } };
      if (w.label === '访客中心') {
        addMarkerEntity(w.lon, w.lat, h + 8, w.label, popup, 'A', 0, null, 'place');
      } else if (w.fac) {
        const stag = nextStag();
        const pos = Cesium.Cartesian3.fromDegrees(w.lon, w.lat, h + 8);
        const e = viewer.entities.add({
          position: pos,
          point: { pixelSize: 5, color: Cesium.Color.fromCssColorString('#e0651f'), outlineColor: Cesium.Color.BLACK, outlineWidth: 2 },
        });
        e._popup = popup;
        const label = w.label;
        const cv = makeCanvas(300, 44, (ctx) => {
          ctx.fillStyle = 'rgba(255,252,243,0.94)'; // v9：补给站 pill 也换白底（v2.11.8 .marker 同款）
          ctx.beginPath(); ctx.roundRect(0, 0, 300, 44, 12); ctx.fill();
          ctx.strokeStyle = '#b9bfa9'; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = '#263c35'; ctx.font = 'bold 22px sans-serif';
          ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
          ctx.fillText(label, 14, 23);
          const tw = ctx.measureText(label).width;
          drawMed(ctx, 14 + tw + 10, 9, 26);
          drawWc(ctx, 14 + tw + 10 + 34, 9, 26);
        });
        const board = supplyBoards.add({
          position: pos, image: cv, width: 150, height: 22,
          pixelOffset: new Cesium.Cartesian2(0, -15 + stag),
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        });
        board._popup = popup;
        board.id = board; // pick 时 picked.id 就是它，_popup 才能被点击处理读到
        board._stag = stag; // B 档错开：pill 底边离锚点 25px（-10）或 5px（+10）
        tierBBoards.push(board);
        // 补给站的公告板标签不进 declutter（固定在点位正上方，不参与排叠）
      } else {
        addMarkerEntity(w.lon, w.lat, h + 8, w.label, popup, 'B', nextStag());
      }
    });
    // 3 停车场
    DATA.parking.forEach((p, i) => {
      const h = parkCarts[i].height ?? 600;
      addMarkerEntity(p.lon, p.lat, h + 8, '🅿 停车场',
        { title: `停车场 ${i + 1}`, meta: '景区公路边', body: '停车场，位于景区公路边。', photo: null, fly: { lon: p.lon, lat: p.lat, h: 900, pitch: -55 } }, 'B', nextStag(), null, 'park');
    });
    // 6 村子：点位 + “村庄”标注（v2.10.11 里村子没有名字，只有屋群落点；
    // 卫星图上本来就有真实屋顶，这里只落点位+标注，不另建 3D 房子、不编文案）
    DATA.villages.forEach((v, i) => {
      const h = vilCarts[i].height ?? 600;
      addMarkerEntity(v.lon, v.lat, h + 8, '村庄', null, 'B', nextStag());
    });
    // 3 设施：图标公告板（医疗红十字 / WC 徽），不带文字
    const facBoards = viewer.scene.primitives.add(new Cesium.BillboardCollection());
    DATA.facilities.forEach((f, i) => {
      const h = facCarts[i].height ?? 600;
      const stag = nextStag();
      const cv = makeCanvas(40, 40, (ctx) => {
        if (f.kind === 'med') drawMed(ctx, 2, 2, 36);
        else drawWc(ctx, 2, 2, 36);
      });
      const board = facBoards.add({
        position: Cesium.Cartesian3.fromDegrees(f.lon, f.lat, h + 10),
        image: cv, width: 20, height: 20,
        pixelOffset: new Cesium.Cartesian2(0, -15 + stag),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      });
      board._popup = { title: f.label, meta: '', body: f.text, photo: null, fly: { lon: f.lon, lat: f.lat, h: 900, pitch: -55 } };
      board.id = board; // pick 时 picked.id 就是它
      board._stag = stag; // B 档错开：图标底边离锚点 25px（-10）或 5px（+10）
      tierBBoards.push(board);
    });
  }

  // ---------- 四峰旗帜：旗杆（实例化圆柱）+ 红旗（盒子，慢速摆动） ----------
  // 东北天向矩阵（原在建树块里定义，树删后移到这里——旗杆仍要用）。
  const enuMatrix = (lon, lat, h) => Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(lon, lat, h));
  // v2.10.11：旗杆 3.4 单位、旗面 1.10×0.68 单位、红旗飘扬；Cesium 里按真实米
  // 折算后杆约 49m、旗 24×10m，会顶到四峰标签锚点（gridH+40m）——为避让标签，
  // 杆取 30m、旗 20×6m，旗顶 27m、标签锚点仍在 40m，互不遮挡。
  const flagPoles = [];
  const flagBoxes = [];
  {
    const poleGeo = Cesium.CylinderGeometry.createGeometry(new Cesium.CylinderGeometry({
      length: 30, topRadius: 0.5, bottomRadius: 0.5, radialSegments: 5 }));
    const inst = DATA.peaks.map((p) => {
      const base = enuMatrix(p.lon, p.lat, p.gridH);
      const m = Cesium.Matrix4.multiplyByTranslation(base, new Cesium.Cartesian3(0, 0, 15), new Cesium.Matrix4());
      return new Cesium.GeometryInstance({
        geometry: poleGeo, modelMatrix: m,
        attributes: { color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString('#3b2f12')) },
      });
    });
    viewer.scene.primitives.add(new Cesium.Primitive({
      geometryInstances: inst, appearance: new Cesium.PerInstanceColorAppearance({ flat: true }), asynchronous: false,
    }));
    DATA.peaks.forEach((p, i) => {
      const e = viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.gridH + 24),
        box: {
          dimensions: new Cesium.Cartesian3(20, 0.3, 6),
          material: Cesium.Color.fromCssColorString('#ac4931'),
        },
      });
      flagBoxes.push({ entity: e, peak: p, phase: [0, 0.9, 1.7, 2.6][i] });
    });
    log('四峰旗帜已建：杆 30m、旗 20×6m');
  }

  // ---------- 徒步者 40 名：闭合环线单向无限循环（v2.10.11 同款） ----------
  // 公告板小人（不是 40 个独立模型）：1 个 BillboardCollection，40 人 + 雨季 32 把伞。
  // 速度 22–32m/s、stride-7 均布、季节按人数显隐，均照 v2.10.11。
  const HIKER_COLS = ['#d68070', '#538e91', '#e2ad59', '#7994b4', '#b991a3', '#5f9e7f', '#c25a3c'];
  const hikerBoards = viewer.scene.primitives.add(new Cesium.BillboardCollection());
  const umbBoards = viewer.scene.primitives.add(new Cesium.BillboardCollection());
  const hikers = [];
  const hikerSprite = (color) => makeCanvas(32, 64, (ctx) => {
    ctx.fillStyle = '#f0c5a1';
    ctx.beginPath(); ctx.arc(16, 10, 7, 0, Math.PI * 2); ctx.fill(); // 头
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.roundRect(8, 19, 16, 26, 7); ctx.fill(); // 身
    ctx.fillStyle = '#333';
    ctx.fillRect(10, 45, 5, 15); ctx.fillRect(17, 45, 5, 15); // 腿
  });
  const umbSprite = (color) => makeCanvas(48, 28, (ctx) => {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(24, 24, 20, Math.PI, 0); ctx.closePath(); ctx.fill(); // 伞面
    ctx.fillStyle = '#666'; ctx.fillRect(23, 24, 2, 4); // 伞柄
  });
  const hikerSprites = HIKER_COLS.map((c) => hikerSprite(c));
  const umbSprites = HIKER_COLS.map((c) => umbSprite(c));
  function pointAtLoop(s) {
    let i = 1;
    while (i < loopCum.length - 1 && loopCum[i] < s) i++;
    const t = (s - loopCum[i - 1]) / Math.max(1e-6, loopCum[i] - loopCum[i - 1]);
    const a = loopPts[i - 1], b = loopPts[i];
    const ha = loopCarts[i - 1].height ?? 600, hb = loopCarts[i].height ?? 600;
    return { lon: a[0] + (b[0] - a[0]) * t, lat: a[1] + (b[1] - a[1]) * t, h: ha + (hb - ha) * t };
  }
  if (sampledOk) {
    for (let i = 0; i < 40; i++) {
      const s0 = ((i * 7) % 40) * loopTotal / 40;
      const board = hikerBoards.add({
        image: hikerSprites[i % HIKER_COLS.length], width: 3, height: 6, sizeInMeters: true,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        position: Cesium.Cartesian3.fromDegrees(107.0365, 23.155, 600),
      });
      let umb = null;
      if (i % 5 !== 4) {
        umb = umbBoards.add({
          image: umbSprites[(i + 2) % HIKER_COLS.length], width: 5, height: 2.8, sizeInMeters: true,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          position: Cesium.Cartesian3.fromDegrees(107.0365, 23.155, 607),
        });
      }
      hikers.push({ s: s0, speed: 22 + Math.random() * 10, board, umb });
    }
    groundStats.hikers = hikers.length;
    log(`徒步者已建：40 名，环线 ${Math.round(loopTotal)}m`);
  }

  // ---------- 雨：160 条雨丝（雨季才显示） ----------
  // 公告板竖线（不是每帧重建几何）：160 个小公告板，15fps 下落、触地回顶。
  const rainBoards = viewer.scene.primitives.add(new Cesium.BillboardCollection());
  rainBoards.show = false;
  const rainStreaks = [];
  const rainSprite = makeCanvas(8, 64, (ctx) => {
    const g = ctx.createLinearGradient(0, 0, 0, 64);
    g.addColorStop(0, 'rgba(127,163,184,0)');
    g.addColorStop(0.5, 'rgba(127,163,184,0.55)');
    g.addColorStop(1, 'rgba(127,163,184,0)');
    ctx.fillStyle = g; ctx.fillRect(3, 0, 2, 64);
  });
  if (sampledOk) {
    rainSeeds.forEach((p, i) => {
      const groundH = rainCarts[i].height ?? 600;
      const y = groundH + 20 + Math.random() * 180;
      const board = rainBoards.add({
        image: rainSprite, width: 0.5, height: 7, sizeInMeters: true,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
        position: Cesium.Cartesian3.fromDegrees(p[0], p[1], y),
      });
      rainStreaks.push({ lon: p[0], lat: p[1], groundH, y, board });
    });
  }

  // ---------- 四季：徒步者人数 / 雨 ----------
  let curSeason = 'spring';
  function applySeason(id) {
    if (!DATA.seasons[id]) return;
    curSeason = id;
    const s = DATA.seasons[id];
    rainBoards.show = (id === 'rain');
    const note = $('seasonNote');
    if (note) note.innerHTML = s.note + ' <a href="https://www.weather.com.cn/cityintro/101300201.shtml" target="_blank" rel="noopener">中国天气网 · 崇左 ↗</a>';
    document.querySelectorAll('#seasonChips .chip').forEach((b) => b.classList.toggle('on', b.dataset.season === id));
    window.__season = id;
    log(`季节：${s.label}，徒步者 ${s.hikers} 名`);
    viewer.scene.requestRender();
  }
  window.__applySeason = applySeason;

  // ---------- 标签排叠：按实际投影位置纵向排开（四峰 + 一级 + 二级全表） ----------
  // 总览视角（全景/水库）只留山顶点、不显示标签（按钮栏里已有峰名，
  // 点按钮飞过去再看标签——按缩放级别取舍标注的常规做法）；
  // 四峰特写视角（约 1170m）正常显示标签，途点等 B 档在 ≤1500m 时出现。
  // 规则（沿用 stage-1 的返修终版，推广到全表）：
  // (a) 锚点投影出视口（留边距）的标签直接隐藏，排叠不许把它拉回视口内；
  // (b) 特写里重叠的标签沿纵向排开直到不重叠，排不开的隐藏，
  //     但当前视角主峰自己的标签必须可见：主峰先定位置，其他标签
  //     在主峰上下两侧分别排开（不再全部挤到主峰下方）；
  // (c) pill 不得压住底部按钮栏和标题卡，横向夹紧不出视口左右；
  // (d) 切换视角、手动缩放/拖动、窗口尺寸变化后都重新排
  //     （camera.moveEnd + 300ms 后再排一次防惯性未停稳 + resize，
  //     飞行落定后的 1900ms 定时是兜底）。
  // ---------- 引出线（v2.11.7 同步 v2.11.6）：B 档标注各一条线，从 pill 底边连回自己的锚点 ----------
  // SVG 覆盖层盖在 canvas 上（pointer-events:none，不挡点击/拖动）；线 1px、#4a5a50、
  // 基础不透明度 0.45，再乘以该标注的距离不透明度；随 pill 每帧移动、随 pill 一起显隐。
  // A 档（四峰/一级）无引出线。线数据存在 window.__leaderLines 里供探针核对。
  const leaderSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  leaderSvg.setAttribute('id', 'leaderLines');
  leaderSvg.setAttribute('style', 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2');
  $('cesiumContainer').appendChild(leaderSvg);
  const leaderPool = []; // 复用 <line>，免得每帧重建 DOM
  window.__leaderLines = [];
  // 坑：e.billboard.show 是 Property 对象，恒为真值——不能用 !e.billboard.show
  // 判断，必须用本地布尔值 shown，否则出界标签会混进排叠、把别的标签全挤掉。
  const MIN_GAP = 28;
  let labelsEnabled = false; // 初始视角是全景，总览不显示标签
  let currentMainPeak = null; // 当前特写视角的主峰实体（总览视角为 null）
  window.__labelBoxes = [];
  const declutterLabels = () => {
    const h = viewer.camera.positionCartographic.height;
    const showA = labelsEnabled && h <= 2000;
    const showB = labelsEnabled && h <= 1500;
    // v2.11.7 同步（v2.11.1/v2.11.2）：B 档标注按相机距离渐变透明——
    // 拉远（h≥1500m）0.6、拉近（h≤1150m）1.0，中间线性；A 档可见时恒 1.0。
    // 映射口径：Three.js size 35（全景）↔ h 1500m，size 12（近景）↔ h 1150m；
    // B 档只在 h≤1500m 显示，所以 0.6→1.0 的渐变正好落在它的可见区间里。
    const distOp = h >= 1500 ? 0.6 : h <= 1150 ? 1.0 : 0.6 + 0.4 * (1500 - h) / 350;
    const leaderData = []; // 本轮的引出线：{x1,y1,x2,y2,op}，pill 底边中心 → 自己的锚点
    const cw = viewer.scene.canvas.clientWidth, ch = viewer.scene.canvas.clientHeight;
    const viewsTop = $('dock').getBoundingClientRect().top;
    const titleRect = $('topbar').getBoundingClientRect();
    // pill 中心纵向安全带：顶缘留 30px，底缘在按钮栏之上
    const safeTop = 30, safeBottom = Math.max(safeTop, viewsTop - 13 - 2);
    const items = [];
    window.__labelBoxes = [];
    for (const it of labelItems) {
      const showTier = it.tier === 'A' ? showA : showB;
      const s = viewer.scene.cartesianToCanvasCoordinates(it.anchor);
      // (a) 锚点须在视口内（留边距）；pill 贴在锚点上方，
      //     所以锚点纵向可到安全带底缘 +30（pill 自然位置仍在带内），
      //     再低 pill 就要压按钮栏——主峰也一样，排叠会把它夹紧到带内
      const inView = s && s.x > 20 && s.x < cw - 20 && s.y > 15 && s.y < safeBottom + 30;
      const shown = showTier && inView;
      it.entity.billboard.show = shown;
      if (!shown) continue;
      // 距离透明度：B 档按 distOp 渐变，A 档恒 1.0（每轮重设，高度变化后跟上）
      const op = it.tier === 'A' ? 1 : distOp;
      // 白底 pill 是整张 canvas 纹理：透明度用 billboard.color 整体乘
      // （白底 × 白色带 alpha = 渐隐；v9 前是分开设 label 的 fill/outline/background）
      it.entity.billboard.color = Cesium.Color.WHITE.withAlpha(op);
      items.push({ ...it, x: s.x, y: s.y, main: it.entity === currentMainPeak });
    }
    // B 档公告板（补给站标签、设施图标）：与 B 档标签同显隐（只判高度+视口，不排叠）
    // 透明度与 B 档标签同步；引出线从公告板底边中心连回锚点（底边离锚点 25px 或 5px）
    for (const b of tierBBoards) {
      const s = viewer.scene.cartesianToCanvasCoordinates(b.position);
      b.show = showB && !!s && s.x > 10 && s.x < cw - 10 && s.y > 10 && s.y < ch - 10;
      if (b.show) {
        b.color = Cesium.Color.WHITE.withAlpha(distOp);
        const bottomY = s.y - 15 + (b._stag || 0);
        leaderData.push({ x1: s.x, y1: bottomY, x2: s.x, y2: s.y, op: distOp });
      }
    }
    // (c) 横向夹紧：pill 不出视口左右；若 pill 大幅压住标题卡，横向挪开
    //     （标题卡在小屏上占半幅宽，只上下移会把标签挤出安全带；
    //     挪开后 pill 仍在锚点附近；只擦到标题卡边缘（≤4px）的不挪）
    const computeOx = (it, target) => {
      let ox = 0;
      if (it.x - it.halfW < 4) ox = 4 - (it.x - it.halfW);
      else if (it.x + it.halfW > cw - 4) ox = cw - 4 - (it.x + it.halfW);
      const pillTop = target - it.halfH, pillBottom = target + it.halfH;
      const vOverlap = Math.min(pillBottom, titleRect.bottom - 2) - Math.max(pillTop, titleRect.top + 2);
      if (vOverlap > 4) {
        const left = it.x + ox - it.halfW, right = it.x + ox + it.halfW;
        if (right > titleRect.left + 2 && left < titleRect.right - 2) {
          const shiftRight = titleRect.right + 2 - left;
          const shiftLeft = titleRect.left - 2 - right;
          if (it.x + ox + shiftRight + it.halfW <= cw - 4) ox += shiftRight;
          else if (it.x + ox + shiftLeft - it.halfW >= 4) ox += shiftLeft;
        }
      }
      return ox;
    };
    const placeOne = (it, target) => {
      const ox = computeOx(it, target);
      it.entity.billboard.pixelOffset = new Cesium.Cartesian2(ox, target - it.y + it.halfH);
      window.__labelBoxes.push({
        name: it.entity.name || it.entity._popup?.title || '',
        x: Math.round(it.x + ox - it.halfW), y: Math.round(target - it.halfH),
        w: it.halfW * 2, h: it.halfH * 2,
        ax: Math.round(it.x), ay: Math.round(it.y), // 锚点（供验证：pill 不得压住自己的锚点圆点）
      });
      // B 档引出线：从 pill 底边中心连回自己的锚点（pill 被排叠挪开后线跟着走）
      if (it.tier === 'B') {
        leaderData.push({ x1: it.x + ox, y1: target + it.halfH, x2: it.x, y2: it.y, op: distOp });
      }
      return target;
    };
    const hitsTitle = (centerY, x, ox = 0, halfW = 75, halfH = 13) => {
      const top = centerY - halfH, bottom = centerY + halfH;
      const left = x + ox - halfW, right = x + ox + halfW;
      return right > titleRect.left + 2 && left < titleRect.right - 2 &&
        bottom > titleRect.top + 2 && top < titleRect.bottom - 2;
    };
    // (b) 主峰先定位置（自然位置夹紧到安全带内，避开标题卡）
    const mainItem = items.find((it) => it.main);
    let mainTarget = null;
    if (mainItem) {
      let t = mainItem.y + mainItem.dy;
      if (t < safeTop) t = safeTop;
      if (t > safeBottom) t = safeBottom;
      if (hitsTitle(t, mainItem.x, computeOx(mainItem, t), mainItem.halfW, mainItem.halfH)) {
        t = Math.min(titleRect.bottom + mainItem.halfH + 2, safeBottom);
      }
      // pill 底缘不得压住自己的锚点圆点（锚点在正上方是既定规则）：只许往上挪
      if (t + mainItem.halfH > mainItem.y - 6) t = mainItem.y - mainItem.halfH - 6;
      mainTarget = placeOne(mainItem, t);
    }
    const others = items.filter((it) => !it.main);
    if (mainTarget === null) {
      // 主峰不在视口内：按锚点 y 自上而下贪心排开
      others.sort((a, b) => a.y - b.y);
      let prev = -Infinity;
      for (const it of others) {
        let target = Math.max(it.y + it.dy, prev + MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target), it.halfW, it.halfH)) {
          target = titleRect.bottom + it.halfH + 2;
        }
        if (target < safeTop) target = safeTop;
        if (target > safeBottom) { it.entity.billboard.show = false; continue; }
        // 往下排时 pill 底缘不得压住自己的锚点圆点：排不下就隐藏，不硬盖
        // （B 档 +10 的 pill 自然底缘离锚点只有 5px，阈值放宽到 3px 才留得住）
        if (target + it.halfH > it.y - (it.tier === 'B' ? 3 : 6)) { it.entity.billboard.show = false; continue; }
        prev = placeOne(it, target);
      }
    } else {
      // 上方组：离主峰近的先排，向上依次排开
      const above = others.filter((it) => it.y + it.dy < mainTarget).sort((a, b) => (b.y + b.dy) - (a.y + a.dy));
      let prevAbove = mainTarget;
      for (const it of above) {
        let target = Math.min(it.y + it.dy, prevAbove - MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target), it.halfW, it.halfH)) {
          target = titleRect.bottom + it.halfH + 2;
        }
        if (target > prevAbove - MIN_GAP || target < safeTop) { it.entity.billboard.show = false; continue; }
        prevAbove = placeOne(it, target);
      }
      // 下方组：离主峰近的先排，向下依次排开
      const below = others.filter((it) => it.y + it.dy >= mainTarget).sort((a, b) => (a.y + a.dy) - (b.y + b.dy));
      let prevBelow = mainTarget;
      for (const it of below) {
        let target = Math.max(it.y + it.dy, prevBelow + MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target), it.halfW, it.halfH)) {
          target = titleRect.bottom + it.halfH + 2;
        }
        if (target > safeBottom) { it.entity.billboard.show = false; continue; }
        if (target < prevBelow + MIN_GAP) target = prevBelow + MIN_GAP;
        if (target > safeBottom) { it.entity.billboard.show = false; continue; }
        // 往下排时 pill 底缘不得压住自己的锚点圆点：排不下就隐藏，不硬盖
        // （B 档 +10 的 pill 自然底缘离锚点只有 5px，阈值放宽到 3px 才留得住）
        if (target + it.halfH > it.y - (it.tier === 'B' ? 3 : 6)) { it.entity.billboard.show = false; continue; }
        prevBelow = placeOne(it, target);
      }
    }
    // 引出线同步到 SVG：只画本轮已放置的 B 档（隐藏的标注线也隐藏）
    window.__leaderLines = leaderData;
    leaderData.forEach((d, i) => {
      let ln = leaderPool[i];
      if (!ln) {
        ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ln.setAttribute('stroke', '#4a5a50');
        ln.setAttribute('stroke-width', '1');
        ln.setAttribute('stroke-linecap', 'round');
        leaderSvg.appendChild(ln);
        leaderPool.push(ln);
      }
      ln.setAttribute('x1', d.x1.toFixed(1)); ln.setAttribute('y1', d.y1.toFixed(1));
      ln.setAttribute('x2', d.x2.toFixed(1)); ln.setAttribute('y2', d.y2.toFixed(1));
      ln.setAttribute('stroke-opacity', (0.45 * d.op).toFixed(3));
      ln.style.display = '';
    });
    for (let i = leaderData.length; i < leaderPool.length; i++) leaderPool[i].style.display = 'none';
    viewer.scene.requestRender();
  };
  window.__declutter = declutterLabels;
  window.__debugLabels = () => ({
    labelsEnabled, mainPeak: currentMainPeak ? currentMainPeak.name : null,
    height: viewer.camera.positionCartographic.height,
    labelBoxes: window.__labelBoxes.length,
    distOp: viewer.camera.positionCartographic.height >= 1500 ? 0.6
      : viewer.camera.positionCartographic.height <= 1150 ? 1.0
      : 0.6 + 0.4 * (1500 - viewer.camera.positionCartographic.height) / 350,
    leaderLines: window.__leaderLines.length,
    l2StagN,
  });
  viewer.camera.moveEnd.addEventListener(() => {
    viewer.scene.globe.maximumScreenSpaceError = REST_MSSE; // 停稳恢复全细节
    declutterLabels(); setTimeout(declutterLabels, 300);
    saveView(); // 窄屏才存（saveView 内部 gate，电脑端不写）
  });
  window.addEventListener('resize', () => {
    setTimeout(declutterLabels, 100);
    // 尺寸变化也会触发 moveStart（msse 升到 4）却不一定有 moveEnd——这里兜底恢复 2
    setTimeout(() => { viewer.scene.globe.maximumScreenSpaceError = REST_MSSE; }, 200);
  });

  // ---------- 近景拖动放慢（v2.11.7 同步 v2.11.3）：拉得越近转得越慢，全景不变 ----------
  // 实测（v6，2026-11-26）：Cesium 的左拖是 pan3D——相机沿地面平移、朝向不变，
  // 地面点 1:1 跟随手指；近景时锚点（峰）比拾取点（视野中心地面）离相机近得多，
  // 视差让锚点屏上位移 193px/100px，比全景 114px 快 1.69 倍。
  // 做法：关掉控制器的左拖（enableRotate=false，只关 spin3D；捏合、滚轮、右拖、
  // 倾斜、Shift+拖动都不走这条路，不受影响），自己接 LEFT_DRAG，用同样的
  // “拾取点跟随手指”平移，但把手指位移乘一个随相机高度变化的缩放系数。
  // 系数用两处实测标定：全景 h=3000m 时 1.0，1号峰近景 h≈1150m 时 0.59
  // （193×0.59≈114，与全景一致），中间线性，低于 1150m 不低于 0.3。
  const dragScaleForHeight = (hh) => {
    const s = 0.59 + (hh - 1150) * 0.41 / 1850;
    return Math.min(1, Math.max(0.3, s));
  };
  window.__dragScaleForHeight = dragScaleForHeight;
  ctrl.enableRotate = false; // 控制器左拖（spin3D/pan3D）停用，改走下面的缩放版
  const dragState = { pick: null, startMouse: null, lastT: null, lastMoveAt: 0, prevMoveAt: 0, glideTimer: null };
  window.__dragDebug = { down: 0, drag: 0, up: 0, dragNoPick: 0, dragNullRay: 0, dragErr: '' };
  const dragGlobePick = (mx, my) => {
    try {
      const ray = viewer.camera.getPickRay(new Cesium.Cartesian2(mx, my));
      if (!ray) return null;
      const p = viewer.scene.globe.pick(ray, viewer.scene);
      if (p) return p;
      return viewer.camera.pickEllipsoid(new Cesium.Cartesian2(mx, my), viewer.scene.globe.ellipsoid) || null;
    } catch (e) { return null; }
  };
  // 把 dragState.pick 平移到“虚拟手指”(mx,my) 的射线上去：相机纯平移，朝向不动
  const dragTranslateTo = (mx, my) => {
    const cam = viewer.camera;
    const d = Cesium.Cartesian3.distance(dragState.pick, cam.position);
    const ray = cam.getPickRay(new Cesium.Cartesian2(mx, my));
    if (!ray) return null;
    const p1 = Cesium.Cartesian3.add(cam.position, Cesium.Cartesian3.multiplyByScalar(ray.direction, d, new Cesium.Cartesian3()), new Cesium.Cartesian3());
    const T = Cesium.Cartesian3.subtract(dragState.pick, p1, new Cesium.Cartesian3());
    Cesium.Cartesian3.add(cam.position, T, cam.position);
    return T;
  };
  const stopDragGlide = () => {
    if (dragState.glideTimer) { clearInterval(dragState.glideTimer); dragState.glideTimer = null; }
  };
  window.__stopDragGlide = stopDragGlide;
  viewer.screenSpaceEventHandler.setInputAction((movement) => {
    stopDragGlide();
    window.__dragDebug.down++;
    // 注意：LEFT_DOWN 传的是 {position}（不是直接的 Cartesian2），
    // 写成 pos.x 会是 undefined、起点拾到左上角 (0,0)——v7 第一版就栽在这里。
    const pos = movement.position;
    dragState.pick = dragGlobePick(pos.x, pos.y);
    dragState.startMouse = { x: pos.x, y: pos.y };
    dragState.lastT = null;
    dragState.lastMoveAt = 0; dragState.prevMoveAt = 0;
  }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
  // 注意：ScreenSpaceEventHandler 根本不发 LEFT_DRAG——拖动是 CameraEventAggregator
  // （控制器内部自己建的 handler）用 MOUSE_MOVE + DOWN/UP 合成的；在本 handler 上
  // 注册 LEFT_DRAG 永远不会触发（v7 第二版就栽在这里，drag 计数恒为 0）。
  // 所以这里接 MOUSE_MOVE，靠 LEFT_DOWN/LEFT_UP 维护的拖动状态判断是否在左拖中。
  viewer.screenSpaceEventHandler.setInputAction((movement) => {
    window.__dragDebug.drag++;
    if (!dragState.pick || !dragState.startMouse) { window.__dragDebug.dragNoPick++; return; } // 没按着左键拖（只是移动鼠标）或起点是天空：不动
    const s = dragState.startMouse, e = movement.endPosition;
    const scale = dragScaleForHeight(viewer.camera.positionCartographic.height);
    const vx = s.x + (e.x - s.x) * scale;
    const vy = s.y + (e.y - s.y) * scale;
    let T = null;
    try {
      T = dragTranslateTo(vx, vy);
    } catch (err) { window.__dragDebug.dragErr = String(err).slice(0, 150); return; }
    if (!T) { window.__dragDebug.dragNullRay++; return; }
    dragState.prevMoveAt = dragState.lastMoveAt || Date.now();
    dragState.lastMoveAt = Date.now();
    dragState.lastT = T;
    viewer.scene.requestRender();
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  // 松开后滑行：按最后一次平移速度衰减（0.85/帧，约 200ms 停），与控制器惯性同感；
  // 速度按毫秒归一化（mousemove 间隔不固定），总量封顶，不会飞出去
  viewer.screenSpaceEventHandler.setInputAction(() => {
    window.__dragDebug.up++;
    const pick = dragState.pick;
    dragState.pick = null;
    if (!pick || !dragState.lastT || Date.now() - dragState.lastMoveAt > 300) return;
    const dt = Math.max(8, dragState.lastMoveAt - dragState.prevMoveAt);
    const vel = Cesium.Cartesian3.multiplyByScalar(dragState.lastT, 1 / dt, new Cesium.Cartesian3()); // 米/毫秒
    const speed = Cesium.Cartesian3.magnitude(vel);
    if (speed < 0.01) return; // 太慢就不用滑了
    let i = 0;
    dragState.glideTimer = setInterval(() => {
      i++;
      const f = Math.pow(0.85, i);
      if (f < 0.05 || i > 12) { stopDragGlide(); return; }
      const step = Cesium.Cartesian3.multiplyByScalar(vel, 16 * f, new Cesium.Cartesian3());
      Cesium.Cartesian3.add(viewer.camera.position, step, viewer.camera.position);
      viewer.scene.requestRender();
    }, 16);
  }, Cesium.ScreenSpaceEventType.LEFT_UP);
  window.__dragState = dragState;

  // ---------- 视角预设（v2.11.7 的 9 个：全景/鸟瞰/1/2/3/5号峰/入口/出口/水库） ----------
  // 峰预设按公式（峰经度，峰纬度-0.004，gridH+450，-35°）自动跟峰位走，
  // 归元峰东南移 62.6m 后预设也跟着移（v2.11.0 的重拟合在 Cesium 里由公式承担，
  // 渲染时再验）；入口/出口预设按 v2.11.7 的视角（入口 107.041,23.1581；出口
  // 107.040969,23.156357）用同一公式换算：相机在目标南 0.004°、地面高 +450m。
  const fly = (lon, lat, height, pitchDeg, duration = 1.6) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      orientation: { heading: 0, pitch: D2R(pitchDeg), roll: 0 },
      duration,
    });
  };
  window.__fly = fly;
  const views = [
    { name: '全景', labels: false, run: () => fly(107.0365, 23.1445, 3000, -55) },
    { name: '鸟瞰', labels: false, run: () => fly(107.0365, 23.1550, 3000, -90) },
    ...DATA.peaks.map((p, j) => ({
      name: `${p.num}号峰 ${p.short}`,
      labels: true,
      peak: peakEntities[j],
      run: () => fly(p.lon, p.lat - 0.004, p.gridH + 450, -35),
    })),
    { name: '入口', labels: true, run: () => fly(107.041, 23.1581 - 0.004, (entCart.height ?? 488) + 450, -35) },
    { name: '出口', labels: true, run: () => fly(107.040969, 23.156357 - 0.004, (parkExitCart.height ?? 498) + 450, -35) },
    { name: '伏曼水库', labels: false, run: () => fly(DATA.lake.center[0], DATA.lake.center[1] - 0.0035, 1700, -55) },
  ];
  // v9 换肤：9 个视角预设收进「视角」面板（#viewChips 的 chip 按钮），
  // 底栏改成 dock（四季/场景/视角/图例/笔记/景区，静态 HTML，见 index.html）。
  const viewChipsEl = $('viewChips');
  let currentViewName = '全景'; // 刷新按钮用：回当前视角的初始状态
  const applyViewByName = (name) => {
    const v = views.find((x) => x.name === name);
    if (!v) return false;
    viewChipsEl.querySelectorAll('button[data-view]').forEach((x) => x.classList.remove('on'));
    const b = [...viewChipsEl.querySelectorAll('button[data-view]')].find((x) => x.textContent === name);
    if (b) b.classList.add('on');
    window.__view = v.name;
    currentViewName = v.name;
    labelsEnabled = v.labels !== false;
    currentMainPeak = v.peak || null;
    stopDragGlide(); // 预设飞行前停掉手动拖动的滑行，免得滑行和飞行打架
    v.run();
    setTimeout(declutterLabels, 1900); // 飞行 1.6s 落定后再排标签（moveEnd 也会触发一次）
    return true;
  };
  views.forEach((v, i) => {
    const b = document.createElement('button');
    b.className = 'chip';
    b.dataset.view = v.name;
    b.innerHTML = `<span class="t">${v.name}</span>`;
    b.onclick = () => applyViewByName(v.name);
    viewChipsEl.appendChild(b);
    if (i === 0) b.classList.add('on');
  });
  window.__views = views.map((v) => v.name);
  window.__applyView = (name) => applyViewByName(name);
  // 顶栏刷新（回当前视角初始状态）/ 首页（回全景 + 停定位；v2.11.8 里 ⌂ 是回全景）
  $('refreshBtn').addEventListener('click', () => {
    if (!applyViewByName(currentViewName)) applyViewByName('全景');
  });
  $('homeBtn').addEventListener('click', () => { stopLocate(); applyViewByName('全景'); });

  // ---------- 浮层：一次只开一个（sheet / 聊天 / 弹窗互斥） ----------
  let photosCache = null;
  async function loadPhotos() {
    if (photosCache) return photosCache;
    try {
      photosCache = await (await fetch('./photos.json')).json();
    } catch (e) { photosCache = {}; log('photos.json 加载失败：' + e); }
    return photosCache;
  }
  function closeSheets() {
    document.querySelectorAll('.sheet').forEach((s) => { s.hidden = true; });
    document.querySelectorAll('#dock button[data-sheet]').forEach((b) => b.classList.remove('on'));
    $('nearbyBtn')?.classList.remove('on');
  }
  function closeChat() { $('chatPanel').hidden = true; }
  function closeDetail() { $('detail').hidden = true; }
  function closeAllOverlays() { closeSheets(); closeChat(); closeDetail(); }
  function openSheet(id) {
    const sh = $('sheet-' + id);
    if (!sh) return;
    const wasHidden = sh.hidden;
    closeAllOverlays();
    if (wasHidden) {
      sh.hidden = false;
      const btn = document.querySelector(`#dock button[data-sheet="${id}"]`);
      if (btn) btn.classList.add('on');
      if (id === 'nearby') { nearbyRender(); $('nearbyBtn')?.classList.add('on'); }
    }
    viewer.scene.requestRender();
  }
  window.__openSheet = openSheet;
  document.querySelectorAll('.sheet [data-close]').forEach((b) => b.addEventListener('click', closeSheets));
  // v9 dock：6 个按钮（四季/场景/视角/图例/笔记/景区）——场景 = 底图切换（见 BUILD-NOTES 对应表）
  document.querySelectorAll('#dock button[data-sheet]').forEach((b) => b.addEventListener('click', () => openSheet(b.dataset.sheet)));
  $('detailX').addEventListener('click', closeDetail);
  $('nearbyBtn').addEventListener('click', () => openSheet('nearby'));

  // ---------- 详情弹窗（v2.10.11 的样式：照片 16:9 + 标题 + meta + 正文 + 导航） ----------
  async function showDetail(title, meta, body, photoKey, navUrl, flyTo) {
    closeAllOverlays();
    $('detailTitle').textContent = title;
    $('detailMeta').textContent = meta || '';
    $('detailBody').textContent = body || '';
    const ph = $('detailPhoto'), img = $('detailPhotoImg');
    let src = null;
    if (photoKey) {
      const photos = await loadPhotos();
      src = photos[photoKey] || null;
    }
    if (src) { img.src = src; ph.hidden = false; } else { ph.hidden = true; img.removeAttribute('src'); }
    const nv = $('detailNav');
    if (navUrl) { nv.href = navUrl; nv.hidden = false; } else { nv.hidden = true; nv.removeAttribute('href'); }
    $('detail').hidden = false;
    if (flyTo) {
      labelsEnabled = true;
      currentMainPeak = null;
      fly(flyTo.lon, flyTo.lat, flyTo.h, flyTo.pitch ?? -55);
      setTimeout(declutterLabels, 1900);
    }
    viewer.scene.requestRender();
  }
  window.__openDetail = (title) => {
    const all = [...viewer.entities.values];
    const e = all.find((x) => x._popup && x._popup.title === title);
    if (e) { const p = e._popup; showDetail(p.title, p.meta, p.body, p.photo, null, p.fly); return true; }
    for (const b of tierBBoards) {
      if (b._popup && b._popup.title === title) {
        const p = b._popup; showDetail(p.title, p.meta, p.body, p.photo, null, p.fly); return true;
      }
    }
    return false;
  };

  // ---------- 定位：GPS 蓝点 + 精度圈（v2.10.11 同款逻辑） ----------
  // watchPosition 持续跟踪；首次定位成功镜头飞到该点；之后人走动蓝点跟着走，
  // 镜头不动。范围外 / 失败 / 无权限只弹一句友好提示，不报错不卡住。
  // 页面须 HTTPS 才有定位（GitHub Pages 是 HTTPS）；微信内置浏览器可用，不用接 JS-SDK。
  const GEO_BBOX = { lon0: 107.02325, lon1: 107.04975, lat0: 23.142, lat1: 23.168 };
  let geoWatch = null, geoFirst = true, userLoc = null;
  let geoDotEnt = null, geoAccEnt = null, geoPulseEnt = null, geoAccR = 20;
  const geoToast = (msg) => {
    const t = $('toast'); if (!t) return;
    t.textContent = msg; t.hidden = false;
    clearTimeout(t._h); t._h = setTimeout(() => { t.hidden = true; }, 3800);
  };
  function geoMakeDot() {
    if (geoDotEnt) return;
    geoDotEnt = viewer.entities.add({
      point: { pixelSize: 14, color: Cesium.Color.fromCssColorString('#2f7bff'), outlineColor: Cesium.Color.WHITE, outlineWidth: 3, disableDepthTestDistance: Number.POSITIVE_INFINITY },
      position: Cesium.Cartesian3.fromDegrees(107.0365, 23.155, 600),
    });
    geoAccEnt = viewer.entities.add({
      ellipse: {
        semiMajorAxis: 20, semiMinorAxis: 20,
        material: Cesium.Color.fromCssColorString('#2f7bff').withAlpha(0.16),
        outline: true, outlineColor: Cesium.Color.fromCssColorString('#2f7bff').withAlpha(0.45),
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      },
      position: Cesium.Cartesian3.fromDegrees(107.0365, 23.155, 0),
    });
    geoPulseEnt = viewer.entities.add({
      ellipse: {
        semiMajorAxis: 20, semiMinorAxis: 20,
        material: new Cesium.ColorMaterialProperty(new Cesium.Color(0.18, 0.48, 1.0, 0.5)),
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
      },
      position: Cesium.Cartesian3.fromDegrees(107.0365, 23.155, 0),
    });
    geoDotEnt.show = false; geoAccEnt.show = false; geoPulseEnt.show = false;
  }
  function geoPlace(lon, lat, acc) {
    geoAccR = Math.max(10, acc || 20);
    geoDotEnt.position = Cesium.Cartesian3.fromDegrees(lon, lat, 0);
    geoDotEnt.point.heightReference = Cesium.HeightReference.CLAMP_TO_GROUND;
    geoDotEnt.show = true;
    geoAccEnt.position = Cesium.Cartesian3.fromDegrees(lon, lat, 0);
    geoAccEnt.ellipse.semiMajorAxis = geoAccR;
    geoAccEnt.ellipse.semiMinorAxis = geoAccR;
    geoAccEnt.show = true;
    geoPulseEnt.position = Cesium.Cartesian3.fromDegrees(lon, lat, 0);
    geoPulseEnt.show = true;
  }
  function onGeoPos(pos) {
    if (geoWatch === null) return; // 停止后到的定位不处理
    const lon = pos.coords.longitude, lat = pos.coords.latitude, acc = pos.coords.accuracy;
    if (lon < GEO_BBOX.lon0 || lon > GEO_BBOX.lon1 || lat < GEO_BBOX.lat0 || lat > GEO_BBOX.lat1) {
      geoToast('当前位置不在地图范围内'); return;
    }
    geoMakeDot(); geoPlace(lon, lat, acc);
    userLoc = { lon, lat };
    if (geoFirst) {
      geoFirst = false;
      const h = Math.min(viewer.camera.positionCartographic.height, 1200);
      fly(lon, lat, h, -55);
      geoToast(`已定位，精度约 ±${Math.round(acc || 20)} 米`);
    }
    // 附近推荐是固定顺序（v2.11.5），定位后不重排，这里不再刷新面板
  }
  function onGeoErr() {
    if (geoWatch === null) return;
    geoToast('无法获取位置，请在浏览器/微信里允许定位权限');
    stopLocate();
  }
  function startLocate() {
    if (typeof navigator === 'undefined' || !('geolocation' in navigator)) {
      geoToast('无法获取位置，请在浏览器/微信里允许定位权限'); return;
    }
    if (geoWatch !== null) return;
    geoFirst = true;
    geoWatch = navigator.geolocation.watchPosition(onGeoPos, onGeoErr, { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 });
    $('locateBtn').classList.add('on');
  }
  function stopLocate() {
    if (geoWatch !== null && typeof navigator !== 'undefined' && navigator.geolocation && navigator.geolocation.clearWatch) {
      navigator.geolocation.clearWatch(geoWatch);
    }
    geoWatch = null;
    const t = $('toast'); if (t) { clearTimeout(t._h); t.hidden = true; }
    userLoc = null;
    if (geoDotEnt) geoDotEnt.show = false;
    if (geoAccEnt) geoAccEnt.show = false;
    if (geoPulseEnt) geoPulseEnt.show = false;
    $('locateBtn').classList.remove('on');
  }
  $('locateBtn').addEventListener('click', () => { if (geoWatch !== null) stopLocate(); else startLocate(); });
  window.__locateState = () => ({ watching: geoWatch !== null, userLoc });

  // ---------- 附近推荐（v2.11.7 同步：固定顺序，定位不重排） ----------
  // 顺序固定为峒那屿湾、伏那秘境、德天瀑布、名仕田园（DATA.nearby 的数组顺序）；
  // 距离一律从剑龙山景区中心算，定位后也不按 GPS 重排（v2.11.5 的用户决定）；
  // 伏那秘境用真实坐标 (107.02, 22.86)，显示约 32.8 公里；四家导航统一走
  // 高德名称搜索（v2.10.2 的方式，v2.11.7 修正后确认）。定位只显示蓝点。
  const JLS_CENTER = { lon: 107.0365, lat: 23.1550 };
  function nearbyDistM(aLon, aLat, bLon, bLat) {
    const R = 6371000, dLa = (bLat - aLat) * Math.PI / 180, dLo = (bLon - aLon) * Math.PI / 180;
    const la1 = aLat * Math.PI / 180, la2 = bLat * Math.PI / 180;
    const h = Math.sin(dLa / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLo / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const nearbyFmt = (m) => (m < 1000 ? '约 ' + Math.round(m) + ' 米' : '约 ' + (m / 1000).toFixed(1) + ' 公里');
  const nearbySorted = () => DATA.nearby.map((s) => ({ s, d: nearbyDistM(JLS_CENTER.lon, JLS_CENTER.lat, s.lon, s.lat) }));
  const nearbyNavUrl = (name) => 'https://uri.amap.com/search?keyword=' + encodeURIComponent(name);
  function nearbyOpenSpot(s) {
    const d = nearbyDistM(JLS_CENTER.lon, JLS_CENTER.lat, s.lon, s.lat);
    const meta = (s.grade ? s.grade + ' · ' : '') + nearbyFmt(d) + '（直线距离）';
    showDetail(s.name, meta, s.intro + '\n位置：' + s.loc, null, nearbyNavUrl(s.name), null);
  }
  function nearbyRender() {
    const list = $('nearbyList'), note = $('nearbyNote');
    if (!list) return;
    if (note) note.textContent = '距剑龙山景区中心 · 直线距离（非车程）';
    list.innerHTML = '';
    for (const it of nearbySorted()) {
      const s = it.s;
      const row = document.createElement('div');
      row.className = 'nrow';
      row.innerHTML = '<div class="nhead"><span class="nico">' + s.icon + '</span><span class="nname">' + s.name + '</span><span class="ndist">' + nearbyFmt(it.d) + '</span></div><div class="nintro">' + s.intro + '</div><div class="nloc">' + s.loc + '</div>';
      row.addEventListener('click', () => nearbyOpenSpot(s));
      list.appendChild(row);
    }
  }
  function nearbyChatHtml() {
    const items = nearbySorted();
    let h = '📍 附近推荐景点（距剑龙山景区中心，直线距离）：<br>';
    h += items.map((it, i) => {
      const s = it.s;
      return (i + 1) + '. <b>' + s.name + '</b>' + ' · ' + nearbyFmt(it.d) + '<br><span style="color:#cfe0ef">' + s.intro + '</span><br>' +
        '<button class="mapbtn" data-near="' + s.name + '">📖 简介</button> ' +
        '<a class="mapbtn" href="' + nearbyNavUrl(s.name) + '" target="_blank" rel="noopener">🧭 导航</a>';
    }).join('<br>');
    return h;
  }

  // ---------- 景区小助理：轻量关键词问答（内容照 v2.11.7，数字按 4.kml 改） ----------
  // 环线 2.1km→2.2km、三段 778/833/536m→1036/889/308m（4.kml 实测长度，
  // 含两段直连 chord）；第三段名字从“东侧返程”改成“应急通道（下山中间的路）”；
  // 入口按钮坐标改成 4.kml 的登山入口 (107.0407, 23.158298)；
  // 四峰标高用 KML（637/693/694/677，与地图标签一致）。
  // 其余文案（时间、门票、电话、地址）一字不动。
  const CHAT_TOPICS = [
    { id: 'nearby', label: '附近推荐景点', kw: ['附近', '推荐', '最近', '周边', '周围', '去哪'], ans: '', nearby: true },
    { id: 'peaks', label: '四峰导览', kw: ['四峰', '峰', '初脊', '剑板', '天柱', '归元', '山峰', '板峰', '看什么', '景点'],
      ans: '剑龙山四峰，点一个看介绍，也可以点“📍 在地图上看”飞过去。', peaks: true },
    { id: 'route', label: '水库环线', nochip: true, kw: ['环线', '路线', '登山', '下山', '怎么走', '怎么玩', '行程', '徒步', '爬山'],
      ans: '🗺️ 水库环线（全长约 2.2 公里，闭合环线）：\n· 登山路线：自水库北岸登山入口上归元峰，约 1036 米\n· 下山路线：自归元峰下至东侧应急出口，约 889 米\n· 应急通道（下山中间的路）：自应急出口连回登山入口，约 308 米，园区出口在通道起点旁与村道交汇处\n登山线与下山线在归元峰交汇，三段闭合成环，不走回头路。' },
    { id: 'hours', label: '开放时间', kw: ['时间', '几点', '开门', '关门', '开放', '营业', '晨爬', '日爬', '夕爬', '截止'],
      ans: '🕗 开放时间 5:00–19:00，17:00 截止入园。\n· 晨爬 5:00–8:00\n· 日爬 8:00–15:00\n· 夕爬 15:00–17:00\n时间请以景区当日公示为准。' },
    { id: 'ticket', label: '门票价格', kw: ['门票', '票价', '多少钱', '价格', '收费', '票', '优惠', '免费'],
      ans: '🎫 门票价格以景区当日公示为准。\n可拨打景区咨询电话 <a href="tel:07716467699">0771-6467699</a> 确认。' },
    { id: 'entrance', label: '登山入口', kw: ['入口', '进门', '从哪进', '起点', '广场', '集散'],
      ans: '🚶 登山入口在水库北岸，是水库环线登山路线的起点。\n访客集散广场在入口旁（水库北岸公路旁），停车、集散、出发都在这里。\n<button class="mapbtn" data-lon="107.0407" data-lat="23.158298" data-size="9">📍 在地图上看</button>' },
    { id: 'exit', label: '出口与应急', kw: ['出口', '出门', '应急', '安全', '迷路', '下山出口'],
      ans: '🚪 园区出口在应急通道起点旁（下山路线终点附近），村道通往公路。\n🆘 应急出口在下山路线终点（原园区出口处）。如需帮助可拨打 <a href="tel:07716467699">0771-6467699</a>。' },
    { id: 'lake', label: '伏曼水库', kw: ['水库', '伏曼', '湖', '水', '岛'],
      ans: '💧 伏曼水库在景区东侧，湖面海拔约 497 米，湖心五岛，碧绿清透。登山入口就在水库北岸。\n<button class="mapbtn" data-lon="107.04537" data-lat="23.15256" data-size="12">📍 在地图上看</button>' },
    { id: 'traffic', label: '交通自驾', kw: ['交通', '怎么去', '开车', '自驾', '导航', '地址', '在哪', '位置', '坐车', '打车'],
      ans: '🚗 景区在广西崇左市天等县，导航“剑龙山景区”即可。' },
    { id: 'phone', label: '咨询电话', kw: ['电话', '咨询', '联系', '客服', '预约'],
      ans: '📞 景区咨询电话：<a href="tel:07716467699">0771-6467699</a>\n点号码可以直接拨打。票价、时间请以景区当日公示为准。' },
    { id: 'intro', label: '景区简介', kw: ['简介', '介绍', '什么地方', '好玩吗', '怎么样', '剑龙山'],
      ans: '⛰️ 剑龙山在广西崇左市天等县，四座板峰如剑龙背板般沿山脊排开，东侧是碧绿的伏曼水库。\n水库环线全长约 2.2 公里，自水库北岸登山入口出发，经归元峰环绕一圈回到起点。' },
  ];
  const CHAT_FALLBACK = '这个问题我还不太清楚，你可以点下面的快捷问题，或直接拨打景区咨询电话 <a href="tel:07716467699">0771-6467699</a>。';
  const chatPanel = $('chatPanel'), chatMsgs = $('chatMsgs'), chatChips = $('chatChips'), chatInput = $('chatInput');
  let chatOpened = false;
  const chatScroll = () => { chatMsgs.scrollTop = chatMsgs.scrollHeight; };
  function chatBubble(html, who) {
    const d = document.createElement('div');
    d.className = 'msg ' + who;
    if (who === 'u') d.textContent = html; else d.innerHTML = html;
    chatMsgs.appendChild(d); chatScroll();
    return d;
  }
  function chatTyping() {
    const d = document.createElement('div');
    d.className = 'msg a typing';
    d.innerHTML = '<i></i><i></i><i></i>';
    chatMsgs.appendChild(d); chatScroll();
    return d;
  }
  function chatReply(html, delay) {
    const t = chatTyping();
    setTimeout(() => { t.remove(); chatBubble(html, 'a'); }, delay || 700);
  }
  function chatPeakButtons() {
    return '<div style="margin-top:6px;display:flex;flex-wrap:wrap;gap:6px">' +
      DATA.chatPeaks.map((s) => '<button class="mapbtn" data-peak="' + s.name + '">' + s.name + ' ' + s.kmlH + 'm</button>').join('') +
      '</div>';
  }
  function askTopic(id) {
    const t = CHAT_TOPICS.find((x) => x.id === id);
    if (!t) return;
    chatBubble(t.label, 'u');
    if (t.nearby) { chatReply(nearbyChatHtml()); return; }
    if (t.peaks) chatReply(t.ans.replace(/\n/g, '<br>') + chatPeakButtons());
    else chatReply(t.ans.replace(/\n/g, '<br>'));
  }
  function askPeak(name) {
    const s = DATA.chatPeaks.find((x) => x.name === name);
    if (!s) return;
    chatBubble(name, 'u');
    const p = DATA.peaks.find((x) => x.id === s.id);
    const html = '<b>' + s.name + ' ' + s.kmlH + 'm</b><br>' + s.text +
      '<br><button class="mapbtn" data-lon="' + p.lon + '" data-lat="' + p.lat + '" data-size="11">📍 在地图上看</button>';
    chatReply(html);
  }
  function askText(q) {
    const query = (q || '').trim();
    if (!query) return;
    chatBubble(query, 'u');
    chatInput.value = '';
    const peak = DATA.chatPeaks.find((s) => query.indexOf(s.name) !== -1);
    if (peak) { askPeak(peak.name); return; }
    const t = CHAT_TOPICS.find((x) => x.kw.some((k) => query.indexOf(k) !== -1));
    if (t && t.nearby) { chatReply(nearbyChatHtml()); return; }
    if (t && t.peaks) { chatReply(t.ans.replace(/\n/g, '<br>') + chatPeakButtons()); return; }
    if (t) { chatReply(t.ans.replace(/\n/g, '<br>')); return; }
    chatReply(CHAT_FALLBACK);
  }
  function openChat() {
    closeAllOverlays();
    chatPanel.hidden = false;
    const dot = $('chatDot');
    if (dot) dot.style.display = 'none';
    const av = $('chatAvatar');
    if (av && !av.src) loadPhotos().then((ph) => { if (ph.avatar) av.src = ph.avatar; });
    if (!chatOpened) {
      chatOpened = true;
      chatReply('你好，我是景区小助理 ⛰️<br>可以点下面的问题，或直接打字问我四峰、环线、时间、门票。', 400);
    }
    chatScroll();
  }
  window.__openChat = openChat;
  $('chatFab').addEventListener('click', () => { if (chatPanel.hidden) openChat(); else closeChat(); });
  $('chatX').addEventListener('click', closeChat);
  $('chatSend').addEventListener('click', () => askText(chatInput.value));
  chatInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') askText(chatInput.value); });
  CHAT_TOPICS.forEach((t) => {
    if (t.nochip) return; // v2.10.3：“水库环线”没有快捷按钮，关键词仍可问
    const b = document.createElement('button');
    b.textContent = t.label;
    b.addEventListener('click', () => askTopic(t.id));
    chatChips.appendChild(b);
  });
  chatMsgs.addEventListener('click', (e) => {
    const btn = e.target.closest('.mapbtn');
    if (!btn) return;
    if (btn.dataset.peak) { askPeak(btn.dataset.peak); return; }
    if (btn.dataset.near) {
      const s = DATA.nearby.find((x) => x.name === btn.dataset.near);
      if (s) { closeChat(); nearbyOpenSpot(s); }
      return;
    }
    if (btn.dataset.lon) {
      closeChat();
      labelsEnabled = true;
      currentMainPeak = null;
      const size = parseInt(btn.dataset.size || '11', 10);
      fly(parseFloat(btn.dataset.lon), parseFloat(btn.dataset.lat), size * 80, -55);
      setTimeout(declutterLabels, 1900);
    }
  });
  // 点地图标记时收起聊天面板，免得两块面板叠在一起（showDetail 里 closeAllOverlays 已含）

  // ---------- 点地图标记开弹窗；点空白处不关弹窗（只用 ✕ / 开别的浮层关） ----------
  viewer.screenSpaceEventHandler.setInputAction((movement) => {
    const picked = viewer.scene.pick(movement.position);
    const target = picked && picked.id;
    if (target && target._popup) {
      const p = target._popup;
      showDetail(p.title, p.meta, p.body, p.photo, null, p.fly);
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);

  // ---------- 四季按钮 ----------
  const chipBox = $('seasonChips');
  Object.entries(DATA.seasons).forEach(([id, s]) => {
    const b = document.createElement('button');
    b.className = 'chip'; b.dataset.season = id;
    b.innerHTML = `<div class="t">${s.label}</div><div class="d">${s.chip}</div>`;
    b.addEventListener('click', () => applySeason(id));
    chipBox.appendChild(b);
  });
  // ---------- 底图切换：只换影像层，相机/路线/标注/地形/季节全不动 ----------
  // 切完视角保持原地（不碰相机）；当前风格存 localStorage，下次打开恢复。
  function setBasemap(id) {
    const style = BASEMAPS.find((b) => b.id === id);
    if (!style) return;
    if (style.id !== curBasemap) {
      const next = new Cesium.ImageryLayer(makeImageryProvider(style));
      applyLayerColor(next, style); // 切底图重设色彩（每种风格自带参数）
      viewer.imageryLayers.remove(imageryLayer, true);
      viewer.imageryLayers.add(next);
      imageryLayer = next;
      curBasemap = style.id;
      try { localStorage.setItem(BASEMAP_KEY, curBasemap); } catch (e) { /* 隐私模式等写失败就跳过 */ }
      log('底图：' + style.name);
    }
    document.querySelectorAll('#basemapChips .chip').forEach((b) => b.classList.toggle('on', b.dataset.basemap === curBasemap));
    const note = $('basemapNote');
    if (note) note.textContent = style.note;
    window.__basemap = curBasemap;
    if (window.__diag) {
      window.__diag.basemap = curBasemap;
      window.__diag.imageryMaxLevel = imageryLayer.imageryProvider.maximumLevel;
      window.__diag.imageryColor = { brightness: imageryLayer.brightness, contrast: imageryLayer.contrast, saturation: imageryLayer.saturation, gamma: imageryLayer.gamma };
    }
    viewer.scene.requestRender();
  }
  window.__setBasemap = setBasemap;
  window.__basemap = curBasemap;
  window.__basemaps = BASEMAPS.map((b) => b.id);
  const basemapBox = $('basemapChips');
  BASEMAPS.forEach((s) => {
    const b = document.createElement('button');
    b.className = 'chip'; b.dataset.basemap = s.id;
    b.innerHTML = `<div class="t">${s.name}</div><div class="d">${s.chip}</div>`;
    b.addEventListener('click', () => setBasemap(s.id));
    basemapBox.appendChild(b);
  });
  setBasemap(curBasemap); // 只刷 chips 高亮 + 备注，不重建图层（图层已按保存的风格建好）
  // 景区介绍里的 logo 懒加载
  const infoLogo = $('infoLogo');
  if (infoLogo) {
    const obs = new MutationObserver(() => {
      if (!$('sheet-info').hidden && !infoLogo.src) {
        loadPhotos().then((ph) => { if (ph.logo) infoLogo.src = ph.logo; });
      }
    });
    obs.observe($('sheet-info'), { attributes: true, attributeFilter: ['hidden'] });
  }

  // ---------- 动画：徒步者 / 旗 / 雨 / GPS 脉冲（15fps，便宜） ----------
  // 每 66ms 更新一次位置并请求一次渲染；静态时仍靠 requestRenderMode 省电，
  // 但地图是“活”的（有人走、旗在摆），所以持续以 15fps 渲染——手机上够用，
  // 拖动时 msse 4 优化仍在。
  let lastTick = Date.now();
  function tick() {
    const now = Date.now();
    const dt = Math.min(0.1, (now - lastTick) / 1000);
    lastTick = now;
    const t = now / 1000;
    const nVis = DATA.seasons[curSeason].hikers;
    for (let i = 0; i < hikers.length; i++) {
      const hk = hikers[i];
      if (i >= nVis) { hk.board.show = false; if (hk.umb) hk.umb.show = false; continue; }
      hk.s += hk.speed * dt;
      if (hk.s >= loopTotal) hk.s -= loopTotal;
      const p = pointAtLoop(hk.s);
      hk.board.show = true;
      hk.board.position = Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.h);
      if (hk.umb) {
        hk.umb.show = (curSeason === 'rain');
        hk.umb.position = Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.h + 7);
      }
    }
    for (const f of flagBoxes) {
      const h = 0.26 * Math.sin(t * 0.9 + f.phase); // ±15° 慢摆
      const pos = Cesium.Cartesian3.fromDegrees(
        f.peak.lon + Math.cos(h) * 10 / 102000,
        f.peak.lat + Math.sin(h) * 10 / 111000,
        f.peak.gridH + 24);
      f.entity.position = pos;
      f.entity.orientation = Cesium.Transforms.headingPitchRollQuaternion(pos, new Cesium.HeadingPitchRoll(h, 0, 0));
    }
    if (curSeason === 'rain') {
      for (const r of rainStreaks) {
        r.y -= 40 * dt;
        if (r.y < r.groundH) r.y = r.groundH + 150 + Math.random() * 50;
        r.board.position = Cesium.Cartesian3.fromDegrees(r.lon, r.lat, r.y);
      }
    }
    if (geoPulseEnt && geoPulseEnt.show) {
      const pt = (Date.now() % 1600) / 1600;
      const r = geoAccR * (1 + 1.4 * pt);
      geoPulseEnt.ellipse.semiMajorAxis = r;
      geoPulseEnt.ellipse.semiMinorAxis = r;
      try { geoPulseEnt.ellipse.material.color.setValue(new Cesium.Color(0.18, 0.48, 1.0, 0.5 * (1 - pt))); } catch (e) { /* 忽略 */ }
    }
    viewer.scene.requestRender();
  }

  // ---------- 视角记忆（窄屏防重载后回到开头） ----------
  // iOS 内存压力杀掉网页进程会整页重载；moveEnd 后节流保存相机，
  // 加载时恢复到上次视角。只在窄屏启用：电脑端行为一律不动
  // （不写 localStorage、不恢复；冒烟测试是静态检查也不受影响）。
  const VIEW_KEY = 'jls-cesium-view-v1';
  let lastSaveAt = 0;
  const readSavedView = () => {
    try {
      const v = JSON.parse(localStorage.getItem(VIEW_KEY) || 'null');
      if (!v || !isFinite(v.lon) || !isFinite(v.lat) || !isFinite(v.h)) return null;
      const distM = Math.hypot((v.lon - CENTER_LON) * 102000, (v.lat - CENTER_LAT) * 111000);
      if (!(v.h >= 100 && v.h <= 12000 && distM <= 18000)) return null;
      return v;
    } catch (e) { return null; }
  };
  function saveView() {
    if (!isNarrow) return;
    const now = Date.now();
    if (now - lastSaveAt < 2000) return; // 节流：最多 2 秒存一次
    lastSaveAt = now;
    try {
      const cart = viewer.camera.positionCartographic;
      if (!cart) return;
      localStorage.setItem(VIEW_KEY, JSON.stringify({
        lon: +Cesium.Math.toDegrees(cart.longitude).toFixed(6),
        lat: +Cesium.Math.toDegrees(cart.latitude).toFixed(6),
        h: Math.round(cart.height),
        heading: +viewer.camera.heading.toFixed(4),
        pitch: +viewer.camera.pitch.toFixed(4),
        t: now,
      }));
    } catch (e) { /* 隐私模式等写失败就跳过 */ }
  }

  // 初始视角：全景（瞬时，不用 fly 动画）
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(107.0365, 23.1445, 3000),
    orientation: { heading: 0, pitch: D2R(-55), roll: 0 },
  });
  window.__view = '全景';
  // 窄屏重载恢复：有保存视角且在夹取范围内，回到该视角（不用预设值）；
  // 点任何视角预设后按预设走（预设只在加载后触发，不受保存值干扰，
  // 且 moveEnd 会把预设视角存下来，下次重载就回到该预设视角）。
  let restoredView = null;
  if (isNarrow) {
    restoredView = readSavedView();
    if (restoredView) {
      viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(restoredView.lon, restoredView.lat, restoredView.h),
        orientation: { heading: restoredView.heading || 0, pitch: restoredView.pitch ?? D2R(-55), roll: 0 },
      });
      // 恢复到特写高度时打开标签（与峰预设一致）；全景高度下 declutter 本来就不显示
      labelsEnabled = restoredView.h <= 2000;
      // 落点靠近某峰预设时按该峰特写处理（主峰标签优先）：
      // 与预设相机位置比（p.lon, p.lat-0.004），不要直接比峰位——
      // 相机在峰南 0.004°，直接比峰位会错认南边的邻峰。
      let best = null, bestIdx = -1, bestD = 0.002;
      DATA.peaks.forEach((p, j) => {
        const d = Math.hypot(p.lon - restoredView.lon, (p.lat - 0.004) - restoredView.lat);
        if (d < bestD && Math.abs(restoredView.h - (p.gridH + 450)) < 150) { bestD = d; best = peakEntities[j]; bestIdx = j; }
      });
      if (best && restoredView.h <= 2000) currentMainPeak = best;
      // 按钮高亮跟上恢复的视角（默认亮全景；恢复到峰/水库预设就亮该项；
      // 自由拖动的视角不匹配任何预设，就全都不亮）
      const viewBtns = [...document.querySelectorAll('#viewChips button[data-view]')];
      viewBtns.forEach((x) => x.classList.remove('on'));
      let activeName = null;
      if (best && bestIdx >= 0 && restoredView.h <= 2000) activeName = `${DATA.peaks[bestIdx].num}号峰 ${DATA.peaks[bestIdx].short}`;
      else if (Math.abs(restoredView.lon - 107.0365) < 0.001 && Math.abs(restoredView.lat - 23.1445) < 0.001 && Math.abs(restoredView.h - 3000) < 50) activeName = '全景';
      else if (Math.abs(restoredView.lon - 107.0365) < 0.001 && Math.abs(restoredView.lat - 23.1550) < 0.001 && Math.abs(restoredView.h - 3000) < 50) activeName = '鸟瞰';
      else if (Math.abs(restoredView.lon - 107.041) < 0.001 && Math.abs(restoredView.lat - (23.1581 - 0.004)) < 0.001 && Math.abs(restoredView.h - ((entCart.height ?? 488) + 450)) < 150) activeName = '入口';
      else if (Math.abs(restoredView.lon - 107.040969) < 0.001 && Math.abs(restoredView.lat - (23.156357 - 0.004)) < 0.001 && Math.abs(restoredView.h - ((parkExitCart.height ?? 498) + 450)) < 150) activeName = '出口';
      else if (Math.abs(restoredView.lon - DATA.lake.center[0]) < 0.001 && Math.abs(restoredView.lat - (DATA.lake.center[1] - 0.0035)) < 0.001 && Math.abs(restoredView.h - 1700) < 50) activeName = '伏曼水库';
      if (activeName) { const ab = viewBtns.find((x) => x.textContent === activeName); if (ab) ab.classList.add('on'); }
      window.__view = '已恢复';
      log('视角已恢复：' + JSON.stringify(restoredView));
    }
  }
  window.__restoredView = restoredView;
  window.__viewMemory = { key: VIEW_KEY, save: saveView, read: readSavedView };
  applySeason('spring'); // 默认春
  declutterLabels();
  setInterval(tick, 66);

  // ---------- 诊断信息（给探针用） ----------
  window.__diag = {
    terrainReady: true,
    imageryLayers: viewer.scene.imageryLayers.length,
    entities: viewer.entities.values.length,
    requestRenderMode: viewer.scene.requestRenderMode,
    resolutionScale: viewer.resolutionScale,
    dprCap,
    maxScreenSpaceError: viewer.scene.globe.maximumScreenSpaceError,
    fogEnabled: viewer.scene.fog.enabled,
    skyAtmosphere: viewer.scene.skyAtmosphere.show,
    maxZoomDistance: viewer.scene.screenSpaceCameraController.maximumZoomDistance,
    tileCacheSize: viewer.scene.globe.tileCacheSize,
    maxRequestsPerServer: Cesium.RequestScheduler.maximumRequestsPerServer,
    imageryMaxLevel: viewer.scene.imageryLayers.get(0).imageryProvider.maximumLevel,
    basemap: curBasemap,
    imageryColor: { brightness: imageryLayer.brightness, contrast: imageryLayer.contrast, saturation: imageryLayer.saturation, gamma: imageryLayer.gamma },
    lighting: viewer.scene.globe.enableLighting,
    lightType: viewer.scene.light ? viewer.scene.light.constructor.name : null,
    lambertDiffuseMultiplier: viewer.scene.globe.lambertDiffuseMultiplier,
    restMsse: REST_MSSE,
    isNarrow,
    imageryRectangle: [106.78, 22.92, 107.29, 23.39],
    peaks: DATA.peaks.map((p) => ({ short: p.short, kmlH: p.kmlH, gridH: p.gridH })),
    ground: groundStats,
    season: curSeason,
    labels: labelItems.length,
    loopTotalM: Math.round(loopTotal),
    views: views.map((v) => v.name),
    dragSlowdown: ctrl.enableRotate === false,
    leaderLines: window.__leaderLines.length,
  };
  setStatus('就绪：地形 + 影像 + 标注');
  log('就绪，实体数 ' + viewer.entities.values.length + '，标签 ' + labelItems.length + '，环线 ' + Math.round(loopTotal) + 'm');
  window.__ready = true;
} catch (e) {
  window.__error = String((e && e.stack) || e);
  setStatus('出错：' + (e && e.message ? e.message : e));
  console.error(e);
}
