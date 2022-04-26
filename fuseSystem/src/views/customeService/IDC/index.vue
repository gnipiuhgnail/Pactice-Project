<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">IDC客户</div>
    </div>
    <el-button @click="$router.push({path:'/service/idc/ipQuery'})">查询IP段</el-button>
    <el-button @click="$router.push({path:'/service/idc/detail'})">客户详情</el-button>
 </div>
</template>
