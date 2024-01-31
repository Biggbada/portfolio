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
                <p v-if="project.content" class="project-content">
                  {{ project.content }}
                </p>
              </div>
              <div class="project-buttons-container">
                <button v-if="project.vercel" class="grey-button">
                  <a target="blank" v-bind:href="project.vercel">view-project</a>
                </button>
                <button v-if="project.git" class="grey-button">
                  <a target="blank" v-bind:href="project.git">view-source</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
