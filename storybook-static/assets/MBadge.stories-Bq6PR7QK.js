import{d as c,b as g,o as t,e as o,f as y,n as f,t as v,g as r}from"./vue.esm-bundler-CHc5ti9x.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={class:"m-badge-wrap"},B={key:0},M={name:"MBadge"},p=c({...M,props:{value:{},max:{},isDot:{type:Boolean},hidden:{type:Boolean},type:{default:"primary"},showZero:{type:Boolean}},setup(s){const u=g(()=>a.max&&Number(a.value)>a.max?`${a.max}+`:a.value),a=s;return(e,w)=>(t(),o("div",_,[y(e.$slots,"default",{},void 0,!0),e.hidden?r("",!0):(t(),o("div",{key:0,class:f(["m-badge-wrap__item",[{"is-dot":e.value===void 0||e.isDot},e.type]])},[e.value!==void 0&&!e.isDot?(t(),o("span",B,v(u.value),1)):r("",!0)],2))]))}}),l=b(p,[["__scopeId","data-v-2c9ecba5"]]);p.__docgenInfo={exportName:"default",displayName:"MBadge",description:"",tags:{},props:[{name:"value",description:"Значение",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",description:'Максимальное значение. Выше максимального значение будет показываться например "25+"',required:!1,type:{name:"number"}},{name:"isDot",description:"Показывать точку, вместо значения",required:!1,type:{name:"boolean"}},{name:"hidden",description:"Скрыть бейдж",required:!1,type:{name:"boolean"}},{name:"type",description:"Цвет бейджа",required:!0,type:{name:"Type"},defaultValue:{func:!1,value:"'primary'"}},{name:"showZero",description:"Показывать ноль",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/maksimabrosimov/Documents/www/phia-lib/src/components/MBadge/index.vue"]};const D={title:"Example/MBadge",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","warning","danger","info","success"]},value:{control:"text"}}},h=s=>({components:{MBadge:l},setup(){return{args:s}},template:`
    <MBadge v-bind="args">badge</MBadge>
  `}),n=h.bind({});n.args={type:"primary"};var d,i,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    MBadge
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MBadge v-bind="args">badge</MBadge>
  \`
})`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["Primary"];export{n as Primary,k as __namedExportsOrder,D as default};
