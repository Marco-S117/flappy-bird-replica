<template>
  <div
    ref="block"
    class="block-container absolute isMoving"
  >
    <img
      :src="GreenPipe"
      :height="`${top}%`"
      class="block-top absolute"
    >
    <div
      :style="{
        height: `${middle}%`,
        top: `${top}%`
      }"
      class="hole absolute"
    >
    </div>
    <img
      :src="GreenPipe"
      :height="`${bottom}%`"
      class="block-bottom absolute"
    >
  </div>
</template>

<script>
import GreenPipe from '@/assets/sprites/pipe-green.png'

export default {
  data () {
    return {
      GreenPipe,
      top: 25,
      bottom: 25,
      middle: 25,
      random: 0
    }
  },
  created () {
    this.$nuxt.$on('game-over', () => {
      if (this.$refs.block) {
        this.$refs.block.style.webkitAnimationPlayState = 'paused'
      }
    })
  },
  mounted () {
    this.$refs.block.addEventListener('animationiteration', () => {
      this.random = Math.floor(Math.random() * 50) + 1
      this.top = this.random
      this.bottom = 50 - this.top
      this.$nuxt.$emit('check-score')
    })
  }
}
</script>

<style lang="scss" scoped>
.block-container {
  z-index: 10;
  top: 0;
  right: -65px;
  width: 65px;
  height: 100%;
  overflow: hidden;
  animation: moving-block 4s infinite linear;

  img {
    width: 65px;
  }

  .block-top {
    top: 0;
    right: 0;
    transform: scale(-1);
  }

  .hole {
    right: 0;
    width: 65px;
    background-color: rgba(0, 255, 34, 0.4);
  }

  .block-bottom {
    bottom: 25%;
    right: 0;
  }
}


@keyframes moving-block {
  from {
    top: 0;
    right: -75px;
  }
  to {
    top: 0;
    right: 100%;
  }
}
</style>
