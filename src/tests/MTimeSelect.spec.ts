import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MTimeSelect } from '@/components';

describe('MTimeSelect', () => {
  it('renders correctly', () => {
    const wrapper = mount(MTimeSelect, {
      props: {
        modelValue: '10:00',
        step: '0:15',
        min: '10:00',
        max: '18:00'
      }
    });

    const select = wrapper.find('.select');

    expect(wrapper.text()).toContain('10:00');
    select.trigger('click');
    expect(wrapper.text()).toContain('10:15');
    expect(wrapper.text()).toContain('10:30');
    expect(wrapper.text()).toContain('18:00');
  });
});
