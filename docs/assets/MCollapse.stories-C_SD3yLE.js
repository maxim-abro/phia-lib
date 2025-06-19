import{_ as s}from"./index-BF-XIehj.js";import"./vue.esm-bundler-B6uAbVLO.js";const i={title:"Example/MCollapse",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"boolean"},toTeleport:{control:"text"}},args:{modelValue:!1}},r=l=>({components:{MCollapse:s},setup(){return{args:l}},template:`
    <MCollapse>
      <template #default="{ toggleCollapse }">
        <div @click="toggleCollapse">trigger</div>
      </template>
      <template #expand>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda at,
        consequatur corporis delectus dignissimos doloremque fuga inventore magnam nostrum odit
        optio tenetur. Commodi doloremque ipsa nostrum possimus vel.
      </template>
    </MCollapse>
  `}),e=r.bind({});e.args={modelValue:!1};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    MCollapse
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <MCollapse>
      <template #default="{ toggleCollapse }">
        <div @click="toggleCollapse">trigger</div>
      </template>
      <template #expand>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda at,
        consequatur corporis delectus dignissimos doloremque fuga inventore magnam nostrum odit
        optio tenetur. Commodi doloremque ipsa nostrum possimus vel.
      </template>
    </MCollapse>
  \`
})`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const p=["Primary"];export{e as Primary,p as __namedExportsOrder,i as default};
