<template>
  <section class="cards-advantages content">
      <a-row :gutter="16">
        <a-col :span="8" v-for="(item, index) in items" :key="index">
          <a-card :title="item.title" :bordered=false>
            <p>{{ item.content }}</p>
          </a-card>
        </a-col>
      </a-row>
  </section>
</template>

<script>
export default {
  name: 'ParCardsAdvantages',
  props: ['items']
}
</script>

<style>
.cards-advantages {
  padding-top: 45px;
  padding-bottom: 30px;
}
</style>
