<template>
  <div class="mt-3">
    <!-- 具名插槽 第一种写法 -->
    <!-- <demo-item>
      <template v-slot:header>
        我是头部
      </template>
      <div>我是默认slot的内容</div>
      <template v-slot:footer>
        我是底部
      </template>
    </demo-item> -->

    <!-- 具名插槽 第二种写法 -->
    <!-- <demo-item>
      <template #header>
        我是头部
      </template>
      <div>我是默认slot的内容</div>
      <template #footer>
        我是底部
      </template>
    </demo-item> -->

    <!-- 作用域插槽 -->
    <demo-item>
      <template #header="{header}">
        {{ header }}
      </template>
      <template #default="{list}">
        <div>我是默认slot的内容</div>
        <ul class="list-group">
          <li
            v-for="(item, index) in list"
            :key="index"
            class="list-group-item"
          >
            {{ item }}
          </li>
        </ul>
      </template>
      <template #footer="{footer}">
        {{ footer }}
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
  }
}
</script>

<style scoped></style>
