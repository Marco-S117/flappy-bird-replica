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
}
</style>
