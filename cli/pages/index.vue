<template>
  <main>
    <div class="content">
      <a-row :gutter="5" class="promo">
        <a-col :sm="24" :md="16" class="promo__text">
          <h1>Project The Space</h1>
          <h2>{{ $t("welcome") }}</h2>
          <h3>{{ $t("cards.advantages.html") }}</h3>
          <!--<nuxt-link :to="switchLocalePath('en')">
            English
          </nuxt-link>
          <nuxt-link :to="switchLocalePath('ru')">
            Russian
          </nuxt-link>-->
          <p>Hello to my simple site visitors!</p>
          <p>My name is Artem, I'm a web developer.</p>
          <p>I like to implement good web projects.</p>
          <p>
            If you need advice or assistance in the implementation of your project, I will be happy to help
            <a-icon type="smile" />
          </p>
        </a-col>
        <a-col :sm="24" :md="8">
          <svg-spot svg-id="#icon-rocket-color-1" color="#1A2B63" />
        </a-col>
      </a-row>
    </div>
    <svg-transition color="#1A2B63">
      <template slot="title">
        Experience
      </template>
      <p>My work experience is over 3 years in this field.</p>
      <p>I have already seen a lot of projects and released them in production.</p>
    </svg-transition>
    <par-card-advantages :items="cardItems" />
  </main>
</template>

<script>
import SvgSpot from '../components/svg/SvgSpot'
import SvgTransition from '../components/svg/SvgTransition'
import ParCardAdvantages from '../components/partials/ParCardsAdvantages'

export default {
  components: {
    SvgSpot,
    SvgTransition,
    ParCardAdvantages
  },
  data() {
    return {}
  },
  computed: {
    cardItems() {
      return this.$store.getters.getCardsAdvantages
    }
  },
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
