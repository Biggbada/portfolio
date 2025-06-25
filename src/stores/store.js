import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import logoHtml from '/assets/logo-html.svg'
import logoCss from '/assets/logo-css.svg'
import logoVanillaJs from '/assets/logo-javascript.svg'
import logoPhp from '/assets/logo-php.svg'
import logoSymfony from '/assets/logo-symfony.svg'
import logoVuejs from '/assets/logo-vue.svg'
import logoWordPress from '/assets/logo-wordpress.svg'
import logoPrestaShop from '/assets/logo-prestashop.svg'
import logoReact from '/assets/logo-react.svg'
import logoCheckAll from '/assets/logo-check-all.svg'
// import project1Cover from '/assets/project-img-01.svg'
// import project2Cover from '/assets/project-img-02.svg'
// import project3Cover from '/assets/project-img-03.svg'
import project1YannCover from '/assets/bg-weather-app-yann-guenot_001.png'
import project2YannCover from '/assets/bg-dictionnary-api-app-yann-guenot_001.png'
import project3YannCover from '/assets/bg-age-calculator-vanilia-js-app-yann-guenot_001.png'
import project4YannCover from '/assets/bg-portfolio-vuejs-app-yann-guenot_001.png'
import project5YannCover from '/assets/bg-portfolio-intratos-website-yann-guenot_001.png'
import project6YannCover from '/assets/bg-portfolio-dumatos-equipement-website-yann-guenot_001.png'
import project7YannCover from '/assets/bg-portfolio-rachel-voix-off-website-yann-guenot_001.png'
import project8YannCover from '/assets/bg-portfolio-gaia-conseils-website-yann-guenot_001.png'
import project9YannCover from '/assets/bg-portfolio-grenzenlos-yoga-website-yann-guenot_001.png'
import project10YannCover from '/assets/bg-portfolio-aesthetic-group-website-yann-guenot_001.png'
export const useStore = defineStore('store', () => {
  const technos = [
    {
      id: 0,
      name: 'all',
      icon: logoCheckAll
    },
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
      name: 'vanilla js',
      icon: logoVanillaJs
    },
    {
      id: 4,
      name: 'php',
      icon: logoPhp
    },
    {
      id: 5,
      name: 'symfony',
      icon: logoSymfony
    },
    {
      id: 6,
      name: 'vuejs',
      icon: logoVuejs
    },
    {
      id: 7,
      name: 'react',
      icon: logoReact
    },
    {
      id: 8,
      name: 'wordpress',
      icon: logoWordPress
    },
    {
      id: 9,
      name: 'prestashop',
      icon: logoPrestaShop
    }
  ]
  const projects = [
    {
      id: 1,
      title: 'portfolio app',
      type: 'vuejs',
      technos: ['html', 'css', 'vuejs', 'all'],
      excerpt: 'this website',
      content: 'a first vuejs webapp with reactive & designed components',
      git: 'https://github.com/Biggbada/portfolio',
      vercel: 'https://portfolio.polepo.fr',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project4YannCover
    },
    {
      id: 2,
      title: 'weather app',
      type: 'api app',
      technos: ['html', 'css', 'vanilla js', 'all'],
      excerpt: "a weather app i'm still working on",
      content: 'now provides standard & random searchs, favorites management...',
      git: 'https://github.com/Biggbada/weather-app-damien',
      vercel: 'https://weather-app-damien-refactor.vercel.app/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project1YannCover
    },
    {
      id: 3,
      title: 'dictionnary app',
      type: 'api app',
      technos: ['html', 'css', 'vanilla js', 'all'],
      excerpt: 'api handling exercise',
      content: 'a first api handling exercise - deep results, audio features, good perfs',
      git: 'https://github.com/Biggbada/07_dictionnary',
      vercel: 'https://07-dictionnary.vercel.app/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project2YannCover
    },
    {
      id: 4,
      title: 'age calculator',
      type: 'vanilia js',
      technos: ['html', 'css', 'vanilla js', 'all'],
      excerpt: 'js exercise, calculates your age',
      content: 'maths & date objects handling exercise in vanilla js',
      git: 'https://github.com/Biggbada/05-Calculate-Age',
      vercel: 'https://05-calculate-age.vercel.app/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project3YannCover
    },
    {
      id: 5,
      title: 'intratos',
      type: 'symfony webapp',
      technos: ['symfony', 'php', 'vanilla js', 'all'],
      excerpt: 'local-hosted webapp, internal usage',
      content:
        'management of posts, products, files, acces rights... - runs from 2023, 15 internal users ',
      git: '',
      vercel: '',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project5YannCover
    },
    {
      id: 6,
      title: 'dumatos equipement',
      type: 'wordpress',
      technos: ['wordpress', 'all'],
      excerpt: 'e-commerce website',
      content: 'my first e-commerce made with wordpress - runs from 2021',
      git: '',
      vercel: 'https://dumatos-equipement.fr',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project6YannCover
    },
    {
      id: 7,
      title: 'rachel voix-off',
      type: 'wordpress',
      technos: ['wordpress', 'all'],
      excerpt: 'showcase website',
      content: 'another wordpress project with audio features - runs from 2022',
      git: '',
      vercel: 'https://rachelvoixoff.fr/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project7YannCover
    },
    {
      id: 8,
      title: 'gaia-conseils',
      type: 'wordpress',
      technos: ['wordpress', 'all'],
      excerpt: 'showcase website',
      content: 'a newer & multilingual version of gaia-conseils.ch - runs from 2023',
      git: '',
      vercel: 'https://gaia-conseils.ch/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project8YannCover
    },
    {
      id: 9,
      title: 'grenzenlos-yoga',
      type: 'wordpress',
      technos: ['wordpress', 'all'],
      excerpt: 'showcase website',
      content: 'a newer version of grenzenlos-yoga.ch with products - runs from 2023',
      git: '',
      vercel: 'https://grenzenlos-yoga.ch/',
      
      partner: {
        name: "",
        url: ""
      },
      cover: project9YannCover
    },
    {
      id: 10,
      title: 'aesthetic-group',
      type: 'prestashop',
      technos: ['prestashop', 'all'],
      excerpt: 'e-commerce',
      content: 'upgrade from 1.6 to 1.8 - new graphics & theme - web-agency partnership - runs from 2025',
      git: '',
      vercel: 'https://www.aestheticgroup.fr/',
      partner: {
        name: "e-perspectives",
        url: "https://www.e-perspectives.ch/"
      },
      cover: project10YannCover
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
  let technoSelected = ref('all')
  const filteredProjects = computed(() => {
    return projects.filter((projet) => {
      let isIncluded = false
      if (projet.technos.map((item) => item.toLowerCase()).includes(technoSelected.value)) {
        isIncluded = true
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
