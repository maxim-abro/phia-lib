<template>
  <div
    v-show="isActive"
    class="tabs__content__item"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MTab',
};
</script>

<script setup lang="ts">
import { ITabProps } from '@/components/MTabs/types';
import { computed } from 'vue';

const props = defineProps<ITabProps>();

const isActive = computed(() => props.index === props.activeIndex);
</script>

<style scoped lang="scss">
.tabs {
  &__content {
    &__item {
      padding: 16px;
    }
  }
}
</style>