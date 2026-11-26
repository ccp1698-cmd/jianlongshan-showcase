// 剑龙山真实感版 v1：Cesium + 本地 heightmap 地形 + Esri 卫星影像。
// 地形是我们的真实 DEM（136×144），高度真实、无竖向夸张；
// 四峰标签用 KML 高程（用户已定）；农田不画贴片——卫星图上本来就是真农田。
import { DATA } from './data.js';

const $ = (id) => document.getElementById(id);
const setStatus = (t) => { $('status').textContent = t; window.__status = t; };
const log = (t) => console.log('[cesium-jls] ' + t);

window.__ready = false;
window.__error = null;

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
  const imageryLayer = new Cesium.ImageryLayer(new Cesium.UrlTemplateImageryProvider({
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    maximumLevel: 18,
    // 影像只拉 50km 范围矩形（覆盖地形外层框 + 余量），别全 globe 拉瓦片
    rectangle: Cesium.Rectangle.fromDegrees(106.50, 22.65, 107.58, 23.65),
    credit: 'Esri, Maxar, Earthstar Geographics',
  }));
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider,
    baseLayer: imageryLayer,
    baseLayerPicker: false, geocoder: false, homeButton: false, sceneModePicker: false,
    navigationHelpButton: false, animation: false, timeline: false, fullscreenButton: false,
    vrButton: false, infoBox: false, selectionIndicator: false,
    requestRenderMode: true, maximumRenderTimeChange: Infinity,
  });
  // ---- 流畅度（拖动卡）：手机降分辨率 + 拖动时降地形细节 + 关雾 ----
  // 窄屏（手机）DPR 上限 1.0（原来 1.5），渲染像素数降约 55%，是拖动卡顿的最大头；
  // 宽屏仍 1.5。本地 SwiftShader 帧率不代表手机，只看瓦片数/分辨率等可量化指标。
  const dprCap = window.innerWidth <= 760 ? 1.0 : 1.5;
  viewer.resolutionScale = Math.min(window.devicePixelRatio || 1, dprCap);
  viewer.scene.fog.enabled = false; // 雾是每帧后处理，关掉省一笔；地形+影像本身已够真实
  viewer.scene.skyAtmosphere.show = false; // 大气散射每帧算，关掉；天空用底色（见 index.html 背景）
  viewer.scene.globe.maximumScreenSpaceError = 2;
  // 拖动时放宽到 4：瓦片细节降一档，拖动中少拉/少解码瓦片；停稳恢复 2
  viewer.camera.moveStart.addEventListener(() => {
    viewer.scene.globe.maximumScreenSpaceError = 4;
  });

  // ---- 50km 范围限制：最大视野就是周边约 50km，不许缩到看整个地球 ----
  const CENTER_LON = 107.0365, CENTER_LAT = 23.155;
  const ctrl = viewer.scene.screenSpaceCameraController;
  ctrl.maximumZoomDistance = 30000; // 相机到目标最远 30km（约 50km 范围的视野）
  ctrl.minimumZoomDistance = 100;
  // 兜底：moveEnd 时相机高度 >25km 或地面位置离中心 >45km 就拉回
  const clampCamera = () => {
    const cart = viewer.camera.positionCartographic;
    if (!cart) return;
    const h = cart.height;
    const lon = Cesium.Math.toDegrees(cart.longitude), lat = Cesium.Math.toDegrees(cart.latitude);
    const distM = Math.hypot((lon - CENTER_LON) * 102000, (lat - CENTER_LAT) * 111000);
    if (h <= 25000 && distM <= 45000) return;
    const nh = Math.min(h, 25000);
    let nlon = lon, nlat = lat;
    if (distM > 45000) {
      const s = 45000 / distM;
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
  window.__viewer = viewer;
  window.__DATA__ = DATA;
  window.__terrainProvider = terrainProvider;

  // ---------- 徒步路线：三段环线（穿四峰），橙色；公路灰色 ----------
  for (const t of DATA.trails) {
    viewer.entities.add({
      name: t.name,
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray(t.pts.flat()),
        clampToGround: true, width: 4,
        material: Cesium.Color.fromCssColorString('#e0651f'),
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

  // ---------- 四峰标注：KML 高程做标签，锚点在网格实测高度 +40m ----------
  const peakEntities = [];
  for (const p of DATA.peaks) {
    const pos = Cesium.Cartesian3.fromDegrees(p.lon, p.lat, p.gridH + 40);
    peakEntities.push(viewer.entities.add({
      name: `${p.num}号峰 ${p.short}`,
      position: pos,
      point: { pixelSize: 7, color: Cesium.Color.WHITE, outlineColor: Cesium.Color.BLACK, outlineWidth: 2 },
      label: {
        text: `${p.num}号峰 ${p.short} ${p.kmlH}m`,
        font: 'bold 13px sans-serif',
        fillColor: Cesium.Color.WHITE,
        outlineColor: Cesium.Color.BLACK, outlineWidth: 2,
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        showBackground: true, backgroundColor: Cesium.Color.fromCssColorString('rgba(10,20,35,0.78)'),
        backgroundPadding: new Cesium.Cartesian2(6, 4),
        pixelOffset: new Cesium.Cartesian2(0, -18),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    }));
  }

  // ---------- 四峰标签防重叠：按实际投影位置纵向排开 ----------
  // 总览视角（全景/水库）只留山顶点、不显示标签（按钮栏里已有峰名，
  // 点按钮飞过去再看标签——按缩放级别取舍标注的常规做法）；
  // 四峰特写视角（约 1170m）正常显示标签。
  // 规则（2026-11-26 返修，终版截图核对后重写）：
  // (a) 锚点投影出视口（留边距）的标签直接隐藏，排叠不许把它拉回视口内；
  // (b) 特写里重叠的标签沿纵向排开直到不重叠，排不开的隐藏，
  //     但当前视角主峰自己的标签必须可见：主峰先定位置，其他标签
  //     在主峰上下两侧分别排开（不再全部挤到主峰下方）；
  // (c) pill 不得压住底部按钮栏和标题卡，横向夹紧不出视口左右；
  // (d) 切换视角、手动缩放/拖动、窗口尺寸变化后都重新排
  //     （camera.moveEnd + 300ms 后再排一次防惯性未停稳 + resize，
  //     飞行落定后的 1900ms 定时是兜底）。
  // 坑：e.label.show 是 Property 对象，恒为真值——不能用 !e.label.show
  // 判断，必须用本地布尔值 shown，否则出界标签会混进排叠、把别的标签全挤掉。
  const PILL_HALF_H = 13, PILL_HALF_W = 75, MIN_GAP = 30;
  let labelsEnabled = false; // 初始视角是全景，总览不显示标签
  let currentMainPeak = null; // 当前特写视角的主峰实体（总览视角为 null）
  const declutterLabels = () => {
    const showLabels = labelsEnabled && viewer.camera.positionCartographic.height <= 2000;
    const cw = viewer.scene.canvas.clientWidth, ch = viewer.scene.canvas.clientHeight;
    const viewsTop = $('views').getBoundingClientRect().top;
    const titleRect = $('title').getBoundingClientRect();
    // pill 中心纵向安全带：顶缘留 30px，底缘在按钮栏之上
    const safeTop = 30, safeBottom = Math.max(safeTop, viewsTop - PILL_HALF_H - 2);
    const items = [];
    for (const e of peakEntities) {
      const s = viewer.scene.cartesianToCanvasCoordinates(e.position.getValue(viewer.clock.currentTime));
      // (a) 锚点须在视口内（留边距）；pill 贴在锚点上方 30px，
      //     所以锚点纵向可到安全带底缘 +30（pill 自然位置仍在带内），
      //     再低 pill 就要压按钮栏——主峰也一样，排叠会把它夹紧到带内
      const inView = s && s.x > 20 && s.x < cw - 20 && s.y > 15 && s.y < safeBottom + 30;
      const shown = showLabels && inView;
      e.label.show = shown;
      if (!shown) continue;
      items.push({ e, x: s.x, y: s.y, main: e === currentMainPeak });
    }
    // (c) 横向夹紧：pill 不出视口左右；若 pill 大幅压住标题卡，横向挪开
    //     （标题卡在小屏上占半幅宽，只上下移会把标签挤出安全带；
    //     挪开后 pill 仍在锚点附近；只擦到标题卡边缘（≤4px）的不挪）
    const computeOx = (it, target) => {
      let ox = 0;
      if (it.x - PILL_HALF_W < 4) ox = 4 - (it.x - PILL_HALF_W);
      else if (it.x + PILL_HALF_W > cw - 4) ox = cw - 4 - (it.x + PILL_HALF_W);
      const pillTop = target - PILL_HALF_H, pillBottom = target + PILL_HALF_H;
      const vOverlap = Math.min(pillBottom, titleRect.bottom - 2) - Math.max(pillTop, titleRect.top + 2);
      if (vOverlap > 4) {
        const left = it.x + ox - PILL_HALF_W, right = it.x + ox + PILL_HALF_W;
        if (right > titleRect.left + 2 && left < titleRect.right - 2) {
          const shiftRight = titleRect.right + 2 - left;
          const shiftLeft = titleRect.left - 2 - right;
          if (it.x + ox + shiftRight + PILL_HALF_W <= cw - 4) ox += shiftRight;
          else if (it.x + ox + shiftLeft - PILL_HALF_W >= 4) ox += shiftLeft;
        }
      }
      return ox;
    };
    const placeOne = (it, target) => {
      it.e.label.pixelOffset = new Cesium.Cartesian2(computeOx(it, target), target - it.y + PILL_HALF_H);
      return target;
    };
    const hitsTitle = (centerY, x, ox = 0) => {
      const top = centerY - PILL_HALF_H, bottom = centerY + PILL_HALF_H;
      const left = x + ox - PILL_HALF_W, right = x + ox + PILL_HALF_W;
      return right > titleRect.left + 2 && left < titleRect.right - 2 &&
        bottom > titleRect.top + 2 && top < titleRect.bottom - 2;
    };
    // (b) 主峰先定位置（自然位置夹紧到安全带内，避开标题卡）
    const mainItem = items.find((it) => it.main);
    let mainTarget = null;
    if (mainItem) {
      let t = mainItem.y - 30;
      if (t < safeTop) t = safeTop;
      if (t > safeBottom) t = safeBottom;
      if (hitsTitle(t, mainItem.x, computeOx(mainItem, t))) t = Math.min(titleRect.bottom + PILL_HALF_H + 2, safeBottom);
      mainTarget = placeOne(mainItem, t);
    }
    const others = items.filter((it) => !it.main);
    if (mainTarget === null) {
      // 主峰不在视口内：按锚点 y 自上而下贪心排开
      others.sort((a, b) => a.y - b.y);
      let prev = -Infinity;
      for (const it of others) {
        let target = Math.max(it.y - 30, prev + MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target))) target = titleRect.bottom + PILL_HALF_H + 2;
        if (target < safeTop) target = safeTop;
        if (target > safeBottom) { it.e.label.show = false; continue; }
        prev = placeOne(it, target);
      }
    } else {
      // 上方组：离主峰近的先排，向上依次排开
      const above = others.filter((it) => it.y - 30 < mainTarget).sort((a, b) => (b.y - 30) - (a.y - 30));
      let prevAbove = mainTarget;
      for (const it of above) {
        let target = Math.min(it.y - 30, prevAbove - MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target))) target = titleRect.bottom + PILL_HALF_H + 2;
        if (target > prevAbove - MIN_GAP || target < safeTop) { it.e.label.show = false; continue; }
        prevAbove = placeOne(it, target);
      }
      // 下方组：离主峰近的先排，向下依次排开
      const below = others.filter((it) => it.y - 30 >= mainTarget).sort((a, b) => (a.y - 30) - (b.y - 30));
      let prevBelow = mainTarget;
      for (const it of below) {
        let target = Math.max(it.y - 30, prevBelow + MIN_GAP);
        if (hitsTitle(target, it.x, computeOx(it, target))) target = titleRect.bottom + PILL_HALF_H + 2;
        if (target > safeBottom) { it.e.label.show = false; continue; }
        if (target < prevBelow + MIN_GAP) target = prevBelow + MIN_GAP;
        if (target > safeBottom) { it.e.label.show = false; continue; }
        prevBelow = placeOne(it, target);
      }
    }
    viewer.scene.requestRender();
  };
  window.__declutter = declutterLabels;
  window.__debugLabels = () => ({
    labelsEnabled, mainPeak: currentMainPeak ? currentMainPeak.name : null,
    height: viewer.camera.positionCartographic.height,
  });
  viewer.camera.moveEnd.addEventListener(() => {
    viewer.scene.globe.maximumScreenSpaceError = 2; // 停稳恢复全细节
    declutterLabels(); setTimeout(declutterLabels, 300);
  });
  window.addEventListener('resize', () => {
    setTimeout(declutterLabels, 100);
    // 尺寸变化也会触发 moveStart（msse 升到 4）却不一定有 moveEnd——这里兜底恢复 2
    setTimeout(() => { viewer.scene.globe.maximumScreenSpaceError = 2; }, 200);
  });

  // ---------- 视角预设 ----------
  const D2R = Cesium.Math.toRadians;
  const fly = (lon, lat, height, pitchDeg, duration = 1.6) => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      orientation: { heading: 0, pitch: D2R(pitchDeg), roll: 0 },
      duration,
    });
  };
  const views = [
    { name: '全景', labels: false, run: () => fly(107.0365, 23.1445, 3000, -55) },
    ...DATA.peaks.map((p, j) => ({
      name: `${p.num}号峰 ${p.short}`,
      labels: true,
      peak: peakEntities[j],
      run: () => fly(p.lon, p.lat - 0.004, p.gridH + 450, -35),
    })),
    { name: '伏曼水库', labels: false, run: () => fly(DATA.lake.center[0], DATA.lake.center[1] - 0.0035, 1700, -55) },
  ];
  const viewsEl = $('views');
  views.forEach((v, i) => {
    const b = document.createElement('button');
    b.textContent = v.name;
    b.onclick = () => {
      viewsEl.querySelectorAll('button').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      window.__view = v.name;
      labelsEnabled = v.labels !== false;
      currentMainPeak = v.peak || null;
      v.run();
      b.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setTimeout(declutterLabels, 1900); // 飞行 1.6s 落定后再排标签（moveEnd 也会触发一次）
    };
    viewsEl.appendChild(b);
    if (i === 0) b.classList.add('active');
  });
  window.__views = views.map((v) => v.name);
  window.__applyView = (name) => {
    const b = [...viewsEl.querySelectorAll('button')].find((x) => x.textContent === name);
    if (b) b.click();
  };

  // 初始视角：全景（瞬时，不用 fly 动画）
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(107.0365, 23.1445, 3000),
    orientation: { heading: 0, pitch: D2R(-55), roll: 0 },
  });
  window.__view = '全景';
  declutterLabels();

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
    imageryRectangle: [106.50, 22.65, 107.58, 23.65],
    peaks: DATA.peaks.map((p) => ({ short: p.short, kmlH: p.kmlH, gridH: p.gridH })),
  };
  setStatus('就绪：地形 + 影像 + 标注');
  log('就绪，实体数 ' + viewer.entities.values.length);
  window.__ready = true;
} catch (e) {
  window.__error = String((e && e.stack) || e);
  setStatus('出错：' + (e && e.message ? e.message : e));
  console.error(e);
}
