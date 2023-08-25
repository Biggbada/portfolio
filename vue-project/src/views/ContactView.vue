<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'
import ContactSubHeader from '../components/ContactSubHeader.vue'
import ContactAside from '../components/ContactAside.vue'
import ContactForm from '../components/ContactForm.vue'
import ContactCodeSnippets from '../components/ContactCodeSnippets.vue'
</script>

<template>
  <LayoutView>
    <template v-slot:subheader>
      <ContactSubHeader />
      <subheader title="Projets"></subheader>
    </template>
    <template v-slot:aside>
      <ContactAside />
    </template>
    <template v-slot:content>
      <ContactForm />
      <ContactCodeSnippets />
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
