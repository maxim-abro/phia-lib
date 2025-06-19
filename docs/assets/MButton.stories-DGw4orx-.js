import{_ as o}from"./index-DQSE3aj8.js";import"./vue.esm-bundler-B6uAbVLO.js";const m={title:"Example/MButton",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info","default"]},size:{control:"select",options:["large","default","small"]}},args:{size:"default",type:"primary"}},s=a=>({components:{MButton:o},setup(){return{args:a}},template:`
    <MButton
      v-bind="args"
    >
      Button
    </MButton>`}),t=s.bind({});t.args={size:"default",type:"primary",round:!1};var n,e,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
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
})`,...(r=(e=t.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const c=["Primary"];export{t as Primary,c as __namedExportsOrder,m as default};
