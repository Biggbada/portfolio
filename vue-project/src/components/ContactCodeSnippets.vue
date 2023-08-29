<script setup>
import { useStore } from '@/stores/store'
import { computed } from 'vue';
// Using ES6 import syntax
const store = useStore();
const today = new Date();
const ajd = today.toLocaleString();
const contactForm = store.contactForm;
console.log(contactForm);
console.log(contactForm.name);
const js1 = computed(() => {
  return `
const button = document.querySelector('#sendBtn');
const message = { 
  name: '${contactForm.name}', 
  email: '${contactForm.mail}', 
  message: '${contactForm.message}', 
  date: ${ajd} 
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
    <p>
    <pre v-highlightjs="js1"><code class="javascript"></code></pre>
    </p>
  </div>
</template>
