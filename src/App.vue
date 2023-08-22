<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://www.parks.com.br/quem-somos" target="_blank">
      <img src="/parks.png" class="logo" alt="Vite logo" style="border-radius: 8px;" />
    </a>
  </div>
  <HelloWorld msg="Parks Smart" />
</template>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #ff6964aa);
}
</style>
