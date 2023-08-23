<script setup>
import DefaultNav from "./components/DefaultNav.vue"
</script>
<template>
  <DefaultNav />
  <router-view />
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
