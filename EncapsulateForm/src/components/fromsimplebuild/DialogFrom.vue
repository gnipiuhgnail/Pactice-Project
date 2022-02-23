<template>
  <el-dialog
    :title="dialogConfig.title"
    :model-value="visible"
    :width="dialogConfig.width"
    :top="dialogConfig.top"
  >
    <el-form
      :model="currentValue"
      ref="fromRef"
      :label-width="formConfig.labelWidth"
      :rules="rules"
      label-position="right"
    >
      <slot name="formfront"></slot>
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
          class="block"
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
        <div v-if="item.type == 'radio'" class="radioStyle">
          <el-radio
            v-model="currentValue[item.prop]"
            label="man"
            :disabled="item.disabled"
            >男性</el-radio
          >
          <el-radio
            v-model="currentValue[item.prop]"
            label="woman"
            :disabled="item.disabled"
            >女性</el-radio
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
    </el-form>
    <template #footer>
      <el-button-group>
        <el-button
          v-for="(item, index) in dialogConfig.operate"
          :key="index"
          :type="item.type"
          :icon="item.icon"
          @click="handleClick(fromRef)"
          style="margin-right: 10px"
          >{{ item.text }}</el-button
        >
        <el-button @click="handleClose(fromRef)">取消</el-button>
      </el-button-group>
    </template>
  </el-dialog>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
export default {
  inheritAttrs: false,
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
    visible: {
      type: Boolean,
    },
    dialogConfig: {
      type: Object,
    },
    toDist: {
      type: [Object, Number],
    },
  },
  setup(props, context) {
    const { values } = toRefs(props);
    const currentValue = values;
    const fromRef = reactive({});
    console.log(props.visible + "⭐");
    const handleClose = function (fromRef) {
      context.emit("update:visible", false);
      fromRef.resetFields();
    };
    const handleClick = function (fromRef) {
      context.emit("update:visible", false);
      console.log(fromRef);
      // 拿到地址，将数据提交到后端
      // ❓ ❓ ❓ 数据保存方式
      console.log(props.toDist);
    };
    return {
      currentValue,
      fromRef,
      handleClose,
      handleClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.radioStyle {
  text-align: left;
}
</style>
