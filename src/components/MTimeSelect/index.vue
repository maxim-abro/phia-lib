<template>
  <m-select
    v-model="choseValue"
    :values="values"
    :value-key="null"
    :title-key="null"
  />
</template>

<script lang="ts">
export default {
  name: 'MTimeSelect',
};
</script>

<script setup lang="ts">
import MSelect from '@/components/MSelect/index.vue';
import { ITimeSelectEmits, ITimeSelectProps } from '@/components/MTimeSelect/types';
import { toMinutes, formatTime } from './helpers';
import { computed } from 'vue';

const props = withDefaults(defineProps<ITimeSelectProps>(), {
  start: '09:00',
  end: '18:00',
  step: '00:30'
});

const emits = defineEmits<ITimeSelectEmits>();

const choseValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const values = computed(() => {
  if (props.step <= 0) throw new Error('Шаг должен быть положительным числом');
  if (props.start >= props.end) throw new Error('Начальное время должно быть меньше конечного');

  const step = toMinutes(props.step);
  const startMinutes = toMinutes(props.start);
  const endMinutes = toMinutes(props.end);

  const intervals = [];
  let current = startMinutes;

  while (current <= endMinutes) {
    intervals.push(formatTime(current));
    current += step;
  }

  return intervals;
});
</script>