import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';
import Movie from './Movie.vue';
import MovieTitle from './MovieTitle.vue';
import MoviePoster from './MoviePoster.vue';
import MovieHeader from './MovieHeader.vue';
import SignIn from './SignIn.vue';
import NotFound from './NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  // scrollBehavior: 페이지 이동 시 스크롤을 제어할 수 있음
  // vue router 사용 시 필수적인 속성이다.
  scrollBehavior: () => ({ top: 0, left: 0 }),
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
    },
    // 404 지정
    {
      path: '/:bomi(.*)',
      component: NotFound
    }
  ]
})