<template>
  <div>
    {{ label }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'MOptionSelect',
};
</script>

<script setup lang="ts">
import type { IOptionSelectProps } from '@/components/MSelect/types';

defineProps<IOptionSelectProps>();
</script>

<style scoped lang="scss">

</style>