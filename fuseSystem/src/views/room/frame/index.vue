<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">机柜信息</div>
    </div>
    <div class="tableHeader">
      <div class="moreBtns">
        <el-button type="primary" @click="openDialog('create')">
          <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加机柜
        </el-button>
        <el-dropdown>
          <el-button type="primary">
            <svg-icon icon-class="arrow-down" style="margin-right: 3px"></svg-icon> 更多操作
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push({path:'/room/frame/statistics'})">机房统计图</el-dropdown-item>
              <el-dropdown-item @click="$router.push({path:'/room/frame/reportform'})">机柜报表</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-button type="primary" @click="advancedSearch=!advancedSearch">
          <svg-icon :icon-class="advancedSearch?'arrow-up':'arrow-down'" style="margin-right: 3px"></svg-icon> 高级搜索
        </el-button>
        <el-checkbox v-model="displayStatistics" @click="handleshowstatpanel()" label="显示统计"></el-checkbox>
      </div>
      <div>
        <el-input v-model.trim="listQuery.findStr" placeholder="搜索机柜编号" clearable @keyup.enter="handleFilter" @clear="handleFilter">
          <template #append>
            <el-button icon="el-icon-search" @click="handleFilter" @keyup.enter="handleFilter" />
          </template>
        </el-input>
      </div>
    </div>
    <!-- 高级搜索 -->
    <div v-if="advancedSearch" class="advancedSearch">
      <div>
        按机房
        <el-select v-model="listQuery.queryCondition.roomId" clearable placeholder="全部">
          <el-option v-for="item in options.roomOption" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        按商务类型
        <el-select v-model="listQuery.queryCondition.financeType" clearable placeholder="全部">
          <el-option v-for="item in options.financeOption" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        按状态
        <el-select v-model="listQuery.queryCondition.status" clearable placeholder="全部">
          <el-option v-for="item in options.statusOption" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        按用电类型
        <el-select v-model="listQuery.queryCondition.electronicType" clearable placeholder="全部">
          <el-option v-for="item in options.electronicOption" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <el-button type="primary" @click="handleFilter">查询</el-button>
        <el-button @click="listQuery.queryCondition={}">重置</el-button>
      </div>
    </div>
    <!-- 表格和显示统计 -->
    <el-row :gutter="10">
      <el-col :xs="24" :md="colLayout.leftCol">
        <el-table v-loading="listLoading" :data="listData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass" @sort-change="sortChange">
          <el-table-column label="ID" prop="frameId"></el-table-column>
          <el-table-column label="所在机房" width="250px">
            <template #default="scope">
              {{ scope.row.cityName}} / {{scope.row.house}} / {{scope.row.floor}}F
              <el-tooltip :content="scope.row.memo" placement="right-start" effect="light" popper-class="tablePoper">
                <svg-icon v-if="scope.row.memo" icon-class="statusdesc" style="margin-right: 3px;"></svg-icon>
              </el-tooltip>
              <br>
              <el-tag :type="statusTagMap[scope.row.status]">
                {{ electronicTypeTextMap[scope.row.status] }}
              </el-tag>
              <el-tag :type="statusTagMap[scope.row.status]">
                {{ financeTypeTextMap[scope.row.status] }}
              </el-tag>
              <el-tag :type="statusTagMap[scope.row.status]">
                {{ statusTextMap[scope.row.status] }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="机柜编号" prop="position">
            <template #default="scope">
              <pre>{{ scope.row.useDimensionSizePercent }}</pre>
            </template>
          </el-table-column>
          <el-table-column label="总刻度数" prop="rulerSize" sortable="custom"></el-table-column>
          <el-table-column label="已用刻度数" prop="useDimensionSize"></el-table-column>
          <el-table-column label="服务数" prop="serverNum" sortable="custom"></el-table-column>
          <el-table-column label="总U数" prop="frameUnum" sortable="custom"></el-table-column>
          <el-table-column label="刻度使用率">
            <template #default="scope">
              {{ scope.row.useDimensionSizePercent }} %
            </template>
          </el-table-column>
          <el-table-column label="总电插数" prop="powerNum" sortable="custom"></el-table-column>
          <el-table-column label="总U数" prop="frameUnum" sortable="custom"></el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template #default="scope">
              <el-button type="text" @click="openDialog('edit', scope.row.frameId)">编辑</el-button>
              <el-button type="text" class="listDelBtn" @click="deleteFrame(scope.row.frameId, scope.row)">删除</el-button>
              <el-button type="text" @click="$router.push({
                path:'/room/frame/detail',
                query: {frameId:scope.row.frameId}
              })">查看机柜现状图</el-button>
              <el-button type="text" @click="openStatusDialog(scope.row)">启用/停用</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </el-col>
      <el-col :xs="24" :md="colLayout.rightCol" hidden-xs-only>
        <div class="pageTitle" style="width:100%">
          <div class="sign" />
          <div class="listGroup">机柜使用率</div>
        </div>
        <basePie boxName="statistic" name="机柜使用率" :data="{useTotal,total}" />
      </el-col>
    </el-row>
    <!-- 添加/编辑 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogFormVisible" :title="dialogTitleMap[openStatus]" width="490px" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="frameFormRef" :model="frameForm" label-width="80px" :rules="rules" label-position="right">
          <el-form-item label="所在机房" prop="roomId">
            <el-select v-model="frameForm.roomId" clearable placeholder="全部">
              <el-option v-for="item in options.roomOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机柜编号" prop="position">
            <el-input v-model.trim="frameForm.position" maxlength="20" type="text" placeholder="请填写机柜编号" show-word-limit />
          </el-form-item>
          <el-form-item label="总刻度数" prop="rulerSize" :step="1">
            <el-input-number v-model="frameForm.rulerSize" :min="0" :max="Infinity" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item label="总电插数" prop="powerNum" :step="1">
            <el-input-number v-model="frameForm.powerNum" :min="0" :max="100" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item label="总U数" prop="frameUnum" :step="1">
            <el-input-number v-model="frameForm.frameUnum" :min="0" :max="100" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item label="用电类型" prop="electronicType" class="elecRadio">
            <el-radio v-for="(item, i) in 4" :key="i" v-model="frameForm.electronicType" :label="i+1">{{electronicTypeTextMap[i+1]}}</el-radio>
          </el-form-item>
          <el-form-item label="商务类型" prop="financeType">
            <el-radio v-for="(item, i) in 2" :key="i" v-model="frameForm.financeType" :label="i+1">{{financeTypeTextMap[i+1]}}</el-radio>
          </el-form-item>
          <el-form-item label="备注" prop="memo">
            <el-input v-model.trim="frameForm.memo" type="textarea" maxlength="50" :rows="5" show-word-limit placeholder="可填写备注" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="submit()"> 确定</el-button>
        </template>
      </el-dialog>
    </div>
    <!-- 启用/停用：修改机柜状态 -->
    <div v-dialogdrag>
      <el-dialog v-model="updateStatusVisible" title="修改机柜状态" width="680px" :close-on-click-modal="false" @close="closeStatusDialog">
        <el-form ref="updateStatusFormRef" :model="updateStatusForm" label-width="80px" :rules="statusRules" label-position="right">
          <el-form-item label="当前机柜">
            <span>{{ updateStatusForm.cityName }} / {{ updateStatusForm.house }} / {{ updateStatusForm.floor }}F</span> <span style="margin-left:10px">{{ updateStatusForm.position}}</span>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-radio v-for="(item, i) in 2" :key="i" v-model="updateStatusForm.status" :label="i+1">{{statusTextMap[i+1]}}</el-radio>
          </el-form-item>
          <el-form-item label="更新时间" prop="doTime">
            <el-date-picker v-model="updateStatusForm.doTime" type="datetime" placeholder="请填写时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="操作备注" prop="memo">
            <el-input v-model.trim="updateStatusForm.memo" type="textarea" maxlength="50" :rows="5" show-word-limit placeholder="可填写备注" />
          </el-form-item>
        </el-form>
        <hr>
        <div class="flexBetween">
          <div>操作日志</div>
          <svg-icon :icon-class="showLogs?'arrow-up':'arrow-down'" style="color:#909399;margin-right: 3px" @click="showLogs = !showLogs"></svg-icon>
        </div>
        <el-table v-if="showLogs" :data="statusLogs" style="width: 100%;margin-bottom:24px" max-height="220px">
          <el-table-column prop="doTime" label="操作时间" width="180px">
            <template #default="scope">
              {{timesub(scope.row.doTime)}}
            </template>
          </el-table-column>
          <el-table-column prop="status" label="操作">
            <template #default="scope">
              {{statusTextMap[scope.row.status]}}
            </template>
          </el-table-column>
          <el-table-column prop="username" label="操作人"> </el-table-column>
          <el-table-column label="操作备注" prop="memo">
        <template #default="scope">
          <el-tooltip v-if="scope.row.memo.length>20" placement="bottom" effect="light" popper-class="tablePoper">
              <template #content>
                <div>{{scope.row.memo}}</div>
              </template>
              <div class="ellipsisHidden">{{scope.row.memo}}</div>
            </el-tooltip>
            <div v-else>{{scope.row.memo}}</div>
        </template>
      </el-table-column>
        </el-table>
        <template #footer>
          <el-button @click="closeStatusDialog">取消</el-button>
          <el-button type="primary" @click="updateStatusSubmit()"> 确定</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import api from '@/api/room/frame'
