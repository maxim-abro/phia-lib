<template>
<span
  class="m-tag"
  :class="[
    size,
    getClassByType,
    {
      round
    }
  ]"
>
  <slot/>
</span>
</template>

<script lang="ts">
export default {
  name: 'MTag'
};
</script>

<script setup lang="ts">
import { ITagProps, ITagSlots } from '@/components/MTag/types'
import { computed } from 'vue';

const props = withDefaults(defineProps<ITagProps>(), {
  type: 'default',
  size: 'default'
});

defineSlots<ITagSlots>();

const getClassByType = computed<string>(() => `m-tag__${props.type}`);
</script>

<style scoped lang="scss">
@import 'src/assets/scss/_mixins';
.m-tag {
  padding: 2px 10px;
  border-radius: 4px;
  transition: all 100ms;
  &.round {
    border-radius: 20px;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &__default {
    @include themeTag(default);
  }
  &__primary {
    @include themeTag(primary);
  }
  &__success {
    @include themeTag(success);
  }
  &__info {
    @include themeTag(info);
  }
  &__warning {
    @include themeTag(warning);
  }
  &__danger {
    @include themeTag(danger);
  }
}
</style>