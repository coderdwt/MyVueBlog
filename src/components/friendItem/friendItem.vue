<template>
  <div class="linklist">
    <div class="linkItem" v-for="item in link" :key="item._id">
      <img class="itemBackground" :src="item.imageUrl" alt="背景">
      <div class="linkContent">
        <div class="item-text">
          <div class="item-title">{{item.name}}</div>
          <div class="item-info">{{item.preface}}</div>
        </div>
        <a :href="item.link" target="_blank">
        <img src="../../assets/img/友链.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'friendItem',
  props:{
    link:Array
  }
}
</script>
<style scoped>
.linkItem{
  margin-bottom: 30px;
  box-shadow: 0 0 6px rgba(0,0,0,0.4);
}
.linklist{
  width: 100%;
  text-align: center;
}
.itemBackground{
  width: 100%;
  height: 100%;
  background-size: cover;
}
.linkContent{
  width: 100%;
  position: relative;
  padding: 10px 0;
}
.item-title{
  font-weight: bold;
  color: #4f8e54;
  font-size: 20px;
}
.item-info{
  font-weight: bold;
  color:#9d9d9d;
  opacity: 0.7;
}
.item-text{
  display: inline-block;
}
.linkContent img{
  position: absolute;
  top: 20px;
  right: 20px;
  float: right;
  width: 25px;
  height: 25px;
}
</style>