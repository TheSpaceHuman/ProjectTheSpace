<template>
  <div class="app-layout">
    <!--  svg-sprite  -->
    <nuxt-loading />
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '../components/Navigation/TheHeader'
import MainFooter from '../components/Navigation/TheFooter'
import NuxtLoading from '../.nuxt/components/nuxt-loading'

export default {
  components: {
    NuxtLoading,
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">

</style>
