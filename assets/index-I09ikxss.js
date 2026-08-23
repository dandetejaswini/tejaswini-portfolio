(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function yg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},qc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=Symbol.for("react.transitional.element"),xS=Symbol.for("react.fragment");function bg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:gS,type:t,key:i,ref:e!==void 0?e:null,props:n}}qc.Fragment=xS;qc.jsx=bg;qc.jsxs=bg;Mg.exports=qc;var y=Mg.exports,Eg={exports:{}},Be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=Symbol.for("react.transitional.element"),_S=Symbol.for("react.portal"),vS=Symbol.for("react.fragment"),SS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),MS=Symbol.for("react.consumer"),bS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),AS=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),RS=Symbol.for("react.activity"),jp=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var Ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,Cg={};function Nr(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Ag}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Nr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=Nr.prototype;function bh(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Ag}var Eh=bh.prototype=new wg;Eh.constructor=bh;Rg(Eh,Nr.prototype);Eh.isPureReactComponent=!0;var Yp=Array.isArray;function Pf(){}var Mt={H:null,A:null,T:null,S:null},Ng=Object.prototype.hasOwnProperty;function Th(t,e,n){var i=n.ref;return{$$typeof:Mh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function wS(t,e){return Th(t.type,e,t.props)}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mh}function NS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zp=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NS(""+t.key):e.toString(36)}function DS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Pf,Pf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Xs(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Mh:case _S:r=!0;break;case Tg:return r=t._init,Xs(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+_u(t,0):i,Yp(a)?(n="",r!=null&&(n=r.replace(Zp,"$&/")+"/"),Xs(a,e,n,"",function(c){return c})):a!=null&&(Ah(a)&&(a=wS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Zp,"$&/")+"/")+r)),e.push(a)),1;r=0;var l=i===""?".":i+":";if(Yp(t))for(var o=0;o<t.length;o++)i=t[o],s=l+_u(i,o),r+=Xs(i,e,n,s,a);else if(o=CS(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,s=l+_u(i,o++),r+=Xs(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Xs(DS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function to(t,e,n){if(t==null)return t;var i=[],a=0;return Xs(t,i,"","",function(s){return e.call(n,s,a++)}),i}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},LS={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Activity=RS;Be.Children=LS;Be.Component=Nr;Be.Fragment=vS;Be.Profiler=yS;Be.PureComponent=bh;Be.StrictMode=SS;Be.Suspense=TS;Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;Be.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Mt.H.useMemoCache(t)}};Be.cache=function(t){return function(){return t.apply(null,arguments)}};Be.cacheSignal=function(){return null};Be.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Rg({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Ng.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),l=0;l<s;l++)r[l]=arguments[l+2];i.children=r}return Th(t.type,a,i)};Be.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:MS,_context:t},t};Be.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];a.children=l}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Th(t,s,a)};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:ES,render:t}};Be.isValidElement=Ah;Be.lazy=function(t){return{$$typeof:Tg,_payload:{_status:-1,_result:t},_init:US}};Be.memo=function(t,e){return{$$typeof:AS,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Mt.T,n={};Mt.T=n;try{var i=t(),a=Mt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Pf,Kp)}catch(s){Kp(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Mt.T=e}};Be.unstable_useCacheRefresh=function(){return Mt.H.useCacheRefresh()};Be.use=function(t){return Mt.H.use(t)};Be.useActionState=function(t,e,n){return Mt.H.useActionState(t,e,n)};Be.useCallback=function(t,e){return Mt.H.useCallback(t,e)};Be.useContext=function(t){return Mt.H.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t,e){return Mt.H.useDeferredValue(t,e)};Be.useEffect=function(t,e){return Mt.H.useEffect(t,e)};Be.useEffectEvent=function(t){return Mt.H.useEffectEvent(t)};Be.useId=function(){return Mt.H.useId()};Be.useImperativeHandle=function(t,e,n){return Mt.H.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Mt.H.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Mt.H.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Mt.H.useMemo(t,e)};Be.useOptimistic=function(t,e){return Mt.H.useOptimistic(t,e)};Be.useReducer=function(t,e,n){return Mt.H.useReducer(t,e,n)};Be.useRef=function(t){return Mt.H.useRef(t)};Be.useState=function(t){return Mt.H.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Mt.H.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Mt.H.useTransition()};Be.version="19.2.8";Eg.exports=Be;var Gt=Eg.exports;const OS=yg(Gt);var Dg={exports:{}},jc={},Ug={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var X=P.length;P.push(O);e:for(;0<X;){var $=X-1>>>1,ae=P[$];if(0<a(ae,O))P[$]=O,P[X]=ae,X=$;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var O=P[0],X=P.pop();if(X!==O){P[0]=X;e:for(var $=0,ae=P.length,ce=ae>>>1;$<ce;){var ve=2*($+1)-1,Se=P[ve],et=ve+1,Ee=P[et];if(0>a(Se,X))et<ae&&0>a(Ee,Se)?(P[$]=Ee,P[et]=X,$=et):(P[$]=Se,P[ve]=X,$=ve);else if(et<ae&&0>a(Ee,X))P[$]=Ee,P[et]=X,$=et;else break e}}return O}function a(P,O){var X=P.sortIndex-O.sortIndex;return X!==0?X:P.id-O.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,l=r.now();t.unstable_now=function(){return r.now()-l}}var o=[],c=[],d=1,p=null,u=3,h=!1,S=!1,E=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function _(P){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=P)i(c),O.sortIndex=O.expirationTime,e(o,O);else break;O=n(c)}}function T(P){if(E=!1,_(P),!S)if(n(o)!==null)S=!0,A||(A=!0,z());else{var O=n(c);O!==null&&F(T,O.startTime-P)}}var A=!1,C=-1,v=5,R=-1;function N(){return m?!0:!(t.unstable_now()-R<v)}function D(){if(m=!1,A){var P=t.unstable_now();R=P;var O=!0;try{e:{S=!1,E&&(E=!1,x(C),C=-1),h=!0;var X=u;try{t:{for(_(P),p=n(o);p!==null&&!(p.expirationTime>P&&N());){var $=p.callback;if(typeof $=="function"){p.callback=null,u=p.priorityLevel;var ae=$(p.expirationTime<=P);if(P=t.unstable_now(),typeof ae=="function"){p.callback=ae,_(P),O=!0;break t}p===n(o)&&i(o),_(P)}else i(o);p=n(o)}if(p!==null)O=!0;else{var ce=n(c);ce!==null&&F(T,ce.startTime-P),O=!1}}break e}finally{p=null,u=X,h=!1}O=void 0}}finally{O?z():A=!1}}}var z;if(typeof M=="function")z=function(){M(D)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,ne=Z.port2;Z.port1.onmessage=D,z=function(){ne.postMessage(null)}}else z=function(){f(D,0)};function F(P,O){C=f(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(P){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var X=u;u=O;try{return P()}finally{u=X}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=u;u=P;try{return O()}finally{u=X}},t.unstable_scheduleCallback=function(P,O,X){var $=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?$+X:$):X=$,P){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,P={id:d++,callback:O,priorityLevel:P,startTime:X,expirationTime:ae,sortIndex:-1},X>$?(P.sortIndex=X,e(c,P),n(o)===null&&P===n(c)&&(E?(x(C),C=-1):E=!0,F(T,X-$))):(P.sortIndex=ae,e(o,P),S||h||(S=!0,A||(A=!0,z()))),P},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(P){var O=u;return function(){var X=u;u=O;try{return P.apply(this,arguments)}finally{u=X}}}})(Lg);Ug.exports=Lg;var PS=Ug.exports,Og={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=Gt;function Pg(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ua(){}var pn={d:{f:ua,r:function(){throw Error(Pg(522))},D:ua,C:ua,L:ua,m:ua,X:ua,S:ua,M:ua},p:0,findDOMNode:null},zS=Symbol.for("react.portal");function BS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var ll=IS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pn;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Pg(299));return BS(t,e,null,n)};gn.flushSync=function(t){var e=ll.T,n=pn.p;try{if(ll.T=null,pn.p=2,t)return t()}finally{ll.T=e,pn.p=n,pn.d.f()}};gn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,pn.d.C(t,e))};gn.prefetchDNS=function(t){typeof t=="string"&&pn.d.D(t)};gn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?pn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&pn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};gn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Yc(e.as,e.crossOrigin);pn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&pn.d.M(t)};gn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin);pn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};gn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Yc(e.as,e.crossOrigin);pn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else pn.d.m(t)};gn.requestFormReset=function(t){pn.d.r(t)};gn.unstable_batchedUpdates=function(t,e){return t(e)};gn.useFormState=function(t,e,n){return ll.H.useFormState(t,e,n)};gn.useFormStatus=function(){return ll.H.useHostTransitionStatus()};gn.version="19.2.8";function Ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig)}catch(t){console.error(t)}}Ig(),Og.exports=gn;var FS=Og.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=PS,zg=Gt,HS=FS;function te(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qp(t){if(zl(t)!==t)throw Error(te(188))}function GS(t){var e=t.alternate;if(!e){if(e=zl(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Qp(a),t;if(s===i)return Qp(a),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,l=a.child;l;){if(l===n){r=!0,n=a,i=s;break}if(l===i){r=!0,i=a,n=s;break}l=l.sibling}if(!r){for(l=s.child;l;){if(l===n){r=!0,n=s,i=a;break}if(l===i){r=!0,i=s,n=a;break}l=l.sibling}if(!r)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Gg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Gg(t),e!==null)return e;t=t.sibling}return null}var bt=Object.assign,VS=Symbol.for("react.element"),no=Symbol.for("react.transitional.element"),el=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),kg=Symbol.for("react.consumer"),Vi=Symbol.for("react.context"),Rh=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Ch=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),Ff=Symbol.for("react.activity"),kS=Symbol.for("react.memo_cache_sentinel"),Jp=Symbol.iterator;function Hr(t){return t===null||typeof t!="object"?null:(t=Jp&&t[Jp]||t["@@iterator"],typeof t=="function"?t:null)}var XS=Symbol.for("react.client.reference");function Hf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===XS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case If:return"Profiler";case Vg:return"StrictMode";case zf:return"Suspense";case Bf:return"SuspenseList";case Ff:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case el:return"Portal";case Vi:return t.displayName||"Context";case kg:return(t._context.displayName||"Context")+".Consumer";case Rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ch:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case xa:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}var tl=Array.isArray,Le=zg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=HS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ls={pending:!1,data:null,method:null,action:null},Gf=[],Ys=-1;function Ri(t){return{current:t}}function $t(t){0>Ys||(t.current=Gf[Ys],Gf[Ys]=null,Ys--)}function _t(t,e){Ys++,Gf[Ys]=t.current,t.current=e}var Mi=Ri(null),yl=Ri(null),Na=Ri(null),uc=Ri(null);function fc(t,e){switch(_t(Na,e),_t(yl,t),_t(Mi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?a0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=a0(e),t=cv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}$t(Mi),_t(Mi,t)}function mr(){$t(Mi),$t(yl),$t(Na)}function Vf(t){t.memoizedState!==null&&_t(uc,t);var e=Mi.current,n=cv(e,t.type);e!==n&&(_t(yl,t),_t(Mi,n))}function dc(t){yl.current===t&&($t(Mi),$t(yl)),uc.current===t&&($t(uc),Ul._currentValue=ls)}var vu,$p;function Ja(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||"",$p=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vu+t+$p}var Su=!1;function yu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){u=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],l=s[1];if(r&&l){var o=r.split(`
`),c=l.split(`
`);for(a=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===o.length||a===c.length)for(i=o.length-1,a=c.length-1;1<=i&&0<=a&&o[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==c[a]){var d=`
`+o[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ja(n):""}function WS(t,e){switch(t.tag){case 26:case 27:case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return t.child!==e&&e!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return yu(t.type,!1);case 11:return yu(t.type.render,!1);case 1:return yu(t.type,!0);case 31:return Ja("Activity");default:return""}}function em(t){try{var e="",n=null;do e+=WS(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var kf=Object.prototype.hasOwnProperty,wh=jt.unstable_scheduleCallback,Mu=jt.unstable_cancelCallback,qS=jt.unstable_shouldYield,jS=jt.unstable_requestPaint,On=jt.unstable_now,YS=jt.unstable_getCurrentPriorityLevel,Xg=jt.unstable_ImmediatePriority,Wg=jt.unstable_UserBlockingPriority,hc=jt.unstable_NormalPriority,ZS=jt.unstable_LowPriority,qg=jt.unstable_IdlePriority,KS=jt.log,QS=jt.unstable_setDisableYieldValue,Bl=null,Pn=null;function Ea(t){if(typeof KS=="function"&&QS(t),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Bl,t)}catch{}}var In=Math.clz32?Math.clz32:ey,JS=Math.log,$S=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(JS(t)/$S|0)|0}var io=256,ao=262144,so=4194304;function $a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var l=i&134217727;return l!==0?(i=l&~s,i!==0?a=$a(i):(r&=l,r!==0?a=$a(r):n||(n=l&~t,n!==0&&(a=$a(n))))):(l=i&~s,l!==0?a=$a(l):r!==0?a=$a(r):n||(n=i&~t,n!==0&&(a=$a(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Fl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ty(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(){var t=so;return so<<=1,!(so&62914560)&&(so=4194304),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ny(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-In(n),p=1<<d;l[d]=0,o[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&Yg(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Yg(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-In(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Kg(t,e){var n=e&-e;return n=n&42?1:Nh(n),n&(t.suspendedLanes|e)?0:n}function Nh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Qg(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:Sv(t.type))}function tm(t,e){var n=at.p;try{return at.p=t,e()}finally{at.p=n}}var Xa=Math.random().toString(36).slice(2),nn="__reactFiber$"+Xa,Tn="__reactProps$"+Xa,Dr="__reactContainer$"+Xa,Xf="__reactEvents$"+Xa,iy="__reactListeners$"+Xa,ay="__reactHandles$"+Xa,nm="__reactResources$"+Xa,Gl="__reactMarker$"+Xa;function Uh(t){delete t[nn],delete t[Tn],delete t[Xf],delete t[iy],delete t[ay]}function Zs(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=c0(t);t!==null;){if(n=t[nn])return n;t=c0(t)}return e}t=n,n=t.parentNode}return null}function Ur(t){if(t=t[nn]||t[Dr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function nl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(te(33))}function sr(t){var e=t[nm];return e||(e=t[nm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Jt(t){t[Gl]=!0}var Jg=new Set,$g={};function Ss(t,e){gr(t,e),gr(t+"Capture",e)}function gr(t,e){for($g[t]=e,t=0;t<e.length;t++)Jg.add(e[t])}var sy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),im={},am={};function ry(t){return kf.call(am,t)?!0:kf.call(im,t)?!1:sy.test(t)?am[t]=!0:(im[t]=!0,!1)}function ko(t,e,n){if(ry(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ro(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function wi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Xn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ex(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ly(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wf(t){if(!t._valueTracker){var e=ex(t)?"checked":"value";t._valueTracker=ly(t,e,""+t[e])}}function tx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ex(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oy=/[\n"\\]/g;function Yn(t){return t.replace(oy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qf(t,e,n,i,a,s,r,l){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xn(e)):t.value!==""+Xn(e)&&(t.value=""+Xn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?jf(t,r,Xn(e)):n!=null?jf(t,r,Xn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Xn(l):t.removeAttribute("name")}function nx(t,e,n,i,a,s,r,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Wf(t);return}n=n!=null?""+Xn(n):"",e=e!=null?""+Xn(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Wf(t)}function jf(t,e,n){e==="number"&&pc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function rr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function ix(t,e,n){if(e!=null&&(e=""+Xn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Xn(n):""}function ax(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(te(92));if(tl(i)){if(1<i.length)throw Error(te(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Xn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Wf(t)}function xr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||cy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function sx(t,e,n){if(e!=null&&typeof e!="object")throw Error(te(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&sm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&sm(t,s,e[s])}function Lh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Yf=null;function Oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,lr=null;function rm(t){var e=Ur(t);if(e&&(t=e.stateNode)){var n=t[Tn]||null;e:switch(t=e.stateNode,e.type){case"input":if(qf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Tn]||null;if(!a)throw Error(te(90));qf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&tx(i)}break e;case"textarea":ix(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&rr(t,!!n.multiple,e,!1)}}}var Eu=!1;function rx(t,e,n){if(Eu)return t(e,n);Eu=!0;try{var i=t(e);return i}finally{if(Eu=!1,(Ks!==null||lr!==null)&&(lu(),Ks&&(e=Ks,t=lr,lr=Ks=null,rm(e),t)))for(e=0;e<t.length;e++)rm(t[e])}}function Ml(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=!1;if(Ji)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Zf=!1}var Ta=null,Ph=null,Wo=null;function lx(){if(Wo)return Wo;var t,e=Ph,n=e.length,i,a="value"in Ta?Ta.value:Ta.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Wo=a.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function lm(){return!1}function An(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:lm,this.isPropagationStopped=lm,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=An(ys),Vl=bt({},ys,{view:0,detail:0}),dy=An(Vl),Tu,Au,Vr,Qc=bt({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ih,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(Tu=t.screenX-Vr.screenX,Au=t.screenY-Vr.screenY):Au=Tu=0,Vr=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),om=An(Qc),hy=bt({},Qc,{dataTransfer:0}),py=An(hy),my=bt({},Vl,{relatedTarget:0}),Ru=An(my),gy=bt({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=An(gy),_y=bt({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vy=An(_y),Sy=bt({},ys,{data:0}),cm=An(Sy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function Ih(){return Ey}var Ty=bt({},Vl,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ih,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ay=An(Ty),Ry=bt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),um=An(Ry),Cy=bt({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ih}),wy=An(Cy),Ny=bt({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=An(Ny),Uy=bt({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=An(Uy),Oy=bt({},ys,{newState:0,oldState:0}),Py=An(Oy),Iy=[9,13,27,32],zh=Ji&&"CompositionEvent"in window,ol=null;Ji&&"documentMode"in document&&(ol=document.documentMode);var zy=Ji&&"TextEvent"in window&&!ol,ox=Ji&&(!zh||ol&&8<ol&&11>=ol),fm=" ",dm=!1;function cx(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ux(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function By(t,e){switch(t){case"compositionend":return ux(e);case"keypress":return e.which!==32?null:(dm=!0,fm);case"textInput":return t=e.data,t===fm&&dm?null:t;default:return null}}function Fy(t,e){if(Qs)return t==="compositionend"||!zh&&cx(t,e)?(t=lx(),Wo=Ph=Ta=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ox&&e.locale!=="ko"?null:e.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hy[t.type]:e==="textarea"}function fx(t,e,n,i){Ks?lr?lr.push(i):lr=[i]:Ks=i,e=Uc(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var cl=null,bl=null;function Gy(t){rv(t,0)}function Jc(t){var e=nl(t);if(tx(e))return t}function pm(t,e){if(t==="change")return e}var dx=!1;if(Ji){var Cu;if(Ji){var wu="oninput"in document;if(!wu){var mm=document.createElement("div");mm.setAttribute("oninput","return;"),wu=typeof mm.oninput=="function"}Cu=wu}else Cu=!1;dx=Cu&&(!document.documentMode||9<document.documentMode)}function gm(){cl&&(cl.detachEvent("onpropertychange",hx),bl=cl=null)}function hx(t){if(t.propertyName==="value"&&Jc(bl)){var e=[];fx(e,bl,t,Oh(t)),rx(Gy,e)}}function Vy(t,e,n){t==="focusin"?(gm(),cl=e,bl=n,cl.attachEvent("onpropertychange",hx)):t==="focusout"&&gm()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(bl)}function Xy(t,e){if(t==="click")return Jc(e)}function Wy(t,e){if(t==="input"||t==="change")return Jc(e)}function qy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:qy;function El(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!kf.call(e,a)||!Bn(t[a],e[a]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=xm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xm(n)}}function px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var jy=Ji&&"documentMode"in document&&11>=document.documentMode,Js=null,Kf=null,ul=null,Qf=!1;function vm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||Js==null||Js!==pc(i)||(i=Js,"selectionStart"in i&&Bh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ul&&El(ul,i)||(ul=i,i=Uc(Kf,"onSelect"),0<i.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Js)))}function ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},Nu={},gx={};Ji&&(gx=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ms(t){if(Nu[t])return Nu[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gx)return Nu[t]=e[n];return t}var xx=Ms("animationend"),_x=Ms("animationiteration"),vx=Ms("animationstart"),Yy=Ms("transitionrun"),Zy=Ms("transitionstart"),Ky=Ms("transitioncancel"),Sx=Ms("transitionend"),yx=new Map,Jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jf.push("scrollEnd");function ci(t,e){yx.set(t,e),Ss(e,[t])}var mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Vn=[],er=0,Fh=0;function $c(){for(var t=er,e=Fh=er=0;e<t;){var n=Vn[e];Vn[e++]=null;var i=Vn[e];Vn[e++]=null;var a=Vn[e];Vn[e++]=null;var s=Vn[e];if(Vn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Mx(n,a,s)}}function eu(t,e,n,i){Vn[er++]=t,Vn[er++]=e,Vn[er++]=n,Vn[er++]=i,Fh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Hh(t,e,n,i){return eu(t,e,n,i),gc(t)}function bs(t,e){return eu(t,null,null,e),gc(t)}function Mx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-In(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function gc(t){if(50<vl)throw vl=0,vd=null,Error(te(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var tr={};function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new Qy(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function bx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function jo(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")Gh(t)&&(r=1);else if(typeof t=="string")r=nb(t,n,Mi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Ff:return t=Un(31,n,e,a),t.elementType=Ff,t.lanes=s,t;case js:return os(n.children,a,s,e);case Vg:r=8,a|=24;break;case If:return t=Un(12,n,e,a|2),t.elementType=If,t.lanes=s,t;case zf:return t=Un(13,n,e,a),t.elementType=zf,t.lanes=s,t;case Bf:return t=Un(19,n,e,a),t.elementType=Bf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vi:r=10;break e;case kg:r=9;break e;case Rh:r=11;break e;case Ch:r=14;break e;case xa:r=16,i=null;break e}r=29,n=Error(te(130,t===null?"null":typeof t,"")),i=null}return e=Un(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Du(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Ex(t){var e=Un(18,null,null,0);return e.stateNode=t,e}function Uu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Sm=new WeakMap;function Zn(t,e){if(typeof t=="object"&&t!==null){var n=Sm.get(t);return n!==void 0?n:(e={value:t,source:e,stack:em(e)},Sm.set(t,e),e)}return{value:t,source:e,stack:em(e)}}var nr=[],ir=0,xc=null,Tl=0,Wn=[],qn=0,Fa=null,xi=1,_i="";function Fi(t,e){nr[ir++]=Tl,nr[ir++]=xc,xc=t,Tl=e}function Tx(t,e,n){Wn[qn++]=xi,Wn[qn++]=_i,Wn[qn++]=Fa,Fa=t;var i=xi;t=_i;var a=32-In(i)-1;i&=~(1<<a),n+=1;var s=32-In(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,xi=1<<32-In(e)+a|n<<a|i,_i=s+t}else xi=1<<s|n<<a|i,_i=t}function Vh(t){t.return!==null&&(Fi(t,1),Tx(t,1,0))}function kh(t){for(;t===xc;)xc=nr[--ir],nr[ir]=null,Tl=nr[--ir],nr[ir]=null;for(;t===Fa;)Fa=Wn[--qn],Wn[qn]=null,_i=Wn[--qn],Wn[qn]=null,xi=Wn[--qn],Wn[qn]=null}function Ax(t,e){Wn[qn++]=xi,Wn[qn++]=_i,Wn[qn++]=Fa,xi=e.id,_i=e.overflow,Fa=t}var an=null,yt=null,Qe=!1,Da=null,Kn=!1,$f=Error(te(519));function Ha(t){var e=Error(te(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(Zn(e,t)),$f}function ym(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[nn]=t,e[Tn]=i,n){case"dialog":We("cancel",e),We("close",e);break;case"iframe":case"object":case"embed":We("load",e);break;case"video":case"audio":for(n=0;n<Nl.length;n++)We(Nl[n],e);break;case"source":We("error",e);break;case"img":case"image":case"link":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"input":We("invalid",e),nx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":We("invalid",e);break;case"textarea":We("invalid",e),ax(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||ov(e.textContent,n)?(i.popover!=null&&(We("beforetoggle",e),We("toggle",e)),i.onScroll!=null&&We("scroll",e),i.onScrollEnd!=null&&We("scrollend",e),i.onClick!=null&&(e.onclick=ki),e=!0):e=!1,e||Ha(t,!0)}function Mm(t){for(an=t.return;an;)switch(an.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:an=an.return}}function Cs(t){if(t!==an)return!1;if(!Qe)return Mm(t),Qe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ed(t.type,t.memoizedProps)),n=!n),n&&yt&&Ha(t),Mm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));yt=o0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));yt=o0(t)}else e===27?(e=yt,Wa(t.type)?(t=Cd,Cd=null,yt=t):yt=e):yt=an?$n(t.stateNode.nextSibling):null;return!0}function ds(){yt=an=null,Qe=!1}function Lu(){var t=Da;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),Da=null),t}function Al(t){Da===null?Da=[t]:Da.push(t)}var ed=Ri(null),Es=null,Xi=null;function va(t,e,n){_t(ed,e._currentValue),e._currentValue=n}function ji(t){t._currentValue=ed.current,$t(ed)}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function nd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=a;for(var o=0;o<e.length;o++)if(l.context===e[o]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,t),i||(r=null);break e}s=l.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(te(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),td(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Lr(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(te(387));if(r=r.memoizedProps,r!==null){var l=a.type;Bn(a.pendingProps.value,r.value)||(t!==null?t.push(l):t=[l])}}else if(a===uc.current){if(r=a.alternate,r===null)throw Error(te(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}a=a.return}t!==null&&nd(e,t,n,i),e.flags|=262144}function _c(t){for(t=t.firstContext;t!==null;){if(!Bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){Es=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function sn(t){return Rx(Es,t)}function oo(t,e){return Es===null&&hs(t),Rx(t,e)}function Rx(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Xi===null){if(t===null)throw Error(te(308));Xi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xi=Xi.next=e;return n}var Jy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},$y=jt.unstable_scheduleCallback,eM=jt.unstable_NormalPriority,Xt={$$typeof:Vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xh(){return{controller:new Jy,data:new Map,refCount:0}}function kl(t){t.refCount--,t.refCount===0&&$y(eM,function(){t.controller.abort()})}var fl=null,id=0,_r=0,or=null;function tM(t,e){if(fl===null){var n=fl=[];id=0,_r=mp(),or={status:"pending",value:void 0,then:function(i){n.push(i)}}}return id++,e.then(bm,bm),e}function bm(){if(--id===0&&fl!==null){or!==null&&(or.status="fulfilled");var t=fl;fl=null,_r=0,or=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function nM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Em=Le.S;Le.S=function(t,e){G_=On(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&tM(t,e),Em!==null&&Em(t,e)};var cs=Ri(null);function Wh(){var t=cs.current;return t!==null?t:mt.pooledCache}function Yo(t,e){e===null?_t(cs,cs.current):_t(cs,e.pool)}function Cx(){var t=Wh();return t===null?null:{parent:Xt._currentValue,pool:t}}var Or=Error(te(460)),qh=Error(te(474)),tu=Error(te(542)),vc={then:function(){}};function Tm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ki,ki),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rm(t),t;default:if(typeof e.status=="string")e.then(ki,ki);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(te(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Rm(t),t}throw us=e,Or}}function es(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(us=n,Or):n}}var us=null;function Am(){if(us===null)throw Error(te(459));var t=us;return us=null,t}function Rm(t){if(t===Or||t===tu)throw Error(te(483))}var cr=null,Rl=0;function co(t){var e=Rl;return Rl+=1,cr===null&&(cr=[]),wx(cr,t,e)}function kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function uo(t,e){throw e.$$typeof===VS?Error(te(525)):(t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nx(t){function e(f,x){if(t){var M=f.deletions;M===null?(f.deletions=[x],f.flags|=16):M.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f){for(var x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(f,x){return f=qi(f,x),f.index=0,f.sibling=null,f}function s(f,x,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<x?(f.flags|=67108866,x):M):(f.flags|=67108866,x)):(f.flags|=1048576,x)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function l(f,x,M,_){return x===null||x.tag!==6?(x=Du(M,f.mode,_),x.return=f,x):(x=a(x,M),x.return=f,x)}function o(f,x,M,_){var T=M.type;return T===js?d(f,x,M.props.children,_,M.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xa&&es(T)===x.type)?(x=a(x,M.props),kr(x,M),x.return=f,x):(x=jo(M.type,M.key,M.props,null,f.mode,_),kr(x,M),x.return=f,x)}function c(f,x,M,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Uu(M,f.mode,_),x.return=f,x):(x=a(x,M.children||[]),x.return=f,x)}function d(f,x,M,_,T){return x===null||x.tag!==7?(x=os(M,f.mode,_,T),x.return=f,x):(x=a(x,M),x.return=f,x)}function p(f,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Du(""+x,f.mode,M),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return M=jo(x.type,x.key,x.props,null,f.mode,M),kr(M,x),M.return=f,M;case el:return x=Uu(x,f.mode,M),x.return=f,x;case xa:return x=es(x),p(f,x,M)}if(tl(x)||Hr(x))return x=os(x,f.mode,M,null),x.return=f,x;if(typeof x.then=="function")return p(f,co(x),M);if(x.$$typeof===Vi)return p(f,oo(f,x),M);uo(f,x)}return null}function u(f,x,M,_){var T=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:l(f,x,""+M,_);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case no:return M.key===T?o(f,x,M,_):null;case el:return M.key===T?c(f,x,M,_):null;case xa:return M=es(M),u(f,x,M,_)}if(tl(M)||Hr(M))return T!==null?null:d(f,x,M,_,null);if(typeof M.then=="function")return u(f,x,co(M),_);if(M.$$typeof===Vi)return u(f,x,oo(f,M),_);uo(f,M)}return null}function h(f,x,M,_,T){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(M)||null,l(x,f,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case no:return f=f.get(_.key===null?M:_.key)||null,o(x,f,_,T);case el:return f=f.get(_.key===null?M:_.key)||null,c(x,f,_,T);case xa:return _=es(_),h(f,x,M,_,T)}if(tl(_)||Hr(_))return f=f.get(M)||null,d(x,f,_,T,null);if(typeof _.then=="function")return h(f,x,M,co(_),T);if(_.$$typeof===Vi)return h(f,x,M,oo(x,_),T);uo(x,_)}return null}function S(f,x,M,_){for(var T=null,A=null,C=x,v=x=0,R=null;C!==null&&v<M.length;v++){C.index>v?(R=C,C=null):R=C.sibling;var N=u(f,C,M[v],_);if(N===null){C===null&&(C=R);break}t&&C&&N.alternate===null&&e(f,C),x=s(N,x,v),A===null?T=N:A.sibling=N,A=N,C=R}if(v===M.length)return n(f,C),Qe&&Fi(f,v),T;if(C===null){for(;v<M.length;v++)C=p(f,M[v],_),C!==null&&(x=s(C,x,v),A===null?T=C:A.sibling=C,A=C);return Qe&&Fi(f,v),T}for(C=i(C);v<M.length;v++)R=h(C,f,v,M[v],_),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?v:R.key),x=s(R,x,v),A===null?T=R:A.sibling=R,A=R);return t&&C.forEach(function(D){return e(f,D)}),Qe&&Fi(f,v),T}function E(f,x,M,_){if(M==null)throw Error(te(151));for(var T=null,A=null,C=x,v=x=0,R=null,N=M.next();C!==null&&!N.done;v++,N=M.next()){C.index>v?(R=C,C=null):R=C.sibling;var D=u(f,C,N.value,_);if(D===null){C===null&&(C=R);break}t&&C&&D.alternate===null&&e(f,C),x=s(D,x,v),A===null?T=D:A.sibling=D,A=D,C=R}if(N.done)return n(f,C),Qe&&Fi(f,v),T;if(C===null){for(;!N.done;v++,N=M.next())N=p(f,N.value,_),N!==null&&(x=s(N,x,v),A===null?T=N:A.sibling=N,A=N);return Qe&&Fi(f,v),T}for(C=i(C);!N.done;v++,N=M.next())N=h(C,f,v,N.value,_),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?v:N.key),x=s(N,x,v),A===null?T=N:A.sibling=N,A=N);return t&&C.forEach(function(z){return e(f,z)}),Qe&&Fi(f,v),T}function m(f,x,M,_){if(typeof M=="object"&&M!==null&&M.type===js&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case no:e:{for(var T=M.key;x!==null;){if(x.key===T){if(T=M.type,T===js){if(x.tag===7){n(f,x.sibling),_=a(x,M.props.children),_.return=f,f=_;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xa&&es(T)===x.type){n(f,x.sibling),_=a(x,M.props),kr(_,M),_.return=f,f=_;break e}n(f,x);break}else e(f,x);x=x.sibling}M.type===js?(_=os(M.props.children,f.mode,_,M.key),_.return=f,f=_):(_=jo(M.type,M.key,M.props,null,f.mode,_),kr(_,M),_.return=f,f=_)}return r(f);case el:e:{for(T=M.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(f,x.sibling),_=a(x,M.children||[]),_.return=f,f=_;break e}else{n(f,x);break}else e(f,x);x=x.sibling}_=Uu(M,f.mode,_),_.return=f,f=_}return r(f);case xa:return M=es(M),m(f,x,M,_)}if(tl(M))return S(f,x,M,_);if(Hr(M)){if(T=Hr(M),typeof T!="function")throw Error(te(150));return M=T.call(M),E(f,x,M,_)}if(typeof M.then=="function")return m(f,x,co(M),_);if(M.$$typeof===Vi)return m(f,x,oo(f,M),_);uo(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,x!==null&&x.tag===6?(n(f,x.sibling),_=a(x,M),_.return=f,f=_):(n(f,x),_=Du(M,f.mode,_),_.return=f,f=_),r(f)):n(f,x)}return function(f,x,M,_){try{Rl=0;var T=m(f,x,M,_);return cr=null,T}catch(C){if(C===Or||C===tu)throw C;var A=Un(29,C,null,f.mode);return A.lanes=_,A.return=f,A}finally{}}}var ps=Nx(!0),Dx=Nx(!1),_a=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ad(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=gc(t),Mx(t,null,n),e}return eu(t,i,e,n),gc(t)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zg(t,n)}}function Ou(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var sd=!1;function hl(){if(sd){var t=or;if(t!==null)throw t}}function pl(t,e,n,i){sd=!1;var a=t.updateQueue;_a=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var o=l,c=o.next;o.next=null,r===null?s=c:r.next=c,r=o;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==r&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=o))}if(s!==null){var p=a.baseState;r=0,d=c=o=null,l=s;do{var u=l.lane&-536870913,h=u!==l.lane;if(h?(Ye&u)===u:(i&u)===u){u!==0&&u===_r&&(sd=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var S=t,E=l;u=e;var m=n;switch(E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(m,p,u);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,u=typeof S=="function"?S.call(m,p,u):S,u==null)break e;p=bt({},p,u);break e;case 2:_a=!0}}u=l.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=h,o=p):d=d.next=h,r|=u;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(o=p),a.baseState=o,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Va|=r,t.lanes=r,t.memoizedState=p}}function Ux(t,e){if(typeof t!="function")throw Error(te(191,t));t.call(e)}function Lx(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ux(n[t],e)}var vr=Ri(null),Sc=Ri(0);function Cm(t,e){t=na,_t(Sc,t),_t(vr,e),na=t|e.baseLanes}function rd(){_t(Sc,na),_t(vr,vr.current)}function Yh(){na=Sc.current,$t(vr),$t(Sc)}var Fn=Ri(null),Jn=null;function Sa(t){var e=t.alternate;_t(It,It.current&1),_t(Fn,t),Jn===null&&(e===null||vr.current!==null||e.memoizedState!==null)&&(Jn=t)}function ld(t){_t(It,It.current),_t(Fn,t),Jn===null&&(Jn=t)}function Ox(t){t.tag===22?(_t(It,It.current),_t(Fn,t),Jn===null&&(Jn=t)):ya()}function ya(){_t(It,It.current),_t(Fn,Fn.current)}function Dn(t){$t(Fn),Jn===t&&(Jn=null),$t(It)}var It=Ri(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ad(n)||Rd(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $i=0,Ge=null,dt=null,Vt=null,Mc=!1,ur=!1,ms=!1,bc=0,Cl=0,fr=null,iM=0;function Nt(){throw Error(te(321))}function Zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Kh(t,e,n,i,a,s){return $i=s,Ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?f_:lp,ms=!1,s=n(i,a),ms=!1,ur&&(s=Ix(e,n,i,a)),Px(t),s}function Px(t){Le.H=wl;var e=dt!==null&&dt.next!==null;if($i=0,Vt=dt=Ge=null,Mc=!1,Cl=0,fr=null,e)throw Error(te(300));t===null||Wt||(t=t.dependencies,t!==null&&_c(t)&&(Wt=!0))}function Ix(t,e,n,i){Ge=t;var a=0;do{if(ur&&(fr=null),Cl=0,ur=!1,25<=a)throw Error(te(301));if(a+=1,Vt=dt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Le.H=d_,s=e(n,i)}while(ur);return s}function aM(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?Xl(e):e,t=t.useState()[0],(dt!==null?dt.memoizedState:null)!==t&&(Ge.flags|=1024),e}function Qh(){var t=bc!==0;return bc=0,t}function Jh(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function $h(t){if(Mc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mc=!1}$i=0,Vt=dt=Ge=null,ur=!1,Cl=bc=0,fr=null}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Ge.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function zt(){if(dt===null){var t=Ge.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=Vt===null?Ge.memoizedState:Vt.next;if(e!==null)Vt=e,dt=t;else{if(t===null)throw Ge.alternate===null?Error(te(467)):Error(te(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Vt===null?Ge.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(t){var e=Cl;return Cl+=1,fr===null&&(fr=[]),t=wx(fr,t,e),e=Ge,(Vt===null?e.memoizedState:Vt.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?f_:lp),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xl(t);if(t.$$typeof===Vi)return sn(t)}throw Error(te(438,String(t)))}function ep(t){var e=null,n=Ge.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=nu(),Ge.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=kS;return e.index++,n}function ea(t,e){return typeof e=="function"?e(t):e}function Zo(t){var e=zt();return tp(e,dt,t)}function tp(t,e,n){var i=t.queue;if(i===null)throw Error(te(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var l=r=null,o=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Ye&p)===p:($i&p)===p){var u=c.revertLane;if(u===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===_r&&(d=!0);else if(($i&u)===u){c=c.next,u===_r&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=p,r=s):o=o.next=p,Ge.lanes|=u,Va|=u;p=c.action,ms&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=u,r=s):o=o.next=u,Ge.lanes|=p,Va|=p;c=c.next}while(c!==null&&c!==e);if(o===null?r=s:o.next=l,!Bn(s,t.memoizedState)&&(Wt=!0,d&&(n=or,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=o,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Pu(t){var e=zt(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Bn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zx(t,e,n){var i=Ge,a=zt(),s=Qe;if(s){if(n===void 0)throw Error(te(407));n=n()}else n=e();var r=!Bn((dt||a).memoizedState,n);if(r&&(a.memoizedState=n,Wt=!0),a=a.queue,np(Hx.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||Vt!==null&&Vt.memoizedState.tag&1){if(i.flags|=2048,Sr(9,{destroy:void 0},Fx.bind(null,i,a,n,e),null),mt===null)throw Error(te(349));s||$i&127||Bx(i,e,n)}return n}function Bx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ge.updateQueue,e===null?(e=nu(),Ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fx(t,e,n,i){e.value=n,e.getSnapshot=i,Gx(e)&&Vx(t)}function Hx(t,e,n){return n(function(){Gx(e)&&Vx(t)})}function Gx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Vx(t){var e=bs(t,2);e!==null&&Mn(e,t,2)}function od(t){var e=hn();if(typeof t=="function"){var n=t;if(t=n(),ms){Ea(!0);try{n()}finally{Ea(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e}function kx(t,e,n,i){return t.baseState=n,tp(t,dt,typeof i=="function"?i:ea)}function sM(t,e,n,i,a){if(su(t))throw Error(te(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Le.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Xx(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Xx(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Le.T,r={};Le.T=r;try{var l=n(a,i),o=Le.S;o!==null&&o(r,l),wm(t,e,l)}catch(c){cd(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Le.T=s}}else try{s=n(a,i),wm(t,e,s)}catch(c){cd(t,e,c)}}function wm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Nm(t,e,i)},function(i){return cd(t,e,i)}):Nm(t,e,n)}function Nm(t,e,n){e.status="fulfilled",e.value=n,Wx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xx(t,n)))}function cd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Wx(e),e=e.next;while(e!==i)}t.action=null}function Wx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function qx(t,e){return e}function Dm(t,e){if(Qe){var n=mt.formState;if(n!==null){e:{var i=Ge;if(Qe){if(yt){t:{for(var a=yt,s=Kn;a.nodeType!==8;){if(!s){a=null;break t}if(a=$n(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){yt=$n(a.nextSibling),i=a.data==="F!";break e}}Ha(i)}i=!1}i&&(e=n[0])}}return n=hn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qx,lastRenderedState:e},n.queue=i,n=o_.bind(null,Ge,i),i.dispatch=n,i=od(!1),s=rp.bind(null,Ge,!1,i.queue),i=hn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=sM.bind(null,Ge,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Um(t){var e=zt();return jx(e,dt,t)}function jx(t,e,n){if(e=tp(t,e,qx)[0],t=Zo(ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Xl(e)}catch(r){throw r===Or?tu:r}else i=e;e=zt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Ge.flags|=2048,Sr(9,{destroy:void 0},rM.bind(null,a,n),null)),[i,s,t]}function rM(t,e){t.action=e}function Lm(t){var e=zt(),n=dt;if(n!==null)return jx(e,n,t);zt(),e=e.memoizedState,n=zt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Sr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ge.updateQueue,e===null&&(e=nu(),Ge.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Yx(){return zt().memoizedState}function Ko(t,e,n,i){var a=hn();Ge.flags|=t,a.memoizedState=Sr(1|e,{destroy:void 0},n,i===void 0?null:i)}function au(t,e,n,i){var a=zt();i=i===void 0?null:i;var s=a.memoizedState.inst;dt!==null&&i!==null&&Zh(i,dt.memoizedState.deps)?a.memoizedState=Sr(e,s,n,i):(Ge.flags|=t,a.memoizedState=Sr(1|e,s,n,i))}function Om(t,e){Ko(8390656,8,t,e)}function np(t,e){au(2048,8,t,e)}function lM(t){Ge.flags|=4;var e=Ge.updateQueue;if(e===null)e=nu(),Ge.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Zx(t){var e=zt().memoizedState;return lM({ref:e,nextImpl:t}),function(){if(it&2)throw Error(te(440));return e.impl.apply(void 0,arguments)}}function Kx(t,e){return au(4,2,t,e)}function Qx(t,e){return au(4,4,t,e)}function Jx(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $x(t,e,n){n=n!=null?n.concat([t]):null,au(4,4,Jx.bind(null,e,t),n)}function ip(){}function e_(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Zh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function t_(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Zh(e,i[1]))return i[0];if(i=t(),ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i}function ap(t,e,n){return n===void 0||$i&1073741824&&!(Ye&261930)?t.memoizedState=e:(t.memoizedState=n,t=k_(),Ge.lanes|=t,Va|=t,n)}function n_(t,e,n,i){return Bn(n,e)?n:vr.current!==null?(t=ap(t,n,i),Bn(t,e)||(Wt=!0),t):!($i&42)||$i&1073741824&&!(Ye&261930)?(Wt=!0,t.memoizedState=n):(t=k_(),Ge.lanes|=t,Va|=t,e)}function i_(t,e,n,i,a){var s=at.p;at.p=s!==0&&8>s?s:8;var r=Le.T,l={};Le.T=l,rp(t,!1,e,n);try{var o=a(),c=Le.S;if(c!==null&&c(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=nM(o,i);ml(t,e,d,zn(t))}else ml(t,e,i,zn(t))}catch(p){ml(t,e,{then:function(){},status:"rejected",reason:p},zn())}finally{at.p=s,r!==null&&l.types!==null&&(r.types=l.types),Le.T=r}}function oM(){}function ud(t,e,n,i){if(t.tag!==5)throw Error(te(476));var a=a_(t).queue;i_(t,a,e,ls,n===null?oM:function(){return s_(t),n(i)})}function a_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ls,baseState:ls,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ls},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function s_(t){var e=a_(t);e.next===null&&(e=t.alternate.memoizedState),ml(t,e.next.queue,{},zn())}function sp(){return sn(Ul)}function r_(){return zt().memoizedState}function l_(){return zt().memoizedState}function cM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=zn();t=Ua(n);var i=La(e,t,n);i!==null&&(Mn(i,e,n),dl(i,e,n)),e={cache:Xh()},t.payload=e;return}e=e.return}}function uM(t,e,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},su(t)?c_(e,n):(n=Hh(t,e,n,i),n!==null&&(Mn(n,t,i),u_(n,e,i)))}function o_(t,e,n){var i=zn();ml(t,e,n,i)}function ml(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(su(t))c_(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,l=s(r,n);if(a.hasEagerState=!0,a.eagerState=l,Bn(l,r))return eu(t,e,a,0),mt===null&&$c(),!1}catch{}finally{}if(n=Hh(t,e,a,i),n!==null)return Mn(n,t,i),u_(n,e,i),!0}return!1}function rp(t,e,n,i){if(i={lane:2,revertLane:mp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},su(t)){if(e)throw Error(te(479))}else e=Hh(t,n,i,2),e!==null&&Mn(e,t,2)}function su(t){var e=t.alternate;return t===Ge||e!==null&&e===Ge}function c_(t,e){ur=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zg(t,n)}}var wl={readContext:sn,use:iu,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt};wl.useEffectEvent=Nt;var f_={readContext:sn,use:iu,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Om,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ko(4194308,4,Jx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){Ko(4,2,t,e)},useMemo:function(t,e){var n=hn();e=e===void 0?null:e;var i=t();if(ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=hn();if(n!==void 0){var a=n(e);if(ms){Ea(!0);try{n(e)}finally{Ea(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=uM.bind(null,Ge,t),[i.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:function(t){t=od(t);var e=t.queue,n=o_.bind(null,Ge,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ip,useDeferredValue:function(t,e){var n=hn();return ap(n,t,e)},useTransition:function(){var t=od(!1);return t=i_.bind(null,Ge,t.queue,!0,!1),hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ge,a=hn();if(Qe){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),mt===null)throw Error(te(349));Ye&127||Bx(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,Om(Hx.bind(null,i,s,t),[t]),i.flags|=2048,Sr(9,{destroy:void 0},Fx.bind(null,i,s,n,e),null),n},useId:function(){var t=hn(),e=mt.identifierPrefix;if(Qe){var n=_i,i=xi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=iM++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sp,useFormState:Dm,useActionState:Dm,useOptimistic:function(t){var e=hn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=rp.bind(null,Ge,!0,n),n.dispatch=e,[t,e]},useMemoCache:ep,useCacheRefresh:function(){return hn().memoizedState=cM.bind(null,Ge)},useEffectEvent:function(t){var e=hn(),n={impl:t};return e.memoizedState=n,function(){if(it&2)throw Error(te(440));return n.impl.apply(void 0,arguments)}}},lp={readContext:sn,use:iu,useCallback:e_,useContext:sn,useEffect:np,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:t_,useReducer:Zo,useRef:Yx,useState:function(){return Zo(ea)},useDebugValue:ip,useDeferredValue:function(t,e){var n=zt();return n_(n,dt.memoizedState,t,e)},useTransition:function(){var t=Zo(ea)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:zx,useId:r_,useHostTransitionStatus:sp,useFormState:Um,useActionState:Um,useOptimistic:function(t,e){var n=zt();return kx(n,dt,t,e)},useMemoCache:ep,useCacheRefresh:l_};lp.useEffectEvent=Zx;var d_={readContext:sn,use:iu,useCallback:e_,useContext:sn,useEffect:np,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:t_,useReducer:Pu,useRef:Yx,useState:function(){return Pu(ea)},useDebugValue:ip,useDeferredValue:function(t,e){var n=zt();return dt===null?ap(n,t,e):n_(n,dt.memoizedState,t,e)},useTransition:function(){var t=Pu(ea)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:zx,useId:r_,useHostTransitionStatus:sp,useFormState:Lm,useActionState:Lm,useOptimistic:function(t,e){var n=zt();return dt!==null?kx(n,dt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:ep,useCacheRefresh:l_};d_.useEffectEvent=Zx;function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ua(i);a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(Mn(e,t,i),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ua(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(Mn(e,t,i),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zn(),i=Ua(n);i.tag=2,e!=null&&(i.callback=e),e=La(t,i,n),e!==null&&(Mn(e,t,n),dl(e,t,n))}};function Pm(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!El(n,i)||!El(a,s):!0}function Im(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fd.enqueueReplaceState(e,e.state,null)}function gs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=bt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function h_(t){mc(t)}function p_(t){console.error(t)}function m_(t){mc(t)}function Ec(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function zm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function dd(t,e,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(t,e)},n}function g_(t){return t=Ua(t),t.tag=3,t}function x_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){zm(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){zm(e,n,i),typeof a!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function fM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Lr(e,n,a,!0),n=Fn.current,n!==null){switch(n.tag){case 31:case 13:return Jn===null?wc():n.alternate===null&&Dt===0&&(Dt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===vc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),ju(t,i,a)),!1;case 22:return n.flags|=65536,i===vc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),ju(t,i,a)),!1}throw Error(te(435,n.tag))}return ju(t,i,a),wc(),!1}if(Qe)return e=Fn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==$f&&(t=Error(te(422),{cause:i}),Al(Zn(t,n)))):(i!==$f&&(e=Error(te(423),{cause:i}),Al(Zn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Zn(i,n),a=dd(t.stateNode,i,a),Ou(t,a),Dt!==4&&(Dt=2)),!1;var s=Error(te(520),{cause:i});if(s=Zn(s,n),_l===null?_l=[s]:_l.push(s),Dt!==4&&(Dt=2),e===null)return!0;i=Zn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=dd(n.stateNode,i,t),Ou(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=g_(a),x_(a,t,n,i),Ou(n,a),!1}n=n.return}while(n!==null);return!1}var op=Error(te(461)),Wt=!1;function tn(t,e,n,i){e.child=t===null?Dx(e,null,n,i):ps(e,t.child,n,i)}function Bm(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}else r=i;return hs(e),i=Kh(t,e,n,r,s,a),l=Qh(),t!==null&&!Wt?(Jh(t,e,a),ta(t,e,a)):(Qe&&l&&Vh(e),e.flags|=1,tn(t,e,i,a),e.child)}function Fm(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!Gh(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,__(t,e,s,i,a)):(t=jo(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!cp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(r,i)&&t.ref===e.ref)return ta(t,e,a)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function __(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(El(s,i)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=i=s,cp(t,a))t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,ta(t,e,a)}return hd(t,e,n,i,a)}function v_(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Hm(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yo(e,s!==null?s.cachePool:null),s!==null?Cm(e,s):rd(),Ox(e);else return i=e.lanes=536870912,Hm(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Yo(e,s.cachePool),Cm(e,s),ya(),e.memoizedState=null):(t!==null&&Yo(e,null),rd(),ya());return tn(t,e,a,n),e.child}function il(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Hm(t,e,n,i,a){var s=Wh();return s=s===null?null:{parent:Xt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Yo(e,null),rd(),Ox(e),t!==null&&Lr(t,e,i,!0),e.childLanes=a,null}function Qo(t,e){return e=Tc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Gm(t,e,n){return ps(e,t.child,null,n),t=Qo(e,e.pendingProps),t.flags|=2,Dn(e),e.memoizedState=null,t}function dM(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Qe){if(i.mode==="hidden")return t=Qo(e,i),e.lanes=536870912,il(null,t);if(ld(e),(t=yt)?(t=fv(t,Kn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:xi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ex(t),n.return=e,e.child=n,an=e,yt=null)):t=null,t===null)throw Ha(e);return e.lanes=536870912,null}return Qo(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(ld(e),a)if(e.flags&256)e.flags&=-257,e=Gm(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(te(558));else if(Wt||Lr(t,e,n,!1),a=(n&t.childLanes)!==0,Wt||a){if(i=mt,i!==null&&(r=Kg(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bs(t,r),Mn(i,t,r),op;wc(),e=Gm(t,e,n)}else t=s.treeContext,yt=$n(r.nextSibling),an=e,Qe=!0,Da=null,Kn=!1,t!==null&&Ax(e,t),e=Qo(e,i),e.flags|=4096;return e}return t=qi(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Jo(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(te(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hd(t,e,n,i,a){return hs(e),n=Kh(t,e,n,i,void 0,a),i=Qh(),t!==null&&!Wt?(Jh(t,e,a),ta(t,e,a)):(Qe&&i&&Vh(e),e.flags|=1,tn(t,e,n,a),e.child)}function Vm(t,e,n,i,a,s){return hs(e),e.updateQueue=null,n=Ix(e,i,n,a),Px(t),i=Qh(),t!==null&&!Wt?(Jh(t,e,s),ta(t,e,s)):(Qe&&i&&Vh(e),e.flags|=1,tn(t,e,n,s),e.child)}function km(t,e,n,i,a){if(hs(e),e.stateNode===null){var s=tr,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=fd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},jh(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):tr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Iu(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&fd.enqueueReplaceState(s,s.state,null),pl(e,i,s,a),hl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,o=gs(n,l);s.props=o;var c=s.context,d=n.contextType;r=tr,typeof d=="object"&&d!==null&&(r=sn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||c!==r)&&Im(e,s,i,r),_a=!1;var u=e.memoizedState;s.state=u,pl(e,i,s,a),hl(),c=e.memoizedState,l||u!==c||_a?(typeof p=="function"&&(Iu(e,n,p,i),c=e.memoizedState),(o=_a||Pm(e,n,o,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ad(t,e),r=e.memoizedProps,d=gs(n,r),s.props=d,p=e.pendingProps,u=s.context,c=n.contextType,o=tr,typeof c=="object"&&c!==null&&(o=sn(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==o)&&Im(e,s,i,o),_a=!1,u=e.memoizedState,s.state=u,pl(e,i,s,a),hl();var h=e.memoizedState;r!==p||u!==h||_a||t!==null&&t.dependencies!==null&&_c(t.dependencies)?(typeof l=="function"&&(Iu(e,n,l,i),h=e.memoizedState),(d=_a||Pm(e,n,d,i,u,h,o)||t!==null&&t.dependencies!==null&&_c(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),s.props=i,s.state=h,s.context=o,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,Jo(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=ps(e,t.child,null,a),e.child=ps(e,null,n,a)):tn(t,e,n,a),e.memoizedState=s.state,t=e.child):t=ta(t,e,a),t}function Xm(t,e,n,i){return ds(),e.flags|=256,tn(t,e,n,i),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(t){return{baseLanes:t,cachePool:Cx()}}function Fu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ln),t}function S_(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(It.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Qe){if(a?Sa(e):ya(),(t=yt)?(t=fv(t,Kn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:xi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},n=Ex(t),n.return=e,e.child=n,an=e,yt=null)):t=null,t===null)throw Ha(e);return Rd(t)?e.lanes=32:e.lanes=536870912,null}var l=i.children;return i=i.fallback,a?(ya(),a=e.mode,l=Tc({mode:"hidden",children:l},a),i=os(i,a,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,i=e.child,i.memoizedState=Bu(n),i.childLanes=Fu(t,r,n),e.memoizedState=zu,il(null,i)):(Sa(e),pd(e,l))}var o=t.memoizedState;if(o!==null&&(l=o.dehydrated,l!==null)){if(s)e.flags&256?(Sa(e),e.flags&=-257,e=Hu(t,e,n)):e.memoizedState!==null?(ya(),e.child=t.child,e.flags|=128,e=null):(ya(),l=i.fallback,a=e.mode,i=Tc({mode:"visible",children:i.children},a),l=os(l,a,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,ps(e,t.child,null,n),i=e.child,i.memoizedState=Bu(n),i.childLanes=Fu(t,r,n),e.memoizedState=zu,e=il(null,i));else if(Sa(e),Rd(l)){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(te(419)),i.stack="",i.digest=r,Al({value:i,source:null,stack:null}),e=Hu(t,e,n)}else if(Wt||Lr(t,e,n,!1),r=(n&t.childLanes)!==0,Wt||r){if(r=mt,r!==null&&(i=Kg(r,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,bs(t,i),Mn(r,t,i),op;Ad(l)||wc(),e=Hu(t,e,n)}else Ad(l)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,yt=$n(l.nextSibling),an=e,Qe=!0,Da=null,Kn=!1,t!==null&&Ax(e,t),e=pd(e,i.children),e.flags|=4096);return e}return a?(ya(),l=i.fallback,a=e.mode,o=t.child,c=o.sibling,i=qi(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&65011712,c!==null?l=qi(c,l):(l=os(l,a,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,il(null,i),i=e.child,l=t.child.memoizedState,l===null?l=Bu(n):(a=l.cachePool,a!==null?(o=Xt._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Cx(),l={baseLanes:l.baseLanes|n,cachePool:a}),i.memoizedState=l,i.childLanes=Fu(t,r,n),e.memoizedState=zu,il(t.child,i)):(Sa(e),n=t.child,t=n.sibling,n=qi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function pd(t,e){return e=Tc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Tc(t,e){return t=Un(22,t,null,e),t.lanes=0,t}function Hu(t,e,n){return ps(e,t.child,null,n),t=pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Gu(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function y_(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=It.current,l=(r&2)!==0;if(l?(r=r&1|2,e.flags|=128):r&=1,_t(It,r),tn(t,e,i,n),i=Qe?Tl:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Gu(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&yc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Gu(e,!0,n,null,s,i);break;case"together":Gu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,!(n&e.childLanes))if(t!==null){if(Lr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&_c(t)))}function hM(t,e,n){switch(e.tag){case 3:fc(e,e.stateNode.containerInfo),va(e,Xt,t.memoizedState.cache),ds();break;case 27:case 5:Vf(e);break;case 4:fc(e,e.stateNode.containerInfo);break;case 10:va(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ld(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Sa(e),e.flags|=128,null):n&e.child.childLanes?S_(t,e,n):(Sa(e),t=ta(t,e,n),t!==null?t.sibling:null);Sa(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Lr(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return y_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_t(It,It.current),i)break;return null;case 22:return e.lanes=0,v_(t,e,n,e.pendingProps);case 24:va(e,Xt,t.memoizedState.cache)}return ta(t,e,n)}function M_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Wt=!0;else{if(!cp(t,n)&&!(e.flags&128))return Wt=!1,hM(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Qe&&e.flags&1048576&&Tx(e,Tl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=es(e.elementType),e.type=t,typeof t=="function")Gh(t)?(i=gs(t,i),e.tag=1,e=km(null,e,t,i,n)):(e.tag=0,e=hd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Rh){e.tag=11,e=Bm(null,e,t,i,n);break e}else if(a===Ch){e.tag=14,e=Fm(null,e,t,i,n);break e}}throw e=Hf(t)||t,Error(te(306,e,""))}}return e;case 0:return hd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=gs(i,e.pendingProps),km(t,e,i,a,n);case 3:e:{if(fc(e,e.stateNode.containerInfo),t===null)throw Error(te(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,ad(t,e),pl(e,i,null,n);var r=e.memoizedState;if(i=r.cache,va(e,Xt,i),i!==s.cache&&nd(e,[Xt],n,!0),hl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Xm(t,e,i,n);break e}else if(i!==a){a=Zn(Error(te(424)),e),Al(a),e=Xm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(yt=$n(t.firstChild),an=e,Qe=!0,Da=null,Kn=!0,n=Dx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ds(),i===a){e=ta(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 26:return Jo(t,e),t===null?(n=f0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Qe||(n=e.type,t=e.pendingProps,i=Lc(Na.current).createElement(n),i[nn]=e,i[Tn]=t,ln(i,n,t),Jt(i),e.stateNode=i):e.memoizedState=f0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Vf(e),t===null&&Qe&&(i=e.stateNode=dv(e.type,e.pendingProps,Na.current),an=e,Kn=!0,a=yt,Wa(e.type)?(Cd=a,yt=$n(i.firstChild)):yt=a),tn(t,e,e.pendingProps.children,n),Jo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Qe&&((a=i=yt)&&(i=kM(i,e.type,e.pendingProps,Kn),i!==null?(e.stateNode=i,an=e,yt=$n(i.firstChild),Kn=!1,a=!0):a=!1),a||Ha(e)),Vf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Ed(a,s)?i=null:r!==null&&Ed(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Kh(t,e,aM,null,null,n),Ul._currentValue=a),Jo(t,e),tn(t,e,i,n),e.child;case 6:return t===null&&Qe&&((t=n=yt)&&(n=XM(n,e.pendingProps,Kn),n!==null?(e.stateNode=n,an=e,yt=null,t=!0):t=!1),t||Ha(e)),null;case 13:return S_(t,e,n);case 4:return fc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):tn(t,e,i,n),e.child;case 11:return Bm(t,e,e.type,e.pendingProps,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,va(e,e.type,i.value),tn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,hs(e),a=sn(a),i=i(a),e.flags|=1,tn(t,e,i,n),e.child;case 14:return Fm(t,e,e.type,e.pendingProps,n);case 15:return __(t,e,e.type,e.pendingProps,n);case 19:return y_(t,e,n);case 31:return dM(t,e,n);case 22:return v_(t,e,n,e.pendingProps);case 24:return hs(e),i=sn(Xt),t===null?(a=Wh(),a===null&&(a=mt,s=Xh(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},jh(e),va(e,Xt,a)):(t.lanes&n&&(ad(t,e),pl(e,null,null,n),hl()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),va(e,Xt,i)):(i=s.cache,va(e,Xt,i),i!==a.cache&&nd(e,[Xt],n,!0))),tn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(te(156,e.tag))}function Ni(t){t.flags|=4}function Vu(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(q_())t.flags|=8192;else throw us=vc,qh}else t.flags&=-16777217}function qm(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!mv(e))if(q_())t.flags|=8192;else throw us=vc,qh}function fo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?jg():536870912,t.lanes|=e,yr|=e)}function Xr(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function St(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pM(t,e,n){var i=e.pendingProps;switch(kh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(e),null;case 1:return St(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),ji(Xt),mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Cs(e)?Ni(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lu())),St(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ni(e),s!==null?(St(e),qm(e,s)):(St(e),Vu(e,a,null,i,n))):s?s!==t.memoizedState?(Ni(e),St(e),qm(e,s)):(St(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ni(e),St(e),Vu(e,a,t,i,n)),null;case 27:if(dc(e),n=Na.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return St(e),null}t=Mi.current,Cs(e)?ym(e):(t=dv(a,i,n),e.stateNode=t,Ni(e))}return St(e),null;case 5:if(dc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(te(166));return St(e),null}if(s=Mi.current,Cs(e))ym(e);else{var r=Lc(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=e,s[Tn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(ln(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ni(e)}}return St(e),Vu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Na.current,Cs(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[nn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ov(t.nodeValue,n)),t||Ha(e,!0)}else t=Lc(t).createTextNode(i),t[nn]=e,e.stateNode=t}return St(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Cs(e),n!==null){if(t===null){if(!i)throw Error(te(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(557));t[nn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),t=!1}else n=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Dn(e),e):(Dn(e),null);if(e.flags&128)throw Error(te(558))}return St(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Cs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(te(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(te(317));a[nn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;St(e),a=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Dn(e),e):(Dn(e),null)}return Dn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),fo(e,e.updateQueue),St(e),null);case 4:return mr(),t===null&&gp(e.stateNode.containerInfo),St(e),null;case 10:return ji(e.type),St(e),null;case 19:if($t(It),i=e.memoizedState,i===null)return St(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Xr(i,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=yc(t),s!==null){for(e.flags|=128,Xr(i,!1),t=s.updateQueue,e.updateQueue=t,fo(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)bx(n,t),n=n.sibling;return _t(It,It.current&1|2),Qe&&Fi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&On()>Rc&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304)}else{if(!a)if(t=yc(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,fo(e,t),Xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Qe)return St(e),null}else 2*On()-i.renderingStartTime>Rc&&n!==536870912&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=On(),t.sibling=null,n=It.current,_t(It,a?n&1|2:n&1),Qe&&Fi(e,i.treeForkCount),t):(St(e),null);case 22:case 23:return Dn(e),Yh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(St(e),e.subtreeFlags&6&&(e.flags|=8192)):St(e),n=e.updateQueue,n!==null&&fo(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&$t(cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),ji(Xt),St(e),null;case 25:return null;case 30:return null}throw Error(te(156,e.tag))}function mM(t,e){switch(kh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ji(Xt),mr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dc(e),null;case 31:if(e.memoizedState!==null){if(Dn(e),e.alternate===null)throw Error(te(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Dn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $t(It),null;case 4:return mr(),null;case 10:return ji(e.type),null;case 22:case 23:return Dn(e),Yh(),t!==null&&$t(cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ji(Xt),null;case 25:return null;default:return null}}function b_(t,e){switch(kh(e),e.tag){case 3:ji(Xt),mr();break;case 26:case 27:case 5:dc(e);break;case 4:mr();break;case 31:e.memoizedState!==null&&Dn(e);break;case 13:Dn(e);break;case 19:$t(It);break;case 10:ji(e.type);break;case 22:case 23:Dn(e),Yh(),t!==null&&$t(cs);break;case 24:ji(Xt)}}function Wl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(l){ct(e,e.return,l)}}function Ga(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,a=e;var o=n,c=l;try{c()}catch(d){ct(a,o,d)}}}i=i.next}while(i!==s)}}catch(d){ct(e,e.return,d)}}function E_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Lx(e,n)}catch(i){ct(t,t.return,i)}}}function T_(t,e,n){n.props=gs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ct(t,e,i)}}function gl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){ct(t,e,a)}}function vi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){ct(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ct(t,e,a)}else n.current=null}function A_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){ct(t,t.return,a)}}function ku(t,e,n){try{var i=t.stateNode;zM(i,t.type,n,e),i[Tn]=e}catch(a){ct(t,t.return,a)}}function R_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Xu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ki));else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function C_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ln(e,i,n),e[nn]=t,e[Tn]=n}catch(s){ct(t,t.return,s)}}var Hi=!1,kt=!1,Wu=!1,jm=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function gM(t,e){if(t=t.containerInfo,Md=zc,t=mx(t),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,l=-1,o=-1,c=0,d=0,p=t,u=null;t:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(l=r+a),p!==s||i!==0&&p.nodeType!==3||(o=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===t)break t;if(u===n&&++c===a&&(l=r),u===s&&++d===i&&(o=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:t,selectionRange:n},zc=!1,Qt=e;Qt!==null;)if(e=Qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Qt=t;else for(;Qt!==null;){switch(e=Qt,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var S=gs(n.type,a);t=i.getSnapshotBeforeUpdate(S,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(E){ct(n,n.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Td(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(te(163))}if(t=e.sibling,t!==null){t.return=e.return,Qt=t;break}Qt=e.return}}function w_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),i&4&&Wl(5,n);break;case 1:if(Ui(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){ct(n,n.return,r)}else{var a=gs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){ct(n,n.return,r)}}i&64&&E_(n),i&512&&gl(n,n.return);break;case 3:if(Ui(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Lx(t,e)}catch(r){ct(n,n.return,r)}}break;case 27:e===null&&i&4&&C_(n);case 26:case 5:Ui(t,n),e===null&&i&4&&A_(n),i&512&&gl(n,n.return);break;case 12:Ui(t,n);break;case 31:Ui(t,n),i&4&&U_(t,n);break;case 13:Ui(t,n),i&4&&L_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=TM.bind(null,n),WM(t,n))));break;case 22:if(i=n.memoizedState!==null||Hi,!i){e=e!==null&&e.memoizedState!==null||kt,a=Hi;var s=kt;Hi=i,(kt=e)&&!s?Bi(t,n,(n.subtreeFlags&8772)!==0):Ui(t,n),Hi=a,kt=s}break;case 30:break;default:Ui(t,n)}}function N_(t){var e=t.alternate;e!==null&&(t.alternate=null,N_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Uh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Tt=null,Sn=!1;function Di(t,e,n){for(n=n.child;n!==null;)D_(t,e,n),n=n.sibling}function D_(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 26:kt||vi(n,e),Di(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||vi(n,e);var i=Tt,a=Sn;Wa(n.type)&&(Tt=n.stateNode,Sn=!1),Di(t,e,n),Sl(n.stateNode),Tt=i,Sn=a;break;case 5:kt||vi(n,e);case 6:if(i=Tt,a=Sn,Tt=null,Di(t,e,n),Tt=i,Sn=a,Tt!==null)if(Sn)try{(Tt.nodeType===9?Tt.body:Tt.nodeName==="HTML"?Tt.ownerDocument.body:Tt).removeChild(n.stateNode)}catch(s){ct(n,e,s)}else try{Tt.removeChild(n.stateNode)}catch(s){ct(n,e,s)}break;case 18:Tt!==null&&(Sn?(t=Tt,r0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Tr(t)):r0(Tt,n.stateNode));break;case 4:i=Tt,a=Sn,Tt=n.stateNode.containerInfo,Sn=!0,Di(t,e,n),Tt=i,Sn=a;break;case 0:case 11:case 14:case 15:Ga(2,n,e),kt||Ga(4,n,e),Di(t,e,n);break;case 1:kt||(vi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&T_(n,e,i)),Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:kt=(i=kt)||n.memoizedState!==null,Di(t,e,n),kt=i;break;default:Di(t,e,n)}}function U_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(n){ct(e,e.return,n)}}}function L_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(n){ct(e,e.return,n)}}function xM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new jm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new jm),e;default:throw Error(te(435,t.tag))}}function ho(t,e){var n=xM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=AM.bind(null,t,i);i.then(a,a)}})}function xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,l=r;e:for(;l!==null;){switch(l.tag){case 27:if(Wa(l.type)){Tt=l.stateNode,Sn=!1;break e}break;case 5:Tt=l.stateNode,Sn=!1;break e;case 3:case 4:Tt=l.stateNode.containerInfo,Sn=!0;break e}l=l.return}if(Tt===null)throw Error(te(160));D_(s,r,a),Tt=null,Sn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)O_(e,t),e=e.sibling}var si=null;function O_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xn(e,t),_n(t),i&4&&(Ga(3,t,t.return),Wl(3,t),Ga(5,t,t.return));break;case 1:xn(e,t),_n(t),i&512&&(kt||n===null||vi(n,n.return)),i&64&&Hi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=si;if(xn(e,t),_n(t),i&512&&(kt||n===null||vi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Gl]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),ln(s,i,n),s[nn]=t,Jt(s),i=s;break e;case"link":var r=h0("link","href",a).get(i+(n.href||""));if(r){for(var l=0;l<r.length;l++)if(s=r[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(l,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;case"meta":if(r=h0("meta","content",a).get(i+(n.content||""))){for(l=0;l<r.length;l++)if(s=r[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(l,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;default:throw Error(te(468,i))}s[nn]=t,Jt(s),i=s}t.stateNode=i}else p0(a,t.type,t.stateNode);else t.stateNode=d0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?p0(a,t.type,t.stateNode):d0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ku(t,t.memoizedProps,n.memoizedProps)}break;case 27:xn(e,t),_n(t),i&512&&(kt||n===null||vi(n,n.return)),n!==null&&i&4&&ku(t,t.memoizedProps,n.memoizedProps);break;case 5:if(xn(e,t),_n(t),i&512&&(kt||n===null||vi(n,n.return)),t.flags&32){a=t.stateNode;try{xr(a,"")}catch(S){ct(t,t.return,S)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,ku(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Wu=!0);break;case 6:if(xn(e,t),_n(t),i&4){if(t.stateNode===null)throw Error(te(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(S){ct(t,t.return,S)}}break;case 3:if(tc=null,a=si,si=Oc(e.containerInfo),xn(e,t),si=a,_n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(e.containerInfo)}catch(S){ct(t,t.return,S)}Wu&&(Wu=!1,P_(t));break;case 4:i=si,si=Oc(t.stateNode.containerInfo),xn(e,t),_n(t),si=i;break;case 12:xn(e,t),_n(t);break;case 31:xn(e,t),_n(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 13:xn(e,t),_n(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=On()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 22:a=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,c=Hi,d=kt;if(Hi=c||a,kt=d||o,xn(e,t),kt=d,Hi=c,_n(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||o||Hi||kt||ts(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(s=o.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{l=o.stateNode;var p=o.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(S){ct(o,o.return,S)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(S){ct(o,o.return,S)}}}else if(e.tag===18){if(n===null){o=e;try{var h=o.stateNode;a?l0(h,!0):l0(o.stateNode,!1)}catch(S){ct(o,o.return,S)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ho(t,n))));break;case 19:xn(e,t),_n(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 30:break;case 21:break;default:xn(e,t),_n(t)}}function _n(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(R_(i)){n=i;break}i=i.return}if(n==null)throw Error(te(160));switch(n.tag){case 27:var a=n.stateNode,s=Xu(t);Ac(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(xr(r,""),n.flags&=-33);var l=Xu(t);Ac(t,l,r);break;case 3:case 4:var o=n.stateNode.containerInfo,c=Xu(t);md(t,c,o);break;default:throw Error(te(161))}}catch(d){ct(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function P_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;P_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ui(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)w_(t,e.alternate,e),e=e.sibling}function ts(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ga(4,e,e.return),ts(e);break;case 1:vi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&T_(e,e.return,n),ts(e);break;case 27:Sl(e.stateNode);case 26:case 5:vi(e,e.return),ts(e);break;case 22:e.memoizedState===null&&ts(e);break;case 30:ts(e);break;default:ts(e)}t=t.sibling}}function Bi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:Bi(a,s,n),Wl(4,s);break;case 1:if(Bi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){ct(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Ux(o[a],l)}catch(c){ct(i,i.return,c)}}n&&r&64&&E_(s),gl(s,s.return);break;case 27:C_(s);case 26:case 5:Bi(a,s,n),n&&i===null&&r&4&&A_(s),gl(s,s.return);break;case 12:Bi(a,s,n);break;case 31:Bi(a,s,n),n&&r&4&&U_(a,s);break;case 13:Bi(a,s,n),n&&r&4&&L_(a,s);break;case 22:s.memoizedState===null&&Bi(a,s,n),gl(s,s.return);break;case 30:break;default:Bi(a,s,n)}e=e.sibling}}function up(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&kl(n))}function fp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&kl(t))}function ti(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)I_(t,e,n,i),e=e.sibling}function I_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),a&2048&&Wl(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&kl(t)));break;case 12:if(a&2048){ti(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,l=s.onPostCommit;typeof l=="function"&&l(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){ct(e,e.return,o)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?ti(t,e,n,i):xl(t,e):s._visibility&2?ti(t,e,n,i):(s._visibility|=2,Ws(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&up(r,e);break;case 24:ti(t,e,n,i),a&2048&&fp(e.alternate,e);break;default:ti(t,e,n,i)}}function Ws(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,l=n,o=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ws(s,r,l,o,a),Wl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ws(s,r,l,o,a):xl(s,r):(d._visibility|=2,Ws(s,r,l,o,a)),a&&c&2048&&up(r.alternate,r);break;case 24:Ws(s,r,l,o,a),a&&c&2048&&fp(r.alternate,r);break;default:Ws(s,r,l,o,a)}e=e.sibling}}function xl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:xl(n,i),a&2048&&up(i.alternate,i);break;case 24:xl(n,i),a&2048&&fp(i.alternate,i);break;default:xl(n,i)}e=e.sibling}}var al=8192;function ws(t,e,n){if(t.subtreeFlags&al)for(t=t.child;t!==null;)z_(t,e,n),t=t.sibling}function z_(t,e,n){switch(t.tag){case 26:ws(t,e,n),t.flags&al&&t.memoizedState!==null&&ib(n,si,t.memoizedState,t.memoizedProps);break;case 5:ws(t,e,n);break;case 3:case 4:var i=si;si=Oc(t.stateNode.containerInfo),ws(t,e,n),si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=al,al=16777216,ws(t,e,n),al=i):ws(t,e,n));break;default:ws(t,e,n)}}function B_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Wr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Qt=i,H_(i,t)}B_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F_(t),t=t.sibling}function F_(t){switch(t.tag){case 0:case 11:case 15:Wr(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Wr(t);break;case 12:Wr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$o(t)):Wr(t);break;default:Wr(t)}}function $o(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Qt=i,H_(i,t)}B_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ga(8,e,e.return),$o(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,$o(e));break;default:$o(e)}t=t.sibling}}function H_(t,e){for(;Qt!==null;){var n=Qt;switch(n.tag){case 0:case 11:case 15:Ga(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Qt=i;else e:for(n=t;Qt!==null;){i=Qt;var a=i.sibling,s=i.return;if(N_(i),i===n){Qt=null;break e}if(a!==null){a.return=s,Qt=a;break e}Qt=s}}}var _M={getCacheForType:function(t){var e=sn(Xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return sn(Xt).controller.signal}},vM=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,qe=null,Ye=0,ot=0,Nn=null,Aa=!1,Pr=!1,dp=!1,na=0,Dt=0,Va=0,fs=0,hp=0,Ln=0,yr=0,_l=null,yn=null,gd=!1,ru=0,G_=0,Rc=1/0,Cc=null,Oa=null,qt=0,Pa=null,Mr=null,Yi=0,xd=0,_d=null,V_=null,vl=0,vd=null;function zn(){return it&2&&Ye!==0?Ye&-Ye:Le.T!==null?mp():Qg()}function k_(){if(Ln===0)if(!(Ye&536870912)||Qe){var t=ao;ao<<=1,!(ao&3932160)&&(ao=262144),Ln=t}else Ln=536870912;return t=Fn.current,t!==null&&(t.flags|=32),Ln}function Mn(t,e,n){(t===mt&&(ot===2||ot===9)||t.cancelPendingCommit!==null)&&(br(t,0),Ra(t,Ye,Ln,!1)),Hl(t,n),(!(it&2)||t!==mt)&&(t===mt&&(!(it&2)&&(fs|=n),Dt===4&&Ra(t,Ye,Ln,!1)),Ci(t))}function X_(t,e,n){if(it&6)throw Error(te(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Fl(t,e),a=i?MM(t,e):qu(t,e,!0),s=i;do{if(a===0){Pr&&!i&&Ra(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!SM(n)){a=qu(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var l=t;a=_l;var o=l.current.memoizedState.isDehydrated;if(o&&(br(l,r).flags|=256),r=qu(l,r,!1),r!==2){if(dp&&!o){l.errorRecoveryDisabledLanes|=s,fs|=s,a=4;break e}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){br(t,0),Ra(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(te(345));case 4:if((e&4194048)!==e)break;case 6:Ra(i,e,Ln,!Aa);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(te(329))}if((e&62914560)===e&&(a=ru+300-On(),10<a)){if(Ra(i,e,Ln,!Aa),Zc(i,0,!0)!==0)break e;Yi=e,i.timeoutHandle=uv(Ym.bind(null,i,n,yn,Cc,gd,e,Ln,fs,yr,Aa,s,"Throttled",-0,0),a);break e}Ym(i,n,yn,Cc,gd,e,Ln,fs,yr,Aa,s,null,-0,0)}}break}while(!0);Ci(t)}function Ym(t,e,n,i,a,s,r,l,o,c,d,p,u,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},z_(e,s,p);var S=(s&62914560)===s?ru-On():(s&4194048)===s?G_-On():0;if(S=ab(p,S),S!==null){Yi=s,t.cancelPendingCommit=S(Km.bind(null,t,e,s,n,i,a,r,l,o,d,p,null,u,h)),Ra(t,s,r,!c);return}}Km(t,e,s,n,i,a,r,l,o)}function SM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Bn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ra(t,e,n,i){e&=~hp,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-In(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Yg(t,n,e)}function lu(){return it&6?!0:(ql(0),!1)}function pp(){if(qe!==null){if(ot===0)var t=qe.return;else t=qe,Xi=Es=null,$h(t),cr=null,Rl=0,t=qe;for(;t!==null;)b_(t.alternate,t),t=t.return;qe=null}}function br(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,HM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Yi=0,pp(),mt=t,qe=n=qi(t.current,null),Ye=e,ot=0,Nn=null,Aa=!1,Pr=Fl(t,e),dp=!1,yr=Ln=hp=fs=Va=Dt=0,yn=_l=null,gd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-In(i),s=1<<a;e|=t[a],i&=~s}return na=e,$c(),n}function W_(t,e){Ge=null,Le.H=wl,e===Or||e===tu?(e=Am(),ot=3):e===qh?(e=Am(),ot=4):ot=e===op?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Nn=e,qe===null&&(Dt=1,Ec(t,Zn(e,t.current)))}function q_(){var t=Fn.current;return t===null?!0:(Ye&4194048)===Ye?Jn===null:(Ye&62914560)===Ye||Ye&536870912?t===Jn:!1}function j_(){var t=Le.H;return Le.H=wl,t===null?wl:t}function Y_(){var t=Le.A;return Le.A=_M,t}function wc(){Dt=4,Aa||(Ye&4194048)!==Ye&&Fn.current!==null||(Pr=!0),!(Va&134217727)&&!(fs&134217727)||mt===null||Ra(mt,Ye,Ln,!1)}function qu(t,e,n){var i=it;it|=2;var a=j_(),s=Y_();(mt!==t||Ye!==e)&&(Cc=null,br(t,e)),e=!1;var r=Dt;e:do try{if(ot!==0&&qe!==null){var l=qe,o=Nn;switch(ot){case 8:pp(),r=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(e=!0);var c=ot;if(ot=0,Nn=null,ar(t,l,o,c),n&&Pr){r=0;break e}break;default:c=ot,ot=0,Nn=null,ar(t,l,o,c)}}yM(),r=Dt;break}catch(d){W_(t,d)}while(!0);return e&&t.shellSuspendCounter++,Xi=Es=null,it=i,Le.H=a,Le.A=s,qe===null&&(mt=null,Ye=0,$c()),r}function yM(){for(;qe!==null;)Z_(qe)}function MM(t,e){var n=it;it|=2;var i=j_(),a=Y_();mt!==t||Ye!==e?(Cc=null,Rc=On()+500,br(t,e)):Pr=Fl(t,e);e:do try{if(ot!==0&&qe!==null){e=qe;var s=Nn;t:switch(ot){case 1:ot=0,Nn=null,ar(t,e,s,1);break;case 2:case 9:if(Tm(s)){ot=0,Nn=null,Zm(e);break}e=function(){ot!==2&&ot!==9||mt!==t||(ot=7),Ci(t)},s.then(e,e);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:Tm(s)?(ot=0,Nn=null,Zm(e)):(ot=0,Nn=null,ar(t,e,s,7));break;case 5:var r=null;switch(qe.tag){case 26:r=qe.memoizedState;case 5:case 27:var l=qe;if(r?mv(r):l.stateNode.complete){ot=0,Nn=null;var o=l.sibling;if(o!==null)qe=o;else{var c=l.return;c!==null?(qe=c,ou(c)):qe=null}break t}}ot=0,Nn=null,ar(t,e,s,5);break;case 6:ot=0,Nn=null,ar(t,e,s,6);break;case 8:pp(),Dt=6;break e;default:throw Error(te(462))}}bM();break}catch(d){W_(t,d)}while(!0);return Xi=Es=null,Le.H=i,Le.A=a,it=n,qe!==null?0:(mt=null,Ye=0,$c(),Dt)}function bM(){for(;qe!==null&&!qS();)Z_(qe)}function Z_(t){var e=M_(t.alternate,t,na);t.memoizedProps=t.pendingProps,e===null?ou(t):qe=e}function Zm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Vm(n,e,e.pendingProps,e.type,void 0,Ye);break;case 11:e=Vm(n,e,e.pendingProps,e.type.render,e.ref,Ye);break;case 5:$h(e);default:b_(n,e),e=qe=bx(e,na),e=M_(n,e,na)}t.memoizedProps=t.pendingProps,e===null?ou(t):qe=e}function ar(t,e,n,i){Xi=Es=null,$h(e),cr=null,Rl=0;var a=e.return;try{if(fM(t,a,e,n,Ye)){Dt=1,Ec(t,Zn(n,t.current)),qe=null;return}}catch(s){if(a!==null)throw qe=a,s;Dt=1,Ec(t,Zn(n,t.current)),qe=null;return}e.flags&32768?(Qe||i===1?t=!0:Pr||Ye&536870912?t=!1:(Aa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),K_(e,t)):ou(e)}function ou(t){var e=t;do{if(e.flags&32768){K_(e,Aa);return}t=e.return;var n=pM(e.alternate,e,na);if(n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Dt===0&&(Dt=5)}function K_(t,e){do{var n=mM(t.alternate,t);if(n!==null){n.flags&=32767,qe=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){qe=t;return}qe=t=n}while(t!==null);Dt=6,qe=null}function Km(t,e,n,i,a,s,r,l,o){t.cancelPendingCommit=null;do cu();while(qt!==0);if(it&6)throw Error(te(327));if(e!==null){if(e===t.current)throw Error(te(177));if(s=e.lanes|e.childLanes,s|=Fh,ny(t,n,s,r,l,o),t===mt&&(qe=mt=null,Ye=0),Mr=e,Pa=t,Yi=n,xd=s,_d=a,V_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,RM(hc,function(){return tv(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=at.p,at.p=2,r=it,it|=4;try{gM(t,e,n)}finally{it=r,at.p=a,Le.T=i}}qt=1,Q_(),J_(),$_()}}function Q_(){if(qt===1){qt=0;var t=Pa,e=Mr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{O_(e,t);var s=bd,r=mx(t.containerInfo),l=s.focusedElem,o=s.selectionRange;if(r!==l&&l&&l.ownerDocument&&px(l.ownerDocument.documentElement,l)){if(o!==null&&Bh(l)){var c=o.start,d=o.end;if(d===void 0&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var p=l.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),S=l.textContent.length,E=Math.min(o.start,S),m=o.end===void 0?E:Math.min(o.end,S);!h.extend&&E>m&&(r=m,m=E,E=r);var f=_m(l,E),x=_m(l,m);if(f&&x&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==x.node||h.focusOffset!==x.offset)){var M=p.createRange();M.setStart(f.node,f.offset),h.removeAllRanges(),E>m?(h.addRange(M),h.extend(x.node,x.offset)):(M.setEnd(x.node,x.offset),h.addRange(M))}}}}for(p=[],h=l;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++){var _=p[l];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}zc=!!Md,bd=Md=null}finally{it=a,at.p=i,Le.T=n}}t.current=e,qt=2}}function J_(){if(qt===2){qt=0;var t=Pa,e=Mr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{w_(t,e.alternate,e)}finally{it=a,at.p=i,Le.T=n}}qt=3}}function $_(){if(qt===4||qt===3){qt=0,jS();var t=Pa,e=Mr,n=Yi,i=V_;e.subtreeFlags&10256||e.flags&10256?qt=5:(qt=0,Mr=Pa=null,ev(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Oa=null),Dh(n),e=e.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=at.p,at.p=2,Le.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var l=i[r];s(l.value,{componentStack:l.stack})}}finally{Le.T=e,at.p=a}}Yi&3&&cu(),Ci(t),a=t.pendingLanes,n&261930&&a&42?t===vd?vl++:(vl=0,vd=t):vl=0,ql(0)}}function ev(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,kl(e)))}function cu(){return Q_(),J_(),$_(),tv()}function tv(){if(qt!==5)return!1;var t=Pa,e=xd;xd=0;var n=Dh(Yi),i=Le.T,a=at.p;try{at.p=32>n?32:n,Le.T=null,n=_d,_d=null;var s=Pa,r=Yi;if(qt=0,Mr=Pa=null,Yi=0,it&6)throw Error(te(331));var l=it;if(it|=4,F_(s.current),I_(s,s.current,r,n),it=l,ql(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Bl,s)}catch{}return!0}finally{at.p=a,Le.T=i,ev(t,e)}}function Qm(t,e,n){e=Zn(n,e),e=dd(t.stateNode,e,2),t=La(t,e,2),t!==null&&(Hl(t,2),Ci(t))}function ct(t,e,n){if(t.tag===3)Qm(t,t,n);else for(;e!==null;){if(e.tag===3){Qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){t=Zn(n,t),n=g_(2),i=La(e,n,2),i!==null&&(x_(n,i,e,t),Hl(i,2),Ci(i));break}}e=e.return}}function ju(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vM;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(dp=!0,a.add(n),t=EM.bind(null,t,e,n),e.then(t,t))}function EM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,mt===t&&(Ye&n)===n&&(Dt===4||Dt===3&&(Ye&62914560)===Ye&&300>On()-ru?!(it&2)&&br(t,0):hp|=n,yr===Ye&&(yr=0)),Ci(t)}function nv(t,e){e===0&&(e=jg()),t=bs(t,e),t!==null&&(Hl(t,e),Ci(t))}function TM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),nv(t,n)}function AM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(te(314))}i!==null&&i.delete(e),nv(t,n)}function RM(t,e){return wh(t,e)}var Nc=null,qs=null,Sd=!1,Dc=!1,Yu=!1,Ca=0;function Ci(t){t!==qs&&t.next===null&&(qs===null?Nc=qs=t:qs=qs.next=t),Dc=!0,Sd||(Sd=!0,wM())}function ql(t,e){if(!Yu&&Dc){Yu=!0;do for(var n=!1,i=Nc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,l=i.pingedLanes;s=(1<<31-In(42|t)+1)-1,s&=a&~(r&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,Jm(i,s))}else s=Ye,s=Zc(i,i===mt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Fl(i,s)||(n=!0,Jm(i,s));i=i.next}while(n);Yu=!1}}function CM(){iv()}function iv(){Dc=Sd=!1;var t=0;Ca!==0&&FM()&&(t=Ca);for(var e=On(),n=null,i=Nc;i!==null;){var a=i.next,s=av(i,e);s===0?(i.next=null,n===null?Nc=a:n.next=a,a===null&&(qs=n)):(n=i,(t!==0||s&3)&&(Dc=!0)),i=a}qt!==0&&qt!==5||ql(t),Ca!==0&&(Ca=0)}function av(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-In(s),l=1<<r,o=a[r];o===-1?(!(l&n)||l&i)&&(a[r]=ty(l,e)):o<=e&&(t.expiredLanes|=l),s&=~l}if(e=mt,n=Ye,n=Zc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ot===2||ot===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Mu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Fl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Mu(i),Dh(n)){case 2:case 8:n=Wg;break;case 32:n=hc;break;case 268435456:n=qg;break;default:n=hc}return i=sv.bind(null,t),n=wh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Mu(i),t.callbackPriority=2,t.callbackNode=null,2}function sv(t,e){if(qt!==0&&qt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cu()&&t.callbackNode!==n)return null;var i=Ye;return i=Zc(t,t===mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(X_(t,i,e),av(t,On()),t.callbackNode!=null&&t.callbackNode===n?sv.bind(null,t):null)}function Jm(t,e){if(cu())return null;X_(t,e,!0)}function wM(){GM(function(){it&6?wh(Xg,CM):iv()})}function mp(){if(Ca===0){var t=_r;t===0&&(t=io,io<<=1,!(io&261888)&&(io=256)),Ca=t}return Ca}function $m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function e0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function NM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=$m((a[Tn]||null).action),r=i.submitter;r&&(e=(e=r[Tn]||null)?$m(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var l=new Kc("action","action",null,i,a);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ca!==0){var o=r?e0(a,r):new FormData(a);ud(n,{pending:!0,data:o,method:a.method,action:s},null,o)}}else typeof s=="function"&&(l.preventDefault(),o=r?e0(a,r):new FormData(a),ud(n,{pending:!0,data:o,method:a.method,action:s},s,o))},currentTarget:a}]})}}for(var Zu=0;Zu<Jf.length;Zu++){var Ku=Jf[Zu],DM=Ku.toLowerCase(),UM=Ku[0].toUpperCase()+Ku.slice(1);ci(DM,"on"+UM)}ci(xx,"onAnimationEnd");ci(_x,"onAnimationIteration");ci(vx,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Yy,"onTransitionRun");ci(Zy,"onTransitionStart");ci(Ky,"onTransitionCancel");ci(Sx,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var l=i[r],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=o}else for(r=0;r<i.length;r++){if(l=i[r],o=l.instance,c=l.currentTarget,l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=o}}}}function We(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function gp(t){if(!t[po]){t[po]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(LM.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Qu("selectionchange",!1,e))}}function lv(t,e,n,i){switch(Sv(e)){case 2:var a=lb;break;case 8:a=ob;break;default:a=Sp}n=a.bind(null,e,n,t),a=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Ju(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===a)break;if(r===4)for(r=i.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;l!==null;){if(r=Zs(l),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){i=s=r;continue e}l=l.parentNode}}i=i.return}rx(function(){var c=s,d=Oh(n),p=[];e:{var u=yx.get(t);if(u!==void 0){var h=Kc,S=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":h=Ay;break;case"focusin":S="focus",h=Ru;break;case"focusout":S="blur",h=Ru;break;case"beforeblur":case"afterblur":h=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=wy;break;case xx:case _x:case vx:h=xy;break;case Sx:h=Dy;break;case"scroll":case"scrollend":h=dy;break;case"wheel":h=Ly;break;case"copy":case"cut":case"paste":h=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=um;break;case"toggle":case"beforetoggle":h=Py}var E=(e&4)!==0,m=!E&&(t==="scroll"||t==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var x=c,M;x!==null;){var _=x;if(M=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||M===null||f===null||(_=Ml(x,f),_!=null&&E.push(Dl(x,_,M))),m)break;x=x.return}0<E.length&&(u=new h(u,S,null,n,d),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==Yf&&(S=n.relatedTarget||n.fromElement)&&(Zs(S)||S[Dr]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(S=n.relatedTarget||n.toElement,h=c,S=S?Zs(S):null,S!==null&&(m=zl(S),E=S.tag,S!==m||E!==5&&E!==27&&E!==6)&&(S=null)):(h=null,S=c),h!==S)){if(E=om,_="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=um,_="onPointerLeave",f="onPointerEnter",x="pointer"),m=h==null?u:nl(h),M=S==null?u:nl(S),u=new E(_,x+"leave",h,n,d),u.target=m,u.relatedTarget=M,_=null,Zs(d)===c&&(E=new E(f,x+"enter",S,n,d),E.target=M,E.relatedTarget=m,_=E),m=_,h&&S)t:{for(E=OM,f=h,x=S,M=0,_=f;_;_=E(_))M++;_=0;for(var T=x;T;T=E(T))_++;for(;0<M-_;)f=E(f),M--;for(;0<_-M;)x=E(x),_--;for(;M--;){if(f===x||x!==null&&f===x.alternate){E=f;break t}f=E(f),x=E(x)}E=null}else E=null;h!==null&&t0(p,u,h,E,!1),S!==null&&m!==null&&t0(p,m,S,E,!0)}}e:{if(u=c?nl(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var A=pm;else if(hm(u))if(dx)A=Wy;else{A=ky;var C=Vy}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Lh(c.elementType)&&(A=pm):A=Xy;if(A&&(A=A(t,c))){fx(p,A,n,d);break e}C&&C(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&jf(u,"number",u.value)}switch(C=c?nl(c):window,t){case"focusin":(hm(C)||C.contentEditable==="true")&&(Js=C,Kf=c,ul=null);break;case"focusout":ul=Kf=Js=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,vm(p,n,d);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":vm(p,n,d)}var v;if(zh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qs?cx(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(ox&&n.locale!=="ko"&&(Qs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qs&&(v=lx()):(Ta=d,Ph="value"in Ta?Ta.value:Ta.textContent,Qs=!0)),C=Uc(c,R),0<C.length&&(R=new cm(R,t,null,n,d),p.push({event:R,listeners:C}),v?R.data=v:(v=ux(n),v!==null&&(R.data=v)))),(v=zy?By(t,n):Fy(t,n))&&(R=Uc(c,"onBeforeInput"),0<R.length&&(C=new cm("onBeforeInput","beforeinput",null,n,d),p.push({event:C,listeners:R}),C.data=v)),NM(p,t,c,n,d)}rv(p,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ml(t,n),a!=null&&i.unshift(Dl(t,a,s)),a=Ml(t,e),a!=null&&i.push(Dl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function OM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||c===null||(o=c,a?(c=Ml(n,s),c!=null&&r.unshift(Dl(n,c,o))):a||(c=Ml(n,s),c!=null&&r.push(Dl(n,c,o)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var PM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(IM,"")}function ov(t,e){return e=n0(e),n0(t)===e}function ft(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||xr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&xr(t,""+i);break;case"className":ro(t,"class",i);break;case"tabIndex":ro(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ro(t,n,i);break;case"style":sx(t,i,s);break;case"data":if(e!=="object"){ro(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xo(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&ft(t,e,"name",a.name,a,null),ft(t,e,"formEncType",a.formEncType,a,null),ft(t,e,"formMethod",a.formMethod,a,null),ft(t,e,"formTarget",a.formTarget,a,null)):(ft(t,e,"encType",a.encType,a,null),ft(t,e,"method",a.method,a,null),ft(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xo(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ki);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Xo(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":We("beforetoggle",t),We("toggle",t),ko(t,"popover",i);break;case"xlinkActuate":wi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ko(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=uy.get(n)||n,ko(t,n,i))}}function yd(t,e,n,i,a,s){switch(n){case"style":sx(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(te(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(te(60));t.innerHTML=n}}break;case"children":typeof i=="string"?xr(t,i):(typeof i=="number"||typeof i=="bigint")&&xr(t,""+i);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$g.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[Tn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):ko(t,n,i)}}}function ln(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",t),We("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:ft(t,e,s,r,n,null)}}a&&ft(t,e,"srcSet",n.srcSet,n,null),i&&ft(t,e,"src",n.src,n,null);return;case"input":We("invalid",t);var l=s=r=a=null,o=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":o=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(te(137,e));break;default:ft(t,e,i,d,n,null)}}nx(t,s,l,o,c,r,a,!1);return;case"select":We("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":s=l;break;case"defaultValue":r=l;break;case"multiple":i=l;default:ft(t,e,a,l,n,null)}e=s,n=r,t.multiple=!!i,e!=null?rr(t,!!i,e,!1):n!=null&&rr(t,!!i,n,!0);return;case"textarea":We("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":i=l;break;case"defaultValue":a=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(te(91));break;default:ft(t,e,r,l,n,null)}ax(t,i,a,s);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ft(t,e,o,i,n,null)}return;case"dialog":We("beforetoggle",t),We("toggle",t),We("cancel",t),We("close",t);break;case"iframe":case"object":We("load",t);break;case"video":case"audio":for(i=0;i<Nl.length;i++)We(Nl[i],t);break;case"image":We("error",t),We("load",t);break;case"details":We("toggle",t);break;case"embed":case"source":case"link":We("error",t),We("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(te(137,e));default:ft(t,e,c,i,n,null)}return;default:if(Lh(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&yd(t,e,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&ft(t,e,l,i,n,null))}function zM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,l=null,o=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=p;default:i.hasOwnProperty(h)||ft(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(te(137,e));break;default:h!==p&&ft(t,e,u,h,i,p)}}qf(t,r,l,o,c,d,s,a);return;case"select":h=r=l=u=null;for(s in n)if(o=n[s],n.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":h=o;default:i.hasOwnProperty(s)||ft(t,e,s,null,i,o)}for(a in i)if(s=i[a],o=n[a],i.hasOwnProperty(a)&&(s!=null||o!=null))switch(a){case"value":u=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:s!==o&&ft(t,e,a,s,i,o)}e=l,n=r,i=h,u!=null?rr(t,!!n,u,!1):!!i!=!!n&&(e!=null?rr(t,!!n,e,!0):rr(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(l in n)if(a=n[l],n.hasOwnProperty(l)&&a!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:ft(t,e,l,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(te(91));break;default:a!==s&&ft(t,e,r,a,i,s)}ix(t,u,h);return;case"option":for(var S in n)if(u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S))switch(S){case"selected":t.selected=!1;break;default:ft(t,e,S,null,i,u)}for(o in i)if(u=i[o],h=n[o],i.hasOwnProperty(o)&&u!==h&&(u!=null||h!=null))switch(o){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:ft(t,e,o,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&ft(t,e,E,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(te(137,e));break;default:ft(t,e,c,u,i,h)}return;default:if(Lh(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&yd(t,e,m,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||yd(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&ft(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||ft(t,e,p,u,i,h)}function i0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,l=a.duration;if(s&&l&&i0(r)){for(r=0,l=a.responseEnd,i+=1;i<n.length;i++){var o=n[i],c=o.startTime;if(c>l)break;var d=o.transferSize,p=o.initiatorType;d&&i0(p)&&(o=o.responseEnd,r+=d*(o<l?1:(l-c)/(o-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Md=null,bd=null;function Lc(t){return t.nodeType===9?t:t.ownerDocument}function a0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===$u?!1:($u=t,!0):($u=null,!1)}var uv=typeof setTimeout=="function"?setTimeout:void 0,HM=typeof clearTimeout=="function"?clearTimeout:void 0,s0=typeof Promise=="function"?Promise:void 0,GM=typeof queueMicrotask=="function"?queueMicrotask:typeof s0<"u"?function(t){return s0.resolve(null).then(t).catch(VM)}:uv;function VM(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function r0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Tr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Sl(n);for(var s=n.firstChild;s;){var r=s.nextSibling,l=s.nodeName;s[Gl]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Sl(t.ownerDocument.body);n=a}while(n);Tr(e)}function l0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Td(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Uh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function kM(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Gl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=$n(t.nextSibling),t===null)break}return null}function XM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=$n(t.nextSibling),t===null))return null;return t}function fv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$n(t.nextSibling),t===null))return null;return t}function Ad(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function WM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Cd=null;function o0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return $n(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function c0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function dv(t,e,n){switch(e=Lc(n),t){case"html":if(t=e.documentElement,!t)throw Error(te(452));return t;case"head":if(t=e.head,!t)throw Error(te(453));return t;case"body":if(t=e.body,!t)throw Error(te(454));return t;default:throw Error(te(451))}}function Sl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Uh(t)}var ei=new Map,u0=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=at.d;at.d={f:qM,r:jM,D:YM,C:ZM,L:KM,m:QM,X:$M,S:JM,M:eb};function qM(){var t=ra.f(),e=lu();return t||e}function jM(t){var e=Ur(t);e!==null&&e.tag===5&&e.type==="form"?s_(e):ra.r(t)}var Ir=typeof document>"u"?null:document;function hv(t,e,n){var i=Ir;if(i&&typeof e=="string"&&e){var a=Yn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),u0.has(a)||(u0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),ln(e,"link",t),Jt(e),i.head.appendChild(e)))}}function YM(t){ra.D(t),hv("dns-prefetch",t,null)}function ZM(t,e){ra.C(t,e),hv("preconnect",t,e)}function KM(t,e,n){ra.L(t,e,n);var i=Ir;if(i&&t&&e){var a='link[rel="preload"][as="'+Yn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Yn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Yn(n.imageSizes)+'"]')):a+='[href="'+Yn(t)+'"]';var s=a;switch(e){case"style":s=Er(t);break;case"script":s=zr(t)}ei.has(s)||(t=bt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ei.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(jl(s))||e==="script"&&i.querySelector(Yl(s))||(e=i.createElement("link"),ln(e,"link",t),Jt(e),i.head.appendChild(e)))}}function QM(t,e){ra.m(t,e);var n=Ir;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Yn(i)+'"][href="'+Yn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=zr(t)}if(!ei.has(s)&&(t=bt({rel:"modulepreload",href:t},e),ei.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yl(s)))return}i=n.createElement("link"),ln(i,"link",t),Jt(i),n.head.appendChild(i)}}}function JM(t,e,n){ra.S(t,e,n);var i=Ir;if(i&&t){var a=sr(i).hoistableStyles,s=Er(t);e=e||"default";var r=a.get(s);if(!r){var l={loading:0,preload:null};if(r=i.querySelector(jl(s)))l.loading=5;else{t=bt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ei.get(s))&&xp(t,n);var o=r=i.createElement("link");Jt(o),ln(o,"link",t),o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,ec(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:l},a.set(s,r)}}}function $M(t,e){ra.X(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Yl(a)),s||(t=bt({src:t,async:!0},e),(e=ei.get(a))&&_p(t,e),s=n.createElement("script"),Jt(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function eb(t,e){ra.M(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Yl(a)),s||(t=bt({src:t,async:!0,type:"module"},e),(e=ei.get(a))&&_p(t,e),s=n.createElement("script"),Jt(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function f0(t,e,n,i){var a=(a=Na.current)?Oc(a):null;if(!a)throw Error(te(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Er(n.href),n=sr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Er(n.href);var s=sr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(jl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),ei.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(t,n),s||tb(a,t,n,r.state))),e&&i===null)throw Error(te(528,""));return r}if(e&&i!==null)throw Error(te(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=zr(n),n=sr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(te(444,t))}}function Er(t){return'href="'+Yn(t)+'"'}function jl(t){return'link[rel="stylesheet"]['+t+"]"}function pv(t){return bt({},t,{"data-precedence":t.precedence,precedence:null})}function tb(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ln(e,"link",n),Jt(e),t.head.appendChild(e))}function zr(t){return'[src="'+Yn(t)+'"]'}function Yl(t){return"script[async]"+t}function d0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Yn(n.href)+'"]');if(i)return e.instance=i,Jt(i),i;var a=bt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Jt(i),ln(i,"style",a),ec(i,n.precedence,t),e.instance=i;case"stylesheet":a=Er(n.href);var s=t.querySelector(jl(a));if(s)return e.state.loading|=4,e.instance=s,Jt(s),s;i=pv(n),(a=ei.get(a))&&xp(i,a),s=(t.ownerDocument||t).createElement("link"),Jt(s);var r=s;return r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),ln(s,"link",i),e.state.loading|=4,ec(s,n.precedence,t),e.instance=s;case"script":return s=zr(n.src),(a=t.querySelector(Yl(s)))?(e.instance=a,Jt(a),a):(i=n,(a=ei.get(s))&&(i=bt({},n),_p(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Jt(a),ln(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(te(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,ec(i,n.precedence,t));return e.instance}function ec(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var l=i[r];if(l.dataset.precedence===e)s=l;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function xp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _p(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var tc=null;function h0(t,e,n){if(tc===null){var i=new Map,a=tc=new Map;a.set(n,i)}else a=tc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Gl]||s[nn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var l=i.get(r);l?l.push(s):i.set(r,[s])}}return i}function p0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function nb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function mv(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function ib(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Er(i.href),s=e.querySelector(jl(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,Jt(s);return}s=e.ownerDocument||e,i=pv(i),(a=ei.get(a))&&xp(i,a),s=s.createElement("link"),Jt(s);var r=s;r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),ln(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Pc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ef=0;function ab(t,e){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&ef===0&&(ef=62500*BM());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>ef?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,e.forEach(sb,t),Ic=null,Pc.call(t))}function sb(t,e){if(!(e.state.loading&4)){var n=Ic.get(t);if(n)var i=n.get(null);else{n=new Map,Ic.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Pc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ul={$$typeof:Vi,Provider:null,Consumer:null,_currentValue:ls,_currentValue2:ls,_threadCount:0};function rb(t,e,n,i,a,s,r,l,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function gv(t,e,n,i,a,s,r,l,o,c,d,p){return t=new rb(t,e,n,r,o,c,d,p,l),e=1,s===!0&&(e|=24),s=Un(3,null,null,e),t.current=s,s.stateNode=t,e=Xh(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},jh(s),t}function xv(t){return t?(t=tr,t):tr}function _v(t,e,n,i,a,s){a=xv(a),i.context===null?i.context=a:i.pendingContext=a,i=Ua(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=La(t,i,e),n!==null&&(Mn(n,t,e),dl(n,t,e))}function m0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){m0(t,e),(t=t.alternate)&&m0(t,e)}function vv(t){if(t.tag===13||t.tag===31){var e=bs(t,67108864);e!==null&&Mn(e,t,67108864),vp(t,67108864)}}function g0(t){if(t.tag===13||t.tag===31){var e=zn();e=Nh(e);var n=bs(t,e);n!==null&&Mn(n,t,e),vp(t,e)}}var zc=!0;function lb(t,e,n,i){var a=Le.T;Le.T=null;var s=at.p;try{at.p=2,Sp(t,e,n,i)}finally{at.p=s,Le.T=a}}function ob(t,e,n,i){var a=Le.T;Le.T=null;var s=at.p;try{at.p=8,Sp(t,e,n,i)}finally{at.p=s,Le.T=a}}function Sp(t,e,n,i){if(zc){var a=wd(i);if(a===null)Ju(t,e,i,Bc,n),x0(t,i);else if(ub(a,t,e,n,i))i.stopPropagation();else if(x0(t,i),e&4&&-1<cb.indexOf(t)){for(;a!==null;){var s=Ur(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$a(s.pendingLanes);if(r!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var o=1<<31-In(r);l.entanglements[1]|=o,r&=~o}Ci(s),!(it&6)&&(Rc=On()+500,ql(0))}}break;case 31:case 13:l=bs(s,2),l!==null&&Mn(l,s,2),lu(),vp(s,2)}if(s=wd(i),s===null&&Ju(t,e,i,Bc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Ju(t,e,i,null,n)}}function wd(t){return t=Oh(t),yp(t)}var Bc=null;function yp(t){if(Bc=null,t=Zs(t),t!==null){var e=zl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Fg(e),t!==null)return t;t=null}else if(n===31){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bc=t,null}function Sv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(YS()){case Xg:return 2;case Wg:return 8;case hc:case ZS:return 32;case qg:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ia=null,za=null,Ba=null,Ll=new Map,Ol=new Map,Ma=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(t,e){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(e.pointerId)}}function qr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Ur(e),e!==null&&vv(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function ub(t,e,n,i,a){switch(e){case"focusin":return Ia=qr(Ia,t,e,n,i,a),!0;case"dragenter":return za=qr(za,t,e,n,i,a),!0;case"mouseover":return Ba=qr(Ba,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Ll.set(s,qr(Ll.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ol.set(s,qr(Ol.get(s)||null,t,e,n,i,a)),!0}return!1}function yv(t){var e=Zs(t.target);if(e!==null){var n=zl(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,tm(t.priority,function(){g0(n)});return}}else if(e===31){if(e=Hg(n),e!==null){t.blockedOn=e,tm(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=Ur(n),e!==null&&vv(e),t.blockedOn=n,!1;e.shift()}return!0}function _0(t,e,n){ic(t)&&n.delete(e)}function fb(){Nd=!1,Ia!==null&&ic(Ia)&&(Ia=null),za!==null&&ic(za)&&(za=null),Ba!==null&&ic(Ba)&&(Ba=null),Ll.forEach(_0),Ol.forEach(_0)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,fb)))}var go=null;function v0(t){go!==t&&(go=t,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,function(){go===t&&(go=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(yp(i||n)===null)continue;break}var s=Ur(n);s!==null&&(t.splice(e,3),e-=3,ud(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Tr(t){function e(o){return mo(o,t)}Ia!==null&&mo(Ia,t),za!==null&&mo(za,t),Ba!==null&&mo(Ba,t),Ll.forEach(e),Ol.forEach(e);for(var n=0;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ma.length&&(n=Ma[0],n.blockedOn===null);)yv(n),n.blockedOn===null&&Ma.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Tn]||null;if(typeof s=="function")r||v0(n);else if(r){var l=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Tn]||null)l=r.formAction;else if(yp(a)!==null)continue}else l=r.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),v0(n)}}}function Mv(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Mp(t){this._internalRoot=t}uu.prototype.render=Mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));var n=e.current,i=zn();_v(n,i,t,e,null,null)};uu.prototype.unmount=Mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_v(t.current,2,null,t,null,null),lu(),e[Dr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ma.length&&e!==0&&e<Ma[n].priority;n++);Ma.splice(n,0,t),n===0&&yv(t)}};var S0=zg.version;if(S0!=="19.2.8")throw Error(te(527,S0,"19.2.8"));at.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=GS(e),t=t!==null?Gg(t):null,t=t===null?null:t.stateNode,t};var db={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Bl=xo.inject(db),Pn=xo}catch{}}jc.createRoot=function(t,e){if(!Bg(t))throw Error(te(299));var n=!1,i="",a=h_,s=p_,r=m_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gv(t,1,!1,null,null,n,i,null,a,s,r,Mv),t[Dr]=e.current,gp(t),new Mp(e)};jc.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(te(299));var i=!1,a="",s=h_,r=p_,l=m_,o=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),e=gv(t,1,!0,e,n??null,i,a,o,s,r,l,Mv),e.context=xv(null),n=e.current,i=zn(),i=Nh(i),a=Ua(i),a.callback=null,La(n,a,i),n=i,e.current.lanes=n,Hl(e,n),Ci(e),t[Dr]=e.current,gp(t),new uu(e)};jc.version="19.2.8";function bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv)}catch(t){console.error(t)}}bv(),Dg.exports=jc;var hb=Dg.exports;const pb=yg(hb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="185",mb=0,y0=1,gb=2,ac=1,xb=2,sl=3,ka=0,bn=1,Gi=2,Zi=0,dr=1,M0=2,b0=3,E0=4,_b=5,is=100,vb=101,Sb=102,yb=103,Mb=104,bb=200,Eb=201,Tb=202,Ab=203,Dd=204,Ud=205,Rb=206,Cb=207,wb=208,Nb=209,Db=210,Ub=211,Lb=212,Ob=213,Pb=214,Ld=0,Od=1,Pd=2,Ar=3,Id=4,zd=5,Bd=6,Fd=7,Ev=0,Ib=1,zb=2,bi=0,Tv=1,Av=2,Rv=3,Cv=4,wv=5,Nv=6,Dv=7,Uv=300,xs=301,Rr=302,tf=303,nf=304,fu=306,Hd=1e3,Wi=1001,Gd=1002,rn=1003,Bb=1004,_o=1005,fn=1006,af=1007,ss=1008,Qn=1009,Lv=1010,Ov=1011,Pl=1012,Ep=1013,Ti=1014,Si=1015,ia=1016,Tp=1017,Ap=1018,Il=1020,Pv=35902,Iv=35899,zv=1021,Bv=1022,li=1023,aa=1026,rs=1027,Fv=1028,Rp=1029,_s=1030,Cp=1031,wp=1033,sc=33776,rc=33777,lc=33778,oc=33779,Vd=35840,kd=35841,Xd=35842,Wd=35843,qd=36196,jd=37492,Yd=37496,Zd=37488,Kd=37489,Fc=37490,Qd=37491,Jd=37808,$d=37809,eh=37810,th=37811,nh=37812,ih=37813,ah=37814,sh=37815,rh=37816,lh=37817,oh=37818,ch=37819,uh=37820,fh=37821,dh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Hc=36285,xh=36286,Fb=3200,T0=0,Hb=1,ba="",kn="srgb",Gc="srgb-linear",Vc="linear",lt="srgb",Ns=7680,A0=519,Gb=512,Vb=513,kb=514,Np=515,Xb=516,Wb=517,Dp=518,qb=519,R0=35044,C0="300 es",yi=2e3,kc=2001;function jb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yb(){const t=Xc("canvas");return t.style.display="block",t}const w0={};function N0(...t){const e="THREE."+t.shift();console.log(e,...t)}function Hv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=Hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=Hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hr(...t){const e=t.join(" ");e in w0||(w0[e]=!0,Oe(...t))}function Zb(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Kb={[Ld]:Od,[Pd]:Bd,[Id]:Fd,[Ar]:zd,[Od]:Ld,[Bd]:Pd,[Fd]:Id,[zd]:Ar};class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,_h=180/Math.PI;function Zl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Qb(t,e){return(t%e+e)%e}function rf(t,e,n){return(1-n)*t+n*e}function jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lp=class Lp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lp.prototype.isVector2=!0;let st=Lp;class Br{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,l){let o=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],S=s[r+2],E=s[r+3];if(p!==E||o!==u||c!==h||d!==S){let m=o*u+c*h+d*S+p*E;m<0&&(u=-u,h=-h,S=-S,E=-E,m=-m);let f=1-l;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);f=Math.sin(f*x)/M,l=Math.sin(l*x)/M,o=o*f+u*l,c=c*f+h*l,d=d*f+S*l,p=p*f+E*l}else{o=o*f+u*l,c=c*f+h*l,d=d*f+S*l,p=p*f+E*l;const x=1/Math.sqrt(o*o+c*c+d*d+p*p);o*=x,c*=x,d*=x,p*=x}}e[n]=o,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,s,r){const l=i[a],o=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],S=s[r+3];return e[n]=l*S+d*p+o*h-c*u,e[n+1]=o*S+d*u+c*p-l*h,e[n+2]=c*S+d*h+l*u-o*p,e[n+3]=d*S-l*p-o*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,l=Math.cos,o=Math.sin,c=l(i/2),d=l(a/2),p=l(s/2),u=o(i/2),h=o(a/2),S=o(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"YXZ":this._x=u*d*p+c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"ZXY":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p-u*h*S;break;case"ZYX":this._x=u*d*p-c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p+u*h*S;break;case"YZX":this._x=u*d*p+c*h*S,this._y=c*h*p+u*d*S,this._z=c*d*S-u*h*p,this._w=c*d*p-u*h*S;break;case"XZY":this._x=u*d*p-c*h*S,this._y=c*h*p-u*d*S,this._z=c*d*S+u*h*p,this._w=c*d*p+u*h*S;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],l=n[5],o=n[9],c=n[2],d=n[6],p=n[10],u=i+l+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-o)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>l&&i>p){const h=2*Math.sqrt(1+i-l-p);this._w=(d-o)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(l>p){const h=2*Math.sqrt(1+l-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(o+d)/h}else{const h=2*Math.sqrt(1+p-i-l);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(o+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,l=n._x,o=n._y,c=n._z,d=n._w;return this._x=i*d+r*l+a*c-s*o,this._y=a*d+r*o+s*l-i*c,this._z=s*d+r*c+i*o-a*l,this._w=r*d-i*l-a*o-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,l=this.dot(e);l<0&&(i=-i,a=-a,s=-s,r=-r,l=-l);let o=1-n;if(l<.9995){const c=Math.acos(l),d=Math.sin(c);o=Math.sin(o*c)/d,n=Math.sin(n*c)/d,this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this._onChangeCallback()}else this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Op=class Op{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(D0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(D0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,l=e.z,o=e.w,c=2*(r*a-l*i),d=2*(l*n-s*a),p=2*(s*i-r*n);return this.x=n+o*c+r*p-l*d,this.y=i+o*d+l*c-s*p,this.z=a+o*p+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,l=n.y,o=n.z;return this.x=a*o-s*l,this.y=s*r-i*o,this.z=i*l-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Op.prototype.isVector3=!0;let V=Op;const lf=new V,D0=new Br,Pp=class Pp{constructor(e,n,i,a,s,r,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,c)}set(e,n,i,a,s,r,l,o,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=l,d[3]=n,d[4]=s,d[5]=o,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[3],o=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],S=i[8],E=a[0],m=a[3],f=a[6],x=a[1],M=a[4],_=a[7],T=a[2],A=a[5],C=a[8];return s[0]=r*E+l*x+o*T,s[3]=r*m+l*M+o*A,s[6]=r*f+l*_+o*C,s[1]=c*E+d*x+p*T,s[4]=c*m+d*M+p*A,s[7]=c*f+d*_+p*C,s[2]=u*E+h*x+S*T,s[5]=u*m+h*M+S*A,s[8]=u*f+h*_+S*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8];return n*r*d-n*l*c-i*s*d+i*l*o+a*s*c-a*r*o}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8],p=d*r-l*c,u=l*o-d*s,h=c*s-r*o,S=n*p+i*u+a*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=p*E,e[1]=(a*c-d*i)*E,e[2]=(l*i-a*r)*E,e[3]=u*E,e[4]=(d*n-a*o)*E,e[5]=(a*s-l*n)*E,e[6]=h*E,e[7]=(i*o-c*n)*E,e[8]=(r*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,l){const o=Math.cos(s),c=Math.sin(s);return this.set(i*o,i*c,-i*(o*r+c*l)+r+e,-a*c,a*o,-a*(-c*r+o*l)+l+n,0,0,1),this}scale(e,n){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(of.makeScale(e,n)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(of.makeRotation(-e)),this}translate(e,n){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pp.prototype.isMatrix3=!0;let ze=Pp;const of=new ze,U0=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const t={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===lt&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===lt&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?Vc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gc]:{primaries:e,whitePoint:i,transfer:Vc,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Ze=Jb();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class $b{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Xc("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ki(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eE=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,l=a.length;r<l;r++)a[r].isDataTexture?s.push(cf(a[r].image)):s.push(cf(a[r]))}else s=cf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let tE=0;const uf=new V;class mn extends Ts{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Wi,a=Wi,s=fn,r=ss,l=li,o=Qn,c=mn.DEFAULT_ANISOTROPY,d=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=Zl(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Uv;mn.DEFAULT_ANISOTROPY=1;const Ip=class Ip{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const o=e.elements,c=o[0],d=o[4],p=o[8],u=o[1],h=o[5],S=o[9],E=o[2],m=o[6],f=o[10];if(Math.abs(d-u)<.01&&Math.abs(p-E)<.01&&Math.abs(S-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+E)<.1&&Math.abs(S+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,_=(h+1)/2,T=(f+1)/2,A=(d+u)/4,C=(p+E)/4,v=(S+m)/4;return M>_&&M>T?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=A/i,s=C/i):_>T?_<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(_),i=A/a,s=v/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=C/s,a=v/s),this.set(i,a,s,n),this}let x=Math.sqrt((m-S)*(m-S)+(p-E)*(p-E)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-S)/x,this.y=(p-E)/x,this.z=(u-d)/x,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ip.prototype.isVector4=!0;let Ut=Ip;class nE extends Ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new mn(a),r=i.count;for(let l=0;l<r;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Up(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends nE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Gv extends mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iE extends mn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(e,n,i,a,s,r,l,o,c,d,p,u,h,S,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,c,d,p,u,h,S,E,m)}set(e,n,i,a,s,r,l,o,c,d,p,u,h,S,E,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=l,f[13]=o,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=S,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),r=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),l=Math.sin(i),o=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*p,S=l*d,E=l*p;n[0]=o*d,n[4]=-o*p,n[8]=c,n[1]=h+S*c,n[5]=u-E*c,n[9]=-l*o,n[2]=E-u*c,n[6]=S+h*c,n[10]=r*o}else if(e.order==="YXZ"){const u=o*d,h=o*p,S=c*d,E=c*p;n[0]=u+E*l,n[4]=S*l-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-l,n[2]=h*l-S,n[6]=E+u*l,n[10]=r*o}else if(e.order==="ZXY"){const u=o*d,h=o*p,S=c*d,E=c*p;n[0]=u-E*l,n[4]=-r*p,n[8]=S+h*l,n[1]=h+S*l,n[5]=r*d,n[9]=E-u*l,n[2]=-r*c,n[6]=l,n[10]=r*o}else if(e.order==="ZYX"){const u=r*d,h=r*p,S=l*d,E=l*p;n[0]=o*d,n[4]=S*c-h,n[8]=u*c+E,n[1]=o*p,n[5]=E*c+u,n[9]=h*c-S,n[2]=-c,n[6]=l*o,n[10]=r*o}else if(e.order==="YZX"){const u=r*o,h=r*c,S=l*o,E=l*c;n[0]=o*d,n[4]=E-u*p,n[8]=S*p+h,n[1]=p,n[5]=r*d,n[9]=-l*d,n[2]=-c*d,n[6]=h*p+S,n[10]=u-E*p}else if(e.order==="XZY"){const u=r*o,h=r*c,S=l*o,E=l*c;n[0]=o*d,n[4]=-p,n[8]=c*d,n[1]=u*p+E,n[5]=r*d,n[9]=h*p-S,n[2]=S*p-h,n[6]=l*d,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aE,e,sE)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),fa.crossVectors(i,Cn),fa.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),fa.crossVectors(i,Cn)),fa.normalize(),vo.crossVectors(Cn,fa),a[0]=fa.x,a[4]=vo.x,a[8]=Cn.x,a[1]=fa.y,a[5]=vo.y,a[9]=Cn.y,a[2]=fa.z,a[6]=vo.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[4],o=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],S=i[2],E=i[6],m=i[10],f=i[14],x=i[3],M=i[7],_=i[11],T=i[15],A=a[0],C=a[4],v=a[8],R=a[12],N=a[1],D=a[5],z=a[9],Z=a[13],ne=a[2],F=a[6],P=a[10],O=a[14],X=a[3],$=a[7],ae=a[11],ce=a[15];return s[0]=r*A+l*N+o*ne+c*X,s[4]=r*C+l*D+o*F+c*$,s[8]=r*v+l*z+o*P+c*ae,s[12]=r*R+l*Z+o*O+c*ce,s[1]=d*A+p*N+u*ne+h*X,s[5]=d*C+p*D+u*F+h*$,s[9]=d*v+p*z+u*P+h*ae,s[13]=d*R+p*Z+u*O+h*ce,s[2]=S*A+E*N+m*ne+f*X,s[6]=S*C+E*D+m*F+f*$,s[10]=S*v+E*z+m*P+f*ae,s[14]=S*R+E*Z+m*O+f*ce,s[3]=x*A+M*N+_*ne+T*X,s[7]=x*C+M*D+_*F+T*$,s[11]=x*v+M*z+_*P+T*ae,s[15]=x*R+M*Z+_*O+T*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],l=e[5],o=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],S=e[3],E=e[7],m=e[11],f=e[15],x=o*h-c*u,M=l*h-c*p,_=l*u-o*p,T=r*h-c*d,A=r*u-o*d,C=r*p-l*d;return n*(E*x-m*M+f*_)-i*(S*x-m*T+f*A)+a*(S*M-E*T+f*C)-s*(S*_-E*A+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],l=e[9],o=e[2],c=e[6],d=e[10];return n*(r*d-l*c)-i*(s*d-l*o)+a*(s*c-r*o)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],S=e[12],E=e[13],m=e[14],f=e[15],x=n*l-i*r,M=n*o-a*r,_=n*c-s*r,T=i*o-a*l,A=i*c-s*l,C=a*c-s*o,v=d*E-p*S,R=d*m-u*S,N=d*f-h*S,D=p*m-u*E,z=p*f-h*E,Z=u*f-h*m,ne=x*Z-M*z+_*D+T*N-A*R+C*v;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/ne;return e[0]=(l*Z-o*z+c*D)*F,e[1]=(a*z-i*Z-s*D)*F,e[2]=(E*C-m*A+f*T)*F,e[3]=(u*A-p*C-h*T)*F,e[4]=(o*N-r*Z-c*R)*F,e[5]=(n*Z-a*N+s*R)*F,e[6]=(m*_-S*C-f*M)*F,e[7]=(d*C-u*_+h*M)*F,e[8]=(r*z-l*N+c*v)*F,e[9]=(i*N-n*z-s*v)*F,e[10]=(S*A-E*_+f*x)*F,e[11]=(p*_-d*A-h*x)*F,e[12]=(l*R-r*D-o*v)*F,e[13]=(n*D-i*R+a*v)*F,e[14]=(E*M-S*T-m*x)*F,e[15]=(d*T-p*M+u*x)*F,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,l=e.y,o=e.z,c=s*r,d=s*l;return this.set(c*r+i,c*l-a*o,c*o+a*l,0,c*l+a*o,d*l+i,d*o-a*r,0,c*o-a*l,d*o+a*r,s*o*o+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,l=n._z,o=n._w,c=s+s,d=r+r,p=l+l,u=s*c,h=s*d,S=s*p,E=r*d,m=r*p,f=l*p,x=o*c,M=o*d,_=o*p,T=i.x,A=i.y,C=i.z;return a[0]=(1-(E+f))*T,a[1]=(h+_)*T,a[2]=(S-M)*T,a[3]=0,a[4]=(h-_)*A,a[5]=(1-(u+f))*A,a[6]=(m+x)*A,a[7]=0,a[8]=(S+M)*C,a[9]=(m-x)*C,a[10]=(1-(u+E))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Us.set(a[0],a[1],a[2]).length();const l=Us.set(a[4],a[5],a[6]).length(),o=Us.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ni.copy(this);const c=1/r,d=1/l,p=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,n.setFromRotationMatrix(ni),i.x=r,i.y=l,i.z=o,this}makePerspective(e,n,i,a,s,r,l=yi,o=!1){const c=this.elements,d=2*s/(n-e),p=2*s/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let S,E;if(o)S=s/(r-s),E=r*s/(r-s);else if(l===yi)S=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(l===kc)S=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,l=yi,o=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let S,E;if(o)S=1/(r-s),E=r/(r-s);else if(l===yi)S=-2/(r-s),E=-(r+s)/(r-s);else if(l===kc)S=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=S,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Wc.prototype.isMatrix4=!0;let Bt=Wc;const Us=new V,ni=new Bt,aE=new V(0,0,0),sE=new V(1,1,1),fa=new V,vo=new V,Cn=new V,O0=new Bt,P0=new Br;class vs{constructor(e=0,n=0,i=0,a=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],l=a[8],o=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class Vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rE=0;const I0=new V,Ls=new Br,Li=new Bt,So=new V,Yr=new V,lE=new V,oE=new Br,z0=new V(1,0,0),B0=new V(0,1,0),F0=new V(0,0,1),H0={type:"added"},cE={type:"removed"},Os={type:"childadded",child:null},ff={type:"childremoved",child:null};class En extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new V,n=new vs,i=new Br,a=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ze}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(B0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,n){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(B0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Yr,So,this.up):Li.lookAt(So,Yr,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Li),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),Os.child=e,this.dispatchEvent(Os),Os.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cE),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,lE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,oE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,d=o.length;c<d;c++){const p=o[c];s(e.shapes,p)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(s(e.materials,this.material[o]));a.material=l}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];a.animations.push(s(e.animations,o))}}if(n){const l=r(e.geometries),o=r(e.materials),c=r(e.textures),d=r(e.images),p=r(e.shapes),u=r(e.skeletons),h=r(e.animations),S=r(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),S.length>0&&(i.nodes=S)}return i.object=a,i;function r(l){const o=[];for(const c in l){const d=l[c];delete d.metadata,o.push(d)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}En.DEFAULT_UP=new V(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yo extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uE={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,S=.005;c.inputState.pinching&&u>h+S?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-S&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(uE)))}return l!==null&&(l.visible=a!==null),o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function hf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Ze.workingColorSpace){if(e=Qb(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=hf(r,s,e+1/3),this.g=hf(r,s,e),this.b=hf(r,s,e-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],l=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ze.workingToColorSpace(un.copy(this),e),Math.round(Ke(un.r*255,0,255))*65536+Math.round(Ke(un.g*255,0,255))*256+Math.round(Ke(un.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,s=un.b,r=Math.max(i,a,s),l=Math.min(i,a,s);let o,c;const d=(l+r)/2;if(l===r)o=0,c=0;else{const p=r-l;switch(c=d<=.5?p/(r+l):p/(2-r-l),r){case i:o=(a-s)/p+(a<s?6:0);break;case a:o=(s-i)/p+2;break;case s:o=(i-a)/p+4;break}o/=6}return e.h=o,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=kn){Ze.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,a=un.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(da),this.setHSL(da.h+e,da.s+n,da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(da),e.getHSL(Mo);const i=rf(da.h,Mo.h,n),a=rf(da.s,Mo.s,n),s=rf(da.l,Mo.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new nt;nt.NAMES=kv;class fE extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vs,this.environmentIntensity=1,this.environmentRotation=new vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new V,Oi=new V,pf=new V,Pi=new V,Ps=new V,Is=new V,G0=new V,mf=new V,gf=new V,xf=new V,_f=new Ut,vf=new Ut,Sf=new Ut;class ri{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ii.subVectors(a,n),Oi.subVectors(i,n),pf.subVectors(e,n);const r=ii.dot(ii),l=ii.dot(Oi),o=ii.dot(pf),c=Oi.dot(Oi),d=Oi.dot(pf),p=r*c-l*l;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*o-l*d)*u,S=(r*d-l*o)*u;return s.set(1-h-S,S,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,a,s,r,l,o){return this.getBarycoord(e,n,i,a,Pi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Pi.x),o.addScaledVector(r,Pi.y),o.addScaledVector(l,Pi.z),o)}static getInterpolatedAttribute(e,n,i,a,s,r){return _f.setScalar(0),vf.setScalar(0),Sf.setScalar(0),_f.fromBufferAttribute(e,n),vf.fromBufferAttribute(e,i),Sf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(_f,s.x),r.addScaledVector(vf,s.y),r.addScaledVector(Sf,s.z),r}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Oi.subVectors(e,n),ii.cross(Oi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ii.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,l;Ps.subVectors(a,i),Is.subVectors(s,i),mf.subVectors(e,i);const o=Ps.dot(mf),c=Is.dot(mf);if(o<=0&&c<=0)return n.copy(i);gf.subVectors(e,a);const d=Ps.dot(gf),p=Is.dot(gf);if(d>=0&&p<=d)return n.copy(a);const u=o*p-d*c;if(u<=0&&o>=0&&d<=0)return r=o/(o-d),n.copy(i).addScaledVector(Ps,r);xf.subVectors(e,s);const h=Ps.dot(xf),S=Is.dot(xf);if(S>=0&&h<=S)return n.copy(s);const E=h*c-o*S;if(E<=0&&c>=0&&S<=0)return l=c/(c-S),n.copy(i).addScaledVector(Is,l);const m=d*S-h*p;if(m<=0&&p-d>=0&&h-S>=0)return G0.subVectors(s,a),l=(p-d)/(p-d+(h-S)),n.copy(a).addScaledVector(G0,l);const f=1/(m+E+u);return r=E*f,l=u*f,n.copy(i).addScaledVector(Ps,r).addScaledVector(Is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kl{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,l=s.count;r<l;r++)e.isMesh===!0?e.getVertexPosition(r,ai):ai.fromBufferAttribute(s,r),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Eo.subVectors(this.max,Zr),zs.subVectors(e.a,Zr),Bs.subVectors(e.b,Zr),Fs.subVectors(e.c,Zr),ha.subVectors(Bs,zs),pa.subVectors(Fs,Bs),Ya.subVectors(zs,Fs);let n=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-Ya.z,Ya.y,ha.z,0,-ha.x,pa.z,0,-pa.x,Ya.z,0,-Ya.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-Ya.y,Ya.x,0];return!yf(n,zs,Bs,Fs,Eo)||(n=[1,0,0,0,1,0,0,0,1],!yf(n,zs,Bs,Fs,Eo))?!1:(To.crossVectors(ha,pa),n=[To.x,To.y,To.z],yf(n,zs,Bs,Fs,Eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new V,new V,new V,new V,new V,new V,new V,new V],ai=new V,bo=new Kl,zs=new V,Bs=new V,Fs=new V,ha=new V,pa=new V,Ya=new V,Zr=new V,Eo=new V,To=new V,Za=new V;function yf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Za.fromArray(t,s);const l=a.x*Math.abs(Za.x)+a.y*Math.abs(Za.y)+a.z*Math.abs(Za.z),o=e.dot(Za),c=n.dot(Za),d=i.dot(Za);if(Math.max(-Math.max(o,c,d),Math.min(o,c,d))>l)return!1}return!0}const Ht=new V,Ao=new st;let dE=0;class oi extends Ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=R0,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),a=vn(a,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xv extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Wv extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qi extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hE=new Kl,Kr=new V,Mf=new V;class du{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hE.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Kr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Mf)),this.expandByPoint(Kr.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pE=0;const Gn=new Bt,bf=new En,Hs=new V,wn=new Kl,Qr=new Kl,Kt=new V;class ui extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jb(e)?Wv:Xv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qi(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const l=n[s];Qr.setFromBufferAttribute(l),this.morphTargetsRelative?(Kt.addVectors(wn.min,Qr.min),wn.expandByPoint(Kt),Kt.addVectors(wn.max,Qr.max),wn.expandByPoint(Kt)):(wn.expandByPoint(Qr.min),wn.expandByPoint(Qr.max))}wn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Kt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Kt));if(n)for(let s=0,r=n.length;s<r;s++){const l=n[s],o=this.morphTargetsRelative;for(let c=0,d=l.count;c<d;c++)Kt.fromBufferAttribute(l,c),o&&(Hs.fromBufferAttribute(e,c),Kt.add(Hs)),a=Math.max(a,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const l=[],o=[];for(let v=0;v<i.count;v++)l[v]=new V,o[v]=new V;const c=new V,d=new V,p=new V,u=new st,h=new st,S=new st,E=new V,m=new V;function f(v,R,N){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,R),p.fromBufferAttribute(i,N),u.fromBufferAttribute(s,v),h.fromBufferAttribute(s,R),S.fromBufferAttribute(s,N),d.sub(c),p.sub(c),h.sub(u),S.sub(u);const D=1/(h.x*S.y-S.x*h.y);isFinite(D)&&(E.copy(d).multiplyScalar(S.y).addScaledVector(p,-h.y).multiplyScalar(D),m.copy(p).multiplyScalar(h.x).addScaledVector(d,-S.x).multiplyScalar(D),l[v].add(E),l[R].add(E),l[N].add(E),o[v].add(m),o[R].add(m),o[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,R=x.length;v<R;++v){const N=x[v],D=N.start,z=N.count;for(let Z=D,ne=D+z;Z<ne;Z+=3)f(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const M=new V,_=new V,T=new V,A=new V;function C(v){T.fromBufferAttribute(a,v),A.copy(T);const R=l[v];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),_.crossVectors(A,R);const D=_.dot(o[v])<0?-1:1;r.setXYZW(v,M.x,M.y,M.z,D)}for(let v=0,R=x.length;v<R;++v){const N=x[v],D=N.start,z=N.count;for(let Z=D,ne=D+z;Z<ne;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new V,s=new V,r=new V,l=new V,o=new V,c=new V,d=new V,p=new V;if(e)for(let u=0,h=e.count;u<h;u+=3){const S=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,S),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,m),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),l.fromBufferAttribute(i,S),o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),l.add(d),o.add(d),c.add(d),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(l,o){const c=l.array,d=l.itemSize,p=l.normalized,u=new c.constructor(o.length*d);let h=0,S=0;for(let E=0,m=o.length;E<m;E++){l.isInterleavedBufferAttribute?h=o[E]*l.data.stride+l.offset:h=o[E]*d;for(let f=0;f<d;f++)u[S++]=c[h++]}return new oi(u,d,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,i=this.index.array,a=this.attributes;for(const l in a){const o=a[l],c=e(o,i);n.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const o=[],c=s[l];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);o.push(h)}n.morphAttributes[l]=o}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,o=r.length;l<o;l++){const c=r[l];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const a={};let s=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[o]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let mE=0;class Ql extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Zl(),this.name="",this.type="Material",this.blending=dr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Ud,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ud&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const l in s){const o=s[l];delete o.metadata,r.push(o)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new st().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new V,Ef=new V,Ro=new V,ma=new V,Tf=new V,Co=new V,Af=new V;class qv{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Ef.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),ma.copy(this.origin).sub(Ef);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Ro),l=ma.dot(this.direction),o=-ma.dot(Ro),c=ma.lengthSq(),d=Math.abs(1-r*r);let p,u,h,S;if(d>0)if(p=r*o-l,u=r*l-o,S=s*d,p>=0)if(u>=-S)if(u<=S){const E=1/d;p*=E,u*=E,h=p*(p+r*u+2*l)+u*(r*p+u+2*o)+c}else u=s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;else u=-s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;else u<=-S?(p=Math.max(0,-(-r*s+l)),u=p>0?-s:Math.min(Math.max(-s,-o),s),h=-p*p+u*(u+2*o)+c):u<=S?(p=0,u=Math.min(Math.max(-s,-o),s),h=u*(u+2*o)+c):(p=Math.max(0,-(r*s+l)),u=p>0?s:Math.min(Math.max(-s,-o),s),h=-p*p+u*(u+2*o)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ef).addScaledVector(Ro,u),h}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),l=i-r,o=i+r;return o<0?null:l<0?this.at(o,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,l,o;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(l=(e.min.z-u.z)*p,o=(e.max.z-u.z)*p):(l=(e.max.z-u.z)*p,o=(e.min.z-u.z)*p),i>o||l>a)||((l>i||i!==i)&&(i=l),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,a,s){Tf.subVectors(n,e),Co.subVectors(i,e),Af.crossVectors(Tf,Co);let r=this.direction.dot(Af),l;if(r>0){if(a)return null;l=1}else if(r<0)l=-1,r=-r;else return null;ma.subVectors(this.origin,e);const o=l*this.direction.dot(Co.crossVectors(ma,Co));if(o<0)return null;const c=l*this.direction.dot(Tf.cross(ma));if(c<0||o+c>r)return null;const d=-l*ma.dot(Af);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jv extends Ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vs,this.combine=Ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const V0=new Bt,Ka=new qv,wo=new du,k0=new V,No=new V,Do=new V,Uo=new V,Rf=new V,Lo=new V,X0=new V,Oo=new V;class sa extends En{constructor(e=new ui,n=new jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(s&&l){Lo.set(0,0,0);for(let o=0,c=s.length;o<c;o++){const d=l[o],p=s[o];d!==0&&(Rf.fromBufferAttribute(p,e),r?Lo.addScaledVector(Rf,d):Lo.addScaledVector(Rf.sub(n),d))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),Ka.copy(e.ray).recast(e.near),!(wo.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(wo,k0)===null||Ka.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(V0.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(V0),!(i.boundingBox!==null&&Ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ka)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,l=s.index,o=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(l!==null)if(Array.isArray(r))for(let S=0,E=u.length;S<E;S++){const m=u[S],f=r[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=x,T=M;_<T;_+=3){const A=l.getX(_),C=l.getX(_+1),v=l.getX(_+2);a=Po(this,f,e,i,c,d,p,A,C,v),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let m=S,f=E;m<f;m+=3){const x=l.getX(m),M=l.getX(m+1),_=l.getX(m+2);a=Po(this,r,e,i,c,d,p,x,M,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(o!==void 0)if(Array.isArray(r))for(let S=0,E=u.length;S<E;S++){const m=u[S],f=r[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let _=x,T=M;_<T;_+=3){const A=_,C=_+1,v=_+2;a=Po(this,f,e,i,c,d,p,A,C,v),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const S=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let m=S,f=E;m<f;m+=3){const x=m,M=m+1,_=m+2;a=Po(this,r,e,i,c,d,p,x,M,_),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function gE(t,e,n,i,a,s,r,l){let o;if(e.side===bn?o=i.intersectTriangle(r,s,a,!0,l):o=i.intersectTriangle(a,s,r,e.side===ka,l),o===null)return null;Oo.copy(l),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function Po(t,e,n,i,a,s,r,l,o,c){t.getVertexPosition(l,No),t.getVertexPosition(o,Do),t.getVertexPosition(c,Uo);const d=gE(t,e,n,i,No,Do,Uo,X0);if(d){const p=new V;ri.getBarycoord(X0,No,Do,Uo,p),a&&(d.uv=ri.getInterpolatedAttribute(a,l,o,c,p,new st)),s&&(d.uv1=ri.getInterpolatedAttribute(s,l,o,c,p,new st)),r&&(d.normal=ri.getInterpolatedAttribute(r,l,o,c,p,new V),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:l,b:o,c,normal:new V,materialIndex:0};ri.getNormal(No,Do,Uo,u.normal),d.face=u,d.barycoord=p}return d}class xE extends mn{constructor(e=null,n=1,i=1,a,s,r,l,o,c=rn,d=rn,p,u){super(null,r,l,o,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new V,_E=new V,vE=new ze;class ns{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Cf.subVectors(i,n).cross(_E.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Cf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vE.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qa=new du,SE=new st(.5,.5),Io=new V;class Yv{constructor(e=new ns,n=new ns,i=new ns,a=new ns,s=new ns,r=new ns){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(a),l[4].copy(s),l[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const a=this.planes,s=e.elements,r=s[0],l=s[1],o=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],S=s[8],E=s[9],m=s[10],f=s[11],x=s[12],M=s[13],_=s[14],T=s[15];if(a[0].setComponents(c-r,h-d,f-S,T-x).normalize(),a[1].setComponents(c+r,h+d,f+S,T+x).normalize(),a[2].setComponents(c+l,h+p,f+E,T+M).normalize(),a[3].setComponents(c-l,h-p,f-E,T-M).normalize(),i)a[4].setComponents(o,u,m,_).normalize(),a[5].setComponents(c-o,h-u,f-m,T-_).normalize();else if(a[4].setComponents(c-o,h-u,f-m,T-_).normalize(),n===yi)a[5].setComponents(c+o,h+u,f+m,T+_).normalize();else if(n===kc)a[5].setComponents(o,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qa)}intersectsSprite(e){Qa.center.set(0,0,0);const n=SE.distanceTo(e.center);return Qa.radius=.7071067811865476+n,Qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qa)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Io.x=a.normal.x>0?e.max.x:e.min.x,Io.y=a.normal.y>0?e.max.y:e.min.y,Io.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zv extends Ql{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W0=new Bt,vh=new qv,zo=new du,Bo=new V;class yE extends En{constructor(e=new ui,n=new Zv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(a),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;W0.copy(a).invert(),vh.copy(e.ray).applyMatrix4(W0);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let S=u,E=h;S<E;S++){const m=c.getX(S);Bo.fromBufferAttribute(p,m),q0(Bo,m,o,a,e,n,this)}}else{const u=Math.max(0,r.start),h=Math.min(p.count,r.start+r.count);for(let S=u,E=h;S<E;S++)Bo.fromBufferAttribute(p,S),q0(Bo,S,o,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function q0(t,e,n,i,a,s,r){const l=vh.distanceSqToPoint(t);if(l<n){const o=new V;vh.closestPointToPoint(t,o),o.applyMatrix4(i);const c=a.ray.origin.distanceTo(o);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Kv extends mn{constructor(e=[],n=xs,i,a,s,r,l,o,c,d){super(e,n,i,a,s,r,l,o,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cr extends mn{constructor(e,n,i=Ti,a,s,r,l=rn,o=rn,c,d=aa,p=1){if(d!==aa&&d!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,s,r,l,o,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ME extends Cr{constructor(e,n=Ti,i=xs,a,s,r=rn,l=rn,o,c=aa){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,s,r,l,o,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Qv extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jl extends ui{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const l=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const o=[],c=[],d=[],p=[];let u=0,h=0;S("z","y","x",-1,-1,i,n,e,r,s,0),S("z","y","x",1,-1,i,n,-e,r,s,1),S("x","z","y",1,1,e,i,n,a,r,2),S("x","z","y",1,-1,e,i,-n,a,r,3),S("x","y","z",1,-1,e,n,i,a,s,4),S("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(o),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(d,3)),this.setAttribute("uv",new Qi(p,2));function S(E,m,f,x,M,_,T,A,C,v,R){const N=_/C,D=T/v,z=_/2,Z=T/2,ne=A/2,F=C+1,P=v+1;let O=0,X=0;const $=new V;for(let ae=0;ae<P;ae++){const ce=ae*D-Z;for(let ve=0;ve<F;ve++){const Se=ve*N-z;$[E]=Se*x,$[m]=ce*M,$[f]=ne,c.push($.x,$.y,$.z),$[E]=0,$[m]=0,$[f]=A>0?1:-1,d.push($.x,$.y,$.z),p.push(ve/C),p.push(1-ae/v),O+=1}}for(let ae=0;ae<v;ae++)for(let ce=0;ce<C;ce++){const ve=u+ce+F*ae,Se=u+ce+F*(ae+1),et=u+(ce+1)+F*(ae+1),Ee=u+(ce+1)+F*ae;o.push(ve,Se,Ee),o.push(Se,et,Ee),X+=6}l.addGroup(h,X,R),h+=X,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hu extends ui{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,l=Math.floor(i),o=Math.floor(a),c=l+1,d=o+1,p=e/l,u=n/o,h=[],S=[],E=[],m=[];for(let f=0;f<d;f++){const x=f*u-r;for(let M=0;M<c;M++){const _=M*p-s;S.push(_,-x,0),E.push(0,0,1),m.push(M/l),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let x=0;x<l;x++){const M=x+c*f,_=x+c*(f+1),T=x+1+c*(f+1),A=x+1+c*f;h.push(M,_,A),h.push(_,T,A)}this.setIndex(h),this.setAttribute("position",new Qi(S,3)),this.setAttribute("normal",new Qi(E,3)),this.setAttribute("uv",new Qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}function wr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(j0(a))a.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(j0(a[0])){const s=[];for(let r=0,l=a.length;r<l;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=wr(t[n]);for(const a in i)e[a]=i[a]}return e}function j0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function bE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const EE={clone:wr,merge:dn};var TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=bE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(a.value);break;case"v2":this.uniforms[i].value=new st().fromArray(a.value);break;case"v3":this.uniforms[i].value=new V().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(a.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RE extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CE extends Ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wE extends Ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fo=new V,Ho=new Br,pi=new V;class $v extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Ho,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Ho,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fo,Ho,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Ho,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ga=new V,Y0=new st,Z0=new st;class jn extends $v{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-e/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-e/ga.z)}getViewSize(e,n){return this.getViewBounds(e,Y0,Z0),n.subVectors(Z0,Y0)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/o,n-=r.offsetY*i/c,a*=r.width/o,i*=r.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eS extends $v{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,l=a+n,o=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,l-=d*this.view.offsetY,o=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=-90,Vs=1;class NE extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(Gs,Vs,e,n);a.layers=this.layers,this.add(a);const s=new jn(Gs,Vs,e,n);s.layers=this.layers,this.add(s);const r=new jn(Gs,Vs,e,n);r.layers=this.layers,this.add(r);const l=new jn(Gs,Vs,e,n);l.layers=this.layers,this.add(l);const o=new jn(Gs,Vs,e,n);o.layers=this.layers,this.add(o);const c=new jn(Gs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,l,o]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,l,o,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class DE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zp=class zp{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};zp.prototype.isMatrix2=!0;let K0=zp;function Q0(t,e,n,i){const a=UE(i);switch(n){case zv:return t*e;case Fv:return t*e/a.components*a.byteLength;case Rp:return t*e/a.components*a.byteLength;case _s:return t*e*2/a.components*a.byteLength;case Cp:return t*e*2/a.components*a.byteLength;case Bv:return t*e*3/a.components*a.byteLength;case li:return t*e*4/a.components*a.byteLength;case wp:return t*e*4/a.components*a.byteLength;case sc:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:case Wd:return Math.max(t,16)*Math.max(e,8)/4;case Vd:case Xd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case jd:case Zd:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yd:case Fc:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dh:case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hc:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UE(t){switch(t){case Qn:case Lv:return{byteLength:1,components:1};case Pl:case Ov:case ia:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Ti:case Ep:case Si:return{byteLength:4,components:1};case Pv:case Iv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LE(t){const e=new WeakMap;function n(l,o){const c=l.array,d=l.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(o,u),t.bufferData(o,c,d),l.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,o,c){const d=o.array,p=o.updateRanges;if(t.bindBuffer(c,l),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,S)=>h.start-S.start);let u=0;for(let h=1;h<p.length;h++){const S=p[u],E=p[h];E.start<=S.start+S.count+1?S.count=Math.max(S.count,E.start+E.count-S.start):(++u,p[u]=E)}p.length=u+1;for(let h=0,S=p.length;h<S;h++){const E=p[h];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(t.deleteBuffer(o.buffer),e.delete(l))}function r(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,n(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:a,remove:s,update:r}}var OE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PE=`#ifdef USE_ALPHAHASH
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
#endif`,IE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HE=`#ifdef USE_AOMAP
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
#endif`,GE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VE=`#ifdef USE_BATCHING
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
#endif`,kE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jE=`#ifdef USE_IRIDESCENCE
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
#endif`,YE=`#ifdef USE_BUMPMAP
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
#endif`,ZE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,e1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,t1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,i1=`#define PI 3.141592653589793
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
} // validated`,a1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s1=`vec3 transformedNormal = objectNormal;
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
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y1=`#ifdef USE_GRADIENTMAP
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
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,A1=`#ifdef USE_ENVMAP
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
#endif`,R1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
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
#endif`,U1=`uniform sampler2D dfgLUT;
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
}`,L1=`
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,W1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,iT=`#ifdef USE_NORMALMAP
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
#endif`,aT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
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
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`float getShadowMask() {
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
}`,ST=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,MT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
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
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RT=`#ifndef saturate
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
#endif`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PT=`uniform sampler2D t2D;
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HT=`#include <common>
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
}`,GT=`#if DEPTH_PACKING == 3200
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
}`,VT=`#define DISTANCE
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
}`,kT=`#define DISTANCE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WT=`uniform sampler2D tEquirect;
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
}`,jT=`uniform vec3 diffuse;
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
}`,YT=`#include <common>
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
}`,ZT=`uniform vec3 diffuse;
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
}`,KT=`#define LAMBERT
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
}`,QT=`#define LAMBERT
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
}`,JT=`#define MATCAP
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
}`,$T=`#define MATCAP
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
}`,eA=`#define NORMAL
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
}`,tA=`#define NORMAL
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
}`,nA=`#define PHONG
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
}`,iA=`#define PHONG
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
}`,aA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
}`,rA=`#define TOON
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
}`,oA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,uA=`#include <common>
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
}`,fA=`uniform vec3 color;
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
}`,dA=`uniform float rotation;
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
}`,hA=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:OE,alphahash_pars_fragment:PE,alphamap_fragment:IE,alphamap_pars_fragment:zE,alphatest_fragment:BE,alphatest_pars_fragment:FE,aomap_fragment:HE,aomap_pars_fragment:GE,batching_pars_vertex:VE,batching_vertex:kE,begin_vertex:XE,beginnormal_vertex:WE,bsdfs:qE,iridescence_fragment:jE,bumpmap_pars_fragment:YE,clipping_planes_fragment:ZE,clipping_planes_pars_fragment:KE,clipping_planes_pars_vertex:QE,clipping_planes_vertex:JE,color_fragment:$E,color_pars_fragment:e1,color_pars_vertex:t1,color_vertex:n1,common:i1,cube_uv_reflection_fragment:a1,defaultnormal_vertex:s1,displacementmap_pars_vertex:r1,displacementmap_vertex:l1,emissivemap_fragment:o1,emissivemap_pars_fragment:c1,colorspace_fragment:u1,colorspace_pars_fragment:f1,envmap_fragment:d1,envmap_common_pars_fragment:h1,envmap_pars_fragment:p1,envmap_pars_vertex:m1,envmap_physical_pars_fragment:A1,envmap_vertex:g1,fog_vertex:x1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:S1,gradientmap_pars_fragment:y1,lightmap_pars_fragment:M1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:E1,lights_pars_begin:T1,lights_toon_fragment:R1,lights_toon_pars_fragment:C1,lights_phong_fragment:w1,lights_phong_pars_fragment:N1,lights_physical_fragment:D1,lights_physical_pars_fragment:U1,lights_fragment_begin:L1,lights_fragment_maps:O1,lights_fragment_end:P1,lightprobes_pars_fragment:I1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:k1,map_particle_pars_fragment:X1,metalnessmap_fragment:W1,metalnessmap_pars_fragment:q1,morphinstance_vertex:j1,morphcolor_vertex:Y1,morphnormal_vertex:Z1,morphtarget_pars_vertex:K1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:$1,normal_pars_fragment:eT,normal_pars_vertex:tT,normal_vertex:nT,normalmap_pars_fragment:iT,clearcoat_normal_fragment_begin:aT,clearcoat_normal_fragment_maps:sT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:lT,opaque_fragment:oT,packing:cT,premultiplied_alpha_fragment:uT,project_vertex:fT,dithering_fragment:dT,dithering_pars_fragment:hT,roughnessmap_fragment:pT,roughnessmap_pars_fragment:mT,shadowmap_pars_fragment:gT,shadowmap_pars_vertex:xT,shadowmap_vertex:_T,shadowmask_pars_fragment:vT,skinbase_vertex:ST,skinning_pars_vertex:yT,skinning_vertex:MT,skinnormal_vertex:bT,specularmap_fragment:ET,specularmap_pars_fragment:TT,tonemapping_fragment:AT,tonemapping_pars_fragment:RT,transmission_fragment:CT,transmission_pars_fragment:wT,uv_pars_fragment:NT,uv_pars_vertex:DT,uv_vertex:UT,worldpos_vertex:LT,background_vert:OT,background_frag:PT,backgroundCube_vert:IT,backgroundCube_frag:zT,cube_vert:BT,cube_frag:FT,depth_vert:HT,depth_frag:GT,distance_vert:VT,distance_frag:kT,equirect_vert:XT,equirect_frag:WT,linedashed_vert:qT,linedashed_frag:jT,meshbasic_vert:YT,meshbasic_frag:ZT,meshlambert_vert:KT,meshlambert_frag:QT,meshmatcap_vert:JT,meshmatcap_frag:$T,meshnormal_vert:eA,meshnormal_frag:tA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:aA,meshphysical_frag:sA,meshtoon_vert:rA,meshtoon_frag:lA,points_vert:oA,points_frag:cA,shadow_vert:uA,shadow_frag:fA,sprite_vert:dA,sprite_frag:hA},me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},gi={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gi.physical={uniforms:dn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Go={r:0,b:0,g:0},pA=new Bt,nS=new ze;nS.set(-1,0,0,0,1,0,0,0,1);function mA(t,e,n,i,a,s){const r=new nt(0);let l=a===!0?0:1,o,c,d=null,p=0,u=null;function h(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const _=x.backgroundBlurriness>0;M=e.get(M,_)}return M}function S(x){let M=!1;const _=h(x);_===null?m(r,l):_&&_.isColor&&(m(_,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,M){const _=h(M);_&&(_.isCubeTexture||_.mapping===fu)?(c===void 0&&(c=new sa(new Jl(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:wr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pA.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nS),c.material.toneMapped=Ze.getTransfer(_.colorSpace)!==lt,(d!==_||p!==_.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(o===void 0&&(o=new sa(new hu(2,2),new Ai({name:"BackgroundMaterial",uniforms:wr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=_,o.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,o.material.toneMapped=Ze.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),o.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||u!==t.toneMapping)&&(o.material.needsUpdate=!0,d=_,p=_.version,u=t.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,M){x.getRGB(Go,Jv(t)),n.buffers.color.setClear(Go.r,Go.g,Go.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),l=M,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(r,l)},render:S,addToRenderList:E,dispose:f}}function gA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function l(D,z,Z,ne,F){let P=!1;const O=p(D,ne,Z,z);s!==O&&(s=O,c(s.object)),P=h(D,ne,Z,F),P&&S(D,ne,Z,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(P||r)&&(r=!1,_(D,z,Z,ne),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function o(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function d(D){return t.deleteVertexArray(D)}function p(D,z,Z,ne){const F=ne.wireframe===!0;let P=i[z.id];P===void 0&&(P={},i[z.id]=P);const O=D.isInstancedMesh===!0?D.id:0;let X=P[O];X===void 0&&(X={},P[O]=X);let $=X[Z.id];$===void 0&&($={},X[Z.id]=$);let ae=$[F];return ae===void 0&&(ae=u(o()),$[F]=ae),ae}function u(D){const z=[],Z=[],ne=[];for(let F=0;F<n;F++)z[F]=0,Z[F]=0,ne[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:ne,object:D,attributes:{},index:null}}function h(D,z,Z,ne){const F=s.attributes,P=z.attributes;let O=0;const X=Z.getAttributes();for(const $ in X)if(X[$].location>=0){const ce=F[$];let ve=P[$];if(ve===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ve=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ve=D.instanceColor)),ce===void 0||ce.attribute!==ve||ve&&ce.data!==ve.data)return!0;O++}return s.attributesNum!==O||s.index!==ne}function S(D,z,Z,ne){const F={},P=z.attributes;let O=0;const X=Z.getAttributes();for(const $ in X)if(X[$].location>=0){let ce=P[$];ce===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor));const ve={};ve.attribute=ce,ce&&ce.data&&(ve.data=ce.data),F[$]=ve,O++}s.attributes=F,s.attributesNum=O,s.index=ne}function E(){const D=s.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function m(D){f(D,0)}function f(D,z){const Z=s.newAttributes,ne=s.enabledAttributes,F=s.attributeDivisors;Z[D]=1,ne[D]===0&&(t.enableVertexAttribArray(D),ne[D]=1),F[D]!==z&&(t.vertexAttribDivisor(D,z),F[D]=z)}function x(){const D=s.newAttributes,z=s.enabledAttributes;for(let Z=0,ne=z.length;Z<ne;Z++)z[Z]!==D[Z]&&(t.disableVertexAttribArray(Z),z[Z]=0)}function M(D,z,Z,ne,F,P,O){O===!0?t.vertexAttribIPointer(D,z,Z,F,P):t.vertexAttribPointer(D,z,Z,ne,F,P)}function _(D,z,Z,ne){E();const F=ne.attributes,P=Z.getAttributes(),O=z.defaultAttributeValues;for(const X in P){const $=P[X];if($.location>=0){let ae=F[X];if(ae===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),ae!==void 0){const ce=ae.normalized,ve=ae.itemSize,Se=e.get(ae);if(Se===void 0)continue;const et=Se.buffer,Ee=Se.type,K=Se.bytesPerElement,ee=Ee===t.INT||Ee===t.UNSIGNED_INT||ae.gpuType===Ep;if(ae.isInterleavedBufferAttribute){const se=ae.data,q=se.stride,le=ae.offset;if(se.isInstancedInterleavedBuffer){for(let be=0;be<$.locationSize;be++)f($.location+be,se.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<$.locationSize;be++)m($.location+be);t.bindBuffer(t.ARRAY_BUFFER,et);for(let be=0;be<$.locationSize;be++)M($.location+be,ve/$.locationSize,Ee,ce,q*K,(le+ve/$.locationSize*be)*K,ee)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<$.locationSize;se++)f($.location+se,ae.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<$.locationSize;se++)m($.location+se);t.bindBuffer(t.ARRAY_BUFFER,et);for(let se=0;se<$.locationSize;se++)M($.location+se,ve/$.locationSize,Ee,ce,ve*K,ve/$.locationSize*se*K,ee)}}else if(O!==void 0){const ce=O[X];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv($.location,ce);break;case 3:t.vertexAttrib3fv($.location,ce);break;case 4:t.vertexAttrib4fv($.location,ce);break;default:t.vertexAttrib1fv($.location,ce)}}}}x()}function T(){R();for(const D in i){const z=i[D];for(const Z in z){const ne=z[Z];for(const F in ne){const P=ne[F];for(const O in P)d(P[O].object),delete P[O];delete ne[F]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const z=i[D.id];for(const Z in z){const ne=z[Z];for(const F in ne){const P=ne[F];for(const O in P)d(P[O].object),delete P[O];delete ne[F]}}delete i[D.id]}function C(D){for(const z in i){const Z=i[z];for(const ne in Z){const F=Z[ne];if(F[D.id]===void 0)continue;const P=F[D.id];for(const O in P)d(P[O].object),delete P[O];delete F[D.id]}}}function v(D){for(const z in i){const Z=i[z],ne=D.isInstancedMesh===!0?D.id:0,F=Z[ne];if(F!==void 0){for(const P in F){const O=F[P];for(const X in O)d(O[X].object),delete O[X];delete F[P]}delete Z[ne],Object.keys(Z).length===0&&delete i[z]}}}function R(){N(),r=!0,s!==a&&(s=a,c(s.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:R,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:x}}function xA(t,e,n){let i;function a(o){i=o}function s(o,c){t.drawArrays(i,o,c),n.update(c,i,1)}function r(o,c,d){d!==0&&(t.drawArraysInstanced(i,o,c,d),n.update(c,i,d))}function l(o,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=l}function _A(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const v=C===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Si&&!v)}function o(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=o(c);d!==c&&(Oe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,maxSamples:T,samples:A}}function vA(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new ns,l=new ze,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const S=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!a||S===null||S.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,M=x*4;let _=f.clippingState||null;o.value=_,_=d(S,u,M,h);for(let T=0;T!==M;++T)_[T]=n[T];f.clippingState=_,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){o.value!==n&&(o.value=n,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,S){const E=p!==null?p.length:0;let m=null;if(E!==0){if(m=o.value,S!==!0||m===null){const f=h+E*4,x=u.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=h;M!==E;++M,_+=4)r.copy(p[M]).applyMatrix4(x,l),r.normal.toArray(m,_),m[_+3]=r.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const wa=4,J0=[.125,.215,.35,.446,.526,.582],as=20,SA=256,Jr=new eS,$0=new nt;let wf=null,Nf=0,Df=0,Uf=!1;const yA=new V;class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:l=yA}=s;wf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o,l),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Nf,Df),this._renderer.xr.enabled=Uf,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ia,format:li,colorSpace:Gc,depthBuffer:!1},a=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MA(s)),this._blurMaterial=EA(s,e,n),this._ggxMaterial=bA(s,e,n)}return a}_compileMaterial(e){const n=new sa(new ui,e);this._renderer.compile(n,Jr)}_sceneToCubeUV(e,n,i,a,s){const o=new jn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor($0),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Jl,new jv({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy($0),f=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(o.up.set(0,c[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+d[M],s.y,s.z)):_===1?(o.up.set(0,0,c[M]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+d[M],s.z)):(o.up.set(0,c[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+d[M]));const T=this._cubeSize;ks(a,_*T,M>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(E,o),p.render(e,o)}p.toneMapping=h,p.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===xs||e.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const l=s.uniforms;l.envMap.value=e;const o=this._cubeSize;ks(n,0,0,3*o,2*o),i.setRenderTarget(n),i.render(r,Jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,l=this._lodMeshes[i];l.material=r;const o=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:S}=this,E=this._sizeLods[i],m=3*E*(i>S-wa?i-S+wa:0),f=4*(this._cubeSize-E);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=S-n,ks(s,m,f,3*E,2*E),a.setRenderTarget(s),a.render(l,Jr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=S-i,ks(e,m,f,3*E,2*E),a.setRenderTarget(e),a.render(l,Jr)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,l){const o=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*as-1),E=s/S,m=isFinite(s)?1+Math.floor(d*E):as;m>as&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const f=[];let x=0;for(let C=0;C<as;++C){const v=C/E,R=Math.exp(-v*v/2);f.push(R),C===0?x+=R:C<m&&(x+=2*R)}for(let C=0;C<f.length;C++)f[C]=f[C]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:M}=this;u.dTheta.value=S,u.mipInt.value=M-i;const _=this._sizeLods[a],T=3*_*(a>M-wa?a-M+wa:0),A=4*(this._cubeSize-_);ks(n,T,A,3*_,2*_),o.setRenderTarget(n),o.render(p,Jr)}}function MA(t){const e=[],n=[],i=[];let a=t;const s=t-wa+1+J0.length;for(let r=0;r<s;r++){const l=Math.pow(2,a);e.push(l);let o=1/l;r>t-wa?o=J0[r-t+wa-1]:r===0&&(o=0),n.push(o);const c=1/(l-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,S=6,E=3,m=2,f=1,x=new Float32Array(E*S*h),M=new Float32Array(m*S*h),_=new Float32Array(f*S*h);for(let A=0;A<h;A++){const C=A%3*2/3-1,v=A>2?0:-1,R=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(R,E*S*A),M.set(u,m*S*A);const N=[A,A,A,A,A,A];_.set(N,f*S*A)}const T=new ui;T.setAttribute("position",new oi(x,E)),T.setAttribute("uv",new oi(M,m)),T.setAttribute("faceIndex",new oi(_,f)),i.push(new sa(T,null)),a>wa&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function tg(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function bA(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function EA(t,e,n){const i=new Float32Array(as),a=new V(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ng(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function ig(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

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
	`}class iS extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Kv(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jl(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Zi});s.uniforms.tEquirect.value=n;const r=new sa(a,s),l=n.minFilter;return n.minFilter===ss&&(n.minFilter=fn),new NE(1,10,this).update(e,r),n.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function TA(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===tf||h===nf)if(e.has(u)){const S=e.get(u).texture;return l(S,u.mapping)}else{const S=u.image;if(S&&S.height>0){const E=new iS(S.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),l(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,S=h===tf||h===nf,E=h===xs||h===Rr;if(S||E){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new eg(t)),m=S?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return S&&x&&x.height>0||E&&x&&o(x)?(i===null&&(i=new eg(t)),m=S?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function l(u,h){return h===tf?u.mapping=xs:h===nf&&(u.mapping=Rr),u}function o(u){let h=0;const S=6;for(let E=0;E<S;E++)u[E]!==void 0&&h++;return h===S}function c(u){const h=u.target;h.removeEventListener("dispose",c);const S=e.get(h);S!==void 0&&(e.delete(h),S.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const S=n.get(h);S!==void 0&&(n.delete(h),S.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function AA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&hr("WebGLRenderer: "+i+" extension not supported."),a}}}function RA(t,e,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const S in u.attributes)e.remove(u.attributes[S]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function l(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function o(p){const u=p.attributes;for(const h in u)e.update(u[h],t.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,S=p.attributes.position;let E=0;if(S===void 0)return;if(h!==null){const x=h.array;E=h.version;for(let M=0,_=x.length;M<_;M+=3){const T=x[M+0],A=x[M+1],C=x[M+2];u.push(T,A,A,C,C,T)}}else{const x=S.array;E=S.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const T=M+0,A=M+1,C=M+2;u.push(T,A,A,C,C,T)}}const m=new(S.count>=65535?Wv:Xv)(u,1);m.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:l,update:o,getWireframeAttribute:d}}function CA(t,e,n){let i;function a(p){i=p}let s,r;function l(p){s=p.type,r=p.bytesPerElement}function o(p,u){t.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let E=0;for(let m=0;m<h;m++)E+=u[m];n.update(E,i,1)}this.setMode=a,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function wA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,l){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:$e("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function NA(t,e,n){const i=new WeakMap,a=new Ut;function s(r,l,o){const c=r.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(l);if(u===void 0||u.count!==p){let N=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",N)};var h=N;u!==void 0&&u.texture.dispose();const S=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let _=0;S===!0&&(_=1),E===!0&&(_=2),m===!0&&(_=3);let T=l.attributes.position.count*_,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*p),v=new Gv(C,T,A,p);v.type=Si,v.needsUpdate=!0;const R=_*4;for(let D=0;D<p;D++){const z=f[D],Z=x[D],ne=M[D],F=T*A*4*D;for(let P=0;P<z.count;P++){const O=P*R;S===!0&&(a.fromBufferAttribute(z,P),C[F+O+0]=a.x,C[F+O+1]=a.y,C[F+O+2]=a.z,C[F+O+3]=0),E===!0&&(a.fromBufferAttribute(Z,P),C[F+O+4]=a.x,C[F+O+5]=a.y,C[F+O+6]=a.z,C[F+O+7]=0),m===!0&&(a.fromBufferAttribute(ne,P),C[F+O+8]=a.x,C[F+O+9]=a.y,C[F+O+10]=a.z,C[F+O+11]=ne.itemSize===4?a.w:1)}}u={count:p,texture:v,size:new st(T,A)},i.set(l,u),l.addEventListener("dispose",N)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let S=0;for(let m=0;m<c.length;m++)S+=c[m];const E=l.morphTargetsRelative?1:1-S;o.getUniforms().setValue(t,"morphTargetBaseInfluence",E),o.getUniforms().setValue(t,"morphTargetInfluences",c)}o.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function DA(t,e,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function l(){s=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:l}}const UA={[Tv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[Cv]:"ACES_FILMIC_TONE_MAPPING",[Nv]:"AGX_TONE_MAPPING",[Dv]:"NEUTRAL_TONE_MAPPING",[wv]:"CUSTOM_TONE_MAPPING"};function LA(t,e,n,i,a,s){const r=new Ei(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Cr(e,n):void 0}),l=new Ei(e,n,{type:ia,depthBuffer:!1,stencilBuffer:!1}),o=new ui;o.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const c=new RE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new sa(o,c),p=new eS(-1,1,1,-1,0,1);let u=null,h=null,S=!1,E,m=null,f=[],x=!1;this.setSize=function(M,_){r.setSize(M,_),l.setSize(M,_);for(let T=0;T<f.length;T++){const A=f[T];A.setSize&&A.setSize(M,_)}},this.setEffects=function(M){f=M,x=f.length>0&&f[0].isRenderPass===!0;const _=r.width,T=r.height;for(let A=0;A<f.length;A++){const C=f[A];C.setSize&&C.setSize(_,T)}},this.begin=function(M,_){if(S||M.toneMapping===bi&&f.length===0)return!1;if(m=_,_!==null){const T=_.width,A=_.height;(r.width!==T||r.height!==A)&&this.setSize(T,A)}return x===!1&&M.setRenderTarget(r),E=M.toneMapping,M.toneMapping=bi,!0},this.hasRenderPass=function(){return x},this.end=function(M,_){M.toneMapping=E,S=!0;let T=r,A=l;for(let C=0;C<f.length;C++){const v=f[C];if(v.enabled!==!1&&(v.render(M,A,T,_),v.needsSwap!==!1)){const R=T;T=A,A=R}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},Ze.getTransfer(u)===lt&&(c.defines.SRGB_TRANSFER="");const C=UA[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(m),M.render(d,p),m=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),l.dispose(),o.dispose(),c.dispose()}}const aS=new mn,Sh=new Cr(1,1),sS=new Gv,rS=new iE,lS=new Kv,ag=[],sg=[],rg=new Float32Array(16),lg=new Float32Array(9),og=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=ag[a];if(s===void 0&&(s=new Float32Array(a),ag[a]=s),e!==0){i.toArray(s,0);for(let r=1,l=0;r!==e;++r)l+=n,t[r].toArray(s,l)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function OA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function BA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),Zt(n,i)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),Zt(n,i)}}function HA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;rg.set(i),t.uniformMatrix4fv(this.addr,!1,rg),Zt(n,i)}}function GA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function WA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function ZA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Sh.compareFunction=n.isReversedDepthBuffer()?Dp:Np,s=Sh):s=aS,n.setTexture2D(e||s,a)}function KA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||rS,a)}function QA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||lS,a)}function JA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||sS,a)}function $A(t){switch(t){case 5126:return OA;case 35664:return PA;case 35665:return IA;case 35666:return zA;case 35674:return BA;case 35675:return FA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return VA;case 35668:case 35672:return kA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return jA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}function e2(t,e){t.uniform1fv(this.addr,e)}function t2(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function n2(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function i2(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function a2(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function s2(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function r2(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function l2(t,e){t.uniform1iv(this.addr,e)}function o2(t,e){t.uniform2iv(this.addr,e)}function c2(t,e){t.uniform3iv(this.addr,e)}function u2(t,e){t.uniform4iv(this.addr,e)}function f2(t,e){t.uniform1uiv(this.addr,e)}function d2(t,e){t.uniform2uiv(this.addr,e)}function h2(t,e){t.uniform3uiv(this.addr,e)}function p2(t,e){t.uniform4uiv(this.addr,e)}function m2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=Sh:r=aS;for(let l=0;l!==a;++l)n.setTexture2D(e[l]||r,s[l])}function g2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||rS,s[r])}function x2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||lS,s[r])}function _2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||sS,s[r])}function v2(t){switch(t){case 5126:return e2;case 35664:return t2;case 35665:return n2;case 35666:return i2;case 35674:return a2;case 35675:return s2;case 35676:return r2;case 5124:case 35670:return l2;case 35667:case 35671:return o2;case 35668:case 35672:return c2;case 35669:case 35673:return u2;case 5125:return f2;case 36294:return d2;case 36295:return h2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return x2;case 36289:case 36303:case 36311:case 36292:return _2}}class S2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$A(n.type)}}class y2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v2(n.type)}}class M2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const l=a[s];l.setValue(e,n[l.id],i)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function b2(t,e,n){const i=t.name,a=i.length;for(Lf.lastIndex=0;;){const s=Lf.exec(i),r=Lf.lastIndex;let l=s[1];const o=s[2]==="]",c=s[3];if(o&&(l=l|0),c===void 0||c==="["&&r+2===a){cg(n,c===void 0?new S2(l,t,e):new y2(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new M2(l),cg(n,p)),n=p}}}class cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=e.getActiveUniform(n,r),o=e.getUniformLocation(n,l.name);b2(l,o,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const l=n[s],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function ug(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const E2=37297;let T2=0;function A2(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const l=r+1;i.push(`${l===e?">":" "} ${l}: ${n[r]}`)}return i.join(`
`)}const fg=new ze;function R2(t){Ze._getMatrix(fg,Ze.workingColorSpace,t);const e=`mat3( ${fg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Vc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const l=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+A2(t.getShaderSource(e),l)}else return s}function C2(t,e){const n=R2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const w2={[Tv]:"Linear",[Av]:"Reinhard",[Rv]:"Cineon",[Cv]:"ACESFilmic",[Nv]:"AgX",[Dv]:"Neutral",[wv]:"Custom"};function N2(t,e){const n=w2[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new V;function D2(){Ze.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function L2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:l}}return n}function rl(t){return t!==""}function hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(t){return t.replace(P2,z2)}const I2=new Map;function z2(t,e){let n=Ve[e];if(n===void 0){const i=I2.get(e);if(i!==void 0)n=Ve[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yh(n)}const B2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(t){return t.replace(B2,F2)}function F2(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function gg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const H2={[ac]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function G2(t){return H2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V2={[xs]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function k2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":V2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const X2={[Rr]:"ENVMAP_MODE_REFRACTION"};function W2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":X2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q2={[Ev]:"ENVMAP_BLENDING_MULTIPLY",[Ib]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function j2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":q2[t.combine]||"ENVMAP_BLENDING_NONE"}function Y2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Z2(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,l=n.fragmentShader;const o=G2(n),c=k2(n),d=W2(n),p=j2(n),u=Y2(n),h=U2(n),S=L2(s),E=a.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(rl).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S].filter(rl).join(`
`),f.length>0&&(f+=`
`)):(m=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),f=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,S,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==bi?N2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,C2("linearToOutputTexel",n.outputColorSpace),D2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rl).join(`
`)),r=yh(r),r=hg(r,n),r=pg(r,n),l=yh(l),l=hg(l,n),l=pg(l,n),r=mg(r),l=mg(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===C0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===C0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+r,_=x+f+l,T=ug(a,a.VERTEX_SHADER,M),A=ug(a,a.FRAGMENT_SHADER,_);a.attachShader(E,T),a.attachShader(E,A),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function C(D){if(t.debug.checkShaderErrors){const z=a.getProgramInfoLog(E)||"",Z=a.getShaderInfoLog(T)||"",ne=a.getShaderInfoLog(A)||"",F=z.trim(),P=Z.trim(),O=ne.trim();let X=!0,$=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,E,T,A);else{const ae=dg(a,T,"vertex"),ce=dg(a,A,"fragment");$e("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ae+`
`+ce)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):(P===""||O==="")&&($=!1);$&&(D.diagnostics={runnable:X,programLog:F,vertexShader:{log:P,prefix:m},fragmentShader:{log:O,prefix:f}})}a.deleteShader(T),a.deleteShader(A),v=new cc(a,E),R=O2(a,E)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(E,E2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=A,this}let K2=0;class Q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new J2(e),n.set(e,i)),i}}class J2{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}}function $2(t){return t===_s||t===Fc||t===Hc}function e3(t,e,n,i,a,s){const r=new Vv,l=new Q2,o=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return o.add(v),v===0?"uv":`uv${v}`}function E(v,R,N,D,z,Z){const ne=D.fog,F=z.geometry,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=e.get(v.envMap||P,O),$=X&&X.mapping===fu?X.image.height:null,ae=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ce=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ve=ce!==void 0?ce.length:0;let Se=0;F.morphAttributes.position!==void 0&&(Se=1),F.morphAttributes.normal!==void 0&&(Se=2),F.morphAttributes.color!==void 0&&(Se=3);let et,Ee,K,ee;if(ae){const Te=gi[ae];et=Te.vertexShader,Ee=Te.fragmentShader}else{et=v.vertexShader,Ee=v.fragmentShader;const Te=l.getVertexShaderStage(v),Ct=l.getFragmentShaderStage(v);l.update(v,Te,Ct),K=Te.id,ee=Ct.id}const se=t.getRenderTarget(),q=t.state.buffers.depth.getReversed(),le=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,rt=!!v.map,Pe=!!v.matcap,Ie=!!X,je=!!v.aoMap,Xe=!!v.lightMap,Et=!!v.bumpMap&&v.wireframe===!1,At=!!v.normalMap,Lt=!!v.displacementMap,Ft=!!v.emissiveMap,vt=!!v.metalnessMap,Rt=!!v.roughnessMap,L=v.anisotropy>0,en=v.clearcoat>0,tt=v.dispersion>0,w=v.iridescence>0,g=v.sheen>0,B=v.transmission>0,k=L&&!!v.anisotropyMap,j=en&&!!v.clearcoatMap,re=en&&!!v.clearcoatNormalMap,ue=en&&!!v.clearcoatRoughnessMap,Y=w&&!!v.iridescenceMap,J=w&&!!v.iridescenceThicknessMap,fe=g&&!!v.sheenColorMap,Ce=g&&!!v.sheenRoughnessMap,pe=!!v.specularMap,de=!!v.specularColorMap,De=!!v.specularIntensityMap,Ue=B&&!!v.transmissionMap,Fe=B&&!!v.thicknessMap,U=!!v.gradientMap,oe=!!v.alphaMap,Q=v.alphaTest>0,he=!!v.alphaHash,_e=!!v.extensions;let ie=bi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ie=t.toneMapping);const Re={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:et,fragmentShader:Ee,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:le,instancingColor:le&&z.instanceColor!==null,instancingMorph:le&&z.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:rt,matcap:Pe,envMap:Ie,envMapMode:Ie&&X.mapping,envMapCubeUVHeight:$,aoMap:je,lightMap:Xe,bumpMap:Et,normalMap:At,displacementMap:Lt,emissiveMap:Ft,normalMapObjectSpace:At&&v.normalMapType===Hb,normalMapTangentSpace:At&&v.normalMapType===T0,packedNormalMap:At&&v.normalMapType===T0&&$2(v.normalMap.format),metalnessMap:vt,roughnessMap:Rt,anisotropy:L,anisotropyMap:k,clearcoat:en,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:w,iridescenceMap:Y,iridescenceThicknessMap:J,sheen:g,sheenColorMap:fe,sheenRoughnessMap:Ce,specularMap:pe,specularColorMap:de,specularIntensityMap:De,transmission:B,transmissionMap:Ue,thicknessMap:Fe,gradientMap:U,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:oe,alphaTest:Q,alphaHash:he,combine:v.combine,mapUv:rt&&S(v.map.channel),aoMapUv:je&&S(v.aoMap.channel),lightMapUv:Xe&&S(v.lightMap.channel),bumpMapUv:Et&&S(v.bumpMap.channel),normalMapUv:At&&S(v.normalMap.channel),displacementMapUv:Lt&&S(v.displacementMap.channel),emissiveMapUv:Ft&&S(v.emissiveMap.channel),metalnessMapUv:vt&&S(v.metalnessMap.channel),roughnessMapUv:Rt&&S(v.roughnessMap.channel),anisotropyMapUv:k&&S(v.anisotropyMap.channel),clearcoatMapUv:j&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&S(v.sheenRoughnessMap.channel),specularMapUv:pe&&S(v.specularMap.channel),specularColorMapUv:de&&S(v.specularColorMap.channel),specularIntensityMapUv:De&&S(v.specularIntensityMap.channel),transmissionMapUv:Ue&&S(v.transmissionMap.channel),thicknessMapUv:Fe&&S(v.thicknessMap.channel),alphaMapUv:oe&&S(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(At||L),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!F.attributes.uv&&(rt||oe),fog:!!ne,useFog:v.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&At===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:q,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:rt&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:Ft&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gi,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Re.vertexUv1s=o.has(1),Re.vertexUv2s=o.has(2),Re.vertexUv3s=o.has(3),o.clear(),Re}function m(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)R.push(N),R.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(f(R,v),x(R,v),R.push(t.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function f(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function x(v,R){r.disableAll(),R.instancing&&r.enable(0),R.instancingColor&&r.enable(1),R.instancingMorph&&r.enable(2),R.matcap&&r.enable(3),R.envMap&&r.enable(4),R.normalMapObjectSpace&&r.enable(5),R.normalMapTangentSpace&&r.enable(6),R.clearcoat&&r.enable(7),R.iridescence&&r.enable(8),R.alphaTest&&r.enable(9),R.vertexColors&&r.enable(10),R.vertexAlphas&&r.enable(11),R.vertexUv1s&&r.enable(12),R.vertexUv2s&&r.enable(13),R.vertexUv3s&&r.enable(14),R.vertexTangents&&r.enable(15),R.anisotropy&&r.enable(16),R.alphaHash&&r.enable(17),R.batching&&r.enable(18),R.dispersion&&r.enable(19),R.batchingColor&&r.enable(20),R.gradientMap&&r.enable(21),R.packedNormalMap&&r.enable(22),R.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),R.fog&&r.enable(0),R.useFog&&r.enable(1),R.flatShading&&r.enable(2),R.logarithmicDepthBuffer&&r.enable(3),R.reversedDepthBuffer&&r.enable(4),R.skinning&&r.enable(5),R.morphTargets&&r.enable(6),R.morphNormals&&r.enable(7),R.morphColors&&r.enable(8),R.premultipliedAlpha&&r.enable(9),R.shadowMapEnabled&&r.enable(10),R.doubleSided&&r.enable(11),R.flipSided&&r.enable(12),R.useDepthPacking&&r.enable(13),R.dithering&&r.enable(14),R.transmission&&r.enable(15),R.sheen&&r.enable(16),R.opaque&&r.enable(17),R.pointsUvs&&r.enable(18),R.decodeVideoTexture&&r.enable(19),R.decodeVideoTextureEmissive&&r.enable(20),R.alphaToCoverage&&r.enable(21),R.numLightProbeGrids>0&&r.enable(22),R.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function M(v){const R=h[v.type];let N;if(R){const D=gi[R];N=EE.clone(D.uniforms)}else N=v.uniforms;return N}function _(v,R){let N=d.get(R);return N!==void 0?++N.usedTimes:(N=new Z2(t,R,v,a),c.push(N),d.set(R,N)),N}function T(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:_,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:C}}function t3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let l=t.get(r);return l===void 0&&(l={},t.set(r,l)),l}function i(r){t.delete(r)}function a(r,l,o){t.get(r)[l]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function n3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _g(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function l(u,h,S,E,m,f){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:h,material:S,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},t[e]=x):(x.id=u.id,x.object=u,x.geometry=h,x.material=S,x.materialVariant=r(u),x.groupOrder=E,x.renderOrder=u.renderOrder,x.z=m,x.group=f),e++,x}function o(u,h,S,E,m,f){const x=l(u,h,S,E,m,f);S.transmission>0?i.push(x):S.transparent===!0?a.push(x):n.push(x)}function c(u,h,S,E,m,f){const x=l(u,h,S,E,m,f);S.transmission>0?i.unshift(x):S.transparent===!0?a.unshift(x):n.unshift(x)}function d(u,h,S){n.length>1&&n.sort(u||n3),i.length>1&&i.sort(h||xg),a.length>1&&a.sort(h||xg),S&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=e,h=t.length;u<h;u++){const S=t[u];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:c,finish:p,sort:d}}function i3(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new _g,t.set(i,[r])):a>=s.length?(r=new _g,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function a3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new nt};break;case"SpotLight":n={position:new V,direction:new V,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function s3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let r3=0;function l3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o3(t){const e=new a3,n=s3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const a=new V,s=new Bt,r=new Bt;function l(c){let d=0,p=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,S=0,E=0,m=0,f=0,x=0,M=0,_=0,T=0,A=0,C=0;c.sort(l3);for(let R=0,N=c.length;R<N;R++){const D=c[R],z=D.color,Z=D.intensity,ne=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===_s?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=z.r*Z,p+=z.g*Z,u+=z.b*Z;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],Z);C++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const O=D.shadow,X=n.get(D);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.directionalShadow[h]=X,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=P,h++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(z).multiplyScalar(Z),P.distance=ne,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[E]=P;const O=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,O.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[E]=O.matrix,D.castShadow){const X=n.get(D);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=F,_++}E++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(z).multiplyScalar(Z),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=P,m++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){const O=D.shadow,X=n.get(D);X.shadowIntensity=O.intensity,X.shadowBias=O.bias,X.shadowNormalBias=O.normalBias,X.shadowRadius=O.radius,X.shadowMapSize=O.mapSize,X.shadowCameraNear=O.camera.near,X.shadowCameraFar=O.camera.far,i.pointShadow[S]=X,i.pointShadowMap[S]=F,i.pointShadowMatrix[S]=D.shadow.matrix,M++}i.point[S]=P,S++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(Z),P.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[f]=P,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==h||v.pointLength!==S||v.spotLength!==E||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==_||v.numSpotMaps!==T||v.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=m,i.point.length=S,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,v.directionalLength=h,v.pointLength=S,v.spotLength=E,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=_,v.numSpotMaps=T,v.numLightProbes=C,i.version=r3++)}function o(c,d){let p=0,u=0,h=0,S=0,E=0;const m=d.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const M=c[f];if(M.isDirectionalLight){const _=i.directional[p];_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),p++}else if(M.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const _=i.rectArea[S];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),S++}else if(M.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=i.hemi[E];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),E++}}}return{setup:l,setupView:o,state:i}}function vg(t){const e=new o3(t),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function l(u){i.push(u)}function o(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:l,pushLightProbeGrid:o}}function c3(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let l;return r===void 0?(l=new vg(t),e.set(a,[l])):s>=r.length?(l=new vg(t),r.push(l)):l=r[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const u3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f3=`uniform sampler2D shadow_pass;
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
}`,d3=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],h3=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Sg=new Bt,$r=new V,Of=new V;function p3(t,e,n){let i=new Yv;const a=new st,s=new st,r=new Ut,l=new CE,o=new wE,c={},d=n.maxTextureSize,p={[ka]:bn,[bn]:ka,[Gi]:Gi},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:u3,fragmentShader:f3}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const S=new ui;S.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new sa(S,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(A,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===xb&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ac);const R=t.getRenderTarget(),N=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Zi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=f!==this.type;Z&&C.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(F=>F.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,F=A.length;ne<F;ne++){const P=A[ne],O=P.shadow;if(O===void 0){Oe("WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;a.copy(O.mapSize);const X=O.getFrameExtents();a.multiply(X),s.copy(O.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/X.x),a.x=s.x*X.x,O.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/X.y),a.y=s.y*X.y,O.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||Z===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sl){if(P.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ei(a.x,a.y,{format:_s,type:ia,minFilter:fn,magFilter:fn,generateMipmaps:!1}),O.map.texture.name=P.name+".shadowMap",O.map.depthTexture=new Cr(a.x,a.y,Si),O.map.depthTexture.name=P.name+".shadowMapDepth",O.map.depthTexture.format=aa,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn}else P.isPointLight?(O.map=new iS(a.x),O.map.depthTexture=new ME(a.x,Ti)):(O.map=new Ei(a.x,a.y),O.map.depthTexture=new Cr(a.x,a.y,Ti)),O.map.depthTexture.name=P.name+".shadowMap",O.map.depthTexture.format=aa,this.type===ac?(O.map.depthTexture.compareFunction=$?Dp:Np,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn);O.camera.updateProjectionMatrix()}const ae=O.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<ae;ce++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ce),t.clear();else{ce===0&&(t.setRenderTarget(O.map),t.clear());const ve=O.getViewport(ce);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),z.viewport(r)}if(P.isPointLight){const ve=O.camera,Se=O.matrix,et=P.distance||ve.far;et!==ve.far&&(ve.far=et,ve.updateProjectionMatrix()),$r.setFromMatrixPosition(P.matrixWorld),ve.position.copy($r),Of.copy(ve.position),Of.add(d3[ce]),ve.up.copy(h3[ce]),ve.lookAt(Of),ve.updateMatrixWorld(),Se.makeTranslation(-$r.x,-$r.y,-$r.z),Sg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Sg,ve.coordinateSystem,ve.reversedDepth)}else O.updateMatrices(P);i=O.getFrustum(),_(C,v,O.camera,P,this.type)}O.isPointLightShadow!==!0&&this.type===sl&&x(O,v),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(R,N,D)};function x(A,C){const v=e.update(E);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ei(a.x,a.y,{format:_s,type:ia})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,v,u,E,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,v,h,E,null)}function M(A,C,v,R){let N=null;const D=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)N=D;else if(N=v.isPointLight===!0?o:l,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=N.uuid,Z=C.uuid;let ne=c[z];ne===void 0&&(ne={},c[z]=ne);let F=ne[Z];F===void 0&&(F=N.clone(),ne[Z]=F,C.addEventListener("dispose",T)),N=F}if(N.visible=C.visible,N.wireframe=C.wireframe,R===sl?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:p[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const z=t.properties.get(N);z.light=v}return N}function _(A,C,v,R,N){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===sl)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),ne=A.material;if(Array.isArray(ne)){const F=Z.groups;for(let P=0,O=F.length;P<O;P++){const X=F[P],$=ne[X.materialIndex];if($&&$.visible){const ae=M(A,$,R,N);A.onBeforeShadow(t,A,C,v,Z,ae,X),t.renderBufferDirect(v,null,Z,ae,A,X),A.onAfterShadow(t,A,C,v,Z,ae,X)}}}else if(ne.visible){const F=M(A,ne,R,N);A.onBeforeShadow(t,A,C,v,Z,F,null),t.renderBufferDirect(v,null,Z,F,A,null),A.onAfterShadow(t,A,C,v,Z,F,null)}}const z=A.children;for(let Z=0,ne=z.length;Z<ne;Z++)_(z[Z],C,v,R,N)}function T(A){A.target.removeEventListener("dispose",T);for(const v in c){const R=c[v],N=A.target.uuid;N in R&&(R[N].dispose(),delete R[N])}}}function m3(t,e){function n(){let U=!1;const oe=new Ut;let Q=null;const he=new Ut(0,0,0,0);return{setMask:function(_e){Q!==_e&&!U&&(t.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){U=_e},setClear:function(_e,ie,Re,Te,Ct){Ct===!0&&(_e*=Te,ie*=Te,Re*=Te),oe.set(_e,ie,Re,Te),he.equals(oe)===!1&&(t.clearColor(_e,ie,Re,Te),he.copy(oe))},reset:function(){U=!1,Q=null,he.set(-1,0,0,0)}}}function i(){let U=!1,oe=!1,Q=null,he=null,_e=null;return{setReversed:function(ie){if(oe!==ie){const Re=e.get("EXT_clip_control");ie?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),oe=ie;const Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return oe},setTest:function(ie){ie?se(t.DEPTH_TEST):q(t.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!U&&(t.depthMask(ie),Q=ie)},setFunc:function(ie){if(oe&&(ie=Kb[ie]),he!==ie){switch(ie){case Ld:t.depthFunc(t.NEVER);break;case Od:t.depthFunc(t.ALWAYS);break;case Pd:t.depthFunc(t.LESS);break;case Ar:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case zd:t.depthFunc(t.GEQUAL);break;case Bd:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ie}},setLocked:function(ie){U=ie},setClear:function(ie){_e!==ie&&(_e=ie,oe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){U=!1,Q=null,he=null,_e=null,oe=!1}}}function a(){let U=!1,oe=null,Q=null,he=null,_e=null,ie=null,Re=null,Te=null,Ct=null;return{setTest:function(gt){U||(gt?se(t.STENCIL_TEST):q(t.STENCIL_TEST))},setMask:function(gt){oe!==gt&&!U&&(t.stencilMask(gt),oe=gt)},setFunc:function(gt,fi,di){(Q!==gt||he!==fi||_e!==di)&&(t.stencilFunc(gt,fi,di),Q=gt,he=fi,_e=di)},setOp:function(gt,fi,di){(ie!==gt||Re!==fi||Te!==di)&&(t.stencilOp(gt,fi,di),ie=gt,Re=fi,Te=di)},setLocked:function(gt){U=gt},setClear:function(gt){Ct!==gt&&(t.clearStencil(gt),Ct=gt)},reset:function(){U=!1,oe=null,Q=null,he=null,_e=null,ie=null,Re=null,Te=null,Ct=null}}}const s=new n,r=new i,l=new a,o=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,S=[],E=null,m=!1,f=null,x=null,M=null,_=null,T=null,A=null,C=null,v=new nt(0,0,0),R=0,N=!1,D=null,z=null,Z=null,ne=null,F=null;const P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,X=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),O=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=X>=2);let ae=null,ce={};const ve=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),et=new Ut().fromArray(ve),Ee=new Ut().fromArray(Se);function K(U,oe,Q,he){const _e=new Uint8Array(4),ie=t.createTexture();t.bindTexture(U,ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Re=0;Re<Q;Re++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(oe+Re,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ie}const ee={};ee[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),l.setClear(0),se(t.DEPTH_TEST),r.setFunc(Ar),Et(!1),At(y0),se(t.CULL_FACE),je(Zi);function se(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function q(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function le(U,oe){return u[U]!==oe?(t.bindFramebuffer(U,oe),u[U]=oe,U===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=oe),U===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function be(U,oe){let Q=S,he=!1;if(U){Q=h.get(oe),Q===void 0&&(Q=[],h.set(oe,Q));const _e=U.textures;if(Q.length!==_e.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Re=_e.length;ie<Re;ie++)Q[ie]=t.COLOR_ATTACHMENT0+ie;Q.length=_e.length,he=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,he=!0);he&&t.drawBuffers(Q)}function rt(U){return E!==U?(t.useProgram(U),E=U,!0):!1}const Pe={[is]:t.FUNC_ADD,[vb]:t.FUNC_SUBTRACT,[Sb]:t.FUNC_REVERSE_SUBTRACT};Pe[yb]=t.MIN,Pe[Mb]=t.MAX;const Ie={[bb]:t.ZERO,[Eb]:t.ONE,[Tb]:t.SRC_COLOR,[Dd]:t.SRC_ALPHA,[Db]:t.SRC_ALPHA_SATURATE,[wb]:t.DST_COLOR,[Rb]:t.DST_ALPHA,[Ab]:t.ONE_MINUS_SRC_COLOR,[Ud]:t.ONE_MINUS_SRC_ALPHA,[Nb]:t.ONE_MINUS_DST_COLOR,[Cb]:t.ONE_MINUS_DST_ALPHA,[Ub]:t.CONSTANT_COLOR,[Lb]:t.ONE_MINUS_CONSTANT_COLOR,[Ob]:t.CONSTANT_ALPHA,[Pb]:t.ONE_MINUS_CONSTANT_ALPHA};function je(U,oe,Q,he,_e,ie,Re,Te,Ct,gt){if(U===Zi){m===!0&&(q(t.BLEND),m=!1);return}if(m===!1&&(se(t.BLEND),m=!0),U!==_b){if(U!==f||gt!==N){if((x!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),x=is,T=is),gt)switch(U){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case M0:t.blendFunc(t.ONE,t.ONE);break;case b0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case E0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",U);break}else switch(U){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case M0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case b0:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",U);break}M=null,_=null,A=null,C=null,v.set(0,0,0),R=0,f=U,N=gt}return}_e=_e||oe,ie=ie||Q,Re=Re||he,(oe!==x||_e!==T)&&(t.blendEquationSeparate(Pe[oe],Pe[_e]),x=oe,T=_e),(Q!==M||he!==_||ie!==A||Re!==C)&&(t.blendFuncSeparate(Ie[Q],Ie[he],Ie[ie],Ie[Re]),M=Q,_=he,A=ie,C=Re),(Te.equals(v)===!1||Ct!==R)&&(t.blendColor(Te.r,Te.g,Te.b,Ct),v.copy(Te),R=Ct),f=U,N=!1}function Xe(U,oe){U.side===Gi?q(t.CULL_FACE):se(t.CULL_FACE);let Q=U.side===bn;oe&&(Q=!Q),Et(Q),U.blending===dr&&U.transparent===!1?je(Zi):je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),s.setMask(U.colorWrite);const he=U.stencilWrite;l.setTest(he),he&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):q(t.SAMPLE_ALPHA_TO_COVERAGE)}function Et(U){D!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),D=U)}function At(U){U!==mb?(se(t.CULL_FACE),U!==z&&(U===y0?t.cullFace(t.BACK):U===gb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):q(t.CULL_FACE),z=U}function Lt(U){U!==Z&&(O&&t.lineWidth(U),Z=U)}function Ft(U,oe,Q){U?(se(t.POLYGON_OFFSET_FILL),(ne!==oe||F!==Q)&&(ne=oe,F=Q,r.getReversed()&&(oe=-oe),t.polygonOffset(oe,Q))):q(t.POLYGON_OFFSET_FILL)}function vt(U){U?se(t.SCISSOR_TEST):q(t.SCISSOR_TEST)}function Rt(U){U===void 0&&(U=t.TEXTURE0+P-1),ae!==U&&(t.activeTexture(U),ae=U)}function L(U,oe,Q){Q===void 0&&(ae===null?Q=t.TEXTURE0+P-1:Q=ae);let he=ce[Q];he===void 0&&(he={type:void 0,texture:void 0},ce[Q]=he),(he.type!==U||he.texture!==oe)&&(ae!==Q&&(t.activeTexture(Q),ae=Q),t.bindTexture(U,oe||ee[U]),he.type=U,he.texture=oe)}function en(){const U=ce[ae];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function g(){try{t.texSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function B(){try{t.texSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function re(){try{t.texStorage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function ue(){try{t.texStorage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function Y(){try{t.texImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function J(){try{t.texImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function fe(U){return p[U]!==void 0?p[U]:t.getParameter(U)}function Ce(U,oe){p[U]!==oe&&(t.pixelStorei(U,oe),p[U]=oe)}function pe(U){et.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function de(U){Ee.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ee.copy(U))}function De(U,oe){let Q=c.get(oe);Q===void 0&&(Q=new WeakMap,c.set(oe,Q));let he=Q.get(U);he===void 0&&(he=t.getUniformBlockIndex(oe,U.name),Q.set(U,he))}function Ue(U,oe){const he=c.get(oe).get(U);o.get(oe)!==he&&(t.uniformBlockBinding(oe,he,U.__bindingPointIndex),o.set(oe,he))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},ae=null,ce={},u={},h=new WeakMap,S=[],E=null,m=!1,f=null,x=null,M=null,_=null,T=null,A=null,C=null,v=new nt(0,0,0),R=0,N=!1,D=null,z=null,Z=null,ne=null,F=null,et.set(0,0,t.canvas.width,t.canvas.height),Ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),l.reset()}return{buffers:{color:s,depth:r,stencil:l},enable:se,disable:q,bindFramebuffer:le,drawBuffers:be,useProgram:rt,setBlending:je,setMaterial:Xe,setFlipSided:Et,setCullFace:At,setLineWidth:Lt,setPolygonOffset:Ft,setScissorTest:vt,activeTexture:Rt,bindTexture:L,unbindTexture:en,compressedTexImage2D:tt,compressedTexImage3D:w,texImage2D:Y,texImage3D:J,pixelStorei:Ce,getParameter:fe,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:re,texStorage3D:ue,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:k,compressedTexSubImage3D:j,scissor:pe,viewport:de,reset:Fe}}function g3(t,e,n,i,a,s,r){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,g){return S?new OffscreenCanvas(w,g):Xc("canvas")}function m(w,g,B){let k=1;const j=tt(w);if((j.width>B||j.height>B)&&(k=B/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(k*j.width),ue=Math.floor(k*j.height);u===void 0&&(u=E(re,ue));const Y=g?E(re,ue):u;return Y.width=re,Y.height=ue,Y.getContext("2d").drawImage(w,0,0,re,ue),Oe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+ue+")."),Y}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function f(w){return w.generateMipmaps}function x(w){t.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(w,g,B,k,j,re=!1){if(w!==null){if(t[w]!==void 0)return t[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;k&&(ue=e.get("EXT_texture_norm16"),ue||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=g;if(g===t.RED&&(B===t.FLOAT&&(Y=t.R32F),B===t.HALF_FLOAT&&(Y=t.R16F),B===t.UNSIGNED_BYTE&&(Y=t.R8),B===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),B===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),g===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.R8UI),B===t.UNSIGNED_SHORT&&(Y=t.R16UI),B===t.UNSIGNED_INT&&(Y=t.R32UI),B===t.BYTE&&(Y=t.R8I),B===t.SHORT&&(Y=t.R16I),B===t.INT&&(Y=t.R32I)),g===t.RG&&(B===t.FLOAT&&(Y=t.RG32F),B===t.HALF_FLOAT&&(Y=t.RG16F),B===t.UNSIGNED_BYTE&&(Y=t.RG8),B===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),B===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RG8UI),B===t.UNSIGNED_SHORT&&(Y=t.RG16UI),B===t.UNSIGNED_INT&&(Y=t.RG32UI),B===t.BYTE&&(Y=t.RG8I),B===t.SHORT&&(Y=t.RG16I),B===t.INT&&(Y=t.RG32I)),g===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),B===t.UNSIGNED_INT&&(Y=t.RGB32UI),B===t.BYTE&&(Y=t.RGB8I),B===t.SHORT&&(Y=t.RGB16I),B===t.INT&&(Y=t.RGB32I)),g===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),B===t.UNSIGNED_INT&&(Y=t.RGBA32UI),B===t.BYTE&&(Y=t.RGBA8I),B===t.SHORT&&(Y=t.RGBA16I),B===t.INT&&(Y=t.RGBA32I)),g===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),B===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),g===t.RGBA){const J=re?Vc:Ze.getTransfer(j);B===t.FLOAT&&(Y=t.RGBA32F),B===t.HALF_FLOAT&&(Y=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Y=J===lt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),B===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function T(w,g){let B;return w?g===null||g===Ti||g===Il?B=t.DEPTH24_STENCIL8:g===Si?B=t.DEPTH32F_STENCIL8:g===Pl&&(B=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===Il?B=t.DEPTH_COMPONENT24:g===Si?B=t.DEPTH_COMPONENT32F:g===Pl&&(B=t.DEPTH_COMPONENT16),B}function A(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){const g=w.target;g.removeEventListener("dispose",C),R(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function v(w){const g=w.target;g.removeEventListener("dispose",v),D(g)}function R(w){const g=i.get(w);if(g.__webglInit===void 0)return;const B=w.source,k=h.get(B);if(k){const j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(w),Object.keys(k).length===0&&h.delete(B)}i.remove(w)}function N(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const B=w.source,k=h.get(B);delete k[g.__cacheKey],r.memory.textures--}function D(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[k][j]);else t.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)t.deleteFramebuffer(g.__webglFramebuffer[k]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=w.textures;for(let k=0,j=B.length;k<j;k++){const re=i.get(B[k]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),r.memory.textures--),i.remove(B[k])}i.remove(w)}let z=0;function Z(){z=0}function ne(){return z}function F(w){z=w}function P(){const w=z;return w>=a.maxTextures&&Oe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),z+=1,w}function O(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function X(w,g){const B=i.get(w);if(w.isVideoTexture&&L(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){const k=w.image;if(k===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,w,g);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+g)}function $(w,g){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,g);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+g)}function ae(w,g){const B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){q(B,w,g);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+g)}function ce(w,g){const B=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&B.__version!==w.version){le(B,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+g)}const ve={[Hd]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Gd]:t.MIRRORED_REPEAT},Se={[rn]:t.NEAREST,[Bb]:t.NEAREST_MIPMAP_NEAREST,[_o]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[af]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},et={[Gb]:t.NEVER,[qb]:t.ALWAYS,[Vb]:t.LESS,[Np]:t.LEQUAL,[kb]:t.EQUAL,[Dp]:t.GEQUAL,[Xb]:t.GREATER,[Wb]:t.NOTEQUAL};function Ee(w,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===af||g.magFilter===_o||g.magFilter===ss||g.minFilter===fn||g.minFilter===af||g.minFilter===_o||g.minFilter===ss)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ve[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ve[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ve[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,et[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===rn||g.minFilter!==_o&&g.minFilter!==ss||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(w,g){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));const k=g.source;let j=h.get(k);j===void 0&&(j={},h.set(k,j));const re=O(g);if(re!==w.__cacheKey){j[re]===void 0&&(j[re]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[re].usedTimes++;const ue=j[w.__cacheKey];ue!==void 0&&(j[w.__cacheKey].usedTimes--,ue.usedTimes===0&&N(g)),w.__cacheKey=re,w.__webglTexture=j[re].texture}return B}function ee(w,g,B){return Math.floor(Math.floor(w/B)/g)}function se(w,g,B,k){const re=w.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,B,k,g.data);else{re.sort((Ce,pe)=>Ce.start-pe.start);let ue=0;for(let Ce=1;Ce<re.length;Ce++){const pe=re[ue],de=re[Ce],De=pe.start+pe.count,Ue=ee(de.start,g.width,4),Fe=ee(pe.start,g.width,4);de.start<=De+1&&Ue===Fe&&ee(de.start+de.count-1,g.width,4)===Ue?pe.count=Math.max(pe.count,de.start+de.count-pe.start):(++ue,re[ue]=de)}re.length=ue+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Ce=0,pe=re.length;Ce<pe;Ce++){const de=re[Ce],De=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),Fe=De%g.width,U=Math.floor(De/g.width),oe=Ue,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Fe,U,oe,Q,B,k,g.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function q(w,g,B){let k=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=t.TEXTURE_3D);const j=K(w,g),re=g.source;n.bindTexture(k,w.__webglTexture,t.TEXTURE0+B);const ue=i.get(re);if(re.version!==ue.__version||j===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Q=Ze.getPrimaries(Ze.workingColorSpace),he=g.colorSpace===ba?null:Ze.getPrimaries(g.colorSpace),_e=g.colorSpace===ba||Q===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let J=m(g.image,!1,a.maxTextureSize);J=en(g,J);const fe=s.convert(g.format,g.colorSpace),Ce=s.convert(g.type);let pe=_(g.internalFormat,fe,Ce,g.normalized,g.colorSpace,g.isVideoTexture);Ee(k,g);let de;const De=g.mipmaps,Ue=g.isVideoTexture!==!0,Fe=ue.__version===void 0||j===!0,U=re.dataReady,oe=A(g,J);if(g.isDepthTexture)pe=T(g.format===rs,g.type),Fe&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,fe,Ce,null));else if(g.isDataTexture)if(De.length>0){Ue&&Fe&&n.texStorage2D(t.TEXTURE_2D,oe,pe,De[0].width,De[0].height);for(let Q=0,he=De.length;Q<he;Q++)de=De[Q],Ue?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,Ce,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,fe,Ce,de.data);g.generateMipmaps=!1}else Ue?(Fe&&n.texStorage2D(t.TEXTURE_2D,oe,pe,J.width,J.height),U&&se(g,J,fe,Ce)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,fe,Ce,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,pe,De[0].width,De[0].height,J.depth);for(let Q=0,he=De.length;Q<he;Q++)if(de=De[Q],g.format!==li)if(fe!==null)if(Ue){if(U)if(g.layerUpdates.size>0){const _e=Q0(de.width,de.height,g.format,g.type);for(const ie of g.layerUpdates){const Re=de.data.subarray(ie*_e/de.data.BYTES_PER_ELEMENT,(ie+1)*_e/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ie,de.width,de.height,1,fe,Re)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,fe,de.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,J.depth,0,de.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,J.depth,fe,Ce,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,de.width,de.height,J.depth,0,fe,Ce,de.data)}else{Ue&&Fe&&n.texStorage2D(t.TEXTURE_2D,oe,pe,De[0].width,De[0].height);for(let Q=0,he=De.length;Q<he;Q++)de=De[Q],g.format!==li?fe!==null?Ue?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,de.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,de.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de.width,de.height,fe,Ce,de.data):n.texImage2D(t.TEXTURE_2D,Q,pe,de.width,de.height,0,fe,Ce,de.data)}else if(g.isDataArrayTexture)if(Ue){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,pe,J.width,J.height,J.depth),U)if(g.layerUpdates.size>0){const Q=Q0(J.width,J.height,g.format,g.type);for(const he of g.layerUpdates){const _e=J.data.subarray(he*Q/J.data.BYTES_PER_ELEMENT,(he+1)*Q/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,fe,Ce,_e)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Ce,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,fe,Ce,J.data);else if(g.isData3DTexture)Ue?(Fe&&n.texStorage3D(t.TEXTURE_3D,oe,pe,J.width,J.height,J.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Ce,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,fe,Ce,J.data);else if(g.isFramebufferTexture){if(Fe)if(Ue)n.texStorage2D(t.TEXTURE_2D,oe,pe,J.width,J.height);else{let Q=J.width,he=J.height;for(let _e=0;_e<oe;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,Q,he,0,fe,Ce,null),Q>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),p.add(g),Q.onpaint=he=>{const _e=he.changedElements;for(const ie of p)_e.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const _e=t.RGBA,ie=t.RGBA,Re=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ie,Re,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ue&&Fe){const Q=tt(De[0]);n.texStorage2D(t.TEXTURE_2D,oe,pe,Q.width,Q.height)}for(let Q=0,he=De.length;Q<he;Q++)de=De[Q],Ue?U&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe,Ce,de):n.texImage2D(t.TEXTURE_2D,Q,pe,fe,Ce,de);g.generateMipmaps=!1}else if(Ue){if(Fe){const Q=tt(J);n.texStorage2D(t.TEXTURE_2D,oe,pe,Q.width,Q.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,Ce,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,fe,Ce,J);f(g)&&x(k),ue.__version=re.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function le(w,g,B){if(g.image.length!==6)return;const k=K(w,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+B);const re=i.get(j);if(j.version!==re.__version||k===!0){n.activeTexture(t.TEXTURE0+B);const ue=Ze.getPrimaries(Ze.workingColorSpace),Y=g.colorSpace===ba?null:Ze.getPrimaries(g.colorSpace),J=g.colorSpace===ba||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const fe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ce=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let ie=0;ie<6;ie++)!fe&&!Ce?pe[ie]=m(g.image[ie],!0,a.maxCubemapSize):pe[ie]=Ce?g.image[ie].image:g.image[ie],pe[ie]=en(g,pe[ie]);const de=pe[0],De=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type),Fe=_(g.internalFormat,De,Ue,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,oe=re.__version===void 0||k===!0,Q=j.dataReady;let he=A(g,de);Ee(t.TEXTURE_CUBE_MAP,g);let _e;if(fe){U&&oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,de.width,de.height);for(let ie=0;ie<6;ie++){_e=pe[ie].mipmaps;for(let Re=0;Re<_e.length;Re++){const Te=_e[Re];g.format!==li?De!==null?U?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Te.width,Te.height,De,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Fe,Te.width,Te.height,0,Te.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,0,0,Te.width,Te.height,De,Ue,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re,Fe,Te.width,Te.height,0,De,Ue,Te.data)}}}else{if(_e=g.mipmaps,U&&oe){_e.length>0&&he++;const ie=tt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ce){U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,pe[ie].width,pe[ie].height,De,Ue,pe[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,pe[ie].width,pe[ie].height,0,De,Ue,pe[ie].data);for(let Re=0;Re<_e.length;Re++){const Ct=_e[Re].image[ie].image;U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,Ct.width,Ct.height,De,Ue,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Fe,Ct.width,Ct.height,0,De,Ue,Ct.data)}}else{U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,De,Ue,pe[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,De,Ue,pe[ie]);for(let Re=0;Re<_e.length;Re++){const Te=_e[Re];U?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,0,0,De,Ue,Te.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Re+1,Fe,De,Ue,Te.image[ie])}}}f(g)&&x(t.TEXTURE_CUBE_MAP),re.__version=j.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function be(w,g,B,k,j,re){const ue=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),J=_(B.internalFormat,ue,Y,B.normalized,B.colorSpace),fe=i.get(g),Ce=i.get(B);if(Ce.__renderTarget=g,!fe.__hasExternalTextures){const pe=Math.max(1,g.width>>re),de=Math.max(1,g.height>>re);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,re,J,pe,de,g.depth,0,ue,Y,null):n.texImage2D(j,re,J,pe,de,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Rt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,j,Ce.__webglTexture,0,vt(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,j,Ce.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function rt(w,g,B){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,re=T(g.stencilBuffer,j),ue=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(g),re,g.width,g.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(g),re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,re,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const k=g.textures;for(let j=0;j<k.length;j++){const re=k[j],ue=s.convert(re.format,re.colorSpace),Y=s.convert(re.type),J=_(re.internalFormat,ue,Y,re.normalized,re.colorSpace);Rt(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(g),J,g.width,g.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(g),J,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,J,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(w,g,B){const k=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),k){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,g.depthTexture);const fe=s.convert(g.depthTexture.format),Ce=s.convert(g.depthTexture.type);let pe;g.depthTexture.format===aa?pe=t.DEPTH_COMPONENT24:g.depthTexture.format===rs&&(pe=t.DEPTH24_STENCIL8);for(let de=0;de<6;de++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,pe,g.width,g.height,0,fe,Ce,null)}}else X(g.depthTexture,0);const re=j.__webglTexture,ue=vt(g),Y=k?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,J=g.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===aa)Rt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,re,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,re,0);else if(g.depthTexture.format===rs)Rt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,Y,re,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,Y,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ie(w){const g=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const k=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",j)};k.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=k}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let k=0;k<6;k++)Pe(g.__webglFramebuffer[k],w,k);else{const k=w.texture.mipmaps;k&&k.length>0?Pe(g.__webglFramebuffer[0],w,0):Pe(g.__webglFramebuffer,w,0)}else if(B){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=t.createRenderbuffer(),rt(g.__webglDepthbuffer[k],w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,re)}}else{const k=w.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),rt(g.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(w,g,B){const k=i.get(w);g!==void 0&&be(k.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ie(w)}function Xe(w){const g=w.texture,B=i.get(w),k=i.get(g);w.addEventListener("dispose",v);const j=w.textures,re=w.isWebGLCubeRenderTarget===!0,ue=j.length>1;if(ue||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=g.version,r.memory.textures++),re){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=t.createFramebuffer()}else B.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<g.mipmaps.length;Y++)B.__webglFramebuffer[Y]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,J=j.length;Y<J;Y++){const fe=i.get(j[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),r.memory.textures++)}if(w.samples>0&&Rt(w)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){const J=j[Y];B.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);const fe=s.convert(J.format,J.colorSpace),Ce=s.convert(J.type),pe=_(J.internalFormat,fe,Ce,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),de=vt(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,g);for(let Y=0;Y<6;Y++)if(g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(B.__webglFramebuffer[Y][J],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else be(B.__webglFramebuffer[Y],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);f(g)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Y=0,J=j.length;Y<J;Y++){const fe=j[Y],Ce=i.get(fe);let pe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ce.__webglTexture),Ee(pe,fe),be(B.__webglFramebuffer,w,fe,t.COLOR_ATTACHMENT0+Y,pe,0),f(fe)&&x(pe)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,k.__webglTexture),Ee(Y,g),g.mipmaps&&g.mipmaps.length>0)for(let J=0;J<g.mipmaps.length;J++)be(B.__webglFramebuffer[J],w,g,t.COLOR_ATTACHMENT0,Y,J);else be(B.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,Y,0);f(g)&&x(Y),n.unbindTexture()}w.depthBuffer&&Ie(w)}function Et(w){const g=w.textures;for(let B=0,k=g.length;B<k;B++){const j=g[B];if(f(j)){const re=M(w),ue=i.get(j).__webglTexture;n.bindTexture(re,ue),x(re),n.unbindTexture()}}}const At=[],Lt=[];function Ft(w){if(w.samples>0){if(Rt(w)===!1){const g=w.textures,B=w.width,k=w.height;let j=t.COLOR_BUFFER_BIT;const re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),Y=g.length>1;if(Y)for(let fe=0;fe<g.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=w.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=i.get(g[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,B,k,0,0,B,k,j,t.NEAREST),o===!0&&(At.length=0,Lt.length=0,At.push(t.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(At.push(re),Lt.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Lt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<g.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Ce=i.get(g[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&o){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function vt(w){return Math.min(a.maxSamples,w.samples)}function Rt(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(w){const g=r.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function en(w,g){const B=w.colorSpace,k=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Gc&&B!==ba&&(Ze.getTransfer(B)===lt?(k!==li||j!==Qn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",B)),g}function tt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=Z,this.getTextureUnits=ne,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=je,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function x3(t,e){function n(i,a=ba){let s;const r=Ze.getTransfer(a);if(i===Qn)return t.UNSIGNED_BYTE;if(i===Tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Pv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Iv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lv)return t.BYTE;if(i===Ov)return t.SHORT;if(i===Pl)return t.UNSIGNED_SHORT;if(i===Ep)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===ia)return t.HALF_FLOAT;if(i===zv)return t.ALPHA;if(i===Bv)return t.RGB;if(i===li)return t.RGBA;if(i===aa)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===Fv)return t.RED;if(i===Rp)return t.RED_INTEGER;if(i===_s)return t.RG;if(i===Cp)return t.RG_INTEGER;if(i===wp)return t.RGBA_INTEGER;if(i===sc||i===rc||i===lc||i===oc)if(r===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vd||i===kd||i===Xd||i===Wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===jd||i===Yd||i===Zd||i===Kd||i===Fc||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===jd)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zd)return s.COMPRESSED_R11_EAC;if(i===Kd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===$d||i===eh||i===th||i===nh||i===ih||i===ah||i===sh||i===rh||i===lh||i===oh||i===ch||i===uh||i===fh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ah)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fh)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dh||i===hh||i===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dh)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mh||i===gh||i===Hc||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
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

}`;class S3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Qv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:_3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sa(new hu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y3 extends Ts{constructor(e,n){super();const i=this;let a=null,s=1,r=null,l="local-floor",o=1,c=null,d=null,p=null,u=null,h=null,S=null;const E=typeof XRWebGLBinding<"u",m=new S3,f={},x=n.getContextAttributes();let M=null,_=null;const T=[],A=[],C=new st;let v=null;const R=new jn;R.viewport=new Ut;const N=new jn;N.viewport=new Ut;const D=[R,N],z=new DE;let Z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=T[K];return ee===void 0&&(ee=new df,T[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=T[K];return ee===void 0&&(ee=new df,T[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=T[K];return ee===void 0&&(ee=new df,T[K]=ee),ee.getHandSpace()};function F(K){const ee=A.indexOf(K.inputSource);if(ee===-1)return;const se=T[ee];se!==void 0&&(se.update(K.inputSource,K.frame,c||r),se.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",P),a.removeEventListener("inputsourceschange",O);for(let K=0;K<T.length;K++){const ee=A[K];ee!==null&&(A[K]=null,T[K].disconnect(ee))}Z=null,ne=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(M),h=null,u=null,p=null,a=null,_=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){l=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",P),a.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,q=null,le=null;x.depth&&(le=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?rs:aa,q=x.stencil?Il:Ti);const be={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(be),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Ei(u.textureWidth,u.textureHeight,{format:li,type:Qn,depthTexture:new Cr(u.textureWidth,u.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,se),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Ei(h.framebufferWidth,h.framebufferHeight,{format:li,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(o),c=null,r=await a.requestReferenceSpace(l),Ee.setContext(a),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(K){for(let ee=0;ee<K.removed.length;ee++){const se=K.removed[ee],q=A.indexOf(se);q>=0&&(A[q]=null,T[q].disconnect(se))}for(let ee=0;ee<K.added.length;ee++){const se=K.added[ee];let q=A.indexOf(se);if(q===-1){for(let be=0;be<T.length;be++)if(be>=A.length){A.push(se),q=be;break}else if(A[be]===null){A[be]=se,q=be;break}if(q===-1)break}const le=T[q];le&&le.connect(se)}}const X=new V,$=new V;function ae(K,ee,se){X.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(se.matrixWorld);const q=X.distanceTo($),le=ee.projectionMatrix.elements,be=se.projectionMatrix.elements,rt=le[14]/(le[10]-1),Pe=le[14]/(le[10]+1),Ie=(le[9]+1)/le[5],je=(le[9]-1)/le[5],Xe=(le[8]-1)/le[0],Et=(be[8]+1)/be[0],At=rt*Xe,Lt=rt*Et,Ft=q/(-Xe+Et),vt=Ft*-Xe;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ(Ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),le[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Rt=rt+Ft,L=Pe+Ft,en=At-vt,tt=Lt+(q-vt),w=Ie*Pe/L*Rt,g=je*Pe/L*Rt;K.projectionMatrix.makePerspective(en,tt,w,g,Rt,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let ee=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(se=m.depthFar)),z.near=N.near=R.near=ee,z.far=N.far=R.far=se,(Z!==z.near||ne!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),Z=z.near,ne=z.far),z.layers.mask=K.layers.mask|6,R.layers.mask=z.layers.mask&-5,N.layers.mask=z.layers.mask&-3;const q=K.parent,le=z.cameras;ce(z,q);for(let be=0;be<le.length;be++)ce(le[be],q);le.length===2?ae(z,R,N):z.projectionMatrix.copy(R.projectionMatrix),ve(K,z,q)};function ve(K,ee,se){se===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_h*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&h===null))return o},this.setFoveation=function(K){o=K,u!==null&&(u.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(K){return f[K]};let Se=null;function et(K,ee){if(d=ee.getViewerPose(c||r),S=ee,d!==null){const se=d.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let q=!1;se.length!==z.cameras.length&&(z.cameras.length=0,q=!0);for(let Pe=0;Pe<se.length;Pe++){const Ie=se[Pe];let je=null;if(h!==null)je=h.getViewport(Ie);else{const Et=p.getViewSubImage(u,Ie);je=Et.viewport,Pe===0&&(e.setRenderTargetTextures(_,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(_))}let Xe=D[Pe];Xe===void 0&&(Xe=new jn,Xe.layers.enable(Pe),Xe.viewport=new Ut,D[Pe]=Xe),Xe.matrix.fromArray(Ie.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ie.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(z.matrix.copy(Xe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),q===!0&&z.cameras.push(Xe)}const le=a.enabledFeatures;if(le&&le.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Pe=p.getDepthInformation(se[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,a.renderState)}if(le&&le.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Pe=0;Pe<se.length;Pe++){const Ie=se[Pe].camera;if(Ie){let je=f[Ie];je||(je=new Qv,f[Ie]=je);const Xe=p.getCameraImage(Ie);je.sourceTexture=Xe}}}}for(let se=0;se<T.length;se++){const q=A[se],le=T[se];q!==null&&le!==void 0&&le.update(q,ee,c||r)}Se&&Se(K,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),S=null}const Ee=new tS;Ee.setAnimationLoop(et),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const M3=new Bt,oS=new ze;oS.set(-1,0,0,0,1,0,0,0,1);function b3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Jv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,M,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&h(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),S(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),E(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?o(m,f,x,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(M3.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(oS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function E3(t,e,n,i){let a={},s={},r=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(_,T){const A=T.program;i.uniformBlockBinding(_,A)}function c(_,T){let A=a[_.id];A===void 0&&(m(_),A=d(_),a[_.id]=A,_.addEventListener("dispose",x));const C=T.program;i.updateUBOMapping(_,C);const v=e.render.frame;s[_.id]!==v&&(u(_),s[_.id]=v)}function d(_){const T=p();_.__bindingPointIndex=T;const A=t.createBuffer(),C=_.__size,v=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function p(){for(let _=0;_<l;_++)if(r.indexOf(_)===-1)return r.push(_),_;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const T=a[_.id],A=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,R=A.length;v<R;v++){const N=A[v];if(Array.isArray(N))for(let D=0,z=N.length;D<z;D++)h(N[D],v,D,C);else h(N,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(_,T,A,C){if(E(_,T,A,C)===!0){const v=_.__offset,R=_.value;if(Array.isArray(R)){let N=0;for(let D=0;D<R.length;D++){const z=R[D],Z=f(z);S(z,_.__data,N),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(R,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,_.__data)}}function S(_,T,A){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,A)}function E(_,T,A,C){const v=_.value,R=T+"_"+A;if(C[R]===void 0)return typeof v=="number"||typeof v=="boolean"?C[R]=v:ArrayBuffer.isView(v)?C[R]=v.slice():C[R]=v.clone(),!0;{const N=C[R];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return C[R]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function m(_){const T=_.uniforms;let A=0;const C=16;for(let R=0,N=T.length;R<N;R++){const D=Array.isArray(T[R])?T[R]:[T[R]];for(let z=0,Z=D.length;z<Z;z++){const ne=D[z],F=Array.isArray(ne.value)?ne.value:[ne.value];for(let P=0,O=F.length;P<O;P++){const X=F[P],$=f(X),ae=A%C,ce=ae%$.boundary,ve=ae+ce;A+=ce,ve!==0&&C-ve<$.storage&&(A+=C-ve),ne.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=A,A+=$.storage}}}const v=A%C;return v>0&&(A+=C-v),_.__size=A,_.__cache={},this}function f(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",_),T}function x(_){const T=_.target;T.removeEventListener("dispose",x);const A=r.indexOf(T.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function M(){for(const _ in a)t.deleteBuffer(a[_]);r=[],a={},s={}}return{bind:o,update:c,dispose:M}}const T3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function A3(){return mi===null&&(mi=new xE(T3,16,16,_s,ia),mi.name="DFG_LUT",mi.minFilter=fn,mi.magFilter=fn,mi.wrapS=Wi,mi.wrapT=Wi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class R3{constructor(e={}){const{canvas:n=Yb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Qn}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=r;const E=h,m=new Set([wp,Cp,Rp]),f=new Set([Qn,Ti,Pl,Il,Tp,Ap]),x=new Uint32Array(4),M=new Int32Array(4),_=new V;let T=null,A=null;const C=[],v=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,z=null,Z=null,ne=null,F=null;this._outputColorSpace=kn;let P=0,O=0,X=null,$=-1,ae=null;const ce=new Ut,ve=new Ut;let Se=null;const et=new nt(0);let Ee=0,K=n.width,ee=n.height,se=1,q=null,le=null;const be=new Ut(0,0,K,ee),rt=new Ut(0,0,K,ee);let Pe=!1;const Ie=new Yv;let je=!1,Xe=!1;const Et=new Bt,At=new V,Lt=new Ut,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Rt(){return X===null?se:1}let L=i;function en(b,I){return n.getContext(b,I)}try{const b={alpha:!0,depth:a,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bp}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",gt,!1),n.addEventListener("webglcontextcreationerror",fi,!1),L===null){const I="webgl2";if(L=en(I,b),L===null)throw en(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw $e("WebGLRenderer: "+b.message),b}let tt,w,g,B,k,j,re,ue,Y,J,fe,Ce,pe,de,De,Ue,Fe,U,oe,Q,he,_e,ie;function Re(){tt=new AA(L),tt.init(),he=new x3(L,tt),w=new _A(L,tt,e,he),g=new m3(L,tt),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Z=L.createFramebuffer(),ne=L.createFramebuffer(),F=L.createFramebuffer(),B=new wA(L),k=new t3,j=new g3(L,tt,g,k,w,he,B),re=new TA(N),ue=new LE(L),_e=new gA(L,ue),Y=new RA(L,ue,B,_e),J=new DA(L,Y,ue,_e,B),U=new NA(L,w,j),De=new vA(k),fe=new e3(N,re,tt,w,_e,De),Ce=new b3(N,k),pe=new i3,de=new c3(tt),Fe=new mA(N,re,g,J,S,o),Ue=new p3(N,J,w),ie=new E3(L,B,w,g),oe=new xA(L,tt,B),Q=new CA(L,tt,B),B.programs=fe.programs,N.capabilities=w,N.extensions=tt,N.properties=k,N.renderLists=pe,N.shadowMap=Ue,N.state=g,N.info=B}Re(),E!==Qn&&(R=new LA(E,n.width,n.height,l,a,s));const Te=new y3(N,L);this.xr=Te,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(K,ee,!1))},this.getSize=function(b){return b.set(K,ee)},this.setSize=function(b,I,W=!0){if(Te.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,ee=I,n.width=Math.floor(b*se),n.height=Math.floor(I*se),W===!0&&(n.style.width=b+"px",n.style.height=I+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(K*se,ee*se).floor()},this.setDrawingBufferSize=function(b,I,W){K=b,ee=I,se=W,n.width=Math.floor(b*W),n.height=Math.floor(I*W),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(E===Qn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ce)},this.getViewport=function(b){return b.copy(be)},this.setViewport=function(b,I,W,H){b.isVector4?be.set(b.x,b.y,b.z,b.w):be.set(b,I,W,H),g.viewport(ce.copy(be).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(rt)},this.setScissor=function(b,I,W,H){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,I,W,H),g.scissor(ve.copy(rt).multiplyScalar(se).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(b){g.setScissorTest(Pe=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,W=!0){let H=0;if(b){let G=!1;if(X!==null){const xe=X.texture.format;G=m.has(xe)}if(G){const xe=X.texture.type,Me=f.has(xe),ge=Fe.getClearColor(),Ae=Fe.getClearAlpha(),we=ge.r,He=ge.g,ke=ge.b;Me?(x[0]=we,x[1]=He,x[2]=ke,x[3]=Ae,L.clearBufferuiv(L.COLOR,0,x)):(M[0]=we,M[1]=He,M[2]=ke,M[3]=Ae,L.clearBufferiv(L.COLOR,0,M))}else H|=L.COLOR_BUFFER_BIT}I&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",gt,!1),n.removeEventListener("webglcontextcreationerror",fi,!1),Fe.dispose(),pe.dispose(),de.dispose(),k.dispose(),re.dispose(),J.dispose(),_e.dispose(),ie.dispose(),fe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Fp),Te.removeEventListener("sessionend",Hp),qa.stop()};function Ct(b){b.preventDefault(),N0("WebGLRenderer: Context Lost."),D=!0}function gt(){N0("WebGLRenderer: Context Restored."),D=!1;const b=B.autoReset,I=Ue.enabled,W=Ue.autoUpdate,H=Ue.needsUpdate,G=Ue.type;Re(),B.autoReset=b,Ue.enabled=I,Ue.autoUpdate=W,Ue.needsUpdate=H,Ue.type=G}function fi(b){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const I=b.target;I.removeEventListener("dispose",di),cS(I)}function cS(b){uS(b),k.remove(b)}function uS(b){const I=k.get(b).programs;I!==void 0&&(I.forEach(function(W){fe.releaseProgram(W)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,W,H,G,xe){I===null&&(I=Ft);const Me=G.isMesh&&G.matrixWorld.determinantAffine()<0,ge=hS(b,I,W,H,G);g.setMaterial(H,Me);let Ae=W.index,we=1;if(H.wireframe===!0){if(Ae=Y.getWireframeAttribute(W),Ae===void 0)return;we=2}const He=W.drawRange,ke=W.attributes.position;let Ne=He.start*we,ut=(He.start+He.count)*we;xe!==null&&(Ne=Math.max(Ne,xe.start*we),ut=Math.min(ut,(xe.start+xe.count)*we)),Ae!==null?(Ne=Math.max(Ne,0),ut=Math.min(ut,Ae.count)):ke!=null&&(Ne=Math.max(Ne,0),ut=Math.min(ut,ke.count));const Ot=ut-Ne;if(Ot<0||Ot===1/0)return;_e.setup(G,H,ge,W,Ae);let wt,ht=oe;if(Ae!==null&&(wt=ue.get(Ae),ht=Q,ht.setIndex(wt)),G.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*Rt()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(G.isLine){let on=H.linewidth;on===void 0&&(on=1),g.setLineWidth(on*Rt()),G.isLineSegments?ht.setMode(L.LINES):G.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else G.isPoints?ht.setMode(L.POINTS):G.isSprite&&ht.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const on=G._multiDrawStarts,ye=G._multiDrawCounts,Rn=G._multiDrawCount,Je=Ae?ue.get(Ae).bytesPerElement:1,Hn=k.get(H).currentProgram.getUniforms();for(let hi=0;hi<Rn;hi++)Hn.setValue(L,"_gl_DrawID",hi),ht.render(on[hi]/Je,ye[hi])}else if(G.isInstancedMesh)ht.renderInstances(Ne,Ot,G.count);else if(W.isInstancedBufferGeometry){const on=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,on);ht.renderInstances(Ne,Ot,ye)}else ht.render(Ne,Ot)};function Bp(b,I,W){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,eo(b,I,W),b.side=ka,b.needsUpdate=!0,eo(b,I,W),b.side=Gi):eo(b,I,W)}this.compile=function(b,I,W=null){W===null&&(W=b),A=de.get(W),A.init(I),v.push(A),W.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),b!==W&&b.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const H=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const xe=G.material;if(xe)if(Array.isArray(xe))for(let Me=0;Me<xe.length;Me++){const ge=xe[Me];Bp(ge,W,G),H.add(ge)}else Bp(xe,W,G),H.add(xe)}),A=v.pop(),H},this.compileAsync=function(b,I,W=null){const H=this.compile(b,I,W);return new Promise(G=>{function xe(){if(H.forEach(function(Me){k.get(Me).currentProgram.isReady()&&H.delete(Me)}),H.size===0){G(b);return}setTimeout(xe,10)}tt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let gu=null;function fS(b){gu&&gu(b)}function Fp(){qa.stop()}function Hp(){qa.start()}const qa=new tS;qa.setAnimationLoop(fS),typeof self<"u"&&qa.setContext(self),this.setAnimationLoop=function(b){gu=b,Te.setAnimationLoop(b),b===null?qa.stop():qa.start()},Te.addEventListener("sessionstart",Fp),Te.addEventListener("sessionend",Hp),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(b,I);const W=Te.enabled===!0&&Te.isPresenting===!0,H=R!==null&&(X===null||W)&&R.begin(N,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(I),I=Te.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,I,X),A=de.get(b,v.length),A.init(I),A.state.textureUnits=j.getTextureUnits(),v.push(A),Et.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(Et,yi,I.reversedDepth),Xe=this.localClippingEnabled,je=De.init(this.clippingPlanes,Xe),T=pe.get(b,C.length),T.init(),C.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Me=N.xr.getDepthSensingMesh();Me!==null&&xu(Me,I,-1/0,N.sortObjects)}xu(b,I,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(q,le,I.reversedDepth),vt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,vt&&Fe.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&De.beginShadows();const G=A.state.shadowsArray;if(Ue.render(G,b,I),je===!0&&De.endShadows(),(H&&R.hasRenderPass())===!1){const Me=T.opaque,ge=T.transmissive;if(A.setupLights(),I.isArrayCamera){const Ae=I.cameras;if(ge.length>0)for(let we=0,He=Ae.length;we<He;we++){const ke=Ae[we];Vp(Me,ge,b,ke)}vt&&Fe.render(b);for(let we=0,He=Ae.length;we<He;we++){const ke=Ae[we];Gp(T,b,ke,ke.viewport)}}else ge.length>0&&Vp(Me,ge,b,I),vt&&Fe.render(b),Gp(T,b,I)}X!==null&&O===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),H&&R.end(N),b.isScene===!0&&b.onAfterRender(N,b,I),_e.resetDefaultState(),$=-1,ae=null,v.pop(),v.length>0?(A=v[v.length-1],j.setTextureUnits(A.state.textureUnits),je===!0&&De.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,z!==null&&z.renderEnd()};function xu(b,I,W,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){H&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const Me=J.update(b),ge=b.material;ge.visible&&T.push(b,Me,ge,W,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){const Me=J.update(b),ge=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Lt.copy(Me.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(ge)){const Ae=Me.groups;for(let we=0,He=Ae.length;we<He;we++){const ke=Ae[we],Ne=ge[ke.materialIndex];Ne&&Ne.visible&&T.push(b,Me,Ne,W,Lt.z,ke)}}else ge.visible&&T.push(b,Me,ge,W,Lt.z,null)}}const xe=b.children;for(let Me=0,ge=xe.length;Me<ge;Me++)xu(xe[Me],I,W,H)}function Gp(b,I,W,H){const{opaque:G,transmissive:xe,transparent:Me}=b;A.setupLightsView(W),je===!0&&De.setGlobalState(N.clippingPlanes,W),H&&g.viewport(ce.copy(H)),G.length>0&&$l(G,I,W),xe.length>0&&$l(xe,I,W),Me.length>0&&$l(Me,I,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Vp(b,I,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Ne=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:Ne?ia:Qn,minFilter:ss,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const xe=A.state.transmissionRenderTarget[H.id],Me=H.viewport||ce;xe.setSize(Me.z*N.transmissionResolutionScale,Me.w*N.transmissionResolutionScale);const ge=N.getRenderTarget(),Ae=N.getActiveCubeFace(),we=N.getActiveMipmapLevel();N.setRenderTarget(xe),N.getClearColor(et),Ee=N.getClearAlpha(),Ee<1&&N.setClearColor(16777215,.5),N.clear(),vt&&Fe.render(W);const He=N.toneMapping;N.toneMapping=bi;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),je===!0&&De.setGlobalState(N.clippingPlanes,H),$l(b,W,H),j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let ut=0,Ot=I.length;ut<Ot;ut++){const wt=I[ut],{object:ht,geometry:on,material:ye,group:Rn}=wt;if(ye.side===Gi&&ht.layers.test(H.layers)){const Je=ye.side;ye.side=bn,ye.needsUpdate=!0,kp(ht,W,H,on,ye,Rn),ye.side=Je,ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(j.updateMultisampleRenderTarget(xe),j.updateRenderTargetMipmap(xe))}N.setRenderTarget(ge,Ae,we),N.setClearColor(et,Ee),ke!==void 0&&(H.viewport=ke),N.toneMapping=He}function $l(b,I,W){const H=I.isScene===!0?I.overrideMaterial:null;for(let G=0,xe=b.length;G<xe;G++){const Me=b[G],{object:ge,geometry:Ae,group:we}=Me;let He=Me.material;He.allowOverride===!0&&H!==null&&(He=H),ge.layers.test(W.layers)&&kp(ge,I,W,Ae,He,we)}}function kp(b,I,W,H,G,xe){b.onBeforeRender(N,I,W,H,G,xe),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,I,W,H,b,xe),G.transparent===!0&&G.side===Gi&&G.forceSinglePass===!1?(G.side=bn,G.needsUpdate=!0,N.renderBufferDirect(W,I,H,G,b,xe),G.side=ka,G.needsUpdate=!0,N.renderBufferDirect(W,I,H,G,b,xe),G.side=Gi):N.renderBufferDirect(W,I,H,G,b,xe),b.onAfterRender(N,I,W,H,G,xe)}function eo(b,I,W){I.isScene!==!0&&(I=Ft);const H=k.get(b),G=A.state.lights,xe=A.state.shadowsArray,Me=G.state.version,ge=fe.getParameters(b,G.state,xe,I,W,A.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(ge);let we=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=re.get(b.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",di),we=new Map,H.programs=we);let ke=we.get(Ae);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Me)return Wp(b,ge),ke}else ge.uniforms=fe.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,W,ge),b.onBeforeCompile(ge,N),ke=fe.acquireProgram(ge,Ae),we.set(Ae,ke),H.uniforms=ge.uniforms;const Ne=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=De.uniform),Wp(b,ge),H.needsLights=mS(b),H.lightsStateVersion=Me,H.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function Xp(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=cc.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Wp(b,I){const W=k.get(b);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function dS(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;_.setFromMatrixPosition(I.matrixWorld);for(let W=0,H=b.length;W<H;W++){const G=b[W];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function hS(b,I,W,H,G){I.isScene!==!0&&(I=Ft),j.resetTextureUnits();const xe=I.fog,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,ge=X===null?N.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ze.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=re.get(H.envMap||Me,Ae),He=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Ot=!!W.morphAttributes.color;let wt=bi;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(wt=N.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,on=ht!==void 0?ht.length:0,ye=k.get(H),Rn=A.state.lights;if(je===!0&&(Xe===!0||b!==ae)){const xt=b===ae&&H.id===$;De.setState(H,b,xt)}let Je=!1;H.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Rn.state.version||ye.outputColorSpace!==ge||G.isBatchedMesh&&ye.batching===!1||!G.isBatchedMesh&&ye.batching===!0||G.isBatchedMesh&&ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ye.instancing===!1||!G.isInstancedMesh&&ye.instancing===!0||G.isSkinnedMesh&&ye.skinning===!1||!G.isSkinnedMesh&&ye.skinning===!0||G.isInstancedMesh&&ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ye.instancingMorph===!1&&G.morphTexture!==null||ye.envMap!==we||H.fog===!0&&ye.fog!==xe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==De.numPlanes||ye.numIntersection!==De.numIntersection)||ye.vertexAlphas!==He||ye.vertexTangents!==ke||ye.morphTargets!==Ne||ye.morphNormals!==ut||ye.morphColors!==Ot||ye.toneMapping!==wt||ye.morphTargetsCount!==on||!!ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,ye.__version=H.version);let Hn=ye.currentProgram;Je===!0&&(Hn=eo(H,I,G),z&&H.isNodeMaterial&&z.onUpdateProgram(H,Hn,ye));let hi=!1,la=!1,As=!1;const pt=Hn.getUniforms(),Pt=ye.uniforms;if(g.useProgram(Hn.program)&&(hi=!0,la=!0,As=!0),H.id!==$&&($=H.id,la=!0),ye.needsLights){const xt=dS(A.state.lightProbeGridArray,G);ye.lightProbeGrid!==xt&&(ye.lightProbeGrid=xt,la=!0)}if(hi||ae!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",b.projectionMatrix),pt.setValue(L,"viewMatrix",b.matrixWorldInverse);const ca=pt.map.cameraPosition;ca!==void 0&&ca.setValue(L,At.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),ae!==b&&(ae=b,la=!0,As=!0)}if(ye.needsLights&&(Rn.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",Rn.state.directionalShadowMap,j),Rn.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",Rn.state.spotShadowMap,j),Rn.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",Rn.state.pointShadowMap,j)),G.isSkinnedMesh){pt.setOptional(L,G,"bindMatrix"),pt.setOptional(L,G,"bindMatrixInverse");const xt=G.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),pt.setValue(L,"boneTexture",xt.boneTexture,j))}G.isBatchedMesh&&(pt.setOptional(L,G,"batchingTexture"),pt.setValue(L,"batchingTexture",G._matricesTexture,j),pt.setOptional(L,G,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",G._indirectTexture,j),pt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",G._colorsTexture,j));const oa=W.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&U.update(G,W,Hn),(la||ye.receiveShadow!==G.receiveShadow)&&(ye.receiveShadow=G.receiveShadow,pt.setValue(L,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(Pt.envMapIntensity.value=I.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=A3()),la){if(pt.setValue(L,"toneMappingExposure",N.toneMappingExposure),ye.needsLights&&pS(Pt,As),xe&&H.fog===!0&&Ce.refreshFogUniforms(Pt,xe),Ce.refreshMaterialUniforms(Pt,H,se,ee,A.state.transmissionRenderTarget[b.id]),ye.needsLights&&ye.lightProbeGrid){const xt=ye.lightProbeGrid;Pt.probesSH.value=xt.texture,Pt.probesMin.value.copy(xt.boundingBox.min),Pt.probesMax.value.copy(xt.boundingBox.max),Pt.probesResolution.value.copy(xt.resolution)}cc.upload(L,Xp(ye),Pt,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cc.upload(L,Xp(ye),Pt,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pt.setValue(L,"center",G.center),pt.setValue(L,"modelViewMatrix",G.modelViewMatrix),pt.setValue(L,"normalMatrix",G.normalMatrix),pt.setValue(L,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const xt=H.uniformsGroups;for(let ca=0,Rs=xt.length;ca<Rs;ca++){const qp=xt[ca];ie.update(qp,Hn),ie.bind(qp,Hn)}}return Hn}function pS(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function mS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,I,W){const H=k.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),k.get(b.texture).__webglTexture=I,k.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const W=k.get(b);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,W=0){X=b,P=I,O=W;let H=null,G=!1,xe=!1;if(b){const ge=k.get(b);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,ge.__webglFramebuffer),ce.copy(b.viewport),ve.copy(b.scissor),Se=b.scissorTest,g.viewport(ce),g.scissor(ve),g.setScissorTest(Se),$=-1;return}else if(ge.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(ge.__hasExternalTextures)j.rebindTextures(b,k.get(b.texture).__webglTexture,k.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ge.__boundDepthTexture!==He){if(He!==null&&k.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(xe=!0);const we=k.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[I])?H=we[I][W]:H=we[I],G=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?H=k.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[W]:H=we,ce.copy(b.viewport),ve.copy(b.scissor),Se=b.scissorTest}else ce.copy(be).multiplyScalar(se).floor(),ve.copy(rt).multiplyScalar(se).floor(),Se=Pe;if(W!==0&&(H=Z),g.bindFramebuffer(L.FRAMEBUFFER,H)&&g.drawBuffers(b,H),g.viewport(ce),g.scissor(ve),g.setScissorTest(Se),G){const ge=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,W)}else if(xe){const ge=I;for(let Ae=0;Ae<b.textures.length;Ae++){const we=k.get(b.textures[Ae]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ae,we.__webglTexture,W,ge)}}else if(b!==null&&W!==0){const ge=k.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ge.__webglTexture,W)}$=-1},this.readRenderTargetPixels=function(b,I,W,H,G,xe,Me,ge=0){if(!(b&&b.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){g.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const we=b.textures[ge],He=we.format,ke=we.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(He)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ke)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&W>=0&&W<=b.height-G&&L.readPixels(I,W,H,G,he.convert(He),he.convert(ke),xe)}finally{const we=X!==null?k.get(X).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,I,W,H,G,xe,Me,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=k.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(I>=0&&I<=b.width-H&&W>=0&&W<=b.height-G){g.bindFramebuffer(L.FRAMEBUFFER,Ae);const we=b.textures[ge],He=we.format,ke=we.type;if(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,xe.byteLength,L.STREAM_READ),L.readPixels(I,W,H,G,he.convert(He),he.convert(ke),0);const ut=X!==null?k.get(X).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,ut);const Ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zb(L,Ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,xe),L.deleteBuffer(Ne),L.deleteSync(Ot),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,W=0){const H=Math.pow(2,-W),G=Math.floor(b.image.width*H),xe=Math.floor(b.image.height*H),Me=I!==null?I.x:0,ge=I!==null?I.y:0;j.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Me,ge,G,xe),g.unbindTexture()},this.copyTextureToTexture=function(b,I,W=null,H=null,G=0,xe=0){let Me,ge,Ae,we,He,ke,Ne,ut,Ot;const wt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(W!==null)Me=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ae=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,He=W.min.y,ke=W.isBox3?W.min.z:0;else{const Pt=Math.pow(2,-G);Me=Math.floor(wt.width*Pt),ge=Math.floor(wt.height*Pt),b.isDataArrayTexture?Ae=wt.depth:b.isData3DTexture?Ae=Math.floor(wt.depth*Pt):Ae=1,we=0,He=0,ke=0}H!==null?(Ne=H.x,ut=H.y,Ot=H.z):(Ne=0,ut=0,Ot=0);const ht=he.convert(I.format),on=he.convert(I.type);let ye;I.isData3DTexture?(j.setTexture3D(I,0),ye=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),ye=L.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),ye=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Rn=g.getParameter(L.UNPACK_ROW_LENGTH),Je=g.getParameter(L.UNPACK_IMAGE_HEIGHT),Hn=g.getParameter(L.UNPACK_SKIP_PIXELS),hi=g.getParameter(L.UNPACK_SKIP_ROWS),la=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,we),g.pixelStorei(L.UNPACK_SKIP_ROWS,He),g.pixelStorei(L.UNPACK_SKIP_IMAGES,ke);const As=b.isDataArrayTexture||b.isData3DTexture,pt=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const Pt=k.get(b),oa=k.get(I),xt=k.get(Pt.__renderTarget),ca=k.get(oa.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,xt.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Rs=0;Rs<Ae;Rs++)As&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(b).__webglTexture,G,ke+Rs),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,k.get(I).__webglTexture,xe,Ot+Rs)),L.blitFramebuffer(we,He,Me,ge,Ne,ut,Me,ge,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||k.has(b)){const Pt=k.get(b),oa=k.get(I);g.bindFramebuffer(L.READ_FRAMEBUFFER,ne),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let xt=0;xt<Ae;xt++)As?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,G,ke+xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,G),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,oa.__webglTexture,xe,Ot+xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,oa.__webglTexture,xe),G!==0?L.blitFramebuffer(we,He,Me,ge,Ne,ut,Me,ge,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(ye,xe,Ne,ut,Ot+xt,we,He,Me,ge):L.copyTexSubImage2D(ye,xe,Ne,ut,we,He,Me,ge);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ye,xe,Ne,ut,Ot,Me,ge,Ae,ht,on,wt.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(ye,xe,Ne,ut,Ot,Me,ge,Ae,ht,wt.data):L.texSubImage3D(ye,xe,Ne,ut,Ot,Me,ge,Ae,ht,on,wt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,xe,Ne,ut,Me,ge,ht,on,wt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,xe,Ne,ut,wt.width,wt.height,ht,wt.data):L.texSubImage2D(L.TEXTURE_2D,xe,Ne,ut,Me,ge,ht,on,wt);g.pixelStorei(L.UNPACK_ROW_LENGTH,Rn),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Je),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Hn),g.pixelStorei(L.UNPACK_SKIP_ROWS,hi),g.pixelStorei(L.UNPACK_SKIP_IMAGES,la),xe===0&&I.generateMipmaps&&L.generateMipmap(ye),g.unbindTexture()},this.initRenderTarget=function(b){k.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){P=0,O=0,X=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function C3(){const[t,e]=Gt.useState("home"),[n,i]=Gt.useState(!1),[a,s]=Gt.useState(!0),[r,l]=Gt.useState(null),[o,c]=Gt.useState("All"),[d,p]=Gt.useState("light"),[u,h]=Gt.useState({name:"",email:"",message:""}),[S,E]=Gt.useState(!1),[m,f]=Gt.useState(null),[x,M]=Gt.useState("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!"),[_,T]=Gt.useState(!1),[A,C]=Gt.useState(!1),v=Gt.useRef(null),R=Gt.useRef(null),N=q=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const le=new SpeechSynthesisUtterance(q);le.rate=1.05,le.pitch=1.3;const be=()=>{const rt=window.speechSynthesis.getVoices(),Pe=rt.find(Ie=>(Ie.name.includes("Female")||Ie.name.includes("Zira")||Ie.name.includes("Google UK English Female")||Ie.name.includes("Samantha")||Ie.name.includes("Victoria")||Ie.name.includes("Karen")||Ie.name.includes("Moira"))&&Ie.lang.startsWith("en"))||rt.find(Ie=>Ie.lang.startsWith("en"));Pe&&(le.voice=Pe),le.onstart=()=>{T(!0),C(!1)},le.onend=()=>{T(!1),C(!1)},le.onerror=()=>{T(!1),C(!1)},R.current=le,window.speechSynthesis.speak(le)};window.speechSynthesis.getVoices().length>0?be():window.speechSynthesis.onvoiceschanged=be}},D=()=>{"speechSynthesis"in window&&(_&&!A?(window.speechSynthesis.pause(),C(!0),T(!1)):A?(window.speechSynthesis.resume(),C(!1),T(!0)):N(x))},z=q=>{M(q),C(!1),N(q)};Gt.useEffect(()=>{const q=setTimeout(()=>{s(!1),N("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!")},1200);return()=>clearTimeout(q)},[]),Gt.useEffect(()=>{if(!v.current)return;const q=new fE,le=new jn(75,window.innerWidth/window.innerHeight,.1,1e3),be=new R3({canvas:v.current,alpha:!0,antialias:!0});be.setSize(window.innerWidth,window.innerHeight),be.setPixelRatio(Math.min(window.devicePixelRatio,2));const rt=900,Pe=new Float32Array(rt*3);for(let g=0;g<rt*3;g++)Pe[g]=(Math.random()-.5)*16;const Ie=new ui;Ie.setAttribute("position",new oi(Pe,3));const je=new Zv({size:.04,color:d==="dark"?15485081:14362487,transparent:!0,opacity:d==="dark"?.85:.75}),Xe=new yE(Ie,je);q.add(Xe),le.position.z=5;let Et=0,At=0,Lt=0,Ft=0;const vt=(g,B)=>{Lt=(g/window.innerWidth-.5)*1.5,Ft=(B/window.innerHeight-.5)*1.5},Rt=g=>{vt(g.clientX,g.clientY)},L=g=>{g.touches.length>0&&vt(g.touches[0].clientX,g.touches[0].clientY)};window.addEventListener("mousemove",Rt),window.addEventListener("touchmove",L,{passive:!0});const en=()=>{le.aspect=window.innerWidth/window.innerHeight,le.updateProjectionMatrix(),be.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",en);let tt;const w=()=>{tt=requestAnimationFrame(w),Xe.rotation.y+=8e-4,Xe.rotation.x+=4e-4,Et+=(Lt-Et)*.12,At+=(Ft-At)*.12,le.position.x=Et*1.8,le.position.y=-At*1.8,le.lookAt(q.position),be.render(q,le)};return w(),()=>{window.removeEventListener("mousemove",Rt),window.removeEventListener("touchmove",L),window.removeEventListener("resize",en),cancelAnimationFrame(tt),Ie.dispose(),je.dispose(),be.dispose()}},[d]);const Z=/^[A-Za-z\s]+$/,ne=/^[a-z0-9]+@gmail\.com$/,F=()=>u.name?Z.test(u.name)?null:"Please enter a valid name containing only letters (a-z, A-Z).":null,P=()=>u.email?ne.test(u.email)?null:"Please enter a valid email (lowercase letters and numbers only before @gmail.com).":null,O=()=>u.message&&u.message.trim().length<10?"Please enter a message (at least 10 characters).":null,X=async q=>{if(q.preventDefault(),!u.name.trim()||!u.email.trim()||!u.message.trim()){f({type:"error",text:"Please enter all the fields before submitting."});return}if(!Z.test(u.name)){f({type:"error",text:"Please enter a valid name containing only letters (a-z, A-Z)."});return}if(!ne.test(u.email)){f({type:"error",text:"Please enter a valid email (lowercase letters and numbers only before @gmail.com)."});return}if(u.message.trim().length<10){f({type:"error",text:"Please enter a message (at least 10 characters)."});return}E(!0),f(null);try{await fetch("https://formsubmit.co/ajax/dandetejaswini1329@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:u.name,email:u.email,message:u.message,_subject:`New Portfolio Contact Message from ${u.name}`,_captcha:"false"})})}catch(le){console.error("Email delivery attempt completed:",le)}finally{E(!1),f({type:"success",text:"Message Sent Successfully!"}),setTimeout(()=>{h({name:"",email:"",message:""}),f(null)},2e3)}};Gt.useEffect(()=>{const q=()=>{const le=["home","about","skills","experience","projects","achievements","certifications","education","contact"],be=window.scrollY+200;for(const rt of le){const Pe=document.getElementById(rt);if(Pe){const Ie=Pe.offsetTop,je=Pe.offsetHeight;if(be>=Ie&&be<Ie+je){e(rt);break}}}};return window.addEventListener("scroll",q),()=>window.removeEventListener("scroll",q)},[]);const $=[{id:"cxintel",title:"CXIntel",category:"AI / Salesforce / Automation",featured:!0,github:"https://github.com/dandetejaswini/CXIntel",live:"https://cxintel-dev-ed.develop.my.site.com/s/",desc:"AI-driven CRM focused on customer feedback analysis and workflow automation.",tech:["Apex","Lightning Web Components","JavaScript","Python","REST APIs","GitHub Actions"],metrics:["Analyzed 500+ customer feedback records","Improved insight accuracy by 35%","Automated ticket tagging via REST APIs","Reduced manual review time by 40%"],details:"Built an enterprise-grade CRM extension on Salesforce leveraging LWC and Python backend sentiment pipelines to automatically classify and prioritize inbound tickets."},{id:"gitnexus",title:"GitNexus",category:"AI / Developer Tools",featured:!0,github:"https://github.com/dandetejaswini/GitNexus",desc:"An Intelligent Multi-Agent System for Automated GitHub Analysis.",tech:["JavaScript","AI Agents","GitHub REST API","Automation"],metrics:["Automated repository code analysis","Multi-agent workflow orchestration","Intelligent commit summarization"],details:"Engineered an intelligent multi-agent JavaScript system designed to scan repositories, summarize architectural changes, and assist developers with deep repository intelligence."},{id:"netguardian",title:"NetGuardian",category:"AI / Security",featured:!0,badge:"Qualified: OpenAI Academy & NextWave Buildathon (State Level)",github:"https://github.com/dandetejaswini/Net-Gaurdian",desc:"Chrome extension for safer browsing that detects and blurs inappropriate content using lightweight AI. Qualified for OpenAI Academy & NextWave Buildathon.",tech:["TypeScript","Chrome Extension","Flask","NLP","Privacy-First"],metrics:["Real-time content detection and sanitization","Real-time DOM inspection and blurring","Local privacy-focused inference","Qualified for OpenAI Academy & NextWave Buildathon (State Level)"],details:"Client-side extension paired with a lightweight Flask backend to identify and sanitize sensitive web elements instantly. Qualified for the OpenAI Academy and NextWave Buildathon."},{id:"edubond",title:"EduBond Mobile",category:"AI / Education / Mobile",featured:!0,github:"https://github.com/dandetejaswini/Edubond_mobile",desc:"React Native mobile application connecting students, mentors, and alumni through AI matching.",tech:["React Native","TypeScript","Node.js","AI Matching","Real-time Chat"],metrics:["Real-time WebSocket communication","AI-driven peer and mentor matching","Cross-platform mobile architecture"],details:"Developed a comprehensive cross-platform app ensuring seamless mentorship scheduling, AI-powered profile matching, and instant messaging."},{id:"spendiq",title:"SpendIQ",category:"FinTech / Web App",featured:!0,github:"",live:"https://spendiqpro.vercel.app/en",desc:"Client-side web application designed to reduce overspending and checkout queues via barcode scanning.",tech:["JavaScript","ZXing","WebRTC","Vercel","WCAG 2.1"],metrics:["95% barcode scan accuracy","99% uptime deployment","Full WCAG 2.1 accessibility compliance"],details:"Fast, accessible client-side budgetary tool utilizing real-time device camera barcode capture to instantly categorize and track daily retail expenditures."},{id:"nlp-pipeline",title:"Advanced NLP Pipeline with Transformers",category:"AI / NLP / Backend",featured:!0,github:"https://github.com/dandetejaswini/Advanced-NLP-Pipeline-with-Transformers",desc:"Robust FastAPI and Transformers pipeline for summarization, translation, and entity recognition.",tech:["Python","FastAPI","Transformers","Docker","Inference Caching"],metrics:["50% API response latency reduction","Optimized transformer weights caching","Modular REST inference endpoints"],details:"Production-grade NLP inference engine supporting concurrent summarization, translation, and Named Entity Recognition with optimized Docker deployment."},{id:"reposense",title:"RepoSense",category:"AI / Developer Tools / Automation",featured:!0,github:"https://github.com/dandetejaswini/reposense",desc:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights.",tech:["Python","Gemini API","GitHub API","FastAPI","PyDriller","Docker"],metrics:["Multi-agent GitHub analysis","Repository risk and code hotspot detection","Automated engineering intelligence"],details:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights."},{id:"fraud-risk",title:"Fraud Risk Scoring",category:"Machine Learning",featured:!1,github:"https://github.com/dandetejaswini/Fraud_Risk_Scoring",desc:"Machine learning fraud detection system utilizing neural networks and SMOTE data balancing.",tech:["Python","TensorFlow","Scikit-Learn","SMOTE"],metrics:["Neural network-based fraud classification","Model training and validation for high-risk transactions","Handled severe dataset class imbalance using SMOTE"],details:"Trained and validated robust neural network classification models to flag high-risk transaction anomalies."},{id:"weather-app",title:"Weather App using api Integration",category:"Salesforce / API",featured:!1,github:"https://github.com/dandetejaswini/Weather-App-Using-API-Integration",desc:"Real-time weather application built within Salesforce using Lightning Web Components.",tech:["Salesforce LWC","SLDS","REST API","JavaScript"],metrics:["Real-time weather data retrieval through external API","Lightning Web Components-based weather interface","Dynamic weather metrics rendering inside Salesforce UI"],details:"Integrated external meteorology APIs directly into Salesforce Lightning Experience using LWC and SLDS."},{id:"ai-email",title:"AI Email Generator",category:"AI / Backend",featured:!1,github:"https://github.com/dandetejaswini/Email-Generator-Using-Langchain-Flask",desc:"Context-aware professional email generator powered by LangChain and Flask.",tech:["Python","Flask","LangChain","Prompt Engineering"],metrics:["Modular Flask REST endpoints","Context-aware professional email drafting","Structured multi-parameter email orchestration"],details:"Streamlined corporate correspondence drafting through structured prompt templates and modular Flask REST endpoints."}],ae=[{title:"Information Technology Specialist in HTML and CSS",issuer:"Certiport (2023)",link:"https://www.credly.com/badges/8c0767fe-2d87-46cd-a9f7-159da49186aa"},{title:"Information Technology Specialist in Python",issuer:"Certiport (2023)",link:"https://drive.google.com/file/d/1Dw43WenvhYx-nPC11P6t0xiEjrsFN123/view?usp=sharing"},{title:"Salesforce Platform Developer I",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1Wn7lNAck8JIJrMXh8YRIvphJWs31D0Yu/view?usp=sharing"},{title:"Salesforce AgentForce Specialist",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1BgGL9qyufgqqAo9wG37pRYiYUYQ9PW8W/view?usp=sharing"},{title:"Information Technology Specialist in Java",issuer:"Certiport (2024)",link:"https://www.credly.com/badges/6064c502-5e2f-472b-a57f-2c49568a6fcc"},{title:"Red Hat Certified System Administrator (RHCSA)",issuer:"Red Hat (2024 — Expired Aug 2025)",link:"https://www.credly.com/badges/56c15cb2-cd42-43df-a140-10d5273c792f"},{title:"Pega Certified System Architect (CSA)",issuer:"Pega (2025)",link:"https://accounts.pega.com/profile/DandeTejaswini/share/BPEGACPSA24V1-PEGACPSA24V1"}],ce=[{year:"2024",title:"Second Prize — Paper Presentation",org:"Two-Day National Level Technical & Cultural Symposium, CIET, Guntur",desc:"Secured 2nd prize for rigorous technical presentation."},{year:"2024",title:"Top 10 — CODE WARS 1.0",org:"ACM JNTU-GV (ITYUKTA-2K24)",desc:"Achieved a top 10 ranking in competitive programming challenge."},{year:"2024",title:"Qualified — OpenAI & NextWave Buildathon (State Level)",org:"OpenAI / NextWave (State Level Buildathon)",desc:"Successfully qualified in competitive state-level AI buildathon event."},{year:"2024",title:"Advanced to Round 3 — HP PowerLab 2.0",org:"Hindustan Petroleum Corporation Limited",desc:"Reached Round 3 in national innovation challenge."},{year:"Open Source",title:"Google Summer of Code — Open Source Contribution",org:"Open Source Ecosystem",desc:"Contributed to open-source agent and tool ecosystems including LangChain, LlamaIndex, and CrewAI."}],ve=o==="All"?$:$.filter(q=>q.category.toLowerCase().includes(o.toLowerCase())),Se=d==="dark",et=Se?"bg-slate-950 text-slate-100":"bg-slate-50 text-slate-900",Ee=Se?"bg-slate-900/35 backdrop-blur-md border border-slate-800/60 hover:border-pink-500/50 hover:bg-slate-900/50 shadow-lg":"bg-white/40 backdrop-blur-md border border-white/60 hover:border-pink-400 hover:bg-white/60 shadow-sm",K=Se?"bg-slate-950/60 backdrop-blur-md border-b border-slate-800/60":"bg-white/50 backdrop-blur-md border-b border-slate-200/60",ee=Se?"text-slate-400":"text-slate-600",se=Se?"bg-slate-900/50 border-slate-700/80 text-white placeholder-slate-500":"bg-white/50 border-slate-200 text-slate-800 placeholder-slate-400";return y.jsxs("div",{className:`min-h-screen ${et} font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`,children:[a&&y.jsxs("div",{className:`fixed inset-0 z-50 ${Se?"bg-slate-950":"bg-slate-50"} flex flex-col items-center justify-center transition-opacity duration-700`,children:[y.jsx("div",{className:"w-12 h-12 border-3 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"}),y.jsx("h2",{className:"text-xl font-bold tracking-wide",children:"DANDE TEJASWINI"}),y.jsx("p",{className:`text-sm ${ee} mt-1`,children:"Loading portfolio..."})]}),y.jsx("canvas",{ref:v,className:"fixed inset-0 pointer-events-none z-0 w-full h-full",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0}}),y.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 ${K} shadow-sm transition-all`,children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-18 flex items-center justify-between",children:[y.jsxs("a",{href:"#home",className:"text-lg font-bold tracking-tight flex items-center space-x-2 hover:opacity-85 transition-opacity",children:[y.jsx("span",{className:"w-3 h-3 rounded-full bg-pink-600 inline-block shadow-sm"}),y.jsx("span",{children:"DANDE TEJASWINI"})]}),y.jsx("nav",{className:`hidden lg:flex items-center space-x-6 text-sm font-medium ${ee}`,children:["Home","About","Skills","Experience","Projects","Achievements","Certifications","Education","Contact"].map(q=>{const le=q.toLowerCase();return y.jsx("a",{href:`#${le}`,className:`transition-colors hover:text-pink-500 py-1 ${t===le?"text-pink-500 font-semibold border-b-2 border-pink-500":""}`,children:q},q)})}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsxs("a",{href:"https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),y.jsx("span",{children:"Resume"})]}),y.jsx("button",{onClick:()=>p(d==="dark"?"light":"dark"),className:`p-2.5 rounded-xl ${Se?"bg-slate-800 text-amber-400 hover:bg-slate-700":"bg-slate-200 text-slate-700 hover:bg-slate-300"} transition-colors`,title:"Toggle Theme",children:Se?y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),y.jsx("button",{onClick:()=>i(!n),className:"lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),n&&y.jsx("div",{className:`lg:hidden ${Se?"bg-slate-900/95":"bg-white/95"} backdrop-blur-lg border-b border-slate-300 px-6 py-4 space-y-3 text-sm`,children:["Home","About","Skills","Experience","Projects","Achievements","Certifications","Education","Contact"].map(q=>{const le=q.toLowerCase();return y.jsx("a",{href:`#${le}`,onClick:()=>i(!1),className:"block text-slate-700 dark:text-slate-300 hover:text-pink-500 py-1 font-medium",children:q},q)})})]}),y.jsx("section",{id:"home",className:"relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center",children:[y.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2",children:y.jsxs("div",{className:`${Ee} p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-sm`,children:[y.jsx("div",{className:"absolute -top-3 bg-pink-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow",children:"Tejaswini's AI Assistant"}),y.jsxs("div",{className:`w-[260px] min-h-[350px] ${Se?"bg-slate-900/60 border-slate-800":"bg-slate-100/80 border-pink-100"} rounded-2xl overflow-hidden flex flex-col items-center justify-between p-5 border relative shadow-inner gap-3`,children:[y.jsxs("div",{className:"w-full flex items-center justify-between px-1",children:[y.jsxs("div",{className:"flex items-center space-x-1.5",children:[y.jsx("span",{className:`w-2 h-2 rounded-full ${_?"bg-emerald-400 animate-ping":"bg-pink-500"}`}),y.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-pink-500",children:_?"Speaking...":A?"Paused":"AI Assistant Active"})]}),_&&y.jsxs("div",{className:"flex items-end space-x-0.5 h-3",children:[y.jsx("span",{className:"w-0.5 h-full bg-pink-500 animate-bounce"}),y.jsx("span",{className:"w-0.5 h-2/3 bg-pink-400 animate-bounce",style:{animationDelay:"0.15s"}}),y.jsx("span",{className:"w-0.5 h-full bg-pink-500 animate-bounce",style:{animationDelay:"0.3s"}})]})]}),y.jsxs("div",{onClick:D,title:A?"Tap to Resume Speech":_?"Tap to Pause Speech":"Tap to Hear Assistant",className:`relative w-36 h-36 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-pink-600 via-purple-600 to-indigo-600 shadow-xl ${_?"border-pink-500 ring-4 ring-pink-500/30 scale-105":"border-pink-300/80 hover:border-pink-500"} transition-all duration-300 group/avatar shrink-0`,children:[y.jsx("img",{src:"avatar.jpg",alt:"Tejaswini AI Assistant",className:"w-full h-full object-cover rounded-full transition-transform duration-500 group-hover/avatar:scale-110",onError:q=>{q.currentTarget.style.display="none",q.currentTarget.nextElementSibling&&(q.currentTarget.nextElementSibling.style.display="block")}}),y.jsx("div",{className:"hidden w-full h-full relative",children:y.jsxs("svg",{className:"w-full h-full p-1",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#avatarGlow)"}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"avatarGlow",x1:"0",y1:"0",x2:"100",y2:"100",children:[y.jsx("stop",{offset:"0%",stopColor:"#ec4899"}),y.jsx("stop",{offset:"50%",stopColor:"#8b5cf6"}),y.jsx("stop",{offset:"100%",stopColor:"#3b82f6"})]})}),y.jsx("path",{d:"M22 45 C 20 20, 80 20, 78 45 C 82 65, 75 80, 72 88 C 65 78, 70 50, 70 45 C 70 25, 30 25, 30 45 C 30 50, 35 78, 28 88 C 25 80, 18 65, 22 45 Z",fill:"#1e1b4b"}),y.jsx("ellipse",{cx:"50",cy:"52",rx:"18",ry:"22",fill:"#fbcfe8"}),y.jsx("ellipse",{cx:"43",cy:"48",rx:"2.5",ry:"3.5",fill:"#1e1b4b"}),y.jsx("ellipse",{cx:"57",cy:"48",rx:"2.5",ry:"3.5",fill:"#1e1b4b"}),y.jsx("circle",{cx:"44",cy:"47",r:"1",fill:"#ffffff"}),y.jsx("circle",{cx:"58",cy:"47",r:"1",fill:"#ffffff"}),y.jsx("path",{d:"M39 42 Q 43 40 47 43",stroke:"#831843",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),y.jsx("path",{d:"M53 43 Q 57 40 61 42",stroke:"#831843",strokeWidth:"1.5",strokeLinecap:"round",fill:"none"}),_?y.jsx("ellipse",{cx:"50",cy:"62",rx:"4",ry:"3",fill:"#9d174d",className:"animate-pulse"}):y.jsx("path",{d:"M44 60 Q 50 65 56 60",stroke:"#9d174d",strokeWidth:"2",strokeLinecap:"round",fill:"none"}),y.jsx("path",{d:"M28 50 C 28 30, 72 30, 72 50",stroke:"#f472b6",strokeWidth:"3.5",strokeLinecap:"round",fill:"none"}),y.jsx("rect",{x:"25",y:"46",width:"6",height:"12",rx:"3",fill:"#ec4899"}),y.jsx("rect",{x:"69",y:"46",width:"6",height:"12",rx:"3",fill:"#ec4899"}),y.jsx("path",{d:"M30 56 Q 36 66 45 65",stroke:"#f472b6",strokeWidth:"2",strokeLinecap:"round",fill:"none"}),y.jsx("circle",{cx:"45",cy:"65",r:"2.5",fill:"#38bdf8"})]})}),_&&y.jsx("div",{className:"absolute inset-0 bg-pink-900/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none",children:y.jsxs("div",{className:"flex space-x-1.5 items-end h-8",children:[y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-4 rounded-full shadow-sm"}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-8 rounded-full shadow-sm",style:{animationDelay:"0.1s"}}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-5 rounded-full shadow-sm",style:{animationDelay:"0.2s"}}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-7 rounded-full shadow-sm",style:{animationDelay:"0.3s"}})]})}),A&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest border border-pink-500/40",children:"Paused"})]}),y.jsx("p",{className:"text-[10px] font-bold text-pink-500 uppercase tracking-widest text-center",children:A?"Tap avatar to Resume":_?"Tap avatar to Pause":"Tap avatar to Speak"}),y.jsx("div",{className:"w-full flex justify-center py-1",children:y.jsxs("a",{href:"#contact",onClick:()=>z("Tejaswini is actively seeking Full-Time software engineering roles, AI developer positions, and internship opportunities! Please reach out via the contact form."),className:"max-w-[190px] w-full flex items-center justify-center space-x-1.5 bg-gradient-to-r from-pink-600 via-rose-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] border border-pink-400/40 text-center whitespace-nowrap",children:[y.jsx("span",{className:"animate-pulse text-xs",children:"✨"}),y.jsx("span",{children:"Hire Tejaswini"})]})}),y.jsxs("p",{className:`text-xs font-medium ${Se?"text-slate-200":"text-slate-700"} px-2 text-center italic leading-relaxed`,children:["“",x,"”"]})]}),y.jsxs("div",{className:"w-full mt-4 space-y-2",children:[y.jsx("p",{className:`text-[11px] font-semibold ${ee} uppercase tracking-wider text-center`,children:"Ask me anything:"}),y.jsxs("div",{className:"flex flex-wrap gap-1.5 justify-center",children:[y.jsx("button",{onClick:()=>z("Tejaswini is a Computer Science engineering student at Aditya University with an 8.64 CGPA, specializing in AI, full-stack, and enterprise solutions."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"About"}),y.jsx("button",{onClick:()=>z("Tejaswini has interned at Areteans Technology Solutions as a Technology Specialist in PEGA, and at Technical Hub as a Salesforce Software Engineering Intern."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Experience"}),y.jsx("button",{onClick:()=>z("Tejaswini has strong skills in Java, Python, JavaScript, Apex, FastAPI, Flask, React, SQL, and Salesforce Lightning Web Components."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Skills"}),y.jsx("button",{onClick:()=>z("Tejaswini has built major systems including CXIntel AI CRM, GitNexus multi-agent system, EduBond mobile app, and SpendIQ FinTech tool."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Projects"}),y.jsx("button",{onClick:()=>z("Tejaswini secured 2nd prize in national paper presentation, ranked in Top 10 at Code Wars 1.0, and qualified in OpenAI hackathons."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Achievements"}),y.jsx("button",{onClick:()=>z("Tejaswini holds Salesforce Platform Developer I, AgentForce Specialist, Pega CSA, Red Hat RHCSA, and Certiport Python and Java certifications."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Certifications"}),y.jsx("button",{onClick:()=>z("Tejaswini is pursuing B.Tech in CSE at Aditya University (2022-2026) with 8.64 CGPA, after scoring 96.7% in Intermediate and 96.66% in 10th standard."),className:`text-[11px] ${Se?"bg-pink-950/40 text-pink-300 border-pink-800/50 hover:bg-pink-900/50":"bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Education"})]})]})]})}),y.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start justify-center order-2 lg:order-1 space-y-6",children:[y.jsxs("div",{className:`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${Se?"bg-pink-950/50 border-pink-800/60 text-pink-300":"bg-pink-50 border-pink-200 text-pink-700"} border text-xs font-semibold tracking-wide uppercase`,children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-500 animate-pulse"}),y.jsx("span",{children:"Software Development Candidate"})]}),y.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight",children:["DANDE ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500",children:"TEJASWINI"})]}),y.jsx("p",{className:`text-base sm:text-lg ${ee} max-w-xl font-normal leading-relaxed`,children:"“Software Development candidate with hands-on experience building AI-enabled platforms using Python, Java, and REST APIs, alongside enterprise Salesforce solutions. Strong fundamentals in software engineering and system architecture.”"}),y.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[y.jsxs("a",{href:"#projects",className:"inline-flex items-center space-x-2 bg-pink-600 hover:bg-pink-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition-all hover:scale-[1.02]",children:[y.jsx("span",{children:"Explore My Work"}),y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),y.jsxs("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${Ee} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 text-blue-500 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),y.jsx("span",{children:"LinkedIn"})]}),y.jsxs("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${Ee} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"GitHub"})]}),y.jsx("a",{href:"#contact",className:"inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md transition-all",children:y.jsx("span",{children:"Contact Me"})})]})]})]})}),y.jsx("section",{id:"about",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Professional Profile"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"About Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-4`,children:[y.jsx("h4",{className:"text-xl font-semibold",children:"Background & Passion"}),y.jsx("p",{className:`${ee} leading-relaxed text-sm sm:text-base`,children:"I am a dedicated software development student and engineer with a robust foundation in algorithmic problem solving, object-oriented programming, and cloud-backed system integration. My expertise spans Python, Java, JavaScript, and enterprise Salesforce ecosystems."}),y.jsx("p",{className:`${ee} leading-relaxed text-sm sm:text-base`,children:"Whether architecting intelligent multi-agent systems, optimizing FastAPI inference pipelines, or building responsive web and mobile applications, I focus on scalability, maintainability, and user experience."})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:`${Ee} p-6 rounded-3xl text-center space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-pink-500",children:"10+"}),y.jsx("h5",{className:"text-sm font-semibold",children:"Production Projects"}),y.jsx("p",{className:`text-xs ${ee}`,children:"AI, Full-Stack & Salesforce"})]}),y.jsxs("div",{className:`${Ee} p-6 rounded-3xl text-center space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-indigo-500",children:"7+"}),y.jsx("h5",{className:"text-sm font-semibold",children:"Certifications"}),y.jsx("p",{className:`text-xs ${ee}`,children:"Salesforce, Python, Java"})]}),y.jsxs("div",{className:`${Ee} p-6 rounded-3xl text-center space-y-2 col-span-2`,children:[y.jsx("span",{className:"text-2xl font-black text-violet-500",children:"B.Tech CSE (2022–2026)"}),y.jsx("h5",{className:"text-sm font-semibold",children:"Aditya University"}),y.jsx("p",{className:`text-xs ${ee}`,children:"CGPA: 8.64 / 10"})]})]})]})]})}),y.jsx("section",{id:"skills",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Technical Proficiency"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Skills & Expertise"})]}),y.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[y.jsxs("div",{className:`${Ee} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Programming Languages"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["Python","Java","JavaScript","TypeScript","SQL","Apex"].map(q=>y.jsx("span",{className:`text-xs font-medium px-3 py-1 rounded-lg ${Se?"bg-slate-800/60 text-slate-200":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]}),y.jsxs("div",{className:`${Ee} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Frameworks & Backend"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["FastAPI","Flask","Node.js","React","React Native","LWC","REST APIs"].map(q=>y.jsx("span",{className:`text-xs font-medium px-3 py-1 rounded-lg ${Se?"bg-slate-800/60 text-slate-200":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]}),y.jsxs("div",{className:`${Ee} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-violet-500/20 text-violet-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"AI & ML Tools"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["LangChain","Transformers","TensorFlow","Scikit-Learn","CrewAI","LlamaIndex"].map(q=>y.jsx("span",{className:`text-xs font-medium px-3 py-1 rounded-lg ${Se?"bg-slate-800/60 text-slate-200":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]}),y.jsxs("div",{className:`${Ee} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Cloud & Tools"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["Salesforce CRM","Git & GitHub","Docker","Linux / RHCSA","Pega CSA","Vercel"].map(q=>y.jsx("span",{className:`text-xs font-medium px-3 py-1 rounded-lg ${Se?"bg-slate-800/60 text-slate-200":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]})]})]})}),y.jsx("section",{id:"experience",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Career & Internships"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Experience"})]}),y.jsxs("div",{className:"relative border-l-2 border-pink-500/40 pl-6 space-y-12 ml-4",children:[y.jsxs("div",{className:"relative group",children:[y.jsx("span",{className:"absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900 shadow"}),y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h4",{className:"text-xl font-bold",children:"Technology Specialist"}),y.jsx("span",{className:"text-xs font-semibold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30",children:"Jan 2025 – Jun 2025"})]}),y.jsx("h5",{className:`text-sm font-semibold ${ee}`,children:"Areteans Technology Solutions Pvt. Ltd. | Hyderabad"}),y.jsxs("ul",{className:`${ee} text-sm sm:text-base leading-relaxed space-y-2 pt-1`,children:[y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Implemented PEGA-based workflow automation, improving process efficiency by 25%."})]}),y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Optimized backend logic and PEGA case flows in collaboration with engineering teams."})]}),y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Contributed to enterprise application development and workflow automation, supporting process-oriented software delivery."})]})]}),y.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:["PEGA","Workflow Automation","Enterprise Applications","Backend Logic"].map(q=>y.jsx("span",{className:`text-xs px-2.5 py-1 rounded-md ${Se?"bg-slate-800/60 text-slate-300":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("span",{className:"absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 shadow"}),y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h4",{className:"text-xl font-bold",children:"Software Engineering Intern (Salesforce Platform)"}),y.jsx("span",{className:"text-xs font-semibold bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30",children:"Jun 2024 – Jul 2024"})]}),y.jsx("h5",{className:`text-sm font-semibold ${ee}`,children:"Technical Hub Pvt. Ltd. | Surampalem"}),y.jsxs("ul",{className:`${ee} text-sm sm:text-base leading-relaxed space-y-2 pt-1`,children:[y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Integrated third-party REST APIs into Salesforce using Lightning Web Components (LWC)."})]}),y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Developed backend logic in Apex and Python for sentiment-analysis workflows."})]}),y.jsxs("li",{className:"flex items-start",children:[y.jsx("span",{className:"mr-2",children:"•"}),y.jsx("span",{children:"Worked across Salesforce application development, API integration, and backend workflow implementation."})]})]}),y.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:["Salesforce","Apex","LWC","Python","REST APIs"].map(q=>y.jsx("span",{className:`text-xs px-2.5 py-1 rounded-md ${Se?"bg-slate-800/60 text-slate-300":"bg-slate-200/60 text-slate-800"}`,children:q},q))})]})]})]})]})}),y.jsx("section",{id:"projects",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-7xl mx-auto space-y-12",children:[y.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[y.jsxs("div",{className:"space-y-3 text-center md:text-left",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Portfolio"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Projects"})]}),y.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:["All","AI","Salesforce","FinTech","Developer Tools"].map(q=>y.jsx("button",{onClick:()=>c(q),className:`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${o===q?"bg-pink-600 text-white shadow-md":`${Ee} text-xs`}`,children:q},q))})]}),y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:ve.map(q=>y.jsxs("div",{onClick:()=>l(q),className:`${Ee} rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer group`,children:[y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30",children:q.category}),y.jsxs("div",{className:"flex items-center space-x-2.5",onClick:le=>le.stopPropagation(),children:[q.github&&y.jsx("a",{href:q.github,target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-pink-500 transition-colors",title:"View GitHub Repository",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),q.live&&y.jsx("a",{href:q.live,target:"_blank",rel:"noopener noreferrer",className:"text-slate-400 hover:text-pink-500 transition-colors",title:"View Live Demo",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]})]}),q.badge&&y.jsxs("div",{className:"inline-flex items-center space-x-1.5 text-[11px] font-semibold bg-amber-500/15 text-amber-500 border border-amber-500/30 px-2.5 py-1 rounded-lg w-full",children:[y.jsx("span",{className:"text-xs",children:"🏆"}),y.jsx("span",{children:q.badge})]}),y.jsx("h4",{className:"text-xl font-bold group-hover:text-pink-500 transition-colors",children:q.title}),y.jsx("p",{className:`${ee} text-sm leading-relaxed`,children:q.desc})]}),y.jsxs("div",{className:"space-y-4 pt-6",children:[y.jsx("div",{className:"flex flex-wrap gap-1.5",children:q.tech.map(le=>y.jsx("span",{className:`text-[11px] px-2.5 py-1 rounded-md font-medium ${Se?"bg-slate-800/60 text-slate-300":"bg-slate-200/60 text-slate-800"}`,children:le},le))}),y.jsx("button",{className:`w-full ${Se?"bg-slate-800/50 hover:bg-pink-600":"bg-slate-200/50 hover:bg-pink-600"} hover:text-white text-xs font-semibold py-2.5 rounded-xl transition-all border border-slate-500/20`,children:"View Project Details"})]})]},q.id))})]})}),r&&y.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4",children:y.jsxs("div",{className:`${Se?"bg-slate-900/90 text-white border-slate-700":"bg-white/90 text-slate-900 border-slate-200"} rounded-3xl max-w-2xl w-full p-8 shadow-2xl border space-y-6 relative max-h-[90vh] overflow-y-auto`,children:[y.jsx("button",{onClick:()=>l(null),className:`absolute top-6 right-6 w-8 h-8 rounded-full ${Se?"bg-slate-800 text-slate-300 hover:bg-slate-700":"bg-slate-100 text-slate-700 hover:bg-slate-200"} flex items-center justify-center font-bold`,children:"✕"}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-pink-500",children:r.category}),y.jsx("h3",{className:"text-2xl font-bold",children:r.title}),y.jsx("p",{className:`${ee} text-sm sm:text-base leading-relaxed`,children:r.details})]}),y.jsxs("div",{className:`space-y-3 ${Se?"bg-slate-800/40 border-slate-700/60":"bg-slate-100/60 border-slate-200"} p-5 rounded-2xl border`,children:[y.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-pink-500",children:"Key Highlights & Metrics"}),y.jsx("ul",{className:"space-y-2",children:r.metrics.map((q,le)=>y.jsxs("li",{className:"flex items-center space-x-2 text-sm",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-pink-500"}),y.jsx("span",{children:q})]},le))})]}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-pink-500",children:"Tech Stack"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:r.tech.map(q=>y.jsx("span",{className:`text-xs ${Se?"bg-slate-800 text-slate-200":"bg-slate-200 text-slate-800"} px-3 py-1 rounded-lg font-medium`,children:q},q))})]}),y.jsxs("div",{className:"flex flex-wrap gap-3 pt-4 border-t border-slate-500/20",children:[r.github&&y.jsx("a",{href:r.github,target:"_blank",rel:"noopener noreferrer",className:"bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2",children:y.jsx("span",{children:"GitHub Repository"})}),r.live&&y.jsx("a",{href:r.live,target:"_blank",rel:"noopener noreferrer",className:"bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2",children:y.jsx("span",{children:"Live Demo"})})]})]})}),y.jsx("section",{id:"achievements",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Recognitions"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Achievements & Hackathons"})]}),y.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:ce.map((q,le)=>y.jsxs("div",{className:`${Ee} p-6 rounded-3xl space-y-3 transition-all`,children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-xs font-bold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30",children:q.year}),y.jsx("span",{className:`text-xs font-semibold ${ee}`,children:q.org})]}),y.jsx("h4",{className:"text-lg font-bold",children:q.title}),y.jsx("p",{className:`${ee} text-sm`,children:q.desc})]},le))})]})}),y.jsx("section",{id:"certifications",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Credentials"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Certifications"})]}),y.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ae.map((q,le)=>y.jsxs("a",{href:q.link,target:"_blank",rel:"noopener noreferrer",className:`${Ee} p-6 rounded-3xl transition-all flex flex-col justify-between space-y-4 group`,children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"text-[11px] font-semibold text-pink-500 uppercase tracking-wider",children:q.issuer}),y.jsx("h4",{className:"text-base font-bold group-hover:text-pink-500 transition-colors",children:q.title})]}),y.jsxs("div",{className:"flex items-center text-xs font-semibold space-x-1 group-hover:translate-x-1 transition-transform",children:[y.jsx("span",{children:"Verify Credential"}),y.jsx("span",{children:"→"})]})]},le))})]})}),y.jsx("section",{id:"education",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Academic Background"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Education"})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h4",{className:"text-xl font-bold",children:"B.Tech — Computer Science and Engineering (CSE)"}),y.jsx("span",{className:"text-xs font-semibold bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full border border-pink-500/30",children:"2022 – 2026"})]}),y.jsx("h5",{className:`text-sm font-semibold ${ee}`,children:"Aditya University (Formerly Aditya Engineering College)"}),y.jsx("p",{className:`text-xs ${ee}`,children:"Location: Surampalem, Andhra Pradesh"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-sm font-bold ${Se?"bg-slate-800/80 text-slate-200":"bg-slate-200/80 text-slate-800"} px-3 py-1.5 rounded-lg inline-block`,children:"CGPA: 8.64 / 10"})})]}),y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h4",{className:"text-xl font-bold",children:"Intermediate — MPC (Mathematics, Physics and Chemistry)"}),y.jsx("span",{className:"text-xs font-semibold bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/30",children:"Passed: 2022"})]}),y.jsx("h5",{className:`text-sm font-semibold ${ee}`,children:"Sri Saraswathi Junior College"}),y.jsx("p",{className:`text-xs ${ee}`,children:"Location: Ongole, Andhra Pradesh"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-sm font-bold ${Se?"bg-slate-800/80 text-slate-200":"bg-slate-200/80 text-slate-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.7%"})})]}),y.jsxs("div",{className:`${Ee} p-8 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h4",{className:"text-xl font-bold",children:"10th Standard"}),y.jsx("span",{className:"text-xs font-semibold bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full border border-violet-500/30",children:"Passed: 2020"})]}),y.jsx("h5",{className:`text-sm font-semibold ${ee}`,children:"Sri Chaitanya EM High School"}),y.jsx("p",{className:`text-xs ${ee}`,children:"Location: Singarayakonda, Andhra Pradesh"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-sm font-bold ${Se?"bg-slate-800/80 text-slate-200":"bg-slate-200/80 text-slate-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.66%"})})]})]})]})}),y.jsx("section",{id:"contact",className:"py-24 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-3",children:[y.jsx("h2",{className:"text-xs font-bold text-pink-500 uppercase tracking-widest",children:"Get In Touch"}),y.jsx("h3",{className:"text-3xl font-bold tracking-tight",children:"Contact Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsx("h4",{className:"text-2xl font-bold",children:"Let's Build Something Together"}),y.jsx("p",{className:`${ee} leading-relaxed text-sm sm:text-base`,children:"I am actively seeking Full-Time software engineering opportunities, AI developer roles, and internships. Feel free to reach out via the form or connect through my professional profiles below!"}),y.jsxs("div",{className:"space-y-4 pt-2",children:[y.jsxs("div",{className:`flex items-center space-x-4 ${Ee} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-pink-500/20 text-pink-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${ee} uppercase`,children:"Email"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-semibold hover:text-pink-500",children:"dandetejaswini1329@gmail.com"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${Ee} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-500/20 text-blue-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${ee} uppercase`,children:"LinkedIn"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-semibold hover:text-pink-500",children:"tejaswini-dande"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${Ee} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${ee} uppercase`,children:"GitHub"}),y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-semibold hover:text-pink-500",children:"dandetejaswini"})]})]})]})]}),y.jsx("div",{className:`${Ee} p-8 rounded-3xl`,children:y.jsxs("form",{onSubmit:X,className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${ee} mb-2`,children:"Your Name"}),y.jsx("input",{type:"text",value:u.name,onChange:q=>{h({...u,name:q.target.value}),m&&f(null)},placeholder:"Enter your name",className:`w-full ${se} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${ee} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-pink-500 font-bold",children:"•"})," Required: Valid name containing only letters (a-z, A-Z) and spaces."]}),F()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",F()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${ee} mb-2`,children:"Your Email"}),y.jsx("input",{type:"email",value:u.email,onChange:q=>{h({...u,email:q.target.value}),m&&f(null)},placeholder:"example@gmail.com",className:`w-full ${se} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${ee} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-pink-500 font-bold",children:"•"})," Required: Lowercase letters & numbers only before @gmail.com."]}),P()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",P()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${ee} mb-2`,children:"Your Message"}),y.jsx("textarea",{rows:"4",value:u.message,onChange:q=>{h({...u,message:q.target.value}),m&&f(null)},placeholder:"Write your message here...",className:`w-full ${se} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none`}),y.jsxs("p",{className:`text-[11px] ${ee} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-pink-500 font-bold",children:"•"})," Required: Minimum 10 characters."]}),O()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",O()]})]}),m&&m.type==="error"&&y.jsx("div",{className:"p-3 rounded-xl text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30",children:m.text}),y.jsx("button",{type:"submit",disabled:S||m&&m.type==="success",className:`w-full font-semibold py-3.5 rounded-xl shadow transition-all text-sm cursor-pointer disabled:opacity-90 ${m&&m.type==="success"?"bg-emerald-600 text-white":"bg-pink-600 hover:bg-pink-500 text-white"}`,children:S?"Sending Message...":m&&m.type==="success"?"Message Sent Successfully!":"Send Message"})]})})]})]})}),y.jsx("footer",{className:`py-8 ${K} text-center text-xs relative z-10`,children:y.jsxs("div",{className:"max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4",children:[y.jsxs("p",{className:ee,children:["© ",new Date().getFullYear()," Dande Tejaswini. All rights reserved."]}),y.jsxs("div",{className:"flex space-x-6",children:[y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:`${ee} hover:text-pink-500 transition-colors`,children:"GitHub"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:`${ee} hover:text-pink-500 transition-colors`,children:"LinkedIn"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:`${ee} hover:text-pink-500 transition-colors`,children:"Email"})]})]})})]})}pb.createRoot(document.getElementById("root")).render(y.jsx(OS.StrictMode,{children:y.jsx(C3,{})}));
