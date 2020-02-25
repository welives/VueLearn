<template>
  <div class="mt-3">
    <!-- $children -->
    <h3 class="text-center">{{ header }}</h3>
    <demo-item></demo-item>

    <!-- $parent -->
    <demo-item></demo-item>
  </div>
</template>
<script>
import demoItem from './demo-item.vue'
export default {
  name: 'RefDemo4',
  components: {
    demoItem
  },
  data() {
    return {
      header: '我是父组件'
    }
  },
  // 页面渲染完成
  mounted() {
    // $children
    this.$children[0].renameHeader('通过$children修改子组件')
  }
}
</script>
<style scoped></style>
