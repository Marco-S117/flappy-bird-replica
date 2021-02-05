<template>
  <transition name="fade" mode="out-in">
    <div v-show="$route.name !== 'index'">
      <BtnWithIcon
        action="nuxt-link"
        to="/"
        icon="arrow"
        iconWidth="24"
        iconHeight="24"
        squared
      />
    </div>
  </transition>
</template>

<script>
import BtnWithIcon from '../atoms/BtnWithIcon'

export default {
  components: { BtnWithIcon }
}
</script>
