import { createStore } from 'vuex';
import message from './message.js';

export default createStore({
  // strict: true 배포 시 지워야하는 코드
  strict: true,
  modules: {
    message
  }
}) 