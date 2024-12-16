import{d as p,b as u,o as m,e as c,f,n as y}from"./vue.esm-bundler-Key2Y4ML.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b=["disabled"],r=p({__name:"MButton",props:{size:{default:"default"},type:{default:"default"},round:{type:Boolean},link:{},loading:{type:Boolean},disabled:{type:Boolean},icon:{type:Boolean},plain:{type:Boolean}},setup(n){const i=n,d=u(()=>`m-button__${i.type}`);return(e,_)=>(m(),c("button",{class:y(["m-button",[e.size,d.value,{round:e.round,"is-plain":e.plain,disabled:e.disabled}]]),type:"button",disabled:e.disabled},[f(e.$slots,"default",{},void 0,!0)],10,b))}}),l=B(r,[["__scopeId","data-v-f765b75f"]]);r.__docgenInfo={exportName:"default",displayName:"MButton",description:"",tags:{},props:[{name:"size",description:"Размер кнопки",required:!1,type:{name:"IBtnSize"},defaultValue:{func:!1,value:"'default'"}},{name:"type",description:"Цвет кнопки",required:!1,type:{name:"IBtnType"},defaultValue:{func:!1,value:"'default'"}},{name:"round",description:"Округлые края",required:!1,type:{name:"boolean"}},{name:"link",required:!1,type:{name:"string"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"disabled",description:"Кнопка не активная",required:!1,type:{name:"boolean"}},{name:"icon",description:"иконка",required:!1,type:{name:"boolean"}},{name:"plain",description:"Вид кнопки",required:!1,type:{name:"boolean"}}],slots:[{name:"default",description:"Стандартный слот"}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MButton/MButton.vue"]};const v={title:"Example/MButton",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info","default"]},size:{control:"select",options:["large","default","small"]}},args:{size:"default",type:"primary"}},g=n=>({components:{MButton:l},setup(){return{args:n}},template:`
    <MButton
      v-bind="args"
    >
      Button
    </MButton>`}),t=g.bind({});t.args={size:"default",type:"primary",round:!1};var a,o,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    MButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MButton
      v-bind="args"
    >
      Button
    </MButton>\`
})`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const z=["Primary"];export{t as Primary,z as __namedExportsOrder,v as default};
