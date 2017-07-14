<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .toast {
    @include transition-normal(bottom, transform);
    position: fixed;
    bottom: 0;
    left: 24px;
    z-index: $elevation-snackbar;
    display: flex;
    max-width: 320px;
    padding: 16px 24px;
    color: $color-white;
    background-color: rgba($color-black, 0.9);
    transform: translateY(100%);
    border-radius: 3px;
    will-change: bottom, transform;

    &.visible {
      bottom: 24px;
      transform: translateY(0);
    }
  }

  .message {
    @include text-nowrap;
    flex-grow: 1;
  }

  .action {
    @include text-button;
    margin-left: 24px;
    color: $color-accent;
    cursor: pointer;
  }

  @media all and (max-width: $breakpoint-xsmall) {
    .toast {
      right: 24px;
      max-width: none;
    }
  }
</style>

<template>
  <div class='toast' :class='{ visible }'>
    <div class='message'>{{ message }}</div>
    <div class='action' v-show='action' @click='call'>{{ action }}</div>
  </div>
</template>

<script>
  export default {
    name: 'element-toast',

    props: {
      duration: Number
    },

    data: () => ({
      message: '',
      action: '',
      visible: false
    }),

    methods: {
      setTimer () {
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(() => {
          this.visible = false
        }, this.duration)
      },

      call () {
        if (this.callback) {
          this.callback()
          this.hide()
        }
      },

      show (message, action, callback) {
        this.message = message
        this.action = action
        this.callback = callback
        this.visible = true
        this.setTimer()
      },

      hide () {
        clearTimeout(this.timeoutId)
        this.callback = null
        this.visible = false
      }
    }
  }
</script>
