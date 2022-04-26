import request from '@/utils/request'
const api = {}
/*机房管理页面*/
// 分页查询机柜列表
api.findFrame = (data) => {
  // return request({
  //   url: '/frame/findFrame',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [{
      "cityName": "江门",
      "electronicType": 2,
      "financeType": 2,
      "floor": "12",
      "frameId": 173,
      "frameUnum": 45,
      "house": "电信",
      "position": "02-01",
      "powerNum": 23,
      "powerUseNum": 11,
      "roomId": 2,
      "rulerSize": 133,
      "serverNum": 5,
      "status": 2,
      "unum": 15,
      "useDimensionSize": 2,
      "electronicTypeStr": "交流",
      "memo": "状态描述状态描述状态描述状态描述状态描述状态描述状态描述状态描述状态描述",
      "powerUsePercent": 52,
      "unumUsePercent": 27,
      "useDimensionSizePercent": 2
    }, {
      "cityName": "江门",
      "electronicType": 3,
      "financeType": 1,
      "floor": "11",
      "frameId": 174,
      "frameUnum": 46,
      "house": "电信",
      "position": "02-02",
      "powerNum": 24,
      "powerUseNum": 12,
      "roomId": 1,
      "rulerSize": 138,
      "serverNum": 7,
      "status": 1,
      "unum": 12,
      "useDimensionSize": 0,
      "electronicTypeStr": "交流",
      "memo": "状态描述状态描述状态描述状态描述状态描述状态描述状态描述状态描述状态描述",
      "powerUsePercent": 50,
      "unumUsePercent": 26,
      "useDimensionSizePercent": 0
    }],
    "otherInfo": null,
    "total": 120,
    "useTotal": 50
  }
}
// 添加/编辑机柜：保存
api.saveFrame = (data) => {
  // return request({
  //   url: '/frame/saveFrame',
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
// 删除机柜
api.delFrame = (data) => {
  // return request({
  //   url: '/frame/delFrame',
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
// 查询单个机柜
api.getFrame = (data) => {
  // return request({
  //   url: '/frame/getFrame',
  //   method: 'post',
  //   data
  // })
  return {
    "cityName": "江门",
    "electronicType": 3,
    "financeType": 1,
    "floor": "11",
    "frameId": 174,
    "frameUnum": 46,
    "house": "电信",
    "position": "02-02",
    "powerNum": 24,
    "powerUseNum": 12,
    "roomId": 1,
    "rulerSize": 138,
    "serverNum": 7,
    "status": 1,
    "unum": 12,
    "useDimensionSize": 55,
    "electronicTypeStr": "交流",
    "memo": "描述描述描述",
    "powerUsePercent": 50,
    "unumUsePercent": 26,
    "useDimensionSizePercent": 0
  }
}
// 启用/停用机柜
api.updateFrameStatus = (data) => {
  // return request({
  //   url: '/frame/updateFrameStatus',
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
// 获取单个机柜的日志记录
api.findFrameLogs = (data) => {
  // return request({
  //   url: '/frame/findFrameLog',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [{
      "doTime": 1456897523,
      "frameId": 112,
      "logId": 683,
      "memo": "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      "roomId": 0,
      "status": 1,
      "username": "ldl"
    }, {
      "doTime": 1456897523,
      "frameId": 112,
      "logId": 683,
      "memo": "dd",
      "roomId": 0,
      "status": 2,
      "username": "ldl"
    }, {
      "doTime": 1456897523,
      "frameId": 112,
      "logId": 683,
      "memo": "dd",
      "roomId": 0,
      "status": 1,
      "username": "ldl"
    }, {
      "doTime": 1456897523,
      "frameId": 112,
      "logId": 683,
      "memo": "dd",
      "roomId": 0,
      "status": 2,
      "username": "ldl"
    }, {
      "doTime": 1456897523,
      "frameId": 112,
      "logId": 683,
      "memo": "dd",
      "roomId": 0,
      "status": 1,
      "username": "ldl"
    }]
  }
}

