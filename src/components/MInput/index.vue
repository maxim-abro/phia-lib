<template>
  <div
    class="m-input"
    :class="{
      'is-focus': isFocus,
      disabled: disabled
    }"
  >
    <input
      v-model="value"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @focus="isFocus = true"
      @blur="isFocus = false"
      @input="maxLength"
    />
    <button
      v-if="clearable && !!value"
      class="m-input__clear"
      @click="value = ''"
    >
      <MIcon icon="mdi-close" />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MInput'
};
</script>

<script setup lang="ts">
import type { MInputEmits, MInputProps } from '@/components/MInput/types';
import { computed, ref } from 'vue';
import MIcon from '@/components/MIcon/index.vue';

const isFocus = ref<boolean>(false);

function maxLength(e: Event): void {
  const input = <HTMLInputElement>e.target;
  if (props.maxLength && input?.value.length > props.maxLength) {
    value.value = value.value.substring(0, props.maxLength);
  }
}
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const props = withDefaults(defineProps<MInputProps>(), {
  type: 'text'
});
const emits = defineEmits<MInputEmits>();
</script>

<style scoped lang="scss">
.m-input {
  border-radius: 4px;
  border: 1px solid rgb(var(--m-text-color));
  padding: 0 5px;
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.disabled {
    background: rgb(var(--m-gray-color));
    border-color: rgb(var(--m-border-color));
    cursor: not-allowed;
    input {
      cursor: not-allowed;
    }
  }
  &.is-focus {
    border: 1px solid rgb(var(--m-primary));
  }
  &__clear {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  input {
    border: none;
    border-radius: 4px;
    background: none;
    flex-grow: 1;
    height: 32px;
    &:focus {
      outline: none;
    }
  }
}
</style>
