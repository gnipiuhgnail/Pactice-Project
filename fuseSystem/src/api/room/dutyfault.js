import request from '@/utils/request'
const api = {}
// 04-014 查询值班故障信息列表
api.findDutyFault = (data) => {
  // return request({
  //   url: '/dutyFault/findDutyFault',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [
      {
        "client": "测试1",
        "clientBack": [
          {
            "cnname": "李银香",
            "message": "dfdfd",
            "msgDate": "2021-08-12 17:01:58"
          }
        ],
        "cnname": "黄焯庆",
        "faultEnFlag": 1,
        "faultEndFlagMsg": "已完成",
        "faultEvent": "白山丢包",
        "faultFrom": 3,
        "faultFromMsg": "微信",
        "faultId": 10,
        "faultTime": "2018-10-28 13:11:11",
        "faultToFlag": 0,
        "faultToFlagMsg": "不转交",
        "position": "1",
        "processCnname": "",
        "processPosition": "",
        "processUserId": 0,
        "processUsername": "",
        "userId": 12,
        "username": "chrishg"
      }
    ],
    "otherInfo": null,
    "total": 1
  }
}
// 04-015 添加/编辑值班故障
api.saveDutyFault = (data) => {
  // return request({
  //   url: '/dutyFault/saveDutyFault',
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
// 04-016 查询一个值班故障的信息
api.getDutyFault = (data) => {
  // return request({
  //   url: '/dutyFault/getDutyFault',
  //   method: 'post',
  //   data
  // })
  return {
    form: {
      "client": "测试1",
      "clientBack": [
        {
          "cnname": "李银香",
          "message": "dfdfd",
          "msgDate": "2021-08-12 17:01:58"
        }
      ],
      "cnName": "黄焯庆",
      "faultEnFlag": 1,
      "faultEndFlagMsg": "已完成",
      "faultEvent": "白山丢包",
      "faultFrom": 3,
      "faultFromMsg": "微信",
      "faultId": 10,
      "faultTime": "2018-10-28 13:11:11",
      "faultToFlag": 1,
      "faultToFlagMsg": "不转交",
      "position": "1",
      "processCnname": "",
      "processPosition": "",
      "processUserId": 0,
      "processUsername": "",
      "userId": 12,
      "username": "chrishg"
    },
    faultproclist: [
      {
        "faultprocid": 3,
        "faultid": 17,
        "processuserid": 53,
        "cnname": "梁惠平",
        "username": "lhp",
        "position": ""
      }
    ],
    faultcclist: [
      {
        "faultccid": 6,
        "faultid": 17,
        "ccuserid": 1,
        "isread": 0,
        "cnname": "潘伟校",
        "username": "pwx",
        "position": "开发部"
      },
      {
        "faultccid": 7,
        "faultid": 17,
        "ccuserid": 2,
        "isread": 0,
        "cnname": "超管理员",
        "username": "admin",
        "position": "系统管理员"
      },
      {
        "faultccid": 8,
        "faultid": 17,
        "ccuserid": 53,
        "isread": 0,
        "cnname": "梁惠平",
        "username": "lhp",
        "position": ""
      },
      {
        "faultccid": 13,
        "faultid": 17,
        "ccuserid": 4,
        "isread": 0,
        "cnname": "陈德健",
        "username": "dejian",
        "position": "dejian"
      }
    ]
  }
}
// 04-017 处理完值班故障
api.dutyFaultEnd = (data) => {
  // return request({
  //   url: '/dutyFault/DutyFaultEnd',
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
// 抄送和转交的用户列表
api.UserFind = (data) => {
  return {
    "total": 36,
    "rows": [
      {
        "userid": 1,
        "cnname": "潘伟校",
        "mobile": "13078611090",
        "username": "pwx",
        "groupid": 10,
        "groupname": "开发组",
        "position": "开发部",
        "userpower": "ipblack",
        "usercreatetime": "2018-02-22 10:12:41",
        "userupdatetime": "2019-09-30 14:56:09",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 2,
        "cnname": "超管理员",
        "mobile": "",
        "username": "admin",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "系统管理员",
        "userpower": "null,dutymanager,jkmanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2018-03-06 10:55:24",
        "userupdatetime": "2019-09-02 17:00:42",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 4,
        "cnname": "陈德健",
        "mobile": "15338111393",
        "username": "dejian",
        "groupid": 10,
        "groupname": "开发组",
        "position": "dejian",
        "userpower": "finance,groupfind,groupadd,groupedit,groupdel,userdel,useredit,useradd,userfind,syssetting,logfind,appfuncpower",
        "usercreatetime": "2018-06-22 13:10:56",
        "userupdatetime": "2020-03-11 16:54:11",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 9,
        "cnname": "胡超华",
        "mobile": "17099718816",
        "username": "hch",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "cangkumanager,dutymanager,wuzhimanager",
        "usercreatetime": "2018-10-11 15:26:53",
        "userupdatetime": "2019-09-02 16:48:10",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 12,
        "cnname": "黄焯庆",
        "mobile": "18127598009",
        "username": "chrishg",
        "groupid": 11,
        "groupname": "运维组",
        "position": "1",
        "userpower": "dutymanager,wuzhimanager,cangkumanager",
        "usercreatetime": "2018-10-18 12:08:49",
        "userupdatetime": "2019-09-02 16:48:32",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 13,
        "cnname": "梁健辉",
        "mobile": "15975005999",
        "username": "ljh",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "dutymanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2018-10-18 16:39:17",
        "userupdatetime": "2020-03-11 16:53:27",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 14,
        "cnname": "伍志勇",
        "mobile": "13302881797",
        "username": "wzy",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "dutymanager,cangkumanager,wuzhimanager,logfind,userfind,useradd,useredit",
        "usercreatetime": "2018-10-18 16:39:39",
        "userupdatetime": "2020-12-24 09:56:47",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 15,
        "cnname": "朱艳秋",
        "mobile": "18933635655",
        "username": "18933635655",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "dutymanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2018-10-18 16:39:54",
        "userupdatetime": "2019-09-02 16:49:53",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 16,
        "cnname": "黄健超",
        "mobile": "13427208371",
        "username": "hjc",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "dutymanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2018-10-18 16:40:12",
        "userupdatetime": "2020-03-11 16:52:52",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 17,
        "cnname": "陈永均",
        "mobile": "13536088701",
        "username": "cyj",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "dutymanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2018-10-18 16:40:29",
        "userupdatetime": "2020-03-24 17:41:43",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 21,
        "cnname": "简汉斌",
        "mobile": "13686900817",
        "username": "jianhanbin",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "logfind,dutymanager,cangkumanager,wuzhimanager",
        "usercreatetime": "2019-01-03 10:06:20",
        "userupdatetime": "2020-03-11 16:51:59",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 25,
        "cnname": "廖健荣",
        "mobile": "15975037886",
        "username": "ljr",
        "groupid": 11,
        "groupname": "运维组",
        "position": "a",
        "userpower": "dutymanager",
        "usercreatetime": "2019-01-31 09:03:40",
        "userupdatetime": "2020-03-11 16:49:38",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 28,
        "cnname": "黄浩锐",
        "mobile": "13555617171",
        "username": "hhr",
        "groupid": 11,
        "groupname": "运维组",
        "position": "e",
        "userpower": "dutymanager",
        "usercreatetime": "2019-03-11 16:24:11",
        "userupdatetime": "2020-03-11 16:49:19",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 30,
        "cnname": "黄世宇",
        "mobile": "18675060003",
        "username": "huangshiyu",
        "groupid": 11,
        "groupname": "运维组",
        "position": "",
        "userpower": "dutymanager",
        "usercreatetime": "2019-05-13 08:57:31",
        "userupdatetime": "2020-03-11 16:48:59",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 31,
        "cnname": "伍年海",
        "mobile": "18948408551",
        "username": "wnh",
        "groupid": 11,
        "groupname": "运维组",
        "position": "123",
        "userpower": "",
        "usercreatetime": "2019-05-13 10:57:48",
        "userupdatetime": "2020-03-11 16:48:36",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 32,
        "cnname": "网警",
        "mobile": "",
        "username": "test001",
        "groupid": 30,
        "groupname": "网警",
        "position": "网警",
        "userpower": "",
        "usercreatetime": "2019-05-29 16:05:36",
        "userupdatetime": "2019-06-17 15:00:04",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 34,
        "cnname": "黄俊峰",
        "mobile": "19924224394",
        "username": "jf",
        "groupid": 10,
        "groupname": "开发组",
        "position": "",
        "userpower": "finance,Inventory,workorder,ipblack,userroom,serverfindfornet,telecommanager,flowfind,flowcontrol,wanadd,wanfind,wanedit,wandel,wanseepass,clientmanager,applyvps,checkvpsapply,vpsmanager,cangkumetail,cangkuout,cangkuin,cangkugoods,cangkuclient,cangkusort,logging,roomSetting,dutyfault,dutyme,serverfind,serveradd,serveredit,serverdel,ippooldel,ippooledit,ippooladd,ippoolfind,framefind,frameadd,frameedit,framedel,appfuncpower,logfind,syssetting,userfind,useradd,useredit,userdel,groupdel,groupedit,groupadd,groupfind,aaa,说的,的",
        "usercreatetime": "2019-07-09 09:45:38",
        "userupdatetime": "2022-03-17 16:12:31",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 35,
        "cnname": "陆宇辉",
        "mobile": "13612265990",
        "username": "lyh",
        "groupid": 10,
        "groupname": "开发组",
        "position": "软件开发",
        "userpower": "groupfind,groupadd,groupedit,groupdel,userfind,useradd,useredit,userdel,syssetting,logfind,appfuncpower,framefind,frameadd,frameedit,framedel,ippooldel,ippooledit,ippooladd,ippoolfind,serverfind,serveradd,serveredit,serverdel,dutyme,dutyfault,roomSetting,logging,cangkusort,cangkuclient,cangkugoods,cangkuin,cangkuout,cangkumetail,applyvps,checkvpsapply,vpsmanager,clientmanager,finance,wanfind,wanadd,wanedit,wandel,wanseepass,flowfind,flowcontrol,telecommanager,serverfindfornet,userroom,ipblack,Inventory,workorder,说的,的",
        "usercreatetime": "2019-09-02 17:04:10",
        "userupdatetime": "2022-03-17 16:12:44",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 37,
        "cnname": "江门公安",
        "mobile": "",
        "username": "jmga",
        "groupid": 30,
        "groupname": "网警",
        "position": "",
        "userpower": "ipblack",
        "usercreatetime": "2019-09-30 14:56:59",
        "userupdatetime": "2019-09-30 14:56:59",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 38,
        "cnname": "李总",
        "mobile": "13702589989",
        "username": "13702589989",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "总经理",
        "userpower": "",
        "usercreatetime": "2020-02-18 09:32:11",
        "userupdatetime": "2020-02-18 09:33:23",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 39,
        "cnname": "姚菁晨",
        "mobile": "18026888884",
        "username": "18026888884",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "产品部经理",
        "userpower": "",
        "usercreatetime": "2020-02-18 11:44:44",
        "userupdatetime": "2020-06-08 14:24:25",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 40,
        "cnname": "徐健栋",
        "mobile": "13923082140",
        "username": "13923082140",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "开发部经理",
        "userpower": "",
        "usercreatetime": "2020-02-18 11:47:16",
        "userupdatetime": "2020-02-18 11:47:16",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 41,
        "cnname": "苏健芬",
        "mobile": "18675000806",
        "username": "18675000806",
        "groupid": 1,
        "groupname": "业务部",
        "position": "高层",
        "userpower": "",
        "usercreatetime": "2020-03-18 11:12:03",
        "userupdatetime": "2020-03-18 11:12:03",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 42,
        "cnname": "陈宣",
        "mobile": "13620176380",
        "username": "13620176380",
        "groupid": 10,
        "groupname": "开发组",
        "position": "设计",
        "userpower": "",
        "usercreatetime": "2020-03-18 11:28:11",
        "userupdatetime": "2020-03-18 11:28:11",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 44,
        "cnname": "黄晓枫",
        "mobile": "13427102665",
        "username": "13427102665",
        "groupid": 11,
        "groupname": "运维组",
        "position": "技术员",
        "userpower": "",
        "usercreatetime": "2020-04-15 15:15:30",
        "userupdatetime": "2020-04-15 15:15:30",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 45,
        "cnname": "关嘉豪",
        "mobile": "15019099630",
        "username": "15019099630",
        "groupid": 11,
        "groupname": "运维组",
        "position": "技术员",
        "userpower": "",
        "usercreatetime": "2020-04-15 15:16:06",
        "userupdatetime": "2020-04-15 15:16:06",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 47,
        "cnname": "郝刚",
        "mobile": "13544871460",
        "username": "13544871460",
        "groupid": 11,
        "groupname": "运维组",
        "position": "运维人员",
        "userpower": "",
        "usercreatetime": "2020-06-19 09:17:23",
        "userupdatetime": "2020-06-19 09:17:23",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 48,
        "cnname": "周俊业",
        "mobile": "13435196591",
        "username": "13435196591",
        "groupid": 10,
        "groupname": "开发组",
        "position": "程序员",
        "userpower": "syssetting,logfind",
        "usercreatetime": "2020-07-09 17:10:08",
        "userupdatetime": "2021-05-31 11:17:25",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 49,
        "cnname": "梁根棚",
        "mobile": "13426744156",
        "username": "13426744156",
        "groupid": 10,
        "groupname": "开发组",
        "position": "程序员",
        "userpower": "",
        "usercreatetime": "2020-07-09 17:12:57",
        "userupdatetime": "2020-07-09 17:12:57",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 50,
        "cnname": "罗带丽",
        "mobile": "15367332895",
        "username": "ldl",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "软件开发",
        "userpower": "logfind,syssetting",
        "usercreatetime": "2021-05-31 11:16:03",
        "userupdatetime": "2021-08-24 16:45:56",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 51,
        "cnname": "李银香",
        "mobile": "13827083769",
        "username": "lyx",
        "groupid": 10,
        "groupname": "开发组",
        "position": "开发",
        "userpower": "Inventory,workorder,ipblack,userroom,serverfindfornet,telecommanager,flowfind,flowcontrol,wanadd,wanedit,wandel,wanseepass,wanfind,finance,clientmanager,applyvps,checkvpsapply,vpsmanager,cangkumetail,cangkuout,cangkuin,cangkugoods,cangkuclient,cangkusort,logging,roomSetting,dutyfault,dutyme,serverfind,serveradd,serveredit,serverdel,ippooledit,ippooldel,ippooladd,ippoolfind,framefind,frameadd,frameedit,framedel,appfuncpower,logfind,syssetting,userfind,useradd,useredit,userdel,groupdel,groupedit,groupadd,groupfind,说的",
        "usercreatetime": "2021-08-02 09:51:53",
        "userupdatetime": "2021-08-31 15:51:14",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 53,
        "cnname": "梁惠平",
        "mobile": "13415359892",
        "username": "lhp",
        "groupid": 10,
        "groupname": "开发组",
        "position": "",
        "userpower": "serverfindfornet,userroom,ipblack,telecommanager,flowfind,flowcontrol,wanfind,wanadd,wanedit,wandel,wanseepass,applyvps,checkvpsapply,vpsmanager,clientmanager,finance,cangkumetail,cangkuout,cangkuin,cangkugoods,cangkuclient,cangkusort,logging,roomSetting,dutyfault,dutyme,serverfind,serveradd,serveredit,serverdel,ippoolfind,ippooladd,ippooledit,ippooldel,framedel,frameadd,framefind,frameedit,app-func-power,appfuncpower,logfind,syssetting,userfind,useradd,useredit,userdel,groupdel,groupedit,groupadd,groupfind,说的",
        "usercreatetime": "2021-08-04 09:28:59",
        "userupdatetime": "2022-03-16 09:02:47",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 54,
        "cnname": "陈宣",
        "mobile": "13211276856",
        "username": "cx",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "设计",
        "userpower": "",
        "usercreatetime": "2021-08-05 15:53:30",
        "userupdatetime": "2021-08-05 15:53:30",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 56,
        "cnname": "周俊业",
        "mobile": "13435196591",
        "username": "zjy",
        "groupid": 10,
        "groupname": "开发组",
        "position": "开发",
        "userpower": "Inventory,workorder",
        "usercreatetime": "2021-08-13 09:29:02",
        "userupdatetime": "2021-08-13 09:29:02",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 57,
        "cnname": "徐健栋",
        "mobile": "13923082140",
        "username": "happy",
        "groupid": 2,
        "groupname": "系统管理组",
        "position": "开发管理",
        "userpower": "",
        "usercreatetime": "2021-08-20 11:43:17",
        "userupdatetime": "2021-08-20 11:43:17",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      },
      {
        "userid": 58,
        "cnname": "刘美",
        "mobile": "15674821564",
        "username": "liumei",
        "groupid": 10,
        "groupname": "开发组",
        "position": "",
        "userpower": "",
        "usercreatetime": "2021-08-23 14:09:45",
        "userupdatetime": "2022-03-18 11:08:44",
        "userstate": 1,
        "cityid": 1,
        "cityname": "江门"
      }
    ],
  }
}
// 04-018值班故障转交处理
api.dutyFaultProcAdd = (data) => {
  // return request({
  //   url: '/dutyFault/DutyFaultProcAdd',
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
// 04-019值班故障抄送处理
api.dutyFaultCcAdd = (data) => {
  // return request({
  //   url: '/dutyFault/DutyFaultCcAdd',
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
// 04-020追加值班故障的客户反馈
api.dutyFaultClientBackAdd = (data) => {
  return request({
    url: '/dutyFault/DutyFaultClientBackAdd',
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
// 04-021查询处理流信息
api.findProcessingFlow = (data) => {
  // return request({
  //   url: '/dutyFault/findProcessingFlow',
  //   method: 'post',
  //   data
  // })
  return {
    "list": [
      {
        "processUser": "黄焯庆",
        "processMsg": "处理信息处理信息处理信息处理信息处理信息处理信息处理信息处理信息处理信息处理信息",
        "processTime": 145789456
      },
      {
        "processUser": "黄焯庆",
        "processMsg": "处理信息处理信息处理信息处理信息处理信息处理信息处理信息",
        "processTime": 145789456
      }
    ]
  }
}
export default api