/* 机房管理页面-查看机柜现状图页面 */
// 查看某个机柜平面图
api.FrameViewDataFind = (data) => {
  return {
    "place": [{
        "end": 96,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 87,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 78,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 51,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 42,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 33,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 24,
        "site": 0,
        "span": 6,
        "tail": 0
      },
      {
        "end": 16,
        "site": 2,
        "span": 5,
        "tail": 1
      },
      {
        "end": 15,
        "site": 1,
        "span": 6,
        "tail": 1
      }
    ],
    "info": [96,87,78,51,42,33,24,16,15],
    "serverlist": [{
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2018-10-23 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "816417488",
        "brand": "浪潮NF5270M3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "1",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 3379,
        "customsn": "IDC-F-90658",
        "enddimension": 96,
        "startdimension": 91,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2021-09-06 11:21:48",
        "rackid": "1"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2018-10-23 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "816417492",
        "brand": "浪潮NF5270M3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "1",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 3382,
        "customsn": "IDC-F-90662",
        "enddimension": 87,
        "startdimension": 82,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2021-09-06 11:21:48",
        "rackid": "2"
      },
      {
        "servertype": 1,
        "purpose": "",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2018-10-23 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "816417513",
        "brand": "浪潮NF5270M3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "1",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 3383,
        "customsn": "IDC-F-90683",
        "enddimension": 78,
        "startdimension": 73,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2021-09-06 11:21:48",
        "rackid": "3"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "216387810",
        "brand": "浪潮NF5270M3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "CentOS 6.0",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2541,
        "customsn": "IDC-F-89575",
        "enddimension": 51,
        "startdimension": 46,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:29:38",
        "rackid": "6"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "216389239",
        "brand": "浪潮NF5270M3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "CentOS 6.0",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2542,
        "customsn": "IDC-F-89623",
        "enddimension": 42,
        "startdimension": 37,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:29:38",
        "rackid": "7"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "2102310YQC10GC005929",
        "brand": "华为RH2288V3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "CentOS 6.0",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2543,
        "customsn": "IDC-F-100649",
        "enddimension": 33,
        "startdimension": 28,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:29:38",
        "rackid": "8"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": null,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "2102310YQC10G9002035",
        "brand": "华为RH2288V3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "CentOS 6.0",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2544,
        "customsn": "IDC-F-100459",
        "enddimension": 24,
        "startdimension": 19,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:29:38",
        "rackid": "9"
      },
      {
        "servertype": 4,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 2,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [1, 3, 2, 4],
        "spec": "测试8",
        "devicetype": 2,
        "parentSN": null,
        "childcount": 4,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "TA3715320714",
        "brand": "Juniper-QFX5100-48S-6Q",
        "plugnum": 10,
        "usecustom": "来秀",
        "os": "Windows Server 2003",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2537,
        "customsn": "IDC-S-7783",
        "enddimension": 16,
        "startdimension": 12,
        "childserversequence": null,
        "iftest": 2,
        "size": 1,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:30:37",
        "rackid": "11"
      },
      {
        "servertype": 1,
        "purpose": "CDN",
        "frameid": 333,
        "person2_tel": "",
        "serverstatus": 1,
        "onlinetime": "2000-01-01 00:00:00",
        "memo": "",
        "person_tel": "",
        "person_idcode": "",
        "childsequenceList": [1, 3, 2, 4],
        "spec": "",
        "devicetype": 1,
        "parentSN": null,
        "childcount": 4,
        "ippool_id": 0,
        "printlabel": 0,
        "person2_idcode": "",
        "sn": "2102310YQC10G9002037",
        "brand": "华为RH2288V3",
        "plugnum": 1,
        "usecustom": "来秀",
        "os": "CentOS 6.0",
        "custom_id": 1,
        "offlinetime": null,
        "person_name": "",
        "server_id": 2538,
        "customsn": "IDC-F-100457",
        "enddimension": 15,
        "startdimension": 10,
        "childserversequence": null,
        "iftest": 1,
        "size": 2,
        "customname": "帝联",
        "person2_name": "",
        "insertflag": 0,
        "updatetime": "2022-03-31 11:29:38",
        "rackid": "10"
      }
    ],
    "frameinfo": {
      "frameunum": 24,
      "electronictype": 3,
      "frameid": 333,
      "unum": 17,
      "servernum": 9,
      "powerusenum": 18,
      "position": "04-04",
      "powernum": 24,
      "roomid": 1,
      "rulersize": 180,
      "status": 1,
      "financetype": 1
    }
  }
}
// 上传机柜现状图
api.uploadFrameImage = (data) => {
  return request({
    url: '/frame/uploadFrameImage',
    method: 'post',
    data
  })
  // return {
  //   "imgId": 211,
  //   "filePath": "dd5cf32b-693c-4b61-8c54-20b4a9a36157.jpg"
  // }
}
// 查询机柜现状图
api.frameImageUrlFind = (data) => {
  // return request({
  //   url: '/frame/frameImageUrlFind',
  //   method: 'post',
  //   data
  // })
  return [{
    "imgId": 67,
    "frameTime": "2019-12-09",
    "filePath": "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
  }, {
    "imgId": 68,
    "frameTime": "2022-12-09",
    "filePath": "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
  }]
}
// 删除机柜现状图
api.frameImageUrlDel = (data) => {
  // return request({
  //   url: '/frame/frameImageUrlDel',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": "",
    "data": null,
    "msg": "调用成功！"
  }
}
// 查询机柜下的所有设备列表
api.findDeviceByFrameId = (data) => {
  // return request({
  //   url: '/frame/findDeviceByFrameId',
  //   method: 'post',
  //   data
  // })
  return [{
    "serverId": 101,
    "deviceType": "1",
    "brand": "H3c",
    "deviceModel": "S5820",
    "rackId": "1",
    "sn": "816417488",
    "purpose": "cdn内容分发",
    "spec": "300GSAS*2+1.2T/SSD*2+4T/HDD*10",
    "size": 6,
    "customSn": "816417488",
    "customName": "领智云",
    "useCustom": "领智云",
    "ip": "192.168.10.172",
    "startDimension": 121,
    "endDimension": 126
  }, {
    "serverId": 102,
    "deviceType": "2",
    "brand": "H3c",
    "deviceModel": "S5821",
    "rackId": "",
    "sn": "81CA17488 ",
    "purpose": "cdn内容分发",
    "spec": "规格",
    "size": 5,
    "customSn": "",
    "customName": "领智云",
    "useCustom": "领智云",
    "ip": "192.168.10.172",
    "startDimension": 100,
    "endDimension": 106
  }]
}
// 批量编辑机架位/刻度/U数
api.batchEditServerInfo = (data) => {
  // return request({
  //   url: '/frame/batchEditServerInfo',
  //   method: 'post',
  //   data
  // })
  return [{
    "serverId": 101,
    "brand": "H3c",
    "deviceModel": "S5820",
    "rackId": 0,
    "sn": "",
    "purpose": "cdn内容分发",
    "spec": "规格",
    "size": 6,
    "customSn": "",
    "customName": "领智云",
    "useCustom": "领智云",
    "ip": "192.168.10.172",
    "startDimension": 121,
    "endDimension": 126
  }]
}

