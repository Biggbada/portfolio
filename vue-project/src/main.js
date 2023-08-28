import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/night-owl.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueHighlightJS)

app.mount('#app')
