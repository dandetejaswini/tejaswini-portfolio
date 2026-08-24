(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function Mg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bg={exports:{}},jc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=Symbol.for("react.transitional.element"),vS=Symbol.for("react.fragment");function Eg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:gS,type:t,key:i,ref:e!==void 0?e:null,props:n}}jc.Fragment=vS;jc.jsx=Eg;jc.jsxs=Eg;bg.exports=jc;var y=bg.exports,Tg={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=Symbol.for("react.transitional.element"),xS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),SS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),MS=Symbol.for("react.consumer"),bS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),AS=Symbol.for("react.memo"),Ag=Symbol.for("react.lazy"),RS=Symbol.for("react.activity"),Zp=Symbol.iterator;function wS(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wg=Object.assign,Cg={};function Nr(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Rg}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Nr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ng(){}Ng.prototype=Nr.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Rg}var Ah=Th.prototype=new Ng;Ah.constructor=Th;wg(Ah,Nr.prototype);Ah.isPureReactComponent=!0;var Kp=Array.isArray;function If(){}var Et={H:null,A:null,T:null,S:null},Dg=Object.prototype.hasOwnProperty;function Rh(t,e,n){var i=n.ref;return{$$typeof:Eh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function CS(t,e){return Rh(t.type,e,t.props)}function wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eh}function NS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qp=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NS(""+t.key):e.toString(36)}function DS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(If,If):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Xs(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Eh:case xS:r=!0;break;case Ag:return r=t._init,Xs(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+_u(t,0):i,Kp(a)?(n="",r!=null&&(n=r.replace(Qp,"$&/")+"/"),Xs(a,e,n,"",function(c){return c})):a!=null&&(wh(a)&&(a=CS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Qp,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(Kp(t))for(var l=0;l<t.length;l++)i=t[l],s=o+_u(i,l),r+=Xs(i,e,n,s,a);else if(l=wS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+_u(i,l++),r+=Xs(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Xs(DS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function nl(t,e,n){if(t==null)return t;var i=[],a=0;return Xs(t,i,"","",function(s){return e.call(n,s,a++)}),i}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},LS={map:nl,forEach:function(t,e,n){nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return nl(t,function(){e++}),e},toArray:function(t){return nl(t,function(e){return e})||[]},only:function(t){if(!wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ie.Activity=RS;Ie.Children=LS;Ie.Component=Nr;Ie.Fragment=_S;Ie.Profiler=yS;Ie.PureComponent=Th;Ie.StrictMode=SS;Ie.Suspense=TS;Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Et;Ie.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Et.H.useMemoCache(t)}};Ie.cache=function(t){return function(){return t.apply(null,arguments)}};Ie.cacheSignal=function(){return null};Ie.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=wg({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Dg.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];i.children=r}return Rh(t.type,a,i)};Ie.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:MS,_context:t},t};Ie.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Dg.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Rh(t,s,a)};Ie.createRef=function(){return{current:null}};Ie.forwardRef=function(t){return{$$typeof:ES,render:t}};Ie.isValidElement=wh;Ie.lazy=function(t){return{$$typeof:Ag,_payload:{_status:-1,_result:t},_init:US}};Ie.memo=function(t,e){return{$$typeof:AS,type:t,compare:e===void 0?null:e}};Ie.startTransition=function(t){var e=Et.T,n={};Et.T=n;try{var i=t(),a=Et.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(If,Jp)}catch(s){Jp(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Et.T=e}};Ie.unstable_useCacheRefresh=function(){return Et.H.useCacheRefresh()};Ie.use=function(t){return Et.H.use(t)};Ie.useActionState=function(t,e,n){return Et.H.useActionState(t,e,n)};Ie.useCallback=function(t,e){return Et.H.useCallback(t,e)};Ie.useContext=function(t){return Et.H.useContext(t)};Ie.useDebugValue=function(){};Ie.useDeferredValue=function(t,e){return Et.H.useDeferredValue(t,e)};Ie.useEffect=function(t,e){return Et.H.useEffect(t,e)};Ie.useEffectEvent=function(t){return Et.H.useEffectEvent(t)};Ie.useId=function(){return Et.H.useId()};Ie.useImperativeHandle=function(t,e,n){return Et.H.useImperativeHandle(t,e,n)};Ie.useInsertionEffect=function(t,e){return Et.H.useInsertionEffect(t,e)};Ie.useLayoutEffect=function(t,e){return Et.H.useLayoutEffect(t,e)};Ie.useMemo=function(t,e){return Et.H.useMemo(t,e)};Ie.useOptimistic=function(t,e){return Et.H.useOptimistic(t,e)};Ie.useReducer=function(t,e,n){return Et.H.useReducer(t,e,n)};Ie.useRef=function(t){return Et.H.useRef(t)};Ie.useState=function(t){return Et.H.useState(t)};Ie.useSyncExternalStore=function(t,e,n){return Et.H.useSyncExternalStore(t,e,n)};Ie.useTransition=function(){return Et.H.useTransition()};Ie.version="19.2.8";Tg.exports=Ie;var lt=Tg.exports;const OS=Mg(lt);var Ug={exports:{}},qc={},Lg={exports:{}},Og={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,I){var V=P.length;P.push(I);e:for(;0<V;){var ee=V-1>>>1,se=P[ee];if(0<a(se,I))P[ee]=I,P[V]=se,V=ee;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],V=P.pop();if(V!==I){P[0]=V;e:for(var ee=0,se=P.length,le=se>>>1;ee<le;){var ve=2*(ee+1)-1,ke=P[ve],et=ve+1,Ve=P[et];if(0>a(ke,V))et<se&&0>a(Ve,ke)?(P[ee]=Ve,P[et]=V,ee=et):(P[ee]=ke,P[ve]=V,ee=ve);else if(et<se&&0>a(Ve,V))P[ee]=Ve,P[et]=V,ee=et;else break e}}return I}function a(P,I){var V=P.sortIndex-I.sortIndex;return V!==0?V:P.id-I.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,p=null,u=3,h=!1,_=!1,E=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function S(P){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=P)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function A(P){if(E=!1,S(P),!_)if(n(l)!==null)_=!0,w||(w=!0,F());else{var I=n(c);I!==null&&H(A,I.startTime-P)}}var w=!1,C=-1,x=5,R=-1;function U(){return m?!0:!(t.unstable_now()-R<x)}function L(){if(m=!1,w){var P=t.unstable_now();R=P;var I=!0;try{e:{_=!1,E&&(E=!1,v(C),C=-1),h=!0;var V=u;try{t:{for(S(P),p=n(l);p!==null&&!(p.expirationTime>P&&U());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,u=p.priorityLevel;var se=ee(p.expirationTime<=P);if(P=t.unstable_now(),typeof se=="function"){p.callback=se,S(P),I=!0;break t}p===n(l)&&i(l),S(P)}else i(l);p=n(l)}if(p!==null)I=!0;else{var le=n(c);le!==null&&H(A,le.startTime-P),I=!1}}break e}finally{p=null,u=V,h=!1}I=void 0}}finally{I?F():w=!1}}}var F;if(typeof M=="function")F=function(){M(L)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ne=Q.port2;Q.port1.onmessage=L,F=function(){ne.postMessage(null)}}else F=function(){f(L,0)};function H(P,I){C=f(function(){P(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(P){switch(u){case 1:case 2:case 3:var I=3;break;default:I=u}var V=u;u=I;try{return P()}finally{u=V}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var V=u;u=P;try{return I()}finally{u=V}},t.unstable_scheduleCallback=function(P,I,V){var ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,P){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=V+se,P={id:d++,callback:I,priorityLevel:P,startTime:V,expirationTime:se,sortIndex:-1},V>ee?(P.sortIndex=V,e(c,P),n(l)===null&&P===n(c)&&(E?(v(C),C=-1):E=!0,H(A,V-ee))):(P.sortIndex=se,e(l,P),_||h||(_=!0,w||(w=!0,F()))),P},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(P){var I=u;return function(){var V=u;u=I;try{return P.apply(this,arguments)}finally{u=V}}}})(Og);Lg.exports=Og;var PS=Lg.exports,Pg={exports:{}},xn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=lt;function Ig(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ua(){}var vn={d:{f:ua,r:function(){throw Error(Ig(522))},D:ua,C:ua,L:ua,m:ua,X:ua,S:ua,M:ua},p:0,findDOMNode:null},zS=Symbol.for("react.portal");function BS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var oo=IS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}xn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vn;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Ig(299));return BS(t,e,null,n)};xn.flushSync=function(t){var e=oo.T,n=vn.p;try{if(oo.T=null,vn.p=2,t)return t()}finally{oo.T=e,vn.p=n,vn.d.f()}};xn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,vn.d.C(t,e))};xn.prefetchDNS=function(t){typeof t=="string"&&vn.d.D(t)};xn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?vn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&vn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};xn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Yc(e.as,e.crossOrigin);vn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&vn.d.M(t)};xn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin);vn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};xn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Yc(e.as,e.crossOrigin);vn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else vn.d.m(t)};xn.requestFormReset=function(t){vn.d.r(t)};xn.unstable_batchedUpdates=function(t,e){return t(e)};xn.useFormState=function(t,e,n){return oo.H.useFormState(t,e,n)};xn.useFormStatus=function(){return oo.H.useHostTransitionStatus()};xn.version="19.2.8";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(t){console.error(t)}}zg(),Pg.exports=xn;var FS=Pg.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zt=PS,Bg=lt,HS=FS;function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gg(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $p(t){if(Bo(t)!==t)throw Error(te(188))}function GS(t){var e=t.alternate;if(!e){if(e=Bo(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return $p(a),t;if(s===i)return $p(a),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Vg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Vg(t),e!==null)return e;t=t.sibling}return null}var Tt=Object.assign,VS=Symbol.for("react.element"),il=Symbol.for("react.transitional.element"),eo=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),Xg=Symbol.for("react.consumer"),Vi=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),va=Symbol.for("react.lazy"),Hf=Symbol.for("react.activity"),kS=Symbol.for("react.memo_cache_sentinel"),em=Symbol.iterator;function Hr(t){return t===null||typeof t!="object"?null:(t=em&&t[em]||t["@@iterator"],typeof t=="function"?t:null)}var XS=Symbol.for("react.client.reference");function Gf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===XS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case zf:return"Profiler";case kg:return"StrictMode";case Bf:return"Suspense";case Ff:return"SuspenseList";case Hf:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case eo:return"Portal";case Vi:return t.displayName||"Context";case Xg:return(t._context.displayName||"Context")+".Consumer";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case va:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}var to=Array.isArray,Ue=Bg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st=HS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,os={pending:!1,data:null,method:null,action:null},Vf=[],Ys=-1;function Ri(t){return{current:t}}function tn(t){0>Ys||(t.current=Vf[Ys],Vf[Ys]=null,Ys--)}function St(t,e){Ys++,Vf[Ys]=t.current,t.current=e}var Mi=Ri(null),Mo=Ri(null),Na=Ri(null),uc=Ri(null);function fc(t,e){switch(St(Na,e),St(Mo,t),St(Mi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?r0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=r0(e),t=u_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tn(Mi),St(Mi,t)}function mr(){tn(Mi),tn(Mo),tn(Na)}function kf(t){t.memoizedState!==null&&St(uc,t);var e=Mi.current,n=u_(e,t.type);e!==n&&(St(Mo,t),St(Mi,n))}function dc(t){Mo.current===t&&(tn(Mi),tn(Mo)),uc.current===t&&(tn(uc),Lo._currentValue=os)}var Su,tm;function Ja(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||"",tm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Su+t+tm}var yu=!1;function Mu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){u=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ja(n):""}function WS(t,e){switch(t.tag){case 26:case 27:case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return t.child!==e&&e!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return Mu(t.type,!1);case 11:return Mu(t.type.render,!1);case 1:return Mu(t.type,!0);case 31:return Ja("Activity");default:return""}}function nm(t){try{var e="",n=null;do e+=WS(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xf=Object.prototype.hasOwnProperty,Dh=Zt.unstable_scheduleCallback,bu=Zt.unstable_cancelCallback,jS=Zt.unstable_shouldYield,qS=Zt.unstable_requestPaint,In=Zt.unstable_now,YS=Zt.unstable_getCurrentPriorityLevel,Wg=Zt.unstable_ImmediatePriority,jg=Zt.unstable_UserBlockingPriority,hc=Zt.unstable_NormalPriority,ZS=Zt.unstable_LowPriority,qg=Zt.unstable_IdlePriority,KS=Zt.log,QS=Zt.unstable_setDisableYieldValue,Fo=null,zn=null;function Ea(t){if(typeof KS=="function"&&QS(t),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(Fo,t)}catch{}}var Bn=Math.clz32?Math.clz32:ey,JS=Math.log,$S=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(JS(t)/$S|0)|0}var al=256,sl=262144,rl=4194304;function $a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=$a(i):(r&=o,r!==0?a=$a(r):n||(n=o&~t,n!==0&&(a=$a(n))))):(o=i&~s,o!==0?a=$a(o):r!==0?a=$a(r):n||(n=i&~t,n!==0&&(a=$a(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Ho(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ty(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yg(){var t=rl;return rl<<=1,!(rl&62914560)&&(rl=4194304),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ny(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Bn(n),p=1<<d;o[d]=0,l[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&Zg(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Zg(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Bn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Kg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Qg(t,e){var n=e&-e;return n=n&42?1:Uh(n),n&(t.suspendedLanes|e)?0:n}function Uh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Jg(){var t=st.p;return t!==0?t:(t=window.event,t===void 0?32:y_(t.type))}function im(t,e){var n=st.p;try{return st.p=t,e()}finally{st.p=n}}var Xa=Math.random().toString(36).slice(2),an="__reactFiber$"+Xa,Rn="__reactProps$"+Xa,Dr="__reactContainer$"+Xa,Wf="__reactEvents$"+Xa,iy="__reactListeners$"+Xa,ay="__reactHandles$"+Xa,am="__reactResources$"+Xa,Vo="__reactMarker$"+Xa;function Oh(t){delete t[an],delete t[Rn],delete t[Wf],delete t[iy],delete t[ay]}function Zs(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=f0(t);t!==null;){if(n=t[an])return n;t=f0(t)}return e}t=n,n=t.parentNode}return null}function Ur(t){if(t=t[an]||t[Dr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function no(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function sr(t){var e=t[am];return e||(e=t[am]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function en(t){t[Vo]=!0}var $g=new Set,ev={};function Ss(t,e){gr(t,e),gr(t+"Capture",e)}function gr(t,e){for(ev[t]=e,t=0;t<e.length;t++)$g.add(e[t])}var sy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sm={},rm={};function ry(t){return Xf.call(rm,t)?!0:Xf.call(sm,t)?!1:sy.test(t)?rm[t]=!0:(sm[t]=!0,!1)}function kl(t,e,n){if(ry(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ol(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ci(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oy(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function jf(t){if(!t._valueTracker){var e=tv(t)?"checked":"value";t._valueTracker=oy(t,e,""+t[e])}}function nv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ly=/[\n"\\]/g;function Kn(t){return t.replace(ly,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qf(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+jn(e)):t.value!==""+jn(e)&&(t.value=""+jn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Yf(t,r,jn(e)):n!=null?Yf(t,r,jn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+jn(o):t.removeAttribute("name")}function iv(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){jf(t);return}n=n!=null?""+jn(n):"",e=e!=null?""+jn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),jf(t)}function Yf(t,e,n){e==="number"&&pc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function rr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function av(t,e,n){if(e!=null&&(e=""+jn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+jn(n):""}function sv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(te(92));if(to(i)){if(1<i.length)throw Error(te(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=jn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),jf(t)}function vr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function om(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||cy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function rv(t,e,n){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&om(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&om(t,s,e[s])}function Ph(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(t){return fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Zf=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,or=null;function lm(t){var e=Ur(t);if(e&&(t=e.stateNode)){var n=t[Rn]||null;e:switch(t=e.stateNode,e.type){case"input":if(qf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Kn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Rn]||null;if(!a)throw Error(te(90));qf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&nv(i)}break e;case"textarea":av(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&rr(t,!!n.multiple,e,!1)}}}var Tu=!1;function ov(t,e,n){if(Tu)return t(e,n);Tu=!0;try{var i=t(e);return i}finally{if(Tu=!1,(Ks!==null||or!==null)&&(ou(),Ks&&(e=Ks,t=or,or=Ks=null,lm(e),t)))for(e=0;e<t.length;e++)lm(t[e])}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Rn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kf=!1;if(Ji)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Kf=!1}var Ta=null,zh=null,Wl=null;function lv(){if(Wl)return Wl;var t,e=zh,n=e.length,i,a="value"in Ta?Ta.value:Ta.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Wl=a.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function cm(){return!1}function wn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ll:cm,this.isPropagationStopped=cm,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=wn(ys),ko=Tt({},ys,{view:0,detail:0}),dy=wn(ko),Au,Ru,Vr,Qc=Tt({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(Au=t.screenX-Vr.screenX,Ru=t.screenY-Vr.screenY):Ru=Au=0,Vr=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),um=wn(Qc),hy=Tt({},Qc,{dataTransfer:0}),py=wn(hy),my=Tt({},ko,{relatedTarget:0}),wu=wn(my),gy=Tt({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),vy=wn(gy),xy=Tt({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=wn(xy),Sy=Tt({},ys,{data:0}),fm=wn(Sy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function Bh(){return Ey}var Ty=Tt({},ko,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bh,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ay=wn(Ty),Ry=Tt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=wn(Ry),wy=Tt({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bh}),Cy=wn(wy),Ny=Tt({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=wn(Ny),Uy=Tt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=wn(Uy),Oy=Tt({},ys,{newState:0,oldState:0}),Py=wn(Oy),Iy=[9,13,27,32],Fh=Ji&&"CompositionEvent"in window,lo=null;Ji&&"documentMode"in document&&(lo=document.documentMode);var zy=Ji&&"TextEvent"in window&&!lo,cv=Ji&&(!Fh||lo&&8<lo&&11>=lo),hm=" ",pm=!1;function uv(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function By(t,e){switch(t){case"compositionend":return fv(e);case"keypress":return e.which!==32?null:(pm=!0,hm);case"textInput":return t=e.data,t===hm&&pm?null:t;default:return null}}function Fy(t,e){if(Qs)return t==="compositionend"||!Fh&&uv(t,e)?(t=lv(),Wl=zh=Ta=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hy[t.type]:e==="textarea"}function dv(t,e,n,i){Ks?or?or.push(i):or=[i]:Ks=i,e=Uc(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var co=null,Eo=null;function Gy(t){o_(t,0)}function Jc(t){var e=no(t);if(nv(e))return t}function gm(t,e){if(t==="change")return e}var hv=!1;if(Ji){var Cu;if(Ji){var Nu="oninput"in document;if(!Nu){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Nu=typeof vm.oninput=="function"}Cu=Nu}else Cu=!1;hv=Cu&&(!document.documentMode||9<document.documentMode)}function xm(){co&&(co.detachEvent("onpropertychange",pv),Eo=co=null)}function pv(t){if(t.propertyName==="value"&&Jc(Eo)){var e=[];dv(e,Eo,t,Ih(t)),ov(Gy,e)}}function Vy(t,e,n){t==="focusin"?(xm(),co=e,Eo=n,co.attachEvent("onpropertychange",pv)):t==="focusout"&&xm()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(Eo)}function Xy(t,e){if(t==="click")return Jc(e)}function Wy(t,e){if(t==="input"||t==="change")return Jc(e)}function jy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:jy;function To(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Xf.call(e,a)||!Hn(t[a],e[a]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,e){var n=_m(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var qy=Ji&&"documentMode"in document&&11>=document.documentMode,Js=null,Qf=null,uo=null,Jf=!1;function ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jf||Js==null||Js!==pc(i)||(i=Js,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uo&&To(uo,i)||(uo=i,i=Uc(Qf,"onSelect"),0<i.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Js)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Du={},vv={};Ji&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ms(t){if(Du[t])return Du[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vv)return Du[t]=e[n];return t}var xv=Ms("animationend"),_v=Ms("animationiteration"),Sv=Ms("animationstart"),Yy=Ms("transitionrun"),Zy=Ms("transitionstart"),Ky=Ms("transitioncancel"),yv=Ms("transitionend"),Mv=new Map,$f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$f.push("scrollEnd");function fi(t,e){Mv.set(t,e),Ss(e,[t])}var mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Xn=[],er=0,Gh=0;function $c(){for(var t=er,e=Gh=er=0;e<t;){var n=Xn[e];Xn[e++]=null;var i=Xn[e];Xn[e++]=null;var a=Xn[e];Xn[e++]=null;var s=Xn[e];if(Xn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&bv(n,a,s)}}function eu(t,e,n,i){Xn[er++]=t,Xn[er++]=e,Xn[er++]=n,Xn[er++]=i,Gh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Vh(t,e,n,i){return eu(t,e,n,i),gc(t)}function bs(t,e){return eu(t,null,null,e),gc(t)}function bv(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Bn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function gc(t){if(50<So)throw So=0,Sd=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var tr={};function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new Qy(t,e,n,i)}function kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Ev(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ql(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")kh(t)&&(r=1);else if(typeof t=="string")r=nb(t,n,Mi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Hf:return t=On(31,n,e,a),t.elementType=Hf,t.lanes=s,t;case qs:return ls(n.children,a,s,e);case kg:r=8,a|=24;break;case zf:return t=On(12,n,e,a|2),t.elementType=zf,t.lanes=s,t;case Bf:return t=On(13,n,e,a),t.elementType=Bf,t.lanes=s,t;case Ff:return t=On(19,n,e,a),t.elementType=Ff,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vi:r=10;break e;case Xg:r=9;break e;case Ch:r=11;break e;case Nh:r=14;break e;case va:r=16,i=null;break e}r=29,n=Error(te(130,t===null?"null":typeof t,"")),i=null}return e=On(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Uu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Tv(t){var e=On(18,null,null,0);return e.stateNode=t,e}function Lu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Mm=new WeakMap;function Qn(t,e){if(typeof t=="object"&&t!==null){var n=Mm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:nm(e)},Mm.set(t,e),e)}return{value:t,source:e,stack:nm(e)}}var nr=[],ir=0,vc=null,Ao=0,qn=[],Yn=0,Fa=null,vi=1,xi="";function Fi(t,e){nr[ir++]=Ao,nr[ir++]=vc,vc=t,Ao=e}function Av(t,e,n){qn[Yn++]=vi,qn[Yn++]=xi,qn[Yn++]=Fa,Fa=t;var i=vi;t=xi;var a=32-Bn(i)-1;i&=~(1<<a),n+=1;var s=32-Bn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,vi=1<<32-Bn(e)+a|n<<a|i,xi=s+t}else vi=1<<s|n<<a|i,xi=t}function Xh(t){t.return!==null&&(Fi(t,1),Av(t,1,0))}function Wh(t){for(;t===vc;)vc=nr[--ir],nr[ir]=null,Ao=nr[--ir],nr[ir]=null;for(;t===Fa;)Fa=qn[--Yn],qn[Yn]=null,xi=qn[--Yn],qn[Yn]=null,vi=qn[--Yn],qn[Yn]=null}function Rv(t,e){qn[Yn++]=vi,qn[Yn++]=xi,qn[Yn++]=Fa,vi=e.id,xi=e.overflow,Fa=t}var sn=null,bt=null,Ke=!1,Da=null,Jn=!1,ed=Error(te(519));function Ha(t){var e=Error(te(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ro(Qn(e,t)),ed}function bm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[an]=t,e[Rn]=i,n){case"dialog":Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":case"embed":Xe("load",e);break;case"video":case"audio":for(n=0;n<Do.length;n++)Xe(Do[n],e);break;case"source":Xe("error",e);break;case"img":case"image":case"link":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"input":Xe("invalid",e),iv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xe("invalid",e);break;case"textarea":Xe("invalid",e),sv(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||c_(e.textContent,n)?(i.popover!=null&&(Xe("beforetoggle",e),Xe("toggle",e)),i.onScroll!=null&&Xe("scroll",e),i.onScrollEnd!=null&&Xe("scrollend",e),i.onClick!=null&&(e.onclick=ki),e=!0):e=!1,e||Ha(t,!0)}function Em(t){for(sn=t.return;sn;)switch(sn.tag){case 5:case 31:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:sn=sn.return}}function ws(t){if(t!==sn)return!1;if(!Ke)return Em(t),Ke=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Td(t.type,t.memoizedProps)),n=!n),n&&bt&&Ha(t),Em(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));bt=u0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));bt=u0(t)}else e===27?(e=bt,Wa(t.type)?(t=Cd,Cd=null,bt=t):bt=e):bt=sn?ti(t.stateNode.nextSibling):null;return!0}function ds(){bt=sn=null,Ke=!1}function Ou(){var t=Da;return t!==null&&(bn===null?bn=t:bn.push.apply(bn,t),Da=null),t}function Ro(t){Da===null?Da=[t]:Da.push(t)}var td=Ri(null),Es=null,Xi=null;function _a(t,e,n){St(td,e._currentValue),e._currentValue=n}function qi(t){t._currentValue=td.current,tn(td)}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function id(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),nd(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(te(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),nd(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Lr(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var o=a.type;Hn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===uc.current){if(r=a.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Lo):t=[Lo])}a=a.return}t!==null&&id(e,t,n,i),e.flags|=262144}function xc(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){Es=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function rn(t){return wv(Es,t)}function cl(t,e){return Es===null&&hs(t),wv(t,e)}function wv(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Xi===null){if(t===null)throw Error(te(308));Xi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xi=Xi.next=e;return n}var Jy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},$y=Zt.unstable_scheduleCallback,eM=Zt.unstable_NormalPriority,jt={$$typeof:Vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jh(){return{controller:new Jy,data:new Map,refCount:0}}function Xo(t){t.refCount--,t.refCount===0&&$y(eM,function(){t.controller.abort()})}var fo=null,ad=0,xr=0,lr=null;function tM(t,e){if(fo===null){var n=fo=[];ad=0,xr=vp(),lr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ad++,e.then(Tm,Tm),e}function Tm(){if(--ad===0&&fo!==null){lr!==null&&(lr.status="fulfilled");var t=fo;fo=null,xr=0,lr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function nM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Am=Ue.S;Ue.S=function(t,e){Vx=In(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&tM(t,e),Am!==null&&Am(t,e)};var cs=Ri(null);function qh(){var t=cs.current;return t!==null?t:xt.pooledCache}function Yl(t,e){e===null?St(cs,cs.current):St(cs,e.pool)}function Cv(){var t=qh();return t===null?null:{parent:jt._currentValue,pool:t}}var Or=Error(te(460)),Yh=Error(te(474)),tu=Error(te(542)),_c={then:function(){}};function Rm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Nv(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ki,ki),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t;default:if(typeof e.status=="string")e.then(ki,ki);else{if(t=xt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t}throw us=e,Or}}function es(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(us=n,Or):n}}var us=null;function wm(){if(us===null)throw Error(te(459));var t=us;return us=null,t}function Cm(t){if(t===Or||t===tu)throw Error(te(483))}var cr=null,wo=0;function ul(t){var e=wo;return wo+=1,cr===null&&(cr=[]),Nv(cr,t,e)}function kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function fl(t,e){throw e.$$typeof===VS?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Dv(t){function e(f,v){if(t){var M=f.deletions;M===null?(f.deletions=[v],f.flags|=16):M.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f){for(var v=new Map;f!==null;)f.key!==null?v.set(f.key,f):v.set(f.index,f),f=f.sibling;return v}function a(f,v){return f=ji(f,v),f.index=0,f.sibling=null,f}function s(f,v,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<v?(f.flags|=67108866,v):M):(f.flags|=67108866,v)):(f.flags|=1048576,v)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function o(f,v,M,S){return v===null||v.tag!==6?(v=Uu(M,f.mode,S),v.return=f,v):(v=a(v,M),v.return=f,v)}function l(f,v,M,S){var A=M.type;return A===qs?d(f,v,M.props.children,S,M.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===va&&es(A)===v.type)?(v=a(v,M.props),kr(v,M),v.return=f,v):(v=ql(M.type,M.key,M.props,null,f.mode,S),kr(v,M),v.return=f,v)}function c(f,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Lu(M,f.mode,S),v.return=f,v):(v=a(v,M.children||[]),v.return=f,v)}function d(f,v,M,S,A){return v===null||v.tag!==7?(v=ls(M,f.mode,S,A),v.return=f,v):(v=a(v,M),v.return=f,v)}function p(f,v,M){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Uu(""+v,f.mode,M),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case il:return M=ql(v.type,v.key,v.props,null,f.mode,M),kr(M,v),M.return=f,M;case eo:return v=Lu(v,f.mode,M),v.return=f,v;case va:return v=es(v),p(f,v,M)}if(to(v)||Hr(v))return v=ls(v,f.mode,M,null),v.return=f,v;if(typeof v.then=="function")return p(f,ul(v),M);if(v.$$typeof===Vi)return p(f,cl(f,v),M);fl(f,v)}return null}function u(f,v,M,S){var A=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return A!==null?null:o(f,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case il:return M.key===A?l(f,v,M,S):null;case eo:return M.key===A?c(f,v,M,S):null;case va:return M=es(M),u(f,v,M,S)}if(to(M)||Hr(M))return A!==null?null:d(f,v,M,S,null);if(typeof M.then=="function")return u(f,v,ul(M),S);if(M.$$typeof===Vi)return u(f,v,cl(f,M),S);fl(f,M)}return null}function h(f,v,M,S,A){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(M)||null,o(v,f,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case il:return f=f.get(S.key===null?M:S.key)||null,l(v,f,S,A);case eo:return f=f.get(S.key===null?M:S.key)||null,c(v,f,S,A);case va:return S=es(S),h(f,v,M,S,A)}if(to(S)||Hr(S))return f=f.get(M)||null,d(v,f,S,A,null);if(typeof S.then=="function")return h(f,v,M,ul(S),A);if(S.$$typeof===Vi)return h(f,v,M,cl(v,S),A);fl(v,S)}return null}function _(f,v,M,S){for(var A=null,w=null,C=v,x=v=0,R=null;C!==null&&x<M.length;x++){C.index>x?(R=C,C=null):R=C.sibling;var U=u(f,C,M[x],S);if(U===null){C===null&&(C=R);break}t&&C&&U.alternate===null&&e(f,C),v=s(U,v,x),w===null?A=U:w.sibling=U,w=U,C=R}if(x===M.length)return n(f,C),Ke&&Fi(f,x),A;if(C===null){for(;x<M.length;x++)C=p(f,M[x],S),C!==null&&(v=s(C,v,x),w===null?A=C:w.sibling=C,w=C);return Ke&&Fi(f,x),A}for(C=i(C);x<M.length;x++)R=h(C,f,x,M[x],S),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?x:R.key),v=s(R,v,x),w===null?A=R:w.sibling=R,w=R);return t&&C.forEach(function(L){return e(f,L)}),Ke&&Fi(f,x),A}function E(f,v,M,S){if(M==null)throw Error(te(151));for(var A=null,w=null,C=v,x=v=0,R=null,U=M.next();C!==null&&!U.done;x++,U=M.next()){C.index>x?(R=C,C=null):R=C.sibling;var L=u(f,C,U.value,S);if(L===null){C===null&&(C=R);break}t&&C&&L.alternate===null&&e(f,C),v=s(L,v,x),w===null?A=L:w.sibling=L,w=L,C=R}if(U.done)return n(f,C),Ke&&Fi(f,x),A;if(C===null){for(;!U.done;x++,U=M.next())U=p(f,U.value,S),U!==null&&(v=s(U,v,x),w===null?A=U:w.sibling=U,w=U);return Ke&&Fi(f,x),A}for(C=i(C);!U.done;x++,U=M.next())U=h(C,f,x,U.value,S),U!==null&&(t&&U.alternate!==null&&C.delete(U.key===null?x:U.key),v=s(U,v,x),w===null?A=U:w.sibling=U,w=U);return t&&C.forEach(function(F){return e(f,F)}),Ke&&Fi(f,x),A}function m(f,v,M,S){if(typeof M=="object"&&M!==null&&M.type===qs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case il:e:{for(var A=M.key;v!==null;){if(v.key===A){if(A=M.type,A===qs){if(v.tag===7){n(f,v.sibling),S=a(v,M.props.children),S.return=f,f=S;break e}}else if(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===va&&es(A)===v.type){n(f,v.sibling),S=a(v,M.props),kr(S,M),S.return=f,f=S;break e}n(f,v);break}else e(f,v);v=v.sibling}M.type===qs?(S=ls(M.props.children,f.mode,S,M.key),S.return=f,f=S):(S=ql(M.type,M.key,M.props,null,f.mode,S),kr(S,M),S.return=f,f=S)}return r(f);case eo:e:{for(A=M.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(f,v.sibling),S=a(v,M.children||[]),S.return=f,f=S;break e}else{n(f,v);break}else e(f,v);v=v.sibling}S=Lu(M,f.mode,S),S.return=f,f=S}return r(f);case va:return M=es(M),m(f,v,M,S)}if(to(M))return _(f,v,M,S);if(Hr(M)){if(A=Hr(M),typeof A!="function")throw Error(te(150));return M=A.call(M),E(f,v,M,S)}if(typeof M.then=="function")return m(f,v,ul(M),S);if(M.$$typeof===Vi)return m(f,v,cl(f,M),S);fl(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,v!==null&&v.tag===6?(n(f,v.sibling),S=a(v,M),S.return=f,f=S):(n(f,v),S=Uu(M,f.mode,S),S.return=f,f=S),r(f)):n(f,v)}return function(f,v,M,S){try{wo=0;var A=m(f,v,M,S);return cr=null,A}catch(C){if(C===Or||C===tu)throw C;var w=On(29,C,null,f.mode);return w.lanes=S,w.return=f,w}finally{}}}var ps=Dv(!0),Uv=Dv(!1),xa=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=gc(t),bv(t,null,n),e}return eu(t,i,e,n),gc(t)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kg(t,n)}}function Pu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var rd=!1;function po(){if(rd){var t=lr;if(t!==null)throw t}}function mo(t,e,n,i){rd=!1;var a=t.updateQueue;xa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;r=0,d=c=l=null,o=s;do{var u=o.lane&-536870913,h=u!==o.lane;if(h?(qe&u)===u:(i&u)===u){u!==0&&u===xr&&(rd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,E=o;u=e;var m=n;switch(E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(m,p,u);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,u=typeof _=="function"?_.call(m,p,u):_,u==null)break e;p=Tt({},p,u);break e;case 2:xa=!0}}u=o.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=h,l=p):d=d.next=h,r|=u;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;h=o,o=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Va|=r,t.lanes=r,t.memoizedState=p}}function Lv(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function Ov(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Lv(n[t],e)}var _r=Ri(null),Sc=Ri(0);function Nm(t,e){t=na,St(Sc,t),St(_r,e),na=t|e.baseLanes}function od(){St(Sc,na),St(_r,_r.current)}function Kh(){na=Sc.current,tn(_r),tn(Sc)}var Gn=Ri(null),ei=null;function Sa(t){var e=t.alternate;St(Ft,Ft.current&1),St(Gn,t),ei===null&&(e===null||_r.current!==null||e.memoizedState!==null)&&(ei=t)}function ld(t){St(Ft,Ft.current),St(Gn,t),ei===null&&(ei=t)}function Pv(t){t.tag===22?(St(Ft,Ft.current),St(Gn,t),ei===null&&(ei=t)):ya()}function ya(){St(Ft,Ft.current),St(Gn,Gn.current)}function Ln(t){tn(Gn),ei===t&&(ei=null),tn(Ft)}var Ft=Ri(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Rd(n)||wd(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $i=0,Be=null,pt=null,Xt=null,Mc=!1,ur=!1,ms=!1,bc=0,Co=0,fr=null,iM=0;function Lt(){throw Error(te(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Jh(t,e,n,i,a,s){return $i=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ue.H=t===null||t.memoizedState===null?dx:cp,ms=!1,s=n(i,a),ms=!1,ur&&(s=zv(e,n,i,a)),Iv(t),s}function Iv(t){Ue.H=No;var e=pt!==null&&pt.next!==null;if($i=0,Xt=pt=Be=null,Mc=!1,Co=0,fr=null,e)throw Error(te(300));t===null||qt||(t=t.dependencies,t!==null&&xc(t)&&(qt=!0))}function zv(t,e,n,i){Be=t;var a=0;do{if(ur&&(fr=null),Co=0,ur=!1,25<=a)throw Error(te(301));if(a+=1,Xt=pt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ue.H=hx,s=e(n,i)}while(ur);return s}function aM(){var t=Ue.H,e=t.useState()[0];return e=typeof e.then=="function"?Wo(e):e,t=t.useState()[0],(pt!==null?pt.memoizedState:null)!==t&&(Be.flags|=1024),e}function $h(){var t=bc!==0;return bc=0,t}function ep(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function tp(t){if(Mc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mc=!1}$i=0,Xt=pt=Be=null,ur=!1,Co=bc=0,fr=null}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Be.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Ht(){if(pt===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=Xt===null?Be.memoizedState:Xt.next;if(e!==null)Xt=e,pt=t;else{if(t===null)throw Be.alternate===null?Error(te(467)):Error(te(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Xt===null?Be.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(t){var e=Co;return Co+=1,fr===null&&(fr=[]),t=Nv(fr,t,e),e=Be,(Xt===null?e.memoizedState:Xt.next)===null&&(e=e.alternate,Ue.H=e===null||e.memoizedState===null?dx:cp),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wo(t);if(t.$$typeof===Vi)return rn(t)}throw Error(te(438,String(t)))}function np(t){var e=null,n=Be.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Be.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=nu(),Be.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=kS;return e.index++,n}function ea(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=Ht();return ip(e,pt,t)}function ip(t,e,n){var i=t.queue;if(i===null)throw Error(te(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(qe&p)===p:($i&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===xr&&(d=!0);else if(($i&u)===u){c=c.next,u===xr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,Be.lanes|=u,Va|=u;p=c.action,ms&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=s):l=l.next=u,Be.lanes|=p,Va|=p;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!Hn(s,t.memoizedState)&&(qt=!0,d&&(n=lr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Iu(t){var e=Ht(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Hn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bv(t,e,n){var i=Be,a=Ht(),s=Ke;if(s){if(n===void 0)throw Error(te(407));n=n()}else n=e();var r=!Hn((pt||a).memoizedState,n);if(r&&(a.memoizedState=n,qt=!0),a=a.queue,ap(Gv.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||Xt!==null&&Xt.memoizedState.tag&1){if(i.flags|=2048,Sr(9,{destroy:void 0},Hv.bind(null,i,a,n,e),null),xt===null)throw Error(te(349));s||$i&127||Fv(i,e,n)}return n}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e=nu(),Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hv(t,e,n,i){e.value=n,e.getSnapshot=i,Vv(e)&&kv(t)}function Gv(t,e,n){return n(function(){Vv(e)&&kv(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function kv(t){var e=bs(t,2);e!==null&&En(e,t,2)}function cd(t){var e=gn();if(typeof t=="function"){var n=t;if(t=n(),ms){Ea(!0);try{n()}finally{Ea(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e}function Xv(t,e,n,i){return t.baseState=n,ip(t,pt,typeof i=="function"?i:ea)}function sM(t,e,n,i,a){if(su(t))throw Error(te(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ue.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Wv(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Wv(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Ue.T,r={};Ue.T=r;try{var o=n(a,i),l=Ue.S;l!==null&&l(r,o),Dm(t,e,o)}catch(c){ud(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Ue.T=s}}else try{s=n(a,i),Dm(t,e,s)}catch(c){ud(t,e,c)}}function Dm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Um(t,e,i)},function(i){return ud(t,e,i)}):Um(t,e,n)}function Um(t,e,n){e.status="fulfilled",e.value=n,jv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Wv(t,n)))}function ud(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,jv(e),e=e.next;while(e!==i)}t.action=null}function jv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function qv(t,e){return e}function Lm(t,e){if(Ke){var n=xt.formState;if(n!==null){e:{var i=Be;if(Ke){if(bt){t:{for(var a=bt,s=Jn;a.nodeType!==8;){if(!s){a=null;break t}if(a=ti(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){bt=ti(a.nextSibling),i=a.data==="F!";break e}}Ha(i)}i=!1}i&&(e=n[0])}}return n=gn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qv,lastRenderedState:e},n.queue=i,n=cx.bind(null,Be,i),i.dispatch=n,i=cd(!1),s=lp.bind(null,Be,!1,i.queue),i=gn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=sM.bind(null,Be,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Om(t){var e=Ht();return Yv(e,pt,t)}function Yv(t,e,n){if(e=ip(t,e,qv)[0],t=Zl(ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Wo(e)}catch(r){throw r===Or?tu:r}else i=e;e=Ht();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Be.flags|=2048,Sr(9,{destroy:void 0},rM.bind(null,a,n),null)),[i,s,t]}function rM(t,e){t.action=e}function Pm(t){var e=Ht(),n=pt;if(n!==null)return Yv(e,n,t);Ht(),e=e.memoizedState,n=Ht();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Sr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Be.updateQueue,e===null&&(e=nu(),Be.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Zv(){return Ht().memoizedState}function Kl(t,e,n,i){var a=gn();Be.flags|=t,a.memoizedState=Sr(1|e,{destroy:void 0},n,i===void 0?null:i)}function au(t,e,n,i){var a=Ht();i=i===void 0?null:i;var s=a.memoizedState.inst;pt!==null&&i!==null&&Qh(i,pt.memoizedState.deps)?a.memoizedState=Sr(e,s,n,i):(Be.flags|=t,a.memoizedState=Sr(1|e,s,n,i))}function Im(t,e){Kl(8390656,8,t,e)}function ap(t,e){au(2048,8,t,e)}function oM(t){Be.flags|=4;var e=Be.updateQueue;if(e===null)e=nu(),Be.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Kv(t){var e=Ht().memoizedState;return oM({ref:e,nextImpl:t}),function(){if(at&2)throw Error(te(440));return e.impl.apply(void 0,arguments)}}function Qv(t,e){return au(4,2,t,e)}function Jv(t,e){return au(4,4,t,e)}function $v(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ex(t,e,n){n=n!=null?n.concat([t]):null,au(4,4,$v.bind(null,e,t),n)}function sp(){}function tx(t,e){var n=Ht();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function nx(t,e){var n=Ht();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Qh(e,i[1]))return i[0];if(i=t(),ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i}function rp(t,e,n){return n===void 0||$i&1073741824&&!(qe&261930)?t.memoizedState=e:(t.memoizedState=n,t=Xx(),Be.lanes|=t,Va|=t,n)}function ix(t,e,n,i){return Hn(n,e)?n:_r.current!==null?(t=rp(t,n,i),Hn(t,e)||(qt=!0),t):!($i&42)||$i&1073741824&&!(qe&261930)?(qt=!0,t.memoizedState=n):(t=Xx(),Be.lanes|=t,Va|=t,e)}function ax(t,e,n,i,a){var s=st.p;st.p=s!==0&&8>s?s:8;var r=Ue.T,o={};Ue.T=o,lp(t,!1,e,n);try{var l=a(),c=Ue.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=nM(l,i);go(t,e,d,Fn(t))}else go(t,e,i,Fn(t))}catch(p){go(t,e,{then:function(){},status:"rejected",reason:p},Fn())}finally{st.p=s,r!==null&&o.types!==null&&(r.types=o.types),Ue.T=r}}function lM(){}function fd(t,e,n,i){if(t.tag!==5)throw Error(te(476));var a=sx(t).queue;ax(t,a,e,os,n===null?lM:function(){return rx(t),n(i)})}function sx(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:os,baseState:os,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:os},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function rx(t){var e=sx(t);e.next===null&&(e=t.alternate.memoizedState),go(t,e.next.queue,{},Fn())}function op(){return rn(Lo)}function ox(){return Ht().memoizedState}function lx(){return Ht().memoizedState}function cM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Fn();t=Ua(n);var i=La(e,t,n);i!==null&&(En(i,e,n),ho(i,e,n)),e={cache:jh()},t.payload=e;return}e=e.return}}function uM(t,e,n){var i=Fn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},su(t)?ux(e,n):(n=Vh(t,e,n,i),n!==null&&(En(n,t,i),fx(n,e,i)))}function cx(t,e,n){var i=Fn();go(t,e,n,i)}function go(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(su(t))ux(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Hn(o,r))return eu(t,e,a,0),xt===null&&$c(),!1}catch{}finally{}if(n=Vh(t,e,a,i),n!==null)return En(n,t,i),fx(n,e,i),!0}return!1}function lp(t,e,n,i){if(i={lane:2,revertLane:vp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},su(t)){if(e)throw Error(te(479))}else e=Vh(t,n,i,2),e!==null&&En(e,t,2)}function su(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function ux(t,e){ur=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function fx(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Kg(t,n)}}var No={readContext:rn,use:iu,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};No.useEffectEvent=Lt;var dx={readContext:rn,use:iu,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:Im,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Kl(4194308,4,$v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){Kl(4,2,t,e)},useMemo:function(t,e){var n=gn();e=e===void 0?null:e;var i=t();if(ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=gn();if(n!==void 0){var a=n(e);if(ms){Ea(!0);try{n(e)}finally{Ea(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=uM.bind(null,Be,t),[i.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:function(t){t=cd(t);var e=t.queue,n=cx.bind(null,Be,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:sp,useDeferredValue:function(t,e){var n=gn();return rp(n,t,e)},useTransition:function(){var t=cd(!1);return t=ax.bind(null,Be,t.queue,!0,!1),gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Be,a=gn();if(Ke){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),xt===null)throw Error(te(349));qe&127||Fv(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,Im(Gv.bind(null,i,s,t),[t]),i.flags|=2048,Sr(9,{destroy:void 0},Hv.bind(null,i,s,n,e),null),n},useId:function(){var t=gn(),e=xt.identifierPrefix;if(Ke){var n=xi,i=vi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=iM++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:op,useFormState:Lm,useActionState:Lm,useOptimistic:function(t){var e=gn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lp.bind(null,Be,!0,n),n.dispatch=e,[t,e]},useMemoCache:np,useCacheRefresh:function(){return gn().memoizedState=cM.bind(null,Be)},useEffectEvent:function(t){var e=gn(),n={impl:t};return e.memoizedState=n,function(){if(at&2)throw Error(te(440));return n.impl.apply(void 0,arguments)}}},cp={readContext:rn,use:iu,useCallback:tx,useContext:rn,useEffect:ap,useImperativeHandle:ex,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:nx,useReducer:Zl,useRef:Zv,useState:function(){return Zl(ea)},useDebugValue:sp,useDeferredValue:function(t,e){var n=Ht();return ix(n,pt.memoizedState,t,e)},useTransition:function(){var t=Zl(ea)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Wo(t),e]},useSyncExternalStore:Bv,useId:ox,useHostTransitionStatus:op,useFormState:Om,useActionState:Om,useOptimistic:function(t,e){var n=Ht();return Xv(n,pt,t,e)},useMemoCache:np,useCacheRefresh:lx};cp.useEffectEvent=Kv;var hx={readContext:rn,use:iu,useCallback:tx,useContext:rn,useEffect:ap,useImperativeHandle:ex,useInsertionEffect:Qv,useLayoutEffect:Jv,useMemo:nx,useReducer:Iu,useRef:Zv,useState:function(){return Iu(ea)},useDebugValue:sp,useDeferredValue:function(t,e){var n=Ht();return pt===null?rp(n,t,e):ix(n,pt.memoizedState,t,e)},useTransition:function(){var t=Iu(ea)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Wo(t),e]},useSyncExternalStore:Bv,useId:ox,useHostTransitionStatus:op,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,e){var n=Ht();return pt!==null?Xv(n,pt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:np,useCacheRefresh:lx};hx.useEffectEvent=Kv;function zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Fn(),a=Ua(i);a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(En(e,t,i),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Fn(),a=Ua(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(En(e,t,i),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fn(),i=Ua(n);i.tag=2,e!=null&&(i.callback=e),e=La(t,i,n),e!==null&&(En(e,t,n),ho(e,t,n))}};function zm(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(a,s):!0}function Bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dd.enqueueReplaceState(e,e.state,null)}function gs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Tt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function px(t){mc(t)}function mx(t){console.error(t)}function gx(t){mc(t)}function Ec(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Fm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function hd(t,e,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(t,e)},n}function vx(t){return t=Ua(t),t.tag=3,t}function xx(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){Fm(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Fm(e,n,i),typeof a!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Lr(e,n,a,!0),n=Gn.current,n!==null){switch(n.tag){case 31:case 13:return ei===null?Cc():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===_c?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Yu(t,i,a)),!1;case 22:return n.flags|=65536,i===_c?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Yu(t,i,a)),!1}throw Error(te(435,n.tag))}return Yu(t,i,a),Cc(),!1}if(Ke)return e=Gn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==ed&&(t=Error(te(422),{cause:i}),Ro(Qn(t,n)))):(i!==ed&&(e=Error(te(423),{cause:i}),Ro(Qn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Qn(i,n),a=hd(t.stateNode,i,a),Pu(t,a),Ot!==4&&(Ot=2)),!1;var s=Error(te(520),{cause:i});if(s=Qn(s,n),_o===null?_o=[s]:_o.push(s),Ot!==4&&(Ot=2),e===null)return!0;i=Qn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=hd(n.stateNode,i,t),Pu(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=vx(a),xx(a,t,n,i),Pu(n,a),!1}n=n.return}while(n!==null);return!1}var up=Error(te(461)),qt=!1;function nn(t,e,n,i){e.child=t===null?Uv(e,null,n,i):ps(e,t.child,n,i)}function Hm(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return hs(e),i=Jh(t,e,n,r,s,a),o=$h(),t!==null&&!qt?(ep(t,e,a),ta(t,e,a)):(Ke&&o&&Xh(e),e.flags|=1,nn(t,e,i,a),e.child)}function Gm(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!kh(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,_x(t,e,s,i,a)):(t=ql(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!fp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(r,i)&&t.ref===e.ref)return ta(t,e,a)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function _x(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(qt=!1,e.pendingProps=i=s,fp(t,a))t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,ta(t,e,a)}return pd(t,e,n,i,a)}function Sx(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Vm(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(e,s!==null?s.cachePool:null),s!==null?Nm(e,s):od(),Pv(e);else return i=e.lanes=536870912,Vm(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Yl(e,s.cachePool),Nm(e,s),ya(),e.memoizedState=null):(t!==null&&Yl(e,null),od(),ya());return nn(t,e,a,n),e.child}function io(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Vm(t,e,n,i,a){var s=qh();return s=s===null?null:{parent:jt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Yl(e,null),od(),Pv(e),t!==null&&Lr(t,e,i,!0),e.childLanes=a,null}function Ql(t,e){return e=Tc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function km(t,e,n){return ps(e,t.child,null,n),t=Ql(e,e.pendingProps),t.flags|=2,Ln(e),e.memoizedState=null,t}function dM(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Ke){if(i.mode==="hidden")return t=Ql(e,i),e.lanes=536870912,io(null,t);if(ld(e),(t=bt)?(t=d_(t,Jn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:vi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},n=Tv(t),n.return=e,e.child=n,sn=e,bt=null)):t=null,t===null)throw Ha(e);return e.lanes=536870912,null}return Ql(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(ld(e),a)if(e.flags&256)e.flags&=-257,e=km(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(te(558));else if(qt||Lr(t,e,n,!1),a=(n&t.childLanes)!==0,qt||a){if(i=xt,i!==null&&(r=Qg(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bs(t,r),En(i,t,r),up;Cc(),e=km(t,e,n)}else t=s.treeContext,bt=ti(r.nextSibling),sn=e,Ke=!0,Da=null,Jn=!1,t!==null&&Rv(e,t),e=Ql(e,i),e.flags|=4096;return e}return t=ji(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Jl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(te(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function pd(t,e,n,i,a){return hs(e),n=Jh(t,e,n,i,void 0,a),i=$h(),t!==null&&!qt?(ep(t,e,a),ta(t,e,a)):(Ke&&i&&Xh(e),e.flags|=1,nn(t,e,n,a),e.child)}function Xm(t,e,n,i,a,s){return hs(e),e.updateQueue=null,n=zv(e,i,n,a),Iv(t),i=$h(),t!==null&&!qt?(ep(t,e,s),ta(t,e,s)):(Ke&&i&&Xh(e),e.flags|=1,nn(t,e,n,s),e.child)}function Wm(t,e,n,i,a){if(hs(e),e.stateNode===null){var s=tr,r=n.contextType;typeof r=="object"&&r!==null&&(s=rn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=dd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},Zh(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?rn(r):tr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(zu(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&dd.enqueueReplaceState(s,s.state,null),mo(e,i,s,a),po(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=gs(n,o);s.props=l;var c=s.context,d=n.contextType;r=tr,typeof d=="object"&&d!==null&&(r=rn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&Bm(e,s,i,r),xa=!1;var u=e.memoizedState;s.state=u,mo(e,i,s,a),po(),c=e.memoizedState,o||u!==c||xa?(typeof p=="function"&&(zu(e,n,p,i),c=e.memoizedState),(l=xa||zm(e,n,l,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,sd(t,e),r=e.memoizedProps,d=gs(n,r),s.props=d,p=e.pendingProps,u=s.context,c=n.contextType,l=tr,typeof c=="object"&&c!==null&&(l=rn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Bm(e,s,i,l),xa=!1,u=e.memoizedState,s.state=u,mo(e,i,s,a),po();var h=e.memoizedState;r!==p||u!==h||xa||t!==null&&t.dependencies!==null&&xc(t.dependencies)?(typeof o=="function"&&(zu(e,n,o,i),h=e.memoizedState),(d=xa||zm(e,n,d,i,u,h,l)||t!==null&&t.dependencies!==null&&xc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),s.props=i,s.state=h,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,Jl(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=ps(e,t.child,null,a),e.child=ps(e,null,n,a)):nn(t,e,n,a),e.memoizedState=s.state,t=e.child):t=ta(t,e,a),t}function jm(t,e,n,i){return ds(),e.flags|=256,nn(t,e,n,i),e.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(t){return{baseLanes:t,cachePool:Cv()}}function Hu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Pn),t}function yx(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Ft.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Ke){if(a?Sa(e):ya(),(t=bt)?(t=d_(t,Jn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:vi,overflow:xi}:null,retryLane:536870912,hydrationErrors:null},n=Tv(t),n.return=e,e.child=n,sn=e,bt=null)):t=null,t===null)throw Ha(e);return wd(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(ya(),a=e.mode,o=Tc({mode:"hidden",children:o},a),i=ls(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=Fu(n),i.childLanes=Hu(t,r,n),e.memoizedState=Bu,io(null,i)):(Sa(e),md(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(Sa(e),e.flags&=-257,e=Gu(t,e,n)):e.memoizedState!==null?(ya(),e.child=t.child,e.flags|=128,e=null):(ya(),o=i.fallback,a=e.mode,i=Tc({mode:"visible",children:i.children},a),o=ls(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,ps(e,t.child,null,n),i=e.child,i.memoizedState=Fu(n),i.childLanes=Hu(t,r,n),e.memoizedState=Bu,e=io(null,i));else if(Sa(e),wd(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(te(419)),i.stack="",i.digest=r,Ro({value:i,source:null,stack:null}),e=Gu(t,e,n)}else if(qt||Lr(t,e,n,!1),r=(n&t.childLanes)!==0,qt||r){if(r=xt,r!==null&&(i=Qg(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,bs(t,i),En(r,t,i),up;Rd(o)||Cc(),e=Gu(t,e,n)}else Rd(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,bt=ti(o.nextSibling),sn=e,Ke=!0,Da=null,Jn=!1,t!==null&&Rv(e,t),e=md(e,i.children),e.flags|=4096);return e}return a?(ya(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=ji(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ji(c,o):(o=ls(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,io(null,i),i=e.child,o=t.child.memoizedState,o===null?o=Fu(n):(a=o.cachePool,a!==null?(l=jt._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Cv(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Hu(t,r,n),e.memoizedState=Bu,io(t.child,i)):(Sa(e),n=t.child,t=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function md(t,e){return e=Tc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Tc(t,e){return t=On(22,t,null,e),t.lanes=0,t}function Gu(t,e,n){return ps(e,t.child,null,n),t=md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function Vu(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function Mx(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Ft.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,St(Ft,r),nn(t,e,i,n),i=Ke?Ao:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Vu(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&yc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Vu(e,!0,n,null,s,i);break;case"together":Vu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,!(n&e.childLanes))if(t!==null){if(Lr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&xc(t)))}function hM(t,e,n){switch(e.tag){case 3:fc(e,e.stateNode.containerInfo),_a(e,jt,t.memoizedState.cache),ds();break;case 27:case 5:kf(e);break;case 4:fc(e,e.stateNode.containerInfo);break;case 10:_a(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ld(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Sa(e),e.flags|=128,null):n&e.child.childLanes?yx(t,e,n):(Sa(e),t=ta(t,e,n),t!==null?t.sibling:null);Sa(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Lr(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return Mx(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),St(Ft,Ft.current),i)break;return null;case 22:return e.lanes=0,Sx(t,e,n,e.pendingProps);case 24:_a(e,jt,t.memoizedState.cache)}return ta(t,e,n)}function bx(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qt=!0;else{if(!fp(t,n)&&!(e.flags&128))return qt=!1,hM(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Ke&&e.flags&1048576&&Av(e,Ao,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=es(e.elementType),e.type=t,typeof t=="function")kh(t)?(i=gs(t,i),e.tag=1,e=Wm(null,e,t,i,n)):(e.tag=0,e=pd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Ch){e.tag=11,e=Hm(null,e,t,i,n);break e}else if(a===Nh){e.tag=14,e=Gm(null,e,t,i,n);break e}}throw e=Gf(t)||t,Error(te(306,e,""))}}return e;case 0:return pd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=gs(i,e.pendingProps),Wm(t,e,i,a,n);case 3:e:{if(fc(e,e.stateNode.containerInfo),t===null)throw Error(te(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,sd(t,e),mo(e,i,null,n);var r=e.memoizedState;if(i=r.cache,_a(e,jt,i),i!==s.cache&&id(e,[jt],n,!0),po(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=jm(t,e,i,n);break e}else if(i!==a){a=Qn(Error(te(424)),e),Ro(a),e=jm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(bt=ti(t.firstChild),sn=e,Ke=!0,Da=null,Jn=!0,n=Uv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ds(),i===a){e=ta(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 26:return Jl(t,e),t===null?(n=h0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Ke||(n=e.type,t=e.pendingProps,i=Lc(Na.current).createElement(n),i[an]=e,i[Rn]=t,ln(i,n,t),en(i),e.stateNode=i):e.memoizedState=h0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return kf(e),t===null&&Ke&&(i=e.stateNode=h_(e.type,e.pendingProps,Na.current),sn=e,Jn=!0,a=bt,Wa(e.type)?(Cd=a,bt=ti(i.firstChild)):bt=a),nn(t,e,e.pendingProps.children,n),Jl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Ke&&((a=i=bt)&&(i=kM(i,e.type,e.pendingProps,Jn),i!==null?(e.stateNode=i,sn=e,bt=ti(i.firstChild),Jn=!1,a=!0):a=!1),a||Ha(e)),kf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Td(a,s)?i=null:r!==null&&Td(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Jh(t,e,aM,null,null,n),Lo._currentValue=a),Jl(t,e),nn(t,e,i,n),e.child;case 6:return t===null&&Ke&&((t=n=bt)&&(n=XM(n,e.pendingProps,Jn),n!==null?(e.stateNode=n,sn=e,bt=null,t=!0):t=!1),t||Ha(e)),null;case 13:return yx(t,e,n);case 4:return fc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):nn(t,e,i,n),e.child;case 11:return Hm(t,e,e.type,e.pendingProps,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,_a(e,e.type,i.value),nn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,hs(e),a=rn(a),i=i(a),e.flags|=1,nn(t,e,i,n),e.child;case 14:return Gm(t,e,e.type,e.pendingProps,n);case 15:return _x(t,e,e.type,e.pendingProps,n);case 19:return Mx(t,e,n);case 31:return dM(t,e,n);case 22:return Sx(t,e,n,e.pendingProps);case 24:return hs(e),i=rn(jt),t===null?(a=qh(),a===null&&(a=xt,s=jh(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},Zh(e),_a(e,jt,a)):(t.lanes&n&&(sd(t,e),mo(e,null,null,n),po()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),_a(e,jt,i)):(i=s.cache,_a(e,jt,i),i!==a.cache&&id(e,[jt],n,!0))),nn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function Ni(t){t.flags|=4}function ku(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(qx())t.flags|=8192;else throw us=_c,Yh}else t.flags&=-16777217}function Ym(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!g_(e))if(qx())t.flags|=8192;else throw us=_c,Yh}function dl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Yg():536870912,t.lanes|=e,yr|=e)}function Xr(t,e){if(!Ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pM(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Mt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),qi(jt),mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ws(e)?Ni(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ou())),Mt(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ni(e),s!==null?(Mt(e),Ym(e,s)):(Mt(e),ku(e,a,null,i,n))):s?s!==t.memoizedState?(Ni(e),Mt(e),Ym(e,s)):(Mt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ni(e),Mt(e),ku(e,a,t,i,n)),null;case 27:if(dc(e),n=Na.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Mt(e),null}t=Mi.current,ws(e)?bm(e):(t=h_(a,i,n),e.stateNode=t,Ni(e))}return Mt(e),null;case 5:if(dc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Mt(e),null}if(s=Mi.current,ws(e))bm(e);else{var r=Lc(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[an]=e,s[Rn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(ln(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ni(e)}}return Mt(e),ku(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Na.current,ws(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=sn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[an]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||c_(t.nodeValue,n)),t||Ha(e,!0)}else t=Lc(t).createTextNode(i),t[an]=e,e.stateNode=t}return Mt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=ws(e),n!==null){if(t===null){if(!i)throw Error(te(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(557));t[an]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),t=!1}else n=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ln(e),e):(Ln(e),null);if(e.flags&128)throw Error(te(558))}return Mt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ws(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[an]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mt(e),a=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Ln(e),e):(Ln(e),null)}return Ln(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),dl(e,e.updateQueue),Mt(e),null);case 4:return mr(),t===null&&xp(e.stateNode.containerInfo),Mt(e),null;case 10:return qi(e.type),Mt(e),null;case 19:if(tn(Ft),i=e.memoizedState,i===null)return Mt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Xr(i,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=yc(t),s!==null){for(e.flags|=128,Xr(i,!1),t=s.updateQueue,e.updateQueue=t,dl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Ev(n,t),n=n.sibling;return St(Ft,Ft.current&1|2),Ke&&Fi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&In()>Rc&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304)}else{if(!a)if(t=yc(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,dl(e,t),Xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ke)return Mt(e),null}else 2*In()-i.renderingStartTime>Rc&&n!==536870912&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=In(),t.sibling=null,n=Ft.current,St(Ft,a?n&1|2:n&1),Ke&&Fi(e,i.treeForkCount),t):(Mt(e),null);case 22:case 23:return Ln(e),Kh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),n=e.updateQueue,n!==null&&dl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&tn(cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),qi(jt),Mt(e),null;case 25:return null;case 30:return null}throw Error(te(156,e.tag))}function mM(t,e){switch(Wh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(jt),mr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dc(e),null;case 31:if(e.memoizedState!==null){if(Ln(e),e.alternate===null)throw Error(te(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ln(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tn(Ft),null;case 4:return mr(),null;case 10:return qi(e.type),null;case 22:case 23:return Ln(e),Kh(),t!==null&&tn(cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qi(jt),null;case 25:return null;default:return null}}function Ex(t,e){switch(Wh(e),e.tag){case 3:qi(jt),mr();break;case 26:case 27:case 5:dc(e);break;case 4:mr();break;case 31:e.memoizedState!==null&&Ln(e);break;case 13:Ln(e);break;case 19:tn(Ft);break;case 10:qi(e.type);break;case 22:case 23:Ln(e),Kh(),t!==null&&tn(cs);break;case 24:qi(jt)}}function jo(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){ft(e,e.return,o)}}function Ga(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){ft(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){ft(e,e.return,d)}}function Tx(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Ov(e,n)}catch(i){ft(t,t.return,i)}}}function Ax(t,e,n){n.props=gs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ft(t,e,i)}}function vo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ft(t,e,a)}}function _i(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ft(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ft(t,e,a)}else n.current=null}function Rx(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ft(t,t.return,a)}}function Xu(t,e,n){try{var i=t.stateNode;zM(i,t.type,n,e),i[Rn]=e}catch(a){ft(t,t.return,a)}}function wx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Wu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ki));else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Cx(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ln(e,i,n),e[an]=t,e[Rn]=n}catch(s){ft(t,t.return,s)}}var Hi=!1,Wt=!1,ju=!1,Zm=typeof WeakSet=="function"?WeakSet:Set,$t=null;function gM(t,e){if(t=t.containerInfo,bd=zc,t=gv(t),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,d=0,p=t,u=null;t:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(o=r+a),p!==s||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===t)break t;if(u===n&&++c===a&&(o=r),u===s&&++d===i&&(l=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ed={focusedElem:t,selectionRange:n},zc=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=gs(n.type,a);t=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(E){ft(n,n.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Ad(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ad(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(te(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function Nx(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),i&4&&jo(5,n);break;case 1:if(Ui(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){ft(n,n.return,r)}else{var a=gs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){ft(n,n.return,r)}}i&64&&Tx(n),i&512&&vo(n,n.return);break;case 3:if(Ui(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Ov(t,e)}catch(r){ft(n,n.return,r)}}break;case 27:e===null&&i&4&&Cx(n);case 26:case 5:Ui(t,n),e===null&&i&4&&Rx(n),i&512&&vo(n,n.return);break;case 12:Ui(t,n);break;case 31:Ui(t,n),i&4&&Lx(t,n);break;case 13:Ui(t,n),i&4&&Ox(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=TM.bind(null,n),WM(t,n))));break;case 22:if(i=n.memoizedState!==null||Hi,!i){e=e!==null&&e.memoizedState!==null||Wt,a=Hi;var s=Wt;Hi=i,(Wt=e)&&!s?Bi(t,n,(n.subtreeFlags&8772)!==0):Ui(t,n),Hi=a,Wt=s}break;case 30:break;default:Ui(t,n)}}function Dx(t){var e=t.alternate;e!==null&&(t.alternate=null,Dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,Mn=!1;function Di(t,e,n){for(n=n.child;n!==null;)Ux(t,e,n),n=n.sibling}function Ux(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 26:Wt||_i(n,e),Di(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Wt||_i(n,e);var i=wt,a=Mn;Wa(n.type)&&(wt=n.stateNode,Mn=!1),Di(t,e,n),yo(n.stateNode),wt=i,Mn=a;break;case 5:Wt||_i(n,e);case 6:if(i=wt,a=Mn,wt=null,Di(t,e,n),wt=i,Mn=a,wt!==null)if(Mn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(n.stateNode)}catch(s){ft(n,e,s)}else try{wt.removeChild(n.stateNode)}catch(s){ft(n,e,s)}break;case 18:wt!==null&&(Mn?(t=wt,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Tr(t)):l0(wt,n.stateNode));break;case 4:i=wt,a=Mn,wt=n.stateNode.containerInfo,Mn=!0,Di(t,e,n),wt=i,Mn=a;break;case 0:case 11:case 14:case 15:Ga(2,n,e),Wt||Ga(4,n,e),Di(t,e,n);break;case 1:Wt||(_i(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ax(n,e,i)),Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:Wt=(i=Wt)||n.memoizedState!==null,Di(t,e,n),Wt=i;break;default:Di(t,e,n)}}function Lx(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(n){ft(e,e.return,n)}}}function Ox(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(n){ft(e,e.return,n)}}function vM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Zm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Zm),e;default:throw Error(te(435,t.tag))}}function hl(t,e){var n=vM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=AM.bind(null,t,i);i.then(a,a)}})}function _n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Wa(o.type)){wt=o.stateNode,Mn=!1;break e}break;case 5:wt=o.stateNode,Mn=!1;break e;case 3:case 4:wt=o.stateNode.containerInfo,Mn=!0;break e}o=o.return}if(wt===null)throw Error(te(160));Ux(s,r,a),wt=null,Mn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Px(e,t),e=e.sibling}var oi=null;function Px(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:_n(e,t),Sn(t),i&4&&(Ga(3,t,t.return),jo(3,t),Ga(5,t,t.return));break;case 1:_n(e,t),Sn(t),i&512&&(Wt||n===null||_i(n,n.return)),i&64&&Hi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=oi;if(_n(e,t),Sn(t),i&512&&(Wt||n===null||_i(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Vo]||s[an]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),ln(s,i,n),s[an]=t,en(s),i=s;break e;case"link":var r=m0("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;case"meta":if(r=m0("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;default:throw Error(te(468,i))}s[an]=t,en(s),i=s}t.stateNode=i}else g0(a,t.type,t.stateNode);else t.stateNode=p0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?g0(a,t.type,t.stateNode):p0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Xu(t,t.memoizedProps,n.memoizedProps)}break;case 27:_n(e,t),Sn(t),i&512&&(Wt||n===null||_i(n,n.return)),n!==null&&i&4&&Xu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(_n(e,t),Sn(t),i&512&&(Wt||n===null||_i(n,n.return)),t.flags&32){a=t.stateNode;try{vr(a,"")}catch(_){ft(t,t.return,_)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Xu(t,a,n!==null?n.memoizedProps:a)),i&1024&&(ju=!0);break;case 6:if(_n(e,t),Sn(t),i&4){if(t.stateNode===null)throw Error(te(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(_){ft(t,t.return,_)}}break;case 3:if(tc=null,a=oi,oi=Oc(e.containerInfo),_n(e,t),oi=a,Sn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(e.containerInfo)}catch(_){ft(t,t.return,_)}ju&&(ju=!1,Ix(t));break;case 4:i=oi,oi=Oc(t.stateNode.containerInfo),_n(e,t),Sn(t),oi=i;break;case 12:_n(e,t),Sn(t);break;case 31:_n(e,t),Sn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,hl(t,i)));break;case 13:_n(e,t),Sn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=In()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,hl(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Hi,d=Wt;if(Hi=c||a,Wt=d||l,_n(e,t),Wt=d,Hi=c,Sn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Hi||Wt||ts(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ft(l,l.return,_)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){ft(l,l.return,_)}}}else if(e.tag===18){if(n===null){l=e;try{var h=l.stateNode;a?c0(h,!0):c0(l.stateNode,!1)}catch(_){ft(l,l.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,hl(t,n))));break;case 19:_n(e,t),Sn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,hl(t,i)));break;case 30:break;case 21:break;default:_n(e,t),Sn(t)}}function Sn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(wx(i)){n=i;break}i=i.return}if(n==null)throw Error(te(160));switch(n.tag){case 27:var a=n.stateNode,s=Wu(t);Ac(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(vr(r,""),n.flags&=-33);var o=Wu(t);Ac(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Wu(t);gd(t,c,l);break;default:throw Error(te(161))}}catch(d){ft(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ix(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ui(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Nx(t,e.alternate,e),e=e.sibling}function ts(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ga(4,e,e.return),ts(e);break;case 1:_i(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Ax(e,e.return,n),ts(e);break;case 27:yo(e.stateNode);case 26:case 5:_i(e,e.return),ts(e);break;case 22:e.memoizedState===null&&ts(e);break;case 30:ts(e);break;default:ts(e)}t=t.sibling}}function Bi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:Bi(a,s,n),jo(4,s);break;case 1:if(Bi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ft(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Lv(l[a],o)}catch(c){ft(i,i.return,c)}}n&&r&64&&Tx(s),vo(s,s.return);break;case 27:Cx(s);case 26:case 5:Bi(a,s,n),n&&i===null&&r&4&&Rx(s),vo(s,s.return);break;case 12:Bi(a,s,n);break;case 31:Bi(a,s,n),n&&r&4&&Lx(a,s);break;case 13:Bi(a,s,n),n&&r&4&&Ox(a,s);break;case 22:s.memoizedState===null&&Bi(a,s,n),vo(s,s.return);break;case 30:break;default:Bi(a,s,n)}e=e.sibling}}function dp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Xo(n))}function hp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xo(t))}function ii(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zx(t,e,n,i),e=e.sibling}function zx(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ii(t,e,n,i),a&2048&&jo(9,e);break;case 1:ii(t,e,n,i);break;case 3:ii(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Xo(t)));break;case 12:if(a&2048){ii(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){ft(e,e.return,l)}}else ii(t,e,n,i);break;case 31:ii(t,e,n,i);break;case 13:ii(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?ii(t,e,n,i):xo(t,e):s._visibility&2?ii(t,e,n,i):(s._visibility|=2,Ws(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&dp(r,e);break;case 24:ii(t,e,n,i),a&2048&&hp(e.alternate,e);break;default:ii(t,e,n,i)}}function Ws(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ws(s,r,o,l,a),jo(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ws(s,r,o,l,a):xo(s,r):(d._visibility|=2,Ws(s,r,o,l,a)),a&&c&2048&&dp(r.alternate,r);break;case 24:Ws(s,r,o,l,a),a&&c&2048&&hp(r.alternate,r);break;default:Ws(s,r,o,l,a)}e=e.sibling}}function xo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:xo(n,i),a&2048&&dp(i.alternate,i);break;case 24:xo(n,i),a&2048&&hp(i.alternate,i);break;default:xo(n,i)}e=e.sibling}}var ao=8192;function Cs(t,e,n){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)Bx(t,e,n),t=t.sibling}function Bx(t,e,n){switch(t.tag){case 26:Cs(t,e,n),t.flags&ao&&t.memoizedState!==null&&ib(n,oi,t.memoizedState,t.memoizedProps);break;case 5:Cs(t,e,n);break;case 3:case 4:var i=oi;oi=Oc(t.stateNode.containerInfo),Cs(t,e,n),oi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ao,ao=16777216,Cs(t,e,n),ao=i):Cs(t,e,n));break;default:Cs(t,e,n)}}function Fx(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Wr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];$t=i,Gx(i,t)}Fx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hx(t),t=t.sibling}function Hx(t){switch(t.tag){case 0:case 11:case 15:Wr(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Wr(t);break;case 12:Wr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$l(t)):Wr(t);break;default:Wr(t)}}function $l(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];$t=i,Gx(i,t)}Fx(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ga(8,e,e.return),$l(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,$l(e));break;default:$l(e)}t=t.sibling}}function Gx(t,e){for(;$t!==null;){var n=$t;switch(n.tag){case 0:case 11:case 15:Ga(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Xo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$t=i;else e:for(n=t;$t!==null;){i=$t;var a=i.sibling,s=i.return;if(Dx(i),i===n){$t=null;break e}if(a!==null){a.return=s,$t=a;break e}$t=s}}}var xM={getCacheForType:function(t){var e=rn(jt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return rn(jt).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,at=0,xt=null,We=null,qe=0,ut=0,Un=null,Aa=!1,Pr=!1,pp=!1,na=0,Ot=0,Va=0,fs=0,mp=0,Pn=0,yr=0,_o=null,bn=null,vd=!1,ru=0,Vx=0,Rc=1/0,wc=null,Oa=null,Yt=0,Pa=null,Mr=null,Yi=0,xd=0,_d=null,kx=null,So=0,Sd=null;function Fn(){return at&2&&qe!==0?qe&-qe:Ue.T!==null?vp():Jg()}function Xx(){if(Pn===0)if(!(qe&536870912)||Ke){var t=sl;sl<<=1,!(sl&3932160)&&(sl=262144),Pn=t}else Pn=536870912;return t=Gn.current,t!==null&&(t.flags|=32),Pn}function En(t,e,n){(t===xt&&(ut===2||ut===9)||t.cancelPendingCommit!==null)&&(br(t,0),Ra(t,qe,Pn,!1)),Go(t,n),(!(at&2)||t!==xt)&&(t===xt&&(!(at&2)&&(fs|=n),Ot===4&&Ra(t,qe,Pn,!1)),wi(t))}function Wx(t,e,n){if(at&6)throw Error(te(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ho(t,e),a=i?MM(t,e):qu(t,e,!0),s=i;do{if(a===0){Pr&&!i&&Ra(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!SM(n)){a=qu(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=_o;var l=o.current.memoizedState.isDehydrated;if(l&&(br(o,r).flags|=256),r=qu(o,r,!1),r!==2){if(pp&&!l){o.errorRecoveryDisabledLanes|=s,fs|=s,a=4;break e}s=bn,bn=a,s!==null&&(bn===null?bn=s:bn.push.apply(bn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){br(t,0),Ra(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e)break;case 6:Ra(i,e,Pn,!Aa);break e;case 2:bn=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(a=ru+300-In(),10<a)){if(Ra(i,e,Pn,!Aa),Zc(i,0,!0)!==0)break e;Yi=e,i.timeoutHandle=f_(Km.bind(null,i,n,bn,wc,vd,e,Pn,fs,yr,Aa,s,"Throttled",-0,0),a);break e}Km(i,n,bn,wc,vd,e,Pn,fs,yr,Aa,s,null,-0,0)}}break}while(!0);wi(t)}function Km(t,e,n,i,a,s,r,o,l,c,d,p,u,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Bx(e,s,p);var _=(s&62914560)===s?ru-In():(s&4194048)===s?Vx-In():0;if(_=ab(p,_),_!==null){Yi=s,t.cancelPendingCommit=_(Jm.bind(null,t,e,s,n,i,a,r,o,l,d,p,null,u,h)),Ra(t,s,r,!c);return}}Jm(t,e,s,n,i,a,r,o,l)}function SM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Hn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ra(t,e,n,i){e&=~mp,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Bn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Zg(t,n,e)}function ou(){return at&6?!0:(qo(0),!1)}function gp(){if(We!==null){if(ut===0)var t=We.return;else t=We,Xi=Es=null,tp(t),cr=null,wo=0,t=We;for(;t!==null;)Ex(t.alternate,t),t=t.return;We=null}}function br(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,HM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Yi=0,gp(),xt=t,We=n=ji(t.current,null),qe=e,ut=0,Un=null,Aa=!1,Pr=Ho(t,e),pp=!1,yr=Pn=mp=fs=Va=Ot=0,bn=_o=null,vd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Bn(i),s=1<<a;e|=t[a],i&=~s}return na=e,$c(),n}function jx(t,e){Be=null,Ue.H=No,e===Or||e===tu?(e=wm(),ut=3):e===Yh?(e=wm(),ut=4):ut=e===up?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Un=e,We===null&&(Ot=1,Ec(t,Qn(e,t.current)))}function qx(){var t=Gn.current;return t===null?!0:(qe&4194048)===qe?ei===null:(qe&62914560)===qe||qe&536870912?t===ei:!1}function Yx(){var t=Ue.H;return Ue.H=No,t===null?No:t}function Zx(){var t=Ue.A;return Ue.A=xM,t}function Cc(){Ot=4,Aa||(qe&4194048)!==qe&&Gn.current!==null||(Pr=!0),!(Va&134217727)&&!(fs&134217727)||xt===null||Ra(xt,qe,Pn,!1)}function qu(t,e,n){var i=at;at|=2;var a=Yx(),s=Zx();(xt!==t||qe!==e)&&(wc=null,br(t,e)),e=!1;var r=Ot;e:do try{if(ut!==0&&We!==null){var o=We,l=Un;switch(ut){case 8:gp(),r=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(e=!0);var c=ut;if(ut=0,Un=null,ar(t,o,l,c),n&&Pr){r=0;break e}break;default:c=ut,ut=0,Un=null,ar(t,o,l,c)}}yM(),r=Ot;break}catch(d){jx(t,d)}while(!0);return e&&t.shellSuspendCounter++,Xi=Es=null,at=i,Ue.H=a,Ue.A=s,We===null&&(xt=null,qe=0,$c()),r}function yM(){for(;We!==null;)Kx(We)}function MM(t,e){var n=at;at|=2;var i=Yx(),a=Zx();xt!==t||qe!==e?(wc=null,Rc=In()+500,br(t,e)):Pr=Ho(t,e);e:do try{if(ut!==0&&We!==null){e=We;var s=Un;t:switch(ut){case 1:ut=0,Un=null,ar(t,e,s,1);break;case 2:case 9:if(Rm(s)){ut=0,Un=null,Qm(e);break}e=function(){ut!==2&&ut!==9||xt!==t||(ut=7),wi(t)},s.then(e,e);break e;case 3:ut=7;break e;case 4:ut=5;break e;case 7:Rm(s)?(ut=0,Un=null,Qm(e)):(ut=0,Un=null,ar(t,e,s,7));break;case 5:var r=null;switch(We.tag){case 26:r=We.memoizedState;case 5:case 27:var o=We;if(r?g_(r):o.stateNode.complete){ut=0,Un=null;var l=o.sibling;if(l!==null)We=l;else{var c=o.return;c!==null?(We=c,lu(c)):We=null}break t}}ut=0,Un=null,ar(t,e,s,5);break;case 6:ut=0,Un=null,ar(t,e,s,6);break;case 8:gp(),Ot=6;break e;default:throw Error(te(462))}}bM();break}catch(d){jx(t,d)}while(!0);return Xi=Es=null,Ue.H=i,Ue.A=a,at=n,We!==null?0:(xt=null,qe=0,$c(),Ot)}function bM(){for(;We!==null&&!jS();)Kx(We)}function Kx(t){var e=bx(t.alternate,t,na);t.memoizedProps=t.pendingProps,e===null?lu(t):We=e}function Qm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Xm(n,e,e.pendingProps,e.type,void 0,qe);break;case 11:e=Xm(n,e,e.pendingProps,e.type.render,e.ref,qe);break;case 5:tp(e);default:Ex(n,e),e=We=Ev(e,na),e=bx(n,e,na)}t.memoizedProps=t.pendingProps,e===null?lu(t):We=e}function ar(t,e,n,i){Xi=Es=null,tp(e),cr=null,wo=0;var a=e.return;try{if(fM(t,a,e,n,qe)){Ot=1,Ec(t,Qn(n,t.current)),We=null;return}}catch(s){if(a!==null)throw We=a,s;Ot=1,Ec(t,Qn(n,t.current)),We=null;return}e.flags&32768?(Ke||i===1?t=!0:Pr||qe&536870912?t=!1:(Aa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Gn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qx(e,t)):lu(e)}function lu(t){var e=t;do{if(e.flags&32768){Qx(e,Aa);return}t=e.return;var n=pM(e.alternate,e,na);if(n!==null){We=n;return}if(e=e.sibling,e!==null){We=e;return}We=e=t}while(e!==null);Ot===0&&(Ot=5)}function Qx(t,e){do{var n=mM(t.alternate,t);if(n!==null){n.flags&=32767,We=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){We=t;return}We=t=n}while(t!==null);Ot=6,We=null}function Jm(t,e,n,i,a,s,r,o,l){t.cancelPendingCommit=null;do cu();while(Yt!==0);if(at&6)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));if(s=e.lanes|e.childLanes,s|=Gh,ny(t,n,s,r,o,l),t===xt&&(We=xt=null,qe=0),Mr=e,Pa=t,Yi=n,xd=s,_d=a,kx=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,RM(hc,function(){return n_(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ue.T,Ue.T=null,a=st.p,st.p=2,r=at,at|=4;try{gM(t,e,n)}finally{at=r,st.p=a,Ue.T=i}}Yt=1,Jx(),$x(),e_()}}function Jx(){if(Yt===1){Yt=0;var t=Pa,e=Mr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ue.T,Ue.T=null;var i=st.p;st.p=2;var a=at;at|=4;try{Px(e,t);var s=Ed,r=gv(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&mv(o.ownerDocument.documentElement,o)){if(l!==null&&Hh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),_=o.textContent.length,E=Math.min(l.start,_),m=l.end===void 0?E:Math.min(l.end,_);!h.extend&&E>m&&(r=m,m=E,E=r);var f=Sm(o,E),v=Sm(o,m);if(f&&v&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var M=p.createRange();M.setStart(f.node,f.offset),h.removeAllRanges(),E>m?(h.addRange(M),h.extend(v.node,v.offset)):(M.setEnd(v.node,v.offset),h.addRange(M))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var S=p[o];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}zc=!!bd,Ed=bd=null}finally{at=a,st.p=i,Ue.T=n}}t.current=e,Yt=2}}function $x(){if(Yt===2){Yt=0;var t=Pa,e=Mr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ue.T,Ue.T=null;var i=st.p;st.p=2;var a=at;at|=4;try{Nx(t,e.alternate,e)}finally{at=a,st.p=i,Ue.T=n}}Yt=3}}function e_(){if(Yt===4||Yt===3){Yt=0,qS();var t=Pa,e=Mr,n=Yi,i=kx;e.subtreeFlags&10256||e.flags&10256?Yt=5:(Yt=0,Mr=Pa=null,t_(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Oa=null),Lh(n),e=e.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ue.T,a=st.p,st.p=2,Ue.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ue.T=e,st.p=a}}Yi&3&&cu(),wi(t),a=t.pendingLanes,n&261930&&a&42?t===Sd?So++:(So=0,Sd=t):So=0,qo(0)}}function t_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Xo(e)))}function cu(){return Jx(),$x(),e_(),n_()}function n_(){if(Yt!==5)return!1;var t=Pa,e=xd;xd=0;var n=Lh(Yi),i=Ue.T,a=st.p;try{st.p=32>n?32:n,Ue.T=null,n=_d,_d=null;var s=Pa,r=Yi;if(Yt=0,Mr=Pa=null,Yi=0,at&6)throw Error(te(331));var o=at;if(at|=4,Hx(s.current),zx(s,s.current,r,n),at=o,qo(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Fo,s)}catch{}return!0}finally{st.p=a,Ue.T=i,t_(t,e)}}function $m(t,e,n){e=Qn(n,e),e=hd(t.stateNode,e,2),t=La(t,e,2),t!==null&&(Go(t,2),wi(t))}function ft(t,e,n){if(t.tag===3)$m(t,t,n);else for(;e!==null;){if(e.tag===3){$m(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){t=Qn(n,t),n=vx(2),i=La(e,n,2),i!==null&&(xx(n,i,e,t),Go(i,2),wi(i));break}}e=e.return}}function Yu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _M;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(pp=!0,a.add(n),t=EM.bind(null,t,e,n),e.then(t,t))}function EM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,xt===t&&(qe&n)===n&&(Ot===4||Ot===3&&(qe&62914560)===qe&&300>In()-ru?!(at&2)&&br(t,0):mp|=n,yr===qe&&(yr=0)),wi(t)}function i_(t,e){e===0&&(e=Yg()),t=bs(t,e),t!==null&&(Go(t,e),wi(t))}function TM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i_(t,n)}function AM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(te(314))}i!==null&&i.delete(e),i_(t,n)}function RM(t,e){return Dh(t,e)}var Nc=null,js=null,yd=!1,Dc=!1,Zu=!1,wa=0;function wi(t){t!==js&&t.next===null&&(js===null?Nc=js=t:js=js.next=t),Dc=!0,yd||(yd=!0,CM())}function qo(t,e){if(!Zu&&Dc){Zu=!0;do for(var n=!1,i=Nc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Bn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,e0(i,s))}else s=qe,s=Zc(i,i===xt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Ho(i,s)||(n=!0,e0(i,s));i=i.next}while(n);Zu=!1}}function wM(){a_()}function a_(){Dc=yd=!1;var t=0;wa!==0&&FM()&&(t=wa);for(var e=In(),n=null,i=Nc;i!==null;){var a=i.next,s=s_(i,e);s===0?(i.next=null,n===null?Nc=a:n.next=a,a===null&&(js=n)):(n=i,(t!==0||s&3)&&(Dc=!0)),i=a}Yt!==0&&Yt!==5||qo(t),wa!==0&&(wa=0)}function s_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Bn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=ty(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=xt,n=qe,n=Zc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ut===2||ut===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&bu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Ho(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&bu(i),Lh(n)){case 2:case 8:n=jg;break;case 32:n=hc;break;case 268435456:n=qg;break;default:n=hc}return i=r_.bind(null,t),n=Dh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&bu(i),t.callbackPriority=2,t.callbackNode=null,2}function r_(t,e){if(Yt!==0&&Yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cu()&&t.callbackNode!==n)return null;var i=qe;return i=Zc(t,t===xt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Wx(t,i,e),s_(t,In()),t.callbackNode!=null&&t.callbackNode===n?r_.bind(null,t):null)}function e0(t,e){if(cu())return null;Wx(t,e,!0)}function CM(){GM(function(){at&6?Dh(Wg,wM):a_()})}function vp(){if(wa===0){var t=xr;t===0&&(t=al,al<<=1,!(al&261888)&&(al=256)),wa=t}return wa}function t0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xl(""+t)}function n0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function NM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=t0((a[Rn]||null).action),r=i.submitter;r&&(e=(e=r[Rn]||null)?t0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new Kc("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(wa!==0){var l=r?n0(a,r):new FormData(a);fd(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?n0(a,r):new FormData(a),fd(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var Ku=0;Ku<$f.length;Ku++){var Qu=$f[Ku],DM=Qu.toLowerCase(),UM=Qu[0].toUpperCase()+Qu.slice(1);fi(DM,"on"+UM)}fi(xv,"onAnimationEnd");fi(_v,"onAnimationIteration");fi(Sv,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(Yy,"onTransitionRun");fi(Zy,"onTransitionStart");fi(Ky,"onTransitionCancel");fi(yv,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function o_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=l}}}}function Xe(t,e){var n=e[Wf];n===void 0&&(n=e[Wf]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Ju(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function xp(t){if(!t[pl]){t[pl]=!0,$g.forEach(function(n){n!=="selectionchange"&&(LM.has(n)||Ju(n,!1,t),Ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Ju("selectionchange",!1,e))}}function l_(t,e,n,i){switch(y_(e)){case 2:var a=ob;break;case 8:a=lb;break;default:a=Mp}n=a.bind(null,e,n,t),a=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function $u(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=Zs(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}ov(function(){var c=s,d=Ih(n),p=[];e:{var u=Mv.get(t);if(u!==void 0){var h=Kc,_=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":h=Ay;break;case"focusin":_="focus",h=wu;break;case"focusout":_="blur",h=wu;break;case"beforeblur":case"afterblur":h=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Cy;break;case xv:case _v:case Sv:h=vy;break;case yv:h=Dy;break;case"scroll":case"scrollend":h=dy;break;case"wheel":h=Ly;break;case"copy":case"cut":case"paste":h=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=dm;break;case"toggle":case"beforetoggle":h=Py}var E=(e&4)!==0,m=!E&&(t==="scroll"||t==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var v=c,M;v!==null;){var S=v;if(M=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||M===null||f===null||(S=bo(v,f),S!=null&&E.push(Uo(v,S,M))),m)break;v=v.return}0<E.length&&(u=new h(u,_,null,n,d),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==Zf&&(_=n.relatedTarget||n.fromElement)&&(Zs(_)||_[Dr]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=c,_=_?Zs(_):null,_!==null&&(m=Bo(_),E=_.tag,_!==m||E!==5&&E!==27&&E!==6)&&(_=null)):(h=null,_=c),h!==_)){if(E=um,S="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=dm,S="onPointerLeave",f="onPointerEnter",v="pointer"),m=h==null?u:no(h),M=_==null?u:no(_),u=new E(S,v+"leave",h,n,d),u.target=m,u.relatedTarget=M,S=null,Zs(d)===c&&(E=new E(f,v+"enter",_,n,d),E.target=M,E.relatedTarget=m,S=E),m=S,h&&_)t:{for(E=OM,f=h,v=_,M=0,S=f;S;S=E(S))M++;S=0;for(var A=v;A;A=E(A))S++;for(;0<M-S;)f=E(f),M--;for(;0<S-M;)v=E(v),S--;for(;M--;){if(f===v||v!==null&&f===v.alternate){E=f;break t}f=E(f),v=E(v)}E=null}else E=null;h!==null&&i0(p,u,h,E,!1),_!==null&&m!==null&&i0(p,m,_,E,!0)}}e:{if(u=c?no(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var w=gm;else if(mm(u))if(hv)w=Wy;else{w=ky;var C=Vy}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Ph(c.elementType)&&(w=gm):w=Xy;if(w&&(w=w(t,c))){dv(p,w,n,d);break e}C&&C(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Yf(u,"number",u.value)}switch(C=c?no(c):window,t){case"focusin":(mm(C)||C.contentEditable==="true")&&(Js=C,Qf=c,uo=null);break;case"focusout":uo=Qf=Js=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,ym(p,n,d);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":ym(p,n,d)}var x;if(Fh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qs?uv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(cv&&n.locale!=="ko"&&(Qs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qs&&(x=lv()):(Ta=d,zh="value"in Ta?Ta.value:Ta.textContent,Qs=!0)),C=Uc(c,R),0<C.length&&(R=new fm(R,t,null,n,d),p.push({event:R,listeners:C}),x?R.data=x:(x=fv(n),x!==null&&(R.data=x)))),(x=zy?By(t,n):Fy(t,n))&&(R=Uc(c,"onBeforeInput"),0<R.length&&(C=new fm("onBeforeInput","beforeinput",null,n,d),p.push({event:C,listeners:R}),C.data=x)),NM(p,t,c,n,d)}o_(p,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=bo(t,n),a!=null&&i.unshift(Uo(t,a,s)),a=bo(t,e),a!=null&&i.push(Uo(t,a,s))),t.tag===3)return i;t=t.return}return[]}function OM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=bo(n,s),c!=null&&r.unshift(Uo(n,c,l))):a||(c=bo(n,s),c!=null&&r.push(Uo(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var PM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(IM,"")}function c_(t,e){return e=a0(e),a0(t)===e}function ht(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||vr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&vr(t,""+i);break;case"className":ol(t,"class",i);break;case"tabIndex":ol(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ol(t,n,i);break;case"style":rv(t,i,s);break;case"data":if(e!=="object"){ol(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xl(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&ht(t,e,"name",a.name,a,null),ht(t,e,"formEncType",a.formEncType,a,null),ht(t,e,"formMethod",a.formMethod,a,null),ht(t,e,"formTarget",a.formTarget,a,null)):(ht(t,e,"encType",a.encType,a,null),ht(t,e,"method",a.method,a,null),ht(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xl(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ki);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Xl(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Xe("beforetoggle",t),Xe("toggle",t),kl(t,"popover",i);break;case"xlinkActuate":Ci(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ci(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ci(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ci(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ci(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ci(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ci(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ci(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ci(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":kl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=uy.get(n)||n,kl(t,n,i))}}function Md(t,e,n,i,a,s){switch(n){case"style":rv(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"children":typeof i=="string"?vr(t,i):(typeof i=="number"||typeof i=="bigint")&&vr(t,""+i);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ev.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[Rn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):kl(t,n,i)}}}function ln(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",t),Xe("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:ht(t,e,s,r,n,null)}}a&&ht(t,e,"srcSet",n.srcSet,n,null),i&&ht(t,e,"src",n.src,n,null);return;case"input":Xe("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(te(137,e));break;default:ht(t,e,i,d,n,null)}}iv(t,s,o,l,c,r,a,!1);return;case"select":Xe("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:ht(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?rr(t,!!i,e,!1):n!=null&&rr(t,!!i,n,!0);return;case"textarea":Xe("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(te(91));break;default:ht(t,e,r,o,n,null)}sv(t,i,a,s);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ht(t,e,l,i,n,null)}return;case"dialog":Xe("beforetoggle",t),Xe("toggle",t),Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":Xe("load",t);break;case"video":case"audio":for(i=0;i<Do.length;i++)Xe(Do[i],t);break;case"image":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"embed":case"source":case"link":Xe("error",t),Xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:ht(t,e,c,i,n,null)}return;default:if(Ph(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Md(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ht(t,e,o,i,n,null))}function zM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(h)||ht(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(te(137,e));break;default:h!==p&&ht(t,e,u,h,i,p)}}qf(t,r,o,l,c,d,s,a);return;case"select":h=r=o=u=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(s)||ht(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":u=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&ht(t,e,a,s,i,l)}e=o,n=r,i=h,u!=null?rr(t,!!n,u,!1):!!i!=!!n&&(e!=null?rr(t,!!n,e,!0):rr(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ht(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(te(91));break;default:a!==s&&ht(t,e,r,a,i,s)}av(t,u,h);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:ht(t,e,_,null,i,u)}for(l in i)if(u=i[l],h=n[l],i.hasOwnProperty(l)&&u!==h&&(u!=null||h!=null))switch(l){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ht(t,e,l,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ht(t,e,E,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(te(137,e));break;default:ht(t,e,c,u,i,h)}return;default:if(Ph(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Md(t,e,m,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||Md(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ht(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||ht(t,e,p,u,i,h)}function s0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,o=a.duration;if(s&&o&&s0(r)){for(r=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,p=l.initiatorType;d&&s0(p)&&(l=l.responseEnd,r+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bd=null,Ed=null;function Lc(t){return t.nodeType===9?t:t.ownerDocument}function r0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ef=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===ef?!1:(ef=t,!0):(ef=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,HM=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,GM=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(VM)}:f_;function VM(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function l0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Tr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")yo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,yo(n);for(var s=n.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Vo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&yo(t.ownerDocument.body);n=a}while(n);Tr(e)}function c0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Ad(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ad(n),Oh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function kM(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Vo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=ti(t.nextSibling),t===null)break}return null}function XM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ti(t.nextSibling),t===null))return null;return t}function d_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=ti(t.nextSibling),t===null))return null;return t}function Rd(t){return t.data==="$?"||t.data==="$~"}function wd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function WM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Cd=null;function u0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return ti(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function f0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function h_(t,e,n){switch(e=Lc(n),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function yo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oh(t)}var ni=new Map,d0=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=st.d;st.d={f:jM,r:qM,D:YM,C:ZM,L:KM,m:QM,X:$M,S:JM,M:eb};function jM(){var t=ra.f(),e=ou();return t||e}function qM(t){var e=Ur(t);e!==null&&e.tag===5&&e.type==="form"?rx(e):ra.r(t)}var Ir=typeof document>"u"?null:document;function p_(t,e,n){var i=Ir;if(i&&typeof e=="string"&&e){var a=Kn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),d0.has(a)||(d0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),ln(e,"link",t),en(e),i.head.appendChild(e)))}}function YM(t){ra.D(t),p_("dns-prefetch",t,null)}function ZM(t,e){ra.C(t,e),p_("preconnect",t,e)}function KM(t,e,n){ra.L(t,e,n);var i=Ir;if(i&&t&&e){var a='link[rel="preload"][as="'+Kn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Kn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Kn(n.imageSizes)+'"]')):a+='[href="'+Kn(t)+'"]';var s=a;switch(e){case"style":s=Er(t);break;case"script":s=zr(t)}ni.has(s)||(t=Tt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ni.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Yo(s))||e==="script"&&i.querySelector(Zo(s))||(e=i.createElement("link"),ln(e,"link",t),en(e),i.head.appendChild(e)))}}function QM(t,e){ra.m(t,e);var n=Ir;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Kn(i)+'"][href="'+Kn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=zr(t)}if(!ni.has(s)&&(t=Tt({rel:"modulepreload",href:t},e),ni.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zo(s)))return}i=n.createElement("link"),ln(i,"link",t),en(i),n.head.appendChild(i)}}}function JM(t,e,n){ra.S(t,e,n);var i=Ir;if(i&&t){var a=sr(i).hoistableStyles,s=Er(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Yo(s)))o.loading=5;else{t=Tt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ni.get(s))&&_p(t,n);var l=r=i.createElement("link");en(l),ln(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ec(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function $M(t,e){ra.X(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Zo(a)),s||(t=Tt({src:t,async:!0},e),(e=ni.get(a))&&Sp(t,e),s=n.createElement("script"),en(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function eb(t,e){ra.M(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Zo(a)),s||(t=Tt({src:t,async:!0,type:"module"},e),(e=ni.get(a))&&Sp(t,e),s=n.createElement("script"),en(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function h0(t,e,n,i){var a=(a=Na.current)?Oc(a):null;if(!a)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Er(n.href),n=sr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Er(n.href);var s=sr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(Yo(t)))&&!s._p&&(r.instance=s,r.state.loading=5),ni.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ni.set(t,n),s||tb(a,t,n,r.state))),e&&i===null)throw Error(te(528,""));return r}if(e&&i!==null)throw Error(te(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=zr(n),n=sr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function Er(t){return'href="'+Kn(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function m_(t){return Tt({},t,{"data-precedence":t.precedence,precedence:null})}function tb(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ln(e,"link",n),en(e),t.head.appendChild(e))}function zr(t){return'[src="'+Kn(t)+'"]'}function Zo(t){return"script[async]"+t}function p0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Kn(n.href)+'"]');if(i)return e.instance=i,en(i),i;var a=Tt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),en(i),ln(i,"style",a),ec(i,n.precedence,t),e.instance=i;case"stylesheet":a=Er(n.href);var s=t.querySelector(Yo(a));if(s)return e.state.loading|=4,e.instance=s,en(s),s;i=m_(n),(a=ni.get(a))&&_p(i,a),s=(t.ownerDocument||t).createElement("link"),en(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(s,"link",i),e.state.loading|=4,ec(s,n.precedence,t),e.instance=s;case"script":return s=zr(n.src),(a=t.querySelector(Zo(s)))?(e.instance=a,en(a),a):(i=n,(a=ni.get(s))&&(i=Tt({},n),Sp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),en(a),ln(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,ec(i,n.precedence,t));return e.instance}function ec(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function _p(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Sp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var tc=null;function m0(t,e,n){if(tc===null){var i=new Map,a=tc=new Map;a.set(n,i)}else a=tc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Vo]||s[an]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function g0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function nb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function g_(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function ib(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Er(i.href),s=e.querySelector(Yo(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,en(s);return}s=e.ownerDocument||e,i=m_(i),(a=ni.get(a))&&_p(i,a),s=s.createElement("link"),en(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Pc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var tf=0;function ab(t,e){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&tf===0&&(tf=62500*BM());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>tf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,e.forEach(sb,t),Ic=null,Pc.call(t))}function sb(t,e){if(!(e.state.loading&4)){var n=Ic.get(t);if(n)var i=n.get(null);else{n=new Map,Ic.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Pc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Lo={$$typeof:Vi,Provider:null,Consumer:null,_currentValue:os,_currentValue2:os,_threadCount:0};function rb(t,e,n,i,a,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.hiddenUpdates=Eu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function v_(t,e,n,i,a,s,r,o,l,c,d,p){return t=new rb(t,e,n,r,l,c,d,p,o),e=1,s===!0&&(e|=24),s=On(3,null,null,e),t.current=s,s.stateNode=t,e=jh(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},Zh(s),t}function x_(t){return t?(t=tr,t):tr}function __(t,e,n,i,a,s){a=x_(a),i.context===null?i.context=a:i.pendingContext=a,i=Ua(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=La(t,i,e),n!==null&&(En(n,t,e),ho(n,t,e))}function v0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){v0(t,e),(t=t.alternate)&&v0(t,e)}function S_(t){if(t.tag===13||t.tag===31){var e=bs(t,67108864);e!==null&&En(e,t,67108864),yp(t,67108864)}}function x0(t){if(t.tag===13||t.tag===31){var e=Fn();e=Uh(e);var n=bs(t,e);n!==null&&En(n,t,e),yp(t,e)}}var zc=!0;function ob(t,e,n,i){var a=Ue.T;Ue.T=null;var s=st.p;try{st.p=2,Mp(t,e,n,i)}finally{st.p=s,Ue.T=a}}function lb(t,e,n,i){var a=Ue.T;Ue.T=null;var s=st.p;try{st.p=8,Mp(t,e,n,i)}finally{st.p=s,Ue.T=a}}function Mp(t,e,n,i){if(zc){var a=Nd(i);if(a===null)$u(t,e,i,Bc,n),_0(t,i);else if(ub(a,t,e,n,i))i.stopPropagation();else if(_0(t,i),e&4&&-1<cb.indexOf(t)){for(;a!==null;){var s=Ur(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$a(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Bn(r);o.entanglements[1]|=l,r&=~l}wi(s),!(at&6)&&(Rc=In()+500,qo(0))}}break;case 31:case 13:o=bs(s,2),o!==null&&En(o,s,2),ou(),yp(s,2)}if(s=Nd(i),s===null&&$u(t,e,i,Bc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else $u(t,e,i,null,n)}}function Nd(t){return t=Ih(t),bp(t)}var Bc=null;function bp(t){if(Bc=null,t=Zs(t),t!==null){var e=Bo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===31){if(t=Gg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bc=t,null}function y_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(YS()){case Wg:return 2;case jg:return 8;case hc:case ZS:return 32;case qg:return 268435456;default:return 32}default:return 32}}var Dd=!1,Ia=null,za=null,Ba=null,Oo=new Map,Po=new Map,Ma=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _0(t,e){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function jr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Ur(e),e!==null&&S_(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function ub(t,e,n,i,a){switch(e){case"focusin":return Ia=jr(Ia,t,e,n,i,a),!0;case"dragenter":return za=jr(za,t,e,n,i,a),!0;case"mouseover":return Ba=jr(Ba,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Oo.set(s,jr(Oo.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Po.set(s,jr(Po.get(s)||null,t,e,n,i,a)),!0}return!1}function M_(t){var e=Zs(t.target);if(e!==null){var n=Bo(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,im(t.priority,function(){x0(n)});return}}else if(e===31){if(e=Gg(n),e!==null){t.blockedOn=e,im(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Ur(n),e!==null&&S_(e),t.blockedOn=n,!1;e.shift()}return!0}function S0(t,e,n){ic(t)&&n.delete(e)}function fb(){Dd=!1,Ia!==null&&ic(Ia)&&(Ia=null),za!==null&&ic(za)&&(za=null),Ba!==null&&ic(Ba)&&(Ba=null),Oo.forEach(S0),Po.forEach(S0)}function ml(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,fb)))}var gl=null;function y0(t){gl!==t&&(gl=t,Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority,function(){gl===t&&(gl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(bp(i||n)===null)continue;break}var s=Ur(n);s!==null&&(t.splice(e,3),e-=3,fd(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Tr(t){function e(l){return ml(l,t)}Ia!==null&&ml(Ia,t),za!==null&&ml(za,t),Ba!==null&&ml(Ba,t),Oo.forEach(e),Po.forEach(e);for(var n=0;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ma.length&&(n=Ma[0],n.blockedOn===null);)M_(n),n.blockedOn===null&&Ma.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Rn]||null;if(typeof s=="function")r||y0(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Rn]||null)o=r.formAction;else if(bp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),y0(n)}}}function b_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Ep(t){this._internalRoot=t}uu.prototype.render=Ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var n=e.current,i=Fn();__(n,i,t,e,null,null)};uu.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;__(t.current,2,null,t,null,null),ou(),e[Dr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ma.length&&e!==0&&e<Ma[n].priority;n++);Ma.splice(n,0,t),n===0&&M_(t)}};var M0=Bg.version;if(M0!=="19.2.8")throw Error(te(527,M0,"19.2.8"));st.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=GS(e),t=t!==null?Vg(t):null,t=t===null?null:t.stateNode,t};var db={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Ue,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Fo=vl.inject(db),zn=vl}catch{}}qc.createRoot=function(t,e){if(!Fg(t))throw Error(te(299));var n=!1,i="",a=px,s=mx,r=gx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=v_(t,1,!1,null,null,n,i,null,a,s,r,b_),t[Dr]=e.current,xp(t),new Ep(e)};qc.hydrateRoot=function(t,e,n){if(!Fg(t))throw Error(te(299));var i=!1,a="",s=px,r=mx,o=gx,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=v_(t,1,!0,e,n??null,i,a,l,s,r,o,b_),e.context=x_(null),n=e.current,i=Fn(),i=Uh(i),a=Ua(i),a.callback=null,La(n,a,i),n=i,e.current.lanes=n,Go(e,n),wi(e),t[Dr]=e.current,xp(t),new uu(e)};qc.version="19.2.8";function E_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E_)}catch(t){console.error(t)}}E_(),Ug.exports=qc;var hb=Ug.exports;const pb=Mg(hb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="185",mb=0,b0=1,gb=2,ac=1,vb=2,so=3,ka=0,Tn=1,Gi=2,Zi=0,dr=1,Ud=2,E0=3,T0=4,xb=5,is=100,_b=101,Sb=102,yb=103,Mb=104,bb=200,Eb=201,Tb=202,Ab=203,Ld=204,Od=205,Rb=206,wb=207,Cb=208,Nb=209,Db=210,Ub=211,Lb=212,Ob=213,Pb=214,Pd=0,Id=1,zd=2,Ar=3,Bd=4,Fd=5,Hd=6,Gd=7,T_=0,Ib=1,zb=2,bi=0,A_=1,R_=2,w_=3,C_=4,N_=5,D_=6,U_=7,L_=300,vs=301,Rr=302,nf=303,af=304,fu=306,Vd=1e3,Wi=1001,kd=1002,on=1003,Bb=1004,xl=1005,dn=1006,sf=1007,ss=1008,$n=1009,O_=1010,P_=1011,Io=1012,Ap=1013,Ti=1014,Si=1015,ia=1016,Rp=1017,wp=1018,zo=1020,I_=35902,z_=35899,B_=1021,F_=1022,ci=1023,aa=1026,rs=1027,H_=1028,Cp=1029,xs=1030,Np=1031,Dp=1033,sc=33776,rc=33777,oc=33778,lc=33779,Xd=35840,Wd=35841,jd=35842,qd=35843,Yd=36196,Zd=37492,Kd=37496,Qd=37488,Jd=37489,Fc=37490,$d=37491,eh=37808,th=37809,nh=37810,ih=37811,ah=37812,sh=37813,rh=37814,oh=37815,lh=37816,ch=37817,uh=37818,fh=37819,dh=37820,hh=37821,ph=36492,mh=36494,gh=36495,vh=36283,xh=36284,Hc=36285,_h=36286,Fb=3200,A0=0,Hb=1,ba="",Wn="srgb",Gc="srgb-linear",Vc="linear",ct="srgb",Ns=7680,R0=519,Gb=512,Vb=513,kb=514,Up=515,Xb=516,Wb=517,Lp=518,jb=519,w0=35044,C0="300 es",yi=2e3,kc=2001;function qb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yb(){const t=Xc("canvas");return t.style.display="block",t}const N0={};function D0(...t){const e="THREE."+t.shift();console.log(e,...t)}function G_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=G_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=G_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hr(...t){const e=t.join(" ");e in N0||(N0[e]=!0,Le(...t))}function Zb(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Kb={[Pd]:Id,[zd]:Hd,[Bd]:Gd,[Ar]:Fd,[Id]:Pd,[Hd]:zd,[Gd]:Bd,[Fd]:Ar};class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,Sh=180/Math.PI;function Ko(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function Qb(t,e){return(t%e+e)%e}function of(t,e,n){return(1-n)*t+n*e}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pp=class Pp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pp.prototype.isVector2=!0;let rt=Pp;class Br{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],_=s[r+2],E=s[r+3];if(p!==E||l!==u||c!==h||d!==_){let m=l*u+c*h+d*_+p*E;m<0&&(u=-u,h=-h,_=-_,E=-E,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);f=Math.sin(f*v)/M,o=Math.sin(o*v)/M,l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+E*o}else{l=l*f+u*o,c=c*f+h*o,d=d*f+_*o,p=p*f+E*o;const v=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=v,c*=v,d*=v,p*=v}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],_=s[r+3];return e[n]=o*_+d*p+l*h-c*u,e[n+1]=l*_+d*u+c*p-o*h,e[n+2]=c*_+d*h+o*u-l*p,e[n+3]=d*_-o*p-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),p=o(s/2),u=l(i/2),h=l(a/2),_=l(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],p=n[10],u=i+o+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>o&&i>p){const h=2*Math.sqrt(1+i-o-p);this._w=(d-l)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(o>p){const h=2*Math.sqrt(1+o-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+p-i-o);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,s=-s,r=-r,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+s*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ip=class Ip{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(U0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(U0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*n-s*a),p=2*(s*i-r*n);return this.x=n+l*c+r*p-o*d,this.y=i+l*d+o*c-s*p,this.z=a+l*p+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ip.prototype.isVector3=!0;let j=Ip;const lf=new j,U0=new Br,zp=class zp{constructor(e,n,i,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],E=a[0],m=a[3],f=a[6],v=a[1],M=a[4],S=a[7],A=a[2],w=a[5],C=a[8];return s[0]=r*E+o*v+l*A,s[3]=r*m+o*M+l*w,s[6]=r*f+o*S+l*C,s[1]=c*E+d*v+p*A,s[4]=c*m+d*M+p*w,s[7]=c*f+d*S+p*C,s[2]=u*E+h*v+_*A,s[5]=u*m+h*M+_*w,s[8]=u*f+h*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=d*r-o*c,u=o*l-d*s,h=c*s-r*l,_=n*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=p*E,e[1]=(a*c-d*i)*E,e[2]=(o*i-a*r)*E,e[3]=u*E,e[4]=(d*n-a*l)*E,e[5]=(a*s-o*n)*E,e[6]=h*E,e[7]=(i*l-c*n)*E,e[8]=(r*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cf.makeScale(e,n)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cf.makeRotation(-e)),this}translate(e,n){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zp.prototype.isMatrix3=!0;let Pe=zp;const cf=new Pe,L0=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O0=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const t={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ct&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ct&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?Vc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gc]:{primaries:e,whitePoint:i,transfer:Vc,toXYZ:L0,fromXYZ:O0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:L0,fromXYZ:O0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Ye=Jb();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class $b{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Xc("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ki(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(uf(a[r].image)):s.push(uf(a[r]))}else s=uf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function uf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let t1=0;const ff=new j;class hn extends Ts{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Wi,a=Wi,s=dn,r=ss,o=ci,l=$n,c=hn.DEFAULT_ANISOTROPY,d=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Ko(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=L_;hn.DEFAULT_ANISOTROPY=1;const Bp=class Bp{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],d=l[4],p=l[8],u=l[1],h=l[5],_=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(p-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+E)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(h+1)/2,A=(f+1)/2,w=(d+u)/4,C=(p+E)/4,x=(_+m)/4;return M>S&&M>A?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=w/i,s=C/i):S>A?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=w/a,s=x/a):A<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(A),i=C/s,a=x/s),this.set(i,a,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(p-E)*(p-E)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(p-E)/v,this.z=(u-d)/v,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bp.prototype.isVector4=!0;let Pt=Bp;class n1 extends Ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new hn(a),r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Op(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends n1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V_ extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends hn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=on,this.minFilter=on,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(e,n,i,a,s,r,o,l,c,d,p,u,h,_,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,d,p,u,h,_,E,m)}set(e,n,i,a,s,r,o,l,c,d,p,u,h,_,E,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),r=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*p,_=o*d,E=o*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=h+_*c,n[5]=u-E*c,n[9]=-o*l,n[2]=E-u*c,n[6]=_+h*c,n[10]=r*l}else if(e.order==="YXZ"){const u=l*d,h=l*p,_=c*d,E=c*p;n[0]=u+E*o,n[4]=_*o-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-o,n[2]=h*o-_,n[6]=E+u*o,n[10]=r*l}else if(e.order==="ZXY"){const u=l*d,h=l*p,_=c*d,E=c*p;n[0]=u-E*o,n[4]=-r*p,n[8]=_+h*o,n[1]=h+_*o,n[5]=r*d,n[9]=E-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const u=r*d,h=r*p,_=o*d,E=o*p;n[0]=l*d,n[4]=_*c-h,n[8]=u*c+E,n[1]=l*p,n[5]=E*c+u,n[9]=h*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const u=r*l,h=r*c,_=o*l,E=o*c;n[0]=l*d,n[4]=E-u*p,n[8]=_*p+h,n[1]=p,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=h*p+_,n[10]=u-E*p}else if(e.order==="XZY"){const u=r*l,h=r*c,_=o*l,E=o*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=u*p+E,n[5]=r*d,n[9]=h*p-_,n[2]=_*p-h,n[6]=o*d,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,s1)}lookAt(e,n,i){const a=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),fa.crossVectors(i,Nn),fa.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),fa.crossVectors(i,Nn)),fa.normalize(),_l.crossVectors(Nn,fa),a[0]=fa.x,a[4]=_l.x,a[8]=Nn.x,a[1]=fa.y,a[5]=_l.y,a[9]=Nn.y,a[2]=fa.z,a[6]=_l.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],E=i[6],m=i[10],f=i[14],v=i[3],M=i[7],S=i[11],A=i[15],w=a[0],C=a[4],x=a[8],R=a[12],U=a[1],L=a[5],F=a[9],Q=a[13],ne=a[2],H=a[6],P=a[10],I=a[14],V=a[3],ee=a[7],se=a[11],le=a[15];return s[0]=r*w+o*U+l*ne+c*V,s[4]=r*C+o*L+l*H+c*ee,s[8]=r*x+o*F+l*P+c*se,s[12]=r*R+o*Q+l*I+c*le,s[1]=d*w+p*U+u*ne+h*V,s[5]=d*C+p*L+u*H+h*ee,s[9]=d*x+p*F+u*P+h*se,s[13]=d*R+p*Q+u*I+h*le,s[2]=_*w+E*U+m*ne+f*V,s[6]=_*C+E*L+m*H+f*ee,s[10]=_*x+E*F+m*P+f*se,s[14]=_*R+E*Q+m*I+f*le,s[3]=v*w+M*U+S*ne+A*V,s[7]=v*C+M*L+S*H+A*ee,s[11]=v*x+M*F+S*P+A*se,s[15]=v*R+M*Q+S*I+A*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],_=e[3],E=e[7],m=e[11],f=e[15],v=l*h-c*u,M=o*h-c*p,S=o*u-l*p,A=r*h-c*d,w=r*u-l*d,C=r*p-o*d;return n*(E*v-m*M+f*S)-i*(_*v-m*A+f*w)+a*(_*M-E*A+f*C)-s*(_*S-E*w+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return n*(r*d-o*c)-i*(s*d-o*l)+a*(s*c-r*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],_=e[12],E=e[13],m=e[14],f=e[15],v=n*o-i*r,M=n*l-a*r,S=n*c-s*r,A=i*l-a*o,w=i*c-s*o,C=a*c-s*l,x=d*E-p*_,R=d*m-u*_,U=d*f-h*_,L=p*m-u*E,F=p*f-h*E,Q=u*f-h*m,ne=v*Q-M*F+S*L+A*U-w*R+C*x;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/ne;return e[0]=(o*Q-l*F+c*L)*H,e[1]=(a*F-i*Q-s*L)*H,e[2]=(E*C-m*w+f*A)*H,e[3]=(u*w-p*C-h*A)*H,e[4]=(l*U-r*Q-c*R)*H,e[5]=(n*Q-a*U+s*R)*H,e[6]=(m*S-_*C-f*M)*H,e[7]=(d*C-u*S+h*M)*H,e[8]=(r*F-o*U+c*x)*H,e[9]=(i*U-n*F-s*x)*H,e[10]=(_*w-E*S+f*v)*H,e[11]=(p*S-d*w-h*v)*H,e[12]=(o*R-r*L-l*x)*H,e[13]=(n*L-i*R+a*x)*H,e[14]=(E*M-_*A-m*v)*H,e[15]=(d*A-p*M+u*v)*H,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,p=o+o,u=s*c,h=s*d,_=s*p,E=r*d,m=r*p,f=o*p,v=l*c,M=l*d,S=l*p,A=i.x,w=i.y,C=i.z;return a[0]=(1-(E+f))*A,a[1]=(h+S)*A,a[2]=(_-M)*A,a[3]=0,a[4]=(h-S)*w,a[5]=(1-(u+f))*w,a[6]=(m+v)*w,a[7]=0,a[8]=(_+M)*C,a[9]=(m-v)*C,a[10]=(1-(u+E))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Us.set(a[0],a[1],a[2]).length();const o=Us.set(a[4],a[5],a[6]).length(),l=Us.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ai.copy(this);const c=1/r,d=1/o,p=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=d,ai.elements[5]*=d,ai.elements[6]*=d,ai.elements[8]*=p,ai.elements[9]*=p,ai.elements[10]*=p,n.setFromRotationMatrix(ai),i.x=r,i.y=o,i.z=l,this}makePerspective(e,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2*s/(n-e),p=2*s/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let _,E;if(l)_=s/(r-s),E=r*s/(r-s);else if(o===yi)_=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(o===kc)_=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=yi,l=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let _,E;if(l)_=1/(r-s),E=r/(r-s);else if(o===yi)_=-2/(r-s),E=-(r+s)/(r-s);else if(o===kc)_=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Wc.prototype.isMatrix4=!0;let Gt=Wc;const Us=new j,ai=new Gt,a1=new j(0,0,0),s1=new j(1,1,1),fa=new j,_l=new j,Nn=new j,P0=new Gt,I0=new Br;class _s{constructor(e=0,n=0,i=0,a=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return P0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(P0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r1=0;const z0=new j,Ls=new Br,Li=new Gt,Sl=new j,Yr=new j,o1=new j,l1=new Br,B0=new j(1,0,0),F0=new j(0,1,0),H0=new j(0,0,1),G0={type:"added"},c1={type:"removed"},Os={type:"childadded",child:null},df={type:"childremoved",child:null};class An extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new j,n=new _s,i=new Br,a=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Pe}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(H0,e)}translateOnAxis(e,n){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(H0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Sl.copy(e):Sl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Yr,Sl,this.up):Li.lookAt(Sl,Yr,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Li),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),Os.child=e,this.dispatchEvent(Os),Os.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c1),df.child=e,this.dispatchEvent(df),df.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,o1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,l1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),p=r(e.shapes),u=r(e.skeletons),h=r(e.animations),_=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}An.DEFAULT_UP=new j(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yl extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function pf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Ye.workingColorSpace){if(e=Qb(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=pf(r,s,e+1/3),this.g=pf(r,s,e),this.b=pf(r,s,e-1/3)}return Ye.colorSpaceToWorking(this,a),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=X_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Ye.workingToColorSpace(fn.copy(this),e),Math.round(Ze(fn.r*255,0,255))*65536+Math.round(Ze(fn.g*255,0,255))*256+Math.round(Ze(fn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(fn.copy(this),n);const i=fn.r,a=fn.g,s=fn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const p=r-o;switch(c=d<=.5?p/(r+o):p/(2-r-o),r){case i:l=(a-s)/p+(a<s?6:0);break;case a:l=(s-i)/p+2;break;case s:l=(i-a)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Wn){Ye.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,a=fn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(da),this.setHSL(da.h+e,da.s+n,da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(da),e.getHSL(Ml);const i=of(da.h,Ml.h,n),a=of(da.s,Ml.s,n),s=of(da.l,Ml.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new it;it.NAMES=X_;class f1 extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const si=new j,Oi=new j,mf=new j,Pi=new j,Ps=new j,Is=new j,V0=new j,gf=new j,vf=new j,xf=new j,_f=new Pt,Sf=new Pt,yf=new Pt;class li{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),si.subVectors(e,n),a.cross(si);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){si.subVectors(a,n),Oi.subVectors(i,n),mf.subVectors(e,n);const r=si.dot(si),o=si.dot(Oi),l=si.dot(mf),c=Oi.dot(Oi),d=Oi.dot(mf),p=r*c-o*o;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*l-o*d)*u,_=(r*d-o*l)*u;return s.set(1-h-_,_,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(r,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return _f.setScalar(0),Sf.setScalar(0),yf.setScalar(0),_f.fromBufferAttribute(e,n),Sf.fromBufferAttribute(e,i),yf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(_f,s.x),r.addScaledVector(Sf,s.y),r.addScaledVector(yf,s.z),r}static isFrontFacing(e,n,i,a){return si.subVectors(i,n),Oi.subVectors(e,n),si.cross(Oi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),si.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return li.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;Ps.subVectors(a,i),Is.subVectors(s,i),gf.subVectors(e,i);const l=Ps.dot(gf),c=Is.dot(gf);if(l<=0&&c<=0)return n.copy(i);vf.subVectors(e,a);const d=Ps.dot(vf),p=Is.dot(vf);if(d>=0&&p<=d)return n.copy(a);const u=l*p-d*c;if(u<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Ps,r);xf.subVectors(e,s);const h=Ps.dot(xf),_=Is.dot(xf);if(_>=0&&h<=_)return n.copy(s);const E=h*c-l*_;if(E<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Is,o);const m=d*_-h*p;if(m<=0&&p-d>=0&&h-_>=0)return V0.subVectors(s,a),o=(p-d)/(p-d+(h-_)),n.copy(a).addScaledVector(V0,o);const f=1/(m+E+u);return r=E*f,o=u*f,n.copy(i).addScaledVector(Ps,r).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ri):ri.fromBufferAttribute(s,r),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),El.subVectors(this.max,Zr),zs.subVectors(e.a,Zr),Bs.subVectors(e.b,Zr),Fs.subVectors(e.c,Zr),ha.subVectors(Bs,zs),pa.subVectors(Fs,Bs),Ya.subVectors(zs,Fs);let n=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-Ya.z,Ya.y,ha.z,0,-ha.x,pa.z,0,-pa.x,Ya.z,0,-Ya.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-Ya.y,Ya.x,0];return!Mf(n,zs,Bs,Fs,El)||(n=[1,0,0,0,1,0,0,0,1],!Mf(n,zs,Bs,Fs,El))?!1:(Tl.crossVectors(ha,pa),n=[Tl.x,Tl.y,Tl.z],Mf(n,zs,Bs,Fs,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new j,new j,new j,new j,new j,new j,new j,new j],ri=new j,bl=new Qo,zs=new j,Bs=new j,Fs=new j,ha=new j,pa=new j,Ya=new j,Zr=new j,El=new j,Tl=new j,Za=new j;function Mf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Za.fromArray(t,s);const o=a.x*Math.abs(Za.x)+a.y*Math.abs(Za.y)+a.z*Math.abs(Za.z),l=e.dot(Za),c=n.dot(Za),d=i.dot(Za);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const kt=new j,Al=new rt;let d1=0;class ui extends Ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=w0,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Al.fromBufferAttribute(this,n),Al.applyMatrix3(e),this.setXY(n,Al.x,Al.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix3(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyMatrix4(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.applyNormalMatrix(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)kt.fromBufferAttribute(this,n),kt.transformDirection(e),this.setXYZ(n,kt.x,kt.y,kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),a=yn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),a=yn(a,this.array),s=yn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class W_ extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class j_ extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qi extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const h1=new Qo,Kr=new j,bf=new j;class du{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Kr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(bf)),this.expandByPoint(Kr.copy(e.center).sub(bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p1=0;const kn=new Gt,Ef=new An,Hs=new j,Dn=new Qo,Qr=new Qo,Jt=new j;class di extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qb(e)?j_:W_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qi(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Dn.min,Qr.min),Dn.expandByPoint(Jt),Jt.addVectors(Dn.max,Qr.max),Dn.expandByPoint(Jt)):(Dn.expandByPoint(Qr.min),Dn.expandByPoint(Qr.max))}Dn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Jt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Jt));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Jt.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),Jt.add(Hs)),a=Math.max(a,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new j,l[x]=new j;const c=new j,d=new j,p=new j,u=new rt,h=new rt,_=new rt,E=new j,m=new j;function f(x,R,U){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,R),p.fromBufferAttribute(i,U),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,R),_.fromBufferAttribute(s,U),d.sub(c),p.sub(c),h.sub(u),_.sub(u);const L=1/(h.x*_.y-_.x*h.y);isFinite(L)&&(E.copy(d).multiplyScalar(_.y).addScaledVector(p,-h.y).multiplyScalar(L),m.copy(p).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(L),o[x].add(E),o[R].add(E),o[U].add(E),l[x].add(m),l[R].add(m),l[U].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,R=v.length;x<R;++x){const U=v[x],L=U.start,F=U.count;for(let Q=L,ne=L+F;Q<ne;Q+=3)f(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const M=new j,S=new j,A=new j,w=new j;function C(x){A.fromBufferAttribute(a,x),w.copy(A);const R=o[x];M.copy(R),M.sub(A.multiplyScalar(A.dot(R))).normalize(),S.crossVectors(w,R);const L=S.dot(l[x])<0?-1:1;r.setXYZW(x,M.x,M.y,M.z,L)}for(let x=0,R=v.length;x<R;++x){const U=v[x],L=U.start,F=U.count;for(let Q=L,ne=L+F;Q<ne;Q+=3)C(e.getX(Q+0)),C(e.getX(Q+1)),C(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new j,s=new j,r=new j,o=new j,l=new j,c=new j,d=new j,p=new j;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,m),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,p=o.normalized,u=new c.constructor(l.length*d);let h=0,_=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?h=l[E]*o.data.stride+o.offset:h=l[E]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new ui(u,d,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new di,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m1=0;class Jo extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=dr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Od,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new j,Tf=new j,Rl=new j,ma=new j,Af=new j,wl=new j,Rf=new j;class q_{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Tf.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),ma.copy(this.origin).sub(Tf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Rl),o=ma.dot(this.direction),l=-ma.dot(Rl),c=ma.lengthSq(),d=Math.abs(1-r*r);let p,u,h,_;if(d>0)if(p=r*l-o,u=r*o-l,_=s*d,p>=0)if(u>=-_)if(u<=_){const E=1/d;p*=E,u*=E,h=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u=-s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*s+o)),u=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(p=Math.max(0,-(r*s+o)),u=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+u*(u+2*l)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+o)),h=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Tf).addScaledVector(Rl,u),h}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-u.z)*p,l=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,l=(e.min.z-u.z)*p),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,a,s){Af.subVectors(n,e),wl.subVectors(i,e),Rf.crossVectors(Af,wl);let r=this.direction.dot(Rf),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;ma.subVectors(this.origin,e);const l=o*this.direction.dot(wl.crossVectors(ma,wl));if(l<0)return null;const c=o*this.direction.dot(Af.cross(ma));if(c<0||l+c>r)return null;const d=-o*ma.dot(Rf);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Y_ extends Jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const k0=new Gt,Ka=new q_,Cl=new du,X0=new j,Nl=new j,Dl=new j,Ul=new j,wf=new j,Ll=new j,W0=new j,Ol=new j;class sa extends An{constructor(e=new di,n=new Y_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){Ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],p=s[l];d!==0&&(wf.fromBufferAttribute(p,e),r?Ll.addScaledVector(wf,d):Ll.addScaledVector(wf.sub(n),d))}n.add(Ll)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(s),Ka.copy(e.ray).recast(e.near),!(Cl.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(Cl,X0)===null||Ka.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(k0.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(k0),!(i.boundingBox!==null&&Ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ka)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const m=u[_],f=r[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,A=M;S<A;S+=3){const w=o.getX(S),C=o.getX(S+1),x=o.getX(S+2);a=Pl(this,f,e,i,c,d,p,w,C,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let m=_,f=E;m<f;m+=3){const v=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);a=Pl(this,r,e,i,c,d,p,v,M,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const m=u[_],f=r[m.materialIndex],v=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=v,A=M;S<A;S+=3){const w=S,C=S+1,x=S+2;a=Pl(this,f,e,i,c,d,p,w,C,x),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let m=_,f=E;m<f;m+=3){const v=m,M=m+1,S=m+2;a=Pl(this,r,e,i,c,d,p,v,M,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function g1(t,e,n,i,a,s,r,o){let l;if(e.side===Tn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===ka,o),l===null)return null;Ol.copy(o),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function Pl(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,Nl),t.getVertexPosition(l,Dl),t.getVertexPosition(c,Ul);const d=g1(t,e,n,i,Nl,Dl,Ul,W0);if(d){const p=new j;li.getBarycoord(W0,Nl,Dl,Ul,p),a&&(d.uv=li.getInterpolatedAttribute(a,o,l,c,p,new rt)),s&&(d.uv1=li.getInterpolatedAttribute(s,o,l,c,p,new rt)),r&&(d.normal=li.getInterpolatedAttribute(r,o,l,c,p,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new j,materialIndex:0};li.getNormal(Nl,Dl,Ul,u.normal),d.face=u,d.barycoord=p}return d}class v1 extends hn{constructor(e=null,n=1,i=1,a,s,r,o,l,c=on,d=on,p,u){super(null,r,o,l,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new j,x1=new j,_1=new Pe;class ns{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Cf.subVectors(i,n).cross(x1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Cf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qa=new du,S1=new rt(.5,.5),Il=new j;class Z_{constructor(e=new ns,n=new ns,i=new ns,a=new ns,s=new ns,r=new ns){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],_=s[8],E=s[9],m=s[10],f=s[11],v=s[12],M=s[13],S=s[14],A=s[15];if(a[0].setComponents(c-r,h-d,f-_,A-v).normalize(),a[1].setComponents(c+r,h+d,f+_,A+v).normalize(),a[2].setComponents(c+o,h+p,f+E,A+M).normalize(),a[3].setComponents(c-o,h-p,f-E,A-M).normalize(),i)a[4].setComponents(l,u,m,S).normalize(),a[5].setComponents(c-l,h-u,f-m,A-S).normalize();else if(a[4].setComponents(c-l,h-u,f-m,A-S).normalize(),n===yi)a[5].setComponents(c+l,h+u,f+m,A+S).normalize();else if(n===kc)a[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qa)}intersectsSprite(e){Qa.center.set(0,0,0);const n=S1.distanceTo(e.center);return Qa.radius=.7071067811865476+n,Qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qa)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Il.x=a.normal.x>0?e.max.x:e.min.x,Il.y=a.normal.y>0?e.max.y:e.min.y,Il.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class K_ extends Jo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const j0=new Gt,yh=new q_,zl=new du,Bl=new j;class y1 extends An{constructor(e=new di,n=new K_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(a),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;j0.copy(a).invert(),yh.copy(e.ray).applyMatrix4(j0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let _=u,E=h;_<E;_++){const m=c.getX(_);Bl.fromBufferAttribute(p,m),q0(Bl,m,l,a,e,n,this)}}else{const u=Math.max(0,r.start),h=Math.min(p.count,r.start+r.count);for(let _=u,E=h;_<E;_++)Bl.fromBufferAttribute(p,_),q0(Bl,_,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function q0(t,e,n,i,a,s,r){const o=yh.distanceSqToPoint(t);if(o<n){const l=new j;yh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Q_ extends hn{constructor(e=[],n=vs,i,a,s,r,o,l,c,d){super(e,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M1 extends hn{constructor(e,n,i,a,s,r,o,l,c){super(e,n,i,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wr extends hn{constructor(e,n,i=Ti,a,s,r,o=on,l=on,c,d=aa,p=1){if(d!==aa&&d!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class b1 extends wr{constructor(e,n=Ti,i=vs,a,s,r=on,o=on,l,c=aa){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,s,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class J_ extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $o extends di{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,n,e,r,s,0),_("z","y","x",1,-1,i,n,-e,r,s,1),_("x","z","y",1,1,e,i,n,a,r,2),_("x","z","y",1,-1,e,i,-n,a,r,3),_("x","y","z",1,-1,e,n,i,a,s,4),_("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(d,3)),this.setAttribute("uv",new Qi(p,2));function _(E,m,f,v,M,S,A,w,C,x,R){const U=S/C,L=A/x,F=S/2,Q=A/2,ne=w/2,H=C+1,P=x+1;let I=0,V=0;const ee=new j;for(let se=0;se<P;se++){const le=se*L-Q;for(let ve=0;ve<H;ve++){const ke=ve*U-F;ee[E]=ke*v,ee[m]=le*M,ee[f]=ne,c.push(ee.x,ee.y,ee.z),ee[E]=0,ee[m]=0,ee[f]=w>0?1:-1,d.push(ee.x,ee.y,ee.z),p.push(ve/C),p.push(1-se/x),I+=1}}for(let se=0;se<x;se++)for(let le=0;le<C;le++){const ve=u+le+H*se,ke=u+le+H*(se+1),et=u+(le+1)+H*(se+1),Ve=u+(le+1)+H*se;l.push(ve,ke,Ve),l.push(ke,et,Ve),V+=6}o.addGroup(h,V,R),h+=V,u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hu extends di{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,p=e/o,u=n/l,h=[],_=[],E=[],m=[];for(let f=0;f<d;f++){const v=f*u-r;for(let M=0;M<c;M++){const S=M*p-s;_.push(S,-v,0),E.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const M=v+c*f,S=v+c*(f+1),A=v+1+c*(f+1),w=v+1+c*f;h.push(M,S,w),h.push(S,A,w)}this.setIndex(h),this.setAttribute("position",new Qi(_,3)),this.setAttribute("normal",new Qi(E,3)),this.setAttribute("uv",new Qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Cr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(Y0(a))a.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(Y0(a[0])){const s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=Cr(t[n]);for(const a in i)e[a]=i[a]}return e}function Y0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function E1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const T1={clone:Cr,merge:mn};var A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new it().setHex(a.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(a.value);break;case"v3":this.uniforms[i].value=new j().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Pe().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Gt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class w1 extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class C1 extends Jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends Jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fl=new j,Hl=new Br,pi=new j;class eS extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,Hl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Hl,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fl,Hl,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Hl,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ga=new j,Z0=new rt,K0=new rt;class Zn extends eS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sh*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-e/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-e/ga.z)}getViewSize(e,n){return this.getViewBounds(e,Z0,K0),n.subVectors(K0,Z0)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class tS extends eS{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=-90,Vs=1;class D1 extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Gs,Vs,e,n);a.layers=this.layers,this.add(a);const s=new Zn(Gs,Vs,e,n);s.layers=this.layers,this.add(s);const r=new Zn(Gs,Vs,e,n);r.layers=this.layers,this.add(r);const o=new Zn(Gs,Vs,e,n);o.layers=this.layers,this.add(o);const l=new Zn(Gs,Vs,e,n);l.layers=this.layers,this.add(l);const c=new Zn(Gs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class U1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fp=class Fp{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};Fp.prototype.isMatrix2=!0;let Q0=Fp;function J0(t,e,n,i){const a=L1(i);switch(n){case B_:return t*e;case H_:return t*e/a.components*a.byteLength;case Cp:return t*e/a.components*a.byteLength;case xs:return t*e*2/a.components*a.byteLength;case Np:return t*e*2/a.components*a.byteLength;case F_:return t*e*3/a.components*a.byteLength;case ci:return t*e*4/a.components*a.byteLength;case Dp:return t*e*4/a.components*a.byteLength;case sc:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oc:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case qd:return Math.max(t,16)*Math.max(e,8)/4;case Xd:case jd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case Zd:case Qd:case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kd:case Fc:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vh:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hc:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L1(t){switch(t){case $n:case O_:return{byteLength:1,components:1};case Io:case P_:case ia:return{byteLength:2,components:1};case Rp:case wp:return{byteLength:2,components:4};case Ti:case Ap:case Si:return{byteLength:4,components:1};case I_:case z_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function O1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const d=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],E=p[h];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,p[u]=E)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const E=p[h];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,X1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Y1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Z1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ME=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ST=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ET=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,XT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:P1,alphahash_pars_fragment:I1,alphamap_fragment:z1,alphamap_pars_fragment:B1,alphatest_fragment:F1,alphatest_pars_fragment:H1,aomap_fragment:G1,aomap_pars_fragment:V1,batching_pars_vertex:k1,batching_vertex:X1,begin_vertex:W1,beginnormal_vertex:j1,bsdfs:q1,iridescence_fragment:Y1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:$1,color_fragment:eE,color_pars_fragment:tE,color_pars_vertex:nE,color_vertex:iE,common:aE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:rE,displacementmap_pars_vertex:oE,displacementmap_vertex:lE,emissivemap_fragment:cE,emissivemap_pars_fragment:uE,colorspace_fragment:fE,colorspace_pars_fragment:dE,envmap_fragment:hE,envmap_common_pars_fragment:pE,envmap_pars_fragment:mE,envmap_pars_vertex:gE,envmap_physical_pars_fragment:RE,envmap_vertex:vE,fog_vertex:xE,fog_pars_vertex:_E,fog_fragment:SE,fog_pars_fragment:yE,gradientmap_pars_fragment:ME,lightmap_pars_fragment:bE,lights_lambert_fragment:EE,lights_lambert_pars_fragment:TE,lights_pars_begin:AE,lights_toon_fragment:wE,lights_toon_pars_fragment:CE,lights_phong_fragment:NE,lights_phong_pars_fragment:DE,lights_physical_fragment:UE,lights_physical_pars_fragment:LE,lights_fragment_begin:OE,lights_fragment_maps:PE,lights_fragment_end:IE,lightprobes_pars_fragment:zE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:WE,metalnessmap_fragment:jE,metalnessmap_pars_fragment:qE,morphinstance_vertex:YE,morphcolor_vertex:ZE,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:eT,normal_pars_fragment:tT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:sT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,opaque_fragment:cT,packing:uT,premultiplied_alpha_fragment:fT,project_vertex:dT,dithering_fragment:hT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:vT,shadowmap_pars_vertex:xT,shadowmap_vertex:_T,shadowmask_pars_fragment:ST,skinbase_vertex:yT,skinning_pars_vertex:MT,skinning_vertex:bT,skinnormal_vertex:ET,specularmap_fragment:TT,specularmap_pars_fragment:AT,tonemapping_fragment:RT,tonemapping_pars_fragment:wT,transmission_fragment:CT,transmission_pars_fragment:NT,uv_pars_fragment:DT,uv_pars_vertex:UT,uv_vertex:LT,worldpos_vertex:OT,background_vert:PT,background_frag:IT,backgroundCube_vert:zT,backgroundCube_frag:BT,cube_vert:FT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distance_vert:kT,distance_frag:XT,equirect_vert:WT,equirect_frag:jT,linedashed_vert:qT,linedashed_frag:YT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:$T,meshmatcap_frag:eA,meshnormal_vert:tA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:aA,meshphysical_vert:sA,meshphysical_frag:rA,meshtoon_vert:oA,meshtoon_frag:lA,points_vert:cA,points_frag:uA,shadow_vert:fA,shadow_frag:dA,sprite_vert:hA,sprite_frag:pA},pe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},gi={basic:{uniforms:mn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:mn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:mn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:mn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:mn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new it(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:mn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:mn([pe.points,pe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:mn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:mn([pe.common,pe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:mn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:mn([pe.sprite,pe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:mn([pe.common,pe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:mn([pe.lights,pe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Gl={r:0,b:0,g:0},mA=new Gt,iS=new Pe;iS.set(-1,0,0,0,1,0,0,0,1);function gA(t,e,n,i,a,s){const r=new it(0);let o=a===!0?0:1,l,c,d=null,p=0,u=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(v){let M=!1;const S=h(v);S===null?m(r,o):S&&S.isColor&&(m(S,1),M=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const S=h(M);S&&(S.isCubeTexture||S.mapping===fu)?(c===void 0&&(c=new sa(new $o(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Cr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(iS),c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==ct,(d!==S||p!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new sa(new hu(2,2),new Ai({name:"BackgroundMaterial",uniforms:Cr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Gl,$_(t)),n.buffers.color.setClear(Gl.r,Gl.g,Gl.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,M=1){r.set(v),o=M,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(r,o)},render:_,addToRenderList:E,dispose:f}}function vA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function o(L,F,Q,ne,H){let P=!1;const I=p(L,ne,Q,F);s!==I&&(s=I,c(s.object)),P=h(L,ne,Q,H),P&&_(L,ne,Q,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(P||r)&&(r=!1,S(L,F,Q,ne),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(L){return t.bindVertexArray(L)}function d(L){return t.deleteVertexArray(L)}function p(L,F,Q,ne){const H=ne.wireframe===!0;let P=i[F.id];P===void 0&&(P={},i[F.id]=P);const I=L.isInstancedMesh===!0?L.id:0;let V=P[I];V===void 0&&(V={},P[I]=V);let ee=V[Q.id];ee===void 0&&(ee={},V[Q.id]=ee);let se=ee[H];return se===void 0&&(se=u(l()),ee[H]=se),se}function u(L){const F=[],Q=[],ne=[];for(let H=0;H<n;H++)F[H]=0,Q[H]=0,ne[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:ne,object:L,attributes:{},index:null}}function h(L,F,Q,ne){const H=s.attributes,P=F.attributes;let I=0;const V=Q.getAttributes();for(const ee in V)if(V[ee].location>=0){const le=H[ee];let ve=P[ee];if(ve===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;I++}return s.attributesNum!==I||s.index!==ne}function _(L,F,Q,ne){const H={},P=F.attributes;let I=0;const V=Q.getAttributes();for(const ee in V)if(V[ee].location>=0){let le=P[ee];le===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(le=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(le=L.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),H[ee]=ve,I++}s.attributes=H,s.attributesNum=I,s.index=ne}function E(){const L=s.newAttributes;for(let F=0,Q=L.length;F<Q;F++)L[F]=0}function m(L){f(L,0)}function f(L,F){const Q=s.newAttributes,ne=s.enabledAttributes,H=s.attributeDivisors;Q[L]=1,ne[L]===0&&(t.enableVertexAttribArray(L),ne[L]=1),H[L]!==F&&(t.vertexAttribDivisor(L,F),H[L]=F)}function v(){const L=s.newAttributes,F=s.enabledAttributes;for(let Q=0,ne=F.length;Q<ne;Q++)F[Q]!==L[Q]&&(t.disableVertexAttribArray(Q),F[Q]=0)}function M(L,F,Q,ne,H,P,I){I===!0?t.vertexAttribIPointer(L,F,Q,H,P):t.vertexAttribPointer(L,F,Q,ne,H,P)}function S(L,F,Q,ne){E();const H=ne.attributes,P=Q.getAttributes(),I=F.defaultAttributeValues;for(const V in P){const ee=P[V];if(ee.location>=0){let se=H[V];if(se===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(se=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(se=L.instanceColor)),se!==void 0){const le=se.normalized,ve=se.itemSize,ke=e.get(se);if(ke===void 0)continue;const et=ke.buffer,Ve=ke.type,$=ke.bytesPerElement,de=Ve===t.INT||Ve===t.UNSIGNED_INT||se.gpuType===Ap;if(se.isInterleavedBufferAttribute){const re=se.data,Ne=re.stride,Oe=se.offset;if(re.isInstancedInterleavedBuffer){for(let we=0;we<ee.locationSize;we++)f(ee.location+we,re.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let we=0;we<ee.locationSize;we++)m(ee.location+we);t.bindBuffer(t.ARRAY_BUFFER,et);for(let we=0;we<ee.locationSize;we++)M(ee.location+we,ve/ee.locationSize,Ve,le,Ne*$,(Oe+ve/ee.locationSize*we)*$,de)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)f(ee.location+re,se.meshPerAttribute);L.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<ee.locationSize;re++)m(ee.location+re);t.bindBuffer(t.ARRAY_BUFFER,et);for(let re=0;re<ee.locationSize;re++)M(ee.location+re,ve/ee.locationSize,Ve,le,ve*$,ve/ee.locationSize*re*$,de)}}else if(I!==void 0){const le=I[V];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(ee.location,le);break;case 3:t.vertexAttrib3fv(ee.location,le);break;case 4:t.vertexAttrib4fv(ee.location,le);break;default:t.vertexAttrib1fv(ee.location,le)}}}}v()}function A(){R();for(const L in i){const F=i[L];for(const Q in F){const ne=F[Q];for(const H in ne){const P=ne[H];for(const I in P)d(P[I].object),delete P[I];delete ne[H]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const F=i[L.id];for(const Q in F){const ne=F[Q];for(const H in ne){const P=ne[H];for(const I in P)d(P[I].object),delete P[I];delete ne[H]}}delete i[L.id]}function C(L){for(const F in i){const Q=i[F];for(const ne in Q){const H=Q[ne];if(H[L.id]===void 0)continue;const P=H[L.id];for(const I in P)d(P[I].object),delete P[I];delete H[L.id]}}}function x(L){for(const F in i){const Q=i[F],ne=L.isInstancedMesh===!0?L.id:0,H=Q[ne];if(H!==void 0){for(const P in H){const I=H[P];for(const V in I)d(I[V].object),delete I[V];delete H[P]}delete Q[ne],Object.keys(Q).length===0&&delete i[F]}}}function R(){U(),r=!0,s!==a&&(s=a,c(s.object))}function U(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function xA(t,e,n){let i;function a(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function _A(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==ci&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$n&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Si&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:A,samples:w}}function SA(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new ns,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!a||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,M=v*4;let S=f.clippingState||null;l.value=S,S=d(_,u,M,h);for(let A=0;A!==M;++A)S[A]=n[A];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,_){const E=p!==null?p.length:0;let m=null;if(E!==0){if(m=l.value,_!==!0||m===null){const f=h+E*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=h;M!==E;++M,S+=4)r.copy(p[M]).applyMatrix4(v,o),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const Ca=4,$0=[.125,.215,.35,.446,.526,.582],as=20,yA=256,Jr=new tS,eg=new it;let Nf=null,Df=0,Uf=0,Lf=!1;const MA=new j;class tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=MA}=s;Nf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nf,Df,Uf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Uf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:ia,format:ci,colorSpace:Gc,depthBuffer:!1},a=ng(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(s)),this._blurMaterial=TA(s,e,n),this._ggxMaterial=EA(s,e,n)}return a}_compileMaterial(e){const n=new sa(new di,e);this._renderer.compile(n,Jr)}_sceneToCubeUV(e,n,i,a,s){const l=new Zn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor(eg),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new $o,new Y_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(eg),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const A=this._cubeSize;ks(a,S*A,M>2?A:0,A,A),p.setRenderTarget(a),f&&p.render(E,l),p.render(e,l)}p.toneMapping=h,p.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===vs||e.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ks(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,Jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;const l=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:_}=this,E=this._sizeLods[i],m=3*E*(i>_-Ca?i-_+Ca:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-n,ks(s,m,f,3*E,2*E),a.setRenderTarget(s),a.render(o,Jr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ks(e,m,f,3*E,2*E),a.setRenderTarget(e),a.render(o,Jr)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*as-1),E=s/_,m=isFinite(s)?1+Math.floor(d*E):as;m>as&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const f=[];let v=0;for(let C=0;C<as;++C){const x=C/E,R=Math.exp(-x*x/2);f.push(R),C===0?v+=R:C<m&&(v+=2*R)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-i;const S=this._sizeLods[a],A=3*S*(a>M-Ca?a-M+Ca:0),w=4*(this._cubeSize-S);ks(n,A,w,3*S,2*S),l.setRenderTarget(n),l.render(p,Jr)}}function bA(t){const e=[],n=[],i=[];let a=t;const s=t-Ca+1+$0.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);e.push(o);let l=1/o;r>t-Ca?l=$0[r-t+Ca-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,_=6,E=3,m=2,f=1,v=new Float32Array(E*_*h),M=new Float32Array(m*_*h),S=new Float32Array(f*_*h);for(let w=0;w<h;w++){const C=w%3*2/3-1,x=w>2?0:-1,R=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(R,E*_*w),M.set(u,m*_*w);const U=[w,w,w,w,w,w];S.set(U,f*_*w)}const A=new di;A.setAttribute("position",new ui(v,E)),A.setAttribute("uv",new ui(M,m)),A.setAttribute("faceIndex",new ui(S,f)),i.push(new sa(A,null)),a>Ca&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ng(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function EA(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function TA(t,e,n){const i=new Float32Array(as),a=new j(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ig(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ag(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class aS extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Q_(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $o(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Zi});s.uniforms.tEquirect.value=n;const r=new sa(a,s),o=n.minFilter;return n.minFilter===ss&&(n.minFilter=dn),new D1(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function AA(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===nf||h===af)if(e.has(u)){const _=e.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new aS(_.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),o(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,_=h===nf||h===af,E=h===vs||h===Rr;if(_||E){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new tg(t)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return _&&v&&v.height>0||E&&v&&l(v)?(i===null&&(i=new tg(t)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function o(u,h){return h===nf?u.mapping=vs:h===af&&(u.mapping=Rr),u}function l(u){let h=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function RA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&hr("WebGLRenderer: "+i+" extension not supported."),a}}}function wA(t,e,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function l(p){const u=p.attributes;for(const h in u)e.update(u[h],t.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,_=p.attributes.position;let E=0;if(_===void 0)return;if(h!==null){const v=h.array;E=h.version;for(let M=0,S=v.length;M<S;M+=3){const A=v[M+0],w=v[M+1],C=v[M+2];u.push(A,w,w,C,C,A)}}else{const v=_.array;E=_.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const A=M+0,w=M+1,C=M+2;u.push(A,w,w,C,C,A)}}const m=new(_.count>=65535?j_:W_)(u,1);m.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:d}}function CA(t,e,n){let i;function a(p){i=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,u){t.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let E=0;for(let m=0;m<h;m++)E+=u[m];n.update(E,i,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function NA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function DA(t,e,n){const i=new WeakMap,a=new Pt;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==p){let U=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",U)};var h=U;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*p),x=new V_(C,A,w,p);x.type=Si,x.needsUpdate=!0;const R=S*4;for(let L=0;L<p;L++){const F=f[L],Q=v[L],ne=M[L],H=A*w*4*L;for(let P=0;P<F.count;P++){const I=P*R;_===!0&&(a.fromBufferAttribute(F,P),C[H+I+0]=a.x,C[H+I+1]=a.y,C[H+I+2]=a.z,C[H+I+3]=0),E===!0&&(a.fromBufferAttribute(Q,P),C[H+I+4]=a.x,C[H+I+5]=a.y,C[H+I+6]=a.z,C[H+I+7]=0),m===!0&&(a.fromBufferAttribute(ne,P),C[H+I+8]=a.x,C[H+I+9]=a.y,C[H+I+10]=a.z,C[H+I+11]=ne.itemSize===4?a.w:1)}}u={count:p,texture:x,size:new rt(A,w)},i.set(o,u),o.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const E=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function UA(t,e,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function o(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:o}}const LA={[A_]:"LINEAR_TONE_MAPPING",[R_]:"REINHARD_TONE_MAPPING",[w_]:"CINEON_TONE_MAPPING",[C_]:"ACES_FILMIC_TONE_MAPPING",[D_]:"AGX_TONE_MAPPING",[U_]:"NEUTRAL_TONE_MAPPING",[N_]:"CUSTOM_TONE_MAPPING"};function OA(t,e,n,i,a,s){const r=new Ei(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new wr(e,n):void 0}),o=new Ei(e,n,{type:ia,depthBuffer:!1,stencilBuffer:!1}),l=new di;l.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const c=new w1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new sa(l,c),p=new tS(-1,1,1,-1,0,1);let u=null,h=null,_=!1,E,m=null,f=[],v=!1;this.setSize=function(M,S){r.setSize(M,S),o.setSize(M,S);for(let A=0;A<f.length;A++){const w=f[A];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){f=M,v=f.length>0&&f[0].isRenderPass===!0;const S=r.width,A=r.height;for(let w=0;w<f.length;w++){const C=f[w];C.setSize&&C.setSize(S,A)}},this.begin=function(M,S){if(_||M.toneMapping===bi&&f.length===0)return!1;if(m=S,S!==null){const A=S.width,w=S.height;(r.width!==A||r.height!==w)&&this.setSize(A,w)}return v===!1&&M.setRenderTarget(r),E=M.toneMapping,M.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(M,S){M.toneMapping=E,_=!0;let A=r,w=o;for(let C=0;C<f.length;C++){const x=f[C];if(x.enabled!==!1&&(x.render(M,w,A,S),x.needsSwap!==!1)){const R=A;A=w,w=R}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},Ye.getTransfer(u)===ct&&(c.defines.SRGB_TRANSFER="");const C=LA[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(m),M.render(d,p),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}const sS=new hn,Mh=new wr(1,1),rS=new V_,oS=new i1,lS=new Q_,sg=[],rg=[],og=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=sg[a];if(s===void 0&&(s=new Float32Array(a),sg[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=rg[e];n===void 0&&(n=new Int32Array(e),rg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Qt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Qt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Qt(n,e)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;cg.set(i),t.uniformMatrix2fv(this.addr,!1,cg),Qt(n,i)}}function HA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),Qt(n,i)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Kt(n,i))return;og.set(i),t.uniformMatrix4fv(this.addr,!1,og),Qt(n,i)}}function VA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Qt(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Qt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Qt(n,e)}}function jA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Qt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Qt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Qt(n,e)}}function KA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Mh.compareFunction=n.isReversedDepthBuffer()?Lp:Up,s=Mh):s=sS,n.setTexture2D(e||s,a)}function QA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||oS,a)}function JA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||lS,a)}function $A(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||rS,a)}function e2(t){switch(t){case 5126:return PA;case 35664:return IA;case 35665:return zA;case 35666:return BA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return jA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}function t2(t,e){t.uniform1fv(this.addr,e)}function n2(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function i2(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function a2(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function s2(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function r2(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function o2(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l2(t,e){t.uniform1iv(this.addr,e)}function c2(t,e){t.uniform2iv(this.addr,e)}function u2(t,e){t.uniform3iv(this.addr,e)}function f2(t,e){t.uniform4iv(this.addr,e)}function d2(t,e){t.uniform1uiv(this.addr,e)}function h2(t,e){t.uniform2uiv(this.addr,e)}function p2(t,e){t.uniform3uiv(this.addr,e)}function m2(t,e){t.uniform4uiv(this.addr,e)}function g2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Mh:r=sS;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,s[o])}function v2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||oS,s[r])}function x2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||lS,s[r])}function _2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Kt(i,s)||(t.uniform1iv(this.addr,s),Qt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||rS,s[r])}function S2(t){switch(t){case 5126:return t2;case 35664:return n2;case 35665:return i2;case 35666:return a2;case 35674:return s2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return l2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return h2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return v2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return _2}}class y2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e2(n.type)}}class M2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function ug(t,e){t.seq.push(e),t.map[e.id]=e}function E2(t,e,n){const i=t.name,a=i.length;for(Of.lastIndex=0;;){const s=Of.exec(i),r=Of.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){ug(n,c===void 0?new y2(o,t,e):new M2(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new b2(o),ug(n,p)),n=p}}}class cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);E2(o,l,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function fg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const T2=37297;let A2=0;function R2(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const dg=new Pe;function w2(t){Ye._getMatrix(dg,Ye.workingColorSpace,t);const e=`mat3( ${dg.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Vc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+R2(t.getShaderSource(e),o)}else return s}function C2(t,e){const n=w2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const N2={[A_]:"Linear",[R_]:"Reinhard",[w_]:"Cineon",[C_]:"ACESFilmic",[D_]:"AgX",[U_]:"Neutral",[N_]:"Custom"};function D2(t,e){const n=N2[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vl=new j;function U2(){Ye.getLuminanceCoefficients(Vl);const t=Vl.x.toFixed(4),e=Vl.y.toFixed(4),n=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function O2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function P2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function ro(t){return t!==""}function pg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(t){return t.replace(I2,B2)}const z2=new Map;function B2(t,e){let n=Fe[e];if(n===void 0){const i=z2.get(e);if(i!==void 0)n=Fe[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bh(n)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(t){return t.replace(F2,H2)}function H2(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function vg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const G2={[ac]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function V2(t){return G2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k2={[vs]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function X2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":k2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const W2={[Rr]:"ENVMAP_MODE_REFRACTION"};function j2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":W2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q2={[T_]:"ENVMAP_BLENDING_MULTIPLY",[Ib]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function Y2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":q2[t.combine]||"ENVMAP_BLENDING_NONE"}function Z2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K2(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=V2(n),c=X2(n),d=j2(n),p=Y2(n),u=Z2(n),h=L2(n),_=O2(s),E=a.createProgram();let m,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ro).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ro).join(`
`),f.length>0&&(f+=`
`)):(m=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),f=[vg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Fe.tonemapping_pars_fragment:"",n.toneMapping!==bi?D2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,C2("linearToOutputTexel",n.outputColorSpace),U2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ro).join(`
`)),r=bh(r),r=pg(r,n),r=mg(r,n),o=bh(o),o=pg(o,n),o=mg(o,n),r=gg(r),o=gg(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===C0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===C0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+r,S=v+f+o,A=fg(a,a.VERTEX_SHADER,M),w=fg(a,a.FRAGMENT_SHADER,S);a.attachShader(E,A),a.attachShader(E,w),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function C(L){if(t.debug.checkShaderErrors){const F=a.getProgramInfoLog(E)||"",Q=a.getShaderInfoLog(A)||"",ne=a.getShaderInfoLog(w)||"",H=F.trim(),P=Q.trim(),I=ne.trim();let V=!0,ee=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,E,A,w);else{const se=hg(a,A,"vertex"),le=hg(a,w,"fragment");$e("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+se+`
`+le)}else H!==""?Le("WebGLProgram: Program Info Log:",H):(P===""||I==="")&&(ee=!1);ee&&(L.diagnostics={runnable:V,programLog:H,vertexShader:{log:P,prefix:m},fragmentShader:{log:I,prefix:f}})}a.deleteShader(A),a.deleteShader(w),x=new cc(a,E),R=P2(a,E)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=a.getProgramParameter(E,T2)),U},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=A,this.fragmentShader=w,this}let Q2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $2(e),n.set(e,i)),i}}class $2{constructor(e){this.id=Q2++,this.code=e,this.usedTimes=0}}function e3(t){return t===xs||t===Fc||t===Hc}function t3(t,e,n,i,a,s){const r=new k_,o=new J2,l=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,R,U,L,F,Q){const ne=L.fog,H=F.geometry,P=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=e.get(x.envMap||P,I),ee=V&&V.mapping===fu?V.image.height:null,se=h[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ve=le!==void 0?le.length:0;let ke=0;H.morphAttributes.position!==void 0&&(ke=1),H.morphAttributes.normal!==void 0&&(ke=2),H.morphAttributes.color!==void 0&&(ke=3);let et,Ve,$,de;if(se){const xe=gi[se];et=xe.vertexShader,Ve=xe.fragmentShader}else{et=x.vertexShader,Ve=x.fragmentShader;const xe=o.getVertexShaderStage(x),mt=o.getFragmentShaderStage(x);o.update(x,xe,mt),$=xe.id,de=mt.id}const re=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,At=!!x.map,He=!!x.matcap,ot=!!V,Qe=!!x.aoMap,je=!!x.lightMap,Ct=!!x.bumpMap&&x.wireframe===!1,Nt=!!x.normalMap,It=!!x.displacementMap,Vt=!!x.emissiveMap,Rt=!!x.metalnessMap,Dt=!!x.roughnessMap,z=x.anisotropy>0,Ce=x.clearcoat>0,nt=x.dispersion>0,T=x.iridescence>0,g=x.sheen>0,O=x.transmission>0,k=z&&!!x.anisotropyMap,N=Ce&&!!x.clearcoatMap,G=Ce&&!!x.clearcoatNormalMap,ae=Ce&&!!x.clearcoatRoughnessMap,Y=T&&!!x.iridescenceMap,Z=T&&!!x.iridescenceThicknessMap,ce=g&&!!x.sheenColorMap,ye=g&&!!x.sheenRoughnessMap,fe=!!x.specularMap,ue=!!x.specularColorMap,be=!!x.specularIntensityMap,Ae=O&&!!x.transmissionMap,De=O&&!!x.thicknessMap,D=!!x.gradientMap,oe=!!x.alphaMap,K=x.alphaTest>0,ie=!!x.alphaHash,he=!!x.extensions;let J=bi;x.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(J=t.toneMapping);const Me={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:et,fragmentShader:Ve,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:re===null?t.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:He,envMap:ot,envMapMode:ot&&V.mapping,envMapCubeUVHeight:ee,aoMap:Qe,lightMap:je,bumpMap:Ct,normalMap:Nt,displacementMap:It,emissiveMap:Vt,normalMapObjectSpace:Nt&&x.normalMapType===Hb,normalMapTangentSpace:Nt&&x.normalMapType===A0,packedNormalMap:Nt&&x.normalMapType===A0&&e3(x.normalMap.format),metalnessMap:Rt,roughnessMap:Dt,anisotropy:z,anisotropyMap:k,clearcoat:Ce,clearcoatMap:N,clearcoatNormalMap:G,clearcoatRoughnessMap:ae,dispersion:nt,iridescence:T,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:g,sheenColorMap:ce,sheenRoughnessMap:ye,specularMap:fe,specularColorMap:ue,specularIntensityMap:be,transmission:O,transmissionMap:Ae,thicknessMap:De,gradientMap:D,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:K,alphaHash:ie,combine:x.combine,mapUv:At&&_(x.map.channel),aoMapUv:Qe&&_(x.aoMap.channel),lightMapUv:je&&_(x.lightMap.channel),bumpMapUv:Ct&&_(x.bumpMap.channel),normalMapUv:Nt&&_(x.normalMap.channel),displacementMapUv:It&&_(x.displacementMap.channel),emissiveMapUv:Vt&&_(x.emissiveMap.channel),metalnessMapUv:Rt&&_(x.metalnessMap.channel),roughnessMapUv:Dt&&_(x.roughnessMap.channel),anisotropyMapUv:k&&_(x.anisotropyMap.channel),clearcoatMapUv:N&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:G&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(x.sheenRoughnessMap.channel),specularMapUv:fe&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:be&&_(x.specularIntensityMap.channel),transmissionMapUv:Ae&&_(x.transmissionMap.channel),thicknessMapUv:De&&_(x.thicknessMap.channel),alphaMapUv:oe&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Nt||z),vertexNormals:!!H.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(At||oe),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||H.attributes.normal===void 0&&Nt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ne,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:J,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&Ye.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:Vt&&x.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function m(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)R.push(U),R.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(R,x),v(R,x),R.push(t.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function f(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function v(x,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function M(x){const R=h[x.type];let U;if(R){const L=gi[R];U=T1.clone(L.uniforms)}else U=x.uniforms;return U}function S(x,R){let U=d.get(R);return U!==void 0?++U.usedTimes:(U=new K2(t,R,x,a),c.push(U),d.set(R,U)),U}function A(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function n3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function i3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _g(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,_,E,m,f){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:_,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},t[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=_,v.materialVariant=r(u),v.groupOrder=E,v.renderOrder=u.renderOrder,v.z=m,v.group=f),e++,v}function l(u,h,_,E,m,f){const v=o(u,h,_,E,m,f);_.transmission>0?i.push(v):_.transparent===!0?a.push(v):n.push(v)}function c(u,h,_,E,m,f){const v=o(u,h,_,E,m,f);_.transmission>0?i.unshift(v):_.transparent===!0?a.unshift(v):n.unshift(v)}function d(u,h,_){n.length>1&&n.sort(u||i3),i.length>1&&i.sort(h||xg),a.length>1&&a.sort(h||xg),_&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=e,h=t.length;u<h;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:l,unshift:c,finish:p,sort:d}}function a3(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new _g,t.set(i,[r])):a>=s.length?(r=new _g,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function s3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function r3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let o3=0;function l3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function c3(t){const e=new s3,n=r3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const a=new j,s=new Gt,r=new Gt;function o(c){let d=0,p=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,_=0,E=0,m=0,f=0,v=0,M=0,S=0,A=0,w=0,C=0;c.sort(l3);for(let R=0,U=c.length;R<U;R++){const L=c[R],F=L.color,Q=L.intensity,ne=L.distance;let H=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xs?H=L.shadow.map.texture:H=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*Q,p+=F.g*Q,u+=F.b*Q;else if(L.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(L.sh.coefficients[P],Q);C++}else if(L.isDirectionalLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const I=L.shadow,V=n.get(L);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=L.shadow.matrix,v++}i.directional[h]=P,h++}else if(L.isSpotLight){const P=e.get(L);P.position.setFromMatrixPosition(L.matrixWorld),P.color.copy(F).multiplyScalar(Q),P.distance=ne,P.coneCos=Math.cos(L.angle),P.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),P.decay=L.decay,i.spot[E]=P;const I=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,I.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[E]=I.matrix,L.castShadow){const V=n.get(L);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,i.spotShadow[E]=V,i.spotShadowMap[E]=H,S++}E++}else if(L.isRectAreaLight){const P=e.get(L);P.color.copy(F).multiplyScalar(Q),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=P,m++}else if(L.isPointLight){const P=e.get(L);if(P.color.copy(L.color).multiplyScalar(L.intensity),P.distance=L.distance,P.decay=L.decay,L.castShadow){const I=L.shadow,V=n.get(L);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,V.shadowCameraNear=I.camera.near,V.shadowCameraFar=I.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=L.shadow.matrix,M++}i.point[_]=P,_++}else if(L.isHemisphereLight){const P=e.get(L);P.skyColor.copy(L.color).multiplyScalar(Q),P.groundColor.copy(L.groundColor).multiplyScalar(Q),i.hemi[f]=P,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==E||x.rectAreaLength!==m||x.hemiLength!==f||x.numDirectionalShadows!==v||x.numPointShadows!==M||x.numSpotShadows!==S||x.numSpotMaps!==A||x.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=h,x.pointLength=_,x.spotLength=E,x.rectAreaLength=m,x.hemiLength=f,x.numDirectionalShadows=v,x.numPointShadows=M,x.numSpotShadows=S,x.numSpotMaps=A,x.numLightProbes=C,i.version=o3++)}function l(c,d){let p=0,u=0,h=0,_=0,E=0;const m=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const M=c[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(M.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:i}}function Sg(t){const e=new c3(t),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function u3(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new Sg(t),e.set(a,[o])):s>=r.length?(o=new Sg(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const f3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,h3=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],p3=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],yg=new Gt,$r=new j,Pf=new j;function m3(t,e,n){let i=new Z_;const a=new rt,s=new rt,r=new Pt,o=new C1,l=new N1,c={},d=n.maxTextureSize,p={[ka]:Tn,[Tn]:ka,[Gi]:Gi},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:f3,fragmentShader:d3}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new di;_.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new sa(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===vb&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ac);const R=t.getRenderTarget(),U=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const Q=f!==this.type;Q&&C.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(H=>H.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,H=w.length;ne<H;ne++){const P=w[ne],I=P.shadow;if(I===void 0){Le("WebGLShadowMap:",P,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;a.copy(I.mapSize);const V=I.getFrameExtents();a.multiply(V),s.copy(I.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/V.x),a.x=s.x*V.x,I.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/V.y),a.y=s.y*V.y,I.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ee,I.map===null||Q===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===so){if(P.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Ei(a.x,a.y,{format:xs,type:ia,minFilter:dn,magFilter:dn,generateMipmaps:!1}),I.map.texture.name=P.name+".shadowMap",I.map.depthTexture=new wr(a.x,a.y,Si),I.map.depthTexture.name=P.name+".shadowMapDepth",I.map.depthTexture.format=aa,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on}else P.isPointLight?(I.map=new aS(a.x),I.map.depthTexture=new b1(a.x,Ti)):(I.map=new Ei(a.x,a.y),I.map.depthTexture=new wr(a.x,a.y,Ti)),I.map.depthTexture.name=P.name+".shadowMap",I.map.depthTexture.format=aa,this.type===ac?(I.map.depthTexture.compareFunction=ee?Lp:Up,I.map.depthTexture.minFilter=dn,I.map.depthTexture.magFilter=dn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=on,I.map.depthTexture.magFilter=on);I.camera.updateProjectionMatrix()}const se=I.map.isWebGLCubeRenderTarget?6:1;for(let le=0;le<se;le++){if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,le),t.clear();else{le===0&&(t.setRenderTarget(I.map),t.clear());const ve=I.getViewport(le);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),F.viewport(r)}if(P.isPointLight){const ve=I.camera,ke=I.matrix,et=P.distance||ve.far;et!==ve.far&&(ve.far=et,ve.updateProjectionMatrix()),$r.setFromMatrixPosition(P.matrixWorld),ve.position.copy($r),Pf.copy(ve.position),Pf.add(h3[le]),ve.up.copy(p3[le]),ve.lookAt(Pf),ve.updateMatrixWorld(),ke.makeTranslation(-$r.x,-$r.y,-$r.z),yg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),I._frustum.setFromProjectionMatrix(yg,ve.coordinateSystem,ve.reversedDepth)}else I.updateMatrices(P);i=I.getFrustum(),S(C,x,I.camera,P,this.type)}I.isPointLightShadow!==!0&&this.type===so&&v(I,x),I.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(R,U,L)};function v(w,C){const x=e.update(E);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ei(a.x,a.y,{format:xs,type:ia})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,E,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,x,h,E,null)}function M(w,C,x,R){let U=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)U=L;else if(U=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=U.uuid,Q=C.uuid;let ne=c[F];ne===void 0&&(ne={},c[F]=ne);let H=ne[Q];H===void 0&&(H=U.clone(),ne[Q]=H,C.addEventListener("dispose",A)),U=H}if(U.visible=C.visible,U.wireframe=C.wireframe,R===so?U.side=C.shadowSide!==null?C.shadowSide:C.side:U.side=C.shadowSide!==null?C.shadowSide:p[C.side],U.alphaMap=C.alphaMap,U.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,U.map=C.map,U.clipShadows=C.clipShadows,U.clippingPlanes=C.clippingPlanes,U.clipIntersection=C.clipIntersection,U.displacementMap=C.displacementMap,U.displacementScale=C.displacementScale,U.displacementBias=C.displacementBias,U.wireframeLinewidth=C.wireframeLinewidth,U.linewidth=C.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=t.properties.get(U);F.light=x}return U}function S(w,C,x,R,U){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===so)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const Q=e.update(w),ne=w.material;if(Array.isArray(ne)){const H=Q.groups;for(let P=0,I=H.length;P<I;P++){const V=H[P],ee=ne[V.materialIndex];if(ee&&ee.visible){const se=M(w,ee,R,U);w.onBeforeShadow(t,w,C,x,Q,se,V),t.renderBufferDirect(x,null,Q,se,w,V),w.onAfterShadow(t,w,C,x,Q,se,V)}}}else if(ne.visible){const H=M(w,ne,R,U);w.onBeforeShadow(t,w,C,x,Q,H,null),t.renderBufferDirect(x,null,Q,H,w,null),w.onAfterShadow(t,w,C,x,Q,H,null)}}const F=w.children;for(let Q=0,ne=F.length;Q<ne;Q++)S(F[Q],C,x,R,U)}function A(w){w.target.removeEventListener("dispose",A);for(const x in c){const R=c[x],U=w.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function g3(t,e){function n(){let D=!1;const oe=new Pt;let K=null;const ie=new Pt(0,0,0,0);return{setMask:function(he){K!==he&&!D&&(t.colorMask(he,he,he,he),K=he)},setLocked:function(he){D=he},setClear:function(he,J,Me,xe,mt){mt===!0&&(he*=xe,J*=xe,Me*=xe),oe.set(he,J,Me,xe),ie.equals(oe)===!1&&(t.clearColor(he,J,Me,xe),ie.copy(oe))},reset:function(){D=!1,K=null,ie.set(-1,0,0,0)}}}function i(){let D=!1,oe=!1,K=null,ie=null,he=null;return{setReversed:function(J){if(oe!==J){const Me=e.get("EXT_clip_control");J?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),oe=J;const xe=he;he=null,this.setClear(xe)}},getReversed:function(){return oe},setTest:function(J){J?re(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(J){K!==J&&!D&&(t.depthMask(J),K=J)},setFunc:function(J){if(oe&&(J=Kb[J]),ie!==J){switch(J){case Pd:t.depthFunc(t.NEVER);break;case Id:t.depthFunc(t.ALWAYS);break;case zd:t.depthFunc(t.LESS);break;case Ar:t.depthFunc(t.LEQUAL);break;case Bd:t.depthFunc(t.EQUAL);break;case Fd:t.depthFunc(t.GEQUAL);break;case Hd:t.depthFunc(t.GREATER);break;case Gd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=J}},setLocked:function(J){D=J},setClear:function(J){he!==J&&(he=J,oe&&(J=1-J),t.clearDepth(J))},reset:function(){D=!1,K=null,ie=null,he=null,oe=!1}}}function a(){let D=!1,oe=null,K=null,ie=null,he=null,J=null,Me=null,xe=null,mt=null;return{setTest:function(tt){D||(tt?re(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(tt){oe!==tt&&!D&&(t.stencilMask(tt),oe=tt)},setFunc:function(tt,pn,yt){(K!==tt||ie!==pn||he!==yt)&&(t.stencilFunc(tt,pn,yt),K=tt,ie=pn,he=yt)},setOp:function(tt,pn,yt){(J!==tt||Me!==pn||xe!==yt)&&(t.stencilOp(tt,pn,yt),J=tt,Me=pn,xe=yt)},setLocked:function(tt){D=tt},setClear:function(tt){mt!==tt&&(t.clearStencil(tt),mt=tt)},reset:function(){D=!1,oe=null,K=null,ie=null,he=null,J=null,Me=null,xe=null,mt=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],E=null,m=!1,f=null,v=null,M=null,S=null,A=null,w=null,C=null,x=new it(0,0,0),R=0,U=!1,L=null,F=null,Q=null,ne=null,H=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,V=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),I=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),I=V>=2);let se=null,le={};const ve=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),et=new Pt().fromArray(ve),Ve=new Pt().fromArray(ke);function $(D,oe,K,ie){const he=new Uint8Array(4),J=t.createTexture();t.bindTexture(D,J),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<K;Me++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(oe+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return J}const de={};de[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),re(t.DEPTH_TEST),r.setFunc(Ar),Ct(!1),Nt(b0),re(t.CULL_FACE),Qe(Zi);function re(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Ne(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Oe(D,oe){return u[D]!==oe?(t.bindFramebuffer(D,oe),u[D]=oe,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=oe),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function we(D,oe){let K=_,ie=!1;if(D){K=h.get(oe),K===void 0&&(K=[],h.set(oe,K));const he=D.textures;if(K.length!==he.length||K[0]!==t.COLOR_ATTACHMENT0){for(let J=0,Me=he.length;J<Me;J++)K[J]=t.COLOR_ATTACHMENT0+J;K.length=he.length,ie=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ie=!0);ie&&t.drawBuffers(K)}function At(D){return E!==D?(t.useProgram(D),E=D,!0):!1}const He={[is]:t.FUNC_ADD,[_b]:t.FUNC_SUBTRACT,[Sb]:t.FUNC_REVERSE_SUBTRACT};He[yb]=t.MIN,He[Mb]=t.MAX;const ot={[bb]:t.ZERO,[Eb]:t.ONE,[Tb]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[Db]:t.SRC_ALPHA_SATURATE,[Cb]:t.DST_COLOR,[Rb]:t.DST_ALPHA,[Ab]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[Nb]:t.ONE_MINUS_DST_COLOR,[wb]:t.ONE_MINUS_DST_ALPHA,[Ub]:t.CONSTANT_COLOR,[Lb]:t.ONE_MINUS_CONSTANT_COLOR,[Ob]:t.CONSTANT_ALPHA,[Pb]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,oe,K,ie,he,J,Me,xe,mt,tt){if(D===Zi){m===!0&&(Ne(t.BLEND),m=!1);return}if(m===!1&&(re(t.BLEND),m=!0),D!==xb){if(D!==f||tt!==U){if((v!==is||A!==is)&&(t.blendEquation(t.FUNC_ADD),v=is,A=is),tt)switch(D){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.ONE,t.ONE);break;case E0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case T0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",D);break}else switch(D){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case E0:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case T0:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",D);break}M=null,S=null,w=null,C=null,x.set(0,0,0),R=0,f=D,U=tt}return}he=he||oe,J=J||K,Me=Me||ie,(oe!==v||he!==A)&&(t.blendEquationSeparate(He[oe],He[he]),v=oe,A=he),(K!==M||ie!==S||J!==w||Me!==C)&&(t.blendFuncSeparate(ot[K],ot[ie],ot[J],ot[Me]),M=K,S=ie,w=J,C=Me),(xe.equals(x)===!1||mt!==R)&&(t.blendColor(xe.r,xe.g,xe.b,mt),x.copy(xe),R=mt),f=D,U=!1}function je(D,oe){D.side===Gi?Ne(t.CULL_FACE):re(t.CULL_FACE);let K=D.side===Tn;oe&&(K=!K),Ct(K),D.blending===dr&&D.transparent===!1?Qe(Zi):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const ie=D.stencilWrite;o.setTest(ie),ie&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(D){L!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),L=D)}function Nt(D){D!==mb?(re(t.CULL_FACE),D!==F&&(D===b0?t.cullFace(t.BACK):D===gb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),F=D}function It(D){D!==Q&&(I&&t.lineWidth(D),Q=D)}function Vt(D,oe,K){D?(re(t.POLYGON_OFFSET_FILL),(ne!==oe||H!==K)&&(ne=oe,H=K,r.getReversed()&&(oe=-oe),t.polygonOffset(oe,K))):Ne(t.POLYGON_OFFSET_FILL)}function Rt(D){D?re(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function Dt(D){D===void 0&&(D=t.TEXTURE0+P-1),se!==D&&(t.activeTexture(D),se=D)}function z(D,oe,K){K===void 0&&(se===null?K=t.TEXTURE0+P-1:K=se);let ie=le[K];ie===void 0&&(ie={type:void 0,texture:void 0},le[K]=ie),(ie.type!==D||ie.texture!==oe)&&(se!==K&&(t.activeTexture(K),se=K),t.bindTexture(D,oe||de[D]),ie.type=D,ie.texture=oe)}function Ce(){const D=le[se];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function nt(){try{t.compressedTexImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function g(){try{t.texSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function O(){try{t.texSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function N(){try{t.compressedTexSubImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function G(){try{t.texStorage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function ae(){try{t.texStorage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function Y(){try{t.texImage2D(...arguments)}catch(D){$e("WebGLState:",D)}}function Z(){try{t.texImage3D(...arguments)}catch(D){$e("WebGLState:",D)}}function ce(D){return p[D]!==void 0?p[D]:t.getParameter(D)}function ye(D,oe){p[D]!==oe&&(t.pixelStorei(D,oe),p[D]=oe)}function fe(D){et.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function ue(D){Ve.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ve.copy(D))}function be(D,oe){let K=c.get(oe);K===void 0&&(K=new WeakMap,c.set(oe,K));let ie=K.get(D);ie===void 0&&(ie=t.getUniformBlockIndex(oe,D.name),K.set(D,ie))}function Ae(D,oe){const ie=c.get(oe).get(D);l.get(oe)!==ie&&(t.uniformBlockBinding(oe,ie,D.__bindingPointIndex),l.set(oe,ie))}function De(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},se=null,le={},u={},h=new WeakMap,_=[],E=null,m=!1,f=null,v=null,M=null,S=null,A=null,w=null,C=null,x=new it(0,0,0),R=0,U=!1,L=null,F=null,Q=null,ne=null,H=null,et.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:re,disable:Ne,bindFramebuffer:Oe,drawBuffers:we,useProgram:At,setBlending:Qe,setMaterial:je,setFlipSided:Ct,setCullFace:Nt,setLineWidth:It,setPolygonOffset:Vt,setScissorTest:Rt,activeTexture:Dt,bindTexture:z,unbindTexture:Ce,compressedTexImage2D:nt,compressedTexImage3D:T,texImage2D:Y,texImage3D:Z,pixelStorei:ye,getParameter:ce,updateUBOMapping:be,uniformBlockBinding:Ae,texStorage2D:G,texStorage3D:ae,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:N,scissor:fe,viewport:ue,reset:De}}function v3(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,g){return _?new OffscreenCanvas(T,g):Xc("canvas")}function m(T,g,O){let k=1;const N=nt(T);if((N.width>O||N.height>O)&&(k=O/Math.max(N.width,N.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(k*N.width),ae=Math.floor(k*N.height);u===void 0&&(u=E(G,ae));const Y=g?E(G,ae):u;return Y.width=G,Y.height=ae,Y.getContext("2d").drawImage(T,0,0,G,ae),Le("WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+G+"x"+ae+")."),Y}else return"data"in T&&Le("WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),T;return T}function f(T){return T.generateMipmaps}function v(T){t.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(T,g,O,k,N,G=!1){if(T!==null){if(t[T]!==void 0)return t[T];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae;k&&(ae=e.get("EXT_texture_norm16"),ae||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===t.RED&&(O===t.FLOAT&&(Y=t.R32F),O===t.HALF_FLOAT&&(Y=t.R16F),O===t.UNSIGNED_BYTE&&(Y=t.R8),O===t.UNSIGNED_SHORT&&ae&&(Y=ae.R16_EXT),O===t.SHORT&&ae&&(Y=ae.R16_SNORM_EXT)),g===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.R8UI),O===t.UNSIGNED_SHORT&&(Y=t.R16UI),O===t.UNSIGNED_INT&&(Y=t.R32UI),O===t.BYTE&&(Y=t.R8I),O===t.SHORT&&(Y=t.R16I),O===t.INT&&(Y=t.R32I)),g===t.RG&&(O===t.FLOAT&&(Y=t.RG32F),O===t.HALF_FLOAT&&(Y=t.RG16F),O===t.UNSIGNED_BYTE&&(Y=t.RG8),O===t.UNSIGNED_SHORT&&ae&&(Y=ae.RG16_EXT),O===t.SHORT&&ae&&(Y=ae.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RG8UI),O===t.UNSIGNED_SHORT&&(Y=t.RG16UI),O===t.UNSIGNED_INT&&(Y=t.RG32UI),O===t.BYTE&&(Y=t.RG8I),O===t.SHORT&&(Y=t.RG16I),O===t.INT&&(Y=t.RG32I)),g===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),O===t.UNSIGNED_INT&&(Y=t.RGB32UI),O===t.BYTE&&(Y=t.RGB8I),O===t.SHORT&&(Y=t.RGB16I),O===t.INT&&(Y=t.RGB32I)),g===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),O===t.UNSIGNED_INT&&(Y=t.RGBA32UI),O===t.BYTE&&(Y=t.RGBA8I),O===t.SHORT&&(Y=t.RGBA16I),O===t.INT&&(Y=t.RGBA32I)),g===t.RGB&&(O===t.UNSIGNED_SHORT&&ae&&(Y=ae.RGB16_EXT),O===t.SHORT&&ae&&(Y=ae.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),g===t.RGBA){const Z=G?Vc:Ye.getTransfer(N);O===t.FLOAT&&(Y=t.RGBA32F),O===t.HALF_FLOAT&&(Y=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Y=Z===ct?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ae&&(Y=ae.RGBA16_EXT),O===t.SHORT&&ae&&(Y=ae.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function A(T,g){let O;return T?g===null||g===Ti||g===zo?O=t.DEPTH24_STENCIL8:g===Si?O=t.DEPTH32F_STENCIL8:g===Io&&(O=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===zo?O=t.DEPTH_COMPONENT24:g===Si?O=t.DEPTH_COMPONENT32F:g===Io&&(O=t.DEPTH_COMPONENT16),O}function w(T,g){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==dn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){const g=T.target;g.removeEventListener("dispose",C),R(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function x(T){const g=T.target;g.removeEventListener("dispose",x),L(g)}function R(T){const g=i.get(T);if(g.__webglInit===void 0)return;const O=T.source,k=h.get(O);if(k){const N=k[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&U(T),Object.keys(k).length===0&&h.delete(O)}i.remove(T)}function U(T){const g=i.get(T);t.deleteTexture(g.__webglTexture);const O=T.source,k=h.get(O);delete k[g.__cacheKey],r.memory.textures--}function L(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let N=0;N<g.__webglFramebuffer[k].length;N++)t.deleteFramebuffer(g.__webglFramebuffer[k][N]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let k=0,N=O.length;k<N;k++){const G=i.get(O[k]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(O[k])}i.remove(T)}let F=0;function Q(){F=0}function ne(){return F}function H(T){F=T}function P(){const T=F;return T>=a.maxTextures&&Le("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),F+=1,T}function I(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function V(T,g){const O=i.get(T);if(T.isVideoTexture&&z(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const k=T.image;if(k===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+g)}function ee(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ne(O,T,g);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+g)}function se(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ne(O,T,g);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+g)}function le(T,g){const O=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&O.__version!==T.version){Oe(O,T,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+g)}const ve={[Vd]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},ke={[on]:t.NEAREST,[Bb]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[dn]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},et={[Gb]:t.NEVER,[jb]:t.ALWAYS,[Vb]:t.LESS,[Up]:t.LEQUAL,[kb]:t.EQUAL,[Lp]:t.GEQUAL,[Xb]:t.GREATER,[Wb]:t.NOTEQUAL};function Ve(T,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===dn||g.magFilter===sf||g.magFilter===xl||g.magFilter===ss||g.minFilter===dn||g.minFilter===sf||g.minFilter===xl||g.minFilter===ss)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ve[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ve[g.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ve[g.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ke[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ke[g.minFilter]),g.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===on||g.minFilter!==xl&&g.minFilter!==ss||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function $(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));const k=g.source;let N=h.get(k);N===void 0&&(N={},h.set(k,N));const G=I(g);if(G!==T.__cacheKey){N[G]===void 0&&(N[G]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,O=!0),N[G].usedTimes++;const ae=N[T.__cacheKey];ae!==void 0&&(N[T.__cacheKey].usedTimes--,ae.usedTimes===0&&U(g)),T.__cacheKey=G,T.__webglTexture=N[G].texture}return O}function de(T,g,O){return Math.floor(Math.floor(T/O)/g)}function re(T,g,O,k){const G=T.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,O,k,g.data);else{G.sort((ye,fe)=>ye.start-fe.start);let ae=0;for(let ye=1;ye<G.length;ye++){const fe=G[ae],ue=G[ye],be=fe.start+fe.count,Ae=de(ue.start,g.width,4),De=de(fe.start,g.width,4);ue.start<=be+1&&Ae===De&&de(ue.start+ue.count-1,g.width,4)===Ae?fe.count=Math.max(fe.count,ue.start+ue.count-fe.start):(++ae,G[ae]=ue)}G.length=ae+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ye=0,fe=G.length;ye<fe;ye++){const ue=G[ye],be=Math.floor(ue.start/4),Ae=Math.ceil(ue.count/4),De=be%g.width,D=Math.floor(be/g.width),oe=Ae,K=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,De),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,De,D,oe,K,O,k,g.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Ne(T,g,O){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const N=$(T,g),G=g.source;n.bindTexture(k,T.__webglTexture,t.TEXTURE0+O);const ae=i.get(G);if(G.version!==ae.__version||N===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const K=Ye.getPrimaries(Ye.workingColorSpace),ie=g.colorSpace===ba?null:Ye.getPrimaries(g.colorSpace),he=g.colorSpace===ba||K===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let Z=m(g.image,!1,a.maxTextureSize);Z=Ce(g,Z);const ce=s.convert(g.format,g.colorSpace),ye=s.convert(g.type);let fe=S(g.internalFormat,ce,ye,g.normalized,g.colorSpace,g.isVideoTexture);Ve(k,g);let ue;const be=g.mipmaps,Ae=g.isVideoTexture!==!0,De=ae.__version===void 0||N===!0,D=G.dataReady,oe=w(g,Z);if(g.isDepthTexture)fe=A(g.format===rs,g.type),De&&(Ae?n.texStorage2D(t.TEXTURE_2D,1,fe,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,fe,Z.width,Z.height,0,ce,ye,null));else if(g.isDataTexture)if(be.length>0){Ae&&De&&n.texStorage2D(t.TEXTURE_2D,oe,fe,be[0].width,be[0].height);for(let K=0,ie=be.length;K<ie;K++)ue=be[K],Ae?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ue.width,ue.height,ce,ye,ue.data):n.texImage2D(t.TEXTURE_2D,K,fe,ue.width,ue.height,0,ce,ye,ue.data);g.generateMipmaps=!1}else Ae?(De&&n.texStorage2D(t.TEXTURE_2D,oe,fe,Z.width,Z.height),D&&re(g,Z,ce,ye)):n.texImage2D(t.TEXTURE_2D,0,fe,Z.width,Z.height,0,ce,ye,Z.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ae&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,fe,be[0].width,be[0].height,Z.depth);for(let K=0,ie=be.length;K<ie;K++)if(ue=be[K],g.format!==ci)if(ce!==null)if(Ae){if(D)if(g.layerUpdates.size>0){const he=J0(ue.width,ue.height,g.format,g.type);for(const J of g.layerUpdates){const Me=ue.data.subarray(J*he/ue.data.BYTES_PER_ELEMENT,(J+1)*he/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,J,ue.width,ue.height,1,ce,Me)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ue.width,ue.height,Z.depth,ce,ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,fe,ue.width,ue.height,Z.depth,0,ue.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ue.width,ue.height,Z.depth,ce,ye,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,fe,ue.width,ue.height,Z.depth,0,ce,ye,ue.data)}else{Ae&&De&&n.texStorage2D(t.TEXTURE_2D,oe,fe,be[0].width,be[0].height);for(let K=0,ie=be.length;K<ie;K++)ue=be[K],g.format!==ci?ce!==null?Ae?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,K,fe,ue.width,ue.height,0,ue.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ue.width,ue.height,ce,ye,ue.data):n.texImage2D(t.TEXTURE_2D,K,fe,ue.width,ue.height,0,ce,ye,ue.data)}else if(g.isDataArrayTexture)if(Ae){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,fe,Z.width,Z.height,Z.depth),D)if(g.layerUpdates.size>0){const K=J0(Z.width,Z.height,g.format,g.type);for(const ie of g.layerUpdates){const he=Z.data.subarray(ie*K/Z.data.BYTES_PER_ELEMENT,(ie+1)*K/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ie,Z.width,Z.height,1,ce,ye,he)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,ye,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,Z.width,Z.height,Z.depth,0,ce,ye,Z.data);else if(g.isData3DTexture)Ae?(De&&n.texStorage3D(t.TEXTURE_3D,oe,fe,Z.width,Z.height,Z.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,ye,Z.data)):n.texImage3D(t.TEXTURE_3D,0,fe,Z.width,Z.height,Z.depth,0,ce,ye,Z.data);else if(g.isFramebufferTexture){if(De)if(Ae)n.texStorage2D(t.TEXTURE_2D,oe,fe,Z.width,Z.height);else{let K=Z.width,ie=Z.height;for(let he=0;he<oe;he++)n.texImage2D(t.TEXTURE_2D,he,fe,K,ie,0,ce,ye,null),K>>=1,ie>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const K=t.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),p.add(g),K.onpaint=ie=>{const he=ie.changedElements;for(const J of p)he.includes(J.image)&&(J.needsUpdate=!0)},K.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{const he=t.RGBA,J=t.RGBA,Me=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,he,J,Me,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ae&&De){const K=nt(be[0]);n.texStorage2D(t.TEXTURE_2D,oe,fe,K.width,K.height)}for(let K=0,ie=be.length;K<ie;K++)ue=be[K],Ae?D&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ce,ye,ue):n.texImage2D(t.TEXTURE_2D,K,fe,ce,ye,ue);g.generateMipmaps=!1}else if(Ae){if(De){const K=nt(Z);n.texStorage2D(t.TEXTURE_2D,oe,fe,K.width,K.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,ye,Z)}else n.texImage2D(t.TEXTURE_2D,0,fe,ce,ye,Z);f(g)&&v(k),ae.__version=G.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Oe(T,g,O){if(g.image.length!==6)return;const k=$(T,g),N=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+O);const G=i.get(N);if(N.version!==G.__version||k===!0){n.activeTexture(t.TEXTURE0+O);const ae=Ye.getPrimaries(Ye.workingColorSpace),Y=g.colorSpace===ba?null:Ye.getPrimaries(g.colorSpace),Z=g.colorSpace===ba||ae===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ce=g.isCompressedTexture||g.image[0].isCompressedTexture,ye=g.image[0]&&g.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!ce&&!ye?fe[J]=m(g.image[J],!0,a.maxCubemapSize):fe[J]=ye?g.image[J].image:g.image[J],fe[J]=Ce(g,fe[J]);const ue=fe[0],be=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type),De=S(g.internalFormat,be,Ae,g.normalized,g.colorSpace),D=g.isVideoTexture!==!0,oe=G.__version===void 0||k===!0,K=N.dataReady;let ie=w(g,ue);Ve(t.TEXTURE_CUBE_MAP,g);let he;if(ce){D&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,De,ue.width,ue.height);for(let J=0;J<6;J++){he=fe[J].mipmaps;for(let Me=0;Me<he.length;Me++){const xe=he[Me];g.format!==ci?be!==null?D?K&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,xe.width,xe.height,be,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,De,xe.width,xe.height,0,xe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,0,0,xe.width,xe.height,be,Ae,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me,De,xe.width,xe.height,0,be,Ae,xe.data)}}}else{if(he=g.mipmaps,D&&oe){he.length>0&&ie++;const J=nt(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ie,De,J.width,J.height)}for(let J=0;J<6;J++)if(ye){D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,be,Ae,fe[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,fe[J].width,fe[J].height,0,be,Ae,fe[J].data);for(let Me=0;Me<he.length;Me++){const mt=he[Me].image[J].image;D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,mt.width,mt.height,be,Ae,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,De,mt.width,mt.height,0,be,Ae,mt.data)}}else{D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,Ae,fe[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,be,Ae,fe[J]);for(let Me=0;Me<he.length;Me++){const xe=he[Me];D?K&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,0,0,be,Ae,xe.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,Me+1,De,be,Ae,xe.image[J])}}}f(g)&&v(t.TEXTURE_CUBE_MAP),G.__version=N.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function we(T,g,O,k,N,G){const ae=s.convert(O.format,O.colorSpace),Y=s.convert(O.type),Z=S(O.internalFormat,ae,Y,O.normalized,O.colorSpace),ce=i.get(g),ye=i.get(O);if(ye.__renderTarget=g,!ce.__hasExternalTextures){const fe=Math.max(1,g.width>>G),ue=Math.max(1,g.height>>G);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,G,Z,fe,ue,g.depth,0,ae,Y,null):n.texImage2D(N,G,Z,fe,ue,0,ae,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,N,ye.__webglTexture,0,Rt(g)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,N,ye.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(T,g,O){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){const k=g.depthTexture,N=k&&k.isDepthTexture?k.type:null,G=A(g.stencilBuffer,N),ae=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Dt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Rt(g),G,g.width,g.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,Rt(g),G,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,G,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,T)}else{const k=g.textures;for(let N=0;N<k.length;N++){const G=k[N],ae=s.convert(G.format,G.colorSpace),Y=s.convert(G.type),Z=S(G.internalFormat,ae,Y,G.normalized,G.colorSpace);Dt(g)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Rt(g),Z,g.width,g.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,Rt(g),Z,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(T,g,O){const k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const N=i.get(g.depthTexture);if(N.__renderTarget=g,(!N.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(N.__webglInit===void 0&&(N.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),N.__webglTexture===void 0){N.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g.depthTexture);const ce=s.convert(g.depthTexture.format),ye=s.convert(g.depthTexture.type);let fe;g.depthTexture.format===aa?fe=t.DEPTH_COMPONENT24:g.depthTexture.format===rs&&(fe=t.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,fe,g.width,g.height,0,ce,ye,null)}}else V(g.depthTexture,0);const G=N.__webglTexture,ae=Rt(g),Y=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,Z=g.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===aa)Dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Y,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,Z,Y,G,0);else if(g.depthTexture.format===rs)Dt(g)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,Y,G,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,Z,Y,G,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ot(T){const g=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const N=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",N)};k.addEventListener("dispose",N),g.__depthDisposeCallback=N}g.__boundDepthTexture=k}if(T.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)He(g.__webglFramebuffer[k],T,k);else{const k=T.texture.mipmaps;k&&k.length>0?He(g.__webglFramebuffer[0],T,0):He(g.__webglFramebuffer,T,0)}else if(O){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),At(g.__webglDepthbuffer[k],T,!1);else{const N=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,G)}}else{const k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),At(g.__webglDepthbuffer,T,!1);else{const N=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,N,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(T,g,O){const k=i.get(T);g!==void 0&&we(k.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&ot(T)}function je(T){const g=T.texture,O=i.get(T),k=i.get(g);T.addEventListener("dispose",x);const N=T.textures,G=T.isWebGLCubeRenderTarget===!0,ae=N.length>1;if(ae||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,r.memory.textures++),G){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let Z=0;Z<g.mipmaps.length;Z++)O.__webglFramebuffer[Y][Z]=t.createFramebuffer()}else O.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)O.__webglFramebuffer[Y]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ae)for(let Y=0,Z=N.length;Y<Z;Y++){const ce=i.get(N[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),r.memory.textures++)}if(T.samples>0&&Dt(T)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<N.length;Y++){const Z=N[Y];O.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ce=s.convert(Z.format,Z.colorSpace),ye=s.convert(Z.type),fe=S(Z.internalFormat,ce,ye,Z.normalized,Z.colorSpace,T.isXRRenderTarget===!0),ue=Rt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,fe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),At(O.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)we(O.__webglFramebuffer[Y][Z],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else we(O.__webglFramebuffer[Y],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(g)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){for(let Y=0,Z=N.length;Y<Z;Y++){const ce=N[Y],ye=i.get(ce);let fe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,ye.__webglTexture),Ve(fe,ce),we(O.__webglFramebuffer,T,ce,t.COLOR_ATTACHMENT0+Y,fe,0),f(ce)&&v(fe)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,k.__webglTexture),Ve(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let Z=0;Z<g.mipmaps.length;Z++)we(O.__webglFramebuffer[Z],T,g,t.COLOR_ATTACHMENT0,Y,Z);else we(O.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,Y,0);f(g)&&v(Y),n.unbindTexture()}T.depthBuffer&&ot(T)}function Ct(T){const g=T.textures;for(let O=0,k=g.length;O<k;O++){const N=g[O];if(f(N)){const G=M(T),ae=i.get(N).__webglTexture;n.bindTexture(G,ae),v(G),n.unbindTexture()}}}const Nt=[],It=[];function Vt(T){if(T.samples>0){if(Dt(T)===!1){const g=T.textures,O=T.width,k=T.height;let N=t.COLOR_BUFFER_BIT;const G=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(T),Y=g.length>1;if(Y)for(let ce=0;ce<g.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);const Z=T.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ce=0;ce<g.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const ye=i.get(g[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ye,0)}t.blitFramebuffer(0,0,O,k,0,0,O,k,N,t.NEAREST),l===!0&&(Nt.length=0,It.length=0,Nt.push(t.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Nt.push(G),It.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,It)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<g.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);const ye=i.get(g[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Rt(T){return Math.min(a.maxSamples,T.samples)}function Dt(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(T){const g=r.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function Ce(T,g){const O=T.colorSpace,k=T.format,N=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Gc&&O!==ba&&(Ye.getTransfer(O)===ct?(k!==ci||N!==$n)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),g}function nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=Q,this.getTextureUnits=ne,this.setTextureUnits=H,this.setTexture2D=V,this.setTexture2DArray=ee,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=Qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function x3(t,e){function n(i,a=ba){let s;const r=Ye.getTransfer(a);if(i===$n)return t.UNSIGNED_BYTE;if(i===Rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===I_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===z_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===O_)return t.BYTE;if(i===P_)return t.SHORT;if(i===Io)return t.UNSIGNED_SHORT;if(i===Ap)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===ia)return t.HALF_FLOAT;if(i===B_)return t.ALPHA;if(i===F_)return t.RGB;if(i===ci)return t.RGBA;if(i===aa)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===H_)return t.RED;if(i===Cp)return t.RED_INTEGER;if(i===xs)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Dp)return t.RGBA_INTEGER;if(i===sc||i===rc||i===oc||i===lc)if(r===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xd||i===Wd||i===jd||i===qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===Zd||i===Kd||i===Qd||i===Jd||i===Fc||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===Zd)return r===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kd)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qd)return s.COMPRESSED_R11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===eh||i===th||i===nh||i===ih||i===ah||i===sh||i===rh||i===oh||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===eh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===th)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ih)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hh)return r===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ph||i===mh||i===gh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ph)return r===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vh||i===xh||i===Hc||i===_h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class y3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new J_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:_3,fragmentShader:S3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sa(new hu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M3 extends Ts{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,p=null,u=null,h=null,_=null;const E=typeof XRWebGLBinding<"u",m=new y3,f={},v=n.getContextAttributes();let M=null,S=null;const A=[],w=[],C=new rt;let x=null;const R=new Zn;R.viewport=new Pt;const U=new Zn;U.viewport=new Pt;const L=[R,U],F=new U1;let Q=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let de=A[$];return de===void 0&&(de=new hf,A[$]=de),de.getTargetRaySpace()},this.getControllerGrip=function($){let de=A[$];return de===void 0&&(de=new hf,A[$]=de),de.getGripSpace()},this.getHand=function($){let de=A[$];return de===void 0&&(de=new hf,A[$]=de),de.getHandSpace()};function H($){const de=w.indexOf($.inputSource);if(de===-1)return;const re=A[de];re!==void 0&&(re.update($.inputSource,$.frame,c||r),re.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",I);for(let $=0;$<A.length;$++){const de=w[$];de!==null&&(w[$]=null,A[$].disconnect(de))}Q=null,ne=null,m.reset();for(const $ in f)delete f[$];e.setRenderTarget(M),h=null,u=null,p=null,a=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",P),a.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Ne=null,Oe=null;v.depth&&(Oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=v.stencil?rs:aa,Ne=v.stencil?zo:Ti);const we={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(we),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ei(u.textureWidth,u.textureHeight,{format:ci,type:$n,depthTexture:new wr(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,re),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ei(h.framebufferWidth,h.framebufferHeight,{format:ci,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Ve.setContext(a),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I($){for(let de=0;de<$.removed.length;de++){const re=$.removed[de],Ne=w.indexOf(re);Ne>=0&&(w[Ne]=null,A[Ne].disconnect(re))}for(let de=0;de<$.added.length;de++){const re=$.added[de];let Ne=w.indexOf(re);if(Ne===-1){for(let we=0;we<A.length;we++)if(we>=w.length){w.push(re),Ne=we;break}else if(w[we]===null){w[we]=re,Ne=we;break}if(Ne===-1)break}const Oe=A[Ne];Oe&&Oe.connect(re)}}const V=new j,ee=new j;function se($,de,re){V.setFromMatrixPosition(de.matrixWorld),ee.setFromMatrixPosition(re.matrixWorld);const Ne=V.distanceTo(ee),Oe=de.projectionMatrix.elements,we=re.projectionMatrix.elements,At=Oe[14]/(Oe[10]-1),He=Oe[14]/(Oe[10]+1),ot=(Oe[9]+1)/Oe[5],Qe=(Oe[9]-1)/Oe[5],je=(Oe[8]-1)/Oe[0],Ct=(we[8]+1)/we[0],Nt=At*je,It=At*Ct,Vt=Ne/(-je+Ct),Rt=Vt*-je;if(de.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Rt),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Dt=At+Vt,z=He+Vt,Ce=Nt-Rt,nt=It+(Ne-Rt),T=ot*He/z*Dt,g=Qe*He/z*Dt;$.projectionMatrix.makePerspective(Ce,nt,T,g,Dt,z),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function le($,de){de===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(de.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let de=$.near,re=$.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(re=m.depthFar)),F.near=U.near=R.near=de,F.far=U.far=R.far=re,(Q!==F.near||ne!==F.far)&&(a.updateRenderState({depthNear:F.near,depthFar:F.far}),Q=F.near,ne=F.far),F.layers.mask=$.layers.mask|6,R.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const Ne=$.parent,Oe=F.cameras;le(F,Ne);for(let we=0;we<Oe.length;we++)le(Oe[we],Ne);Oe.length===2?se(F,R,U):F.projectionMatrix.copy(R.projectionMatrix),ve($,F,Ne)};function ve($,de,re){re===null?$.matrix.copy(de.matrixWorld):($.matrix.copy(re.matrixWorld),$.matrix.invert(),$.matrix.multiply(de.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(de.projectionMatrix),$.projectionMatrixInverse.copy(de.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Sh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return f[$]};let ke=null;function et($,de){if(d=de.getViewerPose(c||r),_=de,d!==null){const re=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ne=!1;re.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let He=0;He<re.length;He++){const ot=re[He];let Qe=null;if(h!==null)Qe=h.getViewport(ot);else{const Ct=p.getViewSubImage(u,ot);Qe=Ct.viewport,He===0&&(e.setRenderTargetTextures(S,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(S))}let je=L[He];je===void 0&&(je=new Zn,je.layers.enable(He),je.viewport=new Pt,L[He]=je),je.matrix.fromArray(ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(je)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const He=p.getDepthInformation(re[0]);He&&He.isValid&&He.texture&&m.init(He,a.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<re.length;He++){const ot=re[He].camera;if(ot){let Qe=f[ot];Qe||(Qe=new J_,f[ot]=Qe);const je=p.getCameraImage(ot);Qe.sourceTexture=je}}}}for(let re=0;re<A.length;re++){const Ne=w[re],Oe=A[re];Ne!==null&&Oe!==void 0&&Oe.update(Ne,de,c||r)}ke&&ke($,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Ve=new nS;Ve.setAnimationLoop(et),this.setAnimationLoop=function($){ke=$},this.dispose=function(){}}}const b3=new Gt,cS=new Pe;cS.set(-1,0,0,0,1,0,0,0,1);function E3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,$_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,v,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),E(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),M=v.envMap,S=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(b3.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function T3(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,A){const w=A.program;i.uniformBlockBinding(S,w)}function c(S,A){let w=a[S.id];w===void 0&&(m(S),w=d(S),a[S.id]=w,S.addEventListener("dispose",v));const C=A.program;i.updateUBOMapping(S,C);const x=e.render.frame;s[S.id]!==x&&(u(S),s[S.id]=x)}function d(S){const A=p();S.__bindingPointIndex=A;const w=t.createBuffer(),C=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,A,w),w}function p(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const A=a[S.id],w=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let x=0,R=w.length;x<R;x++){const U=w[x];if(Array.isArray(U))for(let L=0,F=U.length;L<F;L++)h(U[L],x,L,C);else h(U,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,A,w,C){if(E(S,A,w,C)===!0){const x=S.__offset,R=S.value;if(Array.isArray(R)){let U=0;for(let L=0;L<R.length;L++){const F=R[L],Q=f(F);_(F,S.__data,U),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function _(S,A,w){typeof S=="number"||typeof S=="boolean"?A[0]=S:S.isMatrix3?(A[0]=S.elements[0],A[1]=S.elements[1],A[2]=S.elements[2],A[3]=0,A[4]=S.elements[3],A[5]=S.elements[4],A[6]=S.elements[5],A[7]=0,A[8]=S.elements[6],A[9]=S.elements[7],A[10]=S.elements[8],A[11]=0):ArrayBuffer.isView(S)?A.set(new S.constructor(S.buffer,S.byteOffset,A.length)):S.toArray(A,w)}function E(S,A,w,C){const x=S.value,R=A+"_"+w;if(C[R]===void 0)return typeof x=="number"||typeof x=="boolean"?C[R]=x:ArrayBuffer.isView(x)?C[R]=x.slice():C[R]=x.clone(),!0;{const U=C[R];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return C[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function m(S){const A=S.uniforms;let w=0;const C=16;for(let R=0,U=A.length;R<U;R++){const L=Array.isArray(A[R])?A[R]:[A[R]];for(let F=0,Q=L.length;F<Q;F++){const ne=L[F],H=Array.isArray(ne.value)?ne.value:[ne.value];for(let P=0,I=H.length;P<I;P++){const V=H[P],ee=f(V),se=w%C,le=se%ee.boundary,ve=se+le;w+=le,ve!==0&&C-ve<ee.storage&&(w+=C-ve),ne.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=w,w+=ee.storage}}}const x=w%C;return x>0&&(w+=C-x),S.__size=w,S.__cache={},this}function f(S){const A={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(A.boundary=4,A.storage=4):S.isVector2?(A.boundary=8,A.storage=8):S.isVector3||S.isColor?(A.boundary=16,A.storage=12):S.isVector4?(A.boundary=16,A.storage=16):S.isMatrix3?(A.boundary=48,A.storage=48):S.isMatrix4?(A.boundary=64,A.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(A.boundary=16,A.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),A}function v(S){const A=S.target;A.removeEventListener("dispose",v);const w=r.indexOf(A.__bindingPointIndex);r.splice(w,1),t.deleteBuffer(a[A.id]),delete a[A.id],delete s[A.id]}function M(){for(const S in a)t.deleteBuffer(a[S]);r=[],a={},s={}}return{bind:l,update:c,dispose:M}}const A3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function R3(){return mi===null&&(mi=new v1(A3,16,16,xs,ia),mi.name="DFG_LUT",mi.minFilter=dn,mi.magFilter=dn,mi.wrapS=Wi,mi.wrapT=Wi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class w3{constructor(e={}){const{canvas:n=Yb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=$n}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const E=h,m=new Set([Dp,Np,Cp]),f=new Set([$n,Ti,Io,zo,Rp,wp]),v=new Uint32Array(4),M=new Int32Array(4),S=new j;let A=null,w=null;const C=[],x=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let L=!1,F=null,Q=null,ne=null,H=null;this._outputColorSpace=Wn;let P=0,I=0,V=null,ee=-1,se=null;const le=new Pt,ve=new Pt;let ke=null;const et=new it(0);let Ve=0,$=n.width,de=n.height,re=1,Ne=null,Oe=null;const we=new Pt(0,0,$,de),At=new Pt(0,0,$,de);let He=!1;const ot=new Z_;let Qe=!1,je=!1;const Ct=new Gt,Nt=new j,It=new Pt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function Dt(){return V===null?re:1}let z=i;function Ce(b,B){return n.getContext(b,B)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tp}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",pn,!1),z===null){const B="webgl2";if(z=Ce(B,b),z===null)throw Ce(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw $e("WebGLRenderer: "+b.message),b}let nt,T,g,O,k,N,G,ae,Y,Z,ce,ye,fe,ue,be,Ae,De,D,oe,K,ie,he,J;function Me(){nt=new RA(z),nt.init(),ie=new x3(z,nt),T=new _A(z,nt,e,ie),g=new g3(z,nt),T.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Q=z.createFramebuffer(),ne=z.createFramebuffer(),H=z.createFramebuffer(),O=new NA(z),k=new n3,N=new v3(z,nt,g,k,T,ie,O),G=new AA(U),ae=new O1(z),he=new vA(z,ae),Y=new wA(z,ae,O,he),Z=new UA(z,Y,ae,he,O),D=new DA(z,T,N),be=new SA(k),ce=new t3(U,G,nt,T,he,be),ye=new E3(U,k),fe=new a3,ue=new u3(nt),De=new gA(U,G,g,Z,_,l),Ae=new m3(U,Z,T),J=new T3(z,O,T,g),oe=new xA(z,nt,O),K=new CA(z,nt,O),O.programs=ce.programs,U.capabilities=T,U.extensions=nt,U.properties=k,U.renderLists=fe,U.shadowMap=Ae,U.state=g,U.info=O}Me(),E!==$n&&(R=new OA(E,n.width,n.height,o,a,s));const xe=new M3(U,z);this.xr=xe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(b){b!==void 0&&(re=b,this.setSize($,de,!1))},this.getSize=function(b){return b.set($,de)},this.setSize=function(b,B,q=!0){if(xe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,de=B,n.width=Math.floor(b*re),n.height=Math.floor(B*re),q===!0&&(n.style.width=b+"px",n.style.height=B+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set($*re,de*re).floor()},this.setDrawingBufferSize=function(b,B,q){$=b,de=B,re=q,n.width=Math.floor(b*q),n.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(E===$n){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(le)},this.getViewport=function(b){return b.copy(we)},this.setViewport=function(b,B,q,X){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,B,q,X),g.viewport(le.copy(we).multiplyScalar(re).round())},this.getScissor=function(b){return b.copy(At)},this.setScissor=function(b,B,q,X){b.isVector4?At.set(b.x,b.y,b.z,b.w):At.set(b,B,q,X),g.scissor(ve.copy(At).multiplyScalar(re).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){g.setScissorTest(He=b)},this.setOpaqueSort=function(b){Ne=b},this.setTransparentSort=function(b){Oe=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,q=!0){let X=0;if(b){let W=!1;if(V!==null){const ge=V.texture.format;W=m.has(ge)}if(W){const ge=V.texture.type,Se=f.has(ge),me=De.getClearColor(),Ee=De.getClearAlpha(),Te=me.r,ze=me.g,Ge=me.b;Se?(v[0]=Te,v[1]=ze,v[2]=Ge,v[3]=Ee,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=Te,M[1]=ze,M[2]=Ge,M[3]=Ee,z.clearBufferiv(z.COLOR,0,M))}else X|=z.COLOR_BUFFER_BIT}B&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",pn,!1),De.dispose(),fe.dispose(),ue.dispose(),k.dispose(),G.dispose(),Z.dispose(),he.dispose(),J.dispose(),ce.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Gp),xe.removeEventListener("sessionend",Vp),ja.stop()};function mt(b){b.preventDefault(),D0("WebGLRenderer: Context Lost."),L=!0}function tt(){D0("WebGLRenderer: Context Restored."),L=!1;const b=O.autoReset,B=Ae.enabled,q=Ae.autoUpdate,X=Ae.needsUpdate,W=Ae.type;Me(),O.autoReset=b,Ae.enabled=B,Ae.autoUpdate=q,Ae.needsUpdate=X,Ae.type=W}function pn(b){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function yt(b){const B=b.target;B.removeEventListener("dispose",yt),gu(B)}function gu(b){uS(b),k.remove(b)}function uS(b){const B=k.get(b).programs;B!==void 0&&(B.forEach(function(q){ce.releaseProgram(q)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,X,W,ge){B===null&&(B=Vt);const Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,me=hS(b,B,q,X,W);g.setMaterial(X,Se);let Ee=q.index,Te=1;if(X.wireframe===!0){if(Ee=Y.getWireframeAttribute(q),Ee===void 0)return;Te=2}const ze=q.drawRange,Ge=q.attributes.position;let Re=ze.start*Te,dt=(ze.start+ze.count)*Te;ge!==null&&(Re=Math.max(Re,ge.start*Te),dt=Math.min(dt,(ge.start+ge.count)*Te)),Ee!==null?(Re=Math.max(Re,0),dt=Math.min(dt,Ee.count)):Ge!=null&&(Re=Math.max(Re,0),dt=Math.min(dt,Ge.count));const zt=dt-Re;if(zt<0||zt===1/0)return;he.setup(W,X,me,q,Ee);let Ut,gt=oe;if(Ee!==null&&(Ut=ae.get(Ee),gt=K,gt.setIndex(Ut)),W.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*Dt()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(W.isLine){let cn=X.linewidth;cn===void 0&&(cn=1),g.setLineWidth(cn*Dt()),W.isLineSegments?gt.setMode(z.LINES):W.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else W.isPoints?gt.setMode(z.POINTS):W.isSprite&&gt.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))gt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const cn=W._multiDrawStarts,_e=W._multiDrawCounts,Cn=W._multiDrawCount,Je=Ee?ae.get(Ee).bytesPerElement:1,Vn=k.get(X).currentProgram.getUniforms();for(let hi=0;hi<Cn;hi++)Vn.setValue(z,"_gl_DrawID",hi),gt.render(cn[hi]/Je,_e[hi])}else if(W.isInstancedMesh)gt.renderInstances(Re,zt,W.count);else if(q.isInstancedBufferGeometry){const cn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,cn);gt.renderInstances(Re,zt,_e)}else gt.render(Re,zt)};function Hp(b,B,q){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,tl(b,B,q),b.side=ka,b.needsUpdate=!0,tl(b,B,q),b.side=Gi):tl(b,B,q)}this.compile=function(b,B,q=null){q===null&&(q=b),w=ue.get(q),w.init(B),x.push(w),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();const X=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ge=W.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){const me=ge[Se];Hp(me,q,W),X.add(me)}else Hp(ge,q,W),X.add(ge)}),w=x.pop(),X},this.compileAsync=function(b,B,q=null){const X=this.compile(b,B,q);return new Promise(W=>{function ge(){if(X.forEach(function(Se){k.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){W(b);return}setTimeout(ge,10)}nt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let vu=null;function fS(b){vu&&vu(b)}function Gp(){ja.stop()}function Vp(){ja.start()}const ja=new nS;ja.setAnimationLoop(fS),typeof self<"u"&&ja.setContext(self),this.setAnimationLoop=function(b){vu=b,xe.setAnimationLoop(b),b===null?ja.stop():ja.start()},xe.addEventListener("sessionstart",Gp),xe.addEventListener("sessionend",Vp),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;F!==null&&F.renderStart(b,B);const q=xe.enabled===!0&&xe.isPresenting===!0,X=R!==null&&(V===null||q)&&R.begin(U,V);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(B),B=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,B,V),w=ue.get(b,x.length),w.init(B),w.state.textureUnits=N.getTextureUnits(),x.push(w),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(Ct,yi,B.reversedDepth),je=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,je),A=fe.get(b,C.length),A.init(),C.push(A),xe.enabled===!0&&xe.isPresenting===!0){const Se=U.xr.getDepthSensingMesh();Se!==null&&xu(Se,B,-1/0,U.sortObjects)}xu(b,B,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(Ne,Oe,B.reversedDepth),Rt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Rt&&De.addToRenderList(A,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&be.beginShadows();const W=w.state.shadowsArray;if(Ae.render(W,b,B),Qe===!0&&be.endShadows(),(X&&R.hasRenderPass())===!1){const Se=A.opaque,me=A.transmissive;if(w.setupLights(),B.isArrayCamera){const Ee=B.cameras;if(me.length>0)for(let Te=0,ze=Ee.length;Te<ze;Te++){const Ge=Ee[Te];Xp(Se,me,b,Ge)}Rt&&De.render(b);for(let Te=0,ze=Ee.length;Te<ze;Te++){const Ge=Ee[Te];kp(A,b,Ge,Ge.viewport)}}else me.length>0&&Xp(Se,me,b,B),Rt&&De.render(b),kp(A,b,B)}V!==null&&I===0&&(N.updateMultisampleRenderTarget(V),N.updateRenderTargetMipmap(V)),X&&R.end(U),b.isScene===!0&&b.onAfterRender(U,b,B),he.resetDefaultState(),ee=-1,se=null,x.pop(),x.length>0?(w=x[x.length-1],N.setTextureUnits(w.state.textureUnits),Qe===!0&&be.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,F!==null&&F.renderEnd()};function xu(b,B,q,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ot.intersectsSprite(b)){X&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const Se=Z.update(b),me=b.material;me.visible&&A.push(b,Se,me,q,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ot.intersectsObject(b))){const Se=Z.update(b),me=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),It.copy(Se.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(me)){const Ee=Se.groups;for(let Te=0,ze=Ee.length;Te<ze;Te++){const Ge=Ee[Te],Re=me[Ge.materialIndex];Re&&Re.visible&&A.push(b,Se,Re,q,It.z,Ge)}}else me.visible&&A.push(b,Se,me,q,It.z,null)}}const ge=b.children;for(let Se=0,me=ge.length;Se<me;Se++)xu(ge[Se],B,q,X)}function kp(b,B,q,X){const{opaque:W,transmissive:ge,transparent:Se}=b;w.setupLightsView(q),Qe===!0&&be.setGlobalState(U.clippingPlanes,q),X&&g.viewport(le.copy(X)),W.length>0&&el(W,B,q),ge.length>0&&el(ge,B,q),Se.length>0&&el(Se,B,q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xp(b,B,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Re=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new Ei(1,1,{generateMipmaps:!0,type:Re?ia:$n,minFilter:ss,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const ge=w.state.transmissionRenderTarget[X.id],Se=X.viewport||le;ge.setSize(Se.z*U.transmissionResolutionScale,Se.w*U.transmissionResolutionScale);const me=U.getRenderTarget(),Ee=U.getActiveCubeFace(),Te=U.getActiveMipmapLevel();U.setRenderTarget(ge),U.getClearColor(et),Ve=U.getClearAlpha(),Ve<1&&U.setClearColor(16777215,.5),U.clear(),Rt&&De.render(q);const ze=U.toneMapping;U.toneMapping=bi;const Ge=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),Qe===!0&&be.setGlobalState(U.clippingPlanes,X),el(b,q,X),N.updateMultisampleRenderTarget(ge),N.updateRenderTargetMipmap(ge),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let dt=0,zt=B.length;dt<zt;dt++){const Ut=B[dt],{object:gt,geometry:cn,material:_e,group:Cn}=Ut;if(_e.side===Gi&&gt.layers.test(X.layers)){const Je=_e.side;_e.side=Tn,_e.needsUpdate=!0,Wp(gt,q,X,cn,_e,Cn),_e.side=Je,_e.needsUpdate=!0,Re=!0}}Re===!0&&(N.updateMultisampleRenderTarget(ge),N.updateRenderTargetMipmap(ge))}U.setRenderTarget(me,Ee,Te),U.setClearColor(et,Ve),Ge!==void 0&&(X.viewport=Ge),U.toneMapping=ze}function el(b,B,q){const X=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ge=b.length;W<ge;W++){const Se=b[W],{object:me,geometry:Ee,group:Te}=Se;let ze=Se.material;ze.allowOverride===!0&&X!==null&&(ze=X),me.layers.test(q.layers)&&Wp(me,B,q,Ee,ze,Te)}}function Wp(b,B,q,X,W,ge){b.onBeforeRender(U,B,q,X,W,ge),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(U,B,q,X,b,ge),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=Tn,W.needsUpdate=!0,U.renderBufferDirect(q,B,X,W,b,ge),W.side=ka,W.needsUpdate=!0,U.renderBufferDirect(q,B,X,W,b,ge),W.side=Gi):U.renderBufferDirect(q,B,X,W,b,ge),b.onAfterRender(U,B,q,X,W,ge)}function tl(b,B,q){B.isScene!==!0&&(B=Vt);const X=k.get(b),W=w.state.lights,ge=w.state.shadowsArray,Se=W.state.version,me=ce.getParameters(b,W.state,ge,B,q,w.state.lightProbeGridArray),Ee=ce.getProgramCacheKey(me);let Te=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;const ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=G.get(b.envMap||X.environment,ze),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",yt),Te=new Map,X.programs=Te);let Ge=Te.get(Ee);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Se)return qp(b,me),Ge}else me.uniforms=ce.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,q,me),b.onBeforeCompile(me,U),Ge=ce.acquireProgram(me,Ee),Te.set(Ee,Ge),X.uniforms=me.uniforms;const Re=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=be.uniform),qp(b,me),X.needsLights=mS(b),X.lightsStateVersion=Se,X.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=Ge,X.uniformsList=null,Ge}function jp(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=cc.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function qp(b,B){const q=k.get(b);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function dS(b,B){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(B.matrixWorld);for(let q=0,X=b.length;q<X;q++){const W=b[q];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function hS(b,B,q,X,W){B.isScene!==!0&&(B=Vt),N.resetTextureUnits();const ge=B.fog,Se=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,me=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ye.workingColorSpace,Ee=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Te=G.get(X.envMap||Se,Ee),ze=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,zt=!!q.morphAttributes.color;let Ut=bi;X.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ut=U.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,cn=gt!==void 0?gt.length:0,_e=k.get(X),Cn=w.state.lights;if(Qe===!0&&(je===!0||b!==se)){const _t=b===se&&X.id===ee;be.setState(X,b,_t)}let Je=!1;X.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Cn.state.version||_e.outputColorSpace!==me||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==Te||X.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==be.numPlanes||_e.numIntersection!==be.numIntersection)||_e.vertexAlphas!==ze||_e.vertexTangents!==Ge||_e.morphTargets!==Re||_e.morphNormals!==dt||_e.morphColors!==zt||_e.toneMapping!==Ut||_e.morphTargetsCount!==cn||!!_e.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,_e.__version=X.version);let Vn=_e.currentProgram;Je===!0&&(Vn=tl(X,B,W),F&&X.isNodeMaterial&&F.onUpdateProgram(X,Vn,_e));let hi=!1,oa=!1,As=!1;const vt=Vn.getUniforms(),Bt=_e.uniforms;if(g.useProgram(Vn.program)&&(hi=!0,oa=!0,As=!0),X.id!==ee&&(ee=X.id,oa=!0),_e.needsLights){const _t=dS(w.state.lightProbeGridArray,W);_e.lightProbeGrid!==_t&&(_e.lightProbeGrid=_t,oa=!0)}if(hi||se!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(z,"projectionMatrix",b.projectionMatrix),vt.setValue(z,"viewMatrix",b.matrixWorldInverse);const ca=vt.map.cameraPosition;ca!==void 0&&ca.setValue(z,Nt.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,oa=!0,As=!0)}if(_e.needsLights&&(Cn.state.directionalShadowMap.length>0&&vt.setValue(z,"directionalShadowMap",Cn.state.directionalShadowMap,N),Cn.state.spotShadowMap.length>0&&vt.setValue(z,"spotShadowMap",Cn.state.spotShadowMap,N),Cn.state.pointShadowMap.length>0&&vt.setValue(z,"pointShadowMap",Cn.state.pointShadowMap,N)),W.isSkinnedMesh){vt.setOptional(z,W,"bindMatrix"),vt.setOptional(z,W,"bindMatrixInverse");const _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),vt.setValue(z,"boneTexture",_t.boneTexture,N))}W.isBatchedMesh&&(vt.setOptional(z,W,"batchingTexture"),vt.setValue(z,"batchingTexture",W._matricesTexture,N),vt.setOptional(z,W,"batchingIdTexture"),vt.setValue(z,"batchingIdTexture",W._indirectTexture,N),vt.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&vt.setValue(z,"batchingColorTexture",W._colorsTexture,N));const la=q.morphAttributes;if((la.position!==void 0||la.normal!==void 0||la.color!==void 0)&&D.update(W,q,Vn),(oa||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,vt.setValue(z,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Bt.envMapIntensity.value=B.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=R3()),oa){if(vt.setValue(z,"toneMappingExposure",U.toneMappingExposure),_e.needsLights&&pS(Bt,As),ge&&X.fog===!0&&ye.refreshFogUniforms(Bt,ge),ye.refreshMaterialUniforms(Bt,X,re,de,w.state.transmissionRenderTarget[b.id]),_e.needsLights&&_e.lightProbeGrid){const _t=_e.lightProbeGrid;Bt.probesSH.value=_t.texture,Bt.probesMin.value.copy(_t.boundingBox.min),Bt.probesMax.value.copy(_t.boundingBox.max),Bt.probesResolution.value.copy(_t.resolution)}cc.upload(z,jp(_e),Bt,N)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(cc.upload(z,jp(_e),Bt,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(z,"center",W.center),vt.setValue(z,"modelViewMatrix",W.modelViewMatrix),vt.setValue(z,"normalMatrix",W.normalMatrix),vt.setValue(z,"modelMatrix",W.matrixWorld),X.uniformsGroups!==void 0){const _t=X.uniformsGroups;for(let ca=0,Rs=_t.length;ca<Rs;ca++){const Yp=_t[ca];J.update(Yp,Vn),J.bind(Yp,Vn)}}return Vn}function pS(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function mS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(b,B,q){const X=k.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=B,k.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){const q=k.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,q=0){V=b,P=B,I=q;let X=null,W=!1,ge=!1;if(b){const me=k.get(b);if(me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(z.FRAMEBUFFER,me.__webglFramebuffer),le.copy(b.viewport),ve.copy(b.scissor),ke=b.scissorTest,g.viewport(le),g.scissor(ve),g.setScissorTest(ke),ee=-1;return}else if(me.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(me.__hasExternalTextures)N.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(me.__boundDepthTexture!==ze){if(ze!==null&&k.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const Ee=b.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const Te=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[B])?X=Te[B][q]:X=Te[B],W=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?X=k.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?X=Te[q]:X=Te,le.copy(b.viewport),ve.copy(b.scissor),ke=b.scissorTest}else le.copy(we).multiplyScalar(re).floor(),ve.copy(At).multiplyScalar(re).floor(),ke=He;if(q!==0&&(X=Q),g.bindFramebuffer(z.FRAMEBUFFER,X)&&g.drawBuffers(b,X),g.viewport(le),g.scissor(ve),g.setScissorTest(ke),W){const me=k.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,me.__webglTexture,q)}else if(ge){const me=B;for(let Ee=0;Ee<b.textures.length;Ee++){const Te=k.get(b.textures[Ee]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ee,Te.__webglTexture,q,me)}}else if(b!==null&&q!==0){const me=k.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,me.__webglTexture,q)}ee=-1},this.readRenderTargetPixels=function(b,B,q,X,W,ge,Se,me=0){if(!(b&&b.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){g.bindFramebuffer(z.FRAMEBUFFER,Ee);try{const Te=b.textures[me],ze=Te.format,Ge=Te.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+me),!T.textureFormatReadable(ze)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(Ge)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&q>=0&&q<=b.height-W&&z.readPixels(B,q,X,W,ie.convert(ze),ie.convert(Ge),ge)}finally{const Te=V!==null?k.get(V).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,B,q,X,W,ge,Se,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(B>=0&&B<=b.width-X&&q>=0&&q<=b.height-W){g.bindFramebuffer(z.FRAMEBUFFER,Ee);const Te=b.textures[me],ze=Te.format,Ge=Te.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+me),!T.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.bufferData(z.PIXEL_PACK_BUFFER,ge.byteLength,z.STREAM_READ),z.readPixels(B,q,X,W,ie.convert(ze),ie.convert(Ge),0);const dt=V!==null?k.get(V).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,dt);const zt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Zb(z,zt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Re),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ge),z.deleteBuffer(Re),z.deleteSync(zt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,q=0){const X=Math.pow(2,-q),W=Math.floor(b.image.width*X),ge=Math.floor(b.image.height*X),Se=B!==null?B.x:0,me=B!==null?B.y:0;N.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,Se,me,W,ge),g.unbindTexture()},this.copyTextureToTexture=function(b,B,q=null,X=null,W=0,ge=0){let Se,me,Ee,Te,ze,Ge,Re,dt,zt;const Ut=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(q!==null)Se=q.max.x-q.min.x,me=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Te=q.min.x,ze=q.min.y,Ge=q.isBox3?q.min.z:0;else{const Bt=Math.pow(2,-W);Se=Math.floor(Ut.width*Bt),me=Math.floor(Ut.height*Bt),b.isDataArrayTexture?Ee=Ut.depth:b.isData3DTexture?Ee=Math.floor(Ut.depth*Bt):Ee=1,Te=0,ze=0,Ge=0}X!==null?(Re=X.x,dt=X.y,zt=X.z):(Re=0,dt=0,zt=0);const gt=ie.convert(B.format),cn=ie.convert(B.type);let _e;B.isData3DTexture?(N.setTexture3D(B,0),_e=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(N.setTexture2DArray(B,0),_e=z.TEXTURE_2D_ARRAY):(N.setTexture2D(B,0),_e=z.TEXTURE_2D),g.activeTexture(z.TEXTURE0),g.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),g.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),g.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);const Cn=g.getParameter(z.UNPACK_ROW_LENGTH),Je=g.getParameter(z.UNPACK_IMAGE_HEIGHT),Vn=g.getParameter(z.UNPACK_SKIP_PIXELS),hi=g.getParameter(z.UNPACK_SKIP_ROWS),oa=g.getParameter(z.UNPACK_SKIP_IMAGES);g.pixelStorei(z.UNPACK_ROW_LENGTH,Ut.width),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ut.height),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(z.UNPACK_SKIP_ROWS,ze),g.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge);const As=b.isDataArrayTexture||b.isData3DTexture,vt=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const Bt=k.get(b),la=k.get(B),_t=k.get(Bt.__renderTarget),ca=k.get(la.__renderTarget);g.bindFramebuffer(z.READ_FRAMEBUFFER,_t.__webglFramebuffer),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Rs=0;Rs<Ee;Rs++)As&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,k.get(b).__webglTexture,W,Ge+Rs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,k.get(B).__webglTexture,ge,zt+Rs)),z.blitFramebuffer(Te,ze,Se,me,Re,dt,Se,me,z.DEPTH_BUFFER_BIT,z.NEAREST);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||k.has(b)){const Bt=k.get(b),la=k.get(B);g.bindFramebuffer(z.READ_FRAMEBUFFER,ne),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<Ee;_t++)As?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,W,Ge+_t):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,W),vt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,la.__webglTexture,ge,zt+_t):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,la.__webglTexture,ge),W!==0?z.blitFramebuffer(Te,ze,Se,me,Re,dt,Se,me,z.COLOR_BUFFER_BIT,z.NEAREST):vt?z.copyTexSubImage3D(_e,ge,Re,dt,zt+_t,Te,ze,Se,me):z.copyTexSubImage2D(_e,ge,Re,dt,Te,ze,Se,me);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(_e,ge,Re,dt,zt,Se,me,Ee,gt,cn,Ut.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(_e,ge,Re,dt,zt,Se,me,Ee,gt,Ut.data):z.texSubImage3D(_e,ge,Re,dt,zt,Se,me,Ee,gt,cn,Ut):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ge,Re,dt,Se,me,gt,cn,Ut.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ge,Re,dt,Ut.width,Ut.height,gt,Ut.data):z.texSubImage2D(z.TEXTURE_2D,ge,Re,dt,Se,me,gt,cn,Ut);g.pixelStorei(z.UNPACK_ROW_LENGTH,Cn),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Vn),g.pixelStorei(z.UNPACK_SKIP_ROWS,hi),g.pixelStorei(z.UNPACK_SKIP_IMAGES,oa),ge===0&&B.generateMipmaps&&z.generateMipmap(_e),g.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){P=0,I=0,V=null,g.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function C3(){const[t,e]=lt.useState("home"),[n,i]=lt.useState(!1),[a,s]=lt.useState(!0),[r,o]=lt.useState(!0),[l,c]=lt.useState(null),[d,p]=lt.useState("All"),[u,h]=lt.useState("certifications"),[_,E]=lt.useState("light"),[m,f]=lt.useState({name:"",email:"",subject:"",message:""}),[v,M]=lt.useState(!1),[S,A]=lt.useState(null),[w,C]=lt.useState("Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!"),[x,R]=lt.useState(!1),[U,L]=lt.useState(!1),[F,Q]=lt.useState(null),ne=lt.useRef(null),H=lt.useRef(null);lt.useRef(null);const P=lt.useRef(null),I=lt.useRef(null),V=lt.useRef(null),ee=()=>{I.current&&(clearTimeout(I.current),I.current=null)};lt.useEffect(()=>{const N=()=>{ee()},G=()=>{n&&i(!1),l&&c(null)};return window.addEventListener("wheel",ae=>{N(),G()},{passive:!0}),window.addEventListener("touchmove",ae=>{N(),G()},{passive:!0}),window.addEventListener("scroll",G,{passive:!0}),()=>{window.removeEventListener("wheel",G),window.removeEventListener("touchmove",G),window.removeEventListener("scroll",G)}},[n,l]);const se=N=>{const G=document.getElementById(N);G&&G.scrollIntoView({behavior:"auto",block:"start"})},le=(N,G,ae=null)=>{"speechSynthesis"in window&&window.speechSynthesis.cancel(),ee(),C(G),V.current=ae;const Y=`/tejaswini-portfolio/avatar_videos/${N}`;Q(Y),R(!0),L(!1)},ve=()=>{F&&P.current?P.current.paused?(P.current.play(),L(!1),R(!0)):(P.current.pause(),L(!0),R(!1)):le("greeting.mp4","Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!")},ke=()=>{le("about.mp4","Tejaswini is an entry-level Software Engineer and AI Developer with experience across AI, backend development, APIs, Salesforce, PEGA, automation, and software engineering.")},et=()=>{le("skills.mp4","Her skills span AI and machine learning, programming, backend and APIs, frontend development, Salesforce, PEGA, databases, DevOps, and core software engineering.")},Ve=()=>{le("projects.mp4","Tejaswini has built projects across AI, developer tools, security, mobile applications, FinTech, NLP, Salesforce, and automation.")},$=()=>{le("journey.mp4","Tejaswini's professional journey includes enterprise software, workflow automation, Salesforce development, API integration, and AI-driven application workflows.")},de=()=>{le("education.mp4","Tejaswini has completed her B.Tech in Computer Science and Engineering from Aditya University with a CGPA of 8.64. She completed her Intermediate in MPC with 96.7% and her 10th standard with 96.66%.")},re=()=>{h("achievements"),le("achievements.mp4","Her achievements include a Top 10 position in CODE WARS 1.0, second prize in a paper presentation, qualification for the OpenAI and NextWave State-Level Buildathon, and advancement to Round 3 of HP PowerLab 2.0.")},Ne=()=>{h("certifications"),le("credentials.mp4","Her certifications include Salesforce Platform Developer I, Salesforce AgentForce Specialist, Pega Certified System Architect, Red Hat Certified System Administrator, and Information Technology Specialist certifications.")},Oe=()=>{le("hire.mp4","Interested in working with Tejaswini? She is open to opportunities in Software Engineering, AI and Machine Learning, Backend Development, Full Stack Development, Salesforce, PEGA, Automation, and other technology-focused roles. Let's connect.",()=>{se("contact")})},we=()=>{o(!1),s(!1),le("greeting.mp4","Hi! Welcome to Dande Tejaswini's portfolio. I'm your virtual guide. Take a look around to explore her work, technical journey, projects, achievements, and credentials. Let's get started!")};lt.useEffect(()=>{const N=setTimeout(()=>{s(!1)},1200);return()=>clearTimeout(N)},[]),lt.useEffect(()=>{if(!H.current||!r||a)return;const N=H.current,G=N.getContext("2d");let ae;const Y=()=>{N.width=window.innerWidth,N.height=window.innerHeight};window.addEventListener("resize",Y),Y();const Z=[],ce=80,ye=_==="dark",fe=[];for(let D=0;D<20;D++)fe.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:Math.random()*2+1.5,alpha:Math.random()*.15+.08,twinkleSpeed:Math.random()*.02+.01,angle:Math.random()*Math.PI*2});const ue=(D,oe)=>{Z.push({x:D,y:oe,time:Date.now()}),Z.length>ce&&Z.shift()},be=D=>ue(D.clientX,D.clientY),Ae=D=>{D.touches.length>0&&ue(D.touches[0].clientX,D.touches[0].clientY)};window.addEventListener("mousemove",be),window.addEventListener("touchmove",Ae,{passive:!0});const De=()=>{G.clearRect(0,0,N.width,N.height);const D=Date.now(),oe=ye?"rgba(6, 182, 212, ":"rgba(8, 145, 178, ",K=ye?"#06b6d4":"#0891b2";for(fe.forEach(ie=>{ie.x+=ie.vx,ie.y+=ie.vy,ie.x<0&&(ie.x=N.width),ie.x>N.width&&(ie.x=0),ie.y<0&&(ie.y=N.height),ie.y>N.height&&(ie.y=0),ie.angle+=ie.twinkleSpeed;const he=Math.max(.05,ie.alpha+Math.sin(ie.angle)*.06);G.save(),G.globalAlpha=he,G.beginPath(),G.arc(ie.x,ie.y,ie.radius,0,Math.PI*2),G.fillStyle=K,G.fill(),G.restore()});Z.length>0&&D-Z[0].time>1200;)Z.shift();if(Z.length>1){for(let J=1;J<Z.length;J++){const Me=Z[J-1],xe=Z[J],mt=D-xe.time,tt=J/Z.length,pn=Math.max(0,(1-mt/1200)*tt*.6),yt=Math.max(1,tt*4);G.save(),G.globalAlpha=pn,G.strokeStyle=oe+"1)",G.lineWidth=yt,G.lineCap="round",G.lineJoin="round",G.shadowBlur=8,G.shadowColor=K,G.beginPath(),G.moveTo(Me.x,Me.y),G.lineTo(xe.x,xe.y),G.stroke(),G.restore()}const ie=Z[Z.length-1],he=D-ie.time;if(he<150){G.save(),G.globalAlpha=Math.max(0,(1-he/150)*.5);const J=G.createRadialGradient(ie.x,ie.y,0,ie.x,ie.y,12);J.addColorStop(0,oe+"0.4)"),J.addColorStop(1,oe+"0)"),G.fillStyle=J,G.beginPath(),G.arc(ie.x,ie.y,12,0,Math.PI*2),G.fill(),G.restore()}}ae=requestAnimationFrame(De)};return De(),()=>{window.removeEventListener("resize",Y),window.removeEventListener("mousemove",be),window.removeEventListener("touchmove",Ae),cancelAnimationFrame(ae)}},[r,a,_]),lt.useEffect(()=>{if(!ne.current)return;const N=new f1,G=new Zn(75,window.innerWidth/window.innerHeight,.1,1e3),ae=new w3({canvas:ne.current,alpha:!0,antialias:!0});ae.setSize(window.innerWidth,window.innerHeight),ae.setPixelRatio(Math.min(window.devicePixelRatio,2));const Y=document.createElement("canvas");Y.width=16,Y.height=16;const Z=Y.getContext("2d"),ce=Z.createRadialGradient(8,8,0,8,8,8);ce.addColorStop(0,"rgba(255, 255, 255, 1)"),ce.addColorStop(.5,"rgba(255, 255, 255, 0.4)"),ce.addColorStop(1,"rgba(255, 255, 255, 0)"),Z.fillStyle=ce,Z.beginPath(),Z.arc(8,8,8,0,Math.PI*2),Z.fill();const ye=new M1(Y),fe=750,ue=new Float32Array(fe*3);for(let yt=0;yt<fe*3;yt++)ue[yt]=(Math.random()-.5)*18;const be=new di;be.setAttribute("position",new ui(ue,3));const Ae=_==="dark",De=new K_({size:.1,map:ye,color:Ae?3718648:165063,transparent:!0,opacity:Ae?.5:.35,depthWrite:!1,blending:Ud}),D=new y1(be,De);N.add(D),G.position.z=5;let oe=0,K=0,ie=0,he=0;const J=(yt,gu)=>{ie=(yt/window.innerWidth-.5)*1.2,he=(gu/window.innerHeight-.5)*1.2},Me=yt=>{J(yt.clientX,yt.clientY)},xe=yt=>{yt.touches.length>0&&J(yt.touches[0].clientX,yt.touches[0].clientY)};window.addEventListener("mousemove",Me),window.addEventListener("touchmove",xe,{passive:!0});const mt=()=>{G.aspect=window.innerWidth/window.innerHeight,G.updateProjectionMatrix(),ae.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",mt);let tt;const pn=()=>{tt=requestAnimationFrame(pn),D.rotation.y+=6e-4,D.rotation.x+=3e-4,oe+=(ie-oe)*.1,K+=(he-K)*.1,G.position.x=oe*1.5,G.position.y=-K*1.5,G.lookAt(N.position),ae.render(N,G)};return pn(),()=>{window.removeEventListener("mousemove",Me),window.removeEventListener("touchmove",xe),window.removeEventListener("resize",mt),cancelAnimationFrame(tt),be.dispose(),De.dispose(),ae.dispose()}},[_]);const At=/^[A-Za-z\s]+$/,He=/^[a-z0-9]+@gmail\.com$/,ot=()=>m.name?At.test(m.name)?null:"Please enter a valid name containing only letters (a-z, A-Z).":null,Qe=()=>m.email?He.test(m.email)?null:"Please enter a valid email (lowercase letters and numbers only before @gmail.com).":null,je=()=>m.message&&m.message.trim().length<10?"Please enter a message (at least 10 characters).":null,Ct=async N=>{if(N.preventDefault(),!m.name.trim()||!m.email.trim()||!m.message.trim()){A({type:"error",text:"Please enter all the required fields before submitting."});return}if(!At.test(m.name)){A({type:"error",text:"Please enter a valid name containing only letters (a-z, A-Z)."});return}if(!He.test(m.email)){A({type:"error",text:"Please enter a valid email (lowercase letters and numbers only before @gmail.com)."});return}if(m.message.trim().length<10){A({type:"error",text:"Please enter a message (at least 10 characters)."});return}M(!0),A(null);try{await fetch("https://formsubmit.co/ajax/dandetejaswini1329@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:m.name,email:m.email,subject:m.subject||`Opportunity Message from ${m.name}`,message:m.message,_subject:`New Portfolio Contact Message from ${m.name}`,_captcha:"false"})}),M(!1),A({type:"success",text:"Thank you for reaching out! Your message has been sent successfully to Tejaswini. She'll get back to you as soon as possible."}),se("home"),le("contact_success.mp4","Thank you for reaching out to Tejaswini. Your message has been sent successfully!"),setTimeout(()=>{f({name:"",email:"",subject:"",message:""})},3e3)}catch{M(!1),A({type:"error",text:"Failed to send message. Please try again later."})}};lt.useEffect(()=>{const N=()=>{const G=["home","about","skills","projects","journey","credentials","contact"],ae=window.scrollY+200;for(const Y of G){const Z=document.getElementById(Y);if(Z){const ce=Z.offsetTop,ye=Z.offsetHeight;if(ae>=ce&&ae<ce+ye){e(Y);break}}}};return window.addEventListener("scroll",N),()=>window.removeEventListener("scroll",N)},[]);const Nt=[{id:"cxintel",title:"CXIntel",subtitle:"Sentiment-aware CRM platform",category:"AI / Salesforce / Automation",featured:!0,github:"https://github.com/dandetejaswini/CXIntel",live:"https://cxintel-dev-ed.develop.my.site.com/s/",desc:"Salesforce Experience Cloud CRM platform integrating Python sentiment pipelines to analyze customer feedback and automate support routing.",tech:["Apex","LWC","JavaScript","Python","REST APIs","GitHub Actions"],metrics:["Analyzed 500+ customer feedback records","Improved insight accuracy by 35%","Automated ticket tagging via REST APIs","Reduced manual review time by 40%"],details:"Built an enterprise-grade CRM extension on Salesforce leveraging LWC and Python backend sentiment pipelines to automatically classify and prioritize inbound tickets."},{id:"gitnexus",title:"GitNexus",subtitle:"Intelligent Multi-Agent System",category:"AI / Developer Tools",featured:!0,github:"https://github.com/dandetejaswini/GitNexus",desc:"Autonomous multi-agent system analyzing GitHub repository architecture, pull requests, and commit metrics to summarize codebase health.",tech:["JavaScript","AI Agents","GitHub REST API","Automation","LangChain"],metrics:["Automated repository code analysis","Multi-agent workflow orchestration","Intelligent commit summarization"],details:"Multi-agent orchestration system that interfaces with GitHub APIs to parse repository structures, evaluate commit histories, and generate autonomous project health reports."},{id:"netguardian",title:"NetGuardian",subtitle:"Real-time AI content shield",category:"AI / Security",featured:!0,badge:"Qualified: OpenAI Academy & NextWave Buildathon",github:"https://github.com/dandetejaswini/Net-Gaurdian",desc:"Browser extension that detects and blurs harmful content in real time using privacy-preserving on-device inference.",tech:["TensorFlow.js","Flask","LangChain","Browser Extension","Privacy-First"],metrics:["Real-time content detection and sanitization","Real-time DOM inspection and blurring","Local privacy-focused inference","Qualified for OpenAI Academy & NextWave Buildathon (State Level)"],details:"Client-side extension paired with a lightweight Flask backend to identify and sanitize sensitive web elements instantly. Qualified for the OpenAI Academy and NextWave Buildathon."},{id:"edubond",title:"EduBond Mobile",subtitle:"AI peer & mentor connection mobile app",category:"AI / Mobile",featured:!0,github:"https://github.com/dandetejaswini/Edubond_mobile",desc:"React Native mobile application connecting students, mentors, and alumni through intelligent profile matching algorithms.",tech:["React Native","TypeScript","Node.js","AI Matching","WebSockets"],metrics:["Real-time WebSocket communication","AI-driven peer and mentor matching","Cross-platform mobile architecture"],details:"Developed a comprehensive cross-platform app ensuring seamless mentorship scheduling, AI-powered profile matching, and instant messaging."},{id:"spendiq",title:"SpendIQ",subtitle:"Smart barcode retail budgeting tool",category:"FinTech / Web App",featured:!0,github:"",live:"https://spendiqpro.vercel.app/en",desc:"Web application reducing checkout queues and retail overspending using camera barcode scanning and budget limits.",tech:["JavaScript","ZXing","WebRTC","Vercel","WCAG 2.1"],metrics:["95% barcode scan accuracy","99% uptime deployment","Full WCAG 2.1 accessibility compliance"],details:"Fast, accessible client-side budgetary tool utilizing real-time device camera barcode capture to instantly categorize and track daily retail expenditures."},{id:"nlp-pipeline",title:"Advanced NLP Pipeline",subtitle:"High-throughput FastAPI inference engine",category:"AI / NLP / Backend",featured:!0,github:"https://github.com/dandetejaswini/Advanced-NLP-Pipeline-with-Transformers",desc:"FastAPI and HuggingFace Transformers pipeline for high-speed text summarization, translation, and entity recognition.",tech:["Python","FastAPI","Transformers","Docker","Inference Caching"],metrics:["50% API response latency reduction","Optimized transformer weights caching","Modular REST inference endpoints"],details:"Production-grade NLP inference engine supporting concurrent summarization, translation, and Named Entity Recognition with optimized Docker deployment."},{id:"reposense",title:"RepoSense",subtitle:"Autonomous GitHub code risk analysis",category:"AI / Developer Tools",featured:!0,github:"https://github.com/dandetejaswini/reposense",desc:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history.",tech:["Python","Gemini API","GitHub API","FastAPI","PyDriller","Docker"],metrics:["Multi-agent GitHub analysis","Repository risk and code hotspot detection","Automated engineering intelligence"],details:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights."},{id:"fraud-risk",title:"Fraud Risk Scoring",subtitle:"Neural network transaction classification",category:"Machine Learning",featured:!1,github:"https://github.com/dandetejaswini/Fraud_Risk_Scoring",desc:"Machine learning fraud detection system utilizing deep neural networks and SMOTE data balancing.",tech:["Python","TensorFlow","Scikit-Learn","SMOTE","Pandas"],metrics:["Neural network-based fraud classification","High-risk transaction anomaly flagging","Balanced datasets using SMOTE technique"],details:"Trained and validated robust neural network classification models to flag high-risk transaction anomalies."}],It=[{title:"Information Technology Specialist in HTML and CSS",issuer:"Certiport (2023)",link:"https://www.credly.com/badges/8c0767fe-2d87-46cd-a9f7-159da49186aa"},{title:"Information Technology Specialist in Python",issuer:"Certiport (2023)",link:"https://drive.google.com/file/d/1Dw43WenvhYx-nPC11P6t0xiEjrsFN123/view?usp=sharing"},{title:"Salesforce Platform Developer I",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1Wn7lNAck8JIJrMXh8YRIvphJWs31D0Yu/view?usp=sharing"},{title:"Salesforce AgentForce Specialist",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1BgGL9qyufgqqAo9wG37pRYiYUYQ9PW8W/view?usp=sharing"},{title:"Information Technology Specialist in Java",issuer:"Certiport (2024)",link:"https://www.credly.com/badges/6064c502-5e2f-472b-a57f-2c49568a6fcc"},{title:"Red Hat Certified System Administrator (RHCSA)",issuer:"Red Hat (2024)",link:"https://www.credly.com/badges/56c15cb2-cd42-43df-a140-10d5273c792f"},{title:"Pega Certified System Architect (CSA)",issuer:"Pega (2025)",link:"https://accounts.pega.com/profile/DandeTejaswini/share/BPEGACPSA24V1-PEGACPSA24V1"}],Vt=[{year:"2024",title:"Second Prize — Paper Presentation",org:"National Technical Symposium, CIET",desc:"Secured 2nd prize for technical paper presentation on emerging AI architectures."},{year:"2024",title:"Top 10 — CODE WARS 1.0",org:"ACM JNTU-GV",desc:"Achieved top 10 ranking in competitive algorithmic programming challenge."},{year:"2024",title:"Qualified — OpenAI & NextWave Buildathon",org:"OpenAI / NextWave (State Level)",desc:"Qualified in state-level competitive AI application buildathon."},{year:"2024",title:"Advanced to Round 3 — HP PowerLab 2.0",org:"Hindustan Petroleum Corporation Limited",desc:"Reached Round 3 in national innovation engineering challenge."},{year:"Open Source",title:"Google Summer of Code — Contributions",org:"Open Source Ecosystem",desc:"Contributed to AI tool ecosystems including LangChain, LlamaIndex, and CrewAI."}],Rt=[{title:"Programming",icon:"code",items:["Python","Java","JavaScript","TypeScript","C","C++","Apex","SQL"]},{title:"AI / Machine Learning",icon:"ai",items:["AI","Machine Learning","NLP","Transformers","BERT","TensorFlow","LangChain","Semantic Search","TF-IDF","spaCy","Neural Networks","Sentiment Analysis","NER","Summarization","Translation","AI Agents","Prompt Engineering"]},{title:"Backend & APIs",icon:"backend",items:["Flask","FastAPI","Spring Boot","Node.js","REST APIs","JDBC","JPA","Spring Data JPA","Microservices","API Integration"]},{title:"Frontend & Mobile",icon:"frontend",items:["HTML","CSS","JavaScript","TypeScript","React","React Native","LWC","Tailwind CSS","Material UI","SLDS","WebRTC","ZXing"]},{title:"Salesforce & PEGA",icon:"enterprise",items:["Salesforce Platform","Apex","LWC","Salesforce APIs","Reports","Dashboards","Flows","Salesforce Automation","PEGA","PEGA Case Management","PEGA Workflow Automation"]},{title:"Databases & Data",icon:"data",items:["SQL","H2","MongoDB","Mongoose","Data Processing","Data Pipelines","Data Analysis","Data Visualization","SMOTE"]},{title:"DevOps & Developer Tools",icon:"devops",items:["Git","GitHub","GitHub Actions","Docker","Maven","SDKMAN","Vercel","CI/CD","Kafka","Java 17","Java 21"]},{title:"Software Engineering",icon:"engineering",items:["Data Structures & Algorithms","OOP","Graphs","Dynamic Programming","Debugging","Testing","Modular Design","System Design","Workflow Automation","Technical Documentation"]}],Dt=[{company:"Areteans Technology Solutions Pvt. Ltd. | Hyderabad",role:"Technology Specialist Apprentice",period:"Jan 2025 – Jun 2025",badge:"Current Role",points:["Implemented PEGA-based workflow automation and application logic for enterprise business processes.","Optimized backend logic and case flows, contributing to a 25% improvement in process efficiency.","Collaborated with engineering teams on application development, AI-enabled workflows, debugging, testing, and process optimization."]},{company:"Technical Hub Pvt. Ltd. | Surampalem",role:"Software Engineering Intern — Salesforce Platform",period:"Jun 2024 – Jul 2024",badge:"Completed",points:["Developed Salesforce application functionality using Apex and Lightning Web Components (LWC).","Integrated third-party REST APIs and developed Apex/Python backend logic for AI-driven sentiment-analysis workflows.","Worked on AI/data processing, application integration, debugging, testing, and reusable component development."]}],z=d==="All"?Nt:Nt.filter(N=>N.category.toLowerCase().includes(d.toLowerCase())),Ce=_==="dark",nt=Ce?"bg-slate-950 text-slate-100":"bg-slate-50 text-slate-900",T=Ce?"bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all shadow-lg":"bg-white/70 backdrop-blur-xl border border-slate-200/80 hover:border-cyan-500/40 hover:shadow-md transition-all shadow-sm",g=Ce?"bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70":"bg-white/80 backdrop-blur-xl border-b border-slate-200/80",O=Ce?"text-slate-400":"text-slate-600",k=Ce?"bg-slate-900/60 border-slate-800 text-white placeholder-slate-500":"bg-white/70 border-slate-200 text-slate-800 placeholder-slate-400";return y.jsxs("div",{className:`min-h-screen ${nt} font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`,children:[n&&y.jsx("div",{className:"fixed inset-0 z-[45] w-screen h-screen bg-slate-950/60 backdrop-blur-sm lg:hidden cursor-pointer",onClick:()=>i(!1)}),a&&y.jsxs("div",{className:`fixed inset-0 z-50 ${Ce?"bg-slate-950 text-white":"bg-slate-50 text-slate-900"} flex flex-col items-center justify-center transition-opacity duration-700`,children:[y.jsx("div",{className:"w-12 h-12 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"}),y.jsx("h2",{className:"text-xl font-bold tracking-wider uppercase",children:"DANDE TEJASWINI"}),y.jsx("p",{className:`text-xs ${O} mt-1 tracking-widest`,children:"Loading Portfolio..."})]}),y.jsx("canvas",{ref:H,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:61,display:!a&&r?"block":"none"}}),!a&&r&&y.jsx("div",{onClick:we,className:"fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer p-6 overflow-hidden select-none backdrop-blur-xl",style:{background:Ce?"rgba(15, 23, 42, 0.65)":"rgba(248, 250, 252, 0.55)"},children:y.jsxs("div",{className:"text-center space-y-6 max-w-md mx-auto relative z-10",children:[y.jsx("div",{className:"w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/80 shadow-2xl shadow-cyan-500/30 transition-transform hover:scale-105",children:y.jsx("img",{src:"/tejaswini-portfolio/avatar.jpg",alt:"Tejaswini",className:"w-full h-full object-cover",onError:N=>{N.currentTarget.style.display="none"}})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider",children:"Interactive Portfolio"}),y.jsx("h1",{className:`text-3xl sm:text-4xl font-extrabold tracking-tight ${Ce?"text-white":"text-slate-900"}`,children:"Welcome to My Profile"}),y.jsx("p",{className:`text-sm ${Ce?"text-slate-400":"text-slate-600"}`,children:"Dande Tejaswini — Software Engineer & AI Developer"})]}),y.jsx("div",{className:"pt-2",children:y.jsxs("span",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all text-sm",children:[y.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),"Tap to Enter & Start AI Voice"]})}),y.jsx("p",{className:`text-xs ${Ce?"text-slate-500":"text-slate-400"} animate-bounce pt-2`,children:"Click anywhere to continue"})]})}),y.jsx("canvas",{ref:ne,className:"fixed inset-0 pointer-events-none z-0 w-full h-full",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0}}),y.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 ${g} shadow-sm transition-all`,children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-18 flex items-center justify-between",children:[y.jsxs("a",{href:"#home",className:"text-base sm:text-lg font-extrabold tracking-tight flex items-center space-x-2.5 hover:opacity-85 transition-opacity",children:[y.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block shadow-sm shadow-cyan-500/50"}),y.jsx("span",{className:"tracking-wider",children:"DANDE TEJASWINI"})]}),y.jsx("nav",{className:`hidden lg:flex items-center space-x-6 text-sm font-medium ${O}`,children:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"journey",label:"Journey"},{id:"credentials",label:"Credentials"},{id:"contact",label:"Contact"}].map(N=>y.jsx("a",{href:`#${N.id}`,className:`transition-colors hover:text-cyan-500 py-1 ${t===N.id?"text-cyan-500 font-semibold border-b-2 border-cyan-500":""}`,children:N.label},N.id))}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsxs("a",{href:"https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),y.jsx("span",{children:"Resume"})]}),y.jsx("button",{onClick:()=>E(_==="dark"?"light":"dark"),className:`p-2.5 rounded-xl ${Ce?"bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800":"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"} transition-colors`,title:"Toggle Light/Dark Theme",children:Ce?y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),y.jsx("button",{onClick:()=>i(!n),className:"lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),n&&y.jsxs("div",{className:`relative z-50 lg:hidden ${Ce?"bg-slate-900/95 text-slate-100 border-slate-800":"bg-white/95 text-slate-800 border-slate-200"} backdrop-blur-xl border-b px-6 py-4 space-y-3 text-sm shadow-2xl`,children:[[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"journey",label:"Journey"},{id:"credentials",label:"Credentials"},{id:"contact",label:"Contact"}].map(N=>y.jsx("a",{href:`#${N.id}`,onClick:()=>i(!1),className:"block text-slate-700 dark:text-slate-300 hover:text-cyan-500 py-1.5 font-medium",children:N.label},N.id)),y.jsx("div",{className:"pt-2 border-t border-slate-200 dark:border-slate-800",children:y.jsxs("a",{href:"https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",onClick:()=>i(!1),className:"flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm w-full",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),y.jsx("span",{children:"Download Resume"})]})})]})]}),y.jsx("section",{id:"home",className:"relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-center",children:[y.jsx("div",{className:"col-span-12 md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2",children:y.jsxs("div",{className:`${T} p-4 sm:p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-[360px] sm:max-w-[420px]`,children:[y.jsx("div",{className:"absolute -top-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow z-20",children:"Tejaswini's AI Assistant"}),y.jsxs("div",{className:`w-full min-h-[410px] sm:min-h-[450px] ${Ce?"bg-slate-900/60 border-slate-800":"bg-slate-100/80 border-slate-200"} rounded-3xl overflow-hidden flex flex-col items-center justify-between p-5 sm:p-7 border relative shadow-inner gap-4`,children:[y.jsxs("div",{className:"w-full flex items-center justify-between px-1",children:[y.jsxs("div",{className:"flex items-center space-x-1.5",children:[y.jsx("span",{className:`w-2 h-2 rounded-full ${x?"bg-cyan-400 animate-ping":"bg-cyan-500"}`}),y.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-cyan-500",children:x?"Speaking...":U?"Paused":"AI Assistant Active"})]}),x&&y.jsxs("div",{className:"flex items-end space-x-0.5 h-3",children:[y.jsx("span",{className:"w-0.5 h-full bg-cyan-500 animate-bounce"}),y.jsx("span",{className:"w-0.5 h-2/3 bg-indigo-400 animate-bounce",style:{animationDelay:"0.15s"}}),y.jsx("span",{className:"w-0.5 h-full bg-cyan-500 animate-bounce",style:{animationDelay:"0.3s"}})]})]}),y.jsxs("div",{onClick:ve,title:U?"Tap to Resume Speech":x?"Tap to Pause Speech":"Tap to Hear Assistant",className:`relative w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 shadow-xl ${x?"border-cyan-400 ring-4 ring-cyan-500/25 scale-105 transition-all duration-300":"border-cyan-300/80 hover:border-cyan-500"} transition-all duration-300 group/avatar shrink-0 my-auto`,style:{perspective:"600px"},children:[y.jsx("style",{children:`
                    @keyframes talkingHead3D {
                      0%, 100% { transform: scale(1.3) rotate(0deg) translateY(0px) rotateY(0deg); }
                      25% { transform: scale(1.33) rotate(2deg) translateY(-3px) rotateY(-4deg); }
                      50% { transform: scale(1.31) rotate(-2deg) translateY(1px) rotateY(4deg); }
                      75% { transform: scale(1.34) rotate(1.5deg) translateY(-2px) rotateY(-2deg); }
                    }
                    @keyframes lipSyncTalkingMouth {
                      0%, 100% { transform: scaleY(0.2) scaleX(0.85); opacity: 0.6; }
                      20% { transform: scaleY(1.5) scaleX(1.15); opacity: 0.95; }
                      40% { transform: scaleY(0.4) scaleX(0.8); opacity: 0.7; }
                      60% { transform: scaleY(1.7) scaleX(1.2); opacity: 1; }
                      80% { transform: scaleY(0.6) scaleX(0.9); opacity: 0.8; }
                    }
                  `}),F?y.jsx("video",{ref:P,src:F,autoPlay:!0,playsInline:!0,className:"w-full h-full object-cover scale-[1.3] transform-gpu rounded-full overflow-hidden",onPlay:()=>{R(!0),L(!1)},onEnded:()=>{if(R(!1),L(!1),Q(null),V.current){const N=V.current;V.current=null,N()}},onError:()=>{if(Q(null),V.current){const N=V.current;V.current=null,N()}}}):y.jsx("img",{src:"/tejaswini-portfolio/avatar.jpg",alt:"Tejaswini AI Assistant",className:`w-full h-full object-cover rounded-full transition-transform duration-500 ${x?"scale-110":"group-hover/avatar:scale-110"}`,style:{animation:x?"talkingHead3D 2.5s ease-in-out infinite":"none",transformOrigin:"center center"},onError:N=>{N.currentTarget.style.display="none",N.currentTarget.nextElementSibling&&(N.currentTarget.nextElementSibling.style.display="block")}}),y.jsx("div",{className:"hidden w-full h-full relative",children:y.jsxs("svg",{className:"w-full h-full p-1",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#avatarGlow)"}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"avatarGlow",x1:"0",y1:"0",x2:"100",y2:"100",children:[y.jsx("stop",{offset:"0%",stopColor:"#06b6d4"}),y.jsx("stop",{offset:"50%",stopColor:"#6366f1"}),y.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})}),y.jsx("path",{d:"M22 45 C 20 20, 80 20, 78 45 C 82 65, 75 80, 72 88 C 65 78, 70 50, 70 45 C 70 25, 30 25, 30 45 C 30 50, 35 78, 28 88 C 25 80, 18 65, 22 45 Z",fill:"#0f172a"}),y.jsx("ellipse",{cx:"50",cy:"52",rx:"18",ry:"22",fill:"#e0f2fe"})]})}),!F&&x&&y.jsx("div",{className:"absolute pointer-events-none rounded-full bg-rose-950/70 border border-rose-400/50 shadow-inner",style:{bottom:"29%",left:"43%",width:"14%",height:"8%",animation:"lipSyncTalkingMouth 0.3s ease-in-out infinite alternate",boxShadow:"0 0 6px rgba(244, 63, 94, 0.6)"}}),U&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest border border-cyan-500/40",children:"Paused"})]}),y.jsx("p",{className:"text-[10px] font-bold text-cyan-500 uppercase tracking-widest text-center",children:U?"Tap avatar to Resume":x?"Tap avatar to Pause":"Tap avatar to Speak"}),y.jsx("div",{className:"w-full flex justify-center py-1",children:y.jsx("button",{onClick:Oe,className:"max-w-[190px] w-full flex items-center justify-center bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] text-center whitespace-nowrap",children:y.jsx("span",{children:"Hire Tejaswini"})})}),y.jsxs("p",{className:`text-xs font-medium ${Ce?"text-slate-200":"text-slate-700"} px-2 text-center italic leading-relaxed`,children:["“",w,"”"]})]}),y.jsx("div",{className:"w-full mt-4 space-y-2",children:y.jsxs("div",{className:"flex flex-wrap gap-1.5 justify-center",children:[y.jsx("button",{onClick:ke,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"About"}),y.jsx("button",{onClick:et,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Skills"}),y.jsx("button",{onClick:Ve,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Projects"}),y.jsx("button",{onClick:$,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Journey"}),y.jsx("button",{onClick:de,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Education"}),y.jsx("button",{onClick:re,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Achievements"}),y.jsx("button",{onClick:Ne,className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50 hover:bg-sky-900/60":"bg-sky-50 text-sky-700 border-sky-200/80 hover:bg-sky-100/80"}`,children:"Credentials"})]})})]})}),y.jsxs("div",{className:"col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 space-y-6",children:[y.jsxs("div",{className:`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${Ce?"bg-cyan-950/50 border-cyan-800/60 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"} border text-xs font-semibold tracking-wide uppercase`,children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-pulse"}),y.jsx("span",{children:"Software Engineer & AI Developer"})]}),y.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight",children:["DANDE ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500",children:"TEJASWINI"})]}),y.jsx("p",{className:`text-base sm:text-lg ${O} max-w-xl font-normal leading-relaxed`,children:"“Software Engineer with hands-on experience in AI, Python, JavaScript, Salesforce, backend development, and REST APIs. Building AI-powered applications, intelligent developer tools, NLP solutions, and enterprise automation systems with a strong foundation in software engineering.”"}),y.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[y.jsxs("a",{href:"#projects",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]",children:[y.jsx("span",{children:"Explore My Work"}),y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),y.jsxs("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${T} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 text-cyan-500 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),y.jsx("span",{children:"LinkedIn"})]}),y.jsxs("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${T} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"GitHub"})]})]})]})]})}),y.jsx("section",{id:"about",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Professional Profile"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"About Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-start",children:[y.jsxs("div",{className:`${T} p-8 rounded-3xl space-y-4`,children:[y.jsx("h4",{className:"text-xl font-bold",children:"Background & Passion"}),y.jsx("p",{className:`${O} leading-relaxed text-sm sm:text-base`,children:"I am an entry-level Software Engineer and AI Developer with a strong foundation in Artificial Intelligence, software engineering, backend development, and API integration. My technical background includes Python, Java, JavaScript, Salesforce, Apex, Lightning Web Components, and modern AI/NLP technologies."}),y.jsx("p",{className:`${O} leading-relaxed text-sm sm:text-base`,children:"I enjoy building AI-powered applications, intelligent developer tools, NLP solutions, and workflow automation systems, with hands-on experience across projects involving multi-agent systems, REST APIs, FastAPI, Transformers, and Salesforce platforms. I focus on developing practical, reliable solutions while continuously strengthening my software engineering and problem-solving skills."}),y.jsxs("div",{className:"pt-3 space-y-2 border-t border-slate-200 dark:border-slate-800",children:[y.jsx("h5",{className:`text-xs font-bold uppercase tracking-wider ${O}`,children:"Specialized Roles"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["AI Engineer","GenAI / LLM Engineer","Software Engineer","Full Stack Developer","Salesforce Developer"].map(N=>y.jsx("span",{className:`text-[11px] font-medium px-3 py-1 rounded-full border transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border-sky-800/50":"bg-sky-50 text-sky-700 border-sky-200/80"}`,children:N},N))})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-cyan-500",children:"10+"}),y.jsx("h5",{className:"text-sm font-bold",children:"Projects Shipped"}),y.jsx("p",{className:`text-xs ${O}`,children:"AI, software engineering, analytics, and Salesforce projects"})]}),y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-indigo-500",children:"6"}),y.jsx("h5",{className:"text-sm font-bold",children:"AI Domains"}),y.jsx("p",{className:`text-xs ${O}`,children:"GenAI, Agentic AI, RAG, NLP, ML, and AI automation"})]}),y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-violet-500",children:"7+"}),y.jsx("h5",{className:"text-sm font-bold",children:"Certifications"}),y.jsx("p",{className:`text-xs ${O}`,children:"Salesforce Platform Dev I, Agentforce, Pega CSA, RHCSA, Python & Java"})]}),y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-sky-500",children:"8.64"}),y.jsx("h5",{className:"text-sm font-bold",children:"B.Tech CGPA"}),y.jsx("p",{className:`text-xs ${O}`,children:"Computer Science & Engineering Academic Distinction at Aditya University"})]}),y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-teal-500",children:"25%"}),y.jsx("h5",{className:"text-sm font-bold",children:"Efficiency Boost"}),y.jsx("p",{className:`text-xs ${O}`,children:"Process optimization & workflow automation in PEGA/Salesforce"})]}),y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-emerald-500",children:"95%+"}),y.jsx("h5",{className:"text-sm font-bold",children:"System Accuracy"}),y.jsx("p",{className:`text-xs ${O}`,children:"Barcode scanning precision & ML transaction anomaly detection"})]})]})]})]})}),y.jsx("section",{id:"skills",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Technical Proficiency"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"SKILLS"})]}),y.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:Rt.map((N,G)=>y.jsxs("div",{className:`${T} p-6 rounded-3xl space-y-4`,children:[y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsxs("div",{className:"w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-xs",children:["0",G+1]}),y.jsx("h4",{className:"text-base font-bold",children:N.title})]}),y.jsx("div",{className:"flex flex-wrap gap-1.5",children:N.items.map(ae=>y.jsx("span",{className:`text-[11px] font-medium px-3 py-1 rounded-full transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border border-sky-800/50":"bg-sky-50 text-sky-700 border border-sky-200/80"}`,children:ae},ae))})]},G))})]})}),y.jsx("section",{id:"projects",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Portfolio Showcase"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Featured Projects"})]}),y.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:["All","AI","Salesforce","Mobile","Web App","Security"].map(N=>y.jsx("button",{onClick:()=>p(N),className:`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${d===N?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20":Ce?"bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800":"bg-white text-slate-600 hover:text-slate-900 border border-slate-200"}`,children:N},N))}),y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:z.map(N=>y.jsxs("div",{onClick:()=>c(N),className:`${T} p-6 rounded-3xl flex flex-col justify-between cursor-pointer space-y-4 hover:scale-[1.01] transition-transform`,children:[y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("span",{className:"text-[11px] font-bold text-cyan-500 uppercase tracking-wider",children:N.category}),N.badge&&y.jsx("span",{className:"text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-2.5 py-0.5 rounded-full border border-cyan-500/20 whitespace-normal",children:N.badge})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-extrabold tracking-tight",children:N.title}),N.subtitle&&y.jsx("p",{className:"text-xs font-semibold text-sky-500 dark:text-sky-400 mt-0.5",children:N.subtitle})]}),y.jsx("p",{className:`text-xs ${O} line-clamp-3 leading-relaxed`,children:N.desc})]}),y.jsxs("div",{className:"space-y-4 pt-1",children:[y.jsx("div",{className:"flex flex-wrap gap-1.5",children:N.tech.map(G=>y.jsx("span",{className:`text-[11px] font-medium px-3 py-1 rounded-full transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border border-sky-800/50":"bg-sky-50 text-sky-700 border border-sky-200/80"}`,children:G},G))}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2 pt-3 border-t border-slate-200 dark:border-slate-800/80",children:[y.jsxs("button",{onClick:G=>{G.stopPropagation(),c(N)},className:`flex-1 min-w-[80px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${Ce?"bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80":"bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5 text-cyan-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),y.jsx("span",{children:"Overview"})]}),N.github&&y.jsxs("a",{href:N.github,target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),className:`flex-1 min-w-[70px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${Ce?"bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80":"bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"Repo"})]}),N.live&&y.jsxs("a",{href:N.live,target:"_blank",rel:"noopener noreferrer",onClick:G=>G.stopPropagation(),className:`flex-1 min-w-[70px] inline-flex items-center justify-center space-x-1 text-xs font-semibold py-2 px-2.5 rounded-xl border transition-all ${Ce?"bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border-slate-700/80":"bg-white hover:bg-slate-100 text-cyan-700 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),y.jsx("span",{children:"Live"})]})]})]})]},N.id))})]})}),l&&y.jsx("div",{onClick:()=>c(null),className:"fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md cursor-pointer",children:y.jsxs("div",{onClick:N=>N.stopPropagation(),className:`relative max-w-2xl w-full ${Ce?"bg-slate-900 border-slate-800 text-slate-100":"bg-white border-slate-200 text-slate-900"} rounded-3xl p-8 space-y-6 shadow-2xl border max-h-[90vh] overflow-y-auto cursor-default`,children:[y.jsx("button",{onClick:()=>c(null),className:"absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:l.category}),y.jsx("h3",{className:"text-2xl font-black",children:l.title}),l.subtitle&&y.jsx("p",{className:"text-xs font-semibold text-sky-500",children:l.subtitle})]}),y.jsx("p",{className:`text-sm ${O} leading-relaxed`,children:l.details}),l.metrics&&y.jsxs("div",{className:"space-y-3 pt-2",children:[y.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-cyan-500",children:"Key Highlights & Metrics"}),y.jsx("ul",{className:"space-y-2",children:l.metrics.map((N,G)=>y.jsxs("li",{className:"flex items-start space-x-2 text-xs font-medium",children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"}),y.jsx("span",{className:O,children:N})]},G))})]}),y.jsxs("div",{className:"pt-4 flex flex-wrap gap-3",children:[l.github&&y.jsxs("a",{href:l.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity",children:[y.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"View Repository"})]}),l.live&&y.jsxs("a",{href:l.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-95 transition-opacity",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),y.jsx("span",{children:"Live Demo"})]})]})]})}),y.jsx("section",{id:"journey",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Experience & Academics"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Career & Education Journey"})]}),y.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800",children:[y.jsx("div",{className:"w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsx("h4",{className:"text-xl font-extrabold",children:"Professional Internships"})]}),y.jsx("div",{className:"space-y-6",children:Dt.map((N,G)=>y.jsxs("div",{className:`${T} p-7 rounded-3xl space-y-4 relative overflow-hidden`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsxs("div",{children:[y.jsx("h5",{className:"text-lg font-bold",children:N.role}),y.jsx("p",{className:"text-xs font-semibold text-cyan-500",children:N.company})]}),y.jsx("span",{className:"text-[11px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20",children:N.period})]}),y.jsx("ul",{className:"space-y-2 pt-1",children:N.points.map((ae,Y)=>y.jsxs("li",{className:"flex items-start space-x-2 text-xs font-medium",children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"}),y.jsx("span",{className:O,children:ae})]},Y))})]},G))})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800",children:[y.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center",children:y.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 14l9-5-9-5-9 5 9 5z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),y.jsx("h4",{className:"text-xl font-extrabold",children:"Academic Background"})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:`${T} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"B.Tech — Computer Science & Engineering (CSE)"}),y.jsx("span",{className:"text-xs font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20 self-start sm:self-auto",children:"2022 – 2026"})]}),y.jsx("p",{className:`text-xs font-medium ${O}`,children:"Aditya University (Formerly Aditya Engineering College) — Surampalem, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${Ce?"bg-slate-800/80 text-cyan-300":"bg-cyan-50 text-cyan-800"} px-3 py-1.5 rounded-lg inline-block`,children:"CGPA: 8.64 / 10"})})]}),y.jsxs("div",{className:`${T} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"Intermediate — MPC"}),y.jsx("span",{className:"text-xs font-bold bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20 self-start sm:self-auto",children:"2020 – 2022"})]}),y.jsx("p",{className:`text-xs font-medium ${O}`,children:"Sri Saraswathi Junior College — Ongole, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${Ce?"bg-slate-800/80 text-indigo-300":"bg-indigo-50 text-indigo-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.7%"})})]}),y.jsxs("div",{className:`${T} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"10th Standard"}),y.jsx("span",{className:"text-xs font-bold bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20 self-start sm:self-auto",children:"2020"})]}),y.jsx("p",{className:`text-xs font-medium ${O}`,children:"Sri Chaitanya EM High School — Singarayakonda, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${Ce?"bg-slate-800/80 text-violet-300":"bg-violet-50 text-violet-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.66%"})})]})]})]})]})]})}),y.jsx("section",{id:"credentials",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Qualifications & Honors"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Credentials & Recognition"})]}),y.jsx("div",{className:"flex justify-center",children:y.jsxs("div",{className:`p-1.5 rounded-2xl ${Ce?"bg-slate-900 border border-slate-800":"bg-slate-200/70 border border-slate-300"} inline-flex space-x-2`,children:[y.jsxs("button",{onClick:()=>h("certifications"),className:`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${u==="certifications"?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md":"text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,children:["Certifications (",It.length,")"]}),y.jsxs("button",{onClick:()=>h("achievements"),className:`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${u==="achievements"?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md":"text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,children:["Honors & Achievements (",Vt.length,")"]})]})}),u==="certifications"&&y.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:It.map((N,G)=>y.jsxs("div",{className:`${T} p-6 rounded-3xl flex items-start justify-between gap-4`,children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("h5",{className:"text-sm font-bold leading-snug",children:N.title}),y.jsx("p",{className:`text-xs ${O}`,children:N.issuer})]}),y.jsx("a",{href:N.link,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-xl bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors shrink-0",title:"View Verified Credential",children:y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]},G))}),u==="achievements"&&y.jsx("div",{className:"space-y-4",children:Vt.map((N,G)=>y.jsxs("div",{className:`${T} p-6 rounded-3xl flex flex-wrap sm:flex-nowrap items-start gap-4`,children:[y.jsx("span",{className:"text-xs font-extrabold bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full border border-cyan-500/20 shrink-0",children:N.year}),y.jsxs("div",{className:"space-y-1",children:[y.jsx("h5",{className:"text-base font-bold",children:N.title}),y.jsx("p",{className:"text-xs font-semibold text-cyan-500",children:N.org}),y.jsx("p",{className:`text-xs ${O} pt-1`,children:N.desc})]})]},G))})]})}),y.jsx("section",{id:"contact",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Get In Touch"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Contact Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsx("h4",{className:"text-2xl font-bold",children:"Let's Connect"}),y.jsxs("div",{className:`${T} p-5 rounded-2xl space-y-3`,children:[y.jsx("p",{className:`${O} leading-relaxed text-sm font-medium`,children:"Thank you for your interest in working with Tejaswini. If you have an opportunity that matches her profile, feel free to reach out through the contact form."}),y.jsxs("div",{className:"pt-2 border-t border-slate-200 dark:border-slate-800",children:[y.jsx("h5",{className:`text-xs font-bold uppercase tracking-wider ${O} mb-2`,children:"Open Opportunity Areas:"}),y.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Software Engineering","AI / Machine Learning","Backend Development","Full Stack Development","Salesforce","PEGA","Automation","Technology-focused roles"].map(N=>y.jsx("span",{className:`text-[11px] font-medium px-3 py-1 rounded-full transition-colors ${Ce?"bg-sky-950/50 text-sky-300 border border-sky-800/50":"bg-sky-50 text-sky-700 border border-sky-200/80"}`,children:N},N))})]})]}),y.jsxs("div",{className:"space-y-4 pt-2",children:[y.jsxs("div",{className:`flex items-center space-x-4 ${T} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${O} uppercase`,children:"Email"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"dandetejaswini1329@gmail.com"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${T} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${O} uppercase`,children:"LinkedIn"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"tejaswini-dande"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${T} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${O} uppercase`,children:"GitHub"}),y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"dandetejaswini"})]})]})]})]}),y.jsx("div",{className:`${T} p-8 rounded-3xl`,children:y.jsxs("form",{onSubmit:Ct,className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${O} mb-2`,children:"Your Name"}),y.jsx("input",{type:"text",value:m.name,onChange:N=>{f({...m,name:N.target.value}),S&&A(null)},placeholder:"Enter your name",className:`w-full ${k} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${O} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: Valid name containing only letters (a-z, A-Z) and spaces."]}),ot()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",ot()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${O} mb-2`,children:"Your Email"}),y.jsx("input",{type:"email",value:m.email,onChange:N=>{f({...m,email:N.target.value}),S&&A(null)},placeholder:"example@gmail.com",className:`w-full ${k} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${O} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: Lowercase letters & numbers only before @gmail.com."]}),Qe()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",Qe()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${O} mb-2`,children:"Subject (Optional)"}),y.jsx("input",{type:"text",value:m.subject,onChange:N=>f({...m,subject:N.target.value}),placeholder:"e.g. Software Engineering Role / Project Collaboration",className:`w-full ${k} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${O} mb-2`,children:"Your Message"}),y.jsx("textarea",{rows:"4",value:m.message,onChange:N=>{f({...m,message:N.target.value}),S&&A(null)},placeholder:"Write your message here...",className:`w-full ${k} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${O} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: At least 10 characters message."]}),je()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",je()]})]}),S&&y.jsx("div",{className:`p-4 rounded-2xl text-xs font-semibold text-center leading-relaxed ${S.type==="success"?"bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30":"bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30"}`,children:S.text}),y.jsx("button",{type:"submit",disabled:v,className:"w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50",children:v?"Sending Message...":"Send Message"})]})})]})]})}),y.jsx("footer",{className:`py-8 px-6 relative z-10 border-t ${Ce?"border-slate-900 bg-slate-950 text-slate-400":"border-slate-200 bg-slate-100 text-slate-600"}`,children:y.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium",children:[y.jsxs("p",{children:["© ",new Date().getFullYear()," Dande Tejaswini. All rights reserved."]}),y.jsxs("div",{className:"flex items-center space-x-6",children:[y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"GitHub"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"LinkedIn"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"Email"})]})]})})]})}pb.createRoot(document.getElementById("root")).render(y.jsx(OS.StrictMode,{children:y.jsx(C3,{})}));
