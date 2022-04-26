<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">IPV4</div>
    </div>
    <el-button @click="$router.push({path:'/ip/ipv4/distributionDetails'})">分发详细</el-button>
    <el-button @click="$router.push({path:'/ip/ipv4/distributionRecord'})">IP段分发记录</el-button>
    <el-button @click="$router.push({path:'/ip/ipv4/center'})">IP中心</el-button>
    <el-button @click="$router.push({path:'/ip/ipv4/allowOrDisable'})">IP允许或禁止操作</el-button>
 </div>
</template>
