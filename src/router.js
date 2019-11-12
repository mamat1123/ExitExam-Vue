import Vue from 'vue'
import Router from 'vue-router'
import Login from './view/Login.vue'
import Report from './view/Report.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    }
  ]
})
