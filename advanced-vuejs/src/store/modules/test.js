export default {
  namespaced: true,
  state: {
    list: [
      { id: 1, name: '商品一', status: true, num: 1 },
      { id: 2, name: '商品二', status: false, num: 5 },
      { id: 3, name: '商品三', status: true, num: 8 },
      { id: 4, name: '商品四', status: false, num: 13 },
      { id: 5, name: '商品五', status: false, num: 3 },
      { id: 6, name: '商品六', status: true, num: 15 },
      { id: 7, name: '商品七', status: false, num: 22 },
      { id: 8, name: '商品八', status: false, num: 0 }
    ],
    number: 1
  },
  mutations: {
    increment(state, value) {
      state.number += value
      console.log(state.number)
    }
  },
  actions: {
    asyncIncrement(context, value) {
      // context 相当于 this.$store
      setInterval(() => {
        context.commit('increment', value)
      }, 2000)
    }
  }
}
