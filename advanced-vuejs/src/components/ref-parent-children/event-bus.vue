<template>
  <div>
    <h3 class="text-center">{{ header }}</h3>
    <bus1></bus1>
    <bus2></bus2>
  </div>
</template>

<script>
import bus1 from './bus1'
import bus2 from './bus2'
export default {
  name: 'eventBus',
  provide() {
    return {
      $eventBus: this
    }
  },
  components: {
    bus1,
    bus2
  },
  data() {
    return {
      header: 'evenBus案例'
    }
  }
}
</script>

<style scoped></style>
