import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MCollapse from '@/components/MCollapse/index.vue';

const meta = {
  title: 'Example/MCollapse',
  component: MCollapse,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    toTeleport: { control: 'text' }
  },
  args: {
    modelValue: false
  }
} satisfies Meta<typeof MCollapse>;

const Template: StoryFn<typeof MCollapse> = (args) => ({
  components: { MCollapse },
  setup() {
    return { args };
  },
  template: `
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
  `
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
Primary.args = {
  modelValue: false
};
