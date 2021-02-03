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
    }
  },
  computed: {
    birdImage () {
      return require(`@/assets/sprites/birds/${this.color}/upflap.png`)
    }
  }
}
</script>

<style lang="scss" scoped>
.bird {
  width: 75px;
  height: auto;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
