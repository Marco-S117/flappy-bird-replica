<template>
  <div class="bg-container absolute center">
    <div
      :style="{ backgroundImage: `url(${BgImageNight})` }"
      :class="{ 'moving': moving }"
      class="landscape"
    >
    </div>
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
  },
  data () {
    return {
      BgImageDay,
      BgImageNight,
      BgImageFloor,
      moving: false
    }
  }
}
</script>

<style scoped lang="scss">
.bg-container {
  z-index: -1;
  width: 100%;
  height: 100%;

  div {
    width: 100%;
    background-size: contain;
    background-repeat: repeat-x;

    &.moving {
      animation: moving-bg 17s linear infinite;
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
    background-position: -3000px 0;
  }
}
</style>
