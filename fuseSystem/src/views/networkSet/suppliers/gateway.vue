<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">供应商网关</div>
    </div>
    <div class="tableHeader">
      <el-button type="primary" @click="openDialog('create')">
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加供应商
      </el-button>
      <div>
        <el-input v-model.trim="listQuery.findStr" placeholder="搜索网关名称、供应商名称" clearable @keyup.enter="handleFilter" @clear="handleFilter">
          <template #append>
            <el-button icon="el-icon-search" @click="handleFilter" />
          </template>
        </el-input>
      </div>
    </div>
    <el-table class="tableTooltip" v-loading="listLoading" :data="listData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
      <el-table-column label="ID" prop="supplierWanId"></el-table-column>
      <el-table-column label="供应商网关名称" prop="supplierWanName"></el-table-column>
      <el-table-column label="供应商名称" prop="netSupplierName"></el-table-column>
      <el-table-column label="所在城市" prop="cityInfo.cityName"></el-table-column>
      <el-table-column label="电信类型" prop="netSupplierType">
        <template #defalut="scope">{{netSupplierTypeText[scope.row.netSupplierType]}}</template>
      </el-table-column>
      <el-table-column label="备注" prop="memo">
        <template #default="scope">
          <el-tooltip v-if="scope.row.memo.length>20" placement="right" effect="light" popper-class="tablePoper">
            <template #content>
              <div>{{scope.row.memo}}</div>
            </template>
            <div class="ellipsisHidden">{{scope.row.memo}}</div>
          </el-tooltip>
          <div v-else>{{scope.row.memo}}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button type="text" @click="openDialog('edit',scope.row. supplierWanId)">修改</el-button>
          <el-button type="text" @click="deleteOne(scope.row)">删除</el-button>
          <el-button type="text" @click="$router.push({
                    path:'/networkset/supplier/ports',
                    query: {roomId: scope.row.roomId}})">端口</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 添加/编辑 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogFormVisible" :title="dialogTitleMap[openStatus]" width="692px" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="formRef" :model="form" label-width="121px" :rules="rules" label-position="right">
          <el-form-item label="供应商网关名称" prop="supplierWanName">
            <el-input v-model.trim="form.supplierWanName" maxlength="20" type="text" placeholder="请填写网关名称" show-word-limit />
          </el-form-item>
          <el-form-item label="供应商名称" prop="netSupplierName">
            <el-input v-model.trim="form.netSupplierName" maxlength="20" type="text" placeholder="请填写供应商名称" show-word-limit />
          </el-form-item>
          <el-form-item label="所在城市" prop="cityId">
            <el-select v-model="form.cityId" clearable placeholder="全部">
              <el-option v-for="item in options.cityOption" :key="item.cityId" :label="item.cityName" :value="item.cityId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电信类型" prop="netSupplierType" class="elecRadio">
            <el-radio v-for="(item, i) in 3" :key="i" v-model="form.netSupplierType" :label="i+1">{{netSupplierTypeText[i+1]}}</el-radio>
          </el-form-item>
          <el-form-item label="备注" prop="memo">
            <el-input v-model.trim="form.memo" type="textarea" maxlength="50" :rows="5" show-word-limit placeholder="可填写备注" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="submit()"> 确定</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import api from '@/api/networkSet/suppliers'
import options from '@/api/options'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup() {
    const state = reactive({
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
      },
      listLoading: false,
      listData: [],
      pageSizeArr: [10,20,30],
      total: 0,
      netSupplierTypeText: {
        1: '电信',
        2: '移动',
        3: '联通',
      },
      dialogFormVisible: false,
      form: {},
      formRef: '',
      dialogTitleMap: {
        create: '添加供应商',
        edit: '编辑供应商',
      },
      openStatus: '',
      rules:{
        supplierWanName: [{required: true, message:'网络供应商网关名称不能为空',trigger: 'blur'}],
        netSupplierName: [{required: true, message:'网络供应商名称不能为空',trigger: 'blur'}],
        cityId: [{required: true, message:'城市不能为空',trigger: 'change'}],
        netSupplierType: [{required: true, message:'用电类型不能为空',trigger: 'change'}]
      },
    })
    const getList = async () => {
      state.listLoading = true
      const data = await api.findSupplierWan(state.listQuery)
      state.listData = data.list
      state.total = data.total
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
    const openDialog = async (type, id) => {
      state.dialogFormVisible = true
      state.openStatus = type
      state.form.netSupplierType = 1
      if(type == 'edit'){
        state.form = await api.getSupplierWan({"supplierWanId": id})
      }
    }
    const dialogClose = () => {
      state.form = {}
      state.formRef.resetFields()
      state.dialogFormVisible = false
    }
    const deleteOne = (row) => {
      let city = row.cityInfo.cityName.slice(0,2)
      ElMessageBox.prompt(
        `确定删除供应商"${city}${state.netSupplierTypeText[row.netSupplierType]}-${row.supplierWanName}"吗？，若确定请输入供应商名称：`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString: 'true',
          inputValidator: (text) => {
            if (text === row.supplierWanName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delSupplierWan({ supplierWanId: row.id })
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
    const submit = () => {
      state.formRef.validate(async (valid) => {
        if (valid) {
          await api.saveSupplierWan(state.form)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '编辑成功',
              type: 'success',
            })
          }
          if (state.openStatus === 'create') {
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
    onMounted(async () => {
      await getList()
    })
    return {
      ...toRefs(state),
      options,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      openDialog,
      dialogClose,
      deleteOne,
      submit,
    }
  },
}
</script>
