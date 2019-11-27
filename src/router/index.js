import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/home/home'], resolve) // 首页
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/aboutUs/aboutUs'], resolve) // 关于我们
    },
    {
      path: '/community',
      name: 'community',
      meta: {
        keepAlive: false // 不需要缓存
      },
      component: resolve => require(['@/pages/Community/community'], resolve) // 社区
    },
    {
      path: '/lab',
      name: 'lab',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/lab/index'], resolve) // 实验室
    },
    {
      path: '/bergOne',
      name: 'bergOne',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/bergOne/bergOne'], resolve) // 实验室
    },
    {
      path: '/lab/ai',
      name: 'ai',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/lab/ai'], resolve) // 实验室---人工智能
    },
    {
      path: '/lab/finance',
      name: 'finance',
      meta: {
        keepAlive: true
      },
      component: resolve => require(['@/pages/lab/finance'], resolve) // 实验室---金融
    }
  ]
})
