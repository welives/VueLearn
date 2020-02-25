<template>
  <div></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'State',
  computed: {
    // 对应第二种方法
    ...mapState('test', ['list'])
  },
  created() {
    // 第一种方法
    console.log(this.$store.state.test.list)
    // 第二种方法
    console.log(this.list)
  }
}
</script>

<style scoped></style>
