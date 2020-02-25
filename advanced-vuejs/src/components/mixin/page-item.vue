<template>
  <div class="mt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="current === 1 ? 'disabled' : ''">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          v-for="item in getPage"
          :key="item"
          class="page-item"
          :class="current === item ? 'active' : ''"
        >
          <a
            class="page-link"
            href="#"
            @click="$emit('update:current', item)"
            >{{ item }}</a
          >
        </li>
        <li class="page-item" :class="current === getPage ? 'disabled' : ''">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'PageItem',
  props: ['current', 'total', 'limit'],
  computed: {
    getPage() {
      return this.total / this.limit
    }
  }
}
</script>

<style scoped></style>
