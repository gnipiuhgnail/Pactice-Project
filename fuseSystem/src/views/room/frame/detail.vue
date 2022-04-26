<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">机柜详情</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="机柜现状图" name="first" class="flexBetween">
        <el-row :gutter="20" style="width:100%">
          <el-col :span="8" class="leftBox">
            <el-row class="tips">
              <span>上线：<span class="statueCircle greenColor"></span></span>
              <span>停机：<span class="statueCircle orangeColor"></span></span>
              <span>下架：<span class="statueCircle redColor"></span></span>
              <span>插入：∇</span>
            </el-row>
            <el-row>
              <div>
                <table class="frametable" cellspacing="0">
                  <tr>
                    <td style="padding:0">
                      <table>
                        <thead>
                          <tr>
                            <th style="width:28px;text-align:right;"></th>
                            <th style="width:28px;text-align:right;"></th>
                            <th style="width:120px;text-align:left;"></th>
                            <th style="width:120px;text-align:left;"></th>
                          </tr>
                        </thead>
                        <template v-for="o in reverseNum" :key="o">
                          <tr>
                            <td rowspan="3" style="width:30px;text-align:right;border:1px solid black;" :style="getRulerColor(o)" v-if="(o) %3 == 0 &&o !=1">{{o /3}}U</td>
                            <td border=1 style="width:30px;text-align:right;border:1px solid black;">{{o}}□</td>
                            <!-- 单个 -->
                            <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 0">
                              <td colspan="2" :rowspan="deviceDrawData[needDrawList.indexOf(o)].span" class="currentCustomerClass">
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1" class="statueCircle greenColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2" class="statueCircle orangeColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3" class="statueCircle redColor"></span>
                                {{deviceDataList[needDrawList.indexOf(o)].sn}}
                                ({{deviceDataList[needDrawList.indexOf(o)].size}}U)
                                <parent-server-table :childcount="deviceDataList[needDrawList.indexOf(o)].childcount" :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"></parent-server-table>
                              </td>
                            </template>
                            <!-- 并排：左边 -->
                            <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 1">
                              <td colspan="1" :rowspan="deviceDrawData[needDrawList.indexOf(o)].span" class="currentCustomerClass">
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1" class="statueCircle greenColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2" class="statueCircle orangeColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3" class="statueCircle redColor"></span>
                                {{deviceDataList[needDrawList.indexOf(o)].sn}}
                                ({{deviceDataList[needDrawList.indexOf(o)].size}}U)

                                <parent-server-table :childcount="deviceDataList[needDrawList.indexOf(o)].childcount" :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"></parent-server-table>
                              </td>
                              <td v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) !==-1 " colspan="1" :rowspan="deviceDrawData[needDrawList.indexOf(o)].span" class="currentCustomerClass">
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1" class="statueCircle greenColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2" class="statueCircle orangeColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3" class="statueCircle redColor"></span>
                                {{deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].sn}}
                                ({{deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].size}}U)
                                <parent-server-table :childcount="deviceDataList[needDrawList.indexOf(o)].childcount" :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"></parent-server-table>
                              </td>
                            </template>
                            <!-- 并排：右边 -->
                            <template v-if="needDrawList.indexOf(o) !==-1 && deviceDrawData[needDrawList.indexOf(o)].site == 2">
                              <td v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) ==-1 &&deviceDrawData[needDrawList.indexOf(o)].tail ==1"></td>
                              <td colspan="1" v-if="needDrawList.indexOf(o,needDrawList.indexOf(o)+1) !==-1 " :rowspan="deviceDrawData[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].span" class="currentCustomerClass">
                                <span v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 1" class="statueCircle greenColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 2" class="statueCircle orangeColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].serverstatus == 3" class="statueCircle redColor"></span>
                                {{deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].sn}}
                                ({{deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].size}}U)
                                <parent-server-table :childcount="deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].childcount" :childlist="deviceDataList[needDrawList.indexOf(o,needDrawList.indexOf(o)+1)].childsequenceList"></parent-server-table>
                              </td>
                              <td colspan="1" :rowspan="deviceDrawData[needDrawList.indexOf(o)].span" class="currentCustomerClass">
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 1" class="statueCircle greenColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 2" class="statueCircle orangeColor"></span>
                                <span v-if=" deviceDataList[needDrawList.indexOf(o)].serverstatus == 3" class="statueCircle redColor"></span>
                                {{deviceDataList[needDrawList.indexOf(o)].sn}}
                                ({{deviceDataList[needDrawList.indexOf(o)].size}}U)
                                <parent-server-table :childcount="deviceDataList[needDrawList.indexOf(o)].childcount" :childlist="deviceDataList[needDrawList.indexOf(o)].childsequenceList"></parent-server-table>
                              </td>
                            </template>
                          </tr>
                        </template>
                      </table>
                    </td>
                    <td style="padding:0">
                      <table>
                        <thead>
                          <tr>
                            <th style="width:28px;text-align:right;"></th>
                          </tr>
                        </thead>
                        <tr v-for="o in reverseNum" :key="o">
                          <td style="width:30px;text-align:left;border:1px solid black;">□{{o}}</td>
                          <td rowspan="3" v-if="(o) %3 == 0 &&o !=1" style="width:30px;text-align:left;border:1px solid black;" :style="getRulerColor(o)">{{(o) /3}}U</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </el-row>
          </el-col>
          <el-col :span="3"></el-col>
          <el-col :span="12">
            <div class="rightBox">
              <div class="rightTopBox">
                上传新的机柜现状图（限制一张）：
                <el-upload ref="uploadRef" :class="fileList.length>0?'hiddenUpload':''" class="upload-demo" drag action="/frame/uploadFrameImage/" :limit="1" accept="image/jepg,image/jpg,image/png" :before-upload="onBeforeUpload" :auto-upload="false" list-type="picture-card" :file-list="fileList" :on-change="handleUploadChange" :on-remove="handleRemove" :data="uploadData" :on-preview="handlePictureCardPreview">
                  <svg-icon icon-class="picUpload"></svg-icon>
                  <div class="el-upload__text">将格式为“JPG/JPEG/PNG”的文件拖到此处或<em>点击上传</em></div>
                </el-upload>
                <div class="flexBetween">
                  <el-date-picker v-model="uploadData.frametime" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
                  <el-button type="primary" style="margin-left:12px" @click="uploadFrameImage">上传</el-button>
                </div>
              </div>
              <div class="rightBottomBox">
                <div class="flexBetween">
                  <span>上传历史</span>
                  <svg-icon :icon-class="showLogs?'arrow-up':'arrow-down'" style="color:#909399;margin-right: 3px" @click="showLogs = !showLogs"></svg-icon>
                </div>
                <div v-if="showLogs">
                  <div class="flexBetween datePickBox">
                    <div>选择查看哪个日期的机柜现状图：</div>
                    <el-select v-model="imgId" placeholder="请选择">
                      <el-option v-for="item in selectOption" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <div>
                    <div>
                      <el-image style="width: 100%; height: 230px;margin:12px 0" :src="urlOption[imgId]"></el-image>
                    </div>
                    <el-image-viewer v-if='isLargePreview' hide-on-click-modal=true @close="()=>{isLargePreview = false}" :url-list="srcList">
                    </el-image-viewer>
                    <el-button type="primary" @click="isLargePreview =true">大图预览</el-button>
                    <el-button @click="deleteDialog">删除</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="机柜基本信息" name="second">
        <div class="flexBetween">
          <el-descriptions :column="1">
            <el-descriptions-item label="所在机房：">{{info.cityName}}/{{info.house}}/{{info.floor}} F</el-descriptions-item>
            <el-descriptions-item label="机柜编号：">{{info.position}}</el-descriptions-item>
            <el-descriptions-item label="总刻度数：">{{info.rulerSize}}</el-descriptions-item>
            <el-descriptions-item label="已用刻度数：">{{info.useDimensionSize}}</el-descriptions-item>
            <el-descriptions-item label="服务数：">{{info.serverNum}}</el-descriptions-item>
            <el-descriptions-item label="总U数：">{{info.frameUnum}}</el-descriptions-item>
            <el-descriptions-item label="总电插数：">{{info.powerNum}}</el-descriptions-item>
            <el-descriptions-item label="已用电插数：">{{info.powerUseNum}}</el-descriptions-item>
            <el-descriptions-item label="用电类型：">{{electronicTypeTextMap[info.electronicType]}}</el-descriptions-item>
            <el-descriptions-item label="商务类型：">{{financeTypeTextMap[info.financeType]}}</el-descriptions-item>
            <el-descriptions-item label="设备数：">{{info.serverNum}}台</el-descriptions-item>
            <el-descriptions-item label="备注：">{{info.memo}}</el-descriptions-item>
          </el-descriptions>
          <basePie boxName="statistic" name="机柜使用率" :data="{useTotal,total}" style="width:60%" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="设备列表" name="third">
        <div class="sign">
          <div>单台服务器：<svg-icon icon-class="single-server"></svg-icon>
          </div>
          <div class="mutli">多合一服务器：<svg-icon icon-class="multi-in-one-servers"></svg-icon>
          </div>
          <div class="sub">子服务器：<svg-icon icon-class="subserver"></svg-icon>
          </div>
          <div>交换机：<svg-icon icon-class="switchboard"></svg-icon>
          </div>
          <div>波分设备：<svg-icon icon-class="wavelength-division"></svg-icon>
          </div>
          <div>防火墙：<svg-icon icon-class="firewall"></svg-icon>
          </div>
          <div>路由器：<svg-icon icon-class="router"></svg-icon>
          </div>
        </div>
        <div class="btn34" style="margin:16px 0">
          <el-button type="primary" @click="EditBtn('rackIdEdit')" :disabled='!selectBtn.rackIdEdit'>编辑刻度</el-button>
          <el-button type="primary" @click="EditBtn('uEdit')" :disabled='!selectBtn.uEdit'>编辑U数</el-button>
          <el-button type="primary" @click="EditBtn('dimensionEdit')" :disabled='!selectBtn.dimensionEdit'>编辑机架位</el-button>
          <el-button type="primary" @click="save()" v-if="isSave">保存</el-button>
        </div>
        <el-form :model="devicesForm">
          <el-table :data="devices" element-loading-text="数据加载中，请稍后" fit :cell-style="cellClass">
            <el-table-column label="ID" prop="serverId"></el-table-column>
            <el-table-column label="品牌型号" width="250px">
              <template #default="scope">
                {{scope.row.brand}} {{scope.row.deviceModel}}
              </template>
            </el-table-column>
            <el-table-column label="用途" prop="purpose"></el-table-column>
            <el-table-column label="规格" prop="spec"></el-table-column>
            <el-table-column label="机架位" prop="rackId"></el-table-column>
            <el-table-column v-if="selectEdit.dimensionEdit" label="编辑机架位">
              <template #default="scope">
                <el-form-item prop="rackId">
                  <el-input v-model="devicesForm[scope.row.serverId+'*']" @change="edit(scope.row,'rackId')"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="刻度">
              <template #default="scope">
                {{ scope.row.startDimension }} - {{scope.row.endDimension}}
              </template>
            </el-table-column>
            <el-table-column v-if="selectEdit.rackIdEdit" label="编辑刻度">
              <template #default="scope">
                <el-form-item prop="startDimension">
                  <el-input v-model="devicesForm[scope.row.serverId+'*']" @change="edit(scope.row,'dimension')"></el-input>
                </el-form-item>
                <el-form-item prop="endDimension">
                  <el-input v-model="devicesForm[scope.row.serverId+'**']" @change="edit(scope.row,'dimension')"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column v-if="selectEdit.uEdit" label="编辑U数">
              <template #default="scope">
                <el-form-item prop="size">
                  <el-input v-model="devicesForm[scope.row.serverId+'*']" @change="edit(scope.row,'unum')"></el-input>
                </el-form-item>
              </template>
            </el-table-column>
            <el-table-column label="设备SN">
              <template #default="scope">
                <div>
                  <svg-icon :icon-class="deviceTypeTextMap[scope.row.deviceType]" :class="deviceTypeTextMap[scope.row.deviceType]"></svg-icon>
                  <span>{{ scope.row.sn }}</span>
                </div>
                <div>{{scope.row.ip}}</div>
              </template>
            </el-table-column>
            <el-table-column label="资产编号" prop="customSn"></el-table-column>
            <el-table-column label="使用/所属客户" prop="useCustom"></el-table-column>
            <el-table-column label="状态">
              <template #default="scope">
                {{ scope.row.serverType }}
              </template>
            </el-table-column>
          </el-table>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import basePie from '@/components/Echarts/basePie.vue'
