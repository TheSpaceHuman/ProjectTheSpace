<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item, i) in routers" :key="i">
      <nuxt-link :to="item.link">
        {{ item.title }}
      </nuxt-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'ParBreadcrumb',
  data() {
    return {}
  },
  computed: {
    routers() {
      return this.$store.state.mainNavItems
    }
  }
}
</script>

<style scoped>
.ant-breadcrumb {
  margin-top: 20px;
  margin-bottom: 20px;
}
.my-breadcrumb {
  margin: 16px 0;
}
</style>
