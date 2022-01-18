<template>
  <div class="lastCardDiv">
    更新授权文件:
    <div style="display: inline-block">
      <input
        type="file"
        id="fileElem"
        multiple
        style="display: none"
        @change="handleFiles($event)"
      />
      <el-input id="fileSelect" v-model="files" placeholder="未选择文件">
      </el-input>

      <el-button type="primary" size="small" @click="update">更新</el-button>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "@vue/reactivity";
import request from "@/utils/request";
import { nextTick, onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const state = reactive({
      fileSelect: "",
      fileElem: "",
      files: "",
      fileList: {},
    });
    const handleFiles = (e) => {
      console.log(e);
      state.fileList = new FormData();
      for (var i = 0; i < e.target.files.length; i++) {
        state.files = e.target.files[i].name;
        state.fileList.append(`${e.target.files[i].name}`, e.target.files[i]);
      }
    };
    const submitUpload = async () => {};
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
      const res = await request.post("/upload", state.fileList);
      console.log(res);
    };
    return {
      ...toRefs(state),
      handleFiles,
      submitUpload,
      update,
    };
  },
};
</script>
