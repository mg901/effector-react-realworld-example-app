"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[148],{6148:function(e,r,t){t.r(r),t.d(r,{default:function(){return K}});var n=t(3947),o=t(5382),c=t(772),i=t(1549),u=t(9041),a=t(9785),l=t(946);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}(0,i.yM)(),(0,i.yM)();var p=(0,i.GW)((function(e){return l.WY({url:"articles",method:"post",data:{article:e}}).then((function(e){return e.article}))})),d=(0,i.GW)((function(e){return l.WY({url:"articles/".concat(e),method:"get"}).then((function(e){return e.article}))})),O=(0,i.GW)((function(e){return l.WY({url:"/articles/".concat(e.slug),method:"put",data:{article:f(f({},e),{},{slug:void 0})}}).then((function(e){return e.article}))})),y=(0,i.GW)((function(e){var r=e.slug;a.m.replace("/article/".concat(r))}));(0,i.eH)({from:[O.doneData,p.doneData],to:y});var j=(0,u.Bq)(),g=(0,i.nu)(p.failData,{errors:{}}).reset(j.close),m=g.map((function(e){return Object.keys(Object(e)).length>0})),h=g.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),v=function(){return(0,u.oR)(p.pending)},w=function(){return(0,u.oR)(m)},P=function(){return(0,u.oR)(h)},x=t(4246),D=function(){var e=w(),r=P();return e?(0,x.jsx)(c.K,{errors:r}):null},S=t(7378),N=t(8039),k=t(9635),E=t(800),C=t(2249),z=t(7765),A=function(e){var r=e.tag,t=e.onTagClick,n=e.children;return(0,x.jsxs)("span",{className:"tag-default tag-pill",children:[n,(0,x.jsx)(z.z,{className:"editor-tag",size:"sm",onClick:function(){return t(r)},children:(0,x.jsx)("i",{className:"ion-close-round"})})]})},T=function(){var e=function(){var e=(0,N.Gc)(),r=e.setValue,t=e.watch,n=(0,S.useRef)(null),o=t("tagList"),c=function(e){var t,c,i=null===(t=n.current)||void 0===t?void 0:t.value;"Enter"===e.key&&i&&(r("tagList",(c=o.concat(i),Array.from(new Set(c)))),n.current.value="")},i=function(e){e.preventDefault()},u=(0,S.useCallback)((function(e){r("tagList",o.filter((function(r){return r!==e})))}),[r,o]);return{ref:n,tags:o,handleAddTag:c,handleSubmit:i,handleDeleteTag:u}}(),r=e.handleSubmit,t=e.ref,n=e.tags,o=e.handleAddTag,c=e.handleDeleteTag;return(0,x.jsxs)(E.l,{onSubmit:r,children:[(0,x.jsx)(E.l.Control,{ref:t,onKeyDown:o}),(0,x.jsx)(C.a,{children:n.map((function(e){return(0,x.jsx)(A,{tag:e,onTagClick:c,children:e},e)}))})]})};var W=(0,S.memo)((function(){var e=v();return(0,x.jsx)(z.z,{className:"btn-primary pull-xs-right",disabled:e,form:"editor",size:"lg",type:"submit",children:"Publish article"})}));function G(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?G(Object(t),!0).forEach((function(r){I(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function I(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var L=function(){var e=function(){(0,u.DD)(j);var e=(0,k.UO)().slug,r=(0,N.cI)({defaultValues:{slug:"",title:"",description:"",body:"",tagList:[]}}),t=r.handleSubmit,n=r.register,o=r.reset;return(0,S.useEffect)((function(){e&&d(e);var r=d.doneData.watch((function(e){o(e)}));return function(){return r()}}),[e,o]),{handleSubmit:t((function(r){e?O(R(R({},r),{},{slug:e})):p(r)})),methods:r,register:n}}(),r=e.methods,t=e.handleSubmit,n=e.register;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(N.RV,R(R({},r),{},{children:[(0,x.jsxs)(E.l,{id:"editor",onSubmit:t,children:[(0,x.jsx)(E.l.Group,{children:(0,x.jsx)(E.l.Control,R({placeholder:"Article Title",size:"lg"},n("title")))}),(0,x.jsx)(E.l.Group,{children:(0,x.jsx)(E.l.Control,R({placeholder:"What's this article about?"},n("description")))}),(0,x.jsx)(E.l.Group,{children:(0,x.jsx)(E.l.Control,R({as:"textarea",placeholder:"Write your article (in markdown)",rows:8},n("body")))})]}),(0,x.jsx)(T,{})]})),(0,x.jsx)(W,{})]})};var K=function(){return(0,x.jsx)(n.T,{children:(0,x.jsx)(o.X,{children:(0,x.jsxs)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:[(0,x.jsx)(D,{}),(0,x.jsx)(L,{})]})})})}},7765:function(e,r,t){t.d(r,{z:function(){return f}});var n=t(7378),o=t(8944),c=t(4246),i=["type","size","className","children"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=(0,n.memo)((0,n.forwardRef)((function(e,r){var t=e.type,n=void 0===t?"button":t,u=e.size,l=void 0===u?"":u,f=e.className,b=void 0===f?"":f,p=e.children,d=s(e,i),O=(0,o.Z)("btn",{"btn-sm":"sm"===l,"btn-lg":"lg"===l});return(0,c.jsx)("button",a(a({className:"".concat(O," ").concat(b),ref:r,type:n},d),{},{children:p}))})));f.displayName="Button"},772:function(e,r,t){t.d(r,{K:function(){return i}});var n=t(4246);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,c=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw o}}return c}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=function(e){var r=e.errors;return(0,n.jsx)("ul",{className:"error-messages",children:r.map((function(e){var r=o(e,2),t=r[0],c=r[1];return(0,n.jsxs)("li",{children:[t," ",c]},t)}))})}},800:function(e,r,t){t.d(r,{l:function(){return j}});var n=t(7378),o=t(4246),c=["as","size"];function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=(0,n.forwardRef)((function(e,r){var t=e.as,n=e.size,i=l(e,c),a=t||"input";return(0,o.jsx)(a,u(u({ref:r},i),{},{className:"form-control ".concat("lg"===n?"form-control-lg":"")}))})),f=["className","children"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var y=(0,n.forwardRef)((function(e,r){var t=e.className,n=void 0===t?"":t,c=e.children,i=O(e,f);return(0,o.jsx)("form",p(p({ref:r},i),{},{className:"my-form ".concat(n),children:(0,o.jsx)("fieldset",{children:c})}))})),j=Object.assign(y,{Group:function(e){var r=e.children;return(0,o.jsx)("div",{className:"form-group",children:r})},Control:s})},2249:function(e,r,t){t.d(r,{a:function(){return o}});var n=t(4246),o=function(e){var r=e.children;return(0,n.jsx)("ul",{className:"list-unstyled",children:r})}},3947:function(e,r,t){t.d(r,{T:function(){return c}});var n=t(1650),o=t(4246),c=function(e){var r=e.children;return(0,o.jsx)(n.W,{className:"page",children:r})};c.displayName="Page"},5382:function(e,r,t){t.d(r,{X:function(){return o}});var n=t(4246),o=function(e){var r=e.children,t=e.className,o=void 0===t?"":t;return(0,n.jsx)("div",{className:"row ".concat(o),children:r})}}}]);