(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function kv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vh={exports:{}},ge={};var i_;function zS(){if(i_)return ge;i_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function x(B,J,lt){this.props=B,this.context=J,this.refs=y,this.updater=lt||E}x.prototype.isReactComponent={},x.prototype.setState=function(B,J){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,J,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function P(){}P.prototype=x.prototype;function N(B,J,lt){this.props=B,this.context=J,this.refs=y,this.updater=lt||E}var L=N.prototype=new P;L.constructor=N,M(L,x.prototype),L.isPureReactComponent=!0;var H=Array.isArray;function k(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function R(B,J,lt){var Dt=lt.ref;return{$$typeof:s,type:B,key:J,ref:Dt!==void 0?Dt:null,props:lt}}function w(B,J){return R(B.type,J,B.props)}function X(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function Z(B){var J={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(lt){return J[lt]})}var tt=/\/+/g;function et(B,J){return typeof B=="object"&&B!==null&&B.key!=null?Z(""+B.key):J.toString(36)}function Y(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(k,k):(B.status="pending",B.then(function(J){B.status==="pending"&&(B.status="fulfilled",B.value=J)},function(J){B.status==="pending"&&(B.status="rejected",B.reason=J)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function D(B,J,lt,Dt,wt){var rt=typeof B;(rt==="undefined"||rt==="boolean")&&(B=null);var pt=!1;if(B===null)pt=!0;else switch(rt){case"bigint":case"string":case"number":pt=!0;break;case"object":switch(B.$$typeof){case s:case t:pt=!0;break;case _:return pt=B._init,D(pt(B._payload),J,lt,Dt,wt)}}if(pt)return wt=wt(B),pt=Dt===""?"."+et(B,0):Dt,H(wt)?(lt="",pt!=null&&(lt=pt.replace(tt,"$&/")+"/"),D(wt,J,lt,"",function(Bt){return Bt})):wt!=null&&(X(wt)&&(wt=w(wt,lt+(wt.key==null||B&&B.key===wt.key?"":(""+wt.key).replace(tt,"$&/")+"/")+pt)),J.push(wt)),1;pt=0;var Pt=Dt===""?".":Dt+":";if(H(B))for(var It=0;It<B.length;It++)Dt=B[It],rt=Pt+et(Dt,It),pt+=D(Dt,J,lt,rt,wt);else if(It=S(B),typeof It=="function")for(B=It.call(B),It=0;!(Dt=B.next()).done;)Dt=Dt.value,rt=Pt+et(Dt,It++),pt+=D(Dt,J,lt,rt,wt);else if(rt==="object"){if(typeof B.then=="function")return D(Y(B),J,lt,Dt,wt);throw J=String(B),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return pt}function G(B,J,lt){if(B==null)return B;var Dt=[],wt=0;return D(B,Dt,"","",function(rt){return J.call(lt,rt,wt++)}),Dt}function j(B){if(B._status===-1){var J=B._result;J=J(),J.then(function(lt){(B._status===0||B._status===-1)&&(B._status=1,B._result=lt)},function(lt){(B._status===0||B._status===-1)&&(B._status=2,B._result=lt)}),B._status===-1&&(B._status=0,B._result=J)}if(B._status===1)return B._result.default;throw B._result}var ct=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},ft={map:G,forEach:function(B,J,lt){G(B,function(){J.apply(this,arguments)},lt)},count:function(B){var J=0;return G(B,function(){J++}),J},toArray:function(B){return G(B,function(J){return J})||[]},only:function(B){if(!X(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ge.Activity=g,ge.Children=ft,ge.Component=x,ge.Fragment=n,ge.Profiler=o,ge.PureComponent=N,ge.StrictMode=a,ge.Suspense=p,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ge.__COMPILER_RUNTIME={__proto__:null,c:function(B){return z.H.useMemoCache(B)}},ge.cache=function(B){return function(){return B.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(B,J,lt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Dt=M({},B.props),wt=B.key;if(J!=null)for(rt in J.key!==void 0&&(wt=""+J.key),J)!K.call(J,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&J.ref===void 0||(Dt[rt]=J[rt]);var rt=arguments.length-2;if(rt===1)Dt.children=lt;else if(1<rt){for(var pt=Array(rt),Pt=0;Pt<rt;Pt++)pt[Pt]=arguments[Pt+2];Dt.children=pt}return R(B.type,wt,Dt)},ge.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ge.createElement=function(B,J,lt){var Dt,wt={},rt=null;if(J!=null)for(Dt in J.key!==void 0&&(rt=""+J.key),J)K.call(J,Dt)&&Dt!=="key"&&Dt!=="__self"&&Dt!=="__source"&&(wt[Dt]=J[Dt]);var pt=arguments.length-2;if(pt===1)wt.children=lt;else if(1<pt){for(var Pt=Array(pt),It=0;It<pt;It++)Pt[It]=arguments[It+2];wt.children=Pt}if(B&&B.defaultProps)for(Dt in pt=B.defaultProps,pt)wt[Dt]===void 0&&(wt[Dt]=pt[Dt]);return R(B,rt,wt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(B){return{$$typeof:f,render:B}},ge.isValidElement=X,ge.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:j}},ge.memo=function(B,J){return{$$typeof:d,type:B,compare:J===void 0?null:J}},ge.startTransition=function(B){var J=z.T,lt={};z.T=lt;try{var Dt=B(),wt=z.S;wt!==null&&wt(lt,Dt),typeof Dt=="object"&&Dt!==null&&typeof Dt.then=="function"&&Dt.then(k,ct)}catch(rt){ct(rt)}finally{J!==null&&lt.types!==null&&(J.types=lt.types),z.T=J}},ge.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ge.use=function(B){return z.H.use(B)},ge.useActionState=function(B,J,lt){return z.H.useActionState(B,J,lt)},ge.useCallback=function(B,J){return z.H.useCallback(B,J)},ge.useContext=function(B){return z.H.useContext(B)},ge.useDebugValue=function(){},ge.useDeferredValue=function(B,J){return z.H.useDeferredValue(B,J)},ge.useEffect=function(B,J){return z.H.useEffect(B,J)},ge.useEffectEvent=function(B){return z.H.useEffectEvent(B)},ge.useId=function(){return z.H.useId()},ge.useImperativeHandle=function(B,J,lt){return z.H.useImperativeHandle(B,J,lt)},ge.useInsertionEffect=function(B,J){return z.H.useInsertionEffect(B,J)},ge.useLayoutEffect=function(B,J){return z.H.useLayoutEffect(B,J)},ge.useMemo=function(B,J){return z.H.useMemo(B,J)},ge.useOptimistic=function(B,J){return z.H.useOptimistic(B,J)},ge.useReducer=function(B,J,lt){return z.H.useReducer(B,J,lt)},ge.useRef=function(B){return z.H.useRef(B)},ge.useState=function(B){return z.H.useState(B)},ge.useSyncExternalStore=function(B,J,lt){return z.H.useSyncExternalStore(B,J,lt)},ge.useTransition=function(){return z.H.useTransition()},ge.version="19.2.4",ge}var a_;function lp(){return a_||(a_=1,vh.exports=zS()),vh.exports}var mn=lp();const il=kv(mn);var xh={exports:{}},Yo={},yh={exports:{}},Sh={};var r_;function GS(){return r_||(r_=1,(function(s){function t(D,G){var j=D.length;D.push(G);t:for(;0<j;){var ct=j-1>>>1,ft=D[ct];if(0<o(ft,G))D[ct]=G,D[j]=ft,j=ct;else break t}}function n(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var G=D[0],j=D.pop();if(j!==G){D[0]=j;t:for(var ct=0,ft=D.length,B=ft>>>1;ct<B;){var J=2*(ct+1)-1,lt=D[J],Dt=J+1,wt=D[Dt];if(0>o(lt,j))Dt<ft&&0>o(wt,lt)?(D[ct]=wt,D[Dt]=j,ct=Dt):(D[ct]=lt,D[J]=j,ct=J);else if(Dt<ft&&0>o(wt,j))D[ct]=wt,D[Dt]=j,ct=Dt;else break t}}return G}function o(D,G){var j=D.sortIndex-G.sortIndex;return j!==0?j:D.id-G.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,E=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function L(D){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=D)a(d),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(d)}}function H(D){if(M=!1,L(D),!E)if(n(p)!==null)E=!0,k||(k=!0,Z());else{var G=n(d);G!==null&&Y(H,G.startTime-D)}}var k=!1,z=-1,K=5,R=-1;function w(){return y?!0:!(s.unstable_now()-R<K)}function X(){if(y=!1,k){var D=s.unstable_now();R=D;var G=!0;try{t:{E=!1,M&&(M=!1,P(z),z=-1),S=!0;var j=v;try{e:{for(L(D),g=n(p);g!==null&&!(g.expirationTime>D&&w());){var ct=g.callback;if(typeof ct=="function"){g.callback=null,v=g.priorityLevel;var ft=ct(g.expirationTime<=D);if(D=s.unstable_now(),typeof ft=="function"){g.callback=ft,L(D),G=!0;break e}g===n(p)&&a(p),L(D)}else a(p);g=n(p)}if(g!==null)G=!0;else{var B=n(d);B!==null&&Y(H,B.startTime-D),G=!1}}break t}finally{g=null,v=j,S=!1}G=void 0}}finally{G?Z():k=!1}}}var Z;if(typeof N=="function")Z=function(){N(X)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,et=tt.port2;tt.port1.onmessage=X,Z=function(){et.postMessage(null)}}else Z=function(){x(X,0)};function Y(D,G){z=x(function(){D(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(D){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var j=v;v=G;try{return D()}finally{v=j}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=v;v=D;try{return G()}finally{v=j}},s.unstable_scheduleCallback=function(D,G,j){var ct=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ct+j:ct):j=ct,D){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=j+ft,D={id:_++,callback:G,priorityLevel:D,startTime:j,expirationTime:ft,sortIndex:-1},j>ct?(D.sortIndex=j,t(d,D),n(p)===null&&D===n(d)&&(M?(P(z),z=-1):M=!0,Y(H,j-ct))):(D.sortIndex=ft,t(p,D),E||S||(E=!0,k||(k=!0,Z()))),D},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(D){var G=v;return function(){var j=v;v=G;try{return D.apply(this,arguments)}finally{v=j}}}})(Sh)),Sh}var s_;function HS(){return s_||(s_=1,yh.exports=GS()),yh.exports}var bh={exports:{}},Hn={};var o_;function VS(){if(o_)return Hn;o_=1;var s=lp();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Hn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(p,d,null,_)},Hn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Hn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Hn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Hn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Hn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Hn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Hn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Hn.requestFormReset=function(p){a.d.r(p)},Hn.unstable_batchedUpdates=function(p,d){return p(d)},Hn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Hn.version="19.2.4",Hn}var l_;function kS(){if(l_)return bh.exports;l_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bh.exports=VS(),bh.exports}var c_;function XS(){if(c_)return Yo;c_=1;var s=HS(),t=lp(),n=kS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var T=!1,I=h.child;I;){if(I===r){T=!0,r=h,l=m;break}if(I===l){T=!0,l=h,r=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===r){T=!0,r=m,l=h;break}if(I===l){T=!0,l=m,r=h;break}I=I.sibling}if(!T)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:et(e.type)||"Memo";case K:i=e._payload,e=e._init;try{return et(e(i))}catch{}}return null}var Y=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},ct=[],ft=-1;function B(e){return{current:e}}function J(e){0>ft||(e.current=ct[ft],ct[ft]=null,ft--)}function lt(e,i){ft++,ct[ft]=e.current,e.current=i}var Dt=B(null),wt=B(null),rt=B(null),pt=B(null);function Pt(e,i){switch(lt(rt,i),lt(wt,e),lt(Dt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?A0(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=A0(i),e=R0(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(Dt),lt(Dt,e)}function It(){J(Dt),J(wt),J(rt)}function Bt(e){e.memoizedState!==null&&lt(pt,e);var i=Dt.current,r=R0(i,e.type);i!==r&&(lt(wt,e),lt(Dt,r))}function zt(e){wt.current===e&&(J(Dt),J(wt)),pt.current===e&&(J(pt),Vo._currentValue=j)}var Te,re;function te(e){if(Te===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Te=i&&i[1]||"",re=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Te+e+re}var de=!1;function ee(e,i){if(!e||de)return"";de=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Nt=function(){throw Error()};if(Object.defineProperty(Nt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Nt,[])}catch(Mt){var vt=Mt}Reflect.construct(e,[],Nt)}else{try{Nt.call()}catch(Mt){vt=Mt}e.call(Nt.prototype)}}else{try{throw Error()}catch(Mt){vt=Mt}(Nt=e())&&typeof Nt.catch=="function"&&Nt.catch(function(){})}}catch(Mt){if(Mt&&vt&&typeof Mt.stack=="string")return[Mt.stack,vt.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),T=m[0],I=m[1];if(T&&I){var Q=T.split(`
`),gt=I.split(`
`);for(h=l=0;l<Q.length&&!Q[l].includes("DetermineComponentFrameRoot");)l++;for(;h<gt.length&&!gt[h].includes("DetermineComponentFrameRoot");)h++;if(l===Q.length||h===gt.length)for(l=Q.length-1,h=gt.length-1;1<=l&&0<=h&&Q[l]!==gt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(Q[l]!==gt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||Q[l]!==gt[h]){var Rt=`
`+Q[l].replace(" at new "," at ");return e.displayName&&Rt.includes("<anonymous>")&&(Rt=Rt.replace("<anonymous>",e.displayName)),Rt}while(1<=l&&0<=h);break}}}finally{de=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?te(r):""}function oe(e,i){switch(e.tag){case 26:case 27:case 5:return te(e.type);case 16:return te("Lazy");case 13:return e.child!==i&&i!==null?te("Suspense Fallback"):te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return ee(e.type,!1);case 11:return ee(e.type.render,!1);case 1:return ee(e.type,!0);case 31:return te("Activity");default:return""}}function $(e){try{var i="",r=null;do i+=oe(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var De=Object.prototype.hasOwnProperty,pe=s.unstable_scheduleCallback,ye=s.unstable_cancelCallback,Zt=s.unstable_shouldYield,W=s.unstable_requestPaint,C=s.unstable_now,it=s.unstable_getCurrentPriorityLevel,Tt=s.unstable_ImmediatePriority,Ut=s.unstable_UserBlockingPriority,bt=s.unstable_NormalPriority,Kt=s.unstable_LowPriority,Ft=s.unstable_IdlePriority,qt=s.log,Yt=s.unstable_setDisableYieldValue,Ot=null,b=null;function A(e){if(typeof qt=="function"&&Yt(e),b&&typeof b.setStrictMode=="function")try{b.setStrictMode(Ot,e)}catch{}}var U=Math.clz32?Math.clz32:V,O=Math.log,q=Math.LN2;function V(e){return e>>>=0,e===0?32:31-(O(e)/q|0)|0}var at=256,dt=262144,At=4194304;function xt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Et(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,T=e.pingedLanes;e=e.warmLanes;var I=l&134217727;return I!==0?(l=I&~m,l!==0?h=xt(l):(T&=I,T!==0?h=xt(T):r||(r=I&~e,r!==0&&(h=xt(r))))):(I=l&~m,I!==0?h=xt(I):T!==0?h=xt(T):r||(r=l&~e,r!==0&&(h=xt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Lt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function kt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ue(){var e=At;return At<<=1,(At&62914560)===0&&(At=4194304),e}function Gt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Se(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function si(e,i,r,l,h,m){var T=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var I=e.entanglements,Q=e.expirationTimes,gt=e.hiddenUpdates;for(r=T&~r;0<r;){var Rt=31-U(r),Nt=1<<Rt;I[Rt]=0,Q[Rt]=-1;var vt=gt[Rt];if(vt!==null)for(gt[Rt]=null,Rt=0;Rt<vt.length;Rt++){var Mt=vt[Rt];Mt!==null&&(Mt.lane&=-536870913)}r&=~Nt}l!==0&&st(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(T&~i))}function st(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-U(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Wt(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-U(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Ae(e,i){var r=i&-i;return r=(r&42)!==0?1:Ye(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ie(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gn(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:K0(e.type))}function Kn(e,i){var r=G.p;try{return G.p=e,i()}finally{G.p=r}}var Qn=Math.random().toString(36).slice(2),hn="__reactFiber$"+Qn,wn="__reactProps$"+Qn,wi="__reactContainer$"+Qn,Kr="__reactEvents$"+Qn,Qr="__reactListeners$"+Qn,ml="__reactHandles$"+Qn,no="__reactResources$"+Qn,gr="__reactMarker$"+Qn;function io(e){delete e[hn],delete e[wn],delete e[Kr],delete e[Qr],delete e[ml]}function Na(e){var i=e[hn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[wi]||r[hn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=O0(e);e!==null;){if(r=e[hn])return r;e=O0(e)}return i}e=r,r=e.parentNode}return null}function Oa(e){if(e=e[hn]||e[wi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function _r(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Pa(e){var i=e[no];return i||(i=e[no]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function F(e){e[gr]=!0}var ot=new Set,St={};function _t(e,i){ht(e,i),ht(e+"Capture",i)}function ht(e,i){for(St[e]=i,e=0;e<i.length;e++)ot.add(i[e])}var Ht=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},Vt={};function Qt(e){return De.call(Vt,e)?!0:De.call(jt,e)?!1:Ht.test(e)?Vt[e]=!0:(jt[e]=!0,!1)}function ne(e,i,r){if(Qt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function ce(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function ie(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ge(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sn(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){r=""+T,m.call(this,T)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(T){r=""+T},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function en(e){if(!e._valueTracker){var i=Ge(e)?"checked":"value";e._valueTracker=sn(e,i,""+e[i])}}function We(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Ge(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function se(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var He=/[\n"\\]/g;function me(e){return e.replace(He,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,r,l,h,m,T,I){e.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.type=T:e.removeAttribute("type"),i!=null?T==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):T!=="submit"&&T!=="reset"||e.removeAttribute("value"),i!=null?Dn(e,T,fe(i)):r!=null?Dn(e,T,fe(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),I!=null&&typeof I!="function"&&typeof I!="symbol"&&typeof I!="boolean"?e.name=""+fe(I):e.removeAttribute("name")}function ra(e,i,r,l,h,m,T,I){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){en(e);return}r=r!=null?""+fe(r):"",i=i!=null?""+fe(i):r,I||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=I?e.checked:!!l,e.defaultChecked=!!l,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(e.name=T),en(e)}function Dn(e,i,r){i==="number"&&se(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function vi(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function qe(e,i,r){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+fe(r):""}function Ln(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Y(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=fe(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),en(e)}function bn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function On(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Nn.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Jr(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&On(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&On(e,m,i[m])}function Ui(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gl(e){return Ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var pu=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $r=null,ts=null;function Tp(e){var i=Oa(e);if(i&&(e=i.stateNode)){var r=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[wn]||null;if(!h)throw Error(a(90));Un(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&We(l)}break t;case"textarea":qe(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&vi(e,!!r.multiple,i,!1)}}}var gu=!1;function Ap(e,i,r){if(gu)return e(i,r);gu=!0;try{var l=e(i);return l}finally{if(gu=!1,($r!==null||ts!==null)&&(ic(),$r&&(i=$r,e=ts,ts=$r=null,Tp(i),e)))for(i=0;i<e.length;i++)Tp(e[i])}}function ao(e,i){var r=e.stateNode;if(r===null)return null;var l=r[wn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(oa)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{_u=!1}var Ia=null,vu=null,_l=null;function Rp(){if(_l)return _l;var e,i=vu,r=i.length,l,h="value"in Ia?Ia.value:Ia.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var T=r-e;for(l=1;l<=T&&i[r-l]===h[m-l];l++);return _l=h.slice(e,1<l?1-l:void 0)}function vl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Cp(){return!1}function Jn(e){function i(r,l,h,m,T){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in e)e.hasOwnProperty(I)&&(r=e[I],this[I]=r?r(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?xl:Cp,this.isPropagationStopped=Cp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),i}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Jn(vr),so=g({},vr,{view:0,detail:0}),Fx=Jn(so),xu,yu,oo,Sl=g({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(xu=e.screenX-oo.screenX,yu=e.screenY-oo.screenY):yu=xu=0,oo=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:yu}}),wp=Jn(Sl),Bx=g({},Sl,{dataTransfer:0}),zx=Jn(Bx),Gx=g({},so,{relatedTarget:0}),Su=Jn(Gx),Hx=g({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=Jn(Hx),kx=g({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xx=Jn(kx),Wx=g({},vr,{data:0}),Up=Jn(Wx),Yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zx(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=jx[e])?!!i[e]:!1}function bu(){return Zx}var Kx=g({},so,{key:function(e){if(e.key){var i=Yx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qx=Jn(Kx),Jx=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dp=Jn(Jx),$x=g({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),ty=Jn($x),ey=g({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=Jn(ey),iy=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Jn(iy),ry=g({},vr,{newState:0,oldState:0}),sy=Jn(ry),oy=[9,13,27,32],Mu=oa&&"CompositionEvent"in window,lo=null;oa&&"documentMode"in document&&(lo=document.documentMode);var ly=oa&&"TextEvent"in window&&!lo,Lp=oa&&(!Mu||lo&&8<lo&&11>=lo),Np=" ",Op=!1;function Pp(e,i){switch(e){case"keyup":return oy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var es=!1;function cy(e,i){switch(e){case"compositionend":return Ip(i);case"keypress":return i.which!==32?null:(Op=!0,Np);case"textInput":return e=i.data,e===Np&&Op?null:e;default:return null}}function uy(e,i){if(es)return e==="compositionend"||!Mu&&Pp(e,i)?(e=Rp(),_l=vu=Ia=null,es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lp&&i.locale!=="ko"?null:i.data;default:return null}}var fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!fy[e.type]:i==="textarea"}function Bp(e,i,r,l){$r?ts?ts.push(l):ts=[l]:$r=l,i=uc(i,"onChange"),0<i.length&&(r=new yl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var co=null,uo=null;function hy(e){y0(e,0)}function bl(e){var i=_r(e);if(We(i))return e}function zp(e,i){if(e==="change")return i}var Gp=!1;if(oa){var Eu;if(oa){var Tu="oninput"in document;if(!Tu){var Hp=document.createElement("div");Hp.setAttribute("oninput","return;"),Tu=typeof Hp.oninput=="function"}Eu=Tu}else Eu=!1;Gp=Eu&&(!document.documentMode||9<document.documentMode)}function Vp(){co&&(co.detachEvent("onpropertychange",kp),uo=co=null)}function kp(e){if(e.propertyName==="value"&&bl(uo)){var i=[];Bp(i,uo,e,mu(e)),Ap(hy,i)}}function dy(e,i,r){e==="focusin"?(Vp(),co=i,uo=r,co.attachEvent("onpropertychange",kp)):e==="focusout"&&Vp()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(uo)}function my(e,i){if(e==="click")return bl(i)}function gy(e,i){if(e==="input"||e==="change")return bl(i)}function _y(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var oi=typeof Object.is=="function"?Object.is:_y;function fo(e,i){if(oi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!De.call(i,h)||!oi(e[h],i[h]))return!1}return!0}function Xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wp(e,i){var r=Xp(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Xp(r)}}function Yp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Yp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=se(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=se(e.document)}return i}function Au(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var vy=oa&&"documentMode"in document&&11>=document.documentMode,ns=null,Ru=null,ho=null,Cu=!1;function jp(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cu||ns==null||ns!==se(l)||(l=ns,"selectionStart"in l&&Au(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=uc(Ru,"onSelect"),0<l.length&&(i=new yl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=ns)))}function xr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var is={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},wu={},Zp={};oa&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function yr(e){if(wu[e])return wu[e];if(!is[e])return e;var i=is[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Zp)return wu[e]=i[r];return e}var Kp=yr("animationend"),Qp=yr("animationiteration"),Jp=yr("animationstart"),xy=yr("transitionrun"),yy=yr("transitionstart"),Sy=yr("transitioncancel"),$p=yr("transitionend"),tm=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function Di(e,i){tm.set(e,i),_t(i,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xi=[],as=0,Du=0;function El(){for(var e=as,i=Du=as=0;i<e;){var r=xi[i];xi[i++]=null;var l=xi[i];xi[i++]=null;var h=xi[i];xi[i++]=null;var m=xi[i];if(xi[i++]=null,l!==null&&h!==null){var T=l.pending;T===null?h.next=h:(h.next=T.next,T.next=h),l.pending=h}m!==0&&em(r,h,m)}}function Tl(e,i,r,l){xi[as++]=e,xi[as++]=i,xi[as++]=r,xi[as++]=l,Du|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lu(e,i,r,l){return Tl(e,i,r,l),Al(e)}function Sr(e,i){return Tl(e,null,null,i),Al(e)}function em(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-U(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Al(e){if(50<Po)throw Po=0,Vf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var rs={};function by(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,i,r,l){return new by(e,i,r,l)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,i){var r=e.alternate;return r===null?(r=li(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function nm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Rl(e,i,r,l,h,m){var T=0;if(l=e,typeof e=="function")Nu(e)&&(T=1);else if(typeof e=="string")T=RS(e,r,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=li(31,r,i,h),e.elementType=R,e.lanes=m,e;case M:return br(r.children,h,m,i);case y:T=8,h|=24;break;case x:return e=li(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case H:return e=li(13,r,i,h),e.elementType=H,e.lanes=m,e;case k:return e=li(19,r,i,h),e.elementType=k,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:T=10;break t;case P:T=9;break t;case L:T=11;break t;case z:T=14;break t;case K:T=16,l=null;break t}T=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=li(T,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function br(e,i,r,l){return e=li(7,e,l,i),e.lanes=r,e}function Ou(e,i,r){return e=li(6,e,null,i),e.lanes=r,e}function im(e){var i=li(18,null,null,0);return i.stateNode=e,i}function Pu(e,i,r){return i=li(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var am=new WeakMap;function yi(e,i){if(typeof e=="object"&&e!==null){var r=am.get(e);return r!==void 0?r:(i={value:e,source:i,stack:$(i)},am.set(e,i),i)}return{value:e,source:i,stack:$(i)}}var ss=[],os=0,Cl=null,po=0,Si=[],bi=0,Fa=null,Gi=1,Hi="";function ca(e,i){ss[os++]=po,ss[os++]=Cl,Cl=e,po=i}function rm(e,i,r){Si[bi++]=Gi,Si[bi++]=Hi,Si[bi++]=Fa,Fa=e;var l=Gi;e=Hi;var h=32-U(l)-1;l&=~(1<<h),r+=1;var m=32-U(i)+h;if(30<m){var T=h-h%5;m=(l&(1<<T)-1).toString(32),l>>=T,h-=T,Gi=1<<32-U(i)+h|r<<h|l,Hi=m+e}else Gi=1<<m|r<<h|l,Hi=e}function Iu(e){e.return!==null&&(ca(e,1),rm(e,1,0))}function Fu(e){for(;e===Cl;)Cl=ss[--os],ss[os]=null,po=ss[--os],ss[os]=null;for(;e===Fa;)Fa=Si[--bi],Si[bi]=null,Hi=Si[--bi],Si[bi]=null,Gi=Si[--bi],Si[bi]=null}function sm(e,i){Si[bi++]=Gi,Si[bi++]=Hi,Si[bi++]=Fa,Gi=i.id,Hi=i.overflow,Fa=e}var Pn=null,nn=null,Le=!1,Ba=null,Mi=!1,Bu=Error(a(519));function za(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(yi(i,e)),Bu}function om(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[hn]=e,i[wn]=l,r){case"dialog":Ce("cancel",i),Ce("close",i);break;case"iframe":case"object":case"embed":Ce("load",i);break;case"video":case"audio":for(r=0;r<Fo.length;r++)Ce(Fo[r],i);break;case"source":Ce("error",i);break;case"img":case"image":case"link":Ce("error",i),Ce("load",i);break;case"details":Ce("toggle",i);break;case"input":Ce("invalid",i),ra(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ce("invalid",i);break;case"textarea":Ce("invalid",i),Ln(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||E0(i.textContent,r)?(l.popover!=null&&(Ce("beforetoggle",i),Ce("toggle",i)),l.onScroll!=null&&Ce("scroll",i),l.onScrollEnd!=null&&Ce("scrollend",i),l.onClick!=null&&(i.onclick=sa),i=!0):i=!1,i||za(e,!0)}function lm(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:Pn=Pn.return}}function ls(e){if(e!==Pn)return!1;if(!Le)return lm(e),Le=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||ih(e.type,e.memoizedProps)),r=!r),r&&nn&&za(e),lm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=N0(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));nn=N0(e)}else i===27?(i=nn,$a(e.type)?(e=lh,lh=null,nn=e):nn=i):nn=Pn?Ti(e.stateNode.nextSibling):null;return!0}function Mr(){nn=Pn=null,Le=!1}function zu(){var e=Ba;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),Ba=null),e}function mo(e){Ba===null?Ba=[e]:Ba.push(e)}var Gu=B(null),Er=null,ua=null;function Ga(e,i,r){lt(Gu,i._currentValue),i._currentValue=r}function fa(e){e._currentValue=Gu.current,J(Gu)}function Hu(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function Vu(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var T=h.child;m=m.firstContext;t:for(;m!==null;){var I=m;m=h;for(var Q=0;Q<i.length;Q++)if(I.context===i[Q]){m.lanes|=r,I=m.alternate,I!==null&&(I.lanes|=r),Hu(m.return,r,e),l||(T=null);break t}m=I.next}}else if(h.tag===18){if(T=h.return,T===null)throw Error(a(341));T.lanes|=r,m=T.alternate,m!==null&&(m.lanes|=r),Hu(T,r,e),T=null}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===e){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}}function cs(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var T=h.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var I=h.type;oi(h.pendingProps.value,T.value)||(e!==null?e.push(I):e=[I])}}else if(h===pt.current){if(T=h.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}h=h.return}e!==null&&Vu(i,e,r,l),i.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){Er=e,ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return cm(Er,e)}function Ul(e,i){return Er===null&&Tr(e),cm(e,i)}function cm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ua===null){if(e===null)throw Error(a(308));ua=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ua=ua.next=i;return r}var My=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Ey=s.unstable_scheduleCallback,Ty=s.unstable_NormalPriority,_n={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new My,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&Ey(Ty,function(){e.controller.abort()})}var _o=null,Xu=0,us=0,fs=null;function Ay(e,i){if(_o===null){var r=_o=[];Xu=0,us=jf(),fs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Xu++,i.then(um,um),i}function um(){if(--Xu===0&&_o!==null){fs!==null&&(fs.status="fulfilled");var e=_o;_o=null,us=0,fs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Ry(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var fm=D.S;D.S=function(e,i){jg=C(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ay(e,i),fm!==null&&fm(e,i)};var Ar=B(null);function Wu(){var e=Ar.current;return e!==null?e:tn.pooledCache}function Dl(e,i){i===null?lt(Ar,Ar.current):lt(Ar,i.pool)}function hm(){var e=Wu();return e===null?null:{parent:_n._currentValue,pool:e}}var hs=Error(a(460)),Yu=Error(a(474)),Ll=Error(a(542)),Nl={then:function(){}};function dm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function pm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(sa,sa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e;default:if(typeof i.status=="string")i.then(sa,sa);else{if(e=tn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,gm(e),e}throw Cr=i,hs}}function Rr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Cr=r,hs):r}}var Cr=null;function mm(){if(Cr===null)throw Error(a(459));var e=Cr;return Cr=null,e}function gm(e){if(e===hs||e===Ll)throw Error(a(483))}var ds=null,vo=0;function Ol(e){var i=vo;return vo+=1,ds===null&&(ds=[]),pm(ds,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Pl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function _m(e){function i(ut,nt){if(e){var mt=ut.deletions;mt===null?(ut.deletions=[nt],ut.flags|=16):mt.push(nt)}}function r(ut,nt){if(!e)return null;for(;nt!==null;)i(ut,nt),nt=nt.sibling;return null}function l(ut){for(var nt=new Map;ut!==null;)ut.key!==null?nt.set(ut.key,ut):nt.set(ut.index,ut),ut=ut.sibling;return nt}function h(ut,nt){return ut=la(ut,nt),ut.index=0,ut.sibling=null,ut}function m(ut,nt,mt){return ut.index=mt,e?(mt=ut.alternate,mt!==null?(mt=mt.index,mt<nt?(ut.flags|=67108866,nt):mt):(ut.flags|=67108866,nt)):(ut.flags|=1048576,nt)}function T(ut){return e&&ut.alternate===null&&(ut.flags|=67108866),ut}function I(ut,nt,mt,Ct){return nt===null||nt.tag!==6?(nt=Ou(mt,ut.mode,Ct),nt.return=ut,nt):(nt=h(nt,mt),nt.return=ut,nt)}function Q(ut,nt,mt,Ct){var le=mt.type;return le===M?Rt(ut,nt,mt.props.children,Ct,mt.key):nt!==null&&(nt.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&Rr(le)===nt.type)?(nt=h(nt,mt.props),xo(nt,mt),nt.return=ut,nt):(nt=Rl(mt.type,mt.key,mt.props,null,ut.mode,Ct),xo(nt,mt),nt.return=ut,nt)}function gt(ut,nt,mt,Ct){return nt===null||nt.tag!==4||nt.stateNode.containerInfo!==mt.containerInfo||nt.stateNode.implementation!==mt.implementation?(nt=Pu(mt,ut.mode,Ct),nt.return=ut,nt):(nt=h(nt,mt.children||[]),nt.return=ut,nt)}function Rt(ut,nt,mt,Ct,le){return nt===null||nt.tag!==7?(nt=br(mt,ut.mode,Ct,le),nt.return=ut,nt):(nt=h(nt,mt),nt.return=ut,nt)}function Nt(ut,nt,mt){if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return nt=Ou(""+nt,ut.mode,mt),nt.return=ut,nt;if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return mt=Rl(nt.type,nt.key,nt.props,null,ut.mode,mt),xo(mt,nt),mt.return=ut,mt;case E:return nt=Pu(nt,ut.mode,mt),nt.return=ut,nt;case K:return nt=Rr(nt),Nt(ut,nt,mt)}if(Y(nt)||Z(nt))return nt=br(nt,ut.mode,mt,null),nt.return=ut,nt;if(typeof nt.then=="function")return Nt(ut,Ol(nt),mt);if(nt.$$typeof===N)return Nt(ut,Ul(ut,nt),mt);Pl(ut,nt)}return null}function vt(ut,nt,mt,Ct){var le=nt!==null?nt.key:null;if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return le!==null?null:I(ut,nt,""+mt,Ct);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return mt.key===le?Q(ut,nt,mt,Ct):null;case E:return mt.key===le?gt(ut,nt,mt,Ct):null;case K:return mt=Rr(mt),vt(ut,nt,mt,Ct)}if(Y(mt)||Z(mt))return le!==null?null:Rt(ut,nt,mt,Ct,null);if(typeof mt.then=="function")return vt(ut,nt,Ol(mt),Ct);if(mt.$$typeof===N)return vt(ut,nt,Ul(ut,mt),Ct);Pl(ut,mt)}return null}function Mt(ut,nt,mt,Ct,le){if(typeof Ct=="string"&&Ct!==""||typeof Ct=="number"||typeof Ct=="bigint")return ut=ut.get(mt)||null,I(nt,ut,""+Ct,le);if(typeof Ct=="object"&&Ct!==null){switch(Ct.$$typeof){case S:return ut=ut.get(Ct.key===null?mt:Ct.key)||null,Q(nt,ut,Ct,le);case E:return ut=ut.get(Ct.key===null?mt:Ct.key)||null,gt(nt,ut,Ct,le);case K:return Ct=Rr(Ct),Mt(ut,nt,mt,Ct,le)}if(Y(Ct)||Z(Ct))return ut=ut.get(mt)||null,Rt(nt,ut,Ct,le,null);if(typeof Ct.then=="function")return Mt(ut,nt,mt,Ol(Ct),le);if(Ct.$$typeof===N)return Mt(ut,nt,mt,Ul(nt,Ct),le);Pl(nt,Ct)}return null}function Jt(ut,nt,mt,Ct){for(var le=null,Fe=null,ae=nt,be=nt=0,Ue=null;ae!==null&&be<mt.length;be++){ae.index>be?(Ue=ae,ae=null):Ue=ae.sibling;var Be=vt(ut,ae,mt[be],Ct);if(Be===null){ae===null&&(ae=Ue);break}e&&ae&&Be.alternate===null&&i(ut,ae),nt=m(Be,nt,be),Fe===null?le=Be:Fe.sibling=Be,Fe=Be,ae=Ue}if(be===mt.length)return r(ut,ae),Le&&ca(ut,be),le;if(ae===null){for(;be<mt.length;be++)ae=Nt(ut,mt[be],Ct),ae!==null&&(nt=m(ae,nt,be),Fe===null?le=ae:Fe.sibling=ae,Fe=ae);return Le&&ca(ut,be),le}for(ae=l(ae);be<mt.length;be++)Ue=Mt(ae,ut,be,mt[be],Ct),Ue!==null&&(e&&Ue.alternate!==null&&ae.delete(Ue.key===null?be:Ue.key),nt=m(Ue,nt,be),Fe===null?le=Ue:Fe.sibling=Ue,Fe=Ue);return e&&ae.forEach(function(ar){return i(ut,ar)}),Le&&ca(ut,be),le}function he(ut,nt,mt,Ct){if(mt==null)throw Error(a(151));for(var le=null,Fe=null,ae=nt,be=nt=0,Ue=null,Be=mt.next();ae!==null&&!Be.done;be++,Be=mt.next()){ae.index>be?(Ue=ae,ae=null):Ue=ae.sibling;var ar=vt(ut,ae,Be.value,Ct);if(ar===null){ae===null&&(ae=Ue);break}e&&ae&&ar.alternate===null&&i(ut,ae),nt=m(ar,nt,be),Fe===null?le=ar:Fe.sibling=ar,Fe=ar,ae=Ue}if(Be.done)return r(ut,ae),Le&&ca(ut,be),le;if(ae===null){for(;!Be.done;be++,Be=mt.next())Be=Nt(ut,Be.value,Ct),Be!==null&&(nt=m(Be,nt,be),Fe===null?le=Be:Fe.sibling=Be,Fe=Be);return Le&&ca(ut,be),le}for(ae=l(ae);!Be.done;be++,Be=mt.next())Be=Mt(ae,ut,be,Be.value,Ct),Be!==null&&(e&&Be.alternate!==null&&ae.delete(Be.key===null?be:Be.key),nt=m(Be,nt,be),Fe===null?le=Be:Fe.sibling=Be,Fe=Be);return e&&ae.forEach(function(BS){return i(ut,BS)}),Le&&ca(ut,be),le}function $e(ut,nt,mt,Ct){if(typeof mt=="object"&&mt!==null&&mt.type===M&&mt.key===null&&(mt=mt.props.children),typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:t:{for(var le=mt.key;nt!==null;){if(nt.key===le){if(le=mt.type,le===M){if(nt.tag===7){r(ut,nt.sibling),Ct=h(nt,mt.props.children),Ct.return=ut,ut=Ct;break t}}else if(nt.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===K&&Rr(le)===nt.type){r(ut,nt.sibling),Ct=h(nt,mt.props),xo(Ct,mt),Ct.return=ut,ut=Ct;break t}r(ut,nt);break}else i(ut,nt);nt=nt.sibling}mt.type===M?(Ct=br(mt.props.children,ut.mode,Ct,mt.key),Ct.return=ut,ut=Ct):(Ct=Rl(mt.type,mt.key,mt.props,null,ut.mode,Ct),xo(Ct,mt),Ct.return=ut,ut=Ct)}return T(ut);case E:t:{for(le=mt.key;nt!==null;){if(nt.key===le)if(nt.tag===4&&nt.stateNode.containerInfo===mt.containerInfo&&nt.stateNode.implementation===mt.implementation){r(ut,nt.sibling),Ct=h(nt,mt.children||[]),Ct.return=ut,ut=Ct;break t}else{r(ut,nt);break}else i(ut,nt);nt=nt.sibling}Ct=Pu(mt,ut.mode,Ct),Ct.return=ut,ut=Ct}return T(ut);case K:return mt=Rr(mt),$e(ut,nt,mt,Ct)}if(Y(mt))return Jt(ut,nt,mt,Ct);if(Z(mt)){if(le=Z(mt),typeof le!="function")throw Error(a(150));return mt=le.call(mt),he(ut,nt,mt,Ct)}if(typeof mt.then=="function")return $e(ut,nt,Ol(mt),Ct);if(mt.$$typeof===N)return $e(ut,nt,Ul(ut,mt),Ct);Pl(ut,mt)}return typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint"?(mt=""+mt,nt!==null&&nt.tag===6?(r(ut,nt.sibling),Ct=h(nt,mt),Ct.return=ut,ut=Ct):(r(ut,nt),Ct=Ou(mt,ut.mode,Ct),Ct.return=ut,ut=Ct),T(ut)):r(ut,nt)}return function(ut,nt,mt,Ct){try{vo=0;var le=$e(ut,nt,mt,Ct);return ds=null,le}catch(ae){if(ae===hs||ae===Ll)throw ae;var Fe=li(29,ae,null,ut.mode);return Fe.lanes=Ct,Fe.return=ut,Fe}}}var wr=_m(!0),vm=_m(!1),Ha=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ve&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Al(e),em(e,null,r),i}return Tl(e,l,i,r),Al(e)}function yo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Wt(e,r)}}function Zu(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var T={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=T:m=m.next=T,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Ku=!1;function So(){if(Ku){var e=fs;if(e!==null)throw e}}function bo(e,i,r,l){Ku=!1;var h=e.updateQueue;Ha=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,I=h.shared.pending;if(I!==null){h.shared.pending=null;var Q=I,gt=Q.next;Q.next=null,T===null?m=gt:T.next=gt,T=Q;var Rt=e.alternate;Rt!==null&&(Rt=Rt.updateQueue,I=Rt.lastBaseUpdate,I!==T&&(I===null?Rt.firstBaseUpdate=gt:I.next=gt,Rt.lastBaseUpdate=Q))}if(m!==null){var Nt=h.baseState;T=0,Rt=gt=Q=null,I=m;do{var vt=I.lane&-536870913,Mt=vt!==I.lane;if(Mt?(we&vt)===vt:(l&vt)===vt){vt!==0&&vt===us&&(Ku=!0),Rt!==null&&(Rt=Rt.next={lane:0,tag:I.tag,payload:I.payload,callback:null,next:null});t:{var Jt=e,he=I;vt=i;var $e=r;switch(he.tag){case 1:if(Jt=he.payload,typeof Jt=="function"){Nt=Jt.call($e,Nt,vt);break t}Nt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=he.payload,vt=typeof Jt=="function"?Jt.call($e,Nt,vt):Jt,vt==null)break t;Nt=g({},Nt,vt);break t;case 2:Ha=!0}}vt=I.callback,vt!==null&&(e.flags|=64,Mt&&(e.flags|=8192),Mt=h.callbacks,Mt===null?h.callbacks=[vt]:Mt.push(vt))}else Mt={lane:vt,tag:I.tag,payload:I.payload,callback:I.callback,next:null},Rt===null?(gt=Rt=Mt,Q=Nt):Rt=Rt.next=Mt,T|=vt;if(I=I.next,I===null){if(I=h.shared.pending,I===null)break;Mt=I,I=Mt.next,Mt.next=null,h.lastBaseUpdate=Mt,h.shared.pending=null}}while(!0);Rt===null&&(Q=Nt),h.baseState=Q,h.firstBaseUpdate=gt,h.lastBaseUpdate=Rt,m===null&&(h.shared.lanes=0),ja|=T,e.lanes=T,e.memoizedState=Nt}}function xm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function ym(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)xm(r[e],i)}var ps=B(null),Il=B(0);function Sm(e,i){e=ya,lt(Il,e),lt(ps,i),ya=e|i.baseLanes}function Qu(){lt(Il,ya),lt(ps,ps.current)}function Ju(){ya=Il.current,J(ps),J(Il)}var ci=B(null),Ei=null;function Xa(e){var i=e.alternate;lt(dn,dn.current&1),lt(ci,e),Ei===null&&(i===null||ps.current!==null||i.memoizedState!==null)&&(Ei=e)}function $u(e){lt(dn,dn.current),lt(ci,e),Ei===null&&(Ei=e)}function bm(e){e.tag===22?(lt(dn,dn.current),lt(ci,e),Ei===null&&(Ei=e)):Wa()}function Wa(){lt(dn,dn.current),lt(ci,ci.current)}function ui(e){J(ci),Ei===e&&(Ei=null),J(dn)}var dn=B(0);function Fl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||sh(r)||oh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ha=0,ve=null,Qe=null,vn=null,Bl=!1,ms=!1,Ur=!1,zl=0,Mo=0,gs=null,Cy=0;function ln(){throw Error(a(321))}function tf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!oi(e[r],i[r]))return!1;return!0}function ef(e,i,r,l,h,m){return ha=m,ve=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,D.H=e===null||e.memoizedState===null?rg:_f,Ur=!1,m=r(l,h),Ur=!1,ms&&(m=Em(i,r,l,h)),Mm(e),m}function Mm(e){D.H=Ao;var i=Qe!==null&&Qe.next!==null;if(ha=0,vn=Qe=ve=null,Bl=!1,Mo=0,gs=null,i)throw Error(a(300));e===null||xn||(e=e.dependencies,e!==null&&wl(e)&&(xn=!0))}function Em(e,i,r,l){ve=e;var h=0;do{if(ms&&(gs=null),Mo=0,ms=!1,25<=h)throw Error(a(301));if(h+=1,vn=Qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}D.H=sg,m=i(r,l)}while(ms);return m}function wy(){var e=D.H,i=e.useState()[0];return i=typeof i.then=="function"?Eo(i):i,e=e.useState()[0],(Qe!==null?Qe.memoizedState:null)!==e&&(ve.flags|=1024),i}function nf(){var e=zl!==0;return zl=0,e}function af(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function rf(e){if(Bl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bl=!1}ha=0,vn=Qe=ve=null,ms=!1,Mo=zl=0,gs=null}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?ve.memoizedState=vn=e:vn=vn.next=e,vn}function pn(){if(Qe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Qe.next;var i=vn===null?ve.memoizedState:vn.next;if(i!==null)vn=i,Qe=e;else{if(e===null)throw ve.alternate===null?Error(a(467)):Error(a(310));Qe=e,e={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},vn===null?ve.memoizedState=vn=e:vn=vn.next=e}return vn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var i=Mo;return Mo+=1,gs===null&&(gs=[]),e=pm(gs,e,i),i=ve,(vn===null?i.memoizedState:vn.next)===null&&(i=i.alternate,D.H=i===null||i.memoizedState===null?rg:_f),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===N)return In(e)}throw Error(a(438,String(e)))}function sf(e){var i=null,r=ve.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ve.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Gl(),ve.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=w;return i.index++,r}function da(e,i){return typeof i=="function"?i(e):i}function Vl(e){var i=pn();return of(i,Qe,e)}function of(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var I=T=null,Q=null,gt=i,Rt=!1;do{var Nt=gt.lane&-536870913;if(Nt!==gt.lane?(we&Nt)===Nt:(ha&Nt)===Nt){var vt=gt.revertLane;if(vt===0)Q!==null&&(Q=Q.next={lane:0,revertLane:0,gesture:null,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null}),Nt===us&&(Rt=!0);else if((ha&vt)===vt){gt=gt.next,vt===us&&(Rt=!0);continue}else Nt={lane:0,revertLane:gt.revertLane,gesture:null,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null},Q===null?(I=Q=Nt,T=m):Q=Q.next=Nt,ve.lanes|=vt,ja|=vt;Nt=gt.action,Ur&&r(m,Nt),m=gt.hasEagerState?gt.eagerState:r(m,Nt)}else vt={lane:Nt,revertLane:gt.revertLane,gesture:gt.gesture,action:gt.action,hasEagerState:gt.hasEagerState,eagerState:gt.eagerState,next:null},Q===null?(I=Q=vt,T=m):Q=Q.next=vt,ve.lanes|=Nt,ja|=Nt;gt=gt.next}while(gt!==null&&gt!==i);if(Q===null?T=m:Q.next=I,!oi(m,e.memoizedState)&&(xn=!0,Rt&&(r=fs,r!==null)))throw r;e.memoizedState=m,e.baseState=T,e.baseQueue=Q,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lf(e){var i=pn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var T=h=h.next;do m=e(m,T.action),T=T.next;while(T!==h);oi(m,i.memoizedState)||(xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function Tm(e,i,r){var l=ve,h=pn(),m=Le;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var T=!oi((Qe||h).memoizedState,r);if(T&&(h.memoizedState=r,xn=!0),h=h.queue,ff(Cm.bind(null,l,h,e),[e]),h.getSnapshot!==i||T||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,_s(9,{destroy:void 0},Rm.bind(null,l,h,r,i),null),tn===null)throw Error(a(349));m||(ha&127)!==0||Am(l,i,r)}return r}function Am(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ve.updateQueue,i===null?(i=Gl(),ve.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Rm(e,i,r,l){i.value=r,i.getSnapshot=l,wm(i)&&Um(e)}function Cm(e,i,r){return r(function(){wm(i)&&Um(e)})}function wm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!oi(e,r)}catch{return!0}}function Um(e){var i=Sr(e,2);i!==null&&ii(i,e,2)}function cf(e){var i=qn();if(typeof e=="function"){var r=e;if(e=r(),Ur){A(!0);try{r()}finally{A(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},i}function Dm(e,i,r,l){return e.baseState=r,of(e,Qe,typeof l=="function"?l:da)}function Uy(e,i,r,l,h){if(Wl(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){m.listeners.push(T)}};D.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,Lm(i,m)):(m.next=r.next,i.pending=r.next=m)}}function Lm(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=D.T,T={};D.T=T;try{var I=r(h,l),Q=D.S;Q!==null&&Q(T,I),Nm(e,i,I)}catch(gt){uf(e,i,gt)}finally{m!==null&&T.types!==null&&(m.types=T.types),D.T=m}}else try{m=r(h,l),Nm(e,i,m)}catch(gt){uf(e,i,gt)}}function Nm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Om(e,i,l)},function(l){return uf(e,i,l)}):Om(e,i,r)}function Om(e,i,r){i.status="fulfilled",i.value=r,Pm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,Lm(e,r)))}function uf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,Pm(i),i=i.next;while(i!==l)}e.action=null}function Pm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Im(e,i){return i}function Fm(e,i){if(Le){var r=tn.formState;if(r!==null){t:{var l=ve;if(Le){if(nn){e:{for(var h=nn,m=Mi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Ti(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){nn=Ti(h.nextSibling),l=h.data==="F!";break t}}za(l)}l=!1}l&&(i=r[0])}}return r=qn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},r.queue=l,r=ng.bind(null,ve,l),l.dispatch=r,l=cf(!1),m=gf.bind(null,ve,!1,l.queue),l=qn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=Uy.bind(null,ve,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function Bm(e){var i=pn();return zm(i,Qe,e)}function zm(e,i,r){if(i=of(e,i,Im)[0],e=Vl(da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Eo(i)}catch(T){throw T===hs?Ll:T}else l=i;i=pn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ve.flags|=2048,_s(9,{destroy:void 0},Dy.bind(null,h,r),null)),[l,m,e]}function Dy(e,i){e.action=i}function Gm(e){var i=pn(),r=Qe;if(r!==null)return zm(i,r,e);pn(),i=i.memoizedState,r=pn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function _s(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=ve.updateQueue,i===null&&(i=Gl(),ve.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Hm(){return pn().memoizedState}function kl(e,i,r,l){var h=qn();ve.flags|=e,h.memoizedState=_s(1|i,{destroy:void 0},r,l===void 0?null:l)}function Xl(e,i,r,l){var h=pn();l=l===void 0?null:l;var m=h.memoizedState.inst;Qe!==null&&l!==null&&tf(l,Qe.memoizedState.deps)?h.memoizedState=_s(i,m,r,l):(ve.flags|=e,h.memoizedState=_s(1|i,m,r,l))}function Vm(e,i){kl(8390656,8,e,i)}function ff(e,i){Xl(2048,8,e,i)}function Ly(e){ve.flags|=4;var i=ve.updateQueue;if(i===null)i=Gl(),ve.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function km(e){var i=pn().memoizedState;return Ly({ref:i,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Xm(e,i){return Xl(4,2,e,i)}function Wm(e,i){return Xl(4,4,e,i)}function Ym(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function qm(e,i,r){r=r!=null?r.concat([e]):null,Xl(4,4,Ym.bind(null,i,e),r)}function hf(){}function jm(e,i){var r=pn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&tf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Zm(e,i){var r=pn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&tf(i,l[1]))return l[0];if(l=e(),Ur){A(!0);try{e()}finally{A(!1)}}return r.memoizedState=[l,i],l}function df(e,i,r){return r===void 0||(ha&1073741824)!==0&&(we&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Kg(),ve.lanes|=e,ja|=e,r)}function Km(e,i,r,l){return oi(r,i)?r:ps.current!==null?(e=df(e,r,l),oi(e,i)||(xn=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(we&261930)===0?(xn=!0,e.memoizedState=r):(e=Kg(),ve.lanes|=e,ja|=e,i)}function Qm(e,i,r,l,h){var m=G.p;G.p=m!==0&&8>m?m:8;var T=D.T,I={};D.T=I,gf(e,!1,i,r);try{var Q=h(),gt=D.S;if(gt!==null&&gt(I,Q),Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var Rt=Ry(Q,l);To(e,i,Rt,di(e))}else To(e,i,l,di(e))}catch(Nt){To(e,i,{then:function(){},status:"rejected",reason:Nt},di())}finally{G.p=m,T!==null&&I.types!==null&&(T.types=I.types),D.T=T}}function Ny(){}function pf(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=Jm(e).queue;Qm(e,h,i,j,r===null?Ny:function(){return $m(e),r(l)})}function Jm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:j},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function $m(e){var i=Jm(e);i.next===null&&(i=e.alternate.memoizedState),To(e,i.next.queue,{},di())}function mf(){return In(Vo)}function tg(){return pn().memoizedState}function eg(){return pn().memoizedState}function Oy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=di();e=Va(r);var l=ka(i,e,r);l!==null&&(ii(l,i,r),yo(l,i,r)),i={cache:ku()},e.payload=i;return}i=i.return}}function Py(e,i,r){var l=di();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wl(e)?ig(i,r):(r=Lu(e,i,r,l),r!==null&&(ii(r,e,l),ag(r,i,l)))}function ng(e,i,r){var l=di();To(e,i,r,l)}function To(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wl(e))ig(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,I=m(T,r);if(h.hasEagerState=!0,h.eagerState=I,oi(I,T))return Tl(e,i,h,0),tn===null&&El(),!1}catch{}if(r=Lu(e,i,h,l),r!==null)return ii(r,e,l),ag(r,i,l),!0}return!1}function gf(e,i,r,l){if(l={lane:2,revertLane:jf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Wl(e)){if(i)throw Error(a(479))}else i=Lu(e,r,l,2),i!==null&&ii(i,e,2)}function Wl(e){var i=e.alternate;return e===ve||i!==null&&i===ve}function ig(e,i){ms=Bl=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function ag(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Wt(e,r)}}var Ao={readContext:In,use:Hl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};Ao.useEffectEvent=ln;var rg={readContext:In,use:Hl,useCallback:function(e,i){return qn().memoizedState=[e,i===void 0?null:i],e},useContext:In,useEffect:Vm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,kl(4194308,4,Ym.bind(null,i,e),r)},useLayoutEffect:function(e,i){return kl(4194308,4,e,i)},useInsertionEffect:function(e,i){kl(4,2,e,i)},useMemo:function(e,i){var r=qn();i=i===void 0?null:i;var l=e();if(Ur){A(!0);try{e()}finally{A(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=qn();if(r!==void 0){var h=r(i);if(Ur){A(!0);try{r(i)}finally{A(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=Py.bind(null,ve,e),[l.memoizedState,e]},useRef:function(e){var i=qn();return e={current:e},i.memoizedState=e},useState:function(e){e=cf(e);var i=e.queue,r=ng.bind(null,ve,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:hf,useDeferredValue:function(e,i){var r=qn();return df(r,e,i)},useTransition:function(){var e=cf(!1);return e=Qm.bind(null,ve,e.queue,!0,!1),qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=ve,h=qn();if(Le){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),tn===null)throw Error(a(349));(we&127)!==0||Am(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Vm(Cm.bind(null,l,m,e),[e]),l.flags|=2048,_s(9,{destroy:void 0},Rm.bind(null,l,m,r,i),null),r},useId:function(){var e=qn(),i=tn.identifierPrefix;if(Le){var r=Hi,l=Gi;r=(l&~(1<<32-U(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=zl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Cy++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:mf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e){var i=qn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=gf.bind(null,ve,!0,r),r.dispatch=i,[e,i]},useMemoCache:sf,useCacheRefresh:function(){return qn().memoizedState=Oy.bind(null,ve)},useEffectEvent:function(e){var i=qn(),r={impl:e};return i.memoizedState=r,function(){if((Ve&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},_f={readContext:In,use:Hl,useCallback:jm,useContext:In,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Vl,useRef:Hm,useState:function(){return Vl(da)},useDebugValue:hf,useDeferredValue:function(e,i){var r=pn();return Km(r,Qe.memoizedState,e,i)},useTransition:function(){var e=Vl(da)[0],i=pn().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:mf,useFormState:Bm,useActionState:Bm,useOptimistic:function(e,i){var r=pn();return Dm(r,Qe,e,i)},useMemoCache:sf,useCacheRefresh:eg};_f.useEffectEvent=km;var sg={readContext:In,use:Hl,useCallback:jm,useContext:In,useEffect:ff,useImperativeHandle:qm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:lf,useRef:Hm,useState:function(){return lf(da)},useDebugValue:hf,useDeferredValue:function(e,i){var r=pn();return Qe===null?df(r,e,i):Km(r,Qe.memoizedState,e,i)},useTransition:function(){var e=lf(da)[0],i=pn().memoizedState;return[typeof e=="boolean"?e:Eo(e),i]},useSyncExternalStore:Tm,useId:tg,useHostTransitionStatus:mf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,i){var r=pn();return Qe!==null?Dm(r,Qe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:sf,useCacheRefresh:eg};sg.useEffectEvent=km;function vf(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=di(),h=Va(l);h.payload=i,r!=null&&(h.callback=r),i=ka(e,h,l),i!==null&&(ii(i,e,l),yo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=di(),h=Va(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=ka(e,h,l),i!==null&&(ii(i,e,l),yo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=di(),l=Va(r);l.tag=2,i!=null&&(l.callback=i),i=ka(e,l,r),i!==null&&(ii(i,e,r),yo(i,e,r))}};function og(e,i,r,l,h,m,T){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,T):i.prototype&&i.prototype.isPureReactComponent?!fo(r,l)||!fo(h,m):!0}function lg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Dr(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function cg(e){Ml(e)}function ug(e){console.error(e)}function fg(e){Ml(e)}function Yl(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function hg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function yf(e,i,r){return r=Va(r),r.tag=3,r.payload={element:null},r.callback=function(){Yl(e,i)},r}function dg(e){return e=Va(e),e.tag=3,e}function pg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){hg(i,r,l)}}var T=r.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(e.callback=function(){hg(i,r,l),typeof h!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var I=l.stack;this.componentDidCatch(l.value,{componentStack:I!==null?I:""})})}function Iy(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&cs(i,r,h,!0),r=ci.current,r!==null){switch(r.tag){case 31:case 13:return Ei===null?ac():r.alternate===null&&cn===0&&(cn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===Nl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Wf(e,l,h)),!1;case 22:return r.flags|=65536,l===Nl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Wf(e,l,h)),!1}throw Error(a(435,r.tag))}return Wf(e,l,h),ac(),!1}if(Le)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Bu&&(e=Error(a(422),{cause:l}),mo(yi(e,r)))):(l!==Bu&&(i=Error(a(423),{cause:l}),mo(yi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=yi(l,r),h=yf(e.stateNode,l,h),Zu(e,h),cn!==4&&(cn=2)),!1;var m=Error(a(520),{cause:l});if(m=yi(m,r),Oo===null?Oo=[m]:Oo.push(m),cn!==4&&(cn=2),i===null)return!0;l=yi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=yf(r.stateNode,l,e),Zu(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Za===null||!Za.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=dg(h),pg(h,e,r,l),Zu(r,h),!1}r=r.return}while(r!==null);return!1}var Sf=Error(a(461)),xn=!1;function Fn(e,i,r,l){i.child=e===null?vm(i,null,r,l):wr(i,e.child,r,l)}function mg(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var T={};for(var I in l)I!=="ref"&&(T[I]=l[I])}else T=l;return Tr(i),l=ef(e,i,r,T,m,h),I=nf(),e!==null&&!xn?(af(e,i,h),pa(e,i,h)):(Le&&I&&Iu(i),i.flags|=1,Fn(e,i,l,h),i.child)}function gg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!Nu(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,_g(e,i,m,l,h)):(e=Rl(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!wf(e,h)){var T=m.memoizedProps;if(r=r.compare,r=r!==null?r:fo,r(T,l)&&e.ref===i.ref)return pa(e,i,h)}return i.flags|=1,e=la(m,l),e.ref=i.ref,e.return=i,i.child=e}function _g(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(fo(m,l)&&e.ref===i.ref)if(xn=!1,i.pendingProps=l=m,wf(e,h))(e.flags&131072)!==0&&(xn=!0);else return i.lanes=e.lanes,pa(e,i,h)}return bf(e,i,r,l,h)}function vg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return xg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(i,m!==null?m.cachePool:null),m!==null?Sm(i,m):Qu(),bm(i);else return l=i.lanes=536870912,xg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Dl(i,m.cachePool),Sm(i,m),Wa(),i.memoizedState=null):(e!==null&&Dl(i,null),Qu(),Wa());return Fn(e,i,h,r),i.child}function Ro(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function xg(e,i,r,l,h){var m=Wu();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Dl(i,null),Qu(),bm(i),e!==null&&cs(e,i,l,!0),i.childLanes=h,null}function ql(e,i){return i=Zl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function yg(e,i,r){return wr(i,e.child,null,r),e=ql(i,i.pendingProps),e.flags|=2,ui(i),i.memoizedState=null,e}function Fy(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Le){if(l.mode==="hidden")return e=ql(i,l),i.lanes=536870912,Ro(null,e);if($u(i),(e=nn)?(e=L0(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=im(e),r.return=i,i.child=r,Pn=i,nn=null)):e=null,e===null)throw za(i);return i.lanes=536870912,null}return ql(i,l)}var m=e.memoizedState;if(m!==null){var T=m.dehydrated;if($u(i),h)if(i.flags&256)i.flags&=-257,i=yg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(xn||cs(e,i,r,!1),h=(r&e.childLanes)!==0,xn||h){if(l=tn,l!==null&&(T=Ae(l,r),T!==0&&T!==m.retryLane))throw m.retryLane=T,Sr(e,T),ii(l,e,T),Sf;ac(),i=yg(e,i,r)}else e=m.treeContext,nn=Ti(T.nextSibling),Pn=i,Le=!0,Ba=null,Mi=!1,e!==null&&sm(i,e),i=ql(i,l),i.flags|=4096;return i}return e=la(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function jl(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function bf(e,i,r,l,h){return Tr(i),r=ef(e,i,r,l,void 0,h),l=nf(),e!==null&&!xn?(af(e,i,h),pa(e,i,h)):(Le&&l&&Iu(i),i.flags|=1,Fn(e,i,r,h),i.child)}function Sg(e,i,r,l,h,m){return Tr(i),i.updateQueue=null,r=Em(i,l,r,h),Mm(e),l=nf(),e!==null&&!xn?(af(e,i,m),pa(e,i,m)):(Le&&l&&Iu(i),i.flags|=1,Fn(e,i,r,m),i.child)}function bg(e,i,r,l,h){if(Tr(i),i.stateNode===null){var m=rs,T=r.contextType;typeof T=="object"&&T!==null&&(m=In(T)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=xf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},qu(i),T=r.contextType,m.context=typeof T=="object"&&T!==null?In(T):rs,m.state=i.memoizedState,T=r.getDerivedStateFromProps,typeof T=="function"&&(vf(i,r,T,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(T=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),T!==m.state&&xf.enqueueReplaceState(m,m.state,null),bo(i,l,m,h),So(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var I=i.memoizedProps,Q=Dr(r,I);m.props=Q;var gt=m.context,Rt=r.contextType;T=rs,typeof Rt=="object"&&Rt!==null&&(T=In(Rt));var Nt=r.getDerivedStateFromProps;Rt=typeof Nt=="function"||typeof m.getSnapshotBeforeUpdate=="function",I=i.pendingProps!==I,Rt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(I||gt!==T)&&lg(i,m,l,T),Ha=!1;var vt=i.memoizedState;m.state=vt,bo(i,l,m,h),So(),gt=i.memoizedState,I||vt!==gt||Ha?(typeof Nt=="function"&&(vf(i,r,Nt,l),gt=i.memoizedState),(Q=Ha||og(i,r,Q,l,vt,gt,T))?(Rt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=gt),m.props=l,m.state=gt,m.context=T,l=Q):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,ju(e,i),T=i.memoizedProps,Rt=Dr(r,T),m.props=Rt,Nt=i.pendingProps,vt=m.context,gt=r.contextType,Q=rs,typeof gt=="object"&&gt!==null&&(Q=In(gt)),I=r.getDerivedStateFromProps,(gt=typeof I=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(T!==Nt||vt!==Q)&&lg(i,m,l,Q),Ha=!1,vt=i.memoizedState,m.state=vt,bo(i,l,m,h),So();var Mt=i.memoizedState;T!==Nt||vt!==Mt||Ha||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof I=="function"&&(vf(i,r,I,l),Mt=i.memoizedState),(Rt=Ha||og(i,r,Rt,l,vt,Mt,Q)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(gt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Mt,Q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Mt,Q)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Mt),m.props=l,m.state=Mt,m.context=Q,l=Rt):(typeof m.componentDidUpdate!="function"||T===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||T===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,jl(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=wr(i,e.child,null,h),i.child=wr(i,null,r,h)):Fn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=pa(e,i,h),e}function Mg(e,i,r,l){return Mr(),i.flags|=256,Fn(e,i,r,l),i.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(e){return{baseLanes:e,cachePool:hm()}}function Tf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=hi),e}function Eg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,T;if((T=m)||(T=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),T&&(h=!0,i.flags&=-129),T=(i.flags&32)!==0,i.flags&=-33,e===null){if(Le){if(h?Xa(i):Wa(),(e=nn)?(e=L0(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=im(e),r.return=i,i.child=r,Pn=i,nn=null)):e=null,e===null)throw za(i);return oh(e)?i.lanes=32:i.lanes=536870912,null}var I=l.children;return l=l.fallback,h?(Wa(),h=i.mode,I=Zl({mode:"hidden",children:I},h),l=br(l,h,r,null),I.return=i,l.return=i,I.sibling=l,i.child=I,l=i.child,l.memoizedState=Ef(r),l.childLanes=Tf(e,T,r),i.memoizedState=Mf,Ro(null,l)):(Xa(i),Af(i,I))}var Q=e.memoizedState;if(Q!==null&&(I=Q.dehydrated,I!==null)){if(m)i.flags&256?(Xa(i),i.flags&=-257,i=Rf(e,i,r)):i.memoizedState!==null?(Wa(),i.child=e.child,i.flags|=128,i=null):(Wa(),I=l.fallback,h=i.mode,l=Zl({mode:"visible",children:l.children},h),I=br(I,h,r,null),I.flags|=2,l.return=i,I.return=i,l.sibling=I,i.child=l,wr(i,e.child,null,r),l=i.child,l.memoizedState=Ef(r),l.childLanes=Tf(e,T,r),i.memoizedState=Mf,i=Ro(null,l));else if(Xa(i),oh(I)){if(T=I.nextSibling&&I.nextSibling.dataset,T)var gt=T.dgst;T=gt,l=Error(a(419)),l.stack="",l.digest=T,mo({value:l,source:null,stack:null}),i=Rf(e,i,r)}else if(xn||cs(e,i,r,!1),T=(r&e.childLanes)!==0,xn||T){if(T=tn,T!==null&&(l=Ae(T,r),l!==0&&l!==Q.retryLane))throw Q.retryLane=l,Sr(e,l),ii(T,e,l),Sf;sh(I)||ac(),i=Rf(e,i,r)}else sh(I)?(i.flags|=192,i.child=e.child,i=null):(e=Q.treeContext,nn=Ti(I.nextSibling),Pn=i,Le=!0,Ba=null,Mi=!1,e!==null&&sm(i,e),i=Af(i,l.children),i.flags|=4096);return i}return h?(Wa(),I=l.fallback,h=i.mode,Q=e.child,gt=Q.sibling,l=la(Q,{mode:"hidden",children:l.children}),l.subtreeFlags=Q.subtreeFlags&65011712,gt!==null?I=la(gt,I):(I=br(I,h,r,null),I.flags|=2),I.return=i,l.return=i,l.sibling=I,i.child=l,Ro(null,l),l=i.child,I=e.child.memoizedState,I===null?I=Ef(r):(h=I.cachePool,h!==null?(Q=_n._currentValue,h=h.parent!==Q?{parent:Q,pool:Q}:h):h=hm(),I={baseLanes:I.baseLanes|r,cachePool:h}),l.memoizedState=I,l.childLanes=Tf(e,T,r),i.memoizedState=Mf,Ro(e.child,l)):(Xa(i),r=e.child,e=r.sibling,r=la(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(T=i.deletions,T===null?(i.deletions=[e],i.flags|=16):T.push(e)),i.child=r,i.memoizedState=null,r)}function Af(e,i){return i=Zl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zl(e,i){return e=li(22,e,null,i),e.lanes=0,e}function Rf(e,i,r){return wr(i,e.child,null,r),e=Af(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Tg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Hu(e.return,i,r)}function Cf(e,i,r,l,h,m){var T=e.memoizedState;T===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(T.isBackwards=i,T.rendering=null,T.renderingStartTime=0,T.last=l,T.tail=r,T.tailMode=h,T.treeForkCount=m)}function Ag(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var T=dn.current,I=(T&2)!==0;if(I?(T=T&1|2,i.flags|=128):T&=1,lt(dn,T),Fn(e,i,l,r),l=Le?po:0,!I&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tg(e,r,i);else if(e.tag===19)Tg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Fl(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Cf(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Fl(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Cf(i,!0,r,null,m,l);break;case"together":Cf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function pa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ja|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(cs(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=la(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=la(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function wf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function By(e,i,r){switch(i.tag){case 3:Pt(i,i.stateNode.containerInfo),Ga(i,_n,e.memoizedState.cache),Mr();break;case 27:case 5:Bt(i);break;case 4:Pt(i,i.stateNode.containerInfo);break;case 10:Ga(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,$u(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Xa(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Eg(e,i,r):(Xa(i),e=pa(e,i,r),e!==null?e.sibling:null);Xa(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(cs(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Ag(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),lt(dn,dn.current),l)break;return null;case 22:return i.lanes=0,vg(e,i,r,i.pendingProps);case 24:Ga(i,_n,e.memoizedState.cache)}return pa(e,i,r)}function Rg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)xn=!0;else{if(!wf(e,r)&&(i.flags&128)===0)return xn=!1,By(e,i,r);xn=(e.flags&131072)!==0}else xn=!1,Le&&(i.flags&1048576)!==0&&rm(i,po,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Rr(i.elementType),i.type=e,typeof e=="function")Nu(e)?(l=Dr(e,l),i.tag=1,i=bg(null,i,e,l,r)):(i.tag=0,i=bf(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===L){i.tag=11,i=mg(null,i,e,l,r);break t}else if(h===z){i.tag=14,i=gg(null,i,e,l,r);break t}}throw i=et(e)||e,Error(a(306,i,""))}}return i;case 0:return bf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=Dr(l,i.pendingProps),bg(e,i,l,h,r);case 3:t:{if(Pt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,ju(e,i),bo(i,l,null,r);var T=i.memoizedState;if(l=T.cache,Ga(i,_n,l),l!==m.cache&&Vu(i,[_n],r,!0),So(),l=T.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:T.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Mg(e,i,l,r);break t}else if(l!==h){h=yi(Error(a(424)),i),mo(h),i=Mg(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,nn=Ti(e.firstChild),Pn=i,Le=!0,Ba=null,Mi=!0,r=vm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Mr(),l===h){i=pa(e,i,r);break t}Fn(e,i,l,r)}i=i.child}return i;case 26:return jl(e,i),e===null?(r=B0(i.type,null,i.pendingProps,null))?i.memoizedState=r:Le||(r=i.type,e=i.pendingProps,l=fc(rt.current).createElement(r),l[hn]=i,l[wn]=e,Bn(l,r,e),F(l),i.stateNode=l):i.memoizedState=B0(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Bt(i),e===null&&Le&&(l=i.stateNode=P0(i.type,i.pendingProps,rt.current),Pn=i,Mi=!0,h=nn,$a(i.type)?(lh=h,nn=Ti(l.firstChild)):nn=h),Fn(e,i,i.pendingProps.children,r),jl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Le&&((h=l=nn)&&(l=pS(l,i.type,i.pendingProps,Mi),l!==null?(i.stateNode=l,Pn=i,nn=Ti(l.firstChild),Mi=!1,h=!0):h=!1),h||za(i)),Bt(i),h=i.type,m=i.pendingProps,T=e!==null?e.memoizedProps:null,l=m.children,ih(h,m)?l=null:T!==null&&ih(h,T)&&(i.flags|=32),i.memoizedState!==null&&(h=ef(e,i,wy,null,null,r),Vo._currentValue=h),jl(e,i),Fn(e,i,l,r),i.child;case 6:return e===null&&Le&&((e=r=nn)&&(r=mS(r,i.pendingProps,Mi),r!==null?(i.stateNode=r,Pn=i,nn=null,e=!0):e=!1),e||za(i)),null;case 13:return Eg(e,i,r);case 4:return Pt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=wr(i,null,l,r):Fn(e,i,l,r),i.child;case 11:return mg(e,i,i.type,i.pendingProps,r);case 7:return Fn(e,i,i.pendingProps,r),i.child;case 8:return Fn(e,i,i.pendingProps.children,r),i.child;case 12:return Fn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Ga(i,i.type,l.value),Fn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Tr(i),h=In(h),l=l(h),i.flags|=1,Fn(e,i,l,r),i.child;case 14:return gg(e,i,i.type,i.pendingProps,r);case 15:return _g(e,i,i.type,i.pendingProps,r);case 19:return Ag(e,i,r);case 31:return Fy(e,i,r);case 22:return vg(e,i,r,i.pendingProps);case 24:return Tr(i),l=In(_n),e===null?(h=Wu(),h===null&&(h=tn,m=ku(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},qu(i),Ga(i,_n,h)):((e.lanes&r)!==0&&(ju(e,i),bo(i,null,null,r),So()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ga(i,_n,l)):(l=m.cache,Ga(i,_n,l),l!==h.cache&&Vu(i,[_n],r,!0))),Fn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ma(e){e.flags|=4}function Uf(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(t0())e.flags|=8192;else throw Cr=Nl,Yu}else e.flags&=-16777217}function Cg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(i))if(t0())e.flags|=8192;else throw Cr=Nl,Yu}function Kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ue():536870912,e.lanes|=i,Ss|=i)}function Co(e,i){if(!Le)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function an(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function zy(e,i,r){var l=i.pendingProps;switch(Fu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return an(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),fa(_n),It(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ls(i)?ma(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zu())),an(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(ma(i),m!==null?(an(i),Cg(i,m)):(an(i),Uf(i,h,null,l,r))):m?m!==e.memoizedState?(ma(i),an(i),Cg(i,m)):(an(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ma(i),an(i),Uf(i,h,e,l,r)),null;case 27:if(zt(i),r=rt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}e=Dt.current,ls(i)?om(i):(e=P0(h,l,r),i.stateNode=e,ma(i))}return an(i),null;case 5:if(zt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ma(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return an(i),null}if(m=Dt.current,ls(i))om(i);else{var T=fc(rt.current);switch(m){case 1:m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=T.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=T.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=T.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?T.createElement("select",{is:l.is}):T.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?T.createElement(h,{is:l.is}):T.createElement(h)}}m[hn]=i,m[wn]=l;t:for(T=i.child;T!==null;){if(T.tag===5||T.tag===6)m.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===i)break t;for(;T.sibling===null;){if(T.return===null||T.return===i)break t;T=T.return}T.sibling.return=T.return,T=T.sibling}i.stateNode=m;t:switch(Bn(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ma(i)}}return an(i),Uf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ma(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=rt.current,ls(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Pn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[hn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||E0(e.nodeValue,r)),e||za(i,!0)}else e=fc(e).createTextNode(l),e[hn]=i,i.stateNode=e}return an(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=ls(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=i}else Mr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),e=!1}else r=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ui(i),i):(ui(i),null);if((i.flags&128)!==0)throw Error(a(558))}return an(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ls(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[hn]=i}else Mr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else h=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ui(i),i):(ui(i),null)}return ui(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Kl(i,i.updateQueue),an(i),null);case 4:return It(),e===null&&Jf(i.stateNode.containerInfo),an(i),null;case 10:return fa(i.type),an(i),null;case 19:if(J(dn),l=i.memoizedState,l===null)return an(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Co(l,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Fl(e),m!==null){for(i.flags|=128,Co(l,!1),e=m.updateQueue,i.updateQueue=e,Kl(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)nm(r,e),r=r.sibling;return lt(dn,dn.current&1|2),Le&&ca(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&C()>ec&&(i.flags|=128,h=!0,Co(l,!1),i.lanes=4194304)}else{if(!h)if(e=Fl(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Kl(i,e),Co(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Le)return an(i),null}else 2*C()-l.renderingStartTime>ec&&r!==536870912&&(i.flags|=128,h=!0,Co(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=C(),e.sibling=null,r=dn.current,lt(dn,h?r&1|2:r&1),Le&&ca(i,l.treeForkCount),e):(an(i),null);case 22:case 23:return ui(i),Ju(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),r=i.updateQueue,r!==null&&Kl(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&J(Ar),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),fa(_n),an(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Gy(e,i){switch(Fu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return fa(_n),It(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return zt(i),null;case 31:if(i.memoizedState!==null){if(ui(i),i.alternate===null)throw Error(a(340));Mr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Mr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return J(dn),null;case 4:return It(),null;case 10:return fa(i.type),null;case 22:case 23:return ui(i),Ju(),e!==null&&J(Ar),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return fa(_n),null;case 25:return null;default:return null}}function wg(e,i){switch(Fu(i),i.tag){case 3:fa(_n),It();break;case 26:case 27:case 5:zt(i);break;case 4:It();break;case 31:i.memoizedState!==null&&ui(i);break;case 13:ui(i);break;case 19:J(dn);break;case 10:fa(i.type);break;case 22:case 23:ui(i),Ju(),e!==null&&J(Ar);break;case 24:fa(_n)}}function wo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,T=r.inst;l=m(),T.destroy=l}r=r.next}while(r!==h)}}catch(I){Ze(i,i.return,I)}}function Ya(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var T=l.inst,I=T.destroy;if(I!==void 0){T.destroy=void 0,h=i;var Q=r,gt=I;try{gt()}catch(Rt){Ze(h,Q,Rt)}}}l=l.next}while(l!==m)}}catch(Rt){Ze(i,i.return,Rt)}}function Ug(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{ym(i,r)}catch(l){Ze(e,e.return,l)}}}function Dg(e,i,r){r.props=Dr(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ze(e,i,l)}}function Uo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Ze(e,i,h)}}function Vi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Ze(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Ze(e,i,h)}else r.current=null}function Lg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Ze(e,e.return,h)}}function Df(e,i,r){try{var l=e.stateNode;lS(l,e.type,r,i),l[wn]=i}catch(h){Ze(e,e.return,h)}}function Ng(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$a(e.type)||e.tag===4}function Lf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$a(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=sa));else if(l!==4&&(l===27&&$a(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Nf(e,i,r),e=e.sibling;e!==null;)Nf(e,i,r),e=e.sibling}function Ql(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&$a(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Ql(e,i,r),e=e.sibling;e!==null;)Ql(e,i,r),e=e.sibling}function Og(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Bn(i,l,r),i[hn]=e,i[wn]=r}catch(m){Ze(e,e.return,m)}}var ga=!1,yn=!1,Of=!1,Pg=typeof WeakSet=="function"?WeakSet:Set,An=null;function Hy(e,i){if(e=e.containerInfo,eh=vc,e=qp(e),Au(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var T=0,I=-1,Q=-1,gt=0,Rt=0,Nt=e,vt=null;e:for(;;){for(var Mt;Nt!==r||h!==0&&Nt.nodeType!==3||(I=T+h),Nt!==m||l!==0&&Nt.nodeType!==3||(Q=T+l),Nt.nodeType===3&&(T+=Nt.nodeValue.length),(Mt=Nt.firstChild)!==null;)vt=Nt,Nt=Mt;for(;;){if(Nt===e)break e;if(vt===r&&++gt===h&&(I=T),vt===m&&++Rt===l&&(Q=T),(Mt=Nt.nextSibling)!==null)break;Nt=vt,vt=Nt.parentNode}Nt=Mt}r=I===-1||Q===-1?null:{start:I,end:Q}}else r=null}r=r||{start:0,end:0}}else r=null;for(nh={focusedElem:e,selectionRange:r},vc=!1,An=i;An!==null;)if(i=An,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,An=e;else for(;An!==null;){switch(i=An,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Jt=Dr(r.type,h);e=l.getSnapshotBeforeUpdate(Jt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(he){Ze(r,r.return,he)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)rh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,An=e;break}An=i.return}}function Ig(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:va(e,r),l&4&&wo(5,r);break;case 1:if(va(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(T){Ze(r,r.return,T)}else{var h=Dr(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Ze(r,r.return,T)}}l&64&&Ug(r),l&512&&Uo(r,r.return);break;case 3:if(va(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ym(e,i)}catch(T){Ze(r,r.return,T)}}break;case 27:i===null&&l&4&&Og(r);case 26:case 5:va(e,r),i===null&&l&4&&Lg(r),l&512&&Uo(r,r.return);break;case 12:va(e,r);break;case 31:va(e,r),l&4&&zg(e,r);break;case 13:va(e,r),l&4&&Gg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Ky.bind(null,r),gS(e,r))));break;case 22:if(l=r.memoizedState!==null||ga,!l){i=i!==null&&i.memoizedState!==null||yn,h=ga;var m=yn;ga=l,(yn=i)&&!m?xa(e,r,(r.subtreeFlags&8772)!==0):va(e,r),ga=h,yn=m}break;case 30:break;default:va(e,r)}}function Fg(e){var i=e.alternate;i!==null&&(e.alternate=null,Fg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&io(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,$n=!1;function _a(e,i,r){for(r=r.child;r!==null;)Bg(e,i,r),r=r.sibling}function Bg(e,i,r){if(b&&typeof b.onCommitFiberUnmount=="function")try{b.onCommitFiberUnmount(Ot,r)}catch{}switch(r.tag){case 26:yn||Vi(r,i),_a(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:yn||Vi(r,i);var l=on,h=$n;$a(r.type)&&(on=r.stateNode,$n=!1),_a(e,i,r),zo(r.stateNode),on=l,$n=h;break;case 5:yn||Vi(r,i);case 6:if(l=on,h=$n,on=null,_a(e,i,r),on=l,$n=h,on!==null)if($n)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(r.stateNode)}catch(m){Ze(r,i,m)}else try{on.removeChild(r.stateNode)}catch(m){Ze(r,i,m)}break;case 18:on!==null&&($n?(e=on,U0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ws(e)):U0(on,r.stateNode));break;case 4:l=on,h=$n,on=r.stateNode.containerInfo,$n=!0,_a(e,i,r),on=l,$n=h;break;case 0:case 11:case 14:case 15:Ya(2,r,i),yn||Ya(4,r,i),_a(e,i,r);break;case 1:yn||(Vi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Dg(r,i,l)),_a(e,i,r);break;case 21:_a(e,i,r);break;case 22:yn=(l=yn)||r.memoizedState!==null,_a(e,i,r),yn=l;break;default:_a(e,i,r)}}function zg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ws(e)}catch(r){Ze(i,i.return,r)}}}function Gg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ws(e)}catch(r){Ze(i,i.return,r)}}function Vy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Pg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Pg),i;default:throw Error(a(435,e.tag))}}function Jl(e,i){var r=Vy(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=Qy.bind(null,e,l);l.then(h,h)}})}function ti(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,T=i,I=T;t:for(;I!==null;){switch(I.tag){case 27:if($a(I.type)){on=I.stateNode,$n=!1;break t}break;case 5:on=I.stateNode,$n=!1;break t;case 3:case 4:on=I.stateNode.containerInfo,$n=!0;break t}I=I.return}if(on===null)throw Error(a(160));Bg(m,T,h),on=null,$n=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Hg(i,e),i=i.sibling}var Li=null;function Hg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(i,e),ei(e),l&4&&(Ya(3,e,e.return),wo(3,e),Ya(5,e,e.return));break;case 1:ti(i,e),ei(e),l&512&&(yn||r===null||Vi(r,r.return)),l&64&&ga&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Li;if(ti(i,e),ei(e),l&512&&(yn||r===null||Vi(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[gr]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),Bn(m,l,r),m[hn]=e,F(m),l=m;break t;case"link":var T=H0("link","href",h).get(l+(r.href||""));if(T){for(var I=0;I<T.length;I++)if(m=T[I],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){T.splice(I,1);break e}}m=h.createElement(l),Bn(m,l,r),h.head.appendChild(m);break;case"meta":if(T=H0("meta","content",h).get(l+(r.content||""))){for(I=0;I<T.length;I++)if(m=T[I],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){T.splice(I,1);break e}}m=h.createElement(l),Bn(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[hn]=e,F(m),l=m}e.stateNode=l}else V0(h,e.type,e.stateNode);else e.stateNode=G0(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?V0(h,e.type,e.stateNode):G0(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Df(e,e.memoizedProps,r.memoizedProps)}break;case 27:ti(i,e),ei(e),l&512&&(yn||r===null||Vi(r,r.return)),r!==null&&l&4&&Df(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ti(i,e),ei(e),l&512&&(yn||r===null||Vi(r,r.return)),e.flags&32){h=e.stateNode;try{bn(h,"")}catch(Jt){Ze(e,e.return,Jt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Df(e,h,r!==null?r.memoizedProps:h)),l&1024&&(Of=!0);break;case 6:if(ti(i,e),ei(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Jt){Ze(e,e.return,Jt)}}break;case 3:if(pc=null,h=Li,Li=hc(i.containerInfo),ti(i,e),Li=h,ei(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ws(i.containerInfo)}catch(Jt){Ze(e,e.return,Jt)}Of&&(Of=!1,Vg(e));break;case 4:l=Li,Li=hc(e.stateNode.containerInfo),ti(i,e),ei(e),Li=l;break;case 12:ti(i,e),ei(e);break;case 31:ti(i,e),ei(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jl(e,l)));break;case 13:ti(i,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(tc=C()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jl(e,l)));break;case 22:h=e.memoizedState!==null;var Q=r!==null&&r.memoizedState!==null,gt=ga,Rt=yn;if(ga=gt||h,yn=Rt||Q,ti(i,e),yn=Rt,ga=gt,ei(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||Q||ga||yn||Lr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){Q=r=i;try{if(m=Q.stateNode,h)T=m.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{I=Q.stateNode;var Nt=Q.memoizedProps.style,vt=Nt!=null&&Nt.hasOwnProperty("display")?Nt.display:null;I.style.display=vt==null||typeof vt=="boolean"?"":(""+vt).trim()}}catch(Jt){Ze(Q,Q.return,Jt)}}}else if(i.tag===6){if(r===null){Q=i;try{Q.stateNode.nodeValue=h?"":Q.memoizedProps}catch(Jt){Ze(Q,Q.return,Jt)}}}else if(i.tag===18){if(r===null){Q=i;try{var Mt=Q.stateNode;h?D0(Mt,!0):D0(Q.stateNode,!1)}catch(Jt){Ze(Q,Q.return,Jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Jl(e,r))));break;case 19:ti(i,e),ei(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Jl(e,l)));break;case 30:break;case 21:break;default:ti(i,e),ei(e)}}function ei(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Ng(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Lf(e);Ql(e,m,h);break;case 5:var T=r.stateNode;r.flags&32&&(bn(T,""),r.flags&=-33);var I=Lf(e);Ql(e,I,T);break;case 3:case 4:var Q=r.stateNode.containerInfo,gt=Lf(e);Nf(e,gt,Q);break;default:throw Error(a(161))}}catch(Rt){Ze(e,e.return,Rt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Vg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function va(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(e,i.alternate,i),i=i.sibling}function Lr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ya(4,i,i.return),Lr(i);break;case 1:Vi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Dg(i,i.return,r),Lr(i);break;case 27:zo(i.stateNode);case 26:case 5:Vi(i,i.return),Lr(i);break;case 22:i.memoizedState===null&&Lr(i);break;case 30:Lr(i);break;default:Lr(i)}e=e.sibling}}function xa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,T=m.flags;switch(m.tag){case 0:case 11:case 15:xa(h,m,r),wo(4,m);break;case 1:if(xa(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(gt){Ze(l,l.return,gt)}if(l=m,h=l.updateQueue,h!==null){var I=l.stateNode;try{var Q=h.shared.hiddenCallbacks;if(Q!==null)for(h.shared.hiddenCallbacks=null,h=0;h<Q.length;h++)xm(Q[h],I)}catch(gt){Ze(l,l.return,gt)}}r&&T&64&&Ug(m),Uo(m,m.return);break;case 27:Og(m);case 26:case 5:xa(h,m,r),r&&l===null&&T&4&&Lg(m),Uo(m,m.return);break;case 12:xa(h,m,r);break;case 31:xa(h,m,r),r&&T&4&&zg(h,m);break;case 13:xa(h,m,r),r&&T&4&&Gg(h,m);break;case 22:m.memoizedState===null&&xa(h,m,r),Uo(m,m.return);break;case 30:break;default:xa(h,m,r)}i=i.sibling}}function Pf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&go(r))}function If(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e))}function Ni(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kg(e,i,r,l),i=i.sibling}function kg(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(e,i,r,l),h&2048&&wo(9,i);break;case 1:Ni(e,i,r,l);break;case 3:Ni(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&go(e)));break;case 12:if(h&2048){Ni(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,T=m.id,I=m.onPostCommit;typeof I=="function"&&I(T,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(Q){Ze(i,i.return,Q)}}else Ni(e,i,r,l);break;case 31:Ni(e,i,r,l);break;case 13:Ni(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,T=i.alternate,i.memoizedState!==null?m._visibility&2?Ni(e,i,r,l):Do(e,i):m._visibility&2?Ni(e,i,r,l):(m._visibility|=2,vs(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Pf(T,i);break;case 24:Ni(e,i,r,l),h&2048&&If(i.alternate,i);break;default:Ni(e,i,r,l)}}function vs(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,T=i,I=r,Q=l,gt=T.flags;switch(T.tag){case 0:case 11:case 15:vs(m,T,I,Q,h),wo(8,T);break;case 23:break;case 22:var Rt=T.stateNode;T.memoizedState!==null?Rt._visibility&2?vs(m,T,I,Q,h):Do(m,T):(Rt._visibility|=2,vs(m,T,I,Q,h)),h&&gt&2048&&Pf(T.alternate,T);break;case 24:vs(m,T,I,Q,h),h&&gt&2048&&If(T.alternate,T);break;default:vs(m,T,I,Q,h)}i=i.sibling}}function Do(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:Do(r,l),h&2048&&Pf(l.alternate,l);break;case 24:Do(r,l),h&2048&&If(l.alternate,l);break;default:Do(r,l)}i=i.sibling}}var Lo=8192;function xs(e,i,r){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Xg(e,i,r),e=e.sibling}function Xg(e,i,r){switch(e.tag){case 26:xs(e,i,r),e.flags&Lo&&e.memoizedState!==null&&CS(r,Li,e.memoizedState,e.memoizedProps);break;case 5:xs(e,i,r);break;case 3:case 4:var l=Li;Li=hc(e.stateNode.containerInfo),xs(e,i,r),Li=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Lo,Lo=16777216,xs(e,i,r),Lo=l):xs(e,i,r));break;default:xs(e,i,r)}}function Wg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function No(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];An=l,qg(l,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yg(e),e=e.sibling}function Yg(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,$l(e)):No(e);break;default:No(e)}}function $l(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];An=l,qg(l,e)}Wg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ya(8,i,i.return),$l(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,$l(i));break;default:$l(i)}e=e.sibling}}function qg(e,i){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:Ya(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:go(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,An=l;else t:for(r=e;An!==null;){l=An;var h=l.sibling,m=l.return;if(Fg(l),l===r){An=null;break t}if(h!==null){h.return=m,An=h;break t}An=m}}}var ky={getCacheForType:function(e){var i=In(_n),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return In(_n).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Ve=0,tn=null,Re=null,we=0,je=0,fi=null,qa=!1,ys=!1,Ff=!1,ya=0,cn=0,ja=0,Nr=0,Bf=0,hi=0,Ss=0,Oo=null,ni=null,zf=!1,tc=0,jg=0,ec=1/0,nc=null,Za=null,Mn=0,Ka=null,bs=null,Sa=0,Gf=0,Hf=null,Zg=null,Po=0,Vf=null;function di(){return(Ve&2)!==0&&we!==0?we&-we:D.T!==null?jf():gn()}function Kg(){if(hi===0)if((we&536870912)===0||Le){var e=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),hi=e}else hi=536870912;return e=ci.current,e!==null&&(e.flags|=32),hi}function ii(e,i,r){(e===tn&&(je===2||je===9)||e.cancelPendingCommit!==null)&&(Ms(e,0),Qa(e,we,hi,!1)),Se(e,r),((Ve&2)===0||e!==tn)&&(e===tn&&((Ve&2)===0&&(Nr|=r),cn===4&&Qa(e,we,hi,!1)),ki(e))}function Qg(e,i,r){if((Ve&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Lt(e,i),h=l?qy(e,i):Xf(e,i,!0),m=l;do{if(h===0){ys&&!l&&Qa(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!Wy(r)){h=Xf(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var T=0;else T=e.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){i=T;t:{var I=e;h=Oo;var Q=I.current.memoizedState.isDehydrated;if(Q&&(Ms(I,T).flags|=256),T=Xf(I,T,!1),T!==2){if(Ff&&!Q){I.errorRecoveryDisabledLanes|=m,Nr|=m,h=4;break t}m=ni,ni=h,m!==null&&(ni===null?ni=m:ni.push.apply(ni,m))}h=T}if(m=!1,h!==2)continue}}if(h===1){Ms(e,0),Qa(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Qa(l,i,hi,!qa);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=tc+300-C(),10<h)){if(Qa(l,i,hi,!qa),Et(l,0,!0)!==0)break t;Sa=i,l.timeoutHandle=C0(Jg.bind(null,l,r,ni,nc,zf,i,hi,Nr,Ss,qa,m,"Throttled",-0,0),h);break t}Jg(l,r,ni,nc,zf,i,hi,Nr,Ss,qa,m,null,-0,0)}}break}while(!0);ki(e)}function Jg(e,i,r,l,h,m,T,I,Q,gt,Rt,Nt,vt,Mt){if(e.timeoutHandle=-1,Nt=i.subtreeFlags,Nt&8192||(Nt&16785408)===16785408){Nt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Xg(i,m,Nt);var Jt=(m&62914560)===m?tc-C():(m&4194048)===m?jg-C():0;if(Jt=wS(Nt,Jt),Jt!==null){Sa=m,e.cancelPendingCommit=Jt(s0.bind(null,e,i,m,r,l,h,T,I,Q,Rt,Nt,null,vt,Mt)),Qa(e,m,T,!gt);return}}s0(e,i,m,r,l,h,T,I,Q)}function Wy(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!oi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Qa(e,i,r,l){i&=~Bf,i&=~Nr,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-U(h),T=1<<m;l[m]=-1,h&=~T}r!==0&&st(e,r,i)}function ic(){return(Ve&6)===0?(Io(0),!1):!0}function kf(){if(Re!==null){if(je===0)var e=Re.return;else e=Re,ua=Er=null,rf(e),ds=null,vo=0,e=Re;for(;e!==null;)wg(e.alternate,e),e=e.return;Re=null}}function Ms(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,fS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Sa=0,kf(),tn=e,Re=r=la(e.current,null),we=i,je=0,fi=null,qa=!1,ys=Lt(e,i),Ff=!1,Ss=hi=Bf=Nr=ja=cn=0,ni=Oo=null,zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-U(l),m=1<<h;i|=e[h],l&=~m}return ya=i,El(),r}function $g(e,i){ve=null,D.H=Ao,i===hs||i===Ll?(i=mm(),je=3):i===Yu?(i=mm(),je=4):je=i===Sf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,fi=i,Re===null&&(cn=1,Yl(e,yi(i,e.current)))}function t0(){var e=ci.current;return e===null?!0:(we&4194048)===we?Ei===null:(we&62914560)===we||(we&536870912)!==0?e===Ei:!1}function e0(){var e=D.H;return D.H=Ao,e===null?Ao:e}function n0(){var e=D.A;return D.A=ky,e}function ac(){cn=4,qa||(we&4194048)!==we&&ci.current!==null||(ys=!0),(ja&134217727)===0&&(Nr&134217727)===0||tn===null||Qa(tn,we,hi,!1)}function Xf(e,i,r){var l=Ve;Ve|=2;var h=e0(),m=n0();(tn!==e||we!==i)&&(nc=null,Ms(e,i)),i=!1;var T=cn;t:do try{if(je!==0&&Re!==null){var I=Re,Q=fi;switch(je){case 8:kf(),T=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var gt=je;if(je=0,fi=null,Es(e,I,Q,gt),r&&ys){T=0;break t}break;default:gt=je,je=0,fi=null,Es(e,I,Q,gt)}}Yy(),T=cn;break}catch(Rt){$g(e,Rt)}while(!0);return i&&e.shellSuspendCounter++,ua=Er=null,Ve=l,D.H=h,D.A=m,Re===null&&(tn=null,we=0,El()),T}function Yy(){for(;Re!==null;)i0(Re)}function qy(e,i){var r=Ve;Ve|=2;var l=e0(),h=n0();tn!==e||we!==i?(nc=null,ec=C()+500,Ms(e,i)):ys=Lt(e,i);t:do try{if(je!==0&&Re!==null){i=Re;var m=fi;e:switch(je){case 1:je=0,fi=null,Es(e,i,m,1);break;case 2:case 9:if(dm(m)){je=0,fi=null,a0(i);break}i=function(){je!==2&&je!==9||tn!==e||(je=7),ki(e)},m.then(i,i);break t;case 3:je=7;break t;case 4:je=5;break t;case 7:dm(m)?(je=0,fi=null,a0(i)):(je=0,fi=null,Es(e,i,m,7));break;case 5:var T=null;switch(Re.tag){case 26:T=Re.memoizedState;case 5:case 27:var I=Re;if(T?k0(T):I.stateNode.complete){je=0,fi=null;var Q=I.sibling;if(Q!==null)Re=Q;else{var gt=I.return;gt!==null?(Re=gt,rc(gt)):Re=null}break e}}je=0,fi=null,Es(e,i,m,5);break;case 6:je=0,fi=null,Es(e,i,m,6);break;case 8:kf(),cn=6;break t;default:throw Error(a(462))}}jy();break}catch(Rt){$g(e,Rt)}while(!0);return ua=Er=null,D.H=l,D.A=h,Ve=r,Re!==null?0:(tn=null,we=0,El(),cn)}function jy(){for(;Re!==null&&!Zt();)i0(Re)}function i0(e){var i=Rg(e.alternate,e,ya);e.memoizedProps=e.pendingProps,i===null?rc(e):Re=i}function a0(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Sg(r,i,i.pendingProps,i.type,void 0,we);break;case 11:i=Sg(r,i,i.pendingProps,i.type.render,i.ref,we);break;case 5:rf(i);default:wg(r,i),i=Re=nm(i,ya),i=Rg(r,i,ya)}e.memoizedProps=e.pendingProps,i===null?rc(e):Re=i}function Es(e,i,r,l){ua=Er=null,rf(i),ds=null,vo=0;var h=i.return;try{if(Iy(e,h,i,r,we)){cn=1,Yl(e,yi(r,e.current)),Re=null;return}}catch(m){if(h!==null)throw Re=h,m;cn=1,Yl(e,yi(r,e.current)),Re=null;return}i.flags&32768?(Le||l===1?e=!0:ys||(we&536870912)!==0?e=!1:(qa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ci.current,l!==null&&l.tag===13&&(l.flags|=16384))),r0(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){r0(i,qa);return}e=i.return;var r=zy(i.alternate,i,ya);if(r!==null){Re=r;return}if(i=i.sibling,i!==null){Re=i;return}Re=i=e}while(i!==null);cn===0&&(cn=5)}function r0(e,i){do{var r=Gy(e.alternate,e);if(r!==null){r.flags&=32767,Re=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Re=e;return}Re=e=r}while(e!==null);cn=6,Re=null}function s0(e,i,r,l,h,m,T,I,Q){e.cancelPendingCommit=null;do sc();while(Mn!==0);if((Ve&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Du,si(e,r,m,T,I,Q),e===tn&&(Re=tn=null,we=0),bs=i,Ka=e,Sa=r,Gf=m,Hf=h,Zg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jy(bt,function(){return f0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,h=G.p,G.p=2,T=Ve,Ve|=4;try{Hy(e,i,r)}finally{Ve=T,G.p=h,D.T=l}}Mn=1,o0(),l0(),c0()}}function o0(){if(Mn===1){Mn=0;var e=Ka,i=bs,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=G.p;G.p=2;var h=Ve;Ve|=4;try{Hg(i,e);var m=nh,T=qp(e.containerInfo),I=m.focusedElem,Q=m.selectionRange;if(T!==I&&I&&I.ownerDocument&&Yp(I.ownerDocument.documentElement,I)){if(Q!==null&&Au(I)){var gt=Q.start,Rt=Q.end;if(Rt===void 0&&(Rt=gt),"selectionStart"in I)I.selectionStart=gt,I.selectionEnd=Math.min(Rt,I.value.length);else{var Nt=I.ownerDocument||document,vt=Nt&&Nt.defaultView||window;if(vt.getSelection){var Mt=vt.getSelection(),Jt=I.textContent.length,he=Math.min(Q.start,Jt),$e=Q.end===void 0?he:Math.min(Q.end,Jt);!Mt.extend&&he>$e&&(T=$e,$e=he,he=T);var ut=Wp(I,he),nt=Wp(I,$e);if(ut&&nt&&(Mt.rangeCount!==1||Mt.anchorNode!==ut.node||Mt.anchorOffset!==ut.offset||Mt.focusNode!==nt.node||Mt.focusOffset!==nt.offset)){var mt=Nt.createRange();mt.setStart(ut.node,ut.offset),Mt.removeAllRanges(),he>$e?(Mt.addRange(mt),Mt.extend(nt.node,nt.offset)):(mt.setEnd(nt.node,nt.offset),Mt.addRange(mt))}}}}for(Nt=[],Mt=I;Mt=Mt.parentNode;)Mt.nodeType===1&&Nt.push({element:Mt,left:Mt.scrollLeft,top:Mt.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<Nt.length;I++){var Ct=Nt[I];Ct.element.scrollLeft=Ct.left,Ct.element.scrollTop=Ct.top}}vc=!!eh,nh=eh=null}finally{Ve=h,G.p=l,D.T=r}}e.current=i,Mn=2}}function l0(){if(Mn===2){Mn=0;var e=Ka,i=bs,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=G.p;G.p=2;var h=Ve;Ve|=4;try{Ig(e,i.alternate,i)}finally{Ve=h,G.p=l,D.T=r}}Mn=3}}function c0(){if(Mn===4||Mn===3){Mn=0,W();var e=Ka,i=bs,r=Sa,l=Zg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Mn=5:(Mn=0,bs=Ka=null,u0(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Za=null),Ie(r),i=i.stateNode,b&&typeof b.onCommitFiberRoot=="function")try{b.onCommitFiberRoot(Ot,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=D.T,h=G.p,G.p=2,D.T=null;try{for(var m=e.onRecoverableError,T=0;T<l.length;T++){var I=l[T];m(I.value,{componentStack:I.stack})}}finally{D.T=i,G.p=h}}(Sa&3)!==0&&sc(),ki(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===Vf?Po++:(Po=0,Vf=e):Po=0,Io(0)}}function u0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,go(i)))}function sc(){return o0(),l0(),c0(),f0()}function f0(){if(Mn!==5)return!1;var e=Ka,i=Gf;Gf=0;var r=Ie(Sa),l=D.T,h=G.p;try{G.p=32>r?32:r,D.T=null,r=Hf,Hf=null;var m=Ka,T=Sa;if(Mn=0,bs=Ka=null,Sa=0,(Ve&6)!==0)throw Error(a(331));var I=Ve;if(Ve|=4,Yg(m.current),kg(m,m.current,T,r),Ve=I,Io(0,!1),b&&typeof b.onPostCommitFiberRoot=="function")try{b.onPostCommitFiberRoot(Ot,m)}catch{}return!0}finally{G.p=h,D.T=l,u0(e,i)}}function h0(e,i,r){i=yi(r,i),i=yf(e.stateNode,i,2),e=ka(e,i,2),e!==null&&(Se(e,2),ki(e))}function Ze(e,i,r){if(e.tag===3)h0(e,e,r);else for(;i!==null;){if(i.tag===3){h0(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Za===null||!Za.has(l))){e=yi(r,e),r=dg(2),l=ka(i,r,2),l!==null&&(pg(r,l,i,e),Se(l,2),ki(l));break}}i=i.return}}function Wf(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Xy;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(Ff=!0,h.add(r),e=Zy.bind(null,e,i,r),i.then(e,e))}function Zy(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,tn===e&&(we&r)===r&&(cn===4||cn===3&&(we&62914560)===we&&300>C()-tc?(Ve&2)===0&&Ms(e,0):Bf|=r,Ss===we&&(Ss=0)),ki(e)}function d0(e,i){i===0&&(i=ue()),e=Sr(e,i),e!==null&&(Se(e,i),ki(e))}function Ky(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),d0(e,r)}function Qy(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),d0(e,r)}function Jy(e,i){return pe(e,i)}var oc=null,Ts=null,Yf=!1,lc=!1,qf=!1,Ja=0;function ki(e){e!==Ts&&e.next===null&&(Ts===null?oc=Ts=e:Ts=Ts.next=e),lc=!0,Yf||(Yf=!0,tS())}function Io(e,i){if(!qf&&lc){qf=!0;do for(var r=!1,l=oc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var T=l.suspendedLanes,I=l.pingedLanes;m=(1<<31-U(42|e)+1)-1,m&=h&~(T&~I),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,_0(l,m))}else m=we,m=Et(l,l===tn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Lt(l,m)||(r=!0,_0(l,m));l=l.next}while(r);qf=!1}}function $y(){p0()}function p0(){lc=Yf=!1;var e=0;Ja!==0&&uS()&&(e=Ja);for(var i=C(),r=null,l=oc;l!==null;){var h=l.next,m=m0(l,i);m===0?(l.next=null,r===null?oc=h:r.next=h,h===null&&(Ts=r)):(r=l,(e!==0||(m&3)!==0)&&(lc=!0)),l=h}Mn!==0&&Mn!==5||Io(e),Ja!==0&&(Ja=0)}function m0(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var T=31-U(m),I=1<<T,Q=h[T];Q===-1?((I&r)===0||(I&l)!==0)&&(h[T]=kt(I,i)):Q<=i&&(e.expiredLanes|=I),m&=~I}if(i=tn,r=we,r=Et(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(je===2||je===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ye(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Lt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&ye(l),Ie(r)){case 2:case 8:r=Ut;break;case 32:r=bt;break;case 268435456:r=Ft;break;default:r=bt}return l=g0.bind(null,e),r=pe(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&ye(l),e.callbackPriority=2,e.callbackNode=null,2}function g0(e,i){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(sc()&&e.callbackNode!==r)return null;var l=we;return l=Et(e,e===tn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qg(e,l,i),m0(e,C()),e.callbackNode!=null&&e.callbackNode===r?g0.bind(null,e):null)}function _0(e,i){if(sc())return null;Qg(e,i,!0)}function tS(){hS(function(){(Ve&6)!==0?pe(Tt,$y):p0()})}function jf(){if(Ja===0){var e=us;e===0&&(e=at,at<<=1,(at&261888)===0&&(at=256)),Ja=e}return Ja}function v0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gl(""+e)}function x0(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function eS(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=v0((h[wn]||null).action),T=l.submitter;T&&(i=(i=T[wn]||null)?v0(i.formAction):T.getAttribute("formAction"),i!==null&&(m=i,T=null));var I=new yl("action","action",null,l,h);e.push({event:I,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ja!==0){var Q=T?x0(h,T):new FormData(h);pf(r,{pending:!0,data:Q,method:h.method,action:m},null,Q)}}else typeof m=="function"&&(I.preventDefault(),Q=T?x0(h,T):new FormData(h),pf(r,{pending:!0,data:Q,method:h.method,action:m},m,Q))},currentTarget:h}]})}}for(var Zf=0;Zf<Uu.length;Zf++){var Kf=Uu[Zf],nS=Kf.toLowerCase(),iS=Kf[0].toUpperCase()+Kf.slice(1);Di(nS,"on"+iS)}Di(Kp,"onAnimationEnd"),Di(Qp,"onAnimationIteration"),Di(Jp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(xy,"onTransitionRun"),Di(yy,"onTransitionStart"),Di(Sy,"onTransitionCancel"),Di($p,"onTransitionEnd"),ht("onMouseEnter",["mouseout","mouseover"]),ht("onMouseLeave",["mouseout","mouseover"]),ht("onPointerEnter",["pointerout","pointerover"]),ht("onPointerLeave",["pointerout","pointerover"]),_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_t("onBeforeInput",["compositionend","keypress","textInput","paste"]),_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function y0(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var T=l.length-1;0<=T;T--){var I=l[T],Q=I.instance,gt=I.currentTarget;if(I=I.listener,Q!==m&&h.isPropagationStopped())break t;m=I,h.currentTarget=gt;try{m(h)}catch(Rt){Ml(Rt)}h.currentTarget=null,m=Q}else for(T=0;T<l.length;T++){if(I=l[T],Q=I.instance,gt=I.currentTarget,I=I.listener,Q!==m&&h.isPropagationStopped())break t;m=I,h.currentTarget=gt;try{m(h)}catch(Rt){Ml(Rt)}h.currentTarget=null,m=Q}}}}function Ce(e,i){var r=i[Kr];r===void 0&&(r=i[Kr]=new Set);var l=e+"__bubble";r.has(l)||(S0(i,e,2,!1),r.add(l))}function Qf(e,i,r){var l=0;i&&(l|=4),S0(r,e,l,i)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Jf(e){if(!e[cc]){e[cc]=!0,ot.forEach(function(r){r!=="selectionchange"&&(aS.has(r)||Qf(r,!1,e),Qf(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[cc]||(i[cc]=!0,Qf("selectionchange",!1,i))}}function S0(e,i,r,l){switch(K0(i)){case 2:var h=LS;break;case 8:h=NS;break;default:h=dh}r=h.bind(null,i,r,e),h=void 0,!_u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function $f(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var I=l.stateNode.containerInfo;if(I===h)break;if(T===4)for(T=l.return;T!==null;){var Q=T.tag;if((Q===3||Q===4)&&T.stateNode.containerInfo===h)return;T=T.return}for(;I!==null;){if(T=Na(I),T===null)return;if(Q=T.tag,Q===5||Q===6||Q===26||Q===27){l=m=T;continue t}I=I.parentNode}}l=l.return}Ap(function(){var gt=m,Rt=mu(r),Nt=[];t:{var vt=tm.get(e);if(vt!==void 0){var Mt=yl,Jt=e;switch(e){case"keypress":if(vl(r)===0)break t;case"keydown":case"keyup":Mt=Qx;break;case"focusin":Jt="focus",Mt=Su;break;case"focusout":Jt="blur",Mt=Su;break;case"beforeblur":case"afterblur":Mt=Su;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Mt=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Mt=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Mt=ty;break;case Kp:case Qp:case Jp:Mt=Vx;break;case $p:Mt=ny;break;case"scroll":case"scrollend":Mt=Fx;break;case"wheel":Mt=ay;break;case"copy":case"cut":case"paste":Mt=Xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Mt=Dp;break;case"toggle":case"beforetoggle":Mt=sy}var he=(i&4)!==0,$e=!he&&(e==="scroll"||e==="scrollend"),ut=he?vt!==null?vt+"Capture":null:vt;he=[];for(var nt=gt,mt;nt!==null;){var Ct=nt;if(mt=Ct.stateNode,Ct=Ct.tag,Ct!==5&&Ct!==26&&Ct!==27||mt===null||ut===null||(Ct=ao(nt,ut),Ct!=null&&he.push(Bo(nt,Ct,mt))),$e)break;nt=nt.return}0<he.length&&(vt=new Mt(vt,Jt,null,r,Rt),Nt.push({event:vt,listeners:he}))}}if((i&7)===0){t:{if(vt=e==="mouseover"||e==="pointerover",Mt=e==="mouseout"||e==="pointerout",vt&&r!==pu&&(Jt=r.relatedTarget||r.fromElement)&&(Na(Jt)||Jt[wi]))break t;if((Mt||vt)&&(vt=Rt.window===Rt?Rt:(vt=Rt.ownerDocument)?vt.defaultView||vt.parentWindow:window,Mt?(Jt=r.relatedTarget||r.toElement,Mt=gt,Jt=Jt?Na(Jt):null,Jt!==null&&($e=c(Jt),he=Jt.tag,Jt!==$e||he!==5&&he!==27&&he!==6)&&(Jt=null)):(Mt=null,Jt=gt),Mt!==Jt)){if(he=wp,Ct="onMouseLeave",ut="onMouseEnter",nt="mouse",(e==="pointerout"||e==="pointerover")&&(he=Dp,Ct="onPointerLeave",ut="onPointerEnter",nt="pointer"),$e=Mt==null?vt:_r(Mt),mt=Jt==null?vt:_r(Jt),vt=new he(Ct,nt+"leave",Mt,r,Rt),vt.target=$e,vt.relatedTarget=mt,Ct=null,Na(Rt)===gt&&(he=new he(ut,nt+"enter",Jt,r,Rt),he.target=mt,he.relatedTarget=$e,Ct=he),$e=Ct,Mt&&Jt)e:{for(he=rS,ut=Mt,nt=Jt,mt=0,Ct=ut;Ct;Ct=he(Ct))mt++;Ct=0;for(var le=nt;le;le=he(le))Ct++;for(;0<mt-Ct;)ut=he(ut),mt--;for(;0<Ct-mt;)nt=he(nt),Ct--;for(;mt--;){if(ut===nt||nt!==null&&ut===nt.alternate){he=ut;break e}ut=he(ut),nt=he(nt)}he=null}else he=null;Mt!==null&&b0(Nt,vt,Mt,he,!1),Jt!==null&&$e!==null&&b0(Nt,$e,Jt,he,!0)}}t:{if(vt=gt?_r(gt):window,Mt=vt.nodeName&&vt.nodeName.toLowerCase(),Mt==="select"||Mt==="input"&&vt.type==="file")var Fe=zp;else if(Fp(vt))if(Gp)Fe=gy;else{Fe=py;var ae=dy}else Mt=vt.nodeName,!Mt||Mt.toLowerCase()!=="input"||vt.type!=="checkbox"&&vt.type!=="radio"?gt&&Ui(gt.elementType)&&(Fe=zp):Fe=my;if(Fe&&(Fe=Fe(e,gt))){Bp(Nt,Fe,r,Rt);break t}ae&&ae(e,vt,gt),e==="focusout"&&gt&&vt.type==="number"&&gt.memoizedProps.value!=null&&Dn(vt,"number",vt.value)}switch(ae=gt?_r(gt):window,e){case"focusin":(Fp(ae)||ae.contentEditable==="true")&&(ns=ae,Ru=gt,ho=null);break;case"focusout":ho=Ru=ns=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,jp(Nt,r,Rt);break;case"selectionchange":if(vy)break;case"keydown":case"keyup":jp(Nt,r,Rt)}var be;if(Mu)t:{switch(e){case"compositionstart":var Ue="onCompositionStart";break t;case"compositionend":Ue="onCompositionEnd";break t;case"compositionupdate":Ue="onCompositionUpdate";break t}Ue=void 0}else es?Pp(e,r)&&(Ue="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ue="onCompositionStart");Ue&&(Lp&&r.locale!=="ko"&&(es||Ue!=="onCompositionStart"?Ue==="onCompositionEnd"&&es&&(be=Rp()):(Ia=Rt,vu="value"in Ia?Ia.value:Ia.textContent,es=!0)),ae=uc(gt,Ue),0<ae.length&&(Ue=new Up(Ue,e,null,r,Rt),Nt.push({event:Ue,listeners:ae}),be?Ue.data=be:(be=Ip(r),be!==null&&(Ue.data=be)))),(be=ly?cy(e,r):uy(e,r))&&(Ue=uc(gt,"onBeforeInput"),0<Ue.length&&(ae=new Up("onBeforeInput","beforeinput",null,r,Rt),Nt.push({event:ae,listeners:Ue}),ae.data=be)),eS(Nt,e,gt,r,Rt)}y0(Nt,i)})}function Bo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function uc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=ao(e,r),h!=null&&l.unshift(Bo(e,h,m)),h=ao(e,i),h!=null&&l.push(Bo(e,h,m))),e.tag===3)return l;e=e.return}return[]}function rS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function b0(e,i,r,l,h){for(var m=i._reactName,T=[];r!==null&&r!==l;){var I=r,Q=I.alternate,gt=I.stateNode;if(I=I.tag,Q!==null&&Q===l)break;I!==5&&I!==26&&I!==27||gt===null||(Q=gt,h?(gt=ao(r,m),gt!=null&&T.unshift(Bo(r,gt,Q))):h||(gt=ao(r,m),gt!=null&&T.push(Bo(r,gt,Q)))),r=r.return}T.length!==0&&e.push({event:i,listeners:T})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function M0(e){return(typeof e=="string"?e:""+e).replace(sS,`
`).replace(oS,"")}function E0(e,i){return i=M0(i),M0(e)===i}function Je(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||bn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&bn(e,""+l);break;case"className":ce(e,"class",l);break;case"tabIndex":ce(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(e,r,l);break;case"style":Jr(e,l,m);break;case"data":if(i!=="object"){ce(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Je(e,i,"name",h.name,h,null),Je(e,i,"formEncType",h.formEncType,h,null),Je(e,i,"formMethod",h.formMethod,h,null),Je(e,i,"formTarget",h.formTarget,h,null)):(Je(e,i,"encType",h.encType,h,null),Je(e,i,"method",h.method,h,null),Je(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=gl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=sa);break;case"onScroll":l!=null&&Ce("scroll",e);break;case"onScrollEnd":l!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=gl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),ne(e,"popover",l);break;case"xlinkActuate":ie(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ie(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ie(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ie(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ie(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ie(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ie(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ie(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ie(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ne(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Px.get(r)||r,ne(e,r,l))}}function th(e,i,r,l,h,m){switch(r){case"style":Jr(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?bn(e,l):(typeof l=="number"||typeof l=="bigint")&&bn(e,""+l);break;case"onScroll":l!=null&&Ce("scroll",e);break;case"onScrollEnd":l!=null&&Ce("scrollend",e);break;case"onClick":l!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!St.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[wn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ne(e,r,l)}}}function Bn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var T=r[m];if(T!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Je(e,i,m,T,r,null)}}h&&Je(e,i,"srcSet",r.srcSet,r,null),l&&Je(e,i,"src",r.src,r,null);return;case"input":Ce("invalid",e);var I=m=T=h=null,Q=null,gt=null;for(l in r)if(r.hasOwnProperty(l)){var Rt=r[l];if(Rt!=null)switch(l){case"name":h=Rt;break;case"type":T=Rt;break;case"checked":Q=Rt;break;case"defaultChecked":gt=Rt;break;case"value":m=Rt;break;case"defaultValue":I=Rt;break;case"children":case"dangerouslySetInnerHTML":if(Rt!=null)throw Error(a(137,i));break;default:Je(e,i,l,Rt,r,null)}}ra(e,m,I,Q,gt,T,h,!1);return;case"select":Ce("invalid",e),l=T=m=null;for(h in r)if(r.hasOwnProperty(h)&&(I=r[h],I!=null))switch(h){case"value":m=I;break;case"defaultValue":T=I;break;case"multiple":l=I;default:Je(e,i,h,I,r,null)}i=m,r=T,e.multiple=!!l,i!=null?vi(e,!!l,i,!1):r!=null&&vi(e,!!l,r,!0);return;case"textarea":Ce("invalid",e),m=h=l=null;for(T in r)if(r.hasOwnProperty(T)&&(I=r[T],I!=null))switch(T){case"value":l=I;break;case"defaultValue":h=I;break;case"children":m=I;break;case"dangerouslySetInnerHTML":if(I!=null)throw Error(a(91));break;default:Je(e,i,T,I,r,null)}Ln(e,l,h,m);return;case"option":for(Q in r)r.hasOwnProperty(Q)&&(l=r[Q],l!=null)&&(Q==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Je(e,i,Q,l,r,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(l=0;l<Fo.length;l++)Ce(Fo[l],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(gt in r)if(r.hasOwnProperty(gt)&&(l=r[gt],l!=null))switch(gt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Je(e,i,gt,l,r,null)}return;default:if(Ui(i)){for(Rt in r)r.hasOwnProperty(Rt)&&(l=r[Rt],l!==void 0&&th(e,i,Rt,l,r,void 0));return}}for(I in r)r.hasOwnProperty(I)&&(l=r[I],l!=null&&Je(e,i,I,l,r,null))}function lS(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,T=null,I=null,Q=null,gt=null,Rt=null;for(Mt in r){var Nt=r[Mt];if(r.hasOwnProperty(Mt)&&Nt!=null)switch(Mt){case"checked":break;case"value":break;case"defaultValue":Q=Nt;default:l.hasOwnProperty(Mt)||Je(e,i,Mt,null,l,Nt)}}for(var vt in l){var Mt=l[vt];if(Nt=r[vt],l.hasOwnProperty(vt)&&(Mt!=null||Nt!=null))switch(vt){case"type":m=Mt;break;case"name":h=Mt;break;case"checked":gt=Mt;break;case"defaultChecked":Rt=Mt;break;case"value":T=Mt;break;case"defaultValue":I=Mt;break;case"children":case"dangerouslySetInnerHTML":if(Mt!=null)throw Error(a(137,i));break;default:Mt!==Nt&&Je(e,i,vt,Mt,l,Nt)}}Un(e,T,I,Q,gt,Rt,m,h);return;case"select":Mt=T=I=vt=null;for(m in r)if(Q=r[m],r.hasOwnProperty(m)&&Q!=null)switch(m){case"value":break;case"multiple":Mt=Q;default:l.hasOwnProperty(m)||Je(e,i,m,null,l,Q)}for(h in l)if(m=l[h],Q=r[h],l.hasOwnProperty(h)&&(m!=null||Q!=null))switch(h){case"value":vt=m;break;case"defaultValue":I=m;break;case"multiple":T=m;default:m!==Q&&Je(e,i,h,m,l,Q)}i=I,r=T,l=Mt,vt!=null?vi(e,!!r,vt,!1):!!l!=!!r&&(i!=null?vi(e,!!r,i,!0):vi(e,!!r,r?[]:"",!1));return;case"textarea":Mt=vt=null;for(I in r)if(h=r[I],r.hasOwnProperty(I)&&h!=null&&!l.hasOwnProperty(I))switch(I){case"value":break;case"children":break;default:Je(e,i,I,null,l,h)}for(T in l)if(h=l[T],m=r[T],l.hasOwnProperty(T)&&(h!=null||m!=null))switch(T){case"value":vt=h;break;case"defaultValue":Mt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Je(e,i,T,h,l,m)}qe(e,vt,Mt);return;case"option":for(var Jt in r)vt=r[Jt],r.hasOwnProperty(Jt)&&vt!=null&&!l.hasOwnProperty(Jt)&&(Jt==="selected"?e.selected=!1:Je(e,i,Jt,null,l,vt));for(Q in l)vt=l[Q],Mt=r[Q],l.hasOwnProperty(Q)&&vt!==Mt&&(vt!=null||Mt!=null)&&(Q==="selected"?e.selected=vt&&typeof vt!="function"&&typeof vt!="symbol":Je(e,i,Q,vt,l,Mt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in r)vt=r[he],r.hasOwnProperty(he)&&vt!=null&&!l.hasOwnProperty(he)&&Je(e,i,he,null,l,vt);for(gt in l)if(vt=l[gt],Mt=r[gt],l.hasOwnProperty(gt)&&vt!==Mt&&(vt!=null||Mt!=null))switch(gt){case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,i));break;default:Je(e,i,gt,vt,l,Mt)}return;default:if(Ui(i)){for(var $e in r)vt=r[$e],r.hasOwnProperty($e)&&vt!==void 0&&!l.hasOwnProperty($e)&&th(e,i,$e,void 0,l,vt);for(Rt in l)vt=l[Rt],Mt=r[Rt],!l.hasOwnProperty(Rt)||vt===Mt||vt===void 0&&Mt===void 0||th(e,i,Rt,vt,l,Mt);return}}for(var ut in r)vt=r[ut],r.hasOwnProperty(ut)&&vt!=null&&!l.hasOwnProperty(ut)&&Je(e,i,ut,null,l,vt);for(Nt in l)vt=l[Nt],Mt=r[Nt],!l.hasOwnProperty(Nt)||vt===Mt||vt==null&&Mt==null||Je(e,i,Nt,vt,l,Mt)}function T0(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,T=h.initiatorType,I=h.duration;if(m&&I&&T0(T)){for(T=0,I=h.responseEnd,l+=1;l<r.length;l++){var Q=r[l],gt=Q.startTime;if(gt>I)break;var Rt=Q.transferSize,Nt=Q.initiatorType;Rt&&T0(Nt)&&(Q=Q.responseEnd,T+=Rt*(Q<I?1:(I-gt)/(Q-gt)))}if(--l,i+=8*(m+T)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var eh=null,nh=null;function fc(e){return e.nodeType===9?e:e.ownerDocument}function A0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function R0(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ih(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ah=null;function uS(){var e=window.event;return e&&e.type==="popstate"?e===ah?!1:(ah=e,!0):(ah=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(e){return w0.resolve(null).then(e).catch(dS)}:C0;function dS(e){setTimeout(function(){throw e})}function $a(e){return e==="head"}function U0(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),ws(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")zo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,zo(r);for(var m=r.firstChild;m;){var T=m.nextSibling,I=m.nodeName;m[gr]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=T}}else r==="body"&&zo(e.ownerDocument.body);r=h}while(r);ws(i)}function D0(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":rh(r),io(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function pS(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[gr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function mS(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ti(e.nextSibling),e===null))return null;return e}function L0(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ti(e.nextSibling),e===null))return null;return e}function sh(e){return e.data==="$?"||e.data==="$~"}function oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gS(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ti(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var lh=null;function N0(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Ti(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function O0(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function P0(e,i,r){switch(i=fc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function zo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);io(e)}var Ai=new Map,I0=new Set;function hc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=G.d;G.d={f:_S,r:vS,D:xS,C:yS,L:SS,m:bS,X:ES,S:MS,M:TS};function _S(){var e=ba.f(),i=ic();return e||i}function vS(e){var i=Oa(e);i!==null&&i.tag===5&&i.type==="form"?$m(i):ba.r(e)}var As=typeof document>"u"?null:document;function F0(e,i,r){var l=As;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),I0.has(h)||(I0.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Bn(i,"link",e),F(i),l.head.appendChild(i)))}}function xS(e){ba.D(e),F0("dns-prefetch",e,null)}function yS(e,i){ba.C(e,i),F0("preconnect",e,i)}function SS(e,i,r){ba.L(e,i,r);var l=As;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+me(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+me(r.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var m=h;switch(i){case"style":m=Rs(e);break;case"script":m=Cs(e)}Ai.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Ai.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Go(m))||i==="script"&&l.querySelector(Ho(m))||(i=l.createElement("link"),Bn(i,"link",e),F(i),l.head.appendChild(i)))}}function bS(e,i){ba.m(e,i);var r=As;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Cs(e)}if(!Ai.has(m)&&(e=g({rel:"modulepreload",href:e},i),Ai.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Ho(m)))return}l=r.createElement("link"),Bn(l,"link",e),F(l),r.head.appendChild(l)}}}function MS(e,i,r){ba.S(e,i,r);var l=As;if(l&&e){var h=Pa(l).hoistableStyles,m=Rs(e);i=i||"default";var T=h.get(m);if(!T){var I={loading:0,preload:null};if(T=l.querySelector(Go(m)))I.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Ai.get(m))&&ch(e,r);var Q=T=l.createElement("link");F(Q),Bn(Q,"link",e),Q._p=new Promise(function(gt,Rt){Q.onload=gt,Q.onerror=Rt}),Q.addEventListener("load",function(){I.loading|=1}),Q.addEventListener("error",function(){I.loading|=2}),I.loading|=4,dc(T,i,l)}T={type:"stylesheet",instance:T,count:1,state:I},h.set(m,T)}}}function ES(e,i){ba.X(e,i);var r=As;if(r&&e){var l=Pa(r).hoistableScripts,h=Cs(e),m=l.get(h);m||(m=r.querySelector(Ho(h)),m||(e=g({src:e,async:!0},i),(i=Ai.get(h))&&uh(e,i),m=r.createElement("script"),F(m),Bn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function TS(e,i){ba.M(e,i);var r=As;if(r&&e){var l=Pa(r).hoistableScripts,h=Cs(e),m=l.get(h);m||(m=r.querySelector(Ho(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Ai.get(h))&&uh(e,i),m=r.createElement("script"),F(m),Bn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function B0(e,i,r,l){var h=(h=rt.current)?hc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Rs(r.href),r=Pa(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Rs(r.href);var m=Pa(h).hoistableStyles,T=m.get(e);if(T||(h=h.ownerDocument||h,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,T),(m=h.querySelector(Go(e)))&&!m._p&&(T.instance=m,T.state.loading=5),Ai.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ai.set(e,r),m||AS(h,e,r,T.state))),i&&l===null)throw Error(a(528,""));return T}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Cs(r),r=Pa(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Rs(e){return'href="'+me(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function z0(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function AS(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Bn(i,"link",r),F(i),e.head.appendChild(i))}function Cs(e){return'[src="'+me(e)+'"]'}function Ho(e){return"script[async]"+e}function G0(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(r.href)+'"]');if(l)return i.instance=l,F(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),F(l),Bn(l,"style",h),dc(l,r.precedence,e),i.instance=l;case"stylesheet":h=Rs(r.href);var m=e.querySelector(Go(h));if(m)return i.state.loading|=4,i.instance=m,F(m),m;l=z0(r),(h=Ai.get(h))&&ch(l,h),m=(e.ownerDocument||e).createElement("link"),F(m);var T=m;return T._p=new Promise(function(I,Q){T.onload=I,T.onerror=Q}),Bn(m,"link",l),i.state.loading|=4,dc(m,r.precedence,e),i.instance=m;case"script":return m=Cs(r.src),(h=e.querySelector(Ho(m)))?(i.instance=h,F(h),h):(l=r,(h=Ai.get(m))&&(l=g({},r),uh(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),F(h),Bn(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,dc(l,r.precedence,e));return i.instance}function dc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,T=0;T<l.length;T++){var I=l[T];if(I.dataset.precedence===i)m=I;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var pc=null;function H0(e,i,r){if(pc===null){var l=new Map,h=pc=new Map;h.set(r,l)}else h=pc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[gr]||m[hn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var T=m.getAttribute(i)||"";T=e+T;var I=l.get(T);I?I.push(m):l.set(T,[m])}}return l}function V0(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function RS(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CS(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=Rs(l.href),m=i.querySelector(Go(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=mc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,F(m);return}m=i.ownerDocument||i,l=z0(l),(h=Ai.get(h))&&ch(l,h),m=m.createElement("link"),F(m);var T=m;T._p=new Promise(function(I,Q){T.onload=I,T.onerror=Q}),Bn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=mc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var fh=0;function wS(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&fh===0&&(fh=62500*cS());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>fh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function mc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gc=new Map,i.forEach(US,e),gc=null,mc.call(e))}function US(e,i){if(!(i.state.loading&4)){var r=gc.get(e);if(r)var l=r.get(null);else{r=new Map,gc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var T=h[m];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(r.set(T.dataset.precedence,T),l=T)}l&&r.set(null,l)}h=i.instance,T=h.getAttribute("data-precedence"),m=r.get(T)||l,m===l&&r.set(null,h),r.set(T,h),this.count++,l=mc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Vo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function DS(e,i,r,l,h,m,T,I,Q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.hiddenUpdates=Gt(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Q,this.incompleteTransitions=new Map}function X0(e,i,r,l,h,m,T,I,Q,gt,Rt,Nt){return e=new DS(e,i,r,T,Q,gt,Rt,Nt,I),i=1,m===!0&&(i|=24),m=li(3,null,null,i),e.current=m,m.stateNode=e,i=ku(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},qu(m),e}function W0(e){return e?(e=rs,e):rs}function Y0(e,i,r,l,h,m){h=W0(h),l.context===null?l.context=h:l.pendingContext=h,l=Va(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=ka(e,l,i),r!==null&&(ii(r,e,i),yo(r,e,i))}function q0(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function hh(e,i){q0(e,i),(e=e.alternate)&&q0(e,i)}function j0(e){if(e.tag===13||e.tag===31){var i=Sr(e,67108864);i!==null&&ii(i,e,67108864),hh(e,67108864)}}function Z0(e){if(e.tag===13||e.tag===31){var i=di();i=Ye(i);var r=Sr(e,i);r!==null&&ii(r,e,i),hh(e,i)}}var vc=!0;function LS(e,i,r,l){var h=D.T;D.T=null;var m=G.p;try{G.p=2,dh(e,i,r,l)}finally{G.p=m,D.T=h}}function NS(e,i,r,l){var h=D.T;D.T=null;var m=G.p;try{G.p=8,dh(e,i,r,l)}finally{G.p=m,D.T=h}}function dh(e,i,r,l){if(vc){var h=ph(l);if(h===null)$f(e,i,l,xc,r),Q0(e,l);else if(PS(h,e,i,r,l))l.stopPropagation();else if(Q0(e,l),i&4&&-1<OS.indexOf(e)){for(;h!==null;){var m=Oa(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var T=xt(m.pendingLanes);if(T!==0){var I=m;for(I.pendingLanes|=2,I.entangledLanes|=2;T;){var Q=1<<31-U(T);I.entanglements[1]|=Q,T&=~Q}ki(m),(Ve&6)===0&&(ec=C()+500,Io(0))}}break;case 31:case 13:I=Sr(m,2),I!==null&&ii(I,m,2),ic(),hh(m,2)}if(m=ph(l),m===null&&$f(e,i,l,xc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else $f(e,i,l,null,r)}}function ph(e){return e=mu(e),mh(e)}var xc=null;function mh(e){if(xc=null,e=Na(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return xc=e,null}function K0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(it()){case Tt:return 2;case Ut:return 8;case bt:case Kt:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var gh=!1,tr=null,er=null,nr=null,ko=new Map,Xo=new Map,ir=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q0(e,i){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Oa(i),i!==null&&j0(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function PS(e,i,r,l,h){switch(i){case"focusin":return tr=Wo(tr,e,i,r,l,h),!0;case"dragenter":return er=Wo(er,e,i,r,l,h),!0;case"mouseover":return nr=Wo(nr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return ko.set(m,Wo(ko.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Xo.set(m,Wo(Xo.get(m)||null,e,i,r,l,h)),!0}return!1}function J0(e){var i=Na(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,Kn(e.priority,function(){Z0(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Kn(e.priority,function(){Z0(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=ph(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);pu=l,r.target.dispatchEvent(l),pu=null}else return i=Oa(r),i!==null&&j0(i),e.blockedOn=r,!1;i.shift()}return!0}function $0(e,i,r){yc(e)&&r.delete(i)}function IS(){gh=!1,tr!==null&&yc(tr)&&(tr=null),er!==null&&yc(er)&&(er=null),nr!==null&&yc(nr)&&(nr=null),ko.forEach($0),Xo.forEach($0)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,gh||(gh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,IS)))}var bc=null;function t_(e){bc!==e&&(bc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(mh(l||r)===null)continue;break}var m=Oa(r);m!==null&&(e.splice(i,3),i-=3,pf(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function ws(e){function i(Q){return Sc(Q,e)}tr!==null&&Sc(tr,e),er!==null&&Sc(er,e),nr!==null&&Sc(nr,e),ko.forEach(i),Xo.forEach(i);for(var r=0;r<ir.length;r++){var l=ir[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)J0(r),r.blockedOn===null&&ir.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],T=h[wn]||null;if(typeof m=="function")T||t_(r);else if(T){var I=null;if(m&&m.hasAttribute("formAction")){if(h=m,T=m[wn]||null)I=T.formAction;else if(mh(h)!==null)continue}else I=T.action;typeof I=="function"?r[l+1]=I:(r.splice(l,3),l-=3),t_(r)}}}function e_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(T){return h=T})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function _h(e){this._internalRoot=e}Mc.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=di();Y0(r,l,e,i,null,null)},Mc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Y0(e.current,2,null,e,null,null),ic(),i[wi]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var i=gn();e={blockedOn:null,target:e,priority:i};for(var r=0;r<ir.length&&i!==0&&i<ir[r].priority;r++);ir.splice(r,0,e),r===0&&J0(e)}};var n_=t.version;if(n_!=="19.2.4")throw Error(a(527,n_,"19.2.4"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var FS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Ot=Ec.inject(FS),b=Ec}catch{}}return Yo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",h=cg,m=ug,T=fg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(T=i.onRecoverableError)),i=X0(e,1,!1,null,null,r,l,null,h,m,T,e_),e[wi]=i.current,Jf(e),new _h(i)},Yo.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,h="",m=cg,T=ug,I=fg,Q=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(T=r.onCaughtError),r.onRecoverableError!==void 0&&(I=r.onRecoverableError),r.formState!==void 0&&(Q=r.formState)),i=X0(e,1,!0,i,r??null,l,h,Q,m,T,I,e_),i.context=W0(null),r=i.current,l=di(),l=Ye(l),h=Va(l),h.callback=null,ka(r,h,l),r=l,i.current.lanes=r,Se(i,r),ki(i),e[wi]=i.current,Jf(e),new Mc(i)},Yo.version="19.2.4",Yo}var u_;function WS(){if(u_)return xh.exports;u_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),xh.exports=XS(),xh.exports}var YS=WS();const qS=kv(YS),jS=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,f_=1920*1080*4;let ZS=class{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=JS();uniformCache={};textureUnitMap=new Map;constructor(t,n,a,o,c=0,u=0,f=2,p=f_,d=[]){if(t instanceof HTMLElement)this.parentElement=t;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(!document.querySelector("style[data-paper-shader]")){const v=document.createElement("style");v.innerHTML=QS,v.setAttribute("data-paper-shader",""),document.head.prepend(v)}const _=document.createElement("canvas");this.canvasElement=_,this.parentElement.prepend(_),this.fragmentShader=n,this.providedUniforms=a,this.mipmaps=d,this.currentFrame=u,this.minPixelRatio=f,this.maxPixelCount=p;const g=_.getContext("webgl2",o);if(!g)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=g,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(c),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,document.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{const t=KS(this.gl,jS,this.fragmentShader);t&&(this.program=t)};setupPositionAttribute=()=>{const t=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const a=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(a),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(t),this.gl.vertexAttribPointer(t,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{const t={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,a])=>{if(t[n]=this.gl.getUniformLocation(this.program,n),a instanceof HTMLImageElement){const o=`${n}AspectRatio`;t[o]=this.gl.getUniformLocation(this.program,o)}}),this.uniformLocations=t};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([t])=>{if(t?.borderBoxSize[0]){const n=t.devicePixelContentBoxSize?.[0];n!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=n.inlineSize,this.parentDevicePixelHeight=n.blockSize),this.parentWidth=t.borderBoxSize[0].inlineSize,this.parentHeight=t.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let t=0,n=0;const a=Math.max(1,window.devicePixelRatio),o=visualViewport?.scale??1;if(this.devicePixelsSupported){const _=Math.max(1,this.minPixelRatio/a);t=this.parentDevicePixelWidth*_*o,n=this.parentDevicePixelHeight*_*o}else{let _=Math.max(a,this.minPixelRatio)*o;if(this.isSafari){const g=$S();_*=Math.max(1,g)}t=Math.round(this.parentWidth)*_,n=Math.round(this.parentHeight)*_}const c=Math.sqrt(this.maxPixelCount)/Math.sqrt(t*n),u=Math.min(1,c),f=Math.round(t*u),p=Math.round(n*u),d=f/Math.round(this.parentWidth);(this.canvasElement.width!==f||this.canvasElement.height!==p||this.renderScale!==d)&&(this.renderScale=d,this.canvasElement.width=f,this.canvasElement.height=p,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=t=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=t-this.lastRenderTime;this.lastRenderTime=t,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null};requestRender=()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(t,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${t} must be fully loaded`);const a=this.textures.get(t);a&&this.gl.deleteTexture(a),this.textureUnitMap.has(t)||this.textureUnitMap.set(t,this.textureUnitMap.size);const o=this.textureUnitMap.get(t);this.gl.activeTexture(this.gl.TEXTURE0+o);const c=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,c),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(t)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const u=this.gl.getError();if(u!==this.gl.NO_ERROR||c===null){console.error("Paper Shaders: WebGL error when uploading texture:",u);return}this.textures.set(t,c);const f=this.uniformLocations[t];if(f){this.gl.uniform1i(f,o);const p=`${t}AspectRatio`,d=this.uniformLocations[p];if(d){const _=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(d,_)}}};areUniformValuesEqual=(t,n)=>t===n?!0:Array.isArray(t)&&Array.isArray(n)&&t.length===n.length?t.every((a,o)=>this.areUniformValuesEqual(a,n[o])):!1;setUniformValues=t=>{this.gl.useProgram(this.program),Object.entries(t).forEach(([n,a])=>{let o=a;if(a instanceof HTMLImageElement&&(o=`${a.src.slice(0,200)}|${a.naturalWidth}x${a.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],o))return;this.uniformCache[n]=o;const c=this.uniformLocations[n];if(!c){console.warn(`Uniform location for ${n} not found`);return}if(a instanceof HTMLImageElement)this.setTextureUniform(n,a);else if(Array.isArray(a)){let u=null,f=null;if(a[0]!==void 0&&Array.isArray(a[0])){const p=a[0].length;if(a.every(d=>d.length===p))u=a.flat(),f=p;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else u=a,f=u.length;switch(f){case 2:this.gl.uniform2fv(c,u);break;case 3:this.gl.uniform3fv(c,u);break;case 4:this.gl.uniform4fv(c,u);break;case 9:this.gl.uniformMatrix3fv(c,!1,u);break;case 16:this.gl.uniformMatrix4fv(c,!1,u);break;default:console.warn(`Unsupported uniform array length: ${f}`)}}else typeof a=="number"?this.gl.uniform1f(c,a):typeof a=="boolean"?this.gl.uniform1i(c,a?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof a}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=t=>{this.currentFrame=t,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(t=1)=>{this.speed=t,this.setCurrentSpeed(document.hidden?0:t)};setCurrentSpeed=t=>{this.currentSpeed=t,this.rafId===null&&t!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&t===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(t=f_)=>{this.maxPixelCount=t,this.handleResize()};setMinPixelRatio=(t=2)=>{this.minPixelRatio=t,this.handleResize()};setUniforms=t=>{this.setUniformValues(t),this.providedUniforms={...this.providedUniforms,...t},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(document.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(t=>{this.gl.deleteTexture(t)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),document.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}};function h_(s,t,n){const a=s.createShader(t);return a?(s.shaderSource(a,n),s.compileShader(a),s.getShaderParameter(a,s.COMPILE_STATUS)?a:(console.error("An error occurred compiling the shaders: "+s.getShaderInfoLog(a)),s.deleteShader(a),null)):null}function KS(s,t,n){const a=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT),o=a?a.precision:null;o&&o<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const c=h_(s,s.VERTEX_SHADER,t),u=h_(s,s.FRAGMENT_SHADER,n);if(!c||!u)return null;const f=s.createProgram();return f?(s.attachShader(f,c),s.attachShader(f,u),s.linkProgram(f),s.getProgramParameter(f,s.LINK_STATUS)?(s.detachShader(f,c),s.detachShader(f,u),s.deleteShader(c),s.deleteShader(u),f):(console.error("Unable to initialize the shader program: "+s.getProgramInfoLog(f)),s.deleteProgram(f),s.deleteShader(c),s.deleteShader(u),null)):null}const QS=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function JS(){const s=navigator.userAgent.toLowerCase();return s.includes("safari")&&!s.includes("chrome")&&!s.includes("android")}function $S(){const s=visualViewport?.scale??1,t=visualViewport?.width??window.innerWidth,n=window.innerWidth-document.documentElement.clientWidth,a=s*t+n,o=outerWidth/a,c=Math.round(100*o);return c%5===0?c/100:c===33?1/3:c===67?2/3:c===133?4/3:o}const tb={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},eb={none:0,contain:1,cover:2},d_={maxColorCount:10},nb=`#version 300 es
precision highp float;

in mediump vec2 v_imageUV;
in mediump vec2 v_objectUV;
out vec4 fragColor;

uniform sampler2D u_image;
uniform float u_time;
uniform mediump float u_imageAspectRatio;

uniform vec4 u_colorBack;
uniform vec4 u_colors[${d_.maxColorCount}];
uniform float u_colorsCount;

uniform float u_angle;
uniform float u_noise;
uniform float u_innerGlow;
uniform float u_outerGlow;
uniform float u_contour;

#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1. - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1. - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float circle(vec2 uv, vec2 c, vec2 r) {
  return 1. - smoothstep(r[0], r[1], length(uv - c));
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float shadowShape(vec2 uv, float t, float contour) {
  vec2 scaledUV = uv;

  // base shape tranjectory
  float posY = mix(-1., 2., t);

  // scaleX when it's moving down
  scaledUV.y -= .5;
  float mainCircleScale = sst(0., .8, posY) * lst(1.4, .9, posY);
  scaledUV *= vec2(1., 1. + 1.5 * mainCircleScale);
  scaledUV.y += .5;

  // base shape
  float innerR = .4;
  float outerR = 1. - .3 * (sst(.1, .2, t) * (1. - sst(.2, .5, t)));
  float s = circle(scaledUV, vec2(.5, posY - .2), vec2(innerR, outerR));
  float shapeSizing = sst(.2, .3, t) * sst(.6, .3, t);
  s = pow(s, 1.4);
  s *= 1.2;

  // flat gradient to take over the shadow shape
  float topFlattener = 0.;
  {
    float pos = posY - uv.y;
    float edge = 1.2;
    topFlattener = lst(-.4, 0., pos) * (1. - sst(.0, edge, pos));
    topFlattener = pow(topFlattener, 3.);
    float topFlattenerMixer = (1. - sst(.0, .3, pos));
    s = mix(topFlattener, s, topFlattenerMixer);
  }

  // apple right circle
  {
    float visibility = sst(.6, .7, t) * (1. - sst(.8, .9, t));
    float angle = -2. -t * TWO_PI;
    float rightCircle = circle(uv, vec2(.95 - .2 * cos(angle), .4 - .1 * sin(angle)), vec2(.15, .3));
    rightCircle *= visibility;
    s = mix(s, 0., rightCircle);
  }

  // apple top circle
  {
    float topCircle = circle(uv, vec2(.5, .19), vec2(.05, .25));
    topCircle += 2. * contour * circle(uv, vec2(.5, .19), vec2(.2, .5));
    float visibility = .55 * sst(.2, .3, t) * (1. - sst(.3, .45, t));
    topCircle *= visibility;
    s = mix(s, 0., topCircle);
  }

  float leafMask = circle(uv, vec2(.53, .13), vec2(.08, .19));
  leafMask = mix(leafMask, 0., 1. - sst(.4, .54, uv.x));
  leafMask = mix(0., leafMask, sst(.0, .2, uv.y));
  leafMask *= (sst(.5, 1.1, posY) * sst(1.5, 1.3, posY));
  s += leafMask;

  // apple bottom circle
  {
    float visibility = sst(.0, .4, t) * (1. - sst(.6, .8, t));
    s = mix(s, 0., visibility * circle(uv, vec2(.52, .92), vec2(.09, .25)));
  }

  // random balls that are invisible if apple logo is selected
  {
    float pos = sst(.0, .6, t) * (1. - sst(.6, 1., t));
    s = mix(s, .5, circle(uv, vec2(.0, 1.2 - .5 * pos), vec2(.1, .3)));
    s = mix(s, .0, circle(uv, vec2(1., .5 + .5 * pos), vec2(.1, .3)));

    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * sst(.7, .5, t)), vec2(.07, .22)));
    s = mix(s, 1., circle(uv, vec2(.95, .2 + .2 * sst(.3, .4, t) * (1. - sst(.5, .7, t))), vec2(.07, .22)));
    s /= max(1e-4, sst(1., .85, uv.y));
  }

  s = clamp(0., 1., s);
  return s;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).g;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).g;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).g;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).g;

  return sum / norm;
}

void main() {
  vec2 uv = v_objectUV + .5;
  uv.y = 1. - uv.y;

  vec2 imgUV = v_imageUV;
  imgUV -= .5;
  imgUV *= 0.5714285714285714;
  imgUV += .5;
  float imgSoftFrame = getImgFrame(imgUV, .03);

  vec4 img = texture(u_image, imgUV);
  vec2 dudx = dFdx(imgUV);
  vec2 dudy = dFdy(imgUV);

  if (img.a == 0.) {
    fragColor = u_colorBack;
    return;
  }

  float t = .1 * u_time;
  t -= .3;

  float tCopy = t + 1. / 3.;
  float tCopy2 = t + 2. / 3.;

  t = mod(t, 1.);
  tCopy = mod(tCopy, 1.);
  tCopy2 = mod(tCopy2, 1.);

  vec2 animationUV = imgUV - vec2(.5);
  float angle = -u_angle * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  animationUV = vec2(
  animationUV.x * cosA - animationUV.y * sinA,
  animationUV.x * sinA + animationUV.y * cosA
  ) + vec2(.5);

  float shape = img[0];

  img[1] = blurEdge3x3(u_image, imgUV, dudx, dudy, 8., img[1]);

  float outerBlur = 1. - mix(1., img[1], shape);
  float innerBlur = mix(img[1], 0., shape);
  float contour = mix(img[2], 0., shape);

  outerBlur *= imgSoftFrame;

  float shadow = shadowShape(animationUV, t, innerBlur);
  float shadowCopy = shadowShape(animationUV, tCopy, innerBlur);
  float shadowCopy2 = shadowShape(animationUV, tCopy2, innerBlur);

  float inner = .8 + .8 * innerBlur;
  inner = mix(inner, 0., shadow);
  inner = mix(inner, 0., shadowCopy);
  inner = mix(inner, 0., shadowCopy2);

  inner *= mix(0., 2., u_innerGlow);

  inner += (u_contour * 2.) * contour;
  inner = min(1., inner);
  inner *= (1. - shape);

  float outer = 0.;
  {
    t *= 3.;
    t = mod(t - .1, 1.);

    outer = .9 * pow(outerBlur, .8);
    float y = mod(animationUV.y - t, 1.);
    float animatedMask = sst(.3, .65, y) * (1. - sst(.65, 1., y));
    animatedMask = .5 + animatedMask;
    outer *= animatedMask;
    outer *= mix(0., 5., pow(u_outerGlow, 2.));
    outer *= imgSoftFrame;
  }

  inner = pow(inner, 1.2);
  float heat = clamp(inner + outer, 0., 1.);

  heat += (.005 + .35 * u_noise) * (fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  float mixer = heat * u_colorsCount;
  vec4 gradient = u_colors[0];
  gradient.rgb *= gradient.a;
  float outerShape = 0.;
  for (int i = 1; i < ${d_.maxColorCount+1}; i++) {
    if (i > int(u_colorsCount)) break;
    float m = clamp(mixer - float(i - 1), 0., 1.);
    if (i == 1) {
      outerShape = m;
    }
    vec4 c = u_colors[i - 1];
    c.rgb *= c.a;
    gradient = mix(gradient, c, m);
  }

  vec3 color = gradient.rgb * outerShape;
  float opacity = gradient.a * outerShape;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1.0 - opacity);
  opacity = opacity + u_colorBack.a * (1.0 - opacity);

  color += .02 * (fract(sin(dot(uv + 1., vec2(12.9898, 78.233))) * 43758.5453123) - .5);

  fragColor = vec4(color, opacity);
}
`;function p_(s){const t=document.createElement("canvas"),n=1e3;return new Promise((a,o)=>{const c=new Image;c.crossOrigin="anonymous",c.addEventListener("load",()=>{(typeof s=="string"?s.endsWith(".svg"):s.type==="image/svg+xml")&&(c.width=n,c.height=n);const u=c.naturalWidth/c.naturalHeight,f=Math.floor(n*.15),p=Math.ceil(f*2.5);let d=n,_=n;u>1?_=Math.floor(n/u):d=Math.floor(n*u),t.width=d+2*p,t.height=_+2*p;const g=t.getContext("2d",{willReadFrequently:!0});if(!g)throw new Error("Failed to get canvas 2d context");g.fillStyle="white",g.fillRect(0,0,t.width,t.height),g.drawImage(c,p,p,d,_);const{width:v,height:S}=t,M=g.getImageData(0,0,v,S).data,y=v*S,x=new Uint8ClampedArray(y);for(let w=0;w<y;w++){const X=w*4,Z=M[X]??0,tt=M[X+1]??0,et=M[X+2]??0;x[w]=.299*Z+.587*tt+.114*et|0}const P=f,N=Math.max(1,Math.round(.12*f)),L=5,H=Mh(x,v,S,P,3),k=Mh(x,v,S,N,3),z=Mh(x,v,S,L,1),K=g.createImageData(v,S),R=K.data;for(let w=0;w<y;w++){const X=w*4;R[X]=z[w]??0,R[X+1]=H[w]??0,R[X+2]=k[w]??0,R[X+3]=255}g.putImageData(K,0,0),t.toBlob(w=>{if(!w){o(new Error("Failed to create PNG blob"));return}a({blob:w})},"image/png")}),c.addEventListener("error",()=>{o(new Error("Failed to load image"))}),c.src=typeof s=="string"?s:URL.createObjectURL(s)})}function m_(s,t,n,a){if(a<=0)return s.slice();const o=new Uint8ClampedArray(t*n),c=new Uint32Array(t*n);for(let u=0;u<n;u++){let f=0;for(let p=0;p<t;p++){const d=u*t+p,_=s[d]??0;f+=_,c[d]=f+(u>0?c[d-t]??0:0)}}for(let u=0;u<n;u++){const f=Math.max(0,u-a),p=Math.min(n-1,u+a);for(let d=0;d<t;d++){const _=Math.max(0,d-a),g=Math.min(t-1,d+a),v=p*t+g,S=p*t+(_-1),E=(f-1)*t+g,M=(f-1)*t+(_-1),y=c[v]??0,x=_>0?c[S]??0:0,P=f>0?c[E]??0:0,N=_>0&&f>0?c[M]??0:0,L=y-x-P+N,H=(g-_+1)*(p-f+1);o[u*t+d]=Math.round(L/H)}}return o}function Mh(s,t,n,a,o){if(a<=0||o<=1)return m_(s,t,n,a);let c=s,u=s;for(let f=0;f<o;f++)u=m_(c,t,n,a),c=u;return u}function g_(s){if(Array.isArray(s))return s.length===4?s:s.length===3?[...s,1]:Eh;if(typeof s!="string")return Eh;let t,n,a,o=1;if(s.startsWith("#"))[t,n,a,o]=ib(s);else if(s.startsWith("rgb"))[t,n,a,o]=ab(s);else if(s.startsWith("hsl"))[t,n,a,o]=sb(rb(s));else return console.error("Unsupported color format",s),Eh;return[Tc(t,0,1),Tc(n,0,1),Tc(a,0,1),Tc(o,0,1)]}function ib(s){s=s.replace(/^#/,""),s.length===3&&(s=s.split("").map(c=>c+c).join("")),s.length===6&&(s=s+"ff");const t=parseInt(s.slice(0,2),16)/255,n=parseInt(s.slice(2,4),16)/255,a=parseInt(s.slice(4,6),16)/255,o=parseInt(s.slice(6,8),16)/255;return[t,n,a,o]}function ab(s){const t=s.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0")/255,parseInt(t[2]??"0")/255,parseInt(t[3]??"0")/255,t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function rb(s){const t=s.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return t?[parseInt(t[1]??"0"),parseInt(t[2]??"0"),parseInt(t[3]??"0"),t[4]===void 0?1:parseFloat(t[4])]:[0,0,0,1]}function sb(s){const[t,n,a,o]=s,c=t/360,u=n/100,f=a/100;let p,d,_;if(n===0)p=d=_=f;else{const g=(E,M,y)=>(y<0&&(y+=1),y>1&&(y-=1),y<.16666666666666666?E+(M-E)*6*y:y<.5?M:y<.6666666666666666?E+(M-E)*(.6666666666666666-y)*6:E),v=f<.5?f*(1+u):f+u-f*u,S=2*f-v;p=g(S,v,c+1/3),d=g(S,v,c),_=g(S,v,c-1/3)}return[p,d,_,o]}const Tc=(s,t,n)=>Math.min(Math.max(s,t),n),Eh=[0,0,0,1];function ob(){if(typeof window>"u"){console.warn("Paper Shaders: can’t create an image on the server");return}const s=new Image;return s.src=lb,s}const lb="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function cb(s){const t=mn.useRef(void 0),n=mn.useCallback(a=>{const o=s.map(c=>{if(c!=null){if(typeof c=="function"){const u=c,f=u(a);return typeof f=="function"?f:()=>{u(null)}}return c.current=a,()=>{c.current=null}}});return()=>{o.forEach(c=>c?.())}},s);return mn.useMemo(()=>s.every(a=>a==null)?null:a=>{t.current&&(t.current(),t.current=void 0),a!=null&&(t.current=n(a))},s)}function __(s){if(s.naturalWidth<1024&&s.naturalHeight<1024){if(s.naturalWidth<1||s.naturalHeight<1)return;const t=s.naturalWidth/s.naturalHeight;s.width=Math.round(t>1?1024*t:1024),s.height=Math.round(t>1?1024:1024/t)}}var Th={exports:{}},qo={};var v_;function ub(){if(v_)return qo;v_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return qo.Fragment=t,qo.jsx=n,qo.jsxs=n,qo}var x_;function fb(){return x_||(x_=1,Th.exports=ub()),Th.exports}var Xv=fb();async function y_(s){const t={},n=[],a=c=>{try{return c.startsWith("/")||new URL(c),!0}catch{return!1}},o=c=>{try{return c.startsWith("/")?!1:new URL(c,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(s).forEach(([c,u])=>{if(typeof u=="string"){if(!u){t[c]=ob();return}if(!a(u)){console.warn(`Uniform "${c}" has invalid URL "${u}". Skipping image loading.`);return}const f=new Promise((p,d)=>{const _=new Image;o(u)&&(_.crossOrigin="anonymous"),_.onload=()=>{__(_),t[c]=_,p()},_.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${u}`),d()},_.src=u});n.push(f)}else u instanceof HTMLImageElement&&__(u),t[c]=u}),await Promise.all(n),t}const Wv=mn.forwardRef(function({fragmentShader:t,uniforms:n,webGlContextAttributes:a,speed:o=0,frame:c=0,width:u,height:f,minPixelRatio:p,maxPixelCount:d,mipmaps:_,style:g,...v},S){const[E,M]=mn.useState(!1),y=mn.useRef(null),x=mn.useRef(null),P=mn.useRef(a);mn.useEffect(()=>((async()=>{const H=await y_(n);y.current&&!x.current&&(x.current=new ZS(y.current,t,H,P.current,o,c,p,d,_),M(!0))})(),()=>{x.current?.dispose(),x.current=null}),[t]),mn.useEffect(()=>{let L=!1;return(async()=>{const k=await y_(n);L||x.current?.setUniforms(k)})(),()=>{L=!0}},[n,E]),mn.useEffect(()=>{x.current?.setSpeed(o)},[o,E]),mn.useEffect(()=>{x.current?.setMaxPixelCount(d)},[d,E]),mn.useEffect(()=>{x.current?.setMinPixelRatio(p)},[p,E]),mn.useEffect(()=>{x.current?.setFrame(c)},[c,E]);const N=cb([y,S]);return Xv.jsx("div",{ref:N,style:u!==void 0||f!==void 0?{width:typeof u=="string"&&isNaN(+u)===!1?+u:u,height:typeof f=="string"&&isNaN(+f)===!1?+f:f,...g}:g,...v})});Wv.displayName="ShaderMount";function hb(s,t){for(const n in s){if(n==="colors"){const a=Array.isArray(s.colors),o=Array.isArray(t.colors);if(!a||!o){if(Object.is(s.colors,t.colors)===!1)return!1;continue}if(s.colors?.length!==t.colors?.length||!s.colors?.every((c,u)=>c===t.colors?.[u]))return!1;continue}if(Object.is(s[n],t[n])===!1)return!1}return!0}const S_="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",db=s=>typeof s=="object"&&typeof s.then=="function",b_=[];function pb(s,t){if(s===t)return!0;if(!s||!t)return!1;const n=s.length;if(t.length!==n)return!1;for(let a=0;a<n;a++)if(s[a]!==t[a])return!1;return!0}function mb(s,t=null){t===null&&(t=[s]);for(const a of b_)if(pb(t,a.keys)){if(Object.prototype.hasOwnProperty.call(a,"error"))throw a.error;if(Object.prototype.hasOwnProperty.call(a,"response"))return a.response;throw a.promise}const n={keys:t,promise:(db(s)?s:s(...t)).then(a=>{n.response=a}).catch(a=>n.error=a)};throw b_.push(n),n.promise}const gb=(s,t)=>mb(s,t),Rn={params:{...tb,scale:.75,speed:1,frame:0,contour:.5,angle:0,noise:0,innerGlow:.5,outerGlow:.5,colorBack:"#000000",colors:["#11206a","#1f3ba2","#2f63e7","#6bd7ff","#ffe679","#ff991e","#ff4c00"]}},_b=mn.memo(function({speed:t=Rn.params.speed,frame:n=Rn.params.frame,image:a="",contour:o=Rn.params.contour,angle:c=Rn.params.angle,noise:u=Rn.params.noise,innerGlow:f=Rn.params.innerGlow,outerGlow:p=Rn.params.outerGlow,colorBack:d=Rn.params.colorBack,colors:_=Rn.params.colors,suspendWhenProcessingImage:g=!1,fit:v=Rn.params.fit,offsetX:S=Rn.params.offsetX,offsetY:E=Rn.params.offsetY,originX:M=Rn.params.originX,originY:y=Rn.params.originY,rotation:x=Rn.params.rotation,scale:P=Rn.params.scale,worldHeight:N=Rn.params.worldHeight,worldWidth:L=Rn.params.worldWidth,...H}){const k=typeof a=="string"?a:a.src,[z,K]=mn.useState(S_);let R;g&&typeof window<"u"?R=gb(()=>p_(k).then(X=>URL.createObjectURL(X.blob)),[k,"heatmap"]):R=z,mn.useLayoutEffect(()=>{if(g)return;if(!k){K(S_);return}let X,Z=!0;return p_(k).then(tt=>{Z&&(X=URL.createObjectURL(tt.blob),K(X))}),()=>{Z=!1}},[k,g]);const w=mn.useMemo(()=>({u_image:R,u_contour:o,u_angle:c,u_noise:u,u_innerGlow:f,u_outerGlow:p,u_colorBack:g_(d),u_colors:_.map(g_),u_colorsCount:_.length,u_fit:eb[v],u_offsetX:S,u_offsetY:E,u_originX:M,u_originY:y,u_rotation:x,u_scale:P,u_worldHeight:N,u_worldWidth:L}),[t,n,o,c,u,f,p,_,d,R,v,S,E,M,y,x,P,N,L]);return Xv.jsx(Wv,{...H,speed:t,frame:n,fragmentShader:nb,mipmaps:["u_image"],uniforms:w})},hb);function vb(){const[s,t]=mn.useState({width:window.innerWidth,height:window.innerHeight});return mn.useEffect(()=>{const n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),il.createElement("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-5,pointerEvents:"none"}},il.createElement(_b,{width:s.width,height:s.height,image:"/3d_depth_testimonial/images/aldux_logo.png",colors:["#080f36","#318de3","#8c30e8","#e66bff","#ffe77a","#7d57fa"],colorBack:"#000000",contour:.84,angle:0,noise:0,innerGlow:.53,outerGlow:.5,speed:.5,scale:.19,offsetY:-.36}))}const M_=document.getElementById("shader-root");M_&&qS.createRoot(M_).render(il.createElement(il.StrictMode,null,il.createElement(vb,null)));const cp="182",xb=0,E_=1,yb=2,Kc=1,Yv=2,el=3,mr=0,ri=1,Zi=2,wa=0,qs=1,T_=2,A_=3,R_=4,Sb=5,kr=100,bb=101,Mb=102,Eb=103,Tb=104,Ab=200,Rb=201,Cb=202,wb=203,cd=204,ud=205,Ub=206,Db=207,Lb=208,Nb=209,Ob=210,Pb=211,Ib=212,Fb=213,Bb=214,fd=0,hd=1,dd=2,Zs=3,pd=4,md=5,gd=6,_d=7,qv=0,zb=1,Gb=2,Ji=0,jv=1,Zv=2,Kv=3,Qv=4,Jv=5,$v=6,tx=7,ex=300,Zr=301,Ks=302,vd=303,xd=304,cu=306,yd=1e3,Ca=1001,Sd=1002,Gn=1003,Hb=1004,Ac=1005,Xn=1006,Ah=1007,Yr=1008,_i=1009,nx=1010,ix=1011,rl=1012,up=1013,ea=1014,Ki=1015,Da=1016,fp=1017,hp=1018,sl=1020,ax=35902,rx=35899,sx=1021,ox=1022,Bi=1023,La=1026,qr=1027,lx=1028,dp=1029,Qs=1030,pp=1031,mp=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,bd=35840,Md=35841,Ed=35842,Td=35843,Ad=36196,Rd=37492,Cd=37496,wd=37488,Ud=37489,Dd=37490,Ld=37491,Nd=37808,Od=37809,Pd=37810,Id=37811,Fd=37812,Bd=37813,zd=37814,Gd=37815,Hd=37816,Vd=37817,kd=37818,Xd=37819,Wd=37820,Yd=37821,qd=36492,jd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,Vb=3200,cx=0,kb=1,hr="",Ci="srgb",Js="srgb-linear",nu="linear",Ke="srgb",Us=7680,C_=519,Xb=512,Wb=513,Yb=514,gp=515,qb=516,jb=517,_p=518,Zb=519,w_=35044,U_="300 es",Qi=2e3,iu=2001;function ux(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function au(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kb(){const s=au("canvas");return s.style.display="block",s}const D_={};function L_(...s){const t="THREE."+s.shift();console.log(t,...s)}function _e(...s){const t="THREE."+s.shift();console.warn(t,...s)}function ze(...s){const t="THREE."+s.shift();console.error(t,...s)}function ol(...s){const t=s.join(" ");t in D_||(D_[t]=!0,_e(...s))}function Qb(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class to{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=Math.PI/180,tp=180/Math.PI;function ul(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[n&63|128]+Vn[n>>8&255]+"-"+Vn[n>>16&255]+Vn[n>>24&255]+Vn[a&255]+Vn[a>>8&255]+Vn[a>>16&255]+Vn[a>>24&255]).toLowerCase()}function Ne(s,t,n){return Math.max(t,Math.min(n,s))}function Jb(s,t){return(s%t+t)%t}function Ch(s,t,n){return(1-n)*s+n*t}function jo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(t=0,n=0){Xe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ne(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,f){let p=a[o+0],d=a[o+1],_=a[o+2],g=a[o+3],v=c[u+0],S=c[u+1],E=c[u+2],M=c[u+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=S,t[n+2]=E,t[n+3]=M;return}if(g!==M||p!==v||d!==S||_!==E){let y=p*v+d*S+_*E+g*M;y<0&&(v=-v,S=-S,E=-E,M=-M,y=-y);let x=1-f;if(y<.9995){const P=Math.acos(y),N=Math.sin(P);x=Math.sin(x*P)/N,f=Math.sin(f*P)/N,p=p*x+v*f,d=d*x+S*f,_=_*x+E*f,g=g*x+M*f}else{p=p*x+v*f,d=d*x+S*f,_=_*x+E*f,g=g*x+M*f;const P=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=P,d*=P,_*=P,g*=P}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,u){const f=a[o],p=a[o+1],d=a[o+2],_=a[o+3],g=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return t[n]=f*E+_*g+p*S-d*v,t[n+1]=p*E+_*v+d*g-f*S,t[n+2]=d*E+_*S+f*v-p*g,t[n+3]=_*E-f*g-p*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(o/2),g=f(c/2),v=p(a/2),S=p(o/2),E=p(c/2);switch(u){case"XYZ":this._x=v*_*g+d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g-v*S*E;break;case"YXZ":this._x=v*_*g+d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g+v*S*E;break;case"ZXY":this._x=v*_*g-d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g-v*S*E;break;case"ZYX":this._x=v*_*g-d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g+v*S*E;break;case"YZX":this._x=v*_*g+d*S*E,this._y=d*S*g+v*_*E,this._z=d*_*E-v*S*g,this._w=d*_*g-v*S*E;break;case"XZY":this._x=v*_*g-d*S*E,this._y=d*S*g-v*_*E,this._z=d*_*E+v*S*g,this._w=d*_*g+v*S*E;break;default:_e("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-d)*S,this._z=(u-o)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(c-d)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(u-o)/S,this._x=(c+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*f+o*d-c*p,this._y=o*_+u*p+c*f-a*d,this._z=c*_+u*d+a*p-o*f,this._w=u*_-a*f-o*p-c*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,c=-c,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class yt{constructor(t=0,n=0,a=0){yt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(N_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(N_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*o-f*a),_=2*(f*n-c*o),g=2*(c*a-u*n);return this.x=n+p*d+u*g-f*_,this.y=a+p*_+f*d-c*g,this.z=o+p*g+c*_-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this.z=Ne(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this.z=Ne(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*u-a*p,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return wh.copy(this).projectOnVector(t),this.sub(wh)}reflect(t){return this.sub(wh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ne(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new yt,N_=new fl;class Me{constructor(t,n,a,o,c,u,f,p,d){Me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d)}set(t,n,a,o,c,u,f,p,d){const _=this.elements;return _[0]=t,_[1]=o,_[2]=f,_[3]=n,_[4]=c,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],E=a[8],M=o[0],y=o[3],x=o[6],P=o[1],N=o[4],L=o[7],H=o[2],k=o[5],z=o[8];return c[0]=u*M+f*P+p*H,c[3]=u*y+f*N+p*k,c[6]=u*x+f*L+p*z,c[1]=d*M+_*P+g*H,c[4]=d*y+_*N+g*k,c[7]=d*x+_*L+g*z,c[2]=v*M+S*P+E*H,c[5]=v*y+S*N+E*k,c[8]=v*x+S*L+E*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*u*_-n*f*d-a*c*_+a*f*p+o*c*d-o*u*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*u-f*d,v=f*p-_*c,S=d*c-u*p,E=n*g+a*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(o*d-_*a)*M,t[2]=(f*a-o*u)*M,t[3]=v*M,t[4]=(_*n-o*p)*M,t[5]=(o*c-f*n)*M,t[6]=S*M,t[7]=(a*p-d*n)*M,t[8]=(u*n-a*c)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,f){const p=Math.cos(c),d=Math.sin(c);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-o*d,o*p,-o*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Uh.makeScale(t,n)),this}rotate(t){return this.premultiply(Uh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Uh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uh=new Me,O_=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $b(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ke&&(o.r=Ua(o.r),o.g=Ua(o.g),o.b=Ua(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ke&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===hr?nu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Js]:{primaries:t,whitePoint:a,transfer:nu,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:t,whitePoint:a,transfer:Ke,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),s}const Pe=$b();function Ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class t1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Ds===void 0&&(Ds=au("canvas")),Ds.width=t.width,Ds.height=t.height;const o=Ds.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Ds}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=au("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ua(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ua(n[a]/255)*255):n[a]=Ua(n[a]);return{data:n,width:t.width,height:t.height}}else return _e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let e1=0;class vp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=ul(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?c.push(Dh(o[u].image)):c.push(Dh(o[u]))}else c=Dh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Dh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?t1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(_e("Texture: Unable to serialize Texture."),{})}let n1=0;const Lh=new yt;class Wn extends to{constructor(t=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=Ca,o=Ca,c=Xn,u=Yr,f=Bi,p=_i,d=Wn.DEFAULT_ANISOTROPY,_=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=ul(),this.name="",this.source=new vp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lh).x}get height(){return this.source.getSize(Lh).y}get depth(){return this.source.getSize(Lh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){_e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){_e(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ex)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yd:t.x=t.x-Math.floor(t.x);break;case Ca:t.x=t.x<0?0:1;break;case Sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yd:t.y=t.y-Math.floor(t.y);break;case Ca:t.y=t.y<0?0:1;break;case Sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=ex;Wn.DEFAULT_ANISOTROPY=1;class un{constructor(t=0,n=0,a=0,o=1){un.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],E=p[9],M=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(d+1)/2,L=(S+1)/2,H=(x+1)/2,k=(_+v)/4,z=(g+M)/4,K=(E+y)/4;return N>L&&N>H?N<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(N),o=k/a,c=z/a):L>H?L<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(L),a=k/o,c=K/o):H<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(H),a=z/c,o=K/c),this.set(a,o,c,n),this}let P=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(g-M)/P,this.z=(v-_)/P,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ne(this.x,t.x,n.x),this.y=Ne(this.y,t.y,n.y),this.z=Ne(this.z,t.z,n.z),this.w=Ne(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ne(this.x,t,n),this.y=Ne(this.y,t,n),this.z=Ne(this.z,t,n),this.w=Ne(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ne(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i1 extends to{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Wn(o);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new vp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends i1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class fx extends Wn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class a1 extends Wn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(t=new yt(1/0,1/0,1/0),n=new yt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Oi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Oi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Oi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=c.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,Oi):Oi.fromBufferAttribute(c,u),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Rc.copy(a.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zo),Cc.subVectors(this.max,Zo),Ls.subVectors(t.a,Zo),Ns.subVectors(t.b,Zo),Os.subVectors(t.c,Zo),rr.subVectors(Ns,Ls),sr.subVectors(Os,Ns),Or.subVectors(Ls,Os);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Or.z,Or.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Or.z,0,-Or.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Or.y,Or.x,0];return!Nh(n,Ls,Ns,Os,Cc)||(n=[1,0,0,0,1,0,0,0,1],!Nh(n,Ls,Ns,Os,Cc))?!1:(wc.crossVectors(rr,sr),n=[wc.x,wc.y,wc.z],Nh(n,Ls,Ns,Os,Cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ma=[new yt,new yt,new yt,new yt,new yt,new yt,new yt,new yt],Oi=new yt,Rc=new hl,Ls=new yt,Ns=new yt,Os=new yt,rr=new yt,sr=new yt,Or=new yt,Zo=new yt,Cc=new yt,wc=new yt,Pr=new yt;function Nh(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Pr.fromArray(s,c);const f=o.x*Math.abs(Pr.x)+o.y*Math.abs(Pr.y)+o.z*Math.abs(Pr.z),p=t.dot(Pr),d=n.dot(Pr),_=a.dot(Pr);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const r1=new hl,Ko=new yt,Oh=new yt;class xp{constructor(t=new yt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):r1.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ko.subVectors(t,this.center);const n=Ko.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ko,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ko.copy(t.center).add(Oh)),this.expandByPoint(Ko.copy(t.center).sub(Oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ea=new yt,Ph=new yt,Uc=new yt,or=new yt,Ih=new yt,Dc=new yt,Fh=new yt;class s1{constructor(t=new yt,n=new yt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ea)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ea.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ea.copy(this.origin).addScaledVector(this.direction,n),Ea.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Ph.copy(t).add(n).multiplyScalar(.5),Uc.copy(n).sub(t).normalize(),or.copy(this.origin).sub(Ph);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Uc),f=or.dot(this.direction),p=-or.dot(Uc),d=or.lengthSq(),_=Math.abs(1-u*u);let g,v,S,E;if(_>0)if(g=u*p-f,v=u*f-p,E=c*_,g>=0)if(v>=-E)if(v<=E){const M=1/_;g*=M,v*=M,S=g*(g+u*v+2*f)+v*(u*g+v+2*p)+d}else v=c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;else v=-c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-E?(g=Math.max(0,-(-u*c+f)),v=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+d):v<=E?(g=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+d):(g=Math.max(0,-(u*c+f)),v=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+v*(v+2*p)+d);else v=u>0?-c:c,g=Math.max(0,-(u*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ph).addScaledVector(Uc,v),S}intersectSphere(t,n){Ea.subVectors(t.center,this.origin);const a=Ea.dot(this.direction),o=Ea.dot(Ea)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),_>=0?(c=(t.min.y-v.y)*_,u=(t.max.y-v.y)*_):(c=(t.max.y-v.y)*_,u=(t.min.y-v.y)*_),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ea)!==null}intersectTriangle(t,n,a,o,c){Ih.subVectors(n,t),Dc.subVectors(a,t),Fh.crossVectors(Ih,Dc);let u=this.direction.dot(Fh),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;or.subVectors(this.origin,t);const p=f*this.direction.dot(Dc.crossVectors(or,Dc));if(p<0)return null;const d=f*this.direction.dot(Ih.cross(or));if(d<0||p+d>u)return null;const _=-f*or.dot(Fh);return _<0?null:this.at(_/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(t,n,a,o,c,u,f,p,d,_,g,v,S,E,M,y){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,f,p,d,_,g,v,S,E,M,y)}set(t,n,a,o,c,u,f,p,d,_,g,v,S,E,M,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=c,x[5]=u,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=E,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Ps.setFromMatrixColumn(t,0).length(),c=1/Ps.setFromMatrixColumn(t,1).length(),u=1/Ps.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=u*_,S=u*g,E=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+E*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=E+S*d,n[10]=u*p}else if(t.order==="YXZ"){const v=p*_,S=p*g,E=d*_,M=d*g;n[0]=v+M*f,n[4]=E*f-S,n[8]=u*d,n[1]=u*g,n[5]=u*_,n[9]=-f,n[2]=S*f-E,n[6]=M+v*f,n[10]=u*p}else if(t.order==="ZXY"){const v=p*_,S=p*g,E=d*_,M=d*g;n[0]=v-M*f,n[4]=-u*g,n[8]=E+S*f,n[1]=S+E*f,n[5]=u*_,n[9]=M-v*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const v=u*_,S=u*g,E=f*_,M=f*g;n[0]=p*_,n[4]=E*d-S,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=S*d-E,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const v=u*p,S=u*d,E=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=E*g+S,n[1]=g,n[5]=u*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+E,n[10]=v-M*g}else if(t.order==="XZY"){const v=u*p,S=u*d,E=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=u*_,n[9]=S*g-E,n[2]=E*g-S,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o1,t,l1)}lookAt(t,n,a){const o=this.elements;return pi.subVectors(t,n),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),lr.crossVectors(a,pi),lr.lengthSq()===0&&(Math.abs(a.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),lr.crossVectors(a,pi)),lr.normalize(),Lc.crossVectors(pi,lr),o[0]=lr.x,o[4]=Lc.x,o[8]=pi.x,o[1]=lr.y,o[5]=Lc.y,o[9]=pi.y,o[2]=lr.z,o[6]=Lc.z,o[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],E=a[2],M=a[6],y=a[10],x=a[14],P=a[3],N=a[7],L=a[11],H=a[15],k=o[0],z=o[4],K=o[8],R=o[12],w=o[1],X=o[5],Z=o[9],tt=o[13],et=o[2],Y=o[6],D=o[10],G=o[14],j=o[3],ct=o[7],ft=o[11],B=o[15];return c[0]=u*k+f*w+p*et+d*j,c[4]=u*z+f*X+p*Y+d*ct,c[8]=u*K+f*Z+p*D+d*ft,c[12]=u*R+f*tt+p*G+d*B,c[1]=_*k+g*w+v*et+S*j,c[5]=_*z+g*X+v*Y+S*ct,c[9]=_*K+g*Z+v*D+S*ft,c[13]=_*R+g*tt+v*G+S*B,c[2]=E*k+M*w+y*et+x*j,c[6]=E*z+M*X+y*Y+x*ct,c[10]=E*K+M*Z+y*D+x*ft,c[14]=E*R+M*tt+y*G+x*B,c[3]=P*k+N*w+L*et+H*j,c[7]=P*z+N*X+L*Y+H*ct,c[11]=P*K+N*Z+L*D+H*ft,c[15]=P*R+N*tt+L*G+H*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],S=t[14],E=t[3],M=t[7],y=t[11],x=t[15],P=p*S-d*v,N=f*S-d*g,L=f*v-p*g,H=u*S-d*_,k=u*v-p*_,z=u*g-f*_;return n*(M*P-y*N+x*L)-a*(E*P-y*H+x*k)+o*(E*N-M*H+x*z)-c*(E*L-M*k+y*z)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],S=t[11],E=t[12],M=t[13],y=t[14],x=t[15],P=g*y*d-M*v*d+M*p*S-f*y*S-g*p*x+f*v*x,N=E*v*d-_*y*d-E*p*S+u*y*S+_*p*x-u*v*x,L=_*M*d-E*g*d+E*f*S-u*M*S-_*f*x+u*g*x,H=E*g*p-_*M*p-E*f*v+u*M*v+_*f*y-u*g*y,k=n*P+a*N+o*L+c*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return t[0]=P*z,t[1]=(M*v*c-g*y*c-M*o*S+a*y*S+g*o*x-a*v*x)*z,t[2]=(f*y*c-M*p*c+M*o*d-a*y*d-f*o*x+a*p*x)*z,t[3]=(g*p*c-f*v*c-g*o*d+a*v*d+f*o*S-a*p*S)*z,t[4]=N*z,t[5]=(_*y*c-E*v*c+E*o*S-n*y*S-_*o*x+n*v*x)*z,t[6]=(E*p*c-u*y*c-E*o*d+n*y*d+u*o*x-n*p*x)*z,t[7]=(u*v*c-_*p*c+_*o*d-n*v*d-u*o*S+n*p*S)*z,t[8]=L*z,t[9]=(E*g*c-_*M*c-E*a*S+n*M*S+_*a*x-n*g*x)*z,t[10]=(u*M*c-E*f*c+E*a*d-n*M*d-u*a*x+n*f*x)*z,t[11]=(_*f*c-u*g*c-_*a*d+n*g*d+u*a*S-n*f*S)*z,t[12]=H*z,t[13]=(_*M*o-E*g*o+E*a*v-n*M*v-_*a*y+n*g*y)*z,t[14]=(E*f*o-u*M*o-E*a*p+n*M*p+u*a*y-n*f*y)*z,t[15]=(u*g*o-_*f*o+_*a*p-n*g*p-u*a*v+n*f*v)*z,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,f=t.y,p=t.z,d=c*u,_=c*f;return this.set(d*u+a,d*f-o*p,d*p+o*f,0,d*f+o*p,_*f+a,_*p-o*u,0,d*p-o*f,_*p+o*u,c*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,f=n._z,p=n._w,d=c+c,_=u+u,g=f+f,v=c*d,S=c*_,E=c*g,M=u*_,y=u*g,x=f*g,P=p*d,N=p*_,L=p*g,H=a.x,k=a.y,z=a.z;return o[0]=(1-(M+x))*H,o[1]=(S+L)*H,o[2]=(E-N)*H,o[3]=0,o[4]=(S-L)*k,o[5]=(1-(v+x))*k,o[6]=(y+P)*k,o[7]=0,o[8]=(E+N)*z,o[9]=(y-P)*z,o[10]=(1-(v+M))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let c=Ps.set(o[0],o[1],o[2]).length();const u=Ps.set(o[4],o[5],o[6]).length(),f=Ps.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Pi.copy(this);const d=1/c,_=1/u,g=1/f;return Pi.elements[0]*=d,Pi.elements[1]*=d,Pi.elements[2]*=d,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=g,Pi.elements[9]*=g,Pi.elements[10]*=g,n.setFromRotationMatrix(Pi),a.x=c,a.y=u,a.z=f,this}makePerspective(t,n,a,o,c,u,f=Qi,p=!1){const d=this.elements,_=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),S=(a+o)/(a-o);let E,M;if(p)E=c/(u-c),M=u*c/(u-c);else if(f===Qi)E=-(u+c)/(u-c),M=-2*u*c/(u-c);else if(f===iu)E=-u/(u-c),M=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,c,u,f=Qi,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-o),v=-(n+t)/(n-t),S=-(a+o)/(a-o);let E,M;if(p)E=1/(u-c),M=u/(u-c);else if(f===Qi)E=-2/(u-c),M=-(u+c)/(u-c);else if(f===iu)E=-1/(u-c),M=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=E,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Ps=new yt,Pi=new fn,o1=new yt(0,0,0),l1=new yt(1,1,1),lr=new yt,Lc=new yt,pi=new yt,I_=new fn,F_=new fl;class na{constructor(t=0,n=0,a=0,o=na.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],f=o[8],p=o[1],d=o[5],_=o[9],g=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ne(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:_e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return I_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(I_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return F_.setFromEuler(this),this.setFromQuaternion(F_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}na.DEFAULT_ORDER="XYZ";class hx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let c1=0;const B_=new yt,Is=new fl,Ta=new fn,Nc=new yt,Qo=new yt,u1=new yt,f1=new fl,z_=new yt(1,0,0),G_=new yt(0,1,0),H_=new yt(0,0,1),V_={type:"added"},h1={type:"removed"},Fs={type:"childadded",child:null},Bh={type:"childremoved",child:null};class Yn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const t=new yt,n=new na,a=new fl,o=new yt(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new Me}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(t,n){return Is.setFromAxisAngle(t,n),this.quaternion.premultiply(Is),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(G_,t)}rotateZ(t){return this.rotateOnAxis(H_,t)}translateOnAxis(t,n){return B_.copy(t).applyQuaternion(this.quaternion),this.position.add(B_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(G_,t)}translateZ(t){return this.translateOnAxis(H_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Nc.copy(t):Nc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(Qo,Nc,this.up):Ta.lookAt(Nc,Qo,this.up),this.quaternion.setFromRotationMatrix(Ta),o&&(Ta.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Ta),this.quaternion.premultiply(Is.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V_),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(h1),Bh.child=t,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V_),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,t,u1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,f1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(c(t.materials,this.material[p]));o.material=f}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),_=u(t.images),g=u(t.shapes),v=u(t.skeletons),S=u(t.animations),E=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new yt(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new yt,Aa=new yt,zh=new yt,Ra=new yt,Bs=new yt,zs=new yt,k_=new yt,Gh=new yt,Hh=new yt,Vh=new yt,kh=new un,Xh=new un,Wh=new un;class Fi{constructor(t=new yt,n=new yt,a=new yt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ii.subVectors(t,n),o.cross(Ii);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ii.subVectors(o,n),Aa.subVectors(a,n),zh.subVectors(t,n);const u=Ii.dot(Ii),f=Ii.dot(Aa),p=Ii.dot(zh),d=Aa.dot(Aa),_=Aa.dot(zh),g=u*d-f*f;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,E=(u*_-f*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,n,a,o,c,u,f,p){return this.getBarycoord(t,n,a,o,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(u,Ra.y),p.addScaledVector(f,Ra.z),p)}static getInterpolatedAttribute(t,n,a,o,c,u){return kh.setScalar(0),Xh.setScalar(0),Wh.setScalar(0),kh.fromBufferAttribute(t,n),Xh.fromBufferAttribute(t,a),Wh.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(kh,c.x),u.addScaledVector(Xh,c.y),u.addScaledVector(Wh,c.z),u}static isFrontFacing(t,n,a,o){return Ii.subVectors(a,n),Aa.subVectors(t,n),Ii.cross(Aa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Ii.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Fi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Fi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Fi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,f;Bs.subVectors(o,a),zs.subVectors(c,a),Gh.subVectors(t,a);const p=Bs.dot(Gh),d=zs.dot(Gh);if(p<=0&&d<=0)return n.copy(a);Hh.subVectors(t,o);const _=Bs.dot(Hh),g=zs.dot(Hh);if(_>=0&&g<=_)return n.copy(o);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(Bs,u);Vh.subVectors(t,c);const S=Bs.dot(Vh),E=zs.dot(Vh);if(E>=0&&S<=E)return n.copy(c);const M=S*d-p*E;if(M<=0&&d>=0&&E<=0)return f=d/(d-E),n.copy(a).addScaledVector(zs,f);const y=_*E-S*g;if(y<=0&&g-_>=0&&S-E>=0)return k_.subVectors(c,o),f=(g-_)/(g-_+(S-E)),n.copy(o).addScaledVector(k_,f);const x=1/(y+M+v);return u=M*x,f=v*x,n.copy(a).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function Yh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ke{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Pe.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Pe.workingColorSpace){if(t=Jb(t,1),n=Ne(n,0,1),a=Ne(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Yh(u,c,t+1/3),this.g=Yh(u,c,t),this.b=Yh(u,c,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,n=Ci){function a(c){c!==void 0&&parseFloat(c)<1&&_e("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:_e("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);_e("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ci){const a=dx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):_e("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ci){return Pe.workingToColorSpace(kn.copy(this),t),Math.round(Ne(kn.r*255,0,255))*65536+Math.round(Ne(kn.g*255,0,255))*256+Math.round(Ne(kn.b*255,0,255))}getHexString(t=Ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(kn.copy(this),n);const a=kn.r,o=kn.g,c=kn.b,u=Math.max(a,o,c),f=Math.min(a,o,c);let p,d;const _=(f+u)/2;if(f===u)p=0,d=0;else{const g=u-f;switch(d=_<=.5?g/(u+f):g/(2-u-f),u){case a:p=(o-c)/g+(o<c?6:0);break;case o:p=(c-a)/g+2;break;case c:p=(a-o)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ci){Pe.workingToColorSpace(kn.copy(this),t);const n=kn.r,a=kn.g,o=kn.b;return t!==Ci?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(cr),this.setHSL(cr.h+t,cr.s+n,cr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(cr),t.getHSL(Oc);const a=Ch(cr.h,Oc.h,n),o=Ch(cr.s,Oc.s,n),c=Ch(cr.l,Oc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new ke;ke.NAMES=dx;let d1=0;class dl extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=qs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){_e(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){_e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(a.blending=this.blending),this.side!==mr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==cd&&(a.blendSrc=this.blendSrc),this.blendDst!==ud&&(a.blendDst=this.blendDst),this.blendEquation!==kr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const f in c){const p=c[f];delete p.metadata,u.push(p)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yp extends dl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.combine=qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sn=new yt,Pc=new Xe;let p1=0;class ta{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=w_,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(t),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=jo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ai(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),o=ai(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),o=ai(o,this.array),c=ai(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==w_&&(t.usage=this.usage),t}}class px extends ta{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Sp extends ta{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class zn extends ta{constructor(t,n,a){super(new Float32Array(t),n,a)}}let m1=0;const Ri=new fn,qh=new Yn,Gs=new yt,mi=new hl,Jo=new hl,Cn=new yt;class aa extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m1++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ux(t)?Sp:px)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Me().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,n,a){return Ri.makeTranslation(t,n,a),this.applyMatrix4(Ri),this}scale(t,n,a){return Ri.makeScale(t,n,a),this.applyMatrix4(Ri),this}lookAt(t){return qh.lookAt(t),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new zn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&_e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new yt(-1/0,-1/0,-1/0),new yt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new yt,1/0);return}if(t){const a=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const f=n[c];Jo.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(mi.min,Jo.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,Jo.max),mi.expandByPoint(Cn)):(mi.expandByPoint(Jo.min),mi.expandByPoint(Jo.max))}mi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Cn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const f=n[c],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Cn.fromBufferAttribute(f,d),p&&(Gs.fromBufferAttribute(t,d),Cn.add(Gs)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let K=0;K<a.count;K++)f[K]=new yt,p[K]=new yt;const d=new yt,_=new yt,g=new yt,v=new Xe,S=new Xe,E=new Xe,M=new yt,y=new yt;function x(K,R,w){d.fromBufferAttribute(a,K),_.fromBufferAttribute(a,R),g.fromBufferAttribute(a,w),v.fromBufferAttribute(c,K),S.fromBufferAttribute(c,R),E.fromBufferAttribute(c,w),_.sub(d),g.sub(d),S.sub(v),E.sub(v);const X=1/(S.x*E.y-E.x*S.y);isFinite(X)&&(M.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(X),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(X),f[K].add(M),f[R].add(M),f[w].add(M),p[K].add(y),p[R].add(y),p[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,R=P.length;K<R;++K){const w=P[K],X=w.start,Z=w.count;for(let tt=X,et=X+Z;tt<et;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const N=new yt,L=new yt,H=new yt,k=new yt;function z(K){H.fromBufferAttribute(o,K),k.copy(H);const R=f[K];N.copy(R),N.sub(H.multiplyScalar(H.dot(R))).normalize(),L.crossVectors(k,R);const X=L.dot(p[K])<0?-1:1;u.setXYZW(K,N.x,N.y,N.z,X)}for(let K=0,R=P.length;K<R;++K){const w=P[K],X=w.start,Z=w.count;for(let tt=X,et=X+Z;tt<et;tt+=3)z(t.getX(tt+0)),z(t.getX(tt+1)),z(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ta(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const o=new yt,c=new yt,u=new yt,f=new yt,p=new yt,d=new yt,_=new yt,g=new yt;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),f.fromBufferAttribute(a,E),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(E,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),_.subVectors(u,c),g.subVectors(o,c),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,E=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*_;for(let x=0;x<_;x++)v[E++]=d[S++]}return new ta(v,_,g)}if(this.index===null)return _e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new aa,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const c=this.morphAttributes;for(const f in c){const p=[],d=c[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=t(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let c=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(t.data))}_.length>0&&(o[p]=_,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const c=t.morphAttributes;for(const d in c){const _=[],g=c[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,_=u.length;d<_;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const X_=new fn,Ir=new s1,Ic=new xp,W_=new yt,Fc=new yt,Bc=new yt,zc=new yt,jh=new yt,Gc=new yt,Y_=new yt,Hc=new yt;class zi extends Yn{constructor(t=new aa,n=new yp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(c&&f){Gc.set(0,0,0);for(let p=0,d=c.length;p<d;p++){const _=f[p],g=c[p];_!==0&&(jh.fromBufferAttribute(g,t),u?Gc.addScaledVector(jh,_):Gc.addScaledVector(jh.sub(n),_))}n.add(Gc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ic.copy(a.boundingSphere),Ic.applyMatrix4(c),Ir.copy(t.ray).recast(t.near),!(Ic.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ic,W_)===null||Ir.origin.distanceToSquared(W_)>(t.far-t.near)**2))&&(X_.copy(c).invert(),Ir.copy(t.ray).applyMatrix4(X_),!(a.boundingBox!==null&&Ir.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ir)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,f=c.index,p=c.attributes.position,d=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=u[y.materialIndex],P=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let L=P,H=N;L<H;L+=3){const k=f.getX(L),z=f.getX(L+1),K=f.getX(L+2);o=Vc(this,x,t,a,d,_,g,k,z,K),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const P=f.getX(y),N=f.getX(y+1),L=f.getX(y+2);o=Vc(this,u,t,a,d,_,g,P,N,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,M=v.length;E<M;E++){const y=v[E],x=u[y.materialIndex],P=Math.max(y.start,S.start),N=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let L=P,H=N;L<H;L+=3){const k=L,z=L+1,K=L+2;o=Vc(this,x,t,a,d,_,g,k,z,K),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let y=E,x=M;y<x;y+=3){const P=y,N=y+1,L=y+2;o=Vc(this,u,t,a,d,_,g,P,N,L),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function g1(s,t,n,a,o,c,u,f){let p;if(t.side===ri?p=a.intersectTriangle(u,c,o,!0,f):p=a.intersectTriangle(o,c,u,t.side===mr,f),p===null)return null;Hc.copy(f),Hc.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(Hc);return d<n.near||d>n.far?null:{distance:d,point:Hc.clone(),object:s}}function Vc(s,t,n,a,o,c,u,f,p,d){s.getVertexPosition(f,Fc),s.getVertexPosition(p,Bc),s.getVertexPosition(d,zc);const _=g1(s,t,n,a,Fc,Bc,zc,Y_);if(_){const g=new yt;Fi.getBarycoord(Y_,Fc,Bc,zc,g),o&&(_.uv=Fi.getInterpolatedAttribute(o,f,p,d,g,new Xe)),c&&(_.uv1=Fi.getInterpolatedAttribute(c,f,p,d,g,new Xe)),u&&(_.normal=Fi.getInterpolatedAttribute(u,f,p,d,g,new yt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new yt,materialIndex:0};Fi.getNormal(Fc,Bc,zc,v.normal),_.face=v,_.barycoord=g}return _}class pl extends aa{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const f=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const p=[],d=[],_=[],g=[];let v=0,S=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(p),this.setAttribute("position",new zn(d,3)),this.setAttribute("normal",new zn(_,3)),this.setAttribute("uv",new zn(g,2));function E(M,y,x,P,N,L,H,k,z,K,R){const w=L/z,X=H/K,Z=L/2,tt=H/2,et=k/2,Y=z+1,D=K+1;let G=0,j=0;const ct=new yt;for(let ft=0;ft<D;ft++){const B=ft*X-tt;for(let J=0;J<Y;J++){const lt=J*w-Z;ct[M]=lt*P,ct[y]=B*N,ct[x]=et,d.push(ct.x,ct.y,ct.z),ct[M]=0,ct[y]=0,ct[x]=k>0?1:-1,_.push(ct.x,ct.y,ct.z),g.push(J/z),g.push(1-ft/K),G+=1}}for(let ft=0;ft<K;ft++)for(let B=0;B<z;B++){const J=v+B+Y*ft,lt=v+B+Y*(ft+1),Dt=v+(B+1)+Y*(ft+1),wt=v+(B+1)+Y*ft;p.push(J,lt,wt),p.push(lt,Dt,wt),j+=6}f.addGroup(S,j,R),S+=j,v+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(_e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function jn(s){const t={};for(let n=0;n<s.length;n++){const a=$s(s[n]);for(const o in a)t[o]=a[o]}return t}function _1(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function mx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const v1={clone:$s,merge:jn};var x1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends dl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x1,this.fragmentShader=y1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=_1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class gx extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new yt,q_=new Xe,j_=new Xe;class gi extends gx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Rh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-t/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ur.x,ur.y).multiplyScalar(-t/ur.z)}getViewSize(t,n){return this.getViewBounds(t,q_,j_),n.subVectors(j_,q_)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Rh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;c+=u.offsetX*o/p,n-=u.offsetY*a/d,o*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(c+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class S1 extends Yn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(Hs,Vs,t,n);o.layers=this.layers,this.add(o);const c=new gi(Hs,Vs,t,n);c.layers=this.layers,this.add(c);const u=new gi(Hs,Vs,t,n);u.layers=this.layers,this.add(u);const f=new gi(Hs,Vs,t,n);f.layers=this.layers,this.add(f);const p=new gi(Hs,Vs,t,n);p.layers=this.layers,this.add(p);const d=new gi(Hs,Vs,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,f,p]=n;for(const d of n)this.remove(d);if(t===Qi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===iu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,o),t.render(n,_),t.setRenderTarget(g,v,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class _x extends Wn{constructor(t=[],n=Zr,a,o,c,u,f,p,d,_){super(t,n,a,o,c,u,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vx extends $i{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new _x(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new pl(5,5,5),c=new ia({name:"CubemapFromEquirect",uniforms:$s(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ri,blending:wa});c.uniforms.tEquirect.value=n;const u=new zi(o,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Xn),new S1(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Ys extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b1={type:"move"};class Zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new yt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new yt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new yt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new yt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const M of t.hand.values()){const y=n.getJointPose(M,a),x=this._getHandJoint(d,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,E=.005;d.inputState.pinching&&v>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(b1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ys;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class M1 extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new na,this.environmentIntensity=1,this.environmentRotation=new na,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class E1 extends Wn{constructor(t=null,n=1,a=1,o,c,u,f,p,d=Gn,_=Gn,g,v){super(null,u,f,p,d,_,o,c,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new yt,T1=new yt,A1=new Me;class Hr{constructor(t=new yt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Kh.subVectors(a,n).cross(T1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Kh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||A1.getNormalMatrix(t),o=this.coplanarPoint(Kh).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new xp,R1=new Xe(.5,.5),kc=new yt;class bp{constructor(t=new Hr,n=new Hr,a=new Hr,o=new Hr,c=new Hr,u=new Hr){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(c),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Qi,a=!1){const o=this.planes,c=t.elements,u=c[0],f=c[1],p=c[2],d=c[3],_=c[4],g=c[5],v=c[6],S=c[7],E=c[8],M=c[9],y=c[10],x=c[11],P=c[12],N=c[13],L=c[14],H=c[15];if(o[0].setComponents(d-u,S-_,x-E,H-P).normalize(),o[1].setComponents(d+u,S+_,x+E,H+P).normalize(),o[2].setComponents(d+f,S+g,x+M,H+N).normalize(),o[3].setComponents(d-f,S-g,x-M,H-N).normalize(),a)o[4].setComponents(p,v,y,L).normalize(),o[5].setComponents(d-p,S-v,x-y,H-L).normalize();else if(o[4].setComponents(d-p,S-v,x-y,H-L).normalize(),n===Qi)o[5].setComponents(d+p,S+v,x+y,H+L).normalize();else if(n===iu)o[5].setComponents(p,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){Fr.center.set(0,0,0);const n=R1.distanceTo(t.center);return Fr.radius=.7071067811865476+n,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(kc.x=o.normal.x>0?t.max.x:t.min.x,kc.y=o.normal.y>0?t.max.y:t.min.y,kc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class C1 extends Wn{constructor(t,n,a,o,c,u,f,p,d){super(t,n,a,o,c,u,f,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends Wn{constructor(t,n,a=ea,o,c,u,f=Gn,p=Gn,d,_=La,g=1){if(_!==La&&_!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,o,c,u,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class w1 extends ll{constructor(t,n=ea,a=Zr,o,c,u=Gn,f=Gn,p,d=La){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,o,c,u,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xx extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class uu extends aa{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,_=p+1,g=t/f,v=n/p,S=[],E=[],M=[],y=[];for(let x=0;x<_;x++){const P=x*v-u;for(let N=0;N<d;N++){const L=N*g-c;E.push(L,-P,0),M.push(0,0,1),y.push(N/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let P=0;P<f;P++){const N=P+d*x,L=P+d*(x+1),H=P+1+d*(x+1),k=P+1+d*x;S.push(N,L,k),S.push(L,H,k)}this.setIndex(S),this.setAttribute("position",new zn(E,3)),this.setAttribute("normal",new zn(M,3)),this.setAttribute("uv",new zn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class U1 extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class D1 extends dl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cx,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new na,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class L1 extends dl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class N1 extends dl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mp extends Yn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Qh=new fn,Z_=new yt,K_=new yt;class yx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=_i,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bp,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Z_.setFromMatrixPosition(t.matrixWorld),n.position.copy(Z_),K_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(K_),n.updateMatrixWorld(),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Qh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class O1 extends yx{constructor(){super(new gi(90,1,.5,500)),this.isPointLightShadow=!0}}class P1 extends Mp{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ep extends gx{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,u=c+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I1 extends yx{constructor(){super(new Ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F1 extends Mp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new I1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class B1 extends Mp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class z1 extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Q_(s,t,n,a){const o=G1(a);switch(n){case sx:return s*t;case lx:return s*t/o.components*o.byteLength;case dp:return s*t/o.components*o.byteLength;case Qs:return s*t*2/o.components*o.byteLength;case pp:return s*t*2/o.components*o.byteLength;case ox:return s*t*3/o.components*o.byteLength;case Bi:return s*t*4/o.components*o.byteLength;case mp:return s*t*4/o.components*o.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Md:case Td:return Math.max(s,16)*Math.max(t,8)/4;case bd:case Ed:return Math.max(s,8)*Math.max(t,8)/2;case Ad:case Rd:case wd:case Ud:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Cd:case Dd:case Ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case kd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qd:case jd:case Zd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Kd:case Qd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jd:case $d:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function G1(s){switch(s){case _i:case nx:return{byteLength:1,components:1};case rl:case ix:case Da:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case ea:case up:case Ki:return{byteLength:4,components:1};case ax:case rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?_e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);function Sx(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function H1(s){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=s.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(s.bindBuffer(d,f),g.length===0)s.bufferSubData(d,0,_);else{g.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<g.length;S++){const E=g[v],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];s.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(s.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:c,update:u}}var V1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k1=`#ifdef USE_ALPHAHASH
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
#endif`,X1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j1=`#ifdef USE_AOMAP
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
#endif`,Z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,OM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,GM=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,HM=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,aE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,AE=`float getShadowMask() {
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
}`,RE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,ZE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
void main () {
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#define LAMBERT
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
}`,aT=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,oT=`#define NORMAL
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
}`,lT=`#define NORMAL
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
}`,cT=`#define PHONG
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
}`,uT=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fT=`#define STANDARD
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
}`,hT=`#define STANDARD
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
}`,dT=`#define TOON
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
}`,pT=`#define TOON
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
}`,mT=`uniform float size;
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
}`,gT=`uniform vec3 diffuse;
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
}`,_T=`#include <common>
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
}`,vT=`uniform vec3 color;
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
}`,xT=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:V1,alphahash_pars_fragment:k1,alphamap_fragment:X1,alphamap_pars_fragment:W1,alphatest_fragment:Y1,alphatest_pars_fragment:q1,aomap_fragment:j1,aomap_pars_fragment:Z1,batching_pars_vertex:K1,batching_vertex:Q1,begin_vertex:J1,beginnormal_vertex:$1,bsdfs:tM,iridescence_fragment:eM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:_M,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:SM,envmap_pars_fragment:bM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:OM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:CM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:UM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:PM,lights_toon_pars_fragment:IM,lights_phong_fragment:FM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:GM,lights_fragment_begin:HM,lights_fragment_maps:VM,lights_fragment_end:kM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:qM,map_fragment:jM,map_pars_fragment:ZM,map_particle_fragment:KM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:$M,morphinstance_vertex:tE,morphcolor_vertex:eE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:aE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:_E,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:RE,skinning_pars_vertex:CE,skinning_vertex:wE,skinnormal_vertex:UE,specularmap_fragment:DE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:OE,transmission_fragment:PE,transmission_pars_fragment:IE,uv_pars_fragment:FE,uv_pars_vertex:BE,uv_vertex:zE,worldpos_vertex:GE,background_vert:HE,background_frag:VE,backgroundCube_vert:kE,backgroundCube_frag:XE,cube_vert:WE,cube_frag:YE,depth_vert:qE,depth_frag:jE,distance_vert:ZE,distance_frag:KE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:$E,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:yT},Xt={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},ji={basic:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:jn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:jn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:jn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:jn([Xt.points,Xt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:jn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:jn([Xt.common,Xt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:jn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:jn([Xt.sprite,Xt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:jn([Xt.common,Xt.displacementmap,{referencePosition:{value:new yt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:jn([Xt.lights,Xt.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};ji.physical={uniforms:jn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Xc={r:0,b:0,g:0},Br=new na,ST=new fn;function bT(s,t,n,a,o,c,u){const f=new ke(0);let p=c===!0?0:1,d,_,g=null,v=0,S=null;function E(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?n:t).get(L)),L}function M(N){let L=!1;const H=E(N);H===null?x(f,p):H&&H.isColor&&(x(H,1),L=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?a.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,L){const H=E(L);H&&(H.isCubeTexture||H.mapping===cu)?(_===void 0&&(_=new zi(new pl(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:$s(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),Br.copy(L.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Br)),_.material.toneMapped=Pe.getTransfer(H.colorSpace)!==Ke,(g!==H||v!==H.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,g=H,v=H.version,S=s.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(d===void 0&&(d=new zi(new uu(2,2),new ia({name:"BackgroundMaterial",uniforms:$s(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=H,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Pe.getTransfer(H.colorSpace)!==Ke,H.matrixAutoUpdate===!0&&H.updateMatrix(),d.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||v!==H.version||S!==s.toneMapping)&&(d.material.needsUpdate=!0,g=H,v=H.version,S=s.toneMapping),d.layers.enableAll(),N.unshift(d,d.geometry,d.material,0,0,null))}function x(N,L){N.getRGB(Xc,mx(s)),a.buffers.color.setClear(Xc.r,Xc.g,Xc.b,L,u)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,L=1){f.set(N),p=L,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,x(f,p)},render:M,addToRenderList:y,dispose:P}}function MT(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function f(w,X,Z,tt,et){let Y=!1;const D=g(tt,Z,X);c!==D&&(c=D,d(c.object)),Y=S(w,tt,Z,et),Y&&E(w,tt,Z,et),et!==null&&t.update(et,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,L(w,X,Z,tt),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function p(){return s.createVertexArray()}function d(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,X,Z){const tt=Z.wireframe===!0;let et=a[w.id];et===void 0&&(et={},a[w.id]=et);let Y=et[X.id];Y===void 0&&(Y={},et[X.id]=Y);let D=Y[tt];return D===void 0&&(D=v(p()),Y[tt]=D),D}function v(w){const X=[],Z=[],tt=[];for(let et=0;et<n;et++)X[et]=0,Z[et]=0,tt[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:Z,attributeDivisors:tt,object:w,attributes:{},index:null}}function S(w,X,Z,tt){const et=c.attributes,Y=X.attributes;let D=0;const G=Z.getAttributes();for(const j in G)if(G[j].location>=0){const ft=et[j];let B=Y[j];if(B===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(B=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(B=w.instanceColor)),ft===void 0||ft.attribute!==B||B&&ft.data!==B.data)return!0;D++}return c.attributesNum!==D||c.index!==tt}function E(w,X,Z,tt){const et={},Y=X.attributes;let D=0;const G=Z.getAttributes();for(const j in G)if(G[j].location>=0){let ft=Y[j];ft===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor));const B={};B.attribute=ft,ft&&ft.data&&(B.data=ft.data),et[j]=B,D++}c.attributes=et,c.attributesNum=D,c.index=tt}function M(){const w=c.newAttributes;for(let X=0,Z=w.length;X<Z;X++)w[X]=0}function y(w){x(w,0)}function x(w,X){const Z=c.newAttributes,tt=c.enabledAttributes,et=c.attributeDivisors;Z[w]=1,tt[w]===0&&(s.enableVertexAttribArray(w),tt[w]=1),et[w]!==X&&(s.vertexAttribDivisor(w,X),et[w]=X)}function P(){const w=c.newAttributes,X=c.enabledAttributes;for(let Z=0,tt=X.length;Z<tt;Z++)X[Z]!==w[Z]&&(s.disableVertexAttribArray(Z),X[Z]=0)}function N(w,X,Z,tt,et,Y,D){D===!0?s.vertexAttribIPointer(w,X,Z,et,Y):s.vertexAttribPointer(w,X,Z,tt,et,Y)}function L(w,X,Z,tt){M();const et=tt.attributes,Y=Z.getAttributes(),D=X.defaultAttributeValues;for(const G in Y){const j=Y[G];if(j.location>=0){let ct=et[G];if(ct===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const ft=ct.normalized,B=ct.itemSize,J=t.get(ct);if(J===void 0)continue;const lt=J.buffer,Dt=J.type,wt=J.bytesPerElement,rt=Dt===s.INT||Dt===s.UNSIGNED_INT||ct.gpuType===up;if(ct.isInterleavedBufferAttribute){const pt=ct.data,Pt=pt.stride,It=ct.offset;if(pt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<j.locationSize;Bt++)x(j.location+Bt,pt.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Bt=0;Bt<j.locationSize;Bt++)y(j.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let Bt=0;Bt<j.locationSize;Bt++)N(j.location+Bt,B/j.locationSize,Dt,ft,Pt*wt,(It+B/j.locationSize*Bt)*wt,rt)}else{if(ct.isInstancedBufferAttribute){for(let pt=0;pt<j.locationSize;pt++)x(j.location+pt,ct.meshPerAttribute);w.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let pt=0;pt<j.locationSize;pt++)y(j.location+pt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let pt=0;pt<j.locationSize;pt++)N(j.location+pt,B/j.locationSize,Dt,ft,B*wt,B/j.locationSize*pt*wt,rt)}}else if(D!==void 0){const ft=D[G];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(j.location,ft);break;case 3:s.vertexAttrib3fv(j.location,ft);break;case 4:s.vertexAttrib4fv(j.location,ft);break;default:s.vertexAttrib1fv(j.location,ft)}}}}P()}function H(){K();for(const w in a){const X=a[w];for(const Z in X){const tt=X[Z];for(const et in tt)_(tt[et].object),delete tt[et];delete X[Z]}delete a[w]}}function k(w){if(a[w.id]===void 0)return;const X=a[w.id];for(const Z in X){const tt=X[Z];for(const et in tt)_(tt[et].object),delete tt[et];delete X[Z]}delete a[w.id]}function z(w){for(const X in a){const Z=a[X];if(Z[w.id]===void 0)continue;const tt=Z[w.id];for(const et in tt)_(tt[et].object),delete tt[et];delete Z[w.id]}}function K(){R(),u=!0,c!==o&&(c=o,d(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:K,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:M,enableAttribute:y,disableUnusedAttributes:P}}function ET(s,t,n){let a;function o(d){a=d}function c(d,_){s.drawArrays(a,d,_),n.update(_,a,1)}function u(d,_,g){g!==0&&(s.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<d.length;E++)u(d[E],_[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let E=0;for(let M=0;M<g;M++)E+=_[M]*v[M];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function TT(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Bi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const K=z===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==_i&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ki&&!K)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(_e("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=s.getParameter(s.MAX_SAMPLES),k=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:L,maxSamples:H,samples:k}}function AT(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new Hr,f=new Me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||o;return o=v,a=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!o||E===null||E.length===0||c&&!y)c?_(null):d();else{const P=c?0:a,N=P*4;let L=x.clippingState||null;p.value=L,L=_(E,v,N,S);for(let H=0;H!==N;++H)L[H]=n[H];x.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,S,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=p.value,E!==!0||y===null){const x=S+M*4,P=v.matrixWorldInverse;f.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,L=S;N!==M;++N,L+=4)u.copy(g[N]).applyMatrix4(P,f),u.normal.toArray(y,L),y[L+3]=u.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function RT(s){let t=new WeakMap;function n(u,f){return f===vd?u.mapping=Zr:f===xd&&(u.mapping=Ks),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===vd||f===xd)if(t.has(u)){const p=t.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new vx(p.height);return d.fromEquirectangularTexture(s,u),t.set(u,d),u.addEventListener("dispose",o),n(d.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const pr=4,J_=[.125,.215,.35,.446,.526,.582],Xr=20,CT=256,$o=new Ep,$_=new ke;let Jh=null,$h=0,td=0,ed=!1;const wT=new yt;class tv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:f=wT}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Zr||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Da,format:Bi,colorSpace:Js,depthBuffer:!1},o=ev(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ev(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UT(c)),this._blurMaterial=LT(c,t,n),this._ggxMaterial=DT(c,t,n)}return o}_compileMaterial(t){const n=new zi(new aa,t);this._renderer.compile(n,$o)}_sceneToCubeUV(t,n,a,o,c){const p=new gi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor($_),g.toneMapping=Ji,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zi(new pl,new yp({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy($_),x=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):L===1?(p.up.set(0,0,d[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,d[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const H=this._cubeSize;ks(o,L*H,N>2?H:0,H,H),g.setRenderTarget(o),x&&g.render(M,p),g.render(t,p)}g.toneMapping=S,g.autoClear=v,t.background=P}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Zr||t.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=iv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const f=c.uniforms;f.envMap.value=t;const p=this._cubeSize;ks(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,$o)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,S=g*v,{_lodMax:E}=this,M=this._sizeLods[a],y=3*M*(a>E-pr?a-E+pr:0),x=4*(this._cubeSize-M);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=E-n,ks(c,y,x,3*M,2*M),o.setRenderTarget(c),o.render(f,$o),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-a,ks(t,y,x,3*M,2*M),o.setRenderTarget(t),o.render(f,$o)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=d;const v=d.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Xr-1),M=c/E,y=isFinite(c)?1+Math.floor(_*M):Xr;y>Xr&&_e(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const x=[];let P=0;for(let z=0;z<Xr;++z){const K=z/M,R=Math.exp(-K*K/2);x.push(R),z===0?P+=R:z<y&&(P+=2*R)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-a;const L=this._sizeLods[o],H=3*L*(o>N-pr?o-N+pr:0),k=4*(this._cubeSize-L);ks(n,H,k,3*L,2*L),p.setRenderTarget(n),p.render(g,$o)}}function UT(s){const t=[],n=[],a=[];let o=s;const c=s-pr+1+J_.length;for(let u=0;u<c;u++){const f=Math.pow(2,o);t.push(f);let p=1/f;u>s-pr?p=J_[u-s+pr-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,M=3,y=2,x=1,P=new Float32Array(M*E*S),N=new Float32Array(y*E*S),L=new Float32Array(x*E*S);for(let k=0;k<S;k++){const z=k%3*2/3-1,K=k>2?0:-1,R=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];P.set(R,M*E*k),N.set(v,y*E*k);const w=[k,k,k,k,k,k];L.set(w,x*E*k)}const H=new aa;H.setAttribute("position",new ta(P,M)),H.setAttribute("uv",new ta(N,y)),H.setAttribute("faceIndex",new ta(L,x)),a.push(new zi(H,null)),o>pr&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function ev(s,t,n){const a=new $i(s,t,n);return a.texture.mapping=cu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function ks(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function DT(s,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function LT(s,t,n){const a=new Float32Array(Xr),o=new yt(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function nv(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:wa,depthTest:!1,depthWrite:!1})}function iv(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function NT(s){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===vd||p===xd,_=p===Zr||p===Ks;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new tv(s)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new tv(s)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function c(f){const p=f.target;p.removeEventListener("dispose",c);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function OT(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ol("WebGLRenderer: "+a+" extension not supported."),o}}}function PT(s,t,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,E=g.attributes.position;let M=0;if(S!==null){const P=S.array;M=S.version;for(let N=0,L=P.length;N<L;N+=3){const H=P[N+0],k=P[N+1],z=P[N+2];v.push(H,k,k,z,z,H)}}else if(E!==void 0){const P=E.array;M=E.version;for(let N=0,L=P.length/3-1;N<L;N+=3){const H=N+0,k=N+1,z=N+2;v.push(H,k,k,z,z,H)}}else return;const y=new(ux(v)?Sp:px)(v,1);y.version=M;const x=c.get(g);x&&t.remove(x),c.set(g,y)}function _(g){const v=c.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return c.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function IT(s,t,n){let a;function o(v){a=v}let c,u;function f(v){c=v.type,u=v.bytesPerElement}function p(v,S){s.drawElements(a,S,c,v*u),n.update(S,a,1)}function d(v,S,E){E!==0&&(s.drawElementsInstanced(a,S,c,v*u,E),n.update(S,a,E))}function _(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];n.update(y,a,1)}function g(v,S,E,M){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/u,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,c,v,0,M,0,E);let x=0;for(let P=0;P<E;P++)x+=S[P]*M[P];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function FT(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:ze("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function BT(s,t,n){const a=new WeakMap,o=new un;function c(u,f,p){const d=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let R=function(){z.dispose(),a.delete(f),f.removeEventListener("dispose",R)};v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],x=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;S===!0&&(N=1),E===!0&&(N=2),M===!0&&(N=3);let L=f.attributes.position.count*N,H=1;L>t.maxTextureSize&&(H=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const k=new Float32Array(L*H*4*g),z=new fx(k,L,H,g);z.type=Ki,z.needsUpdate=!0;const K=N*4;for(let w=0;w<g;w++){const X=y[w],Z=x[w],tt=P[w],et=L*H*4*w;for(let Y=0;Y<X.count;Y++){const D=Y*K;S===!0&&(o.fromBufferAttribute(X,Y),k[et+D+0]=o.x,k[et+D+1]=o.y,k[et+D+2]=o.z,k[et+D+3]=0),E===!0&&(o.fromBufferAttribute(Z,Y),k[et+D+4]=o.x,k[et+D+5]=o.y,k[et+D+6]=o.z,k[et+D+7]=0),M===!0&&(o.fromBufferAttribute(tt,Y),k[et+D+8]=o.x,k[et+D+9]=o.y,k[et+D+10]=o.z,k[et+D+11]=tt.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new Xe(L,H)},a.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let S=0;for(let M=0;M<d.length;M++)S+=d[M];const E=f.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function zT(s,t,n,a){let o=new WeakMap;function c(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(o.get(g)!==d&&(t.update(g),o.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function u(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:c,dispose:u}}const GT={[jv]:"LINEAR_TONE_MAPPING",[Zv]:"REINHARD_TONE_MAPPING",[Kv]:"CINEON_TONE_MAPPING",[Qv]:"ACES_FILMIC_TONE_MAPPING",[$v]:"AGX_TONE_MAPPING",[tx]:"NEUTRAL_TONE_MAPPING",[Jv]:"CUSTOM_TONE_MAPPING"};function HT(s,t,n,a,o){const c=new $i(t,n,{type:s,depthBuffer:a,stencilBuffer:o}),u=new $i(t,n,{type:Da,depthBuffer:!1,stencilBuffer:!1}),f=new aa;f.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new zn([0,2,0,0,2,0],2));const p=new U1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new zi(f,p),_=new Ep(-1,1,1,-1,0,1);let g=null,v=null,S=!1,E,M=null,y=[],x=!1;this.setSize=function(P,N){c.setSize(P,N),u.setSize(P,N);for(let L=0;L<y.length;L++){const H=y[L];H.setSize&&H.setSize(P,N)}},this.setEffects=function(P){y=P,x=y.length>0&&y[0].isRenderPass===!0;const N=c.width,L=c.height;for(let H=0;H<y.length;H++){const k=y[H];k.setSize&&k.setSize(N,L)}},this.begin=function(P,N){if(S||P.toneMapping===Ji&&y.length===0)return!1;if(M=N,N!==null){const L=N.width,H=N.height;(c.width!==L||c.height!==H)&&this.setSize(L,H)}return x===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=Ji,!0},this.hasRenderPass=function(){return x},this.end=function(P,N){P.toneMapping=E,S=!0;let L=c,H=u;for(let k=0;k<y.length;k++){const z=y[k];if(z.enabled!==!1&&(z.render(P,H,L,N),z.needsSwap!==!1)){const K=L;L=H,H=K}}if(g!==P.outputColorSpace||v!==P.toneMapping){g=P.outputColorSpace,v=P.toneMapping,p.defines={},Pe.getTransfer(g)===Ke&&(p.defines.SRGB_TRANSFER="");const k=GT[v];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(M),P.render(d,_),M=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),u.dispose(),f.dispose(),p.dispose()}}const bx=new Wn,ep=new ll(1,1),Mx=new fx,Ex=new a1,Tx=new _x,av=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),lv=new Float32Array(4);function eo(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=av[o];if(c===void 0&&(c=new Float32Array(o),av[o]=c),t!==0){a.toArray(c,0);for(let u=1,f=0;u!==t;++u)f+=n,s[u].toArray(c,f)}return c}function En(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Tn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function hu(s,t){let n=rv[t];n===void 0&&(n=new Int32Array(t),rv[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function VT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function kT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;s.uniform2fv(this.addr,t),Tn(n,t)}}function XT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(En(n,t))return;s.uniform3fv(this.addr,t),Tn(n,t)}}function WT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;s.uniform4fv(this.addr,t),Tn(n,t)}}function YT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;lv.set(a),s.uniformMatrix2fv(this.addr,!1,lv),Tn(n,a)}}function qT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;ov.set(a),s.uniformMatrix3fv(this.addr,!1,ov),Tn(n,a)}}function jT(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(En(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Tn(n,t)}else{if(En(n,a))return;sv.set(a),s.uniformMatrix4fv(this.addr,!1,sv),Tn(n,a)}}function ZT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function KT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;s.uniform2iv(this.addr,t),Tn(n,t)}}function QT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;s.uniform3iv(this.addr,t),Tn(n,t)}}function JT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;s.uniform4iv(this.addr,t),Tn(n,t)}}function $T(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function tA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(En(n,t))return;s.uniform2uiv(this.addr,t),Tn(n,t)}}function eA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(En(n,t))return;s.uniform3uiv(this.addr,t),Tn(n,t)}}function nA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(En(n,t))return;s.uniform4uiv(this.addr,t),Tn(n,t)}}function iA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(ep.compareFunction=n.isReversedDepthBuffer()?_p:gp,c=ep):c=bx,n.setTexture2D(t||c,o)}function aA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||Ex,o)}function rA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Tx,o)}function sA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Mx,o)}function oA(s){switch(s){case 5126:return VT;case 35664:return kT;case 35665:return XT;case 35666:return WT;case 35674:return YT;case 35675:return qT;case 35676:return jT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return $T;case 36294:return tA;case 36295:return eA;case 36296:return nA;case 35678:case 36198:case 36298:case 36306:case 35682:return iA;case 35679:case 36299:case 36307:return aA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return sA}}function lA(s,t){s.uniform1fv(this.addr,t)}function cA(s,t){const n=eo(t,this.size,2);s.uniform2fv(this.addr,n)}function uA(s,t){const n=eo(t,this.size,3);s.uniform3fv(this.addr,n)}function fA(s,t){const n=eo(t,this.size,4);s.uniform4fv(this.addr,n)}function hA(s,t){const n=eo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function dA(s,t){const n=eo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function pA(s,t){const n=eo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function mA(s,t){s.uniform1iv(this.addr,t)}function gA(s,t){s.uniform2iv(this.addr,t)}function _A(s,t){s.uniform3iv(this.addr,t)}function vA(s,t){s.uniform4iv(this.addr,t)}function xA(s,t){s.uniform1uiv(this.addr,t)}function yA(s,t){s.uniform2uiv(this.addr,t)}function SA(s,t){s.uniform3uiv(this.addr,t)}function bA(s,t){s.uniform4uiv(this.addr,t)}function MA(s,t,n){const a=this.cache,o=t.length,c=hu(n,o);En(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=ep:u=bx;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,c[f])}function EA(s,t,n){const a=this.cache,o=t.length,c=hu(n,o);En(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||Ex,c[u])}function TA(s,t,n){const a=this.cache,o=t.length,c=hu(n,o);En(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Tx,c[u])}function AA(s,t,n){const a=this.cache,o=t.length,c=hu(n,o);En(a,c)||(s.uniform1iv(this.addr,c),Tn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Mx,c[u])}function RA(s){switch(s){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return fA;case 35674:return hA;case 35675:return dA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return bA;case 35678:case 36198:case 36298:case 36306:case 35682:return MA;case 35679:case 36299:case 36307:return EA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}class CA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=oA(n.type)}}class wA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RA(n.type)}}class UA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const f=o[c];f.setValue(t,n[f.id],a)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function cv(s,t){s.seq.push(t),s.map[t.id]=t}function DA(s,t,n){const a=s.name,o=a.length;for(nd.lastIndex=0;;){const c=nd.exec(a),u=nd.lastIndex;let f=c[1];const p=c[2]==="]",d=c[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===o){cv(n,d===void 0?new CA(f,s,t):new wA(f,s,t));break}else{let g=n.map[f];g===void 0&&(g=new UA(f),cv(n,g)),n=g}}}class eu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);DA(f,p,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const f=n[c],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function uv(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const LA=37297;let NA=0;function OA(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const fv=new Me;function PA(s){Pe._getMatrix(fv,Pe.workingColorSpace,s);const t=`mat3( ${fv.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(s)){case nu:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return _e("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function hv(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+OA(s.getShaderSource(t),f)}else return c}function IA(s,t){const n=PA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FA={[jv]:"Linear",[Zv]:"Reinhard",[Kv]:"Cineon",[Qv]:"ACESFilmic",[$v]:"AgX",[tx]:"Neutral",[Jv]:"Custom"};function BA(s,t){const n=FA[t];return n===void 0?(_e("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wc=new yt;function zA(){Pe.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),n=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nl).join(`
`)}function HA(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function VA(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:f}}return n}function nl(s){return s!==""}function dv(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(s){return s.replace(kA,WA)}const XA=new Map;function WA(s,t){let n=Ee[t];if(n===void 0){const a=XA.get(t);if(a!==void 0)n=Ee[a],_e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return np(n)}const YA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(s){return s.replace(YA,qA)}function qA(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function gv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const jA={[Kc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function ZA(s){return jA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KA={[Zr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function QA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const JA={[Ks]:"ENVMAP_MODE_REFRACTION"};function $A(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":JA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t2={[qv]:"ENVMAP_BLENDING_MULTIPLY",[zb]:"ENVMAP_BLENDING_MIX",[Gb]:"ENVMAP_BLENDING_ADD"};function e2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":t2[s.combine]||"ENVMAP_BLENDING_NONE"}function n2(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function i2(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=ZA(n),d=QA(n),_=$A(n),g=e2(n),v=n2(n),S=GA(n),E=HA(c),M=o.createProgram();let y,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(nl).join(`
`),x.length>0&&(x+=`
`)):(y=[gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nl).join(`
`),x=[gv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?Ee.tonemapping_pars_fragment:"",n.toneMapping!==Ji?BA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,IA("linearToOutputTexel",n.outputColorSpace),zA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(nl).join(`
`)),u=np(u),u=dv(u,n),u=pv(u,n),f=np(f),f=dv(f,n),f=pv(f,n),u=mv(u),f=mv(f),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===U_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===U_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=P+y+u,L=P+x+f,H=uv(o,o.VERTEX_SHADER,N),k=uv(o,o.FRAGMENT_SHADER,L);o.attachShader(M,H),o.attachShader(M,k),n.index0AttributeName!==void 0?o.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function z(X){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(M)||"",tt=o.getShaderInfoLog(H)||"",et=o.getShaderInfoLog(k)||"",Y=Z.trim(),D=tt.trim(),G=et.trim();let j=!0,ct=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,H,k);else{const ft=hv(o,H,"vertex"),B=hv(o,k,"fragment");ze("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+Y+`
`+ft+`
`+B)}else Y!==""?_e("WebGLProgram: Program Info Log:",Y):(D===""||G==="")&&(ct=!1);ct&&(X.diagnostics={runnable:j,programLog:Y,vertexShader:{log:D,prefix:y},fragmentShader:{log:G,prefix:x}})}o.deleteShader(H),o.deleteShader(k),K=new eu(o,M),R=VA(o,M)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(M,LA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NA++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=H,this.fragmentShader=k,this}let a2=0;class r2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new s2(t),n.set(t,a)),a}}class s2{constructor(t){this.id=a2++,this.code=t,this.usedTimes=0}}function o2(s,t,n,a,o,c,u){const f=new hx,p=new r2,d=new Set,_=[],g=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return d.add(R),R===0?"uv":`uv${R}`}function y(R,w,X,Z,tt){const et=Z.fog,Y=tt.geometry,D=R.isMeshStandardMaterial?Z.environment:null,G=(R.isMeshStandardMaterial?n:t).get(R.envMap||D),j=G&&G.mapping===cu?G.image.height:null,ct=E[R.type];R.precision!==null&&(S=o.getMaxPrecision(R.precision),S!==R.precision&&_e("WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,B=ft!==void 0?ft.length:0;let J=0;Y.morphAttributes.position!==void 0&&(J=1),Y.morphAttributes.normal!==void 0&&(J=2),Y.morphAttributes.color!==void 0&&(J=3);let lt,Dt,wt,rt;if(ct){const Gt=ji[ct];lt=Gt.vertexShader,Dt=Gt.fragmentShader}else lt=R.vertexShader,Dt=R.fragmentShader,p.update(R),wt=p.getVertexShaderID(R),rt=p.getFragmentShaderID(R);const pt=s.getRenderTarget(),Pt=s.state.buffers.depth.getReversed(),It=tt.isInstancedMesh===!0,Bt=tt.isBatchedMesh===!0,zt=!!R.map,Te=!!R.matcap,re=!!G,te=!!R.aoMap,de=!!R.lightMap,ee=!!R.bumpMap,oe=!!R.normalMap,$=!!R.displacementMap,De=!!R.emissiveMap,pe=!!R.metalnessMap,ye=!!R.roughnessMap,Zt=R.anisotropy>0,W=R.clearcoat>0,C=R.dispersion>0,it=R.iridescence>0,Tt=R.sheen>0,Ut=R.transmission>0,bt=Zt&&!!R.anisotropyMap,Kt=W&&!!R.clearcoatMap,Ft=W&&!!R.clearcoatNormalMap,qt=W&&!!R.clearcoatRoughnessMap,Yt=it&&!!R.iridescenceMap,Ot=it&&!!R.iridescenceThicknessMap,b=Tt&&!!R.sheenColorMap,A=Tt&&!!R.sheenRoughnessMap,U=!!R.specularMap,O=!!R.specularColorMap,q=!!R.specularIntensityMap,V=Ut&&!!R.transmissionMap,at=Ut&&!!R.thicknessMap,dt=!!R.gradientMap,At=!!R.alphaMap,xt=R.alphaTest>0,Et=!!R.alphaHash,Lt=!!R.extensions;let kt=Ji;R.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(kt=s.toneMapping);const ue={shaderID:ct,shaderType:R.type,shaderName:R.name,vertexShader:lt,fragmentShader:Dt,defines:R.defines,customVertexShaderID:wt,customFragmentShaderID:rt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Bt,batchingColor:Bt&&tt._colorsTexture!==null,instancing:It,instancingColor:It&&tt.instanceColor!==null,instancingMorph:It&&tt.morphTexture!==null,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Js,alphaToCoverage:!!R.alphaToCoverage,map:zt,matcap:Te,envMap:re,envMapMode:re&&G.mapping,envMapCubeUVHeight:j,aoMap:te,lightMap:de,bumpMap:ee,normalMap:oe,displacementMap:$,emissiveMap:De,normalMapObjectSpace:oe&&R.normalMapType===kb,normalMapTangentSpace:oe&&R.normalMapType===cx,metalnessMap:pe,roughnessMap:ye,anisotropy:Zt,anisotropyMap:bt,clearcoat:W,clearcoatMap:Kt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:qt,dispersion:C,iridescence:it,iridescenceMap:Yt,iridescenceThicknessMap:Ot,sheen:Tt,sheenColorMap:b,sheenRoughnessMap:A,specularMap:U,specularColorMap:O,specularIntensityMap:q,transmission:Ut,transmissionMap:V,thicknessMap:at,gradientMap:dt,opaque:R.transparent===!1&&R.blending===qs&&R.alphaToCoverage===!1,alphaMap:At,alphaTest:xt,alphaHash:Et,combine:R.combine,mapUv:zt&&M(R.map.channel),aoMapUv:te&&M(R.aoMap.channel),lightMapUv:de&&M(R.lightMap.channel),bumpMapUv:ee&&M(R.bumpMap.channel),normalMapUv:oe&&M(R.normalMap.channel),displacementMapUv:$&&M(R.displacementMap.channel),emissiveMapUv:De&&M(R.emissiveMap.channel),metalnessMapUv:pe&&M(R.metalnessMap.channel),roughnessMapUv:ye&&M(R.roughnessMap.channel),anisotropyMapUv:bt&&M(R.anisotropyMap.channel),clearcoatMapUv:Kt&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:b&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:A&&M(R.sheenRoughnessMap.channel),specularMapUv:U&&M(R.specularMap.channel),specularColorMapUv:O&&M(R.specularColorMap.channel),specularIntensityMapUv:q&&M(R.specularIntensityMap.channel),transmissionMapUv:V&&M(R.transmissionMap.channel),thicknessMapUv:at&&M(R.thicknessMap.channel),alphaMapUv:At&&M(R.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(oe||Zt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!Y.attributes.uv&&(zt||At),fog:!!et,useFog:R.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:tt.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,decodeVideoTexture:zt&&R.map.isVideoTexture===!0&&Pe.getTransfer(R.map.colorSpace)===Ke,decodeVideoTextureEmissive:De&&R.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(R.emissiveMap.colorSpace)===Ke,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Zi,flipSided:R.side===ri,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Lt&&R.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&R.extensions.multiDraw===!0||Bt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ue.vertexUv1s=d.has(1),ue.vertexUv2s=d.has(2),ue.vertexUv3s=d.has(3),d.clear(),ue}function x(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const X in R.defines)w.push(X),w.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(P(w,R),N(w,R),w.push(s.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function P(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function N(R,w){f.disableAll(),w.instancing&&f.enable(0),w.instancingColor&&f.enable(1),w.instancingMorph&&f.enable(2),w.matcap&&f.enable(3),w.envMap&&f.enable(4),w.normalMapObjectSpace&&f.enable(5),w.normalMapTangentSpace&&f.enable(6),w.clearcoat&&f.enable(7),w.iridescence&&f.enable(8),w.alphaTest&&f.enable(9),w.vertexColors&&f.enable(10),w.vertexAlphas&&f.enable(11),w.vertexUv1s&&f.enable(12),w.vertexUv2s&&f.enable(13),w.vertexUv3s&&f.enable(14),w.vertexTangents&&f.enable(15),w.anisotropy&&f.enable(16),w.alphaHash&&f.enable(17),w.batching&&f.enable(18),w.dispersion&&f.enable(19),w.batchingColor&&f.enable(20),w.gradientMap&&f.enable(21),R.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),R.push(f.mask)}function L(R){const w=E[R.type];let X;if(w){const Z=ji[w];X=v1.clone(Z.uniforms)}else X=R.uniforms;return X}function H(R,w){let X=g.get(w);return X!==void 0?++X.usedTimes:(X=new i2(s,w,R,c),_.push(X),g.set(w,X)),X}function k(R){if(--R.usedTimes===0){const w=_.indexOf(R);_[w]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function z(R){p.remove(R)}function K(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:H,releaseProgram:k,releaseShaderCache:z,programs:_,dispose:K}}function l2(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function c2(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _v(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function vv(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g,v,S,E,M,y){let x=s[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},s[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=M,x.group=y),t++,x}function f(g,v,S,E,M,y){const x=u(g,v,S,E,M,y);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(g,v,S,E,M,y){const x=u(g,v,S,E,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||c2),a.length>1&&a.sort(v||_v),o.length>1&&o.sort(v||_v)}function _(){for(let g=t,v=s.length;g<v;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:f,unshift:p,finish:_,sort:d}}function u2(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new vv,s.set(a,[u])):o>=c.length?(u=new vv,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function f2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new yt,color:new ke};break;case"SpotLight":n={position:new yt,direction:new yt,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new yt,color:new ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new yt,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":n={color:new ke,position:new yt,halfWidth:new yt,halfHeight:new yt};break}return s[t.id]=n,n}}}function h2(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let d2=0;function p2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function m2(s){const t=new f2,n=h2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new yt);const o=new yt,c=new fn,u=new fn;function f(d){let _=0,g=0,v=0;for(let R=0;R<9;R++)a.probe[R].set(0,0,0);let S=0,E=0,M=0,y=0,x=0,P=0,N=0,L=0,H=0,k=0,z=0;d.sort(p2);for(let R=0,w=d.length;R<w;R++){const X=d[R],Z=X.color,tt=X.intensity,et=X.distance;let Y=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Qs?Y=X.shadow.map.texture:Y=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)_+=Z.r*tt,g+=Z.g*tt,v+=Z.b*tt;else if(X.isLightProbe){for(let D=0;D<9;D++)a.probe[D].addScaledVector(X.sh.coefficients[D],tt);z++}else if(X.isDirectionalLight){const D=t.get(X);if(D.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const G=X.shadow,j=n.get(X);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,a.directionalShadow[S]=j,a.directionalShadowMap[S]=Y,a.directionalShadowMatrix[S]=X.shadow.matrix,P++}a.directional[S]=D,S++}else if(X.isSpotLight){const D=t.get(X);D.position.setFromMatrixPosition(X.matrixWorld),D.color.copy(Z).multiplyScalar(tt),D.distance=et,D.coneCos=Math.cos(X.angle),D.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),D.decay=X.decay,a.spot[M]=D;const G=X.shadow;if(X.map&&(a.spotLightMap[H]=X.map,H++,G.updateMatrices(X),X.castShadow&&k++),a.spotLightMatrix[M]=G.matrix,X.castShadow){const j=n.get(X);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,a.spotShadow[M]=j,a.spotShadowMap[M]=Y,L++}M++}else if(X.isRectAreaLight){const D=t.get(X);D.color.copy(Z).multiplyScalar(tt),D.halfWidth.set(X.width*.5,0,0),D.halfHeight.set(0,X.height*.5,0),a.rectArea[y]=D,y++}else if(X.isPointLight){const D=t.get(X);if(D.color.copy(X.color).multiplyScalar(X.intensity),D.distance=X.distance,D.decay=X.decay,X.castShadow){const G=X.shadow,j=n.get(X);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,a.pointShadow[E]=j,a.pointShadowMap[E]=Y,a.pointShadowMatrix[E]=X.shadow.matrix,N++}a.point[E]=D,E++}else if(X.isHemisphereLight){const D=t.get(X);D.skyColor.copy(X.color).multiplyScalar(tt),D.groundColor.copy(X.groundColor).multiplyScalar(tt),a.hemi[x]=D,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Xt.LTC_FLOAT_1,a.rectAreaLTC2=Xt.LTC_FLOAT_2):(a.rectAreaLTC1=Xt.LTC_HALF_1,a.rectAreaLTC2=Xt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const K=a.hash;(K.directionalLength!==S||K.pointLength!==E||K.spotLength!==M||K.rectAreaLength!==y||K.hemiLength!==x||K.numDirectionalShadows!==P||K.numPointShadows!==N||K.numSpotShadows!==L||K.numSpotMaps!==H||K.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=E,a.hemi.length=x,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=P,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=L+H-k,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=k,a.numLightProbes=z,K.directionalLength=S,K.pointLength=E,K.spotLength=M,K.rectAreaLength=y,K.hemiLength=x,K.numDirectionalShadows=P,K.numPointShadows=N,K.numSpotShadows=L,K.numSpotMaps=H,K.numLightProbes=z,a.version=d2++)}function p(d,_){let g=0,v=0,S=0,E=0,M=0;const y=_.matrixWorldInverse;for(let x=0,P=d.length;x<P;x++){const N=d[x];if(N.isDirectionalLight){const L=a.directional[g];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),g++}else if(N.isSpotLight){const L=a.spot[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const L=a.rectArea[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),u.identity(),c.copy(N.matrixWorld),c.premultiply(y),u.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),v++}else if(N.isHemisphereLight){const L=a.hemi[M];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:a}}function xv(s){const t=new m2(s),n=[],a=[];function o(_){d.camera=_,n.length=0,a.length=0}function c(_){n.push(_)}function u(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u}}function g2(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let f;return u===void 0?(f=new xv(s),t.set(o,[f])):c>=u.length?(f=new xv(s),u.push(f)):f=u[c],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const _2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
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
}`,x2=[new yt(1,0,0),new yt(-1,0,0),new yt(0,1,0),new yt(0,-1,0),new yt(0,0,1),new yt(0,0,-1)],y2=[new yt(0,-1,0),new yt(0,-1,0),new yt(0,0,1),new yt(0,0,-1),new yt(0,-1,0),new yt(0,-1,0)],yv=new fn,tl=new yt,id=new yt;function S2(s,t,n){let a=new bp;const o=new Xe,c=new Xe,u=new un,f=new L1,p=new N1,d={},_=n.maxTextureSize,g={[mr]:ri,[ri]:mr,[Zi]:Zi},v=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:_2,fragmentShader:v2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new aa;E.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new zi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let x=this.type;this.render=function(k,z,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;k.type===Yv&&(_e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),k.type=Kc);const R=s.getRenderTarget(),w=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(wa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const tt=x!==this.type;tt&&z.traverse(function(et){et.material&&(Array.isArray(et.material)?et.material.forEach(Y=>Y.needsUpdate=!0):et.material.needsUpdate=!0)});for(let et=0,Y=k.length;et<Y;et++){const D=k[et],G=D.shadow;if(G===void 0){_e("WebGLShadowMap:",D,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const j=G.getFrameExtents();if(o.multiply(j),c.copy(G.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(c.x=Math.floor(_/j.x),o.x=c.x*j.x,G.mapSize.x=c.x),o.y>_&&(c.y=Math.floor(_/j.y),o.y=c.y*j.y,G.mapSize.y=c.y)),G.map===null||tt===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===el){if(D.isPointLight){_e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new $i(o.x,o.y,{format:Qs,type:Da,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),G.map.texture.name=D.name+".shadowMap",G.map.depthTexture=new ll(o.x,o.y,Ki),G.map.depthTexture.name=D.name+".shadowMapDepth",G.map.depthTexture.format=La,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn}else{D.isPointLight?(G.map=new vx(o.x),G.map.depthTexture=new w1(o.x,ea)):(G.map=new $i(o.x,o.y),G.map.depthTexture=new ll(o.x,o.y,ea)),G.map.depthTexture.name=D.name+".shadowMap",G.map.depthTexture.format=La;const ft=s.state.buffers.depth.getReversed();this.type===Kc?(G.map.depthTexture.compareFunction=ft?_p:gp,G.map.depthTexture.minFilter=Xn,G.map.depthTexture.magFilter=Xn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn)}G.camera.updateProjectionMatrix()}const ct=G.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<ct;ft++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,ft),s.clear();else{ft===0&&(s.setRenderTarget(G.map),s.clear());const B=G.getViewport(ft);u.set(c.x*B.x,c.y*B.y,c.x*B.z,c.y*B.w),Z.viewport(u)}if(D.isPointLight){const B=G.camera,J=G.matrix,lt=D.distance||B.far;lt!==B.far&&(B.far=lt,B.updateProjectionMatrix()),tl.setFromMatrixPosition(D.matrixWorld),B.position.copy(tl),id.copy(B.position),id.add(x2[ft]),B.up.copy(y2[ft]),B.lookAt(id),B.updateMatrixWorld(),J.makeTranslation(-tl.x,-tl.y,-tl.z),yv.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),G._frustum.setFromProjectionMatrix(yv,B.coordinateSystem,B.reversedDepth)}else G.updateMatrices(D);a=G.getFrustum(),L(z,K,G.camera,D,this.type)}G.isPointLightShadow!==!0&&this.type===el&&P(G,K),G.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(R,w,X)};function P(k,z){const K=t.update(M);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new $i(o.x,o.y,{format:Qs,type:Da})),v.uniforms.shadow_pass.value=k.map.depthTexture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,K,v,M,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,K,S,M,null)}function N(k,z,K,R){let w=null;const X=K.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(X!==void 0)w=X;else if(w=K.isPointLight===!0?p:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=w.uuid,tt=z.uuid;let et=d[Z];et===void 0&&(et={},d[Z]=et);let Y=et[tt];Y===void 0&&(Y=w.clone(),et[tt]=Y,z.addEventListener("dispose",H)),w=Y}if(w.visible=z.visible,w.wireframe=z.wireframe,R===el?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:g[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=s.properties.get(w);Z.light=K}return w}function L(k,z,K,R,w){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===el)&&(!k.frustumCulled||a.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,k.matrixWorld);const tt=t.update(k),et=k.material;if(Array.isArray(et)){const Y=tt.groups;for(let D=0,G=Y.length;D<G;D++){const j=Y[D],ct=et[j.materialIndex];if(ct&&ct.visible){const ft=N(k,ct,R,w);k.onBeforeShadow(s,k,z,K,tt,ft,j),s.renderBufferDirect(K,null,tt,ft,k,j),k.onAfterShadow(s,k,z,K,tt,ft,j)}}}else if(et.visible){const Y=N(k,et,R,w);k.onBeforeShadow(s,k,z,K,tt,Y,null),s.renderBufferDirect(K,null,tt,Y,k,null),k.onAfterShadow(s,k,z,K,tt,Y,null)}}const Z=k.children;for(let tt=0,et=Z.length;tt<et;tt++)L(Z[tt],z,K,R,w)}function H(k){k.target.removeEventListener("dispose",H);for(const K in d){const R=d[K],w=k.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const b2={[fd]:hd,[dd]:gd,[pd]:_d,[Zs]:md,[hd]:fd,[gd]:dd,[_d]:pd,[md]:Zs};function M2(s,t){function n(){let V=!1;const at=new un;let dt=null;const At=new un(0,0,0,0);return{setMask:function(xt){dt!==xt&&!V&&(s.colorMask(xt,xt,xt,xt),dt=xt)},setLocked:function(xt){V=xt},setClear:function(xt,Et,Lt,kt,ue){ue===!0&&(xt*=kt,Et*=kt,Lt*=kt),at.set(xt,Et,Lt,kt),At.equals(at)===!1&&(s.clearColor(xt,Et,Lt,kt),At.copy(at))},reset:function(){V=!1,dt=null,At.set(-1,0,0,0)}}}function a(){let V=!1,at=!1,dt=null,At=null,xt=null;return{setReversed:function(Et){if(at!==Et){const Lt=t.get("EXT_clip_control");Et?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),at=Et;const kt=xt;xt=null,this.setClear(kt)}},getReversed:function(){return at},setTest:function(Et){Et?pt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(Et){dt!==Et&&!V&&(s.depthMask(Et),dt=Et)},setFunc:function(Et){if(at&&(Et=b2[Et]),At!==Et){switch(Et){case fd:s.depthFunc(s.NEVER);break;case hd:s.depthFunc(s.ALWAYS);break;case dd:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case pd:s.depthFunc(s.EQUAL);break;case md:s.depthFunc(s.GEQUAL);break;case gd:s.depthFunc(s.GREATER);break;case _d:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}At=Et}},setLocked:function(Et){V=Et},setClear:function(Et){xt!==Et&&(at&&(Et=1-Et),s.clearDepth(Et),xt=Et)},reset:function(){V=!1,dt=null,At=null,xt=null,at=!1}}}function o(){let V=!1,at=null,dt=null,At=null,xt=null,Et=null,Lt=null,kt=null,ue=null;return{setTest:function(Gt){V||(Gt?pt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(Gt){at!==Gt&&!V&&(s.stencilMask(Gt),at=Gt)},setFunc:function(Gt,Se,si){(dt!==Gt||At!==Se||xt!==si)&&(s.stencilFunc(Gt,Se,si),dt=Gt,At=Se,xt=si)},setOp:function(Gt,Se,si){(Et!==Gt||Lt!==Se||kt!==si)&&(s.stencilOp(Gt,Se,si),Et=Gt,Lt=Se,kt=si)},setLocked:function(Gt){V=Gt},setClear:function(Gt){ue!==Gt&&(s.clearStencil(Gt),ue=Gt)},reset:function(){V=!1,at=null,dt=null,At=null,xt=null,Et=null,Lt=null,kt=null,ue=null}}}const c=new n,u=new a,f=new o,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,P=null,N=null,L=null,H=null,k=null,z=new ke(0,0,0),K=0,R=!1,w=null,X=null,Z=null,tt=null,et=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,G=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),D=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),D=G>=2);let ct=null,ft={};const B=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),lt=new un().fromArray(B),Dt=new un().fromArray(J);function wt(V,at,dt,At){const xt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(V,Et),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<dt;Lt++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,At,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(at+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Et}const rt={};rt[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),rt[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),rt[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pt(s.DEPTH_TEST),u.setFunc(Zs),ee(!1),oe(E_),pt(s.CULL_FACE),te(wa);function pt(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Pt(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function It(V,at){return g[V]!==at?(s.bindFramebuffer(V,at),g[V]=at,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=at),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Bt(V,at){let dt=S,At=!1;if(V){dt=v.get(at),dt===void 0&&(dt=[],v.set(at,dt));const xt=V.textures;if(dt.length!==xt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,Lt=xt.length;Et<Lt;Et++)dt[Et]=s.COLOR_ATTACHMENT0+Et;dt.length=xt.length,At=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,At=!0);At&&s.drawBuffers(dt)}function zt(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const Te={[kr]:s.FUNC_ADD,[bb]:s.FUNC_SUBTRACT,[Mb]:s.FUNC_REVERSE_SUBTRACT};Te[Eb]=s.MIN,Te[Tb]=s.MAX;const re={[Ab]:s.ZERO,[Rb]:s.ONE,[Cb]:s.SRC_COLOR,[cd]:s.SRC_ALPHA,[Ob]:s.SRC_ALPHA_SATURATE,[Lb]:s.DST_COLOR,[Ub]:s.DST_ALPHA,[wb]:s.ONE_MINUS_SRC_COLOR,[ud]:s.ONE_MINUS_SRC_ALPHA,[Nb]:s.ONE_MINUS_DST_COLOR,[Db]:s.ONE_MINUS_DST_ALPHA,[Pb]:s.CONSTANT_COLOR,[Ib]:s.ONE_MINUS_CONSTANT_COLOR,[Fb]:s.CONSTANT_ALPHA,[Bb]:s.ONE_MINUS_CONSTANT_ALPHA};function te(V,at,dt,At,xt,Et,Lt,kt,ue,Gt){if(V===wa){M===!0&&(Pt(s.BLEND),M=!1);return}if(M===!1&&(pt(s.BLEND),M=!0),V!==Sb){if(V!==y||Gt!==R){if((x!==kr||L!==kr)&&(s.blendEquation(s.FUNC_ADD),x=kr,L=kr),Gt)switch(V){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFunc(s.ONE,s.ONE);break;case A_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case R_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ze("WebGLState: Invalid blending: ",V);break}else switch(V){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case T_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case A_:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",V);break}P=null,N=null,H=null,k=null,z.set(0,0,0),K=0,y=V,R=Gt}return}xt=xt||at,Et=Et||dt,Lt=Lt||At,(at!==x||xt!==L)&&(s.blendEquationSeparate(Te[at],Te[xt]),x=at,L=xt),(dt!==P||At!==N||Et!==H||Lt!==k)&&(s.blendFuncSeparate(re[dt],re[At],re[Et],re[Lt]),P=dt,N=At,H=Et,k=Lt),(kt.equals(z)===!1||ue!==K)&&(s.blendColor(kt.r,kt.g,kt.b,ue),z.copy(kt),K=ue),y=V,R=!1}function de(V,at){V.side===Zi?Pt(s.CULL_FACE):pt(s.CULL_FACE);let dt=V.side===ri;at&&(dt=!dt),ee(dt),V.blending===qs&&V.transparent===!1?te(wa):te(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const At=V.stencilWrite;f.setTest(At),At&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){w!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),w=V)}function oe(V){V!==xb?(pt(s.CULL_FACE),V!==X&&(V===E_?s.cullFace(s.BACK):V===yb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),X=V}function $(V){V!==Z&&(D&&s.lineWidth(V),Z=V)}function De(V,at,dt){V?(pt(s.POLYGON_OFFSET_FILL),(tt!==at||et!==dt)&&(s.polygonOffset(at,dt),tt=at,et=dt)):Pt(s.POLYGON_OFFSET_FILL)}function pe(V){V?pt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function ye(V){V===void 0&&(V=s.TEXTURE0+Y-1),ct!==V&&(s.activeTexture(V),ct=V)}function Zt(V,at,dt){dt===void 0&&(ct===null?dt=s.TEXTURE0+Y-1:dt=ct);let At=ft[dt];At===void 0&&(At={type:void 0,texture:void 0},ft[dt]=At),(At.type!==V||At.texture!==at)&&(ct!==dt&&(s.activeTexture(dt),ct=dt),s.bindTexture(V,at||rt[V]),At.type=V,At.texture=at)}function W(){const V=ft[ct];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(V){ze("WebGLState:",V)}}function it(){try{s.compressedTexImage3D(...arguments)}catch(V){ze("WebGLState:",V)}}function Tt(){try{s.texSubImage2D(...arguments)}catch(V){ze("WebGLState:",V)}}function Ut(){try{s.texSubImage3D(...arguments)}catch(V){ze("WebGLState:",V)}}function bt(){try{s.compressedTexSubImage2D(...arguments)}catch(V){ze("WebGLState:",V)}}function Kt(){try{s.compressedTexSubImage3D(...arguments)}catch(V){ze("WebGLState:",V)}}function Ft(){try{s.texStorage2D(...arguments)}catch(V){ze("WebGLState:",V)}}function qt(){try{s.texStorage3D(...arguments)}catch(V){ze("WebGLState:",V)}}function Yt(){try{s.texImage2D(...arguments)}catch(V){ze("WebGLState:",V)}}function Ot(){try{s.texImage3D(...arguments)}catch(V){ze("WebGLState:",V)}}function b(V){lt.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),lt.copy(V))}function A(V){Dt.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Dt.copy(V))}function U(V,at){let dt=d.get(at);dt===void 0&&(dt=new WeakMap,d.set(at,dt));let At=dt.get(V);At===void 0&&(At=s.getUniformBlockIndex(at,V.name),dt.set(V,At))}function O(V,at){const At=d.get(at).get(V);p.get(at)!==At&&(s.uniformBlockBinding(at,At,V.__bindingPointIndex),p.set(at,At))}function q(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ct=null,ft={},g={},v=new WeakMap,S=[],E=null,M=!1,y=null,x=null,P=null,N=null,L=null,H=null,k=null,z=new ke(0,0,0),K=0,R=!1,w=null,X=null,Z=null,tt=null,et=null,lt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:pt,disable:Pt,bindFramebuffer:It,drawBuffers:Bt,useProgram:zt,setBlending:te,setMaterial:de,setFlipSided:ee,setCullFace:oe,setLineWidth:$,setPolygonOffset:De,setScissorTest:pe,activeTexture:ye,bindTexture:Zt,unbindTexture:W,compressedTexImage2D:C,compressedTexImage3D:it,texImage2D:Yt,texImage3D:Ot,updateUBOMapping:U,uniformBlockBinding:O,texStorage2D:Ft,texStorage3D:qt,texSubImage2D:Tt,texSubImage3D:Ut,compressedTexSubImage2D:bt,compressedTexSubImage3D:Kt,scissor:b,viewport:A,reset:q}}function E2(s,t,n,a,o,c,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Xe,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(W,C){return S?new OffscreenCanvas(W,C):au("canvas")}function M(W,C,it){let Tt=1;const Ut=Zt(W);if((Ut.width>it||Ut.height>it)&&(Tt=it/Math.max(Ut.width,Ut.height)),Tt<1)if(typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&W instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&W instanceof ImageBitmap||typeof VideoFrame<"u"&&W instanceof VideoFrame){const bt=Math.floor(Tt*Ut.width),Kt=Math.floor(Tt*Ut.height);g===void 0&&(g=E(bt,Kt));const Ft=C?E(bt,Kt):g;return Ft.width=bt,Ft.height=Kt,Ft.getContext("2d").drawImage(W,0,0,bt,Kt),_e("WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+bt+"x"+Kt+")."),Ft}else return"data"in W&&_e("WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),W;return W}function y(W){return W.generateMipmaps}function x(W){s.generateMipmap(W)}function P(W){return W.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:W.isWebGL3DRenderTarget?s.TEXTURE_3D:W.isWebGLArrayRenderTarget||W.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(W,C,it,Tt,Ut=!1){if(W!==null){if(s[W]!==void 0)return s[W];_e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+W+"'")}let bt=C;if(C===s.RED&&(it===s.FLOAT&&(bt=s.R32F),it===s.HALF_FLOAT&&(bt=s.R16F),it===s.UNSIGNED_BYTE&&(bt=s.R8)),C===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(bt=s.R8UI),it===s.UNSIGNED_SHORT&&(bt=s.R16UI),it===s.UNSIGNED_INT&&(bt=s.R32UI),it===s.BYTE&&(bt=s.R8I),it===s.SHORT&&(bt=s.R16I),it===s.INT&&(bt=s.R32I)),C===s.RG&&(it===s.FLOAT&&(bt=s.RG32F),it===s.HALF_FLOAT&&(bt=s.RG16F),it===s.UNSIGNED_BYTE&&(bt=s.RG8)),C===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(bt=s.RG8UI),it===s.UNSIGNED_SHORT&&(bt=s.RG16UI),it===s.UNSIGNED_INT&&(bt=s.RG32UI),it===s.BYTE&&(bt=s.RG8I),it===s.SHORT&&(bt=s.RG16I),it===s.INT&&(bt=s.RG32I)),C===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(bt=s.RGB8UI),it===s.UNSIGNED_SHORT&&(bt=s.RGB16UI),it===s.UNSIGNED_INT&&(bt=s.RGB32UI),it===s.BYTE&&(bt=s.RGB8I),it===s.SHORT&&(bt=s.RGB16I),it===s.INT&&(bt=s.RGB32I)),C===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(bt=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(bt=s.RGBA16UI),it===s.UNSIGNED_INT&&(bt=s.RGBA32UI),it===s.BYTE&&(bt=s.RGBA8I),it===s.SHORT&&(bt=s.RGBA16I),it===s.INT&&(bt=s.RGBA32I)),C===s.RGB&&(it===s.UNSIGNED_INT_5_9_9_9_REV&&(bt=s.RGB9_E5),it===s.UNSIGNED_INT_10F_11F_11F_REV&&(bt=s.R11F_G11F_B10F)),C===s.RGBA){const Kt=Ut?nu:Pe.getTransfer(Tt);it===s.FLOAT&&(bt=s.RGBA32F),it===s.HALF_FLOAT&&(bt=s.RGBA16F),it===s.UNSIGNED_BYTE&&(bt=Kt===Ke?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT_4_4_4_4&&(bt=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(bt=s.RGB5_A1)}return(bt===s.R16F||bt===s.R32F||bt===s.RG16F||bt===s.RG32F||bt===s.RGBA16F||bt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),bt}function L(W,C){let it;return W?C===null||C===ea||C===sl?it=s.DEPTH24_STENCIL8:C===Ki?it=s.DEPTH32F_STENCIL8:C===rl&&(it=s.DEPTH24_STENCIL8,_e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ea||C===sl?it=s.DEPTH_COMPONENT24:C===Ki?it=s.DEPTH_COMPONENT32F:C===rl&&(it=s.DEPTH_COMPONENT16),it}function H(W,C){return y(W)===!0||W.isFramebufferTexture&&W.minFilter!==Gn&&W.minFilter!==Xn?Math.log2(Math.max(C.width,C.height))+1:W.mipmaps!==void 0&&W.mipmaps.length>0?W.mipmaps.length:W.isCompressedTexture&&Array.isArray(W.image)?C.mipmaps.length:1}function k(W){const C=W.target;C.removeEventListener("dispose",k),K(C),C.isVideoTexture&&_.delete(C)}function z(W){const C=W.target;C.removeEventListener("dispose",z),w(C)}function K(W){const C=a.get(W);if(C.__webglInit===void 0)return;const it=W.source,Tt=v.get(it);if(Tt){const Ut=Tt[C.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&R(W),Object.keys(Tt).length===0&&v.delete(it)}a.remove(W)}function R(W){const C=a.get(W);s.deleteTexture(C.__webglTexture);const it=W.source,Tt=v.get(it);delete Tt[C.__cacheKey],u.memory.textures--}function w(W){const C=a.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),a.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(C.__webglFramebuffer[Tt]))for(let Ut=0;Ut<C.__webglFramebuffer[Tt].length;Ut++)s.deleteFramebuffer(C.__webglFramebuffer[Tt][Ut]);else s.deleteFramebuffer(C.__webglFramebuffer[Tt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[Tt])}else{if(Array.isArray(C.__webglFramebuffer))for(let Tt=0;Tt<C.__webglFramebuffer.length;Tt++)s.deleteFramebuffer(C.__webglFramebuffer[Tt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Tt=0;Tt<C.__webglColorRenderbuffer.length;Tt++)C.__webglColorRenderbuffer[Tt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[Tt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const it=W.textures;for(let Tt=0,Ut=it.length;Tt<Ut;Tt++){const bt=a.get(it[Tt]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),u.memory.textures--),a.remove(it[Tt])}a.remove(W)}let X=0;function Z(){X=0}function tt(){const W=X;return W>=o.maxTextures&&_e("WebGLTextures: Trying to use "+W+" texture units while this GPU supports only "+o.maxTextures),X+=1,W}function et(W){const C=[];return C.push(W.wrapS),C.push(W.wrapT),C.push(W.wrapR||0),C.push(W.magFilter),C.push(W.minFilter),C.push(W.anisotropy),C.push(W.internalFormat),C.push(W.format),C.push(W.type),C.push(W.generateMipmaps),C.push(W.premultiplyAlpha),C.push(W.flipY),C.push(W.unpackAlignment),C.push(W.colorSpace),C.join()}function Y(W,C){const it=a.get(W);if(W.isVideoTexture&&pe(W),W.isRenderTargetTexture===!1&&W.isExternalTexture!==!0&&W.version>0&&it.__version!==W.version){const Tt=W.image;if(Tt===null)_e("WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)_e("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(it,W,C);return}}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+C)}function D(W,C){const it=a.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){rt(it,W,C);return}else W.isExternalTexture&&(it.__webglTexture=W.sourceTexture?W.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+C)}function G(W,C){const it=a.get(W);if(W.isRenderTargetTexture===!1&&W.version>0&&it.__version!==W.version){rt(it,W,C);return}n.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+C)}function j(W,C){const it=a.get(W);if(W.isCubeDepthTexture!==!0&&W.version>0&&it.__version!==W.version){pt(it,W,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+C)}const ct={[yd]:s.REPEAT,[Ca]:s.CLAMP_TO_EDGE,[Sd]:s.MIRRORED_REPEAT},ft={[Gn]:s.NEAREST,[Hb]:s.NEAREST_MIPMAP_NEAREST,[Ac]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[Ah]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},B={[Xb]:s.NEVER,[Zb]:s.ALWAYS,[Wb]:s.LESS,[gp]:s.LEQUAL,[Yb]:s.EQUAL,[_p]:s.GEQUAL,[qb]:s.GREATER,[jb]:s.NOTEQUAL};function J(W,C){if(C.type===Ki&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===Xn||C.magFilter===Ah||C.magFilter===Ac||C.magFilter===Yr||C.minFilter===Xn||C.minFilter===Ah||C.minFilter===Ac||C.minFilter===Yr)&&_e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(W,s.TEXTURE_WRAP_S,ct[C.wrapS]),s.texParameteri(W,s.TEXTURE_WRAP_T,ct[C.wrapT]),(W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY)&&s.texParameteri(W,s.TEXTURE_WRAP_R,ct[C.wrapR]),s.texParameteri(W,s.TEXTURE_MAG_FILTER,ft[C.magFilter]),s.texParameteri(W,s.TEXTURE_MIN_FILTER,ft[C.minFilter]),C.compareFunction&&(s.texParameteri(W,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(W,s.TEXTURE_COMPARE_FUNC,B[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Gn||C.minFilter!==Ac&&C.minFilter!==Yr||C.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||a.get(C).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(W,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),a.get(C).__currentAnisotropy=C.anisotropy}}}function lt(W,C){let it=!1;W.__webglInit===void 0&&(W.__webglInit=!0,C.addEventListener("dispose",k));const Tt=C.source;let Ut=v.get(Tt);Ut===void 0&&(Ut={},v.set(Tt,Ut));const bt=et(C);if(bt!==W.__cacheKey){Ut[bt]===void 0&&(Ut[bt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,it=!0),Ut[bt].usedTimes++;const Kt=Ut[W.__cacheKey];Kt!==void 0&&(Ut[W.__cacheKey].usedTimes--,Kt.usedTimes===0&&R(C)),W.__cacheKey=bt,W.__webglTexture=Ut[bt].texture}return it}function Dt(W,C,it){return Math.floor(Math.floor(W/it)/C)}function wt(W,C,it,Tt){const bt=W.updateRanges;if(bt.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,it,Tt,C.data);else{bt.sort((Ot,b)=>Ot.start-b.start);let Kt=0;for(let Ot=1;Ot<bt.length;Ot++){const b=bt[Kt],A=bt[Ot],U=b.start+b.count,O=Dt(A.start,C.width,4),q=Dt(b.start,C.width,4);A.start<=U+1&&O===q&&Dt(A.start+A.count-1,C.width,4)===O?b.count=Math.max(b.count,A.start+A.count-b.start):(++Kt,bt[Kt]=A)}bt.length=Kt+1;const Ft=s.getParameter(s.UNPACK_ROW_LENGTH),qt=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let Ot=0,b=bt.length;Ot<b;Ot++){const A=bt[Ot],U=Math.floor(A.start/4),O=Math.ceil(A.count/4),q=U%C.width,V=Math.floor(U/C.width),at=O,dt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,q),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,q,V,at,dt,it,Tt,C.data)}W.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ft),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function rt(W,C,it){let Tt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Tt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Tt=s.TEXTURE_3D);const Ut=lt(W,C),bt=C.source;n.bindTexture(Tt,W.__webglTexture,s.TEXTURE0+it);const Kt=a.get(bt);if(bt.version!==Kt.__version||Ut===!0){n.activeTexture(s.TEXTURE0+it);const Ft=Pe.getPrimaries(Pe.workingColorSpace),qt=C.colorSpace===hr?null:Pe.getPrimaries(C.colorSpace),Yt=C.colorSpace===hr||Ft===qt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Ot=M(C.image,!1,o.maxTextureSize);Ot=ye(C,Ot);const b=c.convert(C.format,C.colorSpace),A=c.convert(C.type);let U=N(C.internalFormat,b,A,C.colorSpace,C.isVideoTexture);J(Tt,C);let O;const q=C.mipmaps,V=C.isVideoTexture!==!0,at=Kt.__version===void 0||Ut===!0,dt=bt.dataReady,At=H(C,Ot);if(C.isDepthTexture)U=L(C.format===qr,C.type),at&&(V?n.texStorage2D(s.TEXTURE_2D,1,U,Ot.width,Ot.height):n.texImage2D(s.TEXTURE_2D,0,U,Ot.width,Ot.height,0,b,A,null));else if(C.isDataTexture)if(q.length>0){V&&at&&n.texStorage2D(s.TEXTURE_2D,At,U,q[0].width,q[0].height);for(let xt=0,Et=q.length;xt<Et;xt++)O=q[xt],V?dt&&n.texSubImage2D(s.TEXTURE_2D,xt,0,0,O.width,O.height,b,A,O.data):n.texImage2D(s.TEXTURE_2D,xt,U,O.width,O.height,0,b,A,O.data);C.generateMipmaps=!1}else V?(at&&n.texStorage2D(s.TEXTURE_2D,At,U,Ot.width,Ot.height),dt&&wt(C,Ot,b,A)):n.texImage2D(s.TEXTURE_2D,0,U,Ot.width,Ot.height,0,b,A,Ot.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){V&&at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,At,U,q[0].width,q[0].height,Ot.depth);for(let xt=0,Et=q.length;xt<Et;xt++)if(O=q[xt],C.format!==Bi)if(b!==null)if(V){if(dt)if(C.layerUpdates.size>0){const Lt=Q_(O.width,O.height,C.format,C.type);for(const kt of C.layerUpdates){const ue=O.data.subarray(kt*Lt/O.data.BYTES_PER_ELEMENT,(kt+1)*Lt/O.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,kt,O.width,O.height,1,b,ue)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,O.width,O.height,Ot.depth,b,O.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,U,O.width,O.height,Ot.depth,0,O.data,0,0);else _e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?dt&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,O.width,O.height,Ot.depth,b,A,O.data):n.texImage3D(s.TEXTURE_2D_ARRAY,xt,U,O.width,O.height,Ot.depth,0,b,A,O.data)}else{V&&at&&n.texStorage2D(s.TEXTURE_2D,At,U,q[0].width,q[0].height);for(let xt=0,Et=q.length;xt<Et;xt++)O=q[xt],C.format!==Bi?b!==null?V?dt&&n.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,O.width,O.height,b,O.data):n.compressedTexImage2D(s.TEXTURE_2D,xt,U,O.width,O.height,0,O.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?dt&&n.texSubImage2D(s.TEXTURE_2D,xt,0,0,O.width,O.height,b,A,O.data):n.texImage2D(s.TEXTURE_2D,xt,U,O.width,O.height,0,b,A,O.data)}else if(C.isDataArrayTexture)if(V){if(at&&n.texStorage3D(s.TEXTURE_2D_ARRAY,At,U,Ot.width,Ot.height,Ot.depth),dt)if(C.layerUpdates.size>0){const xt=Q_(Ot.width,Ot.height,C.format,C.type);for(const Et of C.layerUpdates){const Lt=Ot.data.subarray(Et*xt/Ot.data.BYTES_PER_ELEMENT,(Et+1)*xt/Ot.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Et,Ot.width,Ot.height,1,b,A,Lt)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,b,A,Ot.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,U,Ot.width,Ot.height,Ot.depth,0,b,A,Ot.data);else if(C.isData3DTexture)V?(at&&n.texStorage3D(s.TEXTURE_3D,At,U,Ot.width,Ot.height,Ot.depth),dt&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,b,A,Ot.data)):n.texImage3D(s.TEXTURE_3D,0,U,Ot.width,Ot.height,Ot.depth,0,b,A,Ot.data);else if(C.isFramebufferTexture){if(at)if(V)n.texStorage2D(s.TEXTURE_2D,At,U,Ot.width,Ot.height);else{let xt=Ot.width,Et=Ot.height;for(let Lt=0;Lt<At;Lt++)n.texImage2D(s.TEXTURE_2D,Lt,U,xt,Et,0,b,A,null),xt>>=1,Et>>=1}}else if(q.length>0){if(V&&at){const xt=Zt(q[0]);n.texStorage2D(s.TEXTURE_2D,At,U,xt.width,xt.height)}for(let xt=0,Et=q.length;xt<Et;xt++)O=q[xt],V?dt&&n.texSubImage2D(s.TEXTURE_2D,xt,0,0,b,A,O):n.texImage2D(s.TEXTURE_2D,xt,U,b,A,O);C.generateMipmaps=!1}else if(V){if(at){const xt=Zt(Ot);n.texStorage2D(s.TEXTURE_2D,At,U,xt.width,xt.height)}dt&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,b,A,Ot)}else n.texImage2D(s.TEXTURE_2D,0,U,b,A,Ot);y(C)&&x(Tt),Kt.__version=bt.version,C.onUpdate&&C.onUpdate(C)}W.__version=C.version}function pt(W,C,it){if(C.image.length!==6)return;const Tt=lt(W,C),Ut=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+it);const bt=a.get(Ut);if(Ut.version!==bt.__version||Tt===!0){n.activeTexture(s.TEXTURE0+it);const Kt=Pe.getPrimaries(Pe.workingColorSpace),Ft=C.colorSpace===hr?null:Pe.getPrimaries(C.colorSpace),qt=C.colorSpace===hr||Kt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=C.isCompressedTexture||C.image[0].isCompressedTexture,Ot=C.image[0]&&C.image[0].isDataTexture,b=[];for(let Et=0;Et<6;Et++)!Yt&&!Ot?b[Et]=M(C.image[Et],!0,o.maxCubemapSize):b[Et]=Ot?C.image[Et].image:C.image[Et],b[Et]=ye(C,b[Et]);const A=b[0],U=c.convert(C.format,C.colorSpace),O=c.convert(C.type),q=N(C.internalFormat,U,O,C.colorSpace),V=C.isVideoTexture!==!0,at=bt.__version===void 0||Tt===!0,dt=Ut.dataReady;let At=H(C,A);J(s.TEXTURE_CUBE_MAP,C);let xt;if(Yt){V&&at&&n.texStorage2D(s.TEXTURE_CUBE_MAP,At,q,A.width,A.height);for(let Et=0;Et<6;Et++){xt=b[Et].mipmaps;for(let Lt=0;Lt<xt.length;Lt++){const kt=xt[Lt];C.format!==Bi?U!==null?V?dt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,kt.width,kt.height,U,kt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,q,kt.width,kt.height,0,kt.data):_e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?dt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,0,0,kt.width,kt.height,U,O,kt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt,q,kt.width,kt.height,0,U,O,kt.data)}}}else{if(xt=C.mipmaps,V&&at){xt.length>0&&At++;const Et=Zt(b[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,At,q,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ot){V?dt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,b[Et].width,b[Et].height,U,O,b[Et].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,q,b[Et].width,b[Et].height,0,U,O,b[Et].data);for(let Lt=0;Lt<xt.length;Lt++){const ue=xt[Lt].image[Et].image;V?dt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,ue.width,ue.height,U,O,ue.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,q,ue.width,ue.height,0,U,O,ue.data)}}else{V?dt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,U,O,b[Et]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,q,U,O,b[Et]);for(let Lt=0;Lt<xt.length;Lt++){const kt=xt[Lt];V?dt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,0,0,U,O,kt.image[Et]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt+1,q,U,O,kt.image[Et])}}}y(C)&&x(s.TEXTURE_CUBE_MAP),bt.__version=Ut.version,C.onUpdate&&C.onUpdate(C)}W.__version=C.version}function Pt(W,C,it,Tt,Ut,bt){const Kt=c.convert(it.format,it.colorSpace),Ft=c.convert(it.type),qt=N(it.internalFormat,Kt,Ft,it.colorSpace),Yt=a.get(C),Ot=a.get(it);if(Ot.__renderTarget=C,!Yt.__hasExternalTextures){const b=Math.max(1,C.width>>bt),A=Math.max(1,C.height>>bt);Ut===s.TEXTURE_3D||Ut===s.TEXTURE_2D_ARRAY?n.texImage3D(Ut,bt,qt,b,A,C.depth,0,Kt,Ft,null):n.texImage2D(Ut,bt,qt,b,A,0,Kt,Ft,null)}n.bindFramebuffer(s.FRAMEBUFFER,W),De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Tt,Ut,Ot.__webglTexture,0,$(C)):(Ut===s.TEXTURE_2D||Ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Tt,Ut,Ot.__webglTexture,bt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function It(W,C,it){if(s.bindRenderbuffer(s.RENDERBUFFER,W),C.depthBuffer){const Tt=C.depthTexture,Ut=Tt&&Tt.isDepthTexture?Tt.type:null,bt=L(C.stencilBuffer,Ut),Kt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;De(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$(C),bt,C.width,C.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,$(C),bt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,bt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Kt,s.RENDERBUFFER,W)}else{const Tt=C.textures;for(let Ut=0;Ut<Tt.length;Ut++){const bt=Tt[Ut],Kt=c.convert(bt.format,bt.colorSpace),Ft=c.convert(bt.type),qt=N(bt.internalFormat,Kt,Ft,bt.colorSpace);De(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$(C),qt,C.width,C.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,$(C),qt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,qt,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Bt(W,C,it){const Tt=C.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,W),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ut=a.get(C.depthTexture);if(Ut.__renderTarget=C,(!Ut.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Tt){if(Ut.__webglInit===void 0&&(Ut.__webglInit=!0,C.depthTexture.addEventListener("dispose",k)),Ut.__webglTexture===void 0){Ut.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,Ut.__webglTexture),J(s.TEXTURE_CUBE_MAP,C.depthTexture);const Yt=c.convert(C.depthTexture.format),Ot=c.convert(C.depthTexture.type);let b;C.depthTexture.format===La?b=s.DEPTH_COMPONENT24:C.depthTexture.format===qr&&(b=s.DEPTH24_STENCIL8);for(let A=0;A<6;A++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+A,0,b,C.width,C.height,0,Yt,Ot,null)}}else Y(C.depthTexture,0);const bt=Ut.__webglTexture,Kt=$(C),Ft=Tt?s.TEXTURE_CUBE_MAP_POSITIVE_X+it:s.TEXTURE_2D,qt=C.depthTexture.format===qr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===La)De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qt,Ft,bt,0,Kt):s.framebufferTexture2D(s.FRAMEBUFFER,qt,Ft,bt,0);else if(C.depthTexture.format===qr)De(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qt,Ft,bt,0,Kt):s.framebufferTexture2D(s.FRAMEBUFFER,qt,Ft,bt,0);else throw new Error("Unknown depthTexture format")}function zt(W){const C=a.get(W),it=W.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==W.depthTexture){const Tt=W.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Tt){const Ut=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Tt.removeEventListener("dispose",Ut)};Tt.addEventListener("dispose",Ut),C.__depthDisposeCallback=Ut}C.__boundDepthTexture=Tt}if(W.depthTexture&&!C.__autoAllocateDepthBuffer)if(it)for(let Tt=0;Tt<6;Tt++)Bt(C.__webglFramebuffer[Tt],W,Tt);else{const Tt=W.texture.mipmaps;Tt&&Tt.length>0?Bt(C.__webglFramebuffer[0],W,0):Bt(C.__webglFramebuffer,W,0)}else if(it){C.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)if(n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[Tt]),C.__webglDepthbuffer[Tt]===void 0)C.__webglDepthbuffer[Tt]=s.createRenderbuffer(),It(C.__webglDepthbuffer[Tt],W,!1);else{const Ut=W.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=C.__webglDepthbuffer[Tt];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,bt)}}else{const Tt=W.texture.mipmaps;if(Tt&&Tt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),It(C.__webglDepthbuffer,W,!1);else{const Ut=W.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ut,s.RENDERBUFFER,bt)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(W,C,it){const Tt=a.get(W);C!==void 0&&Pt(Tt.__webglFramebuffer,W,W.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&zt(W)}function re(W){const C=W.texture,it=a.get(W),Tt=a.get(C);W.addEventListener("dispose",z);const Ut=W.textures,bt=W.isWebGLCubeRenderTarget===!0,Kt=Ut.length>1;if(Kt||(Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture()),Tt.__version=C.version,u.memory.textures++),bt){it.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(C.mipmaps&&C.mipmaps.length>0){it.__webglFramebuffer[Ft]=[];for(let qt=0;qt<C.mipmaps.length;qt++)it.__webglFramebuffer[Ft][qt]=s.createFramebuffer()}else it.__webglFramebuffer[Ft]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ft=0;Ft<C.mipmaps.length;Ft++)it.__webglFramebuffer[Ft]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Kt)for(let Ft=0,qt=Ut.length;Ft<qt;Ft++){const Yt=a.get(Ut[Ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),u.memory.textures++)}if(W.samples>0&&De(W)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Ut.length;Ft++){const qt=Ut[Ft];it.__webglColorRenderbuffer[Ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[Ft]);const Yt=c.convert(qt.format,qt.colorSpace),Ot=c.convert(qt.type),b=N(qt.internalFormat,Yt,Ot,qt.colorSpace,W.isXRRenderTarget===!0),A=$(W);s.renderbufferStorageMultisample(s.RENDERBUFFER,A,b,W.width,W.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,it.__webglColorRenderbuffer[Ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),W.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),It(it.__webglDepthRenderbuffer,W,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){n.bindTexture(s.TEXTURE_CUBE_MAP,Tt.__webglTexture),J(s.TEXTURE_CUBE_MAP,C);for(let Ft=0;Ft<6;Ft++)if(C.mipmaps&&C.mipmaps.length>0)for(let qt=0;qt<C.mipmaps.length;qt++)Pt(it.__webglFramebuffer[Ft][qt],W,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,qt);else Pt(it.__webglFramebuffer[Ft],W,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);y(C)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Ft=0,qt=Ut.length;Ft<qt;Ft++){const Yt=Ut[Ft],Ot=a.get(Yt);let b=s.TEXTURE_2D;(W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(b=W.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(b,Ot.__webglTexture),J(b,Yt),Pt(it.__webglFramebuffer,W,Yt,s.COLOR_ATTACHMENT0+Ft,b,0),y(Yt)&&x(b)}n.unbindTexture()}else{let Ft=s.TEXTURE_2D;if((W.isWebGL3DRenderTarget||W.isWebGLArrayRenderTarget)&&(Ft=W.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ft,Tt.__webglTexture),J(Ft,C),C.mipmaps&&C.mipmaps.length>0)for(let qt=0;qt<C.mipmaps.length;qt++)Pt(it.__webglFramebuffer[qt],W,C,s.COLOR_ATTACHMENT0,Ft,qt);else Pt(it.__webglFramebuffer,W,C,s.COLOR_ATTACHMENT0,Ft,0);y(C)&&x(Ft),n.unbindTexture()}W.depthBuffer&&zt(W)}function te(W){const C=W.textures;for(let it=0,Tt=C.length;it<Tt;it++){const Ut=C[it];if(y(Ut)){const bt=P(W),Kt=a.get(Ut).__webglTexture;n.bindTexture(bt,Kt),x(bt),n.unbindTexture()}}}const de=[],ee=[];function oe(W){if(W.samples>0){if(De(W)===!1){const C=W.textures,it=W.width,Tt=W.height;let Ut=s.COLOR_BUFFER_BIT;const bt=W.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Kt=a.get(W),Ft=C.length>1;if(Ft)for(let Yt=0;Yt<C.length;Yt++)n.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const qt=W.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Yt=0;Yt<C.length;Yt++){if(W.resolveDepthBuffer&&(W.depthBuffer&&(Ut|=s.DEPTH_BUFFER_BIT),W.stencilBuffer&&W.resolveStencilBuffer&&(Ut|=s.STENCIL_BUFFER_BIT)),Ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Ot=a.get(C[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,it,Tt,0,0,it,Tt,Ut,s.NEAREST),p===!0&&(de.length=0,ee.length=0,de.push(s.COLOR_ATTACHMENT0+Yt),W.depthBuffer&&W.resolveDepthBuffer===!1&&(de.push(bt),ee.push(bt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ft)for(let Yt=0;Yt<C.length;Yt++){n.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Ot=a.get(C[Yt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,Ot,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(W.depthBuffer&&W.resolveDepthBuffer===!1&&p){const C=W.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function $(W){return Math.min(o.maxSamples,W.samples)}function De(W){const C=a.get(W);return W.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function pe(W){const C=u.render.frame;_.get(W)!==C&&(_.set(W,C),W.update())}function ye(W,C){const it=W.colorSpace,Tt=W.format,Ut=W.type;return W.isCompressedTexture===!0||W.isVideoTexture===!0||it!==Js&&it!==hr&&(Pe.getTransfer(it)===Ke?(Tt!==Bi||Ut!==_i)&&_e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",it)),C}function Zt(W){return typeof HTMLImageElement<"u"&&W instanceof HTMLImageElement?(d.width=W.naturalWidth||W.width,d.height=W.naturalHeight||W.height):typeof VideoFrame<"u"&&W instanceof VideoFrame?(d.width=W.displayWidth,d.height=W.displayHeight):(d.width=W.width,d.height=W.height),d}this.allocateTextureUnit=tt,this.resetTextureUnits=Z,this.setTexture2D=Y,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=Te,this.setupRenderTarget=re,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function T2(s,t){function n(a,o=hr){let c;const u=Pe.getTransfer(o);if(a===_i)return s.UNSIGNED_BYTE;if(a===fp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===ax)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===rx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===nx)return s.BYTE;if(a===ix)return s.SHORT;if(a===rl)return s.UNSIGNED_SHORT;if(a===up)return s.INT;if(a===ea)return s.UNSIGNED_INT;if(a===Ki)return s.FLOAT;if(a===Da)return s.HALF_FLOAT;if(a===sx)return s.ALPHA;if(a===ox)return s.RGB;if(a===Bi)return s.RGBA;if(a===La)return s.DEPTH_COMPONENT;if(a===qr)return s.DEPTH_STENCIL;if(a===lx)return s.RED;if(a===dp)return s.RED_INTEGER;if(a===Qs)return s.RG;if(a===pp)return s.RG_INTEGER;if(a===mp)return s.RGBA_INTEGER;if(a===Qc||a===Jc||a===$c||a===tu)if(u===Ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bd||a===Md||a===Ed||a===Td)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ed)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Td)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ad||a===Rd||a===Cd||a===wd||a===Ud||a===Dd||a===Ld)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Ad||a===Rd)return u===Ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Cd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===wd)return c.COMPRESSED_R11_EAC;if(a===Ud)return c.COMPRESSED_SIGNED_R11_EAC;if(a===Dd)return c.COMPRESSED_RG11_EAC;if(a===Ld)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Nd||a===Od||a===Pd||a===Id||a===Fd||a===Bd||a===zd||a===Gd||a===Hd||a===Vd||a===kd||a===Xd||a===Wd||a===Yd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Nd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Od)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Pd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Id)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Bd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Hd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Vd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===kd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Wd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Yd)return u===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===qd||a===jd||a===Zd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===qd)return u===Ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===jd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Kd||a===Qd||a===Jd||a===$d)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Kd)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===sl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
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

}`;class C2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new xx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ia({vertexShader:A2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zi(new uu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w2 extends to{constructor(t,n){super();const a=this;let o=null,c=1,u=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,E=null;const M=typeof XRWebGLBinding<"u",y=new C2,x={},P=n.getContextAttributes();let N=null,L=null;const H=[],k=[],z=new Xe;let K=null;const R=new gi;R.viewport=new un;const w=new gi;w.viewport=new un;const X=[R,w],Z=new z1;let tt=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let pt=H[rt];return pt===void 0&&(pt=new Zh,H[rt]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(rt){let pt=H[rt];return pt===void 0&&(pt=new Zh,H[rt]=pt),pt.getGripSpace()},this.getHand=function(rt){let pt=H[rt];return pt===void 0&&(pt=new Zh,H[rt]=pt),pt.getHandSpace()};function Y(rt){const pt=k.indexOf(rt.inputSource);if(pt===-1)return;const Pt=H[pt];Pt!==void 0&&(Pt.update(rt.inputSource,rt.frame,d||u),Pt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function D(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",D),o.removeEventListener("inputsourceschange",G);for(let rt=0;rt<H.length;rt++){const pt=k[rt];pt!==null&&(k[rt]=null,H[rt].disconnect(pt))}tt=null,et=null,y.reset();for(const rt in x)delete x[rt];t.setRenderTarget(N),S=null,v=null,g=null,o=null,L=null,wt.stop(),a.isPresenting=!1,t.setPixelRatio(K),t.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,a.isPresenting===!0&&_e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){f=rt,a.isPresenting===!0&&_e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(rt){d=rt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(rt){if(o=rt,o!==null){if(N=t.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",D),o.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await n.makeXRCompatible(),K=t.getPixelRatio(),t.getSize(z),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,It=null,Bt=null;P.depth&&(Bt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pt=P.stencil?qr:La,It=P.stencil?sl:ea);const zt={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(zt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new $i(v.textureWidth,v.textureHeight,{format:Bi,type:_i,depthTexture:new ll(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Pt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Pt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new $i(S.framebufferWidth,S.framebufferHeight,{format:Bi,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(f),wt.setContext(o),wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(rt){for(let pt=0;pt<rt.removed.length;pt++){const Pt=rt.removed[pt],It=k.indexOf(Pt);It>=0&&(k[It]=null,H[It].disconnect(Pt))}for(let pt=0;pt<rt.added.length;pt++){const Pt=rt.added[pt];let It=k.indexOf(Pt);if(It===-1){for(let zt=0;zt<H.length;zt++)if(zt>=k.length){k.push(Pt),It=zt;break}else if(k[zt]===null){k[zt]=Pt,It=zt;break}if(It===-1)break}const Bt=H[It];Bt&&Bt.connect(Pt)}}const j=new yt,ct=new yt;function ft(rt,pt,Pt){j.setFromMatrixPosition(pt.matrixWorld),ct.setFromMatrixPosition(Pt.matrixWorld);const It=j.distanceTo(ct),Bt=pt.projectionMatrix.elements,zt=Pt.projectionMatrix.elements,Te=Bt[14]/(Bt[10]-1),re=Bt[14]/(Bt[10]+1),te=(Bt[9]+1)/Bt[5],de=(Bt[9]-1)/Bt[5],ee=(Bt[8]-1)/Bt[0],oe=(zt[8]+1)/zt[0],$=Te*ee,De=Te*oe,pe=It/(-ee+oe),ye=pe*-ee;if(pt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ye),rt.translateZ(pe),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Bt[10]===-1)rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Zt=Te+pe,W=re+pe,C=$-ye,it=De+(It-ye),Tt=te*re/W*Zt,Ut=de*re/W*Zt;rt.projectionMatrix.makePerspective(C,it,Tt,Ut,Zt,W),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function B(rt,pt){pt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(pt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(o===null)return;let pt=rt.near,Pt=rt.far;y.texture!==null&&(y.depthNear>0&&(pt=y.depthNear),y.depthFar>0&&(Pt=y.depthFar)),Z.near=w.near=R.near=pt,Z.far=w.far=R.far=Pt,(tt!==Z.near||et!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),tt=Z.near,et=Z.far),Z.layers.mask=rt.layers.mask|6,R.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const It=rt.parent,Bt=Z.cameras;B(Z,It);for(let zt=0;zt<Bt.length;zt++)B(Bt[zt],It);Bt.length===2?ft(Z,R,w):Z.projectionMatrix.copy(R.projectionMatrix),J(rt,Z,It)};function J(rt,pt,Pt){Pt===null?rt.matrix.copy(pt.matrixWorld):(rt.matrix.copy(Pt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(pt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(pt.projectionMatrix),rt.projectionMatrixInverse.copy(pt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=tp*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(rt){p=rt,v!==null&&(v.fixedFoveation=rt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(rt){return x[rt]};let lt=null;function Dt(rt,pt){if(_=pt.getViewerPose(d||u),E=pt,_!==null){const Pt=_.views;S!==null&&(t.setRenderTargetFramebuffer(L,S.framebuffer),t.setRenderTarget(L));let It=!1;Pt.length!==Z.cameras.length&&(Z.cameras.length=0,It=!0);for(let re=0;re<Pt.length;re++){const te=Pt[re];let de=null;if(S!==null)de=S.getViewport(te);else{const oe=g.getViewSubImage(v,te);de=oe.viewport,re===0&&(t.setRenderTargetTextures(L,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(L))}let ee=X[re];ee===void 0&&(ee=new gi,ee.layers.enable(re),ee.viewport=new un,X[re]=ee),ee.matrix.fromArray(te.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(te.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(de.x,de.y,de.width,de.height),re===0&&(Z.matrix.copy(ee.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),It===!0&&Z.cameras.push(ee)}const Bt=o.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const re=g.getDepthInformation(Pt[0]);re&&re.isValid&&re.texture&&y.init(re,o.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let re=0;re<Pt.length;re++){const te=Pt[re].camera;if(te){let de=x[te];de||(de=new xx,x[te]=de);const ee=g.getCameraImage(te);de.sourceTexture=ee}}}}for(let Pt=0;Pt<H.length;Pt++){const It=k[Pt],Bt=H[Pt];It!==null&&Bt!==void 0&&Bt.update(It,pt,d||u)}lt&&lt(rt,pt),pt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pt}),E=null}const wt=new Sx;wt.setAnimationLoop(Dt),this.setAnimationLoop=function(rt){lt=rt},this.dispose=function(){}}}const zr=new na,U2=new fn;function D2(s,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,mx(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,P,N,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(y,x):x.isMeshToonMaterial?(c(y,x),g(y,x)):x.isMeshPhongMaterial?(c(y,x),_(y,x)):x.isMeshStandardMaterial?(c(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(c(y,x),E(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),M(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,P,N):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ri&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ri&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),N=P.envMap,L=P.envMapRotation;N&&(y.envMap.value=N,zr.copy(L),zr.x*=-1,zr.y*=-1,zr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),y.envMapRotation.value.setFromMatrix4(U2.makeRotationFromEuler(zr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,P,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=N*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ri&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function L2(s,t,n,a){let o={},c={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,N){const L=N.program;a.uniformBlockBinding(P,L)}function d(P,N){let L=o[P.id];L===void 0&&(E(P),L=_(P),o[P.id]=L,P.addEventListener("dispose",y));const H=N.program;a.updateUBOMapping(P,H);const k=t.render.frame;c[P.id]!==k&&(v(P),c[P.id]=k)}function _(P){const N=g();P.__bindingPointIndex=N;const L=s.createBuffer(),H=P.__size,k=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,H,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,L),L}function g(){for(let P=0;P<f;P++)if(u.indexOf(P)===-1)return u.push(P),P;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const N=o[P.id],L=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,z=L.length;k<z;k++){const K=Array.isArray(L[k])?L[k]:[L[k]];for(let R=0,w=K.length;R<w;R++){const X=K[R];if(S(X,k,R,H)===!0){const Z=X.__offset,tt=Array.isArray(X.value)?X.value:[X.value];let et=0;for(let Y=0;Y<tt.length;Y++){const D=tt[Y],G=M(D);typeof D=="number"||typeof D=="boolean"?(X.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,Z+et,X.__data)):D.isMatrix3?(X.__data[0]=D.elements[0],X.__data[1]=D.elements[1],X.__data[2]=D.elements[2],X.__data[3]=0,X.__data[4]=D.elements[3],X.__data[5]=D.elements[4],X.__data[6]=D.elements[5],X.__data[7]=0,X.__data[8]=D.elements[6],X.__data[9]=D.elements[7],X.__data[10]=D.elements[8],X.__data[11]=0):(D.toArray(X.__data,et),et+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,X.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,N,L,H){const k=P.value,z=N+"_"+L;if(H[z]===void 0)return typeof k=="number"||typeof k=="boolean"?H[z]=k:H[z]=k.clone(),!0;{const K=H[z];if(typeof k=="number"||typeof k=="boolean"){if(K!==k)return H[z]=k,!0}else if(K.equals(k)===!1)return K.copy(k),!0}return!1}function E(P){const N=P.uniforms;let L=0;const H=16;for(let z=0,K=N.length;z<K;z++){const R=Array.isArray(N[z])?N[z]:[N[z]];for(let w=0,X=R.length;w<X;w++){const Z=R[w],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let et=0,Y=tt.length;et<Y;et++){const D=tt[et],G=M(D),j=L%H,ct=j%G.boundary,ft=j+ct;L+=ct,ft!==0&&H-ft<G.storage&&(L+=H-ft),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=G.storage}}}const k=L%H;return k>0&&(L+=H-k),P.__size=L,P.__cache={},this}function M(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?_e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_e("WebGLRenderer: Unsupported uniform value type.",P),N}function y(P){const N=P.target;N.removeEventListener("dispose",y);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function x(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},c={}}return{bind:p,update:d,dispose:x}}const N2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function O2(){return Xi===null&&(Xi=new E1(N2,16,16,Qs,Da),Xi.name="DFG_LUT",Xi.minFilter=Xn,Xi.magFilter=Xn,Xi.wrapS=Ca,Xi.wrapT=Ca,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class P2{constructor(t={}){const{canvas:n=Kb(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=_i}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=u;const M=S,y=new Set([mp,pp,dp]),x=new Set([_i,ea,rl,sl,fp,hp]),P=new Uint32Array(4),N=new Int32Array(4);let L=null,H=null;const k=[],z=[];let K=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=Ci;let X=0,Z=0,tt=null,et=-1,Y=null;const D=new un,G=new un;let j=null;const ct=new ke(0);let ft=0,B=n.width,J=n.height,lt=1,Dt=null,wt=null;const rt=new un(0,0,B,J),pt=new un(0,0,B,J);let Pt=!1;const It=new bp;let Bt=!1,zt=!1;const Te=new fn,re=new yt,te=new un,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function oe(){return tt===null?lt:1}let $=a;function De(F,ot){return n.getContext(F,ot)}try{const F={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cp}`),n.addEventListener("webglcontextlost",kt,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",Gt,!1),$===null){const ot="webgl2";if($=De(ot,F),$===null)throw De(ot)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw ze("WebGLRenderer: "+F.message),F}let pe,ye,Zt,W,C,it,Tt,Ut,bt,Kt,Ft,qt,Yt,Ot,b,A,U,O,q,V,at,dt,At,xt;function Et(){pe=new OT($),pe.init(),dt=new T2($,pe),ye=new TT($,pe,t,dt),Zt=new M2($,pe),ye.reversedDepthBuffer&&v&&Zt.buffers.depth.setReversed(!0),W=new FT($),C=new l2,it=new E2($,pe,Zt,C,ye,dt,W),Tt=new RT(R),Ut=new NT(R),bt=new H1($),At=new MT($,bt),Kt=new PT($,bt,W,At),Ft=new zT($,Kt,bt,W),q=new BT($,ye,it),A=new AT(C),qt=new o2(R,Tt,Ut,pe,ye,At,A),Yt=new D2(R,C),Ot=new u2,b=new g2(pe),O=new bT(R,Tt,Ut,Zt,Ft,E,p),U=new S2(R,Ft,ye),xt=new L2($,W,ye,Zt),V=new ET($,pe,W),at=new IT($,pe,W),W.programs=qt.programs,R.capabilities=ye,R.extensions=pe,R.properties=C,R.renderLists=Ot,R.shadowMap=U,R.state=Zt,R.info=W}Et(),M!==_i&&(K=new HT(M,n.width,n.height,o,c));const Lt=new w2(R,$);this.xr=Lt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const F=pe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=pe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(F){F!==void 0&&(lt=F,this.setSize(B,J,!1))},this.getSize=function(F){return F.set(B,J)},this.setSize=function(F,ot,St=!0){if(Lt.isPresenting){_e("WebGLRenderer: Can't change size while VR device is presenting.");return}B=F,J=ot,n.width=Math.floor(F*lt),n.height=Math.floor(ot*lt),St===!0&&(n.style.width=F+"px",n.style.height=ot+"px"),K!==null&&K.setSize(n.width,n.height),this.setViewport(0,0,F,ot)},this.getDrawingBufferSize=function(F){return F.set(B*lt,J*lt).floor()},this.setDrawingBufferSize=function(F,ot,St){B=F,J=ot,lt=St,n.width=Math.floor(F*St),n.height=Math.floor(ot*St),this.setViewport(0,0,F,ot)},this.setEffects=function(F){if(M===_i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let ot=0;ot<F.length;ot++)if(F[ot].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(D)},this.getViewport=function(F){return F.copy(rt)},this.setViewport=function(F,ot,St,_t){F.isVector4?rt.set(F.x,F.y,F.z,F.w):rt.set(F,ot,St,_t),Zt.viewport(D.copy(rt).multiplyScalar(lt).round())},this.getScissor=function(F){return F.copy(pt)},this.setScissor=function(F,ot,St,_t){F.isVector4?pt.set(F.x,F.y,F.z,F.w):pt.set(F,ot,St,_t),Zt.scissor(G.copy(pt).multiplyScalar(lt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(F){Zt.setScissorTest(Pt=F)},this.setOpaqueSort=function(F){Dt=F},this.setTransparentSort=function(F){wt=F},this.getClearColor=function(F){return F.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(F=!0,ot=!0,St=!0){let _t=0;if(F){let ht=!1;if(tt!==null){const Ht=tt.texture.format;ht=y.has(Ht)}if(ht){const Ht=tt.texture.type,jt=x.has(Ht),Vt=O.getClearColor(),Qt=O.getClearAlpha(),ne=Vt.r,ce=Vt.g,ie=Vt.b;jt?(P[0]=ne,P[1]=ce,P[2]=ie,P[3]=Qt,$.clearBufferuiv($.COLOR,0,P)):(N[0]=ne,N[1]=ce,N[2]=ie,N[3]=Qt,$.clearBufferiv($.COLOR,0,N))}else _t|=$.COLOR_BUFFER_BIT}ot&&(_t|=$.DEPTH_BUFFER_BIT),St&&(_t|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",kt,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",Gt,!1),O.dispose(),Ot.dispose(),b.dispose(),C.dispose(),Tt.dispose(),Ut.dispose(),Ft.dispose(),At.dispose(),xt.dispose(),qt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Ie),Lt.removeEventListener("sessionend",gn),Kn.stop()};function kt(F){F.preventDefault(),L_("WebGLRenderer: Context Lost."),w=!0}function ue(){L_("WebGLRenderer: Context Restored."),w=!1;const F=W.autoReset,ot=U.enabled,St=U.autoUpdate,_t=U.needsUpdate,ht=U.type;Et(),W.autoReset=F,U.enabled=ot,U.autoUpdate=St,U.needsUpdate=_t,U.type=ht}function Gt(F){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Se(F){const ot=F.target;ot.removeEventListener("dispose",Se),si(ot)}function si(F){st(F),C.remove(F)}function st(F){const ot=C.get(F).programs;ot!==void 0&&(ot.forEach(function(St){qt.releaseProgram(St)}),F.isShaderMaterial&&qt.releaseShaderCache(F))}this.renderBufferDirect=function(F,ot,St,_t,ht,Ht){ot===null&&(ot=de);const jt=ht.isMesh&&ht.matrixWorld.determinant()<0,Vt=gr(F,ot,St,_t,ht);Zt.setMaterial(_t,jt);let Qt=St.index,ne=1;if(_t.wireframe===!0){if(Qt=Kt.getWireframeAttribute(St),Qt===void 0)return;ne=2}const ce=St.drawRange,ie=St.attributes.position;let fe=ce.start*ne,Ge=(ce.start+ce.count)*ne;Ht!==null&&(fe=Math.max(fe,Ht.start*ne),Ge=Math.min(Ge,(Ht.start+Ht.count)*ne)),Qt!==null?(fe=Math.max(fe,0),Ge=Math.min(Ge,Qt.count)):ie!=null&&(fe=Math.max(fe,0),Ge=Math.min(Ge,ie.count));const sn=Ge-fe;if(sn<0||sn===1/0)return;At.setup(ht,_t,Vt,St,Qt);let en,We=V;if(Qt!==null&&(en=bt.get(Qt),We=at,We.setIndex(en)),ht.isMesh)_t.wireframe===!0?(Zt.setLineWidth(_t.wireframeLinewidth*oe()),We.setMode($.LINES)):We.setMode($.TRIANGLES);else if(ht.isLine){let se=_t.linewidth;se===void 0&&(se=1),Zt.setLineWidth(se*oe()),ht.isLineSegments?We.setMode($.LINES):ht.isLineLoop?We.setMode($.LINE_LOOP):We.setMode($.LINE_STRIP)}else ht.isPoints?We.setMode($.POINTS):ht.isSprite&&We.setMode($.TRIANGLES);if(ht.isBatchedMesh)if(ht._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount,ht._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))We.renderMultiDraw(ht._multiDrawStarts,ht._multiDrawCounts,ht._multiDrawCount);else{const se=ht._multiDrawStarts,He=ht._multiDrawCounts,me=ht._multiDrawCount,Un=Qt?bt.get(Qt).bytesPerElement:1,ra=C.get(_t).currentProgram.getUniforms();for(let Dn=0;Dn<me;Dn++)ra.setValue($,"_gl_DrawID",Dn),We.render(se[Dn]/Un,He[Dn])}else if(ht.isInstancedMesh)We.renderInstances(fe,sn,ht.count);else if(St.isInstancedBufferGeometry){const se=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,He=Math.min(St.instanceCount,se);We.renderInstances(fe,sn,He)}else We.render(fe,sn)};function Wt(F,ot,St){F.transparent===!0&&F.side===Zi&&F.forceSinglePass===!1?(F.side=ri,F.needsUpdate=!0,Qr(F,ot,St),F.side=mr,F.needsUpdate=!0,Qr(F,ot,St),F.side=Zi):Qr(F,ot,St)}this.compile=function(F,ot,St=null){St===null&&(St=F),H=b.get(St),H.init(ot),z.push(H),St.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ot.layers)&&(H.pushLight(ht),ht.castShadow&&H.pushShadow(ht))}),F!==St&&F.traverseVisible(function(ht){ht.isLight&&ht.layers.test(ot.layers)&&(H.pushLight(ht),ht.castShadow&&H.pushShadow(ht))}),H.setupLights();const _t=new Set;return F.traverse(function(ht){if(!(ht.isMesh||ht.isPoints||ht.isLine||ht.isSprite))return;const Ht=ht.material;if(Ht)if(Array.isArray(Ht))for(let jt=0;jt<Ht.length;jt++){const Vt=Ht[jt];Wt(Vt,St,ht),_t.add(Vt)}else Wt(Ht,St,ht),_t.add(Ht)}),H=z.pop(),_t},this.compileAsync=function(F,ot,St=null){const _t=this.compile(F,ot,St);return new Promise(ht=>{function Ht(){if(_t.forEach(function(jt){C.get(jt).currentProgram.isReady()&&_t.delete(jt)}),_t.size===0){ht(F);return}setTimeout(Ht,10)}pe.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Ae=null;function Ye(F){Ae&&Ae(F)}function Ie(){Kn.stop()}function gn(){Kn.start()}const Kn=new Sx;Kn.setAnimationLoop(Ye),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(F){Ae=F,Lt.setAnimationLoop(F),F===null?Kn.stop():Kn.start()},Lt.addEventListener("sessionstart",Ie),Lt.addEventListener("sessionend",gn),this.render=function(F,ot){if(ot!==void 0&&ot.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const St=Lt.enabled===!0&&Lt.isPresenting===!0,_t=K!==null&&(tt===null||St)&&K.begin(R,tt);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ot.parent===null&&ot.matrixWorldAutoUpdate===!0&&ot.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(ot),ot=Lt.getCamera()),F.isScene===!0&&F.onBeforeRender(R,F,ot,tt),H=b.get(F,z.length),H.init(ot),z.push(H),Te.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),It.setFromProjectionMatrix(Te,Qi,ot.reversedDepth),zt=this.localClippingEnabled,Bt=A.init(this.clippingPlanes,zt),L=Ot.get(F,k.length),L.init(),k.push(L),Lt.enabled===!0&&Lt.isPresenting===!0){const jt=R.xr.getDepthSensingMesh();jt!==null&&Qn(jt,ot,-1/0,R.sortObjects)}Qn(F,ot,0,R.sortObjects),L.finish(),R.sortObjects===!0&&L.sort(Dt,wt),ee=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ee&&O.addToRenderList(L,F),this.info.render.frame++,Bt===!0&&A.beginShadows();const ht=H.state.shadowsArray;if(U.render(ht,F,ot),Bt===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),(_t&&K.hasRenderPass())===!1){const jt=L.opaque,Vt=L.transmissive;if(H.setupLights(),ot.isArrayCamera){const Qt=ot.cameras;if(Vt.length>0)for(let ne=0,ce=Qt.length;ne<ce;ne++){const ie=Qt[ne];wn(jt,Vt,F,ie)}ee&&O.render(F);for(let ne=0,ce=Qt.length;ne<ce;ne++){const ie=Qt[ne];hn(L,F,ie,ie.viewport)}}else Vt.length>0&&wn(jt,Vt,F,ot),ee&&O.render(F),hn(L,F,ot)}tt!==null&&Z===0&&(it.updateMultisampleRenderTarget(tt),it.updateRenderTargetMipmap(tt)),_t&&K.end(R),F.isScene===!0&&F.onAfterRender(R,F,ot),At.resetDefaultState(),et=-1,Y=null,z.pop(),z.length>0?(H=z[z.length-1],Bt===!0&&A.setGlobalState(R.clippingPlanes,H.state.camera)):H=null,k.pop(),k.length>0?L=k[k.length-1]:L=null};function Qn(F,ot,St,_t){if(F.visible===!1)return;if(F.layers.test(ot.layers)){if(F.isGroup)St=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ot);else if(F.isLight)H.pushLight(F),F.castShadow&&H.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||It.intersectsSprite(F)){_t&&te.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Te);const jt=Ft.update(F),Vt=F.material;Vt.visible&&L.push(F,jt,Vt,St,te.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||It.intersectsObject(F))){const jt=Ft.update(F),Vt=F.material;if(_t&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),te.copy(F.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),te.copy(jt.boundingSphere.center)),te.applyMatrix4(F.matrixWorld).applyMatrix4(Te)),Array.isArray(Vt)){const Qt=jt.groups;for(let ne=0,ce=Qt.length;ne<ce;ne++){const ie=Qt[ne],fe=Vt[ie.materialIndex];fe&&fe.visible&&L.push(F,jt,fe,St,te.z,ie)}}else Vt.visible&&L.push(F,jt,Vt,St,te.z,null)}}const Ht=F.children;for(let jt=0,Vt=Ht.length;jt<Vt;jt++)Qn(Ht[jt],ot,St,_t)}function hn(F,ot,St,_t){const{opaque:ht,transmissive:Ht,transparent:jt}=F;H.setupLightsView(St),Bt===!0&&A.setGlobalState(R.clippingPlanes,St),_t&&Zt.viewport(D.copy(_t)),ht.length>0&&wi(ht,ot,St),Ht.length>0&&wi(Ht,ot,St),jt.length>0&&wi(jt,ot,St),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function wn(F,ot,St,_t){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[_t.id]===void 0){const fe=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[_t.id]=new $i(1,1,{generateMipmaps:!0,type:fe?Da:_i,minFilter:Yr,samples:ye.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Ht=H.state.transmissionRenderTarget[_t.id],jt=_t.viewport||D;Ht.setSize(jt.z*R.transmissionResolutionScale,jt.w*R.transmissionResolutionScale);const Vt=R.getRenderTarget(),Qt=R.getActiveCubeFace(),ne=R.getActiveMipmapLevel();R.setRenderTarget(Ht),R.getClearColor(ct),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),ee&&O.render(St);const ce=R.toneMapping;R.toneMapping=Ji;const ie=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),H.setupLightsView(_t),Bt===!0&&A.setGlobalState(R.clippingPlanes,_t),wi(F,St,_t),it.updateMultisampleRenderTarget(Ht),it.updateRenderTargetMipmap(Ht),pe.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let Ge=0,sn=ot.length;Ge<sn;Ge++){const en=ot[Ge],{object:We,geometry:se,material:He,group:me}=en;if(He.side===Zi&&We.layers.test(_t.layers)){const Un=He.side;He.side=ri,He.needsUpdate=!0,Kr(We,St,_t,se,He,me),He.side=Un,He.needsUpdate=!0,fe=!0}}fe===!0&&(it.updateMultisampleRenderTarget(Ht),it.updateRenderTargetMipmap(Ht))}R.setRenderTarget(Vt,Qt,ne),R.setClearColor(ct,ft),ie!==void 0&&(_t.viewport=ie),R.toneMapping=ce}function wi(F,ot,St){const _t=ot.isScene===!0?ot.overrideMaterial:null;for(let ht=0,Ht=F.length;ht<Ht;ht++){const jt=F[ht],{object:Vt,geometry:Qt,group:ne}=jt;let ce=jt.material;ce.allowOverride===!0&&_t!==null&&(ce=_t),Vt.layers.test(St.layers)&&Kr(Vt,ot,St,Qt,ce,ne)}}function Kr(F,ot,St,_t,ht,Ht){F.onBeforeRender(R,ot,St,_t,ht,Ht),F.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ht.onBeforeRender(R,ot,St,_t,F,Ht),ht.transparent===!0&&ht.side===Zi&&ht.forceSinglePass===!1?(ht.side=ri,ht.needsUpdate=!0,R.renderBufferDirect(St,ot,_t,ht,F,Ht),ht.side=mr,ht.needsUpdate=!0,R.renderBufferDirect(St,ot,_t,ht,F,Ht),ht.side=Zi):R.renderBufferDirect(St,ot,_t,ht,F,Ht),F.onAfterRender(R,ot,St,_t,ht,Ht)}function Qr(F,ot,St){ot.isScene!==!0&&(ot=de);const _t=C.get(F),ht=H.state.lights,Ht=H.state.shadowsArray,jt=ht.state.version,Vt=qt.getParameters(F,ht.state,Ht,ot,St),Qt=qt.getProgramCacheKey(Vt);let ne=_t.programs;_t.environment=F.isMeshStandardMaterial?ot.environment:null,_t.fog=ot.fog,_t.envMap=(F.isMeshStandardMaterial?Ut:Tt).get(F.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&F.envMap===null?ot.environmentRotation:F.envMapRotation,ne===void 0&&(F.addEventListener("dispose",Se),ne=new Map,_t.programs=ne);let ce=ne.get(Qt);if(ce!==void 0){if(_t.currentProgram===ce&&_t.lightsStateVersion===jt)return no(F,Vt),ce}else Vt.uniforms=qt.getUniforms(F),F.onBeforeCompile(Vt,R),ce=qt.acquireProgram(Vt,Qt),ne.set(Qt,ce),_t.uniforms=Vt.uniforms;const ie=_t.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(ie.clippingPlanes=A.uniform),no(F,Vt),_t.needsLights=Na(F),_t.lightsStateVersion=jt,_t.needsLights&&(ie.ambientLightColor.value=ht.state.ambient,ie.lightProbe.value=ht.state.probe,ie.directionalLights.value=ht.state.directional,ie.directionalLightShadows.value=ht.state.directionalShadow,ie.spotLights.value=ht.state.spot,ie.spotLightShadows.value=ht.state.spotShadow,ie.rectAreaLights.value=ht.state.rectArea,ie.ltc_1.value=ht.state.rectAreaLTC1,ie.ltc_2.value=ht.state.rectAreaLTC2,ie.pointLights.value=ht.state.point,ie.pointLightShadows.value=ht.state.pointShadow,ie.hemisphereLights.value=ht.state.hemi,ie.directionalShadowMap.value=ht.state.directionalShadowMap,ie.directionalShadowMatrix.value=ht.state.directionalShadowMatrix,ie.spotShadowMap.value=ht.state.spotShadowMap,ie.spotLightMatrix.value=ht.state.spotLightMatrix,ie.spotLightMap.value=ht.state.spotLightMap,ie.pointShadowMap.value=ht.state.pointShadowMap,ie.pointShadowMatrix.value=ht.state.pointShadowMatrix),_t.currentProgram=ce,_t.uniformsList=null,ce}function ml(F){if(F.uniformsList===null){const ot=F.currentProgram.getUniforms();F.uniformsList=eu.seqWithValue(ot.seq,F.uniforms)}return F.uniformsList}function no(F,ot){const St=C.get(F);St.outputColorSpace=ot.outputColorSpace,St.batching=ot.batching,St.batchingColor=ot.batchingColor,St.instancing=ot.instancing,St.instancingColor=ot.instancingColor,St.instancingMorph=ot.instancingMorph,St.skinning=ot.skinning,St.morphTargets=ot.morphTargets,St.morphNormals=ot.morphNormals,St.morphColors=ot.morphColors,St.morphTargetsCount=ot.morphTargetsCount,St.numClippingPlanes=ot.numClippingPlanes,St.numIntersection=ot.numClipIntersection,St.vertexAlphas=ot.vertexAlphas,St.vertexTangents=ot.vertexTangents,St.toneMapping=ot.toneMapping}function gr(F,ot,St,_t,ht){ot.isScene!==!0&&(ot=de),it.resetTextureUnits();const Ht=ot.fog,jt=_t.isMeshStandardMaterial?ot.environment:null,Vt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Js,Qt=(_t.isMeshStandardMaterial?Ut:Tt).get(_t.envMap||jt),ne=_t.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ce=!!St.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ie=!!St.morphAttributes.position,fe=!!St.morphAttributes.normal,Ge=!!St.morphAttributes.color;let sn=Ji;_t.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(sn=R.toneMapping);const en=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,We=en!==void 0?en.length:0,se=C.get(_t),He=H.state.lights;if(Bt===!0&&(zt===!0||F!==Y)){const Nn=F===Y&&_t.id===et;A.setState(_t,F,Nn)}let me=!1;_t.version===se.__version?(se.needsLights&&se.lightsStateVersion!==He.state.version||se.outputColorSpace!==Vt||ht.isBatchedMesh&&se.batching===!1||!ht.isBatchedMesh&&se.batching===!0||ht.isBatchedMesh&&se.batchingColor===!0&&ht.colorTexture===null||ht.isBatchedMesh&&se.batchingColor===!1&&ht.colorTexture!==null||ht.isInstancedMesh&&se.instancing===!1||!ht.isInstancedMesh&&se.instancing===!0||ht.isSkinnedMesh&&se.skinning===!1||!ht.isSkinnedMesh&&se.skinning===!0||ht.isInstancedMesh&&se.instancingColor===!0&&ht.instanceColor===null||ht.isInstancedMesh&&se.instancingColor===!1&&ht.instanceColor!==null||ht.isInstancedMesh&&se.instancingMorph===!0&&ht.morphTexture===null||ht.isInstancedMesh&&se.instancingMorph===!1&&ht.morphTexture!==null||se.envMap!==Qt||_t.fog===!0&&se.fog!==Ht||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==A.numPlanes||se.numIntersection!==A.numIntersection)||se.vertexAlphas!==ne||se.vertexTangents!==ce||se.morphTargets!==ie||se.morphNormals!==fe||se.morphColors!==Ge||se.toneMapping!==sn||se.morphTargetsCount!==We)&&(me=!0):(me=!0,se.__version=_t.version);let Un=se.currentProgram;me===!0&&(Un=Qr(_t,ot,ht));let ra=!1,Dn=!1,vi=!1;const qe=Un.getUniforms(),Ln=se.uniforms;if(Zt.useProgram(Un.program)&&(ra=!0,Dn=!0,vi=!0),_t.id!==et&&(et=_t.id,Dn=!0),ra||Y!==F){Zt.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),qe.setValue($,"projectionMatrix",F.projectionMatrix),qe.setValue($,"viewMatrix",F.matrixWorldInverse);const On=qe.map.cameraPosition;On!==void 0&&On.setValue($,re.setFromMatrixPosition(F.matrixWorld)),ye.logarithmicDepthBuffer&&qe.setValue($,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&qe.setValue($,"isOrthographic",F.isOrthographicCamera===!0),Y!==F&&(Y=F,Dn=!0,vi=!0)}if(se.needsLights&&(He.state.directionalShadowMap.length>0&&qe.setValue($,"directionalShadowMap",He.state.directionalShadowMap,it),He.state.spotShadowMap.length>0&&qe.setValue($,"spotShadowMap",He.state.spotShadowMap,it),He.state.pointShadowMap.length>0&&qe.setValue($,"pointShadowMap",He.state.pointShadowMap,it)),ht.isSkinnedMesh){qe.setOptional($,ht,"bindMatrix"),qe.setOptional($,ht,"bindMatrixInverse");const Nn=ht.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),qe.setValue($,"boneTexture",Nn.boneTexture,it))}ht.isBatchedMesh&&(qe.setOptional($,ht,"batchingTexture"),qe.setValue($,"batchingTexture",ht._matricesTexture,it),qe.setOptional($,ht,"batchingIdTexture"),qe.setValue($,"batchingIdTexture",ht._indirectTexture,it),qe.setOptional($,ht,"batchingColorTexture"),ht._colorsTexture!==null&&qe.setValue($,"batchingColorTexture",ht._colorsTexture,it));const bn=St.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&q.update(ht,St,Un),(Dn||se.receiveShadow!==ht.receiveShadow)&&(se.receiveShadow=ht.receiveShadow,qe.setValue($,"receiveShadow",ht.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(Ln.envMap.value=Qt,Ln.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&ot.environment!==null&&(Ln.envMapIntensity.value=ot.environmentIntensity),Ln.dfgLUT!==void 0&&(Ln.dfgLUT.value=O2()),Dn&&(qe.setValue($,"toneMappingExposure",R.toneMappingExposure),se.needsLights&&io(Ln,vi),Ht&&_t.fog===!0&&Yt.refreshFogUniforms(Ln,Ht),Yt.refreshMaterialUniforms(Ln,_t,lt,J,H.state.transmissionRenderTarget[F.id]),eu.upload($,ml(se),Ln,it)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(eu.upload($,ml(se),Ln,it),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&qe.setValue($,"center",ht.center),qe.setValue($,"modelViewMatrix",ht.modelViewMatrix),qe.setValue($,"normalMatrix",ht.normalMatrix),qe.setValue($,"modelMatrix",ht.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){const Nn=_t.uniformsGroups;for(let On=0,Jr=Nn.length;On<Jr;On++){const Ui=Nn[On];xt.update(Ui,Un),xt.bind(Ui,Un)}}return Un}function io(F,ot){F.ambientLightColor.needsUpdate=ot,F.lightProbe.needsUpdate=ot,F.directionalLights.needsUpdate=ot,F.directionalLightShadows.needsUpdate=ot,F.pointLights.needsUpdate=ot,F.pointLightShadows.needsUpdate=ot,F.spotLights.needsUpdate=ot,F.spotLightShadows.needsUpdate=ot,F.rectAreaLights.needsUpdate=ot,F.hemisphereLights.needsUpdate=ot}function Na(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(F,ot,St){const _t=C.get(F);_t.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),C.get(F.texture).__webglTexture=ot,C.get(F.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:St,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,ot){const St=C.get(F);St.__webglFramebuffer=ot,St.__useDefaultFramebuffer=ot===void 0};const Oa=$.createFramebuffer();this.setRenderTarget=function(F,ot=0,St=0){tt=F,X=ot,Z=St;let _t=null,ht=!1,Ht=!1;if(F){const Vt=C.get(F);if(Vt.__useDefaultFramebuffer!==void 0){Zt.bindFramebuffer($.FRAMEBUFFER,Vt.__webglFramebuffer),D.copy(F.viewport),G.copy(F.scissor),j=F.scissorTest,Zt.viewport(D),Zt.scissor(G),Zt.setScissorTest(j),et=-1;return}else if(Vt.__webglFramebuffer===void 0)it.setupRenderTarget(F);else if(Vt.__hasExternalTextures)it.rebindTextures(F,C.get(F.texture).__webglTexture,C.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const ce=F.depthTexture;if(Vt.__boundDepthTexture!==ce){if(ce!==null&&C.has(ce)&&(F.width!==ce.image.width||F.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(F)}}const Qt=F.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ht=!0);const ne=C.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(ne[ot])?_t=ne[ot][St]:_t=ne[ot],ht=!0):F.samples>0&&it.useMultisampledRTT(F)===!1?_t=C.get(F).__webglMultisampledFramebuffer:Array.isArray(ne)?_t=ne[St]:_t=ne,D.copy(F.viewport),G.copy(F.scissor),j=F.scissorTest}else D.copy(rt).multiplyScalar(lt).floor(),G.copy(pt).multiplyScalar(lt).floor(),j=Pt;if(St!==0&&(_t=Oa),Zt.bindFramebuffer($.FRAMEBUFFER,_t)&&Zt.drawBuffers(F,_t),Zt.viewport(D),Zt.scissor(G),Zt.setScissorTest(j),ht){const Vt=C.get(F.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt.__webglTexture,St)}else if(Ht){const Vt=ot;for(let Qt=0;Qt<F.textures.length;Qt++){const ne=C.get(F.textures[Qt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,St,Vt)}}else if(F!==null&&St!==0){const Vt=C.get(F.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Vt.__webglTexture,St)}et=-1},this.readRenderTargetPixels=function(F,ot,St,_t,ht,Ht,jt,Vt=0){if(!(F&&F.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=C.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&jt!==void 0&&(Qt=Qt[jt]),Qt){Zt.bindFramebuffer($.FRAMEBUFFER,Qt);try{const ne=F.textures[Vt],ce=ne.format,ie=ne.type;if(!ye.textureFormatReadable(ce)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(ie)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ot>=0&&ot<=F.width-_t&&St>=0&&St<=F.height-ht&&(F.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Vt),$.readPixels(ot,St,_t,ht,dt.convert(ce),dt.convert(ie),Ht))}finally{const ne=tt!==null?C.get(tt).__webglFramebuffer:null;Zt.bindFramebuffer($.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(F,ot,St,_t,ht,Ht,jt,Vt=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=C.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&jt!==void 0&&(Qt=Qt[jt]),Qt)if(ot>=0&&ot<=F.width-_t&&St>=0&&St<=F.height-ht){Zt.bindFramebuffer($.FRAMEBUFFER,Qt);const ne=F.textures[Vt],ce=ne.format,ie=ne.type;if(!ye.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,fe),$.bufferData($.PIXEL_PACK_BUFFER,Ht.byteLength,$.STREAM_READ),F.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Vt),$.readPixels(ot,St,_t,ht,dt.convert(ce),dt.convert(ie),0);const Ge=tt!==null?C.get(tt).__webglFramebuffer:null;Zt.bindFramebuffer($.FRAMEBUFFER,Ge);const sn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Qb($,sn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,fe),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ht),$.deleteBuffer(fe),$.deleteSync(sn),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,ot=null,St=0){const _t=Math.pow(2,-St),ht=Math.floor(F.image.width*_t),Ht=Math.floor(F.image.height*_t),jt=ot!==null?ot.x:0,Vt=ot!==null?ot.y:0;it.setTexture2D(F,0),$.copyTexSubImage2D($.TEXTURE_2D,St,0,0,jt,Vt,ht,Ht),Zt.unbindTexture()};const _r=$.createFramebuffer(),Pa=$.createFramebuffer();this.copyTextureToTexture=function(F,ot,St=null,_t=null,ht=0,Ht=null){Ht===null&&(ht!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ht=ht,ht=0):Ht=0);let jt,Vt,Qt,ne,ce,ie,fe,Ge,sn;const en=F.isCompressedTexture?F.mipmaps[Ht]:F.image;if(St!==null)jt=St.max.x-St.min.x,Vt=St.max.y-St.min.y,Qt=St.isBox3?St.max.z-St.min.z:1,ne=St.min.x,ce=St.min.y,ie=St.isBox3?St.min.z:0;else{const bn=Math.pow(2,-ht);jt=Math.floor(en.width*bn),Vt=Math.floor(en.height*bn),F.isDataArrayTexture?Qt=en.depth:F.isData3DTexture?Qt=Math.floor(en.depth*bn):Qt=1,ne=0,ce=0,ie=0}_t!==null?(fe=_t.x,Ge=_t.y,sn=_t.z):(fe=0,Ge=0,sn=0);const We=dt.convert(ot.format),se=dt.convert(ot.type);let He;ot.isData3DTexture?(it.setTexture3D(ot,0),He=$.TEXTURE_3D):ot.isDataArrayTexture||ot.isCompressedArrayTexture?(it.setTexture2DArray(ot,0),He=$.TEXTURE_2D_ARRAY):(it.setTexture2D(ot,0),He=$.TEXTURE_2D),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ot.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,ot.unpackAlignment);const me=$.getParameter($.UNPACK_ROW_LENGTH),Un=$.getParameter($.UNPACK_IMAGE_HEIGHT),ra=$.getParameter($.UNPACK_SKIP_PIXELS),Dn=$.getParameter($.UNPACK_SKIP_ROWS),vi=$.getParameter($.UNPACK_SKIP_IMAGES);$.pixelStorei($.UNPACK_ROW_LENGTH,en.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,en.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,ne),$.pixelStorei($.UNPACK_SKIP_ROWS,ce),$.pixelStorei($.UNPACK_SKIP_IMAGES,ie);const qe=F.isDataArrayTexture||F.isData3DTexture,Ln=ot.isDataArrayTexture||ot.isData3DTexture;if(F.isDepthTexture){const bn=C.get(F),Nn=C.get(ot),On=C.get(bn.__renderTarget),Jr=C.get(Nn.__renderTarget);Zt.bindFramebuffer($.READ_FRAMEBUFFER,On.__webglFramebuffer),Zt.bindFramebuffer($.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let Ui=0;Ui<Qt;Ui++)qe&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,C.get(F).__webglTexture,ht,ie+Ui),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,C.get(ot).__webglTexture,Ht,sn+Ui)),$.blitFramebuffer(ne,ce,jt,Vt,fe,Ge,jt,Vt,$.DEPTH_BUFFER_BIT,$.NEAREST);Zt.bindFramebuffer($.READ_FRAMEBUFFER,null),Zt.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ht!==0||F.isRenderTargetTexture||C.has(F)){const bn=C.get(F),Nn=C.get(ot);Zt.bindFramebuffer($.READ_FRAMEBUFFER,_r),Zt.bindFramebuffer($.DRAW_FRAMEBUFFER,Pa);for(let On=0;On<Qt;On++)qe?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,bn.__webglTexture,ht,ie+On):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,bn.__webglTexture,ht),Ln?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Nn.__webglTexture,Ht,sn+On):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Nn.__webglTexture,Ht),ht!==0?$.blitFramebuffer(ne,ce,jt,Vt,fe,Ge,jt,Vt,$.COLOR_BUFFER_BIT,$.NEAREST):Ln?$.copyTexSubImage3D(He,Ht,fe,Ge,sn+On,ne,ce,jt,Vt):$.copyTexSubImage2D(He,Ht,fe,Ge,ne,ce,jt,Vt);Zt.bindFramebuffer($.READ_FRAMEBUFFER,null),Zt.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Ln?F.isDataTexture||F.isData3DTexture?$.texSubImage3D(He,Ht,fe,Ge,sn,jt,Vt,Qt,We,se,en.data):ot.isCompressedArrayTexture?$.compressedTexSubImage3D(He,Ht,fe,Ge,sn,jt,Vt,Qt,We,en.data):$.texSubImage3D(He,Ht,fe,Ge,sn,jt,Vt,Qt,We,se,en):F.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ht,fe,Ge,jt,Vt,We,se,en.data):F.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ht,fe,Ge,en.width,en.height,We,en.data):$.texSubImage2D($.TEXTURE_2D,Ht,fe,Ge,jt,Vt,We,se,en);$.pixelStorei($.UNPACK_ROW_LENGTH,me),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Un),$.pixelStorei($.UNPACK_SKIP_PIXELS,ra),$.pixelStorei($.UNPACK_SKIP_ROWS,Dn),$.pixelStorei($.UNPACK_SKIP_IMAGES,vi),Ht===0&&ot.generateMipmaps&&$.generateMipmap(He),Zt.unbindTexture()},this.initRenderTarget=function(F){C.get(F).__webglFramebuffer===void 0&&it.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?it.setTextureCube(F,0):F.isData3DTexture?it.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?it.setTexture2DArray(F,0):it.setTexture2D(F,0),Zt.unbindTexture()},this.resetState=function(){X=0,Z=0,tt=null,Zt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const I2="modulepreload",F2=function(s){return"/3d_depth_testimonial/"+s},Sv={},bv=function(t,n,a){let o=Promise.resolve();if(n&&n.length>0){let p=function(d){return Promise.all(d.map(_=>Promise.resolve(_).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");o=p(n.map(d=>{if(d=F2(d),d in Sv)return;Sv[d]=!0;const _=d.endsWith(".css"),g=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const v=document.createElement("link");if(v.rel=_?"stylesheet":I2,_||(v.as="script"),v.crossOrigin="",v.href=d,f&&v.setAttribute("nonce",f),document.head.appendChild(v),_)return new Promise((S,E)=>{v.addEventListener("load",S),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}function c(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return o.then(u=>{for(const f of u||[])f.status==="rejected"&&c(f.reason);return t().catch(c)})};var B2={};const Yi=!!(typeof window<"u"&&window.THREE_TEXT_LOG||typeof globalThis<"u"&&B2?.THREE_TEXT_LOG==="true");class z2{warn(t,...n){console.warn(t,...n)}error(t,...n){console.error(t,...n)}log(t,...n){Yi&&console.log(t,...n)}}const rn=new z2;class G2{constructor(){this.metrics=[],this.activeTimers=new Map}start(t,n){if(!Yi)return;const a=performance.now(),o=`${t}_${a}`;this.activeTimers.set(o,a),this.metrics.push({name:t,startTime:a,metadata:n})}end(t){if(!Yi)return null;const n=performance.now();let a,o;for(const[u,f]of Array.from(this.activeTimers.entries()).reverse())if(u.startsWith(`${t}_`)){a=u,o=f;break}if(o===void 0||!a)return rn.warn(`Performance timer "${t}" was not started`),null;const c=n-o;this.activeTimers.delete(a);for(let u=this.metrics.length-1;u>=0;u--){const f=this.metrics[u];if(f.name===t&&f.startTime===o&&!f.endTime){f.endTime=n,f.duration=c;break}}return console.log(`${t}: ${c.toFixed(2)}ms`),c}getSummary(){if(!Yi)return{};const t={};for(const n of this.metrics){if(!n.duration)continue;const a=t[n.name];a?(a.count++,a.totalDuration+=n.duration,a.avgDuration=a.totalDuration/a.count,a.lastDuration=n.duration):t[n.name]={count:1,avgDuration:n.duration,totalDuration:n.duration,lastDuration:n.duration}}return t}printSummary(){if(!Yi)return;const t=this.getSummary();console.table(t),console.log("Operations:",Object.keys(t).sort().join(", "))}printBaseline(){if(!Yi)return;const t=this.getSummary();Object.entries(t).forEach(([n,a])=>{console.log(`BASELINE ${n}: ${a.avgDuration.toFixed(2)}ms avg (${a.count} calls)`)})}clear(){Yi&&(this.metrics.length=0,this.activeTimers.clear())}time(t,n,a){if(!Yi)return n();this.start(t,a);try{return n()}finally{this.end(t)}}async timeAsync(t,n,a){if(!Yi)return n();this.start(t,a);try{return await n()}finally{this.end(t)}}}const Oe=new G2,Ax=800,Rx=100,Cx=0,ip=.5,ap=1/3;var xe;(function(s){s[s.BOX=0]="BOX",s[s.GLUE=1]="GLUE",s[s.PENALTY=2]="PENALTY",s[s.DISCRETIONARY=3]="DISCRETIONARY"})(xe||(xe={}));var Wr;(function(s){s[s.VERY_LOOSE=0]="VERY_LOOSE",s[s.LOOSE=1]="LOOSE",s[s.DECENT=2]="DECENT",s[s.TIGHT=3]="TIGHT"})(Wr||(Wr={}));class H2{constructor(){this.nodesByKey=new Map,this.activeList=[]}getKey(t,n){return t<<2|n}insert(t){const n=this.getKey(t.position,t.fitness),a=this.nodesByKey.get(n);return a?t.totalDemerits<a.totalDemerits?(a.totalDemerits=t.totalDemerits,a.previous=t.previous,a.hyphenated=t.hyphenated,a.line=t.line,a.cumWidth=t.cumWidth,a.cumStretch=t.cumStretch,a.cumShrink=t.cumShrink,!0):!1:(t.active=!0,t.activeIndex=this.activeList.length,this.activeList.push(t),this.nodesByKey.set(n,t),!0)}deactivate(t){if(!t.active)return;t.active=!1;const n=t.activeIndex,a=this.activeList.length-1;if(n!==a){const o=this.activeList[a];this.activeList[n]=o,o.activeIndex=n}this.activeList.pop()}getActive(){return this.activeList}size(){return this.activeList.length}}const ad=50,Mv=50,V2=1e4,k2=5e3,X2=10,W2=1e4,rd=2,sd=3,Yc=1e4,Y2=1e4,qc=-1e4,q2=.1;class Vr{static badness(t,n){if(t===0)return 0;if(n<=0)return Yc+1;const a=Math.abs(t/n);return a>10?Yc+1:Math.min(Math.round(100*a**3),Yc)}static fitnessClass(t){return t<-.5?Wr.TIGHT:t<.5?Wr.DECENT:t<1?Wr.LOOSE:Wr.VERY_LOOSE}static findHyphenationPoints(t,n="en-us",a,o=rd,c=sd){let u;if(a&&a[n])u=a[n];else return[];if(!u)return[];const p=`.${t.toLowerCase()}.`,d=new Array(p.length).fill(0);for(let g=0;g<p.length;g++){let v=u;for(let S=g;S<p.length;S++){const E=p[S];if(!v.children||!v.children[E])break;if(v=v.children[E],v.patterns)for(let M=0;M<v.patterns.length;M++){const y=g+M;y<d.length&&(d[y]=Math.max(d[y],v.patterns[M]))}}}const _=[];for(let g=2;g<p.length-2;g++)d[g]%2===1&&_.push(g-1);return _.filter(g=>g>=o&&t.length-g>=c)}static itemizeText(t,n,a,o=!1,c="en-us",u,f=rd,p=sd,d,_){const g=[];return g.push(...this.itemizeParagraph(t,n,a,o,c,u,f,p,d,_)),g.push({type:xe.GLUE,width:0,stretch:1e7,shrink:0,text:"",originIndex:t.length}),g.push({type:xe.PENALTY,width:0,penalty:qc,text:"",originIndex:t.length}),g}static isCJK(t){const n=t.codePointAt(0);return n===void 0?!1:n>=19968&&n<=40959||n>=13312&&n<=19903||n>=131072&&n<=173791||n>=173824&&n<=177983||n>=177984&&n<=178207||n>=178208&&n<=183983||n>=63744&&n<=64255||n>=12352&&n<=12447||n>=12448&&n<=12543||n>=44032&&n<=55215||n>=4352&&n<=4607||n>=12592&&n<=12687||n>=43360&&n<=43391||n>=55216&&n<=55295||n>=65440&&n<=65500}static isCJClosingPunctuation(t){const n=t.charCodeAt(0);return n===12289||n===12290||n===65292||n===65294||n===65306||n===65307||n===65281||n===65311||n===65289||n===12305||n===65373||n===12301||n===12303||n===12297||n===12299||n===12309||n===12311||n===12313||n===12315||n===12540||n===8212||n===8230||n===8229}static isCJOpeningPunctuation(t){const n=t.charCodeAt(0);return n===65288||n===12304||n===65371||n===12300||n===12302||n===12296||n===12298||n===12308||n===12310||n===12312||n===12314}static isCJPunctuation(t){return this.isCJClosingPunctuation(t)||this.isCJOpeningPunctuation(t)}static itemizeCJKText(t,n,a,o,c=0,u){const f=[],p=Array.from(t),d=a?a(t):null;let _=c,g,v,S;if(u)g=u.width,v=u.stretch,S=u.shrink;else{const E=n("字");g=0,v=E*.04,S=E*.04}for(let E=0;E<p.length;E++){const M=p[E],y=E<p.length-1?p[E+1]:null;if(/\s/.test(M)){const x=d?d[E]??n(M):n(M);f.push({type:xe.GLUE,width:x,stretch:x*ip,shrink:x*ap,text:M,originIndex:_}),_+=M.length;continue}if(f.push({type:xe.BOX,width:d?d[E]??n(M):n(M),text:M,originIndex:_}),_+=M.length,y&&!/\s/.test(y)){let x=!0;this.isCJClosingPunctuation(y)&&(x=!1),this.isCJOpeningPunctuation(M)&&(x=!1);const P=this.isCJPunctuation(M)&&this.isCJPunctuation(y);x&&!P&&f.push({type:xe.GLUE,width:g,stretch:v,shrink:S,text:"",originIndex:_})}}return f}static itemizeParagraph(t,n,a,o,c,u,f,p,d,_){const g=[],v=Array.from(t);let S;const E=()=>{if(!S){const L=n("字");S={width:0,stretch:L*.04,shrink:L*.04}}return S};let M="",y=0,x=null,P=0;const N=()=>{M.length!==0&&(x==="cjk"?g.push(...this.itemizeCJKText(M,n,a,d,y,E())):g.push(...this.itemizeWordBased(M,y,n,o,c,u,f,p,d,_)),M="",x=null)};for(let L=0;L<v.length;L++){const H=v[L],z=this.isCJK(H)?"cjk":"word";x!==null&&x!==z&&(N(),y=P),x===null&&(x=z,y=P),M+=H,P+=H.length}return N(),g}static itemizeWordBased(t,n,a,o,c,u,f,p,d,_){const g=[],v=t.match(/\S+|\s+/g)||[];let S=0;for(const E of v){const M=n+S;if(/\s+/.test(E)){const y=a(E);g.push({type:xe.GLUE,width:y,stretch:y*ip,shrink:y*ap,text:E,originIndex:M}),S+=E.length}else{if(_&&E.includes("-")&&!E.includes("­")&&a(E)>_){const N=Array.from(E);for(let L=0;L<N.length;L++)g.push({type:xe.BOX,width:a(N[L]),text:N[L],originIndex:M+L}),L<N.length-1&&g.push({type:xe.PENALTY,width:0,penalty:5e3,originIndex:M+L+1});S+=E.length;continue}const y=E.split(/(-)/);let x=M;for(const P of y)if(P){if(P==="-")g.push({type:xe.DISCRETIONARY,width:a("-"),preBreak:"-",postBreak:"",noBreak:"-",preBreakWidth:a("-"),penalty:d?.exHyphenPenalty??Mv,flagged:!0,text:"-",originIndex:x}),x+=1;else if(P.includes("­")){const N=P.split("­");let L=0;for(let H=0;H<N.length;H++){const k=N[H];k.length>0&&(g.push({type:xe.BOX,width:a(k),text:k,originIndex:x+L}),L+=k.length),H<N.length-1&&(g.push({type:xe.DISCRETIONARY,width:0,preBreak:"-",postBreak:"",noBreak:"",preBreakWidth:a("-"),penalty:d?.hyphenPenalty??ad,flagged:!0,text:"",originIndex:x+L}),L+=1)}}else if(o&&P.length>=f+p&&new RegExp("^\\p{L}+$","u").test(P)){const N=this.findHyphenationPoints(P,c,u,f,p);if(N.length>0){let L=0;for(const H of N){const k=P.substring(L,H);g.push({type:xe.BOX,width:a(k),text:k,originIndex:x+L}),g.push({type:xe.DISCRETIONARY,width:0,preBreak:"-",postBreak:"",noBreak:"",preBreakWidth:a("-"),penalty:d?.hyphenPenalty??ad,flagged:!0,text:"",originIndex:x+H}),L=H}g.push({type:xe.BOX,width:a(P.substring(L)),text:P.substring(L),originIndex:x+L})}else{const L=a(P);if(_&&L>_){const H=Array.from(P);for(let k=0;k<H.length;k++)g.push({type:xe.BOX,width:a(H[k]),text:H[k],originIndex:x+k}),k<H.length-1&&g.push({type:xe.PENALTY,width:0,penalty:5e3,originIndex:x+k+1})}else g.push({type:xe.BOX,width:L,text:P,originIndex:x})}}else{const N=a(P);if(_&&N>_){const L=Array.from(P);for(let H=0;H<L.length;H++)g.push({type:xe.BOX,width:a(L[H]),text:L[H],originIndex:x+H}),H<L.length-1&&g.push({type:xe.PENALTY,width:0,penalty:5e3,originIndex:x+H+1})}else g.push({type:xe.BOX,width:N,text:P,originIndex:x})}x+=P.length}S+=E.length}}return g}static lineBreak(t,n,a,o,c){const u=new H2;u.insert({position:0,line:0,fitness:Wr.DECENT,totalDemerits:0,previous:null,hyphenated:!1,active:!0,activeIndex:0,cumWidth:0,cumStretch:0,cumShrink:0});let f=0,p=0,d=0;for(let v=0;v<t.length;v++){const S=t[v];if(!(S.type===xe.PENALTY&&S.penalty<Y2||S.type===xe.DISCRETIONARY||S.type===xe.GLUE&&v>0&&t[v-1].type===xe.BOX)){if(S.type===xe.BOX)f+=S.width;else if(S.type===xe.GLUE){const k=S;f+=k.width,p+=k.stretch,d+=k.shrink}else S.type===xe.DISCRETIONARY&&(f+=S.width);continue}let M=0,y=!1;(S.type===xe.PENALTY||S.type===xe.DISCRETIONARY)&&(M=S.penalty,y=S.flagged||!1);let x=0;S.type===xe.DISCRETIONARY&&(x=S.preBreakWidth);const P=[null,null,null,null],N=[1/0,1/0,1/0,1/0],L=[],H=u.getActive();for(let k=0;k<H.length;k++){const z=H[k],K=f-z.cumWidth+x,R=p-z.cumStretch,w=d-z.cumShrink,X=n-K;let Z;if(X>0){const G=R+o;Z=G>0?X/G:1/0}else X<0?Z=w>0?X/w:-1/0:Z=0;const tt=this.badness(X,X>0?R+o:w);if(Z<-1){L.push(z);continue}if(M!==qc&&tt>a)continue;let et=c.linePenalty+tt;Math.abs(et)>=1e4?et=1e8:et=et*et,M>0?et+=M*M:M>qc&&(et-=M*M),y&&z.hyphenated&&(et+=c.doubleHyphenDemerits);const Y=this.fitnessClass(Z);Math.abs(Y-z.fitness)>1&&(et+=c.adjDemerits);const D=z.totalDemerits+et;D<N[Y]&&(N[Y]=D,P[Y]={position:v,line:z.line+1,fitness:Y,totalDemerits:D,previous:z,hyphenated:y,active:!0,activeIndex:-1,cumWidth:f,cumStretch:p,cumShrink:d})}for(const k of L)u.deactivate(k);for(let k=0;k<4;k++)P[k]&&u.insert(P[k]);if(u.size()===0&&M!==qc)return null;if(S.type===xe.BOX)f+=S.width;else if(S.type===xe.GLUE){const k=S;f+=k.width,p+=k.stretch,d+=k.shrink}else S.type===xe.DISCRETIONARY&&(f+=S.width)}let _=null,g=1/0;for(const v of u.getActive())v.totalDemerits<g&&(g=v.totalDemerits,_=v);return _}static breakText(t){if(!t.text||t.text.length===0)return[];Oe.start("LineBreak.breakText",{textLength:t.text.length,width:t.width,align:t.align||"left",hyphenate:t.hyphenate||!1});const{text:n,width:a,align:o="left",direction:c="ltr",hyphenate:u=!1,language:f="en-us",respectExistingBreaks:p=!0,measureText:d,measureTextWidths:_,hyphenationPatterns:g,unitsPerEm:v,letterSpacing:S=0,tolerance:E=Ax,pretolerance:M=Rx,emergencyStretch:y=Cx,autoEmergencyStretch:x,lefthyphenmin:P=rd,righthyphenmin:N=sd,linepenalty:L=X2,adjdemerits:H=W2,hyphenpenalty:k=ad,exhyphenpenalty:z=Mv,doublehyphendemerits:K=V2,finalhyphendemerits:R=k2}=t;if(p&&n.includes(`
`)){const Y=n.split(`
`),D=[];let G=0;for(const j of Y){if(j.length===0)D.push({text:"",originalStart:G,originalEnd:G,xOffset:0,isLastLine:!0,naturalWidth:0,endedWithHyphen:!1});else{const ct=this.breakText({...t,text:j,respectExistingBreaks:!1});ct.forEach(ft=>{ft.originalStart+=G,ft.originalEnd+=G}),D.push(...ct)}G+=j.length+1}return Oe.end("LineBreak.breakText"),D}let w=u;w&&(!g||!g[f])&&(rn.warn(`Hyphenation patterns for ${f} not available`),w=!1);let X=y;x!==void 0&&a&&(X=a*x);const Z={linePenalty:L,adjDemerits:H,doubleHyphenDemerits:K,finalHyphenDemerits:R,hyphenPenalty:k,exHyphenPenalty:z,currentAlign:o,unitsPerEm:v,letterSpacingFU:v?S*v:0};if(!a||a===1/0){const Y=d(n);return Oe.end("LineBreak.breakText"),[{text:n,originalStart:0,originalEnd:n.length-1,xOffset:0,isLastLine:!0,naturalWidth:Y,endedWithHyphen:!1}]}let tt=this.itemizeText(n,d,_,!1,f,g,P,N,Z,a),et=this.lineBreak(tt,a,M,0,Z);if(!et&&w&&(tt=this.itemizeText(n,d,_,!0,f,g,P,N,Z,a),et=this.lineBreak(tt,a,E,0,Z)),!et)for(let D=0;D<5&&!et;D++){const G=X+D*a*q2;et=this.lineBreak(tt,a,E,G,Z),et||(et=this.lineBreak(tt,a,Yc,G,Z))}if(et){const Y=[];let D=et;for(;D&&D.position>0;)Y.unshift(D.position),D=D.previous;return Oe.end("LineBreak.breakText"),this.postLineBreak(n,tt,Y,a,o,c,Z)}return Oe.end("LineBreak.breakText"),[{text:n,originalStart:0,originalEnd:n.length-1,xOffset:0,adjustmentRatio:0,isLastLine:!0,naturalWidth:d(n),endedWithHyphen:!1}]}static postLineBreak(t,n,a,o,c,u,f){if(a.length===0)return[{text:t,originalStart:0,originalEnd:t.length-1,xOffset:0}];const p=[];let d=0;for(let _=0;_<a.length;_++){const g=a[_],S=a[a.length-1]+1<n.length-1?!1:_===a.length-1,E=[];let M=-1,y=-1,x=0,P=0,N=0;for(let w=d;w<g;w++){const X=n[w];if(!(X.type===xe.PENALTY&&!X.text||X.type===xe.DISCRETIONARY&&!X.noBreak)){if(X.originIndex!==void 0){(M===-1||X.originIndex<M)&&(M=X.originIndex);const Z=X.text?X.text.length:0,tt=X.originIndex+Z-1;tt>y&&(y=tt)}if(X.text)E.push(X.text);else if(X.type===xe.DISCRETIONARY){const Z=X;Z.noBreak&&E.push(Z.noBreak)}x+=X.width,X.type===xe.GLUE&&(P+=X.stretch,N+=X.shrink)}}const L=n[g];let H=!1;if(g<n.length){if(L.type===xe.PENALTY&&L.flagged)E.push("-"),x+=L.width,H=!0,L.originIndex!==void 0&&(y=L.originIndex-1);else if(L.type===xe.DISCRETIONARY){const w=L;w.preBreak&&(E.push(w.preBreak),x+=w.preBreakWidth,H=w.flagged||!1,L.originIndex!==void 0&&(y=L.originIndex-1))}}const k=E.join("");f?.letterSpacingFU&&x!==0&&(x-=f.letterSpacingFU);let z=0,K=0,R=c;if(c==="justify"&&S&&(R=u==="rtl"?"right":"left"),R==="center")z=(o-x)/2;else if(R==="right")z=o-x;else if(R==="justify"&&!S){const w=o-x;w>0&&P>0?K=w/P:w<0&&N>0&&(K=w/N)}p.push({text:k,originalStart:M,originalEnd:y,xOffset:z,adjustmentRatio:K,isLastLine:!1,naturalWidth:x,endedWithHyphen:H}),d=g+1}if(d<n.length-1){const _=[];let g=-1,v=-1,S=0;for(let y=d;y<n.length-1;y++){const x=n[y];x.type!==xe.PENALTY&&(x.originIndex!==void 0&&((g===-1||x.originIndex<g)&&(g=x.originIndex),x.originIndex>v&&(v=x.originIndex)),x.text&&_.push(x.text),S+=x.width)}f?.letterSpacingFU&&S!==0&&(S-=f.letterSpacingFU);let E=0,M=c;c==="justify"&&(M=u==="rtl"?"right":"left"),M==="center"?E=(o-S)/2:M==="right"&&(E=o-S),p.push({text:_.join(""),originalStart:g,originalEnd:v,xOffset:E,adjustmentRatio:0,isLastLine:!0,naturalWidth:S,endedWithHyphen:!1}),p.length>1&&(p[p.length-2].isLastLine=!1),p[p.length-1].isLastLine=!0}else p.length>0&&(p[p.length-1].isLastLine=!0);return p}}const Ev=new WeakMap;function rp(s){if(!s||Object.keys(s).length===0)return;const t=Ev.get(s);if(t!==void 0)return t??void 0;const n=[];for(const[o,c]of Object.entries(s)){if(!/^[a-zA-Z0-9]{4}$/.test(o)){rn.warn(`Invalid OpenType feature tag: "${o}". Tags must be exactly 4 alphanumeric characters.`);continue}c===!1||c===0?n.push(`${o}=0`):c===!0||c===1?n.push(o):typeof c=="number"&&c>1?n.push(`${o}=${Math.floor(c)}`):rn.warn(`Invalid value for feature "${o}": ${c}. Expected boolean or positive number.`)}const a=n.length>0?n.join(","):void 0;return Ev.set(s,a??null),a}class ru{static measureTextWidths(t,n,a=0){const o=Array.from(n);if(o.length===0)return[];const c=new Map;let u=0;for(let d=0;d<o.length;d++)c.set(u,d),u+=o[d].length;const f=new Array(o.length).fill(0),p=t.hb.createBuffer();try{p.addText(n),p.guessSegmentProperties();const d=rp(t.fontFeatures);t.hb.shape(t.font,p,d);const _=p.json(t.font),g=a*t.upem;for(let v=0;v<_.length;v++){const S=_[v],E=S.cl??0;let M=c.get(E);if(M===void 0)for(let y=E;y>=0;y--){const x=c.get(y);if(x!==void 0){M=x;break}}M!==void 0&&(f[M]+=S.ax,g!==0&&(f[M]+=g))}return f}finally{p.destroy()}}static measureTextWidth(t,n,a=0){const o=t.hb.createBuffer();o.addText(n),o.guessSegmentProperties();const c=rp(t.fontFeatures);t.hb.shape(t.font,o,c);const u=o.json(t.font),f=a*t.upem;let p=0;return u.forEach(d=>{p+=d.ax,f!==0&&(p+=f)}),o.destroy(),p}}class Tv{constructor(t){this.loadedFont=t}computeLines(t){const{text:n,width:a,align:o,direction:c,hyphenate:u,language:f,respectExistingBreaks:p,tolerance:d,pretolerance:_,emergencyStretch:g,autoEmergencyStretch:v,hyphenationPatterns:S,lefthyphenmin:E,righthyphenmin:M,linepenalty:y,adjdemerits:x,hyphenpenalty:P,exhyphenpenalty:N,doublehyphendemerits:L,letterSpacing:H}=t;let k;if(a)k=Vr.breakText({text:n,width:a,align:o,direction:c,hyphenate:u,language:f,respectExistingBreaks:p,tolerance:d,pretolerance:_,emergencyStretch:g,autoEmergencyStretch:v,hyphenationPatterns:S,lefthyphenmin:E,righthyphenmin:M,linepenalty:y,adjdemerits:x,hyphenpenalty:P,exhyphenpenalty:N,doublehyphendemerits:L,unitsPerEm:this.loadedFont.upem,letterSpacing:H,measureText:z=>ru.measureTextWidth(this.loadedFont,z,H),measureTextWidths:z=>ru.measureTextWidths(this.loadedFont,z,H)});else{const z=n.split(`
`);k=[];let K=0;for(const R of z){const w=R.length===0?K:K+R.length-1;k.push({text:R,originalStart:K,originalEnd:w,xOffset:0}),K+=R.length+1}}return{lines:k}}applyAlignment(t,n){const{offset:a,adjustedBounds:o}=this.computeAlignmentOffset(n);if(a!==0)for(let c=0;c<t.length;c+=3)t[c]+=a;return{offset:a,adjustedBounds:o}}computeAlignmentOffset(t){const{width:n,align:a,planeBounds:o}=t;let c=0;const u={min:{...o.min},max:{...o.max}};if(n&&(a==="center"||a==="right")){const f=o.max.x-o.min.x;a==="center"?c=(n-f)/2-o.min.x:c=n-o.max.x}return c!==0&&(u.min.x+=c,u.max.x+=c),{offset:c,adjustedBounds:u}}}const sp=65536,op=1330926671,Av=2001684038,j2=2001684018,Rv=1751474532,Cv=1751672161,wv=1330851634,Uv=1719034226,Dv=1398030676,od=1851878757,Lv=1128678944,Nv=1128678962,Ov=1196643650,Pv=1196445523;function ld(s){const t=s.getUint16(4),n=12,a=new Map;for(let o=0;o<t;o++){const c=n+o*16;if(c+16>s.byteLength)break;const u=s.getUint32(c),f=s.getUint32(c+4),p=s.getUint32(c+8),d=s.getUint32(c+12);a.set(u,{tag:u,checksum:f,offset:p,length:d})}return a}const Z2=29555,K2=25462,Q2=new TextDecoder("utf-16be");class cl{static extractMetadata(t){if(!t||t.byteLength<12)throw new Error("Invalid font buffer: too small to be a valid font file");const n=new DataView(t),a=n.getUint32(0);if(![sp,op].includes(a))throw new Error(`Invalid font format. Expected TTF/OTF (or WOFF), got signature: 0x${a.toString(16)}`);const c=ld(n),u=c.has(Lv)||c.has(Nv),f=c.get(Rv)?.offset??0,p=c.get(Cv)?.offset??0,d=c.get(wv)?.offset??0,_=c.get(Uv)?.offset??0,g=c.get(Dv)?.offset??0,v=c.get(od)?.offset??0,S=f?n.getUint16(f+18):1e3;let E=null;p&&(E={ascender:n.getInt16(p+4),descender:n.getInt16(p+6),lineGap:n.getInt16(p+8)});let M=null;d&&(M={typoAscender:n.getInt16(d+68),typoDescender:n.getInt16(d+70),typoLineGap:n.getInt16(d+72),winAscent:n.getUint16(d+74),winDescent:n.getUint16(d+76)});let y=null;return _&&g&&v&&(y=this.extractAxisNames(n,g,v)),{isCFF:u,unitsPerEm:S,hheaAscender:E?.ascender||null,hheaDescender:E?.descender||null,hheaLineGap:E?.lineGap||null,typoAscender:M?.typoAscender||null,typoDescender:M?.typoDescender||null,typoLineGap:M?.typoLineGap||null,winAscent:M?.winAscent||null,winDescent:M?.winDescent||null,axisNames:y}}static extractFeatureTags(t){const n=new DataView(t),a=ld(n),o=a.get(Ov)?.offset??0,c=a.get(Pv)?.offset??0,u=a.get(od)?.offset??0,f=new Set,p={};try{if(o){const _=this.extractFeatureDataFromTable(n,o,u);_.features.forEach(g=>f.add(g)),Object.assign(p,_.names)}if(c){const _=this.extractFeatureDataFromTable(n,c,u);_.features.forEach(g=>f.add(g)),Object.assign(p,_.names)}}catch{return}const d=Array.from(f).sort();if(d.length!==0)return{tags:d,names:Object.keys(p).length>0?p:{}}}static extractFeatureDataFromTable(t,n,a){const o=t.getUint16(n+6),c=n+o,u=t.getUint16(c),f=[],p={};for(let d=0;d<u;d++){const _=c+2+d*6,g=String.fromCharCode(t.getUint8(_),t.getUint8(_+1),t.getUint8(_+2),t.getUint8(_+3));if(f.push(g),/^(ss\d{2}|cv\d{2})$/.test(g)&&a){const v=t.getUint16(_+4),S=c+v,E=t.getUint16(S);if(E!==0){const M=S+E;if(t.getUint16(M)===0){const x=t.getUint16(M+2),P=this.getNameFromNameTable(t,a,x);P&&(p[g]=P)}}}}return{features:f,names:p}}static extractAxisNames(t,n,a){try{if(t.getUint16(n)<1)return null;const c=t.getUint16(n+4),u=t.getUint16(n+6),f=t.getUint32(n+8),p={};for(let d=0;d<u;d++){const _=n+f+d*c,g=String.fromCharCode(t.getUint8(_),t.getUint8(_+1),t.getUint8(_+2),t.getUint8(_+3)),v=t.getUint16(_+4),S=this.getNameFromNameTable(t,a,v);S&&(p[g]=S)}return Object.keys(p).length>0?p:null}catch{return null}}static getNameFromNameTable(t,n,a){try{const o=t.getUint16(n+2),c=t.getUint16(n+4);for(let u=0;u<o;u++){const f=n+6+u*12,p=t.getUint16(f),d=t.getUint16(f+2),_=t.getUint16(f+4),g=t.getUint16(f+6),v=t.getUint16(f+8),S=t.getUint16(f+10);if(g!==a||p!==0&&!(p===3&&_===1033))continue;const E=n+c+S,M=new Uint8Array(t.buffer,E,v);if(p===0||p===3&&d===1){let y="";for(let x=0;x<M.length;x+=2)y+=String.fromCharCode(M[x]<<8|M[x+1]);return y}return new TextDecoder("ascii").decode(M)}return null}catch{return null}}static extractAll(t){if(!t||t.byteLength<12)throw new Error("Invalid font buffer: too small to be a valid font file");const n=new DataView(t),a=n.getUint32(0);if(![sp,op].includes(a))throw new Error(`Invalid font format. Expected TTF/OTF (or WOFF), got signature: 0x${a.toString(16)}`);const c=ld(n),u=c.get(od)?.offset??0,f=u?this.buildNameIndex(n,u):null,p=this.extractMetricsWithIndex(n,c,f),d=this.extractFeaturesWithIndex(n,c,f);return{metrics:p,features:d}}static buildNameIndex(t,n){const a=new Map,o=t.getUint16(n+2),c=t.getUint16(n+4);for(let u=0;u<o;u++){const f=n+6+u*12,p=t.getUint16(f),d=t.getUint16(f+2),_=t.getUint16(f+4),g=t.getUint16(f+6),v=t.getUint16(f+8),S=t.getUint16(f+10);(p===0||p===3&&_===1033)&&(a.has(g)||a.set(g,{offset:n+c+S,length:v,platformID:p,encodingID:d}))}return a}static getNameFromIndex(t,n,a){if(!n)return null;const o=n.get(a);if(!o)return null;try{const c=new Uint8Array(t.buffer,o.offset,o.length);return o.platformID===0||o.platformID===3&&o.encodingID===1?Q2.decode(c):new TextDecoder("ascii").decode(c)}catch{return null}}static extractMetricsWithIndex(t,n,a){const o=n.has(Lv)||n.has(Nv),c=n.get(Rv)?.offset??0,u=n.get(Cv)?.offset??0,f=n.get(wv)?.offset??0,p=n.get(Uv)?.offset??0,d=n.get(Dv)?.offset??0,_=c?t.getUint16(c+18):1e3;let g=null;u&&(g={ascender:t.getInt16(u+4),descender:t.getInt16(u+6),lineGap:t.getInt16(u+8)});let v=null;f&&(v={typoAscender:t.getInt16(f+68),typoDescender:t.getInt16(f+70),typoLineGap:t.getInt16(f+72),winAscent:t.getUint16(f+74),winDescent:t.getUint16(f+76)});let S=null;return p&&d&&a&&(S=this.extractAxisNamesWithIndex(t,d,a)),{isCFF:o,unitsPerEm:_,hheaAscender:g?.ascender||null,hheaDescender:g?.descender||null,hheaLineGap:g?.lineGap||null,typoAscender:v?.typoAscender||null,typoDescender:v?.typoDescender||null,typoLineGap:v?.typoLineGap||null,winAscent:v?.winAscent||null,winDescent:v?.winDescent||null,axisNames:S}}static extractAxisNamesWithIndex(t,n,a){try{if(t.getUint16(n)<1)return null;const c=t.getUint16(n+4),u=t.getUint16(n+6),f=t.getUint32(n+8),p={};for(let d=0;d<u;d++){const _=n+f+d*c,g=String.fromCharCode(t.getUint8(_),t.getUint8(_+1),t.getUint8(_+2),t.getUint8(_+3)),v=t.getUint16(_+4),S=this.getNameFromIndex(t,a,v);S&&(p[g]=S)}return Object.keys(p).length>0?p:null}catch{return null}}static extractFeaturesWithIndex(t,n,a){const o=n.get(Ov)?.offset??0,c=n.get(Pv)?.offset??0,u=new Set,f={};try{o&&this.extractFeatureData(t,o,a,u,f),c&&this.extractFeatureData(t,c,a,u,f)}catch{return}return u.size===0?void 0:{tags:Array.from(u).sort((_,g)=>_-g).map(this.tagToString),names:Object.keys(f).length>0?f:{}}}static extractFeatureData(t,n,a,o,c){const u=t.getUint16(n+6),f=n+u,p=t.getUint16(f);for(let d=0;d<p;d++){const _=f+2+d*6,g=t.getUint32(_);o.add(g);const v=g>>16&65535;if(!a||v!==Z2&&v!==K2)continue;const S=g>>8&255,E=g&255;if(S<48||S>57||E<48||E>57)continue;const M=t.getUint16(_+4),y=f+M,x=t.getUint16(y);if(x===0)continue;const P=y+x;if(t.getUint16(P)!==0)continue;const L=t.getUint16(P+2),H=this.getNameFromIndex(t,a,L);if(H){const k=String.fromCharCode(g>>24&255,g>>16&255,g>>8&255,g&255);c[k]=H}}}static tagToString(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,t&255)}static getVerticalMetrics(t){return t.typoAscender!==null&&t.typoDescender!==null?{ascender:t.typoAscender,descender:t.typoDescender,lineGap:0}:t.hheaAscender!==null&&t.hheaDescender!==null?{ascender:t.hheaAscender,descender:t.hheaDescender,lineGap:0}:t.winAscent!==null&&t.winDescent!==null?{ascender:t.winAscent,descender:-t.winDescent,lineGap:0}:{ascender:Math.round(t.unitsPerEm*.8),descender:-Math.round(t.unitsPerEm*.2),lineGap:0}}static getFontMetrics(t){const n=cl.getVerticalMetrics(t);return{ascender:n.ascender,descender:n.descender,lineGap:n.lineGap,unitsPerEm:t.unitsPerEm,naturalLineHeight:n.ascender-n.descender}}}class su{static detectFormat(t){if(t.byteLength<4)return"ttf/otf";const a=new DataView(t).getUint32(0);return a===Av?"woff":a===j2?"woff2":"ttf/otf"}static async decompressWoff(t){const n=new DataView(t),a=new Uint8Array(t);if(n.getUint32(0)!==Av)throw new Error("Not a valid WOFF font");const c=n.getUint32(4),u=n.getUint16(12),f=n.getUint32(16);if(typeof DecompressionStream>"u")throw new Error("WOFF fonts require DecompressionStream API (Chrome 80+, Firefox 113+, Safari 16.4+). Please use TTF/OTF fonts or upgrade your browser.");const p=new Uint8Array(f),d=new DataView(p.buffer);d.setUint32(0,c),d.setUint16(4,u);const _=2**Math.floor(Math.log2(u))*16;d.setUint16(6,_),d.setUint16(8,Math.floor(Math.log2(u))),d.setUint16(10,u*16-_);let g=12+u*16;const v=[];for(let E=0;E<u;E++){const M=44+E*20;v.push({tag:n.getUint32(M),offset:n.getUint32(M+4),length:n.getUint32(M+8),origLength:n.getUint32(M+12),checksum:n.getUint32(M+16)})}v.sort((E,M)=>E.tag-M.tag);const S=await Promise.all(v.map(async E=>{if(E.length===E.origLength)return a.subarray(E.offset,E.offset+E.length);const M=a.subarray(E.offset,E.offset+E.length),y=await su.decompressZlib(M);if(y.byteLength!==E.origLength)throw new Error(`Decompression failed: expected ${E.origLength} bytes, got ${y.byteLength}`);return new Uint8Array(y)}));for(let E=0;E<u;E++){const M=v[E],y=12+E*16;d.setUint32(y,M.tag),d.setUint32(y+4,M.checksum),d.setUint32(y+8,g),d.setUint32(y+12,M.origLength),p.set(S[E],g),g+=M.origLength;const x=(4-M.origLength%4)%4;g+=x}return rn.log("WOFF font decompressed successfully"),p.buffer.slice(0,g)}static async decompressZlib(t){const n=new ReadableStream({start(o){o.enqueue(t),o.close()}}).pipeThrough(new DecompressionStream("deflate"));return new Response(n).arrayBuffer()}}class Iv{constructor(t){this.getHarfBuzzInstance=t}async loadFont(t,n){if(Oe.start("FontLoader.loadFont",{bufferSize:t.byteLength}),!t||t.byteLength<12)throw new Error("Invalid font buffer: too small to be a valid font file");const a=su.detectFormat(t);if(a==="woff")rn.log("WOFF font detected, decompressing..."),t=await su.decompressWoff(t);else if(a==="woff2")throw new Error("WOFF2 fonts are not yet supported. Please use WOFF or TTF/OTF format.");const c=new DataView(t).getUint32(0);if(![sp,op].includes(c))throw new Error(`Invalid font format. Expected TTF/OTF (or WOFF), got signature: 0x${c.toString(16)}`);const{hb:f,module:p}=await this.getHarfBuzzInstance();try{const d=f.createBlob(new Uint8Array(t)),_=f.createFace(d,0),g=f.createFont(_);n&&g.setVariations(n);const v=_.getAxisInfos(),S=Object.keys(v).length>0,{metrics:E,features:M}=cl.extractAll(t);let y;if(S&&v){y={};for(const[x,P]of Object.entries(v))y[x]={...P,name:E.axisNames?.[x]||null}}return{hb:f,fontBlob:d,face:_,font:g,module:p,upem:E.unitsPerEm,metrics:E,fontVariations:n,isVariable:S,variationAxes:y,availableFeatures:M?.tags,featureNames:M?.names,_buffer:t}}catch(d){throw rn.error("Failed to load font:",d),d}finally{Oe.end("FontLoader.loadFont")}}static destroyFont(t){try{t.font&&typeof t.font.destroy=="function"&&t.font.destroy(),t.face&&typeof t.face.destroy=="function"&&t.face.destroy(),t.fontBlob&&typeof t.fontBlob.destroy=="function"&&t.fontBlob.destroy()}catch(n){rn.error("Error destroying font resources:",n)}}}const J2=/^[a-z]{2,3}(?:-[a-z0-9]{2,16})*$/i,$2=new Set(["af","as","be","bg","bn","ca","cs","cy","da","de-1996","el-monoton","el-polyton","en-gb","en-us","eo","es","et","eu","fi","fr","fur","ga","gl","gu","hi","hr","hsb","hu","hy","ia","id","is","it","ka","kmr","kn","la","lt","lv","mk","ml","mn-cyrl","mr","mul-ethi","nb","nl","nn","oc","or","pa","pl","pms","pt","rm","ro","ru","sa","sh-cyrl","sh-latn","sk","sl","sq","sr-cyrl","sv","ta","te","th","tk","tr","uk","zh-latn-pinyin"]);async function Fv(s,t){if(!J2.test(s))throw new Error(`Invalid hyphenation language code "${s}". Expected e.g. "en-us".`);if(!t&&!$2.has(s))throw new Error(`Unsupported hyphenation language "${s}". Use a built-in language (e.g. "en-us") or register patterns via Text.registerPattern("${s}", pattern).`);try{if(t)return(await bv(()=>import(`${t}${s}.js`),[])).default;if(typeof import.meta?.url=="string"){const n=new URL("/3d_depth_testimonial/assets/index-rJIhlVOQ.js",import.meta.url).href;return(await import(new URL(`./patterns/${s}.js`,n).href)).default}else return(await bv(()=>import(`./patterns/${s}.js`),[])).default}catch{throw new Error(`Failed to load hyphenation patterns for ${s}. Consider using static imports: import pattern from 'three-text/patterns/${s}'; Text.registerPattern('${s}', pattern);`)}}class Zn{constructor(t=0,n=0){this.x=t,this.y=n}set(t,n){return this.x=t,this.y=n,this}clone(){return new Zn(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}sub(t){return this.x-=t.x,this.y-=t.y,this}multiply(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t,this.y/=t,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}lengthSq(){return this.x*this.x+this.y*this.y}normalize(){const t=this.length();return t>0&&this.divide(t),this}dot(t){return this.x*t.x+this.y*t.y}distanceTo(t){const n=this.x-t.x,a=this.y-t.y;return Math.sqrt(n*n+a*a)}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}equals(t){return this.x===t.x&&this.y===t.y}angle(){return Math.atan2(this.y,this.x)}}class jr{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}clone(){return new jr(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}multiply(t){return this.x*=t,this.y*=t,this.z*=t,this}divide(t){return this.x/=t,this.y/=t,this.z/=t,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}normalize(){const t=this.length();return t>0&&this.divide(t),this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){const n=this.y*t.z-this.z*t.y,a=this.z*t.x-this.x*t.z,o=this.x*t.y-this.y*t.x;return this.x=n,this.y=a,this.z=o,this}distanceTo(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return Math.sqrt(n*n+a*a+o*o)}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}}class du{constructor(){this.cache=new Map}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}set(t,n){this.cache.set(t,n)}delete(t){return this.cache.delete(t)}clear(){this.cache.clear()}get size(){return this.cache.size}keys(){return Array.from(this.cache.keys())}getStats(){return{size:this.cache.size}}}function tR(s,t,n,a){const o=Math.round(n*1e3)/1e3;return`${s}_${t}_${o}_${a}`}const eR=new du,nR=new du,iR=new du,aR=new du;var Bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function rR(s){if(s.__esModule)return s;var t=s.default;if(typeof t=="function"){var n=function a(){return this instanceof a?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(s).forEach(function(a){var o=Object.getOwnPropertyDescriptor(s,a);Object.defineProperty(n,a,o.get?o:{enumerable:!0,get:function(){return s[a]}})}),n}var Ux={exports:{}};(function(s){var t;function n(b,A){return b.b===A.b&&b.a===A.a}function a(b,A){return b.b<A.b||b.b===A.b&&b.a<=A.a}function o(b,A,U){var O=A.b-b.b,q=U.b-A.b;return 0<O+q?O<q?A.a-b.a+O/(O+q)*(b.a-U.a):A.a-U.a+q/(O+q)*(U.a-b.a):0}function c(b,A,U){var O=A.b-b.b,q=U.b-A.b;return 0<O+q?(A.a-U.a)*O+(A.a-b.a)*q:0}function u(b,A){return b.a<A.a||b.a===A.a&&b.b<=A.b}function f(b,A,U){var O=A.a-b.a,q=U.a-A.a;return 0<O+q?O<q?A.b-b.b+O/(O+q)*(b.b-U.b):A.b-U.b+q/(O+q)*(U.b-b.b):0}function p(b,A,U){var O=A.a-b.a,q=U.a-A.a;return 0<O+q?(A.b-U.b)*O+(A.b-b.b)*q:0}function d(b){return a(b.b.a,b.a)}function _(b){return a(b.a,b.b.a)}function g(b,A,U,O){return b=0>b?0:b,U=0>U?0:U,b<=U?U===0?(A+O)/2:A+b/(b+U)*(O-A):O+U/(b+U)*(A-O)}function v(b){var A=x(b.b);return N(A,b.c),N(A.b,b.c),L(A,b.a),A}function S(b,A){var U=!1,O=!1;b!==A&&(A.a!==b.a&&(O=!0,k(A.a,b.a)),A.d!==b.d&&(U=!0,z(A.d,b.d)),P(A,b),O||(N(A,b.a),b.a.c=b),U||(L(A,b.d),b.d.a=b))}function E(b){var A=b.b,U=!1;b.d!==b.b.d&&(U=!0,z(b.d,b.b.d)),b.c===b?k(b.a,null):(b.b.d.a=oe(b),b.a.c=b.c,P(b,oe(b)),U||L(b,b.d)),A.c===A?(k(A.a,null),z(A.d,null)):(b.d.a=oe(A),A.a.c=A.c,P(A,oe(A))),H(b)}function M(b){var A=x(b),U=A.b;return P(A,b.e),A.a=b.b.a,N(U,A.a),A.d=U.d=b.d,A=A.b,P(b.b,oe(b.b)),P(b.b,A),b.b.a=A.a,A.b.a.c=A.b,A.b.d=b.b.d,A.f=b.f,A.b.f=b.b.f,A}function y(b,A){var U=!1,O=x(b),q=O.b;return A.d!==b.d&&(U=!0,z(A.d,b.d)),P(O,b.e),P(q,A),O.a=b.b.a,q.a=A.a,O.d=q.d=b.d,b.d.a=q,U||L(O,b.d),O}function x(b){var A=new ee,U=new ee,O=b.b.h;return U.h=O,O.b.h=A,A.h=b,b.b.h=U,A.b=U,A.c=A,A.e=U,U.b=A,U.c=U,U.e=A}function P(b,A){var U=b.c,O=A.c;U.b.e=A,O.b.e=b,b.c=O,A.c=U}function N(b,A){var U=A.f,O=new De(A,U);U.e=O,A.f=O,U=O.c=b;do U.a=O,U=U.c;while(U!==b)}function L(b,A){var U=A.d,O=new de(A,U);U.b=O,A.d=O,O.a=b,O.c=A.c,U=b;do U.d=O,U=U.e;while(U!==b)}function H(b){var A=b.h;b=b.b.h,A.b.h=b,b.b.h=A}function k(b,A){var U=b.c,O=U;do O.a=A,O=O.c;while(O!==U);U=b.f,O=b.e,O.f=U,U.e=O}function z(b,A){var U=b.a,O=U;do O.d=A,O=O.e;while(O!==U);U=b.d,O=b.b,O.d=U,U.b=O}function K(b){var A=0;return Math.abs(b[1])>Math.abs(b[0])&&(A=1),Math.abs(b[2])>Math.abs(b[A])&&(A=2),A}var R=4*1e150;function w(b,A){b.f+=A.f,b.b.f+=A.b.f}function X(b,A,U){return b=b.a,A=A.a,U=U.a,A.b.a===b?U.b.a===b?a(A.a,U.a)?0>=c(U.b.a,A.a,U.a):0<=c(A.b.a,U.a,A.a):0>=c(U.b.a,b,U.a):U.b.a===b?0<=c(A.b.a,b,A.a):(A=o(A.b.a,b,A.a),b=o(U.b.a,b,U.a),A>=b)}function Z(b){b.a.i=null;var A=b.e;A.a.c=A.c,A.c.a=A.a,b.e=null}function tt(b,A){E(b.a),b.c=!1,b.a=A,A.i=b}function et(b){var A=b.a.a;do b=Ot(b);while(b.a.a===A);return b.c&&(A=y(Yt(b).a.b,b.a.e),tt(b,A),b=Ot(b)),b}function Y(b,A,U){var O=new qt;return O.a=U,O.e=It(b.f,A.e,O),U.i=O}function D(b,A){switch(b.s){case 100130:return(A&1)!==0;case 100131:return A!==0;case 100132:return 0<A;case 100133:return 0>A;case 100134:return 2<=A||-2>=A}return!1}function G(b){var A=b.a,U=A.d;U.c=b.d,U.a=A,Z(b)}function j(b,A,U){for(b=A,A=A.a;b!==U;){b.c=!1;var O=Yt(b),q=O.a;if(q.a!==A.a){if(!O.c){G(b);break}q=y(A.c.b,q.b),tt(O,q)}A.c!==q&&(S(oe(q),q),S(A,q)),G(b),A=O.a,b=O}return A}function ct(b,A,U,O,q,V){var at=!0;do Y(b,A,U.b),U=U.c;while(U!==O);for(q===null&&(q=Yt(A).a.b.c);O=Yt(A),U=O.a.b,U.a===q.a;)U.c!==q&&(S(oe(U),U),S(oe(q),U)),O.f=A.f-U.f,O.d=D(b,O.f),A.b=!0,!at&&lt(b,A)&&(w(U,q),Z(A),E(q)),at=!1,A=O,q=U;A.b=!0,V&&wt(b,A)}function ft(b,A,U,O,q){var V=[A.g[0],A.g[1],A.g[2]];A.d=null,A.d=b.o&&b.o(V,U,O,b.c)||null,A.d===null&&(q?b.n||(te(b,100156),b.n=!0):A.d=U[0])}function B(b,A,U){var O=[null,null,null,null];O[0]=A.a.d,O[1]=U.a.d,ft(b,A.a,O,[.5,.5,0,0],!1),S(A,U)}function J(b,A,U,O,q){var V=Math.abs(A.b-b.b)+Math.abs(A.a-b.a),at=Math.abs(U.b-b.b)+Math.abs(U.a-b.a),dt=q+1;O[q]=.5*at/(V+at),O[dt]=.5*V/(V+at),b.g[0]+=O[q]*A.g[0]+O[dt]*U.g[0],b.g[1]+=O[q]*A.g[1]+O[dt]*U.g[1],b.g[2]+=O[q]*A.g[2]+O[dt]*U.g[2]}function lt(b,A){var U=Yt(A),O=A.a,q=U.a;if(a(O.a,q.a)){if(0<c(q.b.a,O.a,q.a))return!1;if(!n(O.a,q.a))M(q.b),S(O,oe(q)),A.b=U.b=!0;else if(O.a!==q.a){var U=b.e,V=O.a.h;if(0<=V){var U=U.b,at=U.d,dt=U.e,At=U.c,xt=At[V];at[xt]=at[U.a],At[at[xt]]=xt,xt<=--U.a&&(1>=xt||a(dt[at[xt>>1]],dt[at[xt]])?Kt(U,xt):Ft(U,xt)),dt[V]=null,At[V]=U.b,U.b=V}else for(U.c[-(V+1)]=null;0<U.a&&U.c[U.d[U.a-1]]===null;)--U.a;B(b,oe(q),O)}}else{if(0>c(O.b.a,q.a,O.a))return!1;Ot(A).b=A.b=!0,M(O.b),S(oe(q),O)}return!0}function Dt(b,A){var U=Yt(A),O=A.a,q=U.a,V=O.a,at=q.a,dt=O.b.a,At=q.b.a,xt=new De;if(c(dt,b.a,V),c(At,b.a,at),V===at||Math.min(V.a,dt.a)>Math.max(at.a,At.a))return!1;if(a(V,at)){if(0<c(At,V,at))return!1}else if(0>c(dt,at,V))return!1;var Et=dt,Lt=V,kt=At,ue=at,Gt,Se;if(a(Et,Lt)||(Gt=Et,Et=Lt,Lt=Gt),a(kt,ue)||(Gt=kt,kt=ue,ue=Gt),a(Et,kt)||(Gt=Et,Et=kt,kt=Gt,Gt=Lt,Lt=ue,ue=Gt),a(kt,Lt)?a(Lt,ue)?(Gt=o(Et,kt,Lt),Se=o(kt,Lt,ue),0>Gt+Se&&(Gt=-Gt,Se=-Se),xt.b=g(Gt,kt.b,Se,Lt.b)):(Gt=c(Et,kt,Lt),Se=-c(Et,ue,Lt),0>Gt+Se&&(Gt=-Gt,Se=-Se),xt.b=g(Gt,kt.b,Se,ue.b)):xt.b=(kt.b+Lt.b)/2,u(Et,Lt)||(Gt=Et,Et=Lt,Lt=Gt),u(kt,ue)||(Gt=kt,kt=ue,ue=Gt),u(Et,kt)||(Gt=Et,Et=kt,kt=Gt,Gt=Lt,Lt=ue,ue=Gt),u(kt,Lt)?u(Lt,ue)?(Gt=f(Et,kt,Lt),Se=f(kt,Lt,ue),0>Gt+Se&&(Gt=-Gt,Se=-Se),xt.a=g(Gt,kt.a,Se,Lt.a)):(Gt=p(Et,kt,Lt),Se=-p(Et,ue,Lt),0>Gt+Se&&(Gt=-Gt,Se=-Se),xt.a=g(Gt,kt.a,Se,ue.a)):xt.a=(kt.a+Lt.a)/2,a(xt,b.a)&&(xt.b=b.a.b,xt.a=b.a.a),Et=a(V,at)?V:at,a(Et,xt)&&(xt.b=Et.b,xt.a=Et.a),n(xt,V)||n(xt,at))return lt(b,A),!1;if(!n(dt,b.a)&&0<=c(dt,b.a,xt)||!n(At,b.a)&&0>=c(At,b.a,xt)){if(At===b.a)return M(O.b),S(q.b,O),A=et(A),O=Yt(A).a,j(b,Yt(A),U),ct(b,A,oe(O),O,O,!0),!0;if(dt===b.a){M(q.b),S(O.e,oe(q)),V=U=A,at=V.a.b.a;do V=Ot(V);while(V.a.b.a===at);return A=V,V=Yt(A).a.b.c,U.a=oe(q),q=j(b,U,null),ct(b,A,q.c,O.b.c,V,!0),!0}return 0<=c(dt,b.a,xt)&&(Ot(A).b=A.b=!0,M(O.b),O.a.b=b.a.b,O.a.a=b.a.a),0>=c(At,b.a,xt)&&(A.b=U.b=!0,M(q.b),q.a.b=b.a.b,q.a.a=b.a.a),!1}return M(O.b),M(q.b),S(oe(q),O),O.a.b=xt.b,O.a.a=xt.a,O.a.h=Zt(b.e,O.a),O=O.a,q=[0,0,0,0],xt=[V.d,dt.d,at.d,At.d],O.g[0]=O.g[1]=O.g[2]=0,J(O,V,dt,q,0),J(O,at,At,q,2),ft(b,O,xt,q,!0),Ot(A).b=A.b=U.b=!0,!1}function wt(b,A){for(var U=Yt(A);;){for(;U.b;)A=U,U=Yt(U);if(!A.b&&(U=A,A=Ot(A),A===null||!A.b))break;A.b=!1;var O=A.a,q=U.a,V;if(V=O.b.a!==q.b.a)t:{V=A;var at=Yt(V),dt=V.a,At=at.a,xt=void 0;if(a(dt.b.a,At.b.a)){if(0>c(dt.b.a,At.b.a,dt.a)){V=!1;break t}Ot(V).b=V.b=!0,xt=M(dt),S(At.b,xt),xt.d.c=V.d}else{if(0<c(At.b.a,dt.b.a,At.a)){V=!1;break t}V.b=at.b=!0,xt=M(At),S(dt.e,At.b),xt.b.d.c=V.d}V=!0}if(V&&(U.c?(Z(U),E(q),U=Yt(A),q=U.a):A.c&&(Z(A),E(O),A=Ot(U),O=A.a)),O.a!==q.a){if(O.b.a===q.b.a||A.c||U.c||O.b.a!==b.a&&q.b.a!==b.a)lt(b,A);else if(Dt(b,A))break}O.a===q.a&&O.b.a===q.b.a&&(w(q,O),Z(A),E(O),A=Ot(U))}}function rt(b,A){b.a=A;for(var U=A.c;U.i===null;)if(U=U.c,U===A.c){var U=b,O=A,at=new qt;at.a=O.c.b;var q=U.f,dt=q.a;do dt=dt.a;while(dt.b!==null&&!q.c(q.b,at,dt.b));var q=dt.b,V=Yt(q),at=q.a,dt=V.a;if(c(at.b.a,O,at.a)===0)at=q.a,n(at.a,O)||n(at.b.a,O)||(M(at.b),q.c&&(E(at.c),q.c=!1),S(O.c,at),rt(U,O));else{var At=a(dt.b.a,at.b.a)?q:V,V=void 0;q.d||At.c?(At===q?V=y(O.c.b,at.e):V=y(dt.b.c.b,O.c).b,At.c?tt(At,V):(at=U,q=Y(U,q,V),q.f=Ot(q).f+q.a.f,q.d=D(at,q.f)),rt(U,O)):ct(U,q,O.c,O.c,null,!0)}return}if(U=et(U.i),at=Yt(U),q=at.a,at=j(b,at,null),at.c===q){var q=at,at=q.c,dt=Yt(U),V=U.a,At=dt.a,xt=!1;V.b.a!==At.b.a&&Dt(b,U),n(V.a,b.a)&&(S(oe(at),V),U=et(U),at=Yt(U).a,j(b,Yt(U),dt),xt=!0),n(At.a,b.a)&&(S(q,oe(At)),q=j(b,dt,null),xt=!0),xt?ct(b,U,q.c,at,at,!0):(a(At.a,V.a)?O=oe(At):O=V,O=y(q.c.b,O),ct(b,U,O,O.c,O.c,!1),O.b.i.c=!0,wt(b,U))}else ct(b,U,at.c,q,q,!0)}function pt(b,A){var U=new qt,O=v(b.b);O.a.b=R,O.a.a=A,O.b.a.b=-R,O.b.a.a=A,b.a=O.b.a,U.a=O,U.f=0,U.d=!1,U.c=!1,U.h=!0,U.b=!1,O=b.f,O=It(O,O.a,U),U.e=O}function Pt(b){this.a=new Bt,this.b=b,this.c=X}function It(b,A,U){do A=A.c;while(A.b!==null&&!b.c(b.b,A.b,U));return b=new Bt(U,A.a,A),A.a.c=b,A.a=b}function Bt(b,A,U){this.b=b||null,this.a=A||this,this.c=U||this}function zt(){this.d=Te,this.p=this.b=this.q=null,this.j=[0,0,0],this.s=100130,this.n=!1,this.o=this.a=this.e=this.f=null,this.m=!1,this.c=this.r=this.i=this.k=this.l=this.h=null}var Te=0;t=zt.prototype,t.x=function(){re(this,Te)},t.B=function(b,A){switch(b){case 100142:return;case 100140:switch(A){case 100130:case 100131:case 100132:case 100133:case 100134:this.s=A;return}break;case 100141:this.m=!!A;return;default:te(this,100900);return}te(this,100901)},t.y=function(b){switch(b){case 100142:return 0;case 100140:return this.s;case 100141:return this.m;default:te(this,100900)}return!1},t.A=function(b,A,U){this.j[0]=b,this.j[1]=A,this.j[2]=U},t.z=function(b,A){var U=A||null;switch(b){case 100100:case 100106:this.h=U;break;case 100104:case 100110:this.l=U;break;case 100101:case 100107:this.k=U;break;case 100102:case 100108:this.i=U;break;case 100103:case 100109:this.p=U;break;case 100105:case 100111:this.o=U;break;case 100112:this.r=U;break;default:te(this,100900)}},t.C=function(b,A){var U=!1,O=[0,0,0];re(this,2);for(var q=0;3>q;++q){var V=b[q];-1e150>V&&(V=-1e150,U=!0),1e150<V&&(V=1e150,U=!0),O[q]=V}U&&te(this,100155),U=this.q,U===null?(U=v(this.b),S(U,U.b)):(M(U),U=U.e),U.a.d=A,U.a.g[0]=O[0],U.a.g[1]=O[1],U.a.g[2]=O[2],U.f=1,U.b.f=-1,this.q=U},t.u=function(b){re(this,Te),this.d=1,this.b=new $,this.c=b},t.t=function(){re(this,1),this.d=2,this.q=null},t.v=function(){re(this,2),this.d=1},t.w=function(){re(this,1),this.d=Te;var b=this.j[0],A=this.j[1],U=this.j[2],O=!1,q=[b,A,U];if(b===0&&A===0&&U===0){for(var A=[-2*1e150,-2*1e150,-2*1e150],V=[2*1e150,2*1e150,2*1e150],U=[],at=[],O=this.b.c,b=O.e;b!==O;b=b.e)for(var dt=0;3>dt;++dt){var At=b.g[dt];At<V[dt]&&(V[dt]=At,at[dt]=b),At>A[dt]&&(A[dt]=At,U[dt]=b)}if(b=0,A[1]-V[1]>A[0]-V[0]&&(b=1),A[2]-V[2]>A[b]-V[b]&&(b=2),V[b]>=A[b])q[0]=0,q[1]=0,q[2]=1;else{for(A=0,V=at[b],U=U[b],at=[0,0,0],V=[V.g[0]-U.g[0],V.g[1]-U.g[1],V.g[2]-U.g[2]],dt=[0,0,0],b=O.e;b!==O;b=b.e)dt[0]=b.g[0]-U.g[0],dt[1]=b.g[1]-U.g[1],dt[2]=b.g[2]-U.g[2],at[0]=V[1]*dt[2]-V[2]*dt[1],at[1]=V[2]*dt[0]-V[0]*dt[2],at[2]=V[0]*dt[1]-V[1]*dt[0],At=at[0]*at[0]+at[1]*at[1]+at[2]*at[2],At>A&&(A=At,q[0]=at[0],q[1]=at[1],q[2]=at[2]);0>=A&&(q[0]=q[1]=q[2]=0,q[K(V)]=1)}O=!0}for(at=K(q),b=this.b.c,A=(at+1)%3,U=(at+2)%3,at=0<q[at]?1:-1,q=b.e;q!==b;q=q.e)q.b=q.g[A],q.a=at*q.g[U];if(O){for(q=0,O=this.b.a,b=O.b;b!==O;b=b.b)if(A=b.a,!(0>=A.f))do q+=(A.a.b-A.b.a.b)*(A.a.a+A.b.a.a),A=A.e;while(A!==b.a);if(0>q)for(q=this.b.c,O=q.e;O!==q;O=O.e)O.a=-O.a}for(this.n=!1,q=this.b.b,b=q.h;b!==q;b=O)O=b.h,A=b.e,n(b.a,b.b.a)&&b.e.e!==b&&(B(this,A,b),E(b),b=A,A=b.e),A.e===b&&(A!==b&&((A===O||A===O.b)&&(O=O.h),E(A)),(b===O||b===O.b)&&(O=O.h),E(b));for(this.e=q=new pe,O=this.b.c,b=O.e;b!==O;b=b.e)b.h=Zt(q,b);for(ye(q),this.f=new Pt(this),pt(this,-R),pt(this,R);(q=W(this.e))!==null;){for(;;){t:if(b=this.e,b.a===0)O=Ut(b.b);else if(O=b.c[b.d[b.a-1]],b.b.a!==0&&(b=Ut(b.b),a(b,O))){O=b;break t}if(O===null||!n(O,q))break;O=W(this.e),B(this,q.c,O.c)}rt(this,q)}for(this.a=this.f.a.a.b.a.a,q=0;(O=this.f.a.a.b)!==null;)O.h||++q,Z(O);for(this.f=null,q=this.e,q.b=null,q.d=null,this.e=q.c=null,q=this.b,b=q.a.b;b!==q.a;b=O)O=b.b,b=b.a,b.e.e===b&&(w(b.c,b),E(b));if(!this.n){if(q=this.b,this.m)for(b=q.b.h;b!==q.b;b=O)O=b.h,b.b.d.c!==b.d.c?b.f=b.d.c?1:-1:E(b);else for(b=q.a.b;b!==q.a;b=O)if(O=b.b,b.c){for(b=b.a;a(b.b.a,b.a);b=b.c.b);for(;a(b.a,b.b.a);b=b.e);for(A=b.c.b,U=void 0;b.e!==A;)if(a(b.b.a,A.a)){for(;A.e!==b&&(d(A.e)||0>=c(A.a,A.b.a,A.e.b.a));)U=y(A.e,A),A=U.b;A=A.c.b}else{for(;A.e!==b&&(_(b.c.b)||0<=c(b.b.a,b.a,b.c.b.a));)U=y(b,b.c.b),b=U.b;b=b.e}for(;A.e.e!==b;)U=y(A.e,A),A=U.b}if(this.h||this.i||this.k||this.l)if(this.m){for(q=this.b,O=q.a.b;O!==q.a;O=O.b)if(O.c){this.h&&this.h(2,this.c),b=O.a;do this.k&&this.k(b.a.d,this.c),b=b.e;while(b!==O.a);this.i&&this.i(this.c)}}else{for(q=this.b,O=!!this.l,b=!1,A=-1,U=q.a.d;U!==q.a;U=U.d)if(U.c){b||(this.h&&this.h(4,this.c),b=!0),at=U.a;do O&&(V=at.b.d.c?0:1,A!==V&&(A=V,this.l&&this.l(!!A,this.c))),this.k&&this.k(at.a.d,this.c),at=at.e;while(at!==U.a)}b&&this.i&&this.i(this.c)}if(this.r){for(q=this.b,b=q.a.b;b!==q.a;b=O)if(O=b.b,!b.c){A=b.a,U=A.e,at=void 0;do at=U,U=at.e,at.d=null,at.b.d===null&&(at.c===at?k(at.a,null):(at.a.c=at.c,P(at,oe(at))),V=at.b,V.c===V?k(V.a,null):(V.a.c=V.c,P(V,oe(V))),H(at));while(at!==A);A=b.d,b=b.b,b.d=A,A.b=b}this.r(this.b),this.c=this.b=null;return}}this.b=this.c=null};function re(b,A){if(b.d!==A)for(;b.d!==A;)if(b.d<A)switch(b.d){case Te:te(b,100151),b.u(null);break;case 1:te(b,100152),b.t()}else switch(b.d){case 2:te(b,100154),b.v();break;case 1:te(b,100153),b.w()}}function te(b,A){b.p&&b.p(A,b.c)}function de(b,A){this.b=b||this,this.d=A||this,this.a=null,this.c=!1}function ee(){this.h=this,this.i=this.d=this.a=this.e=this.c=this.b=null,this.f=0}function oe(b){return b.b.e}function $(){this.c=new De,this.a=new de,this.b=new ee,this.d=new ee,this.b.b=this.d,this.d.b=this.b}function De(b,A){this.e=b||this,this.f=A||this,this.d=this.c=null,this.g=[0,0,0],this.h=this.a=this.b=0}function pe(){this.c=[],this.d=null,this.a=0,this.e=!1,this.b=new C}function ye(b){b.d=[];for(var A=0;A<b.a;A++)b.d[A]=A;b.d.sort((function(U){return function(O,q){return a(U[O],U[q])?1:-1}})(b.c)),b.e=!0,Tt(b.b)}function Zt(b,A){if(b.e){var U=b.b,O=++U.a;2*O>U.f&&(U.f*=2,U.c=it(U.c,U.f+1));var q;return U.b===0?q=O:(q=U.b,U.b=U.c[U.b]),U.e[q]=A,U.c[q]=O,U.d[O]=q,U.h&&Ft(U,O),q}return U=b.a++,b.c[U]=A,-(U+1)}function W(b){if(b.a===0)return bt(b.b);var A=b.c[b.d[b.a-1]];if(b.b.a!==0&&a(Ut(b.b),A))return bt(b.b);do--b.a;while(0<b.a&&b.c[b.d[b.a-1]]===null);return A}function C(){this.d=it([0],33),this.e=[null,null],this.c=[0,0],this.a=0,this.f=32,this.b=0,this.h=!1,this.d[1]=1}function it(b,A){for(var U=Array(A),O=0;O<b.length;O++)U[O]=b[O];for(;O<A;O++)U[O]=0;return U}function Tt(b){for(var A=b.a;1<=A;--A)Kt(b,A);b.h=!0}function Ut(b){return b.e[b.d[1]]}function bt(b){var A=b.d,U=b.e,O=b.c,q=A[1],V=U[q];return 0<b.a&&(A[1]=A[b.a],O[A[1]]=1,U[q]=null,O[q]=b.b,b.b=q,0<--b.a&&Kt(b,1)),V}function Kt(b,A){for(var U=b.d,O=b.e,q=b.c,V=A,at=U[V];;){var dt=V<<1;dt<b.a&&a(O[U[dt+1]],O[U[dt]])&&(dt+=1);var At=U[dt];if(dt>b.a||a(O[at],O[At])){U[V]=at,q[at]=V;break}U[V]=At,q[At]=V,V=dt}}function Ft(b,A){for(var U=b.d,O=b.e,q=b.c,V=A,at=U[V];;){var dt=V>>1,At=U[dt];if(dt===0||a(O[At],O[at])){U[V]=at,q[at]=V;break}U[V]=At,q[At]=V,V=dt}}function qt(){this.e=this.a=null,this.f=0,this.c=this.b=this.h=this.d=!1}function Yt(b){return b.e.c.b}function Ot(b){return b.e.a.b}Bv.libtess={GluTesselator:zt,windingRule:{GLU_TESS_WINDING_ODD:100130,GLU_TESS_WINDING_NONZERO:100131,GLU_TESS_WINDING_POSITIVE:100132,GLU_TESS_WINDING_NEGATIVE:100133,GLU_TESS_WINDING_ABS_GEQ_TWO:100134},primitiveType:{GL_LINE_LOOP:2,GL_TRIANGLES:4,GL_TRIANGLE_STRIP:5,GL_TRIANGLE_FAN:6},errorType:{GLU_TESS_MISSING_BEGIN_POLYGON:100151,GLU_TESS_MISSING_END_POLYGON:100153,GLU_TESS_MISSING_BEGIN_CONTOUR:100152,GLU_TESS_MISSING_END_CONTOUR:100154,GLU_TESS_COORD_TOO_LARGE:100155,GLU_TESS_NEED_COMBINE_CALLBACK:100156},gluEnum:{GLU_TESS_MESH:100112,GLU_TESS_TOLERANCE:100142,GLU_TESS_WINDING_RULE:100140,GLU_TESS_BOUNDARY_ONLY:100141,GLU_INVALID_ENUM:100900,GLU_INVALID_VALUE:100901,GLU_TESS_BEGIN:100100,GLU_TESS_VERTEX:100101,GLU_TESS_END:100102,GLU_TESS_ERROR:100103,GLU_TESS_EDGE_FLAG:100104,GLU_TESS_COMBINE:100105,GLU_TESS_BEGIN_DATA:100106,GLU_TESS_VERTEX_DATA:100107,GLU_TESS_END_DATA:100108,GLU_TESS_ERROR_DATA:100109,GLU_TESS_EDGE_FLAG_DATA:100110,GLU_TESS_COMBINE_DATA:100111}},zt.prototype.gluDeleteTess=zt.prototype.x,zt.prototype.gluTessProperty=zt.prototype.B,zt.prototype.gluGetTessProperty=zt.prototype.y,zt.prototype.gluTessNormal=zt.prototype.A,zt.prototype.gluTessCallback=zt.prototype.z,zt.prototype.gluTessVertex=zt.prototype.C,zt.prototype.gluTessBeginPolygon=zt.prototype.u,zt.prototype.gluTessBeginContour=zt.prototype.t,zt.prototype.gluTessEndContour=zt.prototype.v,zt.prototype.gluTessEndPolygon=zt.prototype.w,s.exports=Bv.libtess})(Ux);var Wi=Ux.exports;class sR{process(t,n=!0,a=!1,o=!0){if(t.length===0)return{triangles:{vertices:[],indices:[]},contours:[]};const c=t.filter(u=>u.points.length>=3);return c.length===0?{triangles:{vertices:[],indices:[]},contours:[]}:(rn.log(`Tessellator: removeOverlaps=${n}, processing ${c.length} paths`),this.tessellate(c,n,a,o))}processContours(t,n=!0,a=!1,o=!0){return t.length===0?{triangles:{vertices:[],indices:[]},contours:[]}:this.tessellateContours(t,n,a,o)}tessellate(t,n,a,o){const c=!a&&!n;let u,f;c?(f=this.pathsToContours(t,!0),(n||o)&&(u=this.pathsToContours(t))):(u=this.pathsToContours(t),f=u);let p=o?c?f:u??this.pathsToContours(t):[];if(n){rn.log("Two-pass: boundary extraction then triangulation"),Oe.start("Tessellator.boundaryPass",{contourCount:f.length});const _=this.performTessellation(u,"boundary");if(Oe.end("Tessellator.boundaryPass"),!_)return rn.warn("libtess returned empty result from boundary pass"),{triangles:{vertices:[],indices:[]},contours:[]};f=this.boundaryToContours(_),o&&(p=f),rn.log(`Boundary pass created ${f.length} contours. Starting triangulation pass.`)}else rn.log(`Single-pass triangulation for ${a?"CFF":"TTF"}`);Oe.start("Tessellator.triangulationPass",{contourCount:f.length});const d=this.performTessellation(f,"triangles");if(Oe.end("Tessellator.triangulationPass"),!d){const _=n?"libtess returned empty result from triangulation pass":"libtess returned empty result from single-pass triangulation";return rn.warn(_),{triangles:{vertices:[],indices:[]},contours:p}}return{triangles:{vertices:d.vertices,indices:d.indices||[]},contours:p,contoursAreBoundary:n}}tessellateContours(t,n,a,o){const c=!a&&!n;let u,f;c?(f=this.reverseContours(t),(n||o)&&(u=t)):(u=t,f=t);let p=o?c?f:u??t:[];if(n){rn.log("Two-pass: boundary extraction then triangulation"),Oe.start("Tessellator.boundaryPass",{contourCount:f.length});const _=this.performTessellation(u,"boundary");if(Oe.end("Tessellator.boundaryPass"),!_)return rn.warn("libtess returned empty result from boundary pass"),{triangles:{vertices:[],indices:[]},contours:[]};f=this.boundaryToContours(_),o&&(p=f),rn.log(`Boundary pass created ${f.length} contours. Starting triangulation pass.`)}else rn.log(`Single-pass triangulation for ${a?"CFF":"TTF"}`);Oe.start("Tessellator.triangulationPass",{contourCount:f.length});const d=this.performTessellation(f,"triangles");if(Oe.end("Tessellator.triangulationPass"),!d){const _=n?"libtess returned empty result from triangulation pass":"libtess returned empty result from single-pass triangulation";return rn.warn(_),{triangles:{vertices:[],indices:[]},contours:p}}return{triangles:{vertices:d.vertices,indices:d.indices||[]},contours:p,contoursAreBoundary:n}}pathsToContours(t,n=!1){const a=new Array(t.length);for(let o=0;o<t.length;o++){const c=t[o].points,u=c.length,p=u>1&&c[0].x===c[u-1].x&&c[0].y===c[u-1].y?u-1:u,d=new Array((p+1)*2);let _=0;if(n)for(let g=p-1;g>=0;g--){const v=c[g];d[_++]=v.x,d[_++]=v.y}else for(let g=0;g<p;g++){const v=c[g];d[_++]=v.x,d[_++]=v.y}_>=2&&(d[_++]=d[0],d[_++]=d[1]),a[o]=d}return a}reverseContours(t){const n=new Array(t.length);for(let a=0;a<t.length;a++)n[a]=this.reverseContour(t[a]);return n}reverseContour(t){const n=t.length;if(n===0)return[];const o=n>=4&&t[0]===t[n-2]&&t[1]===t[n-1]?n-2:n;if(o===0)return[];const c=new Array(o+2);let u=0;for(let f=o-2;f>=0;f-=2)c[u++]=t[f],c[u++]=t[f+1];return u>=2&&(c[u++]=c[0],c[u++]=c[1]),c}performTessellation(t,n){const a=new Wi.GluTesselator;a.gluTessProperty(Wi.gluEnum.GLU_TESS_WINDING_RULE,Wi.windingRule.GLU_TESS_WINDING_NONZERO);const o=[],c=[],u=[];let f=[];n==="boundary"&&a.gluTessProperty(Wi.gluEnum.GLU_TESS_BOUNDARY_ONLY,!0),n==="triangles"?a.gluTessCallback(Wi.gluEnum.GLU_TESS_VERTEX_DATA,p=>{c.push(p)}):(a.gluTessCallback(Wi.gluEnum.GLU_TESS_BEGIN,()=>{f=[]}),a.gluTessCallback(Wi.gluEnum.GLU_TESS_VERTEX_DATA,p=>{f.push(p)}),a.gluTessCallback(Wi.gluEnum.GLU_TESS_END,()=>{f.length>0&&u.push(f)})),a.gluTessCallback(Wi.gluEnum.GLU_TESS_COMBINE,p=>{const d=o.length/2;return o.push(p[0],p[1]),d}),a.gluTessCallback(Wi.gluEnum.GLU_TESS_ERROR,p=>{rn.warn(`libtess error: ${p}`)}),a.gluTessNormal(0,0,1),a.gluTessBeginPolygon(null);for(const p of t){a.gluTessBeginContour();for(let d=0;d<p.length;d+=2){const _=o.length/2;o.push(p[d],p[d+1]),a.gluTessVertex([p[d],p[d+1],0],_)}a.gluTessEndContour()}return a.gluTessEndPolygon(),o.length===0?null:n==="triangles"?{vertices:o,indices:c}:{vertices:o,contourIndices:u}}boundaryToContours(t){if(!t.contourIndices)return[];const n=[];for(const a of t.contourIndices){const o=[];for(const c of a){const u=c*2;o.push(t.vertices[u],t.vertices[u+1])}o.length>2&&(o[0]!==o[o.length-2]||o[1]!==o[o.length-1])&&o.push(o[0],o[1]),n.push(o)}return n}needsWindingNormalization(t){if(t.length===0||t.length===1)return!1;let n=null;for(const a of t){const c=this.signedArea(a)>=0?1:-1;if(n===null)n=c;else if(c!==n)return!0}return!1}signedArea(t){let n=0;const a=t.length;if(a<6)return 0;for(let o=0;o<a;o+=2){const c=t[o],u=t[o+1],f=t[(o+2)%a],p=t[(o+3)%a];n+=c*p-f*u}return n/2}}class oR{constructor(){}extrude(t,n=0,a){const o=t.triangles.vertices,c=t.triangles.indices,u=t.contours,f=t.contoursAreBoundary===!0,p=o.length,d=p/2;let _=[],g=0,v=!1;if(n!==0)if(f&&u.length>0){v=!0;for(const w of u){const X=w.length>>1;X>=2&&(g+=X-1)}}else{const w=new Map,X=c.length;for(let Z=0;Z<X;Z+=3){const tt=c[Z],et=c[Z+1],Y=c[Z+2];let D,G;tt<et?D=tt<<16|et:D=et<<16|tt,G=tt<<16|et;let j=w.get(D);j===void 0?w.set(D,G):j!==null&&w.set(D,null),et<Y?D=et<<16|Y:D=Y<<16|et,G=et<<16|Y,j=w.get(D),j===void 0?w.set(D,G):j!==null&&w.set(D,null),Y<tt?D=Y<<16|tt:D=tt<<16|Y,G=Y<<16|tt,j=w.get(D),j===void 0?w.set(D,G):j!==null&&w.set(D,null)}_=[];for(const Z of w.values())Z!==null&&_.push(Z>>>16,Z&65535);g=_.length>>1}const S=g*4,M=(n===0?d:d*2)+S,y=new Float32Array(M*3),x=new Float32Array(M*3),P=n===0?c.length:c.length*2+g*6,N=new Uint32Array(P);if(n===0){for(let w=0,X=0;w<p;w+=2,X+=3)y[X]=o[w],y[X+1]=o[w+1],y[X+2]=0,x[X]=0,x[X+1]=0,x[X+2]=1;return N.set(c),{vertices:y,normals:x,indices:N}}const L=a*25e-6,H=n<=L?L:n,k=d*3;for(let w=0,X=0,Z=0;w<p;w+=2,X++,Z+=3){const tt=o[w],et=o[w+1];y[Z]=tt,y[Z+1]=et,y[Z+2]=0,x[Z]=0,x[Z+1]=0,x[Z+2]=-1;const Y=Z+k;y[Y]=tt,y[Y+1]=et,y[Y+2]=H,x[Y]=0,x[Y+1]=0,x[Y+2]=1}const z=c.length;for(let w=0;w<z;w++)N[w]=c[z-1-w];for(let w=0;w<z;w++)N[z+w]=c[w]+d;let K=d*2,R=z*2;if(v)for(const w of u){const X=w.length;if(!(X<4))for(let Z=0;Z<X-2;Z+=2){const tt=w[Z],et=w[Z+1],Y=w[Z+2],D=w[Z+3],G=Y-tt,j=D-et,ct=G*G+j*j;let ft=0,B=0;if(ct>1e-10){const Dt=1/Math.sqrt(ct);ft=j*Dt,B=-G*Dt}const J=K*3;y[J]=tt,y[J+1]=et,y[J+2]=0,y[J+3]=Y,y[J+4]=D,y[J+5]=0,y[J+6]=tt,y[J+7]=et,y[J+8]=H,y[J+9]=Y,y[J+10]=D,y[J+11]=H,x[J]=ft,x[J+1]=B,x[J+2]=0,x[J+3]=ft,x[J+4]=B,x[J+5]=0,x[J+6]=ft,x[J+7]=B,x[J+8]=0,x[J+9]=ft,x[J+10]=B,x[J+11]=0;const lt=K;N[R]=lt,N[R+1]=lt+1,N[R+2]=lt+2,N[R+3]=lt+1,N[R+4]=lt+3,N[R+5]=lt+2,R+=6,K+=4}}else for(let w=0;w<g;w++){const X=w<<1,Z=_[X],tt=_[X+1],et=Z<<1,Y=tt<<1,D=o[et],G=o[et+1],j=o[Y],ct=o[Y+1],ft=j-D,B=ct-G,J=ft*ft+B*B;let lt=0,Dt=0;if(J>1e-10){const pt=1/Math.sqrt(J);lt=B*pt,Dt=-ft*pt}const wt=K*3;y[wt]=D,y[wt+1]=G,y[wt+2]=0,y[wt+3]=j,y[wt+4]=ct,y[wt+5]=0,y[wt+6]=D,y[wt+7]=G,y[wt+8]=H,y[wt+9]=j,y[wt+10]=ct,y[wt+11]=H,x[wt]=lt,x[wt+1]=Dt,x[wt+2]=0,x[wt+3]=lt,x[wt+4]=Dt,x[wt+5]=0,x[wt+6]=lt,x[wt+7]=Dt,x[wt+8]=0,x[wt+9]=lt,x[wt+10]=Dt,x[wt+11]=0;const rt=K;N[R]=rt,N[R+1]=rt+1,N[R+2]=rt+2,N[R+3]=rt+1,N[R+4]=rt+3,N[R+5]=rt+2,R+=6,K+=4}return{vertices:y,normals:x,indices:N}}}const zv=.001;class lR{constructor(){}cluster(t,n){Oe.start("BoundaryClusterer.cluster",{glyphCount:t.length});const a=t.length;if(a===0)return Oe.end("BoundaryClusterer.cluster"),[];if(a===1)return Oe.end("BoundaryClusterer.cluster"),[[0]];const o=this.clusterSweepLine(t,n);return Oe.end("BoundaryClusterer.cluster"),o}clusterSweepLine(t,n){const a=t.length,o=new Array(a),c=new Array(2*a);let u=0;for(let S=0;S<a;S++)o[S]=this.getWorldBounds(t[S],n[S]),c[u++]=[o[S].minX,0,S],c[u++]=[o[S].maxX,1,S];c.sort((S,E)=>S[0]-E[0]||S[1]-E[1]);const f=Array.from({length:a},(S,E)=>E),p=new Array(a).fill(0);function d(S){return f[S]===S?S:f[S]=d(f[S])}function _(S,E){const M=d(S),y=d(E);M!==y&&(p[M]<p[y]?f[M]=y:p[M]>p[y]?f[y]=M:(f[y]=M,p[M]++))}const g=new Set;for(const[,S,E]of c)if(S===0){const M=o[E];for(const y of g){const x=o[y];M.minY<x.maxY+zv&&M.maxY>x.minY-zv&&_(E,y)}g.add(E)}else g.delete(E);const v=new Map;for(let S=0;S<a;S++){const E=d(S);let M=v.get(E);M||(M=[],v.set(E,M)),M.push(S)}return Array.from(v.values())}getWorldBounds(t,n){return{minX:t.bounds.min.x+n.x,minY:t.bounds.min.y+n.y,maxX:t.bounds.max.x+n.x,maxY:t.bounds.max.y+n.y}}}class cR{constructor(t){this.heap=[],this.itemIndex=new Map,this.compare=t}insert(t){const n=this.itemIndex.get(t);if(n!==void 0){this.siftUp(n),this.siftDown(n);return}const a=this.heap.length;this.heap.push(t),this.itemIndex.set(t,a),this.siftUp(a)}extractMin(){const t=this.heap.length;if(!t)return;if(t===1){const o=this.heap.pop();return this.itemIndex.clear(),o}const n=this.heap[0],a=this.heap.pop();return this.heap[0]=a,this.itemIndex.delete(n),this.itemIndex.set(a,0),this.siftDown(0),n}update(t){const n=this.itemIndex.get(t);if(n===void 0){this.insert(t);return}this.siftUp(n),this.siftDown(n)}isEmpty(){return!this.heap.length}swap(t,n){const a=this.heap[t],o=this.heap[n];this.heap[t]=o,this.heap[n]=a,this.itemIndex.set(a,n),this.itemIndex.set(o,t)}siftUp(t){const n=this.heap[t];for(;t>0;){const a=t-1>>1,o=this.heap[a];if(this.compare(n,o)>=0)break;this.heap[t]=o,this.itemIndex.set(o,t),t=a}this.heap[t]=n,this.itemIndex.set(n,t)}siftDown(t){const n=this.heap[t],a=this.heap.length,o=a>>1;for(;t<o;){const c=(t<<1)+1,u=c+1;let f=t,p=n;const d=this.heap[c];if(this.compare(d,p)<0&&(f=c,p=d),u<a){const _=this.heap[u];this.compare(_,p)<0&&(f=u,p=_)}if(f===t)break;this.heap[t]=p,this.itemIndex.set(p,t),t=f}this.heap[t]=n,this.itemIndex.set(n,t)}}const ou={enabled:!0,areaThreshold:1};class uR{constructor(t){this.stats={pointsRemovedByVisvalingam:0,originalPointCount:0},this.config=t}setConfig(t){this.config=t}optimizePath(t){if(t.points.length<=2||!this.config.enabled)return t;this.stats.originalPointCount+=t.points.length;const n=t.points;if(n.length<5)return t;let a=n;return a=this.simplifyPathVW(a,this.config.areaThreshold),a.length<3?t:{...t,points:a}}simplifyPathVW(t,n){if(t.length<=3)return t;const a=t.length,o=3,c=t.map((g,v)=>({index:v,area:1/0,prev:null,next:null}));for(let g=0;g<c.length;g++)c[g].prev=c[g-1]||null,c[g].next=c[g+1]||null;const u=new cR((g,v)=>g.area-v.area);for(let g=1;g<c.length-1;g++){const v=c[g];v.area=this.calculateTriangleArea(t[v.prev.index],t[v.index],t[v.next.index]),u.insert(v)}let f=a;for(;!u.isEmpty()&&f>o;){const g=u.extractMin();if(!g||g.area>n)break;g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),f--,g.prev&&g.prev.prev&&(g.prev.area=this.calculateTriangleArea(t[g.prev.prev.index],t[g.prev.index],t[g.next.index]),u.update(g.prev)),g.next&&g.next.next&&(g.next.area=this.calculateTriangleArea(t[g.prev.index],t[g.next.index],t[g.next.next.index]),u.update(g.next))}const p=[];let d=c[0];for(;d;)p.push(t[d.index]),d=d.next;const _=a-p.length;return this.stats.pointsRemovedByVisvalingam+=_,p}calculateTriangleArea(t,n,a){return Math.abs((t.x*(n.y-a.y)+n.x*(a.y-t.y)+a.x*(t.y-n.y))/2)}getStats(){return{...this.stats}}resetStats(){this.stats={pointsRemovedByVisvalingam:0,originalPointCount:0}}}const qi={distanceTolerance:.5,angleTolerance:.2},dr=1e-6,Gv=16;class fR{constructor(t){this.curveSteps=null,this.curveFidelityConfig={...qi,...t}}setCurveFidelityConfig(t){this.curveFidelityConfig={...qi,...t}}setCurveSteps(t){if(t==null){this.curveSteps=null;return}if(!Number.isFinite(t)){this.curveSteps=null;return}const n=Math.round(t);this.curveSteps=n>=1?n:null}polygonizeQuadratic(t,n,a){if(this.curveSteps!==null)return this.polygonizeQuadraticFixedSteps(t,n,a,this.curveSteps);const o=[];return this.recursiveQuadratic(t.x,t.y,n.x,n.y,a.x,a.y,o),this.addPoint(a.x,a.y,o),o}polygonizeCubic(t,n,a,o){if(this.curveSteps!==null)return this.polygonizeCubicFixedSteps(t,n,a,o,this.curveSteps);const c=[];return this.recursiveCubic(t.x,t.y,n.x,n.y,a.x,a.y,o.x,o.y,c),this.addPoint(o.x,o.y,c),c}lerp(t,n,a){return t+(n-t)*a}polygonizeQuadraticFixedSteps(t,n,a,o){const c=[];for(let u=1;u<=o;u++){const f=u/o,p=this.lerp(t.x,n.x,f),d=this.lerp(t.y,n.y,f),_=this.lerp(n.x,a.x,f),g=this.lerp(n.y,a.y,f),v=this.lerp(p,_,f),S=this.lerp(d,g,f);this.addPoint(v,S,c)}return c}polygonizeCubicFixedSteps(t,n,a,o,c){const u=[];for(let f=1;f<=c;f++){const p=f/c,d=this.lerp(t.x,n.x,p),_=this.lerp(t.y,n.y,p),g=this.lerp(n.x,a.x,p),v=this.lerp(n.y,a.y,p),S=this.lerp(a.x,o.x,p),E=this.lerp(a.y,o.y,p),M=this.lerp(d,g,p),y=this.lerp(_,v,p),x=this.lerp(g,S,p),P=this.lerp(v,E,p),N=this.lerp(M,x,p),L=this.lerp(y,P,p);this.addPoint(N,L,u)}return u}recursiveQuadratic(t,n,a,o,c,u,f,p=0){if(p>Gv)return;const d=(t+a)/2,_=(n+o)/2,g=(a+c)/2,v=(o+u)/2,S=(d+g)/2,E=(_+v)/2,M=c-t,y=u-n,x=Math.abs((a-c)*y-(o-u)*M),P=this.curveFidelityConfig.distanceTolerance??qi.distanceTolerance,N=P*P;if(x>dr){if(x*x<=N*(M*M+y*y)){const L=this.curveFidelityConfig.angleTolerance??qi.angleTolerance;if(L>0){const H=a-t,k=o-n,z=c-a,K=u-o;if(Math.abs(Math.atan2(H*K-k*z,H*z+k*K))<L){this.addPoint(a,o,f);return}}else{this.addPoint(a,o,f);return}}}else{const L=M*M+y*y;if(L===0){if((a-t)*(a-t)+(o-n)*(o-n)<=N){this.addPoint(a,o,f);return}}else{const H=((a-t)*M+(o-n)*y)/L;if(H>0&&H<1&&x*x<=N*L){this.addPoint(a,o,f);return}}}this.recursiveQuadratic(t,n,d,_,S,E,f,p+1),this.recursiveQuadratic(S,E,g,v,c,u,f,p+1)}recursiveCubic(t,n,a,o,c,u,f,p,d,_=0){if(_>Gv)return;const g=(t+a)/2,v=(n+o)/2,S=(a+c)/2,E=(o+u)/2,M=(c+f)/2,y=(u+p)/2,x=(g+S)/2,P=(v+E)/2,N=(S+M)/2,L=(E+y)/2,H=(x+N)/2,k=(P+L)/2,z=f-t,K=p-n,R=Math.abs((a-f)*K-(o-p)*z),w=Math.abs((c-f)*K-(u-p)*z),X=this.curveFidelityConfig.distanceTolerance??qi.distanceTolerance,Z=X*X;let tt=0;switch(R>dr&&(tt|=1),w>dr&&(tt|=2),tt){case 0:const et=z*z+K*K;if(et===0){const Y=(a-t)*(a-t)+(o-n)*(o-n),D=(c-t)*(c-t)+(u-n)*(u-n);if(Y<=Z&&D<=Z){this.addPoint(a,o,d),this.addPoint(c,u,d);return}}else{const Y=((a-t)*z+(o-n)*K)/et,D=((c-t)*z+(u-n)*K)/et;if(Y>0&&Y<1&&D>0&&D<1&&(R+w)*(R+w)<=Z*et){this.addPoint(a,o,d),this.addPoint(c,u,d);return}}break;case 1:if(w*w<=Z*(z*z+K*K)){const Y=this.curveFidelityConfig.angleTolerance??qi.angleTolerance;if(Y>0){const D=c-a,G=u-o,j=f-c,ct=p-u;if(Math.abs(Math.atan2(D*ct-G*j,D*j+G*ct))<Y){this.addPoint(a,o,d),this.addPoint(c,u,d);return}}else{this.addPoint(a,o,d),this.addPoint(c,u,d);return}}break;case 2:if(R*R<=Z*(z*z+K*K)){const Y=this.curveFidelityConfig.angleTolerance??qi.angleTolerance;if(Y>0){const D=a-t,G=o-n,j=c-a,ct=u-o;if(Math.abs(Math.atan2(D*ct-G*j,D*j+G*ct))<Y){this.addPoint(a,o,d),this.addPoint(c,u,d);return}}else{this.addPoint(a,o,d),this.addPoint(c,u,d);return}}break;case 3:if((R+w)*(R+w)<=Z*(z*z+K*K)){const Y=this.curveFidelityConfig.angleTolerance??qi.angleTolerance;if(Y>0){const D=a-t,G=o-n,j=c-a,ct=u-o,ft=Math.abs(Math.atan2(D*ct-G*j,D*j+G*ct)),B=j,J=ct,lt=f-c,Dt=p-u,wt=Math.abs(Math.atan2(B*Dt-J*lt,B*lt+J*Dt));if(ft+wt<Y){this.addPoint(a,o,d),this.addPoint(c,u,d);return}}else{this.addPoint(a,o,d),this.addPoint(c,u,d);return}}break}this.recursiveCubic(t,n,g,v,x,P,H,k,d,_+1),this.recursiveCubic(H,k,N,L,M,y,f,p,d,_+1)}addPoint(t,n,a){const o=new Zn(t,n);if(a.length===0){a.push(o);return}const c=a[a.length-1],u=o.x-c.x,f=o.y-c.y;u*u+f*f>dr*dr&&a.push(o)}}class hR{constructor(t,n){this.currentGlyphId=0,this.currentTextIndex=0,this.currentGlyphPaths=[],this.currentPath=null,this.currentPoint=null,this.currentGlyphBounds={min:new Zn(1/0,1/0),max:new Zn(-1/0,-1/0)},this.collectedGlyphs=[],this.glyphPositions=[],this.glyphTextIndices=[],this.currentPosition=new Zn(0,0),this.polygonizer=new fR(t),this.pathOptimizer=new uR({...ou,...n})}setPosition(t,n){this.currentPosition.set(t,n)}updatePosition(t,n){this.currentPosition.x+=t,this.currentPosition.y+=n}beginGlyph(t,n){this.currentGlyphPaths.length>0&&this.finishGlyph(),this.currentGlyphId=t,this.currentTextIndex=n,this.currentGlyphPaths=[],this.currentGlyphBounds.min.set(1/0,1/0),this.currentGlyphBounds.max.set(-1/0,-1/0),this.glyphPositions.push(this.currentPosition.clone()),Oe.start("Glyph.polygonizeAndOptimize",{glyphId:t,textIndex:n})}finishGlyph(){this.currentPath&&this.finishPath(),this.currentGlyphPaths.length>0&&(this.collectedGlyphs.push({glyphId:this.currentGlyphId,paths:this.currentGlyphPaths,bounds:{min:{x:this.currentGlyphBounds.min.x,y:this.currentGlyphBounds.min.y},max:{x:this.currentGlyphBounds.max.x,y:this.currentGlyphBounds.max.y}}}),this.glyphTextIndices.push(this.currentTextIndex)),Oe.end("Glyph.polygonizeAndOptimize"),this.currentGlyphPaths=[]}onMoveTo(t,n){this.currentPath&&this.finishPath(),this.currentPoint=new Zn(t,n),this.updateBounds(this.currentPoint),this.currentPath={points:[this.currentPoint],glyphIndex:this.currentGlyphId}}onLineTo(t,n){if(!this.currentPath||!this.currentPoint)return;const a=new Zn(t,n);this.updateBounds(a),this.currentPath.points.push(a),this.currentPoint=a}onQuadTo(t,n,a,o){if(!this.currentPath||!this.currentPoint)return;const c=this.currentPoint,u=new Zn(t,n),f=new Zn(a,o),p=f.x-c.x,d=f.y-c.y;if(Math.abs((u.x-f.x)*d-(u.y-f.y)*p)<dr){this.onLineTo(a,o);return}const g=this.polygonizer.polygonizeQuadratic(c,u,f);for(let v=0;v<g.length;v++){const S=g[v];this.updateBounds(S),this.currentPath.points.push(S)}this.currentPoint=f}onCubicTo(t,n,a,o,c,u){if(!this.currentPath||!this.currentPoint)return;const f=this.currentPoint,p=new Zn(t,n),d=new Zn(a,o),_=new Zn(c,u),g=_.x-f.x,v=_.y-f.y,S=Math.abs((p.x-_.x)*v-(p.y-_.y)*g),E=Math.abs((d.x-_.x)*v-(d.y-_.y)*g);if(S<dr&&E<dr){this.onLineTo(c,u);return}const M=this.polygonizer.polygonizeCubic(f,p,d,_);for(let y=0;y<M.length;y++){const x=M[y];this.updateBounds(x),this.currentPath.points.push(x)}this.currentPoint=_}onClosePath(){if(!this.currentPath||!this.currentPoint)return;const t=this.currentPath.points[0];this.currentPoint.equals(t)||this.currentPath.points.push(t),this.finishPath()}finishPath(){if(this.currentPath){const t=this.pathOptimizer.optimizePath(this.currentPath);this.currentGlyphPaths.push(t),this.currentPath=null,this.currentPoint=null}}updateBounds(t){this.currentGlyphBounds.min.x=Math.min(this.currentGlyphBounds.min.x,t.x),this.currentGlyphBounds.min.y=Math.min(this.currentGlyphBounds.min.y,t.y),this.currentGlyphBounds.max.x=Math.max(this.currentGlyphBounds.max.x,t.x),this.currentGlyphBounds.max.y=Math.max(this.currentGlyphBounds.max.y,t.y)}getCollectedGlyphs(){return this.currentGlyphPaths.length>0&&this.finishGlyph(),this.collectedGlyphs}getGlyphPositions(){return this.glyphPositions}getTextIndices(){return this.glyphTextIndices}reset(){this.collectedGlyphs=[],this.glyphPositions=[],this.glyphTextIndices=[],this.currentGlyphPaths=[],this.currentPath=null,this.currentPoint=null,this.currentGlyphId=0,this.currentTextIndex=0,this.currentPosition.set(0,0),this.currentGlyphBounds={min:new Zn(1/0,1/0),max:new Zn(-1/0,-1/0)}}setCurveFidelityConfig(t){this.polygonizer.setCurveFidelityConfig(t)}setCurveSteps(t){this.polygonizer.setCurveSteps(t)}setGeometryOptimization(t){this.pathOptimizer.setConfig({...ou,...t})}getOptimizationStats(){return this.pathOptimizer.getStats()}}class dR{constructor(){this.moveTo_func=null,this.lineTo_func=null,this.quadTo_func=null,this.cubicTo_func=null,this.closePath_func=null,this.drawFuncsPtr=0,this.position={x:0,y:0}}setPosition(t,n){this.position.x=t,this.position.y=n,this.collector&&this.collector.setPosition(t,n)}updatePosition(t,n){this.position.x+=t,this.position.y+=n,this.collector&&this.collector.updatePosition(t,n)}setCollector(t){this.collector=t}createDrawFuncs(t,n){if(!t||!t.module||!t.hb)throw new Error("Invalid font object");if(this.collector=n,this.drawFuncsPtr)return;const a=t.module;this.moveTo_func=a.addFunction((o,c,u,f,p)=>{this.collector?.onMoveTo(f,p)},"viiiffi"),this.lineTo_func=a.addFunction((o,c,u,f,p)=>{this.collector?.onLineTo(f,p)},"viiiffi"),this.quadTo_func=a.addFunction((o,c,u,f,p,d,_)=>{this.collector?.onQuadTo(f,p,d,_)},"viiiffffi"),this.cubicTo_func=a.addFunction((o,c,u,f,p,d,_,g,v)=>{this.collector?.onCubicTo(f,p,d,_,g,v)},"viiiffffffi"),this.closePath_func=a.addFunction((o,c,u)=>{this.collector?.onClosePath()},"viiii"),this.drawFuncsPtr=a.exports.hb_draw_funcs_create(),a.exports.hb_draw_funcs_set_move_to_func(this.drawFuncsPtr,this.moveTo_func,0,0),a.exports.hb_draw_funcs_set_line_to_func(this.drawFuncsPtr,this.lineTo_func,0,0),a.exports.hb_draw_funcs_set_quadratic_to_func(this.drawFuncsPtr,this.quadTo_func,0,0),a.exports.hb_draw_funcs_set_cubic_to_func(this.drawFuncsPtr,this.cubicTo_func,0,0),a.exports.hb_draw_funcs_set_close_path_func(this.drawFuncsPtr,this.closePath_func,0,0)}getDrawFuncsPtr(){if(!this.drawFuncsPtr)throw new Error("Draw functions not initialized");return this.drawFuncsPtr}destroy(t){if(!t||!t.module||!t.hb)return;const n=t.module;try{this.drawFuncsPtr&&(n.exports.hb_draw_funcs_destroy(this.drawFuncsPtr),this.drawFuncsPtr=0),this.moveTo_func!==null&&(n.removeFunction(this.moveTo_func),this.moveTo_func=null),this.lineTo_func!==null&&(n.removeFunction(this.lineTo_func),this.lineTo_func=null),this.quadTo_func!==null&&(n.removeFunction(this.quadTo_func),this.quadTo_func=null),this.cubicTo_func!==null&&(n.removeFunction(this.cubicTo_func),this.cubicTo_func=null),this.closePath_func!==null&&(n.removeFunction(this.closePath_func),this.closePath_func=null)}catch(a){rn.warn("Error destroying draw callbacks:",a)}this.collector=void 0}}const Hv=new WeakMap;function pR(s){const t=s.module,n=Hv.get(t);if(n)return n;const a=new dR;return Hv.set(t,a),a}class mR{constructor(t,n){this.fontId="default",this.cacheKeyPrefix="default",this.emptyGlyphs=new Set,this.clusterPositions=[],this.clusterContoursScratch=[],this.taskScratch=[],this.cache=t,this.loadedFont=n,this.tessellator=new sR,this.extruder=new oR,this.clusterer=new lR,this.collector=new hR,this.drawCallbacks=pR(this.loadedFont),this.drawCallbacks.createDrawFuncs(this.loadedFont,this.collector),this.contourCache=nR,this.wordCache=iR,this.clusteringCache=aR}getOptimizationStats(){return this.collector.getOptimizationStats()}setCurveFidelityConfig(t){this.curveFidelityConfig=t,this.collector.setCurveFidelityConfig(t),this.updateCacheKeyPrefix()}setCurveSteps(t){if(t==null)this.curveSteps=void 0;else if(!Number.isFinite(t))this.curveSteps=void 0;else{const n=Math.round(t);this.curveSteps=n>=1?n:void 0}this.collector.setCurveSteps(this.curveSteps),this.updateCacheKeyPrefix()}setGeometryOptimization(t){this.geometryOptimizationOptions=t,this.collector.setGeometryOptimization(t),this.updateCacheKeyPrefix()}setFontId(t){this.fontId=t,this.updateCacheKeyPrefix()}updateCacheKeyPrefix(){this.cacheKeyPrefix=`${this.fontId}__${this.getGeometryConfigSignature()}`}getGeometryConfigSignature(){const t=(()=>{if(this.curveSteps!==void 0)return`cf:steps:${this.curveSteps}`;const o=this.curveFidelityConfig?.distanceTolerance??qi.distanceTolerance,c=this.curveFidelityConfig?.angleTolerance??qi.angleTolerance;return`cf:${o.toFixed(4)},${c.toFixed(4)}`})(),n=this.geometryOptimizationOptions?.enabled??ou.enabled,a=this.geometryOptimizationOptions?.areaThreshold??ou.areaThreshold;return[t,`opt:${n?1:0},${a.toFixed(4)}`].join("|")}buildInstancedGeometry(t,n,a,o,c,u=!1,f){if(Yi){let z=0;for(let K=0;K<t.length;K++)z+=t[K].length;Oe.start("GlyphGeometryBuilder.buildInstancedGeometry",{lineCount:t.length,wordCount:z,depth:n,removeOverlaps:a})}else Oe.start("GlyphGeometryBuilder.buildInstancedGeometry");const p=this.taskScratch;p.length=0;let d=0,_=0,g=0,v=0,S=0;const E=(z,K,R,w)=>{const X=S;let Z=p[d];return Z?(Z.data=z,Z.px=K,Z.py=R,Z.pz=w,Z.vertexStart=X):(Z={data:z,px:K,py:R,pz:w,vertexStart:X},p[d]=Z),d++,_+=z.vertices.length,g+=z.normals.length,v+=z.indices.length,S+=z.vertices.length/3,X},M=[],y={min:{x:1/0,y:1/0,z:0},max:{x:-1/0,y:-1/0,z:n}};for(let z=0;z<t.length;z++){const K=t[z];for(const R of K){const w=R.position.x,X=R.position.y,Z=R.position.z,tt=[];for(const G of R.glyphs)tt.push(this.getContoursForGlyph(G.g));let et;if(R.glyphs.length<=1)et=[[0]];else{const G=`${this.cacheKeyPrefix}_${R.text}`,j=this.clusteringCache.get(G);let ct=!1;if(j&&j.glyphIds.length===R.glyphs.length){ct=!0;for(let ft=0;ft<R.glyphs.length;ft++){const B=R.glyphs[ft],J=j.positions[ft];if(j.glyphIds[ft]!==B.g||J.x!==(B.x??0)||J.y!==(B.y??0)){ct=!1;break}}}if(ct&&j)et=j.groups;else{const ft=R.glyphs.length;if(this.clusterPositions.length<ft)for(let B=this.clusterPositions.length;B<ft;B++)this.clusterPositions.push(new jr(0,0,0));this.clusterPositions.length=ft;for(let B=0;B<ft;B++){const J=R.glyphs[B],lt=this.clusterPositions[B];lt.x=J.x??0,lt.y=J.y??0,lt.z=0}et=this.clusterer.cluster(tt,this.clusterPositions),this.clusteringCache.set(G,{glyphIds:R.glyphs.map(B=>B.g),positions:R.glyphs.map(B=>({x:B.x??0,y:B.y??0})),groups:et})}}const Y=u;let D=et;if(f&&f.size>0){D=[];for(const G of et)if(G.length<=1)D.push(G);else{const j=[],ct=[];for(const ft of G){const B=R.glyphs[ft];f.has(B.absoluteTextIndex)?j.push(ft):ct.push(ft)}j.length>0&&D.push(j),ct.length>0&&D.push(ct)}}for(const G of D)if(G.length>1&&!Y){const ft=G.map(It=>R.glyphs[It]),B=this.getClusterKey(ft,n,a);let J=this.wordCache.get(B);if(!J){const It=this.clusterContoursScratch;let Bt=0;const zt=ft[0].x??0,Te=ft[0].y??0;for(let re=0;re<G.length;re++){const te=G[re],de=tt[te],ee=R.glyphs[te],oe=(ee.x??0)-zt,$=(ee.y??0)-Te;for(const De of de.paths){const pe=De.points,ye=pe.length;if(ye<3)continue;const W=ye>1&&pe[0].x===pe[ye-1].x&&pe[0].y===pe[ye-1].y?ye-1:ye,C=(W+1)*2;let it=It[Bt];!it||it.length<C?(it=new Array(C),It[Bt]=it):it.length=C;let Tt=0;for(let Ut=0;Ut<W;Ut++){const bt=pe[Ut];it[Tt++]=bt.x+oe,it[Tt++]=bt.y+$}Tt>=2&&(it[Tt++]=it[0],it[Tt++]=it[1]),Bt++}}It.length=Bt,J=this.tessellateGlyphCluster(It,n,o),this.wordCache.set(B,J)}const lt=ft[0],Dt=w+(lt.x??0),wt=X+(lt.y??0),pt=E(J,Dt,wt,Z),Pt=J.vertices.length/3;for(let It=0;It<G.length;It++){const Bt=G[It],zt=R.glyphs[Bt],Te=tt[Bt],re=w+(zt.x??0),te=X+(zt.y??0),de=Z,ee=this.createGlyphInfo(zt,pt,Pt,re,te,de,Te,n);M.push(ee),this.updatePlaneBounds(ee.bounds,y)}}else for(const ft of G){const B=R.glyphs[ft],J=tt[ft],lt=w+(B.x??0),Dt=X+(B.y??0),wt=Z;if(J.paths.length===0){const Bt=this.createGlyphInfo(B,0,0,lt,Dt,wt,J,n);M.push(Bt);continue}const rt=tR(this.cacheKeyPrefix,B.g,n,a);let pt=this.cache.get(rt);pt?pt.useCount++:(pt=this.tessellateGlyph(J,n,a,o),this.cache.set(rt,pt));const Pt=E(pt,lt,Dt,wt),It=this.createGlyphInfo(B,Pt,pt.vertices.length/3,lt,Dt,wt,J,n);M.push(It),this.updatePlaneBounds(It.bounds,y)}}}p.length=d;const x=new Float32Array(_),P=new Float32Array(g),N=new Uint32Array(v);let L=0,H=0,k=0;for(let z=0;z<p.length;z++){const K=p[z],R=K.data.vertices,w=K.data.normals,X=K.data.indices,Z=K.px,tt=K.py,et=K.pz,Y=Z*c,D=tt*c,G=et*c,j=R.length;let ct=L;for(let lt=0;lt<j;lt+=3)x[ct]=R[lt]*c+Y,x[ct+1]=R[lt+1]*c+D,x[ct+2]=R[lt+2]*c+G,ct+=3;L=ct,P.set(w,H),H+=w.length;const ft=K.vertexStart,B=X.length;let J=k;for(let lt=0;lt<B;lt++)N[J++]=X[lt]+ft;k=J}Oe.end("GlyphGeometryBuilder.buildInstancedGeometry"),y.min.x*=c,y.min.y*=c,y.min.z*=c,y.max.x*=c,y.max.y*=c,y.max.z*=c;for(let z=0;z<M.length;z++)M[z].bounds.min.x*=c,M[z].bounds.min.y*=c,M[z].bounds.min.z*=c,M[z].bounds.max.x*=c,M[z].bounds.max.y*=c,M[z].bounds.max.z*=c;return{vertices:x,normals:P,indices:N,glyphInfos:M,planeBounds:y}}getClusterKey(t,n,a){if(t.length===0)return"";const o=t[0].x??0,c=t[0].y??0,f=t.map(d=>{const _=(d.x??0)-o,g=(d.y??0)-c;return`${d.g}:${_},${g}`}).join("|"),p=Math.round(n*1e3)/1e3;return`${this.cacheKeyPrefix}_${f}_${p}_${a}`}createGlyphInfo(t,n,a,o,c,u,f,p){return{textIndex:t.absoluteTextIndex,lineIndex:t.lineIndex,vertexStart:n,vertexCount:a,bounds:{min:{x:f.bounds.min.x+o,y:f.bounds.min.y+c,z:u},max:{x:f.bounds.max.x+o,y:f.bounds.max.y+c,z:u+p}}}}getContoursForGlyph(t){if(this.emptyGlyphs.has(t))return{glyphId:t,paths:[],bounds:{min:{x:0,y:0},max:{x:0,y:0}}};const n=`${this.cacheKeyPrefix}_${t}`,a=this.contourCache.get(n);if(a)return a;this.drawCallbacks.setCollector(this.collector),this.collector.reset(),this.collector.beginGlyph(t,0),this.loadedFont.module.exports.hb_font_draw_glyph(this.loadedFont.font.ptr,t,this.drawCallbacks.getDrawFuncsPtr(),0),this.collector.finishGlyph();const c=this.collector.getCollectedGlyphs()[0]||{glyphId:t,paths:[],bounds:{min:{x:0,y:0},max:{x:0,y:0}}};return c.paths.length===0&&this.emptyGlyphs.add(t),this.contourCache.set(n,c),c}tessellateGlyphCluster(t,n,a){const o=this.tessellator.processContours(t,!0,a,n!==0);return this.extrudeAndPackage(o,n)}extrudeAndPackage(t,n){Oe.start("Extruder.extrude",{depth:n,upem:this.loadedFont.upem});const a=this.extruder.extrude(t,n,this.loadedFont.upem);Oe.end("Extruder.extrude");const o=a.vertices;let c=1/0,u=1/0,f=1/0,p=-1/0,d=-1/0,_=-1/0;for(let S=0;S<o.length;S+=3){const E=o[S],M=o[S+1],y=o[S+2];E<c&&(c=E),E>p&&(p=E),M<u&&(u=M),M>d&&(d=M),y<f&&(f=y),y>_&&(_=y)}const g=new jr(c,u,f),v=new jr(p,d,_);return{geometry:t,vertices:a.vertices,normals:a.normals,indices:a.indices,bounds:{min:g,max:v},useCount:1}}tessellateGlyph(t,n,a,o){Oe.start("GlyphGeometryBuilder.tessellateGlyph",{glyphId:t.glyphId,pathCount:t.paths.length});const c=this.tessellator.process(t.paths,a,o,n!==0);return Oe.end("GlyphGeometryBuilder.tessellateGlyph"),this.extrudeAndPackage(c,n)}updatePlaneBounds(t,n){const a=n.min,o=n.max,c=t.min,u=t.max;c.x<a.x&&(a.x=c.x),c.y<a.y&&(a.y=c.y),c.z<a.z&&(a.z=c.z),u.x>o.x&&(o.x=u.x),u.y>o.y&&(o.y=u.y),u.z>o.z&&(o.z=u.z)}getCacheStats(){return this.cache.getStats()}clearCache(){this.cache.clear(),this.wordCache.clear(),this.clusteringCache.clear(),this.contourCache.clear()}}class gR{constructor(t,n){this.cachedSpaceWidth=new Map,this.loadedFont=t,this.geometryBuilder=n}shapeLines(t,n,a,o,c,u,f){Oe.start("TextShaper.shapeLines",{lineCount:t.length});try{const p=[];return t.forEach((d,_)=>{const g=this.shapeLineIntoClusters(d,_,n,a,o,c);p.push(g)}),p}finally{Oe.end("TextShaper.shapeLines")}}shapeLineIntoClusters(t,n,a,o,c,u){const f=this.loadedFont.hb.createBuffer();u==="rtl"&&f.setDirection("rtl"),f.addText(t.text),f.guessSegmentProperties();const p=rp(this.loadedFont.fontFeatures);this.loadedFont.hb.shape(this.loadedFont.font,f,p);const d=f.json(this.loadedFont.font);f.destroy();const _=[];let g=[],v=[],S=0,E=0,M=t.xOffset,y=-n*a;const x=0,P=o*this.loadedFont.upem,N=this.calculateSpaceAdjustment(t,c,o),L=this.calculateCJKAdjustment(t,c),H=t.text,k=H.length,z=d.length;let K;for(let R=0;R<z;R++){const w=d[R],X=w.cl,Z=H[X],tt=Z.charCodeAt(0),et=tt===32||tt===9||tt===10||tt===13;t.endedWithHyphen&&X===k-1&&Z==="-"?w.absoluteTextIndex=t.originalEnd:w.absoluteTextIndex=t.originalStart+X,w.lineIndex=n,et&&g.length>0&&(_.push({text:v.join(""),glyphs:g,position:new jr(S,E,x)}),g=[],v=[]);const Y=M+w.dx,D=y+w.dy;if(et||(g.length===0&&(S=Y,E=D),w.x=Y-S,w.y=D-E,g.push(w),v.push(Z)),M+=w.ax,y+=w.ay,P!==0&&R<z-1&&(M+=P),et&&(M+=N),L!==0&&R<z-1&&!et){const G=d[R+1],j=H[G.cl],ct=K!==void 0?K:Vr.isCJK(Z);if(K=j?Vr.isCJK(j):!1,ct&&K){let ft=!0;Vr.isCJClosingPunctuation(j)&&(ft=!1),Vr.isCJOpeningPunctuation(Z)&&(ft=!1),Vr.isCJPunctuation(Z)&&Vr.isCJPunctuation(j)&&(ft=!1),ft&&(M+=L)}}else K=void 0}return g.length>0&&_.push({text:v.join(""),glyphs:g,position:new jr(S,E,x)}),_}calculateSpaceAdjustment(t,n,a){let o=0;if(t.adjustmentRatio!==void 0&&n==="justify"&&!t.isLastLine){let c=this.cachedSpaceWidth.get(a);c===void 0&&(c=ru.measureTextWidth(this.loadedFont," ",a),this.cachedSpaceWidth.set(a,c));const u=c,f=ip,p=ap;t.adjustmentRatio>0?o=t.adjustmentRatio*u*f:t.adjustmentRatio<0&&(o=t.adjustmentRatio*u*p)}return o}calculateCJKAdjustment(t,n){if(t.adjustmentRatio===void 0||n!=="justify"||t.isLastLine)return 0;const a=this.loadedFont.upem,o=a*.04,c=a*.04;return t.adjustmentRatio>0?t.adjustmentRatio*o:t.adjustmentRatio<0?t.adjustmentRatio*c:0}clearCache(){this.geometryBuilder.clearCache()}getCacheStats(){return this.geometryBuilder.getCacheStats()}}async function Dx(s){try{const t=await fetch(s);if(!t.ok)throw new Error(`HTTP ${t.status}`);return await t.arrayBuffer()}catch(t){const n=globalThis.require;if(typeof n!="function")throw new Error(`Failed to fetch ${s}: ${t}`);try{const a=n("fs"),o=n("path");let c=s;if(typeof window<"u"&&window.location?.protocol==="file:"){const f=o.dirname(window.location.pathname);c=o.join(f,s)}const u=a.readFileSync(c);return u instanceof ArrayBuffer?u:u.buffer.slice(u.byteOffset,u.byteOffset+u.byteLength)}catch(a){throw new Error(`Failed to load ${s}: fetch failed (${t}), fs.readFileSync failed (${a})`)}}}var Lx={exports:{}},_R={};const vR=(...s)=>{const t=typeof globalThis<"u"?globalThis.require:void 0;if(typeof t=="function")return t("fs").readFileSync(...s);throw new Error("fs not available in this environment")};var xR=Object.freeze({__proto__:null,default:_R,readFileSync:vR}),yR=rR(xR);(function(s,t){var n=(()=>{var a=typeof document<"u"?document.currentScript?.src:void 0;return async function(o={}){var c,u=o,f=typeof window=="object",p=typeof WorkerGlobalScope<"u",d=typeof process=="object"&&process.versions?.node&&process.type!="renderer",_=(st,Wt)=>{throw Wt};typeof __filename<"u"?a=__filename:p&&(a=self.location.href);var g="";function v(st){return u.locateFile?u.locateFile(st,g):g+st}var S,E;if(d){var M=yR;g=typeof __dirname<"u"?__dirname+"/":"",E=st=>{st=L(st)?new URL(st):st;var Wt=M.readFileSync(st);return Wt},S=async(st,Wt=!0)=>{st=L(st)?new URL(st):st;var Ae=M.readFileSync(st,Wt?void 0:"utf8");return Ae},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),_=(st,Wt)=>{throw process.exitCode=st,Wt}}else if(f||p){try{g=new URL(".",a).href}catch{}p&&(E=st=>{var Wt=new XMLHttpRequest;return Wt.open("GET",st,!1),Wt.responseType="arraybuffer",Wt.send(null),new Uint8Array(Wt.response)}),S=async st=>{if(L(st))return new Promise((Ae,Ye)=>{var Ie=new XMLHttpRequest;Ie.open("GET",st,!0),Ie.responseType="arraybuffer",Ie.onload=()=>{if(Ie.status==200||Ie.status==0&&Ie.response){Ae(Ie.response);return}Ye(Ie.status)},Ie.onerror=Ye,Ie.send(null)});var Wt=await fetch(st,{credentials:"same-origin"});if(Wt.ok)return Wt.arrayBuffer();throw new Error(Wt.status+" : "+Wt.url)}}console.log.bind(console);var y=console.error.bind(console),x,P=!1,N,L=st=>st.startsWith("file://"),H,k,z,K,R=!1;function w(){var st=z.buffer;u.HEAP8=new Int8Array(st),u.HEAPU8=K=new Uint8Array(st),u.HEAP32=new Int32Array(st),u.HEAPU32=new Uint32Array(st),u.HEAPF32=new Float32Array(st),new BigInt64Array(st),new BigUint64Array(st)}function X(){if(u.preRun)for(typeof u.preRun=="function"&&(u.preRun=[u.preRun]);u.preRun.length;)Te(u.preRun.shift());Pt(zt)}function Z(){R=!0,Gt.__wasm_call_ctors()}function tt(){if(u.postRun)for(typeof u.postRun=="function"&&(u.postRun=[u.postRun]);u.postRun.length;)Bt(u.postRun.shift());Pt(It)}var et=0,Y=null;function D(st){et++,u.monitorRunDependencies?.(et)}function G(st){if(et--,u.monitorRunDependencies?.(et),et==0&&Y){var Wt=Y;Y=null,Wt()}}function j(st){u.onAbort?.(st),st="Aborted("+st+")",y(st),P=!0,st+=". Build with -sASSERTIONS for more info.";var Wt=new WebAssembly.RuntimeError(st);throw k?.(Wt),Wt}var ct;function ft(){return v("hb.wasm")}function B(st){if(st==ct&&x)return new Uint8Array(x);if(E)return E(st);throw"both async and sync fetching of the wasm failed"}async function J(st){if(!x)try{var Wt=await S(st);return new Uint8Array(Wt)}catch{}return B(st)}async function lt(st,Wt){try{var Ae=await J(st),Ye=await WebAssembly.instantiate(Ae,Wt);return Ye}catch(Ie){y(`failed to asynchronously prepare wasm: ${Ie}`),j(Ie)}}async function Dt(st,Wt,Ae){if(!st&&!L(Wt)&&!d)try{var Ye=fetch(Wt,{credentials:"same-origin"}),Ie=await WebAssembly.instantiateStreaming(Ye,Ae);return Ie}catch(gn){y(`wasm streaming compile failed: ${gn}`),y("falling back to ArrayBuffer instantiation")}return lt(Wt,Ae)}function wt(){return{env:ue,wasi_snapshot_preview1:ue}}async function rt(){function st(gn,Kn){return Gt=gn.exports,u.wasmExports=Gt,z=Gt.memory,u.wasmMemory=z,w(),A=Gt.__indirect_function_table,kt(Gt),G(),Gt}D();function Wt(gn){return st(gn.instance)}var Ae=wt();if(u.instantiateWasm)return new Promise((gn,Kn)=>{u.instantiateWasm(Ae,(Qn,hn)=>{gn(st(Qn))})});ct??=ft();var Ye=await Dt(x,ct,Ae),Ie=Wt(Ye);return Ie}class pt{name="ExitStatus";constructor(Wt){this.message=`Program terminated with exit(${Wt})`,this.status=Wt}}var Pt=st=>{for(;st.length>0;)st.shift()(u)},It=[],Bt=st=>It.push(st),zt=[],Te=st=>zt.push(st),re=!0,te=()=>j(""),de=0,ee=()=>{re=!1,de=0},oe={},$=st=>{if(st instanceof pt||st=="unwind")return N;_(1,st)},De=()=>re||de>0,pe=st=>{N=st,De()||(u.onExit?.(st),P=!0),_(st,new pt(st))},ye=(st,Wt)=>{N=st,pe(st)},Zt=ye,W=()=>{if(!De())try{Zt(N)}catch(st){$(st)}},C=st=>{if(!P)try{st(),W()}catch(Wt){$(Wt)}},it=()=>performance.now(),Tt=(st,Wt)=>{if(oe[st]&&(clearTimeout(oe[st].id),delete oe[st]),!Wt)return 0;var Ae=setTimeout(()=>{delete oe[st],C(()=>Lt(st,it()))},Wt);return oe[st]={id:Ae,timeout_ms:Wt},0},Ut=()=>2147483648,bt=(st,Wt)=>Math.ceil(st/Wt)*Wt,Kt=st=>{var Wt=z.buffer.byteLength,Ae=(st-Wt+65535)/65536|0;try{return z.grow(Ae),w(),1}catch{}},Ft=st=>{var Wt=K.length;st>>>=0;var Ae=Ut();if(st>Ae)return!1;for(var Ye=1;Ye<=4;Ye*=2){var Ie=Wt*(1+.2/Ye);Ie=Math.min(Ie,st+100663296);var gn=Math.min(Ae,bt(Math.max(st,Ie),65536)),Kn=Kt(gn);if(Kn)return!0}return!1},qt=st=>{const Wt=st.length;return[Wt%128|128,Wt>>7,...st]},Yt={i:127,p:127,j:126,f:125,d:124,e:111},Ot=st=>qt(Array.from(st,Wt=>{var Ae=Yt[Wt];return Ae})),b=(st,Wt)=>{var Ae=Uint8Array.of(0,97,115,109,1,0,0,0,1,...qt([1,96,...Ot(Wt.slice(1)),...Ot(Wt[0]==="v"?"":Wt[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),Ye=new WebAssembly.Module(Ae),Ie=new WebAssembly.Instance(Ye,{e:{f:st}}),gn=Ie.exports.f;return gn},A,U=st=>A.get(st),O=(st,Wt)=>{if(q)for(var Ae=st;Ae<st+Wt;Ae++){var Ye=U(Ae);Ye&&q.set(Ye,Ae)}},q,V=st=>(q||(q=new WeakMap,O(0,A.length)),q.get(st)||0),at=[],dt=()=>at.length?at.pop():A.grow(1),At=(st,Wt)=>A.set(st,Wt),xt=(st,Wt)=>{var Ae=V(st);if(Ae)return Ae;var Ye=dt();try{At(Ye,st)}catch(gn){if(!(gn instanceof TypeError))throw gn;var Ie=b(st,Wt);At(Ye,Ie)}return q.set(st,Ye),Ye},Et=st=>{q.delete(U(st)),At(st,null),at.push(st)};u.noExitRuntime&&(re=u.noExitRuntime),u.print&&u.print,u.printErr&&(y=u.printErr),u.wasmBinary&&(x=u.wasmBinary),u.arguments&&u.arguments,u.thisProgram&&u.thisProgram,u.wasmMemory=z,u.wasmExports=Gt,u.addFunction=xt,u.removeFunction=Et;var Lt;function kt(st){u._hb_blob_create=st.hb_blob_create,u._hb_blob_destroy=st.hb_blob_destroy,u._hb_blob_get_length=st.hb_blob_get_length,u._hb_blob_get_data=st.hb_blob_get_data,u._hb_buffer_serialize_glyphs=st.hb_buffer_serialize_glyphs,u._hb_buffer_create=st.hb_buffer_create,u._hb_buffer_destroy=st.hb_buffer_destroy,u._hb_buffer_get_content_type=st.hb_buffer_get_content_type,u._hb_buffer_set_direction=st.hb_buffer_set_direction,u._hb_buffer_set_script=st.hb_buffer_set_script,u._hb_buffer_set_language=st.hb_buffer_set_language,u._hb_buffer_set_flags=st.hb_buffer_set_flags,u._hb_buffer_set_cluster_level=st.hb_buffer_set_cluster_level,u._hb_buffer_get_length=st.hb_buffer_get_length,u._hb_buffer_get_glyph_infos=st.hb_buffer_get_glyph_infos,u._hb_buffer_get_glyph_positions=st.hb_buffer_get_glyph_positions,u._hb_glyph_info_get_glyph_flags=st.hb_glyph_info_get_glyph_flags,u._hb_buffer_guess_segment_properties=st.hb_buffer_guess_segment_properties,u._hb_buffer_add_utf8=st.hb_buffer_add_utf8,u._hb_buffer_add_utf16=st.hb_buffer_add_utf16,u._hb_buffer_set_message_func=st.hb_buffer_set_message_func,u._hb_language_from_string=st.hb_language_from_string,u._hb_script_from_string=st.hb_script_from_string,u._hb_version=st.hb_version,u._hb_version_string=st.hb_version_string,u._hb_feature_from_string=st.hb_feature_from_string,u._malloc=st.malloc,u._free=st.free,u._hb_draw_funcs_set_move_to_func=st.hb_draw_funcs_set_move_to_func,u._hb_draw_funcs_set_line_to_func=st.hb_draw_funcs_set_line_to_func,u._hb_draw_funcs_set_quadratic_to_func=st.hb_draw_funcs_set_quadratic_to_func,u._hb_draw_funcs_set_cubic_to_func=st.hb_draw_funcs_set_cubic_to_func,u._hb_draw_funcs_set_close_path_func=st.hb_draw_funcs_set_close_path_func,u._hb_draw_funcs_create=st.hb_draw_funcs_create,u._hb_draw_funcs_destroy=st.hb_draw_funcs_destroy,u._hb_face_create=st.hb_face_create,u._hb_face_destroy=st.hb_face_destroy,u._hb_face_reference_table=st.hb_face_reference_table,u._hb_face_get_upem=st.hb_face_get_upem,u._hb_face_collect_unicodes=st.hb_face_collect_unicodes,u._hb_font_draw_glyph=st.hb_font_draw_glyph,u._hb_font_glyph_to_string=st.hb_font_glyph_to_string,u._hb_font_create=st.hb_font_create,u._hb_font_set_variations=st.hb_font_set_variations,u._hb_font_destroy=st.hb_font_destroy,u._hb_font_set_scale=st.hb_font_set_scale,u._hb_set_create=st.hb_set_create,u._hb_set_destroy=st.hb_set_destroy,u._hb_ot_var_get_axis_infos=st.hb_ot_var_get_axis_infos,u._hb_set_get_population=st.hb_set_get_population,u._hb_set_next_many=st.hb_set_next_many,u._hb_shape=st.hb_shape,Lt=st._emscripten_timeout}var ue={_abort_js:te,_emscripten_runtime_keepalive_clear:ee,_setitimer_js:Tt,emscripten_resize_heap:Ft,proc_exit:pe},Gt=await rt();function Se(){if(et>0){Y=Se;return}if(X(),et>0){Y=Se;return}function st(){u.calledRun=!0,!P&&(Z(),H?.(u),u.onRuntimeInitialized?.(),tt())}u.setStatus?(u.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>u.setStatus(""),1),st()},1)):st()}function si(){if(u.preInit)for(typeof u.preInit=="function"&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.shift()()}return si(),Se(),R?c=u:c=new Promise((st,Wt)=>{H=st,k=Wt}),c}})();s.exports=n,s.exports.default=n})(Lx);var SR=Lx.exports,bR=wx(SR),Nx={exports:{}};function MR(s){var t=s.wasmExports,n=new TextDecoder("utf8");let a=s.addFunction,o=s.removeFunction;var c=a(function(Y){t.free(Y)},"vi"),u=2,f=-1,p=2,d=0,_=1,g=2;function v(Y){return(Y.charCodeAt(0)&255)<<24|(Y.charCodeAt(1)&255)<<16|(Y.charCodeAt(2)&255)<<8|(Y.charCodeAt(3)&255)<<0}var S=v("JSON"),E=4;function M(Y){return[String.fromCharCode(Y>>24&255),String.fromCharCode(Y>>16&255),String.fromCharCode(Y>>8&255),String.fromCharCode(Y>>0&255)].join("")}function y(Y){return Y=="BOT"?1:Y=="EOT"?2:Y=="PRESERVE_DEFAULT_IGNORABLES"?4:Y=="REMOVE_DEFAULT_IGNORABLES"?8:Y=="DO_NOT_INSERT_DOTTED_CIRCLE"?16:Y=="PRODUCE_UNSAFE_TO_CONCAT"?64:0}function x(Y){var D=t.malloc(Y.byteLength);s.HEAPU8.set(new Uint8Array(Y),D);var G=t.hb_blob_create(D,Y.byteLength,u,D,c);return{ptr:G,destroy:function(){t.hb_blob_destroy(G)}}}function P(Y){const D=t.hb_set_get_population(Y),G=t.malloc(D<<2),j=G>>2,ct=s.HEAPU32.subarray(j,j+D);return s.HEAPU32.set(ct,j),t.hb_set_next_many(Y,f,G,D),ct}function N(Y,D){var G=t.hb_face_create(Y.ptr,D);const j=t.hb_face_get_upem(G);return{ptr:G,upem:j,reference_table:function(ct){var ft=t.hb_face_reference_table(G,v(ct)),B=t.hb_blob_get_length(ft);if(B){var J=t.hb_blob_get_data(ft,null),lt=s.HEAPU8.subarray(J,J+B);return lt}},getAxisInfos:function(){var ct=t.malloc(2048),ft=t.malloc(4);s.HEAPU32[ft/4]=64,t.hb_ot_var_get_axis_infos(G,0,ft,ct);var B={};return Array.from({length:s.HEAPU32[ft/4]}).forEach(function(J,lt){B[M(s.HEAPU32[ct/4+lt*8+1])]={min:s.HEAPF32[ct/4+lt*8+4],default:s.HEAPF32[ct/4+lt*8+5],max:s.HEAPF32[ct/4+lt*8+6]}}),t.free(ft),t.free(ct),B},collectUnicodes:function(){var ct=t.hb_set_create();t.hb_face_collect_unicodes(G,ct);var ft=P(ct);return t.hb_set_destroy(ct),ft},destroy:function(){t.hb_face_destroy(G)}}}var L="",H=256,k=t.malloc(H);function z(Y){var D=t.hb_font_create(Y.ptr),G=null,j=null,ct=null,ft=null,B=null,J=null;function lt(wt){if(!G){var rt=function(zt,Te,re,te,de,ee){L+=`M${te},${de}`},pt=function(zt,Te,re,te,de,ee){L+=`L${te},${de}`},Pt=function(zt,Te,re,te,de,ee,oe,$,De,pe){L+=`C${te},${de} ${ee},${oe} ${$},${De}`},It=function(zt,Te,re,te,de,ee,oe,$){L+=`Q${te},${de} ${ee},${oe}`},Bt=function(zt,Te,re,te){L+="Z"};j=a(rt,"viiiffi"),ct=a(pt,"viiiffi"),ft=a(Pt,"viiiffffffi"),B=a(It,"viiiffffi"),J=a(Bt,"viiii"),G=t.hb_draw_funcs_create(),t.hb_draw_funcs_set_move_to_func(G,j,0,0),t.hb_draw_funcs_set_line_to_func(G,ct,0,0),t.hb_draw_funcs_set_cubic_to_func(G,ft,0,0),t.hb_draw_funcs_set_quadratic_to_func(G,B,0,0),t.hb_draw_funcs_set_close_path_func(G,J,0,0)}return L="",t.hb_font_draw_glyph(D,wt,G,0),L}function Dt(wt){t.hb_font_glyph_to_string(D,wt,k,H);var rt=s.HEAPU8.subarray(k,k+H);return n.decode(rt.slice(0,rt.indexOf(0)))}return{ptr:D,glyphName:Dt,glyphToPath:lt,glyphToJson:function(wt){var rt=lt(wt);return rt.replace(/([MLQCZ])/g,"|$1 ").split("|").filter(function(pt){return pt.length}).map(function(pt){var Pt=pt.split(/[ ,]/g);return{type:Pt[0],values:Pt.slice(1).filter(function(It){return It.length}).map(function(It){return+It})}})},setScale:function(wt,rt){t.hb_font_set_scale(D,wt,rt)},setVariations:function(wt){var rt=Object.entries(wt),pt=t.malloc(8*rt.length);rt.forEach(function(Pt,It){s.HEAPU32[pt/4+It*2+0]=v(Pt[0]),s.HEAPF32[pt/4+It*2+1]=Pt[1]}),t.hb_font_set_variations(D,pt,rt.length),t.free(pt)},destroy:function(){t.hb_font_destroy(D),G&&(t.hb_draw_funcs_destroy(G),G=null,o(j),o(ct),o(ft),o(B),o(J))}}}function K(Y){var D=t.malloc(Y.length+1);for(let G=0;G<Y.length;++G){const j=Y.charCodeAt(G);if(j>127)throw new Error("Expected ASCII text");s.HEAPU8[D+G]=j}return s.HEAPU8[D+Y.length]=0,{ptr:D,length:Y.length,free:function(){t.free(D)}}}function R(Y){const D=t.malloc(Y.length*2),G=new Uint16Array(s.wasmMemory.buffer,D,Y.length);for(let j=0;j<G.length;++j)G[j]=Y.charCodeAt(j);return{ptr:D,length:G.length,free:function(){t.free(D)}}}function w(){var Y=t.hb_buffer_create();return{ptr:Y,addText:function(D){const G=R(D);t.hb_buffer_add_utf16(Y,G.ptr,G.length,0,G.length),G.free()},guessSegmentProperties:function(){return t.hb_buffer_guess_segment_properties(Y)},setDirection:function(D){t.hb_buffer_set_direction(Y,{ltr:4,rtl:5,ttb:6,btt:7}[D]||0)},setFlags:function(D){var G=0;D.forEach(function(j){G|=y(j)}),t.hb_buffer_set_flags(Y,G)},setLanguage:function(D){var G=K(D);t.hb_buffer_set_language(Y,t.hb_language_from_string(G.ptr,-1)),G.free()},setScript:function(D){var G=K(D);t.hb_buffer_set_script(Y,t.hb_script_from_string(G.ptr,-1)),G.free()},setClusterLevel:function(D){t.hb_buffer_set_cluster_level(Y,D)},json:function(){for(var D=t.hb_buffer_get_length(Y),G=[],j=t.hb_buffer_get_glyph_infos(Y,0),ct=j/4,ft=t.hb_buffer_get_glyph_positions(Y,0)/4,B=s.HEAPU32.subarray(ct,ct+5*D),J=s.HEAP32.subarray(ft,ft+5*D),lt=0;lt<D;++lt)G.push({g:B[lt*5+0],cl:B[lt*5+2],ax:J[lt*5+0],ay:J[lt*5+1],dx:J[lt*5+2],dy:J[lt*5+3],flags:t.hb_glyph_info_get_glyph_flags(j+lt*20)});return G},destroy:function(){t.hb_buffer_destroy(Y)}}}function X(Y,D,G){var j=0,ct=0;G&&(G=G.split(","),j=t.malloc(16*G.length),G.forEach(function(ft,B){var J=K(ft);t.hb_feature_from_string(J.ptr,-1,j+ct*16)&&ct++,J.free()})),t.hb_shape(Y.ptr,D.ptr,j,ct),j&&t.free(j)}function Z(Y,D,G,j,ct){var ft=[],B=d,J=!1,lt=1024*1024,Dt=t.malloc(lt),wt=function(pt,Pt,It,Bt){var zt=n.decode(s.HEAPU8.subarray(It,s.HEAPU8.indexOf(0,It)));return zt.startsWith("start table GSUB")?B=_:zt.startsWith("start table GPOS")&&(B=g),B!=ct&&(J=!1),ct!=d&&B==ct&&zt.startsWith("end lookup "+j)&&(J=!0),J?0:(t.hb_buffer_serialize_glyphs(pt,0,t.hb_buffer_get_length(pt),Dt,lt,0,Pt,S,E),ft.push({m:zt,t:JSON.parse(n.decode(s.HEAPU8.subarray(Dt,s.HEAPU8.indexOf(0,Dt)))),glyphs:t.hb_buffer_get_content_type(pt)==p}),1)},rt=a(wt,"iiiii");return t.hb_buffer_set_message_func(D.ptr,rt,0,0),X(Y,D,G),t.free(Dt),o(rt),ft}function tt(){var Y=t.malloc(12);t.hb_version(Y,Y+4,Y+8);var D={major:s.HEAPU32[Y/4],minor:s.HEAPU32[(Y+4)/4],micro:s.HEAPU32[(Y+8)/4]};return t.free(Y),D}function et(){var Y=t.hb_version_string(),D=n.decode(s.HEAPU8.subarray(Y,s.HEAPU8.indexOf(0,Y)));return D}return{createBlob:x,createFace:N,createFont:z,createBuffer:w,shape:X,shapeWithTrace:Z,version:tt,version_string:et}}try{Nx.exports=MR}catch{}var ER=Nx.exports,TR=wx(ER);let Xs=null,jc=null,Zc=null;const Ws={setWasmPath(s){jc=s,Zc=null,Xs=null},setWasmBuffer(s){Zc=s,jc=null,Xs=null},async getHarfBuzz(){return Xs||(Xs=new Promise(async(s,t)=>{try{const n={};if(Zc)n.wasmBinary=Zc;else if(jc)n.wasmBinary=await Dx(jc);else throw new Error("HarfBuzz WASM path or buffer must be set before initialization.");const a=await bR(n),o=TR(a),c={addFunction:a.addFunction,exports:a.wasmExports,removeFunction:a.removeFunction};s({hb:o,module:c})}catch(n){t(new Error(`Failed to initialize HarfBuzz: ${n}`))}}),Xs)}};class AR{constructor(t,n){this.text=t,this.glyphsByTextIndex=new Map,n.forEach(a=>{const o=this.glyphsByTextIndex.get(a.textIndex)||[];o.push(a),this.glyphsByTextIndex.set(a.textIndex,o)})}execute(t){const n=[];return t.byText&&n.push(...this.findByText(t.byText)),t.byCharRange&&n.push(...this.findByCharRange(t.byCharRange)),n}findByText(t){const n=[];for(const a of t){let o=0;for(;(o=this.text.indexOf(a,o))!==-1;)n.push(this.createTextRange(o,o+a.length,a)),o+=a.length}return n}findByCharRange(t){return t.map(n=>{const a=this.text.slice(n.start,n.end);return this.createTextRange(n.start,n.end,a)})}createTextRange(t,n,a){const o=[],c=new Map;for(let f=t;f<n;f++){const p=this.glyphsByTextIndex.get(f);if(p)for(const d of p){o.push(d);const _=c.get(d.lineIndex)||[];_.push(d),c.set(d.lineIndex,_)}}const u=Array.from(c.values()).map(f=>this.calculateBounds(f));return{start:t,end:n,originalText:a,bounds:u,glyphs:o,lineIndices:Array.from(c.keys()).sort((f,p)=>f-p)}}calculateBounds(t){if(t.length===0)return{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};let n=1/0,a=1/0,o=1/0,c=-1/0,u=-1/0,f=-1/0;for(const p of t)p.bounds.min.x<n&&(n=p.bounds.min.x),p.bounds.min.y<a&&(a=p.bounds.min.y),p.bounds.min.z<o&&(o=p.bounds.min.z),p.bounds.max.x>c&&(c=p.bounds.max.x),p.bounds.max.y>u&&(u=p.bounds.max.y),p.bounds.max.z>f&&(f=p.bounds.max.z);return{min:{x:n,y:a,z:o},max:{x:c,y:u,z:f}}}}const RR=1e5,Vv=72;var $t;let Gr=($t=class{static stableStringify(t){const n=Object.keys(t).sort();let a="";for(let o=0;o<n.length;o++)o>0&&(a+=","),a+=n[o]+":"+t[n[o]];return a}constructor(){this.currentFontId="",$t.hbInitPromise||($t.hbInitPromise=Ws.getHarfBuzz()),this.fontLoader=new Iv(()=>$t.hbInitPromise)}static setHarfBuzzPath(t){Ws.setWasmPath(t),$t.hbInitPromise=null}static setHarfBuzzBuffer(t){Ws.setWasmBuffer(t),$t.hbInitPromise=null}static init(){return $t.hbInitPromise||($t.hbInitPromise=Ws.getHarfBuzz()),$t.hbInitPromise}static async create(t){if(!t.font)throw new Error("Font is required. Specify options.font as a URL string or ArrayBuffer.");$t.hbInitPromise||($t.hbInitPromise=Ws.getHarfBuzz());const n=await $t.resolveFont(t),a=new $t;a.setLoadedFont(n);const o=await a.createGeometry(t),c=async u=>{const f={...t};for(const d in u){const _=u[d];_!==void 0&&(f[d]=_)}if(u.font!==void 0||u.fontVariations!==void 0||u.fontFeatures!==void 0){const d=await $t.resolveFont(f);a.setLoadedFont(d),a.resetHelpers()}return t=f,{...await a.createGeometry(t),getLoadedFont:()=>a.getLoadedFont(),getCacheSize:()=>a.getCacheSize(),clearCache:()=>a.clearCache(),measureTextWidth:(d,_)=>a.measureTextWidth(d,_),update:c}};return{...o,getLoadedFont:()=>a.getLoadedFont(),getCacheSize:()=>a.getCacheSize(),clearCache:()=>a.clearCache(),measureTextWidth:(u,f)=>a.measureTextWidth(u,f),update:c}}static async resolveFont(t){let a=typeof t.font=="string"?t.font:`buffer-${$t.generateFontContentHash(t.font)}`;t.fontVariations&&(a+=`_var_${$t.stableStringify(t.fontVariations)}`),t.fontFeatures&&(a+=`_feat_${$t.stableStringify(t.fontFeatures)}`);let o=$t.fontCache.get(a);return o||(o=await $t.loadAndCacheFont(a,t.font,t.fontVariations,t.fontFeatures)),o}static async loadAndCacheFont(t,n,a,o){const c=new $t;await c.loadFont(n,a,o);const u=c.getLoadedFont();return $t.fontCache.set(t,u),$t.trackFontCacheAdd(u),$t.enforceFontCacheMemoryLimit(),u}static trackFontCacheAdd(t){const n=t._buffer?.byteLength??0;$t.fontCacheMemoryBytes+=n}static trackFontCacheRemove(t){const n=$t.fontCache.get(t);if(!n)return;const a=n._buffer?.byteLength??0;$t.fontCacheMemoryBytes-=a,$t.fontCacheMemoryBytes<0&&($t.fontCacheMemoryBytes=0)}static enforceFontCacheMemoryLimit(){if($t.maxFontCacheMemoryBytes!==1/0)for(;$t.fontCacheMemoryBytes>$t.maxFontCacheMemoryBytes&&$t.fontCache.size>0;){const t=$t.fontCache.keys().next().value;if(t===void 0)break;$t.trackFontCacheRemove(t),$t.fontCache.delete(t)}}static generateFontContentHash(t){if(t){const n=new Uint8Array(t);let a=2166136261;const o=Math.min(32,n.length),c=Math.floor(n.length/o);for(let u=0;u<o;u++){const f=u*c;a^=n[f],a=Math.imul(a,16777619)}return a^=n.length,a=Math.imul(a,16777619),(a>>>0).toString(36)}else return`c${++$t.fontIdCounter}`}setLoadedFont(t){this.loadedFont=t;const n=$t.generateFontContentHash(t._buffer);this.currentFontId=`font_${n}`,t.fontVariations&&(this.currentFontId+=`_var_${$t.stableStringify(t.fontVariations)}`),t.fontFeatures&&(this.currentFontId+=`_feat_${$t.stableStringify(t.fontFeatures)}`)}async loadFont(t,n,a){Oe.start("Text.loadFont",{fontSrc:typeof t=="string"?t:`buffer(${t.byteLength})`}),$t.hbInitPromise||($t.hbInitPromise=Ws.getHarfBuzz()),await $t.hbInitPromise;const o=typeof t=="string"?await Dx(t):t;try{this.loadedFont&&this.destroy(),this.loadedFont=await this.fontLoader.loadFont(o,n),a&&(this.loadedFont.fontFeatures=a);const c=$t.generateFontContentHash(o);this.currentFontId=`font_${c}`,n&&(this.currentFontId+=`_var_${$t.stableStringify(n)}`),a&&(this.currentFontId+=`_feat_${$t.stableStringify(a)}`)}catch(c){throw rn.error("Failed to load font:",c),c}finally{Oe.end("Text.loadFont")}}async createGeometry(t){Oe.start("Text.createGeometry",{textLength:t.text.length,size:t.size||Vv,hasLayout:!!t.layout,mode:"cached"});try{if(!this.loadedFont)throw new Error("Font not loaded. Use Text.create() with a font option.");const n=await this.prepareHyphenation(t);this.validateOptions(n),t=n,this.updateFontVariations(t),this.geometryBuilder||(this.geometryBuilder=new mR(eR,this.loadedFont),this.geometryBuilder.setFontId(this.currentFontId));const a=t.curveSteps!==void 0&&t.curveSteps!==null&&t.curveSteps>0;this.geometryBuilder.setCurveSteps(t.curveSteps),this.geometryBuilder.setCurveFidelityConfig(a?void 0:t.curveFidelity),this.geometryBuilder.setGeometryOptimization(t.geometryOptimization),this.loadedFont.font.setScale(this.loadedFont.upem,this.loadedFont.upem),this.textShaper||(this.textShaper=new gR(this.loadedFont,this.geometryBuilder));const o=this.prepareLayout(t),c=t.removeOverlaps??this.loadedFont.isVariable??!1,u=this.textShaper.shapeLines(o.lines,o.scaledLineHeight,o.letterSpacing,o.align,o.direction,t.color,t.text);let f,p;if(t.color&&typeof t.color=="object"&&!Array.isArray(t.color)&&(t.color.byText||t.color.byCharRange)){if(f=new Set,t.color.byText){p=[];for(const g of Object.keys(t.color.byText)){let v=0;for(;(v=t.text.indexOf(g,v))!==-1;){p.push({pattern:g,start:v,end:v+g.length});for(let S=v;S<v+g.length;S++)f.add(S);v+=g.length}}}if(t.color.byCharRange)for(const g of t.color.byCharRange)for(let v=g.start;v<g.end;v++)f.add(v)}const d=this.geometryBuilder.buildInstancedGeometry(u,o.depth,c,this.loadedFont.metrics.isCFF,o.pixelsPerFontUnit,t.perGlyphAttributes??!1,f),_=this.finalizeGeometry(d.vertices,d.normals,d.indices,d.glyphInfos,d.planeBounds,t,t.text,p);if(t.perGlyphAttributes){const g=this.createGlyphAttributes(_.vertices.length/3,_.glyphs);_.glyphAttributes=g}return _}finally{Oe.end("Text.createGeometry")}}async prepareHyphenation(t){if(t.layout?.hyphenate!==!1&&t.layout?.width){const n=t.layout?.language||"en-us";if(!t.layout?.hyphenationPatterns?.[n])try{if(!$t.patternCache.has(n)){const a=await Fv(n,t.layout?.patternsPath);$t.patternCache.set(n,a)}return{...t,layout:{...t.layout,hyphenationPatterns:{...t.layout?.hyphenationPatterns,[n]:$t.patternCache.get(n)}}}}catch(a){return rn.warn(`Failed to load patterns for ${n}: ${a}`),{...t,layout:{...t.layout,hyphenate:!1}}}}return t}validateOptions(t){if(!t.text)throw new Error("Text content is required");const n=t.maxTextLength??RR;if(t.text.length>n)throw new Error(`Text exceeds ${n} character limit`)}updateFontVariations(t){t.fontVariations&&this.loadedFont&&$t.stableStringify(t.fontVariations)!==$t.stableStringify(this.loadedFont.fontVariations||{})&&(this.loadedFont.font.setVariations(t.fontVariations),this.loadedFont.fontVariations=t.fontVariations)}prepareLayout(t){if(!this.loadedFont)throw new Error("Font not loaded. Use Text.create() with a font option");const{text:n,size:a=Vv,depth:o=0,lineHeight:c=1,letterSpacing:u=0,layout:f={}}=t,{width:p,direction:d="ltr",align:_=d==="rtl"?"right":"left",respectExistingBreaks:g=!0,hyphenate:v=!0,language:S="en-us",tolerance:E=Ax,pretolerance:M=Rx,emergencyStretch:y=Cx,autoEmergencyStretch:x,hyphenationPatterns:P,lefthyphenmin:N,righthyphenmin:L,linepenalty:H,adjdemerits:k,hyphenpenalty:z,exhyphenpenalty:K,doublehyphendemerits:R}=f,w=this.loadedFont.upem/a;let X;p!==void 0&&(X=p*w);const Z=o*w,tt=this.loadedFont.upem*25e-6,et=Z<=0?0:Math.max(Z,tt);this.textLayout||(this.textLayout=new Tv(this.loadedFont));const Y=this.textLayout.computeLines({text:n,width:X,align:_,direction:d,hyphenate:v,language:S,respectExistingBreaks:g,tolerance:E,pretolerance:M,emergencyStretch:y,autoEmergencyStretch:x,hyphenationPatterns:P,lefthyphenmin:N,righthyphenmin:L,linepenalty:H,adjdemerits:k,hyphenpenalty:z,exhyphenpenalty:K,doublehyphendemerits:R,letterSpacing:u}),D=cl.getVerticalMetrics(this.loadedFont.metrics),j=(D.ascender-D.descender)*c;return{lines:Y.lines,scaledLineHeight:j,letterSpacing:u,align:_,direction:d,depth:et,size:a,pixelsPerFontUnit:1/w}}applyColorSystem(t,n,a,o,c){const u=t.length/3,f=new Float32Array(u*3),p=[];if(Array.isArray(a)){for(let d=0;d<u;d++){const _=d*3;f[_]=a[0],f[_+1]=a[1],f[_+2]=a[2]}p.push({start:0,end:o.length,originalText:o,color:a,bounds:[],glyphs:n,lineIndices:[...new Set(n.map(d=>d.lineIndex))]})}else{const d=a.default||[1,1,1];for(let g=0;g<f.length;g+=3)f[g]=d[0],f[g+1]=d[1],f[g+2]=d[2];let _;if(a.byText&&c||a.byCharRange){_=new Map;for(const g of n){const v=_.get(g.textIndex);v?v.push(g):_.set(g.textIndex,[g])}}if(a.byText&&c&&_)for(const g of c){const v=a.byText[g.pattern];if(!v)continue;const S=[],E=new Map;for(let y=g.start;y<g.end;y++){const x=_.get(y);if(x)for(const P of x){S.push(P);const N=E.get(P.lineIndex);N?N.push(P):E.set(P.lineIndex,[P]);for(let L=0;L<P.vertexCount;L++){const H=(P.vertexStart+L)*3;H>=0&&H<f.length&&(f[H]=v[0],f[H+1]=v[1],f[H+2]=v[2])}}}const M=Array.from(E.values()).map(y=>this.calculateGlyphBounds(y));p.push({start:g.start,end:g.end,originalText:g.pattern,color:v,bounds:M,glyphs:S,lineIndices:Array.from(E.keys()).sort((y,x)=>y-x)})}if(a.byCharRange&&_)for(const g of a.byCharRange){const v=[],S=new Map;for(let M=g.start;M<g.end;M++){const y=_.get(M);if(y)for(const x of y){v.push(x);const P=S.get(x.lineIndex);P?P.push(x):S.set(x.lineIndex,[x]);for(let N=0;N<x.vertexCount;N++){const L=(x.vertexStart+N)*3;L>=0&&L<f.length&&(f[L]=g.color[0],f[L+1]=g.color[1],f[L+2]=g.color[2])}}}const E=Array.from(S.values()).map(M=>this.calculateGlyphBounds(M));p.push({start:g.start,end:g.end,originalText:o.slice(g.start,g.end),color:g.color,bounds:E,glyphs:v,lineIndices:Array.from(S.keys()).sort((M,y)=>M-y)})}}return{colors:f,coloredRanges:p}}calculateGlyphBounds(t){if(t.length===0)return{min:{x:0,y:0,z:0},max:{x:0,y:0,z:0}};let n=1/0,a=1/0,o=1/0,c=-1/0,u=-1/0,f=-1/0;for(const p of t)p.bounds.min.x<n&&(n=p.bounds.min.x),p.bounds.min.y<a&&(a=p.bounds.min.y),p.bounds.min.z<o&&(o=p.bounds.min.z),p.bounds.max.x>c&&(c=p.bounds.max.x),p.bounds.max.y>u&&(u=p.bounds.max.y),p.bounds.max.z>f&&(f=p.bounds.max.z);return{min:{x:n,y:a,z:o},max:{x:c,y:u,z:f}}}finalizeGeometry(t,n,a,o,c,u,f,p){const{layout:d={}}=u,{width:_,align:g=d.direction==="rtl"?"right":"left"}=d;this.textLayout||(this.textLayout=new Tv(this.loadedFont));const v=this.textLayout.computeAlignmentOffset({width:_,align:g,planeBounds:c}),S=v.offset;if(c.min.x=v.adjustedBounds.min.x,c.max.x=v.adjustedBounds.max.x,S!==0){for(let N=0;N<t.length;N+=3)t[N]+=S;for(let N=0;N<o.length;N++)o[N].bounds.min.x+=S,o[N].bounds.max.x+=S}let E,M;if(u.color){const N=this.applyColorSystem(t,o,u.color,u.text,p);E=N.colors,M=N.coloredRanges}const y=this.geometryBuilder.getOptimizationStats(),x=a.length/3,P=t.length/3;return{vertices:t,normals:n,indices:a,colors:E,glyphs:o,planeBounds:c,stats:{trianglesGenerated:x,verticesGenerated:P,pointsRemovedByVisvalingam:y.pointsRemovedByVisvalingam,originalPointCount:y.originalPointCount},query:(()=>{let N=null;return L=>{if(!f)throw new Error("Original text not available for querying");return N||(N=new AR(f,o)),N.execute(L)}})(),coloredRanges:M,glyphAttributes:void 0}}getFontMetrics(){if(!this.loadedFont)throw new Error("Font not loaded. Call loadFont() first");return cl.getFontMetrics(this.loadedFont.metrics)}static async preloadPatterns(t,n){await Promise.all(t.map(async a=>{if(!$t.patternCache.has(a))try{const o=await Fv(a,n);$t.patternCache.set(a,o)}catch(o){rn.warn(`Failed to pre-load patterns for ${a}: ${o}`)}}))}static registerPattern(t,n){$t.patternCache.set(t,n)}static setMaxFontCacheMemoryMB(t){$t.maxFontCacheMemoryBytes=t===1/0?1/0:Math.max(1,Math.floor(t))*1024*1024,$t.enforceFontCacheMemoryLimit()}getLoadedFont(){return this.loadedFont}measureTextWidth(t,n=0){if(!this.loadedFont)throw new Error("Font not loaded. Call loadFont() first");return ru.measureTextWidth(this.loadedFont,t,n)}getCacheSize(){return this.geometryBuilder?this.geometryBuilder.getCacheStats().size:0}clearCache(){this.geometryBuilder&&this.geometryBuilder.clearCache()}createGlyphAttributes(t,n){const a=new Float32Array(t*3),o=new Float32Array(t),c=new Float32Array(t),u=new Float32Array(t),f=new Float32Array(t);let p=1/0,d=-1/0;for(let g=0;g<n.length;g++){const v=(n[g].bounds.min.x+n[g].bounds.max.x)/2;v<p&&(p=v),v>d&&(d=v)}const _=d-p;for(let g=0;g<n.length;g++){const v=n[g],S=(v.bounds.min.x+v.bounds.max.x)/2,E=(v.bounds.min.y+v.bounds.max.y)/2,M=(v.bounds.min.z+v.bounds.max.z)/2,y=v.bounds.min.y,x=_>0?(S-p)/_:0,P=v.vertexStart,N=Math.min(P+v.vertexCount,t);if(!(N<=P)){o.fill(g,P,N),c.fill(v.lineIndex,P,N),u.fill(x,P,N),f.fill(y,P,N);for(let L=P*3;L<N*3;L+=3)a[L]=S,a[L+1]=E,a[L+2]=M}}return{glyphCenter:a,glyphIndex:o,glyphLineIndex:c,glyphProgress:u,glyphBaselineY:f}}resetHelpers(){this.geometryBuilder=void 0,this.textShaper=void 0,this.textLayout=void 0}destroy(){if(!this.loadedFont)return;const t=this.loadedFont;try{Iv.destroyFont(t)}catch(n){rn.warn("Error destroying HarfBuzz objects:",n)}finally{this.loadedFont=void 0,this.textLayout=void 0,this.textShaper=void 0}}},$t.patternCache=new Map,$t.hbInitPromise=null,$t.fontCache=new Map,$t.fontCacheMemoryBytes=0,$t.maxFontCacheMemoryBytes=1/0,$t.fontIdCounter=0,$t);function Ox(s){const t=new aa;return t.setAttribute("position",new zn(s.vertices,3)),t.setAttribute("normal",new zn(s.normals,3)),t.setIndex(new Sp(s.indices,1)),s.colors&&t.setAttribute("color",new zn(s.colors,3)),s.glyphAttributes&&(t.setAttribute("glyphCenter",new zn(s.glyphAttributes.glyphCenter,3)),t.setAttribute("glyphIndex",new zn(s.glyphAttributes.glyphIndex,1)),t.setAttribute("glyphLineIndex",new zn(s.glyphAttributes.glyphLineIndex,1)),t.setAttribute("glyphProgress",new zn(s.glyphAttributes.glyphProgress,1)),t.setAttribute("glyphBaselineY",new zn(s.glyphAttributes.glyphBaselineY,1))),t.computeBoundingBox(),{geometry:t,glyphs:s.glyphs,planeBounds:s.planeBounds,stats:s.stats,query:s.query,coloredRanges:s.coloredRanges,getLoadedFont:s.getLoadedFont,getCacheSize:s.getCacheSize,clearCache:s.clearCache,measureTextWidth:s.measureTextWidth,update:async n=>{const a=await s.update(n);return Ox(a)}}}const fr=class fr{static async create(t){const n=await Gr.create(t);return Ox(n)}};fr.setHarfBuzzPath=Gr.setHarfBuzzPath,fr.setHarfBuzzBuffer=Gr.setHarfBuzzBuffer,fr.init=Gr.init,fr.registerPattern=Gr.registerPattern,fr.preloadPatterns=Gr.preloadPatterns,fr.setMaxFontCacheMemoryMB=Gr.setMaxFontCacheMemoryMB;let lu=fr;class al extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.baseUrl="/3d_depth_testimonial/",this.fontPath=`${this.baseUrl}fonts/kenpixel.ttf`,this.textMaterial=null,this.gradientTexture=this.createGradientTexture(),this._buildToken=0,this.init()}static get observedAttributes(){return["name","number","text","link","img"]}attributeChangedCallback(t,n,a){n!==a&&this.isConnected&&this.scene&&this.build3DScene()}connectedCallback(){}disconnectedCallback(){this.renderer&&this.renderer.dispose(),this.textGroup&&this.disposeTextGroup(this.textGroup),this._animId&&cancelAnimationFrame(this._animId)}async init(){this.renderDOM(),al.configureText(),this.initThreeJS(),this.initTilt()}createGradientTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const n=t.getContext("2d"),a=n.createLinearGradient(0,0,128,128);return a.addColorStop(0,"#2196f3"),a.addColorStop(1,"#e91e63"),n.fillStyle=a,n.fillRect(0,0,128,128),new C1(t)}renderDOM(){const t=this.getAttribute("name")||"Design";this.getAttribute("number");const n=this.getAttribute("text")||"Create stunning, modern interfaces that captivate users with depth and clarity.",a=this.getAttribute("link")||"#",o=this.getAttribute("img")||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",c=`
      <style>
        :host {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          --text-color: #fff;
          --card-bg: rgba(255, 255, 255, 0.05); 
          --card-border-bright: rgba(255, 255, 255, 0.4);
          --card-border-dim: rgba(255, 255, 255, 0.1);
          margin: 20px;
        }

        .container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 320px;
          height: 440px;
          transform-style: preserve-3d;
          transform: perspective(1000px);
        }

        .canvas-container {
             position: absolute;
             top: 0; left: 0;
             width: 100%; height: 100%;
             pointer-events: none; 
             z-index: 4; 
             transform: translateZ(30px); 
        }

        .glass-box {
          position: absolute;
          background: var(--card-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-top: 1px solid var(--card-border-bright);
          border-left: 1px solid var(--card-border-bright);
          border-right: 1px solid var(--card-border-dim);
          border-bottom: 1px solid var(--card-border-dim);
          border-radius: 15px;
          box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.15);
          transition: transform 0.1s;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          color: var(--text-color);
        }

        .base-card {
           width: 260px;
           height: 380px;
           z-index: 1; 
           transform: translateZ(0px);
        }
        
        /* Updated: Quote Box sits HIGHER now to let the icon float */
        .quote-box {
            width: 80px;
            height: 80px;
            top: 60px; 
            left: -30px; 
            z-index: 5; 
            transform: translateZ(60px); /* Increased Z to hover higher */
            overflow: visible; /* Allow icon to float out if moved */
        }
        
        .quote-icon-svg {
            width: 42px; /* Slightly larger */
            height: 42px;
            /* No filter: invert needed, we use SVG fill */
            filter: drop-shadow(0 5px 15px rgba(233, 30, 99, 0.4)); /* Glow matching the gradient */
            transform: translateY(-5px); /* Hover slightly above center */
        }

        .image-box {
            width: 110px;
            height: 110px;
            top: -40px;
            right: -30px; 
            z-index: 5; 
            transform: translateZ(60px);
            padding: 8px;
        }
        
        .image-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }

        .text-box {
            width: 280px;
            min-height: 140px;
            bottom: 20px;
            left: 20px;
            z-index: 3; 
            display: flex;
            flex-direction: column;
            justify-content: flex-end; 
            align-items: center;
            padding: 20px;
            text-align: center;
            transform: translateZ(20px); 
        }
        
        .text-box p {
            opacity: 0; 
            height: 80px; 
            margin: 0 0 15px 0;
        }

        .text-box a {
            display: inline-block;
            padding: 8px 20px;
            background: #fff;
            color: #111;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            position: relative; 
            opacity: 1;
            margin-top: auto;
        }
      </style>
    `,f=`
        <svg class="quote-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="iconMethodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2196f3;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#e91e63;stop-opacity:1" />
                </linearGradient>
            </defs>
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" fill="url(#iconMethodGradient)" />
        </svg>
    `;this.shadowRoot.innerHTML=`
      ${c}
      <div class="container">
        <div class="canvas-container"></div>
        <div class="glass-box base-card" data-depth="0"></div>
        <div class="glass-box quote-box" data-depth="40">
            ${f}
        </div>
        <div class="glass-box image-box" data-depth="60">
            <img src="${o}" alt="${t}" />
        </div>
        <div class="glass-box text-box" data-depth="20">
            <p>${n} <!-- Spacer --></p>
            <a href="${a}">Read More</a>
        </div>
      </div>
    `}initThreeJS(){const t=this.shadowRoot.querySelector(".canvas-container"),n=320,a=440,o=new M1,c=new gi(45,n/a,.1,2e3);c.position.z=640,c.position.y=20;const u=new P2({alpha:!0,antialias:!0});u.setSize(n,a),u.setPixelRatio(window.devicePixelRatio),u.shadowMap.enabled=!0,u.shadowMap.type=Yv,t.appendChild(u.domElement),this.renderer=u,this.scene=o,this.camera=c;const f=new B1(16777215,.8);o.add(f);const p=new F1(16777215,1.2);p.position.set(30,60,40),o.add(p);const d=new P1(16770273,.5);d.position.set(-30,-20,30),o.add(d),this.textMaterial=new D1({color:16773360,roughness:.75,metalness:.02,emissive:16777215,emissiveIntensity:.05}),this.shadowMaterial=new yp({map:this.gradientTexture,transparent:!0,opacity:.6,side:Zi}),this.build3DScene();const _=()=>{this.isConnected&&(this._animId=requestAnimationFrame(_),u.render(o,c))};_()}static configureText(){if(al._hbConfigured)return;lu.setHarfBuzzPath("/3d_depth_testimonial/hb/hb.wasm"),al._hbConfigured=!0}disposeTextGroup(t){t.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.dispose()})}async build3DScene(){const t=++this._buildToken,n=this.getAttribute("number")||"01",a=this.getAttribute("name")||"Design",o=this.getAttribute("text")||"Create stunning, modern interfaces.",c=new Ys;try{const u=await this.createTextMesh(n,{size:30,depth:2,x:-90,y:150,z:45,isMain:!0}),f=await this.createTextMesh(a,{size:25,depth:1.2,x:0,y:40,z:50,isMain:!0}),p=await this.createTextMesh(o,{size:12,depth:.4,lineHeight:1.2,letterSpacing:.08,layout:{width:320,align:"center"},maxHeight:120,x:20,y:-100,z:10});if(t!==this._buildToken){this.disposeTextGroup(c);return}c.add(u,f,p),this.textGroup&&(this.scene.remove(this.textGroup),this.disposeTextGroup(this.textGroup)),this.textGroup=c,this.scene.add(c)}catch(u){console.error("Failed to build three-text geometry",u),this.disposeTextGroup(c)}}async createTextMesh(t,n){const{size:a,depth:o,lineHeight:c,letterSpacing:u,layout:f,maxHeight:p,x:d,y:_,z:g,isMain:v}=n,E=(await lu.create({text:t,font:this.fontPath,size:a,depth:o,lineHeight:c,letterSpacing:u,layout:f,bevelEnabled:!0,bevelThickness:a*.2,bevelSize:a*.05,bevelSegments:12})).geometry;E.computeBoundingBox();const M=E.boundingBox,y=E.attributes.uv,x=E.attributes.position;if(y&&x){const N=M.min.x,L=M.min.y,H=M.max.x-M.min.x,k=M.max.y-M.min.y;for(let z=0;z<y.count;z++){const K=x.getX(z),R=x.getY(z),w=(K-N)/H,X=(R-L)/k;y.setXY(z,w,X)}y.needsUpdate=!0}E.translate(-.5*(M.max.x+M.min.x),-.5*(M.max.y+M.min.y),0);const P=new zi(E,this.textMaterial);if(p){const N=M.max.y-M.min.y;if(N>0){const L=Math.min(1,p/N);P.scale.setScalar(L)}}if(P.position.set(d,_,g),v){const N=new zi(E,this.shadowMaterial);N.position.set(d+5,_-10,g-10),N.scale.copy(P.scale);const L=new Ys;return L.add(N),L.add(P),L}return P}initTilt(){const t=this.shadowRoot.querySelector(".container"),n=this.shadowRoot.querySelectorAll(".glass-box");t.addEventListener("mousemove",a=>{const o=t.getBoundingClientRect(),c=a.clientX-o.left,u=a.clientY-o.top,f=o.width/2,p=o.height/2,d=(u-p)/p*-15,_=(c-f)/f*15;t.style.transform=`perspective(1000px) rotateX(${d}deg) rotateY(${_}deg)`,n.forEach(g=>{const v=parseFloat(g.getAttribute("data-depth"))||0,S=(c-f)/f*(v/4),E=(u-p)/p*(v/4);g.style.transform=`translateZ(${v}px) translateX(${S}px) translateY(${E}px)`}),this.camera&&(this.camera.position.x=(c-f)/f*20,this.camera.position.y=(u-p)/p*-20,this.camera.lookAt(0,0,0))}),t.addEventListener("mouseleave",()=>{t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg)",n.forEach(a=>{const o=parseFloat(a.getAttribute("data-depth"))||0;a.style.transform=`translateZ(${o}px) translateX(0) translateY(0)`}),this.camera&&(this.camera.position.x=0,this.camera.position.y=0,this.camera.lookAt(0,0,0))})}}customElements.define("glass-testimonial-card",al);
