<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">
        角色管理
      </div>
    </div>

    <div class="tableHeader">
      <el-button
        type="primary"
        @click="openDialog('create')"
      >
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加角色
      </el-button>
      <div>
          <el-input
            v-model.trim="listQuery.findStr"
            placeholder="搜索角色名称、英文名称"
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
    <el-table-column label="ID">
        <template #default="scope">
          <pre>{{ scope.row.roleId }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="角色名称"
      >
        <template #default="scope">
          <pre>{{ scope.row.roleName }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="英文名称"
      >
        <template #default="scope">
          {{ scope.row.roleEn }}
        </template>
      </el-table-column>
      <el-table-column
        label="状态"
        sortable="custom"
        prop="roleStatus"
      >
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.roleStatus]">
            {{ statusTextMap[scope.row.roleStatus] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
      >
        <template #default="scope">
          <el-button
            v-if="name === 'admin'||scope.row.roleId !== 1"
            type="text"
            size="small"
            @click="openDialog('edit',scope.row.roleId)"
          >编辑</el-button>
          <el-button
            v-if="scope.row.roleId !== 1"
            type="text"
            class="listDelBtn"
            @click="deleteRole(scope.row.roleId,scope.row)"
          >删除</el-button>
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
        :title="dialogTitleMap[openStatus]"
        width="1116px"
        :close-on-click-modal="false"
        @close="dialogClose"
      >
        <div style="display:flex;margin-bottom: 24px;margin-top: 30px">
          <el-form
            ref="roleFormRef"
            :model="roleForm"
            label-width="80px"
            :rules="rules"
            label-position="right"
            style="width: 430px;"
          >
            <el-form-item
              label="角色名"
              prop="roleName"
              maxlength="20"
              type="text"
              show-word-limit
            >
              <el-input v-model.trim="roleForm.roleName" placeholder="请填写角色名称" :disabled="roleForm.roleName==='超级管理员' && roleForm.roleId==1 ? true : false"/>
            </el-form-item>
            <el-form-item
              label="英文名称"
              prop="roleEn"
              maxlength="20"
              type="text"
              show-word-limit
            >
              <el-input v-model.trim="roleForm.roleEn" placeholder="请填写英文名字" :disabled="roleForm.roleName==='超级管理员' && roleForm.roleId==1 ? true : false"/>
            </el-form-item>
            <el-form-item
              label="状态"
              prop="roleStatus"
            >
              <el-select v-model="roleForm.roleStatus" style="width: 100%" :disabled="roleForm.roleName==='超级管理员' && roleForm.roleId==1 ? true : false">
                <el-option
                  label="可用"
                  :value="1"
                />
                <el-option
                  label="停用"
                  :value="2"
                />
              </el-select>
            </el-form-item>
          </el-form>
          <div style="margin: 0 60px;height:370px;border:1px solid #DCDFE6"></div>
          <div style="width:50%;display:flex">
            <div style="width:45%;height:370px;">
              <b style="position:relative;display:block;padding: 0 10px;margin:-30px auto 10px">菜单分配</b>
              <div style="margin:auto;border:2px solid #DCDFE6;border-radius:5px">
                <el-tree
                  ref="frontendTree"
                  style="height:370px;overflow:auto"
                  :data="frontendPrivilegeDict"
                  show-checkbox
                  node-key="frontendId"
                  :default-expanded-keys="roleForm.frontendPrivilegeIdList"
                  :props="frontendPrivilegeProps"
                  @check="frontendPrivilegeChange"
                />
              </div>
            </div>
            <div style="width:45%;margin-left:40px;height:370px;">
              <b style="position:relative;display:block;padding: 0 10px;margin:-30px auto 10px">后端权限分配</b>
              <div style="margin:auto;border:2px solid #DCDFE6;border-radius:5px">
                <el-tree
                  ref="backendTree"
                  style="height:370px;overflow:auto"
                  :data="authorityDict"
                  :default-expanded-keys="roleForm.backendAuthorityIdList"
                  show-checkbox
                  node-key="authorityId"
                  :props="authorityProps"
                  @check="authorityChange"
                />
              </div>
            </div>
          </div>
        </div>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="submit()">确定</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/api/system/role'
import { useStore } from 'vuex'
import { reactive, toRefs } from '@vue/reactivity'
import { computed, nextTick, onMounted } from '@vue/runtime-core'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup(){
    const store = useStore()
    const state = reactive({
      name: computed(()=>store.getters.name),
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        queryCondition: {},
        sortData: {
          'order': '',
          'prop': ''
        }
      },
      backendTree:"",
      frontendTree:"",
      pageSizeArr: [10, 20, 30], // 分数数量数组
      frontendPrivilegeDict: [], // 前端权限字典
      authorityDict: [], // 后端权限字典
      frontendPrivilegeProps: {
        children: 'children',
        label: 'menuName'
      }, // 前端权限配置
      authorityProps: {
        children: 'children',
        label: 'authorityName'
      }, // 后端权限配置
      total: 0,
      listData: [],
      listLoading: true,
      dialogFormVisible: false,
      openStatus: '',
      roleForm: {
        roleStatus: 1
      },
      roleFormRef: '',
      statusTagMap: {
        '1': 'success',
        '2': 'danger'
      },
      statusTextMap: {
        '1': '可用',
        '2': '停用'
      },
      dialogTitleMap: {
        create: '添加角色',
        edit: '编辑角色'
      },
      rules: {
        roleName: [
          { required: true, message: '角色名称不能为空', trigger: 'blur' }
        ],
        roleEn: [
          { required: true, message: '英文名称不能为空', trigger: 'blur' },
          { required: true, pattern: /^[a-zA-Z]*$/, message: "请输入英文", trigger: 'change'}
        ],
        roleStatus: [
          { required: true, message: '角色状态不能为空', trigger: 'change' }
        ]
      }
    })
    const getList = async() => {
      state.listLoading = true
      const result = await api.findRole(state.listQuery)
      state.listData = result.list
      state.total = result.total
      state.listLoading = false
    }
    const findFrontendPrivilegeDict = async () => {
      state.frontendPrivilegeDict = [await api.findFrontendPrivilegeDict()]
    }
    const findAuthorityDict = async () => {
      state.authorityDict = await api.findAuthorityDict()
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
    const deleteRole = async (id, row) => {
      ElMessageBox.prompt(
        '<pre>确定删除角色"' + row.roleName + '"吗？，若确定请输入角色名称：</pre>',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString:'true',
          inputValidator: (text) => {
            if (text === row.roleName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async ({ value }) => {
          await api.delRole({ roleId: id })
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
    const openDialog = async (status, roleId) => {
      state.openStatus = status
      if (status === 'edit') {
        state.roleForm = await api.getRole({ roleId })
        state.dialogFormVisible = true
        nextTick(() => {
          state.roleForm.frontendPrivilegeIdList.forEach(element => {
            state.frontendTree.setChecked(element, true, false)
          })
          state.roleForm.backendAuthorityIdList.forEach(element => {
            state.backendTree.setChecked(element, true, false)
          })
          // state.$refs.frontendTree.setCheckedKeys(state.roleForm.frontendIds, true)
          // state.$refs.backendTree.setCheckedKeys(state.roleForm.backendIds)
        })
      } else {
        state.dialogFormVisible = true
        state.roleForm.frontendPrivilegeIdList = [0]
        state.roleForm.backendAuthorityIdList = [0]
      }
    }
    const frontendPrivilegeChange = (data, checked) => {
      var checkArr = checked.halfCheckedKeys.concat(checked.checkedKeys)
      state.roleForm.frontendPrivilegeIdList = checkArr
    }
    const authorityChange = (data, checked) => {
      var checkArr = checked.checkedKeys.concat(checked.halfCheckedKeys)
      state.roleForm.backendAuthorityIdList = checkArr
    }
    const dialogClose = () =>{
      state.roleForm = {
        roleStatus: 1
      }
      state.frontendTree.setChecked(0, false, true)
      state.backendTree.setChecked(0, false, true)
      state.roleFormRef.resetFields()
      state.dialogFormVisible = false
    }
    const submit = async () => {
      state.roleFormRef.validate(async valid => {
        if (valid) {
          await api.saveRole(state.roleForm)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '修改角色成功',
              type: 'success'
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加角色成功',
              type: 'success'
            })
          state.listQuery.currentPage = 1
          }
          dialogClose ()
          getList()
        }
      })
    }
    onMounted(async ()=>{
      await getList()
      findFrontendPrivilegeDict()
      findAuthorityDict()
    })
    return {
      ...toRefs(state),
      getList,
      findFrontendPrivilegeDict,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      deleteRole,
      openDialog,
      frontendPrivilegeChange,
      authorityChange,
      dialogClose,
      submit
    }
  }
}
</script>

