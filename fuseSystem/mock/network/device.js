const Mock = require('mockjs')

const tokens = {
    "admin": "admin"
}

const deviceList = Mock.mock({
    'list|10': [{
        "brand|1": ["CE12816A", "DELL R610", "移动CE6851-HI", "CE12808S-1", "东莞电信CE12816D"],
        "createDate": '@datetime',
        "customerId|+1": 1,
        "frameRack": ["江门 / 电信 / 15F", "江门 / 火炬园 / 1F", "江门 / 电信 / 13F", "惠州 / 电信 / 5F", "江门 / 紫茶 / 2F"],
        "meno|1": "",
        "scanflag|1": [0, 1],
        "size|1": 1,
        "sn|1": "5F-CE12816",
        "wanId|1": 0,
        "wanIp|1": ["114.114.114.114", "113.96.138.253", "183.232.132.74", "183.232.133.162", "113.96.103.254"],
        "wanName|1": ["联通9306a", "华为12816", "华为CE6851-48S6Q-HI", "华为 CE12808S", "华为 S5720-56C-EI"],
        "wanPassword|1": "123456",
        "wanType|1": 1
    }]
})

module.exports = [
    {
        url: "/device/saveWan",
        type: "post",
        response: config => {
            let result = {}
            result.list = []
            let resultArr = []
            console.log(config.body)
            const page = config.body.page || 1
            const rows = config.body.rows || 10
            const findStr = config.body.findStr || ''
            console.log(findStr);
            if (findStr) {
                deviceList.list.forEach((element, index) => {
                    if (JSON.stringify(element).indexOf(findStr) >= 0) {
                        resultArr.push(element)
                    }
                });
            } else {
                resultArr = deviceList.list
            }
            result.total = resultArr.length
            if (resultArr.length > rows) {
                for (let index = rows * (page - 1); index < page * rows; index++) {
                    result.list.push(resultArr[index])
                }
            } else {
                result.list = resultArr
            }

            return {
                code: "000000",
                data: result,
                msg: '查找成功'
            }
        }
    },
    {
        url: '/device/delWan',
        type: 'post',
        response: config => {
            const id = config.body.id
            deviceList.list.forEach((element, index) => {
                if (element.id == id) {
                    deviceList.list.splice(index, 1)
                }
            });
            return {
                code: "000000",
                msg: '删除成功'
            }
        }
    },
]