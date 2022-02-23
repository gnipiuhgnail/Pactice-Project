// Mock.mock( rurl?, rtype?, template|function( options ) )
import Mock, { Random } from 'mockjs'
const conponentlist = Mock.mock({
  'err':0,
  'code':null,
  'data|20':[{
    'id':'@increment()',
    'age|1-100': 1,
    'name': '@cname()'
  }]
})
const conponentMock = [
  Mock.mock('/getperson','get', () => {
    return conponentlist
  }),
  Mock.mock('/findone','get', (option)=>{
    const person = conponentlist.data.find((item)=>{
      if(option.body == item.id){
        return item
      }
    })
    return person
  }),
  Mock.mock('/postperson','post',(options)=>{
    if(isSucess){
      console.log("isSucess")
      return {
        msg: "添加成功"
      }
    }
  })
]
export default conponentMock