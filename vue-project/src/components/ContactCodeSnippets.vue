<script setup>
import {useStore} from '@/stores/store'
import {computed} from "vue";
// Using ES6 import syntax

const today = new Date();
const ajd = today.toLocaleString();
const store = useStore()
const js1 = computed(() => {
  return `const button = document.querySelector('#sendBtn');
const message = {
  name: '${store.contactForm.name}',
  email: '${store.contactForm.email}',
  message: '${store.contactForm.message}',
  date: '${ajd}'
};
button.addEventListener( 'click', () => {
  form.send(message);
});`
})
</script>

<template>
  <div id="contact-form-displayer" class="item-column bordered">
    <p>
      <pre v-highlightjs="js1"><code class="javascript"></code></pre>
    </p>
  </div>
</template>
