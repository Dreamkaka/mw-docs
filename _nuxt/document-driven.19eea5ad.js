import L from"./DocumentDrivenEmpty.e2e76e83.js";import h from"./ContentRenderer.15666fe2.js";import x from"./DocumentDrivenNotFound.4868fff7.js";import{b as z,a as m,aw as C,q as k,ax as R,I as w,u as o,ay as d,az as N,aA as i,T as g,X as A,a0 as B,am as D,o as c,i as E,m as p,w as l,c as _}from"./entry.ffa0d52e.js";import"./ContentRendererMarkdown.643b89e7.js";import"./ButtonLink.8056331a.js";import"./ContentSlot.d7b2a0ac.js";const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>A(n,t.attrs,t.slots)}}),j=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=C("_route"),e=n===k()?R():n,a=w(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??N;return i(g,u&&r,{default:()=>i(T,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),q={class:"document-driven-page"},P=m({__name:"document-driven",setup(s){const{page:t,layout:n}=B();return t.value,D(t),(e,a)=>{const u=L,r=h,f=x,y=j;return c(),E("div",q,[p(y,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{P as default};
