<template>
<div>
  <div class="content">
    <viewtitle :titleText="titleText"></viewtitle>
    <div class="aboutPart">
      <span class="spanTitle">版本</span>
      <div class="spanInfo">
        <div class="infoitem">1.0</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">作者</span>
      <div class="spanInfo">
         <div class="infoitem">dwt，某本科在读学生</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">简介</span>
      <div class="spanInfo">
         <div class="infoitem">这个博客是我2020年2月27日开始编写的，比较花费时间的主要是前期的学习阶段，包括前端技术栈：HTML,CSS,JS,Vue，后端的技术栈：Node.js,Mongoose等。晚上花费大约3个小时左右时间进行学习，陆续学习了大约两个月，掌握了这些技术的基本使用</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle"></span>
      <div class="spanInfo">
         <div class="infoitem">更多详情请参考这篇文章 </div>
         <div class="infoitem">
         <router-link to="/article/5e636b16532925d6a068d07f" >Hello World</router-link>
         </div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">源码</span>
      <div class="spanInfo">
         <div class="infoitem"><a href="https://github.com/coderdwt/myVueBlog">github仓库</a></div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">技术栈</span>
      <div class="spanInfo">
        <div class="infoitem">前端：Vue Cli3、Vue Router ...</div>
        <div class="infoitem">后端：Nodejs、Express、Mongoose ...</div>
        <div class="infoitem">数据库：MongoDB</div>
      </div>
    </div>
    <div class="aboutPart">
      <span class="spanTitle">近期flag</span>
      <div class="spanInfo">
        <div class="infoitem">增加更多的CSS样式</div>
        <div class="infoitem">进一步改进手机移动端自适应</div>
        <div class="infoitem">增加评论回复功能</div>
        <div class="infoitem">增加评论支持表情功能</div>
        <div class="infoitem">增加文章搜索功能</div>
        <div class="infoitem">优化首次加载速度</div>
        <div class="infoitem">写一个文章管理后台</div>
      </div>
    </div>
  </div>
  <foot/>
</div>
</template>
<script>

import viewtitle from '../../components/viewTitle/viewTitle'
import foot from '../../components/footer/foot'

export default {
  name:'about',
  data(){
    return{
      titleText:'关于'
    }
  },
  components:{
    viewtitle,
    foot
  }
}
</script>
<style scoped>
.content{
  margin: 0 auto;
  padding: 20px 20px;
  max-width: 950px;
  overflow: hidden;
}
.aboutPart{
  text-align: left;
}
.spanTitle{
  display: inline-block;
  float: left;
  margin: 2px 0 0 2px;
  border-bottom: 2px solid #204040;
  font-size: 16px;
  color:#204040
}
.spanInfo{
  margin-left: 75px;
  border-left: 1px dashed rgba(0,0,0,0.08);
}
.infoitem{
  position: relative;
  padding: 0 0 30px 40px;
  line-height: 1.8;
  font-size: 16px;
  color:#204040;
  text-shadow: rgba(0,0,0,0.4);
}
a{
  color:#4f8e54
}
a:hover{
  color: skyblue
}
.infoitem::before{
  content: '';
  position: absolute;
  top: 4px;
  left: -6.6px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: #d3d3d3;
}
</style>