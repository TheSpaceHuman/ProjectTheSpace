<template>
  <section>
    <a-row>
      <a-col :span="12">
        <p>Counter {{ $store.state.counter }}</p>
      </a-col>
      <a-col :span="12">
        <a-button type="primary" @click="$store.dispatch('increment')">
          Increment
        </a-button>
        <a-button type="danger" @click="$store.dispatch('decrement')">
          Decrement
        </a-button>
      </a-col>
    </a-row>
  </section>
</template>

<script>
export default {
  name: 'TestsComponent'
}
</script>

<style>

</style>
