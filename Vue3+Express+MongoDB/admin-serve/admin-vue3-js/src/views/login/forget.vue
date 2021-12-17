<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
    <el-breadcrumb-item>忘记密码</el-breadcrumb-item>
  </el-breadcrumb>
  <el-steps :space="400" :active="2" finish-status="success">
    <el-step title="已完成">11</el-step>
    <el-step title="进行中">22</el-step>
    <el-step title="步骤 3">33</el-step>
  </el-steps>
</template>
