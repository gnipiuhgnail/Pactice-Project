// 忘记密码-完成
<template>
  <div class="finish">
    <h1>重置成功</h1>
    <div>
      <span id="time" style="color: #409eff">5</span>秒后，自动跳转到登录页
    </div>
    <el-button @click="$router.push('/login')">前往登录</el-button>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const router = useRouter();
    const countDown = () => {
      var time = document.getElementById("time");
      var count = time.innerHTML;
      if (count >= 0) {
        var timer = setInterval(() => {
          time.innerHTML = count--;
          if (count < 0) {
            router.push("/login");
            clearInterval(timer);
            return;
          }
        }, 1000);
      }
    };
    onMounted(() => {
      countDown();
    });
    return { countDown };
  },
};
</script>
<style lang="scss" scoped>
.finish {
  text-align: center;
  .el-button {
    margin-top: 24px;
  }
}
</style>
