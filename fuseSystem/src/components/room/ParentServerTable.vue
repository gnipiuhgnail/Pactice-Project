// 设备端口描绘
<template>
  <div>
    <!-- 二合一 -->
    <table v-if="childcount ==2" style="border:1px solid black;">
      <tr>
        <td v-for="item in twoTable" :key="item" style="border: 1px solid black;">
          <template v-if="childlist.indexOf(item)!=-1">{{item}}</template>
          <template v-if="childlist.indexOf(item)==-1">&nbsp;&nbsp;</template>
        </td>
      </tr>
    </table>
    <!-- 四合一 -->
    <table v-if="childcount ==4" style="border:1px solid black;">
      <tr>
        <td v-for="(i,index) in fourTable" :key="i" style="border: 1px solid black;">
          <div v-if="index <= 1 ">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
      <tr>
        <td v-for="(i,index) in fourTable" :key="i" style="border: 1px solid black;">
          <div v-if="index > 1 ">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
    </table>
    <!-- 8 -->
    <table v-if="childcount ==8" style="border:1px solid black;">
      <tr>
        <td v-for="(i,index) in eightTable" :key="i" style="border: 1px solid black;">
          <div v-if="index <= 1 ">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
      <tr>
        <td v-for="(i,index) in eightTable" :key="i" style="border: 1px solid black;">
          <div v-if="index > 1 && index <=3">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
      <tr>
        <td v-for="(i,index) in eightTable" :key="i" style="border: 1px solid black;">
          <div v-if="index > 3 && index <=5">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
      <tr>
        <td v-for="(i,index) in eightTable" :key="i" style="border: 1px solid black;">
          <div v-if="index > 5 && index <=7">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
    </table>
    <!-- 16 -->
    <table v-if="childcount ==16" style="border:1px solid black;">
      <tr>
        <td v-for="(i,index) in sixteenTable" :key="i" style="border: 1px solid black;">
          <div v-if="index <= 7">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
      <tr>
        <td v-for="(i,index) in sixteenTable" :key="i" style="border: 1px solid black;">
          <div v-if="index > 7">
            <template v-if="childlist.indexOf(i)!=-1">{{i}}</template>
          <template v-if="childlist.indexOf(i)==-1">&nbsp;&nbsp;</template>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity';
export default {
  props: {
    childcount: Number,
    childlist: Array,
  },
  setup(props){
    const state = reactive({
      twoTable: [1, 2],
      fourTable: [1, 3, 2, 4],
      eightTable: [1, 5, 2, 6, 3, 7, 4, 8],
      sixteenTable: [1, 2, 3, 4, 9, 10, 11, 12, 5, 6, 7, 8, 13, 14, 15, 16],
    })
    return {
      ...toRefs(state)
    }
  }
};
</script>
<style scoped>
.el-main {
  margin-top: 15px;
}
td {
  width: 20px;
  text-align: center;
}
</style>
