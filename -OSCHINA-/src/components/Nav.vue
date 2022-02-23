<template>
  <div class="main-bar">
    <div class="main-upbar">
      <div class="main-leftbar">
      <ul>
      <li><a href="https://www.oschina.net">首页</a></li>
      <li><a href="https://www.oschina.net/new" class="new">资讯</a></li>
      <li><a href="https://www.oschina.net/groups">专区</a></li>
      <li><a href="https://www.oschina.net/question">问答</a></li>
      <li><a href="https://www.oschina.net/event">活动</a></li>
      <li><a href="https://www.oschina.net/project">软件库</a></li>
      <li><a href="https://www.oschina.net/explore">发现</a></li>
      <li><a href="https://www.oschina.net/blog">博客</a></li>
      <li><a href="https://gitee.com/?utm_source=oschina&utm_medium=link-index&utm_campaign=home">Gitee</a></li>
    </ul>
    </div>
    <div class="main-rightbar">
      <ul>
        <li><a href="https://www.oschina.net/app"><i class="iconfont iconphone">&#xe509;</i></a></li>
        <li><a href="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F141711%2Fpython-programming-in-vs-code-is-now-faster">登录</a></li>
        <li><a href="https://www.oschina.net/home/login">注册</a></li>
      </ul>
    </div>
    </div>
    <div class="main-downbar">
      <div class="main-leftbar">
      <div class="logo"><img src="../../pic/logo_new.svg" alt=""></div>
      <ul>
      <li><a href="https://www.oschina.net">首页</a></li>
      <li><a href="https://www.oschina.net/new" class="new">资讯</a></li>
      <li><a href="https://www.oschina.net/groups">专区</a></li>
      <li><a href="https://www.oschina.net/question">问答</a></li>
      <li><a href="https://www.oschina.net/event">活动</a></li>
      <li><a href="https://www.oschina.net/project">软件库</a></li>
      <li><a href="https://www.oschina.net/explore">发现</a></li>
      <li><a href="https://www.oschina.net/blog">博客</a></li>
      <li><a href="https://gitee.com/?utm_source=oschina&utm_medium=link-index&utm_campaign=home">Gitee</a></li>
    </ul>
    </div>
    <div class="main-rightbar">
      <ul style="float:right">
        <li><a href="https://www.oschina.net/app"><i class="iconfont iconphone">&#xe509;</i></a></li>
        <li><a href="https://www.oschina.net/home/login?goto_page=https%3A%2F%2Fwww.oschina.net%2Fnews%2F141711%2Fpython-programming-in-vs-code-is-now-faster">登录</a></li>
        <li><a href="https://www.oschina.net/home/login">注册</a></li>
      </ul>
      <div class="mainbarinput">
       <input type="text" placeholder="大家都在搜..."> 
       <button><i class="iconfont">&#xe50a;</i></button>
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
.main-bar{ 
  height: 80px;
  padding-top:13px;
}
.main-upbar{
  height: 50%;
}
.main-downbar{
  height: 50%;
  line-height: 30px;
  text-align: center;
}
a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color: #d9d9d9;
}
a:hover{
    text-decoration: none;
    color: #fff;
}
.new{
    position: relative;
}
.new::before{
  content: 'new';
    position: absolute;
    right: 1px;
    top: 7px;
    width: auto;
    height: 28px;
    padding: 0 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #d0021b;
    border-radius: 2px;
    -webkit-transform: translate(100%,-100%) scale(.5);
    transform: translate(100%,-100%) scale(.5);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    color: #fff;
    font-size: 22px;
    line-height: 24px;
    font-weight: 500;
}

.mainbarinput input{
  width: 176px;
  height: 26px;
  padding: 3px 38px 3px 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: none;
  background-color: #636772;
  

  /* 解决input和button不对齐 */
  box-sizing: border-box;
  vertical-align: top;
}
.mainbarinput input::placeholder{
  color: #abadb2;

}
.mainbarinput button{
  /* position: absolute;
  top: -3px;
  width: 22px; */
  width: 22px;
  background-color: #636772;
  color: #abadb2;
  height: 22px;
  border:0;
  font-weight:600;

}
.mainbarinput{
  /* position: relative; */
  float: right;
  width: 224px;
  height: 26px;
  /* color: rgba(0,0,0,.87); */
  color: #d0021b;
  border: 1px solid #979797;
  border-radius: 2px;
  
  background-color: #636772;
  margin-right: 8px;
  /* opacity:0.3; */
}
/* main-leftbar */
.main-leftbar{
  width: 525.25px;
  margin-left: 16px;
  float: left;
  
}
.logo{
  float: left;
  margin-right: 30px;
}
.logo img{
  width: 112px;
  height: 28px;
}
.main-leftbar li{
   float: left;
   margin-right:28px;
}

/* main-rightbar */
.main-rightbar{
  float: right;
  margin-right: 16px;
}
.main-rightbar li{
   float: left;
   margin-left:19px;
}
.main-rightbar .iconphone{
  font-size: 20px;
  line-height: 15px;
}

</style>