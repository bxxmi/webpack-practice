// case 1.
import * as Vue from 'vue'; 
import App from './App.vue';
import { fetch } from '~/plugins';
import store from './store';
import router from './routes';
import '~/routes/guards';
import TheModal from '~/components/TheModal';

const app = Vue.createApp(App);
// .use: 플러그인 연결
app.use(fetch, {
  endpoint: 'https://www.omdbapi.com'
});
app.use(store);
app.use(router);
// .component: 컴포넌트 전역 등록
app.component('TheModal', TheModal);
app.mount('#app');

// case 2.
// import { createApp } from 'vue'; 
// import App from './App.vue'

// const app = createApp(App); 
// app.mount('#app');