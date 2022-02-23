import Mock, { Random } from 'mockjs'
const echartlist = Mock.mock({
  'err':0,
  'code':null,
  'data': {                
    'inPortList|12':[
      {
      "inPortName|1": "@string(5)",
      "msg|3-7": [
        {
          "part|1-100": 1,
          "color|1-25": 1
        }
      ]
      }
    ],
    'outPortList|30': [
      {
        "outPortName|+1": 101,
        "color": "@natural(-2,10)"
      }
    ]
  }
})
const echartMock = [
  Mock.mock('/css/echart','get', () => {
    return echartlist
  })
]
export default echartMock
