<script setup>
const projects = [
  {
    id: 1,
    title: 'projet 1',
    type: 'ui_animations',
    technos: ['html', 'css', 'js'],
    excerpt: 'blablablablablablablabla',
    content: 'blablabla',
    cover: '/src/assets/project-img-01.svg'
  },
  {
    id: 2,
    title: 'projet 2',
    type: 'ui_animations',
    technos: ['html', 'css', 'js'],
    excerpt: 'blablablablablablablabla',
    content: 'blablabla',
    cover: '/src/assets/project-img-02.svg'
  },
  {
    id: 3,
    title: 'projet 3',
    type: 'ui_animations',
    technos: ['html', 'css', 'js'],
    excerpt: 'blablablablablablablabla',
    content: 'blablabla',
    cover: '/src/assets/project-img-03.svg'
  }
]
</script>

<template>
  <main id="about-main">
    <div id="about-content" class="flex-row-start">
      <div class="item-column bordered">
        <div id="projects-container" class="flex-row">
          <div v-for="project in projects" :key="project.id" class="project-thumb item-column">
            <div class="project-title code">
              <span class="violet">
                {{ project.title }}
              </span>
              {{ project.type }}
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
