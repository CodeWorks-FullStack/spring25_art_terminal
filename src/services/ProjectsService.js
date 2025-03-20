import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects() {
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS', response.data)
  }
}

export const projectsService = new ProjectsService()