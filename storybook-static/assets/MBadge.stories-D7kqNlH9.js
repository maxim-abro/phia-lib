import{d as c,b as g,o,e as r,f as y,n as f,t as v,g as s}from"./vue.esm-bundler-Key2Y4ML.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={class:"m-badge-wrap"},B={key:0},h={name:"MBadge"},m=c({...h,props:{value:{},max:{},isDot:{type:Boolean},hidden:{type:Boolean},type:{default:"primary"},showZero:{type:Boolean}},setup(t){const u=g(()=>a.max&&Number(a.value)>a.max?`${a.max}+`:a.value),a=t;return(e,w)=>(o(),r("div",b,[y(e.$slots,"default",{},void 0,!0),e.hidden?s("",!0):(o(),r("div",{key:0,class:f(["m-badge-wrap__item",[{"is-dot":e.value===void 0||e.isDot},e.type]])},[e.value!==void 0&&!e.isDot?(o(),r("span",B,v(u.value),1)):s("",!0)],2))]))}}),l=_(m,[["__scopeId","data-v-c82c06d9"]]);m.__docgenInfo={exportName:"default",displayName:"MBadge",description:"",tags:{},props:[{name:"value",description:"Значение",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]}},{name:"max",description:'Максимальное значение. Выше максимального значение будет показываться например "25+"',required:!1,type:{name:"number"}},{name:"isDot",description:"Показывать точку, вместо значения",required:!1,type:{name:"boolean"}},{name:"hidden",description:"Скрыть бейдж",required:!1,type:{name:"boolean"}},{name:"type",description:"Цвет бейджа",required:!0,type:{name:"Type"},defaultValue:{func:!1,value:"'primary'"}},{name:"showZero",description:"Показывать ноль",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/home/user/Документы/www/phia-lib/src/components/MBadge/index.vue"]};const D={title:"Example/MBadge",component:l,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","warning","danger","info","success"]},value:{control:"text"}}},M=t=>({components:{MBadge:l},setup(){return{args:t}},template:`
    <MBadge v-bind="args">badge</MBadge>
  `}),n=M.bind({});n.args={type:"primary"};var d,i,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
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
})`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const k=["Primary"];export{n as Primary,k as __namedExportsOrder,D as default};
