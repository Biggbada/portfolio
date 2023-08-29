<script setup>
import { useStore } from '@/stores/store'
import { onMounted } from 'vue'

const store = useStore()
onMounted(() => {
  const inputs = document.querySelectorAll('.contact-input')
  console.log(inputs)
  const contactForm = document.querySelector('form')
  console.log(contactForm)
  const textarea = document.querySelector('textarea')
  console.log(textarea)
  const errorMsg = ' can not be blank'
  contactForm.addEventListener('submit', (e) => {
    if (textarea.value == '') {
      textarea.classList.add('error')
      textarea.placeholder = textarea.name + errorMsg
    } else {
      textarea.classList.remove('error')
    }
    inputs.forEach((input) => {
      if (input.value == '') {
        e.preventDefault()
        input.classList.add('error')
        input.placeholder = input.name + errorMsg
      } else {
        input.classList.remove('error')
      }
    })
  })
})
</script>

<template>
  <div class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div class="item-column">
        <form action="">
          <div class="item-column">
            <label for="name">_name:</label>
            <input name="name" class="contact-input" v-model="store.contactForm.name" type="text" />
          </div>
          <div class="item-column">
            <label for="name">_email:</label>
            <input
              name="email"
              class="contact-input"
              v-model="store.contactForm.email"
              type="email"
            />
          </div>
          <div class="item-column">
            <label name="message" for="name">_message:</label>
            <textarea
              v-model="store.contactForm.message"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="item-column">
            <input class="contact-input" type="submit" id="submit-btn" value="Send(message)" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
