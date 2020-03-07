<template>
  <div class="foot">
    <div>
      <span>所有者：</span><a href="https://github.com/coderdwt">dwt</a>
      <span>|  上线于：2020/03/07</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'foot'
}
</script>
<style scoped>
.foot{
  padding: 40px 0;
  text-align: center;
  border-top: 1px dashed rgba(0, 0, 0, 0.1);
}
span{
  color: #4f8e54;
}
a{
  color:#3f5a5a;
}
a:hover{
  color:skyblue;
}
</style>