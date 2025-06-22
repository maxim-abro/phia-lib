<template>
  <div class="m-card">
    <div
      v-if="$slots.header || header"
      class="m-card__header"
    >
      <slot name="header">
        <span v-if="header">{{ header }}</span>
      </slot>
    </div>
    <div class="m-card__body">
      <slot />
    </div>
    <div
      v-if="$slots.footer || footer"
      class="m-card__footer"
    >
      <slot name="footer">
        <span v-if="footer">{{ footer }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MCard'
};
</script>

<script setup lang="ts">
import type { ICardProps, ICardSlots } from '@/components/MCard/types';

defineProps<ICardProps>();
defineSlots<ICardSlots>();
</script>

<style lang="scss">
.m-card {
  border-radius: 4px;
  border: 1px solid rgb(var(--m-border-color));
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  &__footer,
  &__body,
  &__header {
    padding: 20px;
  }
}
</style>
