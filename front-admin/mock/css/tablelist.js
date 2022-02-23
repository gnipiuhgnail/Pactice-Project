import Mock, { Random } from 'mockjs'
const tablelist = Mock.mock({
  'err':0,
  'code':null,
  'data': {
    'policyList|30':[
      {
      "policyName|1": "@string(5)",
      "color": "@natural(-2,25)"
      }
    ],
    'allPortList|12': [
      {
        "portName|+1": 101,
        "color": "@natural(-2,25)"
      }
    ]
  }
})
const tableMock = [
  Mock.mock('/css/layout','get', () => {
    return tablelist
  })
]
export default tableMock
