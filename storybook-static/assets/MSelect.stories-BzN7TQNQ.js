import{d as x,k as S,b as v,s as B,o as u,e as r,w as p,n as f,j as c,t as _,v as P,F as C,u as D}from"./vue.esm-bundler-DHzfqQKc.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const E={class:"select"},F={class:"select__activator__text"},I={class:"select__menu"},O=["onClick"],j={name:"MSelect"},h=x({...j,props:{modelValue:{type:[Boolean,String,Number]},multiple:{type:Boolean},disabled:{type:Boolean},valueKey:{default:"value"},titleKey:{default:"title"},placeholder:{default:"Выбрать"},loading:{type:Boolean},noDataText:{},values:{}},emits:["change","focus","blur","update:modelValue"],setup(i,{emit:d}){const a=i,k=d,t=S(!0),o=v({get(){return a.modelValue},set(e){k("update:modelValue",e)}}),w=v(()=>{var m;if(!o.value)return a.placeholder;const e=(m=a.values)==null?void 0:m.find(l=>{if(l!=null&&l[a.valueKey])return(l==null?void 0:l[a.valueKey])===o.value});return(e==null?void 0:e[a.titleKey])||o.value});function V(){a!=null&&a.disabled||(t.value=!t.value)}function q(){t.value=!1}function K(e){o.value=e,t.value=!1}return(e,m)=>{const l=B("click-outside");return u(),r("div",E,[p((u(),r("div",{class:f(["select__activator",{active:t.value}]),onClick:V},[c("span",F,_(w.value),1),c("span",{class:f(["select__activator__icon",{rotate:t.value}])}," arrow ",2)],2)),[[l,q]]),p(c("div",I,[(u(!0),r(C,null,D(e.values,(s,T)=>(u(),r("div",{key:T,class:"select__menu__item",onClick:A=>K(s==null?void 0:s[e.valueKey])},[c("span",null,_(s==null?void 0:s[e.titleKey]),1)],8,O))),128))],512),[[P,t.value]])])}}}),M=N(h,[["__scopeId","data-v-fabc306a"]]);h.__docgenInfo={exportName:"default",displayName:"MSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"union",elements:[{name:"boolean"},{name:"string"},{name:"number"}]}},{name:"multiple",required:!1,type:{name:"boolean"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"valueKey",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'value'"}},{name:"titleKey",required:!1,type:{name:"TSTypeOperator"},defaultValue:{func:!1,value:"'title'"}},{name:"placeholder",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Выбрать'"}},{name:"loading",required:!1,type:{name:"boolean"}},{name:"noDataText",required:!1,type:{name:"string"}},{name:"values",required:!0,type:{name:"Array",elements:[{name:"unknown"}]}}],events:[{name:"change",type:{names:["union"],elements:[{name:"boolean"},{name:"string"},{name:"number"}]}},{name:"focus"},{name:"blur"},{name:"update:modelValue",type:{names:["union"],elements:[{name:"boolean"},{name:"string"},{name:"number"}]}}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MSelect/index.vue"]};const G={title:"Example/MSelect",component:M,tags:["autodocs"],argTypes:{disabled:{control:"boolean"}},args:{disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},z=i=>({computed:{MSelect:M},setup(){const d=S(null);return{args:i,val:d,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]}},template:`
    <MSelect v-bind="args" v-model="val" :values="values"/>
  `}),n=z.bind({});n.args={disabled:!1,values:[{title:"Moscow",value:"msk"},{title:"Saints Petersburg",value:"spb"}]};var b,y,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
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
})`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const H=["Props"];export{n as Props,H as __namedExportsOrder,G as default};
