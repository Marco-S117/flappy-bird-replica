<template>
  <div
    ref="block"
    class="block-container absolute"
  >
    <img
      :src="block"
      width="38px"
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
      width="38px"
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
      middle: 25
    }
  },
  mounted () {
    this.$refs.block.addEventListener('animationiteration', () => {
      const RND = Math.floor(Math.random() * 50) + 1
      this.top = RND
      this.bottom = 50 - this.top
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
  animation: slide-block 5s infinite linear;
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
