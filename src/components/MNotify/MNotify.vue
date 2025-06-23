<template>
  <div
    :id="id"
    class="m-notify-container"
  >
    <div class="m-notify-container__title">
      {{ title }}
    </div>
    <div class="m-notify-container__body">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { INotifyProps } from '@/components/MNotify/types';

defineProps<INotifyProps>();
</script>

<style lang="scss">
.m-notify-container {
  background: rgb(var(--m-white));
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 7px -2px rgba(34, 60, 80, 0.6);
  -webkit-box-shadow: 0 1px 7px -2px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0 1px 7px -2px rgba(34, 60, 80, 0.6);
  &__title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 4px;
  }
}
</style>
