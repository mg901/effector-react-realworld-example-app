"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[531],{5531:function(r,e,t){t.r(e),t.d(e,{default:function(){return I}});var n=t(2737),o=t(3947),c=t(5382),i=t(7765),l=t(772),u=t(1549),a=t(9041),s=t(4123),f=t(946),p=(0,u.GW)((function(r){return f.WY({url:"user",method:"put",data:{user:r}})})),b=(0,u.GW)((function(){s.m8.push("/")})),d=(0,u.GW)((function(){window.location.reload()})),j=n.Sj.map((function(r){return{image:r.image,username:r.username,bio:r.bio,email:r.email,password:""}})),O=(0,u.nu)(p.failData,{errors:{}});(0,u.eH)({from:p.done,to:d}),(0,u.eH)({from:n.xI,to:b});var m=O.map((function(r){return Object.keys(Object(r)).length>0})),y=O.map((function(r){return Object.entries(Object(null==r?void 0:r.errors))})),h=function(){return(0,a.oR)(p.pending)},g=function(){return(0,a.oR)(j)},v=function(){return(0,a.oR)(m)},w=function(){return(0,a.oR)(y)},x=t(4246),P=function(){var r=v(),e=w();return r?(0,x.jsx)(l.K,{errors:e}):null},S=t(7378),D=t(8039),N=t(800),k=function(){var r=h();return(0,x.jsx)(i.z,{className:"btn-primary pull-xs-right",disabled:r,size:"lg",type:"submit",children:"Update Settings"})};function C(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function E(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?C(Object(t),!0).forEach((function(e){z(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function z(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var G=function(){var r=function(){var r=g(),e=(0,D.cI)({defaultValues:r}),t=e.handleSubmit,n=e.register,o=e.reset;return(0,S.useEffect)((function(){o(r)}),[o,r]),{register:n,handleSubmit:t((function(r){r.password?p(r):p(E(E({},r),{},{password:void 0}))}))}}(),e=r.handleSubmit,t=r.register;return(0,x.jsxs)(N.l,{onSubmit:e,children:[(0,x.jsx)(N.l.Group,{children:(0,x.jsx)(N.l.Control,E({placeholder:"URL of profile picture"},t("image")))}),(0,x.jsx)(N.l.Group,{children:(0,x.jsx)(N.l.Control,E({placeholder:"Username",size:"lg"},t("username")))}),(0,x.jsx)(N.l.Group,{children:(0,x.jsx)(N.l.Control,E({as:"textarea",placeholder:"Short bio about you",rows:8,size:"lg"},t("bio")))}),(0,x.jsx)(N.l.Group,{children:(0,x.jsx)(N.l.Control,E({placeholder:"Email",size:"lg",type:"email"},t("email")))}),(0,x.jsx)(N.l.Group,{children:(0,x.jsx)(N.l.Control,E({autoComplete:"current-password",placeholder:"New Password",size:"lg",type:"password"},t("password")))}),(0,x.jsx)(k,{})]})};var I=function(){return(0,x.jsx)(o.T,{children:(0,x.jsx)(c.X,{children:(0,x.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,x.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),(0,x.jsx)(P,{}),(0,x.jsx)(G,{}),(0,x.jsx)("hr",{}),(0,x.jsx)(i.z,{className:"btn-outline-danger",onClick:function(){n.xI()},children:"Or click here to logout."})]})})})}},772:function(r,e,t){t.d(e,{K:function(){return i}});var n=t(4246);function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==t)return;var n,o,c=[],i=!0,l=!1;try{for(t=t.call(r);!(i=(n=t.next()).done)&&(c.push(n.value),!e||c.length!==e);i=!0);}catch(r){l=!0,o=r}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return c}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);"Object"===t&&r.constructor&&(t=r.constructor.name);if("Map"===t||"Set"===t)return Array.from(r);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}var i=function(r){var e=r.errors;return(0,n.jsx)("ul",{className:"error-messages",children:e.map((function(r){var e=o(r,2),t=e[0],c=e[1];return(0,n.jsxs)("li",{children:[t," ",c]},t)}))})}},800:function(r,e,t){t.d(e,{l:function(){return m}});var n=t(7378),o=t(4246),c=["as","size"];function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){u(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function a(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var s=(0,n.forwardRef)((function(r,e){var t=r.as,n=r.size,i=a(r,c),u=t||"input";return(0,o.jsx)(u,l(l({ref:e},i),{},{className:"form-control ".concat("lg"===n?"form-control-lg":"")}))})),f=["className","children"];function p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function b(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){d(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function d(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function j(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},c=Object.keys(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);for(n=0;n<c.length;n++)t=c[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}var O=(0,n.forwardRef)((function(r,e){var t=r.className,n=void 0===t?"":t,c=r.children,i=j(r,f);return(0,o.jsx)("form",b(b({ref:e},i),{},{className:"my-form ".concat(n),children:(0,o.jsx)("fieldset",{children:c})}))})),m=Object.assign(O,{Group:function(r){var e=r.children;return(0,o.jsx)("div",{className:"form-group",children:e})},Control:s})},5382:function(r,e,t){t.d(e,{X:function(){return o}});var n=t(4246),o=function(r){var e=r.children,t=r.className,o=void 0===t?"":t;return(0,n.jsx)("div",{className:"row ".concat(o),children:e})}}}]);