<script setup>
import { Project } from '@/models/Project.js';
import { projectsService } from '@/services/ProjectsService.js';

// NOTE if you want to access props directly in your script, you must assign the returned value from defineProps to a variable
const props = defineProps({
  projectProp: { type: Project, required: true }
})

// function setActiveProject(project) {
//   projectsService.setActiveProject(project)
// }

function setActiveProject() {
  projectsService.setActiveProject(props.projectProp)
}
</script>


<template>
  <div class="card mb-3">
    <img :src="projectProp.coverImg" class="card-img-top" :alt="`Cover image for the ${projectProp.title} project`">
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <p class="card-title fs-5">{{ projectProp.title }}</p>
        <div class="card-text">
          <p>Images: {{ projectProp.projectImgs.length }}</p>
          <button @click="setActiveProject()" class="btn btn-indigo" data-bs-toggle="modal"
            data-bs-target="#projectModal" type="button">
            Browse Images
          </button>
        </div>
      </div>
      <RouterLink :to="{ name: 'Profile Details', params: { profileId: projectProp.creatorId } }">
        <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img round-img"
          :title="`Go to ${projectProp.creator.name}'s profile page`">
      </RouterLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 6em;

}

.card-img-top {
  height: 40dvh;
  object-fit: cover;
}
</style>