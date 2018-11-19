import Vue from 'vue'
import App from './App'
import axios from 'axios';

Vue.config.productionTip = false
App.mpType = 'app'

axios.defaults.baseURL="https://www.zhengzhicheng.cn/"

//修改适配器adapter
axios.defaults.adapter = function (config){
    // console.log(config);
    return new Promise((resolve,rejects)=>{
        //只需要返回config.url 跟使用什么请求
        wx.request({
          url: config.url, //开发者服务器接口地址",
        //   你这里的get要跟返回回来的数据要是小写
          method: config.method==='get'? 'GET':'POST',
          success: res => {
              resolve(res)
          },
          fail: err => {
              rejects(err)
          },
        });

    })
}

Vue.prototype.$axios=axios


const app = new Vue(App)
app.$mount()
