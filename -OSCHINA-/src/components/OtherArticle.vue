<template>
  <div class="otherarticlesbox">
        <div class="otherarticlesHeader"><h3>其他人还在看</h3>
        <a href="https://www.oschina.net/news">更多精彩内容</a></div>
        <div class="otherarticlesContent">
          <div class="otherarticleslist">
            <div class="otherarticles" v-for="(litem,iIndex) in this.$store.state.otherarticle" :key="iIndex">
              <div class="title"><a :href="litem.url" :title="litem.title">{{litem.title}}</a></div>
              <div class="body">{{litem.body}}</div>
              <div class="footer">
                <i class="iconfont">&#xe50d;</i>{{litem.commend}}
                <i class="iconfont">&#xe611;</i>{{litem.collection}}
              </div>
            </div>
          </div>
          <div class="otherarticlesmorebar">
            <div  @click="moreotherarticles()" v-if="this.isMoreHidden" class="morebar">加载更多<i class="iconfont">&#xe606;</i></div>
            <div  v-if='this.isMore'>
              <div class="otherarticles" v-for="(mitem,mIndex) in this.$store.state.moreotherarticle" :key="mIndex">
                <div class="title"><a :href="mitem.url" :title="mitem.title">{{mitem.title}}</a></div>
              <div class="body">{{mitem.body}}</div>
              <div class="footer">
                 <i class="iconfont">&#xe50d;</i>{{mitem.commend}}
                <i class="iconfont">&#xe611;</i>{{mitem.collection}}
              </div>
              </div>
            </div>
          </div>
          <div class="otherarticlescollapse" v-if="!this.isMoreHidden"><a href="https://www.oschina.net/news">查看更多</a></div>
        </div>
      </div>
</template>

<script>
export default {
  data(){
    return{
      isMore:false,
      isMoreHidden:true,
    }
  },
  methods:{
    moreotherarticles(){
      this.isMore=true;
      this.isMoreHidden = false;
    },
    fetch(){
      this.isMore=false,
      this.isMoreHidden = true
    }
  },
  created(){
    this.fetch()
  }
}
</script>

<style>
.otherarticlesbox{
  padding: 32px 40px;
  background-color: #fff;
}
.otherarticlesHeader{
  height: 24px;
  padding-bottom:24px;
  border-bottom:1px solid #ecedee;

}
.otherarticlesHeader a{
  float:right;
  color: #346fb6;
  
}
.otherarticlesHeader a:hover,.otherarticlesContent .morebar:hover{
  cursor: pointer;
  color: #003d86;
}
.otherarticlesHeader h3{
  float: left;
  color: #000;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
}
.otherarticlesContent a{
  color: #000;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
}
.otherarticlesContent a:hover{
  color: #346fb6;
}
.otherarticlesContent .body{
  display: block;
  margin-top: 8px;
  color: #888;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.otherarticles{
  height: 100px;
  padding: 24px 0;
  border-bottom:1px solid #ecedee;
}
.otherarticlesContent .morebar{
  height: 20px;
  text-align: center;
  margin: 24px auto 0;
  color: #346fb6;

}
.otherarticlesContent .footer{
  margin-top: 10px;
}
.otherarticlescollapse{
  width: 725px;
  height: 20px;
  padding: 6px 20px;
  background: #f0f0f0;
  text-align: center;
  margin: 0 auto;
}
.otherarticlescollapse:hover{
  background: #e0e1e2;
}
.otherarticlescollapse a{
  color: #888;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
.otherarticlescollapse a:hover{
    color: #888;
}
</style>