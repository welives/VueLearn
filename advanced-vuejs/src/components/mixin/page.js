import pageItem from './page-item.vue'
export default {
  components: {
    pageItem
  },
  data() {
    return {
      current: 1,
      total: 100,
      limit: 10
    }
  }
}
