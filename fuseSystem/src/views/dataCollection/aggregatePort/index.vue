<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">聚合端口</div>
    </div>
    <el-button @click="$router.push({path:'/datacollection/combineport/port'})">端口</el-button>
    <el-button @click="$router.push({path:'/datacollection/combineport/traffic'})">流量</el-button>
 </div>
</template>
