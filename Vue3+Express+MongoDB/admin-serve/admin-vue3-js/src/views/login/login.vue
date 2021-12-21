<template>
  <!-- 这里还是把注册、登录、忘记密码分开 -->
  <!-- 觉得还是注册登录合并吧 -->
  <div class="loginForm">
    <div class="header">登录</div>
    <el-form
      :model="ruleFormDate"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="45px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleFormDate.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleFormDate.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <div class="forget">
        <el-button type="text" @click="$router.push('/forget')"
          >忘记密码</el-button
        >
      </div>
      <el-form-item class="footer">
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <!-- <el-button @click="resetForm()">重置</el-button> -->
        <el-button @click="$router.push('/regist')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）
// reactive对象赋值，且能够被监听到，一种是ref，一种是外加一层reactive对象
import { reactive, toRefs } from "@vue/reactivity";
import request from "@/utils/request";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { checkName, checkPass } from "@/utils/validate";
export default {
  setup() {
    const router = useRouter();
    // const ruleForm = ref(""); // 不明白这里为什么不能用reactive
    // const ruleFormDate = ref({
    //   password: "",
    //   name: "",
    // });
    // const objMsg = { // 表单校验的参数
    //   nameEMessage: "姓名不能为空",
    //   ruleFormDate: ruleFormDate.value,
    //   ruleForm: ruleFormDate.value,
    //   hasCheckPass: false
    // };
    // const rules = ref({
    //   password: [{ validator: checkPass.bind(objMsg), trigger: "blur" }],
    //   name: [{ validator: checkName.bind(objMsg), trigger: "blur" }],
    // });
    const loginForm = reactive({
      ruleForm: "",
      ruleFormDate: { password: "", name: "" },
    });
    loginForm.objMsg = {
      // 表单校验的参数
      nameEMessage: "姓名不能为空",
      ruleFormDate: loginForm.ruleFormDate,
    };
    loginForm.rules = {
      password: [
        { validator: checkPass.bind(loginForm.objMsg), trigger: "blur" },
      ],
      name: [{ validator: checkName.bind(loginForm.objMsg), trigger: "blur" }],
    };
    const submitForm = () => {
      loginForm.ruleForm.validate(async (valid) => {
        if (valid) {
          //查询肯定还有密码要核对的
          await request
            .get(`/getuser/${loginForm.ruleFormDate.name}`)
            .then((res) => {
              const isExit = res.data;
              if (isExit) {
                router.push("/firstchildren");
              } else {
                // 提示用户名错误
                ElMessage({
                  type: "error",
                  message: "用户不存在",
                });
              }
            });

          // await request.post("/createuser", ruleFormDate.value);
        } else {
          return false;
        }
      });
    };
    // const resetForm = () => {
    //   loginForm.ruleForm.resetFields();
    // };
    return {
      ...toRefs(loginForm),
      submitForm,
      // resetForm,
    };
  },
};
</script>
<style lang="scss" scoped>
.loginForm {
  width: 400px;
  padding: 40px 30px 10px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 24px;
  .header {
    margin-bottom: 30px;
    text-align:center;
    font-size: 33px;
  }
  .el-form-item:nth-child(2){
    margin-bottom: 0;
  }
  .forget {
    text-align: right;
  }
  .footer {
    .el-button {
      width: 48.5%;
    }
  }
}
</style>
