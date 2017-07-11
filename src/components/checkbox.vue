<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .checkbox {
    cursor: pointer;
    user-select: none;
  }

  .input {
    display: none;
  }

  .icon::after {
    @include icon-material;
    color: $color-secondary-text;
    content: 'check_box_outline_blank';
    vertical-align: top;

    :checked + & {
      color: $color-primary;
      content: 'check_box';
    }
  }

  .label {
    margin-left: 4px;
  }
</style>

<template>
  <label class='checkbox'>
    <input class='input' type='checkbox'
      :checked='value'
      v-bind='attributes'
      @change='change'>
    <span class='icon'></span>
    <span class='label'>{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: 'element-checkbox',

    props: {
      label: String,
      value: Boolean,
      attributes: Object
    },

    methods: {
      change (event) {
        this.$emit('input', event.target.checked)
      }
    }
  }
</script>
