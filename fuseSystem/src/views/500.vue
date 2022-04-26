<template>
  <div class="wscn-http-container">
    <img src="@/assets/images/500.png" alt="服务器出现错误，请稍后再试！">
    <p style="color:#5782CF;margin-top:64px">服务器出现错误，请稍后再试！</p>
  </div>
</template>

<style lang="scss" scoped>
.wscn-http-container{
  position: relative;
  width: 611px;
  height: 363px;
  margin: 118px auto;
  text-align: center;
  animation: nothttp 1s;
}
@keyframes nothttp{
   0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}
</style>
