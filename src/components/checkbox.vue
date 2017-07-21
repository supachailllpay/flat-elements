<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/checkbox';

  .checkbox {
    cursor: pointer;
    user-select: none;
  }

  .input {
    display: none;
  }

  .icon::after {
    $unchecked: 'check_box_outline_blank';
    $checked: 'check_box';
    @include checkbox-icon($unchecked, $checked);
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
