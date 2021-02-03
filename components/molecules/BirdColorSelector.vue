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
  beforeDestroy () {
    this.$root.birdColor = this.birdColors[this.colorIndex]
  },
  computed: {
    showPrev () {
      return this.colorIndex > 0
    },
    showNext () {
      return this.colorIndex < (this.birdColors.length - 1)
    },
    birdColor () {
      return this.birdColors[this.colorIndex]
    }
  },
  methods: {
    onElementClicked (element) {
      element.classList.add('clicked')
      setTimeout(() => {
        element.classList.remove('clicked')
      }, 350)
    },
    onPrevClick (e) {
      if (this.colorIndex > 0 && !e.target.classList.contains('clicked')) {
        this.colorIndex--
        this.direction = 'left'
        this.onElementClicked(e.target)
      }
    },
    onNextClick (e) {
      if (this.colorIndex < (this.birdColors.length - 1) && !e.target.classList.contains('clicked')) {
        this.colorIndex++
        this.direction = 'right'
        this.onElementClicked(e.target)
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
</style>
