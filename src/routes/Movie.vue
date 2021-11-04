<template>
  <h1>Movie Page</h1>
  <RouterView name="MovieHeader" />
  <RouterView
    :title="title"
    :poster="poster" />
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      poster: ''
    }
  },
  // watch : 반응형 데이터 감시 목적
  watch: {
    $$route() {
      this.fetchMovie()
    }
  },
  created() {
    this.fetchMovie()
  },
  methods: {
    async fetchMovie() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&i=${this.$route.params.id}`)
      console.log(data);
      this.title = data.Title;
      this.poster = data.Poster;
    }
  }
}
</script>