<template>
  <div class="mt-3">
    <h1 class="p-5">{{ title }}</h1>
    <demo-item></demo-item>
  </div>
</template>

<script>
import demoItem from './demo-item.vue'
export default {
  name: 'ProvideDemo',
  provide() {
    return {
      title: this.title,
      rename: this.rename
    }
  },
  components: {
    demoItem
  },
  data() {
    return {
      title: '我是父组件的标题'
    }
  },
  methods: {
    rename(data) {
      this.title = data
    }
  }
}
</script>

<style scoped></style>
