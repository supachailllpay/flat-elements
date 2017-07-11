<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .radio {
    cursor: pointer;
    user-select: none;
  }

  .input {
    display: none;
  }

  .icon::after {
    @include icon-material;
    color: $color-secondary-text;
    content: 'radio_button_unchecked';
    vertical-align: top;

    :checked + & {
      color: $color-primary;
      content: 'radio_button_checked';
    }
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
