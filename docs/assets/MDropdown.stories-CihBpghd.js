import{_ as a,a as m,M as r}from"./MDropdownMenuItem-DBOzWZ6W.js";import{_ as s}from"./index-DQSE3aj8.js";import"./vue.esm-bundler-B6uAbVLO.js";const w={title:"Example/MDropdown",component:a,tags:["autodocs"],argTypes:{maxHeight:{control:{type:"number",defaultValue:300}},disabled:{control:{type:"boolean",defaultValue:!1}},trigger:{control:{type:"select",defaultValue:"hover"},options:["hover","click","contextMenu"]}}},p=t=>({components:{MDropdown:a,MDropdownMenu:r,MDropdownMenuItem:m,MButton:s},setup(){return{args:t}},template:`
    <MDropdown v-bind="args">
      <template #default="{ props }">
        <MButton v-bind="props">open dropdown</MButton>
      </template>

      <template #menu>
        <m-dropdown-menu>
          <m-dropdown-menu-item>1asdsadd asdasd aadsa</m-dropdown-menu-item>
          <m-dropdown-menu-item>2asddsadsasadda</m-dropdown-menu-item>
          <m-dropdown-menu-item disabled>3a sdasd asdsadasd as</m-dropdown-menu-item>
        </m-dropdown-menu>
      </template>
    </MDropdown>
  `}),n=p.bind({});var e,o,d;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    MDropdown,
    MDropdownMenu,
    MDropdownMenuItem,
    MButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MDropdown v-bind="args">
      <template #default="{ props }">
        <MButton v-bind="props">open dropdown</MButton>
      </template>

      <template #menu>
        <m-dropdown-menu>
          <m-dropdown-menu-item>1asdsadd asdasd aadsa</m-dropdown-menu-item>
          <m-dropdown-menu-item>2asddsadsasadda</m-dropdown-menu-item>
          <m-dropdown-menu-item disabled>3a sdasd asdsadasd as</m-dropdown-menu-item>
        </m-dropdown-menu>
      </template>
    </MDropdown>
  \`
})`,...(d=(o=n.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const c=["Primary"];export{n as Primary,c as __namedExportsOrder,w as default};
