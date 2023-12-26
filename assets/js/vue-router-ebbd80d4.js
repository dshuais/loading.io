import{G as e,u as t,x as n,l as r,n as o,y as a,i as s,H as c,A as l,r as i,a as u}from"./@vue-1d4d5e6e.js";
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const f="undefined"!=typeof window;const p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=m(o)?o.map(e):e(o)}return n}const d=()=>{},m=Array.isArray,g=/\/$/,v=e=>e.replace(g,"");function y(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let l=t.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=t.slice(0,l),a=t.slice(l+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o,a,s=n.length-1;for(o=0;o<r.length;o++)if(a=r[o],"."!==a){if(".."!==a)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function b(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return m(e)?O(e,t):m(t)?O(t,e):e===t}function O(e,t){return m(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var R,P,x,C;(P=R||(R={})).pop="pop",P.push="push",(C=x||(x={})).back="back",C.forward="forward",C.unknown="";const $=/^[^#]+#/;function j(e,t){return e.replace($,"#")+t}const S=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function q(e,t){return(history.state?history.state.position-t:-1)+e}const L=new Map;let M=()=>location.protocol+"//"+location.host;function B(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),b(n,"")}return b(n,e)+r+o}function G(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?S():null}}function _(e){const t=function(e){const{history:t,location:n}=window,r={value:B(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),l=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:M()+e+r;try{t[s?"replaceState":"pushState"](a,"",l),o.value=a}catch(i){n[s?"replace":"assign"](l)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=p({},o.value,t.state,{forward:e,scroll:S()});a(s.current,s,!0),a(e,p({},G(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,p({},t.state,G(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(f){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=B(e,location),l=n.value,i=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===l)return void(s=null);u=i?a.position-i.position:0}else r(c);o.forEach((e=>{e(n.value,l,{delta:u,type:R.pop,direction:u?u>0?x.forward:x.back:x.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:S()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",l),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=p({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:j.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function I(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),_(e)}function D(e){return"string"==typeof e||"symbol"==typeof e}const U={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},F=Symbol("");var T,W;function V(e,t){return p(new Error,{type:e,[F]:!0},t)}function z(e,t){return e instanceof Error&&F in e&&(null==t||!!(e.type&t))}(W=T||(T={}))[W.aborted=4]="aborted",W[W.cancelled=8]="cancelled",W[W.duplicated=16]="duplicated";const H="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Y(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=X(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(N(r))return 1;if(N(o))return-1}return o.length-r.length}function N(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Z={type:0,value:""},J=/[a-zA-Z0-9_]/;function ee(e,t,n){const r=function(e,t){const n=p({},K,t),r=[];let o=n.start?"^":"";const a=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(Q,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:i,regexp:u}=r;a.push({name:e,repeatable:n,optional:i});const f=u||H;if(f!==H){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=i&&l.length<2?`(?:/${p})`:"/"+p),i&&(p+="?"),o+=p,s+=20,i&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,l=a in t?t[a]:"";if(m(l)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const i=m(l)?l.join("/"):l;if(!i){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=i}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[Z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${i}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,l=0,i="",u="";function f(){i&&(0===n?a.push({type:0,value:i}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:i,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),i="")}function p(){i+=c}for(;l<e.length;)if(c=e[l++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(i&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:J.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${i}"`),f(),s(),o}(e.path),n),o=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function te(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);l.aliasOf=r&&r.record;const i=se(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,h;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ee(t,n,i),r?r.alias.push(f):(h=h||f,h!==f&&h.alias.push(f),c&&e.name&&!oe(f)&&a(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&s(f)}return h?()=>{a(h)}:d}function a(e){if(D(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&Y(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ce(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!oe(e)&&r.set(e.record.name,e)}return t=se({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw V(1,{location:e});s=o.record.name,c=p(ne(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ne(e.params,o.keys.map((e=>e.name)))),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw V(1,{location:e,currentLocation:t});s=o.record.name,c=p({},t.params,e.params),a=o.stringify(c)}const l=[];let i=o;for(;i;)l.unshift(i.record),i=i.parent;return{name:s,path:a,params:c,matched:l,meta:ae(l)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ne(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ae(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function se(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ce(e,t){return t.children.some((t=>t===e||ce(e,t)))}const le=/#/g,ie=/&/g,ue=/\//g,fe=/=/g,pe=/\?/g,he=/\+/g,de=/%5B/g,me=/%5D/g,ge=/%5E/g,ve=/%60/g,ye=/%7B/g,be=/%7C/g,we=/%7D/g,Ee=/%20/g;function ke(e){return encodeURI(""+e).replace(be,"|").replace(de,"[").replace(me,"]")}function Oe(e){return ke(e).replace(he,"%2B").replace(Ee,"+").replace(le,"%23").replace(ie,"%26").replace(ve,"`").replace(ye,"{").replace(we,"}").replace(ge,"^")}function Re(e){return null==e?"":function(e){return ke(e).replace(le,"%23").replace(pe,"%3F")}(e).replace(ue,"%2F")}function Pe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function xe(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(he," "),o=e.indexOf("="),a=Pe(o<0?e:e.slice(0,o)),s=o<0?null:Pe(e.slice(o+1));if(a in t){let e=t[a];m(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Ce(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n).replace(fe,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(m(r)?r.map((e=>e&&Oe(e))):[r&&Oe(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function $e(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=m(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const je=Symbol(""),Se=Symbol(""),Ae=Symbol(""),qe=Symbol(""),Le=Symbol("");function Me(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Be(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const l=e=>{var l;!1===e?c(V(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(l=e)||l&&"object"==typeof l?c(V(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},i=e.call(r&&r.instances[o],t,n,l);let u=Promise.resolve(i);e.length<3&&(u=u.then(l)),u.catch((e=>c(e)))}))}function Ge(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Be(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const l=(a.__vccOpts||a)[t];return l&&Be(l,n,r,s,e)()}))))}}var a;return o}function _e(e){const r=s(Ae),o=s(qe),a=n((()=>r.resolve(t(e.to)))),c=n((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const s=r.findIndex(w.bind(null,n));if(s>-1)return s;const c=De(e[t-2]);return t>1&&De(n)===c&&r[r.length-1].path!==c?r.findIndex(w.bind(null,e[t-2])):s})),l=n((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!m(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(o.params,a.value.params))),i=n((()=>c.value>-1&&c.value===o.matched.length-1&&E(o.params,a.value.params)));return{route:a,href:n((()=>a.value.href)),isActive:l,isExactActive:i,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?r[t(e.replace)?"replace":"push"](t(e.to)).catch(d):Promise.resolve()}}}const Ie=a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_e,setup(e,{slots:t}){const o=r(_e(e)),{options:a}=s(Ae),l=n((()=>({[Ue(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,[Ue(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const n=t.default&&t.default(o);return e.custom?n:c("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:l.value},n)}}});function De(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ue=(e,t,n)=>null!=e?e:null!=t?t:n;function Fe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Te=a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:r,slots:o}){const a=s(Le),f=n((()=>e.route||a.value)),h=s(Se,0),d=n((()=>{let e=t(h);const{matched:n}=f.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),m=n((()=>f.value.matched[d.value]));l(Se,n((()=>d.value+1))),l(je,m),l(Le,f);const g=i();return u((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=f.value,n=e.name,a=m.value,s=a&&a.components[n];if(!s)return Fe(o.default,{Component:s,route:t});const l=a.props[n],i=l?!0===l?t.params:"function"==typeof l?l(t):l:null,u=c(s,p({},i,r,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[n]=null)},ref:g}));return Fe(o.default,{Component:u,route:t})||u}}});function We(a){const s=te(a.routes,a),c=a.parseQuery||xe,l=a.stringifyQuery||Ce,i=a.history,u=Me(),g=Me(),v=Me(),b=e(U);let k=U;f&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=h.bind(null,(e=>""+e)),P=h.bind(null,Re),x=h.bind(null,Pe);function C(e,t){if(t=p({},t||b.value),"string"==typeof e){const n=y(c,e,t.path),r=s.resolve({path:n.path},t),o=i.createHref(n.fullPath);return p(n,r,{params:x(r.params),hash:Pe(n.hash),redirectedFrom:void 0,href:o})}let n;if("path"in e)n=p({},e,{path:y(c,e.path,t.path).path});else{const r=p({},e.params);for(const e in r)null==r[e]&&delete r[e];n=p({},e,{params:P(e.params)}),t.params=P(t.params)}const r=s.resolve(n,t),o=e.hash||"";r.params=O(x(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(l,p({},e,{hash:(u=o,ke(u).replace(ye,"{").replace(we,"}").replace(ge,"^")),path:r.path}));var u;const f=i.createHref(a);return p({fullPath:a,hash:o,query:l===Ce?$e(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function $(e){return"string"==typeof e?y(c,e,b.value.path):p({},e)}function j(e,t){if(k!==e)return V(8,{from:t,to:e})}function M(e){return G(e)}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function G(e,t){const n=k=C(e),r=b.value,o=e.state,a=e.force,s=!0===e.replace,c=B(n);if(c)return G(p($(c),{state:"object"==typeof c?p({},o,c.state):o,force:a,replace:s}),t||n);const i=n;let u;return i.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&w(t.matched[r],n.matched[o])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(l,r,n)&&(u=V(16,{to:i,from:r}),Z(r,r,!0,!1)),(u?Promise.resolve(u):I(i,r)).catch((e=>z(e)?z(e,2)?e:N(e):Y(e,i,r))).then((e=>{if(e){if(z(e,2))return G(p({replace:s},$(e.to),{state:"object"==typeof e.to?p({},o,e.to.state):o,force:a}),t||i)}else e=T(i,r,!0,s,o);return F(i,r,e),e}))}function _(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>w(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>w(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=Ge(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const s=_.bind(null,e,t);return n.push(s),Ve(n).then((()=>{n=[];for(const r of u.list())n.push(Be(r,e,t));return n.push(s),Ve(n)})).then((()=>{n=Ge(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(s),Ve(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(m(r.beforeEnter))for(const o of r.beforeEnter)n.push(Be(o,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(s),Ve(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ge(a,"beforeRouteEnter",e,t),n.push(s),Ve(n)))).then((()=>{n=[];for(const r of g.list())n.push(Be(r,e,t));return n.push(s),Ve(n)})).catch((e=>z(e,8)?e:Promise.reject(e)))}function F(e,t,n){for(const r of v.list())r(e,t,n)}function T(e,t,n,r,o){const a=j(e,t);if(a)return a;const s=t===U,c=f?history.state:{};n&&(r||s?i.replace(e.fullPath,p({scroll:s&&c&&c.scroll},o)):i.push(e.fullPath,o)),b.value=e,Z(e,t,n,s),N()}let W;function H(){W||(W=i.listen(((e,t,n)=>{if(!re.listening)return;const r=C(e),o=B(r);if(o)return void G(p(o,{replace:!0}),r).catch(d);k=r;const a=b.value;var s,c;f&&(s=q(a.fullPath,n.delta),c=S(),L.set(s,c)),I(r,a).catch((e=>z(e,12)?e:z(e,2)?(G(e.to,r).then((e=>{z(e,20)&&!n.delta&&n.type===R.pop&&i.go(-1,!1)})).catch(d),Promise.reject()):(n.delta&&i.go(-n.delta,!1),Y(e,r,a)))).then((e=>{(e=e||T(r,a,!1))&&(n.delta&&!z(e,8)?i.go(-n.delta,!1):n.type===R.pop&&z(e,20)&&i.go(-1,!1)),F(r,a,e)})).catch(d)})))}let K,Q=Me(),X=Me();function Y(e,t,n){N(e);const r=X.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function N(e){return K||(K=!e,H(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function Z(e,t,n,r){const{scrollBehavior:s}=a;if(!f||!s)return Promise.resolve();const c=!n&&function(e){const t=L.get(e);return L.delete(e),t}(q(e.fullPath,0))||(r||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&A(e))).catch((n=>Y(n,e,t)))}const J=e=>i.go(e);let ee;const ne=new Set,re={currentRoute:b,listening:!0,addRoute:function(e,t){let n,r;return D(e)?(n=s.getRecordMatcher(e),r=t):r=e,s.addRoute(r,n)},removeRoute:function(e){const t=s.getRecordMatcher(e);t&&s.removeRoute(t)},hasRoute:function(e){return!!s.getRecordMatcher(e)},getRoutes:function(){return s.getRoutes().map((e=>e.record))},resolve:C,options:a,push:M,replace:function(e){return M(p($(e),{replace:!0}))},go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:u.add,beforeResolve:g.add,afterEach:v.add,onError:X.add,isReady:function(){return K&&b.value!==U?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))},install(e){e.component("RouterLink",Ie),e.component("RouterView",Te),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(b)}),f&&!ee&&b.value===U&&(ee=!0,M(i.location).catch((e=>{})));const o={};for(const t in U)o[t]=n((()=>b.value[t]));e.provide(Ae,this),e.provide(qe,r(o)),e.provide(Le,b);const a=e.unmount;ne.add(e),e.unmount=function(){ne.delete(e),ne.size<1&&(k=U,W&&W(),W=null,b.value=U,ee=!1,K=!1),a()}}};return re}function Ve(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function ze(){return s(Ae)}export{I as a,We as c,ze as u};