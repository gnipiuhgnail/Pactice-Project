<template>
  <table border>
    <tr>
      <td @click="$router.push('/functions/uploadFile')">文件上传</td>
      <td @click="$router.push('/functions/uploadFile')">文件上传</td>
    </tr>
  </table>
  <router-view></router-view>
</template>
<style lang="scss" scoped>
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>