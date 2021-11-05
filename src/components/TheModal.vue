<template>
  <slot
    name="activator"
    :attrs="{ onClick: onModal }"></slot>
  <!-- teleport to="태그 선택자" -->
  <teleport to="body">
    <template v-if="modelValue">
      <div
        class="modal"
        @click="offModal">
        <!-- @click.stop : 이벤트 버블링 방지 -->
        <div
          class="modal-box"
          @click.stop>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    // persistent: 배경 눌러도 안꺼지게 하는 기능
    persistent: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  // 반응형 데이터의 변화를 감지
  watch: {
    // newValue에는 새로 변경된 값이 들어온다.
    modelValue(newValue) {
      // 모달창이 켜지면
      if (newValue) {
        window.addEventListener('keyup', this.escHandler);
        // 모달이 꺼지면 이벤트를 꺼라 (최적화 작업)
      } else {
        window.removeEventListener('keyup', this.escHandler);
      }
    }
  },
  methods: {
    onModal() {
      this.$emit('update:modelValue', true);
    },
    offModal() {
      if (this.persistent) return;
      // update:modelValue 사용하면 props 갱신
      this.$emit('update:modelValue', false)
    },
    escHandler(event) {
      if (event.key === 'Escape') {
          this.offModal();
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(black, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-box {
    width: 400px;
    background-color: royalblue;
    border: 1px solid black;
  }
}
</style>