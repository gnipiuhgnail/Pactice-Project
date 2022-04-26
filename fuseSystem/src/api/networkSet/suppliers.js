import request from '@/utils/request'

const api = {}
// 05-005 网络供应商网关-添加/编辑
api.saveSupplierWan = (data) => {
  // return request({
  //   url: '/netSupplier/saveSupplierWan',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": null,
    "data": null,
    "msg": "调用成功"
  }
}
// 05-006 供应商网关-删除
api.delSupplierWan = (data) => {
  // return request({
  //   url: '/netSupplier/delSupplierWan',
  //   method: 'post',
  //   data
  // })
  return {
    "err": 0,
    "code": null,
    "data": null,
    "msg": "调用成功"
  }
}
// 05-007 供应商网关-查询单个
api.getSupplierWan = (data) => {
  // return request({
  //   url: '/netSupplier/getSupplierWan',
  //   method: 'post',
  //   data
  // })
  return {
    "cityId": 1,
    "cityInfo": {
      "cityId": 1,
      "cityName": "江门市",
      "cityStatus": null,
      "createDate": 14785636323,
      "province": "广东省"
    },
    "createDate": 145535687,
    "memo": "1",
    "netSupplierName": "测试1",
    "netSupplierType": 1,
    "supplierWanId": 17,
    "supplierWanName": "测试供应商",
  }
}
//05-008 供应商网关-条件查询
api.findSupplierWan = (data) => {
  // return request({
  //   url: '/netSupplier/findSupplierWan',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [
      {
        "cityId": 1,
        "cityInfo": {
          "cityId": 1,
          "cityName": "江门市",
          "cityStatus": null,
          "createDate": 1458795212,
          "province": "广东省"
        },
        "createDate": 14578953465,
        "memo": "备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注",
        "netSupplierName": "测试1",
        "netSupplierType": 1,
        "supplierWanId": 17,
        "supplierWanName": "测试供应商"
      },
      {
        "cityId": 1,
        "cityInfo": {
          "cityId": 1,
          "cityName": "江门市",
          "cityStatus": null,
          "createDate": 1478956322,
          "province": "广东省"
        },
        "createDate": 147855666,
        "memo": "11",
        "netSupplierName": "111",
        "netSupplierType": 2,
        "supplierWanId": 16,
        "supplierWanName": "111"
      }
    ],
    "otherInfo": null,
    "total": 2
  }
}
// 05-009 供应商端口-添加/编辑
api.saveSupplierWanPort = (data) => {
  // return request({
  //   url: '/netSupplier/saveSupplierWanPort',
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
// 05-010 供应商端口-查询单个
api.getSupplierWanPort = (data) => {
  // return request({
  //   url: '/netSupplier/getSupplierWanPort',
  //   method: 'post',
  //   data
  // })
  return {
    "bindId": 1,
    "bindType": 1,
    "createDate": 145355778,
    "memo": "备注住",
    "supplierPortName": "1001000",
    "supplierPortNo": "1",
    "supplierWanId": 1,
    "supplierWanPortId": 1,
    "suppliersTotalFlow": 1
  }
}
// 05-011 供应商端口-条件查询
api.findSupplierWanPort = (data) => {
  // return request({
  //   url: '/netSupplier/findSupplierWanPort',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [
      {
        "bindId": 1,
        "bindType": 1,
        "createDate": 1478455622,
        "memo": "备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注",
        "supplierPortName": "A1001000",
        "supplierPortNo": "1",
        "supplierWanId": 1,
        "supplierWanPortId": 1,
        "suppliersTotalFlow": 1,
        "bindStatus": 0
      },
      {
        "bindId": 1,
        "bindType": 1,
        "createDate": 1457989652,
        "memo": "",
        "supplierPortName": "1001000",
        "supplierPortNo": "1",
        "supplierWanId": 0,
        "supplierWanPortId": 17,
        "suppliersTotalFlow": 1,
        "bindStatus": 0
      }
    ],
    "total": 2,
    "otherInfo": null,
  }
}
// 05-012 供应商网关端口-删除
api.delSupplierWanPort = (data) => {
  // return request({
  //   url: '/netSupplier/delSupplierWanPort',
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
