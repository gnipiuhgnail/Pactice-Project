import request from '@/utils/request'
const api = {}
// 04-021 查询所有城市
api.findCity = (data) => {
  // return request({
  //   url: '/city/findCity',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [{
      "cityId": 1,
      "cityName": "江门"
    },
    {
      "cityId": 2,
      "cityName": "惠州"
    },
    {
      "cityId": 3,
      "cityName": "鹤山"
    }
    ],
    "otherInfo": null,
    "total": 3
  }
}
// 04-022 添加/修改城市
api.saveCity = (data) => {
  // return request({
  //   url: '/city/saveCity',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功"
  }
}
// 04-023 删除城市
api.delCity = (data) => {
  // return request({
  //   url: '/city/delCity',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功"
  }
}
// 04-024 查询单个城市信息
api.getCity = (data) => {
  // return request({
  //   url: '/city/getCity',
  //   method: 'post',
  //   data
  // })
  return {
    "cityName": "测试3",
    "cityId": "7"
  }
}
// 04-025 添加/编辑一个机房具体地址
api.saveComproom = (data) => {
  // return request({
  //   url: '/comproom/saveComproom',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功"
  }
}
// 04-026 查询一个机房地址明细
api.getComproom = (data) => {
  // return request({
  //   url: '/comproom/getComproom',
  //   method: 'post',
  //   data
  // })
  return {
    "mark": "JM-LT-3F",
    "roomId": 1,
    "cityName": "江门",
    "filePath": "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
    "floor": "3",
    "house": "联通",
    "cityId": 6,
    "state": 1,
    customShowType: 2,
  }
}
// 04-027 查询所有机房地址明细
api.findComproom = (data) => {
  // return request({
  //   url: '/comproom/findComproom',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [{
      "mark": "JM-LT-3F",
      "roomId": 1,
      "cityName": "江门",
      "filePath": "upload/91ecf827-899b-46bc-9f65-d1043b3b3263.png",
      "floor": "3",
      "house": "联通",
      "cityId": 6,
      "state": 1
    },
    {
      "mark": "ZS-LT-3F",
      "roomId": 1,
      "cityName": "中山",
      "filePath": "upload/91ecf827-899b-46bc-9f65-d1043b3b3263.png",
      "floor": "3",
      "house": "联通",
      "cityId": 6,
      "state": 1
    }
    ],
    "otherInfo": null,
    "total": 2
  }
}
// 04-028 删除一个机房具体地址
api.comproomDelOne = (data) => {
  // return request({
  //   url: '/comproom/comproomDelOne',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功"
  }
}
// 04-29 查询机房渲染图
api.findOneRenderPlanPicture = (data) => {
  // return request({
  //   url: '/comproom/findOneRenderPlanPicture',
  //   method: 'post',
  //   data
  // })
  return [
    [{},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
    ],
    [{},
    {
      "position": "未编号"
    },
    {},
    {},
    {},
    {
      "position": "12-01",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 315,
      "status": 1,
      "deviceCount": 14
    },
    {},
    {
      "position": "10-01",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 313,
      "status": 1,
      "deviceCount": 14
    },
    {}
    ],
    [{},
    {
      "position": "未编号"
    },
    {},
    {
      "position": "13-02",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 211,
      "status": 1,
      "deviceCount": 9
    },
    {},
    {
      "position": "12-02",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 208,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "10-02",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 201,
      "status": 1,
      "deviceCount": 12
    },
    {}
    ],
    [{},
    {
      "position": "未编号"
    },
    {},
    {
      "position": "13-03",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 312,
      "status": 1,
      "deviceCount": 12
    },
    {},
    {
      "position": "12-03",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 209,
      "status": 1,
      "deviceCount": 14
    },
    {},
    {
      "position": "10-03",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 202,
      "status": 1,
      "deviceCount": 10
    },
    {}
    ],
    [{},
    {
      "position": "未编号"
    },
    {},
    {
      "position": "13-04",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 213,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "12-04",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 316,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "10-04",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 203,
      "status": 1,
      "deviceCount": 10
    },
    {}
    ],
    [{},
    {},
    {},
    {
      "position": "13-05",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 214,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "12-05",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 317,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "10-05",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 204,
      "status": 1,
      "deviceCount": 9
    },
    {}
    ],
    [{},
    {},
    {},
    {
      "position": "13-06",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 215,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "12-06",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 318,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "10-06",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 314,
      "status": 1,
      "deviceCount": 11
    },
    {}
    ],
    [{},
    {},
    {},
    {
      "position": "13-07",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 216,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "12-07"
    },
    {},
    {
      "position": "10-07",
      "useCustomCount": 1,
      "useCustom": "WS",
      "customCount": 1,
      "custom": "WS",
      "electronicType": "直流",
      "frameid": 205,
      "status": 1,
      "deviceCount": 8
    },
    {}
    ],
    [{},
    {},
    {},
    {
      "position": "13-08",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 217,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "12-08",
      "useCustomCount": 2,
      "useCustom": "恒睿科技 <br> 恒睿开发部",
      "customCount": 3,
      "custom": "恒睿科技 <br> 傲盾 <br> 蓝讯",
      "electronicType": "直流",
      "frameid": 210,
      "status": 1,
      "deviceCount": 17
    },
    {},
    {
      "position": "10-08",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 206,
      "status": 2,
      "deviceCount": 0
    },
    {}
    ],
    [{},
    {},
    {},
    {
      "position": "13-09",
      "useCustomCount": 0,
      "useCustom": "",
      "customCount": 0,
      "custom": "",
      "electronicType": "直流",
      "frameid": 319,
      "status": 2,
      "deviceCount": 0
    },
    {},
    {
      "position": "10-10 ODF"
    },
    {},
    {
      "position": "10-09",
      "useCustomCount": 1,
      "useCustom": "恒睿科技",
      "customCount": 1,
      "custom": "恒睿科技",
      "electronicType": "直流",
      "frameid": 207,
      "status": 1,
      "deviceCount": 1
    },
    {}
    ],
    [{},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
    ],
    [{},
    {
      "position": "机房门口"
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {}
    ]
  ]
}
// 04-030 查询机房平面图
api.findOneEditPlanPicture = (data) => {
  // return request({
  //   url: '/comproom/findOneEditPlanPicture',
  //   method: 'post',
  //   data
  // })
  return [
    [{}, {}, {}, {}, {
      "position": "仓库门口"
    }, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    [{
      "position": "14-03"
    },
    {
      "position": "14-04"
    }, {
      "position": "14-05"
    }, {
      "position": "14-06"
    },
    {
      "position": "14-07"
    }, {
      "position": "14-08"
    }, {
      "position": "14-09"
    },
    {
      "position": "14-10"
    }, {
      "position": "空调"
    }, {
      "position": "14-12"
    },
    {
      "position": "14-13"
    }
    ],
  ]
}
// 04-031 编辑机柜可视化布局图
api.editOnePlanPicture = (data) => {
  return request({
    url: '/comproom/editOnePlanPicture',
    method: 'post',
    data
  })
  // return {
  //   "err": 0,
  //   "code": "",
  //   "data": null,
  //   "msg": "调用成功"
  // }
}
// 04-032 上传机房平面图(返回)
api.editOnePlanPictureImg = (data) => {
  return request({
    url: '/comproom/editOnePlanPicture',
    method: 'post',
    data
  })
  // return {
  //   "pictureid": 1,
  //   "filepath": ""
  // }
}
// 04-033 显示机房统计图
api.getAllCityRoomCount = (data) => {
  // return request({
  //   url: '/comproom/getAllCityRoomCount',
  //   method: 'post',
  //   data
  // })
  return {
    "cityRoomCountList": [1, 10, 12, 34, 11, 98, 44],
    "cityNameList": ["惠州", "九江", "江门", "中山", "肇庆", "内蒙古", "哈尔滨"]
  }
}
// 右键查询机房，API文档还没写
api.FrameFindOne = (data) => {
  // return request({
  //   url: '/comproom/getAllCityRoomCount',
  //   method: 'post',
  //   data
  // })
  return {
    "frameid": 1,
    "roomid": 1,
    "position": "07-03",
    "unum": 15,
    "frameunum": 46,
    "powernum": 24,
    "powerusenum": 14,
    "servernum": 12,
    "rulersize": 138,
    "electronictype": 2,
    "financetype": 1,
    "electronictypestr": "直流",
    "status": 1,
    "statusstr": "启用",
    "useDimensionSize": 0,
    "useDimensionSizePercent": 0
  }
}
// 机房编辑保存，API文档还没写
api.FrameEdit = (data) => {
  // return request({
  //   url: '/comproom/saveComproom',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功"
  }
}
export default api
