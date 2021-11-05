<template>
  <h1>404 ERROR! 페이지를 찾을 수 없습니다!!</h1>
  <RouterLink to="/">
    메인 페이지로 이동
  </RouterLink>
  <!-- RouterLink 컴포넌트 사용 없이도 -->
  <!-- 버튼 클릭 시 '$router' 키워드를 사용해서 라우터 객체를 불러와 이동할 수도 있다. -->
  <!-- 따라서, 아래 구문 $router.push('/') 는 라우터 객체에 메인으로 가는 주소를 버튼에 넣는다는 뜻이다. -->
  <button @click="$router.push('/')">
    메인페이지
  </button>
</template>