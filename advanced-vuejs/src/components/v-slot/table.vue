<template>
  <div class="mt-3">
    <e-table :columns="columns" :data="tableData">
      <template #action="{scope}">
        <button class="btn btn-primary mr-2" @click="edit(scope.item)">
          修改
        </button>
        <button class="btn btn-danger" @click="del(scope.index)">删除</button>
      </template>
    </e-table>
  </div>
</template>

<script>
import eTable from './e-table.vue'
export default {
  name: 'TableDemo',
  components: {
    eTable
  },
  data() {
    return {
      columns: [
        { name: '姓名', slot: 'name' },
        { name: '性别', slot: 'sex' },
        { name: '年龄', slot: 'age' },
        { name: '操作', slot: 'action' }
      ],
      tableData: [
        { name: '小明', sex: '男', age: 22 },
        { name: '小红', sex: '女', age: 23 },
        { name: '小黄', sex: '男', age: 20 }
      ]
    }
  },
  methods: {
    edit(item) {
      item.name = Math.floor(Math.random() * 10).toString()
    },
    del(index) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
