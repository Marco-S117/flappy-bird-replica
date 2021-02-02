<template>
  <router-link :to="`/${icon}`" class="btn">
    <img
      :src="image"
      :width="`${width}px`"
      :height="`${height}px`"
      class="absolute center"
    >
  </router-link>
</template>

<script>
export default {
  name: 'BtnWithImage',
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      required: true
    },
    height: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    image () {
      return require(`@/assets/svg/${this.icon}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid #543847;
  text-decoration: none;
  background: linear-gradient(0deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%);
}
</style>
