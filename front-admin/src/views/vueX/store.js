import { createStore } from 'vuex'
const SOME_MUTATION = 'SOME_MUTATION'
import moduleA from "./module/moduleA";
import moduleB from "./module/moduleB";
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 10,
      sum:"sum1",
      num:"num1",
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ]
    }
  },
  // store 的计算属性
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    }
  },
  // 更改Vuex的store中的状态的唯一方法：提交mutation(commit('事件名',载荷(参数)))
  mutations: {
    increment (state, playload) {
      state.count+=playload.amount // 载荷更多情况是一个对象
    },
    // 使用常量替代Mutation事件类型
    [SOME_MUTATION] (state, playload) {
      // state.count+=playload.amount // 载荷更多情况是一个对象
      setTimeout(()=>{
        state.count+=playload.amount
      },1000)
      // mutation 必须是同步函数：虽然修改状态生效，但是使用异步回调函数操作数据，数据的状态改变是不可追踪
    }
  },
  // actions 处理异步事件，提交mutation
  actions: {
    // context具有store 实例相同的方法和属性
    // context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
    // 参数解构context来简化代码
    increment(context){
      context.commit('increment')
    },
    incrementAsync({commit}){
      setTimeout(() => {
        commit('increment',{amount:-5})
      },2000)
    },
    actionA({ commit }){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          console.log("I am ActionA")
          resolve()
        },3000)
      })
    },
    actionB({dispatch,commit}){
      return dispatch('actionA').then(()=>{
        commit('increment',{amount:20})
      })
    }
  },
  // Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块
  modules: {
    moduleA: moduleA,
    moduleB: moduleB
  }
})
export default store