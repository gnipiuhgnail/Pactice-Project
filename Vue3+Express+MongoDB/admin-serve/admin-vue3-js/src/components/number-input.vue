<template>
  <el-input v-model="number" :placeholder="placeholder"></el-input>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  props: ["message", "placeholder"],
  setup(props, { emit }) {
    const state = reactive({
      number: props.message || "",
      placeholder: props.placeholder,
    });
    watch(
      () => state.number,
      function (curVal, oldVal) {
        if (!curVal) {
          state.number = "";
          return false;
        }
        console.log(oldVal);
        if (typeof curVal != String) curVal = curVal.toString();
        state.number = curVal.match(/\d/gi)
          ? curVal.match(/\d/gi).join("")
          : "";
        emit("number", state.number);
      }
    );
    return {
      ...toRefs(state),
    };
  },
};
</script>
