<template>
  <div>
    <el-row :gutter="20" :class="transferOrCopy=='transfer'?'copyStyle':''">
      <el-col :span="6">
        <div class="container">
          <div class="listHeader flexBetween">
            <div>
              <el-checkbox v-model="checkAllUser" :indeterminate="isUserIndeterminate" @change="handleAllUserChange"></el-checkbox> &nbsp;用户
            </div>
            <div class="sum">{{checkUsers.length}}/{{userListData.length}}</div>
          </div>
          <div class="listBody">
            <el-checkbox-group v-model="checkUsers" @change="handleUserChange">
              <el-checkbox v-for="item in userListData" :key="item.key" :label="item.key">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </el-col>
      <el-col :span="2" class="centerCol">
        <svg-icon icon-class="arrow-right"></svg-icon>
      </el-col>
      <el-col :span="6">
        <div class="container" v-if="transferOrCopy=='copy'">
          <div class="listHeader flexBetween">
            <div>
              <el-checkbox v-model="checkAllSel" :indeterminate="isSelIndeterminate" @change="handleAllSelChange"></el-checkbox> &nbsp;已选
            </div>
            <div class="sum">{{checkSels.length}}/{{selListData.length}}</div>
          </div>
          <div class="listBody">
            <el-checkbox-group v-model="checkSels" @change="handleSelChange">
              <el-checkbox v-for="item in selListData" :key="item.key" :label="item.key">{{item.label}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="container" v-else-if="transferOrCopy=='transfer'">
          <div class="listHeader flexBetween">
            <div>
              <el-checkbox v-model="isTransferSel" @change="handleCopyChange" :disabled="transferSel<0"></el-checkbox> &nbsp;已选
            </div>
            <div class="sum">{{transferSelNum}}/{{selListData.length}}</div>
          </div>
          <div class="listBody">
            <el-radio-group v-model="transferSel">
              <el-radio v-for="item in selListData" :key="item.key" :label="item.key">{{item.label}}</el-radio>
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" @click="submit" style="margin:150px 0 20px 0">提交</el-button>
        <div>
          已{{transferOrCopy=='copy'?'抄送':'转交'}}给：<span v-for="item in showUser" :key="item" style="color:rgb(84, 182, 157)">{{item.cnname}}，</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { computed, watch } from '@vue/runtime-core'
import { ElMessage } from 'element-plus'
export default {
  props: {
    transferOrCopy: String,
    data: Array,
    userKeys: Array,
    showUser: Array,
  },
  setup(props, { emit }) {
    const state = reactive({
      // 左侧
      checkAllUser: false,
      allUser: props.userKeys,
      isUserIndeterminate: false,
      userListData: props.data,
      checkUsers: [], // 已选用户
      // 右侧
      checkAllSel: false,
      allSel: [],
      isSelIndeterminate: false,
      selListData: [],
      checkSels: [], // 已选用户
      transferSel: -1,
      isTransferSel: false,
      transferSelNum: 0,
    })
    watch(
      () => state.transferSel,
      () => {
        if (state.transferSel > 0) {
          state.isTransferSel = true
          state.transferSelNum = 1
        } else {
          state.isTransferSel = false
          state.transferSelNum = 0
        }
      }
    )
    const handleAllUserChange = (val) => {
      if (state.checkAllUser) {
        state.checkUsers = state.allUser
        state.selListData = state.userListData
      } else {
        state.checkUsers = []
        state.selListData = []
        if (props.transferOrCopy == 'copy') {
          state.checkSels = []
        } else if (props.transferOrCopy == 'transfer') {
          state.transferSel = -1
        }
      }
      state.allSel = state.checkUsers
      state.checkAllSel = state.checkSels.length
      state.isSelIndeterminate = false
    }
    const handleUserChange = (value) => {
      let count = value.length
      state.checkAllUser = count == state.allUser.length
      state.isUserIndeterminate = count > 0 && count < state.allUser.length
      state.selListData = state.userListData.filter((item) =>
        value.includes(item.key)
      )
      state.allSel = state.checkUsers
    }

    const handleAllSelChange = (val) => {
      state.checkSels = state.checkAllSel ? state.allSel : []
      state.isSelIndeterminate = false
    }
    const handleSelChange = (value) => {
      let count = value.length
      state.checkAllSel = count == state.allSel.length
      state.isSelIndeterminate = count > 0 && count < state.allSel.length
    }
    const handleCopyChange = () => {
      state.transferSel = -1
      state.transferSelNum = 0
    }
    const submit = () => {
      if (props.transferOrCopy == 'copy') {
        emit('select', { checkData: state.checkSels, type: 'copy' })
      } else if (props.transferOrCopy == 'transfer') {
        if (props.showUser) {
          ElMessage({
            message: '值班故障的处理分配失败，已经有处理人处理！',
            type: 'error',
          })
        } else {
          emit('select', { checkData: state.transferSel, type: 'transfer' })
        }
      }
    }
    return {
      ...toRefs(state),
      handleAllUserChange,
      handleUserChange,
      handleAllSelChange,
      handleSelChange,
      handleCopyChange,
      submit,
    }
  },
}
</script>
<style scoped lang="scss">
.container {
  width: 220px;
  height: 334px;
  border: 1px solid #c0c4cc;
  border-radius: 4px;
  .listHeader {
    height: 39px;
    line-height: 39px;
    padding: 0 14px;
    background-color: #f2f6fc;
    .sum {
      font-size: 12px;
      color: #c0c4cc;
    }
  }
  .listBody {
    max-height: 290px;
    overflow: auto;
    padding: 7px 14px;
    .el-checkbox {
      width: 150px;
    }
  }
}
.el-checkbox,
.el-radio {
  height: 24px;
}
.el-radio {
  width: 100px;
}
::v-deep .centerCol {
  line-height: 350px;
  .svg-icon {
    width: 30px;
    height: 20px;
  }
}
.copyStyle {
  ::v-deep .el-checkbox {
    & .el-checkbox__inner {
      border-radius: 10px;
      &::after {
        border: 0;
      }
    }
  }
}
::v-deep .el-radio__inner::after {
  display: none;
}
</style>
