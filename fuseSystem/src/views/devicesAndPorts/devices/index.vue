<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">设备管理</div>
    </div>
    <el-button @click="$router.push({path:'/interchanger/device/add'})">添加设备</el-button>
    <el-button @click="$router.push({path:'/interchanger/device/importExport'})">导入导出设备</el-button>
    <el-button @click="$router.push({path:'/interchanger/device/upperLowerShelves'})">上下架统计</el-button>
    <el-button @click="$router.push({path:'/interchanger/device/detail'})">设备详情</el-button>
 </div>
</template>
