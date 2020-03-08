<template>
  <div class="navigation ts" :class="{navshow:isNavshow}">
    <naviitem class="logo">
      <img slot="icon" src="../../assets/img/logo-cat.svg" alt="">
    </naviitem>
    <router-link to="/home">
      <naviitem class="naviitem">    
        <img slot="icon" src="../../assets/img/主页.svg" alt="">
        <h1 slot="text">主页</h1>   
      </naviitem>
    </router-link>
    <router-link to="/catalogue">
      <naviitem class="naviitem">
        <img slot="icon" src="../../assets/img/归档项目.svg" alt="">
        <h1 slot="text">归档</h1>
      </naviitem>
    </router-link>
    <router-link to="/about">
      <naviitem class="naviitem">
        <img slot="icon" src="../../assets/img/关于.svg" alt="">
        <h1 slot="text">关于</h1>
      </naviitem>
    </router-link>
    <router-link to="/friend">
      <naviitem class="naviitem">
        <img slot="icon" src="../../assets/img/链接.svg" alt="">
        <h1 slot="text">友链</h1>
      </naviitem>
    </router-link>
      <naviitem class="naviitem" v-if="model==='day'" @click.native="changeModel">
        <img slot="icon" src="../../assets/img/夜间模式.svg" alt="">
        <h1 slot="text">夜间</h1>
      </naviitem>
      <naviitem class="naviitem" v-else @click.native="changeModel">
        <img slot="icon" src="../../assets/img/日间模式.svg" alt="">
        <h1 slot="text">日间</h1>
      </naviitem>
    <div class="bird ts" @click="birdClick">
      <img v-if="!isNavshow" class="nav-menu-img" src="../../assets/img/bird.png" alt="">
      <img v-if="isNavshow" class="nav-menu-img" src="../../assets/img/birdactive.png" alt="">
    </div>
  </div>
</template>
<script>

import naviitem from './navi-item'

export default {
  name:'navigation',
  components:{
    naviitem
  },
  data(){
    return{
      isNavshow:false,
      model:'day'
    }
  },
  methods:{
    birdClick(){
      this.isNavshow=!this.isNavshow
    },
    changeModel(){
      if(this.model==='day'){
        this.model='night'
      }else{
        this.model='day'
      }
      this.$emit('changeModel',this.model)
    }
  }
}
</script>
<style scoped>
.navigation{
  position: fixed;
  width: 80px;
  height: 100%;
  top: 0;
  right: -80px;
  background: rgb(245, 245, 245);
  z-index: 999;
}
.navshow{
  right:0;
}
.logo img{
  margin-top: 20px;
  width: 30px;
  height: 30px;
}
a {
  text-decoration: none;
}
a:hover{
  text-decoration:underline;
  color: #172d3e;
}
.router-link-active {
  text-decoration: none;
}
.bird{
cursor: pointer;
      position: absolute;
      top: 20px;
      left: -50px;
      width: 50px;
      height: 40px;
      line-height: 36px;
      border-bottom: 2px solid #141818;
}
.bird img {
  height: 100%;
  margin-top: 4px;
}
</style>