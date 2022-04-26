<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">用户管理</div>
    </div>

    <div class="tableHeader">
      <div>
        <el-button type="primary" @click="openDialog('create')">
          <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon>添加用户
        </el-button>
        <!-- <el-button
          type="primary"

          @click="updateWechatUser()"
        >
          更新企业微信用户信息
        </el-button> -->
      </div>
      <div>
          <el-input v-model.trim="listQuery.findStr" placeholder="搜索用户名、姓名、手机号" clearable @keyup.enter="handleFilter" @clear="handleFilter">
            <template #append>
              <el-button icon="el-icon-search" @click="handleFilter" @keyup.enter="handleFilter" />
            </template>
          </el-input>
      </div>
    </div>
    <el-table v-loading="listLoading" :data="listData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass" @sort-change="sortChange">
      <el-table-column label="ID">
        <template #default="scope">
          <pre>{{ scope.row.userId }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="用户名">
        <template #default="scope">
          <pre>{{ scope.row.username }}</pre>
        </template>
      </el-table-column>
      <el-table-column label="姓名">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="手机号">
        <template #default="scope">
          <span>{{ scope.row.mobile }}</span>
        </template>
      </el-table-column>
      <el-table-column label="部门" prop="deptName" sortable="custom">
        <template #default="scope">
          <div>
            <span v-for="item in scope.row.deptList" :key="item.deptId">
              {{ item.deptName }}
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="角色">
        <template #default="scope">
          <div>
            <span v-for="item in scope.row.roleList" :key="item.roleId">
              {{ item.roleName }}
            </span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status" sortable="custom">
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.status]">
            {{ statusTextMap[scope.row.status] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button v-if="name === 'admin'||scope.row.username !== 'admin'" type="text" @click="openDialog('edit', scope.row.userId)">编辑</el-button>
          <el-button v-if="scope.row.username !== 'admin'" type="text" class="listDelBtn" @click="deleteUser(scope.row.userId, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <div v-dialogdrag>
      <el-dialog v-model="dialogFormVisible" :title="dialogTitleMap[openStatus]" width="1116px" :close-on-click-modal="false" @close="dialogClose">
        <div style="display: flex;align-items:center">
          <el-form ref="userFormRef" :model="userForm" label-width="80px" :rules="rules" label-position="right" style="width: 400px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="userForm.username" maxlength="20" type="text" placeholder="请输入用户名" show-word-limit :disabled="openStatus == 'edit' ? true : false" />
            </el-form-item>
            <el-form-item label="名称" prop="name">
              <el-input v-model.trim="userForm.name" maxlength="20" type="text" show-word-limit placeholder="请输入名称" />
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model.trim="userForm.mobile" clearable maxlength="11" placeholder="请输入手机号" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input ref="password" v-model.trim="userForm.password" :type="passwordType" :placeholder="
                  openStatus == 'edit'
                    ? '不修改原密码则不填写'
                    : '请填写字母+数字组合的6-20位密码'
                " />
            </el-form-item>
            <el-form-item label="确认密码" prop="commitPassword">
              <el-input ref="commitPassword" v-model.trim="userForm.commitPassword" :type="passwordType" placeholder="请再次输入密码" />
            </el-form-item>
            <el-form-item label="部门" prop="deptIds">
              <el-select v-model="userForm.deptIds" style="width: 300px" clearable>
                <el-option v-for="item in deptDict" :key="item.deptId" :label="item.deptName" :value="item.deptId" />
              </el-select>
            </el-form-item>
            <el-form-item label="角色" prop="roleIds">
              <el-select v-model="userForm.roleIds" clearable style="width: 300px" :disabled="userForm.username == 'admin' ? true : false">
                <el-option v-for="item in roleDict" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
              </el-select>
            </el-form-item>
            <el-form-item label="状态" prop="status">
              <el-select v-model="userForm.status" style="width: 300px">
                <el-option label="可用" :value="1" />
                <el-option label="禁用" :value="3" />
              </el-select>
            </el-form-item>
          </el-form>
          <div style="margin: 0 66px; height: 256px; border: 1px solid #dcdfe6;" ></div>
          <div style="width: 600px;height:490px; display: flex;">
            <div style="width: 220px;">
              <b style="position: relative; display: block; padding: 0 5px 10px 5px">菜单分配</b>
              <div style="
                  margin: auto;
                  border: 2px solid #dcdfe6;
                  border-radius: 5px;
                ">
                <el-tree ref="frontendTree" style="height:430px;overflow: auto" :data="frontendPrivilegeDict" show-checkbox node-key="frontendId" :default-expanded-keys="userForm.frontendIds" :props="frontendPrivilegeProps" @check="frontendPrivilegeChange" />
              </div>
            </div>
            <div style="width: 220px;margin-left: 40px;">
              <b style="position: relative; display: block; padding: 0 5px 10px 5px">后端权限分配</b>
              <div style="
                  margin: auto;
                  border: 2px solid #dcdfe6;
                  border-radius: 5px;
                ">
                <el-tree ref="backendTree" style="height:430px;overflow: auto" :data="authorityDict" :default-expanded-keys="userForm.backendIds" show-checkbox node-key="authorityId" :props="authorityProps" @check="authorityChange" />
              </div>
            </div>
          </div>
        </div>
        <template #footer>
          <el-button @click="dialogClose">取消</el-button>
          <el-button type="primary" @click="submit()"> 确定</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/api/system/user'
import { useStore } from 'vuex'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted,computed, nextTick, watch } from '@vue/runtime-core'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup() {
    const store = useStore()
    const mobileRule = (rule, value, callback) => {
      if (value == '' || value == undefined || value == null) {
        callback(new Error('请输入手机号'))
      } else {
        if (
          !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
            value
          )
        ) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    const passwordRule = (rule, value, callback) => {
      if (
        state.openStatus == 'edit' &&
        (value == '' || value == undefined || value == null)
      ) {
        callback()
      } else if (
        state.openStatus == 'create' &&
        (value == '' || value == undefined || value == null)
      ) {
        callback(new Error('请输入密码'))
      } else {
        if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)) {
          callback(new Error('格式有误！请输入以字母+数字组成的6-20位密码'))
        } else {
          callback()
        }
      }
    }
    const commitPasswordRule = (rule, value, callback) => {
      if (value == '' || value == undefined || value == null) value = ''
      if (value !== state.userForm.password) {
        callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }
    const state = reactive({
      name: computed(() => store.getters.name),
      listQuery: {
        currentPage: 1,
        findStr: '',
        pageSize: 10,
        sortData: {
          order: '',
          prop: '',
        },
      },
      backendTree:"",
      frontendTree:"",
      pageSizeArr: [10, 20, 30], // 分数数量数组
      roleDict: [], // 角色字典
      deptDict: [], // 部门字典
      frontendPrivilegeDict: [], // 前端权限字典
      authorityDict: [], // 后端权限字典
      frontendPrivilegeProps: {
        children: 'children',
        label: 'menuName',
      }, // 前端权限配置
      authorityProps: {
        children: 'children',
        label: 'authorityName',
      }, // 后端权限配置
      rightPopup: false,
      total: 0,
      listData: [],
      passwordType: 'password',
      listLoading: true,
      dialogFormVisible: false,
      openStatus: '',
      userForm: {
        status: 1,
      },
      userFormRef:"",
      statusTagMap: {
        1: 'success',
        2: 'warning',
        3: 'danger',
      },
      statusTextMap: {
        1: '可用',
        2: '未可用',
        3: '禁用',
      },
      dialogTitleMap: {
        create: '添加用户',
        edit: '编辑用户',
      },
      rules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^.{2,20}$/,
            message: '请输入2-20位字符',
            trigger: 'blur',
          },
        ],
        username: [
          // /^[a-zA-Z\s]{2,20}$/ 英文和空格
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          {
            required: true,
            pattern: /^[a-zA-Z]{2,20}$/,
            message: '请输入2-20位英文字符',
            trigger: 'blur',
          },
        ],
        status: [
          { required: true, message: '用户状态不能为空', trigger: 'change' },
        ],
        mobile: [{ required: true, validator: mobileRule, trigger: 'blur' }],
        password: [
          { required: true, validator: passwordRule, trigger: 'blur' },
        ],
        commitPassword: [
          { required: true, validator: commitPasswordRule, trigger: 'blur' },
        ],
      },
    })
    watch(
      () => state.userForm.mobile,
      (curVal, oldVal) => {
        if (!curVal) {
          state.userForm.mobile = ''
          return false
        }
        // 实时把非数字的输入过滤掉
        state.userForm.mobile = curVal.match(/\d/gi)
          ? curVal.match(/\d/gi).join('')
          : ''
      }
    )
    const getList = async () => {
      state.listLoading = true
      await api
        .findUser(state.listQuery)
        .then((res) => {
          state.listData = res.list
          state.total = res.total
          state.listLoading = false
        })
        .catch((res) => {
          if (res.data == null) {
            state.listData = []
            state.total = 0
            state.listLoading = false
          }
        })
    }
    const findRoleDict = async () => {
      state.roleDict = await api.findRoleDict()
    }
    const findDeptDict = async () => {
      state.deptDict = await api.findDeptDict()
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
    // 企业更新
    // const updateWechatUser = async () => {
    //   await api.updateWechatUser()
    //   ElMessage({
    //     message: '更新用户信息成功',
    //     type: 'success',
    //   })
    // }
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
    const deleteUser = async (id, row) => {
      ElMessageBox.confirm(`确定删除用户${row.name}吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(async () => {
          await api.delUser({ userId: id })
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
    const openDialog = async (status, userId) => {
      state.openStatus = status
      if (status === 'edit') {
        state.userForm = await api.getUser({ userId })
        state.userForm.deptIds = state.userForm.deptIds[0]
        state.userForm.roleIds = state.userForm.roleIds[0]
        state.dialogFormVisible = true
        nextTick(() => {
          state.userForm.frontendIds.forEach((element) => {
            state.frontendTree.setChecked(element, true, false)
          })
          state.userForm.backendIds.forEach((element) => {
            state.backendTree.setChecked(element, true, false)
          })
        })
      } else {
        state.dialogFormVisible = true
        state.userForm.frontendIds = [0]
        state.userForm.backendIds = [0]
      }
    }
    const frontendPrivilegeChange = (data, checked) => {
      var checkArr = checked.halfCheckedKeys.concat(checked.checkedKeys)
      state.userForm.frontendIds = checkArr
    }
    const authorityChange = (data, checked) => {
      var checkArr = checked.checkedKeys.concat(checked.halfCheckedKeys)
      state.userForm.backendIds = checkArr
    }
    const dialogClose = () => {
      state.dialogFormVisible = false
      state.userForm = {
        status: 1,
      }
      state.frontendTree.setChecked(0, false, true)
      state.backendTree.setChecked(0, false, true)
      state.userFormRef.resetFields()
    }
    const submit = async () => {
      state.userFormRef.validate(async (valid) => {
        if (valid) {
          // state.userForm.roleIds = state.userForm.roleIds
          // state.userForm.deptIds = state.userForm.deptIds
          await api.saveUser(state.userForm)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '修改用户成功',
              type: 'success',
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加用户成功',
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
      findRoleDict()
      findDeptDict()
      findFrontendPrivilegeDict()
      findAuthorityDict()
    })
    return {
      ...toRefs(state),
      getList,
      findRoleDict,
      findDeptDict,
      findFrontendPrivilegeDict,
      findAuthorityDict,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      // updateWechatUser,
      deleteUser,

      openDialog,
      frontendPrivilegeChange,
      authorityChange,
      dialogClose,
      submit
    }

  },
}
</script>

