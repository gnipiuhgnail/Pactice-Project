<template>
  <div class="linkcard">
    <div class="linkcarditem" v-for="(linkitem,linkIndex) in linkcard" :key="linkIndex" :style="`background-image:url(${linkitem.img});`">
        <div style="height:40px">
          <div class="title">{{linkitem.title}}</div>
          <div class="btn">
            <a :href="linkitem.btnurl">{{linkitem.btn}}</a>
          </div>
        </div>
        <div class="linkcontainer">
          <p v-for="(plinkitem,plinkIndex) in linkitem.container" :key="plinkIndex">{{plinkitem}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 data(){
    return {
      linkcard:this.$store.state.linkcard
    }
  }
}
</script>

<style>
.linkcarditem{
  width: 280px;
  height: 76.909px;
  padding: 16px 20px;
  margin-top:24px;
  background-color: #fff;
  background-size: 100%;
  border-radius: 5px;
}
.linkcarditem .title{
  width: 184px;
  height: 28px;
  float: left;
  color: #111;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
}
.linkcarditem .btn{
  float: right;
  width: 88px;
  height: 27.63px;
  line-height: 28px;
  margin: 0  -8px 0 8px;
}
.linkcarditem .btn a{
  width: 56px;
  height: 19.636px;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  background-color: rgb(33, 179, 81);
  border-radius: 3px;
}
.linkcontainer p{
  color: #111;
}

</style>