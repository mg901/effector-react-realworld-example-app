"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[749],{2749:function(n,e,r){r.r(e),r.d(e,{default:function(){return g}});var t=r(9635),o=r(9041),c=r(9511),i=r(9196),s=r(7378),u=r(5483),a=r(4246),l=(0,s.lazy)((function(){return Promise.all([r.e(216),r.e(411)]).then(r.bind(r,3411))})),f=(0,s.lazy)((function(){return Promise.all([r.e(216),r.e(28)]).then(r.bind(r,7028))})),d=(0,s.lazy)((function(){return r.e(74).then(r.bind(r,2074))})),m=function(){var n=(0,t.$B)().path;return(0,a.jsxs)(t.rs,{children:[(0,a.jsx)(t.AW,{component:d,path:"*"}),(0,a.jsx)(u.M8,{exact:!0,component:l,path:n}),(0,a.jsx)(u.M8,{component:f,path:"".concat(n,"/favorites")})]})},x=function(n){var e=n.children,r=(0,u.$B)().url;return(0,a.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,a.jsxs)("ul",{className:"nav nav-pills outline-active articles-toggle",children:[(0,a.jsx)(c.LY,{children:(0,a.jsx)(u.OL,{exact:!0,className:"nav-link",to:"".concat(r),children:"My Articles"})}),(0,a.jsx)(c.LY,{children:(0,a.jsx)(u.OL,{exact:!0,className:"nav-link",to:"".concat(r,"/favorites"),children:"Favorited Articles"})})]}),e]})},h=r(4289),j=function(){return i.wl.useIsCurrentUser()?(0,a.jsx)(h.rU,{to:"/settings",children:(0,a.jsxs)(c.zx,{className:"btn-sm btn-outline-secondary action-btn",children:[(0,a.jsx)("i",{className:"ion-gear-a"})," Edit Profile Settings"]})}):null},p=function(n){var e=n.username,r=i.wl.useFollowing();return i.wl.useIsNotCurrentUser()?(0,a.jsxs)(c.zx,{className:"btn-sm action-btn btn-secondary",onClick:i.o4.Wi,children:[(0,a.jsx)("i",{className:"ion-plus-round"})," ",r?"Unfollow":"Follow"," ",e]}):null},v=function(){var n=i.wl.useProfile(),e=n.image,r=n.username,t=n.bio;return(0,a.jsx)("div",{className:"user-info",children:(0,a.jsx)(c.W2,{children:(0,a.jsx)(c.X2,{children:(0,a.jsxs)("div",{className:"col-xs-12 col-md-10 offset-md-1",children:[(0,a.jsx)("img",{alt:r,className:"user-img",src:e}),(0,a.jsx)("h4",{children:r}),t&&(0,a.jsx)("p",{children:t}),(0,a.jsx)(j,{}),(0,a.jsx)(p,{username:r})]})})})})},g=function(){var n=(0,t.UO)();return(0,o.DD)(i.o4.Cc,n),(0,a.jsxs)("div",{className:"profile-page",children:[(0,a.jsx)(v,{}),(0,a.jsx)(c.W2,{children:(0,a.jsx)(c.X2,{children:(0,a.jsx)(x,{children:(0,a.jsx)(m,{})})})})]})}},9196:function(n,e,r){r.d(e,{o4:function(){return t},wl:function(){return o}});var t={};r.r(t),r.d(t,{kM:function(){return p},Q4:function(){return v},On:function(){return g},$X:function(){return j},QS:function(){return h},Cc:function(){return x},Wi:function(){return l}});var o={};r.r(o),r.d(o,{useFollowing:function(){return b},useIsCurrentUser:function(){return w},useIsNotCurrentUser:function(){return N},useProfile:function(){return C}});var c=r(1549),i=r(9041),s=r(3312),u=r(6942),a=(0,c.Fj)("profile-page"),l=a.createEvent(),f=a.createEffect((function(n){return u.U2("profiles/".concat(n)).then((function(n){return n.data.profile}))})),d=a.createEffect((function(n){return u.v_("profiles/".concat(n,"/follow")).then((function(n){return n.data.profile}))})),m=a.createEffect((function(n){return u.IV("profiles/".concat(n,"/follow")).then((function(n){return n.data.profile}))})),x=(0,i.Bq)(),h=a.createStore("").on(x.state,(function(n,e){return e.username})),j=(0,c.nu)((0,c.TS)([f.doneData,d.doneData,m.doneData]),{bio:"",following:!1,image:"",username:""}),p=j.map((function(n){return n.following})),v=(0,c.$e)(j,s.o4.bR,(function(n,e){return n.username===e.username})),g=v.map((function(n){return!n}));(0,c.eH)({from:h,to:f}),(0,c.lo)({source:l,filter:j.map((function(n){return!0===n.following})),target:(0,c.ub)({source:h,effect:m})}),(0,c.lo)({source:l,filter:j.map((function(n){return!1===n.following})),target:(0,c.ub)({source:h,effect:d})});var w=function(){return(0,i.oR)(v)},b=function(){return(0,i.oR)(p)},N=function(){return(0,i.oR)(g)},C=function(){return(0,i.oR)(j)}}}]);