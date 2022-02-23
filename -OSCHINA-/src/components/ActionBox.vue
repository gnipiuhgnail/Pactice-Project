<template>
  <div class="actionbox">
      <div class="circle"><a href="#comments"><i class="iconfont">&#xe50d;</i></a><p><span>{{this.$store.state.sharecount}}</span>评论</p></div>
      <div class="circle" @click="login()"><i class="iconfont">&#xe611;</i><p><span>{{this.$store.state.storecount}}</span>收藏</p></div>
      <div class="circle" @click.stop="share($event)"><i class="iconfont">&#xe61c;</i><p>分享</p></div>
      <!-- 收藏-登录 -->
      <div class="loginmain" v-if="this.islogin">
        <div class="dialog">
        <div class="tabsclose" @click="close()">
          <svg class="iconclose" width="14" height="14" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(45 27.724 12.303)" fill="currentColor" fill-rule="evenodd" opacity=".6"><rect transform="rotate(90 23.42 23.207)" x=".42" y="22.207" width="46" height="2" rx="1"></rect><rect x=".42" y="22.207" width="46" height="2" rx="1"></rect></g></svg>
        </div>
        <div class="tabs">
          <div class="tabsloginactive active" @click="howlogin(true,$event)">免密登录</div>
          <div class="tablogin" @click="howlogin(flase,$event)">密码登录</div>
        </div>
        <div class="tabsinput">
          <div class="loginbody" v-if="(howtologin==true)">
            <input type="text" name="phone" placeholder="手机号码" class="input" autocomplete="tel">
            <input type="tel" name="smsCode" placeholder="短信验证码" class="input" maxlength="6" autocomplete="off"><button class="btnsendsms">发送验证码</button>
            <button>登录/注册</button>
          </div>
          <div class="otherloginbody">
            <input type="text" name="username" placeholder="手机/邮箱" class="input" autocomplete="username">
            <input type="password" name="password" placeholder="请输入密码" class="input" autocomplete="current-password">
            <button>登录</button>
          </div>
        </div>
        <div class="wechrtlogin">
          <div class="ortitle">OR</div>
          <a class="btnwechat" title="使用微信登录" href="https://www.oschina.net/action/openid/before_bind?op=wechat&amp;goto=https%3A%2F%2Fwww.oschina.net%2Fnews%2F141711%2Fpython-programming-in-vs-code-is-now-faster" target="_blank">
            <div class="btnicon">
                <svg width="32" height="32" viewBox="0 0 83 83" id="icon-logo-wechat"><g fill="none" fill-rule="evenodd"><circle fill="#FFFFFF" cx="41.5" cy="41.5" r="40"></circle><path d="M46.977 41.466c-.947 0-1.893.879-1.893 1.961 0 .879.946 1.758 1.893 1.758 1.42 0 2.434-.88 2.434-1.758 0-1.082-1.014-1.96-2.434-1.96zm-6.22-9.128c1.487 0 2.434-.946 2.434-2.367 0-1.487-.947-2.366-2.435-2.366-1.42 0-2.772.879-2.772 2.366 0 1.421 1.353 2.367 2.772 2.367zM41.5 0C18.58 0 0 18.58 0 41.5S18.58 83 41.5 83 83 64.42 83 41.5 64.42 0 41.5 0zm-7.843 52.014c-2.502 0-4.328-.405-6.694-1.082l-6.83 3.449 1.962-5.815c-4.8-3.38-7.64-7.64-7.64-12.847 0-9.196 8.654-16.228 19.202-16.228 9.33 0 17.648 5.545 19.27 13.389a9.36 9.36 0 0 0-1.825-.203c-9.196 0-16.295 6.896-16.295 15.213 0 1.42.202 2.704.54 4.057-.54.067-1.15.067-1.69.067zm28.196 6.626l1.352 4.869-5.14-2.908c-1.96.406-3.853 1.014-5.814 1.014-9.06 0-16.228-6.22-16.228-13.928 0-7.708 7.168-13.929 16.228-13.929 8.587 0 16.295 6.22 16.295 13.929 0 4.327-2.907 8.18-6.693 10.953zM27.369 27.605c-1.42 0-2.908.879-2.908 2.366 0 1.42 1.488 2.367 2.908 2.367 1.352 0 2.434-.946 2.434-2.367 0-1.487-1.082-2.366-2.434-2.366zm30.224 13.861c-1.015 0-1.894.879-1.894 1.961 0 .879.88 1.758 1.894 1.758 1.352 0 2.366-.88 2.366-1.758 0-1.082-1.014-1.96-2.366-1.96z" fill="#51C332" fill-rule="evenodd"></path></g></svg>
            </div>
            <div class="btnloginname">微信登录</div>
          </a>
        </div>
        <div class="serveritem">
          <p>
            注册登录即代表同意 
            <a href="https://www.oschina.net/terms" target="_blank">服务条例</a> 与 
            <a href="https://www.oschina.net/privacy" target="_blank">隐私声明</a>
          </p>
        </div>
      </div>
      </div>
      <!-- 分享 -->
      <div class="shareways" style="display: block !important;" v-if="(isshare==true)">
        <a class="item"  @click="wxopen()"><i class="iconfont">&#xe635;</i>微信</a>
        <a class="item" href="https://connect.qq.com/widget/shareqq/index.html" target="_blank" @click.stop="shareqq($event)"><i class="iconfont">&#xe618;</i>QQ</a>
        <a class="item" href="https://service.weibo.com/share/share.php" target="_blank"  @click.stop="shareblog($event)"><i class="iconfont">&#xe7e4;</i>微博</a>
      </div>
      <div class="sharewechatbox" v-if="iswxopen==true">
        <div id="wechatShareDialog">    
          <div class="wxheader">
            <span>分享到微信</span>
            <a class="wxclose" @click="wxclose()">×</a>
          </div>
          <div class="wxbody">
            <img src="../../pic/wechat.png" alt="">
          </div>
          <div class="wxfooter">打开微信"扫一扫"分享</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      islogin:false,
      howtologin:true,
      isshare:false,
      isclick:false,
      iswxopen:false,
    }
  },
  methods:{
    login(){
      this.islogin=true
    },
    close(){
      this.islogin=false
    },
    wxopen(){
      this.iswxopen=true
    },
    wxclose(){
      this.iswxopen=false
    },
    howlogin(boo,el){
      this.howtologin = boo;
      if(this.howtologin ==true){
        el.currentTarget.className="tabsloginactive active"
        el.currentTarget.nextElementSibling.className = "tablogin"
        // console.log()
      }
      else{
        el.currentTarget.className="tablogin active"
        el.currentTarget.previousElementSibling.className="tabsloginactive"
      }
    },
    share(el){
      if(el.currentTarget == window){
      this.isshare = false;
      }else{
        this.isshare=true;
      }
    },
    sharewechat(){

    }
  },
  mounted() {
    window.addEventListener("click", this.share);
},
 
  beforeDestroy() {  // 实例销毁之前对点击事件进行解绑
    window.removeEventListener('click', this.share);
}
}
</script>

