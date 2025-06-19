import{_ as a}from"./index-CbzKJAGk.js";import{r as p}from"./vue.esm-bundler-B6uAbVLO.js";import"./index-BoN7hwA7.js";const d={title:"Example/MInput",component:a,tags:["autodocs"],argTypes:{modelValue:{control:{type:"text"}},placeholder:{control:{type:"text"}},maxLength:{control:{type:"number"}},clearable:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},autocomplete:{control:{type:"text"}}}},s=r=>({components:{MInput:a},setup(){return{value:p(""),args:r}},template:`
    <div>
      <MInput
        v-model="value"
        v-bind="args"
      />
      Значение инпута: {{ value }}
    </div>
  `}),e=s.bind({});var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    MInput
  },
  setup() {
    const value = ref('');
    return {
      value,
      args
    };
  },
  template: \`
    <div>
      <MInput
        v-model="value"
        v-bind="args"
      />
      Значение инпута: {{ value }}
    </div>
  \`
})`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const v=["Props"];export{e as Props,v as __namedExportsOrder,d as default};
