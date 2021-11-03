<!-- 기본 구조 : template(=html), script, style -->
<template> 
  <h1 @click="updateMessage">
    {{ message }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
  <input
    v-model="message"
    type="text" />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {

  },
  computed: {
    // ...mapState('모듈 이름', [배열 데이터])
    // mapState는 두 개 이상의 state를 가져올 때 묶어서 가져온다.
    // ...mapState('message', [
    //   'message',
    //   'msg'
    // ]),
    // ...mapGetter도 mapState와 역할이 동일하다.
    ...mapGetters('message', [
      'reversedMessage'
    ]),
    message: {
      get() {
        return this.$store.state.message.message
      },
      set(message) {
        this.$store.commit('message/assignState', {
          message
        })
      }
    }
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
  },
  methods: {
    // ...mapActions도 mapState와 역할이 동일하다.
    // ...mapActions('message', [
    //   'updateMessage'
    // ])
    async updateMessage() {
      const res = await this.$store.dispatch('message/updateMessage');
      console.log(res);
    }
  } 
}
</script>
