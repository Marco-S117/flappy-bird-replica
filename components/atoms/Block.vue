<template>
  <div
    ref="block"
    class="block-container absolute"
  >
    <img
      :src="block"
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
      :src="block"
      :height="`${bottom}%`"
      class="block-bottom absolute"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 25,
      bottom: 25,
      middle: 25,
      random: 0
    }
  },
  mounted () {
    this.$refs.block.addEventListener('animationiteration', () => {
      this.random = Math.floor(Math.random() * 50) + 1
      this.top = this.random
      this.bottom = 50 - this.top
    })
  },
  computed: {
    block () {
      return this.random < 25
        ?  require(`@/assets/sprites/pipe-green.png`)
        :  require(`@/assets/sprites/pipe-red.png`)


    }
  }
}
</script>

<style lang="scss" scoped>
.block-container {
  z-index: 10;
  top: 0;
  right: -75px;
  width: 75px;
  height: 100%;
  animation: slide-block 5s infinite linear;

  img {
    width: 75px;
  }

  .block-top {
    top: 0;
    right: 0;
    transform: scale(-1);
  }

  .hole {
    right: 0;
    width: 75px;
    background-color: rgba(0, 255, 34, 0.4);
  }

  .block-bottom {
    bottom: 25%;
    right: 0;
  }
}


@keyframes slide-block {
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
