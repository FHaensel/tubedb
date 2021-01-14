(function(e){function t(t){for(var n,o,s=t[0],u=t[1],l=t[2],c=0,d=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={1:0},a={1:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{2:"948b78a7",3:"f20aba8e",4:"74771008",5:"4473b045"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"d0f9855e",3:"573bf1be",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=u.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===n||c===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],c=l.getAttribute("data-href");if(c===n||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;i.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("0ca9"),r("5b0d");var n=r("2b0e"),o=r("1f91"),a=r("42d2"),i=r("b05d");n["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"]});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},u=[],l={name:"App"},c=l,d=r("2877"),f=Object(d["a"])(c,s,u,!1,null,null,null),p=f.exports,h=(r("ddb0"),r("2f62")),m={namespaced:!0,state:()=>({data:void 0,loading:!1,error:void 0}),getters:{},mutations:{setLoading(e){e.loading=!0,e.error=void 0},setData(e,t){e.loading=!1,e.data=t},setError(e,t){e.loading=!1,e.error=t}},actions:{init({state:e,dispatch:t}){void 0===e.data&&t("refresh")},async refresh({commit:e,rootGetters:t}){e("setLoading");try{var r=await t.apiGET(["tsdb","model"]);e("setData",r.data.model)}catch(n){e("setError","error")}}}};n["a"].use(h["a"]);const v=!1;var b=function(){const e=new h["a"].Store({strict:!1,modules:{model:m},getters:{api:e=>(...e)=>{var t=e.join("/");return v?"http://localhost:8080/"+t:"/"+t},apiGET:(e,t)=>(e,r)=>{var o=t.api(...e);return n["a"].prototype.$axios.get(o,r)}}});return e},g=r("8c4f");const y=[{path:"/model",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b")),children:[{path:"/",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"9261"))},{path:"sensors/:sensor_id",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"f133")),props:e=>({id:e.params.sensor_id})}]},{path:"/",redirect:"/model"},{path:"*",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"e51e"))}];var w=y;n["a"].use(g["a"]);var P=function(){const e=new g["a"]({scrollBehavior:()=>({x:0,y:0}),routes:w,mode:"hash",base:""});return e},j=async function(){const e="function"===typeof b?await b({Vue:n["a"]}):b,t="function"===typeof P?await P({Vue:n["a"],store:e}):P;e.$router=t;const r={router:t,store:e,render:e=>e(p),el:"#q-app"};return{app:r,store:e,router:t}},E=r("bc3a"),O=r.n(E);n["a"].prototype.$axios=O.a;const _="";async function x(){const{app:e,store:t,router:r}=await j();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0];for(let l=0;!1===o&&l<s.length;l++)if("function"===typeof s[l])try{await s[l]({app:e,router:r,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:_})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new n["a"](e)}x()},"5b0d":function(e,t,r){}});