"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[331],{7712:function(t,e,r){r.d(e,{f:function(){return f}});var n=r(1549),a=r(2575),i=r(946),o=function(t){var e=t.slug;return i.WY({url:"articles/".concat(e,"/favorite"),method:"post"})},c=function(t){var e=t.slug;return i.WY({url:"articles/".concat(e,"/favorite"),method:"delete"})};function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=t.effect,r=(0,n.yM)(),i=r.filter({fn:function(t){return!0===t.favorited}}),u=r.filter({fn:function(t){return!1===t.favorited}}),s=(0,n.GW)(o),f=(0,n.GW)(c),d=(0,n.MT)({articlesCount:0,articles:[]}).on(e.doneData,(function(t,e){return e})).on(i,(function(t,e){return l(l({},t),{},{articles:t.articles.map((function(t){return t.slug!==e.slug?t:l(l({},t),{},{favorited:!t.favorited,favoritesCount:t.favoritesCount-1})}))})})).on(u,(function(t,e){return l(l({},t),{},{articles:t.articles.map((function(t){return t.slug!==e.slug?t:l(l({},t),{},{favorited:!t.favorited,favoritesCount:t.favoritesCount+1})}))})})).on([s.done,f.done],(function(t,e){var r=e.params,n=e.result;return l(l({},t),{},{articles:t.articles.map((function(t){return t.slug!==r.slug?t:l(l({},t),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})).on([s.fail,f.fail],(function(t,e){var r=e.params;return l(l({},t),{},{articles:t.articles.map((function(t){return t.slug!==r.slug?t:l(l({},t),{},{favorited:r.favorited,favoritesCount:r.favoritesCount})}))})})),v=d.map((function(t){return t.articlesCount})),g=d.map((function(t){return t.articles})),m=(0,a.i)({effect:e}),p=(0,n.$e)(m,g,(function(t,e){return("done"===t||"fail"===t)&&0===e.length}));return(0,n.Vl)({source:r,match:{favorite:function(t){return!0===t.favorited},unfavorite:function(t){return!1===t.favorited}},cases:{favorite:f,unfavorite:s}}),{favoriteArticleToggled:r,setUnfavoriteArticleFx:f,$feed:d,$totalPages:v,$articles:g,$isEmptyFeed:p}}},7023:function(t,e,r){r.d(e,{q:function(){return o}});var n=r(7378),a=r(4289),i=r(4246),o=(0,n.memo)((function(t){var e=t.author,r=t.createdAt,n=t.children;return(0,i.jsxs)("div",{className:"article-meta",children:[(0,i.jsx)(a.rU,{to:"/@".concat(e.username),children:(0,i.jsx)("img",{alt:e.username,src:e.image})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsx)(a.rU,{className:"author",to:"/@".concat(e.username),children:e.username}),(0,i.jsx)("span",{className:"date",children:new Date(r).toDateString()})]}),n]})}));o.displayName="ArticleMeta"},2623:function(t,e,r){r.d(e,{f:function(){return j}});var n=r(9041),a=r(4162),i=r(7378),o=r(4289),c=r(2617),u=r(7545),l=r(7023),s=r(7765),f="favorite-i59x8woG5_",d=r(4246),v=function(t){var e=t.slug,r=t.favorited,n=t.favoritesCount,a=t.onClick,i=t.children;return(0,d.jsxs)(s.z,{className:"".concat(f," btn-outline-primary"),"data-active":r,size:"sm",onClick:function(){a({slug:e,favorited:r,favoritesCount:n})},children:[(0,d.jsx)("i",{className:"ion-heart"})," ",i]})},g=(0,i.memo)((function(t){var e=t.author,r=t.createdAt,n=t.slug,a=t.title,i=t.description,s=t.tagList,f=t.favorited,g=t.favoritesCount,m=t.onFavoriteToggle;return(0,d.jsxs)("article",{className:"article-preview",children:[(0,d.jsx)(l.q,{author:e,createdAt:r,children:(0,d.jsx)("div",{className:"pull-xs-right",children:(0,d.jsx)(v,{favorited:f,favoritesCount:g,slug:n,onClick:m,children:g})})}),(0,d.jsxs)(o.rU,{className:"preview-link",to:"/article/".concat(n),children:[(0,d.jsx)("h1",{children:a}),(0,d.jsx)("p",{children:i}),(0,d.jsx)("span",{children:"Read more..."}),(0,d.jsx)(c.o,{children:s.map((function(t){return(0,d.jsx)(u.V,{children:t.toLowerCase()},t)}))})]})]})}));g.displayName="Article Preview";var m="wrapper-tY1ABXmOol",p=function(t){var e=t.children;return(0,d.jsx)("ul",{className:"".concat(m," list-unstyled"),children:e})},h=function(t){return t.show?(0,d.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null},j=function(t){var e=t.loading,r=t.isEmpty,i=t.articlesStore,o=t.onFavoriteToggle;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{show:r}),(0,d.jsx)(p,{children:(0,n.sm)(i,{getKey:function(t){return t.slug},fn:function(t){return(0,d.jsx)("li",{children:(0,d.jsx)(g,{author:t.author,createdAt:t.createdAt,description:t.description,favorited:t.favorited,favoritesCount:t.favoritesCount,slug:t.slug,tagList:t.tagList,title:t.title,onFavoriteToggle:o})})}})}),(0,d.jsx)(a.$,{show:e})]})}},2331:function(t,e,r){r.r(e),r.d(e,{default:function(){return O}});var n=r(7378),a=r(335),i=r(2623),o=r(6774),c=r(1549),u=r(9041),l=r(7712),s=r(946),f=r(3300),d=(0,c.GW)((function(t){var e=t.page,r=t.tag,n=t.pageSize,a=e-1;return s.WY({url:"articles?tag=".concat(encodeURIComponent(r),"&").concat((0,f.b)(n,a)),method:"get"})})),v=l.f({effect:d}),g=v.favoriteArticleToggled,m=(v.$feed,v.$isEmptyFeed),p=v.$articles,h=v.$totalPages,j=function(){return(0,u.oR)(d.pending)},y=function(){return(0,u.oR)(m)},x=function(){return(0,u.oR)(h)},b=r(4246);function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){c=!0,a=t}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var O=function(t){var e=t.pageSize,r=void 0===e?10:e,c=function(t){var e=C((0,a.Kx)({page:(0,a.Wc)(a.yz,1),tag:a.Zp}),2),r=e[0],i=r.page,o=r.tag,c=e[1],u=j(),l=y(),s=x();return(0,n.useEffect)((function(){o&&d({page:i,tag:o,pageSize:t})}),[i,o,t]),{page:i,loading:u,isEmpty:l,totalPages:s,handlePageChange:function(t){c({page:t})}}}(r);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.f,{articlesStore:p,isEmpty:c.isEmpty,loading:c.loading,onFavoriteToggle:g}),(0,b.jsx)(o.t,{current:c.page,pageSize:r,total:c.totalPages,onPageChange:c.handlePageChange})]})}},3300:function(t,e,r){r.d(e,{b:function(){return n}});var n=function(t,e){return"limit=".concat(t,"&offset=").concat(e*t)}},6774:function(t,e,r){r.d(e,{t:function(){return o}});var n=r(7378),a=r(4246),i=(0,n.memo)((function(t){var e=t.active,r=t.onItemClick,n=t.item,i=t.children;return(0,a.jsx)("button",{className:"pagination-item","data-active":e,type:"button",onClick:function(){return r(n)},children:(0,a.jsx)("span",{className:"page-link",children:i})})})),o=(0,n.memo)((function(t){var e=function(t){var e=t.total,r=t.pageSize,a=t.onPageChange,i=(0,n.useMemo)((function(){return function(t,e){return Array.from({length:Math.ceil(t/e)},(function(t,e){return e+1}))}(e,r)}),[e,r]),o=e>r,c=(0,n.useCallback)((function(t){a(t)}),[a]);return{items:i,show:o,handleClick:c}}(t),r=e.show,o=e.items,u=e.handleClick;return r?(0,a.jsx)("nav",{children:(0,a.jsx)("ul",{className:"pagination",children:o.map((function(e){return(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(i,{active:c(e,t.current),item:e,onItemClick:u,children:e},e)},e)}))})}):null}));function c(t,e){return t===e}},7545:function(t,e,r){r.d(e,{V:function(){return a}});var n=r(4246),a=function(t){var e=t.children;return(0,n.jsx)("li",{className:"tag-default tag-pill tag-outline",children:e})}}}]);