!function(){"use strict";var e,t,n,r,o={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e].call(n.exports,n,n.exports,f),n.exports}f.m=o,e=[],f.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return e+"."+{331:"349e26e60a61992beb73",382:"d5c09ed12b160963cd53",419:"032b5a8264477b71bfd8",432:"782840eee159356f266b",676:"fab492614e50a9bfa2dc",710:"e4e1900768f08502e8f0",771:"0bf5f826f3a6385ee0c8",782:"07118bcf278cdbd8f50e",865:"c1008362febe3fa655d0",890:"18cf4bd1f6b30a391d0c",978:"3c7d1862f7fb8a3fa93b",980:"659c41516f37b5e40e54",991:"eefb13ed10cf5fca3d7e"}[e]+".js"},f.miniCssF=function(e){return e+"."+{331:"16c4eba5c2e58679bc5b",419:"16c4eba5c2e58679bc5b",432:"9803c033314d2ed0ca8e",676:"16c4eba5c2e58679bc5b",710:"76247903f516962bc232",782:"18c40a63634cb8fc0422",865:"16c4eba5c2e58679bc5b",890:"18c40a63634cb8fc0422",978:"18c40a63634cb8fc0422",980:"16c4eba5c2e58679bc5b",991:"e4da168ec4d3c21a953e"}[e]+".css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},f.l=function(e,n,r,o){if(t[e])t[e].push(n);else{var a,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.src=e),t[e]=[n];var l=function(n,r){a.onerror=a.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),i&&document.head.appendChild(a)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/effector-react-realworld-example-app/",n=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var f;if((o=(f=a[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var f=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=f,u.request=i,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},f.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{331:1,419:1,432:1,676:1,710:1,782:1,865:1,890:1,978:1,980:1,991:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}else e[t]=0},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)f.o(i,r)&&(f.m[r]=i[r]);if(u)var d=u(f)}for(t&&t(n);c<a.length;c++)o=a[c],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();