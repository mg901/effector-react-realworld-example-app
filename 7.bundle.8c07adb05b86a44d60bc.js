(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5XSU":function(e,t,c){"use strict";c.r(t),c.d(t,"Home",(function(){return F}));var n=c("UYjC"),r=c("mXGw"),a=c("irwn"),i=c("6le1"),o=c("oYCi"),s=Object(r.lazy)((function(){return c.e(6).then(c.bind(null,"VT8v"))})),u=Object(r.lazy)((function(){return c.e(13).then(c.bind(null,"mzpR"))})),l=Object(r.lazy)((function(){return c.e(5).then(c.bind(null,"Ih6C"))})),j=Object(r.lazy)((function(){return c.e(0).then(c.bind(null,"C/cI"))})),d=function(){var e=Object(a.h)().path;return Object(o.jsxs)(a.d,{children:[Object(o.jsx)(a.b,{exact:!0,path:"/home",children:Object(o.jsx)(i.a,{children:function(t){return t.isAuth?Object(o.jsx)(a.a,{to:"".concat(e).concat(i.d.YOUR_FEED)}):Object(o.jsx)(a.a,{to:"".concat(e).concat(i.d.GLOBAL_FEED)})}})}),Object(o.jsx)(a.b,{component:u,path:"".concat(e).concat(i.d.GLOBAL_FEED)}),Object(o.jsx)(i.c,{component:s,path:"".concat(e).concat(i.d.YOUR_FEED)}),Object(o.jsx)(a.b,{component:l,path:"".concat(e).concat(i.d.FEED_BY_TAG)}),Object(o.jsx)(a.b,{component:j,path:"*"})]})},b=c("dY8W"),O=c("YSF1"),f=c("eZyy"),h=Object(b.a)(),p=Object(O.createEffect)((function(){return f.a.get("tags").then((function(e){return e.data.tags}))})),m=Object(O.restore)(p.doneData,[]);Object(O.forward)({from:h.open,to:p});var x=c("USb2"),g=function(){var e=Object(a.h)().url;return Object(o.jsx)(n.q,{children:Object(b.c)(m,{getKey:function(e){return e},fn:function(t){return Object(o.jsx)(x.a,{className:"tag-default tag-pill",to:"".concat(e).concat(i.d.FEED_BY_TAG,"?tag=").concat(t),children:t.toLowerCase()})}})})},v=function(){return Object(b.b)(h),Object(o.jsxs)("aside",{className:"sidebar",children:[Object(o.jsx)("p",{children:"Popular Tags"}),Object(o.jsx)(g,{})]})},w=c("UIRo"),E=function(){return Object(o.jsx)(i.a,{children:function(e){return e.isAuth?null:Object(o.jsx)(n.a,{children:Object(o.jsxs)(n.c,{children:[Object(o.jsx)("h1",{className:"logo-font",children:w.a.toLowerCase()}),Object(o.jsx)("p",{children:"A place to share your Effector knowledge."})]})})}})},y=c("rEH3"),N=function(e){var t=e.url;return Object(o.jsx)(i.a,{children:function(e){return e.isAuth?Object(o.jsx)(n.j,{children:Object(o.jsx)(n.k,{to:"".concat(t).concat(i.d.YOUR_FEED),children:"Your Feed"})}):null}})},P=Object(y.e)(),C=function(){var e=Object(b.d)(P.$currentTag),t=Object(a.h)().url;return Object(o.jsxs)("ul",{className:"feed-toggle nav nav-pills outline-active",children:[Object(o.jsx)(N,{url:t}),Object(o.jsx)(n.j,{children:Object(o.jsx)(n.k,{to:"".concat(t).concat(i.d.GLOBAL_FEED),children:"Global Feed"})}),e&&Object(o.jsx)(n.j,{children:Object(o.jsxs)(n.k,{to:"".concat(t).concat(i.d.FEED_BY_TAG,"?tag=").concat(e),children:[Object(o.jsx)("i",{className:"ion-pound"}),e]})})]})},F=function(){return Object(o.jsxs)("div",{className:"home-page",children:[Object(o.jsx)(E,{}),Object(o.jsx)(n.l,{children:Object(o.jsxs)(n.n,{children:[Object(o.jsxs)("main",{className:"col-md-9",children:[Object(o.jsx)(C,{}),Object(o.jsx)(d,{})]}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(v,{})})]})})]})};t.default=F},rEH3:function(e,t,c){"use strict";c.d(t,"e",(function(){return j})),c.d(t,"b",(function(){return p})),c.d(t,"c",(function(){return m})),c.d(t,"a",(function(){return f})),c.d(t,"d",(function(){return x}));var n=c("YSF1"),r=c("dY8W"),a=c("eZyy"),i=c("6le1");function o(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function s(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?o(Object(c),!0).forEach((function(t){u(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function u(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}var l={currentPage:1,pageSize:10,status:Object(n.createStore)("initial")},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=s(s({},l),e),c=Object(n.createEvent)(),o=Object(n.createEvent)(),u=Object(n.createEffect)((function(e){return a.a.post("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),j=Object(n.createEffect)((function(e){return a.a.delete("articles/".concat(e,"/favorite")).then((function(e){return e.data}))})),d=Object(n.createStore)(t.pageSize),b=i.f.$search.map((function(e){var t;return null!==(t=new URLSearchParams(e).get("tag"))&&void 0!==t?t:""})),O=i.f.$search.map((function(e){var c,n=null!==(c=new URLSearchParams(e).get("page"))&&void 0!==c?c:t.currentPage;return Number(n)-1})),f=Object(n.createStore)({articles:[],articlesCount:0}).on([u.done,j.done],(function(e,t){var c=t.params,n=t.result;return s(s({},e),{},{articles:e.articles.map((function(e){return e.slug!==c?e:s(s({},e),{},{favorited:n.article.favorited,favoritesCount:n.article.favoritesCount})}))})})),h=f.map((function(e){return e.articles})),p=f.map((function(e){return e.articlesCount})),m=t.status,x=Object(n.combine)(m,h,(function(e,t){return"done"===e&&0===t.length}));Object(n.sample)({source:i.f.$pathname,clock:c,fn:function(e,t){return{path:e,page:t}}}).watch((function(e){var t=e.path,c=e.page;i.e.replace("".concat(t,"?page=").concat(c))})),Object(n.guard)({source:o,filter:function(e){return!0===e.favorited},target:j.prepend((function(e){return e.slug}))}),Object(n.guard)({source:o,filter:function(e){return!1===e.favorited},target:u.prepend((function(e){return e.slug}))}),Object(n.guard)({source:u.failData,filter:function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)}}).watch((function(){i.e.push(i.d.LOGIN)}));var g=Object(n.combine)({pageSize:d,currentPage:O,currentTag:b,totalPages:p,isEmptyFeed:x});return{Gate:Object(r.a)(),currentPageWasSet:c,favoriteToggled:o,setFavoriteArticleFx:u,setUnfavoriteArticleFx:j,$feed:f,$articles:h,$pageSize:d,$currentPage:O,$currentTag:b,$totalPages:p,$isEmptyFeed:x,useModel:function(){return Object(r.d)(g)}}},d=c("USb2"),b=c("UYjC"),O=c("oYCi"),f=function(e){var t=e.author,c=e.createdAt,n=e.children;return Object(O.jsxs)("div",{className:"article-meta",children:[Object(O.jsx)(d.a,{to:"/@".concat(t.username),children:Object(O.jsx)("img",{alt:t.username,src:t.image})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)(d.a,{className:"author",to:"/@".concat(t.username),children:t.username}),Object(O.jsx)("span",{className:"date",children:new Date(c).toDateString()})]}),n]})},h=function(e){var t=e.active,c=e.onClick,n=e.children;return Object(O.jsxs)(b.b,{className:"btn btn-sm btn-outline-primary","data-active":t,onClick:c,children:[Object(O.jsx)("i",{className:"ion-heart"})," ",n]})},p=function(e){var t=e.data,c=t.author,n=t.createdAt,r=t.slug,a=t.title,i=t.description,o=t.tagList,s=t.favorited,u=t.favoritesCount,l=e.onClick;return Object(O.jsxs)("article",{className:"article-preview",children:[Object(O.jsx)(f,{author:c,createdAt:n,children:Object(O.jsx)("div",{className:"pull-xs-right",children:Object(O.jsx)(h,{active:s,onClick:l,children:u})})}),Object(O.jsxs)(d.a,{className:"preview-link",to:"/article/".concat(r),children:[Object(O.jsx)("h1",{children:a}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("span",{children:"Read more..."}),Object(O.jsx)(b.q,{children:o.map((function(e){return Object(O.jsx)(b.p,{children:e.toLowerCase()},e)}))})]})]})},m=function(e){var t=e.children;return Object(O.jsx)("ul",{className:"articles-wrapper list-unstyled",children:t})},x=function(e){return e.show?Object(O.jsx)("div",{className:"empty-articles article-preview",children:"No articles are here... yet."}):null}}}]);