<template>
  <div class="mt-3">
    <!-- 获取列表 -->
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in list"
        :key="index"
        ref="list"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'refDemo2',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  // 页面渲染完成
  mounted() {
    // 修改样式
    this.$refs.list.forEach((v) => {
      v.style.backgroundColor = '#' + Math.floor(Math.random() * 1000000)
    })
  }
}
</script>
<style scoped></style>
