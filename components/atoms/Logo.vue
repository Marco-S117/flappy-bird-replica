<template>
  <transition name="logo-appear" mode="out-in" appear>
    <div class="logo">
      <img :src="Logo">
      <hr>
      <p>REPLICA</p>
    </div>
  </transition>
</template>

<script>
import Logo from '@/assets/svg/logo.svg'

export default {
  name: 'Logo',
  data () {
    return {
      Logo
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-appear-enter-active,
.logo-appear-leave-active {
  transition: all 1s;

  img {
    transition: all 0.2s;
    transition-delay: 0.4s;
  }

  hr {
    transition: all 0.2s;
    transition-delay: 0.6s;
  }

  p {
    transition: all 0.2s;
    transition-delay: 0.8s;
  }
}

.logo-appear-enter,
.logo-appear-leave-to {
  img,
  hr,
  p {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.logo {
  img {
    pointer-events: none;
    width: 100%;
    height: auto;
  }

  hr {
    width: 130px;
    height: 0;
    margin: 12px auto;
    border: 1px solid #ffffff;
  }

  p {
    text-align: center;
    font-size: 22px;
  }
}
</style>
