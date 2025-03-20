<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/ProjectCard.vue';
import { profilesService } from '@/services/ProfilesService.js';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const profile = computed(() => AppState.activeProfile)
const profileProjects = computed(() => AppState.projects)

// NOTE useRoute returns an object that has information about our current route
const route = useRoute()

onMounted(() => {
  getProfileById()
  getProjectsByCreatorId()
})

watch(route, () => {
  getProfileById()
  getProjectsByCreatorId()
})

async function getProfileById() {
  try {
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.error(error, 'Could not get profile')
    logger.error('COULD NOT GET PROFILE', error)
  }
}

async function getProjectsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await projectsService.getProjectsByCreatorId(profileId)
  } catch (error) {
    Pop.error(error, 'Could not get projects')
    logger.error('COULD NOT GET PROJECTS', error)
  }
}
</script>


<template>
  <!-- NOTE profile will be null on page load, so make sure you use a v-if OR ? operator -->
  <section v-if="profile" class="container">
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="text-center my-3 rounded-4 profile-bg d-flex align-items-center justify-content-center"
          :style="{ backgroundImage: `url(${profile.coverImg})` }">
          <div>
            <img :src="profile.picture" :alt="'A pretty picture of ' + profile.name" class="round-img profile-img my-2">
            <div class="text-shadow">
              <h1 class="mb-2">
                <span v-if="profile.graduated" class="mdi mdi-palette mdi-spin text-indigo"
                  title="Graduated Art School"></span>
                <a v-if="profile.resume" :href="profile.resume" class="text-light" title="Go check out my resume!"
                  target="_blank">
                  <span class="mdi mdi-file-cad"></span>
                </a>
                {{ profile.name }}
              </h1>
              <p><b>{{ profile.bio }}</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10">
        <div class="row">
          <div v-for="project in profileProjects" :key="project.id" class="col-md-4">
            <ProjectCard :projectProp="project" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="container">
    <div class="row">
      <div class="col-12">
        <div class="text-center">
          <h1>Loading... <span class="mdi mdi-loading mdi-spin"></span></h1>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.profile-img {
  max-width: 100%;
  height: 40dvh;
  object-fit: cover;
}

.profile-bg {
  background-size: cover;
  background-position: center;
  min-height: 70dvh;
}

.text-shadow {
  text-shadow: 1px 1px 5px var(--bs-code-color);
}
</style>