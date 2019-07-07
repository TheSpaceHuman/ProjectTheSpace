<template>
  <main id="main" class="main">
    <div class="container">
      <el-row type="flex" :gutter="5" class="promo">
        <el-col :sm="24" :md="16" class="promo__text">
          <h1>Проекты</h1>
          <p>Подборка мох полседних прооектов</p>
        </el-col>
        <el-col :sm="24" :md="8">
          <svg-spot svg-id="#icon-web" color="#3F51B5" />
        </el-col>
      </el-row>
    </div>
  </main>
</template>

<script>
import SvgSpot from '@/components/Figures/SvgSpot'

export default {
  components: {
    SvgSpot
  }
}
</script>

<style>

</style>
