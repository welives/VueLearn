<template>
  <div class="mt-3">
    <!-- 获取组件 -->
    <demo-item ref="demoitem"></demo-item>
  </div>
</template>
<script>
import demoItem from './demo-item.vue'
export default {
  name: 'RefDemo3',
  components: {
    demoItem
  },
  data() {
    return {}
  },
  // 页面渲染完成
  mounted() {
    // 操作子组件
    this.$refs.demoitem.$refs.input.value = '我是子组件'
    this.$refs.demoitem.focus()
    this.$refs.demoitem.renameHeader('父组件操作子组件')
  }
}
</script>
<style scoped></style>
