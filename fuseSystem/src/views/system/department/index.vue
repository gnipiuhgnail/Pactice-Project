<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">
        部门管理
      </div>
    </div>
    <div class="tableHeader">
      <el-button type="primary" @click="openDialog('create')">
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加部门
      </el-button>
      <div>
          <el-input v-model.trim="listQuery.findStr" placeholder="搜索部门名称" clearable @keyup.enter="handleFilter" @clear="handleFilter">
            <template #append>
              <el-button icon="el-icon-search" @click="handleFilter" />
            </template>
          </el-input>
      </div>
    </div>
    <el-table v-loading="listLoading" :data="listData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass" @sort-change="sortChange">
      <el-table-column label="ID">
        <template #default="scope">
          <pre>{{ scope.row.deptId }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="部门名称" prop="deptName" sortable='custom'>
        <template #default="scope">
          <pre>{{ scope.row.deptName }}</pre>
          <!-- <span style="white-space:pre">{{ scope.row.deptName }}</span> -->
        </template>
      </el-table-column>
      <el-table-column label="部门描述" prop="deptDesc" sortable='custom'>
        <template #default="scope">
          {{ scope.row.deptDesc }}
        </template>
      </el-table-column>
      <el-table-column label="状态" sortable="custom" prop="deptStatues">
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.deptStatues]">
            {{ statusTextMap[scope.row.deptStatues] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button type="text" size="small" @click="openDialog('edit',scope.row.deptId)">编辑</el-button>
          <el-button type="text" class="listDelBtn" @click="deleteDept(scope.row.deptId,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <div v-dialogdrag>
      <el-dialog v-model="dialogFormVisible" width="532px" :title="dialogTitleMap[openStatus]" :close-on-click-modal="false" @close="dialogClose">
        <el-form ref="deptFormRef" :model="deptForm" label-width="80px" :rules="rules" label-position="right">
          <el-form-item label="部门名称" prop="deptName">
            <el-input v-model.trim="deptForm.deptName" maxlength="20" type="text" show-word-limit placeholder="请填写部门名称" />
          </el-form-item>
          <el-form-item label="部门描述" prop="deptDesc">
            <el-input v-model.trim="deptForm.deptDesc" type="textarea" maxlength="50" :rows="5" show-word-limit placeholder="请填写部门描述" />
          </el-form-item>
          <el-form-item label="状态" prop="deptStatus">
            <el-select v-model="deptForm.deptStatus" style="width: 100%">
              <el-option label="可用" :value="1" />
              <el-option label="停用" :value="2" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="submit()">
            确定
          </el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/api/system/department'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup() {
    const state = reactive({
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
        sortData: {
          order: '',
          prop: '',
        },
      },
      dialogFormVisible: false,
      openStatus: '',
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      listLoading: false,
      listData: [],
      deptForm: {
        deptStatus: 1,
      },
      deptFormRef: '',
      statusTagMap: {
        1: 'success',
        2: 'danger',
      },
      statusTextMap: {
        1: '可用',
        2: '停用',
      },
      dialogTitleMap: {
        create: '添加部门',
        edit: '编辑部门',
      },
      rules: {
        deptName: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
        ],
      },
    })
    const getList = async () => {
      state.listLoading = true
      const result = await api.findDept(state.listQuery)
      state.listData = result.list
      state.total = result.total
      state.listLoading = false
    }
    const openDialog = async (status, id) => {
      state.openStatus = status
      if (status === 'edit') {
        state.deptForm = await api.getDept({ deptId: id })
        state.dialogFormVisible = true
      } else {
        state.dialogFormVisible = true
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
    const dialogClose = () => {
      state.deptForm = {
        deptStatus: 1,
      }
      state.deptFormRef.resetFields()
      state.dialogFormVisible = false
    }
    const submit = async () => {
      state.deptFormRef.validate(async (valid) => {
        if (valid) {
          await api.saveDept(state.deptForm)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '编辑部门成功',
              type: 'success',
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加部门成功',
              type: 'success',
            })
          }
          dialogClose()
          getList()
        }
      })
    }
    const deleteDept = async (id, row) => {
      ElMessageBox.prompt(
        '<pre>确定删除部门"' +
          row.deptName +
          '"吗？，若确定请输入部门名称：</pre>',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString: 'true',
          inputValidator: (text) => {
            if (text === row.deptName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delDept({ deptId: id })
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
    onMounted(async () => {
      await getList()
    })
    return {
      ...toRefs(state),
      getList,
      openDialog,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      dialogClose,
      submit,
      deleteDept,
    }
  },
}
</script>
