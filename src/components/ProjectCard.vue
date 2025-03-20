<script setup>
import { Project } from '@/models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  <div class="card mb-3">
    <img :src="projectProp.coverImg" class="card-img-top" :alt="`Cover image for the ${projectProp.title} project`">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <p class="card-title fs-5">{{ projectProp.title }}</p>
        <div class="card-text">
          <p>Images: {{ projectProp.projectImgs.length }}</p>
          <button class="btn btn-indigo">
            Browse Images
          </button>
        </div>
      </div>
      <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img"
        :title="projectProp.creator.name">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 6em;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.card-img-top {
  height: 40dvh;
  object-fit: cover;
}
</style>