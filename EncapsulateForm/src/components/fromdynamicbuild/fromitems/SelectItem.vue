<template>
  <el-form-item :label="label" :prop="prop">
    <el-select
      v-model="changeVal"
      :placeholder="placeholder"
      @change="$emit('update:modelValue', changeVal)"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-form-item>
</template>
<script>
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Object,
    },
    label: String,
    prop: String,
    placeholder: String,
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

<style scoped>
.el-select {
  display: block;
}
</style>
