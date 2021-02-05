<template>
  <img :src="birdImage" class="bird">
</template>

<script>

export default {
  name: 'Bird',
  props: {
    color: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: false
    }
  },
  computed: {
    birdImage () {
      return require(`@/assets/sprites/birds/${this.color}/${this.state}.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.bird {
  width: 65px;
  height: auto;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
