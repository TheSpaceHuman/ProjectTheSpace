<template>
  <el-header class="main-header">
    <el-menu
      :default-active="activeIndex"
      class="main-menu"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="(item, index) in navs" :key="index" :index="item.key">
        <nuxt-link :to="localePath(item.link)" class="main-menu_link">
          {{ item.title }}
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      navs: [
        { title: 'Home', link: { name: 'index' }, icon: 'home', key: '1' },
        { title: 'Blog', link: { name: 'blog' }, icon: 'book', key: '2' },
        { title: 'Projects', link: { name: 'projects' }, icon: 'project', key: '3' },
        { title: 'Login', link: { name: 'login' }, icon: 'login', key: '4' }
      ]
    }
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
.main-menu_link {
  display: block;
  text-decoration: none!important;
  padding-left: 20px;
  padding-right: 20px;
}
.el-menu-item {
  padding: 0;
}
.el-header {
  padding: 0;
}
.main-menu {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.main-header {}
</style>
