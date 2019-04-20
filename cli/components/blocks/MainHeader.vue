<template>
  <header class="header ant-layout-header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['1']"
    >
      <a-menu-item
        v-for="item in mainNavItems"
        :key="item.key"
      >
        <nuxt-link :to="item.link">
          <a-icon :type="item.icon" />{{ item.title }}
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {}
  },
  computed: {
    mainNavItems() {
      return this.$store.getters.getMainLinks
    }
  },
  methods: {}
}
</script>

<style lang="scss">

</style>
