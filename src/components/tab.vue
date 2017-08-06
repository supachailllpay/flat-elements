<style lang='scss' scoped>
  .tab {
    position: absolute;
    display: none;

    &.visible {
      position: static;
      display: block;
    }
  }
</style>

<template>
  <div class='tab' :class='{ visible }' ref='tab'>
    <slot></slot>
  </div>
</template>

<script>
  import animations from '@/utils/animations'

  export default {
    name: 'element-tab',

    props: {
      name: String
    },

    computed: {
      visible () {
        return this.name === this.$parent.tab
      }
    },

    watch: {
      visible () {
        animations.fadeInUp(this.$refs.tab, {
          style: { display: 'block' },
          reversed: !this.visible
        })
      }
    }
  }
</script>
