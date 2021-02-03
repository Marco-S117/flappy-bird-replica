<template>
  <img :src="Logo" class="logo">
</template>

<script>
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'Logo',
  data () {
    return {
      Logo
    }
  }
}
</script>

<style lang="scss" scoped>
img.logo {
  pointer-events: none;
  width: 100%;
  max-width: 450px;
  height: auto;

  @media screen and (max-width: 640px) {
    max-width: 300px;
  }
}
</style>
