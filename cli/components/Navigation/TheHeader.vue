<template>
  <el-header class="main-header">
    <el-menu
      :default-active="activeIndex"
      class="main-menu"
      mode="horizontal"
      background-color="#2a272a"
      text-color="#fff"
      active-text-color="#f9f871"
    >
      <div class="main-header_logo">
        <nuxt-link :to="localePath('index')" class="main-menu_link">
          <svg class="main-header_logo_svg">
            <use xlink:href="#icon-atom-3" />
          </svg>
        </nuxt-link>
      </div>
      <template v-for="(item, index) in menuItems">
        <el-menu-item v-if="!item.children" :key="index" :index="item.key">
          <nuxt-link :to="localePath(item.link)" class="main-menu_link">
            <i class="material-icons">{{ item.icon }}</i>
            {{ item.title }}
          </nuxt-link>
        </el-menu-item>
        <el-submenu v-if="item.children" :key="index" :index="item.key" class="main-menu_link">
          <template slot="title">
            <i class="material-icons">{{ item.icon }}</i>
            {{ item.title }}
          </template>
          <el-menu-item v-for="(childItem, i) in item.children" :key="i" :index="childItem.key">
            <nuxt-link :to="localePath(childItem.link)" class="main-submenu_link">
              {{ childItem.title }}
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      menuItems: [
        { title: this.$t('navigation.index.title'), link: { name: 'index' }, icon: 'home', key: '1' },
        { title: this.$t('navigation.blog.title'), link: { name: 'blog' }, icon: 'list_alt', key: '2' },
        {
          title: this.$t('navigation.projects.title'),
          link: { name: 'projects' },
          icon: 'web',
          key: '3',
          children: [
            { title: this.$t('navigation.projects.children.todoList'), link: { name: 'projects-todo-list' }, key: '3-1' },
            { title: this.$t('navigation.projects.children.passwordManager'), link: { name: 'projects-password-manager' }, key: '3-2' },
            { title: this.$t('navigation.projects.children.chat'), link: { name: 'projects-chat' }, key: '3-3' }
          ]
        },
        { title: this.$t('navigation.userLabel.login'), link: { name: 'login' }, icon: 'input', key: '4' }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.main-menu_link {
  display: block;
  text-decoration: none!important;
  padding-left: 20px;
  padding-right: 20px;
  i {
    padding-right: 5px;
    padding-left: 5px;
    color: inherit;
  }
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
.el-submenu {
  padding: 0;
}
.main-submenu_link {
  display: block;
}
.main-submenu_link:hover {
  color: inherit;
}
.main-header_logo {
  margin-right: auto;
}
.main-header_logo:hover .main-header_logo_svg {
  fill: #f9f871;
}
.main-header_logo_svg {
  fill: #fff;
  display: block;
  width: 30px;
  height: 30px;
}
</style>
