import{d as C,k as S,b as _,s as D,o,e as u,w as b,n as m,j as c,t as p,v as P,F as N,u as x,g as E}from"./vue.esm-bundler-DHzfqQKc.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"select"},O={class:"select__activator__text"},j={class:"select__menu"},z=["onClick"],A={key:0},L={name:"MSelect"},k=C({...L,props:{modelValue:{type:[Boolean,String,Number]},multiple:{type:Boolean},disabled:{type:Boolean},valueKey:{default:"value"},titleKey:{default:"title"},placeholder:{default:"Выбрать"},loading:{type:Boolean},noDataText:{default:"Нет данных"},values:{}},emits:["change","focus","blur","update:modelValue"],setup(i,{emit:d}){const a=i,w=d,s=S(!1),n=_({get(){return a.modelValue},set(e){w("update:modelValue",e)}}),V=_(()=>{var v;if(!n.value)return a.placeholder;const e=(v=a.values)==null?void 0:v.find(l=>{if(l!=null&&l[a.valueKey])return(l==null?void 0:l[a.valueKey])===n.value});return(e==null?void 0:e[a.titleKey])||n.value});function K(){a!=null&&a.disabled||(s.value=!s.value)}function T(){s.value=!1}function q(e){n.value=e,s.value=!1}return(e,v)=>{var f;const l=D("click-outside");return o(),u("div",I,[b((o(),u("div",{class:m(["select__activator",{active:s.value,disabled:e.disabled}]),onClick:K},[c("span",O,p(V.value),1),c("span",{class:m(["select__activator__icon",{rotate:s.value}])}," arrow ",2)],2)),[[l,T]]),b(c("div",j,[(o(!0),u(N,null,x(e.values,(t,B)=>(o(),u("div",{key:B,class:m(["select__menu__item",{active:t[e.valueKey]===n.value}]),onClick:G=>q(t==null?void 0:t[e.valueKey])},[c("span",null,p(t==null?void 0:t[e.titleKey]),1)],10,z))),128)),(f=e.values)!=null&&f.length?E("",!0):(o(),u("div",A,p(e.noDataText),1))],512),[[P,s.value]])])}}}),M=F(k,[["__scopeId","data-v-dc274120"]]);k.__docgenInfo={exportName:"default",displayName:"MSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"string"},{name:"number"}]}},{name:"multiple",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"valueKey",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'value'"}},{name:"titleKey",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'title'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Выбрать'"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"noDataText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Нет данных'"}},{name:"values",required:!0,type:{name:"Array",elements:[{name:"unknown"}]}}],events:[{name:"change",type:{names:["union"],elements:[{name:"boolean"},{name:"string"},{name:"number"}]}},{name:"focus"},{name:"blur"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"string"},{name:"number"}]}}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MSelect/index.vue"]};const Q={title:"Example/MSelect",component:M,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},args:{disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},$=i=>({computed:{MSelect:M},setup(){const d=S(null);return{args:i,val:d,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},template:`
    <MSelect v-bind="args" v-model="val" :values="values"/>
  `}),r=$.bind({});r.args={disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]};var y,g,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  computed: {
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
  \`
})`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const R=["Props"];export{r as Props,R as __namedExportsOrder,Q as default};
