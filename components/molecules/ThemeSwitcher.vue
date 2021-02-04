<template>
  <div class="theme-switcher">
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

<style lang="scss" scoped>
.theme-switcher {
  position: absolute;
  z-index: 3;
  top: 20px;
  right: 80px;
}
</style>
