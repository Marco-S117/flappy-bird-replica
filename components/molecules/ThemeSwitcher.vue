<template>
  <div>
    <BtnWithIcon
      @click="onClick"
      action="button"
      :icon="nightMode ? 'sun': 'moon'"
      iconWidth="30"
      iconHeight="30"
      squared
    />
  </div>
</template>

<script>
import BtnWithIcon from '@/components/atoms/BtnWithIcon'

export default {
  components: { BtnWithIcon },
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
