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
  },
  mounted () {
    if (this.$refs.bird) {
      this.onGameStart()
    }
  },
  beforeDestroy () {
    this.$nuxt.$emit('game-over')
  },
  data () {
    return {
      birdState: 'downflap', // 'downflap', midflap, 'upflap'
      isFlying: false,
      isGameOver: false,
      score: 0,
      grativyInterval: null
    }
  },
  methods: {
    onGameStart () {
      this.$nuxt.$emit('game-started')
      this.$nuxt.$on('check-score', () => { this.checkScore() })
      this.isGameOver = false
      this.grativyInterval = setInterval(() => {
        this.addGravity()
        this.detectCollision()
      }, 10)
    },
    onGameOver () {
      console.log('game over')
      this.$nuxt.$emit('game-over')
      this.$nuxt.$emit('play-audio', 'die')
      clearInterval(this.grativyInterval)
      this.isGameOver = true
    },
    addGravity () {
      const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))

      if (!this.isFlying) {
        this.$refs.bird.$el.style.top = (BIRD_TOP + this.$root.settings.grativy) + 'px'
      }
    },
    fly () {
      if (!this.isGameOver) {
        const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
        this.$refs.bird.$el.style.top = (BIRD_TOP - this.$root.settings.jump) + 'px'

        this.$nuxt.$emit('play-audio', 'wing')
        this.isFlying = true
        this.birdState = 'upflap'

        setTimeout(() => {
          this.isFlying = false
          this.birdState = 'downflap'
        }, 100)
      }
    },
    checkScore () {
      if (!this.isGameOver) {
        this.score++
        this.$nuxt.$emit('play-audio', 'point')
      } else {
        this.onGameOver()
      }
    },
    detectCollision () {
      // Bird dom rect
      const BIRD_TOP = parseInt(this.$refs.bird.$el.getBoundingClientRect().top)
      const BIRD_RIGHT = parseInt(this.$refs.bird.$el.getBoundingClientRect().right)
      const BIRD_BOTTOM = parseInt(this.$refs.bird.$el.getBoundingClientRect().bottom)
      const BIRD_LEFT = parseInt(this.$refs.bird.$el.getBoundingClientRect().left)

      // Top block dom rect
      // const TOP_BLOCK_X = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().x)
      // const TOP_BLOCK_Y = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().y)
      const TOP_BLOCK_W = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().width)
      const TOP_BLOCK_H = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().height)
      const TOP_BLOCK_TOP = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().top)
      const TOP_BLOCK_RIGHT = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().right)
      const TOP_BLOCK_BOTTOM = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().bottom)
      const TOP_BLOCK_LEFT = parseInt(this.$refs.block.$el.children[0].getBoundingClientRect().left)

      // Bottom block dom rect
      // const BOTTOM_BLOCK_X = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().x)
      // const BOTTOM_BLOCK_Y = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().y)
      const BOTTOM_BLOCK_W = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().width)
      const BOTTOM_BLOCK_H = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().height)
      const BOTTOM_BLOCK_TOP = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().top)
      const BOTTOM_BLOCK_RIGHT = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().right)
      const BOTTOM_BLOCK_BOTTOM = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().bottom)
      const BOTTOM_BLOCK_LEFT = parseInt(this.$refs.block.$el.children[2].getBoundingClientRect().left)

      let isGameOver = false

      if (BIRD_RIGHT >= TOP_BLOCK_LEFT && BIRD_TOP <= TOP_BLOCK_H) {
        console.log('collided with the front of the top block')
        isGameOver = true
      }

      if (BIRD_RIGHT >= BOTTOM_BLOCK_LEFT && BIRD_TOP >= BOTTOM_BLOCK_H) {
        console.log('collided with the front of the bottom block')
        isGameOver = true
      }

      if (isGameOver) this.onGameOver()
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
