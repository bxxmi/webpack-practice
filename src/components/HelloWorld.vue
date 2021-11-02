<template>
  <div>
    Hello World
  </div>
  <div v-bind="$attrs">
    Hello World
  </div>
  <div>
    Hello World
  </div>
  <div>
    Hello World
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style lang="scss" scoped>
div {
  &.active {
    color: red;
  }
}
</style>