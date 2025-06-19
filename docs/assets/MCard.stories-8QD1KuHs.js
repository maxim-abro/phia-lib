import{_ as a}from"./index-ZXZLjMr2.js";import"./vue.esm-bundler-B6uAbVLO.js";const m={title:"Example/MCard",component:a,tags:["autodocs"],argTypes:{header:{control:"text"},footer:{control:"text"}},args:{header:"header",footer:"footer"}},s=n=>({component:{MCard:a},setup(){return{args:n}},template:`
    <MCard v-bind="args">
      <template #header>Header slot</template>
      body
      <template #footer>Footer slot</template>
    </MCard>
  `}),e=s.bind({});e.args={header:"header",footer:"footer"};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  component: {
    MCard
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MCard v-bind="args">
      <template #header>Header slot</template>
      body
      <template #footer>Footer slot</template>
    </MCard>
  \`
})`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const l=["Props"];export{e as Props,l as __namedExportsOrder,m as default};
