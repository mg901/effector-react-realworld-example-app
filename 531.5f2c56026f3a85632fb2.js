"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[531],{5531:function(e,r,t){t.r(r),t.d(r,{default:function(){return R}});var n=t(2737),o=t(3947),c=t(5382),i=t(7765),l=t(772),u=t(1549),a=t(9041),s=t(4123),f=t(946),p=(0,u.GW)((function(e){return f.WY({url:"user",method:"put",data:{user:e}})})),b=(0,u.GW)((function(){s.m8.push("/")})),d=(0,u.GW)((function(){window.location.reload()})),O=n.Sj.map((function(e){return{image:e.image,username:e.username,bio:e.bio,email:e.email,password:""}})),j=(0,u.nu)(p.failData,{errors:{}});(0,u.eH)({from:p.done,to:d}),(0,u.eH)({from:n.kS,to:b});var y=j.map((function(e){return Object.keys(Object(e)).length>0})),m=j.map((function(e){return Object.entries(Object(null==e?void 0:e.errors))})),g=function(){return(0,a.oR)(p.pending)},h=function(){return(0,a.oR)(O)},v=function(){return(0,a.oR)(y)},w=function(){return(0,a.oR)(m)},P=t(4246),x=function(){var e=v(),r=w();return e?(0,P.jsx)(l.K,{errors:r}):null},S=t(7378),N=t(8039),D=t(800),k=function(){var e=g();return(0,P.jsx)(i.z,{className:"btn-primary pull-xs-right",disabled:e,size:"lg",type:"submit",children:"Update Settings"})};function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){C(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function C(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var G=function(){var e=function(){var e=h(),r=(0,N.cI)({defaultValues:e}),t=r.handleSubmit,n=r.register,o=r.reset;return(0,S.useEffect)((function(){o(e)}),[o,e]),{register:n,handleSubmit:t((function(e){e.password?p(e):p(z(z({},e),{},{password:void 0}))}))}}(),r=e.handleSubmit,t=e.register;return(0,P.jsxs)(D.l,{onSubmit:r,children:[(0,P.jsx)(D.l.Group,{children:(0,P.jsx)(D.l.Control,z({placeholder:"URL of profile picture"},t("image")))}),(0,P.jsx)(D.l.Group,{children:(0,P.jsx)(D.l.Control,z({placeholder:"Username",size:"lg"},t("username")))}),(0,P.jsx)(D.l.Group,{children:(0,P.jsx)(D.l.Control,z({as:"textarea",placeholder:"Short bio about you",rows:8,size:"lg"},t("bio")))}),(0,P.jsx)(D.l.Group,{children:(0,P.jsx)(D.l.Control,z({placeholder:"Email",size:"lg",type:"email"},t("email")))}),(0,P.jsx)(D.l.Group,{children:(0,P.jsx)(D.l.Control,z({autoComplete:"current-password",placeholder:"New Password",size:"lg",type:"password"},t("password")))}),(0,P.jsx)(k,{})]})};var R=function(){return(0,P.jsx)(o.T,{children:(0,P.jsx)(c.X,{children:(0,P.jsxs)("div",{className:"col-md-6 offset-md-3 col-xs-12",children:[(0,P.jsx)("h1",{className:"text-xs-center",children:"Your Settings"}),(0,P.jsx)(x,{}),(0,P.jsx)(G,{}),(0,P.jsx)("hr",{}),(0,P.jsx)(i.z,{className:"btn-outline-danger",onClick:n.kS,children:"Or click here to logout."})]})})})}},7765:function(e,r,t){t.d(r,{z:function(){return f}});var n=t(7378),o=t(8944),c=t(4246),i=["type","size","className","children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=(0,n.memo)((0,n.forwardRef)((function(e,r){var t=e.type,n=void 0===t?"button":t,l=e.size,a=void 0===l?"":l,f=e.className,p=void 0===f?"":f,b=e.children,d=s(e,i),O=(0,o.Z)("btn",{"btn-sm":"sm"===a,"btn-lg":"lg"===a});return(0,c.jsx)("button",u(u({className:"".concat(O," ").concat(p),ref:r,type:n},d),{},{children:b}))})));f.displayName="Button"},772:function(e,r,t){t.d(r,{K:function(){return i}});var n=t(4246);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,c=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(c.push(n.value),!r||c.length!==r);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return c}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=function(e){var r=e.errors;return(0,n.jsx)("ul",{className:"error-messages",children:r.map((function(e){var r=o(e,2),t=r[0],c=r[1];return(0,n.jsxs)("li",{children:[t," ",c]},t)}))})}},800:function(e,r,t){t.d(r,{l:function(){return y}});var n=t(7378),o=t(4246),c=["as","size"];function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=(0,n.forwardRef)((function(e,r){var t=e.as,n=e.size,i=a(e,c),u=t||"input";return(0,o.jsx)(u,l(l({ref:r},i),{},{className:"form-control ".concat("lg"===n?"form-control-lg":"")}))})),f=["className","children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var j=(0,n.forwardRef)((function(e,r){var t=e.className,n=void 0===t?"":t,c=e.children,i=O(e,f);return(0,o.jsx)("form",b(b({ref:r},i),{},{className:"my-form ".concat(n),children:(0,o.jsx)("fieldset",{children:c})}))})),y=Object.assign(j,{Group:function(e){var r=e.children;return(0,o.jsx)("div",{className:"form-group",children:r})},Control:s})},3947:function(e,r,t){t.d(r,{T:function(){return c}});var n=t(1650),o=t(4246),c=function(e){var r=e.children;return(0,o.jsx)(n.W,{className:"page",children:r})};c.displayName="Page"},5382:function(e,r,t){t.d(r,{X:function(){return o}});var n=t(4246),o=function(e){var r=e.children,t=e.className,o=void 0===t?"":t;return(0,n.jsx)("div",{className:"row ".concat(o),children:r})}}}]);