<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">VPS管理</div>
    </div>
    <el-button @click="$router.push({path:'/service/vps/examine'})">VPS审核</el-button>
    <el-button @click="$router.push({path:'/service/vps/manage'})">VPS管理</el-button>
    <el-button @click="$router.push({path:'/service/vps/apply'})">VPS申请</el-button>
    <el-button @click="$router.push({path:'/service/vps/personal'})">我的VPS</el-button>
    <el-button @click="$router.push({path:'/service/vps/record'})">VPS记录</el-button>
 </div>
</template>
