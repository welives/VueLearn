<template>
  <div>
    <p>
      <el-button type="primary" @click="sendMsg1">{{ btnName1 }}</el-button>
    </p>
    <p>
      <el-button type="primary" @click="sendMsg2">{{ btnName2 }}</el-button>
    </p>
    <p>
      <el-button type="primary" @click="sendMsg3">{{ btnName3 }}</el-button>
    </p>
    <p>
      <el-button type="primary" @click="sendMsg4">{{ btnName4 }}</el-button>
    </p>
  </div>
</template>

<script>
import eventBus from './event-bus.js'
export default {
  name: 'bus1',
  inject: ['$eventBus'],
  data() {
    return {
      btnName1: '通过父组件充当调度器',
      btnName2: '通过依赖注入充当调度器',
      btnName3: '通过事件总线充当调度器',
      btnName4: '通过全局事件总线充当调度器'
    }
  },
  mounted() {
    this.$parent.$on('toBus1WithParent', (msg) => {
      this.btnName1 = msg
    })

    this.$parent.$on('toBus1WithProvide', (msg) => {
      this.btnName2 = msg
    })

    eventBus.$on('toBus1WithEventBus', (msg) => {
      this.btnName3 = msg
    })

    this.$bus.$on('toBus1With$bus', (msg) => {
      this.btnName4 = msg
    })
  },
  methods: {
    // 第一种方式可以通过父组件来充当调度器
    sendMsg1() {
      this.$parent.$emit(
        'toBus2WithParent',
        '我是bus1组件通过父组件传递过来的消息'
      )
    },

    // 第二种方式可以通过依赖注入来充当调度器
    sendMsg2() {
      this.$eventBus.$emit(
        'toBus2WithProvide',
        '我是bus1组件通过依赖注入传递过来的消息'
      )
    },

    // 第三种方式可以通过事件总线来充当调度器
    sendMsg3() {
      eventBus.$emit(
        'toBus2WithEventBus',
        '我是bus1组件通过事件总线传递过来的消息'
      )
    },

    // 第四种方式可以通过全局事件总线来充当调度器
    sendMsg4() {
      this.$bus.$emit(
        'toBus2With$bus',
        '我是bus1组件通过全局事件总线传递过来的消息'
      )
    }
  }
}
</script>

<style scoped></style>
