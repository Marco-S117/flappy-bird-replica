<template>
  <div class="bg-container absolute center">
    <transition name="fade" mode="out-in">
      <div
        :key="nightMode"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
        :class="{ 'moving': moving }"
        class="landscape"
      >
      </div>
    </transition>
    <div
      :style="{ backgroundImage: `url(${BgImageFloor})` }"
      :class="{ 'moving': moving }"
      class="base"
    >
    </div>
  </div>
</template>

<script>
import BgImageDay from '@/assets/sprites/background-day.png'
import BgImageNight from '@/assets/sprites/background-night.png'
import BgImageFloor from '@/assets/sprites/base.png'

export default {
  name: 'Background',
  beforeMount () {
    this.$nuxt.$on('game-started', () => { this.moving = true })
    this.$nuxt.$on('game-over', () => { this.moving = false })
    this.$nuxt.$on('toggle-night-mode', (state) => { this.nightMode = state })
  },
  data () {
    return {
      nightMode: false,
      BgImageDay,
      BgImageNight,
      BgImageFloor,
      moving: false
    }
  },
  computed: {
    backgroundImage () {
      return this.nightMode
        ? this.BgImageNight
        : this.BgImageDay
    }
  }
}
</script>

<style scoped lang="scss">
.bg-container {
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;

  div {
    width: 100%;
    background-size: contain;
    background-repeat: repeat-x;

    &.moving {
      animation: moving-bg 10s infinite linear;
    }

    &.landscape {
      height: 75%;
    }

    &.base {
      height: 25%;

      @media screen and (max-width: 420px) {
        background-size: cover;
      }
    }
  }
}

@keyframes moving-bg {
  100% {
    background-position: -200vw 0;
  }
}
</style>
