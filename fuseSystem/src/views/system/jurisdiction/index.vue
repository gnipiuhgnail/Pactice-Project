<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">
        权限管理
      </div>
    </div>

    <div class="tableHeader">
      <el-button
        type="primary"
        @click="openDialog('create')"
      >
        <svg-icon icon-class="create-btn" style="margin-right: 6px"></svg-icon> 添加权限
      </el-button>
      <div>
          <el-input
            v-model.trim="listQuery.findStr"
            placeholder="搜索权限名称、英文名称"
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
      <el-table-column
        label="所属权限组"
        prop="authorityGroup"
        sortable='custom'
      >
        <template #default="scope">
          <span v-if="scope.row.parent">{{ scope.row.parent.authorityName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="权限名称"
      >
        <template #default="scope">
          <pre>{{ scope.row.authorityName }}</pre>
        </template>
      </el-table-column>
      <el-table-column
        label="	权限类型"
        prop="authorityType"
        sortable='custom'
      >
        <template #default="scope">
          <span v-if="scope.row.authorityType===1">普通权限</span>
          <span v-if="scope.row.authorityType===2">权限组</span>
        </template>
      </el-table-column>
      <el-table-column
        label="	权限英文名称"
      >
        <template #default="scope">
          {{ scope.row.authorityEn }}
        </template>
      </el-table-column>

      <el-table-column
        label="权限状态"
        prop="authorityStatus"
        sortable='custom'
      >
        <template #default="scope">
          <el-tag :type="statusTagMap[scope.row.authorityStatus]">
            {{ statusTextMap[scope.row.authorityStatus] }}
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
            v-if="scope.row.reserveStatus==0"
            type="text"
            size="small"
            @click="openDialog('edit',scope.row.authorityId)"
          >编辑</el-button>
          <el-button
            v-if="scope.row.reserveStatus==0"
            type="text"
            class="listDelBtn"
            @click="deleteJurisdiction(scope.row.authorityId,scope.row)"
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
        :close-on-click-modal="false"
        @close="dialogClose"
        width="992px"
      >
          <el-form
            ref="authorityRef"
            :model="authority"
            label-width="110px"
            class="defaultForm"
            :rules="rules"
            label-position="right"
          >
            <div style="display:flex">
            <div style="width:50%; margin-left:-28px">
              <el-form-item
                label="	权限名称"
                prop="authorityName"
              >
                <el-input v-model.trim="authority.authorityName" type="text" maxlength="20" placeholder="请填写权限名称"/>
              </el-form-item>
              <el-form-item
                label="权限类型"
                prop="authorityType"
              >
                <el-select v-model="authority.authorityType"  placeholder="请选择权限类型">
                  <el-option
                    label="普通权限"
                    :value="1"
                  />
                  <el-option
                    label="权限组"
                    :value="2"
                  />
                </el-select>
              </el-form-item>
              <el-form-item
                label="权限状态"
                prop="authorityStatus"
              >
                <el-select v-model="authority.authorityStatus" placeholder="请选择权限状态">
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
            </div>
            <div style="margin:0 56px;height:165px;border:1px solid #DCDFE6"></div>
            <div style="width:50%">
              <el-form-item
                label="	权限英文名称"
                prop="authorityEn"
              >
                <el-input v-model.trim="authority.authorityEn" type="text" maxlength="20" placeholder="请填写权限英文名称"/>
              </el-form-item>
              <el-form-item
                label="所属权限组"
                prop="authorityGroup"
              >
                <el-select
                  v-model="authority.authorityGroup"
                  clearable
                  placeholder="默认为根节点"
                  :disabled="authority.authorityType =='2'?true:false"
                >
                  <el-option
                    v-for="item in authorityGroupDict"
                    :key="item.authorityId"
                    :label="item.authorityName"
                    :value="+item.authorityId"
                  />
                </el-select>
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
import api from '@/api/system/jurisdiction'
import { reactive, toRefs } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core'
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
          'order': '',
          'prop': ''
        }
      },
      pageSizeArr: [10, 20, 30], // 分数数量数组
      total: 0,
      listData: [],
      authorityGroupDict: [],
      listLoading: true,
      dialogFormVisible: false,
      openStatus: '',
      authority: {
        authorityStatus: 1
      },
      authorityRef: '',
      statusTagMap: {
        '1': 'success',
        '2': 'danger'
      },
      statusTextMap: {
        '1': '可用',
        '2': '停用'
      },
      dialogTitleMap: {
        create: '添加权限',
        edit: '编辑权限'
      },
      rules: {
        authorityName: [
          { required: true, message: '	权限名称不能为空', trigger: 'blur' }
        ],
        authorityEn: [
          { required: true, message: '	权限英文名称不能为空', trigger: 'blur' },
          { required: true, pattern: /^[A-Za-z]+$/ ,message: '请输入英文字符', trigger: 'change' }
        ],
        authorityStatus: [
          { required: true, message: '	权限状态不能为空', trigger: 'blur' }
        ],
        authorityType: [
          { required: true, message: '权限类型不能为空', trigger: 'blur' }
        ]
      }
    })
    const getList = async () => {
      state.listLoading = true
      const result = await api.findBackendAuthority(state.listQuery)
      console.log(result)
      state.listData = result.list
      state.total = result.total
      state.listLoading = false
    }
    const findAuthorityGroupDict = async (authorityId) => {
      state.authorityGroupDict = (await api.findAuthorityGroupDict())
      if(authorityId){
         state.authorityGroupDict.forEach((item,index)=>{
           if(item.authorityId==authorityId) state.authorityGroupDict.splice(index,1)
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
    const openDialog = async (status, authorityId) => {
      state.openStatus = status
      await findAuthorityGroupDict(authorityId)
      if (status === 'edit') {
        state.authority = await api.getBackendAuthority({ authorityId })
        state.dialogFormVisible = true
      } else {
        state.dialogFormVisible = true
      }
    }
    const dialogClose = () => {
      state.authority = {
        menuStatus: 1
      }
      state.authorityRef.resetFields()
      state.dialogFormVisible = false
    }
    const submit = async () => {
      state.authorityRef.validate(async valid => {
        if (valid) {
          if(state.authority.authorityGroup==null||state.authority.authorityGroup=='' ||state.authority.authorityType=='2') state.authority.authorityGroup=0
          await api.saveBackendAuthority(state.authority)
          if (state.openStatus === 'edit') {
            ElMessage({
              message: '编辑权限成功',
              type: 'success'
            })
          }
          if (state.openStatus === 'create') {
            ElMessage({
              message: '添加权限成功',
              type: 'success'
            })
          state.listQuery.currentPage = 1
          }
          dialogClose()
          getList()
        }
      })
    }
    const deleteJurisdiction = async (id, row) => {
       ElMessageBox.prompt(
        '<pre>确定删除权限"' + row.authorityName + '"吗？，若确定请输入权限名称：</pre>',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder: '请输入',
          dangerouslyUseHTMLString:'true',
          inputValidator: (text) => {
            if (text === row.authorityName) {
              return true
            } else {
              return '输入错误！'
            }
          },
        }
      )
        .then(async () => {
          await api.delBackendAuthority({ authorityId: id })
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
    watch(()=>state.authority.authorityType, (curVal, oldVal) => {
      if (curVal==2) {
        state.authority.authorityGroup=0
      }
    })
    onMounted(async () =>{
      await getList()
    })
    return {
      ...toRefs(state),
      getList,
      findAuthorityGroupDict,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
      sortChange,
      openDialog,
      dialogClose,
      submit,
      deleteJurisdiction
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input{
  width: 250px;
}
.el-dialog {
  .el-input, .el-select {
    width: 100%;
  }
}
</style>>
