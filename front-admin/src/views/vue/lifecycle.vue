<template>
<el-button @click="add">add</el-button>
  {{watchValue}}=={{computedValue}}
  <div>刷新的顺序：onBeforeMount、onRenderTracked、computed、onMounted</div>
  <div>点击后的顺序：onRenderTracked、function、watch、onBeforeUpdate、computed、onUpdated</div>
  <div>当在setup的其他函数调用computed值时，会先执行函数，更新计算属性的值</div>
  <div>onBeforeMount</div> 
  <div>onMounted</div> 
  <div>onBeforeUpdate</div> 
  <div>onUpdated</div> 
  <div>onBeforeUnmount</div> 
  <div>onUnmounted</div> 
  <div>onErrorCaptured</div> 
  <div>onRenderTracked</div> 
  <div>onRenderTriggered</div> 
  <div>onActivated</div> 
  <div>onDeactivated</div> 
  
</template>
<script>
import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, reactive, toRefs, watch } from '@vue/runtime-core'
export default {
  setup(){
    const state = reactive({
      watchValue: 1
    })
    const computedValue = computed(()=>{
      console.log("computedValue")
      return state.watchValue * 2
    })
    const add = () =>{ 
      state.watchValue=computedValue
      console.log("function")
    }
    watch(() => state.watchValue,(newValue,oldValue)=>{console.log("watchValue")})
    onBeforeMount(()=>{console.log("onBeforeMount")})
    onMounted(()=>{console.log("onMounted")})
    onBeforeUpdate(()=>{console.log("onBeforeUpdate")})
    onUpdated(()=>{console.log("onUpdated")})
    onBeforeUnmount(()=>{console.log("onBeforeUnmount")})
    onUnmounted(()=>{console.log("onUnmounted")})
    onErrorCaptured(()=>{console.log("onErrorCaptured")})
    onRenderTracked(()=>{console.log("onRenderTracked")})
    onRenderTriggered(()=>{console.log("onRenderTriggered")})
    onActivated(()=>{console.log("onActivated")})
    onDeactivated(()=>{console.log("onDeactivated")})
    return {
      ...toRefs(state),
      computedValue,
      add
    }
  }
}
</script>