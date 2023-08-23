<template>
  <DefaultNav />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue"
import DefaultNav from "./components/DefaultNav.vue"
export default defineComponent({
  name: "App",
  components: {
    DefaultNav
  }
})
</script>
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
