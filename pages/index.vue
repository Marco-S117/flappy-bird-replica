<template>
  <div class="home-page-container absolute">
    <Logo />
    <BirdColorSelector />
    <transition name="buttons-appear" mode="out-in" appear>
      <div class="buttons">
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
    </transition>
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
.buttons-appear-enter-active,
.buttons-appear-leave-active {
  transition: all 0.2s;
  transition-delay: 1.2s;
}

.buttons-appear-enter,
.buttons-appear-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.home-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 24px;

  .buttons > * {
    margin: 0 6px;
  }
}
</style>
