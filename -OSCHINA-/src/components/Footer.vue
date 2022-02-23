<template>
  <div class="appfooterbox">
    <div class="appfooter">
      <div class="appfootercontainer">
      <div class="community">
        <h4>OSCHINA社区</h4>
          <div class="listitem">
            <a href="https://www.oschina.net/home/aboutosc">关于我们</a>
            <a href="https://www.oschina.net/home/aboutosc">联系我们</a>
            <a href="https://www.oschina.net/news/131099/oschina-hiring">加入我们</a>
            <a href="https://www.oschina.net/home/aboutosc#partners">合作伙伴</a>
            <a href="https://www.oschina.net/openapi">Open API</a>
          </div>
        </div>
      <div class="onlinetools">
        <h4>在线工具</h4>
          <div class="listitem">
            <a href="https://gitee.com/?utm_source=oschina&amp;utm_medium=link-bottom&amp;utm_campaign=home">Gitee.com</a>
            <a href="https://gitee.com/enterprises?utm_source=oschina&amp;utm_medium=link-bottom&amp;utm_campaign=enterprises">企业研发管理</a>
            <a href="https://copycat.gitee.com/?utm_source=oschina&amp;utm_medium=link-bottom&amp;utm_campaign=copycat">CopyCat-代码克隆检测</a>
            <a href="https://tool.oschina.net">实用在线工具</a>
            <a href="https://oscimg.oschina.net/oscnet/up-82a1d21cdcbd86bf819ffd854dc0f1c6d72.png" style="color:#d60000">国家反诈骗中心APP下载</a>
          </div>
        </div>
      <div class="qqgroup">
        <h4>QQ交流群</h4>
        <a href="https://jq.qq.com/?_wv=1027&k=rfiPgVgE">
          <img src="https://static.oschina.net/new-osc/img/qq_qrcode_2_new.png" alt="">
        </a>
        <a href="https://jq.qq.com/?_wv=1027&k=rfiPgVgE">530688128</a>
        </div>
      <div class="wechat">
        <h4>微信公众号</h4>
        <img src="https://static.oschina.net/new-osc/img/wechat_qrcode.jpg?t=1484694603000" alt="">
        </div>
      <div class="downloadapp">
        <h3>OSCHINA APP</h3>
        <p>聚合全网技术文章，根据你的阅读喜好进行个性推荐</p>
        <a href="https://www.oschina.net/app">下载 APP</a>
        </div>
    </div>
    </div>
    <div class="copyright">
      <div class="copyrightcontainer">
        <div class="copyrightleft">
        <div>©OSCHINA(OSChina.NET)</div>
        <div>工信部</div>
        <a href="http://www.copu.org.cn/" title="开源软件推进联盟">开源软件推进联盟</a>
        <div>指定官方社区</div>
      </div>
      <div class="copyrightright">
        <div>深圳市奥思网络科技有限公司版权所有</div>
        <a href="http://beian.miit.gov.cn/">粤ICP备12009483号</a>
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
.appfooterbox{
  width: 1515.2px;
  
}
.appfooter{
  height: 163.1px;
  padding: 28px 0;
  border-top: 1px solid rgba(0,0,0,.05);
  background-color: #fff;
}
.appfootercontainer{
  width: 1248px;
  margin: 0 auto;
}

.community{
  width: 206px;
}
.onlinetools{
  width: 284px;
}
.qqgroup{
  width: 128px;
  margin: 0 auto;
}
.wechat{
  width: 128px;
}
.qqgroup img{
  width: 60px;
  height: 60px;
  margin: 2px;
  margin-bottom: 14px;
}
.qqgroup a{
  color: #ccc;
  display: block;
  font-size: 12px;
}
.wechat img{
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
}
.wechat h4,.qqgroup h4,.qqgroup a{
  text-align: center;
}

.downloadapp{
  width: 362px;
}
.community,.onlinetools,.qqgroup,.wechat,.downloadapp{
  float: left;
  padding: 14px;
  height: 135.06px;
}
.appfooter h4{
  margin: -2.143px 0 14px;
  height: 19.2px;
}
.appfooter .listitem a{
  display: block;
  color: #9999b3;
  margin-bottom: 4px;
}
.appfooter .listitem a:hover{
  color: #333333;
}
.downloadapp h3{
  font-size: 18px;
  margin: -2.571px 0 14px;
}
.downloadapp{
  text-align: center;
}
.downloadapp a{
  width: 67.575px;
  height: 15.98px;
  padding: 10px 24px;
  margin: 4px;
  font-size:16px;
  color: #fff;
  border-radius: 3px;
  background-color: #21b351;
}
.downloadapp p {
  margin-bottom: 28px;
}

.copyright{
  width: 1515px;
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.copyrightcontainer{
  /* display: block; */
  width: 1220px;
  margin: 0 auto;
}
.copyrightcontainer div{
  height: 32px;
}
.copyrightleft{
  width: 475.8px;
  float: left;
}
.copyrightright{
  width: 395.7px;
  float: right;
}
.copyrightleft div,.copyrightleft a{
 color: #959595;
  float: left;
  padding: 3px 0;
  margin-right: 13px;
}
.copyrightright div,.copyrightright a{
 color: #959595;
  float: left;
  padding: 3px 0;
  margin-left: 13px;
}
.copyrightleft a:hover,.copyrightright a:hover{
  color: #323232;
}

</style>