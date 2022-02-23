<template>
  <div class="commend" id="comments">
        <div class="author"><img src="https://static.oschina.net/new-osc/img/portrait.gif" alt=""></div>
        <div class="commendput"   id="comments"><input type="text"></div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.commend{
  height: 88px;
  border-radius: 6px;
  box-shadow: 3px 3px 5px #edeeef;
  padding: 32px 40px;
  background-color: #fff;
}
.author{
  width: 40px;
  float: left;
  margin-right: 8px;
}
.author img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.commendput{
  float: left;
  height: 70px;
}
.commendput input{
  width: 706px;
  height: 70px;
  padding: 8px 10px;
  border:1px solid #ccc;
  border-radius: 3px;
}
</style>