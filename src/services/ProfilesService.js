import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {
  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`)
    logger.log('GOT PROFILE BY ID', response.data)
  }
}

export const profilesService = new ProfilesService()