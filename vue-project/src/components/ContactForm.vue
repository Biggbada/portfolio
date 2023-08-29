<script setup>
import {useStore} from '@/stores/store'
import {useVuelidate} from '@vuelidate/core'
import {email, helpers, required} from '@vuelidate/validators'

const store = useStore()

const rules = {
  contactForm: {
    name: {
      required: helpers.withMessage('Le nom doit être renseigné.', required)
    },
    email: {
      required: helpers.withMessage('L\'email doit être renseigné.', required),
      email: helpers.withMessage('Doit être un email valide.', email)
    },
    message: {
      required: helpers.withMessage('Le message ne doit pas être vide.', required)
    },
  },
}

const v$ = useVuelidate(rules, store)

const submitForm = async (event) => {
  const isValidForm = await v$.value.$validate()
  console.log(isValidForm);
  if (isValidForm) {
    // Todo
  }
}


</script>

<template>
  <div class="item-column bordered">
    <div id="contact-form-container" class="flex-row">
      <div class="item-column">
        <form @submit.prevent="submitForm">
          <div class="item-column">
            <label for="name">_name:</label>
            <input v-model="store.contactForm.name" type="text"/>
            <div v-for="error of v$.contactForm.name.$errors" :key="error.$uid" class="input-errors">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="item-column">
            <label for="name">_email:</label>
            <input v-model="store.contactForm.email" type="text"/>
            <div v-for="error of v$.contactForm.email.$errors" :key="error.$uid" class="input-errors">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="item-column">
            <label for="name">_message:</label>
            <textarea
                id="message"
                v-model="store.contactForm.message"
                cols="30"
                name="message"
                rows="10"
            ></textarea>
            <div v-for="error of v$.contactForm.message.$errors" :key="error.$uid" class="input-errors">
              <div class="error-msg">{{ error.$message }}</div>
            </div>
          </div>
          <div class="item-column">
            <input id="submit-btn" :disabled="v$.contactForm.$invalid && v$.contactForm.$anyDirty" type="submit"
                   value="Send(message)"
                   @click.prevent="submitForm"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
