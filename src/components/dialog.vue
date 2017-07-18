<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dialog';

  .content {
    @include dialog-content;
    top: 20%;
    right: 0;
    left: 0;
    z-index: $elevation-dialog;
    max-width: 600px;
    max-height: 60%;
    margin: auto;
    transform: scale(0);

    &.visible {
      transform: scale(1);
    }
  }

  .backdrop {
    @include dialog-backdrop;
    z-index: $elevation-dialog - 1;
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
