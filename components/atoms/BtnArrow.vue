<template>
  <button
    type="button"
    v-on="$listeners"
    @click="$nuxt.$emit('play-audio', 'wing')"
  >
    <img :src="Arrow" class="arrow">
  </button>
</template>

<script>
import Arrow from '@/assets/sprites/arrow.png'

export default {
  name: 'ArrowImage',
  data () {
    return {
      Arrow
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  outline: none;
  padding: 4px;
  border: 0;
  background-color: transparent;

  img.arrow {
    width: 50px;
    height: 50px;
    transition: all 0.35s ease-in-out;

    &.clicked {
      transform: scale(1.2) !important;
    }
  }
}
</style>
