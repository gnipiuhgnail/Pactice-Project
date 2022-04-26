<template>
  <div>
    <!-- 弹窗标题 -->
    <!-- 选择设备端口 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogVisible" :title="title" width="1412px" :close-on-click-modal="false" @close="dialogClose">
        <el-row :gutter="20">
          <!-- 设备列表 -->
        <el-col :span="9">
          <svg-icon icon-class="table-title" style="margin-right: 6px"></svg-icon> 设备列表
          <div class="tableHeader">
            <el-input v-model.trim="deviceListQuery.findStr" placeholder="输入关键字进行搜索" clearable @keyup.enter="handleFilter('device')" @clear="handleFilter('device')">
              <template #append>
                <el-button icon="el-icon-search" @click="handleFilter('device')" />
              </template>
            </el-input>
          </div>
          <el-table class="tableTooltip" v-loading="deviceListLoading" :data="deviceListData" :row-click="portList(row.deviceId)" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
            <el-table-column label="设备名称" prop="deviceName"></el-table-column>
            <el-table-column label="SN" prop="sn"></el-table-column>
            <el-table-column label="设备类型" prop="devicetypemsg"></el-table-column>
            <el-table-column label="所在机柜" prop="frameId"></el-table-column>
          </el-table>
          <el-pagination v-if="deviceTotal>0" class="rightPagination" :page-sizes="devicePageSizeArr" :current-page="deviceListQuery.currentPage" :page-size="deviceListQuery.pageSize" :total="deviceTotal" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange('device')" @current-change="handleCurrentChange('device')" />
        </el-col>
        <!-- 设备端口列表：如果是供应商，单选；是聚合端口，多选 -->
        <el-col :span="15">
          <svg-icon icon-class="table-title" style="margin-right: 6px"></svg-icon> 设备端口列表
          <div class="tableHeader">
            <el-input v-model.trim="portListQuery.findStr" placeholder="输入关键字进行搜索" clearable @keyup.enter="handleFilter('port')" @clear="handleFilter('port')">
              <template #append>
                <el-button icon="el-icon-search" @click="handleFilter('port')" />
              </template>
            </el-input>
          </div>
          <el-table class="tableTooltip" v-loading="portListLoading" :data="portListData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
            <el-table-column label="名称" prop="portName"></el-table-column>
            <el-table-column label="外网IP" prop="portIp"></el-table-column>
            <el-table-column label="类型" prop="portType"></el-table-column>
            <el-table-column label="绑定" prop="bindType">
              <template #defalut="scope">{{scope.row.bindType?scope.row.bindType:'无绑定'}}</template>
            </el-table-column>
            <el-table-column label="使用状态" prop="portUseStatus">
              <template #defalut="scope">{{portUseStatusText[scope.row.portUseStatus]}}</template>
            </el-table-column>
            <el-table-column label="检查状态" prop="portCheckStatus">
              <template #defalut="scope">{{portCheckStatusText[scope.row.portCheckStatus]}}</template>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
              <template #default="scope">
                <el-button type="text" @click="selectPort(scope.row.supplierWanId)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination v-if="portTotal>0" class="rightPagination" :page-sizes="portPageSizeArr" :current-page="portListQuery.currentPage" :page-size="portListQuery.pageSize" :total="portTotal" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange('port')" @current-change="handleCurrentChange('port')" />
        </el-col>
        </el-row>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import api from '@/api/common/selectPort'
export default {
  props: {
    title: String,
    dialogFormVisible: Boolean,
  },
  // 接收弹窗title和是否打开弹窗
  // 返回选择的端口id
  setup(props) {
    const state = reactive({
      dialogVisible: false,
      deviceListQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
      },
      deviceList: [],
      deviceListLoading: false,
      devicePageSizeArr: [10, 20, 30],
      deviceTotal: 0,
      portListQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
      },
      portList: [],
      portListLoading: false,
      portPageSizeArr: [10, 20, 30],
      portTotal: 0,
      portUseStatusText: {
        1:"启用",
        2:"停用"
      },
      portCheckStatusText: {
        1: "up",
        2: "down"
      }
    })
    state.dialogVisible = props.dialogFormVisible
    const dialogClose = () => {
      state.form = {}
      state.formRef.resetFields()
      state.dialogFormVisible = false
    }
    const getDeviceList = async () => {
      state.deviceListLoading = true
      const data = await api.WanFind() // 不知道要不要传参
      state.deviceList = data.list
      state.deviceTotal = data.total
      state.deviceListLoading = false
    }
    const getPortList = async (deviceId) => {
      state.portListLoading = true
      const data = await api.WanPortFind({deviceId:deviceId})
      state.portList = data.list
      state.portTotal = data.total
      state.portListLoading = false
    }
    const handleFilter = (type) => {
      if(type == 'device'){
        state.deviceListQuery.currentPage = 1
        getDeviceList()
      }else if(type == 'port'){
        state.portListQuery.currentPage = 1
        getPortList()
      }
    }
    const handleSizeChange = (val, type) => {
      if(type == 'device'){
        state.deviceListQuery.pageSize = 1
        state.deviceListQuery.currentPage = 1
        getDeviceList()
      }else if(type == 'port'){
        state.portListQuery.pageSize = 1
        state.portListQuery.currentPage = 1
        getPortList()
      }
    }
    const handleCurrentChange = (val, type) => {
      if(type == 'device'){
        state.deviceListQuery.currentPage = val
        getDeviceList()
      }else if(type == 'port'){
        state.portListQuery.currentPage = val
        getPortList()
      }
    }
    const selectPort = () => {}
    onMounted(async ()=>{
      await getDeviceList()
    })
    return {
      ...toRefs(state),
      dialogClose,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      getDeviceList,
      getPortList,
      selectPort,
    }
  },
}
</script>
