<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">机房可视化管理</div>
    </div>
    <el-form :model="aRoomForm">
      <el-form-item prop="roomId">
        选择机房:
        <el-select v-model="aRoomForm.roomId" clearable placeholder="请选择机房" style="margin-left:12px">
          <el-option v-for="item in options.roomOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="customShowType">
        <div class="flexBetween" style="width:290px">
          <div>客户显示类型:</div>
          <el-radio-group v-model="aRoomForm.customShowType">
            <el-radio :label="1">使用客户</el-radio>
            <el-radio :label="2">所属客户</el-radio>
          </el-radio-group>
        </div>
      </el-form-item>
    </el-form>
    <div v-if="planPicVisible">
      <div>
        机房平面图: <el-button type="primary" @click="isLargePreview =true" style="margin-left:12px">大图预览</el-button>
      </div>
      <!-- 已经有大图预览了,还需要放大缩小? 再说吧 -->
      <div class="planDisplay">
        <div class="planbox">
          <el-image :src="srcList[0]"></el-image>
        </div>
      </div>
      <el-image-viewer v-if='isLargePreview' hide-on-click-modal=true @close="()=>{isLargePreview = false}" :url-list="srcList">
      </el-image-viewer>
    </div>
    <div v-if="!planPicVisible">
      机房平面图: <el-button type="primary" @click="saveImage" style="margin-left:12px">上传</el-button>
      <el-upload :class="fileList.length>0?'hiddenUpload':''" class="upload-demo" drag :action="baseURL" :limit="1" accept="image/jepg,image/jpg,image/png" :before-upload="onBeforeUpload" :auto-upload="true" list-type="picture-card" :file-list="fileList" :on-change="handleUploadChange" :on-remove="handleRemove" :on-success="handleUploadSuccess" :on-preview="handlePictureCardPreview">
        <svg-icon icon-class="create-btn"></svg-icon>
        <div class="el-upload__text">限一张，格式为"JPG/JPEG/PNG"的文件</div>
      </el-upload>
    </div>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
      <!-- 默认编辑不能操作，查看只有提示信息 -->
      <el-tab-pane :disabled="disableEdit" name="first">
        <template #label>
          <svg-icon icon-class="visual-room-edit" style="margin-right: 6px"></svg-icon>编辑
        </template>
        <!-- 添加行列、保存、缩小、放大、修改表格内容 -->
        <div>
          <div>
            <el-button type="primary" @click="openRowColumn" style="margin-right:12px">添加行列</el-button>
            <el-button type="primary" @click="editOnePlanPicture">保存</el-button>
          </div>
          <el-row :gutter="12">
            <el-col :span="1" class="zoomCol">
              <div class="zoom">
                <el-button size="small" type="primary" @click="enlarge('edit')">
                  <svg-icon icon-class="create-btn"></svg-icon>
                </el-button>
                <el-button size="small" type="primary" @click="narrow('edit')">
                  <div style="height:2px;width:13px;background:#eaeff9"></div>
                </el-button>
              </div>
            </el-col>
            <el-col :span="23" class="tableCol">
              <div class="tableBox" style="transform-origin: left top;" :style="`transform:scale(${editTransform},${editTransform});`">
                <table border="1" cellspacing="0" class="edit">
                  <tr v-for="row in editTable" :key="row">
                    <td v-for="(item, index) in row" :key="index"><input type="text" v-model="item.position"></td>
                  </tr>
                </table>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template #label>
          <svg-icon icon-class="visual-room-examine" style="margin-right: 6px"></svg-icon>查看
        </template>
        <div>操作提示：鼠标左键点击客户名称，可以显示机柜的客户列表，再次点击则隐藏；鼠标右键点击可以编辑机柜信息。</div>
        <div>注意：机柜显示不可用代表输入的机柜在系统中查找不到对应的信息。</div>
        <div style="width:420px;align-items: center" class="flexBetween">
          <div>单个客户：</div>
          <div class="tip single"></div>
          <div>多个客户：</div>
          <div class="tip multi"></div>
          <div>无客户：</div>
          <div class="tip without"></div>
        </div>
        <el-row :gutter="12">
          <el-col :span="1" class="zoomCol">
            <div class="zoom">
              <el-button size="small" type="primary" @click="enlarge('see')">
                <svg-icon icon-class="create-btn"></svg-icon>
              </el-button>
              <el-button size="small" type="primary" @click="narrow('see')">
                <div style="height:2px;width:13px;background:#eaeff9"></div>
              </el-button>
            </div>
          </el-col>
          <el-col :span="23" class="tableCol">
            <div class="tableBox" style="transform-origin: left top;" :style="`transform:scale(${seeTransform},${seeTransform});`">
              <table border="1" cellspacing="0" class="see">
                <tr v-for="row in seeTable" :key="row">
                  <td v-for="(item, index) in row" :key="index" style="position:relative">
                    <div v-if="!item.position" class="tdBox"></div>
                    <div v-else @contextmenu.prevent="openOneFrameDialog(item.frameid)">
                      <div v-if="!('custom' in item)" style="background-color:#bfbfbf" class="tdBox">
                        <div>{{item.position}}</div>
                        <div style="color:#ff0000">不可用</div>
                      </div>
                      <div v-else-if="item.useCustomCount>1">
                        <div class="tdBox multi" @click="toolTipShow=!toolTipShow">
                          <div>{{item.position}} <span v-if="item.status == 2" style="color:#ff0000">(已停用)</span></div>
                          <div>多使用客户</div>
                          <div>{{item.electronicType}}</div>
                        </div>
                        <div v-html="item.useCustom" class="tdHover" v-show="toolTipShow"></div>
                      </div>
                      <div v-else class="tdBox" :class="item.customCount==1?'single':'without'">
                        <div>{{item.position}} <span v-if="item.status == 2" style="color:#ff0000">(已停用)</span></div>
                        <div>{{item.useCustomCount == 1 ? item.useCustom :'无使用客户'}}</div>
                        <div>{{item.electronicType}}</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <!-- 编辑行列 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogRowColumn" width="448px" title="编辑行列" :close-on-click-modal="false" @close="dialogClose('edit')">
        <el-form ref="fromRefRowColumn" :model="fromRowColumn" label-width="40px" label-position="right" :rules="rulesRowColumn">
          <el-form-item label="行" prop="row">
            <el-input-number v-model="fromRowColumn.row" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="列" prop="column">
            <el-input-number v-model="fromRowColumn.column" :min="1"></el-input-number>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose('edit')">取消</el-button>
          <el-button type="primary" @click="saveRowColumn">
            确定
          </el-button>
        </template>
      </el-dialog>
    </div>
    <!-- 右键编辑 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogOneFrame" width="490px" title="编辑机柜" :close-on-click-modal="false" @close="dialogClose('frame')">
        <el-form ref="fromRefOneFrame" :model="fromOneFrame" label-width="80px" label-position="right" :rules="rulesOneFrame">
          <el-form-item label="所在机房" prop="roomId">
            <el-select disabled v-model="fromOneFrame.roomId" clearable placeholder="请选择">
              <el-option v-for="item in options.roomOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="机柜编号" prop="position">
            <el-input disabled v-model="fromOneFrame.position" :min="1"></el-input>
          </el-form-item>
          <el-form-item label="总刻度数" prop="rulersize">
            <el-input-number v-model="fromOneFrame.rulersize" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="总电插数" prop="powernum">
            <el-input-number v-model="fromOneFrame.powernum" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="总 U 数" prop="frameunum">
            <el-input-number v-model="fromOneFrame.frameunum" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="用电类型" prop="electronictype">
            <el-radio-group v-model="fromOneFrame.electronictype">
              <el-radio :label="1">直流</el-radio>
              <el-radio :label="2">交流</el-radio>
              <el-radio :label="3">直流交流通用</el-radio>
              <el-radio :label="4">未知</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogClose('frame')">取消</el-button>
          <el-button type="primary" @click="saveOneFrame">
            确定
          </el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import options from '@/api/options'
