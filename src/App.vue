<!-- 기본 구조 : template(=html), script, style -->
<template> 
  <h1>{{ message }}</h1>
  <TextField message="BOMI" :count="count" />
  <button @click="count += 1">Increase</button>
</template>

<script>
import TextField from '~/components/TextField';

export default {
  components: {
    TextField
  },
  data() {
    return {
      message: 'Hello Vue SFC',
      count: 7
    }
  }
}
</script>