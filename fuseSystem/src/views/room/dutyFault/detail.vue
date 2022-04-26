<template>
  <div class="appContainer btn34">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">故障详情</div>
    </div>
    <el-row :gutter="50">
      <el-col :span="8">
        <el-card class="box-card">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="故障内容" name="first">
              <el-form :model="dutyfaultForm" status-icon ref="dutyfaultFormRef" label-width="100px" label-position="top">
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
                  <el-upload :action="upurl" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleUped" :auto-upload='true' :limit='20' :multiple='false' :data="{username:dutyfaultForm.username}" :file-list="imgs">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog v-model="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">修改报告</el-button>
                  <el-button type="primary" @click="finish">处理完成</el-button>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="处理日志" name="second">
              <el-form :model="deallogForm" status-icon ref="deallogFormRef" label-width="100px" label-position="top">
                <el-form-item label="处理信息：" prop="clientBack">
                  <el-input type="textarea" maxlength="200" :rows="7" show-word-limit v-model="deallogForm.clientBack" placeholder="请填写"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="logSubmit">提交</el-button>
                </el-form-item>
              </el-form>
              <div class="process">
                处理流：
                <div v-for="(item, index) in processFlow" :key="item">
                  <div>{{index + 1}}. {{timesub(item.processTime)}} - {{item.processUser}}</div>
                  <div style="margin-left:18px">{{item.processMsg}}</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div style="margin-bottom:30px">
          抄送
          <Transfer transferOrCopy="copy" :data="userList" :userKeys="userKeys" @select="getSelData" :showUser='faultcclist' style="margin-top:10px" />
        </div>
        <div v-if="activeName=='first'">
          转交处理
          <Transfer transferOrCopy="transfer" :data="userList" :userKeys="userKeys" @select="getSelData" :showUser='faultproclist' style="margin-top:10px" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import options from '@/api/options'
import { reactive, toRefs } from '@vue/reactivity'
import { ElMessage, ElMessageBox } from 'element-plus'
import api from '@/api/room/dutyfault'
import { computed, onMounted } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import Transfer from '@/components/room/Transfer.vue'
import { useStore } from 'vuex'
export default {
  components: {
    Transfer,
  },
  setup() {
    const store = useStore()
    const state = reactive({
      name: computed(() => store.getters.name),
      activeName: 'first',
      faultId: '',
      dutyfaultForm: {},
      dutyfaultFormRef: '',
      upurl: process.env.VUE_APP_BASE_API + '/other/uploadfaultimg',
      imgs: [],
      dialogVisible: false,
      dialogImageUrl: '',
      // 日志
      deallogForm: {},
      deallogFormRef: '',
      processFlow: '',
      // 抄送和转交
      faultcclist: [],
      faultproclist: [],
      userList: [],
      userKeys: [],
      total: 0,
    })
    const handleClick = (tab, event) => {
      state.activeName = tab.props.name
    }
    // 获取一个值班故障
    const getDutyFault = async (id) => {
      const data = await api.getDutyFault(state.faultId)
      state.dutyfaultForm = data.form
      state.faultcclist = data.faultcclist
      state.faultproclist = data.faultproclist
      console.log(state.faultcclist, state.faultproclist)
    }
    // 故障表单
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
    const finish = () => {
      ElMessageBox.confirm('确定要结束故障事务吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(async () => {
          await api.dutyFaultEnd(state.faultId)
          getDutyFault(state.faultId)
          ElMessage({
            type: 'success',
            message: '处理完成!',
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '已取消处理',
          })
        })
    }
    // 日志表单
    const logSubmit = async () => {
      state.deallogForm.faultId = state.faultId
      state.deallogForm.faultId = state.dutyfaultForm.cnname
      await api.dutyFaultClientBackAdd({
        cnname: state.name,
        faultId: state.faultId,
        clientBack: state.deallogForm.clientBack,
      })
      ElMessage({
        message: '提交成功',
        type: 'success',
      })
    }
    // 获取已经转交和抄送的人
    const getSelData = async (val) => {
      if (val.type == 'transfer') {
        await api.dutyFaultProcAdd({
          faultId: state.faultId,
          processUserId: val.checkData,
        })
      } else if (val.type == 'copy') {
        await api.dutyFaultCcAdd({
          faultId: state.faultId,
          userIdList: val.checkData,
        })
      }
      ElMessage({
        message: '操作成功',
        type: 'success',
      })
    }
    const router = useRouter()
    onMounted(async () => {
      state.faultId = await router.currentRoute.value.query.faultId
      await getDutyFault(state.faultId)
      // 获取日志处理流
      state.processFlow = await api.findProcessingFlow(state.faultId).list
      // 获取转交和抄送用户列表
      const data = await api.UserFind()
      data.rows.forEach((item) => {
        state.userList.push({
          key: item.userid,
          label: item.cnname,
        })
        state.userKeys.push(item.userid)
      })
      state.total = data.total
    })
    return {
      ...toRefs(state),
      options,
      handleClick,
      handlePictureCardPreview,
      handleRemove,
      handleUped,
      onSubmit,
      finish,
      getSelData,
      logSubmit,
    }
  },
}
</script>
<style scoped lang='scss'>
::v-deep .el-tabs__header {
  margin-bottom: 5px;
}
.box-card {
  ::v-deep .el-card__body {
    padding-top: 5px;
  }
  ::v-deep .el-form--label-top .el-form-item__label {
    color: #303133;
    padding: 0;
    height: 34px;
  }
  .el-form-item {
    margin-bottom: 19px;
    &:last-child {
      margin-bottom: 0;
    }
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
.process {
  margin-top: 40px;
  min-height: 430px;
  div {
    margin: 10px 0;
  }
}
</style>

