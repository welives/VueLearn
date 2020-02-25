<template>
  <div></div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Mutations',
  created() {
    // 第一种方法
    // this.$store.commit('test/increment', 20)
    // 第二种方法
    this.increment(10)
  },
  methods: {
    // 对应第二种方法
    ...mapMutations('test', ['increment'])
  }
}
</script>

<style scoped></style>
