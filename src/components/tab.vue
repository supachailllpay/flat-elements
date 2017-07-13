<style lang='scss' scoped>
  @import '~@/styles/mixins';

  .tab {
    @include transition-normal(transform, opacity);
    position: absolute;
    top: 0;
    transform: translateY(24px);
    opacity: 0;
    pointer-events: none;
    will-change: transform;

    &.visible {
      position: relative;
      transform: translateY(0);
      opacity: 1;
      pointer-events: all;
    }
  }
</style>

<template>
  <div class='tab' :class='{ visible }'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'element-tab',

    props: {
      name: String
    },

    computed: {
      visible () {
        return this.name === this.$parent.tab
      }
    }
  }
</script>
