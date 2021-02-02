<template>
  <div class="home-page-container absolute">
    <Logo />
    <BirdColorSelector />
    <div>
      <BtnWithIcon
        icon="play"
        width="20"
        height="20"
      />
      <BtnWithIcon
        icon="ranking"
        width="30"
        height="30"
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
