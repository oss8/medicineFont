import Vue from 'vue'
import Router from 'vue-router'
import Bind from '@/components/bind'
import Login from '@/components/login'
import Me from '@/components/me'
import Profile from '@/components/profile'
import modify from '@/components/modify'
import record from '@/components/record'
import recordList from '@/components/recordList'
import myQrCode from '@/components/myQrCode'

Vue.use(Router)

 var router =  new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: Me
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind
    },
    // {
    //   path: '/me',
    //   name: 'me',
    //   component: Me
    // },
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
      path: '/record/:id',
      name: 'record',
      component: record
    },
    {
      path: '/recordList/:context',
      name: 'recordList',
      component: recordList
    },
    {
      path: '/myQrCode/:id',
      name: 'myQrCode',
      component: myQrCode
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