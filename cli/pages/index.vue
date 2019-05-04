<template>
  <main>
    <div class="content">
      <el-row type="flex" :gutter="5" class="promo">
        <el-col :sm="24" :md="16" class="promo__text">
          <h1>{{ $t("pages.index.promo.title") }}</h1>
          <p>{{ $t("pages.index.promo.text") }}</p>
        </el-col>
        <el-col :sm="24" :md="8">
          <svg-spot svg-id="#icon-atom-3" color="#f9f871" />
        </el-col>
      </el-row>
    </div>
    <svg-transition color="#f9f871">
      <template slot="title">
        {{ $t('pages.index.strip1.title') }}
      </template>
      <p>{{ $t('pages.index.strip1.text') }}</p>
      <p>{{ $t('pages.index.strip1.subText') }}</p>
    </svg-transition>
    <card-advantages :items="cardItems" />
  </main>
</template>

<script>
import SvgSpot from '../components/Figures/SvgSpot'
import SvgTransition from '../components/Figures/SvgTransition'
import CardAdvantages from '../components/UI/CardsAdvantages'

export default {
  components: {
    SvgSpot,
    SvgTransition,
    CardAdvantages
  },
  data() {
    return {
      cardItems: [
        { title: this.$t('pages.index.technologies.html.title'), content: this.$t('pages.index.technologies.html.text'), icon: '#icon-html-logo' },
        { title: this.$t('pages.index.technologies.css.title'), content: this.$t('pages.index.technologies.css.text'), icon: '#icon-css-logo' },
        { title: this.$t('pages.index.technologies.js.title'), content: this.$t('pages.index.technologies.js.text'), icon: '#icon-js-logo' },
        { title: this.$t('pages.index.technologies.vue.title'), content: this.$t('pages.index.technologies.vue.text'), icon: '#icon-vue-logo' },
        { title: this.$t('pages.index.technologies.nuxt.title'), content: this.$t('pages.index.technologies.nuxt.text'), icon: '#icon-nuxt-logo' },
        { title: this.$t('pages.index.technologies.laravel.title'), content: this.$t('pages.index.technologies.laravel.text'), icon: '#icon-laravel-logo' }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss">
.promo {
  padding-top: 30px;
  padding-bottom: 20px;
}
.promo__text {
  h1 {
    font-size: 55px;
    font-weight: 700;
  }
  p {
    font-size: 32px;
    font-weight: 300;
  }
}
</style>
