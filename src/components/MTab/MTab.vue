<template>
  <div
    v-show="isActive"
    class="m-tabs__content__item"
  >
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'MTab'
};
</script>

<script setup lang="ts">
import { ITabProps } from '@/components/MTabs/types';
import { computed } from 'vue';

const props = defineProps<ITabProps>();

const isActive = computed(() => props.index === props.activeIndex);
</script>

<style lang="scss">
.m-tabs {
  &__content {
    &__item {
      padding: 16px;
    }
  }
}
</style>
