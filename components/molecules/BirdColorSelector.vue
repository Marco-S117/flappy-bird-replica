<template>
  <transition name="selector-appear" mode="out-in" appear>
    <div class="bird-selector">
      <transition name="fade" mode="out-in">
        <BtnWithIcon
          v-show="showPrev"
          action="button"
          icon="arrow"
          iconWidth="24"
          iconHeight="24"
          squared
          @click.stop="onPrevClick"
          class="arrow prev"
        />
      </transition>
      <transition :name="`to-${direction}-slide`" mode="out-in">
        <Bird
          :key="colorIndex"
          :color="birdColor"
          state="midflap"
        />
      </transition>
      <transition name="fade" mode="out-in">
        <BtnWithIcon
          v-show="showNext"
          action="button"
          icon="arrow-reverse"
          iconWidth="24"
          iconHeight="24"
          squared
          @click.stop="onNextClick"
          class="arrow next"
        />
      </transition>
    </div>
  </transition>
</template>

<script>
import BtnWithIcon from '@/components/atoms/BtnWithIcon'
import Bird from '@/components/atoms/Bird'

export default {
  name: 'BirdColorSelector',
  components: { BtnWithIcon, Bird },
  data () {
    return {
      colorIndex: 0,
      birdColors: ['red', 'blue', 'yellow'],
      direction: ''
    }
  },
  mounted () {
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
    onPrevClick (e) {
      if (this.colorIndex > 0 && !e.target.classList.contains('clicked')) {
        this.colorIndex--
        this.direction = 'left'
        $nuxt.$emit('play-audio', 'wing')
      }
    },
    onNextClick (e) {
      if (this.colorIndex < (this.birdColors.length - 1) && !e.target.classList.contains('clicked')) {
        this.colorIndex++
        this.direction = 'right'
        $nuxt.$emit('play-audio', 'wing')
      }
    }
  },
  watch: {
    colorIndex (index) {
      this.$root.birdColor = this.birdColors[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.selector-appear-enter-active,
.selector-appear-leave-active {
  transition: all 0.2s;
  transition-delay: 1s;
}

.selector-appear-enter,
.selector-appear-leave-to {
  opacity: 0;
}

.to-left-slide-enter-active,
.to-left-slide-leave-active {
  transition: all 0.4s;
}

.to-left-slide-enter {
  opacity: 0;
  top: 0;
  left: 10%;
  transform: translateX(-10%) scale(0);
}
.to-left-slide-leave-to {
  opacity: 0;
  top: 0;
  left: 90%;
  transform: translateX(-90%) scale(0);
}

.to-right-slide-enter-active,
.to-right-slide-leave-active {
  transition: all 0.4s;
}
.to-right-slide-enter {
  opacity: 0;
  top: 0;
  left: 90%;
  transform: translateX(-90%) scale(0);
}

.to-right-slide-leave-to {
  opacity: 0;
  top: 0;
  left: 10%;
  transform: translateX(-10%) scale(0);
}

.bird-selector {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 75px 0;
}

.arrow {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }
}
</style>
