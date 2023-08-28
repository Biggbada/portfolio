<script setup>
import logo from '@/assets/logo-css.svg'

const technos = [
  {
    id: 1,
    name: 'html',
    icon: logo
  },
  {
    id: 2,
    name: 'css',
    icon: 'assets/logo-css.svg'
  },
  {
    id: 3,
    name: 'vuejs',
    icon: './assets/logo-vue.svg'
  },
  {
    id: 4,
    name: 'react',
    icon: './assets/logo-react.svg'
  }
]
</script>

<template>
  <div id="technos-selector" class="flex-row bio-items">
    <ul>
      <div v-for="techno in technos" :key="techno.id" class="flex-row-start gap-1">
        <li class="noli">
          <label for="techno">
            <input type="checkbox" name="techno" id="" />
          </label>
          <img class="centered-img" v-bind:src="techno.icon" width="24" height="24" alt="" />{{
            techno.name
          }}
        </li>
      </div>
    </ul>
  </div>
</template>
