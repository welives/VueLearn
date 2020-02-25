<template>
  <div class="mt-3">
    <h3>{{ header }}</h3>
    <input ref="input" type="text" class="form-control" @input="changeInput" />
  </div>
</template>

<script>
export default {
  name: 'DemoItem',
  data() {
    return {
      header: '我是子组件'
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus()
    },
    renameHeader(data) {
      this.header = data
    },
    // $parent
    changeInput(e) {
      this.$parent.header = e.target.value
    }
  }
}
</script>

<style scoped></style>
