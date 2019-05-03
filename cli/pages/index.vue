<template>
  <main>
    <div class="content">
      <el-row type="flex" :gutter="5" class="promo">
        <el-col :sm="24" :md="16" class="promo__text">
          <h1>{{ $t("pages.index.promo.title") }}</h1>
          <p>{{ $t("pages.index.promo.text") }}</p>
        </el-col>
        <el-col :sm="24" :md="8">
          <svg-spot svg-id="#icon-rocket-color-1" color="#1A2B63" />
        </el-col>
      </el-row>
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
import SvgSpot from '../components/Figures/SvgSpot'
import SvgTransition from '../components/Figures/SvgTransition'
import ParCardAdvantages from '../components/UI/CardsAdvantages'

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
