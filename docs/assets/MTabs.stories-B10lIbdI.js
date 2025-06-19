import{a as i,b as r}from"./index-Br3hz_b1.js";import"./index-DQSE3aj8.js";import"./index-CcPgFmvA.js";import"./index-CbzKJAGk.js";import"./index-DO-0LRNB.js";import"./index-EU3YYGG5.js";import"./MDropdownMenuItem-DBOzWZ6W.js";import"./index-ZXZLjMr2.js";import"./index-BF-XIehj.js";import"./index-BhNLdRBw.js";import"./index-DK9nT5OE.js";import"./index-C-lzpKJP.js";import"./index-BoN7hwA7.js";import"./index-BuCvqaid.js";import{r as s}from"./vue.esm-bundler-B6uAbVLO.js";const O={title:"Example/MTabs",tags:["autodocs"],component:i,argTypes:{modelValue:{control:{type:"number"}}}},c=o=>({components:{MTabs:i,MTab:r},setup(){return{activeTab:s(0),args:o}},template:`
    <MTabs v-model="activeTab">
      <MTab
        title="Главная"
        :active-index="activeTab"
        :index="0"
      >
        Главная
      </MTab>
      <MTab
        title="Категории"
        :active-index="activeTab"
        :index="1"
      >
        Категории
      </MTab>
      <MTab
        title="Контакты"
        :active-index="activeTab"
        :index="2"
      >
        Контакты
      </MTab>
    </MTabs>
  `}),a=c.bind({});var t,e,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    MTabs,
    MTab
  },
  setup() {
    const activeTab = ref(0);
    return {
      activeTab,
      args
    };
  },
  template: \`
    <MTabs v-model="activeTab">
      <MTab
        title="Главная"
        :active-index="activeTab"
        :index="0"
      >
        Главная
      </MTab>
      <MTab
        title="Категории"
        :active-index="activeTab"
        :index="1"
      >
        Категории
      </MTab>
      <MTab
        title="Контакты"
        :active-index="activeTab"
        :index="2"
      >
        Контакты
      </MTab>
    </MTabs>
  \`
})`,...(n=(e=a.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const S=["Props"];export{a as Props,S as __namedExportsOrder,O as default};
