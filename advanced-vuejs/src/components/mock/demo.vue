<template>
  <div class="mt-3">
    <button class="btn btn-primary" @click="getData">Mock</button>
  </div>
</template>

<script>
export default {
  name: 'Mock',
  data() {
    return {
      mockData: []
    }
  },
  methods: {
    getData() {
      this.axios('/api/test')
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
