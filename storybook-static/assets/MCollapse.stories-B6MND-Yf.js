import{d as V,k as n,l as x,r as y,o as r,e as T,j as b,f as p,m as q,p as k,n as B,q as E,g as m,T as P}from"./vue.esm-bundler-DHzfqQKc.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N={class:"m-collapse"},w={name:"MCollapse"},c=V({...w,props:{toTeleport:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{expose:v,emit:f}){const C=t,_=f,e=n(!1),s=n(!1);x(()=>{e.value=C.modelValue,s.value=!0});const l=()=>{e.value=!e.value,_("update:modelValue",e.value)};v({toggleCollapse:l});const M=y({toggleCollapse:l,isExpand:e});return(a,z)=>(r(),T("div",N,[b("div",{class:B({"m-activator":e.value})},[p(a.$slots,"default",q(k(M)),void 0,!0)],2),s.value?(r(),E(P,{key:0,disabled:!a.toTeleport,to:a.toTeleport},[e.value?p(a.$slots,"expand",{key:0},void 0,!0):m("",!0)],8,["disabled","to"])):m("",!0)]))}}),g=h(c,[["__scopeId","data-v-feaba461"]]);c.__docgenInfo={exportName:"default",displayName:"MCollapse",description:"",tags:{},expose:[{name:"toggleCollapse"}],props:[{name:"toTeleport",description:"Телепорт скрываемой части",required:!1,type:{name:"union",elements:[{name:"HTMLElement"},{name:"string"}]}},{name:"modelValue",description:"Значение открытия скрываемой части",required:!1,type:{name:"boolean"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],slots:[{name:"default",scoped:!0,bindings:[],description:"Триггер"},{name:"expand",description:"Скрываемая часть"}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MCollapse/MCollapse.vue"]};const S={title:"Example/MCollapse",component:g,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},toTeleport:{control:"text"}},args:{modelValue:!1}},L=t=>({components:{MCollapse:g},setup(){return{args:t}},template:`
    <MCollapse>
      <template #default="{ toggleCollapse }">
        <div @click="toggleCollapse">trigger</div>
      </template>
      <template #expand>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda at,
        consequatur corporis delectus dignissimos doloremque fuga inventore magnam nostrum odit
        optio tenetur. Commodi doloremque ipsa nostrum possimus vel.
      </template>
    </MCollapse>
  `}),o=L.bind({});o.args={modelValue:!1};var i,d,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    MCollapse
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MCollapse>
      <template #default="{ toggleCollapse }">
        <div @click="toggleCollapse">trigger</div>
      </template>
      <template #expand>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda at,
        consequatur corporis delectus dignissimos doloremque fuga inventore magnam nostrum odit
        optio tenetur. Commodi doloremque ipsa nostrum possimus vel.
      </template>
    </MCollapse>
  \`
})`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const $=["Primary"];export{o as Primary,$ as __namedExportsOrder,S as default};
