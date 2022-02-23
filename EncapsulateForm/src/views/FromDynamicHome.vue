<template>
  <FromDynamic :formConfig="formConfig" :fromData="fromData"></FromDynamic>
</template>
<script>
import { reactive } from "@vue/reactivity";
import FromDynamic from "../components/fromdynamicbuild/FromDynamic.vue";
export default {
  components: { FromDynamic },
  setup() {
    const fromData = reactive({
      name: "",
      age: "",
      sex: "",
      interest: "",
    });
    const formConfig = reactive({
      inline: false,
      labelWidth: "120px",
      size: "mini",
      fieldsConfig: [
        {
          prop: "name",
          label: "名称",
          fieldType: "InputItem",
          placeholder: "请输入名称",
        },
        {
          prop: "age",
          label: "年龄",
          fieldType: "InputItem",
          placeholder: "请输入年龄",
        },
        {
          prop: "interest",
          label: "兴趣爱好",
          fieldType: "SelectItem",
          placeholder: "请选择",
          options: [
            {
              value: "1",
              label: "跑步",
            },
            {
              value: "2",
              label: "跳水",
            },
            {
              value: "3",
              label: "跳绳",
            },
          ],
        },
      ],
      operate: [
        {
          type: "warning",
          icon: "",
          text: "重置",
          handleClick: function (fromRef) {
            fromRef.resetFields();
          },
        },
        {
          type: "primary",
          icon: "",
          text: "提交",
          handleClick: function (fromRef) {
            console.log(fromRef);
          },
        },
      ],
    });

    return {
      fromData,
      formConfig,
    };
  },
};
</script>
