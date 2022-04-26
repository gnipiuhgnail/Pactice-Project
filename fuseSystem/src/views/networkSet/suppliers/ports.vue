<template>
 <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">供应商端口</div>
    </div>
    <div class="tableHeader">
      <el-button type="primary" @click="openDialog('create')">
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加供应商端口
      </el-button>
      <div>
        <el-input v-model.trim="listQuery.findStr" placeholder="搜索端口名称、端口编号" clearable @keyup.enter="handleFilter" @clear="handleFilter">
          <template #append>
            <el-button icon="el-icon-search" @click="handleFilter" />
          </template>
        </el-input>
      </div>
    </div>
    <el-table class="tableTooltip" v-loading="listLoading" :data="listData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
      <el-table-column label="ID" prop="supplierWanId"></el-table-column>
      <el-table-column label="供应商端口名称" prop="supplierPortName"></el-table-column>
      <el-table-column label="供应商端口编号" prop="supplierPortNo"></el-table-column>
      <el-table-column label="总流量" prop="suppliersTotalFlow"></el-table-column>
      <el-table-column label="绑定状态" prop="bindStatus">
        <template #defalut="scope">{{bindStatusText[scope.row.bindStatus]}}</template>
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
          <el-button type="text" @click="openDialog('edit',scope.row.supplierWanId)">修改</el-button>
          <el-button type="text" @click="deleteOne(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 添加/编辑 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogFormVisible" :title="dialogTitleMap[openStatus]" width="692px" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="formRef" :model="form" label-width="121px" :rules="rules" label-position="right">
          <el-form-item label="绑定设备端口" prop="portname">
            <div class="flexBetween">
              <el-input v-model.trim="form.portname" type="text" placeholder="请选择设备端口" :disabled="true"/>
             <el-button type="primary" @click="selectPortDialog = true" style="margin-left:16px">选择设备端口</el-button>
            </div>
          </el-form-item>
          <el-form-item label="供应商端口名称" prop="supplierPortName">
            <el-input v-model.trim="form.supplierPortName" maxlength="20" type="text" placeholder="请填写供应商端口名称" show-word-limit />
          </el-form-item>
          <el-form-item label="供应商端口编号" prop="supplierPortNo">
            <el-input v-model.trim="form.supplierPortNo" maxlength="20" type="text" placeholder="请填写供应商端口编号" />
          </el-form-item>
          <el-form-item label="总流量" prop="suppliersTotalFlow">
            <el-input v-model.trim="form.suppliersTotalFlow" maxlength="20" type="text" placeholder="可填写总流量"/>
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
    {{selectPortDialog}}
    <BindPortDialog :title="selectPortTitle " :dialogFormVisible="selectPortDialog" />
 </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import api from '@/api/networkSet/suppliers'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import BindPortDialog from '@/components/BindPortDialog/index.vue'
export default {
  components: {
    BindPortDialog
  },
  setup(){
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
      bindStatusText: {
        1: '已绑定网关端口',
        0: '未绑定'
      },
      dialogFormVisible: false,
      form: {},
      formRef: '',
      dialogTitleMap: {
        create: '添加供应商端口',
        edit: '编辑供应商端口',
      },
      openStatus: '',
      rules:{
        portname: [{required: true, message:'绑定设备端口不能为空',trigger: 'change'}],
        supplierPortName: [{required: true, message:'供应商端口名称不能为空',trigger: 'blur'}],
        supplierPortNo: [{required: true, message:'供应商端口编号不能为空',trigger: 'blur'}],
      },
      selectPortDialog: false,
      selectPortTitle: '绑定供应商端口',
    })
    const getList = async () => {
      state.listLoading = true
      const data = await api.findSupplierWanPort()
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
      if(type == 'edit'){
        state.form = await api.getSupplierWanPort({"supplierWanPortId": id})
      }
    }
    const dialogClose = () => {
      state.form = {}
      state.formRef.resetFields()
      state.dialogFormVisible = false
    }
    const deleteOne = (row) => {
      ElMessageBox.prompt(
        `确定删除端口"${row.supplierPortName}"吗？，若确定，请输入供应商端口名称：`,
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString: 'true',
          inputValidator: (text) => {
            if (text === row.supplierPortName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delSupplierWanPort({ supplierPortNameId: row.id })
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
          await api.saveSupplierWanPort(state.form)
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
    const router = useRouter()
    onMounted(async ()=>{
      state.supplierWanPortId = await router.currentRoute.value.query.supplierWanPortId
      await getList()
    })
    return {
      ...toRefs(state),
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      openDialog,
      dialogClose,
      deleteOne,
      submit,
    }
  }
}
</script>
