<style lang='scss' scoped>
  .tabs {
    position: relative;
  }
</style>

<template>
  <div class='tabs'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'element-tabs',

    props: {
      tab: String
    }
  }
</script>
