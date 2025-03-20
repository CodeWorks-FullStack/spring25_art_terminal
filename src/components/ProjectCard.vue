<script setup>
import { Project } from '@/models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  <div class="card mb-3">
    <img :src="projectProp.coverImg" class="card-img-top" :alt="`Cover image for the ${projectProp.title} project`">
    <div class="card-body">
      <p class="card-title fs-5">{{ projectProp.title }}</p>
      <p class="card-text"></p>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>