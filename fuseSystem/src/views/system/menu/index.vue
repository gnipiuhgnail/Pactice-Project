<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">菜单管理</div>
    </div>

    <div class="tableHeader">
      <el-button type="primary" @click="openDialog('create')">
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon
        >添加菜单
      </el-button>
      <div>
          <el-input
            v-model.trim="listQuery.findStr"
            placeholder="搜索菜单名称"
            clearable
            @keyup.enter="handleFilter"
            @clear="handleFilter"
          >
            <template #append>
              <el-button icon="el-icon-search" @click="handleFilter" />
            </template>
          </el-input>
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
      <el-table-column label="菜单名称">
        <template #default="scope">
          <pre>{{ scope.row.menuName }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="父级菜单"
        prop="parentId"
        sortable="custom"
      >
        <template #default="scope">
          <span v-if="scope.row.parent">{{ scope.row.parent.menuName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="前端URL路径">
        <template #default="scope">
          {{ scope.row.urlPath }}
        </template>
      </el-table-column>
      <el-table-column
        label="索引(影响菜单排序)"
        sortable="custom"
        prop="menuIndex"
      >
        <template #default="scope">
          {{ scope.row.menuIndex }}
        </template>
      </el-table-column>
      <el-table-column
        label="菜单状态"
        prop="menuStatus"
        sortable="custom"
      >
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.menuStatus]">
            {{ statusTextMap[scope.row.menuStatus] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button
            v-if="scope.row.reserveStatus == 0"
            type="text"
            size="small"
            @click="openDialog('edit', scope.row.frontendId)"
            >编辑</el-button
          >
          <el-button
            v-if="scope.row.reserveStatus == 0"
            type="text"
            class="listDelBtn"
            @click="deleteMenu(scope.row.frontendId, scope.row)"
            >删除</el-button
          >
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
    <div v-dialogdrag>
      <el-dialog
        v-model="dialogFormVisible"
        width="1030px"
        :title="dialogTitleMap[openStatus]"
        :close-on-click-modal="false"
        @close="dialogClose"
      >
        <el-form
          ref="menuFormRef"
          :model="menuForm"
          label-width="145px"
          class="defaultForm"
          :rules="rules"
          label-position="right"
        >
          <div style="display: flex">
            <div style="width: 50%; margin-left: -68px">
              <el-form-item label="菜单名称" prop="menuName">
                <el-input
                  v-model.trim="menuForm.menuName"
                  type="text"
                  maxlength="7"
                  placeholder="请填写菜单名称"
                />
              </el-form-item>
              <el-form-item label="父级菜单" prop="parentId">
                <el-select
                  v-model="menuForm.parentId"
                  clearable
                  placeholder="请选择父级菜单，默认为根节点"
                >
                  <el-option
                    v-for="item in frontendPrivilegeDict"
                    :key="item.frontendId"
                    :label="item.menuName"
                    :value="item.frontendId"
                  />
                </el-select>
              </el-form-item>
              <el-form-item label="菜单状态" prop="menuStatus">
                <el-select v-model="menuForm.menuStatus" placeholder="请选择菜单状态">
                  <el-option label="可用" :value="1" />
                  <el-option label="停用" :value="2" />
                </el-select>
              </el-form-item>
            </div>
            <div
              style="margin: 0 56px; height: 165px; border: 1px solid #dcdfe6"
            ></div>

            <div style="width: 50%">
              <el-form-item label="前端URL路径" prop="urlPath">
                <el-input
                  v-model.trim="menuForm.urlPath"
                  type="text"
                  maxlength="20"
                  placeholder="请填写前端URL路径"
                />
              </el-form-item>
              <el-form-item label="索引(影响菜单排序)" prop="menuIndex">
                <el-input v-model.trim="menuForm.menuIndex" placeholder="请填写索引"/>
              </el-form-item>
              <el-form-item
                v-show="!menuForm.parentId || menuForm.parentId == 0"
                label="图标(element-icon)"
                prop="icon"
              >
                <el-input v-model.trim="menuForm.icon" placeholder="请填写图标名称"/>
              </el-form-item>
            </div>
          </div>
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
import api from '@/api/system/menu'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup(){
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
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      listData: [],
      frontendPrivilegeDict: [],
      listLoading: true,
      dialogFormVisible: false,
      openStatus: '',
      menuForm: {
        menuStatus: 1,
      },
      menuFormRef: '',
      statusTagMap: {
        1: 'success',
        2: 'danger',
      },
      statusTextMap: {
        1: '可用',
        2: '停用',
      },
      dialogTitleMap: {
        create: '添加菜单',
        edit: '编辑菜单',
      },
      rules: {
        menuName: [
          { required: true, message: '菜单名称不能为空', trigger: 'blur' },
        ],
        menuStatus: [
          { required: true, message: '菜单状态不能为空', trigger: 'blur' },
        ],
        urlPath: [
          { required: true, message: '前端URL路径不能为空', trigger: 'blur' },
        ],
        menuIndex: [
          { required: true, message: '索引不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^[0-9]*$/,
            message: '请输入数值型索引',
            trigger: 'change',
          },
        ],
      }
    })
    const getList = async () => {
      state.listLoading = true
      const result = await api.findFrontendPrivilege(state.listQuery)
      state.listData = result.list
      state.total = result.total
      state.listLoading = false
    }
    const findFrontendPrivilegeDict = async() => {
      state.frontendPrivilegeDict = (
        await api.findFrontendPrivilegeDict()
      ).children
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
    const openDialog = async (status, frontendId) => {
      state.openStatus = status
      await findFrontendPrivilegeDict()
      if (status === 'edit') {
        state.menuForm = await api.getFrontendPrivilegeById({ frontendId })
        state.dialogFormVisible = true
      } else {
        state.dialogFormVisible = true
      }
    }
    const dialogClose = () => {
      state.menuForm = {
        menuStatus: 1
      },
      state.dialogFormVisible = false
      state.menuFormRef.resetFields()
    }
    const submit = async () => {
      state.menuFormRef.validate(async (valid) => {
        if (valid) {
          await api.saveFrontendPrivilege(state.menuForm)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '编辑菜单成功',
              type: 'success',
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加菜单成功',
              type: 'success',
            })
            state.listQuery.currentPage = 1
          }
          dialogClose()
          getList()
        }
      })
    }
    const deleteMenu = async (id, row) => {
      ElMessageBox.prompt(
        '<pre>确定删除菜单"' + row.menuName + '"吗？，若确定请输入菜单名称：</pre>',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString:'true',
          inputValidator: (text) => {
            if (text === row.menuName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delFrontendPrivilege({ frontendId: id })
            ElMessage({
            type: 'success',
              message: '删除成功',
            })
            getList()
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除',
          })
        })
    }
    onMounted(async ()=>{
      await getList()
    })
    return {
      ...toRefs(state),
      getList,
      findFrontendPrivilegeDict,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      openDialog,
      dialogClose,
      submit,
      deleteMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 250px;
}
.el-dialog {
  .el-input,
  .el-select {
    width: 100%;
  }
}
</style>>
