<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">机房管理</div>
    </div>
    <el-row :gutter="30">
      <el-col :xs="24" :md="colLayout.leftCol">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="城市管理" name="first">
            <div class="tableHeader">
              <el-button type="primary" @click="openDialog('cityCreate')">
                <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加城市
              </el-button>
              <div>
                <el-input v-model.trim="listQuery.findStr" placeholder="搜索城市" clearable @keyup.enter="handleFilter" @clear="handleFilter">
                  <template #append>
                    <el-button icon="el-icon-search" @click="handleFilter" />
                  </template>
                </el-input>
              </div>
            </div>
            <el-table v-loading="listLoading" :data="cityListData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
              <el-table-column label="ID" prop="cityId"></el-table-column>
              <el-table-column label="城市" prop="cityName"></el-table-column>
              <el-table-column fixed="right" label="操作">
                <template #default="scope">
                  <el-button type="text" @click="openDialog('cityEdit',scope.row.cityId)">修改</el-button>
                  <el-button type="text" @click="deleteOne(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </el-tab-pane>
          <el-tab-pane label="位置管理" name="second">
            <div class="tableHeader">
              <div>
                <el-button type="primary" @click="openDialog('roomCreate')" style="margin-right: 16px">
                  <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加机房
                </el-button>
                <el-button type="primary" @click="$router.push('/room/roomposition/visualize')" style="margin-right: 24px">
                  <svg-icon icon-class="visual-room" style="margin-right: 6px"></svg-icon>机房可视化
                </el-button>
                <el-checkbox v-model="displayStatistics" @click="handleshowstatpanel()" label="显示统计"></el-checkbox>
              </div>
              <div>
                <el-input v-model.trim="listQuery.findStr" placeholder="搜索城市、标记" clearable @keyup.enter="handleFilter" @clear="handleFilter">
                  <template #append>
                    <el-button icon="el-icon-search" @click="handleFilter" />
                  </template>
                </el-input>
              </div>
            </div>
            <el-table v-loading="listLoading" :data="roomListData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
              <el-table-column label="房间ID" prop="roomId"></el-table-column>
              <el-table-column label="城市" prop="cityName"></el-table-column>
              <el-table-column label="地点" prop="house"></el-table-column>
              <el-table-column label="楼层" prop="floor"></el-table-column>
              <el-table-column label="标记" prop="mark">
                <template #default="scope">
                  <pre>{{ scope.row.mark }}</pre>
                </template>
              </el-table-column>
              <el-table-column label="状态" prop="state">
                <template #default="scope">
                  {{scope.row.state == 1 ? '可用' : '废用'}}
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作">
                <template #default="scope">
                  <el-button type="text" @click="openDialog('roomEdit',scope.row.roomId)">修改</el-button>
                  <el-button type="text" @click="deleteOne(scope.row)">删除</el-button>
                  <el-button type="text" @click="$router.push({
                    path:'/room/roomposition/visualize',
                    query: {roomId: scope.row.roomId}
                  })">可视化管理</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :xs="24" :md="colLayout.rightCol">
        <div class="roseStyle" v-if="displayStatistics">
          <div class="pageTitle">
            <div class="sign" />
            <div class="listGroup">机房统计图</div>
          </div>
          <div>机房：{{roomSum}}（个）</div>
          <div class="pieBox">
            <rosePie boxName="cityRose" :data="roseData" seriesName="城市机房占比" width="400" />
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 添加/修改城市 -->
    <div v-dialogdrag>
      <el-dialog v-model="cityDialogVisible" width="532px" :title="dialogTitleMap[openStatus]" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="cityFormRef" :model="cityForm" label-width="55px" label-position="right">
          <el-form-item label="ID" prop="cityId" v-if="openStatus=='cityEdit'" :rules="[{ required: true,trigger: 'blur' }]">
            <el-input v-model.trim="cityForm.cityId" disabled />
          </el-form-item>
          <el-form-item label="城市" prop="cityName" :rules="[{ required: true, message: '请填写城市名称', trigger: 'blur' }]">
            <el-input v-model.trim="cityForm.cityName" type="text" show-word-limit placeholder="请填写城市名称" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="onSubmit">
            确定
          </el-button>
        </template>
      </el-dialog>
    </div>
    <!-- 添加/修改机房地址 -->
    <div v-dialogdrag>
      <el-dialog v-model="roomDialogVisible" width="664px" :title="dialogTitleMap[openStatus]" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="roomFormRef" :model="roomForm" label-width="70px" label-position="right" :rules="rules">
          <el-form-item label="城市" prop="cityName">
            <el-select v-model="roomForm.cityName" clearable placeholder="请选择城市">
              <el-option v-for="item in cityListData" :key="item.cityId" :label="item.cityName" :value="item.cityId"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地点" prop="house">
            <el-input v-model.trim="roomForm.house" placeholder="请填写地点" />
          </el-form-item>
          <el-form-item label="楼层" prop="floor">
            <el-input v-model.trim="roomForm.floor" placeholder="请填写楼层" />
          </el-form-item>
          <el-form-item label="标记" prop="mark">
            <el-input v-model.trim="roomForm.mark" placeholder="请填写标记" />
          </el-form-item>
          <el-form-item label="标记" prop="state">
            <el-radio-group v-model="roomForm.state">
              <el-radio :label="1">可用</el-radio>
              <el-radio :label="2">废用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="平面图" prop="filePath"></el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="onSubmit">
            确定
          </el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import api from '@/api/room/position'
