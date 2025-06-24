import { it, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import MSelect from '../components/MSelect/MSelect.vue';
import { clickOutside } from '@/tests/mocks/clickOutside';

describe('MSelect', () => {
  it('renders correctly', async () => {
    const wrapper = mount(MSelect, {
      props: {
        modelValue: 'msk',
        values: [
          {
            title: 'Moscow',
            value: 'msk'
          },
          {
            title: 'Saint Petersburg',
            value: 'spb'
          },
          {
            title: 'Kazan',
            value: 'kzn'
          },
          {
            title: 'KazanKazanKazanKazanKazanKazanKazanKazan',
            value: 'kzn2'
          }
        ]
      },
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    });
    expect(wrapper.text()).toContain('Moscow');
  });

  it('empty values', () => {
    const wrapper = mount(MSelect, {
      props: {
        modelValue: '',
        values: [],
        noDataText: 'no data text'
      },
      directives: {
        'click-outside': clickOutside
      },
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    });

    const foundActivator = wrapper.find('.m-select__activator');

    foundActivator.trigger('click');

    console.log(wrapper.text());

    expect(wrapper.text()).toContain('no data text');
  });
});
