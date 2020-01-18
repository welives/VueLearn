<template>
  <div class="mt-3">
    <h1 ref="h1">{{ msg }}</h1>
    <button class="btn btn-primary" @click="test">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'nextTick',
  data() {
    return {
      msg: '$nextTick案例'
    }
  },
  created() {
    // this.$refs.h1.innerHTML = '修改内容' // 不能直接修改,会报错,因为页面未渲染完成
    // 通过下面的方式才能进行修改
    // this.$nextTick(() => {
    //   this.$refs.h1.innerHTML = '修改内容'
    // })
  },
  mounted() {
    // this.$refs.h1.innerHTML = '修改内容' // 页面已渲染完成,可以修改
  },
  methods: {
    test() {
      this.msg = '修改内容'
      // console.log(this.$refs.h1.innerHTML) // 打印 $nextTick案例
      // 通过下面的方式才能打印出修改后的内容
      this.$nextTick(() => {
        console.log(this.$refs.h1.innerHTML)
      })
    }
  }
}
</script>

<style scoped></style>
