<!-- 기본 구조 : template(=html), script, style -->
<template> 
  <!-- <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
  <input
    v-model="message"
    type="text" /> -->
  <!-- <TheHeader /> -->
  <!-- <input
    v-model="searchText"
    type="text"
    @keyup.enter="fetchMovie" /> -->
  <!-- <div
    v-for="movie in movies"
    :key="movie.imdbID"
    @click="moveTo(movie.imdbID)">
    {{ movie.Title }}  
  </div>
  <RouterView /> -->
  <TheModal
    v-model="isShow">
    <template #activator="{ attrs }">
      <!-- button v-bind="{ onclick: onModal }"과 동일 -->
      <button v-bind="attrs">
        On Modal
      </button>
    </template>
    <template #default>
      <h1>Hello Modal</h1>
      <button @click="isShow = false">
        닫기!!!
      </button>
    </template>
  </TheModal>
  <UserName
    v-for="user in users"
    :key="user.id" 
    :user="user" />
</template>

<script>
import axios from 'axios';
// import TheHeader from '~/components/TheHeader';
import UserName from '~/components/UserName.vue';
// json 파일 가져오기
import names from '~/data/names.json';

export default {
  components: {
    UserName
  },
  data() {
    return {
      // searchText: '',
      // movies: []
      users: names,
      isShow: false
    }
  },
  methods: {
    async fetchMovies() {
      const { data } = await axios.get(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.searchText}`);
      this.movies = data.Search
    },
    moveTo(id) {
      this.$router.push(`/movies/${id}`);
    }
  }
}
// import { mapGetters } from 'vuex';

// export default {
//   data() {

//   },
//   computed: {
    // ...mapState('모듈 이름', [배열 데이터])
    // mapState는 두 개 이상의 state를 가져올 때 묶어서 가져온다.
    // ...mapState('message', [
    //   'message',
    //   'msg'
    // ]),
    // ...mapGetter도 mapState와 역할이 동일하다.
    // ...mapGetters('message', [
    //   'reversedMessage'
    // ]),
    // message: {
    //   get() {
    //     return this.$store.state.message.message
    //   },
    //   set(message) {
    //     this.$store.commit('message/assignState', {
    //       message
    //     })
    //   }
    // }
    // message() {
    //   // state와 message사이에 index.js 에서 지정한 모듈 이름 삽입
    //   return this.$store.state.message.message
    // },
    // msg() {
    //   return this.$store.state.message.msg
    // },
    // reversedMessage() {
    //   // getters에서는 모듈을 다음과 같이 작성한다.
    //   return this.$store.getters['message/reversedMessage']
    // }
  // },
  // methods: {
    // ...mapActions도 mapState와 역할이 동일하다.
    // ...mapActions('message', [
    //   'updateMessage'
    // ])
//     async updateMessage() {
//       const res = await this.$store.dispatch('message/updateMessage');
//       console.log(res);
//     }
//   } 
// }
</script>
