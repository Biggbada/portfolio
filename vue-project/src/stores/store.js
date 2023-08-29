import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import logoHtml from '@/assets/logo-html.svg'
import logoCss from '@/assets/logo-css.svg'
import logoVuejs from '@/assets/logo-vue.svg'
import logoReact from '@/assets/logo-react.svg'
import project1Cover from '@/assets/project-img-01.svg'
import project2Cover from '@/assets/project-img-02.svg'
import project3Cover from '@/assets/project-img-03.svg'
export const useStore = defineStore('store', () => {
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
  const projects = [
    {
      id: 1,
      title: 'projet 1',
      type: 'ui_animations',
      technos: ['html', 'css', 'js'],
      excerpt: 'blablablablablablablabla',
      content: 'blablabla',
      cover: project1Cover
    },
    {
      id: 2,
      title: 'projet 2',
      type: 'ui_animations',
      technos: ['html', 'css', 'js'],
      excerpt: 'blablablablablablablabla',
      content: 'blablabla',
      cover: project2Cover
    },
    {
      id: 3,
      title: 'projet 3',
      type: 'ui_animations',
      technos: ['html', 'css', 'js'],
      excerpt: 'blablablablablablablabla',
      content: 'blablabla',
      cover: project3Cover
    }
  ]
  const contactForm = ref({
    name: null,
    email: null,
    message: null
  })

  let technoSelected = ref(['html', 'css', 'react', 'vuejs'])
  const filteredProjects = computed(() => {
    return projects.filter((projet) => {
      let isIncluded = false
      for (const selected of technoSelected.value) {
        if (projet.technos.map((item) => item.toLowerCase()).includes(selected.toLowerCase())) {
          isIncluded = true
        }
      }
      return isIncluded
    })
  })

  return { contactForm, technoSelected, projects, filteredProjects, technos }
})
