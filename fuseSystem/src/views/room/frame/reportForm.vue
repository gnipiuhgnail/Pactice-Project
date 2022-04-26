<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">机柜报表</div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="概况统计" name="first">
        <div>
          <time-select @date="getGeneralDate"></time-select>
          <div class="messageBox">
            <div>
              <span>上月截止机柜汇总数量：{{amount.beforeFrameNumber}} </span>
              <span>现有机柜汇总数：{{amount.nowFrameNumber}} </span>
              <span>本月启用机柜汇总数：{{amount.rackFrameNumber}} </span>
              <span>本月停用机柜汇总数：{{amount.downFrameNumber}} </span>
            </div>
            <div>
              <span>上月截止设备汇总数量：{{amount.beforeDeviceNumber}} </span>
              <span>现有设备汇总数：{{amount.rackDeviceNumber}} </span>
              <span>本月启用设备汇总数：{{amount.downDeviceNumber}} </span>
              <span>本月停用设备汇总数：{{amount.nowDeviceNumber}} </span>
            </div>
            <div>机柜数：{{amount.nowFrameNumber}} (个)</div>
          </div>
        </div>
        <rosePie boxName="FrameRose" :data="roseData" seriesName="城市机柜占比" width="900"/>
      </el-tab-pane>
      <el-tab-pane label="按机房统计" name="second">
        <time-select @date="getRoomDate"></time-select>
        <div class="messageBox">
          <div>
            <span>上月截止机柜汇总数量：{{roomAmount.beforeFrameNumber}} </span>
            <span>现有机柜汇总数：{{roomAmount.nowFrameNumber}} </span>
            <span>本月启用机柜汇总数：{{roomAmount.rackFrameNumber}} </span>
            <span>本月停用机柜汇总数：{{roomAmount.downFrameNumber}} </span>
          </div>
          <div>
            <span>上月截止设备汇总数量：{{roomAmount.beforeDeviceNumber}} </span>
            <span>现有设备汇总数：{{roomAmount.rackDeviceNumber}} </span>
            <span>本月启用设备汇总数：{{roomAmount.downDeviceNumber}} </span>
            <span>本月停用设备汇总数：{{roomAmount.nowDeviceNumber}} </span>
          </div>
        </div>
        <el-table v-loading="listLoading" :data="roomListData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
          <el-table-column type="index" width="150" label="序号"> </el-table-column>
          <!-- <el-table-column label="序号" width="100px" prop="roomId"></el-table-column> -->
          <el-table-column label="机房" prop="roomName"></el-table-column>
          <el-table-column label="上月截止机柜数量" prop="beforeFrameNumber"></el-table-column>
          <el-table-column label="本月截止机柜数量" prop="nowFrameNumber"></el-table-column>
          <el-table-column label="本月启用机柜数量" prop="rackFrameNumber"></el-table-column>
          <el-table-column label="本月停用机柜数量" prop="downFrameNumber"></el-table-column>
          <el-table-column label="上月截止设备数量" prop="beforeDeviceNumber"></el-table-column>
          <el-table-column label="本月截止设备数量" prop="nowDeviceNumber"></el-table-column>
          <el-table-column label="本月上架设备数量" prop="rackDeviceNumber"></el-table-column>
          <el-table-column label="本月下架设备数量" prop="downDeviceNumber"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
              <el-button type="text" size="small" @click="moreInfo(scope.row.positionList)">更多</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="按客户统计" name="third">
        <time-select @date="getCustomDate"></time-select>
        <el-table v-loading="listLoading" style="margin-top:21px" :data="customListData" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
          <!-- <el-table-column label="序号" width="100px" prop="customId"></el-table-column> -->
          <el-table-column type="index" width="150" label="序号"> </el-table-column>
          <el-table-column label="客户" prop="customName" width="100px"></el-table-column>
          <el-table-column label="上月截止机柜数量" prop="beforeFrameNumber"></el-table-column>
          <el-table-column label="本月截止机柜数量" prop="nowFrameNumber"></el-table-column>
          <el-table-column label="本月启用机柜数量" prop="rackFrameNumber"></el-table-column>
          <el-table-column label="本月停用机柜数量" prop="downFrameNumber"></el-table-column>
          <el-table-column label="上月截止设备数量" prop="beforeDeviceNumber"></el-table-column>
          <el-table-column label="本月截止设备数量" prop="nowDeviceNumber"></el-table-column>
          <el-table-column label="本月上架设备数量" prop="rackDeviceNumber"></el-table-column>
          <el-table-column label="本月下架设备数量" prop="downDeviceNumber"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template #default="scope">
              <el-button type="text" size="small" @click="moreInfo(scope.row.positionList)">更多</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- 更多-弹窗 -->
    <div v-dialogdrag>
      <el-dialog v-model="dialogVisible" :title="title" :close-on-click-modal="false" @close="dialogVisible=false" width="1116px">
        <el-table v-if="activeName == 'second'" :data="positionList" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
          <el-table-column type="index" width="150" label="序号"> </el-table-column>
          <el-table-column label="机柜" prop="position"></el-table-column>
          <el-table-column label="上月截止设备数量" prop="beforeDeviceNumber"></el-table-column>
          <el-table-column label="本月截止设备数量" prop="nowDeviceNumber"></el-table-column>
          <el-table-column label="本月上架设备数量" prop="rackDeviceNumber"></el-table-column>
          <el-table-column label="本月下架设备数量" prop="downDeviceNumber"></el-table-column>
        </el-table>
        <el-table v-if="activeName=='third'" :data="positionList" element-loading-text="数据加载中，请稍后" fit :header-cell-style="headerCellStyle" :cell-style="cellClass">
          <el-table-column type="index" width="150" label="序号"> </el-table-column>
          <el-table-column label="ID" prop="roomId"></el-table-column>
          <el-table-column label="机房" prop="roomName"></el-table-column>
          <el-table-column label="机柜编号" prop="position"></el-table-column>
        </el-table>
        <template #footer>
          <el-button @click="dialogVisible=false">关闭</el-button>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import { getCurrentInstance, onMounted } from '@vue/runtime-core'
