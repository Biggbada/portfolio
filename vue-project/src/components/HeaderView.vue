<script>
// import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <nav id="top-navbar">
      <div class="flex-row">
        <ul>
          <div class="flex-row-start">
            <li id="yann-guenot"><a href="./index.html">yann-guenot</a></li>
            <li><RouterLink to="/about">_about</RouterLink></li>
            <li><a href="./projects.html">_in_progress</a></li>
            <li><a href="#">_incoming</a></li>
            <li><a href="#">_delivered</a></li>
            <li><a href="#">_pricing</a></li>
            <li><a href="#">_recent</a></li>
            <li><a href="./contact.html">_contact</a></li>
            <li><a href="#">_login</a></li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
