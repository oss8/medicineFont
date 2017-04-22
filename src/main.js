// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'nprogress/nprogress.css'
// import 'mint-ui/lib/style.min.css'
// import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import axios from 'axios';
// import './style/common.scss'
// import { Switch,InfiniteScroll,Cell,IndexList, IndexSection } from 'mint-ui';
// Vue.component(Switch.name, Switch);
// Vue.component(IndexList.name, IndexList);
// Vue.component(IndexSection.name, IndexSection);
// Vue.config.productionTip = false
// Vue.use(InfiniteScroll)
// Vue.component(Cell.name, Cell);
Vue.use(Mint);
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
