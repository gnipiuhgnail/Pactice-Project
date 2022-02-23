<template>
  <!-- 按钮 -->
  <el-button @click="addMenu('new')">打开弹框</el-button>

  <!-- 自定义组件,下面这两种写法都可以👇 -->
  <MediaDialog :name="name" v-model:visible="dialogMediaVisible" />
</template>

<script>
import { ref } from "vue";
import MediaDialog from "../components/test/DialogTest.vue";
export default {
  name: "MediaCenter",
  components: { MediaDialog },
  setup() {
    const dialogMediaVisible = ref(false);
    const name = "";

    const addMenu = function () {
      dialogMediaVisible.value = true;
    };

    return {
      name,
      dialogMediaVisible,
      addMenu,
    };
  },
};
</script>
