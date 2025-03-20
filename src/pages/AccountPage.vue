<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import AccountForm from '@/components/AccountForm.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about">
    <!-- NOTE important that anything that uses the account is contained in this v-if -->
    <div v-if="account">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <AccountForm />
          </div>
          <div class="col-md-6">
            <div class="text-center">
              <h2>Welcome {{ account.name }}</h2>
              <img class="rounded" :src="account.picture" alt="" />
              <p>{{ account.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
