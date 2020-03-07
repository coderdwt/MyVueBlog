<template>
  <div class="item">
    <div class="icon"><slot name="icon"></slot></div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  name:'naviitem'
}
</script>
<style scoped>
.item{
  color: #172d3e;
  margin-bottom: 4px;
  padding:12px 20px 12px 20px ;
  text-align: center;
}
.item img{
width: 24px;
height: 24px;
margin-bottom: 5px;
}
.text h1{ 
  font-size: 19px;
}
.item:hover{
  background-color: rgba(169,169,169,0.5);
}
</style>