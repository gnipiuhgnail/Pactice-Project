<template>
  <el-form
    :model="currentValue"
    ref="fromRef"
    :label-width="formConfig.labelWidth"
    :rules="rules"
    label-position="right"
    size="mini"
  >
    <slot name="formfront"></slot>
    <!-- 把可能的表单操作放到el-form-item里，通过for循环整个表单，v-if判断类型 -->
    <el-form-item
      v-for="(item, index) in formConfig.formItemList"
      :key="index"
      :label="item.label"
      :prop="item.prop"
    >
      <!-- 输入框 -->
      <el-input
        v-if="item.type == 'input'"
        v-model="currentValue[item.prop]"
        :disabled="item.disabled"
        :placeholder="item.placeholder"
      ></el-input>
      <!-- 下拉框 -->
      <el-select
        v-if="item.type == 'select'"
        v-model="currentValue[item.prop]"
        :disabled="item.disabled"
        placeholder="请选择"
      >
        <el-option
          v-for="oItem in item.options"
          :key="oItem.value"
          :label="oItem.label"
          :value="oItem.value"
        >
        </el-option>
      </el-select>
      <!-- 单选按钮 -->
      <div v-if="item.type == 'radio'">
        <el-radio
          v-model="currentValue[item.prop]"
          label="man"
          :disabled="item.disabled"
          >🚹</el-radio
        >
        <el-radio
          v-model="currentValue[item.prop]"
          label="woman"
          :disabled="item.disabled"
          >🚺</el-radio
        >
      </div>
      <!-- 日期时间选择器 -->
      <el-date-picker
        v-if="item.type == 'datepicker'"
        :disabled="item.disabled"
        v-model="currentValue[item.prop]"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </el-form-item>
    <slot name="formafter"></slot>

    <slot name="opreatefront"></slot>
    <el-form-item>
      <el-button-group>
        <el-button
          v-for="(item, index) in formConfig.operate"
          :key="index"
          :type="item.type"
          :icon="item.icon"
          @click="item.handleClick(fromRef)"
          style="margin-right: 10px"
          >{{ item.text }}</el-button
        >
      </el-button-group>
    </el-form-item>
    <slot name="opreateafter"></slot>
  </el-form>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  props: {
    formConfig: {
      type: Object,
      require: true,
    },
    values: {
      type: Object,
      require: true,
    },
    rules: {
      type: Object,
      require: false,
    },
  },
  setup(props) {
    // const currentValue = props.value;
    // Getting a value from the `props` in root scope of `setup()` will cause the value to lose reactivity

    // 需要监听事件，将值传回给父元素
    // ⭐reactivity.esm-bundler.js:543 Set operation on key "values" failed: target is readonly.
    const { values } = toRefs(props);
    const currentValue = values;
    const fromRef = reactive({});
    return {
      currentValue,
      fromRef,
    };
  },
};
</script>
<style scoped>
.el-form-item:first-child {
  margin-top: 10px;
}
.el-form-item:last-child {
  margin-bottom: 10px;
}
</style>
