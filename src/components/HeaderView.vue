<script setup>
import { RouterLink } from 'vue-router'
import { Slide } from 'vue3-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`
import { useStore } from '@/stores/store'
const store = useStore()
const mediaQuery = store.mql
console.log(mediaQuery)
</script>
<script>
export default {
  components: {
    Slide // Register your component
  }
}
</script>
<template>
  <header>
    <nav id="top-navbar">
      <div v-if="mediaQuery">
        <Slide noOverlay :closeOnNavigation="true">
          <ul>
            <div id="navbar-container" class="flex-row-start">
              <RouterLink to="/"><li>yann-guenot</li></RouterLink>
              <RouterLink to="/about"><li>_about</li></RouterLink>
              <RouterLink to="/projects"><li>_projects</li></RouterLink>
              <!-- <li><a href="#">_incoming</a></li>
              <li><a href="#">_delivered</a></li>
              <li><a href="#">_pricing</a></li>
              <li><a href="#">_recent</a></li> -->
              <RouterLink to="/contact"><li id="menu-contact">_contact</li></RouterLink>
              <!-- <li id="menu-login"><a href="#">_login</a></li> -->
            </div>
          </ul>
        </Slide>
      </div>
      <div v-else>
        <ul>
          <div id="navbar-container" class="flex-row-start">
            <RouterLink to="/"><li>yann-guenot</li></RouterLink>
            <RouterLink to="/about"><li>_about</li></RouterLink>
            <RouterLink to="/projects"><li>_projects</li></RouterLink>
            <!-- <li><a href="#">_incoming</a></li>
            <li><a href="#">_delivered</a></li>
            <li><a href="#">_pricing</a></li>
            <li><a href="#">_recent</a></li> -->
            <RouterLink to="/contact" id="menu-contact"><li>_contact</li></RouterLink>
            <!-- <li id="menu-login"><a href="#">_login</a></li> -->
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
