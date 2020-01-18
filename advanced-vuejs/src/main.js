import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局引入mixin
// import mixin from '@/components/mixin/mixin.js'
// Vue.mixin(mixin)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
