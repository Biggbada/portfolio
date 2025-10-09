<script setup>
import { useStore } from '@/stores/store'
import { reactive, ref } from 'vue'

const store = useStore()
const form = ref(null)
const settingTextearea = reactive({ isError: false, placeholder: '' })
const settingNameArea = reactive({ isError: false, placeholder: '' })
const settingEmailArea = reactive({ isError: false, placeholder: '' })

const SITE_KEY = '6Lcnc-QrAAAAAJANoG0K4ZSua_sGvPzeA5x-4Sxm' // ta clé reCAPTCHA v3

const sendMail = async () => {
  let isError = false
  const contactFormStatus = document.querySelector('#contact-form-status')
  contactFormStatus.className = ''

  // Vérification champs
  if (!store.contactForm.message) {
    settingTextearea.isError = isError = true
    settingTextearea.placeholder = 'Message cannot be blank'
  } else settingTextearea.isError = false

  if (!store.contactForm.name) {
    settingNameArea.isError = isError = true
    settingNameArea.placeholder = 'Name cannot be blank'
  } else settingNameArea.isError = false

  if (!store.contactForm.email) {
    settingEmailArea.isError = isError = true
    settingEmailArea.placeholder = 'Email cannot be blank'
  } else settingEmailArea.isError = false

  if (isError) return

  try {
    // Exécuter reCAPTCHA
    await grecaptcha.ready(async () => {
      const token = await grecaptcha.execute(SITE_KEY, { action: 'submit' })

      // Appel au backend
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: store.contactForm.email,
          name: store.contactForm.name,
          message: store.contactForm.message,
          recaptchaToken: token
        })
      })

      const data = await res.json()

      if (data.success) {
        contactFormStatus.textContent = 'Message sent!'
        contactFormStatus.classList.add('valid')
        setTimeout(() => {
          contactFormStatus.classList.remove('valid')
          contactFormStatus.textContent = ''
        }, 3000)
        store.resetContactForm()
      } else {
        contactFormStatus.textContent = data.error || 'Error sending message'
        contactFormStatus.classList.add('error')
        setTimeout(() => {
          contactFormStatus.classList.remove('error')
          contactFormStatus.textContent = ''
        }, 3000)
      }
    })
  } catch (err) {
    console.error(err)
    contactFormStatus.textContent = 'Error sending message'
    contactFormStatus.classList.add('error')
    setTimeout(() => {
      contactFormStatus.classList.remove('error')
      contactFormStatus.textContent = ''
    }, 3000)
  }
}
</script>

<template>
  <div id="contact-form" class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div id="contact-form-inputs-container" class="item-column">
        <form @submit.prevent="sendMail" class="form" ref="form">
          <div class="item-column">
            <label for="name">_name:</label>
            <input
              name="name"
              class="contact-input"
              v-model="store.contactForm.name"
              :placeholder="settingNameArea.placeholder"
              :class="{ error: settingNameArea.isError }"
              type="text"
            />
          </div>
          <div class="item-column">
            <label for="email">_email:</label>
            <input
              name="email"
              class="contact-input"
              v-model="store.contactForm.email"
              :placeholder="settingEmailArea.placeholder"
              :class="{ error: settingEmailArea.isError }"
              type="email"
            />
          </div>
          <div class="item-column">
            <label for="message">_message:</label>
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
            <input class="contact-input" type="submit" id="submit-btn" value="Send message" />
            <p id="contact-form-status"></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
