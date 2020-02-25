<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Getters',
  computed: {
    // 对应第二种方法
    ...mapGetters(['getTrueList', 'getFalseList', 'getList', 'getById'])
  },
  created() {
    // 第一种方法
    console.log(this.$store.getters.getTrueList)
    // 第二种方法
    console.log(this.getTrueList)
    console.log(this.getFalseList)
    console.log(this.getList)
    console.log(this.getById(1))
  }
}
</script>

<style scoped></style>
