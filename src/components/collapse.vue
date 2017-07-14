<style lang='scss' scoped>
  @import '~@/styles/mixins';

  .toggle {
    cursor: pointer;
  }

  .content {
    @include transition-normal(height);
    height: 0;
    overflow: hidden;
    pointer-events: none;
    will-change: height;

    &.visible {
      height: auto;
      overflow: auto;
      pointer-events: all;
    }
  }
</style>

<template>
  <div>
    <div class='toggle' @click='toggle'>
      <slot name='toggle'></slot>
    </div>
    <div class='content' :class='{ visible }' ref='content'>
      <slot name='content'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'element-collapse',

    props: {
      collapsed: Boolean
    },

    data: () => ({
      visible: true
    }),

    methods: {
      updateHeight (delay) {
        let content = this.$refs.content
        let height = content.scrollHeight
        content.style.height = height + 'px'
        setTimeout(() => {
          content.style.height = ''
        }, delay)
      },

      toggle () {
        this.visible = !this.visible
        this.updateHeight(this.visible ? 250 : 100)
      }
    },

    mounted () {
      this.visible = !this.collapsed
    }
  }
</script>
