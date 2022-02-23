<template>
  <div>
    <el-button @click="$router.push('/css/layout')">布局</el-button>
    <el-button @click="$router.push('/css/echart')">Echarts</el-button>
  </div>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>