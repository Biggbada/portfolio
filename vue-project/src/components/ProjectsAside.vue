<script setup>
import {useStore} from "@/stores/store";

const store = useStore()
</script>

<template>
  <div id="technos-selector" class="flex-row bio-items">
    <ul>
      <li class="noli">
        <div v-for="techno in store.technos" :key="techno.id" class="flex-row-start gap-1">
          <label for="techno">
            <input
                v-model="store.technoSelected"
                :value="techno.name"
                class="techno-input"
                name="techno"
                type="checkbox"
            />
          </label>
          <img alt="" class="centered-img" height="24" v-bind:src="techno.icon" width="24"/>{{
            techno.name
          }}
        </div>
      </li>
    </ul>
  </div>
</template>
