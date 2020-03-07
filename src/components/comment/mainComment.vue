<template>
  <div>
    <div>
      <div class="commentInput">
        <div class="input">
          <input type="textarea"
          v-model="nameValue"
          class="inputTextarea"
          placeholder="昵称(必填)"
          />
          </div>
          <div class="input">
          <input type="textarea"
          v-model="commentValue"
          class="inputTextarea"
          placeholder="说点什么吧..."
          />  
          </div>   
          <div class="controlButton">
            <button class="Commit" @click="commit">
              评论
            </button>
          </div>
      </div>
    </div>
    <div><h1>评论区</h1></div>
    <div v-for="(item,index) in article.comments" :key="index" class="commentList">
      <div class="name">{{item.name}}</div>
      <div class="body">{{item.body}}</div>
      <div class="date">{{item.date | formatDate}}
      <div class="reply" @click="reply">
        <img src="../../assets/img/评论.svg" />
        <span>回复</span>
      </div>
      </div>
    </div>
  </div>
</template>
<script>

import {formatDate} from '../../utils/util'
import {post} from '../../network/request'

export default {
  name:'mainComment',
  data(){
    return{
      commentValue:null,
      nameValue:null
    }
  },
  methods:{
    commit(){
      if(this.commentValue==null){
        alert('请输入评论！')
        return
      }
      if(this.nameValue==null){
        alert('请输入昵称！')
        return 
      }
      else{
        this.post()
      }
    },
    post(){
      var config={
        'method':'post',
        data:{
          'id':this.article._id,
          'body':this.commentValue,
          'name':this.nameValue,
          'date':this.getCurrentTime()
        }
      }
      post(config).then(()=>{})
      alert('评论成功！')
      this.article.comments.push(config.data)
      this.commentValue = '',
      this.nameValue = ''
    },
    reply(){
      alert('回复功能正在开发中...')
      return
    },
   getCurrentTime() {
    var date = new Date
      , year = date.getFullYear()
      , month = date.getMonth() + 1
      , day = date.getDate()
      , hour = date.getHours()
      , minute = date.getMinutes()
      , second = date.getSeconds();
    month < 10 && (month = "0" + month);
    day < 10 && (day = "0" + day);
    hour < 10 && (hour = "0" + hour);
    minute < 10 && (minute = "0" + minute);
    second < 10 && (second = "0" + second);
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
}
  },
  props:{
    article:Object
  },
  filters:{
    formatDate(time){
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>
<style scoped>
.commentList{
  width: 100%;
  background-color: #fafafa;
  margin-bottom: 10px;
  padding: 5px 25px;
}
.name{
  color: #4f8e54;
  margin-bottom: 5px;
  font-size: 20px;
}
.body{
  margin-bottom: 10px;
}
.date{
  color: #999;
}
.reply{
  float: right;
  cursor: pointer;
}
.reply img{
  width: 20px;
  height:20px;
}
.commentInput{
  display: flex;
  width: 100%;
  height: 110px;
  margin: 10px 0;
  padding: 14px 10px 0px 10px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.02);
  flex-wrap:wrap;
  flex-direction:row-reverse;
  border-radius: 4px;
  color: #c8cbd1;
  background-color: rgba(0,0,0,0.02);
}
.input{
  width: 100%;
  color: #4f8e54;
}
.inputTextarea{
  width: 100%;
  padding: 7px 7px;
  resize: none;
  margin-bottom: 5px;
  color: #4f8e54; 
  outline-style: none ;
  border: 1px solid #ccc;
  border-radius: 3px;
}
input:hover{
  border: 1px solid skyblue;
}
.Commit{
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: #93b996;
  color: #fff;
  cursor: pointer;
}
</style>