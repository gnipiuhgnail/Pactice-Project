export const tableConfigure = {
  base: {
    border: true,
    tableRowClassName: function ({ rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "";
      } else {
        return "secondrow";
      }
    },
    // handleSelectionChange: function () {
    //   console.log("⭐变身");
    // },
  },
  columConfig: [
    {
      label: "日期",
      width: "150",
      key: "date",
      // icon: "el-icon-time",
    },
    {
      label: "姓名",
      width: "100",
      key: "name",
    },
    {
      label: "地址",
      width: "250",
      key: "address",
    },
  ],
  operation: [
    {
      text: "编辑",
      type: "text",
      handleClick: function (index, row) {
        console.log(index, row);
      },
    },
    {
      text: "删除",
      type: "text",
      handleClick: function (index, row) {
        console.log(index, row);
      },
    },
  ],
};
export const formConfingure = {
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
};
export const fromDateConfigure = {
  name: "",
  age: "",
  sex: "woman",
};
export const dialogConfigure = {
  title: "个人信息",
  visible: false,
  width: "40%",
  top: "200px",
  operate: [
    {
      type: "primary",
      icon: "",
      text: "提交",
    },
  ],
};
