<template>
  <section class="cards-advantages content">
    <el-row type="flex" :gutter="16">
      <el-col v-for="(item, index) in items" :key="index" :span="8">
        <el-card :header="item.title">
          <p>{{ item.content }}</p>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'ParCardsAdvantages',
  props: {
    items: {
      type: Array,
      default: () => [
        { title: 'HTML5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
        { title: 'CSS3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' },
        { title: 'JavaScript', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, laudantium.' }
      ]
    }
  }
}
</script>

<style>
.cards-advantages {
  padding-top: 45px;
  padding-bottom: 30px;
}
</style>
