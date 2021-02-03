<template>
  <div class="audio-player">
    <btn-with-icon
      @click="audioEnabled = !audioEnabled"
      action="button"
      :icon="audioEnabled ? 'audio-on': 'audio-off'"
      iconWidth="24"
      iconHeight="24"
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
import BtnWithIcon from './BtnWithIcon.vue'
export default {
  components: { BtnWithIcon },
  name: 'AudioPlayer',
  data () {
    return {
      audioEnabled: true,
      audio: null
    }
  },
  mounted () {
    this.$nuxt.$on('play-audio', (audio) => {
      console.log(audio);
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
      return require(`@/assets/audio/${this.audio}.ogg`)
    }
  },
}
</script>

<style lang="scss" scoped>
.audio-player {
  position: absolute;
  z-index: 3;
  top: 20px;
  right: 20px;
}
</style>
