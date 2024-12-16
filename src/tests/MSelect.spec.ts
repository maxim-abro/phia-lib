import { beforeEach, it, expect, describe } from 'vitest';
import { mount } from '@vue/test-utils';
import MSelect from '@/components/MSelect/index.vue';



describe('MSelect', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MSelect, {
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
          },
        ]
      },
      'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
    });
  });

  it('renders correctly', async () => {
    expect(wrapper.text()).toContain('Moscow');
  });
});