<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';
  @import '~@/styles/mixins/textfield';

  .textarea {
    position: relative;
    padding-top: 24px;
  }

  .area {
    @include textfield-input;
    height: auto;
    resize: vertical;
  }

  .label {
    @include textfield-label;
  }
</style>

<template>
  <div class='textarea'>
    <textarea class='area' rows='4'
      :placeholder='label'
      :value='value'
      v-bind='attributes'
      @input='input'>
    </textarea>
    <label class='label'>{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'element-textarea',

    props: {
      label: String,
      value: String,
      attributes: Object
    },

    methods: {
      input (event) {
        this.$emit('input', event.target.value)
      }
    }
  }
</script>
