<template>
  <div class="columnitem">
    <div class="columnitemtitle"><h3>精彩专栏</h3></div>
    <div class="columnitemlist">
      <div v-for="(citem,cIndex) in this.cplumnitem" :key="cIndex" class="citem" :style="`border:1px solid ${citem.color}`">
      <div class="itemheader" :style="`background-image:url(${citem.bgstyle});`">
      <img :src="citem.iconpic" alt="">
      <div class="headertitle">{{citem.header}}</div>
      <div style="float: right;">
        <a href="citem.moreurl" :title="citem.more+citem.header">{{citem.more}}</a>
      </div>
    </div>
    <div class="itembody">
      <div class="itemcontainer">
        <div v-for="(article,ArIndex) in citem.articles" :key="ArIndex">
          <h3><a :href="article.url" :title="article.title">{{article.title}}</a></h3>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      cplumnitem:this.$store.state.cplumnitem
    }
  }
}
</script>

<style>
.columnitem{
  width: 272px;
  height: 658.6px;
  padding: 24px;
  background-color: #fff;
  border-radius: 5px;
}
.columnitemtitle{
  width: 272px;
  height: 21.818px;
  padding-bottom: 8px;
  border-bottom:1px solid rgb(236, 237, 238);
}
.columnitemtitle h3{
  font-size: 16px;
  font-weight: 500;
  color: #111;
}
.itemheader{
  height: 19px;
  padding: 10px 16px;
}
.itembody{
  width: 238px;
  height: 76px;
  padding: 12px 16px;
}
.itemheader a{
  float: right;
  font-size: 12px;
  color:#fff;
}
.itemheader img{
  float: left;
}
.headertitle{
  float: left;
  color:#fff;
  font-weight:600;
  margin-left:10px;
  font-size: 16px;
}
.citem{
  width:272px;
  height:141px;
  border-radius: 5px;
  margin-top: 15px;
}
.itemcontainer h3{
  color: rgb(17, 17, 17);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom:7px
}
.itemcontainer a{
  color: rgb(17, 17, 17);
}
.itemcontainer{
  width: 238px;
  height: 76px;
  
}
</style>