<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, ref } from 'vue';

const editableAccountData = ref({
  name: '',
  bio: '',
  coverImg: '',
  picture: '',
  resume: '',
  graduated: false,
})

// NOTE this would not work if the account in the AppState was null!
onMounted(() => {
  const account = AppState.account
  // the spread operator (...) here BREAKS REFERENCE to the AppState object
  // creates a new object with all of the properties from the account object (copy)
  editableAccountData.value = { ...account }
})

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountData.value)
  } catch (error) {
    Pop.error(error, 'Could not update account')
    logger.error('COULD NOT UPDATE ACCOUNT', error)
  }
}
</script>


<template>
  <div class="p-3">
    <h2>Update your account!</h2>
    <form @submit.prevent="updateAccount()">
      <div class="mb-3">
        <label for="accountName">Account Name</label>
        <input v-model="editableAccountData.name" type="text" name="name" id="accountName" required maxlength="100">
      </div>
      <div class="mb-3">
        <label for="accountBio">Account Bio</label>
        <textarea v-model="editableAccountData.bio" name="bio" id="accountBio" maxlength="1000"></textarea>
      </div>
      <div class="mb-3">
        <label for="accountPicture">Account Picture</label>
        <input v-model="editableAccountData.picture" type="url" id="accountPicture" name="picture" maxlength="500">
      </div>
      <div class="mb-3">
        <label for="accountCoverImg">Account CoverImg</label>
        <input v-model="editableAccountData.coverImg" type="url" id="accountCoverImg" name="coverImg" maxlength="500">
      </div>
      <div class="mb-3">
        <label for="accountResume">Account Resume</label>
        <input v-model="editableAccountData.resume" type="url" id="accountResume" name="resume" maxlength="500">
      </div>
      <div class="mb-3">
        <label for="accountGraduated" class="d-inline me-3">Graduated?</label>
        <input v-model="editableAccountData.graduated" type="checkbox" id="accountGraduated" name="graduated">
      </div>
      <div class="text-end">
        <button class="btn btn-indigo" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input,
textarea {
  width: 100%;
}

#accountGraduated {
  width: unset;
}
</style>