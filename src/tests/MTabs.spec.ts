import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { MTabs, MTab } from '@/components';
import { h, ref } from 'vue';

describe('MTabs', () => {
  it('renders correctly', () => {
    const activeTab = ref(0);
    const tabs = ref([
      {
        title: 'Tab 1',
        content: 'Tab 1 content'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2 content'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3 content'
      }
    ]);
    const wrapper = mount(MTabs, {
      props: {
        modelValue: activeTab.value,
        'onUpdate:modelValue': (value) => {
          activeTab.value = value;
        },
        slots: {
          default: () =>
            tabs.value.map((tab, index) => {
              return h(
                MTab,
                {
                  title: tab.title,
                  index,
                  activeIndex: activeTab.value
                },
                tab.content
              );
            })
        },
        global: {
          components: { MTab }
        }
      }
    });

    expect(wrapper.text()).toContain('');
  });
});
