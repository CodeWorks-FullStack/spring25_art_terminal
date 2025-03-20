<script setup>
import { AppState } from './AppState.js';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import ProjectModal from './components/ProjectModal.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer class=" text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by CodeWorks
  </footer>

  <!-- NOTE project modal is accessible on every page now! -->
  <ProjectModal />
</template>

<style lang="scss"></style>
