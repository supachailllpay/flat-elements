<style lang='scss' scoped>
  .tabs {
    position: relative;
  }
</style>

<template>
  <div class='tabs'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'element-tabs',

    props: {
      selected: String
    },

    data: () => ({
      tab: ''
    }),

    methods: {
      select (name) {
        this.tab = name
      }
    },

    created () {
      this.tab = this.selected
    }
  }
</script>
