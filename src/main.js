// case 1.
import * as Vue from 'vue'; 
import App from './App.vue';
import { fetch } from '~/plugins'

const app = Vue.createApp(App);
// .use: 플러그인 연결
app.use(fetch, {
  endpoint: 'https://www.omdbapi.com'
});
app.mount('#app');

// case 2.
// import { createApp } from 'vue'; 
// import App from './App.vue'

// const app = createApp(App); 
// app.mount('#app');