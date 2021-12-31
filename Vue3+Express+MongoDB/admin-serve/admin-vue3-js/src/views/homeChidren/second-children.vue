<template>
  <el-button type="text" @click="formDataVisible = true"
    >点击打开 Dialog</el-button
  >
  <el-dialog
    title="提示"
    v-model="formDataVisible"
    width="30%"
  >
    <el-form
      v-model="formData"
      ref="formDataRef"
      label-width="100px"
      class="demo-ruleForm"
    >
      {{ formData.age }}
      <el-form-item label="年龄" prop="age">
        <numberInput
         v-model:message="formData.age"
          :placeholder="placeholder"
          @number="
            (msg) => {
              formData.age = msg;
            }
          "
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="formDataVisible = false">取 消</el-button>
        <el-button type="primary" @click="formDataVisible = false"
          >确 定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
<script>
import numberInput from "@/components/number-input.vue";
import { reactive, toRefs } from "@vue/reactivity";
export default {
  components: {
    numberInput,
  },
  setup() {
    const state = reactive({
      formData: {
        age: 12
      },
      placeholder:"请输入",
      formDataRef: "",
      formDataVisible: false,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
