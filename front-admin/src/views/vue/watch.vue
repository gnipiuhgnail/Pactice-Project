<template>
  <div class="appContainer">
    <p>
      [Vue warn]: Invalid watch source: A watch source can only be a
      getter/effect function, a ref, a reactive object, or an array of these
      types.
    </p>
    <div style="width: 500px">
      <el-input v-model="currentValue" placeholder="请输入"></el-input>
      <el-input
        v-model="refValue"
        placeholder="请输入"
        style="margin-top: 16px"
      ></el-input>
    </div>
    <p>currentValue:{{ currentValue }}</p>
    <p>finallyValue:{{ finallyValue }}</p>
    <p>computedValue:{{ computedValue }}</p>
    <p>finallyrefValue:{{ finallyrefValue }}</p>
  </div>
</template>
<script>
import { computed, reactive, ref, toRefs, watch, watchEffect } from 'vue'
export default {
  setup() {
    const state = reactive({
      currentValue: '',
      finallyValue: '',
      computedValue: computed(() => {
        return state.currentValue * 2
      }),
      finallyrefValue: '',
    })
    const refValue = ref('')
    // 监听 ref值和reactive值
    // 监听ref值，参数需要.value
    // 监听reactive，参数需要函数()=>
    watch(
      () => refValue.value,
      (curVal, oldVal) => {
        console.log('curVal', curVal)
        console.log('oldVal', oldVal)
        state.finallyrefValue = curVal
      }
    )
    watch(
      () => state.currentValue,
      (curVal, oldVal) => {
        console.log('curVal', curVal)
        console.log('oldVal', oldVal)
        state.finallyValue = 3 * curVal
      }
    )
    watchEffect(() => {
      state.finallyValue = 3 * state.currentValue
      state.finallyrefValue = 3 * refValue.value
      console.log('state.currentValue', state.currentValue)
      console.log('refValue.value', refValue.value)
    })
    return {
      ...toRefs(state),
      refValue,
    }
  },
}
</script>