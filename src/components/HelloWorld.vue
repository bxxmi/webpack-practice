<template>
  <div>
    Hello World
  </div>
  <div v-bind="$attrs">
    Hello World
  </div>
</template>

<script>
import sample from '~/mixins/sample.js';

export default {
  mixins: [sample],
  // 속성 자동 상속 방지
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
div {
  &.active {
    color: red;
  }
}
</style>