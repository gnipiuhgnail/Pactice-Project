<template>
  <el-form :model="ruleFormDate" :rules="rules" ref="ruleForm">
    <el-form-item prop="name">
      <el-input v-model="ruleFormDate.name" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()" style="width: 100%"
        >确认</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import request from "@/utils/request";
import { checkName } from "@/utils/validate";
export default {
  setup(props, { emit }) {
    const formData = reactive({
      ruleForm: "",
      ruleFormDate: { name: "" },
      data: "",
    });
    formData.objMsg = {
      nameEMessage: "姓名不能为空",
    };
    formData.rules = {
      name: [{ validator: checkName.bind(formData.objMsg), trigger: "blur" }],
    };
    const submitForm = () => {
      formData.ruleForm.validate(async (valid) => {
        if (valid) {
          const res = await request.get(
            `/getuser/${formData.ruleFormDate.name}`
          );
          if (!res.data.code) {
            emit("confirm", {
              id: res.data._id,
              name: res.data.name,
              active: 2,
            });
          }
          // get父组件发送消息，查询成功，把名字给父元素
        } else {
          return false;
        }
      });
    };
    return {
      ...toRefs(formData),
      submitForm,
    };
  },
};
</script>
