<template>
  <div class="container">
    <el-button @click="handleCreate">添加用户</el-button>
    <el-table :data="tableData" style="width: 100%; margin-top: 24px" border>
      <el-table-column label="姓名" width="250">
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="密码" width="250">
        <template #default="scope">
          <span>{{ scope.row.password }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 表单的ref和model（表单数据对象）属性值要不一样，否则输入输入框无显示 -->
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
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
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleFormDate.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
// import axios from "axios";
import request from "@/utils/request";
import { onMounted } from "@vue/runtime-core";
// import numberInput from "@/components/number-input.vue"
export default {
  // components:{
  //   numberInput,
  // },
  setup() {
    const tableData = ref([]);
    var checkName = (rule, value, callback) => {
      if (value == "" || value == undefined || value == null) {
        callback(new Error("姓名不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (formState.ruleFormDate.value.checkPass !== "") {
          console.log(formState.ruleForm)
          formState.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== formState.ruleFormDate.password) {
        
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const formState = reactive({
      status: "",
      dialogVisible: false,
      ruleForm: "",
      ruleFormDate: {
        password: "",
        checkPass: "",
        name: "",
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkpassword: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }],
      },
    });
    const handleCreate = () => {
      formState.status = "create";
      formState.ruleFormDate = {}
      formState.dialogVisible = true;
    }
    const handleEdit = (scope) => {
      formState.status = "edit";
      formState.dialogVisible = true;
      formState.ruleFormDate = scope.row;
    };
    const onSubmit = async () => {
      // 提交
      // const request = axios.create({
      //   baseURL: "/api", //配置请求网址(服务器地址)
      // }); // 创建实例
      // request.defaults = 2500;
      // 默认情况下，axios将JavaScript对象序列化为JSON。
      // var formData = new FormData();
      // formData.append("a", a);
      if (formState.status == "create") {
        await request.post("/createuser", formState.ruleFormDate);
      } else if (formState.status == "edit") {
        await request.put(
          `/updateuser/${formState.ruleFormDate._id}`,
          formState.ruleFormDate
        );
      }
      formState.dialogVisible = false;
      formState.ruleForm.resetFields();
      getTableData();
    };
    const handleDelete = (scope) => {
      request.delete(`/deleteuser/${scope.row._id}`);
      console.log(scope.row.id);
      getTableData();
    };
    const getTableData = async () => {
      await request.get("/getallusers").then((res) => {
        tableData.value = res.data;
      });
    };
    onMounted(() => {
      getTableData();
    });
    return {
      ...toRefs(formState),
      onSubmit,
      tableData,
      handleEdit,
      handleDelete,
      handleCreate,
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  margin: 24px;
  padding: 50px;
  border: 1px solid rgb(235, 238, 245);
  text-align: left;
}
</style>
