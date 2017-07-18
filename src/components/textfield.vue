<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/textfield';

  .textfield {
    position: relative;
    padding: 24px 0;
  }

  .input {
    @include textfield-input;
  }

  .label {
    @include textfield-label;
  }
</style>

<template>
  <div class='textfield'>
    <input class='input'
      :type='type'
      :placeholder='label'
      :value='value'
      v-bind='attributes'
      @input='input'>
    <label class='label'>{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'element-textfield',

    props: {
      type: String,
      label: String,
      value: [String, Number],
      attributes: Object
    },

    methods: {
      input (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
