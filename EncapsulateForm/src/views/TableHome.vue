<template>
  <el-button @click="add" class="block systemBtnMargin">添加菜单</el-button>
  <DialogFrom
    :title="dialogConfig.title"
    :dialogConfig="dialogConfig"
    v-model:visible="dialogVisible"
    :formConfig="formConfig"
    :values="fromDate"
    style="width: 300px"
    :rules="rules"
    :toDist="toDist('/currernturl')"
  ></DialogFrom>
  <TableItem :tableData="tableData" :tableConfig="tableConfig"></TableItem>
  <PaginationItem
    :total="totalData"
    @getCurrentPage="getCurrentPage"
  ></PaginationItem>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import TableItem from "../components/tablebuild/TableItem.vue";
import PaginationItem from "../components/tablebuild/PaginationItem.vue";
import DialogFrom from "../components/fromsimplebuild/DialogFrom.vue";
import { isBtnOneToHundred } from "../utils/validate";
import {
  tableConfigure,
  formConfingure,
  dialogConfigure,
  fromDateConfigure,
} from "../configs/tableHome.js";
export default {
  components: { TableItem, PaginationItem, DialogFrom },
  setup() {
    const tableData = reactive([
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1517 弄",
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1519 弄",
      },
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1516 弄",
      },
    ]);
    const tableConfig = reactive(tableConfigure);
    const totalData = ref(150);
    const getCurrentPage = (param) => {
      console.log("⭐当前第" + param + "页");
    };
    // 弹窗
    const formConfig = reactive(formConfingure);
    const dialogConfig = reactive(dialogConfigure);
    const fromDate = reactive(fromDateConfigure);
    const rules = reactive({
      name: [
        { required: true, message: "请输入名称", trigger: "blur" },
        { min: 0, max: 5, message: "长度为3到5个字符哦", trigger: "blur" },
      ],
      age: [{ validator: isBtnOneToHundred, trigger: "blur" }],
    });
    const dialogVisible = ref(dialogConfig.visible);
    const add = () => {
      dialogVisible.value = true;
    };
    const toDist = (url) => {
      const currentUrl = ref(url);
      return currentUrl;
    };
    return {
      tableData,
      tableConfig,
      totalData,
      getCurrentPage,
      formConfig,
      fromDate,
      rules,
      dialogConfig,
      dialogVisible,
      add,
      toDist,
    };
  },
};
</script>
