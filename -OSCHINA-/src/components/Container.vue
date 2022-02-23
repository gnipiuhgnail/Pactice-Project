<template>
  <div class="container">
    <div class="breadcrumb">
      <span><a href="">开源资讯</a></span><i>/</i>
      <span><a href="">{{this.$store.state.article.keyword}}</a></span><i>/</i>
      <span style="breadcrumbthird">正文</span>
    </div>
    <div class="mainbox">
      <Mainbox></Mainbox>
      <Commend style="margin:24px 0;"></Commend>
      <OtherArticle></OtherArticle>
    </div>
    <SidebarBox style="margin-left:24px;vertical-align: top;"></SidebarBox>
  </div>
</template>

<script>
import Mainbox from '@/components/Mainbox.vue'
import Commend from '@/components/Commend.vue'
import OtherArticle from '@/components/OtherArticle'
import SidebarBox from '@/components/SidebarBox'
export default {
  name: 'Container',
  components: {
   Mainbox,
   Commend,
   OtherArticle,
   SidebarBox,
    }
  }
</script>

<style>
.container{
  width: 1200px;
  color: #999;
}
.container a{
  cursor: pointer;
}
.breadcrumb{
  height: 36px;
}
.breadcrumb a{
  margin:0 3px;
  color: #999;
}
.breadcrumb i{
  margin: 0 5px;
}
.breadcrumb a:hover{
  color: #666;
}
.mainbox{
  /* float: left; */
  display: inline-block;
  width: 856px;
  
}




</style>