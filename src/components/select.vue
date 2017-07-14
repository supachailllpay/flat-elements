<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .select {
    position: relative;
    padding: 24px 0;
  }

  .input {
    @include input-textfield;
    padding-right: 24px;
    cursor: pointer;
  }

  .label {
    @include label-textfield;
  }

  .caret {
    @include icon-material;
    position: absolute;
    top: 24px;
    right: 0;
    color: $color-secondary-text;
    pointer-events: none;
  }

  .menu {
    @include transition-normal(transform);
    position: absolute;
    top: 0;
    left: 0;
    z-index: $elevation-menu;
    display: block;
    max-height: 308px;
    padding: 0;
    margin: 24px 0;
    background-color: $color-white;
    transform: scale(0);
    transform-origin: top left;
    border-radius: 3px;
    box-shadow: 0 1px 1px 0 $color-darker;
    list-style: none;
    overflow-y: auto;
    pointer-events: none;
    will-change: transform;

    &.visible {
      transform: scale(1);
      pointer-events: all;
    }
  }

  .item {
    @include text-nowrap;
    @include transition-normal(background-color);
    display: block;
    padding: 16px;
    cursor: pointer;

    &:hover {
      background-color: $color-darker;
    }
  }

</style>

<template>
  <div class='select'>
    <input class='input' type='text' readonly
      :placeholder='label'
      :value='text'
      v-bind='attributes'
      @focus='toggle(true)'
      @blur='toggle(false)'>
    <label class='label'>{{ label }}</label>
    <div class='caret'>arrow_drop_down</div>
    <ul class='menu' :class='{ visible }'>
      <li class='item'
        v-for='option in options'
        @mousedown='select(option)'>
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'element-select',

    props: {
      label: String,
      value: String,
      options: Array,
      attributes: Object
    },

    data: () => ({
      visible: false
    }),

    computed: {
      text () {
        return this.options.reduce((text, option) => (
          option.value === this.value ? option.label : text
        ), '')
      }
    },

    methods: {
      toggle (visible) {
        this.visible = visible
      },

      select (option) {
        this.$emit('input', option.value)
      }
    }
  }
</script>
