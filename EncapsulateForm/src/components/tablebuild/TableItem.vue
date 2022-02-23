<template>
  <!-- table本身的信息,label,width
      table数据data -->
  <el-table
    :data="tableData"
    style="width: 100%"
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
          v-for="(item, index) in tableConfig.operation"
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
  },
};
</script>
<style lang="scss" scoped>
.el-table::v-deep {
  .secondrow {
    background-color: #f5f7f9;
  }
  .el-table__cell {
    padding: 0;
    height: 43px;
    .cell span {
      margin-left: 0 !important;
    }
  }
  th {
    background-color: #edf4ff;
  }
  .cell {
    padding-left: 16px;
  }
}
</style>
