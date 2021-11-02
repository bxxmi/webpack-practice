import { createStore } from 'vuex';

export default createStore({
  // state: 데이터가 담김
  // 함수형이어야 한다.
  state: () => ({
    count: 0,
    message: 'Hello Vue'
  }),
  // computed
  getters: {
    double(state) {
      return state.count * 2;
    },
    reversedMessage(state) {
      return state.message.split('').reverse.join('');
    }
  },
  // 변이 메소드 (데이터 수정 권한 있음, 비동기 통신 안됨)
  // 데이터 수정 용도이다. 그 외의 용도는 actions에 작성한다.a
  mutations: {
    // increase(state) {
    //   state.count += 1
    // },
    // reverseMessage(state) {
    //   state.message = state.message.split('').reverse.join('');
    // },
    assignState(state, bomi) { // bomi must be object! 여기서 bomi에 들어간 데이터는 actions의 commit 부분이다.
      Object.keys(bomi).forEach(key => {
        state[key] = bomi[key]
      })
    }
  },
  // 액션 메소드 (데이터 수정 권한 없고, 비동기 통신 됨)
  // 개발자가 직접 사용 따라서 복잡한 로직이 존재한다.
  actions: {
    // 함수 - 명령형으로 생성(선택)
    increase({ state, commit }) {
      commit('assignState', {
        count: state.count + 1,
        message: 'Good'
      })
    },
    reverseMessage({ state, commit }) {
      commit('assignState', {
        message: state.message.split('').reverse.join('')
      })
      console.log(state.message);
    }
  }
}) 