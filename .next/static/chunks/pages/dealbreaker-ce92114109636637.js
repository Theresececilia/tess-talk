(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18],{7828:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dealbreaker",function(){return r(1283)}])},7350:function(e,t){"use strict";t.Z=[{id:"1",name:"random game",link:"/dealbreaker"},{id:"2",name:"never have i ever",link:"/dealbreaker"},{id:"3",name:"no wrong answers",link:"/dealbreaker"},{id:"4",name:"cards against humanity",link:"/dealbreaker"},{id:"5",name:"dealbreaker",link:"/dealbreaker",cards:["Searching frenetically after Bigfoot ","Drink beer for breakfast","Need to suck your toes to be able to sleep"]},{id:"6",name:"random game",link:"/dealbreaker"},{id:"7",name:"would you rather",link:"/dealbreaker"},{id:"8",name:"icebreaker questions",link:"/dealbreaker"},{id:"9",name:"create game",link:"/dealbreaker"}]},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return o},default:function(){return i}});let a=r(8754),l=(r(7294),a._(r(8976)));function n(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let r=l.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let i=a.loader,u=()=>null!=i?i().then(n):Promise.resolve(n(()=>null));return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r({...a,loader:u}):(delete a.webpack,delete a.modules,o(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let a=r(8754),l=a._(r(7294)),n=l.default.createContext(null)},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let a=r(8754),l=a._(r(7294)),n=r(2254),o=[],i=[],u=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function o(){if(!a){let t=new s(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&i.push(t=>{for(let r of e)if(t.includes(r))return o()})}function d(e,t){!function(){o();let e=l.default.useContext(n.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let i=l.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),l.default.useMemo(()=>{var t;return i.loading||i.error?l.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?l.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return d.preload=()=>o(),d.displayName="LoadableComponent",l.default.forwardRef(d)}(d,e)}function f(e,t){let r=[];for(;e.length;){let a=e.pop();r.push(a(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(o).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(u=!0,t());f(i,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let b=c},1283:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(5893);r(7294);var l=r(5152),n=r.n(l),o=r(1351),i=r.n(o),u=r(7350);let d=n()(()=>r.e(542).then(r.t.bind(r,1542,23)),{loadableGenerated:{webpack:()=>[1542]},ssr:!1}),s=e=>{console.log("You swiped: "+e)},c=e=>{console.log(e+" left the screen")};function f(){let e=u.Z.find(e=>"5"===e.id);return e?(0,a.jsx)(a.Fragment,{children:e.cards.map((e,t)=>(0,a.jsx)(d,{className:i().card,onSwipe:s,onCardLeftScreen:()=>c("fooBar"),preventSwipe:["right","left"],children:(0,a.jsx)("h3",{styles:i().dealbreaker,children:e})},t))}):(0,a.jsx)("p",{children:"No more dealbreaker cards found!"})}},1351:function(e){e.exports={card:"dealbreaker_card__H3gSu"}},5152:function(e,t,r){e.exports=r(5677)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7828)}),_N_E=e.O()}]);