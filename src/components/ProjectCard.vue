<script setup>
import { Project } from '@/models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  {{ projectProp.title }}
</template>


<style lang="scss" scoped></style>