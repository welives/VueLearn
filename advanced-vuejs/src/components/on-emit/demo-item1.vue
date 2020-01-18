<template>
  <div class="mt-3">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'demoItem1',
  inject: ['$_demo'],
  data() {
    return {
      msg: '我是子组件'
    }
  },
  mounted() {
    this.$_demo.$on('test', (e) => {
      console.log('----------demoItem-----------')
      console.log(e.value)

      this.msg = e.value
    })
  }
}
</script>

<style scoped></style>
