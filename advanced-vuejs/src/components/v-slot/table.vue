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
    eTable,
  },
  data() {
    return {
      columns: [
        { name: '姓名', slot: 'name' },
        { name: '性别', slot: 'sex' },
        { name: '年龄', slot: 'age' },
        { name: '操作', slot: 'action' },
      ],
      tableData: [],
    }
  },
  mounted() {
    let tmp = this.$mock.mock({
      'tableData|6': [{ name: '@cname', 'sex|1': ['男', '女'], 'age|5-18': 1 }],
    })
    this.tableData = [...tmp.tableData]
  },
  methods: {
    edit(item) {
      item.name = Math.floor(Math.random() * 10).toString()
    },
    del(index) {
      this.tableData.splice(index, 1)
    },
  },
}
</script>

<style scoped></style>
