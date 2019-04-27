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
import MainHeader from '../components/blocks/MainHeader'
import MainFooter from '../components/blocks/MainFooter'
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
