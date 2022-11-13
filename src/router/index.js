import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index')
  },

  {
    path: '/demo',
    name:'demo',
    component:() => import('../views/demo/index'),
    children:[
      {
        path:'animation',
        name:'animation',
        component: () => import('../components/animation/index')
      },
      {
        path:'my-video',
        name:'my-video',
        component: () => import('../components/myVideo/index')
      },
      // 下雪效果
      {
        path:'my-snow',
        name:'my-snow',
        component: () => import('../components/snowBg/index')
      },

    ],

  }
]

const router = new VueRouter({
  routes
})

export default router
