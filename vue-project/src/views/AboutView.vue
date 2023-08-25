<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import FoldersView from '../components/FoldersView.vue'
import SubHeader from '../components/SubHeader.vue'
import AboutTextContent from '../components/AboutTextContent.vue'
import AboutSnippetsView from '../components/AboutSnippetsView.vue'
import LayoutView from '../views/LayoutView.vue'
</script>

<template>
  <LayoutView>
    <template v-slot:subheader>
      <SubHeader />
      <subheader title="Projets"></subheader>
    </template>
    <template v-slot:aside>
      <FoldersView />
    </template>
    <template v-slot:content>
      <AboutTextContent />
      <AboutSnippetsView />
    </template>
  </LayoutView>
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
