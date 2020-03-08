<template>
  <div class="linkList">
    <viewTitle :titleText="titleText"></viewTitle>
    <friendItem :link="links.data" class="friendItem"></friendItem>
    <div class="rule">
      <div class="ruleTitle">关于友链：</div>
      <div class="ruleText">1.想互相添加友链可以联系我，只添加技术博客类个人站点</div>
      <div class="ruleText">2.本人<a href="http://wpa.qq.com/msgrd?v=3&uin=1013035670&site=qq&menu=yes" target="_blank">QQ1013035670</a>，基本上24小时在线；</div>
      <div class="ruleText">3.并不强制双方互加，如果你的网站符合要求基本都可以为你加上；</div>
    </div>
    <foot/>
  </div>
</template>
<script>
import {request} from '../../network/request'

import friendItem from '../../components/friendItem/friendItem'
import viewTitle from '../../components/viewTitle/viewTitle'
import foot from '../../components/footer/foot'

export default {
  name:'frind',
  data(){
    return{
      titleText:'友链',
      links:[]
    }
  },
  components:{
    viewTitle,
    friendItem,
    foot
  },
  created(){
    request('/link').then((res)=>{
      this.links=res
    })
  }

}
</script>
<style scoped>
.linkList{
  width: 80%;
  margin: 0 auto;
  padding: 20px 20px;
}
.friendItem{
  margin-top: 50px;
  margin-bottom: 20px;
}
.rule{
  text-align: center;
  margin-top:20px;
  margin-bottom: 40px;
}
.ruleTitle{
  font-size: 25px;
  color: #999999;
}
.ruleText{
  margin-top: 10px;
  opacity: 0.7;
}
a{
  color: #4f8e54;
}
a:hover{
  color: skyblue;
}
</style>