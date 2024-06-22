<template>
  <div class="m-dropdown-menu">
    <slot/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MDropdownMenu',
};
</script>

<style scoped lang="scss">
.m-dropdown-menu {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px 0;
}
</style>