import { onMounted, watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import api from '@/api/room/position'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  setup() {
    const state = reactive({
      // 表单
      aRoomForm: {},
      // 大图预览
      isLargePreview: false,
      srcList: [],
      planPicVisible: false,
      // 图片上传
      filePath: '',
      fileList: [],
      imgId: '',
      baseURL: process.env.VUE_APP_BASE_API + '/other/uploadImage',
      // 编辑查看
      disableEdit: true,
      activeName: 'second',
      // 编辑
      editTransform: 1,
      editTable: [],
      dialogRowColumn: false,
      fromRowColumn: {},
      fromRefRowColumn: '',
      rulesRowColumn: {
        row: [{ required: true,trigger: 'blur',message:'行数不能为空' },{ required: true,trigger: 'change',message:'行数不能为空' }],
        column: [{ required: true,trigger: 'blur',message:'列数数不能为空' },{ required: true,trigger: 'change',message:'列数不能为空' }]
      },
      // 查看
      seeTransform: 1,
      seeTable: [],
      toolTipShow: false,
      dialogOneFrame: false,
      fromOneFrame: {},
      fromRefOneFrame: '',
      rulesOneFrame: {
        roomId:[{ required: true,trigger: 'blur',message:'机房不能为空'}],
        position:[{ required: true,trigger: 'blur',message:'编号不能为空'}],
        rulersize: [{ required: true,trigger: 'blur',message:'总刻度数不能为空' },{ required: true,trigger: 'change',message:'总刻度数不能为空' }],
        frameunum: [{ required: true,trigger: 'blur',message:'总U数不能为空' },{ required: true,trigger: 'change',message:'总U数不能为空' }],
        powernum: [{ required: true,trigger: 'blur',message:'总电插数不能为空' },{ required: true,trigger: 'change',message:'总电插数不能为空' }],
        electronictype: [{ required: true,trigger: 'blur',message:'用电类型不能为空'}]
      },
    })
    // 查看一个机房的明细
    const getComproom = async () => {
      const data = await api.getComproom({ roomId: state.aRoomForm.roomId })
      state.aRoomForm = data
      state.srcList.push(data.filePath)
      state.planPicVisible = data.filePath.length > 0 ? true : false
    }
    // 图片格式校验
    const onBeforeUpload = (file) => {
      const isIMAGE = file.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      if (!isIMAGE) {
        ElMessage({
          type: 'error',
          message: '上传文件只能是图片格式!',
        })
      }
      return isIMAGE
    }
    const handleUploadChange = (file, fileList) => {
      state.fileList = fileList
    }
    // 平面图上传成功
    const handleUploadSuccess = (response, file, fileList) => {
      state.filePath = response.appdata.form.filepath // 上传成功返回filepath和imageid
    }
    // 上传图片的预览 +
    const handlePictureCardPreview = (file) => {
      window.open(file.url, 'blank')
    }
    // 删除上传图片
    const handleRemove = (file, fileList) => {
      state.fileList = []
      state.filePath = ''
    }
    // 图片上传
    const saveImage = async () => {
      if (state.filePath == '') {
        ElMessage({
          type: 'warning',
          message: '请先选择上传图片',
        })
        return
      }
      state.roomPanelForm = await api.editOnePlanPictureImg({
        filepath: state.filePath,
        roomId: state.aRoomForm.roomId,
      })
    }
    watch(
      () => state.aRoomForm.roomId,
      () => {
        if (state.aRoomForm.roomId != '') {
          state.disableEdit = false
        } else {
          state.disableEdit = true
          state.activeName = 'second'
        }
      }
    )
    // 切换tab
    const handleClick = async (tab, event) => {
      state.activeName = tab.props.name
      if (state.activeName == 'first') {
        state.editTable = await api.findOneEditPlanPicture({
          roomId: state.aRoomForm.roomId,
        })
      } else if (state.activeName == 'second') {
        state.seeTable = await api.findOneRenderPlanPicture({
          roomId: state.aRoomForm.roomId,
        })
      }
    }
    // 放大
    const enlarge = (type) => {
      if (type == 'edit') {
        state.editTransform += 0.1
      } else if (type == 'see') {
        state.seeTransform += 0.1
      }
    }
    // 缩小
    const narrow = (type) => {
      if (type == 'edit') {
        state.editTransform -= 0.1
      } else if (type == 'see') {
        state.seeTransform -= 0.1
      }
    }
    // 编辑
    const openRowColumn = () => {
      state.dialogRowColumn = true
      state.fromRowColumn.row = state.editTable.length
      state.fromRowColumn.column = state.editTable[0].length
    }
    // 保存添加行列
    const saveRowColumn = () => {
      const tableRow = state.editTable.length
      const row = state.fromRowColumn.row
      const tableColumn = state.editTable[0].length
      const column = state.fromRowColumn.column
      console.log(tableRow, row, tableColumn, column)
      let table = null
      state.fromRefRowColumn.validate(async (valid) => {
        if (valid) {
          if (tableRow > row || tableColumn > column) {
            ElMessageBox.confirm(
              '您新设置的行列大小小于原来的行列，确定要设置吗？',
              '提示',
              {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
              }
            )
              .then(async () => {
                table = new Array(row).fill(new Array(column).fill({}))
                table.forEach((item, i) => {
                  table[i] = state.editTable[i].slice(0, column)
                })
                state.editTable = table
                state.dialogRowColumn = false
                ElMessage({
                  type: 'success',
                  message: '设置成功',
                })
              })
              .catch(() => {
                ElMessage({
                  type: 'info',
                  message: '取消设置',
                })
              })
          } else if (tableRow < row || tableColumn < column) {
            table = new Array(row).fill(new Array(column).fill({}))
            table.forEach(async (item, i) => {
              if (state.editTable[i]) {
                table[i] = await state.editTable[i].concat(
                  new Array(column - tableColumn).fill({})
                )
              }
            })
            state.editTable = table
            state.dialogRowColumn = false
          } else {
            state.dialogRowColumn = false
          }
        }
      })
    }
    // 保存
    const editOnePlanPicture = async () => {
      console.log(state.editTable)
      await api.editOnePlanPicture({
        roomId: 17,
        table: state.editTable,
      })
    }
    // 取消
    const dialogClose = (type) => {
      if (type == 'edit') {
        state.dialogRowColumn = false
      }
      if(type == 'frame'){
        state.dialogOneFrame = false
      }
    }
    // 右键编辑查看
    const openOneFrameDialog = async (frameid) => {
      state.dialogOneFrame = true
      state.fromOneFrame = await api.FrameFindOne({ frameid: frameid })
    }
    const saveOneFrame = async ()=> {
      state.fromRefOneFrame.validate(async (valid) => {
        if (valid) {
           await api.FrameEdit(state.fromOneFrame)
            ElMessage({
              message: '编辑机柜成功',
              type: 'success',
            })
            dialogClose("frame")
        }
      })
    }
    const router = useRouter()
    onMounted(async () => {
      state.aRoomForm.roomId = await router.currentRoute.value.query.roomId
      await getComproom()
      await handleClick({ props: { name: 'second' } })
    })
    return {
      options,
      ...toRefs(state),
      getComproom,
      handleUploadChange,
      handleUploadSuccess,
      handleRemove,
      handlePictureCardPreview,
      onBeforeUpload,
      saveImage,
      handleClick,
      enlarge,
      narrow,
      openRowColumn,
      saveRowColumn,
      dialogClose,
      editOnePlanPicture,
      openOneFrameDialog,
      saveOneFrame
    }
  },
}
</script>
<style scoped lang="scss">
// 图片展示
.planDisplay {
  width: 552px;
  height: 192px;
  margin: 12px 0;
  text-align: center;
  border: 1px solid #c0c4cc;
  border-radius: 8px;
  .planbox {
    width: 528px;
    height: 168px;
    margin: 12px;
    overflow: hidden;
  }
  .el-image {
    width: 400px;
  }
}
// 图片上传
::v-deep {
  .el-upload {
    width: 552px;
    height: 192px;
    margin: 12px 0;
  }
  .el-upload-dragger {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .svg-icon {
      width: 24px;
      height: 24px;
      margin-right: 12px;
    }
  }
  .el-upload-list__item {
    margin-top: 12px;
    width: 552px;
    height: 192px;
  }
  .hiddenUpload .el-upload--picture-card {
    display: none;
  }
}
// 查看
.tip {
  width: 48px;
  height: 14px;
  margin-right: 16px;
}
.single {
  background-color: #c5f6c5;
}
.multi {
  background-color: #ffddc7;
}
.without {
  background-color: #dcdfe6;
}
.zoomCol {
  position: relative;
  .zoom {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: -webkit-right;
    .el-button {
      display: block;
      padding: 9px;
      margin-bottom: 24px;
    }
  }
}
.tableCol {
  overflow: auto;
  .tableBox {
    width: 100%;
    min-height: 350px;
    margin-top: 12px;
  }
}
table.edit {
  & td {
    width: 100px;
    height: 25px;
    padding: 0;
  }
  & input {
    width: 100px;
    height: 23px;
    margin: 0 2px 2px;
    text-align: center;
  }
}
table.see {
  font-size: 12px;
  text-align: center;
  .tdBox {
    width: 90px;
    height: 51px;
    & div {
      height: 16px;
    }
  }
  .tdHover {
    z-index: 999;
    width: 80px;
    padding: 5px 0;
    position: absolute;
    top: 10px;
    left: 100px;
    border: 1px #c0c4cc solid;
    border-radius: 4px;
    background-color: #fff;
  }
}
.el-dialog .el-radio {
  margin-right: 18px;
}
</style>
