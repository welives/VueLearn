<template>
  <div class="mt-3">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'DemoItem2',
  inject: ['$_index'],
  data() {
    return {
      msg: '我是子组件'
    }
  },
  mounted() {
    // 开启一个全局监听事件
    this.$_index.$on('test', (e) => {
      console.log('---------demoItem---------')
      console.log(e)
      this.msg = e.value
    })
  }
}
</script>

<style scoped></style>
