<style lang='scss' scoped>
  .toggle {
    cursor: pointer;
  }

  .content {
    display: none;

    &.visible {
      display: block;
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
  import animations from '@/utils/animations'

  export default {
    name: 'element-collapse',

    props: {
      collapsed: Boolean
    },

    data: () => ({
      visible: true
    }),

    methods: {
      toggle () {
        this.visible = !this.visible
        animations.expand(this.$refs.content, {
          style: { display: 'block', overflow: 'hidden' },
          reversed: !this.visible
        })
      }
    },

    created () {
      this.visible = !this.collapsed
    }
  }
</script>
