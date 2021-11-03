import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import Movie from './Movie.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      // 주소 뒤에 붙은 :id는 동적 파라미터이다.
      path: '/movies/:id',
      component: Movie
    }
  ]
})