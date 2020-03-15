import Vue from 'vue'
import './plugins/element'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import '../mock'

const $bus = new Vue()
Object.defineProperties(Vue.prototype, {
  $cookies: {
    get() {
      return Cookies
    }
  },
  $bus: {
    get() {
      return $bus
    }
  }
})
Vue.config.productionTip = false

// 全局引入mixin
// import mixin from '@/components/mixin/mixin.js'
// Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
