<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" :header="header"></slot>
    </div>
    <div class="card-body">
      <slot :list="list"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer" :footer="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demoItem',
  data() {
    return {
      header: '我是子组件的头部',
      footer: '我是子组件的底部',
      list: [1, 2, 3]
    }
  }
}
</script>

<style scoped></style>
