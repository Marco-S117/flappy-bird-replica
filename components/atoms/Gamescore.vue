<template>
  <div class="gamescore-container absolute">
    <div class="score absolute center">
      <!-- TO DO: Implemetare punteggio con immagini -->
      <!-- <img
        v-for="number in gamescore"
        :key="number"
        :src="number"
        width="60px"
        height="auto"
      > -->
      <h1 class="flappy-font score">{{ points }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gamescore',
  props: {
    points: {
      type: Number,
      required: false
    }
  },
  data () {
    return {
      score: []
    }
  },
  computed: {
    // TO DO: Implemetare punteggio con immagini
    // gamescore () {
    //   this.points.toString().split('').forEach(n => {
    //     this.score.push(require(`@/assets/sprites/points/${n}.png`))
    //   })

    //   return this.score
    // }
  }
}
</script>

<style lang="scss" scoped>
.gamescore-container {
  z-index: 20;
  top: 15%;
  left: 50%;
  transform: translate(-15%, -50%);

  // .score {
  //   display: flex;
  //   align-items: center;

  //   img {
  //     margin: 0 4px;
  //   }
  // }

  .score {
    font-size: 64px;
  }
}
</style>
