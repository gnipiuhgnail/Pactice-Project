<template>
  <!-- 这里还是把注册、登录、忘记密码分开 -->
  <div class="demo-ruleForm">
    <div style="margin-bottom: 24px">登录</div>
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
      <el-from-item>
        <el-button type="text" @click="$router.push('/forget')"
          >忘记密码</el-button
        >
      </el-from-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
        <el-button @click="$router.push('/regist')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// reactive更适合定义复杂的数据类型（json/arr）、ref适合定义基本数据类型（可接收基本数据类型和对象）
// reactive对象赋值，且能够被监听到，一种是ref，一种是外加一层reactive对象
import { ref } from "@vue/reactivity";
import request from "@/utils/request";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { checkName } from "@/utils/validate";
export default {
  setup() {
    const router = useRouter();
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== ruleFormDate.value.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const ruleForm = ref(""); // 不明白这里为什么不能用reactive
    const ruleFormDate = ref({
      password: "",
      checkPass: "",
      name: "",
    });
    const rules = ref({
      password: [{ validator: validatePass, trigger: "blur" }],
      checkpassword: [{ validator: validatePass2, trigger: "blur" }],
      name: [{ validator: checkName.bind({
      nameEMessage: "姓名不能为空",
    }), trigger: "blur" }],
    });
    // const loginForm = reactive({ // 建议写法
    //   rules:"",
    //   ruleForm:"",
    //   ruleFormDate:{}
    // })
    const submitForm = () => {
      ruleForm.value.validate(async (valid) => {
        if (valid) {
          //查询肯定还有密码要核对的
          await request
            .get(`/getuser/${ruleFormDate.value.name}`)
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
    const resetForm = () => {
      ruleForm.value.resetFields();
    };
    return {
      ruleForm,
      ruleFormDate,
      rules,
      submitForm,
      resetForm,
    };
  },
};
</script>
<style lang="scss" scoped>
.demo-ruleForm {
  width: 400px;
  padding: 30px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 24px;
}
</style>
