<template>
  <section class="cards-advantages content">
    <el-row type="flex" :gutter="16" style="flex-wrap: wrap;">
      <el-col v-for="(item, index) in items" :key="index" :sm="24" :md="8">
        <div class="el-card is-always-shadow">
          <div class="el-card__header">
            {{ item.title }}
            <svg class="cards-advantages_img">
              <use :xlink:href="item.icon" />
            </svg>
          </div>
          <div class="el-card__body">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'CardsAdvantages',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.cards-advantages {
  padding-top: 45px;
  padding-bottom: 30px;
}
.cards-advantages_img {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  width: 60px;
  max-height: 40px;
}
.el-card__header {
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
