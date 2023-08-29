<script setup>
import logoHtml from '@/assets/logo-html.svg'
import logoCss from '@/assets/logo-css.svg'
import logoVuejs from '@/assets/logo-vue.svg'
import logoReact from '@/assets/logo-react.svg'
import { useStore } from '@/stores/store'
import { ref } from 'vue'

// access the `store` variable anywhere in the component ✨
const store = useStore()
const technoSelected = store.technoSelected
const technos = [
  {
    id: 1,
    name: 'html',
    icon: logoHtml
  },
  {
    id: 2,
    name: 'css',
    icon: logoCss
  },
  {
    id: 3,
    name: 'vuejs',
    icon: logoVuejs
  },
  {
    id: 4,
    name: 'react',
    icon: logoReact
  }
]
console.log(technoSelected)
const test = ref([])
</script>

<template>
  <div id="technos-selector" class="flex-row bio-items">
    <ul>
      <div v-for="techno in technos" :key="techno.id" class="flex-row-start gap-1">
        <li class="noli">
          <label for="techno">
            <input
              class="techno-input"
              type="checkbox"
              v-model="test"
              name="techno"
              :value="techno.name"
            />
          </label>
          <img class="centered-img" v-bind:src="techno.icon" width="24" height="24" alt="" />{{
            techno.name
          }}
        </li>
      </div>
    </ul>
  </div>
</template>
