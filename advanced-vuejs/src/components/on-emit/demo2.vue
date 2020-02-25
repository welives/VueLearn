<template>
  <div class="mt-3">
    <!-- 全局监听 -->
    <demo-item></demo-item>
    <demo-item></demo-item>
  </div>
</template>

<script>
import demoItem from './demo-item2.vue'
export default {
  name: 'OnEmitDemo2',
  inject: ['$_index'],
  components: {
    demoItem
  },
  mounted() {
    // 开启一个全局监听事件
    this.$_index.$on('test', (e) => {
      console.log('---------demo---------')
      console.log(e)
    })
  }
}
</script>

<style scoped></style>
