import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }, {
    path: '/Sousuo',
    name: 'Sousuo',
    component: () => import('../views/Sousuo.vue')
  }, {
    path: '/Dinan',
    name: 'Dinan',
    component: () => import('../views/Dinan.vue')
  }, {
    path: '/Wode',
    name: 'Wode',
    component: () => import('../views/Wode.vue')
  }, 
  {
    path: '/Wodes',
    name: 'Wodes',
    component: () => import('../views/Wodes.vue')
  }, {
    path: '/Denglu',
    name: 'Denglu',
    component: () => import('../components/denglu/Denglu.vue')
    , children:[
      {
        path: 'Mima',
        name: 'Mima',
        component:()=>import('./../components/denglu/Mima.vue')
      },
      {
        path: 'Dindl',
        name: 'Dindl',
        component: () => import('./../components/denglu/Dindl.vue')
      }
    ]
  },
  {
    path: '/szctest1',
    name: 'szctest1',
    component: () => import('../components/pinpaixq/szctest1.vue'),
    children: [{
        path: 'shanpi',
        name: 'shanpi',
        component: () => import('./../components/pinpaixq/shanjia.vue'),
        children:[
          {
            path: 'sanji',
              name: 'sanji',
              component: () => import('./../components/fonsj/sanji.vue'),
          },
           {
            path: 'sanji1',
            name: 'sanji1',
            component: () => import('./../components/fonsj/sanji1.vue'),
          }, {
            path: 'sanji2',
            name: 'sanji2',
            component: () => import('./../components/fonsj/sanji2.vue'),
          }, {
            path: 'sanji3',
            name: 'sanji3',
            component: () => import('./../components/fonsj/sanji3.vue'),
          }, {
            path: 'sanji4',
            name: 'sanji4',
            component: () => import('./../components/fonsj/sanji4.vue'),
          }, {
            path: 'sanji5',
            name: 'sanji5',
            component: () => import('./../components/fonsj/sanji5.vue'),
          }
        ]
      },
      {
        path: 'xianqing',
        name: 'xianqing',
        component: () => import('./../components/pinpaixq/shanpi.vue')
      },
      {
        path: 'shanjia',
        name: 'shanjia',
        component: () => import('./../components/pinpaixq/shangjias.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
