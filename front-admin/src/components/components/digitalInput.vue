<template>
  <div>
    <el-input v-model="number" placeholder="请填写数值">
    <template #append>{{unit}}</template>
  </el-input>
  </div>
</template>
<script>
import { computed, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated, reactive, toRefs, watch } from '@vue/runtime-core'
export default {
  props:{
    editnumber:{
    },
    unit:{
      type:String
    }
},
  emits: ['sendnumber'],
  setup(props, { emit}) {
    const state = reactive({
      unit: props.unit,
      number: props.editnumber
    })
    watch(
      () => state.number,
      function (curVal, oldVal) {
        if (typeof curVal != String) curVal = curVal.toString()
        if (props.editnumber=='') curVal = ''
        state.number = curVal.match(/\d/gi) ? curVal.match(/\d/gi).join('') : ''
        emit('sendnumber', state.number)
      }
    )
    onBeforeMount(()=>{console.log("onBeforeMount",state.number)})
    onMounted(()=>{console.log("onMounted",state.number)})
    onBeforeUpdate(()=>{console.log("onBeforeUpdate",state.number)})
    onUpdated(()=>{console.log("onUpdated",state.number)})
    onBeforeUnmount(()=>{console.log("onBeforeUnmount",state.number)})
    onUnmounted(()=>{console.log("onUnmounted",state.number)})
    onErrorCaptured(()=>{console.log("onErrorCaptured",state.number)})
    onRenderTracked(()=>{console.log("onRenderTracked",state.number)})
    onRenderTriggered(()=>{console.log("onRenderTriggered",state.number)})
    onActivated(()=>{console.log("onActivated",state.number)})
    onDeactivated(()=>{console.log("onDeactivated",state.number)})
    return {
      ...toRefs(state),
    }
  },
}
</script>


