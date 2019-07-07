<template>
  <header id="header" class="header">
    <div class="main-header_logo">
      <nuxt-link :to="localePath('index')" class="main-menu_link">
        <svg class="main-header_logo_svg">
          <use xlink:href="#icon-atom-3" />
        </svg>
      </nuxt-link>
    </div>
    <nav class="main-menu">
      <ul class="main-menu__items">
        <li v-for="item in menuItems" :key="item.key" class="main-menu__item">
          <nuxt-link
            :to="localePath(item.link)"
            class="main-menu__link"
            :exact="item.exact"
          >
            <svg class="icon">
              <use :xlink:href="'#icon-' + item.icon" />
            </svg>
            {{ item.title }}
          </nuxt-link>
          <ul class="main-menu__items__submenu animated flashIn" v-if="item.children">
            <li class="main-menu__item__submenu" v-for="subItem in item.children" :key="subItem.key">
              <nuxt-link
                :to="localePath(subItem.link)"
                class="main-menu__link__submenu"
              >
                {{ subItem.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      menuItems: [
        { title: this.$t('navigation.index.title'), link: { name: 'index' }, icon: 'home', key: '1', exact: true },
        { title: this.$t('navigation.blog.title'), link: { name: 'blog' }, icon: 'list_alt', key: '2', exact: false },
        {
          title: this.$t('navigation.projects.title'),
          link: { name: 'projects' },
          icon: 'web',
          key: '3',
          exact: false,
          children: [
            { title: this.$t('navigation.projects.children.todoList'), link: { name: 'projects-todo-list' }, key: '3-1' },
            { title: this.$t('navigation.projects.children.passwordManager'), link: { name: 'projects-password-manager' }, key: '3-2' },
            { title: this.$t('navigation.projects.children.chat'), link: { name: 'projects-chat' }, key: '3-3' }
          ]
        },
        { title: this.$t('navigation.login'), link: { name: 'login' }, icon: 'input', key: '4', exact: false }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";
@import "@/assets/scss/modules/header.scss";
</style>
