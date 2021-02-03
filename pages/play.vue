<template>
  <div class="play-page-container absolute">
    <Gamescore :points="score" />
    <Bird
      v-if="!!$root.birdColor"
      :color="$root.birdColor"
    />
    <Block />
  </div>
</template>

<script>
import Gamescore from '@/components/atoms/Gamescore'
import Bird from '@/components/atoms/Bird'
import Block from '@/components/atoms/Block'

export default {
  components: { Gamescore, Bird, Block },
  beforeCreate () {
    if (!this.$root.birdColor) {
      this.$router.push({ name: 'index' })
    }
  },
  data () {
    return {
      score: 0
    }
  },
  // mounted () {
  //   let interval = setInterval(() => {
  //     this.score++

  //     if (this.score > 0) {
  //       this.$nuxt.$emit('play-audio', 'point')
  //     }

  //     if (this.score === 11) {
  //       clearInterval(interval)
  //     }
  //   }, 2500)
  // }
}
</script>

<style lang="scss" scoped>
.play-page-container {
  height: 100%;
  width: 100%;
}
</style>
