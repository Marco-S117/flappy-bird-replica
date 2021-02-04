<template>
  <div
    @click="onClick"
    class="play-page-container absolute"
  >
    <Gamescore :score="score" />
    <Bird
      v-if="!!$root.birdColor"
      :color="$root.birdColor"
      :state="birdState"
      ref="bird"
      class="isPlaying-bird"
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
      birdState: 'downflap' // 'downflap', midflap, 'upflap'
    }
  },
  methods: {
    addGravity () {
      setInterval(() => {
        const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))

        if (!this.isJumping) {
          this.$refs.bird.$el.style.top = (BIRD_TOP + this.$root.settings.grativy) + 'px'
        }
      }, 20)
    },
    onClick () {
      const BIRD_TOP = parseInt(window.getComputedStyle(this.$refs.bird.$el).getPropertyValue('top'))
      this.$refs.bird.$el.style.top = (BIRD_TOP - this.$root.settings.jump) + 'px'

      this.$nuxt.$emit('play-audio', 'wing')
      this.isJumping = true
      this.birdState = 'upflap'

      setTimeout(() => {
        this.isJumping = false
        this.birdState = 'downflap'
      }, 100)
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
