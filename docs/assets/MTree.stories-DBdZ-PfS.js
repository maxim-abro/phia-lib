import{_ as t}from"./index-C-lzpKJP.js";import"./vue.esm-bundler-B6uAbVLO.js";import"./index-BoN7hwA7.js";const p={title:"Example/MTree",component:t,tags:["autodocs"],argTypes:{data:"array"},args:{data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]}]}},l=s=>({components:{MTree:t},setup(){return{args:s}},template:`
    <MTree
      v-bind="args"
    />
  `}),e=l.bind({});e.args={data:[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]}]};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const d=["Primary"];export{e as Primary,d as __namedExportsOrder,p as default};
