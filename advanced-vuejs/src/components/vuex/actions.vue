<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Actions',
  created() {
    // 第一种方法
    // this.$store.dispatch('test/asyncIncrement', 100)
    // 第二种方法
    this.asyncIncrement(100)
  },
  methods: {
    // 对应第二种方法
    ...mapActions('test', ['asyncIncrement'])
  }
}
</script>

<style scoped></style>