import options from '@/api/options'
import { reactive, toRefs } from '@vue/reactivity'
import { ElMessage, ElMessageBox } from 'element-plus'
import basePie from '@/components/Echarts/basePie.vue'
import { onMounted } from '@vue/runtime-core'
export default {
  components: {
    basePie,
  },
  setup() {
    const state = reactive({
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {
          roomId: '',
          cityName: '',
          house: '',
          floor: '',
          position: '',
          electronicType: '',
          financeType: '',
          status: '',
        },
        sortData: {
          order: '',
          prop: '',
        },
      },
      advancedSearch: false, // 高级搜索
      displayStatistics: false, // 显示统计
      dialogFormVisible: false,
      openStatus: '',
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      useTotal: 0,
      listLoading: false,
      listData: [],
      colLayout: {
        leftCol: 24,
        rightCol: 0,
      },
      statusTagMap: {
        1: 'success',
        2: 'warning',
        3: 'danger',
      },
      electronicTypeTextMap: {
        1: '直流',
        2: '交流',
        3: '直流交流通用',
        4: '未知',
      },
      financeTypeTextMap: {
        1: '本地IDC',
        2: '省直签',
      },
      statusTextMap: {
        1: '启用',
        2: '停用',
      },
      frameForm: {
        rulerSize: 180,
        powerNum: 0,
        frameUnum: 0,
      },
      frameFormRef: '',
      dialogTitleMap: {
        create: '添加机柜',
        edit: '编辑机柜',
      },
      updateStatusVisible: false, // 启用停用弹窗
      updateStatusFormRef: '',
      updateStatusForm: {},
      statusLogs: [],
      showLogs: true,
      rules: {
        roomId: [{ required: true, message: '机房不能为空', trigger: 'blur' }],
        position: [
          { required: true, message: '机房编号不能为空', trigger: 'blur' },
        ],
        rulerSize: [{ required: true, message: '总刻度数不能为空' }],
        powerNum: [{ required: true, message: '总电插数不能为空' }],
        frameUnum: [{ required: true, message: '总U数不能为空' }],
        electronicType: [
          { required: true, message: '用电类型不能为空', trigger: 'blur' },
        ],
        financeType: [
          { required: true, message: '商务类型不能为空', trigger: 'blur' },
        ],
      },
      statusRules: {
        status: [{ required: true, message: '请选择状态', trigger: 'blur' }],
        doTime: [{ required: true, message: '请选择时间', trigger: 'blur' }],
        memo: [{ required: true, message: '请填写备注', trigger: 'blur' }],
      },
    })
    // 显示机柜
    const handleshowstatpanel = (val) => {
      if (!state.displayStatistics) {
        state.colLayout = {
          leftCol: 18,
          rightCol: 6,
        }
      } else {
        state.colLayout = {
          leftCol: 24,
          rightCol: 0,
        }
      }
    }
    // 表格
    const getList = async () => {
      state.listLoading = true
      const result = await api.findFrame(state.listQuery)
      state.listData = result.list
      state.total = result.total
      state.useTotal = result.useTotal
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
    const sortChange = ({ column, prop, order }) => {
      if (order === 'descending') {
        state.listQuery.sortData.order = 'desc'
      } else if (order === 'ascending') {
        state.listQuery.sortData.order = 'asc'
      } else {
        state.listQuery.sortData.order = ''
      }
      state.listQuery.sortData.prop = prop
      state.listQuery.currentPage = 1
      getList()
    }
    const deleteFrame = async (id, row) => {
      ElMessageBox.prompt(
        '<pre>确定删除机柜"' +
          row.position +
          '"吗？，若确定请输入机柜编号：</pre>',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString: 'true',
          inputValidator: (text) => {
            if (text === row.position) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delFrame({ frameId: id })
          getList()
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除',
          })
        })
    }
    // 添加/编辑
    const openDialog = async (status, id) => {
      state.openStatus = status
      if (status === 'edit') {
        state.frameForm = await api.getFrame({ frameId: id })
        state.dialogFormVisible = true
      } else {
        state.dialogFormVisible = true
      }
    }
    const dialogClose = () => {
      state.frameForm = {
        rulerSize: 180, // rulerSize默认180
        powerNum: 0,
        frameUnum: 0,
      }
      state.frameFormRef.resetFields()
      state.dialogFormVisible = false
    }
    const submit = async () => {
      state.frameFormRef.validate(async (valid) => {
        if (valid) {
          await api.saveFrame(state.frameForm)
          var electronic = state.frameForm.electronicType
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '编辑机柜成功',
              type: 'success',
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加机柜成功',
              type: 'success',
            })
          }
          setTimeout(() => {
            if (electronic) {
              ElMessage({
                message: '请在运维通填写工单，通知运维人员，确认用电类型！',
                type: 'info',
                duration: 5000,
              })
            }
          }, 3000)
          dialogClose()
          getList()
        }
      })
    }
    // 启用/停用
    const openStatusDialog = (row) => {
      //2 停用 1 启用
      ElMessageBox.confirm(
        `确定启用/停用机柜"${row.cityName}/${row.house}/${row.floor}F ${row.position}"`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }
      )
        .then(async () => {
          const item = await api.getFrame({ frameId: row.id })
          state.updateStatusForm = {
            cityName: item.cityName,
            house: item.house,
            floor: item.floor,
            position: item.position,
            status: item.status,
          }
          const result = await api.findFrameLogs({ frameId: row.id })
          state.statusLogs = result.list
          state.updateStatusVisible = true
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消操作',
          })
        })
    }
    const updateStatusSubmit = () => {
      state.updateStatusFormRef.validate(async (valid) => {
        if (valid) {
          await api.updateFrameStatus(state.updateStatusForm)
          ElMessage({
            message: '操作成功！',
            type: 'success',
          })
          closeStatusDialog()
          getList()
        }
      })
    }
    const closeStatusDialog = () => {
      state.updateStatusForm = {}
      state.updateStatusVisible = false
    }
    onMounted(async () => {
      await getList()
    })
    return {
      ...toRefs(state),
      options,
      handleshowstatpanel,
      getList,
      openDialog,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      dialogClose,
      submit,
      deleteFrame,
      openStatusDialog,
      updateStatusSubmit,
      closeStatusDialog,
    }
  },
}
</script>
<style scoped lang="scss">
.el-tag {
  margin-right: 8px;
  padding: 0 4px;
  height: 21px;
  line-height: 19px;
}
.el-table ::v-deep .el-table__row .el-table__cell {
  // 表格行高度 59
  padding: 15px 0;
}
.el-table ::v-deep .el-button {
  min-height: 0 !important;
  padding: 0;
}
.el-dialog .elecRadio ::v-deep .el-form-item__content {
  display: flex;
  justify-content: space-between;
}
</style>

