<template>
<div class="m-select">
  <div
    class="m-select__activator"
    @click="isOpenMenu = true"
  >
    <span
      v-if="placeholder && !value"
      class="m-select__activator__placeholder"
    >
      {{ placeholder }}
    </span>
  </div>
  <div class="m-select__list">
    <slot/>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: 'MSelect',
};
</script>

<script setup lang="ts">
import type { IOptionSelectProps, ISelectEmits, ISelectProps } from '@/components/MSelect/types';
import { computed, onMounted, ref } from 'vue';

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  }
});

const emits = defineEmits<ISelectEmits>();
const props = defineProps<ISelectProps>();
const slots = defineSlots();
const allProps = ref<IOptionSelectProps[]>([]);

const isOpenMenu = ref(false);
onMounted(() => {
  allProps.value = slots.default()[0].children.map(i => i.props);
  console.log(allProps.value);
});
</script>

<style scoped lang="scss">
.m-select {

}
</style>