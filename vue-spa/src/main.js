import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Colorbox from './components/sl-colorbox.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: Colorbox,
    },
    {
      path: '/green',
      name:'screenGreen',
      component: Colorbox,
      props: true,
    },
    {
      path: '/yellow',
      name:'screenYellow',
      component: Colorbox,
      props: true,
    },
    {
      path: '/red',
      name:'screenRed',
      component: Colorbox,
      props: true,
    },
  ]
 })

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
