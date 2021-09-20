"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[474],{8474:function(t,e,r){r.r(e),r.d(e,{default:function(){return H}});var n=r(9635),o=r(9041),a=r(9511),i=r(227),u=r(8438),c=r(1549),l=(0,c.yM)(),s=(0,c.yM)(),f=(0,u.Np)({fields:{currentTag:{init:""}}});(0,c.UP)({source:f.fields.currentTag.$value,clock:(0,c.lo)(s,{filter:function(t){return"Enter"===t.key}}),target:l}),(0,c.eH)({from:l,to:f.reset});var d=r(4246),g=function(){var t=(0,u.cI)(f).fields;return(0,d.jsx)(a.l0,{onSubmit:function(t){return t.preventDefault()},children:(0,d.jsx)(a.NI,{autoComplete:"off",name:"tag-list",placeholder:"Enter tags",value:t.currentTag.value,onChange:function(e){return t.currentTag.onChange(e.target.value)},onKeyDown:s})})},p=r(6942),v=r(5483),m=["tagList"],y=["tagList"];function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var k=(0,c.Fj)("editor-page"),C=k.createEvent(),S=k.createEvent(),P=k.createEffect((function(t){return p.v_("articles",{article:t}).then((function(t){return t.data.article}))})),A=k.createEffect((function(t){return p.U2("articles/".concat(t)).then((function(t){var e=t.data.article;return{slug:e.slug,title:e.title,description:e.description,body:e.body,tagList:e.tagList}}))})),D=(0,o.Bq)(),E=D.state.map((function(t){var e;return null!==(e=t.slug)&&void 0!==e?e:""})),U=E.map(Boolean).map((function(t){return!t})),$=(0,u.Np)({fields:{slug:{init:""},title:{init:""},description:{init:""},body:{init:""},tagList:{init:[]}}});(0,c.lo)({source:E,clock:D.open,filter:function(t){return!1==!t},target:$.reset});var I=$.fields.tagList.$value;(0,c.lo)({source:E,clock:D.open,filter:Boolean,target:A}),(0,c.eH)({from:A.doneData,to:$.set}),(0,c.UP)({source:$.$values,clock:l,fn:function(t,e){var r,n=t.tagList;return x(x({},w(t,m)),{},{tagList:(r=[].concat(b(n),[e]),Array.from(new Set(r)))})},target:$.set}),(0,c.UP)({source:$.$values,clock:S,fn:function(t,e){var r=t.tagList;return x(x({},w(t,y)),{},{tagList:r.filter((function(t){return t!==e}))})},target:$.set}),(0,c.eH)({from:[P.done,U],to:$.reset}),(0,c.UP)({source:$.$values,clock:$.submit,target:P}),P.doneData.watch((function(t){var e=t.slug;v.m8.replace("/article/".concat(e))})),i.o._4.on(P.failData,(function(t,e){var r;return null===(r=e.response)||void 0===r?void 0:r.data})).reset($.$values,D.close);var L=function(t){var e=t.children,r=t.onClick;return(0,d.jsxs)("span",{className:"tag-default tag-pill",children:[e,(0,d.jsx)(a.zx,{className:"btn-sm editor-tag",onClick:r,children:(0,d.jsx)("i",{className:"ion-close-round"})})]})},N=function(){var t=(0,u.U$)($.fields.body),e=t.value,r=t.name,n=t.onChange;return(0,d.jsx)(a.Wi,{as:"textarea",name:r,placeholder:"Write your article (in markdown)",rows:8,value:e,onChange:function(t){return n(t.target.value)}})},T=function(){var t=(0,u.U$)($.fields.description),e=t.value,r=t.name,n=t.onChange;return(0,d.jsx)(a.Wi,{name:r,placeholder:"What's this article about?",value:e,onChange:function(t){return n(t.target.value)}})},M=function(){var t=(0,u.U$)($.fields.title),e=t.value,r=t.name,n=t.onChange;return(0,d.jsx)(a.Wi,{className:"form-control-lg",name:r,placeholder:"Article Title",value:e,onChange:function(t){return n(t.target.value)}})},W=function(){return(0,d.jsxs)(a.l0,{id:"editor",onSubmit:function(t){t.preventDefault(),C()},children:[(0,d.jsx)(M,{}),(0,d.jsx)(T,{}),(0,d.jsx)(N,{})]})},K=function(){var t=(0,u.cI)($).submit,e=(0,o.oR)(P.pending);return(0,d.jsx)(a.zx,{className:"btn-lg btn-primary pull-xs-right",disabled:e,form:"editor",type:"submit",onClick:function(e){e.preventDefault(),t()},children:"Publish article"})},B=function(){return(0,d.jsx)(a.PS,{children:(0,o.sm)(I,{getKey:function(t){return t},fn:function(t){return(0,d.jsx)(L,{onClick:function(){return S(t)},children:t})}})})},H=function(){var t=(0,n.UO)();return(0,o.DD)(D,t),(0,d.jsx)(a.T3,{children:(0,d.jsx)(a.X2,{children:(0,d.jsxs)("div",{className:"col-md-10 offset-md-1 col-xs-12",children:[(0,d.jsx)(i.K,{}),(0,d.jsx)(W,{}),(0,d.jsx)(g,{}),(0,d.jsx)(B,{}),(0,d.jsx)(K,{})]})})})}},227:function(t,e,r){r.d(e,{K:function(){return f},o:function(){return n}});var n={};r.r(n),r.d(n,{_4:function(){return o},l6:function(){return i},CD:function(){return a}});var o=(0,r(1549).MT)({errors:{}}),a=o.map((function(t){return Object.keys(t).length})),i=o.map((function(t){return Object.entries(t.errors)})),u=r(9041),c=r(4246);function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var f=function(){var t=(0,u.oR)(a),e=(0,u.oR)(i);return(0,c.jsx)(c.Fragment,{children:t&&(0,c.jsx)("ul",{className:"error-messages",children:e.map((function(t){var e=l(t,2),r=e[0],n=e[1];return(0,c.jsxs)("li",{children:[r," ",n]},r)}))})})}}}]);