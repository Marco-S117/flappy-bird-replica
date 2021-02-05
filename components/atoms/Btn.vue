<template>
  <component
    :is="action"
    :to="action !== 'button' ? to : null"
    v-on="$listeners"
    :class="{ 'squared': squared }"
    class="btn"
  >
    <div
      v-if="label"
      class="label"
    >
      {{ label }}
    </div>
    <img
      v-if="!!icon"
      :src="setIcon"
      :width="`${iconWidth}px`"
      :height="`${iconHeight}px`"
      class="absolute center"
    >
  </component>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    action: { type: String },
    to: { type: String },
    label: { type: String },
    icon: { type: String },
    iconWidth: { type: [String, Number] },
    iconHeight: { type: [String, Number] },
    squared: { type: Boolean }
  },
  computed: {
    setIcon () {
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
  border-bottom: 4px solid #543847;
  text-decoration: none;
  background: linear-gradient(0deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 100%);

  &.squared {
    width: 40px;
    height: 40px;
  }

  .label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    font-size: 18px;
    color: #543847;
    text-shadow: none;
    letter-spacing: 1px;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

}
</style>
