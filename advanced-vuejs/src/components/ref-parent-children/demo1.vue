<template>
  <div class="mt-3">
    <!-- 获取普通元素 -->
    <div class="mt-3">
      <h3>获取input</h3>
      <input type="text" class="form-control" ref="input1" />
    </div>
    <div class="mt-3">
      <h3>修改样式</h3>
      <input type="text" class="form-control" ref="input2" />
    </div>
    <div class="mt-3">
      <h3>获取焦点</h3>
      <input type="text" class="form-control" ref="input3" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'refDemo1',
  data() {
    return {}
  },
  // 页面渲染完成
  mounted() {
    // 获取input
    this.$refs.input1.value = '获取input'

    // 修改样式
    this.$refs.input2.value = '修改样式'
    this.$refs.input2.className += ' is-invalid'

    // 获取焦点
    this.$refs.input3.value = '获取焦点'
    this.$refs.input3.focus()
  }
}
</script>
<style scoped></style>
