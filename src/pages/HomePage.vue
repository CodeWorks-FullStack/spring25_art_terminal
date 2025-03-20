<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/ProjectCard.vue';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const projects = computed(() => AppState.projects)

onMounted(() => {
  getProjects()
})

async function getProjects() {
  try {
    await projectsService.getProjects()
  } catch (error) {
    Pop.error(error, 'Could not get projects')
    logger.error('COULD NOT GET PROJECTS', error)
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="my-3">Projects</h1>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4">
        <ProjectCard :projectProp="project" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
