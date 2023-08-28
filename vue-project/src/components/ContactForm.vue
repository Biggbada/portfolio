<script setup>
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <div class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div class="item-column">
        <form action="">
          <div class="item-column">
            <label for="name">_name:</label>
            <input v-model="store.contactForm.name" type="text" />
          </div>
          <div class="item-column">
            <label for="name">_email:</label>
            <input v-model="store.contactForm.email" type="email" />
          </div>
          <div class="item-column">
            <label for="name">_message:</label>
            <textarea
              v-model="store.contactForm.message"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div class="item-column">
            <input type="submit" id="submit-btn" value="Send(message)" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
