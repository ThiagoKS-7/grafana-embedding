<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()


const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <p>
    AWS IoT Core with C++ Device SDK, Rules-Engine, Timestream and Grafana example
  </p>
  <h1>Grafana Dashboard - ESP32 with DHT22</h1>
  <iframe class="iframe"
    src="https://snapshots.raintank.io/dashboard/snapshot/4ozI8XVcO6hzW8jFlhqwZkHWqX1r6nR5?orgId=2&refresh=5s&kiosk"
    frameborder="0"></iframe>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.frame-wrapper {
  position: relative;
  width: 700px;
  height: 80%;
  overflow-y: hidden;
  overflow-x: scroll;
}

.iframe {
  width: 80vw;
  height: 625px;
}
</style>
