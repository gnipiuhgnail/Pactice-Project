// 构造多个饼图
<script>
import { computed, reactive, toRef, toRefs } from "@vue/reactivity";
import api from "../../api/css/echarts";
import colorList from "../../assets/color";
import { nextTick, onBeforeMount, onMounted } from "@vue/runtime-core";
import echarts from "../../echarts/index";
export default {
  setup() {
    const state = reactive({
      inPortList: [],
      outPortList: [],
      colorList: colorList,
      option: {}
    });
    const getList = () => {
      api.getEchartList().then((res) => {
        console.log(res.data.data);
        state.inPortList = res.data.data.inPortList;
        state.outPortList = res.data.data.outPortList;
        state.option.series = getSeries()
        pieChart();
      });
    };
    const computedoutPortList = computed(() => {
      var list = [];
      const row = Math.round(state.outPortList.length / 12);
      for (var i = 0; i < row; i++) {
        const arr = state.outPortList.filter((item, index, arr) => {
          if (index < (i + 1) * 12 && index >= i * 12) return item;
        });
        list.push(arr);
      }
      return list;
    });
    // 创建一个饼图
    function Pie(center, data) {
      this.type = "pie";
      this.radius = "100px";
      this.label = {
        position: "inside",
      };
      this.center = center; //['15%','50%']
      this.data = data; // [{ value: 1048, name: 1048, itemStyle: {color: '#ccc'} },]
    }
    // 构造饼图系列
    const getSeries = () => {
      const list = [];
      for(var i = 0; i<state.inPortList.length;i++){
          const center = [`${(i%5+1) * 250}px`, `${Math.floor(i/5) * 250+150}px`];
          // 每一个的inport数据的重构: data:[{ value: 1048, name: 1048, itemStyle: {color: '#ccc'} },]
          var data = []
          state.inPortList[i].msg.map((item,index)=>{
            data.push({
              value: item.part,
              name: item.part,
              itemStyle: {color:state.colorList[item.color]}
            });
          })
          // 新建饼图数据
          const pie = new Pie(center, data);
          list.push(pie);
        }
      return list;
    };
    // 抽取成一个工具函数，找出不同的地方，通过传参传进去
    const pieChart = () => {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      state.option = {
        tooltip: {
          trigger: "item",
        },
        series:state.option.series
      };
      state.option && myChart.setOption(state.option);
    };
    onMounted(() => {
      getList();
    });
    return {
      ...toRefs(state),
      computedoutPortList,
    };
  },
};
</script>
<template>
<div class="containerf">
  <div v-for="item in 28" >
    <svg-icon
      icon-class="interface"
      :style="`color:${colorList[item-3]};border:2px solid ${
        colorList[item-3]
      }`"
      class="interface"
    />
  </div></div>
  <!-- 第一一个需要考虑：使用canvas渲染还是svg渲染 -->
  <div>
    Echarts:通过 echarts.init 方法初始化一个 echarts 实例,通过 setOption
    方法生成图
    <div
      id="main"
      class="echarts-box"
    ></div>
    <div class="containerf">
      <div class="title">el-row实现</div>
      <div class="rowBox">
        <el-row :gutter="24" v-for="row in computedoutPortList" :key="row">
          <el-col :span="2" v-for="col in row" :key="col">
            <div class="colBox">
              <svg-icon
                icon-class="interface"
                :style="`color:${colorList[col.color]};border:2px solid ${
                  colorList[col.color]
                }`"
                class="interface"
              />
              <span>{{ col.outPortName }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.echarts-box {
  width: 100vw;
  height: 900px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.interface {
  width: 40px;
  height: 40px;
  vertical-align: top;
}
.containerf {
  padding: 16px;
  border: 1px solid #303030;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
  .title {
    width: 15px;
    padding: 10px;
    writing-mode: tb-rl;
  }
  .rowBox {
    width: 100%;
    border: 1px solid #303030;
    padding: 0 25px;
    .colBox {
      padding: 16px 0;
      text-align: center;
      span {
        display: block;
      }
    }
  }
}
</style>
