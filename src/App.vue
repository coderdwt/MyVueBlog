<template>
  <div id="app" ref='app'>
    <navigation @changeModel="change($event,model)"></navigation>
    <router-view/>
  </div>
</template>
<script>

import navigation from './components/Navigation/navi'

export default {
  name:'app',
  components:{
    navigation,
  },
  methods:{
    change(model){
      if(model==='night'){
        this.$refs.app.style.backgroundColor='#0e1730'
        this.$refs.app.style.opacity=0.9
        this.$refs.app.color='white'
      }
      else{
        this.$refs.app.style.backgroundColor=null
        this.$refs.app.style.opacity=null
        this.$refs.app.color=null
      }
    }
  }
}
</script>
<style>
@import './assets/css/base.css';
</style>
