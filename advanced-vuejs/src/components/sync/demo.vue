<template>
  <div class="mt-3">
    <demo-item :msg.sync="msg"></demo-item>
  </div>
</template>

<script>
import demoItem from './demo-item.vue'
export default {
  name: 'sync',
  components: {
    demoItem
  },
  data() {
    return {
      msg: '我是父组件传过去的'
    }
  }
}
</script>

<style scoped></style>
