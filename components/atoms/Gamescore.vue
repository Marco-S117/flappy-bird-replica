<template>
  <div class="gamescore-container absolute">
    <div class="score absolute center">
      <!-- TO DO: Spostare punteggio in alto a SX con icona moneta -->
      <h1 class="score">{{ score }}</h1>
    </div>
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
  top: 15%;
  left: 50%;
  transform: translate(-15%, -50%);

  .score {
    font-size: 120px;
  }
}
</style>
