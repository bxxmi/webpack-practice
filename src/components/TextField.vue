<template>
  <input 
    type="text" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" />
  <div>{{ count }}</div>
</template>

<script>
export default {
  // props: ['부모 컴포넌트에서 받아온 데이터']
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0,
      // required: 필수 prop인지에 대한 여부를 나타낸다.
      required: true
    }
  },
  emits: ['update:modelValue']
}
</script>