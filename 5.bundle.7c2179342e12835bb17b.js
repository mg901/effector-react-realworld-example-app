(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Ih6C:function(t,e,n){"use strict";n.r(e);var r=n("dY8W"),o=n("rEH3"),c=n("UYjC"),a=n("YSF1"),i=n("lyZd"),u=n("eZyy"),f=n("6le1"),l=n("YzYS");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=o.e(),d=g.Gate,j=g.favoriteToggled,O=g.$currentPage,m=g.$currentTag,y=g.$pageSize,v=g.setFavoriteArticleFx,h=g.setUnfavoriteArticleFx,S=Object(a.createEvent)(),w=Object(a.createEffect)((function(t){var e=t.tag,n=t.page;return u.a.get("articles?tag=".concat(encodeURIComponent(e),"&").concat(Object(l.a)(10,n))).then((function(t){return t.data}))})),P=Object(i.status)({effect:w}),C=Object(a.createStore)({}).on(w.done,(function(t,e){var n=e.params,r=e.result;return p(p({},t),{},b({},n.tag,r))})),x=Object(a.combine)(C,m,(function(t,e){var n;return null!==(n=t[e])&&void 0!==n?n:{articles:[],articlesCount:0}})).on([v.done,h.done],(function(t,e){var n=e.params,r=e.result;return p(p({},t),{},{articles:t.articles.map((function(t){return t.slug!==n?t:p(p({},t),{},{favorited:r.article.favorited,favoritesCount:r.article.favoritesCount})}))})})),Y=x.map((function(t){return t.articles})),E=x.map((function(t){return t.articlesCount})),F=Object(a.combine)(P,Y,(function(t,e){return"done"===t&&0===e.length})),k=Object(a.combine)({total:E,loading:w.pending,isEmptyFeed:F,currentPage:O,pageSize:y,totalPages:E});Object(a.sample)({source:{tag:m,page:O,pageSize:y},clock:[d.open,S,Object(a.guard)(m,{filter:Boolean})],target:w}),Object(a.sample)({source:{path:f.f.$pathname,tag:m},clock:S,fn:function(t,e){return{path:t.path,page:e,tag:t.tag}}}).watch((function(t){var e=t.path,n=t.page,r=t.tag;f.e.replace("".concat(e,"?tag=").concat(r,"&page=").concat(n))}));var z=n("oYCi");e.default=function(){Object(r.b)(d);var t=Object(r.d)(k),e=t.isEmptyFeed,n=t.currentPage,a=t.pageSize,i=t.totalPages,u=t.loading;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(o.d,{show:e}),Object(z.jsx)(o.c,{children:Object(r.c)(Y,{getKey:function(t){return t.slug},fn:function(t){return Object(z.jsx)("li",{children:Object(z.jsx)(o.b,{data:t,onClick:function(){j(t)}})})}})}),Object(z.jsx)(c.m,{current:n,pageSize:a,total:i,onItemClick:S}),Object(z.jsx)(c.o,{loading:u})]})}},YzYS:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){return"limit=".concat(t,"&offset=").concat(e*t)}},lyZd:function(t,e,n){var r=n("YSF1").createStore,o=n("q0Di").readConfig;t.exports={status:function(t){var e=o(t,["sid","name","loc","effect","defaultValue"]),n=e.sid,c=e.name,a=e.loc,i=e.effect,u=e.defaultValue,f=r(void 0===u?"initial":u,{sid:n,loc:a,name:c});return f.on(i,(function(){return"pending"})).on(i.done,(function(){return"done"})).on(i.fail,(function(){return"fail"})),f}}},q0Di:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){n.filter((function(e){return void 0!==t[e]})).forEach((function(n){e[n]=t[n]}))}t.exports={readConfig:function t(e,o){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return"object"!==n(e)||null===e||(e.config&&t(e.config,o,c),r(e,c,o),e.ɔ&&t(e.ɔ,o,c)),c}}}}]);