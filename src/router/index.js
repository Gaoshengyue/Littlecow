import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import User from '@/components/User'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Music from '@/components/Music'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{index:0},
      component: index
    },
    {
      path:'/user',
      name:'user',
       meta:{index:1},
      component:User
    },
     {
      path:'/login',
      name:'login',
       meta:{index:2},
      component:Login
    },
    {
      path:'/register',
      name:'register',
      meta:{index:2},
      component:Register
    },
    {
      path:'/music',
      name:'music',
      meta:{index:3},
      component:Music

    }

  ]
})
