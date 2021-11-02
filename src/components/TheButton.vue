<template>
  <button 
    :class="{ 
      [name]: true,
      [size]: true
    }">
    <!-- slot: 하나의 content이다. -->
    <slot>Default Name!</slot>
  </button>
  <slot
    name="label"
    :btnName="name"
    :size="size"></slot>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'md'
    }
  }
}
</script>

<!-- scoped: 현재 컴포넌트라는 범위를 지정 -->
<style scoped lang="scss">
button {
  background: none;
  border: none;
  background-color: gray;
  &.sm {
    font-size: 13px;
  }
  &.lg {
    font-size: 24px;
    padding: 15px;
  }
  &.primary {
  background-color: royalblue;
  }
  &.danger {
  background-color: salmon;
  }
}
</style>