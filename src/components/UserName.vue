<template>
  <h1>{{ user.name }}</h1>
  <!-- 자기 자신 컴포넌트를 부르면 재귀 컴포넌트가 된다. -->
  <!-- 조건을 달아야한다. 왜냐하면 재귀가 끝나는 지점이 있어야하기 때문이다. -->
  <!-- names.json 파일을 보면 children이 있고 없는 배열이 있으니 그것을 끝나는 조건으로 사용하면 된다. -->
  <template v-if="user.children && user.children.length > 0">
    <UserName
      v-for="u in user.children"
      :key="u.id"
      :user="u" />
  </template>
</template>

<script>
export default {
  props: {
    // 객체로 변경해야 재귀가 가능하다. (중첩된 데이터들이 다 나옴=children 속성)
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>