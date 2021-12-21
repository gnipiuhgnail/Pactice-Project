<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/login' }">登录</el-breadcrumb-item>
    <el-breadcrumb-item>注册</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 这里还是把注册、登录、忘记密码分开 -->
  <div class="registForm">
    <div class="header">注册</div>
    <el-form
      :model="ruleFormDate"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
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
      <el-form-item label="确认密码" prop="checkpass">
        <el-input
          type="password"
          v-model="ruleFormDate.checkpass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked"
          ><el-button type="text" @click="$router.push('/login')"
            >我已同意《使用协议》</el-button
          ></el-checkbox
        >
        <!-- <el-button @click="resetForm()">重置</el-button> -->
        <el-button
          @click="submitForm()"
          style="width: 100%; color: #fff"
          :style="`background-color:${
            checked == true ? '#409eff' : '#e9ebec'
          };`"
          :disabled="!checked"
          >注册</el-button
        >
        <div>
          <el-button type="text" @click="$router.push('/login')"
            >已有账号，直接登录></el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import request from "@/utils/request";
import { useRouter } from "vue-router";
import { checkName, checkPass, checkRePass } from "@/utils/validate";
export default {
  setup() {
    const router = useRouter();
    const loginForm = reactive({
      ruleForm: "",
      ruleFormDate: { password: "", checkpass: "", name: "" },
      checked: false,
    });
    loginForm.objMsg = {
      nameEMessage: "姓名不能为空",
      ruleFormDate: loginForm.ruleFormDate,
    };
    loginForm.rules = {
      password: [
        { validator: checkPass.bind(loginForm.objMsg), trigger: "blur" },
      ],
      checkpass: [
        { validator: checkRePass.bind(loginForm.objMsg), trigger: "blur" },
      ],
      name: [{ validator: checkName.bind(loginForm.objMsg), trigger: "blur" }],
    };
    const submitForm = () => {
      loginForm.ruleForm.validate(async (valid) => {
        if (valid) {
          //查询肯定还有密码要核对的
          const res = await request.post("/createuser", loginForm.ruleFormDate);
          if (!res.data.code) {
            console.log(res.data);
            router.push("/login");
          }
        } else {
          return false;
        }
      });
    };
    const resetForm = () => {
      loginForm.ruleForm.resetFields();
    };
    return {
      ...toRefs(loginForm),
      submitForm,
      resetForm,
    };
  },
};
</script>
<style lang="scss" scoped>
.registForm {
  width: 400px;
  padding: 40px 30px 10px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 24px;
  .header {
    margin-bottom: 30px;
    text-align: center;
    font-size: 33px;
  }
  .el-form-item {
    div {
      display: flex;
      justify-content: end;
    }
  }
}
</style>
