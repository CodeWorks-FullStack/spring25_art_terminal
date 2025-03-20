<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const project = computed(() => AppState.activeProject)
</script>


<template>
  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <!-- NOTE v-if the inner content of the modal so you can still open it! -->
      <div v-if="project" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">
            {{ project.title }} by {{ project.creator.name }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-for="(projectImg, index) in project.projectImgs" :key="projectImg">
            <p class="mb-1">Image {{ index + 1 }} of {{ project.projectImgs.length }}</p>
            <img :src="projectImg" :alt="`Image ${index + 1} of ${project.projectImgs.length}`" class="mb-3 w-100">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 80dvh;
  object-fit: cover;
}
</style>