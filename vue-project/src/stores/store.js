import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const contactForm = ref({
    name: null,
    email: null,
    message: null
  })

  return { contactForm }
})
