<script setup>
import HomeIntro from '../components/HomeIntro.vue'
import HomeGame from '../components/HomeGame.vue'
</script>

<template>
  <div class="template-root">
    <main id="homepage">
      <div id="welcome-section" class="flex-row">
        <HomeIntro />
        <HomeGame />
      </div>
    </main>
  </div>
</template>
