<template>
  <div class="home" @scroll="scrollEvent()">
    <div class="navout">
      <div class="navin">
        <div
        :class="(this.scrollTop <80 ) ? 'nav': 'navsecond'" >
          <Nav></Nav>
        </div>
      </div>
    </div>   
    <div class="secondaryheader">
      <HeaderSecond></HeaderSecond>
    </div>
    
    <div class="mainScreen">
      <div class="actionbox">
      <ActionBox></ActionBox>
      </div>
      <Container></Container>
      <ActionBoxRight></ActionBoxRight>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import HeaderSecond from '@/components/HeaderSecond.vue'
import ActionBox from '@/components/ActionBox.vue'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import ActionBoxRight from '@/components/ActionBoxRight.vue'
import store from '@/store/index.js'
export default {
  name: 'Home',
  components: {
    Nav,
    HeaderSecond,
    ActionBox,
    Container,
    Footer,
    ActionBoxRight
  },
  store,
  data(){
   return{
     scrollTop:0,
   }
  },
  methods:{
    scrollEvent () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
     }
},
  mounted () {
      // 事件监听滚动条
      window.addEventListener('scroll', this.scrollEvent)
    }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'PingFang SC','Helvetica Neue','Microsoft YaHei UI',
  'Microsoft YaHei','Noto Sans CJK SC',Sathu,EucrosiaUPC,Arial,Helvetica,sans-serif;
  font-size: 14px;
  width: 1519.2px;
  background-color: #f7f8f9;
}
.navout{
  position: fixed;
  width: 100%;
  top: 0;
  height: 45px;
}
.navin{
  position: relative;
  height: 45px;
  top:0;
  left:0;
  overflow: hidden;
}
.nav{
  position: absolute;
  top:0;
  left:0;
  width: 1519px;
  height: 90px;
  background-color: #333333;
  -webkit-transform: translateY(0%);   
  transform: translateY(0%);
}
.navsecond{ 
  position: absolute;
  top:0;
  left:0;
  width: 1519px;
  height: 90px;
  background-color: #333333; 
  -webkit-transform: translateY(-50%);   
  transform: translateY(-50%);
  -webkit-transition:1s all ease;
  transition:1s all ease;
}
@font-face {
  font-family: 'iconfont';
  src: url('../../icon/iconfont.css') format('truetype');
}
@font-face {
  font-family: 'iconfont';
  src: url('../../icontwo/iconfont.css') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.secondaryheader{
  margin-top: 45px;
  background-color: #f0f5f0;
  height: 80px;
  
}

.actionbox{
  width: 64px;
  height: 254px;
  position:fixed;
  left:70px;
  top:265px;
}
li{
   list-style: none;
}
.mainScreen{
  width: 1200px;
  margin:24px auto;
}
a{
  cursor: pointer;
}
</style>