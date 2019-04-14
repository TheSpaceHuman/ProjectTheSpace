<template>
  <div class="app-layout">
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">

</style>
