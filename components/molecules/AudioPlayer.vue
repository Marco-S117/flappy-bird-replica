<template>
  <div>
    <Btn
      @click="onClick"
      action="button"
      :icon="isAudioEnabled ? 'audio-on': 'audio-off'"
      iconWidth="18"
      iconHeight="18"
      squared
    />
  </div>
</template>

<script>
import { Howl, Howler } from 'howler'
import Btn from '@/components/atoms/Btn'
import Sprites from '@/assets/audio/sprites.mp3'

export default {
  components: { Btn },
  name: 'AudioPlayer',
  data () {
    return {
      isAudioEnabled: true,
      Sprites
    }
  },
  mounted () {
    this.$nuxt.$on('play-audio', (audio) => {
      if (this.isAudioEnabled) {
        this.Howl.play(audio)
      }
    })

    this.Howl = new Howl({
      src: [this.Sprites],
      sprite: {
        click: [0, 300],
        die: [320, 1000],
        hit: [1400, 700],
        point: [1900, 1000],
        swoosh: [3150, 1000],
        wing: [5000, 300]
      }
    })
  },
  methods: {
    onClick () {
      this.isAudioEnabled = !this.isAudioEnabled
      this.$nuxt.$emit('play-audio', 'click')
    }
  }
}
</script>
