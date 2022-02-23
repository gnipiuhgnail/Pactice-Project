<template>
  <div>
    <!--⚠️注意这里有个大坑，一定要用 model-value，不能用v-model -->
    <el-dialog
      title="我是一个弹框"
      :model-value="visible"
      :before-close="handleClose"
    >
      <span>{{ name }}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="handleClose">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "mediaDialog",
  props: {
    name: String,
    visible: Boolean,
  },

  setup(props, context) {
    // 使用 context.emit('update:visible', false)，改变父组件visible的值
    const handleClose = function () {
      context.emit("update:visible", false);
    };
    return { handleClose };
  },
};
</script>
