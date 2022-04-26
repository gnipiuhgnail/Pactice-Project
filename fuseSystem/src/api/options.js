import request from '@/utils/request'
const options = {}
// 机房
let room;
options.roomOption = (() => {
  // 如果第一次，则获取
  if (!room) {
    // item = request({
    //     url: '/frame/findRoomDict',
    //     method: 'post',
    //     data
    //   })
    var item = [{
      "roomId": 1,
      "name": "江门 电信 1"
    },
    {
      "roomId": 2,
      "name": "新会 电信 1"
    }
    ]
    room = item.reduce((acc, cur) => {
      acc.push({
        label: `${cur.name}F`,
        value: cur.roomId
      })
      return acc
    }, [])
  }
  // 拼接
  return room
})()
// 获取城市
let city;
options.cityOption = (() => {
  // 如果第一次，则获取
  if (!city) {
    // item = request({
    //     url: '/city/findCity',
    //     method: 'post',
    //     data
    //   })
    var item = [
      {
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
    ]
  }
  city = item
  return city
})()
// 用电类型
options.electronicOption = [{
  label: "直流",
  value: 1,
}, {
  label: "交流",
  value: 2,
}, {
  label: "直流交流通用",
  value: 3,
}, {
  label: "未知",
  value: 4,
}]
// 商务类型
options.financeOption = [{
  label: "本地IDC",
  value: 1,
}, {
  label: "省直签",
  value: 2,
}]
// 状态
options.statusOption = [{
  label: "停用",
  value: 0,
}, {
  label: "启用",
  value: 1,
}]
// IDC客户：?? 应该是向后端获取的
options.clientOption = [
  {
    clientId: '1',
    client: '白云山'
  }
]
// 故障来源 ?? 不确定是否是固定的还是从后端获取的
options.faultSourceOption = [
  {
    label: '电话',
    value: 1,
  }, {
    label: 'QQ',
    value: 2,
  }, {
    label: '微信',
    value: 3,
  }, {
    label: '邮箱',
    value: 4,
  }, {
    label: '企业微信',
    value: 5,
  }, {
    label: '短信',
    value: 6,
  },

]
// 报告类型
options.faultTypeOption = [{
  label: '机器问题',
  value: 1,
}, {
  label: '网络问题',
  value: 2,
}]
// 报告级别
options.faultLevelOption = [{
  label: '一般',
  value: 1,
}, {
  label: '重要',
  value: 2,
}]

export default options
