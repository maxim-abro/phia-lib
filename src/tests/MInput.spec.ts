import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MInput from '@/components/MInput/index.vue';

describe('MInput', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MInput, {
      props: {
        placeholder: 'placeholder',
        modelValue: 'Test value',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    });
  });

  it('emits input value when changed', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    await wrapper.find('input').setValue('New Test Value');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    expect(wrapper.props('modelValue')).toBe('New Test Value');
  });
});
