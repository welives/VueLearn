export default {
  getTrueList: (state) => state.test.list.filter((v) => v.status),
  getFalseList: (state) => state.test.list.filter((v) => !v.status),
  getList: (state, getters) => {
    return getters.getFalseList.filter((v) => v.num > 10)
  },
  getById: (state) => (id) => {
    return state.test.list.filter((v) => v.id === id)
  }
}
