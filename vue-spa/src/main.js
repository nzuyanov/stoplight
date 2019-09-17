import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import slContainer from './components/sl-container.vue'

const screenGreen = { template: '<sl-container activeColor="green"></sl-container>' }
const screenYellow = { template: '<sl-container activeColor="yellow"></sl-container>' }
const screenRed = { template: '<sl-container activeColor="red"></sl-container>' }

Vue.use(Router)
Vue.component('sl-container', slContainer)

const router = new Router({
  routes: [
    {
      path: '/', redirect: '/green',
      component: screenGreen,
    },
    {
      path: '/green',
      component: screenGreen,
    },
    {
      path: '/yellow',
      component: screenYellow,
    },
    {
      path: '/red',
      component: screenRed,
    },
  ]
 })

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
})
