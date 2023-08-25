<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import ContactAside from '../components/ContactAside.vue'
import ContactSubHeader from '../components/ContactSubHeader.vue'
import ContactForm from '../components/ContactForm.vue'
import LayoutView from '../views/LayoutView.vue'
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
