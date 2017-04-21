// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
// import {Table,Form,TableColumn,Popover,Tooltip,Input,Button,FormItem} from 'element-ui'
import ElementUI from 'element-ui'
import axios from 'axios';
// import VueAxios from 'vue-axios';
import './style/common.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter);
// Vue.use(VueAxios, axios)
// Vue.use(Table)
// Vue.use(Form)
// Vue.use(TableColumn)
// Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Input)
// Vue.use(Button)
// Vue.use(FormItem)

// const router = new VueRouter({
//   routes,
//   mode: 'history',
//   base: '/channel/'
// })

Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
