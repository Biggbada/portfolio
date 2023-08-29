<script setup>
import { useStore } from '@/stores/store'

// access the `store` variable anywhere in the component ✨
const store = useStore()
</script>

<template>
  <main id="about-main">
    <div id="about-content" class="flex-row-start">
      <div class="item-column bordered">
        <div id="projects-container" class="flex-row">
          <div
            v-for="project in store.filteredProjects"
            :key="project.id"
            class="project-thumb item-column"
          >
            <div class="project-title code">
              <span class="violet">
                {{ project.title }}
              </span>
              //{{ project.type }}
            </div>
            <div class="project-container">
              <div
                class="project-pic"
                v-bind:style="{
                  backgroundImage: 'url(' + project.cover + ')'
                }"
              ></div>
              <div class="project-excerpt code">
                {{ project.excerpt }}
              </div>
              <div>
                <button class="grey-button">view-project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
