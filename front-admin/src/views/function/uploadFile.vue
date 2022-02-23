<template>
  <div class="first-box">
    <input
      type="file"
      id="fileElem"
      multiple
      style="display: none"
      @change="handleFiles($event)"
    />
    <el-input v-model="files" id="fileSelect" placeholder="未选择文件">
    </el-input>
    <el-button type="primary" size="middle" @click="update">更新</el-button>
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import { nextTick, onMounted, watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const state = reactive({
      fileSelect: "",
      fileElem: "",
      files: [],
      fileList: [],
    });
    const handleFiles = (e) => {
      state.fileList = new FormData();
      for (var i = 0; i < e.target.files.length; i++) {
        state.files.push(e.target.files[i].name);
        const name = e.target.files[i].name.split(".")[0];
        state.fileList.append(`${name}`, e.target.files[i]);
      }
    };
    onMounted(() => {
      state.fileSelect = document.getElementById("fileSelect");
      state.fileElem = document.getElementById("fileElem");
      nextTick(() => {
        state.fileSelect.addEventListener(
          "click",
          function (e) {
            console.log("e", e);
            if (state.fileElem) {
              console.log(state.fileElem);
              state.fileElem.click();
            }
            e.preventDefault();
          },
          false
        );
      });
    });

    const update = async () => {
      console.log(state.fileList);
      // await api.findDispatchService(state.fileList);
    };
    return {
      ...toRefs(state),
      handleFiles,
      update,
    };
  },
};
</script>

<style lang="scss" scoped>
  .first-box{
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>