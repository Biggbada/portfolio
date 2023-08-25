<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import ProjectsCarousel from '../components/ProjectsCarousel.vue'
import ProjectsAside from '../components/ProjectsAside.vue'
import ProjectsSubHeader from '../components/ProjectsSubHeader.vue'
import LayoutView from '../views/LayoutView.vue'
</script>

<template>
  <LayoutView>
    <template v-slot:subheader>
      <ProjectsSubHeader />
      <subheader title="Projets"></subheader>
    </template>
    <template v-slot:aside>
      <ProjectsAside />
    </template>
    <template v-slot:content>
      <ProjectsCarousel />
    </template>
  </LayoutView>
</template>
