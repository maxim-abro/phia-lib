import{_ as o}from"./index-EU3YYGG5.js";import{r as s}from"./vue.esm-bundler-B6uAbVLO.js";import"./index-BoN7hwA7.js";const d={title:"Example/MInputNumber",component:o,tags:["autodocs"],argTypes:{steps:{control:{type:"number"}},min:{control:{type:"number"}},max:{control:{type:"number"}},disabled:{control:{type:"boolean"}},modelValue:{control:{type:"number"}}}},m=a=>({components:{MInputNumber:o},setup(){return{value:s(0),args:a}},template:`
    <div>
      <MInputNumber
        v-model="value"
        v-bind="args"
      />
      Значение инпута: {{ value }}
    </div>
  `}),e=m.bind({});var n,r,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    MInputNumber
  },
  setup() {
    const value = ref(0);
    return {
      value,
      args
    };
  },
  template: \`
    <div>
      <MInputNumber
        v-model="value"
        v-bind="args"
      />
      Значение инпута: {{ value }}
    </div>
  \`
})`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const i=["Props"];export{e as Props,i as __namedExportsOrder,d as default};
