<template>
  <section class="cards-advantages content">
    <a-row :gutter="16">
      <a-col v-for="(item, index) in items" :key="index" :span="8">
        <a-card :title="item.title" :bordered="false">
          <p>{{ item.content }}</p>
        </a-card>
      </a-col>
    </a-row>
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
