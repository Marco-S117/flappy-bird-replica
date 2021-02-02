<template>
  <div class="bird-selector">
    <transition name="fade" mode="out-in">
      <BtnArrow
        v-show="showPrev"
        @click.stop="onPrevClick"
        class="arrow prev"
      />
    </transition>

    <transition :name="`to-${direction}-slide`" mode="out-in">
      <Bird
        :key="colorIndex"
        :color="birdColor"
        class="bird"
      />
    </transition>

    <transition name="fade" mode="out-in">
      <BtnArrow
        v-show="showNext"
        @click.stop="onNextClick"
        class="arrow next"
      />
    </transition>

  </div>
</template>

<script>
import BtnArrow from '@/components/atoms/BtnArrow'
import Bird from '@/components/atoms/Bird'

export default {
  name: 'BirdColorSelector',
  components: { BtnArrow, Bird },
  data () {
    return {
      colorIndex: 0,
      birdColors: ['red', 'blue', 'yellow'],
      direction: ''
    }
  },
  computed: {
    showPrev () {
      return this.colorIndex > 0
    },
    showNext () {
      return this.colorIndex < (this.birdColors.length - 1)
    },
    birdColor () {
      console.log(this.birdColors[this.colorIndex], this.colorIndex)
      return this.birdColors[this.colorIndex]
    }
  },
  methods: {
    onPrevClick () {
      if (this.colorIndex > 0) {
        this.colorIndex--
        this.direction = 'left'
      }
    },
    onNextClick () {
      if (this.colorIndex < (this.birdColors.length - 1)) {
        this.colorIndex++
        this.direction = 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bird-selector {
  position: relative;
  width: 300px;
  height: 50px;
  margin: 100px 0;
}

.arrow {
  position: absolute;
  z-index: 1;
  top: 0;

  &.prev {
    left: 0;
    transform: rotate(-90deg);
  }

  &.next {
    right: 0;
    transform: rotate(90deg);
  }
}

.bird {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
