import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MDataTransfer } from '@/components';

describe('MDataTransfer', () => {
  it('renders correctly', async () => {
    const wrapper = mount(MDataTransfer, {
      props: {
        modelValue: [],
        'onUpdate:modelValue': (e) => {
          console.log('work');
          wrapper.setProps({ modelValue: e });
        },
        items: [{ title: 'Moscow', value: 'moscow_0' }]
      }
    });

    const foundWrapper = wrapper.find('.transfer-panel__list__item__label>input[type="checkbox"]');

    expect(foundWrapper.element._value).toBe('moscow_0');
  });
});
