<template>
  <div class="headersecond">
    <div class="newstitle">
      <a href="https://www.oschina.net/news" title="开源资讯">开源资讯</a>
    </div>
    <div class="search">
      <input type="text" placeholder="大家都在搜...">
      <button><i class="iconfont">&#xe50a;</i></button>
    </div>
    <div class="extra">
      <a href="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fhome%2Fgo%3Fpage%3Dadmin%2Fpublish">
      <i class="iconfont">&#xe6b7;</i>投递新闻</a>
    </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headersecond{
  padding-top: 24px;
  width: 1200px;
  height: 80px;
  margin:0 auto;

}
.headersecond .newstitle a{
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  color: #21b351;
}
.newstitle{
  float: left;
}
.search{
  width: 300px;
  height: 32px;
  line-height: 32px;
  float: right;
}
.search input{
  width: 260px;
  height: 32px;
  padding: 6px 10px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: none;
  border-radius: 0;
  color: #999999;
  border-radius: 5px 0 0 5px;
  /* 解决input和button不对齐 */
  box-sizing: border-box;
  vertical-align: top;
}
.search button{
  width: 40px;
  height: 32px;
  border:0;
  background-color: #c9c9c9;
  color: #fff;
  border-radius: 0 5px 5px 0;
  font-weight:600;
}
.extra{
  width: 106px;
  height: 32px;
  margin-right: 28px;
  float: right;
  background-color: #21b351;
  border-radius: 5px;
   cursor: pointer;
  text-align: center;
}
.extra a{
  color: #fff;
  font-size: 14px;
  line-height: 32px;
}

</style>