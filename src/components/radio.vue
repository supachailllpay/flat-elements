<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/checkbox';

  .radio {
    cursor: pointer;
    user-select: none;
  }

  .input {
    display: none;
  }

  .icon::after {
    $unchecked: 'radio_button_unchecked';
    $checked: 'radio_button_checked';
    @include checkbox-icon($unchecked, $checked);
  }

  .label {
    margin-left: 4px;
  }
</style>

<template>
  <label class='radio'>
    <input class='input' type='radio'
      :checked='checked'
      v-bind='attributes'
      @change='change'>
    <span class='icon'></span>
    <span class='label'>{{ label }}</span>
  </label>
</template>

<script>
  export default {
    name: 'element-radio',

    props: {
      label: String,
      radio: String,
      value: String,
      attributes: Object
    },

    computed: {
      checked () {
        return this.value === this.radio
      }
    },

    methods: {
      change (event) {
        this.$emit('input', this.radio)
      }
    }
  }
</script>
