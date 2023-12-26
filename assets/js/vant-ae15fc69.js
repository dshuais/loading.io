import{r as e,l as t,i as o,a as n,g as a,y as s,x as l,z as r,c,b as i,o as u,A as d,w as f,B as p,T as v,C as m,D as h,n as g,f as y,E as b,F as w}from"./@vue-1d4d5e6e.js";import{u as x,o as k,g as S,a as $,b as C,d as I,r as O}from"./@vant-e28e905e.js";const z=e=>null!=e,P=e=>"function"==typeof e,A=e=>null!==e&&"object"==typeof e,B=e=>A(e)&&P(e.then)&&P(e.catch),j=e=>"number"==typeof e||/^\d+(\.\d+)?$/.test(e);function L(){}const E=Object.assign,D="undefined"!=typeof window;function T(e,t){const o=t.split(".");let n=e;return o.forEach((e=>{var t;n=A(n)&&null!=(t=n[e])?t:""})),n}const V=[Number,String],N={type:Boolean,default:!0},X=e=>({type:V,default:e}),R=e=>({type:String,default:e});D&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());const Y=e=>e.stopPropagation();function H(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&Y(e)}function Z(e){if(z(e))return j(e)?`${e}px`:String(e)}x();const F=/-(\w)/g,M=e=>e.replace(F,((e,t)=>t.toUpperCase())),_=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,""),{hasOwnProperty:q}=Object.prototype;function K(e,t){return Object.keys(t).forEach((o=>{!function(e,t,o){const n=t[o];z(n)&&(q.call(e,o)&&A(n)?e[o]=K(Object(e[o]),n):e[o]=n)}(e,t,o)})),e}const U=e("zh-CN"),W=t({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var G={messages:()=>W[U.value],use(e,t){U.value=e,this.add({[e]:t})},add(e={}){K(W,e)}};function J(e){const t=M(e)+".";return(e,...o)=>{const n=G.messages(),a=T(n,t+e)||T(n,e);return P(a)?a(...o):a}}function Q(e,t){return t?"string"==typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,o)=>t+Q(e,o)),""):Object.keys(t).reduce(((o,n)=>o+(t[n]?Q(e,n):"")),""):""}function ee(e){return(t,o)=>(t&&"string"!=typeof t&&(o=t,t=""),`${t=t?`${e}__${t}`:e}${Q(t,o)}`)}function te(e){const t=`van-${e}`;return[t,ee(t),J(t)]}function oe(e){return e.install=t=>{const{name:o}=e;o&&(t.component(o,e),t.component(M(`-${o}`),e))},e}const ne=Symbol();function ae(e){const t=a();t&&E(t.proxy,e)}const[se,le]=te("badge");const re=oe(s({name:se,props:{dot:Boolean,max:V,tag:R("div"),color:String,offset:Array,content:V,showZero:N,position:R("top-right")},setup(e,{slots:t}){const o=()=>{if(t.content)return!0;const{content:o,showZero:n}=e;return z(o)&&""!==o&&(n||0!==o&&"0"!==o)},n=()=>{const{dot:n,max:a,content:s}=e;if(!n&&o())return t.content?t.content():z(a)&&j(s)&&+s>a?`${a}+`:s},a=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,s=l((()=>{const o={background:e.color};if(e.offset){const[n,s]=e.offset,{position:l}=e,[r,c]=l.split("-");t.default?(o[r]="number"==typeof s?Z("top"===r?s:-s):"top"===r?Z(s):a(s),o[c]="number"==typeof n?Z("left"===c?n:-n):"left"===c?Z(n):a(n)):(o.marginTop=Z(s),o.marginLeft=Z(n))}return o})),c=()=>{if(o()||e.dot)return r("div",{class:le([e.position,{dot:e.dot,fixed:!!t.default}]),style:s.value},[n()])};return()=>{if(t.default){const{tag:o}=e;return r(o,{class:le("wrapper")},{default:()=>[t.default(),c()]})}return c()}}}));let ce=2e3;const[ie,ue]=te("config-provider"),de=Symbol(ie);s({name:ie,props:{tag:R("div"),theme:R("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String},setup(e,{slots:t}){const o=l((()=>function(e){const t={};return Object.keys(e).forEach((o=>{t[`--van-${_(o)}`]=e[o]})),t}(E({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight))));if(D){const t=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},o=(t=e.theme)=>{document.documentElement.classList.remove(`van-theme-${t}`)};n((()=>e.theme),((e,n)=>{n&&o(n),t()}),{immediate:!0}),c(t),i(o),u(o)}return d(de,e),f((()=>{var t;void 0!==e.zIndex&&(t=e.zIndex,ce=t)})),()=>r(e.tag,{class:ue(),style:o.value},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}})}});const[fe,pe]=te("icon");const ve=oe(s({name:fe,props:{dot:Boolean,tag:R("i"),name:String,size:V,badge:V,color:String,badgeProps:Object,classPrefix:String},setup(e,{slots:t}){const n=o(de,null),a=l((()=>e.classPrefix||(null==n?void 0:n.iconPrefix)||pe()));return()=>{const{tag:o,dot:n,name:s,size:l,badge:c,color:i}=e,u=(e=>null==e?void 0:e.includes("/"))(s);return r(re,p({dot:n,tag:o,class:[a.value,u?"":`${a.value}-${s}`],style:{color:i,fontSize:Z(l)},content:c},e.badgeProps),{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t),u&&r("img",{class:pe("image"),src:s},null)]}})}}})),me={show:Boolean,zIndex:V,overlay:N,duration:V,teleport:[String,Object],lockScroll:N,lazyRender:N,beforeClose:Function,overlayStyle:Object,overlayClass:null,transitionAppear:Boolean,closeOnClickOverlay:N};let he=0;const ge="van-overflow-hidden";function ye(t,o){const a=function(){const t=e(0),o=e(0),n=e(0),a=e(0),s=e(0),l=e(0),r=e(""),c=()=>{n.value=0,a.value=0,s.value=0,l.value=0,r.value=""};return{move:e=>{const c=e.touches[0];var i,u;n.value=(c.clientX<0?0:c.clientX)-t.value,a.value=c.clientY-o.value,s.value=Math.abs(n.value),l.value=Math.abs(a.value),(!r.value||s.value<10&&l.value<10)&&(r.value=(i=s.value)>(u=l.value)?"horizontal":u>i?"vertical":"")},start:e=>{c(),t.value=e.touches[0].clientX,o.value=e.touches[0].clientY},reset:c,startX:t,startY:o,deltaX:n,deltaY:a,offsetX:s,offsetY:l,direction:r,isVertical:()=>"vertical"===r.value,isHorizontal:()=>"horizontal"===r.value}}(),s=e=>{a.move(e);const o=a.deltaY.value>0?"10":"01",n=S(e.target,t.value),{scrollHeight:s,offsetHeight:l,scrollTop:r}=n;let c="11";0===r?c=l>=s?"00":"01":r+l>=s&&(c="10"),"11"===c||!a.isVertical()||parseInt(c,2)&parseInt(o,2)||H(e,!0)},l=()=>{document.addEventListener("touchstart",a.start),document.addEventListener("touchmove",s,{passive:!1}),he||document.body.classList.add(ge),he++},r=()=>{he&&(document.removeEventListener("touchstart",a.start),document.removeEventListener("touchmove",s),he--,he||document.body.classList.remove(ge))},c=()=>o()&&r();k((()=>o()&&l())),i(c),u(c),n(o,(e=>{e?l():r()}))}function be(t){const o=e(!1);return n(t,(e=>{e&&(o.value=e)}),{immediate:!0}),e=>()=>o.value?e():null}const[we,xe]=te("overlay");const ke=oe(s({name:we,props:{show:Boolean,zIndex:V,duration:V,className:null,lockScroll:N,lazyRender:N,customStyle:Object},setup(t,{slots:o}){const n=e(),a=be((()=>t.show||!t.lazyRender))((()=>{var e;const a=E(function(e){const t={};return void 0!==e&&(t.zIndex=+e),t}(t.zIndex),t.customStyle);return z(t.duration)&&(a.animationDuration=`${t.duration}s`),m(r("div",{ref:n,style:a,class:[xe(),t.className]},[null==(e=o.default)?void 0:e.call(o)]),[[h,t.show]])}));return $("touchmove",(e=>{t.lockScroll&&H(e,!0)}),{target:n}),()=>r(v,{name:"van-fade",appear:!0},{default:a})}})),Se=E({},me,{round:Boolean,position:R("center"),closeIcon:R("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:R("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[$e,Ce]=te("popup");const Ie=oe(s({name:$e,inheritAttrs:!1,props:Se,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(t,{emit:o,attrs:a,slots:s}){let u,f;const x=e(),k=e(),S=be((()=>t.show||!t.lazyRender)),C=l((()=>{const e={zIndex:x.value};if(z(t.duration)){e["center"===t.position?"animationDuration":"transitionDuration"]=`${t.duration}s`}return e})),I=()=>{u||(u=!0,x.value=void 0!==t.zIndex?+t.zIndex:++ce,o("open"))},O=()=>{u&&function(e,{args:t=[],done:o,canceled:n}){if(e){const a=e.apply(null,t);B(a)?a.then((e=>{e?o():n&&n()})).catch(L):a?o():n&&n()}else o()}(t.beforeClose,{done(){u=!1,o("close"),o("update:show",!1)}})},P=e=>{o("clickOverlay",e),t.closeOnClickOverlay&&O()},A=()=>{if(t.overlay)return r(ke,{show:t.show,class:t.overlayClass,zIndex:x.value,duration:t.duration,customStyle:t.overlayStyle,role:t.closeOnClickOverlay?"button":void 0,tabindex:t.closeOnClickOverlay?0:void 0,onClick:P},{default:s["overlay-content"]})},j=e=>{o("clickCloseIcon",e),O()},E=()=>{if(t.closeable)return r(ve,{role:"button",tabindex:0,name:t.closeIcon,class:[Ce("close-icon",t.closeIconPosition),"van-haptics-feedback"],classPrefix:t.iconPrefix,onClick:j},null)},D=()=>o("opened"),T=()=>o("closed"),V=e=>o("keydown",e),N=S((()=>{var e;const{round:o,position:n,safeAreaInsetTop:l,safeAreaInsetBottom:c}=t;return m(r("div",p({ref:k,style:C.value,role:"dialog",tabindex:0,class:[Ce({round:o,[n]:n}),{"van-safe-area-top":l,"van-safe-area-bottom":c}],onKeydown:V},a),[null==(e=s.default)?void 0:e.call(s),E()]),[[h,t.show]])})),X=()=>{const{position:e,transition:o,transitionAppear:n}=t;return r(v,{name:o||("center"===e?"van-fade":`van-popup-slide-${e}`),appear:n,onAfterEnter:D,onAfterLeave:T},{default:N})};return n((()=>t.show),(e=>{e&&!u&&(I(),0===a.tabindex&&g((()=>{var e;null==(e=k.value)||e.focus()}))),!e&&u&&(u=!1,o("close"))})),ae({popupRef:k}),ye(k,(()=>t.show&&t.lockScroll)),$("popstate",(()=>{t.closeOnPopstate&&(O(),f=!1)})),y((()=>{t.show&&I()})),c((()=>{f&&(o("update:show",!0),f=!1)})),i((()=>{t.show&&t.teleport&&(O(),f=!0)})),d(ne,(()=>t.show)),()=>t.teleport?r(b,{to:t.teleport},{default:()=>[A(),X()]}):r(w,null,[A(),X()])}})),[Oe,ze]=te("notice-bar");const Pe=oe(s({name:Oe,props:{text:String,mode:String,color:String,delay:X(1),speed:X(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},emits:["close","replay"],setup(a,{emit:s,slots:l}){let c,i=0,u=0;const d=e(),f=e(),p=t({show:!0,offset:0,duration:0}),v=e=>{"closeable"===a.mode&&(p.show=!1,s("close",e))},g=()=>{if(l["right-icon"])return l["right-icon"]();const e="closeable"===a.mode?"cross":"link"===a.mode?"arrow":void 0;return e?r(ve,{name:e,class:ze("right-icon"),onClick:v},null):void 0},y=()=>{p.offset=i,p.duration=0,O((()=>{I((()=>{p.offset=-u,p.duration=(u+i)/+a.speed,s("replay")}))}))},b=()=>{const e=!1===a.scrollable&&!a.wrapable,t={transform:p.offset?`translateX(${p.offset}px)`:"",transitionDuration:`${p.duration}s`};return r("div",{ref:d,role:"marquee",class:ze("wrap")},[r("div",{ref:f,style:t,class:[ze("content"),{"van-ellipsis":e}],onTransitionend:y},[l.default?l.default():a.text])])},w=()=>{const{delay:e,speed:t,scrollable:o}=a,n=z(e)?1e3*+e:0;i=0,u=0,p.offset=0,p.duration=0,clearTimeout(c),c=setTimeout((()=>{if(!d.value||!f.value||!1===o)return;const e=C(d).width,n=C(f).width;(o||n>e)&&I((()=>{i=e,u=n,p.offset=-u,p.duration=u/+t}))}),n)};return function(e){const t=o(ne,null);t&&n(t,(t=>{t&&e()}))}(w),k(w),$("pageshow",w),ae({reset:w}),n((()=>[a.text,a.scrollable]),w),()=>{const{color:e,wrapable:t,background:o}=a;return m(r("div",{role:"alert",class:ze({wrapable:t}),style:{color:e,background:o}},[l["left-icon"]?l["left-icon"]():a.leftIcon?r(ve,{class:ze("left-icon"),name:a.leftIcon},null):void 0,b(),g()]),[[h,p.show]])}}}));export{Pe as N,Ie as P};
