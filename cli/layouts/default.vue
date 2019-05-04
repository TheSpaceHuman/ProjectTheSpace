<template>
  <div class="app-layout">
    <!--  svg-sprite  -->
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '../components/Navigation/TheHeader'
import MainFooter from '../components/Navigation/TheFooter'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">

</style>
