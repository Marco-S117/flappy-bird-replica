<template>
  <div
    v-if="!!$root.birdColor"
    @click="fly"
    class="play-page-container absolute"
  >
    <transition name="fade" mode="out-in">
      <GameOverModal v-show="isGameOver" :score="score" />
    </transition>
    <transition name="fade" mode="out-in">
      <Gamescore v-show="!isGameOver" :score="score" />
    </transition>
    <Bird
      :color="$root.birdColor"
      :state="birdState"
      ref="bird"
      :class="{ 'isDead': isGameOver }"
      class="bird"
    />
    <Block ref="block" />
  </div>
</template>

<script>
import Gamescore from '@/components/atoms/Gamescore'
import Bird from '@/components/atoms/Bird'
import Block from '@/components/atoms/Block'
import GameOverModal from '@/components/molecules/GameOverModal'

export default {
  components: { Gamescore, Bird, Block, GameOverModal },
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
      console.log(this.isGameOver);
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
      this.$nuxt.$emit('play-audio', 'hit')
      this.$nuxt.$emit('play-audio', 'die')
      clearInterval(this.grativyInterval)
      this.isGameOver = true
    },
    addGravity () {
      const BIRD_T = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))

      if (!this.isFlying) {
        this.$refs.bird.$el.style.top = (BIRD_T + 4) + 'px'
      }
    },
    fly () {
      if (!this.isGameOver) {
        const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
        this.$refs.bird.$el.style.top = (BIRD_TOP - 65) + 'px'

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
      }
    },
    detectCollision () {
      const BIRD_T = parseInt(this.$refs.bird.$el.getBoundingClientRect().top)
      const BIRD_R = parseInt(this.$refs.bird.$el.getBoundingClientRect().right)
      const BIRD_B = parseInt(this.$refs.bird.$el.getBoundingClientRect().bottom)
      const BIRD_L = parseInt(this.$refs.bird.$el.getBoundingClientRect().left)

      // const HOLE_W = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().width)
      // const HOLE_H = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().height)
      // const HOLE_X = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().x)
      // const HOLE_Y = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().y)
      const HOLE_T = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().top)
      const HOLE_R = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().right)
      const HOLE_B = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().bottom)
      const HOLE_L = parseInt(this.$refs.block.$el.children[1].getBoundingClientRect().left)

      let isGameOver = false

      if ((BIRD_B < HOLE_T || BIRD_T > HOLE_B) && (BIRD_R > HOLE_L && BIRD_L < HOLE_R)) {
        isGameOver = true
      }

      if (BIRD_B >= 672) {
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

  .bird {
    z-index: 11;
    transition: top 0.001s ease-in-out;

    &.isDead {
      transition: top 0.5s ease-in;
      top: 592px !important;
    }
  }
}
</style>
