import request from '@/utils/request'

const api = {}
// 选择设备端口
// 设备列表
api.findSwtich = (data) => {
  // return request({
  //   url: '/netSupplier/WanFind',
  //   method: 'post',
  //   data
  // })
  return{
    "list": [
        {
            "brand": "DELL",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2021-05-28 15:27:42",
            "customer": null,
            "customerId": 1,
            "deviceId": 36,
            "deviceName": "CE12816B-02 测试",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "3",
            "frameRack": "10",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 1,
            "isscanf": 1,
            "memo": "测试数据",
            "myno": "CE12816B-02",
            "pointuuid": "11eudar3w63kanyue5tgda6hlecazml7",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "63e74469c5eb436d9bcc7a976f0aedb5",
            "size": 1,
            "slotCount": 6,
            "slotRelation": [],
            "sn": "CE12816B-02",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+631",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-11-26 15:17:24",
            "customer": null,
            "customerId": 1,
            "deviceId": 35,
            "deviceName": "流量计算测试，不要改动832",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "806",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 1,
            "isscanf": 1,
            "memo": "备注181",
            "myno": "网关编号168",
            "pointuuid": "11eudar3w63kanyue5tgda6hlecazml7",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "a5729b03e4fe46c2825d763b8bd983f8",
            "size": 1,
            "slotCount": 2,
            "slotRelation": [],
            "sn": "5F-CE12871548",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+425",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-11-16 09:38:54",
            "customer": null,
            "customerId": 1,
            "deviceId": 34,
            "deviceName": "交换机765",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "",
            "frameRack": "970",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 2,
            "isscanf": 1,
            "memo": "备注573",
            "myno": "网关编号147",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "95ed6d8422a241648f85974a60f9a154",
            "size": 1,
            "slotCount": 12,
            "slotRelation": [],
            "sn": "CE12871539",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "jm",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-11-05 16:02:46",
            "customer": null,
            "customerId": 1,
            "deviceId": 33,
            "deviceName": "测试",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "鹤山-电信-3楼-10-09",
            "frameRack": "101",
            "house": "",
            "ip": "192.168.10.231",
            "isCore": 1,
            "isscanf": 0,
            "memo": "1234",
            "myno": "123",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 0,
            "selectmemo": "cf3d2281d12246ba8eb714b485b9b911",
            "size": 12,
            "slotCount": 2,
            "slotRelation": [],
            "sn": "7ZMG53X",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+270",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-10-23 10:16:28",
            "customer": null,
            "customerId": 1,
            "deviceId": 32,
            "deviceName": "交换机58",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "914",
            "house": "",
            "ip": "183.232.133.157",
            "isCore": 1,
            "isscanf": 1,
            "memo": "备注6",
            "myno": "网关编号326",
            "pointuuid": "11eudar3w63kanyue5tgda6hlecazml7",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "3fa033db1e644b488b16ed315b788806",
            "size": 1,
            "slotCount": 8,
            "slotRelation": [],
            "sn": "5F-CE12871867",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "12313",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-09-28 15:17:49",
            "customer": null,
            "customerId": 1,
            "deviceId": 25,
            "deviceName": "13123",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "12312",
            "house": "",
            "ip": "192.168.10.231",
            "isCore": 2,
            "isscanf": 0,
            "memo": "313212",
            "myno": "12312",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 0,
            "selectmemo": "",
            "size": 313,
            "slotCount": 0,
            "slotRelation": [],
            "sn": "123123123",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "111",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-09-25 11:04:17",
            "customer": null,
            "customerId": 1,
            "deviceId": 24,
            "deviceName": "12816A",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "2",
            "frameRack": "121",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 2,
            "isscanf": 0,
            "memo": "",
            "myno": "231",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "",
            "size": 11,
            "slotCount": 21,
            "slotRelation": [],
            "sn": "123123",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+30",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-09-09 15:42:49",
            "customer": null,
            "customerId": 1,
            "deviceId": 11,
            "deviceName": "交换机5151",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "902",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 2,
            "isscanf": 1,
            "memo": "备注988",
            "myno": "网关编号761",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "3fa033db1e644b488b16ed315b788801",
            "size": 1,
            "slotCount": 20,
            "slotRelation": [],
            "sn": "5F-CE12871936",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+538",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-09-09 15:42:48",
            "customer": null,
            "customerId": 1,
            "deviceId": 10,
            "deviceName": "交换机26",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "595",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 2,
            "isscanf": 1,
            "memo": "备注535",
            "myno": "网关编号399",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "",
            "size": 1,
            "slotCount": 20,
            "slotRelation": [],
            "sn": "5F-CE12871919",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        },
        {
            "brand": "DELL R610+322",
            "cityName": "",
            "computerFrame": null,
            "createDate": "2020-09-09 15:42:47",
            "customer": null,
            "customerId": 1,
            "deviceId": 9,
            "deviceName": "交换机139",
            "deviceType": 1,
            "firewallConnectType": null,
            "firewallDownBind": null,
            "firewallUpBind": null,
            "floor": null,
            "frameId": "1",
            "frameRack": "136",
            "house": "",
            "ip": "183.232.132.74",
            "isCore": 2,
            "isscanf": 0,
            "memo": "备注517",
            "myno": "网关编号408",
            "pointuuid": "",
            "position": "",
            "routerIsscanf": null,
            "routerMyno": "",
            "routerPassword": "",
            "routerScanflag": null,
            "routerSelectMemo": "",
            "routerSize": null,
            "scanflag": 1,
            "selectmemo": "",
            "size": 1,
            "slotCount": 20,
            "slotRelation": [],
            "sn": "5F-CE12871257",
            "wanPassword": "TwUFEAQnI6o9HzisHBrrBw==",
            "wdmDownBind": null,
            "wdmPosition": "",
            "wdmUpBind": null
        }
    ],
    "otherInfo": null,
    "total": 17
}
}
// 端口列表
api.findWanPortForBind = (data) => {
  // return request({
  //   url: '/device/findWanPortForBind',
  //   method: 'post',
  //   data
  // })
  return{
    "list": [
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "",
            "pno1": 0,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "183.232.132.74",
            "portName": "10GE16/0/0",
            "portNo": "61",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3426
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "",
            "pno1": 1,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "183.232.132.78",
            "portName": "10GE16/0/1",
            "portNo": "62",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3427
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "",
            "pno1": 10,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/10",
            "portNo": "71",
            "portNoname": "10GE",
            "portSpeed": 1000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3436
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to hjy-S5700-0/0/6",
            "pno1": 11,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/11",
            "portNo": "72",
            "portNoname": "10GE",
            "portSpeed": 1000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3437
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/1",
            "pno1": 12,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/12",
            "portNo": "73",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3438
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/2",
            "pno1": 13,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/13",
            "portNo": "74",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3439
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/3",
            "pno1": 14,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/14",
            "portNo": "75",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3440
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/4",
            "pno1": 15,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/15",
            "portNo": "76",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3441
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/5",
            "pno1": 16,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/16",
            "portNo": "77",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3442
        },
        {
            "bindId": null,
            "bindType": null,
            "createDate": "2021-05-28 15:28:10",
            "memo": "to bsy-CE6851-1/0/6",
            "pno1": 17,
            "pno2": 0,
            "pno3": 16,
            "portCheckStatus": 1,
            "portInterfaceType": 1,
            "portIp": "",
            "portName": "10GE16/0/17",
            "portNo": "78",
            "portNoname": "10GE",
            "portSpeed": 10000,
            "portType": 1,
            "portUseStatus": 1,
            "switchPortVlan": null,
            "wanId": 36,
            "wanPortId": 3443
        }
    ],
    "otherInfo": {
        "scanflag": "1"
    },
    "total": 52
}
}
export default api