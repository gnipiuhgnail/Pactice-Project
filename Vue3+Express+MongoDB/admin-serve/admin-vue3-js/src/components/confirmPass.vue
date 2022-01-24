// 忘记密码-输入新密码
<template>
  <el-form :model="ruleFormDate" status-icon :rules="rules" ref="ruleForm">
    <el-form-item>
      用户：{{ userData.name }}
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="ruleFormDate.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item prop="checkpass">
      <el-input
        type="password"
        v-model="ruleFormDate.checkpass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submitForm()" style="width: 100%" type="primary"
        >确认</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import request from "@/utils/request";
import { checkPass, checkRePass } from "@/utils/validate";
import { onMounted } from "@vue/runtime-core";
export default {
  props: {
    userData: Object,
  },
  setup(props, { emit }) {
    const formData = reactive({
      ruleForm: "",
      ruleFormDate: { password: "", checkpass: "" },
      userData: props.userData,
    });
    formData.objMsg = {
      ruleFormDate: formData.ruleFormDate,
    };
    formData.rules = {
      password: [
        { validator: checkPass.bind(formData.objMsg), trigger: "blur" },
      ],
      checkpass: [
        { validator: checkRePass.bind(formData.objMsg), trigger: "blur" },
      ],
    };
    const submitForm = async () => {
      formData.ruleForm.validate(async (valid) => {
        if (valid) {
          formData.ruleFormDate["name"] = props.userData.name;
          const res = await request.put(
            `/updateuser/${props.userData.id}`,
            formData.ruleFormDate
          );
          if (!res.data.code) {
            emit("confirm", {
              active: 3,
            });
          }
          // get父组件发送消息，查询成功，把名字给父元素
        } else {
          return false;
        }
      });
    };
    onMounted(() => {
      // watch(props.userData, (data, prevData) => {
      //   formData.userData = data;
      //   console.log(prevData);
      // });
      formData.userData = props.userData;
    });
    return {
      ...toRefs(formData),
      submitForm,
    };
  },
};
</script>
