<script setup>
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <div id="technos-selector" class="flex-row bio-items">
    <ul>
      <div v-for="techno in store.technos" :key="techno.id" class="flex-row-start gap-1">
        <li class="noli">
          <input
              class="techno-input"
              type="radio"
              v-model="store.technoSelected"
              :name="techno.name"
              :value="techno.name"
              :id="techno.name"
            />
          <label :for= "techno.name" class="grey">
          <img class="centered-img" v-bind:src="techno.icon" width="24" height="24" alt="" />
          <span>{{ techno.name }}</span>
            
          </label>
        </li>
      </div>
    </ul>
  </div>
</template>
