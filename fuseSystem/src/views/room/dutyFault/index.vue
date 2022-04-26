<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div class="sign" />
      <div class="listGroup">故障处理</div>
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card btn34">
          <div style="border-bottom: 1px solid #C0C4CC;margin-bottom:5px">报告故障</div>
          <el-form :model="dutyfaultForm" status-icon :rules="rules" ref="dutyfaultFormRef" label-width="100px" label-position="top">
            <el-form-item label="报告客户：" prop="client">
              <el-select v-model="dutyfaultForm.client" placeholder="请选择">
                <el-option v-for="item in options.clientOption" :label="item.client" :value="item.clientId" :key="item.clientId"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="报告来源：" prop="faultFrom">
              <el-select v-model="dutyfaultForm.faultFrom" placeholder="请选择">
                <el-option v-for="item in options.faultSourceOption" :label="item.label" :value="item.value" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="报告事件：" prop="faultEvent">
              <el-input type="textarea" maxlength="50" :rows="5" show-word-limit v-model="dutyfaultForm.faultEvent" placeholder="请填写"></el-input>
            </el-form-item>
            <el-form-item label="报告类型：" prop="faultType">
              <el-select v-model="dutyfaultForm.faultType" placeholder="请选择">
                <el-option v-for="item in options.faultTypeOption" :label="item.label" :value="item.value" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="报告级别：" prop="faultLevel">
              <el-select v-model="dutyfaultForm.faultLevel" placeholder="请选择">
                <el-option v-for="item in options.faultLevelOption" :label="item.label" :value="item.value" :key="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="附件：">
              <el-upload :action="upurl" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleUped" :auto-upload='true' :limit='20' :multiple='false' :data="{username:name}" :file-list="imgs">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog v-model="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交报告</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="tableHeader">
          <div>
            <el-checkbox v-model="listQuery.userId" label="我要处理的"></el-checkbox>
          </div>
          <div>
            <el-input v-model.trim="listQuery.findStr" placeholder="搜索提交人、报告客户" clearable @keyup.enter="handleFilter" @clear="handleFilter">
              <template #append>
                <el-button icon="el-icon-search" @click="handleFilter" @keyup.enter="handleFilter" />
              </template>
            </el-input>
          </div>
        </div>
        <el-table v-loading="listLoading" :data="dutyFaultList" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
          <el-table-column label="ID" prop="faultId"></el-table-column>
          <el-table-column label="提交人" prop="cnname"></el-table-column>
          <el-table-column label="客户" prop="client"></el-table-column>
          <el-table-column label="故障时间" prop="faultTime" width="200"></el-table-column>
          <el-table-column label="来源" prop="faultFromMsg"></el-table-column>
          <el-table-column label="状态" prop="faultEndFlagMsg"></el-table-column>
          <el-table-column label="转交" prop="faultToFlagMsg"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default="scope">
              <el-button type="text" @click="$router.push({
                path:'/room/dutyfault/faultdetail',
                query: {faultId:scope.row.faultId}
                })">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination v-if="total>0" class="rightPagination" :page-sizes="pageSizeArr" :current-page="listQuery.currentPage" :page-size="listQuery.pageSize" :total="total" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import options from '@/api/options'
import { reactive, toRefs } from '@vue/reactivity'
import { ElMessage } from 'element-plus'
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import api from '@/api/room/dutyfault'
export default {
  setup() {
    const store = useStore()
    const state = reactive({
      name: computed(() => store.getters.name),
      dutyfaultForm: {
        client: '',
        faultFrom: '',
        faultType: '',
        faultLevel: '',
      },
      dutyfaultFormRef: '',
      rules: {},
      upurl: process.env.VUE_APP_BASE_API + '/other/uploadfaultimg',
      imgs: [],
      dialogVisible: false,
      dialogImageUrl: '',
      // 故障信息列表
      listQuery: {
        userId: -1,
        currentPage: 1,
        findStr: '',
        pageSize: 10,
      },
      dutyFaultList: [],
      listLoading: true,
      pageSizeArr: [10, 20, 30],
      total: '',
    })
    // 表单
    const handlePictureCardPreview = (file) => {
      state.dialogImageUrl = file.url
      console.log(file)
      state.dialogVisible = true
    }
    const handleRemove = (file, fileList) => {
      console.log(file.name)
    }
    const handleUped = (response, file, fileList) => {
      // 后端会返回图片的id和url
      if (response.result == 'error') {
        ElMessage({
          message: response.message,
          type: 'error',
        })
      } else {
        // response.appdata = {faultimgid: 76, imgpath: "upload/Snipaste_2022-04-07_09-38-593.png"}
        state.imgs.push({
          name: response.appdata.faultimgid,
          url: this.domain + response.appdata.imgpath,
        })
      }
    }
    const onSubmit = async () => {
      state.imgs.forEach((item) => {
        state.dutyfaultForm.faultImgiIdList.push(item.name)
      })
      await api.saveDutyFault(state.dutyfaultForm)
      ElMessage({
        message: '提交成功',
        type: 'success',
      })
    }
    // 查询值班故障信息列表
    const getDytyFaultList = async () => {
      state.listLoading = true
      const data = api.findDutyFault(state.listQuery)
      state.dutyFaultList = data.list
      state.total = data.total
      state.listLoading = false
    }
    const handleFilter = () => {
      state.listQuery.currentPage = 1
      getDytyFaultList()
    }
    const handleSizeChange = (val) => {
      state.listQuery.pageSize = val
      state.listQuery.currentPage = 1
      getDytyFaultList()
    }
    const handleCurrentChange = (val) => {
      state.listQuery.currentPage = val
      getDytyFaultList()
    }
    onMounted(async () => {
      getDytyFaultList()
    })
    return {
      ...toRefs(state),
      options,
      handlePictureCardPreview,
      handleRemove,
      handleUped,
      onSubmit,
      handleFilter,
      handleSizeChange,
      handleCurrentChange,
    }
  },
}
</script>
<style scoped lang='scss'>
.box-card {
  ::v-deep .el-form--label-top .el-form-item__label {
    color: #303133;
    padding: 0;
    height: 34px;
  }
  .el-form-item:last-child {
    margin-bottom: 0;
  }
  .el-button {
    width: 100%;
  }
  ::v-deep .el-select {
    width: 100%;
  }
  & ::v-deep {
    .el-upload {
      width: 100%;
      height: 86px;
      line-height: 86px;
    }
    .el-upload-list__item {
      margin-top: 12px;
      width: 100%;
      height: 86px;
    }
    .hiddenUpload .el-upload--picture-card {
      display: none;
    }
  }
}
</style>
