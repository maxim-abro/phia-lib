<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        v-for="(tab, _idx) of tabTitles"
        :key="_idx"
        class="tabs__header__item"
        :class="{ active: _idx === activeIndex }"
        @click="setActiveTab(_idx)"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tabs__content">
      <slot :activeIndex="activeIndex" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MTabs'
};
</script>

<script setup lang="ts">
import type { ITabsEmits, ITabsProps } from '@/components/MTabs/types';
import { onMounted, ref, useSlots, VNode, watch } from 'vue';

const props = defineProps<ITabsProps>();
const emits = defineEmits<ITabsEmits>();

const slots = useSlots();

const activeIndex = ref(props.modelValue);
const tabTitles = ref<string[]>([]);

function extractTabTitles(): string[] {
  const children = slots.default?.() || [];
  return children
    .filter((child: VNode) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return child.type?.name === 'MTab';
    })
    .map((tab: VNode) => tab.props?.title as string);
}

function updateTabTitles(): void {
  tabTitles.value = extractTabTitles();
}

function setActiveTab(index: number): void {
  activeIndex.value = index;
  emits('update:modelValue', index);
}

onMounted(updateTabTitles);
watch(() => slots.default?.(), updateTabTitles);
</script>

<style scoped lang="scss">
.tabs {
  &__header {
    display: flex;
    background: rgb(var(--m-gray-color));
    margin-bottom: 8px;
    border: 1px solid rgb(var(--m-border-color));
    &__item {
      padding: 12px 16px;
      cursor: pointer;
      &.active {
        background: #fff;
        border-left: 1px solid rgb(var(--m-border-color));
        border-right: 1px solid rgb(var(--m-border-color));
        transform: translateY(1px);
        border-bottom: 1px solid #fff;
        color: rgb(var(--m-primary));
      }
    }
  }
}
</style>
