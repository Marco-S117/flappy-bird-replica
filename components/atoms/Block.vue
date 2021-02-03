<template>
  <div
    ref="block"
    class="block-container absolute"
  >
    <img
      :src="block"
      width="38px"
      :height="`${25}%`"
      class="block-top absolute"
    >
    <div
      :style="{
        height: `${25}%`,
        top: `${25}%`
      }"
      class="hole absolute"
    >
    </div>
    <img
      :src="block"
      width="38px"
      :height="`${25}%`"
      class="block-bottom absolute"
    >
  </div>
</template>

<script>
export default {
  data () {
    return {
      top: 0,
      bottom: 0,
      middle: 0
    }
  },
  mounted () {
    this.$refs.block.addEventListener('animationiteration', () => {
      console.log('New block appear')
      const RND = Math.floor(Math.random() * 24) + 1

      // console.log(TOP_RND + '%')
      // console.log(BOTTOM_RND + '%')

      this.top = RND
      this.middle = 100 - RND
      this.bottom = RND

      console.log('top', this.top, '%')
      console.log('bottom', this.bottom, '%')
      console.log('middle', this.middle, '%')
    })
  },
  computed: {
    block () {
      return require(`@/assets/sprites/pipe-red.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.block-container {
  z-index: 10;
  top: 0;
  right: 0;
  width: 38px;
  height: 100%;
  animation: slide-block 4s infinite linear;
}

.block-top {
  top: 0;
  right: 0;
  transform: scale(-1);
}

.hole {
  right: 0;
  width: 38px;
  background-color: rgba(0, 255, 34, 0.4);
}

.block-bottom {
  bottom: 25%;
  right: 0;
}

@keyframes slide-block {
  from {
    top: 0;
    right: 0;
  }
  to {
    top: 0;
    right: 100%;
  }
}
</style>
