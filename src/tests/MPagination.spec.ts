import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MPagination from '@/components/MPagination/MPagination.vue';
import { ref } from 'vue';

describe('MPagination', () => {
  it('renders correctly', () => {
    const page = ref<number>(1);
    const wrapper = mount(MPagination, {
      props: {
        pages: 30,
        modelValue: page.value,
        'onUpdate:modelValue': (value) => {
          page.value = value;
        }
      }
    });

    expect(wrapper.text()).toContain(1);
    expect(wrapper.text()).toContain(2);
    expect(wrapper.text()).toContain(3);
    expect(wrapper.text()).toContain(4);
    expect(wrapper.text()).toContain(30);
  });

  it('change page', async () => {
    const page = ref<number>(1);
    const wrapper = mount(MPagination, {
      props: {
        pages: 30,
        modelValue: page.value,
        'onUpdate:modelValue': (value) => {
          page.value = value;
        }
      }
    });

    const foundButton = wrapper.findAllComponents('button');
    await foundButton[4].trigger('click');
    expect(page.value).toBe(4);

    await foundButton[1].trigger('click');
    expect(page.value).toBe(1);

    await foundButton[foundButton.length - 2].trigger('click');
    expect(page.value).toBe(30);
  });
});
