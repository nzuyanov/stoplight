import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import slContainer from './components/sl-container.vue'

const timeSettings = {
  timeGreen: 15,
  timeYellow: 3,
  timeRed: 10,
  timeBlink: 3,
}

export { timeSettings }

const screenGreen = { 
  data: function () {
    return {
      stime: (timeSettings.timeGreen - timeSettings.timeBlink)
    }
  }, 
  template: '<sl-container activeColor="green" :solidTime="stime"></sl-container>' 
}

const screenYellow = { 
  data: function () {
    return {
      stime: (timeSettings.timeYellow - timeSettings.timeBlink)
    }
  }, 
  template: '<sl-container activeColor="yellow" :solidTime="stime"></sl-container>' 
}

const screenRed = { 
  data: function () {
    return {
      stime: (timeSettings.timeRed - timeSettings.timeBlink)
    }
  }, 
  template: '<sl-container activeColor="red" :solidTime="stime"></sl-container>' 
}

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