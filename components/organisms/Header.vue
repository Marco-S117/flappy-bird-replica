<template>
  <transition name="fade" mode="out-in">
    <header v-show="$route.name !== 'play'">
      <AudioPlayer />
      <ThemeSwitcher />
    </header>
  </transition>
</template>

<script>
import AudioPlayer from '@/components/molecules/AudioPlayer'
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher'

export default {
  name: 'Header',
  components: { AudioPlayer, ThemeSwitcher }
}
</script>

<style>

</style>
