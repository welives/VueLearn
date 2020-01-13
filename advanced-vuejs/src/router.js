import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/components/index'),
      children: [
        {
          path: 'refDemo1',
          name: 'refDemo1',
          component: () => import('@/components/ref-parent-children/demo1')
        },
        {
          path: 'refDemo2',
          name: 'refDemo2',
          component: () => import('@/components/ref-parent-children/demo2')
        },
        {
          path: 'refDemo3',
          name: 'refDemo3',
          component: () => import('@/components/ref-parent-children/demo3')
        },
        {
          path: 'refDemo4',
          name: 'refDemo4',
          component: () => import('@/components/ref-parent-children/demo4')
        },
        {
          path: 'provide',
          name: 'provide',
          component: () => import('@/components/provide/demo')
        },
        {
          path: 'form',
          name: 'form',
          component: () => import('@/components/provide/form')
        }
      ]
    }
  ]
})
