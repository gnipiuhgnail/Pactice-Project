<template>
  <div>{{ count }}</div>
  <div>{{ moduleA.countA }}</div>
  <div>{{date}}</div>
  <div>{{doneTodosCount}}</div>
  <!-- mutation提交风格:载荷方式和对象方式 -->
  <el-button @click="$store.commit('increment',{amount:1})">add</el-button>
  <el-button @click="$store.commit({type:'increment',amount:1})">add</el-button>
  <el-button @click="$store.commit('SOME_MUTATION',{amount:2})">add</el-button>
  <el-button @click="increment({amount:3})">add</el-button>
  <!-- actions也支持的提交风格:载荷方式和对象方式 -->
  <el-button @click="$store.dispatch('incrementAsync',{amount:3})">action</el-button>
  <el-button @click="testActionA">actionA</el-button>
  <el-button @click="actionB">actionB</el-button>
</template>
<script>
import { computed } from '@vue/reactivity'
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
export default {
  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // }

  // 使用 mapState 辅助函数帮助我们生成计算属性:参数对象
  // computed: mapState({
  //   sum: state => state.sum, // 箭头函数
  //   count: 'count', // 传字符串
  //   // ❓ 为了能够使用 `this` 获取局部状态，必须使用常规函数
  // })

  // 使用 mapState 辅助函数帮助我们生成计算属性:参数数组
  // computed: mapState(['sum','count','num'])

  // 使用对象展开符，与局部计算属性混合
  computed: {
    doneTodosCount () {
      return this.$store.getters.doneTodos
    },
    ...mapState(["count"]),
    ...mapGetters(["doneTodos"]),
    date(){
      return 23
    },
  },
  methods:{
    ...mapMutations(['increment']),  // this.increment==this.$store.commit('increment',{amount:1})
    ...mapActions(["incrementAsync","actionB"]),  //   // this.increment==this.$store.dispatch('increment',{amount:1})
    testActionA(){
      this.$store.dispatch('actionA').then(() => {
        console.log("then")
      })
    }
  }
}
</script>
