<template>
  <div>
    <Btn
      @click="onClick"
      action="button"
      :icon="nightMode ? 'sun': 'moon'"
      iconWidth="24"
      iconHeight="24"
      squared
    />
  </div>
</template>

<script>
import Btn from '@/components/atoms/Btn'

export default {
  components: { Btn },
  name: 'ThemeSwitcher',
  data () {
    return {
      nightMode: false
    }
  },
  methods: {
    onClick () {
      this.nightMode = !this.nightMode
      this.$nuxt.$emit('toggle-night-mode', this.nightMode)
      this.$nuxt.$emit('play-audio', 'click')
    }
  }
}
</script>
