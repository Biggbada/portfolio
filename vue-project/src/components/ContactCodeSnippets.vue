<script setup>
import { useStore } from '@/stores/store'
// Using ES6 import syntax

const today = new Date();
const ajd = today.toLocaleString();
const store = useStore()
const js1 = `const button = document.querySelector('#sendBtn');
const message = { name:'`
</script>

<template>
  <div id="contact-form-displayer" class="item-column bordered">
    <p>
    <pre v-highlightjs="js1"><code class="javascript"></code></pre>
      <span class="pink">const </span>
      <span class="violet">button </span>
      <span class="pink">=</span>
      <span class="violet"> document.querySelector</span>(<span class="orange">'#sendBtn'</span
      >);<br />
      <span class="pink">const </span><span class="violet">message</span
      ><span class="pink"> =</span> { <span class="violet">name</span>:
      <span v-if="!store.contactForm.name" class="orange">
        undefined {{ store.contactForm.name }}</span
      >
      <span v-else class="orange"> {{ store.contactForm.name }}</span
      >, <span class="violet"> email</span>:
      <span v-if="!store.contactForm.email" class="orange">
        null {{ store.contactForm.email }}</span
      >
      <span v-else class="orange"> {{ store.contactForm.email }}</span
      >, <span class="violet">message</span>:
      <span class="orange"> {{ store.contactForm.message }}</span
      >, date: <span class="orange"> {{ ajd }}</span> }<br />
      <span class="violet">button.addEventListener</span>( <span class="orange">'click'</span>, ()
      <span class="pink">=&gt;</span> {<br />
      <span class="violet">form.send</span>(<span class="violet">message</span>);<br />
      }<br />)
    </p>
  </div>
</template>
