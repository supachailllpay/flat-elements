<style lang='scss' scoped>
  @import '~@/styles/mixins';

  .toggle {
    cursor: pointer;
  }

  .content {
    @include transition-normal(height);
    pointer-events: all;
    will-change: height;

    &.hidden {
      height: 0;
      overflow: hidden;
      pointer-events: none;
    }
  }
</style>

<template>
  <div>
    <div class='toggle' @click='toggle'>
      <slot name='toggle'></slot>
    </div>
    <div class='content' :class='{ hidden }' ref='content'>
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
      hidden: false
    }),

    methods: {
      toggleStyle (duration) {
        let content = this.$refs.content
        let height = content.scrollHeight
        content.style.height = height + 'px'
        content.style.overflow = 'hidden'
        setTimeout(() => {
          content.style.height = ''
          content.style.overflow = ''
        }, duration)
      },

      toggle () {
        this.hidden = !this.hidden
        this.toggleStyle(this.hidden ? 50 : 200)
      }
    },

    created () {
      this.hidden = this.collapsed
    }
  }
</script>
