import type { Meta, StoryFn, StoryObj } from '@storybook/vue3';
import MTabs from '@/components/MTabs/index.vue';
import { MTab } from '@/components';
import { ref } from 'vue';

const meta = {
  title: 'Navigation/Tabs',
  tags: ['autodocs'],
  component: MTabs,
  argTypes: {
    modelValue: {
      control: {
        type: 'number'
      }
    }
  }
} satisfies Meta<typeof MTabs>;

const Template: StoryFn<typeof MTabs> = (args) => ({
  components: { MTabs, MTab },
  setup() {
    const activeTab = ref(0);
    return { activeTab, args };
  },
  template: `
    <MTabs v-model="activeTab">
      <MTab
        title="Главная"
        :active-index="activeTab"
        :index="0"
      >
        Главная
      </MTab>
      <MTab
        title="Категории"
        :active-index="activeTab"
        :index="1"
      >
        Категории
      </MTab>
      <MTab
        title="Контакты"
        :active-index="activeTab"
        :index="2"
      >
        Контакты
      </MTab>
    </MTabs>
  `
});
export default meta;
type Story = StoryObj<typeof meta>;

export const Props: Story = Template.bind({});
