<template>
  <div>
    <!-- Bg -->
    <Background />

    <!-- Menu -->

    <!-- View -->
    <Nuxt />

    <!-- Footer -->
  </div>
</template>

<script>
import Background from '@/components/atoms/Background'

export default {
  name: 'Default',
  components: { Background }
}
</script>

<style lang="scss">
/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.to-left-slide-enter-active,
.to-left-slide-leave-active {
  transition: all 0.4s;
}

.to-left-slide-enter {
  opacity: 0;
  left: 10% !important;
  transform: translateX(-10%) scale(0) !important;
}
.to-left-slide-leave-to {
  opacity: 0;
  left: 90% !important;
  transform: translateX(-90%) scale(0) !important;
}

.to-right-slide-enter-active,
.to-right-slide-leave-active {
  transition: all 0.4s;
}
.to-right-slide-enter {
  opacity: 0;
  left: 90% !important;
  transform: translateX(-90%) scale(0) !important;
}

.to-right-slide-leave-to {
  opacity: 0;
  left: 10% !important;
  transform: translateX(-10%) scale(0) !important;
}

/* Typography */
@font-face {
  font-family: FlappyBird;
  src:
    url('/fonts/flappy-font.woff') format('woff'),
    url('/fonts/flappy-font.woff2') format('woff2'),
    url('/fonts/flappy-font.ttf') format('ttf');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
}

.flappy-font {
  font-family: FlappyBird;
  letter-spacing: 4px;
  color: #fff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #543847;
}

/* Reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Helper design class */
.absolute {
  position: absolute;

  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
