<template>
  <div class="gamescore-container absolute">
    <p class="score">{{ score }}</p>
  </div>
</template>

<script>
export default {
  name: 'Gamescore',
  props: {
    score: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.gamescore-container {
  z-index: 20;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);

  .score {
    font-size: 84px;
    line-height: 0.6;
  }
}
</style>
