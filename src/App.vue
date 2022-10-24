<script setup lang="ts">
import Navbar from "./components/NavBar.vue";
</script>

<template>
  <div id="app" class="font-roboto">
    <Navbar />
    <router-view />
  </div>
</template>

<style scoped>
#app {
  /* font-family: 'Roboto', sans-serif; */
}
</style>
