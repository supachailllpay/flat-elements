<style lang='scss' scoped>
  .toolbar {
    display: flex;
    align-items: center;
    padding: 16px;
  }

  .gap {
    flex-grow: 1;
  }
</style>

<template>
  <div class='toolbar'>
    <slot name='primary'></slot>
    <div class='gap'></div>
    <slot name='secondary'></slot>
  </div>
</template>

<script>
  export default {
    name: 'element-toolbar'
  }
</script>
