<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th v-for="(item, index) in columns" :key="index">{{ item.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(td, tdi) in columns" :key="tdi">
          {{ item[td.slot] || '' }}
          <slot :name="td.slot" :data="{ item, index }"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ETable',
  props: ['columns', 'data']
}
</script>

<style scoped></style>
