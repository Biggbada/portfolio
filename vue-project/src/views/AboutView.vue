<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import HeaderView from '../components/HeaderView.vue'
import LeftAsideView from '../components/LeftAsideView.vue'
import ContentView from '../components/ContentView.vue'
</script>

<template>
  <HeaderView />
  <div class="flew-row bordered">
    <LeftAsideView />
    <ContentView />
  </div>
</template>

<!-- <style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style> -->
