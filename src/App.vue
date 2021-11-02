<!-- 기본 구조 : template(=html), script, style -->
<template> 
  <h1>
    {{ message }}
  </h1>
  <HelloWorld class="active" />
  <TheButton />
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue';
import TheButton from '~/components/TheButton.vue';

export default {
  components: {
    HelloWorld,
    TheButton
  },
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>