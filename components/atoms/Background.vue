<template>
  <div class="bg-container absolute center">
    <div
      :style="{ backgroundImage: `url(${BgImageNight})` }"
      class="landscape"
    >
    </div>
    <div
      :style="{ backgroundImage: `url(${BgImageFloor})` }"
      class="base"
    >
    </div>
  </div>
</template>

<script>
import BgImageDay from '@/assets/sprites/background-day.png'
import BgImageNight from '@/assets/sprites/background-night.png'
import BgImageFloor from '@/assets/sprites/base.png'

export default {
  name: 'Background',
  data () {
    return {
      BgImageDay,
      BgImageNight,
      BgImageFloor
    }
  }
}
</script>

<style scoped lang="scss">
.bg-container {
  z-index: -1;
  width: 100%;
  height: 100%;

  div {
    background-size: contain;
    background-repeat: repeat-x;
    width: 100%;

    &.landscape {
      height: 75%;
    }

    &.base {
      height: 25%;

      @media screen and (max-width: 420px) {
        background-size: cover;
      }
    }
  }
}
</style>
