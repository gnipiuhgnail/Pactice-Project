<template>
  <div>
    <el-button type="primary" @click="open('create')">添加</el-button>
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
      <el-form
        :model="numberValidateForm"
        ref="numberForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="姓名"
          prop="name"
          :rules="{ required: true, message: '姓名不能为空' }"
        >
          <el-input v-model="numberValidateForm.name"></el-input>
        </el-form-item>
        <el-form-item
          label="年龄"
          prop="age"
          :rules="{ required: true, message: '年龄不能为空' }"
        >
          <digitalInput
            @sendnumber="(val) => {numberValidateForm.age = val}"
            :unit="unit"
            v-bind:editnumber="numberValidateForm.age"
          ></digitalInput>
          <!-- 这是获取到子组件的值：<digitalInput @sendnumber="(val)=>{numberValidateForm.age=val}" :unit="unit"></digitalInput> ，接下来要把父组件的值传入子组件:editNumber="numberValidateForm.age"-->
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close()">取 消</el-button>
          <el-button type="primary" @click="submit('create')">确 定</el-button>
        </span>
      </template>
    </el-dialog>
    <el-table :data="tableData" border style="width: 30%">
      <el-table-column prop="id" label="ID" width="120" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="120" align="center">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text" size="small" @click="open('edit',scope.row.id)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import { reactive, toRefs } from "@vue/reactivity";
import digitalInput from "../../components/components/digitalInput.vue";
import api from "../../api/vue/componenttest";
// import { onMounted } from "@vue/runtime-core";
import {
  computed,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
  reactive,
  toRefs,
  watch,
} from "@vue/runtime-core";
export default {
  components: {
    digitalInput,
  },
  setup() {
    const state = reactive({
      numberValidateForm: {},
      numberForm: "",
      unit: "秒/次",
      dialogVisible: false,
      tableData: [],
    });
    const getList = async () => {
      const request = await api.getPersonList();
      state.tableData = request.data.data;
    };
    const open = async (status,id) => {
      if (status == "create") {
        console.log("create", state.numberValidateForm);
        state.dialogVisible = true;
      } else if (status == "edit") {
        //在弹窗中，子组件拿不到数据可能是渲染和数据获取的顺序
        console.log("before", state.numberValidateForm);
        const request = await api.findOne(id);
        state.numberValidateForm = request.data;
        console.log("after", state.numberValidateForm);
        state.dialogVisible = true; // 建议先拿到数据，再打开弹窗
      }
    };
    const close = () => {
      state.dialogVisible = false;
      state.numberForm.resetFields();
    };
    const submit = (status) => {
      state.numberForm.validate((valid) => {
        if (valid) {
          api.postPersonList(state.numberValidateForm);
        }
      });
      state.dialogVisible = false;
    };
    // onBeforeMount(() => {
    //   console.log("onBeforeMount-Vue", state.numberValidateForm);
    // });
    onMounted(() => {
      getList();
      console.log("onMounted-Vue", state.numberValidateForm);
    });
    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate-Vue", state.numberValidateForm);
    // });
    // onUpdated(() => {
    //   console.log("onUpdated(-Vue", state.numberValidateForm);
    // });
    // onBeforeUnmount(() => {
    //   console.log("onBeforeUnmount-Vue", state.numberValidateForm);
    // });
    // onUnmounted(() => {
    //   console.log("onUnmounted-Vue", state.numberValidateForm);
    // });
    // onErrorCaptured(() => {
    //   console.log("onErrorCaptured-Vue", state.numberValidateForm);
    // });
    // onRenderTracked(() => {
    //   console.log("onRenderTracked-Vue", state.numberValidateForm);
    // });
    // onRenderTriggered(() => {
    //   console.log("onRenderTriggered-Vue", state.numberValidateForm);
    // });
    // onActivated(() => {
    //   console.log("onActivated-Vue", state.numberValidateForm);
    // });
    // onDeactivated(() => {
    //   console.log("onDeactivated-Vue", state.numberValidateForm);
    // });
    return {
      ...toRefs(state),
      submit,
      open,
      close,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>