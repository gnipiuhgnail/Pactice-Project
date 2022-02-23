<template>
  <div class="actionright" @scroll="scrollEvent()">
   <div class="actionrightcontainer">
      <div class="codeBlock">
        <img class="codeIcon" @mouseover="codeBlocktwo" @mouseout="codeBlockone" src="https://oscimg.oschina.net/oscnet/up-02f2706a81344119fb5cdcdda304068f2e0.png" alt="">
        <img class="oscCode" style="display:none;" src="https://oscimg.oschina.net/oscnet/up-e77d060131d9b392981650ec7beb614554f.JPEG" alt="">
    </div>
    <div class="backtotop">
      <div :class="`${istext==true?'backtotopfirst':'backtotopsecond'}`" style="display: block;">
        <div v-if="isshow==true">
          <div class="icon" @mouseover.prevent="backtotoptwo" @mouseout.prevent="backtotopone"><img src="https://static.oschina.net/new-osc/img/icon/back-to-top.svg" alt="返回顶部"></div>
          <div class="text"><a href="#app" style="width:40px;height:40px;display:inline-block">顶部</a></div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
export default {
  data(){
   return{
     scrollTop:0,
     isshow:false,
     istext:true,
   }
  },
methods:{
    scrollEvent () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(this.scrollTop>202){
        this.isshow=true
      }else{
        this.isshow=false
      }
     },
     backtotoptwo(){
       this.istext = false
       console.log(this.istext)
     },
     backtotopone(){
      this.istext =true
     },
     codeBlocktwo(){
       var oscCode = document.getElementsByClassName('codeIcon')[0].nextElementSibling
      oscCode.style.display ='block';
     },
     codeBlockone(){
       var oscCode = document.getElementsByClassName('codeIcon')[0].nextElementSibling
        oscCode.style.display ='none';
     }
},
mounted () {
      window.addEventListener('scroll', this.scrollEvent)
    }
}
</script>

<style>
.actionright{
  position: fixed;
  width: 40px;
  padding: 0;
  margin: 0;
  bottom: 50px;
  right: 20px;
}

.actionrightcontainer{
  width: 45px;
  height: 76px;
}
.codeBlock{
  width: 38px;
  height: 22px;
  text-align: center;
  padding: 8px 1px 6px;
  border:1px solid #999;
}
.backtotop{
  width: 42px;
  height: 41px;
  overflow: hidden;
}
.backtotopfirst{
  width: 45px;
  height: 80px;
  -webkit-transform: translateY(0px);   
  transform: translateY(0px);
  -webkit-transition:2s all ease;
  transition:2s all ease;
}
.backtotopsecond{
  width: 45px;
  height: 80px;
  -webkit-transform: translateY(-40px);   
  transform: translateY(-40px);
  -webkit-transition:2s all ease;
  transition:2s all ease;
}
.backtotop .icon{
  width: 40px;
  line-height: 40px;
  text-align: center;
  border:1px solid #999;
  border-top:0;
}
.backtotop .text{
  width: 42px;
  line-height: 42px;
  text-align: center;
  border:1px solid #999;
  background-color: #32aa66;
  color: #fff;
  border-top:0;

}
.oscCode{
  display: none;
    position: fixed;
    bottom: 89px;
    right: 69px;
    width: 120px;
    border-radius: 5px;
    width: 120px;
}
</style>