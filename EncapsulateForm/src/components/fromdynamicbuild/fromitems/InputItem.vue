<template>
  <el-form-item :label="label" :prop="prop">
    <!-- 应该绑定的是表单的某一个值 -->
    <!-- <el-input :value="keyName" @input="$emit('update:keyName',$event.target.value)"></el-input> -->
    <el-input
      v-model="changeVal"
      @input="$emit('update:modelValue', changeVal)"
      :placeholder="placeholder"
    ></el-input>
  </el-form-item>
</template>
<script>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
export default {
  inheritAttrs: false,
  props: {
    modelValue: [String, Number],
    label: [String],
    prop: [String],
    placeholder: [String],
  },
  setup(props) {
    let changeVal = ref("");
    watchEffect(() => {
      changeVal.value = props.modelValue;
    });
    return {
      changeVal,
    };
  },
};
</script>
