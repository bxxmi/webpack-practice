import axios from 'axios';

// 하나의 객체 데이터를 내보낸다.
// 옵션은 써도 그만 안써도 그만
export default {
  install(app, options) {
    const { endpoint } = options;
    // app.config.globalProperties : 전역속성으로 만든다. (this로 접근 가능)
    app.config.globalProperties.$fetchMovie = async (movieName) => {
      const { data } = await axios.get(`${endpoint}?apikey=7035c60c&s=${movieName}`)
      // 반환되는 데이터는 Promise 객체이다.
      return data;
    }
  }
}