<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'zForm',
  props: ['form', 'validate'],
  // 依赖注入到子组件
  provide() {
    return {
      form: this.form,
      validate: this.validate
    }
  }
}
</script>

<style scoped></style>
