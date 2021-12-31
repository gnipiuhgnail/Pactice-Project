<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1-1" @click="$router.push('/firstchildren')">选项1</el-menu-item>
          <el-menu-item index="1-2" @click="$router.push('/secondchildren')"
            >选项2</el-menu-item
          >
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: 1px solid #ccc;
  .el-menu-item {
    display: block;
    text-align: left;
  }
}
</style>
