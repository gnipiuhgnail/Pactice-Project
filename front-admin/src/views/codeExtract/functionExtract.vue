// 代码收集
<template>
  <p>摘抄自VueX的购物车示例。</p>
  <pre>
    // cb是函数，和(_products)构成立即执行函数
    shop.js
    getProducts (cb) {
      setTimeout(() => cb(_products), 100)
    },
    
    products.js
    getProducts(products => {
      commit('setProducts', products)
    })

    <!-- 需求是： -->
    (products => {
      commit('setProducts', products)
    })(_products)
  </pre>
</template>