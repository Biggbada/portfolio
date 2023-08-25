<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav id="top-navbar">
      <div class="flex-row">
        <ul>
          <div class="flex-row-start">
            <li><RouterLink to="/">yann-guenot</RouterLink></li>
            <li><RouterLink to="/about">_about</RouterLink></li>
            <li><RouterLink to="/projects">_projects</RouterLink></li>
            <li><a href="./projects.html"></a></li>
            <li><a href="#">_incoming</a></li>
            <li><a href="#">_delivered</a></li>
            <li><a href="#">_pricing</a></li>
            <li><a href="#">_recent</a></li>
            <li><RouterLink to="/contact">_contact</RouterLink></li>
            <li><a href="#">_login</a></li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
