<template>
  <main class="content">
    <a-row>
      <a-col :span="16">
        <h1>Project The Space</h1>
        <p>Hello to my simple site visitors!</p>
        <p>My name is Artem, I'm a web developer.</p>
        <p>I like to implement good web projects.</p>
        <p>
          If you need advice or assistance in the implementation of your project, I will be happy to help
          <a-icon type="smile" />
        </p>
      </a-col>
      <a-col :span="8">
        <icon-spot/>
      </a-col>
    </a-row>
  </main>
</template>

<script>
import IconSpot from '~/components/IconSpot'

export default {
  name: 'PageHome',
  components: {
    IconSpot
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
