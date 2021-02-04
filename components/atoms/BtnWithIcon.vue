<template>
  <component
    :is="action"
    :to="action !== 'button' ? to : null"
    v-on="$listeners"
    :class="{ 'squared': squared }"
    class="btn"
  >
    <img
      :src="image"
      :width="`${iconWidth}px`"
      :height="`${iconHeight}px`"
      class="absolute center"
    >
  </component>
</template>

<script>
export default {
  name: 'BtnWithImage',
  props: {
    action: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: true
    },
    iconWidth: {
      type: [String, Number],
      required: true
    },
    iconHeight: {
      type: [String, Number],
      required: true
    },
    squared: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    image () {
      return require(`@/assets/svg/${this.icon}.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-block;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #543847;
  text-decoration: none;
  background: linear-gradient(0deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%);

  &.squared {
    width: 50px;
  }
}
</style>
