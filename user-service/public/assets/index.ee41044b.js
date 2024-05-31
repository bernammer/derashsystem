var KH=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var R1e=KH((Gr,ar)=>{function sO(t,n){for(var i=0;i<n.length;i++){const s=n[i];if(typeof s!="string"&&!Array.isArray(s)){for(const d in s)if(d!=="default"&&!(d in t)){const h=Object.getOwnPropertyDescriptor(s,d);h&&Object.defineProperty(t,d,h.get?h:{enumerable:!0,get:()=>s[d]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerpolicy&&(h.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?h.credentials="include":d.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=i(d);fetch(d.href,h)}})();var pi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aO(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=Symbol.for("react.element"),QH=Symbol.for("react.portal"),ZH=Symbol.for("react.fragment"),JH=Symbol.for("react.strict_mode"),XH=Symbol.for("react.profiler"),eq=Symbol.for("react.provider"),tq=Symbol.for("react.context"),nq=Symbol.for("react.forward_ref"),rq=Symbol.for("react.suspense"),iq=Symbol.for("react.memo"),oq=Symbol.for("react.lazy"),WM=Symbol.iterator;function sq(t){return t===null||typeof t!="object"?null:(t=WM&&t[WM]||t["@@iterator"],typeof t=="function"?t:null)}var lO={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cO=Object.assign,dO={};function Nd(t,n,i){this.props=t,this.context=n,this.refs=dO,this.updater=i||lO}Nd.prototype.isReactComponent={};Nd.prototype.setState=function(t,n){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")};Nd.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uO(){}uO.prototype=Nd.prototype;function y_(t,n,i){this.props=t,this.context=n,this.refs=dO,this.updater=i||lO}var __=y_.prototype=new uO;__.constructor=y_;cO(__,Nd.prototype);__.isPureReactComponent=!0;var GM=Array.isArray,hO=Object.prototype.hasOwnProperty,A_={current:null},fO={key:!0,ref:!0,__self:!0,__source:!0};function pO(t,n,i){var s,d={},h=null,p=null;if(n!=null)for(s in n.ref!==void 0&&(p=n.ref),n.key!==void 0&&(h=""+n.key),n)hO.call(n,s)&&!fO.hasOwnProperty(s)&&(d[s]=n[s]);var b=arguments.length-2;if(b===1)d.children=i;else if(1<b){for(var m=Array(b),w=0;w<b;w++)m[w]=arguments[w+2];d.children=m}if(t&&t.defaultProps)for(s in b=t.defaultProps,b)d[s]===void 0&&(d[s]=b[s]);return{$$typeof:Mf,type:t,key:h,ref:p,props:d,_owner:A_.current}}function aq(t,n){return{$$typeof:Mf,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}function C_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mf}function lq(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return n[i]})}var YM=/\/+/g;function Tw(t,n){return typeof t=="object"&&t!==null&&t.key!=null?lq(""+t.key):n.toString(36)}function rm(t,n,i,s,d){var h=typeof t;(h==="undefined"||h==="boolean")&&(t=null);var p=!1;if(t===null)p=!0;else switch(h){case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case Mf:case QH:p=!0}}if(p)return p=t,d=d(p),t=s===""?"."+Tw(p,0):s,GM(d)?(i="",t!=null&&(i=t.replace(YM,"$&/")+"/"),rm(d,n,i,"",function(w){return w})):d!=null&&(C_(d)&&(d=aq(d,i+(!d.key||p&&p.key===d.key?"":(""+d.key).replace(YM,"$&/")+"/")+t)),n.push(d)),1;if(p=0,s=s===""?".":s+":",GM(t))for(var b=0;b<t.length;b++){h=t[b];var m=s+Tw(h,b);p+=rm(h,n,i,m,d)}else if(m=sq(t),typeof m=="function")for(t=m.call(t),b=0;!(h=t.next()).done;)h=h.value,m=s+Tw(h,b++),p+=rm(h,n,i,m,d);else if(h==="object")throw n=String(t),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return p}function Eg(t,n,i){if(t==null)return t;var s=[],d=0;return rm(t,s,"","",function(h){return n.call(i,h,d++)}),s}function cq(t){if(t._status===-1){var n=t._result;n=n(),n.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=n)}if(t._status===1)return t._result.default;throw t._result}var mr={current:null},im={transition:null},dq={ReactCurrentDispatcher:mr,ReactCurrentBatchConfig:im,ReactCurrentOwner:A_};at.Children={map:Eg,forEach:function(t,n,i){Eg(t,function(){n.apply(this,arguments)},i)},count:function(t){var n=0;return Eg(t,function(){n++}),n},toArray:function(t){return Eg(t,function(n){return n})||[]},only:function(t){if(!C_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=Nd;at.Fragment=ZH;at.Profiler=XH;at.PureComponent=y_;at.StrictMode=JH;at.Suspense=rq;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dq;at.cloneElement=function(t,n,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var s=cO({},t.props),d=t.key,h=t.ref,p=t._owner;if(n!=null){if(n.ref!==void 0&&(h=n.ref,p=A_.current),n.key!==void 0&&(d=""+n.key),t.type&&t.type.defaultProps)var b=t.type.defaultProps;for(m in n)hO.call(n,m)&&!fO.hasOwnProperty(m)&&(s[m]=n[m]===void 0&&b!==void 0?b[m]:n[m])}var m=arguments.length-2;if(m===1)s.children=i;else if(1<m){b=Array(m);for(var w=0;w<m;w++)b[w]=arguments[w+2];s.children=b}return{$$typeof:Mf,type:t.type,key:d,ref:h,props:s,_owner:p}};at.createContext=function(t){return t={$$typeof:tq,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eq,_context:t},t.Consumer=t};at.createElement=pO;at.createFactory=function(t){var n=pO.bind(null,t);return n.type=t,n};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:nq,render:t}};at.isValidElement=C_;at.lazy=function(t){return{$$typeof:oq,_payload:{_status:-1,_result:t},_init:cq}};at.memo=function(t,n){return{$$typeof:iq,type:t,compare:n===void 0?null:n}};at.startTransition=function(t){var n=im.transition;im.transition={};try{t()}finally{im.transition=n}};at.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};at.useCallback=function(t,n){return mr.current.useCallback(t,n)};at.useContext=function(t){return mr.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return mr.current.useDeferredValue(t)};at.useEffect=function(t,n){return mr.current.useEffect(t,n)};at.useId=function(){return mr.current.useId()};at.useImperativeHandle=function(t,n,i){return mr.current.useImperativeHandle(t,n,i)};at.useInsertionEffect=function(t,n){return mr.current.useInsertionEffect(t,n)};at.useLayoutEffect=function(t,n){return mr.current.useLayoutEffect(t,n)};at.useMemo=function(t,n){return mr.current.useMemo(t,n)};at.useReducer=function(t,n,i){return mr.current.useReducer(t,n,i)};at.useRef=function(t){return mr.current.useRef(t)};at.useState=function(t){return mr.current.useState(t)};at.useSyncExternalStore=function(t,n,i){return mr.current.useSyncExternalStore(t,n,i)};at.useTransition=function(){return mr.current.useTransition()};at.version="18.2.0";(function(t){t.exports=at})(Z);const lt=aO(Z.exports),x_=sO({__proto__:null,default:lt},[Z.exports]);var Fy={},Id={exports:{}},Jr={},gO={exports:{}},mO={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function n(oe,le){var ge=oe.length;oe.push(le);e:for(;0<ge;){var Ne=ge-1>>>1,Re=oe[Ne];if(0<d(Re,le))oe[Ne]=le,oe[ge]=Re,ge=Ne;else break e}}function i(oe){return oe.length===0?null:oe[0]}function s(oe){if(oe.length===0)return null;var le=oe[0],ge=oe.pop();if(ge!==le){oe[0]=ge;e:for(var Ne=0,Re=oe.length,Fe=Re>>>1;Ne<Fe;){var Ve=2*(Ne+1)-1,Ue=oe[Ve],We=Ve+1,je=oe[We];if(0>d(Ue,ge))We<Re&&0>d(je,Ue)?(oe[Ne]=je,oe[We]=ge,Ne=We):(oe[Ne]=Ue,oe[Ve]=ge,Ne=Ve);else if(We<Re&&0>d(je,ge))oe[Ne]=je,oe[We]=ge,Ne=We;else break e}}return le}function d(oe,le){var ge=oe.sortIndex-le.sortIndex;return ge!==0?ge:oe.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var p=Date,b=p.now();t.unstable_now=function(){return p.now()-b}}var m=[],w=[],x=1,y=null,_=3,E=!1,D=!1,T=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(oe){for(var le=i(w);le!==null;){if(le.callback===null)s(w);else if(le.startTime<=oe)s(w),le.sortIndex=le.expirationTime,n(m,le);else break;le=i(w)}}function z(oe){if(T=!1,B(oe),!D)if(i(m)!==null)D=!0,Ee(U);else{var le=i(w);le!==null&&Ce(z,le.startTime-oe)}}function U(oe,le){D=!1,T&&(T=!1,I(P),P=-1),E=!0;var ge=_;try{for(B(le),y=i(m);y!==null&&(!(y.expirationTime>le)||oe&&!ee());){var Ne=y.callback;if(typeof Ne=="function"){y.callback=null,_=y.priorityLevel;var Re=Ne(y.expirationTime<=le);le=t.unstable_now(),typeof Re=="function"?y.callback=Re:y===i(m)&&s(m),B(le)}else s(m);y=i(m)}if(y!==null)var Fe=!0;else{var Ve=i(w);Ve!==null&&Ce(z,Ve.startTime-le),Fe=!1}return Fe}finally{y=null,_=ge,E=!1}}var q=!1,H=null,P=-1,Y=5,K=-1;function ee(){return!(t.unstable_now()-K<Y)}function ne(){if(H!==null){var oe=t.unstable_now();K=oe;var le=!0;try{le=H(!0,oe)}finally{le?te():(q=!1,H=null)}}else q=!1}var te;if(typeof M=="function")te=function(){M(ne)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=ne,te=function(){ue.postMessage(null)}}else te=function(){O(ne,0)};function Ee(oe){H=oe,q||(q=!0,te())}function Ce(oe,le){P=O(function(){oe(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(oe){oe.callback=null},t.unstable_continueExecution=function(){D||E||(D=!0,Ee(U))},t.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<oe?Math.floor(1e3/oe):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return i(m)},t.unstable_next=function(oe){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var ge=_;_=le;try{return oe()}finally{_=ge}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(oe,le){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ge=_;_=oe;try{return le()}finally{_=ge}},t.unstable_scheduleCallback=function(oe,le,ge){var Ne=t.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Ne+ge:Ne):ge=Ne,oe){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ge+Re,oe={id:x++,callback:le,priorityLevel:oe,startTime:ge,expirationTime:Re,sortIndex:-1},ge>Ne?(oe.sortIndex=ge,n(w,oe),i(m)===null&&oe===i(w)&&(T?(I(P),P=-1):T=!0,Ce(z,ge-Ne))):(oe.sortIndex=Re,n(m,oe),D||E||(D=!0,Ee(U))),oe},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(oe){var le=_;return function(){var ge=_;_=le;try{return oe.apply(this,arguments)}finally{_=ge}}}})(mO);(function(t){t.exports=mO})(gO);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bO=Z.exports,Kr=gO.exports;function ke(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kO=new Set,Gh={};function Ml(t,n){kd(t,n),kd(t+"Capture",n)}function kd(t,n){for(Gh[t]=n,t=0;t<n.length;t++)kO.add(n[t])}var ls=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$y=Object.prototype.hasOwnProperty,uq=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,KM={},QM={};function hq(t){return $y.call(QM,t)?!0:$y.call(KM,t)?!1:uq.test(t)?QM[t]=!0:(KM[t]=!0,!1)}function fq(t,n,i,s){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pq(t,n,i,s){if(n===null||typeof n>"u"||fq(t,n,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function br(t,n,i,s,d,h,p){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=t,this.type=n,this.sanitizeURL=h,this.removeEmptyString=p}var Jn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jn[t]=new br(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];Jn[n]=new br(n,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jn[t]=new br(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jn[t]=new br(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jn[t]=new br(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jn[t]=new br(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jn[t]=new br(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jn[t]=new br(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jn[t]=new br(t,5,!1,t.toLowerCase(),null,!1,!1)});var E_=/[\-:]([a-z])/g;function S_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(E_,S_);Jn[n]=new br(n,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(E_,S_);Jn[n]=new br(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(E_,S_);Jn[n]=new br(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jn[t]=new br(t,1,!1,t.toLowerCase(),null,!1,!1)});Jn.xlinkHref=new br("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jn[t]=new br(t,1,!1,t.toLowerCase(),null,!0,!0)});function D_(t,n,i,s){var d=Jn.hasOwnProperty(n)?Jn[n]:null;(d!==null?d.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(pq(n,i,d,s)&&(i=null),s||d===null?hq(n)&&(i===null?t.removeAttribute(n):t.setAttribute(n,""+i)):d.mustUseProperty?t[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,s=d.attributeNamespace,i===null?t.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,s?t.setAttributeNS(s,n,i):t.setAttribute(n,i))))}var fs=bO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sg=Symbol.for("react.element"),Yc=Symbol.for("react.portal"),Kc=Symbol.for("react.fragment"),T_=Symbol.for("react.strict_mode"),Vy=Symbol.for("react.profiler"),vO=Symbol.for("react.provider"),wO=Symbol.for("react.context"),M_=Symbol.for("react.forward_ref"),Uy=Symbol.for("react.suspense"),Hy=Symbol.for("react.suspense_list"),N_=Symbol.for("react.memo"),Ws=Symbol.for("react.lazy"),yO=Symbol.for("react.offscreen"),ZM=Symbol.iterator;function rh(t){return t===null||typeof t!="object"?null:(t=ZM&&t[ZM]||t["@@iterator"],typeof t=="function"?t:null)}var sn=Object.assign,Mw;function wh(t){if(Mw===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Mw=n&&n[1]||""}return`
`+Mw+t}var Nw=!1;function Iw(t,n){if(!t||Nw)return"";Nw=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(w){var s=w}Reflect.construct(t,[],n)}else{try{n.call()}catch(w){s=w}t.call(n.prototype)}else{try{throw Error()}catch(w){s=w}t()}}catch(w){if(w&&s&&typeof w.stack=="string"){for(var d=w.stack.split(`
`),h=s.stack.split(`
`),p=d.length-1,b=h.length-1;1<=p&&0<=b&&d[p]!==h[b];)b--;for(;1<=p&&0<=b;p--,b--)if(d[p]!==h[b]){if(p!==1||b!==1)do if(p--,b--,0>b||d[p]!==h[b]){var m=`
`+d[p].replace(" at new "," at ");return t.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",t.displayName)),m}while(1<=p&&0<=b);break}}}finally{Nw=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?wh(t):""}function gq(t){switch(t.tag){case 5:return wh(t.type);case 16:return wh("Lazy");case 13:return wh("Suspense");case 19:return wh("SuspenseList");case 0:case 2:case 15:return t=Iw(t.type,!1),t;case 11:return t=Iw(t.type.render,!1),t;case 1:return t=Iw(t.type,!0),t;default:return""}}function qy(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kc:return"Fragment";case Yc:return"Portal";case Vy:return"Profiler";case T_:return"StrictMode";case Uy:return"Suspense";case Hy:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wO:return(t.displayName||"Context")+".Consumer";case vO:return(t._context.displayName||"Context")+".Provider";case M_:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N_:return n=t.displayName||null,n!==null?n:qy(t.type)||"Memo";case Ws:n=t._payload,t=t._init;try{return qy(t(n))}catch{}}return null}function mq(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qy(n);case 8:return n===T_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ba(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _O(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bq(t){var n=_O(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,h=i.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return d.call(this)},set:function(p){s=""+p,h.call(this,p)}}),Object.defineProperty(t,n,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(p){s=""+p},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Dg(t){t._valueTracker||(t._valueTracker=bq(t))}function AO(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),s="";return t&&(s=_O(t)?t.checked?"true":"false":t.value),t=s,t!==i?(n.setValue(t),!0):!1}function Em(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wy(t,n){var i=n.checked;return sn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i!=null?i:t._wrapperState.initialChecked})}function JM(t,n){var i=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;i=ba(n.value!=null?n.value:i),t._wrapperState={initialChecked:s,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function CO(t,n){n=n.checked,n!=null&&D_(t,"checked",n,!1)}function Gy(t,n){CO(t,n);var i=ba(n.value),s=n.type;if(i!=null)s==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(s==="submit"||s==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Yy(t,n.type,i):n.hasOwnProperty("defaultValue")&&Yy(t,n.type,ba(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function XM(t,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,i||n===t.value||(t.value=n),t.defaultValue=n}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function Yy(t,n,i){(n!=="number"||Em(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var yh=Array.isArray;function ld(t,n,i,s){if(t=t.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<t.length;i++)d=n.hasOwnProperty("$"+t[i].value),t[i].selected!==d&&(t[i].selected=d),d&&s&&(t[i].defaultSelected=!0)}else{for(i=""+ba(i),n=null,d=0;d<t.length;d++){if(t[d].value===i){t[d].selected=!0,s&&(t[d].defaultSelected=!0);return}n!==null||t[d].disabled||(n=t[d])}n!==null&&(n.selected=!0)}}function Ky(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(ke(91));return sn({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function eN(t,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(ke(92));if(yh(i)){if(1<i.length)throw Error(ke(93));i=i[0]}n=i}n==null&&(n=""),i=n}t._wrapperState={initialValue:ba(i)}}function xO(t,n){var i=ba(n.value),s=ba(n.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),n.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),s!=null&&(t.defaultValue=""+s)}function tN(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function EO(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qy(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?EO(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tg,SO=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,s,d){MSApp.execUnsafeLocalFunction(function(){return t(n,i,s,d)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Tg=Tg||document.createElement("div"),Tg.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Tg.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function Yh(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var Nh={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kq=["Webkit","ms","Moz","O"];Object.keys(Nh).forEach(function(t){kq.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Nh[n]=Nh[t]})});function DO(t,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Nh.hasOwnProperty(t)&&Nh[t]?(""+n).trim():n+"px"}function TO(t,n){t=t.style;for(var i in n)if(n.hasOwnProperty(i)){var s=i.indexOf("--")===0,d=DO(i,n[i],s);i==="float"&&(i="cssFloat"),s?t.setProperty(i,d):t[i]=d}}var vq=sn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zy(t,n){if(n){if(vq[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(ke(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(ke(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(ke(61))}if(n.style!=null&&typeof n.style!="object")throw Error(ke(62))}}function Jy(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xy=null;function I_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var e1=null,cd=null,dd=null;function nN(t){if(t=Of(t)){if(typeof e1!="function")throw Error(ke(280));var n=t.stateNode;n&&(n=M0(n),e1(t.stateNode,t.type,n))}}function MO(t){cd?dd?dd.push(t):dd=[t]:cd=t}function NO(){if(cd){var t=cd,n=dd;if(dd=cd=null,nN(t),n)for(t=0;t<n.length;t++)nN(n[t])}}function IO(t,n){return t(n)}function OO(){}var Ow=!1;function PO(t,n,i){if(Ow)return t(n,i);Ow=!0;try{return IO(t,n,i)}finally{Ow=!1,(cd!==null||dd!==null)&&(OO(),NO())}}function Kh(t,n){var i=t.stateNode;if(i===null)return null;var s=M0(i);if(s===null)return null;i=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(ke(231,n,typeof i));return i}var t1=!1;if(ls)try{var ih={};Object.defineProperty(ih,"passive",{get:function(){t1=!0}}),window.addEventListener("test",ih,ih),window.removeEventListener("test",ih,ih)}catch{t1=!1}function wq(t,n,i,s,d,h,p,b,m){var w=Array.prototype.slice.call(arguments,3);try{n.apply(i,w)}catch(x){this.onError(x)}}var Ih=!1,Sm=null,Dm=!1,n1=null,yq={onError:function(t){Ih=!0,Sm=t}};function _q(t,n,i,s,d,h,p,b,m){Ih=!1,Sm=null,wq.apply(yq,arguments)}function Aq(t,n,i,s,d,h,p,b,m){if(_q.apply(this,arguments),Ih){if(Ih){var w=Sm;Ih=!1,Sm=null}else throw Error(ke(198));Dm||(Dm=!0,n1=w)}}function Nl(t){var n=t,i=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(i=n.return),t=n.return;while(t)}return n.tag===3?i:null}function BO(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function rN(t){if(Nl(t)!==t)throw Error(ke(188))}function Cq(t){var n=t.alternate;if(!n){if(n=Nl(t),n===null)throw Error(ke(188));return n!==t?null:t}for(var i=t,s=n;;){var d=i.return;if(d===null)break;var h=d.alternate;if(h===null){if(s=d.return,s!==null){i=s;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===i)return rN(d),t;if(h===s)return rN(d),n;h=h.sibling}throw Error(ke(188))}if(i.return!==s.return)i=d,s=h;else{for(var p=!1,b=d.child;b;){if(b===i){p=!0,i=d,s=h;break}if(b===s){p=!0,s=d,i=h;break}b=b.sibling}if(!p){for(b=h.child;b;){if(b===i){p=!0,i=h,s=d;break}if(b===s){p=!0,s=h,i=d;break}b=b.sibling}if(!p)throw Error(ke(189))}}if(i.alternate!==s)throw Error(ke(190))}if(i.tag!==3)throw Error(ke(188));return i.stateNode.current===i?t:n}function RO(t){return t=Cq(t),t!==null?LO(t):null}function LO(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=LO(t);if(n!==null)return n;t=t.sibling}return null}var zO=Kr.unstable_scheduleCallback,iN=Kr.unstable_cancelCallback,xq=Kr.unstable_shouldYield,Eq=Kr.unstable_requestPaint,bn=Kr.unstable_now,Sq=Kr.unstable_getCurrentPriorityLevel,O_=Kr.unstable_ImmediatePriority,jO=Kr.unstable_UserBlockingPriority,Tm=Kr.unstable_NormalPriority,Dq=Kr.unstable_LowPriority,FO=Kr.unstable_IdlePriority,E0=null,yo=null;function Tq(t){if(yo&&typeof yo.onCommitFiberRoot=="function")try{yo.onCommitFiberRoot(E0,t,void 0,(t.current.flags&128)===128)}catch{}}var Hi=Math.clz32?Math.clz32:Iq,Mq=Math.log,Nq=Math.LN2;function Iq(t){return t>>>=0,t===0?32:31-(Mq(t)/Nq|0)|0}var Mg=64,Ng=4194304;function _h(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mm(t,n){var i=t.pendingLanes;if(i===0)return 0;var s=0,d=t.suspendedLanes,h=t.pingedLanes,p=i&268435455;if(p!==0){var b=p&~d;b!==0?s=_h(b):(h&=p,h!==0&&(s=_h(h)))}else p=i&~d,p!==0?s=_h(p):h!==0&&(s=_h(h));if(s===0)return 0;if(n!==0&&n!==s&&(n&d)===0&&(d=s&-s,h=n&-n,d>=h||d===16&&(h&4194240)!==0))return n;if((s&4)!==0&&(s|=i&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=s;0<n;)i=31-Hi(n),d=1<<i,s|=t[i],n&=~d;return s}function Oq(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pq(t,n){for(var i=t.suspendedLanes,s=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var p=31-Hi(h),b=1<<p,m=d[p];m===-1?((b&i)===0||(b&s)!==0)&&(d[p]=Oq(b,n)):m<=n&&(t.expiredLanes|=b),h&=~b}}function r1(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $O(){var t=Mg;return Mg<<=1,(Mg&4194240)===0&&(Mg=64),t}function Pw(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function Nf(t,n,i){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Hi(n),t[n]=i}function Bq(t,n){var i=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var s=t.eventTimes;for(t=t.expirationTimes;0<i;){var d=31-Hi(i),h=1<<d;n[d]=0,s[d]=-1,t[d]=-1,i&=~h}}function P_(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var s=31-Hi(i),d=1<<s;d&n|t[s]&n&&(t[s]|=n),i&=~d}}var St=0;function VO(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var UO,B_,HO,qO,WO,i1=!1,Ig=[],ia=null,oa=null,sa=null,Qh=new Map,Zh=new Map,Ys=[],Rq="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function oN(t,n){switch(t){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":oa=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Qh.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zh.delete(n.pointerId)}}function oh(t,n,i,s,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:i,eventSystemFlags:s,nativeEvent:h,targetContainers:[d]},n!==null&&(n=Of(n),n!==null&&B_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),t)}function Lq(t,n,i,s,d){switch(n){case"focusin":return ia=oh(ia,t,n,i,s,d),!0;case"dragenter":return oa=oh(oa,t,n,i,s,d),!0;case"mouseover":return sa=oh(sa,t,n,i,s,d),!0;case"pointerover":var h=d.pointerId;return Qh.set(h,oh(Qh.get(h)||null,t,n,i,s,d)),!0;case"gotpointercapture":return h=d.pointerId,Zh.set(h,oh(Zh.get(h)||null,t,n,i,s,d)),!0}return!1}function GO(t){var n=pl(t.target);if(n!==null){var i=Nl(n);if(i!==null){if(n=i.tag,n===13){if(n=BO(i),n!==null){t.blockedOn=n,WO(t.priority,function(){HO(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function om(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=o1(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var s=new i.constructor(i.type,i);Xy=s,i.target.dispatchEvent(s),Xy=null}else return n=Of(i),n!==null&&B_(n),t.blockedOn=i,!1;n.shift()}return!0}function sN(t,n,i){om(t)&&i.delete(n)}function zq(){i1=!1,ia!==null&&om(ia)&&(ia=null),oa!==null&&om(oa)&&(oa=null),sa!==null&&om(sa)&&(sa=null),Qh.forEach(sN),Zh.forEach(sN)}function sh(t,n){t.blockedOn===n&&(t.blockedOn=null,i1||(i1=!0,Kr.unstable_scheduleCallback(Kr.unstable_NormalPriority,zq)))}function Jh(t){function n(d){return sh(d,t)}if(0<Ig.length){sh(Ig[0],t);for(var i=1;i<Ig.length;i++){var s=Ig[i];s.blockedOn===t&&(s.blockedOn=null)}}for(ia!==null&&sh(ia,t),oa!==null&&sh(oa,t),sa!==null&&sh(sa,t),Qh.forEach(n),Zh.forEach(n),i=0;i<Ys.length;i++)s=Ys[i],s.blockedOn===t&&(s.blockedOn=null);for(;0<Ys.length&&(i=Ys[0],i.blockedOn===null);)GO(i),i.blockedOn===null&&Ys.shift()}var ud=fs.ReactCurrentBatchConfig,Nm=!0;function jq(t,n,i,s){var d=St,h=ud.transition;ud.transition=null;try{St=1,R_(t,n,i,s)}finally{St=d,ud.transition=h}}function Fq(t,n,i,s){var d=St,h=ud.transition;ud.transition=null;try{St=4,R_(t,n,i,s)}finally{St=d,ud.transition=h}}function R_(t,n,i,s){if(Nm){var d=o1(t,n,i,s);if(d===null)Hw(t,n,s,Im,i),oN(t,s);else if(Lq(d,t,n,i,s))s.stopPropagation();else if(oN(t,s),n&4&&-1<Rq.indexOf(t)){for(;d!==null;){var h=Of(d);if(h!==null&&UO(h),h=o1(t,n,i,s),h===null&&Hw(t,n,s,Im,i),h===d)break;d=h}d!==null&&s.stopPropagation()}else Hw(t,n,s,null,i)}}var Im=null;function o1(t,n,i,s){if(Im=null,t=I_(s),t=pl(t),t!==null)if(n=Nl(t),n===null)t=null;else if(i=n.tag,i===13){if(t=BO(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Im=t,null}function YO(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sq()){case O_:return 1;case jO:return 4;case Tm:case Dq:return 16;case FO:return 536870912;default:return 16}default:return 16}}var Zs=null,L_=null,sm=null;function KO(){if(sm)return sm;var t,n=L_,i=n.length,s,d="value"in Zs?Zs.value:Zs.textContent,h=d.length;for(t=0;t<i&&n[t]===d[t];t++);var p=i-t;for(s=1;s<=p&&n[i-s]===d[h-s];s++);return sm=d.slice(t,1<s?1-s:void 0)}function am(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Og(){return!0}function aN(){return!1}function Xr(t){function n(i,s,d,h,p){this._reactName=i,this._targetInst=d,this.type=s,this.nativeEvent=h,this.target=p,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(i=t[b],this[b]=i?i(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Og:aN,this.isPropagationStopped=aN,this}return sn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Og)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Og)},persist:function(){},isPersistent:Og}),n}var Od={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},z_=Xr(Od),If=sn({},Od,{view:0,detail:0}),$q=Xr(If),Bw,Rw,ah,S0=sn({},If,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:j_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ah&&(ah&&t.type==="mousemove"?(Bw=t.screenX-ah.screenX,Rw=t.screenY-ah.screenY):Rw=Bw=0,ah=t),Bw)},movementY:function(t){return"movementY"in t?t.movementY:Rw}}),lN=Xr(S0),Vq=sn({},S0,{dataTransfer:0}),Uq=Xr(Vq),Hq=sn({},If,{relatedTarget:0}),Lw=Xr(Hq),qq=sn({},Od,{animationName:0,elapsedTime:0,pseudoElement:0}),Wq=Xr(qq),Gq=sn({},Od,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yq=Xr(Gq),Kq=sn({},Od,{data:0}),cN=Xr(Kq),Qq={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zq={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jq={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xq(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Jq[t])?!!n[t]:!1}function j_(){return Xq}var eW=sn({},If,{key:function(t){if(t.key){var n=Qq[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=am(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zq[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:j_,charCode:function(t){return t.type==="keypress"?am(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?am(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tW=Xr(eW),nW=sn({},S0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dN=Xr(nW),rW=sn({},If,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:j_}),iW=Xr(rW),oW=sn({},Od,{propertyName:0,elapsedTime:0,pseudoElement:0}),sW=Xr(oW),aW=sn({},S0,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lW=Xr(aW),cW=[9,13,27,32],F_=ls&&"CompositionEvent"in window,Oh=null;ls&&"documentMode"in document&&(Oh=document.documentMode);var dW=ls&&"TextEvent"in window&&!Oh,QO=ls&&(!F_||Oh&&8<Oh&&11>=Oh),uN=String.fromCharCode(32),hN=!1;function ZO(t,n){switch(t){case"keyup":return cW.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function JO(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qc=!1;function uW(t,n){switch(t){case"compositionend":return JO(n);case"keypress":return n.which!==32?null:(hN=!0,uN);case"textInput":return t=n.data,t===uN&&hN?null:t;default:return null}}function hW(t,n){if(Qc)return t==="compositionend"||!F_&&ZO(t,n)?(t=KO(),sm=L_=Zs=null,Qc=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return QO&&n.locale!=="ko"?null:n.data;default:return null}}var fW={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fN(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!fW[t.type]:n==="textarea"}function XO(t,n,i,s){MO(s),n=Om(n,"onChange"),0<n.length&&(i=new z_("onChange","change",null,i,s),t.push({event:i,listeners:n}))}var Ph=null,Xh=null;function pW(t){dP(t,0)}function D0(t){var n=Xc(t);if(AO(n))return t}function gW(t,n){if(t==="change")return n}var eP=!1;if(ls){var zw;if(ls){var jw="oninput"in document;if(!jw){var pN=document.createElement("div");pN.setAttribute("oninput","return;"),jw=typeof pN.oninput=="function"}zw=jw}else zw=!1;eP=zw&&(!document.documentMode||9<document.documentMode)}function gN(){Ph&&(Ph.detachEvent("onpropertychange",tP),Xh=Ph=null)}function tP(t){if(t.propertyName==="value"&&D0(Xh)){var n=[];XO(n,Xh,t,I_(t)),PO(pW,n)}}function mW(t,n,i){t==="focusin"?(gN(),Ph=n,Xh=i,Ph.attachEvent("onpropertychange",tP)):t==="focusout"&&gN()}function bW(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return D0(Xh)}function kW(t,n){if(t==="click")return D0(n)}function vW(t,n){if(t==="input"||t==="change")return D0(n)}function wW(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wi=typeof Object.is=="function"?Object.is:wW;function ef(t,n){if(Wi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var d=i[s];if(!$y.call(n,d)||!Wi(t[d],n[d]))return!1}return!0}function mN(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bN(t,n){var i=mN(t);t=0;for(var s;i;){if(i.nodeType===3){if(s=t+i.textContent.length,t<=n&&s>=n)return{node:i,offset:n-t};t=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=mN(i)}}function nP(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?nP(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rP(){for(var t=window,n=Em();n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Em(t.document)}return n}function $_(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function yW(t){var n=rP(),i=t.focusedElem,s=t.selectionRange;if(n!==i&&i&&i.ownerDocument&&nP(i.ownerDocument.documentElement,i)){if(s!==null&&$_(i)){if(n=s.start,t=s.end,t===void 0&&(t=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(t,i.value.length);else if(t=(n=i.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var d=i.textContent.length,h=Math.min(s.start,d);s=s.end===void 0?h:Math.min(s.end,d),!t.extend&&h>s&&(d=s,s=h,h=d),d=bN(i,h);var p=bN(i,s);d&&p&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==p.node||t.focusOffset!==p.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),t.removeAllRanges(),h>s?(t.addRange(n),t.extend(p.node,p.offset)):(n.setEnd(p.node,p.offset),t.addRange(n)))}}for(n=[],t=i;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)t=n[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _W=ls&&"documentMode"in document&&11>=document.documentMode,Zc=null,s1=null,Bh=null,a1=!1;function kN(t,n,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;a1||Zc==null||Zc!==Em(s)||(s=Zc,"selectionStart"in s&&$_(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Bh&&ef(Bh,s)||(Bh=s,s=Om(s1,"onSelect"),0<s.length&&(n=new z_("onSelect","select",null,n,i),t.push({event:n,listeners:s}),n.target=Zc)))}function Pg(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var Jc={animationend:Pg("Animation","AnimationEnd"),animationiteration:Pg("Animation","AnimationIteration"),animationstart:Pg("Animation","AnimationStart"),transitionend:Pg("Transition","TransitionEnd")},Fw={},iP={};ls&&(iP=document.createElement("div").style,"AnimationEvent"in window||(delete Jc.animationend.animation,delete Jc.animationiteration.animation,delete Jc.animationstart.animation),"TransitionEvent"in window||delete Jc.transitionend.transition);function T0(t){if(Fw[t])return Fw[t];if(!Jc[t])return t;var n=Jc[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in iP)return Fw[t]=n[i];return t}var oP=T0("animationend"),sP=T0("animationiteration"),aP=T0("animationstart"),lP=T0("transitionend"),cP=new Map,vN="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ca(t,n){cP.set(t,n),Ml(n,[t])}for(var $w=0;$w<vN.length;$w++){var Vw=vN[$w],AW=Vw.toLowerCase(),CW=Vw[0].toUpperCase()+Vw.slice(1);Ca(AW,"on"+CW)}Ca(oP,"onAnimationEnd");Ca(sP,"onAnimationIteration");Ca(aP,"onAnimationStart");Ca("dblclick","onDoubleClick");Ca("focusin","onFocus");Ca("focusout","onBlur");Ca(lP,"onTransitionEnd");kd("onMouseEnter",["mouseout","mouseover"]);kd("onMouseLeave",["mouseout","mouseover"]);kd("onPointerEnter",["pointerout","pointerover"]);kd("onPointerLeave",["pointerout","pointerover"]);Ml("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ml("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ml("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ml("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ml("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ah="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xW=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ah));function wN(t,n,i){var s=t.type||"unknown-event";t.currentTarget=i,Aq(s,n,void 0,t),t.currentTarget=null}function dP(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var s=t[i],d=s.event;s=s.listeners;e:{var h=void 0;if(n)for(var p=s.length-1;0<=p;p--){var b=s[p],m=b.instance,w=b.currentTarget;if(b=b.listener,m!==h&&d.isPropagationStopped())break e;wN(d,b,w),h=m}else for(p=0;p<s.length;p++){if(b=s[p],m=b.instance,w=b.currentTarget,b=b.listener,m!==h&&d.isPropagationStopped())break e;wN(d,b,w),h=m}}}if(Dm)throw t=n1,Dm=!1,n1=null,t}function Vt(t,n){var i=n[h1];i===void 0&&(i=n[h1]=new Set);var s=t+"__bubble";i.has(s)||(uP(n,t,2,!1),i.add(s))}function Uw(t,n,i){var s=0;n&&(s|=4),uP(i,t,s,n)}var Bg="_reactListening"+Math.random().toString(36).slice(2);function tf(t){if(!t[Bg]){t[Bg]=!0,kO.forEach(function(i){i!=="selectionchange"&&(xW.has(i)||Uw(i,!1,t),Uw(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bg]||(n[Bg]=!0,Uw("selectionchange",!1,n))}}function uP(t,n,i,s){switch(YO(n)){case 1:var d=jq;break;case 4:d=Fq;break;default:d=R_}i=d.bind(null,n,i,t),d=void 0,!t1||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),s?d!==void 0?t.addEventListener(n,i,{capture:!0,passive:d}):t.addEventListener(n,i,!0):d!==void 0?t.addEventListener(n,i,{passive:d}):t.addEventListener(n,i,!1)}function Hw(t,n,i,s,d){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var p=s.tag;if(p===3||p===4){var b=s.stateNode.containerInfo;if(b===d||b.nodeType===8&&b.parentNode===d)break;if(p===4)for(p=s.return;p!==null;){var m=p.tag;if((m===3||m===4)&&(m=p.stateNode.containerInfo,m===d||m.nodeType===8&&m.parentNode===d))return;p=p.return}for(;b!==null;){if(p=pl(b),p===null)return;if(m=p.tag,m===5||m===6){s=h=p;continue e}b=b.parentNode}}s=s.return}PO(function(){var w=h,x=I_(i),y=[];e:{var _=cP.get(t);if(_!==void 0){var E=z_,D=t;switch(t){case"keypress":if(am(i)===0)break e;case"keydown":case"keyup":E=tW;break;case"focusin":D="focus",E=Lw;break;case"focusout":D="blur",E=Lw;break;case"beforeblur":case"afterblur":E=Lw;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=lN;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Uq;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=iW;break;case oP:case sP:case aP:E=Wq;break;case lP:E=sW;break;case"scroll":E=$q;break;case"wheel":E=lW;break;case"copy":case"cut":case"paste":E=Yq;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=dN}var T=(n&4)!==0,O=!T&&t==="scroll",I=T?_!==null?_+"Capture":null:_;T=[];for(var M=w,B;M!==null;){B=M;var z=B.stateNode;if(B.tag===5&&z!==null&&(B=z,I!==null&&(z=Kh(M,I),z!=null&&T.push(nf(M,z,B)))),O)break;M=M.return}0<T.length&&(_=new E(_,D,null,i,x),y.push({event:_,listeners:T}))}}if((n&7)===0){e:{if(_=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",_&&i!==Xy&&(D=i.relatedTarget||i.fromElement)&&(pl(D)||D[cs]))break e;if((E||_)&&(_=x.window===x?x:(_=x.ownerDocument)?_.defaultView||_.parentWindow:window,E?(D=i.relatedTarget||i.toElement,E=w,D=D?pl(D):null,D!==null&&(O=Nl(D),D!==O||D.tag!==5&&D.tag!==6)&&(D=null)):(E=null,D=w),E!==D)){if(T=lN,z="onMouseLeave",I="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(T=dN,z="onPointerLeave",I="onPointerEnter",M="pointer"),O=E==null?_:Xc(E),B=D==null?_:Xc(D),_=new T(z,M+"leave",E,i,x),_.target=O,_.relatedTarget=B,z=null,pl(x)===w&&(T=new T(I,M+"enter",D,i,x),T.target=B,T.relatedTarget=O,z=T),O=z,E&&D)t:{for(T=E,I=D,M=0,B=T;B;B=Cc(B))M++;for(B=0,z=I;z;z=Cc(z))B++;for(;0<M-B;)T=Cc(T),M--;for(;0<B-M;)I=Cc(I),B--;for(;M--;){if(T===I||I!==null&&T===I.alternate)break t;T=Cc(T),I=Cc(I)}T=null}else T=null;E!==null&&yN(y,_,E,T,!1),D!==null&&O!==null&&yN(y,O,D,T,!0)}}e:{if(_=w?Xc(w):window,E=_.nodeName&&_.nodeName.toLowerCase(),E==="select"||E==="input"&&_.type==="file")var U=gW;else if(fN(_))if(eP)U=vW;else{U=bW;var q=mW}else(E=_.nodeName)&&E.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(U=kW);if(U&&(U=U(t,w))){XO(y,U,i,x);break e}q&&q(t,_,w),t==="focusout"&&(q=_._wrapperState)&&q.controlled&&_.type==="number"&&Yy(_,"number",_.value)}switch(q=w?Xc(w):window,t){case"focusin":(fN(q)||q.contentEditable==="true")&&(Zc=q,s1=w,Bh=null);break;case"focusout":Bh=s1=Zc=null;break;case"mousedown":a1=!0;break;case"contextmenu":case"mouseup":case"dragend":a1=!1,kN(y,i,x);break;case"selectionchange":if(_W)break;case"keydown":case"keyup":kN(y,i,x)}var H;if(F_)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Qc?ZO(t,i)&&(P="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(P="onCompositionStart");P&&(QO&&i.locale!=="ko"&&(Qc||P!=="onCompositionStart"?P==="onCompositionEnd"&&Qc&&(H=KO()):(Zs=x,L_="value"in Zs?Zs.value:Zs.textContent,Qc=!0)),q=Om(w,P),0<q.length&&(P=new cN(P,t,null,i,x),y.push({event:P,listeners:q}),H?P.data=H:(H=JO(i),H!==null&&(P.data=H)))),(H=dW?uW(t,i):hW(t,i))&&(w=Om(w,"onBeforeInput"),0<w.length&&(x=new cN("onBeforeInput","beforeinput",null,i,x),y.push({event:x,listeners:w}),x.data=H))}dP(y,n)})}function nf(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Om(t,n){for(var i=n+"Capture",s=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=Kh(t,i),h!=null&&s.unshift(nf(t,h,d)),h=Kh(t,n),h!=null&&s.push(nf(t,h,d))),t=t.return}return s}function Cc(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yN(t,n,i,s,d){for(var h=n._reactName,p=[];i!==null&&i!==s;){var b=i,m=b.alternate,w=b.stateNode;if(m!==null&&m===s)break;b.tag===5&&w!==null&&(b=w,d?(m=Kh(i,h),m!=null&&p.unshift(nf(i,m,b))):d||(m=Kh(i,h),m!=null&&p.push(nf(i,m,b)))),i=i.return}p.length!==0&&t.push({event:n,listeners:p})}var EW=/\r\n?/g,SW=/\u0000|\uFFFD/g;function _N(t){return(typeof t=="string"?t:""+t).replace(EW,`
`).replace(SW,"")}function Rg(t,n,i){if(n=_N(n),_N(t)!==n&&i)throw Error(ke(425))}function Pm(){}var l1=null,c1=null;function d1(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var u1=typeof setTimeout=="function"?setTimeout:void 0,DW=typeof clearTimeout=="function"?clearTimeout:void 0,AN=typeof Promise=="function"?Promise:void 0,TW=typeof queueMicrotask=="function"?queueMicrotask:typeof AN<"u"?function(t){return AN.resolve(null).then(t).catch(MW)}:u1;function MW(t){setTimeout(function(){throw t})}function qw(t,n){var i=n,s=0;do{var d=i.nextSibling;if(t.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(s===0){t.removeChild(d),Jh(n);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=d}while(i);Jh(n)}function aa(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function CN(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return t;n--}else i==="/$"&&n++}t=t.previousSibling}return null}var Pd=Math.random().toString(36).slice(2),bo="__reactFiber$"+Pd,rf="__reactProps$"+Pd,cs="__reactContainer$"+Pd,h1="__reactEvents$"+Pd,NW="__reactListeners$"+Pd,IW="__reactHandles$"+Pd;function pl(t){var n=t[bo];if(n)return n;for(var i=t.parentNode;i;){if(n=i[cs]||i[bo]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=CN(t);t!==null;){if(i=t[bo])return i;t=CN(t)}return n}t=i,i=t.parentNode}return null}function Of(t){return t=t[bo]||t[cs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xc(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ke(33))}function M0(t){return t[rf]||null}var f1=[],ed=-1;function xa(t){return{current:t}}function Gt(t){0>ed||(t.current=f1[ed],f1[ed]=null,ed--)}function $t(t,n){ed++,f1[ed]=t.current,t.current=n}var ka={},cr=xa(ka),Dr=xa(!1),Cl=ka;function vd(t,n){var i=t.type.contextTypes;if(!i)return ka;var s=t.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in i)d[h]=n[h];return s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=d),d}function Tr(t){return t=t.childContextTypes,t!=null}function Bm(){Gt(Dr),Gt(cr)}function xN(t,n,i){if(cr.current!==ka)throw Error(ke(168));$t(cr,n),$t(Dr,i)}function hP(t,n,i){var s=t.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var d in s)if(!(d in n))throw Error(ke(108,mq(t)||"Unknown",d));return sn({},i,s)}function Rm(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ka,Cl=cr.current,$t(cr,t),$t(Dr,Dr.current),!0}function EN(t,n,i){var s=t.stateNode;if(!s)throw Error(ke(169));i?(t=hP(t,n,Cl),s.__reactInternalMemoizedMergedChildContext=t,Gt(Dr),Gt(cr),$t(cr,t)):Gt(Dr),$t(Dr,i)}var Zo=null,N0=!1,Ww=!1;function fP(t){Zo===null?Zo=[t]:Zo.push(t)}function OW(t){N0=!0,fP(t)}function Ea(){if(!Ww&&Zo!==null){Ww=!0;var t=0,n=St;try{var i=Zo;for(St=1;t<i.length;t++){var s=i[t];do s=s(!0);while(s!==null)}Zo=null,N0=!1}catch(d){throw Zo!==null&&(Zo=Zo.slice(t+1)),zO(O_,Ea),d}finally{St=n,Ww=!1}}return null}var td=[],nd=0,Lm=null,zm=0,di=[],ui=0,xl=null,Xo=1,es="";function sl(t,n){td[nd++]=zm,td[nd++]=Lm,Lm=t,zm=n}function pP(t,n,i){di[ui++]=Xo,di[ui++]=es,di[ui++]=xl,xl=t;var s=Xo;t=es;var d=32-Hi(s)-1;s&=~(1<<d),i+=1;var h=32-Hi(n)+d;if(30<h){var p=d-d%5;h=(s&(1<<p)-1).toString(32),s>>=p,d-=p,Xo=1<<32-Hi(n)+d|i<<d|s,es=h+t}else Xo=1<<h|i<<d|s,es=t}function V_(t){t.return!==null&&(sl(t,1),pP(t,1,0))}function U_(t){for(;t===Lm;)Lm=td[--nd],td[nd]=null,zm=td[--nd],td[nd]=null;for(;t===xl;)xl=di[--ui],di[ui]=null,es=di[--ui],di[ui]=null,Xo=di[--ui],di[ui]=null}var Yr=null,qr=null,Xt=!1,Fi=null;function gP(t,n){var i=gi(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=t,n=t.deletions,n===null?(t.deletions=[i],t.flags|=16):n.push(i)}function SN(t,n){switch(t.tag){case 5:var i=t.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Yr=t,qr=aa(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Yr=t,qr=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=xl!==null?{id:Xo,overflow:es}:null,t.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=gi(18,null,null,0),i.stateNode=n,i.return=t,t.child=i,Yr=t,qr=null,!0):!1;default:return!1}}function p1(t){return(t.mode&1)!==0&&(t.flags&128)===0}function g1(t){if(Xt){var n=qr;if(n){var i=n;if(!SN(t,n)){if(p1(t))throw Error(ke(418));n=aa(i.nextSibling);var s=Yr;n&&SN(t,n)?gP(s,i):(t.flags=t.flags&-4097|2,Xt=!1,Yr=t)}}else{if(p1(t))throw Error(ke(418));t.flags=t.flags&-4097|2,Xt=!1,Yr=t}}}function DN(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yr=t}function Lg(t){if(t!==Yr)return!1;if(!Xt)return DN(t),Xt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!d1(t.type,t.memoizedProps)),n&&(n=qr)){if(p1(t))throw mP(),Error(ke(418));for(;n;)gP(t,n),n=aa(n.nextSibling)}if(DN(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ke(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(n===0){qr=aa(t.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}t=t.nextSibling}qr=null}}else qr=Yr?aa(t.stateNode.nextSibling):null;return!0}function mP(){for(var t=qr;t;)t=aa(t.nextSibling)}function wd(){qr=Yr=null,Xt=!1}function H_(t){Fi===null?Fi=[t]:Fi.push(t)}var PW=fs.ReactCurrentBatchConfig;function zi(t,n){if(t&&t.defaultProps){n=sn({},n),t=t.defaultProps;for(var i in t)n[i]===void 0&&(n[i]=t[i]);return n}return n}var jm=xa(null),Fm=null,rd=null,q_=null;function W_(){q_=rd=Fm=null}function G_(t){var n=jm.current;Gt(jm),t._currentValue=n}function m1(t,n,i){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===i)break;t=t.return}}function hd(t,n){Fm=t,q_=rd=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Sr=!0),t.firstContext=null)}function ki(t){var n=t._currentValue;if(q_!==t)if(t={context:t,memoizedValue:n,next:null},rd===null){if(Fm===null)throw Error(ke(308));rd=t,Fm.dependencies={lanes:0,firstContext:t}}else rd=rd.next=t;return n}var gl=null;function Y_(t){gl===null?gl=[t]:gl.push(t)}function bP(t,n,i,s){var d=n.interleaved;return d===null?(i.next=i,Y_(n)):(i.next=d.next,d.next=i),n.interleaved=i,ds(t,s)}function ds(t,n){t.lanes|=n;var i=t.alternate;for(i!==null&&(i.lanes|=n),i=t,t=t.return;t!==null;)t.childLanes|=n,i=t.alternate,i!==null&&(i.childLanes|=n),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Gs=!1;function K_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kP(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function is(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function la(t,n,i){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(mt&2)!==0){var d=s.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),s.pending=n,ds(t,i)}return d=s.interleaved,d===null?(n.next=n,Y_(s)):(n.next=d.next,d.next=n),s.interleaved=n,ds(t,i)}function lm(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,P_(t,i)}}function TN(t,n){var i=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var d=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var p={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?d=h=p:h=h.next=p,i=i.next}while(i!==null);h===null?d=h=n:h=h.next=n}else d=h=n;i={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:s.shared,effects:s.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}function $m(t,n,i,s){var d=t.updateQueue;Gs=!1;var h=d.firstBaseUpdate,p=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var m=b,w=m.next;m.next=null,p===null?h=w:p.next=w,p=m;var x=t.alternate;x!==null&&(x=x.updateQueue,b=x.lastBaseUpdate,b!==p&&(b===null?x.firstBaseUpdate=w:b.next=w,x.lastBaseUpdate=m))}if(h!==null){var y=d.baseState;p=0,x=w=m=null,b=h;do{var _=b.lane,E=b.eventTime;if((s&_)===_){x!==null&&(x=x.next={eventTime:E,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var D=t,T=b;switch(_=n,E=i,T.tag){case 1:if(D=T.payload,typeof D=="function"){y=D.call(E,y,_);break e}y=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=T.payload,_=typeof D=="function"?D.call(E,y,_):D,_==null)break e;y=sn({},y,_);break e;case 2:Gs=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,_=d.effects,_===null?d.effects=[b]:_.push(b))}else E={eventTime:E,lane:_,tag:b.tag,payload:b.payload,callback:b.callback,next:null},x===null?(w=x=E,m=y):x=x.next=E,p|=_;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;_=b,b=_.next,_.next=null,d.lastBaseUpdate=_,d.shared.pending=null}}while(1);if(x===null&&(m=y),d.baseState=m,d.firstBaseUpdate=w,d.lastBaseUpdate=x,n=d.shared.interleaved,n!==null){d=n;do p|=d.lane,d=d.next;while(d!==n)}else h===null&&(d.shared.lanes=0);Sl|=p,t.lanes=p,t.memoizedState=y}}function MN(t,n,i){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var s=t[n],d=s.callback;if(d!==null){if(s.callback=null,s=i,typeof d!="function")throw Error(ke(191,d));d.call(s)}}}var vP=new bO.Component().refs;function b1(t,n,i,s){n=t.memoizedState,i=i(s,n),i=i==null?n:sn({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var I0={isMounted:function(t){return(t=t._reactInternals)?Nl(t)===t:!1},enqueueSetState:function(t,n,i){t=t._reactInternals;var s=gr(),d=da(t),h=is(s,d);h.payload=n,i!=null&&(h.callback=i),n=la(t,h,d),n!==null&&(qi(n,t,d,s),lm(n,t,d))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var s=gr(),d=da(t),h=is(s,d);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=la(t,h,d),n!==null&&(qi(n,t,d,s),lm(n,t,d))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=gr(),s=da(t),d=is(i,s);d.tag=2,n!=null&&(d.callback=n),n=la(t,d,s),n!==null&&(qi(n,t,s,i),lm(n,t,s))}};function NN(t,n,i,s,d,h,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,h,p):n.prototype&&n.prototype.isPureReactComponent?!ef(i,s)||!ef(d,h):!0}function wP(t,n,i){var s=!1,d=ka,h=n.contextType;return typeof h=="object"&&h!==null?h=ki(h):(d=Tr(n)?Cl:cr.current,s=n.contextTypes,h=(s=s!=null)?vd(t,d):ka),n=new n(i,h),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=I0,t.stateNode=n,n._reactInternals=t,s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),n}function IN(t,n,i,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,s),n.state!==t&&I0.enqueueReplaceState(n,n.state,null)}function k1(t,n,i,s){var d=t.stateNode;d.props=i,d.state=t.memoizedState,d.refs=vP,K_(t);var h=n.contextType;typeof h=="object"&&h!==null?d.context=ki(h):(h=Tr(n)?Cl:cr.current,d.context=vd(t,h)),d.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(b1(t,n,h,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&I0.enqueueReplaceState(d,d.state,null),$m(t,i,d,s),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function lh(t,n,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(ke(309));var s=i.stateNode}if(!s)throw Error(ke(147,t));var d=s,h=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(p){var b=d.refs;b===vP&&(b=d.refs={}),p===null?delete b[h]:b[h]=p},n._stringRef=h,n)}if(typeof t!="string")throw Error(ke(284));if(!i._owner)throw Error(ke(290,t))}return t}function zg(t,n){throw t=Object.prototype.toString.call(n),Error(ke(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function ON(t){var n=t._init;return n(t._payload)}function yP(t){function n(I,M){if(t){var B=I.deletions;B===null?(I.deletions=[M],I.flags|=16):B.push(M)}}function i(I,M){if(!t)return null;for(;M!==null;)n(I,M),M=M.sibling;return null}function s(I,M){for(I=new Map;M!==null;)M.key!==null?I.set(M.key,M):I.set(M.index,M),M=M.sibling;return I}function d(I,M){return I=ua(I,M),I.index=0,I.sibling=null,I}function h(I,M,B){return I.index=B,t?(B=I.alternate,B!==null?(B=B.index,B<M?(I.flags|=2,M):B):(I.flags|=2,M)):(I.flags|=1048576,M)}function p(I){return t&&I.alternate===null&&(I.flags|=2),I}function b(I,M,B,z){return M===null||M.tag!==6?(M=Xw(B,I.mode,z),M.return=I,M):(M=d(M,B),M.return=I,M)}function m(I,M,B,z){var U=B.type;return U===Kc?x(I,M,B.props.children,z,B.key):M!==null&&(M.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ws&&ON(U)===M.type)?(z=d(M,B.props),z.ref=lh(I,M,B),z.return=I,z):(z=pm(B.type,B.key,B.props,null,I.mode,z),z.ref=lh(I,M,B),z.return=I,z)}function w(I,M,B,z){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=ey(B,I.mode,z),M.return=I,M):(M=d(M,B.children||[]),M.return=I,M)}function x(I,M,B,z,U){return M===null||M.tag!==7?(M=yl(B,I.mode,z,U),M.return=I,M):(M=d(M,B),M.return=I,M)}function y(I,M,B){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Xw(""+M,I.mode,B),M.return=I,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Sg:return B=pm(M.type,M.key,M.props,null,I.mode,B),B.ref=lh(I,null,M),B.return=I,B;case Yc:return M=ey(M,I.mode,B),M.return=I,M;case Ws:var z=M._init;return y(I,z(M._payload),B)}if(yh(M)||rh(M))return M=yl(M,I.mode,B,null),M.return=I,M;zg(I,M)}return null}function _(I,M,B,z){var U=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return U!==null?null:b(I,M,""+B,z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Sg:return B.key===U?m(I,M,B,z):null;case Yc:return B.key===U?w(I,M,B,z):null;case Ws:return U=B._init,_(I,M,U(B._payload),z)}if(yh(B)||rh(B))return U!==null?null:x(I,M,B,z,null);zg(I,B)}return null}function E(I,M,B,z,U){if(typeof z=="string"&&z!==""||typeof z=="number")return I=I.get(B)||null,b(M,I,""+z,U);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Sg:return I=I.get(z.key===null?B:z.key)||null,m(M,I,z,U);case Yc:return I=I.get(z.key===null?B:z.key)||null,w(M,I,z,U);case Ws:var q=z._init;return E(I,M,B,q(z._payload),U)}if(yh(z)||rh(z))return I=I.get(B)||null,x(M,I,z,U,null);zg(M,z)}return null}function D(I,M,B,z){for(var U=null,q=null,H=M,P=M=0,Y=null;H!==null&&P<B.length;P++){H.index>P?(Y=H,H=null):Y=H.sibling;var K=_(I,H,B[P],z);if(K===null){H===null&&(H=Y);break}t&&H&&K.alternate===null&&n(I,H),M=h(K,M,P),q===null?U=K:q.sibling=K,q=K,H=Y}if(P===B.length)return i(I,H),Xt&&sl(I,P),U;if(H===null){for(;P<B.length;P++)H=y(I,B[P],z),H!==null&&(M=h(H,M,P),q===null?U=H:q.sibling=H,q=H);return Xt&&sl(I,P),U}for(H=s(I,H);P<B.length;P++)Y=E(H,I,P,B[P],z),Y!==null&&(t&&Y.alternate!==null&&H.delete(Y.key===null?P:Y.key),M=h(Y,M,P),q===null?U=Y:q.sibling=Y,q=Y);return t&&H.forEach(function(ee){return n(I,ee)}),Xt&&sl(I,P),U}function T(I,M,B,z){var U=rh(B);if(typeof U!="function")throw Error(ke(150));if(B=U.call(B),B==null)throw Error(ke(151));for(var q=U=null,H=M,P=M=0,Y=null,K=B.next();H!==null&&!K.done;P++,K=B.next()){H.index>P?(Y=H,H=null):Y=H.sibling;var ee=_(I,H,K.value,z);if(ee===null){H===null&&(H=Y);break}t&&H&&ee.alternate===null&&n(I,H),M=h(ee,M,P),q===null?U=ee:q.sibling=ee,q=ee,H=Y}if(K.done)return i(I,H),Xt&&sl(I,P),U;if(H===null){for(;!K.done;P++,K=B.next())K=y(I,K.value,z),K!==null&&(M=h(K,M,P),q===null?U=K:q.sibling=K,q=K);return Xt&&sl(I,P),U}for(H=s(I,H);!K.done;P++,K=B.next())K=E(H,I,P,K.value,z),K!==null&&(t&&K.alternate!==null&&H.delete(K.key===null?P:K.key),M=h(K,M,P),q===null?U=K:q.sibling=K,q=K);return t&&H.forEach(function(ne){return n(I,ne)}),Xt&&sl(I,P),U}function O(I,M,B,z){if(typeof B=="object"&&B!==null&&B.type===Kc&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Sg:e:{for(var U=B.key,q=M;q!==null;){if(q.key===U){if(U=B.type,U===Kc){if(q.tag===7){i(I,q.sibling),M=d(q,B.props.children),M.return=I,I=M;break e}}else if(q.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ws&&ON(U)===q.type){i(I,q.sibling),M=d(q,B.props),M.ref=lh(I,q,B),M.return=I,I=M;break e}i(I,q);break}else n(I,q);q=q.sibling}B.type===Kc?(M=yl(B.props.children,I.mode,z,B.key),M.return=I,I=M):(z=pm(B.type,B.key,B.props,null,I.mode,z),z.ref=lh(I,M,B),z.return=I,I=z)}return p(I);case Yc:e:{for(q=B.key;M!==null;){if(M.key===q)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){i(I,M.sibling),M=d(M,B.children||[]),M.return=I,I=M;break e}else{i(I,M);break}else n(I,M);M=M.sibling}M=ey(B,I.mode,z),M.return=I,I=M}return p(I);case Ws:return q=B._init,O(I,M,q(B._payload),z)}if(yh(B))return D(I,M,B,z);if(rh(B))return T(I,M,B,z);zg(I,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,M!==null&&M.tag===6?(i(I,M.sibling),M=d(M,B),M.return=I,I=M):(i(I,M),M=Xw(B,I.mode,z),M.return=I,I=M),p(I)):i(I,M)}return O}var yd=yP(!0),_P=yP(!1),Pf={},_o=xa(Pf),of=xa(Pf),sf=xa(Pf);function ml(t){if(t===Pf)throw Error(ke(174));return t}function Q_(t,n){switch($t(sf,n),$t(of,t),$t(_o,Pf),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qy(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Qy(n,t)}Gt(_o),$t(_o,n)}function _d(){Gt(_o),Gt(of),Gt(sf)}function AP(t){ml(sf.current);var n=ml(_o.current),i=Qy(n,t.type);n!==i&&($t(of,t),$t(_o,i))}function Z_(t){of.current===t&&(Gt(_o),Gt(of))}var nn=xa(0);function Vm(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gw=[];function J_(){for(var t=0;t<Gw.length;t++)Gw[t]._workInProgressVersionPrimary=null;Gw.length=0}var cm=fs.ReactCurrentDispatcher,Yw=fs.ReactCurrentBatchConfig,El=0,rn=null,Nn=null,$n=null,Um=!1,Rh=!1,af=0,BW=0;function rr(){throw Error(ke(321))}function X_(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!Wi(t[i],n[i]))return!1;return!0}function eA(t,n,i,s,d,h){if(El=h,rn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,cm.current=t===null||t.memoizedState===null?jW:FW,t=i(s,d),Rh){h=0;do{if(Rh=!1,af=0,25<=h)throw Error(ke(301));h+=1,$n=Nn=null,n.updateQueue=null,cm.current=$W,t=i(s,d)}while(Rh)}if(cm.current=Hm,n=Nn!==null&&Nn.next!==null,El=0,$n=Nn=rn=null,Um=!1,n)throw Error(ke(300));return t}function tA(){var t=af!==0;return af=0,t}function mo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?rn.memoizedState=$n=t:$n=$n.next=t,$n}function vi(){if(Nn===null){var t=rn.alternate;t=t!==null?t.memoizedState:null}else t=Nn.next;var n=$n===null?rn.memoizedState:$n.next;if(n!==null)$n=n,Nn=t;else{if(t===null)throw Error(ke(310));Nn=t,t={memoizedState:Nn.memoizedState,baseState:Nn.baseState,baseQueue:Nn.baseQueue,queue:Nn.queue,next:null},$n===null?rn.memoizedState=$n=t:$n=$n.next=t}return $n}function lf(t,n){return typeof n=="function"?n(t):n}function Kw(t){var n=vi(),i=n.queue;if(i===null)throw Error(ke(311));i.lastRenderedReducer=t;var s=Nn,d=s.baseQueue,h=i.pending;if(h!==null){if(d!==null){var p=d.next;d.next=h.next,h.next=p}s.baseQueue=d=h,i.pending=null}if(d!==null){h=d.next,s=s.baseState;var b=p=null,m=null,w=h;do{var x=w.lane;if((El&x)===x)m!==null&&(m=m.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),s=w.hasEagerState?w.eagerState:t(s,w.action);else{var y={lane:x,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};m===null?(b=m=y,p=s):m=m.next=y,rn.lanes|=x,Sl|=x}w=w.next}while(w!==null&&w!==h);m===null?p=s:m.next=b,Wi(s,n.memoizedState)||(Sr=!0),n.memoizedState=s,n.baseState=p,n.baseQueue=m,i.lastRenderedState=s}if(t=i.interleaved,t!==null){d=t;do h=d.lane,rn.lanes|=h,Sl|=h,d=d.next;while(d!==t)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Qw(t){var n=vi(),i=n.queue;if(i===null)throw Error(ke(311));i.lastRenderedReducer=t;var s=i.dispatch,d=i.pending,h=n.memoizedState;if(d!==null){i.pending=null;var p=d=d.next;do h=t(h,p.action),p=p.next;while(p!==d);Wi(h,n.memoizedState)||(Sr=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),i.lastRenderedState=h}return[h,s]}function CP(){}function xP(t,n){var i=rn,s=vi(),d=n(),h=!Wi(s.memoizedState,d);if(h&&(s.memoizedState=d,Sr=!0),s=s.queue,nA(DP.bind(null,i,s,t),[t]),s.getSnapshot!==n||h||$n!==null&&$n.memoizedState.tag&1){if(i.flags|=2048,cf(9,SP.bind(null,i,s,d,n),void 0,null),Vn===null)throw Error(ke(349));(El&30)!==0||EP(i,n,d)}return d}function EP(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function SP(t,n,i,s){n.value=i,n.getSnapshot=s,TP(n)&&MP(t)}function DP(t,n,i){return i(function(){TP(n)&&MP(t)})}function TP(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!Wi(t,i)}catch{return!0}}function MP(t){var n=ds(t,1);n!==null&&qi(n,t,1,-1)}function PN(t){var n=mo();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},n.queue=t,t=t.dispatch=zW.bind(null,rn,t),[n.memoizedState,t]}function cf(t,n,i,s){return t={tag:t,create:n,destroy:i,deps:s,next:null},n=rn.updateQueue,n===null?(n={lastEffect:null,stores:null},rn.updateQueue=n,n.lastEffect=t.next=t):(i=n.lastEffect,i===null?n.lastEffect=t.next=t:(s=i.next,i.next=t,t.next=s,n.lastEffect=t)),t}function NP(){return vi().memoizedState}function dm(t,n,i,s){var d=mo();rn.flags|=t,d.memoizedState=cf(1|n,i,void 0,s===void 0?null:s)}function O0(t,n,i,s){var d=vi();s=s===void 0?null:s;var h=void 0;if(Nn!==null){var p=Nn.memoizedState;if(h=p.destroy,s!==null&&X_(s,p.deps)){d.memoizedState=cf(n,i,h,s);return}}rn.flags|=t,d.memoizedState=cf(1|n,i,h,s)}function BN(t,n){return dm(8390656,8,t,n)}function nA(t,n){return O0(2048,8,t,n)}function IP(t,n){return O0(4,2,t,n)}function OP(t,n){return O0(4,4,t,n)}function PP(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function BP(t,n,i){return i=i!=null?i.concat([t]):null,O0(4,4,PP.bind(null,n,t),i)}function rA(){}function RP(t,n){var i=vi();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&X_(n,s[1])?s[0]:(i.memoizedState=[t,n],t)}function LP(t,n){var i=vi();n=n===void 0?null:n;var s=i.memoizedState;return s!==null&&n!==null&&X_(n,s[1])?s[0]:(t=t(),i.memoizedState=[t,n],t)}function zP(t,n,i){return(El&21)===0?(t.baseState&&(t.baseState=!1,Sr=!0),t.memoizedState=i):(Wi(i,n)||(i=$O(),rn.lanes|=i,Sl|=i,t.baseState=!0),n)}function RW(t,n){var i=St;St=i!==0&&4>i?i:4,t(!0);var s=Yw.transition;Yw.transition={};try{t(!1),n()}finally{St=i,Yw.transition=s}}function jP(){return vi().memoizedState}function LW(t,n,i){var s=da(t);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},FP(t))$P(n,i);else if(i=bP(t,n,i,s),i!==null){var d=gr();qi(i,t,s,d),VP(i,n,s)}}function zW(t,n,i){var s=da(t),d={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(FP(t))$P(n,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var p=n.lastRenderedState,b=h(p,i);if(d.hasEagerState=!0,d.eagerState=b,Wi(b,p)){var m=n.interleaved;m===null?(d.next=d,Y_(n)):(d.next=m.next,m.next=d),n.interleaved=d;return}}catch{}finally{}i=bP(t,n,d,s),i!==null&&(d=gr(),qi(i,t,s,d),VP(i,n,s))}}function FP(t){var n=t.alternate;return t===rn||n!==null&&n===rn}function $P(t,n){Rh=Um=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function VP(t,n,i){if((i&4194240)!==0){var s=n.lanes;s&=t.pendingLanes,i|=s,n.lanes=i,P_(t,i)}}var Hm={readContext:ki,useCallback:rr,useContext:rr,useEffect:rr,useImperativeHandle:rr,useInsertionEffect:rr,useLayoutEffect:rr,useMemo:rr,useReducer:rr,useRef:rr,useState:rr,useDebugValue:rr,useDeferredValue:rr,useTransition:rr,useMutableSource:rr,useSyncExternalStore:rr,useId:rr,unstable_isNewReconciler:!1},jW={readContext:ki,useCallback:function(t,n){return mo().memoizedState=[t,n===void 0?null:n],t},useContext:ki,useEffect:BN,useImperativeHandle:function(t,n,i){return i=i!=null?i.concat([t]):null,dm(4194308,4,PP.bind(null,n,t),i)},useLayoutEffect:function(t,n){return dm(4194308,4,t,n)},useInsertionEffect:function(t,n){return dm(4,2,t,n)},useMemo:function(t,n){var i=mo();return n=n===void 0?null:n,t=t(),i.memoizedState=[t,n],t},useReducer:function(t,n,i){var s=mo();return n=i!==void 0?i(n):n,s.memoizedState=s.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},s.queue=t,t=t.dispatch=LW.bind(null,rn,t),[s.memoizedState,t]},useRef:function(t){var n=mo();return t={current:t},n.memoizedState=t},useState:PN,useDebugValue:rA,useDeferredValue:function(t){return mo().memoizedState=t},useTransition:function(){var t=PN(!1),n=t[0];return t=RW.bind(null,t[1]),mo().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,i){var s=rn,d=mo();if(Xt){if(i===void 0)throw Error(ke(407));i=i()}else{if(i=n(),Vn===null)throw Error(ke(349));(El&30)!==0||EP(s,n,i)}d.memoizedState=i;var h={value:i,getSnapshot:n};return d.queue=h,BN(DP.bind(null,s,h,t),[t]),s.flags|=2048,cf(9,SP.bind(null,s,h,i,n),void 0,null),i},useId:function(){var t=mo(),n=Vn.identifierPrefix;if(Xt){var i=es,s=Xo;i=(s&~(1<<32-Hi(s)-1)).toString(32)+i,n=":"+n+"R"+i,i=af++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=BW++,n=":"+n+"r"+i.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},FW={readContext:ki,useCallback:RP,useContext:ki,useEffect:nA,useImperativeHandle:BP,useInsertionEffect:IP,useLayoutEffect:OP,useMemo:LP,useReducer:Kw,useRef:NP,useState:function(){return Kw(lf)},useDebugValue:rA,useDeferredValue:function(t){var n=vi();return zP(n,Nn.memoizedState,t)},useTransition:function(){var t=Kw(lf)[0],n=vi().memoizedState;return[t,n]},useMutableSource:CP,useSyncExternalStore:xP,useId:jP,unstable_isNewReconciler:!1},$W={readContext:ki,useCallback:RP,useContext:ki,useEffect:nA,useImperativeHandle:BP,useInsertionEffect:IP,useLayoutEffect:OP,useMemo:LP,useReducer:Qw,useRef:NP,useState:function(){return Qw(lf)},useDebugValue:rA,useDeferredValue:function(t){var n=vi();return Nn===null?n.memoizedState=t:zP(n,Nn.memoizedState,t)},useTransition:function(){var t=Qw(lf)[0],n=vi().memoizedState;return[t,n]},useMutableSource:CP,useSyncExternalStore:xP,useId:jP,unstable_isNewReconciler:!1};function Ad(t,n){try{var i="",s=n;do i+=gq(s),s=s.return;while(s);var d=i}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:n,stack:d,digest:null}}function Zw(t,n,i){return{value:t,source:null,stack:i!=null?i:null,digest:n!=null?n:null}}function v1(t,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var VW=typeof WeakMap=="function"?WeakMap:Map;function UP(t,n,i){i=is(-1,i),i.tag=3,i.payload={element:null};var s=n.value;return i.callback=function(){Wm||(Wm=!0,T1=s),v1(t,n)},i}function HP(t,n,i){i=is(-1,i),i.tag=3;var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var d=n.value;i.payload=function(){return s(d)},i.callback=function(){v1(t,n)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){v1(t,n),typeof s!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var p=n.stack;this.componentDidCatch(n.value,{componentStack:p!==null?p:""})}),i}function RN(t,n,i){var s=t.pingCache;if(s===null){s=t.pingCache=new VW;var d=new Set;s.set(n,d)}else d=s.get(n),d===void 0&&(d=new Set,s.set(n,d));d.has(i)||(d.add(i),t=nG.bind(null,t,n,i),n.then(t,t))}function LN(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function zN(t,n,i,s,d){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=is(-1,1),n.tag=2,la(i,n,1))),i.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var UW=fs.ReactCurrentOwner,Sr=!1;function hr(t,n,i,s){n.child=t===null?_P(n,null,i,s):yd(n,t.child,i,s)}function jN(t,n,i,s,d){i=i.render;var h=n.ref;return hd(n,d),s=eA(t,n,i,s,h,d),i=tA(),t!==null&&!Sr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,us(t,n,d)):(Xt&&i&&V_(n),n.flags|=1,hr(t,n,s,d),n.child)}function FN(t,n,i,s,d){if(t===null){var h=i.type;return typeof h=="function"&&!uA(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=h,qP(t,n,h,s,d)):(t=pm(i.type,null,s,n,n.mode,d),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,(t.lanes&d)===0){var p=h.memoizedProps;if(i=i.compare,i=i!==null?i:ef,i(p,s)&&t.ref===n.ref)return us(t,n,d)}return n.flags|=1,t=ua(h,s),t.ref=n.ref,t.return=n,n.child=t}function qP(t,n,i,s,d){if(t!==null){var h=t.memoizedProps;if(ef(h,s)&&t.ref===n.ref)if(Sr=!1,n.pendingProps=s=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Sr=!0);else return n.lanes=t.lanes,us(t,n,d)}return w1(t,n,i,s,d)}function WP(t,n,i){var s=n.pendingProps,d=s.children,h=t!==null?t.memoizedState:null;if(s.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(od,Hr),Hr|=i;else{if((i&1073741824)===0)return t=h!==null?h.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,$t(od,Hr),Hr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=h!==null?h.baseLanes:i,$t(od,Hr),Hr|=s}else h!==null?(s=h.baseLanes|i,n.memoizedState=null):s=i,$t(od,Hr),Hr|=s;return hr(t,n,d,i),n.child}function GP(t,n){var i=n.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function w1(t,n,i,s,d){var h=Tr(i)?Cl:cr.current;return h=vd(n,h),hd(n,d),i=eA(t,n,i,s,h,d),s=tA(),t!==null&&!Sr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~d,us(t,n,d)):(Xt&&s&&V_(n),n.flags|=1,hr(t,n,i,d),n.child)}function $N(t,n,i,s,d){if(Tr(i)){var h=!0;Rm(n)}else h=!1;if(hd(n,d),n.stateNode===null)um(t,n),wP(n,i,s),k1(n,i,s,d),s=!0;else if(t===null){var p=n.stateNode,b=n.memoizedProps;p.props=b;var m=p.context,w=i.contextType;typeof w=="object"&&w!==null?w=ki(w):(w=Tr(i)?Cl:cr.current,w=vd(n,w));var x=i.getDerivedStateFromProps,y=typeof x=="function"||typeof p.getSnapshotBeforeUpdate=="function";y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==s||m!==w)&&IN(n,p,s,w),Gs=!1;var _=n.memoizedState;p.state=_,$m(n,s,p,d),m=n.memoizedState,b!==s||_!==m||Dr.current||Gs?(typeof x=="function"&&(b1(n,i,x,s),m=n.memoizedState),(b=Gs||NN(n,i,b,s,_,m,w))?(y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=m),p.props=s,p.state=m,p.context=w,s=b):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{p=n.stateNode,kP(t,n),b=n.memoizedProps,w=n.type===n.elementType?b:zi(n.type,b),p.props=w,y=n.pendingProps,_=p.context,m=i.contextType,typeof m=="object"&&m!==null?m=ki(m):(m=Tr(i)?Cl:cr.current,m=vd(n,m));var E=i.getDerivedStateFromProps;(x=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==y||_!==m)&&IN(n,p,s,m),Gs=!1,_=n.memoizedState,p.state=_,$m(n,s,p,d);var D=n.memoizedState;b!==y||_!==D||Dr.current||Gs?(typeof E=="function"&&(b1(n,i,E,s),D=n.memoizedState),(w=Gs||NN(n,i,w,s,_,D,m)||!1)?(x||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(s,D,m),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(s,D,m)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&_===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&_===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=D),p.props=s,p.state=D,p.context=m,s=w):(typeof p.componentDidUpdate!="function"||b===t.memoizedProps&&_===t.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&_===t.memoizedState||(n.flags|=1024),s=!1)}return y1(t,n,i,s,h,d)}function y1(t,n,i,s,d,h){GP(t,n);var p=(n.flags&128)!==0;if(!s&&!p)return d&&EN(n,i,!1),us(t,n,h);s=n.stateNode,UW.current=n;var b=p&&typeof i.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,t!==null&&p?(n.child=yd(n,t.child,null,h),n.child=yd(n,null,b,h)):hr(t,n,b,h),n.memoizedState=s.state,d&&EN(n,i,!0),n.child}function YP(t){var n=t.stateNode;n.pendingContext?xN(t,n.pendingContext,n.pendingContext!==n.context):n.context&&xN(t,n.context,!1),Q_(t,n.containerInfo)}function VN(t,n,i,s,d){return wd(),H_(d),n.flags|=256,hr(t,n,i,s),n.child}var _1={dehydrated:null,treeContext:null,retryLane:0};function A1(t){return{baseLanes:t,cachePool:null,transitions:null}}function KP(t,n,i){var s=n.pendingProps,d=nn.current,h=!1,p=(n.flags&128)!==0,b;if((b=p)||(b=t!==null&&t.memoizedState===null?!1:(d&2)!==0),b?(h=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),$t(nn,d&1),t===null)return g1(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(p=s.children,t=s.fallback,h?(s=n.mode,h=n.child,p={mode:"hidden",children:p},(s&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=p):h=R0(p,s,0,null),t=yl(t,s,i,null),h.return=n,t.return=n,h.sibling=t,n.child=h,n.child.memoizedState=A1(i),n.memoizedState=_1,t):iA(n,p));if(d=t.memoizedState,d!==null&&(b=d.dehydrated,b!==null))return HW(t,n,p,s,b,d,i);if(h){h=s.fallback,p=n.mode,d=t.child,b=d.sibling;var m={mode:"hidden",children:s.children};return(p&1)===0&&n.child!==d?(s=n.child,s.childLanes=0,s.pendingProps=m,n.deletions=null):(s=ua(d,m),s.subtreeFlags=d.subtreeFlags&14680064),b!==null?h=ua(b,h):(h=yl(h,p,i,null),h.flags|=2),h.return=n,s.return=n,s.sibling=h,n.child=s,s=h,h=n.child,p=t.child.memoizedState,p=p===null?A1(i):{baseLanes:p.baseLanes|i,cachePool:null,transitions:p.transitions},h.memoizedState=p,h.childLanes=t.childLanes&~i,n.memoizedState=_1,s}return h=t.child,t=h.sibling,s=ua(h,{mode:"visible",children:s.children}),(n.mode&1)===0&&(s.lanes=i),s.return=n,s.sibling=null,t!==null&&(i=n.deletions,i===null?(n.deletions=[t],n.flags|=16):i.push(t)),n.child=s,n.memoizedState=null,s}function iA(t,n){return n=R0({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function jg(t,n,i,s){return s!==null&&H_(s),yd(n,t.child,null,i),t=iA(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function HW(t,n,i,s,d,h,p){if(i)return n.flags&256?(n.flags&=-257,s=Zw(Error(ke(422))),jg(t,n,p,s)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(h=s.fallback,d=n.mode,s=R0({mode:"visible",children:s.children},d,0,null),h=yl(h,d,p,null),h.flags|=2,s.return=n,h.return=n,s.sibling=h,n.child=s,(n.mode&1)!==0&&yd(n,t.child,null,p),n.child.memoizedState=A1(p),n.memoizedState=_1,h);if((n.mode&1)===0)return jg(t,n,p,null);if(d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var b=s.dgst;return s=b,h=Error(ke(419)),s=Zw(h,s,void 0),jg(t,n,p,s)}if(b=(p&t.childLanes)!==0,Sr||b){if(s=Vn,s!==null){switch(p&-p){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(s.suspendedLanes|p))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,ds(t,d),qi(s,t,d,-1))}return dA(),s=Zw(Error(ke(421))),jg(t,n,p,s)}return d.data==="$?"?(n.flags|=128,n.child=t.child,n=rG.bind(null,t),d._reactRetry=n,null):(t=h.treeContext,qr=aa(d.nextSibling),Yr=n,Xt=!0,Fi=null,t!==null&&(di[ui++]=Xo,di[ui++]=es,di[ui++]=xl,Xo=t.id,es=t.overflow,xl=n),n=iA(n,s.children),n.flags|=4096,n)}function UN(t,n,i){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),m1(t.return,n,i)}function Jw(t,n,i,s,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:d}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=i,h.tailMode=d)}function QP(t,n,i){var s=n.pendingProps,d=s.revealOrder,h=s.tail;if(hr(t,n,s.children,i),s=nn.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&UN(t,i,n);else if(t.tag===19)UN(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}if($t(nn,s),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)t=i.alternate,t!==null&&Vm(t)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Jw(n,!1,d,i,h);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(t=d.alternate,t!==null&&Vm(t)===null){n.child=d;break}t=d.sibling,d.sibling=i,i=d,d=t}Jw(n,!0,i,null,h);break;case"together":Jw(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function um(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function us(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Sl|=n.lanes,(i&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(ke(153));if(n.child!==null){for(t=n.child,i=ua(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=ua(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function qW(t,n,i){switch(n.tag){case 3:YP(n),wd();break;case 5:AP(n);break;case 1:Tr(n.type)&&Rm(n);break;case 4:Q_(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,d=n.memoizedProps.value;$t(jm,s._currentValue),s._currentValue=d;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?($t(nn,nn.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?KP(t,n,i):($t(nn,nn.current&1),t=us(t,n,i),t!==null?t.sibling:null);$t(nn,nn.current&1);break;case 19:if(s=(i&n.childLanes)!==0,(t.flags&128)!==0){if(s)return QP(t,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$t(nn,nn.current),s)break;return null;case 22:case 23:return n.lanes=0,WP(t,n,i)}return us(t,n,i)}var ZP,C1,JP,XP;ZP=function(t,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};C1=function(){};JP=function(t,n,i,s){var d=t.memoizedProps;if(d!==s){t=n.stateNode,ml(_o.current);var h=null;switch(i){case"input":d=Wy(t,d),s=Wy(t,s),h=[];break;case"select":d=sn({},d,{value:void 0}),s=sn({},s,{value:void 0}),h=[];break;case"textarea":d=Ky(t,d),s=Ky(t,s),h=[];break;default:typeof d.onClick!="function"&&typeof s.onClick=="function"&&(t.onclick=Pm)}Zy(i,s);var p;i=null;for(w in d)if(!s.hasOwnProperty(w)&&d.hasOwnProperty(w)&&d[w]!=null)if(w==="style"){var b=d[w];for(p in b)b.hasOwnProperty(p)&&(i||(i={}),i[p]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(Gh.hasOwnProperty(w)?h||(h=[]):(h=h||[]).push(w,null));for(w in s){var m=s[w];if(b=d!=null?d[w]:void 0,s.hasOwnProperty(w)&&m!==b&&(m!=null||b!=null))if(w==="style")if(b){for(p in b)!b.hasOwnProperty(p)||m&&m.hasOwnProperty(p)||(i||(i={}),i[p]="");for(p in m)m.hasOwnProperty(p)&&b[p]!==m[p]&&(i||(i={}),i[p]=m[p])}else i||(h||(h=[]),h.push(w,i)),i=m;else w==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,b=b?b.__html:void 0,m!=null&&b!==m&&(h=h||[]).push(w,m)):w==="children"?typeof m!="string"&&typeof m!="number"||(h=h||[]).push(w,""+m):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(Gh.hasOwnProperty(w)?(m!=null&&w==="onScroll"&&Vt("scroll",t),h||b===m||(h=[])):(h=h||[]).push(w,m))}i&&(h=h||[]).push("style",i);var w=h;(n.updateQueue=w)&&(n.flags|=4)}};XP=function(t,n,i,s){i!==s&&(n.flags|=4)};function ch(t,n){if(!Xt)switch(t.tailMode){case"hidden":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ir(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,s=0;if(n)for(var d=t.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags&14680064,s|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)i|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=s,t.childLanes=i,n}function WW(t,n,i){var s=n.pendingProps;switch(U_(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ir(n),null;case 1:return Tr(n.type)&&Bm(),ir(n),null;case 3:return s=n.stateNode,_d(),Gt(Dr),Gt(cr),J_(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Lg(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fi!==null&&(I1(Fi),Fi=null))),C1(t,n),ir(n),null;case 5:Z_(n);var d=ml(sf.current);if(i=n.type,t!==null&&n.stateNode!=null)JP(t,n,i,s,d),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(ke(166));return ir(n),null}if(t=ml(_o.current),Lg(n)){s=n.stateNode,i=n.type;var h=n.memoizedProps;switch(s[bo]=n,s[rf]=h,t=(n.mode&1)!==0,i){case"dialog":Vt("cancel",s),Vt("close",s);break;case"iframe":case"object":case"embed":Vt("load",s);break;case"video":case"audio":for(d=0;d<Ah.length;d++)Vt(Ah[d],s);break;case"source":Vt("error",s);break;case"img":case"image":case"link":Vt("error",s),Vt("load",s);break;case"details":Vt("toggle",s);break;case"input":JM(s,h),Vt("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!h.multiple},Vt("invalid",s);break;case"textarea":eN(s,h),Vt("invalid",s)}Zy(i,h),d=null;for(var p in h)if(h.hasOwnProperty(p)){var b=h[p];p==="children"?typeof b=="string"?s.textContent!==b&&(h.suppressHydrationWarning!==!0&&Rg(s.textContent,b,t),d=["children",b]):typeof b=="number"&&s.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&Rg(s.textContent,b,t),d=["children",""+b]):Gh.hasOwnProperty(p)&&b!=null&&p==="onScroll"&&Vt("scroll",s)}switch(i){case"input":Dg(s),XM(s,h,!0);break;case"textarea":Dg(s),tN(s);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(s.onclick=Pm)}s=d,n.updateQueue=s,s!==null&&(n.flags|=4)}else{p=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=EO(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=p.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof s.is=="string"?t=p.createElement(i,{is:s.is}):(t=p.createElement(i),i==="select"&&(p=t,s.multiple?p.multiple=!0:s.size&&(p.size=s.size))):t=p.createElementNS(t,i),t[bo]=n,t[rf]=s,ZP(t,n,!1,!1),n.stateNode=t;e:{switch(p=Jy(i,s),i){case"dialog":Vt("cancel",t),Vt("close",t),d=s;break;case"iframe":case"object":case"embed":Vt("load",t),d=s;break;case"video":case"audio":for(d=0;d<Ah.length;d++)Vt(Ah[d],t);d=s;break;case"source":Vt("error",t),d=s;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),d=s;break;case"details":Vt("toggle",t),d=s;break;case"input":JM(t,s),d=Wy(t,s),Vt("invalid",t);break;case"option":d=s;break;case"select":t._wrapperState={wasMultiple:!!s.multiple},d=sn({},s,{value:void 0}),Vt("invalid",t);break;case"textarea":eN(t,s),d=Ky(t,s),Vt("invalid",t);break;default:d=s}Zy(i,d),b=d;for(h in b)if(b.hasOwnProperty(h)){var m=b[h];h==="style"?TO(t,m):h==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&SO(t,m)):h==="children"?typeof m=="string"?(i!=="textarea"||m!=="")&&Yh(t,m):typeof m=="number"&&Yh(t,""+m):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Gh.hasOwnProperty(h)?m!=null&&h==="onScroll"&&Vt("scroll",t):m!=null&&D_(t,h,m,p))}switch(i){case"input":Dg(t),XM(t,s,!1);break;case"textarea":Dg(t),tN(t);break;case"option":s.value!=null&&t.setAttribute("value",""+ba(s.value));break;case"select":t.multiple=!!s.multiple,h=s.value,h!=null?ld(t,!!s.multiple,h,!1):s.defaultValue!=null&&ld(t,!!s.multiple,s.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Pm)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ir(n),null;case 6:if(t&&n.stateNode!=null)XP(t,n,t.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(ke(166));if(i=ml(sf.current),ml(_o.current),Lg(n)){if(s=n.stateNode,i=n.memoizedProps,s[bo]=n,(h=s.nodeValue!==i)&&(t=Yr,t!==null))switch(t.tag){case 3:Rg(s.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Rg(s.nodeValue,i,(t.mode&1)!==0)}h&&(n.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[bo]=n,n.stateNode=s}return ir(n),null;case 13:if(Gt(nn),s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xt&&qr!==null&&(n.mode&1)!==0&&(n.flags&128)===0)mP(),wd(),n.flags|=98560,h=!1;else if(h=Lg(n),s!==null&&s.dehydrated!==null){if(t===null){if(!h)throw Error(ke(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(ke(317));h[bo]=n}else wd(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ir(n),h=!1}else Fi!==null&&(I1(Fi),Fi=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(s=s!==null,s!==(t!==null&&t.memoizedState!==null)&&s&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(nn.current&1)!==0?On===0&&(On=3):dA())),n.updateQueue!==null&&(n.flags|=4),ir(n),null);case 4:return _d(),C1(t,n),t===null&&tf(n.stateNode.containerInfo),ir(n),null;case 10:return G_(n.type._context),ir(n),null;case 17:return Tr(n.type)&&Bm(),ir(n),null;case 19:if(Gt(nn),h=n.memoizedState,h===null)return ir(n),null;if(s=(n.flags&128)!==0,p=h.rendering,p===null)if(s)ch(h,!1);else{if(On!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(p=Vm(t),p!==null){for(n.flags|=128,ch(h,!1),s=p.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=i,i=n.child;i!==null;)h=i,t=s,h.flags&=14680066,p=h.alternate,p===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=p.childLanes,h.lanes=p.lanes,h.child=p.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=p.memoizedProps,h.memoizedState=p.memoizedState,h.updateQueue=p.updateQueue,h.type=p.type,t=p.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return $t(nn,nn.current&1|2),n.child}t=t.sibling}h.tail!==null&&bn()>Cd&&(n.flags|=128,s=!0,ch(h,!1),n.lanes=4194304)}else{if(!s)if(t=Vm(p),t!==null){if(n.flags|=128,s=!0,i=t.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),ch(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!Xt)return ir(n),null}else 2*bn()-h.renderingStartTime>Cd&&i!==1073741824&&(n.flags|=128,s=!0,ch(h,!1),n.lanes=4194304);h.isBackwards?(p.sibling=n.child,n.child=p):(i=h.last,i!==null?i.sibling=p:n.child=p,h.last=p)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=bn(),n.sibling=null,i=nn.current,$t(nn,s?i&1|2:i&1),n):(ir(n),null);case 22:case 23:return cA(),s=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==s&&(n.flags|=8192),s&&(n.mode&1)!==0?(Hr&1073741824)!==0&&(ir(n),n.subtreeFlags&6&&(n.flags|=8192)):ir(n),null;case 24:return null;case 25:return null}throw Error(ke(156,n.tag))}function GW(t,n){switch(U_(n),n.tag){case 1:return Tr(n.type)&&Bm(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _d(),Gt(Dr),Gt(cr),J_(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Z_(n),null;case 13:if(Gt(nn),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(ke(340));wd()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Gt(nn),null;case 4:return _d(),null;case 10:return G_(n.type._context),null;case 22:case 23:return cA(),null;case 24:return null;default:return null}}var Fg=!1,sr=!1,YW=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function id(t,n){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){dn(t,n,s)}else i.current=null}function x1(t,n,i){try{i()}catch(s){dn(t,n,s)}}var HN=!1;function KW(t,n){if(l1=Nm,t=rP(),$_(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var d=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var p=0,b=-1,m=-1,w=0,x=0,y=t,_=null;t:for(;;){for(var E;y!==i||d!==0&&y.nodeType!==3||(b=p+d),y!==h||s!==0&&y.nodeType!==3||(m=p+s),y.nodeType===3&&(p+=y.nodeValue.length),(E=y.firstChild)!==null;)_=y,y=E;for(;;){if(y===t)break t;if(_===i&&++w===d&&(b=p),_===h&&++x===s&&(m=p),(E=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=E}i=b===-1||m===-1?null:{start:b,end:m}}else i=null}i=i||{start:0,end:0}}else i=null;for(c1={focusedElem:t,selectionRange:i},Nm=!1,Pe=n;Pe!==null;)if(n=Pe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Pe=t;else for(;Pe!==null;){n=Pe;try{var D=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var T=D.memoizedProps,O=D.memoizedState,I=n.stateNode,M=I.getSnapshotBeforeUpdate(n.elementType===n.type?T:zi(n.type,T),O);I.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var B=n.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ke(163))}}catch(z){dn(n,n.return,z)}if(t=n.sibling,t!==null){t.return=n.return,Pe=t;break}Pe=n.return}return D=HN,HN=!1,D}function Lh(t,n,i){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&x1(n,i,h)}d=d.next}while(d!==s)}}function P0(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var s=i.create;i.destroy=s()}i=i.next}while(i!==n)}}function E1(t){var n=t.ref;if(n!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof n=="function"?n(t):n.current=t}}function eB(t){var n=t.alternate;n!==null&&(t.alternate=null,eB(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[bo],delete n[rf],delete n[h1],delete n[NW],delete n[IW])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tB(t){return t.tag===5||t.tag===3||t.tag===4}function qN(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tB(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function S1(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(t,n):i.insertBefore(t,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(t,i)):(n=i,n.appendChild(t)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Pm));else if(s!==4&&(t=t.child,t!==null))for(S1(t,n,i),t=t.sibling;t!==null;)S1(t,n,i),t=t.sibling}function D1(t,n,i){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?i.insertBefore(t,n):i.appendChild(t);else if(s!==4&&(t=t.child,t!==null))for(D1(t,n,i),t=t.sibling;t!==null;)D1(t,n,i),t=t.sibling}var Kn=null,ji=!1;function Us(t,n,i){for(i=i.child;i!==null;)nB(t,n,i),i=i.sibling}function nB(t,n,i){if(yo&&typeof yo.onCommitFiberUnmount=="function")try{yo.onCommitFiberUnmount(E0,i)}catch{}switch(i.tag){case 5:sr||id(i,n);case 6:var s=Kn,d=ji;Kn=null,Us(t,n,i),Kn=s,ji=d,Kn!==null&&(ji?(t=Kn,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):Kn.removeChild(i.stateNode));break;case 18:Kn!==null&&(ji?(t=Kn,i=i.stateNode,t.nodeType===8?qw(t.parentNode,i):t.nodeType===1&&qw(t,i),Jh(t)):qw(Kn,i.stateNode));break;case 4:s=Kn,d=ji,Kn=i.stateNode.containerInfo,ji=!0,Us(t,n,i),Kn=s,ji=d;break;case 0:case 11:case 14:case 15:if(!sr&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){d=s=s.next;do{var h=d,p=h.destroy;h=h.tag,p!==void 0&&((h&2)!==0||(h&4)!==0)&&x1(i,n,p),d=d.next}while(d!==s)}Us(t,n,i);break;case 1:if(!sr&&(id(i,n),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(b){dn(i,n,b)}Us(t,n,i);break;case 21:Us(t,n,i);break;case 22:i.mode&1?(sr=(s=sr)||i.memoizedState!==null,Us(t,n,i),sr=s):Us(t,n,i);break;default:Us(t,n,i)}}function WN(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new YW),n.forEach(function(s){var d=iG.bind(null,t,s);i.has(s)||(i.add(s),s.then(d,d))})}}function Ri(t,n){var i=n.deletions;if(i!==null)for(var s=0;s<i.length;s++){var d=i[s];try{var h=t,p=n,b=p;e:for(;b!==null;){switch(b.tag){case 5:Kn=b.stateNode,ji=!1;break e;case 3:Kn=b.stateNode.containerInfo,ji=!0;break e;case 4:Kn=b.stateNode.containerInfo,ji=!0;break e}b=b.return}if(Kn===null)throw Error(ke(160));nB(h,p,d),Kn=null,ji=!1;var m=d.alternate;m!==null&&(m.return=null),d.return=null}catch(w){dn(d,n,w)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)rB(n,t),n=n.sibling}function rB(t,n){var i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ri(n,t),go(t),s&4){try{Lh(3,t,t.return),P0(3,t)}catch(T){dn(t,t.return,T)}try{Lh(5,t,t.return)}catch(T){dn(t,t.return,T)}}break;case 1:Ri(n,t),go(t),s&512&&i!==null&&id(i,i.return);break;case 5:if(Ri(n,t),go(t),s&512&&i!==null&&id(i,i.return),t.flags&32){var d=t.stateNode;try{Yh(d,"")}catch(T){dn(t,t.return,T)}}if(s&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,p=i!==null?i.memoizedProps:h,b=t.type,m=t.updateQueue;if(t.updateQueue=null,m!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&CO(d,h),Jy(b,p);var w=Jy(b,h);for(p=0;p<m.length;p+=2){var x=m[p],y=m[p+1];x==="style"?TO(d,y):x==="dangerouslySetInnerHTML"?SO(d,y):x==="children"?Yh(d,y):D_(d,x,y,w)}switch(b){case"input":Gy(d,h);break;case"textarea":xO(d,h);break;case"select":var _=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var E=h.value;E!=null?ld(d,!!h.multiple,E,!1):_!==!!h.multiple&&(h.defaultValue!=null?ld(d,!!h.multiple,h.defaultValue,!0):ld(d,!!h.multiple,h.multiple?[]:"",!1))}d[rf]=h}catch(T){dn(t,t.return,T)}}break;case 6:if(Ri(n,t),go(t),s&4){if(t.stateNode===null)throw Error(ke(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch(T){dn(t,t.return,T)}}break;case 3:if(Ri(n,t),go(t),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Jh(n.containerInfo)}catch(T){dn(t,t.return,T)}break;case 4:Ri(n,t),go(t);break;case 13:Ri(n,t),go(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(aA=bn())),s&4&&WN(t);break;case 22:if(x=i!==null&&i.memoizedState!==null,t.mode&1?(sr=(w=sr)||x,Ri(n,t),sr=w):Ri(n,t),go(t),s&8192){if(w=t.memoizedState!==null,(t.stateNode.isHidden=w)&&!x&&(t.mode&1)!==0)for(Pe=t,x=t.child;x!==null;){for(y=Pe=x;Pe!==null;){switch(_=Pe,E=_.child,_.tag){case 0:case 11:case 14:case 15:Lh(4,_,_.return);break;case 1:id(_,_.return);var D=_.stateNode;if(typeof D.componentWillUnmount=="function"){s=_,i=_.return;try{n=s,D.props=n.memoizedProps,D.state=n.memoizedState,D.componentWillUnmount()}catch(T){dn(s,i,T)}}break;case 5:id(_,_.return);break;case 22:if(_.memoizedState!==null){YN(y);continue}}E!==null?(E.return=_,Pe=E):YN(y)}x=x.sibling}e:for(x=null,y=t;;){if(y.tag===5){if(x===null){x=y;try{d=y.stateNode,w?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=y.stateNode,m=y.memoizedProps.style,p=m!=null&&m.hasOwnProperty("display")?m.display:null,b.style.display=DO("display",p))}catch(T){dn(t,t.return,T)}}}else if(y.tag===6){if(x===null)try{y.stateNode.nodeValue=w?"":y.memoizedProps}catch(T){dn(t,t.return,T)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;x===y&&(x=null),y=y.return}x===y&&(x=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Ri(n,t),go(t),s&4&&WN(t);break;case 21:break;default:Ri(n,t),go(t)}}function go(t){var n=t.flags;if(n&2){try{e:{for(var i=t.return;i!==null;){if(tB(i)){var s=i;break e}i=i.return}throw Error(ke(160))}switch(s.tag){case 5:var d=s.stateNode;s.flags&32&&(Yh(d,""),s.flags&=-33);var h=qN(t);D1(t,h,d);break;case 3:case 4:var p=s.stateNode.containerInfo,b=qN(t);S1(t,b,p);break;default:throw Error(ke(161))}}catch(m){dn(t,t.return,m)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function QW(t,n,i){Pe=t,iB(t)}function iB(t,n,i){for(var s=(t.mode&1)!==0;Pe!==null;){var d=Pe,h=d.child;if(d.tag===22&&s){var p=d.memoizedState!==null||Fg;if(!p){var b=d.alternate,m=b!==null&&b.memoizedState!==null||sr;b=Fg;var w=sr;if(Fg=p,(sr=m)&&!w)for(Pe=d;Pe!==null;)p=Pe,m=p.child,p.tag===22&&p.memoizedState!==null?KN(d):m!==null?(m.return=p,Pe=m):KN(d);for(;h!==null;)Pe=h,iB(h),h=h.sibling;Pe=d,Fg=b,sr=w}GN(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Pe=h):GN(t)}}function GN(t){for(;Pe!==null;){var n=Pe;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:sr||P0(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!sr)if(i===null)s.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:zi(n.type,i.memoizedProps);s.componentDidUpdate(d,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&MN(n,h,s);break;case 3:var p=n.updateQueue;if(p!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}MN(n,p,i)}break;case 5:var b=n.stateNode;if(i===null&&n.flags&4){i=b;var m=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&i.focus();break;case"img":m.src&&(i.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var w=n.alternate;if(w!==null){var x=w.memoizedState;if(x!==null){var y=x.dehydrated;y!==null&&Jh(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ke(163))}sr||n.flags&512&&E1(n)}catch(_){dn(n,n.return,_)}}if(n===t){Pe=null;break}if(i=n.sibling,i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function YN(t){for(;Pe!==null;){var n=Pe;if(n===t){Pe=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function KN(t){for(;Pe!==null;){var n=Pe;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{P0(4,n)}catch(m){dn(n,i,m)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var d=n.return;try{s.componentDidMount()}catch(m){dn(n,d,m)}}var h=n.return;try{E1(n)}catch(m){dn(n,h,m)}break;case 5:var p=n.return;try{E1(n)}catch(m){dn(n,p,m)}}}catch(m){dn(n,n.return,m)}if(n===t){Pe=null;break}var b=n.sibling;if(b!==null){b.return=n.return,Pe=b;break}Pe=n.return}}var ZW=Math.ceil,qm=fs.ReactCurrentDispatcher,oA=fs.ReactCurrentOwner,mi=fs.ReactCurrentBatchConfig,mt=0,Vn=null,En=null,Zn=0,Hr=0,od=xa(0),On=0,df=null,Sl=0,B0=0,sA=0,zh=null,Er=null,aA=0,Cd=1/0,Ko=null,Wm=!1,T1=null,ca=null,$g=!1,Js=null,Gm=0,jh=0,M1=null,hm=-1,fm=0;function gr(){return(mt&6)!==0?bn():hm!==-1?hm:hm=bn()}function da(t){return(t.mode&1)===0?1:(mt&2)!==0&&Zn!==0?Zn&-Zn:PW.transition!==null?(fm===0&&(fm=$O()),fm):(t=St,t!==0||(t=window.event,t=t===void 0?16:YO(t.type)),t)}function qi(t,n,i,s){if(50<jh)throw jh=0,M1=null,Error(ke(185));Nf(t,i,s),((mt&2)===0||t!==Vn)&&(t===Vn&&((mt&2)===0&&(B0|=i),On===4&&Ks(t,Zn)),Mr(t,s),i===1&&mt===0&&(n.mode&1)===0&&(Cd=bn()+500,N0&&Ea()))}function Mr(t,n){var i=t.callbackNode;Pq(t,n);var s=Mm(t,t===Vn?Zn:0);if(s===0)i!==null&&iN(i),t.callbackNode=null,t.callbackPriority=0;else if(n=s&-s,t.callbackPriority!==n){if(i!=null&&iN(i),n===1)t.tag===0?OW(QN.bind(null,t)):fP(QN.bind(null,t)),TW(function(){(mt&6)===0&&Ea()}),i=null;else{switch(VO(s)){case 1:i=O_;break;case 4:i=jO;break;case 16:i=Tm;break;case 536870912:i=FO;break;default:i=Tm}i=hB(i,oB.bind(null,t))}t.callbackPriority=n,t.callbackNode=i}}function oB(t,n){if(hm=-1,fm=0,(mt&6)!==0)throw Error(ke(327));var i=t.callbackNode;if(fd()&&t.callbackNode!==i)return null;var s=Mm(t,t===Vn?Zn:0);if(s===0)return null;if((s&30)!==0||(s&t.expiredLanes)!==0||n)n=Ym(t,s);else{n=s;var d=mt;mt|=2;var h=aB();(Vn!==t||Zn!==n)&&(Ko=null,Cd=bn()+500,wl(t,n));do try{eG();break}catch(b){sB(t,b)}while(1);W_(),qm.current=h,mt=d,En!==null?n=0:(Vn=null,Zn=0,n=On)}if(n!==0){if(n===2&&(d=r1(t),d!==0&&(s=d,n=N1(t,d))),n===1)throw i=df,wl(t,0),Ks(t,s),Mr(t,bn()),i;if(n===6)Ks(t,s);else{if(d=t.current.alternate,(s&30)===0&&!JW(d)&&(n=Ym(t,s),n===2&&(h=r1(t),h!==0&&(s=h,n=N1(t,h))),n===1))throw i=df,wl(t,0),Ks(t,s),Mr(t,bn()),i;switch(t.finishedWork=d,t.finishedLanes=s,n){case 0:case 1:throw Error(ke(345));case 2:al(t,Er,Ko);break;case 3:if(Ks(t,s),(s&130023424)===s&&(n=aA+500-bn(),10<n)){if(Mm(t,0)!==0)break;if(d=t.suspendedLanes,(d&s)!==s){gr(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=u1(al.bind(null,t,Er,Ko),n);break}al(t,Er,Ko);break;case 4:if(Ks(t,s),(s&4194240)===s)break;for(n=t.eventTimes,d=-1;0<s;){var p=31-Hi(s);h=1<<p,p=n[p],p>d&&(d=p),s&=~h}if(s=d,s=bn()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*ZW(s/1960))-s,10<s){t.timeoutHandle=u1(al.bind(null,t,Er,Ko),s);break}al(t,Er,Ko);break;case 5:al(t,Er,Ko);break;default:throw Error(ke(329))}}}return Mr(t,bn()),t.callbackNode===i?oB.bind(null,t):null}function N1(t,n){var i=zh;return t.current.memoizedState.isDehydrated&&(wl(t,n).flags|=256),t=Ym(t,n),t!==2&&(n=Er,Er=i,n!==null&&I1(n)),t}function I1(t){Er===null?Er=t:Er.push.apply(Er,t)}function JW(t){for(var n=t;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var d=i[s],h=d.getSnapshot;d=d.value;try{if(!Wi(h(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ks(t,n){for(n&=~sA,n&=~B0,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var i=31-Hi(n),s=1<<i;t[i]=-1,n&=~s}}function QN(t){if((mt&6)!==0)throw Error(ke(327));fd();var n=Mm(t,0);if((n&1)===0)return Mr(t,bn()),null;var i=Ym(t,n);if(t.tag!==0&&i===2){var s=r1(t);s!==0&&(n=s,i=N1(t,s))}if(i===1)throw i=df,wl(t,0),Ks(t,n),Mr(t,bn()),i;if(i===6)throw Error(ke(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,al(t,Er,Ko),Mr(t,bn()),null}function lA(t,n){var i=mt;mt|=1;try{return t(n)}finally{mt=i,mt===0&&(Cd=bn()+500,N0&&Ea())}}function Dl(t){Js!==null&&Js.tag===0&&(mt&6)===0&&fd();var n=mt;mt|=1;var i=mi.transition,s=St;try{if(mi.transition=null,St=1,t)return t()}finally{St=s,mi.transition=i,mt=n,(mt&6)===0&&Ea()}}function cA(){Hr=od.current,Gt(od)}function wl(t,n){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,DW(i)),En!==null)for(i=En.return;i!==null;){var s=i;switch(U_(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Bm();break;case 3:_d(),Gt(Dr),Gt(cr),J_();break;case 5:Z_(s);break;case 4:_d();break;case 13:Gt(nn);break;case 19:Gt(nn);break;case 10:G_(s.type._context);break;case 22:case 23:cA()}i=i.return}if(Vn=t,En=t=ua(t.current,null),Zn=Hr=n,On=0,df=null,sA=B0=Sl=0,Er=zh=null,gl!==null){for(n=0;n<gl.length;n++)if(i=gl[n],s=i.interleaved,s!==null){i.interleaved=null;var d=s.next,h=i.pending;if(h!==null){var p=h.next;h.next=d,s.next=p}i.pending=s}gl=null}return t}function sB(t,n){do{var i=En;try{if(W_(),cm.current=Hm,Um){for(var s=rn.memoizedState;s!==null;){var d=s.queue;d!==null&&(d.pending=null),s=s.next}Um=!1}if(El=0,$n=Nn=rn=null,Rh=!1,af=0,oA.current=null,i===null||i.return===null){On=1,df=n,En=null;break}e:{var h=t,p=i.return,b=i,m=n;if(n=Zn,b.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var w=m,x=b,y=x.tag;if((x.mode&1)===0&&(y===0||y===11||y===15)){var _=x.alternate;_?(x.updateQueue=_.updateQueue,x.memoizedState=_.memoizedState,x.lanes=_.lanes):(x.updateQueue=null,x.memoizedState=null)}var E=LN(p);if(E!==null){E.flags&=-257,zN(E,p,b,h,n),E.mode&1&&RN(h,w,n),n=E,m=w;var D=n.updateQueue;if(D===null){var T=new Set;T.add(m),n.updateQueue=T}else D.add(m);break e}else{if((n&1)===0){RN(h,w,n),dA();break e}m=Error(ke(426))}}else if(Xt&&b.mode&1){var O=LN(p);if(O!==null){(O.flags&65536)===0&&(O.flags|=256),zN(O,p,b,h,n),H_(Ad(m,b));break e}}h=m=Ad(m,b),On!==4&&(On=2),zh===null?zh=[h]:zh.push(h),h=p;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var I=UP(h,m,n);TN(h,I);break e;case 1:b=m;var M=h.type,B=h.stateNode;if((h.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(ca===null||!ca.has(B)))){h.flags|=65536,n&=-n,h.lanes|=n;var z=HP(h,b,n);TN(h,z);break e}}h=h.return}while(h!==null)}cB(i)}catch(U){n=U,En===i&&i!==null&&(En=i=i.return);continue}break}while(1)}function aB(){var t=qm.current;return qm.current=Hm,t===null?Hm:t}function dA(){(On===0||On===3||On===2)&&(On=4),Vn===null||(Sl&268435455)===0&&(B0&268435455)===0||Ks(Vn,Zn)}function Ym(t,n){var i=mt;mt|=2;var s=aB();(Vn!==t||Zn!==n)&&(Ko=null,wl(t,n));do try{XW();break}catch(d){sB(t,d)}while(1);if(W_(),mt=i,qm.current=s,En!==null)throw Error(ke(261));return Vn=null,Zn=0,On}function XW(){for(;En!==null;)lB(En)}function eG(){for(;En!==null&&!xq();)lB(En)}function lB(t){var n=uB(t.alternate,t,Hr);t.memoizedProps=t.pendingProps,n===null?cB(t):En=n,oA.current=null}function cB(t){var n=t;do{var i=n.alternate;if(t=n.return,(n.flags&32768)===0){if(i=WW(i,n,Hr),i!==null){En=i;return}}else{if(i=GW(i,n),i!==null){i.flags&=32767,En=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{On=6,En=null;return}}if(n=n.sibling,n!==null){En=n;return}En=n=t}while(n!==null);On===0&&(On=5)}function al(t,n,i){var s=St,d=mi.transition;try{mi.transition=null,St=1,tG(t,n,i,s)}finally{mi.transition=d,St=s}return null}function tG(t,n,i,s){do fd();while(Js!==null);if((mt&6)!==0)throw Error(ke(327));i=t.finishedWork;var d=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(ke(177));t.callbackNode=null,t.callbackPriority=0;var h=i.lanes|i.childLanes;if(Bq(t,h),t===Vn&&(En=Vn=null,Zn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||$g||($g=!0,hB(Tm,function(){return fd(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=mi.transition,mi.transition=null;var p=St;St=1;var b=mt;mt|=4,oA.current=null,KW(t,i),rB(i,t),yW(c1),Nm=!!l1,c1=l1=null,t.current=i,QW(i),Eq(),mt=b,St=p,mi.transition=h}else t.current=i;if($g&&($g=!1,Js=t,Gm=d),h=t.pendingLanes,h===0&&(ca=null),Tq(i.stateNode),Mr(t,bn()),n!==null)for(s=t.onRecoverableError,i=0;i<n.length;i++)d=n[i],s(d.value,{componentStack:d.stack,digest:d.digest});if(Wm)throw Wm=!1,t=T1,T1=null,t;return(Gm&1)!==0&&t.tag!==0&&fd(),h=t.pendingLanes,(h&1)!==0?t===M1?jh++:(jh=0,M1=t):jh=0,Ea(),null}function fd(){if(Js!==null){var t=VO(Gm),n=mi.transition,i=St;try{if(mi.transition=null,St=16>t?16:t,Js===null)var s=!1;else{if(t=Js,Js=null,Gm=0,(mt&6)!==0)throw Error(ke(331));var d=mt;for(mt|=4,Pe=t.current;Pe!==null;){var h=Pe,p=h.child;if((Pe.flags&16)!==0){var b=h.deletions;if(b!==null){for(var m=0;m<b.length;m++){var w=b[m];for(Pe=w;Pe!==null;){var x=Pe;switch(x.tag){case 0:case 11:case 15:Lh(8,x,h)}var y=x.child;if(y!==null)y.return=x,Pe=y;else for(;Pe!==null;){x=Pe;var _=x.sibling,E=x.return;if(eB(x),x===w){Pe=null;break}if(_!==null){_.return=E,Pe=_;break}Pe=E}}}var D=h.alternate;if(D!==null){var T=D.child;if(T!==null){D.child=null;do{var O=T.sibling;T.sibling=null,T=O}while(T!==null)}}Pe=h}}if((h.subtreeFlags&2064)!==0&&p!==null)p.return=h,Pe=p;else e:for(;Pe!==null;){if(h=Pe,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Lh(9,h,h.return)}var I=h.sibling;if(I!==null){I.return=h.return,Pe=I;break e}Pe=h.return}}var M=t.current;for(Pe=M;Pe!==null;){p=Pe;var B=p.child;if((p.subtreeFlags&2064)!==0&&B!==null)B.return=p,Pe=B;else e:for(p=M;Pe!==null;){if(b=Pe,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:P0(9,b)}}catch(U){dn(b,b.return,U)}if(b===p){Pe=null;break e}var z=b.sibling;if(z!==null){z.return=b.return,Pe=z;break e}Pe=b.return}}if(mt=d,Ea(),yo&&typeof yo.onPostCommitFiberRoot=="function")try{yo.onPostCommitFiberRoot(E0,t)}catch{}s=!0}return s}finally{St=i,mi.transition=n}}return!1}function ZN(t,n,i){n=Ad(i,n),n=UP(t,n,1),t=la(t,n,1),n=gr(),t!==null&&(Nf(t,1,n),Mr(t,n))}function dn(t,n,i){if(t.tag===3)ZN(t,t,i);else for(;n!==null;){if(n.tag===3){ZN(n,t,i);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ca===null||!ca.has(s))){t=Ad(i,t),t=HP(n,t,1),n=la(n,t,1),t=gr(),n!==null&&(Nf(n,1,t),Mr(n,t));break}}n=n.return}}function nG(t,n,i){var s=t.pingCache;s!==null&&s.delete(n),n=gr(),t.pingedLanes|=t.suspendedLanes&i,Vn===t&&(Zn&i)===i&&(On===4||On===3&&(Zn&130023424)===Zn&&500>bn()-aA?wl(t,0):sA|=i),Mr(t,n)}function dB(t,n){n===0&&((t.mode&1)===0?n=1:(n=Ng,Ng<<=1,(Ng&130023424)===0&&(Ng=4194304)));var i=gr();t=ds(t,n),t!==null&&(Nf(t,n,i),Mr(t,i))}function rG(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),dB(t,i)}function iG(t,n){var i=0;switch(t.tag){case 13:var s=t.stateNode,d=t.memoizedState;d!==null&&(i=d.retryLane);break;case 19:s=t.stateNode;break;default:throw Error(ke(314))}s!==null&&s.delete(n),dB(t,i)}var uB;uB=function(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps||Dr.current)Sr=!0;else{if((t.lanes&i)===0&&(n.flags&128)===0)return Sr=!1,qW(t,n,i);Sr=(t.flags&131072)!==0}else Sr=!1,Xt&&(n.flags&1048576)!==0&&pP(n,zm,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;um(t,n),t=n.pendingProps;var d=vd(n,cr.current);hd(n,i),d=eA(null,n,s,t,d,i);var h=tA();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Tr(s)?(h=!0,Rm(n)):h=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,K_(n),d.updater=I0,n.stateNode=d,d._reactInternals=n,k1(n,s,t,i),n=y1(null,n,s,!0,h,i)):(n.tag=0,Xt&&h&&V_(n),hr(null,n,d,i),n=n.child),n;case 16:s=n.elementType;e:{switch(um(t,n),t=n.pendingProps,d=s._init,s=d(s._payload),n.type=s,d=n.tag=sG(s),t=zi(s,t),d){case 0:n=w1(null,n,s,t,i);break e;case 1:n=$N(null,n,s,t,i);break e;case 11:n=jN(null,n,s,t,i);break e;case 14:n=FN(null,n,s,zi(s.type,t),i);break e}throw Error(ke(306,s,""))}return n;case 0:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:zi(s,d),w1(t,n,s,d,i);case 1:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:zi(s,d),$N(t,n,s,d,i);case 3:e:{if(YP(n),t===null)throw Error(ke(387));s=n.pendingProps,h=n.memoizedState,d=h.element,kP(t,n),$m(n,s,null,i);var p=n.memoizedState;if(s=p.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){d=Ad(Error(ke(423)),n),n=VN(t,n,s,i,d);break e}else if(s!==d){d=Ad(Error(ke(424)),n),n=VN(t,n,s,i,d);break e}else for(qr=aa(n.stateNode.containerInfo.firstChild),Yr=n,Xt=!0,Fi=null,i=_P(n,null,s,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(wd(),s===d){n=us(t,n,i);break e}hr(t,n,s,i)}n=n.child}return n;case 5:return AP(n),t===null&&g1(n),s=n.type,d=n.pendingProps,h=t!==null?t.memoizedProps:null,p=d.children,d1(s,d)?p=null:h!==null&&d1(s,h)&&(n.flags|=32),GP(t,n),hr(t,n,p,i),n.child;case 6:return t===null&&g1(n),null;case 13:return KP(t,n,i);case 4:return Q_(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=yd(n,null,s,i):hr(t,n,s,i),n.child;case 11:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:zi(s,d),jN(t,n,s,d,i);case 7:return hr(t,n,n.pendingProps,i),n.child;case 8:return hr(t,n,n.pendingProps.children,i),n.child;case 12:return hr(t,n,n.pendingProps.children,i),n.child;case 10:e:{if(s=n.type._context,d=n.pendingProps,h=n.memoizedProps,p=d.value,$t(jm,s._currentValue),s._currentValue=p,h!==null)if(Wi(h.value,p)){if(h.children===d.children&&!Dr.current){n=us(t,n,i);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var b=h.dependencies;if(b!==null){p=h.child;for(var m=b.firstContext;m!==null;){if(m.context===s){if(h.tag===1){m=is(-1,i&-i),m.tag=2;var w=h.updateQueue;if(w!==null){w=w.shared;var x=w.pending;x===null?m.next=m:(m.next=x.next,x.next=m),w.pending=m}}h.lanes|=i,m=h.alternate,m!==null&&(m.lanes|=i),m1(h.return,i,n),b.lanes|=i;break}m=m.next}}else if(h.tag===10)p=h.type===n.type?null:h.child;else if(h.tag===18){if(p=h.return,p===null)throw Error(ke(341));p.lanes|=i,b=p.alternate,b!==null&&(b.lanes|=i),m1(p,i,n),p=h.sibling}else p=h.child;if(p!==null)p.return=h;else for(p=h;p!==null;){if(p===n){p=null;break}if(h=p.sibling,h!==null){h.return=p.return,p=h;break}p=p.return}h=p}hr(t,n,d.children,i),n=n.child}return n;case 9:return d=n.type,s=n.pendingProps.children,hd(n,i),d=ki(d),s=s(d),n.flags|=1,hr(t,n,s,i),n.child;case 14:return s=n.type,d=zi(s,n.pendingProps),d=zi(s.type,d),FN(t,n,s,d,i);case 15:return qP(t,n,n.type,n.pendingProps,i);case 17:return s=n.type,d=n.pendingProps,d=n.elementType===s?d:zi(s,d),um(t,n),n.tag=1,Tr(s)?(t=!0,Rm(n)):t=!1,hd(n,i),wP(n,s,d),k1(n,s,d,i),y1(null,n,s,!0,t,i);case 19:return QP(t,n,i);case 22:return WP(t,n,i)}throw Error(ke(156,n.tag))};function hB(t,n){return zO(t,n)}function oG(t,n,i,s){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,n,i,s){return new oG(t,n,i,s)}function uA(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sG(t){if(typeof t=="function")return uA(t)?1:0;if(t!=null){if(t=t.$$typeof,t===M_)return 11;if(t===N_)return 14}return 2}function ua(t,n){var i=t.alternate;return i===null?(i=gi(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function pm(t,n,i,s,d,h){var p=2;if(s=t,typeof t=="function")uA(t)&&(p=1);else if(typeof t=="string")p=5;else e:switch(t){case Kc:return yl(i.children,d,h,n);case T_:p=8,d|=8;break;case Vy:return t=gi(12,i,n,d|2),t.elementType=Vy,t.lanes=h,t;case Uy:return t=gi(13,i,n,d),t.elementType=Uy,t.lanes=h,t;case Hy:return t=gi(19,i,n,d),t.elementType=Hy,t.lanes=h,t;case yO:return R0(i,d,h,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case vO:p=10;break e;case wO:p=9;break e;case M_:p=11;break e;case N_:p=14;break e;case Ws:p=16,s=null;break e}throw Error(ke(130,t==null?t:typeof t,""))}return n=gi(p,i,n,d),n.elementType=t,n.type=s,n.lanes=h,n}function yl(t,n,i,s){return t=gi(7,t,s,n),t.lanes=i,t}function R0(t,n,i,s){return t=gi(22,t,s,n),t.elementType=yO,t.lanes=i,t.stateNode={isHidden:!1},t}function Xw(t,n,i){return t=gi(6,t,null,n),t.lanes=i,t}function ey(t,n,i){return n=gi(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function aG(t,n,i,s,d){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pw(0),this.expirationTimes=Pw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pw(0),this.identifierPrefix=s,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function hA(t,n,i,s,d,h,p,b,m){return t=new aG(t,n,i,b,m),n===1?(n=1,h===!0&&(n|=8)):n=0,h=gi(3,null,null,n),t.current=h,h.stateNode=t,h.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},K_(h),t}function lG(t,n,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yc,key:s==null?null:""+s,children:t,containerInfo:n,implementation:i}}function fB(t){if(!t)return ka;t=t._reactInternals;e:{if(Nl(t)!==t||t.tag!==1)throw Error(ke(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Tr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(ke(171))}if(t.tag===1){var i=t.type;if(Tr(i))return hP(t,i,n)}return n}function pB(t,n,i,s,d,h,p,b,m){return t=hA(i,s,!0,t,d,h,p,b,m),t.context=fB(null),i=t.current,s=gr(),d=da(i),h=is(s,d),h.callback=n!=null?n:null,la(i,h,d),t.current.lanes=d,Nf(t,d,s),Mr(t,s),t}function L0(t,n,i,s){var d=n.current,h=gr(),p=da(d);return i=fB(i),n.context===null?n.context=i:n.pendingContext=i,n=is(h,p),n.payload={element:t},s=s===void 0?null:s,s!==null&&(n.callback=s),t=la(d,n,p),t!==null&&(qi(t,d,p,h),lm(t,d,p)),p}function Km(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function JN(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function fA(t,n){JN(t,n),(t=t.alternate)&&JN(t,n)}function cG(){return null}var gB=typeof reportError=="function"?reportError:function(t){console.error(t)};function pA(t){this._internalRoot=t}z0.prototype.render=pA.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(ke(409));L0(t,n,null,null)};z0.prototype.unmount=pA.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dl(function(){L0(null,t,null,null)}),n[cs]=null}};function z0(t){this._internalRoot=t}z0.prototype.unstable_scheduleHydration=function(t){if(t){var n=qO();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Ys.length&&n!==0&&n<Ys[i].priority;i++);Ys.splice(i,0,t),i===0&&GO(t)}};function gA(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function j0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function XN(){}function dG(t,n,i,s,d){if(d){if(typeof s=="function"){var h=s;s=function(){var w=Km(p);h.call(w)}}var p=pB(n,s,t,0,null,!1,!1,"",XN);return t._reactRootContainer=p,t[cs]=p.current,tf(t.nodeType===8?t.parentNode:t),Dl(),p}for(;d=t.lastChild;)t.removeChild(d);if(typeof s=="function"){var b=s;s=function(){var w=Km(m);b.call(w)}}var m=hA(t,0,!1,null,null,!1,!1,"",XN);return t._reactRootContainer=m,t[cs]=m.current,tf(t.nodeType===8?t.parentNode:t),Dl(function(){L0(n,m,i,s)}),m}function F0(t,n,i,s,d){var h=i._reactRootContainer;if(h){var p=h;if(typeof d=="function"){var b=d;d=function(){var m=Km(p);b.call(m)}}L0(n,p,t,d)}else p=dG(i,n,t,d,s);return Km(p)}UO=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var i=_h(n.pendingLanes);i!==0&&(P_(n,i|1),Mr(n,bn()),(mt&6)===0&&(Cd=bn()+500,Ea()))}break;case 13:Dl(function(){var s=ds(t,1);if(s!==null){var d=gr();qi(s,t,1,d)}}),fA(t,1)}};B_=function(t){if(t.tag===13){var n=ds(t,134217728);if(n!==null){var i=gr();qi(n,t,134217728,i)}fA(t,134217728)}};HO=function(t){if(t.tag===13){var n=da(t),i=ds(t,n);if(i!==null){var s=gr();qi(i,t,n,s)}fA(t,n)}};qO=function(){return St};WO=function(t,n){var i=St;try{return St=t,n()}finally{St=i}};e1=function(t,n,i){switch(n){case"input":if(Gy(t,i),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var s=i[n];if(s!==t&&s.form===t.form){var d=M0(s);if(!d)throw Error(ke(90));AO(s),Gy(s,d)}}}break;case"textarea":xO(t,i);break;case"select":n=i.value,n!=null&&ld(t,!!i.multiple,n,!1)}};IO=lA;OO=Dl;var uG={usingClientEntryPoint:!1,Events:[Of,Xc,M0,MO,NO,lA]},dh={findFiberByHostInstance:pl,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hG={bundleType:dh.bundleType,version:dh.version,rendererPackageName:dh.rendererPackageName,rendererConfig:dh.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=RO(t),t===null?null:t.stateNode},findFiberByHostInstance:dh.findFiberByHostInstance||cG,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vg=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vg.isDisabled&&Vg.supportsFiber)try{E0=Vg.inject(hG),yo=Vg}catch{}}Jr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uG;Jr.createPortal=function(t,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gA(n))throw Error(ke(200));return lG(t,n,null,i)};Jr.createRoot=function(t,n){if(!gA(t))throw Error(ke(299));var i=!1,s="",d=gB;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=hA(t,1,!1,null,null,i,!1,s,d),t[cs]=n.current,tf(t.nodeType===8?t.parentNode:t),new pA(n)};Jr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(ke(188)):(t=Object.keys(t).join(","),Error(ke(268,t)));return t=RO(n),t=t===null?null:t.stateNode,t};Jr.flushSync=function(t){return Dl(t)};Jr.hydrate=function(t,n,i){if(!j0(n))throw Error(ke(200));return F0(null,t,n,!0,i)};Jr.hydrateRoot=function(t,n,i){if(!gA(t))throw Error(ke(405));var s=i!=null&&i.hydratedSources||null,d=!1,h="",p=gB;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),n=pB(n,null,t,1,i!=null?i:null,d,!1,h,p),t[cs]=n.current,tf(t),s)for(t=0;t<s.length;t++)i=s[t],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new z0(n)};Jr.render=function(t,n,i){if(!j0(n))throw Error(ke(200));return F0(null,t,n,!1,i)};Jr.unmountComponentAtNode=function(t){if(!j0(t))throw Error(ke(40));return t._reactRootContainer?(Dl(function(){F0(null,null,t,!1,function(){t._reactRootContainer=null,t[cs]=null})}),!0):!1};Jr.unstable_batchedUpdates=lA;Jr.unstable_renderSubtreeIntoContainer=function(t,n,i,s){if(!j0(i))throw Error(ke(200));if(t==null||t._reactInternals===void 0)throw Error(ke(38));return F0(t,n,i,!1,s)};Jr.version="18.2.0-next-9e3b772b8-20220608";(function(t){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}n(),t.exports=Jr})(Id);const Ch=aO(Id.exports),fG=sO({__proto__:null,default:Ch},[Id.exports]);var e4=Id.exports;Fy.createRoot=e4.createRoot,Fy.hydrateRoot=e4.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uf(){return uf=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},uf.apply(this,arguments)}var Xs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xs||(Xs={}));const t4="popstate";function pG(t){t===void 0&&(t={});function n(s,d){let{pathname:h,search:p,hash:b}=s.location;return O1("",{pathname:h,search:p,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function i(s,d){return typeof d=="string"?d:Qm(d)}return mG(n,i,null,t)}function on(t,n){if(t===!1||t===null||typeof t>"u")throw new Error(n)}function mB(t,n){if(!t){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function gG(){return Math.random().toString(36).substr(2,8)}function n4(t,n){return{usr:t.state,key:t.key,idx:n}}function O1(t,n,i,s){return i===void 0&&(i=null),uf({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof n=="string"?Bd(n):n,{state:i,key:n&&n.key||s||gG()})}function Qm(t){let{pathname:n="/",search:i="",hash:s=""}=t;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Bd(t){let n={};if(t){let i=t.indexOf("#");i>=0&&(n.hash=t.substr(i),t=t.substr(0,i));let s=t.indexOf("?");s>=0&&(n.search=t.substr(s),t=t.substr(0,s)),t&&(n.pathname=t)}return n}function mG(t,n,i,s){s===void 0&&(s={});let{window:d=document.defaultView,v5Compat:h=!1}=s,p=d.history,b=Xs.Pop,m=null,w=x();w==null&&(w=0,p.replaceState(uf({},p.state,{idx:w}),""));function x(){return(p.state||{idx:null}).idx}function y(){b=Xs.Pop;let O=x(),I=O==null?null:O-w;w=O,m&&m({action:b,location:T.location,delta:I})}function _(O,I){b=Xs.Push;let M=O1(T.location,O,I);i&&i(M,O),w=x()+1;let B=n4(M,w),z=T.createHref(M);try{p.pushState(B,"",z)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;d.location.assign(z)}h&&m&&m({action:b,location:T.location,delta:1})}function E(O,I){b=Xs.Replace;let M=O1(T.location,O,I);i&&i(M,O),w=x();let B=n4(M,w),z=T.createHref(M);p.replaceState(B,"",z),h&&m&&m({action:b,location:T.location,delta:0})}function D(O){let I=d.location.origin!=="null"?d.location.origin:d.location.href,M=typeof O=="string"?O:Qm(O);return M=M.replace(/ $/,"%20"),on(I,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,I)}let T={get action(){return b},get location(){return t(d,p)},listen(O){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(t4,y),m=O,()=>{d.removeEventListener(t4,y),m=null}},createHref(O){return n(d,O)},createURL:D,encodeLocation(O){let I=D(O);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:_,replace:E,go(O){return p.go(O)}};return T}var r4;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(r4||(r4={}));function bG(t,n,i){i===void 0&&(i="/");let s=typeof n=="string"?Bd(n):n,d=xd(s.pathname||"/",i);if(d==null)return null;let h=bB(t);kG(h);let p=null;for(let b=0;p==null&&b<h.length;++b){let m=TG(d);p=SG(h[b],m)}return p}function bB(t,n,i,s){n===void 0&&(n=[]),i===void 0&&(i=[]),s===void 0&&(s="");let d=(h,p,b)=>{let m={relativePath:b===void 0?h.path||"":b,caseSensitive:h.caseSensitive===!0,childrenIndex:p,route:h};m.relativePath.startsWith("/")&&(on(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let w=ha([s,m.relativePath]),x=i.concat(m);h.children&&h.children.length>0&&(on(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+w+'".')),bB(h.children,n,x,w)),!(h.path==null&&!h.index)&&n.push({path:w,score:xG(w,h.index),routesMeta:x})};return t.forEach((h,p)=>{var b;if(h.path===""||!((b=h.path)!=null&&b.includes("?")))d(h,p);else for(let m of kB(h.path))d(h,p,m)}),n}function kB(t){let n=t.split("/");if(n.length===0)return[];let[i,...s]=n,d=i.endsWith("?"),h=i.replace(/\?$/,"");if(s.length===0)return d?[h,""]:[h];let p=kB(s.join("/")),b=[];return b.push(...p.map(m=>m===""?h:[h,m].join("/"))),d&&b.push(...p),b.map(m=>t.startsWith("/")&&m===""?"/":m)}function kG(t){t.sort((n,i)=>n.score!==i.score?i.score-n.score:EG(n.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}const vG=/^:[\w-]+$/,wG=3,yG=2,_G=1,AG=10,CG=-2,i4=t=>t==="*";function xG(t,n){let i=t.split("/"),s=i.length;return i.some(i4)&&(s+=CG),n&&(s+=yG),i.filter(d=>!i4(d)).reduce((d,h)=>d+(vG.test(h)?wG:h===""?_G:AG),s)}function EG(t,n){return t.length===n.length&&t.slice(0,-1).every((s,d)=>s===n[d])?t[t.length-1]-n[n.length-1]:0}function SG(t,n){let{routesMeta:i}=t,s={},d="/",h=[];for(let p=0;p<i.length;++p){let b=i[p],m=p===i.length-1,w=d==="/"?n:n.slice(d.length)||"/",x=P1({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},w);if(!x)return null;Object.assign(s,x.params);let y=b.route;h.push({params:s,pathname:ha([d,x.pathname]),pathnameBase:OG(ha([d,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(d=ha([d,x.pathnameBase]))}return h}function P1(t,n){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,s]=DG(t.path,t.caseSensitive,t.end),d=n.match(i);if(!d)return null;let h=d[0],p=h.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:s.reduce((w,x,y)=>{let{paramName:_,isOptional:E}=x;if(_==="*"){let T=b[y]||"";p=h.slice(0,h.length-T.length).replace(/(.)\/+$/,"$1")}const D=b[y];return E&&!D?w[_]=void 0:w[_]=(D||"").replace(/%2F/g,"/"),w},{}),pathname:h,pathnameBase:p,pattern:t}}function DG(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),mB(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let s=[],d="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,b,m)=>(s.push({paramName:b,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(s.push({paramName:"*"}),d+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?d+="\\/*$":t!==""&&t!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,n?void 0:"i"),s]}function TG(t){try{return t.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return mB(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),t}}function xd(t,n){if(n==="/")return t;if(!t.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,s=t.charAt(i);return s&&s!=="/"?null:t.slice(i)||"/"}function MG(t,n){n===void 0&&(n="/");let{pathname:i,search:s="",hash:d=""}=typeof t=="string"?Bd(t):t;return{pathname:i?i.startsWith("/")?i:NG(i,n):n,search:PG(s),hash:BG(d)}}function NG(t,n){let i=n.replace(/\/+$/,"").split("/");return t.split("/").forEach(d=>{d===".."?i.length>1&&i.pop():d!=="."&&i.push(d)}),i.length>1?i.join("/"):"/"}function ty(t,n,i,s){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IG(t){return t.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function mA(t,n){let i=IG(t);return n?i.map((s,d)=>d===t.length-1?s.pathname:s.pathnameBase):i.map(s=>s.pathnameBase)}function bA(t,n,i,s){s===void 0&&(s=!1);let d;typeof t=="string"?d=Bd(t):(d=uf({},t),on(!d.pathname||!d.pathname.includes("?"),ty("?","pathname","search",d)),on(!d.pathname||!d.pathname.includes("#"),ty("#","pathname","hash",d)),on(!d.search||!d.search.includes("#"),ty("#","search","hash",d)));let h=t===""||d.pathname==="",p=h?"/":d.pathname,b;if(p==null)b=i;else{let y=n.length-1;if(!s&&p.startsWith("..")){let _=p.split("/");for(;_[0]==="..";)_.shift(),y-=1;d.pathname=_.join("/")}b=y>=0?n[y]:"/"}let m=MG(d,b),w=p&&p!=="/"&&p.endsWith("/"),x=(h||p===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(w||x)&&(m.pathname+="/"),m}const ha=t=>t.join("/").replace(/\/\/+/g,"/"),OG=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PG=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BG=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RG(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LG=["post","put","patch","delete"];[...LG];var $0={exports:{}},V0={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zG=Z.exports,jG=Symbol.for("react.element"),FG=Symbol.for("react.fragment"),$G=Object.prototype.hasOwnProperty,VG=zG.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UG={key:!0,ref:!0,__self:!0,__source:!0};function vB(t,n,i){var s,d={},h=null,p=null;i!==void 0&&(h=""+i),n.key!==void 0&&(h=""+n.key),n.ref!==void 0&&(p=n.ref);for(s in n)$G.call(n,s)&&!UG.hasOwnProperty(s)&&(d[s]=n[s]);if(t&&t.defaultProps)for(s in n=t.defaultProps,n)d[s]===void 0&&(d[s]=n[s]);return{$$typeof:jG,type:t,key:h,ref:p,props:d,_owner:VG.current}}V0.Fragment=FG;V0.jsx=vB;V0.jsxs=vB;(function(t){t.exports=V0})($0);const Dt=$0.exports.Fragment,A=$0.exports.jsx,V=$0.exports.jsxs;/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},hf.apply(this,arguments)}const U0=Z.exports.createContext(null),wB=Z.exports.createContext(null),ps=Z.exports.createContext(null),H0=Z.exports.createContext(null),So=Z.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),yB=Z.exports.createContext(null);function HG(t,n){let{relative:i}=n===void 0?{}:n;Rd()||on(!1);let{basename:s,navigator:d}=Z.exports.useContext(ps),{hash:h,pathname:p,search:b}=q0(t,{relative:i}),m=p;return s!=="/"&&(m=p==="/"?s:ha([s,p])),d.createHref({pathname:m,search:b,hash:h})}function Rd(){return Z.exports.useContext(H0)!=null}function Zi(){return Rd()||on(!1),Z.exports.useContext(H0).location}function _B(t){Z.exports.useContext(ps).static||Z.exports.useLayoutEffect(t)}function AB(){let{isDataRoute:t}=Z.exports.useContext(So);return t?oY():qG()}function qG(){Rd()||on(!1);let t=Z.exports.useContext(U0),{basename:n,future:i,navigator:s}=Z.exports.useContext(ps),{matches:d}=Z.exports.useContext(So),{pathname:h}=Zi(),p=JSON.stringify(mA(d,i.v7_relativeSplatPath)),b=Z.exports.useRef(!1);return _B(()=>{b.current=!0}),Z.exports.useCallback(function(w,x){if(x===void 0&&(x={}),!b.current)return;if(typeof w=="number"){s.go(w);return}let y=bA(w,JSON.parse(p),h,x.relative==="path");t==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:ha([n,y.pathname])),(x.replace?s.replace:s.push)(y,x.state,x)},[n,s,p,h,t])}const WG=Z.exports.createContext(null);function GG(t){let n=Z.exports.useContext(So).outlet;return n&&A(WG.Provider,{value:t,children:n})}function kA(){let{matches:t}=Z.exports.useContext(So),n=t[t.length-1];return n?n.params:{}}function q0(t,n){let{relative:i}=n===void 0?{}:n,{future:s}=Z.exports.useContext(ps),{matches:d}=Z.exports.useContext(So),{pathname:h}=Zi(),p=JSON.stringify(mA(d,s.v7_relativeSplatPath));return Z.exports.useMemo(()=>bA(t,JSON.parse(p),h,i==="path"),[t,p,h,i])}function YG(t,n){return KG(t,n)}function KG(t,n,i,s){Rd()||on(!1);let{navigator:d}=Z.exports.useContext(ps),{matches:h}=Z.exports.useContext(So),p=h[h.length-1],b=p?p.params:{};p&&p.pathname;let m=p?p.pathnameBase:"/";p&&p.route;let w=Zi(),x;if(n){var y;let O=typeof n=="string"?Bd(n):n;m==="/"||((y=O.pathname)==null?void 0:y.startsWith(m))||on(!1),x=O}else x=w;let _=x.pathname||"/",E=_;if(m!=="/"){let O=m.replace(/^\//,"").split("/");E="/"+_.replace(/^\//,"").split("/").slice(O.length).join("/")}let D=bG(t,{pathname:E}),T=eY(D&&D.map(O=>Object.assign({},O,{params:Object.assign({},b,O.params),pathname:ha([m,d.encodeLocation?d.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?m:ha([m,d.encodeLocation?d.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),h,i,s);return n&&T?A(H0.Provider,{value:{location:hf({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Xs.Pop},children:T}):T}function QG(){let t=iY(),n=RG(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null;return V(Dt,{children:[A("h2",{children:"Unexpected Application Error!"}),A("h3",{style:{fontStyle:"italic"},children:n}),i?A("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:i}):null,null]})}const ZG=A(QG,{});class JG extends Z.exports.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?A(So.Provider,{value:this.props.routeContext,children:A(yB.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function XG(t){let{routeContext:n,match:i,children:s}=t,d=Z.exports.useContext(U0);return d&&d.static&&d.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=i.route.id),A(So.Provider,{value:n,children:s})}function eY(t,n,i,s){var d;if(n===void 0&&(n=[]),i===void 0&&(i=null),s===void 0&&(s=null),t==null){var h;if((h=i)!=null&&h.errors)t=i.matches;else return null}let p=t,b=(d=i)==null?void 0:d.errors;if(b!=null){let x=p.findIndex(y=>y.route.id&&(b==null?void 0:b[y.route.id]));x>=0||on(!1),p=p.slice(0,Math.min(p.length,x+1))}let m=!1,w=-1;if(i&&s&&s.v7_partialHydration)for(let x=0;x<p.length;x++){let y=p[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(w=x),y.route.id){let{loaderData:_,errors:E}=i,D=y.route.loader&&_[y.route.id]===void 0&&(!E||E[y.route.id]===void 0);if(y.route.lazy||D){m=!0,w>=0?p=p.slice(0,w+1):p=[p[0]];break}}}return p.reduceRight((x,y,_)=>{let E,D=!1,T=null,O=null;i&&(E=b&&y.route.id?b[y.route.id]:void 0,T=y.route.errorElement||ZG,m&&(w<0&&_===0?(sY("route-fallback",!1),D=!0,O=null):w===_&&(D=!0,O=y.route.hydrateFallbackElement||null)));let I=n.concat(p.slice(0,_+1)),M=()=>{let B;return E?B=T:D?B=O:y.route.Component?B=Z.exports.createElement(y.route.Component,null):y.route.element?B=y.route.element:B=x,A(XG,{match:y,routeContext:{outlet:x,matches:I,isDataRoute:i!=null},children:B})};return i&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?A(JG,{location:i.location,revalidation:i.revalidation,component:T,error:E,children:M(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):M()},null)}var CB=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(CB||{}),Zm=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zm||{});function tY(t){let n=Z.exports.useContext(U0);return n||on(!1),n}function nY(t){let n=Z.exports.useContext(wB);return n||on(!1),n}function rY(t){let n=Z.exports.useContext(So);return n||on(!1),n}function xB(t){let n=rY(),i=n.matches[n.matches.length-1];return i.route.id||on(!1),i.route.id}function iY(){var t;let n=Z.exports.useContext(yB),i=nY(Zm.UseRouteError),s=xB(Zm.UseRouteError);return n!==void 0?n:(t=i.errors)==null?void 0:t[s]}function oY(){let{router:t}=tY(CB.UseNavigateStable),n=xB(Zm.UseNavigateStable),i=Z.exports.useRef(!1);return _B(()=>{i.current=!0}),Z.exports.useCallback(function(d,h){h===void 0&&(h={}),i.current&&(typeof d=="number"?t.navigate(d):t.navigate(d,hf({fromRouteId:n},h)))},[t,n])}const o4={};function sY(t,n,i){!n&&!o4[t]&&(o4[t]=!0)}const aY="startTransition";x_[aY];function Il(t){let{to:n,replace:i,state:s,relative:d}=t;Rd()||on(!1);let{future:h,static:p}=Z.exports.useContext(ps),{matches:b}=Z.exports.useContext(So),{pathname:m}=Zi(),w=AB(),x=bA(n,mA(b,h.v7_relativeSplatPath),m,d==="path"),y=JSON.stringify(x);return Z.exports.useEffect(()=>w(JSON.parse(y),{replace:i,state:s,relative:d}),[w,y,d,i,s]),null}function W0(t){return GG(t.context)}function xn(t){on(!1)}function lY(t){let{basename:n="/",children:i=null,location:s,navigationType:d=Xs.Pop,navigator:h,static:p=!1,future:b}=t;Rd()&&on(!1);let m=n.replace(/^\/*/,"/"),w=Z.exports.useMemo(()=>({basename:m,navigator:h,static:p,future:hf({v7_relativeSplatPath:!1},b)}),[m,b,h,p]);typeof s=="string"&&(s=Bd(s));let{pathname:x="/",search:y="",hash:_="",state:E=null,key:D="default"}=s,T=Z.exports.useMemo(()=>{let O=xd(x,m);return O==null?null:{location:{pathname:O,search:y,hash:_,state:E,key:D},navigationType:d}},[m,x,y,_,E,D,d]);return T==null?null:A(ps.Provider,{value:w,children:A(H0.Provider,{children:i,value:T})})}function cY(t){let{children:n,location:i}=t;return YG(B1(n),i)}new Promise(()=>{});function B1(t,n){n===void 0&&(n=[]);let i=[];return Z.exports.Children.forEach(t,(s,d)=>{if(!Z.exports.isValidElement(s))return;let h=[...n,d];if(s.type===Z.exports.Fragment){i.push.apply(i,B1(s.props.children,h));return}s.type!==xn&&on(!1),!s.props.index||!s.props.children||on(!1);let p={id:s.props.id||h.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(p.children=B1(s.props.children,h)),i.push(p)}),i}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function EB(t,n){if(t==null)return{};var i={},s=Object.keys(t),d,h;for(h=0;h<s.length;h++)d=s[h],!(n.indexOf(d)>=0)&&(i[d]=t[d]);return i}function dY(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uY(t,n){return t.button===0&&(!n||n==="_self")&&!dY(t)}const hY=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],fY=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],pY="6";try{window.__reactRouterVersion=pY}catch{}const gY=Z.exports.createContext({isTransitioning:!1}),mY="startTransition",s4=x_[mY],bY="flushSync";fG[bY];const kY="useId";x_[kY];function vY(t){let{basename:n,children:i,future:s,window:d}=t,h=Z.exports.useRef();h.current==null&&(h.current=pG({window:d,v5Compat:!0}));let p=h.current,[b,m]=Z.exports.useState({action:p.action,location:p.location}),{v7_startTransition:w}=s||{},x=Z.exports.useCallback(y=>{w&&s4?s4(()=>m(y)):m(y)},[m,w]);return Z.exports.useLayoutEffect(()=>p.listen(x),[p,x]),A(lY,{basename:n,children:i,location:b.location,navigationType:b.action,navigator:p,future:s})}const wY=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",yY=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=Z.exports.forwardRef(function(n,i){let{onClick:s,relative:d,reloadDocument:h,replace:p,state:b,target:m,to:w,preventScrollReset:x,unstable_viewTransition:y}=n,_=EB(n,hY),{basename:E}=Z.exports.useContext(ps),D,T=!1;if(typeof w=="string"&&yY.test(w)&&(D=w,wY))try{let B=new URL(window.location.href),z=w.startsWith("//")?new URL(B.protocol+w):new URL(w),U=xd(z.pathname,E);z.origin===B.origin&&U!=null?w=U+z.search+z.hash:T=!0}catch{}let O=HG(w,{relative:d}),I=AY(w,{replace:p,state:b,target:m,preventScrollReset:x,relative:d,unstable_viewTransition:y});function M(B){s&&s(B),B.defaultPrevented||I(B)}return A("a",{..._,href:D||O,onClick:T||h?s:M,ref:i,target:m})}),xc=Z.exports.forwardRef(function(n,i){let{"aria-current":s="page",caseSensitive:d=!1,className:h="",end:p=!1,style:b,to:m,unstable_viewTransition:w,children:x}=n,y=EB(n,fY),_=q0(m,{relative:y.relative}),E=Zi(),D=Z.exports.useContext(wB),{navigator:T,basename:O}=Z.exports.useContext(ps),I=D!=null&&CY(_)&&w===!0,M=T.encodeLocation?T.encodeLocation(_).pathname:_.pathname,B=E.pathname,z=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;d||(B=B.toLowerCase(),z=z?z.toLowerCase():null,M=M.toLowerCase()),z&&O&&(z=xd(z,O)||z);const U=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let q=B===M||!p&&B.startsWith(M)&&B.charAt(U)==="/",H=z!=null&&(z===M||!p&&z.startsWith(M)&&z.charAt(M.length)==="/"),P={isActive:q,isPending:H,isTransitioning:I},Y=q?s:void 0,K;typeof h=="function"?K=h(P):K=[h,q?"active":null,H?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let ee=typeof b=="function"?b(P):b;return A(Ft,{...y,"aria-current":Y,className:K,ref:i,style:ee,to:m,unstable_viewTransition:w,children:typeof x=="function"?x(P):x})});var R1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(R1||(R1={}));var a4;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a4||(a4={}));function _Y(t){let n=Z.exports.useContext(U0);return n||on(!1),n}function AY(t,n){let{target:i,replace:s,state:d,preventScrollReset:h,relative:p,unstable_viewTransition:b}=n===void 0?{}:n,m=AB(),w=Zi(),x=q0(t,{relative:p});return Z.exports.useCallback(y=>{if(uY(y,i)){y.preventDefault();let _=s!==void 0?s:Qm(w)===Qm(x);m(t,{replace:_,state:d,preventScrollReset:h,relative:p,unstable_viewTransition:b})}},[w,m,x,s,d,i,t,h,p,b])}function CY(t,n){n===void 0&&(n={});let i=Z.exports.useContext(gY);i==null&&on(!1);let{basename:s}=_Y(R1.useViewTransitionState),d=q0(t,{relative:n.relative});if(!i.isTransitioning)return!1;let h=xd(i.currentLocation.pathname,s)||i.currentLocation.pathname,p=xd(i.nextLocation.pathname,s)||i.nextLocation.pathname;return P1(d.pathname,p)!=null||P1(d.pathname,h)!=null}function SB(t){var n,i,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var d=t.length;for(n=0;n<d;n++)t[n]&&(i=SB(t[n]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function ea(){for(var t,n,i=0,s="",d=arguments.length;i<d;i++)(t=arguments[i])&&(n=SB(t))&&(s&&(s+=" "),s+=n);return s}const ff=t=>typeof t=="number"&&!isNaN(t),_l=t=>typeof t=="string",Wr=t=>typeof t=="function",gm=t=>_l(t)||Wr(t)?t:null,L1=t=>Z.exports.isValidElement(t)||_l(t)||Wr(t)||ff(t);function xY(t,n,i){i===void 0&&(i=300);const{scrollHeight:s,style:d}=t;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${i}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(n,i)})})}function G0(t){let{enter:n,exit:i,appendPosition:s=!1,collapse:d=!0,collapseDuration:h=300}=t;return function(p){let{children:b,position:m,preventExitTransition:w,done:x,nodeRef:y,isIn:_,playToast:E}=p;const D=s?`${n}--${m}`:n,T=s?`${i}--${m}`:i,O=Z.exports.useRef(0);return Z.exports.useLayoutEffect(()=>{const I=y.current,M=D.split(" "),B=z=>{z.target===y.current&&(E(),I.removeEventListener("animationend",B),I.removeEventListener("animationcancel",B),O.current===0&&z.type!=="animationcancel"&&I.classList.remove(...M))};I.classList.add(...M),I.addEventListener("animationend",B),I.addEventListener("animationcancel",B)},[]),Z.exports.useEffect(()=>{const I=y.current,M=()=>{I.removeEventListener("animationend",M),d?xY(I,x,h):x()};_||(w?M():(O.current=1,I.className+=` ${T}`,I.addEventListener("animationend",M)))},[_]),lt.createElement(lt.Fragment,null,b)}}function l4(t,n){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:n}:{}}const pr=new Map;let pf=[];const z1=new Set,EY=t=>z1.forEach(n=>n(t)),DB=()=>pr.size>0;function TB(t,n){var i;if(n)return!((i=pr.get(n))==null||!i.isToastActive(t));let s=!1;return pr.forEach(d=>{d.isToastActive(t)&&(s=!0)}),s}function MB(t,n){L1(t)&&(DB()||pf.push({content:t,options:n}),pr.forEach(i=>{i.buildToast(t,n)}))}function c4(t,n){pr.forEach(i=>{n!=null&&n!=null&&n.containerId?(n==null?void 0:n.containerId)===i.id&&i.toggle(t,n==null?void 0:n.id):i.toggle(t,n==null?void 0:n.id)})}function SY(t){const{subscribe:n,getSnapshot:i,setProps:s}=Z.exports.useRef(function(h){const p=h.containerId||1;return{subscribe(b){const m=function(x,y,_){let E=1,D=0,T=[],O=[],I=[],M=y;const B=new Map,z=new Set,U=()=>{I=Array.from(B.values()),z.forEach(P=>P())},q=P=>{O=P==null?[]:O.filter(Y=>Y!==P),U()},H=P=>{const{toastId:Y,onOpen:K,updateId:ee,children:ne}=P.props,te=ee==null;P.staleId&&B.delete(P.staleId),B.set(Y,P),O=[...O,P.props.toastId].filter(de=>de!==P.staleId),U(),_(l4(P,te?"added":"updated")),te&&Wr(K)&&K(Z.exports.isValidElement(ne)&&ne.props)};return{id:x,props:M,observe:P=>(z.add(P),()=>z.delete(P)),toggle:(P,Y)=>{B.forEach(K=>{Y!=null&&Y!==K.props.toastId||Wr(K.toggle)&&K.toggle(P)})},removeToast:q,toasts:B,clearQueue:()=>{D-=T.length,T=[]},buildToast:(P,Y)=>{if((Re=>{let{containerId:Fe,toastId:Ve,updateId:Ue}=Re;const We=Fe?Fe!==x:x!==1,je=B.has(Ve)&&Ue==null;return We||je})(Y))return;const{toastId:K,updateId:ee,data:ne,staleId:te,delay:de}=Y,ue=()=>{q(K)},Ee=ee==null;Ee&&D++;const Ce={...M,style:M.toastStyle,key:E++,...Object.fromEntries(Object.entries(Y).filter(Re=>{let[Fe,Ve]=Re;return Ve!=null})),toastId:K,updateId:ee,data:ne,closeToast:ue,isIn:!1,className:gm(Y.className||M.toastClassName),bodyClassName:gm(Y.bodyClassName||M.bodyClassName),progressClassName:gm(Y.progressClassName||M.progressClassName),autoClose:!Y.isLoading&&(oe=Y.autoClose,le=M.autoClose,oe===!1||ff(oe)&&oe>0?oe:le),deleteToast(){const Re=B.get(K),{onClose:Fe,children:Ve}=Re.props;Wr(Fe)&&Fe(Z.exports.isValidElement(Ve)&&Ve.props),_(l4(Re,"removed")),B.delete(K),D--,D<0&&(D=0),T.length>0?H(T.shift()):U()}};var oe,le;Ce.closeButton=M.closeButton,Y.closeButton===!1||L1(Y.closeButton)?Ce.closeButton=Y.closeButton:Y.closeButton===!0&&(Ce.closeButton=!L1(M.closeButton)||M.closeButton);let ge=P;Z.exports.isValidElement(P)&&!_l(P.type)?ge=Z.exports.cloneElement(P,{closeToast:ue,toastProps:Ce,data:ne}):Wr(P)&&(ge=P({closeToast:ue,toastProps:Ce,data:ne}));const Ne={content:ge,props:Ce,staleId:te};M.limit&&M.limit>0&&D>M.limit&&Ee?T.push(Ne):ff(de)?setTimeout(()=>{H(Ne)},de):H(Ne)},setProps(P){M=P},setToggle:(P,Y)=>{B.get(P).toggle=Y},isToastActive:P=>O.some(Y=>Y===P),getSnapshot:()=>M.newestOnTop?I.reverse():I}}(p,h,EY);pr.set(p,m);const w=m.observe(b);return pf.forEach(x=>MB(x.content,x.options)),pf=[],()=>{w(),pr.delete(p)}},setProps(b){var m;(m=pr.get(p))==null||m.setProps(b)},getSnapshot(){var b;return(b=pr.get(p))==null?void 0:b.getSnapshot()}}}(t)).current;s(t);const d=Z.exports.useSyncExternalStore(n,i,i);return{getToastToRender:function(h){if(!d)return[];const p=new Map;return d.forEach(b=>{const{position:m}=b.props;p.has(m)||p.set(m,[]),p.get(m).push(b)}),Array.from(p,b=>h(b[0],b[1]))},isToastActive:TB,count:d==null?void 0:d.length}}function DY(t){const[n,i]=Z.exports.useState(!1),[s,d]=Z.exports.useState(!1),h=Z.exports.useRef(null),p=Z.exports.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:b,pauseOnHover:m,closeToast:w,onClick:x,closeOnClick:y}=t;var _,E;function D(){i(!0)}function T(){i(!1)}function O(B){const z=h.current;p.canDrag&&z&&(p.didMove=!0,n&&T(),p.delta=t.draggableDirection==="x"?B.clientX-p.start:B.clientY-p.start,p.start!==B.clientX&&(p.canCloseOnClick=!1),z.style.transform=`translate3d(${t.draggableDirection==="x"?`${p.delta}px, var(--y)`:`0, calc(${p.delta}px + var(--y))`},0)`,z.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function I(){document.removeEventListener("pointermove",O),document.removeEventListener("pointerup",I);const B=h.current;if(p.canDrag&&p.didMove&&B){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return d(!0),t.closeToast(),void t.collapseAll();B.style.transition="transform 0.2s, opacity 0.2s",B.style.removeProperty("transform"),B.style.removeProperty("opacity")}}(E=pr.get((_={id:t.toastId,containerId:t.containerId,fn:i}).containerId||1))==null||E.setToggle(_.id,_.fn),Z.exports.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",D),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",D),window.removeEventListener("blur",T)}},[t.pauseOnFocusLoss]);const M={onPointerDown:function(B){if(t.draggable===!0||t.draggable===B.pointerType){p.didMove=!1,document.addEventListener("pointermove",O),document.addEventListener("pointerup",I);const z=h.current;p.canCloseOnClick=!0,p.canDrag=!0,z.style.transition="none",t.draggableDirection==="x"?(p.start=B.clientX,p.removalDistance=z.offsetWidth*(t.draggablePercent/100)):(p.start=B.clientY,p.removalDistance=z.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(B){const{top:z,bottom:U,left:q,right:H}=h.current.getBoundingClientRect();B.nativeEvent.type!=="touchend"&&t.pauseOnHover&&B.clientX>=q&&B.clientX<=H&&B.clientY>=z&&B.clientY<=U?T():D()}};return b&&m&&(M.onMouseEnter=T,t.stacked||(M.onMouseLeave=D)),y&&(M.onClick=B=>{x&&x(B),p.canCloseOnClick&&w()}),{playToast:D,pauseToast:T,isRunning:n,preventExitTransition:s,toastRef:h,eventHandlers:M}}function TY(t){let{delay:n,isRunning:i,closeToast:s,type:d="default",hide:h,className:p,style:b,controlledProgress:m,progress:w,rtl:x,isIn:y,theme:_}=t;const E=h||m&&w===0,D={...b,animationDuration:`${n}ms`,animationPlayState:i?"running":"paused"};m&&(D.transform=`scaleX(${w})`);const T=ea("Toastify__progress-bar",m?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":x}),O=Wr(p)?p({rtl:x,type:d,defaultClassName:T}):ea(T,p),I={[m&&w>=1?"onTransitionEnd":"onAnimationEnd"]:m&&w<1?null:()=>{y&&s()}};return V("div",{className:"Toastify__progress-bar--wrp","data-hidden":E,children:[A("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${d}`}),A("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:O,style:D,...I})]})}let MY=1;const NB=()=>""+MY++;function NY(t){return t&&(_l(t.toastId)||ff(t.toastId))?t.toastId:NB()}function Fh(t,n){return MB(t,n),n.toastId}function Jm(t,n){return{...n,type:n&&n.type||t,toastId:NY(n)}}function Ug(t){return(n,i)=>Fh(n,Jm(t,i))}function Ye(t,n){return Fh(t,Jm("default",n))}Ye.loading=(t,n)=>Fh(t,Jm("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...n})),Ye.promise=function(t,n,i){let s,{pending:d,error:h,success:p}=n;d&&(s=_l(d)?Ye.loading(d,i):Ye.loading(d.render,{...i,...d}));const b={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},m=(x,y,_)=>{if(y==null)return void Ye.dismiss(s);const E={type:x,...b,...i,data:_},D=_l(y)?{render:y}:y;return s?Ye.update(s,{...E,...D}):Ye(D.render,{...E,...D}),_},w=Wr(t)?t():t;return w.then(x=>m("success",p,x)).catch(x=>m("error",h,x)),w},Ye.success=Ug("success"),Ye.info=Ug("info"),Ye.error=Ug("error"),Ye.warning=Ug("warning"),Ye.warn=Ye.warning,Ye.dark=(t,n)=>Fh(t,Jm("default",{theme:"dark",...n})),Ye.dismiss=function(t){(function(n){var i;if(DB()){if(n==null||_l(i=n)||ff(i))pr.forEach(s=>{s.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){const s=pr.get(n.containerId);s?s.removeToast(n.id):pr.forEach(d=>{d.removeToast(n.id)})}}else pf=pf.filter(s=>n!=null&&s.options.toastId!==n)})(t)},Ye.clearWaitingQueue=function(t){t===void 0&&(t={}),pr.forEach(n=>{!n.props.limit||t.containerId&&n.id!==t.containerId||n.clearQueue()})},Ye.isActive=TB,Ye.update=function(t,n){n===void 0&&(n={});const i=((s,d)=>{var h;let{containerId:p}=d;return(h=pr.get(p||1))==null?void 0:h.toasts.get(s)})(t,n);if(i){const{props:s,content:d}=i,h={delay:100,...s,...n,toastId:n.toastId||t,updateId:NB()};h.toastId!==t&&(h.staleId=t);const p=h.render||d;delete h.render,Fh(p,h)}},Ye.done=t=>{Ye.update(t,{progress:1})},Ye.onChange=function(t){return z1.add(t),()=>{z1.delete(t)}},Ye.play=t=>c4(!0,t),Ye.pause=t=>c4(!1,t);const IY=typeof window<"u"?Z.exports.useLayoutEffect:Z.exports.useEffect,Hg=t=>{let{theme:n,type:i,isLoading:s,...d}=t;return A("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...d})},ny={info:function(t){return A(Hg,{...t,children:A("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"})})},warning:function(t){return A(Hg,{...t,children:A("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"})})},success:function(t){return A(Hg,{...t,children:A("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"})})},error:function(t){return A(Hg,{...t,children:A("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"})})},spinner:function(){return A("div",{className:"Toastify__spinner"})}},OY=t=>{const{isRunning:n,preventExitTransition:i,toastRef:s,eventHandlers:d,playToast:h}=DY(t),{closeButton:p,children:b,autoClose:m,onClick:w,type:x,hideProgressBar:y,closeToast:_,transition:E,position:D,className:T,style:O,bodyClassName:I,bodyStyle:M,progressClassName:B,progressStyle:z,updateId:U,role:q,progress:H,rtl:P,toastId:Y,deleteToast:K,isIn:ee,isLoading:ne,closeOnClick:te,theme:de}=t,ue=ea("Toastify__toast",`Toastify__toast-theme--${de}`,`Toastify__toast--${x}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":te}),Ee=Wr(T)?T({rtl:P,position:D,type:x,defaultClassName:ue}):ea(ue,T),Ce=function(Ne){let{theme:Re,type:Fe,isLoading:Ve,icon:Ue}=Ne,We=null;const je={theme:Re,type:Fe};return Ue===!1||(Wr(Ue)?We=Ue({...je,isLoading:Ve}):Z.exports.isValidElement(Ue)?We=Z.exports.cloneElement(Ue,je):Ve?We=ny.spinner():(vn=>vn in ny)(Fe)&&(We=ny[Fe](je))),We}(t),oe=!!H||!m,le={closeToast:_,type:x,theme:de};let ge=null;return p===!1||(ge=Wr(p)?p(le):Z.exports.isValidElement(p)?Z.exports.cloneElement(p,le):function(Ne){let{closeToast:Re,theme:Fe,ariaLabel:Ve="close"}=Ne;return A("button",{className:`Toastify__close-button Toastify__close-button--${Fe}`,type:"button",onClick:Ue=>{Ue.stopPropagation(),Re(Ue)},"aria-label":Ve,children:A("svg",{"aria-hidden":"true",viewBox:"0 0 14 16",children:A("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})})})}(le)),lt.createElement(E,{isIn:ee,done:K,position:D,preventExitTransition:i,nodeRef:s,playToast:h},lt.createElement("div",{id:Y,onClick:w,"data-in":ee,className:Ee,...d,style:O,ref:s},V("div",{...ee&&{role:q},className:Wr(I)?I({type:x}):ea("Toastify__toast-body",I),style:M,children:[Ce!=null&&A("div",{className:ea("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ne}),children:Ce}),A("div",{children:b})]}),ge,lt.createElement(TY,{...U&&!oe?{key:`pb-${U}`}:{},rtl:P,theme:de,delay:m,isRunning:n,isIn:ee,closeToast:_,hide:y,type:x,style:z,className:B,controlledProgress:oe,progress:H||0})))},Y0=function(t,n){return n===void 0&&(n=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:n}},kn=G0(Y0("bounce",!0));G0(Y0("slide",!0));G0(Y0("zoom"));G0(Y0("flip"));const PY={position:"top-right",transition:kn,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function BY(t){let n={...PY,...t};const i=t.stacked,[s,d]=Z.exports.useState(!0),h=Z.exports.useRef(null),{getToastToRender:p,isToastActive:b,count:m}=SY(n),{className:w,style:x,rtl:y,containerId:_}=n;function E(T){const O=ea("Toastify__toast-container",`Toastify__toast-container--${T}`,{"Toastify__toast-container--rtl":y});return Wr(w)?w({position:T,rtl:y,defaultClassName:O}):ea(O,gm(w))}function D(){i&&(d(!0),Ye.play())}return IY(()=>{if(i){var T;const O=h.current.querySelectorAll('[data-in="true"]'),I=12,M=(T=n.position)==null?void 0:T.includes("top");let B=0,z=0;Array.from(O).reverse().forEach((U,q)=>{const H=U;H.classList.add("Toastify__toast--stacked"),q>0&&(H.dataset.collapsed=`${s}`),H.dataset.pos||(H.dataset.pos=M?"top":"bot");const P=B*(s?.2:1)+(s?0:I*q);H.style.setProperty("--y",`${M?P:-1*P}px`),H.style.setProperty("--g",`${I}`),H.style.setProperty("--s",""+(1-(s?z:0))),B+=H.offsetHeight,z+=.025})}},[s,m,i]),A("div",{ref:h,className:"Toastify",id:_,onMouseEnter:()=>{i&&(d(!1),Ye.pause())},onMouseLeave:D,children:p((T,O)=>{const I=O.length?{...x}:{...x,pointerEvents:"none"};return A("div",{className:E(T),style:I,children:O.map(M=>{let{content:B,props:z}=M;return Z.exports.createElement(OY,{...z,stacked:i,collapseAll:D,isIn:b(z.toastId,z.containerId),style:z.style,key:`toast-${z.key}`},B)})},`container-${T}`)})})}function d4({children:t,activecondition:n}){const[i,s]=Z.exports.useState(n),d=()=>{s(!i)};return A("li",{className:`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${n&&"bg-slate-900"}`,children:t(d,i)})}const RY=({sidebarOpen:t,setSidebarOpen:n})=>{const i=Zi(),{pathname:s}=i,d=Z.exports.useRef(null),h=Z.exports.useRef(null),p=localStorage.getItem("sidebar-expanded"),[b,m]=Z.exports.useState(p===null?!1:p==="true");return Z.exports.useEffect(()=>{const w=({target:x})=>{!h.current||!d.current||!t||h.current.contains(x)||d.current.contains(x)||n(!1)};return document.addEventListener("click",w),()=>document.removeEventListener("click",w)}),Z.exports.useEffect(()=>{const w=({keyCode:x})=>{!t||x!==27||n(!1)};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)}),Z.exports.useEffect(()=>{localStorage.setItem("sidebar-expanded",b),b?document.querySelector("body").classList.add("sidebar-expanded"):document.querySelector("body").classList.remove("sidebar-expanded")},[b]),V("div",{children:[A("div",{className:`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${t?"opacity-100":"opacity-0 pointer-events-none"}`,"aria-hidden":"true"}),V("div",{id:"sidebar",ref:h,className:`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${t?"translate-x-0":"-translate-x-64"}`,children:[V("div",{className:"flex justify-between mb-10 pr-3 sm:px-2",children:[V("button",{ref:d,className:"lg:hidden text-slate-500 hover:text-slate-400",onClick:()=>n(!t),"aria-controls":"sidebar","aria-expanded":t,children:[A("span",{className:"sr-only",children:"Close sidebar"}),A("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:A("path",{d:"M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"})})]}),A(xc,{end:!0,to:"/",className:"block",children:V("div",{className:"flex flex-row text-center",children:[V("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[V("defs",{children:[V("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a",children:[A("stop",{stopColor:"#A5B4FC",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#A5B4FC",offset:"100%"})]}),V("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b",children:[A("stop",{stopColor:"#38BDF8",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#38BDF8",offset:"100%"})]})]}),A("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),A("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),A("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),A("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})]}),A("span",{className:"text-white font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 my-auto",children:"Home Page"})]})})]}),A("div",{className:"space-y-8",children:V("div",{children:[V("h3",{className:"text-xs uppercase text-slate-500 font-semibold pl-3",children:[A("span",{className:"hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6","aria-hidden":"true",children:"\u2022\u2022\u2022"}),A("span",{className:"lg:hidden lg:sidebar-expanded:block 2xl:block",children:"Main"})]}),V("ul",{className:"mt-3",children:[A("li",{className:`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${s.includes("/dashboard")&&"bg-slate-900"}`,children:A(xc,{end:!0,to:"/dashboard",className:`block text-slate-200 hover:text-white truncate transition duration-150 ${s.includes("/dashboard")&&"hover:text-slate-200"}`,children:V("div",{className:"flex items-center",children:[V("svg",{className:"shrink-0 h-6 w-6",viewBox:"0 0 24 24",children:[A("path",{className:"fill-current text-slate-400 !text-indigo-500",d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"}),A("path",{className:"fill-current text-slate-600 text-indigo-600",d:"M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"}),A("path",{className:"fill-current text-slate-400 text-indigo-200",d:"M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"})]}),A("span",{className:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Dashboard"})]})})}),A(d4,{activecondition:s.includes("employee"),children:(w,x)=>V(lt.Fragment,{children:[A("a",{href:"#0",className:`block text-slate-200 hover:text-white truncate transition duration-150 ${s.includes("community")&&"hover:text-slate-200"}`,onClick:y=>{y.preventDefault(),b?w():m(!0)},children:V("div",{className:"flex items-center justify-between",children:[V("div",{className:"flex items-center",children:[V("svg",{className:"shrink-0 h-6 w-6",viewBox:"0 0 24 24",children:[A("path",{className:`fill-current text-slate-600 ${s.includes("community")&&"text-indigo-500"}`,d:"M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"}),A("path",{className:`fill-current text-slate-400 ${s.includes("community")&&"text-indigo-300"}`,d:"M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"})]}),A("span",{className:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Employee"})]}),A("div",{className:"flex shrink-0 ml-2",children:A("svg",{className:`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${x&&"rotate-180"}`,viewBox:"0 0 12 12",children:A("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"})})})]})}),A("div",{className:"lg:hidden lg:sidebar-expanded:block 2xl:block",children:V("ul",{className:`pl-9 mt-1 ${!x&&"hidden"}`,children:[A("li",{className:"mb-1 last:mb-0",children:A(xc,{end:!0,to:"/employees",className:({isActive:y})=>"block text-slate-400 hover:text-slate-200 transition duration-150 truncate "+(y?"!text-indigo-500":""),children:A("span",{className:"text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Employees - List"})})}),A("li",{className:"mb-1 last:mb-0",children:A(xc,{end:!0,to:"/employees/add",className:({isActive:y})=>"block text-slate-400 hover:text-slate-200 transition duration-150 truncate "+(y?"!text-indigo-500":""),children:A("span",{className:"text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Employees - Add"})})})]})})]})}),A(d4,{activecondition:s.includes("companies"),children:(w,x)=>V(lt.Fragment,{children:[A("a",{href:"#0",className:`block text-slate-200 hover:text-white truncate transition duration-150 ${s.includes("community")&&"hover:text-slate-200"}`,onClick:y=>{y.preventDefault(),b?w():m(!0)},children:V("div",{className:"flex items-center justify-between",children:[V("div",{className:"flex items-center",children:[V("svg",{className:"shrink-0 h-6 w-6",viewBox:"0 0 24 24",children:[A("path",{className:`fill-current text-slate-600 ${s.includes("community")&&"text-indigo-500"}`,d:"M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"}),A("path",{className:`fill-current text-slate-400 ${s.includes("community")&&"text-indigo-300"}`,d:"M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"})]}),A("span",{className:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Companies"})]}),A("div",{className:"flex shrink-0 ml-2",children:A("svg",{className:`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${x&&"rotate-180"}`,viewBox:"0 0 12 12",children:A("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"})})})]})}),A("div",{className:"lg:hidden lg:sidebar-expanded:block 2xl:block",children:V("ul",{className:`pl-9 mt-1 ${!x&&"hidden"}`,children:[A("li",{className:"mb-1 last:mb-0",children:A(xc,{end:!0,to:"/companies",className:({isActive:y})=>"block text-slate-400 hover:text-slate-200 transition duration-150 truncate "+(y?"!text-indigo-500":""),children:A("span",{className:"text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Companies - List"})})}),A("li",{className:"mb-1 last:mb-0",children:A(xc,{end:!0,to:"/employees/add",className:({isActive:y})=>"block text-slate-400 hover:text-slate-200 transition duration-150 truncate "+(y?"!text-indigo-500":""),children:A("span",{className:"text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",children:"Companies - Employees"})})})]})})]})})]})]})}),A("div",{className:"pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto",children:A("div",{className:"px-3 py-2",children:V("button",{onClick:()=>m(!b),children:[A("span",{className:"sr-only",children:"Expand / collapse sidebar"}),V("svg",{className:"w-6 h-6 fill-current sidebar-expanded:rotate-180",viewBox:"0 0 24 24",children:[A("path",{className:"text-slate-400",d:"M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"}),A("path",{className:"text-slate-600",d:"M3 23H1V1h2z"})]})]})})})]})]})};function IB(t,n){if(t==null)return{};var i={},s=Object.keys(t),d,h;for(h=0;h<s.length;h++)d=s[h],!(n.indexOf(d)>=0)&&(i[d]=t[d]);return i}function j1(t,n){return j1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,d){return s.__proto__=d,s},j1(t,n)}function OB(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,j1(t,n)}var _e={exports:{}},LY="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zY=LY,jY=zY;function PB(){}function BB(){}BB.resetWarningCache=PB;var FY=function(){function t(s,d,h,p,b,m){if(m!==jY){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}t.isRequired=t;function n(){return t}var i={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:BB,resetWarningCache:PB};return i.PropTypes=i,i};_e.exports=FY();function $Y(t,n){return t.classList?!!n&&t.classList.contains(n):(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+n+" ")!==-1}function VY(t,n){t.classList?t.classList.add(n):$Y(t,n)||(typeof t.className=="string"?t.className=t.className+" "+n:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+n))}function u4(t,n){return t.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function UY(t,n){t.classList?t.classList.remove(n):typeof t.className=="string"?t.className=u4(t.className,n):t.setAttribute("class",u4(t.className&&t.className.baseVal||"",n))}const h4={disabled:!1},RB=lt.createContext(null);var LB=function(n){return n.scrollTop},xh="unmounted",ll="exited",cl="entering",Tc="entered",F1="exiting",gs=function(t){OB(n,t);function n(s,d){var h;h=t.call(this,s,d)||this;var p=d,b=p&&!p.isMounting?s.enter:s.appear,m;return h.appearStatus=null,s.in?b?(m=ll,h.appearStatus=cl):m=Tc:s.unmountOnExit||s.mountOnEnter?m=xh:m=ll,h.state={status:m},h.nextCallback=null,h}n.getDerivedStateFromProps=function(d,h){var p=d.in;return p&&h.status===xh?{status:ll}:null};var i=n.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(d){var h=null;if(d!==this.props){var p=this.state.status;this.props.in?p!==cl&&p!==Tc&&(h=cl):(p===cl||p===Tc)&&(h=F1)}this.updateStatus(!1,h)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var d=this.props.timeout,h,p,b;return h=p=b=d,d!=null&&typeof d!="number"&&(h=d.exit,p=d.enter,b=d.appear!==void 0?d.appear:p),{exit:h,enter:p,appear:b}},i.updateStatus=function(d,h){if(d===void 0&&(d=!1),h!==null)if(this.cancelNextCallback(),h===cl){if(this.props.unmountOnExit||this.props.mountOnEnter){var p=this.props.nodeRef?this.props.nodeRef.current:Ch.findDOMNode(this);p&&LB(p)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ll&&this.setState({status:xh})},i.performEnter=function(d){var h=this,p=this.props.enter,b=this.context?this.context.isMounting:d,m=this.props.nodeRef?[b]:[Ch.findDOMNode(this),b],w=m[0],x=m[1],y=this.getTimeouts(),_=b?y.appear:y.enter;if(!d&&!p||h4.disabled){this.safeSetState({status:Tc},function(){h.props.onEntered(w)});return}this.props.onEnter(w,x),this.safeSetState({status:cl},function(){h.props.onEntering(w,x),h.onTransitionEnd(_,function(){h.safeSetState({status:Tc},function(){h.props.onEntered(w,x)})})})},i.performExit=function(){var d=this,h=this.props.exit,p=this.getTimeouts(),b=this.props.nodeRef?void 0:Ch.findDOMNode(this);if(!h||h4.disabled){this.safeSetState({status:ll},function(){d.props.onExited(b)});return}this.props.onExit(b),this.safeSetState({status:F1},function(){d.props.onExiting(b),d.onTransitionEnd(p.exit,function(){d.safeSetState({status:ll},function(){d.props.onExited(b)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(d,h){h=this.setNextCallback(h),this.setState(d,h)},i.setNextCallback=function(d){var h=this,p=!0;return this.nextCallback=function(b){p&&(p=!1,h.nextCallback=null,d(b))},this.nextCallback.cancel=function(){p=!1},this.nextCallback},i.onTransitionEnd=function(d,h){this.setNextCallback(h);var p=this.props.nodeRef?this.props.nodeRef.current:Ch.findDOMNode(this),b=d==null&&!this.props.addEndListener;if(!p||b){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[p,this.nextCallback],w=m[0],x=m[1];this.props.addEndListener(w,x)}d!=null&&setTimeout(this.nextCallback,d)},i.render=function(){var d=this.state.status;if(d===xh)return null;var h=this.props,p=h.children;h.in,h.mountOnEnter,h.unmountOnExit,h.appear,h.enter,h.exit,h.timeout,h.addEndListener,h.onEnter,h.onEntering,h.onEntered,h.onExit,h.onExiting,h.onExited,h.nodeRef;var b=IB(h,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return A(RB.Provider,{value:null,children:typeof p=="function"?p(d,b):lt.cloneElement(lt.Children.only(p),b)})},n}(lt.Component);gs.contextType=RB;gs.propTypes={};function Ec(){}gs.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ec,onEntering:Ec,onEntered:Ec,onExit:Ec,onExiting:Ec,onExited:Ec};gs.UNMOUNTED=xh;gs.EXITED=ll;gs.ENTERING=cl;gs.ENTERED=Tc;gs.EXITING=F1;const HY=gs;var qY=function(n,i){return n&&i&&i.split(" ").forEach(function(s){return VY(n,s)})},ry=function(n,i){return n&&i&&i.split(" ").forEach(function(s){return UY(n,s)})},vA=function(t){OB(n,t);function n(){for(var s,d=arguments.length,h=new Array(d),p=0;p<d;p++)h[p]=arguments[p];return s=t.call.apply(t,[this].concat(h))||this,s.appliedClasses={appear:{},enter:{},exit:{}},s.onEnter=function(b,m){var w=s.resolveArguments(b,m),x=w[0],y=w[1];s.removeClasses(x,"exit"),s.addClass(x,y?"appear":"enter","base"),s.props.onEnter&&s.props.onEnter(b,m)},s.onEntering=function(b,m){var w=s.resolveArguments(b,m),x=w[0],y=w[1],_=y?"appear":"enter";s.addClass(x,_,"active"),s.props.onEntering&&s.props.onEntering(b,m)},s.onEntered=function(b,m){var w=s.resolveArguments(b,m),x=w[0],y=w[1],_=y?"appear":"enter";s.removeClasses(x,_),s.addClass(x,_,"done"),s.props.onEntered&&s.props.onEntered(b,m)},s.onExit=function(b){var m=s.resolveArguments(b),w=m[0];s.removeClasses(w,"appear"),s.removeClasses(w,"enter"),s.addClass(w,"exit","base"),s.props.onExit&&s.props.onExit(b)},s.onExiting=function(b){var m=s.resolveArguments(b),w=m[0];s.addClass(w,"exit","active"),s.props.onExiting&&s.props.onExiting(b)},s.onExited=function(b){var m=s.resolveArguments(b),w=m[0];s.removeClasses(w,"exit"),s.addClass(w,"exit","done"),s.props.onExited&&s.props.onExited(b)},s.resolveArguments=function(b,m){return s.props.nodeRef?[s.props.nodeRef.current,b]:[b,m]},s.getClassNames=function(b){var m=s.props.classNames,w=typeof m=="string",x=w&&m?m+"-":"",y=w?""+x+b:m[b],_=w?y+"-active":m[b+"Active"],E=w?y+"-done":m[b+"Done"];return{baseClassName:y,activeClassName:_,doneClassName:E}},s}var i=n.prototype;return i.addClass=function(d,h,p){var b=this.getClassNames(h)[p+"ClassName"],m=this.getClassNames("enter"),w=m.doneClassName;h==="appear"&&p==="done"&&w&&(b+=" "+w),p==="active"&&d&&LB(d),b&&(this.appliedClasses[h][p]=b,qY(d,b))},i.removeClasses=function(d,h){var p=this.appliedClasses[h],b=p.base,m=p.active,w=p.done;this.appliedClasses[h]={},b&&ry(d,b),m&&ry(d,m),w&&ry(d,w)},i.render=function(){var d=this.props;d.classNames;var h=IB(d,["classNames"]);return A(HY,{...h,onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})},n}(lt.Component);vA.defaultProps={classNames:""};vA.propTypes={};const WY=vA,f4=lt.createContext({parent:{}});function GY(){const t=Z.exports.useRef(!0);return Z.exports.useEffect(()=>{t.current=!1},[]),t.current}function p4({show:t,enter:n="",enterStart:i="",enterEnd:s="",leave:d="",leaveStart:h="",leaveEnd:p="",appear:b,unmountOnExit:m,tag:w="div",children:x,...y}){const _=n.split(" ").filter(H=>H.length),E=i.split(" ").filter(H=>H.length),D=s.split(" ").filter(H=>H.length),T=d.split(" ").filter(H=>H.length),O=h.split(" ").filter(H=>H.length),I=p.split(" ").filter(H=>H.length),M=m;function B(H,P){P.length&&H.classList.add(...P)}function z(H,P){P.length&&H.classList.remove(...P)}const U=lt.useRef(null);return A(WY,{appear:b,nodeRef:U,unmountOnExit:M,in:t,addEndListener:H=>{U.current.addEventListener("transitionend",H,!1)},onEnter:()=>{M||(U.current.style.display=null),B(U.current,[..._,...E])},onEntering:()=>{z(U.current,E),B(U.current,D)},onEntered:()=>{z(U.current,[...D,..._])},onExit:()=>{B(U.current,[...T,...O])},onExiting:()=>{z(U.current,O),B(U.current,I)},onExited:()=>{z(U.current,[...I,...T]),M||(U.current.style.display="none")},children:A(w,{ref:U,...y,style:{display:M?null:"none"},children:x})})}function Ed({show:t,appear:n,...i}){const{parent:s}=Z.exports.useContext(f4),d=GY();return t===void 0?A(p4,{appear:s.appear||!s.isInitialRender,show:s.show,...i}):A(f4.Provider,{value:{parent:{show:t,isInitialRender:d,appear:n}},children:A(p4,{appear:n,show:t,...i})})}function YY({id:t,searchId:n,modalOpen:i,setModalOpen:s}){const d=Z.exports.useRef(null),h=Z.exports.useRef(null);return Z.exports.useEffect(()=>{const p=({target:b})=>{!i||d.current.contains(b)||s(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)}),Z.exports.useEffect(()=>{const p=({keyCode:b})=>{!i||b!==27||s(!1)};return document.addEventListener("keydown",p),()=>document.removeEventListener("keydown",p)}),Z.exports.useEffect(()=>{i&&h.current.focus()},[i]),V(Dt,{children:[A(Ed,{className:"fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",show:i,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),A(Ed,{id:t,className:"fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6",role:"dialog","aria-modal":"true",show:i,enter:"transition ease-in-out duration-200",enterStart:"opacity-0 translate-y-4",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-200",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 translate-y-4",children:V("div",{ref:d,className:"bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg",children:[A("form",{className:"border-b border-slate-200",children:V("div",{className:"relative",children:[A("label",{htmlFor:n,className:"sr-only",children:"Search"}),A("input",{id:n,className:"w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4",type:"search",placeholder:"Search Anything\u2026",ref:h}),A("button",{className:"absolute inset-0 right-auto group",type:"submit","aria-label":"Search",children:V("svg",{className:"w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[A("path",{d:"M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"}),A("path",{d:"M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"})]})})]})}),V("div",{className:"py-4 px-2",children:[V("div",{className:"mb-3 last:mb-0",children:[A("div",{className:"text-xs font-semibold text-slate-400 uppercase px-2 mb-2",children:"Recent searches"}),V("ul",{className:"text-sm",children:[A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Form Builder - 23 hours on-demand video"})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Access Mosaic on mobile and TV"})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Product Update - Q4 2021"})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Master Digital Marketing Strategy course"})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Dedicated forms for products"})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z"})}),A("span",{children:"Product Update - Q4 2021"})]})})]})]}),V("div",{className:"mb-3 last:mb-0",children:[A("div",{className:"text-xs font-semibold text-slate-400 uppercase px-2 mb-2",children:"Recent pages"}),V("ul",{className:"text-sm",children:[A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"})}),V("span",{children:[A("span",{className:"font-medium text-slate-800 group-hover:text-white",children:"Messages"})," - Conversation / \u2026 / Mike Mills"]})]})}),A("li",{children:V(Ft,{className:"flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group",to:"#0",onClick:()=>s(!i),children:[A("svg",{className:"w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z"})}),V("span",{children:[A("span",{className:"font-medium text-slate-800 group-hover:text-white",children:"Messages"})," - Conversation / \u2026 / Eva Patrick"]})]})})]})]})]})]})})]})}function KY({align:t}){const[n,i]=Z.exports.useState(!1),s=Z.exports.useRef(null),d=Z.exports.useRef(null);return Z.exports.useEffect(()=>{const h=({target:p})=>{!d.current||!n||d.current.contains(p)||s.current.contains(p)||i(!1)};return document.addEventListener("click",h),()=>document.removeEventListener("click",h)}),Z.exports.useEffect(()=>{const h=({keyCode:p})=>{!n||p!==27||i(!1)};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)}),V("div",{className:"relative inline-flex",children:[V("button",{ref:s,className:`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${n&&"bg-slate-200"}`,"aria-haspopup":"true",onClick:()=>i(!n),"aria-expanded":n,children:[A("span",{className:"sr-only",children:"Notifications"}),V("svg",{className:"w-4 h-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[A("path",{className:"fill-current text-slate-500",d:"M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"}),A("path",{className:"fill-current text-slate-400",d:"M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"})]}),A("div",{className:"absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"})]}),A(Ed,{className:`origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${t==="right"?"right-0":"left-0"}`,show:n,enter:"transition ease-out duration-200 transform",enterStart:"opacity-0 -translate-y-2",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveStart:"opacity-100",leaveEnd:"opacity-0",children:V("div",{ref:d,onFocus:()=>i(!0),onBlur:()=>i(!1),children:[A("div",{className:"text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4",children:"Notifications"}),V("ul",{children:[A("li",{className:"border-b border-slate-200 last:border-0",children:V(Ft,{className:"block py-2 px-4 hover:bg-slate-50",to:"#0",onClick:()=>i(!n),children:[V("span",{className:"block text-sm mb-2",children:["\u{1F4E3} ",A("span",{className:"font-medium text-slate-800",children:"Edit your information in a swipe"})," Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]}),A("span",{className:"block text-xs font-medium text-slate-400",children:"Feb 12, 2021"})]})}),A("li",{className:"border-b border-slate-200 last:border-0",children:V(Ft,{className:"block py-2 px-4 hover:bg-slate-50",to:"#0",onClick:()=>i(!n),children:[V("span",{className:"block text-sm mb-2",children:["\u{1F4E3} ",A("span",{className:"font-medium text-slate-800",children:"Edit your information in a swipe"})," Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]}),A("span",{className:"block text-xs font-medium text-slate-400",children:"Feb 9, 2021"})]})}),A("li",{className:"border-b border-slate-200 last:border-0",children:V(Ft,{className:"block py-2 px-4 hover:bg-slate-50",to:"#0",onClick:()=>i(!n),children:[V("span",{className:"block text-sm mb-2",children:["\u{1F680}",A("span",{className:"font-medium text-slate-800",children:"Say goodbye to paper receipts!"})," Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]}),A("span",{className:"block text-xs font-medium text-slate-400",children:"Jan 24, 2020"})]})})]})]})})]})}const QY="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC";function Qn(t){for(var n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];throw Error("[Immer] minified error nr: "+t+(i.length?" "+i.map(function(d){return"'"+d+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Gi(t){return!!t&&!!t[Wt]}function Yi(t){var n;return!!t&&(function(i){if(!i||typeof i!="object")return!1;var s=Object.getPrototypeOf(i);if(s===null)return!0;var d=Object.hasOwnProperty.call(s,"constructor")&&s.constructor;return d===Object||typeof d=="function"&&Function.toString.call(d)===oK}(t)||Array.isArray(t)||!!t[$h]||!!(!((n=t.constructor)===null||n===void 0)&&n[$h])||K0(t)||Q0(t))}function ZY(t){return Gi(t)||Qn(23,t),t[Wt].t}function va(t,n,i){i===void 0&&(i=!1),wa(t)===0?(i?Object.keys:pd)(t).forEach(function(s){i&&typeof s=="symbol"||n(s,t[s],t)}):t.forEach(function(s,d){return n(d,s,t)})}function wa(t){var n=t[Wt];return n?n.i>3?n.i-4:n.i:Array.isArray(t)?1:K0(t)?2:Q0(t)?3:0}function fa(t,n){return wa(t)===2?t.has(n):Object.prototype.hasOwnProperty.call(t,n)}function mm(t,n){return wa(t)===2?t.get(n):t[n]}function zB(t,n,i){var s=wa(t);s===2?t.set(n,i):s===3?t.add(i):t[n]=i}function jB(t,n){return t===n?t!==0||1/t==1/n:t!=t&&n!=n}function K0(t){return rK&&t instanceof Map}function Q0(t){return iK&&t instanceof Set}function dl(t){return t.o||t.t}function wA(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var n=$B(t);delete n[Wt];for(var i=pd(n),s=0;s<i.length;s++){var d=i[s],h=n[d];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(n[d]={configurable:!0,writable:!0,enumerable:h.enumerable,value:t[d]})}return Object.create(Object.getPrototypeOf(t),n)}function yA(t,n){return n===void 0&&(n=!1),_A(t)||Gi(t)||!Yi(t)||(wa(t)>1&&(t.set=t.add=t.clear=t.delete=JY),Object.freeze(t),n&&va(t,function(i,s){return yA(s,!0)},!0)),t}function JY(){Qn(2)}function _A(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function Ao(t){var n=H1[t];return n||Qn(18,t),n}function FB(t,n){H1[t]||(H1[t]=n)}function $1(){return gf}function iy(t,n){n&&(Ao("Patches"),t.u=[],t.s=[],t.v=n)}function Xm(t){V1(t),t.p.forEach(XY),t.p=null}function V1(t){t===gf&&(gf=t.l)}function g4(t){return gf={p:[],l:gf,h:t,m:!0,_:0}}function XY(t){var n=t[Wt];n.i===0||n.i===1?n.j():n.g=!0}function oy(t,n){n._=n.p.length;var i=n.p[0],s=t!==void 0&&t!==i;return n.h.O||Ao("ES5").S(n,t,s),s?(i[Wt].P&&(Xm(n),Qn(4)),Yi(t)&&(t=e0(n,t),n.l||t0(n,t)),n.u&&Ao("Patches").M(i[Wt].t,t,n.u,n.s)):t=e0(n,i,[]),Xm(n),n.u&&n.v(n.u,n.s),t!==CA?t:void 0}function e0(t,n,i){if(_A(n))return n;var s=n[Wt];if(!s)return va(n,function(b,m){return m4(t,s,n,b,m,i)},!0),n;if(s.A!==t)return n;if(!s.P)return t0(t,s.t,!0),s.t;if(!s.I){s.I=!0,s.A._--;var d=s.i===4||s.i===5?s.o=wA(s.k):s.o,h=d,p=!1;s.i===3&&(h=new Set(d),d.clear(),p=!0),va(h,function(b,m){return m4(t,s,d,b,m,i,p)}),t0(t,d,!1),i&&t.u&&Ao("Patches").N(s,i,t.u,t.s)}return s.o}function m4(t,n,i,s,d,h,p){if(Gi(d)){var b=e0(t,d,h&&n&&n.i!==3&&!fa(n.R,s)?h.concat(s):void 0);if(zB(i,s,b),!Gi(b))return;t.m=!1}else p&&i.add(d);if(Yi(d)&&!_A(d)){if(!t.h.D&&t._<1)return;e0(t,d),n&&n.A.l||t0(t,d)}}function t0(t,n,i){i===void 0&&(i=!1),!t.l&&t.h.D&&t.m&&yA(n,i)}function sy(t,n){var i=t[Wt];return(i?dl(i):t)[n]}function b4(t,n){if(n in t)for(var i=Object.getPrototypeOf(t);i;){var s=Object.getOwnPropertyDescriptor(i,n);if(s)return s;i=Object.getPrototypeOf(i)}}function Qs(t){t.P||(t.P=!0,t.l&&Qs(t.l))}function ay(t){t.o||(t.o=wA(t.t))}function U1(t,n,i){var s=K0(n)?Ao("MapSet").F(n,i):Q0(n)?Ao("MapSet").T(n,i):t.O?function(d,h){var p=Array.isArray(d),b={i:p?1:0,A:h?h.A:$1(),P:!1,I:!1,R:{},l:h,t:d,k:null,o:null,j:null,C:!1},m=b,w=mf;p&&(m=[b],w=Eh);var x=Proxy.revocable(m,w),y=x.revoke,_=x.proxy;return b.k=_,b.j=y,_}(n,i):Ao("ES5").J(n,i);return(i?i.A:$1()).p.push(s),s}function eK(t){return Gi(t)||Qn(22,t),function n(i){if(!Yi(i))return i;var s,d=i[Wt],h=wa(i);if(d){if(!d.P&&(d.i<4||!Ao("ES5").K(d)))return d.t;d.I=!0,s=k4(i,h),d.I=!1}else s=k4(i,h);return va(s,function(p,b){d&&mm(d.t,p)===b||zB(s,p,n(b))}),h===3?new Set(s):s}(t)}function k4(t,n){switch(n){case 2:return new Map(t);case 3:return Array.from(t)}return wA(t)}function tK(){function t(h,p){var b=d[h];return b?b.enumerable=p:d[h]=b={configurable:!0,enumerable:p,get:function(){var m=this[Wt];return mf.get(m,h)},set:function(m){var w=this[Wt];mf.set(w,h,m)}},b}function n(h){for(var p=h.length-1;p>=0;p--){var b=h[p][Wt];if(!b.P)switch(b.i){case 5:s(b)&&Qs(b);break;case 4:i(b)&&Qs(b)}}}function i(h){for(var p=h.t,b=h.k,m=pd(b),w=m.length-1;w>=0;w--){var x=m[w];if(x!==Wt){var y=p[x];if(y===void 0&&!fa(p,x))return!0;var _=b[x],E=_&&_[Wt];if(E?E.t!==y:!jB(_,y))return!0}}var D=!!p[Wt];return m.length!==pd(p).length+(D?0:1)}function s(h){var p=h.k;if(p.length!==h.t.length)return!0;var b=Object.getOwnPropertyDescriptor(p,p.length-1);if(b&&!b.get)return!0;for(var m=0;m<p.length;m++)if(!p.hasOwnProperty(m))return!0;return!1}var d={};FB("ES5",{J:function(h,p){var b=Array.isArray(h),m=function(x,y){if(x){for(var _=Array(y.length),E=0;E<y.length;E++)Object.defineProperty(_,""+E,t(E,!0));return _}var D=$B(y);delete D[Wt];for(var T=pd(D),O=0;O<T.length;O++){var I=T[O];D[I]=t(I,x||!!D[I].enumerable)}return Object.create(Object.getPrototypeOf(y),D)}(b,h),w={i:b?5:4,A:p?p.A:$1(),P:!1,I:!1,R:{},l:p,t:h,k:m,o:null,g:!1,C:!1};return Object.defineProperty(m,Wt,{value:w,writable:!0}),m},S:function(h,p,b){b?Gi(p)&&p[Wt].A===h&&n(h.p):(h.u&&function m(w){if(w&&typeof w=="object"){var x=w[Wt];if(x){var y=x.t,_=x.k,E=x.R,D=x.i;if(D===4)va(_,function(B){B!==Wt&&(y[B]!==void 0||fa(y,B)?E[B]||m(_[B]):(E[B]=!0,Qs(x)))}),va(y,function(B){_[B]!==void 0||fa(_,B)||(E[B]=!1,Qs(x))});else if(D===5){if(s(x)&&(Qs(x),E.length=!0),_.length<y.length)for(var T=_.length;T<y.length;T++)E[T]=!1;else for(var O=y.length;O<_.length;O++)E[O]=!0;for(var I=Math.min(_.length,y.length),M=0;M<I;M++)_.hasOwnProperty(M)||(E[M]=!0),E[M]===void 0&&m(_[M])}}}}(h.p[0]),n(h.p))},K:function(h){return h.i===4?i(h):s(h)}})}function nK(){function t(s){if(!Yi(s))return s;if(Array.isArray(s))return s.map(t);if(K0(s))return new Map(Array.from(s.entries()).map(function(p){return[p[0],t(p[1])]}));if(Q0(s))return new Set(Array.from(s).map(t));var d=Object.create(Object.getPrototypeOf(s));for(var h in s)d[h]=t(s[h]);return fa(s,$h)&&(d[$h]=s[$h]),d}function n(s){return Gi(s)?t(s):s}var i="add";FB("Patches",{$:function(s,d){return d.forEach(function(h){for(var p=h.path,b=h.op,m=s,w=0;w<p.length-1;w++){var x=wa(m),y=p[w];typeof y!="string"&&typeof y!="number"&&(y=""+y),x!==0&&x!==1||y!=="__proto__"&&y!=="constructor"||Qn(24),typeof m=="function"&&y==="prototype"&&Qn(24),typeof(m=mm(m,y))!="object"&&Qn(15,p.join("/"))}var _=wa(m),E=t(h.value),D=p[p.length-1];switch(b){case"replace":switch(_){case 2:return m.set(D,E);case 3:Qn(16);default:return m[D]=E}case i:switch(_){case 1:return D==="-"?m.push(E):m.splice(D,0,E);case 2:return m.set(D,E);case 3:return m.add(E);default:return m[D]=E}case"remove":switch(_){case 1:return m.splice(D,1);case 2:return m.delete(D);case 3:return m.delete(h.value);default:return delete m[D]}default:Qn(17,b)}}),s},N:function(s,d,h,p){switch(s.i){case 0:case 4:case 2:return function(b,m,w,x){var y=b.t,_=b.o;va(b.R,function(E,D){var T=mm(y,E),O=mm(_,E),I=D?fa(y,E)?"replace":i:"remove";if(T!==O||I!=="replace"){var M=m.concat(E);w.push(I==="remove"?{op:I,path:M}:{op:I,path:M,value:O}),x.push(I===i?{op:"remove",path:M}:I==="remove"?{op:i,path:M,value:n(T)}:{op:"replace",path:M,value:n(T)})}})}(s,d,h,p);case 5:case 1:return function(b,m,w,x){var y=b.t,_=b.R,E=b.o;if(E.length<y.length){var D=[E,y];y=D[0],E=D[1];var T=[x,w];w=T[0],x=T[1]}for(var O=0;O<y.length;O++)if(_[O]&&E[O]!==y[O]){var I=m.concat([O]);w.push({op:"replace",path:I,value:n(E[O])}),x.push({op:"replace",path:I,value:n(y[O])})}for(var M=y.length;M<E.length;M++){var B=m.concat([M]);w.push({op:i,path:B,value:n(E[M])})}y.length<E.length&&x.push({op:"replace",path:m.concat(["length"]),value:y.length})}(s,d,h,p);case 3:return function(b,m,w,x){var y=b.t,_=b.o,E=0;y.forEach(function(D){if(!_.has(D)){var T=m.concat([E]);w.push({op:"remove",path:T,value:D}),x.unshift({op:i,path:T,value:D})}E++}),E=0,_.forEach(function(D){if(!y.has(D)){var T=m.concat([E]);w.push({op:i,path:T,value:D}),x.unshift({op:"remove",path:T,value:D})}E++})}(s,d,h,p)}},M:function(s,d,h,p){h.push({op:"replace",path:[],value:d===CA?void 0:d}),p.push({op:"replace",path:[],value:s})}})}var v4,gf,AA=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",rK=typeof Map<"u",iK=typeof Set<"u",w4=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",CA=AA?Symbol.for("immer-nothing"):((v4={})["immer-nothing"]=!0,v4),$h=AA?Symbol.for("immer-draftable"):"__$immer_draftable",Wt=AA?Symbol.for("immer-state"):"__$immer_state",oK=""+Object.prototype.constructor,pd=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,$B=Object.getOwnPropertyDescriptors||function(t){var n={};return pd(t).forEach(function(i){n[i]=Object.getOwnPropertyDescriptor(t,i)}),n},H1={},mf={get:function(t,n){if(n===Wt)return t;var i=dl(t);if(!fa(i,n))return function(d,h,p){var b,m=b4(h,p);return m?"value"in m?m.value:(b=m.get)===null||b===void 0?void 0:b.call(d.k):void 0}(t,i,n);var s=i[n];return t.I||!Yi(s)?s:s===sy(t.t,n)?(ay(t),t.o[n]=U1(t.A.h,s,t)):s},has:function(t,n){return n in dl(t)},ownKeys:function(t){return Reflect.ownKeys(dl(t))},set:function(t,n,i){var s=b4(dl(t),n);if(s!=null&&s.set)return s.set.call(t.k,i),!0;if(!t.P){var d=sy(dl(t),n),h=d==null?void 0:d[Wt];if(h&&h.t===i)return t.o[n]=i,t.R[n]=!1,!0;if(jB(i,d)&&(i!==void 0||fa(t.t,n)))return!0;ay(t),Qs(t)}return t.o[n]===i&&(i!==void 0||n in t.o)||Number.isNaN(i)&&Number.isNaN(t.o[n])||(t.o[n]=i,t.R[n]=!0),!0},deleteProperty:function(t,n){return sy(t.t,n)!==void 0||n in t.t?(t.R[n]=!1,ay(t),Qs(t)):delete t.R[n],t.o&&delete t.o[n],!0},getOwnPropertyDescriptor:function(t,n){var i=dl(t),s=Reflect.getOwnPropertyDescriptor(i,n);return s&&{writable:!0,configurable:t.i!==1||n!=="length",enumerable:s.enumerable,value:i[n]}},defineProperty:function(){Qn(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){Qn(12)}},Eh={};va(mf,function(t,n){Eh[t]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}}),Eh.deleteProperty=function(t,n){return Eh.set.call(this,t,n,void 0)},Eh.set=function(t,n,i){return mf.set.call(this,t[0],n,i,t[0])};var sK=function(){function t(i){var s=this;this.O=w4,this.D=!0,this.produce=function(d,h,p){if(typeof d=="function"&&typeof h!="function"){var b=h;h=d;var m=s;return function(T){var O=this;T===void 0&&(T=b);for(var I=arguments.length,M=Array(I>1?I-1:0),B=1;B<I;B++)M[B-1]=arguments[B];return m.produce(T,function(z){var U;return(U=h).call.apply(U,[O,z].concat(M))})}}var w;if(typeof h!="function"&&Qn(6),p!==void 0&&typeof p!="function"&&Qn(7),Yi(d)){var x=g4(s),y=U1(s,d,void 0),_=!0;try{w=h(y),_=!1}finally{_?Xm(x):V1(x)}return typeof Promise<"u"&&w instanceof Promise?w.then(function(T){return iy(x,p),oy(T,x)},function(T){throw Xm(x),T}):(iy(x,p),oy(w,x))}if(!d||typeof d!="object"){if((w=h(d))===void 0&&(w=d),w===CA&&(w=void 0),s.D&&yA(w,!0),p){var E=[],D=[];Ao("Patches").M(d,w,E,D),p(E,D)}return w}Qn(21,d)},this.produceWithPatches=function(d,h){if(typeof d=="function")return function(w){for(var x=arguments.length,y=Array(x>1?x-1:0),_=1;_<x;_++)y[_-1]=arguments[_];return s.produceWithPatches(w,function(E){return d.apply(void 0,[E].concat(y))})};var p,b,m=s.produce(d,h,function(w,x){p=w,b=x});return typeof Promise<"u"&&m instanceof Promise?m.then(function(w){return[w,p,b]}):[m,p,b]},typeof(i==null?void 0:i.useProxies)=="boolean"&&this.setUseProxies(i.useProxies),typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze)}var n=t.prototype;return n.createDraft=function(i){Yi(i)||Qn(8),Gi(i)&&(i=eK(i));var s=g4(this),d=U1(this,i,void 0);return d[Wt].C=!0,V1(s),d},n.finishDraft=function(i,s){var d=i&&i[Wt],h=d.A;return iy(h,s),oy(void 0,h)},n.setAutoFreeze=function(i){this.D=i},n.setUseProxies=function(i){i&&!w4&&Qn(20),this.O=i},n.applyPatches=function(i,s){var d;for(d=s.length-1;d>=0;d--){var h=s[d];if(h.path.length===0&&h.op==="replace"){i=h.value;break}}d>-1&&(s=s.slice(d+1));var p=Ao("Patches").$;return Gi(i)?p(i,s):this.produce(i,function(b){return p(b,s)})},t}(),Qr=new sK,Bf=Qr.produce,VB=Qr.produceWithPatches.bind(Qr);Qr.setAutoFreeze.bind(Qr);Qr.setUseProxies.bind(Qr);var y4=Qr.applyPatches.bind(Qr);Qr.createDraft.bind(Qr);Qr.finishDraft.bind(Qr);function bf(t){return bf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bf(t)}function aK(t,n){if(bf(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var s=i.call(t,n||"default");if(bf(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function lK(t){var n=aK(t,"string");return bf(n)=="symbol"?n:n+""}function cK(t,n,i){return n=lK(n),n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function _4(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(t,d).enumerable})),i.push.apply(i,s)}return i}function A4(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?_4(Object(i),!0).forEach(function(s){cK(t,s,i[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_4(Object(i)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(i,s))})}return t}function or(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var C4=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ly=function(){return Math.random().toString(36).substring(7).split("").join(".")},n0={INIT:"@@redux/INIT"+ly(),REPLACE:"@@redux/REPLACE"+ly(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ly()}};function dK(t){if(typeof t!="object"||t===null)return!1;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}function UB(t,n,i){var s;if(typeof n=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(or(0));if(typeof n=="function"&&typeof i>"u"&&(i=n,n=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(or(1));return i(UB)(t,n)}if(typeof t!="function")throw new Error(or(2));var d=t,h=n,p=[],b=p,m=!1;function w(){b===p&&(b=p.slice())}function x(){if(m)throw new Error(or(3));return h}function y(T){if(typeof T!="function")throw new Error(or(4));if(m)throw new Error(or(5));var O=!0;return w(),b.push(T),function(){if(!!O){if(m)throw new Error(or(6));O=!1,w();var M=b.indexOf(T);b.splice(M,1),p=null}}}function _(T){if(!dK(T))throw new Error(or(7));if(typeof T.type>"u")throw new Error(or(8));if(m)throw new Error(or(9));try{m=!0,h=d(h,T)}finally{m=!1}for(var O=p=b,I=0;I<O.length;I++){var M=O[I];M()}return T}function E(T){if(typeof T!="function")throw new Error(or(10));d=T,_({type:n0.REPLACE})}function D(){var T,O=y;return T={subscribe:function(M){if(typeof M!="object"||M===null)throw new Error(or(11));function B(){M.next&&M.next(x())}B();var z=O(B);return{unsubscribe:z}}},T[C4]=function(){return this},T}return _({type:n0.INIT}),s={dispatch:_,subscribe:y,getState:x,replaceReducer:E},s[C4]=D,s}function uK(t){Object.keys(t).forEach(function(n){var i=t[n],s=i(void 0,{type:n0.INIT});if(typeof s>"u")throw new Error(or(12));if(typeof i(void 0,{type:n0.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(or(13))})}function HB(t){for(var n=Object.keys(t),i={},s=0;s<n.length;s++){var d=n[s];typeof t[d]=="function"&&(i[d]=t[d])}var h=Object.keys(i),p;try{uK(i)}catch(b){p=b}return function(m,w){if(m===void 0&&(m={}),p)throw p;for(var x=!1,y={},_=0;_<h.length;_++){var E=h[_],D=i[E],T=m[E],O=D(T,w);if(typeof O>"u")throw w&&w.type,new Error(or(14));y[E]=O,x=x||O!==T}return x=x||h.length!==Object.keys(m).length,x?y:m}}function r0(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.length===0?function(s){return s}:n.length===1?n[0]:n.reduce(function(s,d){return function(){return s(d.apply(void 0,arguments))}})}function hK(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return function(){var d=s.apply(void 0,arguments),h=function(){throw new Error(or(15))},p={getState:d.getState,dispatch:function(){return h.apply(void 0,arguments)}},b=n.map(function(m){return m(p)});return h=r0.apply(void 0,b)(d.dispatch),A4(A4({},d),{},{dispatch:h})}}}var i0="NOT_FOUND";function fK(t){var n;return{get:function(s){return n&&t(n.key,s)?n.value:i0},put:function(s,d){n={key:s,value:d}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}function pK(t,n){var i=[];function s(b){var m=i.findIndex(function(x){return n(b,x.key)});if(m>-1){var w=i[m];return m>0&&(i.splice(m,1),i.unshift(w)),w.value}return i0}function d(b,m){s(b)===i0&&(i.unshift({key:b,value:m}),i.length>t&&i.pop())}function h(){return i}function p(){i=[]}return{get:s,put:d,getEntries:h,clear:p}}var gK=function(n,i){return n===i};function mK(t){return function(i,s){if(i===null||s===null||i.length!==s.length)return!1;for(var d=i.length,h=0;h<d;h++)if(!t(i[h],s[h]))return!1;return!0}}function q1(t,n){var i=typeof n=="object"?n:{equalityCheck:n},s=i.equalityCheck,d=s===void 0?gK:s,h=i.maxSize,p=h===void 0?1:h,b=i.resultEqualityCheck,m=mK(d),w=p===1?fK(m):pK(p,m);function x(){var y=w.get(arguments);if(y===i0){if(y=t.apply(null,arguments),b){var _=w.getEntries(),E=_.find(function(D){return b(D.value,y)});E&&(y=E.value)}w.put(arguments,y)}return y}return x.clearCache=function(){return w.clear()},x}function bK(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every(function(s){return typeof s=="function"})){var i=n.map(function(s){return typeof s=="function"?"function "+(s.name||"unnamed")+"()":typeof s}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+i+"]")}return n}function kK(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var d=function(){for(var p=arguments.length,b=new Array(p),m=0;m<p;m++)b[m]=arguments[m];var w=0,x,y={memoizeOptions:void 0},_=b.pop();if(typeof _=="object"&&(y=_,_=b.pop()),typeof _!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof _+"]");var E=y,D=E.memoizeOptions,T=D===void 0?i:D,O=Array.isArray(T)?T:[T],I=bK(b),M=t.apply(void 0,[function(){return w++,_.apply(null,arguments)}].concat(O)),B=t(function(){for(var U=[],q=I.length,H=0;H<q;H++)U.push(I[H].apply(null,arguments));return x=M.apply(null,U),x});return Object.assign(B,{resultFunc:_,memoizedResultFunc:M,dependencies:I,lastResult:function(){return x},recomputations:function(){return w},resetRecomputations:function(){return w=0}}),B};return d}var Vh=kK(q1);function qB(t){var n=function(s){var d=s.dispatch,h=s.getState;return function(p){return function(b){return typeof b=="function"?b(d,h,t):p(b)}}};return n}var WB=qB();WB.withExtraArgument=qB;const x4=WB;var GB=globalThis&&globalThis.__extends||function(){var t=function(n,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,d){s.__proto__=d}||function(s,d){for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&(s[h]=d[h])},t(n,i)};return function(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(n,i);function s(){this.constructor=n}n.prototype=i===null?Object.create(i):(s.prototype=i.prototype,new s)}}(),vK=globalThis&&globalThis.__generator||function(t,n){var i={label:0,sent:function(){if(h[0]&1)throw h[1];return h[1]},trys:[],ops:[]},s,d,h,p;return p={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function b(w){return function(x){return m([w,x])}}function m(w){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,d&&(h=w[0]&2?d.return:w[0]?d.throw||((h=d.return)&&h.call(d),0):d.next)&&!(h=h.call(d,w[1])).done)return h;switch(d=0,h&&(w=[w[0]&2,h.value]),w[0]){case 0:case 1:h=w;break;case 4:return i.label++,{value:w[1],done:!1};case 5:i.label++,d=w[1],w=[0];continue;case 7:w=i.ops.pop(),i.trys.pop();continue;default:if(h=i.trys,!(h=h.length>0&&h[h.length-1])&&(w[0]===6||w[0]===2)){i=0;continue}if(w[0]===3&&(!h||w[1]>h[0]&&w[1]<h[3])){i.label=w[1];break}if(w[0]===6&&i.label<h[1]){i.label=h[1],h=w;break}if(h&&i.label<h[2]){i.label=h[2],i.ops.push(w);break}h[2]&&i.ops.pop(),i.trys.pop();continue}w=n.call(t,i)}catch(x){w=[6,x],d=0}finally{s=h=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}},Sd=globalThis&&globalThis.__spreadArray||function(t,n){for(var i=0,s=n.length,d=t.length;i<s;i++,d++)t[d]=n[i];return t},wK=Object.defineProperty,yK=Object.defineProperties,_K=Object.getOwnPropertyDescriptors,E4=Object.getOwnPropertySymbols,AK=Object.prototype.hasOwnProperty,CK=Object.prototype.propertyIsEnumerable,S4=function(t,n,i){return n in t?wK(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i},pa=function(t,n){for(var i in n||(n={}))AK.call(n,i)&&S4(t,i,n[i]);if(E4)for(var s=0,d=E4(n);s<d.length;s++){var i=d[s];CK.call(n,i)&&S4(t,i,n[i])}return t},cy=function(t,n){return yK(t,_K(n))},xK=function(t,n,i){return new Promise(function(s,d){var h=function(m){try{b(i.next(m))}catch(w){d(w)}},p=function(m){try{b(i.throw(m))}catch(w){d(w)}},b=function(m){return m.done?s(m.value):Promise.resolve(m.value).then(h,p)};b((i=i.apply(t,n)).next())})},EK=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?r0:r0.apply(null,arguments)};function Dd(t){if(typeof t!="object"||t===null)return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;for(var i=n;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return n===i}var SK=function(t){return t&&typeof t.match=="function"};function Nr(t,n){function i(){for(var s=[],d=0;d<arguments.length;d++)s[d]=arguments[d];if(n){var h=n.apply(void 0,s);if(!h)throw new Error("prepareAction did not return an object");return pa(pa({type:t,payload:h.payload},"meta"in h&&{meta:h.meta}),"error"in h&&{error:h.error})}return{type:t,payload:s[0]}}return i.toString=function(){return""+t},i.type=t,i.match=function(s){return s.type===t},i}var DK=function(t){GB(n,t);function n(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var d=t.apply(this,i)||this;return Object.setPrototypeOf(d,n.prototype),d}return Object.defineProperty(n,Symbol.species,{get:function(){return n},enumerable:!1,configurable:!0}),n.prototype.concat=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return t.prototype.concat.apply(this,i)},n.prototype.prepend=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return i.length===1&&Array.isArray(i[0])?new(n.bind.apply(n,Sd([void 0],i[0].concat(this)))):new(n.bind.apply(n,Sd([void 0],i.concat(this))))},n}(Array),TK=function(t){GB(n,t);function n(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];var d=t.apply(this,i)||this;return Object.setPrototypeOf(d,n.prototype),d}return Object.defineProperty(n,Symbol.species,{get:function(){return n},enumerable:!1,configurable:!0}),n.prototype.concat=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return t.prototype.concat.apply(this,i)},n.prototype.prepend=function(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];return i.length===1&&Array.isArray(i[0])?new(n.bind.apply(n,Sd([void 0],i[0].concat(this)))):new(n.bind.apply(n,Sd([void 0],i.concat(this))))},n}(Array);function W1(t){return Yi(t)?Bf(t,function(){}):t}function MK(t){return typeof t=="boolean"}function NK(){return function(n){return IK(n)}}function IK(t){t===void 0&&(t={});var n=t.thunk,i=n===void 0?!0:n;t.immutableCheck,t.serializableCheck,t.actionCreatorCheck;var s=new DK;return i&&(MK(i)?s.push(x4):s.push(x4.withExtraArgument(i.extraArgument))),s}var OK=!0;function PK(t){var n=NK(),i=t||{},s=i.reducer,d=s===void 0?void 0:s,h=i.middleware,p=h===void 0?n():h,b=i.devTools,m=b===void 0?!0:b,w=i.preloadedState,x=w===void 0?void 0:w,y=i.enhancers,_=y===void 0?void 0:y,E;if(typeof d=="function")E=d;else if(Dd(d))E=HB(d);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var D=p;typeof D=="function"&&(D=D(n));var T=hK.apply(void 0,D),O=r0;m&&(O=EK(pa({trace:!OK},typeof m=="object"&&m)));var I=new TK(T),M=I;Array.isArray(_)?M=Sd([T],_):typeof _=="function"&&(M=_(I));var B=O.apply(void 0,M);return UB(E,x,B)}function YB(t){var n={},i=[],s,d={addCase:function(h,p){var b=typeof h=="string"?h:h.type;if(!b)throw new Error("`builder.addCase` cannot be called with an empty action type");if(b in n)throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");return n[b]=p,d},addMatcher:function(h,p){return i.push({matcher:h,reducer:p}),d},addDefaultCase:function(h){return s=h,d}};return t(d),[n,i,s]}function BK(t){return typeof t=="function"}function RK(t,n,i,s){i===void 0&&(i=[]);var d=typeof n=="function"?YB(n):[n,i,s],h=d[0],p=d[1],b=d[2],m;if(BK(t))m=function(){return W1(t())};else{var w=W1(t);m=function(){return w}}function x(y,_){y===void 0&&(y=m());var E=Sd([h[_.type]],p.filter(function(D){var T=D.matcher;return T(_)}).map(function(D){var T=D.reducer;return T}));return E.filter(function(D){return!!D}).length===0&&(E=[b]),E.reduce(function(D,T){if(T)if(Gi(D)){var O=D,I=T(O,_);return I===void 0?D:I}else{if(Yi(D))return Bf(D,function(M){return T(M,_)});var I=T(D,_);if(I===void 0){if(D===null)return D;throw Error("A case reducer on a non-draftable value must not return undefined")}return I}return D},y)}return x.getInitialState=m,x}function LK(t,n){return t+"/"+n}function ul(t){var n=t.name;if(!n)throw new Error("`name` is a required option for createSlice");typeof process<"u";var i=typeof t.initialState=="function"?t.initialState:W1(t.initialState),s=t.reducers||{},d=Object.keys(s),h={},p={},b={};d.forEach(function(x){var y=s[x],_=LK(n,x),E,D;"reducer"in y?(E=y.reducer,D=y.prepare):E=y,h[x]=E,p[_]=E,b[x]=D?Nr(_,D):Nr(_)});function m(){var x=typeof t.extraReducers=="function"?YB(t.extraReducers):[t.extraReducers],y=x[0],_=y===void 0?{}:y,E=x[1],D=E===void 0?[]:E,T=x[2],O=T===void 0?void 0:T,I=pa(pa({},_),p);return RK(i,function(M){for(var B in I)M.addCase(B,I[B]);for(var z=0,U=D;z<U.length;z++){var q=U[z];M.addMatcher(q.matcher,q.reducer)}O&&M.addDefaultCase(O)})}var w;return{name:n,reducer:function(x,y){return w||(w=m()),w(x,y)},actions:b,caseReducers:h,getInitialState:function(){return w||(w=m()),w.getInitialState()}}}var zK="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",KB=function(t){t===void 0&&(t=21);for(var n="",i=t;i--;)n+=zK[Math.random()*64|0];return n},jK=["name","message","stack","code"],dy=function(){function t(n,i){this.payload=n,this.meta=i}return t}(),D4=function(){function t(n,i){this.payload=n,this.meta=i}return t}(),FK=function(t){if(typeof t=="object"&&t!==null){for(var n={},i=0,s=jK;i<s.length;i++){var d=s[i];typeof t[d]=="string"&&(n[d]=t[d])}return n}return{message:String(t)}},T4=function(){function t(n,i,s){var d=Nr(n+"/fulfilled",function(w,x,y,_){return{payload:w,meta:cy(pa({},_||{}),{arg:y,requestId:x,requestStatus:"fulfilled"})}}),h=Nr(n+"/pending",function(w,x,y){return{payload:void 0,meta:cy(pa({},y||{}),{arg:x,requestId:w,requestStatus:"pending"})}}),p=Nr(n+"/rejected",function(w,x,y,_,E){return{payload:_,error:(s&&s.serializeError||FK)(w||"Rejected"),meta:cy(pa({},E||{}),{arg:y,requestId:x,rejectedWithValue:!!_,requestStatus:"rejected",aborted:(w==null?void 0:w.name)==="AbortError",condition:(w==null?void 0:w.name)==="ConditionError"})}}),b=typeof AbortController<"u"?AbortController:function(){function w(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return w.prototype.abort=function(){},w}();function m(w){return function(x,y,_){var E=s!=null&&s.idGenerator?s.idGenerator(w):KB(),D=new b,T;function O(M){T=M,D.abort()}var I=function(){return xK(this,null,function(){var M,B,z,U,q,H,P;return vK(this,function(Y){switch(Y.label){case 0:return Y.trys.push([0,4,,5]),U=(M=s==null?void 0:s.condition)==null?void 0:M.call(s,w,{getState:y,extra:_}),VK(U)?[4,U]:[3,2];case 1:U=Y.sent(),Y.label=2;case 2:if(U===!1||D.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return q=new Promise(function(K,ee){return D.signal.addEventListener("abort",function(){return ee({name:"AbortError",message:T||"Aborted"})})}),x(h(E,w,(B=s==null?void 0:s.getPendingMeta)==null?void 0:B.call(s,{requestId:E,arg:w},{getState:y,extra:_}))),[4,Promise.race([q,Promise.resolve(i(w,{dispatch:x,getState:y,extra:_,requestId:E,signal:D.signal,abort:O,rejectWithValue:function(K,ee){return new dy(K,ee)},fulfillWithValue:function(K,ee){return new D4(K,ee)}})).then(function(K){if(K instanceof dy)throw K;return K instanceof D4?d(K.payload,E,w,K.meta):d(K,E,w)})])];case 3:return z=Y.sent(),[3,5];case 4:return H=Y.sent(),z=H instanceof dy?p(null,E,w,H.payload,H.meta):p(H,E,w),[3,5];case 5:return P=s&&!s.dispatchConditionRejection&&p.match(z)&&z.meta.condition,P||x(z),[2,z]}})})}();return Object.assign(I,{abort:O,requestId:E,arg:w,unwrap:function(){return I.then($K)}})}}return Object.assign(m,{pending:h,rejected:p,fulfilled:d,typePrefix:n})}return t.withTypes=function(){return t},t}();function $K(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function VK(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var QB=function(t,n){return SK(t)?t.match(n):t(n)};function Ld(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(i){return t.some(function(s){return QB(s,i)})}}function Uh(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(i){return t.every(function(s){return QB(s,i)})}}function Z0(t,n){if(!t||!t.meta)return!1;var i=typeof t.meta.requestId=="string",s=n.indexOf(t.meta.requestStatus)>-1;return i&&s}function Rf(t){return typeof t[0]=="function"&&"pending"in t[0]&&"fulfilled"in t[0]&&"rejected"in t[0]}function xA(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===0?function(i){return Z0(i,["pending"])}:Rf(t)?function(i){var s=t.map(function(h){return h.pending}),d=Ld.apply(void 0,s);return d(i)}:xA()(t[0])}function kf(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===0?function(i){return Z0(i,["rejected"])}:Rf(t)?function(i){var s=t.map(function(h){return h.rejected}),d=Ld.apply(void 0,s);return d(i)}:kf()(t[0])}function J0(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=function(s){return s&&s.meta&&s.meta.rejectedWithValue};return t.length===0?function(s){var d=Uh(kf.apply(void 0,t),i);return d(s)}:Rf(t)?function(s){var d=Uh(kf.apply(void 0,t),i);return d(s)}:J0()(t[0])}function Ol(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===0?function(i){return Z0(i,["fulfilled"])}:Rf(t)?function(i){var s=t.map(function(h){return h.fulfilled}),d=Ld.apply(void 0,s);return d(i)}:Ol()(t[0])}function G1(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length===0?function(i){return Z0(i,["pending","fulfilled","rejected"])}:Rf(t)?function(i){for(var s=[],d=0,h=t;d<h.length;d++){var p=h[d];s.push(p.pending,p.rejected,p.fulfilled)}var b=Ld.apply(void 0,s);return b(i)}:G1()(t[0])}var EA="listenerMiddleware";Nr(EA+"/add");Nr(EA+"/removeAll");Nr(EA+"/remove");var Sh="RTK_autoBatch",uh=function(){return function(t){var n;return{payload:t,meta:(n={},n[Sh]=!0,n)}}},M4;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);tK();var ZB=globalThis&&globalThis.__generator||function(t,n){var i={label:0,sent:function(){if(h[0]&1)throw h[1];return h[1]},trys:[],ops:[]},s,d,h,p;return p={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function b(w){return function(x){return m([w,x])}}function m(w){if(s)throw new TypeError("Generator is already executing.");for(;i;)try{if(s=1,d&&(h=w[0]&2?d.return:w[0]?d.throw||((h=d.return)&&h.call(d),0):d.next)&&!(h=h.call(d,w[1])).done)return h;switch(d=0,h&&(w=[w[0]&2,h.value]),w[0]){case 0:case 1:h=w;break;case 4:return i.label++,{value:w[1],done:!1};case 5:i.label++,d=w[1],w=[0];continue;case 7:w=i.ops.pop(),i.trys.pop();continue;default:if(h=i.trys,!(h=h.length>0&&h[h.length-1])&&(w[0]===6||w[0]===2)){i=0;continue}if(w[0]===3&&(!h||w[1]>h[0]&&w[1]<h[3])){i.label=w[1];break}if(w[0]===6&&i.label<h[1]){i.label=h[1],h=w;break}if(h&&i.label<h[2]){i.label=h[2],i.ops.push(w);break}h[2]&&i.ops.pop(),i.trys.pop();continue}w=n.call(t,i)}catch(x){w=[6,x],d=0}finally{s=h=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}},o0=globalThis&&globalThis.__spreadArray||function(t,n){for(var i=0,s=n.length,d=t.length;i<s;i++,d++)t[d]=n[i];return t},UK=Object.defineProperty,HK=Object.defineProperties,qK=Object.getOwnPropertyDescriptors,N4=Object.getOwnPropertySymbols,WK=Object.prototype.hasOwnProperty,GK=Object.prototype.propertyIsEnumerable,I4=function(t,n,i){return n in t?UK(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i},In=function(t,n){for(var i in n||(n={}))WK.call(n,i)&&I4(t,i,n[i]);if(N4)for(var s=0,d=N4(n);s<d.length;s++){var i=d[s];GK.call(n,i)&&I4(t,i,n[i])}return t},ts=function(t,n){return HK(t,qK(n))},JB=function(t,n,i){return new Promise(function(s,d){var h=function(m){try{b(i.next(m))}catch(w){d(w)}},p=function(m){try{b(i.throw(m))}catch(w){d(w)}},b=function(m){return m.done?s(m.value):Promise.resolve(m.value).then(h,p)};b((i=i.apply(t,n)).next())})},Zt;(function(t){t.uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"})(Zt||(Zt={}));function YK(t){return{status:t,isUninitialized:t===Zt.uninitialized,isLoading:t===Zt.pending,isSuccess:t===Zt.fulfilled,isError:t===Zt.rejected}}var O4=function(t){return[].concat.apply([],t)};function KK(){return typeof navigator>"u"||navigator.onLine===void 0?!0:navigator.onLine}function QK(){return typeof document>"u"?!0:document.visibilityState!=="hidden"}var P4=Dd;function XB(t,n){if(t===n||!(P4(t)&&P4(n)||Array.isArray(t)&&Array.isArray(n)))return n;for(var i=Object.keys(n),s=Object.keys(t),d=i.length===s.length,h=Array.isArray(n)?[]:{},p=0,b=i;p<b.length;p++){var m=b[p];h[m]=XB(t[m],n[m]),d&&(d=t[m]===h[m])}return d?t:h}var B4=function(){function t(n,i){i===void 0&&(i=void 0),this.value=n,this.meta=i}return t}(),SA=Nr("__rtkq/focused"),eR=Nr("__rtkq/unfocused"),DA=Nr("__rtkq/online"),tR=Nr("__rtkq/offline"),xo;(function(t){t.query="query",t.mutation="mutation"})(xo||(xo={}));function nR(t){return t.type===xo.query}function ZK(t){return t.type===xo.mutation}function TA(t,n,i,s,d,h){return JK(t)?t(n,i,s,d).map(Y1).map(h):Array.isArray(t)?t.map(Y1).map(h):[]}function JK(t){return typeof t=="function"}function Y1(t){return typeof t=="string"?{type:t}:t}function uy(t){return t!=null}var vf=Symbol("forceQueryFn"),K1=function(t){return typeof t[vf]=="function"};function XK(t){var n=t.serializeQueryArgs,i=t.queryThunk,s=t.mutationThunk,d=t.api,h=t.context,p=new Map,b=new Map,m=d.internalActions,w=m.unsubscribeQueryResult,x=m.removeMutationResult,y=m.updateSubscriptionOptions;return{buildInitiateQuery:M,buildInitiateMutation:B,getRunningQueryThunk:D,getRunningMutationThunk:T,getRunningQueriesThunk:O,getRunningMutationsThunk:I,getRunningOperationPromises:E,removalWarning:_};function _(){throw new Error(`This method had to be removed due to a conceptual bug in RTK.
       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.
       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.`)}function E(){typeof process<"u";var z=function(U){return Array.from(U.values()).flatMap(function(q){return q?Object.values(q):[]})};return o0(o0([],z(p)),z(b)).filter(uy)}function D(z,U){return function(q){var H,P=h.endpointDefinitions[z],Y=n({queryArgs:U,endpointDefinition:P,endpointName:z});return(H=p.get(q))==null?void 0:H[Y]}}function T(z,U){return function(q){var H;return(H=b.get(q))==null?void 0:H[U]}}function O(){return function(z){return Object.values(p.get(z)||{}).filter(uy)}}function I(){return function(z){return Object.values(b.get(z)||{}).filter(uy)}}function M(z,U){var q=function(H,P){var Y=P===void 0?{}:P,K=Y.subscribe,ee=K===void 0?!0:K,ne=Y.forceRefetch,te=Y.subscriptionOptions,de=vf,ue=Y[de];return function(Ee,Ce){var oe,le,ge=n({queryArgs:H,endpointDefinition:U,endpointName:z}),Ne=i((oe={type:"query",subscribe:ee,forceRefetch:ne,subscriptionOptions:te,endpointName:z,originalArgs:H,queryCacheKey:ge},oe[vf]=ue,oe)),Re=d.endpoints[z].select(H),Fe=Ee(Ne),Ve=Re(Ce()),Ue=Fe.requestId,We=Fe.abort,je=Ve.requestId!==Ue,vn=(le=p.get(Ee))==null?void 0:le[ge],kr=function(){return Re(Ce())},Hn=Object.assign(ue?Fe.then(kr):je&&!vn?Promise.resolve(Ve):Promise.all([vn,Fe]).then(kr),{arg:H,requestId:Ue,subscriptionOptions:te,queryCacheKey:ge,abort:We,unwrap:function(){return JB(this,null,function(){var Xn;return ZB(this,function(en){switch(en.label){case 0:return[4,Hn];case 1:if(Xn=en.sent(),Xn.isError)throw Xn.error;return[2,Xn.data]}})})},refetch:function(){return Ee(q(H,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){ee&&Ee(w({queryCacheKey:ge,requestId:Ue}))},updateSubscriptionOptions:function(Xn){Hn.subscriptionOptions=Xn,Ee(y({endpointName:z,requestId:Ue,queryCacheKey:ge,options:Xn}))}});if(!vn&&!je&&!ue){var un=p.get(Ee)||{};un[ge]=Hn,p.set(Ee,un),Hn.then(function(){delete un[ge],Object.keys(un).length||p.delete(Ee)})}return Hn}};return q}function B(z){return function(U,q){var H=q===void 0?{}:q,P=H.track,Y=P===void 0?!0:P,K=H.fixedCacheKey;return function(ee,ne){var te=s({type:"mutation",endpointName:z,originalArgs:U,track:Y,fixedCacheKey:K}),de=ee(te),ue=de.requestId,Ee=de.abort,Ce=de.unwrap,oe=de.unwrap().then(function(Re){return{data:Re}}).catch(function(Re){return{error:Re}}),le=function(){ee(x({requestId:ue,fixedCacheKey:K}))},ge=Object.assign(oe,{arg:de.arg,requestId:ue,abort:Ee,unwrap:Ce,unsubscribe:le,reset:le}),Ne=b.get(ee)||{};return b.set(ee,Ne),Ne[ue]=ge,ge.then(function(){delete Ne[ue],Object.keys(Ne).length||b.delete(ee)}),K&&(Ne[K]=ge,ge.then(function(){Ne[K]===ge&&(delete Ne[K],Object.keys(Ne).length||b.delete(ee))})),ge}}}}function R4(t){return t}function eQ(t){var n=this,i=t.reducerPath,s=t.baseQuery,d=t.context.endpointDefinitions,h=t.serializeQueryArgs,p=t.api,b=t.assertTagType,m=function(z,U,q,H){return function(P,Y){var K=d[z],ee=h({queryArgs:U,endpointDefinition:K,endpointName:z});if(P(p.internalActions.queryResultPatched({queryCacheKey:ee,patches:q})),!!H){var ne=p.endpoints[z].select(U)(Y()),te=TA(K.providesTags,ne.data,void 0,U,{},b);P(p.internalActions.updateProvidedBy({queryCacheKey:ee,providedTags:te}))}}},w=function(z,U,q,H){return H===void 0&&(H=!0),function(P,Y){var K,ee,ne=p.endpoints[z],te=ne.select(U)(Y()),de={patches:[],inversePatches:[],undo:function(){return P(p.util.patchQueryData(z,U,de.inversePatches,H))}};if(te.status===Zt.uninitialized)return de;var ue;if("data"in te)if(Yi(te.data)){var Ee=VB(te.data,q),Ce=Ee[0],oe=Ee[1],le=Ee[2];(K=de.patches).push.apply(K,oe),(ee=de.inversePatches).push.apply(ee,le),ue=Ce}else ue=q(te.data),de.patches.push({op:"replace",path:[],value:ue}),de.inversePatches.push({op:"replace",path:[],value:te.data});return P(p.util.patchQueryData(z,U,de.patches,H)),de}},x=function(z,U,q){return function(H){var P;return H(p.endpoints[z].initiate(U,(P={subscribe:!1,forceRefetch:!0},P[vf]=function(){return{data:q}},P)))}},y=function(z,U){return JB(n,[z,U],function(q,H){var P,Y,K,ee,ne,te,de,ue,Ee,Ce,oe,le,ge,Ne,Re,Fe,Ve,Ue,We=H.signal,je=H.abort,vn=H.rejectWithValue,kr=H.fulfillWithValue,Hn=H.dispatch,un=H.getState,Xn=H.extra;return ZB(this,function(en){switch(en.label){case 0:P=d[q.endpointName],en.label=1;case 1:return en.trys.push([1,8,,13]),Y=R4,K=void 0,ee={signal:We,abort:je,dispatch:Hn,getState:un,extra:Xn,endpoint:q.endpointName,type:q.type,forced:q.type==="query"?_(q,un()):void 0},ne=q.type==="query"?q[vf]:void 0,ne?(K=ne(),[3,6]):[3,2];case 2:return P.query?[4,s(P.query(q.originalArgs),ee,P.extraOptions)]:[3,4];case 3:return K=en.sent(),P.transformResponse&&(Y=P.transformResponse),[3,6];case 4:return[4,P.queryFn(q.originalArgs,ee,P.extraOptions,function(rt){return s(rt,ee,P.extraOptions)})];case 5:K=en.sent(),en.label=6;case 6:if(typeof process<"u",K.error)throw new B4(K.error,K.meta);return oe=kr,[4,Y(K.data,K.meta,q.originalArgs)];case 7:return[2,oe.apply(void 0,[en.sent(),(Ve={fulfilledTimeStamp:Date.now(),baseQueryMeta:K.meta},Ve[Sh]=!0,Ve)])];case 8:if(le=en.sent(),ge=le,!(ge instanceof B4))return[3,12];Ne=R4,P.query&&P.transformErrorResponse&&(Ne=P.transformErrorResponse),en.label=9;case 9:return en.trys.push([9,11,,12]),Re=vn,[4,Ne(ge.value,ge.meta,q.originalArgs)];case 10:return[2,Re.apply(void 0,[en.sent(),(Ue={baseQueryMeta:ge.meta},Ue[Sh]=!0,Ue)])];case 11:return Fe=en.sent(),ge=Fe,[3,12];case 12:throw typeof process<"u",console.error(ge),ge;case 13:return[2]}})})};function _(z,U){var q,H,P,Y,K=(H=(q=U[i])==null?void 0:q.queries)==null?void 0:H[z.queryCacheKey],ee=(P=U[i])==null?void 0:P.config.refetchOnMountOrArgChange,ne=K==null?void 0:K.fulfilledTimeStamp,te=(Y=z.forceRefetch)!=null?Y:z.subscribe&&ee;return te?te===!0||(Number(new Date)-Number(ne))/1e3>=te:!1}var E=T4(i+"/executeQuery",y,{getPendingMeta:function(){var z;return z={startedTimeStamp:Date.now()},z[Sh]=!0,z},condition:function(z,U){var q=U.getState,H,P,Y,K=q(),ee=(P=(H=K[i])==null?void 0:H.queries)==null?void 0:P[z.queryCacheKey],ne=ee==null?void 0:ee.fulfilledTimeStamp,te=z.originalArgs,de=ee==null?void 0:ee.originalArgs,ue=d[z.endpointName];return K1(z)?!0:(ee==null?void 0:ee.status)==="pending"?!1:_(z,K)||nR(ue)&&((Y=ue==null?void 0:ue.forceRefetch)==null?void 0:Y.call(ue,{currentArg:te,previousArg:de,endpointState:ee,state:K}))?!0:!ne},dispatchConditionRejection:!0}),D=T4(i+"/executeMutation",y,{getPendingMeta:function(){var z;return z={startedTimeStamp:Date.now()},z[Sh]=!0,z}}),T=function(z){return"force"in z},O=function(z){return"ifOlderThan"in z},I=function(z,U,q){return function(H,P){var Y=T(q)&&q.force,K=O(q)&&q.ifOlderThan,ee=function(ue){return ue===void 0&&(ue=!0),p.endpoints[z].initiate(U,{forceRefetch:ue})},ne=p.endpoints[z].select(U)(P());if(Y)H(ee());else if(K){var te=ne==null?void 0:ne.fulfilledTimeStamp;if(!te){H(ee());return}var de=(Number(new Date)-Number(new Date(te)))/1e3>=K;de&&H(ee())}else H(ee(!1))}};function M(z){return function(U){var q,H;return((H=(q=U==null?void 0:U.meta)==null?void 0:q.arg)==null?void 0:H.endpointName)===z}}function B(z,U){return{matchPending:Uh(xA(z),M(U)),matchFulfilled:Uh(Ol(z),M(U)),matchRejected:Uh(kf(z),M(U))}}return{queryThunk:E,mutationThunk:D,prefetch:I,updateQueryData:w,upsertQueryData:x,patchQueryData:m,buildMatchThunkActions:B}}function rR(t,n,i,s){return TA(i[t.meta.arg.endpointName][n],Ol(t)?t.payload:void 0,J0(t)?t.payload:void 0,t.meta.arg.originalArgs,"baseQueryMeta"in t.meta?t.meta.baseQueryMeta:void 0,s)}function qg(t,n,i){var s=t[n];s&&i(s)}function wf(t){var n;return(n="arg"in t?t.arg.fixedCacheKey:t.fixedCacheKey)!=null?n:t.requestId}function L4(t,n,i){var s=t[wf(n)];s&&i(s)}var hh={};function tQ(t){var n=t.reducerPath,i=t.queryThunk,s=t.mutationThunk,d=t.context,h=d.endpointDefinitions,p=d.apiUid,b=d.extractRehydrationInfo,m=d.hasRehydrationInfo,w=t.assertTagType,x=t.config,y=Nr(n+"/resetApiState"),_=ul({name:n+"/queries",initialState:hh,reducers:{removeQueryResult:{reducer:function(U,q){var H=q.payload.queryCacheKey;delete U[H]},prepare:uh()},queryResultPatched:{reducer:function(U,q){var H=q.payload,P=H.queryCacheKey,Y=H.patches;qg(U,P,function(K){K.data=y4(K.data,Y.concat())})},prepare:uh()}},extraReducers:function(U){U.addCase(i.pending,function(q,H){var P=H.meta,Y=H.meta.arg,K,ee,ne=K1(Y);(Y.subscribe||ne)&&((ee=q[K=Y.queryCacheKey])!=null||(q[K]={status:Zt.uninitialized,endpointName:Y.endpointName})),qg(q,Y.queryCacheKey,function(te){te.status=Zt.pending,te.requestId=ne&&te.requestId?te.requestId:P.requestId,Y.originalArgs!==void 0&&(te.originalArgs=Y.originalArgs),te.startedTimeStamp=P.startedTimeStamp})}).addCase(i.fulfilled,function(q,H){var P=H.meta,Y=H.payload;qg(q,P.arg.queryCacheKey,function(K){var ee;if(!(K.requestId!==P.requestId&&!K1(P.arg))){var ne=h[P.arg.endpointName].merge;if(K.status=Zt.fulfilled,ne)if(K.data!==void 0){var te=P.fulfilledTimeStamp,de=P.arg,ue=P.baseQueryMeta,Ee=P.requestId,Ce=Bf(K.data,function(oe){return ne(oe,Y,{arg:de.originalArgs,baseQueryMeta:ue,fulfilledTimeStamp:te,requestId:Ee})});K.data=Ce}else K.data=Y;else K.data=(ee=h[P.arg.endpointName].structuralSharing)==null||ee?XB(Gi(K.data)?ZY(K.data):K.data,Y):Y;delete K.error,K.fulfilledTimeStamp=P.fulfilledTimeStamp}})}).addCase(i.rejected,function(q,H){var P=H.meta,Y=P.condition,K=P.arg,ee=P.requestId,ne=H.error,te=H.payload;qg(q,K.queryCacheKey,function(de){if(!Y){if(de.requestId!==ee)return;de.status=Zt.rejected,de.error=te!=null?te:ne}})}).addMatcher(m,function(q,H){for(var P=b(H).queries,Y=0,K=Object.entries(P);Y<K.length;Y++){var ee=K[Y],ne=ee[0],te=ee[1];((te==null?void 0:te.status)===Zt.fulfilled||(te==null?void 0:te.status)===Zt.rejected)&&(q[ne]=te)}})}}),E=ul({name:n+"/mutations",initialState:hh,reducers:{removeMutationResult:{reducer:function(U,q){var H=q.payload,P=wf(H);P in U&&delete U[P]},prepare:uh()}},extraReducers:function(U){U.addCase(s.pending,function(q,H){var P=H.meta,Y=H.meta,K=Y.requestId,ee=Y.arg,ne=Y.startedTimeStamp;!ee.track||(q[wf(P)]={requestId:K,status:Zt.pending,endpointName:ee.endpointName,startedTimeStamp:ne})}).addCase(s.fulfilled,function(q,H){var P=H.payload,Y=H.meta;!Y.arg.track||L4(q,Y,function(K){K.requestId===Y.requestId&&(K.status=Zt.fulfilled,K.data=P,K.fulfilledTimeStamp=Y.fulfilledTimeStamp)})}).addCase(s.rejected,function(q,H){var P=H.payload,Y=H.error,K=H.meta;!K.arg.track||L4(q,K,function(ee){ee.requestId===K.requestId&&(ee.status=Zt.rejected,ee.error=P!=null?P:Y)})}).addMatcher(m,function(q,H){for(var P=b(H).mutations,Y=0,K=Object.entries(P);Y<K.length;Y++){var ee=K[Y],ne=ee[0],te=ee[1];((te==null?void 0:te.status)===Zt.fulfilled||(te==null?void 0:te.status)===Zt.rejected)&&ne!==(te==null?void 0:te.requestId)&&(q[ne]=te)}})}}),D=ul({name:n+"/invalidation",initialState:hh,reducers:{updateProvidedBy:{reducer:function(U,q){for(var H,P,Y,K,ee=q.payload,ne=ee.queryCacheKey,te=ee.providedTags,de=0,ue=Object.values(U);de<ue.length;de++)for(var Ee=ue[de],Ce=0,oe=Object.values(Ee);Ce<oe.length;Ce++){var le=oe[Ce],ge=le.indexOf(ne);ge!==-1&&le.splice(ge,1)}for(var Ne=0,Re=te;Ne<Re.length;Ne++){var Fe=Re[Ne],Ve=Fe.type,Ue=Fe.id,We=(K=(P=(H=U[Ve])!=null?H:U[Ve]={})[Y=Ue||"__internal_without_id"])!=null?K:P[Y]=[],je=We.includes(ne);je||We.push(ne)}},prepare:uh()}},extraReducers:function(U){U.addCase(_.actions.removeQueryResult,function(q,H){for(var P=H.payload.queryCacheKey,Y=0,K=Object.values(q);Y<K.length;Y++)for(var ee=K[Y],ne=0,te=Object.values(ee);ne<te.length;ne++){var de=te[ne],ue=de.indexOf(P);ue!==-1&&de.splice(ue,1)}}).addMatcher(m,function(q,H){for(var P,Y,K,ee,ne=b(H).provided,te=0,de=Object.entries(ne);te<de.length;te++)for(var ue=de[te],Ee=ue[0],Ce=ue[1],oe=0,le=Object.entries(Ce);oe<le.length;oe++)for(var ge=le[oe],Ne=ge[0],Re=ge[1],Fe=(ee=(Y=(P=q[Ee])!=null?P:q[Ee]={})[K=Ne||"__internal_without_id"])!=null?ee:Y[K]=[],Ve=0,Ue=Re;Ve<Ue.length;Ve++){var We=Ue[Ve],je=Fe.includes(We);je||Fe.push(We)}}).addMatcher(Ld(Ol(i),J0(i)),function(q,H){var P=rR(H,"providesTags",h,w),Y=H.meta.arg.queryCacheKey;D.caseReducers.updateProvidedBy(q,D.actions.updateProvidedBy({queryCacheKey:Y,providedTags:P}))})}}),T=ul({name:n+"/subscriptions",initialState:hh,reducers:{updateSubscriptionOptions:function(U,q){},unsubscribeQueryResult:function(U,q){},internal_probeSubscription:function(U,q){}}}),O=ul({name:n+"/internalSubscriptions",initialState:hh,reducers:{subscriptionsUpdated:{reducer:function(U,q){return y4(U,q.payload)},prepare:uh()}}}),I=ul({name:n+"/config",initialState:In({online:KK(),focused:QK(),middlewareRegistered:!1},x),reducers:{middlewareRegistered:function(U,q){var H=q.payload;U.middlewareRegistered=U.middlewareRegistered==="conflict"||p!==H?"conflict":!0}},extraReducers:function(U){U.addCase(DA,function(q){q.online=!0}).addCase(tR,function(q){q.online=!1}).addCase(SA,function(q){q.focused=!0}).addCase(eR,function(q){q.focused=!1}).addMatcher(m,function(q){return In({},q)})}}),M=HB({queries:_.reducer,mutations:E.reducer,provided:D.reducer,subscriptions:O.reducer,config:I.reducer}),B=function(U,q){return M(y.match(q)?void 0:U,q)},z=ts(In(In(In(In(In(In({},I.actions),_.actions),T.actions),O.actions),E.actions),D.actions),{unsubscribeMutationResult:E.actions.removeMutationResult,resetApiState:y});return{reducer:B,actions:z}}var bl=Symbol.for("RTKQ/skipToken"),iR={status:Zt.uninitialized},z4=Bf(iR,function(){}),j4=Bf(iR,function(){});function nQ(t){var n=t.serializeQueryArgs,i=t.reducerPath,s=function(x){return z4},d=function(x){return j4};return{buildQuerySelector:b,buildMutationSelector:m,selectInvalidatedBy:w};function h(x){return In(In({},x),YK(x.status))}function p(x){var y=x[i];return y}function b(x,y){return function(_){var E=n({queryArgs:_,endpointDefinition:y,endpointName:x}),D=function(O){var I,M,B;return(B=(M=(I=p(O))==null?void 0:I.queries)==null?void 0:M[E])!=null?B:z4},T=_===bl?s:D;return Vh(T,h)}}function m(){return function(x){var y,_;typeof x=="object"?_=(y=wf(x))!=null?y:bl:_=x;var E=function(T){var O,I,M;return(M=(I=(O=p(T))==null?void 0:O.mutations)==null?void 0:I[_])!=null?M:j4},D=_===bl?d:E;return Vh(D,h)}}function w(x,y){for(var _,E=x[i],D=new Set,T=0,O=y.map(Y1);T<O.length;T++){var I=O[T],M=E.provided[I.type];if(!!M)for(var B=(_=I.id!==void 0?M[I.id]:O4(Object.values(M)))!=null?_:[],z=0,U=B;z<U.length;z++){var q=U[z];D.add(q)}}return O4(Array.from(D.values()).map(function(H){var P=E.queries[H];return P?[{queryCacheKey:H,endpointName:P.endpointName,originalArgs:P.originalArgs}]:[]}))}}var Wg=WeakMap?new WeakMap:void 0,F4=function(t){var n=t.endpointName,i=t.queryArgs,s="",d=Wg==null?void 0:Wg.get(i);if(typeof d=="string")s=d;else{var h=JSON.stringify(i,function(p,b){return Dd(b)?Object.keys(b).sort().reduce(function(m,w){return m[w]=b[w],m},{}):b});Dd(i)&&(Wg==null||Wg.set(i,h)),s=h}return n+"("+s+")"};function rQ(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(s){var d=q1(function(x){var y,_;return(_=s.extractRehydrationInfo)==null?void 0:_.call(s,x,{reducerPath:(y=s.reducerPath)!=null?y:"api"})}),h=ts(In({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},s),{extractRehydrationInfo:d,serializeQueryArgs:function(x){var y=F4;if("serializeQueryArgs"in x.endpointDefinition){var _=x.endpointDefinition.serializeQueryArgs;y=function(E){var D=_(E);return typeof D=="string"?D:F4(ts(In({},E),{queryArgs:D}))}}else s.serializeQueryArgs&&(y=s.serializeQueryArgs);return y(x)},tagTypes:o0([],s.tagTypes||[])}),p={endpointDefinitions:{},batch:function(x){x()},apiUid:KB(),extractRehydrationInfo:d,hasRehydrationInfo:q1(function(x){return d(x)!=null})},b={injectEndpoints:w,enhanceEndpoints:function(x){var y=x.addTagTypes,_=x.endpoints;if(y)for(var E=0,D=y;E<D.length;E++){var T=D[E];h.tagTypes.includes(T)||h.tagTypes.push(T)}if(_)for(var O=0,I=Object.entries(_);O<I.length;O++){var M=I[O],B=M[0],z=M[1];typeof z=="function"?z(p.endpointDefinitions[B]):Object.assign(p.endpointDefinitions[B]||{},z)}return b}},m=t.map(function(x){return x.init(b,h,p)});function w(x){for(var y=x.endpoints({query:function(z){return ts(In({},z),{type:xo.query})},mutation:function(z){return ts(In({},z),{type:xo.mutation})}}),_=0,E=Object.entries(y);_<E.length;_++){var D=E[_],T=D[0],O=D[1];if(!x.overrideExisting&&T in p.endpointDefinitions){typeof process<"u";continue}p.endpointDefinitions[T]=O;for(var I=0,M=m;I<M.length;I++){var B=M[I];B.injectEndpoint(T,O)}}return b}return b.injectEndpoints({endpoints:s.endpoints})}}function iQ(t){for(var n in t)return!1;return!0}var oQ=2147483647/1e3-1,sQ=function(t){var n=t.reducerPath,i=t.api,s=t.context,d=t.internalState,h=i.internalActions,p=h.removeQueryResult,b=h.unsubscribeQueryResult;function m(_){var E=d.currentSubscriptions[_];return!!E&&!iQ(E)}var w={},x=function(_,E,D){var T;if(b.match(_)){var O=E.getState()[n],I=_.payload.queryCacheKey;y(I,(T=O.queries[I])==null?void 0:T.endpointName,E,O.config)}if(i.util.resetApiState.match(_))for(var M=0,B=Object.entries(w);M<B.length;M++){var z=B[M],U=z[0],q=z[1];q&&clearTimeout(q),delete w[U]}if(s.hasRehydrationInfo(_))for(var O=E.getState()[n],H=s.extractRehydrationInfo(_).queries,P=0,Y=Object.entries(H);P<Y.length;P++){var K=Y[P],I=K[0],ee=K[1];y(I,ee==null?void 0:ee.endpointName,E,O.config)}};function y(_,E,D,T){var O,I=s.endpointDefinitions[E],M=(O=I==null?void 0:I.keepUnusedDataFor)!=null?O:T.keepUnusedDataFor;if(M!==1/0){var B=Math.max(0,Math.min(M,oQ));if(!m(_)){var z=w[_];z&&clearTimeout(z),w[_]=setTimeout(function(){m(_)||D.dispatch(p({queryCacheKey:_})),delete w[_]},B*1e3)}}}return x},aQ=function(t){var n=t.reducerPath,i=t.context,s=t.context.endpointDefinitions,d=t.mutationThunk,h=t.api,p=t.assertTagType,b=t.refetchQuery,m=h.internalActions.removeQueryResult,w=Ld(Ol(d),J0(d)),x=function(_,E){w(_)&&y(rR(_,"invalidatesTags",s,p),E),h.util.invalidateTags.match(_)&&y(TA(_.payload,void 0,void 0,void 0,void 0,p),E)};function y(_,E){var D=E.getState(),T=D[n],O=h.util.selectInvalidatedBy(D,_);i.batch(function(){for(var I,M=Array.from(O.values()),B=0,z=M;B<z.length;B++){var U=z[B].queryCacheKey,q=T.queries[U],H=(I=T.subscriptions[U])!=null?I:{};q&&(Object.keys(H).length===0?E.dispatch(m({queryCacheKey:U})):q.status!==Zt.uninitialized&&E.dispatch(b(q,U)))}})}return x},lQ=function(t){var n=t.reducerPath,i=t.queryThunk,s=t.api,d=t.refetchQuery,h=t.internalState,p={},b=function(E,D){(s.internalActions.updateSubscriptionOptions.match(E)||s.internalActions.unsubscribeQueryResult.match(E))&&w(E.payload,D),(i.pending.match(E)||i.rejected.match(E)&&E.meta.condition)&&w(E.meta.arg,D),(i.fulfilled.match(E)||i.rejected.match(E)&&!E.meta.condition)&&m(E.meta.arg,D),s.util.resetApiState.match(E)&&y()};function m(E,D){var T=E.queryCacheKey,O=D.getState()[n],I=O.queries[T],M=h.currentSubscriptions[T];if(!(!I||I.status===Zt.uninitialized)){var B=_(M);if(!!Number.isFinite(B)){var z=p[T];z!=null&&z.timeout&&(clearTimeout(z.timeout),z.timeout=void 0);var U=Date.now()+B,q=p[T]={nextPollTimestamp:U,pollingInterval:B,timeout:setTimeout(function(){q.timeout=void 0,D.dispatch(d(I,T))},B)}}}}function w(E,D){var T=E.queryCacheKey,O=D.getState()[n],I=O.queries[T],M=h.currentSubscriptions[T];if(!(!I||I.status===Zt.uninitialized)){var B=_(M);if(!Number.isFinite(B)){x(T);return}var z=p[T],U=Date.now()+B;(!z||U<z.nextPollTimestamp)&&m({queryCacheKey:T},D)}}function x(E){var D=p[E];D!=null&&D.timeout&&clearTimeout(D.timeout),delete p[E]}function y(){for(var E=0,D=Object.keys(p);E<D.length;E++){var T=D[E];x(T)}}function _(E){E===void 0&&(E={});var D=Number.POSITIVE_INFINITY;for(var T in E)E[T].pollingInterval&&(D=Math.min(E[T].pollingInterval,D));return D}return b},cQ=function(t){var n=t.reducerPath,i=t.context,s=t.api,d=t.refetchQuery,h=t.internalState,p=s.internalActions.removeQueryResult,b=function(w,x){SA.match(w)&&m(x,"refetchOnFocus"),DA.match(w)&&m(x,"refetchOnReconnect")};function m(w,x){var y=w.getState()[n],_=y.queries,E=h.currentSubscriptions;i.batch(function(){for(var D=0,T=Object.keys(E);D<T.length;D++){var O=T[D],I=_[O],M=E[O];if(!(!M||!I)){var B=Object.values(M).some(function(z){return z[x]===!0})||Object.values(M).every(function(z){return z[x]===void 0})&&y.config[x];B&&(Object.keys(M).length===0?w.dispatch(p({queryCacheKey:O})):I.status!==Zt.uninitialized&&w.dispatch(d(I,O)))}}})}return b},$4=new Error("Promise never resolved before cacheEntryRemoved."),dQ=function(t){var n=t.api,i=t.reducerPath,s=t.context,d=t.queryThunk,h=t.mutationThunk;t.internalState;var p=G1(d),b=G1(h),m=Ol(d,h),w={},x=function(E,D,T){var O=y(E);if(d.pending.match(E)){var I=T[i].queries[O],M=D.getState()[i].queries[O];!I&&M&&_(E.meta.arg.endpointName,E.meta.arg.originalArgs,O,D,E.meta.requestId)}else if(h.pending.match(E)){var M=D.getState()[i].mutations[O];M&&_(E.meta.arg.endpointName,E.meta.arg.originalArgs,O,D,E.meta.requestId)}else if(m(E)){var B=w[O];B!=null&&B.valueResolved&&(B.valueResolved({data:E.payload,meta:E.meta.baseQueryMeta}),delete B.valueResolved)}else if(n.internalActions.removeQueryResult.match(E)||n.internalActions.removeMutationResult.match(E)){var B=w[O];B&&(delete w[O],B.cacheEntryRemoved())}else if(n.util.resetApiState.match(E))for(var z=0,U=Object.entries(w);z<U.length;z++){var q=U[z],H=q[0],B=q[1];delete w[H],B.cacheEntryRemoved()}};function y(E){return p(E)?E.meta.arg.queryCacheKey:b(E)?E.meta.requestId:n.internalActions.removeQueryResult.match(E)?E.payload.queryCacheKey:n.internalActions.removeMutationResult.match(E)?wf(E.payload):""}function _(E,D,T,O,I){var M=s.endpointDefinitions[E],B=M==null?void 0:M.onCacheEntryAdded;if(!!B){var z={},U=new Promise(function(ee){z.cacheEntryRemoved=ee}),q=Promise.race([new Promise(function(ee){z.valueResolved=ee}),U.then(function(){throw $4})]);q.catch(function(){}),w[T]=z;var H=n.endpoints[E].select(M.type===xo.query?D:T),P=O.dispatch(function(ee,ne,te){return te}),Y=ts(In({},O),{getCacheEntry:function(){return H(O.getState())},requestId:I,extra:P,updateCachedData:M.type===xo.query?function(ee){return O.dispatch(n.util.updateQueryData(E,D,ee))}:void 0,cacheDataLoaded:q,cacheEntryRemoved:U}),K=B(D,Y);Promise.resolve(K).catch(function(ee){if(ee!==$4)throw ee})}}return x},uQ=function(t){var n=t.api,i=t.context,s=t.queryThunk,d=t.mutationThunk,h=xA(s,d),p=kf(s,d),b=Ol(s,d),m={},w=function(x,y){var _,E,D;if(h(x)){var T=x.meta,O=T.requestId,I=T.arg,M=I.endpointName,B=I.originalArgs,z=i.endpointDefinitions[M],U=z==null?void 0:z.onQueryStarted;if(U){var q={},H=new Promise(function(ue,Ee){q.resolve=ue,q.reject=Ee});H.catch(function(){}),m[O]=q;var P=n.endpoints[M].select(z.type===xo.query?B:O),Y=y.dispatch(function(ue,Ee,Ce){return Ce}),K=ts(In({},y),{getCacheEntry:function(){return P(y.getState())},requestId:O,extra:Y,updateCachedData:z.type===xo.query?function(ue){return y.dispatch(n.util.updateQueryData(M,B,ue))}:void 0,queryFulfilled:H});U(B,K)}}else if(b(x)){var ee=x.meta,O=ee.requestId,ne=ee.baseQueryMeta;(_=m[O])==null||_.resolve({data:x.payload,meta:ne}),delete m[O]}else if(p(x)){var te=x.meta,O=te.requestId,de=te.rejectedWithValue,ne=te.baseQueryMeta;(D=m[O])==null||D.reject({error:(E=x.payload)!=null?E:x.error,isUnhandledError:!de,meta:ne}),delete m[O]}};return w},hQ=function(t){var n=t.api,i=t.context.apiUid,s=t.reducerPath;return function(d,h){var p,b;n.util.resetApiState.match(d)&&h.dispatch(n.internalActions.middlewareRegistered(i)),typeof process<"u"}},V4,fQ=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis):function(t){return(V4||(V4=Promise.resolve())).then(t).catch(function(n){return setTimeout(function(){throw n},0)})},pQ=function(t){var n=t.api,i=t.queryThunk,s=t.internalState,d=n.reducerPath+"/subscriptions",h=null,p=!1,b=n.internalActions,m=b.updateSubscriptionOptions,w=b.unsubscribeQueryResult,x=function(y,_){var E,D,T,O,I,M,B,z,U;if(m.match(_)){var q=_.payload,H=q.queryCacheKey,P=q.requestId,Y=q.options;return(E=y==null?void 0:y[H])!=null&&E[P]&&(y[H][P]=Y),!0}if(w.match(_)){var K=_.payload,H=K.queryCacheKey,P=K.requestId;return y[H]&&delete y[H][P],!0}if(n.internalActions.removeQueryResult.match(_))return delete y[_.payload.queryCacheKey],!0;if(i.pending.match(_)){var ee=_.meta,ne=ee.arg,P=ee.requestId;if(ne.subscribe){var te=(T=y[D=ne.queryCacheKey])!=null?T:y[D]={};return te[P]=(I=(O=ne.subscriptionOptions)!=null?O:te[P])!=null?I:{},!0}}if(i.rejected.match(_)){var de=_.meta,ue=de.condition,ne=de.arg,P=de.requestId;if(ue&&ne.subscribe){var te=(B=y[M=ne.queryCacheKey])!=null?B:y[M]={};return te[P]=(U=(z=ne.subscriptionOptions)!=null?z:te[P])!=null?U:{},!0}}return!1};return function(y,_){var E,D;if(h||(h=JSON.parse(JSON.stringify(s.currentSubscriptions))),n.util.resetApiState.match(y))return h=s.currentSubscriptions={},[!0,!1];if(n.internalActions.internal_probeSubscription.match(y)){var T=y.payload,O=T.queryCacheKey,I=T.requestId,M=!!((E=s.currentSubscriptions[O])!=null&&E[I]);return[!1,M]}var B=x(s.currentSubscriptions,y);if(B){p||(fQ(function(){var H=JSON.parse(JSON.stringify(s.currentSubscriptions)),P=VB(h,function(){return H}),Y=P[1];_.next(n.internalActions.subscriptionsUpdated(Y)),h=H,p=!1}),p=!0);var z=!!((D=y.type)!=null&&D.startsWith(d)),U=i.rejected.match(y)&&y.meta.condition&&!!y.meta.arg.subscribe,q=!z&&!U;return[q,!1]}return[!0,!1]}};function gQ(t){var n=t.reducerPath,i=t.queryThunk,s=t.api,d=t.context,h=d.apiUid,p={invalidateTags:Nr(n+"/invalidateTags")},b=function(y){return!!y&&typeof y.type=="string"&&y.type.startsWith(n+"/")},m=[hQ,sQ,aQ,lQ,dQ,uQ],w=function(y){var _=!1,E={currentSubscriptions:{}},D=ts(In({},t),{internalState:E,refetchQuery:x}),T=m.map(function(M){return M(D)}),O=pQ(D),I=cQ(D);return function(M){return function(B){_||(_=!0,y.dispatch(s.internalActions.middlewareRegistered(h)));var z=ts(In({},y),{next:M}),U=y.getState(),q=O(B,z,U),H=q[0],P=q[1],Y;if(H?Y=M(B):Y=P,y.getState()[n]&&(I(B,z,U),b(B)||d.hasRehydrationInfo(B)))for(var K=0,ee=T;K<ee.length;K++){var ne=ee[K];ne(B,z,U)}return Y}}};return{middleware:w,actions:p};function x(y,_,E){return E===void 0&&(E={}),i(In({type:"query",endpointName:y.endpointName,originalArgs:y.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:_},E))}}function Hs(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];Object.assign.apply(Object,o0([t],n))}var U4=Symbol(),mQ=function(){return{name:U4,init:function(t,n,i){var s=n.baseQuery,d=n.tagTypes,h=n.reducerPath,p=n.serializeQueryArgs,b=n.keepUnusedDataFor,m=n.refetchOnMountOrArgChange,w=n.refetchOnFocus,x=n.refetchOnReconnect;nK();var y=function(Fe){return typeof process<"u",Fe};Object.assign(t,{reducerPath:h,endpoints:{},internalActions:{onOnline:DA,onOffline:tR,onFocus:SA,onFocusLost:eR},util:{}});var _=eQ({baseQuery:s,reducerPath:h,context:i,api:t,serializeQueryArgs:p,assertTagType:y}),E=_.queryThunk,D=_.mutationThunk,T=_.patchQueryData,O=_.updateQueryData,I=_.upsertQueryData,M=_.prefetch,B=_.buildMatchThunkActions,z=tQ({context:i,queryThunk:E,mutationThunk:D,reducerPath:h,assertTagType:y,config:{refetchOnFocus:w,refetchOnReconnect:x,refetchOnMountOrArgChange:m,keepUnusedDataFor:b,reducerPath:h}}),U=z.reducer,q=z.actions;Hs(t.util,{patchQueryData:T,updateQueryData:O,upsertQueryData:I,prefetch:M,resetApiState:q.resetApiState}),Hs(t.internalActions,q);var H=gQ({reducerPath:h,context:i,queryThunk:E,mutationThunk:D,api:t,assertTagType:y}),P=H.middleware,Y=H.actions;Hs(t.util,Y),Hs(t,{reducer:U,middleware:P});var K=nQ({serializeQueryArgs:p,reducerPath:h}),ee=K.buildQuerySelector,ne=K.buildMutationSelector,te=K.selectInvalidatedBy;Hs(t.util,{selectInvalidatedBy:te});var de=XK({queryThunk:E,mutationThunk:D,api:t,serializeQueryArgs:p,context:i}),ue=de.buildInitiateQuery,Ee=de.buildInitiateMutation,Ce=de.getRunningMutationThunk,oe=de.getRunningMutationsThunk,le=de.getRunningQueriesThunk,ge=de.getRunningQueryThunk,Ne=de.getRunningOperationPromises,Re=de.removalWarning;return Hs(t.util,{getRunningOperationPromises:Ne,getRunningOperationPromise:Re,getRunningMutationThunk:Ce,getRunningMutationsThunk:oe,getRunningQueryThunk:ge,getRunningQueriesThunk:le}),{name:U4,injectEndpoint:function(Fe,Ve){var Ue,We,je=t;(We=(Ue=je.endpoints)[Fe])!=null||(Ue[Fe]={}),nR(Ve)?Hs(je.endpoints[Fe],{name:Fe,select:ee(Fe,Ve),initiate:ue(Fe,Ve)},B(E,Fe)):ZK(Ve)&&Hs(je.endpoints[Fe],{name:Fe,select:ne(),initiate:Ee(Fe)},B(D,Fe))}}}}},oR={exports:{}},sR={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=Z.exports;function bQ(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kQ=typeof Object.is=="function"?Object.is:bQ,vQ=Td.useState,wQ=Td.useEffect,yQ=Td.useLayoutEffect,_Q=Td.useDebugValue;function AQ(t,n){var i=n(),s=vQ({inst:{value:i,getSnapshot:n}}),d=s[0].inst,h=s[1];return yQ(function(){d.value=i,d.getSnapshot=n,hy(d)&&h({inst:d})},[t,i,n]),wQ(function(){return hy(d)&&h({inst:d}),t(function(){hy(d)&&h({inst:d})})},[t]),_Q(i),i}function hy(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!kQ(t,i)}catch{return!0}}function CQ(t,n){return n()}var xQ=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?CQ:AQ;sR.useSyncExternalStore=Td.useSyncExternalStore!==void 0?Td.useSyncExternalStore:xQ;(function(t){t.exports=sR})(oR);var aR={exports:{}},lR={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0=Z.exports,EQ=oR.exports;function SQ(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var DQ=typeof Object.is=="function"?Object.is:SQ,TQ=EQ.useSyncExternalStore,MQ=X0.useRef,NQ=X0.useEffect,IQ=X0.useMemo,OQ=X0.useDebugValue;lR.useSyncExternalStoreWithSelector=function(t,n,i,s,d){var h=MQ(null);if(h.current===null){var p={hasValue:!1,value:null};h.current=p}else p=h.current;h=IQ(function(){function m(E){if(!w){if(w=!0,x=E,E=s(E),d!==void 0&&p.hasValue){var D=p.value;if(d(D,E))return y=D}return y=E}if(D=y,DQ(x,E))return D;var T=s(E);return d!==void 0&&d(D,T)?D:(x=E,y=T)}var w=!1,x,y,_=i===void 0?null:i;return[function(){return m(n())},_===null?void 0:function(){return m(_())}]},[n,i,s,d]);var b=TQ(t,h[0],h[1]);return NQ(function(){p.hasValue=!0,p.value=b},[b]),OQ(b),b};(function(t){t.exports=lR})(aR);function PQ(t){t()}let cR=PQ;const BQ=t=>cR=t,RQ=()=>cR,H4=Symbol.for("react-redux-context"),q4=typeof globalThis<"u"?globalThis:{};function LQ(){var t;if(!Z.exports.createContext)return{};const n=(t=q4[H4])!=null?t:q4[H4]=new Map;let i=n.get(Z.exports.createContext);return i||(i=Z.exports.createContext(null),n.set(Z.exports.createContext,i)),i}const ya=LQ();function MA(t=ya){return function(){return Z.exports.useContext(t)}}const dR=MA(),zQ=()=>{throw new Error("uSES not initialized!")};let uR=zQ;const jQ=t=>{uR=t},FQ=(t,n)=>t===n;function $Q(t=ya){const n=t===ya?dR:MA(t);return function(s,d={}){const{equalityFn:h=FQ,stabilityCheck:p=void 0,noopCheck:b=void 0}=typeof d=="function"?{equalityFn:d}:d,{store:m,subscription:w,getServerState:x,stabilityCheck:y,noopCheck:_}=n();Z.exports.useRef(!0);const E=Z.exports.useCallback({[s.name](T){return s(T)}}[s.name],[s,y,p]),D=uR(w.addNestedSub,m.getState,x||m.getState,E,h);return Z.exports.useDebugValue(D),D}}const hR=$Q();var fR={exports:{}},Tt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Un=typeof Symbol=="function"&&Symbol.for,NA=Un?Symbol.for("react.element"):60103,IA=Un?Symbol.for("react.portal"):60106,eb=Un?Symbol.for("react.fragment"):60107,tb=Un?Symbol.for("react.strict_mode"):60108,nb=Un?Symbol.for("react.profiler"):60114,rb=Un?Symbol.for("react.provider"):60109,ib=Un?Symbol.for("react.context"):60110,OA=Un?Symbol.for("react.async_mode"):60111,ob=Un?Symbol.for("react.concurrent_mode"):60111,sb=Un?Symbol.for("react.forward_ref"):60112,ab=Un?Symbol.for("react.suspense"):60113,VQ=Un?Symbol.for("react.suspense_list"):60120,lb=Un?Symbol.for("react.memo"):60115,cb=Un?Symbol.for("react.lazy"):60116,UQ=Un?Symbol.for("react.block"):60121,HQ=Un?Symbol.for("react.fundamental"):60117,qQ=Un?Symbol.for("react.responder"):60118,WQ=Un?Symbol.for("react.scope"):60119;function ei(t){if(typeof t=="object"&&t!==null){var n=t.$$typeof;switch(n){case NA:switch(t=t.type,t){case OA:case ob:case eb:case nb:case tb:case ab:return t;default:switch(t=t&&t.$$typeof,t){case ib:case sb:case cb:case lb:case rb:return t;default:return n}}case IA:return n}}}function pR(t){return ei(t)===ob}Tt.AsyncMode=OA;Tt.ConcurrentMode=ob;Tt.ContextConsumer=ib;Tt.ContextProvider=rb;Tt.Element=NA;Tt.ForwardRef=sb;Tt.Fragment=eb;Tt.Lazy=cb;Tt.Memo=lb;Tt.Portal=IA;Tt.Profiler=nb;Tt.StrictMode=tb;Tt.Suspense=ab;Tt.isAsyncMode=function(t){return pR(t)||ei(t)===OA};Tt.isConcurrentMode=pR;Tt.isContextConsumer=function(t){return ei(t)===ib};Tt.isContextProvider=function(t){return ei(t)===rb};Tt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===NA};Tt.isForwardRef=function(t){return ei(t)===sb};Tt.isFragment=function(t){return ei(t)===eb};Tt.isLazy=function(t){return ei(t)===cb};Tt.isMemo=function(t){return ei(t)===lb};Tt.isPortal=function(t){return ei(t)===IA};Tt.isProfiler=function(t){return ei(t)===nb};Tt.isStrictMode=function(t){return ei(t)===tb};Tt.isSuspense=function(t){return ei(t)===ab};Tt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===eb||t===ob||t===nb||t===tb||t===ab||t===VQ||typeof t=="object"&&t!==null&&(t.$$typeof===cb||t.$$typeof===lb||t.$$typeof===rb||t.$$typeof===ib||t.$$typeof===sb||t.$$typeof===HQ||t.$$typeof===qQ||t.$$typeof===WQ||t.$$typeof===UQ)};Tt.typeOf=ei;(function(t){t.exports=Tt})(fR);var gR=fR.exports,GQ={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},YQ={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mR={};mR[gR.ForwardRef]=GQ;mR[gR.Memo]=YQ;var KQ={exports:{}},Mt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PA=Symbol.for("react.element"),BA=Symbol.for("react.portal"),db=Symbol.for("react.fragment"),ub=Symbol.for("react.strict_mode"),hb=Symbol.for("react.profiler"),fb=Symbol.for("react.provider"),pb=Symbol.for("react.context"),QQ=Symbol.for("react.server_context"),gb=Symbol.for("react.forward_ref"),mb=Symbol.for("react.suspense"),bb=Symbol.for("react.suspense_list"),kb=Symbol.for("react.memo"),vb=Symbol.for("react.lazy"),ZQ=Symbol.for("react.offscreen"),bR;bR=Symbol.for("react.module.reference");function yi(t){if(typeof t=="object"&&t!==null){var n=t.$$typeof;switch(n){case PA:switch(t=t.type,t){case db:case hb:case ub:case mb:case bb:return t;default:switch(t=t&&t.$$typeof,t){case QQ:case pb:case gb:case vb:case kb:case fb:return t;default:return n}}case BA:return n}}}Mt.ContextConsumer=pb;Mt.ContextProvider=fb;Mt.Element=PA;Mt.ForwardRef=gb;Mt.Fragment=db;Mt.Lazy=vb;Mt.Memo=kb;Mt.Portal=BA;Mt.Profiler=hb;Mt.StrictMode=ub;Mt.Suspense=mb;Mt.SuspenseList=bb;Mt.isAsyncMode=function(){return!1};Mt.isConcurrentMode=function(){return!1};Mt.isContextConsumer=function(t){return yi(t)===pb};Mt.isContextProvider=function(t){return yi(t)===fb};Mt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===PA};Mt.isForwardRef=function(t){return yi(t)===gb};Mt.isFragment=function(t){return yi(t)===db};Mt.isLazy=function(t){return yi(t)===vb};Mt.isMemo=function(t){return yi(t)===kb};Mt.isPortal=function(t){return yi(t)===BA};Mt.isProfiler=function(t){return yi(t)===hb};Mt.isStrictMode=function(t){return yi(t)===ub};Mt.isSuspense=function(t){return yi(t)===mb};Mt.isSuspenseList=function(t){return yi(t)===bb};Mt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===db||t===hb||t===ub||t===mb||t===bb||t===ZQ||typeof t=="object"&&t!==null&&(t.$$typeof===vb||t.$$typeof===kb||t.$$typeof===fb||t.$$typeof===pb||t.$$typeof===gb||t.$$typeof===bR||t.getModuleId!==void 0)};Mt.typeOf=yi;(function(t){t.exports=Mt})(KQ);function JQ(){const t=RQ();let n=null,i=null;return{clear(){n=null,i=null},notify(){t(()=>{let s=n;for(;s;)s.callback(),s=s.next})},get(){let s=[],d=n;for(;d;)s.push(d),d=d.next;return s},subscribe(s){let d=!0,h=i={callback:s,next:null,prev:i};return h.prev?h.prev.next=h:n=h,function(){!d||n===null||(d=!1,h.next?h.next.prev=h.prev:i=h.prev,h.prev?h.prev.next=h.next:n=h.next)}}}}const W4={notify(){},get:()=>[]};function XQ(t,n){let i,s=W4,d=0,h=!1;function p(T){x();const O=s.subscribe(T);let I=!1;return()=>{I||(I=!0,O(),y())}}function b(){s.notify()}function m(){D.onStateChange&&D.onStateChange()}function w(){return h}function x(){d++,i||(i=n?n.addNestedSub(m):t.subscribe(m),s=JQ())}function y(){d--,i&&d===0&&(i(),i=void 0,s.clear(),s=W4)}function _(){h||(h=!0,x())}function E(){h&&(h=!1,y())}const D={addNestedSub:p,notifyNestedSubs:b,handleChangeWrapper:m,isSubscribed:w,trySubscribe:_,tryUnsubscribe:E,getListeners:()=>s};return D}const eZ=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tZ=eZ?Z.exports.useLayoutEffect:Z.exports.useEffect;function G4(t,n){return t===n?t!==0||n!==0||1/t===1/n:t!==t&&n!==n}function s0(t,n){if(G4(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;const i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(let d=0;d<i.length;d++)if(!Object.prototype.hasOwnProperty.call(n,i[d])||!G4(t[i[d]],n[i[d]]))return!1;return!0}function nZ({store:t,context:n,children:i,serverState:s,stabilityCheck:d="once",noopCheck:h="once"}){const p=Z.exports.useMemo(()=>{const w=XQ(t);return{store:t,subscription:w,getServerState:s?()=>s:void 0,stabilityCheck:d,noopCheck:h}},[t,s,d,h]),b=Z.exports.useMemo(()=>t.getState(),[t]);return tZ(()=>{const{subscription:w}=p;return w.onStateChange=w.notifyNestedSubs,w.trySubscribe(),b!==t.getState()&&w.notifyNestedSubs(),()=>{w.tryUnsubscribe(),w.onStateChange=void 0}},[p,b]),A((n||ya).Provider,{value:p,children:i})}function kR(t=ya){const n=t===ya?dR:MA(t);return function(){const{store:s}=n();return s}}const vR=kR();function rZ(t=ya){const n=t===ya?vR:kR(t);return function(){return n().dispatch}}const ti=rZ();jQ(aR.exports.useSyncExternalStoreWithSelector);BQ(Id.exports.unstable_batchedUpdates);var iZ=globalThis&&globalThis.__spreadArray||function(t,n){for(var i=0,s=n.length,d=t.length;i<s;i++,d++)t[d]=n[i];return t},oZ=Object.defineProperty,sZ=Object.defineProperties,aZ=Object.getOwnPropertyDescriptors,Y4=Object.getOwnPropertySymbols,lZ=Object.prototype.hasOwnProperty,cZ=Object.prototype.propertyIsEnumerable,K4=function(t,n,i){return n in t?oZ(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i},Yo=function(t,n){for(var i in n||(n={}))lZ.call(n,i)&&K4(t,i,n[i]);if(Y4)for(var s=0,d=Y4(n);s<d.length;s++){var i=d[s];cZ.call(n,i)&&K4(t,i,n[i])}return t},bm=function(t,n){return sZ(t,aZ(n))};function Q4(t,n,i,s){var d=Z.exports.useMemo(function(){return{queryArgs:t,serialized:typeof t=="object"?n({queryArgs:t,endpointDefinition:i,endpointName:s}):t}},[t,n,i,s]),h=Z.exports.useRef(d);return Z.exports.useEffect(function(){h.current.serialized!==d.serialized&&(h.current=d)},[d]),h.current.serialized===d.serialized?h.current.queryArgs:t}var fy=Symbol();function py(t){var n=Z.exports.useRef(t);return Z.exports.useEffect(function(){s0(n.current,t)||(n.current=t)},[t]),s0(n.current,t)?n.current:t}var Gg=WeakMap?new WeakMap:void 0,dZ=function(t){var n=t.endpointName,i=t.queryArgs,s="",d=Gg==null?void 0:Gg.get(i);if(typeof d=="string")s=d;else{var h=JSON.stringify(i,function(p,b){return Dd(b)?Object.keys(b).sort().reduce(function(m,w){return m[w]=b[w],m},{}):b});Dd(i)&&(Gg==null||Gg.set(i,h)),s=h}return n+"("+s+")"},uZ=typeof window<"u"&&!!window.document&&!!window.document.createElement?Z.exports.useLayoutEffect:Z.exports.useEffect,hZ=function(t){return t},fZ=function(t){return t.isUninitialized?bm(Yo({},t),{isUninitialized:!1,isFetching:!0,isLoading:t.data===void 0,status:Zt.pending}):t};function pZ(t){var n=t.api,i=t.moduleOptions,s=i.batch,d=i.useDispatch,h=i.useSelector,p=i.useStore,b=i.unstable__sideEffectsInRender,m=t.serializeQueryArgs,w=t.context,x=b?function(T){return T()}:Z.exports.useEffect;return{buildQueryHooks:E,buildMutationHook:D,usePrefetch:_};function y(T,O,I){if((O==null?void 0:O.endpointName)&&T.isUninitialized){var M=O.endpointName,B=w.endpointDefinitions[M];m({queryArgs:O.originalArgs,endpointDefinition:B,endpointName:M})===m({queryArgs:I,endpointDefinition:B,endpointName:M})&&(O=void 0)}var z=T.isSuccess?T.data:O==null?void 0:O.data;z===void 0&&(z=T.data);var U=z!==void 0,q=T.isLoading,H=!U&&q,P=T.isSuccess||q&&U;return bm(Yo({},T),{data:z,currentData:T.data,isFetching:q,isLoading:H,isSuccess:P})}function _(T,O){var I=d(),M=py(O);return Z.exports.useCallback(function(B,z){return I(n.util.prefetch(T,B,Yo(Yo({},M),z)))},[T,I,M])}function E(T){var O=function(B,z){var U=z===void 0?{}:z,q=U.refetchOnReconnect,H=U.refetchOnFocus,P=U.refetchOnMountOrArgChange,Y=U.skip,K=Y===void 0?!1:Y,ee=U.pollingInterval,ne=ee===void 0?0:ee,te=n.endpoints[T].initiate,de=d(),ue=Q4(K?bl:B,dZ,w.endpointDefinitions[T],T),Ee=py({refetchOnReconnect:q,refetchOnFocus:H,pollingInterval:ne}),Ce=Z.exports.useRef(!1),oe=Z.exports.useRef(),le=oe.current||{},ge=le.queryCacheKey,Ne=le.requestId,Re=!1;if(ge&&Ne){var Fe=de(n.internalActions.internal_probeSubscription({queryCacheKey:ge,requestId:Ne}));Re=!!Fe}var Ve=!Re&&Ce.current;return x(function(){Ce.current=Re}),x(function(){Ve&&(oe.current=void 0)},[Ve]),x(function(){var Ue,We=oe.current;if(typeof process<"u",ue===bl){We==null||We.unsubscribe(),oe.current=void 0;return}var je=(Ue=oe.current)==null?void 0:Ue.subscriptionOptions;if(!We||We.arg!==ue){We==null||We.unsubscribe();var vn=de(te(ue,{subscriptionOptions:Ee,forceRefetch:P}));oe.current=vn}else Ee!==je&&We.updateSubscriptionOptions(Ee)},[de,te,P,ue,Ee,Ve]),Z.exports.useEffect(function(){return function(){var Ue;(Ue=oe.current)==null||Ue.unsubscribe(),oe.current=void 0}},[]),Z.exports.useMemo(function(){return{refetch:function(){var Ue;if(!oe.current)throw new Error("Cannot refetch a query that has not been started yet.");return(Ue=oe.current)==null?void 0:Ue.refetch()}}},[])},I=function(B){var z=B===void 0?{}:B,U=z.refetchOnReconnect,q=z.refetchOnFocus,H=z.pollingInterval,P=H===void 0?0:H,Y=n.endpoints[T].initiate,K=d(),ee=Z.exports.useState(fy),ne=ee[0],te=ee[1],de=Z.exports.useRef(),ue=py({refetchOnReconnect:U,refetchOnFocus:q,pollingInterval:P});x(function(){var oe,le,ge=(oe=de.current)==null?void 0:oe.subscriptionOptions;ue!==ge&&((le=de.current)==null||le.updateSubscriptionOptions(ue))},[ue]);var Ee=Z.exports.useRef(ue);x(function(){Ee.current=ue},[ue]);var Ce=Z.exports.useCallback(function(oe,le){le===void 0&&(le=!1);var ge;return s(function(){var Ne;(Ne=de.current)==null||Ne.unsubscribe(),de.current=ge=K(Y(oe,{subscriptionOptions:Ee.current,forceRefetch:!le})),te(oe)}),ge},[K,Y]);return Z.exports.useEffect(function(){return function(){var oe;(oe=de==null?void 0:de.current)==null||oe.unsubscribe()}},[]),Z.exports.useEffect(function(){ne!==fy&&!de.current&&Ce(ne,!0)},[ne,Ce]),Z.exports.useMemo(function(){return[Ce,ne]},[Ce,ne])},M=function(B,z){var U=z===void 0?{}:z,q=U.skip,H=q===void 0?!1:q,P=U.selectFromResult,Y=n.endpoints[T].select,K=Q4(H?bl:B,m,w.endpointDefinitions[T],T),ee=Z.exports.useRef(),ne=Z.exports.useMemo(function(){return Vh([Y(K),function(Ce,oe){return oe},function(Ce){return K}],y)},[Y,K]),te=Z.exports.useMemo(function(){return P?Vh([ne],P):ne},[ne,P]),de=h(function(Ce){return te(Ce,ee.current)},s0),ue=p(),Ee=ne(ue.getState(),ee.current);return uZ(function(){ee.current=Ee},[Ee]),de};return{useQueryState:M,useQuerySubscription:O,useLazyQuerySubscription:I,useLazyQuery:function(B){var z=I(B),U=z[0],q=z[1],H=M(q,bm(Yo({},B),{skip:q===fy})),P=Z.exports.useMemo(function(){return{lastArg:q}},[q]);return Z.exports.useMemo(function(){return[U,H,P]},[U,H,P])},useQuery:function(B,z){var U=O(B,z),q=M(B,Yo({selectFromResult:B===bl||(z==null?void 0:z.skip)?void 0:fZ},z)),H=q.data,P=q.status,Y=q.isLoading,K=q.isSuccess,ee=q.isError,ne=q.error;return Z.exports.useDebugValue({data:H,status:P,isLoading:Y,isSuccess:K,isError:ee,error:ne}),Z.exports.useMemo(function(){return Yo(Yo({},q),U)},[q,U])}}}function D(T){return function(O){var I=O===void 0?{}:O,M=I.selectFromResult,B=M===void 0?hZ:M,z=I.fixedCacheKey,U=n.endpoints[T],q=U.select,H=U.initiate,P=d(),Y=Z.exports.useState(),K=Y[0],ee=Y[1];Z.exports.useEffect(function(){return function(){K!=null&&K.arg.fixedCacheKey||K==null||K.reset()}},[K]);var ne=Z.exports.useCallback(function(We){var je=P(H(We,{fixedCacheKey:z}));return ee(je),je},[P,H,z]),te=(K||{}).requestId,de=Z.exports.useMemo(function(){return Vh([q({fixedCacheKey:z,requestId:K==null?void 0:K.requestId})],B)},[q,K,B,z]),ue=h(de,s0),Ee=z==null?K==null?void 0:K.arg.originalArgs:void 0,Ce=Z.exports.useCallback(function(){s(function(){K&&ee(void 0),z&&P(n.internalActions.removeMutationResult({requestId:te,fixedCacheKey:z}))})},[P,z,K,te]),oe=ue.endpointName,le=ue.data,ge=ue.status,Ne=ue.isLoading,Re=ue.isSuccess,Fe=ue.isError,Ve=ue.error;Z.exports.useDebugValue({endpointName:oe,data:le,status:ge,isLoading:Ne,isSuccess:Re,isError:Fe,error:Ve});var Ue=Z.exports.useMemo(function(){return bm(Yo({},ue),{originalArgs:Ee,reset:Ce})},[ue,Ee,Ce]);return Z.exports.useMemo(function(){return[ne,Ue]},[ne,Ue])}}}var a0;(function(t){t.query="query",t.mutation="mutation"})(a0||(a0={}));function gZ(t){return t.type===a0.query}function mZ(t){return t.type===a0.mutation}function gy(t){return t.replace(t[0],t[0].toUpperCase())}function Yg(t){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];Object.assign.apply(Object,iZ([t],n))}var bZ=Symbol(),kZ=function(t){var n=t===void 0?{}:t,i=n.batch,s=i===void 0?Id.exports.unstable_batchedUpdates:i,d=n.useDispatch,h=d===void 0?ti:d,p=n.useSelector,b=p===void 0?hR:p,m=n.useStore,w=m===void 0?vR:m,x=n.unstable__sideEffectsInRender,y=x===void 0?!1:x;return{name:bZ,init:function(_,E,D){var T=E.serializeQueryArgs,O=_,I=pZ({api:_,moduleOptions:{batch:s,useDispatch:h,useSelector:b,useStore:w,unstable__sideEffectsInRender:y},serializeQueryArgs:T,context:D}),M=I.buildQueryHooks,B=I.buildMutationHook,z=I.usePrefetch;return Yg(O,{usePrefetch:z}),Yg(D,{batch:s}),{injectEndpoint:function(U,q){if(gZ(q)){var H=M(U),P=H.useQuery,Y=H.useLazyQuery,K=H.useLazyQuerySubscription,ee=H.useQueryState,ne=H.useQuerySubscription;Yg(O.endpoints[U],{useQuery:P,useLazyQuery:Y,useLazyQuerySubscription:K,useQueryState:ee,useQuerySubscription:ne}),_["use"+gy(U)+"Query"]=P,_["useLazy"+gy(U)+"Query"]=Y}else if(mZ(q)){var te=B(U);Yg(O.endpoints[U],{useMutation:te}),_["use"+gy(U)+"Mutation"]=te}}}}}},vZ=rQ(mQ(),kZ());function wR(t,n){return function(){return t.apply(n,arguments)}}const{toString:wZ}=Object.prototype,{getPrototypeOf:RA}=Object,wb=(t=>n=>{const i=wZ.call(n);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Do=t=>(t=t.toLowerCase(),n=>wb(n)===t),yb=t=>n=>typeof n===t,{isArray:zd}=Array,yf=yb("undefined");function yZ(t){return t!==null&&!yf(t)&&t.constructor!==null&&!yf(t.constructor)&&bi(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const yR=Do("ArrayBuffer");function _Z(t){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(t):n=t&&t.buffer&&yR(t.buffer),n}const AZ=yb("string"),bi=yb("function"),_R=yb("number"),_b=t=>t!==null&&typeof t=="object",CZ=t=>t===!0||t===!1,km=t=>{if(wb(t)!=="object")return!1;const n=RA(t);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},xZ=Do("Date"),EZ=Do("File"),SZ=Do("Blob"),DZ=Do("FileList"),TZ=t=>_b(t)&&bi(t.pipe),MZ=t=>{let n;return t&&(typeof FormData=="function"&&t instanceof FormData||bi(t.append)&&((n=wb(t))==="formdata"||n==="object"&&bi(t.toString)&&t.toString()==="[object FormData]"))},NZ=Do("URLSearchParams"),IZ=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lf(t,n,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let s,d;if(typeof t!="object"&&(t=[t]),zd(t))for(s=0,d=t.length;s<d;s++)n.call(null,t[s],s,t);else{const h=i?Object.getOwnPropertyNames(t):Object.keys(t),p=h.length;let b;for(s=0;s<p;s++)b=h[s],n.call(null,t[b],b,t)}}function AR(t,n){n=n.toLowerCase();const i=Object.keys(t);let s=i.length,d;for(;s-- >0;)if(d=i[s],n===d.toLowerCase())return d;return null}const CR=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xR=t=>!yf(t)&&t!==CR;function Q1(){const{caseless:t}=xR(this)&&this||{},n={},i=(s,d)=>{const h=t&&AR(n,d)||d;km(n[h])&&km(s)?n[h]=Q1(n[h],s):km(s)?n[h]=Q1({},s):zd(s)?n[h]=s.slice():n[h]=s};for(let s=0,d=arguments.length;s<d;s++)arguments[s]&&Lf(arguments[s],i);return n}const OZ=(t,n,i,{allOwnKeys:s}={})=>(Lf(n,(d,h)=>{i&&bi(d)?t[h]=wR(d,i):t[h]=d},{allOwnKeys:s}),t),PZ=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),BZ=(t,n,i,s)=>{t.prototype=Object.create(n.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:n.prototype}),i&&Object.assign(t.prototype,i)},RZ=(t,n,i,s)=>{let d,h,p;const b={};if(n=n||{},t==null)return n;do{for(d=Object.getOwnPropertyNames(t),h=d.length;h-- >0;)p=d[h],(!s||s(p,t,n))&&!b[p]&&(n[p]=t[p],b[p]=!0);t=i!==!1&&RA(t)}while(t&&(!i||i(t,n))&&t!==Object.prototype);return n},LZ=(t,n,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=n.length;const s=t.indexOf(n,i);return s!==-1&&s===i},zZ=t=>{if(!t)return null;if(zd(t))return t;let n=t.length;if(!_R(n))return null;const i=new Array(n);for(;n-- >0;)i[n]=t[n];return i},jZ=(t=>n=>t&&n instanceof t)(typeof Uint8Array<"u"&&RA(Uint8Array)),FZ=(t,n)=>{const s=(t&&t[Symbol.iterator]).call(t);let d;for(;(d=s.next())&&!d.done;){const h=d.value;n.call(t,h[0],h[1])}},$Z=(t,n)=>{let i;const s=[];for(;(i=t.exec(n))!==null;)s.push(i);return s},VZ=Do("HTMLFormElement"),UZ=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,s,d){return s.toUpperCase()+d}),Z4=(({hasOwnProperty:t})=>(n,i)=>t.call(n,i))(Object.prototype),HZ=Do("RegExp"),ER=(t,n)=>{const i=Object.getOwnPropertyDescriptors(t),s={};Lf(i,(d,h)=>{let p;(p=n(d,h,t))!==!1&&(s[h]=p||d)}),Object.defineProperties(t,s)},qZ=t=>{ER(t,(n,i)=>{if(bi(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const s=t[i];if(!!bi(s)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},WZ=(t,n)=>{const i={},s=d=>{d.forEach(h=>{i[h]=!0})};return zd(t)?s(t):s(String(t).split(n)),i},GZ=()=>{},YZ=(t,n)=>(t=+t,Number.isFinite(t)?t:n),my="abcdefghijklmnopqrstuvwxyz",J4="0123456789",SR={DIGIT:J4,ALPHA:my,ALPHA_DIGIT:my+my.toUpperCase()+J4},KZ=(t=16,n=SR.ALPHA_DIGIT)=>{let i="";const{length:s}=n;for(;t--;)i+=n[Math.random()*s|0];return i};function QZ(t){return!!(t&&bi(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const ZZ=t=>{const n=new Array(10),i=(s,d)=>{if(_b(s)){if(n.indexOf(s)>=0)return;if(!("toJSON"in s)){n[d]=s;const h=zd(s)?[]:{};return Lf(s,(p,b)=>{const m=i(p,d+1);!yf(m)&&(h[b]=m)}),n[d]=void 0,h}}return s};return i(t,0)},JZ=Do("AsyncFunction"),XZ=t=>t&&(_b(t)||bi(t))&&bi(t.then)&&bi(t.catch),ce={isArray:zd,isArrayBuffer:yR,isBuffer:yZ,isFormData:MZ,isArrayBufferView:_Z,isString:AZ,isNumber:_R,isBoolean:CZ,isObject:_b,isPlainObject:km,isUndefined:yf,isDate:xZ,isFile:EZ,isBlob:SZ,isRegExp:HZ,isFunction:bi,isStream:TZ,isURLSearchParams:NZ,isTypedArray:jZ,isFileList:DZ,forEach:Lf,merge:Q1,extend:OZ,trim:IZ,stripBOM:PZ,inherits:BZ,toFlatObject:RZ,kindOf:wb,kindOfTest:Do,endsWith:LZ,toArray:zZ,forEachEntry:FZ,matchAll:$Z,isHTMLForm:VZ,hasOwnProperty:Z4,hasOwnProp:Z4,reduceDescriptors:ER,freezeMethods:qZ,toObjectSet:WZ,toCamelCase:UZ,noop:GZ,toFiniteNumber:YZ,findKey:AR,global:CR,isContextDefined:xR,ALPHABET:SR,generateString:KZ,isSpecCompliantForm:QZ,toJSONObject:ZZ,isAsyncFn:JZ,isThenable:XZ};function ht(t,n,i,s,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),d&&(this.response=d)}ce.inherits(ht,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ce.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const DR=ht.prototype,TR={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{TR[t]={value:t}});Object.defineProperties(ht,TR);Object.defineProperty(DR,"isAxiosError",{value:!0});ht.from=(t,n,i,s,d,h)=>{const p=Object.create(DR);return ce.toFlatObject(t,p,function(m){return m!==Error.prototype},b=>b!=="isAxiosError"),ht.call(p,t.message,n,i,s,d),p.cause=t,p.name=t.name,h&&Object.assign(p,h),p};const eJ=null;function Z1(t){return ce.isPlainObject(t)||ce.isArray(t)}function MR(t){return ce.endsWith(t,"[]")?t.slice(0,-2):t}function X4(t,n,i){return t?t.concat(n).map(function(d,h){return d=MR(d),!i&&h?"["+d+"]":d}).join(i?".":""):n}function tJ(t){return ce.isArray(t)&&!t.some(Z1)}const nJ=ce.toFlatObject(ce,{},null,function(n){return/^is[A-Z]/.test(n)});function Ab(t,n,i){if(!ce.isObject(t))throw new TypeError("target must be an object");n=n||new FormData,i=ce.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,O){return!ce.isUndefined(O[T])});const s=i.metaTokens,d=i.visitor||x,h=i.dots,p=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&ce.isSpecCompliantForm(n);if(!ce.isFunction(d))throw new TypeError("visitor must be a function");function w(D){if(D===null)return"";if(ce.isDate(D))return D.toISOString();if(!m&&ce.isBlob(D))throw new ht("Blob is not supported. Use a Buffer instead.");return ce.isArrayBuffer(D)||ce.isTypedArray(D)?m&&typeof Blob=="function"?new Blob([D]):Buffer.from(D):D}function x(D,T,O){let I=D;if(D&&!O&&typeof D=="object"){if(ce.endsWith(T,"{}"))T=s?T:T.slice(0,-2),D=JSON.stringify(D);else if(ce.isArray(D)&&tJ(D)||(ce.isFileList(D)||ce.endsWith(T,"[]"))&&(I=ce.toArray(D)))return T=MR(T),I.forEach(function(B,z){!(ce.isUndefined(B)||B===null)&&n.append(p===!0?X4([T],z,h):p===null?T:T+"[]",w(B))}),!1}return Z1(D)?!0:(n.append(X4(O,T,h),w(D)),!1)}const y=[],_=Object.assign(nJ,{defaultVisitor:x,convertValue:w,isVisitable:Z1});function E(D,T){if(!ce.isUndefined(D)){if(y.indexOf(D)!==-1)throw Error("Circular reference detected in "+T.join("."));y.push(D),ce.forEach(D,function(I,M){(!(ce.isUndefined(I)||I===null)&&d.call(n,I,ce.isString(M)?M.trim():M,T,_))===!0&&E(I,T?T.concat(M):[M])}),y.pop()}}if(!ce.isObject(t))throw new TypeError("data must be an object");return E(t),n}function eI(t){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return n[s]})}function LA(t,n){this._pairs=[],t&&Ab(t,this,n)}const NR=LA.prototype;NR.append=function(n,i){this._pairs.push([n,i])};NR.toString=function(n){const i=n?function(s){return n.call(this,s,eI)}:eI;return this._pairs.map(function(d){return i(d[0])+"="+i(d[1])},"").join("&")};function rJ(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function IR(t,n,i){if(!n)return t;const s=i&&i.encode||rJ,d=i&&i.serialize;let h;if(d?h=d(n,i):h=ce.isURLSearchParams(n)?n.toString():new LA(n,i).toString(s),h){const p=t.indexOf("#");p!==-1&&(t=t.slice(0,p)),t+=(t.indexOf("?")===-1?"?":"&")+h}return t}class iJ{constructor(){this.handlers=[]}use(n,i,s){return this.handlers.push({fulfilled:n,rejected:i,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){ce.forEach(this.handlers,function(s){s!==null&&n(s)})}}const tI=iJ,OR={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oJ=typeof URLSearchParams<"u"?URLSearchParams:LA,sJ=typeof FormData<"u"?FormData:null,aJ=typeof Blob<"u"?Blob:null,lJ={isBrowser:!0,classes:{URLSearchParams:oJ,FormData:sJ,Blob:aJ},protocols:["http","https","file","blob","url","data"]},PR=typeof window<"u"&&typeof document<"u",cJ=(t=>PR&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),dJ=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),uJ=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:PR,hasStandardBrowserWebWorkerEnv:dJ,hasStandardBrowserEnv:cJ},Symbol.toStringTag,{value:"Module"})),vo={...uJ,...lJ};function hJ(t,n){return Ab(t,new vo.classes.URLSearchParams,Object.assign({visitor:function(i,s,d,h){return vo.isNode&&ce.isBuffer(i)?(this.append(s,i.toString("base64")),!1):h.defaultVisitor.apply(this,arguments)}},n))}function fJ(t){return ce.matchAll(/\w+|\[(\w*)]/g,t).map(n=>n[0]==="[]"?"":n[1]||n[0])}function pJ(t){const n={},i=Object.keys(t);let s;const d=i.length;let h;for(s=0;s<d;s++)h=i[s],n[h]=t[h];return n}function BR(t){function n(i,s,d,h){let p=i[h++];if(p==="__proto__")return!0;const b=Number.isFinite(+p),m=h>=i.length;return p=!p&&ce.isArray(d)?d.length:p,m?(ce.hasOwnProp(d,p)?d[p]=[d[p],s]:d[p]=s,!b):((!d[p]||!ce.isObject(d[p]))&&(d[p]=[]),n(i,s,d[p],h)&&ce.isArray(d[p])&&(d[p]=pJ(d[p])),!b)}if(ce.isFormData(t)&&ce.isFunction(t.entries)){const i={};return ce.forEachEntry(t,(s,d)=>{n(fJ(s),d,i,0)}),i}return null}function gJ(t,n,i){if(ce.isString(t))try{return(n||JSON.parse)(t),ce.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(i||JSON.stringify)(t)}const zA={transitional:OR,adapter:["xhr","http"],transformRequest:[function(n,i){const s=i.getContentType()||"",d=s.indexOf("application/json")>-1,h=ce.isObject(n);if(h&&ce.isHTMLForm(n)&&(n=new FormData(n)),ce.isFormData(n))return d?JSON.stringify(BR(n)):n;if(ce.isArrayBuffer(n)||ce.isBuffer(n)||ce.isStream(n)||ce.isFile(n)||ce.isBlob(n))return n;if(ce.isArrayBufferView(n))return n.buffer;if(ce.isURLSearchParams(n))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let b;if(h){if(s.indexOf("application/x-www-form-urlencoded")>-1)return hJ(n,this.formSerializer).toString();if((b=ce.isFileList(n))||s.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return Ab(b?{"files[]":n}:n,m&&new m,this.formSerializer)}}return h||d?(i.setContentType("application/json",!1),gJ(n)):n}],transformResponse:[function(n){const i=this.transitional||zA.transitional,s=i&&i.forcedJSONParsing,d=this.responseType==="json";if(n&&ce.isString(n)&&(s&&!this.responseType||d)){const p=!(i&&i.silentJSONParsing)&&d;try{return JSON.parse(n)}catch(b){if(p)throw b.name==="SyntaxError"?ht.from(b,ht.ERR_BAD_RESPONSE,this,null,this.response):b}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:vo.classes.FormData,Blob:vo.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ce.forEach(["delete","get","head","post","put","patch"],t=>{zA.headers[t]={}});const jA=zA,mJ=ce.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bJ=t=>{const n={};let i,s,d;return t&&t.split(`
`).forEach(function(p){d=p.indexOf(":"),i=p.substring(0,d).trim().toLowerCase(),s=p.substring(d+1).trim(),!(!i||n[i]&&mJ[i])&&(i==="set-cookie"?n[i]?n[i].push(s):n[i]=[s]:n[i]=n[i]?n[i]+", "+s:s)}),n},nI=Symbol("internals");function fh(t){return t&&String(t).trim().toLowerCase()}function vm(t){return t===!1||t==null?t:ce.isArray(t)?t.map(vm):String(t)}function kJ(t){const n=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=i.exec(t);)n[s[1]]=s[2];return n}const vJ=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function by(t,n,i,s,d){if(ce.isFunction(s))return s.call(this,n,i);if(d&&(n=i),!!ce.isString(n)){if(ce.isString(s))return n.indexOf(s)!==-1;if(ce.isRegExp(s))return s.test(n)}}function wJ(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,i,s)=>i.toUpperCase()+s)}function yJ(t,n){const i=ce.toCamelCase(" "+n);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+i,{value:function(d,h,p){return this[s].call(this,n,d,h,p)},configurable:!0})})}class Cb{constructor(n){n&&this.set(n)}set(n,i,s){const d=this;function h(b,m,w){const x=fh(m);if(!x)throw new Error("header name must be a non-empty string");const y=ce.findKey(d,x);(!y||d[y]===void 0||w===!0||w===void 0&&d[y]!==!1)&&(d[y||m]=vm(b))}const p=(b,m)=>ce.forEach(b,(w,x)=>h(w,x,m));return ce.isPlainObject(n)||n instanceof this.constructor?p(n,i):ce.isString(n)&&(n=n.trim())&&!vJ(n)?p(bJ(n),i):n!=null&&h(i,n,s),this}get(n,i){if(n=fh(n),n){const s=ce.findKey(this,n);if(s){const d=this[s];if(!i)return d;if(i===!0)return kJ(d);if(ce.isFunction(i))return i.call(this,d,s);if(ce.isRegExp(i))return i.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,i){if(n=fh(n),n){const s=ce.findKey(this,n);return!!(s&&this[s]!==void 0&&(!i||by(this,this[s],s,i)))}return!1}delete(n,i){const s=this;let d=!1;function h(p){if(p=fh(p),p){const b=ce.findKey(s,p);b&&(!i||by(s,s[b],b,i))&&(delete s[b],d=!0)}}return ce.isArray(n)?n.forEach(h):h(n),d}clear(n){const i=Object.keys(this);let s=i.length,d=!1;for(;s--;){const h=i[s];(!n||by(this,this[h],h,n,!0))&&(delete this[h],d=!0)}return d}normalize(n){const i=this,s={};return ce.forEach(this,(d,h)=>{const p=ce.findKey(s,h);if(p){i[p]=vm(d),delete i[h];return}const b=n?wJ(h):String(h).trim();b!==h&&delete i[h],i[b]=vm(d),s[b]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const i=Object.create(null);return ce.forEach(this,(s,d)=>{s!=null&&s!==!1&&(i[d]=n&&ce.isArray(s)?s.join(", "):s)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,i])=>n+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...i){const s=new this(n);return i.forEach(d=>s.set(d)),s}static accessor(n){const s=(this[nI]=this[nI]={accessors:{}}).accessors,d=this.prototype;function h(p){const b=fh(p);s[b]||(yJ(d,p),s[b]=!0)}return ce.isArray(n)?n.forEach(h):h(n),this}}Cb.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ce.reduceDescriptors(Cb.prototype,({value:t},n)=>{let i=n[0].toUpperCase()+n.slice(1);return{get:()=>t,set(s){this[i]=s}}});ce.freezeMethods(Cb);const os=Cb;function ky(t,n){const i=this||jA,s=n||i,d=os.from(s.headers);let h=s.data;return ce.forEach(t,function(b){h=b.call(i,h,d.normalize(),n?n.status:void 0)}),d.normalize(),h}function RR(t){return!!(t&&t.__CANCEL__)}function zf(t,n,i){ht.call(this,t==null?"canceled":t,ht.ERR_CANCELED,n,i),this.name="CanceledError"}ce.inherits(zf,ht,{__CANCEL__:!0});function _J(t,n,i){const s=i.config.validateStatus;!i.status||!s||s(i.status)?t(i):n(new ht("Request failed with status code "+i.status,[ht.ERR_BAD_REQUEST,ht.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}const AJ=vo.hasStandardBrowserEnv?{write(t,n,i,s,d,h){const p=[t+"="+encodeURIComponent(n)];ce.isNumber(i)&&p.push("expires="+new Date(i).toGMTString()),ce.isString(s)&&p.push("path="+s),ce.isString(d)&&p.push("domain="+d),h===!0&&p.push("secure"),document.cookie=p.join("; ")},read(t){const n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function CJ(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function xJ(t,n){return n?t.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):t}function LR(t,n){return t&&!CJ(n)?xJ(t,n):n}const EJ=vo.hasStandardBrowserEnv?function(){const n=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");let s;function d(h){let p=h;return n&&(i.setAttribute("href",p),p=i.href),i.setAttribute("href",p),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return s=d(window.location.href),function(p){const b=ce.isString(p)?d(p):p;return b.protocol===s.protocol&&b.host===s.host}}():function(){return function(){return!0}}();function SJ(t){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""}function DJ(t,n){t=t||10;const i=new Array(t),s=new Array(t);let d=0,h=0,p;return n=n!==void 0?n:1e3,function(m){const w=Date.now(),x=s[h];p||(p=w),i[d]=m,s[d]=w;let y=h,_=0;for(;y!==d;)_+=i[y++],y=y%t;if(d=(d+1)%t,d===h&&(h=(h+1)%t),w-p<n)return;const E=x&&w-x;return E?Math.round(_*1e3/E):void 0}}function rI(t,n){let i=0;const s=DJ(50,250);return d=>{const h=d.loaded,p=d.lengthComputable?d.total:void 0,b=h-i,m=s(b),w=h<=p;i=h;const x={loaded:h,total:p,progress:p?h/p:void 0,bytes:b,rate:m||void 0,estimated:m&&p&&w?(p-h)/m:void 0,event:d};x[n?"download":"upload"]=!0,t(x)}}const TJ=typeof XMLHttpRequest<"u",MJ=TJ&&function(t){return new Promise(function(i,s){let d=t.data;const h=os.from(t.headers).normalize();let{responseType:p,withXSRFToken:b}=t,m;function w(){t.cancelToken&&t.cancelToken.unsubscribe(m),t.signal&&t.signal.removeEventListener("abort",m)}let x;if(ce.isFormData(d)){if(vo.hasStandardBrowserEnv||vo.hasStandardBrowserWebWorkerEnv)h.setContentType(!1);else if((x=h.getContentType())!==!1){const[T,...O]=x?x.split(";").map(I=>I.trim()).filter(Boolean):[];h.setContentType([T||"multipart/form-data",...O].join("; "))}}let y=new XMLHttpRequest;if(t.auth){const T=t.auth.username||"",O=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";h.set("Authorization","Basic "+btoa(T+":"+O))}const _=LR(t.baseURL,t.url);y.open(t.method.toUpperCase(),IR(_,t.params,t.paramsSerializer),!0),y.timeout=t.timeout;function E(){if(!y)return;const T=os.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),I={data:!p||p==="text"||p==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:T,config:t,request:y};_J(function(B){i(B),w()},function(B){s(B),w()},I),y=null}if("onloadend"in y?y.onloadend=E:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(E)},y.onabort=function(){!y||(s(new ht("Request aborted",ht.ECONNABORTED,t,y)),y=null)},y.onerror=function(){s(new ht("Network Error",ht.ERR_NETWORK,t,y)),y=null},y.ontimeout=function(){let O=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const I=t.transitional||OR;t.timeoutErrorMessage&&(O=t.timeoutErrorMessage),s(new ht(O,I.clarifyTimeoutError?ht.ETIMEDOUT:ht.ECONNABORTED,t,y)),y=null},vo.hasStandardBrowserEnv&&(b&&ce.isFunction(b)&&(b=b(t)),b||b!==!1&&EJ(_))){const T=t.xsrfHeaderName&&t.xsrfCookieName&&AJ.read(t.xsrfCookieName);T&&h.set(t.xsrfHeaderName,T)}d===void 0&&h.setContentType(null),"setRequestHeader"in y&&ce.forEach(h.toJSON(),function(O,I){y.setRequestHeader(I,O)}),ce.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),p&&p!=="json"&&(y.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&y.addEventListener("progress",rI(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",rI(t.onUploadProgress)),(t.cancelToken||t.signal)&&(m=T=>{!y||(s(!T||T.type?new zf(null,t,y):T),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(m),t.signal&&(t.signal.aborted?m():t.signal.addEventListener("abort",m)));const D=SJ(_);if(D&&vo.protocols.indexOf(D)===-1){s(new ht("Unsupported protocol "+D+":",ht.ERR_BAD_REQUEST,t));return}y.send(d||null)})},J1={http:eJ,xhr:MJ};ce.forEach(J1,(t,n)=>{if(t){try{Object.defineProperty(t,"name",{value:n})}catch{}Object.defineProperty(t,"adapterName",{value:n})}});const iI=t=>`- ${t}`,NJ=t=>ce.isFunction(t)||t===null||t===!1,zR={getAdapter:t=>{t=ce.isArray(t)?t:[t];const{length:n}=t;let i,s;const d={};for(let h=0;h<n;h++){i=t[h];let p;if(s=i,!NJ(i)&&(s=J1[(p=String(i)).toLowerCase()],s===void 0))throw new ht(`Unknown adapter '${p}'`);if(s)break;d[p||"#"+h]=s}if(!s){const h=Object.entries(d).map(([b,m])=>`adapter ${b} `+(m===!1?"is not supported by the environment":"is not available in the build"));let p=n?h.length>1?`since :
`+h.map(iI).join(`
`):" "+iI(h[0]):"as no adapter specified";throw new ht("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return s},adapters:J1};function vy(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zf(null,t)}function oI(t){return vy(t),t.headers=os.from(t.headers),t.data=ky.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),zR.getAdapter(t.adapter||jA.adapter)(t).then(function(s){return vy(t),s.data=ky.call(t,t.transformResponse,s),s.headers=os.from(s.headers),s},function(s){return RR(s)||(vy(t),s&&s.response&&(s.response.data=ky.call(t,t.transformResponse,s.response),s.response.headers=os.from(s.response.headers))),Promise.reject(s)})}const sI=t=>t instanceof os?{...t}:t;function Md(t,n){n=n||{};const i={};function s(w,x,y){return ce.isPlainObject(w)&&ce.isPlainObject(x)?ce.merge.call({caseless:y},w,x):ce.isPlainObject(x)?ce.merge({},x):ce.isArray(x)?x.slice():x}function d(w,x,y){if(ce.isUndefined(x)){if(!ce.isUndefined(w))return s(void 0,w,y)}else return s(w,x,y)}function h(w,x){if(!ce.isUndefined(x))return s(void 0,x)}function p(w,x){if(ce.isUndefined(x)){if(!ce.isUndefined(w))return s(void 0,w)}else return s(void 0,x)}function b(w,x,y){if(y in n)return s(w,x);if(y in t)return s(void 0,w)}const m={url:h,method:h,data:h,baseURL:p,transformRequest:p,transformResponse:p,paramsSerializer:p,timeout:p,timeoutMessage:p,withCredentials:p,withXSRFToken:p,adapter:p,responseType:p,xsrfCookieName:p,xsrfHeaderName:p,onUploadProgress:p,onDownloadProgress:p,decompress:p,maxContentLength:p,maxBodyLength:p,beforeRedirect:p,transport:p,httpAgent:p,httpsAgent:p,cancelToken:p,socketPath:p,responseEncoding:p,validateStatus:b,headers:(w,x)=>d(sI(w),sI(x),!0)};return ce.forEach(Object.keys(Object.assign({},t,n)),function(x){const y=m[x]||d,_=y(t[x],n[x],x);ce.isUndefined(_)&&y!==b||(i[x]=_)}),i}const jR="1.6.8",FA={};["object","boolean","number","function","string","symbol"].forEach((t,n)=>{FA[t]=function(s){return typeof s===t||"a"+(n<1?"n ":" ")+t}});const aI={};FA.transitional=function(n,i,s){function d(h,p){return"[Axios v"+jR+"] Transitional option '"+h+"'"+p+(s?". "+s:"")}return(h,p,b)=>{if(n===!1)throw new ht(d(p," has been removed"+(i?" in "+i:"")),ht.ERR_DEPRECATED);return i&&!aI[p]&&(aI[p]=!0,console.warn(d(p," has been deprecated since v"+i+" and will be removed in the near future"))),n?n(h,p,b):!0}};function IJ(t,n,i){if(typeof t!="object")throw new ht("options must be an object",ht.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let d=s.length;for(;d-- >0;){const h=s[d],p=n[h];if(p){const b=t[h],m=b===void 0||p(b,h,t);if(m!==!0)throw new ht("option "+h+" must be "+m,ht.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ht("Unknown option "+h,ht.ERR_BAD_OPTION)}}const X1={assertOptions:IJ,validators:FA},qs=X1.validators;class l0{constructor(n){this.defaults=n,this.interceptors={request:new tI,response:new tI}}async request(n,i){try{return await this._request(n,i)}catch(s){if(s instanceof Error){let d;Error.captureStackTrace?Error.captureStackTrace(d={}):d=new Error;const h=d.stack?d.stack.replace(/^.+\n/,""):"";s.stack?h&&!String(s.stack).endsWith(h.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+h):s.stack=h}throw s}}_request(n,i){typeof n=="string"?(i=i||{},i.url=n):i=n||{},i=Md(this.defaults,i);const{transitional:s,paramsSerializer:d,headers:h}=i;s!==void 0&&X1.assertOptions(s,{silentJSONParsing:qs.transitional(qs.boolean),forcedJSONParsing:qs.transitional(qs.boolean),clarifyTimeoutError:qs.transitional(qs.boolean)},!1),d!=null&&(ce.isFunction(d)?i.paramsSerializer={serialize:d}:X1.assertOptions(d,{encode:qs.function,serialize:qs.function},!0)),i.method=(i.method||this.defaults.method||"get").toLowerCase();let p=h&&ce.merge(h.common,h[i.method]);h&&ce.forEach(["delete","get","head","post","put","patch","common"],D=>{delete h[D]}),i.headers=os.concat(p,h);const b=[];let m=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(i)===!1||(m=m&&T.synchronous,b.unshift(T.fulfilled,T.rejected))});const w=[];this.interceptors.response.forEach(function(T){w.push(T.fulfilled,T.rejected)});let x,y=0,_;if(!m){const D=[oI.bind(this),void 0];for(D.unshift.apply(D,b),D.push.apply(D,w),_=D.length,x=Promise.resolve(i);y<_;)x=x.then(D[y++],D[y++]);return x}_=b.length;let E=i;for(y=0;y<_;){const D=b[y++],T=b[y++];try{E=D(E)}catch(O){T.call(this,O);break}}try{x=oI.call(this,E)}catch(D){return Promise.reject(D)}for(y=0,_=w.length;y<_;)x=x.then(w[y++],w[y++]);return x}getUri(n){n=Md(this.defaults,n);const i=LR(n.baseURL,n.url);return IR(i,n.params,n.paramsSerializer)}}ce.forEach(["delete","get","head","options"],function(n){l0.prototype[n]=function(i,s){return this.request(Md(s||{},{method:n,url:i,data:(s||{}).data}))}});ce.forEach(["post","put","patch"],function(n){function i(s){return function(h,p,b){return this.request(Md(b||{},{method:n,headers:s?{"Content-Type":"multipart/form-data"}:{},url:h,data:p}))}}l0.prototype[n]=i(),l0.prototype[n+"Form"]=i(!0)});const wm=l0;class $A{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(h){i=h});const s=this;this.promise.then(d=>{if(!s._listeners)return;let h=s._listeners.length;for(;h-- >0;)s._listeners[h](d);s._listeners=null}),this.promise.then=d=>{let h;const p=new Promise(b=>{s.subscribe(b),h=b}).then(d);return p.cancel=function(){s.unsubscribe(h)},p},n(function(h,p,b){s.reason||(s.reason=new zf(h,p,b),i(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const i=this._listeners.indexOf(n);i!==-1&&this._listeners.splice(i,1)}static source(){let n;return{token:new $A(function(d){n=d}),cancel:n}}}const OJ=$A;function PJ(t){return function(i){return t.apply(null,i)}}function BJ(t){return ce.isObject(t)&&t.isAxiosError===!0}const e_={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(e_).forEach(([t,n])=>{e_[n]=t});const RJ=e_;function FR(t){const n=new wm(t),i=wR(wm.prototype.request,n);return ce.extend(i,wm.prototype,n,{allOwnKeys:!0}),ce.extend(i,n,null,{allOwnKeys:!0}),i.create=function(d){return FR(Md(t,d))},i}const Sn=FR(jA);Sn.Axios=wm;Sn.CanceledError=zf;Sn.CancelToken=OJ;Sn.isCancel=RR;Sn.VERSION=jR;Sn.toFormData=Ab;Sn.AxiosError=ht;Sn.Cancel=Sn.CanceledError;Sn.all=function(n){return Promise.all(n)};Sn.spread=PJ;Sn.isAxiosError=BJ;Sn.mergeConfig=Md;Sn.AxiosHeaders=os;Sn.formToJSON=t=>BR(ce.isHTMLForm(t)?new FormData(t):t);Sn.getAdapter=zR.getAdapter;Sn.HttpStatusCode=RJ;Sn.default=Sn;const LJ=Sn,zJ=({baseUrl:t,headers:n}={baseUrl:"",headers:{Accept:"application/json"}})=>async({url:i,method:s,data:d,params:h})=>{var p,b;try{console.log("Axios Call: ",i,s,d,h);const m=await LJ({url:t+i,method:s,data:d,params:h,headers:n});return console.log("Axios Success: ",i,s,m.data),{data:m.data}}catch(m){let w=m;return console.log("Axios Error: ",i,w),{error:{status:(p=w.response)==null?void 0:p.status,data:((b=w.response)==null?void 0:b.data)||w.message}}}},jJ={}.VITE_LOCAL_API,wy=localStorage.getItem("token"),ga=vZ({reducerPath:"apiSlice",baseQuery:zJ({baseUrl:jJ+"/api",headers:{Authorization:wy!=null?wy:"","Content-Type":"multipart/form-data",Accept:"application/json"}}),tagTypes:["Auth","User"],endpoints:t=>({getCurrentUser:t.query({query:()=>({url:"/auth/me"}),transformResponse(n,i,s){return n},providesTags:["User"]})})}),{useGetCurrentUserQuery:VA}=ga,FJ=ga.enhanceEndpoints({addTagTypes:["Authentication"]}),$J=FJ.injectEndpoints({endpoints:t=>({signIn:t.mutation({query(n){return{url:"/auth/login",method:"POST",data:n,invalidatesTags:["Authentication"]}},transformResponse(n,i,s){return localStorage.setItem("token",n.token),location.href="/",n},invalidatesTags:["Authentication"]}),employeeSignIn:t.mutation({query(n){return{url:"/employees/login",method:"POST",data:n,invalidatesTags:["Authentication"]}},transformResponse(n,i,s){return localStorage.setItem("token",n.token),location.href="/",n},invalidatesTags:["Authentication"]}),signUp:t.mutation({query:n=>({url:"/auth/register",method:"POST",body:n,invalidatesTags:["Authentication"]})}),signOut:t.mutation({query:n=>({url:"/auth/logout",method:"POST",invalidatesTags:["Authentication"]})}),forgotPassword:t.mutation({query:n=>({url:"/auth/reset_password",method:"POST",body:n,invalidatesTags:["Authentication"]})})})}),{useSignUpMutation:j1e,useSignInMutation:VJ,useEmployeeSignInMutation:UJ,useSignOutMutation:HJ,useForgotPasswordMutation:F1e}=$J;function qJ({align:t}){const n=Z.exports.useRef(null),i=Z.exports.useRef(null);Z.exports.useEffect(()=>{const w=({target:x})=>{!i.current||!s||i.current.contains(x)||n.current.contains(x)||d(!1)};return document.addEventListener("click",w),()=>document.removeEventListener("click",w)}),Z.exports.useEffect(()=>{const w=({keyCode:x})=>{!s||x!==27||d(!1)};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)});const[s,d]=Z.exports.useState(!1),{data:h={},isError:p,isLoading:b,isSuccess:m}=VA();return HJ(),b?A("h1",{children:"Loading"}):p?A("h1",{children:"Error Occurred"}):A(Dt,{children:m&&V("div",{className:"relative inline-flex",children:[V("button",{ref:n,className:"inline-flex justify-center items-center group","aria-haspopup":"true",onClick:()=>d(!s),"aria-expanded":s,children:[A("img",{className:"w-8 h-8 rounded-full",src:QY,width:"32",height:"32",alt:"User"}),V("div",{className:"flex items-center truncate",children:[A("span",{className:"truncate ml-2 text-sm font-medium group-hover:text-slate-800",children:h.data.name}),A("svg",{className:"w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",viewBox:"0 0 12 12",children:A("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"})})]})]}),A(Ed,{className:`origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${t==="right"?"right-0":"left-0"}`,show:s,enter:"transition ease-out duration-200 transform",enterStart:"opacity-0 -translate-y-2",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveStart:"opacity-100",leaveEnd:"opacity-0",children:V("div",{ref:i,onFocus:()=>d(!0),onBlur:()=>d(!1),children:[V("div",{className:"pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200",children:[A("div",{className:"font-medium text-slate-800",children:h.data.name}),A("div",{className:"text-xs text-slate-500 italic",children:h.data.email})]}),V("ul",{children:[A("li",{children:A(Ft,{className:"font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",to:"/account",onClick:()=>d(!s),children:"Settings"})}),A("li",{children:A("button",{className:"font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3",onClick:()=>{d(!s)},children:"Sign Out"})})]})]})})]})})}const WJ=({sidebarOpen:t,setSidebarOpen:n})=>{const[i,s]=Z.exports.useState(!1);return A("header",{className:"sticky top-0 bg-white border-b border-slate-200 z-30",children:A("div",{className:"px-4 sm:px-6 lg:px-8",children:V("div",{className:"flex items-center justify-between h-16 -mb-px",children:[A("div",{className:"flex",children:V("button",{className:"text-slate-500 hover:text-slate-600 lg:hidden","aria-controls":"sidebar","aria-expanded":t,onClick:d=>{d.stopPropagation(),n(!t)},children:[A("span",{className:"sr-only",children:"Open sidebar"}),V("svg",{className:"w-6 h-6 fill-current",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[A("rect",{x:"4",y:"5",width:"16",height:"2"}),A("rect",{x:"4",y:"11",width:"16",height:"2"}),A("rect",{x:"4",y:"17",width:"16",height:"2"})]})]})}),V("div",{className:"flex items-center space-x-3",children:[V("div",{children:[V("button",{className:`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${i&&"bg-slate-200"}`,onClick:d=>{d.stopPropagation(),s(!0)},"aria-controls":"search-modal",children:[A("span",{className:"sr-only",children:"Search"}),V("svg",{className:"w-4 h-4",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:[A("path",{className:"fill-current text-slate-500",d:"M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"}),A("path",{className:"fill-current text-slate-400",d:"M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"})]})]}),A(YY,{id:"search-modal",searchId:"search",modalOpen:i,setModalOpen:s})]}),A(KY,{align:"right"}),A("hr",{className:"w-px h-6 bg-slate-200 mx-3"}),A(qJ,{align:"right"})]})]})})})};function GJ({children:t,className:n,type:i,open:s,setOpen:d}){const h=b=>{switch(b){case"warning":return A("svg",{className:"w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"})});case"error":return A("svg",{className:"w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"})});case"success":return A("svg",{className:"w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"})});default:return A("svg",{className:"w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",viewBox:"0 0 16 16",children:A("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"})})}};return A(Dt,{children:s&&A("div",{className:n,children:A("div",{className:`px-4 py-2 rounded-sm text-sm border ${(b=>{switch(b){case"warning":return"bg-amber-100 border-amber-200 text-amber-600";case"error":return"bg-rose-100 border-rose-200 text-rose-600";case"success":return"bg-emerald-100 border-emerald-200 text-emerald-600";default:return"bg-indigo-100 border-indigo-200 text-indigo-500"}})(i)}`,children:V("div",{className:"flex w-full justify-between items-start",children:[V("div",{className:"flex",children:[h(i),A("div",{children:t})]}),V("button",{className:"opacity-70 hover:opacity-80 ml-3 mt-[3px]",onClick:()=>d(!1),children:[A("div",{className:"sr-only",children:"Close"}),A("svg",{className:"w-4 h-4 fill-current",children:A("path",{d:"M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"})})]})]})})})})}function YJ(){const[t,n]=Z.exports.useState(!1),[i,s]=Z.exports.useState(!1),d=hR(x=>x.notification.notification),{data:h={},isError:p,isLoading:b,isSuccess:m,error:w}=VA();return Z.exports.useEffect(()=>{s(d!==null)},[d]),V("div",{className:"flex h-screen overflow-hidden",children:[p&&w.status===401&&location.pathname!=="/signin"&&location.pathname!=="/signup"&&location.pathname!=="/reset-password"?A(Il,{to:"/signin",replace:!0}):A(Dt,{}),A(RY,{sidebarOpen:t,setSidebarOpen:n}),V("div",{className:"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden",children:[A(WJ,{sidebarOpen:t,setSidebarOpen:n}),d!==null?A(GJ,{type:d.type,open:i,setOpen:s,className:"mx-5 my-5 mb-0",children:d.message}):A(Dt,{}),A("main",{children:A("div",{className:"px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",children:A(W0,{})})})]})]})}const KJ="/assets/404-illustration.a20d59b6.svg";function QJ(){return Z.exports.useState(!1),A("div",{className:"flex h-screen overflow-hidden",children:A("div",{className:"relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",children:A("main",{children:A("div",{className:"px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",children:A("div",{className:"max-w-2xl m-auto mt-16",children:V("div",{className:"text-center px-4",children:[A("div",{className:"inline-flex mb-8",children:A("img",{src:KJ,width:"176",height:"176",alt:"404 illustration"})}),A("div",{className:"mb-6",children:"Hmm...this page doesn\u2019t exist. Try searching for something else!"}),A("button",{onClick:()=>window.history.back(),className:"btn bg-indigo-500 hover:bg-indigo-600 text-white",children:"Back To Dashboard"})]})})})})})})}const $R="/assets/auth-image.b4a9973b.jpg",UA="/assets/auth-decoration.a3f89aec.png";function ZJ(){return A("main",{className:"bg-white",children:V("div",{className:"relative md:flex",children:[A("div",{className:"md:w-1/2",children:V("div",{className:"min-h-screen h-full flex flex-col after:flex-1",children:[A("div",{className:"flex-1",children:A("div",{className:"flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",children:A(Ft,{className:"block",to:"/",children:V("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[V("defs",{children:[V("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a",children:[A("stop",{stopColor:"#A5B4FC",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#A5B4FC",offset:"100%"})]}),V("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b",children:[A("stop",{stopColor:"#38BDF8",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#38BDF8",offset:"100%"})]})]}),A("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),A("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),A("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),A("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})]})})})}),V("div",{className:"max-w-sm mx-auto px-4 py-8",children:[A("h1",{className:"text-3xl text-slate-800 font-bold mb-6",children:"Create your Account \u2728"}),V("form",{children:[V("div",{className:"space-y-4",children:[V("div",{children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"email",children:["Email Address ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"email",className:"form-input w-full",type:"email"})]}),V("div",{children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"name",children:["Full Name ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"name",className:"form-input w-full",type:"text"})]}),V("div",{children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"role",children:["Your Role ",A("span",{className:"text-rose-500",children:"*"})]}),V("select",{id:"role",className:"form-select w-full",children:[A("option",{children:"Designer"}),A("option",{children:"Developer"}),A("option",{children:"Accountant"})]})]}),V("div",{children:[A("label",{className:"block text-sm font-medium mb-1",htmlFor:"password",children:"Password"}),A("input",{id:"password",className:"form-input w-full",type:"password",autoComplete:"on"})]})]}),V("div",{className:"flex items-center justify-between mt-6",children:[A("div",{className:"mr-1",children:V("label",{className:"flex items-center",children:[A("input",{type:"checkbox",className:"form-checkbox"}),A("span",{className:"text-sm ml-2",children:"Email me about product news."})]})}),A(Ft,{className:"btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap",to:"/",children:"Sign Up"})]})]}),A("div",{className:"pt-5 mt-6 border-t border-slate-200",children:V("div",{className:"text-sm",children:["Have an account? ",A(Ft,{className:"font-medium text-indigo-500 hover:text-indigo-600",to:"/signin",children:"Sign In"})]})})]})]})}),V("div",{className:"hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2","aria-hidden":"true",children:[A("img",{className:"object-cover object-center w-full h-full",src:$R,width:"760",height:"1024",alt:"Authentication"}),A("img",{className:"absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block",src:UA,width:"218",height:"224",alt:"Authentication decoration"})]})]})})}var jf=t=>t.type==="checkbox",sd=t=>t instanceof Date,fr=t=>t==null;const VR=t=>typeof t=="object";var Bn=t=>!fr(t)&&!Array.isArray(t)&&VR(t)&&!sd(t),JJ=t=>Bn(t)&&t.target?jf(t.target)?t.target.checked:t.target.value:t,XJ=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,eX=(t,n)=>t.has(XJ(n)),tX=t=>{const n=t.constructor&&t.constructor.prototype;return Bn(n)&&n.hasOwnProperty("isPrototypeOf")},HA=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ci(t){let n;const i=Array.isArray(t);if(t instanceof Date)n=new Date(t);else if(t instanceof Set)n=new Set(t);else if(!(HA&&(t instanceof Blob||t instanceof FileList))&&(i||Bn(t)))if(n=i?[]:{},!i&&!tX(t))n=t;else for(const s in t)t.hasOwnProperty(s)&&(n[s]=ci(t[s]));else return t;return n}var Ff=t=>Array.isArray(t)?t.filter(Boolean):[],mn=t=>t===void 0,Be=(t,n,i)=>{if(!n||!Bn(t))return i;const s=Ff(n.split(/[,[\].]+?/)).reduce((d,h)=>fr(d)?d:d[h],t);return mn(s)||s===t?mn(t[n])?i:t[n]:s},Jo=t=>typeof t=="boolean";const lI={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$i={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qo={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};lt.createContext(null);var nX=(t,n,i,s=!0)=>{const d={defaultValues:n._defaultValues};for(const h in t)Object.defineProperty(d,h,{get:()=>{const p=h;return n._proxyFormState[p]!==$i.all&&(n._proxyFormState[p]=!s||$i.all),i&&(i[p]=!0),t[p]}});return d},Ur=t=>Bn(t)&&!Object.keys(t).length,rX=(t,n,i,s)=>{i(t);const{name:d,...h}=t;return Ur(h)||Object.keys(h).length>=Object.keys(n).length||Object.keys(h).find(p=>n[p]===(!s||$i.all))},yy=t=>Array.isArray(t)?t:[t];function iX(t){const n=lt.useRef(t);n.current=t,lt.useEffect(()=>{const i=!t.disabled&&n.current.subject&&n.current.subject.subscribe({next:n.current.next});return()=>{i&&i.unsubscribe()}},[t.disabled])}var wo=t=>typeof t=="string",oX=(t,n,i,s,d)=>wo(t)?(s&&n.watch.add(t),Be(i,t,d)):Array.isArray(t)?t.map(h=>(s&&n.watch.add(h),Be(i,h))):(s&&(n.watchAll=!0),i),qA=t=>/^\w*$/.test(t),UR=t=>Ff(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Ut=(t,n,i)=>{let s=-1;const d=qA(n)?[n]:UR(n),h=d.length,p=h-1;for(;++s<h;){const b=d[s];let m=i;if(s!==p){const w=t[b];m=Bn(w)||Array.isArray(w)?w:isNaN(+d[s+1])?{}:[]}t[b]=m,t=t[b]}return t},sX=(t,n,i,s,d)=>n?{...i[t],types:{...i[t]&&i[t].types?i[t].types:{},[s]:d||!0}}:{},cI=t=>({isOnSubmit:!t||t===$i.onSubmit,isOnBlur:t===$i.onBlur,isOnChange:t===$i.onChange,isOnAll:t===$i.all,isOnTouch:t===$i.onTouched}),dI=(t,n,i)=>!i&&(n.watchAll||n.watch.has(t)||[...n.watch].some(s=>t.startsWith(s)&&/^\.\w+/.test(t.slice(s.length))));const Hh=(t,n,i,s)=>{for(const d of i||Object.keys(t)){const h=Be(t,d);if(h){const{_f:p,...b}=h;if(p){if(p.refs&&p.refs[0]&&n(p.refs[0],d)&&!s)break;if(p.ref&&n(p.ref,p.name)&&!s)break;Hh(b,n)}else Bn(b)&&Hh(b,n)}}};var aX=(t,n,i)=>{const s=Ff(Be(t,i));return Ut(s,"root",n[i]),Ut(t,i,s),t},WA=t=>t.type==="file",ta=t=>typeof t=="function",c0=t=>{if(!HA)return!1;const n=t?t.ownerDocument:0;return t instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},ym=t=>wo(t),GA=t=>t.type==="radio",d0=t=>t instanceof RegExp;const uI={value:!1,isValid:!1},hI={value:!0,isValid:!0};var HR=t=>{if(Array.isArray(t)){if(t.length>1){const n=t.filter(i=>i&&i.checked&&!i.disabled).map(i=>i.value);return{value:n,isValid:!!n.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!mn(t[0].attributes.value)?mn(t[0].value)||t[0].value===""?hI:{value:t[0].value,isValid:!0}:hI:uI}return uI};const fI={isValid:!1,value:null};var qR=t=>Array.isArray(t)?t.reduce((n,i)=>i&&i.checked&&!i.disabled?{isValid:!0,value:i.value}:n,fI):fI;function pI(t,n,i="validate"){if(ym(t)||Array.isArray(t)&&t.every(ym)||Jo(t)&&!t)return{type:i,message:ym(t)?t:"",ref:n}}var Sc=t=>Bn(t)&&!d0(t)?t:{value:t,message:""},gI=async(t,n,i,s,d)=>{const{ref:h,refs:p,required:b,maxLength:m,minLength:w,min:x,max:y,pattern:_,validate:E,name:D,valueAsNumber:T,mount:O,disabled:I}=t._f,M=Be(n,D);if(!O||I)return{};const B=p?p[0]:h,z=ne=>{s&&B.reportValidity&&(B.setCustomValidity(Jo(ne)?"":ne||""),B.reportValidity())},U={},q=GA(h),H=jf(h),P=q||H,Y=(T||WA(h))&&mn(h.value)&&mn(M)||c0(h)&&h.value===""||M===""||Array.isArray(M)&&!M.length,K=sX.bind(null,D,i,U),ee=(ne,te,de,ue=qo.maxLength,Ee=qo.minLength)=>{const Ce=ne?te:de;U[D]={type:ne?ue:Ee,message:Ce,ref:h,...K(ne?ue:Ee,Ce)}};if(d?!Array.isArray(M)||!M.length:b&&(!P&&(Y||fr(M))||Jo(M)&&!M||H&&!HR(p).isValid||q&&!qR(p).isValid)){const{value:ne,message:te}=ym(b)?{value:!!b,message:b}:Sc(b);if(ne&&(U[D]={type:qo.required,message:te,ref:B,...K(qo.required,te)},!i))return z(te),U}if(!Y&&(!fr(x)||!fr(y))){let ne,te;const de=Sc(y),ue=Sc(x);if(!fr(M)&&!isNaN(M)){const Ee=h.valueAsNumber||M&&+M;fr(de.value)||(ne=Ee>de.value),fr(ue.value)||(te=Ee<ue.value)}else{const Ee=h.valueAsDate||new Date(M),Ce=ge=>new Date(new Date().toDateString()+" "+ge),oe=h.type=="time",le=h.type=="week";wo(de.value)&&M&&(ne=oe?Ce(M)>Ce(de.value):le?M>de.value:Ee>new Date(de.value)),wo(ue.value)&&M&&(te=oe?Ce(M)<Ce(ue.value):le?M<ue.value:Ee<new Date(ue.value))}if((ne||te)&&(ee(!!ne,de.message,ue.message,qo.max,qo.min),!i))return z(U[D].message),U}if((m||w)&&!Y&&(wo(M)||d&&Array.isArray(M))){const ne=Sc(m),te=Sc(w),de=!fr(ne.value)&&M.length>+ne.value,ue=!fr(te.value)&&M.length<+te.value;if((de||ue)&&(ee(de,ne.message,te.message),!i))return z(U[D].message),U}if(_&&!Y&&wo(M)){const{value:ne,message:te}=Sc(_);if(d0(ne)&&!M.match(ne)&&(U[D]={type:qo.pattern,message:te,ref:h,...K(qo.pattern,te)},!i))return z(te),U}if(E){if(ta(E)){const ne=await E(M,n),te=pI(ne,B);if(te&&(U[D]={...te,...K(qo.validate,te.message)},!i))return z(te.message),U}else if(Bn(E)){let ne={};for(const te in E){if(!Ur(ne)&&!i)break;const de=pI(await E[te](M,n),B,te);de&&(ne={...de,...K(te,de.message)},z(de.message),i&&(U[D]=ne))}if(!Ur(ne)&&(U[D]={ref:B,...ne},!i))return U}}return z(!0),U};function lX(t,n){const i=n.slice(0,-1).length;let s=0;for(;s<i;)t=mn(t)?s++:t[n[s++]];return t}function cX(t){for(const n in t)if(t.hasOwnProperty(n)&&!mn(t[n]))return!1;return!0}function Mn(t,n){const i=Array.isArray(n)?n:qA(n)?[n]:UR(n),s=i.length===1?t:lX(t,i),d=i.length-1,h=i[d];return s&&delete s[h],d!==0&&(Bn(s)&&Ur(s)||Array.isArray(s)&&cX(s))&&Mn(t,i.slice(0,-1)),t}var _y=()=>{let t=[];return{get observers(){return t},next:d=>{for(const h of t)h.next&&h.next(d)},subscribe:d=>(t.push(d),{unsubscribe:()=>{t=t.filter(h=>h!==d)}}),unsubscribe:()=>{t=[]}}},u0=t=>fr(t)||!VR(t);function kl(t,n){if(u0(t)||u0(n))return t===n;if(sd(t)&&sd(n))return t.getTime()===n.getTime();const i=Object.keys(t),s=Object.keys(n);if(i.length!==s.length)return!1;for(const d of i){const h=t[d];if(!s.includes(d))return!1;if(d!=="ref"){const p=n[d];if(sd(h)&&sd(p)||Bn(h)&&Bn(p)||Array.isArray(h)&&Array.isArray(p)?!kl(h,p):h!==p)return!1}}return!0}var WR=t=>t.type==="select-multiple",dX=t=>GA(t)||jf(t),Ay=t=>c0(t)&&t.isConnected,GR=t=>{for(const n in t)if(ta(t[n]))return!0;return!1};function h0(t,n={}){const i=Array.isArray(t);if(Bn(t)||i)for(const s in t)Array.isArray(t[s])||Bn(t[s])&&!GR(t[s])?(n[s]=Array.isArray(t[s])?[]:{},h0(t[s],n[s])):fr(t[s])||(n[s]=!0);return n}function YR(t,n,i){const s=Array.isArray(t);if(Bn(t)||s)for(const d in t)Array.isArray(t[d])||Bn(t[d])&&!GR(t[d])?mn(n)||u0(i[d])?i[d]=Array.isArray(t[d])?h0(t[d],[]):{...h0(t[d])}:YR(t[d],fr(n)?{}:n[d],i[d]):i[d]=!kl(t[d],n[d]);return i}var Kg=(t,n)=>YR(t,n,h0(n)),KR=(t,{valueAsNumber:n,valueAsDate:i,setValueAs:s})=>mn(t)?t:n?t===""?NaN:t&&+t:i&&wo(t)?new Date(t):s?s(t):t;function Cy(t){const n=t.ref;if(!(t.refs?t.refs.every(i=>i.disabled):n.disabled))return WA(n)?n.files:GA(n)?qR(t.refs).value:WR(n)?[...n.selectedOptions].map(({value:i})=>i):jf(n)?HR(t.refs).value:KR(mn(n.value)?t.ref.value:n.value,t)}var uX=(t,n,i,s)=>{const d={};for(const h of t){const p=Be(n,h);p&&Ut(d,h,p._f)}return{criteriaMode:i,names:[...t],fields:d,shouldUseNativeValidation:s}},ph=t=>mn(t)?t:d0(t)?t.source:Bn(t)?d0(t.value)?t.value.source:t.value:t,hX=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function mI(t,n,i){const s=Be(t,i);if(s||qA(i))return{error:s,name:i};const d=i.split(".");for(;d.length;){const h=d.join("."),p=Be(n,h),b=Be(t,h);if(p&&!Array.isArray(p)&&i!==h)return{name:i};if(b&&b.type)return{name:h,error:b};d.pop()}return{name:i}}var fX=(t,n,i,s,d)=>d.isOnAll?!1:!i&&d.isOnTouch?!(n||t):(i?s.isOnBlur:d.isOnBlur)?!t:(i?s.isOnChange:d.isOnChange)?t:!0,pX=(t,n)=>!Ff(Be(t,n)).length&&Mn(t,n);const gX={mode:$i.onSubmit,reValidateMode:$i.onChange,shouldFocusError:!0};function mX(t={}){let n={...gX,...t},i={submitCount:0,isDirty:!1,isLoading:ta(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},s={},d=Bn(n.defaultValues)||Bn(n.values)?ci(n.defaultValues||n.values)||{}:{},h=n.shouldUnregister?{}:ci(d),p={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,w=0;const x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:_y(),array:_y(),state:_y()},_=cI(n.mode),E=cI(n.reValidateMode),D=n.criteriaMode===$i.all,T=Q=>re=>{clearTimeout(w),w=setTimeout(Q,re)},O=async Q=>{if(x.isValid||Q){const re=n.resolver?Ur((await P()).errors):await K(s,!0);re!==i.isValid&&y.state.next({isValid:re})}},I=(Q,re)=>{(x.isValidating||x.validatingFields)&&((Q||Array.from(b.mount)).forEach(ae=>{ae&&(re?Ut(i.validatingFields,ae,re):Mn(i.validatingFields,ae))}),y.state.next({validatingFields:i.validatingFields,isValidating:!Ur(i.validatingFields)}))},M=(Q,re=[],ae,xe,be=!0,pe=!0)=>{if(xe&&ae){if(p.action=!0,pe&&Array.isArray(Be(s,Q))){const ze=ae(Be(s,Q),xe.argA,xe.argB);be&&Ut(s,Q,ze)}if(pe&&Array.isArray(Be(i.errors,Q))){const ze=ae(Be(i.errors,Q),xe.argA,xe.argB);be&&Ut(i.errors,Q,ze),pX(i.errors,Q)}if(x.touchedFields&&pe&&Array.isArray(Be(i.touchedFields,Q))){const ze=ae(Be(i.touchedFields,Q),xe.argA,xe.argB);be&&Ut(i.touchedFields,Q,ze)}x.dirtyFields&&(i.dirtyFields=Kg(d,h)),y.state.next({name:Q,isDirty:ne(Q,re),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else Ut(h,Q,re)},B=(Q,re)=>{Ut(i.errors,Q,re),y.state.next({errors:i.errors})},z=Q=>{i.errors=Q,y.state.next({errors:i.errors,isValid:!1})},U=(Q,re,ae,xe)=>{const be=Be(s,Q);if(be){const pe=Be(h,Q,mn(ae)?Be(d,Q):ae);mn(pe)||xe&&xe.defaultChecked||re?Ut(h,Q,re?pe:Cy(be._f)):ue(Q,pe),p.mount&&O()}},q=(Q,re,ae,xe,be)=>{let pe=!1,ze=!1;const pt={name:Q},bt=!!(Be(s,Q)&&Be(s,Q)._f.disabled);if(!ae||xe){x.isDirty&&(ze=i.isDirty,i.isDirty=pt.isDirty=ne(),pe=ze!==pt.isDirty);const yt=bt||kl(Be(d,Q),re);ze=!!(!bt&&Be(i.dirtyFields,Q)),yt||bt?Mn(i.dirtyFields,Q):Ut(i.dirtyFields,Q,!0),pt.dirtyFields=i.dirtyFields,pe=pe||x.dirtyFields&&ze!==!yt}if(ae){const yt=Be(i.touchedFields,Q);yt||(Ut(i.touchedFields,Q,ae),pt.touchedFields=i.touchedFields,pe=pe||x.touchedFields&&yt!==ae)}return pe&&be&&y.state.next(pt),pe?pt:{}},H=(Q,re,ae,xe)=>{const be=Be(i.errors,Q),pe=x.isValid&&Jo(re)&&i.isValid!==re;if(t.delayError&&ae?(m=T(()=>B(Q,ae)),m(t.delayError)):(clearTimeout(w),m=null,ae?Ut(i.errors,Q,ae):Mn(i.errors,Q)),(ae?!kl(be,ae):be)||!Ur(xe)||pe){const ze={...xe,...pe&&Jo(re)?{isValid:re}:{},errors:i.errors,name:Q};i={...i,...ze},y.state.next(ze)}},P=async Q=>{I(Q,!0);const re=await n.resolver(h,n.context,uX(Q||b.mount,s,n.criteriaMode,n.shouldUseNativeValidation));return I(Q),re},Y=async Q=>{const{errors:re}=await P(Q);if(Q)for(const ae of Q){const xe=Be(re,ae);xe?Ut(i.errors,ae,xe):Mn(i.errors,ae)}else i.errors=re;return re},K=async(Q,re,ae={valid:!0})=>{for(const xe in Q){const be=Q[xe];if(be){const{_f:pe,...ze}=be;if(pe){const pt=b.array.has(pe.name);I([xe],!0);const bt=await gI(be,h,D,n.shouldUseNativeValidation&&!re,pt);if(I([xe]),bt[pe.name]&&(ae.valid=!1,re))break;!re&&(Be(bt,pe.name)?pt?aX(i.errors,bt,pe.name):Ut(i.errors,pe.name,bt[pe.name]):Mn(i.errors,pe.name))}ze&&await K(ze,re,ae)}}return ae.valid},ee=()=>{for(const Q of b.unMount){const re=Be(s,Q);re&&(re._f.refs?re._f.refs.every(ae=>!Ay(ae)):!Ay(re._f.ref))&&We(Q)}b.unMount=new Set},ne=(Q,re)=>(Q&&re&&Ut(h,Q,re),!kl(Ne(),d)),te=(Q,re,ae)=>oX(Q,b,{...p.mount?h:mn(re)?d:wo(Q)?{[Q]:re}:re},ae,re),de=Q=>Ff(Be(p.mount?h:d,Q,t.shouldUnregister?Be(d,Q,[]):[])),ue=(Q,re,ae={})=>{const xe=Be(s,Q);let be=re;if(xe){const pe=xe._f;pe&&(!pe.disabled&&Ut(h,Q,KR(re,pe)),be=c0(pe.ref)&&fr(re)?"":re,WR(pe.ref)?[...pe.ref.options].forEach(ze=>ze.selected=be.includes(ze.value)):pe.refs?jf(pe.ref)?pe.refs.length>1?pe.refs.forEach(ze=>(!ze.defaultChecked||!ze.disabled)&&(ze.checked=Array.isArray(be)?!!be.find(pt=>pt===ze.value):be===ze.value)):pe.refs[0]&&(pe.refs[0].checked=!!be):pe.refs.forEach(ze=>ze.checked=ze.value===be):WA(pe.ref)?pe.ref.value="":(pe.ref.value=be,pe.ref.type||y.values.next({name:Q,values:{...h}})))}(ae.shouldDirty||ae.shouldTouch)&&q(Q,be,ae.shouldTouch,ae.shouldDirty,!0),ae.shouldValidate&&ge(Q)},Ee=(Q,re,ae)=>{for(const xe in re){const be=re[xe],pe=`${Q}.${xe}`,ze=Be(s,pe);(b.array.has(Q)||!u0(be)||ze&&!ze._f)&&!sd(be)?Ee(pe,be,ae):ue(pe,be,ae)}},Ce=(Q,re,ae={})=>{const xe=Be(s,Q),be=b.array.has(Q),pe=ci(re);Ut(h,Q,pe),be?(y.array.next({name:Q,values:{...h}}),(x.isDirty||x.dirtyFields)&&ae.shouldDirty&&y.state.next({name:Q,dirtyFields:Kg(d,h),isDirty:ne(Q,pe)})):xe&&!xe._f&&!fr(pe)?Ee(Q,pe,ae):ue(Q,pe,ae),dI(Q,b)&&y.state.next({...i}),y.values.next({name:p.mount?Q:void 0,values:{...h}})},oe=async Q=>{const re=Q.target;let ae=re.name,xe=!0;const be=Be(s,ae),pe=()=>re.type?Cy(be._f):JJ(Q),ze=pt=>{xe=Number.isNaN(pt)||pt===Be(h,ae,pt)};if(be){let pt,bt;const yt=pe(),vr=Q.type===lI.BLUR||Q.type===lI.FOCUS_OUT,Xd=!hX(be._f)&&!n.resolver&&!Be(i.errors,ae)&&!be._f.deps||fX(vr,Be(i.touchedFields,ae),i.isSubmitted,E,_),Ta=dI(ae,b,vr);Ut(h,ae,yt),vr?(be._f.onBlur&&be._f.onBlur(Q),m&&m(0)):be._f.onChange&&be._f.onChange(Q);const Ci=q(ae,yt,vr,!1),eu=!Ur(Ci)||Ta;if(!vr&&y.values.next({name:ae,type:Q.type,values:{...h}}),Xd)return x.isValid&&O(),eu&&y.state.next({name:ae,...Ta?{}:Ci});if(!vr&&Ta&&y.state.next({...i}),n.resolver){const{errors:Ma}=await P([ae]);if(ze(yt),xe){const Na=mI(i.errors,s,ae),ys=mI(Ma,s,Na.name||ae);pt=ys.error,ae=ys.name,bt=Ur(Ma)}}else I([ae],!0),pt=(await gI(be,h,D,n.shouldUseNativeValidation))[ae],I([ae]),ze(yt),xe&&(pt?bt=!1:x.isValid&&(bt=await K(s,!0)));xe&&(be._f.deps&&ge(be._f.deps),H(ae,bt,pt,Ci))}},le=(Q,re)=>{if(Be(i.errors,re)&&Q.focus)return Q.focus(),1},ge=async(Q,re={})=>{let ae,xe;const be=yy(Q);if(n.resolver){const pe=await Y(mn(Q)?Q:be);ae=Ur(pe),xe=Q?!be.some(ze=>Be(pe,ze)):ae}else Q?(xe=(await Promise.all(be.map(async pe=>{const ze=Be(s,pe);return await K(ze&&ze._f?{[pe]:ze}:ze)}))).every(Boolean),!(!xe&&!i.isValid)&&O()):xe=ae=await K(s);return y.state.next({...!wo(Q)||x.isValid&&ae!==i.isValid?{}:{name:Q},...n.resolver||!Q?{isValid:ae}:{},errors:i.errors}),re.shouldFocus&&!xe&&Hh(s,le,Q?be:b.mount),xe},Ne=Q=>{const re={...d,...p.mount?h:{}};return mn(Q)?re:wo(Q)?Be(re,Q):Q.map(ae=>Be(re,ae))},Re=(Q,re)=>({invalid:!!Be((re||i).errors,Q),isDirty:!!Be((re||i).dirtyFields,Q),isTouched:!!Be((re||i).touchedFields,Q),isValidating:!!Be((re||i).validatingFields,Q),error:Be((re||i).errors,Q)}),Fe=Q=>{Q&&yy(Q).forEach(re=>Mn(i.errors,re)),y.state.next({errors:Q?i.errors:{}})},Ve=(Q,re,ae)=>{const xe=(Be(s,Q,{_f:{}})._f||{}).ref;Ut(i.errors,Q,{...re,ref:xe}),y.state.next({name:Q,errors:i.errors,isValid:!1}),ae&&ae.shouldFocus&&xe&&xe.focus&&xe.focus()},Ue=(Q,re)=>ta(Q)?y.values.subscribe({next:ae=>Q(te(void 0,re),ae)}):te(Q,re,!0),We=(Q,re={})=>{for(const ae of Q?yy(Q):b.mount)b.mount.delete(ae),b.array.delete(ae),re.keepValue||(Mn(s,ae),Mn(h,ae)),!re.keepError&&Mn(i.errors,ae),!re.keepDirty&&Mn(i.dirtyFields,ae),!re.keepTouched&&Mn(i.touchedFields,ae),!re.keepIsValidating&&Mn(i.validatingFields,ae),!n.shouldUnregister&&!re.keepDefaultValue&&Mn(d,ae);y.values.next({values:{...h}}),y.state.next({...i,...re.keepDirty?{isDirty:ne()}:{}}),!re.keepIsValid&&O()},je=({disabled:Q,name:re,field:ae,fields:xe,value:be})=>{if(Jo(Q)){const pe=Q?void 0:mn(be)?Cy(ae?ae._f:Be(xe,re)._f):be;Ut(h,re,pe),q(re,pe,!1,!1,!0)}},vn=(Q,re={})=>{let ae=Be(s,Q);const xe=Jo(re.disabled);return Ut(s,Q,{...ae||{},_f:{...ae&&ae._f?ae._f:{ref:{name:Q}},name:Q,mount:!0,...re}}),b.mount.add(Q),ae?je({field:ae,disabled:re.disabled,name:Q,value:re.value}):U(Q,!0,re.value),{...xe?{disabled:re.disabled}:{},...n.progressive?{required:!!re.required,min:ph(re.min),max:ph(re.max),minLength:ph(re.minLength),maxLength:ph(re.maxLength),pattern:ph(re.pattern)}:{},name:Q,onChange:oe,onBlur:oe,ref:be=>{if(be){vn(Q,re),ae=Be(s,Q);const pe=mn(be.value)&&be.querySelectorAll&&be.querySelectorAll("input,select,textarea")[0]||be,ze=dX(pe),pt=ae._f.refs||[];if(ze?pt.find(bt=>bt===pe):pe===ae._f.ref)return;Ut(s,Q,{_f:{...ae._f,...ze?{refs:[...pt.filter(Ay),pe,...Array.isArray(Be(d,Q))?[{}]:[]],ref:{type:pe.type,name:Q}}:{ref:pe}}}),U(Q,!1,void 0,pe)}else ae=Be(s,Q,{}),ae._f&&(ae._f.mount=!1),(n.shouldUnregister||re.shouldUnregister)&&!(eX(b.array,Q)&&p.action)&&b.unMount.add(Q)}}},kr=()=>n.shouldFocusError&&Hh(s,le,b.mount),Hn=Q=>{Jo(Q)&&(y.state.next({disabled:Q}),Hh(s,(re,ae)=>{let xe=Q;const be=Be(s,ae);be&&Jo(be._f.disabled)&&(xe||(xe=be._f.disabled)),re.disabled=xe},0,!1))},un=(Q,re)=>async ae=>{let xe;ae&&(ae.preventDefault&&ae.preventDefault(),ae.persist&&ae.persist());let be=ci(h);if(y.state.next({isSubmitting:!0}),n.resolver){const{errors:pe,values:ze}=await P();i.errors=pe,be=ze}else await K(s);if(Mn(i.errors,"root"),Ur(i.errors)){y.state.next({errors:{}});try{await Q(be,ae)}catch(pe){xe=pe}}else re&&await re({...i.errors},ae),kr(),setTimeout(kr);if(y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ur(i.errors)&&!xe,submitCount:i.submitCount+1,errors:i.errors}),xe)throw xe},Xn=(Q,re={})=>{Be(s,Q)&&(mn(re.defaultValue)?Ce(Q,ci(Be(d,Q))):(Ce(Q,re.defaultValue),Ut(d,Q,ci(re.defaultValue))),re.keepTouched||Mn(i.touchedFields,Q),re.keepDirty||(Mn(i.dirtyFields,Q),i.isDirty=re.defaultValue?ne(Q,ci(Be(d,Q))):ne()),re.keepError||(Mn(i.errors,Q),x.isValid&&O()),y.state.next({...i}))},en=(Q,re={})=>{const ae=Q?ci(Q):d,xe=ci(ae),be=Ur(Q),pe=be?d:xe;if(re.keepDefaultValues||(d=ae),!re.keepValues){if(re.keepDirtyValues)for(const ze of b.mount)Be(i.dirtyFields,ze)?Ut(pe,ze,Be(h,ze)):Ce(ze,Be(pe,ze));else{if(HA&&mn(Q))for(const ze of b.mount){const pt=Be(s,ze);if(pt&&pt._f){const bt=Array.isArray(pt._f.refs)?pt._f.refs[0]:pt._f.ref;if(c0(bt)){const yt=bt.closest("form");if(yt){yt.reset();break}}}}s={}}h=t.shouldUnregister?re.keepDefaultValues?ci(d):{}:ci(pe),y.array.next({values:{...pe}}),y.values.next({values:{...pe}})}b={mount:re.keepDirtyValues?b.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!x.isValid||!!re.keepIsValid||!!re.keepDirtyValues,p.watch=!!t.shouldUnregister,y.state.next({submitCount:re.keepSubmitCount?i.submitCount:0,isDirty:be?!1:re.keepDirty?i.isDirty:!!(re.keepDefaultValues&&!kl(Q,d)),isSubmitted:re.keepIsSubmitted?i.isSubmitted:!1,dirtyFields:be?[]:re.keepDirtyValues?re.keepDefaultValues&&h?Kg(d,h):i.dirtyFields:re.keepDefaultValues&&Q?Kg(d,Q):{},touchedFields:re.keepTouched?i.touchedFields:{},errors:re.keepErrors?i.errors:{},isSubmitSuccessful:re.keepIsSubmitSuccessful?i.isSubmitSuccessful:!1,isSubmitting:!1})},rt=(Q,re)=>en(ta(Q)?Q(h):Q,re);return{control:{register:vn,unregister:We,getFieldState:Re,handleSubmit:un,setError:Ve,_executeSchema:P,_getWatch:te,_getDirty:ne,_updateValid:O,_removeUnmounted:ee,_updateFieldArray:M,_updateDisabledField:je,_getFieldArray:de,_reset:en,_resetDefaultValues:()=>ta(n.defaultValues)&&n.defaultValues().then(Q=>{rt(Q,n.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:Q=>{i={...i,...Q}},_disableForm:Hn,_subjects:y,_proxyFormState:x,_setErrors:z,get _fields(){return s},get _formValues(){return h},get _state(){return p},set _state(Q){p=Q},get _defaultValues(){return d},get _names(){return b},set _names(Q){b=Q},get _formState(){return i},set _formState(Q){i=Q},get _options(){return n},set _options(Q){n={...n,...Q}}},trigger:ge,register:vn,handleSubmit:un,watch:Ue,setValue:Ce,getValues:Ne,reset:rt,resetField:Xn,clearErrors:Fe,unregister:We,setError:Ve,setFocus:(Q,re={})=>{const ae=Be(s,Q),xe=ae&&ae._f;if(xe){const be=xe.refs?xe.refs[0]:xe.ref;be.focus&&(be.focus(),re.shouldSelect&&be.select())}},getFieldState:Re}}function Sa(t={}){const n=lt.useRef(),i=lt.useRef(),[s,d]=lt.useState({isDirty:!1,isValidating:!1,isLoading:ta(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:ta(t.defaultValues)?void 0:t.defaultValues});n.current||(n.current={...mX(t),formState:s});const h=n.current.control;return h._options=t,iX({subject:h._subjects.state,next:p=>{rX(p,h._proxyFormState,h._updateFormState,!0)&&d({...h._formState})}}),lt.useEffect(()=>h._disableForm(t.disabled),[h,t.disabled]),lt.useEffect(()=>{if(h._proxyFormState.isDirty){const p=h._getDirty();p!==s.isDirty&&h._subjects.state.next({isDirty:p})}},[h,s.isDirty]),lt.useEffect(()=>{t.values&&!kl(t.values,i.current)?(h._reset(t.values,h._options.resetOptions),i.current=t.values,d(p=>({...p}))):h._resetDefaultValues()},[t.values,h]),lt.useEffect(()=>{t.errors&&h._setErrors(t.errors)},[t.errors,h]),lt.useEffect(()=>{h._state.mount||(h._updateValid(),h._state.mount=!0),h._state.watch&&(h._state.watch=!1,h._subjects.state.next({...h._formState})),h._removeUnmounted()}),lt.useEffect(()=>{t.shouldUnregister&&h._subjects.values.next({values:h._getWatch()})},[t.shouldUnregister,h]),n.current.formState=nX(s,h),n.current}const bX=()=>{var w,x;const[t,n]=VJ(),{register:i,handleSubmit:s,watch:d,formState:{errors:h},reset:p}=Sa(),b=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,m=async y=>{const _=y.email,E=y.password;console.log(_,E),await t({email:_,password:E}).unwrap()};return n.isError&&console.log("Login Failed"),V(Dt,{children:[n.isSuccess&&A(Il,{to:"/",replace:!0}),A("main",{className:"bg-white",children:V("div",{className:"relative md:flex",children:[A("div",{className:"md:w-1/2",children:V("div",{className:"min-h-screen h-full flex flex-col after:flex-1",children:[A("div",{className:"flex-1",children:A("div",{className:"flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",children:A(Ft,{className:"block",to:"/",children:V("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[V("defs",{children:[V("linearGradient",{x1:"28.538%",y1:"20.229%",x2:"100%",y2:"108.156%",id:"logo-a",children:[A("stop",{stopColor:"#A5B4FC",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#A5B4FC",offset:"100%"})]}),V("linearGradient",{x1:"88.638%",y1:"29.267%",x2:"22.42%",y2:"100%",id:"logo-b",children:[A("stop",{stopColor:"#38BDF8",stopOpacity:"0",offset:"0%"}),A("stop",{stopColor:"#38BDF8",offset:"100%"})]})]}),A("rect",{fill:"#6366F1",width:"32",height:"32",rx:"16"}),A("path",{d:"M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",fill:"#4F46E5"}),A("path",{d:"M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",fill:"url(#logo-a)"}),A("path",{d:"M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",fill:"url(#logo-b)"})]})})})}),V("div",{className:"max-w-sm mx-auto px-4 py-8",children:[A("h1",{className:"text-3xl text-slate-800 font-bold mb-6",children:"Welcome back! \u2728"}),V("form",{onSubmit:s(m),children:[V("div",{className:"space-y-4",children:[V("div",{children:[A("label",{className:"block text-sm font-medium mb-1",htmlFor:"email",children:"Email Address"}),A("input",{id:"email",className:"form-input w-full",type:"text",autoComplete:"off",...i("email",{required:{value:!0,message:"Email is required"},pattern:{value:b,message:"You must provide a valid email"}})}),h.email&&A("p",{role:"alert",className:"text-red-600",children:(w=h.email)==null?void 0:w.message})]}),V("div",{children:[A("label",{className:"block text-sm font-medium mb-1",htmlFor:"password",children:"Password"}),A("input",{id:"password",className:"form-input w-full user-password",type:"password",autoComplete:"off",...i("password",{required:{value:!0,message:"Password is required"},minLength:{value:6,message:"Password must be longer than 6 characters"}})}),h.password&&A("p",{role:"alert",className:"text-red-600",children:(x=h.password)==null?void 0:x.message})]})]}),V("div",{className:"flex items-center justify-between mt-6",children:[A("div",{className:"mr-1",children:A(Ft,{className:"text-sm underline hover:no-underline",to:"/reset-password",children:"Forgot Password?"})}),A("button",{className:"btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3",type:"submit",children:"Sign In"})]})]}),A("div",{className:"pt-5 mt-6 border-t border-slate-200",children:V("div",{className:"text-sm",children:["Don\u2019t you have an account? ",A(Ft,{className:"font-medium text-indigo-500 hover:text-indigo-600",to:"/signup",children:"Sign Up"})]})})]})]})}),V("div",{className:"hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2","aria-hidden":"true",children:[A("img",{className:"object-cover object-center w-full h-full",src:$R,width:"760",height:"1024",alt:"Authentication"}),A("img",{className:"absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block",src:UA,width:"218",height:"224",alt:"Authentication decoration"})]})]})})]})},kX=()=>A(Dt,{children:"Dashboard Coming Soon"}),vX=()=>A("h1",{children:"Home Page"}),wX=t=>{const n=Zi(),{pathname:i}=n;return V(Dt,{children:[V("div",{className:"sm:flex sm:justify-between sm:items-center mb-5",children:[A("div",{className:"mb-4 sm:mb-0",children:A("h1",{className:"text-2xl md:text-3xl text-slate-800 font-bold",children:"Users  \u2728"})}),i.includes("add")?A(Dt,{}):A("div",{className:"grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2",children:V(Ft,{className:"btn bg-indigo-500 hover:bg-indigo-600 text-white",to:"/users/add",children:[A("svg",{className:"w-4 h-4 fill-current opacity-50 shrink-0",viewBox:"0 0 16 16",children:A("path",{d:"M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"})}),A("span",{className:"hidden xs:block ml-2",children:"Add User"})]})})]}),A(W0,{})]})},yX=ga.enhanceEndpoints({addTagTypes:["Users"]}),_X=yX.injectEndpoints({endpoints:t=>({createUser:t.mutation({query:n=>({url:"/users",method:"POST",data:n}),invalidatesTags:["Users"]}),getUsers:t.query({query:()=>({url:"/users"}),providesTags:["Users"],transformResponse:n=>n.data}),getUser:t.query({query:n=>({url:`/users/${n}`}),providesTags:["Users"],transformResponse:n=>n.data}),updateUser:t.mutation({query:({id:n,...i})=>({url:`/users/${n}`,method:"PUT",data:i}),invalidatesTags:["Users"]}),destroyUser:t.mutation({query:({id:n})=>({url:`/users/${n}`,method:"DELETE"}),invalidatesTags:["Users"]}),searchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdate:t.query({query:n=>({url:`/users/searchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdate/${n}`}),providesTags:["Users"],transformResponse:n=>n.data})})}),{useCreateUserMutation:QR,useLazyCreateUserMutation:$1e,useGetUsersQuery:ZR,useLazyGetUsersQuery:V1e,useGetUserQuery:U1e,useLazyGetUserQuery:JR,useUpdateUserMutation:XR,useLazyUpdateUserMutation:H1e,useDestroyUserMutation:AX,useLazyDestroyUserMutation:q1e,useLazySearchIdUsernameFirstNameLastNamePhoneNumberDriverLicenseHouseNumberResidentAddressBirthdateQuery:W1e}=_X;var fi={},$f={},CX=typeof pi=="object"&&pi&&pi.Object===Object&&pi,eL=CX,xX=eL,EX=typeof self=="object"&&self&&self.Object===Object&&self,SX=xX||EX||Function("return this")(),To=SX,DX=To,TX=DX.Symbol,Vf=TX,bI=Vf,tL=Object.prototype,MX=tL.hasOwnProperty,NX=tL.toString,gh=bI?bI.toStringTag:void 0;function IX(t){var n=MX.call(t,gh),i=t[gh];try{t[gh]=void 0;var s=!0}catch{}var d=NX.call(t);return s&&(n?t[gh]=i:delete t[gh]),d}var OX=IX,PX=Object.prototype,BX=PX.toString;function RX(t){return BX.call(t)}var LX=RX,kI=Vf,zX=OX,jX=LX,FX="[object Null]",$X="[object Undefined]",vI=kI?kI.toStringTag:void 0;function VX(t){return t==null?t===void 0?$X:FX:vI&&vI in Object(t)?zX(t):jX(t)}var Pl=VX,UX=Array.isArray,Ji=UX;function HX(t){return t!=null&&typeof t=="object"}var ms=HX,qX=Pl,WX=Ji,GX=ms,YX="[object String]";function KX(t){return typeof t=="string"||!WX(t)&&GX(t)&&qX(t)==YX}var QX=KX;function ZX(t){return function(n,i,s){for(var d=-1,h=Object(n),p=s(n),b=p.length;b--;){var m=p[t?b:++d];if(i(h[m],m,h)===!1)break}return n}}var JX=ZX,XX=JX,eee=XX(),tee=eee;function nee(t,n){for(var i=-1,s=Array(t);++i<t;)s[i]=n(i);return s}var ree=nee,iee=Pl,oee=ms,see="[object Arguments]";function aee(t){return oee(t)&&iee(t)==see}var lee=aee,wI=lee,cee=ms,nL=Object.prototype,dee=nL.hasOwnProperty,uee=nL.propertyIsEnumerable,hee=wI(function(){return arguments}())?wI:function(t){return cee(t)&&dee.call(t,"callee")&&!uee.call(t,"callee")},rL=hee,_f={exports:{}};function fee(){return!1}var pee=fee;(function(t,n){var i=To,s=pee,d=n&&!n.nodeType&&n,h=d&&!0&&t&&!t.nodeType&&t,p=h&&h.exports===d,b=p?i.Buffer:void 0,m=b?b.isBuffer:void 0,w=m||s;t.exports=w})(_f,_f.exports);var gee=9007199254740991,mee=/^(?:0|[1-9]\d*)$/;function bee(t,n){var i=typeof t;return n=n==null?gee:n,!!n&&(i=="number"||i!="symbol"&&mee.test(t))&&t>-1&&t%1==0&&t<n}var iL=bee,kee=9007199254740991;function vee(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=kee}var YA=vee,wee=Pl,yee=YA,_ee=ms,Aee="[object Arguments]",Cee="[object Array]",xee="[object Boolean]",Eee="[object Date]",See="[object Error]",Dee="[object Function]",Tee="[object Map]",Mee="[object Number]",Nee="[object Object]",Iee="[object RegExp]",Oee="[object Set]",Pee="[object String]",Bee="[object WeakMap]",Ree="[object ArrayBuffer]",Lee="[object DataView]",zee="[object Float32Array]",jee="[object Float64Array]",Fee="[object Int8Array]",$ee="[object Int16Array]",Vee="[object Int32Array]",Uee="[object Uint8Array]",Hee="[object Uint8ClampedArray]",qee="[object Uint16Array]",Wee="[object Uint32Array]",Ht={};Ht[zee]=Ht[jee]=Ht[Fee]=Ht[$ee]=Ht[Vee]=Ht[Uee]=Ht[Hee]=Ht[qee]=Ht[Wee]=!0;Ht[Aee]=Ht[Cee]=Ht[Ree]=Ht[xee]=Ht[Lee]=Ht[Eee]=Ht[See]=Ht[Dee]=Ht[Tee]=Ht[Mee]=Ht[Nee]=Ht[Iee]=Ht[Oee]=Ht[Pee]=Ht[Bee]=!1;function Gee(t){return _ee(t)&&yee(t.length)&&!!Ht[wee(t)]}var Yee=Gee;function Kee(t){return function(n){return t(n)}}var KA=Kee,Af={exports:{}};(function(t,n){var i=eL,s=n&&!n.nodeType&&n,d=s&&!0&&t&&!t.nodeType&&t,h=d&&d.exports===s,p=h&&i.process,b=function(){try{var m=d&&d.require&&d.require("util").types;return m||p&&p.binding&&p.binding("util")}catch{}}();t.exports=b})(Af,Af.exports);var Qee=Yee,Zee=KA,yI=Af.exports,_I=yI&&yI.isTypedArray,Jee=_I?Zee(_I):Qee,oL=Jee,Xee=ree,ete=rL,tte=Ji,nte=_f.exports,rte=iL,ite=oL,ote=Object.prototype,ste=ote.hasOwnProperty;function ate(t,n){var i=tte(t),s=!i&&ete(t),d=!i&&!s&&nte(t),h=!i&&!s&&!d&&ite(t),p=i||s||d||h,b=p?Xee(t.length,String):[],m=b.length;for(var w in t)(n||ste.call(t,w))&&!(p&&(w=="length"||d&&(w=="offset"||w=="parent")||h&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||rte(w,m)))&&b.push(w);return b}var sL=ate,lte=Object.prototype;function cte(t){var n=t&&t.constructor,i=typeof n=="function"&&n.prototype||lte;return t===i}var QA=cte;function dte(t,n){return function(i){return t(n(i))}}var aL=dte,ute=aL,hte=ute(Object.keys,Object),fte=hte,pte=QA,gte=fte,mte=Object.prototype,bte=mte.hasOwnProperty;function kte(t){if(!pte(t))return gte(t);var n=[];for(var i in Object(t))bte.call(t,i)&&i!="constructor"&&n.push(i);return n}var vte=kte;function wte(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var jd=wte,yte=Pl,_te=jd,Ate="[object AsyncFunction]",Cte="[object Function]",xte="[object GeneratorFunction]",Ete="[object Proxy]";function Ste(t){if(!_te(t))return!1;var n=yte(t);return n==Cte||n==xte||n==Ate||n==Ete}var lL=Ste,Dte=lL,Tte=YA;function Mte(t){return t!=null&&Tte(t.length)&&!Dte(t)}var xb=Mte,Nte=sL,Ite=vte,Ote=xb;function Pte(t){return Ote(t)?Nte(t):Ite(t)}var Uf=Pte,Bte=tee,Rte=Uf;function Lte(t,n){return t&&Bte(t,n,Rte)}var cL=Lte;function zte(t){return t}var dL=zte,jte=dL;function Fte(t){return typeof t=="function"?t:jte}var $te=Fte,Vte=cL,Ute=$te;function Hte(t,n){return t&&Vte(t,Ute(n))}var ZA=Hte,qte=aL,Wte=qte(Object.getPrototypeOf,Object),JA=Wte,Gte=Pl,Yte=JA,Kte=ms,Qte="[object Object]",Zte=Function.prototype,Jte=Object.prototype,uL=Zte.toString,Xte=Jte.hasOwnProperty,ene=uL.call(Object);function tne(t){if(!Kte(t)||Gte(t)!=Qte)return!1;var n=Yte(t);if(n===null)return!0;var i=Xte.call(n,"constructor")&&n.constructor;return typeof i=="function"&&i instanceof i&&uL.call(i)==ene}var nne=tne;function rne(t,n){for(var i=-1,s=t==null?0:t.length,d=Array(s);++i<s;)d[i]=n(t[i],i,t);return d}var hL=rne;function ine(){this.__data__=[],this.size=0}var one=ine;function sne(t,n){return t===n||t!==t&&n!==n}var XA=sne,ane=XA;function lne(t,n){for(var i=t.length;i--;)if(ane(t[i][0],n))return i;return-1}var Eb=lne,cne=Eb,dne=Array.prototype,une=dne.splice;function hne(t){var n=this.__data__,i=cne(n,t);if(i<0)return!1;var s=n.length-1;return i==s?n.pop():une.call(n,i,1),--this.size,!0}var fne=hne,pne=Eb;function gne(t){var n=this.__data__,i=pne(n,t);return i<0?void 0:n[i][1]}var mne=gne,bne=Eb;function kne(t){return bne(this.__data__,t)>-1}var vne=kne,wne=Eb;function yne(t,n){var i=this.__data__,s=wne(i,t);return s<0?(++this.size,i.push([t,n])):i[s][1]=n,this}var _ne=yne,Ane=one,Cne=fne,xne=mne,Ene=vne,Sne=_ne;function Fd(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}Fd.prototype.clear=Ane;Fd.prototype.delete=Cne;Fd.prototype.get=xne;Fd.prototype.has=Ene;Fd.prototype.set=Sne;var Sb=Fd,Dne=Sb;function Tne(){this.__data__=new Dne,this.size=0}var Mne=Tne;function Nne(t){var n=this.__data__,i=n.delete(t);return this.size=n.size,i}var Ine=Nne;function One(t){return this.__data__.get(t)}var Pne=One;function Bne(t){return this.__data__.has(t)}var Rne=Bne,Lne=To,zne=Lne["__core-js_shared__"],jne=zne,xy=jne,AI=function(){var t=/[^.]+$/.exec(xy&&xy.keys&&xy.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Fne(t){return!!AI&&AI in t}var $ne=Fne,Vne=Function.prototype,Une=Vne.toString;function Hne(t){if(t!=null){try{return Une.call(t)}catch{}try{return t+""}catch{}}return""}var fL=Hne,qne=lL,Wne=$ne,Gne=jd,Yne=fL,Kne=/[\\^$.*+?()[\]{}|]/g,Qne=/^\[object .+?Constructor\]$/,Zne=Function.prototype,Jne=Object.prototype,Xne=Zne.toString,ere=Jne.hasOwnProperty,tre=RegExp("^"+Xne.call(ere).replace(Kne,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nre(t){if(!Gne(t)||Wne(t))return!1;var n=qne(t)?tre:Qne;return n.test(Yne(t))}var rre=nre;function ire(t,n){return t==null?void 0:t[n]}var ore=ire,sre=rre,are=ore;function lre(t,n){var i=are(t,n);return sre(i)?i:void 0}var Bl=lre,cre=Bl,dre=To,ure=cre(dre,"Map"),eC=ure,hre=Bl,fre=hre(Object,"create"),Db=fre,CI=Db;function pre(){this.__data__=CI?CI(null):{},this.size=0}var gre=pre;function mre(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}var bre=mre,kre=Db,vre="__lodash_hash_undefined__",wre=Object.prototype,yre=wre.hasOwnProperty;function _re(t){var n=this.__data__;if(kre){var i=n[t];return i===vre?void 0:i}return yre.call(n,t)?n[t]:void 0}var Are=_re,Cre=Db,xre=Object.prototype,Ere=xre.hasOwnProperty;function Sre(t){var n=this.__data__;return Cre?n[t]!==void 0:Ere.call(n,t)}var Dre=Sre,Tre=Db,Mre="__lodash_hash_undefined__";function Nre(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=Tre&&n===void 0?Mre:n,this}var Ire=Nre,Ore=gre,Pre=bre,Bre=Are,Rre=Dre,Lre=Ire;function $d(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}$d.prototype.clear=Ore;$d.prototype.delete=Pre;$d.prototype.get=Bre;$d.prototype.has=Rre;$d.prototype.set=Lre;var zre=$d,xI=zre,jre=Sb,Fre=eC;function $re(){this.size=0,this.__data__={hash:new xI,map:new(Fre||jre),string:new xI}}var Vre=$re;function Ure(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}var Hre=Ure,qre=Hre;function Wre(t,n){var i=t.__data__;return qre(n)?i[typeof n=="string"?"string":"hash"]:i.map}var Tb=Wre,Gre=Tb;function Yre(t){var n=Gre(this,t).delete(t);return this.size-=n?1:0,n}var Kre=Yre,Qre=Tb;function Zre(t){return Qre(this,t).get(t)}var Jre=Zre,Xre=Tb;function eie(t){return Xre(this,t).has(t)}var tie=eie,nie=Tb;function rie(t,n){var i=nie(this,t),s=i.size;return i.set(t,n),this.size+=i.size==s?0:1,this}var iie=rie,oie=Vre,sie=Kre,aie=Jre,lie=tie,cie=iie;function Vd(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}Vd.prototype.clear=oie;Vd.prototype.delete=sie;Vd.prototype.get=aie;Vd.prototype.has=lie;Vd.prototype.set=cie;var tC=Vd,die=Sb,uie=eC,hie=tC,fie=200;function pie(t,n){var i=this.__data__;if(i instanceof die){var s=i.__data__;if(!uie||s.length<fie-1)return s.push([t,n]),this.size=++i.size,this;i=this.__data__=new hie(s)}return i.set(t,n),this.size=i.size,this}var gie=pie,mie=Sb,bie=Mne,kie=Ine,vie=Pne,wie=Rne,yie=gie;function Ud(t){var n=this.__data__=new mie(t);this.size=n.size}Ud.prototype.clear=bie;Ud.prototype.delete=kie;Ud.prototype.get=vie;Ud.prototype.has=wie;Ud.prototype.set=yie;var nC=Ud,_ie="__lodash_hash_undefined__";function Aie(t){return this.__data__.set(t,_ie),this}var Cie=Aie;function xie(t){return this.__data__.has(t)}var Eie=xie,Sie=tC,Die=Cie,Tie=Eie;function f0(t){var n=-1,i=t==null?0:t.length;for(this.__data__=new Sie;++n<i;)this.add(t[n])}f0.prototype.add=f0.prototype.push=Die;f0.prototype.has=Tie;var Mie=f0;function Nie(t,n){for(var i=-1,s=t==null?0:t.length;++i<s;)if(n(t[i],i,t))return!0;return!1}var Iie=Nie;function Oie(t,n){return t.has(n)}var Pie=Oie,Bie=Mie,Rie=Iie,Lie=Pie,zie=1,jie=2;function Fie(t,n,i,s,d,h){var p=i&zie,b=t.length,m=n.length;if(b!=m&&!(p&&m>b))return!1;var w=h.get(t),x=h.get(n);if(w&&x)return w==n&&x==t;var y=-1,_=!0,E=i&jie?new Bie:void 0;for(h.set(t,n),h.set(n,t);++y<b;){var D=t[y],T=n[y];if(s)var O=p?s(T,D,y,n,t,h):s(D,T,y,t,n,h);if(O!==void 0){if(O)continue;_=!1;break}if(E){if(!Rie(n,function(I,M){if(!Lie(E,M)&&(D===I||d(D,I,i,s,h)))return E.push(M)})){_=!1;break}}else if(!(D===T||d(D,T,i,s,h))){_=!1;break}}return h.delete(t),h.delete(n),_}var pL=Fie,$ie=To,Vie=$ie.Uint8Array,gL=Vie;function Uie(t){var n=-1,i=Array(t.size);return t.forEach(function(s,d){i[++n]=[d,s]}),i}var Hie=Uie;function qie(t){var n=-1,i=Array(t.size);return t.forEach(function(s){i[++n]=s}),i}var Wie=qie,EI=Vf,SI=gL,Gie=XA,Yie=pL,Kie=Hie,Qie=Wie,Zie=1,Jie=2,Xie="[object Boolean]",eoe="[object Date]",toe="[object Error]",noe="[object Map]",roe="[object Number]",ioe="[object RegExp]",ooe="[object Set]",soe="[object String]",aoe="[object Symbol]",loe="[object ArrayBuffer]",coe="[object DataView]",DI=EI?EI.prototype:void 0,Ey=DI?DI.valueOf:void 0;function doe(t,n,i,s,d,h,p){switch(i){case coe:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case loe:return!(t.byteLength!=n.byteLength||!h(new SI(t),new SI(n)));case Xie:case eoe:case roe:return Gie(+t,+n);case toe:return t.name==n.name&&t.message==n.message;case ioe:case soe:return t==n+"";case noe:var b=Kie;case ooe:var m=s&Zie;if(b||(b=Qie),t.size!=n.size&&!m)return!1;var w=p.get(t);if(w)return w==n;s|=Jie,p.set(t,n);var x=Yie(b(t),b(n),s,d,h,p);return p.delete(t),x;case aoe:if(Ey)return Ey.call(t)==Ey.call(n)}return!1}var uoe=doe;function hoe(t,n){for(var i=-1,s=n.length,d=t.length;++i<s;)t[d+i]=n[i];return t}var mL=hoe,foe=mL,poe=Ji;function goe(t,n,i){var s=n(t);return poe(t)?s:foe(s,i(t))}var bL=goe;function moe(t,n){for(var i=-1,s=t==null?0:t.length,d=0,h=[];++i<s;){var p=t[i];n(p,i,t)&&(h[d++]=p)}return h}var boe=moe;function koe(){return[]}var kL=koe,voe=boe,woe=kL,yoe=Object.prototype,_oe=yoe.propertyIsEnumerable,TI=Object.getOwnPropertySymbols,Aoe=TI?function(t){return t==null?[]:(t=Object(t),voe(TI(t),function(n){return _oe.call(t,n)}))}:woe,rC=Aoe,Coe=bL,xoe=rC,Eoe=Uf;function Soe(t){return Coe(t,Eoe,xoe)}var vL=Soe,MI=vL,Doe=1,Toe=Object.prototype,Moe=Toe.hasOwnProperty;function Noe(t,n,i,s,d,h){var p=i&Doe,b=MI(t),m=b.length,w=MI(n),x=w.length;if(m!=x&&!p)return!1;for(var y=m;y--;){var _=b[y];if(!(p?_ in n:Moe.call(n,_)))return!1}var E=h.get(t),D=h.get(n);if(E&&D)return E==n&&D==t;var T=!0;h.set(t,n),h.set(n,t);for(var O=p;++y<m;){_=b[y];var I=t[_],M=n[_];if(s)var B=p?s(M,I,_,n,t,h):s(I,M,_,t,n,h);if(!(B===void 0?I===M||d(I,M,i,s,h):B)){T=!1;break}O||(O=_=="constructor")}if(T&&!O){var z=t.constructor,U=n.constructor;z!=U&&"constructor"in t&&"constructor"in n&&!(typeof z=="function"&&z instanceof z&&typeof U=="function"&&U instanceof U)&&(T=!1)}return h.delete(t),h.delete(n),T}var Ioe=Noe,Ooe=Bl,Poe=To,Boe=Ooe(Poe,"DataView"),Roe=Boe,Loe=Bl,zoe=To,joe=Loe(zoe,"Promise"),Foe=joe,$oe=Bl,Voe=To,Uoe=$oe(Voe,"Set"),Hoe=Uoe,qoe=Bl,Woe=To,Goe=qoe(Woe,"WeakMap"),Yoe=Goe,t_=Roe,n_=eC,r_=Foe,i_=Hoe,o_=Yoe,wL=Pl,Hd=fL,NI="[object Map]",Koe="[object Object]",II="[object Promise]",OI="[object Set]",PI="[object WeakMap]",BI="[object DataView]",Qoe=Hd(t_),Zoe=Hd(n_),Joe=Hd(r_),Xoe=Hd(i_),ese=Hd(o_),hl=wL;(t_&&hl(new t_(new ArrayBuffer(1)))!=BI||n_&&hl(new n_)!=NI||r_&&hl(r_.resolve())!=II||i_&&hl(new i_)!=OI||o_&&hl(new o_)!=PI)&&(hl=function(t){var n=wL(t),i=n==Koe?t.constructor:void 0,s=i?Hd(i):"";if(s)switch(s){case Qoe:return BI;case Zoe:return NI;case Joe:return II;case Xoe:return OI;case ese:return PI}return n});var Mb=hl,Sy=nC,tse=pL,nse=uoe,rse=Ioe,RI=Mb,LI=Ji,zI=_f.exports,ise=oL,ose=1,jI="[object Arguments]",FI="[object Array]",Qg="[object Object]",sse=Object.prototype,$I=sse.hasOwnProperty;function ase(t,n,i,s,d,h){var p=LI(t),b=LI(n),m=p?FI:RI(t),w=b?FI:RI(n);m=m==jI?Qg:m,w=w==jI?Qg:w;var x=m==Qg,y=w==Qg,_=m==w;if(_&&zI(t)){if(!zI(n))return!1;p=!0,x=!1}if(_&&!x)return h||(h=new Sy),p||ise(t)?tse(t,n,i,s,d,h):nse(t,n,m,i,s,d,h);if(!(i&ose)){var E=x&&$I.call(t,"__wrapped__"),D=y&&$I.call(n,"__wrapped__");if(E||D){var T=E?t.value():t,O=D?n.value():n;return h||(h=new Sy),d(T,O,i,s,h)}}return _?(h||(h=new Sy),rse(t,n,i,s,d,h)):!1}var lse=ase,cse=lse,VI=ms;function yL(t,n,i,s,d){return t===n?!0:t==null||n==null||!VI(t)&&!VI(n)?t!==t&&n!==n:cse(t,n,i,s,yL,d)}var _L=yL,dse=nC,use=_L,hse=1,fse=2;function pse(t,n,i,s){var d=i.length,h=d,p=!s;if(t==null)return!h;for(t=Object(t);d--;){var b=i[d];if(p&&b[2]?b[1]!==t[b[0]]:!(b[0]in t))return!1}for(;++d<h;){b=i[d];var m=b[0],w=t[m],x=b[1];if(p&&b[2]){if(w===void 0&&!(m in t))return!1}else{var y=new dse;if(s)var _=s(w,x,m,t,n,y);if(!(_===void 0?use(x,w,hse|fse,s,y):_))return!1}}return!0}var gse=pse,mse=jd;function bse(t){return t===t&&!mse(t)}var AL=bse,kse=AL,vse=Uf;function wse(t){for(var n=vse(t),i=n.length;i--;){var s=n[i],d=t[s];n[i]=[s,d,kse(d)]}return n}var yse=wse;function _se(t,n){return function(i){return i==null?!1:i[t]===n&&(n!==void 0||t in Object(i))}}var CL=_se,Ase=gse,Cse=yse,xse=CL;function Ese(t){var n=Cse(t);return n.length==1&&n[0][2]?xse(n[0][0],n[0][1]):function(i){return i===t||Ase(i,t,n)}}var Sse=Ese,Dse=Pl,Tse=ms,Mse="[object Symbol]";function Nse(t){return typeof t=="symbol"||Tse(t)&&Dse(t)==Mse}var iC=Nse,Ise=Ji,Ose=iC,Pse=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bse=/^\w*$/;function Rse(t,n){if(Ise(t))return!1;var i=typeof t;return i=="number"||i=="symbol"||i=="boolean"||t==null||Ose(t)?!0:Bse.test(t)||!Pse.test(t)||n!=null&&t in Object(n)}var oC=Rse,xL=tC,Lse="Expected a function";function sC(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new TypeError(Lse);var i=function(){var s=arguments,d=n?n.apply(this,s):s[0],h=i.cache;if(h.has(d))return h.get(d);var p=t.apply(this,s);return i.cache=h.set(d,p)||h,p};return i.cache=new(sC.Cache||xL),i}sC.Cache=xL;var zse=sC,jse=zse,Fse=500;function $se(t){var n=jse(t,function(s){return i.size===Fse&&i.clear(),s}),i=n.cache;return n}var Vse=$se,Use=Vse,Hse=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qse=/\\(\\)?/g,Wse=Use(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(Hse,function(i,s,d,h){n.push(d?h.replace(qse,"$1"):s||i)}),n}),Gse=Wse,UI=Vf,Yse=hL,Kse=Ji,Qse=iC,Zse=1/0,HI=UI?UI.prototype:void 0,qI=HI?HI.toString:void 0;function EL(t){if(typeof t=="string")return t;if(Kse(t))return Yse(t,EL)+"";if(Qse(t))return qI?qI.call(t):"";var n=t+"";return n=="0"&&1/t==-Zse?"-0":n}var Jse=EL,Xse=Jse;function eae(t){return t==null?"":Xse(t)}var tae=eae,nae=Ji,rae=oC,iae=Gse,oae=tae;function sae(t,n){return nae(t)?t:rae(t,n)?[t]:iae(oae(t))}var SL=sae,aae=iC,lae=1/0;function cae(t){if(typeof t=="string"||aae(t))return t;var n=t+"";return n=="0"&&1/t==-lae?"-0":n}var Nb=cae,dae=SL,uae=Nb;function hae(t,n){n=dae(n,t);for(var i=0,s=n.length;t!=null&&i<s;)t=t[uae(n[i++])];return i&&i==s?t:void 0}var DL=hae,fae=DL;function pae(t,n,i){var s=t==null?void 0:fae(t,n);return s===void 0?i:s}var gae=pae;function mae(t,n){return t!=null&&n in Object(t)}var bae=mae,kae=SL,vae=rL,wae=Ji,yae=iL,_ae=YA,Aae=Nb;function Cae(t,n,i){n=kae(n,t);for(var s=-1,d=n.length,h=!1;++s<d;){var p=Aae(n[s]);if(!(h=t!=null&&i(t,p)))break;t=t[p]}return h||++s!=d?h:(d=t==null?0:t.length,!!d&&_ae(d)&&yae(p,d)&&(wae(t)||vae(t)))}var xae=Cae,Eae=bae,Sae=xae;function Dae(t,n){return t!=null&&Sae(t,n,Eae)}var Tae=Dae,Mae=_L,Nae=gae,Iae=Tae,Oae=oC,Pae=AL,Bae=CL,Rae=Nb,Lae=1,zae=2;function jae(t,n){return Oae(t)&&Pae(n)?Bae(Rae(t),n):function(i){var s=Nae(i,t);return s===void 0&&s===n?Iae(i,t):Mae(n,s,Lae|zae)}}var Fae=jae;function $ae(t){return function(n){return n==null?void 0:n[t]}}var Vae=$ae,Uae=DL;function Hae(t){return function(n){return Uae(n,t)}}var qae=Hae,Wae=Vae,Gae=qae,Yae=oC,Kae=Nb;function Qae(t){return Yae(t)?Wae(Kae(t)):Gae(t)}var Zae=Qae,Jae=Sse,Xae=Fae,ele=dL,tle=Ji,nle=Zae;function rle(t){return typeof t=="function"?t:t==null?ele:typeof t=="object"?tle(t)?Xae(t[0],t[1]):Jae(t):nle(t)}var ile=rle,ole=xb;function sle(t,n){return function(i,s){if(i==null)return i;if(!ole(i))return t(i,s);for(var d=i.length,h=n?d:-1,p=Object(i);(n?h--:++h<d)&&s(p[h],h,p)!==!1;);return i}}var ale=sle,lle=cL,cle=ale,dle=cle(lle),ule=dle,hle=ule,fle=xb;function ple(t,n){var i=-1,s=fle(t)?Array(t.length):[];return hle(t,function(d,h,p){s[++i]=n(d,h,p)}),s}var gle=ple,mle=hL,ble=ile,kle=gle,vle=Ji;function wle(t,n){var i=vle(t)?mle:kle;return i(t,ble(n))}var yle=wle;Object.defineProperty($f,"__esModule",{value:!0});$f.flattenNames=void 0;var _le=QX,Ale=Ib(_le),Cle=ZA,xle=Ib(Cle),Ele=nne,Sle=Ib(Ele),Dle=yle,Tle=Ib(Dle);function Ib(t){return t&&t.__esModule?t:{default:t}}var Mle=$f.flattenNames=function t(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i=[];return(0,Tle.default)(n,function(s){Array.isArray(s)?t(s).map(function(d){return i.push(d)}):(0,Sle.default)(s)?(0,xle.default)(s,function(d,h){d===!0&&i.push(h),i.push(h+"-"+d)}):(0,Ale.default)(s)&&i.push(s)}),i};$f.default=Mle;var Hf={};function Nle(t,n){for(var i=-1,s=t==null?0:t.length;++i<s&&n(t[i],i,t)!==!1;);return t}var Ile=Nle,Ole=Bl,Ple=function(){try{var t=Ole(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Ble=Ple,WI=Ble;function Rle(t,n,i){n=="__proto__"&&WI?WI(t,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[n]=i}var TL=Rle,Lle=TL,zle=XA,jle=Object.prototype,Fle=jle.hasOwnProperty;function $le(t,n,i){var s=t[n];(!(Fle.call(t,n)&&zle(s,i))||i===void 0&&!(n in t))&&Lle(t,n,i)}var ML=$le,Vle=ML,Ule=TL;function Hle(t,n,i,s){var d=!i;i||(i={});for(var h=-1,p=n.length;++h<p;){var b=n[h],m=s?s(i[b],t[b],b,i,t):void 0;m===void 0&&(m=t[b]),d?Ule(i,b,m):Vle(i,b,m)}return i}var Ob=Hle,qle=Ob,Wle=Uf;function Gle(t,n){return t&&qle(n,Wle(n),t)}var Yle=Gle;function Kle(t){var n=[];if(t!=null)for(var i in Object(t))n.push(i);return n}var Qle=Kle,Zle=jd,Jle=QA,Xle=Qle,ece=Object.prototype,tce=ece.hasOwnProperty;function nce(t){if(!Zle(t))return Xle(t);var n=Jle(t),i=[];for(var s in t)s=="constructor"&&(n||!tce.call(t,s))||i.push(s);return i}var rce=nce,ice=sL,oce=rce,sce=xb;function ace(t){return sce(t)?ice(t,!0):oce(t)}var aC=ace,lce=Ob,cce=aC;function dce(t,n){return t&&lce(n,cce(n),t)}var uce=dce,s_={exports:{}};(function(t,n){var i=To,s=n&&!n.nodeType&&n,d=s&&!0&&t&&!t.nodeType&&t,h=d&&d.exports===s,p=h?i.Buffer:void 0,b=p?p.allocUnsafe:void 0;function m(w,x){if(x)return w.slice();var y=w.length,_=b?b(y):new w.constructor(y);return w.copy(_),_}t.exports=m})(s_,s_.exports);function hce(t,n){var i=-1,s=t.length;for(n||(n=Array(s));++i<s;)n[i]=t[i];return n}var fce=hce,pce=Ob,gce=rC;function mce(t,n){return pce(t,gce(t),n)}var bce=mce,kce=mL,vce=JA,wce=rC,yce=kL,_ce=Object.getOwnPropertySymbols,Ace=_ce?function(t){for(var n=[];t;)kce(n,wce(t)),t=vce(t);return n}:yce,NL=Ace,Cce=Ob,xce=NL;function Ece(t,n){return Cce(t,xce(t),n)}var Sce=Ece,Dce=bL,Tce=NL,Mce=aC;function Nce(t){return Dce(t,Mce,Tce)}var Ice=Nce,Oce=Object.prototype,Pce=Oce.hasOwnProperty;function Bce(t){var n=t.length,i=new t.constructor(n);return n&&typeof t[0]=="string"&&Pce.call(t,"index")&&(i.index=t.index,i.input=t.input),i}var Rce=Bce,GI=gL;function Lce(t){var n=new t.constructor(t.byteLength);return new GI(n).set(new GI(t)),n}var lC=Lce,zce=lC;function jce(t,n){var i=n?zce(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}var Fce=jce,$ce=/\w*$/;function Vce(t){var n=new t.constructor(t.source,$ce.exec(t));return n.lastIndex=t.lastIndex,n}var Uce=Vce,YI=Vf,KI=YI?YI.prototype:void 0,QI=KI?KI.valueOf:void 0;function Hce(t){return QI?Object(QI.call(t)):{}}var qce=Hce,Wce=lC;function Gce(t,n){var i=n?Wce(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}var Yce=Gce,Kce=lC,Qce=Fce,Zce=Uce,Jce=qce,Xce=Yce,ede="[object Boolean]",tde="[object Date]",nde="[object Map]",rde="[object Number]",ide="[object RegExp]",ode="[object Set]",sde="[object String]",ade="[object Symbol]",lde="[object ArrayBuffer]",cde="[object DataView]",dde="[object Float32Array]",ude="[object Float64Array]",hde="[object Int8Array]",fde="[object Int16Array]",pde="[object Int32Array]",gde="[object Uint8Array]",mde="[object Uint8ClampedArray]",bde="[object Uint16Array]",kde="[object Uint32Array]";function vde(t,n,i){var s=t.constructor;switch(n){case lde:return Kce(t);case ede:case tde:return new s(+t);case cde:return Qce(t,i);case dde:case ude:case hde:case fde:case pde:case gde:case mde:case bde:case kde:return Xce(t,i);case nde:return new s;case rde:case sde:return new s(t);case ide:return Zce(t);case ode:return new s;case ade:return Jce(t)}}var wde=vde,yde=jd,ZI=Object.create,_de=function(){function t(){}return function(n){if(!yde(n))return{};if(ZI)return ZI(n);t.prototype=n;var i=new t;return t.prototype=void 0,i}}(),Ade=_de,Cde=Ade,xde=JA,Ede=QA;function Sde(t){return typeof t.constructor=="function"&&!Ede(t)?Cde(xde(t)):{}}var Dde=Sde,Tde=Mb,Mde=ms,Nde="[object Map]";function Ide(t){return Mde(t)&&Tde(t)==Nde}var Ode=Ide,Pde=Ode,Bde=KA,JI=Af.exports,XI=JI&&JI.isMap,Rde=XI?Bde(XI):Pde,Lde=Rde,zde=Mb,jde=ms,Fde="[object Set]";function $de(t){return jde(t)&&zde(t)==Fde}var Vde=$de,Ude=Vde,Hde=KA,e3=Af.exports,t3=e3&&e3.isSet,qde=t3?Hde(t3):Ude,Wde=qde,Gde=nC,Yde=Ile,Kde=ML,Qde=Yle,Zde=uce,Jde=s_.exports,Xde=fce,eue=bce,tue=Sce,nue=vL,rue=Ice,iue=Mb,oue=Rce,sue=wde,aue=Dde,lue=Ji,cue=_f.exports,due=Lde,uue=jd,hue=Wde,fue=Uf,pue=aC,gue=1,mue=2,bue=4,IL="[object Arguments]",kue="[object Array]",vue="[object Boolean]",wue="[object Date]",yue="[object Error]",OL="[object Function]",_ue="[object GeneratorFunction]",Aue="[object Map]",Cue="[object Number]",PL="[object Object]",xue="[object RegExp]",Eue="[object Set]",Sue="[object String]",Due="[object Symbol]",Tue="[object WeakMap]",Mue="[object ArrayBuffer]",Nue="[object DataView]",Iue="[object Float32Array]",Oue="[object Float64Array]",Pue="[object Int8Array]",Bue="[object Int16Array]",Rue="[object Int32Array]",Lue="[object Uint8Array]",zue="[object Uint8ClampedArray]",jue="[object Uint16Array]",Fue="[object Uint32Array]",jt={};jt[IL]=jt[kue]=jt[Mue]=jt[Nue]=jt[vue]=jt[wue]=jt[Iue]=jt[Oue]=jt[Pue]=jt[Bue]=jt[Rue]=jt[Aue]=jt[Cue]=jt[PL]=jt[xue]=jt[Eue]=jt[Sue]=jt[Due]=jt[Lue]=jt[zue]=jt[jue]=jt[Fue]=!0;jt[yue]=jt[OL]=jt[Tue]=!1;function _m(t,n,i,s,d,h){var p,b=n&gue,m=n&mue,w=n&bue;if(i&&(p=d?i(t,s,d,h):i(t)),p!==void 0)return p;if(!uue(t))return t;var x=lue(t);if(x){if(p=oue(t),!b)return Xde(t,p)}else{var y=iue(t),_=y==OL||y==_ue;if(cue(t))return Jde(t,b);if(y==PL||y==IL||_&&!d){if(p=m||_?{}:aue(t),!b)return m?tue(t,Zde(p,t)):eue(t,Qde(p,t))}else{if(!jt[y])return d?t:{};p=sue(t,y,b)}}h||(h=new Gde);var E=h.get(t);if(E)return E;h.set(t,p),hue(t)?t.forEach(function(O){p.add(_m(O,n,i,O,t,h))}):due(t)&&t.forEach(function(O,I){p.set(I,_m(O,n,i,I,t,h))});var D=w?m?rue:nue:m?pue:fue,T=x?void 0:D(t);return Yde(T||t,function(O,I){T&&(I=O,O=t[I]),Kde(p,I,_m(O,n,i,I,t,h))}),p}var $ue=_m,Vue=$ue,Uue=1,Hue=4;function que(t){return Vue(t,Uue|Hue)}var Wue=que;Object.defineProperty(Hf,"__esModule",{value:!0});Hf.mergeClasses=void 0;var Gue=ZA,Yue=BL(Gue),Kue=Wue,Que=BL(Kue),Zue=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function BL(t){return t&&t.__esModule?t:{default:t}}var Jue=Hf.mergeClasses=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],s=n.default&&(0,Que.default)(n.default)||{};return i.map(function(d){var h=n[d];return h&&(0,Yue.default)(h,function(p,b){s[b]||(s[b]={}),s[b]=Zue({},s[b],h[b])}),d}),s};Hf.default=Jue;var qf={};Object.defineProperty(qf,"__esModule",{value:!0});qf.autoprefix=void 0;var Xue=ZA,n3=the(Xue),ehe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function the(t){return t&&t.__esModule?t:{default:t}}var nhe={borderRadius:function(n){return{msBorderRadius:n,MozBorderRadius:n,OBorderRadius:n,WebkitBorderRadius:n,borderRadius:n}},boxShadow:function(n){return{msBoxShadow:n,MozBoxShadow:n,OBoxShadow:n,WebkitBoxShadow:n,boxShadow:n}},userSelect:function(n){return{WebkitTouchCallout:n,KhtmlUserSelect:n,MozUserSelect:n,msUserSelect:n,WebkitUserSelect:n,userSelect:n}},flex:function(n){return{WebkitBoxFlex:n,MozBoxFlex:n,WebkitFlex:n,msFlex:n,flex:n}},flexBasis:function(n){return{WebkitFlexBasis:n,flexBasis:n}},justifyContent:function(n){return{WebkitJustifyContent:n,justifyContent:n}},transition:function(n){return{msTransition:n,MozTransition:n,OTransition:n,WebkitTransition:n,transition:n}},transform:function(n){return{msTransform:n,MozTransform:n,OTransform:n,WebkitTransform:n,transform:n}},absolute:function(n){var i=n&&n.split(" ");return{position:"absolute",top:i&&i[0],right:i&&i[1],bottom:i&&i[2],left:i&&i[3]}},extend:function(n,i){var s=i[n];return s||{extend:n}}},rhe=qf.autoprefix=function(n){var i={};return(0,n3.default)(n,function(s,d){var h={};(0,n3.default)(s,function(p,b){var m=nhe[b];m?h=ehe({},h,m(p)):h[b]=p}),i[d]=h}),i};qf.default=rhe;var Wf={};Object.defineProperty(Wf,"__esModule",{value:!0});Wf.hover=void 0;var ihe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},ohe=Z.exports,Dy=she(ohe);function she(t){return t&&t.__esModule?t:{default:t}}function ahe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r3(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function lhe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var che=Wf.hover=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"span";return function(s){lhe(d,s);function d(){var h,p,b,m;ahe(this,d);for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return m=(p=(b=r3(this,(h=d.__proto__||Object.getPrototypeOf(d)).call.apply(h,[this].concat(x))),b),b.state={hover:!1},b.handleMouseOver=function(){return b.setState({hover:!0})},b.handleMouseOut=function(){return b.setState({hover:!1})},b.render=function(){return Dy.default.createElement(i,{onMouseOver:b.handleMouseOver,onMouseOut:b.handleMouseOut},Dy.default.createElement(n,ihe({},b.props,b.state)))},p),r3(b,m)}return d}(Dy.default.Component)};Wf.default=che;var Gf={};Object.defineProperty(Gf,"__esModule",{value:!0});Gf.active=void 0;var dhe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},uhe=Z.exports,Ty=hhe(uhe);function hhe(t){return t&&t.__esModule?t:{default:t}}function fhe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i3(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function phe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var ghe=Gf.active=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"span";return function(s){phe(d,s);function d(){var h,p,b,m;fhe(this,d);for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return m=(p=(b=i3(this,(h=d.__proto__||Object.getPrototypeOf(d)).call.apply(h,[this].concat(x))),b),b.state={active:!1},b.handleMouseDown=function(){return b.setState({active:!0})},b.handleMouseUp=function(){return b.setState({active:!1})},b.render=function(){return Ty.default.createElement(i,{onMouseDown:b.handleMouseDown,onMouseUp:b.handleMouseUp},Ty.default.createElement(n,dhe({},b.props,b.state)))},p),i3(b,m)}return d}(Ty.default.Component)};Gf.default=ghe;var cC={};Object.defineProperty(cC,"__esModule",{value:!0});var mhe=function(n,i){var s={},d=function(p){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;s[p]=b};return n===0&&d("first-child"),n===i-1&&d("last-child"),(n===0||n%2===0)&&d("even"),Math.abs(n%2)===1&&d("odd"),d("nth-child",n),s};cC.default=mhe;Object.defineProperty(fi,"__esModule",{value:!0});fi.ReactCSS=fi.loop=fi.handleActive=dC=fi.handleHover=fi.hover=void 0;var bhe=$f,khe=qd(bhe),vhe=Hf,whe=qd(vhe),yhe=qf,_he=qd(yhe),Ahe=Wf,RL=qd(Ahe),Che=Gf,xhe=qd(Che),Ehe=cC,She=qd(Ehe);function qd(t){return t&&t.__esModule?t:{default:t}}fi.hover=RL.default;var dC=fi.handleHover=RL.default;fi.handleActive=xhe.default;fi.loop=She.default;var Dhe=fi.ReactCSS=function(n){for(var i=arguments.length,s=Array(i>1?i-1:0),d=1;d<i;d++)s[d-1]=arguments[d];var h=(0,khe.default)(s),p=(0,whe.default)(n,h);return(0,_he.default)(p)},Ge=fi.default=Dhe,The=function(n,i,s,d,h){var p=h.clientWidth,b=h.clientHeight,m=typeof n.pageX=="number"?n.pageX:n.touches[0].pageX,w=typeof n.pageY=="number"?n.pageY:n.touches[0].pageY,x=m-(h.getBoundingClientRect().left+window.pageXOffset),y=w-(h.getBoundingClientRect().top+window.pageYOffset);if(s==="vertical"){var _=void 0;if(y<0?_=0:y>b?_=1:_=Math.round(y*100/b)/100,i.a!==_)return{h:i.h,s:i.s,l:i.l,a:_,source:"rgb"}}else{var E=void 0;if(x<0?E=0:x>p?E=1:E=Math.round(x*100/p)/100,d!==E)return{h:i.h,s:i.s,l:i.l,a:E,source:"rgb"}}return null},My={},Mhe=function(n,i,s,d){if(typeof document>"u"&&!d)return null;var h=d?new d:document.createElement("canvas");h.width=s*2,h.height=s*2;var p=h.getContext("2d");return p?(p.fillStyle=n,p.fillRect(0,0,h.width,h.height),p.fillStyle=i,p.fillRect(0,0,s,s),p.translate(s,s),p.fillRect(0,0,s,s),h.toDataURL()):null},Nhe=function(n,i,s,d){var h=n+"-"+i+"-"+s+(d?"-server":"");if(My[h])return My[h];var p=Mhe(n,i,s,d);return My[h]=p,p},o3=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Wd=function(n){var i=n.white,s=n.grey,d=n.size,h=n.renderers,p=n.borderRadius,b=n.boxShadow,m=n.children,w=Ge({default:{grid:{borderRadius:p,boxShadow:b,absolute:"0px 0px 0px 0px",background:"url("+Nhe(i,s,d,h.canvas)+") center left"}}});return Z.exports.isValidElement(m)?lt.cloneElement(m,o3({},m.props,{style:o3({},m.props.style,w.grid)})):A("div",{style:w.grid})};Wd.defaultProps={size:8,white:"transparent",grey:"rgba(0,0,0,.08)",renderers:{}};var Ihe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Ohe=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Phe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function s3(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Bhe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var uC=function(t){Bhe(n,t);function n(){var i,s,d,h;Phe(this,n);for(var p=arguments.length,b=Array(p),m=0;m<p;m++)b[m]=arguments[m];return h=(s=(d=s3(this,(i=n.__proto__||Object.getPrototypeOf(n)).call.apply(i,[this].concat(b))),d),d.handleChange=function(w){var x=The(w,d.props.hsl,d.props.direction,d.props.a,d.container);x&&typeof d.props.onChange=="function"&&d.props.onChange(x,w)},d.handleMouseDown=function(w){d.handleChange(w),window.addEventListener("mousemove",d.handleChange),window.addEventListener("mouseup",d.handleMouseUp)},d.handleMouseUp=function(){d.unbindEventListeners()},d.unbindEventListeners=function(){window.removeEventListener("mousemove",d.handleChange),window.removeEventListener("mouseup",d.handleMouseUp)},s),s3(d,h)}return Ohe(n,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"render",value:function(){var s=this,d=this.props.rgb,h=Ge({default:{alpha:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},checkboard:{absolute:"0px 0px 0px 0px",overflow:"hidden",borderRadius:this.props.radius},gradient:{absolute:"0px 0px 0px 0px",background:"linear-gradient(to right, rgba("+d.r+","+d.g+","+d.b+`, 0) 0%,
           rgba(`+d.r+","+d.g+","+d.b+", 1) 100%)",boxShadow:this.props.shadow,borderRadius:this.props.radius},container:{position:"relative",height:"100%",margin:"0 3px"},pointer:{position:"absolute",left:d.a*100+"%"},slider:{width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",marginTop:"1px",transform:"translateX(-2px)"}},vertical:{gradient:{background:"linear-gradient(to bottom, rgba("+d.r+","+d.g+","+d.b+`, 0) 0%,
           rgba(`+d.r+","+d.g+","+d.b+", 1) 100%)"},pointer:{left:0,top:d.a*100+"%"}},overwrite:Ihe({},this.props.style)},{vertical:this.props.direction==="vertical",overwrite:!0});return V("div",{style:h.alpha,children:[A("div",{style:h.checkboard,children:A(Wd,{renderers:this.props.renderers})}),A("div",{style:h.gradient}),A("div",{style:h.container,ref:function(b){return s.container=b},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange,children:A("div",{style:h.pointer,children:this.props.pointer?lt.createElement(this.props.pointer,this.props):A("div",{style:h.slider})})})]})}}]),n}(Z.exports.PureComponent||Z.exports.Component),Rhe=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Lhe(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function zhe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function jhe(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Fhe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var $he=1,LL=38,Vhe=40,Uhe=[LL,Vhe],Hhe=function(n){return Uhe.indexOf(n)>-1},qhe=function(n){return Number(String(n).replace(/%/g,""))},Whe=1,ct=function(t){Fhe(n,t);function n(i){zhe(this,n);var s=jhe(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return s.handleBlur=function(){s.state.blurValue&&s.setState({value:s.state.blurValue,blurValue:null})},s.handleChange=function(d){s.setUpdatedValue(d.target.value,d)},s.handleKeyDown=function(d){var h=qhe(d.target.value);if(!isNaN(h)&&Hhe(d.keyCode)){var p=s.getArrowOffset(),b=d.keyCode===LL?h+p:h-p;s.setUpdatedValue(b,d)}},s.handleDrag=function(d){if(s.props.dragLabel){var h=Math.round(s.props.value+d.movementX);h>=0&&h<=s.props.dragMax&&s.props.onChange&&s.props.onChange(s.getValueObjectWithLabel(h),d)}},s.handleMouseDown=function(d){s.props.dragLabel&&(d.preventDefault(),s.handleDrag(d),window.addEventListener("mousemove",s.handleDrag),window.addEventListener("mouseup",s.handleMouseUp))},s.handleMouseUp=function(){s.unbindEventListeners()},s.unbindEventListeners=function(){window.removeEventListener("mousemove",s.handleDrag),window.removeEventListener("mouseup",s.handleMouseUp)},s.state={value:String(i.value).toUpperCase(),blurValue:String(i.value).toUpperCase()},s.inputId="rc-editable-input-"+Whe++,s}return Rhe(n,[{key:"componentDidUpdate",value:function(s,d){this.props.value!==this.state.value&&(s.value!==this.props.value||d.value!==this.state.value)&&(this.input===document.activeElement?this.setState({blurValue:String(this.props.value).toUpperCase()}):this.setState({value:String(this.props.value).toUpperCase(),blurValue:!this.state.blurValue&&String(this.props.value).toUpperCase()}))}},{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"getValueObjectWithLabel",value:function(s){return Lhe({},this.props.label,s)}},{key:"getArrowOffset",value:function(){return this.props.arrowOffset||$he}},{key:"setUpdatedValue",value:function(s,d){var h=this.props.label?this.getValueObjectWithLabel(s):s;this.props.onChange&&this.props.onChange(h,d),this.setState({value:s})}},{key:"render",value:function(){var s=this,d=Ge({default:{wrap:{position:"relative"}},"user-override":{wrap:this.props.style&&this.props.style.wrap?this.props.style.wrap:{},input:this.props.style&&this.props.style.input?this.props.style.input:{},label:this.props.style&&this.props.style.label?this.props.style.label:{}},"dragLabel-true":{label:{cursor:"ew-resize"}}},{"user-override":!0},this.props);return V("div",{style:d.wrap,children:[A("input",{id:this.inputId,style:d.input,ref:function(p){return s.input=p},value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,placeholder:this.props.placeholder,spellCheck:"false"}),this.props.label&&!this.props.hideLabel?A("label",{htmlFor:this.inputId,style:d.label,onMouseDown:this.handleMouseDown,children:this.props.label}):null]})}}]),n}(Z.exports.PureComponent||Z.exports.Component),Ghe=function(n,i,s,d){var h=d.clientWidth,p=d.clientHeight,b=typeof n.pageX=="number"?n.pageX:n.touches[0].pageX,m=typeof n.pageY=="number"?n.pageY:n.touches[0].pageY,w=b-(d.getBoundingClientRect().left+window.pageXOffset),x=m-(d.getBoundingClientRect().top+window.pageYOffset);if(i==="vertical"){var y=void 0;if(x<0)y=359;else if(x>p)y=0;else{var _=-(x*100/p)+100;y=360*_/100}if(s.h!==y)return{h:y,s:s.s,l:s.l,a:s.a,source:"hsl"}}else{var E=void 0;if(w<0)E=0;else if(w>h)E=359;else{var D=w*100/h;E=360*D/100}if(s.h!==E)return{h:E,s:s.s,l:s.l,a:s.a,source:"hsl"}}return null},Yhe=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Khe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function a3(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Qhe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var Gd=function(t){Qhe(n,t);function n(){var i,s,d,h;Khe(this,n);for(var p=arguments.length,b=Array(p),m=0;m<p;m++)b[m]=arguments[m];return h=(s=(d=a3(this,(i=n.__proto__||Object.getPrototypeOf(n)).call.apply(i,[this].concat(b))),d),d.handleChange=function(w){var x=Ghe(w,d.props.direction,d.props.hsl,d.container);x&&typeof d.props.onChange=="function"&&d.props.onChange(x,w)},d.handleMouseDown=function(w){d.handleChange(w),window.addEventListener("mousemove",d.handleChange),window.addEventListener("mouseup",d.handleMouseUp)},d.handleMouseUp=function(){d.unbindEventListeners()},s),a3(d,h)}return Yhe(n,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var s=this,d=this.props.direction,h=d===void 0?"horizontal":d,p=Ge({default:{hue:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius,boxShadow:this.props.shadow},container:{padding:"0 2px",position:"relative",height:"100%",borderRadius:this.props.radius},pointer:{position:"absolute",left:this.props.hsl.h*100/360+"%"},slider:{marginTop:"1px",width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",transform:"translateX(-2px)"}},vertical:{pointer:{left:"0px",top:-(this.props.hsl.h*100/360)+100+"%"}}},{vertical:h==="vertical"});return A("div",{style:p.hue,children:V("div",{className:"hue-"+h,style:p.container,ref:function(m){return s.container=m},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange,children:[A("style",{children:".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"}),A("div",{style:p.pointer,children:this.props.pointer?lt.createElement(this.props.pointer,this.props):A("div",{style:p.slider})})]})})}}]),n}(Z.exports.PureComponent||Z.exports.Component);function Zhe(){this.__data__=[],this.size=0}function Yf(t,n){return t===n||t!==t&&n!==n}function Pb(t,n){for(var i=t.length;i--;)if(Yf(t[i][0],n))return i;return-1}var Jhe=Array.prototype,Xhe=Jhe.splice;function efe(t){var n=this.__data__,i=Pb(n,t);if(i<0)return!1;var s=n.length-1;return i==s?n.pop():Xhe.call(n,i,1),--this.size,!0}function tfe(t){var n=this.__data__,i=Pb(n,t);return i<0?void 0:n[i][1]}function nfe(t){return Pb(this.__data__,t)>-1}function rfe(t,n){var i=this.__data__,s=Pb(i,t);return s<0?(++this.size,i.push([t,n])):i[s][1]=n,this}function bs(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}bs.prototype.clear=Zhe;bs.prototype.delete=efe;bs.prototype.get=tfe;bs.prototype.has=nfe;bs.prototype.set=rfe;function ife(){this.__data__=new bs,this.size=0}function ofe(t){var n=this.__data__,i=n.delete(t);return this.size=n.size,i}function sfe(t){return this.__data__.get(t)}function afe(t){return this.__data__.has(t)}var lfe=typeof global=="object"&&global&&global.Object===Object&&global;const zL=lfe;var cfe=typeof self=="object"&&self&&self.Object===Object&&self,dfe=zL||cfe||Function("return this")();const Xi=dfe;var ufe=Xi.Symbol;const _a=ufe;var jL=Object.prototype,hfe=jL.hasOwnProperty,ffe=jL.toString,mh=_a?_a.toStringTag:void 0;function pfe(t){var n=hfe.call(t,mh),i=t[mh];try{t[mh]=void 0;var s=!0}catch{}var d=ffe.call(t);return s&&(n?t[mh]=i:delete t[mh]),d}var gfe=Object.prototype,mfe=gfe.toString;function bfe(t){return mfe.call(t)}var kfe="[object Null]",vfe="[object Undefined]",l3=_a?_a.toStringTag:void 0;function Rl(t){return t==null?t===void 0?vfe:kfe:l3&&l3 in Object(t)?pfe(t):bfe(t)}function wi(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}var wfe="[object AsyncFunction]",yfe="[object Function]",_fe="[object GeneratorFunction]",Afe="[object Proxy]";function hC(t){if(!wi(t))return!1;var n=Rl(t);return n==yfe||n==_fe||n==wfe||n==Afe}var Cfe=Xi["__core-js_shared__"];const Ny=Cfe;var c3=function(){var t=/[^.]+$/.exec(Ny&&Ny.keys&&Ny.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function xfe(t){return!!c3&&c3 in t}var Efe=Function.prototype,Sfe=Efe.toString;function Ll(t){if(t!=null){try{return Sfe.call(t)}catch{}try{return t+""}catch{}}return""}var Dfe=/[\\^$.*+?()[\]{}|]/g,Tfe=/^\[object .+?Constructor\]$/,Mfe=Function.prototype,Nfe=Object.prototype,Ife=Mfe.toString,Ofe=Nfe.hasOwnProperty,Pfe=RegExp("^"+Ife.call(Ofe).replace(Dfe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Bfe(t){if(!wi(t)||xfe(t))return!1;var n=hC(t)?Pfe:Tfe;return n.test(Ll(t))}function Rfe(t,n){return t==null?void 0:t[n]}function zl(t,n){var i=Rfe(t,n);return Bfe(i)?i:void 0}var Lfe=zl(Xi,"Map");const Cf=Lfe;var zfe=zl(Object,"create");const xf=zfe;function jfe(){this.__data__=xf?xf(null):{},this.size=0}function Ffe(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}var $fe="__lodash_hash_undefined__",Vfe=Object.prototype,Ufe=Vfe.hasOwnProperty;function Hfe(t){var n=this.__data__;if(xf){var i=n[t];return i===$fe?void 0:i}return Ufe.call(n,t)?n[t]:void 0}var qfe=Object.prototype,Wfe=qfe.hasOwnProperty;function Gfe(t){var n=this.__data__;return xf?n[t]!==void 0:Wfe.call(n,t)}var Yfe="__lodash_hash_undefined__";function Kfe(t,n){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=xf&&n===void 0?Yfe:n,this}function Tl(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}Tl.prototype.clear=jfe;Tl.prototype.delete=Ffe;Tl.prototype.get=Hfe;Tl.prototype.has=Gfe;Tl.prototype.set=Kfe;function Qfe(){this.size=0,this.__data__={hash:new Tl,map:new(Cf||bs),string:new Tl}}function Zfe(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}function Bb(t,n){var i=t.__data__;return Zfe(n)?i[typeof n=="string"?"string":"hash"]:i.map}function Jfe(t){var n=Bb(this,t).delete(t);return this.size-=n?1:0,n}function Xfe(t){return Bb(this,t).get(t)}function epe(t){return Bb(this,t).has(t)}function tpe(t,n){var i=Bb(this,t),s=i.size;return i.set(t,n),this.size+=i.size==s?0:1,this}function ks(t){var n=-1,i=t==null?0:t.length;for(this.clear();++n<i;){var s=t[n];this.set(s[0],s[1])}}ks.prototype.clear=Qfe;ks.prototype.delete=Jfe;ks.prototype.get=Xfe;ks.prototype.has=epe;ks.prototype.set=tpe;var npe=200;function rpe(t,n){var i=this.__data__;if(i instanceof bs){var s=i.__data__;if(!Cf||s.length<npe-1)return s.push([t,n]),this.size=++i.size,this;i=this.__data__=new ks(s)}return i.set(t,n),this.size=i.size,this}function Co(t){var n=this.__data__=new bs(t);this.size=n.size}Co.prototype.clear=ife;Co.prototype.delete=ofe;Co.prototype.get=sfe;Co.prototype.has=afe;Co.prototype.set=rpe;var ipe=function(){try{var t=zl(Object,"defineProperty");return t({},"",{}),t}catch{}}();const p0=ipe;function fC(t,n,i){n=="__proto__"&&p0?p0(t,n,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[n]=i}function a_(t,n,i){(i!==void 0&&!Yf(t[n],i)||i===void 0&&!(n in t))&&fC(t,n,i)}function ope(t){return function(n,i,s){for(var d=-1,h=Object(n),p=s(n),b=p.length;b--;){var m=p[t?b:++d];if(i(h[m],m,h)===!1)break}return n}}var spe=ope();const FL=spe;var $L=typeof Gr=="object"&&Gr&&!Gr.nodeType&&Gr,d3=$L&&typeof ar=="object"&&ar&&!ar.nodeType&&ar,ape=d3&&d3.exports===$L,u3=ape?Xi.Buffer:void 0,h3=u3?u3.allocUnsafe:void 0;function lpe(t,n){if(n)return t.slice();var i=t.length,s=h3?h3(i):new t.constructor(i);return t.copy(s),s}var cpe=Xi.Uint8Array;const g0=cpe;function dpe(t){var n=new t.constructor(t.byteLength);return new g0(n).set(new g0(t)),n}function upe(t,n){var i=n?dpe(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function hpe(t,n){var i=-1,s=t.length;for(n||(n=Array(s));++i<s;)n[i]=t[i];return n}var f3=Object.create,fpe=function(){function t(){}return function(n){if(!wi(n))return{};if(f3)return f3(n);t.prototype=n;var i=new t;return t.prototype=void 0,i}}();const ppe=fpe;function VL(t,n){return function(i){return t(n(i))}}var gpe=VL(Object.getPrototypeOf,Object);const UL=gpe;var mpe=Object.prototype;function pC(t){var n=t&&t.constructor,i=typeof n=="function"&&n.prototype||mpe;return t===i}function bpe(t){return typeof t.constructor=="function"&&!pC(t)?ppe(UL(t)):{}}function Aa(t){return t!=null&&typeof t=="object"}var kpe="[object Arguments]";function p3(t){return Aa(t)&&Rl(t)==kpe}var HL=Object.prototype,vpe=HL.hasOwnProperty,wpe=HL.propertyIsEnumerable,ype=p3(function(){return arguments}())?p3:function(t){return Aa(t)&&vpe.call(t,"callee")&&!wpe.call(t,"callee")};const m0=ype;var _pe=Array.isArray;const Zr=_pe;var Ape=9007199254740991;function gC(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Ape}function Yd(t){return t!=null&&gC(t.length)&&!hC(t)}function Cpe(t){return Aa(t)&&Yd(t)}function xpe(){return!1}var qL=typeof Gr=="object"&&Gr&&!Gr.nodeType&&Gr,g3=qL&&typeof ar=="object"&&ar&&!ar.nodeType&&ar,Epe=g3&&g3.exports===qL,m3=Epe?Xi.Buffer:void 0,Spe=m3?m3.isBuffer:void 0,Dpe=Spe||xpe;const b0=Dpe;var Tpe="[object Object]",Mpe=Function.prototype,Npe=Object.prototype,WL=Mpe.toString,Ipe=Npe.hasOwnProperty,Ope=WL.call(Object);function Ppe(t){if(!Aa(t)||Rl(t)!=Tpe)return!1;var n=UL(t);if(n===null)return!0;var i=Ipe.call(n,"constructor")&&n.constructor;return typeof i=="function"&&i instanceof i&&WL.call(i)==Ope}var Bpe="[object Arguments]",Rpe="[object Array]",Lpe="[object Boolean]",zpe="[object Date]",jpe="[object Error]",Fpe="[object Function]",$pe="[object Map]",Vpe="[object Number]",Upe="[object Object]",Hpe="[object RegExp]",qpe="[object Set]",Wpe="[object String]",Gpe="[object WeakMap]",Ype="[object ArrayBuffer]",Kpe="[object DataView]",Qpe="[object Float32Array]",Zpe="[object Float64Array]",Jpe="[object Int8Array]",Xpe="[object Int16Array]",ege="[object Int32Array]",tge="[object Uint8Array]",nge="[object Uint8ClampedArray]",rge="[object Uint16Array]",ige="[object Uint32Array]",qt={};qt[Qpe]=qt[Zpe]=qt[Jpe]=qt[Xpe]=qt[ege]=qt[tge]=qt[nge]=qt[rge]=qt[ige]=!0;qt[Bpe]=qt[Rpe]=qt[Ype]=qt[Lpe]=qt[Kpe]=qt[zpe]=qt[jpe]=qt[Fpe]=qt[$pe]=qt[Vpe]=qt[Upe]=qt[Hpe]=qt[qpe]=qt[Wpe]=qt[Gpe]=!1;function oge(t){return Aa(t)&&gC(t.length)&&!!qt[Rl(t)]}function sge(t){return function(n){return t(n)}}var GL=typeof Gr=="object"&&Gr&&!Gr.nodeType&&Gr,qh=GL&&typeof ar=="object"&&ar&&!ar.nodeType&&ar,age=qh&&qh.exports===GL,Iy=age&&zL.process,lge=function(){try{var t=qh&&qh.require&&qh.require("util").types;return t||Iy&&Iy.binding&&Iy.binding("util")}catch{}}();const b3=lge;var k3=b3&&b3.isTypedArray,cge=k3?sge(k3):oge;const mC=cge;function l_(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}var dge=Object.prototype,uge=dge.hasOwnProperty;function hge(t,n,i){var s=t[n];(!(uge.call(t,n)&&Yf(s,i))||i===void 0&&!(n in t))&&fC(t,n,i)}function fge(t,n,i,s){var d=!i;i||(i={});for(var h=-1,p=n.length;++h<p;){var b=n[h],m=s?s(i[b],t[b],b,i,t):void 0;m===void 0&&(m=t[b]),d?fC(i,b,m):hge(i,b,m)}return i}function pge(t,n){for(var i=-1,s=Array(t);++i<t;)s[i]=n(i);return s}var gge=9007199254740991,mge=/^(?:0|[1-9]\d*)$/;function bC(t,n){var i=typeof t;return n=n==null?gge:n,!!n&&(i=="number"||i!="symbol"&&mge.test(t))&&t>-1&&t%1==0&&t<n}var bge=Object.prototype,kge=bge.hasOwnProperty;function YL(t,n){var i=Zr(t),s=!i&&m0(t),d=!i&&!s&&b0(t),h=!i&&!s&&!d&&mC(t),p=i||s||d||h,b=p?pge(t.length,String):[],m=b.length;for(var w in t)(n||kge.call(t,w))&&!(p&&(w=="length"||d&&(w=="offset"||w=="parent")||h&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||bC(w,m)))&&b.push(w);return b}function vge(t){var n=[];if(t!=null)for(var i in Object(t))n.push(i);return n}var wge=Object.prototype,yge=wge.hasOwnProperty;function _ge(t){if(!wi(t))return vge(t);var n=pC(t),i=[];for(var s in t)s=="constructor"&&(n||!yge.call(t,s))||i.push(s);return i}function KL(t){return Yd(t)?YL(t,!0):_ge(t)}function Age(t){return fge(t,KL(t))}function Cge(t,n,i,s,d,h,p){var b=l_(t,i),m=l_(n,i),w=p.get(m);if(w){a_(t,i,w);return}var x=h?h(b,m,i+"",t,n,p):void 0,y=x===void 0;if(y){var _=Zr(m),E=!_&&b0(m),D=!_&&!E&&mC(m);x=m,_||E||D?Zr(b)?x=b:Cpe(b)?x=hpe(b):E?(y=!1,x=lpe(m,!0)):D?(y=!1,x=upe(m,!0)):x=[]:Ppe(m)||m0(m)?(x=b,m0(b)?x=Age(b):(!wi(b)||hC(b))&&(x=bpe(m))):y=!1}y&&(p.set(m,x),d(x,m,s,h,p),p.delete(m)),a_(t,i,x)}function QL(t,n,i,s,d){t!==n&&FL(n,function(h,p){if(d||(d=new Co),wi(h))Cge(t,n,p,i,QL,s,d);else{var b=s?s(l_(t,p),h,p+"",t,n,d):void 0;b===void 0&&(b=h),a_(t,p,b)}},KL)}function Rb(t){return t}function xge(t,n,i){switch(i.length){case 0:return t.call(n);case 1:return t.call(n,i[0]);case 2:return t.call(n,i[0],i[1]);case 3:return t.call(n,i[0],i[1],i[2])}return t.apply(n,i)}var v3=Math.max;function Ege(t,n,i){return n=v3(n===void 0?t.length-1:n,0),function(){for(var s=arguments,d=-1,h=v3(s.length-n,0),p=Array(h);++d<h;)p[d]=s[n+d];d=-1;for(var b=Array(n+1);++d<n;)b[d]=s[d];return b[n]=i(p),xge(t,this,b)}}function Sge(t){return function(){return t}}var Dge=p0?function(t,n){return p0(t,"toString",{configurable:!0,enumerable:!1,value:Sge(n),writable:!0})}:Rb;const Tge=Dge;var Mge=800,Nge=16,Ige=Date.now;function Oge(t){var n=0,i=0;return function(){var s=Ige(),d=Nge-(s-i);if(i=s,d>0){if(++n>=Mge)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}var Pge=Oge(Tge);const Bge=Pge;function Rge(t,n){return Bge(Ege(t,n,Rb),t+"")}function Lge(t,n,i){if(!wi(i))return!1;var s=typeof n;return(s=="number"?Yd(i)&&bC(n,i.length):s=="string"&&n in i)?Yf(i[n],t):!1}function zge(t){return Rge(function(n,i){var s=-1,d=i.length,h=d>1?i[d-1]:void 0,p=d>2?i[2]:void 0;for(h=t.length>3&&typeof h=="function"?(d--,h):void 0,p&&Lge(i[0],i[1],p)&&(h=d<3?void 0:h,d=1),n=Object(n);++s<d;){var b=i[s];b&&t(n,b,s,h)}return n})}var jge=zge(function(t,n,i){QL(t,n,i)});const Ir=jge;var Kf=function(n){var i=n.zDepth,s=n.radius,d=n.background,h=n.children,p=n.styles,b=p===void 0?{}:p,m=Ge(Ir({default:{wrap:{position:"relative",display:"inline-block"},content:{position:"relative"},bg:{absolute:"0px 0px 0px 0px",boxShadow:"0 "+i+"px "+i*4+"px rgba(0,0,0,.24)",borderRadius:s,background:d}},"zDepth-0":{bg:{boxShadow:"none"}},"zDepth-1":{bg:{boxShadow:"0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"}},"zDepth-2":{bg:{boxShadow:"0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"}},"zDepth-3":{bg:{boxShadow:"0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"}},"zDepth-4":{bg:{boxShadow:"0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"}},"zDepth-5":{bg:{boxShadow:"0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"}},square:{bg:{borderRadius:"0"}},circle:{bg:{borderRadius:"50%"}}},b),{"zDepth-1":i===1});return V("div",{style:m.wrap,children:[A("div",{style:m.bg}),A("div",{style:m.content,children:h})]})};Kf.propTypes={background:_e.exports.string,zDepth:_e.exports.oneOf([0,1,2,3,4,5]),radius:_e.exports.number,styles:_e.exports.object};Kf.defaultProps={background:"#fff",zDepth:1,radius:2,styles:{}};var Fge=function(){return Xi.Date.now()};const Oy=Fge;var $ge=/\s/;function Vge(t){for(var n=t.length;n--&&$ge.test(t.charAt(n)););return n}var Uge=/^\s+/;function Hge(t){return t&&t.slice(0,Vge(t)+1).replace(Uge,"")}var qge="[object Symbol]";function Lb(t){return typeof t=="symbol"||Aa(t)&&Rl(t)==qge}var w3=0/0,Wge=/^[-+]0x[0-9a-f]+$/i,Gge=/^0b[01]+$/i,Yge=/^0o[0-7]+$/i,Kge=parseInt;function y3(t){if(typeof t=="number")return t;if(Lb(t))return w3;if(wi(t)){var n=typeof t.valueOf=="function"?t.valueOf():t;t=wi(n)?n+"":n}if(typeof t!="string")return t===0?t:+t;t=Hge(t);var i=Gge.test(t);return i||Yge.test(t)?Kge(t.slice(2),i?2:8):Wge.test(t)?w3:+t}var Qge="Expected a function",Zge=Math.max,Jge=Math.min;function ZL(t,n,i){var s,d,h,p,b,m,w=0,x=!1,y=!1,_=!0;if(typeof t!="function")throw new TypeError(Qge);n=y3(n)||0,wi(i)&&(x=!!i.leading,y="maxWait"in i,h=y?Zge(y3(i.maxWait)||0,n):h,_="trailing"in i?!!i.trailing:_);function E(q){var H=s,P=d;return s=d=void 0,w=q,p=t.apply(P,H),p}function D(q){return w=q,b=setTimeout(I,n),x?E(q):p}function T(q){var H=q-m,P=q-w,Y=n-H;return y?Jge(Y,h-P):Y}function O(q){var H=q-m,P=q-w;return m===void 0||H>=n||H<0||y&&P>=h}function I(){var q=Oy();if(O(q))return M(q);b=setTimeout(I,T(q))}function M(q){return b=void 0,_&&s?E(q):(s=d=void 0,p)}function B(){b!==void 0&&clearTimeout(b),w=0,s=m=d=b=void 0}function z(){return b===void 0?p:M(Oy())}function U(){var q=Oy(),H=O(q);if(s=arguments,d=this,m=q,H){if(b===void 0)return D(m);if(y)return clearTimeout(b),b=setTimeout(I,n),E(m)}return b===void 0&&(b=setTimeout(I,n)),p}return U.cancel=B,U.flush=z,U}var Xge="Expected a function";function eme(t,n,i){var s=!0,d=!0;if(typeof t!="function")throw new TypeError(Xge);return wi(i)&&(s="leading"in i?!!i.leading:s,d="trailing"in i?!!i.trailing:d),ZL(t,n,{leading:s,maxWait:n,trailing:d})}var tme=function(n,i,s){var d=s.getBoundingClientRect(),h=d.width,p=d.height,b=typeof n.pageX=="number"?n.pageX:n.touches[0].pageX,m=typeof n.pageY=="number"?n.pageY:n.touches[0].pageY,w=b-(s.getBoundingClientRect().left+window.pageXOffset),x=m-(s.getBoundingClientRect().top+window.pageYOffset);w<0?w=0:w>h&&(w=h),x<0?x=0:x>p&&(x=p);var y=w/h,_=1-x/p;return{h:i.h,s:y,v:_,a:i.a,source:"hsv"}},nme=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function rme(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ime(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function ome(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var zb=function(t){ome(n,t);function n(i){rme(this,n);var s=ime(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,i));return s.handleChange=function(d){typeof s.props.onChange=="function"&&s.throttle(s.props.onChange,tme(d,s.props.hsl,s.container),d)},s.handleMouseDown=function(d){s.handleChange(d);var h=s.getContainerRenderWindow();h.addEventListener("mousemove",s.handleChange),h.addEventListener("mouseup",s.handleMouseUp)},s.handleMouseUp=function(){s.unbindEventListeners()},s.throttle=eme(function(d,h,p){d(h,p)},50),s}return nme(n,[{key:"componentWillUnmount",value:function(){this.throttle.cancel(),this.unbindEventListeners()}},{key:"getContainerRenderWindow",value:function(){for(var s=this.container,d=window;!d.document.contains(s)&&d.parent!==d;)d=d.parent;return d}},{key:"unbindEventListeners",value:function(){var s=this.getContainerRenderWindow();s.removeEventListener("mousemove",this.handleChange),s.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var s=this,d=this.props.style||{},h=d.color,p=d.white,b=d.black,m=d.pointer,w=d.circle,x=Ge({default:{color:{absolute:"0px 0px 0px 0px",background:"hsl("+this.props.hsl.h+",100%, 50%)",borderRadius:this.props.radius},white:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},black:{absolute:"0px 0px 0px 0px",boxShadow:this.props.shadow,borderRadius:this.props.radius},pointer:{position:"absolute",top:-(this.props.hsv.v*100)+100+"%",left:this.props.hsv.s*100+"%",cursor:"default"},circle:{width:"4px",height:"4px",boxShadow:`0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,borderRadius:"50%",cursor:"hand",transform:"translate(-2px, -2px)"}},custom:{color:h,white:p,black:b,pointer:m,circle:w}},{custom:!!this.props.style});return V("div",{style:x.color,ref:function(_){return s.container=_},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange,children:[A("style",{children:".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"}),V("div",{style:x.white,className:"saturation-white",children:[A("div",{style:x.black,className:"saturation-black"}),A("div",{style:x.pointer,children:this.props.pointer?lt.createElement(this.props.pointer,this.props):A("div",{style:x.circle})})]})]})}}]),n}(Z.exports.PureComponent||Z.exports.Component);function sme(t,n){for(var i=-1,s=t==null?0:t.length;++i<s&&n(t[i],i,t)!==!1;);return t}var ame=VL(Object.keys,Object);const lme=ame;var cme=Object.prototype,dme=cme.hasOwnProperty;function ume(t){if(!pC(t))return lme(t);var n=[];for(var i in Object(t))dme.call(t,i)&&i!="constructor"&&n.push(i);return n}function kC(t){return Yd(t)?YL(t):ume(t)}function hme(t,n){return t&&FL(t,n,kC)}function fme(t,n){return function(i,s){if(i==null)return i;if(!Yd(i))return t(i,s);for(var d=i.length,h=n?d:-1,p=Object(i);(n?h--:++h<d)&&s(p[h],h,p)!==!1;);return i}}var pme=fme(hme);const JL=pme;function gme(t){return typeof t=="function"?t:Rb}function mme(t,n){var i=Zr(t)?sme:JL;return i(t,gme(n))}function k0(t){return k0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},k0(t)}var bme=/^\s+/,kme=/\s+$/;function Le(t,n){if(t=t||"",n=n||{},t instanceof Le)return t;if(!(this instanceof Le))return new Le(t,n);var i=vme(t);this._originalInput=t,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||i.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}Le.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(n.r*299+n.g*587+n.b*114)/1e3},getLuminance:function(){var n=this.toRgb(),i,s,d,h,p,b;return i=n.r/255,s=n.g/255,d=n.b/255,i<=.03928?h=i/12.92:h=Math.pow((i+.055)/1.055,2.4),s<=.03928?p=s/12.92:p=Math.pow((s+.055)/1.055,2.4),d<=.03928?b=d/12.92:b=Math.pow((d+.055)/1.055,2.4),.2126*h+.7152*p+.0722*b},setAlpha:function(n){return this._a=XL(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=A3(this._r,this._g,this._b);return{h:n.h*360,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=A3(this._r,this._g,this._b),i=Math.round(n.h*360),s=Math.round(n.s*100),d=Math.round(n.v*100);return this._a==1?"hsv("+i+", "+s+"%, "+d+"%)":"hsva("+i+", "+s+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var n=_3(this._r,this._g,this._b);return{h:n.h*360,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=_3(this._r,this._g,this._b),i=Math.round(n.h*360),s=Math.round(n.s*100),d=Math.round(n.l*100);return this._a==1?"hsl("+i+", "+s+"%, "+d+"%)":"hsla("+i+", "+s+"%, "+d+"%, "+this._roundA+")"},toHex:function(n){return C3(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return Ame(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(Jt(this._r,255)*100)+"%",g:Math.round(Jt(this._g,255)*100)+"%",b:Math.round(Jt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(Jt(this._r,255)*100)+"%, "+Math.round(Jt(this._g,255)*100)+"%, "+Math.round(Jt(this._b,255)*100)+"%)":"rgba("+Math.round(Jt(this._r,255)*100)+"%, "+Math.round(Jt(this._g,255)*100)+"%, "+Math.round(Jt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Bme[C3(this._r,this._g,this._b,!0)]||!1},toFilter:function(n){var i="#"+x3(this._r,this._g,this._b,this._a),s=i,d=this._gradientType?"GradientType = 1, ":"";if(n){var h=Le(n);s="#"+x3(h._r,h._g,h._b,h._a)}return"progid:DXImageTransform.Microsoft.gradient("+d+"startColorstr="+i+",endColorstr="+s+")"},toString:function(n){var i=!!n;n=n||this._format;var s=!1,d=this._a<1&&this._a>=0,h=!i&&d&&(n==="hex"||n==="hex6"||n==="hex3"||n==="hex4"||n==="hex8"||n==="name");return h?n==="name"&&this._a===0?this.toName():this.toRgbString():(n==="rgb"&&(s=this.toRgbString()),n==="prgb"&&(s=this.toPercentageRgbString()),(n==="hex"||n==="hex6")&&(s=this.toHexString()),n==="hex3"&&(s=this.toHexString(!0)),n==="hex4"&&(s=this.toHex8String(!0)),n==="hex8"&&(s=this.toHex8String()),n==="name"&&(s=this.toName()),n==="hsl"&&(s=this.toHslString()),n==="hsv"&&(s=this.toHsvString()),s||this.toHexString())},clone:function(){return Le(this.toString())},_applyModification:function(n,i){var s=n.apply(null,[this].concat([].slice.call(i)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(Sme,arguments)},brighten:function(){return this._applyModification(Dme,arguments)},darken:function(){return this._applyModification(Tme,arguments)},desaturate:function(){return this._applyModification(Cme,arguments)},saturate:function(){return this._applyModification(xme,arguments)},greyscale:function(){return this._applyModification(Eme,arguments)},spin:function(){return this._applyModification(Mme,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(Ome,arguments)},complement:function(){return this._applyCombination(Nme,arguments)},monochromatic:function(){return this._applyCombination(Pme,arguments)},splitcomplement:function(){return this._applyCombination(Ime,arguments)},triad:function(){return this._applyCombination(E3,[3])},tetrad:function(){return this._applyCombination(E3,[4])}};Le.fromRatio=function(t,n){if(k0(t)=="object"){var i={};for(var s in t)t.hasOwnProperty(s)&&(s==="a"?i[s]=t[s]:i[s]=Dh(t[s]));t=i}return Le(t,n)};function vme(t){var n={r:0,g:0,b:0},i=1,s=null,d=null,h=null,p=!1,b=!1;return typeof t=="string"&&(t=jme(t)),k0(t)=="object"&&(Wo(t.r)&&Wo(t.g)&&Wo(t.b)?(n=wme(t.r,t.g,t.b),p=!0,b=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Wo(t.h)&&Wo(t.s)&&Wo(t.v)?(s=Dh(t.s),d=Dh(t.v),n=_me(t.h,s,d),p=!0,b="hsv"):Wo(t.h)&&Wo(t.s)&&Wo(t.l)&&(s=Dh(t.s),h=Dh(t.l),n=yme(t.h,s,h),p=!0,b="hsl"),t.hasOwnProperty("a")&&(i=t.a)),i=XL(i),{ok:p,format:t.format||b,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:i}}function wme(t,n,i){return{r:Jt(t,255)*255,g:Jt(n,255)*255,b:Jt(i,255)*255}}function _3(t,n,i){t=Jt(t,255),n=Jt(n,255),i=Jt(i,255);var s=Math.max(t,n,i),d=Math.min(t,n,i),h,p,b=(s+d)/2;if(s==d)h=p=0;else{var m=s-d;switch(p=b>.5?m/(2-s-d):m/(s+d),s){case t:h=(n-i)/m+(n<i?6:0);break;case n:h=(i-t)/m+2;break;case i:h=(t-n)/m+4;break}h/=6}return{h,s:p,l:b}}function yme(t,n,i){var s,d,h;t=Jt(t,360),n=Jt(n,100),i=Jt(i,100);function p(w,x,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?w+(x-w)*6*y:y<1/2?x:y<2/3?w+(x-w)*(2/3-y)*6:w}if(n===0)s=d=h=i;else{var b=i<.5?i*(1+n):i+n-i*n,m=2*i-b;s=p(m,b,t+1/3),d=p(m,b,t),h=p(m,b,t-1/3)}return{r:s*255,g:d*255,b:h*255}}function A3(t,n,i){t=Jt(t,255),n=Jt(n,255),i=Jt(i,255);var s=Math.max(t,n,i),d=Math.min(t,n,i),h,p,b=s,m=s-d;if(p=s===0?0:m/s,s==d)h=0;else{switch(s){case t:h=(n-i)/m+(n<i?6:0);break;case n:h=(i-t)/m+2;break;case i:h=(t-n)/m+4;break}h/=6}return{h,s:p,v:b}}function _me(t,n,i){t=Jt(t,360)*6,n=Jt(n,100),i=Jt(i,100);var s=Math.floor(t),d=t-s,h=i*(1-n),p=i*(1-d*n),b=i*(1-(1-d)*n),m=s%6,w=[i,p,h,h,b,i][m],x=[b,i,i,p,h,h][m],y=[h,h,b,i,i,p][m];return{r:w*255,g:x*255,b:y*255}}function C3(t,n,i,s){var d=[Vi(Math.round(t).toString(16)),Vi(Math.round(n).toString(16)),Vi(Math.round(i).toString(16))];return s&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function Ame(t,n,i,s,d){var h=[Vi(Math.round(t).toString(16)),Vi(Math.round(n).toString(16)),Vi(Math.round(i).toString(16)),Vi(e6(s))];return d&&h[0].charAt(0)==h[0].charAt(1)&&h[1].charAt(0)==h[1].charAt(1)&&h[2].charAt(0)==h[2].charAt(1)&&h[3].charAt(0)==h[3].charAt(1)?h[0].charAt(0)+h[1].charAt(0)+h[2].charAt(0)+h[3].charAt(0):h.join("")}function x3(t,n,i,s){var d=[Vi(e6(s)),Vi(Math.round(t).toString(16)),Vi(Math.round(n).toString(16)),Vi(Math.round(i).toString(16))];return d.join("")}Le.equals=function(t,n){return!t||!n?!1:Le(t).toRgbString()==Le(n).toRgbString()};Le.random=function(){return Le.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function Cme(t,n){n=n===0?0:n||10;var i=Le(t).toHsl();return i.s-=n/100,i.s=jb(i.s),Le(i)}function xme(t,n){n=n===0?0:n||10;var i=Le(t).toHsl();return i.s+=n/100,i.s=jb(i.s),Le(i)}function Eme(t){return Le(t).desaturate(100)}function Sme(t,n){n=n===0?0:n||10;var i=Le(t).toHsl();return i.l+=n/100,i.l=jb(i.l),Le(i)}function Dme(t,n){n=n===0?0:n||10;var i=Le(t).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(255*-(n/100)))),i.g=Math.max(0,Math.min(255,i.g-Math.round(255*-(n/100)))),i.b=Math.max(0,Math.min(255,i.b-Math.round(255*-(n/100)))),Le(i)}function Tme(t,n){n=n===0?0:n||10;var i=Le(t).toHsl();return i.l-=n/100,i.l=jb(i.l),Le(i)}function Mme(t,n){var i=Le(t).toHsl(),s=(i.h+n)%360;return i.h=s<0?360+s:s,Le(i)}function Nme(t){var n=Le(t).toHsl();return n.h=(n.h+180)%360,Le(n)}function E3(t,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var i=Le(t).toHsl(),s=[Le(t)],d=360/n,h=1;h<n;h++)s.push(Le({h:(i.h+h*d)%360,s:i.s,l:i.l}));return s}function Ime(t){var n=Le(t).toHsl(),i=n.h;return[Le(t),Le({h:(i+72)%360,s:n.s,l:n.l}),Le({h:(i+216)%360,s:n.s,l:n.l})]}function Ome(t,n,i){n=n||6,i=i||30;var s=Le(t).toHsl(),d=360/i,h=[Le(t)];for(s.h=(s.h-(d*n>>1)+720)%360;--n;)s.h=(s.h+d)%360,h.push(Le(s));return h}function Pme(t,n){n=n||6;for(var i=Le(t).toHsv(),s=i.h,d=i.s,h=i.v,p=[],b=1/n;n--;)p.push(Le({h:s,s:d,v:h})),h=(h+b)%1;return p}Le.mix=function(t,n,i){i=i===0?0:i||50;var s=Le(t).toRgb(),d=Le(n).toRgb(),h=i/100,p={r:(d.r-s.r)*h+s.r,g:(d.g-s.g)*h+s.g,b:(d.b-s.b)*h+s.b,a:(d.a-s.a)*h+s.a};return Le(p)};Le.readability=function(t,n){var i=Le(t),s=Le(n);return(Math.max(i.getLuminance(),s.getLuminance())+.05)/(Math.min(i.getLuminance(),s.getLuminance())+.05)};Le.isReadable=function(t,n,i){var s=Le.readability(t,n),d,h;switch(h=!1,d=Fme(i),d.level+d.size){case"AAsmall":case"AAAlarge":h=s>=4.5;break;case"AAlarge":h=s>=3;break;case"AAAsmall":h=s>=7;break}return h};Le.mostReadable=function(t,n,i){var s=null,d=0,h,p,b,m;i=i||{},p=i.includeFallbackColors,b=i.level,m=i.size;for(var w=0;w<n.length;w++)h=Le.readability(t,n[w]),h>d&&(d=h,s=Le(n[w]));return Le.isReadable(t,s,{level:b,size:m})||!p?s:(i.includeFallbackColors=!1,Le.mostReadable(t,["#fff","#000"],i))};var c_=Le.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Bme=Le.hexNames=Rme(c_);function Rme(t){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[t[i]]=i);return n}function XL(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function Jt(t,n){Lme(t)&&(t="100%");var i=zme(t);return t=Math.min(n,Math.max(0,parseFloat(t))),i&&(t=parseInt(t*n,10)/100),Math.abs(t-n)<1e-6?1:t%n/parseFloat(n)}function jb(t){return Math.min(1,Math.max(0,t))}function Vr(t){return parseInt(t,16)}function Lme(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function zme(t){return typeof t=="string"&&t.indexOf("%")!=-1}function Vi(t){return t.length==1?"0"+t:""+t}function Dh(t){return t<=1&&(t=t*100+"%"),t}function e6(t){return Math.round(parseFloat(t)*255).toString(16)}function S3(t){return Vr(t)/255}var Li=function(){var t="[-\\+]?\\d+%?",n="[-\\+]?\\d*\\.\\d+%?",i="(?:"+n+")|(?:"+t+")",s="[\\s|\\(]+("+i+")[,|\\s]+("+i+")[,|\\s]+("+i+")\\s*\\)?",d="[\\s|\\(]+("+i+")[,|\\s]+("+i+")[,|\\s]+("+i+")[,|\\s]+("+i+")\\s*\\)?";return{CSS_UNIT:new RegExp(i),rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+d),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+d),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+d),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Wo(t){return!!Li.CSS_UNIT.exec(t)}function jme(t){t=t.replace(bme,"").replace(kme,"").toLowerCase();var n=!1;if(c_[t])t=c_[t],n=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var i;return(i=Li.rgb.exec(t))?{r:i[1],g:i[2],b:i[3]}:(i=Li.rgba.exec(t))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=Li.hsl.exec(t))?{h:i[1],s:i[2],l:i[3]}:(i=Li.hsla.exec(t))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=Li.hsv.exec(t))?{h:i[1],s:i[2],v:i[3]}:(i=Li.hsva.exec(t))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=Li.hex8.exec(t))?{r:Vr(i[1]),g:Vr(i[2]),b:Vr(i[3]),a:S3(i[4]),format:n?"name":"hex8"}:(i=Li.hex6.exec(t))?{r:Vr(i[1]),g:Vr(i[2]),b:Vr(i[3]),format:n?"name":"hex"}:(i=Li.hex4.exec(t))?{r:Vr(i[1]+""+i[1]),g:Vr(i[2]+""+i[2]),b:Vr(i[3]+""+i[3]),a:S3(i[4]+""+i[4]),format:n?"name":"hex8"}:(i=Li.hex3.exec(t))?{r:Vr(i[1]+""+i[1]),g:Vr(i[2]+""+i[2]),b:Vr(i[3]+""+i[3]),format:n?"name":"hex"}:!1}function Fme(t){var n,i;return t=t||{level:"AA",size:"small"},n=(t.level||"AA").toUpperCase(),i=(t.size||"small").toLowerCase(),n!=="AA"&&n!=="AAA"&&(n="AA"),i!=="small"&&i!=="large"&&(i="small"),{level:n,size:i}}var D3=function(n){var i=["r","g","b","a","h","s","l","v"],s=0,d=0;return mme(i,function(h){if(n[h]&&(s+=1,isNaN(n[h])||(d+=1),h==="s"||h==="l")){var p=/^\d+%$/;p.test(n[h])&&(d+=1)}}),s===d?n:!1},Th=function(n,i){var s=n.hex?Le(n.hex):Le(n),d=s.toHsl(),h=s.toHsv(),p=s.toRgb(),b=s.toHex();d.s===0&&(d.h=i||0,h.h=i||0);var m=b==="000000"&&p.a===0;return{hsl:d,hex:m?"transparent":"#"+b,rgb:p,hsv:h,oldHue:n.h||i||d.h,source:n.source}},Da=function(n){if(n==="transparent")return!0;var i=String(n).charAt(0)==="#"?1:0;return n.length!==4+i&&n.length<7+i&&Le(n).isValid()},vC=function(n){if(!n)return"#fff";var i=Th(n);if(i.hex==="transparent")return"rgba(0,0,0,0.4)";var s=(i.rgb.r*299+i.rgb.g*587+i.rgb.b*114)/1e3;return s>=128?"#000":"#fff"},Py=function(n,i){var s=n.replace("\xB0","");return Le(i+" ("+s+")")._ok},Zg=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},$me=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Vme(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Ume(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Hme(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var Or=function(n){var i=function(s){Hme(d,s);function d(h){Vme(this,d);var p=Ume(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));return p.handleChange=function(b,m){var w=D3(b);if(w){var x=Th(b,b.h||p.state.oldHue);p.setState(x),p.props.onChangeComplete&&p.debounce(p.props.onChangeComplete,x,m),p.props.onChange&&p.props.onChange(x,m)}},p.handleSwatchHover=function(b,m){var w=D3(b);if(w){var x=Th(b,b.h||p.state.oldHue);p.props.onSwatchHover&&p.props.onSwatchHover(x,m)}},p.state=Zg({},Th(h.color,0)),p.debounce=ZL(function(b,m,w){b(m,w)},100),p}return $me(d,[{key:"render",value:function(){var p={};return this.props.onSwatchHover&&(p.onSwatchHover=this.handleSwatchHover),A(n,{...this.props,...this.state,onChange:this.handleChange,...p})}}],[{key:"getDerivedStateFromProps",value:function(p,b){return Zg({},Th(p.color,b.oldHue))}}]),d}(Z.exports.PureComponent||Z.exports.Component);return i.propTypes=Zg({},n.propTypes),i.defaultProps=Zg({},n.defaultProps,{color:{h:250,s:.5,l:.2,a:1}}),i},qme=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Wme(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function T3(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Gme(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var Yme=function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"span";return function(s){Gme(d,s);function d(){var h,p,b,m;Wme(this,d);for(var w=arguments.length,x=Array(w),y=0;y<w;y++)x[y]=arguments[y];return m=(p=(b=T3(this,(h=d.__proto__||Object.getPrototypeOf(d)).call.apply(h,[this].concat(x))),b),b.state={focus:!1},b.handleFocus=function(){return b.setState({focus:!0})},b.handleBlur=function(){return b.setState({focus:!1})},p),T3(b,m)}return qme(d,[{key:"render",value:function(){return A(i,{onFocus:this.handleFocus,onBlur:this.handleBlur,children:A(n,{...this.props,...this.state})})}}]),d}(lt.Component)},Kme=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Qme=13,Zme=function(n){var i=n.color,s=n.style,d=n.onClick,h=d===void 0?function(){}:d,p=n.onHover,b=n.title,m=b===void 0?i:b,w=n.children,x=n.focus,y=n.focusStyle,_=y===void 0?{}:y,E=i==="transparent",D=Ge({default:{swatch:Kme({background:i,height:"100%",width:"100%",cursor:"pointer",position:"relative",outline:"none"},s,x?_:{})}}),T=function(z){return h(i,z)},O=function(z){return z.keyCode===Qme&&h(i,z)},I=function(z){return p(i,z)},M={};return p&&(M.onMouseOver=I),V("div",{style:D.swatch,onClick:T,title:m,tabIndex:0,onKeyDown:O,...M,children:[w,E&&A(Wd,{borderRadius:D.swatch.borderRadius,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"})]})};const jl=Yme(Zme);var Jme=function(n){var i=n.direction,s=Ge({default:{picker:{width:"18px",height:"18px",borderRadius:"50%",transform:"translate(-9px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}},vertical:{picker:{transform:"translate(-3px, -9px)"}}},{vertical:i==="vertical"});return A("div",{style:s.picker})},t6=function(n){var i=n.rgb,s=n.hsl,d=n.width,h=n.height,p=n.onChange,b=n.direction,m=n.style,w=n.renderers,x=n.pointer,y=n.className,_=y===void 0?"":y,E=Ge({default:{picker:{position:"relative",width:d,height:h},alpha:{radius:"2px",style:m}}});return A("div",{style:E.picker,className:"alpha-picker "+_,children:A(uC,{...E.alpha,rgb:i,hsl:s,pointer:x,renderers:w,onChange:p,direction:b})})};t6.defaultProps={width:"316px",height:"16px",direction:"horizontal",pointer:Jme};Or(t6);function n6(t,n){for(var i=-1,s=t==null?0:t.length,d=Array(s);++i<s;)d[i]=n(t[i],i,t);return d}var Xme="__lodash_hash_undefined__";function e0e(t){return this.__data__.set(t,Xme),this}function t0e(t){return this.__data__.has(t)}function v0(t){var n=-1,i=t==null?0:t.length;for(this.__data__=new ks;++n<i;)this.add(t[n])}v0.prototype.add=v0.prototype.push=e0e;v0.prototype.has=t0e;function n0e(t,n){for(var i=-1,s=t==null?0:t.length;++i<s;)if(n(t[i],i,t))return!0;return!1}function r0e(t,n){return t.has(n)}var i0e=1,o0e=2;function r6(t,n,i,s,d,h){var p=i&i0e,b=t.length,m=n.length;if(b!=m&&!(p&&m>b))return!1;var w=h.get(t),x=h.get(n);if(w&&x)return w==n&&x==t;var y=-1,_=!0,E=i&o0e?new v0:void 0;for(h.set(t,n),h.set(n,t);++y<b;){var D=t[y],T=n[y];if(s)var O=p?s(T,D,y,n,t,h):s(D,T,y,t,n,h);if(O!==void 0){if(O)continue;_=!1;break}if(E){if(!n0e(n,function(I,M){if(!r0e(E,M)&&(D===I||d(D,I,i,s,h)))return E.push(M)})){_=!1;break}}else if(!(D===T||d(D,T,i,s,h))){_=!1;break}}return h.delete(t),h.delete(n),_}function s0e(t){var n=-1,i=Array(t.size);return t.forEach(function(s,d){i[++n]=[d,s]}),i}function a0e(t){var n=-1,i=Array(t.size);return t.forEach(function(s){i[++n]=s}),i}var l0e=1,c0e=2,d0e="[object Boolean]",u0e="[object Date]",h0e="[object Error]",f0e="[object Map]",p0e="[object Number]",g0e="[object RegExp]",m0e="[object Set]",b0e="[object String]",k0e="[object Symbol]",v0e="[object ArrayBuffer]",w0e="[object DataView]",M3=_a?_a.prototype:void 0,By=M3?M3.valueOf:void 0;function y0e(t,n,i,s,d,h,p){switch(i){case w0e:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case v0e:return!(t.byteLength!=n.byteLength||!h(new g0(t),new g0(n)));case d0e:case u0e:case p0e:return Yf(+t,+n);case h0e:return t.name==n.name&&t.message==n.message;case g0e:case b0e:return t==n+"";case f0e:var b=s0e;case m0e:var m=s&l0e;if(b||(b=a0e),t.size!=n.size&&!m)return!1;var w=p.get(t);if(w)return w==n;s|=c0e,p.set(t,n);var x=r6(b(t),b(n),s,d,h,p);return p.delete(t),x;case k0e:if(By)return By.call(t)==By.call(n)}return!1}function _0e(t,n){for(var i=-1,s=n.length,d=t.length;++i<s;)t[d+i]=n[i];return t}function A0e(t,n,i){var s=n(t);return Zr(t)?s:_0e(s,i(t))}function C0e(t,n){for(var i=-1,s=t==null?0:t.length,d=0,h=[];++i<s;){var p=t[i];n(p,i,t)&&(h[d++]=p)}return h}function x0e(){return[]}var E0e=Object.prototype,S0e=E0e.propertyIsEnumerable,N3=Object.getOwnPropertySymbols,D0e=N3?function(t){return t==null?[]:(t=Object(t),C0e(N3(t),function(n){return S0e.call(t,n)}))}:x0e;const T0e=D0e;function I3(t){return A0e(t,kC,T0e)}var M0e=1,N0e=Object.prototype,I0e=N0e.hasOwnProperty;function O0e(t,n,i,s,d,h){var p=i&M0e,b=I3(t),m=b.length,w=I3(n),x=w.length;if(m!=x&&!p)return!1;for(var y=m;y--;){var _=b[y];if(!(p?_ in n:I0e.call(n,_)))return!1}var E=h.get(t),D=h.get(n);if(E&&D)return E==n&&D==t;var T=!0;h.set(t,n),h.set(n,t);for(var O=p;++y<m;){_=b[y];var I=t[_],M=n[_];if(s)var B=p?s(M,I,_,n,t,h):s(I,M,_,t,n,h);if(!(B===void 0?I===M||d(I,M,i,s,h):B)){T=!1;break}O||(O=_=="constructor")}if(T&&!O){var z=t.constructor,U=n.constructor;z!=U&&"constructor"in t&&"constructor"in n&&!(typeof z=="function"&&z instanceof z&&typeof U=="function"&&U instanceof U)&&(T=!1)}return h.delete(t),h.delete(n),T}var P0e=zl(Xi,"DataView");const d_=P0e;var B0e=zl(Xi,"Promise");const u_=B0e;var R0e=zl(Xi,"Set");const h_=R0e;var L0e=zl(Xi,"WeakMap");const f_=L0e;var O3="[object Map]",z0e="[object Object]",P3="[object Promise]",B3="[object Set]",R3="[object WeakMap]",L3="[object DataView]",j0e=Ll(d_),F0e=Ll(Cf),$0e=Ll(u_),V0e=Ll(h_),U0e=Ll(f_),fl=Rl;(d_&&fl(new d_(new ArrayBuffer(1)))!=L3||Cf&&fl(new Cf)!=O3||u_&&fl(u_.resolve())!=P3||h_&&fl(new h_)!=B3||f_&&fl(new f_)!=R3)&&(fl=function(t){var n=Rl(t),i=n==z0e?t.constructor:void 0,s=i?Ll(i):"";if(s)switch(s){case j0e:return L3;case F0e:return O3;case $0e:return P3;case V0e:return B3;case U0e:return R3}return n});const z3=fl;var H0e=1,j3="[object Arguments]",F3="[object Array]",Jg="[object Object]",q0e=Object.prototype,$3=q0e.hasOwnProperty;function W0e(t,n,i,s,d,h){var p=Zr(t),b=Zr(n),m=p?F3:z3(t),w=b?F3:z3(n);m=m==j3?Jg:m,w=w==j3?Jg:w;var x=m==Jg,y=w==Jg,_=m==w;if(_&&b0(t)){if(!b0(n))return!1;p=!0,x=!1}if(_&&!x)return h||(h=new Co),p||mC(t)?r6(t,n,i,s,d,h):y0e(t,n,m,i,s,d,h);if(!(i&H0e)){var E=x&&$3.call(t,"__wrapped__"),D=y&&$3.call(n,"__wrapped__");if(E||D){var T=E?t.value():t,O=D?n.value():n;return h||(h=new Co),d(T,O,i,s,h)}}return _?(h||(h=new Co),O0e(t,n,i,s,d,h)):!1}function wC(t,n,i,s,d){return t===n?!0:t==null||n==null||!Aa(t)&&!Aa(n)?t!==t&&n!==n:W0e(t,n,i,s,wC,d)}var G0e=1,Y0e=2;function K0e(t,n,i,s){var d=i.length,h=d,p=!s;if(t==null)return!h;for(t=Object(t);d--;){var b=i[d];if(p&&b[2]?b[1]!==t[b[0]]:!(b[0]in t))return!1}for(;++d<h;){b=i[d];var m=b[0],w=t[m],x=b[1];if(p&&b[2]){if(w===void 0&&!(m in t))return!1}else{var y=new Co;if(s)var _=s(w,x,m,t,n,y);if(!(_===void 0?wC(x,w,G0e|Y0e,s,y):_))return!1}}return!0}function i6(t){return t===t&&!wi(t)}function Q0e(t){for(var n=kC(t),i=n.length;i--;){var s=n[i],d=t[s];n[i]=[s,d,i6(d)]}return n}function o6(t,n){return function(i){return i==null?!1:i[t]===n&&(n!==void 0||t in Object(i))}}function Z0e(t){var n=Q0e(t);return n.length==1&&n[0][2]?o6(n[0][0],n[0][1]):function(i){return i===t||K0e(i,t,n)}}var J0e=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,X0e=/^\w*$/;function yC(t,n){if(Zr(t))return!1;var i=typeof t;return i=="number"||i=="symbol"||i=="boolean"||t==null||Lb(t)?!0:X0e.test(t)||!J0e.test(t)||n!=null&&t in Object(n)}var ebe="Expected a function";function _C(t,n){if(typeof t!="function"||n!=null&&typeof n!="function")throw new TypeError(ebe);var i=function(){var s=arguments,d=n?n.apply(this,s):s[0],h=i.cache;if(h.has(d))return h.get(d);var p=t.apply(this,s);return i.cache=h.set(d,p)||h,p};return i.cache=new(_C.Cache||ks),i}_C.Cache=ks;var tbe=500;function nbe(t){var n=_C(t,function(s){return i.size===tbe&&i.clear(),s}),i=n.cache;return n}var rbe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ibe=/\\(\\)?/g,obe=nbe(function(t){var n=[];return t.charCodeAt(0)===46&&n.push(""),t.replace(rbe,function(i,s,d,h){n.push(d?h.replace(ibe,"$1"):s||i)}),n});const sbe=obe;var abe=1/0,V3=_a?_a.prototype:void 0,U3=V3?V3.toString:void 0;function s6(t){if(typeof t=="string")return t;if(Zr(t))return n6(t,s6)+"";if(Lb(t))return U3?U3.call(t):"";var n=t+"";return n=="0"&&1/t==-abe?"-0":n}function lbe(t){return t==null?"":s6(t)}function a6(t,n){return Zr(t)?t:yC(t,n)?[t]:sbe(lbe(t))}var cbe=1/0;function Fb(t){if(typeof t=="string"||Lb(t))return t;var n=t+"";return n=="0"&&1/t==-cbe?"-0":n}function l6(t,n){n=a6(n,t);for(var i=0,s=n.length;t!=null&&i<s;)t=t[Fb(n[i++])];return i&&i==s?t:void 0}function dbe(t,n,i){var s=t==null?void 0:l6(t,n);return s===void 0?i:s}function ube(t,n){return t!=null&&n in Object(t)}function hbe(t,n,i){n=a6(n,t);for(var s=-1,d=n.length,h=!1;++s<d;){var p=Fb(n[s]);if(!(h=t!=null&&i(t,p)))break;t=t[p]}return h||++s!=d?h:(d=t==null?0:t.length,!!d&&gC(d)&&bC(p,d)&&(Zr(t)||m0(t)))}function fbe(t,n){return t!=null&&hbe(t,n,ube)}var pbe=1,gbe=2;function mbe(t,n){return yC(t)&&i6(n)?o6(Fb(t),n):function(i){var s=dbe(i,t);return s===void 0&&s===n?fbe(i,t):wC(n,s,pbe|gbe)}}function bbe(t){return function(n){return n==null?void 0:n[t]}}function kbe(t){return function(n){return l6(n,t)}}function vbe(t){return yC(t)?bbe(Fb(t)):kbe(t)}function wbe(t){return typeof t=="function"?t:t==null?Rb:typeof t=="object"?Zr(t)?mbe(t[0],t[1]):Z0e(t):vbe(t)}function ybe(t,n){var i=-1,s=Yd(t)?Array(t.length):[];return JL(t,function(d,h,p){s[++i]=n(d,h,p)}),s}function Fl(t,n){var i=Zr(t)?n6:ybe;return i(t,wbe(n))}var _be=function(n){var i=n.colors,s=n.onClick,d=n.onSwatchHover,h=Ge({default:{swatches:{marginRight:"-10px"},swatch:{width:"22px",height:"22px",float:"left",marginRight:"10px",marginBottom:"10px",borderRadius:"4px"},clear:{clear:"both"}}});return V("div",{style:h.swatches,children:[Fl(i,function(p){return A(jl,{color:p,style:h.swatch,onClick:s,onHover:d,focusStyle:{boxShadow:"0 0 4px "+p}},p)}),A("div",{style:h.clear})]})},AC=function(n){var i=n.onChange,s=n.onSwatchHover,d=n.hex,h=n.colors,p=n.width,b=n.triangle,m=n.styles,w=m===void 0?{}:m,x=n.className,y=x===void 0?"":x,_=d==="transparent",E=function(O,I){Da(O)&&i({hex:O,source:"hex"},I)},D=Ge(Ir({default:{card:{width:p,background:"#fff",boxShadow:"0 1px rgba(0,0,0,.1)",borderRadius:"6px",position:"relative"},head:{height:"110px",background:d,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},body:{padding:"10px"},label:{fontSize:"18px",color:vC(d),position:"relative"},triangle:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 10px 10px 10px",borderColor:"transparent transparent "+d+" transparent",position:"absolute",top:"-10px",left:"50%",marginLeft:"-10px"},input:{width:"100%",fontSize:"12px",color:"#666",border:"0px",outline:"none",height:"22px",boxShadow:"inset 0 0 0 1px #ddd",borderRadius:"4px",padding:"0 7px",boxSizing:"border-box"}},"hide-triangle":{triangle:{display:"none"}}},w),{"hide-triangle":b==="hide"});return V("div",{style:D.card,className:"block-picker "+y,children:[A("div",{style:D.triangle}),V("div",{style:D.head,children:[_&&A(Wd,{borderRadius:"6px 6px 0 0"}),A("div",{style:D.label,children:d})]}),V("div",{style:D.body,children:[A(_be,{colors:h,onClick:E,onSwatchHover:s}),A(ct,{style:{input:D.input},value:d,onChange:E})]})]})};AC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),colors:_e.exports.arrayOf(_e.exports.string),triangle:_e.exports.oneOf(["top","hide"]),styles:_e.exports.object};AC.defaultProps={width:170,colors:["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],triangle:"top",styles:{}};Or(AC);var Mc={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},Nc={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},Ic={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},Oc={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},Pc={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},Bc={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},Rc={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},Lc={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},zc={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},Mh={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},jc={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},Fc={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},$c={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},Vc={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},Uc={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},Hc={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},qc={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},Wc={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},c6=function(n){var i=n.color,s=n.onClick,d=n.onSwatchHover,h=n.hover,p=n.active,b=n.circleSize,m=n.circleSpacing,w=Ge({default:{swatch:{width:b,height:b,marginRight:m,marginBottom:m,transform:"scale(1)",transition:"100ms transform ease"},Swatch:{borderRadius:"50%",background:"transparent",boxShadow:"inset 0 0 0 "+(b/2+1)+"px "+i,transition:"100ms box-shadow ease"}},hover:{swatch:{transform:"scale(1.2)"}},active:{Swatch:{boxShadow:"inset 0 0 0 3px "+i}}},{hover:h,active:p});return A("div",{style:w.swatch,children:A(jl,{style:w.Swatch,color:i,onClick:s,onHover:d,focusStyle:{boxShadow:w.Swatch.boxShadow+", 0 0 5px "+i}})})};c6.defaultProps={circleSize:28,circleSpacing:14};const Abe=dC(c6);var CC=function(n){var i=n.width,s=n.onChange,d=n.onSwatchHover,h=n.colors,p=n.hex,b=n.circleSize,m=n.styles,w=m===void 0?{}:m,x=n.circleSpacing,y=n.className,_=y===void 0?"":y,E=Ge(Ir({default:{card:{width:i,display:"flex",flexWrap:"wrap",marginRight:-x,marginBottom:-x}}},w)),D=function(O,I){return s({hex:O,source:"hex"},I)};return A("div",{style:E.card,className:"circle-picker "+_,children:Fl(h,function(T){return A(Abe,{color:T,onClick:D,onSwatchHover:d,active:p===T.toLowerCase(),circleSize:b,circleSpacing:x},T)})})};CC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),circleSize:_e.exports.number,circleSpacing:_e.exports.number,styles:_e.exports.object};CC.defaultProps={width:252,circleSize:28,circleSpacing:14,colors:[Mc[500],Nc[500],Ic[500],Oc[500],Pc[500],Bc[500],Rc[500],Lc[500],zc[500],Mh[500],jc[500],Fc[500],$c[500],Vc[500],Uc[500],Hc[500],qc[500],Wc[500]],styles:{}};Or(CC);function H3(t){return t===void 0}var d6={};Object.defineProperty(d6,"__esModule",{value:!0});var q3=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Cbe=Z.exports,W3=xbe(Cbe);function xbe(t){return t&&t.__esModule?t:{default:t}}function Ebe(t,n){var i={};for(var s in t)n.indexOf(s)>=0||!Object.prototype.hasOwnProperty.call(t,s)||(i[s]=t[s]);return i}var Xg=24,Sbe=d6.default=function(t){var n=t.fill,i=n===void 0?"currentColor":n,s=t.width,d=s===void 0?Xg:s,h=t.height,p=h===void 0?Xg:h,b=t.style,m=b===void 0?{}:b,w=Ebe(t,["fill","width","height","style"]);return W3.default.createElement("svg",q3({viewBox:"0 0 "+Xg+" "+Xg,style:q3({fill:i,width:d,height:p},m)},w),W3.default.createElement("path",{d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}))},Dbe=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Tbe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function Mbe(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Nbe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var u6=function(t){Nbe(n,t);function n(i){Tbe(this,n);var s=Mbe(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return s.toggleViews=function(){s.state.view==="hex"?s.setState({view:"rgb"}):s.state.view==="rgb"?s.setState({view:"hsl"}):s.state.view==="hsl"&&(s.props.hsl.a===1?s.setState({view:"hex"}):s.setState({view:"rgb"}))},s.handleChange=function(d,h){d.hex?Da(d.hex)&&s.props.onChange({hex:d.hex,source:"hex"},h):d.r||d.g||d.b?s.props.onChange({r:d.r||s.props.rgb.r,g:d.g||s.props.rgb.g,b:d.b||s.props.rgb.b,source:"rgb"},h):d.a?(d.a<0?d.a=0:d.a>1&&(d.a=1),s.props.onChange({h:s.props.hsl.h,s:s.props.hsl.s,l:s.props.hsl.l,a:Math.round(d.a*100)/100,source:"rgb"},h)):(d.h||d.s||d.l)&&(typeof d.s=="string"&&d.s.includes("%")&&(d.s=d.s.replace("%","")),typeof d.l=="string"&&d.l.includes("%")&&(d.l=d.l.replace("%","")),d.s==1?d.s=.01:d.l==1&&(d.l=.01),s.props.onChange({h:d.h||s.props.hsl.h,s:Number(H3(d.s)?s.props.hsl.s:d.s),l:Number(H3(d.l)?s.props.hsl.l:d.l),source:"hsl"},h))},s.showHighlight=function(d){d.currentTarget.style.background="#eee"},s.hideHighlight=function(d){d.currentTarget.style.background="transparent"},i.hsl.a!==1&&i.view==="hex"?s.state={view:"rgb"}:s.state={view:i.view},s}return Dbe(n,[{key:"render",value:function(){var s=this,d=Ge({default:{wrap:{paddingTop:"16px",display:"flex"},fields:{flex:"1",display:"flex",marginLeft:"-6px"},field:{paddingLeft:"6px",width:"100%"},alpha:{paddingLeft:"6px",width:"100%"},toggle:{width:"32px",textAlign:"right",position:"relative"},icon:{marginRight:"-4px",marginTop:"12px",cursor:"pointer",position:"relative"},iconHighlight:{position:"absolute",width:"24px",height:"28px",background:"#eee",borderRadius:"4px",top:"10px",left:"12px",display:"none"},input:{fontSize:"11px",color:"#333",width:"100%",borderRadius:"2px",border:"none",boxShadow:"inset 0 0 0 1px #dadada",height:"21px",textAlign:"center"},label:{textTransform:"uppercase",fontSize:"11px",lineHeight:"11px",color:"#969696",textAlign:"center",display:"block",marginTop:"12px"},svg:{fill:"#333",width:"24px",height:"24px",border:"1px transparent solid",borderRadius:"5px"}},disableAlpha:{alpha:{display:"none"}}},this.props,this.state),h=void 0;return this.state.view==="hex"?h=A("div",{style:d.fields,className:"flexbox-fix",children:A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"hex",value:this.props.hex,onChange:this.handleChange})})}):this.state.view==="rgb"?h=V("div",{style:d.fields,className:"flexbox-fix",children:[A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"r",value:this.props.rgb.r,onChange:this.handleChange})}),A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"g",value:this.props.rgb.g,onChange:this.handleChange})}),A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"b",value:this.props.rgb.b,onChange:this.handleChange})}),A("div",{style:d.alpha,children:A(ct,{style:{input:d.input,label:d.label},label:"a",value:this.props.rgb.a,arrowOffset:.01,onChange:this.handleChange})})]}):this.state.view==="hsl"&&(h=V("div",{style:d.fields,className:"flexbox-fix",children:[A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"h",value:Math.round(this.props.hsl.h),onChange:this.handleChange})}),A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"s",value:Math.round(this.props.hsl.s*100)+"%",onChange:this.handleChange})}),A("div",{style:d.field,children:A(ct,{style:{input:d.input,label:d.label},label:"l",value:Math.round(this.props.hsl.l*100)+"%",onChange:this.handleChange})}),A("div",{style:d.alpha,children:A(ct,{style:{input:d.input,label:d.label},label:"a",value:this.props.hsl.a,arrowOffset:.01,onChange:this.handleChange})})]})),V("div",{style:d.wrap,className:"flexbox-fix",children:[h,A("div",{style:d.toggle,children:A("div",{style:d.icon,onClick:this.toggleViews,ref:function(b){return s.icon=b},children:A(Sbe,{style:d.svg,onMouseOver:this.showHighlight,onMouseEnter:this.showHighlight,onMouseOut:this.hideHighlight})})})]})}}],[{key:"getDerivedStateFromProps",value:function(s,d){return s.hsl.a!==1&&d.view==="hex"?{view:"rgb"}:null}}]),n}(lt.Component);u6.defaultProps={view:"hex"};var G3=function(){var n=Ge({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",transform:"translate(-6px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}}});return A("div",{style:n.picker})},Ibe=function(){var n=Ge({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}}});return A("div",{style:n.picker})},xC=function(n){var i=n.width,s=n.onChange,d=n.disableAlpha,h=n.rgb,p=n.hsl,b=n.hsv,m=n.hex,w=n.renderers,x=n.styles,y=x===void 0?{}:x,_=n.className,E=_===void 0?"":_,D=n.defaultView,T=Ge(Ir({default:{picker:{width:i,background:"#fff",borderRadius:"2px",boxShadow:"0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",boxSizing:"initial",fontFamily:"Menlo"},saturation:{width:"100%",paddingBottom:"55%",position:"relative",borderRadius:"2px 2px 0 0",overflow:"hidden"},Saturation:{radius:"2px 2px 0 0"},body:{padding:"16px 16px 12px"},controls:{display:"flex"},color:{width:"32px"},swatch:{marginTop:"6px",width:"16px",height:"16px",borderRadius:"8px",position:"relative",overflow:"hidden"},active:{absolute:"0px 0px 0px 0px",borderRadius:"8px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.1)",background:"rgba("+h.r+", "+h.g+", "+h.b+", "+h.a+")",zIndex:"2"},toggles:{flex:"1"},hue:{height:"10px",position:"relative",marginBottom:"8px"},Hue:{radius:"2px"},alpha:{height:"10px",position:"relative"},Alpha:{radius:"2px"}},disableAlpha:{color:{width:"22px"},alpha:{display:"none"},hue:{marginBottom:"0px"},swatch:{width:"10px",height:"10px",marginTop:"0px"}}},y),{disableAlpha:d});return V("div",{style:T.picker,className:"chrome-picker "+E,children:[A("div",{style:T.saturation,children:A(zb,{style:T.Saturation,hsl:p,hsv:b,pointer:Ibe,onChange:s})}),V("div",{style:T.body,children:[V("div",{style:T.controls,className:"flexbox-fix",children:[A("div",{style:T.color,children:V("div",{style:T.swatch,children:[A("div",{style:T.active}),A(Wd,{renderers:w})]})}),V("div",{style:T.toggles,children:[A("div",{style:T.hue,children:A(Gd,{style:T.Hue,hsl:p,pointer:G3,onChange:s})}),A("div",{style:T.alpha,children:A(uC,{style:T.Alpha,rgb:h,hsl:p,pointer:G3,renderers:w,onChange:s})})]})]}),A(u6,{rgb:h,hsl:p,hex:m,view:D,onChange:s,disableAlpha:d})]})]})};xC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),disableAlpha:_e.exports.bool,styles:_e.exports.object,defaultView:_e.exports.oneOf(["hex","rgb","hsl"])};xC.defaultProps={width:225,disableAlpha:!1,styles:{}};Or(xC);var Obe=function(n){var i=n.color,s=n.onClick,d=s===void 0?function(){}:s,h=n.onSwatchHover,p=n.active,b=Ge({default:{color:{background:i,width:"15px",height:"15px",float:"left",marginRight:"5px",marginBottom:"5px",position:"relative",cursor:"pointer"},dot:{absolute:"5px 5px 5px 5px",background:vC(i),borderRadius:"50%",opacity:"0"}},active:{dot:{opacity:"1"}},"color-#FFFFFF":{color:{boxShadow:"inset 0 0 0 1px #ddd"},dot:{background:"#000"}},transparent:{dot:{background:"#000"}}},{active:p,"color-#FFFFFF":i==="#FFFFFF",transparent:i==="transparent"});return A(jl,{style:b.color,color:i,onClick:d,onHover:h,focusStyle:{boxShadow:"0 0 4px "+i},children:A("div",{style:b.dot})})},Pbe=function(n){var i=n.hex,s=n.rgb,d=n.onChange,h=Ge({default:{fields:{display:"flex",paddingBottom:"6px",paddingRight:"5px",position:"relative"},active:{position:"absolute",top:"6px",left:"5px",height:"9px",width:"9px",background:i},HEXwrap:{flex:"6",position:"relative"},HEXinput:{width:"80%",padding:"0px",paddingLeft:"20%",border:"none",outline:"none",background:"none",fontSize:"12px",color:"#333",height:"16px"},HEXlabel:{display:"none"},RGBwrap:{flex:"3",position:"relative"},RGBinput:{width:"70%",padding:"0px",paddingLeft:"30%",border:"none",outline:"none",background:"none",fontSize:"12px",color:"#333",height:"16px"},RGBlabel:{position:"absolute",top:"3px",left:"0px",lineHeight:"16px",textTransform:"uppercase",fontSize:"12px",color:"#999"}}}),p=function(m,w){m.r||m.g||m.b?d({r:m.r||s.r,g:m.g||s.g,b:m.b||s.b,source:"rgb"},w):d({hex:m.hex,source:"hex"},w)};return V("div",{style:h.fields,className:"flexbox-fix",children:[A("div",{style:h.active}),A(ct,{style:{wrap:h.HEXwrap,input:h.HEXinput,label:h.HEXlabel},label:"hex",value:i,onChange:p}),A(ct,{style:{wrap:h.RGBwrap,input:h.RGBinput,label:h.RGBlabel},label:"r",value:s.r,onChange:p}),A(ct,{style:{wrap:h.RGBwrap,input:h.RGBinput,label:h.RGBlabel},label:"g",value:s.g,onChange:p}),A(ct,{style:{wrap:h.RGBwrap,input:h.RGBinput,label:h.RGBlabel},label:"b",value:s.b,onChange:p})]})},EC=function(n){var i=n.onChange,s=n.onSwatchHover,d=n.colors,h=n.hex,p=n.rgb,b=n.styles,m=b===void 0?{}:b,w=n.className,x=w===void 0?"":w,y=Ge(Ir({default:{Compact:{background:"#f6f6f6",radius:"4px"},compact:{paddingTop:"5px",paddingLeft:"5px",boxSizing:"initial",width:"240px"},clear:{clear:"both"}}},m)),_=function(D,T){D.hex?Da(D.hex)&&i({hex:D.hex,source:"hex"},T):i(D,T)};return A(Kf,{style:y.Compact,styles:m,children:V("div",{style:y.compact,className:"compact-picker "+x,children:[V("div",{children:[Fl(d,function(E){return A(Obe,{color:E,active:E.toLowerCase()===h,onClick:_,onSwatchHover:s},E)}),A("div",{style:y.clear})]}),A(Pbe,{hex:h,rgb:p,onChange:_})]})})};EC.propTypes={colors:_e.exports.arrayOf(_e.exports.string),styles:_e.exports.object};EC.defaultProps={colors:["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#cccccc","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"],styles:{}};Or(EC);var Bbe=function(n){var i=n.hover,s=n.color,d=n.onClick,h=n.onSwatchHover,p={position:"relative",zIndex:"2",outline:"2px solid #fff",boxShadow:"0 0 5px 2px rgba(0,0,0,0.25)"},b=Ge({default:{swatch:{width:"25px",height:"25px",fontSize:"0"}},hover:{swatch:p}},{hover:i});return A("div",{style:b.swatch,children:A(jl,{color:s,onClick:d,onHover:h,focusStyle:p})})};const Rbe=dC(Bbe);var SC=function(n){var i=n.width,s=n.colors,d=n.onChange,h=n.onSwatchHover,p=n.triangle,b=n.styles,m=b===void 0?{}:b,w=n.className,x=w===void 0?"":w,y=Ge(Ir({default:{card:{width:i,background:"#fff",border:"1px solid rgba(0,0,0,0.2)",boxShadow:"0 3px 12px rgba(0,0,0,0.15)",borderRadius:"4px",position:"relative",padding:"5px",display:"flex",flexWrap:"wrap"},triangle:{position:"absolute",border:"7px solid transparent",borderBottomColor:"#fff"},triangleShadow:{position:"absolute",border:"8px solid transparent",borderBottomColor:"rgba(0,0,0,0.15)"}},"hide-triangle":{triangle:{display:"none"},triangleShadow:{display:"none"}},"top-left-triangle":{triangle:{top:"-14px",left:"10px"},triangleShadow:{top:"-16px",left:"9px"}},"top-right-triangle":{triangle:{top:"-14px",right:"10px"},triangleShadow:{top:"-16px",right:"9px"}},"bottom-left-triangle":{triangle:{top:"35px",left:"10px",transform:"rotate(180deg)"},triangleShadow:{top:"37px",left:"9px",transform:"rotate(180deg)"}},"bottom-right-triangle":{triangle:{top:"35px",right:"10px",transform:"rotate(180deg)"},triangleShadow:{top:"37px",right:"9px",transform:"rotate(180deg)"}}},m),{"hide-triangle":p==="hide","top-left-triangle":p==="top-left","top-right-triangle":p==="top-right","bottom-left-triangle":p==="bottom-left","bottom-right-triangle":p==="bottom-right"}),_=function(D,T){return d({hex:D,source:"hex"},T)};return V("div",{style:y.card,className:"github-picker "+x,children:[A("div",{style:y.triangleShadow}),A("div",{style:y.triangle}),Fl(s,function(E){return A(Rbe,{color:E,onClick:_,onSwatchHover:h},E)})]})};SC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),colors:_e.exports.arrayOf(_e.exports.string),triangle:_e.exports.oneOf(["hide","top-left","top-right","bottom-left","bottom-right"]),styles:_e.exports.object};SC.defaultProps={width:200,colors:["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"],triangle:"top-left",styles:{}};Or(SC);var Lbe=function(n){var i=n.direction,s=Ge({default:{picker:{width:"18px",height:"18px",borderRadius:"50%",transform:"translate(-9px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}},vertical:{picker:{transform:"translate(-3px, -9px)"}}},{vertical:i==="vertical"});return A("div",{style:s.picker})},DC=function(n){var i=n.width,s=n.height,d=n.onChange,h=n.hsl,p=n.direction,b=n.pointer,m=n.styles,w=m===void 0?{}:m,x=n.className,y=x===void 0?"":x,_=Ge(Ir({default:{picker:{position:"relative",width:i,height:s},hue:{radius:"2px"}}},w)),E=function(T){return d({a:1,h:T.h,l:.5,s:1})};return A("div",{style:_.picker,className:"hue-picker "+y,children:A(Gd,{..._.hue,hsl:h,pointer:b,onChange:E,direction:p})})};DC.propTypes={styles:_e.exports.object};DC.defaultProps={width:"316px",height:"16px",direction:"horizontal",pointer:Lbe,styles:{}};Or(DC);var zbe=function(n){var i=n.onChange,s=n.hex,d=n.rgb,h=n.styles,p=h===void 0?{}:h,b=n.className,m=b===void 0?"":b,w=Ge(Ir({default:{material:{width:"98px",height:"98px",padding:"16px",fontFamily:"Roboto"},HEXwrap:{position:"relative"},HEXinput:{width:"100%",marginTop:"12px",fontSize:"15px",color:"#333",padding:"0px",border:"0px",borderBottom:"2px solid "+s,outline:"none",height:"30px"},HEXlabel:{position:"absolute",top:"0px",left:"0px",fontSize:"11px",color:"#999999",textTransform:"capitalize"},Hex:{style:{}},RGBwrap:{position:"relative"},RGBinput:{width:"100%",marginTop:"12px",fontSize:"15px",color:"#333",padding:"0px",border:"0px",borderBottom:"1px solid #eee",outline:"none",height:"30px"},RGBlabel:{position:"absolute",top:"0px",left:"0px",fontSize:"11px",color:"#999999",textTransform:"capitalize"},split:{display:"flex",marginRight:"-10px",paddingTop:"11px"},third:{flex:"1",paddingRight:"10px"}}},p)),x=function(_,E){_.hex?Da(_.hex)&&i({hex:_.hex,source:"hex"},E):(_.r||_.g||_.b)&&i({r:_.r||d.r,g:_.g||d.g,b:_.b||d.b,source:"rgb"},E)};return A(Kf,{styles:p,children:V("div",{style:w.material,className:"material-picker "+m,children:[A(ct,{style:{wrap:w.HEXwrap,input:w.HEXinput,label:w.HEXlabel},label:"hex",value:s,onChange:x}),V("div",{style:w.split,className:"flexbox-fix",children:[A("div",{style:w.third,children:A(ct,{style:{wrap:w.RGBwrap,input:w.RGBinput,label:w.RGBlabel},label:"r",value:d.r,onChange:x})}),A("div",{style:w.third,children:A(ct,{style:{wrap:w.RGBwrap,input:w.RGBinput,label:w.RGBlabel},label:"g",value:d.g,onChange:x})}),A("div",{style:w.third,children:A(ct,{style:{wrap:w.RGBwrap,input:w.RGBinput,label:w.RGBlabel},label:"b",value:d.b,onChange:x})})]})]})})};Or(zbe);var jbe=function(n){var i=n.onChange,s=n.rgb,d=n.hsv,h=n.hex,p=Ge({default:{fields:{paddingTop:"5px",paddingBottom:"9px",width:"80px",position:"relative"},divider:{height:"5px"},RGBwrap:{position:"relative"},RGBinput:{marginLeft:"40%",width:"40%",height:"18px",border:"1px solid #888888",boxShadow:"inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",marginBottom:"5px",fontSize:"13px",paddingLeft:"3px",marginRight:"10px"},RGBlabel:{left:"0px",top:"0px",width:"34px",textTransform:"uppercase",fontSize:"13px",height:"18px",lineHeight:"22px",position:"absolute"},HEXwrap:{position:"relative"},HEXinput:{marginLeft:"20%",width:"80%",height:"18px",border:"1px solid #888888",boxShadow:"inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",marginBottom:"6px",fontSize:"13px",paddingLeft:"3px"},HEXlabel:{position:"absolute",top:"0px",left:"0px",width:"14px",textTransform:"uppercase",fontSize:"13px",height:"18px",lineHeight:"22px"},fieldSymbols:{position:"absolute",top:"5px",right:"-7px",fontSize:"13px"},symbol:{height:"20px",lineHeight:"22px",paddingBottom:"7px"}}}),b=function(w,x){w["#"]?Da(w["#"])&&i({hex:w["#"],source:"hex"},x):w.r||w.g||w.b?i({r:w.r||s.r,g:w.g||s.g,b:w.b||s.b,source:"rgb"},x):(w.h||w.s||w.v)&&i({h:w.h||d.h,s:w.s||d.s,v:w.v||d.v,source:"hsv"},x)};return V("div",{style:p.fields,children:[A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"h",value:Math.round(d.h),onChange:b}),A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"s",value:Math.round(d.s*100),onChange:b}),A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"v",value:Math.round(d.v*100),onChange:b}),A("div",{style:p.divider}),A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"r",value:s.r,onChange:b}),A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"g",value:s.g,onChange:b}),A(ct,{style:{wrap:p.RGBwrap,input:p.RGBinput,label:p.RGBlabel},label:"b",value:s.b,onChange:b}),A("div",{style:p.divider}),A(ct,{style:{wrap:p.HEXwrap,input:p.HEXinput,label:p.HEXlabel},label:"#",value:h.replace("#",""),onChange:b}),V("div",{style:p.fieldSymbols,children:[A("div",{style:p.symbol,children:"\xB0"}),A("div",{style:p.symbol,children:"%"}),A("div",{style:p.symbol,children:"%"})]})]})},Fbe=function(n){var i=n.hsl,s=Ge({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}},"black-outline":{picker:{boxShadow:"inset 0 0 0 1px #000"}}},{"black-outline":i.l>.5});return A("div",{style:s.picker})},$be=function(){var n=Ge({default:{triangle:{width:0,height:0,borderStyle:"solid",borderWidth:"4px 0 4px 6px",borderColor:"transparent transparent transparent #fff",position:"absolute",top:"1px",left:"1px"},triangleBorder:{width:0,height:0,borderStyle:"solid",borderWidth:"5px 0 5px 8px",borderColor:"transparent transparent transparent #555"},left:{Extend:"triangleBorder",transform:"translate(-13px, -4px)"},leftInside:{Extend:"triangle",transform:"translate(-8px, -5px)"},right:{Extend:"triangleBorder",transform:"translate(20px, -14px) rotate(180deg)"},rightInside:{Extend:"triangle",transform:"translate(-8px, -5px)"}}});return V("div",{style:n.pointer,children:[A("div",{style:n.left,children:A("div",{style:n.leftInside})}),A("div",{style:n.right,children:A("div",{style:n.rightInside})})]})},Y3=function(n){var i=n.onClick,s=n.label,d=n.children,h=n.active,p=Ge({default:{button:{backgroundImage:"linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",border:"1px solid #878787",borderRadius:"2px",height:"20px",boxShadow:"0 1px 0 0 #EAEAEA",fontSize:"14px",color:"#000",lineHeight:"20px",textAlign:"center",marginBottom:"10px",cursor:"pointer"}},active:{button:{boxShadow:"0 0 0 1px #878787"}}},{active:h});return A("div",{style:p.button,onClick:i,children:s||d})},Vbe=function(n){var i=n.rgb,s=n.currentColor,d=Ge({default:{swatches:{border:"1px solid #B3B3B3",borderBottom:"1px solid #F0F0F0",marginBottom:"2px",marginTop:"1px"},new:{height:"34px",background:"rgb("+i.r+","+i.g+", "+i.b+")",boxShadow:"inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"},current:{height:"34px",background:s,boxShadow:"inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"},label:{fontSize:"14px",color:"#000",textAlign:"center"}}});return V("div",{children:[A("div",{style:d.label,children:"new"}),V("div",{style:d.swatches,children:[A("div",{style:d.new}),A("div",{style:d.current})]}),A("div",{style:d.label,children:"current"})]})},Ube=function(){function t(n,i){for(var s=0;s<i.length;s++){var d=i[s];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(n,d.key,d)}}return function(n,i,s){return i&&t(n.prototype,i),s&&t(n,s),n}}();function Hbe(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function qbe(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n&&(typeof n=="object"||typeof n=="function")?n:t}function Wbe(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var TC=function(t){Wbe(n,t);function n(i){Hbe(this,n);var s=qbe(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return s.state={currentColor:i.hex},s}return Ube(n,[{key:"render",value:function(){var s=this.props,d=s.styles,h=d===void 0?{}:d,p=s.className,b=p===void 0?"":p,m=Ge(Ir({default:{picker:{background:"#DCDCDC",borderRadius:"4px",boxShadow:"0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",boxSizing:"initial",width:"513px"},head:{backgroundImage:"linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",borderBottom:"1px solid #B1B1B1",boxShadow:"inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",height:"23px",lineHeight:"24px",borderRadius:"4px 4px 0 0",fontSize:"13px",color:"#4D4D4D",textAlign:"center"},body:{padding:"15px 15px 0",display:"flex"},saturation:{width:"256px",height:"256px",position:"relative",border:"2px solid #B3B3B3",borderBottom:"2px solid #F0F0F0",overflow:"hidden"},hue:{position:"relative",height:"256px",width:"19px",marginLeft:"10px",border:"2px solid #B3B3B3",borderBottom:"2px solid #F0F0F0"},controls:{width:"180px",marginLeft:"10px"},top:{display:"flex"},previews:{width:"60px"},actions:{flex:"1",marginLeft:"20px"}}},h));return V("div",{style:m.picker,className:"photoshop-picker "+b,children:[A("div",{style:m.head,children:this.props.header}),V("div",{style:m.body,className:"flexbox-fix",children:[A("div",{style:m.saturation,children:A(zb,{hsl:this.props.hsl,hsv:this.props.hsv,pointer:Fbe,onChange:this.props.onChange})}),A("div",{style:m.hue,children:A(Gd,{direction:"vertical",hsl:this.props.hsl,pointer:$be,onChange:this.props.onChange})}),A("div",{style:m.controls,children:V("div",{style:m.top,className:"flexbox-fix",children:[A("div",{style:m.previews,children:A(Vbe,{rgb:this.props.rgb,currentColor:this.state.currentColor})}),V("div",{style:m.actions,children:[A(Y3,{label:"OK",onClick:this.props.onAccept,active:!0}),A(Y3,{label:"Cancel",onClick:this.props.onCancel}),A(jbe,{onChange:this.props.onChange,rgb:this.props.rgb,hsv:this.props.hsv,hex:this.props.hex})]})]})})]})]})}}]),n}(lt.Component);TC.propTypes={header:_e.exports.string,styles:_e.exports.object};TC.defaultProps={header:"Color Picker",styles:{}};Or(TC);var Gbe=function(n){var i=n.onChange,s=n.rgb,d=n.hsl,h=n.hex,p=n.disableAlpha,b=Ge({default:{fields:{display:"flex",paddingTop:"4px"},single:{flex:"1",paddingLeft:"6px"},alpha:{flex:"1",paddingLeft:"6px"},double:{flex:"2"},input:{width:"80%",padding:"4px 10% 3px",border:"none",boxShadow:"inset 0 0 0 1px #ccc",fontSize:"11px"},label:{display:"block",textAlign:"center",fontSize:"11px",color:"#222",paddingTop:"3px",paddingBottom:"4px",textTransform:"capitalize"}},disableAlpha:{alpha:{display:"none"}}},{disableAlpha:p}),m=function(x,y){x.hex?Da(x.hex)&&i({hex:x.hex,source:"hex"},y):x.r||x.g||x.b?i({r:x.r||s.r,g:x.g||s.g,b:x.b||s.b,a:s.a,source:"rgb"},y):x.a&&(x.a<0?x.a=0:x.a>100&&(x.a=100),x.a/=100,i({h:d.h,s:d.s,l:d.l,a:x.a,source:"rgb"},y))};return V("div",{style:b.fields,className:"flexbox-fix",children:[A("div",{style:b.double,children:A(ct,{style:{input:b.input,label:b.label},label:"hex",value:h.replace("#",""),onChange:m})}),A("div",{style:b.single,children:A(ct,{style:{input:b.input,label:b.label},label:"r",value:s.r,onChange:m,dragLabel:"true",dragMax:"255"})}),A("div",{style:b.single,children:A(ct,{style:{input:b.input,label:b.label},label:"g",value:s.g,onChange:m,dragLabel:"true",dragMax:"255"})}),A("div",{style:b.single,children:A(ct,{style:{input:b.input,label:b.label},label:"b",value:s.b,onChange:m,dragLabel:"true",dragMax:"255"})}),A("div",{style:b.alpha,children:A(ct,{style:{input:b.input,label:b.label},label:"a",value:Math.round(s.a*100),onChange:m,dragLabel:"true",dragMax:"100"})})]})},h6=function(n){var i=n.colors,s=n.onClick,d=s===void 0?function(){}:s,h=n.onSwatchHover,p=Ge({default:{colors:{margin:"0 -10px",padding:"10px 0 0 10px",borderTop:"1px solid #eee",display:"flex",flexWrap:"wrap",position:"relative"},swatchWrap:{width:"16px",height:"16px",margin:"0 10px 10px 0"},swatch:{borderRadius:"3px",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.15)"}},"no-presets":{colors:{display:"none"}}},{"no-presets":!i||!i.length}),b=function(w,x){d({hex:w,source:"hex"},x)};return A("div",{style:p.colors,className:"flexbox-fix",children:i.map(function(m){var w=typeof m=="string"?{color:m}:m,x=""+w.color+(w.title||"");return A("div",{style:p.swatchWrap,children:A(jl,{...w,style:p.swatch,onClick:b,onHover:h,focusStyle:{boxShadow:"inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px "+w.color}})},x)})})};h6.propTypes={colors:_e.exports.arrayOf(_e.exports.oneOfType([_e.exports.string,_e.exports.shape({color:_e.exports.string,title:_e.exports.string})])).isRequired};var Ybe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},MC=function(n){var i=n.width,s=n.rgb,d=n.hex,h=n.hsv,p=n.hsl,b=n.onChange,m=n.onSwatchHover,w=n.disableAlpha,x=n.presetColors,y=n.renderers,_=n.styles,E=_===void 0?{}:_,D=n.className,T=D===void 0?"":D,O=Ge(Ir({default:Ybe({picker:{width:i,padding:"10px 10px 0",boxSizing:"initial",background:"#fff",borderRadius:"4px",boxShadow:"0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"},saturation:{width:"100%",paddingBottom:"75%",position:"relative",overflow:"hidden"},Saturation:{radius:"3px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},controls:{display:"flex"},sliders:{padding:"4px 0",flex:"1"},color:{width:"24px",height:"24px",position:"relative",marginTop:"4px",marginLeft:"4px",borderRadius:"3px"},activeColor:{absolute:"0px 0px 0px 0px",borderRadius:"2px",background:"rgba("+s.r+","+s.g+","+s.b+","+s.a+")",boxShadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},hue:{position:"relative",height:"10px",overflow:"hidden"},Hue:{radius:"2px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"},alpha:{position:"relative",height:"10px",marginTop:"4px",overflow:"hidden"},Alpha:{radius:"2px",shadow:"inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"}},E),disableAlpha:{color:{height:"10px"},hue:{height:"10px"},alpha:{display:"none"}}},E),{disableAlpha:w});return V("div",{style:O.picker,className:"sketch-picker "+T,children:[A("div",{style:O.saturation,children:A(zb,{style:O.Saturation,hsl:p,hsv:h,onChange:b})}),V("div",{style:O.controls,className:"flexbox-fix",children:[V("div",{style:O.sliders,children:[A("div",{style:O.hue,children:A(Gd,{style:O.Hue,hsl:p,onChange:b})}),A("div",{style:O.alpha,children:A(uC,{style:O.Alpha,rgb:s,hsl:p,renderers:y,onChange:b})})]}),V("div",{style:O.color,children:[A(Wd,{}),A("div",{style:O.activeColor})]})]}),A(Gbe,{rgb:s,hsl:p,hex:d,onChange:b,disableAlpha:w}),A(h6,{colors:x,onClick:b,onSwatchHover:m})]})};MC.propTypes={disableAlpha:_e.exports.bool,width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),styles:_e.exports.object};MC.defaultProps={disableAlpha:!1,width:200,styles:{},presetColors:["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"]};Or(MC);var bh=function(n){var i=n.hsl,s=n.offset,d=n.onClick,h=d===void 0?function(){}:d,p=n.active,b=n.first,m=n.last,w=Ge({default:{swatch:{height:"12px",background:"hsl("+i.h+", 50%, "+s*100+"%)",cursor:"pointer"}},first:{swatch:{borderRadius:"2px 0 0 2px"}},last:{swatch:{borderRadius:"0 2px 2px 0"}},active:{swatch:{transform:"scaleY(1.8)",borderRadius:"3.6px/2px"}}},{active:p,first:b,last:m}),x=function(_){return h({h:i.h,s:.5,l:s,source:"hsl"},_)};return A("div",{style:w.swatch,onClick:x})},Kbe=function(n){var i=n.onClick,s=n.hsl,d=Ge({default:{swatches:{marginTop:"20px"},swatch:{boxSizing:"border-box",width:"20%",paddingRight:"1px",float:"left"},clear:{clear:"both"}}}),h=.1;return V("div",{style:d.swatches,children:[A("div",{style:d.swatch,children:A(bh,{hsl:s,offset:".80",active:Math.abs(s.l-.8)<h&&Math.abs(s.s-.5)<h,onClick:i,first:!0})}),A("div",{style:d.swatch,children:A(bh,{hsl:s,offset:".65",active:Math.abs(s.l-.65)<h&&Math.abs(s.s-.5)<h,onClick:i})}),A("div",{style:d.swatch,children:A(bh,{hsl:s,offset:".50",active:Math.abs(s.l-.5)<h&&Math.abs(s.s-.5)<h,onClick:i})}),A("div",{style:d.swatch,children:A(bh,{hsl:s,offset:".35",active:Math.abs(s.l-.35)<h&&Math.abs(s.s-.5)<h,onClick:i})}),A("div",{style:d.swatch,children:A(bh,{hsl:s,offset:".20",active:Math.abs(s.l-.2)<h&&Math.abs(s.s-.5)<h,onClick:i,last:!0})}),A("div",{style:d.clear})]})},Qbe=function(){var n=Ge({default:{picker:{width:"14px",height:"14px",borderRadius:"6px",transform:"translate(-7px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}}});return A("div",{style:n.picker})},NC=function(n){var i=n.hsl,s=n.onChange,d=n.pointer,h=n.styles,p=h===void 0?{}:h,b=n.className,m=b===void 0?"":b,w=Ge(Ir({default:{hue:{height:"12px",position:"relative"},Hue:{radius:"2px"}}},p));return V("div",{style:w.wrap||{},className:"slider-picker "+m,children:[A("div",{style:w.hue,children:A(Gd,{style:w.Hue,hsl:i,pointer:d,onChange:s})}),A("div",{style:w.swatches,children:A(Kbe,{hsl:i,onClick:s})})]})};NC.propTypes={styles:_e.exports.object};NC.defaultProps={pointer:Qbe,styles:{}};Or(NC);var f6={};Object.defineProperty(f6,"__esModule",{value:!0});var K3=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Zbe=Z.exports,Q3=Jbe(Zbe);function Jbe(t){return t&&t.__esModule?t:{default:t}}function Xbe(t,n){var i={};for(var s in t)n.indexOf(s)>=0||!Object.prototype.hasOwnProperty.call(t,s)||(i[s]=t[s]);return i}var em=24,eke=f6.default=function(t){var n=t.fill,i=n===void 0?"currentColor":n,s=t.width,d=s===void 0?em:s,h=t.height,p=h===void 0?em:h,b=t.style,m=b===void 0?{}:b,w=Xbe(t,["fill","width","height","style"]);return Q3.default.createElement("svg",K3({viewBox:"0 0 "+em+" "+em,style:K3({fill:i,width:d,height:p},m)},w),Q3.default.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))},tke=function(n){var i=n.color,s=n.onClick,d=s===void 0?function(){}:s,h=n.onSwatchHover,p=n.first,b=n.last,m=n.active,w=Ge({default:{color:{width:"40px",height:"24px",cursor:"pointer",background:i,marginBottom:"1px"},check:{color:vC(i),marginLeft:"8px",display:"none"}},first:{color:{overflow:"hidden",borderRadius:"2px 2px 0 0"}},last:{color:{overflow:"hidden",borderRadius:"0 0 2px 2px"}},active:{check:{display:"block"}},"color-#FFFFFF":{color:{boxShadow:"inset 0 0 0 1px #ddd"},check:{color:"#333"}},transparent:{check:{color:"#333"}}},{first:p,last:b,active:m,"color-#FFFFFF":i==="#FFFFFF",transparent:i==="transparent"});return A(jl,{color:i,style:w.color,onClick:d,onHover:h,focusStyle:{boxShadow:"0 0 4px "+i},children:A("div",{style:w.check,children:A(eke,{})})})},nke=function(n){var i=n.onClick,s=n.onSwatchHover,d=n.group,h=n.active,p=Ge({default:{group:{paddingBottom:"10px",width:"40px",float:"left",marginRight:"10px"}}});return A("div",{style:p.group,children:Fl(d,function(b,m){return A(tke,{color:b,active:b.toLowerCase()===h,first:m===0,last:m===d.length-1,onClick:i,onSwatchHover:s},b)})})},IC=function(n){var i=n.width,s=n.height,d=n.onChange,h=n.onSwatchHover,p=n.colors,b=n.hex,m=n.styles,w=m===void 0?{}:m,x=n.className,y=x===void 0?"":x,_=Ge(Ir({default:{picker:{width:i,height:s},overflow:{height:s,overflowY:"scroll"},body:{padding:"16px 0 6px 16px"},clear:{clear:"both"}}},w)),E=function(T,O){return d({hex:T,source:"hex"},O)};return A("div",{style:_.picker,className:"swatches-picker "+y,children:A(Kf,{children:A("div",{style:_.overflow,children:V("div",{style:_.body,children:[Fl(p,function(D){return A(nke,{group:D,active:b,onClick:E,onSwatchHover:h},D.toString())}),A("div",{style:_.clear})]})})})})};IC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),height:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),colors:_e.exports.arrayOf(_e.exports.arrayOf(_e.exports.string)),styles:_e.exports.object};IC.defaultProps={width:320,height:240,colors:[[Mc[900],Mc[700],Mc[500],Mc[300],Mc[100]],[Nc[900],Nc[700],Nc[500],Nc[300],Nc[100]],[Ic[900],Ic[700],Ic[500],Ic[300],Ic[100]],[Oc[900],Oc[700],Oc[500],Oc[300],Oc[100]],[Pc[900],Pc[700],Pc[500],Pc[300],Pc[100]],[Bc[900],Bc[700],Bc[500],Bc[300],Bc[100]],[Rc[900],Rc[700],Rc[500],Rc[300],Rc[100]],[Lc[900],Lc[700],Lc[500],Lc[300],Lc[100]],[zc[900],zc[700],zc[500],zc[300],zc[100]],["#194D33",Mh[700],Mh[500],Mh[300],Mh[100]],[jc[900],jc[700],jc[500],jc[300],jc[100]],[Fc[900],Fc[700],Fc[500],Fc[300],Fc[100]],[$c[900],$c[700],$c[500],$c[300],$c[100]],[Vc[900],Vc[700],Vc[500],Vc[300],Vc[100]],[Uc[900],Uc[700],Uc[500],Uc[300],Uc[100]],[Hc[900],Hc[700],Hc[500],Hc[300],Hc[100]],[qc[900],qc[700],qc[500],qc[300],qc[100]],[Wc[900],Wc[700],Wc[500],Wc[300],Wc[100]],["#000000","#525252","#969696","#D9D9D9","#FFFFFF"]],styles:{}};Or(IC);var OC=function(n){var i=n.onChange,s=n.onSwatchHover,d=n.hex,h=n.colors,p=n.width,b=n.triangle,m=n.styles,w=m===void 0?{}:m,x=n.className,y=x===void 0?"":x,_=Ge(Ir({default:{card:{width:p,background:"#fff",border:"0 solid rgba(0,0,0,0.25)",boxShadow:"0 1px 4px rgba(0,0,0,0.25)",borderRadius:"4px",position:"relative"},body:{padding:"15px 9px 9px 15px"},label:{fontSize:"18px",color:"#fff"},triangle:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 9px 10px 9px",borderColor:"transparent transparent #fff transparent",position:"absolute"},triangleShadow:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 9px 10px 9px",borderColor:"transparent transparent rgba(0,0,0,.1) transparent",position:"absolute"},hash:{background:"#F0F0F0",height:"30px",width:"30px",borderRadius:"4px 0 0 4px",float:"left",color:"#98A1A4",display:"flex",alignItems:"center",justifyContent:"center"},input:{width:"100px",fontSize:"14px",color:"#666",border:"0px",outline:"none",height:"28px",boxShadow:"inset 0 0 0 1px #F0F0F0",boxSizing:"content-box",borderRadius:"0 4px 4px 0",float:"left",paddingLeft:"8px"},swatch:{width:"30px",height:"30px",float:"left",borderRadius:"4px",margin:"0 6px 6px 0"},clear:{clear:"both"}},"hide-triangle":{triangle:{display:"none"},triangleShadow:{display:"none"}},"top-left-triangle":{triangle:{top:"-10px",left:"12px"},triangleShadow:{top:"-11px",left:"12px"}},"top-right-triangle":{triangle:{top:"-10px",right:"12px"},triangleShadow:{top:"-11px",right:"12px"}}},w),{"hide-triangle":b==="hide","top-left-triangle":b==="top-left","top-right-triangle":b==="top-right"}),E=function(T,O){Da(T)&&i({hex:T,source:"hex"},O)};return V("div",{style:_.card,className:"twitter-picker "+y,children:[A("div",{style:_.triangleShadow}),A("div",{style:_.triangle}),V("div",{style:_.body,children:[Fl(h,function(D,T){return A(jl,{color:D,hex:D,style:_.swatch,onClick:E,onHover:s,focusStyle:{boxShadow:"0 0 4px "+D}},T)}),A("div",{style:_.hash,children:"#"}),A(ct,{label:null,style:{input:_.input},value:d.replace("#",""),onChange:E}),A("div",{style:_.clear})]})]})};OC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),triangle:_e.exports.oneOf(["hide","top-left","top-right"]),colors:_e.exports.arrayOf(_e.exports.string),styles:_e.exports.object};OC.defaultProps={width:276,colors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"],triangle:"top-left",styles:{}};Or(OC);var PC=function(n){var i=Ge({default:{picker:{width:"20px",height:"20px",borderRadius:"22px",border:"2px #fff solid",transform:"translate(-12px, -13px)",background:"hsl("+Math.round(n.hsl.h)+", "+Math.round(n.hsl.s*100)+"%, "+Math.round(n.hsl.l*100)+"%)"}}});return A("div",{style:i.picker})};PC.propTypes={hsl:_e.exports.shape({h:_e.exports.number,s:_e.exports.number,l:_e.exports.number,a:_e.exports.number})};PC.defaultProps={hsl:{a:1,h:249.94,l:.2,s:.5}};var BC=function(n){var i=Ge({default:{picker:{width:"20px",height:"20px",borderRadius:"22px",transform:"translate(-10px, -7px)",background:"hsl("+Math.round(n.hsl.h)+", 100%, 50%)",border:"2px white solid"}}});return A("div",{style:i.picker})};BC.propTypes={hsl:_e.exports.shape({h:_e.exports.number,s:_e.exports.number,l:_e.exports.number,a:_e.exports.number})};BC.defaultProps={hsl:{a:1,h:249.94,l:.2,s:.5}};var rke=function(n){var i=n.onChange,s=n.rgb,d=n.hsl,h=n.hex,p=n.hsv,b=function(E,D){if(E.hex)Da(E.hex)&&i({hex:E.hex,source:"hex"},D);else if(E.rgb){var T=E.rgb.split(",");Py(E.rgb,"rgb")&&i({r:T[0],g:T[1],b:T[2],a:1,source:"rgb"},D)}else if(E.hsv){var O=E.hsv.split(",");Py(E.hsv,"hsv")&&(O[2]=O[2].replace("%",""),O[1]=O[1].replace("%",""),O[0]=O[0].replace("\xB0",""),O[1]==1?O[1]=.01:O[2]==1&&(O[2]=.01),i({h:Number(O[0]),s:Number(O[1]),v:Number(O[2]),source:"hsv"},D))}else if(E.hsl){var I=E.hsl.split(",");Py(E.hsl,"hsl")&&(I[2]=I[2].replace("%",""),I[1]=I[1].replace("%",""),I[0]=I[0].replace("\xB0",""),y[1]==1?y[1]=.01:y[2]==1&&(y[2]=.01),i({h:Number(I[0]),s:Number(I[1]),v:Number(I[2]),source:"hsl"},D))}},m=Ge({default:{wrap:{display:"flex",height:"100px",marginTop:"4px"},fields:{width:"100%"},column:{paddingTop:"10px",display:"flex",justifyContent:"space-between"},double:{padding:"0px 4.4px",boxSizing:"border-box"},input:{width:"100%",height:"38px",boxSizing:"border-box",padding:"4px 10% 3px",textAlign:"center",border:"1px solid #dadce0",fontSize:"11px",textTransform:"lowercase",borderRadius:"5px",outline:"none",fontFamily:"Roboto,Arial,sans-serif"},input2:{height:"38px",width:"100%",border:"1px solid #dadce0",boxSizing:"border-box",fontSize:"11px",textTransform:"lowercase",borderRadius:"5px",outline:"none",paddingLeft:"10px",fontFamily:"Roboto,Arial,sans-serif"},label:{textAlign:"center",fontSize:"12px",background:"#fff",position:"absolute",textTransform:"uppercase",color:"#3c4043",width:"35px",top:"-6px",left:"0",right:"0",marginLeft:"auto",marginRight:"auto",fontFamily:"Roboto,Arial,sans-serif"},label2:{left:"10px",textAlign:"center",fontSize:"12px",background:"#fff",position:"absolute",textTransform:"uppercase",color:"#3c4043",width:"32px",top:"-6px",fontFamily:"Roboto,Arial,sans-serif"},single:{flexGrow:"1",margin:"0px 4.4px"}}}),w=s.r+", "+s.g+", "+s.b,x=Math.round(d.h)+"\xB0, "+Math.round(d.s*100)+"%, "+Math.round(d.l*100)+"%",y=Math.round(p.h)+"\xB0, "+Math.round(p.s*100)+"%, "+Math.round(p.v*100)+"%";return A("div",{style:m.wrap,className:"flexbox-fix",children:V("div",{style:m.fields,children:[A("div",{style:m.double,children:A(ct,{style:{input:m.input,label:m.label},label:"hex",value:h,onChange:b})}),V("div",{style:m.column,children:[A("div",{style:m.single,children:A(ct,{style:{input:m.input2,label:m.label2},label:"rgb",value:w,onChange:b})}),A("div",{style:m.single,children:A(ct,{style:{input:m.input2,label:m.label2},label:"hsv",value:y,onChange:b})}),A("div",{style:m.single,children:A(ct,{style:{input:m.input2,label:m.label2},label:"hsl",value:x,onChange:b})})]})]})})},RC=function(n){var i=n.width,s=n.onChange,d=n.rgb,h=n.hsl,p=n.hsv,b=n.hex,m=n.header,w=n.styles,x=w===void 0?{}:w,y=n.className,_=y===void 0?"":y,E=Ge(Ir({default:{picker:{width:i,background:"#fff",border:"1px solid #dfe1e5",boxSizing:"initial",display:"flex",flexWrap:"wrap",borderRadius:"8px 8px 0px 0px"},head:{height:"57px",width:"100%",paddingTop:"16px",paddingBottom:"16px",paddingLeft:"16px",fontSize:"20px",boxSizing:"border-box",fontFamily:"Roboto-Regular,HelveticaNeue,Arial,sans-serif"},saturation:{width:"70%",padding:"0px",position:"relative",overflow:"hidden"},swatch:{width:"30%",height:"228px",padding:"0px",background:"rgba("+d.r+", "+d.g+", "+d.b+", 1)",position:"relative",overflow:"hidden"},body:{margin:"auto",width:"95%"},controls:{display:"flex",boxSizing:"border-box",height:"52px",paddingTop:"22px"},color:{width:"32px"},hue:{height:"8px",position:"relative",margin:"0px 16px 0px 16px",width:"100%"},Hue:{radius:"2px"}}},x));return V("div",{style:E.picker,className:"google-picker "+_,children:[A("div",{style:E.head,children:m}),A("div",{style:E.swatch}),A("div",{style:E.saturation,children:A(zb,{hsl:h,hsv:p,pointer:PC,onChange:s})}),V("div",{style:E.body,children:[A("div",{style:E.controls,className:"flexbox-fix",children:A("div",{style:E.hue,children:A(Gd,{style:E.Hue,hsl:h,radius:"4px",pointer:BC,onChange:s})})}),A(rke,{rgb:d,hsl:h,hex:b,hsv:p,onChange:s})]})]})};RC.propTypes={width:_e.exports.oneOfType([_e.exports.string,_e.exports.number]),styles:_e.exports.object,header:_e.exports.string};RC.defaultProps={width:652,styles:{},header:"Color picker"};Or(RC);var Z3={exports:{}};(function(t,n){(function(i){const s=i.en=i.en||{};s.dictionary=Object.assign(s.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(i,s){t.exports=s()}(self,()=>(()=>{var i={4959:(p,b,m)=>{const w=m(1103),x={};for(const _ of Object.keys(w))x[w[_]]=_;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};p.exports=y;for(const _ of Object.keys(y)){if(!("channels"in y[_]))throw new Error("missing channels property: "+_);if(!("labels"in y[_]))throw new Error("missing channel labels property: "+_);if(y[_].labels.length!==y[_].channels)throw new Error("channel and label counts mismatch: "+_);const{channels:E,labels:D}=y[_];delete y[_].channels,delete y[_].labels,Object.defineProperty(y[_],"channels",{value:E}),Object.defineProperty(y[_],"labels",{value:D})}y.rgb.hsl=function(_){const E=_[0]/255,D=_[1]/255,T=_[2]/255,O=Math.min(E,D,T),I=Math.max(E,D,T),M=I-O;let B,z;I===O?B=0:E===I?B=(D-T)/M:D===I?B=2+(T-E)/M:T===I&&(B=4+(E-D)/M),B=Math.min(60*B,360),B<0&&(B+=360);const U=(O+I)/2;return z=I===O?0:U<=.5?M/(I+O):M/(2-I-O),[B,100*z,100*U]},y.rgb.hsv=function(_){let E,D,T,O,I;const M=_[0]/255,B=_[1]/255,z=_[2]/255,U=Math.max(M,B,z),q=U-Math.min(M,B,z),H=function(P){return(U-P)/6/q+.5};return q===0?(O=0,I=0):(I=q/U,E=H(M),D=H(B),T=H(z),M===U?O=T-D:B===U?O=.3333333333333333+E-T:z===U&&(O=.6666666666666666+D-E),O<0?O+=1:O>1&&(O-=1)),[360*O,100*I,100*U]},y.rgb.hwb=function(_){const E=_[0],D=_[1];let T=_[2];const O=y.rgb.hsl(_)[0],I=1/255*Math.min(E,Math.min(D,T));return T=1-.00392156862745098*Math.max(E,Math.max(D,T)),[O,100*I,100*T]},y.rgb.cmyk=function(_){const E=_[0]/255,D=_[1]/255,T=_[2]/255,O=Math.min(1-E,1-D,1-T);return[100*((1-E-O)/(1-O)||0),100*((1-D-O)/(1-O)||0),100*((1-T-O)/(1-O)||0),100*O]},y.rgb.keyword=function(_){const E=x[_];if(E)return E;let D,T=1/0;for(const M of Object.keys(w)){const B=w[M],z=(I=B,((O=_)[0]-I[0])**2+(O[1]-I[1])**2+(O[2]-I[2])**2);z<T&&(T=z,D=M)}var O,I;return D},y.keyword.rgb=function(_){return w[_]},y.rgb.xyz=function(_){let E=_[0]/255,D=_[1]/255,T=_[2]/255;return E=E>.04045?((E+.055)/1.055)**2.4:E/12.92,D=D>.04045?((D+.055)/1.055)**2.4:D/12.92,T=T>.04045?((T+.055)/1.055)**2.4:T/12.92,[100*(.4124*E+.3576*D+.1805*T),100*(.2126*E+.7152*D+.0722*T),100*(.0193*E+.1192*D+.9505*T)]},y.rgb.lab=function(_){const E=y.rgb.xyz(_);let D=E[0],T=E[1],O=E[2];return D/=95.047,T/=100,O/=108.883,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*T-16,500*(D-T),200*(T-O)]},y.hsl.rgb=function(_){const E=_[0]/360,D=_[1]/100,T=_[2]/100;let O,I,M;if(D===0)return M=255*T,[M,M,M];O=T<.5?T*(1+D):T+D-T*D;const B=2*T-O,z=[0,0,0];for(let U=0;U<3;U++)I=E+.3333333333333333*-(U-1),I<0&&I++,I>1&&I--,M=6*I<1?B+6*(O-B)*I:2*I<1?O:3*I<2?B+(O-B)*(.6666666666666666-I)*6:B,z[U]=255*M;return z},y.hsl.hsv=function(_){const E=_[0];let D=_[1]/100,T=_[2]/100,O=D;const I=Math.max(T,.01);return T*=2,D*=T<=1?T:2-T,O*=I<=1?I:2-I,[E,100*(T===0?2*O/(I+O):2*D/(T+D)),100*((T+D)/2)]},y.hsv.rgb=function(_){const E=_[0]/60,D=_[1]/100;let T=_[2]/100;const O=Math.floor(E)%6,I=E-Math.floor(E),M=255*T*(1-D),B=255*T*(1-D*I),z=255*T*(1-D*(1-I));switch(T*=255,O){case 0:return[T,z,M];case 1:return[B,T,M];case 2:return[M,T,z];case 3:return[M,B,T];case 4:return[z,M,T];case 5:return[T,M,B]}},y.hsv.hsl=function(_){const E=_[0],D=_[1]/100,T=_[2]/100,O=Math.max(T,.01);let I,M;M=(2-D)*T;const B=(2-D)*O;return I=D*O,I/=B<=1?B:2-B,I=I||0,M/=2,[E,100*I,100*M]},y.hwb.rgb=function(_){const E=_[0]/360;let D=_[1]/100,T=_[2]/100;const O=D+T;let I;O>1&&(D/=O,T/=O);const M=Math.floor(6*E),B=1-T;I=6*E-M,(1&M)!=0&&(I=1-I);const z=D+I*(B-D);let U,q,H;switch(M){default:case 6:case 0:U=B,q=z,H=D;break;case 1:U=z,q=B,H=D;break;case 2:U=D,q=B,H=z;break;case 3:U=D,q=z,H=B;break;case 4:U=z,q=D,H=B;break;case 5:U=B,q=D,H=z}return[255*U,255*q,255*H]},y.cmyk.rgb=function(_){const E=_[0]/100,D=_[1]/100,T=_[2]/100,O=_[3]/100;return[255*(1-Math.min(1,E*(1-O)+O)),255*(1-Math.min(1,D*(1-O)+O)),255*(1-Math.min(1,T*(1-O)+O))]},y.xyz.rgb=function(_){const E=_[0]/100,D=_[1]/100,T=_[2]/100;let O,I,M;return O=3.2406*E+-1.5372*D+-.4986*T,I=-.9689*E+1.8758*D+.0415*T,M=.0557*E+-.204*D+1.057*T,O=O>.0031308?1.055*O**.4166666666666667-.055:12.92*O,I=I>.0031308?1.055*I**.4166666666666667-.055:12.92*I,M=M>.0031308?1.055*M**.4166666666666667-.055:12.92*M,O=Math.min(Math.max(0,O),1),I=Math.min(Math.max(0,I),1),M=Math.min(Math.max(0,M),1),[255*O,255*I,255*M]},y.xyz.lab=function(_){let E=_[0],D=_[1],T=_[2];return E/=95.047,D/=100,T/=108.883,E=E>.008856?E**.3333333333333333:7.787*E+.13793103448275862,D=D>.008856?D**.3333333333333333:7.787*D+.13793103448275862,T=T>.008856?T**.3333333333333333:7.787*T+.13793103448275862,[116*D-16,500*(E-D),200*(D-T)]},y.lab.xyz=function(_){let E,D,T;D=(_[0]+16)/116,E=_[1]/500+D,T=D-_[2]/200;const O=D**3,I=E**3,M=T**3;return D=O>.008856?O:(D-.13793103448275862)/7.787,E=I>.008856?I:(E-.13793103448275862)/7.787,T=M>.008856?M:(T-.13793103448275862)/7.787,E*=95.047,D*=100,T*=108.883,[E,D,T]},y.lab.lch=function(_){const E=_[0],D=_[1],T=_[2];let O;return O=360*Math.atan2(T,D)/2/Math.PI,O<0&&(O+=360),[E,Math.sqrt(D*D+T*T),O]},y.lch.lab=function(_){const E=_[0],D=_[1],T=_[2]/360*2*Math.PI;return[E,D*Math.cos(T),D*Math.sin(T)]},y.rgb.ansi16=function(_,E=null){const[D,T,O]=_;let I=E===null?y.rgb.hsv(_)[2]:E;if(I=Math.round(I/50),I===0)return 30;let M=30+(Math.round(O/255)<<2|Math.round(T/255)<<1|Math.round(D/255));return I===2&&(M+=60),M},y.hsv.ansi16=function(_){return y.rgb.ansi16(y.hsv.rgb(_),_[2])},y.rgb.ansi256=function(_){const E=_[0],D=_[1],T=_[2];return E===D&&D===T?E<8?16:E>248?231:Math.round((E-8)/247*24)+232:16+36*Math.round(E/255*5)+6*Math.round(D/255*5)+Math.round(T/255*5)},y.ansi16.rgb=function(_){let E=_%10;if(E===0||E===7)return _>50&&(E+=3.5),E=E/10.5*255,[E,E,E];const D=.5*(1+~~(_>50));return[(1&E)*D*255,(E>>1&1)*D*255,(E>>2&1)*D*255]},y.ansi256.rgb=function(_){if(_>=232){const D=10*(_-232)+8;return[D,D,D]}let E;return _-=16,[Math.floor(_/36)/5*255,Math.floor((E=_%36)/6)/5*255,E%6/5*255]},y.rgb.hex=function(_){const E=(((255&Math.round(_[0]))<<16)+((255&Math.round(_[1]))<<8)+(255&Math.round(_[2]))).toString(16).toUpperCase();return"000000".substring(E.length)+E},y.hex.rgb=function(_){const E=_.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!E)return[0,0,0];let D=E[0];E[0].length===3&&(D=D.split("").map(O=>O+O).join(""));const T=parseInt(D,16);return[T>>16&255,T>>8&255,255&T]},y.rgb.hcg=function(_){const E=_[0]/255,D=_[1]/255,T=_[2]/255,O=Math.max(Math.max(E,D),T),I=Math.min(Math.min(E,D),T),M=O-I;let B,z;return B=M<1?I/(1-M):0,z=M<=0?0:O===E?(D-T)/M%6:O===D?2+(T-E)/M:4+(E-D)/M,z/=6,z%=1,[360*z,100*M,100*B]},y.hsl.hcg=function(_){const E=_[1]/100,D=_[2]/100,T=D<.5?2*E*D:2*E*(1-D);let O=0;return T<1&&(O=(D-.5*T)/(1-T)),[_[0],100*T,100*O]},y.hsv.hcg=function(_){const E=_[1]/100,D=_[2]/100,T=E*D;let O=0;return T<1&&(O=(D-T)/(1-T)),[_[0],100*T,100*O]},y.hcg.rgb=function(_){const E=_[0]/360,D=_[1]/100,T=_[2]/100;if(D===0)return[255*T,255*T,255*T];const O=[0,0,0],I=E%1*6,M=I%1,B=1-M;let z=0;switch(Math.floor(I)){case 0:O[0]=1,O[1]=M,O[2]=0;break;case 1:O[0]=B,O[1]=1,O[2]=0;break;case 2:O[0]=0,O[1]=1,O[2]=M;break;case 3:O[0]=0,O[1]=B,O[2]=1;break;case 4:O[0]=M,O[1]=0,O[2]=1;break;default:O[0]=1,O[1]=0,O[2]=B}return z=(1-D)*T,[255*(D*O[0]+z),255*(D*O[1]+z),255*(D*O[2]+z)]},y.hcg.hsv=function(_){const E=_[1]/100,D=E+_[2]/100*(1-E);let T=0;return D>0&&(T=E/D),[_[0],100*T,100*D]},y.hcg.hsl=function(_){const E=_[1]/100,D=_[2]/100*(1-E)+.5*E;let T=0;return D>0&&D<.5?T=E/(2*D):D>=.5&&D<1&&(T=E/(2*(1-D))),[_[0],100*T,100*D]},y.hcg.hwb=function(_){const E=_[1]/100,D=E+_[2]/100*(1-E);return[_[0],100*(D-E),100*(1-D)]},y.hwb.hcg=function(_){const E=_[1]/100,D=1-_[2]/100,T=D-E;let O=0;return T<1&&(O=(D-T)/(1-T)),[_[0],100*T,100*O]},y.apple.rgb=function(_){return[_[0]/65535*255,_[1]/65535*255,_[2]/65535*255]},y.rgb.apple=function(_){return[_[0]/255*65535,_[1]/255*65535,_[2]/255*65535]},y.gray.rgb=function(_){return[_[0]/100*255,_[0]/100*255,_[0]/100*255]},y.gray.hsl=function(_){return[0,0,_[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(_){return[0,100,_[0]]},y.gray.cmyk=function(_){return[0,0,0,_[0]]},y.gray.lab=function(_){return[_[0],0,0]},y.gray.hex=function(_){const E=255&Math.round(_[0]/100*255),D=((E<<16)+(E<<8)+E).toString(16).toUpperCase();return"000000".substring(D.length)+D},y.rgb.gray=function(_){return[(_[0]+_[1]+_[2])/3/255*100]}},841:(p,b,m)=>{const w=m(4959),x=m(9325),y={};Object.keys(w).forEach(_=>{y[_]={},Object.defineProperty(y[_],"channels",{value:w[_].channels}),Object.defineProperty(y[_],"labels",{value:w[_].labels});const E=x(_);Object.keys(E).forEach(D=>{const T=E[D];y[_][D]=function(O){const I=function(...M){const B=M[0];if(B==null)return B;B.length>1&&(M=B);const z=O(M);if(typeof z=="object")for(let U=z.length,q=0;q<U;q++)z[q]=Math.round(z[q]);return z};return"conversion"in O&&(I.conversion=O.conversion),I}(T),y[_][D].raw=function(O){const I=function(...M){const B=M[0];return B==null?B:(B.length>1&&(M=B),O(M))};return"conversion"in O&&(I.conversion=O.conversion),I}(T)})}),p.exports=y},9325:(p,b,m)=>{const w=m(4959);function x(E){const D=function(){const O={},I=Object.keys(w);for(let M=I.length,B=0;B<M;B++)O[I[B]]={distance:-1,parent:null};return O}(),T=[E];for(D[E].distance=0;T.length;){const O=T.pop(),I=Object.keys(w[O]);for(let M=I.length,B=0;B<M;B++){const z=I[B],U=D[z];U.distance===-1&&(U.distance=D[O].distance+1,U.parent=O,T.unshift(z))}}return D}function y(E,D){return function(T){return D(E(T))}}function _(E,D){const T=[D[E].parent,E];let O=w[D[E].parent][E],I=D[E].parent;for(;D[I].parent;)T.unshift(D[I].parent),O=y(w[D[I].parent][I],O),I=D[I].parent;return O.conversion=T,O}p.exports=function(E){const D=x(E),T={},O=Object.keys(D);for(let I=O.length,M=0;M<I;M++){const B=O[M];D[B].parent!==null&&(T[B]=_(B,D))}return T}},1103:p=>{p.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const E=_},3062:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=_},903:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CChCA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;
}
`],sourceRoot:""}]);const E=_},3143:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},4717:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=_},9315:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=_},8733:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=_},3508:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=_},2640:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=_},3535:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const E=_},1568:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=_},6270:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=_},5083:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},4036:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=_},3773:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=_},3689:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=_},1905:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},9773:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=_},2347:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},7754:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},111:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const E=_},4721:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=_},5730:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const E=_},4564:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},6082:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=_},2417:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=_},1199:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable .todo-list .todo-list__label>input{cursor:pointer}.ck-editor__editable .todo-list .todo-list__label>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAEA,uBACC,eA0ED,CAxEC,0BACC,iBAKD,CAHC,qCACC,cACD,CAIA,+CACC,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAqDD,CAxCC,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,0FAAgG,CAJhG,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAIF,wEACC,qBACD,CAKF,6CACC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAED,CAMA,wDACC,cAKD,CAHC,qEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

.ck-content .todo-list {
	list-style: none;

	& li {
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			-webkit-appearance: none;
			display: inline-block;
			position: relative;
			width: var(--ck-todo-list-checkmark-size);
			height: var(--ck-todo-list-checkmark-size);
			vertical-align: middle;

			/* Needed on iOS */
			border: 0;

			/* LTR styles */
			left: -25px;
			margin-right: -15px;
			right: 0;
			margin-left: 0;

			&::before {
				display: block;
				position: absolute;
				box-sizing: border-box;
				content: '';
				width: 100%;
				height: 100%;
				border: 1px solid hsl(0, 0%, 20%);
				border-radius: 2px;
				transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;
			}

			&::after {
				display: block;
				position: absolute;
				box-sizing: content-box;
				pointer-events: none;
				content: '';

				/* Calculate tick position, size and border-width proportional to the checkmark size. */
				left: calc( var(--ck-todo-list-checkmark-size) / 3 );
				top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
				height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
				border-style: solid;
				border-color: transparent;
				border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
				transform: rotate(45deg);
			}

			&[checked] {
				&::before {
					background: hsl(126, 64%, 41%);
					border-color: hsl(126, 64%, 41%);
				}

				&::after {
					border-color: hsl(0, 0%, 100%);
				}
			}
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}
	}
}

/* RTL styles */
[dir="rtl"] .todo-list .todo-list__label > input {
	left: 0;
	margin-right: 0;
	right: -25px;
	margin-left: -15px;
}

/*
 * To-do list should be interactive only during the editing
 * (https://github.com/ckeditor/ckeditor5/issues/2090).
 */
.ck-editor__editable .todo-list .todo-list__label > input {
	cursor: pointer;

	&:hover::before {
		box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
	}
}
`],sourceRoot:""}]);const E=_},4652:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=_},7442:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},9292:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},7368:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},4070:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},9247:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const E=_},1613:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=_},6306:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=_},2128:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const E=_},5087:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},4101:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const E=_},3881:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=_},6237:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},7341:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},6945:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},4906:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=_},5332:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=_},6781:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=_},3398:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const E=_},4157:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const E=_},5485:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},3949:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},7686:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},7339:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=_},9688:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},8847:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=_},6574:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},4879:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},3662:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=_},2577:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},1046:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},8793:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},4650:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=_},7676:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},5868:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},6764:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const E=_},9695:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=_},5542:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=_},3332:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const E=_},4793:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=_},3488:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=_},8506:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=_},4921:(p,b,m)=>{m.d(b,{Z:()=>E});var w=m(1799),x=m.n(w),y=m(2609),_=m.n(y)()(x());_.push([p.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=_},2609:p=>{p.exports=function(b){var m=[];return m.toString=function(){return this.map(function(w){var x=b(w);return w[2]?"@media ".concat(w[2]," {").concat(x,"}"):x}).join("")},m.i=function(w,x,y){typeof w=="string"&&(w=[[null,w,""]]);var _={};if(y)for(var E=0;E<this.length;E++){var D=this[E][0];D!=null&&(_[D]=!0)}for(var T=0;T<w.length;T++){var O=[].concat(w[T]);y&&_[O[0]]||(x&&(O[2]?O[2]="".concat(x," and ").concat(O[2]):O[2]=x),m.push(O))}},m}},1799:p=>{function b(w,x){return function(y){if(Array.isArray(y))return y}(w)||function(y,_){var E=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(E!=null){var D,T,O=[],I=!0,M=!1;try{for(E=E.call(y);!(I=(D=E.next()).done)&&(O.push(D.value),!_||O.length!==_);I=!0);}catch(B){M=!0,T=B}finally{try{I||E.return==null||E.return()}finally{if(M)throw T}}return O}}(w,x)||function(y,_){if(!!y){if(typeof y=="string")return m(y,_);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return m(y,_)}}(w,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function m(w,x){(x==null||x>w.length)&&(x=w.length);for(var y=0,_=new Array(x);y<x;y++)_[y]=w[y];return _}p.exports=function(w){var x=b(w,4),y=x[1],_=x[3];if(!_)return y;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(_)))),D="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),T="/*# ".concat(D," */"),O=_.sources.map(function(I){return"/*# sourceURL=".concat(_.sourceRoot||"").concat(I," */")});return[y].concat(O).concat([T]).join(`
`)}return[y].join(`
`)}},6062:(p,b,m)=>{var w,x=function(){return w===void 0&&(w=Boolean(window&&document&&document.all&&!window.atob)),w},y=function(){var H={};return function(P){if(H[P]===void 0){var Y=document.querySelector(P);if(window.HTMLIFrameElement&&Y instanceof window.HTMLIFrameElement)try{Y=Y.contentDocument.head}catch{Y=null}H[P]=Y}return H[P]}}(),_=[];function E(H){for(var P=-1,Y=0;Y<_.length;Y++)if(_[Y].identifier===H){P=Y;break}return P}function D(H,P){for(var Y={},K=[],ee=0;ee<H.length;ee++){var ne=H[ee],te=P.base?ne[0]+P.base:ne[0],de=Y[te]||0,ue="".concat(te," ").concat(de);Y[te]=de+1;var Ee=E(ue),Ce={css:ne[1],media:ne[2],sourceMap:ne[3]};Ee!==-1?(_[Ee].references++,_[Ee].updater(Ce)):_.push({identifier:ue,updater:q(Ce,P),references:1}),K.push(ue)}return K}function T(H){var P=document.createElement("style"),Y=H.attributes||{};if(Y.nonce===void 0){var K=m.nc;K&&(Y.nonce=K)}if(Object.keys(Y).forEach(function(ne){P.setAttribute(ne,Y[ne])}),typeof H.insert=="function")H.insert(P);else{var ee=y(H.insert||"head");if(!ee)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ee.appendChild(P)}return P}var O,I=(O=[],function(H,P){return O[H]=P,O.filter(Boolean).join(`
`)});function M(H,P,Y,K){var ee=Y?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(H.styleSheet)H.styleSheet.cssText=I(P,ee);else{var ne=document.createTextNode(ee),te=H.childNodes;te[P]&&H.removeChild(te[P]),te.length?H.insertBefore(ne,te[P]):H.appendChild(ne)}}function B(H,P,Y){var K=Y.css,ee=Y.media,ne=Y.sourceMap;if(ee?H.setAttribute("media",ee):H.removeAttribute("media"),ne&&typeof btoa<"u"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ne))))," */")),H.styleSheet)H.styleSheet.cssText=K;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(K))}}var z=null,U=0;function q(H,P){var Y,K,ee;if(P.singleton){var ne=U++;Y=z||(z=T(P)),K=M.bind(null,Y,ne,!1),ee=M.bind(null,Y,ne,!0)}else Y=T(P),K=B.bind(null,Y,P),ee=function(){(function(te){if(te.parentNode===null)return!1;te.parentNode.removeChild(te)})(Y)};return K(H),function(te){if(te){if(te.css===H.css&&te.media===H.media&&te.sourceMap===H.sourceMap)return;K(H=te)}else ee()}}p.exports=function(H,P){(P=P||{}).singleton||typeof P.singleton=="boolean"||(P.singleton=x());var Y=D(H=H||[],P);return function(K){if(K=K||[],Object.prototype.toString.call(K)==="[object Array]"){for(var ee=0;ee<Y.length;ee++){var ne=E(Y[ee]);_[ne].references--}for(var te=D(K,P),de=0;de<Y.length;de++){var ue=E(Y[de]);_[ue].references===0&&(_[ue].updater(),_.splice(ue,1))}Y=te}}}}},s={};function d(p){var b=s[p];if(b!==void 0)return b.exports;var m=s[p]={id:p,exports:{}};return i[p](m,m.exports,d),m.exports}d.n=p=>{var b=p&&p.__esModule?()=>p.default:()=>p;return d.d(b,{a:b}),b},d.d=(p,b)=>{for(var m in b)d.o(b,m)&&!d.o(p,m)&&Object.defineProperty(p,m,{enumerable:!0,get:b[m]})},d.o=(p,b)=>Object.prototype.hasOwnProperty.call(p,b),d.nc=void 0;var h={};return(()=>{function p({emitter:a,activator:e,callback:r,contextElements:o}){a.listenTo(document,"mousedown",(l,c)=>{if(!e())return;const u=typeof c.composedPath=="function"?c.composedPath():[],f=typeof o=="function"?o():o;for(const g of f)if(g.contains(c.target)||u.includes(g))return;r()})}function b(a){return class extends a{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function m({view:a}){a.listenTo(a.element,"submit",(e,r)=>{r.preventDefault(),a.fire("submit")},{useCapture:!0})}d.d(h,{default:()=>Dw});const w=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var x;const y={isMac:_(w),isWindows:(x=w,x.indexOf("windows")>-1),isGecko:function(a){return!!a.match(/gecko\/\d+/)}(w),isSafari:function(a){return a.indexOf(" applewebkit/")>-1&&a.indexOf("chrome")===-1}(w),isiOS:function(a){return!!a.match(/iphone|ipad/i)||_(a)&&navigator.maxTouchPoints>0}(w),isAndroid:function(a){return a.indexOf("android")>-1}(w),isBlink:function(a){return a.indexOf("chrome/")>-1&&a.indexOf("edge/")<0}(w),features:{isRegExpUnicodePropertySupported:function(){let a=!1;try{a="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return a}()}};function _(a){return a.indexOf("macintosh")>-1}function E(a,e,r,o){r=r||function(g,k){return g===k};const l=Array.isArray(a)?a:Array.prototype.slice.call(a),c=Array.isArray(e)?e:Array.prototype.slice.call(e),u=function(g,k,v){const C=D(g,k,v);if(C===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const S=T(g,C),N=T(k,C),R=D(S,N,v),L=g.length-R,$=k.length-R;return{firstIndex:C,lastIndexOld:L,lastIndexNew:$}}(l,c,r);return o?function(g,k){const{firstIndex:v,lastIndexOld:C,lastIndexNew:S}=g;if(v===-1)return Array(k).fill("equal");let N=[];return v>0&&(N=N.concat(Array(v).fill("equal"))),S-v>0&&(N=N.concat(Array(S-v).fill("insert"))),C-v>0&&(N=N.concat(Array(C-v).fill("delete"))),S<k&&(N=N.concat(Array(k-S).fill("equal"))),N}(u,c.length):function(g,k){const v=[],{firstIndex:C,lastIndexOld:S,lastIndexNew:N}=k;return N-C>0&&v.push({index:C,type:"insert",values:g.slice(C,N)}),S-C>0&&v.push({index:C+(N-C),type:"delete",howMany:S-C}),v}(c,u)}function D(a,e,r){for(let o=0;o<Math.max(a.length,e.length);o++)if(a[o]===void 0||e[o]===void 0||!r(a[o],e[o]))return o;return-1}function T(a,e){return a.slice(e).reverse()}function O(a,e,r){r=r||function(L,$){return L===$};const o=a.length,l=e.length;if(o>200||l>200||o+l>300)return O.fastDiff(a,e,r,!0);let c,u;if(l<o){const L=a;a=e,e=L,c="delete",u="insert"}else c="insert",u="delete";const f=a.length,g=e.length,k=g-f,v={},C={};function S(L){const $=(C[L-1]!==void 0?C[L-1]:-1)+1,W=C[L+1]!==void 0?C[L+1]:-1,J=$>W?-1:1;v[L+J]&&(v[L]=v[L+J].slice(0)),v[L]||(v[L]=[]),v[L].push($>W?c:u);let se=Math.max($,W),Ae=se-L;for(;Ae<f&&se<g&&r(a[Ae],e[se]);)Ae++,se++,v[L].push("equal");return se}let N,R=0;do{for(N=-R;N<k;N++)C[N]=S(N);for(N=k+R;N>k;N--)C[N]=S(N);C[k]=S(k),R++}while(C[k]!==g);return v[k].slice(1)}O.fastDiff=E;const I=function(){return function a(){a.called=!0}};class M{constructor(e,r){this.source=e,this.name=r,this.path=[],this.stop=I(),this.off=I()}}const B=new Array(256).fill("").map((a,e)=>("0"+e.toString(16)).slice(-2));function z(){const a=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,o=4294967296*Math.random()>>>0;return"e"+B[a>>0&255]+B[a>>8&255]+B[a>>16&255]+B[a>>24&255]+B[e>>0&255]+B[e>>8&255]+B[e>>16&255]+B[e>>24&255]+B[r>>0&255]+B[r>>8&255]+B[r>>16&255]+B[r>>24&255]+B[o>>0&255]+B[o>>8&255]+B[o>>16&255]+B[o>>24&255]}const U={get(a="normal"){return typeof a!="number"?this[a]||this.normal:a},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function q(a,e){const r=U.get(e.priority);for(let o=0;o<a.length;o++)if(U.get(a[o].priority)<r)return void a.splice(o,0,e);a.push(e)}const H="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class P extends Error{constructor(e,r,o){super(function(l,c){const u=new WeakSet,f=(v,C)=>{if(typeof C=="object"&&C!==null){if(u.has(C))return`[object ${C.constructor.name}]`;u.add(C)}return C},g=c?` ${JSON.stringify(c,f)}`:"",k=ee(l);return l+g+k}(e,o)),this.name="CKEditorError",this.context=r,this.data=o}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,r){if(e.is&&e.is("CKEditorError"))throw e;const o=new P(e.message,r);throw o.stack=e.stack,o}}function Y(a,e){console.warn(...ne(a,e))}function K(a,e){console.error(...ne(a,e))}function ee(a){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[o.createRange(f[0].end)]});else if(e.inputType=="insertText"&&u&&u.includes(`
`,isColorInherited:!1}),o.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...r?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[r]}]:[],o],on:{dragstart:l.to(c=>c.preventDefault())}}]})}}function IS(a,e,r){return(o,l)=>{const c=o.getVisible();if(!c||o.width<OF||o.height<IF)return lg;let u;u=e.position==="inside"?o.bottom-l.height:o.bottom-l.height/2,u-=e.verticalOffset;const f=r(o,l);if(e.position==="inside"){const g=l.clone().moveTo(f,u);if(g.getIntersectionArea(c)<g.getArea())return lg}else{const g=_t(a);if(g){const k=new Xe(g),v=c.bottom+l.height/2>k.bottom,C=e.side==="left"?o.left<k.left:o.right>k.right;if(v||C)return lg}}return{top:u,left:f,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function OS(a){const e=a.config.get("ui.poweredBy"),r=e&&e.position||"border";return NF({position:r,label:PF,verticalOffset:r==="inside"?5:0,horizontalOffset:5,side:a.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var LF=Object.defineProperty,PS=Object.getOwnPropertySymbols,zF=Object.prototype.hasOwnProperty,jF=Object.prototype.propertyIsEnumerable,BS=(a,e,r)=>e in a?LF(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;class FF extends rt(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const r=e.editing.view;this.editor=e,this.componentFactory=new _F(e),this.focusTracker=new oi,this.tooltipManager=new ag(e),this.poweredBy=new BF(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(r.document,"layoutChanged",this.update.bind(this)),this.listenTo(r,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,r){this._editableElementsMap.set(e,r),r.ckeditorInstance||(r.ckeditorInstance=this.editor),this.focusTracker.add(r);const o=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(r)};this.isReady?o():this.once("ready",o)}removeEditableElement(e){const r=this._editableElementsMap.get(e);r&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(r),this.focusTracker.remove(r),r.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,r={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:r})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,r=e.config.get("ui.viewportOffset");if(r)return r;const o=e.config.get("toolbar.viewportTopOffset");return o?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:o}):{top:0}}_initFocusTracking(){const e=this.editor,r=e.editing.view;let o,l;e.keystrokes.set("Alt+F10",(c,u)=>{const f=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(f)&&!Array.from(r.domRoots.values()).includes(f)&&(o=f);const g=this._getCurrentFocusedToolbarDefinition();g&&l||(l=this._getFocusableCandidateToolbarDefinitions());for(let k=0;k<l.length;k++){const v=l.shift();if(l.push(v),v!==g&&this._focusFocusableCandidateToolbar(v)){g&&g.options.afterBlur&&g.options.afterBlur();break}}u()}),e.keystrokes.set("Esc",(c,u)=>{const f=this._getCurrentFocusedToolbarDefinition();f&&(o?(o.focus(),o=null):e.editing.view.focus(),f.options.afterBlur&&f.options.afterBlur(),u())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const r of this._focusableToolbarDefinitions){const{toolbarView:o,options:l}=r;($a(o.element)||l.beforeFocus)&&e.push(r)}return e.sort((r,o)=>RS(r)-RS(o)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:r,options:{beforeFocus:o}}=e;return o&&o(),!!$a(r.element)&&(r.focus(),!0)}_handleScrollToTheSelection(e,r){const o=((l,c)=>{for(var u in c||(c={}))zF.call(c,u)&&BS(l,u,c[u]);if(PS)for(var u of PS(c))jF.call(c,u)&&BS(l,u,c[u]);return l})({top:0,bottom:0,left:0,right:0},this.viewportOffset);r.viewportOffset.top+=o.top,r.viewportOffset.bottom+=o.bottom,r.viewportOffset.left+=o.left,r.viewportOffset.right+=o.right}}function RS(a){const{toolbarView:e,options:r}=a;let o=10;return $a(e.element)&&o--,r.isContextual&&o--,o}var LS=d(9688),$F={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(LS.Z,$F),LS.Z.locals;class VF extends nt{constructor(e){super(e),this.body=new Tz(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class UF extends VF{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,r=new zx;return r.text=e("Rich Text Editor"),r.extendTemplate({attributes:{class:"ck-voice-label"}}),r}}class HF extends nt{constructor(e,r,o){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=o,this._hasExternalElement=!!this._editableElement,this._editingView=r}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function r(o){e.change(l=>{const c=e.document.getRoot(o.name);l.addClass(o.isFocused?"ck-focused":"ck-blurred",c),l.removeClass(o.isFocused?"ck-blurred":"ck-focused",c)})}e.isRenderingInProgress?function o(l){e.once("change:isRenderingInProgress",(c,u,f)=>{f?o(l):r(l)})}(this):r(this)}}class qF extends HF{constructor(e,r,o,l={}){super(e,r,o);const c=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=l.label||(()=>c("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(r=>{const o=e.document.getRoot(this.name);r.setAttribute("aria-label",this._generateLabel(this),o)})}}var zS=d(8847),WF={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(zS.Z,WF),zS.Z.locals;class Hv extends $p{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,r)=>{window.alert(r.message)},{priority:"lowest"})}showSuccess(e,r={}){this._showNotification({message:e,type:"success",namespace:r.namespace,title:r.title})}showInfo(e,r={}){this._showNotification({message:e,type:"info",namespace:r.namespace,title:r.title})}showWarning(e,r={}){this._showNotification({message:e,type:"warning",namespace:r.namespace,title:r.title})}_showNotification(e){const r=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(r,{message:e.message,type:e.type,title:e.title||""})}}class jS extends rt(){constructor(e,r){super(),r&&M2(this,r),e&&this.set(e)}}var FS=d(4650),GF={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(FS.Z,GF),FS.Z.locals;var $S=d(7676),YF={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()($S.Z,YF),$S.Z.locals;const cg=Bk("px");class dg extends me{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const r=this.editor.editing.view,o=r.document.selection.editableElement;return o?r.domConverter.mapViewToDom(o.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new P("contextualballoon-add-view-exist",[this,e]);const r=e.stackId||"main";if(!this._idToStack.has(r))return this._idToStack.set(r,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(r)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(r));const o=this._idToStack.get(r);e.singleViewMode&&this.showStack(r),o.set(e.view,e),this._viewToStack.set(e.view,o),o===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new P("contextualballoon-remove-view-not-exist",[this,e]);const r=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(r.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(r.values())[r.size-2])),r.size===1?(this._idToStack.delete(this._getStackId(r)),this._numberOfStacks=this._idToStack.size):r.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const r=this._idToStack.get(e);if(!r)throw new P("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==r&&this._showView(Array.from(r.values()).pop())}_createPanelView(){this._view=new Ar(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(r=>r[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let r=e.indexOf(this._visibleStack)+1;e[r]||(r=0),this.showStack(this._getStackId(e[r]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let r=e.indexOf(this._visibleStack)-1;e[r]||(r=e.length-1),this.showStack(this._getStackId(e[r]))}_createRotatorView(){const e=new KF(this.editor.locale),r=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(o,l)=>!l&&o>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(o,l)=>{if(l<2)return"";const c=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return r("%0 of %1",[c,l])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new QF(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(r,o)=>!o&&r>=2?Math.min(r-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:r="",withArrow:o=!0,singleViewMode:l=!1}){this.view.class=r,this.view.withArrow=o,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),l&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class KF extends nt{constructor(e){super(e);const r=e.t,o=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new oi,this.buttonPrevView=this._createButtonView(r("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(r("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",o.to("isNavigationVisible",l=>l?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:o.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,r){const o=new zt(this.locale);return o.set({label:e,icon:r,tooltip:!0}),o}}class QF extends nt{constructor(e,r){super(e);const o=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=r,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",o.to("numberOfPanels",l=>l?"":"ck-hidden")],style:{top:o.to("top",cg),left:o.to("left",cg),width:o.to("width",cg),height:o.to("height",cg)}},children:this.content}),this.on("change:numberOfPanels",(l,c,u,f)=>{u>f?this._addPanels(u-f):this._removePanels(f-u),this.updatePosition()})}_addPanels(e){for(;e--;){const r=new nt;r.setTemplate({tag:"div"}),this.content.add(r),this.registerChild(r)}}_removePanels(e){for(;e--;){const r=this.content.last;this.content.remove(r),this.deregisterChild(r),r.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:r}=this._balloonPanelView,{width:o,height:l}=new Xe(this._balloonPanelView.element);Object.assign(this,{top:e,left:r,width:o,height:l})}}}var VS=d(5868),ZF={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(VS.Z,ZF),VS.Z.locals;const pc=Bk("px");class JF extends nt{constructor(e){super(e);const r=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Di({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:r.to("isSticky",o=>o?"block":"none"),height:r.to("isSticky",o=>o?pc(this._contentPanelRect.height):null)}}}).render(),this._contentPanel=new Di({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",r.if("isSticky","ck-sticky-panel__content_sticky"),r.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:r.to("isSticky",o=>o?pc(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:r.to("_stickyTopOffset",o=>o&&pc(o)),bottom:r.to("_stickyBottomOffset",o=>o&&pc(o)),marginLeft:r.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(ye.document,"scroll",(e,r)=>{this.checkIfShouldBeSticky(r.target)},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(e){if(!this.limiterElement||!this.isActive)return void this._unstick();const r=function(c){const u=[];let f=_t(c);for(;f&&f!==ye.document.body;)u.push(f),f=_t(f);return u.push(ye.document),u}(this.limiterElement);if(e&&!r.includes(e))return;const o=function(c,u=0){const f=c.map(k=>{if(k instanceof Document){const v=new Xe(ye.window);return v.top+=u,v.height-=u,v}return new Xe(k)});let g=f[0];for(const k of f.slice(1))g&&(g=g.getIntersection(k));return g}(r,this.viewportTopOffset),l=new Xe(this.limiterElement);if(o&&l.top<o.top){const c=l.getIntersection(o);if(c){const u=o.top;if(u+this._contentPanelRect.height+this.limiterBottomOffset>c.bottom){const f=Math.max(l.bottom-o.bottom,0)+this.limiterBottomOffset;l.bottom-f>l.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(f):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<l.height?this._stickToTopOfAncestors(u):this._unstick()}else this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=pc(-ye.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=pc(-ye.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Xe(this._contentPanel)}}var US=d(9695),XF={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(US.Z,XF),US.Z.locals;class e9 extends FF{constructor(e,r){super(e),this.view=r,this._toolbarConfig=Hx(e.config.get("toolbar")),this._elementReplacer=new ae,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const r=this.editor,o=this.view,l=r.editing.view,c=o.editable,u=l.document.getRoot();c.name=u.rootName,o.render();const f=c.element;this.setEditableElement(c.name,f),o.editable.bind("isFocused").to(this.focusTracker),l.attachDomRoot(f),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,r=this.editor.editing.view;this._elementReplacer.restore(),r.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:r})=>r||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,r=e.editing.view,o=r.document.getRoot(),l=e.sourceElement;let c;const u=e.config.get("placeholder");u&&(c=typeof u=="string"?u:u[this.view.editable.name]),!c&&l&&l.tagName.toLowerCase()==="textarea"&&(c=l.getAttribute("placeholder")),c&&(o.placeholder=c),Jx({view:r,element:o,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,r,o){const l=this.view.stickyPanel;if(l.isSticky){const c=new Xe(l.element).height;r.viewportOffset.top+=c}else{const c=()=>{this.editor.editing.view.scrollToTheSelection(o)};this.listenTo(l,"change:isSticky",c),setTimeout(()=>{this.stopListening(l,"change:isSticky",c)},20)}}}var HS=d(3143),t9={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(HS.Z,t9),HS.Z.locals;class n9 extends UF{constructor(e,r,o={}){super(e),this.stickyPanel=new JF(e),this.toolbar=new Tv(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new qF(e,r)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class qS{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=r=>{const o="error"in r?r.error:r.reason;o instanceof Error&&this._handleError(o,r)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,r){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(r)}off(e,r){this._listeners[e]=this._listeners[e].filter(o=>o!==r)}_fire(e,...r){const o=this._listeners[e]||[];for(const l of o)l.apply(this,[null,...r])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,r){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:r instanceof ErrorEvent?r.filename:void 0,lineno:r instanceof ErrorEvent?r.lineno:void 0,colno:r instanceof ErrorEvent?r.colno:void 0,date:this._now()});const o=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:o}),o?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function qv(a,e=new Set){const r=[a],o=new Set;let l=0;for(;r.length>l;){const c=r[l++];if(!o.has(c)&&r9(c)&&!e.has(c))if(o.add(c),Symbol.iterator in c)try{for(const u of c)r.push(u)}catch{}else for(const u in c)u!=="defaultValue"&&r.push(c[u])}return o}function r9(a){const e=Object.prototype.toString.call(a),r=typeof a;return!(r==="number"||r==="boolean"||r==="string"||r==="symbol"||r==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||a==null||a._watchdogExcluded||a instanceof EventTarget||a instanceof Event)}function WS(a,e,r=new Set){if(a===e&&typeof(o=a)=="object"&&o!==null)return!0;var o;const l=qv(a,r),c=qv(e,r);for(const u of l)if(c.has(u))return!0;return!1}var i9=Object.defineProperty,o9=Object.defineProperties,s9=Object.getOwnPropertyDescriptors,ug=Object.getOwnPropertySymbols,GS=Object.prototype.hasOwnProperty,YS=Object.prototype.propertyIsEnumerable,KS=(a,e,r)=>e in a?i9(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,Wv=(a,e)=>{for(var r in e||(e={}))GS.call(e,r)&&KS(a,r,e[r]);if(ug)for(var r of ug(e))YS.call(e,r)&&KS(a,r,e[r]);return a};class QS extends qS{constructor(e,r={}){super(r),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=Uv(this._save.bind(this),typeof r.saveInterval=="number"?r.saveInterval:5e3),e&&(this._creator=(o,l)=>e.create(o,l)),this._destructor=o=>o.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},r=[],o=this._config.rootsAttributes||{},l={};for(const[g,k]of Object.entries(this._data.roots))k.isLoaded?(e[g]="",l[g]=o[g]||{}):r.push(g);const c=(u=Wv({},this._config),f={extraPlugins:this._config.extraPlugins||[],lazyRoots:r,rootsAttributes:l,_watchdogInitialData:this._data},o9(u,s9(f)));var u,f;return delete c.initialData,c.extraPlugins.push(a9),this._initUsingData?this.create(e,c,c.context):an(this._elementOrData)?this.create(this._elementOrData,c,c.context):this.create(this._editables,c,c.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,r=this._config,o){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(r)||{},this._config.context=o,this._creator(e,this._config))).then(l=>{this._editor=l,l.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=l.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(r){console.error(r,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,r=e.model.document.roots.filter(f=>f.isAttached()&&f.rootName!="$graveyard"),{plugins:o}=e,l=o.has("CommentsRepository")&&o.get("CommentsRepository"),c=o.has("TrackChanges")&&o.get("TrackChanges"),u={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};r.forEach(f=>{u.roots[f.rootName]={content:JSON.stringify(Array.from(f.getChildren())),attributes:JSON.stringify(Array.from(f.getAttributes())),isLoaded:f._isLoaded}});for(const f of e.model.markers)f._affectsData&&(u.markers[f.name]={rangeJSON:f.getRange().toJSON(),usingOperation:f._managedUsingOperations,affectsData:f._affectsData});return l&&(u.commentThreads=JSON.stringify(l.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),c&&(u.suggestions=JSON.stringify(c.getSuggestions({toJSON:!0,skipNotAttached:!0}))),u}_getEditables(){const e={};for(const r of this.editor.model.document.getRootNames()){const o=this.editor.ui.getEditableElement(r);o&&(e[r]=o)}return e}_isErrorComingFromThisItem(e){return WS(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return wr(e,(r,o)=>an(r)||o==="context"?r:void 0)}}class a9{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},r=>{this._restoreCollaborationData(),this._restoreEditorData(r)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,r){if("name"in r){const o=e.createElement(r.name,r.attributes);if(r.children)for(const l of r.children)o._appendChild(this._createNode(e,l));return o}return e.createText(r.data,r.attributes)}_restoreEditorData(e){const r=this.editor;Object.entries(this._data.roots).forEach(([o,{content:l,attributes:c}])=>{const u=JSON.parse(l),f=JSON.parse(c),g=r.model.document.getRoot(o);for(const[k,v]of f)e.setAttribute(k,v,g);for(const k of u){const v=this._createNode(e,k);e.insert(v,g,"end")}}),Object.entries(this._data.markers).forEach(([o,l])=>{const{document:c}=r.model,u=l,{rangeJSON:{start:f,end:g}}=u,k=((R,L)=>{var $={};for(var W in R)GS.call(R,W)&&L.indexOf(W)<0&&($[W]=R[W]);if(R!=null&&ug)for(var W of ug(R))L.indexOf(W)<0&&YS.call(R,W)&&($[W]=R[W]);return $})(u,["rangeJSON"]),v=c.getRoot(f.root),C=e.createPositionFromPath(v,f.path,f.stickiness),S=e.createPositionFromPath(v,g.path,g.stickiness),N=e.createRange(C,S);e.addMarker(o,Wv({range:N},k))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),r=JSON.parse(this._data.suggestions);e.forEach(o=>{const l=this.editor.config.get("collaboration.channelId"),c=this.editor.plugins.get("CommentsRepository");c.hasCommentThread(o.threadId)&&c.getCommentThread(o.threadId).remove(),c.addCommentThread(Wv({channelId:l},o))}),r.forEach(o=>{const l=this.editor.plugins.get("TrackChangesEditing");l.hasSuggestion(o.id)?l.getSuggestion(o.id).attributes=o.attributes:l.addSuggestionData(o)})}}const eh=Symbol("MainQueueId");class l9{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,r){const o=e===eh;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const l=(o?Promise.all(this._queues.values()):Promise.all([this._queues.get(eh),this._queues.get(e)])).then(r),c=l.catch(()=>{});return this._queues.set(e,c),l.finally(()=>{this._activeActions--,this._queues.get(e)===c&&this._activeActions===0&&this._onEmptyCallbacks.forEach(u=>u())})}}function ZS(a){return Array.isArray(a)?a:[a]}class hg extends ig(Dv(X8)){constructor(e,r={}){if(!fg(e)&&r.initialData!==void 0)throw new P("editor-create-initial-data",null);super(r),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return fg(c)?(u=c,u instanceof HTMLTextAreaElement?u.value:u.innerHTML):c;var u}(e)),fg(e)&&(this.sourceElement=e),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),l=new n9(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new e9(this,l),function(c){if(!Oo(c.updateSourceElement))throw new P("attachtoform-missing-elementapi-interface",c);const u=c.sourceElement;if(function(f){return!!f&&f.tagName.toLowerCase()==="textarea"}(u)&&u.form){let f;const g=u.form,k=()=>c.updateSourceElement();Oo(g.submit)&&(f=g.submit,g.submit=()=>{k(),f.apply(g)}),g.addEventListener("submit",k),c.on("destroy",()=>{g.removeEventListener("submit",k),f&&(g.submit=f)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,r={}){return new Promise(o=>{const l=new this(e,r);o(l.initPlugins().then(()=>l.ui.init(fg(e)?e:null)).then(()=>l.data.init(l.config.get("initialData"))).then(()=>l.fire("ready")).then(()=>l))})}}function fg(a){return an(a)}hg.Context=Kx,hg.EditorWatchdog=QS,hg.ContextWatchdog=class extends qS{constructor(a,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new l9,this._watchdogConfig=e,this._creator=r=>a.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(a){this._creator=a}setDestructor(a){this._destructor=a}get context(){return this._context}create(a={}){return this._actionQueues.enqueue(eh,()=>(this._contextConfig=a,this._create()))}getItem(a){return this._getWatchdog(a)._item}getItemState(a){return this._getWatchdog(a).state}add(a){const e=ZS(a);return Promise.all(e.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let o;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return o=new QS(null,this._watchdogConfig),o.setCreator(r.creator),o._setExcludedProperties(this._contextProps),r.destructor&&o.setDestructor(r.destructor),this._watchdogs.set(r.id,o),o.on("error",(l,{error:c,causesRestart:u})=>{this._fire("itemError",{itemId:r.id,error:c}),u&&this._actionQueues.enqueue(r.id,()=>new Promise(f=>{const g=()=>{o.off("restart",g),this._fire("itemRestart",{itemId:r.id}),f()};o.on("restart",g)}))}),o.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(a){const e=ZS(a);return Promise.all(e.map(r=>this._actionQueues.enqueue(r,()=>{const o=this._getWatchdog(r);return this._watchdogs.delete(r),o.destroy()})))}destroy(){return this._actionQueues.enqueue(eh,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(eh,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(a=>{console.error("An error happened during destroying the context or items.",a)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(a=>(this._context=a,this._contextProps=qv(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const a=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(a))})}_getWatchdog(a){const e=this._watchdogs.get(a);if(!e)throw new Error(`Item with the given id was not registered: ${a}.`);return e}_isErrorComingFromThisItem(a){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(a))return!1;return WS(this._context,a.context)}};class Gv extends Rs{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const r=this.document;function o(l){return(c,u)=>{u.preventDefault();const f=u.dropRange?[u.dropRange]:null,g=new M(r,l);r.fire(g,{dataTransfer:u.dataTransfer,method:c.name,targetRanges:f,target:u.target,domEvent:u.domEvent}),g.stop.called&&u.stopPropagation()}}this.listenTo(r,"paste",o("clipboardInput"),{priority:"low"}),this.listenTo(r,"drop",o("clipboardInput"),{priority:"low"}),this.listenTo(r,"dragover",o("dragging"),{priority:"low"})}onDomEvent(e){const r="clipboardData"in e?e.clipboardData:e.dataTransfer,o=e.type=="drop"||e.type=="paste",l={dataTransfer:new j2(r,{cacheFiles:o})};e.type!="drop"&&e.type!="dragover"||(l.dropRange=function(c,u){const f=u.target.ownerDocument,g=u.clientX,k=u.clientY;let v;return f.caretRangeFromPoint&&f.caretRangeFromPoint(g,k)?v=f.caretRangeFromPoint(g,k):u.rangeParent&&(v=f.createRange(),v.setStart(u.rangeParent,u.rangeOffset),v.collapse(!0)),v?c.domConverter.domRangeToView(v):null}(this.view,e)),this.fire(e.type,e,l)}}const JS=["figcaption","li"];function XS(a){let e="";if(a.is("$text")||a.is("$textProxy"))e=a.data;else if(a.is("element","img")&&a.hasAttribute("alt"))e=a.getAttribute("alt");else if(a.is("element","br"))e=`
`;else{let r=null;for(const o of a.getChildren()){const l=XS(o);r&&(r.is("containerElement")||o.is("containerElement"))&&(JS.includes(r.name)||JS.includes(o.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(t,n){(function(i,s){t.exports=s(Z.exports)})(self,i=>(()=>{var s={703:(b,m,w)=>{var x=w(414);function y(){}function _(){}_.resetWarningCache=y,b.exports=function(){function E(O,I,M,B,z,U){if(U!==x){var q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw q.name="Invariant Violation",q}}function D(){return E}E.isRequired=E;var T={array:E,bigint:E,bool:E,func:E,number:E,object:E,string:E,symbol:E,any:E,arrayOf:D,element:E,elementType:E,instanceOf:D,node:E,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:_,resetWarningCache:y};return T.PropTypes=T,T}},697:(b,m,w)=>{b.exports=w(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:b=>{b.exports=i}},d={};function h(b){var m=d[b];if(m!==void 0)return m.exports;var w=d[b]={exports:{}};return s[b](w,w.exports,h),w.exports}h.n=b=>{var m=b&&b.__esModule?()=>b.default:()=>b;return h.d(m,{a:m}),m},h.d=(b,m)=>{for(var w in m)h.o(m,w)&&!h.o(b,w)&&Object.defineProperty(b,w,{enumerable:!0,get:m[w]})},h.o=(b,m)=>Object.prototype.hasOwnProperty.call(b,m),h.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var p={};return(()=>{h.r(p),h.d(p,{CKEditor:()=>zo,CKEditorContext:()=>Nu,useMultiRootEditor:()=>Op});var b=h(787),m=h.n(b),w=h(697),x=h.n(w);const y=new Array(256).fill("").map((j,F)=>("0"+F.toString(16)).slice(-2));class _{constructor(F){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof F.crashNumberLimit=="number"?F.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof F.minimumNonErrorTimePeriod=="number"?F.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=G=>{const X="error"in G?G.error:G.reason;X instanceof Error&&this._handleError(X,G)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(F,G){this._listeners[F]||(this._listeners[F]=[]),this._listeners[F].push(G)}off(F,G){this._listeners[F]=this._listeners[F].filter(X=>X!==G)}_fire(F,...G){const X=this._listeners[F]||[];for(const fe of X)fe.apply(this,[null,...G])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(F,G){if(this._shouldReactToError(F)){this.crashes.push({message:F.message,stack:F.stack,filename:G instanceof ErrorEvent?G.filename:void 0,lineno:G instanceof ErrorEvent?G.lineno:void 0,colno:G instanceof ErrorEvent?G.colno:void 0,date:this._now()});const X=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:F,causesRestart:X}),X?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(F){return F.is&&F.is("CKEditorError")&&F.context!==void 0&&F.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(F)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function E(j,F=new Set){const G=[j],X=new Set;let fe=0;for(;G.length>fe;){const Te=G[fe++];if(!X.has(Te)&&D(Te)&&!F.has(Te))if(X.add(Te),Symbol.iterator in Te)try{for(const Ie of Te)G.push(Ie)}catch{}else for(const Ie in Te)Ie!=="defaultValue"&&G.push(Te[Ie])}return X}function D(j){const F=Object.prototype.toString.call(j),G=typeof j;return!(G==="number"||G==="boolean"||G==="string"||G==="symbol"||G==="function"||F==="[object Date]"||F==="[object RegExp]"||F==="[object Module]"||j==null||j._watchdogExcluded||j instanceof EventTarget||j instanceof Event)}function T(j,F,G=new Set){if(j===F&&typeof(X=j)=="object"&&X!==null)return!0;var X;const fe=E(j,G),Te=E(F,G);for(const Ie of fe)if(Te.has(Ie))return!0;return!1}const O=function(j){var F=typeof j;return j!=null&&(F=="object"||F=="function")},I=typeof pi=="object"&&pi&&pi.Object===Object&&pi;var M=typeof self=="object"&&self&&self.Object===Object&&self;const B=I||M||Function("return this")(),z=function(){return B.Date.now()};var U=/\s/;const q=function(j){for(var F=j.length;F--&&U.test(j.charAt(F)););return F};var H=/^\s+/;const P=function(j){return j&&j.slice(0,q(j)+1).replace(H,"")},Y=B.Symbol;var K=Object.prototype,ee=K.hasOwnProperty,ne=K.toString,te=Y?Y.toStringTag:void 0;const de=function(j){var F=ee.call(j,te),G=j[te];try{j[te]=void 0;var X=!0}catch{}var fe=ne.call(j);return X&&(F?j[te]=G:delete j[te]),fe};var ue=Object.prototype.toString;const Ee=function(j){return ue.call(j)};var Ce=Y?Y.toStringTag:void 0;const oe=function(j){return j==null?j===void 0?"[object Undefined]":"[object Null]":Ce&&Ce in Object(j)?de(j):Ee(j)},le=function(j){return j!=null&&typeof j=="object"},ge=function(j){return typeof j=="symbol"||le(j)&&oe(j)=="[object Symbol]"};var Ne=/^[-+]0x[0-9a-f]+$/i,Re=/^0b[01]+$/i,Fe=/^0o[0-7]+$/i,Ve=parseInt;const Ue=function(j){if(typeof j=="number")return j;if(ge(j))return NaN;if(O(j)){var F=typeof j.valueOf=="function"?j.valueOf():j;j=O(F)?F+"":F}if(typeof j!="string")return j===0?j:+j;j=P(j);var G=Re.test(j);return G||Fe.test(j)?Ve(j.slice(2),G?2:8):Ne.test(j)?NaN:+j};var We=Math.max,je=Math.min;const vn=function(j,F,G){var X,fe,Te,Ie,Se,Je,Ze=0,dr=!1,Wn=!1,yn=!0;if(typeof j!="function")throw new TypeError("Expected a function");function it(Rn){var Br=X,Ln=fe;return X=fe=void 0,Ze=Rn,Ie=j.apply(Ln,Br)}function Ei(Rn){var Br=Rn-Je;return Je===void 0||Br>=F||Br<0||Wn&&Rn-Ze>=Te}function wr(){var Rn=z();if(Ei(Rn))return an(Rn);Se=setTimeout(wr,function(Br){var Ln=F-(Br-Je);return Wn?je(Ln,Te-(Br-Ze)):Ln}(Rn))}function an(Rn){return Se=void 0,yn&&X?it(Rn):(X=fe=void 0,Ie)}function er(){var Rn=z(),Br=Ei(Rn);if(X=arguments,fe=this,Je=Rn,Br){if(Se===void 0)return function(Ln){return Ze=Ln,Se=setTimeout(wr,F),dr?it(Ln):Ie}(Je);if(Wn)return clearTimeout(Se),Se=setTimeout(wr,F),it(Je)}return Se===void 0&&(Se=setTimeout(wr,F)),Ie}return F=Ue(F)||0,O(G)&&(dr=!!G.leading,Te=(Wn="maxWait"in G)?We(Ue(G.maxWait)||0,F):Te,yn="trailing"in G?!!G.trailing:yn),er.cancel=function(){Se!==void 0&&clearTimeout(Se),Ze=0,X=Je=fe=Se=void 0},er.flush=function(){return Se===void 0?Ie:an(z())},er},kr=function(j,F,G){var X=!0,fe=!0;if(typeof j!="function")throw new TypeError("Expected a function");return O(G)&&(X="leading"in G?!!G.leading:X,fe="trailing"in G?!!G.trailing:fe),vn(j,F,{leading:X,maxWait:F,trailing:fe})},Hn=function(j,F){return function(G){return j(F(G))}},un=Hn(Object.getPrototypeOf,Object);var Xn=Function.prototype,en=Object.prototype,rt=Xn.toString,Vl=en.hasOwnProperty,ep=rt.call(Object);const tp=function(j){if(!le(j)||oe(j)!="[object Object]")return!1;var F=un(j);if(F===null)return!0;var G=Vl.call(F,"constructor")&&F.constructor;return typeof G=="function"&&G instanceof G&&rt.call(G)==ep},Q=function(j){return le(j)&&j.nodeType===1&&!tp(j)},re=function(){this.__data__=[],this.size=0},ae=function(j,F){return j===F||j!=j&&F!=F},xe=function(j,F){for(var G=j.length;G--;)if(ae(j[G][0],F))return G;return-1};var be=Array.prototype.splice;const pe=function(j){var F=this.__data__,G=xe(F,j);return!(G<0)&&(G==F.length-1?F.pop():be.call(F,G,1),--this.size,!0)},ze=function(j){var F=this.__data__,G=xe(F,j);return G<0?void 0:F[G][1]},pt=function(j){return xe(this.__data__,j)>-1},bt=function(j,F){var G=this.__data__,X=xe(G,j);return X<0?(++this.size,G.push([j,F])):G[X][1]=F,this};function yt(j){var F=-1,G=j==null?0:j.length;for(this.clear();++F<G;){var X=j[F];this.set(X[0],X[1])}}yt.prototype.clear=re,yt.prototype.delete=pe,yt.prototype.get=ze,yt.prototype.has=pt,yt.prototype.set=bt;const vr=yt,Xd=function(){this.__data__=new vr,this.size=0},Ta=function(j){var F=this.__data__,G=F.delete(j);return this.size=F.size,G},Ci=function(j){return this.__data__.get(j)},eu=function(j){return this.__data__.has(j)},Ma=function(j){if(!O(j))return!1;var F=oe(j);return F=="[object Function]"||F=="[object GeneratorFunction]"||F=="[object AsyncFunction]"||F=="[object Proxy]"},Na=B["__core-js_shared__"];var ys=function(){var j=/[^.]+$/.exec(Na&&Na.keys&&Na.keys.IE_PROTO||"");return j?"Symbol(src)_1."+j:""}();const to=function(j){return!!ys&&ys in j};var qn=Function.prototype.toString;const wn=function(j){if(j!=null){try{return qn.call(j)}catch{}try{return j+""}catch{}}return""};var np=/^\[object .+?Constructor\]$/,rp=Function.prototype,ip=Object.prototype,tu=rp.toString,Jb=ip.hasOwnProperty,Xb=RegExp("^"+tu.call(Jb).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const op=function(j){return!(!O(j)||to(j))&&(Ma(j)?Xb:np).test(wn(j))},ek=function(j,F){return j==null?void 0:j[F]},Io=function(j,F){var G=ek(j,F);return op(G)?G:void 0},Dn=Io(B,"Map"),Ia=Io(Object,"create"),Oa=function(){this.__data__=Ia?Ia(null):{},this.size=0},Ul=function(j){var F=this.has(j)&&delete this.__data__[j];return this.size-=F?1:0,F};var tk=Object.prototype.hasOwnProperty;const nk=function(j){var F=this.__data__;if(Ia){var G=F[j];return G==="__lodash_hash_undefined__"?void 0:G}return tk.call(F,j)?F[j]:void 0};var rk=Object.prototype.hasOwnProperty;const ik=function(j){var F=this.__data__;return Ia?F[j]!==void 0:rk.call(F,j)},ok=function(j,F){var G=this.__data__;return this.size+=this.has(j)?0:1,G[j]=Ia&&F===void 0?"__lodash_hash_undefined__":F,this};function Pr(j){var F=-1,G=j==null?0:j.length;for(this.clear();++F<G;){var X=j[F];this.set(X[0],X[1])}}Pr.prototype.clear=Oa,Pr.prototype.delete=Ul,Pr.prototype.get=nk,Pr.prototype.has=ik,Pr.prototype.set=ok;const Pa=Pr,sk=function(){this.size=0,this.__data__={hash:new Pa,map:new(Dn||vr),string:new Pa}},ak=function(j){var F=typeof j;return F=="string"||F=="number"||F=="symbol"||F=="boolean"?j!=="__proto__":j===null},Hl=function(j,F){var G=j.__data__;return ak(F)?G[typeof F=="string"?"string":"hash"]:G.map},lk=function(j){var F=Hl(this,j).delete(j);return this.size-=F?1:0,F},Oo=function(j){return Hl(this,j).get(j)},nu=function(j){return Hl(this,j).has(j)},sp=function(j,F){var G=Hl(this,j),X=G.size;return G.set(j,F),this.size+=G.size==X?0:1,this};function _s(j){var F=-1,G=j==null?0:j.length;for(this.clear();++F<G;){var X=j[F];this.set(X[0],X[1])}}_s.prototype.clear=sk,_s.prototype.delete=lk,_s.prototype.get=Oo,_s.prototype.has=nu,_s.prototype.set=sp;const ck=_s,Po=function(j,F){var G=this.__data__;if(G instanceof vr){var X=G.__data__;if(!Dn||X.length<199)return X.push([j,F]),this.size=++G.size,this;G=this.__data__=new ck(X)}return G.set(j,F),this.size=G.size,this};function As(j){var F=this.__data__=new vr(j);this.size=F.size}As.prototype.clear=Xd,As.prototype.delete=Ta,As.prototype.get=Ci,As.prototype.has=eu,As.prototype.set=Po;const dk=As,uk=function(j,F){for(var G=-1,X=j==null?0:j.length;++G<X&&F(j[G],G,j)!==!1;);return j},ap=function(){try{var j=Io(Object,"defineProperty");return j({},"",{}),j}catch{}}(),lp=function(j,F,G){F=="__proto__"&&ap?ap(j,F,{configurable:!0,enumerable:!0,value:G,writable:!0}):j[F]=G};var hk=Object.prototype.hasOwnProperty;const cp=function(j,F,G){var X=j[F];hk.call(j,F)&&ae(X,G)&&(G!==void 0||F in j)||lp(j,F,G)},ql=function(j,F,G,X){var fe=!G;G||(G={});for(var Te=-1,Ie=F.length;++Te<Ie;){var Se=F[Te],Je=X?X(G[Se],j[Se],Se,G,j):void 0;Je===void 0&&(Je=j[Se]),fe?lp(G,Se,Je):cp(G,Se,Je)}return G},Bo=function(j,F){for(var G=-1,X=Array(j);++G<j;)X[G]=F(G);return X},Cs=function(j){return le(j)&&oe(j)=="[object Arguments]"};var xs=Object.prototype,fk=xs.hasOwnProperty,pk=xs.propertyIsEnumerable;const gk=Cs(function(){return arguments}())?Cs:function(j){return le(j)&&fk.call(j,"callee")&&!pk.call(j,"callee")},ru=Array.isArray,mk=function(){return!1};var dp=n&&!n.nodeType&&n,up=dp&&!0&&t&&!t.nodeType&&t,Ro=up&&up.exports===dp?B.Buffer:void 0;const iu=(Ro?Ro.isBuffer:void 0)||mk;var bk=/^(?:0|[1-9]\d*)$/;const kk=function(j,F){var G=typeof j;return!!(F=F==null?9007199254740991:F)&&(G=="number"||G!="symbol"&&bk.test(j))&&j>-1&&j%1==0&&j<F},Ba=function(j){return typeof j=="number"&&j>-1&&j%1==0&&j<=9007199254740991};var Rt={};Rt["[object Float32Array]"]=Rt["[object Float64Array]"]=Rt["[object Int8Array]"]=Rt["[object Int16Array]"]=Rt["[object Int32Array]"]=Rt["[object Uint8Array]"]=Rt["[object Uint8ClampedArray]"]=Rt["[object Uint16Array]"]=Rt["[object Uint32Array]"]=!0,Rt["[object Arguments]"]=Rt["[object Array]"]=Rt["[object ArrayBuffer]"]=Rt["[object Boolean]"]=Rt["[object DataView]"]=Rt["[object Date]"]=Rt["[object Error]"]=Rt["[object Function]"]=Rt["[object Map]"]=Rt["[object Number]"]=Rt["[object Object]"]=Rt["[object RegExp]"]=Rt["[object Set]"]=Rt["[object String]"]=Rt["[object WeakMap]"]=!1;const vk=function(j){return le(j)&&Ba(j.length)&&!!Rt[oe(j)]},ou=function(j){return function(F){return j(F)}};var hp=n&&!n.nodeType&&n,ri=hp&&!0&&t&&!t.nodeType&&t,Es=ri&&ri.exports===hp&&I.process;const Ss=function(){try{var j=ri&&ri.require&&ri.require("util").types;return j||Es&&Es.binding&&Es.binding("util")}catch{}}();var Lo=Ss&&Ss.isTypedArray;const Ra=Lo?ou(Lo):vk;var wk=Object.prototype.hasOwnProperty;const La=function(j,F){var G=ru(j),X=!G&&gk(j),fe=!G&&!X&&iu(j),Te=!G&&!X&&!fe&&Ra(j),Ie=G||X||fe||Te,Se=Ie?Bo(j.length,String):[],Je=Se.length;for(var Ze in j)!F&&!wk.call(j,Ze)||Ie&&(Ze=="length"||fe&&(Ze=="offset"||Ze=="parent")||Te&&(Ze=="buffer"||Ze=="byteLength"||Ze=="byteOffset")||kk(Ze,Je))||Se.push(Ze);return Se};var su=Object.prototype;const au=function(j){var F=j&&j.constructor;return j===(typeof F=="function"&&F.prototype||su)},lu=Hn(Object.keys,Object);var Ds=Object.prototype.hasOwnProperty;const yk=function(j){if(!au(j))return lu(j);var F=[];for(var G in Object(j))Ds.call(j,G)&&G!="constructor"&&F.push(G);return F},cu=function(j){return j!=null&&Ba(j.length)&&!Ma(j)},Wl=function(j){return cu(j)?La(j):yk(j)},_k=function(j,F){return j&&ql(F,Wl(F),j)},Ak=function(j){var F=[];if(j!=null)for(var G in Object(j))F.push(G);return F};var du=Object.prototype.hasOwnProperty;const Ck=function(j){if(!O(j))return Ak(j);var F=au(j),G=[];for(var X in j)(X!="constructor"||!F&&du.call(j,X))&&G.push(X);return G},Gl=function(j){return cu(j)?La(j,!0):Ck(j)},fp=function(j,F){return j&&ql(F,Gl(F),j)};var uu=n&&!n.nodeType&&n,Ts=uu&&!0&&t&&!t.nodeType&&t,pp=Ts&&Ts.exports===uu?B.Buffer:void 0,Yl=pp?pp.allocUnsafe:void 0;const gp=function(j,F){if(F)return j.slice();var G=j.length,X=Yl?Yl(G):new j.constructor(G);return j.copy(X),X},Lt=function(j,F){var G=-1,X=j.length;for(F||(F=Array(X));++G<X;)F[G]=j[G];return F},xk=function(j,F){for(var G=-1,X=j==null?0:j.length,fe=0,Te=[];++G<X;){var Ie=j[G];F(Ie,G,j)&&(Te[fe++]=Ie)}return Te},Kl=function(){return[]};var mp=Object.prototype.propertyIsEnumerable,Ms=Object.getOwnPropertySymbols;const za=Ms?function(j){return j==null?[]:(j=Object(j),xk(Ms(j),function(F){return mp.call(j,F)}))}:Kl,Ns=function(j,F){return ql(j,za(j),F)},hu=function(j,F){for(var G=-1,X=F.length,fe=j.length;++G<X;)j[fe+G]=F[G];return j},Ql=Object.getOwnPropertySymbols?function(j){for(var F=[];j;)hu(F,za(j)),j=un(j);return F}:Kl,Ek=function(j,F){return ql(j,Ql(j),F)},fu=function(j,F,G){var X=F(j);return ru(j)?X:hu(X,G(j))},Sk=function(j){return fu(j,Wl,za)},pu=function(j){return fu(j,Gl,Ql)},gu=Io(B,"DataView"),mu=Io(B,"Promise"),bu=Io(B,"Set"),Is=Io(B,"WeakMap");var Zl="[object Map]",bp="[object Promise]",kp="[object Set]",vp="[object WeakMap]",wp="[object DataView]",Os=wn(gu),Dk=wn(Dn),yp=wn(mu),_p=wn(bu),Ap=wn(Is),no=oe;(gu&&no(new gu(new ArrayBuffer(1)))!=wp||Dn&&no(new Dn)!=Zl||mu&&no(mu.resolve())!=bp||bu&&no(new bu)!=kp||Is&&no(new Is)!=vp)&&(no=function(j){var F=oe(j),G=F=="[object Object]"?j.constructor:void 0,X=G?wn(G):"";if(X)switch(X){case Os:return wp;case Dk:return Zl;case yp:return bp;case _p:return kp;case Ap:return vp}return F});const Jl=no;var Cp=Object.prototype.hasOwnProperty;const Tk=function(j){var F=j.length,G=new j.constructor(F);return F&&typeof j[0]=="string"&&Cp.call(j,"index")&&(G.index=j.index,G.input=j.input),G},ku=B.Uint8Array,vu=function(j){var F=new j.constructor(j.byteLength);return new ku(F).set(new ku(j)),F},xp=function(j,F){var G=F?vu(j.buffer):j.buffer;return new j.constructor(G,j.byteOffset,j.byteLength)};var wu=/\w*$/;const Mk=function(j){var F=new j.constructor(j.source,wu.exec(j));return F.lastIndex=j.lastIndex,F};var yu=Y?Y.prototype:void 0,_u=yu?yu.valueOf:void 0;const Nk=function(j){return _u?Object(_u.call(j)):{}},Ep=function(j,F){var G=F?vu(j.buffer):j.buffer;return new j.constructor(G,j.byteOffset,j.length)},Au=function(j,F,G){var X=j.constructor;switch(F){case"[object ArrayBuffer]":return vu(j);case"[object Boolean]":case"[object Date]":return new X(+j);case"[object DataView]":return xp(j,G);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ep(j,G);case"[object Map]":case"[object Set]":return new X;case"[object Number]":case"[object String]":return new X(j);case"[object RegExp]":return Mk(j);case"[object Symbol]":return Nk(j)}};var Sp=Object.create;const Cu=function(){function j(){}return function(F){if(!O(F))return{};if(Sp)return Sp(F);j.prototype=F;var G=new j;return j.prototype=void 0,G}}(),xu=function(j){return typeof j.constructor!="function"||au(j)?{}:Cu(un(j))},Eu=function(j){return le(j)&&Jl(j)=="[object Map]"};var Xl=Ss&&Ss.isMap;const Dp=Xl?ou(Xl):Eu,Tp=function(j){return le(j)&&Jl(j)=="[object Set]"};var Su=Ss&&Ss.isSet;const Mp=Su?ou(Su):Tp;var Du="[object Arguments]",Np="[object Function]",Ip="[object Object]",Nt={};Nt[Du]=Nt["[object Array]"]=Nt["[object ArrayBuffer]"]=Nt["[object DataView]"]=Nt["[object Boolean]"]=Nt["[object Date]"]=Nt["[object Float32Array]"]=Nt["[object Float64Array]"]=Nt["[object Int8Array]"]=Nt["[object Int16Array]"]=Nt["[object Int32Array]"]=Nt["[object Map]"]=Nt["[object Number]"]=Nt[Ip]=Nt["[object RegExp]"]=Nt["[object Set]"]=Nt["[object String]"]=Nt["[object Symbol]"]=Nt["[object Uint8Array]"]=Nt["[object Uint8ClampedArray]"]=Nt["[object Uint16Array]"]=Nt["[object Uint32Array]"]=!0,Nt["[object Error]"]=Nt[Np]=Nt["[object WeakMap]"]=!1;const Ik=function j(F,G,X,fe,Te,Ie){var Se,Je=1&G,Ze=2&G,dr=4&G;if(X&&(Se=Te?X(F,fe,Te,Ie):X(F)),Se!==void 0)return Se;if(!O(F))return F;var Wn=ru(F);if(Wn){if(Se=Tk(F),!Je)return Lt(F,Se)}else{var yn=Jl(F),it=yn==Np||yn=="[object GeneratorFunction]";if(iu(F))return gp(F,Je);if(yn==Ip||yn==Du||it&&!Te){if(Se=Ze||it?{}:xu(F),!Je)return Ze?Ek(F,fp(Se,F)):Ns(F,_k(Se,F))}else{if(!Nt[yn])return Te?F:{};Se=Au(F,yn,Je)}}Ie||(Ie=new dk);var Ei=Ie.get(F);if(Ei)return Ei;Ie.set(F,Se),Mp(F)?F.forEach(function(an){Se.add(j(an,G,X,an,F,Ie))}):Dp(F)&&F.forEach(function(an,er){Se.set(er,j(an,G,X,er,F,Ie))});var wr=Wn?void 0:(dr?Ze?pu:Sk:Ze?Gl:Wl)(F);return uk(wr||F,function(an,er){wr&&(an=F[er=an]),cp(Se,er,j(an,G,X,er,F,Ie))}),Se},Ok=function(j,F){return Ik(j,5,F=typeof F=="function"?F:void 0)};class xi extends _{constructor(F,G={}){super(G),this._editor=null,this._initUsingData=!0,this._editables={},this._throttledSave=kr(this._save.bind(this),typeof G.saveInterval=="number"?G.saveInterval:5e3),F&&(this._creator=(X,fe)=>F.create(X,fe)),this._destructor=X=>X.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(F){this._creator=F}setDestructor(F){this._destructor=F}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(F=>{console.error("An error happened during the editor destroying.",F)}).then(()=>{const F={},G=[],X=this._config.rootsAttributes||{},fe={};for(const[Ie,Se]of Object.entries(this._data.roots))Se.isLoaded?(F[Ie]="",fe[Ie]=X[Ie]||{}):G.push(Ie);const Te={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:G,rootsAttributes:fe,_watchdogInitialData:this._data};return delete Te.initialData,Te.extraPlugins.push(ja),this._initUsingData?this.create(F,Te,Te.context):Q(this._elementOrData)?this.create(this._elementOrData,Te,Te.context):this.create(this._editables,Te,Te.context)}).then(()=>{this._fire("restart")})}create(F=this._elementOrData,G=this._config,X){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=F,this._initUsingData=typeof F=="string"||Object.keys(F).length>0&&typeof Object.values(F)[0]=="string",this._config=this._cloneEditorConfiguration(G)||{},this._config.context=X,this._creator(F,this._config))).then(fe=>{this._editor=fe,fe.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=fe.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const F=this._editor;return this._editor=null,F.model.document.off("change:data",this._throttledSave),this._destructor(F)})}_save(){const F=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=F}catch(G){console.error(G,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(F){this._excludedProps=F}_getData(){const F=this._editor,G=F.model.document.roots.filter(Se=>Se.isAttached()&&Se.rootName!="$graveyard"),{plugins:X}=F,fe=X.has("CommentsRepository")&&X.get("CommentsRepository"),Te=X.has("TrackChanges")&&X.get("TrackChanges"),Ie={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};G.forEach(Se=>{Ie.roots[Se.rootName]={content:JSON.stringify(Array.from(Se.getChildren())),attributes:JSON.stringify(Array.from(Se.getAttributes())),isLoaded:Se._isLoaded}});for(const Se of F.model.markers)Se._affectsData&&(Ie.markers[Se.name]={rangeJSON:Se.getRange().toJSON(),usingOperation:Se._managedUsingOperations,affectsData:Se._affectsData});return fe&&(Ie.commentThreads=JSON.stringify(fe.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),Te&&(Ie.suggestions=JSON.stringify(Te.getSuggestions({toJSON:!0,skipNotAttached:!0}))),Ie}_getEditables(){const F={};for(const G of this.editor.model.document.getRootNames()){const X=this.editor.ui.getEditableElement(G);X&&(F[G]=X)}return F}_isErrorComingFromThisItem(F){return T(this._editor,F.context,this._excludedProps)}_cloneEditorConfiguration(F){return Ok(F,(G,X)=>Q(G)||X==="context"?G:void 0)}}class ja{constructor(F){this.editor=F,this._data=F.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",F=>{F.stop(),this.editor.model.enqueueChange({isUndoable:!1},G=>{this._restoreCollaborationData(),this._restoreEditorData(G)}),this.editor.data.fire("ready")},{priority:999})}_createNode(F,G){if("name"in G){const X=F.createElement(G.name,G.attributes);if(G.children)for(const fe of G.children)X._appendChild(this._createNode(F,fe));return X}return F.createText(G.data,G.attributes)}_restoreEditorData(F){const G=this.editor;Object.entries(this._data.roots).forEach(([X,{content:fe,attributes:Te}])=>{const Ie=JSON.parse(fe),Se=JSON.parse(Te),Je=G.model.document.getRoot(X);for(const[Ze,dr]of Se)F.setAttribute(Ze,dr,Je);for(const Ze of Ie){const dr=this._createNode(F,Ze);F.insert(dr,Je,"end")}}),Object.entries(this._data.markers).forEach(([X,fe])=>{const{document:Te}=G.model,{rangeJSON:{start:Ie,end:Se},...Je}=fe,Ze=Te.getRoot(Ie.root),dr=F.createPositionFromPath(Ze,Ie.path,Ie.stickiness),Wn=F.createPositionFromPath(Ze,Se.path,Se.stickiness),yn=F.createRange(dr,Wn);F.addMarker(X,{range:yn,...Je})})}_restoreCollaborationData(){const F=JSON.parse(this._data.commentThreads),G=JSON.parse(this._data.suggestions);F.forEach(X=>{const fe=this.editor.config.get("collaboration.channelId"),Te=this.editor.plugins.get("CommentsRepository");Te.hasCommentThread(X.threadId)&&Te.getCommentThread(X.threadId).remove(),Te.addCommentThread({channelId:fe,...X})}),G.forEach(X=>{const fe=this.editor.plugins.get("TrackChangesEditing");fe.hasSuggestion(X.id)?fe.getSuggestion(X.id).attributes=X.attributes:fe.addSuggestionData(X)})}}const Fa=Symbol("MainQueueId");class Tu extends _{constructor(F,G={}){super(G),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new ec,this._watchdogConfig=G,this._creator=X=>F.create(X),this._destructor=X=>X.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(F){this._creator=F}setDestructor(F){this._destructor=F}get context(){return this._context}create(F={}){return this._actionQueues.enqueue(Fa,()=>(this._contextConfig=F,this._create()))}getItem(F){return this._getWatchdog(F)._item}getItemState(F){return this._getWatchdog(F).state}add(F){const G=tc(F);return Promise.all(G.map(X=>this._actionQueues.enqueue(X.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let fe;if(this._watchdogs.has(X.id))throw new Error(`Item with the given id is already added: '${X.id}'.`);if(X.type==="editor")return fe=new xi(null,this._watchdogConfig),fe.setCreator(X.creator),fe._setExcludedProperties(this._contextProps),X.destructor&&fe.setDestructor(X.destructor),this._watchdogs.set(X.id,fe),fe.on("error",(Te,{error:Ie,causesRestart:Se})=>{this._fire("itemError",{itemId:X.id,error:Ie}),Se&&this._actionQueues.enqueue(X.id,()=>new Promise(Je=>{const Ze=()=>{fe.off("restart",Ze),this._fire("itemRestart",{itemId:X.id}),Je()};fe.on("restart",Ze)}))}),fe.create(X.sourceElementOrData,X.config,this._context);throw new Error(`Not supported item type: '${X.type}'.`)})))}remove(F){const G=tc(F);return Promise.all(G.map(X=>this._actionQueues.enqueue(X,()=>{const fe=this._getWatchdog(X);return this._watchdogs.delete(X),fe.destroy()})))}destroy(){return this._actionQueues.enqueue(Fa,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Fa,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(F=>{console.error("An error happened during destroying the context or items.",F)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(F=>(this._context=F,this._contextProps=E(this._context),Promise.all(Array.from(this._watchdogs.values()).map(G=>(G._setExcludedProperties(this._contextProps),G.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const F=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(G=>G.destroy())).then(()=>this._destructor(F))})}_getWatchdog(F){const G=this._watchdogs.get(F);if(!G)throw new Error(`Item with the given id was not registered: ${F}.`);return G}_isErrorComingFromThisItem(F){for(const G of this._watchdogs.values())if(G._isErrorComingFromThisItem(F))return!1;return T(this._context,F.context)}}class ec{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(F){this._onEmptyCallbacks.push(F)}enqueue(F,G){const X=F===Fa;this._activeActions++,this._queues.get(F)||this._queues.set(F,Promise.resolve());const fe=(X?Promise.all(this._queues.values()):Promise.all([this._queues.get(Fa),this._queues.get(F)])).then(G),Te=fe.catch(()=>{});return this._queues.set(F,Te),fe.finally(()=>{this._activeActions--,this._queues.get(F)===Te&&this._activeActions===0&&this._onEmptyCallbacks.forEach(Ie=>Ie())})}}function tc(j){return Array.isArray(j)?j:[j]}const Mu=m().createContext("contextWatchdog");class Nu extends m().Component{constructor(F,G){super(F,G),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(F){return this._shouldComponentUpdate(F)}async _shouldComponentUpdate(F){return F.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(F.config)),F.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(F.config),!0):this.props.children!==F.children}render(){return m().createElement(Mu.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(F){this.contextWatchdog=new Tu(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(G,X)=>{this.props.onError(X.error,{phase:"runtime",willContextRestart:X.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(F).catch(G=>{this.props.onError(G,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}Nu.defaultProps={isLayoutReady:!0,onError:(j,F)=>console.error(j,F)},Nu.propTypes={id:x().string,isLayoutReady:x().bool,context:x().func,watchdogConfig:x().object,config:x().object,onReady:x().func,onError:x().func};const Iu="Lock from React integration (@ckeditor/ckeditor5-react)";class zo extends m().Component{constructor(F){super(F),this.editorDestructionInProgress=null,this.domContainer=m().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:G}=window;if(G){const[X]=G.split(".").map(Number);X<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(F){return!!this.editor&&(F.id!==this.props.id||F.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(F)&&this.editor.data.set(F.data),"disabled"in F&&(F.disabled?this.editor.enableReadOnlyMode(Iu):this.editor.disableReadOnlyMode(Iu)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return m().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof Tu?this.watchdog=new Ou(this.context):this.watchdog=new zo._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((F,G)=>this._createEditor(F,G)),this.watchdog.on("error",(F,{error:G,causesRestart:X})=>{(this.props.onError||console.error)(G,{phase:"runtime",willEditorRestart:X})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(F=>{(this.props.onError||console.error)(F,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(F,G){return this.props.editor.create(F,G).then(X=>{"disabled"in this.props&&this.props.disabled&&X.enableReadOnlyMode(Iu);const fe=X.model.document,Te=X.editing.view.document;return fe.on("change:data",Ie=>{this.props.onChange&&this.props.onChange(Ie,X)}),Te.on("focus",Ie=>{this.props.onFocus&&this.props.onFocus(Ie,X)}),Te.on("blur",Ie=>{this.props.onBlur&&this.props.onBlur(Ie,X)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(X)}),X})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(F=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,F()):this.instance?(await this.instance.destroy(),this.instance=null,F()):void F())})}_shouldUpdateEditor(F){return this.props.data!==F.data&&this.editor.data.get()!==F.data}_getConfig(){const F=this.props.config||{};return this.props.data&&F.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...F,initialData:F.initialData||this.props.data||""}}}zo.contextType=Mu,zo.propTypes={editor:x().func.isRequired,data:x().string,config:x().object,disableWatchdog:x().bool,watchdogConfig:x().object,onChange:x().func,onReady:x().func,onFocus:x().func,onBlur:x().func,onError:x().func,disabled:x().bool,id:x().any},zo._EditorWatchdog=xi;class Ou{constructor(F){this._contextWatchdog=F,this._id=function(){const G=4294967296*Math.random()>>>0,X=4294967296*Math.random()>>>0,fe=4294967296*Math.random()>>>0,Te=4294967296*Math.random()>>>0;return"e"+y[G>>0&255]+y[G>>8&255]+y[G>>16&255]+y[G>>24&255]+y[X>>0&255]+y[X>>8&255]+y[X>>16&255]+y[X>>24&255]+y[fe>>0&255]+y[fe>>8&255]+y[fe>>16&255]+y[fe>>24&255]+y[Te>>0&255]+y[Te>>8&255]+y[Te>>16&255]+y[Te>>24&255]}()}setCreator(F){this._creator=F}create(F,G){return this._contextWatchdog.add({sourceElementOrData:F,config:G,creator:this._creator,id:this._id,type:"editor"})}on(F,G){this._contextWatchdog.on("itemError",(X,{itemId:fe,error:Te})=>{fe===this._id&&G(null,{error:Te,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const Pu="Lock from React integration (@ckeditor/ckeditor5-react)",Op=j=>{let F=null;const G=(0,b.useRef)(null),X=(0,b.useContext)(Mu),[fe,Te]=(0,b.useState)(null),[Ie,Se]=(0,b.useState)(j.data),[Je,Ze]=(0,b.useState)(j.rootsAttributes||{}),[dr,Wn]=(0,b.useState)([]),yn=(0,b.useRef)(!0),it=(0,b.useRef)(null),Ei=m().createElement("div",{ref:it});(0,b.useEffect)(()=>((async()=>(await G.current,j.isLayoutReady!==!1&&Br()))(),()=>{Rn().then(()=>{G.current=null})}),[j.isLayoutReady]),(0,b.useEffect)(()=>{fe&&(j.disabled?fe.enableReadOnlyMode(Pu):fe.disableReadOnlyMode(Pu))},[j.disabled]),(0,b.useEffect)(()=>{const ye=it.current;if(fe&&!G.current){const _t=fe.getFullData();Se({..._t}),Ze({...fe.getRootsAttributes()}),Wn([...Object.keys(_t).map(tt=>an(fe,tt))]),ye&&ye.appendChild(fe.ui.view.toolbar.element)}return()=>{ye&&ye.firstChild&&ye.removeChild(ye.firstChild)}},[fe&&fe.id]);const wr=()=>{const ye=j.config||{};return j.data&&ye.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...ye,rootsAttributes:Je}},an=(ye,_t)=>m().createElement("div",{id:_t,key:_t,ref:tt=>{if(tt){const Rr=ye.ui.view.createEditable(_t,tt);ye.ui.addEditable(Rr),ye.editing.view.forceRender()}}}),er=(ye,_t)=>j.editor.create(ye,_t).then(tt=>{j.disabled&&j.disabled&&tt.enableReadOnlyMode(Pu);const Rr=tt.model.document,At=tt.editing.view.document;return Rr.on("change:data",ii=>((Xe,ur)=>{const zn=Xe.model.document,Lr={},tr={};zn.differ.getChanges().forEach(Ke=>{let hn;if(hn=Ke.type=="insert"||Ke.type=="remove"?Ke.position.root:Ke.range.root,!hn.isAttached())return;const{rootName:Ps}=hn;Lr[Ps]=Xe.getData({rootName:Ps})}),zn.differ.getChangedRoots().forEach(Ke=>{if(Ke.state)return void(Lr[Ke.name]!==void 0&&delete Lr[Ke.name]);const hn=Ke.name;tr[hn]=Xe.getRootAttributes(hn)}),Object.keys(Lr).length&&Se(Ke=>({...Ke,...Lr})),Object.keys(tr).length&&Ze(Ke=>({...Ke,...tr})),j.onChange&&j.onChange(ur,Xe)})(tt,ii)),tt.on("addRoot",(ii,Xe)=>((ur,zn,Lr)=>{const tr=Lr.rootName,Ke=an(ur,tr);Se(hn=>({...hn,[tr]:ur.getData({rootName:tr})})),Ze(hn=>({...hn,[tr]:ur.getRootAttributes(tr)})),Wn(hn=>[...hn,Ke])})(tt,0,Xe)),tt.on("detachRoot",(ii,Xe)=>((ur,zn,Lr)=>{const tr=Lr.rootName;Wn(Ke=>Ke.filter(hn=>hn.props.id!==tr)),Se(Ke=>{const{[tr]:hn,...Ps}=Ke;return{...Ps}}),Ze(Ke=>{const{[tr]:hn,...Ps}=Ke;return{...Ps}}),ur.detachEditable(Lr)})(tt,0,Xe)),At.on("focus",ii=>{j.onFocus&&j.onFocus(ii,tt)}),At.on("blur",ii=>{j.onBlur&&j.onBlur(ii,tt)}),Te(tt),j.onReady&&j.onReady(tt),tt}),Rn=async()=>{Te(null),Se({}),Ze({}),Wn([]),G.current=new Promise(ye=>{setTimeout(async()=>F?(await F.destroy(),F=null,ye()):fe?(await fe.destroy(),ye()):void ye())})},Br=async()=>{j.disableWatchdog?await er(j.data,wr()):F||(F=X instanceof Tu?new Ou(X):new xi(j.editor,j.watchdogConfig),F.setCreator((ye,_t)=>er(ye,_t)),F.on("error",(ye,{error:_t,causesRestart:tt})=>{(j.onError||console.error)(_t,{phase:"runtime",willEditorRestart:tt})}),await F.create(Ie,wr()).catch(ye=>{(j.onError||console.error)(ye,{phase:"initialization",willEditorRestart:!1})}))};(0,b.useEffect)(()=>{if(fe&&yn.current){yn.current=!1;const ye=Object.keys(Ie),_t=Object.keys(Je);if(!ye.every(zn=>_t.includes(zn)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const tt=fe.getFullData(),Rr=fe.getRootsAttributes(),{addedKeys:At,removedKeys:ii}=Ln(tt,Ie||{}),Xe=ye.some(zn=>tt[zn]!==void 0&&JSON.stringify(tt[zn])!==JSON.stringify(Ie[zn])),ur=_t.filter(zn=>JSON.stringify(Rr[zn])!==JSON.stringify(Je[zn]));fe.model.change(zn=>{nc(At),Pp(ii),Xe&&ro(),ur.length&&Pk(zn,ur)})}},[Ie,Je]);const Ln=(ye,_t)=>{const tt=Object.keys(ye),Rr=Object.keys(_t);return{addedKeys:Rr.filter(At=>!tt.includes(At)),removedKeys:tt.filter(At=>!Rr.includes(At))}},nc=ye=>{ye.forEach(_t=>{fe.addRoot(_t,{data:Ie[_t]||"",attributes:(Je==null?void 0:Je[_t])||{},isUndoable:!0})})},Pp=ye=>{ye.forEach(_t=>{fe.detachRoot(_t,!0)})},ro=()=>{fe.data.set(Ie,{suppressErrorInCollaboration:!0})},Pk=(ye,_t)=>{_t.forEach(tt=>{Object.keys(Je[tt]).forEach(Rr=>{fe.registerRootAttribute(Rr)}),ye.clearAttributes(fe.model.document.getRoot(tt)),ye.setAttributes(Je[tt],fe.model.document.getRoot(tt))})},Bp=(0,b.useCallback)(ye=>{yn.current=!0,Se(ye)},[Se]),Bu=(0,b.useCallback)(ye=>{yn.current=!0,Ze(ye)},[Ze]);return{editor:fe,editableElements:dr,toolbarElement:Ei,data:Ie,setData:Bp,attributes:Je,setAttributes:Bu}}})(),p})())})(J3,J3.exports);const ike=t=>{const[n,i]=Z.exports.useState(!1);ti();const[s,d,h]=QR(),{register:p,handleSubmit:b,reset:m,formState:{errors:w}}=Sa(),x=async y=>{const{username:_,firstName:E,lastName:D,phone_number:T,driverLicense:O,city:I,country:M,houseNumber:B,residentAddress:z,birthdate:U,vehicles:q,adminVerification:H}=y;Ye.promise(s({username:_,firstName:E,lastName:D,phone_number:T,driverLicense:O,city:I,country:M,houseNumber:B,residentAddress:z,birthdate:U,vehicles:q,adminVerification:H}).unwrap(),{pending:"Adding a User ",success:"Successfully added User ",error:"Could not add User ",position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:kn}).then(P=>{i(!0)})};return n?A(Il,{to:"/user",replace:!1}):A(Dt,{children:A("div",{className:"border-t border-slate-200",children:V("form",{className:"row p-3",onSubmit:b(x),children:[V("div",{className:"grid grid-cols-2 gap-x-5",children:[V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"username",children:["Username  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"username",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"username",...p("username",{required:{value:!0,message:"Username  is required"}})}),w.username&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.username.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"firstName",children:["First Name  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"firstName",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"firstName",...p("firstName",{required:{value:!0,message:"First Name  is required"}})}),w.firstName&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.firstName.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"lastName",children:["Last Name  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"lastName",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"lastName",...p("lastName",{required:{value:!0,message:"Last Name  is required"}})}),w.lastName&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.lastName.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"phone_number",children:["Phone Number  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"phone_number",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"phone_number",...p("phone_number",{required:{value:!0,message:"Phone Number  is required"}})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"driverLicense",children:["Driver License  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"driverLicense",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"driverLicense",...p("driverLicense",{required:{value:!0,message:"Driver License  is required"}})}),w.driverLicense&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.driverLicense.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"city",children:["City  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"city",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"city",...p("city",{required:{value:!0,message:"City  is required"}})}),w.city&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.city.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"country",children:["Country  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"country",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"country",...p("country",{required:{value:!0,message:"Country  is required"}})}),w.country&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.country.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"houseNumber",children:["House Number  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"houseNumber",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"houseNumber",...p("houseNumber",{required:{value:!0,message:"House Number  is required"}})}),w.houseNumber&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.houseNumber.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"residentAddress",children:["Resident Address  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"residentAddress",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"residentAddress",...p("residentAddress",{required:{value:!0,message:"Resident Address  is required"}})}),w.residentAddress&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.residentAddress.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"birthdate",children:["Birthdate  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"birthdate",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"birthdate",...p("birthdate",{required:{value:!0,message:"Birthdate  is required"}})}),w.birthdate&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.birthdate.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"vehicles",children:["Vehicles  ",A("span",{className:"text-rose-500",children:"*"})]}),A("input",{id:"vehicles",className:"form-input w-full ml-2 ",type:"text",defaultValue:"",name:"vehicles",...p("vehicles",{required:{value:!0,message:"Vehicles  is required"}})}),w.vehicles&&A("p",{className:"ml-2 mt-1 text-red-600",children:A("span",{children:w.vehicles.message})})]}),V("div",{className:"pb-5",children:[V("label",{className:"block text-sm font-medium mb-1",htmlFor:"adminVerification",children:["Admin Verification  ",A("span",{className:"text-rose-500",children:"*"})]}),A("textarea",{rows:4,className:"form-input w-full ml-2 ",name:"adminVerification",defaultValue:"",...p("adminVerification",{required:{value:!0,message:"Admin Verification  is required"}})})]})]}),V("div",{className:"flex",children:[A("button",{className:"ml-auto mt-auto btn btn-sm border-red-500 hover:bg-red-600 text-red-400 hover:text-white",type:"button",onClick:y=>{history.back()},children:A("span",{className:"hidden xs:block ml-0",children:"Cancel"})}),A("button",{className:"ml-2 mt-auto btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white",type:"submit",children:A("span",{className:"hidden xs:block ml-2",children:"Add User"})})]})]})})})};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var p6;function De(){return p6.apply(null,arguments)}function oke(t){p6=t}function Ki(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function Al(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function vt(t,n){return Object.prototype.hasOwnProperty.call(t,n)}function LC(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var n;for(n in t)if(vt(t,n))return!1;return!0}function xr(t){return t===void 0}function hs(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function Qf(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function g6(t,n){var i=[],s,d=t.length;for(s=0;s<d;++s)i.push(n(t[s],s));return i}function na(t,n){for(var i in n)vt(n,i)&&(t[i]=n[i]);return vt(n,"toString")&&(t.toString=n.toString),vt(n,"valueOf")&&(t.valueOf=n.valueOf),t}function Mo(t,n,i,s){return z6(t,n,i,s,!0).utc()}function ske(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Qe(t){return t._pf==null&&(t._pf=ske()),t._pf}var p_;Array.prototype.some?p_=Array.prototype.some:p_=function(t){var n=Object(this),i=n.length>>>0,s;for(s=0;s<i;s++)if(s in n&&t.call(this,n[s],s,n))return!0;return!1};function zC(t){var n=null,i=!1,s=t._d&&!isNaN(t._d.getTime());if(s&&(n=Qe(t),i=p_.call(n.parsedDateParts,function(d){return d!=null}),s=n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&i),t._strict&&(s=s&&n.charsLeftOver===0&&n.unusedTokens.length===0&&n.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=s;else return s;return t._isValid}function $b(t){var n=Mo(NaN);return t!=null?na(Qe(n),t):Qe(n).userInvalidated=!0,n}var X3=De.momentProperties=[],Ry=!1;function jC(t,n){var i,s,d,h=X3.length;if(xr(n._isAMomentObject)||(t._isAMomentObject=n._isAMomentObject),xr(n._i)||(t._i=n._i),xr(n._f)||(t._f=n._f),xr(n._l)||(t._l=n._l),xr(n._strict)||(t._strict=n._strict),xr(n._tzm)||(t._tzm=n._tzm),xr(n._isUTC)||(t._isUTC=n._isUTC),xr(n._offset)||(t._offset=n._offset),xr(n._pf)||(t._pf=Qe(n)),xr(n._locale)||(t._locale=n._locale),h>0)for(i=0;i<h;i++)s=X3[i],d=n[s],xr(d)||(t[s]=d);return t}function Zf(t){jC(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Ry===!1&&(Ry=!0,De.updateOffset(this),Ry=!1)}function Qi(t){return t instanceof Zf||t!=null&&t._isAMomentObject!=null}function m6(t){De.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+t)}function _i(t,n){var i=!0;return na(function(){if(De.deprecationHandler!=null&&De.deprecationHandler(null,t),i){var s=[],d,h,p,b=arguments.length;for(h=0;h<b;h++){if(d="",typeof arguments[h]=="object"){d+=`
[`+h+"] ";for(p in arguments[0])vt(arguments[0],p)&&(d+=p+": "+arguments[0][p]+", ");d=d.slice(0,-2)}else d=arguments[h];s.push(d)}m6(t+`
Arguments: `+Array.prototype.slice.call(s).join("")+`
De.version="2.30.1";oke(Yt);De.fn=ve;De.min=Gve;De.max=Yve;De.now=Kve;De.utc=Mo;De.unix=Aye;De.months=xye;De.isDate=Qf;De.locale=ma;De.invalid=$b;De.duration=eo;De.isMoment=Qi;De.weekdays=Sye;De.parseZone=Cye;De.localeData=vs;De.isDuration=Cm;De.monthsShort=Eye;De.weekdaysMin=Tye;De.defineLocale=QC;De.updateLocale=Cve;De.locales=xve;De.weekdaysShort=Dye;De.normalizeUnits=Ai;De.relativeTimeRounding=n1e;De.relativeTimeThreshold=r1e;De.calendarFormat=wwe;De.prototype=ve;De.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function ox({children:t,id:n,title:i,modalOpen:s,setModalOpen:d,maxWidth:h="max-w-2xl"}){const p=Z.exports.useRef(null);return Z.exports.useEffect(()=>{const b=({target:m})=>{!s||p.current.contains(m)||d(!1)};return document.addEventListener("click",b),()=>document.removeEventListener("click",b)}),Z.exports.useEffect(()=>{const b=({keyCode:m})=>{!s||m!==27||d(!1)};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)}),V(Dt,{children:[A(Ed,{className:"fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",show:s,enter:"transition ease-out duration-200",enterStart:"opacity-0",enterEnd:"opacity-100",leave:"transition ease-out duration-100",leaveStart:"opacity-100",leaveEnd:"opacity-0","aria-hidden":"true"}),A(Ed,{id:n,className:"fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6",role:"dialog","aria-modal":"true",show:s,enter:"transition ease-in-out duration-200",enterStart:"opacity-0 translate-y-4",enterEnd:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-200",leaveStart:"opacity-100 translate-y-0",leaveEnd:"opacity-0 translate-y-4",children:V("div",{ref:p,className:`bg-white rounded shadow-lg overflow-auto ${h} w-full max-h-full`,children:[A("div",{className:"px-5 py-3 border-b border-slate-200",children:V("div",{className:"flex justify-between items-center",children:[A("div",{className:"font-semibold text-slate-800",children:i}),V("button",{className:"text-slate-400 hover:text-slate-500",onClick:b=>{b.stopPropagation(),d(!1)},children:[A("div",{className:"sr-only",children:"Close"}),A("svg",{className:"w-4 h-4 fill-current",children:A("path",{d:"M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"})})]})]})}),t]})})]})}const o1e=t=>{QR(),ZR(),JR(),XR();const[n]=AX(),[i,s]=Z.exports.useState(!1);ti();const d=async()=>{Ye.promise(n({id:t.id}).unwrap(),{pending:"Deleting record",success:"Successfully deleted the record",error:"Could not delete record",position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:kn})};return V("tr",{children:[A("td",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"text-left",children:t.username})}),A("td",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"text-left",children:t.firstName})}),A("td",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"text-left",children:t.lastName})}),A("td",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px",children:V("div",{className:"space-x-1 flex",children:[V(Ft,{to:`/users/${t.id}`,className:"text-slate-400 hover:text-slate-500 rounded-full inline",children:[A("span",{className:"sr-only",children:"Edit"}),A("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",children:A("path",{d:"M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"})})]}),V("button",{className:"text-rose-500 hover:text-rose-600 rounded-full",onClick:h=>{h.stopPropagation(),s(!0)},children:[A("span",{className:"sr-only",children:"Delete"}),V("svg",{className:"w-8 h-8 fill-current",viewBox:"0 0 32 32",children:[A("path",{d:"M13 15h2v6h-2zM17 15h2v6h-2z"}),A("path",{d:"M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"})]})]}),A(ox,{title:"Delete User",id:t.id,modalOpen:i,setModalOpen:h=>{s(!1)},children:A("div",{className:"border-t border-slate-200",children:V("div",{className:"pb-3 px-3 pt-3",children:[A("span",{className:"font-bold",children:t.firstName})," will be deleted! Are you sure to delete this User?",V("div",{className:"flex mt-5 mx-auto",children:[A("button",{className:"mt-auto btn bg-green-500 hover:bg-green-600 text-white",type:"submit",onClick:h=>{h.stopPropagation(),s(!1)},children:A("span",{className:"hidden xs:block ml-1",children:"Cancel"})}),A("button",{className:"ml-auto mt-auto btn bg-red-500 hover:bg-red-600 text-white",type:"submit",onClick:async h=>{h.stopPropagation(),await d(),s(!1)},children:A("span",{className:"hidden xs:block ml-1",children:"Delete User"})})]})]})})})]})})]},t.react_unique_identifier_key)},sx=({currentPage:t,count:n,totalPages:i})=>V("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between",children:[A("nav",{className:"mb-4 sm:mb-0 sm:order-1",role:"navigation","aria-label":"Navigation",children:V("ul",{className:"flex justify-center",children:[A("li",{className:"ml-3 first:ml-0",children:A("a",{className:"btn bg-white border-slate-200 text-slate-300 cursor-not-allowed",href:"#0",disabled:!0,children:"<- Previous"})}),A("li",{className:"ml-3 first:ml-0",children:A("a",{className:"btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500",href:"#0",children:"Next ->"})})]})}),V("div",{className:"text-sm text-slate-500 text-center sm:text-left",children:["Showing ",V("span",{className:"font-medium text-slate-600",children:["page ",t!=null?t:1]})," of ",A("span",{className:"font-medium text-slate-600",children:i})," with ",A("span",{className:"font-medium text-slate-600",children:n})," records"]})]}),Jd="/assets/sad-face.c851433e.svg",s1e=()=>{var h;const{data:t={},isError:n,isLoading:i,isSuccess:s,error:d}=ZR();return ti(),i?A("h1",{children:"Loading"}):n?(Ye.error("Could not fetch the User",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:kn}),A("h1",{children:"Some Error Happened"})):A(Dt,{children:(t==null?void 0:t.rows.length)>0?V(Dt,{children:[V("div",{className:"bg-white shadow-lg rounded-sm border border-slate-200 relative",children:[A("header",{className:"px-5 py-4",children:V("h2",{className:"font-semibold text-slate-800",children:["Users - ",A("span",{className:"text-slate-400 font-medium",children:t==null?void 0:t.count})]})}),A("div",{children:A("div",{className:"overflow-x-auto",children:V("table",{className:"table-auto w-full",children:[A("thead",{className:"text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200",children:V("tr",{children:[A("th",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"font-semibold text-left",children:"Username"})}),A("th",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"font-semibold text-left",children:"First Name"})}),A("th",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"font-semibold text-left",children:"Last Name"})}),A("th",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"font-semibold text-left",children:"Phone Number"})}),A("th",{className:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",children:A("div",{className:"font-semibold text-left",children:"Actions"})})]},0)}),A("tbody",{className:"text-sm divide-y divide-slate-200",children:(h=t.rows)==null?void 0:h.map(p=>A(o1e,{react_unique_identifier_key:p.id,username:p.username,firstName:p.firstName,lastName:p.lastName,phone_number:p.phone_number},p.id))})]})})})]}),A("div",{className:"mt-8",children:A(sx,{totalPages:t==null?void 0:t.total_pages,count:t==null?void 0:t.count,currentPage:t==null?void 0:t.current_page})})]}):A("div",{className:"px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",children:A("div",{className:"max-w-2xl m-auto mt-16",children:V("div",{className:"text-center px-4",children:[A("div",{className:"inline-flex mb-8",children:A("img",{src:Jd,width:"176",height:"176",alt:"404 illustration"})}),A("div",{className:"mb-6 text-3xl",children:"No Data Found Here"})]})})})})};var a1e={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function l1e(t){if(typeof t=="number")return{value:t,unit:"px"};var n,i=(t.match(/^[0-9.]*/)||"").toString();i.includes(".")?n=parseFloat(i):n=parseInt(i,10);var s=(t.match(/[^0-9]*$/)||"").toString();return a1e[s]?{value:n,unit:s}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function oO(t){var n=l1e(t);return"".concat(n.value).concat(n.unit)}var c1e=function(t,n,i){var s="react-spinners-".concat(t,"-").concat(i);if(typeof window>"u"||!window.document)return s;var d=document.createElement("style");document.head.appendChild(d);var h=d.sheet,p=`
    @keyframes `.concat(s,` {
      `).concat(n,`
    }