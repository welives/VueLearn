import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '../mock'

Vue.config.productionTip = false

// 全局引入mixin
// import mixin from '@/components/mixin/mixin.js'
// Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
