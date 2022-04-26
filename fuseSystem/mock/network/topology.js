module.exports = [{
    url: '/network/getData',
    type: 'post',
    response: _ => {
        const time = Math.ceil(Math.random() * 10)
        console.log(time)
        return {
            code: '000000',
            msg: '退出成功',
            'data': {
                id: '1',
                name: time,
                flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                flowIn: Math.ceil(Math.random() * 6000) + 'm/s',
                // name:  "总网关\n111",
                optionType: 'device',
                children: [{
                    id: '2',
                    name: '5F-CE12816',
                    optionType: 'device',
                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s',
                    children: [{
                            id: '3',
                            name: 'CE12816A',
                            optionType: 'gateway',
                            flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                            flowIn: Math.ceil(Math.random() * 6000) + 'm/s',
                            children: [{
                                    id: '7',
                                    name: 'InLoopBack0',
                                    optionType: 'port',
                                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s'
                                },
                                {
                                    id: '8',
                                    name: 'InLoopBack0',
                                    optionType: 'port',
                                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s'
                                },
                                {
                                    id: '9',
                                    name: 'MEth0/0/0',
                                    optionType: 'port',
                                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s'
                                },
                                {
                                    id: '10',
                                    name: 'Sip17/0/0',
                                    optionType: 'port',
                                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s'
                                },
                                {
                                    id: '11',
                                    name: 'Sip18/0/0',
                                    optionType: 'port',
                                    flowOut: Math.ceil(Math.random() * 10000) + 'm/s',
                                    flowIn: Math.ceil(Math.random() * 6000) + 'm/s'
                                }
                            ]
                        },
                        {
                            id: '4',
                            name: 'CE12816B',
                            optionType: 'gateway'
                        },
                        {
                            id: '5',
                            name: '移动CE6851-HI',
                            optionType: 'gateway'
                        },
                        {
                            id: '6',
                            name: 'CE12808S-1',
                            optionType: 'gateway'
                        }
                    ]
                }]
            }
        }
    }
}]
