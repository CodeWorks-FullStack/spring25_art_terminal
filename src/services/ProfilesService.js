import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Account } from "@/models/Account.js"
import { AppState } from "@/AppState.js"

class ProfilesService {
  async getProfileById(profileId) {
    AppState.activeProfile = null // clears ghost data from appstate
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('GOT PROFILE BY ID', response.data)
    // NOTE this model should work with a profile object from the sandbox as well as an account object from the sandbox
    const profile = new Account(response.data)
    AppState.activeProfile = profile
  }
}

export const profilesService = new ProfilesService()