/* 机房管理页面-机房统计页面 */
// 按机房统计机柜总数和机柜使用总数
api.FrameCountDataForRoom = (data) => {
  // return request({
  //   url: '/frame/FrameCountDataForRoom',
  //   method: 'post',
  //   data
  // })
  return [{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 1,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },
    {
      "roomId": 2,
      "cityName": "江门",
      "house": "电信",
      "floor": "13",
      "frameCount": 53,
      "frameUseCount": 24
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },{
      "roomId": 3,
      "cityName": "惠州",
      "house": "电信",
      "floor": "13",
      "frameCount": 50,
      "frameUseCount": 14
    },
  ]
}
// 按地区统计机柜总数和机柜使用总数
api.FrameCountDataForCity = (data) => {
  // return request({
  //   url: '/frame/FrameCountDataForCity',
  //   method: 'post',
  //   data
  // })
  return [{
      "cityId": 1,
      "cityName": "江门",
      "frameCount": 221,
      "frameUseCount": 112
    },
    {
      "cityId": 2,
      "cityName": "惠州",
      "frameNount": 61,
      "frameUseCount": 8
    }
  ]
}
/* 机房管理页面-机柜报表页面 */
// 机房报表-概括统计
api.findRoomReportEchartsData = (data) => {
  // return request({
  //   url: '/frame/findRoomReportEchartsData',
  //   method: 'post',
  //   data
  // })
  return {
    "roomStrList": [
      "江门-电信-11F",
      "江门-电信-13F",
      "江门-电信-15F",
      "鹤山-电信-3F",
      "江门-柏宁-2F",
      "江门-联通-3F",
      "江门-移动-5F",
      "惠州-电信-8F",
      "惠州-电信-5F",
      "江门-电信-16F",
      "惠州-电信-7F",
      "江门-火炬园-1F",
      "九江-电信-3F",
      "内蒙古-联通-2F",
      "安阳-联通-1F",
      "江门-公司机房-2F",
      "中山-移动-2F",
      "江门-测试3-11F",
      "江门-开发部测试-2F",
      "测试3-开发部测试-2FF"
    ],
    "roomFrameCountList": [21, 23, 24, 40, 3, 14, 1, 6, 34, 1, 0, 26, 1, 1, 1, 4, 4, 0, 0, 0],
    "amount": {
      "beforeDeviceNumber": 968,
      "beforeFrameNumber": 205,
      "downDeviceNumber": 41,
      "downFrameNumber": 2,
      "nowDeviceNumber": 1083,
      "nowFrameNumber": 204,
      "rackDeviceNumber": 156,
      "rackFrameNumber": 1
    }
  }
}
// 机房报表-按机房统计生成机柜报表
api.findRoomReportAboutFrame = (data) => {
  // return request({
  //   url: '/frame/findRoomReportAboutFrame',
  //   method: 'post',
  //   data
  // })
  return {
    'list': [{
      "beforeDeviceNumber": 125,
      "beforeFrameNumber": 21,
      "downDeviceNumber": 1,
      "downFrameNumber": 0,
      "nowDeviceNumber": 128,
      "nowFrameNumber": 21,
      "positionList": [
        {position:"02-02",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"02-03",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"02-04",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"03-02",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"03-03",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"03-04",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"03-05",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
        {position:"03-07",beforeDeviceNumber:1,nowDeviceNumber:2,rackDeviceNumber:3,downDeviceNumber:4},
      ],
      "rackDeviceNumber": 4,
      "rackFrameNumber": 0,
      "roomName": "江门-电信-11F",
      "roomId": 1
    }],
    "amount": {
      "beforeDeviceNumber": 1032,
      "beforeFrameNumber": 205,
      "downDeviceNumber": 21,
      "downFrameNumber": 0,
      "nowDeviceNumber": 1047,
      "nowFrameNumber": 205,
      "rackDeviceNumber": 36,
      "rackFrameNumber": 0
    }
  }
}
// 机房报表-按客户统计生成机柜报表
api.findCustomReportByCustom = (data) => {
  // return request({
  //   url: '/frame/findCustomReportByCustom',
  //   method: 'post',
  //   data
  // })
  return [{
    "beforeDeviceNumber": 10,
    "beforeFrameNumber": 20,
    "customName": "帝联",
    "customId": 1,
    "downDeviceNumber": 30,
    "downFrameNumber": 40,
    "nowDeviceNumber": 50,
    "nowFrameNumber": 80,
    "rackDeviceNumber": 10,
    "rackFrameNumber": 10,
    "positionList": [
      {position:"02-02",roomId:"2",roomName:"江门-电信-1"},
      {position:"02-03",roomId:"2",roomName:"江门-电信-11"},
      {position:"02-04",roomId:"2",roomName:"江门-电信-12"},
      {position:"03-02",roomId:"2",roomName:"江门-电信-13"},
      {position:"03-03",roomId:"2",roomName:"江门-电信-14"},
      {position:"03-04",roomId:"2",roomName:"江门-电信-15"},
      {position:"03-05",roomId:"2",roomName:"江门-电信-16"},
      {position:"03-07",roomId:"2",roomName:"江门-电信-17"},
    ],
  }, {
    "beforeDeviceNumber": 3,
    "beforeFrameNumber": 2,
    "customName": "123",
    "customId": 86,
    "downDeviceNumber": 0,
    "downFrameNumber": 0,
    "nowDeviceNumber": 3,
    "nowFrameNumber": 2,
    "rackDeviceNumber": 0,
    "rackFrameNumber": 0,
    "positionList": [
      {position:"02-02",roomId:"2",roomName:"江门-电信-1"},
      {position:"02-03",roomId:"2",roomName:"江门-电信-11"},
      {position:"02-04",roomId:"2",roomName:"江门-电信-12"},
      {position:"03-02",roomId:"2",roomName:"江门-电信-13"},
      {position:"03-03",roomId:"2",roomName:"江门-电信-14"},
      {position:"03-04",roomId:"2",roomName:"江门-电信-15"},
      {position:"03-05",roomId:"2",roomName:"江门-电信-16"},
      {position:"03-07",roomId:"2",roomName:"江门-电信-17"},
    ],
  }]
}
export default api
