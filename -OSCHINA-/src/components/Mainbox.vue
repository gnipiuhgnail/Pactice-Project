<template>
  <div class="mainboxbody">
        <div class="mainlabel">
        <a href="http://www.easylaa.com/Register/default.aspx?code=ead10fd448c0408c93377150421a1d72&s=7409&smid=946">
          <img src="https://static.oschina.net/uploads/cooperation/news_detail_left_banner_1_CgMBE.jpg" alt="">
        </a>
      </div>
      <div class="maininner">
        <div class="mainheader">
          <div class="mainheadertitle"><a :href="this.$store.state.article.title.url">{{this.$store.state.article.title.name}}</a></div>
          <div class="mainheadermate">
            <div class="listitem">
              <div class="item">来源：OSCHINA</div>
              <div class="item">编辑：<a :href='this.$store.state.article.authorurl'>{{this.$store.state.article.author}}</a></div>
              <div class="item">{{this.$store.state.article.time}}</div>
              <div class="item"> <i class="iconfont">&#xe50d;</i><span>{{this.$store.state.sharecount}}</span></div>
            </div>
          </div>
        </div>
      <div class="mainbody">
        <div class="adwrap">
          <a href="https://www.microsoft.com/china/azure/hackathon/index.html?trackcode=osccommu">极客们，请收下2021 微软 x 英特尔黑客松大赛英雄帖！>>></a>
          <img src="https://www.oschina.net/img/hot3.png" alt="">
        </div>
        <!-- Avoid using non-primitive value as key, use string/number value instead. -->
        <!-- 不要用对象或是数组作为key，用string或value作为key我们可以将key的值改为 adIndex ;即可 -->
        <div v-for="(aitem,aIndex) in this.$store.state.article.body" :key="aIndex">
            <!-- <p v-if="item.img"><img :src="item.img" alt="" style="width:620px"></p> -->
            <p v-html="aitem">{{aitem}}</p>
        </div>
        <div class="mainbodylinks">
          <h3 style="color:#111">相关链接</h3>
          <ul>
          <li>{{this.$store.state.article.keyword}}的详细介绍：<a href="https://www.oschina.net/p/visual-studio-code">点击查看</a></li>
          <li>{{this.$store.state.article.keyword}}的详细地址：<a href="https://www.oschina.net/home/login?goto_page=https://www.oschina.net/news/141711/python-programming-in-vs-code-is-now-faster">点击下载</a></li>
          </ul>
        </div>
        <div class="gitbox">
          <div class="gitboxheader">
            <div class="githandleft">
              <img src="https://gitee.com/static/images/logo-en.svg" alt="">
              <a :href="this.$store.state.gitbox.title.url"><h3>{{this.$store.state.gitbox.title.name}}</h3></a>
            </div>
            <div class="githandright">
              <a :href="this.$store.state.gitbox.title.url"><span style="color:#888">Star 29</span></a><span style="margin:0 5px">|</span><a :href="this.$store.state.gitbox.title.url"><span style="color:#888">Fork 7</span></a>
            </div>
          </div>
          <div class="gitboxbody">
            <p>{{this.$store.state.gitbox.body}}</p>
            <div>
              <b>
                <a href="">最近提交：</a>
              </b>
              <ul>
                <li v-for="(gitem,gIndex) in this.$store.state.gitbox.recenthand" :key="gIndex">
                  <div class="githandleft">
                    <a :href="gitem.url">{{gitem.id}}</a>
                    <a :href="gitem.url">{{gitem.name}}</a>
                  </div>
                  <div class="githandright">
                    <a :href="gitem.mailtourl">{{gitem.mailtoname}}</a>
                    <span style="color:#888">{{gitem.time}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="gitboxfooter">
            <div class="githandleft"><a :href="this.$store.state.gitbox.title.url">master分支</a><span>{{this.$store.state.gitbox.time}}</span></div>
            <div class="githandright"><a :href="this.$store.state.gitbox.title.url">源码下载</a></div>
          </div>
        </div>
        <div class="copyrightbox">
          <p>本站新闻禁止未经授权转载，违者依法追究相关法律责任。授权请联系：<a href="mailto:oscbianji@oschina.cn">oscbianji#oschina.cn</a></p>
          <p><span class="label">本文标题：</span>微软：VS Code 是性能和体验最好的 Python 代码编辑器</p>
          <p><span class="label">本文地址：<a :href="this.$store.state.article.title.url">{{this.$store.state.article.title.url}}</a></span></p>
        </div>
        <div class="contactionbox">
          <div><a href=""><i class="iconfont">&#xe611;</i></a><p><span>{{this.$store.state.storecount}}</span>收藏</p></div>
          <div><a href=""><i class="iconfont actionshare">&#xe61c;</i></a><p>分享</p></div>
        </div>
        <div class="recommendbox">
          <h3>热门文章</h3>
          <div class="recommendlist">
            <div v-for="(ritem,rIndex) in this.$store.state.recommend" :key="rIndex"><a :href="ritem.url" :title="ritem.title">{{ritem.title}}</a></div>
          </div>
        </div>
      </div>
      </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.mainboxbody{
  /* height: 1900px; */
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 3px 3px 5px #edeeef;

  /* background-color: red; */
}
.maininner{
  width: 776px;
  /* height: 1700px; */
  padding: 40px;
  margin-top: 30px;
}
.mainheadertitle a{
  font-size: 30px;
  line-height: 42px;
  font-weight: 600;
  color: #111;
}
.listitem{
  width:776px;
  height: 20px;
  margin: 18px 0 20px;
}
.listitem .item{
  float: left;
  margin-right: 20px;
}
.listitem .item a{
  color: #999;
}
.listitem .item a:hover{
  color: #666;
}
.mainbody p{
  width: 778px;
  margin-top:10px;
  display: block;
  color: #333;
  font-size: 16px;
  line-height: 28px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.mainbody p img {
    max-width: 100%;
}
.mainbody a{
  color: #346fb6;
}
.adwrap a{
  font-size: 16px;
  color: #A00;
    font-weight: bold;
}
.mainbodylinks{
  height: 48px;
}
.mainbodylinks ul{
  margin-top: 18px;
}
.mainbodylinks li{
  list-style:square inside;
  margin: 10px 8px;
}
.gitbox{
  margin-top:60px;
  border:1px solid #dadada;
  border-radius:3px;
}
.gitbox p{
  font-size: 14px;
}
.gitbox a{
  color: #9B9B9B;
}
.gitbox a:hover{
  color:#003d86
}
.gitboxheader img{
  float: left;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.gitboxheader h3{
  float: left;
  height: 20px;
  font-weight: 400;
  color: #000;
}
.gitboxheader{
  padding: 13px 15px;
  height: 20px; 
  line-height: 20px;
  background-color: #f9f9f9;
}
.gitboxheader span{
  display: inline-block;
}
.gitboxbody{
  padding: 7px 15px 8px;

  color: #9B9B9B;
  border-top:1px solid #dadada;
  border-bottom:1px solid #dadada;

}
.gitboxbody ul a{
  margin-right: 10px;
}
.gitboxbody p{
  color: #9B9B9B;
  padding:0 10px 15px 0;
  margin: 0;
}
.mainbody p img{
  width: 628px;
  height: 269.7px;
}
.gitbox li{
  margin-top: 1px;
  height: 19.7px;
}
.githandleft{
  float: left;
}
.githandright{
  float: right;
}
.gitboxfooter{
  height: 28px;
  line-height: 28px;
  padding: 5px 15px;
}
.copyrightbox{
  margin: 30px 0 24px;
}
.copyrightbox p{
  margin: 0;
  color: #888;
  font-size: 14px;
  height: 19.2px;

}
.copyrightbox a{
  color: #888;
}
.copyrightbox a:hover{
  color: #666;
}

.actionshare{
  color: #21b351;
  
}
.contactionbox{
  height: 101px;
  border-top: 1px solid #ecedee;
  /* width: 300px; */
  padding: 24px 247px 0;
}
.contactionbox p{
  font-size: 14px;
  color: #888;
}
.contactionbox div{
  float: left;
  width: 48.5px;
  height: 76px;
  margin: 0 45px;
}
.contactionbox a{
  display: block;
  width: 48px;
  height: 48px;
  font-size: 18px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #ecedee;
  border-radius: 50%;
  color: #858585;
  line-height: 48px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px #ededed;
}

.contactionbox i{
  font-size: 18px;
}
.contactionbox a:hover{
  width: 48px;
  height: 48px;
  border: 0;
  box-shadow: 0 0 15px #ccc7c7;
}
.recommendbox h3{
  color: #000;
  font-weight: 500;
  margin-bottom: 18px;
}
.recommendbox div{
  margin-bottom: 10px;
}
.recommendbox a{
  height: 17.78px;
  font-size:14px;
}
</style>