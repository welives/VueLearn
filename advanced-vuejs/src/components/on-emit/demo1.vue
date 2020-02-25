<template>
  <div class="mt-3">
    <!-- 局部监听,只能在当前组件使用 -->
    <button class="btn btn-primary" @click="clickBtn">测试按钮</button>
    <demo-item></demo-item>
    <demo-item></demo-item>
  </div>
</template>

<script>
import demoItem from './demo-item1.vue'
export default {
  name: 'OnEmitDemo1',
  provide() {
    return {
      $_demo: this
    }
  },
  components: {
    demoItem
  },
  mounted() {
    // 开启一个局部监听事件
    this.$on('test', (e) => {
      console.log(e)
    })
  },
  methods: {
    clickBtn() {
      // 通知test事件
      this.$emit('test', {
        value: '测试按钮'
      })
    }
  }
}
</script>

<style scoped></style>
