import{_ as t}from"./index-DK9nT5OE.js";import"./vue.esm-bundler-B6uAbVLO.js";const c={title:"Example/MTag",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info","default"]},size:{control:"select",options:["large","default","small"]}},args:{size:"default",type:"primary"}},o=s=>({components:{MTag:t},setup(){return{args:s}},template:`
    <MTag
      v-bind="args"
    >
      Tag
    </MTag>
  `}),a=o.bind({});a.args={size:"default",type:"primary",round:!1};var e,r,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["Primary"];export{a as Primary,g as __namedExportsOrder,c as default};
