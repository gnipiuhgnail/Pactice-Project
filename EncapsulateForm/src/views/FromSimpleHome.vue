<template>
  <div>
    <FromSimple
      :formConfig="formConfig"
      :values="values"
      style="width: 300px"
      :rules="rules"
    >
      <template v-slot:formfront>个人信息表单</template>
    </FromSimple>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import FromSimple from "../components/fromsimplebuild/FromSimple.vue";
import { isBtnOneToHundred } from "../utils/validate";
export default {
  components: { FromSimple },
  // 是把同一个组件的配置放在一个文件夹，还是不同组件的同一种配置放在一个文件夹
  setup() {
    const formConfig = reactive({
      labelWidth: "80px",
      formItemList: [
        {
          type: "input",
          label: "名称",
          prop: "name",
          disabled: false,
          placeholder: "请输入名称",
        },
        {
          type: "input",
          label: "年龄",
          prop: "age",
          disabled: false,
          placeholder: "请输入年龄",
        },
        {
          type: "radio",
          label: "性别",
          prop: "sex",
          disabled: false,
        },
        {
          type: "select",
          label: "兴趣爱好",
          prop: "interest",
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
        {
          type: "datepicker",
          label: "时间选择",
          prop: "date",
          disabled: false,
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
    const values = reactive({
      name: "",
      age: "",
      sex: "woman",
    });
    const rules = reactive({
      name: [
        { required: true, message: "请输入名称", trigger: "blur" },
        { min: 0, max: 5, message: "长度为3到5个字符哦", trigger: "blur" },
      ],
      age: [{ validator: isBtnOneToHundred, trigger: "blur" }],
    });
    return {
      formConfig,
      values,
      rules,
    };
  },
};
</script>
