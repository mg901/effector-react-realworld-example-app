(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3OV0":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return m}));var c=n("YSF1"),r=n("dY8W"),o=n("7E9e"),a=n("eZyy"),i=Object(c.createEvent)(),s=Object(c.createEffect)((function(e){return a.a.get("profiles/".concat(e)).then((function(e){return e.data.profile}))})),l=Object(c.createEffect)((function(e){return a.a.post("profiles/".concat(e,"/follow")).then((function(e){return e.data.profile}))})),u=Object(c.createEffect)((function(e){return a.a.delete("profiles/".concat(e,"/follow")).then((function(e){return e.data.profile}))})),j=Object(r.a)(),b=Object(c.createStore)("").on(j.state,(function(e,t){return t.username})),f=Object(c.restore)(Object(c.merge)([s.doneData,l.doneData,u.doneData]),{bio:"",following:!1,image:"",username:""}),d=f.map((function(e){return e.following})),O=Object(c.combine)(f,o.a.$user,(function(e,t){return e.username===t.username})),m=O.map((function(e){return!e}));Object(c.forward)({from:b,to:s}),Object(c.guard)({source:i,filter:f.map((function(e){return!0===e.following})),target:Object(c.attach)({source:b,effect:u})}),Object(c.guard)({source:i,filter:f.map((function(e){return!1===e.following})),target:Object(c.attach)({source:b,effect:l})})},fx3B:function(e,t,n){"use strict";n.r(t);var c=n("irwn"),r=n("dY8W"),o=n("UYjC"),a=n("3OV0"),i=n("mXGw"),s=n("6le1"),l=n("oYCi"),u=Object(i.lazy)((function(){return n.e(3).then(n.bind(null,"Riw5"))})),j=Object(i.lazy)((function(){return n.e(2).then(n.bind(null,"gr6A"))})),b=Object(i.lazy)((function(){return n.e(0).then(n.bind(null,"C/cI"))})),f=function(){var e=Object(c.h)().path;return Object(l.jsxs)(c.d,{children:[Object(l.jsx)(s.c,{exact:!0,component:u,path:e}),Object(l.jsx)(s.c,{component:j,path:"".concat(e,"/favorites")}),Object(l.jsx)(c.b,{component:b,path:"*"})]})},d=function(e){var t=e.children,n=Object(c.h)().url;return Object(l.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(l.jsxs)("ul",{className:"nav nav-pills outline-active articles-toggle",children:[Object(l.jsx)(o.j,{children:Object(l.jsx)(o.k,{to:"".concat(n),children:"My Articles"})}),Object(l.jsx)(o.j,{children:Object(l.jsx)(o.k,{to:"".concat(n,"/favorites"),children:"Favorited Articles"})})]}),t]})},O=n("USb2"),m=function(){return Object(r.d)(a.c)?Object(l.jsx)(O.a,{to:"/settings",children:Object(l.jsxs)(o.b,{className:"btn-sm btn-outline-secondary action-btn",children:[Object(l.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})}):null},h=function(e){var t=e.username,n=Object(r.d)(a.a);return Object(r.d)(a.b)?Object(l.jsxs)(o.b,{className:"btn-sm action-btn btn-secondary",onClick:a.g,children:[Object(l.jsx)("i",{className:"ion-plus-round"})," ",n?"Unfollow":"Follow"," ",t]}):null},x=function(){var e=Object(r.d)(a.d),t=e.image,n=e.username,c=e.bio;return Object(l.jsx)("div",{className:"user-info",children:Object(l.jsx)(o.c,{children:Object(l.jsx)(o.n,{children:Object(l.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[Object(l.jsx)("img",{alt:n,className:"user-img",src:t}),Object(l.jsx)("h4",{children:n}),c&&Object(l.jsx)("p",{children:c}),Object(l.jsx)(m,{}),Object(l.jsx)(h,{username:n})]})})})})};t.default=function(){var e=Object(c.g)();return Object(r.b)(a.f,e),Object(l.jsxs)("div",{className:"profile-page",children:[Object(l.jsx)(x,{}),Object(l.jsx)(o.c,{children:Object(l.jsx)(o.n,{children:Object(l.jsx)(d,{children:Object(l.jsx)(f,{})})})})]})}}}]);