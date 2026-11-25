(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Math.PI/180;function t(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function n(e,t){return[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]]}function r(e,t,n){return n[0]=e[1]*t[2]-e[2]*t[1],n[1]=e[2]*t[0]-e[0]*t[2],n[2]=e[0]*t[1]-e[1]*t[0],n}function i(e){let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]}function a(e,t,n){return e<t?t:e>n?n:e}function o(e,t,n){return e+(t-e)*n}function s(e,t,n){let r=a((n-e)/(t-e),0,1);return r*r*(3-2*r)}function c(e,t,n,r,i,a,o,s){let c=s??new Float32Array(16);s&&c.fill(0);let{right:l,up:u,forward:d}=e;return c[0]=l[0]/i,c[4]=l[1]/i,c[8]=l[2]/i,c[12]=-t/i,c[1]=u[0]/a,c[5]=u[1]/a,c[9]=u[2]/a,c[13]=-n/a,c[2]=d[0]/o,c[6]=d[1]/o,c[10]=d[2]/o,c[14]=-r/o,c[15]=1,c}function l(){return{right:[0,0,0],up:[0,1,0],forward:[0,0,-1]}}function u(){let e=[];for(let t=0;t<4;t++)e.push({origin:[0,0,0],dir:[0,0,-1]});return e}function d(e,t){if(t.kind===`frustum`){for(let[n,r,i,a]of t.planes){let t=n>=0?e.max[0]:e.min[0],o=r>=0?e.max[1]:e.min[1],s=i>=0?e.max[2]:e.min[2];if(n*t+r*o+i*s+a<0)return!1}return!0}let{right:n,up:r}=t.axes,i=(e.min[0]+e.max[0])/2,a=(e.min[1]+e.max[1])/2,o=(e.min[2]+e.max[2])/2,s=(e.max[0]-e.min[0])/2,c=(e.max[1]-e.min[1])/2,l=(e.max[2]-e.min[2])/2,u=n[0]*i+n[1]*a+n[2]*o-t.cx,d=Math.abs(n[0])*s+Math.abs(n[1])*c+Math.abs(n[2])*l;if(Math.abs(u)>t.halfW+d)return!1;let f=r[0]*i+r[1]*a+r[2]*o-t.cy,p=Math.abs(r[0])*s+Math.abs(r[1])*c+Math.abs(r[2])*l;return Math.abs(f)<=t.halfH+p}function f(e,t,n,r,i,a){let o=a??{viewProj:new Float32Array(16),logScale:0};if(o.logScale=0,t===`standard`){let t=e.viewProj(n,r,o.viewProj);return t!==o.viewProj&&o.viewProj.set(t),o}if(!(e.pixelGrowth>0)){let i=o.viewProj,a=e.viewProj(n,r,i);if(a!==i&&i.set(a),t===`reversed`)for(let e=0;e<16;e+=4)i[e+2]=(i[e+3]-i[e+2])/2;return o}let{right:s,up:c,forward:l}=e.axes(p),u=e.cornerRays(m)[0].origin,d=2/(e.pixelGrowth*e.height),f=d*e.height/e.width,h=s[0]*u[0]+s[1]*u[1]+s[2]*u[2],g=c[0]*u[0]+c[1]*u[1]+c[2]*u[2],_=l[0]*u[0]+l[1]*u[1]+l[2]*u[2],v=o.viewProj;v.fill(0);for(let e=0;e<3;e++)v[e*4+0]=f*s[e],v[e*4+1]=d*c[e],v[e*4+3]=l[e];if(v[12]=-f*h,v[13]=-d*g,v[15]=-_,t===`reversed`)return v[14]=i,o;for(let e=0;e<3;e++)v[e*4+2]=l[e];v[14]=-_-2*i;let y=l[0]*n[0]+l[1]*n[1]+l[2]*n[2]-_,b=Math.max(y+r,i*2,1);return o.logScale=1/Math.log2(1+b),o}var p=l(),m=u();function h(e){return e===`rgba8`?4:e===`rg8`?2:1}var g={intact:0,cracked:1,breached:2,gone:3},_={anchor:1,indestructible:2,inner:4},v={foundation:0,bearing:1,span:2,attached:3,fixture:4};function y(e){return e&3}function b(e){return e>>6&255}function x(e){let[t,n,r]=e;if(n<-.99999)return{x:[1,0,0],y:[0,-1,0],z:[0,0,-1]};let i=t*t+r*r,a=n>0||i===0?1/(1+n):(1-n)/i;return{x:[1-t*t*a,-t,-t*r*a],y:[t,n,r],z:[-t*r*a,-r,1-r*r*a]}}function S(e){let t=window.devicePixelRatio||1;return e!==void 0&&e>0?Math.min(t,e):t}function C(e,t,n,r,i){let a=Math.max(1,Math.round(n)),o=Math.max(1,Math.round(r)),s=e.width!==a||e.height!==o;return s&&(e.width=a,e.height=o),t.width=a,t.height=o,t.dpr=i??(window.devicePixelRatio||1),s}function w(e,t,n){let r=e.getBoundingClientRect();if(n===void 0){let n=window.devicePixelRatio||1;return C(e,t,r.width*n,r.height*n)}let i=S(n);return C(e,t,r.width*i,r.height*i,i)}function T(e,t,n,r){let i=new ResizeObserver(i=>{let a=i[0];if(!a)return;let o=a.devicePixelContentBoxSize?.[0],s=window.devicePixelRatio||1,c;if(r===void 0)c=o?C(e,t,o.inlineSize,o.blockSize):C(e,t,a.contentRect.width*s,a.contentRect.height*s);else{let n=S(r);c=o?C(e,t,o.inlineSize*n/s,o.blockSize*n/s,n):C(e,t,a.contentRect.width*n,a.contentRect.height*n,n)}c&&n?.()});try{i.observe(e,{box:`device-pixel-content-box`})}catch{i.observe(e)}return w(e,t,r),i}function E(e,t,n){let{onChange:r,wheelFactor:i=1.15,draggingClass:a=`dragging`}=n,o=new AbortController,s=o.signal,c=!1,l=0,u=0;e.addEventListener(`pointerdown`,t=>{c=!0,l=t.clientX,u=t.clientY,e.setPointerCapture(t.pointerId),e.classList.add(a)},{signal:s}),e.addEventListener(`pointermove`,e=>{c&&(t.orbitPixels((e.clientX-l)*t.dpr,(e.clientY-u)*t.dpr),l=e.clientX,u=e.clientY,r())},{signal:s});let d=()=>{c=!1,e.classList.remove(a)};return e.addEventListener(`pointerup`,d,{signal:s}),e.addEventListener(`pointercancel`,d,{signal:s}),e.addEventListener(`wheel`,e=>{e.preventDefault(),t.zoomBy(i**(e.deltaY/100)),r()},{passive:!1,signal:s}),()=>o.abort()}var D=class{options;handle=0;last=0;dirty=!1;started=!1;fpsFrames=0;fpsSince=0;fps=0;constructor(e){this.options=e;for(let t of e.clocks)t.onChange(()=>this.invalidate())}get animating(){for(let e of this.options.clocks)if(e.animating)return!0;return!1}start(){this.started=!0,this.invalidate()}stop(){this.started=!1,this.handle&&cancelAnimationFrame(this.handle),this.handle=0}invalidate(){this.dirty=!0,this.schedule()}renderNow(){this.dirty=!1,this.options.render()}schedule(){this.started&&!this.handle&&(this.handle=requestAnimationFrame(this.onTick))}onTick=e=>this.frame(e);frame(e){this.handle=0;let t=this.options.maxStep??.1,n=this.last>0?Math.min(t,(e-this.last)/1e3):0,r=!1;for(let e of this.options.clocks)r=e.advance(n)||r;(r||this.dirty)&&(this.dirty=!1,this.options.render()),this.animating?(this.last=e,this.fpsFrames++,this.fpsSince===0?this.fpsSince=e:e-this.fpsSince>=500&&(this.fps=this.fpsFrames*1e3/(e-this.fpsSince),this.fpsFrames=0,this.fpsSince=e),this.schedule()):(this.last=0,this.fps=0,this.fpsFrames=0,this.fpsSince=0),this.options.onFrame?.()}};function O(e,t){let n=e=>{e.preventDefault(),t.lost?.()},r=()=>t.restored();return e.addEventListener(`webglcontextlost`,n),e.addEventListener(`webglcontextrestored`,r),()=>{e.removeEventListener(`webglcontextlost`,n),e.removeEventListener(`webglcontextrestored`,r)}}var k=class{value;speed;running;wrap;listeners=new Set;constructor(e={}){this.wrap=e.wrap??0,this.value=this.fold(e.time??0),this.speed=e.rate??1,this.running=e.playing??!1}fold(e){return this.wrap<=0?e:(e%this.wrap+this.wrap)%this.wrap}changed(){for(let e of this.listeners)e()}get time(){return this.value}get rate(){return this.speed}get playing(){return this.running}get animating(){return this.running&&this.speed!==0}play(){this.running||(this.running=!0,this.changed())}pause(){this.running&&(this.running=!1,this.changed())}toggle(){this.running?this.pause():this.play()}setRate(e){e!==this.speed&&(this.speed=e,this.changed())}set(e){let t=this.fold(e);t!==this.value&&(this.value=t,this.changed())}step(e){this.set(this.value+e)}advance(e){return!this.animating||e<=0?!1:(this.value=this.fold(this.value+e*this.speed),!0)}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}};function A(e){if(!/^#[0-9a-fA-F]{6}$/.test(e))throw Error(`Not a #rrggbb colour: ${e}`);let t=Number.parseInt(e.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function j(e){let t=Object.keys(e);if(t.length>96)throw Error(`The palette has ${t.length} rows, the shaders hold 96`);let n=t.map(t=>A(e[t])),r=new Map(t.map((e,t)=>[e,t]));return{keys:t,index(e){let t=r.get(e);if(t===void 0)throw Error(`Unknown palette row: ${e}`);return t},color(e){let t=n[this.index(e)];return[t[0],t[1],t[2]]},data(){let e=new Float32Array(384);return n.forEach((t,n)=>{e[n*4]=t[0],e[n*4+1]=t[1],e[n*4+2]=t[2],e[n*4+3]=1}),e}}}function M(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function N(e){return e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,e>>>0}function P(e,t){return N((e^Math.imul(t|0,2654435761))+2135587861)}function F(e,...t){let n=e>>>0;for(let e of t)n=P(n,e);return n}function ee(e,t){return P(M(e),M(t))}function I(e){return(e>>>0)/4294967296}var te=class e{step;cols;rows;heights;minY;maxY;constructor(e,t,n,r){this.step=e,this.cols=t,this.rows=n,this.heights=r;let i=1/0,a=-1/0;for(let e of r)e<i&&(i=e),e>a&&(a=e);this.minY=i,this.maxY=a}get sizeX(){return(this.cols-1)*this.step}get sizeZ(){return(this.rows-1)*this.step}static decimate(t,n,r,i,a,o,s){let c=Math.floor((n-1)/s)+1,l=Math.floor((r-1)/s)+1,u=new Float32Array(c*l);for(let e=0;e<l;e++)for(let t=0;t<c;t++){let l=0,d=0;for(let a=-1;a<=1;a++){let o=e*s+a;if(!(o<0||o>=r))for(let e=-1;e<=1;e++){let r=t*s+e;if(r<0||r>=n)continue;let c=(e===0?2:1)*(a===0?2:1);l+=i[o*n+r]*c,d+=c}}u[e*c+t]=s===1?i[e*n+t]*a+o:l/d*a+o}return new e(t*s,c,l,u)}static coarseSurface(e,t,n,r){if(r<1||(e-1)%r!=0||(t-1)%r!=0)throw Error(`coarseSurface: a ${e} × ${t} grid cannot be thinned by ${r}`);let i=new Float64Array(e*t),a=Math.max(0,e-1-r),o=Math.max(0,t-1-r);for(let s=0;s<t;s++){let t=Math.min(s-s%r,o),c=(s-t)/r,l=s%r===0;for(let o=0;o<e;o++){let u=Math.min(o-o%r,a),d=(o-u)/r,f=o%r===0,p;if(f&&l)p=n[s*e+o];else if(f){let i=n[t*e+o];p=i+(n[(t+r)*e+o]-i)*c}else if(l){let t=n[s*e+u];p=t+(n[s*e+u+r]-t)*d}else{let i=n[t*e+u],a=n[t*e+u+r],o=n[(t+r)*e+u],s=n[(t+r)*e+u+r];p=d+c<=1?i+(a-i)*d+(o-i)*c:s+(o-s)*(1-d)+(a-s)*(1-c)}i[s*e+o]=p}}return i}heightAt(e,t){let n=Math.min(Math.max(e/this.step,0),this.cols-1.0001),r=Math.min(Math.max(t/this.step,0),this.rows-1.0001),i=Math.floor(n),a=Math.floor(r),o=n-i,s=r-a,c=a*this.cols+i,l=this.heights[c],u=this.heights[c+1],d=this.heights[c+this.cols],f=this.heights[c+this.cols+1];return o+s<=1?l+(u-l)*o+(d-l)*s:f+(d-f)*(1-o)+(u-f)*(1-s)}vertexNormal(e,t){let{cols:n,rows:r,step:i,heights:a}=this,o=(e,t)=>a[Math.min(r-1,Math.max(0,t))*n+Math.min(n-1,Math.max(0,e))],s=(o(e+1,t)-o(e-1,t))/(2*i),c=(o(e,t+1)-o(e,t-1))/(2*i),l=Math.hypot(s,1,c);return[-s/l,1/l,-c/l]}};function ne(e){let t=0,n=e.length/2;for(let r=0,i=n-1;r<n;i=r++)t+=e[i*2]*e[r*2+1]-e[r*2]*e[i*2+1];return t/2}function re(e){let t=0;for(let n of e)t+=ne(n);return Math.abs(t)}function ie(e,t,n){let r=!1;for(let i of n){let n=i.length/2;for(let a=0,o=n-1;a<n;o=a++){let n=i[a*2],s=i[a*2+1],c=i[o*2],l=i[o*2+1];s>t!=l>t&&e<(c-n)*(t-s)/(l-s)+n&&(r=!r)}}return r}function ae(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s,l=c>0?((e-n)*o+(t-r)*s)/c:0;return l=l<0?0:l>1?1:l,Math.hypot(e-n-l*o,t-r-l*s)}function L(e){let t=e.length/2,n=Array.from({length:t},(e,t)=>t).sort((t,n)=>e[t*2]-e[n*2]||e[t*2+1]-e[n*2+1]),r=(t,n,r)=>(e[n*2]-e[t*2])*(e[r*2+1]-e[t*2+1])-(e[n*2+1]-e[t*2+1])*(e[r*2]-e[t*2]),i=[];for(let e of n){for(;i.length>=2&&r(i[i.length-2],i[i.length-1],e)<=0;)i.pop();i.push(e)}let a=i.length+1;for(let e=n.length-2;e>=0;e--){let t=n[e];for(;i.length>=a&&r(i[i.length-2],i[i.length-1],t)<=0;)i.pop();i.push(t)}return i.pop(),i}function oe(e){let t=L(e),n=null,r=1/0;for(let i=0;i<t.length;i++){let a=t[i],o=t[(i+1)%t.length],s=e[o*2]-e[a*2],c=e[o*2+1]-e[a*2+1],l=Math.hypot(s,c);if(l<1e-6)continue;s/=l,c/=l;let u=1/0,d=-1/0,f=1/0,p=-1/0;for(let n of t){let t=e[n*2]*s+e[n*2+1]*c,r=-e[n*2]*c+e[n*2+1]*s;t<u&&(u=t),t>d&&(d=t),r<f&&(f=r),r>p&&(p=r)}let m=(d-u)*(p-f);if(m<r){r=m;let e=(u+d)/2,t=(f+p)/2,i=(d-u)/2,a=(p-f)/2,o=e*s-t*c,l=e*c+t*s;n=i>=a?{cx:o,cz:l,ux:s,uz:c,halfL:i,halfW:a}:{cx:o,cz:l,ux:-c,uz:s,halfL:a,halfW:i}}}if(!n)throw Error(`The ring has no area`);return n}function se(e,t){let n=e.length/2,r=new Float32Array(e.length);for(let i=0;i<n;i++){let a=(i+n-1)%n,o=(i+1)%n,s=e[i*2]-e[a*2],c=e[i*2+1]-e[a*2+1],l=e[o*2]-e[i*2],u=e[o*2+1]-e[i*2+1],d=Math.hypot(s,c)||1,f=Math.hypot(l,u)||1;s/=d,c/=d,l/=f,u/=f;let p=-c,m=s,h=-u,g=l,_=1+p*h+m*g,v,y;if(_<.001)v=p,y=m;else{v=(p+h)/_,y=(m+g)/_;let e=Math.hypot(v,y);e>3&&(v*=3/e,y*=3/e)}r[i*2]=e[i*2]+v*t,r[i*2+1]=e[i*2+1]+y*t}for(let i=0;i<n;i++){let a=(i+1)%n,o=e[a*2]-e[i*2],s=e[a*2+1]-e[i*2+1],c=r[a*2]-r[i*2],l=r[a*2+1]-r[i*2+1];if(o*c+s*l<=0&&Math.hypot(o,s)>2*t)return null}let i=ne(e),a=ne(r);return(i>0?a<=.2*i:a>=0)?null:r}var ce={stride:20,attribs:[{name:`a_pos`,size:3,type:`f32`,offset:0},{name:`a_normal`,size:4,type:`i16`,offset:12}]},le=0,ue=1;function de(e,t){let{cols:n,rows:r,step:i,heights:a}=e,o=2*(2*n+2*r),s=n*r+o,c=ce.stride,l=new ArrayBuffer(s*c),u=new DataView(l),d=(e,t,n,r,i,a,o,s)=>{let l=e*c;u.setFloat32(l,t,!0),u.setFloat32(l+4,n,!0),u.setFloat32(l+8,r,!0),u.setInt16(l+12,Math.round(i*32767),!0),u.setInt16(l+14,Math.round(a*32767),!0),u.setInt16(l+16,Math.round(o*32767),!0),u.setInt16(l+18,s,!0)},f=(e,t)=>a[Math.min(r-1,Math.max(0,t))*n+Math.min(n-1,Math.max(0,e))];for(let t=0;t<r;t++)for(let r=0;r<n;r++){let[a,o,s]=e.vertexNormal(r,t);d(t*n+r,r*i,f(r,t),t*i,a,o,s,le)}let p=(n-1)*(r-1)+2*(n-1)+2*(r-1),m=new Uint32Array(p*6),h=0;for(let e=0;e<r-1;e++)for(let t=0;t<n-1;t++){let r=e*n+t,i=r+1,a=r+n,o=a+1;m[h++]=r,m[h++]=a,m[h++]=i,m[h++]=i,m[h++]=a,m[h++]=o}let g=n*r,_=(e,n,r,a,o)=>{let s=g;for(let o=0;o<e;o++){let[e,s]=n(o);d(g++,e*i,f(e,s),s*i,r,0,a,ue),d(g++,e*i,t,s*i,r,0,a,ue)}for(let t=0;t<e-1;t++){let e=s+t*2,n=e+1,r=e+2,i=e+3;o?(m[h++]=e,m[h++]=r,m[h++]=n,m[h++]=r,m[h++]=i,m[h++]=n):(m[h++]=e,m[h++]=n,m[h++]=r,m[h++]=r,m[h++]=n,m[h++]=i)}};return _(n,e=>[e,0],0,-1,!0),_(n,e=>[e,r-1],0,1,!1),_(r,e=>[0,e],-1,0,!1),_(r,e=>[n-1,e],1,0,!0),{layout:ce,vertices:new Uint8Array(l),indices:m,count:h}}var fe={size:128,worleyCells:4,perlinCells:4,perlinOctaves:4,low:.6},pe={size:32,worleyCells:2,perlinCells:0,perlinOctaves:0,low:0},me=[.625,.25,.125],he=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];function ge(e){return e=(e^e>>>16)>>>0,e=Math.imul(e,2146121005)>>>0,e=(e^e>>>15)>>>0,e=Math.imul(e,2221713035)>>>0,(e^e>>>16)>>>0}function _e(e,t,n,r){let i=ge((n>>>0)+r>>>0),a=ge((Math.imul(t>>>0,3266489909)^i)>>>0);return ge((Math.imul(e>>>0,2654435761)^a)>>>0)}function ve(e,t){return ge((e>>>0)+Math.imul(t,1759714724)>>>0)}function ye(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=Math.floor(n),c=e-a,l=t-o,u=n-s,d=1e9;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let f=_e((a+n+r)%r,(o+t+r)%r,(s+e+r)%r,i),p=n+(f&1023)/1024-c,m=t+(f>>>10&1023)/1024-l,h=e+(f>>>20&1023)/1024-u,g=p*p+m*m+h*h;g<d&&(d=g)}return 1-Math.min(Math.sqrt(d),1)}function be(e){return e*e*e*(e*(e*6-15)+10)}function xe(e,t,n,r,i,a,o,s){let c=he[_e(e%o,t%o,n%o,s)%12];return c[0]*r+c[1]*i+c[2]*a}function Se(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=Math.floor(n),c=e-a,l=t-o,u=n-s,d=be(c),f=be(l),p=be(u),m=(e,t,n)=>e+(t-e)*n,h=m(xe(a,o,s,c,l,u,r,i),xe(a+1,o,s,c-1,l,u,r,i),d),g=m(xe(a,o+1,s,c,l-1,u,r,i),xe(a+1,o+1,s,c-1,l-1,u,r,i),d),_=m(xe(a,o,s+1,c,l,u-1,r,i),xe(a+1,o,s+1,c-1,l,u-1,r,i),d),v=m(xe(a,o+1,s+1,c,l-1,u-1,r,i),xe(a+1,o+1,s+1,c-1,l-1,u-1,r,i),d);return m(m(h,g,f),m(_,v,f),p)}function Ce(e,t,n,r,i){let a=0,o=0,s=1;for(let c=0;c<r.perlinOctaves;c++){let l=r.perlinCells<<c;a+=s*Se(e*l,t*l,n*l,l,ve(i,16+c)),o+=s,s*=.5}let c=Math.min(Math.max(.5+.9*(o>0?a/o:0),0),1),l=r.worleyCells,u=ye(e*l,t*l,n*l,l,ve(i,0)),d=ye(e*l*2,t*l*2,n*l*2,l*2,ve(i,1)),f=ye(e*l*4,t*l*4,n*l*4,l*4,ve(i,2)),p=ye(e*l*8,t*l*8,n*l*8,l*8,ve(i,3)),[m,h,g]=me,_=m*u+h*d+g*f,v=m*d+h*f+g*p,y=(_+c*(1-_)+1-v)/(2-v);return Math.min(Math.max((y-r.low)/(1-r.low),0),1)}function we(e,t=`standard`,n,r=!1){let i=t===`standard`&&n!==2&&!r,a=e.getContext(`webgl2`,{antialias:i&&n!==0,alpha:!1,depth:i,stencil:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!1});if(!a)throw Error(`This browser does not support WebGL2.`);return a}function Te(e){let t=e.getExtension(`WEBGL_debug_renderer_info`);return String(t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):e.getParameter(e.RENDERER))}function Ee(e,t,n){let r=e.createShader(t);if(!r)throw Error(`Cannot create a shader`);return e.shaderSource(r,n),e.compileShader(r),r}function De(e,t,n,r){let i=e.getShaderInfoLog(t)??``,a=n.split(`
`).map((e,t)=>`${String(t+1).padStart(4)}: ${e}`).join(`
`);return Error(`Shader ${r} failed to compile:\n${i}\n${a}`)}var Oe={Frame:0,Palette:1,PointLights:2},ke=new WeakMap;function Ae(e){let t=ke.get(e);return t===void 0&&(t=e.getExtension(`KHR_parallel_shader_compile`),ke.set(e,t)),t}function je(e){ke.delete(e)}var Me=class{handle;made;gl;locations=new Map;pending;biasFactor=0;biasUnits=0;constructor(e,t,n,r,i={}){if(this.gl=e,this.made={label:t,vs:n,fs:r,attribs:i},e.isContextLost()){this.handle=null,this.pending=null;return}let a=e.createProgram();if(!a)throw Error(`Cannot create a program`);let o=Ee(e,e.VERTEX_SHADER,n),s=Ee(e,e.FRAGMENT_SHADER,r);e.attachShader(a,o),e.attachShader(a,s);for(let[t,n]of Object.entries(i))e.bindAttribLocation(a,n,t);e.linkProgram(a),this.handle=a,this.pending={label:t,vs:n,fs:r,v:o,f:s}}restore(){let e=this.gl,{label:t,vs:n,fs:r,attribs:i}=this.made;this.locations.clear(),this.biasFactor=0,this.biasUnits=0;let a=e.createProgram();if(!a){this.pending=null;return}let o=Ee(e,e.VERTEX_SHADER,n),s=Ee(e,e.FRAGMENT_SHADER,r);e.attachShader(a,o),e.attachShader(a,s);for(let[t,n]of Object.entries(i))e.bindAttribLocation(a,n,t);e.linkProgram(a),this.handle=a,this.pending={label:t,vs:n,fs:r,v:o,f:s}}isComplete(){if(!this.pending)return!0;let e=Ae(this.gl);return!e||this.gl.getProgramParameter(this.handle,e.COMPLETION_STATUS_KHR)===!0}settle(){let e=this.pending;if(!e)return;this.pending=null;let t=this.gl,n=this.handle;if(!t.getProgramParameter(n,t.LINK_STATUS))throw t.getShaderParameter(e.v,t.COMPILE_STATUS)?t.getShaderParameter(e.f,t.COMPILE_STATUS)?Error(`Program ${e.label} failed to link: ${t.getProgramInfoLog(n)??``}`):De(t,e.f,e.fs,`${e.label} (fragment)`):De(t,e.v,e.vs,`${e.label} (vertex)`);t.deleteShader(e.v),t.deleteShader(e.f);for(let[e,r]of Object.entries(Oe)){let i=t.getUniformBlockIndex(n,e);i!==t.INVALID_INDEX&&t.uniformBlockBinding(n,i,r)}}use(){this.pending&&this.settle(),this.gl.useProgram(this.handle)}loc(e){let t=this.locations.get(e);return t===void 0&&(this.pending&&this.settle(),t=this.gl.getUniformLocation(this.handle,e),this.locations.set(e,t)),t}int(e,t){this.gl.uniform1i(this.loc(e),t)}ivec4(e,t,n,r,i){this.gl.uniform4i(this.loc(e),t,n,r,i)}float(e,t){this.gl.uniform1f(this.loc(e),t)}vec2(e,t,n){this.gl.uniform2f(this.loc(e),t,n)}vec3(e,t,n,r){this.gl.uniform3f(this.loc(e),t,n,r)}vec3v(e,t){this.gl.uniform3fv(this.loc(e),t)}vec4v(e,t){this.gl.uniform4fv(this.loc(e),t)}mat4(e,t){this.gl.uniformMatrix4fv(this.loc(e),!1,t)}depthBias(e,t){(e!==this.biasFactor||t!==this.biasUnits)&&(this.biasFactor=e,this.biasUnits=t,this.gl.uniform2f(this.loc(`u_whDepthBias`),e,t))}set(e,t){let n=this.gl,r=this.loc(e);`int`in t?n.uniform1i(r,t.int):`float`in t?n.uniform1f(r,t.float):`vec2`in t?n.uniform2f(r,t.vec2[0],t.vec2[1]):`vec3`in t?n.uniform3f(r,t.vec3[0],t.vec3[1],t.vec3[2]):`vec4`in t?n.uniform4f(r,t.vec4[0],t.vec4[1],t.vec4[2],t.vec4[3]):`ivec4`in t?n.uniform4i(r,t.ivec4[0],t.ivec4[1],t.ivec4[2],t.ivec4[3]):n.uniformMatrix4fv(r,!1,t.mat4)}};function Ne(e,t,n,r=e.STATIC_DRAW){let i=e.createBuffer();if(!i)throw Error(`Cannot create a buffer`);return e.bindBuffer(t,i),e.bufferData(t,n,r),i}function Pe(e,t,n,r){e.bindBuffer(e.ARRAY_BUFFER,t);for(let t of r)e.enableVertexAttribArray(t.loc),t.integer?e.vertexAttribIPointer(t.loc,t.size,t.type,n,t.offset):e.vertexAttribPointer(t.loc,t.size,t.type,t.normalized??!1,n,t.offset),t.divisor&&e.vertexAttribDivisor(t.loc,t.divisor)}function Fe(e,t){let n=e.createTexture();if(!n)throw Error(`Cannot create a texture`);return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texImage2D(e.TEXTURE_2D,0,t.internalFormat,t.width,t.height,0,t.format,t.type,t.data??null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.minFilter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t.magFilter??e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrap??e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrap??e.CLAMP_TO_EDGE),t.mipmaps&&e.generateMipmap(e.TEXTURE_2D),n}function Ie(e,t){let n=t.mode??e.TRIANGLES;e.bindVertexArray(t.vao),t.instances>0?t.indexType===null?e.drawArraysInstanced(n,0,t.count,t.instances):e.drawElementsInstanced(n,t.count,t.indexType,0,t.instances):t.indexType===null?e.drawArrays(n,0,t.count):e.drawElements(n,t.count,t.indexType,0)}var Le=`#version 300 es
void main() {
  // One triangle across the whole target.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Re=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D u_src;
out vec4 o_color;
void main() {
  o_color = vec4(texelFetch(u_src, ivec2(gl_FragCoord.xy), 0).rgb, 1.0);
}`,ze=`#version 300 es
precision highp float;
precision highp sampler2D;
uniform sampler2D u_src;
uniform vec4 u_gradeLift;  // rgb lift, w exposure
uniform vec4 u_gradeGamma; // rgb 1 / gamma, w saturation
uniform vec4 u_gradeGain;  // rgb gain, w contrast
out vec4 o_color;
void main() {
  vec3 c = texelFetch(u_src, ivec2(gl_FragCoord.xy), 0).rgb * u_gradeLift.w;
  c = (c + u_gradeLift.rgb * (1.0 - c)) * u_gradeGain.rgb;
  c = pow(max(c, 0.0), u_gradeGamma.rgb);
  c = mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, u_gradeGamma.w);
  c = (c - 0.5) * u_gradeGain.w + 0.5;
  o_color = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,Be=4,Ve=class{gl;name;emptyVao;state={depthTest:!1,depthFunc:`less`,depthWrite:!0,cull:`none`,blend:null,alphaToCoverage:!1,polygonOffset:null};cullSide=`back`;depth=`standard`;sceneSamples=Be;standardOffscreen=!1;readableDepth=!1;clip=null;scene=null;presentProgram=null;gradeProgram=null;grade=null;reversedNow=!1;biasInProgram=!1;current=null;boundFbo=null;fixedSamplers={};hasFixedSamplers=!1;samplersSet=new WeakSet;retainUploads=!1;programs=[];blocks=[];depthTargets=new Set;colorTargets=new Set;layeredTargets=new Set;meshRecipes=new Map;vertexOwner=new Map;instanceRecipes=new Map;textureRecipes=new Map;bakeOf=new Map;liveTexture=new Map;restoredListeners=[];loseExt=null;compilingPrograms=[];allocated=new Map;totals={buffers:0,textures:0,targets:0};constructor(e){this.gl=e,this.name=Te(e);let t=e.createVertexArray();if(!t)throw Error(`Cannot create a VAO`);this.emptyVao=t,e.cullFace(e.BACK),this.cullSide=`back`,this.setState({...this.state},!0)}get depthMode(){return this.depth}setDepthMode(e){let t=this.gl,n=e;return n===`reversed`&&(this.clip??=t.getExtension(`EXT_clip_control`),this.clip||(n=`logarithmic`)),n===this.depth||(this.depth=n,this.offscreen()||this.dropScene(),this.convention(!0)),n}setMainSamples(e){(e!==this.sceneSamples||this.standardOffscreen!==(e===2))&&(this.dropScene(),this.sceneSamples=e,this.standardOffscreen=e===2)}setReadableDepth(e){e!==this.readableDepth&&(this.dropScene(),this.readableDepth=e)}offscreen(){return this.depth!==`standard`||this.standardOffscreen||this.readableDepth}convention(e){let t=e&&this.depth===`reversed`,n=e&&this.depth===`logarithmic`;if(t===this.reversedNow&&n===this.biasInProgram)return;this.reversedNow=t,this.biasInProgram=n;let r=this.clip;r&&r.clipControlEXT(r.LOWER_LEFT_EXT,t?r.ZERO_TO_ONE_EXT:r.NEGATIVE_ONE_TO_ONE_EXT),this.gl.depthFunc(this.depthFunc(this.state.depthFunc)),this.applyPolygonOffset(this.state.polygonOffset)}depthFunc(e){let t=this.gl;return this.reversedNow?e===`less`?t.GREATER:t.GEQUAL:e===`less`?t.LESS:t.LEQUAL}applyPolygonOffset(e){let t=this.gl;e&&!this.biasInProgram?(t.enable(t.POLYGON_OFFSET_FILL),this.reversedNow?t.polygonOffset(-e[0],-e[1]):t.polygonOffset(e[0],e[1])):t.disable(t.POLYGON_OFFSET_FILL)}syncDepthBias(){let e=this.current;if(!e)return;let t=this.state.polygonOffset;e.depthBias(t?t[0]:0,t?t[1]:0)}sceneTarget(){let e=this.gl,t=e.drawingBufferWidth,n=e.drawingBufferHeight;if(this.scene&&this.scene.width===t&&this.scene.height===n)return this.scene;this.dropScene();let r=e.createFramebuffer(),i=e.createFramebuffer(),a=e.createRenderbuffer(),o=e.createRenderbuffer();if(!r||!i||!a||!o)throw Error(`Cannot create the offscreen main target`);let s=Math.min(this.sceneSamples,e.getParameter(e.MAX_SAMPLES));if(e.bindRenderbuffer(e.RENDERBUFFER,a),e.renderbufferStorageMultisample(e.RENDERBUFFER,s,e.RGBA8,t,n),e.bindRenderbuffer(e.RENDERBUFFER,o),e.renderbufferStorageMultisample(e.RENDERBUFFER,s,e.DEPTH_COMPONENT32F,t,n),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,o),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`The offscreen main target is incomplete`);let c=Fe(e,{internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE,width:t,height:n});if(e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`The resolve target is incomplete`);let l={fbo:r,color:a,depth:o,resolveFbo:i,resolved:c,width:t,height:n,depthCopy:null};return this.track(l,`targets`,t*n*(Math.max(1,s)*8+4)),this.presentProgram??=this.program(`present`,Le,Re),this.scene=l,l}dropScene(){let e=this.scene;if(!e)return;let t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),this.boundFbo=null,t.deleteFramebuffer(e.fbo),t.deleteFramebuffer(e.resolveFbo),t.deleteRenderbuffer(e.color),t.deleteRenderbuffer(e.depth),t.deleteTexture(e.resolved),this.untrack(e),e.depthCopy&&(t.deleteFramebuffer(e.depthCopy.fbo),t.deleteTexture(e.depthCopy.texture),this.untrack(e.depthCopy)),this.scene=null}sceneDepth(){let e=this.gl;if(!this.offscreen()||e.isContextLost())return null;let t=this.sceneTarget();if(!t.depthCopy){let n=Fe(e,{internalFormat:e.DEPTH_COMPONENT32F,format:e.DEPTH_COMPONENT,type:e.FLOAT,width:t.width,height:t.height});e.bindTexture(e.TEXTURE_2D,null);let r=e.createFramebuffer();if(!r)throw Error(`Cannot create the depth copy`);e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,n,0),e.drawBuffers([e.NONE]),e.readBuffer(e.NONE);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;if(e.bindFramebuffer(e.FRAMEBUFFER,this.boundFbo),!i)return e.deleteFramebuffer(r),e.deleteTexture(n),null;t.depthCopy={texture:n,fbo:r},this.track(t.depthCopy,`targets`,t.width*t.height*4)}return e.bindFramebuffer(e.READ_FRAMEBUFFER,t.fbo),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,t.depthCopy.fbo),e.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,e.DEPTH_BUFFER_BIT,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,this.boundFbo),t.depthCopy.texture}present(){let e=this.scene;if(!e||!this.presentProgram||!this.offscreen())return;let t=this.grade;t&&(this.gradeProgram??=this.program(`present (graded)`,Le,ze));let n=t?this.gradeProgram:this.presentProgram,r=this.gl;r.bindFramebuffer(r.READ_FRAMEBUFFER,e.fbo),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,e.resolveFbo),r.blitFramebuffer(0,0,e.width,e.height,0,0,e.width,e.height,r.COLOR_BUFFER_BIT,r.NEAREST),r.bindFramebuffer(r.FRAMEBUFFER,null),this.boundFbo=null,r.viewport(0,0,e.width,e.height),this.setState({depthTest:!1,cullBack:!1,blend:null,alphaToCoverage:!1,polygonOffset:null}),this.use(n),this.texture(0,e.resolved),n.int(`u_src`,0),t&&(n.set(`u_gradeLift`,{vec4:[t.lift[0],t.lift[1],t.lift[2],t.exposure]}),n.set(`u_gradeGamma`,{vec4:[1/Math.max(t.gamma[0],.001),1/Math.max(t.gamma[1],.001),1/Math.max(t.gamma[2],.001),t.saturation]}),n.set(`u_gradeGain`,{vec4:[t.gain[0],t.gain[1],t.gain[2],t.contrast]})),this.drawFullscreen(),this.texture(0,null),r.bindVertexArray(null)}get lost(){return this.gl.isContextLost()}onRestored(e){return this.restoredListeners.push(e),()=>{let t=this.restoredListeners.indexOf(e);t>=0&&this.restoredListeners.splice(t,1)}}contextRestored(){let e=this.gl;if(e.isContextLost())return;je(e),this.loseExt=null;let t=e.createVertexArray();if(!t)throw Error(`Cannot create a VAO`);this.emptyVao=t,e.cullFace(e.BACK),this.cullSide=`back`,this.scene&&=(this.untrack(this.scene),this.scene.depthCopy&&this.untrack(this.scene.depthCopy),null);for(let[e,t]of this.allocated)(t.kind!==`textures`||!this.textureRecipes.has(e)&&!this.bakeOf.has(e))&&(this.totals[t.kind]-=t.bytes,this.allocated.delete(e));this.boundFbo=null,this.current=null,this.samplersSet=new WeakSet,this.clip=this.depth===`reversed`?e.getExtension(`EXT_clip_control`):null,this.reversedNow=!1,this.biasInProgram=!1,this.setState({...this.state},!0);for(let e of this.programs)e.restore();this.compilingPrograms=[...this.programs];for(let e of this.blocks)e();for(let e of this.depthTargets)e.texture&&this.untrack(e.texture),Object.assign(e,this.makeDepthTarget(e.size,e.repeat));for(let e of this.colorTargets){this.untrack(e);let t=this.makeColorTarget(e.width,e.height,e.textures.length,e.format);Object.assign(e,t??{fbo:null,textures:e.textures.map(()=>null)}),t&&this.track(e,`targets`,Ue(e))}for(let e of this.layeredTargets){this.untrack(e);let t=this.makeLayered(e);Object.assign(e,t??{fbo:null,texture:null}),t&&this.track(e,`targets`,We(e))}for(let[t,n]of this.instanceRecipes){t.buffer&&this.untrack(t.buffer);let r=Ne(e,e.ARRAY_BUFFER,n.data,e.DYNAMIC_DRAW);this.track(r,`buffers`,n.data.byteLength),t.buffer=r}for(let[t,n]of this.meshRecipes){for(let e of t.buffers??[])this.untrack(e),this.vertexOwner.delete(e);let r=n.data?this.buildMesh(n.data,n.locations,n.instances):n.base?this.buildShared(n.base,n.locations,n.instances):null;if(!r)continue;let i=t.source;Object.assign(t,r),n.data&&i&&r.source&&(Object.assign(i,r.source),t.source=i);let a=n.data?t.buffers?.[0]:void 0;if(a&&(this.vertexOwner.set(a,t),n.patches)){e.bindBuffer(e.ARRAY_BUFFER,a);for(let[t,r]of n.patches)e.bufferSubData(e.ARRAY_BUFFER,t,r)}}for(let[e,t]of this.textureRecipes)this.liveTexture.set(e,t());for(let t of new Set(this.bakeOf.values())){if(t.alive<=0)continue;let n=t.run();t.keys.forEach((r,i)=>{this.bakeOf.get(r)===t?this.liveTexture.set(r,n[i]):e.deleteTexture(n[i])})}e.bindVertexArray(null),e.bindBuffer(e.ARRAY_BUFFER,null);for(let e of[...this.restoredListeners])e()}loseContext(){return this.loseExt??=this.gl.getExtension(`WEBGL_lose_context`),!this.loseExt||this.gl.isContextLost()?!1:(this.loseExt.loseContext(),!0)}restoreContext(){return!this.loseExt||!this.gl.isContextLost()?!1:(this.loseExt.restoreContext(),!0)}memory(){let e=this.totals;return{buffers:e.buffers,textures:e.textures,targets:e.targets,total:e.buffers+e.textures+e.targets}}track(e,t,n){this.allocated.set(e,{kind:t,bytes:n}),this.totals[t]+=n}untrack(e){let t=this.allocated.get(e);t&&(this.totals[t.kind]-=t.bytes,this.allocated.delete(e))}uniformBlock(e,t,n){let r=this.gl,i=r.createBuffer();if(!i&&!r.isContextLost())throw Error(`Cannot create a uniform buffer`);let a=t,o=()=>{r.bindBuffer(r.UNIFORM_BUFFER,i),r.bufferData(r.UNIFORM_BUFFER,t.byteLength,n?r.DYNAMIC_DRAW:r.STATIC_DRAW),r.bufferSubData(r.UNIFORM_BUFFER,0,a),r.bindBufferBase(r.UNIFORM_BUFFER,e,i)};return i&&(this.track(i,`buffers`,t.byteLength),r.bindBuffer(r.UNIFORM_BUFFER,i),r.bufferData(r.UNIFORM_BUFFER,t,n?r.DYNAMIC_DRAW:r.STATIC_DRAW),r.bindBufferBase(r.UNIFORM_BUFFER,e,i)),this.blocks.push(()=>{i&&this.untrack(i),i=r.createBuffer(),i&&(this.track(i,`buffers`,t.byteLength),o())}),{floats:t.length,update(e){a=e,r.bindBuffer(r.UNIFORM_BUFFER,i),r.bufferSubData(r.UNIFORM_BUFFER,0,e)}}}depthTarget(e,t=!1){if(this.gl.isContextLost()){let n={size:e,repeat:t,texture:null,fbo:null};return this.depthTargets.add(n),n}let n={size:e,repeat:t,...this.makeDepthTarget(e,t)};return this.depthTargets.add(n),n}makeDepthTarget(e,t){let n=this.gl,r=Fe(n,{internalFormat:n.DEPTH_COMPONENT24,format:n.DEPTH_COMPONENT,type:n.UNSIGNED_INT,width:e,height:e,minFilter:n.LINEAR,magFilter:n.LINEAR,...t?{wrap:n.REPEAT}:{}});n.texParameteri(n.TEXTURE_2D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_COMPARE_FUNC,n.LEQUAL);let i=n.createFramebuffer();if(!i)throw Error(`Cannot create a depth target`);if(n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,r,0),n.drawBuffers([n.NONE]),n.readBuffer(n.NONE),n.checkFramebufferStatus(n.FRAMEBUFFER)!==n.FRAMEBUFFER_COMPLETE)throw Error(`Depth target is incomplete`);return n.bindFramebuffer(n.FRAMEBUFFER,null),this.track(r,`targets`,e*e*4),{texture:r,fbo:i}}colorTarget(e,t,n,r){if(this.gl.isContextLost())return null;let i=this.makeColorTarget(e,t,n,r);if(!i)return null;let a={width:e,height:t,format:r,...i};return this.colorTargets.add(a),this.track(a,`targets`,Ue(a)),a}makeColorTarget(e,t,n,r){let i=this.gl;if(r===`rgba16f`&&!i.getExtension(`EXT_color_buffer_float`)&&!i.getExtension(`EXT_color_buffer_half_float`))return null;let a=r===`rgba16f`?{internalFormat:i.RGBA16F,format:i.RGBA,type:i.HALF_FLOAT}:{internalFormat:i.RGBA8,format:i.RGBA,type:i.UNSIGNED_BYTE},o=[];for(let r=0;r<n;r++)o.push(Fe(i,{...a,width:e,height:t,minFilter:i.LINEAR,magFilter:i.LINEAR}));i.bindTexture(i.TEXTURE_2D,null);let s=i.createFramebuffer();if(!s)throw Error(`Cannot create a colour target`);i.bindFramebuffer(i.FRAMEBUFFER,s),o.forEach((e,t)=>i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+t,i.TEXTURE_2D,e,0)),i.drawBuffers(o.map((e,t)=>i.COLOR_ATTACHMENT0+t));let c=i.checkFramebufferStatus(i.FRAMEBUFFER)===i.FRAMEBUFFER_COMPLETE;if(i.bindFramebuffer(i.FRAMEBUFFER,this.boundFbo),c)return{textures:o,fbo:s};i.deleteFramebuffer(s);for(let e of o)i.deleteTexture(e);return null}deleteColorTarget(e){let t=e;if(this.colorTargets.delete(t)){this.untrack(t),t.fbo&&this.gl.deleteFramebuffer(t.fbo);for(let e of t.textures)e&&this.gl.deleteTexture(e);t.fbo=null}}fill(e,t,n={}){let r=e.fbo;if(!r)return;let i=this.gl;i.bindFramebuffer(i.FRAMEBUFFER,r),i.viewport(0,0,e.width,e.height),this.setState({depthTest:!1,depthWrite:!1,cullBack:!1,blend:null,alphaToCoverage:!1,polygonOffset:null}),this.use(t);for(let e in n)t.set(e,n[e]);i.bindVertexArray(this.emptyVao),i.drawArrays(i.TRIANGLES,0,3),i.bindFramebuffer(i.FRAMEBUFFER,this.boundFbo)}volumeTarget(e,t,n,r){if(this.gl.isContextLost())return null;let i={kind:`volume`,width:e,height:t,depth:n,format:r,fbo:null,texture:null},a=this.makeLayered(i);return a?(Object.assign(i,a),this.layeredTargets.add(i),this.track(i,`targets`,We(i)),i):null}cubeTarget(e,t){if(this.gl.isContextLost())return null;let n={kind:`cube`,size:e,format:t,fbo:null,texture:null},r=this.makeLayered(n);return r?(Object.assign(n,r),this.layeredTargets.add(n),this.track(n,`targets`,We(n)),n):null}deleteLayeredTarget(e){let t=e;this.layeredTargets.delete(t)&&(this.untrack(t),t.fbo&&this.gl.deleteFramebuffer(t.fbo),t.texture&&this.gl.deleteTexture(t.texture),t.fbo=null)}makeLayered(e){let t=this.gl,n=e.kind===`cube`,r=n?t.TEXTURE_CUBE_MAP:t.TEXTURE_3D;if(n){if(e.size>t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)||e.format===`rgba16f`&&!t.getExtension(`EXT_color_buffer_float`)&&!t.getExtension(`EXT_color_buffer_half_float`))return null}else if(Math.max(e.width,e.height,e.depth)>t.getParameter(t.MAX_3D_TEXTURE_SIZE))return null;let i=t.createTexture();if(!i)return null;if(t.bindTexture(r,i),n){let n=e.format===`rgba16f`?{internal:t.RGBA16F,type:t.HALF_FLOAT}:{internal:t.RGBA8,type:t.UNSIGNED_BYTE};t.texStorage2D(t.TEXTURE_CUBE_MAP,1,n.internal,e.size,e.size),t.texParameteri(r,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(r,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}else t.texStorage3D(t.TEXTURE_3D,1,e.format===`r8`?t.R8:t.RGBA8,e.width,e.height,e.depth),t.texParameteri(r,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(r,t.TEXTURE_WRAP_T,t.REPEAT),t.texParameteri(r,t.TEXTURE_WRAP_R,t.REPEAT);t.texParameteri(r,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(r,t.TEXTURE_MAG_FILTER,t.LINEAR),t.bindTexture(r,null);let a=t.createFramebuffer();if(!a)throw Error(`Cannot create a layered target`);t.bindFramebuffer(t.FRAMEBUFFER,a),n?t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X,i,0):t.framebufferTextureLayer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,i,0,0),t.drawBuffers([t.COLOR_ATTACHMENT0]);let o=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindFramebuffer(t.FRAMEBUFFER,this.boundFbo),o?{fbo:a,texture:i}:(t.deleteFramebuffer(a),t.deleteTexture(i),null)}fillLayer(e,t,n,r={}){let i=e;if(!i.fbo)return;let a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,i.fbo),e.kind===`cube`?(a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Math.min(5,Math.max(0,t|0)),i.texture,0),a.viewport(0,0,e.size,e.size)):(a.framebufferTextureLayer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,i.texture,0,Math.min(e.depth-1,Math.max(0,t|0))),a.viewport(0,0,e.width,e.height)),this.setState({depthTest:!1,depthWrite:!1,cullBack:!1,blend:null,alphaToCoverage:!1,polygonOffset:null}),this.use(n);for(let e in r)n.set(e,r[e]);a.bindVertexArray(this.emptyVao),a.drawArrays(a.TRIANGLES,0,3),a.bindFramebuffer(a.FRAMEBUFFER,this.boundFbo)}volumeTexture(e,t){let n=this.gl;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_3D,t?t.texture:null)}cubeTexture(e,t){let n=this.gl;n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_CUBE_MAP,t?t.texture:null)}pixelTexture(e){let t=this.gl,n=this.newTexture(()=>Fe(t,{internalFormat:t.RGBA8,format:t.RGBA,type:t.UNSIGNED_BYTE,width:1,height:1,data:new Uint8Array(e)}));return this.track(n,`textures`,4),n}newTexture(e){if(!this.retainUploads)return e();let t;return this.gl.isContextLost()?(t={},this.liveTexture.set(t,null)):t=e(),this.textureRecipes.set(t,e),t}target(e){let t=this.gl;this.boundFbo=e?e.fbo:this.offscreen()?this.sceneTarget().fbo:null,t.bindFramebuffer(t.FRAMEBUFFER,this.boundFbo),this.convention(e===null)}copyDepth(e,t,n){let r=e.fbo,i=t.fbo;if(!r||!i||n<=0)return;let a=this.gl;a.bindFramebuffer(a.READ_FRAMEBUFFER,r),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,i),a.blitFramebuffer(0,0,n,n,0,0,n,n,a.DEPTH_BUFFER_BIT,a.NEAREST),a.bindFramebuffer(a.FRAMEBUFFER,this.boundFbo)}viewport(e,t,n,r){this.gl.viewport(e,t,n,r)}clear(e,t){let n=this.gl,r=0;e&&(n.clearColor(e[0],e[1],e[2],1),r|=n.COLOR_BUFFER_BIT),t&&(n.clearDepth(+!this.reversedNow),r|=n.DEPTH_BUFFER_BIT),n.clear(r)}clearDepthRect(e,t,n,r){let i=this.gl;i.enable(i.SCISSOR_TEST),i.scissor(e,t,n,r),i.clearDepth(+!this.reversedNow),i.clear(i.DEPTH_BUFFER_BIT),i.disable(i.SCISSOR_TEST)}texture(e,t){let n=this.gl;if(n.activeTexture(n.TEXTURE0+e),t&&this.liveTexture.size>0){let e=this.liveTexture.get(t);if(e!==void 0){n.bindTexture(n.TEXTURE_2D,e);return}}n.bindTexture(n.TEXTURE_2D,t)}setState(e,t=!1){let n=this.gl,r=this.state;t&&(e.depthTest!==void 0&&(r.depthTest=!e.depthTest),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc===`less`?`lequal`:`less`),e.depthWrite!==void 0&&(r.depthWrite=!e.depthWrite),e.blend!==void 0&&(r.blend=e.blend?null:{src:`one`,dst:`one`}),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=!e.alphaToCoverage),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset?null:[0,0])),e.depthTest!==void 0&&e.depthTest!==r.depthTest&&(e.depthTest?n.enable(n.DEPTH_TEST):n.disable(n.DEPTH_TEST),r.depthTest=e.depthTest),e.depthFunc!==void 0&&e.depthFunc!==r.depthFunc&&(r.depthFunc=e.depthFunc,n.depthFunc(this.depthFunc(e.depthFunc))),e.depthWrite!==void 0&&e.depthWrite!==r.depthWrite&&(n.depthMask(e.depthWrite),r.depthWrite=e.depthWrite);let i=e.cull??(e.cullBack===void 0?void 0:e.cullBack?`back`:`none`);if(i!==void 0){let e=i!==`none`;(t||e!==(r.cull!==`none`))&&(e?n.enable(n.CULL_FACE):n.disable(n.CULL_FACE)),e&&(t||i!==this.cullSide)&&(n.cullFace(i===`front`?n.FRONT:n.BACK),this.cullSide=i),r.cull=i}if(e.blend!==void 0&&!Ke(e.blend,r.blend)){if(e.blend){n.enable(n.BLEND);let t=e=>Ge(n,e);n.blendFuncSeparate(t(e.blend.src),t(e.blend.dst),t(e.blend.srcAlpha??e.blend.src),t(e.blend.dstAlpha??e.blend.dst))}else n.disable(n.BLEND);r.blend=e.blend}e.alphaToCoverage!==void 0&&e.alphaToCoverage!==r.alphaToCoverage&&(e.alphaToCoverage?n.enable(n.SAMPLE_ALPHA_TO_COVERAGE):n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),r.alphaToCoverage=e.alphaToCoverage),e.polygonOffset!==void 0&&!qe(e.polygonOffset,r.polygonOffset)&&(r.polygonOffset=e.polygonOffset,this.applyPolygonOffset(e.polygonOffset))}program(e,t,n,r={}){let i=new Me(this.gl,e,t,n,r);return this.compilingPrograms.push(i),this.programs.push(i),i}compiling(){return this.compilingPrograms=this.compilingPrograms.filter(e=>!e.isComplete()),this.compilingPrograms.length}use(e){if(e.use(),this.current=e,this.hasFixedSamplers&&!this.samplersSet.has(e)){this.samplersSet.add(e);for(let t in this.fixedSamplers)e.int(t,this.fixedSamplers[t])}}fixSampler(e,t){this.fixedSamplers[e]=t,this.hasFixedSamplers=!0}draw(e){this.biasInProgram&&this.syncDepthBias(),Ie(this.gl,e)}drawFullscreen(){this.drawVertices(3)}drawVertices(e){e<=0||(this.biasInProgram&&this.syncDepthBias(),this.gl.bindVertexArray(this.emptyVao),this.gl.drawArrays(this.gl.TRIANGLES,0,e))}writeBuffer(e,t,n,r=0){if(n<=0)return;let i=this.gl;if(this.retainUploads){let i=this.vertexOwner.get(e),a=i?this.meshRecipes.get(i):void 0;if(a){let e=a.patches??=new Map;e.delete(r),e.set(r,new Uint8Array(t.buffer,t.byteOffset,n*t.BYTES_PER_ELEMENT).slice())}}i.bindBuffer(i.ARRAY_BUFFER,e),i.bufferSubData(i.ARRAY_BUFFER,r,t,0,n)}unbindMesh(){this.gl.bindVertexArray(null)}createMesh(e,t,n){if(!this.retainUploads)return this.buildMesh(e,t,n);let r=this.gl.isContextLost()?this.emptyMesh(e,n):this.buildMesh(e,t,n);this.meshRecipes.set(r,{data:e,base:null,locations:t,instances:n,patches:null});let i=r.buffers?.[0];return i&&this.vertexOwner.set(i,r),r}emptyMesh(e,t){let n=this.gl,r=e.primitive===`lines`,i=e.indices?e.indices instanceof Uint32Array?n.UNSIGNED_INT:n.UNSIGNED_SHORT:null,a=r?{mode:n.LINES}:{};return{vao:null,count:e.count,indexType:i,triangles:r?0:e.count/3,instances:t?t.floats*4/t.layout.stride:0,...a,buffers:[],bytes:e.vertices.byteLength+(e.indices?.byteLength??0),source:{vertices:null,indices:null,layout:e.layout,indexType:i,count:e.count,...a}}}buildMesh(e,t,n){let r=this.gl,i=r.createVertexArray();if(!i)throw Error(`Cannot create a VAO`);r.bindVertexArray(i);let a=Ne(r,r.ARRAY_BUFFER,e.vertices);this.track(a,`buffers`,e.vertices.byteLength),Pe(r,a,e.layout.stride,this.attribSpecs(e.layout,t,0)),n&&Pe(r,n.buffer,n.layout.stride,this.attribSpecs(n.layout,t,1));let o=[a],s=null;e.indices&&(s=Ne(r,r.ELEMENT_ARRAY_BUFFER,e.indices),this.track(s,`buffers`,e.indices.byteLength),o.push(s)),r.bindVertexArray(null);let c=e.primitive===`lines`,l=e.indices?e.indices instanceof Uint32Array?r.UNSIGNED_INT:r.UNSIGNED_SHORT:null,u=c?{mode:r.LINES}:{};return{vao:i,count:e.count,indexType:l,triangles:c?0:e.count/3,instances:n?n.floats*4/n.layout.stride:0,...u,buffers:o,bytes:e.vertices.byteLength+(e.indices?.byteLength??0),source:{vertices:a,indices:s,layout:e.layout,indexType:l,count:e.count,...u}}}shareMesh(e,t,n){let r=this.buildShared(e,t,n);return this.retainUploads&&this.meshRecipes.set(r,{data:null,base:e,locations:t,instances:n,patches:null}),r}buildShared(e,t,n){let r=e.source;if(!r)throw Error(`shareMesh: the base mesh has no source buffers`);let i=this.gl,a=i.createVertexArray();if(!a&&!(this.retainUploads&&i.isContextLost()))throw Error(`Cannot create a VAO`);return i.bindVertexArray(a),Pe(i,r.vertices,r.layout.stride,this.attribSpecs(r.layout,t,0)),n&&Pe(i,n.buffer,n.layout.stride,this.attribSpecs(n.layout,t,1)),r.indices&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,r.indices),i.bindVertexArray(null),{vao:a,count:r.count,indexType:r.indexType,triangles:r.mode===void 0?r.count/3:0,instances:n?n.floats*4/n.layout.stride:0,...r.mode===void 0?{}:{mode:r.mode},buffers:[],bytes:0,source:r}}createInstances(e){let t=this.gl;if(this.retainUploads&&t.isContextLost()){let t={buffer:null,layout:e.layout,floats:e.data.length};return this.instanceRecipes.set(t,e),t}let n=Ne(t,t.ARRAY_BUFFER,e.data,t.DYNAMIC_DRAW);this.track(n,`buffers`,e.data.byteLength);let r={buffer:n,layout:e.layout,floats:e.data.length};return this.retainUploads&&this.instanceRecipes.set(r,e),r}deleteMesh(e){this.gl.deleteVertexArray(e.vao);for(let t of e.buffers??[])this.untrack(t),this.vertexOwner.delete(t),this.gl.deleteBuffer(t);this.meshRecipes.delete(e)}deleteInstances(e){this.untrack(e.buffer),this.instanceRecipes.delete(e),this.gl.deleteBuffer(e.buffer)}createTexture(e){let t=this.gl,n=this.newTexture(()=>{let n=Ye(t,e.format),r=Fe(t,{...n,width:e.width,height:e.height,data:e.data,...Xe(t,e)});return e.filter===`mipmap`&&this.finishMipmaps(r,e),r});return this.track(n,`textures`,He(e.width,e.height,h(e.format),e.filter===`mipmap`)),n}deleteTexture(e){this.untrack(e),this.textureRecipes.delete(e);let t=this.bakeOf.get(e);t&&(this.bakeOf.delete(e),t.alive--);let n=this.liveTexture.get(e);n===void 0?this.gl.deleteTexture(e):(this.liveTexture.delete(e),this.gl.deleteTexture(n))}bake(e,t,n,r,i,a,o){let s=()=>this.runBake(e,t,n,r,i,a,o),c=this.retainUploads&&this.gl.isContextLost(),l=c?o.map(()=>({})):s();if(l.forEach((e,t)=>this.track(e,`textures`,He(n,r,4,o[t].filter===`mipmap`))),this.retainUploads){let e={keys:l.slice(),alive:l.length,run:s};for(let t of l)this.bakeOf.set(t,e),c&&this.liveTexture.set(t,null)}return l}runBake(e,t,n,r,i,a,o){let s=this.gl,c=i.map(e=>this.createTexture(e.texture)),l=o.map(e=>Fe(s,{...Ye(s,`rgba8`),width:n,height:r,...Xe(s,e)})),u=s.createFramebuffer();if(s.bindFramebuffer(s.FRAMEBUFFER,u),l.forEach((e,t)=>s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+t,s.TEXTURE_2D,e,0)),s.drawBuffers(l.map((e,t)=>s.COLOR_ATTACHMENT0+t)),s.checkFramebufferStatus(s.FRAMEBUFFER)!==s.FRAMEBUFFER_COMPLETE)throw Error(`Bake target of ${e} is incomplete`);let d=new Me(s,e,Le,t);d.use(),this.current=null,s.viewport(0,0,n,r),this.setState({depthTest:!1,cullBack:!1,blend:null,alphaToCoverage:!1,polygonOffset:null}),i.forEach((e,t)=>{this.texture(t,c[t]),d.int(e.sampler,t)});for(let[e,t]of Object.entries(a))d.set(e,t);this.drawFullscreen(),s.bindVertexArray(null),s.bindFramebuffer(s.FRAMEBUFFER,this.offscreen()?this.boundFbo:null),s.deleteFramebuffer(u);for(let e of c)this.deleteTexture(e);return s.deleteProgram(d.handle),l.forEach((e,t)=>{o[t].filter===`mipmap`&&this.finishMipmaps(e,o[t])}),l}finishMipmaps(e,t){let n=this.gl;n.bindTexture(n.TEXTURE_2D,e),n.generateMipmap(n.TEXTURE_2D);let r=t.anisotropy?n.getExtension(`EXT_texture_filter_anisotropic`):null;if(r&&t.anisotropy){let e=n.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT);n.texParameterf(n.TEXTURE_2D,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,e))}}attribSpecs(e,t,n){let r=[];for(let i of e.attribs){let e=t[i.name];e!==void 0&&r.push({loc:e,size:i.size,type:Je(this.gl,i.type),normalized:i.normalized??!1,integer:i.integer??!1,offset:i.offset,divisor:n})}return r}flush(){this.gl.flush()}mainSamples(){let e=this.gl;if(this.offscreen())return Math.min(this.sceneSamples,e.getParameter(e.MAX_SAMPLES));e.bindFramebuffer(e.FRAMEBUFFER,null);let t=e.getParameter(e.SAMPLES);return e.bindFramebuffer(e.FRAMEBUFFER,this.boundFbo),t}finish(){let e=new Uint8Array(4);this.gl.readPixels(0,0,1,1,this.gl.RGBA,this.gl.UNSIGNED_BYTE,e)}};function He(e,t,n,r){let i=e*t*n;return r?Math.round(i*4/3):i}function Ue(e){return e.width*e.height*e.textures.length*(e.format===`rgba16f`?8:4)}function We(e){return e.kind===`cube`?6*e.size*e.size*(e.format===`rgba16f`?8:4):e.width*e.height*e.depth*(e.format===`r8`?1:4)}function Ge(e,t){switch(t){case`zero`:return e.ZERO;case`one`:return e.ONE;case`src-alpha`:return e.SRC_ALPHA;case`one-minus-src-alpha`:return e.ONE_MINUS_SRC_ALPHA}}function Ke(e,t){return e===t?!0:!e||!t?!1:e.src===t.src&&e.dst===t.dst&&(e.srcAlpha??e.src)===(t.srcAlpha??t.src)&&(e.dstAlpha??e.dst)===(t.dstAlpha??t.dst)}function qe(e,t){return e===t?!0:!e||!t?!1:e[0]===t[0]&&e[1]===t[1]}function Je(e,t){switch(t){case`f32`:return e.FLOAT;case`i8`:return e.BYTE;case`u8`:return e.UNSIGNED_BYTE;case`i16`:return e.SHORT;case`u16`:return e.UNSIGNED_SHORT;case`i32`:return e.INT;case`u32`:return e.UNSIGNED_INT}}function Ye(e,t){switch(t){case`r8`:return{internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE};case`r8ui`:return{internalFormat:e.R8UI,format:e.RED_INTEGER,type:e.UNSIGNED_BYTE};case`rg8`:return{internalFormat:e.RG8,format:e.RG,type:e.UNSIGNED_BYTE};case`rgba8`:return{internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE}}}function Xe(e,t){return t.filter===`mipmap`?{minFilter:e.LINEAR_MIPMAP_LINEAR,magFilter:e.LINEAR}:t.filter===`linear`?{minFilter:e.LINEAR,magFilter:e.LINEAR}:{minFilter:e.NEAREST,magFilter:e.NEAREST}}var Ze={fovYDeg:45,minPitchDeg:5,maxPitchDeg:85,minDistance:2,maxDistance:500,turnPerPx:.006},Qe=class{setup;target=[0,0,0];yaw=0;pitch=30*e;distance=50;width=1;height=1;dpr=1;scratch={right:[0,0,0],up:[0,0,0],forward:[0,0,0]};scratchVp={right:[0,0,0],up:[0,0,0],forward:[0,0,0]};scratchEye=[0,0,0];keyOf=new Float64Array(8).fill(NaN);keyText=``;constructor(e={},t){this.setup={...Ze,...e},t&&this.setState(t)}setState(t){t.target&&(this.target=[...t.target]),t.yawDeg!==void 0&&(this.yaw=t.yawDeg*e),t.pitchDeg!==void 0&&(this.pitch=a(t.pitchDeg,this.setup.minPitchDeg,this.setup.maxPitchDeg)*e),t.distance!==void 0&&(this.distance=a(t.distance,this.setup.minDistance,this.setup.maxDistance)),this.keepAboveGround()}keepAboveGround(){let t=this.setup.groundAt;if(!t)return!1;let n=this.setup.minEyeHeight??1,r=this.setup.maxPitchDeg*e,i=this.pitch;if(this.eyeClear(t,n,i)>=0||i>=r)return!1;if(this.eyeClear(t,n,r)<0)return this.pitch=r,!0;let a=i,o=r;for(;o-a>1e-4;){let e=(a+o)/2;this.eyeClear(t,n,e)>=0?o=e:a=e}return this.pitch=o,!0}eyeClear(e,t,n){let r=this.target,i=this.distance,a=Math.cos(n)*i,o=r[0]+Math.sin(this.yaw)*a;return r[1]+Math.sin(n)*i-e(o,r[2]+Math.cos(this.yaw)*a)-t}state(){return{target:[...this.target],yawDeg:this.yaw/e,pitchDeg:this.pitch/e,distance:this.distance}}get heading(){return this.yaw}get tanHalfY(){return Math.tan(this.setup.fovYDeg*e/2)}get metresPerPixel(){return this.distance*this.pixelGrowth}get pixelGrowth(){return 2*this.tanHalfY/this.height}get refDepth(){return t(this.axes(this.scratch).forward,this.target)}axes(e){let t=this.yaw,n=this.pitch,i=e??{right:[0,0,0],up:[0,0,0],forward:[0,0,0]},a=i.right,o=i.forward;return a[0]=Math.cos(t),a[1]=0,a[2]=-Math.sin(t),o[0]=-Math.sin(t)*Math.cos(n),o[1]=-Math.sin(n),o[2]=-Math.cos(t)*Math.cos(n),r(a,o,i.up),i}eye(e){let t=this.axes(this.scratch).forward,n=this.target,r=this.distance,i=e??[0,0,0];return i[0]=n[0]-t[0]*r,i[1]=n[1]-t[1]*r,i[2]=n[2]-t[2]*r,i}viewProj(e,n,r){let{right:i,up:a,forward:o}=this.axes(this.scratchVp),s=this.eye(this.scratchEye),c=t(o,e)-t(o,s),l=Math.max(c+n,1),u=Math.max(c-n,l/2e3,.05),d=1/this.tanHalfY,f=d/(this.width/this.height),p=(l+u)/(l-u),m=-2*l*u/(l-u),h=r??new Float32Array(16);h.fill(0);let g=t(i,s),_=t(a,s),v=t(o,s);for(let e=0;e<3;e++)h[e*4+0]=f*i[e],h[e*4+1]=d*a[e],h[e*4+2]=p*o[e],h[e*4+3]=o[e];return h[12]=-f*g,h[13]=-d*_,h[14]=-p*v+m,h[15]=-v,h}dirInto(e,t,n,r){let{right:i,up:a,forward:o}=n,s=this.tanHalfY,c=s*(this.width/this.height),l=o[0]+i[0]*e*c+a[0]*t*s,u=o[1]+i[1]*e*c+a[1]*t*s,d=o[2]+i[2]*e*c+a[2]*t*s,f=Math.hypot(l,u,d)||1;return r[0]=l/f,r[1]=u/f,r[2]=d/f,r}dirAt(e,t){let{right:n,up:r,forward:a}=this.axes(),o=this.tanHalfY,s=o*(this.width/this.height);return i([a[0]+n[0]*e*s+r[0]*t*o,a[1]+n[1]*e*s+r[1]*t*o,a[2]+n[2]*e*s+r[2]*t*o])}cornerRays(e){if(!e){let e=this.eye(),t=[];for(let n of[-1,1])for(let r of[-1,1])t.push({origin:e,dir:this.dirAt(n,r)});return t}let t=this.axes(this.scratch);for(let n=0;n<4;n++){let r=e[n];this.eye(r.origin),this.dirInto(n<2?-1:1,n%2==0?-1:1,t,r.dir)}return e}cullVolume(){let e=this.eye(),{forward:r}=this.axes(),a=[this.dirAt(-1,-1),this.dirAt(-1,1),this.dirAt(1,1),this.dirAt(1,-1)],o=[[r[0],r[1],r[2],-t(r,e)]];for(let s=0;s<4;s++){let c=i(n(a[s],a[(s+1)%4]));t(c,r)<0&&(c=[-c[0],-c[1],-c[2]]),o.push([c[0],c[1],c[2],-t(c,e)])}return{kind:`frustum`,planes:o}}key(){let e=this.target,t=this.keyOf;return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===this.yaw&&t[4]===this.pitch&&t[5]===this.distance&&t[6]===this.width&&t[7]===this.height||(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=this.yaw,t[4]=this.pitch,t[5]=this.distance,t[6]=this.width,t[7]=this.height,this.keyText=`orbit|${e[0].toFixed(3)},${e[1].toFixed(3)},${e[2].toFixed(3)}|${this.yaw.toFixed(5)}|${this.pitch.toFixed(5)}|${this.distance.toFixed(3)}|${this.width}x${this.height}`),this.keyText}screenRay(e,t){return{origin:this.eye(),dir:this.dirAt(2*e/this.width-1,1-2*t/this.height)}}project(e){let{right:n,up:r,forward:i}=this.axes(),a=this.eye(),o=[e[0]-a[0],e[1]-a[1],e[2]-a[2]],s=t(i,o),c=this.tanHalfY,l=c*(this.width/this.height);return[(t(n,o)/(s*l)+1)*this.width/2,(1-t(r,o)/(s*c))*this.height/2]}orbitPixels(t,n){let r=this.setup.turnPerPx/this.dpr;this.yaw-=t*r,this.pitch=a(this.pitch+n*r,this.setup.minPitchDeg*e,this.setup.maxPitchDeg*e),this.keepAboveGround()}zoomBy(e){this.distance=a(this.distance*e,this.setup.minDistance,this.setup.maxDistance),this.keepAboveGround()}};function $e(t,n){let r=2*Math.PI/365*(t.dayOfYear-1+(n-12)/24),i=229.18*(75e-6+.001868*Math.cos(r)-.032077*Math.sin(r)-.014615*Math.cos(2*r)-.040849*Math.sin(2*r)),a=.006918-.399912*Math.cos(r)+.070257*Math.sin(r)-.006758*Math.cos(2*r)+907e-6*Math.sin(2*r)-.002697*Math.cos(3*r)+.00148*Math.sin(3*r),o=((n*60+i+4*t.longitudeDeg-60*t.utcOffsetHours)/4-180)*e,s=t.latitudeDeg*e,c=Math.sin(s)*Math.sin(a)+Math.cos(s)*Math.cos(a)*Math.cos(o),l=Math.asin(Math.min(1,Math.max(-1,c)));return{azimuthDeg:((Math.atan2(Math.sin(o),Math.cos(o)*Math.sin(s)-Math.tan(a)*Math.cos(s))+Math.PI)/e%360+360)%360,elevationDeg:l/e}}function et(t,n){let r=t*e,i=n*e;return[Math.sin(r)*Math.cos(i),Math.sin(i),-Math.cos(r)*Math.cos(i)]}function tt(t,n,r){let a=[Math.cos(t),0,-Math.sin(t)],o=[-Math.sin(t),0,-Math.cos(t)],s=n*e,c=r*e,l=Math.cos(c);return i([l*(-a[0]*Math.sin(s)-o[0]*Math.cos(s)),Math.sin(c),l*(-a[2]*Math.sin(s)-o[2]*Math.cos(s))])}var nt={sunElevationDeg:44,sunAzimuthFromViewDeg:80,sun:[1.4,1.29,.87],ambient:[.3,.3,.43],skyFill:[.1,.11,.14],bounce:[.05,.04,.02],warmTint:[1.02,1,.93],exposure:1},rt={toLight:[-.5,.7,.5],sun:nt.sun,ambient:nt.ambient,skyFill:nt.skyFill,bounce:nt.bounce,warmTint:nt.warmTint,exposure:nt.exposure,backdrop:[1,1,1]},it={latitudeDeg:50,longitudeDeg:15,dayOfYear:172,utcOffsetHours:2},at={sunHigh:[1.4,1.29,.87],sunLow:[1.5,.74,.32],ambientDay:[.3,.3,.43],ambientNight:[.15,.18,.27],twilight:[.09,.035,.06],lowSunFill:2.5,lowSunExposure:.15,skyDay:[.1,.11,.14],skyNight:[.05,.065,.11],bounce:[.05,.04,.02],tintDay:[1.02,1,.93],tintNight:[.88,.95,1.1],moon:[.17,.22,.35],moonAzimuthDeg:135,moonElevationDeg:40,backdropNight:[.2,.25,.4],exposureNight:1.45,minLightElevationDeg:3,skyZenithDay:[.25,.45,.74],skyHorizonDay:[.66,.77,.86],skyZenithNight:[.02,.035,.08],skyHorizonNight:[.08,.11,.19],skyTwilight:[.42,.16,.05],sunGlowHigh:[.2,.18,.12],sunGlowLow:[.62,.3,.08]},ot={fromDeg:270,speedMs:3},st={darkness:.3,sizeM:320,speedFactor:1.5},ct={cloudCover:0,precipitation:0,precipitationKind:`rain`,snowCover:0,wetness:0,fog:0},lt=[.66,.65,.62],ut=70,dt=-6,ft=6,pt=-1.5,mt=9,ht=2,gt=30,_t=-9,vt=-3.5,yt=3,bt=36,xt=10,St=55,Ct=6,wt=.55,Tt=.2,Et=.92,Dt=.12,Ot=.18,kt=.17,At=.15,jt=[.95,.98,1.02],Mt=[.97,.99,1.02],Nt=[.63,.64,.64],Pt=[.09,.11,.16],Ft=[.14,.06,.04],It=.92,Lt=.85,Rt=.55,zt=.6,Bt=[0,.14,.32],Vt=24,Ht=-10,Ut=-1;function Wt(e){return .3*e[0]+.59*e[1]+.11*e[2]}function Gt(e,t,n){return[o(e[0],t[0],n),o(e[1],t[1],n),o(e[2],t[2],n)]}function Kt(e,t){return[e[0]*t,e[1]*t,e[2]*t]}function qt(e,t){let n=s(wt,1,e),r=o(Et,Dt,a(e/wt,0,1));return{lo:r,hi:r+Ot,darkness:e>.01?t*(1+1.4*s(.1,wt,e))*(1-n):0,overcast:n,sunShare:o(1,Tt,n)}}var Jt=`
vec4 cloudCoverTerms(float cover, float darkness) {
  float overcast = smoothstep(${wt.toFixed(2)}, 1.0, cover);
  float lo = mix(${Et.toFixed(2)}, ${Dt.toFixed(2)}, clamp(cover / ${wt.toFixed(2)}, 0.0, 1.0));
  float d = cover > 0.01 ? darkness * (1.0 + 1.4 * smoothstep(0.1, ${wt.toFixed(2)}, cover)) * (1.0 - overcast) : 0.0;
  return vec4(lo, lo + ${Ot.toFixed(2)}, d, mix(1.0, ${Tt.toFixed(2)}, overcast));
}
float cloudOvercast(float cover) {
  return smoothstep(${wt.toFixed(2)}, 1.0, cover);
}
`,Yt=.7,Xt=.78,Zt=`
float cloudDeckClosed(float cover) {
  return smoothstep(${Yt.toFixed(2)}, ${Xt.toFixed(2)}, cover);
}
`;function Qt(e,t){let n=x(e);return[n.x[0]*t[0]+n.y[0]*t[1]+n.z[0]*t[2],n.x[1]*t[0]+n.y[1]*t[1]+n.z[1]*t[2],n.x[2]*t[0]+n.y[2]*t[1]+n.z[2]*t[2]]}function $t(t,n,r,a){if(r>=a)return n;let o=Math.sin(r*e),s=i([n[0]-t[0]*o,n[1]-t[1]*o,n[2]-t[2]*o]),c=Math.cos(a*e),l=Math.sin(a*e);return[s[0]*c+t[0]*l,s[1]*c+t[1]*l,s[2]*c+t[2]*l]}var en=class{mode;studio;fixed;site;dayLight;wind;clouds;weather;snowAlbedo;fogLayer;observer=null;time;day;constructor(e={}){this.mode=e.mode??`studio`,this.studio={...nt,...e.studio},this.fixed={...rt,...e.fixed},this.site={...it,...e.site},this.dayLight={...at,...e.day},this.wind={...ot,...e.wind},this.clouds={...st,...e.clouds},this.weather={...ct,...e.weather},this.snowAlbedo=e.snowAlbedo??lt,this.fogLayer=e.fogLayer??{bottomY:0,topY:1},this.time=new k({playing:e.animate??!0}),this.day=new k({time:e.hour??13,rate:e.hoursPerSecond??1,wrap:24})}get clocks(){return[this.time,this.day]}setMode(e){this.mode=e,e!==`day`&&this.day.pause()}setFixedLight(e,t={}){this.fixed={...this.fixed,...t,toLight:[e[0],e[1],e[2]]},this.setMode(`fixed`)}get dayOfYear(){return this.site.dayOfYear}setDate(e,t){this.site={...this.site,dayOfYear:e,...t===void 0?{}:{utcOffsetHours:t}}}sun(){return $e(this.site,this.day.time)}frame(t){let n=this.time.time,r=this.day.time,i=(this.wind.fromDeg+180)*e,c=Math.sin(i),l=-Math.cos(i),u=this.wind.speedMs*this.clouds.speedFactor*n,d=this.weather,f=a(d.cloudCover,0,1),p=s(wt,1,f),m=o(Et,Dt,a(f/wt,0,1)),h={time:n,hour:r,windX:c,windZ:l,windSpeedMs:this.wind.speedMs,gustLengthM:ut,gustSpeed:Math.max(.5,this.wind.speedMs),cloudX:c*u,cloudZ:l*u,cloudDarkness:f>.01?this.clouds.darkness*(1+1.4*s(.1,wt,f))*(1-p):0,cloudSizeM:this.clouds.sizeM,cloudLo:m,cloudHi:m+Ot,cloudCover:f,snowCover:a(d.snowCover,0,1),wetness:a(d.wetness,0,1),fog:a(d.fog,0,1),precipitation:a(d.precipitation,0,1),precipitationKind:+(d.precipitationKind===`snow`),snowAlbedo:this.snowAlbedo,fogLayer:this.fogLayer,dayOfYear:this.site.dayOfYear};return this.applySkyFog(this.applyClouds(this.lightFrame(t.heading,h),p))}applySkyFog(e){return e.fog<=0?e:{...e,skyHorizon:Gt(e.skyHorizon,e.fogColor,Lt*e.fog),skyZenith:Gt(e.skyZenith,e.fogColor,Rt*e.fog),sunGlow:Kt(e.sunGlow,1-zt*e.fog)}}applyClouds(e,t){if(t<=0)return e;let n=(e.sun[0]+e.sun[1]+e.sun[2])/3*t;return{...e,sun:Kt(e.sun,o(1,Tt,t)),ambient:[e.ambient[0]+n*kt*jt[0],e.ambient[1]+n*kt*jt[1],e.ambient[2]+n*kt*jt[2]],skyFill:[e.skyFill[0]+n*At*jt[0],e.skyFill[1]+n*At*jt[1],e.skyFill[2]+n*At*jt[2]],bounce:Kt(e.bounce,1-t),warmTint:Gt(e.warmTint,Mt,t*.85),fogColor:Kt(e.fogColor,1-.12*t),skyHorizon:Gt(e.skyHorizon,Kt(jt,Wt(e.skyHorizon)*It),t),skyZenith:Gt(e.skyZenith,Kt(jt,Wt(e.skyHorizon)*It*.86),t),sunGlow:Kt(e.sunGlow,1-.85*t)}}lightFrame(t,n){let r=this.dayLight,c=this.mode===`day`?this.observer:null,l=c?Qt(c.up,et(r.moonAzimuthDeg,r.moonElevationDeg)):et(r.moonAzimuthDeg,r.moonElevationDeg);if(this.mode===`fixed`){let t=this.fixed,o=i([t.toLight[0],t.toLight[1],t.toLight[2]]);return{sunDir:o,moonDir:l,skyZenith:r.skyZenithDay,skyHorizon:r.skyHorizonDay,sunGlow:r.sunGlowHigh,...n,mode:`fixed`,fogColor:Nt,toSun:o,sunElevationDeg:Math.asin(a(o[1],-1,1))/e,sun:t.sun,ambient:t.ambient,skyFill:t.skyFill,bounce:t.bounce,warmTint:t.warmTint,exposure:t.exposure,backdrop:t.backdrop}}if(this.mode===`studio`){let e=this.studio,i=tt(t,e.sunAzimuthFromViewDeg,e.sunElevationDeg);return{sunDir:i,moonDir:l,skyZenith:r.skyZenithDay,skyHorizon:r.skyHorizonDay,sunGlow:r.sunGlowHigh,...n,mode:`studio`,fogColor:Nt,toSun:i,sunElevationDeg:e.sunElevationDeg,sun:e.sun,ambient:e.ambient,skyFill:e.skyFill,bounce:e.bounce,warmTint:e.warmTint,exposure:e.exposure,backdrop:[1,1,1]}}let u=this.sun(),d=c?Math.asin(a(c.sunDir[0]*c.up[0]+c.sunDir[1]*c.up[1]+c.sunDir[2]*c.up[2],-1,1))/e:u.elevationDeg,f=s(dt,ft,d),p=s(pt,mt,d),m=1-s(_t,vt,d),h=Math.exp(-((d/Ct)**2)),g=d>-5/2,_=c?g?$t(c.up,c.sunDir,d,r.minLightElevationDeg):l:g?et(u.azimuthDeg,Math.max(d,r.minLightElevationDeg)):et(r.moonAzimuthDeg,r.moonElevationDeg),v=g?Kt(Gt(r.sunLow,r.sunHigh,s(ht,gt,d)),p):Kt(r.moon,m),y=1+r.lowSunFill*f*(1-s(yt,bt,d)),b=Gt(r.ambientNight,r.ambientDay,f),x=f*(1-s(ht,Vt,d));return{...n,mode:`day`,sunElevationDeg:d,fogColor:[o(Pt[0],Nt[0],f)+Ft[0]*h,o(Pt[1],Nt[1],f)+Ft[1]*h,o(Pt[2],Nt[2],f)+Ft[2]*h],toSun:_,sun:v,ambient:[b[0]+r.twilight[0]*h,b[1]+r.twilight[1]*h,b[2]+r.twilight[2]*h],skyFill:Gt(r.skyNight,Kt(r.skyDay,y),f),bounce:Kt(r.bounce,p),warmTint:Gt(r.tintNight,r.tintDay,f),exposure:o(r.exposureNight,1+r.lowSunExposure*(1-s(xt,St,d)),f),backdrop:Gt(r.backdropNight,[1,1,1],f),sunDir:c?c.sunDir:et(u.azimuthDeg,d),moonDir:l,skyZenith:Gt(r.skyZenithNight,r.skyZenithDay,s(-10,ft,d)),skyHorizon:[o(r.skyHorizonNight[0],r.skyHorizonDay[0],f)+r.skyTwilight[0]*h,o(r.skyHorizonNight[1],r.skyHorizonDay[1],f)*(1-Bt[1]*x)+r.skyTwilight[1]*h,o(r.skyHorizonNight[2],r.skyHorizonDay[2],f)*(1-Bt[2]*x)+r.skyTwilight[2]*h],sunGlow:Kt(Gt(r.sunGlowLow,r.sunGlowHigh,s(ht,gt,d)),s(Ht,Ut,d))}}},tn=[[`0.55`,`1.0`,`0.0`,61],[`0.3`,`2.3`,`17.0`,62],[`0.15`,`5.1`,`41.0`,63]],nn=tn.map(([e,t,n,r],i)=>`${e} * vnoise(${i===0?`q`:`q * ${t} + ${n}`}, ${r}u)`).join(` + `),rn=tn.map(([e,t,n,r],i)=>`${e} * vnoise3(${i===0?`q`:`q * ${t} + ${n}`}, ${r}u)`).join(` + `);function an(e){return`${Zt}
#ifdef WH_LOCAL_UP
float cloudShareAt(vec3 up, float radiusM) {
${e?`  float c = cloudFieldCover(up, radiusM);
  vec4 t = cloudCoverTerms(c, u_cloudFieldLight.x);
  if (t.z <= 0.0) return t.w;
  float k = cloudDeckClosed(c);
  if (k >= 1.0) return (1.0 - t.z) * t.w;
  vec3 q = (up * radiusM - vec3(u_cloud.x, 0.0, u_cloud.y)) * u_cloud.w;
  float n = ${rn};
  return (1.0 - t.z * mix(smoothstep(t.x, t.y, n), 1.0, k)) * t.w;`:`  if (u_cloud.z <= 0.0) return 1.0;
  float k = cloudDeckClosed(u_snow.w);
  if (k >= 1.0) return 1.0 - u_cloud.z;
  vec3 q = (up * radiusM - vec3(u_cloud.x, 0.0, u_cloud.y)) * u_cloud.w;
  float n = ${rn};
  return 1.0 - u_cloud.z * mix(smoothstep(u_cloudEdge.x, u_cloudEdge.y, n), 1.0, k);`}
}
#else
float cloudShareAt(vec2 xz) {
  if (u_cloud.z <= 0.0) return 1.0;
  float k = cloudDeckClosed(u_snow.w);
  if (k >= 1.0) return 1.0 - u_cloud.z;
  vec2 q = (xz - u_cloud.xy) * u_cloud.w;
  float n = ${nn};
  return 1.0 - u_cloud.z * mix(smoothstep(u_cloudEdge.x, u_cloudEdge.y, n), 1.0, k);
}
#endif
`}var on=`#ifdef WH_LOCAL_UP
  whUpHere = localUp(worldPos);
  return cloudShareAt(whUpHere, u_upCenter.w);
#else
  return cloudShareAt(worldPos.xz);
#endif`,sn=`
#ifdef WH_LOCAL_UP
${Jt}
// Cloud cover 0–1 above the place with unit up \`up\` on a sphere of radius \`radiusM\` (the frame of the field).
float cloudFieldCover(vec3 up, float radiusM) {
  float a = abs(dot(up, u_cloudFieldAxis.xyz)) * 7.0;
  float c = dot(u_cloudFieldZonalA, max(1.0 - abs(a - vec4(0.0, 1.0, 2.0, 3.0)), 0.0))
          + dot(u_cloudFieldZonalB, max(1.0 - abs(a - vec4(4.0, 5.0, 6.0, 7.0)), 0.0));
  if (u_cloudFieldAxis.w > 0.0) {
    vec3 q = (up * radiusM - u_cloudFieldPatch.xyz) * u_cloudFieldPatch.w;
    if (u_cloudFieldLight.z > 0.0) q += u_cloudFieldLight.z * (vnoise3(q * 0.6 + 31.0, 73u) - 0.5);
    float p = 0.65 * vnoise3(q, 71u) + 0.35 * vnoise3(q * 2.3 + 17.0, 72u);
    c += u_cloudFieldAxis.w * (2.0 * p - 1.0);
  }
  return clamp(c, 0.0, 1.0);
}

// From a cover and the shadow pattern's value there: x = sun share over the frame's dimming (S / G), y = how much
// cloud stands over the place (1 under a closed deck).
vec2 cloudFieldShade(float cover, float n) {
  vec4 t = cloudCoverTerms(cover, u_cloudFieldLight.x);
  float s = smoothstep(t.x, t.y, n);
  float sun = (1.0 - t.z * s) * t.w;
  return vec2(sun / max(u_cloudFieldLight.y, 1e-3), max(s * smoothstep(0.0, 0.04, cover), cloudOvercast(cover)));
}

// The cloud by place at unit up \`up\`: (S / G, cloud standing over it). Without any cover: (1, 0) and no lookup.
vec2 cloudFieldAt(vec3 up, float radiusM) {
  if (u_cloudFieldLight.w <= 0.0) return vec2(1.0, 0.0);
  float c = cloudFieldCover(up, radiusM);
  vec3 q = (up * radiusM - vec3(u_cloud.x, 0.0, u_cloud.y)) * u_cloud.w;
  return cloudFieldShade(c, ${rn});
}
#endif
`,cn=`#ifdef WH_LOCAL_UP
  whUpHere = localUp(worldPos);
  if (u_cloudFieldLight.w <= 0.0) return 1.0;
  return cloudShareAt(whUpHere, u_upCenter.w) * (1.0 / max(u_cloudFieldLight.y, 1e-3));
#else
  return cloudShareAt(worldPos.xz);
#endif`;function ln(e){return`#ifdef WH_LOCAL_UP
  whUpHere = localUp(worldPos);
${e?`  if (u_cloudFieldLight.w <= 0.0) return 1.0;
  float g = 1.0 / max(u_cloudFieldLight.y, 1e-3);`:`  if (u_cloud.z <= 0.0) return 1.0;
  float g = 1.0;`}
#else
  if (u_cloud.z <= 0.0) return 1.0;
  float g = 1.0;
#endif
  float k = 0.0;
  float tex = 1.0;
  if (u_cloudShadowV.w > 0.0) {
    vec3 dw = worldPos - u_cloudShadowO.xyz;
    vec3 dd = vec3(u_cloud.x - u_cloudShadowDU.w, 0.0, u_cloud.y - u_cloudShadowDV.w);
    vec2 uv = (vec2(dot(dw, u_cloudShadowU.xyz), dot(dw, u_cloudShadowV.xyz)) - vec2(dot(dd, u_cloudShadowDU.xyz), dot(dd, u_cloudShadowDV.xyz))) * u_cloudShadowU.w;
    k = 1.0 - smoothstep(0.4, 0.48, max(abs(uv.x), abs(uv.y)));
    if (k > 0.0) tex = textureLod(u_cloudShadow, uv + 0.5, 0.0).r;
    if (k >= 1.0) return tex * g;
  }
  // Beyond the texture: the share where the light's line through the point meets the base surface.
  vec3 L = u_sunDir.xyz;
#ifdef WH_LOCAL_UP
  vec3 rel = worldPos - u_upCenter.xyz;
  float h = length(rel) - u_upCenter.w;
  float a = cloudShareAt(normalize(rel - L * (h / max(dot(whUpHere, L), 0.05))), u_upCenter.w);
#else
  float a = cloudShareAt((worldPos - L * ((worldPos.y - u_cloudShadowO.w) / max(L.y, 0.05))).xz);
#endif
  return mix(a, tex, k) * g;`}function un(e){return`#ifdef WH_LOCAL_UP
vec2 cloudShareRange(vec3 up, float radiusM) {
${e?`  vec4 t = cloudCoverTerms(cloudFieldCover(up, radiusM), u_cloudFieldLight.x);
  return vec2(t.w, (1.0 - max(t.z, 0.0)) * t.w);`:`  return vec2(1.0, 1.0 - max(u_cloud.z, 0.0));`}
}
#else
vec2 cloudShareRange(vec2 xz) {
  return vec2(1.0, 1.0 - max(u_cloud.z, 0.0));
}
#endif`}function dn(e={}){let t=e.cloudField===!0;return`#include <header>
#include <noise>
${t?sn:``}${an(t)}
${e.depth?`${e.depth}
#define WH_CLOUD_SHADOW_DEPTH 1
${un(t)}`:``}
// The share at a point of the base surface: the pattern's, or blended toward what the clouds' depth lets through.
#ifdef WH_LOCAL_UP
float cloudShadowShare(vec3 point, vec3 up, float radiusM, vec3 L) {
  float share = cloudShareAt(up, radiusM);
#ifdef WH_CLOUD_SHADOW_DEPTH
  vec2 dw = cloudShadowDepth(point, L);
  if (dw.y > 0.0) {
    vec2 r = cloudShareRange(up, radiusM);
    share = mix(share, mix(r.x, r.y, 1.0 - exp(-dw.x)), dw.y);
  }
#endif
  return share;
}
#else
float cloudShadowShare(vec3 point, vec3 L) {
  float share = cloudShareAt(point.xz);
#ifdef WH_CLOUD_SHADOW_DEPTH
  vec2 dw = cloudShadowDepth(point, L);
  if (dw.y > 0.0) {
    vec2 r = cloudShareRange(point.xz);
    share = mix(share, mix(r.x, r.y, 1.0 - exp(-dw.x)), dw.y);
  }
#endif
  return share;
}
#endif
uniform float u_cloudShadowTexels;
out vec4 o_color;
void main() {
  vec2 uv = gl_FragCoord.xy / u_cloudShadowTexels - 0.5;
  vec3 e1 = u_cloudShadowU.xyz;
  vec3 e2 = u_cloudShadowV.xyz;
  vec3 L = cross(e1, e2);
  vec3 d = (e1 * uv.x + e2 * uv.y) / u_cloudShadowU.w;
  float share = 1.0;
#ifdef WH_LOCAL_UP
  // The line origin + d + L t meets the sphere where |rel + d + L t| = R; d is across L. The root on the light's
  // side, in the form that keeps its digits when t is small against the radius.
  vec3 rel = u_cloudShadowO.xyz - u_upCenter.xyz;
  float R = u_upCenter.w;
  float r0 = length(rel);
  float c = (r0 - R) * (r0 + R) + 2.0 * dot(rel, d) + dot(d, d);
  float b = dot(rel, L);
  float disc = b * b - c;
  if (disc > 0.0) {
    float sq = sqrt(disc);
    float t = b > 0.0 ? -c / (b + sq) : sq - b;
    vec3 at = rel + d + L * t;
    share = cloudShadowShare(u_upCenter.xyz + at, normalize(at), R, L);
  }
#else
  vec3 p = u_cloudShadowO.xyz + d;
  if (L.y > 0.01) share = cloudShadowShare(p - L * ((p.y - u_cloudShadowO.w) / L.y), L);
#endif
  o_color = vec4(share, 0.0, 0.0, 1.0);
}`}function fn(e={}){let t=e.cloudField===!0;return`#include <header>
#include <noise>
${t?sn:``}
uniform float u_weatherTexels;
uniform int u_weatherFace;
uniform vec4 u_weatherTile;
uniform vec4 u_weatherRules;
uniform float u_weatherConvection;
out vec4 o_color;
void main() {
  vec2 st = gl_FragCoord.xy / u_weatherTexels * 2.0 - 1.0;
#ifdef WH_LOCAL_UP
  vec3 d;
  if (u_weatherFace == 0) d = vec3(1.0, -st.y, -st.x);
  else if (u_weatherFace == 1) d = vec3(-1.0, -st.y, st.x);
  else if (u_weatherFace == 2) d = vec3(st.x, 1.0, st.y);
  else if (u_weatherFace == 3) d = vec3(st.x, -1.0, -st.y);
  else if (u_weatherFace == 4) d = vec3(st.x, -st.y, 1.0);
  else d = vec3(-st.x, -st.y, -1.0);
  vec3 up = normalize(d);
  float cover = ${t?`cloudFieldCover(up, u_upCenter.w)`:`u_snow.w`};
#else
  // A flat world has one cover; the place of the texel, u_weatherTile.xy + st * u_weatherTile.z / 2, is for covers by
  // place to come.
  float cover = u_snow.w;
#endif
  float rain = smoothstep(u_weatherRules.z, u_weatherRules.w, cover);
  float deck = smoothstep(u_weatherRules.x, u_weatherRules.y, cover) * (1.0 - clamp(u_weatherConvection, 0.0, 1.0) * rain);
  o_color = vec4(cover, deck, rain, 1.0);
}`}function pn(e={}){let t=e.cloudField===!0,n=e.cloudShadow===!0;return`
#ifndef WH_SHADOW_QUERY
#define WH_SHADOW_QUERY 1
uniform sampler2DShadow u_shadowMap;

#ifdef WH_LOCAL_UP
// Up at the point the lighting functions were last asked about. cloudLight, sunVisibility and sunVisibilityBaked set
// it from their position, so lightOn, called after one of them, lights for the same place; lightOnAt states the place.
vec3 whUpHere = vec3(0.0, 1.0, 0.0);
#endif
${t?sn:``}${an(t)}${n?`uniform sampler2D u_cloudShadow;
`:``}
// Cloud shadow: 1 = full sun, less under a cloud. The pattern is anchored in the world and drifts with the wind.
// Three layers of smooth noise, the smallest is tens of metres, so there is nothing to fight with even from afar.
float cloudLight(vec3 worldPos) {
${n?ln(t):t?cn:on}
}

// Share of sun that reaches a point: 0 = full shadow, 1 = full sun. Computes scene shadows and cloud shadows.
// The point is shifted along the normal before the query so a surface does not shadow itself.
float sunVisibility(vec3 worldPos, vec3 n, float normalOffsetTexels) {
  float cloud = cloudLight(worldPos);
#ifdef WH_SHADOW_AREAS
  // The renderer keeps shadow areas (its shadow mode is not the single map): its header brings the lookup.
  return whShadow(u_shadowMap, worldPos, n, normalOffsetTexels, 1.0) * cloud;
#else
  vec3 p = worldPos + n * (u_view.y * normalOffsetTexels);
  vec3 sc = (u_lightViewProj * vec4(p, 1.0)).xyz * 0.5 + 0.5;
  float lim = u_sunDir.w;
  if (sc.x <= 0.0 || sc.x >= lim || sc.y <= 0.0 || sc.y >= lim || sc.z >= 1.0) return cloud;
  float r = u_view.z * u_view.w;
  float sum = 0.0;
  // 4 × 4 queries, each bilinearly compares four texels by itself. Gives a smooth penumbra without graininess.
  for (int j = 0; j < 4; j++) {
    for (int i = 0; i < 4; i++) {
      vec2 o = (vec2(float(i), float(j)) - 1.5) * r;
      sum += texture(u_shadowMap, vec3(sc.xy + o, sc.z));
    }
  }
  return sum * (1.0 / 16.0) * cloud;
#endif
}

// sunVisibility for a material that carries a shadow term of its own (baked: 0 = shadow, 1 = sun; from a vertex
// attribute or a texture of its piece of the scene). The term stands in where the shadow map does not reach: outside
// the single map, and beyond the reach of the shadow areas, into which it is blended.
float sunVisibilityBaked(vec3 worldPos, vec3 n, float normalOffsetTexels, float baked) {
  float cloud = cloudLight(worldPos);
#ifdef WH_SHADOW_AREAS
  return whShadow(u_shadowMap, worldPos, n, normalOffsetTexels, baked) * cloud;
#else
  vec3 p = worldPos + n * (u_view.y * normalOffsetTexels);
  vec3 sc = (u_lightViewProj * vec4(p, 1.0)).xyz * 0.5 + 0.5;
  float lim = u_sunDir.w;
  if (sc.x <= 0.0 || sc.x >= lim || sc.y <= 0.0 || sc.y >= lim || sc.z >= 1.0) return baked * cloud;
  float r = u_view.z * u_view.w;
  float sum = 0.0;
  for (int j = 0; j < 4; j++) {
    for (int i = 0; i < 4; i++) {
      vec2 o = (vec2(float(i), float(j)) - 1.5) * r;
      sum += texture(u_shadowMap, vec3(sc.xy + o, sc.z));
    }
  }
  return sum * (1.0 / 16.0) * cloud;
#endif
}

// sunVisibilityBaked with a hard edge: one depth comparison at the centre of the shadow map texel under the point
// (with linear filtering a lookup there weighs that texel alone), no softening.
float sunVisibilityBakedSharp(vec3 worldPos, vec3 n, float normalOffsetTexels, float baked) {
  float cloud = cloudLight(worldPos);
#ifdef WH_SHADOW_AREAS
  return whShadowSharp(u_shadowMap, worldPos, n, normalOffsetTexels, baked) * cloud;
#else
  vec3 p = worldPos + n * (u_view.y * normalOffsetTexels);
  vec3 sc = (u_lightViewProj * vec4(p, 1.0)).xyz * 0.5 + 0.5;
  float lim = u_sunDir.w;
  if (sc.x <= 0.0 || sc.x >= lim || sc.y <= 0.0 || sc.y >= lim || sc.z >= 1.0) return baked * cloud;
  vec2 uv = (floor(sc.xy / u_view.w) + 0.5) * u_view.w;
  return texture(u_shadowMap, vec3(uv, sc.z)) * cloud;
#endif
}

// sunVisibility with a hard edge (see sunVisibilityBakedSharp).
float sunVisibilitySharp(vec3 worldPos, vec3 n, float normalOffsetTexels) {
  return sunVisibilityBakedSharp(worldPos, n, normalOffsetTexels, 1.0);
}
#endif
`}var mn=pn();function hn(e={}){return`${pn(e)}
// Light as a multiple of the surface colour: warm sun, cool shadow.
vec3 lightOn(vec3 n, float sun, float ao) {
  float ndl = max(dot(n, u_sunDir.xyz), 0.0);
#ifdef WH_LOCAL_UP
  // The sky is over the local horizon. Where the light stands under it the body itself is in the way: no sun, and
  // only a rest of the sky's light.
  float nu = dot(n, whUpHere);
  float day = dot(whUpHere, u_sunDir.xyz);
  vec3 fill = (u_ambient.rgb + u_skyFill.rgb * (nu * 0.5 + 0.5) + u_bounce.rgb * (1.0 - nu)) * mix(0.06, 1.0, smoothstep(-0.25, 0.15, day));
  sun *= smoothstep(-0.05, 0.03, day);
#else
  vec3 fill = u_ambient.rgb + u_skyFill.rgb * (n.y * 0.5 + 0.5) + u_bounce.rgb * (1.0 - n.y);
#endif
  return u_sunColor.rgb * (ndl * sun) + fill * ao;
}

// lightOn for a stated place: the same without radial up, and with it independent of which function ran before.
vec3 lightOnAt(vec3 worldPos, vec3 n, float sun, float ao) {
#ifdef WH_LOCAL_UP
  whUpHere = localUp(worldPos);
#endif
  return lightOn(n, sun, ao);
}

// Fog and haze applied after the output curve. More at the valley floor, slow wisps drift with the clouds.
// Under an overcast sky the colours also fade a little.
vec3 applyFog(vec3 display, vec3 worldPos) {
  float cc = u_snow.w;
  display = mix(display, vec3(dot(display, vec3(0.3, 0.55, 0.15))), 0.28 * cc * cc);
  float f = u_weather.z;
  if (f <= 0.0) return display;
#ifdef WH_LOCAL_UP
  // Heights of the fog layer are heights above the base surface; the wisps are a field in space.
  float valley = 1.0 - clamp((localHeight(worldPos) - u_fogShape.x) * u_fogShape.y, 0.0, 1.0);
  float drift = vnoise3((localUp(worldPos) * u_upCenter.w - vec3(u_cloud.x, 0.0, u_cloud.y) * 0.4) / 140.0, 81u);
#else
  float valley = 1.0 - clamp((worldPos.y - u_fogShape.x) * u_fogShape.y, 0.0, 1.0);
  float drift = vnoise((worldPos.xz - u_cloud.xy * 0.4) / 140.0, 81u);
#endif
  float a = f * (0.5 + 0.38 * valley + 0.24 * (drift - 0.5));
  return mix(display, u_fogColor.rgb, clamp(a, 0.0, 0.94));
}

// Output curve: unchanged up to the knee, above it brightness bends softly toward one so light surfaces do not blow out.
vec3 toDisplay(vec3 c) {
  c *= u_warmTint.a;
  const float knee = 0.8;
  vec3 over = max(c - knee, 0.0) / (1.0 - knee);
  return mix(c, knee + (1.0 - knee) * (1.0 - exp(-over)), step(knee, c));
}
`}var gn=hn(),_n={fallMs:8.5,windShare:.35,maxDriftMs:4,lifeS:.8,swayM:0,swayCycles:0},vn={fallMs:1.2,windShare:.6,maxDriftMs:2.5,lifeS:4,swayM:.25,swayCycles:2},yn=[{tileM:8,perTile:4096,nearM:[.35,1.2],farM:[10,16],size:1,seed:7101},{tileM:24,perTile:1536,nearM:[10,16],farM:[40,64],size:2.5,seed:7102}],bn=[{tileM:8,perTile:3072,nearM:[.25,.9],farM:[8,14],size:1,seed:7111},{tileM:24,perTile:1536,nearM:[8,14],farM:[34,56],size:2.2,seed:7112}],xn={cellM:.25,slotS:.5,lifeS:.14,radiusM:.03,rate:.9,seed:7121},Sn={cellM:.5,slotS:1,lifeS:.8,radiusM:.12,rate:.6,seed:7122},Cn={cellM:.2,slotS:2,lifeS:1.6,radiusM:.016,rate:.75,seed:7123},wn=2048;function Tn(e,t){if(!t)return[0,-1,0];let n=e[0]-t[0],r=e[1]-t[1],i=e[2]-t[2],a=Math.hypot(n,r,i);return a>1e-6?[-n/a,-r/a,-i/a]:[0,-1,0]}function En(e,t,n,r,i){let a=n*t[0]+r*t[2],o=n-t[0]*a,s=-t[1]*a,c=r-t[2]*a,l=Math.hypot(o,s,c),u=Math.min(e.maxDriftMs,Math.max(0,i)*e.windShare),d=l>1e-6?u/l:0;return o*=d,s*=d,c*=d,[t[0]*e.fallMs+o,t[1]*e.fallMs+s,t[2]*e.fallMs+c]}function Dn(e,t,n=1){return e.perTile*Math.min(1,Math.max(0,t))*Math.max(0,n)}function On(e,t,n,r,i,a=160){let o=e.tileM,s=.5*t.lifeS*Math.hypot(n[0],n[1],n[2])+t.swayM,c=e.farM[1],l=e=>Math.floor((e-c-s)/o),u=e=>Math.floor((e+c+s)/o),d=[];for(let t=l(r[0]);t<=u(r[0]);t++)for(let n=l(r[1]);n<=u(r[1]);n++)for(let a=l(r[2]);a<=u(r[2]);a++){let l=[t*o-r[0]-s,n*o-r[1]-s,a*o-r[2]-s],u=[l[0]+o+2*s,l[1]+o+2*s,l[2]+o+2*s],f=0;for(let e=0;e<3;e++){let t=l[e]>0?l[e]:u[e]<0?-u[e]:0;f+=t*t}if(f>c*c)continue;let p=0;for(let e=0;e<3;e++)p+=Math.max(l[e]*l[e],u[e]*u[e]);if(p<e.nearM[0]*e.nearM[0]||i&&!i(l,u))continue;let m=Math.floor(Pn(t|0,n|0,a|0,e.seed)*16777216);d.push({d:f,v:[t*o-r[0],n*o-r[1],a*o-r[2],m]})}d.sort((e,t)=>e.d-t.d);let f=[];for(let e=0;e<Math.min(a,d.length);e++)f.push(...d[e].v);return f}function kn(e,t){let n=e/t,r=Math.floor(n);return[n-r,(r%1048576+1048576)%1048576]}function An(e,t){let n=e=>e-Math.floor(e/t)*t;return[n(e[0]),n(e[1]),n(e[2])]}function jn(e,t){let n=t/e.slotS,r=Math.floor(n);return[(r%1048576+1048576)%1048576,n-r]}var Mn=`
// Drop i of a tile: xyz its place relative to the eye, w its age in its life. tile: xyz its corner relative to the
// eye, w its seed; shell: x tile edge, y life in seconds, z sway in metres, w sways per life; clock: x share of the
// life, y whole lives.
vec4 precipitationDrop(int i, vec4 tile, vec4 shell, vec3 velocity, vec2 clock) {
  uint seed = uint(tile.w);
  float c = clock.x + hash3(ivec3(i, 0, 3), seed);
  float kc = floor(c);
  float u = c - kc;
  int k = int(clock.y) + int(kc);
  float e = shell.x;
  vec3 q = tile.xyz + vec3(hash3(ivec3(i, k, 0), seed), hash3(ivec3(i, k, 1), seed), hash3(ivec3(i, k, 2), seed)) * e
    + velocity * (shell.y * (u - 0.5));
  if (shell.z > 0.0) {
    vec3 d = normalize(velocity);
    vec3 a = normalize(cross(d, abs(d.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
    vec3 b = cross(d, a);
    float ph = 6.2831853 * (shell.w * u + hash3(ivec3(i, k, 4), seed));
    q += a * (sin(ph) * shell.z) + b * (0.6 * cos(ph) * shell.z);
  }
  return vec4(q, u);
}
// How visible a drop is by its age and its distance; range: x, y the fade in, z, w the fade out (metres).
float precipitationDropFade(float d, float u, vec4 range) {
  return smoothstep(0.0, 0.08, u) * (1.0 - smoothstep(0.92, 1.0, u)) * smoothstep(range.x, range.y, d) * (1.0 - smoothstep(range.z, range.w, d));
}
// The mark of one kind over a point: x age 0–1 (negative: none), y distance from its centre in metres, z weight.
// ab the point in the plane of the cells, n the normal in the order (a, b, the remaining axis); spec: x cell, y life
// over slot, z radius, w rate times strength; clock: x slot index, y share of the slot.
vec3 precipitationImpact(vec2 ab, vec3 n, vec4 spec, uint seed, vec2 clock) {
  float cell = spec.x;
  int count = int(${wn}.0 / cell + 0.5);
  vec2 f = floor(ab / cell);
  ivec2 c = ivec2(f);
  c = ((c % count) + count) % count;
  // Every cell runs its slots at its own phase, so the marks never start together.
  float phase = clock.y + hash3(ivec3(c, 0), seed + 4u);
  int slot = int(clock.x) + int(floor(phase));
  float within = fract(phase);
  float h = hash3(ivec3(c, slot), seed);
  float weight = clamp((spec.w - h) * 20.0, 0.0, 1.0);
  if (weight <= 0.0) return vec3(-1.0, 1e9, 0.0);
  float start = hash3(ivec3(c, slot), seed + 1u) * (1.0 - spec.y);
  float age = (within - start) / spec.y;
  if (age < 0.0 || age >= 1.0) return vec3(-1.0, 1e9, 0.0);
  float r = spec.z / cell;
  vec2 local = ab - f * cell;
  vec2 dd = cell * (r + vec2(hash3(ivec3(c, slot), seed + 2u), hash3(ivec3(c, slot), seed + 3u)) * (1.0 - 2.0 * r)) - local;
  float dk = -(n.x * dd.x + n.y * dd.y) / max(abs(n.z), 0.3);
  return vec3(age, length(vec3(dd, dk)), weight);
}
// A depth of the main target as the distance along the view (map from cloudVolumeDepthMap); 1e30 where nothing was drawn.
float precipitationDepthDistance(float depth, vec4 map) {
  if (map.x > 2.5) return depth >= 0.999999 ? 1e30 : exp2(depth / map.w) - 1.0;
  if (map.x < 0.5 || (map.x < 1.5 ? depth <= 0.0 : depth >= 0.9999999)) return 1e30;
  float ndc = map.x > 1.5 ? depth * 2.0 - 1.0 : depth;
  return map.z / (ndc - map.y) * map.w;
}
`;function Nn(e){return e=(e^e>>>16)>>>0,e=Math.imul(e,2146121005)>>>0,e=(e^e>>>15)>>>0,e=Math.imul(e,2221713035)>>>0,(e^e>>>16)>>>0}function Pn(e,t,n,r){let i=Nn((n>>>0)+r>>>0),a=Nn((Math.imul(t>>>0,3266489909)^i)>>>0);return Nn((Math.imul(e>>>0,2654435761)^a)>>>0)/4294967296}var Fn=`cloudField`;function In(e,t){let n=0;for(let r=0;r<8;r++)n+=(e[r]??0)*Math.max(1-Math.abs(t-r),0);return n}function Ln(e){return e=(e^e>>>16)>>>0,e=Math.imul(e,2146121005)>>>0,e=(e^e>>>15)>>>0,e=Math.imul(e,2221713035)>>>0,(e^e>>>16)>>>0}function Rn(e,t,n,r){let i=Ln((n>>>0)+r>>>0),a=Ln((Math.imul(t>>>0,3266489909)^i)>>>0);return Ln((Math.imul(e>>>0,2654435761)^a)>>>0)/4294967296}function zn(e,t,n){return e+(t-e)*n}function Bn(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e-i,c=t-a,l=n-o;s=s*s*(3-2*s),c=c*c*(3-2*c),l=l*l*(3-2*l);let u=i|0,d=a|0,f=o|0,p=zn(Rn(u,d,f,r),Rn(u+1,d,f,r),s),m=zn(Rn(u,d+1,f,r),Rn(u+1,d+1,f,r),s),h=zn(Rn(u,d,f+1,r),Rn(u+1,d,f+1,r),s),g=zn(Rn(u,d+1,f+1,r),Rn(u+1,d+1,f+1,r),s);return zn(zn(p,m,c),zn(h,g,c),l)}function Vn(e,t,n){let r=Math.abs(t[0]*e.axis[0]+t[1]*e.axis[1]+t[2]*e.axis[2])*7,i=In(e.zonal.map(e=>a(e,0,1)),r),o=a(e.patchAmount,0,1);if(o>0&&e.patchSizeM>0){let r=1/e.patchSizeM,a=(t[0]*n-e.patchOffset[0])*r,s=(t[1]*n-e.patchOffset[1])*r,c=(t[2]*n-e.patchOffset[2])*r;if(e.patchWarp>0){let t=e.patchWarp*(Bn(a*.6+31,s*.6+31,c*.6+31,73)-.5);a+=t,s+=t,c+=t}let l=.65*Bn(a,s,c,71)+.35*Bn(a*2.3+17,s*2.3+17,c*2.3+17,72);i+=o*(2*l-1)}return a(i,0,1)}var Hn=`cloudShadow`,Un=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Wn=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Gn=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function Kn(e,t,n,r,i,a){let o=Wn(t),s=n===null?[0,1,0]:Wn(e),c=n===null?[e[0],0,e[2]]:[s[0]*n,s[1]*n,s[2]*n],l=Wn(Gn(Math.abs(o[2])<.9?[0,0,1]:[1,0,0],o)),u=Gn(o,l),d=r/i,f=Math.round(Un(c,l)/d)*d,p=Math.round(Un(c,u)/d)*d,m=Un(c,o),h=[l[0]*f+u[0]*p+o[0]*m,l[1]*f+u[1]*p+o[1]*m,l[2]*f+u[2]*p+o[2]*m],g=Un(s,l),_=Un(s,u);return{origin:h,axisU:l,axisV:u,driftU:[l[0]-s[0]*g,l[1]-s[1]*g,l[2]-s[2]*g],driftV:[u[0]-s[0]*_,u[1]-s[1]*_,u[2]-s[2]*_],drift:[a[0],a[1]],extentM:r}}function qn(e){return{name:Hn,params:{active:!1,eye:null,reference:[0,0,0],radiusM:null,extentM:0,size:512,redraw:!1,last:null,...e},fields:[{member:`u_cloudShadowU`,order:1300,lanes:`xyzw`,doc:`xyz texture x axis (across the light), w 1 / edge in metres`},{member:`u_cloudShadowV`,order:1310,lanes:`xyzw`,doc:`xyz texture y axis, w 1 = cloudLight reads the texture`},{member:`u_cloudShadowO`,order:1320,lanes:`xyzw`,doc:`xyz centre of the square in render space, w ground plane y (flat)`},{member:`u_cloudShadowDU`,order:1330,lanes:`xyzw`,doc:`xyz drift axis for texture x, w cloud drift x when drawn`},{member:`u_cloudShadowDV`,order:1340,lanes:`xyzw`,doc:`xyz drift axis for texture y, w cloud drift z when drawn`}],compute(e,t){let n=t.reference,r=t.last,i=t.active&&t.eye!==null&&(t.redraw||r===null);if(i){let i=t.extentM>0?t.extentM:24*e.cloudSizeM;r=Kn([t.eye[0]-n[0],t.eye[1]-n[1],t.eye[2]-n[2]],e.toSun,t.radiusM,i,Math.max(1,t.size),[e.cloudX,e.cloudZ])}let a=r?r.origin:[0,0,0];return{projection:r,origin:[n[0]+a[0],n[1]+a[1],n[2]+a[2]],planeY:n[1],active:t.active&&r!==null?1:0,redraw:i}},lanes:e=>{let t=e.projection;return t?[t.axisU[0],t.axisU[1],t.axisU[2],1/t.extentM,t.axisV[0],t.axisV[1],t.axisV[2],e.active,e.origin[0],e.origin[1],e.origin[2],e.planeY,t.driftU[0],t.driftU[1],t.driftU[2],t.drift[0],t.driftV[0],t.driftV[1],t.driftV[2],t.drift[1]]:[1,0,0,0,0,0,1,0,0,0,0,e.planeY,0,0,0,0,0,0,0,0]}}}var Jn={baseM:1500,topM:4e3,extinctionPerM:.03,shapeSizeM:9600,wideSizeM:41700,wideCover:.3,detailSizeM:1700,erosion:.45},Yn={low:{scale:.35,steps:16,lightSteps:3,detail:!1},medium:{scale:.5,steps:20,lightSteps:4,detail:!0},high:{scale:.5,steps:40,lightSteps:5,detail:!0}},Xn=.6,Zn=.95,Qn=.45,$n=.07,er=.2,tr=.9,nr=e=>Number.isInteger(e)?`${e}.0`:`${e}`;function rr(e,t){return ar(e,ir(t),0)}function ir(e){return s(Xn,Zn,e)}function ar(e,t,n,r=0){let i=a(n,0,1),o=1-(1-(Qn+.39999999999999997*a(r,0,1)))*a(t,0,1)*(1-i),c=(er+.35000000000000003*i)*o;return s(0,$n,e)*(1-s(c,o,e))}var or={deckCover:[Xn,Zn],rainCover:[.6,.9],convection:0};function sr(e,t=or){let n=s(t.rainCover[0],t.rainCover[1],e);return[s(t.deckCover[0],t.deckCover[1],e)*(1-a(t.convection,0,1)*n),n]}function cr(e,t){if(e<=0)return 0;let n=Math.sqrt(a(t,0,1));return a(e+(1-e)*n,0,1)}var lr=.45;function ur(e,t,n,r=Jn,i=4){let a=Math.max(1,Math.round(i)),o=(r.topM-r.baseM)/a,s=0;for(let i=0;i<a;i++){let o=(i+.5)/a,[c,l]=e(o);s+=pr(c,l,0,t,o,{wideCover:r.wideCover,erosion:0},n)}return s*o*r.extinctionPerM*(1+2*n[1])}function dr(e){return s(.5,3,e)}function fr(e){return tr+-.8*a(e,0,1)}function pr(e,t,n,r,i,o=Jn,s){let c=s?Math.sqrt(a(s[1],0,1)):0,l=a((s?cr(r,s[1]):r)+(t-.5)*o.wideCover*(1-c),0,1);if(r<=0||l<=0)return 0;let u=fr(l),d=s?ar(i,s[0],s[1]*(1-s[0]),s[1]):rr(i,l),f=a(((e+(Math.max(e,lr)-e)*c)*d-u)/(1-u),0,1);if(f<=0)return 0;let p=n*o.erosion;return a((f-p)/(1-p),0,1)}function mr(e,t,n){return 1-s(t,n,e)}function hr(e,t,n){return[Math.max(1,Math.ceil(e*n)),Math.max(1,Math.ceil(t*n))]}var gr=[[0,0],[1,1],[1,0],[0,1]];function _r(e){let t=gr[(Math.floor(e)%4+4)%4];return[t[0],t[1]]}function vr(e,t,n){return n?[Math.ceil(e/2),Math.ceil(t/2)]:[e,t]}function yr(e,t){return[Math.ceil(e/8),Math.ceil(t/8)]}function br(e,t,n){let[r,i,a]=e,[o,s,c]=t,[l,u,d]=n,f=s*d-c*u,p=-(i*d-a*u),m=i*c-a*s,h=r*f+o*p+l*m;if(!(Math.abs(h)>1e-12))return null;let g=1/h,_=[f*g,-(o*d-l*c)*g,(o*u-l*s)*g],v=[p*g,(r*d-l*a)*g,-(r*u-l*i)*g],y=[m*g,-(r*c-o*a)*g,(r*s-o*i)*g];return[_[0],v[0],y[0],_[1],v[1],y[1],_[2],v[2],y[2]]}function xr(e,t,n){if(e===`logarithmic`)return n>0?[3,0,0,n]:[0,0,0,0];let r=t,i=r[3],a=r[7],o=r[11],s=i*i+a*a+o*o;if(!(s>0))return[0,0,0,0];let c=(r[2]*i+r[6]*a+r[10]*o)/s,l=r[14]-c*r[15];return[e===`reversed`?1:2,c,l,1/Math.sqrt(s)]}function Sr(e,t,n){return n>Math.cos(Math.PI/6)&&e<=Math.max(.25*t,100)}var Cr=`
uniform vec4 u_cvRef;
uniform vec4 u_cvSlab;
uniform vec4 u_cvFar; // x, y distances over which the volume hands the clouds to a far layer, z the volume's weight
// The height in the layer (0–1) where the clouds of a type end: lower for a deck (less so where it rains), the
// layer's top for a tall type.
float cloudVolumeTypedTop(float deck, float tall, float rain) {
  float deckTop = ${nr(Qn)} + ${.39999999999999997.toFixed(2)} * clamp(rain, 0.0, 1.0);
  return 1.0 - (1.0 - deckTop) * clamp(deck, 0.0, 1.0) * (1.0 - clamp(tall, 0.0, 1.0));
}
float cloudVolumeTypedProfile(float h, float deck, float tall, float rain) {
  float k = clamp(tall, 0.0, 1.0);
  float top = cloudVolumeTypedTop(deck, tall, rain);
  float fall = (${nr(er)} + ${nr(.35000000000000003)} * k) * top;
  return smoothstep(0.0, ${nr($n)}, h) * (1.0 - smoothstep(fall, top, h));
}
// The cover closed toward 1 by the precipitation of the place (cloudVolumeRainCover).
float cloudVolumeRainCover(float cover, float rain) {
  return cover <= 0.0 ? 0.0 : clamp(cover + (1.0 - cover) * sqrt(clamp(rain, 0.0, 1.0)), 0.0, 1.0);
}
// The shape filled up where it rains (the square root of rain): a raining cloud has no holes.
float cloudVolumeRainShape(float shape, float rain) {
  return mix(shape, max(shape, ${nr(lr)}), sqrt(clamp(rain, 0.0, 1.0)));
}
float cloudVolumeProfile(float h, float cover) {
  return cloudVolumeTypedProfile(h, smoothstep(${nr(Xn)}, ${nr(Zn)}, cover), 0.0, 0.0);
}
// The volume's share of the clouds at a distance along a view ray (cloudVolumeNearShare with u_cvFar).
float cloudVolumeNearShare(float d) {
  return u_cvFar.z * (1.0 - smoothstep(u_cvFar.x, u_cvFar.y, d));
}
float cloudVolumeThreshold(float cover) {
  return ${nr(tr)} + ${nr(-.8)} * clamp(cover, 0.0, 1.0);
}
// The density before the erosion: x the density 0–1, y the cover moved by the wide lookup.
vec2 cloudVolumeBase(float shape, float wide, float cover, float h, float wideCover) {
  float c = clamp(cover + (wide - 0.5) * wideCover, 0.0, 1.0);
  if (cover <= 0.0 || c <= 0.0) return vec2(0.0, c);
  float t = cloudVolumeThreshold(c);
  return vec2(clamp((shape * cloudVolumeProfile(h, c) - t) / (1.0 - t), 0.0, 1.0), c);
}
float cloudVolumeErode(float base, float detail, float erosion) {
  float lo = detail * erosion;
  return clamp((base - lo) / (1.0 - lo), 0.0, 1.0);
}
float cloudVolumeDensity(float shape, float wide, float detail, float cover, float h, float wideCover, float erosion) {
  float b = cloudVolumeBase(shape, wide, cover, h, wideCover).x;
  return b > 0.0 ? cloudVolumeErode(b, detail, erosion) : 0.0;
}
// Height above the ground of a point relative to the reference point.
float cloudVolumeHeight(vec3 rel) {
  return u_cvRef.w > 0.0 ? length(rel) - u_cvRef.w : rel.y;
}
// (t0, t1, gap0, gap1) of a ray from e (relative to the reference point) along the unit direction dir.
vec4 cloudVolumeSpan(vec3 e, vec3 dir) {
  float R = u_cvRef.w;
  float tMax = u_cvSlab.w;
  if (R > 0.0) {
    float r0 = length(e);
    float b = dot(e, dir);
    float rt = R + u_cvSlab.y;
    float dt = b * b - (r0 - rt) * (r0 + rt);
    if (dt <= 0.0) return vec4(1.0, 0.0, 0.0, 0.0);
    float st = sqrt(dt);
    float t0 = max(-b - st, 0.0);
    float t1 = -b + st;
    float g0 = 0.0;
    float g1 = 0.0;
    float dg = b * b - (r0 - R) * (r0 + R);
    float ground = dg > 0.0 && -b - sqrt(dg) > 0.0 ? -b - sqrt(dg) : 1e30;
    float rb = R + u_cvSlab.x;
    float db = b * b - (r0 - rb) * (r0 + rb);
    if (db > 0.0) {
      float sb = sqrt(db);
      if (r0 < rb) t0 = max(t0, -b + sb);
      else if (-b - sb > 0.0) {
        if (ground < 1e30) t1 = min(t1, -b - sb);
        else {
          g0 = -b - sb;
          g1 = -b + sb;
        }
      }
    }
    return vec4(t0, min(min(t1, ground), tMax), g0, g1);
  }
  float h = e.y;
  if (abs(dir.y) < 1e-6) return h > u_cvSlab.x && h < u_cvSlab.y ? vec4(0.0, tMax, 0.0, 0.0) : vec4(1.0, 0.0, 0.0, 0.0);
  float ta = (u_cvSlab.x - h) / dir.y;
  float tb = (u_cvSlab.y - h) / dir.y;
  return vec4(max(min(ta, tb), 0.0), min(max(ta, tb), tMax), 0.0, 0.0);
}
float cloudVolumeJitter(vec2 pixel, float frameIndex) {
  return fract(fract(52.9829189 * fract(0.06711056 * pixel.x + 0.00583715 * pixel.y)) + frameIndex * 0.618034);
}
// Where the point at distance d along dir lay on an earlier frame's screen: xy from −1 to 1, z its depth along that
// frame's view (0 or less: behind its eye).
vec3 cloudVolumeReproject(mat3 inverse, vec3 moved, vec3 dir, float d) {
  vec3 a = inverse * (moved + dir * d);
  return vec3(a.yz / max(a.x, 1e-6), a.x);
}
// The distance along the view of a depth value of the main target (cloudVolumeDepthMap); 1e30 where nothing was drawn.
float cloudVolumeDepthDistance(float depth, vec4 map) {
  if (map.x > 2.5) return depth >= 0.999999 ? 1e30 : exp2(depth / map.w) - 1.0;
  if (map.x < 0.5 || (map.x < 1.5 ? depth <= 0.0 : depth >= 0.9999999)) return 1e30;
  float ndc = map.x > 1.5 ? depth * 2.0 - 1.0 : depth;
  return map.z / (ndc - map.y) * map.w;
}
`,wr={hazeDistanceM:1400,fogHaze:.8,precipitationHaze:.35,cloudHeightM:1200,cloudFadeHeights:70},Tr=-14,Er=-4,Dr=-6,Or=6,kr=.45,Ar=Xt;function jr(e){return .3*e[0]+.59*e[1]+.11*e[2]}function Mr(e,t){let n=e.mode===`day`,r=e.sunElevationDeg,i=n?s(Dr,Or,r):1,o=s(kr,Ar,e.cloudCover),c=(1-o)*(1-.85*e.fog),l=e.skyHorizon,u=jr(l)*1.3,d=[l[0]*.4+u*.6+e.sunGlow[0]*.5,l[1]*.4+u*.6+e.sunGlow[1]*.5,l[2]*.4+u*.6+e.sunGlow[2]*.5],f=t.hazeDistanceM*(1-t.fogHaze*a(e.fog,0,1))*(1-t.precipitationHaze*a(e.precipitation,0,1));return{zenith:e.skyZenith,horizon:e.skyHorizon,glow:e.sunGlow,sunDir:e.sunDir,moonDir:e.moonDir,cloud:d,stars:n?(1-s(Tr,Er,r))*c:0,sunDisc:(1-.95*o)*(1-.85*e.fog),moon:n?(1-.8*i)*c:0,overcast:o,invHaze:t.eye&&f>0?1/f:0,cloudHeightM:t.cloudHeightM,cloudFadeM:t.cloudHeightM*t.cloudFadeHeights,eye:t.eye??[0,0,0],perspective:+!!t.eye}}var Nr=`
float skyCloudField(vec2 q, float fw) {
  return ${tn.map(([e,t,n,r])=>`${e} * mix(0.5, vnoise(q * ${t} + ${n}, ${r}u), 1.0 - smoothstep(0.3, 0.7, fw * ${t}))`).join(`
    + `)};
}

// Unit direction from a world point toward the eye.
vec3 skyToEye(vec3 worldPos) {
  return u_skyEye.w > 0.5 ? normalize(u_skyEye.xyz - worldPos) : -u_camForward.xyz;
}

// Sky colour in a direction, screen space: the gradient and the glow around the sun, no discs, clouds or stars.
// Below the horizon it stays as at the horizon, so haze and sky meet without a seam.
vec3 skyColorDir(vec3 dir) {
  float y = max(dir.y, 0.0);
  float t = (1.0 - exp(-4.0 * y)) * (1.0 / (1.0 - exp(-4.0)));
  vec3 c = mix(u_skyHorizon.rgb, u_skyZenith.rgb, t);
  vec3 s = u_skySun.xyz;
  float mu = max(dot(normalize(vec3(dir.x, y, dir.z)), s), 0.0);
  float mu2 = mu * mu, mu4 = mu2 * mu2, mu8 = mu4 * mu4, mu32 = mu8 * mu8 * mu8 * mu8;
  // A band of light along the horizon toward the sun, widest at sunset.
  vec2 hz = dir.xz / max(length(dir.xz), 1e-4);
  vec2 hs = s.xz / max(length(s.xz), 1e-4);
  float toward = 0.5 + 0.5 * dot(hz, hs);
  float band = toward * toward * toward * (1.0 - smoothstep(0.0, 0.35, y));
  return c + u_skyGlow.rgb * (0.18 * mu4 + 0.45 * mu32 + 0.4 * band);
}

// Distant geometry fades into the sky behind it. Screen-space colour in, screen-space colour out.
// Off (identity) without a perspective view or with the haze switched off.
vec3 aerialPerspective(vec3 display, vec3 worldPos) {
  if (u_skyHorizon.w <= 0.0) return display;
  vec3 v = worldPos - u_skyEye.xyz;
  float len = max(length(v), 1e-3);
  float k = len * u_skyHorizon.w;
  return mix(display, skyColorDir(v / len), 1.0 - exp(-k * k));
}

// Clouds along a view direction: rgb colour, a coverage. The deck is a plane at u_skySun.w; the field is looked up
// where the light (u_sunDir, the same direction that casts the scene's shadows) throws this cloud's shadow on the
// ground, so the clouds overhead and their shadows agree.
vec4 skyClouds(vec3 dir) {
  // No early return: fwidth below needs every pixel of the quad.
  float t = max(u_skySun.w - u_skyEye.y, 1.0) / max(dir.y, 1e-3);
  vec3 hit = u_skyEye.xyz + dir * t;
  vec3 L = u_sunDir.xyz;
  vec2 ground = hit.xz - L.xz * (u_skySun.w / max(L.y, 0.05));
  vec2 q = (ground - u_cloud.xy) * u_cloud.w;
  float fw = length(fwidth(q));
  float n = skyCloudField(q, fw);
  float edge = 0.5 * fw;
  float cover = smoothstep(u_cloudEdge.x - edge, u_cloudEdge.y + edge, n) * smoothstep(0.0, 0.04, u_snow.w);
  float thick = smoothstep(u_cloudEdge.x, u_cloudEdge.x + 0.45, n);
  float overcast = u_skyCloud.w;
  vec3 lit = u_skyCloud.rgb;
  vec3 col = lit * mix(1.0, 0.7, thick);
  // Thin edges toward the sun light up.
  float mu = max(dot(dir, u_skySun.xyz), 0.0);
  float mu2 = mu * mu, mu4 = mu2 * mu2;
  col += u_skyGlow.rgb * mu4 * mu4 * (1.0 - thick) * 1.4;
  // The continuous deck of an overcast sky: an even grey a little darker than the lit cloud.
  col = mix(col, lit * 0.74, overcast * (1.0 - cover));
  // Fog veils the clouds too.
  float a = max(cover, overcast) * (1.0 - 0.75 * u_weather.z) * step(0.0, dir.y);
  // Far clouds sink into the horizon haze.
  float far = t / u_skyFade.x;
  return vec4(mix(col, skyColorDir(dir), 1.0 - exp(-far * far)), a);
}

// Stars: at most one per cell of a cube-map grid over the directions, from an integer hash. Fixed in the world, so
// they hold still when the view turns; never narrower than a pixel, so they do not flicker.
float skyStars(vec3 dir, float pixelAngle) {
  vec3 a = abs(dir);
  vec2 uv;
  uint face;
  float major;
  if (a.x >= a.y && a.x >= a.z) { uv = dir.zy / a.x; face = dir.x > 0.0 ? 0u : 1u; major = a.x; }
  else if (a.y >= a.z) { uv = dir.xz / a.y; face = dir.y > 0.0 ? 2u : 3u; major = a.y; }
  else { uv = dir.xy / a.z; face = dir.z > 0.0 ? 4u : 5u; major = a.z; }
  const float CELLS = 160.0;
  vec2 g = (uv * 0.5 + 0.5) * CELLS;
  vec2 cf = floor(g);
  ivec2 cell = ivec2(cf);
  uint seed = 400u + face * 8u;
  if (hash2(cell, seed) > 0.3) return 0.0;
  vec2 at = 0.2 + 0.6 * vec2(hash2(cell, seed + 1u), hash2(cell, seed + 2u));
  float m = hash2(cell, seed + 3u);
  float bright = 0.12 + 0.88 * m * m * m * m;
  float px = pixelAngle * CELLS * 0.5 / major;
  float r = max(0.8 * px, 0.01);
  vec2 off = g - cf - at;
  return bright * exp(-dot(off, off) / (r * r));
}

// The whole sky in a direction, screen space: gradient and glow, stars, moon, sun and clouds.
vec3 skyView(vec3 dir) {
  float pa = max(length(fwidth(dir)), 1e-5);
  vec3 c = skyColorDir(dir);
  float up = smoothstep(-0.5 * pa, 0.5 * pa, dir.y);
  c += vec3(0.88, 0.92, 1.0) * skyStars(dir, pa) * u_skyZenith.w * smoothstep(0.02, 0.25, dir.y);
  // Moon: a mottled disc and a faint halo.
  vec3 m = u_skyMoon.xyz;
  float rm = 0.014;
  float dm = length(dir - m);
  vec3 t1 = normalize(cross(m, vec3(0.0, 1.0, 0.0)) + vec3(1e-5, 0.0, 0.0));
  vec3 t2 = cross(t1, m);
  vec2 lm = vec2(dot(dir - m, t1), dot(dir - m, t2)) / rm;
  float mott = 0.8 + 0.2 * vnoise(lm * 2.2 + 5.0, 92u);
  float disc = (1.0 - smoothstep(rm - pa, rm + pa, dm)) * up * u_skyMoon.w;
  c = mix(c, vec3(0.9, 0.91, 0.94) * mott, disc);
  c += vec3(0.1, 0.12, 0.16) * u_skyMoon.w * up * exp(-dm * dm * (1.0 / 0.004));
  // Sun: a bright disc tinted by the glow, the warmer the lower it stands.
  vec3 s = u_skySun.xyz;
  float rs = 0.012;
  float ds = length(dir - s);
  float sun = (1.0 - smoothstep(rs - pa, rs + pa, ds)) * up * u_skyGlow.w;
  vec3 sunCol = min(vec3(1.0, 0.96, 0.88) + u_skyGlow.rgb * 1.2, vec3(1.0));
  c = mix(c, sunCol, sun);
  c += u_skyGlow.rgb * u_skyGlow.w * up * 0.35 * exp(-ds * ds * (1.0 / 0.0008));
  vec4 cl = skyClouds(dir);
  return mix(c, cl.rgb, cl.a);
}
`,Pr=`
vec3 skyToEye(vec3 worldPos) { return -u_camForward.xyz; }
vec3 skyColorDir(vec3 dir) { return u_fogColor.rgb; }
vec3 aerialPerspective(vec3 display, vec3 worldPos) { return display; }
`;function Fr(e={}){return{name:`sky`,params:{...wr,eye:null,...e},fields:[{member:`u_skyZenith`,order:1e3,lanes:`xyzw`,doc:`rgb sky straight up, w star visibility 0–1`},{member:`u_skyHorizon`,order:1010,lanes:`xyzw`,doc:`rgb sky at the horizon, w 1 / haze distance (0 off)`},{member:`u_skyGlow`,order:1020,lanes:`xyzw`,doc:`rgb glow around the sun, w sun disc visibility 0–1`},{member:`u_skySun`,order:1030,lanes:`xyzw`,doc:`xyz true direction to the sun, w cloud deck height`},{member:`u_skyMoon`,order:1040,lanes:`xyzw`,doc:`xyz direction to the moon, w moon visibility 0–1`},{member:`u_skyCloud`,order:1050,lanes:`xyzw`,doc:`rgb sunlit cloud colour, w overcast deck 0–1`},{member:`u_skyEye`,order:1060,lanes:`xyzw`,doc:`xyz eye, w 1 perspective, 0 none`},{member:`u_skyFade`,order:1070,lanes:`x`,doc:`x distance at which clouds sink into the horizon`}],compute:Mr,lanes:e=>[...e.zenith,e.stars,...e.horizon,e.invHaze,...e.glow,e.sunDisc,...e.sunDir,e.cloudHeightM,...e.moonDir,e.moon,...e.cloud,e.overcast,...e.eye,e.perspective,e.cloudFadeM],glsl:Nr}}var Ir={amount:0,zenith:[.11,.37,.82],horizon:[.65,.85,.95],curve:.5,glow:[1,.95,.85],glowAmount:0,glowTightness:8,sun:[1,1,1],haze:[.65,.85,.95],hazePerM:0,hazeScaleM:1e3,hazeBaseM:0,hazeStartM:0},Lr={radiusM:636e4,heightM:1e5,rayleigh:[5802e-9,13558e-9,331e-7],rayleighScaleM:8e3,mieScattering:3996e-9,mieAbsorption:44e-7,mieScaleM:1200,mieG:.8,absorption:[65e-8,1881e-9,85e-9],absorptionCenterM:25e3,absorptionHalfWidthM:15e3,groundAlbedo:.3,exposure:30,sunLight:[1.45,1.38,1.3],skyLightGain:2.5,nightLight:[.02,.025,.04],sunDiscRad:.012,stars:1,cloudTopM:4e3,groundY:0,skySteps:24,airSteps:8,reference:!1},Rr={width:160,height:32,transmittance:[0,0,128,32],multiScatter:[128,0,32,16],skyLight:[128,16,32,16]},zr=Rr.transmittance[2],Br=Rr.transmittance[3],Vr=Rr.multiScatter[2],Hr=Rr.multiScatter[3],Ur=4*Math.PI,Wr=.01,Gr=60;function Kr(e,t){let n=e-t;return Math.abs(n)>1e-4*(e+t)?n/Math.log(e/t):.5*(e+t)}function qr(e,t,n,r,i,a){let o=Math.min(1,Math.max(0,r))*(t-1),s=Math.min(1,Math.max(0,i))*(n-1),c=Math.min(t-2,Math.floor(o)),l=Math.min(n-2,Math.floor(s)),u=o-c,d=s-l,f=(l*t+c)*3,p=f+3,m=f+t*3,h=m+3;for(let t=0;t<3;t++){let n=e[f+t]+(e[p+t]-e[f+t])*u,r=e[m+t]+(e[h+t]-e[m+t])*u;a[t]=n+(r-n)*d}}function Jr(e,t,n){let r=e.m,i=Math.max(0,t);n[0]=Math.exp(-Math.min(i/r.rayleighScaleM,Gr)),n[1]=Math.exp(-Math.min(i/r.mieScaleM,Gr)),n[2]=Math.max(0,1-Math.abs(t-r.absorptionCenterM)/r.absorptionHalfWidthM)}function Yr(e,t,n,r){let{Rg:i,Rt:a,Hh:o}=e,s=Math.min(a,Math.max(i,t)),c=Math.sqrt(Math.max(0,s*s-i*i)),l=-c/s,u=Math.min(1,Math.max(0,(n-l)/Wr+.5));if(u<=0){r[0]=r[1]=r[2]=0;return}let d=Math.max(n,l),f=Math.max(0,-s*d+Math.sqrt(Math.max(0,s*s*(d*d-1)+a*a))),p=a-s,m=c+o;qr(e.transmittance,zr,Br,(f-p)/Math.max(m-p,.001),c/o,r),r[0]*=u,r[1]*=u,r[2]*=u}function Xr(e,t,n){let{Rg:r,Rt:i}=e,a=t*t*(n*n-1)+r*r;return n<0&&a>=0?{length:Math.max(0,-t*n-Math.sqrt(a)),ground:!0}:{length:Math.max(0,-t*n+Math.sqrt(Math.max(0,t*t*(n*n-1)+i*i))),ground:!1}}function Zr(e){let{m:t,Rg:n,Rt:r,Hh:i}=e,a=new Float64Array(zr*Br*3),o=[0,0,0],s=[0,0,0];for(let c=0;c<Br;c++){let l=i*c/(Br-1),u=Math.sqrt(l*l+n*n),d=r-u,f=l+i;for(let r=0;r<zr;r++){let p=d+(f-d)*r/(zr-1),m=p>0?Math.min(1,Math.max(-1,(i*i-l*l-p*p)/(2*u*p))):1,h=0,g=0,_=0,v=p/40;Jr(e,u-n,o);for(let t=1;t<=40;t++){let r=v*t;Jr(e,Math.sqrt(u*u+r*r+2*u*m*r)-n,s),h+=Kr(o[0],s[0])*v,g+=Kr(o[1],s[1])*v,_+=.5*(o[2]+s[2])*v,o[0]=s[0],o[1]=s[1],o[2]=s[2]}let y=(c*zr+r)*3;for(let n=0;n<3;n++)a[y+n]=Math.exp(-(t.rayleigh[n]*h+e.mieExtinction*g+t.absorption[n]*_))}}return a}function Qr(e,t,n,r,i,a,o,s,c,l){let{m:u,Rg:d}=e,{length:f,ground:p}=Xr(e,t,n[1]),m=[1,1,1],h=[0,0,0],g=[0,0,0],_=[0,0,0],v=[0,0,0],y=[0,0,0],b=[0,0,0];Jr(e,t-d,h),Yr(e,t,r[1],_),s&&s(t-d,r[1],y);let x=f/i,S=0,C=t,w=0;for(let f=1;f<=i&&x>0;f++){let i=x*f;S=n[0]*i,C=t+n[1]*i,w=n[2]*i;let p=Math.sqrt(S*S+C*C+w*w),T=(S*r[0]+C*r[1]+w*r[2])/p;Jr(e,p-d,g),Yr(e,p,T,v),s&&s(p-d,T,b);let E=Kr(h[0],g[0]),D=Kr(h[1],g[1]),O=.5*(h[2]+g[2]);for(let t=0;t<3;t++){let n=u.rayleigh[t]*E,r=u.mieScattering*D,i=n+e.mieExtinction*D+u.absorption[t]*O,s=Math.exp(-i*x),d=i*x>1e-6?(1-s)/i:x,f=.5*(_[t]+v[t])*(n*o+r*a)+.5*(y[t]+b[t])*(n+r);c[t]=c[t]+m[t]*f*d,l[t]=l[t]+m[t]*(n+r)*d,m[t]=m[t]*s}for(let e=0;e<3;e++)h[e]=g[e],_[e]=v[e],y[e]=b[e]}if(p&&f>0){let t=(S*r[0]+C*r[1]+w*r[2])/d;Yr(e,d,t,v);let n=Math.max(0,t)*u.groundAlbedo/Math.PI;for(let e=0;e<3;e++)c[e]=c[e]+m[e]*v[e]*n}}function $r(e,t,n){let r=e.m.heightM*1e-4;return e.Rg+r+(e.m.heightM-2*r)*t/(n-1)}function ei(e){let t=new Float64Array(Vr*Hr*3),n=[];for(let e=0;e<8;e++)for(let t=0;t<8;t++){let r=2*Math.PI*(e+.5)/8,i=1-2*(t+.5)/8,a=Math.sqrt(Math.max(0,1-i*i));n.push([a*Math.cos(r),i,a*Math.sin(r)])}for(let r=0;r<Hr;r++){let i=$r(e,r,Hr);for(let a=0;a<Vr;a++){let o=-1+2*a/(Vr-1),s=[Math.sqrt(Math.max(0,1-o*o)),o,0],c=[0,0,0],l=[0,0,0];for(let t of n)Qr(e,i,t,s,20,1/Ur,1/Ur,null,c,l);let u=(r*Vr+a)*3;for(let e=0;e<3;e++)t[u+e]=c[e]/n.length/(1-Math.min(.99,l[e]/n.length))}}return t}function ti(e,t){let n=new Float64Array(Vr*Hr*3),r=e.m.heightM,i=(e,n,i)=>qr(t,Vr,Hr,n*.5+.5,e/r,i),a=[];for(let e=0;e<8;e++)for(let t=0;t<4;t++){let n=2*Math.PI*(e+.5)/8,r=Math.sqrt(1-(t+.5)/4),i=Math.sqrt(Math.max(0,1-r*r));a.push([i*Math.cos(n),r,i*Math.sin(n)])}let o=[0,0,0];for(let t=0;t<Hr;t++){let r=$r(e,t,Hr);for(let s=0;s<Vr;s++){let c=-1+2*s/(Vr-1),l=[Math.sqrt(Math.max(0,1-c*c)),c,0],u=[0,0,0];for(let t of a){let n=t[0]*l[0]+t[1]*l[1]+t[2]*l[2];Qr(e,r,t,l,16,1/Ur,3/(16*Math.PI)*(1+n*n),i,u,o)}let d=(t*Vr+s)*3;for(let e=0;e<3;e++)n[d+e]=Math.PI*u[e]/a.length}}return n}function ni(e){if(!(e.radiusM>0&&e.heightM>0))throw Error(`atmosphereTables: radiusM and heightM must be positive`);let t=e.radiusM,n=e.radiusM+e.heightM,r={m:e,Rg:t,Rt:n,Hh:Math.sqrt(n*n-t*t),mieExtinction:e.mieScattering+e.mieAbsorption,transmittance:new Float64Array};r.transmittance=Zr(r);let i=ei(r),a=ti(r,i),o=e=>e.reduce((e,t)=>Math.max(e,t),1e-9),s=o(i),c=o(a),l=Rr,u=new Uint8Array(l.width*l.height*4),d=(e,t,n)=>{let[r,i,a,o]=t;for(let t=0;t<o;t++)for(let o=0;o<a;o++){let s=((i+t)*l.width+r+o)*4;for(let r=0;r<3;r++)u[s+r]=Math.round(255*Math.sqrt(Math.min(1,Math.max(0,e[(t*a+o)*3+r]/n))));u[s+3]=255}};return d(r.transmittance,l.transmittance,1),d(i,l.multiScatter,s),d(a,l.skyLight,c),{texture:{width:l.width,height:l.height,format:`rgba8`,data:u,filter:`linear`},multiScatterScale:s,skyLightScale:c}}var ri=.5,ii=.9,ai=.3;function oi(e,t,n){return s(ri,ii,e)*(1-s(n,2*n,t))}function si(e,t,n,r){return{sunDir:e.sunDir,exposure:t.eye?Math.max(0,t.exposure):0,eye:t.eye??[0,0,0],eyeHeightM:t.eye?t.eyeHeightM:0,radiusM:n.radiusM,topM:n.radiusM+n.heightM,groundY:t.groundY,sunDiscRad:t.sunDiscRad,rayleigh:n.rayleigh,invRayleighScale:1/n.rayleighScaleM,mieScattering:n.mieScattering,mieExtinction:n.mieScattering+n.mieAbsorption,invMieScale:1/n.mieScaleM,mieG:n.mieG,absorption:n.absorption,absorptionCenterM:n.absorptionCenterM,invAbsorptionHalfWidth:1/n.absorptionHalfWidthM,multiScatterScale:r.multiScatterScale,skyLightScale:r.skyLightScale,stars:t.stars,sunLight:t.sunLight,skyLightGain:t.skyLightGain,nightLight:t.nightLight,reference:+!!t.reference,overcast:t.eye?oi(e.cloudCover,t.eyeHeightM,t.cloudTopM):0,...t.paint?{paint:t.paint}:{}}}var ci=`
#define WH_ATM_PAINT 1
// The painted horizon toward a direction: the horizon's colour with the glow round the sun.
vec3 atmPaintGlow(vec3 base, vec3 dir) {
  float g = u_atmPaintSun.w * exp(-u_atmPaintGlow.w * (1.0 - dot(dir, u_atmSun.xyz)));
  return mix(base, u_atmPaintGlow.rgb, clamp(g, 0.0, 1.0));
}

// The painted sky over the computed one: screen-space colour of the sky along a view ray in, the same with the
// painted gradient and glow out.
vec3 atmospherePaintSky(vec3 dir, vec3 display) {
  float amount = u_atmPaintZenith.w;
  if (amount <= 0.0 || u_atmSun.w <= 0.0) return display;
  float h;
  vec3 ro = atmEye(h);
  float r0 = u_atmShell.x + h;
  float mu = dot(ro, dir) / r0;
  float muH = -sqrt(h * (2.0 * u_atmShell.x + h)) / r0;
  float e = clamp((mu - muH) / (1.0 - muH), 0.0, 1.0);
  vec3 c = mix(u_atmPaintHorizon.rgb, u_atmPaintZenith.rgb, pow(e, max(u_atmPaintHorizon.w, 0.01)));
  return mix(display, atmPaintGlow(c, dir), amount);
}

// The painted air in front of a point of the scene: through and air (a screen-space colour) of the computed air in,
// the same with the painted horizon's colour in the place of the computed light, and the haze, out.
void atmospherePaintAir(vec3 worldPos, inout vec3 through, inout vec3 air) {
  float amount = u_atmPaintZenith.w;
  if (amount <= 0.0) return;
  vec3 d = worldPos - u_atmEye.xyz;
  float len = max(length(d), 1e-3);
  float t = dot(through, vec3(0.3, 0.59, 0.11));
  air = mix(air, atmPaintGlow(u_atmPaintHorizon.rgb, d / len) * (1.0 - t), amount);
  through = mix(through, vec3(t), amount);
  float k = u_atmPaintHaze.w * amount;
  if (k <= 0.0) return;
  float h0 = max(u_atmEye.w - u_atmPaintTune.y, 0.0) * u_atmPaintTune.x;
  float h1 = max(length(worldPos - atmCenter()) - u_atmShell.x - u_atmPaintTune.y, 0.0) * u_atmPaintTune.x;
  float a = 1.0 - exp(-k * max(len - u_atmPaintTune.z, 0.0) * atmMean(exp(-min(h0, ${Gr.toFixed(1)})), exp(-min(h1, ${Gr.toFixed(1)}))));
  through *= 1.0 - a;
  air = mix(air, u_atmPaintHaze.rgb, a);
}
`,li=48,ui=e=>Math.min(li,Math.max(2,Math.round(e))),di=e=>e.toFixed(1);function fi(e,t,n=!1){let r=n?`vec3 shown = atmDisplay(atmUnderCloud(air));
  atmospherePaintAir(worldPos, through, shown);
  return display * through + shown;`:`return display * through + atmDisplay(atmUnderCloud(air));`,i=Rr,a=e=>`vec2(${di(e[0])}, ${di(e[1])}), vec2(${di(e[2])}, ${di(e[3])})`;return`
#define WH_ATMOSPHERE 1
#define ATM_SKY_STEPS ${ui(e)}
#define ATM_AIR_STEPS ${ui(t)}
uniform highp sampler2D u_atmTables;

// Centre of the ground sphere in render space. Where up is +y the sphere touches the ground straight under the eye.
vec3 atmCenter() {
#ifdef WH_LOCAL_UP
  return u_upCenter.xyz;
#else
  return vec3(u_atmEye.x, u_atmShell.z - u_atmShell.x, u_atmEye.z);
#endif
}

// One of the tables at a place given in 0–1 with texel centres at both ends; the stored square root is undone.
vec3 atmTable(vec2 at, vec2 origin, vec2 size) {
  vec2 uv = (origin + 0.5 + clamp(at, 0.0, 1.0) * (size - 1.0)) / vec2(${di(i.width)}, ${di(i.height)});
  vec3 v = textureLod(u_atmTables, uv, 0.0).rgb;
  return v * v;
}

// Densities at a height above the ground sphere: x molecules, y particles, z the absorbing layer.
vec3 atmDensity(float h) {
  float hh = max(h, 0.0);
  return vec3(exp(-min(hh * u_atmRayleigh.w, ${di(Gr)})), exp(-min(hh * u_atmMie.z, ${di(Gr)})), max(0.0, 1.0 - abs(h - u_atmAbsorb.w) * u_atmTune.x));
}

// Mean of an exponential over a segment from its two end values.
float atmMean(float a, float b) {
  float d = a - b;
  return abs(d) > 1e-4 * (a + b) ? d / log(a / b) : 0.5 * (a + b);
}

// Share of the sun's light that reaches a point at the distance r from the centre, where the sun stands at the
// cosine mu from straight up. Behind the horizon of the ground sphere it is 0: that is the line between day and night.
vec3 atmSunAt(float r, float mu) {
  float Rg = u_atmShell.x;
  float Rt = u_atmShell.y;
  r = clamp(r, Rg, Rt);
  float rho = sqrt(max(r * r - Rg * Rg, 0.0));
  float muH = -rho / r;
  float vis = clamp((mu - muH) * ${di(1/Wr)} + 0.5, 0.0, 1.0);
  if (vis <= 0.0) return vec3(0.0);
  mu = max(mu, muH);
  float hh = sqrt(Rt * Rt - Rg * Rg);
  float d = max(-r * mu + sqrt(max(r * r * (mu * mu - 1.0) + Rt * Rt, 0.0)), 0.0);
  float dMin = Rt - r;
  float dMax = rho + hh;
  return atmTable(vec2((d - dMin) / max(dMax - dMin, 1e-3), rho / hh), ${a(i.transmittance)}) * vis;
}

// Light scattered more than once at a height, per unit of scattering.
vec3 atmMultiAt(float h, float mu) {
  return atmTable(vec2(mu * 0.5 + 0.5, h / (u_atmShell.y - u_atmShell.x)), ${a(i.multiScatter)}) * u_atmTune.y;
}

// The sky's light on a level surface at a height.
vec3 atmSkyLightAt(float h, float mu) {
  return atmTable(vec2(mu * 0.5 + 0.5, h / (u_atmShell.y - u_atmShell.x)), ${a(i.skyLight)}) * u_atmTune.z;
}

// Share of the sunlight particles scatter that goes on at the cosine cosT between the ray and the sun.
float atmPhaseMie(float cosT) {
  float g = u_atmMie.w;
  return 0.0795775 * (1.0 - g * g) / pow(max(1.0 + g * g - 2.0 * g * cosT, 1e-4), 1.5);
}

// Light the air scatters toward the start of a piece of a ray (the sun above the air is 1), in two parts, and
// through: the share of light from behind the piece that passes it. Returned: what molecules scatter of the sun and
// the light scattered more than once. mie: what particles scatter of the sun, before their phase value
// (atmPhaseMie), which is constant along a ray and far from even across the sky: kept apart, a coarse table of it
// still gives a sharp glow round the sun. ro is the start relative to the centre of the sphere, rd the unit
// direction, len the length of the piece inside the shell of air.
vec3 atmSegmentParts(vec3 ro, vec3 rd, float len, int count, out vec3 mie, out vec3 through) {
  through = vec3(1.0);
  mie = vec3(0.0);
  vec3 light = vec3(0.0);
  if (len <= 0.0) return light;
  float Rg = u_atmShell.x;
  vec3 sunDir = u_atmSun.xyz;
  float cosT = dot(rd, sunDir);
  float phaseR = 0.0596831 * (1.0 + cosT * cosT);
  float dt = len / float(count);
  float r = max(length(ro), 1.0);
  float mu = dot(ro, sunDir) / r;
  vec3 dA = atmDensity(r - Rg);
  vec3 sunA = atmSunAt(r, mu);
  vec3 msA = atmMultiAt(r - Rg, mu);
  for (int i = 1; i <= ${li}; i++) {
    if (i > count) break;
    vec3 p = ro + rd * (dt * float(i));
    r = max(length(p), 1.0);
    mu = dot(p, sunDir) / r;
    vec3 dB = atmDensity(r - Rg);
    vec3 sunB = atmSunAt(r, mu);
    vec3 msB = atmMultiAt(r - Rg, mu);
    float rhoR = atmMean(dA.x, dB.x);
    float rhoM = atmMean(dA.y, dB.y);
    float rhoO = 0.5 * (dA.z + dB.z);
    vec3 scatR = u_atmRayleigh.rgb * rhoR;
    float scatM = u_atmMie.x * rhoM;
    vec3 ext = scatR + vec3(u_atmMie.y * rhoM) + u_atmAbsorb.rgb * rhoO;
    vec3 sun = 0.5 * (sunA + sunB);
    vec3 x = ext * dt;
    vec3 stepT = exp(-x);
    // The piece's own share, exact for an even source; for very thin air the series, which does not cancel.
    vec3 part = through * mix(dt * (1.0 - 0.5 * x), (1.0 - stepT) / max(ext, vec3(1e-20)), step(vec3(1e-3), x));
    light += part * (sun * scatR * phaseR + 0.5 * (msA + msB) * (scatR + vec3(scatM)));
    mie += part * sun * scatM;
    through *= stepT;
    dA = dB;
    sunA = sunB;
    msA = msB;
  }
  return light;
}

// The same as one light: both parts, the particles' with their phase value.
vec3 atmSegment(vec3 ro, vec3 rd, float len, int count, out vec3 through) {
  vec3 mie;
  vec3 light = atmSegmentParts(ro, rd, len, count, mie, through);
  return light + mie * atmPhaseMie(dot(rd, u_atmSun.xyz));
}

// Scattered light as a screen-space colour.
vec3 atmDisplay(vec3 light) {
  return 1.0 - exp(-light * u_atmSun.w);
}

// The air's light under an overcast sky: the sun that lights it is mostly behind the clouds, so it is dimmer and grey.
vec3 atmUnderCloud(vec3 air) {
  float oc = u_atmCloud.x;
  return oc > 0.0 ? mix(air, vec3(dot(air, vec3(0.3, 0.59, 0.11))), 0.75 * oc) * (1.0 - 0.6 * oc) : air;
}

// The eye relative to the centre of the sphere. Its distance comes from the height computed on the CPU, which stays
// exact a metre above a sphere thousands of kilometres across.
vec3 atmEye(out float h) {
  h = max(u_atmEye.w, 0.5);
  vec3 e = u_atmEye.xyz - atmCenter();
  return e * ((u_atmShell.x + h) / max(length(e), 1.0));
}

// The air along a view ray from the eye: the scattered light (the sun above the air is 1), through: the share of
// what lies behind the air that still shows, ground: 1 when the ray ends on the ground sphere.
vec3 atmosphereSky(vec3 dir, out vec3 through, out float ground) {
  through = vec3(1.0);
  ground = 0.0;
  if (u_atmSun.w <= 0.0) return vec3(0.0);
  float Rg = u_atmShell.x;
  float Rt = u_atmShell.y;
  float h;
  vec3 ro = atmEye(h);
  float r0 = Rg + h;
  float b = dot(ro, dir);
  // r0² − Rt² and r0² − Rg², from the heights.
  float ct = (r0 - Rt) * (r0 + Rt);
  float cg = h * (2.0 * Rg + h);
  float dTop = b * b - ct;
  if (dTop <= 0.0) return vec3(0.0);
  float sq = sqrt(dTop);
  float t0 = max(-b - sq, 0.0);
  float t1 = -b + sq;
  float dGround = b * b - cg;
  if (b < 0.0 && dGround > 0.0) {
    t1 = min(t1, -b - sqrt(dGround));
    ground = 1.0;
  }
  if (t1 <= t0) return vec3(0.0);
  return atmSegment(ro + dir * t0, dir, t1 - t0, ATM_SKY_STEPS, through);
}

// The air between the eye and a point of the scene: the light it scatters toward the eye (the sun above the air is
// 1), and through: the share of the point's own colour that passes.
vec3 atmAirTo(vec3 worldPos, out vec3 through) {
  through = vec3(1.0);
  vec3 d = worldPos - u_atmEye.xyz;
  float len = length(d);
  if (len < 1e-3) return vec3(0.0);
  vec3 dir = d / len;
  float Rt = u_atmShell.y;
  float h;
  vec3 ro = atmEye(h);
  float r0 = u_atmShell.x + h;
  float b = dot(ro, dir);
  float dTop = b * b - (r0 - Rt) * (r0 + Rt);
  if (dTop <= 0.0) return vec3(0.0);
  float sq = sqrt(dTop);
  float t0 = max(-b - sq, 0.0);
  float t1 = min(-b + sq, len);
  if (t1 <= t0) return vec3(0.0);
  return atmSegment(ro + dir * t0, dir, t1 - t0, ATM_AIR_STEPS, through);
}

${n?ci:``}// The air between the eye and a point of the scene, integrated here and now: screen-space colour in, screen-space
// colour out. Identity in a view without an eye. In a fragment shader this is the integral per pixel; a material
// with vertices close enough together takes it there instead (atmosphereAir) and applies the result below.
vec3 atmosphereApply(vec3 display, vec3 worldPos) {
  if (u_atmSun.w <= 0.0) return display;
  vec3 through;
  vec3 air = atmAirTo(worldPos, through);
  ${r}
}

// For a vertex shader: the air between the eye and the vertex, as the two values the fragment shader hands to
// atmosphereApply below. Both change slowly over a surface, so the rasteriser may carry them across a triangle.
// Returned: the scattered light, through: the share of the surface's colour that passes. In the reference quality
// nothing is integrated here.
vec3 atmosphereAir(vec3 worldPos, out vec3 through) {
  through = vec3(1.0);
  if (u_atmSun.w <= 0.0 || u_atmNight.w > 0.5) return vec3(0.0);
  return atmAirTo(worldPos, through);
}

// The air in front of a fragment from what atmosphereAir gave at the vertices: screen-space colour in, screen-space
// colour out. In the reference quality the fragment integrates its own view ray instead.
vec3 atmosphereApply(vec3 display, vec3 worldPos, vec3 air, vec3 through) {
  if (u_atmSun.w <= 0.0) return display;
  if (u_atmNight.w > 0.5) return atmosphereApply(display, worldPos);
  ${r}
}

// Colour of the direct sun at a point, as a multiple of the surface colour: white above the air, red through a long
// way of it, nothing on the night side.
vec3 atmosphereSun(vec3 worldPos) {
  vec3 p = worldPos - atmCenter();
  float r = max(length(p), 1.0);
  return u_atmLight.rgb * atmSunAt(r, dot(p, u_atmSun.xyz) / r);
}

// Light on a surface as a multiple of its colour, in the place of lightOn: the sun through the air over the point,
// the sky's light there and what remains at night. sun is the share of direct light (shadows, clouds), ao the share
// of the surroundings' light. Under an overcast sky (u_atmCloud.x) the sky's light turns into the light the clouds pass
// on: grey, a share of the sun and the sky above them, nearly the same from every side, so the ground is lit flat;
// the sun through a gap comes in through sun (the cloud shadows).
vec3 atmosphereLight(vec3 worldPos, vec3 n, float sun, float ao) {
  vec3 p = worldPos - atmCenter();
  float r = max(length(p), 1.0);
  vec3 up = p / r;
  vec3 s = u_atmSun.xyz;
  float mu = dot(up, s);
  vec3 sunHere = atmSunAt(r, mu);
  vec3 direct = sunHere * (max(dot(n, s), 0.0) * sun);
  vec3 skyHere = atmSkyLightAt(r - u_atmShell.x, mu) * u_atmLight.w;
  vec3 sky = skyHere * (0.5 + 0.5 * dot(n, up));
  float oc = u_atmCloud.x;
  if (oc > 0.0) {
    float above = dot(sunHere * max(mu, 0.0) + skyHere, vec3(0.3, 0.59, 0.11));
    sky = mix(sky, vec3(above * ${ai} * (0.75 + 0.25 * dot(n, up))), oc);
  }
  return u_atmLight.rgb * (direct + sky * ao) + u_atmNight.rgb * ao;
}
`}var pi=`
vec3 atmosphereApply(vec3 display, vec3 worldPos) { return display; }
vec3 atmosphereAir(vec3 worldPos, out vec3 through) { through = vec3(1.0); return vec3(0.0); }
vec3 atmosphereApply(vec3 display, vec3 worldPos, vec3 air, vec3 through) { return display; }
`;function mi(e={}){let t={...Lr,eye:null,eyeHeightM:0,...e},n={radiusM:t.radiusM,heightM:t.heightM,rayleigh:[t.rayleigh[0],t.rayleigh[1],t.rayleigh[2]],rayleighScaleM:t.rayleighScaleM,mieScattering:t.mieScattering,mieAbsorption:t.mieAbsorption,mieScaleM:t.mieScaleM,mieG:t.mieG,absorption:[t.absorption[0],t.absorption[1],t.absorption[2]],absorptionCenterM:t.absorptionCenterM,absorptionHalfWidthM:t.absorptionHalfWidthM,groundAlbedo:t.groundAlbedo},r=ni(n),i=!!t.paint,a=e=>[...e.zenith,Math.min(1,Math.max(0,e.amount)),...e.horizon,e.curve,...e.glow,e.glowTightness,...e.sun,e.glowAmount,...e.haze,Math.max(0,e.hazePerM),1/Math.max(e.hazeScaleM,.001),e.hazeBaseM,Math.max(0,e.hazeStartM??0),0];return{name:`atmosphere`,params:t,medium:n,tables:r,fields:[{member:`u_atmSun`,order:1100,lanes:`xyzw`,doc:`xyz true direction to the sun, w exposure of the scattered light (0: no air in this view)`},{member:`u_atmEye`,order:1110,lanes:`xyzw`,doc:`xyz eye, w its height above the ground sphere`},{member:`u_atmShell`,order:1120,lanes:`xyzw`,doc:`x radius of the ground sphere, y radius of the top of the air, z ground height where up is +y, w radius of the sun disc in radians`},{member:`u_atmRayleigh`,order:1130,lanes:`xyzw`,doc:`rgb scattering by molecules per metre at the ground, w 1 / its scale height`},{member:`u_atmMie`,order:1140,lanes:`xyzw`,doc:`x scattering by particles per metre at the ground, y their extinction, z 1 / their scale height, w forward share`},{member:`u_atmAbsorb`,order:1150,lanes:`xyzw`,doc:`rgb absorption per metre in the middle of the absorbing layer, w height of its middle`},{member:`u_atmTune`,order:1160,lanes:`xyzw`,doc:`x 1 / half-width of the absorbing layer, y, z scales of the tables of light scattered more than once and of sky light, w star visibility`},{member:`u_atmLight`,order:1170,lanes:`xyzw`,doc:`rgb the sun above the air as light on surfaces, w gain of the sky light on surfaces`},{member:`u_atmNight`,order:1180,lanes:`xyzw`,doc:`rgb light on surfaces without the sun, w 1: the reference quality, every pixel integrates its own view ray`},{member:`u_atmCloud`,order:1190,lanes:`xyzw`,doc:`x how overcast the sky over the eye is (atmosphereOvercast), yzw 0`},...i?[{member:`u_atmPaintZenith`,order:1191,lanes:`xyzw`,doc:`rgb painted colour of the zenith, w share of the painted sky`},{member:`u_atmPaintHorizon`,order:1192,lanes:`xyzw`,doc:`rgb painted colour of the horizon, w exponent of the way from the horizon to the zenith`},{member:`u_atmPaintGlow`,order:1193,lanes:`xyzw`,doc:`rgb colour of the glow round the sun, w its tightness`},{member:`u_atmPaintSun`,order:1194,lanes:`xyzw`,doc:`rgb colour of the sun disc, w share of the glow at the sun`},{member:`u_atmPaintHaze`,order:1195,lanes:`xyzw`,doc:`rgb colour of the haze, w its extinction per metre at its base`},{member:`u_atmPaintTune`,order:1196,lanes:`xyzw`,doc:`x 1 / scale height of the haze, y height of its base, z metres from the eye without haze, w 0`}]:[]],compute:(e,t)=>si(e,t,n,r),lanes:e=>[...e.sunDir,e.exposure,...e.eye,e.eyeHeightM,e.radiusM,e.topM,e.groundY,e.sunDiscRad,...e.rayleigh,e.invRayleighScale,e.mieScattering,e.mieExtinction,e.invMieScale,e.mieG,...e.absorption,e.absorptionCenterM,e.invAbsorptionHalfWidth,e.multiScatterScale,e.skyLightScale,e.stars,...e.sunLight,e.skyLightGain,...e.nightLight,e.reference,e.overcast,0,0,0,...i?a(e.paint??Ir):[]],glsl:fi(t.skySteps,t.airSteps,i)}}var hi=`xyzw`,gi=[`afterLight`,`afterView`],_i={name:`env`,params:null,fields:[{member:`u_sunColor`,order:10,lanes:`xyz`,doc:``,region:`afterLight`},{member:`u_ambient`,order:20,lanes:`xyz`,doc:``,region:`afterLight`},{member:`u_skyFill`,order:30,lanes:`xyz`,doc:``,region:`afterLight`},{member:`u_bounce`,order:40,lanes:`xyz`,doc:`warm bounce from the ground`,region:`afterLight`},{member:`u_warmTint`,order:50,lanes:`xyzw`,doc:`rgb surface colour shift, and exposure`,region:`afterLight`},{member:`u_time`,order:10,lanes:`xy`,doc:`x animation time in seconds, y hour of day`},{member:`u_wind`,order:20,lanes:`xy`,doc:`xy direction the wind blows toward (x, z)`},{member:`u_gust`,order:30,lanes:`xy`,doc:`x 2π / gust length, y gust speed in m/s`},{member:`u_cloud`,order:40,lanes:`xyzw`,doc:`xy cloud pattern offset in metres, z darkening under a cloud 0–1, w 1 / cloud size`},{member:`u_cloudEdge`,order:50,lanes:`xy`,doc:`x, y noise thresholds between which the cloud shadow fades in`},{member:`u_weather`,order:60,lanes:`xyzw`,doc:`x snow cover, y wetness, z fog, w precipitation strength (all 0–1)`},{member:`u_fogColor`,order:70,lanes:`xyzw`,doc:`rgb fog colour in screen space, w precipitation kind (0 rain, 1 snow)`},{member:`u_snow`,order:80,lanes:`xyzw`,doc:`rgb snow albedo, w cloud cover`},{member:`u_fogShape`,order:90,lanes:`xyz`,doc:`x fog layer floor height, y 1 / fog layer height, z day of year`}],compute:e=>e,lanes:e=>[...e.sun,...e.ambient,...e.skyFill,...e.bounce,...e.warmTint,e.exposure,e.time,e.hour,e.windX,e.windZ,2*Math.PI/e.gustLengthM,e.gustSpeed,e.cloudX,e.cloudZ,e.cloudDarkness,1/e.cloudSizeM,e.cloudLo,e.cloudHi,e.snowCover,e.wetness,e.fog,e.precipitation,...e.fogColor,e.precipitationKind,...e.snowAlbedo,e.cloudCover,e.fogLayer.bottomY,1/Math.max(1,(e.fogLayer.topY-e.fogLayer.bottomY)*.8),e.dayOfYear]};function vi(e=[]){let t=[_i,...e],n=new Set;for(let e of t){if(n.has(e.name))throw Error(`Two environment slots are named "${e.name}"`);n.add(e.name)}let r=new Map;for(let e of t)for(let t of e.fields)if(t.order!==void 0){if(r.has(t.member))throw Error(`Frame member ${t.member} is declared twice (slot "${e.name}")`);r.set(t.member,{name:t.member,region:t.region??`afterView`,order:t.order,docs:[],used:[!1,!1,!1,!1],index:0})}let i={afterLight:0,afterView:0},a={afterLight:``,afterView:``},o=[...r.values()].sort((e,t)=>e.order-t.order||(e.name<t.name?-1:+(e.name>t.name))),s=[];for(let e of t){let t=[];for(let n of e.fields){let i=r.get(n.member);if(!i)throw Error(`Slot "${e.name}" writes to frame member ${n.member}, which no slot declares (give it an order)`);if(n.region!==void 0&&n.region!==i.region)throw Error(`Slot "${e.name}" places ${n.member} in another region`);for(let r of n.lanes){let a=hi.indexOf(r);if(a<0)throw Error(`Slot "${e.name}": unknown lane "${r}" in ${n.member}`);if(i.used[a])throw Error(`Slot "${e.name}": lane ${n.member}.${r} is already taken`);i.used[a]=!0,t.push({region:i.region,at:a})}n.doc&&i.docs.push({lane:hi.indexOf(n.lanes[0]),doc:n.doc})}s.push(t)}for(let e of gi)for(let t of o){if(t.region!==e)continue;t.index=i[e]++;let n=[...t.docs].sort((e,t)=>e.lane-t.lane).map(e=>e.doc).join(`, `);a[e]+=`  ${`vec4 ${t.name};`.padEnd(18)}${n?`  // ${n}`:``}`.trimEnd()+`
`}for(let e=0;e<t.length;e++){let n=s[e],i=0;for(let a of t[e].fields){let e=r.get(a.member);for(let t=0;t<a.lanes.length;t++)n[i+t].at+=e.index*4;i+=a.lanes.length}}let c=new Map;return{...i,glsl:a,slots:t,pack(e,n){c.clear();let r=[];for(let i=0;i<t.length;i++){let a=t[i],o=a.compute(e,a.params);c.set(a,o);let l=s[i];if(l.length>0){let e=a.lanes(o);if(e.length!==l.length)throw Error(`Slot "${a.name}" gave ${e.length} lanes, its fields have ${l.length}`);for(let t=0;t<l.length;t++)n[l[t].region][l[t].at]=e[t]}a.shadowKey&&r.push(a.shadowKey(o))}return{values:c,shadowKey:r.join(`|`)}}}}function yi(e){return 32+4*(5+e.afterLight+e.afterView)}function bi(e={afterLight:``,afterView:``},t=`standard`,n={}){return`#version 300 es
${t===`reversed`?`#define WH_DEPTH_REVERSED 1
`:t===`logarithmic`?`#define WH_DEPTH_LOGARITHMIC 1
`:``}${n.defines??``}precision highp float;
precision highp int;
precision highp sampler2DShadow;
precision highp usampler2D;

layout(std140) uniform Frame {
  mat4 u_viewProj;
  mat4 u_lightViewProj;
  vec4 u_sunDir;      // xyz direction to the main directional light, w used part of the shadow map (0–1)
${e.afterLight}  vec4 u_view;        // x metres per screen pixel, y metres per shadow map texel, z shadow softening radius in texels, w 1/shadow map size
  vec4 u_camRight;    // xyz screen right, w pixel growth: metres per pixel gained per metre of depth (0 orthographic)
  vec4 u_camUp;       // xyz screen up, w logarithmic depth scale 1/log2(1 + far) (0: depth is not logarithmic)
  vec4 u_camForward;  // xyz view direction, w depth at which u_view.x applies
${e.afterView}${n.frameTail??``}};

layout(std140) uniform Palette {
  vec4 u_palette[96];
};
`}var xi=`#define WH_LOCAL_UP 1
`,Si=`  vec4 u_upCenter;    // xyz the point up points away from, in render space, w radius of the base surface
`,Ci=`
#ifdef WH_LOCAL_UP
vec3 localUp(vec3 p) { return normalize(p - u_upCenter.xyz); }
float localHeight(vec3 p) { return length(p - u_upCenter.xyz) - u_upCenter.w; }
mat3 localFrame(vec3 p) {
  vec3 u = localUp(p);
  // Opposite to +y the shortest rotation is not defined: half a turn about x.
  if (u.y < -0.99999) return mat3(1.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, -1.0);
  // k = 1 / (1 + u.y). Below the horizon it is taken as (1 - u.y) / (u.x * u.x + u.z * u.z), the same number for a
  // unit vector: 1 + u.y loses its digits near -y, and the frame would be sheared by a percent there.
  float h = u.x * u.x + u.z * u.z;
  float k = u.y > 0.0 || h == 0.0 ? 1.0 / (1.0 + u.y) : (1.0 - u.y) / h;
  return mat3(1.0 - u.x * u.x * k, -u.x, -u.x * u.z * k, u.x, u.y, u.z, -u.x * u.z * k, -u.z, 1.0 - u.z * u.z * k);
}
#else
vec3 localUp(vec3 p) { return vec3(0.0, 1.0, 0.0); }
float localHeight(vec3 p) { return p.y; }
mat3 localFrame(vec3 p) { return mat3(1.0); }
#endif
`,wi=`uniform vec2 u_whDepthBias;
#define main whMaterialMain
`,Ti=`
#undef main
void main() {
  whMaterialMain();
  // Orthographic views and programs outside the 3D scene (u_camUp.w = 0) keep the depth of the pipeline.
  float d = u_camUp.w > 0.0 ? log2(1.0 + max(1.0 / gl_FragCoord.w, 0.0)) * u_camUp.w : gl_FragCoord.z;
  float slope = max(abs(dFdx(d)), abs(dFdy(d)));
  // 1.2e-7: the smallest step a 32-bit float depth resolves near 1.
  gl_FragDepth = clamp(d + u_whDepthBias.x * slope + u_whDepthBias.y * 1.2e-7, 0.0, 1.0);
}
`,Ei=`
#ifndef WH_PIXEL_SIZE
#define WH_PIXEL_SIZE 1
float detailVisible(float cellM) {
  return 1.0 - smoothstep(0.5, 0.9, u_view.x / cellM);
}
float metresPerPixelAt(vec3 worldPos) {
  return max(u_view.x + u_camRight.w * (dot(worldPos, u_camForward.xyz) - u_camForward.w), 1e-4);
}
float detailVisibleAt(float cellM, vec3 worldPos) {
  return 1.0 - smoothstep(0.5, 0.9, metresPerPixelAt(worldPos) / cellM);
}
#endif
`,Di=`
// Noise from an integer hash. Never from the sine function: it gives different results on different GPUs.
uint hashU(uint x) {
  x ^= x >> 16; x *= 0x7feb352dU;
  x ^= x >> 15; x *= 0x846ca68bU;
  x ^= x >> 16;
  return x;
}
float hash1(uint x) { return float(hashU(x)) * (1.0 / 4294967296.0); }
float hash2(ivec2 p, uint seed) {
  return float(hashU(uint(p.x) * 0x9e3779b1U ^ hashU(uint(p.y) + seed * 0x85ebca6bU))) * (1.0 / 4294967296.0);
}
float hash3(ivec3 p, uint seed) {
  return float(hashU(uint(p.x) * 0x9e3779b1U ^ hashU(uint(p.y) * 0xc2b2ae35U ^ hashU(uint(p.z) + seed)))) * (1.0 / 4294967296.0);
}
// Smooth value noise, 0–1.
float vnoise(vec2 p, uint seed) {
  vec2 f = floor(p);
  ivec2 i = ivec2(f);
  vec2 t = p - f;
  t = t * t * (3.0 - 2.0 * t);
  float a = hash2(i, seed), b = hash2(i + ivec2(1, 0), seed);
  float c = hash2(i + ivec2(0, 1), seed), d = hash2(i + ivec2(1, 1), seed);
  return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
}
float vnoise3(vec3 p, uint seed) {
  vec3 f = floor(p);
  ivec3 i = ivec3(f);
  vec3 t = p - f;
  t = t * t * (3.0 - 2.0 * t);
  float a = mix(hash3(i, seed), hash3(i + ivec3(1, 0, 0), seed), t.x);
  float b = mix(hash3(i + ivec3(0, 1, 0), seed), hash3(i + ivec3(1, 1, 0), seed), t.x);
  float c = mix(hash3(i + ivec3(0, 0, 1), seed), hash3(i + ivec3(1, 0, 1), seed), t.x);
  float d = mix(hash3(i + ivec3(0, 1, 1), seed), hash3(i + ivec3(1, 1, 1), seed), t.x);
  return mix(mix(a, b, t.y), mix(c, d, t.y), t.z);
}
// The pixel size functions (detailVisible, metresPerPixelAt, detailVisibleAt) come with the header now
// (PIXEL_SIZE_GLSL); a source that includes noise without the header still gets them here.
#ifndef WH_PIXEL_SIZE
#define WH_PIXEL_SIZE 1
// How visible a detail of size cellM metres still is: 1 = sharp, 0 = the pattern should vanish.
// Applies to smooth noise: fully visible from two pixels per cell, around one pixel not at all,
// because it would fight with the screen grid and flicker when panning. Patterns with a sharp edge
// (grids, stripes) have a stricter rule of their own.
float detailVisible(float cellM) {
  return 1.0 - smoothstep(0.5, 0.9, u_view.x / cellM);
}
// Size of one screen pixel at a world point, in metres. Constant for an orthographic view, grows with depth in perspective.
float metresPerPixelAt(vec3 worldPos) {
  return max(u_view.x + u_camRight.w * (dot(worldPos, u_camForward.xyz) - u_camForward.w), 1e-4);
}
// detailVisible at a world point: the same rule with the pixel size there, for perspective views.
float detailVisibleAt(float cellM, vec3 worldPos) {
  return 1.0 - smoothstep(0.5, 0.9, metresPerPixelAt(worldPos) / cellM);
}
#endif
`,Oi=`${bi()}
uniform mat4 u_lightRender;
in vec3 a_pos;
void main() {
  gl_Position = u_lightRender * vec4(a_pos, 1.0);
}`,ki=`#version 300 es
precision highp float;
void main() {}`;function Ai(e){return e*24+20}function ji(e){return`  mat4 u_shadowArea[${e}];   // render space to an area: xy 0–1 across the area, z depth 0–1 from the light
  vec4 u_shadowPart[${e}];   // xy where the area starts in the map (uv), z its share of the map edge, w filter radius (uv)
  vec4 u_shadowReach[${e}];  // x reach from the focus (m), y 1 / width of the blend band (1/m), z metres per texel
  vec4 u_shadowFocus;       // xy the focus in the light's plane (along u_shadowRight and u_shadowUp)
  vec4 u_shadowRight;       // xyz the light plane's first axis
  vec4 u_shadowUp;          // xyz the light plane's second axis
  vec4 u_shadowHorizon;     // light horizon texture: uv = xz * zw + xy
  vec4 u_shadowHorizonY;    // x height of code 0, y height span of the codes, z 1 / blend height, w 1 when a texture is set
`}var Mi=`
uniform highp sampler2D u_shadowHorizonMap;

// Share of the light that reaches a point according to area i of the map: 0 shadow, 1 lit.
float whShadowArea(sampler2DShadow map, int i, vec3 worldPos, vec3 n, float normalOffsetTexels) {
  vec4 part = u_shadowPart[i];
  vec3 p = worldPos + n * (u_shadowReach[i].z * normalOffsetTexels);
  vec3 s = (u_shadowArea[i] * vec4(p, 1.0)).xyz;
  if (s.z >= 1.0) return 1.0;
#if WH_SHADOW_AREAS == 1
  // A single area fills the map and wraps around in it; the map repeats, so the filter may cross the seam.
  vec2 uv = s.xy + part.xy;
#else
  // Keep the filter inside this area's part of the map.
  float edge = (1.5 * part.w + u_view.w) / part.z;
  vec2 uv = part.xy + clamp(s.xy, vec2(edge), vec2(1.0 - edge)) * part.z;
#endif
  float sum = 0.0;
  // 4 × 4 queries, each bilinearly compares four texels by itself.
  for (int j = 0; j < 4; j++) {
    for (int k = 0; k < 4; k++) {
      vec2 o = (vec2(float(k), float(j)) - 1.5) * part.w;
      sum += texture(map, vec3(uv + o, s.z));
    }
  }
  return sum * (1.0 / 16.0);
}

// Beyond the reach of the map: what the material knows itself (baked, 1 = lit) times the scene's light horizon, a
// coarse texture of the height below which a point is hidden from the light. Without that texture just baked.
float whShadowFar(vec3 worldPos, float baked) {
  vec4 y = u_shadowHorizonY;
  if (y.w <= 0.0) return baked;
  vec2 uv = worldPos.xz * u_shadowHorizon.zw + u_shadowHorizon.xy;
  if (uv.x <= 0.0 || uv.x >= 1.0 || uv.y <= 0.0 || uv.y >= 1.0) return baked;
  vec2 e = textureLod(u_shadowHorizonMap, uv, 0.0).rg;
  // Code 0: nothing stands between this place and the light, whatever the height of the point (it may lie a little
  // below the lowest height the texture can state).
  if (e.r + e.g <= 0.0) return baked;
  float top =y.x + (e.r * 65280.0 + e.g * 255.0) * (1.0 / 65535.0) * y.y;
  // Lit from the horizon up, fully hidden one blend height below it.
  float t = clamp((worldPos.y - top) * y.z + 1.0, 0.0, 1.0);
  return baked * t * t * (3.0 - 2.0 * t);
}

// whShadowArea with a hard edge: one depth comparison at the centre of the map texel under the point, no softening.
float whShadowAreaSharp(sampler2DShadow map, int i, vec3 worldPos, vec3 n, float normalOffsetTexels) {
  vec4 part = u_shadowPart[i];
  vec3 p = worldPos + n * (u_shadowReach[i].z * normalOffsetTexels);
  vec3 s = (u_shadowArea[i] * vec4(p, 1.0)).xyz;
  if (s.z >= 1.0) return 1.0;
#if WH_SHADOW_AREAS == 1
  vec2 uv = s.xy + part.xy;
#else
  float edge = u_view.w / part.z;
  vec2 uv = part.xy + clamp(s.xy, vec2(edge), vec2(1.0 - edge)) * part.z;
#endif
  uv = (floor(uv / u_view.w) + 0.5) * u_view.w;
  return texture(map, vec3(uv, s.z));
}

// Share of the light that reaches a point, 0–1. The finest area whose reach around the focus holds the point answers;
// in the outer band of its reach it blends into the next area, the last one into the far term. The reach is measured
// from the focus of the frame, not from where the area happens to lie, so nothing jumps when an area moves.
float whShadow(sampler2DShadow map, vec3 worldPos, vec3 n, float normalOffsetTexels, float baked) {
  vec2 lp = vec2(dot(u_shadowRight.xyz, worldPos), dot(u_shadowUp.xyz, worldPos)) - u_shadowFocus.xy;
  float d = max(abs(lp.x), abs(lp.y));
  for (int i = 0; i < WH_SHADOW_AREAS; i++) {
    vec4 reach = u_shadowReach[i];
    if (d >= reach.x) continue;
    float lit = whShadowArea(map, i, worldPos, n, normalOffsetTexels);
    // 0 well inside the reach, 1 at its end.
    float t = clamp(1.0 - (reach.x - d) * reach.y, 0.0, 1.0);
    if (t <= 0.0) return lit;
    t = t * t * (3.0 - 2.0 * t);
    float next;
#if WH_SHADOW_AREAS > 1
    // The index stays inside the arrays also in the branch that is never taken (a compiler may unroll the loop).
    if (i + 1 < WH_SHADOW_AREAS) next = whShadowArea(map, min(i + 1, WH_SHADOW_AREAS - 1), worldPos, n, normalOffsetTexels);
    else
#endif
    next = whShadowFar(worldPos, baked);
    return mix(lit, next, t);
  }
  return whShadowFar(worldPos, baked);
}

// whShadow with a hard edge: the same choice and blending of areas, each area asked by whShadowAreaSharp.
float whShadowSharp(sampler2DShadow map, vec3 worldPos, vec3 n, float normalOffsetTexels, float baked) {
  vec2 lp = vec2(dot(u_shadowRight.xyz, worldPos), dot(u_shadowUp.xyz, worldPos)) - u_shadowFocus.xy;
  float d = max(abs(lp.x), abs(lp.y));
  for (int i = 0; i < WH_SHADOW_AREAS; i++) {
    vec4 reach = u_shadowReach[i];
    if (d >= reach.x) continue;
    float lit = whShadowAreaSharp(map, i, worldPos, n, normalOffsetTexels);
    float t = clamp(1.0 - (reach.x - d) * reach.y, 0.0, 1.0);
    if (t <= 0.0) return lit;
    t = t * t * (3.0 - 2.0 * t);
    float next;
#if WH_SHADOW_AREAS > 1
    if (i + 1 < WH_SHADOW_AREAS) next = whShadowAreaSharp(map, min(i + 1, WH_SHADOW_AREAS - 1), worldPos, n, normalOffsetTexels);
    else
#endif
    next = whShadowFar(worldPos, baked);
    return mix(lit, next, t);
  }
  return whShadowFar(worldPos, baked);
}
`;function Ni(){return{blockM:0,bx:0,by:0,startX:0,startY:0}}function Pi(e){let t=[-e[0],-e[1],-e[2]],r=i(n(t,Math.abs(t[1])<.99?[0,1,0]:[0,0,1]));return{right:r,up:n(r,t),forward:t}}function Fi(e,t){return Math.round(e/t)-8}function Ii(e,t,n){return Math.abs(e/t-(n+8))<=.75}var Li=(e,t)=>(e%t+t)%t;function Ri(e,t,n){if(t<=e)return[];let r=Li(n+e,16),i=16-r;return t-e<=i?[[e,t,r]]:[[e,e+i,r],[e+i,t,0]]}function zi(e,t,n,r,i){let a=[];for(let[o,s,c]of Ri(e,t,i.startX))for(let[e,t,l]of Ri(n,r,i.startY))a.push({x0:o,y0:e,x1:s,y1:t,tx:c,ty:l});return a}function Bi(e,t,n,r,i,a){if(i||e.blockM!==r)return e.blockM=r,e.bx=Fi(t,r),e.by=Fi(n,r),e.startX=0,e.startY=0,zi(0,16,0,16,e);let o=Ii(t,r,e.bx)?e.bx:Fi(t,r),s=Ii(n,r,e.by)?e.by:Fi(n,r),c=o-e.bx,l=s-e.by;if(c===0&&l===0)return[];if(e.bx=o,e.by=s,!a||Math.abs(c)>=16||Math.abs(l)>=16)return e.startX=0,e.startY=0,zi(0,16,0,16,e);e.startX=Li(e.startX+c,16),e.startY=Li(e.startY+l,16);let u=[],d=c<0?-c:0,f=c>0?16-c:16;return c>0?u.push(...zi(16-c,16,0,16,e)):c<0&&u.push(...zi(0,-c,0,16,e)),l>0?u.push(...zi(d,f,16-l,16,e)):l<0&&u.push(...zi(d,f,0,-l,e)),u}function Vi(e,t,n,r,i){let a=e=>{let i=0;for(;i<n&&t*2**(i/2)*7*r<e;)i++;return i},o=a(e);if(i<0||i<o)return o;let s=a(e*1.3);return i>s?s:i}var Hi=class{name;attribs;state;programs=new Map;constructor(e,t,n=e=>e){this.name=t.name,this.attribs=t.attribs,this.state=t.state??{};for(let[r,i]of Object.entries(t.passes)){let a=i===`depth`?{vs:Oi,fs:ki}:{vs:n(i.vs,r),fs:n(i.fs,r)};this.programs.set(r,e.program(`${t.name} ${r}`,a.vs,a.fs,t.attribs))}}get passes(){return[...this.programs.keys()]}program(e){return this.programs.get(e)??(e===`data`?this.programs.get(`color`)??null:null)}},Ui=4.5,Wi=512,Gi=16,Ki=[2,4],qi=.15,Ji=.25,Yi=16,Xi={depthTest:!0,depthFunc:`less`,depthWrite:!0,cullBack:!0,cull:`back`,blend:null,alphaToCoverage:!1,polygonOffset:null},Zi={...Xi,polygonOffset:Ki},Qi=class{device;layers=[];beforeFrame=[];bounds=null;worldOrigin=[0,0,0];background=[0,0,0];lightDirection=[0,1,0];shadowKeyExtra=``;mode=`color`;frameSlots;includes=new Map;lastStats={triangles:0,drawCalls:0,shadowTriangles:0,shadowDrawCalls:0,dynamicShadowTriangles:0,dynamicShadowDrawCalls:0,cpuMs:0,shadowMapPx:0,instancesVisible:0,shadowUpdates:0};depthMode;depthNearM;probe=null;shadowSoftnessM;shadowMapSize;shadowDistanceM;frameBlock;frameData;shadowTarget;shadowKey=``;lightRender=new Float32Array(16);lightSample=new Float32Array(16);shadowPx=0;shadowTexelM=1;instancesVisible=0;lightFit=null;shadowMode;shadowHorizon=null;areaState=null;radialUp;staticShadow=null;hadDynamic=!1;singleKeyValid=!1;singleKeyView=``;singleKeyLight=new Float64Array(3);singleKeyExtra=``;staticVisible=0;lightVolume=null;viewVolume=null;viewVolumeKey=``;proj={viewProj:new Float32Array(16),logScale:0};camAxes=l();rays=u();sceneCenter=[0,0,0];singleRender=new Float32Array(16);singleSample=new Float32Array(16);countMain={tris:0,calls:0};countShadow={tris:0,calls:0};countDynamic={tris:0,calls:0};ctx;counting=this.countMain;constructor(e,t){this.device=e,this.shadowSoftnessM=t.shadowSoftnessM??.9,this.shadowMapSize=t.shadowMapSize??4096,this.shadowDistanceM=t.shadowDistanceM??1/0,this.depthMode=t.depth===void 0?e.depthMode:e.setDepthMode(t.depth),t.samples!==void 0&&e.setMainSamples(t.samples),t.readableDepth&&e.setReadableDepth(!0),this.depthNearM=t.depthNearM??.1;let n=t.frameSlots??{afterLight:0,afterView:0,glsl:{afterLight:``,afterView:``}};this.shadowMode=t.shadows?.mode??`single`,this.radialUp=t.radialUp??null;let r=this.radialUp?xi:``,i=this.radialUp?Si:``,a=this.radialUp?4:0;if(this.shadowMode===`single`)this.includes.set(`header`,bi(n.glsl,this.depthMode,this.radialUp?{defines:r,frameTail:i}:{})+Ci+Ei),this.frameData=new Float32Array(yi(n)+a);else{let o=t.shadows??{},s=this.shadowMode===`snapped`?1:Math.max(2,Math.min(4,Math.round(o.cascades??4))),c=Math.max(16,Math.floor(this.shadowMapSize/(s===1?1:2)/16)*16);this.shadowMapSize=s===1?c:c*2;let l=o.reachM??(this.shadowMode===`snapped`?2048:Number.isFinite(this.shadowDistanceM)?this.shadowDistanceM:4e3),u=Math.min(Math.max(1,o.firstReachM??48),l);this.areaState={mode:this.shadowMode,areas:Array.from({length:s},Ni),px:c,blockPx:c/16,reachM:l,firstReachM:u,step:-1,viewKey:``,tail:new Float32Array(Ai(s)),noHorizon:e.pixelTexture([0,0,0,0])};let d=bi(n.glsl,this.depthMode,{defines:`#define WH_SHADOW_AREAS ${s}\n`+r,frameTail:ji(s)+i});this.includes.set(`header`,d+Ci+Ei+Mi),this.frameData=new Float32Array(yi(n)+Ai(s)+a),e.fixSampler(`u_shadowHorizonMap`,15)}this.includes.set(`noise`,Di),this.frameSlots={afterLight:new Float32Array(n.afterLight*4),afterView:new Float32Array(n.afterView*4)},this.frameBlock=e.uniformBlock(Oe.Frame,this.frameData,!0),e.uniformBlock(Oe.Palette,t.palette,!1),this.shadowTarget=e.depthTarget(this.shadowMapSize,this.areaState?.areas.length===1),e.onRestored(()=>this.invalidateShadows());let o=this;this.ctx={device:e,pass:`color`,view:null,lightRender:this.lightRender,count(e){o.counting.tris+=e,o.counting.calls++}}}get shadowMapEdgePx(){return this.shadowMapSize}get projection(){return this.proj}upCenter(){let e=this.radialUp;return e?[e.center[0]-this.worldOrigin[0],e.center[1]-this.worldOrigin[1],e.center[2]-this.worldOrigin[2]]:null}resolve(e,t=`main`){let n=t=>e.replace(/^#include <([\w-]+)>\n/gm,(e,n)=>{let r=this.includes.get(n);if(r===void 0)throw Error(`Unknown shader include <${n}>`);return n===`header`?r+t:r}),r=n(``);return this.depthMode!==`logarithmic`||t!==`main`||/\bgl_Position\b/.test(r)||!/^#include <header>\n/m.test(e)?r:n(wi)+Ti}material(e){return new Hi(this.device,e,(e,t)=>this.resolve(e,t===`shadow`?`other`:`main`))}createMesh(e,t,n){return this.device.createMesh(e,t.attribs,n)}createInstances(e){return this.device.createInstances(e)}createTexture(e){return this.device.createTexture(e)}bake(e){return this.device.bake(e.name,this.resolve(e.fs,`other`),e.width,e.height,e.inputs,e.uniforms??{},e.targets)}add(e){this.layers.push(e)}addBefore(e,t){let n=this.layers.indexOf(t);n<0?this.layers.push(e):this.layers.splice(n,0,e)}remove(e){let t=this.layers.indexOf(e);t>=0&&this.layers.splice(t,1)}invalidateShadows(){this.shadowKey=``,this.singleKeyValid=!1}setShadowFit(e){e.softnessM!==void 0&&e.softnessM>0&&(this.shadowSoftnessM=e.softnessM),e.distanceM!==void 0&&e.distanceM>0&&(this.shadowDistanceM=e.distanceM),this.invalidateShadows()}get shadowFit(){return{softnessM:this.shadowSoftnessM,distanceM:this.shadowDistanceM}}fitLight(e,r,a){let o=[-a[0],-a[1],-a[2]],s=i(n(o,[0,1,0])),c=n(s,o),l={right:s,up:c,forward:o},u=1/0,d=-1/0,f=1/0,p=-1/0,m=e.pixelGrowth>0;for(let n of e.cornerRays(this.rays)){let e=m?Math.min(ra(n.origin,r),this.shadowDistanceM):0;for(let i=0;i<(m?3:2);i++){let a=i===0?r.min[1]:i===1?r.max[1]:NaN,o=(a-n.origin[1])/n.dir[1];m&&(o=Number.isNaN(a)?0:o>=0&&o<=e?o:e);let l=[n.origin[0]+n.dir[0]*o,m?n.origin[1]+n.dir[1]*o:a,n.origin[2]+n.dir[2]*o],h=t(s,l),g=t(c,l);u=Math.min(u,h),d=Math.max(d,h),f=Math.min(f,g),p=Math.max(p,g)}}let h=1/0,g=-1/0,_=1/0,v=-1/0,y=1/0,b=-1/0;for(let e=0;e<8;e++){let n=[e&1?r.max[0]:r.min[0],e&2?r.max[1]:r.min[1],e&4?r.max[2]:r.min[2]],i=t(s,n),a=t(c,n),l=t(o,n);h=Math.min(h,i),g=Math.max(g,i),_=Math.min(_,a),v=Math.max(v,a),y=Math.min(y,l),b=Math.max(b,l)}let x=Math.max(u,h),S=Math.min(d,g),C=Math.max(f,_),w=Math.min(p,v),T=Math.max(S-x,w-C,Gi),E=Math.ceil(T/Gi)*Gi+Gi,D=Math.ceil(E/(this.shadowSoftnessM/Ui));this.shadowPx=Math.max(Wi,Math.min(this.shadowMapSize,D));let O=E/this.shadowPx;this.shadowTexelM=O;let k=this.worldOrigin,A=k[0]===0&&k[1]===0&&k[2]===0,j=A?0:t(s,k),M=A?0:t(c,k);return{frame:l,cx:Math.round(((x+S)/2+j)/O)*O-j,cy:Math.round(((C+w)/2+M)/O)*O-M,cz:(y+b)/2,half:E/2,halfD:(b-y)/2+10}}viewFootprint(e,n,r,i){let{right:a,up:o,forward:s}=r,c=1/0,l=-1/0,u=1/0,d=-1/0,f=e.pixelGrowth>0,p=e.cornerRays(this.rays);for(let e of p){let r=f?Math.min(ra(e.origin,n),i):0;for(let i=0;i<(f?3:2);i++){let s=i===0?n.min[1]:i===1?n.max[1]:NaN,p=(s-e.origin[1])/e.dir[1];if(f)p=Number.isNaN(s)?0:p>=0&&p<=r?p:r;else if(!Number.isFinite(p))continue;let m=[e.origin[0]+e.dir[0]*p,f?e.origin[1]+e.dir[1]*p:s,e.origin[2]+e.dir[2]*p],h=t(a,m),g=t(o,m);c=Math.min(c,h),l=Math.max(l,h),u=Math.min(u,g),d=Math.max(d,g)}}let m=1/0,h=-1/0,g=1/0,_=-1/0,v=1/0,y=-1/0;for(let e=0;e<8;e++){let r=[e&1?n.max[0]:n.min[0],e&2?n.max[1]:n.min[1],e&4?n.max[2]:n.min[2]],i=t(a,r),c=t(o,r),l=t(s,r);m=Math.min(m,i),h=Math.max(h,i),g=Math.min(g,c),_=Math.max(_,c),v=Math.min(v,l),y=Math.max(y,l)}let b=f?[p[0].origin[0],p[0].origin[1],p[0].origin[2]]:null;return!(c<=l)||!(u<=d)?{minX:m,maxX:h,minY:g,maxY:_,minZ:v,maxZ:y,eye:b}:Math.max(c,m)<=Math.min(l,h)&&Math.max(u,g)<=Math.min(d,_)?{minX:Math.max(c,m),maxX:Math.min(l,h),minY:Math.max(u,g),maxY:Math.min(d,_),minZ:v,maxZ:y,eye:b}:{minX:c,maxX:l,minY:u,maxY:d,minZ:v,maxZ:y,eye:b}}planAreas(e,n,r,a){let o=`${a[0].toFixed(4)},${a[1].toFixed(4)},${a[2].toFixed(4)}`,[s,l,u]=o.split(`,`).map(Number),d=Pi(s===0&&l===0&&u===0?a:i([s,l,u])),f=this.worldOrigin,p=t(d.right,f),m=t(d.up,f),h=t(d.forward,f),g=this.viewFootprint(n,r,d,e.reachM),_=Yi,v=Math.floor((g.minZ+h)/_)*_-10,y=Math.ceil((g.maxZ+h)/_)*_+10,b=`${o}|${this.shadowKeyExtra}|${v},${y}`,x=b!==this.shadowKey;for(let e of this.layers)e.cullStale?.()&&(x=!0);let S=e.areas.length,C=(g.minX+g.maxX)/2,w=(g.minY+g.maxY)/2,T=[];if(e.mode===`snapped`){let n=e.px*(this.shadowSoftnessM/Ui)/16,r=Math.max(0,Math.floor(2*Math.log2(e.reachM/(n*7)))),i=Math.max(g.maxX-g.minX,g.maxY-g.minY)/2,a=.75;e.step=Vi(i,n,r,a,x&&e.step>=0?-1:e.step);let o=n*2**(e.step/2);g.eye&&i>o*7*a&&(C=t(d.right,g.eye),w=t(d.up,g.eye)),T.push(o)}else{g.eye&&(C=t(d.right,g.eye),w=t(d.up,g.eye));for(let t=0;t<S;t++)T.push(e.firstReachM*(e.reachM/e.firstReachM)**(t/(S-1))/7)}let E=[];for(let t=0;t<S;t++){let n=Bi(e.areas[t],C+p,w+m,T[t],x,S===1);n.length>0&&E.push({area:t,rects:n})}let D=(v+y)/2-h,O=(y-v)/2,k=e.tail,A=this.shadowMapSize;for(let t=0;t<S;t++){let n=e.areas[t],r=n.blockM*16,i=c(d,n.bx*n.blockM+r/2-p,n.by*n.blockM+r/2-m,D,r/2,r/2,O);t===0&&(this.lightSample=i.slice());for(let e=0;e<16;e+=4)for(let t=0;t<3;t++)i[e+t]=i[e+t]*.5;i[12]+=.5,i[13]+=.5,i[14]+=.5,k.set(i,t*16);let a=r/e.px,o=Math.min(Math.max(.6,(this.shadowSoftnessM/a-1)/3),1.3),s=S===1?0:t%2*e.px,l=S===1?0:Math.floor(t/2)*e.px;k.set([(s+n.startX*e.blockPx)/A,(l+n.startY*e.blockPx)/A,e.px/A,o/A],S*16+t*4);let u=n.blockM*7,f=(t===S-1?Ji:qi)*u;k.set([u,1/f,a,0],S*20+t*4),t===0&&(this.shadowTexelM=a)}let j=S*24;k.set([C,w,0,0],j),k.set([d.right[0],d.right[1],d.right[2],0],j+4),k.set([d.up[0],d.up[1],d.up[2],0],j+8);let M=this.shadowHorizon;M?(k.set([(f[0]-M.originX)/M.sizeX,(f[2]-M.originZ)/M.sizeZ,1/M.sizeX,1/M.sizeZ],j+12),k.set([M.baseY-f[1],M.rangeM,1/Math.max(M.blendM??2,.001),1],j+16)):k.fill(0,j+12,j+20),this.shadowPx=A;let N=n.key();return{frame:d,ox:p,oy:m,cz:D,halfD:O,draws:E,viewStale:x||E.length>0||N!==e.viewKey,key:b,viewKey:N}}drawAreas(e,t,n,r){let i=this.device,a=e.areas.length,o=0;t.draws.length>0&&i.target(this.shadowTarget);for(let s of t.draws){let l=e.areas[s.area],u=a===1?0:s.area%2*e.px,d=a===1?0:Math.floor(s.area/2)*e.px;for(let a of s.rects){let s=(a.x1-a.x0)*l.blockM/2,f=(a.y1-a.y0)*l.blockM/2,p=(l.bx+a.x0)*l.blockM+s-t.ox,m=(l.by+a.y0)*l.blockM+f-t.oy;this.lightRender=c(t.frame,p,m,t.cz,s,f,t.halfD);let h={kind:`box`,axes:t.frame,cx:p,cy:m,halfW:s,halfH:f};for(let e of this.layers)e.cull?.(h,`shadow`,n);let g=u+a.tx*e.blockPx,_=d+a.ty*e.blockPx,v=(a.x1-a.x0)*e.blockPx,y=(a.y1-a.y0)*e.blockPx;i.clearDepthRect(g,_,v,y),i.viewport(g,_,v,y),this.drawPass(`shadow`,n,r),o++}}if(this.shadowKey=t.key,t.viewStale){let r=n.cullVolume(),i=0;for(let e of this.layers)i+=e.cull?.(r,`view`,n)??0;this.instancesVisible=i,e.viewKey=t.viewKey}return o}drawPass(e,t,n,r=`all`){let i=this.device,a=e===`shadow`?Zi:Xi,o=this.ctx;o.pass=e,o.view=t,o.lightRender=this.lightRender,this.counting=n;let s=this.probe;for(let e of this.layers)(r===`all`||e.shadowCasters===`dynamic`==(r===`dynamic`))&&(s?this.drawProbed(s,e,o,a,n):(i.setState(a),e.draw(o)));i.setState(a)}drawProbed(e,t,n,r,i){if(e.draws&&!e.draws(t,n.pass))return;let a=i.tris,o=i.calls;this.device.setState(r),t.draw(n),e.drawn?.(t,n.pass,i.tris-a,i.calls-o)}render(e){let t=this.device;if(t.lost)return this.lastStats;let n=performance.now();for(let t of this.beforeFrame)t(e);let r=this.bounds,i=this.background;if(t.setState(Xi,!0),!r)return t.target(null),t.viewport(0,0,e.width,e.height),t.clear(i,!0),t.present(),this.lastStats;let a=this.lightDirection,o=this.shadowMapSize,s=this.sceneCenter;s[0]=(r.min[0]+r.max[0])/2,s[1]=(r.min[1]+r.max[1])/2,s[2]=(r.min[2]+r.max[2])/2;let l=Math.hypot(r.max[0]-r.min[0],r.max[1]-r.min[1],r.max[2]-r.min[2])/2,u=f(e,this.depthMode,s,l+10,this.depthNearM,this.proj),d=u.viewProj,p=!1,m=!1;for(let e of this.layers)e.shadowCasters===`dynamic`&&(p=!0,e.shadowDirty?.()&&(m=!0),e.cullStale?.()&&(m=!0));let h=this.areaState;h&&m&&(this.shadowKey=``);let g=h?this.planAreas(h,e,r,a):null,_=!g&&!this.singleKeyHolds(e,a);if(!g&&!_)for(let e of this.layers)e.shadowCasters!==`dynamic`&&e.cullStale?.()&&(_=!0);if(!g&&p!==this.hadDynamic&&(_=!0),this.hadDynamic=p,_){let t=this.fitLight(e,r,a);this.lightRender=c(t.frame,t.cx,t.cy,t.cz,t.half,t.half,t.halfD,this.singleRender);let n=this.shadowPx/o,i=this.singleSample;i.set(this.lightRender);for(let e=0;e<16;e+=4)i[e]=i[e]*n,i[e+1]=i[e+1]*n;i[12]+=n-1,i[13]+=n-1,this.lightSample=i,this.lightFit=t,this.lightVolume={kind:`box`,axes:t.frame,cx:t.cx,cy:t.cy,halfW:t.half,halfH:t.half}}let v=this.frameData,y=e.axes(this.camAxes);v.set(d,0),v.set(this.lightSample,16),v[32]=a[0],v[33]=a[1],v[34]=a[2],v[35]=this.shadowPx/o,v.set(this.frameSlots.afterLight,36);let b=36+this.frameSlots.afterLight.length,x=Math.max(.6,(this.shadowSoftnessM/this.shadowTexelM-1)/3);na(v,b,e.metresPerPixel,this.shadowTexelM,Math.min(x,1.3),1/o),na(v,b+4,y.right[0],y.right[1],y.right[2],e.pixelGrowth),na(v,b+8,y.up[0],y.up[1],y.up[2],u.logScale),na(v,b+12,y.forward[0],y.forward[1],y.forward[2],e.refDepth),b+=16,v.set(this.frameSlots.afterView,b),h&&v.set(h.tail,b+this.frameSlots.afterView.length);let S=this.radialUp;if(S){let e=this.worldOrigin;na(v,v.length-4,S.center[0]-e[0],S.center[1]-e[1],S.center[2]-e[2],S.radiusM)}this.frameBlock.update(v);let C=this.probe;for(let n of this.layers)n.prepare&&(!C?.draws||C.draws(n,`prepare`))&&n.prepare(t,e);t.setState(Xi);let w=this.countShadow,T=this.countDynamic;w.tris=w.calls=0,T.tris=T.calls=0;let E=0,D=this.lightVolume;if(!g&&this.lightFit&&D&&(_||p&&m)){let n=_;for(let t of this.layers)(n||t.shadowCasters===`dynamic`)&&t.cull?.(D,`shadow`,e);if(!p)t.target(this.shadowTarget),t.viewport(0,0,o,o),t.clear(null,!0),t.viewport(0,0,this.shadowPx,this.shadowPx),this.drawPass(`shadow`,e,w);else{let r=this.staticShadow??=t.depthTarget(o);n&&(t.target(r),t.viewport(0,0,o,o),t.clear(null,!0),t.viewport(0,0,this.shadowPx,this.shadowPx),this.drawPass(`shadow`,e,w,`static`)),t.target(this.shadowTarget),n&&(t.viewport(0,0,o,o),t.clear(null,!0)),t.copyDepth(r,this.shadowTarget,this.shadowPx),t.viewport(0,0,this.shadowPx,this.shadowPx),this.drawPass(`shadow`,e,T,`dynamic`),w.tris+=T.tris,w.calls+=T.calls}n&&this.keepSingleKey(e,a);let r=e.key();(n||!this.viewVolume||r!==this.viewVolumeKey)&&(this.viewVolume=e.cullVolume(),this.viewVolumeKey=r);let i=this.viewVolume,s=0,c=0;for(let t of this.layers)t.shadowCasters===`dynamic`?c+=t.cull?.(i,`view`,e)??0:n&&(s+=t.cull?.(i,`view`,e)??0);n&&(this.staticVisible=s),this.instancesVisible=this.staticVisible+c,E=1}h&&g&&(E=this.drawAreas(h,g,e,w));let O=this.countMain;return O.tris=O.calls=0,t.target(null),t.viewport(0,0,e.width,e.height),t.clear(i,!0),h&&t.texture(15,this.shadowHorizon?.texture??h.noHorizon),t.texture(0,this.shadowTarget.texture),this.mode===`data`?this.drawPass(`data`,e,O):(this.drawPass(`color`,e,O),this.drawPass(`overlay`,e,O)),t.unbindMesh(),t.present(),this.lastStats={triangles:O.tris,drawCalls:O.calls,shadowTriangles:w.tris,shadowDrawCalls:w.calls,dynamicShadowTriangles:T.tris,dynamicShadowDrawCalls:T.calls,cpuMs:performance.now()-n,shadowMapPx:this.shadowPx,instancesVisible:this.instancesVisible,shadowUpdates:E},this.lastStats}singleKeyHolds(e,t){if(!this.singleKeyValid)return!1;let n=this.singleKeyLight;return Math.round(t[0]*1e4)!==n[0]||Math.round(t[1]*1e4)!==n[1]||Math.round(t[2]*1e4)!==n[2]?!1:this.shadowKeyExtra===this.singleKeyExtra&&e.key()===this.singleKeyView}keepSingleKey(e,t){this.singleKeyValid=!0,this.singleKeyView=e.key(),this.singleKeyLight[0]=Math.round(t[0]*1e4),this.singleKeyLight[1]=Math.round(t[1]*1e4),this.singleKeyLight[2]=Math.round(t[2]*1e4),this.singleKeyExtra=this.shadowKeyExtra}benchmark(e,t,n){this.render(e),this.device.finish();let r=performance.now();for(let r=0;r<t;r++)n?.(r),this.render(e),this.device.flush();return this.device.finish(),(performance.now()-r)/t}};function $i(e,t,n,r){e.pass===`shadow`?t.mat4(`u_lightRender`,e.lightRender):t.int(`u_shadowMap`,0);let i=1;for(let n in r)e.device.texture(i,r[n]),t.int(n,i++);for(let e in n)t.set(e,n[e])}var ea=class{name;material;mesh;passes;uniforms;textures;state;bind;constructor(e){this.material=e.material,this.mesh=e.mesh??null,this.passes=new Set(e.passes??e.material.passes),this.state={...e.material.state,...e.state},this.uniforms=e.uniforms??{},this.textures=e.textures??{},this.bind=e.bind,e.name!==void 0&&(this.name=e.name)}draw(e){let t=this.mesh;t&&this.begin(e)&&(e.device.draw(t),e.count(t.triangles))}begin(e){if(!this.passes.has(e.pass))return null;let t=this.material.program(e.pass);if(!t)return null;let n=this.state[e.pass];return n&&e.device.setState(n),e.device.use(t),$i(e,t,this.uniforms,this.textures),this.bind?.(t,e),t}},ta=class{name;material;batches=[];passes;uniforms;state;device;bounds;levelOfDetail;upCenter;scratch=new Float32Array;lodNow=0;constructor(e,t){this.device=e,this.material=t.material,this.bounds=t.bounds,this.levelOfDetail=t.levelOfDetail??(()=>0),this.upCenter=t.upCenter??null,this.passes=new Set(t.passes??t.material.passes),this.uniforms=t.uniforms??{},this.state={},t.name!==void 0&&(this.name=t.name)}cull(e,t){t===`view`&&(this.lodNow=this.levelOfDetail());let n=0;for(let t of this.batches){let r=t.instances.layout.stride/4;this.scratch.length<t.all.length&&(this.scratch=new Float32Array(t.all.length));let i=ia(e,t.all,r,this.bounds,this.scratch,this.upCenter?this.upCenter():null);this.device.writeBuffer(t.instances.buffer,this.scratch,i);let a=i/r;for(let e of t.lods)e.instances=a;n+=a}return n}draw(e){if(!this.passes.has(e.pass))return;let t=this.material.program(e.pass);if(!t)return;let n=this.material.state[e.pass],r=this.state[e.pass];n&&e.device.setState(n),r&&e.device.setState(r),e.device.use(t),$i(e,t,this.uniforms,{});let i=e.pass===`shadow`?0:this.lodNow;for(let n of this.batches){let r=n.lods[Math.min(i,n.lods.length-1)];if(r.instances!==0){for(let e in n.uniforms)t.set(e,n.uniforms[e]);e.device.draw(r),e.count(r.triangles*r.instances)}}}};function na(e,t,n,r,i,a){e[t]=n,e[t+1]=r,e[t+2]=i,e[t+3]=a}function ra(e,t){let n=Math.max(Math.abs(e[0]-t.min[0]),Math.abs(e[0]-t.max[0])),r=Math.max(Math.abs(e[1]-t.min[1]),Math.abs(e[1]-t.max[1])),i=Math.max(Math.abs(e[2]-t.min[2]),Math.abs(e[2]-t.max[2]));return Math.hypot(n,r,i)}function ia(e,t,n,r,i,a=null){if(a)return aa(e,t,n,r,i,a);if(e.kind===`frustum`)return oa(e.planes,t,n,r,i);let{right:o,up:s}=e.axes,{cx:c,cy:l,halfW:u,halfH:d}=e,f=0;for(let e=0;e<t.length;e+=n){let a=t[e+r.position],p=t[e+r.position+1],m=t[e+r.position+2],h=t[e+r.radius],g=t[e+r.height],_=o[0]*a+o[1]*p+o[2]*m-c;if(Math.abs(_+o[1]*g*.5)>u+h+Math.abs(o[1])*g*.5)continue;let v=s[0]*a+s[1]*p+s[2]*m-l,y=v+s[1]*g;if(!(Math.max(v,y)<-d-h||Math.min(v,y)>d+h)){for(let r=0;r<n;r++)i[f+r]=t[e+r];f+=n}}return f}function aa(e,t,n,r,i,a){let o=0;outer:for(let s=0;s<t.length;s+=n){let c=t[s+r.position],l=t[s+r.position+1],u=t[s+r.position+2],d=t[s+r.radius],f=t[s+r.height],p=c-a[0],m=l-a[1],h=u-a[2],g=Math.sqrt(p*p+m*m+h*h),_=g>0?f/g:0;if(p*=_,m=g>0?m*_:f,h*=_,e.kind===`frustum`)for(let[t,n,r,i]of e.planes){let e=t*c+n*l+r*u+i;if(Math.max(e,e+t*p+n*m+r*h)<-d)continue outer}else{let{right:t,up:n}=e.axes,r=t[0]*c+t[1]*l+t[2]*u-e.cx,i=r+t[0]*p+t[1]*m+t[2]*h;if(Math.max(r,i)<-e.halfW-d||Math.min(r,i)>e.halfW+d)continue;let a=n[0]*c+n[1]*l+n[2]*u-e.cy,o=a+n[0]*p+n[1]*m+n[2]*h;if(Math.max(a,o)<-e.halfH-d||Math.min(a,o)>e.halfH+d)continue}for(let e=0;e<n;e++)i[o+e]=t[s+e];o+=n}return o}function oa(e,t,n,r,i){let a=0;outer:for(let o=0;o<t.length;o+=n){let s=t[o+r.position],c=t[o+r.position+1],l=t[o+r.position+2],u=t[o+r.radius],d=t[o+r.height];for(let[t,n,r,i]of e){let e=t*s+n*c+r*l+i;if(Math.max(e,e+n*d)<-u)continue outer}for(let e=0;e<n;e++)i[a+e]=t[o+e];a+=n}return a}var sa=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ca=e=>Number.isInteger(e)?`${e}.0`:`${e}`,la=`
const vec3 WH_GRADIENTS[12] = vec3[12](${he.map(e=>`vec3(${e.map(ca).join(`, `)})`).join(`, `)});
uint whCellHash(ivec3 p, uint seed) {
  return hashU(uint(p.x) * 0x9e3779b1U ^ hashU(uint(p.y) * 0xc2b2ae35U ^ hashU(uint(p.z) + seed)));
}
uint whOctaveSeed(uint seed, int k) { return hashU(seed + uint(k) * 0x68e31da4U); }
// 1 at a feature point, 0 one cell or more away; p in cells, periodic over period cells.
float worleyTile(vec3 p, int period, uint seed) {
  vec3 c = floor(p);
  vec3 fr = p - c;
  ivec3 ic = ivec3(c);
  float best = 1e9;
  for (int dz = -1; dz <= 1; dz++) {
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        ivec3 n = ic + ivec3(dx, dy, dz);
        uint h = whCellHash((n + period) % period, seed);
        vec3 e = vec3(float(dx), float(dy), float(dz)) + vec3(float(h & 1023U), float((h >> 10) & 1023U), float((h >> 20) & 1023U)) * (1.0 / 1024.0) - fr;
        best = min(best, dot(e, e));
      }
    }
  }
  return 1.0 - min(sqrt(best), 1.0);
}
float whGradDot(ivec3 i, vec3 d, int period, uint seed) {
  return dot(WH_GRADIENTS[int(whCellHash(i % period, seed) % 12U)], d);
}
// About -1 … 1; p in cells (not negative), periodic over period cells.
float perlinTile(vec3 p, int period, uint seed) {
  vec3 c = floor(p);
  ivec3 i = ivec3(c);
  vec3 x = p - c;
  vec3 u = x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
  float x0 = mix(whGradDot(i, x, period, seed), whGradDot(i + ivec3(1, 0, 0), x - vec3(1.0, 0.0, 0.0), period, seed), u.x);
  float x1 = mix(whGradDot(i + ivec3(0, 1, 0), x - vec3(0.0, 1.0, 0.0), period, seed), whGradDot(i + ivec3(1, 1, 0), x - vec3(1.0, 1.0, 0.0), period, seed), u.x);
  float x2 = mix(whGradDot(i + ivec3(0, 0, 1), x - vec3(0.0, 0.0, 1.0), period, seed), whGradDot(i + ivec3(1, 0, 1), x - vec3(1.0, 0.0, 1.0), period, seed), u.x);
  float x3 = mix(whGradDot(i + ivec3(0, 1, 1), x - vec3(0.0, 1.0, 1.0), period, seed), whGradDot(i + ivec3(1, 1, 1), x - vec3(1.0, 1.0, 1.0), period, seed), u.x);
  return mix(mix(x0, x1, u.y), mix(x2, x3, u.y), u.z);
}
`;function ua(e,t,n){let[r,i,a]=me.map(ca),o=(e,t,n)=>`worleyTile(u * ${ca(e)}, ${e}, whOctaveSeed(SEED, ${n+t}))`,s=e===`shape`?`  float n = 0.0;
${Array.from({length:t.perlinOctaves},(e,n)=>`  n += ${ca(.5**n)} * perlinTile(u * ${ca(t.perlinCells<<n)}, ${t.perlinCells<<n}, whOctaveSeed(SEED, ${16+n}));`).join(`
`)}
  float perlin = clamp(0.5 + 0.9 * (n / ${ca(Array.from({length:t.perlinOctaves},(e,t)=>.5**t).reduce((e,t)=>e+t,0))}), 0.0, 1.0);
  float w0 = ${o(t.worleyCells,0,0)};
  float w1 = ${o(t.worleyCells*2,1,0)};
  float w2 = ${o(t.worleyCells*4,2,0)};
  float w3 = ${o(t.worleyCells*8,3,0)};
  float dilate = ${r} * w0 + ${i} * w1 + ${a} * w2;
  float erode = ${r} * w1 + ${i} * w2 + ${a} * w3;
  float pw = dilate + perlin * (1.0 - dilate);
  float raw = (pw + 1.0 - erode) / (2.0 - erode);
  float v = clamp((raw - ${ca(t.low)}) / ${ca(1-t.low)}, 0.0, 1.0);`:`  float v = ${r} * ${o(t.worleyCells,0,32)} + ${i} * ${o(t.worleyCells*2,1,32)} + ${a} * ${o(t.worleyCells*4,2,32)};`;return`#version 300 es
precision highp float;
precision highp int;
#define WH_PIXEL_SIZE 1
${Di}
${la}
const uint SEED = ${n>>>0}U;
uniform int u_layer;
out vec4 o_value;
void main() {
  vec3 u = vec3(gl_FragCoord.xy, float(u_layer) + 0.5) * ${ca(1/t.size)};
${s}
  o_value = vec4(v, v, v, 1.0);
}`}var da=class{name=`noise-volumes`;seed;shape;detail;layersPerStep;programs;made=0;unlisten;device;constructor(e,t={}){this.device=e,this.seed=(t.seed??0)>>>0;let n=fe,r=pe;this.layersPerStep=Math.max(1,t.layersPerStep??n.size+r.size),this.shape=e.volumeTarget(n.size,n.size,n.size,`r8`),this.detail=e.volumeTarget(r.size,r.size,r.size,`r8`),this.programs=[e.program(`noise volume shape`,sa,ua(`shape`,n,this.seed)),e.program(`noise volume detail`,sa,ua(`detail`,r,this.seed))],this.unlisten=e.onRestored(()=>this.made=0)}get layers(){return fe.size+pe.size}get ready(){return this.made>=this.layers&&this.shape!==null&&this.detail!==null}step(e=this.layersPerStep){let t=fe.size;for(let n=0;n<e&&this.made<this.layers;n++,this.made++){let e=this.made<t,n=e?this.shape:this.detail;n&&this.device.fillLayer(n,e?this.made:this.made-t,this.programs[+!e],{u_layer:{int:e?this.made:this.made-t}})}return this.ready}bind(e,t,n){e.volumeTexture(t,this.shape),e.volumeTexture(n,this.detail)}prepare(e,t){this.made<this.layers&&this.programs[0].isComplete()&&this.programs[1].isComplete()&&this.step()}draw(e){}dispose(){this.unlisten(),this.shape&&this.device.deleteLayeredTarget(this.shape),this.detail&&this.device.deleteLayeredTarget(this.detail)}},fa=class{env;block;frame=null;background;slotValues=new Map;constructor(e,t,n){let r=n.block;if(e.frameSlots.afterLight.length!==r.afterLight*4||e.frameSlots.afterView.length!==r.afterView*4)throw Error(`The renderer was created with other frame slots than this block (frameSlots: block)`);this.env=t,this.block=r,this.background=n.background;let i=r.slots.some(e=>e.name===Fn),a=r.slots.some(e=>e.name===Hn),o={cloudField:i,cloudShadow:a};e.includes.set(`lighting`,i||a?hn(o):gn),e.includes.set(`shadow`,i||a?pn(o):mn),a&&e.device.fixSampler(`u_cloudShadow`,12),e.includes.set(`sky`,Pr),e.includes.set(`atmosphere`,pi);for(let t of r.slots)t.glsl!==void 0&&e.includes.set(t.name,t.glsl);e.beforeFrame.push(t=>this.update(e,t))}value(e){return this.slotValues.get(e)}update(e,t){let n=this.env.frame(t);this.frame=n;let r=this.background;e.background=[r[0]*n.backdrop[0],r[1]*n.backdrop[1],r[2]*n.backdrop[2]],e.lightDirection=n.toSun;let i=this.block.pack(n,e.frameSlots);this.slotValues=i.values,e.shadowKeyExtra=i.shadowKey}},pa=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ma=`#include <header>
#include <noise>
uniform float u_slant;   // horizontal shift per pixel of fall (wind across the screen)
uniform vec2 u_fall;     // screen direction of the fall, (0, -1) when it runs straight down the screen
uniform float u_pxScale; // physical pixels per CSS pixel
uniform float u_precipShare; // share of the frame's precipitation that falls at the eye
out vec4 o_color;

// One layer of rain streaks. Grid cells have at most one drop, the grid falls and is sheared by the wind.
float rainLayer(vec2 p, vec2 cellSize, float speed, float len, uint seed, float density) {
  vec2 q = p;
  q.y += u_time.x * speed;
  q.x += q.y * u_slant;
  vec2 cell = floor(q / cellSize);
  ivec2 ic = ivec2(cell);
  if (hash2(ic, seed) > density) return 0.0;
  vec2 f = q - cell * cellSize;
  float x0 = (0.15 + 0.7 * hash2(ic, seed + 1u)) * cellSize.x;
  float y0 = hash2(ic, seed + 2u) * (cellSize.y - len);
  float a = 1.0 - smoothstep(0.3, 1.0, abs(f.x - x0) / u_pxScale);
  float along = (f.y - y0) / len;
  // The bottom end (earlier in time) is the strongest, the streak fades upward.
  return a * step(0.0, along) * step(along, 1.0) * (1.0 - 0.7 * along);
}

float snowLayer(vec2 p, float cell, float speed, float radius, uint seed, float density) {
  vec2 q = p;
  q.y += u_time.x * speed;
  q.x += u_time.x * speed * u_slant;
  vec2 c = floor(q / cell);
  ivec2 ic = ivec2(c);
  if (hash2(ic, seed) > density) return 0.0;
  float ph = hash2(ic, seed + 3u) * 6.2831853;
  vec2 center = vec2(0.2 + 0.6 * hash2(ic, seed + 1u), 0.2 + 0.6 * hash2(ic, seed + 2u)) * cell;
  center.x += sin(u_time.x * (0.9 + 0.6 * hash2(ic, seed + 4u)) + ph) * cell * 0.16;
  float d = length(q - c * cell - center);
  return 1.0 - smoothstep(radius * 0.45, radius, d);
}

void main() {
  float k = u_weather.w * u_precipShare;
  // Rotate the screen so the fall runs along −y.
  vec2 p = vec2(-u_fall.y * gl_FragCoord.x + u_fall.x * gl_FragCoord.y, -u_fall.x * gl_FragCoord.x - u_fall.y * gl_FragCoord.y);
  float s = u_pxScale;
  float a;
  vec3 col;
  if (u_fogColor.w < 0.5) {
    float d = 0.15 + 0.6 * k;
    a = 0.34 * rainLayer(p, vec2(7.0, 70.0) * s, 1500.0 * s, 26.0 * s, 101u, d)
      + 0.26 * rainLayer(p + 31.0, vec2(5.0, 52.0) * s, 1150.0 * s, 18.0 * s, 102u, d)
      + 0.18 * rainLayer(p + 57.0, vec2(4.0, 40.0) * s, 850.0 * s, 12.0 * s, 103u, d * 0.8);
    a *= 0.55 + 0.45 * k;
    col = min(u_fogColor.rgb * 1.25 + 0.08, vec3(1.0));
  } else {
    float d = 0.12 + 0.5 * k;
    a = 0.9 * snowLayer(p, 30.0 * s, 95.0 * s, 2.6 * s, 111u, d)
      + 0.75 * snowLayer(p + 13.0, 22.0 * s, 70.0 * s, 2.0 * s, 112u, d)
      + 0.55 * snowLayer(p + 29.0, 16.0 * s, 48.0 * s, 1.5 * s, 113u, d);
    col = mix(u_fogColor.rgb, vec3(0.93, 0.93, 0.91), 0.75);
  }
  a = clamp(a, 0.0, 0.9);
  o_color = vec4(col * a, a);
}`,ha=`#include <header>
#include <noise>
${Mn}
uniform vec3 u_pcEye;       // the eye in render space
uniform vec4 u_pcTiles[160]; // the tiles drawn: xyz corner relative to the eye, w seed
uniform vec4 u_pcShell;     // x tile edge, y life in seconds, z sway in metres, w sways per life
uniform vec4 u_pcRange;     // fade in from x to y, fade out from z to w (metres from the eye)
uniform vec3 u_pcVelocity;  // the fall in m/s
uniform vec2 u_pcClock;     // x share of the life, y whole lives
uniform float u_pcCount;    // drops per tile (fractional)
uniform int u_pcPerTile;    // drops per tile drawn (the count rounded up)
uniform vec4 u_pcSize;      // x width of a streak or radius of a flake (m), y exposure (s), z smallest size in pixels, w 0 rain 1 snow
out vec2 v_uv;
out float v_alpha;

void main() {
  int n = gl_VertexID / 6;
  int k = gl_VertexID - n * 6;
  int t = n / u_pcPerTile;
  int i = n - t * u_pcPerTile;
  vec4 tile = u_pcTiles[t];
  // Two triangles: corners 0 1 2, 2 1 3; x across, y along.
  int cc = k < 3 ? k : (k == 3 ? 2 : (k == 4 ? 1 : 3));
  vec2 c = vec2(float(cc & 1), float(cc >> 1));
  vec4 drop = precipitationDrop(i, tile, u_pcShell, u_pcVelocity, u_pcClock);
  vec3 p = drop.xyz;
  float a = precipitationDropFade(length(p), drop.w, u_pcRange) * clamp(u_pcCount - float(i), 0.0, 1.0);
  float depth = dot(p, u_camForward.xyz);
  if (a < 0.002 || depth < 0.05) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    v_uv = vec2(0.0);
    v_alpha = 0.0;
    return;
  }
  // Sizes differ a little from drop to drop.
  float size = u_pcSize.x * (0.7 + 0.6 * hash3(ivec3(i, 0, 5), uint(tile.w)));
  float mpp = max(u_camRight.w * depth, 1e-5);
  vec3 pos;
  if (u_pcSize.w < 0.5) {
    vec3 tail = p - u_pcVelocity * u_pcSize.y;
    vec3 axis = p - tail;
    vec3 dir = normalize(axis);
    vec3 side = cross(dir, normalize(p + tail));
    side = dot(side, side) > 1e-6 ? normalize(side) : u_camRight.xyz;
    float hw = max(0.5 * size, 0.5 * u_pcSize.z * mpp);
    a *= size / (2.0 * hw);
    pos = mix(tail - dir * hw, p + dir * hw, c.y) + side * (hw * (c.x * 2.0 - 1.0));
    v_uv = vec2(c.x * 2.0 - 1.0, c.y);
  } else {
    float r = max(size, u_pcSize.z * mpp);
    a *= (size / r) * (size / r);
    vec2 q = (c * 2.0 - 1.0) * 1.5;
    pos = p + (u_camRight.xyz * q.x + u_camUp.xyz * q.y) * r;
    v_uv = q;
  }
  v_alpha = a;
  gl_Position = u_viewProj * vec4(u_pcEye + pos, 1.0);
}`,ga=`#include <header>
#include <noise>
#include <lighting>
uniform vec3 u_pcEye;
uniform vec4 u_pcSize;
uniform vec4 u_pcLook;      // x opacity, y the share of the light that reaches the drops (0–1)
in vec2 v_uv;
in float v_alpha;
out vec4 o_color;

void main() {
  float a;
  vec3 col;
  if (u_pcSize.w < 0.5) {
    // Across: soft; along: strongest at the head (now), weaker toward the tail (the start of the exposure).
    float across = 1.0 - v_uv.x * v_uv.x;
    a = across * mix(0.35, 1.0, v_uv.y) * smoothstep(0.0, 0.12, v_uv.y) * smoothstep(1.0, 0.9, v_uv.y);
    col = min(u_fogColor.rgb * 1.3 + 0.04 * dot(u_fogColor.rgb, vec3(0.33)), vec3(1.0));
  } else {
    float r = length(v_uv);
    a = 1.0 - smoothstep(0.55, 1.45, r);
    vec3 up = localUp(u_pcEye);
    col = toDisplay(u_snow.rgb * lightOnAt(u_pcEye, up, u_pcLook.y, 1.0) * 1.3);
    col = mix(col, u_fogColor.rgb, 0.35 * u_weather.z);
  }
  a *= v_alpha * u_pcLook.x;
  if (a < 0.002) discard;
  o_color = vec4(col * a, a);
}`,_a=`#include <header>
#include <noise>
#include <lighting>
${Mn}
uniform sampler2D u_pcDepth;
uniform vec4 u_pcDepthMap;  // depth → distance along the view (cloudVolumeDepthMap)
uniform vec2 u_pcScreen;    // drawing surface in pixels
uniform vec3 u_pcRayCenter; // the view ray through the centre, scaled to depth 1, and the steps to the edges
uniform vec3 u_pcRayRight;
uniform vec3 u_pcRayUp;
uniform vec3 u_pcEye;       // the eye in render space
uniform vec3 u_pcImpactOffset; // the eye in the world, wrapped into the marks' period
uniform int u_pcAxis;       // the up axis the cells lie across: 0 x, 1 y, 2 z
uniform vec2 u_pcRangeM;    // marks fade out from x to y metres
uniform vec4 u_pcSpecA;     // first kind: cell, life over slot, radius, rate times strength
uniform vec4 u_pcSpecB;     // second kind (rain only)
uniform vec4 u_pcClocks;    // xy the first kind's slot and share of the slot, zw the second's
uniform int u_pcSeedA;
uniform int u_pcSeedB;
uniform vec4 u_pcLook;      // x 0 rain 1 snow, y opacity, z the share of the light that reaches the ground, w ring share
out vec4 o_color;

float sceneDistance(ivec2 px) {
  return precipitationDepthDistance(texelFetch(u_pcDepth, px, 0).r, u_pcDepthMap);
}
vec3 sceneAt(ivec2 px, float z) {
  vec2 ndc = (vec2(px) + 0.5) / u_pcScreen * 2.0 - 1.0;
  return (u_pcRayCenter + u_pcRayRight * ndc.x + u_pcRayUp * ndc.y) * z;
}

void main() {
  ivec2 px = ivec2(gl_FragCoord.xy);
  float z = sceneDistance(px);
  if (z > u_pcRangeM.y) discard;
  vec3 p = sceneAt(px, z);
  // The normal from the neighbours, on each axis from the side nearer in depth (no false slopes at edges).
  ivec2 size = ivec2(u_pcScreen) - 1;
  ivec2 xl = ivec2(max(px.x - 1, 0), px.y), xr = ivec2(min(px.x + 1, size.x), px.y);
  ivec2 yd = ivec2(px.x, max(px.y - 1, 0)), yu = ivec2(px.x, min(px.y + 1, size.y));
  float zl = sceneDistance(xl), zr = sceneDistance(xr), zd = sceneDistance(yd), zu = sceneDistance(yu);
  vec3 dx = abs(zr - z) < abs(z - zl) ? sceneAt(xr, zr) - p : p - sceneAt(xl, zl);
  vec3 dy = abs(zu - z) < abs(z - zd) ? sceneAt(yu, zu) - p : p - sceneAt(yd, zd);
  vec3 n = cross(dx, dy);
  float nl = length(n);
  if (!(nl > 0.0)) discard;
  n /= nl;
  if (dot(n, p) > 0.0) n = -n;
  vec3 world = u_pcEye + p;
  vec3 up = localUp(world);
  float facing = smoothstep(0.8, 0.94, dot(n, up));
  if (facing <= 0.0) discard;
  float fade = facing * (1.0 - smoothstep(u_pcRangeM.x, u_pcRangeM.y, z));
  float fp = max(u_camRight.w * z, 1e-5); // metres per pixel there
  vec3 q = p + u_pcImpactOffset;
  vec2 ab;
  vec3 nn;
  if (u_pcAxis == 0) { ab = q.yz; nn = n.yzx; }
  else if (u_pcAxis == 1) { ab = q.xz; nn = n.xzy; }
  else { ab = q.xy; nn = n.xyz; }
  float a = 0.0;
  vec3 col;
  if (u_pcLook.x < 0.5) {
    // Spray and rings catch the sky's light: brighter than the fog, never brighter than the light there is.
    vec3 rain = min(max(u_fogColor.rgb * 1.35, toDisplay((u_ambient.rgb + u_skyFill.rgb) * 1.8)), vec3(1.0));
    // A splash: a small bright fleck of spray that opens and is gone in a fraction of a second.
    vec3 m = precipitationImpact(ab, nn, u_pcSpecA, uint(u_pcSeedA), u_pcClocks.xy);
    if (m.x >= 0.0) {
      float R = u_pcSpecA.z * (0.35 + 0.65 * sqrt(m.x));
      float soft = max(0.5 * R, 0.7 * fp);
      float fleck = (1.0 - smoothstep(0.2 * R, R + soft * 0.5, m.y)) * min(1.0, R / max(R, 1.2 * fp));
      a += m.z * (1.0 - m.x) * (1.0 - m.x) * fleck * smoothstep(0.4, 1.2, R / fp);
    }
    // A ring on the water standing on the ground: it widens and fades.
    vec3 r = precipitationImpact(ab, nn, u_pcSpecB, uint(u_pcSeedB), u_pcClocks.zw);
    if (r.x >= 0.0 && u_pcLook.w > 0.0) {
      float R = u_pcSpecB.z * (0.15 + 0.85 * sqrt(r.x));
      float w = max(0.005, 1.0 * fp);
      float line = (1.0 - smoothstep(0.0, w, abs(r.y - R))) * min(1.0, 0.005 / w * 1.5);
      a += u_pcLook.w * r.z * (1.0 - r.x) * (1.0 - r.x) * line * smoothstep(2.0, 5.0, R / fp) * 0.3;
    }
    col = rain;
  } else {
    // A speck of snow where a flake landed: there at once, fading over its life.
    vec3 m = precipitationImpact(ab, nn, u_pcSpecA, uint(u_pcSeedA), u_pcClocks.xy);
    if (m.x >= 0.0) {
      float r = max(u_pcSpecA.z, 0.9 * fp);
      float disc = (1.0 - smoothstep(0.35 * r, r, m.y)) * min(1.0, (u_pcSpecA.z / r) * (u_pcSpecA.z / r));
      a += m.z * smoothstep(0.0, 0.04, m.x) * pow(1.0 - m.x, 1.3) * disc * (1.0 - 0.7 * u_weather.x);
    }
    col = toDisplay(u_snow.rgb * lightOnAt(world, up, u_pcLook.z, 1.0));
  }
  a = clamp(a * fade * u_pcLook.y, 0.0, 0.95);
  if (a < 0.002) discard;
  o_color = vec4(col * a, a);
}`;function va(e,t){return(e.impacts??!0)&&(e.look??`world`)===`world`&&t.pixelGrowth>0}var ya=.0025,ba=.008,xa=.035,Sa=1.1,Ca=.55,wa=.9,Ta=[18,30],Ea=1,Da=class{name=`precipitation`;source=null;density;impacts;drops=!0;look;lastDrops=[0,0];tiles=new Float32Array(640);screenProgram;dropProgram;impactProgram;link;renderer;constructor(e,t,n={}){let r=e.device;this.screenProgram=r.program(`precipitation`,pa,e.resolve(ma)),this.dropProgram=r.program(`precipitation-drops`,e.resolve(ha),e.resolve(ga)),this.impactProgram=r.program(`precipitation-impacts`,pa,e.resolve(_a,`other`)),this.link=t,this.renderer=e,this.density=n.density??1,this.impacts=n.impacts??!0,this.look=n.look??`world`}draw(e){let t=this.link.frame,n=this.source?Math.min(1,Math.max(0,this.source.rainShare)):1;this.lastDrops[0]=this.lastDrops[1]=0,e.pass!==`overlay`||!t||t.precipitation*n<=.005||(e.view.pixelGrowth>0&&this.look===`world`?this.drawWorld(e,t.precipitation*n):this.drawScreen(e,n))}drawWorld(e,t){let n=this.link.frame,r=e.view,i=e.device,a=n.precipitationKind>.5,o=a?vn:_n,s=r.cornerRays()[0].origin,c=this.renderer.worldOrigin,l=[s[0]+c[0],s[1]+c[1],s[2]+c[2]],u=Tn(s,this.renderer.upCenter()),f=En(o,u,n.windX,n.windZ,this.link.env.wind.speedMs),p=n.time,m={src:`one`,dst:`one-minus-src-alpha`};if(this.impacts&&this.drawImpacts(e,t,a,s,l,u,p),!this.drops)return;let h=this.dropProgram;i.setState({depthTest:!0,depthFunc:`less`,depthWrite:!1,cullBack:!1,blend:m}),i.use(h);let g=kn(p,o.lifeS),_=.35+.4*(1-n.cloudCover);h.set(`u_pcEye`,{vec3:[s[0],s[1],s[2]]}),h.set(`u_pcVelocity`,{vec3:f}),h.set(`u_pcClock`,{vec2:g}),h.set(`u_pcLook`,{vec4:[(a?wa:Ca)*(.55+.45*Math.min(1,t)),_,0,0]});let v=a?bn:yn,y=r.cullVolume(),b=(e,t)=>d({min:[e[0]+s[0],e[1]+s[1],e[2]+s[2]],max:[t[0]+s[0],t[1]+s[1],t[2]+s[2]]},y);for(let n=v.length-1;n>=0;n--){let r=v[n],s=Dn(r,t,this.density),c=Math.ceil(s);if(c<=0)continue;let u=On(r,o,f,l,b),d=u.length/4;d!==0&&(this.tiles.set(u),h.vec4v(`u_pcTiles`,this.tiles.subarray(0,u.length)),h.set(`u_pcShell`,{vec4:[r.tileM,o.lifeS,o.swayM,o.swayCycles]}),h.set(`u_pcRange`,{vec4:[r.nearM[0],r.nearM[1],r.farM[0],r.farM[1]]}),h.float(`u_pcCount`,s),h.int(`u_pcPerTile`,c),h.set(`u_pcSize`,{vec4:[(a?ba:ya)*r.size,xa*(.6+.4*r.size),Sa,+!!a]}),i.drawVertices(d*c*6),e.count(d*c*2),this.lastDrops[n]=d*c)}}drawImpacts(e,t,n,r,i,a,o){let s=e.device,c=s.sceneDepth();if(!c)return;let l=this.link.frame,u=e.view,d=this.renderer.projection,f=this.impactProgram;s.setState({depthTest:!1,depthWrite:!1,cullBack:!1,blend:{src:`one`,dst:`one-minus-src-alpha`}}),s.use(f),s.texture(Ea,c),f.int(`u_pcDepth`,Ea),f.set(`u_pcDepthMap`,{vec4:xr(s.depthMode,d.viewProj,d.logScale)}),f.set(`u_pcScreen`,{vec2:[u.width,u.height]});let p=u.axes().forward,[m,h,g]=u.cornerRays().map(e=>{let t=1/(e.dir[0]*p[0]+e.dir[1]*p[1]+e.dir[2]*p[2]);return[e.dir[0]*t,e.dir[1]*t,e.dir[2]*t]}),_=[(g[0]-m[0])/2,(g[1]-m[1])/2,(g[2]-m[2])/2],v=[(h[0]-m[0])/2,(h[1]-m[1])/2,(h[2]-m[2])/2];f.set(`u_pcRayCenter`,{vec3:[m[0]+_[0]+v[0],m[1]+_[1]+v[1],m[2]+_[2]+v[2]]}),f.set(`u_pcRayRight`,{vec3:_}),f.set(`u_pcRayUp`,{vec3:v}),f.set(`u_pcEye`,{vec3:[r[0],r[1],r[2]]}),f.set(`u_pcImpactOffset`,{vec3:An(i,wn)});let y=Math.abs(a[0]),b=Math.abs(a[1]),x=Math.abs(a[2]);f.int(`u_pcAxis`,b>=y&&b>=x?1:y>=x?0:2),f.set(`u_pcRangeM`,{vec2:Ta});let S=n?Cn:xn,C=n?Cn:Sn,w=Math.min(1,t),T=jn(S,o),E=jn(C,o);f.set(`u_pcSpecA`,{vec4:ka(S,w)}),f.set(`u_pcSpecB`,{vec4:ka(C,w)}),f.set(`u_pcClocks`,{vec4:[T[0],T[1],E[0],E[1]]}),f.int(`u_pcSeedA`,S.seed),f.int(`u_pcSeedB`,C.seed);let D=.35+.4*(1-l.cloudCover),O=n?0:Oa(.2,.9,l.wetness);f.set(`u_pcLook`,{vec4:[+!!n,.55+.45*w,D,O]}),s.drawFullscreen(),e.count(1),s.texture(Ea,null)}drawScreen(e,t){let n=this.link.frame,r=e.view,i=r.axes().right,a=n.windX*i[0]+n.windZ*i[2],o=this.link.env.wind.speedMs,s=Math.min(.6,o*(n.precipitationKind>.5?.09:.035)),c=a*s,l=[0,-1];if(r.pixelGrowth>0){let e=this.renderer.upCenter();l=ja(r,e?Aa(r,e,n.windX,n.windZ,s):[n.windX*s,-1,n.windZ*s]),c=0}let u=this.screenProgram;e.device.setState({depthTest:!1,blend:{src:`one`,dst:`one-minus-src-alpha`}}),e.device.use(u),u.float(`u_slant`,c),u.set(`u_fall`,{vec2:l}),u.float(`u_pxScale`,e.view.dpr),u.float(`u_precipShare`,t),e.device.drawFullscreen(),e.count(1)}};function Oa(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function ka(e,t){return[e.cellM,e.lifeS/e.slotS,e.radiusM,e.rate*t]}function Aa(e,t,n,r,i){let a=e.cornerRays()[0].origin,o=a[0]-t[0],s=a[1]-t[1],c=a[2]-t[2],l=Math.hypot(o,s,c);if(l<=1e-6)return[n*i,-1,r*i];let u=[-o/l,-s/l,-c/l],d=n*u[0]+r*u[2],f=n-u[0]*d,p=-u[1]*d,m=r-u[2]*d;return[u[0]+f*i,u[1]+p*i,u[2]+m*i]}function ja(e,n){let r=e.axes().forward,i=e.cornerRays()[0].origin,a=e.refDepth-t(r,i),o=[i[0]+r[0]*a,i[1]+r[1]*a,i[2]+r[2]*a],s=e.viewProj(o,1),c=e=>{let t=s[3]*e[0]+s[7]*e[1]+s[11]*e[2]+s[15];return[(s[0]*e[0]+s[4]*e[1]+s[8]*e[2]+s[12])/t,(s[1]*e[0]+s[5]*e[1]+s[9]*e[2]+s[13])/t]},l=c(o),u=c([o[0]+n[0],o[1]+n[1],o[2]+n[2]]),d=(u[0]-l[0])*e.width,f=(u[1]-l[1])*e.height,p=Math.hypot(d,f);return p>1e-6?[d/p,f/p]:[0,-1]}var Ma=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;function Na(e){if(e.pixelGrowth<=0)return null;let t=e.cornerRays()[0].origin;return[t[0],t[1],t[2]]}var Pa=class{name=`cloud-shadows`;slot;interval;draws=0;source=null;link;renderer;target;program;byPlace;sourceProgram=null;_enabled=!0;sinceDraw=1/0;constructor(e,t,n,r={}){this.slot=n,this.link=t,this.renderer=e,this.interval=Math.max(1,r.interval??4);let i=n.params;r.extentM!==void 0&&(i.extentM=r.extentM),r.size!==void 0&&(i.size=r.size),this.target=e.device.colorTarget(i.size,i.size,1,`rgba8`);let a=t.block.slots.some(e=>e.name===Fn);this.byPlace=a,this.program=this.target?e.device.program(`cloud shadow`,Ma,e.resolve(dn({cloudField:a}),`other`)):null,e.device.onRestored(()=>this.sinceDraw=1/0),e.beforeFrame.unshift(t=>{i.active=this._enabled&&this.target!==null,i.eye=Na(t);let n=e.upCenter(),r=e.worldOrigin;i.reference=n??[-r[0],-r[1],-r[2]],i.radiusM=n&&e.radialUp?e.radialUp.radiusM:null,this.sinceDraw++,i.redraw=this.sinceDraw>=this.interval||this.eyeLeft(i)})}get enabled(){return this._enabled}set enabled(e){e&&!this._enabled&&(this.sinceDraw=1/0),this._enabled=e}get texture(){return this.target?this.target.textures[0]:null}invalidate(){this.sinceDraw=1/0}eyeLeft(e){let t=e.last;if(!t||!e.eye)return!0;let n=e.reference,r=[e.eye[0]-n[0],e.eye[1]-n[1],e.eye[2]-n[2]],i;if(e.radiusM!==null){let t=Math.hypot(r[0],r[1],r[2])||1;i=[r[0]/t*e.radiusM,r[1]/t*e.radiusM,r[2]/t*e.radiusM]}else i=[r[0],0,r[2]];let a=[i[0]-t.origin[0],i[1]-t.origin[1],i[2]-t.origin[2]],o=a[0]*t.axisU[0]+a[1]*t.axisU[1]+a[2]*t.axisU[2],s=a[0]*t.axisV[0]+a[1]*t.axisV[1]+a[2]*t.axisV[2];return Math.max(Math.abs(o),Math.abs(s))>t.extentM/8}prepare(e,t){let n=this.link.value(this.slot);if(n?.redraw&&n.projection&&this.target&&this.program){e.texture(12,null);let t={u_cloudShadowTexels:{float:this.target.width}},r=this.source,i=r?r.bindShadowDepth(e):null;if(r&&i){if(this.sourceProgram?.source!==r){let t=this.renderer.resolve(dn({cloudField:this.byPlace,depth:r.shadowDepthGlsl}),`other`);this.sourceProgram={source:r,program:e.program(`cloud shadow (source)`,Ma,t)}}e.fill(this.target,this.sourceProgram.program,{...t,...i}),r.unbindShadowDepth(e)}else e.fill(this.target,this.program,t);this.slot.params.last=n.projection,this.sinceDraw=0,this.draws++}e.texture(12,this.texture),e.texture(13,null)}draw(e){}},Fa=class{name=`cloud-weather`;interval;rules={...or};draws=0;tile=[0,0,0,0];cube;flat;program;size;tileM;fieldSlot;link;renderer;pending=[];madeFrom=``;sinceRefresh=1/0;constructor(e,t,n={}){this.renderer=e,this.link=t,this.interval=Math.max(1,n.interval??30);let r=e.radialUp!==null;this.size=n.size??(r?256:128),this.tileM=n.tileM??64e3,this.fieldSlot=t.block.slots.find(e=>e.name===`cloudField`)??null,this.cube=r?e.device.cubeTarget(this.size,`rgba8`):null,this.flat=r?null:e.device.colorTarget(this.size,this.size,1,`rgba8`),this.program=this.cube||this.flat?e.device.program(`cloud weather`,Ma,e.resolve(fn({cloudField:r&&this.fieldSlot!==null}),`other`)):null,e.device.onRestored(()=>this.madeFrom=``)}inputs(e){let t=this.link.frame?.cloudCover??0,n=this.rules;return`${`${n.deckCover.join(`,`)}|${n.rainCover.join(`,`)}|${n.convection}`}|${this.coverInputs(e,t)}`}coverInputs(e,t){if(!this.cube){let n=Na(e)??[0,0,0],r=this.tileM/8;return`${t}|${Math.round(n[0]/r)}|${Math.round(n[2]/r)}`}let n=this.fieldSlot?this.link.value(this.fieldSlot):void 0,r=this.renderer.radialUp?.radiusM??0;return n?[n.axis.join(`,`),n.patchAmount,n.patchOffset.join(`,`),n.invPatchSize,n.zonal.join(`,`),n.patchWarp,r].join(`|`):`${t}|${r}`}prepare(e,t){if(!this.program)return;this.sinceRefresh++;let n=this.inputs(t),r=this.madeFrom===``;if((r||n!==this.madeFrom&&this.pending.length===0&&this.sinceRefresh>=this.interval)&&(this.pending=this.cube?[0,1,2,3,4,5]:[0],this.madeFrom=n,this.sinceRefresh=0,this.flat&&this.placeTile(t)),this.pending.length===0)return;let i=this.rules,a={u_weatherTexels:{float:this.size},u_weatherTile:{vec4:this.tile},u_weatherRules:{vec4:[i.deckCover[0],i.deckCover[1],i.rainCover[0],i.rainCover[1]]},u_weatherConvection:{float:i.convection}};if(this.flat){this.pending.length=0,e.fill(this.flat,this.program,a),this.draws++;return}let o=r?6:1;for(let t=0;t<o&&this.pending.length>0;t++){let t=this.pending.shift();e.fillLayer(this.cube,t,this.program,{...a,u_weatherFace:{int:t}}),this.draws++}}placeTile(e){let t=Na(e)??[0,0,0],n=this.tileM/this.size;this.tile[0]=Math.round(t[0]/n)*n,this.tile[1]=Math.round(t[2]/n)*n,this.tile[2]=this.tileM}bind(e,t){this.cube?e.cubeTexture(t,this.cube):e.texture(t,this.flat?this.flat.textures[0]:null)}draw(e){}},Ia=8,La=9,Ra=10,za=11,Ba=8,Va=9,Ha=10,Ua=11,Wa=7,Ga=8,Ka=9,qa=13,Ja=1e7,Ya=Ja.toFixed(1),Xa=(Ja*.5).toFixed(1),Za=`0.57`,Qa=`0.27`,$a=2 .toFixed(2),eo=`0.72`,to=`0.4`,no=6e-4,ro=6,io=3e4,ao=12,oo=4,so=4,co=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,lo=`
uniform vec4 u_cvView;      // x, y screen size in pixels, z target texels per pixel, w 1 = 8-bit target
uniform vec3 u_cvEye;       // the eye relative to the reference point (u_cvRef), from the CPU
uniform vec3 u_cvEyeRender; // the eye in render space
uniform vec3 u_cvRayCenter; // view rays scaled to depth 1 along the view: centre, half the width, half the height
uniform vec3 u_cvRayRight;
uniform vec3 u_cvRayUp;
uniform vec4 u_cvRain;      // x extinction per metre of the rain out of a cloud raining at full strength, y 1: the eye is under the base and the rain is drawn, z how far it is drawn
vec3 cvRayAt1(vec2 pixel) {
  vec2 ndc = pixel / u_cvView.xy * 2.0 - 1.0;
  return u_cvRayCenter + u_cvRayRight * ndc.x + u_cvRayUp * ndc.y;
}
vec3 cvRay(vec2 pixel) { return normalize(cvRayAt1(pixel)); }
// The distances of a texel of the second target (metres): x the clouds' mean distance, y where the ray entered the
// layer, z where it ended there (the layer's far side or the scene). An 8-bit target keeps x and y only, as 16-bit
// logarithms, and reads z as far.
vec4 cvPackInfo(float meanM, float entryM, float endM) {
  if (u_cvView.w < 0.5) return vec4(meanM, entryM, endM, 0.0) * 0.001;
  vec2 e = clamp(log2(1.0 + vec2(meanM, entryM)) / 25.0, 0.0, 1.0) * 255.0;
  vec2 hi = floor(e);
  return vec4(hi.x / 255.0, e.x - hi.x, hi.y / 255.0, e.y - hi.y);
}
vec3 cvUnpackInfo(vec4 v) {
  if (u_cvView.w < 0.5) return v.xyz * 1000.0;
  return vec3(exp2((vec2(v.x, v.z) + vec2(v.y, v.w) / 255.0) * 25.0) - 1.0, ${Ya});
}
// How far apart two distances are, relative to the nearer one (50 m at least).
float cvApart(float a, float b) { return abs(a - b) / max(min(a, b), 50.0); }
`,uo=`
uniform highp sampler2D u_cvScene; // the depth the last frame drew
uniform vec3 u_cvSceneInv0;        // its screen basis, inverted (cloudVolumeScreenBasis), column by column
uniform vec3 u_cvSceneInv1;
uniform vec3 u_cvSceneInv2;
uniform vec3 u_cvSceneCenter;      // its rays at depth 1: centre, half the width, half the height
uniform vec3 u_cvSceneRight;
uniform vec3 u_cvSceneUp;
uniform vec3 u_cvSceneMoved;       // how far the eye moved since
uniform vec4 u_cvSceneMap;         // its depth → distance along its view (cloudVolumeDepthMap); x 0: no depth
mat3 cvSceneInverse() { return mat3(u_cvSceneInv0, u_cvSceneInv1, u_cvSceneInv2); }
// The distance along dir to what the last frame drew there: the place at the distance guessed is looked up on the last
// frame's screen, and the point found there looked up once more. 1e30 where it drew nothing (or no depth is known),
// −1 where it did not see the place.
float cvScene(vec3 dir, float guess) {
  if (u_cvSceneMap.x < 0.5) return 1e30;
  vec2 size = vec2(textureSize(u_cvScene, 0));
  float d = guess;
  for (int i = 0; i < 2; i++) {
    vec3 s = cloudVolumeReproject(cvSceneInverse(), u_cvSceneMoved, dir, d);
    if (s.z <= 0.0 || abs(s.x) >= 1.0 || abs(s.y) >= 1.0) return -1.0;
    float z = cloudVolumeDepthDistance(texelFetch(u_cvScene, ivec2((s.xy * 0.5 + 0.5) * size), 0).r, u_cvSceneMap);
    if (z >= 1e29) return 1e30;
    d = dot((u_cvSceneCenter + u_cvSceneRight * s.x + u_cvSceneUp * s.y) * z - u_cvSceneMoved, dir);
  }
  return max(d, 0.0);
}
// Where a march along dir ends (x): the layer's far side, or the scene where it is nearer. y 1 where the last frame
// did not see the place (off its screen): the end is then the layer's far side, not known for sure.
vec2 cvEnd(vec3 dir, float far) {
  float s = cvScene(dir, far);
  return s < 0.0 ? vec2(far, 1.0) : vec2(min(far, s), 0.0);
}
// cvEnd of a ray with its span in the layer: also where a ray that misses the layer ends while the rain under the
// clouds is drawn (the scene, or how far the rain is drawn); far for other rays that miss it.
vec2 cvRayEnd(vec4 span, vec3 dir) {
  if (span.y > span.x) return cvEnd(dir, span.y);
  return u_cvRain.y > 0.5 ? cvEnd(dir, u_cvRain.z) : vec2(${Ya}, 0.0);
}
`,fo=`
uniform highp sampler3D u_cvShape;
#ifdef WH_LOCAL_UP
uniform highp samplerCube u_cvWeather;
#else
uniform highp sampler2D u_cvWeather;
uniform vec4 u_cvTile;
#endif
uniform vec4 u_cvScale; // x 1 / shape tile, y 1 / wide tile, z 1 / detail tile, w wide cover
uniform float u_cvEdge; // CloudVolumeStyle.edge − 1: how much faster the density rises from a cloud's edge
// The weather of the place over a point: x cover, y deck share, z precipitation.
vec3 cvWeather(vec3 rel) {
#ifdef WH_LOCAL_UP
  return textureLod(u_cvWeather, rel, 0.0).rgb;
#else
  return textureLod(u_cvWeather, (rel.xz + u_cvRef.xz - u_cvTile.xy) / u_cvTile.z + 0.5, 0.0).rgb;
#endif
}
// The wide lookup of the shape at a place in the noise.
float cvWide(vec3 q) { return textureLod(u_cvShape, q * u_cvScale.y + vec3(0.37, 0.11, 0.73), 0.0).r; }
// The place in the noise: fixed to the reference point, drifting with the cloud pattern.
vec3 cvNoiseAt(vec3 rel) { return rel - vec3(u_cloud.x, 0.0, u_cloud.y); }
// The density before the erosion where the samples lie too far apart for the shape (lod 0–1): the shape's value
// gives way to its mean and spreads out by as much as the shape varies, and the density is its mean over that
// spread. Far clouds thin out into a soft layer of the right mean density instead of scattered dots or a solid deck;
// the wide lookup moves the cover the more, so that layer still gathers into banks and gaps. The profile follows the
// place's type: the deck share flattens it, precipitation out of heaped clouds makes it tall, and precipitation
// closes the cover (cloudVolumeRainCover), steadies the wide lookup and fills the shape (cloudVolumeRainShape), so
// the sky over rain has no gaps. y: the share of the
// spread that is cloud (1 where the shape is resolved), so a step can let the light through the gaps between the
// clouds it stands for (cvStepThrough) instead of spreading their density into a haze that is too opaque.
vec2 cvBaseShare(float shape, float lod, float wide, vec3 weather, float h) {
  float cover = weather.x;
  float wet = sqrt(clamp(weather.z, 0.0, 1.0));
  float c = clamp(cloudVolumeRainCover(cover, weather.z) + (wide - 0.5) * u_cvScale.w * (1.0 + 1.5 * lod) * (1.0 - wet), 0.0, 1.0);
  if (cover <= 0.0 || c <= 0.0) return vec2(0.0);
  float t = cloudVolumeThreshold(c);
  float p = cloudVolumeTypedProfile(h, weather.y, weather.z * (1.0 - weather.y), weather.z);
  float m = mix(cloudVolumeRainShape(shape, weather.z), ${Za}, lod) * p;
  float w = ${Qa} * lod * p;
  if (m + w <= t) return vec2(0.0);
  if (m - w >= t) return vec2(min((m - t) / (1.0 - t) * (1.0 + u_cvEdge), 1.0), 1.0);
  float e = m + w - t;
  float share = e / (2.0 * w);
  return vec2(min(e * e / (4.0 * w * (1.0 - t)) * (1.0 + u_cvEdge), share), share);
}
float cvBase(float shape, float lod, float wide, vec3 weather, float h) {
  return cvBaseShare(shape, lod, wide, weather, h).x;
}
// What a step of length dt lets through where a share f of it is cloud of mean extinction sigma (over the whole
// step): the gaps, and the clouds' own transmittance at their density.
float cvStepThrough(float sigma, float f, float dt) {
  float k = max(f, 0.05);
  return 1.0 - k + k * exp(-sigma / k * dt);
}
`,po=`
uniform vec4 u_cvLook;
uniform vec4 u_cvLit;   // CloudVolumeStyle as differences from 1: rgb the sun's light in the clouds, w their own shadow
uniform vec4 u_cvShade; // rgb the sky's and the ground's light in the clouds, w how evenly they scatter the sun (0–1)
vec3 cvL;
vec3 cvSun;
vec3 cvSkyGrey;
vec3 cvSkyBlue;
vec3 cvGround;
// Henyey-Greenstein, 1 for light scattered evenly.
float cvHg(float c, float g) {
  float g2 = g * g;
  return (1.0 - g2) / pow(max(1.0 + g2 - 2.0 * g * c, 1e-4), 1.5);
}
// Forward scattering (the bright rim toward the sun) and a little backward (the sunlit side seen with the sun behind).
float cvPhase(float c, float k) { return mix(cvHg(c, 0.75 * k), cvHg(c, -0.3 * k), 0.3); }
// The three phase values of a view ray (ever softer forward scattering of light scattered a few times).
vec3 cvPhases(vec3 dir) {
  float c = dot(dir, cvL);
  return mix(vec3(cvPhase(c, 1.0), cvPhase(c, 0.5), cvPhase(c, 0.25)), vec3(1.0), u_cvShade.w);
}
// The light at the clouds round a point (relative to the reference point, and in render space): the frame's light
// (the sun, or the moon at night), or with the atmosphere the sun through the air, the sky's light at that height
// and what remains at night, as the atmosphere lights the ground.
void cvLightAt(vec3 rel, vec3 world) {
  vec3 L = u_sunDir.xyz;
#ifdef WH_LOCAL_UP
  float mu = dot(normalize(rel), L);
#else
  float mu = L.y;
#endif
  float day = smoothstep(-0.12, 0.2, mu);
  vec3 sun = u_sunColor.rgb * u_cvLook.y * day;
  vec3 skyRaw = (u_ambient.rgb + u_skyFill.rgb) * mix(0.15, 1.0, day);
  vec3 ground = u_bounce.rgb * mix(0.15, 1.0, day);
#ifdef WH_ATMOSPHERE
  if (u_atmSun.w > 0.0) {
    L = u_atmSun.xyz;
    vec3 pS = world - atmCenter();
    float rS = max(length(pS), 1.0);
    float muS = dot(pS, L) / rS;
    sun = u_atmLight.rgb * atmSunAt(rS, muS);
    vec3 skyA = u_atmLight.rgb * atmSkyLightAt(rS - u_atmShell.x, muS) * u_atmLight.w;
    skyRaw = skyA + u_atmNight.rgb;
    // The ground below lit by the sun and the sky, at a dull albedo.
    ground = (sun * max(muS, 0.0) + skyA) * 0.25 + u_atmNight.rgb;
  }
#endif
  // The sky's light inside a cloud is mostly light the cloud scattered: most of the way to grey at the tops, less so
  // at the bases, which the open sky around and below lights (bluish).
  vec3 grey = vec3(dot(skyRaw, vec3(0.3, 0.59, 0.11)));
  cvL = L;
  cvSun = sun;
  cvSkyGrey = mix(skyRaw, grey, 0.8) * u_cvLook.z;
  cvSkyBlue = mix(skyRaw, grey, 0.45) * u_cvLook.z;
  cvGround = ground * u_cvLook.z;
}
// The light a sample scatters toward the eye, per unit of its opacity: tau the optical depth toward the light, d the
// density, h the height in the layer (0–1), weather the place's (cover, deck share, precipitation), ph cvPhases,
// cosT the cosine between the view ray and the light.
vec3 cvSampleLight(float tau, float d, float h, vec3 weather, vec3 ph, float cosT) {
  tau *= 1.0 + u_cvLit.w;
  // Light scattered once or a few times (ever less extinction, ever softer forward scattering), and light that
  // diffused through the cloud, which falls off slowly with the optical depth.
  float direct = ph.x * exp(-tau) + 0.5 * ph.y * exp(-0.5 * tau) + 0.25 * ph.z * exp(-0.25 * tau);
  // Edges facing away from the eye toward the sun stay darker than the cloud's inside (less light scattered in).
  direct *= mix(1.0, 1.0 - exp(-2.0 * tau - d * 2.0), 0.5 * (0.5 - 0.5 * cosT));
  float diffuse = 0.5 / (1.0 + 0.1 * tau);
  // The sky's light falls off toward the base, the more so under a closing deck (the cloud above shades it) and
  // under a raining cloud, whose heavy base is darker still and gets less light from the ground.
  float shade = mix(0.4 - 0.22 * smoothstep(0.55, 0.9, weather.x) - 0.2 * weather.z, 1.0, h);
  vec3 c = cvSun * (1.0 + u_cvLit.rgb) * (direct + diffuse) + (mix(cvSkyBlue, cvSkyGrey, h) * shade + cvGround * (1.0 - h) * (0.7 - 0.4 * weather.z)) * (1.0 + u_cvShade.rgb);
  // A raining cloud is a thick, water-laden column: little of the light gets through to its lower part, which turns
  // a dark slate grey (a little more than a quarter of the light at its base under the heaviest rain), its top grey.
  // Already light rain shows (the square root of the precipitation).
  float wet = sqrt(clamp(weather.z, 0.0, 1.0));
  float keep = 1.0 - wet * mix(${eo}, ${to}, smoothstep(0.0, 0.85, h));
  return mix(c, vec3(dot(c, vec3(0.3, 0.59, 0.11))), 0.6 * wet) * keep;
}
`,mo=`${Cr}
${fo}
uniform vec4 u_cvShadow; // x samples, y weight
vec2 cloudShadowDepth(vec3 point, vec3 L) {
  vec3 rel = point - u_cvRef.xyz;
  vec4 span = cloudVolumeSpan(rel, L);
  if (span.y <= span.x) return vec2(0.0, u_cvShadow.y);
  float thick = u_cvSlab.y - u_cvSlab.x;
  float n = u_cvShadow.x;
  float dt = (span.y - span.x) / n;
  float lod = smoothstep(0.12, 0.5, dt * u_cvScale.x * 4.0);
  float sum = 0.0;
  for (int i = 0; i < 32; i++) {
    if (float(i) >= n) break;
    vec3 p = rel + L * (span.x + (float(i) + 0.5) * dt);
    float h = (cloudVolumeHeight(p) - u_cvSlab.x) / thick;
    vec3 weather = cvWeather(p);
    if (weather.x <= 0.0 || h <= 0.0 || h >= 1.0) continue;
    vec3 q = cvNoiseAt(p);
    sum += cvBase(textureLod(u_cvShape, q * u_cvScale.x, 0.0).r, lod, cvWide(q), weather, h) * (1.0 + ${$a} * weather.z);
  }
  return vec2(sum * dt * u_cvSlab.z, u_cvShadow.y);
}
`;function ho(e){return`#include <header>
#include <noise>
#include <lighting>
#include <sky>
#include <atmosphere>
${Cr}
${lo}
${uo}
${fo}
${po}
uniform highp sampler3D u_cvDetail;
// u_cvLook: x erosion (0: no detail), y gain that undoes the frame's overcast dimming of the sun, z ambient gain, w weight
uniform vec4 u_cvMarch; // x view steps, y light steps, z first light step in metres, w frame index
uniform vec4 u_cvBlock; // xy the texel of each 2 × 2 block marched now, z 2: one texel per block, 1: every texel
layout(location = 0) out vec4 o_color;
layout(location = 1) out vec4 o_info;
${e?`#define WH_CV_FIELD 1`:``}
// The distance along dir from e (relative to the reference point) to the ground: the sphere of radius u_cvRef.w, or
// height 0. 1e30 where the ray does not meet it.
float cvGroundAlong(vec3 e, vec3 dir) {
  if (u_cvRef.w > 0.0) {
    float b = dot(e, dir);
    float dg = b * b - (dot(e, e) - u_cvRef.w * u_cvRef.w);
    float t = dg > 0.0 ? -b - sqrt(dg) : -1.0;
    return t > 0.0 ? t : 1e30;
  }
  return dir.y < 0.0 ? max(-e.y / dir.y, 0.0) : 1e30;
}

void main() {
  vec2 texel = u_cvBlock.z > 1.5 ? floor(gl_FragCoord.xy) * 2.0 + u_cvBlock.xy + 0.5 : gl_FragCoord.xy;
  vec3 dir = cvRay(texel / u_cvView.z);
  vec4 span = cloudVolumeSpan(u_cvEye, dir);
  bool layer = span.y > span.x;
  float entry = layer ? span.x : ${Ya};
  // The scene the last frame drew along this ray ends the march there; beyond the hand-over distance a far layer
  // has the clouds.
  float end = cvRayEnd(span, dir).x;
  float stop = min(end, u_cvFar.y);
  bool clouds = layer && stop > span.x;
  // With the eye under the base: the stretch of the ray under it, up to the layer, the scene or the ground.
  float rainEnd = u_cvRain.y > 0.5 ? min(min(entry, end), min(cvGroundAlong(u_cvEye, dir), u_cvRain.z)) : 0.0;
  if ((!clouds && rainEnd <= 0.0) || u_cvLook.w <= 0.0) {
    o_color = vec4(0.0);
    o_info = cvPackInfo(${Ya}, entry, end);
    return;
  }
  float t0 = span.x;
  float len = clouds ? stop - span.x : 0.0;
  float thick = u_cvSlab.y - u_cvSlab.x;
  int lightSteps = int(u_cvMarch.y);
  // The jitter over the texels marched now (neighbours in the march differ most), moved on every frame.
  float j = cloudVolumeJitter(floor(gl_FragCoord.xy) + 0.5, u_cvMarch.w);
  // Inside the layer and along long rays the samples crowd toward the eye (spacing growing with the distance): the
  // cloud around the eye is a whiteout, and near clouds are larger on the screen than far ones.
  float k = t0 <= 0.0 ? 2.0 : 1.0 + smoothstep(2.0, 8.0, len / thick);
  // Where the samples lie more than half a cell of the shape apart, the shape gives way to its mean (cvBaseShare).
  float cell = 0.25 / u_cvScale.x;
  // The light at the clouds, once per pixel, where the ray has gone a quarter into the layer (halfway through the rain
  // where it misses the clouds).
  float tl = clouds ? t0 + 0.25 * len : 0.5 * rainEnd;
  cvLightAt(u_cvEye + dir * tl, u_cvEyeRender + dir * tl);
  vec3 L = cvL;
  float cosT = dot(dir, L);
  vec3 ph = cvPhases(dir);
  float ext = u_cvSlab.z;
  float T = 1.0;
  vec3 light = vec3(0.0);
  float dSum = 0.0;
  float wSum = 0.0;
  // With the eye under the clouds' base: the rain falling out of them between the eye and where the ray enters the
  // layer, grey shafts in front of the clouds. A sample counts where the place's precipitation (the weather map's B)
  // falls out of cloud right above it (the shape just over the base); it fades out toward the hand-over distance.
  if (rainEnd > 0.0) {
    float rdt = rainEnd / ${ro}.0;
    float rlod = smoothstep(0.12, 0.5, rdt / cell);
    float hr = 0.12;
    // The rain is lit by the grey light under the clouds and the ground's, with little of the sun.
    vec3 rainLight = vec3(dot(0.55 * cvSkyGrey + 0.3 * cvGround + 0.06 * cvSun, vec3(0.3, 0.59, 0.11)));
    for (int i = 0; i < ${ro}; i++) {
      float t = (float(i) + j) * rdt;
      vec3 rel = u_cvEye + dir * t;
      vec3 w = cvWeather(rel);
      if (w.z <= 0.0 || w.x <= 0.0) continue;
      vec3 above = u_cvRef.w > 0.0 ? normalize(rel) * (u_cvRef.w + u_cvSlab.x + hr * thick) : vec3(rel.x, u_cvSlab.x + hr * thick, rel.z);
      vec3 qa = cvNoiseAt(above);
      float shapeA = textureLod(u_cvShape, qa * u_cvScale.x, 0.0).r;
      float cloud = cvBase(shapeA, rlod, cvWide(qa), w, hr);
      // Heavier under the cloud's cores, lighter between them: curtains rather than an even veil.
      float core = mix(0.35, 1.0, smoothstep(0.35, 0.8, mix(shapeA, ${Za}, rlod)));
      float sigma = u_cvRain.x * w.z * core * smoothstep(0.0, 0.15, cloud) * (1.0 - smoothstep(0.6 * u_cvRain.z, u_cvRain.z, t));
      if (sigma <= 0.0) continue;
      float ts = exp(-sigma * rdt);
      float wr = T * (1.0 - ts);
      light += rainLight * wr;
      dSum += t * wr;
      wSum += wr;
      T *= ts;
    }
  }
  // Samples: fewer along short spans (steeply from above or below), all of them along long ones, and along a span
  // that runs far through the layer as many as keep the farthest (len * k / fs apart) within half a cell of the
  // shape, up to ${so} times as many. With fewer, the far samples of such a span (tens of kilometres toward the
  // horizon) lie kilometres apart, the shape gives way to its mean over its spread at every one of them, and their
  // shares of cloud, taken as independent, add up to an opaque, evenly lit band where there are clouds with gaps.
  float fs = clouds ? clamp(max(ceil(len * 16.0 / thick), ceil(2.0 * k * len / cell)), max(4.0, floor(u_cvMarch.x * 0.5)), min(u_cvMarch.x * ${so}.0, 160.0)) : 0.0;
  // Through clear air the march takes every second sample; at the first cloud it steps one sample back and goes on
  // sample by sample until three in a row are clear again.
  float fi = 0.0;
  float stride = t0 <= 0.0 ? 1.0 : 2.0;
  float clearRun = 0.0;
  for (int n = 0; n < 160; n++) {
    if (fi >= fs) break;
    float u = (fi + j) / fs;
    float t = t0 + len * pow(u, k);
    float dt = len * k * pow(max(u, 0.5 / fs), k - 1.0) / fs;
    vec3 rel = u_cvEye + dir * t;
    float h = (cloudVolumeHeight(rel) - u_cvSlab.x) / thick;
    float d = 0.0;
    float f = 1.0;
    vec3 weather = vec3(0.0);
    float wide = 0.0;
    float lod = 0.0;
    vec3 q = vec3(0.0);
    if (!(t > span.z && t < span.w) && h > 0.0 && h < 1.0) {
      weather = cvWeather(rel);
      if (weather.x > 0.0) {
        q = cvNoiseAt(rel);
        wide = cvWide(q);
        lod = smoothstep(0.5, 1.0, dt / cell);
        // Toward the hand-over distance the clouds give way to the far layer's.
        vec2 base = cvBaseShare(textureLod(u_cvShape, q * u_cvScale.x, 0.0).r, lod, wide, weather, h);
        d = base.x * (1.0 - smoothstep(u_cvFar.x, u_cvFar.y, t));
        f = base.y;
      }
    }
    if (d > 0.0 && stride > 1.0) {
      stride = 1.0;
      clearRun = 0.0;
      if (fi >= 1.0) {
        fi -= 1.0;
        continue;
      }
    }
    // The erosion's detail is finer than the shape: it gives way sooner, from an eighth of a shape cell between samples.
    float lodDetail = smoothstep(0.12, 0.5, dt / cell);
    if (d > 0.0 && u_cvLook.x > 0.0 && lodDetail < 0.5) d = cloudVolumeErode(d, textureLod(u_cvDetail, q * u_cvScale.z, 0.0).r, u_cvLook.x * (1.0 - 2.0 * lodDetail));
    if (d <= 0.0) {
      clearRun += 1.0;
      if (clearRun >= 3.0) stride = 2.0;
      fi += stride;
      continue;
    }
    clearRun = 0.0;
    fi += 1.0;
    // Toward the light: steps of 1, 3, 5, 7 … times the first step, so the samples reach out ever further.
    float tau = 0.0;
    float s0 = 0.0;
    for (int l = 0; l < 8; l++) {
      if (l >= lightSteps) break;
      float s1 = u_cvMarch.z * float((l + 1) * (l + 1));
      vec3 rl = rel + L * (0.5 * (s0 + s1));
      float hl = (cloudVolumeHeight(rl) - u_cvSlab.x) / thick;
      if (hl >= 1.0 || hl <= 0.0) break;
      tau += cvBase(textureLod(u_cvShape, cvNoiseAt(rl) * u_cvScale.x, 0.0).r, lod, wide, weather, hl) * (s1 - s0);
      s0 = s1;
    }
    // A raining cloud is denser: darker and heavier underneath.
    float dense = ext * (1.0 + ${$a} * weather.z);
    tau *= dense;
    vec3 s = cvSampleLight(tau, d, h, weather, ph, cosT);
    float sigma = d * dense;
    float ts = cvStepThrough(sigma, f, dt);
    float w = T * (1.0 - ts);
    light += s * w;
    dSum += t * w;
    wSum += w;
    T *= ts;
    if (T < 0.01) {
      T = 0.0;
      break;
    }
  }
  float alpha = (1.0 - T) * u_cvLook.w;
  if (alpha < 0.002) {
    o_color = vec4(0.0);
    o_info = cvPackInfo(${Ya}, entry, end);
    return;
  }
  float meanM = dSum / max(wSum, 1e-6);
  vec3 col = 0.92 * light / max(1.0 - T, 1e-4);
  vec3 at = u_cvEyeRender + dir * meanM;
  vec3 display = atmosphereApply(aerialPerspective(toDisplay(col), at), at);
  vec4 c = vec4(display * alpha, alpha);
  o_color = u_cvView.w > 0.5 ? sqrt(max(c, 0.0)) : c;
  o_info = cvPackInfo(meanM, entry, end);
}`}var go=`#include <header>
${Cr}
${lo}
${uo}
uniform highp sampler2D u_cvMarchColor;
uniform highp sampler2D u_cvMarchInfo;
uniform highp sampler2D u_cvHistColor;
uniform highp sampler2D u_cvHistInfo;
uniform vec4 u_cvBlock;      // xy the texel of each 2 × 2 block marched now, z 1: the last picture is kept, w most samples a texel averages
uniform vec4 u_cvKeep;       // x how far the range of the new samples around is widened for the last picture
uniform vec3 u_cvCloudMoved; // the eye's move since the last frame less the clouds' drift
// The fourth distance of a texel: 2 × the samples it averages + 1 where the last frame did not see where it ended.
vec4 cvInfo(float meanM, float entryM, float endM, float samples, float unseen) {
  return vec4(cvPackInfo(meanM, entryM, endM).xyz, samples * 2.0 + unseen);
}
layout(location = 0) out vec4 o_color;
layout(location = 1) out vec4 o_info;
void main() {
  ivec2 c = ivec2(gl_FragCoord.xy);
  ivec2 b = ivec2(u_cvBlock.xy);
  ivec2 last = textureSize(u_cvMarchColor, 0) - 1;
  ivec2 m = c / 2;
  bool fresh = c - m * 2 == b;
  vec3 dir = cvRay((vec2(c) + 0.5) / u_cvView.z);
  vec4 span = cloudVolumeSpan(u_cvEye, dir);
  bool layer = span.y > span.x;
  float entry = layer ? span.x : ${Ya};
  vec2 ends = cvRayEnd(span, dir);
  float end = ends.x;
  // Under the base with the rain drawn every ray may hold some (cvRayEnd).
  if (u_cvRain.y < 0.5 && (!layer || end <= span.x)) {
    o_color = vec4(0.0);
    o_info = cvInfo(${Ya}, entry, end, 0.0, ends.y);
    return;
  }
  // The four nearest marched texels (texel i of the march holds the block texel 2 i + b): the range the last picture
  // is held in. The distances of the nearest.
  vec2 mp = vec2(c - b) * 0.5;
  ivec2 i0 = ivec2(floor(mp));
  vec4 lo = vec4(1e9);
  vec4 hi = vec4(-1e9);
  for (int i = 0; i < 4; i++) {
    vec4 col = texelFetch(u_cvMarchColor, clamp(i0 + ivec2(i & 1, i >> 1), ivec2(0), last), 0);
    lo = min(lo, col);
    hi = max(hi, col);
  }
  vec3 Fi = cvUnpackInfo(texelFetch(u_cvMarchInfo, clamp(ivec2(floor(mp + 0.5)), ivec2(0), last), 0));
  if (u_cvBlock.z > 0.5) {
    // Where this texel's clouds lay in the last frame (at their mean distance, or halfway through the layer; 100 m at
    // least, so that the eye's small moves do not throw the cloud around the eye across the screen).
    float d = max(Fi.x < ${Xa} ? Fi.x : 0.5 * (span.x + end), 100.0);
    vec3 s = cloudVolumeReproject(cvSceneInverse(), u_cvCloudMoved, dir, d);
    vec2 uv = s.xy * 0.5 + 0.5;
    if (s.z > 0.0 && uv.x >= 0.0 && uv.y >= 0.0 && uv.x <= 1.0 && uv.y <= 1.0) {
      // The last frame saw the same surfaces there when one of the four texels around the place saw where this ray
      // enters the layer and where it ends, both seen from the last eye (the end only where both frames knew it).
      float e0 = entry > 0.0 ? length(u_cvSceneMoved + dir * entry) : 0.0;
      float z0 = length(u_cvSceneMoved + dir * end);
      ivec2 hsize = textureSize(u_cvHistInfo, 0);
      ivec2 h0 = ivec2(floor(uv * vec2(hsize) - 0.5));
      float match = 1e9;
      vec4 Hi = vec4(${Ya});
      for (int i = 0; i < 4; i++) {
        vec4 v = texelFetch(u_cvHistInfo, clamp(h0 + ivec2(i & 1, i >> 1), ivec2(0), hsize - 1), 0);
        vec3 hv = v.xyz * 1000.0;
        float a = max(cvApart(hv.y, e0), ends.y + mod(v.w, 2.0) > 0.5 ? 0.0 : cvApart(hv.z, z0));
        if (a < match) {
          match = a;
          Hi = vec4(hv, v.w);
        }
      }
      if (match < 0.05) {
        // Held within the range of the new samples around (widened), and the new sample averaged in.
        vec4 H = texture(u_cvHistColor, uv);
        vec4 pad = (hi - lo) * u_cvKeep.x + 0.01;
        H = clamp(H, lo - pad, hi + pad);
        float n = min(floor(Hi.w * 0.5) + (fresh ? 1.0 : 0.0), u_cvBlock.w);
        o_color = fresh ? mix(H, texelFetch(u_cvMarchColor, m, 0), 1.0 / max(n, 1.0)) : H;
        float meanM = fresh || Hi.x >= ${Xa} ? Fi.x : max(Hi.x - dot(u_cvCloudMoved, dir), 0.0);
        o_info = cvInfo(o_color.a < 0.002 ? ${Ya} : meanM, entry, end, n, ends.y);
        return;
      }
    }
  }
  // Without the last picture: a tent two march texels wide over the texels around, those of another surface (entry
  // and end) counting little.
  vec4 near = vec4(0.0);
  float wNear = 0.0;
  for (int i = 0; i < 16; i++) {
    ivec2 q = i0 + ivec2((i & 3) - 1, (i >> 2) - 1);
    vec2 dq = abs(vec2(q) - mp);
    if (q.x < 0 || q.y < 0 || q.x > last.x || q.y > last.y || max(dq.x, dq.y) >= 2.0) continue;
    vec3 inf = cvUnpackInfo(texelFetch(u_cvMarchInfo, q, 0));
    float w = (1.0 - 0.5 * dq.x) * (1.0 - 0.5 * dq.y) * (exp(-8.0 * max(cvApart(inf.y, entry), cvApart(inf.z, end))) + 1e-3);
    near += texelFetch(u_cvMarchColor, q, 0) * w;
    wNear += w;
  }
  o_color = near / max(wNear, 1e-6);
  o_info = cvInfo(Fi.x, entry, end, 1.0, ends.y);
}`,_o=`#include <header>
${Cr}
${lo}
uniform vec4 u_cvTiling; // x tiles across, y edge of a tile in pixels, z nearest depth along the view, w 1: the quad lies where the layer begins
void main() {
  int tile = gl_VertexID / 6;
  int k = gl_VertexID - tile * 6;
  int across = int(u_cvTiling.x);
  ivec2 t = ivec2(tile % across, tile / across);
  vec2 corner = vec2(k == 1 || k == 4 || k == 5 ? 1.0 : 0.0, k == 2 || k == 3 || k == 5 ? 1.0 : 0.0);
  vec2 p0 = vec2(t) * u_cvTiling.y;
  vec2 p1 = min(p0 + u_cvTiling.y, u_cvView.xy);
  vec2 px = mix(p0, p1, corner);
  vec2 ndc = px / u_cvView.xy * 2.0 - 1.0;
  if (u_cvTiling.w < 0.5) {
    gl_Position = vec4(ndc, 0.0, 1.0);
    return;
  }
  // The nearest the layer comes along the view in the tile and half a tile around (at the corners and the centre):
  // no cloud of the tile lies nearer. None of them in the layer: the tile is far from it.
  float z = 1e30;
  vec2 q0 = p0 - 0.5 * u_cvTiling.y;
  vec2 q1 = p1 + 0.5 * u_cvTiling.y;
  for (int i = 0; i < 5; i++) {
    vec2 p = i == 4 ? 0.5 * (q0 + q1) : mix(q0, q1, vec2(float(i & 1), float(i >> 1)));
    vec3 r = cvRayAt1(p);
    float lr = length(r);
    vec4 span = cloudVolumeSpan(u_cvEye, r / lr);
    z = min(z, span.y > span.x ? span.x / lr : 1e30);
  }
  if (z >= 1e29) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  z = clamp(z * 0.98, u_cvTiling.z, 1e9);
#ifdef WH_DEPTH_LOGARITHMIC
  float depth = u_camUp.w > 0.0 ? min(log2(1.0 + z) * u_camUp.w, 0.9999999) : 0.5;
  gl_Position = vec4(ndc, depth * 2.0 - 1.0, 1.0);
#else
  vec4 clip = u_viewProj * vec4(u_cvEyeRender + cvRayAt1(px) * z, 1.0);
  gl_Position = vec4(ndc, clamp(clip.z / clip.w, -1.0, 1.0), 1.0);
#endif
}`;function vo(e){return`#include <header>
${e?`#define WH_CV_TILE_DEPTH 1`:``}
${Cr}
${lo}
${uo}
uniform highp sampler2D u_cvColor;
uniform highp sampler2D u_cvInfo;
out vec4 o_color;
void main() {
  vec2 low = gl_FragCoord.xy * u_cvView.z - 0.5;
  vec2 fl = floor(low);
  vec2 f = low - fl;
  ivec2 b = ivec2(fl);
  ivec2 last = textureSize(u_cvColor, 0) - 1;
  // Four filtered taps half a texel around the pixel: a tent over the 3 × 3 nearest texels, which evens out what is
  // left of the jitter of the march. Where they hold no cloud the pixel is done.
  vec2 size = vec2(last + 1);
  vec4 tent = vec4(0.0);
  for (int i = 0; i < 4; i++) {
    vec2 o = vec2(float(i & 1) - 0.5, float(i >> 1) - 0.5);
    vec4 c = texture(u_cvColor, (low + 0.5 + o) / size);
    if (u_cvView.w > 0.5) c *= c;
    tent += c;
  }
  tent *= 0.25;
  if (tent.a < 1e-4) discard;
  vec3 dir = cvRay(gl_FragCoord.xy);
  vec4 span = cloudVolumeSpan(u_cvEye, dir);
  bool layer = span.y > span.x;
  float entry = layer ? span.x : ${Ya};
  // The four nearest texels: their distances, and whether they saw one surface with this pixel (where the ray
  // entered the layer and where it ended there).
  vec3 dd[4];
  float spread = 0.0;
  for (int i = 0; i < 4; i++) {
    ivec2 q = clamp(b + ivec2(i & 1, i >> 1), ivec2(0), last);
    dd[i] = cvUnpackInfo(texelFetch(u_cvInfo, q, 0));
    spread = max(spread, max(cvApart(dd[i].y, entry), cvApart(dd[i].z, dd[0].z)));
  }
  vec4 sum = vec4(0.0);
  float wSum = 0.0;
  float dSum = 0.0;
  float daSum = 0.0;
  if (spread < 0.02) {
#ifdef WH_CV_TILE_DEPTH
    // One surface, and the quad gave the pixel its depth: the tent.
    if (tent.a < 0.002) discard;
    o_color = tent;
    return;
#endif
    // One surface: the tent, and the distance of the nearest texels that hold a cloud (an empty texel keeps the far
    // distance).
    sum = tent;
    wSum = 1.0;
    for (int i = 0; i < 4; i++) {
      vec2 wb2 = mix(1.0 - f, f, vec2(float(i & 1), float(i >> 1)));
      float w = wb2.x * wb2.y * (dd[i].x < ${Xa} ? 1.0 : 1e-4);
      dSum += dd[i].x * w;
      daSum += w;
    }
  } else {
    // The edge of the planet, of the layer or of a ridge: only the nearest texels whose entry and end match this
    // pixel's own.
    float end = cvRayEnd(span, dir).x;
    for (int i = 0; i < 4; i++) {
      vec4 c = texelFetch(u_cvColor, clamp(b + ivec2(i & 1, i >> 1), ivec2(0), last), 0);
      if (u_cvView.w > 0.5) c *= c;
      vec2 wb2 = mix(1.0 - f, f, vec2(float(i & 1), float(i >> 1)));
      float r = max(cvApart(dd[i].y, entry), u_cvView.w > 0.5 ? 0.0 : cvApart(dd[i].z, end));
      float w = wb2.x * wb2.y * (exp(-8.0 * r) + 1e-4);
      sum += c * w;
      wSum += w;
      dSum += dd[i].x * w * c.a;
      daSum += w * c.a;
    }
  }
  vec4 c = sum / wSum;
  if (c.a < 0.002) discard;
#ifndef WH_CV_TILE_DEPTH
  float meanM = dSum / max(daSum, 1e-6);
  vec4 clip = u_viewProj * vec4(u_cvEyeRender + dir * meanM, 1.0);
#if defined(WH_DEPTH_LOGARITHMIC)
  float z = u_camUp.w > 0.0 ? log2(1.0 + max(clip.w, 0.0)) * u_camUp.w : clip.z / clip.w * 0.5 + 0.5;
  z = min(z, 0.9999999);
#elif defined(WH_DEPTH_REVERSED)
  float z = max(clip.z / clip.w, 1e-7);
#else
  float z = min(clip.z / clip.w * 0.5 + 0.5, 0.9999999);
#endif
  gl_FragDepth = clamp(z, 0.0, 1.0);
#endif
  o_color = c;
}`}var yo=1,bo={edge:1,selfShadow:1,even:0,lit:[1,1,1],shade:[1,1,1]},xo=()=>({valid:!1,width:0,height:0,rel:[0,0,0],forward:[0,0,1],rays:[1,0,0,0,1,0,0,0,1],inverse:[1,0,0,0,1,0,0,0,1],depthMap:[0,0,0,0],driftX:0,driftZ:0}),So=class{name=`cloud-volume`;shape;style={...bo};quality;fadeFromM;fadeToM;maxDistanceM;handoverFromM;handoverToM;history;enabled=!0;shell=null;rainShare=1;rainShafts=1;noise;weather;weight=0;shadowSamples=12;shadowDepthGlsl=mo;renderer;link;atmosphere;seed;fieldParams;far=[0,0,0,0];gain=1;march;accumulate;composites={};marchTarget=null;historyTargets=null;picture=null;current=0;format=`rgba16f`;drawn=!1;historyValid=!1;historyFailed=!1;index=0;sceneTexture=null;tileDepth=!1;under=!1;rays={center:[0,0,1],right:[1,0,0],up:[0,1,0],eye:[0,0,0],rel:[0,0,0]};ref=[0,0,0,0];prev=xo();now=xo();scene={inverse:[1,0,0,0,1,0,0,0,1],rays:[1,0,0,0,1,0,0,0,1],moved:[0,0,0],cloudMoved:[0,0,0],map:[0,0,0,0]};constructor(e,t,n={}){this.renderer=e,this.link=t,this.atmosphere=n.atmosphere??null;let{quality:r,fadeFromM:i,fadeToM:a,maxDistanceM:o,handoverFromM:s,handoverToM:c,history:l,seed:u,weather:d,atmosphere:f,...p}=n;this.shape={...Jn,...p},this.quality={...Yn.medium,...typeof r==`string`?Yn[r]:r??{}},this.fadeFromM=i??15e3,this.fadeToM=a??3e4,this.maxDistanceM=o??12e4,this.handoverFromM=s??2e4,this.handoverToM=c??4e4,this.history=l??!0;let m=e.device;this.seed=u??0,this.noise=new da(m,{seed:this.seed}),this.weather=new Fa(e,t,d??{});let h=t.block.slots.find(e=>e.name===Fn);this.fieldParams=h&&e.radialUp?()=>h.params:null;let g=h!==void 0;this.march=m.program(`cloud volume march`,co,e.resolve(ho(g),`other`)),this.accumulate=m.program(`cloud volume accumulate`,co,e.resolve(go,`other`))}get frameIndex(){return this.index}set frameIndex(e){this.index=e,this.historyValid=!1}resetHistory(){this.historyValid=!1}bindShadowDepth(e){if(this.weight<=0||!this.noise.ready)return null;let t=this.renderer,n=t.upCenter(),r=t.worldOrigin,i=this.shape;return this.noise.bind(e,Ia,La),this.weather.bind(e,Ra),{u_cvRef:{vec4:n?[n[0],n[1],n[2],t.radialUp?t.radialUp.radiusM:0]:[-r[0],-r[1],-r[2],0]},u_cvSlab:{vec4:[i.baseM,i.topM,i.extinctionPerM,this.maxDistanceM]},u_cvShape:{int:Ia},u_cvWeather:{int:Ra},u_cvTile:{vec4:this.weather.tile},u_cvScale:{vec4:[1/i.shapeSizeM,1/i.wideSizeM,1/i.detailSizeM,i.wideCover]},u_cvShadow:{vec4:[Math.max(1,Math.min(32,Math.round(this.shadowSamples))),this.weight,0,0]},u_cvEdge:{float:Math.max(.01,this.style.edge)-1}}}unbindShadowDepth(e){e.volumeTexture(Ia,null),e.volumeTexture(La,null),this.weather.cube?e.cubeTexture(Ra,null):e.texture(Ra,null)}bindField(e){if(!this.noise.ready)return null;let t=this.shape;return this.noise.bind(e,Ia,La),this.weather.bind(e,Ra),e.texture(qa,null),{u_cvRef:{vec4:this.ref},u_cvSlab:{vec4:[t.baseM,t.topM,t.extinctionPerM,1e9]},u_cvShape:{int:Ia},u_cvWeather:{int:Ra},u_cvTile:{vec4:this.weather.tile},u_cvScale:{vec4:[1/t.shapeSizeM,1/t.wideSizeM,1/t.detailSizeM,t.wideCover]},u_cvFar:{vec4:[this.far[0],this.far[1],this.weight,0]},u_cvLook:{vec4:[0,this.gain,yo,1]},...this.styleUniforms()}}styleUniforms(){let{edge:e,selfShadow:t,even:n,lit:r,shade:i}=this.style;return{u_cvEdge:{float:Math.max(.01,e)-1},u_cvLit:{vec4:[r[0]-1,r[1]-1,r[2]-1,Math.max(0,t)-1]},u_cvShade:{vec4:[i[0]-1,i[1]-1,i[2]-1,Math.min(1,Math.max(0,n))]}}}unbindField(e){this.unbindShadowDepth(e),e.texture(qa,null)}columnAbove(e,t){let n=this.shape,r=this.link.frame,i=Math.hypot(e[0],e[1],e[2]),a=t>0&&i>0?[e[0]/i,e[1]/i,e[2]/i]:[0,1,0],o=t>0&&this.fieldParams?Vn(this.fieldParams(),a,t):r?.cloudCover??0;if(o<=0)return 0;let s=r?.cloudX??0,c=r?.cloudZ??0,l=e=>e-Math.floor(e);return ur(r=>{let i=n.baseM+r*(n.topM-n.baseM),o=t>0?[a[0]*(t+i),a[1]*(t+i),a[2]*(t+i)]:[e[0],i,e[2]],u=[o[0]-s,o[1],o[2]-c];return[Ce(l(u[0]/n.shapeSizeM),l(u[1]/n.shapeSizeM),l(u[2]/n.shapeSizeM),fe,this.seed),Ce(l(u[0]/n.wideSizeM+.37),l(u[1]/n.wideSizeM+.11),l(u[2]/n.wideSizeM+.73),fe,this.seed)]},o,sr(o,this.weather.rules),n)}get targetTextures(){return this.picture}prepare(e,t){if(this.drawn=!1,this.sceneTexture=null,t.pixelGrowth<=0){this.weight=0,this.handOver(),this.prev.valid=!1,this.historyValid=!1;return}let n=this.renderer,r=this.rays,i=t.cornerRays(),a=i[0].origin;r.eye=[a[0],a[1],a[2]];let o=n.upCenter(),s=o&&n.radialUp?n.radialUp.radiusM:0,c=n.worldOrigin,l=o??[-c[0],-c[1],-c[2]];this.ref[0]=l[0],this.ref[1]=l[1],this.ref[2]=l[2],this.ref[3]=s,r.rel=[a[0]-l[0],a[1]-l[1],a[2]-l[2]];let u=t.axes().forward,[d,f,p]=i.map(e=>{let t=1/(e.dir[0]*u[0]+e.dir[1]*u[1]+e.dir[2]*u[2]);return[e.dir[0]*t,e.dir[1]*t,e.dir[2]*t]});r.right=[(p[0]-d[0])/2,(p[1]-d[1])/2,(p[2]-d[2])/2],r.up=[(f[0]-d[0])/2,(f[1]-d[1])/2,(f[2]-d[2])/2],r.center=[d[0]+r.right[0]+r.up[0],d[1]+r.right[1]+r.up[1],d[2]+r.right[2]+r.up[2]],this.noteCamera(t,u,n);let m=s>0?Math.hypot(r.rel[0],r.rel[1],r.rel[2])-s:r.rel[1];this.weight=this.enabled?mr(m,this.fadeFromM,this.fadeToM):0,this.under=this.rainShafts>0&&m<this.shape.baseM;let h=this.link.frame?.cloudCover??0;if(this.gain=1/Math.max(qt(h,0).sunShare,.001),this.enabled?(this.weather.prepare(e,t),this.noise.prepare(e,t),this.rainShare=dr(this.columnAbove(r.rel,s))):this.rainShare=1,this.weight<=0||!this.noise.ready||!this.ensureTargets(e,t)){this.weight=0,this.handOver(),this.endFrame(!1);return}this.handOver();let g=this.shape,_=this.quality,v=this.historyTargets!==null,y=this.prev,b=this.now,x=this.scene,S=y.valid&&y.width===b.width&&y.height===b.height;x.map=[0,0,0,0],S&&(this.sceneTexture=e.sceneDepth(),this.sceneTexture&&(x.map=y.depthMap)),x.inverse=y.inverse,x.rays=y.rays,x.moved=[b.rel[0]-y.rel[0],b.rel[1]-y.rel[1],b.rel[2]-y.rel[2]],x.cloudMoved=[x.moved[0]-(b.driftX-y.driftX),x.moved[1],x.moved[2]-(b.driftZ-y.driftZ)];let C=m<g.baseM?g.baseM-m:m>g.topM?m-g.topM:0,w=b.forward[0]*y.forward[0]+b.forward[1]*y.forward[1]+b.forward[2]*y.forward[2],T=Math.hypot(x.moved[0],x.moved[1],x.moved[2]),E=v&&this.historyValid&&S&&Sr(T,C,w),D=T<.01&&w>.9999999;this.tileDepth=this.format===`rgba16f`&&e.depthMode!==`standard`&&!this.under;let O=this.gain,k=Math.max(1,Math.min(8,Math.round(_.lightSteps))),A=Math.min(.65*(g.topM-g.baseM),2e3),[j,M]=_r(this.index);this.noise.bind(e,Ia,La),this.weather.bind(e,Ra),this.atmosphere?.bindTables(e),e.texture(za,this.sceneTexture),e.texture(qa,null);let N=this.marchTarget;if(e.fill(N,this.march,{...this.viewUniforms(t),...this.sceneUniforms(za),u_cvShape:{int:Ia},u_cvDetail:{int:La},u_cvWeather:{int:Ra},u_cvTile:{vec4:this.weather.tile},u_cvScale:{vec4:[1/g.shapeSizeM,1/g.wideSizeM,1/g.detailSizeM,g.wideCover]},u_cvLook:{vec4:[_.detail?g.erosion:0,O,yo,this.weight]},...this.styleUniforms(),u_cvFar:{vec4:this.far},u_cvMarch:{vec4:[Math.max(1,Math.min(128,Math.round(_.steps))),k,A/(k*k),v?Math.floor(this.index/4):this.index]},u_cvBlock:{vec4:[j,M,v?2:1,0]}}),e.volumeTexture(Ia,null),e.volumeTexture(La,null),this.weather.cube?e.cubeTexture(Ra,null):e.texture(Ra,null),e.texture(za,null),this.picture=N,this.historyTargets){let n=this.historyTargets[this.current],r=this.historyTargets[1-this.current];e.texture(Ba,N.textures[0]),e.texture(Va,N.textures[1]),e.texture(Ha,n.textures[0]),e.texture(Ua,n.textures[1]),e.texture(Wa,this.sceneTexture),e.texture(qa,null),e.fill(r,this.accumulate,{...this.viewUniforms(t),...this.sceneUniforms(Wa),u_cvMarchColor:{int:Ba},u_cvMarchInfo:{int:Va},u_cvHistColor:{int:Ha},u_cvHistInfo:{int:Ua},u_cvBlock:{vec4:[j,M,+!!E,D?ao:oo]},u_cvKeep:{vec4:[D?1.5:.5,0,0,0]},u_cvCloudMoved:{vec3:x.cloudMoved}});for(let t of[Ba,Va,Ha,Ua,Wa])e.texture(t,null);this.current=1-this.current,this.picture=r}this.drawn=!0,this.endFrame(v)}handOver(){let e=this.shell,t=e!==null&&e.volume!==void 0&&this.enabled&&this.noise.ready&&this.ref[3]>0,n=t?Math.min(this.handoverToM,this.maxDistanceM):this.maxDistanceM;this.far[0]=t?Math.min(this.handoverFromM,n*.999):.8*n,this.far[1]=n,this.far[2]=this.weight,e&&(e.volume!==void 0&&(e.volume=t?this:null),e.opacity=t?1:1-this.weight)}noteCamera(e,t,n){let r=this.rays,i=this.now;i.valid=!0,i.width=e.width,i.height=e.height,i.rel=[r.rel[0],r.rel[1],r.rel[2]],i.forward=[t[0],t[1],t[2]],i.rays=[...r.center,...r.right,...r.up];let a=br(r.center,r.right,r.up);a?i.inverse=a:i.valid=!1;let o=n.projection;i.depthMap=xr(n.device.depthMode,o.viewProj,o.logScale),i.driftX=this.link.frame?.cloudX??0,i.driftZ=this.link.frame?.cloudZ??0}endFrame(e){let t=this.prev;this.prev=this.now,this.now=t,this.historyValid=e,e&&this.index++}viewUniforms(e){let t=this.rays,n=this.shape,r=this.picture??this.marchTarget,i=this.historyTargets?this.historyTargets[0].width:r?.width??e.width;return{u_cvRef:{vec4:this.ref},u_cvSlab:{vec4:[n.baseM,n.topM,n.extinctionPerM,this.maxDistanceM]},u_cvView:{vec4:[e.width,e.height,i/e.width,+(this.format===`rgba8`)]},u_cvEye:{vec3:t.rel},u_cvEyeRender:{vec3:t.eye},u_cvRayCenter:{vec3:t.center},u_cvRayRight:{vec3:t.right},u_cvRayUp:{vec3:t.up},u_cvRain:{vec4:[Math.max(0,this.rainShafts)*no,+!!this.under,Math.min(this.far[1],io),0]}}}sceneUniforms(e){let t=this.scene,n=t.inverse,r=t.rays;return{u_cvScene:{int:e},u_cvSceneInv0:{vec3:[n[0],n[1],n[2]]},u_cvSceneInv1:{vec3:[n[3],n[4],n[5]]},u_cvSceneInv2:{vec3:[n[6],n[7],n[8]]},u_cvSceneCenter:{vec3:[r[0],r[1],r[2]]},u_cvSceneRight:{vec3:[r[3],r[4],r[5]]},u_cvSceneUp:{vec3:[r[6],r[7],r[8]]},u_cvSceneMoved:{vec3:t.moved},u_cvSceneMap:{vec4:this.sceneTexture?t.map:[0,0,0,0]}}}ensureTargets(e,t){let n=Math.min(1,Math.max(.1,this.quality.scale)),[r,i]=hr(t.width,t.height,n),a=this.history&&this.format===`rgba16f`&&!this.historyFailed,[o,s]=vr(r,i,a),c=this.marchTarget,l=this.historyTargets;if(c&&c.width===o&&c.height===s&&c.textures[0]&&(a?l!==null&&l[0].width===r&&l[0].height===i:l===null))return!0;this.dropTargets(e),this.historyValid=!1;let u=e.colorTarget(o,s,2,`rgba16f`);if(this.format=`rgba16f`,!u){this.format=`rgba8`;let[t,n]=vr(r,i,!1);u=e.colorTarget(t,n,2,`rgba8`)}if(!u)return!1;if(this.marchTarget=u,a&&this.format===`rgba16f`){let t=e.colorTarget(r,i,2,`rgba16f`),n=e.colorTarget(r,i,2,`rgba16f`);if(t&&n)this.historyTargets=[t,n];else{t&&e.deleteColorTarget(t),n&&e.deleteColorTarget(n),this.historyFailed=!0,e.deleteColorTarget(u);let a=e.colorTarget(r,i,2,`rgba16f`);if(!a)return!1;this.marchTarget=a}}return!0}dropTargets(e){if(this.marchTarget&&e.deleteColorTarget(this.marchTarget),this.historyTargets)for(let t of this.historyTargets)e.deleteColorTarget(t);this.marchTarget=null,this.historyTargets=null,this.picture=null}composite(){let e=this.tileDepth?`tile`:`fragment`,t=this.composites[e];if(!t){let n=this.renderer;t=n.device.program(`cloud volume composite (${e})`,n.resolve(_o,`other`),n.resolve(vo(this.tileDepth),`other`)),this.composites[e]=t}return t}draw(e){let t=this.picture;if(e.pass!==`color`||!this.drawn||!t)return;let n=e.device,r=this.composite();n.setState({depthTest:!0,depthWrite:!1,cullBack:!1,blend:{src:`one`,dst:`one-minus-src-alpha`},alphaToCoverage:!1,polygonOffset:null}),n.use(r);let i={...this.viewUniforms(e.view),...this.sceneUniforms(za)};for(let e in i)r.set(e,i[e]);let[a,o]=yr(t.width,t.height);r.set(`u_cvTiling`,{vec4:[a,8/(t.width/e.view.width),this.renderer.depthNearM*1.5,+!!this.tileDepth]}),n.texture(Ga,t.textures[0]),n.texture(Ka,t.textures[1]),n.texture(za,this.sceneTexture),r.int(`u_cvColor`,Ga),r.int(`u_cvInfo`,Ka),n.drawVertices(a*o*6);for(let e of[Ga,Ka,za,qa])n.texture(e,null);e.count(2*a*o)}dispose(){this.noise.dispose(),this.dropTargets(this.renderer.device)}},Co=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 1.0, 1.0);
}`,wo=`#include <header>
#include <noise>
#include <sky>
uniform vec3 u_rayCenter; // view ray through the screen centre, scaled so that its depth along the view is 1
uniform vec3 u_rayRight;  // change of the ray from the centre to the right edge
uniform vec3 u_rayUp;     // change of the ray from the centre to the top edge
uniform vec2 u_screen;    // drawing surface in physical pixels
out vec4 o_color;
void main() {
  vec2 s = gl_FragCoord.xy / u_screen * 2.0 - 1.0;
  vec3 dir = normalize(u_rayCenter + u_rayRight * s.x + u_rayUp * s.y);
  o_color = vec4(skyView(dir), 1.0);
}`,To={depthTest:!0,depthFunc:`lequal`,depthWrite:!1,cullBack:!1},Eo={depthTest:!1,depthWrite:!1,cullBack:!1},Do=class{name=`sky`;slot;behindScene=!1;renderer;program;behindProgram=null;axes=l();rays=u();eye=[0,0,0];clouds;constructor(e,t,n={}){this.slot=t,this.renderer=e,this.clouds=n.clouds??!0,this.program=e.device.program(`sky`,Co,this.source(`main`)),e.beforeFrame.unshift(e=>{if(e.pixelGrowth<=0){t.params.eye=null;return}let n=e.cornerRays(this.rays)[0].origin,r=this.eye;r[0]=n[0],r[1]=n[1],r[2]=n[2],t.params.eye=r})}source(e){let t=this.renderer.resolve(wo,e);if(this.clouds)return t;let n=`vec4 cl = skyClouds(dir);`;if(!t.includes(n))throw Error(`SkyLayer: the sky shader has no cloud deck to leave out`);return t.replace(n,`vec4 cl = vec4(0.0);`)}behind(){if(this.behindProgram)return this.behindProgram;let e=this.renderer,t=e.depthMode===`reversed`?`0.0`:`1.0`,n=Co.replace(`gl_Position = vec4(p * 2.0 - 1.0, 1.0, 1.0);`,`gl_Position = vec4(p * 2.0 - 1.0, ${t}, 1.0);`);return this.behindProgram=e.device.program(`sky behind`,n,this.source(e.depthMode===`logarithmic`?`other`:`main`)),this.behindProgram}draw(e){let t=e.view;if(e.pass!==`color`||t.pixelGrowth<=0)return;let n=t.axes(this.axes).forward,r=t.cornerRays(this.rays),i=r[0].dir,a=r[1].dir,o=r[2].dir,s=1/(i[0]*n[0]+i[1]*n[1]+i[2]*n[2]),c=1/(a[0]*n[0]+a[1]*n[1]+a[2]*n[2]),l=1/(o[0]*n[0]+o[1]*n[1]+o[2]*n[2]),u=i[0]*s,d=i[1]*s,f=i[2]*s,p=(o[0]*l-u)/2,m=(o[1]*l-d)/2,h=(o[2]*l-f)/2,g=(a[0]*c-u)/2,_=(a[1]*c-d)/2,v=(a[2]*c-f)/2,y=this.behindScene?this.behind():this.program;e.device.setState(this.behindScene?To:Eo),e.device.use(y),y.vec3(`u_rayCenter`,u+p+g,d+m+_,f+h+v),y.vec3(`u_rayRight`,p,m,h),y.vec3(`u_rayUp`,g,_,v),y.vec2(`u_screen`,t.width,t.height),e.device.drawFullscreen(),e.count(1)}},Oo={width:64,height:128},ko=Oo.width.toFixed(1),Ao=(Oo.height/2).toFixed(1),jo=1,Mo=`
const float ATM_PI = 3.14159265;
struct AtmSkyFrame {
  vec3 ro;       // the eye relative to the centre of the sphere
  vec3 up;       // unit up at the eye
  vec3 toSun;    // unit and level at the eye, toward the sun
  vec3 side;     // unit and level, square to both
  float r0;      // distance of the eye from the centre
  float h;       // height of the eye above the ground sphere
  float horizon; // angle from straight up to the horizon of the ground sphere
  float top;     // angle from straight up to the first direction with air: 0 inside the shell, its rim from above
};
AtmSkyFrame atmSkyFrame() {
  AtmSkyFrame f;
  f.ro = atmEye(f.h);
  float Rg = u_atmShell.x;
  float Rt = u_atmShell.y;
  f.r0 = Rg + f.h;
  f.up = f.ro / f.r0;
  vec3 s = u_atmSun.xyz - f.up * dot(u_atmSun.xyz, f.up);
  // With the sun straight above or below the sky is the same all the way round: any level direction serves.
  if (dot(s, s) < 1e-8) s = cross(f.up, abs(f.up.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0));
  f.toSun = normalize(s);
  f.side = cross(f.up, f.toSun);
  // Both angles from lengths that stay exact a metre above the ground and a metre above the air.
  f.horizon = 0.5 * ATM_PI + atan(sqrt(f.h * (2.0 * Rg + f.h)), Rg);
  f.top = f.r0 > Rt ? ATM_PI - atan(Rt, sqrt((f.r0 - Rt) * (f.r0 + Rt))) : 0.0;
  return f;
}
`,No=`#include <header>
#include <atmosphere>
${Mo}
layout(location = 0) out vec4 o_base;
layout(location = 1) out vec4 o_mie;
layout(location = 2) out vec4 o_through;
void main() {
  AtmSkyFrame f = atmSkyFrame();
  vec2 cell = floor(gl_FragCoord.xy);
  bool down = cell.y < ${Ao};
  float c = (down ? cell.y : cell.y - ${Ao}) / (${Ao} - 1.0);
  float theta = down ? f.horizon + c * c * (ATM_PI - f.horizon) : f.horizon - c * c * (f.horizon - f.top);
  float cosPhi = cell.x / (${ko} - 1.0) * 2.0 - 1.0;
  float mu = cos(theta);
  vec3 dir = f.up * mu + (f.toSun * cosPhi + f.side * sqrt(max(1.0 - cosPhi * cosPhi, 0.0))) * sin(theta);
  // The piece of the ray inside the shell; the half of the table says whether it ends on the ground, so the two
  // rows at the horizon hold the two sides of that line.
  float Rt = u_atmShell.y;
  float b = f.r0 * mu;
  float sq = sqrt(max(b * b - (f.r0 - Rt) * (f.r0 + Rt), 0.0));
  float t0 = max(-b - sq, 0.0);
  float t1 = -b + sq;
  if (down) t1 = min(t1, -b - sqrt(max(b * b - f.h * (2.0 * u_atmShell.x + f.h), 0.0)));
  vec3 mie = vec3(0.0);
  vec3 through = vec3(1.0);
  vec3 base = vec3(0.0);
  if (u_atmSun.w > 0.0 && t1 > t0) base = atmSegmentParts(f.ro + dir * t0, dir, t1 - t0, ATM_SKY_STEPS, mie, through);
  o_base = vec4(base, 1.0);
  o_mie = vec4(mie, 1.0);
  o_through = vec4(through, 1.0);
}`,Po=`#include <header>
#include <noise>
#include <atmosphere>
${Mo}
uniform highp sampler2D u_atmSkyBase;    // sky table: light of molecules and light scattered more than once
uniform highp sampler2D u_atmSkyMie;     // sky table: light of particles before its phase value
uniform highp sampler2D u_atmSkyThrough; // sky table: share of light from behind the air that passes
uniform float u_atmMarch; // 1: every pixel integrates its own ray, 0: the sky table is read
uniform vec3 u_rayCenter; // view ray through the screen centre, scaled so that its depth along the view is 1
uniform vec3 u_rayRight;  // change of the ray from the centre to the right edge
uniform vec3 u_rayUp;     // change of the ray from the centre to the top edge
uniform vec2 u_screen;    // drawing surface in physical pixels
out vec4 o_color;

// Stars: at most one per cell of a cube-map grid over the directions, from an integer hash. Fixed in the world and
// never narrower than a pixel.
float atmStars(vec3 dir, float pixelAngle) {
  vec3 a = abs(dir);
  vec2 uv;
  uint face;
  float major;
  if (a.x >= a.y && a.x >= a.z) { uv = dir.zy / a.x; face = dir.x > 0.0 ? 0u : 1u; major = a.x; }
  else if (a.y >= a.z) { uv = dir.xz / a.y; face = dir.y > 0.0 ? 2u : 3u; major = a.y; }
  else { uv = dir.xy / a.z; face = dir.z > 0.0 ? 4u : 5u; major = a.z; }
  const float CELLS = 160.0;
  vec2 g = (uv * 0.5 + 0.5) * CELLS;
  vec2 cf = floor(g);
  ivec2 cell = ivec2(cf);
  uint seed = 400u + face * 8u;
  if (hash2(cell, seed) > 0.3) return 0.0;
  vec2 at = 0.2 + 0.6 * vec2(hash2(cell, seed + 1u), hash2(cell, seed + 2u));
  float m = hash2(cell, seed + 3u);
  float bright = 0.12 + 0.88 * m * m * m * m;
  float px = pixelAngle * CELLS * 0.5 / major;
  float r = max(0.8 * px, 0.01);
  vec2 off = g - cf - at;
  return bright * exp(-dot(off, off) / (r * r));
}

// The air along a view ray from the eye, read from the sky table: what atmosphereSky gives.
vec3 atmSkyRead(vec3 dir, out vec3 through, out float ground) {
  through = vec3(1.0);
  ground = 0.0;
  if (u_atmSun.w <= 0.0) return vec3(0.0);
  AtmSkyFrame f = atmSkyFrame();
  float Rt = u_atmShell.y;
  float mu = dot(dir, f.up);
  float b = f.r0 * mu;
  float ct = (f.r0 - Rt) * (f.r0 + Rt);
  // No air along the ray: it passes the shell by, or the shell lies behind an eye above it.
  if (b * b - ct <= 0.0 || (ct > 0.0 && b >= 0.0)) return vec3(0.0);
  bool down = b < 0.0 && b * b - f.h * (2.0 * u_atmShell.x + f.h) > 0.0;
  ground = down ? 1.0 : 0.0;
  float theta = acos(clamp(mu, -1.0, 1.0));
  float x = down ? (theta - f.horizon) / (ATM_PI - f.horizon) : (f.horizon - theta) / (f.horizon - f.top);
  float row = sqrt(clamp(x, 0.0, 1.0)) * (${Ao} - 1.0) + (down ? 0.0 : ${Ao});
  vec3 level = dir - f.up * mu;
  float l = length(level);
  float cosPhi = l > 1e-5 ? dot(level, f.toSun) / l : 1.0;
  vec2 at = (vec2((cosPhi * 0.5 + 0.5) * (${ko} - 1.0), row) + 0.5) / vec2(${ko}, 2.0 * ${Ao});
  through = textureLod(u_atmSkyThrough, at, 0.0).rgb;
  return textureLod(u_atmSkyBase, at, 0.0).rgb + textureLod(u_atmSkyMie, at, 0.0).rgb * atmPhaseMie(dot(dir, u_atmSun.xyz));
}

void main() {
  vec2 s = gl_FragCoord.xy / u_screen * 2.0 - 1.0;
  vec3 dir = normalize(u_rayCenter + u_rayRight * s.x + u_rayUp * s.y);
  float pa = max(length(fwidth(dir)), 1e-5);
  vec3 through;
  float ground;
  vec3 light;
  if (u_atmMarch > 0.5) light = atmosphereSky(dir, through, ground);
  else light = atmSkyRead(dir, through, ground);
  vec3 c = atmDisplay(light);
#ifdef WH_ATM_PAINT
  c = atmospherePaintSky(dir, c);
#endif
  // Behind the air, where the ground sphere is not in the way: the stars, lost in a bright sky, and the sun's disc,
  // so bright that only a long way through the air gives it a colour.
  float behind = 1.0 - ground;
  float dark = 1.0 - max(c.r, max(c.g, c.b));
  dark *= dark;
  c += vec3(0.88, 0.92, 1.0) * through * (atmStars(dir, pa) * u_atmTune.w * dark * dark * behind);
  float rs = u_atmShell.w;
  float disc = (1.0 - smoothstep(rs - pa, rs + pa, length(dir - u_atmSun.xyz))) * behind;
  vec3 lit = c + (1.0 - c) * (1.0 - exp(-through * 30.0));
#ifdef WH_ATM_PAINT
  // The painted disc: one colour while any of the sun passes the air.
  lit = mix(lit, u_atmPaintSun.rgb, u_atmPaintZenith.w * (1.0 - exp(-max(through.r, through.g) * 30.0)));
#endif
  c = mix(c, lit, disc);
  o_color = vec4(c, 1.0);
}`,Fo=class{name=`atmosphere`;slot;renderer;program;tables;sky;skyProgram;filledFrom=null;constructor(e,t){this.slot=t,this.renderer=e,this.tables=e.device.createTexture(t.tables.texture),e.device.fixSampler(`u_atmTables`,14),this.program=e.device.program(`atmosphere`,Co,e.resolve(Po)),this.sky=e.device.colorTarget(Oo.width,Oo.height,3,`rgba16f`),this.skyProgram=this.sky?e.device.program(`atmosphere sky table`,Co,e.resolve(No,`other`)):null,e.device.onRestored(()=>this.filledFrom=null),e.beforeFrame.unshift(n=>{let r=Io(n),i=t.params;if(i.eye=r,!r)return;let a=e.upCenter();i.eyeHeightM=a?Math.hypot(r[0]-a[0],r[1]-a[1],r[2]-a[2])-t.medium.radiusM:r[1]-i.groundY})}bindTables(e){e.texture(14,this.tables),e.texture(13,null)}get usesSkyTable(){return this.sky!==null&&!this.slot.params.reference}prepare(e,t){let n=this.slot.params;this.sky&&this.skyProgram&&(!this.usesSkyTable||t.pixelGrowth<=0||!(n.exposure>0)?this.filledFrom=null:this.frameChanged()&&(e.texture(14,this.tables),e.texture(13,null),e.fill(this.sky,this.skyProgram)))}frameChanged(){let{afterLight:e,afterView:t}=this.renderer.frameSlots,n=this.renderer.upCenter()??[0,0,0],r=e.length+t.length+3,i=this.filledFrom,a=!1;i&&i.length===r||(i=this.filledFrom=new Float32Array(r),a=!0);let o=0;for(let r of[e,t,n])for(let e=0;e<r.length;e++,o++){let t=Math.fround(r[e]);i[o]!==t&&(i[o]=t,a=!0)}return a}draw(e){if(e.pass!==`color`)return;let t=e.view;if(e.device.texture(14,this.tables),e.device.texture(13,null),t.pixelGrowth<=0)return;let n=t.axes().forward,[r,i,a]=t.cornerRays().map(e=>{let t=1/(e.dir[0]*n[0]+e.dir[1]*n[1]+e.dir[2]*n[2]);return[e.dir[0]*t,e.dir[1]*t,e.dir[2]*t]}),o=[(a[0]-r[0])/2,(a[1]-r[1])/2,(a[2]-r[2])/2],s=[(i[0]-r[0])/2,(i[1]-r[1])/2,(i[2]-r[2])/2],c=[r[0]+o[0]+s[0],r[1]+o[1]+s[1],r[2]+o[2]+s[2]];e.device.setState({depthTest:!1,depthWrite:!1,cullBack:!1}),e.device.use(this.program),this.program.set(`u_rayCenter`,{vec3:c}),this.program.set(`u_rayRight`,{vec3:o}),this.program.set(`u_rayUp`,{vec3:s}),this.program.set(`u_screen`,{vec2:[t.width,t.height]});let l=this.usesSkyTable?this.sky:null,u=[`u_atmSkyBase`,`u_atmSkyMie`,`u_atmSkyThrough`];u.forEach((t,n)=>{e.device.texture(jo+n,l?l.textures[n]:this.tables),this.program.int(t,jo+n)}),this.program.float(`u_atmMarch`,+!l),e.device.drawFullscreen(),u.forEach((t,n)=>e.device.texture(jo+n,null)),e.device.texture(13,null),e.count(1)}};function Io(e){if(e.pixelGrowth<=0)return null;let t=e.cornerRays()[0].origin;return[t[0],t[1],t[2]]}var Lo=new TextEncoder,Ro=new TextDecoder,zo=class{buf=new Uint8Array(1024);view=new DataView(this.buf.buffer);at=0;room(e){if(this.at+e<=this.buf.length)return;let t=this.buf.length*2;for(;t<this.at+e;)t*=2;let n=new Uint8Array(t);n.set(this.buf.subarray(0,this.at)),this.buf=n,this.view=new DataView(n.buffer)}get length(){return this.at}u8(e){this.room(1),this.view.setUint8(this.at,e),this.at+=1}i32(e){this.room(4),this.view.setInt32(this.at,e,!0),this.at+=4}u32(e){this.room(4),this.view.setUint32(this.at,e,!0),this.at+=4}f64(e){this.room(8),this.view.setFloat64(this.at,e,!0),this.at+=8}str(e){let t=Lo.encode(e);this.u32(t.length),this.bytes(t)}bytes(e){let t=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.room(t.length),this.buf.set(t,this.at),this.at+=t.length}finish(){return this.buf.slice(0,this.at)}},Bo=class{bytesIn;view;at=0;constructor(e){this.bytesIn=e,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}get done(){return this.at>=this.bytesIn.length}u8(){let e=this.view.getUint8(this.at);return this.at+=1,e}i32(){let e=this.view.getInt32(this.at,!0);return this.at+=4,e}u32(){let e=this.view.getUint32(this.at,!0);return this.at+=4,e}f64(){let e=this.view.getFloat64(this.at,!0);return this.at+=8,e}str(){let e=this.u32(),t=Ro.decode(this.bytesIn.subarray(this.at,this.at+e));return this.at+=e,t}into(e){let t=e.byteLength;new Uint8Array(e.buffer,e.byteOffset,t).set(this.bytesIn.subarray(this.at,this.at+t)),this.at+=t}};function Vo(e){let t=2166136261,n=84696351;for(let r=0;r<e.length;r++){let i=e[r];t=Math.imul(t^i,16777619),n=Math.imul(n^i^r&255,16777619)}let r=e=>(e^=e>>>16,e=Math.imul(e,2246822507),e^=e>>>13,e=Math.imul(e,3266489909),e^=e>>>16,(e>>>0).toString(16).padStart(8,`0`));return r(t^e.length)+r(n)}var Ho=Object.freeze({}),Uo=65536,Wo=class{name=`events`;now=[];before=[];outbox=[];tickNow=0;dropped=0;beginTick(e){this.before=this.now,this.now=[],this.tickNow=e}post(e,t=0,n=Ho){let r={tick:this.tickNow,kind:e,entity:t,data:n};if(this.now.push(r),this.outbox.push(r),this.outbox.length>Uo){let e=this.outbox.length-Uo;this.outbox.splice(0,e),this.dropped+=e}}thisTick(e){return e===void 0?this.now:this.now.filter(t=>t.kind===e)}lastTick(e){return e===void 0?this.before:this.before.filter(t=>t.kind===e)}drain(){let e=this.outbox;return this.outbox=[],e}save(e){e.i32(this.tickNow);for(let t of[this.before,this.now]){e.u32(t.length);for(let n of t)e.i32(n.tick),e.str(n.kind),e.f64(n.entity),Go(e,n.data)}}load(e){this.tickNow=e.i32();let t=()=>{let t=e.u32(),n=[];for(let r=0;r<t;r++)n.push({tick:e.i32(),kind:e.str(),entity:e.f64(),data:Ko(e)});return n};this.before=t(),this.now=t(),this.outbox=[]}};function Go(e,t){let n=Object.keys(t).sort();e.u32(n.length);for(let r of n){let n=t[r];e.str(r),typeof n==`number`?(e.u8(0),e.f64(n)):typeof n==`string`?(e.u8(1),e.str(n)):(e.u8(2),e.u8(+!!n))}}function Ko(e){let t=e.u32();if(t===0)return Ho;let n={};for(let r=0;r<t;r++){let t=e.str(),r=e.u8();n[t]=r===0?e.f64():r===1?e.str():e.u8()===1}return n}var qo=827541591,Jo=class{seed;hz;events=new Wo;maxTicksPerFrame;systems=[];states=[this.events];handlers=new Map;commands=[];cursor=0;tickNow=0;acc=0;inTick=!1;running=!0;rate=1;checkpointEvery;checkpointLimit;checkpoints=new Map;tickListeners=new Set;changeListeners=new Set;constructor(e={}){if(this.seed=String(e.seed??0),this.hz=Math.round(e.hz??20),this.hz<1)throw Error(`Simulation: hz must be at least 1`);this.maxTicksPerFrame=e.maxTicksPerFrame??8,this.checkpointEvery=Math.max(1,e.checkpointEvery??200),this.checkpointLimit=e.checkpoints??32}get tick(){return this.tickNow}get time(){return this.tickNow/this.hz}get alpha(){return this.acc}get paused(){return!this.running}get speed(){return this.rate}get animating(){return this.running&&this.rate>0&&(this.systems.length>0||this.cursor<this.commands.length)}ticks(e){return Math.round(e*this.hz)}addSystem(e,t){if(this.systems.some(t=>t.name===e))throw Error(`Simulation: system "${e}" is already registered`);this.systems.push({name:e,run:t})}addState(e){if(this.states.some(t=>t.name===e.name))throw Error(`Simulation: state "${e.name}" is already registered`);this.states.push(e)}onCommand(e,t){if(this.handlers.has(e))throw Error(`Simulation: command "${e}" already has a handler`);this.handlers.set(e,t)}onTick(e){return this.tickListeners.add(e),()=>this.tickListeners.delete(e)}onChange(e){return this.changeListeners.add(e),()=>this.changeListeners.delete(e)}changed(){for(let e of this.changeListeners)e()}command(e,t={},n=this.tickNow){if(this.inTick&&n===this.tickNow&&n++,!Number.isInteger(n)||n<this.tickNow)throw Error(`Simulation: command "${e}" for tick ${n}, but tick ${this.tickNow} is next`);let r={tick:n,kind:e,data:t},i=this.commands.length;for(;i>this.cursor&&this.commands[i-1].tick>n;)i--;this.commands.splice(i,0,r);for(let e of[...this.checkpoints.keys()])e>n&&this.checkpoints.delete(e);return this.inTick||this.changed(),r}get commandLog(){return this.commands}random(e,...t){return F(ee(this.seed,e),this.tickNow,...t)}runTick(){let e=this.tickNow;for(e%this.checkpointEvery===0&&!this.checkpoints.has(e)&&this.keepCheckpoint(e),this.events.beginTick(e),this.inTick=!0;this.cursor<this.commands.length&&this.commands[this.cursor].tick===e;){let t=this.commands[this.cursor++],n=this.handlers.get(t.kind);if(!n)throw Error(`Simulation: no handler for command "${t.kind}" (tick ${e})`);n(t,this)}for(let e of this.systems)e.run(this);this.inTick=!1,this.tickNow=e+1;for(let e of this.tickListeners)e(this)}keepCheckpoint(e){this.checkpoints.set(e,this.snapshot());let t=[...this.checkpoints.keys()].filter(e=>e!==0).sort((e,t)=>e-t);for(;t.length>this.checkpointLimit;)this.checkpoints.delete(t.shift())}step(e=1){for(let t=0;t<e;t++)this.runTick();this.acc=0,e>0&&this.changed()}advance(e){if(!this.running||e<=0||this.rate<=0)return 0;this.acc+=e*this.rate*this.hz;let t=Math.floor(this.acc);this.acc-=t,t>this.maxTicksPerFrame&&(t=this.maxTicksPerFrame);for(let e=0;e<t;e++)this.runTick();return t}pause(){this.running&&(this.running=!1,this.changed())}play(){this.running||(this.running=!0,this.changed())}setSpeed(e){e!==this.rate&&(this.rate=Math.max(0,e),this.changed())}rebase(e){e&&this.restore(e),this.tickNow=0,this.acc=0,this.checkpoints.clear(),this.commands.length=0,this.cursor=0,this.changed()}stepOnce(){this.running=!1,this.step(1)}seek(e){if(e=Math.max(0,Math.floor(e)),e<this.tickNow){let t=-1;for(let n of this.checkpoints.keys())n<=e&&n>t&&(t=n);if(t<0)throw Error(`Simulation: no checkpoint at or before tick ${e}`);this.restore(this.checkpoints.get(t))}for(let t=this.tickNow;t<e;t++)this.runTick();this.acc=0,this.changed()}snapshot(){let e=new zo;e.u32(qo),e.i32(this.tickNow),e.u32(this.states.length);for(let t of this.states){let n=new zo;t.save(n),e.str(t.name),e.u32(n.length),e.bytes(n.finish())}return e.finish()}restore(e){let t=new Bo(e);if(t.u32()!==qo)throw Error(`Simulation: not a snapshot`);let n=t.i32(),r=t.u32();if(r!==this.states.length)throw Error(`Simulation: snapshot has ${r} state parts, the simulation ${this.states.length}`);for(let e of this.states){let n=t.str();if(n!==e.name)throw Error(`Simulation: snapshot part "${n}" where "${e.name}" was expected`);let r=t.u32(),i=new Uint8Array(r);t.into(i),e.load(new Bo(i))}this.tickNow=n,this.acc=0;let i=0;for(;i<this.commands.length&&this.commands[i].tick<n;)i++;this.cursor=i,this.changed()}stateHash(){return Vo(this.snapshot())}},Yo=class{sim;env;inputs=[];extractors=[];keepAlive=[];disposed=!1;frameSeconds=0;constructor(e={}){this.sim=e.sim instanceof Jo?e.sim:new Jo(e.sim),this.env=e.environment instanceof en?e.environment:new en(e.environment)}onInput(e){this.inputs.push(e)}onExtract(e){this.extractors.push(e)}animateWhile(e){return this.keepAlive.push(e),()=>{let t=this.keepAlive.indexOf(e);t>=0&&this.keepAlive.splice(t,1)}}system(e,t){this.sim.addSystem(e,t)}command(e,t={}){this.sim.command(e,t)}advance(e){this.frameSeconds=e;for(let e of this.inputs)e();let t=this.sim.advance(e)>0||this.sim.animating&&e>0;for(let n of this.env.clocks)t=n.advance(e)||t;return t}extract(){let e=this.sim.alpha;for(let t of this.extractors)t(e)}frame(e){let t=this.sim.tick;return this.advance(e),this.extract(),this.sim.tick-t}dispose(){this.disposed=!0,this.inputs.length=0,this.extractors.length=0,this.keepAlive.length=0}},Xo=class extends Yo{canvas;device;block;renderer;link;_view;loop;undo=[];precipitation;sky;atmosphere;cloudShadows;cloudVolume;cloudsLast=!0;maxPixelRatio;constructor(e){super(e),this.canvas=e.canvas,this._view=e.view;let t=e.precipitation===!0?{}:e.precipitation?e.precipitation:null,n=(e.renderer?.readableDepth??!1)||t!==null&&va(t,e.view)||e.grade!==void 0;this.device=new Ve(we(e.canvas,e.renderer?.depth??`standard`,e.renderer?.samples,n)),e.grade&&(this.device.grade=e.grade),this.maxPixelRatio=e.maxPixelRatio,e.contextRecovery&&(this.device.retainUploads=!0,this.undo.push(O(e.canvas,{restored:()=>{this.device.contextRestored(),this.loop.invalidate()}})));let r=e.sky?Fr(e.sky===!0?{}:e.sky):null,i=e.atmosphere?mi(e.atmosphere===!0?{}:e.atmosphere):null,a=e.cloudShadows?qn():null,o=[...r?[r]:[],...i?[i]:[],...a?[a]:[]];this.block=vi(o.length>0?[...e.slots??[],...o]:e.slots??[]),this.renderer=new Qi(this.device,{...e.renderer,...n?{readableDepth:n}:{},palette:e.palette.data(),frameSlots:this.block}),this.link=new fa(this.renderer,this.env,{background:e.background,block:this.block}),this.sky=r?new Do(this.renderer,r,{clouds:!e.cloudVolume}):null,this.sky&&this.renderer.add(this.sky),this.atmosphere=i?new Fo(this.renderer,i):null,this.atmosphere&&this.renderer.add(this.atmosphere),this.cloudShadows=a?new Pa(this.renderer,this.link,a,e.cloudShadows===!0?{}:e.cloudShadows):null,this.cloudShadows&&this.renderer.add(this.cloudShadows);let s=e.cloudVolume===!0?{}:e.cloudVolume?e.cloudVolume:null;this.cloudVolume=s?new So(this.renderer,this.link,{atmosphere:this.atmosphere,...s}):null,this.cloudVolume&&this.renderer.add(this.cloudVolume),this.cloudShadows&&this.cloudVolume&&(this.cloudShadows.source=this.cloudVolume),this.precipitation=t?new Da(this.renderer,this.link,t):null,this.precipitation&&this.renderer.add(this.precipitation),this.precipitation&&this.cloudVolume&&(this.precipitation.source=this.cloudVolume);let c=this,l={get animating(){if(c.sim.animating)return!0;for(let e of c.env.clocks)if(e.animating)return!0;for(let e of c.keepAlive)if(e())return!0;return!1},advance:e=>this.advance(e),onChange:e=>{this.undo.push(this.sim.onChange(e));for(let t of this.env.clocks)this.undo.push(t.onChange(e))}};this.loop=new D({render:()=>{this.extract(),this.renderer.render(this.view)},clocks:[l],...e.onFrame?{onFrame:e.onFrame}:{}});let u=T(e.canvas,{get width(){return c._view.width},set width(e){c._view.width=e},get height(){return c._view.height},set height(e){c._view.height=e},get dpr(){return c._view.dpr},set dpr(e){c._view.dpr=e}},()=>e.renderOnResize?this.loop.renderNow():this.loop.invalidate(),e.maxPixelRatio);if(this.undo.push(()=>u.disconnect()),e.orbitControls){if(!(`orbitPixels`in e.view))throw Error(`Engine: orbitControls needs an orbit view`);let t=e.view;this.undo.push(E(e.canvas,{get dpr(){return t.dpr},orbitPixels:(e,n)=>{c._view===t&&t.orbitPixels(e,n)},zoomBy:e=>{c._view===t&&t.zoomBy(e)}},{onChange:()=>this.loop.invalidate()}))}}get view(){return this._view}setView(e){e!==this._view&&(e.width=this._view.width,e.height=this._view.height,e.dpr=this._view.dpr,this._view=e,this.loop.invalidate())}add(e){this.renderer.add(e),this.cloudVolume&&this.cloudsLast&&(this.renderer.remove(this.cloudVolume),this.renderer.add(this.cloudVolume)),this.precipitation&&(this.renderer.remove(this.precipitation),this.renderer.add(this.precipitation))}moveSkyBefore(e){let t=this.sky;t&&(t.behindScene=!0,this.renderer.remove(t),e?this.renderer.addBefore(t,e):this.cloudVolume&&this.cloudsLast?this.renderer.addBefore(t,this.cloudVolume):this.precipitation?this.renderer.addBefore(t,this.precipitation):this.renderer.add(t))}moveCloudsBefore(e){let t=this.cloudVolume;t&&(this.cloudsLast=!1,this.renderer.remove(t),this.renderer.addBefore(t,e))}start(){this.loop.start()}stop(){this.loop.stop()}invalidate(){this.loop.invalidate()}renderNow(){w(this.canvas,this.view,this.maxPixelRatio),this.extract(),this.renderer.render(this.view)}frame(e){let t=super.frame(e);return this.renderer.render(this.view),t}dispose(){if(!this.disposed){for(this.loop.stop();this.undo.length>0;)this.undo.pop()();for(let e of[...this.renderer.layers].reverse())this.renderer.remove(e);this.renderer.beforeFrame.length=0,super.dispose()}}};function Zo(e){return new Xo(e)}var Qo={leafOutStart:95,leafOutEnd:132,springEnd:165,colorStart:262,colorPeak:296,dropStart:288,dropEnd:322,grassGreenStart:72,grassGreenEnd:112,grassBrownStart:285,grassBrownEnd:335};function $o(e,t=Qo){let n=e;return{leafDensity:Math.min(s(t.leafOutStart,t.leafOutEnd,n),1-s(t.dropStart,t.dropEnd,n)),autumn:n>(t.leafOutEnd+t.colorStart)/2?s(t.colorStart,t.colorPeak,n):0,fresh:s(t.leafOutStart,t.leafOutEnd-8,n)*(1-s(t.leafOutEnd,t.springEnd,n)),dormancy:Math.max(1-s(t.grassGreenStart,t.grassGreenEnd,n),s(t.grassBrownStart,t.grassBrownEnd,n))}}function es(e={}){return{name:`season`,params:{...Qo,...e},fields:[{member:`u_season`,order:65,lanes:`xyzw`,doc:`x broadleaf foliage, y autumn colour, z spring freshness, w grass outside the growing season`}],compute:(e,t)=>$o(e.dayOfYear,t),lanes:e=>[e.leafDensity,e.autumn,e.fresh,e.dormancy],shadowKey:e=>e.leafDensity.toFixed(3)}}function ts(){return{name:`snow`,params:null,fields:[],compute:()=>null,lanes:()=>[],glsl:ns}}var ns=`
// How much snow lies on a surface with normal n: only on upward-facing surfaces, the edge of the cover is irregular
// according to world-anchored noise. bias shifts the threshold: positive = snow lies here longer (roof), negative = it
// vanishes sooner (road). Returns 0–1.
float snowOn(vec3 worldPos, vec3 n, float bias) {
  float s = u_weather.x;
  if (s <= 0.0) return 0.0;
#ifdef WH_LOCAL_UP
  // Up is radial: "upward-facing" is measured against the local up, and the pattern is a field in space.
  float up = smoothstep(0.45, 0.85, dot(n, localUp(worldPos)));
  vec3 sp = worldPos - u_upCenter.xyz;
  float patchN = 0.65 * vnoise3(sp / 7.0, 71u) + 0.35 * vnoise3(sp / 1.7, 72u);
#else
  float up = smoothstep(0.45, 0.85, n.y);
  float patchN = 0.65 * vnoise(worldPos.xz / 7.0, 71u) + 0.35 * vnoise(worldPos.xz / 1.7, 72u);
#endif
  patchN = mix(0.5, patchN, 0.4 + 0.6 * detailVisible(1.7));
  // Cover s goes from 0 (nothing) through patchy spots to 1 (everywhere).
  float t = s * 1.25 + bias - 0.12;
  return up * smoothstep(patchN - 0.12, patchN + 0.12, t);
}
`,rs={a_pos:0,a_normal:1,a_shade:2,i_base:3,i_shape:4,i_extra:5},is=10,as=5,os=1.5,ss={round:2,tall:2,conifer:1,birch:1,shrub:1},cs={round:{lumps:9,core:.66,offMin:.4,offMax:.56,rMin:.46,rMax:.6,yBias:.2,flatBottom:-.5,flatSquash:.3,taper:0,trunk:.075},tall:{lumps:12,core:.6,offMin:.34,offMax:.44,rMin:.42,rMax:.52,yBias:0,flatBottom:-.72,flatSquash:.45,taper:.3,trunk:.08},birch:{lumps:8,core:.5,offMin:.32,offMax:.42,rMin:.4,rMax:.5,yBias:-.05,flatBottom:-.8,flatSquash:.5,taper:.5,trunk:.06},shrub:{lumps:7,core:.62,offMin:.38,offMax:.52,rMin:.44,rMax:.58,yBias:.3,flatBottom:-.1,flatSquash:0,taper:0,trunk:0}},ls={tiers:4,tiersTop:.84,overlap:.07,envelopePower:.85,innerRadius:.42,wobble:.16,trunk:.07};function us(e){let t=(1+Math.sqrt(5))/2,n=[-1,t,0,1,t,0,-1,-t,0,1,-t,0,0,-1,t,0,1,t,0,-1,-t,0,1,-t,t,0,-1,t,0,1,-t,0,-1,-t,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];for(let t=0;t<e;t++){let e=new Map,t=(t,r)=>{let i=t<r?t*65536+r:r*65536+t,a=e.get(i);return a===void 0&&(a=n.length/3,n.push((n[t*3]+n[r*3])/2,(n[t*3+1]+n[r*3+1])/2,(n[t*3+2]+n[r*3+2])/2),e.set(i,a)),a},i=[];for(let e=0;e<r.length;e+=3){let n=r[e],a=r[e+1],o=r[e+2],s=t(n,a),c=t(a,o),l=t(o,n);i.push(n,s,l,a,c,s,o,l,c,s,c,l)}r=i}let i=[];for(let e=0;e<n.length;e+=3){let t=Math.hypot(n[e],n[e+1],n[e+2]);i.push(n[e]/t,n[e+1]/t,n[e+2]/t)}return n=i,{pos:n,idx:r}}function ds(e){let t=e<0?0:e>1?1:e;return t*t*(3-2*t)}function fs(e,t){let n=[],r=[];for(let i=0;i<as;i++){let a=i/as*Math.PI*2;for(let e=0;e<2;e++){let r=t*(e===0?os:1);n.push(Math.cos(a)*r,e,Math.sin(a)*r,Math.cos(a),0,Math.sin(a),.6,1,0,0)}let o=e+i*2,s=o+1,c=e+(i+1)%as*2,l=c+1;r.push(o,s,c,c,s,l)}return{verts:n,idx:r}}function ps(e,t,n){let r=us(n),i=[{cx:0,cy:0,cz:0,r:e.core}];for(let n=0;n<e.lumps;n++){let r=I(F(t,n,1))*2-1,a=I(F(t,n,2))*Math.PI*2,o=Math.min(1,Math.max(-1,r*.75+e.yBias)),s=Math.sqrt(Math.max(0,1-o*o)),c=e.offMin+(e.offMax-e.offMin)*I(F(t,n,3)),l=e.rMin+(e.rMax-e.rMin)*I(F(t,n,4));i.push({cx:Math.cos(a)*s*c,cy:o*c,cz:Math.sin(a)*s*c,r:l})}let a=r.pos.length/3,o=new Float32Array(a),s=new Int32Array(a),c=0,l=1/0;for(let e=0;e<a;e++){let t=r.pos[e*3],n=r.pos[e*3+1],a=r.pos[e*3+2],u=0,d=0;i.forEach((e,r)=>{let i=t*e.cx+n*e.cy+a*e.cz,o=e.cx*e.cx+e.cy*e.cy+e.cz*e.cz-e.r*e.r,s=i+Math.sqrt(Math.max(0,i*i-o));s>u&&(u=s,d=r)}),o[e]=u,s[e]=d,c=Math.max(c,u),l=Math.min(l,u)}let u=new Float32Array(a),d=new Float32Array(a),f=new Float32Array(a),p=1/0,m=-1/0;for(let t=0;t<a;t++){let n=o[t]/c,i=r.pos[t*3+1]*n;i<e.flatBottom&&(i=e.flatBottom+(i-e.flatBottom)*e.flatSquash);let a=1-e.taper*ds((i+.2)/1.2);u[t]=r.pos[t*3]*n*a,f[t]=r.pos[t*3+2]*n*a,d[t]=i,p=Math.min(p,i),m=Math.max(m,i)}let h=m-p,g=[];for(let e=0;e<a;e++){let n=r.pos[e*3],a=r.pos[e*3+1],m=r.pos[e*3+2],_=i[s[e]],v=n*.35+(n*o[e]-_.cx)*.65,y=a*.35+(a*o[e]-_.cy)*.65,b=m*.35+(m*o[e]-_.cz)*.65,x=Math.hypot(v,y,b)||1;v/=x,y/=x,b/=x;let S=(o[e]-l)/(c-l||1),C=a*.5+.5,w=(.35+.65*Math.min(1,S*1.4))*(.45+.55*Math.min(1,C*1.3)),T=.35+.65*Math.min(1,Math.hypot(u[e],f[e])),E=I(F(t,s[e],9));g.push(u[e],(d[e]-p)/h,f[e],v,y*h,b,w,0,T,E)}let _=r.idx.slice();if(e.trunk>0){let t=fs(a,e.trunk);g.push(...t.verts),_.push(...t.idx)}return{vertices:Float32Array.from(g),indices:Uint16Array.from(_)}}function ms(e,t){let n=ls,r=e=>Math.max(0,1-e)**+n.envelopePower,i=[{r:0,y:0,tip:!1}];for(let e=0;e<n.tiers;e++){let t=e/n.tiers*n.tiersTop;if(i.push({r:r(t),y:t,tip:!0}),e<n.tiers-1){let t=(e+1)/n.tiers*n.tiersTop+n.overlap;i.push({r:r(t)*n.innerRadius,y:t,tip:!1})}}i.push({r:0,y:1,tip:!1});let a=[],o=[],s=(r,a)=>{let o=i[r];return o.tip?o.r*(1-n.wobble*I(F(e,r,a%t))):o.r};for(let n=0;n+1<i.length;n++){let r=i[n],c=i[n+1],l=c.y-r.y,u=-(c.r-r.r),d=Math.hypot(l,u)||1,f=a.length/is;for(let i=0;i<=t;i++){let o=i/t*Math.PI*2,f=Math.cos(o),p=Math.sin(o);for(let[o,m]of[[n,r],[n+1,c]]){let n=s(o,i),r=m.tip?1:m.r===0&&m.y===1?.95:.3,c=m.tip?1:.25;a.push(f*n,m.y,p*n,f*l/d,u/d,p*l/d,r,0,c,I(F(e,77,i%t)))}}for(let e=0;e<t;e++){let t=f+e*2,n=t+1,r=t+2,i=t+3;o.push(t,n,r,r,n,i)}}let c=fs(a.length/is,n.trunk);return a.push(...c.verts),o.push(...c.idx),{vertices:Float32Array.from(a),indices:Uint16Array.from(o)}}var hs=[1,2],gs=[6,10];function _s(e,t,n){return e===`conifer`?ms(t,gs[Math.min(n,gs.length-1)]):ps(cs[e],t,hs[Math.min(n,hs.length-1)])}var vs={stride:40,attribs:[{name:`a_pos`,size:3,type:`f32`,offset:0},{name:`a_normal`,size:3,type:`f32`,offset:12},{name:`a_shade`,size:4,type:`f32`,offset:24}]},ys={stride:48,attribs:[{name:`i_base`,size:4,type:`f32`,offset:0},{name:`i_shape`,size:4,type:`f32`,offset:16},{name:`i_extra`,size:4,type:`f32`,offset:32}]},bs={position:0,radius:3,height:4},xs=hs.length;function Ss(e,t,n,r){let i=[];for(let n=0;n<xs;n++){let r=_s(e,t,n);i.push({layout:vs,vertices:r.vertices,indices:r.indices,count:r.indices.length})}return{species:e,lods:i,instances:n,rows:[r.deep,r.mid,r.leaf,r.trunk,r.leafAlt],evergreen:r.evergreen??!1}}var Cs=.25,ws=.72;function Ts(e,t){let n=e.rows;return{u_rows:{ivec4:[n[0],n[1],n[2],n[3]]},u_rowAlt:{int:n[4]},u_evergreen:{int:+!!e.evergreen},u_trunkReach:{float:e.evergreen?Cs:o(ws,Cs,t)}}}function Es(e){let t=new Float32Array(e.length*12);return e.forEach((e,n)=>{let r=n*12;t[r]=e.x,t[r+1]=e.y,t[r+2]=e.z,t[r+3]=e.radius,t[r+4]=e.height,t[r+5]=Math.cos(e.yaw),t[r+6]=Math.sin(e.yaw),t[r+7]=e.tint,t[r+8]=e.crownBase,t[r+9]=e.flex,t[r+10]=e.phase,t[r+11]=0}),t}function Ds(e,t,n){let r=new Map;for(let t of e){let e=Math.min(ss[t.species]-1,Math.floor(t.phase*ss[t.species])),n=`${t.species}:${e}`,i=r.get(n);i||(i={species:t.species,variant:e,trees:[]},r.set(n,i)),i.trees.push(t)}let i=[`round`,`tall`,`conifer`,`birch`,`shrub`];return[...r.values()].sort((e,t)=>i.indexOf(e.species)-i.indexOf(t.species)||e.variant-t.variant).map(e=>Ss(e.species,F(t,i.indexOf(e.species),e.variant),Es(e.trees),n[e.species]))}var Os=`
in vec3 a_pos;     // canopy and trunk at unit height 0–1, horizontally in canopy radii
in vec3 a_normal;
in vec4 a_shade;   // x vertex shading 0–1, y kind: 0 canopy, 1 trunk, z wind flutter 0–1, w phase 0–1
in vec4 i_base;    // xyz tree base, w canopy radius
in vec4 i_shape;   // x height, y cos of rotation, z sin of rotation, w hue 0–1
in vec4 i_extra;   // x canopy start (share of height), y flexibility in wind, z phase 0–1, w reserve
uniform float u_trunkReach; // how far the trunk reaches into the canopy (share of the canopy): a part in summer, almost to the top for a bare tree
// Share of the tree height at which the vertex lies. The canopy occupies the span from its start upward, the trunk reaches a bit into it.
float treeHeightFraction() {
  float cb = i_extra.x;
  return mix(cb + a_pos.y * (1.0 - cb), a_pos.y * (cb + u_trunkReach * (1.0 - cb)), a_shade.y);
}
vec3 treeLocal() {
  return vec3(a_pos.x * i_base.w, treeHeightFraction() * i_shape.x, a_pos.z * i_base.w);
}
vec3 treeRotate(vec3 v) {
#ifdef WH_LOCAL_UP
  // Up is radial: the instance stands in the local frame of its base.
  return localFrame(i_base.xyz) * vec3(v.x * i_shape.y - v.z * i_shape.z, v.y, v.x * i_shape.z + v.z * i_shape.y);
#else
  return vec3(v.x * i_shape.y - v.z * i_shape.z, v.y, v.x * i_shape.z + v.z * i_shape.y);
#endif
}
// Position in tree space for noise: every tree has its pattern shifted by its hue.
vec3 treeObj(vec3 local) {
  return local + vec3(i_shape.w * 37.0, 0.0, i_shape.w * 11.0);
}
`,ks=`
uniform int u_evergreen;
const float TWIG_COVER = 0.55;
float treeHashA(float tint, float phase) { return fract(tint * 7.31 + phase * 3.73); }
float treeHashB(float tint, float phase) { return fract(tint * 13.7 + phase * 5.11); }
float treeDensity(float tint, float phase) {
  if (u_evergreen != 0) return 1.0;
  float h = treeHashA(tint, phase);
  return smoothstep(h * 0.4, h * 0.4 + 0.6, u_season.x);
}
// x foliage coverage, y total coverage (foliage or branches). visC and visF: how sharply the coarse (tufts around a metre)
// and the fine canopy detail are visible. What is not visible turns into average coverage, which alpha-to-coverage spreads over the samples.
vec2 crownCover(vec3 obj, float dens, float visC, float visF) {
  if (dens >= 0.999) return vec2(1.0);
  float coarse = vnoise3(obj * 0.9, 44u);
  float fine = vnoise3(obj * 2.6, 45u);
  float nz = smoothstep(0.2, 0.8, mix(coarse, 0.55 * coarse + 0.45 * fine, visF));
  float edge = mix(0.22, 0.05, visF);
  float leafA = mix(dens, 1.0 - smoothstep(dens - edge, dens + edge, nz), visC);
  // Branches up close as sharp clusters (no sieve), from afar average coverage.
  float tw = smoothstep(0.5, 0.56, vnoise3(obj * 3.4 + 7.0, 46u));
  float twigA = mix(TWIG_COVER * 0.6, tw * 0.95, visF);
  return vec2(leafA, max(leafA, twigA));
}
`,As=`#include <header>
${Os}
vec3 treeWind(float heightFraction) {
  if (u_wind.z <= 0.0) return vec3(0.0);
  const float TAU = 6.2831853;
  vec2 dir = u_wind.xy;
  vec2 side = vec2(-dir.y, dir.x);
  float t = u_time.x;
  float own = i_extra.z * TAU;
  // Gust: a wave travelling with the wind. It is undulated across so its front is not ruler-straight.
#ifdef WH_LOCAL_UP
  // Up is radial: gusts are placed by the position relative to the centre, and the bend lies in the local horizon.
  vec2 at = (i_base.xyz - u_upCenter.xyz).xz;
#else
  vec2 at = i_base.xz;
#endif
  float across = dot(at, side);
  float along = dot(at, dir) - u_gust.y * t;
  float gust = 0.5 + 0.5 * sin(along * u_gust.x + 1.4 * sin(across * 0.023) + across * u_gust.x * 0.31);
  float lean = 0.4 + 0.45 * gust + 0.15 * sin(t * 1.9 + own);
  float sway = 0.25 * sin(t * 1.3 + own * 1.7);
  vec2 bend = (dir * lean + side * sway) * (u_wind.z * i_extra.y * heightFraction * heightFraction);
  float ph = a_shade.w * TAU + own;
  vec3 flutter = vec3(sin(t * 5.3 + ph), 0.5 * sin(t * 4.1 + ph * 1.7), sin(t * 4.7 + ph * 2.3));
#ifdef WH_LOCAL_UP
  return localFrame(i_base.xyz) * (vec3(bend.x, 0.0, bend.y) + flutter * (u_wind.w * a_shade.z * (0.6 + 0.4 * gust)));
#else
  return vec3(bend.x, 0.0, bend.y) + flutter * (u_wind.w * a_shade.z * (0.6 + 0.4 * gust));
#endif
}

out vec3 v_world;
out vec3 v_normal;
out vec3 v_obj;
out vec2 v_shade;
flat out float v_tint;
flat out float v_phase;
void main() {
  vec3 local = treeLocal();
  // Light and shadows are computed from the rest position, wind moves only the outline. The shadow map is thus independent of time.
  v_world = i_base.xyz + treeRotate(local);
  // Normal under non-uniform scale: divided by the axis scale.
  v_normal = treeRotate(vec3(a_normal.x / i_base.w, a_normal.y / (i_shape.x * (1.0 - i_extra.x)), a_normal.z / i_base.w));
  v_obj = treeObj(local);
  v_shade = a_shade.xy;
  v_tint = i_shape.w;
  v_phase = i_extra.z;
  gl_Position = u_viewProj * vec4(v_world + treeWind(local.y / i_shape.x), 1.0);
}`,js=`#include <header>
#include <noise>
#include <lighting>
#include <snow>
${ks}
uniform ivec4 u_rows;  // palette rows: dark canopy, middle, light foliage, trunk
uniform int u_rowAlt;  // second hue of light foliage
uniform ivec4 u_seasonRows; // palette rows: autumn yellow, orange, rust, bare branches
uniform int u_springRow;    // spring foliage
in vec3 v_world;
in vec3 v_normal;
in vec3 v_obj;
in vec2 v_shade;
flat in float v_tint;
flat in float v_phase;
out vec4 o_color;

void main() {
  vec3 n = normalize(v_normal);
  if (v_shade.y > 0.5) {
    float sunT = sunVisibility(v_world, n, 2.0);
    vec3 bark = u_palette[u_rows.w].rgb * (1.0 - 0.15 * u_weather.y);
    bark = mix(bark, u_snow.rgb, snowOn(v_world, n, 0.0));
    o_color = vec4(applyFog(toDisplay(bark * u_warmTint.rgb * lightOn(n, sunT, 0.6)), v_world), 1.0);
    return;
  }
  // Season: foliage density and autumn colour of this tree.
  float dens = treeDensity(v_tint, v_phase);
  vec2 cover = crownCover(v_obj, dens, detailVisible(1.1), detailVisible(0.35));
  if (cover.y < 0.03) discard;
  float leafShare = cover.x / cover.y;
  float aut = 0.0;
  vec3 autCol = vec3(0.0);
  if (u_evergreen == 0) {
    float hb = treeHashB(v_tint, v_phase);
    // Every tree changes colour at a different time, the latest ones stay half green even at the peak of autumn.
    aut = smoothstep(hb * 0.75, hb * 0.75 + 0.45, u_season.y);
    vec3 y = u_palette[u_seasonRows.x].rgb, o = u_palette[u_seasonRows.y].rgb, r = u_palette[u_seasonRows.z].rgb;
    autCol = hb < 0.45 ? mix(y, o, smoothstep(0.3, 0.45, hb)) : mix(o, r, smoothstep(0.6, 0.85, hb));
  }
  // Foliage tufts: noise in tree space. From afar it turns into the average.
  float clump = 0.6 * vnoise3(v_obj * 0.9, 41u) + 0.4 * vnoise3(v_obj * 2.6, 42u);
  clump = mix(0.5, clump, detailVisible(0.7));
  float fine = (vnoise3(v_obj * 9.0, 43u) - 0.5) * detailVisible(0.25);

  float sun = sunVisibility(v_world, n, 3.0);
  // Foliage lets light through, hence a softer transition than at a wall.
  float ndl = clamp((dot(n, u_sunDir.xyz) + 0.3) / 1.3, 0.0, 1.0);
  float lit = ndl * sun;
  float shade = v_shade.x * (0.7 + 0.6 * clump);

  vec3 deep = u_palette[u_rows.x].rgb;
  vec3 mid = u_palette[u_rows.y].rgb;
  vec3 leaf = mix(u_palette[u_rows.z].rgb, u_palette[u_rowAlt].rgb, v_tint * 0.6);
  if (u_evergreen == 0) {
    vec3 spring = u_palette[u_springRow].rgb;
    leaf = mix(leaf, spring, u_season.z * 0.45);
    mid = mix(mid, spring * 0.72, u_season.z * 0.25);
    deep = mix(deep, autCol * 0.38, aut * 0.55);
    mid = mix(mid, autCol * 0.66, aut);
    leaf = mix(leaf, autCol, aut);
  }
  // Canopy colour goes from almost black in the notches through dark green to lighter foliage only on lit bumps.
  vec3 col = mix(deep, mid, smoothstep(0.1, 0.8, shade));
  col = mix(col, leaf, smoothstep(0.22, 0.9, lit * (0.55 + clump)) * 0.85);
  col *= 1.0 + 0.5 * fine;
  col *= 0.96 + 0.24 * v_tint;
  // Bare branches: grey-brown lace, darker inside the canopy.
  vec3 twig = u_palette[u_seasonRows.w].rgb * (0.7 + 0.3 * clump) * mix(0.75, 1.05, v_shade.x);
  col = mix(twig, col, leafShare);
  col *= 1.0 - 0.12 * u_weather.y;
  // Snow on the upper side of the canopy. Needles and branches hold it, dense foliage less.
  float snow = snowOn(v_world, n, 0.08) * mix(0.9, 0.6, leafShare * float(u_evergreen == 0)) * smoothstep(0.35, 0.75, clump + 0.25);
  col = mix(col, u_snow.rgb * (0.92 + 0.12 * clump), snow);

#ifdef WH_LOCAL_UP
  float nUp = dot(n, localUp(v_world));
#else
  float nUp = n.y;
#endif
  vec3 fill = (u_ambient.rgb + u_skyFill.rgb * (nUp * 0.5 + 0.5)) * mix(0.45, 1.0, v_shade.x);
  vec3 light = u_sunColor.rgb * lit * mix(0.6, 1.0, v_shade.x) + fill;
  o_color = vec4(applyFog(toDisplay(col * u_warmTint.rgb * light), v_world), cover.y);
}`,Ms={name:`vegetation`,attribs:rs,passes:{shadow:{vs:`#include <header>
uniform mat4 u_lightRender;
${Os}
out vec3 v_obj;
flat out vec3 v_tree; // hue, phase, trunk
void main() {
  vec3 local = treeLocal();
  v_obj = treeObj(local);
  v_tree = vec3(i_shape.w, i_extra.z, a_shade.y);
  gl_Position = u_lightRender * vec4(i_base.xyz + treeRotate(local), 1.0);
}`,fs:`#include <header>
#include <noise>
${ks}
in vec3 v_obj;
flat in vec3 v_tree;
void main() {
  if (v_tree.z > 0.5) return;
  float dens = treeDensity(v_tree.x, v_tree.y);
  if (dens >= 0.999) return;
  float a = crownCover(v_obj, dens, 1.0, 1.0).y;
  if (a < hash2(ivec2(gl_FragCoord.xy), 17u)) discard;
}`},color:{vs:As,fs:js}}};function Ns(e,t){return{u_seasonRows:{ivec4:[e[0],e[1],e[2],e[3]]},u_springRow:{int:t}}}var Ps={mPerMs:.075,maxM:.28,flutterShare:.2};function Fs(e,t=Ps){let n=Math.min(t.maxM,Math.max(0,e)*t.mPerMs);return{swayM:n,flutterM:n*t.flutterShare}}function Is(e={}){return{name:`sway`,params:{...Ps,...e},fields:[{member:`u_wind`,lanes:`zw`,doc:`z tree top deflection in metres, w foliage flutter in metres`}],compute:(e,t)=>Fs(e.windSpeedMs,t),lanes:e=>[e.swayM,e.flutterM]}}var Ls={windows:0,glazed:1,high:2,blind:3},Rs={none:0,door:1,garage:2,portal:3,arch:4},R={doorHeight:2.25,garageDoorHeight:2.1,portalHeight:2.7,stepRise:.16,stepTread:.3,landingDepth:1,minStepHeight:.1,maxSteps:7,stepSink:.3,canopyGap:.25,canopyThickness:.16,canopyExtraWidth:.9,wallEndMargin:.45,balconySlab:.16,balconyParapet:1.05,balconyColumnShare:.84,balconyMaxWidth:3.8,corniceTopGap:.04,chimneySize:[.55,.75],chimneyAboveRidge:.85,partyProbe:.3,partyShare:.5,roofBoxMargin:.45,roofBoxMinHeight:.4,archHeightPerWidth:1.5},z={recipe:1,blind:2,panelJoints:4,stairStrip:8,transom:16,balconies:32,loggia:64,cornice:128},zs=class{cell=16;grid=new Map;rings;constructor(e){this.rings=e,e.forEach((e,t)=>{let n=e[0];if(!n)return;let r=1/0,i=-1/0,a=1/0,o=-1/0;for(let e=0;e<n.length;e+=2)r=Math.min(r,n[e]),i=Math.max(i,n[e]),a=Math.min(a,n[e+1]),o=Math.max(o,n[e+1]);for(let e=Math.floor(a/this.cell);e<=Math.floor(o/this.cell);e++)for(let n=Math.floor(r/this.cell);n<=Math.floor(i/this.cell);n++){let r=e*100003+n,i=this.grid.get(r);i||this.grid.set(r,i=[]),i.push(t)}})}occupied(e,t,n,r){let i=this.grid.get(Math.floor(t/this.cell)*100003+Math.floor(e/this.cell));if(!i)return!1;for(let a of i)if(a!==n&&!(r&&r(a))&&ie(e,t,this.rings[a]))return!0;return!1}anyOccupied(e,t,n){for(let r=0;r<e.length;r+=2)if(this.occupied(e[r],e[r+1],t,n))return!0;return!1}};function Bs(e,t,n,r,i,a,o){let s=Math.hypot(i-n,a-r);if(s<.001)return 0;let c=(a-r)/s,l=-(i-n)/s,u=Math.max(3,Math.min(24,Math.round(s/1.5))),d=0;for(let s=0;s<u;s++){let f=(s+.5)/u,p=n+(i-n)*f+c*R.partyProbe,m=r+(a-r)*f+l*R.partyProbe;e.occupied(p,m,t,o)&&d++}return d/u}function Vs(e,t,n,r,i,a,o,s){let c=r,l=-n,u=[];for(let[d,f]of[[i,o],[a,o],[a,s],[i,s]])u.push(e+n*d+c*f,t+r*d+l*f);return u}var Hs=new Set,Us=!1;function Ws(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length;Hs.size&&Hs.clear();let a=Gs(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s=0,c=0,l=0;if(r&&(a=$s(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return qs(a,o,s,c,l),o}function Gs(e,t,n,r,i){let a=null;if(i===Fc(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=jc(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=jc(i/r|0,e[i],e[i+1],a);return a&&wc(a,a.next)&&(Mc(a),a=a.next),a}function Ks(e,t=e){let n=t===e,r=e,i;do i=!1,r!==r.next&&(Hs.size===0||!Hs.has(r))&&(wc(r,r.next)||H(r.prev,r,r.next)===0)?((n||r===t)&&(t=r.prev),Us=!0,Mc(r),r=r.prev,i=!0):(n||r!==t)&&(r=r.next,i=!n);while(i||r!==t);return t}function qs(e,t,n,r,i){i&&_c(e,n,r,i);let a=e,o=!1;for(;e.prev!==e.next;){let s=e.prev,c=e.next;if(H(s,e,c)<0&&(i?Ys(e,n,r,i):Js(e)))t.push(s.i,e.i,c.i),Mc(e),e=c,a=c;else if(e=c,e===a){if(Us=!1,e=Ks(e),Us){a=e;continue}if(!o){e=Xs(e,t),a=e,o=!0;continue}Zs(e,t,n,r,i);break}}}function Js(e){let t=e.prev,n=e,r=e.next,i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&(i!==m.x||s!==m.y)&&Sc(i,s,a,c,o,l,m.x,m.y)&&H(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ys(e,t,n,r){let i=e.prev,a=e,o=e.next,s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=bc(p,m,t,n,r),v=bc(h,g,t,n,r),y=e.prevZ;for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==o&&(s!==y.x||u!==y.y)&&Sc(s,u,c,d,l,f,y.x,y.y)&&H(y.prev,y,y.next)>=0)return!1;y=y.prevZ}let b=e.nextZ;for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==o&&(s!==b.x||u!==b.y)&&Sc(s,u,c,d,l,f,b.x,b.y)&&H(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Xs(e,t){let n=e,r=!1;do{let i=n.prev,a=n.next.next;Tc(i,n,n.next,a,!1)&&Oc(i,a)&&Oc(a,i)&&(t.push(i.i,n.i,a.i),Mc(n),Mc(n.next),n=e=a,r=!0),n=n.next}while(n!==e);return r?Ks(n):n}function Zs(e,t,n,r,i){let a=e;do{let e=a.next.next;for(;e!==a.prev;){if(a.i!==e.i&&Cc(a,e)){let o=Ac(a,e);a=Ks(a,a.next),o=Ks(o,o.next),qs(a,t,n,r,i),qs(o,t,n,r,i);return}e=e.next}a=a.next}while(a!==e)}var Qs=!1;function $s(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Gs(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&Hs.add(o),i.push(xc(o))}i.sort(ec),oc(e.length/r,t.length),sc(n,n),Qs=!0;for(let e=0;e<i.length;e++)n=tc(i[e],n);return Qs=!1,Ks(n)}function ec(e,t){return e.x-t.x||e.y-t.y||(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x)}function tc(e,t){let n=dc(e,t);if(!n)return t;let r=Ac(n,e),i=r.next;return sc(n,i.next),Ks(r,r.next),Ks(n,n.next)}var nc=16,B=new Float64Array,rc=0,ic=[],ac=[];function oc(e,t){let n=Math.ceil((e+2*t)/nc)+t+2;B.length<n*4&&(B=new Float64Array(n*4)),rc=0}function sc(e,t){let n=e;do{let e=rc++;ic[e]=n;let r=n.x,i=n.y,a=n.x,o=n.y,s=0;do{let t=n.next;n.z=e,t.x<r&&(r=t.x),t.x>a&&(a=t.x),t.y<i&&(i=t.y),t.y>o&&(o=t.y),n=t}while(++s<nc&&n!==t);ac[e]=n;let c=e*4;B[c]=r,B[c+1]=i,B[c+2]=a,B[c+3]=o}while(n!==t)}function cc(e,t){let n=e.z*4;t.x<B[n]&&(B[n]=t.x),t.y<B[n+1]&&(B[n+1]=t.y),t.x>B[n+2]&&(B[n+2]=t.x),t.y>B[n+3]&&(B[n+3]=t.y)}function lc(e){let t=ac[e];for(;t.prev.next!==t;)t=t.next;return ac[e]=t,t}function uc(e){let t=ic[e];for(;t.prev.next!==t;)t=t.next;return ic[e]=t,t}function dc(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(wc(e,n))return n;for(let t=0,s=0;t<rc;t++,s+=4){if(i<B[s+1]||i>B[s+3]||B[s]>r||B[s+2]<=a)continue;let c=lc(t);n=uc(t);do{if(n.prev.next===n){if(wc(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}}n=n.next}while(n!==c)}if(!o)return null;let s=o.x,c=o.y,l=Math.min(i,c),u=Math.max(i,c),d=1/0;for(let t=0,f=0;t<rc;t++,f+=4){if(B[f+2]<s||B[f]>r||B[f+3]<l||B[f+1]>u)continue;let p=lc(t);n=uc(t);do{if(n.prev.next===n&&r>=n.x&&n.x>=s&&r!==n.x&&Sc(i<c?r:a,i,s,c,i<c?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);(Oc(n,e)||n.y===i&&n.next.y===i&&n.next.x>r)&&(t<d||t===d&&(n.x>o.x||n.x===o.x&&fc(o,n)))&&(o=n,d=t)}n=n.next}while(n!==p)}return o}function fc(e,t){return H(e.prev,e,t.prev)<0&&H(t.next,e,e.next)<0}var V=[],pc=[],mc=new Uint32Array,hc=new Uint32Array,gc=new Uint32Array(256);function _c(e,t,n,r){let i=e,a=0;do i.z=bc(i.x,i.y,t,n,r),V[a++]=i,i=i.next;while(i!==e);vc(a);let o=null;for(let e=0;e<a;e++){let t=V[e];t.prevZ=o,o&&(o.nextZ=t),o=t}o.nextZ=null,V.fill(null,0,a),pc.fill(null,0,a)}function vc(e){if(e<=32)for(let t=1;t<e;t++){let e=V[t],n=e.z,r=t-1;for(;r>=0&&V[r].z>n;)V[r+1]=V[r],r--;V[r+1]=e}else{mc.length<e&&(mc=new Uint32Array(e),hc=new Uint32Array(e),pc=Array(e));for(let t=0;t<e;t++)mc[t]=V[t].z;yc(e,V,mc,pc,hc,0),yc(e,pc,hc,V,mc,8),yc(e,V,mc,pc,hc,16),yc(e,pc,hc,V,mc,24)}}function yc(e,t,n,r,i,a){gc.fill(0);for(let t=0;t<e;t++)gc[n[t]>>>a&255]++;let o=0;for(let e=0;e<256;e++){let t=gc[e];gc[e]=o,o+=t}for(let o=0;o<e;o++){let e=n[o],s=gc[e>>>a&255]++;r[s]=t[o],i[s]=e}}function bc(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function xc(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Sc(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Cc(e,t){let n=wc(e,t)&&H(e.prev,e,e.next)>0&&H(t.prev,t,t.next)>0;return e.next.i!==t.i&&(n||Oc(e,t)&&Oc(t,e)&&(H(e.prev,e,t.prev)!==0||H(e,t.prev,t)!==0))&&!Dc(e,t)&&(n||kc(e,t))}function H(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function wc(e,t){return e.x===t.x&&e.y===t.y}function Tc(e,t,n,r,i=!0){let a=H(e,t,n),o=H(e,t,r),s=H(n,r,e),c=H(n,r,t);return(a>0&&o<0||a<0&&o>0)&&(s>0&&c<0||s<0&&c>0)?!0:i?!!(a===0&&Ec(e,n,t)||o===0&&Ec(e,r,t)||s===0&&Ec(n,e,r)||c===0&&Ec(n,t,r)):!1}function Ec(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Dc(e,t){let n=Math.min(e.x,t.x),r=Math.max(e.x,t.x),i=Math.min(e.y,t.y),a=Math.max(e.y,t.y),o=e;do{let s=o.next;if(o.x>r&&s.x>r||o.x<n&&s.x<n||o.y>a&&s.y>a||o.y<i&&s.y<i)o=s;else{if(o.i!==e.i&&s.i!==e.i&&o.i!==t.i&&s.i!==t.i&&Tc(o,s,e,t))return!0;o=s}}while(o!==e);return!1}function Oc(e,t){return H(e.prev,e,e.next)<0?H(e,t,e.next)>=0&&H(e,e.prev,t)>=0:H(e,t,e.prev)<0||H(e,e.next,t)<0}function kc(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do{let e=n.next;n.y>a!=e.y>a&&i<(e.x-n.x)*(a-n.y)/(e.y-n.y)+n.x&&(r=!r),n=e}while(n!==e);return r}function Ac(e,t){let n=Nc(e.i,e.x,e.y),r=Nc(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function jc(e,t,n,r){let i=Nc(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Mc(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ),Qs&&cc(e.prev,e.next)}function Nc(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function Pc(e,t,n,r){let i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(Fc(e,0,a,n));if(i)for(let r=0,i=t.length;r<i;r++){let a=t[r]*n,s=r<i-1?t[r+1]*n:e.length;o-=Math.abs(Fc(e,a,s,n))}let s=0;for(let t=0;t<r.length;t+=3){let i=r[t]*n,a=r[t+1]*n,o=r[t+2]*n;s+=Math.abs((e[i]-e[o])*(e[a+1]-e[i+1])-(e[i]-e[a])*(e[o+1]-e[i+1]))}if(s===0){let t=0;for(let r=0;r<e.length;r+=n)t=Math.max(t,Math.abs(e[r]),Math.abs(e[r+1]));return Math.abs(o)<=e.length*t*t*2**-52?0:1}return Math.abs((s-o)/o)}function Fc(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function Ic(e,t){let n=Math.min(e.maxSlope,Math.max(e.minSlope,(e.ridgeY-e.eaveWanted)/t));return{eaveY:Math.max(e.minEaveY,e.ridgeY-n*t),roofHeight:n*t}}var Lc=.01,Rc=1.5,zc=1.7,Bc=1e-4;function Vc(e){let t=[],n=[];return e.forEach((e,r)=>{r>0&&n.push(t.length/2);for(let n of e)t.push(n)}),{coords:t,holes:n}}function Hc(e){let{coords:t,holes:n}=Vc(e),r=Ws(t,n,2);return r.length===0||Pc(t,n,2,r)>Lc?null:{coords:t,indices:r}}function Uc(e,t){let n=[],r=(e,n)=>t.nx*e+t.nz*n-t.off;for(let t=0;t<e.length;t+=6){let i=[e[t],e[t+1],e[t+2],e[t+3],e[t+4],e[t+5]],a=[r(i[0],i[1]),r(i[2],i[3]),r(i[4],i[5])],o=a.filter(e=>e>Bc).length,s=a.filter(e=>e<-1e-4).length;if(o===0||s===0){n.push(...i);continue}let c=0;for(let e=0;e<3;e++){let t=a[e],n=a[(e+1)%3],r=a[(e+2)%3];(t>Bc&&n<=Bc&&r<=Bc||t<-1e-4&&n>=-1e-4&&r>=-1e-4)&&(c=e)}let l=i[c*2],u=i[c*2+1],d=i[(c+1)%3*2],f=i[(c+1)%3*2+1],p=i[(c+2)%3*2],m=i[(c+2)%3*2+1],h=a[c],g=a[(c+1)%3],_=a[(c+2)%3],v=h/(h-g),y=h/(h-_),b=l+(d-l)*v,x=u+(f-u)*v,S=l+(p-l)*y,C=u+(m-u)*y;n.push(l,u,b,x,S,C),Math.abs(g)>Bc&&n.push(b,x,d,f,p,m),Math.abs(_)>Bc&&n.push(b,x,p,m,S,C)}return n}function Wc(e,t){let n=[];for(let r=0;r<e.length;r+=6){let i=e[r],a=e[r+1],o=e[r+2],s=e[r+3],c=e[r+4],l=e[r+5],u=(o-i)*(l-a)-(s-a)*(c-i);Math.abs(u)<1e-5||(u>0&&([o,c]=[c,o],[s,l]=[l,s]),n.push(i,t(i,a),a,o,t(o,s),s,c,t(c,l),l))}return n}function Gc(e,t){let{coords:n,holes:r}=Vc(e),i=Ws(n,r,2),a=[];for(let e of i)a.push(n[e*2],n[e*2+1]);let o=()=>t;return{tris:Wc(a,o),topAt:o,creases:[],eaveY:t,tier:3}}var Kc={straight:[[0,0],[1,1]],dome:[[0,0],[.1,.436],[.25,.661],[.45,.835],[.7,.954],[1,1]],mansard:[[0,0],[.22,.62],[1,1]]};function qc(e,t){if(t<=0)return 0;if(t>=1)return 1;for(let n=1;n<e.length;n++){let[r,i]=e[n];if(t<=r){let[a,o]=e[n-1];return o+(i-o)*(t-a)/(r-a)}}return 1}function Jc(e,t){if(e.length!==1||t.topY<t.eaveY+.1)return null;let n=e[0],r=n.length/2;if(r<3)return null;let i=0;for(let e=0;e<r;e++){let t=(e+1)%r;i+=n[e*2]*n[t*2+1]-n[t*2]*n[e*2+1]}if(Math.abs(i)<1e-6)return null;let a=Math.sign(i),o=[],s=[],c=[],l=[];for(let e=0;e<r;e++){let i=(e+1)%r,u=(e+2)%r,d=n[e*2],f=n[e*2+1],p=n[i*2]-d,m=n[i*2+1]-f,h=n[u*2]-n[i*2];if((p*(n[u*2+1]-n[i*2+1])-m*h)*a<-1e-6)return null;let g=Math.hypot(p,m);if(g<1e-6)return null;let _=-m/g*a,v=p/g*a,y=(t.cx-d)*_+(t.cz-f)*v;if(y<.001)return null;o.push(_),s.push(v),c.push(d*_+f*v),l.push(y)}let u=t.topY-t.eaveY,d=(e,t)=>{let n=1;for(let i=0;i<r;i++)n=Math.min(n,(e*o[i]+t*s[i]-c[i])/l[i]);return Math.max(0,n)},f=(e,n)=>t.eaveY+u*qc(t.profile,d(e,n)),p=[],m=(e,r)=>[t.cx+(n[e*2]-t.cx)*r,t.cz+(n[e*2+1]-t.cz)*r],h=(e,t,n,r,i,a)=>{let o=(n[0]-e[0])*(i[1]-e[1])-(n[1]-e[1])*(i[0]-e[0]);Math.abs(o)<1e-5||(o>0?p.push(e[0],t,e[1],i[0],a,i[1],n[0],r,n[1]):p.push(e[0],t,e[1],n[0],r,n[1],i[0],a,i[1]))};for(let e=0;e<r;e++){let n=(e+1)%r;for(let r=1;r<t.profile.length;r++){let[i,a]=t.profile[r-1],[o,s]=t.profile[r],c=t.eaveY+u*a,l=t.eaveY+u*s,d=m(e,1-i),f=m(n,1-i),p=m(e,1-o),g=m(n,1-o);h(d,c,f,c,g,l),o<1&&h(d,c,g,l,p,l)}}return{tris:p,topAt:f,creases:[],eaveY:t.eaveY,tier:1}}function Yc(e,t){let n=Hc(e);if(!n)return null;let{box:r,profile:i}=t,a=t.ridgeAcross?-r.uz:r.ux,o=t.ridgeAcross?r.ux:r.uz,s=-o,c=a,l=0,u=0;for(let e=0;e<n.coords.length;e+=2){let t=n.coords[e]-r.cx,i=n.coords[e+1]-r.cz;l=Math.max(l,Math.abs(t*s+i*c)),u=Math.max(u,Math.abs(t*a+i*o))}if(l<.5)return null;let{eaveY:d,roofHeight:f}=Ic(t.pitch,l),p=Math.min(l,u*.8),m=(e,n)=>{let m=e-r.cx,h=n-r.cz,g=1-Math.abs(m*s+h*c)/l;return t.hipped&&(g=Math.min(g,(u-Math.abs(m*a+h*o))/p)),i?d+f*qc(i,g):d+f*Math.max(0,g)},h=r.cx*s+r.cz*c,g=[{nx:s,nz:c,off:h}];if(t.hipped){let e=r.cx*a+r.cz*o;for(let t of[-1,1])for(let n of[-1,1]){let r=t*a/p+n*s/l,i=t*o/p+n*c/l;g.push({nx:r,nz:i,off:u/p-1+t*e/p+n*h/l})}}if(i){let e=r.cx*a+r.cz*o;for(let n=1;n+1<i.length;n++){let r=i[n][0];for(let e of[-1,1])g.push({nx:s,nz:c,off:h+e*(1-r)*l});if(t.hipped)for(let t of[-1,1])g.push({nx:a,nz:o,off:e+t*(u-r*p)})}}let _=[];for(let e of n.indices)_.push(n.coords[e*2],n.coords[e*2+1]);for(let e of g)_=Uc(_,e);return{tris:Wc(_,m),topAt:m,creases:g,eaveY:d,tier:1}}function Xc(e,t){let n=Array.from(e);for(let e=0;e<200&&n.length>8;e++){let e=n.length/2,r=t,i=-1;for(let t=0;t<e;t++){let a=(t+1)%e,o=Math.hypot(n[a*2]-n[t*2],n[a*2+1]-n[t*2+1]);o<r&&(r=o,i=t)}if(i<0)break;let a=(i+1)%e,o=(n[i*2]+n[a*2])/2,s=(n[i*2+1]+n[a*2+1])/2,c=[];for(let t=0;t<e;t++)t!==a&&(t===i?c.push(o,s):c.push(n[t*2],n[t*2+1]));n=c}return n}function Zc(e,t,n=1/0){let r=Hc(e);if(!r)return null;let i=[];for(let t of e){let e=Xc(t,zc),n=e.length/2,r=i.length;for(let t=0;t<n;t++){let a=(t+1)%n,o=e[t*2],s=e[t*2+1],c=e[a*2]-o,l=e[a*2+1]-s,u=Math.hypot(c,l)||1e-6;i.push({ax:o,az:s,dx:c/u,dz:l/u,len:u,next:r+a,reflexEnd:!1})}for(let e=0;e<n;e++){let t=i[r+e],n=i[t.next];t.reflexEnd=t.dx*n.dz-t.dz*n.dx<-.001}}let a=(e,t,n)=>{let r=i[e];return-(t-r.ax)*r.dz+(n-r.az)*r.dx},o=(e,t)=>{let n=1/0,r=0;for(let o=0;o<i.length;o++){let s=i[o],c=(e-s.ax)*s.dx+(t-s.az)*s.dz;if(c>=-.02&&c<=s.len+.02){let i=a(o,e,t),s=i>=-1.2?Math.max(i,0):-i;s<n-1e-7&&(n=s,r=o)}else if(c>s.len&&s.reflexEnd){let c=i[s.next];if((e-c.ax)*c.dx+(t-c.az)*c.dz<0){let i=a(o,e,t),c=a(s.next,e,t),l=Math.max(i,c,0);l<n-1e-7&&(n=l,r=i>=c?o:s.next)}}}if(n===1/0)for(let a=0;a<i.length;a++){let o=i[a],s=ae(e,t,o.ax,o.az,o.ax+o.dx*o.len,o.az+o.dz*o.len);s<n&&(n=s,r=a)}return[n,r]},s=[],c=[];for(let e=0;e<r.coords.length;e+=2)s.push(r.coords[e]),c.push(r.coords[e+1]);let l=r.indices.slice(),u=(e,t)=>e<t?e*1048576+t:t*1048576+e;for(let e=0;e<10;e++){let e=s.length,t=new Map,r=(e,n)=>{if(Math.hypot(s[e]-s[n],c[e]-c[n])<=Rc)return-1;let r=u(e,n),i=t.get(r);return i===void 0&&(i=s.length,s.push((s[e]+s[n])/2),c.push((c[e]+c[n])/2),t.set(r,i)),i},i=[];for(let e=0;e<l.length;e+=3){let t=[l[e],l[e+1],l[e+2]],n=[r(t[0],t[1]),r(t[1],t[2]),r(t[2],t[0])],a=n.filter(e=>e>=0).length;if(a===0)i.push(t[0],t[1],t[2]);else if(a===3)i.push(t[0],n[0],n[2],n[0],t[1],n[1],n[2],n[1],t[2],n[0],n[1],n[2]);else if(a===1){let e=n.findIndex(e=>e>=0),r=t[e],a=t[(e+1)%3],o=t[(e+2)%3];i.push(r,n[e],o,n[e],a,o)}else{let e=n.findIndex(e=>e<0),r=t[e],a=t[(e+1)%3],o=t[(e+2)%3],s=n[(e+1)%3],c=n[(e+2)%3];i.push(c,s,o,r,a,s,r,s,c)}}if(i.length/3>n){s.length=e,c.length=e;break}if(l=i,t.size===0)break}let d=[],f=[];for(let e=0;e<s.length;e++){let[t,n]=o(s[e],c[e]);d.push(t),f.push(n)}let p=(e,t)=>{let[n,r]=o(e,t);return s.push(e),c.push(t),d.push(n),f.push(r),s.length-1},m=new Map,h=(e,t)=>{let n=u(e,t),r=m.get(n);if(r!==void 0)return r;let[i,o]=e<t?[e,t]:[t,e],l=a(f[i],s[i],c[i])-a(f[o],s[i],c[i]),d=a(f[i],s[o],c[o])-a(f[o],s[o],c[o]),h=l*d<0?l/(l-d):.5,g=p(s[i]+(s[o]-s[i])*h,c[i]+(c[o]-c[i])*h);return m.set(n,g),g},g=[];for(let e=0;e<l.length;e+=3){let t=l[e],n=l[e+1],r=l[e+2],i=f[t],a=f[n],o=f[r];if(i===a&&a===o)g.push(t,n,r);else if(i!==a&&a!==o&&i!==o){let e=h(t,n),i=h(n,r),a=h(r,t),o=p((s[e]+s[i]+s[a])/3,(c[e]+c[i]+c[a])/3);g.push(t,e,o,e,n,o,n,i,o,i,r,o,r,a,o,a,t,o)}else{let[e,s,c]=i!==a&&i!==o?[t,n,r]:a!==i&&a!==o?[n,r,t]:[r,t,n],l=h(e,s),u=h(c,e);g.push(e,l,u,l,s,c,l,c,u)}}let _=0;for(let e of d)_=Math.max(_,e);if(_<.5)return null;let{eaveY:v,roofHeight:y}=Ic(t,_),b=y/_,x=[];for(let e=0;e<g.length;e+=3){let t=g[e],n=g[e+1],r=g[e+2],i=(s[n]-s[t])*(c[r]-c[t])-(c[n]-c[t])*(s[r]-s[t]);if(!(Math.abs(i)<1e-5)){i>0&&([n,r]=[r,n]);for(let e of[t,n,r])x.push(s[e],v+b*d[e],c[e])}}return{tris:x,topAt:(e,t)=>v+b*o(e,t)[0],creases:[],eaveY:v,tier:2}}var Qc={doorU:-1e4,doorW:0,doorY:0,groundFloorH:0,win:[0,0,0,0],bits:[0,0,0,0],cols:[0,0,0,0]},$c={a_pos:0,a_normal:1,a_surf:2,a_bld:3,a_mat:4,a_fac:5,a_win:6,a_bits:7,a_col:8},U={wall:0,roofPitched:1,roofFlat:2,trim:3,interior:4,wallInside:5},el={stride:80,attribs:[{name:`a_pos`,size:3,type:`f32`,offset:0},{name:`a_normal`,size:4,type:`i8`,offset:12},{name:`a_surf`,size:4,type:`f32`,offset:16},{name:`a_bld`,size:4,type:`f32`,offset:32},{name:`a_mat`,size:4,type:`u8`,integer:!0,offset:48},{name:`a_fac`,size:4,type:`f32`,offset:52},{name:`a_win`,size:4,type:`u8`,integer:!0,offset:68},{name:`a_bits`,size:4,type:`u8`,integer:!0,offset:72},{name:`a_col`,size:4,type:`u8`,integer:!0,offset:76}]},tl=.02,nl=class{buf=new ArrayBuffer(1<<21);f32=new Float32Array(this.buf);i8=new Int8Array(this.buf);u8=new Uint8Array(this.buf);count=0;grow(){let e=new ArrayBuffer(this.buf.byteLength*2);new Uint8Array(e).set(this.u8),this.buf=e,this.f32=new Float32Array(e),this.i8=new Int8Array(e),this.u8=new Uint8Array(e)}push(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m=Qc){(this.count+1)*80>this.buf.byteLength&&this.grow();let h=this.count*80,g=h/4;this.f32[g]=e,this.f32[g+1]=t,this.f32[g+2]=n,this.i8[h+12]=Math.round(r*127),this.i8[h+13]=Math.round(i*127),this.i8[h+14]=Math.round(a*127),this.i8[h+15]=o,this.f32[g+4]=s,this.f32[g+5]=c,this.f32[g+6]=l,this.f32[g+7]=u,this.f32[g+8]=p,this.f32[g+9]=f,this.f32[g+10]=d.seed,this.f32[g+11]=d.bayWidth,this.u8[h+48]=d.wallColor,this.u8[h+49]=d.roofColor,this.u8[h+50]=d.windowStyle,this.u8[h+51]=d.trimColor,this.f32[g+13]=m.doorU,this.f32[g+14]=m.doorW,this.f32[g+15]=m.doorY,this.f32[g+16]=m.groundFloorH;for(let e=0;e<4;e++){let t=e===1&&m.bits[1]&128?tl*4:tl;this.u8[h+68+e]=Math.max(0,Math.min(255,Math.round(m.win[e]/t))),this.u8[h+72+e]=m.bits[e],this.u8[h+76+e]=m.cols[e]}this.count++}growIn(e,t,n,r,i){for(let a=e;a<t;a++){let e=a*80/4;this.f32[e+13]=n,this.f32[e+14]=-Math.max(.001,r),this.f32[e+15]=i}}bytes(){return new Uint8Array(this.buf,0,this.count*80)}};function rl(e,t,n=0,r=!1){let i={seed:I(t.hash),bayWidth:1,wallColor:t.color,roofColor:t.color,windowStyle:0,trimColor:t.color},a=-t.uz,o=t.ux,s=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([e,n])=>[t.cx+t.ux*t.halfL*e+a*t.halfW*n,t.baseY+t.slope*t.halfL*e,t.cz+t.uz*t.halfL*e+o*t.halfW*n]),c=(t,r,a,o,s)=>e.push(t[0],t[1]+r,t[2],a,o,s,U.trim+8*n,0,0,r,100,i,1,3);for(let e=0;e<4;e++){let n=s[e],r=s[(e+1)%4],i=Math.hypot(r[0]-n[0],r[2]-n[2])||1,a=(r[2]-n[2])/i,o=-(r[0]-n[0])/i;c(n,0,a,0,o),c(r,t.height,a,0,o),c(r,0,a,0,o),c(n,0,a,0,o),c(n,t.height,a,0,o),c(r,t.height,a,0,o)}let l=s[0],u=s[1],d=s[2],f=s[3];c(l,t.height,0,1,0),c(f,t.height,0,1,0),c(u,t.height,0,1,0),c(u,t.height,0,1,0),c(f,t.height,0,1,0),c(d,t.height,0,1,0),r&&(c(l,0,0,-1,0),c(u,0,0,-1,0),c(f,0,0,-1,0),c(u,0,0,-1,0),c(d,0,0,-1,0),c(f,0,0,-1,0))}function il(e,t,n,r,i,a,o,s,c,l,u,d){let f=(i+a)/2,p=(o+s)/2,m=r,h=-n,g=a-i>=s-o;return{cx:e+n*f+m*p,cz:t+r*f+h*p,baseY:c,ux:g?n:m,uz:g?r:h,halfL:(g?a-i:s-o)/2,halfW:(g?s-o:a-i)/2,height:l,slope:0,color:u,hash:d}}function al(e,t,n){if(!ie(e.cx,e.cz,t))return!1;for(let[r,i]of[[-1,-1],[1,-1],[1,1],[-1,1]])if(!ie(e.cx+e.ux*(e.halfL+n)*r-e.uz*(e.halfW+n)*i,e.cz+e.uz*(e.halfL+n)*r+e.ux*(e.halfW+n)*i,t))return!1;return!0}function ol(e){let t=(e.wallFinish??0)&3,n=(e.roofCover??0)&3,r=+!!e.facade?.window.shutters;return t===0&&n===0&&r===0?e.windowStyle:e.windowStyle&3|t<<2|n<<4|r<<6}function sl(e,t){let n=null,r={ridgeY:e.ridgeY,eaveWanted:e.eaveY,minEaveY:e.groundRef+t.minWallHeight,minSlope:t.roofSlopeMin,maxSlope:t.roofSlopeMax};if(e.roof===`gable`||e.roof===`hip`){let t={box:e.box,ridgeAcross:e.ridgeAcross,hipped:e.roof===`hip`,pitch:r};n=Yc(e.rings,e.roofProfile?{...t,profile:e.roofProfile}:t)}else e.roof===`field`?n=Zc(e.rings,r,t.fieldRoofMaxTriangles):e.roof===`mansard`?n=Yc(e.rings,{box:e.box,ridgeAcross:e.ridgeAcross,hipped:!0,pitch:r,profile:e.roofProfile??Kc.mansard}):(e.roof===`apex`||e.roof===`dome`)&&(n=Jc(e.rings,{cx:e.box.cx,cz:e.box.cz,eaveY:Math.max(e.eaveY,e.groundRef+t.minWallHeight),topY:e.ridgeY,profile:e.roofProfile??(e.roof===`dome`?Kc.dome:Kc.straight)}));return n?{roof:n,fellBack:!1}:{roof:Gc(e.rings,e.roof===`flat`?e.eaveY:e.ridgeY),fellBack:e.roof!==`flat`}}function cl(e,t,n,r,i=1){if(r<t.roofUnitMinRoofArea)return[];let a=Math.min(t.roofUnitMaxCount,Math.max(1,Math.floor(r/t.roofUnitAreaPerUnit))),o=[],{box:s}=e,c=1.2;for(let r=0;r<a;r++)for(let a=0;a<8;a++){let l=F(e.hash,500+r,a),u=e=>I(F(l,e)),d=(t.roofUnitMinSize+(t.roofUnitMaxSize-t.roofUnitMinSize)*u(1)*u(1))/2*i,f=Math.max(t.roofUnitMinSize/2,d*(.45+.5*u(2))),p=(u(3)*2-1)*Math.max(0,s.halfL-d-c),m=(u(4)*2-1)*Math.max(0,s.halfW-f-c),h=s.cx+s.ux*p-s.uz*m,g=s.cz+s.uz*p+s.ux*m;if(!al({cx:h,cz:g,ux:s.ux,uz:s.uz,halfL:d,halfW:f},e.rings,c)||o.some(e=>Math.hypot(e.cx-h,e.cz-g)<e.halfL+d+1))continue;let _=d*2>3,v=(t.roofUnitMinHeight+(t.roofUnitMaxHeight-t.roofUnitMinHeight)*(_?.5+.5*u(5):.4*u(5)))*(i<1?.6:1);o.push({cx:h,cz:g,baseY:n,ux:s.ux,uz:s.uz,halfL:d,halfW:f,height:v,slope:0,color:_?e.wallColor:e.roofUnitColor,hash:l});break}return o}function ll(e,t,n,r,i){let a=[0,1];for(let o of i){let i=o.nx*e+o.nz*t-o.off,s=o.nx*n+o.nz*r-o.off;if(i*s<0){let e=i/(i-s);e>.001&&e<.999&&a.push(e)}}return a.sort((e,t)=>e-t)}var ul={door:Rs.door,garage:Rs.garage,portal:Rs.portal,arch:Rs.arch};function dl(e,t){return e===Rs.arch?t*R.archHeightPerWidth:e===Rs.garage?R.garageDoorHeight:e===Rs.portal?R.portalHeight:R.doorHeight}var fl=new WeakMap;function pl(e){let t=fl.get(e);if(t&&t.rings.length===e.length&&t.rings.every((t,n)=>t===e[n].rings))return t.index;let n=e.map(e=>e.rings),r=e.some(e=>e.facade)?new zs(n):null;return fl.set(e,{rings:n,index:r}),r}function ml(e,t,n,r){let i=z.recipe;t.blind&&(i|=z.blind),e.panelJoints&&(i|=z.panelJoints),e.stairStrip&&(i|=z.stairStrip),e.window.transom&&(i|=z.transom),t.balconies&&e.balconies&&(i|=z.balconies,e.balconies.kind===`loggia`&&(i|=z.loggia)),e.cornice&&(i|=z.cornice);let a=Math.min(e.window.width,t.colW*.7),o=Math.min(e.window.height,r-.55),s=Math.min(e.window.sill,Math.max(.3,r-o-.25)),c=Math.round(Math.max(0,Math.min(1,e.curtainShare))*15),l=Math.round(Math.max(0,Math.min(1,e.blindShare))*15),u=e.balconies?e.balconies.columnMask&15:0,d=e.window.arch?128:0;return{doorU:-1e4,doorW:0,doorY:0,groundFloorH:n,win:[a,o,s,e.plinthHeight],bits:[i,e.window.mullions|e.groundFloor<<2|d,c|l<<4,u|(e.window.narrowMask&15)<<4],cols:[e.colors.frame,e.colors.plinth,e.colors.door,e.colors.accent]}}function hl(e,t,n,r,i,a,o,s,c,l,u,d){e.entrances.forEach((f,p)=>{let m=null,h=1/0;for(let e of t){if(e.party||e.len<f.width+.4)continue;let t=(f.x-(e.ax+e.bx)/2)*e.nx+(f.z-(e.az+e.bz)/2)*e.nz,n=ae(f.x,f.z,e.ax,e.az,e.bx,e.bz)+(t<0?6:0);n<h&&(h=n,m=e)}if(!m){o.entrancesDropped++;return}let g=m,_=(f.x-g.ax)*g.dx+(f.z-g.az)*g.dz,v=(Math.max(0,Math.min(g.cols-1,Math.floor(_/g.colW)))+.5)*g.colW,y=f.width/2,b=Math.min(R.wallEndMargin,(g.len-f.width)/2);if(v=Math.max(b+y,Math.min(g.len-b-y,v)),g.doors.some(e=>Math.abs(e.u-v)<Math.max(g.colW,f.width+.6)))return;let x=ul[f.kind],S=g.ax+g.dx*v,C=g.az+g.dz*v,w=Math.max(a(S-g.dx*y,C-g.dz*y),a(S+g.dx*y,C+g.dz*y),a(S,C)),T=a(S+g.nx*.8,C+g.nz*.8),E=Math.max(w+.02,T+f.raise),D=E-T,O=D>R.minStepHeight?Math.min(R.maxSteps,Math.ceil(D/R.stepRise)-1):-1,k=Math.max(f.canopy,O>=0?R.landingDepth+O*R.stepTread:.3),A=Math.max(R.canopyExtraWidth,.6)/2;if(i.anyOccupied(Vs(g.ax,g.az,g.dx,g.dz,v-y-A,v+y+A,.05,k+.1),r,d)){o.entrancesDropped++;return}g.doors.push({u:v,width:f.width,y:E,kind:x,spec:f}),g.doors.sort((e,t)=>e.u-t.u),o.entrances++;let j=F(n.hash,800,p);if(O>=0){let t=f.width+.5;for(let n=0;n<=O;n++){let r=n===0?0:R.landingDepth+(n-1)*R.stepTread,i=R.landingDepth+n*R.stepTread,o=E-n*R.stepRise,l=Vs(g.ax,g.az,g.dx,g.dz,v-t/2,v+t/2,r,i),u=1/0;for(let e=0;e<8;e+=2)u=Math.min(u,a(l[e],l[e+1]));let d=Math.min(u,o)-R.stepSink,f=il(g.ax,g.az,g.dx,g.dz,v-t/2,v+t/2,r,i,d,o-d,e.colors.plinth,F(j,n));rl(c,f),s.push(f)}o.steps++}if(f.canopy>0){let e=f.width+R.canopyExtraWidth,r=E+dl(x,f.width)+R.canopyGap,i=il(g.ax,g.az,g.dx,g.dz,v-e/2,v+e/2,0,f.canopy,r,R.canopyThickness,n.trimColor,F(j,99));l.push({k:p,edge:t.indexOf(g),u:v,box:i}),(!u||u(p))&&rl(c,i),o.canopies++}})}function gl(e,t,n){let{box:r}=e,i=e.ridgeAcross?[-r.uz,r.ux]:[r.ux,r.uz],a=e.ridgeAcross?r.halfW:r.halfL,o=[-i[1],i[0]],s=Math.max(1,Math.min(t.chimneys,Math.round(a*2/9))),[c,l]=R.chimneySize,u=[];for(let d=0;d<s;d++){let f=F(e.hash,1e3,d),p=e=>I(F(f,e)),m=s===1?(p(1)-.5)*.6:-.6+1.2*d/(s-1)+(p(1)-.5)*.15,h=(p(2)<.5?-1:1)*(.4+.9*p(3)),g=r.cx+i[0]*m*a+o[0]*h,_=r.cz+i[1]*m*a+o[1]*h,v={cx:g,cz:_,ux:i[0],uz:i[1],halfL:l/2,halfW:c/2};if(!al(v,e.rings,.6))continue;let y=1/0,b=-1/0;for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let r=n.topAt(g+v.ux*v.halfL*e-v.uz*v.halfW*t,_+v.uz*v.halfL*e+v.ux*v.halfW*t);y=Math.min(y,r),b=Math.max(b,r)}let x=Math.max(b+.5,n.topAt(r.cx,r.cz)+R.chimneyAboveRidge*(.6+.6*p(4)));u.push({edge:-1,c:0,f:0,k:d,box:{...v,baseY:y-.1,height:x-y+.1,slope:0,color:t.colors.chimney,hash:f}})}return u}var W={foundation:1,wall:2,roof:3,balcony:4,canopy:5,chimney:6,roofTop:7,slab:8,partition:9,stair:10},_l=(e,t)=>(e<<28|t)>>>0;function G(e,t,n,r,i){return t>15||n>1023||r>255||i>63?-1:_l(e,t<<24|n<<14|r<<6|i)}var vl=()=>_l(W.foundation,0),yl=(e,t)=>_l(W.roof,e<<8|t),bl=e=>_l(W.canopy,e&255),xl=e=>_l(W.chimney,e&255),Sl=e=>_l(W.roofTop,e&4095);function Cl(e,t,n){return e>63||t>1023||n>1023?-1:_l(W.slab,e<<20|t<<10|n)}function wl(e,t,n,r){return e>127||n>1023||r>1023?-1:_l(W.partition,e<<21|t<<20|n<<10|r)}var Tl=e=>_l(W.stair,e&255);function El(e,t){if(!e)return!1;if(e.ruin)return!0;let n=e.parts.get(t);return n!==void 0&&y(n)===g.gone}var Dl={slab:.22,partition:.12,doorWidth:.9,coreDoorWidth:1.1,doorHeight:2.05,corridorDepth:10,corridorWidthMin:1.7,corridorWidthMax:2.2,roomMin:2.4,roomWidthMin:3.2,roomWidthMax:5.6,roomMax:7,rowMax:7.5,oneRoomArea:28,oneRoomWidth:4,stairWidthMin:2.2,stairWidthMax:2.7,landingMin:.9,landingMax:1.15,stairRise:.185,stairRiseMax:.23,treadMin:.21,treadMax:.29,flightGap:.14,minCellArea:.6},Ol={room:0,corridor:1,core:2,attic:3},kl=(e,t,n)=>(t-e.cx)*e.ux+(n-e.cz)*e.uz,Al=(e,t,n)=>-(t-e.cx)*e.uz+(n-e.cz)*e.ux,K=(e,t,n)=>e.cx+e.ux*t-e.uz*n,q=(e,t,n)=>e.cz+e.uz*t+e.ux*n;function jl(e,t){let n=e,r=[[0,1,t.s0],[0,-1,t.s1],[1,1,t.t0],[1,-1,t.t1]];for(let[e,t,i]of r){if(n.length<3)return[];let r=[];for(let a=0;a<n.length;a++){let o=n[a],s=n[(a+1)%n.length],c=t*(o[e]-i),l=t*(s[e]-i);if(c>=0&&r.push(o),c>=0!=l>=0){let e=c/(c-l);r.push(o.map((t,n)=>t+(s[n]-t)*e))}}n=r}return n.length>=3?n:[]}function Ml(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return Math.abs(t)/2}function Nl(e,t,n,r,i){let a=[0,1],o=r-t,s=i-n;for(let r of e){let e=r.length/2;for(let i=0;i<e;i++){let c=(i+1)%e,l=r[i*2],u=r[i*2+1],d=r[c*2]-l,f=r[c*2+1]-u,p=o*f-s*d;if(Math.abs(p)<1e-12)continue;let m=((l-t)*f-(u-n)*d)/p,h=((l-t)*s-(u-n)*o)/p;m>1e-6&&m<1-1e-6&&h>=0&&h<1&&a.push(m)}}a.sort((e,t)=>e-t);let c=[];for(let r=0;r+1<a.length;r++){let i=a[r],l=a[r+1];if(l-i<1e-6)continue;let u=(i+l)/2;if(!ie(t+o*u,n+s*u,e))continue;let d=c[c.length-1];d&&Math.abs(d[1]-i)<1e-9?d[1]=l:c.push([i,l])}return c}function Pl(e,t){for(let n=1;n<e.length-1;n++)if(t<e[n])return n-1;return e.length-2}function Fl(e,t,n){let r=kl(e.frame,t,n),i=Al(e.frame,t,n),{sCuts:a,tCuts:o}=e;return r<a[0]-1e-6||r>a[a.length-1]+1e-6||i<o[0]-1e-6||i>o[o.length-1]+1e-6?-1:Pl(a,r)*(o.length-1)+Pl(o,i)}function Il(e,t){let n=e.rec;if(n){if(t.blind)return 0;let e=Math.min(n.window.width,t.colW*.7);return n.groundFloor===Ls.glazed&&(e=Math.max(e,Math.min(.82,(t.colW-.5)/t.colW)*t.colW)),Math.min(e,.86*t.colW)}let r=e.b.windowStyle;return r===0||t.len<=e.b.bayWidth*.7?0:r===2?.8*t.colW:r===3?.36*t.colW:Math.max(.38,Math.min(.66,1.5/t.colW))*t.colW}function Ll(e,t,n,r,i){if(Math.abs(t.dx*r+t.dz*i)>.8)return!1;let a=Dl.partition/2;for(let e of t.doors)if(Math.abs(n-e.u)<e.width/2+a+.2)return!1;let o=Il(e,t);if(o<=0)return!0;let s=Math.round(n/t.colW),c=Math.max(.02,(t.colW-o)/2-a-.08);return Math.abs(n-s*t.colW)<=c}function Rl(e,t,n){let{b:r,edges:i}=e,a=Dl,o={cx:r.box.cx,cz:r.box.cz,ux:r.box.ux,uz:r.box.uz},s=r.box.halfL,c=r.box.halfW,l=(e,...t)=>I(F(r.hash,6782,e,...t)),u=[];for(let t=0;t<e.floors;t++)u.push(t===0?e.floorBase:e.floorBase+e.groundFloorH+(t-1)*e.floorHeight);u.push(e.eaveY);let d=e.eaveY;for(let t=1;t<e.roof.tris.length;t+=3)d=Math.max(d,e.roof.tris[t]);let f=!e.flat&&d-e.eaveY>1.2,p=[];for(let t=0;t<e.floors;t++)p.push(u[t+1]-(t+1<e.floors||!e.flat?a.slab:n));let m={ok:!1,frame:o,sCuts:[-s,s],tCuts:[-c,c],corridorRow:-1,insets:[],tris:[],cells:[],rooms:[],partitions:[],core:null,floorY:u,ceilY:p,attic:f,wallSplits:i.map(()=>[])},h=r.rings.map(e=>se(e,t));if(h.some(e=>e===null))return m;let g=h,_=[],v=[];g.forEach((e,t)=>{t>0&&v.push(_.length/2);for(let t of e)_.push(t)});let y=Ws(_,v,2),b=[];for(let e=0;e<y.length;e+=3){let t=[y[e],y[e+1],y[e+2]].flatMap(e=>[_[e*2],_[e*2+1]]);ie((t[0]+t[2]+t[4])/3,(t[1]+t[3]+t[5])/3,r.rings)&&b.push(...t)}let x=0;for(let e=0;e<b.length;e+=6)x+=Math.abs((b[e+2]-b[e])*(b[e+5]-b[e+1])-(b[e+4]-b[e])*(b[e+3]-b[e+1]))/2;if(x<2)return m;let S=x<a.oneRoomArea||2*c<a.oneRoomWidth,C=[-s];if(!S){let e=i.filter(e=>Math.abs(e.dx*o.ux+e.dz*o.uz)>.95),t=e.length>0?e:i,n=[];for(let e of t)for(let t=1;t<e.cols;t++)n.push(kl(o,e.ax+e.dx*t*e.colW,e.az+e.dz*t*e.colW));n.sort((e,t)=>e-t);let r=[];for(let e of n)(r.length===0||e-r[r.length-1]>.3)&&r.push(e);for(let e=0;e<256;e++){let t=C[C.length-1],n=s-t;if(n<2*a.roomMin)break;let i=t+a.roomWidthMin+(a.roomWidthMax-a.roomWidthMin)*l(1,e);if(i>s-a.roomMin){if(n<=a.roomMax)break;i=t+n/2}let o=NaN;for(let e of r)e<t+a.roomMin||e>s-a.roomMin||(Number.isNaN(o)||Math.abs(e-i)<Math.abs(o-i))&&(o=e);C.push(!Number.isNaN(o)&&Math.abs(o-i)<=1.6?o:i)}}C.push(s);let w=C.length-1,T=[-c],E=-1,D=[];for(let t of i)if(!(Math.abs(t.dx*o.ux+t.dz*o.uz)>.3)){for(let e=1;e<t.cols;e++)D.push(Al(o,t.ax+t.dx*e*t.colW,t.az+t.dz*e*t.colW));Il(e,t)<=0&&D.push(NaN)}let O=(e,t)=>{let n=Math.max(1,Math.ceil((t-e)/a.rowMax-1e-6));for(let r=1;r<n;r++){let i=e+(t-e)*r/n,o=i;for(let n of D)Number.isNaN(n)||n<e+a.roomMin||n>t-a.roomMin||Math.abs(n-i)<=1.8&&Math.abs(n-i)<Math.abs(o-i)&&(o=n);T.push(o)}};if(!S&&2*c>=a.corridorDepth&&w>=3){let e=a.corridorWidthMin+(a.corridorWidthMax-a.corridorWidthMin)*l(2),t=(l(3)-.5)*.12*2*c;O(-c,t-e/2),T.push(t-e/2),E=T.length-1,T.push(t+e/2),O(t+e/2,c)}else S||O(-c,c);T.push(c);let k=T.length-1,A=(e,t)=>E>=0&&t===E&&e>=1&&e<=w-2,j=[];for(let e=0;e<b.length;e+=6){let t=[];for(let n=0;n<6;n+=2)t.push([kl(o,b[e+n],b[e+n+1]),Al(o,b[e+n],b[e+n+1])]);j.push(t)}let M=[];for(let e=0;e<w;e++)for(let t=0;t<k;t++){let n={s0:C[e],s1:C[e+1],t0:T[t],t1:T[t+1]},r=[],i=0;for(let e of j){let t=e.map(e=>e[0]),a=e.map(e=>e[1]);if(Math.max(...t)<=n.s0||Math.min(...t)>=n.s1||Math.max(...a)<=n.t0||Math.min(...a)>=n.t1)continue;let s=jl(e,n),c=s.length?Ml(s):0;c<1e-4||(i+=c,r.push(s.flatMap(e=>[K(o,e[0],e[1]),q(o,e[0],e[1])])))}M.push({i:e,j:t,polys:i>=a.minCellArea?r:[],area:i>=a.minCellArea?i:0,room:-1})}let N=(e,t)=>e*k+t,P=e=>M[e].area>0,ee=new Map;i.forEach((e,t)=>ee.set(e.ring*4096+e.i,t));let te=i.map(()=>[]),ne=(e,t)=>{let n=null,r=1/0;return g.forEach((a,o)=>{let s=a.length/2;for(let c=0;c<s;c++){let l=(c+1)%s,u=a[c*2],d=a[c*2+1],f=a[l*2]-u,p=a[l*2+1]-d,m=f*f+p*p;if(m<1e-12)continue;let h=Math.max(0,Math.min(1,((e-u)*f+(t-d)*p)/m)),g=Math.hypot(e-u-f*h,t-d-p*h),_=ee.get(o*4096+c);if(_===void 0||g>=r)continue;let v=i[_];r=g,n={ei:_,u:(e-v.ax)*v.dx+(t-v.az)*v.dz}}}),n},re=[],ae=[],L=(t,n,r,a,s)=>{if(!P(a)||!P(s))return;let c=C[n],l=t===0?C[n]:C[n+1],u=T[r],d=t===0?T[r+1]:T[r],f=K(o,c,u),p=q(o,c,u),m=K(o,l,d),h=q(o,l,d),_=Math.hypot(m-f,h-p),v=(m-f)/_,y=(h-p)/_,b=[],x=[],S=!0;for(let[t,n]of Nl(g,f,p,m,h)){if((n-t)*_<.4)continue;let r={s0:c+(l-c)*t,t0:u+(d-u)*t,s1:c+(l-c)*n,t1:u+(d-u)*n,wall0:t>1e-6,wall1:n<1-1e-6};for(let[a,o]of[[r.wall0,t],[r.wall1,n]]){if(!a)continue;let t=ne(f+(m-f)*o,p+(h-p)*o);!t||!Ll(e,i[t.ei],t.u,v,y)?S=!1:x.push(t)}b.push(r)}S&&b.length!==0&&ae.push({part:{dir:t,i:n,j:r,cellA:a,cellB:s,segs:b,door:null},hits:x})};for(let e=1;e<w;e++)for(let t=0;t<k;t++)E>=0&&t===E&&e!==1&&e!==w-1||L(0,e,t,N(e-1,t),N(e,t));for(let e=1;e<k;e++)for(let t=0;t<w;t++)E>=0&&(t===0||t===w-1)||L(1,t,e,N(t,e-1),N(t,e));for(let{part:e,hits:t}of ae){re.push(e);for(let e of t)te[e.ei].push(e.u)}for(let e of te)e.sort((e,t)=>e-t);let oe=(e,t)=>re.some(n=>n.dir===0&&n.i===e&&(n.j===t||n.j===t-1));for(let e of re)if(e.dir===1)for(let t of e.segs){let n=a.partition/2;!t.wall0&&Math.abs(t.s0-C[e.i])<1e-6&&oe(e.i,e.j)&&(t.s0+=n),!t.wall1&&Math.abs(t.s1-C[e.i+1])<1e-6&&oe(e.i+1,e.j)&&(t.s1-=n)}let ce=M.map((e,t)=>t),le=e=>{for(;ce[e]!==e;)e=ce[e]=ce[ce[e]];return e},ue=(e,t)=>{let n=le(e),r=le(t);n!==r&&(ce[Math.max(n,r)]=Math.min(n,r))},de=new Set(re.map(e=>`${e.cellA}:${e.cellB}`)),fe=(e,t,n)=>{let r=C[t],i=e===0?C[t]:C[t+1],a=T[n],s=e===0?T[n+1]:T[n];return Nl(g,K(o,r,a),q(o,r,a),K(o,i,s),q(o,i,s)).some(([e,t])=>t-e>.001)};for(let e=0;e<w;e++)for(let t=0;t<k;t++){let n=N(e,t);P(n)&&(e+1<w&&P(N(e+1,t))&&!de.has(`${n}:${N(e+1,t)}`)&&fe(0,e+1,t)&&ue(n,N(e+1,t)),t+1<k&&P(N(e,t+1))&&!de.has(`${n}:${N(e,t+1)}`)&&fe(1,e,t+1)&&ue(n,N(e,t+1)))}let pe=[],me=new Map;M.forEach((e,t)=>{if(!P(t))return;let n=le(t),i=me.get(n);i===void 0&&(i=pe.length,me.set(n,i),pe.push({type:Ol.room,cells:[],hash:I(F(r.hash,29293,n))})),pe[i].cells.push(t),e.room=i,A(e.i,e.j)&&(pe[i].type=Ol.corridor)});for(let e=re.length-1;e>=0;e--){let t=re[e];M[t.cellA].room===M[t.cellB].room&&re.splice(e,1)}let he=pe.findIndex(e=>e.type===Ol.corridor),ge=null;if(e.floors>=2&&pe.length>1){let t=0;for(let n=0;n+1<e.floors;n++)t=Math.max(t,u[n+1]-u[n]);let n=Math.ceil(t/2/a.stairRise),r=n*a.treadMin+2*a.landingMin,s=n*.27+2.2,c=0,l=E>=0?(T[E]+T[E+1])/2:0,d=i.flatMap(e=>e.doors.filter(e=>e.kind!==Rs.garage).map(t=>({e,d:t})))[0];if(d){let e=d.e.ax+d.e.dx*d.d.u-d.e.nx*2,t=d.e.az+d.e.dz*d.d.u-d.e.nz*2;c=kl(o,e,t),l=Al(o,e,t)}let f=1/0,p=[];pe.forEach(e=>{e.type===Ol.room&&e.cells.length===1&&p.push(e.cells[0])});let m=p.length;pe.forEach(e=>{e.type===Ol.room&&e.cells.length>1&&p.push(...e.cells)}),p.forEach((e,t)=>{let n=M[e],i=1/0,u=-1/0,d=1/0,p=-1/0;for(let e of n.polys)for(let t=0;t<e.length;t+=2){let n=kl(o,e[t],e[t+1]),r=Al(o,e[t],e[t+1]);i=Math.min(i,n),u=Math.max(u,n),d=Math.min(d,r),p=Math.max(p,r)}let h=a.partition/2+.04;i+=h,u-=h,d+=h,p-=h;let _=u-i>=p-d,v=_?u-i:p-d,y=_?p-d:u-i;if(v<r||y<a.stairWidthMin)return;let b=Math.min(v,s),x=Math.min(y,a.stairWidthMax),S=(i+u)/2,C=(d+p)/2,w=_?{s0:S-b/2,s1:S+b/2,t0:C-x/2,t1:C+x/2}:{s0:S-x/2,s1:S+x/2,t0:C-b/2,t1:C+b/2};if(![[w.s0,w.t0],[w.s1,w.t0],[w.s1,w.t1],[w.s0,w.t1]].every(([t,n])=>ie(K(o,t,n),q(o,t,n),g)&&_e(t,n)===e))return;let T=he>=0&&re.some(t=>t.cellA===e&&M[t.cellB].room===he||t.cellB===e&&M[t.cellA].room===he),E=(t<m?0:1e4)+(T?0:1e3)+Math.hypot(S-c,C-l);E<f-1e-9&&(f=E,ge={cell:e,rect:w,alongS:_,startLow:_?c<=S:l<=C})});let h=ge?pe[M[ge.cell].room]:null;h&&h.cells.length===1&&(h.type=Ol.core)}function _e(e,t){return Pl(C,e)*k+Pl(T,t)}let ve=e=>Math.hypot(e.s1-e.s0,e.t1-e.t0),ye=e=>M[e].room;return pe.forEach((e,t)=>{if(e.type===Ol.corridor)return;let n=e.type===Ol.core?a.coreDoorWidth:a.doorWidth,r=re.filter(e=>ye(e.cellA)===t||ye(e.cellB)===t),i=e=>ye(e.cellA)===t?ye(e.cellB):ye(e.cellA);if(r.some(e=>e.door&&(i(e)===he||he<0)))return;let o=e=>{let t=null;for(let r of e)r.door||r.segs.forEach((e,i)=>{let a=ve(e);a>=n+.5&&(!t||a>t.len+1e-9)&&(t={q:r,seg:i,len:a})});if(!t)return!1;let{q:r,seg:i,len:a}=t,o=(a-n)/2-.25;return r.door={seg:i,at:a/2+(l(4,r.dir,r.i,r.j)*2-1)*Math.max(0,o),width:n},!0};he>=0&&o(r.filter(e=>i(e)===he))||r.some(e=>e.door)||o(r)}),{ok:!0,frame:o,sCuts:C,tCuts:T,corridorRow:E,insets:g,tris:b,cells:M,rooms:pe,partitions:re,core:ge,floorY:u,ceilY:p,attic:f,wallSplits:te}}var J={paint:0,ceiling:1,floor:2,concrete:3,stair:4,atticWall:5,atticFloor:6},zl={floor:5,partition:6},Bl=255;function Vl(e){return e>>>=0,e=(e^e>>>16)>>>0,e=Math.imul(e,2146121005)>>>0,e=(e^e>>>15)>>>0,e=Math.imul(e,2221713035)>>>0,(e^e>>>16)>>>0}function Hl(e,t,n){let r=Vl((Math.imul(e>>>0,2654435761)^Vl(t+Math.imul(n>>>0,2246822507)>>>0))>>>0);return Math.fround(r)/4294967296}var Ul=(e,t)=>Math.floor(Math.fround(Math.fround(e)*t))>>>0;function Wl(e,t,n,r){for(let i of[r+.35,r+1]){let r=Fl(e,t.ax+t.dx*n-t.nx*i,t.az+t.dz*n-t.nz*i);if(r>=0&&e.cells[r].room>=0)return e.cells[r].room}return-1}function Gl(e,t,n){let r=t.rooms.length*e.floors,i={lit:new Float32Array(r).fill(2),glass:new Float32Array(r),dirX:new Float32Array(r),dirZ:new Float32Array(r)},a=Ul(e.mat.seed,16777215),o=e.rec;for(let r of e.edges){let s=a+77+Ul(r.len,31)>>>0;if(o?r.blind:e.b.windowStyle===0||r.len<=e.b.bayWidth*.7)continue;let c=r.doors.length>0?Math.floor(r.doors[0].u/r.colW):-1,l=r.doors.length>0?r.doors[0].kind:0;for(let a=0;a<r.cols;a++){let u=Wl(t,r,(a+.5)*r.colW,n);if(u<0)continue;let d=r.doors.some(e=>Math.floor(e.u/r.colW)===a);for(let n=0;n<e.floors;n++){let f=n,p=1,m;if(o){if(d&&o.stairStrip&&l!==Rs.garage&&a===c||n===0&&(o.groundFloor===Ls.blind||d))continue;n===0&&o.groundFloor!==Ls.windows&&(p=.5);let t=!!(o.window.narrowMask>>a%4&1),i=Math.min(o.window.width*(t?.55:1),.86*r.colW),s=o.window.height;n===0&&o.groundFloor===Ls.glazed?(i=Math.min(.82*r.colW,r.colW-.5),s=e.groundFloorH-.85):n===0&&o.groundFloor===Ls.high&&(i*=.85,s=.7),m=Math.max(0,i)*Math.max(0,s)}else{let i=(t.floorY[n]+t.floorY[n+1])/2-e.floorBase;if(f=Math.floor(i/e.floorHeight),f>=e.floors)continue;p=e.b.windowStyle===1?1:.55;let a=e.b.windowStyle,o=a===2?.8:a===3?.36:Math.min(.66,Math.max(.38,1.5/r.colW)),s=a===2?.48:a===3?.3:Math.min(.62,Math.max(.3,1.65/e.floorHeight));m=o*r.colW*s*e.floorHeight}let h=Hl(a,f,s)/p,g=u*e.floors+n;i.lit[g]=Math.min(i.lit[g],h),i.glass[g]=i.glass[g]+m,i.dirX[g]=i.dirX[g]+m*r.nx,i.dirZ[g]=i.dirZ[g]+m*r.nz}}}return i}var Kl=class{cache=new Map;lights;area;p;ip;wallT;constructor(e,t,n){this.p=e,this.ip=t,this.wallT=n,this.lights=Gl(e,t,n),this.area=new Float32Array(t.rooms.length),t.rooms.forEach((e,n)=>{for(let r of e.cells)this.area[n]=this.area[n]+t.cells[r].area})}addOpening(e,t,n,r){let i=Wl(this.ip,e,t,this.wallT);if(i<0||n<0||n>=this.p.floors)return;let a=i*this.p.floors+n,o=this.lights;o.glass[a]=o.glass[a]+r,o.dirX[a]=o.dirX[a]+r*e.nx,o.dirZ[a]=o.dirZ[a]+r*e.nz}hash(e){return e>=0?this.ip.rooms[e].hash:.5}daylight(e,t){if(e<0||t>=this.p.floors)return[0,128,128];let n=e*this.p.floors+t,r=this.lights.glass[n],i=Math.min(1,r/Math.max(this.area[e],1)/ql),a=r>0?this.lights.dirX[n]/r:0,o=r>0?this.lights.dirZ[n]/r:0;return[Math.round(i*255),Math.round(128+127*a),Math.round(128+127*o)]}attr(e,t,n){let r=((e+1)*300+Math.min(t,299))*8+n,i=this.cache.get(r);if(!i){let a=e>=0?this.ip.rooms[e]:null,o=t>=this.p.floors?Ol.attic:a?a.type:Ol.room,s=a&&t<this.p.floors?this.lights.lit[e*this.p.floors+t]:2,c=I(F(this.p.b.hash,27764,e,t)),l=o===Ol.attic||!a?2:o===Ol.room?0:1,[u,d,f]=this.daylight(e,t);i={doorU:s,doorW:0,doorY:c,groundFloorH:l,win:[u*tl,d*tl,f*tl,0],bits:[n,o,Math.min(t,Bl),0],cols:[0,0,0,0]},this.cache.set(r,i)}return i}wallInside(e,t,n,r){let i=this.attr(e,t,n),a=Ul(this.hash(e),16777215)>>>16,o=i.doorU>=1?255:Math.round(i.doorU*254),s=Math.round(i.doorY*255),[c,l,u]=this.daylight(e,t);return{mat:{...this.p.mat,wallColor:n|i.bits[1]<<2|i.groundFloorH<<4,roofColor:c,trimColor:l},fa:{...r,groundFloorH:r.groundFloorH>0?r.groundFloorH:this.p.groundFloorH,win:[r.win[0],r.win[1],r.win[2],u*tl]},s3:a+256*o+65536*s}}},ql=.22;function Jl(e,t,n,r,i,a,o,s,c){if(n.length<3)return;let l=0,u=0,d=0;for(let e=0;e<n.length;e++){let t=n[e],r=n[(e+1)%n.length];l+=(t[1]-r[1])*(t[2]+r[2]),u+=(t[2]-r[2])*(t[0]+r[0]),d+=(t[0]-r[0])*(t[1]+r[1])}let f=l*i[0]+u*i[1]+d*i[2]<0,p=U.interior+8*a,m=a=>{let l=n[a],u=r[a];e.push(l[0],l[1],l[2],i[0],i[1],i[2],p,u[0],u[1],o,s,t.mat,t.floors,t.floorHeight,c)};for(let e=1;e+1<n.length;e++)m(0),f?(m(e+1),m(e)):(m(e),m(e+1))}function Yl(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){if(s-o<1e-4)return;let h=Math.hypot(i-n,a-r);h<1e-4||Jl(e,t,[[n,o,r],[i,o,a],[i,s,a],[n,s,r]],[[l,o-u],[l+h,o-u],[l+h,s-u],[l,s-u]],c,d,f,p,m)}function Xl(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=n.frame,_=(e,t,n)=>{let i=r?e:t,a=r?t:e;return[K(g,i,a),n,q(g,i,a)]},v=r?[g.ux,0,g.uz]:[-g.uz,0,g.ux],y=r?[-g.uz,0,g.ux]:[g.ux,0,g.uz],b=e=>[-e[0],-e[1],-e[2]],x=[_(i,o,l),_(a,o,l),_(a,s,l),_(i,s,l)],S=[[i,o],[a,o],[a,s],[i,s]];Jl(e,t,x,S,[0,1,0],d,f,p,m),h&&Jl(e,t,[_(i,o,c),_(a,o,c),_(a,s,c),_(i,s,c)],S,[0,-1,0],d,f,p,m);let C=(n,r,i)=>Yl(e,t,n[0],n[2],r[0],r[2],c,l,i,0,u,d,f,p,m);C(_(i,o,0),_(a,o,0),b(y)),C(_(i,s,0),_(a,s,0),y),C(_(i,o,0),_(i,s,0),b(v)),C(_(a,o,0),_(a,s,0),v)}var Zl=new WeakMap;function Ql(e){let t=Zl.get(e);if(t)return t;t=[];let n=e.sCuts.length-1,r=e.tCuts.length-1,i=e.frame;for(let a=0;a<n;a++)for(let o=0;o<r;o++){let s=a*r+o;if(!(e.cells[s].area<=0))for(let c of[0,1]){let l=c===0?a+1:a,u=c===0?o:o+1;if(l>=n||u>=r)continue;let d=l*r+u;if(e.cells[d].area<=0)continue;let f=c===0?e.sCuts[l]:e.sCuts[a],p=c===0?e.sCuts[l]:e.sCuts[a+1],m=c===0?e.tCuts[o]:e.tCuts[u],h=c===0?e.tCuts[o+1]:e.tCuts[u],g=K(i,f,m),_=q(i,f,m),v=K(i,p,h),y=q(i,p,h),b=[];for(let[t,n]of Nl(e.insets,g,_,v,y))n-t<1e-4||b.push([g+(v-g)*t,_+(y-_)*t,g+(v-g)*n,_+(y-_)*n]);b.length>0&&t.push({a:s,b:d,dir:c,segs:b})}}return Zl.set(e,t),t}var $l=new WeakMap;function eu(e,t){let n=$l.get(t);if(n)return n;n=[];let r=t.frame,i=t.tCuts.length-1,a=new Map(e.edges.map(e=>[e.ring*1e5+e.i,e]));return t.insets.forEach((e,o)=>{let s=e.length/2;for(let c=0;c<s;c++){let l=a.get(o*1e5+c);if(!l)continue;let u=(c+1)%s,d=[kl(r,e[c*2],e[c*2+1]),Al(r,e[c*2],e[c*2+1])],f=[kl(r,e[u*2],e[u*2+1]),Al(r,e[u*2],e[u*2+1])],p=Math.min(d[0],f[0]),m=Math.max(d[0],f[0]),h=Math.min(d[1],f[1]),g=Math.max(d[1],f[1]);t.cells.forEach((e,a)=>{if(e.area<=0)return;let o=Math.floor(a/i),s=a%i,c={s0:t.sCuts[o],s1:t.sCuts[o+1],t0:t.tCuts[s],t1:t.tCuts[s+1]};if(c.s1<p-1e-6||c.s0>m+1e-6||c.t1<h-1e-6||c.t0>g+1e-6)return;let u=uu(d,f,c);if(!u)return;let _=K(r,u[0],u[1]),v=q(r,u[0],u[1]),y=K(r,u[2],u[3]),b=q(r,u[2],u[3]);n.push({cell:a,e:l,x0:_,z0:v,x1:y,z1:b,u0:(_-l.ax)*l.dx+(v-l.az)*l.dz,u1:(y-l.ax)*l.dx+(b-l.az)*l.dz})})}}),$l.set(t,n),n}function tu(e,t,n){let r=t.rooms.length,i=e.floors,a=new Uint8Array((i+1)*r);if(!t.ok||r===0)return a;let o=su(e,t),s=e=>o?n.level(e):0,c=e=>e>=0?t.cells[e].room:-1,l=(e,t)=>{t>=0&&e>=0&&e<=i&&(a[e*r+t]=1)},u=t.tCuts.length-1;for(let o of eu(e,t)){let e=c(o.cell);if(e<0)continue;let t=Math.min(o.u0,o.u1),s=Math.max(o.u0,o.u1),u=o.e;for(let o=0;o<i;o++)if(!a[o*r+e]){for(let r=Math.max(0,Math.floor(t/u.colW));r<u.cols&&r*u.colW<s;r++)if(n.bayOpen(u,r,o)){l(o,e);break}}}for(let a of n.roofGone){if(!e.flat){for(let e=0;e<r;e++)l(i,e);break}t.cells.forEach((e,n)=>{if(e.area<=0)return;let r=Math.floor(n/u),o=n%u;t.sCuts[r+1]<=a.s0||t.sCuts[r]>=a.s1||t.tCuts[o+1]<=a.t0||t.tCuts[o]>=a.t1||l(i-1,e.room)})}let d=nu(e);for(let e=1;e<=d;e++)t.cells.forEach((t,n)=>{t.area<=0||t.room<0||s(Cl(e,Math.floor(n/u),n%u))>=0||(l(e-1,t.room),l(e,t.room))});let f=(e,t)=>t>=0&&a[e*r+t]===1,p=t.core?c(t.core.cell):-1,m=()=>{if(p<0)return;let e=!1;for(let t=0;t<i;t++)e||=f(t,p);if(e)for(let e=0;e<i;e++)l(e,p)};for(let e=!0;e;){e=!1,m();for(let n=0;n<i;n++)for(let r of t.partitions){let t=c(r.cellA),i=c(r.cellB);t<0||i<0||f(n,t)===f(n,i)||s(wl(n,r.dir,r.i,r.j))>=0||(l(n,t),l(n,i),e=!0)}}let h=a.slice();for(let e=0;e<i;e++)for(let n of t.partitions){if(!n.door)continue;let t=c(n.cellA),i=c(n.cellB);t<0||i<0||(h[e*r+t]&&l(e,i),h[e*r+i]&&l(e,t))}return m(),a}var nu=e=>e.flat?e.floors-1:e.floors;function ru(e,t,n){let r=t.core;if(!r||n<1||n>e.floors-1)return null;let i=iu(e,t);if(!i)return null;let a=r.rect;return r.alongS?r.startLow?{s0:a.s0+i.ls,s1:a.s1,t0:a.t0,t1:a.t1}:{s0:a.s0,s1:a.s1-i.ls,t0:a.t0,t1:a.t1}:r.startLow?{s0:a.s0,s1:a.s1,t0:a.t0+i.ls,t1:a.t1}:{s0:a.s0,s1:a.s1,t0:a.t0,t1:a.t1-i.ls}}function iu(e,t){let n=t.core;if(!n)return null;let r=Dl,i=n.rect,a=n.alongS?i.s1-i.s0:i.t1-i.t0,o=1;for(let n=0;n+1<e.floors;n++){let e=Math.max(2,Math.ceil((t.floorY[n+1]-t.floorY[n])/r.stairRise-1e-6));o=Math.max(o,Math.ceil(e/2))}let s=Math.max(.12,Math.min(r.treadMax,(a-2*r.landingMin)/o));return{tread:s,ls:Math.max(.5,(a-o*s)/2),aLow:I(F(e.b.hash,21364))<.5}}function au(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);if(t.sort((e,t)=>e[0]-t[0]||e[1]-t[1]),t.length<3)return e;let n=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),r=[];for(let e of t){for(;r.length>=2&&n(r[r.length-2],r[r.length-1],e)<=0;)r.pop();r.push(e)}let i=[];for(let e=t.length-1;e>=0;e--){let r=t[e];for(;i.length>=2&&n(i[i.length-2],i[i.length-1],r)<=0;)i.pop();i.push(r)}return[...r.slice(0,-1),...i.slice(0,-1)].flat()}function ou(e,t){let n=e.frame;return[K(n,t.s0,t.t0),q(n,t.s0,t.t0),K(n,t.s1,t.t1),q(n,t.s1,t.t1)]}function su(e,t){return Cl(nu(e),t.sCuts.length,t.tCuts.length)>=0&&wl(e.floors,1,t.sCuts.length,t.tCuts.length)>=0}function cu(e,t,n){if(!t.ok||!su(e,t))return;let r=Dl,i=t.tCuts.length-1,a=e=>[Math.floor(e/i),e%i],o=(e,t)=>{let[n,r]=a(t);return Cl(e,n,r)},s=e=>t.cells[e].area>0,c=nu(e),l=Ql(t);for(let i=1;i<=c;i++){let a=t.floorY[i];t.cells.forEach((e,t)=>{if(!s(t))return;let c=au(e.polys.flat());n.add(o(i,t),v.span,zl.floor,e.area*r.slab*2400,n.piece(c,a-r.slab,a),_.inner,1)});for(let e of l){let[t,s,c,l]=e.segs[0];n.bond(o(i,e.a),o(i,e.b),!1,(t+c)/2,a-r.slab/2,(s+l)/2,Math.hypot(c-t,l-s)*r.slab)}for(let c of e.edges)for(let e=0;e<c.cols;e++){let l=G(W.wall,c.ring,c.i,e,i-1);for(let u of[.2,.5,.8]){let d=(e+u)*c.colW,f=c.ax+c.dx*d-c.nx*(n.wallT+.4),p=c.az+c.dz*d-c.nz*(n.wallT+.4),m=Fl(t,f,p);m>=0&&s(m)&&n.bond(l,o(i,m),!0,f,a-r.slab,p,c.colW*n.wallT)}}}for(let i=0;i<e.floors;i++)for(let e of t.partitions){let a=wl(i,e.dir,e.i,e.j),s=[],c=0;for(let n of e.segs){let[e,i,a,o]=ou(t,n),l=Math.hypot(a-e,o-i)||1;c+=l;let u=-(o-i)/l*(r.partition/2),d=(a-e)/l*(r.partition/2);s.push(e+u,i+d,e-u,i-d,a+u,o+d,a-u,o-d)}let l=t.floorY[i],u=t.ceilY[i];n.add(a,v.bearing,zl.partition,c*(u-l)*r.partition*1500,n.piece(au(s),l,u),_.inner,0);let[d,f,p,m]=ou(t,e.segs[0]),h=(d+p)/2,g=(f+m)/2,y=c*r.partition;if(i===0)n.bond(n.foundation,a,!0,h,l,g,y);else for(let t of[e.cellA,e.cellB])n.bond(o(i,t),a,!0,h,l,g,y/2)}let u=t.core;if(u){let r=u.rect,i=[K(t.frame,r.s0,r.t0),q(t.frame,r.s0,r.t0),K(t.frame,r.s1,r.t0),q(t.frame,r.s1,r.t0),K(t.frame,r.s1,r.t1),q(t.frame,r.s1,r.t1),K(t.frame,r.s0,r.t1),q(t.frame,r.s0,r.t1)],a=K(t.frame,(r.s0+r.s1)/2,(r.t0+r.t1)/2),s=q(t.frame,(r.s0+r.s1)/2,(r.t0+r.t1)/2),c=(r.s1-r.s0)*(r.t1-r.t0);for(let r=0;r+1<e.floors;r++){let e=Tl(r),l=t.floorY[r],d=t.floorY[r+1];n.add(e,v.fixture,zl.floor,c*.25*2400,n.piece(i,l,d),_.inner,0),n.bond(r===0?n.foundation:o(r,u.cell),e,!0,a,l,s,c)}}}function lu(e,t,n,r,i){if(!n.ok)return;let a=Dl,o=su(t,n),s=e=>o?i.level(e):0,c=n.frame,l=n.tCuts.length-1,u=e=>[Math.floor(e/l),e%l],d=nu(t),f=e=>n.cells[e].area>0,p=(e,t)=>{if(e===0)return 0;let[n,r]=u(t);return s(Cl(e,n,r))},m=Ql(n),h=n.rooms.length,g=(e,t)=>t>=0&&e>=0&&i.open[e*h+t]===1,_=new Map;for(let e of eu(t,n)){let t=_.get(e.cell);t?t.push(e):_.set(e.cell,[e])}let v=[0,-1,0],y=[0,1,0];for(let o=0;o<=d;o++){let s=n.floorY[o],l=s-a.slab,u=ru(t,n,o),d=o>=t.floors;n.cells.forEach((a,h)=>{if(!f(h))return;let b=p(o,h);if(b<0)return;let x=a.room,S=g(o,x),C=o>0&&g(o-1,x);if(!S&&!C)return;let w=r.attr(x,o,d?J.atticFloor:J.floor),T=o>0?r.attr(x,o-1,J.ceiling):null,E=d?3:n.ceilY[o]-s,D=o>0?n.ceilY[o-1]-n.floorY[o-1]:0;for(let i of a.polys){let a=[],o=[];for(let e=0;e<i.length;e+=2)o.push([kl(c,i[e],i[e+1]),Al(c,i[e],i[e+1])]);if(u&&h===n.core.cell){let e=1e5;for(let t of[{s0:-1e5,s1:u.s0,t0:-1e5,t1:e},{s0:u.s1,s1:e,t0:-1e5,t1:e},{s0:u.s0,s1:u.s1,t0:-1e5,t1:u.t0},{s0:u.s0,s1:u.s1,t0:u.t1,t1:e}]){let e=jl(o,t);e.length>=3&&a.push(e)}}else a=[o];for(let n of a){let i=e=>n.map(t=>[K(c,t[0],t[1]),e,q(c,t[0],t[1])]),a=n.map(e=>[e[0],e[1]]);S&&Jl(e,t,i(s),a,y,b,E,r.hash(x),w),T&&C&&Jl(e,t,i(l),a,v,b,D,r.hash(x),T)}}if(o===0)return;let O=r.attr(x,o,J.concrete),k=(n,i,a,o,c)=>Yl(e,t,n,i,a,o,l,s,c,0,l,b,1,r.hash(x),O);if(u&&h===n.core.cell){let e=(e,t)=>[K(c,e,t),q(c,e,t)],t=[c.ux,0,c.uz],n=[-c.uz,0,c.ux],r=e=>[-e[0],-e[1],-e[2]],i=[[e(u.s0,u.t0),e(u.s0,u.t1),t],[e(u.s1,u.t0),e(u.s1,u.t1),r(t)],[e(u.s0,u.t0),e(u.s1,u.t0),n],[e(u.s0,u.t1),e(u.s1,u.t1),r(n)]];for(let[e,t,n]of i)k(e[0],e[1],t[0],t[1],n)}for(let e of m){if(e.a!==h&&e.b!==h)continue;let t=e.a===h?e.b:e.a;if(p(o,t)>=0)continue;let n=e.a===h?1:-1,r=e.dir===0?[c.ux*n,0,c.uz*n]:[-c.uz*n,0,c.ux*n];for(let[t,n,i,a]of e.segs)k(t,n,i,a,r)}for(let e of _.get(h)??[]){let n=e.e,r=Math.min(e.u0,e.u1),a=Math.max(e.u0,e.u1);for(let s=Math.max(0,Math.floor(r/n.colW));s<n.cols&&s*n.colW<a;s++){if(!i.bayGone(n,s,o-1)&&!(o<t.floors&&i.bayGone(n,s,o)))continue;let c=Math.max(r,s*n.colW),l=Math.min(a,(s+1)*n.colW);if(l-c<.001)continue;let u=(c-e.u0)/(e.u1-e.u0||1),d=(l-e.u0)/(e.u1-e.u0||1);k(e.x0+(e.x1-e.x0)*u,e.z0+(e.z1-e.z0)*u,e.x0+(e.x1-e.x0)*d,e.z0+(e.z1-e.z0)*d,[n.nx,0,n.nz])}}})}for(let i=0;i<t.floors;i++){let a=n.floorY[i],o=n.ceilY[i],c=o-a;for(let l of n.partitions){let u=g(i,n.cells[l.cellA].room),d=g(i,n.cells[l.cellB].room);if(!u&&!d)continue;let f=s(wl(i,l.dir,l.i,l.j));f<0||du(e,t,n,r,l,i,a,o,c,f,u,d)}}let b=n.core,x=iu(t,n);if(b&&x){let i=b.rect,o=b.alongS?i.s0:i.t0,c=b.alongS?i.s1:i.t1,l=b.alongS?i.t0:i.s0,u=b.alongS?i.t1:i.s1,d=c-o,f=(l+u)/2,p=a.flightGap/2,m=e=>b.startLow?o+e:c-e,h=n.cells[b.cell].room,_=e=>r.attr(h,e,J.stair),[v,y,S,C]=x.aLow?[l,f-p,f+p,u]:[f+p,u,l,f-p];for(let i=0;i+1<t.floors;i++){if(!g(i,h))continue;let o=s(Tl(i));if(o<0)continue;let c=n.floorY[i],f=n.floorY[i+1]-c,p=Math.max(2,Math.ceil(f/a.stairRise-1e-6)),w=f/p,T=Math.ceil(p/2),E=p-T,D=n.ceilY[i]-c,O=r.hash(h),k=(r,a,s,l,u,d)=>{let f=Math.min(m(r),m(a)),p=Math.max(m(r),m(a));Xl(e,t,n,b.alongS,f,p,s,l,u,d,c,o,D,O,_(i),!0)};for(let e=0;e+1<T;e++){let t=c+(e+1)*w;k(x.ls+e*x.tread,x.ls+(e+1)*x.tread,v,y,Math.max(c,t-w-.16),t)}let A=c+T*w;k(x.ls+(T-1)*x.tread,d,l,u,A-.2,A);let j=x.ls+(T-1)*x.tread;for(let e=0;e<E-1;e++){let t=A+(e+1)*w,n=e===E-2?x.ls:j-(e+1)*x.tread;k(Math.min(n,j-(e+1)*x.tread),j-e*x.tread,S,C,t-w-.16,t)}}}}function uu(e,t,n){let r=0,i=1,a=[t[0]-e[0],t[1]-e[1]],o=[[0,n.s0,1],[0,n.s1,-1],[1,n.t0,1],[1,n.t1,-1]];for(let[t,n,s]of o){let o=s*(e[t]-n),c=s*a[t];if(Math.abs(c)<1e-12){if(o<-1e-6)return null;continue}let l=-o/c;c>0?r=Math.max(r,l):i=Math.min(i,l)}return i-r<1e-6?null:[e[0]+a[0]*r,e[1]+a[1]*r,e[0]+a[0]*i,e[1]+a[1]*i]}function du(e,t,n,r,i,a,o,s,c,l,u,d){let f=Dl,p=f.partition/2,m=n.cells[i.cellA].room,h=n.cells[i.cellB].room,g=r.attr(m,a,J.paint),_=r.attr(h,a,J.paint);i.segs.forEach((v,y)=>{let[b,x,S,C]=ou(n,v),w=Math.hypot(S-b,C-x);if(w<.001)return;let T=(S-b)/w,E=(C-x)/w,D=i.dir===0?[n.frame.ux,0,n.frame.uz]:[-n.frame.uz,0,n.frame.ux],O=[-D[0],0,-D[2]],k=(e,t)=>[b+T*e+D[0]*p*t,x+E*e+D[2]*p*t],A=i.door&&i.door.seg===y&&u&&d?i.door:null,j=A?[[0,A.at-A.width/2,o],[A.at-A.width/2,A.at+A.width/2,Math.min(s,o+f.doorHeight)],[A.at+A.width/2,w,o]]:[[0,w,o]];for(let[n,i,a]of j)if(!(i-n<.001||s-a<.001))for(let[f,p,v,y,b]of[[-1,O,g,m,u],[1,D,_,h,d]]){if(!b)continue;let[u,d]=k(n,f),[m,h]=k(i,f);Yl(e,t,u,d,m,h,a,s,p,n,o,l,c,r.hash(y),v)}let M=r.attr(m,a,J.paint),N=(n,i,a,s)=>{let[u,d]=k(n,-1),[f,p]=k(n,1);Yl(e,t,u,d,f,p,a,i,s,0,o,l,c,r.hash(m),M)},P=[T,0,E],F=[-T,0,-E];if(v.wall0||N(0,s,o,F),v.wall1||N(w,s,o,P),A){let n=Math.min(s,o+f.doorHeight);N(A.at-A.width/2,n,o,P),N(A.at+A.width/2,n,o,F);let[i,a]=k(A.at-A.width/2,-1),[u,d]=k(A.at+A.width/2,-1),[p,h]=k(A.at+A.width/2,1),[g,_]=k(A.at-A.width/2,1);Jl(e,t,[[i,n,a],[u,n,d],[p,n,h],[g,n,_]],[[0,0],[A.width,0],[A.width,f.partition],[0,f.partition]],[0,-1,0],l,c,r.hash(m),M)}let[ee,I]=k(0,-1),[te,ne]=k(w,-1),[re,ie]=k(w,1),[ae,L]=k(0,1);Jl(e,t,[[ee,s,I],[te,s,ne],[re,s,ie],[ae,s,L]],[[0,0],[w,0],[w,f.partition],[0,f.partition]],[0,1,0],l,c,r.hash(m),r.attr(m,a,J.concrete))})}var Y={wall:.3,roofCell:4.5,roofCellsMax:12,roofSlab:.25,stubMin:.5,stubMax:2.2},fu={masonry:0,slab:1,attached:2,fixture:3,foundation:4,floor:5,partition:6},pu=[{crack:140,breach:320,gone:560,density:1800},{crack:110,breach:0,gone:430,density:2200},{crack:70,breach:0,gone:250,density:2400},{crack:60,breach:0,gone:210,density:1700},{crack:1<<30,breach:0,gone:1<<30,density:2400},{crack:220,breach:0,gone:950,density:2400},{crack:150,breach:0,gone:600,density:1500}],mu={wall:1,roof:0,attached:1,fixture:0},hu=new WeakMap;function gu(e){let t=[e.flat,e.baseY,e.eaveY,e.floors,e.floorHeight,e.groundFloorH,e.floorBase,...e.edges.flatMap(e=>[e.ring,e.i,e.ax,e.az,e.len,e.cols])].join(`,`),n=hu.get(e.b);if(n&&n.sig===t)return n.ip;let r=Rl(e,Y.wall,Y.roofSlab);return hu.set(e.b,{sig:t,ip:r}),r}function _u(e,t){return t===0?e.floorBase:e.floorBase+e.groundFloorH+(t-1)*e.floorHeight}function vu(e,t){return t<e.floors-1?_u(e,t+1):1/0}function yu(e,t){let n=e.edges[t],r=e.splits[t],i=[],a=[],o=[];for(let t of r){let r=n.ax+(n.bx-n.ax)*t,s=n.az+(n.bz-n.az)*t;i.push(n.len*t),a.push(e.roof.topAt(r,s)+e.wallTopExtra),o.push(e.groundAt(r,s))}let s=e.attrs[t]??null,c=[];for(let e=0;e+1<i.length;e++){let t=s??Qc;if(s){let r=n.doors.find(t=>t.u>=i[e]-1e-4&&t.u<=i[e+1]+1e-4);r&&(t={...s,doorU:r.u,doorW:r.width,doorY:r.y,bits:[s.bits[0],s.bits[1]|r.kind<<4,s.bits[2],s.bits[3]]})}c.push(t)}return{e:n,us:i,tops:a,grounds:o,fas:c}}function bu(e,t){for(let n=0;n+2<e.us.length;n++)if(t<e.us[n+1])return n;return Math.max(0,e.us.length-2)}function xu(e,t,n){let r=bu(e,n),i=e.us[r],a=e.us[r+1],o=a-i>1e-9?(n-i)/(a-i):0;return t[r]+(t[r+1]-t[r])*o}function Su(e,t,n){let r=Math.min(xu(e,e.tops,t),xu(e,e.tops,n));return e.us.forEach((i,a)=>{i>t&&i<n&&(r=Math.min(r,e.tops[a]))}),r}function Cu(e,t,n){let r=Math.max(xu(e,e.tops,t),xu(e,e.tops,n));return e.us.forEach((i,a)=>{i>t&&i<n&&(r=Math.max(r,e.tops[a]))}),r}function wu(e,t,n,r){let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=t*o[0]+n*o[1]+r,l=t*s[0]+n*s[1]+r;if(c>=0&&i.push(o),c>=0!=l>=0){let e=c/(c-l);i.push([o[0]+(s[0]-o[0])*e,o[1]+(s[1]-o[1])*e])}}return i}function Tu(e,t,n,r,i){let a=[];for(let o=0;o+1<e.us.length;o++){let s=Math.max(t,e.us[o]),c=Math.min(n,e.us[o+1]);if(c-s<1e-5)continue;let l=xu(e,e.tops,s),u=xu(e,e.tops,c),d=Math.min(i,Math.max(l,u)+1);if(d<=r)continue;let f=[[s,r],[c,r],[c,d],[s,d]],p=(u-l)/(c-s);f=wu(f,p,-1,l-p*s),f.length>=3&&a.push({poly:f,piece:o})}return a}function Eu(e,t,n,r,i,a){let o=n[0]-t[0],s=n[1]-t[1],c=n[2]-t[2],l=r[0]-t[0],u=r[1]-t[1],d=r[2]-t[2],f=s*d-c*u,p=c*l-o*d,m=o*u-s*l;f*i[0]+p*i[1]+m*i[2]<0?(a(t),a(r),a(n)):(a(t),a(n),a(r))}var Du=e=>Math.round(e*100);function Ou(e,t,n){let r=0,i=e.length/2;for(let t=0;t<i;t++){let n=(t+1)%i;r+=e[t*2]*e[n*2+1]-e[n*2]*e[t*2+1]}let a=new Int32Array(i*2);for(let t=0;t<i;t++){let n=r>=0?t:i-1-t;a[t*2]=Du(e[n*2]),a[t*2+1]=Du(e[n*2+1])}return{xz:a,y0:Du(t),y1:Du(Math.max(n,t+.01))}}function ku(e){let t=[];for(let[n,r]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(e.cx+e.ux*e.halfL*n-e.uz*e.halfW*r,e.cz+e.uz*e.halfL*n+e.ux*e.halfW*r);return t}function Au(e){let t=Math.max(1,Math.min(Y.roofCellsMax,Math.round(2*e.box.halfL/Y.roofCell))),n=Math.max(1,Math.min(Y.roofCellsMax,Math.round(2*e.box.halfW/Y.roofCell)));return{nS:t,nT:n,cs:2*e.box.halfL/t,ct:2*e.box.halfW/n}}function ju(e,t,n,r){let{box:i}=e,a=(n-i.cx)*i.ux+(r-i.cz)*i.uz,o=-(n-i.cx)*i.uz+(r-i.cz)*i.ux;return[Math.max(0,Math.min(t.nS-1,Math.floor((a+i.halfL)/t.cs))),Math.max(0,Math.min(t.nT-1,Math.floor((o+i.halfW)/t.ct)))]}var Mu=new WeakMap;function Nu(e,t){let n=Mu.get(e.b),r=e.roof.tris,i=e.b.box,a=[i.cx,i.cz,i.ux,i.uz,i.halfL,i.halfW];if(n&&n.box.every((e,t)=>e===a[t])&&n.g.nS===t.nS&&n.g.nT===t.nT&&n.g.cs===t.cs&&n.g.ct===t.ct&&n.tris.length===r.length&&n.tris.every((e,t)=>e===r[t]))return n.cells;let o=Pu(e,t);return Mu.set(e.b,{box:a,g:{...t},tris:r.slice(),cells:o}),o}function Pu(e,t){let{box:n}=e.b,r=new Map,i=e.roof.tris,a=(e,t,n,r)=>{let i=[];for(let a=0;a<e.length;a++){let o=e[a],s=e[(a+1)%e.length],c=r?o[t]-n:n-o[t],l=r?s[t]-n:n-s[t];if(c>=0&&i.push(o),c>=0!=l>=0){let e=c/(c-l);i.push(o.map((t,n)=>t+(s[n]-t)*e))}}return i};for(let e=0;e<i.length;e+=9){let o=i[e+3]-i[e],s=i[e+4]-i[e+1],c=i[e+5]-i[e+2],l=i[e+6]-i[e],u=i[e+7]-i[e+1],d=i[e+8]-i[e+2],f=s*d-c*u,p=c*l-o*d,m=o*u-s*l,h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h;let g=[];for(let t=0;t<9;t+=3){let r=i[e+t],a=i[e+t+1],o=i[e+t+2];g.push([r,a,o,(r-n.cx)*n.ux+(o-n.cz)*n.uz+n.halfL,-(r-n.cx)*n.uz+(o-n.cz)*n.ux+n.halfW])}let _=Math.min(g[0][3],g[1][3],g[2][3]),v=Math.max(g[0][3],g[1][3],g[2][3]),y=Math.min(g[0][4],g[1][4],g[2][4]),b=Math.max(g[0][4],g[1][4],g[2][4]),x=Math.max(0,Math.min(t.nS-1,Math.floor(_/t.cs))),S=Math.max(0,Math.min(t.nS-1,Math.floor(v/t.cs))),C=Math.max(0,Math.min(t.nT-1,Math.floor(y/t.ct))),w=Math.max(0,Math.min(t.nT-1,Math.floor(b/t.ct)));for(let e=x;e<=S;e++)for(let n=C;n<=w;n++){let i=g;if(e>0&&(i=a(i,3,e*t.cs,!0)),e<t.nS-1&&(i=a(i,3,(e+1)*t.cs,!1)),n>0&&(i=a(i,4,n*t.ct,!0)),n<t.nT-1&&(i=a(i,4,(n+1)*t.ct,!1)),i.length<3)continue;let o=0;for(let e=0;e<i.length;e++){let t=i[e],n=i[(e+1)%i.length];o+=t[3]*n[4]-n[3]*t[4]}if(o=Math.abs(o)/2,o<1e-4)continue;let s=yl(e,n),c=r.get(s);c||(c={is:e,it:n,polys:[],area:0,y0:1/0,y1:-1/0},r.set(s,c)),c.area+=o;let l=[];for(let e of i)l.push(e[0],e[1],e[2]),c.y0=Math.min(c.y0,e[1]),c.y1=Math.max(c.y1,e[1]);c.polys.push({pts:l,n:[f,p,m]})}}return r}function Fu(e,t){let{b:n}=e,r=[],i=new Map,a=Y.wall,o=(e,t,n,i,a,o,s)=>{r.push({key:e,role:t,material:n,mass:Math.max(1,Math.round(i)),piece:a,flags:o,maxSpan:s})},s=(e,t,n,r,a,o,s)=>{let[c,l]=n||e<t?[e,t]:[t,e],u=`${c}:${l}`;i.has(u)||i.set(u,{a:c,b:l,bearing:n,x:Du(r),y:Du(a),z:Du(o),area:Math.max(1,Math.round(s*1e4))})},c=n.box,l=Ou(ku(c),e.baseY,e.floorBase),u=vl();o(u,v.foundation,fu.foundation,4*c.halfL*c.halfW*Math.max(.1,e.floorBase-e.baseY)*2400,l,_.anchor|_.indestructible,0);let d=e.edges.every(t=>G(W.wall,t.ring,t.i,t.cols-1,e.floors-1)>=0),f=t=>{r.sort((e,t)=>e.key-t.key);let a=[...i.values()].sort((e,t)=>e.a-t.a||e.b-t.b);return{id:n.id,keepOut:t,groundY:Du(e.floorBase),cx:Du(c.cx),cz:Du(c.cz),outline:l.xz,materials:[...pu],parts:r,bonds:a}};if(!d)return f(!0);let p=e.edges.map((t,n)=>yu(e,n));e.edges.forEach((t,n)=>{let r=p[n];for(let n=0;n<t.cols;n++){let i=n*t.colW,c=(n+1)*t.colW;for(let l=0;l<e.floors;l++){let d=G(W.wall,t.ring,t.i,n,l),f=_u(e,l),p=l<e.floors-1?vu(e,l):Cu(r,i,c),m=[t.ax+t.dx*i,t.az+t.dz*i,t.ax+t.dx*c,t.az+t.dz*c,t.ax+t.dx*c-t.nx*a,t.az+t.dz*c-t.nz*a,t.ax+t.dx*i-t.nx*a,t.az+t.dz*i-t.nz*a],h=l<e.floors-1?p-f:(Su(r,i,c)+p)/2-f;o(d,v.bearing,fu.masonry,t.colW*Math.max(.3,h)*a*pu[0].density,Ou(m,f,p),0,mu.wall);let g=(i+c)/2,_=t.ax+t.dx*g-t.nx*a*.5,y=t.az+t.dz*g-t.nz*a*.5;if(s(l===0?u:G(W.wall,t.ring,t.i,n,l-1),d,!0,_,f,y,t.colW*a),n+1<t.cols){let e=(f+Math.min(p,f+3))/2;s(d,G(W.wall,t.ring,t.i,n+1,l),!1,t.ax+t.dx*c,e,t.az+t.dz*c,Math.max(.3,Math.min(p,f+3)-f)*a)}}}});let m=new Map;for(let t of e.edges)m.set(t.ring,[...m.get(t.ring)??[],t]);for(let t of m.values())t.length<2||t.forEach((n,r)=>{let i=t[(r+1)%t.length];for(let t=0;t<e.floors;t++){let r=_u(e,t);s(G(W.wall,n.ring,n.i,n.cols-1,t),G(W.wall,i.ring,i.i,0,t),!1,n.bx,r+1,n.bz,3*a)}});let h=Au(n),g=Nu(e,h);for(let[e,t]of g){let n=-c.halfL+t.is*h.cs,r=-c.halfW+t.it*h.ct,i={cx:c.cx+c.ux*(n+h.cs/2)-c.uz*(r+h.ct/2),cz:c.cz+c.uz*(n+h.cs/2)+c.ux*(r+h.ct/2),ux:c.ux,uz:c.uz,halfL:h.cs/2,halfW:h.ct/2};o(e,v.span,fu.slab,t.area*Y.roofSlab*pu[1].density,Ou(ku(i),t.y0-Y.roofSlab,t.y1),0,mu.roof);for(let[n,r]of[[1,0],[0,1]]){let a=yl(t.is+n,t.it+r);if(!g.has(a))continue;let o=i.cx+c.ux*(n*h.cs/2)-c.uz*(r*h.ct/2),l=i.cz+c.uz*(n*h.cs/2)+c.ux*(r*h.ct/2);s(e,a,!1,o,(t.y0+t.y1)/2,l,(n?h.ct:h.cs)*Y.roofSlab)}}let y=(e,t,r,i,a)=>{let[o,c]=ju(n,h,t,r);if(!g.has(yl(o,c))){let e=1/0;for(let t of g.values()){let n=Math.abs(t.is-o)+Math.abs(t.it-c);n<e&&(e=n,[o,c]=[t.is,t.it])}}g.has(yl(o,c))&&s(yl(o,c),e,!0,t,i,r,a)};e.edges.forEach(t=>{let r=e.floors-1;for(let i=0;i<t.cols;i++){let o=G(W.wall,t.ring,t.i,i,r);for(let r of[.2,.5,.8]){let c=(i+r)*t.colW,l=t.ax+t.dx*c-t.nx*.8,u=t.az+t.dz*c-t.nz*.8,[d,f]=ju(n,h,l,u),p=yl(d,f);g.has(p)&&s(o,p,!0,l,e.eaveY,u,t.colW*a)}}}),cu(e,gu(e),{add:o,bond:s,piece:Ou,foundation:u,wallT:a});for(let t of e.balconies){let n=e.edges[t.edge],r=G(W.balcony,n.ring,n.i,t.c,t.f),i=t.box;o(r,v.attached,fu.attached,4*i.halfL*i.halfW*i.height*.5*2400,Ou(ku(i),i.baseY,i.baseY+i.height),0,mu.attached);for(let e of[t.f,t.f-1])s(r,G(W.wall,n.ring,n.i,t.c,e),!1,i.cx,i.baseY,i.cz,i.halfL*2*.3)}for(let t of e.canopies){let n=e.edges[t.edge],r=bl(t.k),i=t.box;o(r,v.attached,fu.attached,4*i.halfL*i.halfW*i.height*.8*2400,Ou(ku(i),i.baseY,i.baseY+i.height),0,mu.attached);let a=Math.max(0,Math.min(n.cols-1,Math.floor(t.u/n.colW)));s(r,G(W.wall,n.ring,n.i,a,0),!1,i.cx,i.baseY,i.cz,i.halfL*2*i.height)}for(let[t,n,r]of[[e.chimneys,xl,.6],[e.tops,Sl,.12]])for(let e of t){let t=n(e.k),i=e.box;o(t,v.fixture,fu.fixture,4*i.halfL*i.halfW*i.height*r*1700,Ou(ku(i),i.baseY,i.baseY+i.height),0,mu.fixture),y(t,i.cx,i.cz,i.baseY,4*i.halfL*i.halfW)}return f(t)}var Iu=[[1,0],[.8660254037844387,.5],[.5,.8660254037844387],[0,1],[-.5,.8660254037844387],[-.8660254037844387,.5],[-1,0],[-.8660254037844387,-.5],[-.5,-.8660254037844387],[0,-1],[.5,-.8660254037844387],[.8660254037844387,-.5]],Lu=e=>e===g.cracked?1:e===g.breached?2:0;function Ru(e,t,n){let r=Y.wall,{b:i,mat:a,floors:o,floorHeight:s,floorBase:c,eaveY:l}=t,u=e=>n.parts.get(e)??0,d=e=>n.ruin?g.gone:y(u(e)),f={...a,trimColor:a.wallColor},p=t.edges.map((e,n)=>yu(t,n)),m=n.ruin?null:gu(t),h=m&&m.ok?new Kl(t,m,r):null,_=Au(i),v=Nu(t,_),x=m&&h?tu(t,m,{level:e=>{let t=d(e);return t===g.gone?-1:Lu(t)},bayOpen:(e,t,n)=>d(G(W.wall,e.ring,e.i,t,n))>=g.breached,roofGone:[...v.entries()].filter(([e])=>d(e)===g.gone).map(([,e])=>({s0:e.is*_.cs-i.box.halfL,s1:(e.is+1)*_.cs-i.box.halfL,t0:e.it*_.ct-i.box.halfW,t1:(e.it+1)*_.ct-i.box.halfW}))}):null;if(h)for(let e of t.edges)for(let n=0;n<e.cols;n++)for(let r=0;r<o;r++){let i=d(G(W.wall,e.ring,e.i,n,r));if(i<g.breached)continue;let a=r===0?t.groundFloorH:s;h.addOpening(e,(n+.5)*e.colW,r,e.colW*a*(i===g.gone?.9:.45))}let S=m?m.rooms.length:0,C=(e,t)=>x!==null&&x[e*S+t]===1,w=!1;for(let e=0;e<S;e++)w||=C(o,e);let T=new Map(t.edges.map((e,t)=>[e,t])),E=(t,n,r)=>i=>{let l=t.e,u=i[0],d=i[1];e.push(l.ax+l.dx*u,d,l.az+l.dz*u,l.nx,0,l.nz,U.wall+8*r,u,l.len,d-c,d-xu(t,t.grounds,u),a,o,s,t.fas[n]??Qc)},D=(t,n,r,i)=>a=>{let l=t.e,u=a[0],d=a[1],p=a[3];e.push(l.ax+l.dx*u-l.nx*p,d,l.az+l.dz*u-l.nz*p,n,r,i,U.trim+24,0,0,d-c,100,f,o,s)},O=(e,t,n,r,i,a)=>{let o=e.e,s=e=>[o.ax+o.dx*e[0],e[1],o.az+o.dz*e[0],0],c=i?[o.nx,0,o.nz]:[-o.nx,0,-o.nz],l=s(t),u=s(n),d=s(r),f=u[0]-l[0],p=u[1]-l[1],m=u[2]-l[2],h=d[0]-l[0],g=d[1]-l[1],_=d[2]-l[2],v=p*_-m*g,y=m*h-f*_,b=f*g-p*h;v*c[0]+y*c[1]+b*c[2]<0?(a(t),a(r),a(n)):(a(t),a(n),a(r))},k=(e,t,n,r,i)=>{for(let a=1;a+1<t.length;a++){let o=t[0],s=t[a],c=t[a+1];O(e,[o[0],o[1],0,n],[s[0],s[1],0,n],[c[0],c[1],0,n],r,i)}},A=(t,n,i,a)=>{let l=t.e,u=t=>{e.push(l.ax+l.dx*t[0]-l.nx*t[3],t[1],l.az+l.dz*t[0]-l.nz*t[3],a[0],a[1],a[2],U.trim+24,0,0,t[1]-c,100,f,o,s)},d=e=>[l.ax+l.dx*e[0]-l.nx*e[3],e[1],l.az+l.dz*e[0]-l.nz*e[3],0],p=[n[0],n[1],0,0],m=[i[0],i[1],0,0],h=[i[0],i[1],0,r],g=[n[0],n[1],0,r];for(let[t,n,r]of[[p,m,h],[p,h,g]]){let i=d(t),o=d(n),s=d(r);Eu(e,i,o,s,a,()=>void 0);let c=o[0]-i[0],l=o[1]-i[1],f=o[2]-i[2],p=s[0]-i[0],m=s[1]-i[1],h=s[2]-i[2],g=(l*h-f*m)*a[0]+(f*p-c*h)*a[1]+(c*m-l*p)*a[2]<0;u(t),g?(u(r),u(n)):(u(n),u(r))}},j=(n,i,u,d,f)=>{if(!h||!m||u<0){k(n,i,r,!1,D(n,-n.e.nx,0,-n.e.nz));return}let p=n.e,g=T.get(p),_=u===o-1,v=m.ceilY[u],y=[[-1/0,v,J.paint],[v,_?l:m.floorY[u+1],J.concrete]];_&&y.push([l,1/0,t.flat?-1:J.atticWall]);let b=[-1/0,...m.wallSplits[g].filter(e=>e>.001&&e<p.len-.001),1/0],x=1/0,S=-1/0;for(let e of i)x=Math.min(x,e[0]),S=Math.max(S,e[0]);for(let[t,g,_]of y){let v=wu(i,0,1,-t);if(v=wu(v,0,-1,g),!(v.length<3)){if(_<0)k(n,v,r,!1,D(n,-p.nx,0,-p.nz));else for(let t=0;t+1<b.length;t++){let i=b[t],g=b[t+1];if(g<=x||i>=S)continue;let y=wu(v,1,0,-i);if(y=wu(y,-1,0,g),y.length<3)continue;let T=(Math.max(i,x)+Math.min(g,S))/2,E=Fl(m,p.ax+p.dx*T-p.nx*(r+.2),p.az+p.dz*T-p.nz*(r+.2)),D=_===J.atticWall?-1:E>=0?m.cells[E].room:-1;if(_===J.atticWall?!w:D>=0&&!C(u,D))continue;if(_===J.atticWall){let t=h.attr(D,o,_),i=h.hash(D);k(n,y,r,!1,n=>{e.push(p.ax+p.dx*n[0]-p.nx*r,n[1],p.az+p.dz*n[0]-p.nz*r,-p.nx,0,-p.nz,U.interior+8*d,n[0],n[1]-l,3,i,a,o,s,t)});continue}let O=h.wallInside(D,u,_,n.fas[f]??Qc);k(n,y,r,!1,t=>{e.push(p.ax+p.dx*t[0]-p.nx*r,t[1],p.az+p.dz*t[0]-p.nz*r,-p.nx,0,-p.nz,U.wallInside+8*d,t[0],p.len,t[1]-c,O.s3,O.mat,o,s,O.fa)})}}}},M=(e,t,n,r,i,a,o,s=-1)=>{for(let{poly:c,piece:l}of Tu(e,t,n,r,i))k(e,c,0,!0,E(e,l,a)),o&&j(e,c,s,a,l)};for(let e of p)M(e,-1,e.e.len+1,t.baseY,c,0,!1);if(n.ruin){Bu(t,p,M,A);return}t.edges.forEach((e,n)=>{let r=p[n],i=(t,n)=>t<0||t>=e.cols||n<0||n>=o?g.intact:d(G(2,e.ring,e.i,t,n));for(let a=0;a<e.cols;a++){let s=a*e.colW,c=(a+1)*e.colW;for(let l=0;l<o;l++){let f=G(2,e.ring,e.i,a,l),p=d(f),m=_u(t,l),h=vu(t,l),_=l===o-1;if(p===g.gone){let t=Math.min(h,xu(r,r.tops,s)),n=Math.min(h,xu(r,r.tops,c));a>0&&i(a-1,l)!==g.gone&&A(r,[s,m],[s,t],[e.dx,0,e.dz]),a+1<e.cols&&i(a+1,l)!==g.gone&&A(r,[c,m],[c,n],[-e.dx,0,-e.dz]),l>0&&i(a,l-1)!==g.gone&&A(r,[s,m],[c,m],[0,1,0]),!_&&i(a,l+1)!==g.gone&&A(r,[s,h],[c,h],[0,-1,0]);continue}let v=Lu(p);if(p===g.breached){let e=Math.min(_?1/0:h,Su(r,s,c));N(r,s,c,m,e,l,a,u(f)),e<h&&M(r,s,c,e,h,v,!0,l)}else M(r,s,c,m,h,v,!0,l);_&&P(r,n,a,s,c,v)}}});function N(e,n,r,a,o,c,l,u){let d=e.e,f=b(u),p=e=>I(F(i.hash,25202,d.ring,d.i,l,c,f,e));t.rec;let m=c===0?t.groundFloorH:s,h=t.attrs[t.edges.indexOf(d)]?.win,g=h&&h[0]>0?h[0]:1.4,_=h&&h[1]>0?h[1]:Math.min(1.6,m-.8),v=h&&h[2]>0?h[2]:.9,y=c===0?d.doors.find(e=>e.u>=n&&e.u<r):void 0,x=(n+r)/2,S=a+v+_/2,C=g/2+.3+.35*p(1),w=_/2+.25+.35*p(2);if(y){let e=y.kind===Rs.arch?y.width*R.archHeightPerWidth:y.kind===Rs.garage?R.garageDoorHeight:y.kind===Rs.portal?R.portalHeight:R.doorHeight;x=y.u,S=y.y+e/2+.2,C=y.width/2+.3+.3*p(1),w=e/2+.2+.3*p(2)}let T=.18;if(C=Math.min(C,(r-n)/2-T),w=Math.min(w,(o-a)/2-T),C<.3||w<.3){M(e,n,r,a,o,2,!0,c);return}x=Math.max(n+T+C,Math.min(r-T-C,x)),S=Math.max(a+T+w,Math.min(o-T-w,S));let D=[],O=[];Iu.forEach(([e,t],i)=>{let s=Math.min(e===0?1/0:C/Math.abs(e),t===0?1/0:w/Math.abs(t)),c=.72+.28*p(10+i);D.push([x+e*s*c,S+t*s*c]);let l=Math.min(e>0?(r-x)/e:e<0?(n-x)/e:1/0,t>0?(o-S)/t:t<0?(a-S)/t:1/0);O.push([x+e*l,S+t*l])});let N=[[r,o],[n,o],[n,a],[r,a]],P=(e,t)=>e[0]*t[1]-e[1]*t[0],ee=bu(e,x);for(let t=0;t<12;t++){let n=(t+1)%12,r=[Iu[t][0],Iu[t][1]],i=[Iu[n][0],Iu[n][1]],a=[D[t],O[t]];for(let e of N){let t=[e[0]-x,e[1]-S];P(r,t)>1e-9&&P(t,i)>1e-9&&a.push(e)}a.push(O[n],D[n]),k(e,a,0,!0,E(e,ee,2)),j(e,a,c,2,ee);let o=D[t],s=D[n],l=(o[0]+s[0])/2-x,u=(o[1]+s[1])/2-S,f=Math.hypot(l,u)||1;A(e,o,s,[-d.dx*l/f,-u/f,-d.dz*l/f])}}function P(n,r,c,u,d,f){let p=n.e,m=t.parapet>0?t.insets[p.ring]:null;if(m){let n=m.length/2,r=(p.i+1)%n,i=l+t.parapet,c=u/p.len,h=d/p.len,g=e=>m[p.i*2]+(m[r*2]-m[p.i*2])*e,_=e=>m[p.i*2+1]+(m[r*2+1]-m[p.i*2+1])*e,v=U.trim+8*f,y=(t,n,r,i,c,u)=>e.push(t,n,r,i,c,u,v,0,0,n-l,100,a,o,s),b=p.ax+p.dx*u,x=p.az+p.dz*u,S=p.ax+p.dx*d,C=p.az+p.dz*d;y(b,i,x,0,1,0),y(g(c),i,_(c),0,1,0),y(S,i,C,0,1,0),y(S,i,C,0,1,0),y(g(c),i,_(c),0,1,0),y(g(h),i,_(h),0,1,0),y(g(c),i,_(c),-p.nx,0,-p.nz),y(g(c),l,_(c),-p.nx,0,-p.nz),y(g(h),i,_(h),-p.nx,0,-p.nz),y(g(h),i,_(h),-p.nx,0,-p.nz),y(g(c),l,_(c),-p.nx,0,-p.nz),y(g(h),l,_(h),-p.nx,0,-p.nz)}let h=t.cornice;if(h&&!p.party&&p.levelTop&&p.len>=1.5){let n=h.projection+r%3*.004,a=l+t.wallTopExtra-R.corniceTopGap-r%2*.003,o=c===0&&p.convexA?-n:u,s=c===p.cols-1&&p.convexB?p.len+n:d;rl(e,il(p.ax,p.az,p.dx,p.dz,o,s,-.05,n,a-h.height,h.height,i.trimColor,F(i.hash,950,r,c)),f,h.underside===!0)}}for(let n of t.balconies){let r=t.edges[n.edge],i=d(G(W.balcony,r.ring,r.i,n.c,n.f));i!==g.gone&&rl(e,n.box,Lu(i))}for(let n of t.tops){let t=d(Sl(n.k));t!==g.gone&&rl(e,n.box,Lu(t))}for(let n of t.chimneys){let t=d(xl(n.k));t!==g.gone&&rl(e,n.box,Lu(t))}m&&h&&lu(e,t,m,h,{level:e=>{let t=d(e);return t===g.gone?-1:Lu(t)},bayGone:(e,t,n)=>n>=0&&n<o&&d(G(W.wall,e.ring,e.i,t,n))===g.gone,open:x,wallT:r});let ee=t.flat?U.roofFlat:U.roofPitched;for(let[t,n]of v){let r=d(t);if(r===g.gone)continue;let i=ee+8*Lu(r);for(let{pts:t,n:r}of n.polys){let n=t.length/3;for(let c=1;c+1<n;c++)for(let n of[0,c,c+1]){let c=t[n*3+1];e.push(t[n*3],c,t[n*3+2],r[0],r[1],r[2],i,0,0,c-l,100,a,o,s)}}m&&h&&te(n,Lu(r),(e,t)=>{let n=yl(e,t);return v.has(n)&&d(n)===g.gone})}function te(n,r,c){let u=m,d=u.frame,f=Y.roofSlab,p=o-1,g=t.flat?-1/0:l+.02,v=U.interior+8*r,y=u.tCuts.length-1,b=!t.flat&&w;if(t.flat){let t=n.polys.find(e=>e.n[1]>.05)?.pts[1];if(t!==void 0){let r={s0:n.is*_.cs-i.box.halfL,s1:(n.is+1)*_.cs-i.box.halfL,t0:n.it*_.ct-i.box.halfW,t1:(n.it+1)*_.ct-i.box.halfW},c=t-f,l=u.ceilY[p]-u.floorY[p];u.cells.forEach((t,n)=>{if(t.area<=0||!C(p,t.room))return;let i=Math.floor(n/y),f=n%y;if(u.sCuts[i+1]<=r.s0||u.sCuts[i]>=r.s1||u.tCuts[f+1]<=r.t0||u.tCuts[f]>=r.t1)return;let m=h.attr(t.room,p,J.ceiling),g=h.hash(t.room);for(let n of t.polys){let t=[];for(let e=0;e<n.length;e+=2)t.push([kl(d,n[e],n[e+1]),Al(d,n[e],n[e+1]),n[e],n[e+1]]);let i=jl(t,r);if(i.length<3)continue;let u=t=>{e.push(K(d,t[0],t[1]),c,q(d,t[0],t[1]),0,-1,0,v,t[0],t[1],l,g,a,o,s,m)},f=i[0];for(let e=1;e+1<i.length;e++){let t=i[e],n=i[e+1],r=(q(d,t[0],t[1])-q(d,f[0],f[1]))*(K(d,n[0],n[1])-K(d,f[0],f[1]))-(K(d,t[0],t[1])-K(d,f[0],f[1]))*(q(d,n[0],n[1])-q(d,f[0],f[1]));u(f),r<0?(u(t),u(n)):(u(n),u(t))}}})}}for(let{pts:t,n:r}of n.polys){let p=t.length/3;if(r[1]<=.05)continue;let m=[];for(let e=0;e<p;e++){let n=t[e*3],r=t[e*3+2];m.push([kl(d,n,r),Al(d,n,r),n,t[e*3+1],r])}if(b){let t=h.attr(-1,o,J.atticWall),n=h.hash(-1),i=i=>{let c=Math.max(g,i[3]-f);e.push(i[2],c,i[4],-r[0],-r[1],-r[2],v,i[0],i[1],3,n,a,o,s,t)};for(let e=1;e+1<m.length;e++)i(m[0]),i(m[e+1]),i(m[e])}for(let t=0;t<p;t++){let r=m[t],d=m[(t+1)%p],y=r[0]+i.box.halfL,b=d[0]+i.box.halfL,x=r[1]+i.box.halfW,S=d[1]+i.box.halfW,C=n.is,w=n.it,T=null,E=(e,t,n)=>Math.abs(e-n)<1e-4&&Math.abs(t-n)<1e-4;if(E(y,b,n.is*_.cs)?(C--,T=[-i.box.ux,0,-i.box.uz]):E(y,b,(n.is+1)*_.cs)?(C++,T=[i.box.ux,0,i.box.uz]):E(x,S,n.it*_.ct)?(w--,T=[i.box.uz,0,-i.box.ux]):E(x,S,(n.it+1)*_.ct)&&(w++,T=[-i.box.uz,0,i.box.ux]),!T||C<0||w<0||!c(C,w))continue;let D=(r[2]+d[2])/2,O=(r[4]+d[4])/2;if(Fl(u,D,O)<0||!zu(u,D,O))continue;let k=h.attr(-1,o,J.concrete),A=[r[2],r[3],r[4],0],j=[d[2],d[3],d[4],0],M=[d[2],Math.max(g,d[3]-f),d[4],0],N=[r[2],Math.max(g,r[3]-f),r[4],0],P=t=>e.push(t[0],t[1],t[2],T[0],0,T[2],v,0,t[1]-l,1,.5,a,o,s,k);Eu(e,A,j,M,T,P),Eu(e,A,M,N,T,P)}}}}function zu(e,t,n){for(let r=0;r<e.tris.length;r+=6){let i=e.tris,a=(t-i[r+2])*(i[r+1]-i[r+3])-(i[r]-i[r+2])*(n-i[r+3]),o=(t-i[r+4])*(i[r+3]-i[r+5])-(i[r+2]-i[r+4])*(n-i[r+5]),s=(t-i[r])*(i[r+5]-i[r+1])-(i[r+4]-i[r])*(n-i[r+1]);if(!((a<0||o<0||s<0)&&(a>0||o>0||s>0)))return!0}return!1}function Bu(e,t,n,r){let i=vu(e,0);for(let a of t){let t=a.e;for(let o=0;o<t.cols;o++){let s=o*t.colW,c=(o+1)*t.colW,l=Y.stubMin+(Y.stubMax-Y.stubMin)*I(F(e.b.hash,29301,t.ring,t.i,o)),u=Math.min(e.floorBase+l,i,Su(a,s,c));n(a,s,c,e.floorBase,u,2,!0),r(a,[s,u],[c,u],[0,1,0])}}}function Vu(e,t,n,r,i={}){let a=new nl,o=new Uint32Array(e.length+1),s=[],c=new Map,l={buildings:e.length,tier1:0,tier2:0,tier3:0,roofFallbacks:0,parapets:0,roofUnits:0,roofBoxes:0,roofBoxesDropped:0,roofBoxesLow:0,props:t.length,withRecipe:0,entrances:0,entrancesDropped:0,steps:0,canopies:0,balconies:0,corniceWalls:0,chimneys:0,partyWalls:0,blindWalls:0,trianglesPerBuilding:[]},u=[];if(!i.only)for(let e of t)rl(a,e);let d=pl(e);return e.forEach((t,f)=>{if(o[f]=a.count,i.only&&!i.only.has(f))return;let p=a.count,m=i.states?.get(t.id),h=m!==void 0&&(m.ruin||m.parts.size>0)||i.byParts===!0,g={seed:I(t.hash),bayWidth:t.bayWidth,wallColor:t.wallColor,roofColor:t.roofColor,windowStyle:ol(t),trimColor:t.trimColor},{roof:_,fellBack:v}=sl(t,r);v&&l.roofFallbacks++,_.tier===1?l.tier1++:_.tier===2?l.tier2++:l.tier3++;let y=_.tier===3,b=t.groundMin-r.wallBelowGround,x=_.eaveY,S=t.facade,C=Math.max(x-t.groundRef,1),w=t.levelsHint>0?C/t.levelsHint:0,T=w>=r.floorHeightMin&&w<=r.floorHeightMax?t.levelsHint:Math.max(1,Math.round(C/t.floorHeightNominal)),E=C/T,D=E;if(S&&S.groundFloorHeight>0&&T>1){let e=(C-S.groundFloorHeight)/(T-1);e>=r.floorHeightMin-.1&&e<=r.floorHeightMax&&(E=e,D=S.groundFloorHeight)}else S&&T===1&&(D=C);let O=x-C,k=[],A=y?t.parapetHeight:0;A>0&&(k=t.rings.map(e=>se(e,r.parapetThickness)),k.some(e=>e===null)?A=0:l.parapets++);let j=A,M=[];t.rings.forEach((e,n)=>{let r=e.length/2;for(let i=0;i<r;i++){let a=(i+1)%r,o=(i+r-1)%r,s=e[i*2],c=e[i*2+1],l=e[a*2],u=e[a*2+1],d=Math.hypot(l-s,u-c);if(d<.001)continue;let f=(l-s)/d,p=(u-c)/d,m=Math.max(1,Math.floor(d/t.bayWidth+.5)),h=e[o*2],g=e[o*2+1],v=e[(a+1)%r*2],y=e[(a+1)%r*2+1],b=(s-h)*p-(c-g)*f,S=f*(y-u)-p*(v-l),C=_.topAt(s,c),w=_.topAt(l,u),T=_.topAt((s+l)/2,(c+u)/2);M.push({ring:n,i,ax:s,az:c,bx:l,bz:u,len:d,dx:f,dz:p,nx:p,nz:-f,cols:m,colW:d/m,party:!1,blind:!1,balconies:!1,levelTop:Math.abs(C-x)<.05&&Math.abs(w-x)<.05&&Math.abs(T-x)<.05,convexA:n===0?b<0:b>0,convexB:n===0?S<0:S>0,doors:[]})}});let N=[];if(S&&d){l.withRecipe++;let r=t.box.halfL>1.6*t.box.halfW,i=t.group,o=i?t=>e[t].group===i:void 0;for(let e of M){e.party=Bs(d,f,e.ax,e.az,e.bx,e.bz,o)>R.partyShare;let n=Math.abs(e.dx*t.box.ux+e.dz*t.box.uz)<.4;e.blind=e.party||S.blindEndWalls>0&&r&&n&&e.len<S.blindEndWalls,e.party?l.partyWalls++:e.blind&&l.blindWalls++}let s=i&&e.some((e,t)=>t!==f&&e.group===i&&e.raised)?t=>e[t].group===i&&e[t].raised===!0:void 0;if(hl(S,M,t,f,d,n,l,u,a,N,h?e=>!El(m,bl(e)):null,s),S.balconies){let e=S.balconies;for(let t of M){if(t.blind||t.len<e.minWallLength||T<2||e.avoidEntranceWalls&&t.doors.length>0)continue;let n=Vs(t.ax,t.az,t.dx,t.dz,.2,t.len-.2,.05,e.depth+.1);d.anyOccupied(n,f,s)||(t.balconies=!0)}}}let P=[],ee=[],te=[],ne=[];if(S){if(S.balconies){let e=S.balconies;for(let n of M){if(!n.balconies)continue;let r=new Set(S.stairStrip?n.doors.map(e=>Math.floor(e.u/n.colW)):[]);for(let i=0;i<n.cols;i++){if(!(e.columnMask>>(i&3)&1)||r.has(i))continue;let a=Math.min(n.colW*R.balconyColumnShare,R.balconyMaxWidth),o=(i+.5)*n.colW,s=Math.max(R.wallEndMargin,o-a/2),c=Math.min(n.len-R.wallEndMargin,o+a/2);if(!(c-s<1.2))for(let r=1;r<T;r++){let a=O+D+(r-1)*E-R.balconySlab;if(a+R.balconyParapet+R.balconySlab>x-.3)break;P.push({edge:M.indexOf(n),c:i,f:r,k:0,box:il(n.ax,n.az,n.dx,n.dz,s,c,0,e.depth,a,R.balconySlab+R.balconyParapet,S.colors.accent,F(t.hash,900,n.i,i,r))}),l.balconies++}}}}if(S.cornice){let e=S.cornice;M.forEach((n,r)=>{if(n.party||!n.levelTop||n.len<1.5)return;let i=e.projection+r%3*.004,a=x+j-R.corniceTopGap-r%2*.003,o=n.convexA?-i:0,s=n.len+(n.convexB?i:0);ee.push({edge:r,c:0,f:0,k:0,box:il(n.ax,n.az,n.dx,n.dz,o,s,-.05,i,a-e.height,e.height,t.trimColor,F(t.hash,950,r))}),l.corniceWalls++})}}if(y){let e=re(t.rings);if(S&&S.roofBoxes)for(let[e,n]of S.roofBoxes.entries()){let r=n.topY-x;if(r<R.roofBoxMinHeight){l.roofBoxesDropped++,l.roofBoxesLow++;continue}let i=!1;for(let a of[1,.85,.7]){let o={cx:n.cx,cz:n.cz,ux:n.ux,uz:n.uz,halfL:n.halfL*a,halfW:n.halfW*a};if(al(o,t.rings,R.roofBoxMargin)){te.push({edge:-1,c:0,f:0,k:e,box:{...o,baseY:x,height:r,slope:0,color:o.halfL>1.5?t.wallColor:t.roofUnitColor,hash:F(t.hash,700,e)}}),l.roofBoxes++,i=!0;break}}i||l.roofBoxesDropped++}else{let n=cl(t,r,x,e);n.forEach((e,t)=>te.push({edge:-1,c:0,f:0,k:t,box:e})),l.roofUnits+=n.length}}else S&&S.chimneys>0&&(ne=gl(t,S,_),l.chimneys+=ne.length);if(i.describe||h||i.interiors){let e={b:t,rec:S,roof:_,flat:y,baseY:b,eaveY:x,floors:T,floorHeight:E,groundFloorH:D,floorBase:O,parapet:A,insets:k,wallTopExtra:j,mat:g,edges:M,splits:M.map(e=>{let t=ll(e.ax,e.az,e.bx,e.bz,_.creases);for(let n=0;n+1<e.doors.length;n++)t.push((e.doors[n].u+e.doors[n+1].u)/2/e.len);return t.sort((e,t)=>e-t)}),attrs:M.map(e=>S?ml(S,e,D,E):null),balconies:P,cornice:S?.cornice??null,tops:te,chimneys:ne,canopies:N,groundAt:n};if(i.describe&&s.push(Fu(e,i.keepOut?.has(t.id)??!1)),i.interiors&&c.set(t.id,gu(e)),h){Ru(a,e,m??{structure:t.id,ruin:!1,parts:new Map}),l.trianglesPerBuilding.push((a.count-p)/3);return}}for(let e of M){let t=ll(e.ax,e.az,e.bx,e.bz,_.creases);for(let n=0;n+1<e.doors.length;n++)t.push((e.doors[n].u+e.doors[n+1].u)/2/e.len);t.sort((e,t)=>e-t);let r=S?ml(S,e,D,E):null;for(let i=0;i+1<t.length;i++){let o=t[i],s=t[i+1];if(s-o<1e-5)continue;let c=e.ax+(e.bx-e.ax)*o,l=e.az+(e.bz-e.az)*o,u=e.ax+(e.bx-e.ax)*s,d=e.az+(e.bz-e.az)*s,f=_.topAt(c,l)+j,p=_.topAt(u,d)+j,m=n(c,l),h=n(u,d),v=e.len*o,y=e.len*s,x=r??Qc;if(r){let t=e.doors.find(e=>e.u>=v-1e-4&&e.u<=y+1e-4);t&&(x={...r,doorU:t.u,doorW:t.width,doorY:t.y,bits:[r.bits[0],r.bits[1]|t.kind<<4,r.bits[2],r.bits[3]]})}let S=(t,n,r,i,o)=>a.push(t,n,r,e.nx,0,e.nz,U.wall,i,e.len,n-O,n-o,g,T,E,x);S(c,b,l,v,m),S(u,p,d,y,h),S(u,b,d,y,h),S(c,b,l,v,m),S(c,f,l,v,m),S(u,p,d,y,h)}let i=A>0?k[e.ring]:null;if(i){let t=i.length/2,n=(e.i+1)%t,r=x+A,o=i[e.i*2],s=i[e.i*2+1],c=i[n*2],l=i[n*2+1],u=(e,t,n,r,i,o)=>a.push(e,t,n,r,i,o,U.trim,0,0,t-x,100,g,T,E);u(e.ax,r,e.az,0,1,0),u(o,r,s,0,1,0),u(e.bx,r,e.bz,0,1,0),u(e.bx,r,e.bz,0,1,0),u(o,r,s,0,1,0),u(c,r,l,0,1,0),u(o,r,s,-e.nx,0,-e.nz),u(o,x,s,-e.nx,0,-e.nz),u(c,r,l,-e.nx,0,-e.nz),u(c,r,l,-e.nx,0,-e.nz),u(o,x,s,-e.nx,0,-e.nz),u(c,x,l,-e.nx,0,-e.nz)}}for(let e of P)rl(a,e.box);let ie=S?.cornice?.underside===!0;for(let e of ee)rl(a,e.box,0,ie);for(let e of te)rl(a,e.box);for(let e of ne)rl(a,e.box);let ae=y?U.roofFlat:U.roofPitched,L=_.tris;for(let e=0;e<L.length;e+=9){let t=L[e+3]-L[e],n=L[e+4]-L[e+1],r=L[e+5]-L[e+2],i=L[e+6]-L[e],o=L[e+7]-L[e+1],s=L[e+8]-L[e+2],c=n*s-r*o,l=r*i-t*s,u=t*o-n*i,d=Math.hypot(c,l,u)||1;c/=d,l/=d,u/=d;for(let t=0;t<9;t+=3){let n=L[e+t],r=L[e+t+1],i=L[e+t+2];a.push(n,r,i,c,l,u,ae,0,0,r-x,100,g,T,E)}}l.trianglesPerBuilding.push((a.count-p)/3)}),l.trianglesPerBuilding.sort((e,t)=>e-t),o[e.length]=a.count,{mesh:{layout:el,vertices:a.bytes(),indices:null,count:a.count},stats:l,anchored:u,structures:s,spans:o,interiors:c}}var Hu=`#include <header>
in vec3 a_pos;
in vec4 a_normal;
in vec4 a_surf;
in vec4 a_bld;
in uvec4 a_mat;
in vec4 a_fac;
in uvec4 a_win;
in uvec4 a_bits;
in uvec4 a_col;
out vec3 v_world;
// Rest position and normal: patterns are anchored to them, so they stay on a piece that moves (fallVs).
out vec3 v_pat;
flat out vec3 v_patN;
flat out vec3 v_normal;
flat out int v_kind;
flat out int v_damage;
out vec4 v_surf;
flat out vec4 v_bld;
flat out uvec4 v_mat;
flat out vec4 v_fac;
flat out uvec4 v_win;
flat out uvec4 v_bits;
flat out uvec4 v_col;
void main() {
  vec3 pos = a_pos;
  // Rubble that is still arriving grows up from its base (writer.ts, growIn).
  if (a_fac.y < 0.0) {
    float g = clamp((u_time.x - a_fac.x) / -a_fac.y, 0.0, 1.0);
    pos.y = mix(a_fac.z, a_pos.y, g * g * (3.0 - 2.0 * g));
  }
  v_world = pos;
  v_pat = pos;
  v_patN = normalize(a_normal.xyz);
  v_normal = normalize(a_normal.xyz);
  // Low three bits: kind of surface; above them the damage level (writer.ts, DAMAGE_STEP).
  int kindWord = int(a_normal.w);
  v_kind = kindWord & 7;
  v_damage = kindWord >> 3;
  v_surf = a_surf;
  v_bld = a_bld;
  v_mat = a_mat;
  v_fac = a_fac;
  v_win = a_win;
  v_bits = a_bits;
  v_col = a_col;
  gl_Position = u_viewProj * vec4(pos, 1.0);
}`;function Uu(e,t,n,r){let i=e.replace(t,n);if(i===e)throw Error(`structure shader: ${r} changed shape`);return i}function Wu(e){let t=Uu(e,`out vec3 v_world;
`,`uniform mat4 u_frame; // frame of the mesh → render space
out vec3 v_world;
`,`frame uniform`);return t=Uu(t,`  v_world = pos;
`,`  v_world = (u_frame * vec4(pos, 1.0)).xyz;
`,`v_world`),t=Uu(t,/v_normal = normalize\((.+?)\);/,`v_normal = normalize(mat3(u_frame) * ($1));`,`v_normal`),Uu(t,`gl_Position = u_viewProj * vec4(pos, 1.0);`,`gl_Position = u_viewProj * vec4(v_world, 1.0);`,`gl_Position`)}function Gu(e={}){return e.framed?Wu(Hu):Hu}var X=e=>e.toFixed(3);function Ku(e,t=!1,n={}){let r=Xu(e,t,n.finishes===!0);return n.framed?qu(r,t):r}function qu(e,t){let n=Uu(e,`uniform ivec4 u_rows; // palette rows: glass, glass with sky reflection, plinth, unused
`,`uniform ivec4 u_rows; // palette rows: glass, glass with sky reflection, plinth, unused
uniform mat4 u_frame; // frame of the mesh → render space
// Up of the frame of the mesh, in render space.
vec3 frameUp() { return normalize(u_frame[1].xyz); }
`,`frame uniform`);return n=Uu(n,`float s = v_surf.z / max(sqrt(1.0 - n.y * n.y), 0.2);`,`float ny = dot(n, frameUp());
    float s = v_surf.z / max(sqrt(1.0 - ny * ny), 0.2);`,`roof slope`),n=Uu(n,`if (n.y < 0.5) ao =`,`if (dot(n, frameUp()) < 0.5) ao =`,`side faces`),t&&(n=Uu(n,`  float up = clamp(u_sunDir.y * 4.0, 0.0, 1.0);
  vec2 s = u_sunDir.xz / max(length(u_sunDir.xz), 1e-3);`,`  // The sun in the frame of the mesh, where the room directions are.
  vec3 sl = transpose(mat3(u_frame)) * u_sunDir.xyz;
  float up = clamp(sl.y * 4.0, 0.0, 1.0);
  vec2 s = sl.xz / max(length(sl.xz), 1e-3);`,`room fill`)),n}var Ju=e=>`// Wall finish by the material byte (bits 2–3): 1 timber frame over the render, 2 coursed stone, 3 upright boards.
// gfH, fh: heights of the ground floor and of the storeys above; top: the eave above the floor base.
vec3 finishWall(vec3 col, uint seed, float u, float len, float yRel, float above, float gfH, float fh, float top) {
  int finish = int((v_mat.z >> 2u) & 3u);
  if (finish == 0) return col;
  float fwU = fwidth(u), fwY = fwidth(yRel);
  if (finish == 1) {
    // Posts about every 1.2 m, rails at the storey lines, a diagonal brace in some fields; above the plinth only.
    float plinth = max(float(v_win.w) * 0.02, ${X(e.plinthHeight)});
    float n = max(1.0, floor(len / 1.2 + 0.5));
    float pw = len / n;
    float cu = u / pw;
    float post = pulseFaded(cu + 0.09 / pw, fwU / pw, 0.0, 0.18 / pw);
    bool low = yRel < gfH;
    float flH = low ? gfH : fh;
    float sl = low ? yRel / gfH : 1.0 + (yRel - gfH) / fh;
    float rail = pulseFaded(sl + 0.08 / flH, fwY / flH, 0.0, 0.16 / flH);
    // The gable above the eave has rails every storey height as well, and its own fields.
    float h = hash2(ivec2(int(floor(cu)), int(floor(sl))), seed + 61u);
    float brace = 0.0;
    if (h < 0.4) {
      float fx = fract(cu), fy = fract(sl);
      float d = h < 0.2 ? fx - fy : fx + fy - 1.0;
      float dm = abs(d) * min(pw, flH) * 0.7071;
      float fw = max(fwU, fwY);
      brace = (1.0 - smoothstep(0.08 - fw, 0.08 + fw, dm)) * detailVisible(0.16);
    }
    float m = max(max(post, rail), brace) * boxCover(above, fwY, plinth, 1.0e4);
    vec3 timber = u_palette[v_mat.w].rgb * (0.85 + 0.12 * hash1(seed + 63u));
    return mix(col, timber, m * 0.95);
  }
  if (finish == 2) {
    // Courses of 0.3 m, stones about 0.55 m long with staggered joints, a tone per stone.
    float cv = yRel / 0.3;
    float row = floor(cv);
    float along = u / 0.55 + 0.5 * row;
    float tone = hash2(ivec2(int(floor(along)), int(row)), seed + 62u);
    col *= 1.0 + 0.24 * (tone - 0.5) * detailVisible(0.3);
    float jh = pulseFaded(cv, fwY / 0.3, 0.0, 0.1);
    float jv = pulseFaded(along, fwU / 0.55, 0.0, 0.055);
    return col * (1.0 - 0.32 * max(jh, jv));
  }
  // Upright boards of 0.18 m with dark joints, a tone per board.
  float cu = u / 0.18;
  float tone = hash2(ivec2(int(floor(cu)), 3), seed + 64u);
  col *= 1.0 + 0.18 * (tone - 0.5) * detailVisible(0.18);
  col *= 0.94 + 0.08 * vnoise(vec2(u * 0.5, yRel * 4.0), seed + 65u) * detailVisible(0.1);
  return col * (1.0 - 0.38 * pulseFaded(cu, fwU / 0.18, 0.0, 0.12));
}

// Cover of a pitched roof by the material byte (bits 4–5): 1 thatch, 2 slate, 3 shingle. s: metres up the slope from
// the eave; across: metres along the eave (in the frame of the mesh).
vec3 coverRoof(vec3 base, uint seed, float s, float across) {
  int cover = int((v_mat.z >> 4u) & 3u);
  float ws = fwidth(s), wa = fwidth(across);
  if (cover == 1) {
    // Soft courses of 0.5 m, strong streaks down the fall line, a darker ragged eave.
    base *= 1.0 - 0.12 * pulseFaded(s / 0.5, ws / 0.5, 0.0, 0.35);
    float streak = vnoise(vec2(across * 7.0, s * 0.35), seed + 66u);
    base *= 1.0 + 0.4 * (streak - 0.5) * detailVisible(0.12);
    base *= 0.93 + 0.14 * vnoise(vec2(across, s) * 0.6, seed + 67u);
    float edge = 0.3 + 0.22 * vnoise(vec2(across * 2.5, 0.5), seed + 68u);
    return base * mix(0.62, 1.0, smoothstep(edge - 0.06 - ws, edge + 0.06 + ws, s));
  }
  float c = cover == 2 ? 0.25 : 0.18;
  float pl = cover == 2 ? 0.4 : 0.22;
  float row = floor(s / c);
  float along = across / pl + 0.5 * row;
  float tone = hash2(ivec2(int(floor(along)), int(row)), seed + 69u);
  float vis = detailVisible(c);
  base *= 1.0 + (cover == 2 ? 0.14 : 0.3) * (tone - 0.5) * vis;
  float jh = pulseFaded(s / c, ws / c, 0.0, 0.14);
  float jv = pulseFaded(along, wa / pl, 0.0, 0.05);
  return base * (1.0 - 0.3 * max(jh, jv));
}

`,Yu=`    if ((v_mat.z & 64u) != 0u && !balconyColumn) {
      // A leaf on each side, 0.45 × the window width, with horizontal slats.
      float sw = 0.45 * (x1 - x0), gap = 0.03 / colW;
      float leaves = (cellBox(fu, fwu, x0 - gap - sw, x0 - gap) + cellBox(fu, fwu, x1 + gap, x1 + gap + sw)) * cellBox(fv, fwv, y0, y1) * inFloors;
      vec3 sc = u_palette[v_col.w].rgb * (0.9 + 0.14 * pulseFaded(fv * flH / 0.12, fwv * flH / 0.12, 0.0, 0.5) * fine);
      col = mix(col, sc, leaves);
    }
`;function Xu(e,t,n){let r=Zu(e,t,n);return n?r.split(`int style = int(v_mat.z);`).join(`int style = int(v_mat.z & 3u);`):r}var Zu=(e,t,n)=>`#include <header>
#include <noise>
#include <lighting>
#include <snow>
uniform ivec4 u_rows; // palette rows: glass, glass with sky reflection, plinth, unused
in vec3 v_world;
in vec3 v_pat;
flat in vec3 v_patN;
flat in vec3 v_normal;
flat in int v_kind;
flat in int v_damage;
in vec4 v_surf;
flat in vec4 v_bld;
flat in uvec4 v_mat;
flat in vec4 v_fac;
flat in uvec4 v_win;
flat in uvec4 v_bits;
flat in uvec4 v_col;
out vec4 o_color;

// Share of the interval [x − w/2, x + w/2] that lies inside [a, b].
float boxCover(float x, float w, float a, float b) {
  w = max(w, 1e-5);
  return clamp((min(x + 0.5 * w, b) - max(x - 0.5 * w, a)) / w, 0.0, 1.0);
}
// The same for a pattern repeating in every unit cell: a pulse from a to b.
float pulseIntegral(float x, float a, float b) {
  return floor(x) * (b - a) + clamp(fract(x), a, b) - a;
}
float pulseCover(float x, float w, float a, float b) {
  w = max(w, 1e-5);
  return clamp((pulseIntegral(x + 0.5 * w, a, b) - pulseIntegral(x - 0.5 * w, a, b)) / w, 0.0, 1.0);
}

// A repeated pattern for drawing: antialiased over the pixel footprint and faded out as well. Box filtering
// alone is not enough: a pattern with a period of one to two pixels still beats with the screen grid and makes
// stripes. So below about three pixels per period it fades into its mean, and below two it is only the mean.
float pulseFaded(float x, float w, float a, float b) {
  return mix(pulseCover(x, w, a, b), b - a, smoothstep(0.3, 0.5, w));
}
// The same for one rectangle inside a cell whose coordinate f runs 0–1 (w = cell coordinate per pixel).
float cellBox(float f, float w, float a, float b) {
  return mix(boxCover(f, w, a, b), max(b - a, 0.0), smoothstep(0.3, 0.5, w));
}

${n?Ju(e):``}// Light of lit windows at the current wall point: lamp colour, zero where nothing is lit.
vec3 g_windowGlow = vec3(0.0);

vec3 wallColor(uint seed) {
  float u = v_surf.x, len = v_surf.y, yRel = v_surf.z, above = v_surf.w;
  float floorH = v_bld.x, floors = v_bld.y, bay = v_bld.w;
  int style = int(v_mat.z);
  vec3 trim = u_palette[v_mat.w].rgb;

  // Building tint and slow plaster blotches.
  vec3 wall = u_palette[v_mat.x].rgb * (0.88 + 0.22 * hash1(seed + 1u));
  wall *= mix(vec3(1.0), vec3(1.05, 1.0, 0.9), hash1(seed + 2u));
  wall *= 0.95 + 0.1 * vnoise(vec2(u, yRel) * 0.4, seed);
  vec3 col = ${n?`finishWall(wall, seed, u, len, yRel, above, floorH, floorH, floors * floorH)`:`wall`};

  float fwU = fwidth(u), fwY = fwidth(yRel);
  float top = floors * floorH;

  if (style != 0 && len > bay * 0.7) {
    float n = max(1.0, floor(len / bay + 0.5));
    float bayW = len / n;
    float cu = u / bayW, cv = yRel / floorH;
    float fu = fwU / bayW, fv = fwY / floorH;
    // Window width, height and sill as a share of the cell.
    float ww, wh, sill;
    if (style == 2) { ww = 0.8; wh = 0.48; sill = 0.3; }
    else if (style == 3) { ww = 0.36; wh = 0.3; sill = 0.42; }
    else { ww = clamp(1.5 / bayW, 0.38, 0.66); wh = clamp(1.65 / floorH, 0.3, 0.62); sill = 0.9 / floorH; }
    float inFloors = boxCover(yRel, fwY, 0.0, top);
    float gx = pulseFaded(cu, fu, 0.5 - 0.5 * ww, 0.5 + 0.5 * ww);
    float gy = pulseFaded(cv, fv, sill, sill + wh);
    float glass = gx * gy * inFloors;
    float fr = 0.09 / bayW, frV = 0.09 / floorH;
    float frame = pulseFaded(cu, fu, 0.5 - 0.5 * ww - fr, 0.5 + 0.5 * ww + fr)
                * pulseFaded(cv, fv, sill - 1.6 * frV, sill + wh + frV) * inFloors;
    // Every window has its own glass tone. From afar, where windows merge, it turns into the mean.
    float r = hash2(ivec2(floor(cu), floor(cv)), seed + uint(len * 31.0));
    float vis = detailVisible(bayW * 0.6);
    float bright = mix(0.3, r * r, vis);
    // Sky reflection in the upper part of the window.
    float inWin = clamp((fract(cv) - sill) / wh, 0.0, 1.0);
    vec3 glassCol = mix(u_palette[u_rows.x].rgb, u_palette[u_rows.y].rgb, bright * (0.55 + 0.45 * mix(0.5, inWin, vis)));
    col = mix(col, trim, frame * 0.8);
    col = mix(col, glassCol, glass);
    if (u_time.z > 0.0) {
      // Windows are lit in the evening. Each window decides by its own hash against the share of lit windows,
      // so they turn on and off one by one. Every house has its habit: lights almost everywhere or almost
      // nowhere, fewer in halls and works (strip and sparse windows) than in flats.
      float habit = 0.35 + 1.3 * hash1(seed + 9u);
      float share = clamp(u_time.w * habit * (style == 1 ? 1.0 : 0.55), 0.0, 0.95);
      float h = hash2(ivec2(floor(cu), floor(cv)), seed + 77u + uint(len * 31.0));
      float on = 1.0 - smoothstep(share - 0.012, share + 0.012, h);
      // From afar, where windows merge, the wall glows with the mean.
      on = mix(share, on, vis);
      // Warm bulbs, now and then a cooler fluorescent tube. Brightness differs a little per window.
      vec3 lamp = mix(vec3(1.0, 0.74, 0.38), vec3(0.86, 0.9, 0.82), step(0.82, r));
      g_windowGlow = lamp * (glass * on * (0.75 + 0.5 * mix(0.5, fract(h * 53.0), vis)));
    }
    // Thin line at every storey's ceiling.
    col *= 1.0 - 0.1 * pulseFaded(cv, fv, 0.0, 0.04) * inFloors;
  }

  // Cornice under the roof and plinth at the ground.
  col = mix(col, trim, 0.55 * boxCover(yRel, fwY, top - 0.18, top + 0.7));
  col = mix(col, u_palette[u_rows.z].rgb, 0.85 * boxCover(above, fwY, -1000.0, ${X(e.plinthHeight)}));
  return col;
}

// --- Recipe path ------------------------------------------------------------------------------------------

// Share of windows lit tonight in this house, and whether a given window is lit (0–1, mean from afar).
float litShare(uint seed, float factor) {
  float habit = 0.35 + 1.3 * hash1(seed + 9u);
  return clamp(u_time.w * habit * factor, 0.0, 0.95);
}
float litWindow(float share, float h, float vis) {
  float on = 1.0 - smoothstep(share - 0.012, share + 0.012, h);
  return mix(share, on, vis);
}

// Window cell of the recipe façade at a wall point: column and storey, the window rectangle in the cell and which
// columns hold doors, stairwell strips and balconies. Shared by the outer face and the inner face (wallInside).
struct RCell {
  float colW, cu, column, fu, fwu, fl, flH, fv, fwv, vis, doorH, top, inFloors, ww, y0, y1;
  int c4;
  bool groundFloor, hasDoor, doorColumn, stairColumn, balconyColumn, windows;
};
RCell recipeCell(float u, float len, float yRel, float fwU, float fwY) {
  float fh = v_bld.x, floors = v_bld.y, bay = v_bld.w;
  float gfH = v_fac.w;
  uint flags = v_bits.x;
  // Bit 7 of bits.y: arched window, its height stored on the tall scale.
  bool archWin = (v_bits.y & 128u) != 0u;
  float winW = float(v_win.x) * 0.02, winH = float(v_win.y) * 0.02 * (archWin ? ${X(4)} : 1.0), sill = float(v_win.z) * 0.02;
  int gfKind = int((v_bits.y >> 2u) & 3u);
  int doorKind = int((v_bits.y >> 4u) & 7u);
  uint balMask = v_bits.w & 15u, narrowMask = v_bits.w >> 4u;
  bool blindWall = (flags & ${z.blind}u) != 0u;
  bool stairStrip = (flags & ${z.stairStrip}u) != 0u;
  bool balconies = (flags & ${z.balconies}u) != 0u;
  float top = gfH + (floors - 1.0) * fh;
  float inFloors = boxCover(yRel, fwY, 0.0, top);

  // Window columns along the wall, storeys up the wall (the ground floor has its own height).
  float n = max(1.0, floor(len / bay + 0.5));
  float colW = len / n;
  float cu = u / colW;
  float column = floor(cu);
  float fu = fract(cu);
  float fwu = fwU / colW;
  bool groundFloor = yRel < gfH;
  float fl = groundFloor ? 0.0 : 1.0 + floor((yRel - gfH) / fh);
  float flH = groundFloor ? gfH : fh;
  float fv = groundFloor ? yRel / gfH : fract((yRel - gfH) / fh);
  float fwv = fwY / flH;
  int c4 = int(mod(column, 4.0));
  float vis = detailVisible(colW * 0.6);

  bool hasDoor = doorKind > 0;
  float doorCol = floor(v_fac.x / colW);
  bool doorColumn = hasDoor && column == doorCol;
  float doorH = doorKind == 4 ? v_fac.y * ${X(R.archHeightPerWidth)} : doorKind == 2 ? ${X(R.garageDoorHeight)} : doorKind == 3 ? ${X(R.portalHeight)} : ${X(R.doorHeight)};
  bool stairColumn = doorColumn && stairStrip && doorKind != 2;
  bool balconyColumn = balconies && !groundFloor && ((balMask >> uint(c4)) & 1u) != 0u && !stairColumn;

  // Window rectangle in the cell (x across the column, y up the storey), by storey and column format.
  float ww = winW * (((narrowMask >> uint(c4)) & 1u) != 0u ? 0.55 : 1.0) / colW;
  float y0 = sill / flH, y1 = (sill + winH) / flH;
  bool windows = !blindWall;
  if (groundFloor) {
    if (gfKind == 1) { ww = min(0.82, (colW - 0.5) / colW); y0 = 0.4 / gfH; y1 = (gfH - 0.45) / gfH; }
    else if (gfKind == 2) { ww *= 0.85; y0 = (gfH - 1.15) / gfH; y1 = (gfH - 0.45) / gfH; }
    else if (gfKind == 3) windows = false;
    if (doorColumn) windows = false;
  }
  if (stairColumn) windows = false;
  // A balcony door reaches down to the floor behind the parapet.
  if (balconyColumn) y0 = 0.06 / flH;
  ww = min(ww, 0.86);

  RCell k;
  k.colW = colW; k.cu = cu; k.column = column; k.fu = fu; k.fwu = fwu; k.fl = fl; k.flH = flH; k.fv = fv; k.fwv = fwv;
  k.vis = vis; k.doorH = doorH; k.top = top; k.inFloors = inFloors; k.ww = ww; k.y0 = y0; k.y1 = y1; k.c4 = c4;
  k.groundFloor = groundFloor; k.hasDoor = hasDoor; k.doorColumn = doorColumn; k.stairColumn = stairColumn;
  k.balconyColumn = balconyColumn; k.windows = windows;
  return k;
}

vec3 recipeWall(uint seed) {
  float u = v_surf.x, len = v_surf.y, yRel = v_surf.z, above = v_surf.w;
  float fh = v_bld.x;
  float gfH = v_fac.w;
  uint flags = v_bits.x;
  vec3 trim = u_palette[v_mat.w].rgb;
  vec3 frameC = u_palette[v_col.x].rgb;
  vec3 plinthC = u_palette[v_col.y].rgb;
  vec3 doorC = u_palette[v_col.z].rgb;
  float plinthH = float(v_win.w) * 0.02;
  int mullions = int(v_bits.y & 3u);
  int gfKind = int((v_bits.y >> 2u) & 3u);
  int doorKind = int((v_bits.y >> 4u) & 7u);
  bool archWin = (v_bits.y & 128u) != 0u;
  float curtainShare = float(v_bits.z & 15u) / 15.0, blindShare = float(v_bits.z >> 4u) / 15.0;
  bool loggia = (flags & ${z.loggia}u) != 0u;
  uint wallSeed = seed + uint(len * 31.0);

  // Building tint: wider spread than the simple path, so neighbours differ more. Slow plaster blotches.
  vec3 col = u_palette[v_mat.x].rgb * (0.84 + 0.3 * hash1(seed + 1u));
  col *= mix(vec3(1.0), vec3(1.06, 1.0, 0.88), hash1(seed + 2u));
  col *= mix(vec3(1.0), vec3(0.95, 0.99, 1.04), hash1(seed + 4u));
  col *= 0.95 + 0.1 * vnoise(vec2(u, yRel) * 0.4, seed);
${n?`  col = finishWall(col, seed, u, len, yRel, above, gfH, fh, gfH + (v_bld.y - 1.0) * fh);
`:``}
  float fwU = fwidth(u), fwY = fwidth(yRel);
  RCell k = recipeCell(u, len, yRel, fwU, fwY);
  float top = k.top, inFloors = k.inFloors;
  float colW = k.colW, cu = k.cu, column = k.column, fu = k.fu, fwu = k.fwu;
  bool groundFloor = k.groundFloor;
  float fl = k.fl, flH = k.flH, fv = k.fv, fwv = k.fwv;
  int c4 = k.c4;
  float vis = k.vis;
  bool hasDoor = k.hasDoor, stairColumn = k.stairColumn, balconyColumn = k.balconyColumn, windows = k.windows;
  float doorH = k.doorH;
  float doorTopRel = v_fac.z + doorH - (v_pat.y - yRel);
  float ww = k.ww, y0 = k.y0, y1 = k.y1;

  // Prefab panels: a slight tone per panel, joints along storeys and columns.
  if ((flags & ${z.panelJoints}u) != 0u) {
    float jl = (yRel - gfH) / fh;
    float tone = hash2(ivec2(int(column), int(floor(jl))), seed + 21u) - 0.5;
    col *= 1.0 + 0.09 * tone * detailVisible(min(colW, fh) * 0.5);
    float jh = pulseFaded(jl + 0.5 * 0.05 / fh, fwY / fh, 0.0, 0.05 / fh);
    float jv = pulseFaded(cu + 0.5 * 0.05 / colW, fwu, 0.0, 0.05 / colW);
    col *= 1.0 - 0.22 * max(jh, jv) * inFloors;
  }

  // Loggia recess: the band between the parapet and the slab above lies in deep shade.
  if (balconyColumn && loggia) {
    float bw = min(${X(R.balconyColumnShare)}, ${X(R.balconyMaxWidth)} / colW);
    float recess = cellBox(fu, fwu, 0.5 - 0.5 * bw, 0.5 + 0.5 * bw) * cellBox(fv, fwv, 0.0, 1.0 - ${X(R.balconySlab)} / flH);
    col = mix(col, col * 0.5, recess * inFloors);
  }

  // Rain streaks under windows, darkest right under the sill.
  if (windows) {
    float sx = cellBox(fu, fwu, 0.5 - 0.42 * ww, 0.5 + 0.42 * ww);
    float below = clamp(1.0 - (y0 - fv) * flH / 1.1, 0.0, 1.0) * step(fv, y0);
    col *= 1.0 - 0.07 * sx * below * inFloors * detailVisible(0.6);
  }

  if (windows) {
    float x0 = 0.5 - 0.5 * ww, x1 = 0.5 + 0.5 * ww;
    float gx = cellBox(fu, fwu, x0, x1);
    float gy = cellBox(fv, fwv, y0, y1);
    float glass = gx * gy * inFloors;
    float fr = 0.07 / colW, frV = 0.07 / flH;
    float frame = cellBox(fu, fwu, x0 - fr, x1 + fr) * cellBox(fv, fwv, y0 - frV, y1 + frV) * inFloors;
    if (archWin) {
      // Half-round head as wide as the window: above the spring line only the half circle stays glass and frame.
      float rr = 0.5 * (x1 - x0) * colW;
      vec2 p = vec2((fu - 0.5) * colW, (fv - y1) * flH + rr);
      float fwd = max(fwU, fwY);
      float d = p.y > 0.0 ? length(p) : 0.0;
      glass *= 1.0 - smoothstep(rr - fwd, rr + fwd, d);
      frame *= 1.0 - smoothstep(rr + 0.07 - fwd, rr + 0.07 + fwd, d);
    }
    // Sill: a light ledge under the window, a little wider than the frame.
    float sillBand = cellBox(fu, fwu, x0 - 2.0 * fr, x1 + 2.0 * fr) * cellBox(fv, fwv, y0 - 0.07 / flH - frV, y0 - frV) * inFloors;
    // Position inside the glass (0–1) for bars, curtains and blinds.
    float wx = (fu - x0) / max(x1 - x0, 1e-4);
    float wy = (fv - y0) / max(y1 - y0, 1e-4);
    float fwx = fwu / max(x1 - x0, 1e-4), fwy = fwv / max(y1 - y0, 1e-4);
    float winWm = (x1 - x0) * colW, winHm = (y1 - y0) * flH;
    float bar = 0.0;
    float bw = 0.06 / winWm;
    if (mullions == 1 || (mullions == 2 && winWm < 1.3)) bar = cellBox(wx, fwx, 0.5 - bw, 0.5 + bw);
    else if (mullions == 2) bar = max(cellBox(wx, fwx, 0.333 - bw, 0.333 + bw), cellBox(wx, fwx, 0.667 - bw, 0.667 + bw));
    if ((flags & ${z.transom}u) != 0u && !balconyColumn) bar = max(bar, cellBox(wy, fwy, 0.7 - 0.06 / winHm, 0.7 + 0.06 / winHm));

    ivec2 cell = ivec2(int(column), int(fl));
    float r = hash2(cell, wallSeed);
    float bright = mix(0.3, r * r, vis);
    vec3 glassCol = mix(u_palette[u_rows.x].rgb, u_palette[u_rows.y].rgb, bright * (0.55 + 0.45 * mix(0.5, clamp(wy, 0.0, 1.0), vis)));
    // Curtains (side panels) and blinds (lowered from the top), chosen per window.
    float hc = hash2(cell, wallSeed + 131u);
    float fine = detailVisible(winWm * 0.25);
    float curtain = 0.0, blind = 0.0;
    if (hc < curtainShare) curtain = max(cellBox(wx, fwx, 0.0, 0.2 + 0.1 * r), cellBox(wx, fwx, 0.8 - 0.1 * r, 1.0));
    else if (hc < curtainShare + blindShare) {
      float depth = 0.25 + 0.65 * fract(hc * 37.0);
      blind = cellBox(wy, fwy, 1.0 - depth, 1.0) * (0.92 + 0.08 * pulseFaded(wy * winHm / 0.07, fwy * winHm / 0.07, 0.0, 0.5));
    }
    vec3 cloth = mix(frameC, vec3(0.78, 0.70, 0.58), 0.55);
    glassCol = mix(glassCol, cloth * 0.85, 0.75 * curtain * fine);
    glassCol = mix(glassCol, frameC * 0.88, blind * fine);
    // Mean of curtains and blinds from afar, so the wall does not change tone between zooms.
    glassCol = mix(glassCol, mix(glassCol, cloth * 0.85, 0.12 * curtainShare + 0.3 * blindShare), 1.0 - fine);

${n?Yu:``}    col = mix(col, mix(frameC, vec3(0.9, 0.88, 0.84), 0.35), sillBand * 0.85);
    col = mix(col, frameC, frame * 0.85);
    col = mix(col, glassCol, glass);
    col = mix(col, frameC, glass * bar * 0.9);
    if (u_time.z > 0.0) {
      float share = litShare(seed, groundFloor && gfKind != 0 ? 0.5 : 1.0);
      float h = hash2(cell, seed + 77u + uint(len * 31.0));
      float on = litWindow(share, h, vis);
      vec3 lamp = mix(vec3(1.0, 0.74, 0.38), vec3(0.86, 0.9, 0.82), step(0.82, r));
      // A curtain warms and dims the light, a blind holds most of it back.
      float pass = 1.0 - 0.75 * blind * fine - 0.3 * curtain * fine;
      lamp *= mix(vec3(1.0), vec3(1.0, 0.85, 0.7), curtain * fine);
      g_windowGlow = lamp * (glass * (1.0 - bar) * on * pass * (0.75 + 0.5 * mix(0.5, fract(h * 53.0), vis)));
    }
  }

  // Stairwell strip above the entrance: landing windows half a storey off the flat windows.
  if (stairColumn) {
    float tl = (yRel - gfH) / fh + 0.5;
    float k = floor(tl);
    float bottom = gfH + (k - 0.5) * fh + 0.5 * fh - 0.6;
    float sw = min(0.9, colW * 0.4) / colW;
    float ok = step(doorTopRel + 0.45, bottom) * step(bottom + 1.2, top - 0.25);
    float sg = cellBox(fu, fwu, 0.5 - 0.5 * sw, 0.5 + 0.5 * sw) * cellBox(fract(tl), fwY / fh, 0.5 - 0.6 / fh, 0.5 + 0.6 / fh) * ok;
    float sf = cellBox(fu, fwu, 0.5 - 0.5 * sw - 0.06 / colW, 0.5 + 0.5 * sw + 0.06 / colW) * cellBox(fract(tl), fwY / fh, 0.5 - 0.66 / fh, 0.5 + 0.66 / fh) * ok;
    vec3 sglass = mix(u_palette[u_rows.x].rgb, u_palette[u_rows.y].rgb, 0.45);
    col = mix(col, frameC, sf * 0.85);
    col = mix(col, sglass, sg);
    if (u_time.z > 0.0) {
      // Stairwell lights run on timers: lit more often than flats, cooler light.
      float on = litWindow(clamp(0.25 + 0.6 * u_time.w, 0.0, 0.9), hash2(ivec2(int(column), int(k)), wallSeed + 313u), vis);
      g_windowGlow += vec3(0.92, 0.9, 0.78) * sg * on * 0.8;
    }
  }

  // Cornice band: geometry draws a real cornice, otherwise a painted band under the roof (and the parapet).
  if ((flags & ${z.cornice}u) == 0u) col = mix(col, trim, 0.55 * boxCover(yRel, fwY, top - 0.18, top + 0.7));
  else col = mix(col, trim, 0.45 * boxCover(yRel, fwY, top + 0.1, top + 0.7));
  // Plinth: from the recipe, at least a hint where it is not given.
  col = mix(col, plinthC, 0.85 * boxCover(above, fwY, -1000.0, max(plinthH, 0.25)));

  // Entrance: frame, door leaf by kind, a lamp above at night.
  if (hasDoor) {
    float wy = v_pat.y;
    float hw = 0.5 * v_fac.y;
    float du = u - v_fac.x;
    float fr = 0.09;
    float outer = boxCover(du, fwU, -hw - fr, hw + fr) * boxCover(wy, fwY, v_fac.z, v_fac.z + doorH + fr);
    float leaf = boxCover(du, fwU, -hw, hw) * boxCover(wy, fwY, v_fac.z, v_fac.z + doorH);
    float dv = (wy - v_fac.z) / doorH;
    vec3 dc = doorC;
    if (doorKind == 4) {
      // Arch: a half-round head as wide as the opening, a leaf of vertical boards.
      vec2 p = vec2(du, wy - (v_fac.z + doorH - hw));
      float d = p.y > 0.0 ? length(p) : 0.0;
      float fwd = max(fwU, fwY);
      outer *= 1.0 - smoothstep(hw + fr - fwd, hw + fr + fwd, d);
      leaf *= 1.0 - smoothstep(hw - fwd, hw + fwd, d);
      dc *= 0.92 + 0.1 * pulseFaded(du / 0.18, fwU / 0.18, 0.0, 0.5);
    } else if (doorKind == 2) {
      // Garage door: ribbed sheet metal.
      dc *= 0.9 + 0.12 * pulseFaded(wy / 0.16, fwY / 0.16, 0.0, 0.5);
    } else {
      // Glass in the upper part of the leaf (door) or almost all of it (portal), split by a bar.
      float gl0 = doorKind == 3 ? 0.06 : 0.45;
      vec3 dglass = mix(u_palette[u_rows.x].rgb, u_palette[u_rows.y].rgb, 0.35);
      float g = boxCover(dv, fwY / doorH, gl0, 0.94) * boxCover(abs(du), fwU, 0.0, hw - 0.1);
      float split = boxCover(du, fwU, -0.04, 0.04);
      dc = mix(dc, dglass, g * (1.0 - split));
      if (u_time.z > 0.0) g_windowGlow += vec3(1.0, 0.8, 0.5) * g * (1.0 - split) * 0.55 * leaf;
    }
    col = mix(col, frameC * 0.95, outer * 0.9);
    col = mix(col, dc, leaf);
    if (u_time.z > 0.0 && doorKind != 2) {
      float lamp = boxCover(du, fwU, -0.12, 0.12) * boxCover(wy, fwY, v_fac.z + doorH + 0.12, v_fac.z + doorH + 0.32);
      g_windowGlow += vec3(1.0, 0.78, 0.45) * lamp * 1.5;
    }
  }
  return col;
}

${t?Qu+$u:``}vec3 roofColor(uint seed, vec3 n) {
  vec3 base = u_palette[v_mat.y].rgb * (0.82 + 0.18 * hash1(seed + 3u));
  if (v_kind == 1) {
    // Courses of roofing along the fall line. Distance up the roof from the height above the eave and the slope.
    const float COURSE_M = 0.36;
    float s = v_surf.z / max(sqrt(1.0 - n.y * n.y), 0.2);
    float w = fwidth(s) / COURSE_M;
    base *= 1.0 - 0.2 * pulseFaded(s / COURSE_M, w, 0.0, 0.25);
    base *= 0.9 + 0.2 * vnoise(v_pat.xz * 0.55, seed);
${n?`    if (((v_mat.z >> 4u) & 3u) != 0u) {
      // A cover of its own instead of the plain courses; across the slope in the frame of the mesh.
      vec2 fall = v_patN.xz / max(length(v_patN.xz), 1e-4);
      base = coverRoof(u_palette[v_mat.y].rgb * (0.82 + 0.18 * hash1(seed + 3u)), seed, s, dot(v_pat.xz, vec2(-fall.y, fall.x)));
    }
`:``}  } else {
    // Flat roof: large blotches and fine grain.
    base *= 0.9 + 0.2 * vnoise(v_pat.xz * 0.21, seed);
    base *= 1.0 + 0.12 * (vnoise(v_pat.xz / 0.3, 31u) - 0.5) * detailVisible(0.3);
  }
  return base;
}

void main() {
  vec3 n = v_normal;
  uint seed = uint(v_bld.z * 16777215.0);
${t?`  if (v_kind == 4) {
    o_color = interiorShade(seed, n);
    return;
  }
  if (v_kind == 5) {
    o_color = wallInsideShade(seed, n);
    return;
  }
`:``}  vec3 col;
  float ao = 1.0;
  if (v_kind == 0) {
    col = (v_bits.x & ${z.recipe}u) != 0u ? recipeWall(seed) : wallColor(seed);
    // The wall darkens at its foot, so the house sits on the ground.
    ao = mix(0.5, 1.0, smoothstep(-0.3, ${X(e.wallBaseShadeHeight)}, v_surf.w));
  } else if (v_kind == 3) {
    col = u_palette[v_mat.w].rgb * (0.92 + 0.1 * hash1(seed + 1u));
    // Side faces darken towards their foot (parapet inner face, boxes on the roof and on the ground).
    if (n.y < 0.5) ao = mix(0.6, 1.0, smoothstep(0.0, ${X(e.parapetHeight)}, v_surf.z));
  } else {
    col = roofColor(seed, n);
  }
${t?`  if (v_damage > 0) col = damageShade(col, seed);
`:``}  // Wet: roofs and fittings darken more than walls, which rain wets only partly.
  col *= 1.0 - u_weather.y * (v_kind == 0 ? 0.1 : 0.22);
  if (v_kind != 0) {
    // Snow on roofs, parapets, roof superstructures and cars. Flat roofs hold it longest.
    float snow = snowOn(v_world, n, v_kind == 2 ? 0.18 : 0.06);
    col = mix(col, u_snow.rgb * (0.97 + 0.06 * hash1(seed + 5u)), snow);
  }
  float sun = sunVisibility(v_world, n, 1.6);
  vec3 light = lightOn(n, sun, ao) * mix(0.78, 1.0, ao);
  // Windows glow on their own, independent of ambient light. Exposure is divided out so they do not blow out at night.
  vec3 glow = g_windowGlow * (u_time.z / u_warmTint.a);
  o_color = vec4(applyFog(toDisplay(col * u_warmTint.rgb * light + glow), v_world), 1.0);
}`,Qu=`// Damage: 1 cracked (crack network and spalled plaster in patches), 2 heavily damaged (all over, with soot),
// 3 cut and inner faces (bare core), 4 rubble (dusty broken material). Only damaged vertices (v_damage > 0) come here.

// Distance to the nearest cell border of a jittered grid (F2 − F1 of cellular noise), in cell units.
float cellEdge(vec2 p, uint seed) {
  vec2 i = floor(p);
  vec2 f = p - i;
  float d1 = 8.0, d2 = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      ivec2 c = ivec2(i) + ivec2(x, y);
      vec2 o = vec2(hash2(c, seed), hash2(c, seed + 1u));
      float d = length(vec2(x, y) + o - f);
      if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
    }
  }
  return d2 - d1;
}

vec3 damageShade(vec3 col, uint seed) {
  // Projected from the rest position: the pattern stays on a piece that moves.
  vec3 m = v_patN;
  vec2 p = abs(m.y) > 0.7 ? v_pat.xz : vec2(dot(v_pat.xz, vec2(-m.z, m.x)), v_pat.y);
  float grain = vnoise(p * 4.0, seed + 41u);
  if (v_damage == 3) {
    // Broken core: dark masonry with a little brick in it.
    return mix(col * 0.38, vec3(0.3, 0.22, 0.18), 0.45) * (0.8 + 0.4 * grain);
  }
  if (v_damage >= 4) {
    // Rubble: the material broken up and covered in dust.
    return mix(col, vec3(0.66, 0.62, 0.56), 0.55) * (0.85 + 0.35 * grain * detailVisible(0.25));
  }
  float heavy = v_damage >= 2 ? 1.0 : 0.0;
  // Where the damage lies: patches when cracked, everywhere when heavy.
  float patchN = vnoise(p * 0.3, seed + 79u);
  float area = mix(0.25 + 0.75 * smoothstep(0.3, 0.55, patchN), 1.0, heavy);
  // Crack network: borders of jagged cells, about a metre across, plus finer ones near the worst spots.
  vec2 q = p * 0.9 + 0.35 * vec2(vnoise(p * 2.3, seed + 70u), vnoise(p * 2.3 + 9.0, seed + 71u));
  float e = cellEdge(q, seed + 72u);
  float px = length(fwidth(q));
  float crack = 1.0 - smoothstep(0.006, 0.006 + 1.1 * px, e);
  vec2 q2 = q * 2.6;
  float e2 = cellEdge(q2, seed + 73u);
  float px2 = length(fwidth(q2));
  float fine = (1.0 - smoothstep(0.004, 0.004 + 1.1 * px2, e2)) * smoothstep(0.55, 0.75, patchN + 0.4 * heavy);
  float lines = max(crack, 0.7 * fine) * area * detailVisible(0.08);
  // Spalled plaster: brick shows through in blotches along the cracks.
  float spallN = vnoise(p * 1.2, seed + 81u) + 0.25 * (1.0 - smoothstep(0.0, 0.25, e));
  float spall = smoothstep(mix(0.8, 0.66, heavy), mix(0.86, 0.72, heavy), spallN) * area;
  col = mix(col, vec3(0.5, 0.33, 0.26) * (0.8 + 0.3 * grain), spall * 0.85);
  // Soot and dust.
  float soot = smoothstep(0.4, 0.85, vnoise(p * 0.22, seed + 80u)) * (0.12 + 0.45 * heavy) * area;
  col *= 1.0 - soot * 0.7;
  col = mix(col, col * 0.3, lines * 0.85);
  return col;
}

`,$u=`// Calm wall paints, picked per room by its hash.
const vec3 ROOM_PAINTS[8] = vec3[8](
  vec3(0.74, 0.71, 0.64), vec3(0.64, 0.69, 0.62), vec3(0.78, 0.69, 0.55), vec3(0.62, 0.66, 0.70),
  vec3(0.74, 0.63, 0.58), vec3(0.79, 0.77, 0.72), vec3(0.66, 0.63, 0.52), vec3(0.69, 0.73, 0.74));

vec3 interiorColor(uint rs, int finish, int type, vec2 p, float h, out float ao) {
  ao = 1.0;
  vec2 fw = fwidth(p);
  float vis = detailVisible(0.1);
  vec3 col;
  if (finish == 0 || finish == 5) {
    if (finish == 5) {
      // Roof space: rough boards between rafters.
      col = vec3(0.56, 0.44, 0.32) * (0.9 + 0.2 * hash1(rs + 7u));
      col *= 1.0 - 0.35 * pulseFaded(p.x / 0.9, fw.x / 0.9, 0.0, 0.12) * vis;
    } else {
      col = ROOM_PAINTS[int(hash1(rs) * 8.0) & 7] * (0.95 + 0.08 * hash1(rs + 3u));
      if (type == 1) col *= 0.8;
      else if (type == 2) col = mix(col, vec3(0.7, 0.7, 0.68), 0.55);
      // Skirting board and a darker band where wall meets floor and ceiling.
      col = mix(col, col * 0.55, boxCover(p.y, fw.y, -1.0, 0.08));
      ao = mix(0.7, 1.0, smoothstep(0.0, 0.6, p.y)) * mix(0.82, 1.0, smoothstep(0.0, 0.45, h - p.y));
    }
    col *= 0.96 + 0.08 * vnoise(p * 0.7, rs + 2u);
  } else if (finish == 1) {
    col = vec3(0.8, 0.79, 0.76) * (0.97 + 0.05 * vnoise(p * 0.5, rs + 4u));
  } else if (finish == 2 || finish == 6) {
    float pick = hash1(rs + 5u);
    if (type == 1 || type == 2) {
      // Corridor and stairwell: dark terrazzo tiles.
      col = vec3(0.42, 0.4, 0.37) * (0.92 + 0.16 * hash1(rs + 6u));
      vec2 q = p / 0.4;
      col *= 1.0 - 0.18 * max(pulseFaded(q.x, fw.x / 0.4, 0.0, 0.04), pulseFaded(q.y, fw.y / 0.4, 0.0, 0.04)) * vis;
      col *= 0.92 + 0.16 * vnoise(p * 6.0, rs + 8u) * vis;
    } else if (finish == 6 || pick < 0.55) {
      // Planks: parquet in rooms, boards in the roof space.
      float wPl = finish == 6 ? 0.2 : 0.11;
      float row = floor(p.y / wPl);
      float along = p.x + 0.37 * row;
      col = (finish == 6 ? vec3(0.44, 0.36, 0.27) : vec3(0.6, 0.41, 0.24)) * (0.85 + 0.25 * hash2(ivec2(int(row), int(floor(along / 0.9))), rs + 9u));
      col *= 1.0 - 0.22 * max(pulseFaded(p.y / wPl, fw.y / wPl, 0.0, 0.06), pulseFaded(along / 0.9, fw.x / 0.9, 0.0, 0.015)) * vis;
    } else {
      // Linoleum in a quiet colour.
      col = mix(vec3(0.55, 0.52, 0.45), vec3(0.5, 0.55, 0.52), hash1(rs + 10u)) * (0.95 + 0.06 * vnoise(p * 1.3, rs + 11u));
    }
  } else if (finish == 4) {
    col = vec3(0.6, 0.58, 0.55) * (0.94 + 0.08 * vnoise(p * 3.0, rs + 12u));
  } else {
    // Bare concrete at slab edges and on partition tops.
    col = vec3(0.56, 0.55, 0.52) * (0.85 + 0.25 * vnoise(p * 2.5, rs + 13u));
  }
  return col;
}

// Daylight reaching into a room: a little from the sky through any gap, much more through its windows (glazed share
// of the floor area, 0–1), more again when they face the sun. Returns the fill light.
vec3 roomFill(float day, vec2 dir, float ao) {
  float up = clamp(u_sunDir.y * 4.0, 0.0, 1.0);
  vec2 s = u_sunDir.xz / max(length(u_sunDir.xz), 1e-3);
  float side = max(dot(dir, s), 0.0);
  float gain = 0.45 + day * (1.6 + 1.2 * side * up);
  return (u_ambient.rgb * 0.45 + u_skyFill.rgb * 0.15 + u_bounce.rgb * 0.55 + u_sunColor.rgb * 0.07) * gain * ao;
}
// Is the room lamp on: rooms by their lowest lit-window threshold (own one without windows), shared spaces on timers.
float roomOn(int mode, float lit, float own, uint seed) {
  if (u_time.z <= 0.0 || mode == 2) return 0.0;
  if (mode == 1) {
    float share = clamp(0.25 + 0.6 * u_time.w, 0.0, 0.9);
    return 1.0 - smoothstep(share - 0.012, share + 0.012, own);
  }
  float share = litShare(seed, 1.0);
  float key = lit < 1.5 ? lit : own;
  return 1.0 - smoothstep(share - 0.012, share + 0.012, key);
}
// Warm bulbs in rooms, cooler tubes in corridors and stairwells.
vec3 roomLamp(int mode, uint rs) {
  return mode == 1 ? vec3(0.9, 0.88, 0.78) : mix(vec3(1.0, 0.72, 0.4), vec3(1.0, 0.82, 0.55), hash1(rs + 14u));
}

vec4 interiorShade(uint seed, vec3 n) {
  uint rs = uint(v_surf.w * 16777215.0) >> 16u;
  int finish = int(v_bits.x), type = int(v_bits.y);
  float ao;
  vec3 col = interiorColor(rs, finish, type, v_surf.xy, v_surf.z, ao);
  // Damage: full on walls, softer on floors and ceilings (dust and cracks rather than spalled plaster).
  if (v_damage > 0) col = mix(col, damageShade(col, seed), abs(v_patN.y) > 0.7 ? 0.4 : 0.7);
  // Sun through the openings (shadow map), plus the daylight of the room's windows.
  float sun = sunVisibility(v_world, n, 1.6);
  float day = float(v_win.x) / 255.0;
  vec2 dir = (vec2(v_win.yz) - 128.0) / 127.0;
  vec3 light = u_sunColor.rgb * (max(dot(n, u_sunDir.xyz), 0.0) * sun) + roomFill(day, dir, ao);
  int mode = int(v_fac.w + 0.5);
  vec3 glow = col * roomLamp(mode, rs) * (roomOn(mode, v_fac.x, v_fac.z, seed) * 0.95 * ao);
  return vec4(applyFog(toDisplay(col * u_warmTint.rgb * light + glow * (u_time.z / u_warmTint.a)), v_world), 1.0);
}

// What a window shows from inside, in light units: sky above, the street and the houses opposite below.
vec3 viewOut(float wy) {
  vec3 sky = vec3(0.7, 0.8, 0.95) * (u_skyFill.rgb * 1.5 + u_ambient.rgb * 0.9 + u_sunColor.rgb * 0.3);
  vec3 street = vec3(0.6, 0.58, 0.52) * (u_ambient.rgb + u_skyFill.rgb * 0.5 + u_sunColor.rgb * 0.45);
  return mix(street, sky, smoothstep(0.2, 0.65, wy));
}

// Inner face of an outer wall (KIND.wallInside): room paint with the wall's own windows and doors, found from the same
// façade data as the outside (recipeCell, or the simple window grid), so every opening sits exactly behind its
// outside. Each opening reads as a hole in a thick wall: plaster reveals (the soffit darker), a frame set back in it,
// a window board under it. The glass shows daylight, at night the dark pane mirrors the room when that window is lit.
vec4 wallInsideShade(uint seed, vec3 n) {
  uint pk = uint(v_surf.w + 0.5);
  uint rs = pk & 255u;
  float litB = float((pk >> 8u) & 255u);
  float lit = litB > 254.5 ? 2.0 : litB / 254.0;
  float own = float((pk >> 16u) & 255u) / 255.0;
  int finish = int(v_mat.x & 3u), type = int((v_mat.x >> 2u) & 3u), mode = int((v_mat.x >> 4u) & 3u);
  float day = float(v_mat.y) / 255.0;
  vec2 dir = (vec2(float(v_mat.w), float(v_win.w)) - 128.0) / 127.0;
  float u = v_surf.x, len = v_surf.y, yRel = v_surf.z;
  float fwU = fwidth(u), fwY = fwidth(yRel);
  float fh = v_bld.x, gfH = v_fac.w;
  bool recipe = (v_bits.x & ${z.recipe}u) != 0u;
  // Storey of the point and the room pattern coordinates (height above that storey's floor).
  bool gfl = yRel < gfH;
  float sfl = gfl ? 0.0 : 1.0 + floor((yRel - gfH) / fh);
  float base = gfl ? 0.0 : gfH + (sfl - 1.0) * fh;
  float clear = (gfl ? gfH : fh) - ${X(Dl.slab)};
  float ao;
  vec3 col = interiorColor(rs, finish, type, vec2(u, yRel - base), clear, ao);

  // Opening masks in cell units: fu, fv position in the cell, x0–x1 × y0–y1 the window.
  float glass = 0.0, frame = 0.0, reveal = 0.0, soffit = 0.0, board = 0.0, bar = 0.0, curtain = 0.0, blind = 0.0;
  float wy = 0.5, on = 0.0, fine = 1.0, side = 0.0;
  vec3 frameC = vec3(0.86, 0.85, 0.82);
  if (recipe) frameC = mix(u_palette[v_col.x].rgb, vec3(0.9, 0.89, 0.86), 0.55);
  float colW = 1.0, flH = 1.0, fu = 0.0, fv = 0.0, fwu = 1.0, fwv = 1.0, x0 = 0.0, x1 = 0.0, y0 = 0.0, y1 = 0.0, vis = 1.0, inFl = 0.0;
  bool win = false;
  ivec2 cell = ivec2(0);
  float share = 0.0, hLit = 1.0, wallLen = len;
  if (recipe) {
    RCell k = recipeCell(u, len, yRel, fwU, fwY);
    win = k.windows;
    colW = k.colW; flH = k.flH; fu = k.fu; fv = k.fv; fwu = k.fwu; fwv = k.fwv; vis = k.vis; inFl = k.inFloors;
    x0 = 0.5 - 0.5 * k.ww; x1 = 0.5 + 0.5 * k.ww; y0 = k.y0; y1 = k.y1;
    cell = ivec2(int(k.column), int(k.fl));
    int gfKind = int((v_bits.y >> 2u) & 3u);
    share = litShare(seed, k.groundFloor && gfKind != 0 ? 0.5 : 1.0);
    hLit = hash2(cell, seed + 77u + uint(len * 31.0));
  } else {
    int style = int(v_mat.z);
    float bay = v_bld.w, floors = v_bld.y;
    if (style != 0 && len > bay * 0.7) {
      float nn = max(1.0, floor(len / bay + 0.5));
      colW = len / nn; flH = fh;
      float cu = u / colW, cv = yRel / fh;
      fu = fract(cu); fv = fract(cv); fwu = fwU / colW; fwv = fwY / fh;
      float ww, wh, sl;
      if (style == 2) { ww = 0.8; wh = 0.48; sl = 0.3; }
      else if (style == 3) { ww = 0.36; wh = 0.3; sl = 0.42; }
      else { ww = clamp(1.5 / colW, 0.38, 0.66); wh = clamp(1.65 / fh, 0.3, 0.62); sl = 0.9 / fh; }
      x0 = 0.5 - 0.5 * ww; x1 = 0.5 + 0.5 * ww; y0 = sl; y1 = sl + wh;
      win = true;
      inFl = boxCover(yRel, fwY, 0.0, floors * fh);
      vis = detailVisible(colW * 0.6);
      cell = ivec2(floor(cu), floor(cv));
      share = litShare(seed, style == 1 ? 1.0 : 0.55);
      hLit = hash2(cell, seed + 77u + uint(len * 31.0));
    }
  }
  float spill = 0.0;
  if (win && finish != 5) {
    // Reveal: the hole is a little wider than the frame, splayed inwards; the window board closes it at the bottom.
    float rv = 0.12 / colW, rvV = 0.12 / flH, fr = 0.06 / colW, frV = 0.06 / flH;
    float hole = cellBox(fu, fwu, x0 - rv, x1 + rv) * cellBox(fv, fwv, y0, y1 + rvV) * inFl;
    frame = cellBox(fu, fwu, x0, x1) * cellBox(fv, fwv, y0, y1) * inFl;
    glass = cellBox(fu, fwu, x0 + fr, x1 - fr) * cellBox(fv, fwv, y0 + frV, y1 - frV) * inFl;
    reveal = max(hole - frame, 0.0);
    soffit = reveal * cellBox(fv, fwv, y1, y1 + rvV);
    side = fu < 0.5 ? 1.0 : -1.0;
    board = cellBox(fu, fwu, x0 - rv - 0.04 / colW, x1 + rv + 0.04 / colW) * cellBox(fv, fwv, y0 - 0.05 / flH, y0) * inFl;
    float wx = (fu - x0) / max(x1 - x0, 1e-4);
    wy = (fv - y0) / max(y1 - y0, 1e-4);
    float fwx = fwu / max(x1 - x0, 1e-4), fwy = fwv / max(y1 - y0, 1e-4);
    float winWm = (x1 - x0) * colW, winHm = (y1 - y0) * flH;
    fine = detailVisible(winWm * 0.25);
    if (recipe) {
      int mullions = int(v_bits.y & 3u);
      float bw = 0.06 / winWm;
      if (mullions == 1 || (mullions == 2 && winWm < 1.3)) bar = cellBox(wx, fwx, 0.5 - bw, 0.5 + bw);
      else if (mullions == 2) bar = max(cellBox(wx, fwx, 0.333 - bw, 0.333 + bw), cellBox(wx, fwx, 0.667 - bw, 0.667 + bw));
      // Curtains and blinds: the same windows as outside (same hashes), seen from the room side.
      uint wallSeed = seed + uint(len * 31.0);
      float r = hash2(cell, wallSeed);
      float hc = hash2(cell, wallSeed + 131u);
      float curtainShare = float(v_bits.z & 15u) / 15.0, blindShare = float(v_bits.z >> 4u) / 15.0;
      if (hc < curtainShare) curtain = max(cellBox(wx, fwx, -0.08, 0.2 + 0.1 * r), cellBox(wx, fwx, 0.8 - 0.1 * r, 1.08)) * cellBox(wy, fwy, -0.04, 1.06);
      else if (hc < curtainShare + blindShare) {
        float depth = 0.25 + 0.65 * fract(hc * 37.0);
        blind = cellBox(wy, fwy, 1.0 - depth, 1.0) * cellBox(wx, fwx, 0.0, 1.0);
      }
    } else {
      bar = cellBox(wx, fwx, 0.5 - 0.06 / winWm, 0.5 + 0.06 / winWm);
    }
    if (u_time.z > 0.0) on = litWindow(share, hLit, vis);
    // Daylight spills onto the wall around the opening: distance to the window in metres, soft falloff.
    float ddx = max(max((x0 - fu) * colW, (fu - x1) * colW), 0.0);
    float ddy = max(max((y0 - fv) * flH, (fv - y1) * flH), 0.0);
    spill = exp(-length(vec2(ddx, ddy)) / 0.7) * inFl;
  }

  // Entrance seen from the hall: frame and leaf; the glazed part shows daylight like a window.
  float leaf = 0.0, leafGlass = 0.0, dframe = 0.0;
  vec3 leafC = vec3(0.0);
  int doorKind = int((v_bits.y >> 4u) & 7u);
  if (recipe && doorKind > 0) {
    // Seen from inside, an arch is a rectangle of its full height.
    float doorH = doorKind == 4 ? v_fac.y * ${X(R.archHeightPerWidth)} : doorKind == 2 ? ${X(R.garageDoorHeight)} : doorKind == 3 ? ${X(R.portalHeight)} : ${X(R.doorHeight)};
    float wyw = v_pat.y, hw = 0.5 * v_fac.y, du = u - v_fac.x;
    dframe = boxCover(du, fwU, -hw - 0.1, hw + 0.1) * boxCover(wyw, fwY, v_fac.z, v_fac.z + doorH + 0.1);
    leaf = boxCover(du, fwU, -hw, hw) * boxCover(wyw, fwY, v_fac.z, v_fac.z + doorH);
    leafC = u_palette[v_col.z].rgb * 0.9;
    if (doorKind == 2) leafC *= 0.9 + 0.12 * pulseFaded(wyw / 0.16, fwY / 0.16, 0.0, 0.5);
    else if (doorKind != 4) {
      float gl0 = doorKind == 3 ? 0.06 : 0.45;
      float dv = (wyw - v_fac.z) / doorH;
      leafGlass = boxCover(dv, fwY / doorH, gl0, 0.94) * boxCover(abs(du), fwU, 0.0, hw - 0.1) * (1.0 - boxCover(du, fwU, -0.04, 0.04)) * leaf;
    }
  }

  // Surfaces of the wall: paint, then reveal, board, frame, bars, cloth, the door.
  float detail = detailVisible(0.08);
  vec3 plaster = mix(col, vec3(0.86, 0.85, 0.82), 0.6);
  col = mix(col, plaster * (soffit > 0.01 ? 0.62 : (side > 0.0 ? 0.95 : 0.74)), reveal * detail + reveal * (1.0 - detail) * 0.6);
  col = mix(col, vec3(0.8, 0.77, 0.72), board * 0.95);
  col = mix(col, frameC, frame);
  col = mix(col, frameC, dframe * 0.9);
  col = mix(col, leafC, leaf);
  vec3 cloth = recipe ? mix(u_palette[v_col.x].rgb, vec3(0.78, 0.70, 0.58), 0.55) : vec3(0.7, 0.65, 0.56);

  if (v_damage > 0) col = mix(col, damageShade(col, seed), 0.7);
  float sun = sunVisibility(v_world, n, 1.6);
  vec3 light = u_sunColor.rgb * (max(dot(n, u_sunDir.xyz), 0.0) * sun) + roomFill(day, dir, ao) * (1.0 + 0.45 * spill);
  float roomLit = roomOn(mode, lit, own, seed);
  vec3 lamp = roomLamp(mode, rs);
  vec3 surf = col * u_warmTint.rgb * light + col * lamp * (roomLit * 0.95 * ao) * (u_time.z / u_warmTint.a);

  // The pane: daylight from outside; at night dark, with the lit room mirrored in it when this window is lit.
  float pane = glass * (1.0 - bar * 0.9);
  // Once the windows light up outside it is dark: the pane turns into a mirror of the room.
  float dusk = clamp(u_time.z, 0.0, 1.0);
  vec3 outside = viewOut(wy) * u_warmTint.rgb * (1.0 - 0.88 * dusk);
  vec3 night = vec3(0.012, 0.016, 0.026) + plaster * lamp * on * 0.22 * (u_time.z / u_warmTint.a);
  vec3 paneC = outside + night;
  vec3 res = mix(surf, paneC, pane);
  res = mix(res, frameC * u_warmTint.rgb * light + frameC * lamp * roomLit * 0.8 * (u_time.z / u_warmTint.a), glass * bar * 0.9);
  // Cloth hangs in front of the pane: lit by the room, and by day the light comes through it.
  vec3 clothC = cloth * 0.85 * (u_warmTint.rgb * light + lamp * roomLit * 0.9 * (u_time.z / u_warmTint.a)) + cloth * outside * 0.35;
  res = mix(res, clothC, max(curtain * 0.9, blind) * fine * (glass + reveal + frame > 0.0 ? 1.0 : 0.0));
  vec3 dglassC = viewOut(0.7) * u_warmTint.rgb * 0.8 * (1.0 - 0.88 * dusk) + vec3(0.012, 0.016, 0.026);
  res = mix(res, dglassC, leafGlass);
  return vec4(applyFog(toDisplay(res), v_world), 1.0);
}

`,ed=`#include <header>
uniform mat4 u_lightRender;
in vec3 a_pos;
in vec4 a_fac;
void main() {
  vec3 pos = a_pos;
  if (a_fac.y < 0.0) {
    float g = clamp((u_time.x - a_fac.x) / -a_fac.y, 0.0, 1.0);
    pos.y = mix(a_fac.z, a_pos.y, g * g * (3.0 - 2.0 * g));
  }
  gl_Position = u_lightRender * vec4(pos, 1.0);
}`,td=`#version 300 es
precision highp float;
void main() {}`,nd=`#include <header>
uniform mat4 u_lightRender;
uniform mat4 u_frame;
in vec3 a_pos;
void main() {
  gl_Position = u_lightRender * (u_frame * vec4(a_pos, 1.0));
}`,rd=ed.replace(`in vec3 a_pos;
`,`uniform mat4 u_frame;
in vec3 a_pos;
`).replace(`gl_Position = u_lightRender * vec4(pos, 1.0);`,`gl_Position = u_lightRender * (u_frame * vec4(pos, 1.0));`);function id(e){return`${e.framed?`-framed`:``}${e.finishes?`-finishes`:``}`}function ad(e,t={}){let n=t.damage??!1,r={framed:t.framed===!0,finishes:t.finishes===!0},i=n?{vs:r.framed?rd:ed,fs:td}:r.framed?{vs:nd,fs:td}:`depth`;return{name:(n?`structures-damaged`:`structures`)+id(r),attribs:$c,passes:{shadow:i,color:{vs:Gu(r),fs:Ku(e,n,r)}}}}function od(e){return{u_rows:{ivec4:[e.glass,e.glassLit,e.plinth,0]}}}var sd={shareByHour:[[0,.12],[2,.04],[4.5,.04],[6,.2],[7.5,.28],[16,.28],[18,.42],[20,.58],[21.5,.62],[22.5,.46],[23.5,.22],[24,.12]],strength:1},cd=-4,ld=8;function ud(e,t=sd.shareByHour){if(t.length===0)return 0;for(let n=0;n+1<t.length;n++){let[r,i]=t[n],[a,s]=t[n+1];if(e>=r&&e<=a)return a>r?o(i,s,(e-r)/(a-r)):s}return e<t[0][0]?t[0][1]:t[t.length-1][1]}function dd(e={}){return{name:`window-light`,params:{...sd,...e},fields:[{member:`u_time`,lanes:`zw`,doc:`z window glow 0–1, w share of lit windows`}],compute:(e,t)=>e.mode===`day`?{glow:(1-s(cd,ld,e.sunElevationDeg))*t.strength,share:ud(e.hour,t.shareByHour)}:{glow:0,share:0},lanes:e=>[e.glow,e.share]}}var Z={meta:{source:`data_v15.json (v15, read-only)`,seed:20261125,cols:140,rows:45,step:7.19,worldW:1e3,worldD:316.5,lon0:107,lon1:107.076,lat0:22.70193,lat1:22.72407,h0:150,unitM:77.52,exag:2,lakeMeanElevM:150,lakeMeanY:0,waterY:-.3,bedY:-1.5,heights:{minY:-1.5,maxY:72.19,count:6300},counts:{waypoints:64,places:3,facilities:8,houses:55,trees:394,fields:897,fieldBuckets:5,lakeCells:720,trails:4,bridges:5,boats:7,pillars:14,flowers:575},notes:[`Riverbed carved 1.5 m below lake mean level; water plane 0.3 m below it (lake cells are at h=0, level with lowest land).`,`House footprints generated deterministically from village centres + counts (v15 has no footprints).`,`Flower colour codes 2/3 mapped pink/white (guess); other codes yellow.`,`Bridge deck heights computed at runtime from terrain; 4 of 7 boats placed along the boat trail.`,`Karst pillars generated around the 川字石林 / 花千谷 waypoints (v15 has no pillar geometry).`]},terrain:JSON.parse(`{"heights":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.516,1.909,3.044,3.096,2.064,0.645,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.103,1.522,1.445,0.052,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.316,4.799,8.643,11.197,11.326,9.056,5.263,1.625,0,0,0,0,1.187,1.703,0.31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.445,3.199,2.167,0.103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.129,5.289,11.61,11.352,4.825,0.052,0,0.335,4.076,6.269,3.535,0.103,0,0,0,0,0,0,0,0,0.851,5.341,11.92,18.24,22.188,22.42,18.86,12.719,6.037,1.213,0,0,3.509,10.449,12.178,6.656,0.568,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.245,9.623,14.422,11.687,-1.5,0,0,0,0,0.206,0.722,0.851,0.387,0.026,0,0,0,0,0,1.625,11.765,21.594,21.233,11.017,1.264,0,4.515,14.525,19.118,13.313,3.38,0,0,0,0,0,0,0,0,2.967,10.217,19.427,27.864,32.972,33.282,28.664,20.511,11.223,3.638,0.077,0.439,8.772,19.866,22.472,13.983,2.967,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.908,17.415,24.252,20.408,-1.5,-1.5,0,0,0.619,3.638,7.766,8.669,5.315,1.445,0.052,0,0,0,0,1.6,11.636,21.414,21.053,10.888,1.238,0.052,7.379,20.15,25.774,18.627,5.831,0,0,0,0,0,0,0,0.284,4.876,13.932,24.897,34.701,40.583,40.918,35.63,26.161,15.17,5.753,0.516,0.413,8.669,19.685,22.291,13.854,2.915,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.831,17.26,24.071,20.253,-1.5,-1.5,0,0,3.689,13.803,25.181,27.606,18.627,6.889,0.877,0,0,0,0,0.103,5.057,11.249,10.991,4.618,0.026,0,4.721,14.99,19.634,13.725,3.56,0,0,0,0,0,0,0,0.413,5.495,15.119,26.574,36.765,42.853,43.215,37.719,27.89,16.409,6.424,0.722,0,3.328,10.088,11.816,6.398,0.49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,9.34,14.035,11.378,-1.5,-1.5,0,0,7.972,25.464,43.86,47.678,33.385,13.751,2.374,0.026,0,0,0,0,0.077,1.342,1.29,0.026,0,0,0.439,4.489,6.811,3.922,0.181,0,0,0,0,0,0,0,0.206,4.515,13.261,23.916,33.462,39.216,39.551,34.365,25.155,14.448,5.341,0.413,0,0,1.032,1.522,0.232,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,9.03,28.148,48.065,52.193,36.765,15.351,2.786,0.052,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.451,9.107,17.776,25.774,30.65,30.934,26.548,18.808,10.062,3.044,0.026,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,5.624,19.195,33.927,37.023,25.516,10.01,1.522,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.49,4.231,10.114,15.893,19.53,19.737,16.46,10.836,4.85,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,1.574,7.198,14.087,15.609,10.062,3.251,0.258,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.697,3.457,6.734,8.927,9.056,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0.077,0.929,2.477,2.864,1.548,0.258,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.129,1.006,1.806,1.858,1.109,0.181,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0.026,0.052,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0.826,5.702,9.649,11.662,11.378,8.849,4.567,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,3.406,11.378,18.55,23.736,26.29,25.929,22.704,16.976,9.469,1.625,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,-1.5,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,-1.5,-1.5,0,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,2.786,12.874,23.039,31.656,37.771,40.789,40.377,36.584,29.799,20.691,10.346,0.774,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,-1.5,-1.5,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9.727,22.007,33.669,43.421,50.258,53.612,53.148,48.916,41.305,31.011,19.04,6.889,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.019,15.686,29.36,42.131,52.657,60.036,63.622,63.132,58.591,50.387,39.216,26.109,12.461,0.645,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.805,19.634,34.133,47.523,58.54,66.254,69.995,69.479,64.732,56.166,44.479,30.702,16.151,2.941,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6.811,21.001,35.784,49.381,60.578,68.395,72.188,71.646,66.847,58.153,46.285,32.276,17.466,3.818,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5.831,19.659,34.159,47.549,58.566,66.28,70.021,69.505,64.757,56.192,44.505,30.702,16.176,2.941,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.044,15.712,29.412,42.157,52.709,60.088,63.674,63.184,58.643,50.439,39.267,26.135,12.487,0.645,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9.752,22.059,33.746,43.473,50.335,53.689,53.225,48.994,41.383,31.063,19.092,6.94,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.155,0.284,0,0,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.238,2.941,2.554,0.619,0,0,0,0,0,2.812,12.926,23.091,31.734,37.874,40.867,40.454,36.662,29.85,20.743,10.423,0.8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.258,0.877,0.258,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.851,1.961,1.187,0.851,2.038,1.264,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.439,3.844,5.805,6.089,7.637,8.282,4.154,0.155,0,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.503,8.953,13.648,12.668,6.837,1.058,0,0,0,0,0,3.457,11.455,18.627,23.813,26.367,26.032,22.781,17.054,9.546,1.677,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.548,7.224,10.372,7.327,1.6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.568,1.961,0.568,0,0,0,0,0,0,0,0,0,0,2.322,8.643,12.41,12.203,12.487,12.951,10.423,3.844,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4.825,13.7,18.782,22.575,23.22,20.588,12.848,2.941,0,0,0,0,-1.5,-1.5,-1.5,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.439,7.405,18.215,25.361,23.891,14.835,4.438,0,0,0,0,0,0,0.877,5.779,9.727,11.739,11.455,8.927,4.618,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.077,6.45,17.337,22.652,17.492,6.605,0.129,0.387,0,0,0,0,0,0,0,0,0.026,0.284,0.026,0,0,0,0,0,0,0,0,0,0,0,0.568,8.204,13.519,8.204,0.568,0,0,0,0,0,0,0,0,0.284,7.353,18.292,24.458,27.761,28.664,26.367,21.336,10.346,1.213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.387,8.437,20.253,28.947,36.378,35.475,27.322,17.183,4.825,0,0,0,-1.5,-1.5,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.98,9.727,22.265,30.341,28.689,18.395,6.192,0.077,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.477,5.47,4.644,1.135,0,0,0,0,0.31,8.462,20.975,26.961,21.156,8.824,7.043,9.804,3.173,0,0,0,0,0,0,1.135,5.495,7.895,5.624,1.264,0,0,0,0,0,0,0,0,0,0,1.961,13.519,20.64,13.519,1.961,0,0,0,0,0,0,0,0,0.671,9.262,21.646,28.818,33.308,34.391,31.218,25.103,12.745,1.961,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.155,6.811,18.808,31.656,40.789,38.622,27.012,13.209,2.915,0,0,0,-1.5,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.413,7.353,18.163,25.284,23.839,14.783,4.412,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.245,10.681,17.234,15.506,7.198,0.464,0,0,0,0,5.083,14.757,19.53,14.886,6.45,11.894,16.305,6.631,0,0,0,0,0,0.206,6.424,15.893,20.408,16.151,6.708,0.284,0,0,0,0,0,0,0,0,0,0.568,8.204,13.519,8.204,0.568,0,0,0,0,0,0,0,0,0.103,6.011,15.867,21.362,23.787,24.536,22.884,18.627,8.643,0.774,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.935,11.584,25.335,32.843,30.47,19.788,5.96,0.155,0,0,0,0,-1.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2.477,8.875,13.545,12.59,6.76,1.032,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4.747,16.46,24.923,22.73,11.791,1.703,0,0,0,0,0.542,4.489,6.863,4.541,0.645,5.444,8.23,2.399,0,0,0,0,0,1.058,10.32,22.472,28.07,22.781,10.707,1.213,0,0,0,0,0.49,3.277,1.574,0,0,0,0.568,5.031,3.122,0,0,0,0,0,0,0,0,0,0,1.135,5.831,8.824,7.921,7.998,9.236,7.198,2.141,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.818,14.68,21.904,20.304,10.939,1.574,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.213,2.89,2.503,0.593,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.664,14.061,21.775,19.763,9.881,1.135,0,0,0,0,0,0,0.052,0,0,0,0.052,0,0,0,0,0,0,0.645,8.695,19.788,24.974,20.072,9.056,0.774,0,0,0,0,5.908,14.267,9.649,0.593,0,0,2.27,12.9,11.584,1.109,0,0,0,0,0,0,0,0,0,0,0.077,0.516,0.181,0.077,0.542,0.206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.697,6.321,11.481,10.604,4.592,0.103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.619,5.882,10.552,9.288,3.535,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3.277,10.062,13.493,10.243,3.457,0,0,0,0,0,6.063,14.499,9.83,0.619,0,0,1.238,9.598,8.514,0.464,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.387,1.806,1.522,0.103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.155,1.135,0.826,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.393,2.554,1.445,0,0,0,0,0,0,0.593,3.56,1.78,0,0,0,0,0.335,0.206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}`),waterY:-.3,lakeCells:[[0,19],[0,20],[0,21],[0,22],[1,18],[1,19],[1,20],[2,17],[2,18],[2,19],[3,16],[3,17],[3,18],[4,16],[4,17],[5,15],[5,16],[5,17],[6,14],[6,15],[6,16],[6,17],[7,13],[7,14],[7,15],[7,16],[7,17],[8,13],[8,14],[8,15],[8,16],[8,17],[9,12],[9,13],[9,14],[9,15],[9,16],[9,17],[10,13],[10,14],[10,15],[10,16],[10,17],[10,18],[11,13],[11,14],[11,15],[11,16],[11,17],[11,18],[11,19],[11,20],[11,21],[12,19],[12,20],[12,21],[12,22],[12,23],[12,24],[13,21],[13,22],[13,23],[13,24],[13,25],[14,23],[14,24],[14,25],[15,24],[15,25],[15,26],[16,24],[16,25],[16,26],[17,24],[17,25],[17,26],[18,24],[18,25],[18,26],[19,24],[19,25],[19,26],[20,24],[20,25],[20,26],[21,24],[21,25],[21,26],[22,23],[22,24],[22,25],[23,22],[23,23],[23,24],[23,25],[24,17],[24,18],[24,19],[24,20],[24,21],[24,22],[24,23],[24,24],[24,25],[25,16],[25,17],[25,22],[25,23],[25,24],[25,25],[25,26],[26,16],[26,22],[26,23],[26,24],[26,25],[26,26],[27,23],[27,24],[27,25],[27,26],[28,24],[28,25],[28,26],[29,25],[29,26],[30,25],[30,26],[31,25],[31,26],[32,25],[32,26],[33,25],[33,26],[33,27],[34,25],[34,26],[34,27],[35,24],[35,25],[35,26],[35,27],[36,23],[36,24],[36,25],[36,26],[36,27],[37,21],[37,22],[37,26],[37,27],[38,20],[38,21],[38,22],[38,25],[38,26],[38,27],[39,12],[39,19],[39,20],[39,21],[39,22],[39,23],[39,24],[39,25],[39,26],[39,27],[40,12],[40,13],[40,14],[40,15],[40,16],[40,17],[40,18],[40,19],[40,20],[40,21],[40,22],[40,23],[40,24],[40,25],[40,26],[40,27],[41,13],[41,14],[41,15],[41,16],[41,17],[41,18],[41,19],[41,20],[41,21],[41,22],[41,23],[41,24],[41,25],[41,26],[42,14],[42,15],[42,16],[42,17],[42,18],[42,19],[42,20],[42,21],[42,22],[42,23],[42,24],[42,25],[43,16],[43,17],[43,18],[43,19],[43,20],[43,21],[43,22],[43,23],[43,24],[44,19],[44,20],[44,21],[44,22],[44,23],[45,21],[45,22],[45,23],[46,22],[46,23],[46,24],[47,22],[47,23],[47,24],[48,23],[48,24],[48,25],[49,23],[49,24],[49,25],[50,23],[50,24],[50,25],[51,23],[51,24],[52,23],[52,24],[53,23],[53,24],[54,23],[54,24],[55,23],[55,24],[56,23],[56,24],[57,23],[57,24],[58,23],[58,24],[59,23],[59,24],[60,23],[60,24],[61,22],[61,23],[62,22],[62,23],[63,21],[63,22],[63,23],[64,20],[64,21],[64,22],[65,20],[65,21],[65,22],[66,19],[66,20],[66,21],[66,22],[67,19],[67,20],[67,21],[67,22],[67,23],[68,18],[68,19],[68,23],[68,24],[69,17],[69,18],[69,24],[70,19],[70,20],[70,21],[70,22],[70,23],[70,24],[70,25],[71,19],[71,20],[71,24],[71,25],[71,26],[72,18],[72,19],[72,25],[72,26],[73,18],[73,19],[73,25],[73,26],[73,27],[74,18],[74,19],[74,25],[74,26],[74,27],[75,17],[75,18],[75,19],[75,25],[75,26],[75,27],[76,17],[76,18],[76,19],[76,25],[76,26],[76,27],[77,17],[77,18],[77,19],[77,20],[77,21],[77,25],[77,26],[78,17],[78,18],[78,19],[78,20],[78,21],[78,22],[78,23],[78,24],[78,25],[78,26],[79,17],[79,18],[79,19],[79,20],[79,21],[79,22],[79,23],[79,24],[79,25],[80,16],[80,17],[80,18],[80,19],[80,20],[80,21],[80,22],[80,23],[80,24],[81,16],[81,17],[81,18],[81,19],[81,20],[81,21],[81,22],[82,16],[82,17],[82,18],[82,19],[83,16],[83,17],[83,18],[83,19],[84,16],[84,17],[84,18],[84,19],[85,17],[85,18],[85,19],[86,18],[86,19],[86,20],[87,18],[87,19],[87,20],[88,18],[88,19],[88,20],[89,19],[89,20],[89,21],[90,20],[90,21],[90,22],[91,20],[91,21],[91,22],[92,21],[92,22],[92,34],[92,35],[93,22],[93,23],[93,30],[93,31],[93,32],[93,33],[93,34],[93,35],[93,36],[94,22],[94,23],[94,27],[94,28],[94,29],[94,30],[94,32],[94,33],[95,22],[95,23],[95,24],[95,27],[95,33],[96,22],[96,23],[96,24],[96,25],[96,26],[96,27],[96,33],[96,34],[97,22],[97,23],[97,24],[97,33],[98,18],[98,22],[98,23],[99,11],[99,14],[99,15],[99,16],[99,17],[99,18],[99,21],[99,22],[99,23],[100,11],[100,12],[100,13],[100,14],[100,15],[100,16],[100,17],[100,18],[100,19],[100,20],[100,21],[100,22],[100,23],[101,11],[101,12],[101,15],[101,16],[101,20],[101,21],[101,22],[102,20],[102,21],[102,22],[103,20],[103,21],[103,22],[104,20],[104,21],[105,20],[105,21],[106,20],[106,21],[107,20],[107,21],[108,5],[108,20],[108,21],[109,4],[109,5],[109,6],[109,18],[109,19],[109,20],[109,21],[109,22],[110,4],[110,5],[110,6],[110,16],[110,17],[110,18],[110,21],[110,22],[110,23],[111,4],[111,5],[111,6],[111,7],[111,21],[111,22],[111,23],[112,6],[112,7],[112,8],[112,9],[112,21],[112,22],[112,23],[113,7],[113,8],[113,9],[113,10],[113,11],[113,12],[113,21],[113,22],[113,23],[114,8],[114,9],[114,10],[114,11],[114,12],[114,21],[114,22],[115,8],[115,9],[115,10],[115,11],[115,12],[115,21],[115,22],[116,8],[116,9],[116,10],[116,11],[116,12],[116,13],[116,21],[116,22],[117,8],[117,11],[117,12],[117,13],[117,14],[117,20],[117,21],[117,22],[118,11],[118,12],[118,13],[118,14],[118,19],[118,20],[118,21],[119,10],[119,11],[119,12],[119,13],[119,14],[119,18],[119,19],[119,20],[120,12],[120,13],[120,14],[120,15],[120,16],[120,17],[120,18],[120,19],[121,12],[121,13],[121,14],[121,15],[121,16],[121,17],[121,18],[121,19],[122,11],[122,12],[122,13],[122,14],[122,15],[122,16],[122,17],[122,18],[122,19],[123,10],[123,11],[123,12],[123,13],[123,14],[123,15],[123,16],[123,17],[123,18],[124,9],[124,10],[124,11],[124,12],[124,13],[124,14],[124,15],[124,16],[124,17],[124,18],[125,8],[125,9],[125,10],[125,11],[125,12],[125,13],[125,14],[125,15],[125,16],[125,17],[126,8],[126,9],[126,10],[126,11],[126,12],[126,13],[126,14],[126,15],[126,16],[127,10],[127,11],[127,12],[127,13],[127,14],[127,15],[127,16],[128,11],[128,12],[128,13],[128,14],[128,15],[129,11],[129,12],[129,13],[129,14],[129,15],[130,11],[130,12],[130,13],[130,14],[130,15],[131,7],[131,11],[131,12],[131,13],[131,14],[132,7],[132,8],[132,9],[132,10],[132,11],[132,12],[132,13],[132,14],[133,8],[133,9],[133,10],[133,11],[133,12],[133,13],[133,14],[134,8],[134,9],[134,10],[134,11],[134,12],[134,13],[134,14],[135,8],[135,9],[135,10],[135,11],[135,12],[135,13],[135,14],[136,4],[136,5],[136,6],[136,7],[136,8],[136,9],[136,10],[136,11],[136,12],[136,13],[136,14],[137,5],[137,6],[137,7],[137,8],[137,9],[137,10],[137,11],[137,12],[137,13],[137,14],[138,10],[138,11],[138,12],[138,13],[138,14]],waypoints:[{id:0,label:`龙碧滩`,text:`峒那屿湾核心自然景观：叠瀑群从河谷倾泻而下，滩面呈“心”形铺开，流水如条条白龙穿石入河，随水量变化时猛时柔。位置按官方导视图。`,major:!0,x:-410.79,z:-64.62},{id:1,label:`瀑上圩场`,text:`瀑布边的乡下集市，“圩场”是南方对乡村集市的叫法；可以在这里歇脚。位置按官方导视图。`,major:!0,x:-447.24,z:-81.63},{id:2,label:`燕子洞`,text:`河畔岩洞，燕子栖息于此；八景之一。位置按官方导视图。`,major:!0,x:-366.71,z:-71.62},{id:3,label:`霞客栈道`,text:`高低错落的临水栈道，寓意徐霞客当年从这里走过；站在栈道上是观赏龙碧滩叠瀑的最佳位置。位置按官方导视图。`,major:!0,x:-390.66,z:-29.73},{id:4,label:`水林迷境`,text:`水上石林：怪石围潭、竹林掩映，有路南石林之神，又有九寨海子之色。位置按官方导视图。`,major:!0,x:-413.95,z:-11.15},{id:5,label:`官田农场`,text:`土司田制划分的田地：挑水田、养马田、抬轿田，每块田的名字都对应着耕田人在土司家中担任的差事；花海与松鼠长廊也在这里。位置按官方导视图。`,major:!0,x:-337.24,z:-18.16},{id:6,label:`水上幻境`,text:`乘画舫行在雾气弥漫的河面上，山影水色如梦似幻，仿佛穿越数百年，与徐霞客在此同游。位置按官方导视图。`,major:!0,x:-313.95,z:-29.02},{id:7,label:`婆皇岛`,text:`河湾中的花海岛屿：相传南明永历帝携王皇后曾在此驻留一宿，“婆皇”是壮语“皇帝的老婆”的汉译；这里曾是安平土司的后花园。位置按官方导视图。`,major:!0,x:-248.03,z:-14.3},{id:8,label:`天空之镜`,text:`西侧高处的蓝山镜面景观，导视图上画在龙碧滩西北的山顶。位置按官方导视图。`,major:!0,x:-387.63,z:-113.36},{id:9,label:`伦岛`,text:`河心圆岛，树木成林；岛西南有仙家渡口。位置按官方导视图。`,major:!0,x:46.58,z:15.15},{id:10,label:`那兰岛`,text:`黑水河东段的大岛，游船从岛边经过。位置按官方导视图。`,major:!0,x:325.53,z:-53.04},{id:11,label:`七星屿`,text:`东段河面上的小岛群。位置按官方导视图。`,major:!0,x:377.76,z:-82.91},{id:12,label:`安平大桥`,text:`跨黑水河的大桥，连接河北安平村与南岸公路。位置按官方导视图。`,major:!0,x:-65.92,z:10.44},{id:13,label:`文阁桥`,text:`东段北汊上的桥，导视图上标注为文阁桥。位置按官方导视图。`,major:!0,x:298.42,z:-122.65},{id:14,label:`丹霞湾`,text:`安平大桥东侧的河湾，竹林掩映（名称未见于导视图，待核对）。位置按官方导视图。`,major:!0,x:19.34,z:41.46},{id:15,label:`灵湖画境`,text:`东段北岸的湖湾景观（名称未见于导视图，待核对）。位置按官方导视图。`,major:!0,x:339.47,z:-103.36},{id:16,label:`格强湾`,text:`那兰岛西侧蜿蜒河汊边的村庄区，导视图上标注为格强湾。位置按官方导视图。`,major:!0,x:210,z:-39.03},{id:17,label:`岜零码头`,text:`游船出发码头：8:00 起发船，每半小时一班或客满发船，乘船约 50 分钟到官田码头；建议最晚 16:00 前登船。位置按官方导视图。`,major:!0,x:263.55,z:1.14},{id:18,label:`官田码头`,text:`游船登岸码头：上岸后徒步陆路八景约 1.5 小时，到仙家渡口乘渡船返回。位置按官方导视图。`,major:!0,x:-308.55,z:-3.43},{id:19,label:`仙家渡口`,text:`徒步终点：乘渡船 3–5 分钟返回，不走回头路。位置按官方导视图。`,major:!0,x:-372.11,z:25.87},{id:20,label:`土司衙门`,text:`安平土州故地，留有明清时期的土司衙门遗址；大新素有“中国土司文化之乡”之称。位置按官方导视图。`,major:!0,x:-276.71,z:83.2},{id:21,label:`安平村`,text:`安平土州故地，大新土司文化的集中点；明崇祯十年（1637 年）徐霞客游历至安平州，在《徐霞客游记》中留下记载。`,major:!0,x:58.16,z:-72.33},{id:22,label:`入口牌坊`,text:`景区东侧大门牌坊，进门是岜零游客中心、停车场。位置按官方导视图。`,major:!0,x:275.13,z:105.64},{id:23,label:`出口`,text:`景区的出口，接景区公路；游船 + 徒步路线的西端，龙碧滩、婆皇岛都在这一带。位置按官方导视图。`,major:!0,x:-294.61,z:36.74},{id:24,label:`茶室`,text:`瀑上圩场旁的茶室，歇脚喝茶。位置按官方导视图。`,major:!1,x:-372.89,z:-80.91},{id:25,label:`非遗土司生产生活馆`,text:`展示土司时期生产生活器物的场馆（馆名按导视图识读，待核对）。位置按官方导视图。`,major:!1,x:-351.97,z:-71.62},{id:26,label:`土司家庙`,text:`安平土司家族的家庙，土司文化的遗迹。位置按官方导视图。`,major:!1,x:-351.97,z:-53.75},{id:27,label:`石林引路`,text:`水边的石林小径，怪石引路入水林迷境。位置按官方导视图。`,major:!1,x:-392.24,z:-11.15},{id:28,label:`川字石林`,text:`三条石峰并列如“川”字的石林。位置按官方导视图。`,major:!1,x:-370.79,z:-11.72},{id:29,label:`桃花渡码头`,text:`南岸带台阶的码头，百辣码头东侧。位置按官方导视图。`,major:!1,x:-341.05,z:24.45},{id:30,label:`十二生肖桥`,text:`西侧河汊上的小桥，导视图上标注为十二生肖桥。位置按官方导视图。`,major:!1,x:-297.63,z:-48.32},{id:31,label:`枫叶谷`,text:`种满枫树的山谷，秋日红叶满谷。位置按官方导视图。`,major:!1,x:-289.87,z:-29.73},{id:32,label:`松鼠长廊`,text:`官田农场边的松鼠长廊，遮阳歇脚。位置按官方导视图。`,major:!1,x:-268.95,z:-29.73},{id:33,label:`四面厅`,text:`婆皇岛上的四面厅，岛上游览的歇脚点。位置按官方导视图。`,major:!1,x:-254.74,z:-10.58},{id:34,label:`花海`,text:`婆皇岛上的花海，岛上最热闹的一片花田。位置按官方导视图。`,major:!1,x:-244.21,z:-35.17},{id:35,label:`婆皇吊桥`,text:`连接婆皇岛与南岸的悬索桥，双塔主缆。位置按官方导视图。`,major:!1,x:-247.24,z:26.73},{id:36,label:`科圩索桥`,text:`西端横跨黑水河的悬索桥，塔架拉索，连接河两岸。位置按官方导视图。`,major:!0,x:-486.05,z:-18.16},{id:37,label:`观景台`,text:`西侧高处的观景台，俯瞰龙碧滩与河湾。位置按官方导视图。`,major:!1,x:-370.39,z:-113.22},{id:38,label:`仙家渡口`,text:`出口旁的渡口，乘渡船过河。位置按官方导视图。`,major:!1,x:-310.13,z:27.45},{id:39,label:`仙家渡口`,text:`蓬莱岛东侧的渡口，乘渡船过河。位置按官方导视图。`,major:!1,x:-192.24,z:14.3},{id:40,label:`檀凡索桥`,text:`东段河汊上的索桥（名称未见于导视图，待核对）。位置按官方导视图。`,major:!1,x:320.13,z:-91.78},{id:41,label:`仙家渡口`,text:`伦岛西南的渡口，乘渡船过河。位置按官方导视图。`,major:!1,x:7.76,z:20.44},{id:42,label:`土司码头`,text:`导视图上标注的西侧码头，在婆皇岛南桥头附近。位置按官方导视图。`,major:!1,x:-240.66,z:32.59},{id:43,label:`安平游客中心`,text:`安平游客中心，问路、咨询在这里；旁边是停车场、卫生间。位置按官方导视图。`,major:!1,x:-209.87,z:60.04},{id:44,label:`岜零游客中心`,text:`岜零游客中心，问路、咨询在这里；旁边是停车场、卫生间和医疗点，岜零码头在北侧。位置按官方导视图。`,major:!1,x:247.63,z:29.88},{id:45,label:`花千谷`,text:`怪石与花丛相间的山谷，粉红花丛开在石间。位置按官方导视图。`,major:!1,x:-399.21,z:-46.89},{id:46,label:`双鱼台`,text:`河湾边的木亭小筑。位置按官方导视图。`,major:!1,x:-392.11,z:-36.02},{id:47,label:`潮音洞`,text:`河畔的岩洞，洞口临水。位置按官方导视图。`,major:!1,x:-390.13,z:-11.72},{id:48,label:`百辣码头`,text:`南岸紫顶码头亭，桃花渡码头西侧。位置按官方导视图。`,major:!1,x:-373.42,z:14.15},{id:49,label:`蓬莱岛`,text:`婆皇岛东侧河中的小绿岛。位置按官方导视图。`,major:!1,x:-228.68,z:11.44},{id:50,label:`相思阿秀`,text:`河中小岛上的人物，导视图上画在婆皇岛东侧。位置按官方导视图。`,major:!1,x:-174.74,z:-3.72},{id:51,label:`侯月台`,text:`婆皇岛西侧的小亭。位置按官方导视图。`,major:!1,x:-293.03,z:-23.59},{id:52,label:`茶峒`,text:`灰岩洞口与竹林，导视图上画在西岸。位置按官方导视图。`,major:!1,x:-383.68,z:-74.62},{id:53,label:`渡槽`,text:`山间的小引水槽。位置按官方导视图。`,major:!1,x:-379.08,z:-90.2},{id:54,label:`咖啡攻略`,text:`河边的小楼，带卫生间。位置按官方导视图。`,major:!1,x:-361.84,z:-23.3},{id:55,label:`养花田`,text:`粉色花田片区。位置按官方导视图。`,major:!1,x:-337.24,z:-53.04},{id:56,label:`蚂拐稻田`,text:`绿色稻田片区。位置按官方导视图。`,major:!1,x:-379.87,z:-22.01},{id:57,label:`峒那花屋`,text:`河边的花屋。位置按官方导视图。`,major:!1,x:-325,z:-42.17},{id:58,label:`农文旅观光产业园`,text:`棕榈树片区。位置按官方导视图。`,major:!1,x:-366.71,z:-85.49},{id:59,label:`滨河步道`,text:`南岸的滨河步道。位置按官方导视图。`,major:!1,x:-325,z:28.16},{id:60,label:`向阳湾`,text:`伦岛南侧的河湾。位置按官方导视图。`,major:!1,x:5.39,z:22.87},{id:61,label:`那兰湾`,text:`那兰岛西侧的河湾。位置按官方导视图。`,major:!1,x:317.11,z:-85.49},{id:62,label:`星屿湾`,text:`七星屿西侧的河湾。位置按官方导视图。`,major:!1,x:360.53,z:-72.33},{id:63,label:`海马岛`,text:`北汊上的小岛。位置按官方导视图。`,major:!1,x:341.18,z:-90.2}],places:[{id:1e3,label:`黑水河`,text:`黑水河，流经安平村的河段仙气萦绕、自成画卷，又称安平仙河；游船从岜零码头出发，沿河西行约 5 公里到官田码头。本图河道走向按景区官方导视图绘制，图上河流自西向东。`,kind:`place`,x:104.61,z:-2.72},{id:1001,label:`岜零码头`,text:`游船出发码头，乘船约 50 分钟到官田码头；每半小时发船或客满发船，建议最晚 16:00 前登船。位置按官方导视图。`,kind:`place`,x:263.55,z:1.14},{id:1002,label:`岜零游客中心`,text:`岜零游客中心，问路、咨询在这里；旁边是停车场、卫生间，岜零码头在北侧。位置按官方导视图。`,kind:`place`,x:257.37,z:27.45}],facilities:[{id:2e3,label:`卫生间`,text:`安平游客中心旁的卫生间。`,kind:`wc`,x:-216.45,z:61.61},{id:2001,label:`卫生间`,text:`安平游客中心旁的卫生间。`,kind:`wc`,x:-197.89,z:60.61},{id:2002,label:`医疗点`,text:`岜零游客中心旁的医疗点。`,kind:`med`,x:249.08,z:23.87},{id:2003,label:`卫生间`,text:`岜零游客中心旁的卫生间。`,kind:`wc`,x:250.79,z:37.31},{id:2004,label:`卫生间`,text:`岜零游客中心旁的卫生间。`,kind:`wc`,x:257.76,z:78.2},{id:2005,label:`卫生间`,text:`天空之镜旁的卫生间。`,kind:`wc`,x:-386.84,z:-95.78},{id:2006,label:`卫生间`,text:`官田农场旁的卫生间。`,kind:`wc`,x:-350.39,z:-14.3},{id:2007,label:`卫生间`,text:`南岸步道旁的卫生间。`,kind:`wc`,x:-410.66,z:21.16}],peaks:[{id:`qiancheng`,name:`千层红山`,elevM:431,text:`景区东南角的喀斯特石峰，官方导视图上画在入口东南方，峰顶岩石裸露，导视图上标注为"千层红山"。峰体按导视图位置与画法在模型上加高，模型高程约 431 米。`,demY:71.96,x:438.03,z:36.02},{id:`southpeak`,name:`南岸高峰`,elevM:266,text:`南岸三座相连的山丘中最高的一座，按官方导视图所绘；非景点名，仅作方位参考。`,demY:30.03,x:116.32,z:86.34},{id:`yina`,name:`依娜山`,elevM:360,text:`西端最高的喀斯特峰，导视图上画在龙碧滩西北，峰体高耸，模型高程约 360 米。`,demY:49.6,x:-480.66,z:-95.64}],houses:[{id:0,village:0,outline:[29.67,-125.79,37.62,-116.8,31.62,-111.51,23.68,-120.5],eaveM:6,ridgeM:10,roof:`gable`},{id:1,village:0,outline:[44.43,-85.55,37.8,-75.54,31.13,-79.96,37.76,-89.97],eaveM:6,ridgeM:10,roof:`gable`},{id:2,village:0,outline:[37.04,-89.61,26.18,-84.51,22.78,-91.75,33.64,-96.85],eaveM:6,ridgeM:10,roof:`hip`},{id:3,village:0,outline:[52.27,-94.01,63.15,-88.94,59.77,-81.69,48.89,-86.76],eaveM:6,ridgeM:10,roof:`hip`},{id:100,village:1,outline:[60.74,-72.87,58.5,-61.09,50.64,-62.58,52.88,-74.37],eaveM:6,ridgeM:10,roof:`gable`},{id:101,village:1,outline:[98.69,-80.6,88.55,-74.18,84.27,-80.93,94.4,-87.36],eaveM:6,ridgeM:10,roof:`gable`},{id:102,village:1,outline:[67.89,-80.84,77.17,-73.24,72.1,-67.05,62.82,-74.65],eaveM:6,ridgeM:10,roof:`gable`},{id:103,village:1,outline:[101.79,-63.15,90.02,-60.8,88.45,-68.64,100.22,-70.99],eaveM:6,ridgeM:10,roof:`hip`},{id:200,village:2,outline:[97.11,-122.22,106.93,-115.33,102.34,-108.78,92.51,-115.67],eaveM:6,ridgeM:10,roof:`hip`},{id:201,village:2,outline:[83.87,-107.61,71.93,-106.48,71.18,-114.45,83.12,-115.57],eaveM:6,ridgeM:10,roof:`hip`},{id:202,village:2,outline:[90.84,-114.52,95.68,-103.53,88.36,-100.31,83.52,-111.29],eaveM:6,ridgeM:10,roof:`gable`},{id:203,village:2,outline:[107.65,-91.25,96.79,-86.15,93.39,-93.39,104.25,-98.49],eaveM:6,ridgeM:10,roof:`gable`},{id:300,village:3,outline:[45.06,-59.31,55.83,-54.02,52.31,-46.84,41.54,-52.12],eaveM:6,ridgeM:10,roof:`gable`},{id:301,village:3,outline:[39.3,-63.17,27.34,-62.17,26.68,-70.14,38.63,-71.14],eaveM:6,ridgeM:10,roof:`gable`},{id:302,village:3,outline:[72.5,-63.65,81.33,-55.53,75.92,-49.64,67.09,-57.76],eaveM:6,ridgeM:10,roof:`gable`},{id:303,village:3,outline:[61.97,-72.91,49.98,-72.57,49.75,-80.56,61.74,-80.91],eaveM:6,ridgeM:10,roof:`hip`},{id:400,village:4,outline:[182.91,-85.16,190.78,-76.1,184.75,-70.85,176.87,-79.91],eaveM:6,ridgeM:10,roof:`hip`},{id:401,village:4,outline:[177.52,-74.29,165.67,-72.42,164.42,-80.32,176.27,-82.19],eaveM:6,ridgeM:10,roof:`gable`},{id:402,village:4,outline:[159.92,-98.52,167.71,-89.4,161.63,-84.2,153.83,-93.32],eaveM:6,ridgeM:10,roof:`hip`},{id:403,village:4,outline:[189.58,-90.55,177.74,-88.6,176.44,-96.49,188.28,-98.44],eaveM:6,ridgeM:10,roof:`gable`},{id:500,village:5,outline:[237.98,-109.62,245.9,-100.6,239.88,-95.32,231.97,-104.34],eaveM:6,ridgeM:10,roof:`hip`},{id:501,village:5,outline:[221.4,-105.2,220.34,-93.25,212.37,-93.95,213.43,-105.91],eaveM:6,ridgeM:10,roof:`gable`},{id:502,village:5,outline:[256.61,-105.13,263.38,-95.22,256.78,-90.71,250.01,-100.62],eaveM:6,ridgeM:10,roof:`hip`},{id:503,village:5,outline:[223.51,-88.24,235.5,-87.74,235.17,-79.75,223.18,-80.25],eaveM:6,ridgeM:10,roof:`gable`},{id:600,village:6,outline:[264.27,-52.82,275.94,-50,274.06,-42.23,262.39,-45.04],eaveM:6,ridgeM:10,roof:`gable`},{id:601,village:6,outline:[229.91,-39.93,240.76,-34.81,237.35,-27.58,226.5,-32.69],eaveM:6,ridgeM:10,roof:`hip`},{id:602,village:6,outline:[219.75,-43.93,230.22,-38.07,226.31,-31.09,215.84,-36.95],eaveM:6,ridgeM:10,roof:`gable`},{id:700,village:7,outline:[169.92,-63.28,179.83,-56.51,175.32,-49.91,165.41,-56.67],eaveM:6,ridgeM:10,roof:`gable`},{id:701,village:7,outline:[185.49,-29.2,181.69,-17.82,174.1,-20.35,177.9,-31.74],eaveM:6,ridgeM:10,roof:`gable`},{id:702,village:7,outline:[176.83,-42.02,188.79,-41.15,188.21,-33.17,176.25,-34.04],eaveM:6,ridgeM:10,roof:`hip`},{id:800,village:8,outline:[-308.71,75.86,-302.86,86.33,-309.84,90.23,-315.69,79.76],eaveM:6,ridgeM:10,roof:`hip`},{id:801,village:8,outline:[-309.4,66.91,-316.34,76.7,-322.87,72.07,-315.92,62.28],eaveM:6,ridgeM:10,roof:`gable`},{id:900,village:9,outline:[-336.41,86.49,-324.84,89.68,-326.97,97.39,-338.54,94.2],eaveM:6,ridgeM:10,roof:`gable`},{id:901,village:9,outline:[-332.41,120.35,-344.4,120.94,-344.79,112.95,-332.81,112.36],eaveM:6,ridgeM:10,roof:`gable`},{id:1e3,village:10,outline:[-222.37,59.71,-219.14,71.27,-226.84,73.43,-230.07,61.87],eaveM:6,ridgeM:10,roof:`gable`},{id:1001,village:10,outline:[-213.99,71.11,-213.13,83.08,-221.11,83.65,-221.97,71.68],eaveM:6,ridgeM:10,roof:`hip`},{id:1002,village:10,outline:[-234.06,47.07,-224.01,53.63,-228.39,60.33,-238.44,53.77],eaveM:6,ridgeM:10,roof:`gable`},{id:1003,village:10,outline:[-226.43,69.73,-221.54,80.69,-228.84,83.95,-233.73,72.99],eaveM:6,ridgeM:10,roof:`gable`},{id:1004,village:10,outline:[-195.5,59.73,-204.09,68.12,-209.68,62.39,-201.09,54.01],eaveM:6,ridgeM:10,roof:`gable`},{id:1100,village:11,outline:[-476.36,-12.89,-472.35,-1.58,-479.89,1.1,-483.9,-10.21],eaveM:6,ridgeM:10,roof:`gable`},{id:1200,village:12,outline:[-501.22,16.31,-512.56,20.23,-515.17,12.67,-503.83,8.75],eaveM:6,ridgeM:10,roof:`hip`},{id:1300,village:13,outline:[-455.65,-113.06,-444.07,-109.91,-446.17,-102.19,-457.75,-105.34],eaveM:6,ridgeM:10,roof:`hip`},{id:1301,village:13,outline:[-430.56,-60.06,-441.95,-56.27,-444.47,-63.86,-433.08,-67.65],eaveM:6,ridgeM:10,roof:`hip`},{id:1302,village:13,outline:[-448.97,-79.78,-459.43,-73.9,-463.35,-80.87,-452.89,-86.75],eaveM:6,ridgeM:10,roof:`gable`},{id:1400,village:14,outline:[-275.81,63.59,-287.66,65.49,-288.92,57.59,-277.07,55.69],eaveM:6,ridgeM:10,roof:`gable`},{id:1401,village:14,outline:[-264.03,60.9,-255.75,69.59,-261.54,75.11,-269.82,66.42],eaveM:6,ridgeM:10,roof:`gable`},{id:1500,village:15,outline:[-173.18,85.97,-161.36,88.06,-162.76,95.94,-174.58,93.84],eaveM:6,ridgeM:10,roof:`hip`},{id:1501,village:15,outline:[-176.89,68.2,-165.42,71.75,-167.79,79.39,-179.26,75.84],eaveM:6,ridgeM:10,roof:`hip`},{id:1502,village:15,outline:[-185.17,50.12,-173.58,53.23,-175.65,60.95,-187.24,57.84],eaveM:6,ridgeM:10,roof:`gable`},{id:1600,village:16,outline:[259.24,-5.05,262.98,6.35,255.38,8.85,251.64,-2.55],eaveM:6,ridgeM:10,roof:`gable`},{id:1601,village:16,outline:[279.27,45.89,267.38,47.53,266.29,39.61,278.18,37.97],eaveM:6,ridgeM:10,roof:`gable`},{id:1602,village:16,outline:[261.84,25.59,264.59,37.27,256.81,39.1,254.05,27.42],eaveM:6,ridgeM:10,roof:`gable`},{id:1700,village:17,outline:[267.24,68.98,276.53,76.58,271.46,82.77,262.17,75.17],eaveM:6,ridgeM:10,roof:`gable`},{id:1701,village:17,outline:[285.1,80.6,277.73,90.07,271.41,85.16,278.78,75.69],eaveM:6,ridgeM:10,roof:`gable`},{id:1702,village:17,outline:[278.89,63.53,267.83,68.18,264.72,60.81,275.78,56.15],eaveM:6,ridgeM:10,roof:`hip`}],trees:[{x:229.74,z:-39.03,species:`round`,height:7.08,radius:2.69,yaw:1.509,tint:.369,phase:.635,crownBase:.45,flex:1,bloom:!0},{x:223.16,z:-21.87,species:`round`,height:6.6,radius:2.51,yaw:5.227,tint:.572,phase:.035,crownBase:.45,flex:1,bloom:!0},{x:213.16,z:-70.19,species:`round`,height:6.72,radius:2.55,yaw:1.394,tint:.65,phase:.984,crownBase:.45,flex:1,bloom:!0},{x:184.87,z:-41.74,species:`round`,height:6.36,radius:2.42,yaw:5.625,tint:.844,phase:.927,crownBase:.45,flex:1,bloom:!0},{x:189.74,z:-67.76,species:`round`,height:6.54,radius:2.49,yaw:2.723,tint:.53,phase:.159,crownBase:.45,flex:1,bloom:!0},{x:187.63,z:-58.04,species:`round`,height:5.94,radius:2.26,yaw:2.324,tint:.637,phase:.673,crownBase:.45,flex:1,bloom:!0},{x:181.32,z:-31.88,species:`round`,height:6.66,radius:2.53,yaw:5.112,tint:.09,phase:.977,crownBase:.45,flex:1,bloom:!0},{x:178.29,z:-57.04,species:`round`,height:6.06,radius:2.3,yaw:4.649,tint:.731,phase:.659,crownBase:.45,flex:1,bloom:!0},{x:-349.08,z:3,species:`round`,height:5.52,radius:2.1,yaw:4.343,tint:.974,phase:.279,crownBase:.45,flex:1,bloom:!0},{x:-317.89,z:35.17,species:`round`,height:7.44,radius:2.83,yaw:5.762,tint:.673,phase:.64,crownBase:.45,flex:1,bloom:!0},{x:-335.39,z:37.88,species:`round`,height:7.8,radius:2.96,yaw:2.579,tint:.833,phase:.887,crownBase:.45,flex:1,bloom:!0},{x:-314.74,z:42.6,species:`round`,height:6.18,radius:2.35,yaw:6.006,tint:.914,phase:.394,crownBase:.45,flex:1,bloom:!0},{x:-360.66,z:35.17,species:`round`,height:5.94,radius:2.26,yaw:2.692,tint:.558,phase:.911,crownBase:.45,flex:1,bloom:!0},{x:-324.08,z:34.88,species:`round`,height:7.38,radius:2.8,yaw:1.496,tint:.088,phase:.889,crownBase:.45,flex:1,bloom:!0},{x:-375,z:7,species:`round`,height:7.74,radius:2.94,yaw:3.797,tint:.125,phase:.22,crownBase:.45,flex:1,bloom:!0},{x:-359.47,z:36.74,species:`round`,height:7.32,radius:2.78,yaw:1.258,tint:.796,phase:.299,crownBase:.45,flex:1,bloom:!0},{x:-239.47,z:-17.73,species:`round`,height:5.64,radius:2.14,yaw:4.3,tint:.153,phase:.463,crownBase:.45,flex:1,bloom:!0},{x:-252.76,z:-53.18,species:`round`,height:7.5,radius:2.85,yaw:4.522,tint:.095,phase:.423,crownBase:.45,flex:1,bloom:!0},{x:-266.84,z:-52.75,species:`round`,height:6.66,radius:2.53,yaw:4.237,tint:.887,phase:.935,crownBase:.45,flex:1,bloom:!0},{x:-231.05,z:-47.89,species:`round`,height:7.68,radius:2.92,yaw:3.55,tint:.063,phase:.26,crownBase:.45,flex:1,bloom:!0},{x:-266.71,z:-25.87,species:`round`,height:6.12,radius:2.33,yaw:5.54,tint:.1,phase:.467,crownBase:.45,flex:1,bloom:!0},{x:-267.76,z:-35.88,species:`round`,height:7.74,radius:2.94,yaw:1.432,tint:.421,phase:.101,crownBase:.45,flex:1,bloom:!0},{x:-249.21,z:-7.58,species:`round`,height:7.38,radius:2.8,yaw:5.35,tint:.635,phase:.86,crownBase:.45,flex:1,bloom:!0},{x:-244.87,z:-47.75,species:`round`,height:6.9,radius:2.62,yaw:3.167,tint:.182,phase:.395,crownBase:.45,flex:1,bloom:!0},{x:-450.92,z:36.17,species:`round`,height:9.73,radius:3.7,yaw:2.205,tint:.888,phase:.119,crownBase:.45,flex:1,bloom:!1},{x:-437.37,z:41.03,species:`round`,height:8.68,radius:3.3,yaw:2.554,tint:.735,phase:.567,crownBase:.45,flex:1,bloom:!1},{x:-461.45,z:48.03,species:`round`,height:10.43,radius:3.96,yaw:.266,tint:.736,phase:.919,crownBase:.45,flex:1,bloom:!1},{x:-451.58,z:44.74,species:`round`,height:9.17,radius:3.48,yaw:3.968,tint:.913,phase:.355,crownBase:.45,flex:1,bloom:!1},{x:-448.16,z:27.59,species:`round`,height:7.42,radius:2.82,yaw:.278,tint:.257,phase:.333,crownBase:.45,flex:1,bloom:!1},{x:-457.24,z:29.16,species:`round`,height:8.54,radius:3.25,yaw:2.409,tint:.867,phase:.405,crownBase:.45,flex:1,bloom:!1},{x:42.76,z:-9.15,species:`round`,height:7.84,radius:2.98,yaw:3.441,tint:.461,phase:.191,crownBase:.45,flex:1,bloom:!1},{x:30.39,z:9.58,species:`round`,height:9.45,radius:3.59,yaw:4.621,tint:.816,phase:.593,crownBase:.45,flex:1,bloom:!1},{x:19.74,z:.57,species:`round`,height:7.91,radius:3.01,yaw:2.423,tint:.736,phase:.774,crownBase:.45,flex:1,bloom:!1},{x:33.68,z:-7.29,species:`round`,height:10.43,radius:3.96,yaw:.774,tint:.529,phase:.484,crownBase:.45,flex:1,bloom:!1},{x:37.76,z:.43,species:`round`,height:10.99,radius:4.18,yaw:3.121,tint:.976,phase:.397,crownBase:.45,flex:1,bloom:!1},{x:46.18,z:3.29,species:`round`,height:10.15,radius:3.86,yaw:5.683,tint:.978,phase:.726,crownBase:.45,flex:1,bloom:!1},{x:25.53,z:-14.44,species:`round`,height:8.82,radius:3.35,yaw:3.921,tint:.761,phase:.781,crownBase:.45,flex:1,bloom:!1},{x:311.45,z:-49.75,species:`round`,height:7.49,radius:2.85,yaw:1.482,tint:.826,phase:.44,crownBase:.45,flex:1,bloom:!1},{x:301.32,z:-34.45,species:`round`,height:7.35,radius:2.79,yaw:2.989,tint:.695,phase:.015,crownBase:.45,flex:1,bloom:!1},{x:292.24,z:-56.75,species:`round`,height:10.85,radius:4.12,yaw:3.774,tint:.879,phase:.678,crownBase:.45,flex:1,bloom:!1},{x:287.11,z:-46.75,species:`round`,height:8.47,radius:3.22,yaw:4.809,tint:.307,phase:.779,crownBase:.45,flex:1,bloom:!1},{x:303.03,z:-47.46,species:`round`,height:8.47,radius:3.22,yaw:3.533,tint:.473,phase:.699,crownBase:.45,flex:1,bloom:!1},{x:335.26,z:-47.46,species:`round`,height:10.5,radius:3.99,yaw:4.114,tint:.171,phase:.282,crownBase:.45,flex:1,bloom:!1},{x:335.79,z:-57.32,species:`round`,height:9.87,radius:3.75,yaw:5.883,tint:.425,phase:.266,crownBase:.45,flex:1,bloom:!1},{x:344.08,z:-42.74,species:`round`,height:11.13,radius:4.23,yaw:4.416,tint:.857,phase:.345,crownBase:.45,flex:1,bloom:!1},{x:348.29,z:-51.32,species:`round`,height:8.96,radius:3.4,yaw:.838,tint:.344,phase:.944,crownBase:.45,flex:1,bloom:!1},{x:477.89,z:93.49,species:`round`,height:7.7,radius:2.93,yaw:3.48,tint:.223,phase:.664,crownBase:.45,flex:1,bloom:!1},{x:463.42,z:97.49,species:`round`,height:10.36,radius:3.94,yaw:6.035,tint:.217,phase:.897,crownBase:.45,flex:1,bloom:!1},{x:459.34,z:107.5,species:`round`,height:10.15,radius:3.86,yaw:3.209,tint:.652,phase:.372,crownBase:.45,flex:1,bloom:!1},{x:465.92,z:80.34,species:`round`,height:9.17,radius:3.48,yaw:1.864,tint:.371,phase:.363,crownBase:.45,flex:1,bloom:!1},{x:473.82,z:103.21,species:`round`,height:7.56,radius:2.87,yaw:5.969,tint:.515,phase:.011,crownBase:.45,flex:1,bloom:!1},{x:457.5,z:90.35,species:`round`,height:9.31,radius:3.54,yaw:3.678,tint:.003,phase:.728,crownBase:.45,flex:1,bloom:!1},{x:-191.05,z:-59.47,species:`round`,height:11.48,radius:4.36,yaw:.446,tint:.546,phase:.717,crownBase:.45,flex:1,bloom:!1},{x:-204.21,z:-72.62,species:`round`,height:8.33,radius:3.17,yaw:4.56,tint:.406,phase:.798,crownBase:.45,flex:1,bloom:!1},{x:-196.45,z:-63.33,species:`round`,height:10.29,radius:3.91,yaw:5.828,tint:.975,phase:.115,crownBase:.45,flex:1,bloom:!1},{x:-189.34,z:-56.32,species:`round`,height:11.27,radius:4.28,yaw:5.133,tint:.396,phase:.471,crownBase:.45,flex:1,bloom:!1},{x:-194.87,z:-73.91,species:`round`,height:8.4,radius:3.19,yaw:.203,tint:.578,phase:.294,crownBase:.45,flex:1,bloom:!1},{x:-217.89,z:-63.33,species:`round`,height:9.52,radius:3.62,yaw:2.279,tint:.891,phase:.327,crownBase:.45,flex:1,bloom:!1},{x:-498.29,z:19.87,species:`round`,height:10.43,radius:3.96,yaw:1.271,tint:.464,phase:.312,crownBase:.45,flex:1,bloom:!1},{x:-497.24,z:35.88,species:`round`,height:10.43,radius:3.96,yaw:4.252,tint:.541,phase:.172,crownBase:.45,flex:1,bloom:!1},{x:-489.47,z:24.87,species:`round`,height:8.12,radius:3.09,yaw:.377,tint:.475,phase:.225,crownBase:.45,flex:1,bloom:!1},{x:-492.24,z:13.58,species:`round`,height:9.03,radius:3.43,yaw:5.39,tint:.037,phase:.361,crownBase:.45,flex:1,bloom:!1},{x:-499.87,z:9.15,species:`round`,height:9.87,radius:3.75,yaw:3.092,tint:.337,phase:.263,crownBase:.45,flex:1,bloom:!1},{x:-411.84,z:61.33,species:`round`,height:9.73,radius:3.7,yaw:3.481,tint:.167,phase:.963,crownBase:.45,flex:1,bloom:!1},{x:-416.58,z:74.05,species:`round`,height:11.41,radius:4.34,yaw:2.313,tint:.894,phase:.688,crownBase:.45,flex:1,bloom:!1},{x:-420.39,z:56.18,species:`round`,height:7.42,radius:2.82,yaw:5.234,tint:.464,phase:.742,crownBase:.45,flex:1,bloom:!1},{x:-404.21,z:52.46,species:`round`,height:10.43,radius:3.96,yaw:1.527,tint:.944,phase:.097,crownBase:.45,flex:1,bloom:!1},{x:-398.03,z:61.61,species:`round`,height:11.06,radius:4.2,yaw:2.211,tint:.991,phase:.697,crownBase:.45,flex:1,bloom:!1},{x:267.24,z:-31.59,species:`round`,height:11.2,radius:4.26,yaw:4.532,tint:.714,phase:.245,crownBase:.45,flex:1,bloom:!1},{x:276.45,z:-43.74,species:`round`,height:9.17,radius:3.48,yaw:1.876,tint:.597,phase:.118,crownBase:.45,flex:1,bloom:!1},{x:280.53,z:-32.74,species:`round`,height:9.94,radius:3.78,yaw:3.076,tint:.359,phase:.233,crownBase:.45,flex:1,bloom:!1},{x:272.76,z:-25.02,species:`round`,height:10.99,radius:4.18,yaw:3.896,tint:.433,phase:.1,crownBase:.45,flex:1,bloom:!1},{x:-464.34,z:39.88,species:`round`,height:9.38,radius:3.56,yaw:6.227,tint:.306,phase:.168,crownBase:.45,flex:1,bloom:!1},{x:-439.87,z:23.59,species:`round`,height:10.22,radius:3.88,yaw:6.276,tint:.382,phase:.985,crownBase:.45,flex:1,bloom:!1},{x:37.76,z:-17.3,species:`round`,height:9.87,radius:3.75,yaw:.521,tint:.954,phase:.203,crownBase:.45,flex:1,bloom:!1},{x:54.47,z:-2.86,species:`round`,height:8.19,radius:3.11,yaw:5.165,tint:.533,phase:.129,crownBase:.45,flex:1,bloom:!1},{x:-141.05,z:-102.07,species:`round`,height:9.45,radius:3.59,yaw:3.704,tint:.913,phase:.616,crownBase:.45,flex:1,bloom:!1},{x:-135.26,z:-93.49,species:`round`,height:7.91,radius:3.01,yaw:.925,tint:.107,phase:.632,crownBase:.45,flex:1,bloom:!1},{x:-141.58,z:-84.2,species:`round`,height:7.84,radius:2.98,yaw:3.222,tint:.048,phase:.648,crownBase:.45,flex:1,bloom:!1},{x:-155.26,z:-91.2,species:`round`,height:9.45,radius:3.59,yaw:.263,tint:.092,phase:.165,crownBase:.45,flex:1,bloom:!1},{x:-154.74,z:-100.93,species:`round`,height:8.26,radius:3.14,yaw:2.379,tint:.645,phase:.925,crownBase:.45,flex:1,bloom:!1},{x:49.61,z:15.72,species:`round`,height:9.31,radius:3.54,yaw:5.127,tint:.569,phase:.667,crownBase:.45,flex:1,bloom:!1},{x:56.18,z:8.43,species:`round`,height:7.91,radius:3.01,yaw:4.137,tint:.8,phase:.269,crownBase:.45,flex:1,bloom:!1},{x:41.58,z:11.01,species:`round`,height:8.33,radius:3.17,yaw:5.149,tint:.71,phase:.767,crownBase:.45,flex:1,bloom:!1},{x:321.45,z:-20.16,species:`round`,height:9.24,radius:3.51,yaw:.327,tint:.955,phase:.63,crownBase:.45,flex:1,bloom:!1},{x:330.13,z:-14.3,species:`round`,height:10.36,radius:3.94,yaw:4.888,tint:.896,phase:.533,crownBase:.45,flex:1,bloom:!1},{x:312.37,z:-15.15,species:`round`,height:9.1,radius:3.46,yaw:3.035,tint:.796,phase:.824,crownBase:.45,flex:1,bloom:!1},{x:10,z:-.29,species:`round`,height:8.68,radius:3.3,yaw:2.468,tint:.556,phase:.525,crownBase:.45,flex:1,bloom:!1},{x:12.24,z:-9.58,species:`round`,height:9.66,radius:3.67,yaw:3.889,tint:.099,phase:.481,crownBase:.45,flex:1,bloom:!1},{x:17.63,z:9.29,species:`round`,height:8.47,radius:3.22,yaw:3.118,tint:.599,phase:.118,crownBase:.45,flex:1,bloom:!1},{x:8.95,z:8.58,species:`round`,height:10.43,radius:3.96,yaw:4.232,tint:.919,phase:.845,crownBase:.45,flex:1,bloom:!1},{x:-283.16,z:-79.05,species:`round`,height:8.4,radius:3.19,yaw:2.358,tint:.161,phase:.795,crownBase:.45,flex:1,bloom:!1},{x:-296.84,z:-63.33,species:`round`,height:8.4,radius:3.19,yaw:4.133,tint:.689,phase:.847,crownBase:.45,flex:1,bloom:!1},{x:-286.97,z:-67.76,species:`round`,height:11.41,radius:4.34,yaw:1.089,tint:.399,phase:.483,crownBase:.45,flex:1,bloom:!1},{x:-296.84,z:-73.48,species:`round`,height:9.66,radius:3.67,yaw:2.824,tint:.422,phase:.361,crownBase:.45,flex:1,bloom:!1},{x:-273.16,z:-76.77,species:`round`,height:10.36,radius:3.94,yaw:5.216,tint:.269,phase:.855,crownBase:.45,flex:1,bloom:!1},{x:299.47,z:-18.58,species:`round`,height:7.42,radius:2.82,yaw:2.664,tint:.518,phase:.655,crownBase:.45,flex:1,bloom:!1},{x:310,z:-28.73,species:`round`,height:11.55,radius:4.39,yaw:2.018,tint:.472,phase:.793,crownBase:.45,flex:1,bloom:!1},{x:319.34,z:-35.45,species:`round`,height:7.63,radius:2.9,yaw:1.533,tint:.746,phase:.754,crownBase:.45,flex:1,bloom:!1},{x:311.58,z:-39.6,species:`round`,height:10.08,radius:3.83,yaw:4.076,tint:.207,phase:.383,crownBase:.45,flex:1,bloom:!1},{x:326.32,z:-30.31,species:`round`,height:9.94,radius:3.78,yaw:3.961,tint:.331,phase:.528,crownBase:.45,flex:1,bloom:!1},{x:430.13,z:109.79,species:`round`,height:9.52,radius:3.62,yaw:1.488,tint:.205,phase:.609,crownBase:.45,flex:1,bloom:!1},{x:434.21,z:129.37,species:`round`,height:7.84,radius:2.98,yaw:.934,tint:.135,phase:.383,crownBase:.45,flex:1,bloom:!1},{x:438.95,z:105.64,species:`round`,height:8.33,radius:3.17,yaw:.545,tint:.581,phase:.329,crownBase:.45,flex:1,bloom:!1},{x:446.45,z:114.22,species:`round`,height:7.84,radius:2.98,yaw:4.06,tint:.882,phase:.836,crownBase:.45,flex:1,bloom:!1},{x:446.18,z:125.08,species:`round`,height:7.98,radius:3.03,yaw:.994,tint:.16,phase:.319,crownBase:.45,flex:1,bloom:!1},{x:-481.58,z:10.01,species:`round`,height:8.05,radius:3.06,yaw:1.934,tint:.818,phase:.218,crownBase:.45,flex:1,bloom:!1},{x:-472.11,z:6.43,species:`round`,height:10.43,radius:3.96,yaw:3.992,tint:.422,phase:.584,crownBase:.45,flex:1,bloom:!1},{x:-477.63,z:23.3,species:`round`,height:11.2,radius:4.26,yaw:5.563,tint:.147,phase:.371,crownBase:.45,flex:1,bloom:!1},{x:-477.89,z:-.14,species:`round`,height:9.87,radius:3.75,yaw:4.155,tint:.683,phase:.404,crownBase:.45,flex:1,bloom:!1},{x:-491.71,z:5,species:`round`,height:8.33,radius:3.17,yaw:4.242,tint:.093,phase:.98,crownBase:.45,flex:1,bloom:!1},{x:222.5,z:60.47,species:`round`,height:7.56,radius:2.87,yaw:2.139,tint:.074,phase:.927,crownBase:.45,flex:1,bloom:!1},{x:232.76,z:49.03,species:`round`,height:8.05,radius:3.06,yaw:1.69,tint:.275,phase:.85,crownBase:.45,flex:1,bloom:!1},{x:211.32,z:58.47,species:`round`,height:9.31,radius:3.54,yaw:4.543,tint:.591,phase:.797,crownBase:.45,flex:1,bloom:!1},{x:216.84,z:42.17,species:`round`,height:11.06,radius:4.2,yaw:3.609,tint:.402,phase:.871,crownBase:.45,flex:1,bloom:!1},{x:223.03,z:49.61,species:`round`,height:8.05,radius:3.06,yaw:2.083,tint:.285,phase:.091,crownBase:.45,flex:1,bloom:!1},{x:260.26,z:-25.45,species:`round`,height:11.13,radius:4.23,yaw:2.027,tint:.083,phase:.892,crownBase:.45,flex:1,bloom:!1},{x:248.55,z:-24.3,species:`round`,height:10.5,radius:3.99,yaw:1.841,tint:.988,phase:.306,crownBase:.45,flex:1,bloom:!1},{x:-488.42,z:79.91,species:`round`,height:10.78,radius:4.1,yaw:2.565,tint:.633,phase:.982,crownBase:.45,flex:1,bloom:!1},{x:-480.13,z:58.61,species:`round`,height:10.92,radius:4.15,yaw:4.493,tint:.26,phase:.799,crownBase:.45,flex:1,bloom:!1},{x:-475.53,z:71.76,species:`round`,height:8.61,radius:3.27,yaw:2.566,tint:.387,phase:.979,crownBase:.45,flex:1,bloom:!1},{x:-465.26,z:73.19,species:`round`,height:11.06,radius:4.2,yaw:5.509,tint:.911,phase:.232,crownBase:.45,flex:1,bloom:!1},{x:-493.95,z:69.05,species:`round`,height:11.34,radius:4.31,yaw:1.079,tint:.025,phase:.009,crownBase:.45,flex:1,bloom:!1},{x:-475.79,z:81.2,species:`round`,height:10.71,radius:4.07,yaw:5.472,tint:.847,phase:.526,crownBase:.45,flex:1,bloom:!1},{x:-470.66,z:58.04,species:`round`,height:10.92,radius:4.15,yaw:2.565,tint:.774,phase:.145,crownBase:.45,flex:1,bloom:!1},{x:-305.13,z:-71.05,species:`round`,height:8.75,radius:3.33,yaw:2.181,tint:.333,phase:.086,crownBase:.45,flex:1,bloom:!1},{x:-278.55,z:-68.47,species:`round`,height:7.56,radius:2.87,yaw:.005,tint:.493,phase:.578,crownBase:.45,flex:1,bloom:!1},{x:419.61,z:91.78,species:`round`,height:10.43,radius:3.96,yaw:.053,tint:.853,phase:.737,crownBase:.45,flex:1,bloom:!1},{x:402.5,z:104.5,species:`round`,height:10.29,radius:3.91,yaw:5.107,tint:.74,phase:.154,crownBase:.45,flex:1,bloom:!1},{x:418.95,z:112.08,species:`round`,height:7.63,radius:2.9,yaw:3.243,tint:.068,phase:.528,crownBase:.45,flex:1,bloom:!1},{x:411.97,z:104.07,species:`round`,height:8.61,radius:3.27,yaw:2.578,tint:.424,phase:.746,crownBase:.45,flex:1,bloom:!1},{x:409.21,z:90.63,species:`round`,height:11.48,radius:4.36,yaw:5.299,tint:.233,phase:.38,crownBase:.45,flex:1,bloom:!1},{x:408.16,z:111.79,species:`round`,height:10.29,radius:3.91,yaw:1.675,tint:.273,phase:.113,crownBase:.45,flex:1,bloom:!1},{x:-492.11,z:-72.76,species:`round`,height:8.33,radius:3.17,yaw:6.15,tint:.245,phase:.361,crownBase:.45,flex:1,bloom:!1},{x:-469.47,z:-72.62,species:`round`,height:7.84,radius:2.98,yaw:5.552,tint:.089,phase:.976,crownBase:.45,flex:1,bloom:!1},{x:-488.68,z:-56.75,species:`round`,height:7.49,radius:2.85,yaw:5.819,tint:.599,phase:.853,crownBase:.45,flex:1,bloom:!1},{x:-478.95,z:-73.05,species:`round`,height:9.87,radius:3.75,yaw:3.41,tint:.591,phase:.7,crownBase:.45,flex:1,bloom:!1},{x:-487.76,z:-65.19,species:`round`,height:9.52,radius:3.62,yaw:4.673,tint:.339,phase:.589,crownBase:.45,flex:1,bloom:!1},{x:-478.82,z:-60.76,species:`round`,height:7.77,radius:2.95,yaw:2.283,tint:.404,phase:.394,crownBase:.45,flex:1,bloom:!1},{x:450,z:85.2,species:`round`,height:9.24,radius:3.51,yaw:2.661,tint:.554,phase:.28,crownBase:.45,flex:1,bloom:!1},{x:468.95,z:89.49,species:`round`,height:9.94,radius:3.78,yaw:5.668,tint:.298,phase:.584,crownBase:.45,flex:1,bloom:!1},{x:-433.16,z:94.64,species:`round`,height:8.47,radius:3.22,yaw:2.322,tint:.217,phase:.062,crownBase:.45,flex:1,bloom:!1},{x:-424.87,z:89.63,species:`round`,height:7.49,radius:2.85,yaw:.116,tint:.511,phase:.457,crownBase:.45,flex:1,bloom:!1},{x:-423.68,z:101.07,species:`round`,height:10.22,radius:3.88,yaw:3.125,tint:.872,phase:.436,crownBase:.45,flex:1,bloom:!1},{x:-416.05,z:106.79,species:`round`,height:9.24,radius:3.51,yaw:5.967,tint:.188,phase:.414,crownBase:.45,flex:1,bloom:!1},{x:-431.84,z:84.06,species:`round`,height:7.42,radius:2.82,yaw:3.836,tint:.557,phase:.413,crownBase:.45,flex:1,bloom:!1},{x:-168.68,z:-88.06,species:`round`,height:7.49,radius:2.85,yaw:1.44,tint:.152,phase:.192,crownBase:.45,flex:1,bloom:!1},{x:-168.55,z:-100.21,species:`round`,height:9.31,radius:3.54,yaw:.458,tint:.649,phase:.091,crownBase:.45,flex:1,bloom:!1},{x:-157.5,z:-80.63,species:`round`,height:9.59,radius:3.64,yaw:5.753,tint:.977,phase:.66,crownBase:.45,flex:1,bloom:!1},{x:-162.24,z:-106.36,species:`round`,height:11.27,radius:4.28,yaw:6.13,tint:.055,phase:.166,crownBase:.45,flex:1,bloom:!1},{x:-295.66,z:-120.8,species:`round`,height:10.57,radius:4.02,yaw:1.659,tint:.315,phase:.077,crownBase:.45,flex:1,bloom:!1},{x:-293.16,z:-130.95,species:`round`,height:11.34,radius:4.31,yaw:1.795,tint:.146,phase:.769,crownBase:.45,flex:1,bloom:!1},{x:-300,z:-139.67,species:`round`,height:9.31,radius:3.54,yaw:.329,tint:.552,phase:.52,crownBase:.45,flex:1,bloom:!1},{x:-310.26,z:-134.23,species:`round`,height:10.08,radius:3.83,yaw:5.959,tint:.158,phase:.111,crownBase:.45,flex:1,bloom:!1},{x:-287.37,z:-123.94,species:`round`,height:8.4,radius:3.19,yaw:1.631,tint:.034,phase:.278,crownBase:.45,flex:1,bloom:!1},{x:470.26,z:-2.72,species:`round`,height:8.05,radius:3.06,yaw:3.556,tint:.743,phase:.078,crownBase:.45,flex:1,bloom:!1},{x:450,z:-13.58,species:`round`,height:7.98,radius:3.03,yaw:5.115,tint:.07,phase:.954,crownBase:.45,flex:1,bloom:!1},{x:462.76,z:-9.43,species:`round`,height:8.19,radius:3.11,yaw:5.002,tint:.623,phase:.251,crownBase:.45,flex:1,bloom:!1},{x:469.74,z:-15.72,species:`round`,height:8.26,radius:3.14,yaw:3.599,tint:.088,phase:.328,crownBase:.45,flex:1,bloom:!1},{x:461.32,z:-18.01,species:`round`,height:10.78,radius:4.1,yaw:.712,tint:.26,phase:.812,crownBase:.45,flex:1,bloom:!1},{x:475.92,z:-28.02,species:`round`,height:11.34,radius:4.31,yaw:5.913,tint:.194,phase:.602,crownBase:.45,flex:1,bloom:!1},{x:466.58,z:-47.89,species:`round`,height:9.52,radius:3.62,yaw:5.718,tint:.309,phase:.808,crownBase:.45,flex:1,bloom:!1},{x:465.79,z:-26.59,species:`round`,height:9.45,radius:3.59,yaw:1.244,tint:.007,phase:.821,crownBase:.45,flex:1,bloom:!1},{x:461.32,z:-37.17,species:`round`,height:10.99,radius:4.18,yaw:5.366,tint:.692,phase:.223,crownBase:.45,flex:1,bloom:!1},{x:481.05,z:-46.89,species:`round`,height:10.01,radius:3.8,yaw:.998,tint:.877,phase:.907,crownBase:.45,flex:1,bloom:!1},{x:274.74,z:-77.05,species:`round`,height:7.77,radius:2.95,yaw:1.105,tint:.016,phase:.808,crownBase:.45,flex:1,bloom:!1},{x:284.08,z:-61.33,species:`round`,height:10.01,radius:3.8,yaw:6.227,tint:.565,phase:.115,crownBase:.45,flex:1,bloom:!1},{x:296.97,z:-74.76,species:`round`,height:10.57,radius:4.02,yaw:3.606,tint:.591,phase:.614,crownBase:.45,flex:1,bloom:!1},{x:288.29,z:-74.62,species:`round`,height:8.4,radius:3.19,yaw:2.096,tint:.476,phase:.368,crownBase:.45,flex:1,bloom:!1},{x:292.76,z:-82.63,species:`round`,height:7.7,radius:2.93,yaw:3.496,tint:.393,phase:.885,crownBase:.45,flex:1,bloom:!1},{x:293.95,z:-65.47,species:`round`,height:9.31,radius:3.54,yaw:2.64,tint:.463,phase:.873,crownBase:.45,flex:1,bloom:!1},{x:304.34,z:26.3,species:`round`,height:11.34,radius:4.31,yaw:3.395,tint:.783,phase:.567,crownBase:.45,flex:1,bloom:!1},{x:328.29,z:11.58,species:`round`,height:9.94,radius:3.78,yaw:2.847,tint:.358,phase:.002,crownBase:.45,flex:1,bloom:!1},{x:314.21,z:30.31,species:`round`,height:10.57,radius:4.02,yaw:2.901,tint:.379,phase:.443,crownBase:.45,flex:1,bloom:!1},{x:320.53,z:23.59,species:`round`,height:9.45,radius:3.59,yaw:3.047,tint:.933,phase:.667,crownBase:.45,flex:1,bloom:!1},{x:313.82,z:15.15,species:`round`,height:9.73,radius:3.7,yaw:6.099,tint:.872,phase:.879,crownBase:.45,flex:1,bloom:!1},{x:497.11,z:-2,species:`round`,height:8.68,radius:3.3,yaw:6.15,tint:.411,phase:.893,crownBase:.45,flex:1,bloom:!1},{x:497.24,z:9.15,species:`round`,height:10.85,radius:4.12,yaw:1.015,tint:.535,phase:.51,crownBase:.45,flex:1,bloom:!1},{x:479.08,z:-.14,species:`round`,height:9.59,radius:3.64,yaw:6.011,tint:.692,phase:.362,crownBase:.45,flex:1,bloom:!1},{x:490,z:-10.72,species:`round`,height:7.63,radius:2.9,yaw:.461,tint:.616,phase:.03,crownBase:.45,flex:1,bloom:!1},{x:487.63,z:11.01,species:`round`,height:9.66,radius:3.67,yaw:1.346,tint:.611,phase:.497,crownBase:.45,flex:1,bloom:!1},{x:498.82,z:-11.58,species:`round`,height:11.34,radius:4.31,yaw:.632,tint:.662,phase:.751,crownBase:.45,flex:1,bloom:!1},{x:500,z:37.88,species:`round`,height:9.66,radius:3.67,yaw:3.53,tint:.561,phase:.167,crownBase:.45,flex:1,bloom:!1},{x:490.79,z:36.17,species:`round`,height:8.82,radius:3.35,yaw:3.039,tint:.19,phase:.231,crownBase:.45,flex:1,bloom:!1},{x:499.61,z:50.18,species:`round`,height:11.41,radius:4.34,yaw:4.892,tint:.617,phase:.141,crownBase:.45,flex:1,bloom:!1},{x:488.29,z:53.61,species:`round`,height:8.33,radius:3.17,yaw:4.651,tint:.689,phase:.832,crownBase:.45,flex:1,bloom:!1},{x:498.82,z:59.18,species:`round`,height:9.31,radius:3.54,yaw:1.192,tint:.694,phase:.228,crownBase:.45,flex:1,bloom:!1},{x:315.92,z:-58.75,species:`round`,height:10.29,radius:3.91,yaw:.997,tint:.552,phase:.212,crownBase:.45,flex:1,bloom:!1},{x:307.11,z:-61.9,species:`round`,height:10.08,radius:3.83,yaw:2.561,tint:.726,phase:.944,crownBase:.45,flex:1,bloom:!1},{x:306.05,z:-73.05,species:`round`,height:10.01,radius:3.8,yaw:6.062,tint:.592,phase:.209,crownBase:.45,flex:1,bloom:!1},{x:-184.61,z:-85.2,species:`round`,height:8.4,radius:3.19,yaw:2.203,tint:.691,phase:.416,crownBase:.45,flex:1,bloom:!1},{x:-177.5,z:-78.91,species:`round`,height:9.17,radius:3.48,yaw:.241,tint:.973,phase:.158,crownBase:.45,flex:1,bloom:!1},{x:-195.39,z:-90.35,species:`round`,height:9.66,radius:3.67,yaw:.932,tint:.119,phase:.435,crownBase:.45,flex:1,bloom:!1},{x:179.61,z:-9.86,species:`round`,height:9.45,radius:3.59,yaw:4.983,tint:.267,phase:.551,crownBase:.45,flex:1,bloom:!1},{x:135.79,z:-35.17,species:`round`,height:11.13,radius:4.23,yaw:5.996,tint:.961,phase:.243,crownBase:.45,flex:1,bloom:!1},{x:141.18,z:-28.16,species:`round`,height:11.06,radius:4.2,yaw:5.135,tint:.045,phase:.635,crownBase:.45,flex:1,bloom:!1},{x:149.61,z:-25.45,species:`round`,height:8.12,radius:3.09,yaw:4.717,tint:.377,phase:.267,crownBase:.45,flex:1,bloom:!1},{x:100.39,z:-15.87,species:`round`,height:8.82,radius:3.35,yaw:1.899,tint:.902,phase:.013,crownBase:.45,flex:1,bloom:!1},{x:91.84,z:-6.43,species:`round`,height:8.4,radius:3.19,yaw:2.932,tint:.399,phase:.028,crownBase:.45,flex:1,bloom:!1},{x:106.05,z:-5.43,species:`round`,height:9.52,radius:3.62,yaw:5.796,tint:.245,phase:.978,crownBase:.45,flex:1,bloom:!1},{x:90.92,z:-15.72,species:`round`,height:8.54,radius:3.25,yaw:5.741,tint:.372,phase:.238,crownBase:.45,flex:1,bloom:!1},{x:-4.21,z:-24.16,species:`round`,height:11.41,radius:4.34,yaw:.143,tint:.428,phase:.029,crownBase:.45,flex:1,bloom:!1},{x:-13.42,z:-16.87,species:`round`,height:7.91,radius:3.01,yaw:4.015,tint:.311,phase:.808,crownBase:.45,flex:1,bloom:!1},{x:-58.16,z:-10.58,species:`round`,height:9.52,radius:3.62,yaw:3.646,tint:.215,phase:.751,crownBase:.45,flex:1,bloom:!1},{x:-53.55,z:-14.01,species:`round`,height:10.36,radius:3.94,yaw:4.947,tint:.512,phase:.024,crownBase:.45,flex:1,bloom:!1},{x:-41.84,z:-19.3,species:`round`,height:10.43,radius:3.96,yaw:5.762,tint:.59,phase:.862,crownBase:.45,flex:1,bloom:!1},{x:-106.18,z:-4.86,species:`round`,height:10.43,radius:3.96,yaw:4.98,tint:.159,phase:.798,crownBase:.45,flex:1,bloom:!1},{x:-93.68,z:-17.87,species:`round`,height:8.68,radius:3.3,yaw:3.595,tint:.589,phase:.03,crownBase:.45,flex:1,bloom:!1},{x:-93.29,z:-6.86,species:`round`,height:8.19,radius:3.11,yaw:6.066,tint:.453,phase:.079,crownBase:.45,flex:1,bloom:!1},{x:-133.82,z:-4.57,species:`round`,height:10.22,radius:3.88,yaw:1.695,tint:.753,phase:.07,crownBase:.45,flex:1,bloom:!1},{x:-139.34,z:-11.58,species:`round`,height:9.17,radius:3.48,yaw:3.626,tint:.402,phase:.244,crownBase:.45,flex:1,bloom:!1},{x:-126.18,z:-10.44,species:`round`,height:11.27,radius:4.28,yaw:4.638,tint:.8,phase:.588,crownBase:.45,flex:1,bloom:!1},{x:-246.45,z:0,species:`round`,height:11.41,radius:4.34,yaw:3.273,tint:.769,phase:.368,crownBase:.45,flex:1,bloom:!1},{x:-239.34,z:-7,species:`round`,height:7.56,radius:2.87,yaw:1.879,tint:.358,phase:.768,crownBase:.45,flex:1,bloom:!1},{x:-240.26,z:-7.72,species:`round`,height:9.73,radius:3.7,yaw:3.203,tint:.598,phase:.487,crownBase:.45,flex:1,bloom:!1},{x:-269.21,z:-7.86,species:`round`,height:7.49,radius:2.85,yaw:4.275,tint:.004,phase:.085,crownBase:.45,flex:1,bloom:!1},{x:-267.5,z:6.15,species:`round`,height:11.13,radius:4.23,yaw:.372,tint:.387,phase:.426,crownBase:.45,flex:1,bloom:!1},{x:-279.21,z:7,species:`round`,height:9.66,radius:3.67,yaw:5.967,tint:.56,phase:.121,crownBase:.45,flex:1,bloom:!1},{x:-283.29,z:-1.72,species:`round`,height:8.54,radius:3.25,yaw:3.872,tint:.43,phase:.347,crownBase:.45,flex:1,bloom:!1},{x:9.74,z:-127.37,species:`round`,height:8.12,radius:3.09,yaw:2.198,tint:.798,phase:.348,crownBase:.45,flex:1,bloom:!1},{x:-.39,z:-129.66,species:`round`,height:8.33,radius:3.17,yaw:1.085,tint:.342,phase:.942,crownBase:.45,flex:1,bloom:!1},{x:18.82,z:-126.23,species:`round`,height:8.82,radius:3.35,yaw:2.214,tint:.206,phase:.878,crownBase:.45,flex:1,bloom:!1},{x:95.26,z:-66.19,species:`round`,height:10.78,radius:4.1,yaw:2.945,tint:.651,phase:.44,crownBase:.45,flex:1,bloom:!1},{x:117.5,z:-76.91,species:`round`,height:10.08,radius:3.83,yaw:4.024,tint:.416,phase:.002,crownBase:.45,flex:1,bloom:!1},{x:104.21,z:-64.19,species:`round`,height:8.26,radius:3.14,yaw:2.669,tint:.469,phase:.479,crownBase:.45,flex:1,bloom:!1},{x:114.87,z:-53.75,species:`round`,height:10.08,radius:3.83,yaw:2.204,tint:.864,phase:.858,crownBase:.45,flex:1,bloom:!1},{x:95.66,z:-57.32,species:`round`,height:9.03,radius:3.43,yaw:3.867,tint:.435,phase:.725,crownBase:.45,flex:1,bloom:!1},{x:107.5,z:-49.03,species:`round`,height:8.75,radius:3.33,yaw:1.892,tint:.908,phase:.518,crownBase:.45,flex:1,bloom:!1},{x:82.5,z:-63.33,species:`round`,height:7.42,radius:2.82,yaw:3.207,tint:.662,phase:.313,crownBase:.45,flex:1,bloom:!1},{x:77.11,z:-56.61,species:`round`,height:9.1,radius:3.46,yaw:2.125,tint:.001,phase:.226,crownBase:.45,flex:1,bloom:!1},{x:216.71,z:-124.23,species:`round`,height:9.8,radius:3.72,yaw:3.354,tint:.838,phase:.252,crownBase:.45,flex:1,bloom:!1},{x:231.97,z:-119.8,species:`round`,height:8.47,radius:3.22,yaw:3.152,tint:.554,phase:.273,crownBase:.45,flex:1,bloom:!1},{x:205.92,z:-116.51,species:`round`,height:10.01,radius:3.8,yaw:2.585,tint:.628,phase:.626,crownBase:.45,flex:1,bloom:!1},{x:224.47,z:-127.8,species:`round`,height:7.63,radius:2.9,yaw:6.195,tint:.602,phase:.521,crownBase:.45,flex:1,bloom:!1},{x:221.32,z:-136.52,species:`round`,height:9.59,radius:3.64,yaw:1.518,tint:.441,phase:.212,crownBase:.45,flex:1,bloom:!1},{x:239.87,z:-129.52,species:`round`,height:8.68,radius:3.3,yaw:3.961,tint:.657,phase:.783,crownBase:.45,flex:1,bloom:!1},{x:228.03,z:-150.53,species:`round`,height:10.92,radius:4.15,yaw:3.398,tint:.461,phase:.282,crownBase:.45,flex:1,bloom:!1},{x:232.63,z:-140.38,species:`round`,height:8.61,radius:3.27,yaw:2.306,tint:.171,phase:.564,crownBase:.45,flex:1,bloom:!1},{x:199.21,z:-70.62,species:`round`,height:8.89,radius:3.38,yaw:4.883,tint:.155,phase:.879,crownBase:.45,flex:1,bloom:!1},{x:196.71,z:-60.61,species:`round`,height:10.57,radius:4.02,yaw:1.499,tint:.036,phase:.682,crownBase:.45,flex:1,bloom:!1},{x:156.58,z:-46.75,species:`round`,height:10.5,radius:3.99,yaw:.873,tint:.991,phase:.089,crownBase:.45,flex:1,bloom:!1},{x:147.24,z:-43.46,species:`round`,height:10.99,radius:4.18,yaw:3.848,tint:.651,phase:.377,crownBase:.45,flex:1,bloom:!1},{x:142.24,z:-59.9,species:`round`,height:10.08,radius:3.83,yaw:5.953,tint:.776,phase:.086,crownBase:.45,flex:1,bloom:!1},{x:-303.55,z:35.17,species:`round`,height:9.1,radius:3.46,yaw:.174,tint:.185,phase:.175,crownBase:.45,flex:1,bloom:!1},{x:-289.34,z:35.17,species:`round`,height:9.87,radius:3.75,yaw:2.914,tint:.351,phase:.643,crownBase:.45,flex:1,bloom:!1},{x:-214.61,z:92.21,species:`round`,height:10.15,radius:3.86,yaw:3.231,tint:.675,phase:.773,crownBase:.45,flex:1,bloom:!1},{x:-206.45,z:86.77,species:`round`,height:11.34,radius:4.31,yaw:.928,tint:.409,phase:.473,crownBase:.45,flex:1,bloom:!1},{x:-222.76,z:95.64,species:`round`,height:11.41,radius:4.34,yaw:4.848,tint:.446,phase:.774,crownBase:.45,flex:1,bloom:!1},{x:-213.82,z:100.93,species:`round`,height:8.26,radius:3.14,yaw:2.031,tint:.39,phase:.083,crownBase:.45,flex:1,bloom:!1},{x:-177.11,z:87.92,species:`round`,height:9.94,radius:3.78,yaw:3.887,tint:.054,phase:.733,crownBase:.45,flex:1,bloom:!1},{x:-160.92,z:101.5,species:`round`,height:11.27,radius:4.28,yaw:6.095,tint:.926,phase:.709,crownBase:.45,flex:1,bloom:!1},{x:-161.18,z:90.35,species:`round`,height:9.38,radius:3.56,yaw:1.585,tint:.489,phase:.228,crownBase:.45,flex:1,bloom:!1},{x:-177.76,z:99.21,species:`round`,height:10.64,radius:4.04,yaw:6.119,tint:.343,phase:.035,crownBase:.45,flex:1,bloom:!1},{x:-438.29,z:-4.72,species:`round`,height:10.08,radius:3.83,yaw:2.433,tint:.222,phase:.637,crownBase:.45,flex:1,bloom:!1},{x:-435,z:4.15,species:`round`,height:7.77,radius:2.95,yaw:.478,tint:.541,phase:.333,crownBase:.45,flex:1,bloom:!1},{x:-425.53,z:31.45,species:`round`,height:7.35,radius:2.79,yaw:.394,tint:.007,phase:.828,crownBase:.45,flex:1,bloom:!1},{x:-435.79,z:13.44,species:`round`,height:8.05,radius:3.06,yaw:.603,tint:.832,phase:.91,crownBase:.45,flex:1,bloom:!1},{x:-422.63,z:18.87,species:`round`,height:9.59,radius:3.64,yaw:.033,tint:.357,phase:.103,crownBase:.45,flex:1,bloom:!1},{x:-446.45,z:-28.16,species:`round`,height:10.85,radius:4.12,yaw:4.296,tint:.274,phase:.024,crownBase:.45,flex:1,bloom:!1},{x:-422.63,z:-108.93,species:`round`,height:8.4,radius:3.19,yaw:3.112,tint:.238,phase:.21,crownBase:.45,flex:1,bloom:!1},{x:-405.53,z:-92.21,species:`round`,height:7.42,radius:2.82,yaw:5.608,tint:.309,phase:.252,crownBase:.45,flex:1,bloom:!1},{x:-413.95,z:-88.2,species:`round`,height:11.34,radius:4.31,yaw:3.386,tint:.895,phase:.007,crownBase:.45,flex:1,bloom:!1},{x:-420.26,z:-98.64,species:`round`,height:11.13,radius:4.23,yaw:2.236,tint:.016,phase:.582,crownBase:.45,flex:1,bloom:!1},{x:-367.63,z:-28.45,species:`round`,height:7.98,radius:3.03,yaw:.444,tint:.599,phase:.201,crownBase:.45,flex:1,bloom:!1},{x:-379.21,z:-33.74,species:`round`,height:8.05,radius:3.06,yaw:3.26,tint:.327,phase:.46,crownBase:.45,flex:1,bloom:!1},{x:-375.39,z:-24.45,species:`round`,height:9.31,radius:3.54,yaw:2.935,tint:.954,phase:.341,crownBase:.45,flex:1,bloom:!1},{x:-217.89,z:42.17,species:`round`,height:10.5,radius:3.99,yaw:.673,tint:.559,phase:.7,crownBase:.45,flex:1,bloom:!1},{x:-177.24,z:78.62,species:`round`,height:8.75,radius:3.33,yaw:5.368,tint:.437,phase:.763,crownBase:.45,flex:1,bloom:!1},{x:-168.95,z:84.34,species:`round`,height:9.73,radius:3.7,yaw:3.625,tint:.719,phase:.671,crownBase:.45,flex:1,bloom:!1},{x:-167.76,z:96.07,species:`round`,height:8.89,radius:3.38,yaw:4.696,tint:.203,phase:.874,crownBase:.45,flex:1,bloom:!1},{x:-184.21,z:92.92,species:`round`,height:9.59,radius:3.64,yaw:4.134,tint:.573,phase:.999,crownBase:.45,flex:1,bloom:!1},{x:295.66,z:34.17,species:`round`,height:9.8,radius:3.72,yaw:1.065,tint:.166,phase:.521,crownBase:.45,flex:1,bloom:!1},{x:291.58,z:23.73,species:`round`,height:10.71,radius:4.07,yaw:3.659,tint:.209,phase:.97,crownBase:.45,flex:1,bloom:!1},{x:295.39,z:13.72,species:`round`,height:7.56,radius:2.87,yaw:1.114,tint:.61,phase:.58,crownBase:.45,flex:1,bloom:!1},{x:304.21,z:36.6,species:`round`,height:11.27,radius:4.28,yaw:.849,tint:.678,phase:.629,crownBase:.45,flex:1,bloom:!1},{x:228.29,z:84.91,species:`round`,height:8.82,radius:3.35,yaw:1.05,tint:.601,phase:.09,crownBase:.45,flex:1,bloom:!1},{x:240.53,z:94.78,species:`round`,height:9.38,radius:3.56,yaw:2.746,tint:.966,phase:.147,crownBase:.45,flex:1,bloom:!1},{x:246.58,z:79.2,species:`round`,height:11.13,radius:4.23,yaw:1.991,tint:.688,phase:.671,crownBase:.45,flex:1,bloom:!1},{x:-456.84,z:-71.91,species:`round`,height:7.63,radius:2.9,yaw:.791,tint:.897,phase:.089,crownBase:.45,flex:1,bloom:!1},{x:-432.89,z:-78.05,species:`round`,height:10.29,radius:3.91,yaw:2.349,tint:.671,phase:.032,crownBase:.45,flex:1,bloom:!1},{x:-359.34,z:-142.1,species:`round`,height:10.64,radius:4.04,yaw:5.026,tint:.934,phase:.926,crownBase:.45,flex:1,bloom:!1},{x:-375.79,z:-145.96,species:`round`,height:8.68,radius:3.3,yaw:2.309,tint:.448,phase:.577,crownBase:.45,flex:1,bloom:!1},{x:-377.24,z:-134.95,species:`round`,height:7.91,radius:3.01,yaw:1.82,tint:.093,phase:.11,crownBase:.45,flex:1,bloom:!1},{x:-367.11,z:-145.67,species:`round`,height:10.5,radius:3.99,yaw:4.074,tint:.565,phase:.594,crownBase:.45,flex:1,bloom:!1},{x:-364.74,z:-135.66,species:`round`,height:9.94,radius:3.78,yaw:4.386,tint:.465,phase:.908,crownBase:.45,flex:1,bloom:!1},{x:-198.16,z:-142.81,species:`round`,height:7.98,radius:3.03,yaw:1.525,tint:.22,phase:.125,crownBase:.45,flex:1,bloom:!1},{x:-211.58,z:-136.52,species:`round`,height:8.89,radius:3.38,yaw:2.905,tint:.422,phase:.174,crownBase:.45,flex:1,bloom:!1},{x:-215.92,z:-149.82,species:`round`,height:8.4,radius:3.19,yaw:.672,tint:.796,phase:.343,crownBase:.45,flex:1,bloom:!1},{x:-209.87,z:-157.39,species:`round`,height:11.34,radius:4.31,yaw:5.598,tint:.902,phase:.658,crownBase:.45,flex:1,bloom:!1},{x:-198.03,z:-153.68,species:`round`,height:8.89,radius:3.38,yaw:4.374,tint:.186,phase:.535,crownBase:.45,flex:1,bloom:!1},{x:-219.08,z:-141.52,species:`round`,height:10.08,radius:3.83,yaw:5.115,tint:.905,phase:.552,crownBase:.45,flex:1,bloom:!1},{x:-205.92,z:-128.66,species:`round`,height:7.42,radius:2.82,yaw:.558,tint:.438,phase:.352,crownBase:.45,flex:1,bloom:!1},{x:-206.97,z:-114.65,species:`round`,height:7.7,radius:2.93,yaw:2.196,tint:.914,phase:.528,crownBase:.45,flex:1,bloom:!1},{x:-448.03,z:91.92,species:`round`,height:9.03,radius:3.43,yaw:4.416,tint:.369,phase:.481,crownBase:.45,flex:1,bloom:!1},{x:-443.68,z:81.91,species:`round`,height:10.43,radius:3.96,yaw:5.887,tint:.238,phase:.927,crownBase:.45,flex:1,bloom:!1},{x:-436.71,z:75.05,species:`round`,height:11.34,radius:4.31,yaw:1.373,tint:.384,phase:.003,crownBase:.45,flex:1,bloom:!1},{x:-442.5,z:99.35,species:`round`,height:9.8,radius:3.72,yaw:1.365,tint:.977,phase:.835,crownBase:.45,flex:1,bloom:!1},{x:-386.58,z:58.04,species:`round`,height:9.8,radius:3.72,yaw:3.441,tint:.248,phase:.488,crownBase:.45,flex:1,bloom:!1},{x:-376.97,z:61.76,species:`round`,height:8.89,radius:3.38,yaw:6.262,tint:.597,phase:.803,crownBase:.45,flex:1,bloom:!1},{x:-382.89,z:74.48,species:`round`,height:7.98,radius:3.03,yaw:5.407,tint:.27,phase:.066,crownBase:.45,flex:1,bloom:!1},{x:-348.68,z:117.37,species:`round`,height:8.89,radius:3.38,yaw:3.693,tint:.404,phase:.984,crownBase:.45,flex:1,bloom:!1},{x:-332.11,z:110.5,species:`round`,height:10.78,radius:4.1,yaw:.407,tint:.264,phase:.579,crownBase:.45,flex:1,bloom:!1},{x:-338.55,z:119.65,species:`round`,height:9.38,radius:3.56,yaw:1.171,tint:.536,phase:.083,crownBase:.45,flex:1,bloom:!1},{x:-347.76,z:107.07,species:`round`,height:9.38,radius:3.56,yaw:1.091,tint:.848,phase:.185,crownBase:.45,flex:1,bloom:!1},{x:-338.82,z:101.21,species:`round`,height:8.61,radius:3.27,yaw:4.208,tint:.708,phase:.102,crownBase:.45,flex:1,bloom:!1},{x:-277.76,z:63.47,species:`round`,height:10.85,radius:4.12,yaw:1.424,tint:.492,phase:.982,crownBase:.45,flex:1,bloom:!1},{x:-264.34,z:78.48,species:`round`,height:10.43,radius:3.96,yaw:6.225,tint:.177,phase:.298,crownBase:.45,flex:1,bloom:!1},{x:-288.16,z:77.91,species:`round`,height:7.56,radius:2.87,yaw:.926,tint:.352,phase:.411,crownBase:.45,flex:1,bloom:!1},{x:-234.61,z:95.64,species:`round`,height:7.84,radius:2.98,yaw:1.636,tint:.754,phase:.83,crownBase:.45,flex:1,bloom:!1},{x:-235.13,z:86.49,species:`round`,height:9.8,radius:3.72,yaw:3.276,tint:.782,phase:.434,crownBase:.45,flex:1,bloom:!1},{x:-228.95,z:103.78,species:`round`,height:10.78,radius:4.1,yaw:3.748,tint:.52,phase:.674,crownBase:.45,flex:1,bloom:!1},{x:-218.03,z:118.37,species:`round`,height:8.47,radius:3.22,yaw:2.051,tint:.432,phase:.47,crownBase:.45,flex:1,bloom:!1},{x:-205.39,z:109.22,species:`round`,height:8.33,radius:3.17,yaw:3.681,tint:.074,phase:.636,crownBase:.45,flex:1,bloom:!1},{x:-218.03,z:109.07,species:`round`,height:7.7,radius:2.93,yaw:2.235,tint:.336,phase:.672,crownBase:.45,flex:1,bloom:!1},{x:-205.26,z:119.08,species:`round`,height:10.71,radius:4.07,yaw:5.47,tint:.215,phase:.69,crownBase:.45,flex:1,bloom:!1},{x:-123.95,z:60.76,species:`round`,height:10.01,radius:3.8,yaw:1.545,tint:.183,phase:.146,crownBase:.45,flex:1,bloom:!1},{x:-126.58,z:80.48,species:`round`,height:7.56,radius:2.87,yaw:.921,tint:.917,phase:.616,crownBase:.45,flex:1,bloom:!1},{x:-114.61,z:81.05,species:`round`,height:9.73,radius:3.7,yaw:2.675,tint:.166,phase:.255,crownBase:.45,flex:1,bloom:!1},{x:-118.29,z:72.76,species:`round`,height:8.75,radius:3.33,yaw:1.561,tint:.689,phase:.751,crownBase:.45,flex:1,bloom:!1},{x:-108.95,z:73.48,species:`round`,height:8.89,radius:3.38,yaw:3.75,tint:.924,phase:.52,crownBase:.45,flex:1,bloom:!1},{x:-71.45,z:44.17,species:`round`,height:8.19,radius:3.11,yaw:1.51,tint:.491,phase:.194,crownBase:.45,flex:1,bloom:!1},{x:-60.92,z:44.74,species:`round`,height:10.78,radius:4.1,yaw:2.378,tint:.561,phase:.501,crownBase:.45,flex:1,bloom:!1},{x:-80.79,z:46.75,species:`round`,height:9.03,radius:3.43,yaw:3.628,tint:.512,phase:.275,crownBase:.45,flex:1,bloom:!1},{x:-75.92,z:59.61,species:`round`,height:8.33,radius:3.17,yaw:2.919,tint:.097,phase:.263,crownBase:.45,flex:1,bloom:!1},{x:-60,z:55.89,species:`round`,height:10.01,radius:3.8,yaw:2.747,tint:.034,phase:.373,crownBase:.45,flex:1,bloom:!1},{x:53.03,z:84.91,species:`round`,height:10.99,radius:4.18,yaw:3.412,tint:.961,phase:.497,crownBase:.45,flex:1,bloom:!1},{x:64.61,z:90.63,species:`round`,height:7.91,radius:3.01,yaw:4.596,tint:.964,phase:.022,crownBase:.45,flex:1,bloom:!1},{x:65.79,z:80.48,species:`round`,height:10.57,radius:4.02,yaw:2.916,tint:.917,phase:.635,crownBase:.45,flex:1,bloom:!1},{x:42.89,z:85.34,species:`round`,height:9.52,radius:3.62,yaw:6.146,tint:.592,phase:.192,crownBase:.45,flex:1,bloom:!1},{x:59.74,z:73.62,species:`round`,height:7.35,radius:2.79,yaw:.562,tint:.754,phase:.302,crownBase:.45,flex:1,bloom:!1},{x:137.24,z:75.77,species:`round`,height:8.82,radius:3.35,yaw:4.632,tint:.924,phase:.185,crownBase:.45,flex:1,bloom:!1},{x:154.47,z:81.2,species:`round`,height:8.75,radius:3.33,yaw:1.598,tint:.323,phase:.956,crownBase:.45,flex:1,bloom:!1},{x:144.21,z:89.2,species:`round`,height:10.01,radius:3.8,yaw:6.105,tint:.15,phase:.017,crownBase:.45,flex:1,bloom:!1},{x:145.39,z:79.34,species:`round`,height:9.17,radius:3.48,yaw:1.085,tint:.915,phase:.007,crownBase:.45,flex:1,bloom:!1},{x:134.08,z:128.37,species:`round`,height:10.64,radius:4.04,yaw:2.46,tint:.867,phase:.833,crownBase:.45,flex:1,bloom:!1},{x:144.34,z:120.65,species:`round`,height:11.55,radius:4.39,yaw:2.652,tint:.385,phase:.887,crownBase:.45,flex:1,bloom:!1},{x:135.92,z:137.38,species:`round`,height:9.59,radius:3.64,yaw:.979,tint:.195,phase:.671,crownBase:.45,flex:1,bloom:!1},{x:123.82,z:125.66,species:`round`,height:8.89,radius:3.38,yaw:4.798,tint:.835,phase:.733,crownBase:.45,flex:1,bloom:!1},{x:145.13,z:136.52,species:`round`,height:9.73,radius:3.7,yaw:4.328,tint:.775,phase:.486,crownBase:.45,flex:1,bloom:!1},{x:126.97,z:136.09,species:`round`,height:9.87,radius:3.75,yaw:3.045,tint:.62,phase:.071,crownBase:.45,flex:1,bloom:!1},{x:304.87,z:109.36,species:`round`,height:9.87,radius:3.75,yaw:.308,tint:.034,phase:.377,crownBase:.45,flex:1,bloom:!1},{x:311.45,z:95.35,species:`round`,height:8.82,radius:3.35,yaw:5.597,tint:.175,phase:.569,crownBase:.45,flex:1,bloom:!1},{x:322.37,z:109.79,species:`round`,height:8.12,radius:3.09,yaw:2.532,tint:.515,phase:.715,crownBase:.45,flex:1,bloom:!1},{x:313.55,z:103.64,species:`round`,height:10.78,radius:4.1,yaw:5.642,tint:.862,phase:.068,crownBase:.45,flex:1,bloom:!1},{x:300.79,z:100.5,species:`round`,height:9.59,radius:3.64,yaw:1.548,tint:.321,phase:.879,crownBase:.45,flex:1,bloom:!1},{x:439.21,z:-121.51,species:`round`,height:11.34,radius:4.31,yaw:1.261,tint:.945,phase:.983,crownBase:.45,flex:1,bloom:!1},{x:432.89,z:-136.81,species:`round`,height:8.89,radius:3.38,yaw:1.534,tint:.929,phase:.324,crownBase:.45,flex:1,bloom:!1},{x:433.42,z:-128.37,species:`round`,height:7.56,radius:2.87,yaw:1.257,tint:.934,phase:.725,crownBase:.45,flex:1,bloom:!1},{x:422.24,z:-140.09,species:`round`,height:7.77,radius:2.95,yaw:3.39,tint:.441,phase:.224,crownBase:.45,flex:1,bloom:!1},{x:442.76,z:-135.38,species:`round`,height:8.12,radius:3.09,yaw:4.84,tint:.567,phase:.149,crownBase:.45,flex:1,bloom:!1},{x:423.03,z:-131.37,species:`round`,height:9.38,radius:3.56,yaw:2.232,tint:.62,phase:.166,crownBase:.45,flex:1,bloom:!1},{x:456.71,z:-29.16,species:`round`,height:7.84,radius:2.98,yaw:.926,tint:.716,phase:.674,crownBase:.45,flex:1,bloom:!1},{x:446.18,z:-33.88,species:`round`,height:7.42,radius:2.82,yaw:.71,tint:.196,phase:.492,crownBase:.45,flex:1,bloom:!1},{x:452.24,z:-41.31,species:`round`,height:11.34,radius:4.31,yaw:4.285,tint:.737,phase:.468,crownBase:.45,flex:1,bloom:!1},{x:448.42,z:-24.73,species:`round`,height:10.01,radius:3.8,yaw:4.016,tint:.884,phase:.294,crownBase:.45,flex:1,bloom:!1},{x:36.32,z:17.01,species:`round`,height:10.15,radius:3.86,yaw:1.939,tint:.049,phase:.717,crownBase:.45,flex:1,bloom:!1},{x:324.47,z:-50.89,species:`round`,height:9.38,radius:3.56,yaw:2.076,tint:.295,phase:.861,crownBase:.45,flex:1,bloom:!1},{x:326.05,z:-59.18,species:`round`,height:11.06,radius:4.2,yaw:5.263,tint:.657,phase:.058,crownBase:.45,flex:1,bloom:!1},{x:327.63,z:-44.6,species:`round`,height:10.57,radius:4.02,yaw:5.365,tint:.998,phase:.393,crownBase:.45,flex:1,bloom:!1},{x:373.82,z:-85.06,species:`round`,height:7.35,radius:2.79,yaw:2.461,tint:.469,phase:.459,crownBase:.45,flex:1,bloom:!1},{x:376.71,z:-91.49,species:`round`,height:10.15,radius:3.86,yaw:3.966,tint:.856,phase:.921,crownBase:.45,flex:1,bloom:!1},{x:381.05,z:-83.91,species:`round`,height:9.8,radius:3.72,yaw:2.927,tint:.634,phase:.56,crownBase:.45,flex:1,bloom:!1},{x:-278.55,z:-37.03,species:`round`,height:8.12,radius:3.09,yaw:.219,tint:.324,phase:.506,crownBase:.45,flex:1,bloom:!1},{x:-285.39,z:-25.73,species:`round`,height:7.91,radius:3.01,yaw:5.028,tint:.999,phase:.144,crownBase:.45,flex:1,bloom:!1},{x:-287.37,z:-37.6,species:`round`,height:9.59,radius:3.64,yaw:2.673,tint:.572,phase:.745,crownBase:.45,flex:1,bloom:!1},{x:-272.24,z:-42.03,species:`round`,height:9.59,radius:3.64,yaw:5.934,tint:.798,phase:.62,crownBase:.45,flex:1,bloom:!1},{x:-284.61,z:-14.87,species:`round`,height:8.68,radius:3.3,yaw:.885,tint:.14,phase:.465,crownBase:.45,flex:1,bloom:!1},{x:-279.74,z:-20.16,species:`round`,height:9.52,radius:3.62,yaw:4.495,tint:.483,phase:.016,crownBase:.45,flex:1,bloom:!1},{x:-278.82,z:-44.74,species:`round`,height:10.01,radius:3.8,yaw:4.112,tint:.665,phase:.972,crownBase:.45,flex:1,bloom:!1},{x:-272.63,z:-16.3,species:`round`,height:8.47,radius:3.22,yaw:4.286,tint:.494,phase:.932,crownBase:.45,flex:1,bloom:!1},{x:-189.34,z:21.16,species:`round`,height:8.12,radius:3.09,yaw:4.291,tint:.475,phase:.422,crownBase:.45,flex:1,bloom:!1},{x:-189.34,z:21.16,species:`round`,height:6.44,radius:2.45,yaw:2.559,tint:.789,phase:.318,crownBase:.45,flex:1,bloom:!1},{x:-225,z:7,species:`round`,height:7.91,radius:3.01,yaw:3.238,tint:.134,phase:.877,crownBase:.45,flex:1,bloom:!1},{x:-182.11,z:14.01,species:`round`,height:6.51,radius:2.47,yaw:3.5,tint:.183,phase:.943,crownBase:.45,flex:1,bloom:!1},{x:-225,z:-21.16,species:`round`,height:6.79,radius:2.58,yaw:3.506,tint:.039,phase:.691,crownBase:.45,flex:1,bloom:!1},{x:-182.11,z:14.01,species:`round`,height:7.28,radius:2.77,yaw:5.515,tint:.84,phase:.92,crownBase:.45,flex:1,bloom:!1},{x:-225,z:-21.16,species:`round`,height:8.26,radius:3.14,yaw:5.856,tint:.7,phase:.402,crownBase:.45,flex:1,bloom:!1},{x:-189.34,z:21.16,species:`round`,height:7.42,radius:2.82,yaw:3.167,tint:.621,phase:.368,crownBase:.45,flex:1,bloom:!1},{x:-175,z:-14.01,species:`round`,height:6.02,radius:2.29,yaw:2.998,tint:.725,phase:.751,crownBase:.45,flex:1,bloom:!1},{x:-175,z:-14.01,species:`round`,height:5.74,radius:2.18,yaw:.604,tint:.091,phase:.88,crownBase:.45,flex:1,bloom:!1},{x:316.45,z:-42.89,species:`round`,height:7.28,radius:2.77,yaw:.444,tint:.452,phase:.192,crownBase:.45,flex:1,bloom:!1},{x:333.82,z:-52.18,species:`round`,height:7.49,radius:2.85,yaw:2.387,tint:.463,phase:.725,crownBase:.45,flex:1,bloom:!1},{x:329.47,z:-53.32,species:`round`,height:8.12,radius:3.09,yaw:2.797,tint:.256,phase:.587,crownBase:.45,flex:1,bloom:!1},{x:320.13,z:-50.61,species:`round`,height:7.42,radius:2.82,yaw:3.573,tint:.549,phase:.341,crownBase:.45,flex:1,bloom:!1},{x:315.66,z:-50.46,species:`round`,height:7.28,radius:2.77,yaw:2.076,tint:.893,phase:.193,crownBase:.45,flex:1,bloom:!1},{x:337.89,z:-50.75,species:`round`,height:6.44,radius:2.45,yaw:5.782,tint:.153,phase:.499,crownBase:.45,flex:1,bloom:!1},{x:328.29,z:-40.03,species:`round`,height:6.51,radius:2.47,yaw:.109,tint:.054,phase:.812,crownBase:.45,flex:1,bloom:!1},{x:321.18,z:-60.76,species:`round`,height:8.05,radius:3.06,yaw:2.414,tint:.595,phase:.436,crownBase:.45,flex:1,bloom:!1},{x:324.74,z:-37.31,species:`round`,height:9.03,radius:3.43,yaw:.979,tint:.447,phase:.163,crownBase:.45,flex:1,bloom:!1},{x:328.29,z:-67.9,species:`round`,height:7.63,radius:2.9,yaw:2.474,tint:.601,phase:.496,crownBase:.45,flex:1,bloom:!1},{x:316.71,z:-64.47,species:`round`,height:7.35,radius:2.79,yaw:5.61,tint:.946,phase:.975,crownBase:.45,flex:1,bloom:!1},{x:325,z:-64.62,species:`round`,height:7.49,radius:2.85,yaw:1.44,tint:.881,phase:.965,crownBase:.45,flex:1,bloom:!1},{x:340.66,z:-89.92,species:`round`,height:5.88,radius:2.23,yaw:5.398,tint:.25,phase:.829,crownBase:.45,flex:1,bloom:!1},{x:339.47,z:-88.77,species:`round`,height:5.67,radius:2.15,yaw:4.018,tint:.739,phase:.883,crownBase:.45,flex:1,bloom:!1}],fields:[{rgb:[.604,.49,.31],cells:[[-496.43,-105.5],[-496.43,-98.47],[-496.43,-91.43],[-496.43,-84.4],[-496.43,-77.37],[-496.43,-70.33],[-496.43,119.57],[-489.29,-112.53],[-489.29,-105.5],[-489.29,-70.33],[-489.29,119.57],[-482.14,-105.5],[-482.14,-77.37],[-482.14,-70.33],[-482.14,-63.3],[-475,-84.4],[-475,-63.3],[-467.86,-98.47],[-460.71,-105.5],[-460.71,-98.47],[-453.57,-98.47],[-453.57,-84.4],[-453.57,112.53],[-446.43,-84.4],[-446.43,112.53],[-446.43,119.57],[-439.29,-84.4],[-439.29,112.53],[-439.29,119.57],[-432.14,-91.43],[-432.14,-84.4],[-425,-91.43],[-410.71,-112.53],[-410.71,105.5],[-410.71,112.53],[-403.57,-112.53],[-403.57,-105.5],[-403.57,-98.47],[-403.57,84.4],[-403.57,98.47],[-403.57,119.57],[-396.43,-112.53],[-396.43,-105.5],[-396.43,-98.47],[-396.43,-84.4],[-396.43,56.27],[-396.43,91.43],[-396.43,98.47],[-396.43,119.57],[-389.29,-112.53],[-389.29,91.43],[-389.29,98.47],[-389.29,105.5],[-382.14,-112.53],[-375,-98.47],[-375,-84.4],[-375,-77.37],[-367.86,-91.43],[-353.57,-56.27],[-353.57,-49.23],[-346.43,-112.53],[-346.43,-91.43],[-346.43,-70.33],[-346.43,-49.23],[-346.43,-21.1],[-339.29,-105.5],[-339.29,-77.37],[-339.29,-70.33],[-339.29,-21.1],[-332.14,-105.5],[-332.14,-98.47],[-332.14,-91.43],[-332.14,-84.4],[-332.14,-77.37],[-325,-112.53],[-325,-84.4],[-325,-70.33],[-317.86,-105.5],[-317.86,-91.43],[-317.86,-84.4],[-317.86,-77.37],[-317.86,-70.33],[-317.86,-63.3],[-317.86,-56.27],[-310.71,-98.47],[-310.71,-91.43],[-310.71,-84.4],[-310.71,-77.37],[-310.71,-70.33],[-310.71,-63.3],[-310.71,-56.27],[-303.57,-98.47],[-303.57,-91.43],[-303.57,-84.4],[-303.57,-77.37],[-303.57,-70.33],[-296.43,-98.47],[-296.43,-91.43],[-296.43,-84.4],[-289.29,-112.53],[-289.29,-105.5],[-282.14,-112.53],[-282.14,-105.5],[-282.14,-98.47],[-282.14,-91.43],[-282.14,-84.4],[-275,-112.53],[-267.86,-98.47],[-267.86,-91.43],[-260.71,-105.5],[-260.71,-98.47],[-260.71,-91.43],[-260.71,-84.4],[-253.57,-105.5],[-253.57,-98.47],[-246.43,-105.5],[-246.43,-98.47],[-246.43,-91.43],[-239.29,-105.5],[-239.29,-98.47],[-239.29,-91.43],[-232.14,-112.53],[-225,-112.53],[-225,-98.47],[-225,-91.43],[-217.86,-98.47],[-217.86,-91.43],[-210.71,-98.47],[-210.71,-84.4],[-203.57,-84.4],[-153.57,-42.2],[-146.43,-112.53],[-146.43,-98.47],[-146.43,-91.43],[-146.43,-77.37],[-146.43,-70.33],[-146.43,-56.27],[-146.43,-35.17],[-139.29,-77.37],[-139.29,-63.3],[-139.29,-56.27],[-139.29,-49.23],[-139.29,-35.17],[-139.29,-28.13],[-132.14,-105.5],[-132.14,-77.37],[-132.14,-70.33],[-132.14,-63.3],[-132.14,-56.27],[-132.14,-49.23],[-132.14,-42.2],[-132.14,-35.17],[-132.14,-28.13],[-132.14,-21.1],[-132.14,-14.07],[-125,-112.53],[-125,-105.5],[-125,-91.43],[-125,-84.4],[-125,-77.37],[-125,-70.33],[-125,-56.27],[-125,-49.23],[-125,-42.2],[-125,-35.17],[-125,-28.13],[-125,-14.07],[-125,-7.03],[-125,84.4],[-125,91.43],[-125,98.47],[-125,105.5],[-125,112.53],[-117.86,-112.53],[-117.86,-105.5],[-117.86,-98.47],[-117.86,-91.43],[-117.86,-84.4],[-117.86,-77.37],[-117.86,-70.33],[-117.86,-63.3],[-117.86,-42.2],[-117.86,-35.17],[-117.86,-28.13],[-117.86,-21.1],[-117.86,-14.07],[-117.86,-7.03],[-117.86,98.47],[-117.86,105.5],[-117.86,112.53],[-110.71,-112.53],[-110.71,-105.5],[-110.71,-98.47],[-110.71,-91.43],[-110.71,-84.4],[-110.71,-77.37],[-110.71,-70.33],[-110.71,-42.2],[-110.71,-35.17],[-110.71,-28.13],[-110.71,77.37],[-103.57,-105.5],[-103.57,-98.47],[-103.57,-63.3],[-103.57,-42.2],[-103.57,-35.17],[-103.57,-28.13],[-103.57,-21.1],[-103.57,-14.07],[-103.57,77.37],[-103.57,84.4],[-103.57,91.43],[-103.57,98.47],[-103.57,105.5],[-103.57,112.53],[-96.43,-112.53],[-96.43,-105.5],[-96.43,-98.47],[-96.43,-91.43],[-96.43,-70.33],[-96.43,-63.3],[-96.43,-56.27],[-96.43,-49.23],[-96.43,-42.2],[-96.43,-35.17],[-96.43,-28.13],[-96.43,-21.1],[-96.43,-14.07],[-96.43,-7.03],[-96.43,91.43],[-96.43,98.47],[-96.43,105.5],[-96.43,112.53],[-89.29,-70.33],[-89.29,-63.3],[-89.29,-49.23],[-89.29,-42.2],[-89.29,-35.17],[-89.29,-28.13],[-89.29,-21.1],[-89.29,-14.07],[-89.29,-7.03],[-89.29,77.37],[-89.29,98.47],[-89.29,105.5],[-89.29,112.53],[-82.14,-105.5],[-82.14,-98.47],[-82.14,-77.37],[-82.14,-70.33],[-82.14,-63.3],[-82.14,-56.27],[-82.14,-49.23],[-82.14,-42.2],[-82.14,-35.17],[-82.14,-28.13],[-82.14,-21.1],[-82.14,-14.07],[-82.14,-7.03],[-82.14,77.37],[-82.14,84.4],[-82.14,91.43],[-82.14,105.5],[-82.14,112.53],[-75,-112.53],[-75,-105.5],[-75,-98.47],[-75,-91.43],[-75,-84.4],[-75,-77.37],[-75,-70.33],[-75,-63.3],[-75,-56.27],[-75,-49.23],[-75,-42.2],[-75,-35.17],[-75,-28.13],[-75,-21.1],[-75,-7.03],[-75,77.37],[-75,84.4],[-75,91.43],[-75,98.47],[-67.86,-105.5],[-67.86,-98.47],[-67.86,-91.43],[-67.86,-84.4],[-67.86,-77.37],[-67.86,-70.33],[-67.86,-63.3],[-67.86,-56.27],[-67.86,-49.23],[-67.86,-35.17],[-67.86,-28.13],[-67.86,-21.1],[-67.86,-14.07],[-67.86,-7.03],[-67.86,77.37],[-67.86,84.4],[-67.86,91.43],[-67.86,98.47],[-67.86,105.5],[-67.86,112.53],[-60.71,-112.53],[-60.71,-105.5],[-60.71,-98.47],[-60.71,-91.43],[-60.71,-84.4],[-60.71,-77.37],[-60.71,-70.33],[-60.71,-63.3],[-60.71,-56.27],[-60.71,-49.23],[-60.71,-42.2],[-60.71,-35.17],[-60.71,-21.1],[-60.71,-14.07],[-60.71,28.13],[-60.71,35.17],[-60.71,49.23],[-60.71,56.27],[-60.71,70.33],[-60.71,77.37],[-60.71,84.4],[-60.71,91.43],[-60.71,98.47],[-60.71,105.5],[-60.71,112.53],[-53.57,-112.53],[-53.57,-105.5],[-53.57,-91.43],[-53.57,-84.4],[-53.57,-77.37],[-53.57,-70.33],[-53.57,-63.3],[-53.57,-56.27],[-53.57,-49.23],[-53.57,-42.2],[-53.57,-35.17],[-53.57,-28.13],[-53.57,-14.07],[-53.57,28.13],[-53.57,35.17],[-53.57,63.3],[-53.57,70.33],[-53.57,77.37],[-53.57,84.4],[-53.57,91.43],[-53.57,98.47],[-53.57,105.5],[-53.57,112.53],[-46.43,-112.53],[-46.43,-105.5],[-46.43,-77.37],[-46.43,-70.33],[-46.43,-63.3],[-46.43,-56.27],[-46.43,-49.23],[-46.43,-35.17],[-46.43,-28.13],[-46.43,21.1],[-46.43,28.13],[-46.43,35.17],[-46.43,42.2],[-46.43,49.23],[-46.43,56.27],[-46.43,91.43],[-46.43,98.47],[-46.43,105.5],[-46.43,112.53],[-39.29,-112.53],[-39.29,-105.5],[-39.29,-98.47],[-39.29,-77.37],[-39.29,-70.33],[-39.29,-63.3],[-39.29,-56.27],[-39.29,-28.13],[-39.29,42.2],[-39.29,49.23],[-39.29,56.27],[-39.29,63.3],[-39.29,77.37],[-39.29,84.4],[-39.29,91.43],[-32.14,-112.53],[-32.14,-105.5],[-32.14,-98.47],[-32.14,-91.43],[-32.14,-84.4],[-32.14,-77.37],[-32.14,-70.33],[-32.14,-63.3],[-32.14,-56.27],[-32.14,-49.23],[-32.14,35.17],[-32.14,42.2],[-32.14,49.23],[-32.14,56.27],[-32.14,63.3],[-32.14,77.37],[-32.14,84.4],[-32.14,112.53],[-25,-112.53],[-25,-105.5],[-25,-98.47],[-25,-91.43],[-25,-84.4],[-25,-77.37],[-25,-70.33],[-25,-63.3],[-25,-56.27],[-25,-49.23],[-25,-42.2],[-25,35.17],[-25,42.2],[-25,49.23],[-25,56.27],[-25,63.3],[-25,91.43],[-25,98.47],[-25,105.5],[-25,112.53],[-17.86,-112.53],[-17.86,-105.5],[-17.86,-98.47],[-17.86,-91.43],[-17.86,-84.4],[-17.86,-77.37],[-17.86,-70.33],[-17.86,-63.3],[-17.86,-56.27],[-17.86,-49.23],[-17.86,-42.2],[-17.86,-35.17],[-17.86,21.1],[-17.86,35.17],[-17.86,91.43],[-10.71,-112.53],[-10.71,-105.5],[-10.71,-98.47],[-10.71,-91.43],[-10.71,-84.4],[-10.71,-77.37],[-10.71,-70.33],[-10.71,-49.23],[-10.71,-42.2],[-10.71,21.1],[-10.71,56.27],[-10.71,91.43],[-3.57,-112.53],[-3.57,-105.5],[-3.57,-98.47],[-3.57,-91.43],[-3.57,-84.4],[-3.57,-77.37],[-3.57,-70.33],[-3.57,-63.3],[-3.57,35.17],[-3.57,91.43],[-3.57,98.47],[-3.57,105.5]]},{rgb:[.541,.71,.451],cells:[[-496.43,-56.27],[-496.43,-35.17],[-496.43,42.2],[-496.43,49.23],[-496.43,84.4],[-489.29,91.43],[-475,-70.33],[-475,105.5],[-467.86,-49.23],[-460.71,119.57],[-453.57,98.47],[-446.43,-77.37],[-446.43,98.47],[-439.29,91.43],[-432.14,119.57],[-425,112.53],[-417.86,77.37],[-410.71,49.23],[-403.57,28.13],[-403.57,49.23],[-389.29,-28.13],[-389.29,-21.1],[-389.29,42.2],[-382.14,-14.07],[-375,-35.17],[-375,-21.1],[-375,-14.07],[-360.71,-21.1],[-360.71,-14.07],[-339.29,-112.53],[-339.29,-49.23],[-310.71,-21.1],[-303.57,-35.17],[-275,-98.47],[-260.71,-42.2],[-260.71,-35.17],[-260.71,-28.13],[-260.71,-21.1],[-253.57,-84.4],[-253.57,-42.2],[-253.57,-35.17],[-253.57,-28.13],[-253.57,-21.1],[-246.43,-42.2],[-246.43,-35.17],[-246.43,-28.13],[-246.43,-21.1],[-239.29,-112.53],[-239.29,-42.2],[-239.29,-35.17],[-239.29,-28.13],[-239.29,-21.1],[-232.14,-42.2],[-232.14,-35.17],[-232.14,-28.13],[-232.14,-21.1],[-225,-84.4],[-225,-42.2],[-225,-35.17],[-225,-28.13],[-225,-21.1],[-139.29,-105.5],[-139.29,-98.47],[-139.29,-91.43],[-139.29,-84.4],[-139.29,-70.33],[-139.29,-21.1],[-139.29,0],[-132.14,-112.53],[-132.14,0],[-117.86,-49.23],[-117.86,77.37],[-110.71,-56.27],[-110.71,-49.23],[-103.57,-84.4],[-103.57,-77.37],[-103.57,-56.27],[-103.57,-7.03],[-96.43,-84.4],[-96.43,-77.37],[-89.29,84.4],[-60.71,-7.03],[-46.43,-21.1],[-46.43,14.07],[-46.43,84.4],[-39.29,14.07],[-32.14,-119.57],[-25,-119.57],[-25,-28.13],[-17.86,-119.57],[-17.86,63.3],[-17.86,70.33],[-17.86,105.5],[-10.71,-119.57],[-10.71,-63.3],[-3.57,-119.57],[3.57,-119.57],[3.57,-112.53],[3.57,-105.5],[3.57,-98.47],[10.71,-119.57],[10.71,-112.53],[10.71,-105.5],[10.71,-98.47],[17.86,-119.57],[17.86,-112.53],[17.86,-105.5],[17.86,-98.47],[25,-119.57],[25,-112.53],[25,-105.5],[25,-98.47],[32.14,-119.57],[32.14,-112.53],[32.14,-105.5],[32.14,-98.47],[39.29,-119.57],[39.29,-112.53],[39.29,-105.5],[39.29,-98.47],[46.43,-119.57],[46.43,-112.53],[46.43,-105.5],[46.43,-98.47],[53.57,-119.57],[53.57,-112.53],[53.57,-105.5],[53.57,-98.47],[60.71,-119.57],[60.71,-112.53],[60.71,-105.5],[60.71,-98.47]]},{rgb:[.624,.761,.478],cells:[[-496.43,56.27],[-496.43,98.47],[-496.43,112.53],[-489.29,49.23],[-489.29,84.4],[-489.29,98.47],[-489.29,105.5],[-482.14,-56.27],[-482.14,84.4],[-467.86,77.37],[-460.71,63.3],[-460.71,112.53],[-446.43,-98.47],[-446.43,-91.43],[-439.29,-112.53],[-439.29,-105.5],[-439.29,-98.47],[-439.29,-91.43],[-439.29,84.4],[-439.29,98.47],[-432.14,-112.53],[-432.14,-105.5],[-432.14,-98.47],[-432.14,112.53],[-425,-112.53],[-425,-105.5],[-425,-98.47],[-425,35.17],[-425,56.27],[-425,105.5],[-425,119.57],[-417.86,-112.53],[-417.86,-105.5],[-417.86,-84.4],[-417.86,-77.37],[-417.86,56.27],[-417.86,63.3],[-417.86,70.33],[-417.86,84.4],[-417.86,98.47],[-417.86,105.5],[-417.86,119.57],[-410.71,-105.5],[-410.71,-77.37],[-410.71,35.17],[-410.71,63.3],[-410.71,70.33],[-410.71,77.37],[-410.71,119.57],[-403.57,-84.4],[-403.57,35.17],[-403.57,42.2],[-403.57,56.27],[-403.57,70.33],[-403.57,77.37],[-396.43,-21.1],[-396.43,35.17],[-396.43,42.2],[-396.43,63.3],[-396.43,70.33],[-389.29,-35.17],[-389.29,-14.07],[-389.29,-7.03],[-389.29,35.17],[-389.29,63.3],[-389.29,84.4],[-382.14,-84.4],[-382.14,-77.37],[-382.14,-35.17],[-382.14,-28.13],[-382.14,-7.03],[-375,-28.13],[-375,0],[-367.86,-84.4],[-367.86,-77.37],[-360.71,-91.43],[-360.71,-77.37],[-360.71,-63.3],[-353.57,-63.3],[-353.57,-42.2],[-353.57,-35.17],[-353.57,-7.03],[-353.57,0],[-346.43,-63.3],[-346.43,-42.2],[-346.43,0],[-339.29,-63.3],[-339.29,-56.27],[-339.29,-42.2],[-339.29,-14.07],[-339.29,-7.03],[-332.14,-63.3],[-332.14,-56.27],[-332.14,-49.23],[-325,-63.3],[-325,-56.27],[-310.71,-28.13],[-303.57,-28.13],[-275,-84.4],[-203.57,-98.47],[-203.57,-91.43],[-153.57,-56.27],[-153.57,-35.17],[-153.57,-28.13],[-153.57,-21.1],[-153.57,-14.07],[-153.57,-7.03],[-146.43,-42.2],[-146.43,-28.13],[-146.43,-21.1],[-146.43,-14.07],[-146.43,-7.03],[-139.29,-14.07],[-139.29,-7.03],[-132.14,-91.43],[-132.14,-84.4],[-132.14,-7.03],[-125,-21.1],[-117.86,-56.27],[-117.86,84.4],[-117.86,91.43],[-110.71,-63.3],[-110.71,84.4],[-110.71,98.47],[-110.71,105.5],[-103.57,-49.23],[-96.43,77.37],[-96.43,84.4],[-89.29,-112.53],[-82.14,-112.53],[-82.14,98.47],[-67.86,-42.2],[-60.71,-28.13],[-60.71,21.1],[-53.57,49.23],[-39.29,21.1],[-39.29,28.13],[-39.29,70.33],[-39.29,98.47],[-39.29,105.5],[-39.29,112.53],[-32.14,21.1],[-32.14,70.33],[-25,14.07],[-25,21.1],[-25,77.37],[-17.86,14.07],[-17.86,28.13],[-17.86,49.23],[-17.86,77.37],[-17.86,84.4],[-17.86,98.47],[-17.86,112.53],[-10.71,70.33],[-10.71,84.4],[-3.57,21.1],[-3.57,56.27],[-3.57,63.3],[-3.57,70.33],[-3.57,77.37],[146.43,-91.43],[146.43,-84.4],[146.43,-77.37],[146.43,-70.33],[146.43,-63.3],[146.43,-56.27],[146.43,-49.23],[153.57,-91.43],[153.57,-84.4],[153.57,-77.37],[153.57,-70.33],[153.57,-63.3],[153.57,-56.27],[153.57,-49.23],[160.71,-91.43],[160.71,-84.4],[160.71,-77.37],[160.71,-70.33],[160.71,-63.3],[160.71,-56.27],[160.71,-49.23],[167.86,-91.43],[167.86,-84.4],[167.86,-77.37],[167.86,-70.33],[167.86,-63.3],[167.86,-56.27],[167.86,-49.23],[310.71,56.27],[310.71,63.3],[310.71,70.33],[310.71,77.37],[317.86,56.27],[317.86,63.3],[317.86,70.33],[317.86,77.37],[325,56.27],[325,63.3],[325,70.33],[325,77.37],[332.14,56.27],[332.14,63.3],[332.14,70.33],[332.14,77.37],[339.29,56.27],[339.29,63.3],[339.29,70.33],[339.29,77.37],[346.43,56.27],[346.43,63.3],[346.43,70.33],[346.43,77.37],[353.57,56.27],[353.57,63.3],[353.57,70.33],[353.57,77.37],[360.71,56.27],[360.71,63.3],[360.71,70.33],[360.71,77.37],[367.86,56.27],[367.86,63.3],[367.86,70.33],[367.86,77.37],[375,56.27],[375,63.3],[375,70.33],[375,77.37]]},{rgb:[.71,.604,.42],cells:[[-489.29,-98.47],[-489.29,-91.43],[-489.29,-84.4],[-489.29,-77.37],[-482.14,-112.53],[-482.14,-98.47],[-482.14,-84.4],[-475,-105.5],[-475,-98.47],[-475,-91.43],[-467.86,-112.53],[-467.86,-105.5],[-467.86,-91.43],[-467.86,-84.4],[-460.71,-112.53],[-460.71,-91.43],[-460.71,-84.4],[-453.57,-112.53],[-453.57,-105.5],[-446.43,-112.53],[-446.43,-105.5],[-403.57,105.5],[-403.57,112.53],[-396.43,105.5],[-396.43,112.53],[-389.29,112.53],[-389.29,119.57],[-375,-112.53],[-367.86,-98.47],[-367.86,-42.2],[-360.71,-112.53],[-360.71,-84.4],[-360.71,-42.2],[-360.71,-35.17],[-353.57,-112.53],[-346.43,-105.5],[-346.43,-84.4],[-346.43,-77.37],[-346.43,-56.27],[-339.29,-98.47],[-339.29,-91.43],[-339.29,-84.4],[-332.14,-70.33],[-325,-77.37],[-317.86,-112.53],[-317.86,-98.47],[-296.43,-112.53],[-296.43,-105.5],[-289.29,-84.4],[-103.57,-112.53],[-53.57,-98.47],[-46.43,-98.47],[-46.43,-42.2],[-39.29,-49.23],[-39.29,-42.2],[-39.29,-35.17],[-32.14,-42.2],[-32.14,-35.17],[-32.14,-28.13],[-32.14,91.43],[-32.14,105.5],[-25,-35.17],[-10.71,28.13],[-10.71,35.17],[-3.57,28.13]]},{rgb:[.659,.749,.431],cells:[[-432.14,-77.37],[-425,-77.37],[-396.43,-14.07],[-396.43,77.37],[-396.43,84.4],[-389.29,70.33],[-382.14,-91.43],[-296.43,-28.13],[-296.43,-21.1],[-296.43,-14.07]]}],trails:[{id:`official-main`,kind:`up`,main:!0,pts:[[-317.89,-7],[-332.11,-14.01],[-334.47,-14.44],[-325,28.16],[-317.89,35.17],[-325,28.16],[-327.37,28.73],[-316.97,33.74],[-318.03,37.6],[-321.18,40.03],[-322.89,41.17],[-324.47,42.46],[-326.18,43.6],[-327.76,44.89],[-329.47,46.03],[-333.42,46.46],[-337.24,46.89],[-341.05,47.17],[-343.03,47.46],[-346.97,47.17],[-348.95,46.6],[-352.76,45.75],[-354.74,45.17],[-358.55,44.17],[-360.53,43.74],[-362.5,43.32],[-366.32,42.31],[-368.29,41.89],[-372.11,40.88],[-375.92,39.88],[-377.89,39.17],[-379.74,38.31],[-381.71,37.6],[-383.68,36.74],[-385.66,35.88],[-387.63,35.17],[-389.47,34.31],[-391.45,33.59],[-399.34,28.73],[-396.45,30.59],[-399.87,28.73],[-403.16,26.73],[-413.68,21.59],[-410.66,21.16],[-413.68,21.59],[-410.26,18.44],[-417.89,7],[-420.92,7.15],[-420.92,0],[-417.76,8.15],[-418.95,6.43],[-420.13,4.57],[-427.63,-3.29],[-424.61,-3],[-434.74,-10.58],[-428.03,-21.59],[-441.18,-18.01],[-442.5,-24.45],[-442.5,-18.44],[-434.47,-14.44],[-433.29,-12.29],[-432.11,-8.58],[-431.97,-5.15],[-430.39,-3.29],[-429.21,-1.14],[-428.16,.57],[-426.05,3.72],[-425,5.43],[-422.76,8.72],[-420.66,11.87],[-419.61,13.58],[-420.92,7.15],[-415.92,18.58],[-414.74,20.3],[-413.42,22.01],[-412.11,23.73],[-410.79,25.45],[-409.61,27.16],[-408.29,28.88],[-406.97,30.59],[-405.39,31.88],[-403.82,33.17],[-402.37,34.59],[-400.79,35.88],[-399.21,37.17],[-397.63,38.45],[-396.05,39.74],[-394.61,41.17],[-393.03,42.46],[-391.45,43.74],[-389.74,44.89],[-388.03,46.03],[-384.61,48.18],[-382.76,49.32],[-381.05,50.46],[-377.63,52.61],[-375.92,53.75],[-373.95,54.18],[-370.13,54.89],[-366.32,55.75],[-364.34,56.18],[-360.53,56.9],[-356.58,57.47],[-352.76,58.04],[-348.95,58.61],[-346.97,58.9],[-343.03,58.9],[-341.05,58.61],[-337.24,58.04],[-335.26,57.75],[-331.45,57.18],[-327.5,55.89],[-325.53,55.04],[-323.68,54.04],[-321.71,53.04],[-319.74,52.04],[-317.76,51.18],[-315.92,50.18],[-313.95,49.18],[-312.24,48.03],[-308.95,45.89],[-305.66,43.6],[-302.37,41.46],[-298.42,41.46],[-294.61,41.46],[-290.66,41.46],[-286.84,41.46],[-284.87,42.03],[-281.05,43.32],[-279.08,43.89],[-275.26,45.17],[-273.29,45.75],[-271.32,46.32],[-267.5,47.6],[-265.53,48.03],[-263.55,48.32],[-259.74,49.18],[-257.76,49.61],[-253.82,50.32],[-250,51.03],[-248.03,51.46],[-248.03,53.89],[-247.5,47.46],[-236.97,49.89],[-234.47,49.89],[-230.66,49.46],[-226.71,48.75],[-222.89,48.03],[-220.92,47.6],[-218.95,47.17],[-215.13,46.46],[-211.18,46.89],[-209.34,47.89],[-207.37,48.75],[-205.39,49.61],[-203.55,50.61],[-201.58,51.32],[-198.42,49.18],[-195.39,46.89],[-192.24,44.46],[-197.5,39.88],[-183.29,47.17],[-179.21,41.46],[-187.37,41.17],[-189.87,41.17],[-193.16,41.17],[-196.71,41.74],[-198.55,50.32],[-200.26,52.04],[-203.82,52.04],[-205.66,51.03],[-207.5,50.18],[-209.47,49.32],[-211.32,48.32],[-215.13,48.03],[-218.95,48.75],[-220.92,49.18],[-222.89,49.61],[-226.71,50.32],[-228.68,50.75],[-232.63,51.18],[-236.45,51.61],[-240.39,66.19],[-242.24,67.33],[-246.18,67.62],[-250,67.76],[-253.95,68.05],[-257.76,68.33],[-261.84,68.62],[-263.95,68.76],[-266.05,68.76],[-268.16,68.9],[-270.39,69.05],[-272.5,69.05],[-274.61,69.19],[-276.71,69.33],[-278.68,68.62],[-280.66,68.05],[-282.63,67.33],[-284.74,66.62],[-286.71,65.9],[-288.68,65.33],[-290.66,64.62],[-292.11,63.04],[-293.55,61.47],[-296.32,58.47],[-297.76,56.9],[-299.08,55.32],[-299.21,53.32],[-299.21,51.32],[-299.21,49.32],[-299.21,47.32],[-299.21,45.32],[-299.21,43.17],[-299.21,41.17],[-299.21,39.17],[-299.21,37.17],[-299.21,35.17],[-310.66,35.17],[-317.89,35.17],[-310.66,35.17],[-317.89,35.17],[-292.11,-9.01],[-291.32,-10.86],[-317.89,-7]]},{id:`official-down`,kind:`down`,main:!1,pts:[[-217.89,-49.18],[-217.89,-35.17],[-217.89,-28.16],[-225,-28.16],[-225,-21.16],[-232.11,-21.16],[-232.11,-14.01],[-239.34,-14.01],[-239.34,-7],[-237.63,-1.86],[-239.61,-1.57],[-243.55,-1],[-245.66,-.71],[-249.61,-.14],[-253.55,.43],[-255.53,.14],[-259.47,-.43],[-263.42,-1],[-267.37,-1.57],[-271.32,-2.14],[-273.16,-3],[-275.13,-3.86],[-276.97,-4.72],[-278.82,-5.58],[-280.66,-6.58],[-282.5,-7.43],[-284.47,-8.29],[-286.32,-9.15],[-287.76,-10.72],[-289.21,-12.15],[-290.66,-13.72],[-292.11,-15.15],[-293.55,-16.73],[-295,-18.16],[-296.45,-19.73],[-297.11,-21.73],[-297.63,-23.87],[-298.29,-26.02],[-298.82,-28.02],[-299.47,-30.16],[-300,-32.16],[-299.47,-34.31],[-298.82,-36.31],[-298.29,-38.45],[-297.63,-40.46],[-297.11,-42.6],[-296.45,-44.6],[-295,-46.03],[-293.55,-47.6],[-292.11,-49.03],[-290.66,-50.61],[-289.21,-52.04],[-287.76,-53.61],[-286.32,-55.04],[-284.47,-55.89],[-282.5,-56.9],[-280.66,-57.75],[-278.82,-58.61],[-276.97,-59.47],[-275.13,-60.33],[-273.16,-61.33],[-271.32,-62.18],[-269.34,-62.47],[-265.39,-63.04],[-261.45,-63.47],[-259.47,-63.76],[-255.53,-64.33],[-253.55,-64.62],[-249.61,-64.04],[-245.66,-63.47],[-243.55,-63.33],[-239.61,-62.76],[-237.63,-62.47],[-233.82,-61.33],[-231.84,-60.33],[-230,-59.47],[-228.16,-58.61],[-226.32,-57.75],[-224.47,-56.9],[-222.5,-55.89],[-220.66,-55.04],[-219.21,-53.61],[-217.76,-52.04],[-216.32,-50.61],[-219.47,-57.61],[-217.89,-56.32],[-217.89,-49.18],[-217.89,-42.17],[-217.89,-49.18]]},{id:`boat`,kind:`boat`,main:!1,pts:[[267.5,-10.44],[265.39,-10.72],[263.29,-11.15],[261.18,-11.44],[259.08,-11.44],[255,-11.29],[252.89,-11.29],[248.82,-11.29],[246.71,-11.29],[242.63,-11.15],[240.53,-11.01],[238.55,-10.72],[236.45,-10.58],[234.34,-11.58],[232.37,-12.72],[230.26,-13.72],[228.68,-15.15],[227.11,-16.44],[224.08,-19.16],[221.97,-20.3],[220,-21.3],[217.89,-22.44],[215.79,-21.44],[213.68,-20.3],[211.58,-19.3],[209.47,-18.16],[207.5,-16.87],[205.39,-15.72],[203.82,-14.01],[202.37,-12.29],[200.79,-10.58],[199.21,-8.86],[198.03,-7],[196.71,-5.15],[195.53,-3.29],[194.21,-1.43],[193.03,.43],[191.45,2.14],[190,3.86],[188.42,5.58],[186.84,7.29],[184.74,7.15],[180.66,7],[178.55,6.29],[176.58,5.43],[174.47,4.72],[172.37,3.57],[170.26,2.29],[168.16,1.14],[166.05,.14],[164.08,-.86],[161.97,-1.86],[159.87,-3.14],[157.89,-4.43],[155.79,-5.72],[153.68,-7],[151.71,-8.43],[149.61,-9.72],[147.5,-10.86],[145.53,-11.87],[143.42,-13.01],[141.32,-14.15],[139.34,-15.15],[137.24,-16.3],[135.13,-17.44],[133.16,-18.58],[131.05,-19.73],[128.95,-20.73],[126.97,-21.59],[124.87,-22.59],[122.76,-23.59],[120.66,-24.45],[118.55,-25.45],[116.45,-26.3],[114.47,-27.16],[112.37,-28.02],[110.26,-28.73],[108.29,-29.59],[106.18,-30.31],[104.08,-30.74],[102.11,-31.16],[100,-31.59],[97.89,-31.31],[93.82,-30.74],[91.71,-29.73],[89.74,-28.59],[87.63,-27.59],[84.47,-25.16],[81.45,-22.87],[79.87,-21.59],[78.29,-20.16],[76.71,-18.73],[75.13,-17.44],[73.03,-16.87],[71.05,-16.3],[68.95,-15.72],[66.84,-16.01],[64.87,-16.44],[62.76,-16.73],[60.66,-17.44],[58.68,-18.3],[56.58,-19.01],[54.47,-20.3],[52.5,-21.44],[50.39,-22.73],[48.29,-24.16],[46.32,-25.59],[44.21,-27.02],[42.11,-27.16],[40.13,-27.45],[38.03,-27.59],[35.92,-27.16],[31.84,-26.45],[29.74,-25.87],[27.63,-25.45],[25.53,-24.87],[23.42,-24.02],[21.45,-23.02],[19.34,-22.16],[17.76,-20.73],[16.18,-19.3],[14.74,-17.73],[13.16,-16.3],[11.58,-14.87],[10,-13.58],[6.97,-10.86],[4.87,-9.29],[2.89,-7.86],[.79,-6.29],[-17.89,-14.01],[-32.11,-8.01],[-39.34,-5.72],[-53.55,1.43],[-67.89,5.72],[-82.11,9.15],[-96.45,10.58],[-110.66,11.29],[-125,12.01],[-139.34,11.29],[-153.55,7.72],[-167.89,2.14],[-182.11,-4.29],[-196.45,-1.43],[-210.66,1.43],[-232.11,0],[-239.34,16.87],[-253.55,25.3],[-267.89,23.87],[-282.11,22.44],[-289.34,21.16],[-310.66,14.01],[-312.89,0]]},{id:`east-walk`,kind:`walk`,main:!1,pts:[[261.18,117.22],[261.71,113.36],[262.37,109.5],[262.89,105.64],[263.16,103.64],[263.68,99.92],[263.95,97.92],[264.61,94.06],[265.13,90.2],[265.39,88.2],[265.66,84.34],[266.05,80.48],[266.58,76.62],[266.71,74.62],[267.11,70.76],[267.5,66.9],[267.37,64.9],[266.97,61.04],[266.71,57.18],[266.45,53.46],[266.18,51.46],[265.92,47.6],[264.87,45.75],[263.82,43.74],[262.76,41.89],[261.84,39.88],[260.79,37.88],[259.74,36.02],[259.08,33.88],[258.55,31.74],[257.89,29.59],[257.37,27.45],[257.76,25.3],[258.03,23.3],[258.42,21.16],[258.68,19.01],[259.08,16.87],[259.34,14.87],[259.74,12.72],[260.53,10.72],[261.32,8.72],[261.97,6.72],[262.76,4.72],[263.55,2.72],[264.08,.71],[262.89,2.86],[265.26,-4],[265.92,-6.58]]}],road:{id:`guide-map`,pts:[[-499.87,62.9],[-494.74,62.61],[-489.61,62.18],[-484.47,61.76],[-479.21,61.47],[-474.08,61.18],[-468.95,60.76],[-463.82,60.33],[-458.68,60.04],[-453.42,59.61],[-448.16,59.18],[-442.89,58.75],[-437.63,58.33],[-432.37,57.75],[-427.24,57.32],[-421.97,56.9],[-416.71,56.47],[-411.45,56.04],[-406.18,55.61],[-400.79,55.75],[-395.39,55.89],[-390,56.18],[-384.61,56.32],[-379.21,56.47],[-373.82,56.61],[-368.42,56.9],[-363.03,57.04],[-357.63,57.18],[-352.24,57.75],[-346.84,58.47],[-341.45,59.18],[-336.05,59.75],[-330.66,60.33],[-325.26,61.04],[-319.87,62.04],[-314.47,63.04],[-309.08,64.04],[-303.68,64.9],[-298.29,65.9],[-292.89,66.9],[-287.24,67.62],[-281.58,68.47],[-275.92,69.19],[-270.26,70.05],[-264.61,70.76],[-258.95,69.48],[-253.29,68.19],[-247.63,66.9],[-241.97,65.62],[-236.32,64.33],[-230.92,62.9],[-225.53,61.61],[-220.26,60.18],[-214.87,58.75],[-209.47,57.47],[-204.08,56.04],[-198.68,54.89],[-193.29,53.89],[-187.89,52.89],[-182.63,51.75],[-177.24,50.61],[-171.84,49.61],[-166.18,48.32],[-160.53,47.03],[-154.87,45.89],[-149.21,44.6],[-143.55,43.32],[-137.89,42.89],[-132.24,42.46],[-126.58,41.89],[-120.92,41.46],[-115.26,41.03],[-109.74,40.31],[-104.21,39.6],[-98.68,38.74],[-93.16,38.03],[-86.84,37.6],[-80.39,37.03],[-74.08,36.6],[-68.82,37.45],[-63.55,38.31],[-58.29,39.17],[-53.16,39.88],[-47.89,40.74],[-42.63,41.6],[-37.76,43.17],[-32.89,44.74],[-28.03,46.46],[-23.16,48.03],[-18.29,49.61],[-12.24,52.32],[-6.05,54.89],[0,57.61],[1.32,63.47],[3.95,63.47],[6.45,63.47],[9.08,63.47],[11.58,63.61],[14.21,63.61],[16.84,63.61],[19.34,63.61],[21.97,63.61],[24.61,63.76],[27.11,63.76],[29.74,63.76],[32.24,63.76],[34.87,63.76],[37.5,63.9],[40,63.9],[42.63,63.9],[45.26,63.9],[47.76,64.04],[50.39,64.04],[53.03,64.04],[55.53,64.19],[58.16,64.19],[60.66,64.19],[63.29,64.33],[65.92,64.33],[68.42,64.33],[71.05,64.47],[73.68,64.47],[76.18,64.47],[78.82,64.62],[81.32,64.62],[83.95,64.62],[86.58,64.76],[89.08,64.76],[91.71,64.76],[94.34,64.9],[96.84,64.9],[99.47,64.9],[102.11,65.04],[104.61,65.04],[107.24,65.04],[109.74,65.19],[112.37,65.19],[115,65.19],[117.5,65.33],[120.13,65.33],[122.76,65.62],[125.26,65.9],[127.89,66.19],[130.53,66.33],[133.03,66.62],[135.66,66.9],[138.29,67.19],[140.79,67.47],[143.42,67.76],[146.05,68.05],[148.55,68.33],[151.18,68.47],[153.82,68.76],[156.32,69.05],[158.95,69.33],[161.58,70.33],[164.08,71.33],[163.42,75.62],[164.61,73.34],[175.13,71.19],[179.47,86.77],[182.11,87.77],[190.92,86.77],[193.16,88.35],[195.39,88.49],[197.63,90.2],[200,91.2],[202.5,92.21],[204.87,93.06],[207.37,94.06],[209.74,95.06],[212.24,96.07],[214.61,96.92],[217.11,97.92],[219.47,98.92],[221.84,99.78],[224.34,100.78],[226.71,101.78],[229.21,102.78],[231.58,103.64],[234.08,104.64],[236.45,105.64],[239.08,106.64],[241.58,107.64],[244.21,108.5],[246.84,109.5],[249.34,110.5],[251.97,111.5],[254.61,112.36],[257.11,113.36],[259.74,114.36],[262.37,115.36],[264.87,116.22],[267.5,117.22],[270.13,117.51],[272.63,117.94],[275.26,118.22],[277.76,118.65],[280.39,118.94],[283.03,119.22],[285.53,119.65],[288.16,119.94],[290.66,120.22],[293.29,120.65],[295.92,120.94],[298.42,121.37],[301.05,121.65],[303.68,121.94],[306.18,122.37],[308.82,122.65],[311.32,123.08],[313.95,123.37],[316.58,123.23],[319.08,123.23],[321.71,123.08],[324.34,123.08],[326.84,122.94],[329.47,122.94],[331.97,122.8],[334.61,122.8],[337.24,122.65],[339.74,122.65],[342.37,122.51],[345,122.51],[347.5,122.37],[350.13,122.37],[352.76,122.23],[355.26,122.08],[357.89,122.08],[360.39,121.94],[363.03,121.94],[365.66,121.8],[368.16,121.8],[370.79,121.65],[373.42,121.65],[375.92,121.51],[378.55,121.51],[381.05,121.37],[383.68,121.37],[386.32,121.22],[388.82,121.22],[391.45,121.08],[394.08,121.08],[396.58,120.94],[399.21,120.94],[401.84,120.8],[404.34,120.8],[406.97,120.8],[409.47,120.65],[412.11,120.65],[414.74,120.65],[417.24,120.51],[419.87,120.51],[422.5,120.37],[425,120.37],[427.63,120.37],[430.26,120.22],[432.76,120.22],[435.39,120.22],[438.03,120.08],[440.53,120.08],[443.16,119.94],[445.79,119.94],[448.29,119.94],[450.92,119.8],[453.42,119.8],[456.05,119.65],[458.68,119.65],[461.18,119.65],[463.82,119.51],[466.45,119.51],[468.95,119.51],[471.58,119.37],[474.21,119.37],[476.71,119.22],[479.34,119.22],[481.84,119.22],[484.47,119.08],[487.11,119.08],[489.61,119.08],[492.24,118.94],[494.87,118.94],[497.37,118.79],[500,118.79]]},bridges:[{id:`anping`,name:`安平大桥`,arch:!1,a:{x:-65.92,z:-2.72},b:{x:-65.92,z:24.45}},{id:`wenge`,name:`文阁桥`,arch:!0,a:{x:269.74,z:-121.08},b:{x:304.61,z:-121.08}},{id:`pohuang`,name:`婆皇吊桥`,arch:!1,a:{x:-253.55,z:7},b:{x:-227.11,z:45.32}},{id:`kexu`,name:`科圩索桥`,arch:!1,a:{x:-486.05,z:-33.59},b:{x:-486.05,z:-6.58}},{id:`shengxiao`,name:`十二生肖桥`,arch:!0,a:{x:-307.76,z:-48.32},b:{x:-286.84,z:-48.32}}],boats:[{id:0,x:263.55,z:-8.15,rot:1.571,moving:!1},{id:1,x:-310.66,z:14.01,rot:-.524,moving:!1},{id:2,x:267.76,z:-8.15,rot:1.571,moving:!1},{id:10,x:198.13,z:-7.16,rot:-.565,moving:!1},{id:11,x:49.96,z:-23.03,rot:-2.169,moving:!0},{id:12,x:-93.71,z:10.31,rot:-1.471,moving:!0},{id:13,x:-235.69,z:8.35,rot:-.405,moving:!1}],pillars:[{x:-359.52,z:-5.86,h:13.5,r:2.7,yaw:.9},{x:-359.96,z:-9.07,h:17.8,r:2.7,yaw:.85},{x:-369.45,z:-24.43,h:18.1,r:2.6,yaw:.02},{x:-375.59,z:-5.21,h:18,r:3.5,yaw:1.39},{x:-378.37,z:-19.54,h:14.7,r:2.5,yaw:2.01},{x:-371.08,z:-3.42,h:12.6,r:3.9,yaw:.47},{x:-374.11,z:-8.14,h:14.9,r:3.5,yaw:.81},{x:-362.81,z:-16.49,h:21.9,r:2.1,yaw:2.66},{x:-362.54,z:-6.95,h:12.5,r:3.7,yaw:1.38},{x:-391.32,z:-48.38,h:19.8,r:3.5,yaw:.93},{x:-400.01,z:-61.98,h:8.9,r:2.6,yaw:1.42},{x:-380.46,z:-44.45,h:12.5,r:2.4,yaw:.13},{x:-395.29,z:-48.38,h:8.5,r:2.4,yaw:2.71},{x:-408.54,z:-38.75,h:20.4,r:2.5,yaw:.84}],flowers:[{x:-264.34,z:-34.74,rgb:[.9,.55,.7]},{x:-232.76,z:-41.46,rgb:[.96,.94,.9]},{x:-246.32,z:-25.87,rgb:[.96,.94,.9]},{x:-226.71,z:-28.88,rgb:[.95,.8,.3]},{x:-238.16,z:-26.16,rgb:[.95,.8,.3]},{x:-253.55,z:-26.59,rgb:[.95,.8,.3]},{x:-238.95,z:-38.6,rgb:[.95,.8,.3]},{x:-249.87,z:-27.3,rgb:[.9,.55,.7]},{x:-233.29,z:-36.45,rgb:[.9,.55,.7]},{x:-235.39,z:-40.88,rgb:[.95,.8,.3]},{x:-257.24,z:-33.74,rgb:[.9,.55,.7]},{x:-225.79,z:-26.3,rgb:[.96,.94,.9]},{x:-252.76,z:-42.74,rgb:[.95,.8,.3]},{x:-236.71,z:-22.44,rgb:[.9,.55,.7]},{x:-235.66,z:-33.59,rgb:[.95,.8,.3]},{x:-255,z:-31.88,rgb:[.95,.8,.3]},{x:-230.79,z:-34.17,rgb:[.95,.8,.3]},{x:-235.92,z:-35.74,rgb:[.95,.8,.3]},{x:-242.11,z:-41.74,rgb:[.9,.55,.7]},{x:-232.5,z:-39.03,rgb:[.95,.8,.3]},{x:-236.97,z:-29.59,rgb:[.95,.8,.3]},{x:-239.47,z:-44.03,rgb:[.95,.8,.3]},{x:-244.47,z:-42.03,rgb:[.95,.8,.3]},{x:-230,z:-28.45,rgb:[.96,.94,.9]},{x:-240,z:-30.31,rgb:[.96,.94,.9]},{x:-259.08,z:-23.44,rgb:[.95,.8,.3]},{x:-241.58,z:-23.44,rgb:[.95,.8,.3]},{x:-247.89,z:-23.59,rgb:[.96,.94,.9]},{x:-251.97,z:-28.73,rgb:[.9,.55,.7]},{x:-234.08,z:-25.16,rgb:[.96,.94,.9]},{x:-243.55,z:-23.73,rgb:[.95,.8,.3]},{x:-240.39,z:-26.02,rgb:[.95,.8,.3]},{x:-260.66,z:-31.02,rgb:[.95,.8,.3]},{x:-225.39,z:-36.02,rgb:[.95,.8,.3]},{x:-229.34,z:-36.17,rgb:[.9,.55,.7]},{x:-244.74,z:-29.02,rgb:[.95,.8,.3]},{x:-256.32,z:-36.45,rgb:[.96,.94,.9]},{x:-261.97,z:-36.31,rgb:[.96,.94,.9]},{x:-230.79,z:-26.3,rgb:[.95,.8,.3]},{x:-233.55,z:-32.16,rgb:[.96,.94,.9]},{x:-254.08,z:-36.02,rgb:[.95,.8,.3]},{x:-259.34,z:-28.73,rgb:[.95,.8,.3]},{x:-242.89,z:-44.32,rgb:[.95,.8,.3]},{x:-254.87,z:-29.73,rgb:[.95,.8,.3]},{x:-261.84,z:-28.45,rgb:[.9,.55,.7]},{x:-237.89,z:-33.17,rgb:[.9,.55,.7]},{x:-250.53,z:-22.59,rgb:[.95,.8,.3]},{x:-227.89,z:-24.59,rgb:[.95,.8,.3]},{x:-231.45,z:-23.44,rgb:[.95,.8,.3]},{x:-245,z:-44.32,rgb:[.95,.8,.3]},{x:-252.5,z:-37.88,rgb:[.95,.8,.3]},{x:-248.82,z:-29.02,rgb:[.9,.55,.7]},{x:-260.26,z:-26.16,rgb:[.9,.55,.7]},{x:-238.68,z:-22.01,rgb:[.95,.8,.3]},{x:-256.71,z:-24.73,rgb:[.95,.8,.3]},{x:-250.13,z:-43.6,rgb:[.9,.55,.7]},{x:-248.55,z:-41.31,rgb:[.95,.8,.3]},{x:-242.11,z:-20.44,rgb:[.95,.8,.3]},{x:-232.76,z:-30.16,rgb:[.95,.8,.3]},{x:-238.03,z:-41.89,rgb:[.9,.55,.7]},{x:-247.11,z:-43.74,rgb:[.96,.94,.9]},{x:-236.97,z:-37.88,rgb:[.96,.94,.9]},{x:-257.11,z:-38.31,rgb:[.9,.55,.7]},{x:-240.39,z:-40.31,rgb:[.9,.55,.7]},{x:-256.18,z:-40.74,rgb:[.95,.8,.3]},{x:-239.34,z:-28.45,rgb:[.96,.94,.9]},{x:-254.74,z:-38.03,rgb:[.96,.94,.9]},{x:-250.39,z:-38.74,rgb:[.95,.8,.3]},{x:-262.76,z:-26.16,rgb:[.95,.8,.3]},{x:-229.34,z:-39.74,rgb:[.95,.8,.3]},{x:-259.47,z:-39.17,rgb:[.95,.8,.3]},{x:-231.18,z:-32.16,rgb:[.95,.8,.3]},{x:-255,z:-42.89,rgb:[.9,.55,.7]},{x:-233.55,z:-34.31,rgb:[.95,.8,.3]},{x:-242.24,z:-27.45,rgb:[.9,.55,.7]},{x:-262.89,z:-30.88,rgb:[.95,.8,.3]},{x:-238.03,z:-35.74,rgb:[.95,.8,.3]},{x:-252.63,z:-24.3,rgb:[.96,.94,.9]},{x:-235.39,z:-30.88,rgb:[.96,.94,.9]},{x:-247.24,z:-27.59,rgb:[.96,.94,.9]},{x:-259.87,z:-34.88,rgb:[.9,.55,.7]},{x:-249.74,z:-31.16,rgb:[.95,.8,.3]},{x:-226.05,z:-38.03,rgb:[.96,.94,.9]},{x:-255.26,z:-22.16,rgb:[.95,.8,.3]},{x:-226.58,z:-31.45,rgb:[.95,.8,.3]},{x:-261.97,z:-33.17,rgb:[.9,.55,.7]},{x:-223.68,z:-29.88,rgb:[.96,.94,.9]},{x:-252.5,z:-20.87,rgb:[.95,.8,.3]},{x:-233.03,z:-21.59,rgb:[.96,.94,.9]},{x:-247.11,z:-20.3,rgb:[.9,.55,.7]},{x:-251.84,z:-40.88,rgb:[.95,.8,.3]},{x:-258.03,z:-26.45,rgb:[.95,.8,.3]},{x:-223.82,z:-34.02,rgb:[.95,.8,.3]},{x:-250,z:-20.3,rgb:[.95,.8,.3]},{x:-233.42,z:-27.16,rgb:[.95,.8,.3]},{x:-234.47,z:-43.03,rgb:[.95,.8,.3]},{x:-253.03,z:-31.02,rgb:[.9,.55,.7]},{x:-231.05,z:-37.31,rgb:[.96,.94,.9]},{x:-228.68,z:-26.45,rgb:[.95,.8,.3]},{x:-244.87,z:-19.73,rgb:[.9,.55,.7]},{x:-229.21,z:-31.74,rgb:[.95,.8,.3]},{x:-251.97,z:-33.88,rgb:[.95,.8,.3]},{x:-264.21,z:-37.03,rgb:[.9,.55,.7]},{x:-258.16,z:-31.31,rgb:[.95,.8,.3]},{x:-255.53,z:-26.45,rgb:[.96,.94,.9]},{x:-223.16,z:-32.02,rgb:[.95,.8,.3]},{x:-225.79,z:-33.45,rgb:[.95,.8,.3]},{x:-257.37,z:-28.59,rgb:[.96,.94,.9]},{x:-236.18,z:-25.59,rgb:[.95,.8,.3]},{x:-262.37,z:-38.88,rgb:[.95,.8,.3]},{x:-258.95,z:-36.88,rgb:[.95,.8,.3]},{x:-235,z:-28.45,rgb:[.96,.94,.9]},{x:-239.21,z:-24.3,rgb:[.95,.8,.3]},{x:-235,z:-38.74,rgb:[.95,.8,.3]},{x:-251.32,z:-25.87,rgb:[.95,.8,.3]},{x:-250.66,z:-35.6,rgb:[.95,.8,.3]},{x:-228.29,z:-34.17,rgb:[.96,.94,.9]},{x:-234.74,z:-23.02,rgb:[.95,.8,.3]},{x:-245.66,z:-22.3,rgb:[.95,.8,.3]},{x:-254.08,z:-33.88,rgb:[.9,.55,.7]},{x:-242.37,z:-25.3,rgb:[.9,.55,.7]},{x:-253.82,z:-39.88,rgb:[.95,.8,.3]},{x:-224.47,z:-27.88,rgb:[.9,.55,.7]},{x:-228.29,z:-38.03,rgb:[.95,.8,.3]},{x:-243.82,z:-21.73,rgb:[.95,.8,.3]},{x:-244.08,z:-26.59,rgb:[.95,.8,.3]},{x:-259.61,z:-32.74,rgb:[.95,.8,.3]},{x:-236.71,z:-43.6,rgb:[.95,.8,.3]},{x:-246.45,z:-40.88,rgb:[.9,.55,.7]},{x:-239.87,z:-20.01,rgb:[.95,.8,.3]},{x:-249.08,z:-25.3,rgb:[.95,.8,.3]},{x:-249.87,z:-33.17,rgb:[.95,.8,.3]},{x:-242.11,z:-29.59,rgb:[.96,.94,.9]},{x:-258.16,z:-41.46,rgb:[.9,.55,.7]},{x:-230.66,z:-41.74,rgb:[.96,.94,.9]},{x:-227.24,z:-39.74,rgb:[.9,.55,.7]},{x:-237.24,z:-20.44,rgb:[.95,.8,.3]},{x:-246.84,z:-29.59,rgb:[.9,.55,.7]},{x:-341.05,z:-27.45,rgb:[.95,.8,.3]},{x:-336.05,z:-31.02,rgb:[.96,.94,.9]},{x:-332.11,z:-28.16,rgb:[.9,.55,.7]},{x:-332.11,z:-14.01,rgb:[.95,.8,.3]},{x:-343.29,z:-16.44,rgb:[.95,.8,.3]},{x:-346.32,z:-19.16,rgb:[.95,.8,.3]},{x:-329.34,z:-23.3,rgb:[.95,.8,.3]},{x:-338.03,z:-27.3,rgb:[.9,.55,.7]},{x:-343.68,z:-21.01,rgb:[.95,.8,.3]},{x:-343.42,z:-29.31,rgb:[.96,.94,.9]},{x:-333.95,z:-27.73,rgb:[.95,.8,.3]},{x:-341.71,z:-32.88,rgb:[.95,.8,.3]},{x:-332.11,z:-35.17,rgb:[.9,.55,.7]},{x:-298.95,z:-13.29,rgb:[.96,.94,.9]},{x:-301.97,z:-25.87,rgb:[.96,.94,.9]},{x:-332.11,z:-35.17,rgb:[.9,.55,.7]},{x:-321.18,z:-28.3,rgb:[.95,.8,.3]},{x:-330.13,z:-9.43,rgb:[.95,.8,.3]},{x:-332.11,z:-42.17,rgb:[.95,.8,.3]},{x:-296.32,z:-31.31,rgb:[.9,.55,.7]},{x:-335.39,z:-8.29,rgb:[.9,.55,.7]},{x:-332.11,z:-28.16,rgb:[.9,.55,.7]},{x:-332.11,z:-21.16,rgb:[.95,.8,.3]},{x:-293.55,z:-22.87,rgb:[.95,.8,.3]},{x:-339.87,z:-12.72,rgb:[.95,.8,.3]},{x:-337.37,z:-10.72,rgb:[.96,.94,.9]},{x:-317.37,z:-22.73,rgb:[.9,.55,.7]},{x:-346.18,z:-31.31,rgb:[.95,.8,.3]},{x:-306.45,z:-31.16,rgb:[.96,.94,.9]},{x:-335.39,z:-5.58,rgb:[.95,.8,.3]},{x:-300.79,z:-12.44,rgb:[.95,.8,.3]},{x:-330.39,z:-11.87,rgb:[.9,.55,.7]},{x:-334.08,z:-31.02,rgb:[.95,.8,.3]},{x:-313.55,z:-22.44,rgb:[.96,.94,.9]},{x:-319.34,z:-24.73,rgb:[.95,.8,.3]},{x:-311.58,z:-22.16,rgb:[.95,.8,.3]},{x:-332.76,z:-25.3,rgb:[.95,.8,.3]},{x:-292.11,z:-20.01,rgb:[.9,.55,.7]},{x:-331.45,z:-28.88,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.9,.55,.7]},{x:-346.05,z:-24.45,rgb:[.9,.55,.7]},{x:-332.11,z:-42.17,rgb:[.9,.55,.7]},{x:-296.32,z:-14.72,rgb:[.95,.8,.3]},{x:-332.11,z:-14.01,rgb:[.95,.8,.3]},{x:-320.26,z:-20.16,rgb:[.95,.8,.3]},{x:-343.29,z:-26.02,rgb:[.95,.8,.3]},{x:-346.05,z:-9.43,rgb:[.95,.8,.3]},{x:-330.39,z:-32.74,rgb:[.9,.55,.7]},{x:-332.11,z:-21.16,rgb:[.96,.94,.9]},{x:-332.11,z:-35.17,rgb:[.95,.8,.3]},{x:-335.13,z:-25.3,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-328.68,z:-16.3,rgb:[.95,.8,.3]},{x:-337.5,z:-7.29,rgb:[.95,.8,.3]},{x:-299.87,z:-19.58,rgb:[.95,.8,.3]},{x:-332.11,z:-35.17,rgb:[.9,.55,.7]},{x:-345.26,z:-27.3,rgb:[.95,.8,.3]},{x:-330.66,z:-17.01,rgb:[.95,.8,.3]},{x:-332.11,z:-14.01,rgb:[.9,.55,.7]},{x:-333.03,z:-7.58,rgb:[.95,.8,.3]},{x:-312.37,z:-18.44,rgb:[.96,.94,.9]},{x:-305.92,z:-27.3,rgb:[.9,.55,.7]},{x:-331.97,z:-14.87,rgb:[.95,.8,.3]},{x:-332.5,z:-22.73,rgb:[.96,.94,.9]},{x:-332.11,z:-21.16,rgb:[.96,.94,.9]},{x:-332.11,z:-42.17,rgb:[.95,.8,.3]},{x:-340.13,z:-24.3,rgb:[.96,.94,.9]},{x:-342.37,z:-23.73,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-332.11,z:-21.16,rgb:[.95,.8,.3]},{x:-300.79,z:-15.58,rgb:[.95,.8,.3]},{x:-341.58,z:-30.45,rgb:[.95,.8,.3]},{x:-302.24,z:-28.45,rgb:[.95,.8,.3]},{x:-334.21,z:-12.44,rgb:[.9,.55,.7]},{x:-342.63,z:-11.01,rgb:[.9,.55,.7]},{x:-338.68,z:-30.74,rgb:[.95,.8,.3]},{x:-296.71,z:-12.29,rgb:[.96,.94,.9]},{x:-332.11,z:-35.17,rgb:[.96,.94,.9]},{x:-302.11,z:-18.3,rgb:[.9,.55,.7]},{x:-328.82,z:-29.88,rgb:[.95,.8,.3]},{x:-342.5,z:-14.58,rgb:[.9,.55,.7]},{x:-309.47,z:-24.3,rgb:[.95,.8,.3]},{x:-330.13,z:-14.15,rgb:[.95,.8,.3]},{x:-338.82,z:-33.31,rgb:[.95,.8,.3]},{x:-332.89,z:-9.86,rgb:[.95,.8,.3]},{x:-315.39,z:-20.87,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-338.42,z:-25.3,rgb:[.96,.94,.9]},{x:-319.87,z:-30.74,rgb:[.95,.8,.3]},{x:-332.24,z:-5.15,rgb:[.9,.55,.7]},{x:-345.26,z:-17.44,rgb:[.9,.55,.7]},{x:-316.84,z:-18.01,rgb:[.9,.55,.7]},{x:-320.66,z:-18.01,rgb:[.9,.55,.7]},{x:-306.32,z:-33.31,rgb:[.95,.8,.3]},{x:-309.74,z:-18.87,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-308.42,z:-32.45,rgb:[.95,.8,.3]},{x:-343.82,z:-33.31,rgb:[.95,.8,.3]},{x:-345.92,z:-7,rgb:[.9,.55,.7]},{x:-308.16,z:-26.73,rgb:[.95,.8,.3]},{x:-301.45,z:-23.59,rgb:[.95,.8,.3]},{x:-295,z:-33.02,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.9,.55,.7]},{x:-332.11,z:-21.16,rgb:[.95,.8,.3]},{x:-330.39,z:-26.45,rgb:[.95,.8,.3]},{x:-346.45,z:-22.3,rgb:[.9,.55,.7]},{x:-329.08,z:-7.58,rgb:[.9,.55,.7]},{x:-304.34,z:-29.02,rgb:[.96,.94,.9]},{x:-344.61,z:-23.16,rgb:[.95,.8,.3]},{x:-303.95,z:-31.16,rgb:[.95,.8,.3]},{x:-320.26,z:-22.59,rgb:[.95,.8,.3]},{x:-291.32,z:-22.87,rgb:[.96,.94,.9]},{x:-335.92,z:-28.88,rgb:[.95,.8,.3]},{x:-294.74,z:-13.15,rgb:[.95,.8,.3]},{x:-344.87,z:-11.58,rgb:[.9,.55,.7]},{x:-317.89,z:-20.73,rgb:[.95,.8,.3]},{x:-301.97,z:-21.59,rgb:[.95,.8,.3]},{x:-333.42,z:-33.17,rgb:[.95,.8,.3]},{x:-332.11,z:-21.16,rgb:[.95,.8,.3]},{x:-295.79,z:-29.16,rgb:[.9,.55,.7]},{x:-298.82,z:-16.73,rgb:[.95,.8,.3]},{x:-332.11,z:-28.16,rgb:[.95,.8,.3]},{x:-304.08,z:-33.45,rgb:[.95,.8,.3]},{x:-332.11,z:-42.17,rgb:[.96,.94,.9]},{x:-294.87,z:-26.45,rgb:[.9,.55,.7]},{x:-304.61,z:-25.45,rgb:[.9,.55,.7]},{x:-309.47,z:-22.01,rgb:[.95,.8,.3]},{x:-336.18,z:-33.45,rgb:[.95,.8,.3]},{x:-298.55,z:-10.86,rgb:[.96,.94,.9]},{x:206.45,z:-51.46,rgb:[.96,.94,.9]},{x:201.58,z:-45.6,rgb:[.96,.94,.9]},{x:208.03,z:-55.61,rgb:[.96,.94,.9]},{x:204.34,z:-50.89,rgb:[.95,.8,.3]},{x:204.34,z:-45.6,rgb:[.96,.94,.9]},{x:224.34,z:-54.61,rgb:[.95,.8,.3]},{x:207.76,z:-45.46,rgb:[.96,.94,.9]},{x:206.58,z:-53.75,rgb:[.96,.94,.9]},{x:223.82,z:-38.31,rgb:[.95,.8,.3]},{x:207.76,z:-48.03,rgb:[.95,.8,.3]},{x:227.63,z:-37.17,rgb:[.96,.94,.9]},{x:204.34,z:-53.75,rgb:[.95,.8,.3]},{x:201.71,z:-51.18,rgb:[.95,.8,.3]},{x:225.39,z:-36.88,rgb:[.95,.8,.3]},{x:200.53,z:-47.75,rgb:[.95,.8,.3]},{x:202.63,z:-48.75,rgb:[.95,.8,.3]},{x:225.66,z:-39.31,rgb:[.95,.8,.3]},{x:205.92,z:-48.89,rgb:[.95,.8,.3]},{x:199.47,z:-45.46,rgb:[.95,.8,.3]},{x:228.16,z:-39.17,rgb:[.96,.94,.9]},{x:208.42,z:-51.03,rgb:[.95,.8,.3]},{x:223.29,z:-35.31,rgb:[.95,.8,.3]},{x:202.37,z:-33.88,rgb:[.95,.8,.3]},{x:200.13,z:-43.6,rgb:[.95,.8,.3]},{x:-398.55,z:-47.6,rgb:[.95,.8,.3]},{x:-400.39,z:-48.32,rgb:[.95,.8,.3]},{x:-399.87,z:-47.17,rgb:[.95,.8,.3]},{x:-399.74,z:-48.46,rgb:[.95,.8,.3]},{x:-398.55,z:-48.46,rgb:[.95,.8,.3]},{x:-397.76,z:-49.61,rgb:[.95,.8,.3]},{x:-398.42,z:-46.89,rgb:[.95,.8,.3]},{x:-401.97,z:-47.32,rgb:[.95,.8,.3]},{x:-402.24,z:-48.6,rgb:[.95,.8,.3]},{x:-397.5,z:-49.46,rgb:[.95,.8,.3]},{x:-400.26,z:-47.75,rgb:[.95,.8,.3]},{x:-398.29,z:-48.75,rgb:[.95,.8,.3]},{x:-402.37,z:-47.32,rgb:[.95,.8,.3]},{x:-400.92,z:-48.32,rgb:[.95,.8,.3]},{x:-399.47,z:-47.89,rgb:[.95,.8,.3]},{x:-396.45,z:-47.75,rgb:[.95,.8,.3]},{x:-399.47,z:-47.89,rgb:[.95,.8,.3]},{x:-396.45,z:-48.32,rgb:[.95,.8,.3]},{x:-398.03,z:-47.46,rgb:[.95,.8,.3]},{x:-398.55,z:-47.17,rgb:[.95,.8,.3]},{x:-400.39,z:-48.6,rgb:[.95,.8,.3]},{x:-401.32,z:-49.18,rgb:[.95,.8,.3]},{x:-399.34,z:-48.18,rgb:[.95,.8,.3]},{x:-398.95,z:-48.18,rgb:[.95,.8,.3]},{x:-400,z:-47.17,rgb:[.95,.8,.3]},{x:-400.79,z:-49.75,rgb:[.95,.8,.3]},{x:-402.24,z:-47.03,rgb:[.95,.8,.3]},{x:-398.16,z:-46.75,rgb:[.95,.8,.3]},{x:-400.66,z:-48.75,rgb:[.95,.8,.3]},{x:-400.92,z:-49.46,rgb:[.95,.8,.3]},{x:-232.11,z:7,rgb:[.95,.8,.3]},{x:-249.21,z:2.86,rgb:[.95,.8,.3]},{x:-248.03,z:6.15,rgb:[.95,.8,.3]},{x:-245.79,z:1,rgb:[.95,.8,.3]},{x:-265.66,z:-14.58,rgb:[.95,.8,.3]},{x:-245.53,z:-2.86,rgb:[.96,.94,.9]},{x:-257.24,z:-17.3,rgb:[.95,.8,.3]},{x:-249.34,z:-18.73,rgb:[.95,.8,.3]},{x:-273.29,z:6.15,rgb:[.95,.8,.3]},{x:-256.45,z:-1.57,rgb:[.96,.94,.9]},{x:-232.37,z:4,rgb:[.95,.8,.3]},{x:-286.05,z:-18.3,rgb:[.95,.8,.3]},{x:-265.92,z:2.86,rgb:[.95,.8,.3]},{x:-286.05,z:-11.72,rgb:[.96,.94,.9]},{x:-239.34,z:-7,rgb:[.95,.8,.3]},{x:-259.74,z:-4.57,rgb:[.95,.8,.3]},{x:-261.45,z:-21.16,rgb:[.95,.8,.3]},{x:-245.53,z:-4.29,rgb:[.96,.94,.9]},{x:-277.24,z:-5.15,rgb:[.95,.8,.3]},{x:-279.87,z:-13.01,rgb:[.95,.8,.3]},{x:-254.08,z:7.15,rgb:[.95,.8,.3]},{x:-264.61,z:-3.86,rgb:[.95,.8,.3]},{x:-248.03,z:-16.58,rgb:[.95,.8,.3]},{x:-243.42,z:6.43,rgb:[.95,.8,.3]},{x:-232.11,z:-21.16,rgb:[.95,.8,.3]},{x:-249.08,z:-20.59,rgb:[.95,.8,.3]},{x:-283.82,z:-6.86,rgb:[.95,.8,.3]},{x:-246.45,z:0,rgb:[.95,.8,.3]},{x:-280.39,z:-17.15,rgb:[.96,.94,.9]},{x:-249.74,z:-11.44,rgb:[.95,.8,.3]},{x:-268.95,z:-9.01,rgb:[.95,.8,.3]},{x:-269.61,z:-3,rgb:[.95,.8,.3]},{x:-247.5,z:-8.58,rgb:[.96,.94,.9]},{x:-251.18,z:-12.87,rgb:[.96,.94,.9]},{x:-248.55,z:-16.01,rgb:[.96,.94,.9]},{x:-246.45,z:0,rgb:[.95,.8,.3]},{x:-268.42,z:-12.15,rgb:[.95,.8,.3]},{x:-270.26,z:-7.43,rgb:[.95,.8,.3]},{x:-264.61,z:6.58,rgb:[.96,.94,.9]},{x:-262.89,z:-1,rgb:[.95,.8,.3]},{x:-255,z:-7,rgb:[.95,.8,.3]},{x:-248.03,z:-2.14,rgb:[.96,.94,.9]},{x:-273.03,z:1.86,rgb:[.95,.8,.3]},{x:-253.82,z:6.43,rgb:[.96,.94,.9]},{x:-278.03,z:-10.29,rgb:[.95,.8,.3]},{x:-264.61,z:-10.44,rgb:[.96,.94,.9]},{x:-262.76,z:-16.44,rgb:[.95,.8,.3]},{x:-269.34,z:-5,rgb:[.96,.94,.9]},{x:-242.5,z:3,rgb:[.95,.8,.3]},{x:-245.66,z:-2.43,rgb:[.96,.94,.9]},{x:-267.24,z:1.86,rgb:[.95,.8,.3]},{x:-264.08,z:.14,rgb:[.96,.94,.9]},{x:-248.03,z:-21.3,rgb:[.95,.8,.3]},{x:-239.08,z:-5.58,rgb:[.96,.94,.9]},{x:-236.18,z:-10.44,rgb:[.95,.8,.3]},{x:-232.11,z:-21.16,rgb:[.96,.94,.9]},{x:-284.34,z:-11.72,rgb:[.95,.8,.3]},{x:-239.34,z:-16.3,rgb:[.96,.94,.9]},{x:-289.87,z:-15.44,rgb:[.95,.8,.3]},{x:-262.89,z:-15.01,rgb:[.96,.94,.9]},{x:-232.11,z:-21.16,rgb:[.95,.8,.3]},{x:-260.39,z:-7,rgb:[.96,.94,.9]},{x:-232.11,z:-14.01,rgb:[.95,.8,.3]},{x:-244.34,z:-6.58,rgb:[.96,.94,.9]},{x:-232.11,z:-14.01,rgb:[.95,.8,.3]},{x:-246.84,z:-4.72,rgb:[.96,.94,.9]},{x:-238.03,z:1.43,rgb:[.95,.8,.3]},{x:-244.21,z:-11.15,rgb:[.96,.94,.9]},{x:-239.34,z:-7,rgb:[.95,.8,.3]},{x:-258.42,z:-14.01,rgb:[.96,.94,.9]},{x:-253.82,z:6.43,rgb:[.95,.8,.3]},{x:-272.11,z:-16.44,rgb:[.96,.94,.9]},{x:-221.84,z:-18.87,rgb:[.95,.8,.3]},{x:-281.45,z:-4,rgb:[.96,.94,.9]},{x:-253.95,z:4.72,rgb:[.95,.8,.3]},{x:-269.34,z:4.43,rgb:[.96,.94,.9]},{x:-271.97,z:-11.72,rgb:[.95,.8,.3]},{x:-261.97,z:-9.86,rgb:[.96,.94,.9]},{x:-275.13,z:-11.29,rgb:[.95,.8,.3]},{x:-248.55,z:-12.87,rgb:[.96,.94,.9]},{x:-239.34,z:-14.01,rgb:[.95,.8,.3]},{x:-246.45,z:0,rgb:[.96,.94,.9]},{x:-278.82,z:1,rgb:[.95,.8,.3]},{x:-264.74,z:-1.43,rgb:[.96,.94,.9]},{x:-241.18,z:-17.58,rgb:[.95,.8,.3]},{x:-253.03,z:-17.87,rgb:[.96,.94,.9]},{x:-273.55,z:.86,rgb:[.95,.8,.3]},{x:-281.18,z:-1.86,rgb:[.96,.94,.9]},{x:-250,z:-6.86,rgb:[.95,.8,.3]},{x:-275.79,z:.29,rgb:[.96,.94,.9]},{x:-260.53,z:-10.01,rgb:[.95,.8,.3]},{x:-254.08,z:-15.3,rgb:[.96,.94,.9]},{x:-282.63,z:5.72,rgb:[.95,.8,.3]},{x:-276.45,z:-4.29,rgb:[.96,.94,.9]},{x:-249.61,z:-12.72,rgb:[.95,.8,.3]},{x:-283.16,z:2.29,rgb:[.96,.94,.9]},{x:-230.79,z:-20.16,rgb:[.95,.8,.3]},{x:-233.29,z:-21.16,rgb:[.96,.94,.9]},{x:-289.87,z:-12.58,rgb:[.95,.8,.3]},{x:-270.39,z:1.86,rgb:[.96,.94,.9]},{x:-246.45,z:0,rgb:[.95,.8,.3]},{x:-275.92,z:-15.87,rgb:[.96,.94,.9]},{x:-232.11,z:7,rgb:[.95,.8,.3]},{x:-238.82,z:-14.87,rgb:[.96,.94,.9]},{x:-273.16,z:-20.59,rgb:[.95,.8,.3]},{x:-253.03,z:-12.29,rgb:[.96,.94,.9]},{x:-225,z:-21.16,rgb:[.95,.8,.3]},{x:-283.68,z:-11.44,rgb:[.96,.94,.9]},{x:-278.95,z:-.14,rgb:[.95,.8,.3]},{x:-246.45,z:0,rgb:[.96,.94,.9]},{x:-273.42,z:6,rgb:[.95,.8,.3]},{x:-275.53,z:4.29,rgb:[.96,.94,.9]},{x:-290.53,z:-11.29,rgb:[.95,.8,.3]},{x:-279.34,z:3.14,rgb:[.96,.94,.9]},{x:-280.79,z:-16.15,rgb:[.95,.8,.3]},{x:-264.21,z:2.86,rgb:[.96,.94,.9]},{x:-279.74,z:-16.15,rgb:[.95,.8,.3]},{x:-277.76,z:4.72,rgb:[.96,.94,.9]},{x:-257.11,z:-3.72,rgb:[.95,.8,.3]},{x:-260.13,z:-21.01,rgb:[.96,.94,.9]},{x:-265.92,z:-7,rgb:[.95,.8,.3]},{x:-265.92,z:-20.16,rgb:[.96,.94,.9]},{x:-234.74,z:6.58,rgb:[.95,.8,.3]},{x:-275,z:-3.57,rgb:[.96,.94,.9]},{x:-268.42,z:-16.44,rgb:[.95,.8,.3]},{x:-281.84,z:5.43,rgb:[.96,.94,.9]},{x:-236.05,z:-12.44,rgb:[.95,.8,.3]},{x:-235.92,z:-18.3,rgb:[.96,.94,.9]},{x:-232.11,z:-14.01,rgb:[.95,.8,.3]},{x:-232.11,z:7,rgb:[.96,.94,.9]},{x:-253.29,z:-1,rgb:[.95,.8,.3]},{x:-245,z:-2.86,rgb:[.96,.94,.9]},{x:-251.97,z:3.86,rgb:[.95,.8,.3]},{x:-288.29,z:-20.73,rgb:[.96,.94,.9]},{x:-239.34,z:-7,rgb:[.95,.8,.3]},{x:-232.11,z:-14.01,rgb:[.96,.94,.9]},{x:-245.26,z:-7.72,rgb:[.95,.8,.3]},{x:-256.71,z:-12.44,rgb:[.96,.94,.9]},{x:-233.03,z:-19.16,rgb:[.95,.8,.3]},{x:-232.11,z:7,rgb:[.96,.94,.9]},{x:-255.39,z:-3,rgb:[.95,.8,.3]},{x:-276.32,z:-16.01,rgb:[.96,.94,.9]},{x:-244.08,z:-8.15,rgb:[.95,.8,.3]},{x:-290.26,z:-8.43,rgb:[.96,.94,.9]},{x:-262.11,z:-5.86,rgb:[.95,.8,.3]},{x:-258.55,z:-17.44,rgb:[.96,.94,.9]},{x:-255.39,z:-19.01,rgb:[.95,.8,.3]},{x:-232.11,z:7,rgb:[.96,.94,.9]},{x:-287.5,z:-12.87,rgb:[.95,.8,.3]},{x:-284.21,z:7,rgb:[.96,.94,.9]},{x:-279.34,z:-13.15,rgb:[.95,.8,.3]},{x:-246.58,z:3,rgb:[.96,.94,.9]},{x:-232.11,z:-21.16,rgb:[.95,.8,.3]},{x:-235.13,z:6.15,rgb:[.96,.94,.9]},{x:-238.55,z:-13.72,rgb:[.95,.8,.3]},{x:-239.34,z:-7,rgb:[.96,.94,.9]},{x:-262.89,z:-4.72,rgb:[.95,.8,.3]},{x:-239.34,z:-7,rgb:[.96,.94,.9]},{x:-239.34,z:-14.01,rgb:[.95,.8,.3]},{x:-264.74,z:-1,rgb:[.96,.94,.9]},{x:-278.82,z:-10.58,rgb:[.95,.8,.3]},{x:-256.71,z:-16.15,rgb:[.96,.94,.9]},{x:-274.08,z:-20.16,rgb:[.95,.8,.3]},{x:-286.71,z:-11.44,rgb:[.96,.94,.9]},{x:-279.34,z:-19.44,rgb:[.95,.8,.3]},{x:-242.5,z:-.43,rgb:[.96,.94,.9]},{x:-259.47,z:-1,rgb:[.95,.8,.3]},{x:-275.79,z:-17.15,rgb:[.96,.94,.9]},{x:-285.13,z:-6.15,rgb:[.95,.8,.3]},{x:-274.87,z:.29,rgb:[.96,.94,.9]},{x:-272.89,z:-16.3,rgb:[.95,.8,.3]},{x:-232.11,z:-21.16,rgb:[.96,.94,.9]},{x:-275.39,z:-1.86,rgb:[.95,.8,.3]},{x:-244.74,z:-4.15,rgb:[.96,.94,.9]},{x:-275.39,z:2.14,rgb:[.95,.8,.3]},{x:-261.45,z:-14.58,rgb:[.96,.94,.9]},{x:-287.63,z:-19.44,rgb:[.95,.8,.3]},{x:-239.34,z:-14.01,rgb:[.96,.94,.9]},{x:-248.68,z:-20.87,rgb:[.95,.8,.3]},{x:-234.08,z:3.57,rgb:[.96,.94,.9]},{x:-242.24,z:-8.58,rgb:[.95,.8,.3]},{x:-239.34,z:-14.01,rgb:[.96,.94,.9]},{x:-239.34,z:-14.01,rgb:[.95,.8,.3]},{x:-288.29,z:-20.16,rgb:[.96,.94,.9]},{x:-260,z:-10.58,rgb:[.95,.8,.3]},{x:-248.29,z:-17.15,rgb:[.96,.94,.9]},{x:-249.34,z:-16.44,rgb:[.95,.8,.3]},{x:-232.11,z:7,rgb:[.96,.94,.9]},{x:-269.47,z:-2.72,rgb:[.95,.8,.3]},{x:-232.11,z:-14.01,rgb:[.96,.94,.9]},{x:-254.61,z:-1.14,rgb:[.95,.8,.3]},{x:-259.34,z:6.72,rgb:[.96,.94,.9]},{x:-254.21,z:5.86,rgb:[.95,.8,.3]},{x:-251.97,z:1.14,rgb:[.96,.94,.9]},{x:-232.11,z:7,rgb:[.95,.8,.3]},{x:-275.13,z:-13.72,rgb:[.96,.94,.9]},{x:-274.21,z:1.86,rgb:[.95,.8,.3]},{x:-284.47,z:-17.3,rgb:[.96,.94,.9]},{x:-244.61,z:-5.29,rgb:[.95,.8,.3]},{x:-232.11,z:-14.01,rgb:[.96,.94,.9]},{x:-287.11,z:-4.29,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.96,.94,.9]},{x:-320.13,z:-30.31,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-318.68,z:-30.59,rgb:[.96,.94,.9]},{x:-320.26,z:-30.31,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.96,.94,.9]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-325,z:-42.17,rgb:[.95,.8,.3]},{x:-336.45,z:-54.32,rgb:[.95,.8,.3]},{x:-338.16,z:-51.18,rgb:[.95,.8,.3]},{x:-336.45,z:-54.47,rgb:[.95,.8,.3]},{x:-338.29,z:-52.89,rgb:[.95,.8,.3]},{x:-334.87,z:-53.75,rgb:[.95,.8,.3]},{x:-336.84,z:-52.04,rgb:[.95,.8,.3]},{x:-335,z:-53.89,rgb:[.95,.8,.3]},{x:-338.16,z:-51.89,rgb:[.95,.8,.3]},{x:-335.92,z:-51.89,rgb:[.95,.8,.3]},{x:-336.58,z:-52.89,rgb:[.95,.8,.3]},{x:-335.26,z:-52.89,rgb:[.95,.8,.3]},{x:-337.37,z:-54.18,rgb:[.95,.8,.3]},{x:-336.45,z:-53.18,rgb:[.95,.8,.3]},{x:-335.39,z:-52.18,rgb:[.95,.8,.3]},{x:-339.87,z:-52.61,rgb:[.95,.8,.3]},{x:-335.39,z:-52.32,rgb:[.95,.8,.3]},{x:-336.58,z:-51.18,rgb:[.95,.8,.3]},{x:-335.66,z:-51.75,rgb:[.95,.8,.3]},{x:-334.47,z:-52.75,rgb:[.95,.8,.3]},{x:-335.66,z:-53.18,rgb:[.95,.8,.3]},{x:-337.76,z:-53.75,rgb:[.95,.8,.3]},{x:-335.79,z:-52.75,rgb:[.95,.8,.3]},{x:-335.26,z:-51.75,rgb:[.95,.8,.3]},{x:-336.18,z:-54.47,rgb:[.95,.8,.3]},{x:-335.79,z:-51.61,rgb:[.95,.8,.3]},{x:-336.97,z:-54.75,rgb:[.95,.8,.3]},{x:-338.55,z:-53.18,rgb:[.95,.8,.3]},{x:-336.58,z:-54.89,rgb:[.95,.8,.3]},{x:-337.89,z:-52.32,rgb:[.95,.8,.3]},{x:-338.82,z:-51.61,rgb:[.95,.8,.3]},{x:-337.76,z:-52.46,rgb:[.95,.8,.3]},{x:-336.71,z:-52.32,rgb:[.95,.8,.3]},{x:-336.18,z:-52.32,rgb:[.95,.8,.3]},{x:-336.05,z:-50.75,rgb:[.95,.8,.3]},{x:-337.5,z:-52.18,rgb:[.95,.8,.3]},{x:-337.89,z:-53.61,rgb:[.95,.8,.3]},{x:-338.16,z:-50.46,rgb:[.95,.8,.3]},{x:-335.66,z:-52.32,rgb:[.95,.8,.3]},{x:-338.82,z:-50.75,rgb:[.95,.8,.3]},{x:-338.29,z:-55.47,rgb:[.95,.8,.3]}]},fd=[...Z.waypoints.map(e=>({id:e.id,label:e.label,text:e.text,kind:e.major?`景点`:`地点`,x:e.x,z:e.z})),...Z.places.map(e=>({id:e.id,label:e.label,text:e.text,kind:`地点`,x:e.x,z:e.z})),...Z.facilities.map(e=>({id:e.id,label:e.label,text:e.text,kind:e.kind===`med`?`医疗点`:`卫生间`,x:e.x,z:e.z}))],pd=Z.meta.step,md=Z.meta.cols,hd=Z.meta.rows,gd=Z.meta.worldW/2,_d=Z.meta.worldD/2,vd=Z.waterY;function yd(){return new te(pd,md,hd,Float32Array.from(Z.terrain.heights))}function bd(e){return(t,n)=>{let r=Math.max(0,Math.min(e.sizeX-.01,t+gd)),i=Math.max(0,Math.min(e.sizeZ-.01,n+_d));return e.heightAt(r,i)}}function xd(e){let t=de(e,e.minY-4),n=t.layout.stride,r=new DataView(t.vertices.buffer,t.vertices.byteOffset,t.vertices.byteLength),i=t.vertices.byteLength/n;for(let e=0;e<i;e++){let t=e*n;r.setFloat32(t,r.getFloat32(t,!0)-gd,!0),r.setFloat32(t+8,r.getFloat32(t+8,!0)-_d,!0)}return t}var Sd={stride:24,attribs:[{name:`a_pos`,size:3,type:`f32`,offset:0},{name:`a_normal`,size:3,type:`f32`,offset:12}]},Cd=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],wd=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Td=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},Ed=class{v=[];idx=[];get triangleCount(){return this.idx.length/3}quad(e,t,n,r,i){let a=Td(wd(Cd(t,e),Cd(n,e))),o=[(e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2],s=[o[0]-i[0],o[1]-i[1],o[2]-i[2]],c=a[0]*s[0]+a[1]*s[1]+a[2]*s[2]<0,l=this.v.length/6,u=c?[e,r,n,t]:[e,t,n,r];for(let e of u)this.v.push(e[0],e[1],e[2],a[0],a[1],a[2]);this.idx.push(l,l+1,l+2,l,l+2,l+3)}box(e,t,n,r,i,a,o=0){let s=Math.cos(o),c=Math.sin(o),l=(r,i,a)=>[e+r*s+a*c,t+i,n-r*c+a*s],u=r/2,d=i/2,f=a/2,p=l(-u,-d,-f),m=l(u,-d,-f),h=l(u,d,-f),g=l(-u,d,-f),_=l(-u,-d,f),v=l(u,-d,f),y=l(u,d,f),b=l(-u,d,f),x=[e,t,n];this.quad(g,h,y,b,x),this.quad(_,v,m,p,x),this.quad(p,m,h,g,x),this.quad(v,_,b,y,x),this.quad(m,v,y,h,x),this.quad(_,p,g,b,x)}build(){return{layout:Sd,vertices:new Float32Array(this.v),indices:new Uint32Array(this.idx),count:this.idx.length}}};function Dd(e,t,n,r,i,a,o,s){let c=Math.cos(s),l=Math.sin(s),u=(e,n)=>{let i=[];for(let[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.push([t+a*e*c+o*e*l,n,r-a*e*l+o*e*c]);return i},d=u(a,n),f=u(o,n+i),p=[t,n+i/2,r];for(let t=0;t<4;t++){let n=(t+1)%4;e.quad(d[t],d[n],f[n],f[t],p)}e.quad(f[0],f[3],f[2],f[1],p)}var Od=7.19;function kd(){let e=new Ed;for(let[t,n]of Z.lakeCells){let r=t*Od-gd,i=n*Od-_d,a=3.645,o=vd,s=[r,o-1,i];e.quad([r-a,o,i-a],[r+a,o,i-a],[r+a,o,i+a],[r-a,o,i+a],s)}return e.build()}function Ad(e){return Z.fields.map(t=>{let n=new Ed;for(let[r,i]of t.cells){let t=e(r,i)+.3,a=3.645,o=[r,t-1,i];n.quad([r-a,t,i-a],[r+a,t,i-a],[r+a,t,i+a],[r-a,t,i+a],o)}return n.build()})}function jd(e,t,n,r){let i=new Ed,a=t/2;for(let t=1;t<e.length;t++){let[o,s]=e[t-1],[c,l]=e[t],u=c-o,d=l-s,f=Math.hypot(u,d);if(f<.01)continue;let p=-d/f*a,m=u/f*a,h=r(o,s)+n,g=r(c,l)+n,_=[(o+c)/2,Math.min(h,g)-1,(s+l)/2];i.quad([o+p,h,s+m],[c+p,g,l+m],[c-p,g,l-m],[o-p,h,s-m],_)}return i.build()}function Md(e){let t=new Ed;for(let n of Z.bridges){let r=n.a.x,i=n.a.z,a=n.b.x,o=n.b.z,s=a-r,c=o-i,l=Math.hypot(s,c),u=s/l,d=c/l,f=Math.atan2(s,c),p=Math.max(e(r,i),e(a,o))+2.2,m=(r+a)/2,h=(i+o)/2,g=n.id===`anping`?8:6;t.box(m,p,h,g,1,l,f);let _=-d*(g/2-.3),v=u*(g/2-.3);if(t.box(m+_,p+1,h+v,.4,1.6,l,f),t.box(m-_,p+1,h-v,.4,1.6,l,f),n.arch)for(let e=0;e<5;e++){let n=e/5,a=(e+1)/5,o=e=>Math.sin(e*Math.PI)*3,l=r+s*n,u=i+c*n,d=r+s*a,m=i+c*a,h=p+.5+o(n),g=p+.5+o(a),_=(h+g)/2;t.box((l+d)/2,_,(u+m)/2,.5,Math.abs(g-h)+.5,Math.hypot(d-l,m-u),f)}else if(n.id===`pohuang`||n.id===`kexu`){for(let e of[.25,.75]){let n=r+s*e,a=i+c*e;t.box(n,p+4,a,1,8,1,f)}for(let e of[-1,1]){let n=-d*(g/2-.3)*e,a=u*(g/2-.3)*e,o=p+7.5,l=[];for(let e=0;e<=4;e++){let t=e/4,u=e===0||e===4?0:e===2?-3.2:-1.8;l.push([r+s*t+n,o+u,i+c*t+a])}for(let e=1;e<l.length;e++){let n=l[e-1],r=l[e],i=(n[0]+r[0])/2,a=(n[1]+r[1])/2,o=(n[2]+r[2])/2;t.box(i,a,o,.3,Math.abs(r[1]-n[1])+.4,Math.hypot(r[0]-n[0],r[2]-n[2]),f)}}}}return t.build()}function Nd(){let e=new Ed,t=new Ed;for(let n of Z.boats){let r=vd+.6;e.box(n.x,r,n.z,3,1.2,10,n.rot),t.box(n.x,r+1.5,n.z,2.6,1.6,6,n.rot),t.box(n.x,r+2.6,n.z,3,.4,6.6,n.rot)}return[e.build(),t.build()]}function Pd(e){let t=new Ed;for(let n of Z.waypoints.filter(e=>e.major)){let r=e(n.x,n.z);t.box(n.x,r+3.5,n.z,.6,7,.6),t.box(n.x,r+7.5,n.z,2.4,2.4,.6)}return t.build()}function Fd(e){let t=new Ed;for(let n of Z.pillars)Dd(t,n.x,e(n.x,n.z)-.5,n.z,n.h,n.r,n.r*.55,n.yaw);return t.build()}function Id(e){let t=new Map;for(let n of Z.flowers){let r=n.rgb.join(`,`);t.has(r)||t.set(r,{rgb:n.rgb,b:new Ed});let i=t.get(r),a=e(n.x,n.z)+.35,o=.7,s=[n.x,a-1,n.z];i.b.quad([n.x-o,a,n.z-o],[n.x+o,a,n.z-o],[n.x+o,a,n.z+o],[n.x-o,a,n.z+o],s)}return[...t.values()].map(e=>({rgb:e.rgb,mesh:e.b.build()}))}var Ld={minWallHeight:2.6,wallBelowGround:.6,floorHeightMin:2.7,floorHeightMax:4.6,parapetThickness:.35,roofSlopeMin:.32,roofSlopeMax:1.2,roofUnitMinRoofArea:60,roofUnitAreaPerUnit:40,roofUnitMaxCount:3,roofUnitMinSize:1.2,roofUnitMaxSize:3,roofUnitMinHeight:.8,roofUnitMaxHeight:2,plinthHeight:.5,wallBaseShadeHeight:1.2,parapetHeight:.6};function Rd(e){let t=Float32Array.from(e);if(ne(t)>0)return t;let n=new Float32Array(t.length);for(let e=0;e<t.length/2;e++)n[e*2]=t[t.length-2-e*2],n[e*2+1]=t[t.length-1-e*2];return n}function zd(e,t){let n=Vu(Z.houses.map(n=>{let r=Rd(n.outline),i=[];for(let t=0;t<n.outline.length;t+=2)i.push(e(n.outline[t],n.outline[t+1]));let a=Math.min(...i),o=[...i].sort((e,t)=>e-t)[Math.floor(i.length/2)];return{id:n.id,hash:Math.imul(n.id,2654435761)>>>0,rings:[r],box:oe(r),groundMin:a,groundRef:o,eaveY:o+n.eaveM,ridgeY:o+n.ridgeM,roof:n.roof,ridgeAcross:!1,levelsHint:2,floorHeightNominal:3.1,bayWidth:3,windowStyle:1,parapetHeight:.6,wallColor:t.wall,roofColor:t.roof,trimColor:t.trim,roofUnitColor:t.unit}}),[],e,Ld);return{mesh:n.mesh,stats:{buildings:n.stats.buildings,roofFallbacks:n.stats.roofFallbacks}}}function Bd(e){return Z.trees.map(t=>({x:t.x,z:t.z,y:e(t.x,t.z)-.3,height:t.height,radius:t.radius,kind:`forest`,species:t.species,yaw:t.yaw,tint:t.tint,crownBase:t.crownBase,flex:t.flex,phase:t.phase}))}var Vd=`#include <header>
in vec3 a_pos;
in vec4 a_normal;
out vec3 v_world;
out vec3 v_normal;
void main() {
  v_world = a_pos;
  v_normal = a_normal.xyz;
  gl_Position = u_viewProj * vec4(a_pos, 1.0);
}`,Hd=`#include <header>
#include <noise>
#include <lighting>
#include <sky>
in vec3 v_world;
in vec3 v_normal;
out vec4 o_color;
void main() {
  vec3 n = normalize(v_normal);
  float patchN = vnoise(v_world.xz / 9.0, 11u) * 0.6 + vnoise(v_world.xz / 2.3, 12u) * 0.4 * detailVisibleAt(2.3, v_world);
  vec3 meadow = mix(vec3(0.23, 0.36, 0.16), vec3(0.38, 0.47, 0.24), patchN);
  vec3 earth = mix(vec3(0.42, 0.33, 0.22), vec3(0.52, 0.43, 0.30), patchN);
  vec3 rock = mix(vec3(0.48, 0.47, 0.45), vec3(0.60, 0.59, 0.56), patchN);
  vec3 col = mix(earth, meadow, smoothstep(0.72, 0.92, n.y));
  // High ground and steep faces turn to bare karst rock.
  float rocky = smoothstep(34.0, 48.0, v_world.y) * 0.7 + smoothstep(0.55, 0.35, n.y) * 0.6;
  col = mix(col, rock, clamp(rocky, 0.0, 1.0));
  // Damp dark earth just above the waterline.
  col = mix(vec3(0.24, 0.22, 0.17), col, smoothstep(-1.2, 1.2, v_world.y));
  col = mix(col, u_snow.rgb, u_weather.x * smoothstep(0.6, 0.9, n.y));
  float sun = sunVisibility(v_world, n, 1.2);
  vec3 c = toDisplay(col * u_warmTint.rgb * lightOn(n, sun, 1.0));
  o_color = vec4(aerialPerspective(applyFog(c, v_world), v_world), 1.0);
}`,Ud=`#include <header>
in vec3 a_pos;
in vec3 a_normal;
out vec3 v_world;
out vec3 v_normal;
void main() {
  v_world = a_pos;
  v_normal = a_normal;
  gl_Position = u_viewProj * vec4(a_pos, 1.0);
}`,Wd=`#include <header>
#include <noise>
#include <lighting>
#include <sky>
uniform vec3 u_albedo;
uniform float u_water;     // 1: water that mirrors the sky; 0: plain solid
in vec3 v_world;
in vec3 v_normal;
out vec4 o_color;
void main() {
  vec3 n = normalize(v_normal);
  float sun = sunVisibility(v_world, n, 1.0);
  vec3 toEye = skyToEye(v_world);
  vec3 c;
  if (u_water > 0.5) {
    vec2 w = v_world.xz / 6.0 + u_time.x * vec2(0.05, 0.03);
    vec2 tilt = (vec2(vnoise(w, 31u), vnoise(w + 13.0, 32u)) - 0.5) * 0.07 * detailVisibleAt(30.0, v_world)
      + (vec2(vnoise(w * 2.7 + 5.0, 33u), vnoise(w * 2.7 + 19.0, 34u)) - 0.5) * 0.04 * detailVisibleAt(12.0, v_world);
    vec3 nr = normalize(vec3(tilt.x, 1.0, tilt.y));
    float fres = 0.02 + 0.98 * pow(1.0 - max(dot(nr, toEye), 0.0), 5.0);
    c = toDisplay(u_albedo * u_warmTint.rgb * lightOn(n, sun, 1.0));
    c = mix(c, skyColorDir(reflect(-toEye, nr)), 0.9 * fres);
    float glint = pow(max(dot(reflect(-u_sunDir.xyz, nr), toEye), 0.0), 180.0) * sun;
    c += min(u_sunColor.rgb, vec3(1.0)) * glint * 0.7;
  } else {
    float sheen = pow(max(dot(reflect(-u_sunDir.xyz, n), toEye), 0.0), 24.0) * sun;
    c = toDisplay(u_albedo * u_warmTint.rgb * lightOn(n, sun, 1.0) + u_sunColor.rgb * sheen * 0.35);
  }
  o_color = vec4(aerialPerspective(applyFog(c, v_world), v_world), 1.0);
}`,Gd={name:`ground`,attribs:{a_pos:0,a_normal:1},passes:{shadow:`depth`,color:{vs:Vd,fs:Hd}}},Kd={name:`solid`,attribs:{a_pos:0,a_normal:1},passes:{shadow:`depth`,color:{vs:Ud,fs:Wd}}},qd=20261125,Jd=j({sky:`#8fb2c9`,wall:`#f2ede4`,roof:`#3a3230`,trim:`#d8d2c4`,unit:`#55504a`,glass:`#22272c`,glassLit:`#56646e`,plinth:`#5b554d`,leafDeep:`#1d4018`,leafMid:`#2c5a24`,leaf:`#4d7a35`,leafAlt:`#6a9a3f`,trunk:`#5a4632`,coniferDeep:`#16331c`,coniferMid:`#1f4526`,coniferLeaf:`#2a5a30`,season0:`#d8a83c`,season1:`#c47a2e`,season2:`#a34a24`,season3:`#6b5a4a`,spring:`#7fae56`}),Q=e=>Jd.index(e),Yd=yd(),Xd=bd(Yd),Zd=new Qe({fovYDeg:40,minDistance:30,maxDistance:1400,groundAt:Xd},{target:[0,8,0],yawDeg:0,pitchDeg:32,distance:620}),$=Zo({canvas:document.querySelector(`#view`),view:Zd,palette:Jd,background:[143/255,178/255,201/255],slots:[es(),ts(),Is(),dd()],renderer:{shadowSoftnessM:.35,shadowDistanceM:1200},environment:{mode:`day`,site:{latitudeDeg:22.71,longitudeDeg:107.03,dayOfYear:150,utcOffsetHours:8},hour:10,hoursPerSecond:.5,weather:{...ct},wind:{fromDeg:230,speedMs:5},clouds:{sizeM:520}},orbitControls:!0,precipitation:!0,sky:{hazeDistanceM:1500,cloudHeightM:1e3}}),{renderer:Qd,env:$d}=$;$d.day.pause(),$d.fogLayer={bottomY:Yd.minY,topY:Yd.maxY+10},Qd.bounds={min:[-600,Yd.minY-6,-260],max:[600,Yd.maxY+24,260]};var[ef,tf]=[Gd,Kd].map(e=>Qd.material(e)),nf=(e,t,n,r={})=>new ea({material:e,mesh:Qd.createMesh(t,e),uniforms:{u_albedo:{vec3:n},...r}});$.add(nf(ef,xd(Yd),[1,1,1])),$.add(nf(tf,kd(),[.15,.32,.42],{u_water:{float:1}}));for(let[e,t]of Ad(Xd).entries()){let n=Z.fields[e].rgb;$.add(nf(tf,t,n,{u_water:{float:0}}))}for(let e of Z.trails)e.id!==`boat`&&$.add(nf(tf,jd(e.pts,2.5,.3,Xd),[.93,.89,.78],{u_water:{float:0}}));$.add(nf(tf,jd(Z.road.pts,5,.3,Xd),[.55,.53,.5],{u_water:{float:0}})),$.add(nf(tf,Md(Xd),[.8,.78,.72],{u_water:{float:0}}));var[rf,af]=Nd();$.add(nf(tf,rf,[.35,.25,.18],{u_water:{float:0}})),$.add(nf(tf,af,[.5,.15,.12],{u_water:{float:0}})),$.add(nf(tf,Pd(Xd),[.85,.3,.15],{u_water:{float:0}})),$.add(nf(tf,Fd(Xd),[.55,.55,.53],{u_water:{float:0}}));for(let e of Id(Xd))$.add(nf(tf,e.mesh,e.rgb,{u_water:{float:0}}));var of=zd(Xd,{wall:Q(`wall`),roof:Q(`roof`),trim:Q(`trim`),unit:Q(`unit`)}),sf=Qd.material(ad(Ld));$.add(new ea({material:sf,mesh:Qd.createMesh(of.mesh,sf),uniforms:od({glass:Q(`glass`),glassLit:Q(`glassLit`),plinth:Q(`plinth`)})}));var cf={deep:Q(`leafDeep`),mid:Q(`leafMid`),leaf:Q(`leaf`),leafAlt:Q(`leafAlt`),trunk:Q(`trunk`)},lf={round:cf,tall:cf,birch:cf,shrub:cf,conifer:{deep:Q(`coniferDeep`),mid:Q(`coniferMid`),leaf:Q(`coniferLeaf`),leafAlt:Q(`coniferLeaf`),trunk:Q(`trunk`),evergreen:!0}},uf=Qd.material(Ms),df=new ta($.device,{material:uf,bounds:bs}),ff=[Q(`season0`),Q(`season1`),Q(`season2`),Q(`season3`)];df.batches=Ds(Bd(Xd),qd,lf).map(e=>{let t=Qd.createInstances({layout:ys,data:e.instances});return{lods:e.lods.map(e=>Qd.createMesh(e,uf,t)),instances:t,all:e.instances,uniforms:{...Ns(ff,Q(`spring`)),...Ts(e,1)}}}),$.add(df);var pf=e=>fd.find(t=>t.label===e),mf=e=>Z.peaks.find(t=>t.id===e),hf=e=>{let t=Z.bridges.find(t=>t.id===e);return[(t.a.x+t.b.x)/2,(t.a.z+t.b.z)/2]},gf=(e,t,n,r,i)=>({name:e,target:[t,r,n],yawDeg:0,pitchDeg:30,distance:i}),_f=[{name:`全景`,target:[0,8,0],yawDeg:0,pitchDeg:32,distance:620},gf(`西段八景`,pf(`龙碧滩`).x,pf(`龙碧滩`).z,15,260),gf(`安平大桥`,hf(`anping`)[0],hf(`anping`)[1],5,150),gf(`婆皇岛`,pf(`婆皇岛`).x,pf(`婆皇岛`).z,5,180),gf(`岜零码头`,pf(`岜零码头`).x,pf(`岜零码头`).z,5,150),gf(`千层红山`,mf(`qiancheng`).x,mf(`qiancheng`).z,40,220)],vf=(e,t,n=30)=>{Zd.setState({target:e,yawDeg:Zd.state().yawDeg,pitchDeg:n,distance:t}),$.invalidate()},yf=e=>document.querySelector(e),bf=yf(`#views`);for(let e of _f){let t=document.createElement(`button`);t.textContent=e.name,t.addEventListener(`click`,()=>vf(e.target,e.distance,e.pitchDeg)),bf.appendChild(t)}var xf={晴:{},多云:{cloudCover:.45},雨:{cloudCover:.8,precipitation:.7,precipitationKind:`rain`,wetness:.8,fog:.25},雾:{cloudCover:.3,fog:.7}},Sf=yf(`#weather`);for(let e of Object.keys(xf)){let t=document.createElement(`button`);t.textContent=e,e===`晴`&&t.classList.add(`active`),t.addEventListener(`click`,()=>{$d.weather={...ct,...xf[e]},Sf.querySelectorAll(`button`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),$.invalidate()}),Sf.appendChild(t)}var Cf=yf(`#hour`),wf=yf(`#hourLabel`),Tf=e=>`${String(Math.floor(e)).padStart(2,`0`)}:${e%1==0?`00`:`30`}`;Cf.addEventListener(`input`,()=>{let e=Number(Cf.value);$d.day.pause(),$d.day.set(e),wf.textContent=Tf(e),yf(`#dayPlay`).textContent=`▶ 播放一天`,$.invalidate()}),yf(`#dayPlay`).addEventListener(`click`,e=>{let t=e.currentTarget;$d.day.playing?($d.day.pause(),t.textContent=`▶ 播放一天`):($d.day.play(),t.textContent=`⏸ 暂停`),$.invalidate()});var Ef=yf(`#wpList`),Df=yf(`#infoCard`),Of=e=>{Df.innerHTML=``;let t=document.createElement(`h3`);t.textContent=e.label;let n=document.createElement(`p`);n.textContent=e.text,Df.append(t,n),vf([e.x,Xd(e.x,e.z)+2,e.z],120)},kf=e=>{Ef.innerHTML=``;let t=e.trim(),n=fd.filter(e=>!t||e.label.includes(t)||e.text.includes(t)||e.kind.includes(t));for(let e of n.slice(0,120)){let t=document.createElement(`div`);t.className=`wp`;let n=document.createElement(`span`);n.className=`tag`,n.textContent=e.kind,t.append(n,document.createTextNode(e.label)),t.addEventListener(`click`,()=>Of(e)),Ef.appendChild(t)}if(n.length===0){let e=document.createElement(`div`);e.className=`wp`,e.textContent=`没有找到相关地点，试试“码头”“卫生间”“龙碧滩”。`,Ef.appendChild(e)}};yf(`#wpSearch`).addEventListener(`input`,e=>kf(e.target.value)),kf(``);var Af=yf(`#chatLog`),jf=yf(`#chatInput`),Mf=(e,t)=>{let n=document.createElement(`div`);n.className=`q`,n.textContent=`你：${e}`;let r=document.createElement(`div`);r.className=`a`,r.textContent=t,Af.append(n,r),Af.scrollTop=Af.scrollHeight},Nf=e=>{let t=e.trim();if(!t)return`可以问我景点、码头、卫生间、门票，比如“龙碧滩在哪？”`;if(/门票|票价|多少钱|收费/.test(t))return`门票价格以景区当日公示为准，建议到岜零游客中心或安平游客中心现场确认。`;if(/卫生间|厕所|洗手间/.test(t))return`景区共有 ${fd.filter(e=>e.kind===`卫生间`).length} 处卫生间（安平游客中心旁、沿线景点附近均有）。点击右侧列表里的“卫生间”可定位查看。`;if(/码头/.test(t))return`码头有：${fd.filter(e=>e.label.includes(`码头`)).map(e=>e.label).join(`、`)}。游船从岜零码头出发，约 50 分钟到官田码头，每半小时发船或客满发船，建议最晚 16:00 前登船。`;let n=fd.filter(e=>e.label.includes(t)||t.includes(e.label));if(n.length>0){let e=n[0];return Of(e),`${e.label}：${e.text}`}let r=fd.filter(e=>e.text.includes(t));return r.length>0?`找到 ${r.length} 处相关：${r.slice(0,5).map(e=>e.label).join(`、`)}。点击右侧列表可查看详情。`:`没找到相关介绍。可以试试：龙碧滩在哪？／怎么去官田码头？／哪里有卫生间？／门票多少钱？`},Pf=()=>{let e=jf.value;e.trim()&&(Mf(e,Nf(e)),jf.value=``)};yf(`#chatSend`).addEventListener(`click`,Pf),jf.addEventListener(`keydown`,e=>{e.key===`Enter`&&Pf()});var Ff=e=>(e(),$.renderNow(),void 0);window.__wh={kind:`orbit`,ready:new Promise(e=>requestAnimationFrame(()=>($.renderNow(),e()))),presets:()=>_f.map(e=>({name:e.name,target:e.target,yawDeg:e.yawDeg,pitchDeg:e.pitchDeg,distance:e.distance})),setView:e=>Ff(()=>Zd.setState(e)),getView:()=>Zd.state(),setTimeOfDay:e=>Ff(()=>($d.day.pause(),$d.day.set(e))),render:()=>$.renderNow(),setWeather:e=>Ff(()=>$d.weather={...ct,...xf[e]}),stats:()=>({...Qd.lastStats,renderer:$.device.name,seed:qd,waterY:vd,counts:Z.meta.counts,houses:of.stats}),counts:()=>Z.meta.counts},$.start(),requestAnimationFrame(()=>{let e=Qd.lastStats;yf(`#stats`).textContent=`三角面 ${e.triangles.toLocaleString()} · 绘制 ${e.drawCalls} 次 · 64 景点 · 55 房 · 394 树`});