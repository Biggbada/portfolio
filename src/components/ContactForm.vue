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
const settingNameArea = reactive({
  isError: false,
  placeholder: ''
})
const settingEmailArea = reactive({
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
  if (store.contactForm.name == undefined || store.contactForm.name == '') {
    settingNameArea.isError = isError = true
    settingNameArea.placeholder = 'name can not be blank'
  } else {
    settingTextearea.isError = false
    settingTextearea.placeholder = ''
  }
  if (store.contactForm.email == undefined || store.contactForm.email == '') {
    settingEmailArea.isError = isError = true
    settingEmailArea.placeholder = 'email can not be blank'
  } else {
    settingTextearea.isError = false
    settingTextearea.placeholder = ''
  }

  if (!isError) {
    emailjs.init({
      publicKey: 'zenfkgMGV-PfC2A69'
    });
    console.log(import.meta.env.VITE_EMAIL_JS_SERVICE);
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE,
        form.value,
        import.meta.env.VITE_EMAIL_JS_USER
      )
      .then(
        () => {
          emailjs
            .sendForm(
              import.meta.env.VITE_EMAIL_JS_SERVICE,
              import.meta.env.VITE_EMAIL_JS_CUSTOMER_TEMPLATE,
              form.value,
              import.meta.env.VITE_EMAIL_JS_USER
            )
            .then(
              () => {
                contactFormStatus.textContent = 'Message sent!'
                contactFormStatus.classList.add('valid')
                setTimeout(() => {
                  const errorMsg = document.getElementById('contact-form-status')
                  console.log(errorMsg)
                  errorMsg.classList.remove('valid')
                  errorMsg.textContent = ''
                }, 3000)
                store.resetContactForm()
              },
              (error) => {
                console.log(error)
                contactFormStatus.classList.add('error')
                contactFormStatus.textContent = 'Confirmation message not sent, please try again'
                setTimeout(() => {
                  const errorMsg = document.getElementById('contact-form-status')
                  console.log(errorMsg)
                  errorMsg.classList.remove('error')
                  errorMsg.textContent = ''
                }, 3000)
              }
            )
        },
        (error) => {
          console.log(error)
          contactFormStatus.classList.add('error')
          contactFormStatus.textContent = 'Message not sent, please try again'
          setTimeout(() => {
            const errorMsg = document.getElementById('contact-form-status')
            console.log(errorMsg)
            errorMsg.classList.remove('error')
            errorMsg.textContent = ''
          }, 3000)
        }
      )
  }
}
</script>

<template>
  <div id="contact-form" class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div id="contact-form-inputs-container" class="item-column">
        <form @submit.prevent="sendMail" class="form" ref="form" action="">
          <div class="item-column">
            <label for="name">_name:</label>
            <input
              name="name"
              place
              class="contact-input"
              v-model="store.contactForm.name"
              :placeholder="settingNameArea.placeholder"
              :class="{ error: settingNameArea.isError, valid: !settingNameArea.isError }"
              type="text"
            />
          </div>
          <div class="item-column">
            <label for="name">_email:</label>
            <input
              name="email"
              class="contact-input"
              v-model="store.contactForm.email"
              :placeholder="settingEmailArea.placeholder"
              :class="{ error: settingEmailArea.isError, valid: !settingEmailArea.isError }"
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
