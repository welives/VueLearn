<template>
  <div class="mt-3">
    <h3 class="text-center">{{ value }}</h3>
    <div class="form-group">
      <e-input
        :value="value"
        @input="value = $event"
        label="第一种写法"
      ></e-input>
    </div>
    <div class="form-group">
      <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件 -->
      <e-input v-model="value" label="第二种写法"></e-input>
    </div>
  </div>
</template>

<script>
import eInput from './e-input.vue'
export default {
  name: 'vModel',
  components: {
    eInput
  },
  data() {
    return {
      value: '请输入用户名'
    }
  }
}
</script>

<style scoped></style>
