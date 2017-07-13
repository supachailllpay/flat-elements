<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .content {
    @include transition-normal(transform);
    position: absolute;
    top: 0;
    z-index: $elevation-menu;
    background-color: $color-white;
    transform: scale(0);
    transform-origin: top left;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 $color-darker;
    overflow: hidden;
    pointer-events: none;
    will-change: transform;

    &.right {
      right: 0;
      transform-origin: top right;
    }

    &.visible {
      transform: scale(1);
      pointer-events: all;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $elevation-menu - 1;
  }
</style>

<template>
  <div class='dropdown' @click='toggle'>
    <slot name='toggle'></slot>
    <div class='content' :class='{ right, visible }'>
      <slot name='content'></slot>
    </div>
    <div class='backdrop' v-show='visible'></div>
  </div>
</template>

<script>
  export default {
    name: 'element-dropdown',

    props: {
      right: Boolean
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
