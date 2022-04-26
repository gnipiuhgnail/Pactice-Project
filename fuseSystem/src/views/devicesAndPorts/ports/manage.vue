<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">端口管理</div>
    </div>
    <el-button @click="$router.push({path:'/interchanger/ports/portTraffic'})">端口流量</el-button>
    <el-button @click="$router.push({path:'/interchanger/ports/includePort'})">包含端口</el-button>
 </div>
</template>
