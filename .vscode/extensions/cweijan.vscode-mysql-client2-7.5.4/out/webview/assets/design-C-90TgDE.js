import{y as at,d as me,r as V,G as Ce,h as re,c as k,C as Te,j as w,k as ae,o as d,a as f,e as $,u as E,l as h,$ as T,b as I,f as s,V as Y,q as m,s as v,t as y,X as le,F as X,v as ne,I as lt,J as Le,D as rt,E as st,_ as Ve,H as ot,n as xe}from"./app-CjQ6DtL_.js";import{c as $e,s as We,e as Se}from"./notify-BU3_UjTC.js";import{D as R}from"./constants-BBuYV5CN.js";import{i as Ye}from"./viewUtil-B5zuzifV.js";import{c as pe}from"./codemirror-DFbqP3OH.js";import{E as Me,a as he}from"./index-CKiiumos.js";import{E as Ge}from"./index-Di6dKZbb.js";import{E as Ue,a as ye}from"./index-CLeTcLVW.js";import{E as Ie,a as fe}from"./index-DyhX05d2.js";import{E as we}from"./index-BPbN6Twf.js";import{v as be}from"./directive-DSuEPHgi.js";import{E as De}from"./index-B-8lLMU3.js";import{A as ke}from"./arrayUtil-B2mz7VJ2.js";import{E as Et}from"./index-pjU2WDYl.js";import{S as P,i as G,a as it}from"./stringUtil-BWN65_sh.js";import{g as Z,i as qe,w as ce,E as ct}from"./wrapper-9sSMZFbl.js";import{l as ut}from"./common_view_utils-DzorTj8k.js";import"./focus-trap-DBaBn-Wj.js";import"./validator-C2O6oisw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2Dn0yEB.js";import"./index-CWFqIZaR.js";import"./isUndefined-DCTLXrZ8.js";import"./_baseIteratee-HyS-1O7d.js";import"./isEqual-4BpVZMyB.js";import"./merge-8BGy8jhr.js";import"./_initCloneObject-B8ka1tEV.js";import"./isArrayLikeObject-O4KZ6KtI.js";import"./index-L80InmDq.js";import"./index-VY_GNGZI.js";import"./_baseFindIndex-D7XfJLKM.js";import"./castArray-Czwe8Jlu.js";import"./clone-DSzGSu0r.js";import"./_baseClone-zeap_Z3A.js";const _e=at("design",{state:()=>({schema:"",table:"",columns:[],tableMeta:{},dbType:R.MYSQL,dialect:null,remainHeight:0,activePanel:"column"}),getters:{canAlterTable(c){return![R.SQLITE].includes(c.dbType)},supportForeignKey(c){return![R.CLICKHOUSE].includes(c.dbType)&&(!c.tableMeta.engine||c.tableMeta.engine!="MyISAM")},supportCheck(c){return![R.SQLITE,R.DUCK_DB,R.CLICKHOUSE,R.SNOWFLAKE].includes(c.dbType)},supportIndex(c){return![R.SNOWFLAKE].includes(c.dbType)}},actions:{updateDBType(c){this.dbType=c},updateFullInfo(c){for(const e in c)this[e]=c[e]}}}),mt={class:"design-toolbar"},Tt={class:"text-center"},_t=$("br",null,null,-1),dt=$("br",null,null,-1),At=me({__name:"IndexPanel",setup(c){const e=V([]),t=V([]),n=V(!0),l=_e(),{dbType:a,dialect:r,remainHeight:o,activePanel:i}=Ce(l),u=re({visible:!1,loading:!1,column:null,columns:null,type:null}),O=k(()=>{var D;return((D=u.columns)==null?void 0:D.length)>0?r.value.newIndex({...u}):""});Te(()=>{w.on("designMetaNext",()=>{u.visible=!1,t.value=r.value.indexTypes(),C()}).on("indexes",D=>{e.value=D,n.value=!1}).on("success",D=>{D=="index"&&(u.loading=!1,u.visible=!1,C())}).on("error",()=>{u.loading=!1})});const C=()=>{w.emit("indexes"),n.value=!0},A=()=>{u.visible=!0,u.loading=!1,u.column=null,u.type="INDEX"},N=D=>r.value.formatIndexType(D),S=D=>Ye(D),U=()=>{u.loading=!0,w.emit("execute",{type:"index",sql:O.value})},W=D=>{$e(T("design.deleteIndexConfirm")).then(()=>{w.emit("execute",{type:"index",sql:r.value.dropIndex(D.index_name)})})};return(D,H)=>{const g=ae("vsc-button"),M=Me,x=Ge,q=he,oe=ae("RedMark"),ee=Ue,j=ye,F=Ie,J=fe,de=we,Ee=be;return d(),f("div",null,[$("div",mt,[["ClickHouse"].includes(E(a))?I("",!0):(d(),h(g,{key:0,type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:A},null,8,["title"])),s(g,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:C},null,8,["title"])]),E(i)=="index"?Y((d(),h(q,{key:0,data:e.value,height:E(o),border:""},{default:m(()=>[s(M,{resizable:!0,align:"center",prop:"index_name",label:E(T)("design.indexName"),width:"200"},null,8,["label"]),s(M,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"200"},null,8,["label"]),s(M,{align:"center",prop:"isUnique",label:E(T)("design.unique"),width:"200"},{default:m(({row:B})=>[s(x,{disabled:"","model-value":S(B.isUnique)},null,8,["model-value"])]),_:1},8,["label"]),s(M,{resizable:!0,align:"center",prop:"index_type",label:E(T)("common.type"),width:"200"},{default:m(({row:B})=>[v(y(N(B)),1)]),_:1},8,["label"]),["PostgreSQL"].includes(E(a))?(d(),h(M,{key:0,resizable:!0,align:"center",prop:"index_method",label:E(T)("design.indexMethod"),width:"200"},null,8,["label"])):I("",!0),["ClickHouse"].includes(E(a))?I("",!0):(d(),h(M,{key:1,label:E(T)("design.operation"),width:"120"},{default:m(({row:B})=>[$("div",Tt,[s(g,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:Ae=>W(B)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[Ee,n.value]]):I("",!0),s(de,{modelValue:u.visible,"onUpdate:modelValue":H[3]||(H[3]=B=>u.visible=B),title:E(T)("design.newIndex"),width:"520px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(g,{type:"secondary",onClick:H[2]||(H[2]=B=>u.visible=!1)},{default:m(()=>[v(y(E(T)("common.cancel")),1)]),_:1}),s(g,{type:"primary",loading:u.loading,onClick:U},{default:m(()=>[v(y(E(T)("common.ok")),1)]),_:1},8,["loading"]),_t,v(),dt,Y(s(pe,{ref:"cmEditor",value:O.value},null,8,["value"]),[[le,O.value]])]),default:m(()=>[s(J,{inline:!0,"label-width":"75px",size:"small"},{default:m(()=>[s(F,null,{label:m(()=>[s(oe),v(y(E(T)("design.column")),1)]),default:m(()=>[s(j,{modelValue:u.columns,"onUpdate:modelValue":H[0]||(H[0]=B=>u.columns=B),size:"small",filterable:"",multiple:"",class:"!w-[150px]"},{default:m(()=>[(d(!0),f(X,null,ne(E(l).columns,B=>(d(),h(ee,{key:B.name,label:B.name,value:B.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(F,null,{label:m(()=>[s(oe),v(y(E(T)("common.type")),1)]),default:m(()=>[s(j,{modelValue:u.type,"onUpdate:modelValue":H[1]||(H[1]=B=>u.type=B),size:"small",class:"!w-[110px]"},{default:m(()=>[(d(!0),f(X,null,ne(t.value,(B,Ae)=>(d(),h(ee,{key:Ae,label:B.label,value:B.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Nt={ref:"infoPanel",class:"design-toolbar"},Rt=me({__name:"DDL",setup(c){const e=_e(),t=V(!1),n=V("");Te(()=>{w.on("designMetaNext",()=>{w.emit("ddl")}).on("ddl",({ddl:a})=>{t.value=!1,n.value=a})});const l=()=>{navigator.clipboard.writeText(n.value),We("Copy DDL success!")};return(a,r)=>{const o=ae("vsc-button"),i=be;return Y((d(),f("div",null,[$("div",Nt,[s(o,{type:"icon",icon:"el-icon-document-copy text-base",title:"Copy DDL",onClick:l}),s(o,{type:"icon",icon:"codicon-refresh text-base",title:a.$t("common.refresh"),onClick:r[0]||(r[0]=u=>E(w).emit("ddl"))},null,8,["title"])],512),E(e).activePanel=="ddl"?(d(),h(pe,{key:0,dbType:E(e).dbType,value:n.value,style:lt({maxHeight:E(e).remainHeight+"px",overflow:"auto"}),class:"large"},null,8,["dbType","value","style"])):I("",!0)])),[[i,t.value]])}}}),Ct={key:0,class:"design-toolbar"},pt={class:"text-center"},bt=$("br",null,null,-1),Ot=$("br",null,null,-1),Lt=$("br",null,null,-1),St=me({__name:"ForeignKey",setup(c){const e=_e(),{dialect:t,canAlterTable:n,remainHeight:l,activePanel:a}=Ce(e),r=V([]),o=V([]),i=V([]),u=V([]),O=V(!0),C=re({visible:!1,loading:!1}),A=re({column:null,refTable:null,refColumn:null,foreignKeyName:null,onUpdate:"NO ACTION",onDelete:"NO ACTION"}),N=k(()=>{const{column:g,refTable:M,refColumn:x}=A;return g||M||x?t.value.newForeignKey(A):""});Te(()=>{w.on("designMetaNext",()=>{C.visible=!1,u.value=t.value.strategys(),U(),w.emit("tables")}).on("foreignKeys",g=>{O.value=!1,r.value=g}).on("columnsById",g=>{A.refColumn="",i.value=g}).on("success",g=>{g=="fk"&&(C.loading=!1,C.visible=!1,U())}).on("error",()=>{C.loading=!1}).on("tables",g=>{o.value=g})});const S=g=>{w.emit("columnsById",g)},U=()=>{const g=t.value.showForeignKeys();g&&(O.value=!0,w.emit("foreignKeys",g))},W=()=>{C.visible=!0,C.loading=!1,A.column=null,A.refTable=null,A.refColumn=null,A.onUpdate="NO ACTION",A.onDelete="NO ACTION"},D=()=>{C.loading=!0,w.emit("execute",{type:"fk",sql:N.value})},H=g=>{$e(T("design.deleteFkConfirm")).then(()=>{w.emit("execute",{type:"fk",sql:t.value.dropForeignKey(g.constraint_name)})})};return(g,M)=>{const x=ae("vsc-button"),q=Me,oe=he,ee=ae("RedMark"),j=Ue,F=ye,J=Ie,de=De,Ee=fe,B=we,Ae=be;return d(),f("div",null,[E(n)?(d(),f("div",Ct,[s(x,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:W},null,8,["title"]),s(x,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:U},null,8,["title"])])):I("",!0),E(a)=="foreignKey"?Y((d(),h(oe,{key:1,data:r.value,style:{width:"100%"},height:E(l),border:""},{default:m(()=>[E(n)?(d(),h(q,{key:0,resizable:!0,align:"center",prop:"constraint_name",label:E(T)("design.constraintName"),width:"150"},null,8,["label"])):I("",!0),s(q,{resizable:!0,align:"center",prop:"column_name",label:E(T)("design.column"),width:"150"},null,8,["label"]),s(q,{resizable:!0,align:"center",prop:"referenced_table",label:E(T)("design.referencedTable"),width:"150"},null,8,["label"]),s(q,{resizable:!0,align:"center",prop:"referenced_column",label:E(T)("design.referencedColumn"),width:"150"},null,8,["label"]),s(q,{align:"center",prop:"updateRule",label:E(T)("design.updateRule"),width:"150"},null,8,["label"]),s(q,{align:"center",prop:"deleteRule",label:E(T)("design.deleteRule"),width:"150"},null,8,["label"]),E(n)?(d(),h(q,{key:1,label:E(T)("design.operation"),width:"120"},{default:m(({row:b})=>[$("div",pt,[s(x,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:p=>H(b)},null,8,["onClick"])])]),_:1},8,["label"])):I("",!0)]),_:1},8,["data","height"])),[[Ae,O.value]]):I("",!0),s(B,{modelValue:C.visible,"onUpdate:modelValue":M[7]||(M[7]=b=>C.visible=b),title:E(T)("design.newForeignKey"),width:"780px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(x,{type:"secondary",onClick:M[6]||(M[6]=b=>C.visible=!1)},{default:m(()=>[v(y(E(T)("common.cancel")),1)]),_:1}),s(x,{type:"primary",loading:C.loading,onClick:D},{default:m(()=>[v(y(E(T)("common.ok")),1)]),_:1},8,["loading"]),Ot,v(),Lt,Y(s(pe,{ref:"cmEditor",value:N.value},null,8,["value"]),[[le,N.value]])]),default:m(()=>[s(Ee,{inline:!0,"label-width":"150px","label-position":"left",size:"small"},{default:m(()=>[s(J,null,{label:m(()=>[s(ee),v(y(E(T)("design.column")),1)]),default:m(()=>[s(F,{modelValue:A.column,"onUpdate:modelValue":M[0]||(M[0]=b=>A.column=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(d(!0),f(X,null,ne(E(e).columns,b=>(d(),h(j,{key:b.name,label:b.name,value:b.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(J,null,{default:m(()=>[s(de,{modelValue:A.foreignKeyName,"onUpdate:modelValue":M[1]||(M[1]=b=>A.foreignKeyName=b),class:"!w-[170px]"},null,8,["modelValue"])]),_:1}),bt,s(J,null,{label:m(()=>[s(ee),v(y(E(T)("design.referencedTable")),1)]),default:m(()=>[s(F,{modelValue:A.refTable,"onUpdate:modelValue":M[2]||(M[2]=b=>A.refTable=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(d(!0),f(X,null,ne(o.value,b=>(d(),h(j,{key:b.name,label:b.name,value:b.name,onClick:p=>S(b.id)},null,8,["label","value","onClick"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(J,null,{label:m(()=>[s(ee),v(y(E(T)("design.referencedColumn")),1)]),default:m(()=>[s(F,{modelValue:A.refColumn,"onUpdate:modelValue":M[3]||(M[3]=b=>A.refColumn=b),size:"small",filterable:"",class:"!w-[170px]"},{default:m(()=>[(d(!0),f(X,null,ne(i.value,b=>(d(),h(j,{key:b.name,label:b.name,value:b.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(J,{label:"On Update"},{default:m(()=>[s(F,{modelValue:A.onUpdate,"onUpdate:modelValue":M[4]||(M[4]=b=>A.onUpdate=b),size:"small",filterable:"",class:"!w-[170px] mr-4"},{default:m(()=>[(d(!0),f(X,null,ne(u.value,b=>(d(),h(j,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),s(J,{label:"On Delete"},{default:m(()=>[s(F,{modelValue:A.onDelete,"onUpdate:modelValue":M[5]||(M[5]=b=>A.onDelete=b),size:"small",filterable:"",class:"!w-[170px]"},{default:m(()=>[(d(!0),f(X,null,ne(u.value,b=>(d(),h(j,{key:b,label:b,value:b},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}}),Be=c=>(rt("data-v-bd89e2e7"),c=c(),st(),c),$t={key:0,ref:"infoPanel",class:"design-toolbar"},Mt=["title"],ht={class:"text-center"},It=Be(()=>$("br",null,null,-1)),ft={class:"max-h-[300px]"},wt=["onClick"],Dt=Be(()=>$("br",null,null,-1)),gt=Be(()=>$("br",null,null,-1)),Ut=me({__name:"ColumnPanel",setup(c){const e=V(null),t=_e(),{dbType:n,columns:l,dialect:a,canAlterTable:r,remainHeight:o,activePanel:i}=Ce(t),u=re({visible:!1,inputing:!1}),O=k(()=>a.value.columnTypes()),C=V(!0),A=V([]),N=re({name:"",type:"",unsigned:null,zerofill:null,comment:null,isNotNull:null,defaultValue:null,useCurrentTimestamp:null}),S=re({isNew:!0,editDisable:!1,editVisible:!1,editLoading:!1}),U=k(()=>{var p,L;return H.value&&((L=(p=N.type)==null?void 0:p.match)==null?void 0:L.call(p,/(int|decimal|float|double)/i))}),W=k(()=>{var p,L;return H.value&&((L=(p=N.type)==null?void 0:p.match)==null?void 0:L.call(p,/timestamp/i))}),D=k(()=>window.innerWidth<=1200),H=k(()=>["MySQL","MariaDB"].includes(n.value)),g=k(()=>{const p=S.isNew?"design.newColumn":"design.updateColumn";return T(p)}),M=k(()=>u.inputing&&N.type?O.value.filter(p=>(p.label||p).match(new RegExp(N.type,"i"))):O.value),x=k(()=>{if(S.isNew){const{name:p,type:L}=N;return p&&L?a.value.newColumn(N):""}U.value||(N.zerofill=!1,N.unsigned=!1),W.value||(N.useCurrentTimestamp=!1);try{return a.value.updateColumn({table:e.value,newColumnName:N.name,columnType:N.type,nullable:!N.isNotNull,...N})}catch(p){return S.editDisable=!0,p}}),q=k(()=>[R.MYSQL,R.MARIA_DB,R.PG,R.DB2].includes(n.value));Te(()=>{w.on("designMetaNext",p=>{A.value=ke.clone(p.columns),S.editVisible=!1,C.value=!1}).on("columns",p=>{A.value=ke.clone(p),C.value=!1}).on("success",p=>{p=="column"&&(S.editLoading=!1,S.editVisible=!1,F())}).on("error",()=>{S.editLoading=!1,F()})});const oe=(...p)=>!p.includes(n.value),ee=p=>{p&&(N.defaultValue="CURRENT_TIMESTAMP")},j=()=>{const p=M.value[0];p&&(N.type=p.value||p,u.visible=!1)},F=()=>{w.emit("columns"),C.value=!0},J=()=>{N.name="",N.type="",S.isNew=!0,S.editVisible=!0},de=p=>{Object.assign(N,{...p,columnName:p.name,oldRow:p}),S.isNew=!1,S.editVisible=!0,S.editDisable=!1,S.editLoading=!1},Ee=(p,L)=>{S.isNew=!1,Object.assign(N,{...p,columnName:p.name,oldRow:A.value[L]}),B()},B=()=>{if(!x.value)return Se("No any change!");if(S.editLoading=!0,S.isNew)return Ae();try{w.emit("execute",{type:"column",sql:x.value})}catch(p){Se(p.message),S.editLoading=!1}},Ae=()=>{w.emit("execute",{type:"column",sql:x.value})},b=p=>{$e(T("design.deleteColumnConfirm")).then(()=>{w.emit("execute",{type:"column",sql:a.value.dropColumn(p.name)})})};return(p,L)=>{const Ne=ae("vsc-button"),K=Me,te=Ge,ze=he,Pe=ae("RedMark"),Oe=De,ie=Ie,Ze=Et,et=fe,tt=we,nt=be;return d(),f("div",null,[E(r)?(d(),f("div",$t,[s(Ne,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:J},null,8,["title"]),s(Ne,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:F},null,8,["title"])],512)):I("",!0),E(i)=="column"?Y((d(),h(ze,{key:1,data:E(l),height:E(o),border:"",onRowDblclick:de},{default:m(()=>[s(K,{resizable:!0,align:"center",prop:"name",label:E(T)("common.name"),width:"180"},null,8,["label"]),s(K,{resizable:!0,align:"center",prop:"type",label:E(T)("common.type"),width:D.value?100:130},null,8,["label","width"]),["DuckDB"].includes(E(n))?I("",!0):(d(),h(K,{key:0,resizable:!0,align:"center",prop:"comment",label:E(T)("common.comment"),width:"100"},{default:m(({row:_})=>[$("span",{title:_==null?void 0:_.comment},y(_==null?void 0:_.comment),9,Mt)]),_:1},8,["label"])),s(K,{resizable:!0,align:"center",prop:"maximum_length",width:80,label:E(T)("design.length")},null,8,["label"]),s(K,{resizable:!0,align:"center",prop:"defaultValue",width:D.value?75:110,label:E(T)("common.default")},null,8,["width","label"]),s(K,{align:"center",label:"Not Null",width:80},{default:m(({row:_,rowIndex:z})=>[s(te,{modelValue:_.isNotNull,"onUpdate:modelValue":Q=>_.isNotNull=Q,onChange:Q=>Ee(_,z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(K,{align:"center",label:E(T)("design.isPrimary"),width:D.value?80:90},{default:m(({row:_})=>[s(te,{disabled:"","model-value":_.isPrimary},null,8,["model-value"])]),_:1},8,["label","width"]),s(K,{align:"center",label:E(T)("design.isUnique"),width:D.value?60:80},{default:m(({row:_})=>[s(te,{disabled:"","model-value":_.isUnique},null,8,["model-value"])]),_:1},8,["label","width"]),H.value?(d(),f(X,{key:1},[s(K,{align:"center",label:"UNSIGNED",width:"80"},{default:m(({row:_,rowIndex:z})=>[s(te,{modelValue:_.unsigned,"onUpdate:modelValue":Q=>_.unsigned=Q,"true-value":"1","false-value":"0",onChange:Q=>Ee(_,z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),s(K,{align:"center",label:"Zerofill",width:D.value?60:80},{default:m(({row:_,rowIndex:z})=>[s(te,{modelValue:_.zerofill,"onUpdate:modelValue":Q=>_.zerofill=Q,"true-value":"1","false-value":"0",onChange:Q=>Ee(_,z)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1},8,["width"])],64)):I("",!0),["DuckDB"].includes(E(n))?I("",!0):(d(),h(K,{key:2,align:"center",label:E(T)("design.isAutoIncrement"),width:"110"},{default:m(({row:_,rowIndex:z})=>[s(te,{modelValue:_.isAutoIncrement,"onUpdate:modelValue":Q=>_.isAutoIncrement=Q,disabled:!_.isPrimary||!q.value,onChange:Q=>Ee(_,z)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])]),_:1},8,["label"])),["SQLite"].includes(E(n))?I("",!0):(d(),h(K,{key:3,label:E(T)("design.operation"),width:"100"},{default:m(({row:_})=>[$("div",ht,[s(Ne,{type:"icon",icon:"codicon-edit",title:"edit",onClick:z=>de(_)},null,8,["onClick"]),s(Ne,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:z=>b(_)},null,8,["onClick"])])]),_:1},8,["label"]))]),_:1},8,["data","height"])),[[nt,C.value]]):I("",!0),s(tt,{modelValue:S.editVisible,"onUpdate:modelValue":L[12]||(L[12]=_=>S.editVisible=_),title:g.value,width:"680px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(Ne,{type:"secondary",onClick:L[11]||(L[11]=_=>S.editVisible=!1)},{default:m(()=>[v(y(E(T)("common.cancel")),1)]),_:1}),s(Ne,{type:"primary",loading:S.editLoading,disabled:S.editDisable,onClick:B},{default:m(()=>[v(y(E(T)("common.ok")),1)]),_:1},8,["loading","disabled"]),Dt,v(),gt,Y(s(pe,{ref:"cmEditor",value:x.value},null,8,["value"]),[[le,x.value]])]),default:m(()=>[s(et,{inline:!0,"label-width":"90px",size:"small"},{default:m(()=>[s(ie,null,{label:m(()=>[s(Pe),v(y(E(T)("common.name")),1)]),default:m(()=>[s(Oe,{modelValue:N.name,"onUpdate:modelValue":L[0]||(L[0]=_=>N.name=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1}),U.value?(d(),h(ie,{key:0,label:"ZEROFILL"},{default:m(()=>[s(te,{modelValue:N.zerofill,"onUpdate:modelValue":L[1]||(L[1]=_=>N.zerofill=_),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):I("",!0),W.value?(d(),h(ie,{key:1,label:"CURRENT_TIMESTAMP","label-width":"160px"},{default:m(()=>[s(te,{modelValue:N.useCurrentTimestamp,"onUpdate:modelValue":L[2]||(L[2]=_=>N.useCurrentTimestamp=_),onChange:ee},null,8,["modelValue"])]),_:1})):I("",!0),It,s(ie,null,{label:m(()=>[s(Pe),v(y(E(T)("common.type")),1)]),default:m(()=>[s(Ze,{visible:u.visible,"onUpdate:visible":L[6]||(L[6]=_=>u.visible=_),placement:"bottom-start","popper-class":"!p-0",trigger:"click",tabindex:null},{reference:m(()=>[s(Oe,{modelValue:N.type,"onUpdate:modelValue":L[3]||(L[3]=_=>N.type=_),size:"small",fixed:"",onKeyup:Le(j,["enter"]),onInput:L[4]||(L[4]=_=>{u.inputing=!0,u.visible=!0}),onClick:L[5]||(L[5]=_=>u.inputing=!1)},null,8,["modelValue"])]),default:m(()=>[$("div",ft,[(d(!0),f(X,null,ne(M.value,(_,z)=>(d(),f(X,null,[_=="hr"?(d(),f("div",{key:z,class:"w-full type-hr bg-bg"})):(d(),f("div",{key:1,class:"el-select-dropdown__item !h-6 min-w-[190px] bg-[var(--vscode-dropdown-background)]",onClick:Q=>{N.type=_.value||_,u.visible=!1}},y(_.label||_),9,wt))],64))),256))])]),_:1},8,["visible"])]),_:1}),oe("ClickHouse")?(d(),h(ie,{key:2,label:E(T)("design.isNotNull")},{default:m(()=>[s(te,{modelValue:N.isNotNull,"onUpdate:modelValue":L[7]||(L[7]=_=>N.isNotNull=_)},null,8,["modelValue"])]),_:1},8,["label"])):I("",!0),U.value?(d(),h(ie,{key:3,label:"UNSIGNED"},{default:m(()=>[s(te,{modelValue:N.unsigned,"onUpdate:modelValue":L[8]||(L[8]=_=>N.unsigned=_),"true-value":"1","false-value":"0"},null,8,["modelValue"])]),_:1})):I("",!0),!["SqlServer","Snowflake"].includes(E(n))||S.isNew?(d(),h(ie,{key:4,label:E(T)("common.default")},{default:m(()=>[s(Oe,{modelValue:N.defaultValue,"onUpdate:modelValue":L[9]||(L[9]=_=>N.defaultValue=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"])):I("",!0),["DuckDB"].includes(E(n))?I("",!0):(d(),h(ie,{key:5,label:E(T)("common.comment")},{default:m(()=>[s(Oe,{modelValue:N.comment,"onUpdate:modelValue":L[10]||(L[10]=_=>N.comment=_),size:"small",fixed:""},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1})]),_:1},8,["modelValue","title"])])}}}),yt=Ve(Ut,[["__scopeId","data-v-bd89e2e7"]]),Bt={class:"ml-4"},vt={class:"flex flex-col gap-y-2"},Ft={class:"flex-wrap"},Ht={class:"inline-block mr-5"},Pt={class:"font-bold mr-5 inline-block"},xt={class:"inline-block mr-5"},kt={class:"font-bold mr-5 inline-block"},Vt={class:"flex-wrap"},Wt={key:0,class:"inline-block mr-5"},Yt={class:"font-bold mr-5 inline-block"},Gt={key:1,class:"inline-block mr-5"},qt={class:"font-bold mr-5 inline-block"},jt={class:"inline-block pt-1"},Kt=me({__name:"InfoPanel",setup(c){const e=_e(),{dialect:t}=Ce(e),n=V([]),l=re({name:null,newTableName:null,comment:null,newComment:null,collation:null,newCollation:null});Te(()=>{w.on("designMetaNext",r=>{l.name=r.table,l.newTableName=r.table,l.comment=r.comment,l.newComment=r.comment,l.collation=r.collation,l.newCollation=r.collation}).on("collations",r=>{n.value=r})});const a=()=>{const r={...l,table:l.name};w.emit("updateTable",r);const o=t.value.updateTable(r);o?w.emit("execute",{type:"table",sql:o}):Se("No any change!")};return(r,o)=>{const i=De,u=Ue,O=ye,C=ae("vsc-button");return d(),f("div",Bt,[$("div",vt,[$("div",Ft,[$("div",Ht,[$("label",Pt,y(r.$t("design.table")),1),s(i,{modelValue:l.newTableName,"onUpdate:modelValue":o[0]||(o[0]=A=>l.newTableName=A),class:"!w-48",required:"",onKeyup:Le(a,["enter"])},null,8,["modelValue"])]),$("div",xt,[$("label",kt,y(r.$t("common.comment")),1),s(i,{modelValue:l.newComment,"onUpdate:modelValue":o[1]||(o[1]=A=>l.newComment=A),class:"!w-48",onKeyup:Le(a,["enter"])},null,8,["modelValue"])])]),$("div",Vt,[E(e).tableMeta.engine?(d(),f("div",Wt,[$("label",Yt,y(r.$t("design.engine")),1),s(i,{value:E(e).tableMeta.engine,class:"!w-24",disabled:""},null,8,["value"])])):I("",!0),l.collation&&n.value.length>0?(d(),f("div",Gt,[$("label",qt,y(r.$t("design.collate")),1),s(O,{modelValue:l.newCollation,"onUpdate:modelValue":o[2]||(o[2]=A=>l.newCollation=A),size:"small",filterable:""},{default:m(()=>[(d(!0),f(X,null,ne(n.value,A=>(d(),h(u,{key:A.name,label:A.name,value:A.name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])):I("",!0),$("div",jt,[s(C,{type:"success",onClick:a},{default:m(()=>[v(y(r.$t("common.update")),1)]),_:1})])])])])}}}),Qt={key:0,class:"design-toolbar"},Xt={class:"text-center"},Jt=$("br",null,null,-1),zt=$("br",null,null,-1),Zt=me({__name:"Check",setup(c){const e=_e(),{dialect:t,canAlterTable:n,remainHeight:l,activePanel:a}=Ce(e),r=V([]),o=V(!0),i=re({visible:!1,loading:!1}),u=re({clause:null}),O=k(()=>u.clause?t.value.newCheck(u.clause):"");Te(()=>{w.on("designMetaNext",()=>{C(),i.visible=!1}).on("checks",U=>{o.value=!1,r.value=U}).on("success",U=>{U=="check"&&(C(),i.visible=!1,i.loading=!1)}).on("error",()=>{i.loading=!1})});const C=()=>{const U=t.value.showChecks();if(!U){console.log("This database type does not currently support check."),o.value=!1;return}o.value=!0,w.emit("checks",U)},A=()=>{i.visible=!0,i.loading=!1,u.clause=null},N=()=>{i.loading=!0,w.emit("execute",{type:"check",sql:O.value})},S=U=>{$e(T("design.deleteCheckConfirm")).then(()=>{w.emit("execute",{type:"check",sql:t.value.dropCheck(U.name)})})};return(U,W)=>{const D=ae("vsc-button"),H=Me,g=he,M=ae("RedMark"),x=De,q=Ie,oe=fe,ee=we,j=be;return d(),f("div",null,[E(n)?(d(),f("div",Qt,[s(D,{type:"icon",icon:"codicon-add text-base",title:E(T)("common.new"),onClick:A},null,8,["title"]),s(D,{type:"icon",icon:"codicon-refresh text-base",title:E(T)("common.refresh"),onClick:C},null,8,["title"])])):I("",!0),E(a)=="check"?Y((d(),h(g,{key:1,data:r.value,height:E(l),border:""},{default:m(()=>[E(n)?(d(),h(H,{key:0,resizable:!0,align:"center",prop:"name",label:E(T)("design.constraintName"),width:"200"},null,8,["label"])):I("",!0),s(H,{resizable:!0,align:"center",prop:"clause",label:E(T)("design.clause"),width:"200"},null,8,["label"]),E(n)?(d(),h(H,{key:1,label:E(T)("design.operation"),width:"100"},{default:m(({row:F})=>[$("div",Xt,[s(D,{type:"icon",icon:"el-icon-delete",style:{color:"#f56c6c"},title:"delete",onClick:J=>S(F)},null,8,["onClick"])])]),_:1},8,["label"])):I("",!0)]),_:1},8,["data","height"])),[[j,o.value]]):I("",!0),s(ee,{modelValue:i.visible,"onUpdate:modelValue":W[3]||(W[3]=F=>i.visible=F),title:E(T)("design.newCheck"),width:"430px",closeOnClickModal:!1,center:""},{footer:m(()=>[s(D,{type:"secondary",onClick:W[2]||(W[2]=F=>i.visible=!1)},{default:m(()=>[v(y(E(T)("common.cancel")),1)]),_:1}),s(D,{type:"primary",loading:i.loading,onClick:N},{default:m(()=>[v(y(E(T)("common.ok")),1)]),_:1},8,["loading"]),Jt,v(),zt,Y(s(pe,{ref:"cmEditor",value:O.value},null,8,["value"]),[[le,O.value]])]),default:m(()=>[s(oe,{inline:!0,"label-width":"80px","label-position":"left",onSubmit:W[1]||(W[1]=ot(()=>{},["prevent"])),onKeyup:Le(N,["enter"])},{default:m(()=>[s(q,null,{label:m(()=>[s(M),v(y(E(T)("design.clause")),1)]),default:m(()=>[s(x,{modelValue:u.clause,"onUpdate:modelValue":W[0]||(W[0]=F=>u.clause=F),class:"!w-[290px]",size:"small",placeholder:"e.g. id >20 and name!='admin'"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"])])}}});class se{showAllComments(){return null}showAllForeignKeys(){return null}showAllConstraints(){return null}dropIndex(e,t){throw new Error("Method not implemented.")}showVersion(){return null}showIndex(e,t){return null}createIndex(e){return null}showDatabases(){return null}updateUser(e){return null}showCollations(){return null}showPackages(e){return null}showChecks(e,t){return null}showPartitions(e,t){return null}showActualPartitions(e,t){return null}showForeignKeys(e,t){return null}updateColumnSql(e){throw new Error("Method not implemented.")}showMaterialViews(e,t){return""}showTriggers(e,t){return null}showSequences(e){return null}showCustomTypes(e){return null}showExternalTables(e){return`select foreign_table_name "name",foreign_server_name "server",foreign_server_catalog "server_db" from information_schema.foreign_tables where foreign_table_schema='${e}';`}showEvents(e){return`SELECT EVENT_NAME "name" FROM information_schema.EVENTS where EVENT_SCHEMA='${e}' ORDER BY EVENT_NAME;`}dropEventTemplate(e){return`DROP EVENT IF EXISTS ${e};`}showTableSource(e,t){return null}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
[BEFORE/AFTER] INSERT ON ${e??"[table_name]$2"}
FOR EACH ROW BEGIN
    $3
END;`}eventTemplate(){return`CREATE EVENT event_name$1
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
DO
BEGIN
    SELECT now()$2;
END;`}kill(e){return null}pingDataBase(e,t){return null}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e}`}}class en extends se{showVersion(){return"select version() server_version"}createIndex(e){const t=e.indexType||"btree";return`CREATE INDEX ${e.column}_${new Date().getTime()}_index ON ${e.table} USING ${t} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`select name index_name,is_in_sorting_key indexdef  FROM system.columns WHERE database = '${e}' and table ='${t}' and indexdef=1`}variableList(){return"select name , value as setting,description from system.settings s "}statusList(){return"select name as db , engine as status from system.databases d "}kill(e){return`KILL QUERY WHERE query_id='${e.ID}'`}processList(){return`
    SELECT query_id AS "ID", user AS "User",
    current_database AS "DB",os_user AS "State",
    addSeconds(now(), elapsed) AS "Time",
    query AS "SQL"
    FROM system.processes p 
    ORDER BY elapsed desc`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN [column] [type]`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password'"}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e}  
    RENAME COLUMN ${n} TO [newColumnName]`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,table:r,defaultValue:o,oldRow:i}=e;return console.log(n,i),new P("",`
`).if(n!=i.type,`ALTER TABLE ${r} ALTER COLUMN ${t} TYPE ${n};`).if(o&&o!=i.defaultValue,`ALTER TABLE ${r} MODIFY COLUMN ${t} DEFAULT ${Z(o,n)};`).if(a&&a!=i.comment,`ALTER TABLE ${r} MODIFY COLUMN ${t} COMMENT '${a}';`).if(t!=l,`ALTER TABLE ${r} RENAME COLUMN ${t} TO ${l};`).toString()}showUsers(){return"SELECT * FROM system.users"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`ALTER TABLE ${t} MODIFY COMMENT '${a}';`),n&&t!=n&&(r+=`ALTER TABLE ${t} RENAME TO ${n};`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SELECT create_table_query as "Create Table",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showViewSource(e,t){return`SELECT create_table_query as "Create View",name as table_name,'definition' as view_definition from system.tables WHERE database='${e}' and name='${t}'`}showProcedureSource(e,t){return"select number from system.numbers where 1=0"}showFunctionSource(e,t){return"select number from system.numbers where 1=0"}showTriggerSource(e,t){return"select number from system.numbers where 1=0"}showColumns(e,t){return`select name,type, null as maximum_length,default_expression as defaultValue,is_in_primary_key as key from system.columns c where database='${e}' and table='${t}' `}showProcedures(e){return"select number from system.numbers where 1=0"}showFunctions(e){return`select name as "ROUTINE_NAME" from system.functions  where origin !='System'`}showViews(e){return`select name ,engine as type from system.tables where database='${e}' and engine = 'View' ORDER BY name`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n}`}showTables(e){return`select name, engine as type from system.tables where database='${e}' and engine <> 'View' ORDER BY name`}showDatabases(){return"SELECT name as Database FROM system.databases where name not in ('information_schema','INFORMATION_SCHEMA') order by name ASC"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id UUID,
    create_time DATETIME,
    name$2 String
)
ENGINE = MergeTree()
ORDER BY (id)
PRIMARY KEY(id);`}viewTemplate(){return`CREATE VIEW $1
AS
SELECT * FROM $2`}procedureTemplate(){return"select number from system.numbers where 1=0"}functionTemplate(){return"CREATE FUNCTION [func_name] AS (a, b, c) -> a * b * c;"}}class ge{constructor(e){this.param=e,this.afterTablePrefix=`ALTER TABLE "${e.table}"`,this.afterColumnPrefix=`${this.afterTablePrefix} ALTER COLUMN "${e.columnName}"`}genAlterSQL(){const{columnName:e,newColumnName:t}=this.param;return new P("",`
`).append(this.changeTypePart()).append(this.notNullPart()).append(this.defaultPart()).append(this.otherPart()).append(this.commentPart()).if(e!=t,`${this.afterTablePrefix} RENAME COLUMN "${e}" TO "${t}";`).toString()}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} TYPE ${t};`}notNullPart(){const{oldRow:e,isNotNull:t}=this.param;return e.isNotNull==t?"":`${this.afterColumnPrefix} ${t?"SET NOT NULL":"DROP NOT NULL"};`}otherPart(){return null}defaultPart(){const{oldRow:e,defaultValue:t,columnType:n}=this.param;return e.defaultValue==t?"":`${this.afterColumnPrefix} ${G(t)?"DROP DEFAULT":`SET DEFAULT ${Z(t,n)}`};`}commentPart(){return""}}class Re extends se{showVersion(){return""}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type||"key"} ("${e.column||"[column]"}")`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return null}variableList(){return null}statusList(){return null}processList(){return null}addColumn(e,t){const n=t?` AFTER "${t}"`:"";return`ALTER TABLE ${e}
    ADD COLUMN [column] [type] COMMENT ''${n};`}createUser(){return`CREATE USER 'username'@'%' IDENTIFIED BY 'password';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO 'username'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var C;const{name:n,type:l,comment:a,nullable:r,defaultValue:o,extra:i,character_set_name:u,collation_name:O}=t;return new P(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${l}`).if(u,`CHARACTER SET ${u}`).if(O,`COLLATE ${O}`).if(r!="YES","NOT NULL").if((C=i==null?void 0:i.toLowerCase())==null?void 0:C.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(o,`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${o}'`}`).toString()}updateColumnSql(e){return new ge(e).genAlterSQL()}showUsers(){return"SELECT concat(user,'@',host) user FROM mysql.user;"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`RENAME TABLE "${t}" TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',table_schema,'"."',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE ${e}.${t};`}showViewSource(e,t,n){return`SHOW CREATE VIEW database.${t};`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE database.${t};`}showFunctionSource(e,t,n){return`SHOW CREATE FUNCTION database.${t};`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER database.${t};`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable
            FROM information_schema.columns WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showTriggers(e,t){return""}showProcedures(e){return""}showFunctions(e){return""}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t=e){return`SELECT TABLE_NAME "name" FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showViews(e,t=e){return`SELECT TABLE_NAME name FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}showDatabases(){return'SELECT SCHEMA_NAME "Database" FROM information_schema.schemata ORDER BY "Database";'}showSchemas(e){return'SELECT SCHEMA_NAME "schema" FROM information_schema.schemata ORDER BY "schema";'}tableTemplate(e){return`CREATE TABLE table_name$1(
    id int,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}procedureTemplate(){return`CREATE PROCEDURE procedure_name$1()
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION function_name$1() RETURNS int
BEGIN
    $2
    return 0;
END;`}}class ve extends se{updateColumn(e,t){return null}showSchemas(e){return null}showTables(e,t){return null}addColumn(e,t){return null}showColumns(e,t,n){return null}showViews(e,t){return null}showUsers(){return null}createUser(){return null}showTriggers(e,t){return null}showProcedures(e){return null}showFunctions(e){return null}buildPageSql(e,t,n,l){return null}createDatabase(e){return null}truncateDatabase(e){return null}updateTable(e){return null}showViewSource(e,t,n){return null}showProcedureSource(e,t){return null}showFunctionSource(e,t,n){return null}showTriggerSource(e,t){return null}tableTemplate(e){return null}viewTemplate(e){return null}procedureTemplate(){return null}functionTemplate(){return null}processList(){return null}variableList(){return null}statusList(){return null}}class je extends se{showVersion(){return`select RTRIM(SUBSTR(REPLACE(banner,'Oracle Database ',''),1,3)) "server_version" from v$version where rownum=1`}showAllForeignKeys(){return`SELECT 
    a.constraint_name AS "constraint_name",
    a.owner AS "table_schema",
    a.table_name AS "table_name",
    a.column_name AS "column_name",
    c.owner AS "referenced_schema",
    c.table_name AS "referenced_table",
    c.column_name AS "referenced_column"
FROM 
    ALL_CONS_COLUMNS a 
JOIN 
    ALL_CONSTRAINTS b ON a.owner = b.owner AND a.constraint_name = b.constraint_name
JOIN 
    ALL_CONS_COLUMNS c ON b.r_owner = c.owner AND b.r_constraint_name = c.constraint_name
WHERE 
    b.constraint_type = 'R'
    and a.owner not in ('SYS','APEX_040200')`}showAllConstraints(){return`SELECT 
        b.CONSTRAINT_NAME "constraint_name",
        c.CONSTRAINT_TYPE "constraint_type",
        b.owner "table_schema",
        b.table_name "table_name",
        b.COLUMN_NAME "column_name"
         FROM ALL_CONS_COLUMNS b 
          join ALL_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME 
          WHERE CONSTRAINT_TYPE='P'
          and b.owner not in ('SYS','APEX_040200')`}showAllComments(){return`SELECT 
        owner "table_schema",
        table_name "table_name",
        COLUMN_NAME "column_name",
        COMMENTS "comment"
         FROM all_col_comments WHERE COMMENTS is not null
         and owner not in ('SYS','APEX_040200')`}createIndex(e){const{table:t,column:n}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n})`}dropIndex(e,t){return`DROP INDEX ${t}`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from ALL_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}'`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){const{SID:t,SERIAL:n}=e;return`ALTER SYSTEM KILL SESSION '${t},${n}' IMMEDIATE;`}processList(){return`SELECT 
        SID, SERIAL# as SERIAL,
        s.username "User", s.schemaname "Schema", 
        s.status "Status", 
        sql.sql_text SQL
        FROM v$session s,
             v$sql     sql
       WHERE sql.sql_id(+) = s.sql_id
         AND s.type     = 'USER'`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment'`}createUser(){return`CREATE USER $1 IDENTIFIED BY [password$2];
GRANT CONNECT TO $1;
ALTER USER $1 quota unlimited on USERS;
        `}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password]`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${l};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${a||""}'`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,defaultValue:r,table:o,isNotNull:i,oldRow:u}=e;return new P("","").if(n!=u.type,`ALTER TABLE "${o}" MODIFY "${t}" ${n};`).if(i!=u.isNotNull,`
ALTER TABLE "${o}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(r!=null&&r!=u.defaultValue,`
ALTER TABLE "${o}" MODIFY "${t}" DEFAULT ${r!=null&&r.match(/(:|nextval)/i)?r:`'${r==null?void 0:r.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=u.comment,`
COMMENT ON COLUMN "${o}"."${t}" is '${a}';`).if(t!=l,`
ALTER TABLE "${o}" RENAME COLUMN "${t}" TO "${l}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`ALTER SESSION SET current_schema = "${e}"`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}"`),r}truncateDatabase(e){return`SELECT 'TRUNCATE TABLE "' || owner || '"."' || object_name || '";' trun FROM all_objects where  owner ='${e}' and object_type ='TABLE'`}createDatabase(e){return"CREATE USER $1 IDENTIFIED BY password$2;"}showViewSource(e,t,n){return n?`select QUERY "Create View" from ALL_MVIEWS where OWNER='${e}' and mview_name='${t}'`:`SELECT 'CREATE VIEW ' || view_name || ' AS
' || TEXT_VC  "Create View" FROM ALL_VIEWS WHERE OWNER='${e}' AND view_name='${t}'`}showProcedureSource(e,t){return`SELECT text "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`SELECT 'CREATE ' || LISTAGG(text) within group( order by line ) "source"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showTriggerSource(e,t){return`SELECT text
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showColumns(e,t){return e?`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.DATA_TYPE "type",
        COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
        a.NULLABLE "nullable"
      from
        all_tab_columns a
      where
        a.owner = '${e}'
        and a.table_name = '${t}'`:`select
a.COLUMN_NAME "name",
a.DATA_DEFAULT "defaultValue",
a.DATA_PRECISION "precision",
a.DATA_SCALE "scale",
a.DATA_TYPE "type",
COALESCE(a.DATA_PRECISION, a.data_length) "maximum_length",
a.NULLABLE "nullable"
from
    user_tab_columns a
where
a.table_name = '${t}'`}showChecks(e,t){return`SELECT
        c.constraint_name "name",
        c.search_condition "clause"
    FROM
        all_constraints c
    WHERE
        c.owner = '${e}' and
        c.table_name = '${t}'
        AND c.constraint_type = 'C';`}showForeignKeys(e,t){let n=`select
        b.CONSTRAINT_NAME "constraint_name",
        b.COLUMN_NAME "column_name",
        c_pk.table_name "referenced_table",
        b_pk.COLUMN_NAME "referenced_column"
    from ALL_CONS_COLUMNS b
        join ALL_CONSTRAINTS c on b.owner=c.owner and b.CONSTRAINT_NAME = c.CONSTRAINT_NAME
        JOIN all_constraints c_pk ON c.r_owner = c_pk.owner AND c.r_constraint_name = c_pk.constraint_name
        join ALL_CONS_COLUMNS b_pk on b_pk.CONSTRAINT_NAME = c_pk.CONSTRAINT_NAME
    where
        b.owner = '${e}' and
        b.table_name = '${t}'
        and c.CONSTRAINT_TYPE = 'R';`;return e||(n=n.replace(/all_/ig,"USER_").replace("b.owner = 'undefined' and","")),n}showTriggers(e,t){const n=t?` AND TABLE_NAME='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",TABLE_NAME "table_name",TRIGGERING_EVENT "event" FROM all_triggers WHERE TABLE_OWNER='${e}' ${n} ORDER BY TRIGGER_NAME`}showPackages(e){return`SELECT object_name "name" FROM ALL_OBJECTS WHERE OBJECT_TYPE IN ('PACKAGE') and owner='${e}' ORDER BY "name"`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME"`}showViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'VIEW' and owner='${t}' ORDER BY "type","name"`}showMaterialViews(e,t){return`select object_type "type",object_name "name" from all_objects where object_type = 'MATERIALIZED VIEW' and owner='${t}' ORDER BY "type","name"`}buildPageSql(e,t,n){return`SELECT * FROM ${t} WHERE ROWNUM <= ${n}`}showTables(e,t){return`select t.table_name "name",nvl(num_rows,-1)  "table_rows",c.COMMENTS "comment" from all_tables t
        join ALL_TAB_COMMENTS c on t.OWNER = c.OWNER and t.TABLE_NAME = c.TABLE_NAME
        join all_objects o on t.OWNER = o.OWNER and t.TABLE_NAME = o.object_name and o.object_type='TABLE'
        where t.owner='${t}' ORDER BY "name"`}showDatabases(){return'select username as "Database" from sys.all_users order by username'}showSchemas(){return'select username as "Database" from sys.all_users order by username'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id NUMBER GENERATED AS IDENTITY PRIMARY KEY,
    create_time DATE,
    name$2 VARCHAR2(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.$2 IS '$4'`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN NUMBER) 
RETURN NUMBER 
BEGIN 
    $2
    RETURN x*2;
END;`}}class tn extends je{showVersion(){return`SELECT REPLACE(banner,'DM Database Server 64 ','') "server_version"  FROM v$version where rownum=1;`}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}dropIndex(e,t){return`DROP INDEX ${t};`}showIndex(e,t){return`SELECT COLUMN_NAME "column_name",INDEX_NAME "index_name" from all_IND_COLUMNS WHERE TABLE_OWNER='${e}' and TABLE_NAME='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"SELECT SESS_ID,STATE,SQL_TEXT FROM v$sessions"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 $2;
COMMENT ON COLUMN ${e}.$3 IS 'comment$4';`}createUser(){return"CREATE USER $1 IDENTIFIED BY [password]$2;"}updateUser(e){return`ALTER USER ${e} IDENTIFIED BY [new_password];`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} MODIFY ${n} ${l};
-- change column name
ALTER TABLE ${e} RENAME COLUMN ${n} TO [newColumnName];
COMMENT ON COLUMN ${e}.${n} IS '${a||""}';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,defaultValue:r,table:o,isNotNull:i,oldRow:u}=e;return new P("","").if(n!=u.type,`ALTER TABLE "${o}" MODIFY "${t}" ${n};`).if(i!=u.isNotNull,`
ALTER TABLE "${o}" MODIFY "${t}"${i?"NOT NULL":"NULL"};`).if(r!=null&&r!=u.defaultValue,`
ALTER TABLE "${o}" MODIFY "${t}" DEFAULT ${r!=null&&r.match(/(:|nextval)/i)?r:`'${r==null?void 0:r.replace(/(^'|'$)/g,"")}'`};`).if(a&&a!=u.comment,`
COMMENT ON COLUMN "${o}"."${t}" is '${a}';`).if(t!=l,`
ALTER TABLE "${o}" RENAME COLUMN "${t}" TO "${l}";`).toString()}showUsers(){return'SELECT username "user" FROM all_users'}pingDataBase(e){return e?`set SCHEMA ${e}`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}"`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE USER [name] IDENTIFIED BY [password];"}showViewSource(e,t){return`CALL SP_VIEWDEF('${e}', '${t}');`}showProcedureSource(e,t){return`SELECT LISTAGG(text) within group(order by line) "Create Procedure"
        FROM all_source
       WHERE owner = '${e}'
         AND name  = '${t}'
       ORDER BY line`}showFunctionSource(e,t){return`select DBMS_METADATA.GET_DDL('FUNCTION', '${t}','${e}') "Create Function";`}showColumns(e,t){return`select
        a.COLUMN_NAME "name",
        a.DATA_DEFAULT "defaultValue",
        a.DATA_TYPE "type",
        a.DATA_PRECISION "precision",
        a.DATA_SCALE "scale",
        a.data_length "maximum_length",
        a.NULLABLE "nullable",
        c.CONSTRAINT_TYPE "key",
        cc.COMMENTS "comment",
        sc."INFO2" "extra"
      from
        all_tab_columns a
        left join all_col_comments cc on a.COLUMN_NAME=cc.COLUMN_NAME and a.OWNER=cc.SCHEMA_NAME and a.table_name=cc.table_name
        left join ALL_CONS_COLUMNS b on a.COLUMN_NAME=b.COLUMN_NAME and a.OWNER=b.OWNER and a.table_name=b.table_name
        left join all_CONSTRAINTS c on b.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        left join sys.syscolumns sc on sc.id = (
            SELECT OBJECT_ID
                FROM all_objects t
                WHERE t.owner =a.OWNER
                AND t.object_name = a.table_name
                AND t.OBJECT_TYPE='TABLE'
        ) and sc."NAME"=a.COLUMN_NAME
      where
        a.owner = '${e}'
        and a.table_name = '${t}';`}showProcedures(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'PROCEDURE' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showFunctions(e){return`select object_name "ROUTINE_NAME" from all_objects where object_type = 'FUNCTION' and owner='${e}' ORDER BY "ROUTINE_NAME";`}showViews(e){return`select object_name "name" from all_objects where object_type = 'VIEW' and owner='${e}';`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT a.object_name "name",b.COMMENTS "comment" from all_objects a
join ALL_TAB_COMMENTS b on a.OWNER=b.OWNER and a.object_name=b.TABLE_NAME
where a.object_type = 'TABLE' and a.owner='${t}' and a.TEMPORARY<>'Y';`}showDatabases(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}showSchemas(){return`select object_name "Database" from all_objects where object_type = 'SCH';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY IDENTITY(1,1),
    create_time DATETIME,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE $1 IS '$3';
COMMENT ON COLUMN $1.$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1(x IN OUT NUMBER, y OUT NUMBER)
IS
BEGIN
   $2
   y:=4 * x;
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1(x IN int) RETURN int$2
AS
BEGIN
    $3
    return x*2;
END;`}}class Fe extends se{showVersion(){return"select @@version server_version;"}showAllForeignKeys(){return`SELECT 
        CONSTRAINT_NAME constraint_name,
        TABLE_SCHEMA table_schema,
        TABLE_NAME table_name,
        COLUMN_NAME column_name,
        REFERENCED_TABLE_SCHEMA referenced_schema,
        REFERENCED_TABLE_NAME referenced_table,
        REFERENCED_COLUMN_NAME referenced_column
         FROM information_schema.KEY_COLUMN_USAGE 
         WHERE REFERENCED_TABLE_NAME is not null`}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}kill(e){return`KILL ${e==null?void 0:e.ID};`}processList(){return"SELECT ID, USER User, DB, COMMAND Command, STATE State, TIME Time, INFO `SQL`\nFROM information_schema.PROCESSLIST;"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var a,r;const{nullable:n,extra:l}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(r=(a=l==null?void 0:l.toLowerCase())==null?void 0:a.includes)==null?void 0:r.call(a,"auto_increment")})}updateColumnSql(e){const{table:t,name:n,columnName:l=n,type:a,unsigned:r,zerofill:o,useCurrentTimestamp:i,isNotNull:u,isAutoIncrement:O,comment:C,defaultValue:A,character_set_name:N,collation_name:S}=e,U=!qe(a)&&!a.match(/json/i);return new P(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${l}\` \`${n}\` ${a}`).if(r=="1","UNSIGNED").if(o=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(U&&N,`CHARACTER SET ${N}`).if(U&&S,`COLLATE ${S}`).if(u,"NOT NULL").if(O,"AUTO_INCREMENT").if(C,`COMMENT '${C}'`).if(G(A)&&!u,"DEFAULT NULL").if(!G(A),`DEFAULT ${A=="CURRENT_TIMESTAMP"?A:`${Z(A,a)}`}`).append(";").toString()}showCollations(){return'select DEFAULT_COLLATE_NAME "name",CHARACTER_SET_NAME "charset",DESCRIPTION "description" from information_schema.CHARACTER_SETS ORDER BY name;'}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",event_object_table table_name,event_manipulation event FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${n} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n,l=!1){return`SELECT * FROM ${l?e+".":""}${t} LIMIT ${n};`}showTables(e){return`SELECT TABLE_COMMENT "comment",TABLE_NAME "name",TABLE_ROWS "table_rows",\`AUTO_INCREMENT\` "auto_increment",
        row_format "row_format",DATA_LENGTH "data_length",INDEX_LENGTH "index_length",TABLE_COLLATION "collation",
        TABLE_TYPE "view_group",\`ENGINE\` engine
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${e}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show DATABASES"}showSchemas(){return this.showDatabases()}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name$2 VARCHAR(255)
) COMMENT '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class nn extends Fe{showVersion(){return"select replace(@@version,'-MariaDB','') server_version;"}}class an extends ve{showVersion(){return"show version"}showDatabases(){return"show dbs"}buildPageSql(e,t,n){return`db('${e}').collection('${t}').find({}).limit(${n}).toArray()`}showIndex(e,t){return`db('${e}').collection('${t}').indexes();`}createIndex(e){const{database:t,table:n,column:l}=e;return`db('${t}').collection('${n}').createIndex({ ${l||"column_name"}: 1 });`}createDatabase(e){return'db("db_name").createCollection("collection")'}}class ln extends se{showVersion(){return"SELECT CAST(SERVERPROPERTY('ProductVersion') AS SYSNAME)+' '+CAST(SERVERPROPERTY('Edition') AS SYSNAME) AS server_version"}showAllForeignKeys(){return`SELECT 
    OBJECT_SCHEMA_NAME(fk.parent_object_id) AS table_schema,
    OBJECT_NAME(fk.parent_object_id) AS table_name,
    COL_NAME(fc.parent_object_id, fc.parent_column_id) AS column_name,
    OBJECT_SCHEMA_NAME(fk.referenced_object_id) AS referenced_schema,
    OBJECT_NAME(fk.referenced_object_id) AS referenced_table,
    COL_NAME(fc.referenced_object_id, fc.referenced_column_id) AS referenced_column
FROM 
    sys.foreign_keys fk
JOIN 
    sys.foreign_key_columns fc ON fk.object_id = fc.constraint_object_id`}showAllComments(){return`SELECT 
        s.name table_schema,
        t.name AS table_name,
        c2.name AS column_name,
        prop.value AS comment
        FROM 
           sys.columns c2 
                join sys.tables t on c2.object_id=t.object_id
                join sys.schemas s on t.schema_id=s.schema_id 
                join sys.extended_properties prop ON prop.major_id = c2.object_id AND prop.minor_id = c2.column_id`}createIndex(e){return`ALTER TABLE ${e.table} ADD ${e.type} (${e.column})`}dropIndex(e,t){return`DROP INDEX ${e}.${t}`}showIndex(e,t){return`SELECT
        index_name = ind.name,
        column_name = col.name,
        ind.is_primary_key "isPrimary",
        ind.is_unique "isUnique",
        ind.is_unique_constraint,
        CASE 
            WHEN ind.is_primary_key=1 THEN 'PRIMARY'
            WHEN ind.is_unique=1 THEN 'UNIQUE'
            WHEN ind.is_unique_constraint=1 THEN 'UNIQUE'
        ELSE 'INDEX' END index_type
      FROM
        sys.indexes ind
        INNER JOIN sys.index_columns ic ON ind.object_id = ic.object_id
        and ind.index_id = ic.index_id
        INNER JOIN sys.columns col ON ic.object_id = col.object_id
        and ic.column_id = col.column_id
        INNER JOIN sys.tables t ON ind.object_id = t.object_id
      WHERE
        t.name = '${t}';`}variableList(){throw new Error("Method not implemented.")}statusList(){throw new Error("Method not implemented.")}kill(e){return`kill ${e.ID};`}processList(){return`SELECT
    s.session_id "ID",
    s.login_name "User",
    s.program_name "Client",
    r.status "Status",
    r.wait_time "Wait Time",
    d.text "SQL"
FROM sys.dm_exec_sessions s
LEFT JOIN sys.dm_exec_requests r ON s.session_id = r.session_id
Outer APPLY sys.dm_exec_sql_text(sql_handle) d
WHERE s.is_user_process = 1;`}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD $1 [type]$2;`}createUser(){return"CREATE LOGIN [name] WITH PASSWORD = 'password';"}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t,i=r=="YES"?"NULL":"NOT NULL";return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} ${l} ${i};
-- change column name
EXEC sp_rename '${e}.${n}', '${n}', 'COLUMN';`}updateColumnSql(e){const{columnName:t,columnType:n,newColumnName:l,comment:a,oldRow:r,isNotNull:o,schema:i,table:u}=e,O=o?"NOT NULL":"NULL";return new P(`ALTER TABLE "${i}"."${u}" ALTER COLUMN ${t} ${n} ${O};`,`
`).if(t!=l,()=>`EXEC sp_rename '${i}.${u}.${t}' , '${l}', 'COLUMN';`).if(a!=r.comment,()=>`EXEC ${r.comment!=null?"sp_updateextendedproperty":"sp_addextendedproperty"} 
@level0type = N'Schema', @level0name = '${i}',
@level1type = N'Table', @level1name = '${u}', 
@level2type = N'Column', @level2name = '${l}',
@name = N'MS_Description', @value = '${a}';`).toString()}showUsers(){return"SELECT name [user] from sys.database_principals where type='S'"}updateTable(e){const{database:t,table:n,newTableName:l}=e;return`sp_rename '${n}', '${l}'`}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE [',table_schema,'].[',TABLE_NAME, '];') trun FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'  AND TABLE_SCHEMA='${e}'`}createDatabase(e){return`create database ${e||"[name]"}`}showViewSource(e,t){return`SELECT definition 'Create View' FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showProcedureSource(e,t){return`SELECT definition 'Create Procedure','${e}.${t}' "Procedure" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showFunctionSource(e,t){return`SELECT definition 'Create Function','${e}.${t}' "Function" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showTriggerSource(e,t){return`SELECT definition 'SQL Original Statement','${e}.${t}' "Trigger" FROM sys.sql_modules WHERE object_id = OBJECT_ID('${e}.${t}');`}showColumns(e,t){return["information_schema","sys"].includes(e==null?void 0:e.toLowerCase())?`SELECT
            name,
            type_name(system_type_id) "type",
            is_nullable nullable,
            max_length "maximum_length"
        FROM
            sys.all_columns
        WHERE
            object_id = OBJECT_ID('${e}.${t}') ;`:`SELECT 
               c.COLUMN_NAME "name",
               DATA_TYPE "type",
               numeric_precision "precision",
               numeric_scale "scale",
               IS_NULLABLE nullable, CHARACTER_MAXIMUM_LENGTH "maximum_length", COLUMN_DEFAULT "defaultValue", '' "comment", tc.constraint_type "key",
               COLUMNPROPERTY(object_id('${e}.${t}'), c.COLUMN_NAME, 'IsIdentity') extra
               FROM
               INFORMATION_SCHEMA.COLUMNS c
               left join  INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE ccu
               on c.COLUMN_NAME=ccu.column_name and c.table_name=ccu.table_name and ccu.TABLE_SCHEMA=c.TABLE_SCHEMA
               left join  INFORMATION_SCHEMA.TABLE_CONSTRAINTS tc
               on tc.constraint_name=ccu.constraint_name
               and tc.TABLE_SCHEMA=c.TABLE_SCHEMA and tc.table_name=c.table_name WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' ORDER BY ORDINAL_POSITION`}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        "INFORMATION_SCHEMA"."CHECK_CONSTRAINTS" AS cc,
        "INFORMATION_SCHEMA"."TABLE_CONSTRAINTS" AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showForeignKeys(e,t){return`SELECT
        f.name AS "constraint_name",
        COL_NAME( fkc.parent_object_id, fkc.parent_column_id ) AS "column_name",
        OBJECT_NAME (fkc.referenced_object_id) AS "referenced_table",
        COL_NAME( fkc.referenced_object_id, fkc.referenced_column_id )  AS "referenced_column",
        update_referential_action_desc "updateRule",
        delete_referential_action_desc "deleteRule"
    FROM
        sys.foreign_key_columns fkc
        JOIN sys.foreign_keys f ON f.object_id = fkc.constraint_object_id
        JOIN sys.tables tab1 ON tab1.object_id = fkc.parent_object_id and tab1.name='${t}' and SCHEMA_NAME(tab1.schema_id)='${e}'
    ;`}showTriggers(e,t){const n=t?` AND tb.name='${t}'`:"";return`SELECT 
                tr.name AS trigger_name, 
                tb.name AS table_name 
            FROM 
                sys.triggers tr
                INNER JOIN sys.tables tb ON tr.parent_id = tb.object_id
                INNER JOIN sys.schemas sc ON tb.schema_id = sc.schema_id
            WHERE 
                tr.is_ms_shipped = 0
                AND sc.name = '${e}' ${n}`}showProcedures(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e,t){return`SELECT name FROM sys.all_views t where SCHEMA_NAME(t.schema_id)='${t}' order by name`}buildPageSql(e,t,n){return`SELECT TOP ${n} * FROM ${t};`}showTables(e,t){return`SELECT TABLE_NAME 'name'
      FROM
        INFORMATION_SCHEMA.TABLES t
      WHERE
        TABLE_TYPE = 'BASE TABLE'
        AND TABLE_SCHEMA = '${t}' order by TABLE_NAME`}showDatabases(){return"SELECT name 'Database' FROM sys.databases"}showSchemas(){return"SELECT SCHEMA_NAME [schema] FROM INFORMATION_SCHEMA.SCHEMATA"}tableTemplate(e){return`CREATE TABLE ${(e=="dbo"?"":`${e}.`)+"table_name"}$1(  
    id int IDENTITY(1,1) primary key,
    create_time DATETIME,
    update_time DATETIME,
    content$2 varchar(255)
);
EXECUTE sp_addextendedproperty N'MS_Description', '[table_comment]', N'user', N'dbo', N'table', N'[table_name]', NULL, NULL;
EXECUTE sp_addextendedproperty N'MS_Description', '[column_comment]', N'user', N'dbo', N'table', N'[table_name]', N'column', N'[column_name]';
`}viewTemplate(){return`CREATE VIEW dbo.view_name$1
AS
SELECT * FROM 
GO`}procedureTemplate(){return`CREATE PROCEDURE dbo.procedure_name$1
AS
BEGIN
    $2
END;`}functionTemplate(){return`CREATE FUNCTION dbo.function_name$1() RETURNS [TYPE]
BEGIN
    $2
    return [value];
END;`}triggerTemplate(e){return`CREATE TRIGGER trigger_name$1
ON ${e??"[table_name]$2"}
[FOR/AFTER] INSERT
AS
BEGIN
    $3
END;`}}class rn extends ve{showVersion(){return"call dbms.components() yield name, versions, edition unwind versions as server_version return server_version;"}showDatabases(){return"SHOW DATABASES yield name AS Database"}showSchemas(){return this.showDatabases()}showTables(e){return"call db.labels() yield label as name RETURN name ORDER BY toLower(name)"}addColumn(e,t){return`MATCH (n:${e}) WHERE id(n) = 1 SET n.name = 'name' RETURN n`}showColumns(e,t){return`MATCH(n:\`${t}\`) UNWIND keys(n) AS name RETURN DISTINCT name`}showIndex(e,t){return`show indexes yield name as index_name, properties as column_name, type as index_type, labelsOrTypes where '${t}' in labelsOrTypes`}showViews(e){return"call db.relationshipTypes() yield relationshipType AS name RETURN name ORDER BY toLower(name)"}showUsers(){return"SHOW USERS"}createUser(){return`CREATE USER [name] IF NOT EXISTS 
    SET PASSWORD 'password';`}buildPageSql(e,t,n){return`MATCH (n${t=="*"?"":`:${t}`}) RETURN n LIMIT ${n}`}createDatabase(e){return"CREATE DATABASE $1"}tableTemplate(){return"CREATE (n:node {id:1}) return n;"}createIndex(e){return`CREATE INDEX FOR (n:${e.table}) ON (n.id)`}dropIndex(e,t){return`DROP INDEX \`${t}\``}viewTemplate(){return"MATCH (n1:node {id:1}), (n2:node {id:2}) CREATE (n1)-[r:TO]->(n2) RETURN type(r)"}}class Ke extends ge{defaultPart(){var O,C;const{oldRow:e,isAutoIncrement:t,defaultValue:n,columnType:l}=this.param,a=(O=n==null?void 0:n.match)==null?void 0:O.call(n,/\bnextval\b/);if(t&&!e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} ADD GENERATED ALWAYS AS IDENTITY;`;if(!t&&e.isAutoIncrement&&!a)return`${this.afterColumnPrefix} DROP IDENTITY;`;if(!t&&e.isAutoIncrement&&a)return`${this.afterColumnPrefix} DROP DEFAULT;`;if(e.defaultValue==n)return"";const u=(C=n==null?void 0:n.match)!=null&&C.call(n,/\bnextval\b/)?n:Z(n,l);return`${this.afterColumnPrefix} ${G(n)?"DROP DEFAULT":`SET DEFAULT ${u}`};`}commentPart(){const{oldRow:e,table:t,columnName:n,comment:l}=this.param;if(l!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${l}';`}}class Qe extends se{showVersion(){return"SHOW server_version;"}createIndex(e){const t=e.name??`${e.column||"[column]"}`,n=e.indexType||"btree";return`CREATE INDEX ${t}_${new Date().getTime()}_index ON 
    ${e.table} USING ${n} ("${e.column||"[column]"}");`}dropIndex(e,t){return`DROP INDEX "${t}"`}showIndex(e,t){return`select
    t.relname as table_name,
    i.relname as index_name,
    a.attname as column_name,
    ix.indisprimary "isPrimary",
    ix.indisunique "isUnique",
    CASE ix.indisprimary
        WHEN true THEN 'PRIMARY'
    ELSE CASE ix.indisunique
        WHEN true THEN 'UNIQUE'
    ELSE 'KEY'
    END
    END AS index_type,
    am.amname index_method
  from
    pg_class t
    join pg_catalog.pg_namespace pgn ON pgn.oid=t.relnamespace and pgn.nspname='${e}'
    join pg_index ix on t.oid = ix.indrelid
    join pg_attribute a on t.oid = a.attrelid and a.attnum = ANY(string_to_array(textin(int2vectorout(ix.indkey)),' ')::int[])
    join pg_class i on ix.indexrelid = i.oid
    JOIN pg_am am ON am.oid=i.relam
  where
     t.relkind = 'r'
    and t.relname = '${t}'
  order by
    ix.indexrelid;`}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}kill(e){return`SELECT pg_terminate_backend(${e.ID})`}processList(){return`SELECT
        a.pid AS "ID",
        query_start AS "Time",
        datname AS "db",
        CASE
        WHEN c.relname IS NOT NULL THEN c.relname
        ELSE l.virtualtransaction
        END AS "Target",
        l.mode AS "State",
        query AS "SQL"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e} 
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return`CREATE USER $1 WITH PASSWORD 'password$2';
-- Grant select privilege;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO $1;
-- Grant all privileges;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO $1;`}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:l,comment:a,nullable:r,defaultValue:o}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};
-- Change column comment
COMMENT ON COLUMN ${e}.${n} IS '${a||"comment"}';`}updateColumnSql(e){return new Ke(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}showAllForeignKeys(){return`SELECT
      refc.constraint_name "constraint_name",
      refc.constraint_schema "table_schema",
      kcu.table_name "table_name",
      kcu.column_name AS "column_name",
      ccu.table_name AS "referenced_table",
      ccu.column_name AS "referenced_column"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name;`}showForeignKeys(e,t){return`SELECT
      refc.constraint_name constraint_name,
      kcu.column_name AS column_name,
      ccu.table_name AS referenced_table,
      ccu.column_name AS referenced_column,
      kcu.ordinal_position AS ord_position,
      refc.update_rule "updateRule",
      refc.delete_rule "deleteRule"
  FROM
      information_schema.referential_constraints AS refc,
      information_schema.key_column_usage AS kcu,
      information_schema.constraint_column_usage AS ccu
  WHERE
      refc.constraint_schema = '${e}'
      AND refc.constraint_name = kcu.constraint_name
      AND refc.constraint_schema = kcu.table_schema
      AND ccu.constraint_name = refc.constraint_name
      AND kcu.table_name = '${t}'
  ORDER BY ord_position;`}pingDataBase(e){return e?`set search_path to '${e}';`:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showViewSource(e,t,n){return n?`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`:`SELECT CONCAT('CREATE VIEW ',table_name,'
AS
(',regexp_replace(view_definition,';$',''),')') "Create View"
    ,table_name,view_definition from information_schema.views 
    where table_schema='${e}' and table_name='${t}'`}showMaterialViewSource(e,t){return`SELECT CONCAT('CREATE MATERIALIZED VIEW ',matviewname,'
AS
(',regexp_replace(definition,';$',''),')') "Create View"
    ,matviewname "table_name",'definition' "view_definition" from pg_matviews
    WHERE schemaname='${e}' and matviewname='${t}';`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showColumns(e,t,n){return`SELECT 
          ${n?"c.*,":""}
          c.COLUMN_NAME "name", 
          atttypid::regtype AS pg_reg_type,
          DATA_TYPE "type",
          IS_NULLABLE nullable, 
          numeric_precision "precision",
          numeric_scale "scale",
          CHARACTER_MAXIMUM_LENGTH "maximum_length", 
          COLUMN_DEFAULT "defaultValue", 
          pg_catalog.col_description(pgc.oid, c.ordinal_position::int) AS "comment",
          tc.constraint_type "key",
          tc.constraint_name "constraint_name",
          cc.table_name "referenced_table",
          cc.column_name "referenced_column",
          pa.*
        FROM information_schema.columns c
        JOIN pg_catalog.pg_class pgc ON c.table_name = pgc.relname 
        JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=c.table_schema
        JOIN pg_attribute pa on pa.attname =c.column_name and pa.attrelid =pgc.oid 
        LEFT JOIN information_schema.key_column_usage ccu on ccu.table_schema=c.table_schema
          and ccu.table_name=c.table_name and ccu.column_name=c.COLUMN_NAME
        LEFT JOIN information_schema.table_constraints tc on tc.table_schema=c.table_schema 
          and tc.table_name=c.table_name and tc.constraint_name=ccu.constraint_name
        LEFT JOIN information_schema.constraint_column_usage cc on cc.table_schema=c.table_schema 
          and cc.constraint_name=tc.constraint_name and  tc.constraint_type='FOREIGN KEY'
        WHERE c.TABLE_SCHEMA = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showChecks(e,t){return`SELECT
    tc.CONSTRAINT_NAME "name",
    cc.CHECK_CLAUSE "clause"
FROM
    "information_schema"."check_constraints" AS cc,
    "information_schema"."table_constraints" AS tc
WHERE
    tc.CONSTRAINT_SCHEMA = '${e}'
    AND tc.TABLE_NAME = '${t}'
    AND tc.CONSTRAINT_TYPE = 'CHECK'
    AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
    AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME
    AND cc.CONSTRAINT_NAME NOT LIKE '%_not_null'`}showPartitions(e,t){return`select col.column_name "columnName", pt.partition_strategy "strategy" from (
      select
          partrelid, partnatts, case partstrat when 'h' then 'HASH' when 'l' then 'LIST' when 'r' then 'RANGE' end as partition_strategy, unnest(partattrs) column_index
      from
          pg_partitioned_table ) pt
      join pg_class pc on pc.oid = pt.partrelid
      join information_schema.columns col on col.table_schema = pc.relnamespace :: regnamespace :: text
        and col.table_name = pc.relname and col.ordinal_position = pt.column_index
      WHERE col.table_schema='${e}' and col.table_name='${t}';`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name",event_object_table table_name,string_agg(event_manipulation, ',') event FROM information_schema.TRIGGERS WHERE 
    trigger_schema = '${e}' ${n} GROUP BY event_object_table,trigger_name ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME",pg_get_functiondef(p.oid) source,p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='PROCEDURE' ORDER BY r.ROUTINE_NAME ASC`}showFunctions(e){return`SELECT r.ROUTINE_NAME "ROUTINE_NAME",
    p.oid FROM information_schema.routines r
    join pg_proc p on r.ROUTINE_NAME=p.proname JOIN pg_namespace n ON p.pronamespace = n.oid and n.nspname='${e}'
    WHERE r.ROUTINE_SCHEMA = '${e}' and r.ROUTINE_TYPE='FUNCTION' ORDER BY r.ROUTINE_NAME ASC `}showFunctionSource(e,t,n){return n?`select pg_get_functiondef('${n}') "Create Function",'${t}' "Function";`:`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showViews(e,t){return`select table_name "name" from information_schema.tables where table_schema='${t}' and table_type='VIEW' order by "name";`}showMaterialViews(e,t){return`SELECT matviewname "name" from pg_matviews WHERE schemaname='${t}' order by "name" ASC`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment",pgc.reltuples "table_rows"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname 
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showDatabases(){return"SELECT datname FROM pg_database WHERE datistemplate = false order by datname ASC;"}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}showSequences(e){return`select sequencename name,last_value sequence from pg_sequences WHERE schemaname='${e}' ORDER BY name;`}showCustomTypes(e){return`SELECT  t.typname name,typtype type,string_agg(pg_enum.enumlabel, ',') enum_values
    FROM        pg_type t 
    LEFT JOIN   pg_enum ON pg_enum.enumtypid = t.oid
    LEFT JOIN   pg_catalog.pg_namespace n ON n.oid = t.typnamespace 
    WHERE (t.typrelid = 0 OR (SELECT c.relkind = 'c' FROM pg_catalog.pg_class c WHERE c.oid = t.typrelid)) 
    AND     NOT EXISTS(SELECT 1 FROM pg_catalog.pg_type el WHERE el.oid = t.typelem AND el.typarray = t.oid)
    and n.nspname='${e}' GROUP BY name,type;`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(e){return`CREATE ${e?"MATERIALIZED ":""}VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
LANGUAGE SQL
as $$
[$2]
$$;`}triggerTemplate(e){return`CREATE FUNCTION trigger_fun$1() RETURNS TRIGGER AS 
\\$body\\$
BEGIN
    $2
    RETURN [value];
END;
\\$body\\$ 
LANGUAGE plpgsql;

CREATE TRIGGER [name]$3
[BEFORE/AFTER] INSERT
ON ${e??"[table_name]$4"}
FOR EACH ROW
EXECUTE PROCEDURE [trigger_fun]();`}dropTriggerTemplate(e,t){return`DROP TRIGGER ${e} on ${t}`}functionTemplate(){return`CREATE FUNCTION fun_name$1() 
RETURNS int$2 AS $$
BEGIN
    $3
    return 0;
END;
$$ LANGUAGE plpgsql;`}}class sn extends Qe{showVersion(){return"SELECT VERSION() as server_version"}createIndex(e){throw new Error("Redshift not support index!")}variableList(){return"SHOW ALL"}statusList(){return`SELECT
        'db_numbackends' AS db,
        pg_stat_get_db_numbackends(datid) AS status
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_commit',
        pg_stat_get_db_xact_commit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_xact_rollback',
        pg_stat_get_db_xact_rollback(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_fetched',
        pg_stat_get_db_blocks_fetched(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()
      UNION ALL
      SELECT
        'db_blocks_hit',
        pg_stat_get_db_blocks_hit(datid)
      FROM
        pg_stat_database
      WHERE
        datname = current_database()`}processList(){return`SELECT
        a.pid AS "Id",
        a.usename AS "User",
        a.client_addr AS "Host",
        a.client_port AS "Port",
        datname AS "db",
        query AS "Command",
        l.mode AS "State",
        query_start AS "Time",
        CASE
          WHEN c.relname IS NOT NULL THEN 'Locked Object: ' || c.relname
          ELSE 'Locked Transaction: ' || l.virtualtransaction
        END AS "Info"
      FROM
        pg_stat_activity a
        LEFT JOIN pg_locks l ON a.pid = l.pid
        LEFT JOIN pg_class c ON l.relation = c.oid
      ORDER BY
        a.pid ASC,
        c.relname ASC`}addColumn(e,t){return`ALTER TABLE ${e}
  ADD COLUMN [column] [type];
COMMENT ON COLUMN ${e}.[column] IS 'comment';`}createUser(){return"CREATE USER [name] WITH PASSWORD 'password';"}updateUser(e){return`ALTER USER ${e} WITH PASSWORD 'new_password';`}updateColumn(e,t){const{name:n,type:l}=t;return`-- change column type
ALTER TABLE ${e}
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e}
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new Ke(e).genAlterSQL()}showUsers(){return'SELECT usename "user" from pg_user '}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a}=e;let r="";return a&&a!=l&&(r=`COMMENT ON TABLE "${t}" IS '${a}';`),n&&t!=n&&(r+=`ALTER TABLE "${t}" RENAME TO "${n}";`),r}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE "',TABLE_NAME, '";') trun FROM INFORMATION_SCHEMA.TABLES WHERE  table_schema ='${e}' AND table_type='BASE TABLE';`}createDatabase(e){return"CREATE DATABASE $1"}showTableSource(e,t){return`SHOW TABLE "${e}"."${t}"`}showViewSource(e,t){return`SHOW VIEW "${e}"."${t}"`}showProcedureSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Procedure",'${t}' "Procedure";`}showFunctionSource(e,t){return`select pg_get_functiondef('${e}.${t}' :: regproc) "Create Function",'${t}' "Function";`}showTriggerSource(e,t){return`select pg_get_triggerdef(oid) "SQL Original Statement",'${e}.${t}' "Trigger" from pg_trigger where tgname = '${t}';`}showPartitions(e,t){return""}showSequences(e){return`SELECT sequence_name name FROM information_schema.sequences WHERE sequence_schema = '${e}' ORDER BY sequence_name`}showTriggers(e,t){const n=t?` AND event_object_table='${t}'`:"";return`SELECT TRIGGER_NAME "trigger_name" FROM information_schema.TRIGGERS WHERE trigger_schema = '${e}' ${n} ORDER BY TRIGGER_NAME ASC`}showProcedures(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME ASC`}showFunctions(e){return`SELECT ROUTINE_NAME "ROUTINE_NAME" FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME ASC `}showTables(e,t){return`  SELECT t.table_name "name", pg_catalog.obj_description(pgc.oid, 'pg_class') "comment"
FROM information_schema.tables t
JOIN pg_catalog.pg_class pgc ON t.table_name = pgc.relname
JOIN pg_catalog.pg_namespace pgn ON pgn.oid=pgc.relnamespace and pgn.nspname=t.table_schema
WHERE t.table_type='BASE TABLE'
AND t.table_schema='${t}' order by t.table_name;`}showSchemas(){return'SELECT nspname "schema" from pg_catalog.pg_namespace order by nspname ASC;'}tableTemplate(){return`CREATE TABLE table_name$1(
    id INT identity(1, 1) NOT NULL PRIMARY KEY,
    create_time DATE,
    update_time DATE,
    content$2 VARCHAR(255)
);
COMMENT ON TABLE table_name IS 'table_comment';
COMMENT ON COLUMN table_name.content IS 'content';`}procedureTemplate(){return`CREATE PROCEDURE procedure_name()
as $$
begin
    SELECT 1;
END;
$$ LANGUAGE plpgsql;`}functionTemplate(){return`CREATE FUNCTION function_name()
RETURNS int STABLE
AS $$
    SELECT 1
$$ LANGUAGE sql;`}}class on extends se{showVersion(){return'select CURRENT_VERSION() as "server_version";'}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return""}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var A;const{name:n,type:l,comment:a,nullable:r,defaultValue:o,extra:i,character_set_name:u,collation_name:O}=t,C=r!="YES";return new P(`ALTER TABLE ${e}`).append(`
	CHANGE ${n} ${n} ${l}`).if(u,`CHARACTER SET ${u}`).if(O,`COLLATE ${O}`).if(C,"NOT NULL").if((A=i==null?void 0:i.toLowerCase())==null?void 0:A.includes("auto_increment"),"AUTO_INCREMENT").if(a,`COMMENT '${a}'`).if(G(o)&&!C,"DEFAULT NULL").if(!G(o),`DEFAULT ${o=="CURRENT_TIMESTAMP"?o:`'${it(o)}'`}`).toString()}updateColumnSql(e){const{table:t,columnName:n,newColumnName:l,columnType:a,isNotNull:r,isAutoIncrement:o,comment:i,defaultValue:u,oldRow:O}=e,C=`ALTER TABLE "${t}"`,A=r?"SET NOT NULL":"DROP NOT NULL";return new P(`${C} ALTER COLUMN "${n}" TYPE ${a};`,`
`).if(i&&i!=O.comment,`${C} ALTER COLUMN "${n}" COMMENT '${i}';`).if(r!=O.isNotNull,`${C} ALTER COLUMN "${n}" ${A};`).if(n!=l,`${C} RENAME COLUMN "${n}" TO "${l}";`).toString()}showCollations(){return""}showChecks(e,t){return""}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e,t){return e?`use "${t}"."${e}"`:"select 1"}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return`CREATE DATABASE $1
    DEFAULT CHARACTER SET = 'utf8mb4';`}showTableSource(e,t){return`select get_ddl('table', '${e}.${t}') "Create Table";`}showViewSource(e,t){return`select get_ddl('view', '${e}.${t}') "Create View";`}showProcedureSource(e,t){return`select get_ddl('PROCEDURE', '${e}.${t}()') "Create Procedure";`}showFunctionSource(e,t){return`select get_ddl('FUNCTION', '${e}.${t}()') "Create Function";`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME "name",
        DATA_TYPE "type",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        IS_IDENTITY "key",
        COMMENT "comment",
        IS_NULLABLE "nullable",
        COLUMN_DEFAULT "defaultValue",
        COLLATION_NAME "$"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}showTriggers(e,t){const n=t?` AND EVENT_OBJECT_TABLE='${t}'`:"";return`SELECT TRIGGER_NAME FROM information_schema.TRIGGERS WHERE TRIGGER_SCHEMA = '${e}' ${n} ORDER BY TRIGGER_NAME;`}showProcedures(e){return`SELECT PROCEDURE_NAME ROUTINE_NAME FROM information_schema.PROCEDURES WHERE PROCEDURE_SCHEMA = '${e}' ORDER BY PROCEDURE_NAME`}showFunctions(e){return`SELECT FUNCTION_NAME ROUTINE_NAME FROM INFORMATION_SCHEMA.FUNCTIONS WHERE FUNCTION_SCHEMA='${e}' ORDER BY FUNCTION_NAME`}showViews(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE='VIEW' ORDER BY TABLE_NAME;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e,t){return`SELECT COMMENT "comment",TABLE_NAME "name",ROW_COUNT "table_rows"
        FROM information_schema.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showDatabases(){return"show databases;"}showSchemas(){return'SELECT SCHEMA_NAME "schema" FROM INFORMATION_SCHEMA.SCHEMATA;'}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    create_time DATE,
    name$2 VARCHAR(255)
);
COMMENT ON TABLE table_name$1 IS '$3';
COMMENT ON COLUMN table_name$1.name$2 IS '$4';`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`create procedure proc_name$1() returns string
language javascript
as $$
    $2return 1+1;
$$;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int
AS
$$
    $2return 1;
$$`}}class Xe extends ve{showVersion(){return"select sqlite_version() as server_version"}updateColumn(e,t){throw new Error("SQLite not support update column.")}updateColumnSql(e){throw new Error("SQLite not support update column.")}createIndex(e){const{table:t,column:n="$2"}=e;return`CREATE INDEX ${`${t}_${n}`} ON ${t}(${n});`}showIndex(e,t){return`SELECT name index_name FROM sqlite_master WHERE type='index' and tbl_name='${t}' `}dropIndex(e,t){return`DROP INDEX ${t};`}showTables(e,t){return"SELECT name, type FROM sqlite_master WHERE type='table' ORDER BY type ASC, name ASC;"}addColumn(e,t){return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type$2];`}showSequences(e){return"SELECT name,seq sequence FROM sqlite_sequence"}showColumns(e,t){return`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue",t2."table" "referenced_table",t2."to" "referenced_column" FROM PRAGMA_TABLE_INFO('${t}') t1
        left join (
            SELECT * FROM  pragma_foreign_key_list('${t}')
        ) t2  on t1.name=t2.'from';`}showViews(e,t){return"SELECT name, type FROM sqlite_master WHERE type='view' AND name <> 'sqlite_sequence' AND name <> 'sqlite_stat1' ORDER BY type ASC, name ASC;"}showTriggers(e,t){return`SELECT name, tbl_name, sql FROM sqlite_master WHERE type='trigger' ${t?` AND tbl_name='${t}'`:""} ORDER BY name ASC;`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTableSource(e,t){return`SELECT sql "Create Table" FROM sqlite_master where name='${t}' and type='table';`}showViewSource(e,t){return`SELECT sql "Create View" FROM sqlite_master where name='${t}' and type='view';`}showTriggerSource(e,t){return`SELECT sql FROM sqlite_master where name='${t}' and type='trigger';`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    content TEXT
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}}class En extends Xe{showVersion(){return"SELECT library_version as server_version from pragma_version()"}pingDataBase(e,t){return e?`set schema '${e}';`:null}showDatabases(){return'SELECT DISTINCT catalog_name "Database" from information_schema.schemata ORDER BY catalog_name'}showSchemas(e){return`SELECT schema_name "schema" from information_schema.schemata WHERE catalog_name='${e}' ORDER BY schema_name`}showTables(e,t){return`SELECT table_name "name" FROM information_schema.tables
        WHERE table_type in ('BASE TABLE','LOCAL TEMPORARY') and table_catalog='${e}' and table_schema = '${t}' order by table_name`}showViews(e,t){return`
SELECT table_name "name",1 "view_group",null "source" FROM information_schema.tables
        WHERE table_type='VIEW' and table_catalog='${e}' and table_schema = '${t}'
        UNION all
SELECT viewname "name",2 "view_group",definition "source" FROM pg_catalog.pg_views
        WHERE schemaname = '${t}'
ORDER BY "view_group",name`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id INTEGER NOT NULL PRIMARY KEY,
    content TEXT
);`}showColumns(e,t){return["system","temp"].includes(e)?`SELECT column_name "name", data_type "type",
        column_default "defaultValue", is_nullable "nullable"
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`:`SELECT t1.*,t1.pk "key",t1.dflt_value "defaultValue" FROM PRAGMA_TABLE_INFO('${t}') t1;`}updateColumn(e,t){const{name:n,type:l}=t;return`-- change column type
ALTER TABLE ${e} 
    ALTER COLUMN ${n} TYPE ${l};
-- change column name
ALTER TABLE ${e} 
    RENAME COLUMN ${n} TO ${n};`}updateColumnSql(e){return new ge(e).genAlterSQL()}}class Je extends Re{showVersion(){return"select version() as server_version;"}showDatabases(){return"show databases"}showTables(e,t){return`show tables in ${e}`}showColumns(e,t){return`describe ${e}.${t};`}showViews(e,t){return`show views in ${e}`}}class cn extends Re{showVersion(){return"SELECT node_version as server_version FROM system.runtime.nodes;"}pingDataBase(e){return e?`use ${e}`:null}showDatabases(){return"show catalogs"}}class un extends Re{showVersion(){return"SELECT cql_version as server_version FROM system.local;"}showUsers(){return'SELECT role as "user" FROM system_auth.roles;'}pingDataBase(e){return e?`use ${e}`:null}createDatabase(e){return`CREATE KEYSPACE $1
WITH REPLICATION = { 
    'class' : 'SimpleStrategy', 
    'replication_factor' : 1 
};`}showDatabases(){return'select keyspace_name as "database" from system_schema.keyspaces;'}showTables(e,t){return`select table_name as "name" from system_schema.tables where keyspace_name='${e}'`}showColumns(e,t){return`select column_name as "name",type from system_schema.columns where keyspace_name='${e}' and table_name='${t}'`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int PRIMARY key,
    create_time DATE,
    update_time DATE,
    content TEXT
);`}}class mn extends ge{otherPart(){const{oldRow:e,isAutoIncrement:t}=this.param;return!e.isAutoIncrement&&t?`${this.afterColumnPrefix} SET GENERATED ALWAYS as identity;`:e.isAutoIncrement&&!t?`${this.afterColumnPrefix} DROP GENERATED;`:null}commentPart(){const{oldRow:e,table:t,columnName:n,comment:l}=this.param;if(l!=e.comment)return`COMMENT ON COLUMN "${t}"."${n}" is '${l}';`}changeTypePart(){const{oldRow:e,columnType:t}=this.param;return e.type==t?"":`${this.afterColumnPrefix} SET DATA TYPE ${t};`}}class Tn extends Re{showVersion(){return'SELECT SERVICE_LEVEL as "server_version" FROM SYSIBMADM.ENV_INST_INFO;'}showUsers(){return`SELECT GRANTEE "user" FROM syscat.dbauth WHERE GRANTEETYPE='U';`}pingDataBase(e){return e?`set SCHEMA ${e}`:null}showDatabases(){return'select schemaname "database" from syscat.schemata'}showTableSource(e,t){return null}showTables(e,t){return`select tabname "name", remarks "comment" from syscat.tables where tabschema='${t}' and TYPE='T' order by tabname`}showColumns(e,t){return`select COLUMN_NAME "name",
        DATA_TYPE "type",
        IS_NULLABLE "nullable",
        NUMERIC_PRECISION "precision",
        NUMERIC_SCALE "scale",
        CHARACTER_MAXIMUM_LENGTH "maximum_length",
        COLUMN_DEFAULT "defaultValue",
        tc.TYPE "key",
        si.UNIQUERULE='U' "isUnique",
        sc.remarks "comment",
        sc.IDENTITY='Y' "isAutoIncrement",
        r.REFTABNAME "referenced_table",
        trim(r.PK_COLNAMES) "referenced_column"
        from SYSIBM.columns c
        left join syscat.keycoluse kc
            on c.TABLE_SCHEMA=kc.TABSCHEMA and c.TABLE_NAME=kc.TABNAME  and c.COLUMN_NAME=kc.COLNAME
        left join SYSCAT.tabconst tc
            on c.TABLE_SCHEMA=tc.TABSCHEMA and c.TABLE_NAME=tc.TABNAME  and tc.CONSTNAME=kc.CONSTNAME
        left join sysibm.syscolumns sc
            on c.TABLE_SCHEMA=sc.TBCREATOR and c.TABLE_NAME=sc.TBNAME  and c.COLUMN_NAME=sc.NAME
        left join syscat.references r
            on c.TABLE_SCHEMA=r.TABSCHEMA and c.TABLE_NAME=r.TABNAME  and c.COLUMN_NAME=trim(r.FK_COLNAMES)
        left join SYSCAT.INDEXES si
            on c.TABLE_SCHEMA=si.TABSCHEMA and c.TABLE_NAME=si.TABNAME  and c.COLUMN_NAME=REPLACE(si.COLNAMES,'+','')
        where
            TABLE_SCHEMA = '${e}'
            and TABLE_NAME = '${t}'
        order by ORDINAL_POSITION;`}updateColumnSql(e){return new mn(e).genAlterSQL()}showAllForeignKeys(){return`SELECT 
        CONSTNAME "constraint_name",
        TABSCHEMA "table_schema",
        TABNAME "table_name",
        FK_COLNAMES "column_name",
    REFTABNAME "referenced_table",
    PK_COLNAMES "referenced_column"
     FROM syscat.references`}showForeignKeys(e,t){return`SELECT 
        FK_COLNAMES "column_name",
        CONSTNAME "constraint_name",
        REFTABNAME "referenced_table",
        PK_COLNAMES "referenced_column",
        UPDATERULE "updateRule",
        DELETERULE "deleteRule"
         FROM syscat.references WHERE 
        TABSCHEMA='${e}' and TABNAME='${t}'`}showIndex(e,t){return`SELECT 
        COLNAMES "column_name",
        INDNAME "index_name",
        UNIQUERULE='U' "isUnique"
         FROM SYSCAT.INDEXES WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}'`}showViews(e,t){return`select VIEWNAME "name",TEXT "source" from SYSCAT.VIEWS where VIEWSCHEMA = '${t}';`}showProcedures(e){return`select PROCNAME "routine_name",TEXT "source" from SYSCAT.procedures where PROCSCHEMA = '${e}' order by PROCNAME;`}showChecks(e,t){return`SELECT CONSTNAME "name",TEXT "clause" FROM SYSCAT.CHECKS WHERE TABNAME = '${t}' AND TABSCHEMA = '${e}';`}showTriggers(e,t){let n=`SELECT TRIGNAME "trigger_name",TEXT "source",TABNAME "table_name",TRIGEVENT "event" FROM syscat.triggers WHERE TABSCHEMA = '${e}'`;return t&&(n+=`AND TABNAME = '${t}'`),n}showFunctions(e){return`select FUNCNAME "routine_name",BODY "source" from SYSCAT.FUNCTIONS where FUNCSCHEMA = '${e}' order by FUNCNAME;`}dropIndex(e,t){return`DROP INDEX "${t}"`}tableTemplate(){return`CREATE TABLE table_name$1(  
    id int not NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    create_time DATE,
    update_time DATE,
    content VARCHAR(255)
);`}processList(){return`SELECT session_auth_id,
        application_handle,
        elapsed_time_sec,
        activity_state,
        rows_read,
        stmt_text info
 FROM sysibmadm.mon_current_sql
 ORDER BY elapsed_time_sec DESC`}}class _n extends Fe{tableTemplate(){return`CREATE TABLE table_name(  
    id int NOT NULL  COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) 
AGGREGATE KEY(id,create_time,name)
DISTRIBUTED BY HASH(id) BUCKETS 1
PROPERTIES (
    "replication_allocation" = "tag.location.default: 1"
);`}showColumns(e,t){return`SELECT 
        c.COLUMN_NAME name,
        COLUMN_TYPE type,
        COLUMN_COMMENT comment,COLUMN_KEY \`key\`,IS_NULLABLE nullable,
        CHARACTER_MAXIMUM_LENGTH maximum_length,
        COLUMN_DEFAULT defaultValue,
        INSTR(COLUMN_TYPE,'zerofill')>0 "zerofill",
        INSTR(COLUMN_TYPE,'unsigned')>0 "unsigned",
        EXTRA extra,
        COLLATION_NAME collation_name,
        CHARACTER_SET_NAME character_set_name 
        FROM information_schema.columns c
        WHERE c.table_schema = '${e}' AND c.table_name = '${t}' 
        ORDER BY c.ORDINAL_POSITION;`}}class dn extends se{showVersion(){return"SELECT SERVER_VERSION();"}createIndex(e){let t=`${e.type||"key"}`;return t.match(/BTREE/i)&&(t="key"),`ALTER TABLE ${e.table} ADD ${t} (\`${e.column||"$1"}\`)`}dropIndex(e,t){return`ALTER TABLE ${e} DROP INDEX \`${t}\``}showIndex(e,t){return`SELECT column_name "column_name",index_name "index_name",index_type "index_type",non_unique=0 "isUnique" FROM INFORMATION_SCHEMA.STATISTICS WHERE table_schema='${e}' and table_name='${t}';`}variableList(){return"show global VARIABLES"}statusList(){return"show global status"}processList(){return"show processlist"}addColumn(e,t){const n=t?` AFTER \`${t}\``:"";return`ALTER TABLE ${e} 
    ADD COLUMN $1 [type]$2 COMMENT '$3'${n};`}createUser(){return`CREATE USER '$1'@'%' IDENTIFIED BY 'password$2';
-- Grant select privilege to all databases;
GRANT SELECT ON *.* TO '$1'@'%' WITH GRANT OPTION;
-- Grant all privileges to all databases;
GRANT ALL PRIVILEGES ON *.* TO '$1'@'%' WITH GRANT OPTION;`}updateUser(e){return`update mysql.user set 
    password = PASSWORD("newPassword")
    where User = '${e}';
FLUSH PRIVILEGES;
-- since mysql version 5.7, password column need change to authentication_string=PASSWORD("newPassword")`}updateColumn(e,t){var a,r;const{nullable:n,extra:l}=t;return this.updateColumnSql({table:e,...t,isNotNull:n!="YES",isAutoIncrement:(r=(a=l==null?void 0:l.toLowerCase())==null?void 0:a.includes)==null?void 0:r.call(a,"auto_increment")})}updateColumnSql(e){const{table:t,name:n,columnName:l=n,type:a,unsigned:r,zerofill:o,useCurrentTimestamp:i,isNotNull:u,isAutoIncrement:O,comment:C,defaultValue:A,character_set_name:N,collation_name:S}=e,U=!qe(a)&&!a.match(/json/i);return new P(`ALTER TABLE \`${t}\``).append(`
	CHANGE \`${l}\` \`${n}\` ${a}`).if(r=="1","UNSIGNED").if(o=="1","ZEROFILL").if(i,"ON UPDATE CURRENT_TIMESTAMP").if(U&&N,`CHARACTER SET ${N}`).if(U&&S,`COLLATE ${S}`).if(u,"NOT NULL").if(O,"AUTO_INCREMENT").if(C,`COMMENT '${C}'`).if(G(A)&&!u,"DEFAULT NULL").if(!G(A),`DEFAULT ${A=="CURRENT_TIMESTAMP"?A:`${Z(A,a)}`}`).append(";").toString()}showCollations(){return null}showChecks(e,t){return`SELECT
        tc.CONSTRAINT_NAME "name",
        cc.CHECK_CLAUSE "clause"
    FROM
        information_schema.CHECK_CONSTRAINTS AS cc,
        information_schema.TABLE_CONSTRAINTS AS tc
    WHERE
        tc.CONSTRAINT_SCHEMA = '${e}'
        AND tc.TABLE_NAME = '${t}'
        AND tc.CONSTRAINT_TYPE = 'CHECK'
        AND tc.CONSTRAINT_SCHEMA = cc.CONSTRAINT_SCHEMA
        AND tc.CONSTRAINT_NAME = cc.CONSTRAINT_NAME;`}showUsers(){return"SELECT user user,host host FROM mysql.user;"}pingDataBase(e){return e?`use \`${e}\``:null}updateTable(e){const{table:t,newTableName:n,comment:l,newComment:a,collation:r,newCollation:o}=e;let i="";return a&&a!=l&&(i=`ALTER TABLE \`${t}\` COMMENT = '${a}';`),o&&o!=r&&(i+=`ALTER TABLE \`${t}\` collate = '${o}';`),n&&t!=n&&(i+=`ALTER TABLE \`${t}\` RENAME TO \`${n}\`;`),i}truncateDatabase(e){return`SELECT Concat('TRUNCATE TABLE \`',table_schema,'\`.\`',TABLE_NAME, '\`;') trun FROM INFORMATION_SCHEMA.TABLES where  table_schema ='${e}' and TABLE_TYPE<>'VIEW';`}createDatabase(e){return"CREATE DATABASE $1;"}showTableSource(e,t){return`SHOW CREATE TABLE \`${e}\`.\`${t}\`;`}showPartitions(e,t){return`SELECT 
PARTITION_NAME "name",PARTITION_METHOD "strategy",PARTITION_EXPRESSION "columnName",
PARTITION_DESCRIPTION "value",TABLE_ROWS "rows",DATA_LENGTH "length"
        FROM information_schema.partitions WHERE TABLE_SCHEMA='${e}' AND TABLE_NAME = '${t}' AND PARTITION_NAME IS NOT NULL`}showViewSource(e,t){return`SHOW CREATE VIEW  \`${e}\`.\`${t}\`;`}showProcedureSource(e,t){return`SHOW CREATE PROCEDURE \`${e}\`.\`${t}\`;`}showFunctionSource(e,t){return`SHOW CREATE FUNCTION \`${e}\`.\`${t}\`;`}showTriggerSource(e,t){return`SHOW CREATE TRIGGER \`${e}\`.\`${t}\`;`}showColumns(e,t){return`desc ${t}`}showForeignKeys(e,t){return`SELECT
        c.COLUMN_NAME column_name, ik.CONSTRAINT_NAME constraint_name,
        ik.REFERENCED_TABLE_NAME referenced_table, ik.REFERENCED_COLUMN_NAME referenced_column,
        UPDATE_RULE "updateRule",
        DELETE_RULE "deleteRule"
        FROM
        information_schema.columns c join information_schema.KEY_COLUMN_USAGE ik on c.table_schema = ik.TABLE_SCHEMA
        and c.table_name = ik.TABLE_NAME and c.COLUMN_NAME = ik.COLUMN_NAME
        JOIN information_schema.REFERENTIAL_CONSTRAINTS ir on ik.CONSTRAINT_NAME=ir.CONSTRAINT_NAME
        WHERE c.table_schema = '${e}' and c.table_name = '${t}' ORDER BY ik.CONSTRAINT_NAME;`}showProcedures(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='PROCEDURE' ORDER BY ROUTINE_NAME`}showFunctions(e){return`SELECT ROUTINE_NAME FROM information_schema.routines WHERE ROUTINE_SCHEMA = '${e}' and ROUTINE_TYPE='FUNCTION' ORDER BY ROUTINE_NAME`}showViews(e){return`SELECT TABLE_NAME name,SECURITY_TYPE "view_group" FROM information_schema.VIEWS  WHERE TABLE_SCHEMA = '${e}' ORDER BY TABLE_NAME`}buildPageSql(e,t,n){return`SELECT * FROM ${t} LIMIT ${n};`}showTables(e){return`show ${e}.tables;`}showDatabases(){return"show databases"}showSchemas(){return this.showDatabases()}tableTemplate(e){return`CREATE TABLE table_name$1(  
    create_time timestamp,
    name$2 NCHAR(255)
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM $2`}procedureTemplate(){return`CREATE PROCEDURE proc_name$1()
BEGIN
$2
END;`}functionTemplate(){return`CREATE FUNCTION fun_name$1() RETURNS int$2
READS SQL DATA
BEGIN
    $3
    return 0;
END;`}}class An extends Je{showVersion(){return""}}class Nn extends Re{showDatabases(){return"SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME;"}showTables(e,t=e){return`SELECT table_name,ddl source FROM ${t}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${t}' and TABLE_TYPE<>'VIEW' ORDER BY TABLE_NAME;`}showTableSource(e,t){return`SELECT ddl source FROM ${e}.INFORMATION_SCHEMA.TABLES  WHERE TABLE_SCHEMA = '${e}' and table_name='${t}' ORDER BY TABLE_NAME;`}showColumns(e,t){return`SELECT COLUMN_NAME name,DATA_TYPE type, IS_NULLABLE nullable 
            FROM ${e}.INFORMATION_SCHEMA.COLUMNS WHERE table_schema = '${e}' AND table_name = '${t}' ORDER BY ORDINAL_POSITION;`}showViews(e,t=e){return`SELECT TABLE_NAME,view_definition source FROM ${t}.INFORMATION_SCHEMA.VIEWS  WHERE TABLE_SCHEMA = '${t}' ORDER BY TABLE_NAME`}tableTemplate(e){return`CREATE TABLE ${e}.table_name$1(  
    id INT64,
    create_time DATE,
    update_time DATE,
    content STRING
);`}viewTemplate(){return`CREATE VIEW view_name$1
AS
SELECT * FROM `}}function Rn(c){switch(c||(c=R.MYSQL),c){case null:case R.MYSQL:return new Fe;case R.MARIA_DB:return new nn;case R.DORIS:return new _n;case R.SQLServer:return new ln;case R.libSQL:case R.SQLITE:return new Xe;case R.DUCK_DB:return new En;case R.REDSHIFT:return new sn;case R.SNOWFLAKE:return new on;case R.PG:return new Qe;case R.CLICKHOUSE:return new en;case R.DM:return new tn;case R.ORACLE:return new je;case R.CASSANDRA:return new un;case R.BIG_QUERY:return new Nn;case R.PRESTO:case R.TRINO:return new cn;case R.HIVE:return new Je;case R.ATHENA:return new An;case R.DB2:return new Tn;case R.MONGO_DB:return new an;case R.NEO4J:return new rn;case R.TDengine:return new dn}return new Re}class ue{constructor(e){this.meta=e,this.dialect=Rn(e.dbType),this.wrappedTable=ce(this.meta.table,this.meta.dbType,ct.Always)}updateTable(e){return this.dialect.updateTable(e)}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","TEXT","JSON","BLOB"]}strategys(){return["RESTRICT","CASCADE","SET NULL","SET DEFAULT","NO ACTION"]}newColumn(e){const{name:t,type:n,isNotNull:l}=e,a=l?" NOT NULL":"";return`ALTER TABLE ${this.wrappedTable} ADD COLUMN ${ce(t,this.meta.dbType)} ${n}${a}`}updateColumn(e){return this.dialect.updateColumnSql({...e,table:this.meta.table,schema:this.meta.schema})}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP COLUMN ${ce(e,this.meta.dbType)}`}formatIndexType(e){return e.index_type}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"}]}dropIndex(e){return this.dialect.dropIndex(this.wrappedTable,e)}showChecks(){return this.dialect.showChecks(this.meta.schema,this.meta.table)}showForeignKeys(){return this.dialect.showForeignKeys(this.meta.schema,this.meta.table)}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`;return new P(`ALTER TABLE "${this.meta.table}"`).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY ("${t}") REFERENCES "${l}"("${a}")${i}${u};`).toString()}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT ${e};`}newCheck(e){return`ALTER TABLE ${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE ${this.wrappedTable} DROP CONSTRAINT ${e};`}splitColumn(e,t='"'){return e.map(n=>t+n+t).join(",")}}class Cn extends ue{columnTypes(){return["Int32","String","Float32","hr","Date","DateTime","hr","BOOLEAN","UUID",{label:"Array",value:"Array(String)"},"hr","JSON",{label:"Tuple",value:"Tuple(String)"},{label:"Map",value:"Map(String,String)"}]}newColumn(e){const{name:t,type:n,defaultValue:l,comment:a}=e;return new P(`ALTER TABLE ${this.wrappedTable} ADD COLUMN "${t}" ${n}`).if(!G(l),`DEFAULT ${Z(l,n)}`).if(a,`COMMENT '${a}'`).toString()}newIndex(e){const{columns:t}=e;return`ALTER TABLE "${this.meta.table}" ADD INDEX ${t.join("")}_${new Date().getTime()}_index expression TYPE type GRANULARITY value AFTER ${this.splitColumn(t)}`}showForeignKeys(){return null}showChecks(){return null}}class He extends ue{newColumn(e){const{name:t,type:n,defaultValue:l,isNotNull:a}=e;return new P(`ALTER TABLE "${this.meta.schema}".${ce(this.meta.table,this.meta.dbType)} ADD ${ce(t,this.meta.dbType)} ${n}`).if(a,"NOT NULL").if(!G(l),`DEFAULT ${Z(l,n)}`).toString()}dropColumn(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP COLUMN ${ce(e,this.meta.dbType)}`}newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${this.meta.schema}"."${t}"(${this.splitColumn(n)});`}newCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} ADD CHECK (${e});`}dropCheck(e){return`ALTER TABLE "${this.meta.schema}".${this.wrappedTable} DROP CONSTRAINT ${e};`}dropForeignKey(e){return`ALTER TABLE "${this.meta.schema}"."${this.meta.table}" DROP CONSTRAINT ${e};`}newForeignKey(e){return super.newForeignKey(e).replace(`"${this.meta.table}"`,`"${this.meta.schema}"."${this.meta.table}"`)}}class pn extends ue{indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"FULLTEXT",value:"FULLTEXT"}]}columnTypes(){return["INT",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"hr","DATETIME","TIMESTAMP","DATE","hr","BIT","FLOAT","DOUBLE",{label:"DECIMAL",value:"DECIMAL(10,2)"},"BIGINT","hr","TEXT","JSON","BLOB","BINARY","hr",{label:"ENUM",value:"ENUM('item')"},{label:"SET",value:"SET('item')"}]}newColumn(e){const{name:t,type:n,comment:l,defaultValue:a,isNotNull:r,unsigned:o,zerofill:i}=e;return console.log(e),new P(`ALTER TABLE ${this.wrappedTable} ADD COLUMN \`${t}\` ${n}`).if(o&&o!=0,"UNSIGNED").if(i,"ZEROFILL").if(r,"NOT NULL").if(l,`COMMENT '${l}'`).if(!G(a),`DEFAULT ${Z(a,n)}`).toString()}formatIndexType(e){const t=e.index_type.toUpperCase();return t=="BTREE"?e.index_name=="PRIMARY"?"PRIMARY":Ye(e.isUnique)?"UNIQUE":"KEY":t}newIndex(e){const{type:t="key",columns:n}=e;return`ALTER TABLE \`${this.meta.table}\` ADD ${t} (${this.splitColumn(n,"`")})`}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`;return new P(`ALTER TABLE \`${this.meta.table}\``).if(n,()=>`ADD CONSTRAINT ${n}`).if(!n,"ADD").append(`FOREIGN KEY (\`${t}\`) REFERENCES \`${l}\`(\`${a}\`)${i}${u};`).toString()}dropForeignKey(e){return`ALTER TABLE \`${this.meta.table}\` DROP FOREIGN KEY ${e};`}}class bn extends ue{newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=`${t}_${n.join("_")}_${new Date().getTime()}`;return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${a} ON "${t}"(${this.splitColumn(n)})`}newColumn(e){const{name:t,type:n,isNotNull:l,defaultValue:a,comment:r}=e;return new P(`ALTER TABLE ${ce(this.meta.table,this.meta.dbType)} ADD ${t} ${n}`).if(!G(a),`DEFAULT ${Z(a,n)}`).if(l,"NOT NULL").if(r,`;
COMMENT ON COLUMN ${this.wrappedTable}."${t.toUpperCase()}" is '${r}';`).toString()}newForeignKey(e){const{column:t,foreignKeyName:n,refTable:l,refColumn:a,onUpdate:r,onDelete:o}=e,i=r=="NO ACTION"?"":` ON UPDATE ${r}`,u=o=="NO ACTION"?"":` ON DELETE ${o}`,O=n||`${t}_${l}_${a}_fk_${Math.floor(Math.random()*30)}`;return`ALTER TABLE "${this.meta.table}" ADD CONSTRAINT ${O} FOREIGN KEY ("${t}") REFERENCES ${l}(${a})${i}${u};`}showForeignKeys(){var t;let{schema:e}=this.meta;return(e==null?void 0:e.toLowerCase())==((t=this.meta.user)==null?void 0:t.toLowerCase())&&(e=void 0),this.dialect.showForeignKeys(e,this.meta.table)}}class On extends ue{newColumn(e){const{name:t,type:n,comment:l,defaultValue:a,isNotNull:r}=e,o=this.wrappedTable;return new P(`ALTER TABLE ${o} ADD COLUMN "${t}" ${n}`).if(r,"NOT NULL").if(!G(a),`DEFAULT ${Z(a,n)}`).append(";").if(l,`
COMMENT ON COLUMN ${o}."${t}" is '${l}';`).toString()}columnTypes(){return["INTEGER",{label:"VARCHAR",value:"VARCHAR(255)"},{label:"CHAR",value:"CHAR(50)"},"TIMESTAMP","DATE","BOOLEAN","FLOAT","TEXT","JSON","BLOB"]}indexTypes(){return[{label:"INDEX",value:"INDEX"},{label:"UNIQUE",value:"UNIQUE"},{label:"HASH",value:"HASH"}]}newIndex(e){const{table:t=this.meta.table,columns:n,type:l}=e,a=l=="HASH"?"hash":"btree";return`CREATE ${l=="UNIQUE"?"UNIQUE":""} INDEX ${n.join("_")}_${new Date().getTime()}_index ON "${t}" USING ${a} (${this.splitColumn(n)});`}}class Ln extends ue{newIndex(e){throw new Error("Method not implemented.")}dropForeignKey(e){return`ALTER TABLE "${this.meta.table}" DROP CONSTRAINT "${e}";`}showForeignKeys(){return`select
       rco.constraint_name "constraint_name",
       rco.UPDATE_RULE "updateRule",
       rco.DELETE_RULE "deleteRule",
       pk_tco.table_name "referenced_table"
from information_schema.referential_constraints rco
    join information_schema.table_constraints fk_tco on fk_tco.constraint_name = rco.constraint_name and fk_tco.constraint_schema = rco.constraint_schema
    join information_schema.table_constraints pk_tco on pk_tco.constraint_name = rco.unique_constraint_name and pk_tco.constraint_schema = rco.unique_constraint_schema
    WHERE fk_tco.TABLE_SCHEMA='${this.meta.schema}' and fk_tco.table_name='${this.meta.table}' 
    ORDER BY rco.CREATED`}}class Sn extends ue{newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT "from" column_name, "table" referenced_table, "to" referenced_column,
        on_update, on_delete 
        FROM pragma_foreign_key_list('${this.meta.table}');`}showChecks(){return null}}class $n extends ue{newColumn(e){const{type:t,defaultValue:n}=e;return new P(super.newColumn(e)).if(!G(n),`DEFAULT ${Z(n,t)}`).toString()}newIndex(e){const{table:t=this.meta.table,columns:n}=e;return`CREATE INDEX ${`${t}_${n.join("_")}_${new Date().getTime()}`} ON "${t}"(${this.splitColumn(n)});`}showForeignKeys(){return`SELECT constraint_column_names "column_name" FROM duckdb_constraints()
        WHERE constraint_type='FOREIGN KEY' and database_name not in ('system','temp') and schema_name='${this.meta.schema}' and table_name='${this.meta.table}'`}showChecks(){return null}}class Mn extends He{}class hn extends He{columnTypes(){return["INTEGER","TEXT","hr","DATE","TIMESTAMP","hr","BOOLEAN","FLOAT","DOUBLE","hr","BLOB"]}dropColumn(e){return`ALTER TABLE ${this.wrappedTable} DROP ${ce(e,this.meta.dbType)}`}}function In(c){switch(c.dbType){case R.PG:case R.REDSHIFT:return new On(c);case R.DM:case R.ORACLE:return new bn(c);case R.DB2:return new Mn(c);case R.CASSANDRA:return new hn(c);case R.SQLServer:return new He(c);case R.SNOWFLAKE:return new Ln(c);case R.CLICKHOUSE:return new Cn(c);case R.DUCK_DB:return new $n(c);case R.SQLITE:return new Sn(c);case R.MYSQL:case R.MARIA_DB:default:return new pn(c)}}const fn={class:"mt-2 design-container"},wn={id:"infoPanel"},Dn={class:"tab"},gn=["onClick"],Un={class:"design-data-container"},yn=me({__name:"design",setup(c){const e=_e(),t=k(()=>e.activePanel),n=k(()=>[{id:"ddl",i18n:"design.ddl",icon:"codicon-edit green"},{id:"column",i18n:"design.column",icon:"codicon-symbol-field blue"},{id:"foreignKey",i18n:"design.foreignKey",icon:"codicon-symbol-class yellow",hidden:k(()=>!e.supportForeignKey)},{id:"index",i18n:"design.index",icon:"codicon-github-action purple",hidden:k(()=>!e.supportIndex)},{id:"check",i18n:"design.check",icon:"codicon-tools orange",hidden:k(()=>!e.supportCheck)}].filter(a=>{var r;return((r=a==null?void 0:a.hidden)==null?void 0:r.value)!=!0}));Te(()=>{w.on("dbType",a=>{e.updateDBType(a)}).on("designMeta",a=>{e.dialect=In(a),e.updateFullInfo(a),w.emitImmediately("designMetaNext",a)}).on("success",()=>{We(T("design.updateSuccess"))}).on("error",a=>{Se(a)}).on("refresh_design",()=>{l()}),l(),ut(55,["tableTab","infoPanel"],a=>{e.remainHeight=a})});const l=()=>{w.emit("init",{type:"design"})};return(a,r)=>(d(),f("div",fn,[$("div",wn,[s(Kt),$("ul",Dn,[(d(!0),f(X,null,ne(n.value,(o,i)=>(d(),f("li",{key:i,class:xe(["tab__item",{"tab__item--active":t.value==o.id}]),onClick:u=>E(e).activePanel=o.id},[o.icon?(d(),f("i",{key:0,type:"icon",class:xe(o.icon),style:{position:"relative",top:"3px"}},null,2)):I("",!0),v(" "+y(E(T)(o.i18n)),1)],10,gn))),128))])]),$("div",Un,[Y(s(yt,null,null,512),[[le,t.value=="column"]]),Y(s(St,null,null,512),[[le,t.value=="foreignKey"]]),Y(s(At,null,null,512),[[le,t.value=="index"]]),Y(s(Zt,null,null,512),[[le,t.value=="check"]]),Y(s(Rt,null,null,512),[[le,t.value=="ddl"]])])]))}}),da=Ve(yn,[["__scopeId","data-v-0402bbcb"]]);export{da as default};
