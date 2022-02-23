<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <el-container>
    <el-header style="height: 50px; background-color: #abcdef"></el-header>
    <el-main>
      <el-backtop
        target="#app"
        :visibility-height="100"
        :bottom="100"
        :right="100"
      >
        <div class="goTop">UP</div>
      </el-backtop>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  .el-main{
    height: 100%;
  }
  .goTop {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    text-align: center;
    line-height: 40px;
    color: #198;
  }
}
</style>
