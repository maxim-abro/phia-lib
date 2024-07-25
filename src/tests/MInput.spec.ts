import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MInput from '@/components/MInput/index.vue';

describe('MInput', () => {
  //@ts-ignore
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MInput, {
      props: {
        placeholder: 'placeholder',
        modelValue: 'Test value',
        //@ts-ignore
        "onUpdate:modelValue": (e) => wrapper.setProps({ modelValue: e })
      }
    });
  });

  it('emits input value when changed', async () => {
    //@ts-ignore
    await wrapper.find('input').setValue("New Test Value");
    //@ts-ignore
    expect(wrapper.props("modelValue")).toBe("New Test Value");
  });
});