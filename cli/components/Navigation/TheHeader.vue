<template>
  <header id="header" class="header">
    <div class="main-header_logo">
      <nuxt-link :to="localePath('index')" class="main-menu_link">
        <svg class="main-header_logo_svg">
          <use xlink:href="#icon-atom-3" />
        </svg>
      </nuxt-link>
    </div>
    <el-menu
      class="main-menu"
      mode="horizontal"
      background-color="#2a272a"
      text-color="#fff"
      active-text-color="#3F51B5"
    >
      <template v-for="item in menuItems">
        <el-menu-item
          v-if="!item.children"
          :key="item.key"
          :index="item.key"
        >
          <nuxt-link
            :to="localePath(item.link)"
            class="main-menu_link"
          >
            <svg class="icon">
              <use :xlink:href="'#icon-' + item.icon" />
            </svg>
            {{ item.title }}
          </nuxt-link>
        </el-menu-item>
        <el-submenu v-if="item.children" :key="item.key" :index="item.key" class="main-menu_link">
          <template slot="title">
            <svg class="icon">
              <use :xlink:href="'#icon-' + item.icon" />
            </svg>
            {{ item.title }}
          </template>
          <el-menu-item v-for="childItem in item.children" :key="childItem.key" :index="childItem.key">
            <nuxt-link :to="localePath(childItem.link)" class="main-submenu_link">
              {{ childItem.title }}
            </nuxt-link>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </header>
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
@import "@/assets/scss/utils/vars.scss";
.header {
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: $gray-color;
}
.header__logo {}
.header__logo_icon {
  width: 40px;
  height: 40px;
  margin: 10px 20px;
  display: block;
  fill: $light-color;
  &:hover {
    fill: $primary-color;
  }
}
.header__menu {
  margin-left: auto;
  height: 100%;
}
.header__menu-list {
  display: flex;
  font-size: 16px;
  font-weight: 400;
}
.header__menu-item {
  position: relative;
  color: $light-color;
  padding: 20px 18px;
  border-bottom: 2px solid transparent;
  transition: color 0.5s, background-color 0.5s, border 0.5s;
  &:hover, &:active {
    background-color: $gray-active-color;
  }
  &:hover .header__submenu {
    display: flex;
  }
}
.header__menu-item.exact-active-link {
  color: $primary-color;
  border-bottom-color: $primary-color;
}
.header__submenu {
  position: absolute;
  top: 100%;
  left: -40px;
  right: -40px;
  background-color: $gray-color;
  display: none;
  flex-direction: column;
  border-radius: 8px;
  z-index: 5;
  padding: 20px 0;
  transition: color 0.5s, background-color 0.5s, border 0.5s;
}
.header__submenu-item {
  padding: 5px 10px;
  text-align: left;
  color: $light-color;
  border-bottom: 2px solid transparent;
  margin-bottom: 8px;
  &:hover, &:active {
    color: $light-color;
    background-color: $gray-active-color;
  }
}
.header__submenu-item.exact-active-link {
  border-bottom-color: $primary-color;
  color: $primary-color;
}
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
  .icon {
    width: 20px;
    height: 20px;
    fill: $light-color;
    margin-right: 5px;
  }
}
.main-menu_link.exact-active-link,
.main-menu_link.is-active {
  .icon {
    fill: $primary-color;
  }
}
.el-menu-item {
  /*padding: 0;*/
}
.el-header {
  padding: 0;
}
.main-menu {
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.main-header {}
.el-submenu {
  /*padding: 0;*/
}
.main-submenu_link {
  display: block;
}
.main-submenu_link.exact-active-link {
  color: $primary-color;
}
.main-submenu_link:hover {
  color: inherit;
}
.main-header_logo {
  margin-right: auto;
}
.main-header_logo:hover .main-header_logo_svg {
  fill: $primary-color;
}
.main-header_logo_svg {
  fill: $light-color;
  display: block;
  width: 30px;
  height: 30px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu-item.is-active {
  color: #fff;
}
.main-menu_link {
  color: $light-color!important;
  border-bottom-color: transparent!important;
  .icon {
    fill: $light-color!important;
  }
}
.exact-active-link {
  color: $primary-color!important;
  border-bottom-color: $primary-color!important;
  .icon {
    fill: $primary-color!important;
  }
}
.el-submenu.is-active {
  .icon {
    fill: $primary-color!important;
  }
 }
</style>
