<template>
  <div
    @click="onClick"
    class="play-page-container absolute"
  >
    <Gamescore :points="score" />
    <Bird
      v-if="!!$root.birdColor"
      :color="$root.birdColor"
      ref="bird"
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
  beforeMount () {
    this.$nuxt.$emit('game-started')
  },
  mounted () {
    if (this.$refs.bird) {
      this.addGravity()
    }
  },
  beforeDestroy () {
    this.$nuxt.$emit('game-over')
  },
  data () {
    return {
      score: 0,
      isJumping: false,
      jumpsCount: 0
    }
  },
  methods: {
    addGravity () {
      setInterval(() => {
        const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))

        if (!this.isJumping) {
          this.$refs.bird.$el.style.top = (BIRD_TOP + 6) + 'px'
        }
      }, 40)
    },
    onClick () {
      this.isJumping = true
      const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
      this.$refs.bird.$el.style.top = (BIRD_TOP - 75) + 'px'
      setTimeout(() => {
        this.isJumping = false
      }, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.play-page-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
