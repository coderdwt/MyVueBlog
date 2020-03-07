import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('../views/home/home.vue'),
    meta:{
      title:'首页・博客 | dwt'
    }
  },
  {
    path:'/catalogue',
    component:()=>import('../views/archived/archived.vue'),
    meta:{
      title:'归档・博客 | dwt'
    }
  },
  {
    path:'/about',
    component:()=>import ('../views/about/about.vue'),
    meta:{
      title:'关于・博客 | dwt'
    }
  },
  {
    path:'/friend',
    component:()=>import ('../views/friend/friendView.vue'),
    meta:{
      title:'友链・博客 | dwt'
    }
  },
  {
    path:'/article/:articleID',
    component:()=>import ('../views/article/articleView.vue'),
    meta:{
      title:'文章・博客 | dwt'
    }
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{//前置守卫
  document.title=to.meta.title
  next()
}) 

export default router
