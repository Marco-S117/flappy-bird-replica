<template>
  <div>
    <Btn
      @click="onClick"
      action="button"
      :icon="audioEnabled ? 'audio-on': 'audio-off'"
      iconWidth="18"
      iconHeight="18"
      squared
    />
    <audio
      v-if="!!(audioEnabled && audio)"
      crossorigin
      preload="auto"
      @ended="audio = null"
      ref="audio"
    >
      <source :src="current" type="audio/ogg" />
    </audio>
  </div>
</template>

<script>
import Btn from '@/components/atoms/Btn'
import die from '@/assets/audio/die.ogg'
import hit from '@/assets/audio/hit.ogg'
import point from '@/assets/audio/point.ogg'
import swoosh from '@/assets/audio/swoosh.ogg'
import wing from '@/assets/audio/wing.ogg'
import click from '@/assets/audio/click.ogg'

export default {
  components: { Btn },
  name: 'AudioPlayer',
  data () {
    return {
      audioEnabled: true,
      audio: null,
      die,
      hit,
      point,
      swoosh,
      wing,
      click
    }
  },
  mounted () {
    this.$nuxt.$on('play-audio', (audio) => {
      this.audio = audio
      if (this.audioEnabled) {
        this.$nextTick(() => {
          this.$refs.audio.play()
        })
      }
    })
  },
  computed: {
    current () {
      return this[this.audio]
    }
  },
  methods: {
    onClick () {
      this.audioEnabled = !this.audioEnabled
      this.$nuxt.$emit('play-audio', 'click')
    }
  }
}
</script>
