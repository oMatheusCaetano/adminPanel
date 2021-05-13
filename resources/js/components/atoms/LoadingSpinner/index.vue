<template>
  <div class="loading-spinner-component" :style="cssVars">
    <div class="loading-spinner-component-part top">
      <div class="loading-spinner-component-rotator"></div>
    </div>
    <div class="loading-spinner-component-part bottom">
      <div class="loading-spinner-component-rotator"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white',
    },
    size: {
      type: String,
      default: '20px',
    },
  },

  computed: {
    cssVars() {
      return {
        '--color': this.color,
        '--size': this.size,
      };
    },
  },
};
</script>

<style>
.loading-spinner-component,
.loading-spinner-component * {
  box-sizing: border-box;
}

.loading-spinner-component {
  height: var(--size);
  width: var(--size);
}

.loading-spinner-component .loading-spinner-component-part {
  overflow: hidden;
  height: calc(var(--size) / 2);
  width: var(--size);
}

.loading-spinner-component .loading-spinner-component-part.bottom {
  transform: rotate(180deg) scale(-1, 1);
}

.loading-spinner-component .loading-spinner-component-rotator {
  width: var(--size);
  height: var(--size);
  border: calc(var(--size) / 7) solid transparent;
  border-right-color: var(--color);
  border-top-color: var(--color);
  border-radius: 50%;
  box-sizing: border-box;
  animation: loading-spinner-component-animation 3s ease-in-out infinite;
  transform: rotate(-200deg);
}

@keyframes loading-spinner-component-animation {
  0% {
    border-width: calc(var(--size) / 7);
  }
  25% {
    border-width: calc(var(--size) / 23.33);
  }
  50% {
    transform: rotate(115deg);
    border-width: calc(var(--size) / 7);
  }
  75% {
    border-width: calc(var(--size) / 23.33);
  }
  100% {
    border-width: calc(var(--size) / 7);
  }
}
</style>
