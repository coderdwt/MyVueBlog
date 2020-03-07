<template>
  <div class="viewTitle">
    <h2 class="text">{{titleText}}</h2>
  </div>
</template>
<script>
export default {
  name:'viewTitle',
  props:{
    titleText:{
      type:String
    }
  }
}
</script>
<style scoped>
.title {
  padding: 30px 0;
}
.text {
  text-align: left;
  font-size: 28px;
  color:#204040;
  text-shadow: rgba(0,0,0,0.4);
}
</style>