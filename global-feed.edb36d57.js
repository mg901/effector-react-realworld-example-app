parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FZvW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"changeUrlFx",{enumerable:!0,get:function(){return a.changeUrlFx}}),exports.$isFirstBoot=exports.getFeedFx=exports.$pageSize=exports.$feed=exports.$totalPages=exports.$articles=exports.$currentPage=exports.favoriteToggled=exports.currentPageSettled=exports.PageGate=void 0;var e,t=require("effector"),r=require("effector-react"),o=p(require("api")),a=p(require("features/feed")),i=require("library/limit");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var s=(0,r.createGate)();exports.PageGate=s;var c=(e=a.createFeedModel()).currentPageSettled,u=e.favoriteToggled,f=e.$currentPage,l=e.$articles,g=e.$totalPages,x=e.$feed,d=e.$pageSize;exports.$pageSize=d,exports.$feed=x,exports.$totalPages=g,exports.$articles=l,exports.$currentPage=f,exports.favoriteToggled=u,exports.currentPageSettled=c;var P=(0,t.createEffect)(function(e){var t=e.pageSize,r=e.page;return o.get("/articles?"+(0,i.limit)(t,r))});exports.getFeedFx=P;var $=(0,t.createStore)(!0);exports.$isFirstBoot=$;
},{"effector":"hr1S","effector-react":"wuaz","api":"in7L","features/feed":"emfq","library/limit":"nHV0"}],"F1jr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=r(require("./model"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=n?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(o,u,f):o[u]=e[u]}return o.default=e,r&&r.set(e,o),o}exports.model=e;
},{"./model":"FZvW"}],"XWuX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;var e=i(require("react")),r=require("effector-react"),t=require("library/item-render"),a=require("ui"),o=require("../model");function i(e){return e&&e.__esModule?e:{default:e}}var n=function(i){var n=i.path,u=(0,r.useStore)(o.model.$totalPages),d=(0,r.useStore)(o.model.$currentPage),l=(0,r.useStore)(o.model.$pageSize);return e.default.createElement(a.Pagination,{current:d,itemRender:(0,t.itemRender)(n),pageSize:l,total:u,onChange:o.model.currentPageSettled})};exports.Pagination=n;
},{"react":"n8MK","effector-react":"wuaz","library/item-render":"PXBq","ui":"npgd","../model":"F1jr"}],"naB1":[function(require,module,exports) {
"use strict";var e=require("effector"),r=o(require("library/router")),t=require("./model");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var u=o?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(t,a,u):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}t.$isFirstBoot.on(t.getFeedFx.done,function(){return!1}),t.$feed.on(t.getFeedFx.doneData,function(e,r){return r}),(0,e.forward)({from:[t.PageGate.open,t.$currentPage],to:(0,e.attach)({source:{pageSize:t.$pageSize,page:t.$currentPage},effect:t.getFeedFx})}),(0,e.sample)({source:r.model.$pathname,clock:t.currentPageSettled,fn:function(e,r){return{path:e,page:r}},target:t.changeUrlFx});
},{"effector":"hr1S","library/router":"CgWG","./model":"FZvW"}],"aow9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalFeedPage=void 0;var e=n(require("react")),t=require("effector-react"),r=require("ui"),a=require("../model"),l=require("./pagination");function n(e){return e&&e.__esModule?e:{default:e}}require("../model/init");var i=function(){return(i=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},u=function(n){var u=n.match.path;(0,t.useGate)(a.model.PageGate);var o=(0,t.useStore)(a.model.$isFirstBoot);return e.default.createElement(e.default.Fragment,null,e.default.createElement(r.List,null,(0,t.useList)(a.model.$articles,function(t){return e.default.createElement("li",null,e.default.createElement(r.ArticlePreview,i({},t,{onClick:function(){return a.model.favoriteToggled(t)}})))})),e.default.createElement(l.Pagination,{path:u}),e.default.createElement(r.Spinner,{loading:o}))};exports.GlobalFeedPage=u;
},{"react":"n8MK","effector-react":"wuaz","ui":"npgd","../model":"F1jr","./pagination":"XWuX","../model/init":"naB1"}],"O1JE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"GlobalFeedPage",{enumerable:!0,get:function(){return e.GlobalFeedPage}});var e=require("./ui/global-feed");
},{"./ui/global-feed":"aow9"}]},{},[], null)
//# sourceMappingURL=/effector-react-realworld-example-app/global-feed.edb36d57.js.map