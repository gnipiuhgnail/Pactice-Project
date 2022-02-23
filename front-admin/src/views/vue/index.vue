
<template>
  <!-- 目录：增删改 -->
  <el-aside width="450px">
    <div class="custom-tree-container">
      <h4>目录</h4>
      <div class="block" @click="data.isEdit = false">
        <div style="text-align: right">
          <el-button @click="appendParentNode" type="text"
            >添加一级目录</el-button
          >
        </div>
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          draggable
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <el-input
                v-if="data.isEdit == true"
                v-model="data.label"
                type="text"
                maxlength="15"
                @blur="data.isEdit = false"
              ></el-input>
              <span v-else @click="$router.push(data.router)">{{
                data.label
              }}</span>
              <span>
                <el-button type="text" @click="changInputStatus($event, data)">
                  编辑
                </el-button>
                <el-button type="text" @click="append(data)">
                  添加子目录
                </el-button>
                <el-button
                  type="text"
                  @click="remove(node, data)"
                  style="color: #f56c6c"
                >
                  删除
                </el-button>
              </span>
            </span>
          </template>
        </el-tree>
      </div>
    </div>
  </el-aside>
  <el-main><router-view></router-view></el-main>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { h, nextTick, onMounted } from "@vue/runtime-core";
let id = 1000;
export default {
  setup() {
    const state = reactive({
      data: [
        {
          id: 1,
          label: "一级 1",
          isEdit: false,
          router: "/watch",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              isEdit: false,
              router: "/",
              children: [
                {
                  id: 9,
                  label: "watch",
                  isEdit: false,
                  router: "/watch",
                },
                {
                  id: 10,
                  label: "生命周期",
                  isEdit: false,
                  router: "/lifecycle",
                },
                {
                  id: 11,
                  label: "组件测试",
                  isEdit: false,
                  router: "/componenttest",
                },
                {
                  id: 12,
                  label: "provide页面",
                  isEdit: false,
                  router: "/provide",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    });
    const appendParentNode = () => {
      state.data.push({
        id: state.data.length + 1,
        label: `一级 ${state.data.length + 1}`,
        isEdit: false,
        router: "",
        children: [],
      });
      state.data = [...state.data];
    };
    const append = (data) => {
      const newChild = {
        id: id++,
        label: "新目录",
        children: [],
        isEdit: false,
        router: "",
      };
      if (!data.children) {
        data.children = [];
      }
      data.children.push(newChild);
      state.data = [...state.data];
    };
    const remove = (node, data) => {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
      state.data = [...state.data];
    };
    const changInputStatus = async (e, data) => {
      data.isEdit = true;
      await nextTick(function () {
        const curEle = e.currentTarget;
        const input =
          curEle.parentElement.parentElement.getElementsByClassName(
            "el-input"
          )[0];
        input.querySelector("input").focus(); // 获取当前的输入框，并获取焦点
      });
    };
    return {
      ...toRefs(state),
      appendParentNode,
      append,
      remove,
      changInputStatus,
    };
  },
};
</script>

<style lang="scss" scope>
.custom-tree-container {
  width: 450px;
  h4 {
    text-align: center;
    margin: 0;
  }
}
.custom-tree-node {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-input,
  .el-input__inner {
    height: 24px;
    line-height: 24px;
  }
  .el-button {
    height: 24px;
  }
}
</style>
