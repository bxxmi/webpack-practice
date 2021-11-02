<template>
  <button @click="log">
    <slot></slot>
    <div>{{ $store.state.bomi }}</div>
  </button>
</template>

<script>
import sample from '~/mixins/sample.js';

export default {
  mixins: [sample],
  methods: {
    log() {
      console.log(this.sample);
    }
  }
}
</script>
