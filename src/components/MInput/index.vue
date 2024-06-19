<template>
<div class="m-input">
  <input
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    v-model="value"
  >
</div>
</template>

<script lang="ts">
export default {
  name: 'MInput',
}
</script>

<script setup lang="ts">
import type { MInputEmits, MInputProps } from '@/components/MInput/Type'
import { computed } from 'vue'

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const props = withDefaults(defineProps<MInputProps>(), {
  type: 'text',
  modelValue: ''
})
const emits = defineEmits<MInputEmits>()
</script>

<style scoped lang="scss">
.m-input {
  border-radius: 4px;
  border: 1px solid rgb(var(--m-text-color));
  width: max-content;
  & + input:focus {
    border: 1px solid rgb(var(--m-primary));
  }
  input {
    border: none;
    border-radius: 4px;
    background: none;
    &:focus {
      outline: none;
    }
  }
}
</style>