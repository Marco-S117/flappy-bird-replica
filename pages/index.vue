<template>
  <div class="home-page-container absolute">
    <Logo />
    <BirdColorSelector />
    <transition name="buttons-appear" mode="out-in" appear>
      <div class="buttons">
        <Btn
          action="nuxt-link"
          to="/play"
          label="play"
          class="btn-play"
        />
        <Btn
          action="nuxt-link"
          to="/scores"
          label="scores"
          class="btn-scores"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo'
import BirdColorSelector from '@/components/molecules/BirdColorSelector'
import Btn from '@/components/atoms/Btn'

export default {
  name: 'HomePage',
  components: { Logo, BirdColorSelector, Btn }
}
</script>

<style lang="scss" scoped>
.buttons-appear-enter-active,
.buttons-appear-leave-active {
  transition: all 1.6s;

  .btn-play,
  .btn-scores {
    transition: all 0.4s;
    transition-delay: 1.2s;
  }
}

.buttons-appear-enter,
.buttons-appear-leave-to {
  .btn-play {
    opacity: 0;
    transform: translateX(-20px);
  }

  .btn-scores {
    opacity: 0;
    transform: translateX(20px);
  }
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