import ParentServerTable from '@/components/room/ParentServerTable.vue'
import { useRouter } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import api from '@/api/room/frame'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  components: {
    basePie,
    'parent-server-table': ParentServerTable,
  },
  setup() {
    const state = reactive({
      activeName: 'first',
      frameId: '',
      deviceDataList: [],
      deviceDrawData: [],
      needDrawList: [],
      selectOption: [],
      urlOption: {},
      fileList: [],
      isLargePreview: false,
      imgId: '',
      srcList: [],
      uploadData: {
        frameId: '',
        file: '',
        frametime: '',
      },
      uploadRef: '',
      reverseNum: computed(() => {
        let arr = []
        for (var i = state.info.rulerSize; i > 0; i--) {
          arr.push(i)
        }
        return arr
      }),
      info: {},
      total: 0,
      useTotal: 0,
      showLogs: true,
      electronicTypeTextMap: {
        1: '直流',
        2: '交流',
        3: '直流交流通用',
        4: '未知',
      },
      financeTypeTextMap: {
        1: '本地IDC',
        2: '省直签',
      },
      devices: [],
      devicesForm: {},
      deviceTypeTextMap: {
        1: 'single-server',
        2: 'multi-in-one-servers',
        3: 'subserver',
        4: 'switchboard',
        5: 'wavelength-division',
        6: 'firewall',
        7: 'router',
      },
      selectBtn: {uEdit:true, rackIdEdit:true,dimensionEdit:true},
      selectEdit: {uEdit:false, rackIdEdit:false,dimensionEdit:false},
      isSave: false,
    })
    const getFrameViewDate = async () => {
      const data = await api.FrameViewDataFind({ frameId: state.frameId })
      state.deviceDataList = data.serverlist
      state.deviceDrawData = data.place
      state.needDrawList = data.info
      state.rulerSize = data.frameinfo.rulersize
    }
    // 间隔调转刻度U的颜色：
    const getRulerColor = (index) => {
      var styleObj = {}
      if ((index / 3) % 2 == 0) {
        styleObj['background-color'] = '#C5F6C5'
      } else {
        styleObj['background-color'] = '#FCD4D5'
      }
      return styleObj
    }
    const handleClick = (tab, event) => {
      state.activeName = tab.name
    }
    const getOneFrame = async () => {
      const item = await api.getFrame({ frameId: state.frameId })
      state.info = item
      state.total = item.rulerSize
      state.useTotal = item.useDimensionSize
    }
    // 图片校验
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
      state.uploadData.file = state.fileList[0].url
    }
    const handleRemove = (file, fileList) => {
      state.fileList = []
      state.uploadData.file = ''
    }
    const handlePictureCardPreview = (file) => {
      window.open(file.url, 'blank')
    }
    const uploadFrameImage = () => {
      state.uploadData.frameId = state.frameId
      if (state.uploadData.file == '') {
        ElMessage({
          type: 'warning',
          message: '请先选择上传图片',
        })
        return
      }
      if (state.uploadData.frametime == '') {
        ElMessage({
          type: 'warning',
          message: '请先选择上传时间',
        })
        return
      }
      state.uploadRef.submit()
    }
    // 查看图片
    const frameImageUrlFind = async () => {
      const list = await api.frameImageUrlFind({
        frameId: state.frameId,
        frameTime: '', // ???
      })
      list.forEach((item) => {
        state.selectOption.push({
          value: item.imgId,
          label: item.frameTime,
        })
        state.srcList.push(item.filePath)
        state.urlOption = { ...state.urlOption, [item.imgId]: item.filePath }
        state.imgId = state.selectOption[0].value
      })
    }
    const deleteDialog = () => {
      ElMessageBox.confirm(`确定删除该机柜现状图吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(async () => {
          await api.frameImageUrlDel({ imgId: state.imgId })
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
          frameImageUrlFind()
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除',
          })
        })
    }
    const EditBtn = (btn) => {
      for(let prop in state.selectBtn){
        state.selectBtn[prop] = false
      }
      for(let prop in state.selectEdit){
        state.selectEdit[prop] = false
      }
      state.selectBtn[btn] = true
      state.selectEdit[btn] = true
        state.isSave = true
    }
    const save = () =>{
      ElMessageBox.confirm('此操作将批量修改信息, 是否保存?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(async () => {
          await sumbit()
          ElMessage({
            type: 'success',
            message: '操作成功',
          })
          frameImageUrlFind()
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消操作',
          })
        })
    }
    const sumbit = async() => {
      const editList = []
      for(var prop in state.devicesForm) {
        if(state.devicesForm[prop] instanceof Object){
          editList.push(state.devicesForm[prop])
        }
      }
      state.devices = await api.batchEditServerInfo({editList:editList})
      for(let prop in state.selectBtn){
        state.selectBtn[prop] = true
      }
      for(let prop in state.selectEdit){
        state.selectEdit[prop] = false
      }
      state.isSave = false
      state.devicesForm = {}
    }
    const edit = (row, type) => {
      if(type == 'rackId'){
        state.devicesForm[row.serverId] = {
          serverId : row.serverId,
          rackId: state.devicesForm[row.serverId+'*']
        }
      }else if(type == "dimension"){
        state.devicesForm[row.serverId] = {
          serverId : row.serverId,
          startDimension: state.devicesForm[row.serverId+'*'],
          endDimension: state.devicesForm[row.serverId+'**'],
        }
      }else if(type == 'unum'){
        state.devicesForm[row.serverId] = {
          serverId : row.serverId,
          size: state.devicesForm[row.serverId+'*']
        }
      }
    }
    const router = useRouter()
    onMounted(async () => {
      state.frameId = await router.currentRoute.value.query.frameId
      await getFrameViewDate()
      await getOneFrame()
      await frameImageUrlFind()
      state.devices = await api.findDeviceByFrameId({ frameId: state.frameId })
    })
    return {
      ...toRefs(state),
      getRulerColor,
      handleClick,
      getOneFrame,
      handleUploadChange,
      handleRemove,
      handlePictureCardPreview,
      onBeforeUpload,
      uploadFrameImage,
      frameImageUrlFind,
      deleteDialog,
      EditBtn,
      save,
      sumbit,
      edit,
    }
  },
}
</script>
<style scoped lang="scss">
// 机柜现状图
.leftBox {
  font-size: 12px;
  .statueCircle {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    margin-right: 12px;
  }
  .greenColor {
    background-color: #41e041;
  }
  .orangeColor {
    background-color: #f4b239;
  }
  .redColor {
    background-color: #f44e39;
  }
  .currentCustomerClass {
    background-color: #c5f6c5;
  }
}
.rightBox {
  width: 552px;
  .rightTopBox {
    height: 319px;
    margin-bottom: 12px;
    & ::v-deep {
      .el-upload {
        width: 552px;
        height: 220px;
        margin: 12px 0;
      }
      .el-upload-dragger {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .svg-icon {
          width: 32px;
          height: 32px;
          margin-right: 12px;
        }
      }
      .el-upload-list__item {
        margin-top: 12px;
        width: 552px;
        height: 220px;
      }
      .hiddenUpload .el-upload--picture-card {
        display: none;
      }
    }
  }
  .rightBottomBox {
    margin: 12px 0;
    padding: 12px;
    border-bottom: 2px solid #dcdfe6;
    border-top: 2px solid #dcdfe6;
    .datePickBox {
      line-height: 40px;
    }
    .el-select {
      margin: 3px 0;
      width: 280px;
    }
  }
}
// 设备列表
.sign {
  display: flex;
  justify-content: flex-start;
  .svg-icon {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
  .mutli .svg-icon,
  .sub .svg-icon {
    width: 48px;
  }
}
.el-table {
  & ::v-deep .el-table__row .el-table__cell {
    // 表格行高度 59
    height: 120px;
  }
  .svg-icon {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    vertical-align: top;
  }
  .multi-in-one-servers.svg-icon {
    width: 32px;
  }
}
::v-deep .el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  background-color: #8ab8f8 !important;
}
</style>
