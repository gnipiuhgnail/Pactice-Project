// 构建动态表单
<template>
  <el-form
    ref="fromRef"
    :model="currentValue"
    :label-width="formConfig.labelWidth"
  >
    <el-row
      :span="field.cols"
      v-for="(field, index) in formConfig.fieldsConfig"
      :key="index"
    >
      <el-col :span="24">
        <component
          :key="index"
          :is="field.fieldType"
          :label="field.label"
          :placeholder="field.placeholder"
          v-model="currentValue[field.prop]"
          :options="field.options"
          :ref="field.prop"
          :prop="field.prop"
        ></component>
      </el-col>
    </el-row>
    <slot name="buttons">
      <el-form-item class="btn">
        <el-button
          v-for="(item, index) in formConfig.operate"
          :key="index"
          :type="item.type"
          :icon="item.icon"
          @click="item.handleClick(fromRef)"
          >{{ item.text }}</el-button
        >
      </el-form-item>
      <!-- <el-form-item>
      <el-button-group>
        <el-button v-for="(item, index) in formConfig.operate" :key="index" :type="item.type" :icon="item.icon" @click="item.handleClick(fromRef)" style="margin-right:10px">{{ item.text }}</el-button>
      </el-button-group>
    </el-form-item> -->
    </slot>
  </el-form>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import InputItem from "./fromitems/InputItem.vue";
import SelectItem from "./fromitems/SelectItem.vue";
export default {
  name: "FromDynamic",
  components: { InputItem, SelectItem },
  props: ["formConfig", "fromData"],
  setup(props) {
    const { fromData } = toRefs(props);
    const currentValue = fromData;
    const fromRef = reactive({});
    return {
      currentValue,
      fromRef,
    };
  },
};
</script>
<style scoped>
.btn {
  display: flex;
  justify-content: flex-end;
}
.el-button {
  display: block;
  width: 80px;
  float: right;
  margin-left: 15px;
}
</style>
