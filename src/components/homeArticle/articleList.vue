<template>
  <div class="articleList">
    <div v-for="item in articles" :key="item._id" class="item">
    <router-link :to="'/article/'+item._id">
      <div class="title">
        {{ item.title }}
      </div>
    </router-link>
      <div class="date">
        <img src="../../assets/img/日历.svg" alt="">
        {{ item.date | formatDate}}
      </div>
      <div class="preface">
        {{item.preface}}
      </div>
      <div class="tag">       
        <div v-for="(tag,i) in item.tag" :key="i" class="tagItem">
        <img src="../../assets/img/标签.png" alt="">
          {{ tag }}
        </div>
      </div>
      <div class="readCount">
        <img src="../../assets/img/评论.svg" class="icon">
        <span class="text">{{ item.commentCount }}</span>
        <img src="../../assets/img/眼睛.svg" class="icon">
        <span class="text">{{ item.readCount }}</span>       
      </div>
    </div>
  </div>
</template>
<script>

import {formatDate} from '../../utils/util'

export default {
  name:'articlelist',
  props:{
    articles:{
      type:Array
    }
  },
  filters: {
    formatDate(time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>
<style scoped>
.articleList{
  width: 80%;
  padding: 20px 10px 10px;
  margin: 0 auto
}
.item{
  margin: 0 auto;
  padding: 20px 0 30px 0; 
  text-align: left;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}
.title{
  margin-bottom: 16px;
  line-height: 3.0;
  font-size:20px;
  font-weight:bold;
  color: #4f8f59;
}
.date{
  font-size:14px;
  line-height: 1;
  color:#999;
}
img{
  width: 20px;
  height: 20px;
  margin-right: 2px;
}
.preface{
  margin: 20px 0;
  font-size: 16px;
  line-height: 1.8;
}
.tagItem{
  float: left;
  margin-right: 8px;
  cursor: pointer;
  color: #4f8f59
}
.readCount{
  float: right;
  margin-right: 4px;
  color:#999;
}
.icon{
  position: relative;
  bottom: -1px;
  margin-right: 2px;
  margin-left: 8px;
}
.text{
  color:#999;
}
</style>