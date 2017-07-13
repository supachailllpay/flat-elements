<style lang='scss' scoped>
  @import '~@/styles/variables';

  .ripple {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }

  .circle {
    position: absolute;
    width: 600px;
    height: 600px;
    background-color: $color-darker;
    transform: scale(0);
    border-radius: 50%;
    pointer-events: none;
    will-change: transform;

    &.light {
      background-color: $color-lighter;
    }
  }

  .wave {
    animation: wave 1s ease-out;
  }

  @keyframes wave {
    from {
      transform: scale(0);
      opacity: 1;
    }

    to {
      transform: scale(1);
      opacity: 0;
    }
  }
</style>

<template>
  <div class='ripple' @click='animate'>
    <div class='circle' :class='{ light }' :style='ink' ref='circle'></div>
  </div>
</template>

<script>
  export default {
    name: 'element-ripple',

    props: {
      light: Boolean,
      ink: Object
    },

    methods: {
      updateCircle (x, y) {
        let circle = this.$refs.circle
        let rect = circle.parentElement.getBoundingClientRect()
        let top = y - rect.top - circle.offsetHeight / 2
        let left = x - rect.left - circle.offsetWidth / 2
        let ratio = rect.width / circle.offsetWidth
        circle.style.top = top + 'px'
        circle.style.left = left + 'px'
        circle.style.animationDuration = 1.5 - ratio + 's'
      },

      animate (event) {
        let circle = this.$refs.circle
        this.updateCircle(event.pageX, event.pageY)
        circle.classList.remove('wave')
        setTimeout(() => {
          circle.classList.add('wave')
        }, 100)
      }
    }
  }
</script>
