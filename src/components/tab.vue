<style lang='scss' scoped>
  @import '~@/styles/mixins';

  .tab {
    @include transition-normal(transform, opacity);
    pointer-events: all;

    &.hidden {
      position: absolute;
      top: 0;
      bottom: 0;
      transform: translateY(24px);
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
    }
  }
</style>

<template>
  <div class='tab' :class='{ hidden }'>
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
      hidden () {
        return this.name !== this.$parent.tab
      }
    }
  }
</script>
