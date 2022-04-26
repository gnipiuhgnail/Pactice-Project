// 玫瑰图：传入id和数据
<template>
  <div>
    <div :id="boxName"></div>
  </div>
</template>
<script>
import { reactive, toRefs } from '@vue/reactivity'
import {
  getCurrentInstance,
  nextTick,
  onMounted,
  watch,
} from '@vue/runtime-core'
export default {
  props: {
    boxName: String,
    data: Object,
    seriesName: String,
    width: String
  },
  setup(props) {
    const state = reactive({
      boxName: props.boxName,
      chartDom: null,
      myChart: null,
    })
    const { proxy } = getCurrentInstance()
    const setEchart = () => {
      nextTick(() => {
        if (
          state.chartDom == null ||
          state.chartDom == '' ||
          state.chartDom == undefined
        ) {
          state.chartDom = document.getElementById(state.boxName)
          state.myChart = proxy.echarts.init(state.chartDom, null, {
            width: props.width,
            height: props.width>='500'?470:250,
          })
        }
        var option = {
          legend: {
            left: 'left',
            top: 'bottom',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          series: [
            {
              name: props.seriesName,
              type: 'pie',
              radius: [10, props.width*0.17],
              center: ['50%', '40%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 0,
              },
              label: {
                show: true,
                formatter: '{c}',
              },
              data: props.data,
            },
          ],
        }
        option && state.myChart.setOption(option)
      })
    }
    watch(
      () => props.data,
      (newValue, prevValue) => {
        setEchart()
      }
    )
    onMounted(async () => {
      setEchart()
    })
    return {
      ...toRefs(state),
      setEchart,
    }
  },
}
</script>
<style scoped lang="scss">
</style>
