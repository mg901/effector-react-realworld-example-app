"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[782],{3782:function(r,e,t){t.r(e),t.d(e,{default:function(){return R}});var n=t(2737),o=t(4346),i=t(5382),u=t(7765),c=t(772),l=t(1549),a=t(9041),s=t(946);function f(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,i=[],u=!0,c=!1;try{for(t=t.call(r);!(u=(n=t.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(r){c=!0,o=r}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return p(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var b=t(4123),d=t(4300),y=n.Sj.map((function(r){return{image:r.image,username:r.username,bio:r.bio,email:r.email,password:""}})),j=(0,l.GW)((function(r){return s.WY({url:"user",method:"put",data:{user:r}}).then((function(r){return r.user}))}));n.Sj.on(j.doneData,(function(r,e){return e}));var m=(0,l.yM)();(0,l.Vl)({source:m,match:{hasPassword:function(r){return r.password.length>0},isEmptyPassword:function(r){return 0===r.password.length}},cases:{hasPassword:j,isEmptyPassword:j.prepend((function(r){return e=r,t=["password"],Object.fromEntries(Object.entries(e).filter((function(r){var e=f(r,1)[0];return!t.includes(e)})));var e,t}))}}),n.xI.watch((function(){b.m8.push(d.Z.root)}));var O=(0,l.nu)(j.failData,{errors:{}}),h=O.map((function(r){return Object.keys(Object(r)).length>0})),g=O.map((function(r){return Object.entries(Object(null==r?void 0:r.errors))})),v=function(){return(0,a.oR)(j.pending)},w=function(){return(0,a.oR)(y)},x=function(){return(0,a.oR)(h)},P=function(){return(0,a.oR)(g)},S=t(4246),E=function(){var r=x(),e=P();return r?(0,S.jsx)(c.K,{errors:e}):null},D=t(7378),k=t(8039),A=t(1044),C=function(){var r=v();return(0,S.jsx)(u.z,{className:"btn-primary pull-xs-right",disabled:r,size:"lg",type:"submit",children:"Update Settings"})};function I(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function N(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){z(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function z(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var G=function(){var r=w(),e=(0,k.cI)({defaultValues:r}),t=e.handleSubmit,n=e.register,o=e.reset;return(0,D.useEffect)((function(){o(r)}),[o,r]),(0,S.jsxs)(A.l,{onSubmit:t(m),children:[(0,S.jsx)(A.l.Group,{children:(0,S.jsx)(A.l.Control,N({placeholder:"URL of profile picture"},n("image")))}),(0,S.jsx)(A.l.Group,{children:(0,S.jsx)(A.l.Control,N({placeholder:"Username",size:"lg"},n("username")))}),(0,S.jsx)(A.l.Group,{children:(0,S.jsx)(A.l.Control,N({as:"textarea",placeholder:"Short bio about you",rows:8,size:"lg"},n("bio")))}),(0,S.jsx)(A.l.Group,{children:(0,S.jsx)(A.l.Control,N({placeholder:"Email",size:"lg",type:"email"},n("email")))}),(0,S.jsx)(A.l.Group,{children:(0,S.jsx)(A.l.Control,N({autoComplete:"current-password",placeholder:"New Password",size:"lg",type:"password"},n("password")))}),(0,S.jsx)(C,{})]})},R=function(){return(0,S.jsx)(o.T,{children:(0,S.jsx)(i.X,{children:(0,S.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,S.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),(0,S.jsx)(E,{}),(0,S.jsx)(G,{}),(0,S.jsx)("hr",{}),(0,S.jsx)(u.z,{className:"btn-outline-danger",onClick:function(){n.xI()},children:"Or click here to logout."})]})})})}},772:function(r,e,t){t.d(e,{K:function(){return u}});var n=t(4246);function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,i=[],u=!0,c=!1;try{for(t=t.call(r);!(u=(n=t.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(r){c=!0,o=r}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return i(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var u=function(r){var e=r.errors;return(0,n.jsx)("ul",{className:"error-messages",children:e.map((function(r){var e=o(r,2),t=e[0],i=e[1];return(0,n.jsxs)("li",{children:[t," ",i]},t)}))})}},1044:function(r,e,t){t.d(e,{l:function(){return O}});var n=t(7378),o=t(4246),i=["as","size"];function u(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){l(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function l(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var s=(0,n.forwardRef)((function(r,e){var t=r.as,n=r.size,u=a(r,i),l=t||"input";return(0,o.jsx)(l,c(c({ref:e},u),{},{className:"form-control ".concat("lg"===n?"form-control-lg":"")}))})),f="form-O2SVpmbrHY",p=["children"];function b(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function d(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){y(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function y(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function j(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var m=(0,n.forwardRef)((function(r,e){var t=r.children,n=j(r,p);return(0,o.jsx)("form",d(d({ref:e},n),{},{className:f,children:(0,o.jsx)("fieldset",{children:t})}))})),O=Object.assign(m,{Group:function(r){var e=r.children;return(0,o.jsx)("div",{className:"form-group",children:e})},Control:s})},5382:function(r,e,t){t.d(e,{X:function(){return o}});var n=t(4246),o=function(r){var e=r.children,t=r.className,o=void 0===t?"":t;return(0,n.jsx)("div",{className:"row ".concat(o),children:e})}}}]);