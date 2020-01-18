export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  created() {
    console.log('我是mixin里的create')
  },
  mounted() {
    console.log('我是mixin里的mounted')
  },
  methods: {
    test(index) {
      console.log('我是mixin里的方法' + index)
    }
  }
}