import { ElMessage, ElMessageBox } from 'element-plus'
import rosePie from '@/components/Echarts/rosePie.vue'
export default {
  components: {
    rosePie,
  },
  setup() {
    const state = reactive({
      activeName: 'first',
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
      },
      displayStatistics: false,
      colLayout: {
        leftCol: 24,
        rightCol: 0,
      },
      roseData: [],
      roomSum: 0,
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      listLoading: false,
      cityListData: [],
      roomListData: [],
      dialogTitleMap: {
        cityCreate: '添加城市',
        cityEdit: '编辑城市',
        roomCreate: '添加机房',
        roomEdit: '编辑机房',
      },
      openStatus: '',
      cityDialogVisible: false,
      cityForm: {},
      cityFormRef: '',
      roomDialogVisible: false,
      roomForm: {},
      roomFormRef: '',
      rules: {
        cityName: [
          { required: true, trigger: 'blur', message: '城市不能为空' },
        ],
        house: [{ required: true, trigger: 'blur', message: '地点不能为空' }],
        floor: [{ required: true, trigger: 'blur', message: '楼层不能为空' }],
        mark: [{ required: true, trigger: 'blur', message: '标记不能为空' }],
        state: [{ required: true, trigger: 'blur', message: '状态不能为空' }],
        // filePath: [{required: true, trigger: 'blur', message: '平面图不能为空'}],
      },
    })
    const handleClick = (tab, event) => {
      state.activeName = tab.props.name
      state.total = 0
      getList()
    }
    // 显示机柜
    const handleshowstatpanel = async (val) => {
      const data = await api.getAllCityRoomCount()
      state.roseData = []
      state.roomSum = 0
      data.cityRoomCountList.forEach((item, index) => {
        state.roseData.push({
          value: item,
          name: data.cityNameList[index],
        })
        state.roomSum += item
      })
      state.roseData.sort(function (a, b) {
        return b.value - a.value
      })
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
    const getList = async () => {
      state.listLoading = true
      if (state.activeName == 'first') {
        var data = await api.findCity(state.listQuery)
        state.cityListData = data.list
      } else if (state.activeName == 'second') {
        var data = await api.findComproom(state.listQuery)
        state.roomListData = data.list
      }
      state.total = data.total
      state.listLoading = false
    }
    const openDialog = async (type, id) => {
      if (state.activeName == 'first') {
        state.cityDialogVisible = true
        state.openStatus = type
        if (type == 'cityEdit') {
          state.cityForm = await api.getCity({ cityId: id })
        }
      } else if (state.activeName == 'second') {
        state.roomDialogVisible = true
        state.openStatus = type
        if (type == 'roomCreate') {
          state.roomForm.state = 1
        }
        if (type == 'roomEdit') {
          state.roomForm = await api.getComproom({ roomId: id })
        }
      }
    }
    const dialogClose = () => {
      if (state.activeName == 'first') {
        state.cityFormRef.resetFields()
        state.cityDialogVisible = false
      } else if (state.activeName == 'second') {
        state.roomFormRef.resetFields()
        state.roomDialogVisible = false
      }
    }
    const onSubmit = async () => {
      if (state.activeName == 'first') {
        state.cityFormRef.validate(async (valid) => {
          if (valid) {
            await api.saveCity(state.cityForm)
            if (state.openStatus === 'cityEdit') {
              ElMessage({
                message: '编辑成功',
                type: 'success',
              })
            }
            if (state.openStatus == 'cityCreate') {
              ElMessage({
                message: '添加成功',
                type: 'success',
              })
            }
            dialogClose()
            getList()
          }
        })
      } else if (state.activeName == 'second') {
        state.roomFormRef.validate(async (valid) => {
          if (valid) {
            await api.saveComproom(state.roomForm)
            if (state.openStatus === 'roomEdit') {
              ElMessage({
                message: '编辑成功',
                type: 'success',
              })
            }
            if (state.openStatus == 'roomCreate') {
              ElMessage({
                message: '添加成功',
                type: 'success',
              })
            }
            dialogClose()
            getList()
          }
        })
      }
    }
    const deleteOne = (row) => {
      if (state.activeName == 'first') {
        ElMessageBox.confirm(`确定删除城市${row.cityName}吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        })
          .then(async () => {
            await api.delCity(row.cityId)
            getList()
            ElMessage({
              type: 'success',
              message: '删除成功!',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '已取消删除',
            })
          })
      } else if (state.activeName == 'second') {
        ElMessageBox.prompt(
          '<pre>确定删除机房"' +
            row.mark +
            '"吗？，若确定请输入机房标记：</pre>',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPlaceholder: '请输入',
            dangerouslyUseHTMLString: 'true',
            inputValidator: (text) => {
              if (text === row.mark) {
                return true
              } else {
                return '输入错误！'
              }
            },
          }
        )
          .then(async () => {
            await api.comproomDelOne({ roomId: row.id })
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
    onMounted(async () => {
      await getList()
    })
    return {
      ...toRefs(state),
      handleClick,
      handleshowstatpanel,
      getList,
      openDialog,
      dialogClose,
      deleteOne,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      onSubmit,
    }
  },
}
</script>
<style scoped lang = "scss">
.pieBox {
  padding: 50px 24px;
  margin-top: 12px;
  border: 1px solid dodgerblue !important;
}
</style>
