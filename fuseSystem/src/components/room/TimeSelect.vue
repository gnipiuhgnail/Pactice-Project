<template>
  <div>
    <div style="margin-top:6px">年份：
      <span v-for="item in year" :key="item" class="timeBox" :class="item==yearSelect?'timecurBox':''" @click="setYear(item)">
        {{item}}
      </span>
    </div>
    <div style="margin-top:24px">月份：
      <span v-for="mon in 12" :key="mon" class="timeBox" :class="mon==monthSelect?'timecurBox':''" @click="setMonth(mon)">{{mon}}月</span>
    </div>
    <div style="margin-top:24px">自定义：
      <el-date-picker v-model="timer" type="month" placeholder="选择月份" @change="setTime"></el-date-picker>
      <el-button type="primary" style="margin-left: 12px">生成报表</el-button>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  emits: ['date'],
  setup(props, {emit}){
    const state = reactive({
      year:[], // 当前年份
      yearSelect: '',// 选中的年份
      monthSelect: '',// 选中的月份
      timer:'',// 选中的年月份
    })
    for(var i = (new Date()).getFullYear();i>(new Date()).getFullYear()-5;i--){
      state.year.push(i)
    }
    const setYear = (item) => {
      state.yearSelect = item
      state.timer = new Date(`${state.yearSelect}-${state.monthSelect}`)
      emit('date', state.timer)
    }
    const setMonth = (item) => {
      state.monthSelect = item
      state.timer = new Date(`${state.yearSelect}-${state.monthSelect}`)
      emit('date', state.timer)
    }
    const setTime = () => {
      state.monthSelect = state.timer.getMonth()+1
      state.yearSelect = state.timer.getFullYear()
      emit('date', state.timer)
    }
    onMounted(()=>{
      const now = new Date()
      state.yearSelect = now.getFullYear()
      state.monthSelect = now.getMonth()+1
      state.timer = new Date(`${state.yearSelect}-${state.monthSelect}`)
    })
    return {
      ...toRefs(state),
      setYear,
      setMonth,
      setTime
    }
  }
}
</script>
<style scoped lang="scss">
.timeBox {
  width: 64px;
  height: 32px;
  padding: 4px 12px;
  margin-right: 16px;
}
.timecurBox{
  border: 1px solid #303133;
  border-radius: 4px;
}
::v-deep .el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 488px;
}
</style>
