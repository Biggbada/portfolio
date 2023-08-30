<script setup>
import { useStore } from '@/stores/store'
import emailjs from 'emailjs-com'
import { reactive, ref } from 'vue'

const store = useStore()
const form = ref(null)
const settingTextearea = reactive({
  isError: false,
  placeholder: ''
})
const sendMail = () => {
  let isError = false
  const contactFormStatus = document.querySelector('#contact-form-status')
  contactFormStatus.className = ''
  console.log(store.contactForm.message)
  if (store.contactForm.message == undefined || store.contactForm.message == '') {
    settingTextearea.isError = isError = true
    settingTextearea.placeholder = 'Message can not be blank'
  } else {
    settingTextearea.isError = false
    settingTextearea.placeholder = ''
  }

  if (!isError) {
    emailjs.sendForm('service_ejcepws', 'template_xiv62ks', form.value, 'zenfkgMGV-PfC2A69').then(
      () => {
        contactFormStatus.textContent = 'Message sent!'
        contactFormStatus.classList.add('valid')
        store.resetContactForm()
      },
      (error) => {
        console.log(error)
        contactFormStatus.classList.add('error')
        contactFormStatus.textContent = 'Message not sent, please try again'
      }
    )
  }
}
</script>

<template>
  <div class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div class="item-column">
        <form @submit.prevent="sendMail" class="form" ref="form" action="">
          <div class="item-column">
            <label for="name">_name:</label>
            <input
              name="name"
              place
              class="contact-input"
              v-model="store.contactForm.name"
              type="text"
            />
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
              :placeholder="settingTextearea.placeholder"
              :class="{ error: settingTextearea.isError }"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="item-column">
            <input class="contact-input" type="submit" id="submit-btn" value="Send(message)" />
            <p id="contact-form-status"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
