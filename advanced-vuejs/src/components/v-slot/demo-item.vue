<template>
  <div class="card">
    <div class="card-header">
      <slot name="header" :sendHeader="header">{{ header }}</slot>
    </div>
    <div class="card-body">
      <!-- 注意这里的 :sendList="list" , sendList被称为插槽prop,名字可以随意取,表示要传递过去的值 -->
      <slot :sendList="list">我是DemoItem组件中的default插槽后备内容</slot>
    </div>
    <div class="card-footer">
      <slot name="footer" :sendFooter="message">{{ footer }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoItem',
  props: ['message'],
  data() {
    return {
      header: '我是DemoItem组件中的header插槽后备内容',
      footer: '我是DemoItem组件中的footer插槽后备内容',
      list: [
        {
          id: 10,
          text: '苹果'
        },
        {
          id: 20,
          text: '香蕉'
        },
        {
          id: 30,
          text: '梨'
        },
        {
          id: 40,
          text: '芒果'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
