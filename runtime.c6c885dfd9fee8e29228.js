!function(){"use strict";var e,t,n,r,o={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,e=[],a.O=function(t,n,r,o){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var f=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[u])}))?n.splice(u--,1):(f=!1,o<i&&(i=o));if(f){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return e+"."+{28:"f5a84805c3e52e587ad8",64:"dc9aad5f4794a2d1f93a",69:"c21d54d8024dcc89b30f",74:"af895d790d18d97751db",100:"1171d8f33788f1c51de6",127:"cbb3bd68af3b3caabf87",411:"a2b8b2df19f4ef0ce28c",474:"37b681f812ab43f503f8",524:"fe0b28ea642cb044e193",593:"476f4a1200101c017f7f",749:"01d15df62ae557454b2b",759:"40206c62965741716b8d",916:"a06417edf56b5096b844"}[e]+".js"},a.miniCssF=function(e){return(179===e?"main":e)+"."+{28:"05c3f4a5def647644ee4",100:"c4ea58533d566e7e85d2",179:"1dc90fb62c358f79b408",411:"05c3f4a5def647644ee4",474:"e0bd71557bb71e2267d1",524:"4473006215c0cc7eb422",593:"05c3f4a5def647644ee4",759:"05c3f4a5def647644ee4",916:"05c3f4a5def647644ee4"}[e]+".css"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},a.l=function(e,n,r,o){if(t[e])t[e].push(n);else{var i,f;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=e),t[e]=[n];var l=function(n,r){i.onerror=i.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),f&&document.head.appendChild(i)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/effector-react-realworld-example-app/",n=function(e){return new Promise((function(t,n){var r=a.miniCssF(e),o=a.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),f=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=f,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},a.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{28:1,100:1,411:1,474:1,524:1,593:1,759:1,916:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=a.p+a.u(t),f=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,r[1](f)}}),"chunk-"+t,t)}else e[t]=0},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],f=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in f)a.o(f,r)&&(a.m[r]=f[r]);if(u)var d=u(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();