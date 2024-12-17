<template>
  <i :class="`mdi ${icon}`"></i>
</template>

<script lang="ts">
export default {
  name: 'MIcon'
};
</script>

<script setup lang="ts">
import { IIconProps } from '@/components/MIcon/types';

defineProps<IIconProps>();
</script>

<style scoped lang="scss">
@import '@mdi/font/css/materialdesignicons.min.css';
</style>
