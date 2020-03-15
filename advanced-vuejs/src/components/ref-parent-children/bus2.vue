<template>
  <div class="mt-3">
    <h4>{{ msg1 }}</h4>
    <h4>{{ msg2 }}</h4>
    <h4>{{ msg3 }}</h4>
    <h4>{{ msg4 }}</h4>
  </div>
</template>

<script>
import eventBus from './event-bus.js'
export default {
  name: 'bus2',
  inject: ['$eventBus'],
  data() {
    return {
      msg1: '通过父组件充当调度器',
      msg2: '通过依赖注入充当调度器',
      msg3: '通过事件总线充当调度器',
      msg4: '通过全局事件总线充当调度器'
    }
  },
  mounted() {
    // 第一种方式可以通过父组件来充当调度器
    this.$parent.$on('toBus2WithParent', (msg) => {
      this.msg1 = msg
      this.$parent.$emit('toBus1WithParent', '我是bus2组件通过父组件返回的消息')
    })

    // 第二种方式可以通过依赖注入来充当调度器
    this.$eventBus.$on('toBus2WithProvide', (msg) => {
      this.msg2 = msg
      this.$eventBus.$emit(
        'toBus1WithProvide',
        '我是bus2组件通过依赖注入返回的消息'
      )
    })

    // 第三种方式可以通过事件总线来充当调度器
    eventBus.$on('toBus2WithEventBus', (msg) => {
      this.msg3 = msg
      eventBus.$emit('toBus1WithEventBus', '我是bus2组件通过事件总线返回的消息')
    })

    // 第四种方式可以通过全局事件总线来充当调度器
    this.$bus.$on('toBus2With$bus', (msg) => {
      console.log(msg)
      this.msg4 = msg
      this.$bus.$emit(
        'toBus1With$bus',
        '我是bus2组件通过全局事件总线返回的消息'
      )
    })
  }
}
</script>

<style scoped></style>
