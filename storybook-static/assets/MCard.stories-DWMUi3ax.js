import{d as f,o,e as t,f as s,g as a,j as u,t as n}from"./vue.esm-bundler-Key2Y4ML.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h={class:"m-card"},g={key:0,class:"m-card__header"},y={key:0},C={class:"m-card__body"},M={key:1,class:"m-card__footer"},v={key:0},b={name:"MCard"},c=f({...b,props:{header:{},footer:{}},setup(d){return(e,$)=>(o(),t("div",h,[e.$slots.header||e.header?(o(),t("div",g,[s(e.$slots,"header",{},()=>[e.header?(o(),t("span",y,n(e.header),1)):a("",!0)],!0)])):a("",!0),u("div",C,[s(e.$slots,"default",{},void 0,!0)]),e.$slots.footer||e.footer?(o(),t("div",M,[s(e.$slots,"footer",{},()=>[e.footer?(o(),t("span",v,n(e.footer),1)):a("",!0)],!0)])):a("",!0)]))}}),i=_(c,[["__scopeId","data-v-7cd1dd93"]]);c.__docgenInfo={exportName:"default",displayName:"MCard",description:"",tags:{},props:[{name:"header",description:"Шапка карточки",required:!1,type:{name:"string"}},{name:"footer",description:"Подвал карточки",required:!1,type:{name:"string"}}],slots:[{name:"header",description:"Шапка карточки"},{name:"default",description:"Тело карточки"},{name:"footer",description:"Подвал карточки"}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MCard/index.vue"]};const B={title:"Example/MCard",component:i,tags:["autodocs"],argTypes:{header:{control:"text"},footer:{control:"text"}},args:{header:"header",footer:"footer"}},k=d=>({component:{MCard:i},setup(){return{args:d}},template:`
    <MCard v-bind="args">
      <template #header>Header slot</template>
      body
      <template #footer>Footer slot</template>
    </MCard>
  `}),r=k.bind({});r.args={header:"header",footer:"footer"};var p,m,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
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
})`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const E=["Props"];export{r as Props,E as __namedExportsOrder,B as default};
