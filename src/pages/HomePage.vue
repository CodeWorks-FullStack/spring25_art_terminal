<script setup>
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  sup
</template>

<style scoped lang="scss"></style>
