<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">
        调用日志
      </div>
    </div>

    <div class="tableHeader">
      <div class="datepicker">
          <span>日期范围</span>
          <el-date-picker
            v-model="timeSelect"
            type="daterange"
            value-format="x"
            clearable
            @change="getList"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      <div>
        <el-tooltip
          class="item"
          effect="dark"
          content="可搜索用户"
          placement="bottom"
        >
          <el-input
            v-model.trim="listQuery.findStr"
            placeholder="输入关键字搜索"
            clearable
            @keyup.enter="handleFilter"
            @clear="handleFilter"
          >
            <template #append>
              <el-button
                icon="el-icon-search"
                @click="handleFilter"

              />
            </template>
          </el-input>
        </el-tooltip>
      </div>
    </div>
    <el-table
      v-loading="listLoading"
      :data="listData"
      element-loading-text="数据加载中，请稍后"
      fit
     :header-cell-style="headerCellStyle"
      :cell-style="cellClass"
      @sort-change="sortChange"
    >
      <el-table-column
        label="发起请求的用户"
        align="center"
        width="200"
      >
        <template #default="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column
        label="请求的客户端IP"
        align="center"
        width="200"
      >
        <template #default="scope">
          {{ scope.row.remoteAddr }}
        </template>
      </el-table-column>
      <el-table-column
        label="请求方法"
        align="center"
      >
        <template #default="scope">
          {{ scope.row.apiUrl }}
        </template>
      </el-table-column>
      <el-table-column
        label="执行结果"
        align="center"
        width="200"
      >
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.result]">
            {{ statusTextMap[scope.row.result] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="日志时间"
        align="center"
        width="200"
      >
        <template #default="scope">
          {{ timesub(scope.row.logDate) }}
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      class="rightPagination"
      :page-sizes="pageSizeArr"
      :current-page="listQuery.currentPage"
      :page-size="listQuery.pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import api from '@/api/system/log'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  setup(){
    const state = reactive({
      timeSelect:[],
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
        sortData: {
          'order': 'desc',
          'prop': 'logDate'
        }
      },
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      listData: [],
      listLoading: true,
      dialogFormVisible: false,
      statusTagMap: {
        '1': 'success',
        '2': 'danger',
        '3': 'Warning'
      },
      statusTextMap: {
        '1': '执行成功',
        '2': '业务异常',
        '3': '非业务异常'
      }
    })
    const getList = async () => {
      if(state.timeSelect==null) state.timeSelect=[]
      state.listQuery.range = {
        startTime: state.timeSelect.length!=0 ? +state.timeSelect[0] : 0,
        endTime: state.timeSelect.length!=0 ? +state.timeSelect[1] + 86399999 : 0,
      }
      if((state.timeSelect[1]-state.timeSelect[0])>(7*86400000)){
        ElMessage({
            type: 'error',
            message: '选择日期范围不能超过七天！',
          })
        return;
      }
      state.listLoading = true
      const result = await api.findApiLog(state.listQuery)
      state.listData = result.list
      state.total = result.total
      state.listLoading = false
    }
    const handleFilter = () => {
      state.listQuery.currentPage = 1
      getList()
    }
    const handleSizeChange = (val) => {
      state.listQuery.pageSize = val
      state.listQuery.currentPage = 1
      getList()
    }
    const handleCurrentChange = (val) => {
      state.listQuery.currentPage = val
      getList()
    }
    onMounted( async ()=>{
      const defaultBegin =new Date(new Date().toLocaleDateString()).getTime()
      const defaultOver = new Date(new Date().setHours(23, 59, 59, 999)).getTime()
      // const defaultOver =defaultBegin+86400000
      state.timeSelect=[defaultBegin,defaultOver]
      await getList()
    })
    return {
      ...toRefs(state),
      getList,
      handleFilter,
      handleSizeChange,
      handleCurrentChange
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input{
  width: 250px;
}
</style>>
