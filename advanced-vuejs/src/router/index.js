import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes })

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    // 已登录
    if (to.name === 'mock') {
      Vue.prototype.$message.error('请不要重复登录')
      return next(from.name ? from.name : '')
    }
    next()
  } else {
    // 未登录
    if (to.name === 'mock') {
      return next()
    }
    Vue.prototype.$message.error('请先登录')
    next('mock')
  }
})

export default router
