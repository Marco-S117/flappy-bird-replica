<template>
  <div class="game-over-modal absolute center full">
    <div class="overlay absolute center full"></div>
    <div class="game-over-modal-content">
      <img :src="GameOverPng" />
      <p>Score: {{ score }}</p>
      <div class="buttons">
        <Btn
          action="nuxt-link"
          to="/"
          label="home"
        />
        <Btn
          action="nuxt-link"
          to="/scores"
          label="scores"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GameOverPng from '@/assets/sprites/gameover.png'
import Btn from '@/components/atoms/Btn'

export default {
  name: 'GameOverModal',
  components: { Btn },
  props: {
    score: { type: Number }
  },
  data () {
    return {
      GameOverPng
    }
  }
}
</script>

<style lang="scss" scoped>
.game-over-modal {
  z-index: 100;

  .overlay {
    background-color: rgba(55, 55, 55, 0.4);
    z-index: -1;
  }

  .game-over-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
      width: 275px;
      height: auto;
    }
  }

  p {
    width: 100%;
    padding: 40px 20px;
    text-align: center;
  }

  .buttons > * {
    margin: 0 6px;
  }
}
</style>