import TimeSelect from '@/components/room/TimeSelect.vue'
import rosePie from '@/components/Echarts/rosePie.vue'
import api from '@/api/room/frame'
export default {
  components: {
    'time-select': TimeSelect,
    rosePie
  },
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      activeName: 'first',
      listLoading: false,
      // 概括统计
      amount: {},
      roseData: [],
      roseChart: null,
      rosePie: null,
      // 按机房统计
      roomAmount: {},
      roomListData: [],
      // 按客户统计
      customListData: [],
      // 更多
      dialogVisible: false,
      positionList: [],
      title: '',
    })
    const handleClick = (tab, event) => {
      state.activeName = tab.props.name
    }
    // 玫瑰统计图
    // const drawRoseType = (data) => {
    //   if (
    //     state.rosePie == null ||
    //     state.rosePie == '' ||
    //     state.rosePie == undefined
    //   ) {
    //     state.rosePie = document.getElementById('roomRose')
    //     state.roseChart = proxy.echarts.init(state.rosePie, null, {
    //       width: 965,
    //       height: 490,
    //     })
    //   }
    //   var option = {
    //     legend: {
    //       top: 'bottom',
    //     },
    //     tooltip: {
    //       trigger: 'item',
    //       formatter: '{a} <br/>{b} : {c} ({d}%)',
    //     },
    //     series: [
    //       {
    //         type: 'pie',
    //         radius: [10, 150],
    //         center: ['30%', '40%'],
    //         roseType: 'area',
    //         itemStyle: {
    //           borderRadius: 0,
    //         },
    //         label: {
    //           show: true,
    //           formatter: '{c}',
    //         },
    //         data: data,
    //       },
    //     ],
    //   }
    //   option && state.roseChart.setOption(option)
    // }
    // 获取当前月份的概括统计数据
    const getGeneralStatistics = (timer) => {
      let data = api.findRoomReportEchartsData({ time: timer })
      state.amount = data.amount
      state.roseData = []
      for (let i = 0; i < data.roomStrList.length; i++) {
        state.roseData.push({
          value: data.roomFrameCountList[i],
          name: data.roomStrList[i],
        })
      }
      state.roseData.sort(function(a, b){
        return (b.value - a.value)
      })
      // drawRoseType(state.roseData)
    }
    const getGeneralDate = (val) => {
      const timer = val.getTime()
      getGeneralStatistics(timer)
    }
    // 获取按机房统计生成的机柜报表数据
    const getRoomReport = async (timer) => {
      state.listLoading = true
      const data = api.findRoomReportAboutFrame({ timer: timer })
      state.roomAmount = data.amount
      state.roomListData = data.list
      state.listLoading = false
    }
    const getRoomDate = async (val) => {
      const timer = val.getTime()
      await getRoomReport(timer)
    }
    // 获取按客户统计生成的机柜报表数据
    const getCustomReport = async (timer) => {
      state.listLoading = true
      const data = api.findCustomReportByCustom({ timer: timer })
      state.customListData = data
      state.listLoading = false
    }
    const getCustomDate = async (val) => {
      const timer = val.getTime()
      await getCustomReport(timer)
    }
    const moreInfo = (list) => {
      if (state.activeName == 'second') {
        state.title = '机柜下机房统计信息'
      } else if (state.activeName == 'third') {
        state.title = '客户下机柜信息'
      }
      state.positionList = list
      state.dialogVisible = true
    }
    onMounted(async () => {
      const time = new Date(
        `${state.yearSelect}-${state.monthSelect}`
      ).getTime()
      await getGeneralStatistics(time)
      await getRoomReport(time)
      await getCustomReport(time)
    })
    return {
      ...toRefs(state),
      handleClick,
      getGeneralDate,
      moreInfo,
      getRoomDate,
      getCustomDate,
    }
  },
}
</script>
<style scoped lang="scss">
.messageBox {
  margin: 21px 0;
  & div {
    margin-top: 12px;
  }
  & span {
    margin-right: 12px;
  }
}
::v-deep .el-table{
  border: 1px solid #DCDFE6;
}
::v-deep .el-dialog .el-button{
  margin-top: 21px;
}
</style>

