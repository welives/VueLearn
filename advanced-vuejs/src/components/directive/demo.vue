<template>
  <div class="mt-3">
    <!-- 基础 -->
    <div class="form-group">
      <label for="">基础</label>
      <input type="text" class="form-control" v-focus="123" />
    </div>

    <!-- 列表更新 -->
    <div class="form-group">
      <label for="">列表更新</label>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item, index) in list"
          :key="index"
          v-list="item"
          @click="setItem(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'directive',
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  directives: {
    focus: {
      bind(el, binding, vnode) {
        console.log('--------bind---------')
        console.log('binding: ', binding)
        console.log('vnode: ', vnode)
      },
      inserted(el, binding) {
        console.log('--------inserted--------')
        console.log('binding: ', binding)
        el.focus()
      },
      update(el, binding) {
        console.log('--------update---------')
        console.log('binding: ', binding)
      }
    },
    list: {
      update(el, binding) {
        console.log('--------update---------')
        if (binding.oldValue !== binding.value) {
          console.log('binding: ', binding)
        }
      }
    }
  },
  methods: {
    setItem(index) {
      console.log(index)
      // this.list[index] = Math.floor(Math.random() * 10)
      let ranNum = Math.floor(Math.random() * 10)
      this.$set(this.list, index, ranNum)
    }
  }
}
</script>

<style scoped></style>
