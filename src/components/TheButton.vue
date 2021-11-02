<template>
  <button @click="log">
    <slot></slot>
    {{ sample }}
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
