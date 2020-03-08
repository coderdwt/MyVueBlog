<template>
<div>
  <div class="container">
    <div class="left" ref="left"></div>
      <div class="center">
        <h1 class="title">{{singleArticle.title}}</h1>
      <div class="tag" v-for="(item,index) in singleArticle.tag" :key="index">
        <img src="../../assets/img/标签.png" alt="">
        <span class="text">
          {{item}}
        </span>
      </div>
      <div class="info">
        <div>最后编辑于：<span>{{singleArticle.date | formatDate}}</span></div>
        <div>阅读量：<span>{{singleArticle.readCount}}</span></div>
      </div>
      <div v-html="singleArticle.content" class="mainContent" v-highlight />
      <mainComment :article="singleArticle"></mainComment> 
      </div>
      <div class="right" ref="right">
      </div>    
  </div>
  <div class="menu" ref="menu">
    <div class="catalogue">目录</div>
    <div class="cataList">
      <a v-for="(item,index) in singleArticle.text" :key="index" :href="'#_'+index"
      class="listItem">
        {{item}}
      </a>
    </div>
  </div>
  <foot/>
</div>
</template>
<script>

import {request} from '../../network/request'
import {formatDate} from '../../utils/util'

import mainComment from '../../components/comment/mainComment'
import foot from '../../components/footer/foot'

export default {
  name:'articleView',
  data(){
    return{
      id:null,
      screenWidth:0,
      screenHeight:0,
      singleArticle:{},
    }
  },
  methods:{
    getData(){
      request('/single/'+this.id).then((res)=>{
        this.singleArticle = res.data[0]
      })
    },
    set(){
      this.$refs.menu.style.height=this.screenHeight
      if(this.screenWidth<800){
        this.$refs.menu.style.display = 'none'
        this.$refs.left.style.display = 'none'
        this.$refs.right.style.display = 'none'
      }
    }
  },
  filters:{
    formatDate(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  created(){
    this.id=this.$route.params.articleID
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    this.getData()  
  },
  
  mounted(){
     this.set()
  },
  components:{
    mainComment,
    foot
  }
}
</script>
<style scoped>
@import url('../../assets/css/article.css'); 
.container{
  padding: 40px 30px 10px 30px;
  display: flex;
}

.left{
  width: 200px;
  flex: 1.2;
}
.center{
  width: 75%;
  margin: 0 auto;
  flex: 3.2;
}
.right{
  flex: 0.7;
}
.info{
  border-bottom: 1px solid #ebebeb;
}
.title{
  font-size:28px;
  color: #204040;
}
.mainContent img{
  width: 400px;
  height: 400px;
}
.tag{
  margin-left: 5px;
  color: #4f976a;
}
.tag img{
  width: 20px;
  height: 20px;
}
.info{
  padding: 6px;
  color: #204040;
}
.menu{
  position: fixed;
  left: 0;
  width: 110px;
  top: 80px;
  text-align: left;
  padding-left: 90px;
}
.catalogue{
  margin-bottom: 10px;
  color: #999;
  font-weight: bold;
  font-size: 20px;
}
.listItem{
  display: block;
}
.cataList a{
  margin-bottom: 10px;
  color: #204040;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space:nowrap;
}
a:hover{
  background-color: rgba(0,0,0,0.06);
}
</style>