<template>
  <div class="mt-3">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(item, index) in list"
        :key="index"
        @click="test(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import mixin from './mixin.js'
export default {
  name: 'mixin',
  mixins: [mixin],
  data() {
    return {
      // list: [11, 12, 13]
    }
  },
  created() {
    console.log('我是demo里的create')
  },
  mounted() {
    console.log('我是demo里的mounted')
  },
  methods: {
    test(index) {
      console.log('我是demo里的方法' + index)
    }
  }
}
</script>

<style scoped></style>
