(function(e){e.ng??={},e.ng.common??={},e.ng.common.locales??={};let t=void 0;function c(r){let a=r,l=Math.floor(Math.abs(r)),E=r.toString().replace(/^[^.]*\.?/,"").length,_=parseInt(r.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return l===0||l===1?1:_===0&&l!==0&&l%1e6===0&&E===0||!(_>=0&&_<=5)?4:5;}e.ng.common.locales.fr=["fr",[["AM","PM"],t,t],t,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],t,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],t,[["av. J.-C.","ap. J.-C."],t,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",t],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[t,"\u0440."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[t,"\xA5"],COP:["$CO","$"],CYP:["\xA3CY"],EGP:[t,"\xA3E"],FJD:["$FJ","$"],FKP:["\xA3FK","\xA3"],FRF:["F"],GBP:["\xA3GB","\xA3"],GIP:["\xA3GI","\xA3"],HKD:[t,"$"],IEP:["\xA3IE"],ILP:["\xA3IL"],ITL:["\u20A4IT"],JPY:[t,"\xA5"],KMF:[t,"FC"],LBP:["\xA3LB","\xA3L"],MTP:["\xA3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[t,"$C"],NZD:["$NZ","$"],PHP:[t,"\u20B1"],RHD:["$RH"],RON:[t,"L"],RWF:[t,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[t,"$T"],TTD:["$TT","$"],TWD:[t,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[t,"$"],XPF:["FCFP"],ZMW:[t,"Kw"]},"ltr",c,[[["minuit","midi","mat.","ap.m.","soir","nuit"],t,["minuit","midi","du matin","de l\u2019apr\xE8s-midi","du soir","du matin"]],[["minuit","midi","mat.","ap.m.","soir","nuit"],t,["minuit","midi","matin","apr\xE8s-midi","soir","nuit"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]]];})(globalThis);(function(e){let t=e.performance;function c(L){t&&t.mark&&t.mark(L);}function r(L,n){t&&t.measure&&t.measure(L,n);}c("Zone");let a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(L){return a+L;}let E=e[l("forceDuplicateZoneCheck")]===!0;if(e.Zone){if(E||typeof e.Zone.__symbol__!="function")throw new Error("Zone already loaded.");return e.Zone;}let se=class se{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)");}static get root(){let n=se.current;for(;n.parent;)n=n.parent;return n;}static get current(){return U.zone;}static get currentTask(){return ne;}static __load_patch(n,s,o=!1){if(oe.hasOwnProperty(n)){if(!o&&E)throw Error("Already loaded patch: "+n);}else if(!e["__Zone_disable_"+n]){let v="Zone:"+n;c(v),oe[n]=s(e,se,X),r(v,v);}}get parent(){return this._parent;}get name(){return this._name;}constructor(n,s){this._parent=n,this._name=s?s.name||"unnamed":"<root>",this._properties=s&&s.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,s);}get(n){let s=this.getZoneWith(n);if(s)return s._properties[n];}getZoneWith(n){let s=this;for(;s;){if(s._properties.hasOwnProperty(n))return s;s=s._parent;}return null;}fork(n){if(!n)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,n);}wrap(n,s){if(typeof n!="function")throw new Error("Expecting function got: "+n);let o=this._zoneDelegate.intercept(this,n,s),v=this;return function(){return v.runGuarded(o,this,arguments,s);};}run(n,s,o,v){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,n,s,o,v);}finally{U=U.parent;}}runGuarded(n,s=null,o,v){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,n,s,o,v);}catch(G){if(this._zoneDelegate.handleError(this,G))throw G;}}finally{U=U.parent;}}runTask(n,s,o){if(n.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(n.zone||Y).name+"; Execution: "+this.name+")");if(n.state===H&&(n.type===K||n.type===P))return;let v=n.state!=m;v&&n._transitionTo(m,I),n.runCount++;let G=ne;ne=n,U={parent:U,zone:this};try{n.type==P&&n.data&&!n.data.isPeriodic&&(n.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,n,s,o);}catch(f){if(this._zoneDelegate.handleError(this,f))throw f;}}finally{n.state!==H&&n.state!==d&&(n.type==K||n.data&&n.data.isPeriodic?v&&n._transitionTo(I,m):(n.runCount=0,this._updateTaskCount(n,-1),v&&n._transitionTo(H,m,H))),U=U.parent,ne=G;}}scheduleTask(n){if(n.zone&&n.zone!==this){let o=this;for(;o;){if(o===n.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${n.zone.name}`);o=o.parent;}}n._transitionTo(z,H);let s=[];n._zoneDelegates=s,n._zone=this;try{n=this._zoneDelegate.scheduleTask(this,n);}catch(o){throw n._transitionTo(d,z,H),this._zoneDelegate.handleError(this,o),o;}return n._zoneDelegates===s&&this._updateTaskCount(n,1),n.state==z&&n._transitionTo(I,z),n;}scheduleMicroTask(n,s,o,v){return this.scheduleTask(new y(Z,n,s,o,v,void 0));}scheduleMacroTask(n,s,o,v,G){return this.scheduleTask(new y(P,n,s,o,v,G));}scheduleEventTask(n,s,o,v,G){return this.scheduleTask(new y(K,n,s,o,v,G));}cancelTask(n){if(n.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(n.zone||Y).name+"; Execution: "+this.name+")");if(!(n.state!==I&&n.state!==m)){n._transitionTo($,I,m);try{this._zoneDelegate.cancelTask(this,n);}catch(s){throw n._transitionTo(d,$),this._zoneDelegate.handleError(this,s),s;}return this._updateTaskCount(n,-1),n._transitionTo(H,$),n.runCount=0,n;}}_updateTaskCount(n,s){let o=n._zoneDelegates;s==-1&&(n._zoneDelegates=null);for(let v=0;v<o.length;v++)o[v]._updateTaskCount(n.type,s);}};se.__symbol__=l;let _=se,b={name:"",onHasTask:(L,n,s,o)=>L.hasTask(s,o),onScheduleTask:(L,n,s,o)=>L.scheduleTask(s,o),onInvokeTask:(L,n,s,o,v,G)=>L.invokeTask(s,o,v,G),onCancelTask:(L,n,s,o)=>L.cancelTask(s,o)};class k{constructor(n,s,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=n,this._parentDelegate=s,this._forkZS=o&&(o&&o.onFork?o:s._forkZS),this._forkDlgt=o&&(o.onFork?s:s._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:s._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:s._interceptZS),this._interceptDlgt=o&&(o.onIntercept?s:s._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:s._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:s._invokeZS),this._invokeDlgt=o&&(o.onInvoke?s:s._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:s._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:s._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?s:s._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:s._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:s._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?s:s._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:s._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:s._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?s:s._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:s._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:s._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?s:s._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:s._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;let v=o&&o.onHasTask,G=s&&s._hasTaskZS;(v||G)&&(this._hasTaskZS=v?o:b,this._hasTaskDlgt=s,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=n,o.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=s,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=s,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=s,this._cancelTaskCurrZone=this.zone));}fork(n,s){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,n,s):new _(n,s);}intercept(n,s,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,n,s,o):s;}invoke(n,s,o,v,G){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,n,s,o,v,G):s.apply(o,v);}handleError(n,s){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,n,s):!0;}scheduleTask(n,s){let o=s;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,n,s),o||(o=s);else if(s.scheduleFn)s.scheduleFn(s);else if(s.type==Z)R(s);else throw new Error("Task is missing scheduleFn.");return o;}invokeTask(n,s,o,v){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,n,s,o,v):s.callback.apply(o,v);}cancelTask(n,s){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,n,s);else{if(!s.cancelFn)throw Error("Task is not cancelable");o=s.cancelFn(s);}return o;}hasTask(n,s){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,n,s);}catch(o){this.handleError(n,o);}}_updateTaskCount(n,s){let o=this._taskCounts,v=o[n],G=o[n]=v+s;if(G<0)throw new Error("More tasks executed then were scheduled.");if(v==0||G==0){let f={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:n};this.hasTask(this.zone,f);}}}class y{constructor(n,s,o,v,G,f){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=n,this.source=s,this.data=v,this.scheduleFn=G,this.cancelFn=f,!o)throw new Error("callback is not defined");this.callback=o;let u=this;n===K&&v&&v.useG?this.invoke=y.invokeTask:this.invoke=function(){return y.invokeTask.call(e,u,this,arguments);};}static invokeTask(n,s,o){n||(n=this),ee++;try{return n.runCount++,n.zone.runTask(n,s,o);}finally{ee==1&&T(),ee--;}}get zone(){return this._zone;}get state(){return this._state;}cancelScheduleRequest(){this._transitionTo(H,z);}_transitionTo(n,s,o){if(this._state===s||this._state===o)this._state=n,n==H&&(this._zoneDelegates=null);else throw new Error(`${this.type} '${this.source}': can not transition to '${n}', expecting state '${s}'${o?" or '"+o+"'":""}, was '${this._state}'.`);}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this);}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount};}}let M=l("setTimeout"),N=l("Promise"),O=l("then"),x=[],A=!1,J;function W(L){if(J||e[N]&&(J=e[N].resolve(0)),J){let n=J[O];n||(n=J.then),n.call(J,L);}else e[M](L,0);}function R(L){ee===0&&x.length===0&&W(T),L&&x.push(L);}function T(){if(!A){for(A=!0;x.length;){let L=x;x=[];for(let n=0;n<L.length;n++){let s=L[n];try{s.zone.runTask(s,null,null);}catch(o){X.onUnhandledError(o);}}}X.microtaskDrainDone(),A=!1;}}let Y={name:"NO ZONE"},H="notScheduled",z="scheduling",I="scheduled",m="running",$="canceling",d="unknown",Z="microTask",P="macroTask",K="eventTask",oe={},X={symbol:l,currentZoneFrame:()=>U,onUnhandledError:V,microtaskDrainDone:V,scheduleMicroTask:R,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:V,patchMethod:()=>V,bindArguments:()=>[],patchThen:()=>V,patchMacroTask:()=>V,patchEventPrototype:()=>V,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>V,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>V,wrapWithCurrentZone:()=>V,filterProperties:()=>[],attachOriginToPatched:()=>V,_redefineProperty:()=>V,patchCallbacks:()=>V,nativeScheduleMicroTask:W},U={parent:null,zone:new _(null,null)},ne=null,ee=0;function V(){}return r("Zone","Zone"),e.Zone=_;})(globalThis);var pe=Object.getOwnPropertyDescriptor,Me=Object.defineProperty,Ie=Object.getPrototypeOf,ct=Object.create,at=Array.prototype.slice,Le="addEventListener",Ae="removeEventListener",Se=Zone.__symbol__(Le),Ne=Zone.__symbol__(Ae),ce="true",ae="false",ge=Zone.__symbol__("");function je(e,t){return Zone.current.wrap(e,t);}function He(e,t,c,r,a){return Zone.current.scheduleMacroTask(e,t,c,r,a);}var j=Zone.__symbol__,Ce=typeof window<"u",Te=Ce?window:void 0,q=Ce&&Te||globalThis,lt="removeAttribute";function $e(e,t){for(let c=e.length-1;c>=0;c--)typeof e[c]=="function"&&(e[c]=je(e[c],t+"_"+c));return e;}function ut(e,t){let c=e.constructor.name;for(let r=0;r<t.length;r++){let a=t[r],l=e[a];if(l){let E=pe(e,a);if(!Ye(E))continue;e[a]=(_=>{let b=function(){return _.apply(this,$e(arguments,c+"."+a));};return le(b,_),b;})(l);}}}function Ye(e){return e?e.writable===!1?!1:!(typeof e.get=="function"&&typeof e.set>"u"):!0;}var Je=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Re=!("nw"in q)&&typeof q.process<"u"&&{}.toString.call(q.process)==="[object process]",Fe=!Re&&!Je&&!!(Ce&&Te.HTMLElement),Ke=typeof q.process<"u"&&{}.toString.call(q.process)==="[object process]"&&!Je&&!!(Ce&&Te.HTMLElement),Pe={},We=function(e){if(e=e||q.event,!e)return;let t=Pe[e.type];t||(t=Pe[e.type]=j("ON_PROPERTY"+e.type));let c=this||e.target||q,r=c[t],a;if(Fe&&c===Te&&e.type==="error"){let l=e;a=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),a===!0&&e.preventDefault();}else a=r&&r.apply(this,arguments),a!=null&&!a&&e.preventDefault();return a;};function ze(e,t,c){let r=pe(e,t);if(!r&&c&&pe(c,t)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;let a=j("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete r.writable,delete r.value;let l=r.get,E=r.set,_=t.slice(2),b=Pe[_];b||(b=Pe[_]=j("ON_PROPERTY"+_)),r.set=function(k){let y=this;if(!y&&e===q&&(y=q),!y)return;typeof y[b]=="function"&&y.removeEventListener(_,We),E&&E.call(y,null),y[b]=k,typeof k=="function"&&y.addEventListener(_,We,!1);},r.get=function(){let k=this;if(!k&&e===q&&(k=q),!k)return null;let y=k[b];if(y)return y;if(l){let M=l.call(this);if(M)return r.set.call(this,M),typeof k[lt]=="function"&&k.removeAttribute(t),M;}return null;},Me(e,t,r),e[a]=!0;}function Qe(e,t,c){if(t)for(let r=0;r<t.length;r++)ze(e,"on"+t[r],c);else{let r=[];for(let a in e)a.slice(0,2)=="on"&&r.push(a);for(let a=0;a<r.length;a++)ze(e,r[a],c);}}var re=j("originalInstance");function ke(e){let t=q[e];if(!t)return;q[j(e)]=t,q[e]=function(){let a=$e(arguments,e);switch(a.length){case 0:this[re]=new t();break;case 1:this[re]=new t(a[0]);break;case 2:this[re]=new t(a[0],a[1]);break;case 3:this[re]=new t(a[0],a[1],a[2]);break;case 4:this[re]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.");}},le(q[e],t);let c=new t(function(){}),r;for(r in c)e==="XMLHttpRequest"&&r==="responseBlob"||function(a){typeof c[a]=="function"?q[e].prototype[a]=function(){return this[re][a].apply(this[re],arguments);}:Me(q[e].prototype,a,{set:function(l){typeof l=="function"?(this[re][a]=je(l,e+"."+a),le(this[re][a],l)):this[re][a]=l;},get:function(){return this[re][a];}});}(r);for(r in t)r!=="prototype"&&t.hasOwnProperty(r)&&(q[e][r]=t[r]);}function ue(e,t,c){let r=e;for(;r&&!r.hasOwnProperty(t);)r=Ie(r);!r&&e[t]&&(r=e);let a=j(t),l=null;if(r&&(!(l=r[a])||!r.hasOwnProperty(a))){l=r[a]=r[t];let E=r&&pe(r,t);if(Ye(E)){let _=c(l,a,t);r[t]=function(){return _(this,arguments);},le(r[t],l);}}return l;}function ft(e,t,c){let r=null;function a(l){let E=l.data;return E.args[E.cbIdx]=function(){l.invoke.apply(this,arguments);},r.apply(E.target,E.args),l;}r=ue(e,t,l=>function(E,_){let b=c(E,_);return b.cbIdx>=0&&typeof _[b.cbIdx]=="function"?He(b.name,_[b.cbIdx],b,a):l.apply(E,_);});}function le(e,t){e[j("OriginalDelegate")]=t;}var Xe=!1,Oe=!1;function ht(){try{let e=Te.navigator.userAgent;if(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1)return!0;}catch{}return!1;}function dt(){if(Xe)return Oe;Xe=!0;try{let e=Te.navigator.userAgent;(e.indexOf("MSIE ")!==-1||e.indexOf("Trident/")!==-1||e.indexOf("Edge/")!==-1)&&(Oe=!0);}catch{}return Oe;}Zone.__load_patch("ZoneAwarePromise",(e,t,c)=>{let r=Object.getOwnPropertyDescriptor,a=Object.defineProperty;function l(f){if(f&&f.toString===Object.prototype.toString){let u=f.constructor&&f.constructor.name;return(u||"")+": "+JSON.stringify(f);}return f?f.toString():Object.prototype.toString.call(f);}let E=c.symbol,_=[],b=e[E("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")]!==!1,k=E("Promise"),y=E("then"),M="__creationTrace__";c.onUnhandledError=f=>{if(c.showUncaughtError()){let u=f&&f.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",f.zone.name,"; Task:",f.task&&f.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(f);}},c.microtaskDrainDone=()=>{for(;_.length;){let f=_.shift();try{f.zone.runGuarded(()=>{throw f.throwOriginal?f.rejection:f;});}catch(u){O(u);}}};let N=E("unhandledPromiseRejectionHandler");function O(f){c.onUnhandledError(f);try{let u=t[N];typeof u=="function"&&u.call(this,f);}catch{}}function x(f){return f&&f.then;}function A(f){return f;}function J(f){return n.reject(f);}let W=E("state"),R=E("value"),T=E("finally"),Y=E("parentPromiseValue"),H=E("parentPromiseState"),z="Promise.then",I=null,m=!0,$=!1,d=0;function Z(f,u){return i=>{try{X(f,u,i);}catch(h){X(f,!1,h);}};}let P=function(){let f=!1;return function(i){return function(){f||(f=!0,i.apply(null,arguments));};};},K="Promise resolved with itself",oe=E("currentTaskTrace");function X(f,u,i){let h=P();if(f===i)throw new TypeError(K);if(f[W]===I){let g=null;try{(typeof i=="object"||typeof i=="function")&&(g=i&&i.then);}catch(C){return h(()=>{X(f,!1,C);})(),f;}if(u!==$&&i instanceof n&&i.hasOwnProperty(W)&&i.hasOwnProperty(R)&&i[W]!==I)ne(i),X(f,i[W],i[R]);else if(u!==$&&typeof g=="function")try{g.call(i,h(Z(f,u)),h(Z(f,!1)));}catch(C){h(()=>{X(f,!1,C);})();}else{f[W]=u;let C=f[R];if(f[R]=i,f[T]===T&&u===m&&(f[W]=f[H],f[R]=f[Y]),u===$&&i instanceof Error){let p=t.currentTask&&t.currentTask.data&&t.currentTask.data[M];p&&a(i,oe,{configurable:!0,enumerable:!1,writable:!0,value:p});}for(let p=0;p<C.length;)ee(f,C[p++],C[p++],C[p++],C[p++]);if(C.length==0&&u==$){f[W]=d;let p=i;try{throw new Error("Uncaught (in promise): "+l(i)+(i&&i.stack?`
`+i.stack:""));}catch(w){p=w;}b&&(p.throwOriginal=!0),p.rejection=i,p.promise=f,p.zone=t.current,p.task=t.currentTask,_.push(p),c.scheduleMicroTask();}}}return f;}let U=E("rejectionHandledHandler");function ne(f){if(f[W]===d){try{let u=t[U];u&&typeof u=="function"&&u.call(this,{rejection:f[R],promise:f});}catch{}f[W]=$;for(let u=0;u<_.length;u++)f===_[u].promise&&_.splice(u,1);}}function ee(f,u,i,h,g){ne(f);let C=f[W],p=C?typeof h=="function"?h:A:typeof g=="function"?g:J;u.scheduleMicroTask(z,()=>{try{let w=f[R],D=!!i&&T===i[T];D&&(i[Y]=w,i[H]=C);let S=u.run(p,void 0,D&&p!==J&&p!==A?[]:[w]);X(i,!0,S);}catch(w){X(i,!1,w);}},i);}let V="function ZoneAwarePromise() { [native code] }",se=function(){},L=e.AggregateError;class n{static toString(){return V;}static resolve(u){return u instanceof n?u:X(new this(null),m,u);}static reject(u){return X(new this(null),$,u);}static withResolvers(){let u={};return u.promise=new n((i,h)=>{u.resolve=i,u.reject=h;}),u;}static any(u){if(!u||typeof u[Symbol.iterator]!="function")return Promise.reject(new L([],"All promises were rejected"));let i=[],h=0;try{for(let p of u)h++,i.push(n.resolve(p));}catch{return Promise.reject(new L([],"All promises were rejected"));}if(h===0)return Promise.reject(new L([],"All promises were rejected"));let g=!1,C=[];return new n((p,w)=>{for(let D=0;D<i.length;D++)i[D].then(S=>{g||(g=!0,p(S));},S=>{C.push(S),h--,h===0&&(g=!0,w(new L(C,"All promises were rejected")));});});}static race(u){let i,h,g=new this((w,D)=>{i=w,h=D;});function C(w){i(w);}function p(w){h(w);}for(let w of u)x(w)||(w=this.resolve(w)),w.then(C,p);return g;}static all(u){return n.allWithCallback(u);}static allSettled(u){return(this&&this.prototype instanceof n?this:n).allWithCallback(u,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})});}static allWithCallback(u,i){let h,g,C=new this((S,F)=>{h=S,g=F;}),p=2,w=0,D=[];for(let S of u){x(S)||(S=this.resolve(S));let F=w;try{S.then(B=>{D[F]=i?i.thenCallback(B):B,p--,p===0&&h(D);},B=>{i?(D[F]=i.errorCallback(B),p--,p===0&&h(D)):g(B);});}catch(B){g(B);}p++,w++;}return p-=2,p===0&&h(D),C;}constructor(u){let i=this;if(!(i instanceof n))throw new Error("Must be an instanceof Promise.");i[W]=I,i[R]=[];try{let h=P();u&&u(h(Z(i,m)),h(Z(i,$)));}catch(h){X(i,!1,h);}}get[Symbol.toStringTag](){return"Promise";}get[Symbol.species](){return n;}then(u,i){let h=this.constructor?.[Symbol.species];(!h||typeof h!="function")&&(h=this.constructor||n);let g=new h(se),C=t.current;return this[W]==I?this[R].push(C,g,u,i):ee(this,C,g,u,i),g;}catch(u){return this.then(null,u);}finally(u){let i=this.constructor?.[Symbol.species];(!i||typeof i!="function")&&(i=n);let h=new i(se);h[T]=T;let g=t.current;return this[W]==I?this[R].push(g,h,u,u):ee(this,g,h,u,u),h;}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;let s=e[k]=e.Promise;e.Promise=n;let o=E("thenPatched");function v(f){let u=f.prototype,i=r(u,"then");if(i&&(i.writable===!1||!i.configurable))return;let h=u.then;u[y]=h,f.prototype.then=function(g,C){return new n((w,D)=>{h.call(this,w,D);}).then(g,C);},f[o]=!0;}c.patchThen=v;function G(f){return function(u,i){let h=f.apply(u,i);if(h instanceof n)return h;let g=h.constructor;return g[o]||v(g),h;};}return s&&(v(s),ue(e,"fetch",f=>G(f))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n;});Zone.__load_patch("toString",e=>{let t=Function.prototype.toString,c=j("OriginalDelegate"),r=j("Promise"),a=j("Error"),l=function(){if(typeof this=="function"){let k=this[c];if(k)return typeof k=="function"?t.call(k):Object.prototype.toString.call(k);if(this===Promise){let y=e[r];if(y)return t.call(y);}if(this===Error){let y=e[a];if(y)return t.call(y);}}return t.call(this);};l[c]=t,Function.prototype.toString=l;let E=Object.prototype.toString,_="[object Promise]";Object.prototype.toString=function(){return typeof Promise=="function"&&this instanceof Promise?_:E.call(this);};});var _e=!1;if(typeof window<"u")try{let e=Object.defineProperty({},"passive",{get:function(){_e=!0;}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e);}catch{_e=!1;}var _t={useG:!0},te={},et={},tt=new RegExp("^"+ge+"(\\w+)(true|false)$"),nt=j("propagationStopped");function rt(e,t){let c=(t?t(e):e)+ae,r=(t?t(e):e)+ce,a=ge+c,l=ge+r;te[e]={},te[e][ae]=a,te[e][ce]=l;}function Et(e,t,c,r){let a=r&&r.add||Le,l=r&&r.rm||Ae,E=r&&r.listeners||"eventListeners",_=r&&r.rmAll||"removeAllListeners",b=j(a),k="."+a+":",y="prependListener",M="."+y+":",N=function(R,T,Y){if(R.isRemoved)return;let H=R.callback;typeof H=="object"&&H.handleEvent&&(R.callback=m=>H.handleEvent(m),R.originalDelegate=H);let z;try{R.invoke(R,T,[Y]);}catch(m){z=m;}let I=R.options;if(I&&typeof I=="object"&&I.once){let m=R.originalDelegate?R.originalDelegate:R.callback;T[l].call(T,Y.type,m,I);}return z;};function O(R,T,Y){if(T=T||e.event,!T)return;let H=R||T.target||e,z=H[te[T.type][Y?ce:ae]];if(z){let I=[];if(z.length===1){let m=N(z[0],H,T);m&&I.push(m);}else{let m=z.slice();for(let $=0;$<m.length&&!(T&&T[nt]===!0);$++){let d=N(m[$],H,T);d&&I.push(d);}}if(I.length===1)throw I[0];for(let m=0;m<I.length;m++){let $=I[m];t.nativeScheduleMicroTask(()=>{throw $;});}}}let x=function(R){return O(this,R,!1);},A=function(R){return O(this,R,!0);};function J(R,T){if(!R)return!1;let Y=!0;T&&T.useG!==void 0&&(Y=T.useG);let H=T&&T.vh,z=!0;T&&T.chkDup!==void 0&&(z=T.chkDup);let I=!1;T&&T.rt!==void 0&&(I=T.rt);let m=R;for(;m&&!m.hasOwnProperty(a);)m=Ie(m);if(!m&&R[a]&&(m=R),!m||m[b])return!1;let $=T&&T.eventNameToString,d={},Z=m[b]=m[a],P=m[j(l)]=m[l],K=m[j(E)]=m[E],oe=m[j(_)]=m[_],X;T&&T.prepend&&(X=m[j(T.prepend)]=m[T.prepend]);function U(i,h){return!_e&&typeof i=="object"&&i?!!i.capture:!_e||!h?i:typeof i=="boolean"?{capture:i,passive:!0}:i?typeof i=="object"&&i.passive!==!1?{...i,passive:!0}:i:{passive:!0};}let ne=function(i){if(!d.isExisting)return Z.call(d.target,d.eventName,d.capture?A:x,d.options);},ee=function(i){if(!i.isRemoved){let h=te[i.eventName],g;h&&(g=h[i.capture?ce:ae]);let C=g&&i.target[g];if(C){for(let p=0;p<C.length;p++)if(C[p]===i){C.splice(p,1),i.isRemoved=!0,C.length===0&&(i.allRemoved=!0,i.target[g]=null);break;}}}if(i.allRemoved)return P.call(i.target,i.eventName,i.capture?A:x,i.options);},V=function(i){return Z.call(d.target,d.eventName,i.invoke,d.options);},se=function(i){return X.call(d.target,d.eventName,i.invoke,d.options);},L=function(i){return P.call(i.target,i.eventName,i.invoke,i.options);},n=Y?ne:V,s=Y?ee:L,o=function(i,h){let g=typeof h;return g==="function"&&i.callback===h||g==="object"&&i.originalDelegate===h;},v=T&&T.diff?T.diff:o,G=Zone[j("UNPATCHED_EVENTS")],f=e[j("PASSIVE_EVENTS")],u=function(i,h,g,C,p=!1,w=!1){return function(){let D=this||e,S=arguments[0];T&&T.transferEventName&&(S=T.transferEventName(S));let F=arguments[1];if(!F)return i.apply(this,arguments);if(Re&&S==="uncaughtException")return i.apply(this,arguments);let B=!1;if(typeof F!="function"){if(!F.handleEvent)return i.apply(this,arguments);B=!0;}if(H&&!H(i,F,D,arguments))return;let fe=_e&&!!f&&f.indexOf(S)!==-1,Q=U(arguments[2],fe),me=Q&&typeof Q=="object"&&Q.signal&&typeof Q.signal=="object"?Q.signal:void 0;if(me?.aborted)return;if(G){for(let he=0;he<G.length;he++)if(S===G[he])return fe?i.call(D,S,F,Q):i.apply(this,arguments);}let we=Q?typeof Q=="boolean"?!0:Q.capture:!1,Be=Q&&typeof Q=="object"?Q.once:!1,it=Zone.current,De=te[S];De||(rt(S,$),De=te[S]);let Ge=De[we?ce:ae],de=D[Ge],xe=!1;if(de){if(xe=!0,z){for(let he=0;he<de.length;he++)if(v(de[he],F))return;}}else de=D[Ge]=[];let ve,Ue=D.constructor.name,Ve=et[Ue];Ve&&(ve=Ve[S]),ve||(ve=Ue+h+($?$(S):S)),d.options=Q,Be&&(d.options.once=!1),d.target=D,d.capture=we,d.eventName=S,d.isExisting=xe;let ye=Y?_t:void 0;ye&&(ye.taskData=d),me&&(d.options.signal=void 0);let ie=it.scheduleEventTask(ve,F,ye,g,C);if(me&&(d.options.signal=me,i.call(me,"abort",()=>{ie.zone.cancelTask(ie);},{once:!0})),d.target=null,ye&&(ye.taskData=null),Be&&(Q.once=!0),!_e&&typeof ie.options=="boolean"||(ie.options=Q),ie.target=D,ie.capture=we,ie.eventName=S,B&&(ie.originalDelegate=F),w?de.unshift(ie):de.push(ie),p)return D;};};return m[a]=u(Z,k,n,s,I),X&&(m[y]=u(X,M,se,s,I,!0)),m[l]=function(){let i=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let g=arguments[2],C=g?typeof g=="boolean"?!0:g.capture:!1,p=arguments[1];if(!p)return P.apply(this,arguments);if(H&&!H(P,p,i,arguments))return;let w=te[h],D;w&&(D=w[C?ce:ae]);let S=D&&i[D];if(S)for(let F=0;F<S.length;F++){let B=S[F];if(v(B,p)){if(S.splice(F,1),B.isRemoved=!0,S.length===0&&(B.allRemoved=!0,i[D]=null,typeof h=="string")){let fe=ge+"ON_PROPERTY"+h;i[fe]=null;}return B.zone.cancelTask(B),I?i:void 0;}}return P.apply(this,arguments);},m[E]=function(){let i=this||e,h=arguments[0];T&&T.transferEventName&&(h=T.transferEventName(h));let g=[],C=ot(i,$?$(h):h);for(let p=0;p<C.length;p++){let w=C[p],D=w.originalDelegate?w.originalDelegate:w.callback;g.push(D);}return g;},m[_]=function(){let i=this||e,h=arguments[0];if(h){T&&T.transferEventName&&(h=T.transferEventName(h));let g=te[h];if(g){let C=g[ae],p=g[ce],w=i[C],D=i[p];if(w){let S=w.slice();for(let F=0;F<S.length;F++){let B=S[F],fe=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,fe,B.options);}}if(D){let S=D.slice();for(let F=0;F<S.length;F++){let B=S[F],fe=B.originalDelegate?B.originalDelegate:B.callback;this[l].call(this,h,fe,B.options);}}}}else{let g=Object.keys(i);for(let C=0;C<g.length;C++){let p=g[C],w=tt.exec(p),D=w&&w[1];D&&D!=="removeListener"&&this[_].call(this,D);}this[_].call(this,"removeListener");}if(I)return this;},le(m[a],Z),le(m[l],P),oe&&le(m[_],oe),K&&le(m[E],K),!0;}let W=[];for(let R=0;R<c.length;R++)W[R]=J(c[R],r);return W;}function ot(e,t){if(!t){let l=[];for(let E in e){let _=tt.exec(E),b=_&&_[1];if(b&&(!t||b===t)){let k=e[E];if(k)for(let y=0;y<k.length;y++)l.push(k[y]);}}return l;}let c=te[t];c||(rt(t),c=te[t]);let r=e[c[ae]],a=e[c[ce]];return r?a?r.concat(a):r.slice():a?a.slice():[];}function Tt(e,t){let c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",r=>function(a,l){a[nt]=!0,r&&r.apply(a,l);});}function mt(e,t,c,r,a){let l=Zone.__symbol__(r);if(t[l])return;let E=t[l]=t[r];t[r]=function(_,b,k){return b&&b.prototype&&a.forEach(function(y){let M=`${c}.${r}::`+y,N=b.prototype;try{if(N.hasOwnProperty(y)){let O=e.ObjectGetOwnPropertyDescriptor(N,y);O&&O.value?(O.value=e.wrapWithCurrentZone(O.value,M),e._redefineProperty(b.prototype,y,O)):N[y]&&(N[y]=e.wrapWithCurrentZone(N[y],M));}else N[y]&&(N[y]=e.wrapWithCurrentZone(N[y],M));}catch{}}),E.call(t,_,b,k);},e.attachOriginToPatched(t[r],E);}function st(e,t,c){if(!c||c.length===0)return t;let r=c.filter(l=>l.target===e);if(!r||r.length===0)return t;let a=r[0].ignoreProperties;return t.filter(l=>a.indexOf(l)===-1);}function qe(e,t,c,r){if(!e)return;let a=st(e,t,c);Qe(e,a,r);}function Ze(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2));}function yt(e,t){if(Re&&!Ke||Zone[e.symbol("patchEvents")])return;let c=t.__Zone_ignore_on_properties,r=[];if(Fe){let a=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);let l=ht()?[{target:a,ignoreProperties:["error"]}]:[];qe(a,Ze(a),c&&c.concat(l),Ie(a));}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<r.length;a++){let l=t[r[a]];l&&l.prototype&&qe(l.prototype,Ze(l.prototype),c);}}Zone.__load_patch("util",(e,t,c)=>{let r=Ze(e);c.patchOnProperties=Qe,c.patchMethod=ue,c.bindArguments=$e,c.patchMacroTask=ft;let a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),c.patchEventPrototype=Tt,c.patchEventTarget=Et,c.isIEOrEdge=dt,c.ObjectDefineProperty=Me,c.ObjectGetOwnPropertyDescriptor=pe,c.ObjectCreate=ct,c.ArraySlice=at,c.patchClass=ke,c.wrapWithCurrentZone=je,c.filterProperties=st,c.attachOriginToPatched=le,c._redefineProperty=Object.defineProperty,c.patchCallbacks=mt,c.getGlobalObjects=()=>({globalSources:et,zoneSymbolEventNames:te,eventNames:r,isBrowser:Fe,isMix:Ke,isNode:Re,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ge,ADD_EVENT_LISTENER_STR:Le,REMOVE_EVENT_LISTENER_STR:Ae});});function pt(e,t){t.patchMethod(e,"queueMicrotask",c=>function(r,a){Zone.current.scheduleMicroTask("queueMicrotask",a[0]);});}var be=j("zoneTask");function Ee(e,t,c,r){let a=null,l=null;t+=r,c+=r;let E={};function _(k){let y=k.data;return y.args[0]=function(){return k.invoke.apply(this,arguments);},y.handleId=a.apply(e,y.args),k;}function b(k){return l.call(e,k.data.handleId);}a=ue(e,t,k=>function(y,M){if(typeof M[0]=="function"){let N={isPeriodic:r==="Interval",delay:r==="Timeout"||r==="Interval"?M[1]||0:void 0,args:M},O=M[0];M[0]=function(){try{return O.apply(this,arguments);}finally{N.isPeriodic||(typeof N.handleId=="number"?delete E[N.handleId]:N.handleId&&(N.handleId[be]=null));}};let x=He(t,M[0],N,_,b);if(!x)return x;let A=x.data.handleId;return typeof A=="number"?E[A]=x:A&&(A[be]=x),A&&A.ref&&A.unref&&typeof A.ref=="function"&&typeof A.unref=="function"&&(x.ref=A.ref.bind(A),x.unref=A.unref.bind(A)),typeof A=="number"||A?A:x;}else return k.apply(e,M);}),l=ue(e,c,k=>function(y,M){let N=M[0],O;typeof N=="number"?O=E[N]:(O=N&&N[be],O||(O=N)),O&&typeof O.type=="string"?O.state!=="notScheduled"&&(O.cancelFn&&O.data.isPeriodic||O.runCount===0)&&(typeof N=="number"?delete E[N]:N&&(N[be]=null),O.zone.cancelTask(O)):k.apply(e,M);});}function gt(e,t){let{isBrowser:c,isMix:r}=t.getGlobalObjects();if(!c&&!r||!e.customElements||!("customElements"in e))return;let a=["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback","formAssociatedCallback","formDisabledCallback","formResetCallback","formStateRestoreCallback"];t.patchCallbacks(t,e.customElements,"customElements","define",a);}function kt(e,t){if(Zone[t.symbol("patchEventTarget")])return;let{eventNames:c,zoneSymbolEventNames:r,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:E}=t.getGlobalObjects();for(let b=0;b<c.length;b++){let k=c[b],y=k+l,M=k+a,N=E+y,O=E+M;r[k]={},r[k][l]=N,r[k][a]=O;}let _=e.EventTarget;if(!(!_||!_.prototype))return t.patchEventTarget(e,t,[_&&_.prototype]),!0;}function vt(e,t){t.patchEventPrototype(e,t);}Zone.__load_patch("legacy",e=>{let t=e[Zone.__symbol__("legacyPatch")];t&&t();});Zone.__load_patch("timers",e=>{let t="set",c="clear";Ee(e,t,c,"Timeout"),Ee(e,t,c,"Interval"),Ee(e,t,c,"Immediate");});Zone.__load_patch("requestAnimationFrame",e=>{Ee(e,"request","cancel","AnimationFrame"),Ee(e,"mozRequest","mozCancel","AnimationFrame"),Ee(e,"webkitRequest","webkitCancel","AnimationFrame");});Zone.__load_patch("blocking",(e,t)=>{let c=["alert","prompt","confirm"];for(let r=0;r<c.length;r++){let a=c[r];ue(e,a,(l,E,_)=>function(b,k){return t.current.run(l,e,k,_);});}});Zone.__load_patch("EventTarget",(e,t,c)=>{vt(e,c),kt(e,c);let r=e.XMLHttpRequestEventTarget;r&&r.prototype&&c.patchEventTarget(e,c,[r.prototype]);});Zone.__load_patch("MutationObserver",(e,t,c)=>{ke("MutationObserver"),ke("WebKitMutationObserver");});Zone.__load_patch("IntersectionObserver",(e,t,c)=>{ke("IntersectionObserver");});Zone.__load_patch("FileReader",(e,t,c)=>{ke("FileReader");});Zone.__load_patch("on_property",(e,t,c)=>{yt(c,e);});Zone.__load_patch("customElements",(e,t,c)=>{gt(e,c);});Zone.__load_patch("XHR",(e,t)=>{b(e);let c=j("xhrTask"),r=j("xhrSync"),a=j("xhrListener"),l=j("xhrScheduled"),E=j("xhrURL"),_=j("xhrErrorBeforeScheduled");function b(k){let y=k.XMLHttpRequest;if(!y)return;let M=y.prototype;function N(d){return d[c];}let O=M[Se],x=M[Ne];if(!O){let d=k.XMLHttpRequestEventTarget;if(d){let Z=d.prototype;O=Z[Se],x=Z[Ne];}}let A="readystatechange",J="scheduled";function W(d){let Z=d.data,P=Z.target;P[l]=!1,P[_]=!1;let K=P[a];O||(O=P[Se],x=P[Ne]),K&&x.call(P,A,K);let oe=P[a]=()=>{if(P.readyState===P.DONE)if(!Z.aborted&&P[l]&&d.state===J){let U=P[t.__symbol__("loadfalse")];if(P.status!==0&&U&&U.length>0){let ne=d.invoke;d.invoke=function(){let ee=P[t.__symbol__("loadfalse")];for(let V=0;V<ee.length;V++)ee[V]===d&&ee.splice(V,1);!Z.aborted&&d.state===J&&ne.call(d);},U.push(d);}else d.invoke();}else!Z.aborted&&P[l]===!1&&(P[_]=!0);};return O.call(P,A,oe),P[c]||(P[c]=d),m.apply(P,Z.args),P[l]=!0,d;}function R(){}function T(d){let Z=d.data;return Z.aborted=!0,$.apply(Z.target,Z.args);}let Y=ue(M,"open",()=>function(d,Z){return d[r]=Z[2]==!1,d[E]=Z[1],Y.apply(d,Z);}),H="XMLHttpRequest.send",z=j("fetchTaskAborting"),I=j("fetchTaskScheduling"),m=ue(M,"send",()=>function(d,Z){if(t.current[I]===!0||d[r])return m.apply(d,Z);{let P={target:d,url:d[E],isPeriodic:!1,args:Z,aborted:!1},K=He(H,R,P,W,T);d&&d[_]===!0&&!P.aborted&&K.state===J&&K.invoke();}}),$=ue(M,"abort",()=>function(d,Z){let P=N(d);if(P&&typeof P.type=="string"){if(P.cancelFn==null||P.data&&P.data.aborted)return;P.zone.cancelTask(P);}else if(t.current[z]===!0)return $.apply(d,Z);});}});Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&ut(e.navigator.geolocation,["getCurrentPosition","watchPosition"]);});Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function c(r){return function(a){ot(e,r).forEach(E=>{let _=e.PromiseRejectionEvent;if(_){let b=new _(r,{promise:a.promise,reason:a.rejection});E.invoke(b);}});};}e.PromiseRejectionEvent&&(t[j("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),t[j("rejectionHandledHandler")]=c("rejectionhandled"));});Zone.__load_patch("queueMicrotask",(e,t,c)=>{pt(e,c);});(globalThis.$localize??={}).locale="fr-FR";/**i18n:df03a702ebd81b05ea152e52a20eec708b332d3988c078a1553a2423fcf35a59*/