<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dialog';

  .content {
    @include dialog-content;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: $elevation-drawer;
    width: 240px;
    transform: translateX(-100%);

    &.visible {
      transform: translateX(0);
    }
  }

  .backdrop {
    @include dialog-backdrop;
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
