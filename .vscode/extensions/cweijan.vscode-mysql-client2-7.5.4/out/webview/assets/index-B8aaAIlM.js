import{aq as V,d as U,c as d,r as S,w as K,C as j,o as i,a as v,e as T,u as a,n as u,J as X,l as c,q as p,W as y,b as r,t as C,f as Y,S as O,I as x,H as ee,a5 as ae,ai as M}from"./app-CjQ6DtL_.js";import{b as ie,d as te,R as ne,U as N,F as w,N as E,C as P,S as B,G as se,H as le,a as oe,au as ce,V as re,O as ue,I as de,P as ve,c as h,w as fe,_ as pe,Z as he,Q as me}from"./focus-trap-DBaBn-Wj.js";import{a as ye,i as g}from"./validator-C2O6oisw.js";const be=ie({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:ye},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:te(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...ne(["ariaLabel"])}),Ie={[N]:l=>w(l)||V(l)||E(l),[P]:l=>w(l)||V(l)||E(l),[B]:l=>w(l)||V(l)||E(l)},ke=["onClick"],ge=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Se=["aria-hidden"],L="ElSwitch",Te=U({name:L}),Ce=U({...Te,props:be,emits:Ie,setup(l,{expose:H,emit:f}){const t=l,{formItem:b}=se(),q=le(),n=oe("switch"),{inputId:G}=ce(t,{formItemContext:b}),I=re(d(()=>t.loading)),A=S(t.modelValue!==!1),m=S(),R=S(),W=d(()=>[n.b(),n.m(q.value),n.is("disabled",I.value),n.is("checked",s.value)]),_=d(()=>[n.e("label"),n.em("label","left"),n.is("active",!s.value)]),$=d(()=>[n.e("label"),n.em("label","right"),n.is("active",s.value)]),J=d(()=>({width:ue(t.width)}));K(()=>t.modelValue,()=>{A.value=!0});const D=d(()=>A.value?t.modelValue:!1),s=d(()=>D.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(D.value)||(f(N,t.inactiveValue),f(P,t.inactiveValue),f(B,t.inactiveValue)),K(s,e=>{var o;m.value.checked=e,t.validateEvent&&((o=b==null?void 0:b.validate)==null||o.call(b,"change").catch(Z=>de()))});const k=()=>{const e=s.value?t.inactiveValue:t.activeValue;f(N,e),f(P,e),f(B,e),ae(()=>{m.value.checked=s.value})},z=()=>{if(I.value)return;const{beforeChange:e}=t;if(!e){k();return}const o=e();[M(o),w(o)].includes(!0)||he(L,"beforeChange must return type `Promise<boolean>` or `boolean`"),M(o)?o.then(F=>{F&&k()}).catch(F=>{}):o&&k()},Q=()=>{var e,o;(o=(e=m.value)==null?void 0:e.focus)==null||o.call(e)};return j(()=>{m.value.checked=s.value}),ve({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},d(()=>!!t.label)),H({focus:Q,checked:s}),(e,o)=>(i(),v("div",{class:u(a(W)),onClick:ee(z,["prevent"])},[T("input",{id:a(G),ref_key:"input",ref:m,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(I),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(I),tabindex:e.tabindex,onChange:k,onKeydown:X(z,["enter"])},null,42,ge),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(_))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},C(e.inactiveText),9,we)):r("v-if",!0)],2)):r("v-if",!0),T("span",{ref_key:"core",ref:R,class:u(a(n).e("core")),style:x(a(J))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(n).is("icon"))},{default:p(()=>[(i(),c(y(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(s)},C(a(s)?e.activeText:e.inactiveText),11,Ve)):r("v-if",!0)],2)):r("v-if",!0),T("div",{class:u(a(n).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(n).is("loading"))},{default:p(()=>[Y(a(fe))]),_:1},8,["class"])):a(s)?O(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):O(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a($))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},C(e.activeText),9,Se)):r("v-if",!0)],2)):r("v-if",!0)],10,ke))}});var Ee=pe(Ce,[["__file","switch.vue"]]);const Ae=me(Ee);export{Ae as E};