!function(){"use strict";var e,t,n,r,o={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return o[e].call(n.exports,n,n.exports,f),n.exports}f.m=o,e=[],f.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&o||a>=o)&&Object.keys(f.O).every((function(e){return f.O[e](n[u])}))?n.splice(u--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return e+"."+{146:"5cebb1d252ac4ab0cd2f",148:"af1977b6f4189d33f3ce",169:"8aa252245a4325217b25",331:"acc1967673b404d03362",419:"9d4de7ecbb9037eb38b8",531:"02556742c467958e14ad",583:"9bac988b1fa45307ff61",676:"b7a184e22afe27ae020a",771:"0bf5f826f3a6385ee0c8",865:"1bec663013f6f41e5db1",890:"dfcc37a128b702af1f21",978:"c7e95afa13e4f23593c9"}[e]+".js"},f.miniCssF=function(e){return e+"."+{146:"c608198999158b4eec82",148:"dbc4502ffe8f7965b857",331:"498f83fd02b564cde228",419:"498f83fd02b564cde228",531:"8a8da0f0537ff230df20",583:"4473006215c0cc7eb422",676:"498f83fd02b564cde228",865:"498f83fd02b564cde228",890:"8a8da0f0537ff230df20",978:"8a8da0f0537ff230df20"}[e]+".css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},f.l=function(e,n,r,o){if(t[e])t[e].push(n);else{var a,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==e){a=d;break}}a||(i=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.src=e),t[e]=[n];var l=function(n,r){a.onerror=a.onload=null,clearTimeout(s);var o=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(r)})),n)return n(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),i&&document.head.appendChild(a)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/effector-react-realworld-example-app/",n=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(f=n[r]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(o===e||o===t))return f}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var f;if((o=(f=a[r]).getAttribute("data-href"))===e||o===t)return f}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var f=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=f,u.request=i,o.parentNode.removeChild(o),r(u)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},f.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{146:1,148:1,331:1,419:1,531:1,583:1,676:1,865:1,890:1,978:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0};f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(666!=t){var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),i=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,r[1](i)}}),"chunk-"+t,t)}else e[t]=0},f.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],i=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)f.o(i,r)&&(f.m[r]=i[r]);if(u)var d=u(f)}for(t&&t(n);c<a.length;c++)o=a[c],f.o(e,o)&&e[o]&&e[o][0](),e[a[c]]=0;return f.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();