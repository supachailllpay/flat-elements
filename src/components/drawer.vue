<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .content {
    @include transition-normal(transform);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: $elevation-drawer;
    width: 240px;
    background-color: $color-white;
    transform: translateX(-100%);
    overflow-y: auto;
    pointer-events: none;
    will-change: transform;

    &.visible {
      transform: translateX(0);
      pointer-events: all;
    }
  }

  .backdrop {
    @include backdrop-dialog;
    z-index: $elevation-drawer - 1;
  }
</style>

<template>
  <div>
    <div class='content' :class='{ visible }'>
      <slot></slot>
    </div>
    <div class='backdrop' :class='{ visible }' @click='toggle'></div>
  </div>
</template>

<script>
  export default {
    name: 'element-drawer',

    data: () => ({
      visible: false
    }),

    methods: {
      toggle () {
        this.visible = !this.visible
      }
    }
  }
</script>
