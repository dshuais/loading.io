import{c as e,u as s,r as o,d}from"./@unhead-87b6c096.js";import{v as a}from"./@vue-1d4d5e6e.js";function r(r,t){const n=e(t||{}),u={unhead:n,install(e){a.startsWith("3")&&(e.config.globalProperties.$head=n,e.provide("usehead",n))},use(e){n.use(e)},resolveTags:()=>n.resolveTags(),headEntries:()=>n.headEntries(),headTags:()=>n.resolveTags(),push:(e,s)=>n.push(e,s),addEntry:(e,s)=>n.push(e,s),addHeadObjs:(e,s)=>n.push(e,s),addReactiveEntry(e,o){const d=s(e,o);return void 0!==d?d.dispose:()=>{}},removeHeadObjs(){},updateDOM(e,s){s?o(n,{document:e}):d(n,{delayFn:e=>setTimeout((()=>e()),50),document:e})},internalHooks:n.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return n.addHeadObjs=u.addHeadObjs,n.updateDOM=u.updateDOM,n.hooks.hook("dom:beforeRender",(e=>{for(const s of u.hooks["before:dom"])!1===s()&&(e.shouldRender=!1)})),r&&u.addHeadObjs(r),u}export{r as c};