<template>
  <button
    class="m-button"
    type="button"
    :disabled="disabled"
    :class="[
      size,
      getClassByType,
      {
        round: round,
        'is-plain': plain,
        disabled: disabled
      }
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  name: 'MButton'
};
</script>

<script setup lang="ts">
import type { IButtonProps, IButtonSlots } from '@/components/MButton/types';
import { computed } from 'vue';

const props = withDefaults(defineProps<IButtonProps>(), {
  type: 'default',
  size: 'default'
});

defineSlots<IButtonSlots>();

const getClassByType = computed<string>(() => `m-button__${props.type}`);
</script>

<style lang="scss">
@import 'src/assets/scss/_mixins';
.m-button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 100ms;
  &.round {
    border-radius: 20px;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &__default {
    @include themeBtn(default);
    &.is-plain {
      @include themePlainBtn(default);
    }
  }
  &__primary {
    @include themeBtn(primary);
    &.is-plain {
      @include themePlainBtn(primary);
    }
  }
  &__success {
    @include themeBtn(success);
    &.is-plain {
      @include themePlainBtn(success);
    }
  }
  &__info {
    @include themeBtn(info);
    &.is-plain {
      @include themePlainBtn(info);
    }
  }
  &__warning {
    @include themeBtn(warning);
    &.is-plain {
      @include themePlainBtn(warning);
    }
  }
  &__danger {
    @include themeBtn(danger);
    &.is-plain {
      @include themePlainBtn(danger);
    }
  }
}
</style>
