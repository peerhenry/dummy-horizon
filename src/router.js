import Vue from 'vue'
import Router from 'vue-router'
import Sun from './views/Sun.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sun',
      component: Sun
    },
    {
      path: '/phone',
      name: 'phone',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "phone" */ './views/Phone.vue')
    }
  ]
})
