import Vue from 'vue'
import Router from 'vue-router'
import Bind from '@/components/bind'
import Login from '@/components/login'
import Me from '@/components/me'
import Profile from '@/components/profile'
import modify from '@/components/modify'
import record from '@/components/record'
import recordList from '@/components/recordList'
Vue.use(Router)

 var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Bind',
      component: Bind
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/modify',
      name: 'modify',
      component: modify
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/recordList',
      name: 'recordList',
      component: recordList
    },
    {
      path: '*',
      name: 'other',
      component: Login
    }
  ]
})

router.beforeEach(({ meta, path }, from, next) => {
  // const { auth = true } = meta
  // const isLogin = Boolean(localStorage.getItem("eshine_channel")) // true用户已登录， false用户未登录
  // if (auth && !isLogin && path !== '/login') {
  //   let to = { path: '/login' }
  //   return next(to)
  // }
  next()
})

export default router