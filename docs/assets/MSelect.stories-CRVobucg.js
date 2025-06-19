import{_ as l}from"./index-BhNLdRBw.js";import{r as u}from"./vue.esm-bundler-B6uAbVLO.js";import"./index-BoN7hwA7.js";const p={title:"Example/MSelect",component:l,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},args:{disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},n=o=>({components:{MSelect:l},setup(){const r=u(null);return{args:o,val:r,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},template:`
    <MSelect v-bind="args" v-model="val" :values="values"/>
    Выбранное значение: {{ val }}
  `}),e=n.bind({});e.args={disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]};var s,t,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    MSelect
  },
  setup() {
    const val = ref(null);
    const values = [{
      title: 'Moscow',
      value: 'msk'
    }, {
      title: 'Saints Petersburg',
      value: 'spb'
    }];
    return {
      args,
      val,
      values
    };
  },
  template: \`
    <MSelect v-bind="args" v-model="val" :values="values"/>
    Выбранное значение: {{ val }}
  \`
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const d=["Props"];export{e as Props,d as __namedExportsOrder,p as default};