<style>
.loginmain{
  width: 1536px;
  height: 720px;
  position: fixed;
  background-color: rgba(0,0,0,.25);
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
}
.actionbox circle{
  width: 64px;
  height: 74px;
  text-align: center;
  margin-bottom: 13px;
}
.actionbox i{
  display: block;
  width: 25px;
  height: 25px;
  font-size: 22px;
  margin: 0 auto;
  color: #858585;
}
.circle a,.circle i{
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: 22px;
  line-height: 48px;
  text-align: center;
  /* border-radius: 23px; */
  background-color: #fff;
}
.circle p{
  margin: 5px 0 15px;
  color: #888;
  text-align: center;
}
.circle a:hover,.circle i:hover{
  width: 48px;
  height: 48px;
  box-shadow: 0 0 15px #d8d3d3;
}
.dialog{
  width: 340px;
  height: 428px;
  margin: 60px auto;
  background-color: #fff;
  margin-top: 130px;
}
.tabsclose{
  width: 308px;
  height: 20px;
  padding: 16px 16px 4px;
}
.iconclose{
  width: 14px;
  height: 14px;
  /* padding: 3px; */
  float: right;
}
.tabs{
  width: 280px;
  height: 36px;
  padding: 0 28px;
}
.tabsinput{
  height: 174px;
  overflow: hidden;
  padding: 0 24px 24px;
}
.wechrtlogin{
  height: 90px;
  margin-bottom: 24px;
}
.serveritem{
  width: 235px;
  height: 13.6px;
  padding-bottom: 20px;
  margin: 0 auto;
}
.tabsloginactive,
.tablogin{
  float: left;
  width: 140px;
  height: 36px;
  border-bottom: 1px solid #ecedee;
  text-align: center;
  font-size: 15px;
  line-height: 18px;
  box-sizing: border-box;
  padding: 9px 0;
  height: 36px;
  cursor: pointer;  
}
.active {
    width: 140px;
    color: #111;
    font-weight: 600;
    border-bottom: 2px solid #21b351;
}
.dialog .input {
    padding-left: 0;
    margin-top: 24px;
    text-align: left;
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #111;
    background: #fff;
    border: none;
    appearance: none;
    border-bottom: #ecedee 1px solid;
    border-radius: 0;
    outline: 0;
}
.dialog .input::placeholder{
  color: #cbcbcb;
}
.dialog button {
    font-weight: 500;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    padding: 4px 0;
    width: 100%;
    height: 32px;
    color: #fff;
    cursor: pointer;
    border-radius: 2px;
    background: #21b351;
    appearance: none;
    outline: 0;
    border: none;
    transition: background-color .2s ease;
    user-select: none;
    margin-top: 28px;
}
.dialog .btnsendsms{
  position: absolute;
  top: 53px;
  right: -23px;
  width: 120px;

  float: right;
  color: #21b351;
  background:rgba(255,255,255,.1)
  
}
.loginbody{
  position: relative;
}
.wechrtlogin{
  text-align: center;
}
.ortitle{
  width: 10px;
  height: 10px;
  position: relative;
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  color: #aaa;
  margin-left:-10px;
  margin-bottom:28px
}
.ortitle:before,.ortitle::after{
    content: '';
    position: absolute;
    top: 50%;
    left: -60px;
    display: block;
    width: 50px;
    height: 1px;
    background: #ecedee;
}
.ortitle:before{
  left: -60px;
}
.ortitle::after{
  left: 30px;
}
.btnloginname{
  margin-top: 2px;
  font-size: 12px;
  color: #AAA;
}
.serveritem{
  font-size: 12px;
  color: #AAA;
}
.serveritem a{
  color: #346fb5;
  
}
.serveritem a:hover{
color: #003d86;
}
.shareways{
  position: relative;
  top: -80%;
  left:10px;
  width: 87px;
  height: 108px;
  border:1px solid #c2bfbf;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px #c2bfbf;
  
}
.shareways .item i{

  padding: 0;
  margin: 0;
  display: inline-block;
  font-size: 14px;
  color: #212121;
}
.shareways .item{
  width: 55px;
  height: 14px;
  padding: 11px 16px;
  font-size: 14px;
  color: #212121;
  line-height: 25px;
  float: left;
}
.shareways .item:hover{
  width: 55px;
  height: 14px;
  background-color: #f7f8f9;
  
}
.sharewechatbox{
  margin: 0 auto;
  width: 178px;
  height: 252px;
  position: absolute;
  top: 90px;
  left: 550px;
  padding: 16px 22px;
  border:1px solid #c2bfbf;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 0 5px #c2bfbf;
  
}
.wxheader span{
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  line-height: 28px;
  position: relative;
  color: #000;
}
.wxclose{
  width: 24px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  right: 14px;
  top: 18px;
  color: #999;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
}
.wxclose:hover{
  color: #999;
}
.wxbody img{
  width: 180px;
  height: 180px;
  margin: 10px 0;
}
.wxfooter{
  text-align: center;
}
</style>