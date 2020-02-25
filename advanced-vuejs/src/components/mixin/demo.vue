<template>
  <div class="mt-3">
    <ul class="list-group">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="list-group-item"
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
  name: 'Mixin',
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
