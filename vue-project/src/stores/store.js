import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const contactForm = ref({
    name: null,
    email: null,
    message: null
  })

  let technoSelected = ref([])

  const projects = ref([
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
])

const filteredProjects = computed(() => {})

  return { contactForm, technoSelected, projects }
})
