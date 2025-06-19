import{_ as a}from"./index-Br3hz_b1.js";import{r as n}from"./vue.esm-bundler-B6uAbVLO.js";import"./index-DQSE3aj8.js";import"./index-CcPgFmvA.js";import"./index-CbzKJAGk.js";import"./index-BoN7hwA7.js";import"./index-DO-0LRNB.js";import"./index-EU3YYGG5.js";import"./MDropdownMenuItem-DBOzWZ6W.js";import"./index-ZXZLjMr2.js";import"./index-BF-XIehj.js";import"./index-BhNLdRBw.js";import"./index-DK9nT5OE.js";import"./index-C-lzpKJP.js";import"./index-BuCvqaid.js";const w={title:"Example/MDataTransfer",component:a,tags:["autodocs"],argTypes:{items:{control:{type:"multi-select",defaultValue:[{title:"Moscow",value:"moscow_0"},{title:"Pyatigorsk",value:"ptg"},{title:"Kislovodsk",value:"kvg"}]},leftButtonText:{control:"text"},rightButtonText:{control:"text"},filterable:{control:"boolean"},leftTitle:{control:"text"},rightTitle:{control:"text"},itemValue:{control:"text"},itemTitle:{control:"text"}}},args:{items:[{title:"Moscow",value:"moscow_0"},{title:"Pyatigorsk",value:"ptg"},{title:"Kislovodsk",value:"kvg"}]}},i=s=>({components:{MDataTransfer:a},setup(){const l=n([]);return{args:s,vals:l}},template:`
    <MDataTransfer v-bind="args" v-model="vals"/>
    Выбранные значения: {{ vals }}
  `}),t=i.bind({});var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    MDataTransfer
  },
  setup() {
    const vals = ref([]);
    return {
      args,
      vals
    };
  },
  template: \`
    <MDataTransfer v-bind="args" v-model="vals"/>
    Выбранные значения: {{ vals }}
  \`
})`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["Props"];export{t as Props,y as __namedExportsOrder,w as default};
