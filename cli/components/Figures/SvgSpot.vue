<template>
  <figure class="icon-wrapper">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.5 222.83">
      <g data-name="promo vedees">
        <path
          d="M109.17 17.33S92.12 8.62 78.42 36 60.15 55.81 25.13 87s-32 68.51 0 87.54 57.85-3.8 86.78 29.69 76.88 19 86.78-22.08-19.79-70.79.76-110.37-7.61-46.43-35.78-48-43.95-.49-54.5-6.45z"
          :fill="color"
        />
        <path
          d="M127.5 7.33A7.34 7.34 0 1 1 120.17 0a7.34 7.34 0 0 1 7.33 7.33z"
          :fill="color"
          style="animation:bounceIn 12s linear"
        />
        <use :xlink:href="svgId" width="90" x="70" :fill="svgColor" />
        <path
          d="M32 157.89l-10.33 3.79L32 165.43v3.88l-14.76-5.62v-4L32 154.05zM35.32 154.05l14.76 5.61v4l-14.76 5.62v-3.88l10.33-3.75-10.33-3.79z"
          :fill="color"
        />
        <circle
          cx="50.83"
          cy="189.33"
          r="3"
          :fill="color"
          style="animation:bounceIn 12s linear"
        />
      </g>
    </svg>
  </figure>
</template>

<script>
export default {
  name: 'SvgSpot',
  props: {
    svgId: {
      type: String,
      default: '#icon-001-alien'
    },
    color: {
      type: String,
      default: '#737afe'
    },
    svgColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>
