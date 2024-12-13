<template>
123
</template>

<script lang="ts">
export default {
  name: 'MSelect'
};
</script>

<script setup lang="ts">
import { IEmitsSelect, IPropsSelect } from '@/components/MSelect/types'
import { computed } from 'vue'

const props = defineProps<IPropsSelect>();
const emits = defineEmits<IEmitsSelect>();

const chosenData = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', props.modelValue);
  }
});
</script>