import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import logoHtml from '/assets/logo-html.svg'
import logoCss from '/assets/logo-css.svg'
import logoVuejs from '/assets/logo-vue.svg'
import logoWordPress from '/assets/logo-wordpress.svg'
import logoReact from '/assets/logo-react.svg'
// import project1Cover from '/assets/project-img-01.svg'
// import project2Cover from '/assets/project-img-02.svg'
// import project3Cover from '/assets/project-img-03.svg'
import project1YannCover from '/assets/bg-weather-app-yann-guenot_001.png'
import project2YannCover from '/assets/bg-dictionnary-api-app-yann-guenot_001.png'
import project3YannCover from '/assets/bg-age-calculator-vanilia-js-app-yann-guenot_001.png'
import project4YannCover from '/assets/bg-portfolio-vuejs-app-yann-guenot_001.png'
import project5YannCover from '/assets/bg-portfolio-dumatos-equipement-website-yann-guenot_001.png'
import project6YannCover from '/assets/bg-portfolio-rachel-voix-off-website-yann-guenot_001.png'
import project7YannCover from '/assets/bg-portfolio-gaia-conseils-website-yann-guenot_001.png'
import project8YannCover from '/assets/bg-portfolio-grenzenlos-yoga-website-yann-guenot_001.png'
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
    },
    {
      id: 5,
      name: 'wordpress',
      icon: logoWordPress
    }
  ]
  const projects = [
    {
      id: 1,
      title: 'portfolio app',
      type: 'vuejs',
      technos: ['html', 'css', 'js', 'vuejs'],
      excerpt: 'vuejs app with reactive & designed components',
      content: 'blablabla',
      git: 'https://github.com/Biggbada/portfolio',
      vercel: 'https://portfolio.polepo.fr',
      cover: project4YannCover
    },
    {
      id: 2,
      title: 'weather app',
      type: 'api app',
      technos: ['html', 'css', 'js'],
      excerpt: 'function random, contextual background, slides',
      content: 'blablabla',
      git: 'https://github.com/Biggbada/weather-app-damien',
      vercel: 'https://weather-app-damien-refactor.vercel.app/',
      cover: project1YannCover
    },
    {
      id: 3,
      title: 'dictionnary app',
      type: 'api app',
      technos: ['html', 'css', 'js'],
      excerpt: 'deep results, audio features, good perfs',
      content: 'blablabla',
      git: 'https://github.com/Biggbada/07_dictionnary',
      vercel: 'https://07-dictionnary.vercel.app/',
      cover: project2YannCover
    },
    {
      id: 4,
      title: 'age calculator',
      type: 'vanilia js',
      technos: ['html', 'css', 'js'],
      excerpt: 'js maths & Date object handling',
      content: 'blablabla',
      git: 'https://github.com/Biggbada/05-Calculate-Age',
      vercel: 'https://05-calculate-age.vercel.app/',
      cover: project3YannCover
    },
    {
      id: 5,
      title: 'dumatos equipement',
      type: 'wordpress',
      technos: ['wordpress'],
      excerpt: 'e-commerce website',
      content: 'runs from 2021',
      git: '',
      vercel: 'https://dumatos-equipement.fr',
      cover: project5YannCover
    },
    {
      id: 6,
      title: 'rachel voix-off',
      type: 'wordpress',
      technos: ['wordpress'],
      excerpt: 'showcase website',
      content: 'runs from 2022',
      git: '',
      vercel: 'https://rachelvoixoff.fr/',
      cover: project6YannCover
    },
    {
      id: 7,
      title: 'gaia-conseils',
      type: 'wordpress',
      technos: ['wordpress'],
      excerpt: 'showcase website',
      content: 'runs from 2023',
      git: '',
      vercel: 'https://https://gaia-conseils.ch/',
      cover: project7YannCover
    },
    {
      id: 8,
      title: 'grenzenlos-yoga',
      type: 'wordpress',
      technos: ['wordpress'],
      excerpt: 'showcase website',
      content: 'runs from 2023',
      git: '',
      vercel: 'https://grenzenlos-yoga.ch/',
      cover: project8YannCover
    }
  ]
  const mql = ref(window.matchMedia('(max-width: 1200px)').matches)
  const contactFormVide = {
    name: undefined,
    email: undefined,
    message: undefined
  }
  const contactForm = ref(contactFormVide)

  const today = ref(new Date().toLocaleString())
  let technoSelected = ref(['html', 'css', 'react', 'vuejs', 'wordpress'])
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

  const resetContactForm = () => {
    contactForm.value.email = undefined
    contactForm.value.message = undefined
    contactForm.value.name = undefined
  }

  return {
    contactForm,
    technoSelected,
    projects,
    filteredProjects,
    technos,
    today,
    resetContactForm,
    mql
  }
})
