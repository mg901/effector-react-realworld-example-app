!function(){"use strict";var e,t,n,r,o={},f={};function a(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={exports:{}};return o[e].call(n.exports,n,n.exports,a),n.exports}a.m=o,e=[],a.O=function(t,n,r,o){if(!n){var f=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||f>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<f&&(f=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return e+"."+{331:"ca518e9fe8ae4e051edf",382:"d5c09ed12b160963cd53",419:"45a4b022a9c1843f8bbc",432:"57b3e51e1e412a6043e8",676:"807455efa64d301b61d9",710:"e4e1900768f08502e8f0",771:"0bf5f826f3a6385ee0c8",782:"07118bcf278cdbd8f50e",865:"05b1d45ed49384597d93",890:"58833807b8bc58477554",978:"957363fbe7ea9a1a8ad4",980:"941826caa39c02a2487c",991:"eaa1d233c85e4ae319df"}[e]+".js"},a.miniCssF=function(e){return e+"."+{331:"16c4eba5c2e58679bc5b",419:"16c4eba5c2e58679bc5b",432:"9803c033314d2ed0ca8e",676:"16c4eba5c2e58679bc5b",710:"76247903f516962bc232",782:"18c40a63634cb8fc0422",865:"16c4eba5c2e58679bc5b",890:"18c40a63634cb8fc0422",978:"18c40a63634cb8fc0422",980:"16c4eba5c2e58679bc5b",991:"e4da168ec4d3c21a953e"}[e]+".css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},a.l=function(e,n,r,o){if(t[e])t[e].push(n);else{var f,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e){f=d;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,a.nc&&f.setAttribute("nonce",a.nc),f.src=e),t[e]=[n];var l=function(n,r){f.onerror=f.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=l.bind(null,f.onerror),f.onload=l.bind(null,f.onload),i&&document.head.appendChild(f)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/effector-react-realworld-example-app/",n=function(e){return new Promise((function(t,n){var r=a.miniCssF(e),o=a.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){var a;if((o=(a=f[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(f){if(o.onerror=o.onload=null,"load"===f.type)n();else{var a=f&&("load"===f.type?"missing":f.type),i=f&&f.target&&f.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=i,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},a.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{331:1,419:1,432:1,676:1,710:1,782:1,865:1,890:1,978:1,980:1,991:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var f=a.p+a.u(t),i=new Error;a.l(f,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),f=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",i.name="ChunkLoadError",i.type=o,i.request=f,r[1](i)}}),"chunk-"+t,t)}else e[t]=0},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,f=n[0],i=n[1],u=n[2],c=0;if(f.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(u)var d=u(a)}for(t&&t(n);c<f.length;c++)o=f[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();