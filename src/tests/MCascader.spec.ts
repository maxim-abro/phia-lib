import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import MCascader from '@/components/MCascader/MCascader.vue';
import { IMTree } from '@/components/MTree/types';

const dataTree: IMTree[] = [
  {
    label: 'Level one 1',
    id: '1',
    children: [
      {
        label: 'Level two 1-1',
        id: '1-1',
        children: [
          {
            label: 'Level three 1-1-1',
            id: '1-1-1'
          }
        ]
      }
    ]
  }
];

describe('MCascader', () => {
  it('renders correctly', () => {
    const activeElement = ref<string | number | null>(null);
    const wrapper = mount(MCascader, {
      props: {
        modelValue: activeElement.value,
        items: dataTree,
        placeholder: 'placeholder',
        'onUpdate:modelValue': (value) => {
          activeElement.value = value;
        }
      }
    });

    expect(wrapper.text()).toContain('placeholder');
  });

  it('trigger cascader', async () => {
    const activeElement = ref<string | number | null>(null);
    const wrapper = mount(MCascader, {
      props: {
        modelValue: activeElement.value,
        items: dataTree,
        'onUpdate:modelValue': (value) => {
          activeElement.value = value;
        }
      }
    });

    const trigger = wrapper.find('.m-cascader__activator');

    await trigger.trigger('click');

    expect(wrapper.text()).toContain('Level one 1');
  });
});
