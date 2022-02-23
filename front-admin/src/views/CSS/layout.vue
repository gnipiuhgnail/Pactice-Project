<script>
// import axios from "axios"
import api from "../../api/css/layout";
import colorList from "../../assets/color";
import { computed, onMounted, reactive, toRefs } from "@vue/runtime-core";
export default {
  setup() {
    const state = reactive({
      policyList: [],
      allPortList: [],
      colorList: colorList,
    });
    const getlist = () => {
      // axios.get('/table').then((res)=>{
      //   state.data=res.data.data
      // })
      state.data = api.getTable().then((res) => {
        state.policyList = res.data.data.policyList;
        state.allPortList = res.data.data.allPortList;
      });
    };
    const computedPolicyList = computed(() => {
      var list = [];
      const row = Math.round(state.policyList.length / 12);
      for (var i = 0; i < row; i++) {
        const arr = state.policyList.filter((item, index, arr) => {
          if (index < (i + 1) * 12 && index >= i * 12) return item;
        });
        list.push(arr);
      }
      return list;
    });
    onMounted(() => {
      getlist();
    });
    return {
      ...toRefs(state),
      computedPolicyList,
    };
  },
};
</script>
<template>
  <!-- <svg-icon icon-class="interface" style="color:#000;border:1px solid #000" class="interface"/> -->
  不建议使用"table"
  <div class="container">
    <div class="title">表格实现</div>
    <table>
      <tr class="innerBox">
        <td v-for="item in policyList" :key="item" class="box">
          <svg-icon
            icon-class="interface"
            :style="`color:${colorList[item.color]};border:2px solid ${
              colorList[item.color]
            }`"
            class="interface"
          />
          <span>{{ item.policyName }}</span>
        </td>
      </tr>
    </table>
  </div>
  <div class="container">
    <div class="title">列表实现</div>
    <ul class="innerBox">
      <li v-for="item in policyList" :key="item" class="box">
        <svg-icon
          icon-class="interface"
          :style="`color:${colorList[item.color]};border:2px solid ${
            colorList[item.color]
          }`"
          class="interface"
        />
        <span>{{ item.policyName }}</span>
      </li>
    </ul>
  </div>
  <div class="container">
    <div class="title">div实现</div>
    <div class="innerBox">
      <div v-for="item in policyList" :key="item" class="box">
        <svg-icon
          icon-class="interface"
          :style="`color:${colorList[item.color]};border:2px solid ${
            colorList[item.color]
          }`"
          class="interface"
        />
        <span>{{ item.policyName }}</span>
      </div>
    </div>
  </div>

  <!-- 试一下使用computed，将数据分成多层，每层12个，通过el-cow -->
  <div class="containerf">
    <div class="title">el-row实现</div>
    <div class="rowBox">
      <el-row :gutter="24" v-for="row in computedPolicyList" :key="row">
        <el-col :span="2" v-for="col in row" :key="col">
          <div class="colBox">
            <svg-icon
              icon-class="interface"
              :style="`color:${colorList[col.color]};border:2px solid ${
                colorList[col.color]
              }`"
              class="interface"
            />
            <span>{{ col.policyName }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.interface {
  width: 40px;
  height: 40px;
  vertical-align: top;
}
.container,
table,
ul,
div.innerBox,
.containerf {
  padding: 16px;
  border: 1px solid #303030;
}
ul {
  list-style-type: none;
  margin: 0;
}
// 第1-3个框
.container {
  min-width: 1440px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 24px;
  .title {
    width: 20px;
    padding: 5px;
  }
  .innerBox {
    width: 100%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    .box {
      width: 88px;
      height: 60px;
      text-align: center;
      span {
        display: block;
      }
    }
  }
}
// 第4个框
.containerf {
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