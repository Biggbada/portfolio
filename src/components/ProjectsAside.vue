<script setup>
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<template>
  <div id="technos-selector" class="flex-row bio-items">
    <ul>
      <div v-for="techno in store.technos" :key="techno.id" class="flex-row-start gap-1">
        <li class="noli">
          <label for="techno">
            <input
              class="techno-input"
              type="checkbox"
              v-model="store.technoSelected"
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
