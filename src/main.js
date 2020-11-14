import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/common.css" //引入css重置文件
import {obj} from './assets/js/utils' //引入js rem

//导入vant框架
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
//
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
   mounted() {
     obj.setRem() //文件挂载
     this.$router.push('/about'); //    切换样式
   },
  render: h => h(App)
}).$mount('#app')
