<template>
  <div class="app-layout">
    <!--  svg-sprite  -->
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '../components/blocks/MainHeader'
import MainFooter from '../components/blocks/MainFooter'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">

</style>
