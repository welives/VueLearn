<template>
  <div class="p-3">
    <div v-show="showMsg" class="alert alert-primary">消息提示</div>
    <nav class="nav nav-pills nav-justified">
      <router-link
        v-for="(item, index) in navList"
        :key="index"
        :to="item.url"
        :class="['nav-link', { active: navIndex === index }]"
        @click.native="changeNav(index, item)"
        >{{ item.name }}</router-link
      >
    </nav>
    <router-view></router-view>
    <button v-show="showBtn" class="btn btn-primary" @click="clickEvent()">
      index.vue点击事件
    </button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  provide() {
    return {
      showHide: this.showHide,
      $_index: this
    }
  },
  data() {
    return {
      showMsg: false,
      showBtn: false,
      navIndex: 0,
      navList: [
        { name: '首页', url: '/' },
        { name: '获取普通元素', url: 'refDemo1' },
        { name: '获取列表', url: 'refDemo2' },
        { name: '获取组件', url: 'refDemo3' },
        { name: '子组件操作父组件', url: 'refDemo4' },
        { name: '依赖注入', url: 'provide' },
        { name: '表单验证实例', url: 'form' },
        { name: '局部监听', url: 'onEmit1' },
        { name: '全局监听', url: 'onEmit2' },
        { name: '自定义组件v-model', url: 'vModel' },
        { name: '自定义指令', url: 'directive' },
        { name: '骨架屏实例', url: 'skeleton' },
        { name: '右键下拉菜单实例', url: 'menu' },
        { name: 'nextTick案例', url: 'nextTick' },
        { name: 'sync案例', url: 'sync' },
        { name: '混入', url: 'mixin' },
        { name: '分页组件实例', url: 'page' },
        { name: '插槽', url: 'slot' },
        { name: '表格组件实例', url: 'table' },
        { name: 'Vuex的State使用', url: 'state' },
        { name: 'Vuex的Getters使用', url: 'getters' },
        { name: 'Vuex的Mutations使用', url: 'mutations' },
        { name: 'Vuex的Actions使用', url: 'actions' },
        { name: 'Mock示例', url: 'mock' }
      ],
      currentNav: '首页'
    }
  },
  watch: {
    currentNav(newValue) {
      if (newValue === '全局监听') {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
    },
    navIndex() {
      const key = 'navActive'
      sessionStorage.setItem(key, JSON.stringify({ nav: this.navIndex }))
    }
  },
  created() {
    this.__initNavBar()
  },
  methods: {
    __initNavBar() {
      let n = sessionStorage.getItem('navActive')
      if (n) {
        n = JSON.parse(n)
        this.navIndex = n.nav
      }
    },
    changeNav(index, item) {
      if (this.navIndex === index) return
      this.navIndex = index
      this.currentNav = item.name
    },
    showHide(data) {
      this.showMsg = data
    },
    clickEvent() {
      this.$emit('test', {
        value: '我是index.vue的点击事件'
      })
    }
  }
}
</script>

<style scoped></style>
