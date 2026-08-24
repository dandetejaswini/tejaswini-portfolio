(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function yg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mg={exports:{}},jc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gS=Symbol.for("react.transitional.element"),xS=Symbol.for("react.fragment");function bg(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:gS,type:t,key:i,ref:e!==void 0?e:null,props:n}}jc.Fragment=xS;jc.jsx=bg;jc.jsxs=bg;Mg.exports=jc;var y=Mg.exports,Eg={exports:{}},ze={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh=Symbol.for("react.transitional.element"),vS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),SS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),MS=Symbol.for("react.consumer"),bS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),TS=Symbol.for("react.suspense"),AS=Symbol.for("react.memo"),Tg=Symbol.for("react.lazy"),RS=Symbol.for("react.activity"),Yp=Symbol.iterator;function CS(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var Ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rg=Object.assign,Cg={};function Nr(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Ag}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Nr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=Nr.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=Cg,this.updater=n||Ag}var Th=Eh.prototype=new wg;Th.constructor=Eh;Rg(Th,Nr.prototype);Th.isPureReactComponent=!0;var Zp=Array.isArray;function Pf(){}var Tt={H:null,A:null,T:null,S:null},Ng=Object.prototype.hasOwnProperty;function Ah(t,e,n){var i=n.ref;return{$$typeof:bh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function wS(t,e){return Ah(t.type,e,t.props)}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===bh}function NS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kp=/\/+/g;function vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?NS(""+t.key):e.toString(36)}function DS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Pf,Pf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Xs(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case bh:case vS:r=!0;break;case Tg:return r=t._init,Xs(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+vu(t,0):i,Zp(a)?(n="",r!=null&&(n=r.replace(Kp,"$&/")+"/"),Xs(a,e,n,"",function(c){return c})):a!=null&&(Rh(a)&&(a=wS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Kp,"$&/")+"/")+r)),e.push(a)),1;r=0;var l=i===""?".":i+":";if(Zp(t))for(var o=0;o<t.length;o++)i=t[o],s=l+vu(i,o),r+=Xs(i,e,n,s,a);else if(o=CS(t),typeof o=="function")for(t=o.call(t),o=0;!(i=t.next()).done;)i=i.value,s=l+vu(i,o++),r+=Xs(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return Xs(DS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function to(t,e,n){if(t==null)return t;var i=[],a=0;return Xs(t,i,"","",function(s){return e.call(n,s,a++)}),i}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},LS={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Activity=RS;ze.Children=LS;ze.Component=Nr;ze.Fragment=_S;ze.Profiler=yS;ze.PureComponent=Eh;ze.StrictMode=SS;ze.Suspense=TS;ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;ze.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Tt.H.useMemoCache(t)}};ze.cache=function(t){return function(){return t.apply(null,arguments)}};ze.cacheSignal=function(){return null};ze.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Rg({},t.props),a=t.key;if(e!=null)for(s in e.key!==void 0&&(a=""+e.key),e)!Ng.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var r=Array(s),l=0;l<s;l++)r[l]=arguments[l+2];i.children=r}return Ah(t.type,a,i)};ze.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:MS,_context:t},t};ze.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Ng.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),o=0;o<r;o++)l[o]=arguments[o+2];a.children=l}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return Ah(t,s,a)};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:ES,render:t}};ze.isValidElement=Rh;ze.lazy=function(t){return{$$typeof:Tg,_payload:{_status:-1,_result:t},_init:US}};ze.memo=function(t,e){return{$$typeof:AS,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=Tt.T,n={};Tt.T=n;try{var i=t(),a=Tt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Pf,Qp)}catch(s){Qp(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Tt.T=e}};ze.unstable_useCacheRefresh=function(){return Tt.H.useCacheRefresh()};ze.use=function(t){return Tt.H.use(t)};ze.useActionState=function(t,e,n){return Tt.H.useActionState(t,e,n)};ze.useCallback=function(t,e){return Tt.H.useCallback(t,e)};ze.useContext=function(t){return Tt.H.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t,e){return Tt.H.useDeferredValue(t,e)};ze.useEffect=function(t,e){return Tt.H.useEffect(t,e)};ze.useEffectEvent=function(t){return Tt.H.useEffectEvent(t)};ze.useId=function(){return Tt.H.useId()};ze.useImperativeHandle=function(t,e,n){return Tt.H.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Tt.H.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Tt.H.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Tt.H.useMemo(t,e)};ze.useOptimistic=function(t,e){return Tt.H.useOptimistic(t,e)};ze.useReducer=function(t,e,n){return Tt.H.useReducer(t,e,n)};ze.useRef=function(t){return Tt.H.useRef(t)};ze.useState=function(t){return Tt.H.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Tt.H.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Tt.H.useTransition()};ze.version="19.2.8";Eg.exports=ze;var Lt=Eg.exports;const OS=yg(Lt);var Dg={exports:{}},qc={},Ug={exports:{}},Lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,P){var X=U.length;U.push(P);e:for(;0<X;){var $=X-1>>>1,ie=U[$];if(0<a(ie,P))U[$]=P,U[X]=ie,X=$;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var P=U[0],X=U.pop();if(X!==P){U[0]=X;e:for(var $=0,ie=U.length,fe=ie>>>1;$<fe;){var Se=2*($+1)-1,Xe=U[Se],$e=Se+1,Ve=U[$e];if(0>a(Xe,X))$e<ie&&0>a(Ve,Xe)?(U[$]=Ve,U[$e]=X,$=$e):(U[$]=Xe,U[Se]=X,$=Se);else if($e<ie&&0>a(Ve,X))U[$]=Ve,U[$e]=X,$=$e;else break e}}return P}function a(U,P){var X=U.sortIndex-P.sortIndex;return X!==0?X:U.id-P.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,l=r.now();t.unstable_now=function(){return r.now()-l}}var o=[],c=[],d=1,p=null,u=3,h=!1,_=!1,E=!1,m=!1,f=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function S(U){for(var P=n(c);P!==null;){if(P.callback===null)i(c);else if(P.startTime<=U)i(c),P.sortIndex=P.expirationTime,e(o,P);else break;P=n(c)}}function T(U){if(E=!1,S(U),!_)if(n(o)!==null)_=!0,R||(R=!0,B());else{var P=n(c);P!==null&&F(T,P.startTime-U)}}var R=!1,C=-1,v=5,A=-1;function N(){return m?!0:!(t.unstable_now()-A<v)}function D(){if(m=!1,R){var U=t.unstable_now();A=U;var P=!0;try{e:{_=!1,E&&(E=!1,x(C),C=-1),h=!0;var X=u;try{t:{for(S(U),p=n(o);p!==null&&!(p.expirationTime>U&&N());){var $=p.callback;if(typeof $=="function"){p.callback=null,u=p.priorityLevel;var ie=$(p.expirationTime<=U);if(U=t.unstable_now(),typeof ie=="function"){p.callback=ie,S(U),P=!0;break t}p===n(o)&&i(o),S(U)}else i(o);p=n(o)}if(p!==null)P=!0;else{var fe=n(c);fe!==null&&F(T,fe.startTime-U),P=!1}}break e}finally{p=null,u=X,h=!1}P=void 0}}finally{P?B():R=!1}}}var B;if(typeof M=="function")B=function(){M(D)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,te=Y.port2;Y.port1.onmessage=D,B=function(){te.postMessage(null)}}else B=function(){f(D,0)};function F(U,P){C=f(function(){U(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_next=function(U){switch(u){case 1:case 2:case 3:var P=3;break;default:P=u}var X=u;u=P;try{return U()}finally{u=X}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(U,P){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=u;u=U;try{return P()}finally{u=X}},t.unstable_scheduleCallback=function(U,P,X){var $=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?$+X:$):X=$,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=X+ie,U={id:d++,callback:P,priorityLevel:U,startTime:X,expirationTime:ie,sortIndex:-1},X>$?(U.sortIndex=X,e(c,U),n(o)===null&&U===n(c)&&(E?(x(C),C=-1):E=!0,F(T,X-$))):(U.sortIndex=ie,e(o,U),_||h||(_=!0,R||(R=!0,B()))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var P=u;return function(){var X=u;u=P;try{return U.apply(this,arguments)}finally{u=X}}}})(Lg);Ug.exports=Lg;var PS=Ug.exports,Og={exports:{}},gn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IS=Lt;function Pg(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ua(){}var mn={d:{f:ua,r:function(){throw Error(Pg(522))},D:ua,C:ua,L:ua,m:ua,X:ua,S:ua,M:ua},p:0,findDOMNode:null},zS=Symbol.for("react.portal");function BS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var ll=IS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Pg(299));return BS(t,e,null,n)};gn.flushSync=function(t){var e=ll.T,n=mn.p;try{if(ll.T=null,mn.p=2,t)return t()}finally{ll.T=e,mn.p=n,mn.d.f()}};gn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,mn.d.C(t,e))};gn.prefetchDNS=function(t){typeof t=="string"&&mn.d.D(t)};gn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?mn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&mn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};gn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Yc(e.as,e.crossOrigin);mn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&mn.d.M(t)};gn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin);mn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};gn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Yc(e.as,e.crossOrigin);mn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else mn.d.m(t)};gn.requestFormReset=function(t){mn.d.r(t)};gn.unstable_batchedUpdates=function(t,e){return t(e)};gn.useFormState=function(t,e,n){return ll.H.useFormState(t,e,n)};gn.useFormStatus=function(){return ll.H.useHostTransitionStatus()};gn.version="19.2.8";function Ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig)}catch(t){console.error(t)}}Ig(),Og.exports=gn;var FS=Og.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qt=PS,zg=Lt,HS=FS;function ee(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hg(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jp(t){if(zl(t)!==t)throw Error(ee(188))}function GS(t){var e=t.alternate;if(!e){if(e=zl(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Jp(a),t;if(s===i)return Jp(a),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,l=a.child;l;){if(l===n){r=!0,n=a,i=s;break}if(l===i){r=!0,i=a,n=s;break}l=l.sibling}if(!r){for(l=s.child;l;){if(l===n){r=!0,n=s,i=a;break}if(l===i){r=!0,i=s,n=a;break}l=l.sibling}if(!r)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Gg(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Gg(t),e!==null)return e;t=t.sibling}return null}var At=Object.assign,VS=Symbol.for("react.element"),no=Symbol.for("react.transitional.element"),el=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),Vg=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),kg=Symbol.for("react.consumer"),Vi=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),xa=Symbol.for("react.lazy"),Ff=Symbol.for("react.activity"),kS=Symbol.for("react.memo_cache_sentinel"),$p=Symbol.iterator;function Hr(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var XS=Symbol.for("react.client.reference");function Hf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===XS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case If:return"Profiler";case Vg:return"StrictMode";case zf:return"Suspense";case Bf:return"SuspenseList";case Ff:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case el:return"Portal";case Vi:return t.displayName||"Context";case kg:return(t._context.displayName||"Context")+".Consumer";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case xa:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}var tl=Array.isArray,Le=zg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot=HS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ls={pending:!1,data:null,method:null,action:null},Gf=[],Ys=-1;function Ri(t){return{current:t}}function en(t){0>Ys||(t.current=Gf[Ys],Gf[Ys]=null,Ys--)}function Mt(t,e){Ys++,Gf[Ys]=t.current,t.current=e}var Mi=Ri(null),yl=Ri(null),Na=Ri(null),uc=Ri(null);function fc(t,e){switch(Mt(Na,e),Mt(yl,t),Mt(Mi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?s0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=s0(e),t=c_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}en(Mi),Mt(Mi,t)}function mr(){en(Mi),en(yl),en(Na)}function Vf(t){t.memoizedState!==null&&Mt(uc,t);var e=Mi.current,n=c_(e,t.type);e!==n&&(Mt(yl,t),Mt(Mi,n))}function dc(t){yl.current===t&&(en(Mi),en(yl)),uc.current===t&&(en(uc),Ul._currentValue=ls)}var _u,em;function Ja(t){if(_u===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_u=e&&e[1]||"",em=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_u+t+em}var Su=!1;function yu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var u=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){u=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){u=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&u&&typeof h.stack=="string")return[h.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],l=s[1];if(r&&l){var o=r.split(`
`),c=l.split(`
`);for(a=i=0;i<o.length&&!o[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===o.length||a===c.length)for(i=o.length-1,a=c.length-1;1<=i&&0<=a&&o[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==c[a]){var d=`
`+o[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ja(n):""}function WS(t,e){switch(t.tag){case 26:case 27:case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return t.child!==e&&e!==null?Ja("Suspense Fallback"):Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return yu(t.type,!1);case 11:return yu(t.type.render,!1);case 1:return yu(t.type,!0);case 31:return Ja("Activity");default:return""}}function tm(t){try{var e="",n=null;do e+=WS(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var kf=Object.prototype.hasOwnProperty,Nh=qt.unstable_scheduleCallback,Mu=qt.unstable_cancelCallback,jS=qt.unstable_shouldYield,qS=qt.unstable_requestPaint,On=qt.unstable_now,YS=qt.unstable_getCurrentPriorityLevel,Xg=qt.unstable_ImmediatePriority,Wg=qt.unstable_UserBlockingPriority,hc=qt.unstable_NormalPriority,ZS=qt.unstable_LowPriority,jg=qt.unstable_IdlePriority,KS=qt.log,QS=qt.unstable_setDisableYieldValue,Bl=null,Pn=null;function Ea(t){if(typeof KS=="function"&&QS(t),Pn&&typeof Pn.setStrictMode=="function")try{Pn.setStrictMode(Bl,t)}catch{}}var In=Math.clz32?Math.clz32:ey,JS=Math.log,$S=Math.LN2;function ey(t){return t>>>=0,t===0?32:31-(JS(t)/$S|0)|0}var io=256,ao=262144,so=4194304;function $a(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Zc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var l=i&134217727;return l!==0?(i=l&~s,i!==0?a=$a(i):(r&=l,r!==0?a=$a(r):n||(n=l&~t,n!==0&&(a=$a(n))))):(l=i&~s,l!==0?a=$a(l):r!==0?a=$a(r):n||(n=i&~t,n!==0&&(a=$a(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function Fl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ty(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qg(){var t=so;return so<<=1,!(so&62914560)&&(so=4194304),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Hl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ny(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,o=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-In(n),p=1<<d;l[d]=0,o[d]=-1;var u=c[d];if(u!==null)for(c[d]=null,d=0;d<u.length;d++){var h=u[d];h!==null&&(h.lane&=-536870913)}n&=~p}i!==0&&Yg(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function Yg(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-In(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-In(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Kg(t,e){var n=e&-e;return n=n&42?1:Dh(n),n&(t.suspendedLanes|e)?0:n}function Dh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Uh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Qg(){var t=ot.p;return t!==0?t:(t=window.event,t===void 0?32:S_(t.type))}function nm(t,e){var n=ot.p;try{return ot.p=t,e()}finally{ot.p=n}}var Xa=Math.random().toString(36).slice(2),nn="__reactFiber$"+Xa,Tn="__reactProps$"+Xa,Dr="__reactContainer$"+Xa,Xf="__reactEvents$"+Xa,iy="__reactListeners$"+Xa,ay="__reactHandles$"+Xa,im="__reactResources$"+Xa,Gl="__reactMarker$"+Xa;function Lh(t){delete t[nn],delete t[Tn],delete t[Xf],delete t[iy],delete t[ay]}function Zs(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dr]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u0(t);t!==null;){if(n=t[nn])return n;t=u0(t)}return e}t=n,n=t.parentNode}return null}function Ur(t){if(t=t[nn]||t[Dr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function nl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ee(33))}function sr(t){var e=t[im];return e||(e=t[im]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function $t(t){t[Gl]=!0}var Jg=new Set,$g={};function Ss(t,e){gr(t,e),gr(t+"Capture",e)}function gr(t,e){for($g[t]=e,t=0;t<e.length;t++)Jg.add(e[t])}var sy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),am={},sm={};function ry(t){return kf.call(sm,t)?!0:kf.call(am,t)?!1:sy.test(t)?sm[t]=!0:(am[t]=!0,!1)}function ko(t,e,n){if(ry(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function ro(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function wi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Xn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ex(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ly(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wf(t){if(!t._valueTracker){var e=ex(t)?"checked":"value";t._valueTracker=ly(t,e,""+t[e])}}function tx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ex(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var oy=/[\n"\\]/g;function Yn(t){return t.replace(oy,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function jf(t,e,n,i,a,s,r,l){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xn(e)):t.value!==""+Xn(e)&&(t.value=""+Xn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?qf(t,r,Xn(e)):n!=null?qf(t,r,Xn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Xn(l):t.removeAttribute("name")}function nx(t,e,n,i,a,s,r,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Wf(t);return}n=n!=null?""+Xn(n):"",e=e!=null?""+Xn(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=l?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),Wf(t)}function qf(t,e,n){e==="number"&&pc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function rr(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function ix(t,e,n){if(e!=null&&(e=""+Xn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Xn(n):""}function ax(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(ee(92));if(tl(i)){if(1<i.length)throw Error(ee(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Xn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Wf(t)}function xr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var cy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||cy.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function sx(t,e,n){if(e!=null&&typeof e!="object")throw Error(ee(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&rm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&rm(t,s,e[s])}function Oh(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return fy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var Yf=null;function Ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,lr=null;function lm(t){var e=Ur(t);if(e&&(t=e.stateNode)){var n=t[Tn]||null;e:switch(t=e.stateNode,e.type){case"input":if(jf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Tn]||null;if(!a)throw Error(ee(90));jf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&tx(i)}break e;case"textarea":ix(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&rr(t,!!n.multiple,e,!1)}}}var Eu=!1;function rx(t,e,n){if(Eu)return t(e,n);Eu=!0;try{var i=t(e);return i}finally{if(Eu=!1,(Ks!==null||lr!==null)&&(lu(),Ks&&(e=Ks,t=lr,lr=Ks=null,lm(e),t)))for(e=0;e<t.length;e++)lm(t[e])}}function Ml(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Tn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=!1;if(Ji)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Zf=!1}var Ta=null,Ih=null,Wo=null;function lx(){if(Wo)return Wo;var t,e=Ih,n=e.length,i,a="value"in Ta?Ta.value:Ta.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return Wo=a.slice(t,1<i?1-i:void 0)}function jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function om(){return!1}function An(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:om,this.isPropagationStopped=om,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=An(ys),Vl=At({},ys,{view:0,detail:0}),dy=An(Vl),Tu,Au,Vr,Qc=At({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vr&&(Vr&&t.type==="mousemove"?(Tu=t.screenX-Vr.screenX,Au=t.screenY-Vr.screenY):Au=Tu=0,Vr=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),cm=An(Qc),hy=At({},Qc,{dataTransfer:0}),py=An(hy),my=At({},Vl,{relatedTarget:0}),Ru=An(my),gy=At({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=An(gy),vy=At({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_y=An(vy),Sy=At({},ys,{data:0}),um=An(Sy),yy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},My={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},by={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ey(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=by[t])?!!e[t]:!1}function zh(){return Ey}var Ty=At({},Vl,{key:function(t){if(t.key){var e=yy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?My[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zh,charCode:function(t){return t.type==="keypress"?jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ay=An(Ty),Ry=At({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=An(Ry),Cy=At({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zh}),wy=An(Cy),Ny=At({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=An(Ny),Uy=At({},Qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=An(Uy),Oy=At({},ys,{newState:0,oldState:0}),Py=An(Oy),Iy=[9,13,27,32],Bh=Ji&&"CompositionEvent"in window,ol=null;Ji&&"documentMode"in document&&(ol=document.documentMode);var zy=Ji&&"TextEvent"in window&&!ol,ox=Ji&&(!Bh||ol&&8<ol&&11>=ol),dm=" ",hm=!1;function cx(t,e){switch(t){case"keyup":return Iy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ux(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function By(t,e){switch(t){case"compositionend":return ux(e);case"keypress":return e.which!==32?null:(hm=!0,dm);case"textInput":return t=e.data,t===dm&&hm?null:t;default:return null}}function Fy(t,e){if(Qs)return t==="compositionend"||!Bh&&cx(t,e)?(t=lx(),Wo=Ih=Ta=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ox&&e.locale!=="ko"?null:e.data;default:return null}}var Hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hy[t.type]:e==="textarea"}function fx(t,e,n,i){Ks?lr?lr.push(i):lr=[i]:Ks=i,e=Uc(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var cl=null,bl=null;function Gy(t){r_(t,0)}function Jc(t){var e=nl(t);if(tx(e))return t}function mm(t,e){if(t==="change")return e}var dx=!1;if(Ji){var Cu;if(Ji){var wu="oninput"in document;if(!wu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),wu=typeof gm.oninput=="function"}Cu=wu}else Cu=!1;dx=Cu&&(!document.documentMode||9<document.documentMode)}function xm(){cl&&(cl.detachEvent("onpropertychange",hx),bl=cl=null)}function hx(t){if(t.propertyName==="value"&&Jc(bl)){var e=[];fx(e,bl,t,Ph(t)),rx(Gy,e)}}function Vy(t,e,n){t==="focusin"?(xm(),cl=e,bl=n,cl.attachEvent("onpropertychange",hx)):t==="focusout"&&xm()}function ky(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jc(bl)}function Xy(t,e){if(t==="click")return Jc(e)}function Wy(t,e){if(t==="input"||t==="change")return Jc(e)}function jy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:jy;function El(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!kf.call(e,a)||!Bn(t[a],e[a]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=vm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mx(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=pc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pc(t.document)}return e}function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var qy=Ji&&"documentMode"in document&&11>=document.documentMode,Js=null,Kf=null,ul=null,Qf=!1;function Sm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||Js==null||Js!==pc(i)||(i=Js,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ul&&El(ul,i)||(ul=i,i=Uc(Kf,"onSelect"),0<i.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Js)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $s={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},Nu={},gx={};Ji&&(gx=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ms(t){if(Nu[t])return Nu[t];if(!$s[t])return t;var e=$s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gx)return Nu[t]=e[n];return t}var xx=Ms("animationend"),vx=Ms("animationiteration"),_x=Ms("animationstart"),Yy=Ms("transitionrun"),Zy=Ms("transitionstart"),Ky=Ms("transitioncancel"),Sx=Ms("transitionend"),yx=new Map,Jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jf.push("scrollEnd");function ci(t,e){yx.set(t,e),Ss(e,[t])}var mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Vn=[],er=0,Hh=0;function $c(){for(var t=er,e=Hh=er=0;e<t;){var n=Vn[e];Vn[e++]=null;var i=Vn[e];Vn[e++]=null;var a=Vn[e];Vn[e++]=null;var s=Vn[e];if(Vn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&Mx(n,a,s)}}function eu(t,e,n,i){Vn[er++]=t,Vn[er++]=e,Vn[er++]=n,Vn[er++]=i,Hh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Gh(t,e,n,i){return eu(t,e,n,i),gc(t)}function bs(t,e){return eu(t,null,null,e),gc(t)}function Mx(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-In(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function gc(t){if(50<_l)throw _l=0,_d=null,Error(ee(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var tr={};function Qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new Qy(t,e,n,i)}function Vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ji(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function bx(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function qo(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")Vh(t)&&(r=1);else if(typeof t=="string")r=nb(t,n,Mi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Ff:return t=Un(31,n,e,a),t.elementType=Ff,t.lanes=s,t;case qs:return os(n.children,a,s,e);case Vg:r=8,a|=24;break;case If:return t=Un(12,n,e,a|2),t.elementType=If,t.lanes=s,t;case zf:return t=Un(13,n,e,a),t.elementType=zf,t.lanes=s,t;case Bf:return t=Un(19,n,e,a),t.elementType=Bf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vi:r=10;break e;case kg:r=9;break e;case Ch:r=11;break e;case wh:r=14;break e;case xa:r=16,i=null;break e}r=29,n=Error(ee(130,t===null?"null":typeof t,"")),i=null}return e=Un(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Du(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Ex(t){var e=Un(18,null,null,0);return e.stateNode=t,e}function Uu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ym=new WeakMap;function Zn(t,e){if(typeof t=="object"&&t!==null){var n=ym.get(t);return n!==void 0?n:(e={value:t,source:e,stack:tm(e)},ym.set(t,e),e)}return{value:t,source:e,stack:tm(e)}}var nr=[],ir=0,xc=null,Tl=0,Wn=[],jn=0,Fa=null,xi=1,vi="";function Fi(t,e){nr[ir++]=Tl,nr[ir++]=xc,xc=t,Tl=e}function Tx(t,e,n){Wn[jn++]=xi,Wn[jn++]=vi,Wn[jn++]=Fa,Fa=t;var i=xi;t=vi;var a=32-In(i)-1;i&=~(1<<a),n+=1;var s=32-In(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,xi=1<<32-In(e)+a|n<<a|i,vi=s+t}else xi=1<<s|n<<a|i,vi=t}function kh(t){t.return!==null&&(Fi(t,1),Tx(t,1,0))}function Xh(t){for(;t===xc;)xc=nr[--ir],nr[ir]=null,Tl=nr[--ir],nr[ir]=null;for(;t===Fa;)Fa=Wn[--jn],Wn[jn]=null,vi=Wn[--jn],Wn[jn]=null,xi=Wn[--jn],Wn[jn]=null}function Ax(t,e){Wn[jn++]=xi,Wn[jn++]=vi,Wn[jn++]=Fa,xi=e.id,vi=e.overflow,Fa=t}var an=null,Et=null,Qe=!1,Da=null,Kn=!1,$f=Error(ee(519));function Ha(t){var e=Error(ee(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(Zn(e,t)),$f}function Mm(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[nn]=t,e[Tn]=i,n){case"dialog":We("cancel",e),We("close",e);break;case"iframe":case"object":case"embed":We("load",e);break;case"video":case"audio":for(n=0;n<Nl.length;n++)We(Nl[n],e);break;case"source":We("error",e);break;case"img":case"image":case"link":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"input":We("invalid",e),nx(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":We("invalid",e);break;case"textarea":We("invalid",e),ax(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||o_(e.textContent,n)?(i.popover!=null&&(We("beforetoggle",e),We("toggle",e)),i.onScroll!=null&&We("scroll",e),i.onScrollEnd!=null&&We("scrollend",e),i.onClick!=null&&(e.onclick=ki),e=!0):e=!1,e||Ha(t,!0)}function bm(t){for(an=t.return;an;)switch(an.tag){case 5:case 31:case 13:Kn=!1;return;case 27:case 3:Kn=!0;return;default:an=an.return}}function Cs(t){if(t!==an)return!1;if(!Qe)return bm(t),Qe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ed(t.type,t.memoizedProps)),n=!n),n&&Et&&Ha(t),bm(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Et=c0(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));Et=c0(t)}else e===27?(e=Et,Wa(t.type)?(t=Cd,Cd=null,Et=t):Et=e):Et=an?$n(t.stateNode.nextSibling):null;return!0}function ds(){Et=an=null,Qe=!1}function Lu(){var t=Da;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),Da=null),t}function Al(t){Da===null?Da=[t]:Da.push(t)}var ed=Ri(null),Es=null,Xi=null;function _a(t,e,n){Mt(ed,e._currentValue),e._currentValue=n}function qi(t){t._currentValue=ed.current,en(ed)}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function nd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=a;for(var o=0;o<e.length;o++)if(l.context===e[o]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,t),i||(r=null);break e}s=l.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(ee(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),td(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Lr(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(ee(387));if(r=r.memoizedProps,r!==null){var l=a.type;Bn(a.pendingProps.value,r.value)||(t!==null?t.push(l):t=[l])}}else if(a===uc.current){if(r=a.alternate,r===null)throw Error(ee(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(Ul):t=[Ul])}a=a.return}t!==null&&nd(e,t,n,i),e.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!Bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hs(t){Es=t,Xi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function sn(t){return Rx(Es,t)}function oo(t,e){return Es===null&&hs(t),Rx(t,e)}function Rx(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Xi===null){if(t===null)throw Error(ee(308));Xi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Xi=Xi.next=e;return n}var Jy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},$y=qt.unstable_scheduleCallback,eM=qt.unstable_NormalPriority,Xt={$$typeof:Vi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wh(){return{controller:new Jy,data:new Map,refCount:0}}function kl(t){t.refCount--,t.refCount===0&&$y(eM,function(){t.controller.abort()})}var fl=null,id=0,vr=0,or=null;function tM(t,e){if(fl===null){var n=fl=[];id=0,vr=gp(),or={status:"pending",value:void 0,then:function(i){n.push(i)}}}return id++,e.then(Em,Em),e}function Em(){if(--id===0&&fl!==null){or!==null&&(or.status="fulfilled");var t=fl;fl=null,vr=0,or=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function nM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Tm=Le.S;Le.S=function(t,e){Gv=On(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&tM(t,e),Tm!==null&&Tm(t,e)};var cs=Ri(null);function jh(){var t=cs.current;return t!==null?t:vt.pooledCache}function Yo(t,e){e===null?Mt(cs,cs.current):Mt(cs,e.pool)}function Cx(){var t=jh();return t===null?null:{parent:Xt._currentValue,pool:t}}var Or=Error(ee(460)),qh=Error(ee(474)),tu=Error(ee(542)),_c={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wx(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(ki,ki),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t;default:if(typeof e.status=="string")e.then(ki,ki);else{if(t=vt,t!==null&&100<t.shellSuspendCounter)throw Error(ee(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Cm(t),t}throw us=e,Or}}function es(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(us=n,Or):n}}var us=null;function Rm(){if(us===null)throw Error(ee(459));var t=us;return us=null,t}function Cm(t){if(t===Or||t===tu)throw Error(ee(483))}var cr=null,Rl=0;function co(t){var e=Rl;return Rl+=1,cr===null&&(cr=[]),wx(cr,t,e)}function kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function uo(t,e){throw e.$$typeof===VS?Error(ee(525)):(t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Nx(t){function e(f,x){if(t){var M=f.deletions;M===null?(f.deletions=[x],f.flags|=16):M.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f){for(var x=new Map;f!==null;)f.key!==null?x.set(f.key,f):x.set(f.index,f),f=f.sibling;return x}function a(f,x){return f=ji(f,x),f.index=0,f.sibling=null,f}function s(f,x,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<x?(f.flags|=67108866,x):M):(f.flags|=67108866,x)):(f.flags|=1048576,x)}function r(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function l(f,x,M,S){return x===null||x.tag!==6?(x=Du(M,f.mode,S),x.return=f,x):(x=a(x,M),x.return=f,x)}function o(f,x,M,S){var T=M.type;return T===qs?d(f,x,M.props.children,S,M.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xa&&es(T)===x.type)?(x=a(x,M.props),kr(x,M),x.return=f,x):(x=qo(M.type,M.key,M.props,null,f.mode,S),kr(x,M),x.return=f,x)}function c(f,x,M,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Uu(M,f.mode,S),x.return=f,x):(x=a(x,M.children||[]),x.return=f,x)}function d(f,x,M,S,T){return x===null||x.tag!==7?(x=os(M,f.mode,S,T),x.return=f,x):(x=a(x,M),x.return=f,x)}function p(f,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Du(""+x,f.mode,M),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return M=qo(x.type,x.key,x.props,null,f.mode,M),kr(M,x),M.return=f,M;case el:return x=Uu(x,f.mode,M),x.return=f,x;case xa:return x=es(x),p(f,x,M)}if(tl(x)||Hr(x))return x=os(x,f.mode,M,null),x.return=f,x;if(typeof x.then=="function")return p(f,co(x),M);if(x.$$typeof===Vi)return p(f,oo(f,x),M);uo(f,x)}return null}function u(f,x,M,S){var T=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return T!==null?null:l(f,x,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case no:return M.key===T?o(f,x,M,S):null;case el:return M.key===T?c(f,x,M,S):null;case xa:return M=es(M),u(f,x,M,S)}if(tl(M)||Hr(M))return T!==null?null:d(f,x,M,S,null);if(typeof M.then=="function")return u(f,x,co(M),S);if(M.$$typeof===Vi)return u(f,x,oo(f,M),S);uo(f,M)}return null}function h(f,x,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(M)||null,l(x,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case no:return f=f.get(S.key===null?M:S.key)||null,o(x,f,S,T);case el:return f=f.get(S.key===null?M:S.key)||null,c(x,f,S,T);case xa:return S=es(S),h(f,x,M,S,T)}if(tl(S)||Hr(S))return f=f.get(M)||null,d(x,f,S,T,null);if(typeof S.then=="function")return h(f,x,M,co(S),T);if(S.$$typeof===Vi)return h(f,x,M,oo(x,S),T);uo(x,S)}return null}function _(f,x,M,S){for(var T=null,R=null,C=x,v=x=0,A=null;C!==null&&v<M.length;v++){C.index>v?(A=C,C=null):A=C.sibling;var N=u(f,C,M[v],S);if(N===null){C===null&&(C=A);break}t&&C&&N.alternate===null&&e(f,C),x=s(N,x,v),R===null?T=N:R.sibling=N,R=N,C=A}if(v===M.length)return n(f,C),Qe&&Fi(f,v),T;if(C===null){for(;v<M.length;v++)C=p(f,M[v],S),C!==null&&(x=s(C,x,v),R===null?T=C:R.sibling=C,R=C);return Qe&&Fi(f,v),T}for(C=i(C);v<M.length;v++)A=h(C,f,v,M[v],S),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?v:A.key),x=s(A,x,v),R===null?T=A:R.sibling=A,R=A);return t&&C.forEach(function(D){return e(f,D)}),Qe&&Fi(f,v),T}function E(f,x,M,S){if(M==null)throw Error(ee(151));for(var T=null,R=null,C=x,v=x=0,A=null,N=M.next();C!==null&&!N.done;v++,N=M.next()){C.index>v?(A=C,C=null):A=C.sibling;var D=u(f,C,N.value,S);if(D===null){C===null&&(C=A);break}t&&C&&D.alternate===null&&e(f,C),x=s(D,x,v),R===null?T=D:R.sibling=D,R=D,C=A}if(N.done)return n(f,C),Qe&&Fi(f,v),T;if(C===null){for(;!N.done;v++,N=M.next())N=p(f,N.value,S),N!==null&&(x=s(N,x,v),R===null?T=N:R.sibling=N,R=N);return Qe&&Fi(f,v),T}for(C=i(C);!N.done;v++,N=M.next())N=h(C,f,v,N.value,S),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?v:N.key),x=s(N,x,v),R===null?T=N:R.sibling=N,R=N);return t&&C.forEach(function(B){return e(f,B)}),Qe&&Fi(f,v),T}function m(f,x,M,S){if(typeof M=="object"&&M!==null&&M.type===qs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case no:e:{for(var T=M.key;x!==null;){if(x.key===T){if(T=M.type,T===qs){if(x.tag===7){n(f,x.sibling),S=a(x,M.props.children),S.return=f,f=S;break e}}else if(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===xa&&es(T)===x.type){n(f,x.sibling),S=a(x,M.props),kr(S,M),S.return=f,f=S;break e}n(f,x);break}else e(f,x);x=x.sibling}M.type===qs?(S=os(M.props.children,f.mode,S,M.key),S.return=f,f=S):(S=qo(M.type,M.key,M.props,null,f.mode,S),kr(S,M),S.return=f,f=S)}return r(f);case el:e:{for(T=M.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(f,x.sibling),S=a(x,M.children||[]),S.return=f,f=S;break e}else{n(f,x);break}else e(f,x);x=x.sibling}S=Uu(M,f.mode,S),S.return=f,f=S}return r(f);case xa:return M=es(M),m(f,x,M,S)}if(tl(M))return _(f,x,M,S);if(Hr(M)){if(T=Hr(M),typeof T!="function")throw Error(ee(150));return M=T.call(M),E(f,x,M,S)}if(typeof M.then=="function")return m(f,x,co(M),S);if(M.$$typeof===Vi)return m(f,x,oo(f,M),S);uo(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,x!==null&&x.tag===6?(n(f,x.sibling),S=a(x,M),S.return=f,f=S):(n(f,x),S=Du(M,f.mode,S),S.return=f,f=S),r(f)):n(f,x)}return function(f,x,M,S){try{Rl=0;var T=m(f,x,M,S);return cr=null,T}catch(C){if(C===Or||C===tu)throw C;var R=Un(29,C,null,f.mode);return R.lanes=S,R.return=f,R}finally{}}}var ps=Nx(!0),Dx=Nx(!1),va=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ad(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=gc(t),Mx(t,null,n),e}return eu(t,i,e,n),gc(t)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zg(t,n)}}function Ou(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var sd=!1;function hl(){if(sd){var t=or;if(t!==null)throw t}}function pl(t,e,n,i){sd=!1;var a=t.updateQueue;va=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var o=l,c=o.next;o.next=null,r===null?s=c:r.next=c,r=o;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==r&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=o))}if(s!==null){var p=a.baseState;r=0,d=c=o=null,l=s;do{var u=l.lane&-536870913,h=u!==l.lane;if(h?(Ye&u)===u:(i&u)===u){u!==0&&u===vr&&(sd=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var _=t,E=l;u=e;var m=n;switch(E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(m,p,u);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,u=typeof _=="function"?_.call(m,p,u):_,u==null)break e;p=At({},p,u);break e;case 2:va=!0}}u=l.callback,u!==null&&(t.flags|=64,h&&(t.flags|=8192),h=a.callbacks,h===null?a.callbacks=[u]:h.push(u))}else h={lane:u,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=h,o=p):d=d.next=h,r|=u;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;h=l,l=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);d===null&&(o=p),a.baseState=o,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Va|=r,t.lanes=r,t.memoizedState=p}}function Ux(t,e){if(typeof t!="function")throw Error(ee(191,t));t.call(e)}function Lx(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ux(n[t],e)}var _r=Ri(null),Sc=Ri(0);function wm(t,e){t=na,Mt(Sc,t),Mt(_r,e),na=t|e.baseLanes}function rd(){Mt(Sc,na),Mt(_r,_r.current)}function Zh(){na=Sc.current,en(_r),en(Sc)}var Fn=Ri(null),Jn=null;function Sa(t){var e=t.alternate;Mt(Bt,Bt.current&1),Mt(Fn,t),Jn===null&&(e===null||_r.current!==null||e.memoizedState!==null)&&(Jn=t)}function ld(t){Mt(Bt,Bt.current),Mt(Fn,t),Jn===null&&(Jn=t)}function Ox(t){t.tag===22?(Mt(Bt,Bt.current),Mt(Fn,t),Jn===null&&(Jn=t)):ya()}function ya(){Mt(Bt,Bt.current),Mt(Fn,Fn.current)}function Dn(t){en(Fn),Jn===t&&(Jn=null),en(Bt)}var Bt=Ri(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ad(n)||Rd(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $i=0,He=null,mt=null,Vt=null,Mc=!1,ur=!1,ms=!1,bc=0,Cl=0,fr=null,iM=0;function Ut(){throw Error(ee(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Qh(t,e,n,i,a,s){return $i=s,He=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?fv:op,ms=!1,s=n(i,a),ms=!1,ur&&(s=Ix(e,n,i,a)),Px(t),s}function Px(t){Le.H=wl;var e=mt!==null&&mt.next!==null;if($i=0,Vt=mt=He=null,Mc=!1,Cl=0,fr=null,e)throw Error(ee(300));t===null||Wt||(t=t.dependencies,t!==null&&vc(t)&&(Wt=!0))}function Ix(t,e,n,i){He=t;var a=0;do{if(ur&&(fr=null),Cl=0,ur=!1,25<=a)throw Error(ee(301));if(a+=1,Vt=mt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Le.H=dv,s=e(n,i)}while(ur);return s}function aM(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?Xl(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(He.flags|=1024),e}function Jh(){var t=bc!==0;return bc=0,t}function $h(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function ep(t){if(Mc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mc=!1}$i=0,Vt=mt=He=null,ur=!1,Cl=bc=0,fr=null}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?He.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Ft(){if(mt===null){var t=He.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Vt===null?He.memoizedState:Vt.next;if(e!==null)Vt=e,mt=t;else{if(t===null)throw He.alternate===null?Error(ee(467)):Error(ee(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Vt===null?He.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(t){var e=Cl;return Cl+=1,fr===null&&(fr=[]),t=wx(fr,t,e),e=He,(Vt===null?e.memoizedState:Vt.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?fv:op),t}function iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xl(t);if(t.$$typeof===Vi)return sn(t)}throw Error(ee(438,String(t)))}function tp(t){var e=null,n=He.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=He.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=nu(),He.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=kS;return e.index++,n}function ea(t,e){return typeof e=="function"?e(t):e}function Zo(t){var e=Ft();return np(e,mt,t)}function np(t,e,n){var i=t.queue;if(i===null)throw Error(ee(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var l=r=null,o=null,c=e,d=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Ye&p)===p:($i&p)===p){var u=c.revertLane;if(u===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===vr&&(d=!0);else if(($i&u)===u){c=c.next,u===vr&&(d=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=p,r=s):o=o.next=p,He.lanes|=u,Va|=u;p=c.action,ms&&n(s,p),s=c.hasEagerState?c.eagerState:n(s,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},o===null?(l=o=u,r=s):o=o.next=u,He.lanes|=p,Va|=p;c=c.next}while(c!==null&&c!==e);if(o===null?r=s:o.next=l,!Bn(s,t.memoizedState)&&(Wt=!0,d&&(n=or,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=o,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Pu(t){var e=Ft(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Bn(s,e.memoizedState)||(Wt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function zx(t,e,n){var i=He,a=Ft(),s=Qe;if(s){if(n===void 0)throw Error(ee(407));n=n()}else n=e();var r=!Bn((mt||a).memoizedState,n);if(r&&(a.memoizedState=n,Wt=!0),a=a.queue,ip(Hx.bind(null,i,a,t),[t]),a.getSnapshot!==e||r||Vt!==null&&Vt.memoizedState.tag&1){if(i.flags|=2048,Sr(9,{destroy:void 0},Fx.bind(null,i,a,n,e),null),vt===null)throw Error(ee(349));s||$i&127||Bx(i,e,n)}return n}function Bx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=He.updateQueue,e===null?(e=nu(),He.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fx(t,e,n,i){e.value=n,e.getSnapshot=i,Gx(e)&&Vx(t)}function Hx(t,e,n){return n(function(){Gx(e)&&Vx(t)})}function Gx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Vx(t){var e=bs(t,2);e!==null&&Mn(e,t,2)}function od(t){var e=pn();if(typeof t=="function"){var n=t;if(t=n(),ms){Ea(!0);try{n()}finally{Ea(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e}function kx(t,e,n,i){return t.baseState=n,np(t,mt,typeof i=="function"?i:ea)}function sM(t,e,n,i,a){if(su(t))throw Error(ee(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Le.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,Xx(e,s)):(s.next=n.next,e.pending=n.next=s)}}function Xx(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Le.T,r={};Le.T=r;try{var l=n(a,i),o=Le.S;o!==null&&o(r,l),Nm(t,e,l)}catch(c){cd(t,e,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Le.T=s}}else try{s=n(a,i),Nm(t,e,s)}catch(c){cd(t,e,c)}}function Nm(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Dm(t,e,i)},function(i){return cd(t,e,i)}):Dm(t,e,n)}function Dm(t,e,n){e.status="fulfilled",e.value=n,Wx(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xx(t,n)))}function cd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,Wx(e),e=e.next;while(e!==i)}t.action=null}function Wx(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function jx(t,e){return e}function Um(t,e){if(Qe){var n=vt.formState;if(n!==null){e:{var i=He;if(Qe){if(Et){t:{for(var a=Et,s=Kn;a.nodeType!==8;){if(!s){a=null;break t}if(a=$n(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Et=$n(a.nextSibling),i=a.data==="F!";break e}}Ha(i)}i=!1}i&&(e=n[0])}}return n=pn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jx,lastRenderedState:e},n.queue=i,n=ov.bind(null,He,i),i.dispatch=n,i=od(!1),s=lp.bind(null,He,!1,i.queue),i=pn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=sM.bind(null,He,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function Lm(t){var e=Ft();return qx(e,mt,t)}function qx(t,e,n){if(e=np(t,e,jx)[0],t=Zo(ea)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Xl(e)}catch(r){throw r===Or?tu:r}else i=e;e=Ft();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(He.flags|=2048,Sr(9,{destroy:void 0},rM.bind(null,a,n),null)),[i,s,t]}function rM(t,e){t.action=e}function Om(t){var e=Ft(),n=mt;if(n!==null)return qx(e,n,t);Ft(),e=e.memoizedState,n=Ft();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Sr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=He.updateQueue,e===null&&(e=nu(),He.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Yx(){return Ft().memoizedState}function Ko(t,e,n,i){var a=pn();He.flags|=t,a.memoizedState=Sr(1|e,{destroy:void 0},n,i===void 0?null:i)}function au(t,e,n,i){var a=Ft();i=i===void 0?null:i;var s=a.memoizedState.inst;mt!==null&&i!==null&&Kh(i,mt.memoizedState.deps)?a.memoizedState=Sr(e,s,n,i):(He.flags|=t,a.memoizedState=Sr(1|e,s,n,i))}function Pm(t,e){Ko(8390656,8,t,e)}function ip(t,e){au(2048,8,t,e)}function lM(t){He.flags|=4;var e=He.updateQueue;if(e===null)e=nu(),He.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function Zx(t){var e=Ft().memoizedState;return lM({ref:e,nextImpl:t}),function(){if(lt&2)throw Error(ee(440));return e.impl.apply(void 0,arguments)}}function Kx(t,e){return au(4,2,t,e)}function Qx(t,e){return au(4,4,t,e)}function Jx(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $x(t,e,n){n=n!=null?n.concat([t]):null,au(4,4,Jx.bind(null,e,t),n)}function ap(){}function ev(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Kh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Kh(e,i[1]))return i[0];if(i=t(),ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i}function sp(t,e,n){return n===void 0||$i&1073741824&&!(Ye&261930)?t.memoizedState=e:(t.memoizedState=n,t=kv(),He.lanes|=t,Va|=t,n)}function nv(t,e,n,i){return Bn(n,e)?n:_r.current!==null?(t=sp(t,n,i),Bn(t,e)||(Wt=!0),t):!($i&42)||$i&1073741824&&!(Ye&261930)?(Wt=!0,t.memoizedState=n):(t=kv(),He.lanes|=t,Va|=t,e)}function iv(t,e,n,i,a){var s=ot.p;ot.p=s!==0&&8>s?s:8;var r=Le.T,l={};Le.T=l,lp(t,!1,e,n);try{var o=a(),c=Le.S;if(c!==null&&c(l,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=nM(o,i);ml(t,e,d,zn(t))}else ml(t,e,i,zn(t))}catch(p){ml(t,e,{then:function(){},status:"rejected",reason:p},zn())}finally{ot.p=s,r!==null&&l.types!==null&&(r.types=l.types),Le.T=r}}function oM(){}function ud(t,e,n,i){if(t.tag!==5)throw Error(ee(476));var a=av(t).queue;iv(t,a,e,ls,n===null?oM:function(){return sv(t),n(i)})}function av(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ls,baseState:ls,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ls},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function sv(t){var e=av(t);e.next===null&&(e=t.alternate.memoizedState),ml(t,e.next.queue,{},zn())}function rp(){return sn(Ul)}function rv(){return Ft().memoizedState}function lv(){return Ft().memoizedState}function cM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=zn();t=Ua(n);var i=La(e,t,n);i!==null&&(Mn(i,e,n),dl(i,e,n)),e={cache:Wh()},t.payload=e;return}e=e.return}}function uM(t,e,n){var i=zn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},su(t)?cv(e,n):(n=Gh(t,e,n,i),n!==null&&(Mn(n,t,i),uv(n,e,i)))}function ov(t,e,n){var i=zn();ml(t,e,n,i)}function ml(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(su(t))cv(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,l=s(r,n);if(a.hasEagerState=!0,a.eagerState=l,Bn(l,r))return eu(t,e,a,0),vt===null&&$c(),!1}catch{}finally{}if(n=Gh(t,e,a,i),n!==null)return Mn(n,t,i),uv(n,e,i),!0}return!1}function lp(t,e,n,i){if(i={lane:2,revertLane:gp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},su(t)){if(e)throw Error(ee(479))}else e=Gh(t,n,i,2),e!==null&&Mn(e,t,2)}function su(t){var e=t.alternate;return t===He||e!==null&&e===He}function cv(t,e){ur=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function uv(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zg(t,n)}}var wl={readContext:sn,use:iu,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut};wl.useEffectEvent=Ut;var fv={readContext:sn,use:iu,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:Pm,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ko(4194308,4,Jx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){Ko(4,2,t,e)},useMemo:function(t,e){var n=pn();e=e===void 0?null:e;var i=t();if(ms){Ea(!0);try{t()}finally{Ea(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=pn();if(n!==void 0){var a=n(e);if(ms){Ea(!0);try{n(e)}finally{Ea(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=uM.bind(null,He,t),[i.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:function(t){t=od(t);var e=t.queue,n=ov.bind(null,He,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:ap,useDeferredValue:function(t,e){var n=pn();return sp(n,t,e)},useTransition:function(){var t=od(!1);return t=iv.bind(null,He,t.queue,!0,!1),pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=He,a=pn();if(Qe){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),vt===null)throw Error(ee(349));Ye&127||Bx(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,Pm(Hx.bind(null,i,s,t),[t]),i.flags|=2048,Sr(9,{destroy:void 0},Fx.bind(null,i,s,n,e),null),n},useId:function(){var t=pn(),e=vt.identifierPrefix;if(Qe){var n=vi,i=xi;n=(i&~(1<<32-In(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=bc++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=iM++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:rp,useFormState:Um,useActionState:Um,useOptimistic:function(t){var e=pn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lp.bind(null,He,!0,n),n.dispatch=e,[t,e]},useMemoCache:tp,useCacheRefresh:function(){return pn().memoizedState=cM.bind(null,He)},useEffectEvent:function(t){var e=pn(),n={impl:t};return e.memoizedState=n,function(){if(lt&2)throw Error(ee(440));return n.impl.apply(void 0,arguments)}}},op={readContext:sn,use:iu,useCallback:ev,useContext:sn,useEffect:ip,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:tv,useReducer:Zo,useRef:Yx,useState:function(){return Zo(ea)},useDebugValue:ap,useDeferredValue:function(t,e){var n=Ft();return nv(n,mt.memoizedState,t,e)},useTransition:function(){var t=Zo(ea)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:zx,useId:rv,useHostTransitionStatus:rp,useFormState:Lm,useActionState:Lm,useOptimistic:function(t,e){var n=Ft();return kx(n,mt,t,e)},useMemoCache:tp,useCacheRefresh:lv};op.useEffectEvent=Zx;var dv={readContext:sn,use:iu,useCallback:ev,useContext:sn,useEffect:ip,useImperativeHandle:$x,useInsertionEffect:Kx,useLayoutEffect:Qx,useMemo:tv,useReducer:Pu,useRef:Yx,useState:function(){return Pu(ea)},useDebugValue:ap,useDeferredValue:function(t,e){var n=Ft();return mt===null?sp(n,t,e):nv(n,mt.memoizedState,t,e)},useTransition:function(){var t=Pu(ea)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:Xl(t),e]},useSyncExternalStore:zx,useId:rv,useHostTransitionStatus:rp,useFormState:Om,useActionState:Om,useOptimistic:function(t,e){var n=Ft();return mt!==null?kx(n,mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:tp,useCacheRefresh:lv};dv.useEffectEvent=Zx;function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ua(i);a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(Mn(e,t,i),dl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=zn(),a=Ua(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=La(t,a,i),e!==null&&(Mn(e,t,i),dl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zn(),i=Ua(n);i.tag=2,e!=null&&(i.callback=e),e=La(t,i,n),e!==null&&(Mn(e,t,n),dl(e,t,n))}};function Im(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!El(n,i)||!El(a,s):!0}function zm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fd.enqueueReplaceState(e,e.state,null)}function gs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=At({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function hv(t){mc(t)}function pv(t){console.error(t)}function mv(t){mc(t)}function Ec(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function Bm(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function dd(t,e,n){return n=Ua(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(t,e)},n}function gv(t){return t=Ua(t),t.tag=3,t}function xv(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){Bm(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Bm(e,n,i),typeof a!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function fM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Lr(e,n,a,!0),n=Fn.current,n!==null){switch(n.tag){case 31:case 13:return Jn===null?wc():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===_c?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),qu(t,i,a)),!1;case 22:return n.flags|=65536,i===_c?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),qu(t,i,a)),!1}throw Error(ee(435,n.tag))}return qu(t,i,a),wc(),!1}if(Qe)return e=Fn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==$f&&(t=Error(ee(422),{cause:i}),Al(Zn(t,n)))):(i!==$f&&(e=Error(ee(423),{cause:i}),Al(Zn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=Zn(i,n),a=dd(t.stateNode,i,a),Ou(t,a),Ot!==4&&(Ot=2)),!1;var s=Error(ee(520),{cause:i});if(s=Zn(s,n),vl===null?vl=[s]:vl.push(s),Ot!==4&&(Ot=2),e===null)return!0;i=Zn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=dd(n.stateNode,i,t),Ou(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Oa===null||!Oa.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=gv(a),xv(a,t,n,i),Ou(n,a),!1}n=n.return}while(n!==null);return!1}var cp=Error(ee(461)),Wt=!1;function tn(t,e,n,i){e.child=t===null?Dx(e,null,n,i):ps(e,t.child,n,i)}function Fm(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}else r=i;return hs(e),i=Qh(t,e,n,r,s,a),l=Jh(),t!==null&&!Wt?($h(t,e,a),ta(t,e,a)):(Qe&&l&&kh(e),e.flags|=1,tn(t,e,i,a),e.child)}function Hm(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!Vh(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,vv(t,e,s,i,a)):(t=qo(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!up(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(r,i)&&t.ref===e.ref)return ta(t,e,a)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function vv(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(El(s,i)&&t.ref===e.ref)if(Wt=!1,e.pendingProps=i=s,up(t,a))t.flags&131072&&(Wt=!0);else return e.lanes=t.lanes,ta(t,e,a)}return hd(t,e,n,i,a)}function _v(t,e,n,i){var a=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~s}else i=0,e.child=null;return Gm(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yo(e,s!==null?s.cachePool:null),s!==null?wm(e,s):rd(),Ox(e);else return i=e.lanes=536870912,Gm(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(Yo(e,s.cachePool),wm(e,s),ya(),e.memoizedState=null):(t!==null&&Yo(e,null),rd(),ya());return tn(t,e,a,n),e.child}function il(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Gm(t,e,n,i,a){var s=jh();return s=s===null?null:{parent:Xt._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Yo(e,null),rd(),Ox(e),t!==null&&Lr(t,e,i,!0),e.childLanes=a,null}function Qo(t,e){return e=Tc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vm(t,e,n){return ps(e,t.child,null,n),t=Qo(e,e.pendingProps),t.flags|=2,Dn(e),e.memoizedState=null,t}function dM(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Qe){if(i.mode==="hidden")return t=Qo(e,i),e.lanes=536870912,il(null,t);if(ld(e),(t=Et)?(t=f_(t,Kn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:xi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=Ex(t),n.return=e,e.child=n,an=e,Et=null)):t=null,t===null)throw Ha(e);return e.lanes=536870912,null}return Qo(e,i)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(ld(e),a)if(e.flags&256)e.flags&=-257,e=Vm(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ee(558));else if(Wt||Lr(t,e,n,!1),a=(n&t.childLanes)!==0,Wt||a){if(i=vt,i!==null&&(r=Kg(i,n),r!==0&&r!==s.retryLane))throw s.retryLane=r,bs(t,r),Mn(i,t,r),cp;wc(),e=Vm(t,e,n)}else t=s.treeContext,Et=$n(r.nextSibling),an=e,Qe=!0,Da=null,Kn=!1,t!==null&&Ax(e,t),e=Qo(e,i),e.flags|=4096;return e}return t=ji(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Jo(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(ee(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hd(t,e,n,i,a){return hs(e),n=Qh(t,e,n,i,void 0,a),i=Jh(),t!==null&&!Wt?($h(t,e,a),ta(t,e,a)):(Qe&&i&&kh(e),e.flags|=1,tn(t,e,n,a),e.child)}function km(t,e,n,i,a,s){return hs(e),e.updateQueue=null,n=Ix(e,i,n,a),Px(t),i=Jh(),t!==null&&!Wt?($h(t,e,s),ta(t,e,s)):(Qe&&i&&kh(e),e.flags|=1,tn(t,e,n,s),e.child)}function Xm(t,e,n,i,a){if(hs(e),e.stateNode===null){var s=tr,r=n.contextType;typeof r=="object"&&r!==null&&(s=sn(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=fd,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},Yh(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?sn(r):tr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Iu(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&fd.enqueueReplaceState(s,s.state,null),pl(e,i,s,a),hl(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,o=gs(n,l);s.props=o;var c=s.context,d=n.contextType;r=tr,typeof d=="object"&&d!==null&&(r=sn(d));var p=n.getDerivedStateFromProps;d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||c!==r)&&zm(e,s,i,r),va=!1;var u=e.memoizedState;s.state=u,pl(e,i,s,a),hl(),c=e.memoizedState,l||u!==c||va?(typeof p=="function"&&(Iu(e,n,p,i),c=e.memoizedState),(o=va||Im(e,n,o,i,u,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ad(t,e),r=e.memoizedProps,d=gs(n,r),s.props=d,p=e.pendingProps,u=s.context,c=n.contextType,o=tr,typeof c=="object"&&c!==null&&(o=sn(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||u!==o)&&zm(e,s,i,o),va=!1,u=e.memoizedState,s.state=u,pl(e,i,s,a),hl();var h=e.memoizedState;r!==p||u!==h||va||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof l=="function"&&(Iu(e,n,l,i),h=e.memoizedState),(d=va||Im(e,n,d,i,u,h,o)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,h,o),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,h,o)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=h),s.props=i,s.state=h,s.context=o,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,Jo(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=ps(e,t.child,null,a),e.child=ps(e,null,n,a)):tn(t,e,n,a),e.memoizedState=s.state,t=e.child):t=ta(t,e,a),t}function Wm(t,e,n,i){return ds(),e.flags|=256,tn(t,e,n,i),e.child}var zu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bu(t){return{baseLanes:t,cachePool:Cx()}}function Fu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ln),t}function Sv(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(Qe){if(a?Sa(e):ya(),(t=Et)?(t=f_(t,Kn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:xi,overflow:vi}:null,retryLane:536870912,hydrationErrors:null},n=Ex(t),n.return=e,e.child=n,an=e,Et=null)):t=null,t===null)throw Ha(e);return Rd(t)?e.lanes=32:e.lanes=536870912,null}var l=i.children;return i=i.fallback,a?(ya(),a=e.mode,l=Tc({mode:"hidden",children:l},a),i=os(i,a,n,null),l.return=e,i.return=e,l.sibling=i,e.child=l,i=e.child,i.memoizedState=Bu(n),i.childLanes=Fu(t,r,n),e.memoizedState=zu,il(null,i)):(Sa(e),pd(e,l))}var o=t.memoizedState;if(o!==null&&(l=o.dehydrated,l!==null)){if(s)e.flags&256?(Sa(e),e.flags&=-257,e=Hu(t,e,n)):e.memoizedState!==null?(ya(),e.child=t.child,e.flags|=128,e=null):(ya(),l=i.fallback,a=e.mode,i=Tc({mode:"visible",children:i.children},a),l=os(l,a,n,null),l.flags|=2,i.return=e,l.return=e,i.sibling=l,e.child=i,ps(e,t.child,null,n),i=e.child,i.memoizedState=Bu(n),i.childLanes=Fu(t,r,n),e.memoizedState=zu,e=il(null,i));else if(Sa(e),Rd(l)){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(ee(419)),i.stack="",i.digest=r,Al({value:i,source:null,stack:null}),e=Hu(t,e,n)}else if(Wt||Lr(t,e,n,!1),r=(n&t.childLanes)!==0,Wt||r){if(r=vt,r!==null&&(i=Kg(r,n),i!==0&&i!==o.retryLane))throw o.retryLane=i,bs(t,i),Mn(r,t,i),cp;Ad(l)||wc(),e=Hu(t,e,n)}else Ad(l)?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,Et=$n(l.nextSibling),an=e,Qe=!0,Da=null,Kn=!1,t!==null&&Ax(e,t),e=pd(e,i.children),e.flags|=4096);return e}return a?(ya(),l=i.fallback,a=e.mode,o=t.child,c=o.sibling,i=ji(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&65011712,c!==null?l=ji(c,l):(l=os(l,a,n,null),l.flags|=2),l.return=e,i.return=e,i.sibling=l,e.child=i,il(null,i),i=e.child,l=t.child.memoizedState,l===null?l=Bu(n):(a=l.cachePool,a!==null?(o=Xt._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Cx(),l={baseLanes:l.baseLanes|n,cachePool:a}),i.memoizedState=l,i.childLanes=Fu(t,r,n),e.memoizedState=zu,il(t.child,i)):(Sa(e),n=t.child,t=n.sibling,n=ji(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function pd(t,e){return e=Tc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Tc(t,e){return t=Un(22,t,null,e),t.lanes=0,t}function Hu(t,e,n){return ps(e,t.child,null,n),t=pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Gu(t,e,n,i,a,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=s)}function yv(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;i=i.children;var r=Bt.current,l=(r&2)!==0;if(l?(r=r&1|2,e.flags|=128):r&=1,Mt(Bt,r),tn(t,e,i,n),i=Qe?Tl:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,n,e);else if(t.tag===19)jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Gu(e,!1,a,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&yc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Gu(e,!0,n,null,s,i);break;case"together":Gu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ta(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Va|=e.lanes,!(n&e.childLanes))if(t!==null){if(Lr(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function up(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function hM(t,e,n){switch(e.tag){case 3:fc(e,e.stateNode.containerInfo),_a(e,Xt,t.memoizedState.cache),ds();break;case 27:case 5:Vf(e);break;case 4:fc(e,e.stateNode.containerInfo);break;case 10:_a(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ld(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Sa(e),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(Sa(e),t=ta(t,e,n),t!==null?t.sibling:null);Sa(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Lr(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return yv(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Mt(Bt,Bt.current),i)break;return null;case 22:return e.lanes=0,_v(t,e,n,e.pendingProps);case 24:_a(e,Xt,t.memoizedState.cache)}return ta(t,e,n)}function Mv(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Wt=!0;else{if(!up(t,n)&&!(e.flags&128))return Wt=!1,hM(t,e,n);Wt=!!(t.flags&131072)}else Wt=!1,Qe&&e.flags&1048576&&Tx(e,Tl,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=es(e.elementType),e.type=t,typeof t=="function")Vh(t)?(i=gs(t,i),e.tag=1,e=Xm(null,e,t,i,n)):(e.tag=0,e=hd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===Ch){e.tag=11,e=Fm(null,e,t,i,n);break e}else if(a===wh){e.tag=14,e=Hm(null,e,t,i,n);break e}}throw e=Hf(t)||t,Error(ee(306,e,""))}}return e;case 0:return hd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=gs(i,e.pendingProps),Xm(t,e,i,a,n);case 3:e:{if(fc(e,e.stateNode.containerInfo),t===null)throw Error(ee(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,ad(t,e),pl(e,i,null,n);var r=e.memoizedState;if(i=r.cache,_a(e,Xt,i),i!==s.cache&&nd(e,[Xt],n,!0),hl(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Wm(t,e,i,n);break e}else if(i!==a){a=Zn(Error(ee(424)),e),Al(a),e=Wm(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=$n(t.firstChild),an=e,Qe=!0,Da=null,Kn=!0,n=Dx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ds(),i===a){e=ta(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 26:return Jo(t,e),t===null?(n=d0(e.type,null,e.pendingProps,null))?e.memoizedState=n:Qe||(n=e.type,t=e.pendingProps,i=Lc(Na.current).createElement(n),i[nn]=e,i[Tn]=t,ln(i,n,t),$t(i),e.stateNode=i):e.memoizedState=d0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Vf(e),t===null&&Qe&&(i=e.stateNode=d_(e.type,e.pendingProps,Na.current),an=e,Kn=!0,a=Et,Wa(e.type)?(Cd=a,Et=$n(i.firstChild)):Et=a),tn(t,e,e.pendingProps.children,n),Jo(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Qe&&((a=i=Et)&&(i=kM(i,e.type,e.pendingProps,Kn),i!==null?(e.stateNode=i,an=e,Et=$n(i.firstChild),Kn=!1,a=!0):a=!1),a||Ha(e)),Vf(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,Ed(a,s)?i=null:r!==null&&Ed(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Qh(t,e,aM,null,null,n),Ul._currentValue=a),Jo(t,e),tn(t,e,i,n),e.child;case 6:return t===null&&Qe&&((t=n=Et)&&(n=XM(n,e.pendingProps,Kn),n!==null?(e.stateNode=n,an=e,Et=null,t=!0):t=!1),t||Ha(e)),null;case 13:return Sv(t,e,n);case 4:return fc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ps(e,null,i,n):tn(t,e,i,n),e.child;case 11:return Fm(t,e,e.type,e.pendingProps,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,_a(e,e.type,i.value),tn(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,hs(e),a=sn(a),i=i(a),e.flags|=1,tn(t,e,i,n),e.child;case 14:return Hm(t,e,e.type,e.pendingProps,n);case 15:return vv(t,e,e.type,e.pendingProps,n);case 19:return yv(t,e,n);case 31:return dM(t,e,n);case 22:return _v(t,e,n,e.pendingProps);case 24:return hs(e),i=sn(Xt),t===null?(a=jh(),a===null&&(a=vt,s=Wh(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},Yh(e),_a(e,Xt,a)):(t.lanes&n&&(ad(t,e),pl(e,null,null,n),hl()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),_a(e,Xt,i)):(i=s.cache,_a(e,Xt,i),i!==a.cache&&nd(e,[Xt],n,!0))),tn(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(ee(156,e.tag))}function Ni(t){t.flags|=4}function Vu(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(jv())t.flags|=8192;else throw us=_c,qh}else t.flags&=-16777217}function qm(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!m_(e))if(jv())t.flags|=8192;else throw us=_c,qh}function fo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qg():536870912,t.lanes|=e,yr|=e)}function Xr(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function pM(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),qi(Xt),mr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Cs(e)?Ni(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Lu())),bt(e),null;case 26:var a=e.type,s=e.memoizedState;return t===null?(Ni(e),s!==null?(bt(e),qm(e,s)):(bt(e),Vu(e,a,null,i,n))):s?s!==t.memoizedState?(Ni(e),bt(e),qm(e,s)):(bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Ni(e),bt(e),Vu(e,a,t,i,n)),null;case 27:if(dc(e),n=Na.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return bt(e),null}t=Mi.current,Cs(e)?Mm(e):(t=d_(a,i,n),e.stateNode=t,Ni(e))}return bt(e),null;case 5:if(dc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return bt(e),null}if(s=Mi.current,Cs(e))Mm(e);else{var r=Lc(Na.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}s[nn]=e,s[Tn]=i;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(ln(s,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ni(e)}}return bt(e),Vu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ni(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Na.current,Cs(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=an,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[nn]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||o_(t.nodeValue,n)),t||Ha(e,!0)}else t=Lc(t).createTextNode(i),t[nn]=e,e.stateNode=t}return bt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Cs(e),n!==null){if(t===null){if(!i)throw Error(ee(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(557));t[nn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),t=!1}else n=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Dn(e),e):(Dn(e),null);if(e.flags&128)throw Error(ee(558))}return bt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Cs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[nn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bt(e),a=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Dn(e),e):(Dn(e),null)}return Dn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),fo(e,e.updateQueue),bt(e),null);case 4:return mr(),t===null&&xp(e.stateNode.containerInfo),bt(e),null;case 10:return qi(e.type),bt(e),null;case 19:if(en(Bt),i=e.memoizedState,i===null)return bt(e),null;if(a=(e.flags&128)!==0,s=i.rendering,s===null)if(a)Xr(i,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=yc(t),s!==null){for(e.flags|=128,Xr(i,!1),t=s.updateQueue,e.updateQueue=t,fo(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)bx(n,t),n=n.sibling;return Mt(Bt,Bt.current&1|2),Qe&&Fi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&On()>Rc&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304)}else{if(!a)if(t=yc(s),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,fo(e,t),Xr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Qe)return bt(e),null}else 2*On()-i.renderingStartTime>Rc&&n!==536870912&&(e.flags|=128,a=!0,Xr(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=On(),t.sibling=null,n=Bt.current,Mt(Bt,a?n&1|2:n&1),Qe&&Fi(e,i.treeForkCount),t):(bt(e),null);case 22:case 23:return Dn(e),Zh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),n=e.updateQueue,n!==null&&fo(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&en(cs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),qi(Xt),bt(e),null;case 25:return null;case 30:return null}throw Error(ee(156,e.tag))}function mM(t,e){switch(Xh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(Xt),mr(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return dc(e),null;case 31:if(e.memoizedState!==null){if(Dn(e),e.alternate===null)throw Error(ee(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Dn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return en(Bt),null;case 4:return mr(),null;case 10:return qi(e.type),null;case 22:case 23:return Dn(e),Zh(),t!==null&&en(cs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return qi(Xt),null;case 25:return null;default:return null}}function bv(t,e){switch(Xh(e),e.tag){case 3:qi(Xt),mr();break;case 26:case 27:case 5:dc(e);break;case 4:mr();break;case 31:e.memoizedState!==null&&Dn(e);break;case 13:Dn(e);break;case 19:en(Bt);break;case 10:qi(e.type);break;case 22:case 23:Dn(e),Zh(),t!==null&&en(cs);break;case 24:qi(Xt)}}function Wl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(l){dt(e,e.return,l)}}function Ga(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,l=r.destroy;if(l!==void 0){r.destroy=void 0,a=e;var o=n,c=l;try{c()}catch(d){dt(a,o,d)}}}i=i.next}while(i!==s)}}catch(d){dt(e,e.return,d)}}function Ev(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Lx(e,n)}catch(i){dt(t,t.return,i)}}}function Tv(t,e,n){n.props=gs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){dt(t,e,i)}}function gl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){dt(t,e,a)}}function _i(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){dt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){dt(t,e,a)}else n.current=null}function Av(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){dt(t,t.return,a)}}function ku(t,e,n){try{var i=t.stateNode;zM(i,t.type,n,e),i[Tn]=e}catch(a){dt(t,t.return,a)}}function Rv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Xu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ki));else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function Ac(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Wa(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ac(t,e,n),t=t.sibling;t!==null;)Ac(t,e,n),t=t.sibling}function Cv(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);ln(e,i,n),e[nn]=t,e[Tn]=n}catch(s){dt(t,t.return,s)}}var Hi=!1,kt=!1,Wu=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function gM(t,e){if(t=t.containerInfo,Md=zc,t=mx(t),Fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,l=-1,o=-1,c=0,d=0,p=t,u=null;t:for(;;){for(var h;p!==n||a!==0&&p.nodeType!==3||(l=r+a),p!==s||i!==0&&p.nodeType!==3||(o=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)u=p,p=h;for(;;){if(p===t)break t;if(u===n&&++c===a&&(l=r),u===s&&++d===i&&(o=r),(h=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=h}n=l===-1||o===-1?null:{start:l,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(bd={focusedElem:t,selectionRange:n},zc=!1,Jt=e;Jt!==null;)if(e=Jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Jt=t;else for(;Jt!==null;){switch(e=Jt,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var _=gs(n.type,a);t=i.getSnapshotBeforeUpdate(_,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(E){dt(n,n.return,E)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Td(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(ee(163))}if(t=e.sibling,t!==null){t.return=e.return,Jt=t;break}Jt=e.return}}function wv(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ui(t,n),i&4&&Wl(5,n);break;case 1:if(Ui(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){dt(n,n.return,r)}else{var a=gs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){dt(n,n.return,r)}}i&64&&Ev(n),i&512&&gl(n,n.return);break;case 3:if(Ui(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Lx(t,e)}catch(r){dt(n,n.return,r)}}break;case 27:e===null&&i&4&&Cv(n);case 26:case 5:Ui(t,n),e===null&&i&4&&Av(n),i&512&&gl(n,n.return);break;case 12:Ui(t,n);break;case 31:Ui(t,n),i&4&&Uv(t,n);break;case 13:Ui(t,n),i&4&&Lv(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=TM.bind(null,n),WM(t,n))));break;case 22:if(i=n.memoizedState!==null||Hi,!i){e=e!==null&&e.memoizedState!==null||kt,a=Hi;var s=kt;Hi=i,(kt=e)&&!s?Bi(t,n,(n.subtreeFlags&8772)!==0):Ui(t,n),Hi=a,kt=s}break;case 30:break;default:Ui(t,n)}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Lh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,Sn=!1;function Di(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 26:kt||_i(n,e),Di(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||_i(n,e);var i=Rt,a=Sn;Wa(n.type)&&(Rt=n.stateNode,Sn=!1),Di(t,e,n),Sl(n.stateNode),Rt=i,Sn=a;break;case 5:kt||_i(n,e);case 6:if(i=Rt,a=Sn,Rt=null,Di(t,e,n),Rt=i,Sn=a,Rt!==null)if(Sn)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(n.stateNode)}catch(s){dt(n,e,s)}else try{Rt.removeChild(n.stateNode)}catch(s){dt(n,e,s)}break;case 18:Rt!==null&&(Sn?(t=Rt,l0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Tr(t)):l0(Rt,n.stateNode));break;case 4:i=Rt,a=Sn,Rt=n.stateNode.containerInfo,Sn=!0,Di(t,e,n),Rt=i,Sn=a;break;case 0:case 11:case 14:case 15:Ga(2,n,e),kt||Ga(4,n,e),Di(t,e,n);break;case 1:kt||(_i(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Tv(n,e,i)),Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:kt=(i=kt)||n.memoizedState!==null,Di(t,e,n),kt=i;break;default:Di(t,e,n)}}function Uv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(n){dt(e,e.return,n)}}}function Lv(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(n){dt(e,e.return,n)}}function xM(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ym),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ym),e;default:throw Error(ee(435,t.tag))}}function ho(t,e){var n=xM(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=AM.bind(null,t,i);i.then(a,a)}})}function xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,l=r;e:for(;l!==null;){switch(l.tag){case 27:if(Wa(l.type)){Rt=l.stateNode,Sn=!1;break e}break;case 5:Rt=l.stateNode,Sn=!1;break e;case 3:case 4:Rt=l.stateNode.containerInfo,Sn=!0;break e}l=l.return}if(Rt===null)throw Error(ee(160));Dv(s,r,a),Rt=null,Sn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}var si=null;function Ov(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xn(e,t),vn(t),i&4&&(Ga(3,t,t.return),Wl(3,t),Ga(5,t,t.return));break;case 1:xn(e,t),vn(t),i&512&&(kt||n===null||_i(n,n.return)),i&64&&Hi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=si;if(xn(e,t),vn(t),i&512&&(kt||n===null||_i(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[Gl]||s[nn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),ln(s,i,n),s[nn]=t,$t(s),i=s;break e;case"link":var r=p0("link","href",a).get(i+(n.href||""));if(r){for(var l=0;l<r.length;l++)if(s=r[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(l,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;case"meta":if(r=p0("meta","content",a).get(i+(n.content||""))){for(l=0;l<r.length;l++)if(s=r[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(l,1);break t}}s=a.createElement(i),ln(s,i,n),a.head.appendChild(s);break;default:throw Error(ee(468,i))}s[nn]=t,$t(s),i=s}t.stateNode=i}else m0(a,t.type,t.stateNode);else t.stateNode=h0(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?m0(a,t.type,t.stateNode):h0(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&ku(t,t.memoizedProps,n.memoizedProps)}break;case 27:xn(e,t),vn(t),i&512&&(kt||n===null||_i(n,n.return)),n!==null&&i&4&&ku(t,t.memoizedProps,n.memoizedProps);break;case 5:if(xn(e,t),vn(t),i&512&&(kt||n===null||_i(n,n.return)),t.flags&32){a=t.stateNode;try{xr(a,"")}catch(_){dt(t,t.return,_)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,ku(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Wu=!0);break;case 6:if(xn(e,t),vn(t),i&4){if(t.stateNode===null)throw Error(ee(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(_){dt(t,t.return,_)}}break;case 3:if(tc=null,a=si,si=Oc(e.containerInfo),xn(e,t),si=a,vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(e.containerInfo)}catch(_){dt(t,t.return,_)}Wu&&(Wu=!1,Pv(t));break;case 4:i=si,si=Oc(t.stateNode.containerInfo),xn(e,t),vn(t),si=i;break;case 12:xn(e,t),vn(t);break;case 31:xn(e,t),vn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 13:xn(e,t),vn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=On()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 22:a=t.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,c=Hi,d=kt;if(Hi=c||a,kt=d||o,xn(e,t),kt=d,Hi=c,vn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||o||Hi||kt||ts(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){o=n=e;try{if(s=o.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{l=o.stateNode;var p=o.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;l.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){dt(o,o.return,_)}}}else if(e.tag===6){if(n===null){o=e;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(_){dt(o,o.return,_)}}}else if(e.tag===18){if(n===null){o=e;try{var h=o.stateNode;a?o0(h,!0):o0(o.stateNode,!1)}catch(_){dt(o,o.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,ho(t,n))));break;case 19:xn(e,t),vn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,ho(t,i)));break;case 30:break;case 21:break;default:xn(e,t),vn(t)}}function vn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Rv(i)){n=i;break}i=i.return}if(n==null)throw Error(ee(160));switch(n.tag){case 27:var a=n.stateNode,s=Xu(t);Ac(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(xr(r,""),n.flags&=-33);var l=Xu(t);Ac(t,l,r);break;case 3:case 4:var o=n.stateNode.containerInfo,c=Xu(t);md(t,c,o);break;default:throw Error(ee(161))}}catch(d){dt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pv(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Pv(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ui(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wv(t,e.alternate,e),e=e.sibling}function ts(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ga(4,e,e.return),ts(e);break;case 1:_i(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Tv(e,e.return,n),ts(e);break;case 27:Sl(e.stateNode);case 26:case 5:_i(e,e.return),ts(e);break;case 22:e.memoizedState===null&&ts(e);break;case 30:ts(e);break;default:ts(e)}t=t.sibling}}function Bi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:Bi(a,s,n),Wl(4,s);break;case 1:if(Bi(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){dt(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var l=i.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Ux(o[a],l)}catch(c){dt(i,i.return,c)}}n&&r&64&&Ev(s),gl(s,s.return);break;case 27:Cv(s);case 26:case 5:Bi(a,s,n),n&&i===null&&r&4&&Av(s),gl(s,s.return);break;case 12:Bi(a,s,n);break;case 31:Bi(a,s,n),n&&r&4&&Uv(a,s);break;case 13:Bi(a,s,n),n&&r&4&&Lv(a,s);break;case 22:s.memoizedState===null&&Bi(a,s,n),gl(s,s.return);break;case 30:break;default:Bi(a,s,n)}e=e.sibling}}function fp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&kl(n))}function dp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&kl(t))}function ti(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iv(t,e,n,i),e=e.sibling}function Iv(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),a&2048&&Wl(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&kl(t)));break;case 12:if(a&2048){ti(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,l=s.onPostCommit;typeof l=="function"&&l(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){dt(e,e.return,o)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?ti(t,e,n,i):xl(t,e):s._visibility&2?ti(t,e,n,i):(s._visibility|=2,Ws(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&fp(r,e);break;case 24:ti(t,e,n,i),a&2048&&dp(e.alternate,e);break;default:ti(t,e,n,i)}}function Ws(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,l=n,o=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ws(s,r,l,o,a),Wl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ws(s,r,l,o,a):xl(s,r):(d._visibility|=2,Ws(s,r,l,o,a)),a&&c&2048&&fp(r.alternate,r);break;case 24:Ws(s,r,l,o,a),a&&c&2048&&dp(r.alternate,r);break;default:Ws(s,r,l,o,a)}e=e.sibling}}function xl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:xl(n,i),a&2048&&fp(i.alternate,i);break;case 24:xl(n,i),a&2048&&dp(i.alternate,i);break;default:xl(n,i)}e=e.sibling}}var al=8192;function ws(t,e,n){if(t.subtreeFlags&al)for(t=t.child;t!==null;)zv(t,e,n),t=t.sibling}function zv(t,e,n){switch(t.tag){case 26:ws(t,e,n),t.flags&al&&t.memoizedState!==null&&ib(n,si,t.memoizedState,t.memoizedProps);break;case 5:ws(t,e,n);break;case 3:case 4:var i=si;si=Oc(t.stateNode.containerInfo),ws(t,e,n),si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=al,al=16777216,ws(t,e,n),al=i):ws(t,e,n));break;default:ws(t,e,n)}}function Bv(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Wr(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Jt=i,Hv(i,t)}Bv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fv(t),t=t.sibling}function Fv(t){switch(t.tag){case 0:case 11:case 15:Wr(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Wr(t);break;case 12:Wr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$o(t)):Wr(t);break;default:Wr(t)}}function $o(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Jt=i,Hv(i,t)}Bv(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ga(8,e,e.return),$o(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,$o(e));break;default:$o(e)}t=t.sibling}}function Hv(t,e){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:Ga(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Jt=i;else e:for(n=t;Jt!==null;){i=Jt;var a=i.sibling,s=i.return;if(Nv(i),i===n){Jt=null;break e}if(a!==null){a.return=s,Jt=a;break e}Jt=s}}}var vM={getCacheForType:function(t){var e=sn(Xt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return sn(Xt).controller.signal}},_M=typeof WeakMap=="function"?WeakMap:Map,lt=0,vt=null,je=null,Ye=0,ft=0,Nn=null,Aa=!1,Pr=!1,hp=!1,na=0,Ot=0,Va=0,fs=0,pp=0,Ln=0,yr=0,vl=null,yn=null,gd=!1,ru=0,Gv=0,Rc=1/0,Cc=null,Oa=null,jt=0,Pa=null,Mr=null,Yi=0,xd=0,vd=null,Vv=null,_l=0,_d=null;function zn(){return lt&2&&Ye!==0?Ye&-Ye:Le.T!==null?gp():Qg()}function kv(){if(Ln===0)if(!(Ye&536870912)||Qe){var t=ao;ao<<=1,!(ao&3932160)&&(ao=262144),Ln=t}else Ln=536870912;return t=Fn.current,t!==null&&(t.flags|=32),Ln}function Mn(t,e,n){(t===vt&&(ft===2||ft===9)||t.cancelPendingCommit!==null)&&(br(t,0),Ra(t,Ye,Ln,!1)),Hl(t,n),(!(lt&2)||t!==vt)&&(t===vt&&(!(lt&2)&&(fs|=n),Ot===4&&Ra(t,Ye,Ln,!1)),Ci(t))}function Xv(t,e,n){if(lt&6)throw Error(ee(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Fl(t,e),a=i?MM(t,e):ju(t,e,!0),s=i;do{if(a===0){Pr&&!i&&Ra(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!SM(n)){a=ju(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var l=t;a=vl;var o=l.current.memoizedState.isDehydrated;if(o&&(br(l,r).flags|=256),r=ju(l,r,!1),r!==2){if(hp&&!o){l.errorRecoveryDisabledLanes|=s,fs|=s,a=4;break e}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){br(t,0),Ra(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(ee(345));case 4:if((e&4194048)!==e)break;case 6:Ra(i,e,Ln,!Aa);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(ee(329))}if((e&62914560)===e&&(a=ru+300-On(),10<a)){if(Ra(i,e,Ln,!Aa),Zc(i,0,!0)!==0)break e;Yi=e,i.timeoutHandle=u_(Zm.bind(null,i,n,yn,Cc,gd,e,Ln,fs,yr,Aa,s,"Throttled",-0,0),a);break e}Zm(i,n,yn,Cc,gd,e,Ln,fs,yr,Aa,s,null,-0,0)}}break}while(!0);Ci(t)}function Zm(t,e,n,i,a,s,r,l,o,c,d,p,u,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},zv(e,s,p);var _=(s&62914560)===s?ru-On():(s&4194048)===s?Gv-On():0;if(_=ab(p,_),_!==null){Yi=s,t.cancelPendingCommit=_(Qm.bind(null,t,e,s,n,i,a,r,l,o,d,p,null,u,h)),Ra(t,s,r,!c);return}}Qm(t,e,s,n,i,a,r,l,o)}function SM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Bn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ra(t,e,n,i){e&=~pp,e&=~fs,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-In(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&Yg(t,n,e)}function lu(){return lt&6?!0:(jl(0),!1)}function mp(){if(je!==null){if(ft===0)var t=je.return;else t=je,Xi=Es=null,ep(t),cr=null,Rl=0,t=je;for(;t!==null;)bv(t.alternate,t),t=t.return;je=null}}function br(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,HM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Yi=0,mp(),vt=t,je=n=ji(t.current,null),Ye=e,ft=0,Nn=null,Aa=!1,Pr=Fl(t,e),hp=!1,yr=Ln=pp=fs=Va=Ot=0,yn=vl=null,gd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-In(i),s=1<<a;e|=t[a],i&=~s}return na=e,$c(),n}function Wv(t,e){He=null,Le.H=wl,e===Or||e===tu?(e=Rm(),ft=3):e===qh?(e=Rm(),ft=4):ft=e===cp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Nn=e,je===null&&(Ot=1,Ec(t,Zn(e,t.current)))}function jv(){var t=Fn.current;return t===null?!0:(Ye&4194048)===Ye?Jn===null:(Ye&62914560)===Ye||Ye&536870912?t===Jn:!1}function qv(){var t=Le.H;return Le.H=wl,t===null?wl:t}function Yv(){var t=Le.A;return Le.A=vM,t}function wc(){Ot=4,Aa||(Ye&4194048)!==Ye&&Fn.current!==null||(Pr=!0),!(Va&134217727)&&!(fs&134217727)||vt===null||Ra(vt,Ye,Ln,!1)}function ju(t,e,n){var i=lt;lt|=2;var a=qv(),s=Yv();(vt!==t||Ye!==e)&&(Cc=null,br(t,e)),e=!1;var r=Ot;e:do try{if(ft!==0&&je!==null){var l=je,o=Nn;switch(ft){case 8:mp(),r=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(e=!0);var c=ft;if(ft=0,Nn=null,ar(t,l,o,c),n&&Pr){r=0;break e}break;default:c=ft,ft=0,Nn=null,ar(t,l,o,c)}}yM(),r=Ot;break}catch(d){Wv(t,d)}while(!0);return e&&t.shellSuspendCounter++,Xi=Es=null,lt=i,Le.H=a,Le.A=s,je===null&&(vt=null,Ye=0,$c()),r}function yM(){for(;je!==null;)Zv(je)}function MM(t,e){var n=lt;lt|=2;var i=qv(),a=Yv();vt!==t||Ye!==e?(Cc=null,Rc=On()+500,br(t,e)):Pr=Fl(t,e);e:do try{if(ft!==0&&je!==null){e=je;var s=Nn;t:switch(ft){case 1:ft=0,Nn=null,ar(t,e,s,1);break;case 2:case 9:if(Am(s)){ft=0,Nn=null,Km(e);break}e=function(){ft!==2&&ft!==9||vt!==t||(ft=7),Ci(t)},s.then(e,e);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:Am(s)?(ft=0,Nn=null,Km(e)):(ft=0,Nn=null,ar(t,e,s,7));break;case 5:var r=null;switch(je.tag){case 26:r=je.memoizedState;case 5:case 27:var l=je;if(r?m_(r):l.stateNode.complete){ft=0,Nn=null;var o=l.sibling;if(o!==null)je=o;else{var c=l.return;c!==null?(je=c,ou(c)):je=null}break t}}ft=0,Nn=null,ar(t,e,s,5);break;case 6:ft=0,Nn=null,ar(t,e,s,6);break;case 8:mp(),Ot=6;break e;default:throw Error(ee(462))}}bM();break}catch(d){Wv(t,d)}while(!0);return Xi=Es=null,Le.H=i,Le.A=a,lt=n,je!==null?0:(vt=null,Ye=0,$c(),Ot)}function bM(){for(;je!==null&&!jS();)Zv(je)}function Zv(t){var e=Mv(t.alternate,t,na);t.memoizedProps=t.pendingProps,e===null?ou(t):je=e}function Km(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=km(n,e,e.pendingProps,e.type,void 0,Ye);break;case 11:e=km(n,e,e.pendingProps,e.type.render,e.ref,Ye);break;case 5:ep(e);default:bv(n,e),e=je=bx(e,na),e=Mv(n,e,na)}t.memoizedProps=t.pendingProps,e===null?ou(t):je=e}function ar(t,e,n,i){Xi=Es=null,ep(e),cr=null,Rl=0;var a=e.return;try{if(fM(t,a,e,n,Ye)){Ot=1,Ec(t,Zn(n,t.current)),je=null;return}}catch(s){if(a!==null)throw je=a,s;Ot=1,Ec(t,Zn(n,t.current)),je=null;return}e.flags&32768?(Qe||i===1?t=!0:Pr||Ye&536870912?t=!1:(Aa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Kv(e,t)):ou(e)}function ou(t){var e=t;do{if(e.flags&32768){Kv(e,Aa);return}t=e.return;var n=pM(e.alternate,e,na);if(n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Ot===0&&(Ot=5)}function Kv(t,e){do{var n=mM(t.alternate,t);if(n!==null){n.flags&=32767,je=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){je=t;return}je=t=n}while(t!==null);Ot=6,je=null}function Qm(t,e,n,i,a,s,r,l,o){t.cancelPendingCommit=null;do cu();while(jt!==0);if(lt&6)throw Error(ee(327));if(e!==null){if(e===t.current)throw Error(ee(177));if(s=e.lanes|e.childLanes,s|=Hh,ny(t,n,s,r,l,o),t===vt&&(je=vt=null,Ye=0),Mr=e,Pa=t,Yi=n,xd=s,vd=a,Vv=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,RM(hc,function(){return t_(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=ot.p,ot.p=2,r=lt,lt|=4;try{gM(t,e,n)}finally{lt=r,ot.p=a,Le.T=i}}jt=1,Qv(),Jv(),$v()}}function Qv(){if(jt===1){jt=0;var t=Pa,e=Mr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=ot.p;ot.p=2;var a=lt;lt|=4;try{Ov(e,t);var s=bd,r=mx(t.containerInfo),l=s.focusedElem,o=s.selectionRange;if(r!==l&&l&&l.ownerDocument&&px(l.ownerDocument.documentElement,l)){if(o!==null&&Fh(l)){var c=o.start,d=o.end;if(d===void 0&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var p=l.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var h=u.getSelection(),_=l.textContent.length,E=Math.min(o.start,_),m=o.end===void 0?E:Math.min(o.end,_);!h.extend&&E>m&&(r=m,m=E,E=r);var f=_m(l,E),x=_m(l,m);if(f&&x&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==x.node||h.focusOffset!==x.offset)){var M=p.createRange();M.setStart(f.node,f.offset),h.removeAllRanges(),E>m?(h.addRange(M),h.extend(x.node,x.offset)):(M.setEnd(x.node,x.offset),h.addRange(M))}}}}for(p=[],h=l;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++){var S=p[l];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}zc=!!Md,bd=Md=null}finally{lt=a,ot.p=i,Le.T=n}}t.current=e,jt=2}}function Jv(){if(jt===2){jt=0;var t=Pa,e=Mr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=ot.p;ot.p=2;var a=lt;lt|=4;try{wv(t,e.alternate,e)}finally{lt=a,ot.p=i,Le.T=n}}jt=3}}function $v(){if(jt===4||jt===3){jt=0,qS();var t=Pa,e=Mr,n=Yi,i=Vv;e.subtreeFlags&10256||e.flags&10256?jt=5:(jt=0,Mr=Pa=null,e_(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Oa=null),Uh(n),e=e.stateNode,Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=ot.p,ot.p=2,Le.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var l=i[r];s(l.value,{componentStack:l.stack})}}finally{Le.T=e,ot.p=a}}Yi&3&&cu(),Ci(t),a=t.pendingLanes,n&261930&&a&42?t===_d?_l++:(_l=0,_d=t):_l=0,jl(0)}}function e_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,kl(e)))}function cu(){return Qv(),Jv(),$v(),t_()}function t_(){if(jt!==5)return!1;var t=Pa,e=xd;xd=0;var n=Uh(Yi),i=Le.T,a=ot.p;try{ot.p=32>n?32:n,Le.T=null,n=vd,vd=null;var s=Pa,r=Yi;if(jt=0,Mr=Pa=null,Yi=0,lt&6)throw Error(ee(331));var l=lt;if(lt|=4,Fv(s.current),Iv(s,s.current,r,n),lt=l,jl(0,!1),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Bl,s)}catch{}return!0}finally{ot.p=a,Le.T=i,e_(t,e)}}function Jm(t,e,n){e=Zn(n,e),e=dd(t.stateNode,e,2),t=La(t,e,2),t!==null&&(Hl(t,2),Ci(t))}function dt(t,e,n){if(t.tag===3)Jm(t,t,n);else for(;e!==null;){if(e.tag===3){Jm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oa===null||!Oa.has(i))){t=Zn(n,t),n=gv(2),i=La(e,n,2),i!==null&&(xv(n,i,e,t),Hl(i,2),Ci(i));break}}e=e.return}}function qu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _M;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(hp=!0,a.add(n),t=EM.bind(null,t,e,n),e.then(t,t))}function EM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,vt===t&&(Ye&n)===n&&(Ot===4||Ot===3&&(Ye&62914560)===Ye&&300>On()-ru?!(lt&2)&&br(t,0):pp|=n,yr===Ye&&(yr=0)),Ci(t)}function n_(t,e){e===0&&(e=qg()),t=bs(t,e),t!==null&&(Hl(t,e),Ci(t))}function TM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function AM(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(ee(314))}i!==null&&i.delete(e),n_(t,n)}function RM(t,e){return Nh(t,e)}var Nc=null,js=null,Sd=!1,Dc=!1,Yu=!1,Ca=0;function Ci(t){t!==js&&t.next===null&&(js===null?Nc=js=t:js=js.next=t),Dc=!0,Sd||(Sd=!0,wM())}function jl(t,e){if(!Yu&&Dc){Yu=!0;do for(var n=!1,i=Nc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,l=i.pingedLanes;s=(1<<31-In(42|t)+1)-1,s&=a&~(r&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,$m(i,s))}else s=Ye,s=Zc(i,i===vt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Fl(i,s)||(n=!0,$m(i,s));i=i.next}while(n);Yu=!1}}function CM(){i_()}function i_(){Dc=Sd=!1;var t=0;Ca!==0&&FM()&&(t=Ca);for(var e=On(),n=null,i=Nc;i!==null;){var a=i.next,s=a_(i,e);s===0?(i.next=null,n===null?Nc=a:n.next=a,a===null&&(js=n)):(n=i,(t!==0||s&3)&&(Dc=!0)),i=a}jt!==0&&jt!==5||jl(t),Ca!==0&&(Ca=0)}function a_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-In(s),l=1<<r,o=a[r];o===-1?(!(l&n)||l&i)&&(a[r]=ty(l,e)):o<=e&&(t.expiredLanes|=l),s&=~l}if(e=vt,n=Ye,n=Zc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ft===2||ft===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Mu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Fl(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Mu(i),Uh(n)){case 2:case 8:n=Wg;break;case 32:n=hc;break;case 268435456:n=jg;break;default:n=hc}return i=s_.bind(null,t),n=Nh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Mu(i),t.callbackPriority=2,t.callbackNode=null,2}function s_(t,e){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(cu()&&t.callbackNode!==n)return null;var i=Ye;return i=Zc(t,t===vt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Xv(t,i,e),a_(t,On()),t.callbackNode!=null&&t.callbackNode===n?s_.bind(null,t):null)}function $m(t,e){if(cu())return null;Xv(t,e,!0)}function wM(){GM(function(){lt&6?Nh(Xg,CM):i_()})}function gp(){if(Ca===0){var t=vr;t===0&&(t=io,io<<=1,!(io&261888)&&(io=256)),Ca=t}return Ca}function e0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function t0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function NM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=e0((a[Tn]||null).action),r=i.submitter;r&&(e=(e=r[Tn]||null)?e0(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var l=new Kc("action","action",null,i,a);t.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ca!==0){var o=r?t0(a,r):new FormData(a);ud(n,{pending:!0,data:o,method:a.method,action:s},null,o)}}else typeof s=="function"&&(l.preventDefault(),o=r?t0(a,r):new FormData(a),ud(n,{pending:!0,data:o,method:a.method,action:s},s,o))},currentTarget:a}]})}}for(var Zu=0;Zu<Jf.length;Zu++){var Ku=Jf[Zu],DM=Ku.toLowerCase(),UM=Ku[0].toUpperCase()+Ku.slice(1);ci(DM,"on"+UM)}ci(xx,"onAnimationEnd");ci(vx,"onAnimationIteration");ci(_x,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Yy,"onTransitionRun");ci(Zy,"onTransitionStart");ci(Ky,"onTransitionCancel");ci(Sx,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nl));function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var l=i[r],o=l.instance,c=l.currentTarget;if(l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=o}else for(r=0;r<i.length;r++){if(l=i[r],o=l.instance,c=l.currentTarget,l=l.listener,o!==s&&a.isPropagationStopped())break e;s=l,a.currentTarget=c;try{s(a)}catch(d){mc(d)}a.currentTarget=null,s=o}}}}function We(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var po="_reactListening"+Math.random().toString(36).slice(2);function xp(t){if(!t[po]){t[po]=!0,Jg.forEach(function(n){n!=="selectionchange"&&(LM.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[po]||(e[po]=!0,Qu("selectionchange",!1,e))}}function l_(t,e,n,i){switch(S_(e)){case 2:var a=lb;break;case 8:a=ob;break;default:a=yp}n=a.bind(null,e,n,t),a=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Ju(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var l=i.stateNode.containerInfo;if(l===a)break;if(r===4)for(r=i.return;r!==null;){var o=r.tag;if((o===3||o===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;l!==null;){if(r=Zs(l),r===null)return;if(o=r.tag,o===5||o===6||o===26||o===27){i=s=r;continue e}l=l.parentNode}}i=i.return}rx(function(){var c=s,d=Ph(n),p=[];e:{var u=yx.get(t);if(u!==void 0){var h=Kc,_=t;switch(t){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":h=Ay;break;case"focusin":_="focus",h=Ru;break;case"focusout":_="blur",h=Ru;break;case"beforeblur":case"afterblur":h=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=wy;break;case xx:case vx:case _x:h=xy;break;case Sx:h=Dy;break;case"scroll":case"scrollend":h=dy;break;case"wheel":h=Ly;break;case"copy":case"cut":case"paste":h=_y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=fm;break;case"toggle":case"beforetoggle":h=Py}var E=(e&4)!==0,m=!E&&(t==="scroll"||t==="scrollend"),f=E?u!==null?u+"Capture":null:u;E=[];for(var x=c,M;x!==null;){var S=x;if(M=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||M===null||f===null||(S=Ml(x,f),S!=null&&E.push(Dl(x,S,M))),m)break;x=x.return}0<E.length&&(u=new h(u,_,null,n,d),p.push({event:u,listeners:E}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==Yf&&(_=n.relatedTarget||n.fromElement)&&(Zs(_)||_[Dr]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(_=n.relatedTarget||n.toElement,h=c,_=_?Zs(_):null,_!==null&&(m=zl(_),E=_.tag,_!==m||E!==5&&E!==27&&E!==6)&&(_=null)):(h=null,_=c),h!==_)){if(E=cm,S="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=fm,S="onPointerLeave",f="onPointerEnter",x="pointer"),m=h==null?u:nl(h),M=_==null?u:nl(_),u=new E(S,x+"leave",h,n,d),u.target=m,u.relatedTarget=M,S=null,Zs(d)===c&&(E=new E(f,x+"enter",_,n,d),E.target=M,E.relatedTarget=m,S=E),m=S,h&&_)t:{for(E=OM,f=h,x=_,M=0,S=f;S;S=E(S))M++;S=0;for(var T=x;T;T=E(T))S++;for(;0<M-S;)f=E(f),M--;for(;0<S-M;)x=E(x),S--;for(;M--;){if(f===x||x!==null&&f===x.alternate){E=f;break t}f=E(f),x=E(x)}E=null}else E=null;h!==null&&n0(p,u,h,E,!1),_!==null&&m!==null&&n0(p,m,_,E,!0)}}e:{if(u=c?nl(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var R=mm;else if(pm(u))if(dx)R=Wy;else{R=ky;var C=Vy}else h=u.nodeName,!h||h.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Oh(c.elementType)&&(R=mm):R=Xy;if(R&&(R=R(t,c))){fx(p,R,n,d);break e}C&&C(t,u,c),t==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&qf(u,"number",u.value)}switch(C=c?nl(c):window,t){case"focusin":(pm(C)||C.contentEditable==="true")&&(Js=C,Kf=c,ul=null);break;case"focusout":ul=Kf=Js=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,Sm(p,n,d);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":Sm(p,n,d)}var v;if(Bh)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Qs?cx(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(ox&&n.locale!=="ko"&&(Qs||A!=="onCompositionStart"?A==="onCompositionEnd"&&Qs&&(v=lx()):(Ta=d,Ih="value"in Ta?Ta.value:Ta.textContent,Qs=!0)),C=Uc(c,A),0<C.length&&(A=new um(A,t,null,n,d),p.push({event:A,listeners:C}),v?A.data=v:(v=ux(n),v!==null&&(A.data=v)))),(v=zy?By(t,n):Fy(t,n))&&(A=Uc(c,"onBeforeInput"),0<A.length&&(C=new um("onBeforeInput","beforeinput",null,n,d),p.push({event:C,listeners:A}),C.data=v)),NM(p,t,c,n,d)}r_(p,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Ml(t,n),a!=null&&i.unshift(Dl(t,a,s)),a=Ml(t,e),a!=null&&i.push(Dl(t,a,s))),t.tag===3)return i;t=t.return}return[]}function OM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var l=n,o=l.alternate,c=l.stateNode;if(l=l.tag,o!==null&&o===i)break;l!==5&&l!==26&&l!==27||c===null||(o=c,a?(c=Ml(n,s),c!=null&&r.unshift(Dl(n,c,o))):a||(c=Ml(n,s),c!=null&&r.push(Dl(n,c,o)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var PM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function i0(t){return(typeof t=="string"?t:""+t).replace(PM,`
`).replace(IM,"")}function o_(t,e){return e=i0(e),i0(t)===e}function pt(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||xr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&xr(t,""+i);break;case"className":ro(t,"class",i);break;case"tabIndex":ro(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ro(t,n,i);break;case"style":sx(t,i,s);break;case"data":if(e!=="object"){ro(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xo(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&pt(t,e,"name",a.name,a,null),pt(t,e,"formEncType",a.formEncType,a,null),pt(t,e,"formMethod",a.formMethod,a,null),pt(t,e,"formTarget",a.formTarget,a,null)):(pt(t,e,"encType",a.encType,a,null),pt(t,e,"method",a.method,a,null),pt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=Xo(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=ki);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=Xo(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":We("beforetoggle",t),We("toggle",t),ko(t,"popover",i);break;case"xlinkActuate":wi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ko(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=uy.get(n)||n,ko(t,n,i))}}function yd(t,e,n,i,a,s){switch(n){case"style":sx(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(ee(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(ee(60));t.innerHTML=n}}break;case"children":typeof i=="string"?xr(t,i):(typeof i=="number"||typeof i=="bigint")&&xr(t,""+i);break;case"onScroll":i!=null&&We("scroll",t);break;case"onScrollEnd":i!=null&&We("scrollend",t);break;case"onClick":i!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$g.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[Tn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):ko(t,n,i)}}}function ln(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",t),We("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:pt(t,e,s,r,n,null)}}a&&pt(t,e,"srcSet",n.srcSet,n,null),i&&pt(t,e,"src",n.src,n,null);return;case"input":We("invalid",t);var l=s=r=a=null,o=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":o=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(ee(137,e));break;default:pt(t,e,i,d,n,null)}}nx(t,s,l,o,c,r,a,!1);return;case"select":We("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":s=l;break;case"defaultValue":r=l;break;case"multiple":i=l;default:pt(t,e,a,l,n,null)}e=s,n=r,t.multiple=!!i,e!=null?rr(t,!!i,e,!1):n!=null&&rr(t,!!i,n,!0);return;case"textarea":We("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":i=l;break;case"defaultValue":a=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(ee(91));break;default:pt(t,e,r,l,n,null)}ax(t,i,a,s);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(i=n[o],i!=null))switch(o){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(t,e,o,i,n,null)}return;case"dialog":We("beforetoggle",t),We("toggle",t),We("cancel",t),We("close",t);break;case"iframe":case"object":We("load",t);break;case"video":case"audio":for(i=0;i<Nl.length;i++)We(Nl[i],t);break;case"image":We("error",t),We("load",t);break;case"details":We("toggle",t);break;case"embed":case"source":case"link":We("error",t),We("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(ee(137,e));default:pt(t,e,c,i,n,null)}return;default:if(Oh(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&yd(t,e,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&pt(t,e,l,i,n,null))}function zM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,l=null,o=null,c=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":o=p;default:i.hasOwnProperty(h)||pt(t,e,h,null,i,p)}}for(var u in i){var h=i[u];if(p=n[u],i.hasOwnProperty(u)&&(h!=null||p!=null))switch(u){case"type":s=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":r=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ee(137,e));break;default:h!==p&&pt(t,e,u,h,i,p)}}jf(t,r,l,o,c,d,s,a);return;case"select":h=r=l=u=null;for(s in n)if(o=n[s],n.hasOwnProperty(s)&&o!=null)switch(s){case"value":break;case"multiple":h=o;default:i.hasOwnProperty(s)||pt(t,e,s,null,i,o)}for(a in i)if(s=i[a],o=n[a],i.hasOwnProperty(a)&&(s!=null||o!=null))switch(a){case"value":u=s;break;case"defaultValue":l=s;break;case"multiple":r=s;default:s!==o&&pt(t,e,a,s,i,o)}e=l,n=r,i=h,u!=null?rr(t,!!n,u,!1):!!i!=!!n&&(e!=null?rr(t,!!n,e,!0):rr(t,!!n,n?[]:"",!1));return;case"textarea":h=u=null;for(l in n)if(a=n[l],n.hasOwnProperty(l)&&a!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:pt(t,e,l,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":u=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(ee(91));break;default:a!==s&&pt(t,e,r,a,i,s)}ix(t,u,h);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:pt(t,e,_,null,i,u)}for(o in i)if(u=i[o],h=n[o],i.hasOwnProperty(o)&&u!==h&&(u!=null||h!=null))switch(o){case"selected":t.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:pt(t,e,o,u,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in n)u=n[E],n.hasOwnProperty(E)&&u!=null&&!i.hasOwnProperty(E)&&pt(t,e,E,null,i,u);for(c in i)if(u=i[c],h=n[c],i.hasOwnProperty(c)&&u!==h&&(u!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(ee(137,e));break;default:pt(t,e,c,u,i,h)}return;default:if(Oh(e)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&yd(t,e,m,void 0,i,u);for(d in i)u=i[d],h=n[d],!i.hasOwnProperty(d)||u===h||u===void 0&&h===void 0||yd(t,e,d,u,i,h);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&pt(t,e,f,null,i,u);for(p in i)u=i[p],h=n[p],!i.hasOwnProperty(p)||u===h||u==null&&h==null||pt(t,e,p,u,i,h)}function a0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],s=a.transferSize,r=a.initiatorType,l=a.duration;if(s&&l&&a0(r)){for(r=0,l=a.responseEnd,i+=1;i<n.length;i++){var o=n[i],c=o.startTime;if(c>l)break;var d=o.transferSize,p=o.initiatorType;d&&a0(p)&&(o=o.responseEnd,r+=d*(o<l?1:(l-c)/(o-c)))}if(--i,e+=8*(s+r)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Md=null,bd=null;function Lc(t){return t.nodeType===9?t:t.ownerDocument}function s0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function c_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=null;function FM(){var t=window.event;return t&&t.type==="popstate"?t===$u?!1:($u=t,!0):($u=null,!1)}var u_=typeof setTimeout=="function"?setTimeout:void 0,HM=typeof clearTimeout=="function"?clearTimeout:void 0,r0=typeof Promise=="function"?Promise:void 0,GM=typeof queueMicrotask=="function"?queueMicrotask:typeof r0<"u"?function(t){return r0.resolve(null).then(t).catch(VM)}:u_;function VM(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function l0(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),Tr(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Sl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Sl(n);for(var s=n.firstChild;s;){var r=s.nextSibling,l=s.nodeName;s[Gl]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=r}}else n==="body"&&Sl(t.ownerDocument.body);n=a}while(n);Tr(e)}function o0(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Td(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Lh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function kM(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Gl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=$n(t.nextSibling),t===null)break}return null}function XM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=$n(t.nextSibling),t===null))return null;return t}function f_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=$n(t.nextSibling),t===null))return null;return t}function Ad(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function WM(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Cd=null;function c0(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return $n(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function u0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function d_(t,e,n){switch(e=Lc(n),t){case"html":if(t=e.documentElement,!t)throw Error(ee(452));return t;case"head":if(t=e.head,!t)throw Error(ee(453));return t;case"body":if(t=e.body,!t)throw Error(ee(454));return t;default:throw Error(ee(451))}}function Sl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Lh(t)}var ei=new Map,f0=new Set;function Oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=ot.d;ot.d={f:jM,r:qM,D:YM,C:ZM,L:KM,m:QM,X:$M,S:JM,M:eb};function jM(){var t=ra.f(),e=lu();return t||e}function qM(t){var e=Ur(t);e!==null&&e.tag===5&&e.type==="form"?sv(e):ra.r(t)}var Ir=typeof document>"u"?null:document;function h_(t,e,n){var i=Ir;if(i&&typeof e=="string"&&e){var a=Yn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),f0.has(a)||(f0.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),ln(e,"link",t),$t(e),i.head.appendChild(e)))}}function YM(t){ra.D(t),h_("dns-prefetch",t,null)}function ZM(t,e){ra.C(t,e),h_("preconnect",t,e)}function KM(t,e,n){ra.L(t,e,n);var i=Ir;if(i&&t&&e){var a='link[rel="preload"][as="'+Yn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Yn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Yn(n.imageSizes)+'"]')):a+='[href="'+Yn(t)+'"]';var s=a;switch(e){case"style":s=Er(t);break;case"script":s=zr(t)}ei.has(s)||(t=At({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ei.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(ql(s))||e==="script"&&i.querySelector(Yl(s))||(e=i.createElement("link"),ln(e,"link",t),$t(e),i.head.appendChild(e)))}}function QM(t,e){ra.m(t,e);var n=Ir;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Yn(i)+'"][href="'+Yn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=zr(t)}if(!ei.has(s)&&(t=At({rel:"modulepreload",href:t},e),ei.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yl(s)))return}i=n.createElement("link"),ln(i,"link",t),$t(i),n.head.appendChild(i)}}}function JM(t,e,n){ra.S(t,e,n);var i=Ir;if(i&&t){var a=sr(i).hoistableStyles,s=Er(t);e=e||"default";var r=a.get(s);if(!r){var l={loading:0,preload:null};if(r=i.querySelector(ql(s)))l.loading=5;else{t=At({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ei.get(s))&&vp(t,n);var o=r=i.createElement("link");$t(o),ln(o,"link",t),o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),o.addEventListener("load",function(){l.loading|=1}),o.addEventListener("error",function(){l.loading|=2}),l.loading|=4,ec(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:l},a.set(s,r)}}}function $M(t,e){ra.X(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Yl(a)),s||(t=At({src:t,async:!0},e),(e=ei.get(a))&&_p(t,e),s=n.createElement("script"),$t(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function eb(t,e){ra.M(t,e);var n=Ir;if(n&&t){var i=sr(n).hoistableScripts,a=zr(t),s=i.get(a);s||(s=n.querySelector(Yl(a)),s||(t=At({src:t,async:!0,type:"module"},e),(e=ei.get(a))&&_p(t,e),s=n.createElement("script"),$t(s),ln(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function d0(t,e,n,i){var a=(a=Na.current)?Oc(a):null;if(!a)throw Error(ee(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Er(n.href),n=sr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Er(n.href);var s=sr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(ql(t)))&&!s._p&&(r.instance=s,r.state.loading=5),ei.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ei.set(t,n),s||tb(a,t,n,r.state))),e&&i===null)throw Error(ee(528,""));return r}if(e&&i!==null)throw Error(ee(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=zr(n),n=sr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(ee(444,t))}}function Er(t){return'href="'+Yn(t)+'"'}function ql(t){return'link[rel="stylesheet"]['+t+"]"}function p_(t){return At({},t,{"data-precedence":t.precedence,precedence:null})}function tb(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),ln(e,"link",n),$t(e),t.head.appendChild(e))}function zr(t){return'[src="'+Yn(t)+'"]'}function Yl(t){return"script[async]"+t}function h0(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Yn(n.href)+'"]');if(i)return e.instance=i,$t(i),i;var a=At({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),$t(i),ln(i,"style",a),ec(i,n.precedence,t),e.instance=i;case"stylesheet":a=Er(n.href);var s=t.querySelector(ql(a));if(s)return e.state.loading|=4,e.instance=s,$t(s),s;i=p_(n),(a=ei.get(a))&&vp(i,a),s=(t.ownerDocument||t).createElement("link"),$t(s);var r=s;return r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),ln(s,"link",i),e.state.loading|=4,ec(s,n.precedence,t),e.instance=s;case"script":return s=zr(n.src),(a=t.querySelector(Yl(s)))?(e.instance=a,$t(a),a):(i=n,(a=ei.get(s))&&(i=At({},n),_p(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),$t(a),ln(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(ee(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,ec(i,n.precedence,t));return e.instance}function ec(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var l=i[r];if(l.dataset.precedence===e)s=l;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function _p(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var tc=null;function p0(t,e,n){if(tc===null){var i=new Map,a=tc=new Map;a.set(n,i)}else a=tc,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[Gl]||s[nn]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var l=i.get(r);l?l.push(s):i.set(r,[s])}}return i}function m0(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function nb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function m_(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function ib(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Er(i.href),s=e.querySelector(ql(a));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Pc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,$t(s);return}s=e.ownerDocument||e,i=p_(i),(a=ei.get(a))&&vp(i,a),s=s.createElement("link"),$t(s);var r=s;r._p=new Promise(function(l,o){r.onload=l,r.onerror=o}),ln(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Pc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ef=0;function ab(t,e){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&ef===0&&(ef=62500*BM());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>ef?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ic=null;function nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ic=new Map,e.forEach(sb,t),Ic=null,Pc.call(t))}function sb(t,e){if(!(e.state.loading&4)){var n=Ic.get(t);if(n)var i=n.get(null);else{n=new Map,Ic.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=Pc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var Ul={$$typeof:Vi,Provider:null,Consumer:null,_currentValue:ls,_currentValue2:ls,_threadCount:0};function rb(t,e,n,i,a,s,r,l,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.hiddenUpdates=bu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function g_(t,e,n,i,a,s,r,l,o,c,d,p){return t=new rb(t,e,n,r,o,c,d,p,l),e=1,s===!0&&(e|=24),s=Un(3,null,null,e),t.current=s,s.stateNode=t,e=Wh(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},Yh(s),t}function x_(t){return t?(t=tr,t):tr}function v_(t,e,n,i,a,s){a=x_(a),i.context===null?i.context=a:i.pendingContext=a,i=Ua(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=La(t,i,e),n!==null&&(Mn(n,t,e),dl(n,t,e))}function g0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sp(t,e){g0(t,e),(t=t.alternate)&&g0(t,e)}function __(t){if(t.tag===13||t.tag===31){var e=bs(t,67108864);e!==null&&Mn(e,t,67108864),Sp(t,67108864)}}function x0(t){if(t.tag===13||t.tag===31){var e=zn();e=Dh(e);var n=bs(t,e);n!==null&&Mn(n,t,e),Sp(t,e)}}var zc=!0;function lb(t,e,n,i){var a=Le.T;Le.T=null;var s=ot.p;try{ot.p=2,yp(t,e,n,i)}finally{ot.p=s,Le.T=a}}function ob(t,e,n,i){var a=Le.T;Le.T=null;var s=ot.p;try{ot.p=8,yp(t,e,n,i)}finally{ot.p=s,Le.T=a}}function yp(t,e,n,i){if(zc){var a=wd(i);if(a===null)Ju(t,e,i,Bc,n),v0(t,i);else if(ub(a,t,e,n,i))i.stopPropagation();else if(v0(t,i),e&4&&-1<cb.indexOf(t)){for(;a!==null;){var s=Ur(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=$a(s.pendingLanes);if(r!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;r;){var o=1<<31-In(r);l.entanglements[1]|=o,r&=~o}Ci(s),!(lt&6)&&(Rc=On()+500,jl(0))}}break;case 31:case 13:l=bs(s,2),l!==null&&Mn(l,s,2),lu(),Sp(s,2)}if(s=wd(i),s===null&&Ju(t,e,i,Bc,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Ju(t,e,i,null,n)}}function wd(t){return t=Ph(t),Mp(t)}var Bc=null;function Mp(t){if(Bc=null,t=Zs(t),t!==null){var e=zl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Fg(e),t!==null)return t;t=null}else if(n===31){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Bc=t,null}function S_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(YS()){case Xg:return 2;case Wg:return 8;case hc:case ZS:return 32;case jg:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ia=null,za=null,Ba=null,Ll=new Map,Ol=new Map,Ma=[],cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v0(t,e){switch(t){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Ll.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(e.pointerId)}}function jr(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Ur(e),e!==null&&__(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function ub(t,e,n,i,a){switch(e){case"focusin":return Ia=jr(Ia,t,e,n,i,a),!0;case"dragenter":return za=jr(za,t,e,n,i,a),!0;case"mouseover":return Ba=jr(Ba,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Ll.set(s,jr(Ll.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ol.set(s,jr(Ol.get(s)||null,t,e,n,i,a)),!0}return!1}function y_(t){var e=Zs(t.target);if(e!==null){var n=zl(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,nm(t.priority,function(){x0(n)});return}}else if(e===31){if(e=Hg(n),e!==null){t.blockedOn=e,nm(t.priority,function(){x0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ic(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Yf=i,n.target.dispatchEvent(i),Yf=null}else return e=Ur(n),e!==null&&__(e),t.blockedOn=n,!1;e.shift()}return!0}function _0(t,e,n){ic(t)&&n.delete(e)}function fb(){Nd=!1,Ia!==null&&ic(Ia)&&(Ia=null),za!==null&&ic(za)&&(za=null),Ba!==null&&ic(Ba)&&(Ba=null),Ll.forEach(_0),Ol.forEach(_0)}function mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,fb)))}var go=null;function S0(t){go!==t&&(go=t,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,function(){go===t&&(go=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Mp(i||n)===null)continue;break}var s=Ur(n);s!==null&&(t.splice(e,3),e-=3,ud(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Tr(t){function e(o){return mo(o,t)}Ia!==null&&mo(Ia,t),za!==null&&mo(za,t),Ba!==null&&mo(Ba,t),Ll.forEach(e),Ol.forEach(e);for(var n=0;n<Ma.length;n++){var i=Ma[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Ma.length&&(n=Ma[0],n.blockedOn===null);)y_(n),n.blockedOn===null&&Ma.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[Tn]||null;if(typeof s=="function")r||S0(n);else if(r){var l=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[Tn]||null)l=r.formAction;else if(Mp(a)!==null)continue}else l=r.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),S0(n)}}}function M_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function bp(t){this._internalRoot=t}uu.prototype.render=bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));var n=e.current,i=zn();v_(n,i,t,e,null,null)};uu.prototype.unmount=bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;v_(t.current,2,null,t,null,null),lu(),e[Dr]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ma.length&&e!==0&&e<Ma[n].priority;n++);Ma.splice(n,0,t),n===0&&y_(t)}};var y0=zg.version;if(y0!=="19.2.8")throw Error(ee(527,y0,"19.2.8"));ot.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=GS(e),t=t!==null?Gg(t):null,t=t===null?null:t.stateNode,t};var db={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Bl=xo.inject(db),Pn=xo}catch{}}qc.createRoot=function(t,e){if(!Bg(t))throw Error(ee(299));var n=!1,i="",a=hv,s=pv,r=mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=g_(t,1,!1,null,null,n,i,null,a,s,r,M_),t[Dr]=e.current,xp(t),new bp(e)};qc.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(ee(299));var i=!1,a="",s=hv,r=pv,l=mv,o=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),e=g_(t,1,!0,e,n??null,i,a,o,s,r,l,M_),e.context=x_(null),n=e.current,i=zn(),i=Dh(i),a=Ua(i),a.callback=null,La(n,a,i),n=i,e.current.lanes=n,Hl(e,n),Ci(e),t[Dr]=e.current,xp(t),new uu(e)};qc.version="19.2.8";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),Dg.exports=qc;var hb=Dg.exports;const pb=yg(hb);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="185",mb=0,M0=1,gb=2,ac=1,xb=2,sl=3,ka=0,bn=1,Gi=2,Zi=0,dr=1,Dd=2,b0=3,E0=4,vb=5,is=100,_b=101,Sb=102,yb=103,Mb=104,bb=200,Eb=201,Tb=202,Ab=203,Ud=204,Ld=205,Rb=206,Cb=207,wb=208,Nb=209,Db=210,Ub=211,Lb=212,Ob=213,Pb=214,Od=0,Pd=1,Id=2,Ar=3,zd=4,Bd=5,Fd=6,Hd=7,E_=0,Ib=1,zb=2,bi=0,T_=1,A_=2,R_=3,C_=4,w_=5,N_=6,D_=7,U_=300,xs=301,Rr=302,tf=303,nf=304,fu=306,Gd=1e3,Wi=1001,Vd=1002,rn=1003,Bb=1004,vo=1005,fn=1006,af=1007,ss=1008,Qn=1009,L_=1010,O_=1011,Pl=1012,Tp=1013,Ti=1014,Si=1015,ia=1016,Ap=1017,Rp=1018,Il=1020,P_=35902,I_=35899,z_=1021,B_=1022,li=1023,aa=1026,rs=1027,F_=1028,Cp=1029,vs=1030,wp=1031,Np=1033,sc=33776,rc=33777,lc=33778,oc=33779,kd=35840,Xd=35841,Wd=35842,jd=35843,qd=36196,Yd=37492,Zd=37496,Kd=37488,Qd=37489,Fc=37490,Jd=37491,$d=37808,eh=37809,th=37810,nh=37811,ih=37812,ah=37813,sh=37814,rh=37815,lh=37816,oh=37817,ch=37818,uh=37819,fh=37820,dh=37821,hh=36492,ph=36494,mh=36495,gh=36283,xh=36284,Hc=36285,vh=36286,Fb=3200,T0=0,Hb=1,ba="",kn="srgb",Gc="srgb-linear",Vc="linear",ut="srgb",Ns=7680,A0=519,Gb=512,Vb=513,kb=514,Dp=515,Xb=516,Wb=517,Up=518,jb=519,R0=35044,C0="300 es",yi=2e3,kc=2001;function qb(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yb(){const t=Xc("canvas");return t.style.display="block",t}const w0={};function N0(...t){const e="THREE."+t.shift();console.log(e,...t)}function H_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=H_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function tt(...t){t=H_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hr(...t){const e=t.join(" ");e in w0||(w0[e]=!0,Oe(...t))}function Zb(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Kb={[Od]:Pd,[Id]:Fd,[zd]:Hd,[Ar]:Bd,[Pd]:Od,[Fd]:Id,[Hd]:zd,[Bd]:Ar};class Ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,_h=180/Math.PI;function Zl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Qb(t,e){return(t%e+e)%e}function rf(t,e,n){return(1-n)*t+n*e}function qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Op=class Op{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Op.prototype.isVector2=!0;let ct=Op;class Br{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,l){let o=i[a+0],c=i[a+1],d=i[a+2],p=i[a+3],u=s[r+0],h=s[r+1],_=s[r+2],E=s[r+3];if(p!==E||o!==u||c!==h||d!==_){let m=o*u+c*h+d*_+p*E;m<0&&(u=-u,h=-h,_=-_,E=-E,m=-m);let f=1-l;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);f=Math.sin(f*x)/M,l=Math.sin(l*x)/M,o=o*f+u*l,c=c*f+h*l,d=d*f+_*l,p=p*f+E*l}else{o=o*f+u*l,c=c*f+h*l,d=d*f+_*l,p=p*f+E*l;const x=1/Math.sqrt(o*o+c*c+d*d+p*p);o*=x,c*=x,d*=x,p*=x}}e[n]=o,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,a,s,r){const l=i[a],o=i[a+1],c=i[a+2],d=i[a+3],p=s[r],u=s[r+1],h=s[r+2],_=s[r+3];return e[n]=l*_+d*p+o*h-c*u,e[n+1]=o*_+d*u+c*p-l*h,e[n+2]=c*_+d*h+l*u-o*p,e[n+3]=d*_-l*p-o*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,l=Math.cos,o=Math.sin,c=l(i/2),d=l(a/2),p=l(s/2),u=o(i/2),h=o(a/2),_=o(s/2);switch(r){case"XYZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"YXZ":this._x=u*d*p+c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"ZXY":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p-u*h*_;break;case"ZYX":this._x=u*d*p-c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p+u*h*_;break;case"YZX":this._x=u*d*p+c*h*_,this._y=c*h*p+u*d*_,this._z=c*d*_-u*h*p,this._w=c*d*p-u*h*_;break;case"XZY":this._x=u*d*p-c*h*_,this._y=c*h*p-u*d*_,this._z=c*d*_+u*h*p,this._w=c*d*p+u*h*_;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],l=n[5],o=n[9],c=n[2],d=n[6],p=n[10],u=i+l+p;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-o)*h,this._y=(s-c)*h,this._z=(r-a)*h}else if(i>l&&i>p){const h=2*Math.sqrt(1+i-l-p);this._w=(d-o)/h,this._x=.25*h,this._y=(a+r)/h,this._z=(s+c)/h}else if(l>p){const h=2*Math.sqrt(1+l-i-p);this._w=(s-c)/h,this._x=(a+r)/h,this._y=.25*h,this._z=(o+d)/h}else{const h=2*Math.sqrt(1+p-i-l);this._w=(r-a)/h,this._x=(s+c)/h,this._y=(o+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,l=n._x,o=n._y,c=n._z,d=n._w;return this._x=i*d+r*l+a*c-s*o,this._y=a*d+r*o+s*l-i*c,this._z=s*d+r*c+i*o-a*l,this._w=r*d-i*l-a*o-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,a=e._y,s=e._z,r=e._w,l=this.dot(e);l<0&&(i=-i,a=-a,s=-s,r=-r,l=-l);let o=1-n;if(l<.9995){const c=Math.acos(l),d=Math.sin(c);o=Math.sin(o*c)/d,n=Math.sin(n*c)/d,this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this._onChangeCallback()}else this._x=this._x*o+i*n,this._y=this._y*o+a*n,this._z=this._z*o+s*n,this._w=this._w*o+r*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pp=class Pp{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(D0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(D0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,l=e.z,o=e.w,c=2*(r*a-l*i),d=2*(l*n-s*a),p=2*(s*i-r*n);return this.x=n+o*c+r*p-l*d,this.y=i+o*d+l*c-s*p,this.z=a+o*p+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,l=n.y,o=n.z;return this.x=a*o-s*l,this.y=s*r-i*o,this.z=i*l-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pp.prototype.isVector3=!0;let k=Pp;const lf=new k,D0=new Br,Ip=class Ip{constructor(e,n,i,a,s,r,l,o,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,c)}set(e,n,i,a,s,r,l,o,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=l,d[3]=n,d[4]=s,d[5]=o,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[3],o=i[6],c=i[1],d=i[4],p=i[7],u=i[2],h=i[5],_=i[8],E=a[0],m=a[3],f=a[6],x=a[1],M=a[4],S=a[7],T=a[2],R=a[5],C=a[8];return s[0]=r*E+l*x+o*T,s[3]=r*m+l*M+o*R,s[6]=r*f+l*S+o*C,s[1]=c*E+d*x+p*T,s[4]=c*m+d*M+p*R,s[7]=c*f+d*S+p*C,s[2]=u*E+h*x+_*T,s[5]=u*m+h*M+_*R,s[8]=u*f+h*S+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8];return n*r*d-n*l*c-i*s*d+i*l*o+a*s*c-a*r*o}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8],p=d*r-l*c,u=l*o-d*s,h=c*s-r*o,_=n*p+i*u+a*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=p*E,e[1]=(a*c-d*i)*E,e[2]=(l*i-a*r)*E,e[3]=u*E,e[4]=(d*n-a*o)*E,e[5]=(a*s-l*n)*E,e[6]=h*E,e[7]=(i*o-c*n)*E,e[8]=(r*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,l){const o=Math.cos(s),c=Math.sin(s);return this.set(i*o,i*c,-i*(o*r+c*l)+r+e,-a*c,a*o,-a*(-c*r+o*l)+l+n,0,0,1),this}scale(e,n){return hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(of.makeScale(e,n)),this}rotate(e){return hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(of.makeRotation(-e)),this}translate(e,n){return hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ip.prototype.isMatrix3=!0;let Ie=Ip;const of=new Ie,U0=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L0=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jb(){const t={enabled:!0,workingColorSpace:Gc,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ut&&(a.r=Ki(a.r),a.g=Ki(a.g),a.b=Ki(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ut&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ba?Vc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gc]:{primaries:e,whitePoint:i,transfer:Vc,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:U0,fromXYZ:L0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Ze=Jb();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ds;class $b{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Xc("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Ki(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e1=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Zl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,l=a.length;r<l;r++)a[r].isDataTexture?s.push(cf(a[r].image)):s.push(cf(a[r]))}else s=cf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$b.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let t1=0;const uf=new k;class dn extends Ts{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Wi,a=Wi,s=fn,r=ss,l=li,o=Qn,c=dn.DEFAULT_ANISOTROPY,d=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Zl(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=U_;dn.DEFAULT_ANISOTROPY=1;const zp=class zp{constructor(e=0,n=0,i=0,a=1){this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const o=e.elements,c=o[0],d=o[4],p=o[8],u=o[1],h=o[5],_=o[9],E=o[2],m=o[6],f=o[10];if(Math.abs(d-u)<.01&&Math.abs(p-E)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+E)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(h+1)/2,T=(f+1)/2,R=(d+u)/4,C=(p+E)/4,v=(_+m)/4;return M>S&&M>T?M<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(M),a=R/i,s=C/i):S>T?S<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(S),i=R/a,s=v/a):T<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(T),i=C/s,a=v/s),this.set(i,a,s,n),this}let x=Math.sqrt((m-_)*(m-_)+(p-E)*(p-E)+(u-d)*(u-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(p-E)/x,this.z=(u-d)/x,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zp.prototype.isVector4=!0;let Pt=zp;class n1 extends Ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const a={width:e,height:n,depth:i.depth},s=new dn(a),r=i.count;for(let l=0;l<r;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Lp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends n1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class G_ extends dn{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i1 extends dn{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=rn,this.minFilter=rn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=class Wc{constructor(e,n,i,a,s,r,l,o,c,d,p,u,h,_,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,l,o,c,d,p,u,h,_,E,m)}set(e,n,i,a,s,r,l,o,c,d,p,u,h,_,E,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=a,f[1]=s,f[5]=r,f[9]=l,f[13]=o,f[2]=c,f[6]=d,f[10]=p,f[14]=u,f[3]=h,f[7]=_,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),r=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),l=Math.sin(i),o=Math.cos(a),c=Math.sin(a),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const u=r*d,h=r*p,_=l*d,E=l*p;n[0]=o*d,n[4]=-o*p,n[8]=c,n[1]=h+_*c,n[5]=u-E*c,n[9]=-l*o,n[2]=E-u*c,n[6]=_+h*c,n[10]=r*o}else if(e.order==="YXZ"){const u=o*d,h=o*p,_=c*d,E=c*p;n[0]=u+E*l,n[4]=_*l-h,n[8]=r*c,n[1]=r*p,n[5]=r*d,n[9]=-l,n[2]=h*l-_,n[6]=E+u*l,n[10]=r*o}else if(e.order==="ZXY"){const u=o*d,h=o*p,_=c*d,E=c*p;n[0]=u-E*l,n[4]=-r*p,n[8]=_+h*l,n[1]=h+_*l,n[5]=r*d,n[9]=E-u*l,n[2]=-r*c,n[6]=l,n[10]=r*o}else if(e.order==="ZYX"){const u=r*d,h=r*p,_=l*d,E=l*p;n[0]=o*d,n[4]=_*c-h,n[8]=u*c+E,n[1]=o*p,n[5]=E*c+u,n[9]=h*c-_,n[2]=-c,n[6]=l*o,n[10]=r*o}else if(e.order==="YZX"){const u=r*o,h=r*c,_=l*o,E=l*c;n[0]=o*d,n[4]=E-u*p,n[8]=_*p+h,n[1]=p,n[5]=r*d,n[9]=-l*d,n[2]=-c*d,n[6]=h*p+_,n[10]=u-E*p}else if(e.order==="XZY"){const u=r*o,h=r*c,_=l*o,E=l*c;n[0]=o*d,n[4]=-p,n[8]=c*d,n[1]=u*p+E,n[5]=r*d,n[9]=h*p-_,n[2]=_*p-h,n[6]=l*d,n[10]=E*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,s1)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),fa.crossVectors(i,Cn),fa.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),fa.crossVectors(i,Cn)),fa.normalize(),_o.crossVectors(Cn,fa),a[0]=fa.x,a[4]=_o.x,a[8]=Cn.x,a[1]=fa.y,a[5]=_o.y,a[9]=Cn.y,a[2]=fa.z,a[6]=_o.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],l=i[4],o=i[8],c=i[12],d=i[1],p=i[5],u=i[9],h=i[13],_=i[2],E=i[6],m=i[10],f=i[14],x=i[3],M=i[7],S=i[11],T=i[15],R=a[0],C=a[4],v=a[8],A=a[12],N=a[1],D=a[5],B=a[9],Y=a[13],te=a[2],F=a[6],U=a[10],P=a[14],X=a[3],$=a[7],ie=a[11],fe=a[15];return s[0]=r*R+l*N+o*te+c*X,s[4]=r*C+l*D+o*F+c*$,s[8]=r*v+l*B+o*U+c*ie,s[12]=r*A+l*Y+o*P+c*fe,s[1]=d*R+p*N+u*te+h*X,s[5]=d*C+p*D+u*F+h*$,s[9]=d*v+p*B+u*U+h*ie,s[13]=d*A+p*Y+u*P+h*fe,s[2]=_*R+E*N+m*te+f*X,s[6]=_*C+E*D+m*F+f*$,s[10]=_*v+E*B+m*U+f*ie,s[14]=_*A+E*Y+m*P+f*fe,s[3]=x*R+M*N+S*te+T*X,s[7]=x*C+M*D+S*F+T*$,s[11]=x*v+M*B+S*U+T*ie,s[15]=x*A+M*Y+S*P+T*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],l=e[5],o=e[9],c=e[13],d=e[2],p=e[6],u=e[10],h=e[14],_=e[3],E=e[7],m=e[11],f=e[15],x=o*h-c*u,M=l*h-c*p,S=l*u-o*p,T=r*h-c*d,R=r*u-o*d,C=r*p-l*d;return n*(E*x-m*M+f*S)-i*(_*x-m*T+f*R)+a*(_*M-E*T+f*C)-s*(_*S-E*R+m*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[1],r=e[5],l=e[9],o=e[2],c=e[6],d=e[10];return n*(r*d-l*c)-i*(s*d-l*o)+a*(s*c-r*o)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],l=e[5],o=e[6],c=e[7],d=e[8],p=e[9],u=e[10],h=e[11],_=e[12],E=e[13],m=e[14],f=e[15],x=n*l-i*r,M=n*o-a*r,S=n*c-s*r,T=i*o-a*l,R=i*c-s*l,C=a*c-s*o,v=d*E-p*_,A=d*m-u*_,N=d*f-h*_,D=p*m-u*E,B=p*f-h*E,Y=u*f-h*m,te=x*Y-M*B+S*D+T*N-R*A+C*v;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/te;return e[0]=(l*Y-o*B+c*D)*F,e[1]=(a*B-i*Y-s*D)*F,e[2]=(E*C-m*R+f*T)*F,e[3]=(u*R-p*C-h*T)*F,e[4]=(o*N-r*Y-c*A)*F,e[5]=(n*Y-a*N+s*A)*F,e[6]=(m*S-_*C-f*M)*F,e[7]=(d*C-u*S+h*M)*F,e[8]=(r*B-l*N+c*v)*F,e[9]=(i*N-n*B-s*v)*F,e[10]=(_*R-E*S+f*x)*F,e[11]=(p*S-d*R-h*x)*F,e[12]=(l*A-r*D-o*v)*F,e[13]=(n*D-i*A+a*v)*F,e[14]=(E*M-_*T-m*x)*F,e[15]=(d*T-p*M+u*x)*F,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,l=e.y,o=e.z,c=s*r,d=s*l;return this.set(c*r+i,c*l-a*o,c*o+a*l,0,c*l+a*o,d*l+i,d*o-a*r,0,c*o-a*l,d*o+a*r,s*o*o+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,l=n._z,o=n._w,c=s+s,d=r+r,p=l+l,u=s*c,h=s*d,_=s*p,E=r*d,m=r*p,f=l*p,x=o*c,M=o*d,S=o*p,T=i.x,R=i.y,C=i.z;return a[0]=(1-(E+f))*T,a[1]=(h+S)*T,a[2]=(_-M)*T,a[3]=0,a[4]=(h-S)*R,a[5]=(1-(u+f))*R,a[6]=(m+x)*R,a[7]=0,a[8]=(_+M)*C,a[9]=(m-x)*C,a[10]=(1-(u+E))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let r=Us.set(a[0],a[1],a[2]).length();const l=Us.set(a[4],a[5],a[6]).length(),o=Us.set(a[8],a[9],a[10]).length();s<0&&(r=-r),ni.copy(this);const c=1/r,d=1/l,p=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=p,ni.elements[9]*=p,ni.elements[10]*=p,n.setFromRotationMatrix(ni),i.x=r,i.y=l,i.z=o,this}makePerspective(e,n,i,a,s,r,l=yi,o=!1){const c=this.elements,d=2*s/(n-e),p=2*s/(i-a),u=(n+e)/(n-e),h=(i+a)/(i-a);let _,E;if(o)_=s/(r-s),E=r*s/(r-s);else if(l===yi)_=-(r+s)/(r-s),E=-2*r*s/(r-s);else if(l===kc)_=-r/(r-s),E=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,s,r,l=yi,o=!1){const c=this.elements,d=2/(n-e),p=2/(i-a),u=-(n+e)/(n-e),h=-(i+a)/(i-a);let _,E;if(o)_=1/(r-s),E=r/(r-s);else if(l===yi)_=-2/(r-s),E=-(r+s)/(r-s);else if(l===kc)_=-1/(r-s),E=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Wc.prototype.isMatrix4=!0;let Ht=Wc;const Us=new k,ni=new Ht,a1=new k(0,0,0),s1=new k(1,1,1),fa=new k,_o=new k,Cn=new k,O0=new Ht,P0=new Br;class _s{constructor(e=0,n=0,i=0,a=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],l=a[8],o=a[1],c=a[5],d=a[9],p=a[2],u=a[6],h=a[10];switch(n){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return O0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class V_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r1=0;const I0=new k,Ls=new Br,Li=new Ht,So=new k,Yr=new k,l1=new k,o1=new Br,z0=new k(1,0,0),B0=new k(0,1,0),F0=new k(0,0,1),H0={type:"added"},c1={type:"removed"},Os={type:"childadded",child:null},ff={type:"childremoved",child:null};class En extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=Zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new k,n=new _s,i=new Br,a=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ie}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new V_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,n){return Ls.setFromAxisAngle(e,n),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(B0,e)}rotateZ(e){return this.rotateOnAxis(F0,e)}translateOnAxis(e,n){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(B0,e)}translateZ(e){return this.translateOnAxis(F0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Yr,So,this.up):Li.lookAt(So,Yr,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Li),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(H0),Os.child=e,this.dispatchEvent(Os),Os.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c1),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(H0),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,l1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,o1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,a=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*a,s[13]+=i-s[1]*n-s[5]*i-s[9]*a,s[14]+=a-s[2]*n-s[6]*i-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let r=0,l=s.length;r<l;r++)s[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(l=>({...l})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,d=o.length;c<d;c++){const p=o[c];s(e.shapes,p)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(s(e.materials,this.material[o]));a.material=l}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let l=0;l<this.children.length;l++)a.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];a.animations.push(s(e.animations,o))}}if(n){const l=r(e.geometries),o=r(e.materials),c=r(e.textures),d=r(e.images),p=r(e.shapes),u=r(e.skeletons),h=r(e.animations),_=r(e.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(l){const o=[];for(const c in l){const d=l[c];delete d.metadata,o.push(d)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}En.DEFAULT_UP=new k(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yo extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const l=this._targetRay,o=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const E of e.hand.values()){const m=n.getJointPose(E,i),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=d.position.distanceTo(p.position),h=.02,_=.005;c.inputState.pinching&&u>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return l!==null&&(l.visible=a!==null),o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const k_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},da={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function hf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=Ze.workingColorSpace){if(e=Qb(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=hf(r,s,e+1/3),this.g=hf(r,s,e),this.b=hf(r,s,e-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],l=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=k_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Ze.workingToColorSpace(un.copy(this),e),Math.round(Ke(un.r*255,0,255))*65536+Math.round(Ke(un.g*255,0,255))*256+Math.round(Ke(un.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(un.copy(this),n);const i=un.r,a=un.g,s=un.b,r=Math.max(i,a,s),l=Math.min(i,a,s);let o,c;const d=(l+r)/2;if(l===r)o=0,c=0;else{const p=r-l;switch(c=d<=.5?p/(r+l):p/(2-r-l),r){case i:o=(a-s)/p+(a<s?6:0);break;case a:o=(s-i)/p+2;break;case s:o=(i-a)/p+4;break}o/=6}return e.h=o,e.s=c,e.l=d,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=kn){Ze.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,a=un.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(da),this.setHSL(da.h+e,da.s+n,da.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(da),e.getHSL(Mo);const i=rf(da.h,Mo.h,n),a=rf(da.s,Mo.s,n),s=rf(da.l,Mo.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new rt;rt.NAMES=k_;class f1 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _s,this.environmentIntensity=1,this.environmentRotation=new _s,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new k,Oi=new k,pf=new k,Pi=new k,Ps=new k,Is=new k,G0=new k,mf=new k,gf=new k,xf=new k,vf=new Pt,_f=new Pt,Sf=new Pt;class ri{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ii.subVectors(a,n),Oi.subVectors(i,n),pf.subVectors(e,n);const r=ii.dot(ii),l=ii.dot(Oi),o=ii.dot(pf),c=Oi.dot(Oi),d=Oi.dot(pf),p=r*c-l*l;if(p===0)return s.set(0,0,0),null;const u=1/p,h=(c*o-l*d)*u,_=(r*d-l*o)*u;return s.set(1-h-_,_,h)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,a,s,r,l,o){return this.getBarycoord(e,n,i,a,Pi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Pi.x),o.addScaledVector(r,Pi.y),o.addScaledVector(l,Pi.z),o)}static getInterpolatedAttribute(e,n,i,a,s,r){return vf.setScalar(0),_f.setScalar(0),Sf.setScalar(0),vf.fromBufferAttribute(e,n),_f.fromBufferAttribute(e,i),Sf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(vf,s.x),r.addScaledVector(_f,s.y),r.addScaledVector(Sf,s.z),r}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Oi.subVectors(e,n),ii.cross(Oi).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ii.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,l;Ps.subVectors(a,i),Is.subVectors(s,i),mf.subVectors(e,i);const o=Ps.dot(mf),c=Is.dot(mf);if(o<=0&&c<=0)return n.copy(i);gf.subVectors(e,a);const d=Ps.dot(gf),p=Is.dot(gf);if(d>=0&&p<=d)return n.copy(a);const u=o*p-d*c;if(u<=0&&o>=0&&d<=0)return r=o/(o-d),n.copy(i).addScaledVector(Ps,r);xf.subVectors(e,s);const h=Ps.dot(xf),_=Is.dot(xf);if(_>=0&&h<=_)return n.copy(s);const E=h*c-o*_;if(E<=0&&c>=0&&_<=0)return l=c/(c-_),n.copy(i).addScaledVector(Is,l);const m=d*_-h*p;if(m<=0&&p-d>=0&&h-_>=0)return G0.subVectors(s,a),l=(p-d)/(p-d+(h-_)),n.copy(a).addScaledVector(G0,l);const f=1/(m+E+u);return r=E*f,l=u*f,n.copy(i).addScaledVector(Ps,r).addScaledVector(Is,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Kl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,l=s.count;r<l;r++)e.isMesh===!0?e.getVertexPosition(r,ai):ai.fromBufferAttribute(s,r),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Eo.subVectors(this.max,Zr),zs.subVectors(e.a,Zr),Bs.subVectors(e.b,Zr),Fs.subVectors(e.c,Zr),ha.subVectors(Bs,zs),pa.subVectors(Fs,Bs),Ya.subVectors(zs,Fs);let n=[0,-ha.z,ha.y,0,-pa.z,pa.y,0,-Ya.z,Ya.y,ha.z,0,-ha.x,pa.z,0,-pa.x,Ya.z,0,-Ya.x,-ha.y,ha.x,0,-pa.y,pa.x,0,-Ya.y,Ya.x,0];return!yf(n,zs,Bs,Fs,Eo)||(n=[1,0,0,0,1,0,0,0,1],!yf(n,zs,Bs,Fs,Eo))?!1:(To.crossVectors(ha,pa),n=[To.x,To.y,To.z],yf(n,zs,Bs,Fs,Eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new k,new k,new k,new k,new k,new k,new k,new k],ai=new k,bo=new Kl,zs=new k,Bs=new k,Fs=new k,ha=new k,pa=new k,Ya=new k,Zr=new k,Eo=new k,To=new k,Za=new k;function yf(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Za.fromArray(t,s);const l=a.x*Math.abs(Za.x)+a.y*Math.abs(Za.y)+a.z*Math.abs(Za.z),o=e.dot(Za),c=n.dot(Za),d=i.dot(Za);if(Math.max(-Math.max(o,c,d),Math.min(o,c,d))>l)return!1}return!0}const Gt=new k,Ao=new ct;let d1=0;class oi extends Ts{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=R0,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==R0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class X_ extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W_ extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qi extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const h1=new Kl,Kr=new k,Mf=new k;class du{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):h1.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Kr,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Mf)),this.expandByPoint(Kr.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let p1=0;const Gn=new Ht,bf=new En,Hs=new k,wn=new Kl,Qr=new Kl,Qt=new k;class ui extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qb(e)?W_:X_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qi(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const l=n[s];Qr.setFromBufferAttribute(l),this.morphTargetsRelative?(Qt.addVectors(wn.min,Qr.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,Qr.max),wn.expandByPoint(Qt)):(wn.expandByPoint(Qr.min),wn.expandByPoint(Qr.max))}wn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Qt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Qt));if(n)for(let s=0,r=n.length;s<r;s++){const l=n[s],o=this.morphTargetsRelative;for(let c=0,d=l.count;c<d;c++)Qt.fromBufferAttribute(l,c),o&&(Hs.fromBufferAttribute(e,c),Qt.add(Hs)),a=Math.max(a,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;let r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new oi(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));const l=[],o=[];for(let v=0;v<i.count;v++)l[v]=new k,o[v]=new k;const c=new k,d=new k,p=new k,u=new ct,h=new ct,_=new ct,E=new k,m=new k;function f(v,A,N){c.fromBufferAttribute(i,v),d.fromBufferAttribute(i,A),p.fromBufferAttribute(i,N),u.fromBufferAttribute(s,v),h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,N),d.sub(c),p.sub(c),h.sub(u),_.sub(u);const D=1/(h.x*_.y-_.x*h.y);isFinite(D)&&(E.copy(d).multiplyScalar(_.y).addScaledVector(p,-h.y).multiplyScalar(D),m.copy(p).multiplyScalar(h.x).addScaledVector(d,-_.x).multiplyScalar(D),l[v].add(E),l[A].add(E),l[N].add(E),o[v].add(m),o[A].add(m),o[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,A=x.length;v<A;++v){const N=x[v],D=N.start,B=N.count;for(let Y=D,te=D+B;Y<te;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new k,S=new k,T=new k,R=new k;function C(v){T.fromBufferAttribute(a,v),R.copy(T);const A=l[v];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(R,A);const D=S.dot(o[v])<0?-1:1;r.setXYZW(v,M.x,M.y,M.z,D)}for(let v=0,A=x.length;v<A;++v){const N=x[v],D=N.start,B=N.count;for(let Y=D,te=D+B;Y<te;Y+=3)C(e.getX(Y+0)),C(e.getX(Y+1)),C(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const a=new k,s=new k,r=new k,l=new k,o=new k,c=new k,d=new k,p=new k;if(e)for(let u=0,h=e.count;u<h;u+=3){const _=e.getX(u+0),E=e.getX(u+1),m=e.getX(u+2);a.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),r.fromBufferAttribute(n,m),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),l.fromBufferAttribute(i,_),o.fromBufferAttribute(i,E),c.fromBufferAttribute(i,m),l.add(d),o.add(d),c.add(d),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(E,o.x,o.y,o.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)a.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),d.subVectors(r,s),p.subVectors(a,s),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(l,o){const c=l.array,d=l.itemSize,p=l.normalized,u=new c.constructor(o.length*d);let h=0,_=0;for(let E=0,m=o.length;E<m;E++){l.isInterleavedBufferAttribute?h=o[E]*l.data.stride+l.offset:h=o[E]*d;for(let f=0;f<d;f++)u[_++]=c[h++]}return new oi(u,d,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,i=this.index.array,a=this.attributes;for(const l in a){const o=a[l],c=e(o,i);n.setAttribute(l,c)}const s=this.morphAttributes;for(const l in s){const o=[],c=s[l];for(let d=0,p=c.length;d<p;d++){const u=c[d],h=e(u,i);o.push(h)}n.morphAttributes[l]=o}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,o=r.length;l<o;l++){const c=r[l];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(e[c]=o[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const o in i){const c=i[o];e.data.attributes[o]=c.toJSON(e.data)}const a={};let s=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],d=[];for(let p=0,u=c.length;p<u;p++){const h=c[p];d.push(h.toJSON(e.data))}d.length>0&&(a[o]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let u=0,h=p.length;u<h;u++)d.push(p[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let m1=0;class Ql extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=Zl(),this.name="",this.type="Material",this.blending=dr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Ld,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=A0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==ka&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==A0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const l in s){const o=s[l];delete o.metadata,r.push(o)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const zi=new k,Ef=new k,Ro=new k,ma=new k,Tf=new k,Co=new k,Af=new k;class j_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,n),zi.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){Ef.copy(e).add(n).multiplyScalar(.5),Ro.copy(n).sub(e).normalize(),ma.copy(this.origin).sub(Ef);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Ro),l=ma.dot(this.direction),o=-ma.dot(Ro),c=ma.lengthSq(),d=Math.abs(1-r*r);let p,u,h,_;if(d>0)if(p=r*o-l,u=r*l-o,_=s*d,p>=0)if(u>=-_)if(u<=_){const E=1/d;p*=E,u*=E,h=p*(p+r*u+2*l)+u*(r*p+u+2*o)+c}else u=s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;else u=-s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;else u<=-_?(p=Math.max(0,-(-r*s+l)),u=p>0?-s:Math.min(Math.max(-s,-o),s),h=-p*p+u*(u+2*o)+c):u<=_?(p=0,u=Math.min(Math.max(-s,-o),s),h=u*(u+2*o)+c):(p=Math.max(0,-(r*s+l)),u=p>0?s:Math.min(Math.max(-s,-o),s),h=-p*p+u*(u+2*o)+c);else u=r>0?-s:s,p=Math.max(0,-(r*u+l)),h=-p*p+u*(u+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(Ef).addScaledVector(Ro,u),h}intersectSphere(e,n){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),a=zi.dot(zi)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),l=i-r,o=i+r;return o<0?null:l<0?this.at(o,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,l,o;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,a=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,a=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),p>=0?(l=(e.min.z-u.z)*p,o=(e.max.z-u.z)*p):(l=(e.max.z-u.z)*p,o=(e.min.z-u.z)*p),i>o||l>a)||((l>i||i!==i)&&(i=l),(o<a||a!==a)&&(a=o),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,n,i,a,s){Tf.subVectors(n,e),Co.subVectors(i,e),Af.crossVectors(Tf,Co);let r=this.direction.dot(Af),l;if(r>0){if(a)return null;l=1}else if(r<0)l=-1,r=-r;else return null;ma.subVectors(this.origin,e);const o=l*this.direction.dot(Co.crossVectors(ma,Co));if(o<0)return null;const c=l*this.direction.dot(Tf.cross(ma));if(c<0||o+c>r)return null;const d=-l*ma.dot(Af);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class q_ extends Ql{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _s,this.combine=E_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const V0=new Ht,Ka=new j_,wo=new du,k0=new k,No=new k,Do=new k,Uo=new k,Rf=new k,Lo=new k,X0=new k,Oo=new k;class sa extends En{constructor(e=new ui,n=new q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const l=this.morphTargetInfluences;if(s&&l){Lo.set(0,0,0);for(let o=0,c=s.length;o<c;o++){const d=l[o],p=s[o];d!==0&&(Rf.fromBufferAttribute(p,e),r?Lo.addScaledVector(Rf,d):Lo.addScaledVector(Rf.sub(n),d))}n.add(Lo)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),Ka.copy(e.ray).recast(e.near),!(wo.containsPoint(Ka.origin)===!1&&(Ka.intersectSphere(wo,k0)===null||Ka.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(V0.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(V0),!(i.boundingBox!==null&&Ka.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ka)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,l=s.index,o=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,u=s.groups,h=s.drawRange;if(l!==null)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const m=u[_],f=r[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=x,T=M;S<T;S+=3){const R=l.getX(S),C=l.getX(S+1),v=l.getX(S+2);a=Po(this,f,e,i,c,d,p,R,C,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(l.count,h.start+h.count);for(let m=_,f=E;m<f;m+=3){const x=l.getX(m),M=l.getX(m+1),S=l.getX(m+2);a=Po(this,r,e,i,c,d,p,x,M,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(o!==void 0)if(Array.isArray(r))for(let _=0,E=u.length;_<E;_++){const m=u[_],f=r[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=x,T=M;S<T;S+=3){const R=S,C=S+1,v=S+2;a=Po(this,f,e,i,c,d,p,R,C,v),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,h.start),E=Math.min(o.count,h.start+h.count);for(let m=_,f=E;m<f;m+=3){const x=m,M=m+1,S=m+2;a=Po(this,r,e,i,c,d,p,x,M,S),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function g1(t,e,n,i,a,s,r,l){let o;if(e.side===bn?o=i.intersectTriangle(r,s,a,!0,l):o=i.intersectTriangle(a,s,r,e.side===ka,l),o===null)return null;Oo.copy(l),Oo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oo);return c<n.near||c>n.far?null:{distance:c,point:Oo.clone(),object:t}}function Po(t,e,n,i,a,s,r,l,o,c){t.getVertexPosition(l,No),t.getVertexPosition(o,Do),t.getVertexPosition(c,Uo);const d=g1(t,e,n,i,No,Do,Uo,X0);if(d){const p=new k;ri.getBarycoord(X0,No,Do,Uo,p),a&&(d.uv=ri.getInterpolatedAttribute(a,l,o,c,p,new ct)),s&&(d.uv1=ri.getInterpolatedAttribute(s,l,o,c,p,new ct)),r&&(d.normal=ri.getInterpolatedAttribute(r,l,o,c,p,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:l,b:o,c,normal:new k,materialIndex:0};ri.getNormal(No,Do,Uo,u.normal),d.face=u,d.barycoord=p}return d}class x1 extends dn{constructor(e=null,n=1,i=1,a,s,r,l,o,c=rn,d=rn,p,u){super(null,r,l,o,c,d,a,s,p,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new k,v1=new k,_1=new Ie;class ns{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Cf.subVectors(i,n).cross(v1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const a=e.delta(Cf),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(r<0||r>1)?null:n.copy(e.start).addScaledVector(a,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_1.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qa=new du,S1=new ct(.5,.5),Io=new k;class Y_{constructor(e=new ns,n=new ns,i=new ns,a=new ns,s=new ns,r=new ns){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(a),l[4].copy(s),l[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const a=this.planes,s=e.elements,r=s[0],l=s[1],o=s[2],c=s[3],d=s[4],p=s[5],u=s[6],h=s[7],_=s[8],E=s[9],m=s[10],f=s[11],x=s[12],M=s[13],S=s[14],T=s[15];if(a[0].setComponents(c-r,h-d,f-_,T-x).normalize(),a[1].setComponents(c+r,h+d,f+_,T+x).normalize(),a[2].setComponents(c+l,h+p,f+E,T+M).normalize(),a[3].setComponents(c-l,h-p,f-E,T-M).normalize(),i)a[4].setComponents(o,u,m,S).normalize(),a[5].setComponents(c-o,h-u,f-m,T-S).normalize();else if(a[4].setComponents(c-o,h-u,f-m,T-S).normalize(),n===yi)a[5].setComponents(c+o,h+u,f+m,T+S).normalize();else if(n===kc)a[5].setComponents(o,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qa)}intersectsSprite(e){Qa.center.set(0,0,0);const n=S1.distanceTo(e.center);return Qa.radius=.7071067811865476+n,Qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qa)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Io.x=a.normal.x>0?e.max.x:e.min.x,Io.y=a.normal.y>0?e.max.y:e.min.y,Io.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Z_ extends Ql{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const W0=new Ht,Sh=new j_,zo=new du,Bo=new k;class y1 extends En{constructor(e=new ui,n=new Z_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(a),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;W0.copy(a).invert(),Sh.copy(e.ray).applyMatrix4(W0);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=i.index,p=i.attributes.position;if(c!==null){const u=Math.max(0,r.start),h=Math.min(c.count,r.start+r.count);for(let _=u,E=h;_<E;_++){const m=c.getX(_);Bo.fromBufferAttribute(p,m),j0(Bo,m,o,a,e,n,this)}}else{const u=Math.max(0,r.start),h=Math.min(p.count,r.start+r.count);for(let _=u,E=h;_<E;_++)Bo.fromBufferAttribute(p,_),j0(Bo,_,o,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const l=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function j0(t,e,n,i,a,s,r){const l=Sh.distanceSqToPoint(t);if(l<n){const o=new k;Sh.closestPointToPoint(t,o),o.applyMatrix4(i);const c=a.ray.origin.distanceTo(o);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class K_ extends dn{constructor(e=[],n=xs,i,a,s,r,l,o,c,d){super(e,n,i,a,s,r,l,o,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class M1 extends dn{constructor(e,n,i,a,s,r,l,o,c){super(e,n,i,a,s,r,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cr extends dn{constructor(e,n,i=Ti,a,s,r,l=rn,o=rn,c,d=aa,p=1){if(d!==aa&&d!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:p};super(u,a,s,r,l,o,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class b1 extends Cr{constructor(e,n=Ti,i=xs,a,s,r=rn,l=rn,o,c=aa){const d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,n,i,a,s,r,l,o,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Q_ extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jl extends ui{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const l=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const o=[],c=[],d=[],p=[];let u=0,h=0;_("z","y","x",-1,-1,i,n,e,r,s,0),_("z","y","x",1,-1,i,n,-e,r,s,1),_("x","z","y",1,1,e,i,n,a,r,2),_("x","z","y",1,-1,e,i,-n,a,r,3),_("x","y","z",1,-1,e,n,i,a,s,4),_("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(o),this.setAttribute("position",new Qi(c,3)),this.setAttribute("normal",new Qi(d,3)),this.setAttribute("uv",new Qi(p,2));function _(E,m,f,x,M,S,T,R,C,v,A){const N=S/C,D=T/v,B=S/2,Y=T/2,te=R/2,F=C+1,U=v+1;let P=0,X=0;const $=new k;for(let ie=0;ie<U;ie++){const fe=ie*D-Y;for(let Se=0;Se<F;Se++){const Xe=Se*N-B;$[E]=Xe*x,$[m]=fe*M,$[f]=te,c.push($.x,$.y,$.z),$[E]=0,$[m]=0,$[f]=R>0?1:-1,d.push($.x,$.y,$.z),p.push(Se/C),p.push(1-ie/v),P+=1}}for(let ie=0;ie<v;ie++)for(let fe=0;fe<C;fe++){const Se=u+fe+F*ie,Xe=u+fe+F*(ie+1),$e=u+(fe+1)+F*(ie+1),Ve=u+(fe+1)+F*ie;o.push(Se,Xe,Ve),o.push(Xe,$e,Ve),X+=6}l.addGroup(h,X,A),h+=X,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hu extends ui{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,l=Math.floor(i),o=Math.floor(a),c=l+1,d=o+1,p=e/l,u=n/o,h=[],_=[],E=[],m=[];for(let f=0;f<d;f++){const x=f*u-r;for(let M=0;M<c;M++){const S=M*p-s;_.push(S,-x,0),E.push(0,0,1),m.push(M/l),m.push(1-f/o)}}for(let f=0;f<o;f++)for(let x=0;x<l;x++){const M=x+c*f,S=x+c*(f+1),T=x+1+c*(f+1),R=x+1+c*f;h.push(M,S,R),h.push(S,T,R)}this.setIndex(h),this.setAttribute("position",new Qi(_,3)),this.setAttribute("normal",new Qi(E,3)),this.setAttribute("uv",new Qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}function wr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];if(q0(a))a.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone();else if(Array.isArray(a))if(q0(a[0])){const s=[];for(let r=0,l=a.length;r<l;r++)s[r]=a[r].clone();e[n][i]=s}else e[n][i]=a.slice();else e[n][i]=a}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=wr(t[n]);for(const a in i)e[a]=i[a]}return e}function q0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function E1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function J_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const T1={clone:wr,merge:hn};var A1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ql{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A1,this.fragmentShader=R1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=n[a.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(a.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(a.value);break;case"v3":this.uniforms[i].value=new k().fromArray(a.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(a.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(a.value);break;case"m4":this.uniforms[i].value=new Ht().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class C1 extends Ai{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class w1 extends Ql{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends Ql{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fo=new k,Ho=new Br,pi=new k;class $_ extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Ho,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Ho,pi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Fo,Ho,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Ho,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ga=new k,Y0=new ct,Z0=new ct;class qn extends $_{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-e/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ga.x,ga.y).multiplyScalar(-e/ga.z)}getViewSize(e,n){return this.getViewBounds(e,Y0,Z0),n.subVectors(Z0,Y0)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const o=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/o,n-=r.offsetY*i/c,a*=r.width/o,i*=r.height/c}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eS extends $_{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,l=a+n,o=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,l-=d*this.view.offsetY,o=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,l,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=-90,Vs=1;class D1 extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Gs,Vs,e,n);a.layers=this.layers,this.add(a);const s=new qn(Gs,Vs,e,n);s.layers=this.layers,this.add(s);const r=new qn(Gs,Vs,e,n);r.layers=this.layers,this.add(r);const l=new qn(Gs,Vs,e,n);l.layers=this.layers,this.add(l);const o=new qn(Gs,Vs,e,n);o.layers=this.layers,this.add(o);const c=new qn(Gs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,l,o]=n;for(const c of n)this.remove(c);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===kc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,l,o,c,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,2,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,4,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(p,u,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class U1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bp=class Bp{constructor(e,n,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,a){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=a,this}};Bp.prototype.isMatrix2=!0;let K0=Bp;function Q0(t,e,n,i){const a=L1(i);switch(n){case z_:return t*e;case F_:return t*e/a.components*a.byteLength;case Cp:return t*e/a.components*a.byteLength;case vs:return t*e*2/a.components*a.byteLength;case wp:return t*e*2/a.components*a.byteLength;case B_:return t*e*3/a.components*a.byteLength;case li:return t*e*4/a.components*a.byteLength;case Np:return t*e*4/a.components*a.byteLength;case sc:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xd:case jd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case Yd:case Kd:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zd:case Fc:case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ih:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hh:case ph:case mh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gh:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hc:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L1(t){switch(t){case Qn:case L_:return{byteLength:1,components:1};case Pl:case O_:case ia:return{byteLength:2,components:1};case Ap:case Rp:return{byteLength:2,components:4};case Ti:case Tp:case Si:return{byteLength:4,components:1};case P_:case I_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function O1(t){const e=new WeakMap;function n(l,o){const c=l.array,d=l.usage,p=c.byteLength,u=t.createBuffer();t.bindBuffer(o,u),t.bufferData(o,c,d),l.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,o,c){const d=o.array,p=o.updateRanges;if(t.bindBuffer(c,l),p.length===0)t.bufferSubData(c,0,d);else{p.sort((h,_)=>h.start-_.start);let u=0;for(let h=1;h<p.length;h++){const _=p[u],E=p[h];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++u,p[u]=E)}p.length=u+1;for(let h=0,_=p.length;h<_;h++){const E=p[h];t.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}o.clearUpdateRanges()}o.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=e.get(l);o&&(t.deleteBuffer(o.buffer),e.delete(l))}function r(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,n(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,o),c.version=l.version}}return{get:a,remove:s,update:r}}var P1=`#ifdef USE_ALPHAHASH
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
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,xE=`#ifdef USE_ENVMAP
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
#endif`,vE=`#ifdef USE_FOG
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
#endif`,CE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wE=`varying vec3 vViewPosition;
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
#endif`,lT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oT=`#ifdef USE_IRIDESCENCEMAP
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
#endif`,xT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
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
}`,lA=`#define TOON
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
}`,oA=`#define TOON
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
}`,Ge={alphahash_fragment:P1,alphahash_pars_fragment:I1,alphamap_fragment:z1,alphamap_pars_fragment:B1,alphatest_fragment:F1,alphatest_pars_fragment:H1,aomap_fragment:G1,aomap_pars_fragment:V1,batching_pars_vertex:k1,batching_vertex:X1,begin_vertex:W1,beginnormal_vertex:j1,bsdfs:q1,iridescence_fragment:Y1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:K1,clipping_planes_pars_fragment:Q1,clipping_planes_pars_vertex:J1,clipping_planes_vertex:$1,color_fragment:eE,color_pars_fragment:tE,color_pars_vertex:nE,color_vertex:iE,common:aE,cube_uv_reflection_fragment:sE,defaultnormal_vertex:rE,displacementmap_pars_vertex:lE,displacementmap_vertex:oE,emissivemap_fragment:cE,emissivemap_pars_fragment:uE,colorspace_fragment:fE,colorspace_pars_fragment:dE,envmap_fragment:hE,envmap_common_pars_fragment:pE,envmap_pars_fragment:mE,envmap_pars_vertex:gE,envmap_physical_pars_fragment:RE,envmap_vertex:xE,fog_vertex:vE,fog_pars_vertex:_E,fog_fragment:SE,fog_pars_fragment:yE,gradientmap_pars_fragment:ME,lightmap_pars_fragment:bE,lights_lambert_fragment:EE,lights_lambert_pars_fragment:TE,lights_pars_begin:AE,lights_toon_fragment:CE,lights_toon_pars_fragment:wE,lights_phong_fragment:NE,lights_phong_pars_fragment:DE,lights_physical_fragment:UE,lights_physical_pars_fragment:LE,lights_fragment_begin:OE,lights_fragment_maps:PE,lights_fragment_end:IE,lightprobes_pars_fragment:zE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:WE,metalnessmap_fragment:jE,metalnessmap_pars_fragment:qE,morphinstance_vertex:YE,morphcolor_vertex:ZE,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:eT,normal_pars_fragment:tT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:sT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:lT,iridescence_pars_fragment:oT,opaque_fragment:cT,packing:uT,premultiplied_alpha_fragment:fT,project_vertex:dT,dithering_fragment:hT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:xT,shadowmap_pars_vertex:vT,shadowmap_vertex:_T,shadowmask_pars_fragment:ST,skinbase_vertex:yT,skinning_pars_vertex:MT,skinning_vertex:bT,skinnormal_vertex:ET,specularmap_fragment:TT,specularmap_pars_fragment:AT,tonemapping_fragment:RT,tonemapping_pars_fragment:CT,transmission_fragment:wT,transmission_pars_fragment:NT,uv_pars_fragment:DT,uv_pars_vertex:UT,uv_vertex:LT,worldpos_vertex:OT,background_vert:PT,background_frag:IT,backgroundCube_vert:zT,backgroundCube_frag:BT,cube_vert:FT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distance_vert:kT,distance_frag:XT,equirect_vert:WT,equirect_frag:jT,linedashed_vert:qT,linedashed_frag:YT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:$T,meshmatcap_frag:eA,meshnormal_vert:tA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:aA,meshphysical_vert:sA,meshphysical_frag:rA,meshtoon_vert:lA,meshtoon_frag:oA,points_vert:cA,points_frag:uA,shadow_vert:fA,shadow_frag:dA,sprite_vert:hA,sprite_frag:pA},me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gi={basic:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:hn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:hn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:hn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:hn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:hn([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:hn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:hn([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:hn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:hn([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:hn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:hn([me.lights,me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};gi.physical={uniforms:hn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Go={r:0,b:0,g:0},mA=new Ht,nS=new Ie;nS.set(-1,0,0,0,1,0,0,0,1);function gA(t,e,n,i,a,s){const r=new rt(0);let l=a===!0?0:1,o,c,d=null,p=0,u=null;function h(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(x){let M=!1;const S=h(x);S===null?m(r,l):S&&S.isColor&&(m(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,M){const S=h(M);S&&(S.isCubeTexture||S.mapping===fu)?(c===void 0&&(c=new sa(new Jl(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:wr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nS),c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ut,(d!==S||p!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(o===void 0&&(o=new sa(new hu(2,2),new Ai({name:"BackgroundMaterial",uniforms:wr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=S,o.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,o.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),o.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||p!==S.version||u!==t.toneMapping)&&(o.material.needsUpdate=!0,d=S,p=S.version,u=t.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null))}function m(x,M){x.getRGB(Go,J_(t)),n.buffers.color.setClear(Go.r,Go.g,Go.b,M,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return r},setClearColor:function(x,M=1){r.set(x),l=M,m(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(r,l)},render:_,addToRenderList:E,dispose:f}}function xA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=u(null);let s=a,r=!1;function l(D,B,Y,te,F){let U=!1;const P=p(D,te,Y,B);s!==P&&(s=P,c(s.object)),U=h(D,te,Y,F),U&&_(D,te,Y,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,S(D,B,Y,te),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function o(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function d(D){return t.deleteVertexArray(D)}function p(D,B,Y,te){const F=te.wireframe===!0;let U=i[B.id];U===void 0&&(U={},i[B.id]=U);const P=D.isInstancedMesh===!0?D.id:0;let X=U[P];X===void 0&&(X={},U[P]=X);let $=X[Y.id];$===void 0&&($={},X[Y.id]=$);let ie=$[F];return ie===void 0&&(ie=u(o()),$[F]=ie),ie}function u(D){const B=[],Y=[],te=[];for(let F=0;F<n;F++)B[F]=0,Y[F]=0,te[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:te,object:D,attributes:{},index:null}}function h(D,B,Y,te){const F=s.attributes,U=B.attributes;let P=0;const X=Y.getAttributes();for(const $ in X)if(X[$].location>=0){const fe=F[$];let Se=U[$];if(Se===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),fe===void 0||fe.attribute!==Se||Se&&fe.data!==Se.data)return!0;P++}return s.attributesNum!==P||s.index!==te}function _(D,B,Y,te){const F={},U=B.attributes;let P=0;const X=Y.getAttributes();for(const $ in X)if(X[$].location>=0){let fe=U[$];fe===void 0&&($==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),$==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor));const Se={};Se.attribute=fe,fe&&fe.data&&(Se.data=fe.data),F[$]=Se,P++}s.attributes=F,s.attributesNum=P,s.index=te}function E(){const D=s.newAttributes;for(let B=0,Y=D.length;B<Y;B++)D[B]=0}function m(D){f(D,0)}function f(D,B){const Y=s.newAttributes,te=s.enabledAttributes,F=s.attributeDivisors;Y[D]=1,te[D]===0&&(t.enableVertexAttribArray(D),te[D]=1),F[D]!==B&&(t.vertexAttribDivisor(D,B),F[D]=B)}function x(){const D=s.newAttributes,B=s.enabledAttributes;for(let Y=0,te=B.length;Y<te;Y++)B[Y]!==D[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function M(D,B,Y,te,F,U,P){P===!0?t.vertexAttribIPointer(D,B,Y,F,U):t.vertexAttribPointer(D,B,Y,te,F,U)}function S(D,B,Y,te){E();const F=te.attributes,U=Y.getAttributes(),P=B.defaultAttributeValues;for(const X in U){const $=U[X];if($.location>=0){let ie=F[X];if(ie===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const fe=ie.normalized,Se=ie.itemSize,Xe=e.get(ie);if(Xe===void 0)continue;const $e=Xe.buffer,Ve=Xe.type,Q=Xe.bytesPerElement,ce=Ve===t.INT||Ve===t.UNSIGNED_INT||ie.gpuType===Tp;if(ie.isInterleavedBufferAttribute){const ae=ie.data,le=ae.stride,Pe=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let xe=0;xe<$.locationSize;xe++)f($.location+xe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<$.locationSize;xe++)m($.location+xe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let xe=0;xe<$.locationSize;xe++)M($.location+xe,Se/$.locationSize,Ve,fe,le*Q,(Pe+Se/$.locationSize*xe)*Q,ce)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<$.locationSize;ae++)f($.location+ae,ie.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<$.locationSize;ae++)m($.location+ae);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ae=0;ae<$.locationSize;ae++)M($.location+ae,Se/$.locationSize,Ve,fe,Se*Q,Se/$.locationSize*ae*Q,ce)}}else if(P!==void 0){const fe=P[X];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv($.location,fe);break;case 3:t.vertexAttrib3fv($.location,fe);break;case 4:t.vertexAttrib4fv($.location,fe);break;default:t.vertexAttrib1fv($.location,fe)}}}}x()}function T(){A();for(const D in i){const B=i[D];for(const Y in B){const te=B[Y];for(const F in te){const U=te[F];for(const P in U)d(U[P].object),delete U[P];delete te[F]}}delete i[D]}}function R(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const Y in B){const te=B[Y];for(const F in te){const U=te[F];for(const P in U)d(U[P].object),delete U[P];delete te[F]}}delete i[D.id]}function C(D){for(const B in i){const Y=i[B];for(const te in Y){const F=Y[te];if(F[D.id]===void 0)continue;const U=F[D.id];for(const P in U)d(U[P].object),delete U[P];delete F[D.id]}}}function v(D){for(const B in i){const Y=i[B],te=D.isInstancedMesh===!0?D.id:0,F=Y[te];if(F!==void 0){for(const U in F){const P=F[U];for(const X in P)d(P[X].object),delete P[X];delete F[U]}delete Y[te],Object.keys(Y).length===0&&delete i[B]}}}function A(){N(),r=!0,s!==a&&(s=a,c(s.object))}function N(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:l,reset:A,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:x}}function vA(t,e,n){let i;function a(o){i=o}function s(o,c){t.drawArrays(i,o,c),n.update(c,i,1)}function r(o,c,d){d!==0&&(t.drawArraysInstanced(i,o,c,d),n.update(c,i,d))}function l(o,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,o,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];n.update(u,i,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=l}function _A(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const v=C===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Si&&!v)}function o(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=o(c);d!==c&&(Oe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:r,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:R}}function SA(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new ns,l=new Ie,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const h=p.length!==0||u||i!==0||a;return a=u,i=p.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,u){n=d(p,u,0)},this.setState=function(p,u,h){const _=p.clippingPlanes,E=p.clipIntersection,m=p.clipShadows,f=t.get(p);if(!a||_===null||_.length===0||s&&!m)s?d(null):c();else{const x=s?0:i,M=x*4;let S=f.clippingState||null;o.value=S,S=d(_,u,M,h);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){o.value!==n&&(o.value=n,o.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,h,_){const E=p!==null?p.length:0;let m=null;if(E!==0){if(m=o.value,_!==!0||m===null){const f=h+E*4,x=u.matrixWorldInverse;l.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=h;M!==E;++M,S+=4)r.copy(p[M]).applyMatrix4(x,l),r.normal.toArray(m,S),m[S+3]=r.constant}o.value=m,o.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const wa=4,J0=[.125,.215,.35,.446,.526,.582],as=20,yA=256,Jr=new eS,$0=new rt;let wf=null,Nf=0,Df=0,Uf=!1;const MA=new k;class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:l=MA}=s;wf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o,l),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wf,Nf,Df),this._renderer.xr.enabled=Uf,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ia,format:li,colorSpace:Gc,depthBuffer:!1},a=tg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bA(s)),this._blurMaterial=TA(s,e,n),this._ggxMaterial=EA(s,e,n)}return a}_compileMaterial(e){const n=new sa(new ui,e);this._renderer.compile(n,Jr)}_sceneToCubeUV(e,n,i,a,s){const o=new qn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,h=p.toneMapping;p.getClearColor($0),p.toneMapping=bi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new sa(new Jl,new q_({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let f=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,f=!0):(m.color.copy($0),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(o.up.set(0,c[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+d[M],s.y,s.z)):S===1?(o.up.set(0,0,c[M]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+d[M],s.z)):(o.up.set(0,c[M],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+d[M]));const T=this._cubeSize;ks(a,S*T,M>2?T:0,T,T),p.setRenderTarget(a),f&&p.render(E,o),p.render(e,o)}p.toneMapping=h,p.autoClear=u,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===xs||e.mapping===Rr;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;const l=s.uniforms;l.envMap.value=e;const o=this._cubeSize;ks(n,0,0,3*o,2*o),i.setRenderTarget(n),i.render(r,Jr)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,l=this._lodMeshes[i];l.material=r;const o=r.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-d*d),u=0+c*1.25,h=p*u,{_lodMax:_}=this,E=this._sizeLods[i],m=3*E*(i>_-wa?i-_+wa:0),f=4*(this._cubeSize-E);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=_-n,ks(s,m,f,3*E,2*E),a.setRenderTarget(s),a.render(l,Jr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=_-i,ks(e,m,f,3*E,2*E),a.setRenderTarget(e),a.render(l,Jr)}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,l){const o=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[a];p.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*as-1),E=s/_,m=isFinite(s)?1+Math.floor(d*E):as;m>as&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const f=[];let x=0;for(let C=0;C<as;++C){const v=C/E,A=Math.exp(-v*v/2);f.push(A),C===0?x+=A:C<m&&(x+=2*A)}for(let C=0;C<f.length;C++)f[C]=f[C]/x;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-i;const S=this._sizeLods[a],T=3*S*(a>M-wa?a-M+wa:0),R=4*(this._cubeSize-S);ks(n,T,R,3*S,2*S),o.setRenderTarget(n),o.render(p,Jr)}}function bA(t){const e=[],n=[],i=[];let a=t;const s=t-wa+1+J0.length;for(let r=0;r<s;r++){const l=Math.pow(2,a);e.push(l);let o=1/l;r>t-wa?o=J0[r-t+wa-1]:r===0&&(o=0),n.push(o);const c=1/(l-2),d=-c,p=1+c,u=[d,d,p,d,p,p,d,d,p,p,d,p],h=6,_=6,E=3,m=2,f=1,x=new Float32Array(E*_*h),M=new Float32Array(m*_*h),S=new Float32Array(f*_*h);for(let R=0;R<h;R++){const C=R%3*2/3-1,v=R>2?0:-1,A=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(A,E*_*R),M.set(u,m*_*R);const N=[R,R,R,R,R,R];S.set(N,f*_*R)}const T=new ui;T.setAttribute("position",new oi(x,E)),T.setAttribute("uv",new oi(M,m)),T.setAttribute("faceIndex",new oi(S,f)),i.push(new sa(T,null)),a>wa&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function tg(t,e,n){const i=new Ei(t,e,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function EA(t,e,n){return new Ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function TA(t,e,n){const i=new Float32Array(as),a=new k(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:pu(),fragmentShader:`

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
	`}class iS extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new K_(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Jl(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Zi});s.uniforms.tEquirect.value=n;const r=new sa(a,s),l=n.minFilter;return n.minFilter===ss&&(n.minFilter=fn),new D1(1,10,this).update(e,r),n.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}function AA(t){let e=new WeakMap,n=new WeakMap,i=null;function a(u,h=!1){return u==null?null:h?r(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===tf||h===nf)if(e.has(u)){const _=e.get(u).texture;return l(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const E=new iS(_.height);return E.fromEquirectangularTexture(t,u),e.set(u,E),u.addEventListener("dispose",c),l(E.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){const h=u.mapping,_=h===tf||h===nf,E=h===xs||h===Rr;if(_||E){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new eg(t)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return _&&x&&x.height>0||E&&x&&o(x)?(i===null&&(i=new eg(t)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function l(u,h){return h===tf?u.mapping=xs:h===nf&&(u.mapping=Rr),u}function o(u){let h=0;const _=6;for(let E=0;E<_;E++)u[E]!==void 0&&h++;return h===_}function c(u){const h=u.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const _=n.get(h);_!==void 0&&(n.delete(h),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:p}}function RA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&hr("WebGLRenderer: "+i+" extension not supported."),a}}}function CA(t,e,n,i){const a={},s=new WeakMap;function r(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete a[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function l(p,u){return a[u.id]===!0||(u.addEventListener("dispose",r),a[u.id]=!0,n.memory.geometries++),u}function o(p){const u=p.attributes;for(const h in u)e.update(u[h],t.ARRAY_BUFFER)}function c(p){const u=[],h=p.index,_=p.attributes.position;let E=0;if(_===void 0)return;if(h!==null){const x=h.array;E=h.version;for(let M=0,S=x.length;M<S;M+=3){const T=x[M+0],R=x[M+1],C=x[M+2];u.push(T,R,R,C,C,T)}}else{const x=_.array;E=_.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const T=M+0,R=M+1,C=M+2;u.push(T,R,R,C,C,T)}}const m=new(_.count>=65535?W_:X_)(u,1);m.version=E;const f=s.get(p);f&&e.remove(f),s.set(p,m)}function d(p){const u=s.get(p);if(u){const h=p.index;h!==null&&u.version<h.version&&c(p)}else c(p);return s.get(p)}return{get:l,update:o,getWireframeAttribute:d}}function wA(t,e,n){let i;function a(p){i=p}let s,r;function l(p){s=p.type,r=p.bytesPerElement}function o(p,u){t.drawElements(i,u,s,p*r),n.update(u,i,1)}function c(p,u,h){h!==0&&(t.drawElementsInstanced(i,u,s,p*r,h),n.update(u,i,h))}function d(p,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,p,0,h);let E=0;for(let m=0;m<h;m++)E+=u[m];n.update(E,i,1)}this.setMode=a,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function NA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,l){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:tt("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function DA(t,e,n){const i=new WeakMap,a=new Pt;function s(r,l,o){const c=r.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=d!==void 0?d.length:0;let u=i.get(l);if(u===void 0||u.count!==p){let N=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",N)};var h=N;u!==void 0&&u.texture.dispose();const _=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],x=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let S=0;_===!0&&(S=1),E===!0&&(S=2),m===!0&&(S=3);let T=l.attributes.position.count*S,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*R*4*p),v=new G_(C,T,R,p);v.type=Si,v.needsUpdate=!0;const A=S*4;for(let D=0;D<p;D++){const B=f[D],Y=x[D],te=M[D],F=T*R*4*D;for(let U=0;U<B.count;U++){const P=U*A;_===!0&&(a.fromBufferAttribute(B,U),C[F+P+0]=a.x,C[F+P+1]=a.y,C[F+P+2]=a.z,C[F+P+3]=0),E===!0&&(a.fromBufferAttribute(Y,U),C[F+P+4]=a.x,C[F+P+5]=a.y,C[F+P+6]=a.z,C[F+P+7]=0),m===!0&&(a.fromBufferAttribute(te,U),C[F+P+8]=a.x,C[F+P+9]=a.y,C[F+P+10]=a.z,C[F+P+11]=te.itemSize===4?a.w:1)}}u={count:p,texture:v,size:new ct(T,R)},i.set(l,u),l.addEventListener("dispose",N)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const E=l.morphTargetsRelative?1:1-_;o.getUniforms().setValue(t,"morphTargetBaseInfluence",E),o.getUniforms().setValue(t,"morphTargetInfluences",c)}o.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),o.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function UA(t,e,n,i,a){let s=new WeakMap;function r(c){const d=a.render.frame,p=c.geometry,u=e.get(c,p);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==d&&(h.update(),s.set(h,d))}return u}function l(){s=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:r,dispose:l}}const LA={[T_]:"LINEAR_TONE_MAPPING",[A_]:"REINHARD_TONE_MAPPING",[R_]:"CINEON_TONE_MAPPING",[C_]:"ACES_FILMIC_TONE_MAPPING",[N_]:"AGX_TONE_MAPPING",[D_]:"NEUTRAL_TONE_MAPPING",[w_]:"CUSTOM_TONE_MAPPING"};function OA(t,e,n,i,a,s){const r=new Ei(e,n,{type:t,depthBuffer:a,stencilBuffer:s,samples:i?4:0,depthTexture:a?new Cr(e,n):void 0}),l=new Ei(e,n,{type:ia,depthBuffer:!1,stencilBuffer:!1}),o=new ui;o.setAttribute("position",new Qi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Qi([0,2,0,0,2,0],2));const c=new C1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new sa(o,c),p=new eS(-1,1,1,-1,0,1);let u=null,h=null,_=!1,E,m=null,f=[],x=!1;this.setSize=function(M,S){r.setSize(M,S),l.setSize(M,S);for(let T=0;T<f.length;T++){const R=f[T];R.setSize&&R.setSize(M,S)}},this.setEffects=function(M){f=M,x=f.length>0&&f[0].isRenderPass===!0;const S=r.width,T=r.height;for(let R=0;R<f.length;R++){const C=f[R];C.setSize&&C.setSize(S,T)}},this.begin=function(M,S){if(_||M.toneMapping===bi&&f.length===0)return!1;if(m=S,S!==null){const T=S.width,R=S.height;(r.width!==T||r.height!==R)&&this.setSize(T,R)}return x===!1&&M.setRenderTarget(r),E=M.toneMapping,M.toneMapping=bi,!0},this.hasRenderPass=function(){return x},this.end=function(M,S){M.toneMapping=E,_=!0;let T=r,R=l;for(let C=0;C<f.length;C++){const v=f[C];if(v.enabled!==!1&&(v.render(M,R,T,S),v.needsSwap!==!1)){const A=T;T=R,R=A}}if(u!==M.outputColorSpace||h!==M.toneMapping){u=M.outputColorSpace,h=M.toneMapping,c.defines={},Ze.getTransfer(u)===ut&&(c.defines.SRGB_TRANSFER="");const C=LA[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(m),M.render(d,p),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),l.dispose(),o.dispose(),c.dispose()}}const aS=new dn,yh=new Cr(1,1),sS=new G_,rS=new i1,lS=new K_,ag=[],sg=[],rg=new Float32Array(16),lg=new Float32Array(9),og=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=ag[a];if(s===void 0&&(s=new Float32Array(a),ag[a]=s),e!==0){i.toArray(s,0);for(let r=1,l=0;r!==e;++r)l+=n,t[r].toArray(s,l)}return s}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mu(t,e){let n=sg[e];n===void 0&&(n=new Int32Array(e),sg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;og.set(i),t.uniformMatrix2fv(this.addr,!1,og),Zt(n,i)}}function HA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;lg.set(i),t.uniformMatrix3fv(this.addr,!1,lg),Zt(n,i)}}function GA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Yt(n,i))return;rg.set(i),t.uniformMatrix4fv(this.addr,!1,rg),Zt(n,i)}}function VA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function jA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function ZA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function KA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(yh.compareFunction=n.isReversedDepthBuffer()?Up:Dp,s=yh):s=aS,n.setTexture2D(e||s,a)}function QA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||rS,a)}function JA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||lS,a)}function $A(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||sS,a)}function e2(t){switch(t){case 5126:return PA;case 35664:return IA;case 35665:return zA;case 35666:return BA;case 35674:return FA;case 35675:return HA;case 35676:return GA;case 5124:case 35670:return VA;case 35667:case 35671:return kA;case 35668:case 35672:return XA;case 35669:case 35673:return WA;case 5125:return jA;case 36294:return qA;case 36295:return YA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return JA;case 36289:case 36303:case 36311:case 36292:return $A}}function t2(t,e){t.uniform1fv(this.addr,e)}function n2(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function i2(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function a2(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function s2(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function r2(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function l2(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function o2(t,e){t.uniform1iv(this.addr,e)}function c2(t,e){t.uniform2iv(this.addr,e)}function u2(t,e){t.uniform3iv(this.addr,e)}function f2(t,e){t.uniform4iv(this.addr,e)}function d2(t,e){t.uniform1uiv(this.addr,e)}function h2(t,e){t.uniform2uiv(this.addr,e)}function p2(t,e){t.uniform3uiv(this.addr,e)}function m2(t,e){t.uniform4uiv(this.addr,e)}function g2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=yh:r=aS;for(let l=0;l!==a;++l)n.setTexture2D(e[l]||r,s[l])}function x2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||rS,s[r])}function v2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||lS,s[r])}function _2(t,e,n){const i=this.cache,a=e.length,s=mu(n,a);Yt(i,s)||(t.uniform1iv(this.addr,s),Zt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||sS,s[r])}function S2(t){switch(t){case 5126:return t2;case 35664:return n2;case 35665:return i2;case 35666:return a2;case 35674:return s2;case 35675:return r2;case 35676:return l2;case 5124:case 35670:return o2;case 35667:case 35671:return c2;case 35668:case 35672:return u2;case 35669:case 35673:return f2;case 5125:return d2;case 36294:return h2;case 36295:return p2;case 36296:return m2;case 35678:case 36198:case 36298:case 36306:case 35682:return g2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return v2;case 36289:case 36303:case 36311:case 36292:return _2}}class y2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=e2(n.type)}}class M2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=S2(n.type)}}class b2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const l=a[s];l.setValue(e,n[l.id],i)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function cg(t,e){t.seq.push(e),t.map[e.id]=e}function E2(t,e,n){const i=t.name,a=i.length;for(Lf.lastIndex=0;;){const s=Lf.exec(i),r=Lf.lastIndex;let l=s[1];const o=s[2]==="]",c=s[3];if(o&&(l=l|0),c===void 0||c==="["&&r+2===a){cg(n,c===void 0?new y2(l,t,e):new M2(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new b2(l),cg(n,p)),n=p}}}class cc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const l=e.getActiveUniform(n,r),o=e.getUniformLocation(n,l.name);E2(l,o,this)}const a=[],s=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const l=n[s],o=i[l.id];o.needsUpdate!==!1&&l.setValue(e,o.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function ug(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const T2=37297;let A2=0;function R2(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const l=r+1;i.push(`${l===e?">":" "} ${l}: ${n[r]}`)}return i.join(`
`)}const fg=new Ie;function C2(t){Ze._getMatrix(fg,Ze.workingColorSpace,t);const e=`mat3( ${fg.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Vc:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const l=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+R2(t.getShaderSource(e),l)}else return s}function w2(t,e){const n=C2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const N2={[T_]:"Linear",[A_]:"Reinhard",[R_]:"Cineon",[C_]:"ACESFilmic",[N_]:"AgX",[D_]:"Neutral",[w_]:"Custom"};function D2(t,e){const n=N2[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vo=new k;function U2(){Ze.getLuminanceCoefficients(Vo);const t=Vo.x.toFixed(4),e=Vo.y.toFixed(4),n=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function O2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function P2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:l}}return n}function rl(t){return t!==""}function hg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(t){return t.replace(I2,B2)}const z2=new Map;function B2(t,e){let n=Ge[e];if(n===void 0){const i=z2.get(e);if(i!==void 0)n=Ge[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(n)}const F2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(t){return t.replace(F2,H2)}function H2(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function gg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const G2={[ac]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function V2(t){return G2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k2={[xs]:"ENVMAP_TYPE_CUBE",[Rr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function X2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":k2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const W2={[Rr]:"ENVMAP_MODE_REFRACTION"};function j2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":W2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const q2={[E_]:"ENVMAP_BLENDING_MULTIPLY",[Ib]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function Y2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":q2[t.combine]||"ENVMAP_BLENDING_NONE"}function Z2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K2(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,l=n.fragmentShader;const o=V2(n),c=X2(n),d=j2(n),p=Y2(n),u=Z2(n),h=L2(n),_=O2(s),E=a.createProgram();let m,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(rl).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(rl).join(`
`),f.length>0&&(f+=`
`)):(m=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),f=[gg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+o:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==bi?D2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,w2("linearToOutputTexel",n.outputColorSpace),U2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rl).join(`
`)),r=Mh(r),r=hg(r,n),r=pg(r,n),l=Mh(l),l=hg(l,n),l=pg(l,n),r=mg(r),l=mg(l),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===C0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===C0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+r,S=x+f+l,T=ug(a,a.VERTEX_SHADER,M),R=ug(a,a.FRAGMENT_SHADER,S);a.attachShader(E,T),a.attachShader(E,R),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function C(D){if(t.debug.checkShaderErrors){const B=a.getProgramInfoLog(E)||"",Y=a.getShaderInfoLog(T)||"",te=a.getShaderInfoLog(R)||"",F=B.trim(),U=Y.trim(),P=te.trim();let X=!0,$=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,E,T,R);else{const ie=dg(a,T,"vertex"),fe=dg(a,R,"fragment");tt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ie+`
`+fe)}else F!==""?Oe("WebGLProgram: Program Info Log:",F):(U===""||P==="")&&($=!1);$&&(D.diagnostics={runnable:X,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:P,prefix:f}})}a.deleteShader(T),a.deleteShader(R),v=new cc(a,E),A=P2(a,E)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=a.getProgramParameter(E,T2)),N},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=R,this}let Q2=0;class J2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $2(e),n.set(e,i)),i}}class $2{constructor(e){this.id=Q2++,this.code=e,this.usedTimes=0}}function e3(t){return t===vs||t===Fc||t===Hc}function t3(t,e,n,i,a,s){const r=new V_,l=new J2,o=new Set,c=[],d=new Map,p=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return o.add(v),v===0?"uv":`uv${v}`}function E(v,A,N,D,B,Y){const te=D.fog,F=B.geometry,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=e.get(v.envMap||U,P),$=X&&X.mapping===fu?X.image.height:null,ie=h[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Oe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const fe=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Se=fe!==void 0?fe.length:0;let Xe=0;F.morphAttributes.position!==void 0&&(Xe=1),F.morphAttributes.normal!==void 0&&(Xe=2),F.morphAttributes.color!==void 0&&(Xe=3);let $e,Ve,Q,ce;if(ie){const Te=gi[ie];$e=Te.vertexShader,Ve=Te.fragmentShader}else{$e=v.vertexShader,Ve=v.fragmentShader;const Te=l.getVertexShaderStage(v),Nt=l.getFragmentShaderStage(v);l.update(v,Te,Nt),Q=Te.id,ce=Nt.id}const ae=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,xe=B.isBatchedMesh===!0,Ct=!!v.map,be=!!v.matcap,at=!!X,Z=!!v.aoMap,ye=!!v.lightMap,Je=!!v.bumpMap&&v.wireframe===!1,nt=!!v.normalMap,st=!!v.displacementMap,qe=!!v.emissiveMap,_t=!!v.metalnessMap,wt=!!v.roughnessMap,O=v.anisotropy>0,Kt=v.clearcoat>0,it=v.dispersion>0,w=v.iridescence>0,g=v.sheen>0,z=v.transmission>0,G=O&&!!v.anisotropyMap,j=Kt&&!!v.clearcoatMap,re=Kt&&!!v.clearcoatNormalMap,oe=Kt&&!!v.clearcoatRoughnessMap,q=w&&!!v.iridescenceMap,K=w&&!!v.iridescenceThicknessMap,ue=g&&!!v.sheenColorMap,Ae=g&&!!v.sheenRoughnessMap,he=!!v.specularMap,se=!!v.specularColorMap,Ne=!!v.specularIntensityMap,Ue=z&&!!v.transmissionMap,Be=z&&!!v.thicknessMap,L=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,pe=!!v.alphaHash,_e=!!v.extensions;let ne=bi;v.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ne=t.toneMapping);const Ce={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,outputColorSpace:ae===null?t.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ct,matcap:be,envMap:at,envMapMode:at&&X.mapping,envMapCubeUVHeight:$,aoMap:Z,lightMap:ye,bumpMap:Je,normalMap:nt,displacementMap:st,emissiveMap:qe,normalMapObjectSpace:nt&&v.normalMapType===Hb,normalMapTangentSpace:nt&&v.normalMapType===T0,packedNormalMap:nt&&v.normalMapType===T0&&e3(v.normalMap.format),metalnessMap:_t,roughnessMap:wt,anisotropy:O,anisotropyMap:G,clearcoat:Kt,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,dispersion:it,iridescence:w,iridescenceMap:q,iridescenceThicknessMap:K,sheen:g,sheenColorMap:ue,sheenRoughnessMap:Ae,specularMap:he,specularColorMap:se,specularIntensityMap:Ne,transmission:z,transmissionMap:Ue,thicknessMap:Be,gradientMap:L,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:pe,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:Z&&_(v.aoMap.channel),lightMapUv:ye&&_(v.lightMap.channel),bumpMapUv:Je&&_(v.bumpMap.channel),normalMapUv:nt&&_(v.normalMap.channel),displacementMapUv:st&&_(v.displacementMap.channel),emissiveMapUv:qe&&_(v.emissiveMap.channel),metalnessMapUv:_t&&_(v.metalnessMap.channel),roughnessMapUv:wt&&_(v.roughnessMap.channel),anisotropyMapUv:G&&_(v.anisotropyMap.channel),clearcoatMapUv:j&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(v.sheenRoughnessMap.channel),specularMapUv:he&&_(v.specularMap.channel),specularColorMapUv:se&&_(v.specularColorMap.channel),specularIntensityMapUv:Ne&&_(v.specularIntensityMap.channel),transmissionMapUv:Ue&&_(v.transmissionMap.channel),thicknessMapUv:Be&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(nt||O),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Ct||de),fog:!!te,useFog:v.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&nt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:qe&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gi,flipSided:v.side===bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ce.vertexUv1s=o.has(1),Ce.vertexUv2s=o.has(2),Ce.vertexUv3s=o.has(3),o.clear(),Ce}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)A.push(N),A.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(f(A,v),x(A,v),A.push(t.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function f(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){r.disableAll(),A.instancing&&r.enable(0),A.instancingColor&&r.enable(1),A.instancingMorph&&r.enable(2),A.matcap&&r.enable(3),A.envMap&&r.enable(4),A.normalMapObjectSpace&&r.enable(5),A.normalMapTangentSpace&&r.enable(6),A.clearcoat&&r.enable(7),A.iridescence&&r.enable(8),A.alphaTest&&r.enable(9),A.vertexColors&&r.enable(10),A.vertexAlphas&&r.enable(11),A.vertexUv1s&&r.enable(12),A.vertexUv2s&&r.enable(13),A.vertexUv3s&&r.enable(14),A.vertexTangents&&r.enable(15),A.anisotropy&&r.enable(16),A.alphaHash&&r.enable(17),A.batching&&r.enable(18),A.dispersion&&r.enable(19),A.batchingColor&&r.enable(20),A.gradientMap&&r.enable(21),A.packedNormalMap&&r.enable(22),A.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),A.fog&&r.enable(0),A.useFog&&r.enable(1),A.flatShading&&r.enable(2),A.logarithmicDepthBuffer&&r.enable(3),A.reversedDepthBuffer&&r.enable(4),A.skinning&&r.enable(5),A.morphTargets&&r.enable(6),A.morphNormals&&r.enable(7),A.morphColors&&r.enable(8),A.premultipliedAlpha&&r.enable(9),A.shadowMapEnabled&&r.enable(10),A.doubleSided&&r.enable(11),A.flipSided&&r.enable(12),A.useDepthPacking&&r.enable(13),A.dithering&&r.enable(14),A.transmission&&r.enable(15),A.sheen&&r.enable(16),A.opaque&&r.enable(17),A.pointsUvs&&r.enable(18),A.decodeVideoTexture&&r.enable(19),A.decodeVideoTextureEmissive&&r.enable(20),A.alphaToCoverage&&r.enable(21),A.numLightProbeGrids>0&&r.enable(22),A.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function M(v){const A=h[v.type];let N;if(A){const D=gi[A];N=T1.clone(D.uniforms)}else N=v.uniforms;return N}function S(v,A){let N=d.get(A);return N!==void 0?++N.usedTimes:(N=new K2(t,A,v,a),c.push(N),d.set(A,N)),N}function T(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function C(){l.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:C}}function n3(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let l=t.get(r);return l===void 0&&(l={},t.set(r,l)),l}function i(r){t.delete(r)}function a(r,l,o){t.get(r)[l]=o}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function i3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vg(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function l(u,h,_,E,m,f){let x=t[e];return x===void 0?(x={id:u.id,object:u,geometry:h,material:_,materialVariant:r(u),groupOrder:E,renderOrder:u.renderOrder,z:m,group:f},t[e]=x):(x.id=u.id,x.object=u,x.geometry=h,x.material=_,x.materialVariant=r(u),x.groupOrder=E,x.renderOrder=u.renderOrder,x.z=m,x.group=f),e++,x}function o(u,h,_,E,m,f){const x=l(u,h,_,E,m,f);_.transmission>0?i.push(x):_.transparent===!0?a.push(x):n.push(x)}function c(u,h,_,E,m,f){const x=l(u,h,_,E,m,f);_.transmission>0?i.unshift(x):_.transparent===!0?a.unshift(x):n.unshift(x)}function d(u,h,_){n.length>1&&n.sort(u||i3),i.length>1&&i.sort(h||xg),a.length>1&&a.sort(h||xg),_&&(n.reverse(),i.reverse(),a.reverse())}function p(){for(let u=e,h=t.length;u<h;u++){const _=t[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:c,finish:p,sort:d}}function a3(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new vg,t.set(i,[r])):a>=s.length?(r=new vg,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function s3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new rt};break;case"SpotLight":n={position:new k,direction:new k,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function r3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let l3=0;function o3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function c3(t){const e=new s3,n=r3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const a=new k,s=new Ht,r=new Ht;function l(c){let d=0,p=0,u=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,_=0,E=0,m=0,f=0,x=0,M=0,S=0,T=0,R=0,C=0;c.sort(o3);for(let A=0,N=c.length;A<N;A++){const D=c[A],B=D.color,Y=D.intensity,te=D.distance;let F=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===vs?F=D.shadow.map.texture:F=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=B.r*Y,p+=B.g*Y,u+=B.b*Y;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],Y);C++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const P=D.shadow,X=n.get(D);X.shadowIntensity=P.intensity,X.shadowBias=P.bias,X.shadowNormalBias=P.normalBias,X.shadowRadius=P.radius,X.shadowMapSize=P.mapSize,i.directionalShadow[h]=X,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=D.shadow.matrix,x++}i.directional[h]=U,h++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(B).multiplyScalar(Y),U.distance=te,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[E]=U;const P=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,P.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[E]=P.matrix,D.castShadow){const X=n.get(D);X.shadowIntensity=P.intensity,X.shadowBias=P.bias,X.shadowNormalBias=P.normalBias,X.shadowRadius=P.radius,X.shadowMapSize=P.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=F,S++}E++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(B).multiplyScalar(Y),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=U,m++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const P=D.shadow,X=n.get(D);X.shadowIntensity=P.intensity,X.shadowBias=P.bias,X.shadowNormalBias=P.normalBias,X.shadowRadius=P.radius,X.shadowMapSize=P.mapSize,X.shadowCameraNear=P.camera.near,X.shadowCameraFar=P.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=U,_++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(Y),U.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[f]=U,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==h||v.pointLength!==_||v.spotLength!==E||v.rectAreaLength!==m||v.hemiLength!==f||v.numDirectionalShadows!==x||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==T||v.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,v.directionalLength=h,v.pointLength=_,v.spotLength=E,v.rectAreaLength=m,v.hemiLength=f,v.numDirectionalShadows=x,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=T,v.numLightProbes=C,i.version=l3++)}function o(c,d){let p=0,u=0,h=0,_=0,E=0;const m=d.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const M=c[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(M.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(M.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),E++}}}return{setup:l,setupView:o,state:i}}function _g(t){const e=new c3(t),n=[],i=[],a=[];function s(u){p.camera=u,n.length=0,i.length=0,a.length=0}function r(u){n.push(u)}function l(u){i.push(u)}function o(u){a.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:d,pushLight:r,pushShadow:l,pushLightProbeGrid:o}}function u3(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let l;return r===void 0?(l=new _g(t),e.set(a,[l])):s>=r.length?(l=new _g(t),r.push(l)):l=r[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const f3=`void main() {
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
}`,h3=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],p3=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Sg=new Ht,$r=new k,Of=new k;function m3(t,e,n){let i=new Y_;const a=new ct,s=new ct,r=new Pt,l=new w1,o=new N1,c={},d=n.maxTextureSize,p={[ka]:bn,[bn]:ka,[Gi]:Gi},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:f3,fragmentShader:d3}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const _=new ui;_.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new sa(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(R,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===xb&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ac);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Zi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=f!==this.type;Y&&C.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(F=>F.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,F=R.length;te<F;te++){const U=R[te],P=U.shadow;if(P===void 0){Oe("WebGLShadowMap:",U,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;a.copy(P.mapSize);const X=P.getFrameExtents();a.multiply(X),s.copy(P.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/X.x),a.x=s.x*X.x,P.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/X.y),a.y=s.y*X.y,P.mapSize.y=s.y));const $=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=$,P.map===null||Y===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===sl){if(U.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ei(a.x,a.y,{format:vs,type:ia,minFilter:fn,magFilter:fn,generateMipmaps:!1}),P.map.texture.name=U.name+".shadowMap",P.map.depthTexture=new Cr(a.x,a.y,Si),P.map.depthTexture.name=U.name+".shadowMapDepth",P.map.depthTexture.format=aa,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=rn,P.map.depthTexture.magFilter=rn}else U.isPointLight?(P.map=new iS(a.x),P.map.depthTexture=new b1(a.x,Ti)):(P.map=new Ei(a.x,a.y),P.map.depthTexture=new Cr(a.x,a.y,Ti)),P.map.depthTexture.name=U.name+".shadowMap",P.map.depthTexture.format=aa,this.type===ac?(P.map.depthTexture.compareFunction=$?Up:Dp,P.map.depthTexture.minFilter=fn,P.map.depthTexture.magFilter=fn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=rn,P.map.depthTexture.magFilter=rn);P.camera.updateProjectionMatrix()}const ie=P.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<ie;fe++){if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,fe),t.clear();else{fe===0&&(t.setRenderTarget(P.map),t.clear());const Se=P.getViewport(fe);r.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(r)}if(U.isPointLight){const Se=P.camera,Xe=P.matrix,$e=U.distance||Se.far;$e!==Se.far&&(Se.far=$e,Se.updateProjectionMatrix()),$r.setFromMatrixPosition(U.matrixWorld),Se.position.copy($r),Of.copy(Se.position),Of.add(h3[fe]),Se.up.copy(p3[fe]),Se.lookAt(Of),Se.updateMatrixWorld(),Xe.makeTranslation(-$r.x,-$r.y,-$r.z),Sg.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Sg,Se.coordinateSystem,Se.reversedDepth)}else P.updateMatrices(U);i=P.getFrustum(),S(C,v,P.camera,U,this.type)}P.isPointLightShadow!==!0&&this.type===sl&&x(P,v),P.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(A,N,D)};function x(R,C){const v=e.update(E);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(a.x,a.y,{format:vs,type:ia})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,v,u,E,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,v,h,E,null)}function M(R,C,v,A){let N=null;const D=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)N=D;else if(N=v.isPointLight===!0?o:l,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=N.uuid,Y=C.uuid;let te=c[B];te===void 0&&(te={},c[B]=te);let F=te[Y];F===void 0&&(F=N.clone(),te[Y]=F,C.addEventListener("dispose",T)),N=F}if(N.visible=C.visible,N.wireframe=C.wireframe,A===sl?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:p[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=t.properties.get(N);B.light=v}return N}function S(R,C,v,A,N){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&N===sl)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const Y=e.update(R),te=R.material;if(Array.isArray(te)){const F=Y.groups;for(let U=0,P=F.length;U<P;U++){const X=F[U],$=te[X.materialIndex];if($&&$.visible){const ie=M(R,$,A,N);R.onBeforeShadow(t,R,C,v,Y,ie,X),t.renderBufferDirect(v,null,Y,ie,R,X),R.onAfterShadow(t,R,C,v,Y,ie,X)}}}else if(te.visible){const F=M(R,te,A,N);R.onBeforeShadow(t,R,C,v,Y,F,null),t.renderBufferDirect(v,null,Y,F,R,null),R.onAfterShadow(t,R,C,v,Y,F,null)}}const B=R.children;for(let Y=0,te=B.length;Y<te;Y++)S(B[Y],C,v,A,N)}function T(R){R.target.removeEventListener("dispose",T);for(const v in c){const A=c[v],N=R.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function g3(t,e){function n(){let L=!1;const de=new Pt;let J=null;const pe=new Pt(0,0,0,0);return{setMask:function(_e){J!==_e&&!L&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ne,Ce,Te,Nt){Nt===!0&&(_e*=Te,ne*=Te,Ce*=Te),de.set(_e,ne,Ce,Te),pe.equals(de)===!1&&(t.clearColor(_e,ne,Ce,Te),pe.copy(de))},reset:function(){L=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,J=null,pe=null,_e=null;return{setReversed:function(ne){if(de!==ne){const Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),de=ne;const Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return de},setTest:function(ne){ne?ae(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ne){J!==ne&&!L&&(t.depthMask(ne),J=ne)},setFunc:function(ne){if(de&&(ne=Kb[ne]),pe!==ne){switch(ne){case Od:t.depthFunc(t.NEVER);break;case Pd:t.depthFunc(t.ALWAYS);break;case Id:t.depthFunc(t.LESS);break;case Ar:t.depthFunc(t.LEQUAL);break;case zd:t.depthFunc(t.EQUAL);break;case Bd:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Hd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=ne}},setLocked:function(ne){L=ne},setClear:function(ne){_e!==ne&&(_e=ne,de&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,J=null,pe=null,_e=null,de=!1}}}function a(){let L=!1,de=null,J=null,pe=null,_e=null,ne=null,Ce=null,Te=null,Nt=null;return{setTest:function(St){L||(St?ae(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(St){de!==St&&!L&&(t.stencilMask(St),de=St)},setFunc:function(St,fi,di){(J!==St||pe!==fi||_e!==di)&&(t.stencilFunc(St,fi,di),J=St,pe=fi,_e=di)},setOp:function(St,fi,di){(ne!==St||Ce!==fi||Te!==di)&&(t.stencilOp(St,fi,di),ne=St,Ce=fi,Te=di)},setLocked:function(St){L=St},setClear:function(St){Nt!==St&&(t.clearStencil(St),Nt=St)},reset:function(){L=!1,de=null,J=null,pe=null,_e=null,ne=null,Ce=null,Te=null,Nt=null}}}const s=new n,r=new i,l=new a,o=new WeakMap,c=new WeakMap;let d={},p={},u={},h=new WeakMap,_=[],E=null,m=!1,f=null,x=null,M=null,S=null,T=null,R=null,C=null,v=new rt(0,0,0),A=0,N=!1,D=null,B=null,Y=null,te=null,F=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec($)[1]),P=X>=1):$.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=X>=2);let ie=null,fe={};const Se=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),$e=new Pt().fromArray(Se),Ve=new Pt().fromArray(Xe);function Q(L,de,J,pe){const _e=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<J;Ce++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(de+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ne}const ce={};ce[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),l.setClear(0),ae(t.DEPTH_TEST),r.setFunc(Ar),Je(!1),nt(M0),ae(t.CULL_FACE),Z(Zi);function ae(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function le(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Pe(L,de){return u[L]!==de?(t.bindFramebuffer(L,de),u[L]=de,L===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function xe(L,de){let J=_,pe=!1;if(L){J=h.get(de),J===void 0&&(J=[],h.set(de,J));const _e=L.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,Ce=_e.length;ne<Ce;ne++)J[ne]=t.COLOR_ATTACHMENT0+ne;J.length=_e.length,pe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,pe=!0);pe&&t.drawBuffers(J)}function Ct(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const be={[is]:t.FUNC_ADD,[_b]:t.FUNC_SUBTRACT,[Sb]:t.FUNC_REVERSE_SUBTRACT};be[yb]=t.MIN,be[Mb]=t.MAX;const at={[bb]:t.ZERO,[Eb]:t.ONE,[Tb]:t.SRC_COLOR,[Ud]:t.SRC_ALPHA,[Db]:t.SRC_ALPHA_SATURATE,[wb]:t.DST_COLOR,[Rb]:t.DST_ALPHA,[Ab]:t.ONE_MINUS_SRC_COLOR,[Ld]:t.ONE_MINUS_SRC_ALPHA,[Nb]:t.ONE_MINUS_DST_COLOR,[Cb]:t.ONE_MINUS_DST_ALPHA,[Ub]:t.CONSTANT_COLOR,[Lb]:t.ONE_MINUS_CONSTANT_COLOR,[Ob]:t.CONSTANT_ALPHA,[Pb]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(L,de,J,pe,_e,ne,Ce,Te,Nt,St){if(L===Zi){m===!0&&(le(t.BLEND),m=!1);return}if(m===!1&&(ae(t.BLEND),m=!0),L!==vb){if(L!==f||St!==N){if((x!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),x=is,T=is),St)switch(L){case dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFunc(t.ONE,t.ONE);break;case b0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case E0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case b0:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}M=null,S=null,R=null,C=null,v.set(0,0,0),A=0,f=L,N=St}return}_e=_e||de,ne=ne||J,Ce=Ce||pe,(de!==x||_e!==T)&&(t.blendEquationSeparate(be[de],be[_e]),x=de,T=_e),(J!==M||pe!==S||ne!==R||Ce!==C)&&(t.blendFuncSeparate(at[J],at[pe],at[ne],at[Ce]),M=J,S=pe,R=ne,C=Ce),(Te.equals(v)===!1||Nt!==A)&&(t.blendColor(Te.r,Te.g,Te.b,Nt),v.copy(Te),A=Nt),f=L,N=!1}function ye(L,de){L.side===Gi?le(t.CULL_FACE):ae(t.CULL_FACE);let J=L.side===bn;de&&(J=!J),Je(J),L.blending===dr&&L.transparent===!1?Z(Zi):Z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const pe=L.stencilWrite;l.setTest(pe),pe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){D!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),D=L)}function nt(L){L!==mb?(ae(t.CULL_FACE),L!==B&&(L===M0?t.cullFace(t.BACK):L===gb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),B=L}function st(L){L!==Y&&(P&&t.lineWidth(L),Y=L)}function qe(L,de,J){L?(ae(t.POLYGON_OFFSET_FILL),(te!==de||F!==J)&&(te=de,F=J,r.getReversed()&&(de=-de),t.polygonOffset(de,J))):le(t.POLYGON_OFFSET_FILL)}function _t(L){L?ae(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function wt(L){L===void 0&&(L=t.TEXTURE0+U-1),ie!==L&&(t.activeTexture(L),ie=L)}function O(L,de,J){J===void 0&&(ie===null?J=t.TEXTURE0+U-1:J=ie);let pe=fe[J];pe===void 0&&(pe={type:void 0,texture:void 0},fe[J]=pe),(pe.type!==L||pe.texture!==de)&&(ie!==J&&(t.activeTexture(J),ie=J),t.bindTexture(L,de||ce[L]),pe.type=L,pe.texture=de)}function Kt(){const L=fe[ie];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function w(){try{t.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function g(){try{t.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function z(){try{t.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function re(){try{t.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function oe(){try{t.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function q(){try{t.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function K(){try{t.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function ue(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function Ae(L,de){p[L]!==de&&(t.pixelStorei(L,de),p[L]=de)}function he(L){$e.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),$e.copy(L))}function se(L){Ve.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Ne(L,de){let J=c.get(de);J===void 0&&(J=new WeakMap,c.set(de,J));let pe=J.get(L);pe===void 0&&(pe=t.getUniformBlockIndex(de,L.name),J.set(L,pe))}function Ue(L,de){const pe=c.get(de).get(L);o.get(de)!==pe&&(t.uniformBlockBinding(de,pe,L.__bindingPointIndex),o.set(de,pe))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},p={},ie=null,fe={},u={},h=new WeakMap,_=[],E=null,m=!1,f=null,x=null,M=null,S=null,T=null,R=null,C=null,v=new rt(0,0,0),A=0,N=!1,D=null,B=null,Y=null,te=null,F=null,$e.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),l.reset()}return{buffers:{color:s,depth:r,stencil:l},enable:ae,disable:le,bindFramebuffer:Pe,drawBuffers:xe,useProgram:Ct,setBlending:Z,setMaterial:ye,setFlipSided:Je,setCullFace:nt,setLineWidth:st,setPolygonOffset:qe,setScissorTest:_t,activeTexture:wt,bindTexture:O,unbindTexture:Kt,compressedTexImage2D:it,compressedTexImage3D:w,texImage2D:q,texImage3D:K,pixelStorei:Ae,getParameter:ue,updateUBOMapping:Ne,uniformBlockBinding:Ue,texStorage2D:re,texStorage3D:oe,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:he,viewport:se,reset:Be}}function x3(t,e,n,i,a,s,r){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,d=new WeakMap,p=new Set;let u;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,g){return _?new OffscreenCanvas(w,g):Xc("canvas")}function m(w,g,z){let G=1;const j=it(w);if((j.width>z||j.height>z)&&(G=z/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const re=Math.floor(G*j.width),oe=Math.floor(G*j.height);u===void 0&&(u=E(re,oe));const q=g?E(re,oe):u;return q.width=re,q.height=oe,q.getContext("2d").drawImage(w,0,0,re,oe),Oe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+re+"x"+oe+")."),q}else return"data"in w&&Oe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function f(w){return w.generateMipmaps}function x(w){t.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(w,g,z,G,j,re=!1){if(w!==null){if(t[w]!==void 0)return t[w];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let oe;G&&(oe=e.get("EXT_texture_norm16"),oe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=g;if(g===t.RED&&(z===t.FLOAT&&(q=t.R32F),z===t.HALF_FLOAT&&(q=t.R16F),z===t.UNSIGNED_BYTE&&(q=t.R8),z===t.UNSIGNED_SHORT&&oe&&(q=oe.R16_EXT),z===t.SHORT&&oe&&(q=oe.R16_SNORM_EXT)),g===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.R8UI),z===t.UNSIGNED_SHORT&&(q=t.R16UI),z===t.UNSIGNED_INT&&(q=t.R32UI),z===t.BYTE&&(q=t.R8I),z===t.SHORT&&(q=t.R16I),z===t.INT&&(q=t.R32I)),g===t.RG&&(z===t.FLOAT&&(q=t.RG32F),z===t.HALF_FLOAT&&(q=t.RG16F),z===t.UNSIGNED_BYTE&&(q=t.RG8),z===t.UNSIGNED_SHORT&&oe&&(q=oe.RG16_EXT),z===t.SHORT&&oe&&(q=oe.RG16_SNORM_EXT)),g===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RG8UI),z===t.UNSIGNED_SHORT&&(q=t.RG16UI),z===t.UNSIGNED_INT&&(q=t.RG32UI),z===t.BYTE&&(q=t.RG8I),z===t.SHORT&&(q=t.RG16I),z===t.INT&&(q=t.RG32I)),g===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGB8UI),z===t.UNSIGNED_SHORT&&(q=t.RGB16UI),z===t.UNSIGNED_INT&&(q=t.RGB32UI),z===t.BYTE&&(q=t.RGB8I),z===t.SHORT&&(q=t.RGB16I),z===t.INT&&(q=t.RGB32I)),g===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),z===t.UNSIGNED_INT&&(q=t.RGBA32UI),z===t.BYTE&&(q=t.RGBA8I),z===t.SHORT&&(q=t.RGBA16I),z===t.INT&&(q=t.RGBA32I)),g===t.RGB&&(z===t.UNSIGNED_SHORT&&oe&&(q=oe.RGB16_EXT),z===t.SHORT&&oe&&(q=oe.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),g===t.RGBA){const K=re?Vc:Ze.getTransfer(j);z===t.FLOAT&&(q=t.RGBA32F),z===t.HALF_FLOAT&&(q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(q=K===ut?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&oe&&(q=oe.RGBA16_EXT),z===t.SHORT&&oe&&(q=oe.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function T(w,g){let z;return w?g===null||g===Ti||g===Il?z=t.DEPTH24_STENCIL8:g===Si?z=t.DEPTH32F_STENCIL8:g===Pl&&(z=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===Il?z=t.DEPTH_COMPONENT24:g===Si?z=t.DEPTH_COMPONENT32F:g===Pl&&(z=t.DEPTH_COMPONENT16),z}function R(w,g){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==rn&&w.minFilter!==fn?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function C(w){const g=w.target;g.removeEventListener("dispose",C),A(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function v(w){const g=w.target;g.removeEventListener("dispose",v),D(g)}function A(w){const g=i.get(w);if(g.__webglInit===void 0)return;const z=w.source,G=h.get(z);if(G){const j=G[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&N(w),Object.keys(G).length===0&&h.delete(z)}i.remove(w)}function N(w){const g=i.get(w);t.deleteTexture(g.__webglTexture);const z=w.source,G=h.get(z);delete G[g.__cacheKey],r.memory.textures--}function D(w){const g=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[G][j]);else t.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)t.deleteFramebuffer(g.__webglFramebuffer[G]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=w.textures;for(let G=0,j=z.length;G<j;G++){const re=i.get(z[G]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),r.memory.textures--),i.remove(z[G])}i.remove(w)}let B=0;function Y(){B=0}function te(){return B}function F(w){B=w}function U(){const w=B;return w>=a.maxTextures&&Oe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),B+=1,w}function P(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function X(w,g){const z=i.get(w);if(w.isVideoTexture&&O(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const G=w.image;if(G===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,w,g);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+g)}function $(w,g){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){le(z,w,g);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+g)}function ie(w,g){const z=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){le(z,w,g);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+g)}function fe(w,g){const z=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Pe(z,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+g)}const Se={[Gd]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Vd]:t.MIRRORED_REPEAT},Xe={[rn]:t.NEAREST,[Bb]:t.NEAREST_MIPMAP_NEAREST,[vo]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[af]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},$e={[Gb]:t.NEVER,[jb]:t.ALWAYS,[Vb]:t.LESS,[Dp]:t.LEQUAL,[kb]:t.EQUAL,[Up]:t.GEQUAL,[Xb]:t.GREATER,[Wb]:t.NOTEQUAL};function Ve(w,g){if(g.type===Si&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===fn||g.magFilter===af||g.magFilter===vo||g.magFilter===ss||g.minFilter===fn||g.minFilter===af||g.minFilter===vo||g.minFilter===ss)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Se[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Se[g.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Se[g.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Xe[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Xe[g.minFilter]),g.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,$e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===rn||g.minFilter!==vo&&g.minFilter!==ss||g.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Q(w,g){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",C));const G=g.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const re=P(g);if(re!==w.__cacheKey){j[re]===void 0&&(j[re]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,z=!0),j[re].usedTimes++;const oe=j[w.__cacheKey];oe!==void 0&&(j[w.__cacheKey].usedTimes--,oe.usedTimes===0&&N(g)),w.__cacheKey=re,w.__webglTexture=j[re].texture}return z}function ce(w,g,z){return Math.floor(Math.floor(w/z)/g)}function ae(w,g,z,G){const re=w.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,z,G,g.data);else{re.sort((Ae,he)=>Ae.start-he.start);let oe=0;for(let Ae=1;Ae<re.length;Ae++){const he=re[oe],se=re[Ae],Ne=he.start+he.count,Ue=ce(se.start,g.width,4),Be=ce(he.start,g.width,4);se.start<=Ne+1&&Ue===Be&&ce(se.start+se.count-1,g.width,4)===Ue?he.count=Math.max(he.count,se.start+se.count-he.start):(++oe,re[oe]=se)}re.length=oe+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let Ae=0,he=re.length;Ae<he;Ae++){const se=re[Ae],Ne=Math.floor(se.start/4),Ue=Math.ceil(se.count/4),Be=Ne%g.width,L=Math.floor(Ne/g.width),de=Ue,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Be,L,de,J,z,G,g.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function le(w,g,z){let G=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=t.TEXTURE_3D);const j=Q(w,g),re=g.source;n.bindTexture(G,w.__webglTexture,t.TEXTURE0+z);const oe=i.get(re);if(re.version!==oe.__version||j===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),pe=g.colorSpace===ba?null:Ze.getPrimaries(g.colorSpace),_e=g.colorSpace===ba||J===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,a.maxTextureSize);K=Kt(g,K);const ue=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let he=S(g.internalFormat,ue,Ae,g.normalized,g.colorSpace,g.isVideoTexture);Ve(G,g);let se;const Ne=g.mipmaps,Ue=g.isVideoTexture!==!0,Be=oe.__version===void 0||j===!0,L=re.dataReady,de=R(g,K);if(g.isDepthTexture)he=T(g.format===rs,g.type),Be&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,he,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,he,K.width,K.height,0,ue,Ae,null));else if(g.isDataTexture)if(Ne.length>0){Ue&&Be&&n.texStorage2D(t.TEXTURE_2D,de,he,Ne[0].width,Ne[0].height);for(let J=0,pe=Ne.length;J<pe;J++)se=Ne[J],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,se.width,se.height,ue,Ae,se.data):n.texImage2D(t.TEXTURE_2D,J,he,se.width,se.height,0,ue,Ae,se.data);g.generateMipmaps=!1}else Ue?(Be&&n.texStorage2D(t.TEXTURE_2D,de,he,K.width,K.height),L&&ae(g,K,ue,Ae)):n.texImage2D(t.TEXTURE_2D,0,he,K.width,K.height,0,ue,Ae,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,Ne[0].width,Ne[0].height,K.depth);for(let J=0,pe=Ne.length;J<pe;J++)if(se=Ne[J],g.format!==li)if(ue!==null)if(Ue){if(L)if(g.layerUpdates.size>0){const _e=Q0(se.width,se.height,g.format,g.type);for(const ne of g.layerUpdates){const Ce=se.data.subarray(ne*_e/se.data.BYTES_PER_ELEMENT,(ne+1)*_e/se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ne,se.width,se.height,1,ue,Ce)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,K.depth,ue,se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,se.width,se.height,K.depth,0,se.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,K.depth,ue,Ae,se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,se.width,se.height,K.depth,0,ue,Ae,se.data)}else{Ue&&Be&&n.texStorage2D(t.TEXTURE_2D,de,he,Ne[0].width,Ne[0].height);for(let J=0,pe=Ne.length;J<pe;J++)se=Ne[J],g.format!==li?ue!==null?Ue?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,se.width,se.height,ue,se.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,se.width,se.height,0,se.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,se.width,se.height,ue,Ae,se.data):n.texImage2D(t.TEXTURE_2D,J,he,se.width,se.height,0,ue,Ae,se.data)}else if(g.isDataArrayTexture)if(Ue){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,he,K.width,K.height,K.depth),L)if(g.layerUpdates.size>0){const J=Q0(K.width,K.height,g.format,g.type);for(const pe of g.layerUpdates){const _e=K.data.subarray(pe*J/K.data.BYTES_PER_ELEMENT,(pe+1)*J/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,K.width,K.height,1,ue,Ae,_e)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,Ae,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,K.width,K.height,K.depth,0,ue,Ae,K.data);else if(g.isData3DTexture)Ue?(Be&&n.texStorage3D(t.TEXTURE_3D,de,he,K.width,K.height,K.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,Ae,K.data)):n.texImage3D(t.TEXTURE_3D,0,he,K.width,K.height,K.depth,0,ue,Ae,K.data);else if(g.isFramebufferTexture){if(Be)if(Ue)n.texStorage2D(t.TEXTURE_2D,de,he,K.width,K.height);else{let J=K.width,pe=K.height;for(let _e=0;_e<de;_e++)n.texImage2D(t.TEXTURE_2D,_e,he,J,pe,0,ue,Ae,null),J>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),p.add(g),J.onpaint=pe=>{const _e=pe.changedElements;for(const ne of p)_e.includes(ne.image)&&(ne.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{const _e=t.RGBA,ne=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ne,Ce,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ue&&Be){const J=it(Ne[0]);n.texStorage2D(t.TEXTURE_2D,de,he,J.width,J.height)}for(let J=0,pe=Ne.length;J<pe;J++)se=Ne[J],Ue?L&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ue,Ae,se):n.texImage2D(t.TEXTURE_2D,J,he,ue,Ae,se);g.generateMipmaps=!1}else if(Ue){if(Be){const J=it(K);n.texStorage2D(t.TEXTURE_2D,de,he,J.width,J.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ae,K)}else n.texImage2D(t.TEXTURE_2D,0,he,ue,Ae,K);f(g)&&x(G),oe.__version=re.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Pe(w,g,z){if(g.image.length!==6)return;const G=Q(w,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+z);const re=i.get(j);if(j.version!==re.__version||G===!0){n.activeTexture(t.TEXTURE0+z);const oe=Ze.getPrimaries(Ze.workingColorSpace),q=g.colorSpace===ba?null:Ze.getPrimaries(g.colorSpace),K=g.colorSpace===ba||oe===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Ae=g.image[0]&&g.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!ue&&!Ae?he[ne]=m(g.image[ne],!0,a.maxCubemapSize):he[ne]=Ae?g.image[ne].image:g.image[ne],he[ne]=Kt(g,he[ne]);const se=he[0],Ne=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type),Be=S(g.internalFormat,Ne,Ue,g.normalized,g.colorSpace),L=g.isVideoTexture!==!0,de=re.__version===void 0||G===!0,J=j.dataReady;let pe=R(g,se);Ve(t.TEXTURE_CUBE_MAP,g);let _e;if(ue){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Be,se.width,se.height);for(let ne=0;ne<6;ne++){_e=he[ne].mipmaps;for(let Ce=0;Ce<_e.length;Ce++){const Te=_e[Ce];g.format!==li?Ne!==null?L?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Te.width,Te.height,Ne,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Be,Te.width,Te.height,0,Te.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,Te.width,Te.height,Ne,Ue,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Be,Te.width,Te.height,0,Ne,Ue,Te.data)}}}else{if(_e=g.mipmaps,L&&de){_e.length>0&&pe++;const ne=it(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Be,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Ne,Ue,he[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,he[ne].width,he[ne].height,0,Ne,Ue,he[ne].data);for(let Ce=0;Ce<_e.length;Ce++){const Nt=_e[Ce].image[ne].image;L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Nt.width,Nt.height,Ne,Ue,Nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Be,Nt.width,Nt.height,0,Ne,Ue,Nt.data)}}else{L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Ue,he[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Be,Ne,Ue,he[ne]);for(let Ce=0;Ce<_e.length;Ce++){const Te=_e[Ce];L?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Ne,Ue,Te.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Be,Ne,Ue,Te.image[ne])}}}f(g)&&x(t.TEXTURE_CUBE_MAP),re.__version=j.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function xe(w,g,z,G,j,re){const oe=s.convert(z.format,z.colorSpace),q=s.convert(z.type),K=S(z.internalFormat,oe,q,z.normalized,z.colorSpace),ue=i.get(g),Ae=i.get(z);if(Ae.__renderTarget=g,!ue.__hasExternalTextures){const he=Math.max(1,g.width>>re),se=Math.max(1,g.height>>re);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,re,K,he,se,g.depth,0,oe,q,null):n.texImage2D(j,re,K,he,se,0,oe,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),wt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,j,Ae.__webglTexture,0,_t(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,j,Ae.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ct(w,g,z){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){const G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,re=T(g.stencilBuffer,j),oe=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;wt(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(g),re,g.width,g.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(g),re,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,re,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,w)}else{const G=g.textures;for(let j=0;j<G.length;j++){const re=G[j],oe=s.convert(re.format,re.colorSpace),q=s.convert(re.type),K=S(re.internalFormat,oe,q,re.normalized,re.colorSpace);wt(g)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_t(g),K,g.width,g.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,_t(g),K,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,K,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(w,g,z){const G=g.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),j.__webglTexture===void 0){j.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g.depthTexture);const ue=s.convert(g.depthTexture.format),Ae=s.convert(g.depthTexture.type);let he;g.depthTexture.format===aa?he=t.DEPTH_COMPONENT24:g.depthTexture.format===rs&&(he=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,he,g.width,g.height,0,ue,Ae,null)}}else X(g.depthTexture,0);const re=j.__webglTexture,oe=_t(g),q=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,K=g.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(g.depthTexture.format===aa)wt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,q,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,K,q,re,0);else if(g.depthTexture.format===rs)wt(g)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,q,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,K,q,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(w){const g=i.get(w),z=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)be(g.__webglFramebuffer[G],w,G);else{const G=w.texture.mipmaps;G&&G.length>0?be(g.__webglFramebuffer[0],w,0):be(g.__webglFramebuffer,w,0)}else if(z){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=t.createRenderbuffer(),Ct(g.__webglDepthbuffer[G],w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,re)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),Ct(g.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,re)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(w,g,z){const G=i.get(w);g!==void 0&&xe(G.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&at(w)}function ye(w){const g=w.texture,z=i.get(w),G=i.get(g);w.addEventListener("dispose",v);const j=w.textures,re=w.isWebGLCubeRenderTarget===!0,oe=j.length>1;if(oe||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=g.version,r.memory.textures++),re){z.__webglFramebuffer=[];for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[q]=[];for(let K=0;K<g.mipmaps.length;K++)z.__webglFramebuffer[q][K]=t.createFramebuffer()}else z.__webglFramebuffer[q]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let q=0;q<g.mipmaps.length;q++)z.__webglFramebuffer[q]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(oe)for(let q=0,K=j.length;q<K;q++){const ue=i.get(j[q]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),r.memory.textures++)}if(w.samples>0&&wt(w)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let q=0;q<j.length;q++){const K=j[q];z.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[q]);const ue=s.convert(K.format,K.colorSpace),Ae=s.convert(K.type),he=S(K.internalFormat,ue,Ae,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),se=_t(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,he,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,z.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ct(z.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,g);for(let q=0;q<6;q++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)xe(z.__webglFramebuffer[q][K],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,K);else xe(z.__webglFramebuffer[q],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(g)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(oe){for(let q=0,K=j.length;q<K;q++){const ue=j[q],Ae=i.get(ue);let he=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ae.__webglTexture),Ve(he,ue),xe(z.__webglFramebuffer,w,ue,t.COLOR_ATTACHMENT0+q,he,0),f(ue)&&x(he)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,G.__webglTexture),Ve(q,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)xe(z.__webglFramebuffer[K],w,g,t.COLOR_ATTACHMENT0,q,K);else xe(z.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,q,0);f(g)&&x(q),n.unbindTexture()}w.depthBuffer&&at(w)}function Je(w){const g=w.textures;for(let z=0,G=g.length;z<G;z++){const j=g[z];if(f(j)){const re=M(w),oe=i.get(j).__webglTexture;n.bindTexture(re,oe),x(re),n.unbindTexture()}}}const nt=[],st=[];function qe(w){if(w.samples>0){if(wt(w)===!1){const g=w.textures,z=w.width,G=w.height;let j=t.COLOR_BUFFER_BIT;const re=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(w),q=g.length>1;if(q)for(let ue=0;ue<g.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const K=w.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ae=i.get(g[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,z,G,0,0,z,G,j,t.NEAREST),o===!0&&(nt.length=0,st.length=0,nt.push(t.COLOR_ATTACHMENT0+ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(re),st.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,st)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let ue=0;ue<g.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,oe.__webglColorRenderbuffer[ue]);const Ae=i.get(g[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&o){const g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function _t(w){return Math.min(a.maxSamples,w.samples)}function wt(w){const g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(w){const g=r.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function Kt(w,g){const z=w.colorSpace,G=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Gc&&z!==ba&&(Ze.getTransfer(z)===ut?(G!==li||j!==Qn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",z)),g}function it(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=Y,this.getTextureUnits=te,this.setTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=fe,this.rebindTextures=Z,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function v3(t,e){function n(i,a=ba){let s;const r=Ze.getTransfer(a);if(i===Qn)return t.UNSIGNED_BYTE;if(i===Ap)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===P_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===I_)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===L_)return t.BYTE;if(i===O_)return t.SHORT;if(i===Pl)return t.UNSIGNED_SHORT;if(i===Tp)return t.INT;if(i===Ti)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===ia)return t.HALF_FLOAT;if(i===z_)return t.ALPHA;if(i===B_)return t.RGB;if(i===li)return t.RGBA;if(i===aa)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===F_)return t.RED;if(i===Cp)return t.RED_INTEGER;if(i===vs)return t.RG;if(i===wp)return t.RG_INTEGER;if(i===Np)return t.RGBA_INTEGER;if(i===sc||i===rc||i===lc||i===oc)if(r===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Xd||i===Wd||i===jd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===Yd||i===Zd||i===Kd||i===Qd||i===Fc||i===Jd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===Yd)return r===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return s.COMPRESSED_R11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return s.COMPRESSED_RG11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$d||i===eh||i===th||i===nh||i===ih||i===ah||i===sh||i===rh||i===lh||i===oh||i===ch||i===uh||i===fh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$d)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===th)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ih)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ah)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===oh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ch)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hh||i===ph||i===mh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hh)return r===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ph)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gh||i===xh||i===Hc||i===vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Il?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const _3=`
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

}`;class y3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Q_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ai({vertexShader:_3,fragmentShader:S3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sa(new hu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M3 extends Ts{constructor(e,n){super();const i=this;let a=null,s=1,r=null,l="local-floor",o=1,c=null,d=null,p=null,u=null,h=null,_=null;const E=typeof XRWebGLBinding<"u",m=new y3,f={},x=n.getContextAttributes();let M=null,S=null;const T=[],R=[],C=new ct;let v=null;const A=new qn;A.viewport=new Pt;const N=new qn;N.viewport=new Pt;const D=[A,N],B=new U1;let Y=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=T[Q];return ce===void 0&&(ce=new df,T[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=T[Q];return ce===void 0&&(ce=new df,T[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=T[Q];return ce===void 0&&(ce=new df,T[Q]=ce),ce.getHandSpace()};function F(Q){const ce=R.indexOf(Q.inputSource);if(ce===-1)return;const ae=T[ce];ae!==void 0&&(ae.update(Q.inputSource,Q.frame,c||r),ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){a.removeEventListener("select",F),a.removeEventListener("selectstart",F),a.removeEventListener("selectend",F),a.removeEventListener("squeeze",F),a.removeEventListener("squeezestart",F),a.removeEventListener("squeezeend",F),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",P);for(let Q=0;Q<T.length;Q++){const ce=R[Q];ce!==null&&(R[Q]=null,T[Q].disconnect(ce))}Y=null,te=null,m.reset();for(const Q in f)delete f[Q];e.setRenderTarget(M),h=null,u=null,p=null,a=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(M=e.getRenderTarget(),a.addEventListener("select",F),a.addEventListener("selectstart",F),a.addEventListener("selectend",F),a.addEventListener("squeeze",F),a.addEventListener("squeezestart",F),a.addEventListener("squeezeend",F),a.addEventListener("end",U),a.addEventListener("inputsourceschange",P),x.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,le=null,Pe=null;x.depth&&(Pe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=x.stencil?rs:aa,le=x.stencil?Il:Ti);const xe={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:s};p=this.getBinding(),u=p.createProjectionLayer(xe),a.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Ei(u.textureWidth,u.textureHeight,{format:li,type:Qn,depthTexture:new Cr(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ei(h.framebufferWidth,h.framebufferHeight,{format:li,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),c=null,r=await a.requestReferenceSpace(l),Ve.setContext(a),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(Q){for(let ce=0;ce<Q.removed.length;ce++){const ae=Q.removed[ce],le=R.indexOf(ae);le>=0&&(R[le]=null,T[le].disconnect(ae))}for(let ce=0;ce<Q.added.length;ce++){const ae=Q.added[ce];let le=R.indexOf(ae);if(le===-1){for(let xe=0;xe<T.length;xe++)if(xe>=R.length){R.push(ae),le=xe;break}else if(R[xe]===null){R[xe]=ae,le=xe;break}if(le===-1)break}const Pe=T[le];Pe&&Pe.connect(ae)}}const X=new k,$=new k;function ie(Q,ce,ae){X.setFromMatrixPosition(ce.matrixWorld),$.setFromMatrixPosition(ae.matrixWorld);const le=X.distanceTo($),Pe=ce.projectionMatrix.elements,xe=ae.projectionMatrix.elements,Ct=Pe[14]/(Pe[10]-1),be=Pe[14]/(Pe[10]+1),at=(Pe[9]+1)/Pe[5],Z=(Pe[9]-1)/Pe[5],ye=(Pe[8]-1)/Pe[0],Je=(xe[8]+1)/xe[0],nt=Ct*ye,st=Ct*Je,qe=le/(-ye+Je),_t=qe*-ye;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_t),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const wt=Ct+qe,O=be+qe,Kt=nt-_t,it=st+(le-_t),w=at*be/O*wt,g=Z*be/O*wt;Q.projectionMatrix.makePerspective(Kt,it,w,g,wt,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function fe(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ce=Q.near,ae=Q.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),B.near=N.near=A.near=ce,B.far=N.far=A.far=ae,(Y!==B.near||te!==B.far)&&(a.updateRenderState({depthNear:B.near,depthFar:B.far}),Y=B.near,te=B.far),B.layers.mask=Q.layers.mask|6,A.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;const le=Q.parent,Pe=B.cameras;fe(B,le);for(let xe=0;xe<Pe.length;xe++)fe(Pe[xe],le);Pe.length===2?ie(B,A,N):B.projectionMatrix.copy(A.projectionMatrix),Se(Q,B,le)};function Se(Q,ce,ae){ae===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_h*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&h===null))return o},this.setFoveation=function(Q){o=Q,u!==null&&(u.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Q){return f[Q]};let Xe=null;function $e(Q,ce){if(d=ce.getViewerPose(c||r),_=ce,d!==null){const ae=d.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let le=!1;ae.length!==B.cameras.length&&(B.cameras.length=0,le=!0);for(let be=0;be<ae.length;be++){const at=ae[be];let Z=null;if(h!==null)Z=h.getViewport(at);else{const Je=p.getViewSubImage(u,at);Z=Je.viewport,be===0&&(e.setRenderTargetTextures(S,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(S))}let ye=D[be];ye===void 0&&(ye=new qn,ye.layers.enable(be),ye.viewport=new Pt,D[be]=ye),ye.matrix.fromArray(at.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(at.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Z.x,Z.y,Z.width,Z.height),be===0&&(B.matrix.copy(ye.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),le===!0&&B.cameras.push(ye)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const be=p.getDepthInformation(ae[0]);be&&be.isValid&&be.texture&&m.init(be,a.renderState)}if(Pe&&Pe.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let be=0;be<ae.length;be++){const at=ae[be].camera;if(at){let Z=f[at];Z||(Z=new Q_,f[at]=Z);const ye=p.getCameraImage(at);Z.sourceTexture=ye}}}}for(let ae=0;ae<T.length;ae++){const le=R[ae],Pe=T[ae];le!==null&&Pe!==void 0&&Pe.update(le,ce,c||r)}Xe&&Xe(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Ve=new tS;Ve.setAnimationLoop($e),this.setAnimationLoop=function(Q){Xe=Q},this.dispose=function(){}}}const b3=new Ht,oS=new Ie;oS.set(-1,0,0,0,1,0,0,0,1);function E3(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,J_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),p(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&h(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),E(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?o(m,f,x,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===bn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===bn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),M=x.envMap,S=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(b3.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(oS),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===bn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function T3(t,e,n,i){let a={},s={},r=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function o(S,T){const R=T.program;i.uniformBlockBinding(S,R)}function c(S,T){let R=a[S.id];R===void 0&&(m(S),R=d(S),a[S.id]=R,S.addEventListener("dispose",x));const C=T.program;i.updateUBOMapping(S,C);const v=e.render.frame;s[S.id]!==v&&(u(S),s[S.id]=v)}function d(S){const T=p();S.__bindingPointIndex=T;const R=t.createBuffer(),C=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,R),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,R),R}function p(){for(let S=0;S<l;S++)if(r.indexOf(S)===-1)return r.push(S),S;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const T=a[S.id],R=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,A=R.length;v<A;v++){const N=R[v];if(Array.isArray(N))for(let D=0,B=N.length;D<B;D++)h(N[D],v,D,C);else h(N,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,T,R,C){if(E(S,T,R,C)===!0){const v=S.__offset,A=S.value;if(Array.isArray(A)){let N=0;for(let D=0;D<A.length;D++){const B=A[D],Y=f(B);_(B,S.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function _(S,T,R){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,R)}function E(S,T,R,C){const v=S.value,A=T+"_"+R;if(C[A]===void 0)return typeof v=="number"||typeof v=="boolean"?C[A]=v:ArrayBuffer.isView(v)?C[A]=v.slice():C[A]=v.clone(),!0;{const N=C[A];if(typeof v=="number"||typeof v=="boolean"){if(N!==v)return C[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(N.equals(v)===!1)return N.copy(v),!0}}return!1}function m(S){const T=S.uniforms;let R=0;const C=16;for(let A=0,N=T.length;A<N;A++){const D=Array.isArray(T[A])?T[A]:[T[A]];for(let B=0,Y=D.length;B<Y;B++){const te=D[B],F=Array.isArray(te.value)?te.value:[te.value];for(let U=0,P=F.length;U<P;U++){const X=F[U],$=f(X),ie=R%C,fe=ie%$.boundary,Se=ie+fe;R+=fe,Se!==0&&C-Se<$.storage&&(R+=C-Se),te.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=R,R+=$.storage}}}const v=R%C;return v>0&&(R+=C-v),S.__size=R,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),T}function x(S){const T=S.target;T.removeEventListener("dispose",x);const R=r.indexOf(T.__bindingPointIndex);r.splice(R,1),t.deleteBuffer(a[T.id]),delete a[T.id],delete s[T.id]}function M(){for(const S in a)t.deleteBuffer(a[S]);r=[],a={},s={}}return{bind:o,update:c,dispose:M}}const A3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mi=null;function R3(){return mi===null&&(mi=new x1(A3,16,16,vs,ia),mi.name="DFG_LUT",mi.minFilter=fn,mi.magFilter=fn,mi.wrapS=Wi,mi.wrapT=Wi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}class C3{constructor(e={}){const{canvas:n=Yb(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Qn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;const E=h,m=new Set([Np,wp,Cp]),f=new Set([Qn,Ti,Pl,Il,Ap,Rp]),x=new Uint32Array(4),M=new Int32Array(4),S=new k;let T=null,R=null;const C=[],v=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,B=null,Y=null,te=null,F=null;this._outputColorSpace=kn;let U=0,P=0,X=null,$=-1,ie=null;const fe=new Pt,Se=new Pt;let Xe=null;const $e=new rt(0);let Ve=0,Q=n.width,ce=n.height,ae=1,le=null,Pe=null;const xe=new Pt(0,0,Q,ce),Ct=new Pt(0,0,Q,ce);let be=!1;const at=new Y_;let Z=!1,ye=!1;const Je=new Ht,nt=new k,st=new Pt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function wt(){return X===null?ae:1}let O=i;function Kt(b,I){return n.getContext(b,I)}try{const b={alpha:!0,depth:a,stencil:s,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ep}`),n.addEventListener("webglcontextlost",Nt,!1),n.addEventListener("webglcontextrestored",St,!1),n.addEventListener("webglcontextcreationerror",fi,!1),O===null){const I="webgl2";if(O=Kt(I,b),O===null)throw Kt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw tt("WebGLRenderer: "+b.message),b}let it,w,g,z,G,j,re,oe,q,K,ue,Ae,he,se,Ne,Ue,Be,L,de,J,pe,_e,ne;function Ce(){it=new RA(O),it.init(),pe=new v3(O,it),w=new _A(O,it,e,pe),g=new g3(O,it),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=O.createFramebuffer(),te=O.createFramebuffer(),F=O.createFramebuffer(),z=new NA(O),G=new n3,j=new x3(O,it,g,G,w,pe,z),re=new AA(N),oe=new O1(O),_e=new xA(O,oe),q=new CA(O,oe,z,_e),K=new UA(O,q,oe,_e,z),L=new DA(O,w,j),Ne=new SA(G),ue=new t3(N,re,it,w,_e,Ne),Ae=new E3(N,G),he=new a3,se=new u3(it),Be=new gA(N,re,g,K,_,o),Ue=new m3(N,K,w),ne=new T3(O,z,w,g),de=new vA(O,it,z),J=new wA(O,it,z),z.programs=ue.programs,N.capabilities=w,N.extensions=it,N.properties=G,N.renderLists=he,N.shadowMap=Ue,N.state=g,N.info=z}Ce(),E!==Qn&&(A=new OA(E,n.width,n.height,l,a,s));const Te=new M3(N,O);this.xr=Te,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(Q,ce,!1))},this.getSize=function(b){return b.set(Q,ce)},this.setSize=function(b,I,W=!0){if(Te.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,ce=I,n.width=Math.floor(b*ae),n.height=Math.floor(I*ae),W===!0&&(n.style.width=b+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(Q*ae,ce*ae).floor()},this.setDrawingBufferSize=function(b,I,W){Q=b,ce=I,ae=W,n.width=Math.floor(b*W),n.height=Math.floor(I*W),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(E===Qn){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(fe)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,I,W,H){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,I,W,H),g.viewport(fe.copy(xe).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,I,W,H){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,I,W,H),g.scissor(Se.copy(Ct).multiplyScalar(ae).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){g.setScissorTest(be=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){Pe=b},this.getClearColor=function(b){return b.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,W=!0){let H=0;if(b){let V=!1;if(X!==null){const ve=X.texture.format;V=m.has(ve)}if(V){const ve=X.texture.type,Ee=f.has(ve),ge=Be.getClearColor(),Re=Be.getClearAlpha(),we=ge.r,Fe=ge.g,ke=ge.b;Ee?(x[0]=we,x[1]=Fe,x[2]=ke,x[3]=Re,O.clearBufferuiv(O.COLOR,0,x)):(M[0]=we,M[1]=Fe,M[2]=ke,M[3]=Re,O.clearBufferiv(O.COLOR,0,M))}else H|=O.COLOR_BUFFER_BIT}I&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",St,!1),n.removeEventListener("webglcontextcreationerror",fi,!1),Be.dispose(),he.dispose(),se.dispose(),G.dispose(),re.dispose(),K.dispose(),_e.dispose(),ne.dispose(),ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Hp),Te.removeEventListener("sessionend",Gp),ja.stop()};function Nt(b){b.preventDefault(),N0("WebGLRenderer: Context Lost."),D=!0}function St(){N0("WebGLRenderer: Context Restored."),D=!1;const b=z.autoReset,I=Ue.enabled,W=Ue.autoUpdate,H=Ue.needsUpdate,V=Ue.type;Ce(),z.autoReset=b,Ue.enabled=I,Ue.autoUpdate=W,Ue.needsUpdate=H,Ue.type=V}function fi(b){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function di(b){const I=b.target;I.removeEventListener("dispose",di),cS(I)}function cS(b){uS(b),G.remove(b)}function uS(b){const I=G.get(b).programs;I!==void 0&&(I.forEach(function(W){ue.releaseProgram(W)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,W,H,V,ve){I===null&&(I=qe);const Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,ge=hS(b,I,W,H,V);g.setMaterial(H,Ee);let Re=W.index,we=1;if(H.wireframe===!0){if(Re=q.getWireframeAttribute(W),Re===void 0)return;we=2}const Fe=W.drawRange,ke=W.attributes.position;let De=Fe.start*we,ht=(Fe.start+Fe.count)*we;ve!==null&&(De=Math.max(De,ve.start*we),ht=Math.min(ht,(ve.start+ve.count)*we)),Re!==null?(De=Math.max(De,0),ht=Math.min(ht,Re.count)):ke!=null&&(De=Math.max(De,0),ht=Math.min(ht,ke.count));const It=ht-De;if(It<0||It===1/0)return;_e.setup(V,H,ge,W,Re);let Dt,gt=de;if(Re!==null&&(Dt=oe.get(Re),gt=J,gt.setIndex(Dt)),V.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*wt()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(V.isLine){let on=H.linewidth;on===void 0&&(on=1),g.setLineWidth(on*wt()),V.isLineSegments?gt.setMode(O.LINES):V.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else V.isPoints?gt.setMode(O.POINTS):V.isSprite&&gt.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(it.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const on=V._multiDrawStarts,Me=V._multiDrawCounts,Rn=V._multiDrawCount,et=Re?oe.get(Re).bytesPerElement:1,Hn=G.get(H).currentProgram.getUniforms();for(let hi=0;hi<Rn;hi++)Hn.setValue(O,"_gl_DrawID",hi),gt.render(on[hi]/et,Me[hi])}else if(V.isInstancedMesh)gt.renderInstances(De,It,V.count);else if(W.isInstancedBufferGeometry){const on=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Me=Math.min(W.instanceCount,on);gt.renderInstances(De,It,Me)}else gt.render(De,It)};function Fp(b,I,W){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=bn,b.needsUpdate=!0,eo(b,I,W),b.side=ka,b.needsUpdate=!0,eo(b,I,W),b.side=Gi):eo(b,I,W)}this.compile=function(b,I,W=null){W===null&&(W=b),R=se.get(W),R.init(I),v.push(R),W.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(R.pushLight(V),V.castShadow&&R.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(R.pushLight(V),V.castShadow&&R.pushShadow(V))}),R.setupLights();const H=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ee=0;Ee<ve.length;Ee++){const ge=ve[Ee];Fp(ge,W,V),H.add(ge)}else Fp(ve,W,V),H.add(ve)}),R=v.pop(),H},this.compileAsync=function(b,I,W=null){const H=this.compile(b,I,W);return new Promise(V=>{function ve(){if(H.forEach(function(Ee){G.get(Ee).currentProgram.isReady()&&H.delete(Ee)}),H.size===0){V(b);return}setTimeout(ve,10)}it.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let gu=null;function fS(b){gu&&gu(b)}function Hp(){ja.stop()}function Gp(){ja.start()}const ja=new tS;ja.setAnimationLoop(fS),typeof self<"u"&&ja.setContext(self),this.setAnimationLoop=function(b){gu=b,Te.setAnimationLoop(b),b===null?ja.stop():ja.start()},Te.addEventListener("sessionstart",Hp),Te.addEventListener("sessionend",Gp),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(b,I);const W=Te.enabled===!0&&Te.isPresenting===!0,H=A!==null&&(X===null||W)&&A.begin(N,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(I),I=Te.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,I,X),R=se.get(b,v.length),R.init(I),R.state.textureUnits=j.getTextureUnits(),v.push(R),Je.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(Je,yi,I.reversedDepth),ye=this.localClippingEnabled,Z=Ne.init(this.clippingPlanes,ye),T=he.get(b,C.length),T.init(),C.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Ee=N.xr.getDepthSensingMesh();Ee!==null&&xu(Ee,I,-1/0,N.sortObjects)}xu(b,I,0,N.sortObjects),T.finish(),N.sortObjects===!0&&T.sort(le,Pe,I.reversedDepth),_t=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,_t&&Be.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Z===!0&&Ne.beginShadows();const V=R.state.shadowsArray;if(Ue.render(V,b,I),Z===!0&&Ne.endShadows(),(H&&A.hasRenderPass())===!1){const Ee=T.opaque,ge=T.transmissive;if(R.setupLights(),I.isArrayCamera){const Re=I.cameras;if(ge.length>0)for(let we=0,Fe=Re.length;we<Fe;we++){const ke=Re[we];kp(Ee,ge,b,ke)}_t&&Be.render(b);for(let we=0,Fe=Re.length;we<Fe;we++){const ke=Re[we];Vp(T,b,ke,ke.viewport)}}else ge.length>0&&kp(Ee,ge,b,I),_t&&Be.render(b),Vp(T,b,I)}X!==null&&P===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),H&&A.end(N),b.isScene===!0&&b.onAfterRender(N,b,I),_e.resetDefaultState(),$=-1,ie=null,v.pop(),v.length>0?(R=v[v.length-1],j.setTextureUnits(R.state.textureUnits),Z===!0&&Ne.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,B!==null&&B.renderEnd()};function xu(b,I,W,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||at.intersectsSprite(b)){H&&st.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Je);const Ee=K.update(b),ge=b.material;ge.visible&&T.push(b,Ee,ge,W,st.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||at.intersectsObject(b))){const Ee=K.update(b),ge=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),st.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),st.copy(Ee.boundingSphere.center)),st.applyMatrix4(b.matrixWorld).applyMatrix4(Je)),Array.isArray(ge)){const Re=Ee.groups;for(let we=0,Fe=Re.length;we<Fe;we++){const ke=Re[we],De=ge[ke.materialIndex];De&&De.visible&&T.push(b,Ee,De,W,st.z,ke)}}else ge.visible&&T.push(b,Ee,ge,W,st.z,null)}}const ve=b.children;for(let Ee=0,ge=ve.length;Ee<ge;Ee++)xu(ve[Ee],I,W,H)}function Vp(b,I,W,H){const{opaque:V,transmissive:ve,transparent:Ee}=b;R.setupLightsView(W),Z===!0&&Ne.setGlobalState(N.clippingPlanes,W),H&&g.viewport(fe.copy(H)),V.length>0&&$l(V,I,W),ve.length>0&&$l(ve,I,W),Ee.length>0&&$l(Ee,I,W),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function kp(b,I,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[H.id]===void 0){const De=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[H.id]=new Ei(1,1,{generateMipmaps:!0,type:De?ia:Qn,minFilter:ss,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const ve=R.state.transmissionRenderTarget[H.id],Ee=H.viewport||fe;ve.setSize(Ee.z*N.transmissionResolutionScale,Ee.w*N.transmissionResolutionScale);const ge=N.getRenderTarget(),Re=N.getActiveCubeFace(),we=N.getActiveMipmapLevel();N.setRenderTarget(ve),N.getClearColor($e),Ve=N.getClearAlpha(),Ve<1&&N.setClearColor(16777215,.5),N.clear(),_t&&Be.render(W);const Fe=N.toneMapping;N.toneMapping=bi;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),R.setupLightsView(H),Z===!0&&Ne.setGlobalState(N.clippingPlanes,H),$l(b,W,H),j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve),it.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ht=0,It=I.length;ht<It;ht++){const Dt=I[ht],{object:gt,geometry:on,material:Me,group:Rn}=Dt;if(Me.side===Gi&&gt.layers.test(H.layers)){const et=Me.side;Me.side=bn,Me.needsUpdate=!0,Xp(gt,W,H,on,Me,Rn),Me.side=et,Me.needsUpdate=!0,De=!0}}De===!0&&(j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve))}N.setRenderTarget(ge,Re,we),N.setClearColor($e,Ve),ke!==void 0&&(H.viewport=ke),N.toneMapping=Fe}function $l(b,I,W){const H=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ve=b.length;V<ve;V++){const Ee=b[V],{object:ge,geometry:Re,group:we}=Ee;let Fe=Ee.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),ge.layers.test(W.layers)&&Xp(ge,I,W,Re,Fe,we)}}function Xp(b,I,W,H,V,ve){b.onBeforeRender(N,I,W,H,V,ve),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(N,I,W,H,b,ve),V.transparent===!0&&V.side===Gi&&V.forceSinglePass===!1?(V.side=bn,V.needsUpdate=!0,N.renderBufferDirect(W,I,H,V,b,ve),V.side=ka,V.needsUpdate=!0,N.renderBufferDirect(W,I,H,V,b,ve),V.side=Gi):N.renderBufferDirect(W,I,H,V,b,ve),b.onAfterRender(N,I,W,H,V,ve)}function eo(b,I,W){I.isScene!==!0&&(I=qe);const H=G.get(b),V=R.state.lights,ve=R.state.shadowsArray,Ee=V.state.version,ge=ue.getParameters(b,V.state,ve,I,W,R.state.lightProbeGridArray),Re=ue.getProgramCacheKey(ge);let we=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,H.fog=I.fog;const Fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=re.get(b.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",di),we=new Map,H.programs=we);let ke=we.get(Re);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===Ee)return jp(b,ge),ke}else ge.uniforms=ue.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,W,ge),b.onBeforeCompile(ge,N),ke=ue.acquireProgram(ge,Re),we.set(Re,ke),H.uniforms=ge.uniforms;const De=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Ne.uniform),jp(b,ge),H.needsLights=mS(b),H.lightsStateVersion=Ee,H.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=R.state.lightProbeGridArray.length>0,H.currentProgram=ke,H.uniformsList=null,ke}function Wp(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=cc.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function jp(b,I){const W=G.get(b);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function dS(b,I){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,H=b.length;W<H;W++){const V=b[W];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function hS(b,I,W,H,V){I.isScene!==!0&&(I=qe),j.resetTextureUnits();const ve=I.fog,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?I.environment:null,ge=X===null?N.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ze.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=re.get(H.envMap||Ee,Re),Fe=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!W.morphAttributes.position,ht=!!W.morphAttributes.normal,It=!!W.morphAttributes.color;let Dt=bi;H.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Dt=N.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,on=gt!==void 0?gt.length:0,Me=G.get(H),Rn=R.state.lights;if(Z===!0&&(ye===!0||b!==ie)){const yt=b===ie&&H.id===$;Ne.setState(H,b,yt)}let et=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Rn.state.version||Me.outputColorSpace!==ge||V.isBatchedMesh&&Me.batching===!1||!V.isBatchedMesh&&Me.batching===!0||V.isBatchedMesh&&Me.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Me.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Me.instancing===!1||!V.isInstancedMesh&&Me.instancing===!0||V.isSkinnedMesh&&Me.skinning===!1||!V.isSkinnedMesh&&Me.skinning===!0||V.isInstancedMesh&&Me.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Me.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Me.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Me.instancingMorph===!1&&V.morphTexture!==null||Me.envMap!==we||H.fog===!0&&Me.fog!==ve||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ne.numPlanes||Me.numIntersection!==Ne.numIntersection)||Me.vertexAlphas!==Fe||Me.vertexTangents!==ke||Me.morphTargets!==De||Me.morphNormals!==ht||Me.morphColors!==It||Me.toneMapping!==Dt||Me.morphTargetsCount!==on||!!Me.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,Me.__version=H.version);let Hn=Me.currentProgram;et===!0&&(Hn=eo(H,I,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Hn,Me));let hi=!1,la=!1,As=!1;const xt=Hn.getUniforms(),zt=Me.uniforms;if(g.useProgram(Hn.program)&&(hi=!0,la=!0,As=!0),H.id!==$&&($=H.id,la=!0),Me.needsLights){const yt=dS(R.state.lightProbeGridArray,V);Me.lightProbeGrid!==yt&&(Me.lightProbeGrid=yt,la=!0)}if(hi||ie!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xt.setValue(O,"projectionMatrix",b.projectionMatrix),xt.setValue(O,"viewMatrix",b.matrixWorldInverse);const ca=xt.map.cameraPosition;ca!==void 0&&ca.setValue(O,nt.setFromMatrixPosition(b.matrixWorld)),w.logarithmicDepthBuffer&&xt.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),ie!==b&&(ie=b,la=!0,As=!0)}if(Me.needsLights&&(Rn.state.directionalShadowMap.length>0&&xt.setValue(O,"directionalShadowMap",Rn.state.directionalShadowMap,j),Rn.state.spotShadowMap.length>0&&xt.setValue(O,"spotShadowMap",Rn.state.spotShadowMap,j),Rn.state.pointShadowMap.length>0&&xt.setValue(O,"pointShadowMap",Rn.state.pointShadowMap,j)),V.isSkinnedMesh){xt.setOptional(O,V,"bindMatrix"),xt.setOptional(O,V,"bindMatrixInverse");const yt=V.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),xt.setValue(O,"boneTexture",yt.boneTexture,j))}V.isBatchedMesh&&(xt.setOptional(O,V,"batchingTexture"),xt.setValue(O,"batchingTexture",V._matricesTexture,j),xt.setOptional(O,V,"batchingIdTexture"),xt.setValue(O,"batchingIdTexture",V._indirectTexture,j),xt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&xt.setValue(O,"batchingColorTexture",V._colorsTexture,j));const oa=W.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&L.update(V,W,Hn),(la||Me.receiveShadow!==V.receiveShadow)&&(Me.receiveShadow=V.receiveShadow,xt.setValue(O,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&I.environment!==null&&(zt.envMapIntensity.value=I.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=R3()),la){if(xt.setValue(O,"toneMappingExposure",N.toneMappingExposure),Me.needsLights&&pS(zt,As),ve&&H.fog===!0&&Ae.refreshFogUniforms(zt,ve),Ae.refreshMaterialUniforms(zt,H,ae,ce,R.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const yt=Me.lightProbeGrid;zt.probesSH.value=yt.texture,zt.probesMin.value.copy(yt.boundingBox.min),zt.probesMax.value.copy(yt.boundingBox.max),zt.probesResolution.value.copy(yt.resolution)}cc.upload(O,Wp(Me),zt,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(cc.upload(O,Wp(Me),zt,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(O,"center",V.center),xt.setValue(O,"modelViewMatrix",V.modelViewMatrix),xt.setValue(O,"normalMatrix",V.normalMatrix),xt.setValue(O,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const yt=H.uniformsGroups;for(let ca=0,Rs=yt.length;ca<Rs;ca++){const qp=yt[ca];ne.update(qp,Hn),ne.bind(qp,Hn)}}return Hn}function pS(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function mS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,I,W){const H=G.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=I,G.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const W=G.get(b);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,W=0){X=b,U=I,P=W;let H=null,V=!1,ve=!1;if(b){const ge=G.get(b);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(O.FRAMEBUFFER,ge.__webglFramebuffer),fe.copy(b.viewport),Se.copy(b.scissor),Xe=b.scissorTest,g.viewport(fe),g.scissor(Se),g.setScissorTest(Xe),$=-1;return}else if(ge.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(ge.__hasExternalTextures)j.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Fe=b.depthTexture;if(ge.__boundDepthTexture!==Fe){if(Fe!==null&&G.has(Fe)&&(b.width!==Fe.image.width||b.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ve=!0);const we=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(we[I])?H=we[I][W]:H=we[I],V=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?H=G.get(b).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[W]:H=we,fe.copy(b.viewport),Se.copy(b.scissor),Xe=b.scissorTest}else fe.copy(xe).multiplyScalar(ae).floor(),Se.copy(Ct).multiplyScalar(ae).floor(),Xe=be;if(W!==0&&(H=Y),g.bindFramebuffer(O.FRAMEBUFFER,H)&&g.drawBuffers(b,H),g.viewport(fe),g.scissor(Se),g.setScissorTest(Xe),V){const ge=G.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,W)}else if(ve){const ge=I;for(let Re=0;Re<b.textures.length;Re++){const we=G.get(b.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,we.__webglTexture,W,ge)}}else if(b!==null&&W!==0){const ge=G.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ge.__webglTexture,W)}$=-1},this.readRenderTargetPixels=function(b,I,W,H,V,ve,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){g.bindFramebuffer(O.FRAMEBUFFER,Re);try{const we=b.textures[ge],Fe=we.format,ke=we.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Fe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ke)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&W>=0&&W<=b.height-V&&O.readPixels(I,W,H,V,pe.convert(Fe),pe.convert(ke),ve)}finally{const we=X!==null?G.get(X).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(b,I,W,H,V,ve,Ee,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(I>=0&&I<=b.width-H&&W>=0&&W<=b.height-V){g.bindFramebuffer(O.FRAMEBUFFER,Re);const we=b.textures[ge],Fe=we.format,ke=we.type;if(b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ge),!w.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!w.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.bufferData(O.PIXEL_PACK_BUFFER,ve.byteLength,O.STREAM_READ),O.readPixels(I,W,H,V,pe.convert(Fe),pe.convert(ke),0);const ht=X!==null?G.get(X).__webglFramebuffer:null;g.bindFramebuffer(O.FRAMEBUFFER,ht);const It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Zb(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,De),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ve),O.deleteBuffer(De),O.deleteSync(It),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,W=0){const H=Math.pow(2,-W),V=Math.floor(b.image.width*H),ve=Math.floor(b.image.height*H),Ee=I!==null?I.x:0,ge=I!==null?I.y:0;j.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Ee,ge,V,ve),g.unbindTexture()},this.copyTextureToTexture=function(b,I,W=null,H=null,V=0,ve=0){let Ee,ge,Re,we,Fe,ke,De,ht,It;const Dt=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(W!==null)Ee=W.max.x-W.min.x,ge=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Fe=W.min.y,ke=W.isBox3?W.min.z:0;else{const zt=Math.pow(2,-V);Ee=Math.floor(Dt.width*zt),ge=Math.floor(Dt.height*zt),b.isDataArrayTexture?Re=Dt.depth:b.isData3DTexture?Re=Math.floor(Dt.depth*zt):Re=1,we=0,Fe=0,ke=0}H!==null?(De=H.x,ht=H.y,It=H.z):(De=0,ht=0,It=0);const gt=pe.convert(I.format),on=pe.convert(I.type);let Me;I.isData3DTexture?(j.setTexture3D(I,0),Me=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(j.setTexture2DArray(I,0),Me=O.TEXTURE_2D_ARRAY):(j.setTexture2D(I,0),Me=O.TEXTURE_2D),g.activeTexture(O.TEXTURE0),g.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const Rn=g.getParameter(O.UNPACK_ROW_LENGTH),et=g.getParameter(O.UNPACK_IMAGE_HEIGHT),Hn=g.getParameter(O.UNPACK_SKIP_PIXELS),hi=g.getParameter(O.UNPACK_SKIP_ROWS),la=g.getParameter(O.UNPACK_SKIP_IMAGES);g.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),g.pixelStorei(O.UNPACK_SKIP_PIXELS,we),g.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),g.pixelStorei(O.UNPACK_SKIP_IMAGES,ke);const As=b.isDataArrayTexture||b.isData3DTexture,xt=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const zt=G.get(b),oa=G.get(I),yt=G.get(zt.__renderTarget),ca=G.get(oa.__renderTarget);g.bindFramebuffer(O.READ_FRAMEBUFFER,yt.__webglFramebuffer),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let Rs=0;Rs<Re;Rs++)As&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(b).__webglTexture,V,ke+Rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(I).__webglTexture,ve,It+Rs)),O.blitFramebuffer(we,Fe,Ee,ge,De,ht,Ee,ge,O.DEPTH_BUFFER_BIT,O.NEAREST);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||G.has(b)){const zt=G.get(b),oa=G.get(I);g.bindFramebuffer(O.READ_FRAMEBUFFER,te),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let yt=0;yt<Re;yt++)As?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zt.__webglTexture,V,ke+yt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zt.__webglTexture,V),xt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,oa.__webglTexture,ve,It+yt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,oa.__webglTexture,ve),V!==0?O.blitFramebuffer(we,Fe,Ee,ge,De,ht,Ee,ge,O.COLOR_BUFFER_BIT,O.NEAREST):xt?O.copyTexSubImage3D(Me,ve,De,ht,It+yt,we,Fe,Ee,ge):O.copyTexSubImage2D(Me,ve,De,ht,we,Fe,Ee,ge);g.bindFramebuffer(O.READ_FRAMEBUFFER,null),g.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Me,ve,De,ht,It,Ee,ge,Re,gt,on,Dt.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,ve,De,ht,It,Ee,ge,Re,gt,Dt.data):O.texSubImage3D(Me,ve,De,ht,It,Ee,ge,Re,gt,on,Dt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ve,De,ht,Ee,ge,gt,on,Dt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ve,De,ht,Dt.width,Dt.height,gt,Dt.data):O.texSubImage2D(O.TEXTURE_2D,ve,De,ht,Ee,ge,gt,on,Dt);g.pixelStorei(O.UNPACK_ROW_LENGTH,Rn),g.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),g.pixelStorei(O.UNPACK_SKIP_PIXELS,Hn),g.pixelStorei(O.UNPACK_SKIP_ROWS,hi),g.pixelStorei(O.UNPACK_SKIP_IMAGES,la),ve===0&&I.generateMipmaps&&O.generateMipmap(Me),g.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){U=0,P=0,X=null,g.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function w3(){const[t,e]=Lt.useState("home"),[n,i]=Lt.useState(!1),[a,s]=Lt.useState(!0),[r,l]=Lt.useState(!0),[o,c]=Lt.useState(null),[d,p]=Lt.useState("All"),[u,h]=Lt.useState("certifications"),[_,E]=Lt.useState("light"),[m,f]=Lt.useState({name:"",email:"",message:""}),[x,M]=Lt.useState(!1),[S,T]=Lt.useState(null),[R,C]=Lt.useState("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!"),[v,A]=Lt.useState(!1),[N,D]=Lt.useState(!1),B=Lt.useRef(null),Y=Lt.useRef(null),te=Z=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const ye=new SpeechSynthesisUtterance(Z);ye.rate=1.05,ye.pitch=1.3;const Je=()=>{const nt=window.speechSynthesis.getVoices(),st=nt.find(qe=>(qe.name.includes("Female")||qe.name.includes("Zira")||qe.name.includes("Google UK English Female")||qe.name.includes("Samantha")||qe.name.includes("Victoria")||qe.name.includes("Karen")||qe.name.includes("Moira"))&&qe.lang.startsWith("en"))||nt.find(qe=>qe.lang.startsWith("en"));st&&(ye.voice=st),ye.onstart=()=>{A(!0),D(!1)},ye.onend=()=>{A(!1),D(!1)},ye.onerror=()=>{A(!1),D(!1)},Y.current=ye,window.speechSynthesis.speak(ye)};window.speechSynthesis.getVoices().length>0?Je():window.speechSynthesis.onvoiceschanged=Je}},F=()=>{"speechSynthesis"in window&&(v&&!N?(window.speechSynthesis.pause(),D(!0),A(!1)):N?(window.speechSynthesis.resume(),D(!1),A(!0)):te(R))},U=Z=>{C(Z),D(!1),te(Z)},P=()=>{l(!1),s(!1),te("I am Tejaswini's AI assistant. Explore her software engineering projects, internships, and skills!")};Lt.useEffect(()=>{const Z=setTimeout(()=>{s(!1)},1200);return()=>clearTimeout(Z)},[]),Lt.useEffect(()=>{if(!B.current)return;const Z=new f1,ye=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),Je=new C3({canvas:B.current,alpha:!0,antialias:!0});Je.setSize(window.innerWidth,window.innerHeight),Je.setPixelRatio(Math.min(window.devicePixelRatio,2));const nt=document.createElement("canvas");nt.width=16,nt.height=16;const st=nt.getContext("2d"),qe=st.createRadialGradient(8,8,0,8,8,8);qe.addColorStop(0,"rgba(255, 255, 255, 1)"),qe.addColorStop(.5,"rgba(255, 255, 255, 0.4)"),qe.addColorStop(1,"rgba(255, 255, 255, 0)"),st.fillStyle=qe,st.beginPath(),st.arc(8,8,8,0,Math.PI*2),st.fill();const _t=new M1(nt),wt=750,O=new Float32Array(wt*3);for(let se=0;se<wt*3;se++)O[se]=(Math.random()-.5)*18;const Kt=new ui;Kt.setAttribute("position",new oi(O,3));const it=_==="dark",w=new Z_({size:.1,map:_t,color:it?3718648:165063,transparent:!0,opacity:it?.5:.35,depthWrite:!1,blending:Dd}),g=new y1(Kt,w);Z.add(g),ye.position.z=5;let z=0,G=0,j=0,re=0;const oe=(se,Ne)=>{j=(se/window.innerWidth-.5)*1.2,re=(Ne/window.innerHeight-.5)*1.2},q=se=>{oe(se.clientX,se.clientY)},K=se=>{se.touches.length>0&&oe(se.touches[0].clientX,se.touches[0].clientY)};window.addEventListener("mousemove",q),window.addEventListener("touchmove",K,{passive:!0});const ue=()=>{ye.aspect=window.innerWidth/window.innerHeight,ye.updateProjectionMatrix(),Je.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ue);let Ae;const he=()=>{Ae=requestAnimationFrame(he),g.rotation.y+=6e-4,g.rotation.x+=3e-4,z+=(j-z)*.1,G+=(re-G)*.1,ye.position.x=z*1.5,ye.position.y=-G*1.5,ye.lookAt(Z.position),Je.render(Z,ye)};return he(),()=>{window.removeEventListener("mousemove",q),window.removeEventListener("touchmove",K),window.removeEventListener("resize",ue),cancelAnimationFrame(Ae),Kt.dispose(),w.dispose(),Je.dispose()}},[_]);const X=/^[A-Za-z\s]+$/,$=/^[a-z0-9]+@gmail\.com$/,ie=()=>m.name?X.test(m.name)?null:"Please enter a valid name containing only letters (a-z, A-Z).":null,fe=()=>m.email?$.test(m.email)?null:"Please enter a valid email (lowercase letters and numbers only before @gmail.com).":null,Se=()=>m.message&&m.message.trim().length<10?"Please enter a message (at least 10 characters).":null,Xe=async Z=>{if(Z.preventDefault(),!m.name.trim()||!m.email.trim()||!m.message.trim()){T({type:"error",text:"Please enter all the fields before submitting."});return}if(!X.test(m.name)){T({type:"error",text:"Please enter a valid name containing only letters (a-z, A-Z)."});return}if(!$.test(m.email)){T({type:"error",text:"Please enter a valid email (lowercase letters and numbers only before @gmail.com)."});return}if(m.message.trim().length<10){T({type:"error",text:"Please enter a message (at least 10 characters)."});return}M(!0),T(null);try{await fetch("https://formsubmit.co/ajax/dandetejaswini1329@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:m.name,email:m.email,message:m.message,_subject:`New Portfolio Contact Message from ${m.name}`,_captcha:"false"})}),M(!1),T({type:"success",text:"Message Sent Successfully!"}),setTimeout(()=>{f({name:"",email:"",message:""}),T(null)},2e3)}catch{M(!1),T({type:"error",text:"Failed to send message. Please try again later."})}};Lt.useEffect(()=>{const Z=()=>{const ye=["home","about","skills","projects","journey","credentials","contact"],Je=window.scrollY+200;for(const nt of ye){const st=document.getElementById(nt);if(st){const qe=st.offsetTop,_t=st.offsetHeight;if(Je>=qe&&Je<qe+_t){e(nt);break}}}};return window.addEventListener("scroll",Z),()=>window.removeEventListener("scroll",Z)},[]);const $e=[{id:"cxintel",title:"CXIntel",subtitle:"Sentiment-aware CRM platform",category:"AI / Salesforce / Automation",featured:!0,github:"https://github.com/dandetejaswini/CXIntel",live:"https://cxintel-dev-ed.develop.my.site.com/s/",desc:"Salesforce Experience Cloud CRM platform integrating Python sentiment pipelines to analyze customer feedback and automate support routing.",tech:["Apex","LWC","JavaScript","Python","REST APIs","GitHub Actions"],metrics:["Analyzed 500+ customer feedback records","Improved insight accuracy by 35%","Automated ticket tagging via REST APIs","Reduced manual review time by 40%"],details:"Built an enterprise-grade CRM extension on Salesforce leveraging LWC and Python backend sentiment pipelines to automatically classify and prioritize inbound tickets."},{id:"gitnexus",title:"GitNexus",subtitle:"Intelligent Multi-Agent System",category:"AI / Developer Tools",featured:!0,github:"https://github.com/dandetejaswini/GitNexus",desc:"Autonomous multi-agent system analyzing GitHub repository architecture, pull requests, and commit metrics to summarize codebase health.",tech:["JavaScript","AI Agents","GitHub REST API","Automation","LangChain"],metrics:["Automated repository code analysis","Multi-agent workflow orchestration","Intelligent commit summarization"],details:"Multi-agent orchestration system that interfaces with GitHub APIs to parse repository structures, evaluate commit histories, and generate autonomous project health reports."},{id:"netguardian",title:"NetGuardian",subtitle:"Real-time AI content shield",category:"AI / Security",featured:!0,badge:"OpenAI Academy & NextWave Buildathon",github:"https://github.com/dandetejaswini/Net-Gaurdian",desc:"Browser extension that detects and blurs harmful content in real time using privacy-preserving on-device inference.",tech:["TensorFlow.js","Flask","LangChain","Browser Extension","Privacy-First"],metrics:["Real-time content detection and sanitization","Real-time DOM inspection and blurring","Local privacy-focused inference","Qualified for OpenAI Academy & NextWave Buildathon (State Level)"],details:"Client-side extension paired with a lightweight Flask backend to identify and sanitize sensitive web elements instantly. Qualified for the OpenAI Academy and NextWave Buildathon."},{id:"edubond",title:"EduBond Mobile",subtitle:"AI peer & mentor connection mobile app",category:"AI / Mobile",featured:!0,github:"https://github.com/dandetejaswini/Edubond_mobile",desc:"React Native mobile application connecting students, mentors, and alumni through intelligent profile matching algorithms.",tech:["React Native","TypeScript","Node.js","AI Matching","WebSockets"],metrics:["Real-time WebSocket communication","AI-driven peer and mentor matching","Cross-platform mobile architecture"],details:"Developed a comprehensive cross-platform app ensuring seamless mentorship scheduling, AI-powered profile matching, and instant messaging."},{id:"spendiq",title:"SpendIQ",subtitle:"Smart barcode retail budgeting tool",category:"FinTech / Web App",featured:!0,github:"",live:"https://spendiqpro.vercel.app/en",desc:"Web application reducing checkout queues and retail overspending using camera barcode scanning and budget limits.",tech:["JavaScript","ZXing","WebRTC","Vercel","WCAG 2.1"],metrics:["95% barcode scan accuracy","99% uptime deployment","Full WCAG 2.1 accessibility compliance"],details:"Fast, accessible client-side budgetary tool utilizing real-time device camera barcode capture to instantly categorize and track daily retail expenditures."},{id:"nlp-pipeline",title:"Advanced NLP Pipeline",subtitle:"High-throughput FastAPI inference engine",category:"AI / NLP / Backend",featured:!0,github:"https://github.com/dandetejaswini/Advanced-NLP-Pipeline-with-Transformers",desc:"FastAPI and HuggingFace Transformers pipeline for high-speed text summarization, translation, and entity recognition.",tech:["Python","FastAPI","Transformers","Docker","Inference Caching"],metrics:["50% API response latency reduction","Optimized transformer weights caching","Modular REST inference endpoints"],details:"Production-grade NLP inference engine supporting concurrent summarization, translation, and Named Entity Recognition with optimized Docker deployment."},{id:"reposense",title:"RepoSense",subtitle:"Autonomous GitHub code risk analysis",category:"AI / Developer Tools",featured:!0,github:"https://github.com/dandetejaswini/reposense",desc:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history.",tech:["Python","Gemini API","GitHub API","FastAPI","PyDriller","Docker"],metrics:["Multi-agent GitHub analysis","Repository risk and code hotspot detection","Automated engineering intelligence"],details:"Autonomous AI-powered GitHub intelligence system that analyzes repositories, pull requests, code risks, and Git history to generate actionable engineering insights."},{id:"fraud-risk",title:"Fraud Risk Scoring",subtitle:"Neural network transaction classification",category:"Machine Learning",featured:!1,github:"https://github.com/dandetejaswini/Fraud_Risk_Scoring",desc:"Machine learning fraud detection system utilizing deep neural networks and SMOTE data balancing.",tech:["Python","TensorFlow","Scikit-Learn","SMOTE","Pandas"],metrics:["Neural network-based fraud classification","High-risk transaction anomaly flagging","Balanced datasets using SMOTE technique"],details:"Trained and validated robust neural network classification models to flag high-risk transaction anomalies."}],Ve=[{title:"Information Technology Specialist in HTML and CSS",issuer:"Certiport (2023)",link:"https://www.credly.com/badges/8c0767fe-2d87-46cd-a9f7-159da49186aa"},{title:"Information Technology Specialist in Python",issuer:"Certiport (2023)",link:"https://drive.google.com/file/d/1Dw43WenvhYx-nPC11P6t0xiEjrsFN123/view?usp=sharing"},{title:"Salesforce Platform Developer I",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1Wn7lNAck8JIJrMXh8YRIvphJWs31D0Yu/view?usp=sharing"},{title:"Salesforce AgentForce Specialist",issuer:"Salesforce (2025)",link:"https://drive.google.com/file/d/1BgGL9qyufgqqAo9wG37pRYiYUYQ9PW8W/view?usp=sharing"},{title:"Information Technology Specialist in Java",issuer:"Certiport (2024)",link:"https://www.credly.com/badges/6064c502-5e2f-472b-a57f-2c49568a6fcc"},{title:"Red Hat Certified System Administrator (RHCSA)",issuer:"Red Hat (2024)",link:"https://www.credly.com/badges/56c15cb2-cd42-43df-a140-10d5273c792f"},{title:"Pega Certified System Architect (CSA)",issuer:"Pega (2025)",link:"https://accounts.pega.com/profile/DandeTejaswini/share/BPEGACPSA24V1-PEGACPSA24V1"}],Q=[{year:"2024",title:"Second Prize — Paper Presentation",org:"National Technical Symposium, CIET",desc:"Secured 2nd prize for technical paper presentation on emerging AI architectures."},{year:"2024",title:"Top 10 — CODE WARS 1.0",org:"ACM JNTU-GV",desc:"Achieved top 10 ranking in competitive algorithmic programming challenge."},{year:"2024",title:"Qualified — OpenAI & NextWave Buildathon",org:"OpenAI / NextWave (State Level)",desc:"Qualified in state-level competitive AI application buildathon."},{year:"2024",title:"Advanced to Round 3 — HP PowerLab 2.0",org:"Hindustan Petroleum Corporation Limited",desc:"Reached Round 3 in national innovation engineering challenge."},{year:"Open Source",title:"Google Summer of Code — Contributions",org:"Open Source Ecosystem",desc:"Contributed to AI tool ecosystems including LangChain, LlamaIndex, and CrewAI."}],ce=[{company:"Areteans Technology Solutions",role:"PEGA Software Engineer Intern / Specialist",period:"Jan 2025 – Present",location:"Hyderabad, India",badge:"Current Internship",points:["Engineered enterprise PEGA workflow solutions and case management rules.","Collaborated on client-facing business process automation and REST integrations.","Applied Pega Certified System Architect (CSA) principles to optimize application lifecycle."]},{company:"Technical Hub",role:"Salesforce Software Engineering Intern",period:"May 2024 – Nov 2024",location:"Surampalem, AP",badge:"Completed",points:["Developed custom Apex classes, triggers, and Lightning Web Components (LWC).","Integrated third-party REST API services into Salesforce CRM for real-time data sync.","Earned Salesforce Platform Developer I and AgentForce Specialist certifications."]}],ae=d==="All"?$e:$e.filter(Z=>Z.category.toLowerCase().includes(d.toLowerCase())),le=_==="dark",Pe=le?"bg-slate-950 text-slate-100":"bg-slate-50 text-slate-900",xe=le?"bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-cyan-500/5 transition-all shadow-lg":"bg-white/70 backdrop-blur-xl border border-slate-200/80 hover:border-cyan-500/40 hover:shadow-md transition-all shadow-sm",Ct=le?"bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/70":"bg-white/80 backdrop-blur-xl border-b border-slate-200/80",be=le?"text-slate-400":"text-slate-600",at=le?"bg-slate-900/60 border-slate-800 text-white placeholder-slate-500":"bg-white/70 border-slate-200 text-slate-800 placeholder-slate-400";return y.jsxs("div",{className:`min-h-screen ${Pe} font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden transition-colors duration-300`,children:[n&&y.jsx("div",{className:"fixed inset-0 z-[45] w-screen h-screen bg-slate-950/60 backdrop-blur-sm lg:hidden cursor-pointer",onClick:()=>i(!1)}),a&&y.jsxs("div",{className:`fixed inset-0 z-50 ${le?"bg-slate-950 text-white":"bg-slate-50 text-slate-900"} flex flex-col items-center justify-center transition-opacity duration-700`,children:[y.jsx("div",{className:"w-12 h-12 border-3 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"}),y.jsx("h2",{className:"text-xl font-bold tracking-wider uppercase",children:"DANDE TEJASWINI"}),y.jsx("p",{className:`text-xs ${be} mt-1 tracking-widest`,children:"Loading Portfolio..."})]}),!a&&r&&y.jsx("div",{onClick:P,className:"fixed inset-0 z-[60] flex flex-col items-center justify-center cursor-pointer p-6",style:{background:le?"linear-gradient(135deg, #090d16 0%, #0f172a 50%, #1e1b4b 100%)":"linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e0f2fe 100%)"},children:y.jsxs("div",{className:"text-center space-y-6 max-w-md mx-auto",children:[y.jsx("div",{className:"w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/80 shadow-2xl shadow-cyan-500/30 transition-transform hover:scale-105",children:y.jsx("img",{src:"/tejaswini-portfolio/avatar.jpg",alt:"Tejaswini",className:"w-full h-full object-cover",onError:Z=>{Z.currentTarget.style.display="none"}})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider",children:"Interactive Portfolio"}),y.jsx("h1",{className:`text-3xl sm:text-4xl font-extrabold tracking-tight ${le?"text-white":"text-slate-900"}`,children:"Welcome to My Profile"}),y.jsx("p",{className:`text-sm ${le?"text-slate-400":"text-slate-600"}`,children:"Dande Tejaswini — Software Engineer & AI Developer"})]}),y.jsx("div",{className:"pt-2",children:y.jsxs("span",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all text-sm",children:[y.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]}),"Tap to Enter & Start AI Voice"]})}),y.jsx("p",{className:`text-xs ${le?"text-slate-500":"text-slate-400"} animate-bounce pt-2`,children:"Click anywhere to continue"})]})}),y.jsx("canvas",{ref:B,className:"fixed inset-0 pointer-events-none z-0 w-full h-full",style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:0}}),y.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 ${Ct} shadow-sm transition-all`,children:[y.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-18 flex items-center justify-between",children:[y.jsxs("a",{href:"#home",className:"text-base sm:text-lg font-extrabold tracking-tight flex items-center space-x-2.5 hover:opacity-85 transition-opacity",children:[y.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block shadow-sm shadow-cyan-500/50"}),y.jsx("span",{className:"tracking-wider",children:"DANDE TEJASWINI"})]}),y.jsx("nav",{className:`hidden lg:flex items-center space-x-6 text-sm font-medium ${be}`,children:[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"journey",label:"Journey"},{id:"credentials",label:"Credentials"},{id:"contact",label:"Contact"}].map(Z=>y.jsx("a",{href:`#${Z.id}`,className:`transition-colors hover:text-cyan-500 py-1 ${t===Z.id?"text-cyan-500 font-semibold border-b-2 border-cyan-500":""}`,children:Z.label},Z.id))}),y.jsxs("div",{className:"flex items-center space-x-3",children:[y.jsxs("a",{href:"https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-3.5 sm:px-4 py-2 rounded-xl transition-all shadow-sm shadow-cyan-500/20",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),y.jsx("span",{children:"Resume"})]}),y.jsx("button",{onClick:()=>E(_==="dark"?"light":"dark"),className:`p-2.5 rounded-xl ${le?"bg-slate-900 text-amber-400 hover:bg-slate-800 border border-slate-800":"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"} transition-colors`,title:"Toggle Light/Dark Theme",children:le?y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})}),y.jsx("button",{onClick:()=>i(!n),className:"lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-800",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),n&&y.jsxs("div",{className:`relative z-50 lg:hidden ${le?"bg-slate-900/95 text-slate-100 border-slate-800":"bg-white/95 text-slate-800 border-slate-200"} backdrop-blur-xl border-b px-6 py-4 space-y-3 text-sm shadow-2xl`,children:[[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"journey",label:"Journey (Experience & Education)"},{id:"credentials",label:"Credentials (Certifications & Awards)"},{id:"contact",label:"Contact"}].map(Z=>y.jsx("a",{href:`#${Z.id}`,onClick:()=>i(!1),className:"block text-slate-700 dark:text-slate-300 hover:text-cyan-500 py-1.5 font-medium",children:Z.label},Z.id)),y.jsx("div",{className:"pt-2 border-t border-slate-200 dark:border-slate-800",children:y.jsxs("a",{href:"https://drive.google.com/file/d/1G8xsn_RT7sM7PSshHSp8GYhVI8rWRK-P/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",onClick:()=>i(!1),className:"flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm w-full",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),y.jsx("span",{children:"Download Resume"})]})})]})]}),y.jsx("section",{id:"home",className:"relative min-h-[90vh] flex items-center justify-center px-6 pt-32 pb-20 z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto grid grid-cols-12 gap-8 lg:gap-12 items-center",children:[y.jsx("div",{className:"col-span-12 md:col-span-5 flex flex-col items-center justify-center order-1 md:order-2",children:y.jsxs("div",{className:`${xe} p-6 rounded-3xl flex flex-col items-center relative group w-full max-w-sm`,children:[y.jsx("div",{className:"absolute -top-3 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow",children:"Tejaswini's AI Assistant"}),y.jsxs("div",{className:`w-[260px] min-h-[340px] ${le?"bg-slate-900/60 border-slate-800":"bg-slate-100/80 border-slate-200"} rounded-2xl overflow-hidden flex flex-col items-center justify-between p-5 border relative shadow-inner gap-3`,children:[y.jsxs("div",{className:"w-full flex items-center justify-between px-1",children:[y.jsxs("div",{className:"flex items-center space-x-1.5",children:[y.jsx("span",{className:`w-2 h-2 rounded-full ${v?"bg-cyan-400 animate-ping":"bg-cyan-500"}`}),y.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-cyan-500",children:v?"Speaking...":N?"Paused":"AI Assistant Active"})]}),v&&y.jsxs("div",{className:"flex items-end space-x-0.5 h-3",children:[y.jsx("span",{className:"w-0.5 h-full bg-cyan-500 animate-bounce"}),y.jsx("span",{className:"w-0.5 h-2/3 bg-indigo-400 animate-bounce",style:{animationDelay:"0.15s"}}),y.jsx("span",{className:"w-0.5 h-full bg-cyan-500 animate-bounce",style:{animationDelay:"0.3s"}})]})]}),y.jsxs("div",{onClick:F,title:N?"Tap to Resume Speech":v?"Tap to Pause Speech":"Tap to Hear Assistant",className:`relative w-36 h-36 rounded-full overflow-hidden border-4 cursor-pointer flex items-center justify-center bg-gradient-to-tr from-cyan-600 via-indigo-600 to-violet-600 shadow-xl ${v?"border-cyan-400 ring-4 ring-cyan-500/30 scale-105":"border-cyan-300/80 hover:border-cyan-500"} transition-all duration-300 group/avatar shrink-0`,children:[y.jsx("img",{src:"/tejaswini-portfolio/avatar.jpg",alt:"Tejaswini AI Assistant",className:"w-full h-full object-cover rounded-full transition-transform duration-500 group-hover/avatar:scale-110",onError:Z=>{Z.currentTarget.style.display="none",Z.currentTarget.nextElementSibling&&(Z.currentTarget.nextElementSibling.style.display="block")}}),y.jsx("div",{className:"hidden w-full h-full relative",children:y.jsxs("svg",{className:"w-full h-full p-1",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"url(#avatarGlow)"}),y.jsx("defs",{children:y.jsxs("linearGradient",{id:"avatarGlow",x1:"0",y1:"0",x2:"100",y2:"100",children:[y.jsx("stop",{offset:"0%",stopColor:"#06b6d4"}),y.jsx("stop",{offset:"50%",stopColor:"#6366f1"}),y.jsx("stop",{offset:"100%",stopColor:"#8b5cf6"})]})}),y.jsx("path",{d:"M22 45 C 20 20, 80 20, 78 45 C 82 65, 75 80, 72 88 C 65 78, 70 50, 70 45 C 70 25, 30 25, 30 45 C 30 50, 35 78, 28 88 C 25 80, 18 65, 22 45 Z",fill:"#0f172a"}),y.jsx("ellipse",{cx:"50",cy:"52",rx:"18",ry:"22",fill:"#e0f2fe"})]})}),v&&y.jsx("div",{className:"absolute inset-0 bg-cyan-900/30 backdrop-blur-[1px] flex items-center justify-center pointer-events-none",children:y.jsxs("div",{className:"flex space-x-1.5 items-end h-8",children:[y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-4 rounded-full shadow-sm"}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-8 rounded-full shadow-sm",style:{animationDelay:"0.1s"}}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-5 rounded-full shadow-sm",style:{animationDelay:"0.2s"}}),y.jsx("span",{className:"w-1.5 bg-white animate-bounce h-7 rounded-full shadow-sm",style:{animationDelay:"0.3s"}})]})}),N&&y.jsx("div",{className:"absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest border border-cyan-500/40",children:"Paused"})]}),y.jsx("p",{className:"text-[10px] font-bold text-cyan-500 uppercase tracking-widest text-center",children:N?"Tap avatar to Resume":v?"Tap avatar to Pause":"Tap avatar to Speak"}),y.jsx("div",{className:"w-full flex justify-center py-1",children:y.jsx("a",{href:"#contact",onClick:()=>U("Tejaswini is actively seeking Full-Time software engineering roles, AI developer positions, and entry-level opportunities! Please reach out via the contact form."),className:"max-w-[190px] w-full flex items-center justify-center space-x-1.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-md transition-all hover:scale-[1.02] text-center whitespace-nowrap",children:y.jsx("span",{children:"Hire Tejaswini"})})}),y.jsxs("p",{className:`text-xs font-medium ${le?"text-slate-200":"text-slate-700"} px-2 text-center italic leading-relaxed`,children:["“",R,"”"]})]}),y.jsxs("div",{className:"w-full mt-4 space-y-2",children:[y.jsx("p",{className:`text-[11px] font-semibold ${be} uppercase tracking-wider text-center`,children:"Ask me anything:"}),y.jsxs("div",{className:"flex flex-wrap gap-1.5 justify-center",children:[y.jsx("button",{onClick:()=>U("Tejaswini is a Computer Science engineering graduate from Aditya University with an 8.64 CGPA, specializing in AI, full-stack, and enterprise solutions."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"About"}),y.jsx("button",{onClick:()=>U("Tejaswini has interned at Areteans Technology Solutions as a PEGA Specialist, and at Technical Hub as a Salesforce Software Engineering Intern."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Experience"}),y.jsx("button",{onClick:()=>U("Tejaswini has strong skills in Java, Python, JavaScript, Apex, FastAPI, Flask, React, SQL, and Salesforce Lightning Web Components."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Skills"}),y.jsx("button",{onClick:()=>U("Tejaswini has built major systems including CXIntel AI CRM, GitNexus multi-agent system, EduBond mobile app, and SpendIQ FinTech tool."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Projects"}),y.jsx("button",{onClick:()=>U("Tejaswini secured 2nd prize in national paper presentation, ranked in Top 10 at Code Wars 1.0, and qualified in OpenAI hackathons."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Achievements"}),y.jsx("button",{onClick:()=>U("Tejaswini holds Salesforce Platform Developer I, AgentForce Specialist, Pega CSA, Red Hat RHCSA, and Certiport Python and Java certifications."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Certifications"}),y.jsx("button",{onClick:()=>U("Tejaswini has completed her B.Tech in Computer Science & Engineering at Aditya University (2022-2026) with an 8.64 CGPA, after scoring 96.7% in Intermediate and 96.66% in 10th standard. She is an entry-level software candidate."),className:`text-[11px] ${le?"bg-slate-800/80 text-cyan-300 border-slate-700 hover:bg-slate-800":"bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100"} px-2 py-1 rounded-lg font-medium transition-colors border`,children:"Education"})]})]})]})}),y.jsxs("div",{className:"col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 md:order-1 space-y-6",children:[y.jsxs("div",{className:`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full ${le?"bg-cyan-950/50 border-cyan-800/60 text-cyan-300":"bg-cyan-50 border-cyan-200 text-cyan-700"} border text-xs font-semibold tracking-wide uppercase`,children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-pulse"}),y.jsx("span",{children:"Entry-Level Software Engineer & AI Developer"})]}),y.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight",children:["DANDE ",y.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500",children:"TEJASWINI"})]}),y.jsx("p",{className:`text-base sm:text-lg ${be} max-w-xl font-normal leading-relaxed`,children:"“Software Engineering graduate with hands-on expertise in AI engineering, Python, Java, and Salesforce platforms. Specialized in building intelligent agents, REST APIs, and scalable enterprise solutions.”"}),y.jsxs("div",{className:"flex flex-wrap gap-3 pt-2",children:[y.jsxs("a",{href:"#projects",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02]",children:[y.jsx("span",{children:"Explore My Work"}),y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"})})]}),y.jsxs("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${xe} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 text-cyan-500 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),y.jsx("span",{children:"LinkedIn"})]}),y.jsxs("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center space-x-2 ${xe} text-xs font-medium px-5 py-3 rounded-xl transition-all`,children:[y.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"GitHub"})]})]})]})]})}),y.jsx("section",{id:"about",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Professional Profile"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"About Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-start",children:[y.jsxs("div",{className:`${xe} p-8 rounded-3xl space-y-4`,children:[y.jsx("h4",{className:"text-xl font-bold",children:"Background & Passion"}),y.jsx("p",{className:`${be} leading-relaxed text-sm sm:text-base`,children:"I am an entry-level Software Engineer & AI Developer with a strong foundation in Artificial Intelligence, Multi-Agent Systems, and enterprise software engineering. My technical expertise encompasses Python, Java, JavaScript, and Salesforce ecosystems (LWC & AgentForce)."}),y.jsx("p",{className:`${be} leading-relaxed text-sm sm:text-base`,children:"From architecting autonomous multi-agent GitHub intelligence tools to building high-throughput FastAPI inference engines, I focus on engineering scalable, maintainable AI applications with seamless user experiences."}),y.jsxs("div",{className:"pt-3 space-y-2 border-t border-slate-200 dark:border-slate-800",children:[y.jsx("h5",{className:`text-xs font-bold uppercase tracking-wider ${be}`,children:"Specialized Roles"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["AI Engineer","GenAI / LLM Engineer","Software Engineer","Full Stack Developer","Salesforce Developer"].map(Z=>y.jsx("span",{className:`text-xs font-mono font-medium px-3.5 py-1.5 rounded-xl border shadow-xs transition-colors ${le?"bg-slate-900/80 text-cyan-300 border-slate-800":"bg-white text-slate-800 border-slate-200/80"}`,children:Z},Z))})]})]}),y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-cyan-500",children:"10+"}),y.jsx("h5",{className:"text-sm font-bold",children:"Projects Shipped"}),y.jsx("p",{className:`text-xs ${be}`,children:"AI, software engineering & Salesforce solutions"})]}),y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-2`,children:[y.jsx("span",{className:"text-3xl font-black text-indigo-500",children:"6"}),y.jsx("h5",{className:"text-sm font-bold",children:"AI Domains"}),y.jsx("p",{className:`text-xs ${be}`,children:"GenAI, Agentic AI, RAG, NLP, ML & Automation"})]}),y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-2 col-span-2`,children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("span",{className:"text-3xl font-black text-violet-500",children:"7+"}),y.jsx("span",{className:"text-xs font-bold bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20",children:"Verified Badges"})]}),y.jsx("h5",{className:"text-sm font-bold",children:"Certifications & Credentials"}),y.jsx("p",{className:`text-xs ${be}`,children:"Salesforce Platform Dev I, Agentforce, Pega CSA, Red Hat RHCSA, Python & Java"})]})]})]})]})}),y.jsx("section",{id:"skills",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Technical Proficiency"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Skills & Expertise"})]}),y.jsxs("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Languages"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["Python","Java","JavaScript","TypeScript","SQL","Apex"].map(Z=>y.jsx("span",{className:`text-xs font-mono font-medium px-3 py-1 rounded-lg ${le?"bg-slate-800/80 text-slate-200":"bg-slate-100 text-slate-800"}`,children:Z},Z))})]}),y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Frameworks & Web"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["FastAPI","Flask","Node.js","React","React Native","LWC","REST APIs"].map(Z=>y.jsx("span",{className:`text-xs font-mono font-medium px-3 py-1 rounded-lg ${le?"bg-slate-800/80 text-slate-200":"bg-slate-100 text-slate-800"}`,children:Z},Z))})]}),y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"AI & Data Tools"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["LangChain","Transformers","TensorFlow","Scikit-Learn","CrewAI","LlamaIndex"].map(Z=>y.jsx("span",{className:`text-xs font-mono font-medium px-3 py-1 rounded-lg ${le?"bg-slate-800/80 text-slate-200":"bg-slate-100 text-slate-800"}`,children:Z},Z))})]}),y.jsxs("div",{className:`${xe} p-6 rounded-3xl space-y-4`,children:[y.jsx("div",{className:"w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})}),y.jsx("h4",{className:"text-lg font-bold",children:"Enterprise Platforms"}),y.jsx("div",{className:"flex flex-wrap gap-2",children:["Salesforce","AgentForce","PEGA","Docker","Git / GitHub","VS Code"].map(Z=>y.jsx("span",{className:`text-xs font-mono font-medium px-3 py-1 rounded-lg ${le?"bg-slate-800/80 text-slate-200":"bg-slate-100 text-slate-800"}`,children:Z},Z))})]})]})]})}),y.jsx("section",{id:"projects",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Portfolio Showcase"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Featured Projects"})]}),y.jsx("div",{className:"flex flex-wrap gap-2 justify-center",children:["All","AI","Salesforce","Mobile","Web App","Security"].map(Z=>y.jsx("button",{onClick:()=>p(Z),className:`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${d===Z?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20":le?"bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800":"bg-white text-slate-600 hover:text-slate-900 border border-slate-200"}`,children:Z},Z))}),y.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:ae.map(Z=>y.jsxs("div",{onClick:()=>c(Z),className:`${xe} p-6 rounded-3xl flex flex-col justify-between cursor-pointer space-y-4 hover:scale-[1.01] transition-transform`,children:[y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"flex items-center justify-between gap-2",children:[y.jsx("span",{className:"text-[11px] font-bold text-cyan-500 uppercase tracking-wider",children:Z.category}),Z.badge&&y.jsx("span",{className:"text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 px-2.5 py-0.5 rounded-full border border-cyan-500/20 truncate max-w-[150px]",children:Z.badge})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-lg font-extrabold tracking-tight",children:Z.title}),Z.subtitle&&y.jsx("p",{className:"text-xs font-semibold text-sky-500 dark:text-sky-400 mt-0.5",children:Z.subtitle})]}),y.jsx("p",{className:`text-xs ${be} line-clamp-3 leading-relaxed`,children:Z.desc})]}),y.jsxs("div",{className:"space-y-4 pt-1",children:[y.jsx("div",{className:"flex flex-wrap gap-1.5",children:Z.tech.map(ye=>y.jsx("span",{className:`text-[11px] font-mono font-medium px-2.5 py-1 rounded-xl transition-colors ${le?"bg-sky-950/60 text-sky-300 border border-sky-800/60":"bg-sky-50 text-sky-800 border border-sky-200/80 shadow-xs"}`,children:ye},ye))}),y.jsxs("div",{className:"flex items-center space-x-2 pt-3 border-t border-slate-200 dark:border-slate-800/80",children:[y.jsxs("button",{onClick:ye=>{ye.stopPropagation(),c(Z)},className:`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${le?"bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80":"bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5 text-cyan-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})}),y.jsx("span",{children:"Architecture"})]}),Z.github?y.jsxs("a",{href:Z.github,target:"_blank",rel:"noopener noreferrer",onClick:ye=>ye.stopPropagation(),className:`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${le?"bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700/80":"bg-white hover:bg-slate-100 text-slate-800 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"Repo"})]}):y.jsxs("a",{href:Z.live,target:"_blank",rel:"noopener noreferrer",onClick:ye=>ye.stopPropagation(),className:`flex-1 inline-flex items-center justify-center space-x-1.5 text-xs font-semibold py-2 px-3 rounded-xl border transition-all ${le?"bg-slate-900/80 hover:bg-slate-800 text-cyan-400 border-slate-700/80":"bg-white hover:bg-slate-100 text-cyan-700 border-slate-200 shadow-xs"}`,children:[y.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),y.jsx("span",{children:"Live"})]})]})]})]},Z.id))})]})}),o&&y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-md",children:y.jsxs("div",{className:`relative max-w-2xl w-full ${le?"bg-slate-900 border-slate-800 text-slate-100":"bg-white border-slate-200 text-slate-900"} rounded-3xl p-8 space-y-6 shadow-2xl border max-h-[90vh] overflow-y-auto`,children:[y.jsx("button",{onClick:()=>c(null),className:"absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white",children:y.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),y.jsxs("div",{className:"space-y-2",children:[y.jsx("span",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:o.category}),y.jsx("h3",{className:"text-2xl font-black",children:o.title}),o.subtitle&&y.jsx("p",{className:"text-xs font-semibold text-sky-500",children:o.subtitle})]}),y.jsx("p",{className:`text-sm ${be} leading-relaxed`,children:o.details}),o.metrics&&y.jsxs("div",{className:"space-y-3 pt-2",children:[y.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-cyan-500",children:"Key Highlights & Metrics"}),y.jsx("ul",{className:"space-y-2",children:o.metrics.map((Z,ye)=>y.jsxs("li",{className:"flex items-start space-x-2 text-xs font-medium",children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"}),y.jsx("span",{className:be,children:Z})]},ye))})]}),y.jsxs("div",{className:"pt-4 flex flex-wrap gap-3",children:[o.github&&y.jsxs("a",{href:o.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity",children:[y.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),y.jsx("span",{children:"View Repository"})]}),o.live&&y.jsxs("a",{href:o.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:opacity-95 transition-opacity",children:[y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})}),y.jsx("span",{children:"Live Demo"})]})]})]})}),y.jsx("section",{id:"journey",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-6xl mx-auto space-y-12",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Experience & Academics"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Career & Education Journey"})]}),y.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800",children:[y.jsx("div",{className:"w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsx("h4",{className:"text-xl font-extrabold",children:"Professional Internships"})]}),y.jsx("div",{className:"space-y-6",children:ce.map((Z,ye)=>y.jsxs("div",{className:`${xe} p-7 rounded-3xl space-y-4 relative overflow-hidden`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsxs("div",{children:[y.jsx("h5",{className:"text-lg font-bold",children:Z.role}),y.jsx("p",{className:"text-xs font-semibold text-cyan-500",children:Z.company})]}),y.jsx("span",{className:"text-[11px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20",children:Z.period})]}),y.jsx("ul",{className:"space-y-2 pt-1",children:Z.points.map((Je,nt)=>y.jsxs("li",{className:"flex items-start space-x-2 text-xs font-medium",children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"}),y.jsx("span",{className:be,children:Je})]},nt))})]},ye))})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center space-x-3 pb-2 border-b border-slate-200 dark:border-slate-800",children:[y.jsx("div",{className:"w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center",children:y.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 14l9-5-9-5-9 5 9 5z"}),y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"})]})}),y.jsx("h4",{className:"text-xl font-extrabold",children:"Academic Background"})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:`${xe} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"B.Tech — Computer Science & Engineering (CSE)"}),y.jsx("span",{className:"text-[11px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20",children:"Completed (2022–2026)"})]}),y.jsx("p",{className:`text-xs font-medium ${be}`,children:"Aditya University (Formerly Aditya Engineering College) — Surampalem, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${le?"bg-slate-800/80 text-cyan-300":"bg-cyan-50 text-cyan-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Degree Completed — CGPA: 8.64 / 10"})})]}),y.jsxs("div",{className:`${xe} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"Intermediate — MPC"}),y.jsx("span",{className:"text-[11px] font-bold bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20",children:"Passed 2022"})]}),y.jsx("p",{className:`text-xs font-medium ${be}`,children:"Sri Saraswathi Junior College — Ongole, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${le?"bg-slate-800/80 text-indigo-300":"bg-indigo-50 text-indigo-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.7%"})})]}),y.jsxs("div",{className:`${xe} p-7 rounded-3xl space-y-3`,children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[y.jsx("h5",{className:"text-base font-bold",children:"10th Standard"}),y.jsx("span",{className:"text-[11px] font-bold bg-violet-500/10 text-violet-400 px-3 py-1 rounded-full border border-violet-500/20",children:"Passed 2020"})]}),y.jsx("p",{className:`text-xs font-medium ${be}`,children:"Sri Chaitanya EM High School — Singarayakonda, AP"}),y.jsx("div",{className:"pt-2",children:y.jsx("span",{className:`text-xs font-bold ${le?"bg-slate-800/80 text-violet-300":"bg-violet-50 text-violet-800"} px-3 py-1.5 rounded-lg inline-block`,children:"Score: 96.66%"})})]})]})]})]})]})}),y.jsx("section",{id:"credentials",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Qualifications & Honors"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Credentials & Recognition"})]}),y.jsx("div",{className:"flex justify-center",children:y.jsxs("div",{className:`p-1.5 rounded-2xl ${le?"bg-slate-900 border border-slate-800":"bg-slate-200/70 border border-slate-300"} inline-flex space-x-2`,children:[y.jsxs("button",{onClick:()=>h("certifications"),className:`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${u==="certifications"?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md":"text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,children:["Certifications (",Ve.length,")"]}),y.jsxs("button",{onClick:()=>h("achievements"),className:`text-xs font-bold px-6 py-2.5 rounded-xl transition-all ${u==="achievements"?"bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md":"text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,children:["Honors & Achievements (",Q.length,")"]})]})}),u==="certifications"&&y.jsx("div",{className:"grid sm:grid-cols-2 gap-4",children:Ve.map((Z,ye)=>y.jsxs("div",{className:`${xe} p-6 rounded-3xl flex items-start justify-between gap-4`,children:[y.jsxs("div",{className:"space-y-2",children:[y.jsx("h5",{className:"text-sm font-bold leading-snug",children:Z.title}),y.jsx("p",{className:`text-xs ${be}`,children:Z.issuer})]}),y.jsx("a",{href:Z.link,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-xl bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-colors shrink-0",title:"View Verified Credential",children:y.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})})]},ye))}),u==="achievements"&&y.jsx("div",{className:"space-y-4",children:Q.map((Z,ye)=>y.jsxs("div",{className:`${xe} p-6 rounded-3xl flex flex-wrap sm:flex-nowrap items-start gap-4`,children:[y.jsx("span",{className:"text-xs font-extrabold bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full border border-cyan-500/20 shrink-0",children:Z.year}),y.jsxs("div",{className:"space-y-1",children:[y.jsx("h5",{className:"text-base font-bold",children:Z.title}),y.jsx("p",{className:"text-xs font-semibold text-cyan-500",children:Z.org}),y.jsx("p",{className:`text-xs ${be} pt-1`,children:Z.desc})]})]},ye))})]})}),y.jsx("section",{id:"contact",className:"py-20 px-6 relative z-10",children:y.jsxs("div",{className:"max-w-5xl mx-auto space-y-10",children:[y.jsxs("div",{className:"text-center space-y-2",children:[y.jsx("h2",{className:"text-xs font-bold text-cyan-500 uppercase tracking-widest",children:"Get In Touch"}),y.jsx("h3",{className:"text-3xl font-extrabold tracking-tight",children:"Contact Me"})]}),y.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsx("h4",{className:"text-2xl font-bold",children:"Let's Build Something Together"}),y.jsx("p",{className:`${be} leading-relaxed text-sm sm:text-base`,children:"I am actively seeking Full-Time software engineering opportunities, AI developer roles, and entry-level engineering positions. Feel free to reach out via the form or connect through my professional profiles below!"}),y.jsxs("div",{className:"space-y-4 pt-2",children:[y.jsxs("div",{className:`flex items-center space-x-4 ${xe} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${be} uppercase`,children:"Email"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"dandetejaswini1329@gmail.com"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${xe} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${be} uppercase`,children:"LinkedIn"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"tejaswini-dande"})]})]}),y.jsxs("div",{className:`flex items-center space-x-4 ${xe} p-4 rounded-2xl`,children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center",children:y.jsx("svg",{className:"w-5 h-5 fill-current",viewBox:"0 0 24 24",children:y.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})}),y.jsxs("div",{children:[y.jsx("h5",{className:`text-xs font-semibold ${be} uppercase`,children:"GitHub"}),y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-bold hover:text-cyan-500",children:"dandetejaswini"})]})]})]})]}),y.jsx("div",{className:`${xe} p-8 rounded-3xl`,children:y.jsxs("form",{onSubmit:Xe,className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${be} mb-2`,children:"Your Name"}),y.jsx("input",{type:"text",value:m.name,onChange:Z=>{f({...m,name:Z.target.value}),S&&T(null)},placeholder:"Enter your name",className:`w-full ${at} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${be} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: Valid name containing only letters (a-z, A-Z) and spaces."]}),ie()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",ie()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${be} mb-2`,children:"Your Email"}),y.jsx("input",{type:"email",value:m.email,onChange:Z=>{f({...m,email:Z.target.value}),S&&T(null)},placeholder:"example@gmail.com",className:`w-full ${at} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${be} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: Lowercase letters & numbers only before @gmail.com."]}),fe()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",fe()]})]}),y.jsxs("div",{children:[y.jsx("label",{className:`block text-xs font-semibold uppercase tracking-wider ${be} mb-2`,children:"Your Message"}),y.jsx("textarea",{rows:"4",value:m.message,onChange:Z=>{f({...m,message:Z.target.value}),S&&T(null)},placeholder:"Write your message here...",className:`w-full ${at} rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 transition-colors`}),y.jsxs("p",{className:`text-[11px] ${be} mt-1.5 flex items-center gap-1 font-medium`,children:[y.jsx("span",{className:"text-cyan-500 font-bold",children:"•"})," Required: At least 10 characters message."]}),Se()&&y.jsxs("p",{className:"text-xs text-rose-500 mt-1 font-medium flex items-center gap-1",children:[y.jsx("span",{children:"⚠️"})," ",Se()]})]}),S&&y.jsx("div",{className:`p-3.5 rounded-xl text-xs font-bold text-center ${S.type==="success"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-rose-500/20 text-rose-400 border border-rose-500/30"}`,children:S.text}),y.jsx("button",{type:"submit",disabled:x,className:"w-full bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50",children:x?"Sending Message...":"Send Message"})]})})]})]})}),y.jsx("footer",{className:`py-8 px-6 relative z-10 border-t ${le?"border-slate-900 bg-slate-950 text-slate-400":"border-slate-200 bg-slate-100 text-slate-600"}`,children:y.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium",children:[y.jsxs("p",{children:["© ",new Date().getFullYear()," Dande Tejaswini. All rights reserved."]}),y.jsxs("div",{className:"flex items-center space-x-6",children:[y.jsx("a",{href:"https://github.com/dandetejaswini",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"GitHub"}),y.jsx("a",{href:"https://www.linkedin.com/in/tejaswini-dande-826157258/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"LinkedIn"}),y.jsx("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=dandetejaswini1329@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"hover:text-cyan-500 transition-colors",children:"Email"})]})]})})]})}pb.createRoot(document.getElementById("root")).render(y.jsx(OS.StrictMode,{children:y.jsx(w3,{})}));
