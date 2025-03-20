<script setup>
import { Project } from '@/models/Project.js';
import { projectsService } from '@/services/ProjectsService.js';
import { useRoute } from 'vue-router';

// NOTE if you want to access props directly in your script, you must assign the returned value from defineProps to a variable
const props = defineProps({
  projectProp: { type: Project, required: true }
})

const route = useRoute()

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
          <!-- NOTE data-bs-target's value matches the id attribute on the modal we want this to open -->
          <button @click="setActiveProject()" class="btn btn-indigo" data-bs-toggle="modal"
            data-bs-target="#projectModal" type="button">
            Browse Images
          </button>
        </div>
      </div>
      <!-- NOTE this div will not show up on the profile page -->
      <div v-if="route.name != 'Profile Details'">
        <!-- NOTE if the route that this RouterLink points at has a route parameter, you must supply a value for it  -->
        <!-- NOTE we can store the id of the project's creator in the url for the profile page so we can use it for network requests -->
        <RouterLink :to="{ name: 'Profile Details', params: { profileId: projectProp.creatorId } }">
          <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img round-img"
            :title="`Go to ${projectProp.creator.name}'s profile page`">
        </RouterLink>
      </div>
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