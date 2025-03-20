<script setup>
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

// NOTE useRoute returns an object that has information about our current route
const route = useRoute()

onMounted(() => {
  getProfileById()
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
</script>


<template>
  <h1>Profile Page!</h1>
</template>


<style lang="scss" scoped></style>