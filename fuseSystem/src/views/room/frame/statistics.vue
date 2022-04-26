<template>
  <div class="appContainer">
    <div class="pageTitle">
      <div @click="$router.back()" class="goback">
        <svg-icon icon-class="goback" style="margin-right: 6px"></svg-icon>返回
      </div>
      <div class="sign" />
      <div class="listGroup">机房统计图</div>
    </div>
    <!-- 按机房统计机柜总数和机柜使用总数 -->
    <div id="roomCount" style="width:1078px;"></div>
    <!-- 按地区统计机柜总数和机柜使用总数 -->
    <div id="cityCount" style="width:1078px;"></div>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive } from '@vue/runtime-core'
import api from '@/api/room/frame'
export default {
  setup() {
    const state = reactive({
      roomBar: null,
      cityBar: null,
    })
    const { proxy } = getCurrentInstance()
    const draw = (barName, boxName, title, yData, seriesData) => {
      if (barName == null || barName == '' || barName == undefined) {
        barName = document.getElementById(boxName)
        var myChart = proxy.echarts.init(barName, null, {
          width: 1278,
          height: seriesData.frameCount.length*70 +80,
        })
      }
      var option = {
        title: {
          text: title,
          left: 25,
          textStyle: {
            fontStyle: 'normal',
             fontWeight: 'normal'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        grid: {
          left: '4%',
          right: '4%',
          bottom: '4%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          data: yData,
        },
        series: [
          {
            name: '机柜总量',
            type: 'bar',
            label: {
              show: true,
              position: 'inside',
            },
            data: seriesData.frameCount,
          },
          {
            name: '使用量',
            type: 'bar',
            label: {
              show: true,
              position: 'inside',
            },
            data: seriesData.frameUseCount,
          },
        ],
      }
      option && myChart.setOption(option)
    }

    const getDate = async () => {
      let rooms = await api.FrameCountDataForRoom()
      let roomsName = []
      let roomsDate = {
        frameCount: [],
        frameUseCount: [],
      }
      rooms.forEach((item) => {
        roomsName.push(`${item.cityName}${item.house}${item.floor}`)
        roomsDate.frameCount.push(item.frameCount)
        roomsDate.frameUseCount.push(item.frameUseCount)
      })
      let cities = await api.FrameCountDataForCity()
      let citiesName = []
      let citiesDate = {
        frameCount: [],
        frameUseCount: [],
      }
      cities.forEach((item) => {
        citiesName.push(item.cityName)
        citiesDate.frameCount.push(item.frameCount)
        citiesDate.frameUseCount.push(item.frameUseCount)
      })
      draw(state.roomBar, 'roomCount', '按机房统计分布', roomsName, roomsDate)
      draw(state.cityBar, 'cityCount', '按地区统计分布', citiesName, citiesDate)
    }
    onMounted(async () => {
      await getDate()
    })
  },
}
</script>
