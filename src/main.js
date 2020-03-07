import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Highlight from './utils/highlight'

Vue.config.productionTip = false
Vue.use(Highlight)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
