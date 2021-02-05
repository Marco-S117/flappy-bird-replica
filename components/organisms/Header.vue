<template>
  <transition name="fade" mode="out-in">
    <header v-show="$route.name !== 'play'">
      <BtnBack class="header-btn btn-back" />
      <AudioPlayer class="header-btn audio-player" />
      <ThemeSwitcher class="header-btn theme-switcher" />
    </header>
  </transition>
</template>

<script>
import AudioPlayer from '@/components/molecules/AudioPlayer'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'
import BtnBack from '@/components/molecules/BtnBack'

export default {
  name: 'Header',
  components: { AudioPlayer, ThemeSwitcher, BtnBack }
}
</script>

<style lang="scss" scoped>
.header-btn {
  position: absolute;
  z-index: 3;
  top: 24px;

  &.btn-back {
    left: 24px;
  }

  &.audio-player {
    right: 24px;
  }

  &.theme-switcher {
    right: 80px;
  }
}

</style>
