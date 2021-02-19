<template>
  <div class="bg-container absolute center">
    <transition name="fade" mode="out-in" appear>
      <div
        :style="{ backgroundImage: `url(${backgroundImage})` }"
        :class="{ 'isMoving': isMoving }"
        class="landscape"
      >
      </div>
    </transition>
    <div
      :style="{ backgroundImage: `url(${BgImageFloor})` }"
      :class="{ 'isMoving': isMoving }"
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
    this.$nuxt.$on('game-started', () => { this.isMoving = true })
    this.$nuxt.$on('game-over', () => { this.isMoving = false })
  },
  data () {
    return {
      BgImageDay,
      BgImageNight,
      BgImageFloor,
      isMoving: false
    }
  },
  computed: {
    backgroundImage () {
      return new Date().getHours() > 18
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
    background-size: cover;
    background-repeat: repeat-x;

    &.isMoving {
      animation: moving-bg 8s infinite linear;
    }

    &.landscape {
      height: 75%;
    }

    &.base {
      height: 25%;
    }
  }
}

@keyframes moving-bg {
  100% {
    background-position: -1000px 0;
  }
}
</style>
