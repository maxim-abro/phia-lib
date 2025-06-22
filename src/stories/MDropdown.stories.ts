import MDropdown from '@/components/MDropdown/index.vue';
import MDropdownMenu from '@/components/MDropdown/MDropdownMenu.vue';
import MDropdownMenuItem from '@/components/MDropdown/MDropdownMenuItem.vue';
import MButton from '@/components/MButton/index.vue';
import { Meta, StoryFn, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof MDropdown> = {
  title: 'Navigation/Dropdown',
  component: MDropdown,
  tags: ['autodocs'],
  argTypes: {
    maxHeight: {
      control: {
        type: 'number',
        defaultValue: 300
      }
    },
    disabled: {
      control: {
        type: 'boolean',
        defaultValue: false
      }
    },
    trigger: {
      control: {
        type: 'select',
        defaultValue: 'hover'
      },
      options: ['hover', 'click', 'contextMenu']
    }
  }
} satisfies Meta<typeof MDropdown>;

const Template: StoryFn<typeof meta> = (args) => ({
  components: { MDropdown, MDropdownMenu, MDropdownMenuItem, MButton },
  setup() {
    return { args };
  },
  template: `
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
  `
});

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = Template.bind({});
