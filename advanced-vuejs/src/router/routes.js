const routes = [
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
      },
      {
        path: 'onEmit1',
        name: 'onEmit1',
        component: () => import('@/components/on-emit/demo1')
      },
      {
        path: 'onEmit2',
        name: 'onEmit2',
        component: () => import('@/components/on-emit/demo2')
      },
      {
        path: 'vModel',
        name: 'vModel',
        component: () => import('@/components/v-model/demo')
      },
      {
        path: 'directive',
        name: 'directive',
        component: () => import('@/components/directive/demo')
      },
      {
        path: 'skeleton',
        name: 'skeleton',
        component: () => import('@/components/directive/skeleton')
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/components/directive/menu')
      },
      {
        path: 'nextTick',
        name: 'nextTick',
        component: () => import('@/components/nextTick/demo')
      },
      {
        path: 'sync',
        name: 'sync',
        component: () => import('@/components/sync/demo')
      },
      {
        path: 'mixin',
        name: 'mixin',
        component: () => import('@/components/mixin/demo')
      },
      {
        path: 'page',
        name: 'page',
        component: () => import('@/components/mixin/page.vue')
      },
      {
        path: 'slot',
        name: 'slot',
        component: () => import('@/components/v-slot/demo')
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/components/v-slot/table')
      },
      {
        path: 'state',
        name: 'state',
        component: () => import('@/components/vuex/state')
      },
      {
        path: 'getters',
        name: 'getters',
        component: () => import('@/components/vuex/getters')
      },
      {
        path: 'mutations',
        name: 'mutations',
        component: () => import('@/components/vuex/mutations')
      },
      {
        path: 'actions',
        name: 'actions',
        component: () => import('@/components/vuex/actions')
      },
      {
        path: 'mock',
        name: 'mock',
        component: () => import('@/components/mock/demo')
      }
    ]
  }
]
export default routes
