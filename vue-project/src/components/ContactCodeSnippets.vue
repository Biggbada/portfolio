<script setup>
import { useStore } from '@/stores/store'
import { computed } from 'vue'
// Using ES6 import syntax
const store = useStore()
const dateString = store.today

const contactForm = store.contactForm
const js1 = computed(() => {
  return `
const button = document.querySelector('#sendBtn');
const message = {
  name: '${contactForm.name}',
  email: '${contactForm.email}',
  message: '${contactForm.message}',
  date: '${dateString}'
  }
button.addEventListener( 'click', () => {
  form.send(message);
}
const store = useStore()
)`
})
</script>

<template>
  <div id="contact-form-displayer" class="item-column bordered">
    <pre v-highlightjs="js1"><code class="javascript"></code></pre>
  </div>
</template>
