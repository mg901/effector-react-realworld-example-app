"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[148],{6148:function(r,e,t){t.r(e),t.d(e,{default:function(){return $}});var n=t(3947),o=t(5382),c=t(772),i=t(1549),u=t(9041),a=t(3801),l=t(4300),s=t(4123),f=t(946);function p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function b(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function O(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function j(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){y(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function y(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var g=(0,u.Bq)(),m=(0,a.tY)({path:l.Z.editor.slug}).map((function(r){var e;return null!==(e=r.slug)&&void 0!==e?e:""})),h=m.map(Boolean),v=m.map((function(r){return 0===r.length})),w=(0,i.GW)((function(r){return f.WY({url:"articles/".concat(r),method:"get"}).then((function(r){return r.article}))}));(0,i.lo)({source:m,filter:Boolean,clock:g.open,target:w});var P=(0,i.yM)(),x=(0,i.GW)((function(r){return f.WY({url:"/articles/".concat(r.slug),method:"put",data:{article:b(b({},r),{},{slug:void 0})}}).then((function(r){return r.article}))}));(0,i.UP)({source:m,clock:(0,i.lo)(P,{filter:h}),fn:function(r,e){return j(j({},e),{},{slug:r})},target:x});var D=(0,i.GW)((function(r){return f.WY({url:"articles",method:"post",data:{article:r}}).then((function(r){return r.article}))}));(0,i.eH)({from:(0,i.lo)(P,{filter:v}),to:D});var S=(0,i.GW)((function(r){var e=r.slug;s.m8.replace("/article/".concat(e))}));(0,i.eH)({from:[x.doneData,D.doneData],to:S});var k=(0,i.nu)(D.failData,{errors:{}}).reset(g.close),E=k.map((function(r){return Object.keys(Object(r)).length>0})),N=k.map((function(r){return Object.entries(Object(null==r?void 0:r.errors))})),C=function(){return(0,u.oR)(D.pending)},T=function(){return(0,u.oR)(E)},A=function(){return(0,u.oR)(N)},L=t(4246),G=function(){var r=T(),e=A();return r?(0,L.jsx)(c.K,{errors:e}):null},W=t(7378),z=t(8039),R=t(800),I=t(2249),Y=t(7765),K=function(r){var e=r.tag,t=r.onTagClick,n=r.children;return(0,L.jsxs)("span",{className:"tag-default tag-pill",children:[n,(0,L.jsx)(Y.z,{className:"editor-tag",size:"sm",onClick:function(){return t(e)},children:(0,L.jsx)("i",{className:"ion-close-round"})})]})},X=function(){var r=function(){var r=(0,z.Gc)(),e=r.setValue,t=(0,r.watch)("tagList"),n=function(r){var n,o=r.currentTarget.value;"Enter"===r.key&&o&&e("tagList",(n=t.concat(o),Array.from(new Set(n))))},o=function(r){r.preventDefault(),r.currentTarget.tags.value=""},c=(0,W.useCallback)((function(r){e("tagList",t.filter((function(e){return e!==r})))}),[e,t]);return{tags:t,handleAddTag:n,handleSubmit:o,handleDeleteTag:c}}(),e=r.handleSubmit,t=r.tags,n=r.handleAddTag,o=r.handleDeleteTag;return(0,L.jsxs)(R.l,{onSubmit:e,children:[(0,L.jsx)(R.l.Control,{autoComplete:"off",name:"tags",onKeyDown:n}),(0,L.jsx)(I.a,{children:t.map((function(r){return(0,L.jsx)(K,{tag:r,onTagClick:o,children:r},r)}))})]})};var B=(0,W.memo)((function(){var r=C();return(0,L.jsx)(Y.z,{className:"btn-primary pull-xs-right",disabled:r,form:"editor",size:"lg",type:"submit",children:"Publish article"})}));function U(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function V(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){H(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function H(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var M=function(){(0,u.DD)(g);var r=(0,z.cI)({defaultValues:{slug:"",title:"",description:"",body:"",tagList:[]}});return(0,W.useEffect)((function(){return w.doneData.watch((function(e){r.reset(e)}))}),[r]),(0,L.jsxs)(z.RV,V(V({},r),{},{children:[(0,L.jsxs)(R.l,{id:"editor",onSubmit:r.handleSubmit(P),children:[(0,L.jsx)(R.l.Group,{children:(0,L.jsx)(R.l.Control,V({placeholder:"Article Title",size:"lg"},r.register("title")))}),(0,L.jsx)(R.l.Group,{children:(0,L.jsx)(R.l.Control,V({placeholder:"What's this article about?"},r.register("description")))}),(0,L.jsx)(R.l.Group,{children:(0,L.jsx)(R.l.Control,V({as:"textarea",placeholder:"Write your article (in markdown)",rows:8},r.register("body")))})]}),(0,L.jsx)(X,{}),(0,L.jsx)(B,{})]}))},$=function(){return(0,L.jsx)(n.T,{children:(0,L.jsx)(o.X,{children:(0,L.jsxs)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:[(0,L.jsx)(G,{}),(0,L.jsx)(M,{})]})})})}},3801:function(r,e,t){t.d(e,{tY:function(){return c},KL:function(){return i},S4:function(){return u}});var n=t(9635),o=t(4123),c=function(r){return o.Lr.map((function(e){var t=(0,n.LX)(e,r);return t?t.params:{}}))},i=function(r){return o.Lr.map((function(e){return(0,n.LX)(e,r.path)}))},u=function(r){return o.z$.map((function(e){return new URLSearchParams(e).get(r)}))}},772:function(r,e,t){t.d(e,{K:function(){return i}});var n=t(4246);function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,c=[],i=!0,u=!1;try{for(t=t.call(r);!(i=(n=t.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(r){u=!0,o=r}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return c}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var i=function(r){var e=r.errors;return(0,n.jsx)("ul",{className:"error-messages",children:e.map((function(r){var e=o(r,2),t=e[0],c=e[1];return(0,n.jsxs)("li",{children:[t," ",c]},t)}))})}},800:function(r,e,t){t.d(e,{l:function(){return y}});var n=t(7378),o=t(4246),c=["as","size"];function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function u(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function l(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var s=(0,n.forwardRef)((function(r,e){var t=r.as,n=r.size,i=l(r,c),a=t||"input";return(0,o.jsx)(a,u(u({ref:e},i),{},{className:"form-control ".concat("lg"===n?"form-control-lg":"")}))})),f=["className","children"];function p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function b(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function O(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var j=(0,n.forwardRef)((function(r,e){var t=r.className,n=void 0===t?"":t,c=r.children,i=O(r,f);return(0,o.jsx)("form",b(b({ref:e},i),{},{className:"my-form ".concat(n),children:(0,o.jsx)("fieldset",{children:c})}))})),y=Object.assign(j,{Group:function(r){var e=r.children;return(0,o.jsx)("div",{className:"form-group",children:e})},Control:s})},2249:function(r,e,t){t.d(e,{a:function(){return o}});var n=t(4246),o=function(r){var e=r.children;return(0,n.jsx)("ul",{className:"list-unstyled",children:e})}},5382:function(r,e,t){t.d(e,{X:function(){return o}});var n=t(4246),o=function(r){var e=r.children,t=r.className,o=void 0===t?"":t;return(0,n.jsx)("div",{className:"row ".concat(o),children:e})}}}]);