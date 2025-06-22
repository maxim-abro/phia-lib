import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MInputNumber from '../components/MInputNumber/MInputNumber.vue';

describe('MInputNumber', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MInputNumber, {
      props: {
        modelValue: 5,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    });
  });

  it('emits input value when changed', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await wrapper.find('input').setValue(5);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(wrapper.props('modelValue')).toBe(5);
  });
});
