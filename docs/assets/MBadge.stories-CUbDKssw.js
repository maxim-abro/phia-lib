import{_ as n}from"./index-DO-0LRNB.js";import"./vue.esm-bundler-B6uAbVLO.js";const c={title:"Example/MBadge",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","warning","danger","info","success"]},value:{control:"text"}}},o=s=>({components:{MBadge:n},setup(){return{args:s}},template:`
    <MBadge v-bind="args">badge</MBadge>
  `}),e=o.bind({});e.args={type:"primary"};var a,r,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    MBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MBadge v-bind="args">badge</MBadge>
  \`
})`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,c as default};
