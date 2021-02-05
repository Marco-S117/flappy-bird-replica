<template>
  <div
    v-if="!!$root.birdColor"
    @click="fly"
    class="play-page-container absolute"
  >
    <Gamescore :score="score" />
    <Bird
      :color="$root.birdColor"
      :state="birdState"
      ref="bird"
      class="isPlaying-bird"
    />
    <Block ref="block" />
  </div>
</template>

<script>
import Gamescore from '@/components/atoms/Gamescore'
import Bird from '@/components/atoms/Bird'
import Block from '@/components/atoms/Block'

export default {
  components: { Gamescore, Bird, Block },
  beforeMount () {
    if (!this.$root.birdColor) {
      this.$router.push({ name: 'index' })
    }
    this.$nuxt.$emit('game-started')
  },
  mounted () {
    if (this.$refs.bird) {
      this.startGame()
    }
  },
  beforeDestroy () {
    this.$nuxt.$emit('game-over')
  },
  data () {
    return {
      isScored: false,
      score: 0,
      isJumping: false,
      birdState: 'downflap' // 'downflap', midflap, 'upflap'
    }
  },
  methods: {
    startGame () {
      setInterval(() => {
        this.addGravity()
      }, 10)

      // BUG: Incremento multiplo del punteggio se si usa una setInterval
      this.checkScore()
    },
    fly () {
      const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
      this.$refs.bird.$el.style.top = (BIRD_TOP - this.$root.settings.jump) + 'px'

      this.$nuxt.$emit('play-audio', 'wing')
      this.isJumping = true
      this.birdState = 'upflap'

      setTimeout(() => {
        this.isJumping = false
        this.birdState = 'downflap'
      }, 100)
    },
    addGravity () {
      const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
      if (!this.isJumping) {
        this.$refs.bird.$el.style.top = (BIRD_TOP + this.$root.settings.grativy) + 'px'
      }
    },
    checkScore () {
      const BIRD_LEFT = parseInt(this.$refs.bird.$el.getBoundingClientRect().left)
      const HOLE_RIGHT = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().right)

      this.isScored = false

      if (BIRD_LEFT > HOLE_RIGHT && !this.isScored) {
        this.isScored = true
        this.score++
      }
    },
    detectCollision () {
      // Bird dom rect
      const BIRD_TOP = parseInt(this.$refs.bird.$el.getBoundingClientRect().top)
      const BIRD_RIGHT = parseInt(this.$refs.bird.$el.getBoundingClientRect().right)
      const BIRD_BOTTOM = parseInt(this.$refs.bird.$el.getBoundingClientRect().bottom)
      const BIRD_LEFT = parseInt(this.$refs.bird.$el.getBoundingClientRect().left)

      // Top block dom rect
      const TOP_BLOCK_TOP = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().top)
      const TOP_BLOCK_RIGHT = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().right)
      const TOP_BLOCK_BOTTOM = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().bottom)
      const TOP_BLOCK_LEFT = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().left)

      // Bottom block dom rect
      const BOTTOM_BLOCK_TOP = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().top)
      const BOTTOM_BLOCK_RIGHT = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().right)
      const BOTTOM_BLOCK_BOTTOM = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().bottom)
      const BOTTOM_BLOCK_LEFT = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().left)
    }
  }
}
</script>

<style lang="scss" scoped>
.play-page-container {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .isPlaying-bird {
    transition: top 0.001s linear;
  }
}
</style>
