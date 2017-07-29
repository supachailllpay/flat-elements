<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/dropdown';
  @import '~@/styles/mixins/textfield';

  .select {
    position: relative;
    padding-top: 24px;
  }

  .input {
    @include textfield-input;
    padding-right: 24px;
    cursor: pointer;
  }

  .label {
    @include textfield-label;
  }

  .caret {
    @include textfield-caret;
  }

  .menu {
    @include dropdown-content;
    display: block;
    max-height: 308px;
    padding: 0;
    margin: 24px 0;
    list-style: none;
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
