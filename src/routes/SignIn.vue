<template>
  <input
    v-model="id"
    type="text" />
  <input
    v-model="pw"
    type="password" />
  <button @click="signIn">
    로그인
  </button>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    signIn() {
      // 로그인 했음
      // const userToken = axios.post('주소')
      // data : {
      //   id: this.id,
      //   pw: this.pw
      // }
      const userToken = '1234abcd';
      localStorage.setItem('token', userToken);
      this.$router.push('/')
    }
  }
}
</script>