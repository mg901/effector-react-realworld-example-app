"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[331],{7712:function(e,t,r){r.d(t,{f:function(){return f}});var n=r(1549),i=r(3719),a=r(946),o=function(e){var t=e.slug;return a.WY({url:"articles/".concat(t,"/favorite"),method:"post"})},c=function(e){var t=e.slug;return a.WY({url:"articles/".concat(t,"/favorite"),method:"delete"})};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=e.effect,r=(0,n.yM)(),a=r.filter({fn:function(e){return!0===e.favorited}}),u=r.filter({fn:function(e){return!1===e.favorited}}),s=(0,n.GW)(o),f=(0,n.GW)(c),d=(0,n.MT)({articlesCount:0,articles:[]}).on(t.doneData,(function(e,t){return t})).on(a,(function(e,t){return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:l(l({},e),{},{favorited:!e.favorited,favoritesCount:e.favoritesCount-1})}))})})).on(u,(function(e,t){return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==t.slug?e:l(l({},e),{},{favorited:!e.favorited,favoritesCount:e.favoritesCount+1})}))})})).on([s.done,f.done],(function(e,t){var r=t.params,n=t.result;return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:l(l({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})).on([s.fail,f.fail],(function(e,t){var r=t.params;return l(l({},e),{},{articles:e.articles.map((function(e){return e.slug!==r.slug?e:l(l({},e),{},{favorited:r.favorited,favoritesCount:r.favoritesCount})}))})})),v=d.map((function(e){return e.articlesCount})),g=d.map((function(e){return e.articles})),p=(0,i.status)({effect:t}),m=(0,n.$e)(p,g,(function(e,t){return("done"===e||"fail"===e)&&0===t.length}));return(0,n.Vl)({source:r,match:{favorite:function(e){return!0===e.favorited},unfavorite:function(e){return!1===e.favorited}},cases:{favorite:f,unfavorite:s}}),{favoriteArticleToggled:r,setUnfavoriteArticleFx:f,$feed:d,$totalPages:v,$articles:g,$isEmptyFeed:m}}},7023:function(e,t,r){r.d(t,{q:function(){return o}});var n=r(7378),i=r(4289),a=r(4246),o=(0,n.memo)((function(e){var t=e.author,r=e.createdAt,n=e.children;return(0,a.jsxs)("div",{className:"article-meta",children:[(0,a.jsx)(i.rU,{to:"/@".concat(t.username),children:(0,a.jsx)("img",{alt:t.username,src:t.image})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)(i.rU,{className:"author",to:"/@".concat(t.username),children:t.username}),(0,a.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})}));o.displayName="ArticleMeta"},154:function(e,t,r){r.d(t,{f:function(){return m}});var n=r(9041),i=r(9848),a=r(7378),o=r(4289),c=r(2617),u=r(7545),l=r(7023),s=r(7765),f=r(4246),d=function(e){var t=e.slug,r=e.favorited,n=e.favoritesCount,i=e.onClick,a=e.children;return(0,f.jsxs)(s.z,{className:"button-favorite btn-outline-primary","data-active":r,size:"sm",onClick:function(){i({slug:t,favorited:r,favoritesCount:n})},children:[(0,f.jsx)("i",{className:"ion-heart"})," ",a]})},v=(0,a.memo)((function(e){var t=e.author,r=e.createdAt,n=e.slug,i=e.title,a=e.description,s=e.tagList,v=e.favorited,g=e.favoritesCount,p=e.onFavoriteToggle;return(0,f.jsxs)("article",{className:"article-preview",children:[(0,f.jsx)(l.q,{author:t,createdAt:r,children:(0,f.jsx)("div",{className:"pull-xs-right",children:(0,f.jsx)(d,{favorited:v,favoritesCount:g,slug:n,onClick:p,children:g})})}),(0,f.jsxs)(o.rU,{className:"preview-link",to:"/article/".concat(n),children:[(0,f.jsx)("h1",{children:i}),(0,f.jsx)("p",{children:a}),(0,f.jsx)("span",{children:"Read more..."}),(0,f.jsx)(c.o,{children:s.map((function(e){return(0,f.jsx)(u.V,{children:e.toLowerCase()},e)}))})]})]})}));v.displayName="Article Preview";var g=function(e){var t=e.children;return(0,f.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},p=function(e){return e.show?(0,f.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},m=function(e){var t=e.loading,r=e.isEmpty,a=e.articlesStore,o=e.onFavoriteToggle;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{show:r}),(0,f.jsx)(g,{children:(0,n.sm)(a,{getKey:function(e){return e.slug},fn:function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(v,{author:e.author,createdAt:e.createdAt,description:e.description,favorited:e.favorited,favoritesCount:e.favoritesCount,slug:e.slug,tagList:e.tagList,title:e.title,onFavoriteToggle:o})})}})}),(0,f.jsx)(i.$,{show:t})]})}},2331:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(7378),i=r(335),a=r(154),o=r(7238),c=r(1549),u=r(9041),l=r(7712),s=r(946),f=r(3300),d=(0,c.GW)((function(e){var t=e.page,r=e.tag,n=e.pageSize,i=t-1;return s.WY({url:"articles?tag=".concat(encodeURIComponent(r),"&").concat((0,f.b)(n,i)),method:"get"})})),v=l.f({effect:d}),g=v.favoriteArticleToggled,p=(v.$feed,v.$isEmptyFeed),m=v.$articles,h=v.$totalPages,y=function(){return(0,u.oR)(d.pending)},j=function(){return(0,u.oR)(p)},b=function(){return(0,u.oR)(h)},O=r(4246);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){c=!0,i=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){var t=e.pageSize,r=void 0===t?10:t,c=function(e){var t=x((0,i.Kx)({page:(0,i.Wc)(i.yz,1),tag:i.Zp}),2),r=t[0],a=r.page,o=r.tag,c=t[1],u=y(),l=j(),s=b();return(0,n.useEffect)((function(){o&&d({page:a,tag:o,pageSize:e})}),[a,o,e]),{page:a,loading:u,isEmpty:l,totalPages:s,handlePageChange:function(e){c({page:e})}}}(r);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(a.f,{articlesStore:m,isEmpty:c.isEmpty,loading:c.loading,onFavoriteToggle:g}),(0,O.jsx)(o.t,{current:c.page,pageSize:r,total:c.totalPages,onPageChange:c.handlePageChange})]})}},3300:function(e,t,r){r.d(t,{b:function(){return n}});var n=function(e,t){return"limit=".concat(e,"&offset=").concat(t*e)}},7765:function(e,t,r){r.d(t,{z:function(){return f}});var n=r(7378),i=r(8944),a=r(4246),o=["type","size","className","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var f=(0,n.memo)((0,n.forwardRef)((function(e,t){var r=e.type,n=void 0===r?"button":r,c=e.size,l=void 0===c?"":c,f=e.className,d=void 0===f?"":f,v=e.children,g=s(e,o),p=(0,i.Z)("btn",{"btn-sm":"sm"===l,"btn-lg":"lg"===l});return(0,a.jsx)("button",u(u({className:"".concat(p," ").concat(d),ref:t,type:n},g),{},{children:v}))})));f.displayName="Button"},7238:function(e,t,r){r.d(t,{t:function(){return o}});var n=r(7378),i=r(4246),a=(0,n.memo)((function(e){var t=e.active,r=e.onItemClick,n=e.item,a=e.children;return(0,i.jsx)("button",{className:"pagination-item","data-active":t,type:"button",onClick:function(){return r(n)},children:(0,i.jsx)("span",{className:"page-link",children:a})})})),o=(0,n.memo)((function(e){var t=function(e){var t=e.total,r=e.pageSize,i=e.onPageChange,a=(0,n.useMemo)((function(){return function(e,t){return Array.from({length:Math.ceil(e/t)},(function(e,t){return t+1}))}(t,r)}),[t,r]),o=t>r,c=(0,n.useCallback)((function(e){i(e)}),[i]);return{items:a,show:o,handleClick:c}}(e),r=t.show,o=t.items,u=t.handleClick;return r?(0,i.jsx)("nav",{children:(0,i.jsx)("ul",{className:"pagination",children:o.map((function(t){return(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(a,{active:c(t,e.current),item:t,onItemClick:u,children:t},t)},t)}))})}):null}));function c(e,t){return e===t}},7545:function(e,t,r){r.d(t,{V:function(){return i}});var n=r(4246),i=function(e){var t=e.children;return(0,n.jsx)("li",{className:"tag-default tag-pill tag-outline",children:t})}}}]);