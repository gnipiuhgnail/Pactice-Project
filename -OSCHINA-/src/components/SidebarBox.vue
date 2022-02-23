<template>
    <div class="sidebarbox">
      <div class="adbox"><a href="https://developer.aliyun.com/article/784074?utm_content=g_1000271438"><img src="https://static.oschina.net/uploads/cooperation/news_detail_right_sidebar_1_ieeEB.png" alt=""></a></div>
      <CplumnItem style="margin:24px 0"></CplumnItem>
      <div class="adbox"><a href="https://summer.iscas.ac.cn/"><img src="https://static.oschina.net/uploads/cooperation/news_detail_right_sidebar_2_UUlCH.png" alt=""></a></div>
      <LinkCard></LinkCard>
      <RecommendAttent></RecommendAttent>
    </div>
</template>

<script>
import CplumnItem from '@/components/CplumnItem.vue'
import LinkCard from '@/components/LinkCard.vue'
import RecommendAttent from '@/components/RecommendAttent.vue'
export default {
  name: 'SidebarBox',
  components:{
    CplumnItem,
    LinkCard,
    RecommendAttent
  },
}
</script>

<style>
.sidebarbox{
  width: 320px;
  display: inline-block;
}
.adbox img{
  width: 320px;
  height: 250px;
}
</style>