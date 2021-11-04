import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import Movie from './Movie.vue';
import MovieTitle from './MovieTitle.vue';
import MoviePoster from './MoviePoster.vue';
import MovieHeader from './MovieHeader.vue';
import SignIn from './SignIn.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About,
      meta: {
        auth: true
      }
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      // 주소 뒤에 붙은 :id는 동적 파라미터이다.
      path: '/movies/:id',
      component: Movie,
      redirect: { name: 'MovieTitle' },
      // children: 현재 페이지의 자식 페이지가 담김
      children: [
        {
          name: 'MovieTitle',
          path: 'title',
          components: {
            MovieHeader,
            default: MovieTitle
          }
        },
        {
          name: 'MoviePoster',
          path: 'poster',
          component: MoviePoster
        }
      ]
    }
  ]
})