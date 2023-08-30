<script setup>
import { RouterLink } from 'vue-router'
import { Slide } from 'vue3-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`
</script>

<template>
  <header>
    <nav id="top-navbar">
      <div class="flex-row">
        <Slide noOverlay>
          <ul>
            <div id="navbar-container" class="flex-row-start">
              <li><RouterLink to="/">yann-guenot</RouterLink></li>
              <li><RouterLink to="/about">_about</RouterLink></li>
              <li><RouterLink to="/projects">_projects</RouterLink></li>
              <li><a href="#">_incoming</a></li>
              <li><a href="#">_delivered</a></li>
              <li><a href="#">_pricing</a></li>
              <li><a href="#">_recent</a></li>
              <li><RouterLink to="/contact">_contact</RouterLink></li>
              <li id="menu-login"><a href="#">_login</a></li>
            </div>
          </ul>
        </Slide>
      </div>
    </nav>
  </header>
</template>
