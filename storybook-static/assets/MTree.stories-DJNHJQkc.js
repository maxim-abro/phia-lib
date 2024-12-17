import{d as M,k as C,x,y as w,o as l,e as c,u as L,F as N,j as B,t as q,z as E,g as F}from"./vue.esm-bundler-Key2Y4ML.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=["onClick"],P={key:0,class:"child"},S={name:"MTree"},g=M({...S,props:{data:{},load:{type:Boolean},showCheckbox:{type:Boolean}},emits:["node-click"],setup(s,{emit:f}){const k=s,d=f,o=C([]);function y(a,t,r){if(!a){T(t);return}o.value[r].collapse=!o.value[r].collapse}function T(a){d("node-click",a)}return x(()=>{o.value=k.data.map(a=>({...a,collapse:!1}))}),(a,t)=>{const r=w("MTree");return l(!0),c(N,null,L(o.value,(e,i)=>{var p;return l(),c("div",{key:i},[B("div",{class:"tree-item",onClick:m=>{var u;return y((u=e.children)==null?void 0:u.length,e.id||e.label,i)}},q(e.label),9,I),(p=e.children)!=null&&p.length&&e.collapse?(l(),c("div",P,[E(r,{data:e.children,onNodeClick:t[0]||(t[0]=m=>d("node-click",m))},null,8,["data"])])):F("",!0)])}),128)}}}),b=V(g,[["__scopeId","data-v-4ad9996d"]]);g.__docgenInfo={exportName:"default",displayName:"MTree",description:"",tags:{},props:[{name:"data",description:"Дата",required:!0,type:{name:"Array",elements:[{name:"MTree"}]}},{name:"load",required:!1,type:{name:"boolean"}},{name:"showCheckbox",required:!1,type:{name:"boolean"}}],events:[{name:"node-click",type:{names:["union"],elements:[{name:"number"},{name:"string"}]}}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MTree/index.vue"]};const D={title:"Example/MTree",component:b,tags:["autodocs"],argTypes:{data:"array"},args:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]}]}},j=s=>({components:{MTree:b},setup(){return{args:s}},template:`
    <MTree
      v-bind="args"
    />
  `}),n=j.bind({});n.args={data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]}]};var h,v,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    MTree
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MTree
      v-bind="args"
    />
  \`
})`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const O=["Primary"];export{n as Primary,O as __namedExportsOrder,D as default};
