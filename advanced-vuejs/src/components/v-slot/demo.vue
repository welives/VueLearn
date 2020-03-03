<template>
  <div class="mt-3">
    <h3>后备内容</h3>
    <demo-item>
      <template v-slot:header></template>
      <template v-slot:footer></template>
    </demo-item>
    <br />
    <h3>具名插槽缩写</h3>
    <demo-item>
      {{ defaultSlot }}
      <template #header>{{ headerSlot }}</template>
      <template #footer>{{ footerSlot }}</template>
    </demo-item>
    <br />
    <h3>作用域插槽</h3>
    <demo-item :message="footerSlot">
      <!-- 动态插槽名,方括号中不能存在引号和空格 -->
      <template #[attr]="{sendHeader}">
        {{ sendHeader }}
      </template>
      <!-- 这里使用data来接收子组件传过来的sendList,即 data={sendList} -->
      <template #default="data">
        <ul class="list-group">
          <li
            v-for="(item, index) in data.sendList"
            :key="index"
            class="list-group-item"
          >
            {{ item.text }}
          </li>
        </ul>
      </template>
      <!-- 这里直接解构子组件传过来的sendFooter -->
      <template #footer="{sendFooter}">
        {{ sendFooter }}
      </template>
    </demo-item>
  </div>
</template>

<script>
import demoItem from './demo-item.vue'
export default {
  name: 'VSlot',
  components: {
    demoItem
  },
  data() {
    return {
      headerSlot: '我会覆盖DemoItem组件中的header插槽',
      defaultSlot: '我会覆盖DemoItem组件中的default插槽',
      footerSlot: '我会覆盖DemoItem组件中的footer插槽',
      attr: 'header'
    }
  }
}
</script>

<style scoped></style>
