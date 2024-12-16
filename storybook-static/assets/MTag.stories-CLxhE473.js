import{d as u,b as i,o as c,e as m,f,n as g}from"./vue.esm-bundler-Key2Y4ML.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={name:"MTag"},r=u({...T,props:{type:{default:"default"},size:{default:"default"},closable:{type:Boolean},round:{type:Boolean}},setup(a){const p=a,d=i(()=>`m-tag__${p.type}`);return(s,M)=>(c(),m("span",{class:g(["m-tag",[s.size,d.value,{round:s.round}]])},[f(s.$slots,"default",{},void 0,!0)],2))}}),l=y(r,[["__scopeId","data-v-d2d9e1a6"]]);r.__docgenInfo={exportName:"default",displayName:"MTag",description:"",tags:{},props:[{name:"type",description:"Цвет тега",required:!1,type:{name:"TTagType"},defaultValue:{func:!1,value:"'default'"}},{name:"size",description:"Размер тега",required:!1,type:{name:"TTagSize"},defaultValue:{func:!1,value:"'default'"}},{name:"closable",description:"активность тега",required:!1,type:{name:"boolean"}},{name:"round",description:"Округлые края",required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Стандартный слот"}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MTag/index.vue"]};const z={title:"Example/MTag",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info","default"]},size:{control:"select",options:["large","default","small"]}},args:{size:"default",type:"primary"}},_=a=>({components:{MTag:l},setup(){return{args:a}},template:`
    <MTag
      v-bind="args"
    >
      Tag
    </MTag>
  `}),e=_.bind({});e.args={size:"default",type:"primary",round:!1};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    MTag
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MTag
      v-bind="args"
    >
      Tag
    </MTag>
  \`
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const B=["Primary"];export{e as Primary,B as __namedExportsOrder,z as default};
