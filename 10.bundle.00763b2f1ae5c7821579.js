(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{utMG:function(e,r,t){"use strict";t.r(r),t.d(r,"SettingsPage",(function(){return w}));var n=t("mXGw"),o=t.n(n),i=t("/6P/"),a=t("UYjC"),u=t("dY8W"),l=t("SugE"),s=t("xArF"),c=t("eZyy"),d=t("rPMT"),f=Object(l.d)();f.watch((function(e){return e.preventDefault()}));var m=Object(l.c)((function(e){return c.a.put("user",{user:e})})),v=Object(u.a)(),b=i.a.$user.map((function(e){return e})),h=Object(s.a)({fields:{image:{init:""},username:{init:""},bio:{init:""},email:{init:""},password:{init:""}}});Object(l.j)({source:b,clock:Object(l.h)([v.open,b.updates]),target:h.set}),Object(l.j)({source:h.$values,clock:f,target:m}),m.done.watch((function(){window.location.reload()})),i.a.loggedOutClicked.watch((function(){d.d.history.push("/")}));var g=Object(l.e)({errors:{}}).on(m.failData,(function(e,r){var t;return null===(t=r.response)||void 0===t?void 0:t.data})).reset(h.$values,v.close),p=function(){var e=Object(u.d)(g);return o.a.createElement(a.d,{errors:e})},O=function(){var e=Object(s.b)(h.fields.bio),r=e.value,t=e.name,n=e.onChange;return o.a.createElement(a.r,{className:"form-control-lg",name:t,placeholder:"Short bio about you",rows:8,value:r,onChange:function(e){return n(e.target.value)}})},E=function(){var e=Object(s.b)(h.fields.email),r=e.value,t=e.name,n=e.onChange;return o.a.createElement(a.h,{className:"form-control-lg",name:t,placeholder:"Email",type:"email",value:r,onChange:function(e){return n(e.target.value)}})},j=function(){var e=Object(s.b)(h.fields.image),r=e.value,t=e.name,n=e.onChange;return o.a.createElement(a.h,{name:t,placeholder:"URL of profile picture",value:r,onChange:function(e){return n(e.target.value)}})},y=function(){var e=Object(s.b)(h.fields.password),r=e.value,t=e.name,n=e.onChange;return o.a.createElement(a.h,{autoComplete:"current-password",className:"form-control-lg",name:t,placeholder:"New Password",type:"password",value:r,onChange:function(e){return n(e.target.value)}})},$=function(){var e=Object(u.d)(m.pending);return o.a.createElement(a.b,{className:"btn-lg btn-primary pull-xs-right",disabled:e,type:"submit"},"Update Settings")},x=function(){var e=Object(s.b)(h.fields.username),r=e.value,t=e.name,n=e.onChange;return o.a.createElement(a.h,{className:"form-control-lg",name:t,placeholder:"Username",value:r,onChange:function(e){return n(e.target.value)}})},V=function(){return Object(u.b)(v),o.a.createElement(a.e,{onSubmit:f},o.a.createElement(j,null),o.a.createElement(x,null),o.a.createElement(O,null),o.a.createElement(E,null),o.a.createElement(y,null),o.a.createElement($,null))},w=function(){return o.a.createElement(a.l,null,o.a.createElement(a.n,null,o.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},o.a.createElement("h1",{className:"text-xs-center"},"Your Settings"),o.a.createElement(p,null),o.a.createElement(V,null),o.a.createElement("hr",null),o.a.createElement(a.b,{className:"btn-outline-danger",onClick:i.a.loggedOutClicked},"Or click here to logout."))))}},xArF:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return v})),t.d(r,"c",(function(){return b}));var n=t("YSF1"),o=t("dY8W");function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){var r=e.init,t=e.domain;return e.existing||(t?t.store(r):Object(n.createStore)(r))},s=function(e){var r=e.domain;return e.existing||(r?r.event():Object(n.createEvent)())};function c(e,r,t){var n,o,i,a,u,c,d,f,m,v,b,h="function"==typeof r.init?r.init():r.init,g=l({domain:t,existing:null===(n=r.units)||void 0===n?void 0:n.$value,init:h}),p=l({domain:t,existing:null===(o=r.units)||void 0===o?void 0:o.$errors,init:[]}),O=p.map((function(e){return e[0]?e[0]:null})),E=g.map((function(e){return e!==h})),j=l({domain:t,existing:null===(i=r.units)||void 0===i?void 0:i.$isTouched,init:!1}),y=s({domain:t,existing:null===(a=r.units)||void 0===a?void 0:a.onChange}),$=s({domain:t,existing:null===(u=r.units)||void 0===u?void 0:u.onBlur}),x=s({domain:t,existing:null===(c=r.units)||void 0===c?void 0:c.changed}),V=s({domain:t,existing:null===(d=r.units)||void 0===d?void 0:d.addError}),w=s({domain:t,existing:null===(f=r.units)||void 0===f?void 0:f.validate}),S=s({domain:t,existing:null===(m=r.units)||void 0===m?void 0:m.resetErrors}),C=s({domain:t,existing:null===(v=r.units)||void 0===v?void 0:v.resetValue}),T=s({domain:t,existing:null===(b=r.units)||void 0===b?void 0:b.reset});return{changed:x,name:e,$value:g,$errors:p,$firstError:O,$isValid:O.map((function(e){return null===e})),$isDirty:E,$isTouched:j,$touched:j,onChange:y,onBlur:$,addError:V,validate:w,set:y,reset:T,resetErrors:S,resetValue:C,filter:r.filter}}function d(e){var r,t=e.$form,o=e.validateFormEvent,a=e.submitEvent,l=e.resetFormEvent,s=e.resetValues,c=e.field,d=e.rules,f=e.resetErrors,m=e.formValidationEvents,v=e.fieldValidationEvents,b=c.$value,h=c.$errors,g=c.onBlur,p=c.changed,O=c.addError,E=c.validate,j=c.resetErrors,y=c.resetValue,$=c.reset,x="function"==typeof d?Object(n.createStore)([]):Object(n.combine)(d.map((function(e){return e.source||Object(n.createStore)(null)}))),V=(r=d,function(e,t,n){for(var o=[],i="function"==typeof r?r(e,t):r,a=0;a<i.length;a++){var l=i[a],s=n?n[a]:null,c=l.validator(e,t,s);"boolean"!=typeof c||c||o.push({rule:l.name,errorText:l.errorText,value:e}),"object"!=u(c)||c.isValid||o.push({rule:l.name,errorText:c.errorText,value:e})}return o}),w=[].concat(i(m),i(v)),S=[];w.includes("submit")&&S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:x}),clock:a})),w.includes("blur")&&S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:x}),clock:g})),w.includes("change")&&S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:x}),clock:Object(n.merge)([p,y,s])})),S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:x}),clock:E})),S.push(Object(n.sample)({source:Object(n.combine)({fieldValue:b,form:t,rulesSources:x}),clock:o}));var C=Object(n.sample)({source:b,clock:O,fn:function(e,r){return{rule:r.rule,value:e,errorText:r.errorText}}});h.on(S,(function(e,r){var t=r.form,n=r.fieldValue,o=r.rulesSources;return V(n,t,o)})).on(C,(function(e,r){return[r].concat(i(e))})).reset(j,l,$,f),w.includes("change")||h.reset(p)}function f(e,r,t,o,i){var a=e.$value,u=e.$touched,l=e.onChange,s=e.changed,c=e.name,d=e.reset,f=e.resetValue,m=e.filter;u.on(s,(function(){return!0})).reset(d,t,o),Object(n.guard)({source:l,filter:m||function(){return!0},target:s}),a.on(s,(function(e,r){return r})).on(r,(function(e,r){return r.hasOwnProperty(c)?r[c]:e})).reset(d,f,i,t)}function m(e){var r=e.filter,t=e.domain,o=e.fields,i=e.validateOn,a=e.units,u={},l=[],m=[];for(var v in o)if(o.hasOwnProperty(v)){var b=c(v,o[v],t);u[v]=b,l.push(b.$isDirty),m.push(b.$touched)}var h=function(e){var r={};for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t].$value);return Object(n.combine)(r)}(u),g=function(e){var r=[];for(var t in e)if(e.hasOwnProperty(t)){var o=e[t].$firstError;r.push(o)}return Object(n.combine)(r).map((function(e){return e.every((function(e){return null===e}))}))}(u),p=r?Object(n.combine)(g,r,(function(e,r){return e&&r})):g,O=Object(n.combine)(l).map((function(e){return e.some(Boolean)})),E=Object(n.combine)(m).map((function(e){return e.some(Boolean)})),j=s({domain:t,existing:null==a?void 0:a.validate}),y=s({domain:t,existing:null==a?void 0:a.submit}),$=s({domain:t,existing:null==a?void 0:a.formValidated}),x=s({domain:t,existing:null==a?void 0:a.setForm}),V=s({domain:t,existing:null==a?void 0:a.reset}),w=s({domain:t,existing:null==a?void 0:a.resetValues}),S=s({domain:t,existing:null==a?void 0:a.resetErrors}),C=s({domain:t,existing:null==a?void 0:a.resetTouched}),T=Object(n.sample)(h,y),k=Object(n.sample)(h,j);for(var F in u)if(u.hasOwnProperty(F)){var P=o[F],A=u[F];f(A,x,V,C,w),P.rules&&d({$form:h,rules:P.rules,submitEvent:y,resetFormEvent:V,resetValues:w,resetErrors:S,validateFormEvent:j,field:A,formValidationEvents:i||["submit"],fieldValidationEvents:P.validateOn?P.validateOn:[]})}return Object(n.guard)({source:T,filter:p,target:$}),Object(n.guard)({source:k,filter:p,target:$}),{fields:u,$values:h,$eachValid:g,$isValid:g,$isDirty:O,$touched:E,submit:y,validate:j,resetTouched:C,reset:V,resetValues:w,resetErrors:S,setForm:x,set:x,formValidated:$}}function v(e){var r=Object(o.d)(e.$value),t=Object(o.d)(e.$errors),n=Object(o.d)(e.$firstError),i=Object(o.d)(e.$isValid),a=Object(o.d)(e.$isDirty),u=Object(o.d)(e.$touched);return{name:e.name,value:r,errors:t,firstError:n,isValid:i,isDirty:a,touched:u,isTouched:u,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:function(){return null!==n},errorText:function(e){return n?e&&e[n.rule]?e[n.rule]:n.errorText||"":""}}}function b(e){var r={};for(var t in e.fields)if(e.fields.hasOwnProperty(t)){var n=e.fields[t];r[t]=v(n)}var i=Object(o.d)(e.$values),a=Object(o.d)(e.$eachValid),u=Object(o.d)(e.$isDirty),l=Object(o.d)(e.$touched);return{fields:r,values:i,hasError:function(e){return e?!!r[e]&&Boolean(r[e].firstError):!a},eachValid:a,isValid:a,isDirty:u,isTouched:l,touched:l,errors:function(e){return r[e]?r[e].errors:[]},error:function(e){return r[e]?r[e].firstError:null},reset:e.reset,errorText:function(e,t){var n=r[e];return n&&n.firstError?t&&t[n.firstError.rule]?t[n.firstError.rule]:n.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}}}}]);