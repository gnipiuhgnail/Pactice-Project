const { config } = require("@vue/test-utils")
const Mock = require('mockjs')

const tokens = {
    "admin": "admin"
}

Mock.Random.extend({
    phone: function () {
        var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})

const userList = Mock.mock({
    'list|10': [{
        "id|+1": 1,
        "uname|1": ["pwx", "laozi", "pjc", "yjj", "hjf"],
        "cname|1": ["潘伟笑", "老紫", "潘家陈", "俞佳杰", "黄金风"],
        "group|1": ["财务部", "运维部", "研发部", "综合部", "销售部"],
        "status|1": [1, 2],
        "createDate": '@datetime',
        "tel|1": "@phone"
    }]
})

// const app=[{
//     "name":"系统设置",
//     "url":"/system",
//     "children":[{"name":"用户管理","url":"/user"},
//     {"name":"应用管理","url":"/app"},
//     {"name":"日志中心","url":"/log"}]
// },
// {
//     "name":"机房管理",
//     "url":"/system",
//     "children":[{"name":"用户管理","url":"/user"},
//     {"name":"应用管理","url":"/app"},
//     {"name":"日志中心","url":"/log"}]
// },
// ]
const permission = {}

const group = {
    "财务部": { "explain": "主要负责财务结算", "permission": ["用户管理", "组别管理"] },
    "行政部": { "explain": "主要管理单位日常事务", "permission": ["用户管理", "组别管理"] }
}


Mock.mock({
    'list|5': [{
        "id|+1": 1,
        "uname|1": ["pwx", "laozi", "pjc", "yjj", "hjf"],
        "cname|1": ["潘伟笑", "老紫", "潘家陈", "俞佳杰", "黄金风"],
        "group|1": ["财务部", "运维部", "研发部", "综合部", "销售部"],
        "status|1": [1, 2],
        "createDate": '@datetime',
        "tel|1": "@phone",
        "memo": ''
    }]
})


const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

module.exports = [
    // user login
    {
        url: '/login',
        type: 'post',
        response: config => {
            console.log('1')
            const { username, password } = config.body
            const token = tokens[username] == password

            // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: '用户名或密码错误.'
                }
            }

            return {
                "code": "000000",
                "data": {
                    "frontendPrivilegeList": [{
                        "children": [
                            {
                                "children": [],
                                "createDate": "2020-07-08 11:40:42",
                                "frontendId": 4,
                                "icon": "SMILE",
                                "menuIndex": 4,
                                "menuName": "用户管理",
                                "menuStatus": 2,
                                "parent": null,
                                "parentId": 1,
                                "urlPath": "/user"
                            },
                            {
                                "children": [],
                                "createDate": "2020-07-10 16:37:01",
                                "frontendId": 5,
                                "icon": "",
                                "menuIndex": 3,
                                "menuName": "用户组管理",
                                "menuStatus": 1,
                                "parent": null,
                                "parentId": 1,
                                "urlPath": "/group"
                            }

                        ],
                        "createDate": "2020-07-08 11:27:27",
                        "frontendId": 1,
                        "icon": "SMILE",
                        "menuIndex": 0,
                        "menuName": "系统设置",
                        "menuStatus": 2,
                        "parent": null,
                        "parentId": 0,
                        "urlPath": "/system"
                    },
                    {
                        "children": [
                            {
                                "children": [],
                                "createDate": "2020-07-08 11:38:09",
                                "frontendId": 3,
                                "icon": "SMILE",
                                "menuIndex": 0,
                                "menuName": "网络拓扑图",
                                "menuStatus": 2,
                                "parent": null,
                                "parentId": 2,
                                "urlPath": "/topology"
                            },
                            {
                                "children": [],
                                "createDate": "2020-07-08 11:38:09",
                                "frontendId": 4,
                                "icon": "SMILE",
                                "menuIndex": 0,
                                "menuName": "设备管理",
                                "menuStatus": 2,
                                "parent": null,
                                "parentId": 2,
                                "urlPath": "/device"
                            },
                            {
                                "children": [],
                                "createDate": "2020-07-08 11:38:09",
                                "frontendId": 5,
                                "icon": "SMILE",
                                "menuIndex": 0,
                                "menuName": "网络供应商",
                                "menuStatus": 2,
                                "parent": null,
                                "parentId": 2,
                                "urlPath": "/supplier"
                            }
                        ],
                        "createDate": "2020-07-08 11:28:02",
                        "frontendId": 2,
                        "icon": "SMILE",
                        "menuIndex": 0,
                        "menuName": "网络拓扑",
                        "menuStatus": 2,
                        "parent": null,
                        "parentId": 0,
                        "urlPath": "/network"
                    }
                    ],
                    "token": "iufsz0ipeq6vs8d74v6a47h4tqxlzpbfgld5j1okb33ddn3mcourksq9mzd8d100"
                },
                "msg": "调用成功"
            }
        }
    },

    // user logout
    {
        url: '/system/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: "000000",
                msg: '退出成功'
            }
        }
    },

    //

    {
        url: '/system/user/findUser',
        type: 'post',
        response: config => {
            // var startDate = new Date();
            // while (true) {
            //     var endDate = new Date();
            //     if (endDate.getTime() - startDate.getTime() > 1000) {
            //         break;
            //     }
            // }
            let result = {}
            result.list = []
            let resultArr = []
            console.log(config.body)
            const page = config.body.page || 1
            const rows = config.body.rows || 10
            const findStr = config.body.findStr || ''
            console.log(findStr);
            if (findStr) {
                userList.list.forEach((element, index) => {
                    if (JSON.stringify(element).indexOf(findStr) >= 0) {
                        resultArr.push(element)
                    }
                });
            } else {
                resultArr = userList.list
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
        url: '/system/user/delUser',
        type: 'post',
        response: config => {
            const id = config.body.id
            userList.list.forEach((element, index) => {
                if (element.id == id) {
                    userList.list.splice(index, 1)
                }
            });
            return {
                code: "000000",
                msg: '删除成功'
            }
        }
    },
    {
        url: '/system/user/addUser',
        type: 'post',
        response: config => {
            const addObj = config.body
            addObj.id = (userList.list[userList.list.length - 1].id + 1)
            userList.list.push(addObj)
            return {
                code: "000000",
                msg: '添加成功'
            }
        }
    },
    {
        url: '/system/user/findGroup',
        type: 'post',
        response: config => {
            let groupArr = []
            for (const key in group) {
                groupArr.push({ "label": key })
            }
            return {
                code: "000000",
                data: groupArr,
                msg: '添加成功'
            }
        }
    },
]