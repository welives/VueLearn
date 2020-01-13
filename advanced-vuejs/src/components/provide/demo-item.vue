<template>
  <div>
    <div class="card">
      <!-- 注意,这里的 title 值不会被修改,因为依赖注入的值是一次性的 -->
      <div class="card-body">{{ title }}</div>
    </div>
    <button type="button" class="btn btn-primary m-2" @click="clickEvent">
      通过子组件修改父组件的数据
    </button>
    <button type="button" class="btn btn-danger m-2" @click="showHide(true)">
      显示消息提示框
    </button>
    <button type="button" class="btn btn-warning m-2" @click="showHide(false)">
      隐藏消息提示框
    </button>
  </div>
</template>

<script>
export default {
  name: 'DemoItem',
  inject: ['title', 'rename', 'show', 'showHide'],
  methods: {
    clickEvent() {
      this.rename('我是子组件派来修改你的')
    }
  }
}
</script>

<style scoped></style>
