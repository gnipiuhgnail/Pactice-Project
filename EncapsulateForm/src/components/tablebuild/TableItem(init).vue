<template>
  <!-- table本身的信息,label,width
      table数据data -->
  <el-table
    :data="tableData"
    style="width: 100%"
    :border="tableConfig.base.border"
    :row-class-name="
      tableConfig.base.tableRowClassName
        ? tableConfig.base.tableRowClassName
        : ''
    "
    @selection-change="tableConfig.base.handleSelectionChange"
  >
    <el-table-column
      v-if="tableConfig.base.handleSelectionChange"
      type="selection"
      width="55"
    >
    </el-table-column>
    <el-table-column
      v-for="(item, index) in tableConfig.columConfig"
      :key="index"
      :label="item.label"
      :width="item.width"
    >
      <template #default="scope">
        <i :class="item.icon"></i>
        <span style="margin-left: 10px">{{ scope.row[item.key] }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button
          v-for="(item, index) in operation"
          :key="index"
          size="mini"
          :type="item.type"
          @click="item.handleClick(scope.$index, scope.row)"
          >{{ item.text }}</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      require: true,
    },
    tableConfig: {
      type: Object,
      require: true,
    },
    operation: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
// .warning{
//   color: red;
//   background-color: #ccc !important;
// }
// 在vue组件中，为了使样式私有化（模块化），不对全局造成污染，可以在style标签上添加scoped属性以表示它的只属于当下的模块。但是同时，scoped也会阻碍我们修改第三方组件库（element plus）的样式。
// ::v-deep elementPlus设置样式不起效
.el-table::v-deep .warning {
  background-color: #ccc;
}
.el-table::v-deep .success {
  background-color: skyblue;
}
</style>
