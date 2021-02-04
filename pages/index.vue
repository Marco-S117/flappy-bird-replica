<template>
  <div class="home-page-container absolute">
    <Logo />
    <BirdColorSelector />
    <div>
      <BtnWithIcon
        action="nuxt-link"
        to="/play"
        icon="play"
        iconWidth="20"
        iconHeight="20"
      />
      <BtnWithIcon
        action="nuxt-link"
        to="/ranking"
        icon="ranking"
        iconWidth="30"
        iconHeight="30"
      />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import BirdColorSelector from '@/components/molecules/BirdColorSelector'
import BtnWithIcon from '@/components/atoms/BtnWithIcon'

export default {
  name: 'HomePage',
  components: { Logo, BirdColorSelector, BtnWithIcon }
}
</script>

<style lang="scss" scoped>
.home-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>
