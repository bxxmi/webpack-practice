<!-- 기본 구조 : template(=html), script, style -->
<template> 
  <h1>
    {{ message }}
  </h1>
  <HelloWorld class="active" />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>