<template>
  <div class="mt-3">
    <page-item
      :current.sync="current"
      :total="total"
      :limit="limit"
    ></page-item>
  </div>
</template>

<script>
import page from './page.js'
export default {
  name: 'page',
  mixins: [page],
  data() {
    return {
      // current: 1,
      total: 50
      // limit: 10
    }
  }
}
</script>

<style scoped></style>
