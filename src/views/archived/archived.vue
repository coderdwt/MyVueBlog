<template>
<div>
  <div class="content">
    <viewTitle :titleText="title" class="title"/>
    <div class="year-part">
    <span class="year-num">2020</span>
      <div class="list">
        <div v-for="item in list" :key="item._id" class="list-item">
          <span class="list-date">{{ item.date | formatDate}}</span>
          <router-link :to="'/article/'+item._id">
            <span class="list-title">{{ item.preface }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <foot/>
</div>
</template>
<script>

import { request } from '../../network/request'
import { formatDate } from '../../utils/util'

import viewTitle from '../../components/viewTitle/viewTitle'
import foot from '../../components/footer/foot'

export default {
  name:'catologue',
  data(){
    return{
      title:'归档',
      list:[]
    }
  },
  methods:{
    getData(){
      request('/article').then((res)=>{
        this.list=res.data.reverse()
      })
    }
  },
  filters:{
    formatDate(time){
      const date = new Date(time)
      return formatDate(date, 'MM/dd')
    
    }
  },
  components:{
    viewTitle,
    foot
  },
  created(){
    this.getData()
  }
}
</script>
<style scoped>
.content {
  margin: 0 auto;
  padding: 20px 20px;
  max-width: 950px;
}
.year-part {
  text-align: left;
}
.year-num {
  float: left;
  display: inline-block;
  margin: 5px 0 0 2px;
  border-bottom: 2px solid #204040;;
  font-size: 16px;
}
.list {
  padding: 10px 0;
  margin-left: 80px;
  border-left: 1px dashed rgba(0,0,0,0.08);
}
.list-item {
  display: flex;
  position: relative;
  padding: 0 0 30px 40px;
}
.list-item::before {
  content: '';
  position: absolute;
  top: 2px;
  left: -6.4px;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #d3d3d3;
}
.list-date {
  flex: 0 0 60px;
}
.list-title {
  flex: 1;
}
a{
  color: #4f8e54;
}  
a:hover{
  color: skyblue;
}
</style>