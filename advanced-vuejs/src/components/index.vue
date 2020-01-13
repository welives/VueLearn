<template>
  <div class="p-3">
    <div v-show="show" class="alert alert-primary">消息提示</div>
    <nav class="nav nav-pills nav-justified">
      <router-link
        :to="item.url"
        v-for="(item, index) in navList"
        :key="index"
        :class="['nav-link', { active: currentNav === item.name }]"
        >{{ item.name }}</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  provide() {
    return {
      show: this.show,
      showHide: this.showHide
    }
  },
  data() {
    return {
      show: false,
      navList: [
        { name: '首页', url: '/' },
        { name: '获取普通元素', url: 'refDemo1' },
        { name: '获取列表', url: 'refDemo2' },
        { name: '获取组件', url: 'refDemo3' },
        { name: '子组件操作父组件', url: 'refDemo4' },
        { name: '依赖注入', url: 'provide' },
        { name: '表单验证组件实例', url: 'form' }
      ],
      currentNav: '首页'
    }
  },
  methods: {
    showHide(data) {
      this.show = data
    }
  }
}
</script>

<style scoped></style>
