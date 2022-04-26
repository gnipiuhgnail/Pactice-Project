const Mock = require('mockjs')

const suppilerList = Mock.mock({
    'list|10': [{
        'cityId|+1': 1,
        'netSupplierName|1': ["江门电信", "惠州电信", "广州电信", "深圳电信", "佛山电信"],
        'netSuppilerType|1': ["电信", "移动", "联通"],
        'suppilerWanId|1': [0, 1],
        'suppilerWanName|1': "5F-CE12816",
        'memo|1': ""
    }]
})

module.exports = [
    {
        url: "/netSupplier/saveSupplierWan",
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
                suppilerList.list.forEach((element, index) => {
                    if (JSON.stringify(element).indexOf(findStr) >= 0) {
                        resultArr.push(element)
                    }
                });
            } else {
                resultArr = suppilerList.list
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
    }
]