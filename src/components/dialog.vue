<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dialog';

  .content {
    @include transition-normal(transform);
    position: fixed;
    top: 20%;
    right: 24px;
    left: 24px;
    z-index: $elevation-dialog;
    max-width: 600px;
    max-height: 60%;
    margin: auto;
    background-color: $color-white;
    transform: scale(0);
    border-radius: 3px;
    overflow-y: auto;
    pointer-events: none;
    will-change: transform;

    &.visible {
      transform: scale(1);
      pointer-events: all;
    }
  }

  .backdrop {
    @include dialog-backdrop;
  }
</style>

<template>
  <div>
    <div class='content' :class='{ visible }' :style='size'>
      <slot></slot>
    </div>
    <div class='backdrop' :class='{ visible }' @click='toggle'></div>
  </div>
</template>

<script>
  export default {
    name: 'element-dialog',

    props: {
      size: Object
    },

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
