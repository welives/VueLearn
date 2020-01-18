<template>
  <div class="mt-3">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" @click="$emit('update:msg', getRandom())">
      子组件按钮
    </button>
  </div>
</template>

<script>
export default {
  name: 'demoItem',
  props: ['msg'],
  methods: {
    // clickEvent() {
    //   let num = Math.floor(Math.random() * 100)
    //   this.$emit('update:msg', num)
    // }

    // 简写
    getRandom() {
      return Math.floor(Math.random() * 100)
    }
  }
}
</script>

<style scoped></style>
