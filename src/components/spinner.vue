<style lang='scss' scoped>
  @import '~@/styles/variables';
  @import '~@/styles/mixins';

  .spinner {
    @include transition-normal(background-color, opacity);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: rgba($color-white, 0.8);
    opacity: 0;
    pointer-events: none;

    &.visible {
      opacity: 1;
    }
  }

  .circle {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 48px;
    height: 48px;
    margin: auto;
    animation: spinner-rotate 2s infinite;
  }

  .arc {
    animation: spinner-rotate 1s infinite;
    animation-timing-function: linear;
    transform-origin: center;

    &:nth-child(2) {
      animation-timing-function: cubic-bezier(0.35, 0.5, 0.5, 0.65);
    }

    &:nth-child(3) {
      animation-timing-function: cubic-bezier(0.5, 0.35, 0.65, 0.5);
    }
  }

  .path {
    stroke: $color-primary;
  }

  @keyframes spinner-rotate {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
</style>

<template>
  <div class='spinner' :class='{ visible }'>
    <svg class='circle' width='48' height='48' viewBox='0 0 24 24'>
      <g class='arc' v-for='n in 3'>
        <circle cx='12' cy='12' r='12' fill='none'/>
        <path class='path' d='M12,1 A11,11 0 0,1 19.7782,4.2218' fill='none' stroke-width='2' stroke-linecap='round'/>
      </g>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'element-spinner',

    data: () => ({
      visible: false
    }),

    methods: {
      toggle () {
        this.visible = !this.visible
      }
    }
  }
</script>
