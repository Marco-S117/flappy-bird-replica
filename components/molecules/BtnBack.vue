<template>
  <transition name="fade" mode="out-in">
    <div v-show="$route.name !== 'index'">
      <Btn
        action="nuxt-link"
        to="/"
        icon="arrow"
        iconWidth="18"
        iconHeight="18"
        squared
      />
    </div>
  </transition>
</template>

<script>
import Btn from '../atoms/Btn'

export default {
  components: { Btn }
}
</script>
