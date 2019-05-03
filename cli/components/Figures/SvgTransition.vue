<template>
  <div class="wrapper-transition-svg">
    <div class="transition-svg-start">
      <svg class="svg-cta-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" :fill="color" />
      </svg>
    </div>
    <div class="transition-svg-end">
      <div class="transition-svg-end_content" :style="{ backgroundColor: color }">
        <h2 class="transition-svg-end_content_title">
          <slot name="title">
            Title
          </slot>
        </h2>
        <div class="transition-svg-end_content_text">
          <slot>Content</slot>
        </div>
      </div>
      <div class="transition-svg-end">
        <svg class="svg-cta-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,70 C30,130 70,50 100,70 L100,100 0,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvgTransition',
  props: {
    color: {
      type: [String, Number],
      default: '#1890ff'
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.wrapper-transition-svg {}
.transition-svg-start {
  position: relative;
  padding-top: 100px;
}
.transition-svg-end {
  position: relative;
}
.transition-svg-end_content {
  /*background-color: red;*/
  padding: 30px 0 100px;
  color: #fff;
}
.transition-svg-end_content_title {
  font-size: 38px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}
.transition-svg-end_content_text {
  font-size: 26px;
  font-weight: 400;
  text-align: center;
}

svg.svg-cta-top {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 222;
}
svg.svg-cta-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 200px;
  z-index: 222;
}
</style>
