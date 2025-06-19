import{_ as r}from"./index-BuCvqaid.js";import{r as l}from"./vue.esm-bundler-B6uAbVLO.js";import"./index-BhNLdRBw.js";import"./index-BoN7hwA7.js";const u={title:"Example/MTimeSelect",component:r,tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"}},clearable:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},start:{control:{type:"text"}},end:{control:{type:"text"}},step:{control:{type:"text"}},modelValue:{control:{type:"text"}}}},s=a=>({components:{MTimeSelect:r},setup(){return{value:l(null),args:a}},template:`
    <div>
      <MTimeSelect
        v-model="value"
        v-bind="args"
      />
      Значение селекта: {{ value }}
    </div>
  `}),e=s.bind({});var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    MTimeSelect
  },
  setup() {
    const value = ref(null);
    return {
      value,
      args
    };
  },
  template: \`
    <div>
      <MTimeSelect
        v-model="value"
        v-bind="args"
      />
      Значение селекта: {{ value }}
    </div>
  \`
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const v=["Props"];export{e as Props,v as __namedExportsOrder,u as default};
