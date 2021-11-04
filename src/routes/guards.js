import router from './index.js';

router.beforeEach((to, from) => {
  console.log(to, from);

  if (to.meta.auth) {
    // 로그인 여부 로직
    if (!localStorage.getItem('token')) {
      return '/signin'
    }
  }
  return true
})