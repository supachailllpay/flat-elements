<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dropdown';

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .content {
    @include dropdown-content;
  }

  .backdrop {
    @include dropdown-backdrop;
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
