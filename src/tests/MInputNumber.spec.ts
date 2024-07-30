import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MInputNumber from '@/components/MInputNumber/index.vue';

describe('MInputNumber', () => {
  //@ts-ignore
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MInputNumber, {
      props: {
        modelValue: 5,
        //@ts-ignore
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    });
  });

  it('emits input value when changed', async () => {
    //@ts-ignore
    await wrapper.find('input').setValue(5);
    //@ts-ignore
    expect(wrapper.props('modelValue')).toBe(5);
  });
});
