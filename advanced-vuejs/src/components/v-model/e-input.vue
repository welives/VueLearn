<template>
  <div>
    <label for="">{{ label }}</label>
    <input
      type="text"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'eInput',
  props: ['value', 'label'],
  // 第二种写法,下面的注释掉也没关系,因为一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件
  model: {
    prop: 'value',
    event: 'input'
  }
}
</script>

<style scoped></style>
