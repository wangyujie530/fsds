import Vue from 'vue'
import Vuex from 'vuex'
import ing from './../../public/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:{},
    indexz:'',
    ullist:[],
    list:ing,
    zons:'0'
    ,zjge:0,
    isfla:false,
    isflas: true
  },
  mutations: {

  },
  
   
  actions: {
  },
  modules: {
  }
})
