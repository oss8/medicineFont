// import ajax from './ajax'
import config from '../config'
import Vue from 'vue'
import {Message} from 'element-ui'
import nprogress from "nprogress";
import axios from 'axios';
import xlsxExport from './xlsx'
// ajax.beforeEach((res, next) => {
//   // res.url = config.baseUrl + res.url
//   // var { accesstoken } = stores.state.user
//   // if (accesstoken) {
//   //   res.data.accesstoken = accesstoken
//   // }
//   next()
// })

// ajax.afterEach((res, next) => {
//   if (res) {
//     next()
//   } else {
//     exports.default.toast('加载失败')
//   }
// })

nprogress.configure({
	minimum: 1,
	showSpinner: false
});
axios.defaults.baseURL = config.baseUrl;

	// Add a request interceptor
axios.interceptors.request.use(function(config) {
	// loadingInstance.service({})
	// Do something before request is sent
	nprogress.start()
	config.headers.token = localStorage.token
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function(response) {
	// Do something with response data
	nprogress.done()
	if (203 == response.status) { //未授权
		localStorage.clear()
		router.push({
			name: 'home'
		})
	}
	if (204 == response.status) { //无响应内容
    // exports.default.toast('没有数据');
    Message({
      message: '没有数据',
      type: 'error'
    })
	}
	return response.data;
}, function(error) {
	nprogress.done()
		// Do something with response error
	Message({
		message: '网络连接错误',
		type: 'error'
	})
	return Promise.reject(error);
});

export default {
  checknumber(str) { 
　　　　var Letters = "1234567890"; 
　　　　var i; 
　　　　var c; 
　　　　for( i = 0; i < Letters.length; i ++ )   {   //Letters.length() ->>>>取字符长度
　　　　　　c = str.charAt( i ); 
　　　　　　if (Letters.indexOf( c ) == -1)   { //在"Letters"中找不到"c"   见下面的此函数的返回值
　　　　　　　　return false; 
　　　   　　} 
　　　　} 
　　　　return true; 
　　},
  toast (msg = '', time = 1500) {
    var toast = document.createElement('div')
    toast.className = 'common-toast common-toast-show'
    toast.innerHTML = msg
    document.body.appendChild(toast)
    toast.style.display = 'block'
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
    var timer = setTimeout(() => {
      toast.className = 'common-toast common-toast-hide'
      clearTimeout(timer)
      var timer2 = setTimeout(() => {
        document.body.removeChild(toast)
        clearTimeout(timer2)
      }, 200)
    }, time)
  },
  xlsxExport,
  axios,
  checkPhone(val) {
        var filter = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;

        if (filter.test(val)) {
            return true;
        } else {
            return false;
        }
    }
}
