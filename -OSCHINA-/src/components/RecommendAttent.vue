<template>
  <div class="recommendedattent">
    <div class="attent">
      <div class="recommendtitle"><h3>推荐关注</h3></div>
    <div class="others"><i class="iconfont">&#xe506;</i></div>
    </div>
    <div class="attentlist">
      <div class="attentitem" v-for="(attent,attentIndex) in commendattent" :key="attentIndex">
        <div class="attentimg"><a href="attent.url"><img :src="attent.img" alt=""></a></div>
        <div  class="attentbody">
          <div><a href="attent.url">{{attent.name}}</a></div>
          <div v-if="attent.container">{{attent.container}}</div>
          <div v-else>文章&nbsp;{{attent.article}}<span style="width:16px;height:10px;display:inline-block"></span>访问&nbsp;{{attent.visit}}W</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      commendattent:this.$store.state.commendattent
    }
  }
}
</script>

<style>
.recommendedattent{
  width: 272px;
  padding:24px;
  
  background-color: #fff;
  border-radius: 5px;
  margin-top: 24px;
}
.attent{
  height: 21.6px;
  padding-bottom: 8px;
  border-bottom:1px solid rgb(236, 237, 238);
}
.recommendtitle{
  float: left;
}
.recommendtitle h3{
  font-size: 16px;
  font-weight: 500;
  color: #111;
}
.others{
  float: right;
}
.attentitem{
  margin-top: 20px;
}
.attentimg{
  float: left;
}
.attentimg img{
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}
.attentbody a{
  color: #111;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}
</style>