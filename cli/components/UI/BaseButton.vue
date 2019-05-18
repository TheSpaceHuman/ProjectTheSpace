<template>
  <button class="btn-base">
    <slot />
  </button>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/utils/vars.scss";
.btn-base {
  border: 2px solid $primary-color;
  color: $dark-color;
  background-color: $light-color;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  padding: 8px 15px;
  display: inline-block;
  transition: color 0.5s, background-color 0.5s;
}
.btn-base:hover, .btn-base:active {
  color: $light-color;
  background: $primary-color;
}
</style>
