// 饼图
<template>
  <div>
    <div class="echartPie" :id="boxName" style="width: 400px;height:400px;margin:0 10px;"></div>
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
    name: String,
    data: Object,
  },
  setup(props) {
    const state = reactive({
      boxName: props.boxName,
      typeName: props.name.slice(-3, -1),
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
          state.chartDom = document.getElementById(props.boxName)
          state.myChart = proxy.echarts.init(state.chartDom, null, {
            width: 400,
            height: 728,
          })
        }
        var option = {
          tooltip: {
            trigger: 'item',
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: {
                show: true,
                readOnly: false,
                lang: ['数据视图', '关闭', '刷新'],
                button: false,
                optionToContent: function (opt) {
                  var data = opt.series[0].data
                  var table = `<table class="echartTable"><tbody><tr>
                  <td>${state.typeName}状态</td>
                  <td>数量</td>
                  <td>${state.typeName}率</td>
                  </tr>`
                  for (var i = 0, l = data.length; i < l; i++) {
                    table +=
                      '<tr>' +
                      `<td>${data[i].name}</td>` +
                      `<td>${data[i].value}</td>` +
                      `<td>${data[i].value}%</td>` +
                      '</tr>'
                  }
                  table += '</tbody></table>'
                  return table
                },
              },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          legend: {
            orient: 'horizontal',
            left: 'left',
          },
          series: [
            {
              name: props.name,
              type: 'pie',
              radius: '50%',
              center: ['51%', '30%'],
              data: [
                { value: props.data.useTotal, name: `已${state.typeName}` },
                {
                  value: props.data.total - props.data.useTotal,
                  name: `未${state.typeName}`,
                },
              ],
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
// echart表格
::v-deep .echartPie {
  width: 400px;
  h4 {
    margin: 0 0 20px !important;
    font-weight: 500;
  }
  & :last-child {
    & :last-child {
      bottom: unset !important;
      top: 6px !important;
    }
  }
}
::v-deep .echartTable {
  width: 96%;
  text-align: center;
  border-spacing: 0px;
  border: 1px solid #dcdfe6;
  border-bottom: none;
  color: #303133;
  & td {
    border-bottom: 1px solid #dcdfe6;
    padding: 8px 0;
  }
}
</style>
