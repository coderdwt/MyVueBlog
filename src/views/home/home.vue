<template>
  <div>
    <div class="main">
      <div ref="head" class="home">
        <div class="headtext" ref="headtext">  
          <h1 class="slide-bar">Welcome</h1>
          <div class="text slide-bar">路漫漫其修远兮|吾将天道而酬勤</div>
          <div class="showContent" @click="showContent">
            <img src="../../assets/img/向下.svg" alt="">
          </div>
        </div>
      </div>
      <div class="homefooter">
      </div>
    </div>
    <articleList :articles="articles"></articleList>
    <backTop v-show="backShow" @click.native="backTop"></backTop>
    <foot/>
  </div>
</template>
<script>
import {request} from '../../network/request'

import backTop from '../../components/backTop/backTop'
import articleList from '../../components/homeArticle/articleList'
import foot from '../../components/footer/foot'

export default {
  name:'home',
  data(){
    return{
      innerHeight:'',
      backShow:false,
      scrollTop:0,
      articles:[]
    }
  },
  methods:{
    setHeight(){
      this.innerHeight=window.innerHeight
      this.$refs.head.style.height=this.innerHeight+'px'
      this.$refs.headtext.style.marginTop=(this.innerHeight/3)+'px'
    },
    scrollToTop(){
      this.scrollTop=window.pageYOffset
      if(this.scrollTop>this.innerHeight+200){
        this.backShow=true
      }
      else{
        this.backShow=false
      }
    },
    showContent(){
      let scrollTop=document.documentElement.scrollTop || document.body.scrollTop
      let speed=Math.floor((this.innerHeight-20)/20)
      setTimeout(()=>{
        document.documentElement.scrollTop = document.body.scrollTop=scrollTop+speed
        if(scrollTop<this.innerHeight){
        this.showContent()}
      }
      ,10)
    },
    backTop(){
      let scrollTop=document.documentElement.scrollTop || document.body.scrollTop
      let speed=Math.floor((this.innerHeight-20)/20)
      setTimeout(()=>{
        document.documentElement.scrollTop = document.body.scrollTop=scrollTop-speed
        if(scrollTop>this.innerHeight+40){
        this.backTop()}
      }
      ,10)
    }
  },
  components:{
    backTop,
    articleList,
    foot
  },
  created(){
    request('/article').then((res)=>{
      this.articles=res.data.reverse()
    })
  },
  mounted(){
    this.setHeight(),
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed(){
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato);
.main{
  position: relative;
}
.home{
  position: relative;
  width:100%;
  background: url("../../assets/img/preface.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat ;
  overflow: hidden;
}
.slide-bar {
  position: relative;
  color: transparent;
  animation: fill-text-white 2s 1.6s forwards;
}
.slide-bar::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #35b9f1;
  transform: scaleX(0);
  transform-origin: left;
  animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards;
}
.headtext{
  width: 300px;
  margin: 200px auto;
  text-align: center
}
.headtext h1{
  font-family: Lora, serif;
  font-size: 55px;
  margin-bottom:20px;
  margin-left: auto;
  margin-right: auto;
}
.headtext h1::before {
  background: #FF4081;
}
.text{
  font-family: '微软雅黑';
  font-size: 18px;
  color: rgba( 255, 255, 255, 1);
  text-transform: uppercase;
  animation-delay: 3.2s;
  margin: 10px
}
.text::before {
  background: #03A9F4;
  animation-delay: 2s;
}
@keyframes slide-in-out {
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
@keyframes fill-text-white {
  to {
    color: white;
  }
}
.showContent{
  position: absolute;
  bottom: 10px;
  z-index: 88;
  cursor: pointer;
  left: 48%;
}
.showContent img{
  width: 20px;
  height: 20px;
}
.homefooter{
  position: absolute;
  bottom:0px;
  width: 100%;
  height:50%;
  background: url('../../assets/img/head-shade.png');
  background-size:cover;
  z-index: 66;
}
</style>