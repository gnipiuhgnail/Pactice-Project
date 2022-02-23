<template>
<el-button @click="$router.push('/vueX/testoption')">option示例</el-button>
<el-button @click="$router.push('/vueX/testcomposition')">composition示例</el-button>
  <p>安装和引入</p>
  <pre>
    yarn add vueX(注意版本问题)
    yarn add vuex@next --save
    import Vuex from 'vuex'
    Vue.use(Vuex)
  </pre>
  <p>创建一个store</p>
  <pre>
    new Vuex.Store({
      state:
      getters:
      mutations:
      actions:
    })
  </pre>
</template>