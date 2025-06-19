import{_ as n}from"./index-CcPgFmvA.js";import"./vue.esm-bundler-B6uAbVLO.js";const m={title:"Example/MLink",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","success","warning","danger","info","default"]},target:{control:"select",options:["_blank","_parent","_self","_top"]}}},o=s=>({components:{MLink:n},setup(){return{args:s}},template:`
    <MLink v-bind="args">link</MLink>
  `}),e=o.bind({type:"primary",href:"https://ya.ru/"});var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`Template.bind({
  type: 'primary',
  href: 'https://ya.ru/'
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,m as default};
