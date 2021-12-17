<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<style lang="scss" scoped>
.el-header {
  height: 100px;
  background-color: rgba(105, 90, 205, 0.63);
  color: #000;
}
.el-main {
  width: 100%;
  height: calc(100vh - 256px);
}
.el-footer {
  height: 156px;
  background-color: #cecece;
}
</style>
