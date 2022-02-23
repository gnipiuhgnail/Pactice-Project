// 分页
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 30]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
  >
  </el-pagination>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    total: Number,
  },
  setup(props, context) {
    // 就算没有用到props，也要传入props，否则context不起效
    // 发送currentPage到父组件，告诉父组件当前是第几页
    const handleSizeChange = (val) => {
      console.log(`每页 ${val} 条`);
    };
    function handleCurrentChange(val) {
      context.emit("getCurrentPage", val);
    }
    return {
      //默认为第一页
      currentPage: ref(1),
      handleCurrentChange,
      handleSizeChange,
    };
  },
};
</script>
