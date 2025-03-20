import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Project } from "@/models/Project.js"
import { AppState } from "@/AppState.js"

class ProjectsService {
  setActiveProject(project) {
    AppState.activeProject = project
  }
  async getProjects() {
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS', response.data)
    const projects = response.data.map(pojo => new Project(pojo))
    AppState.projects = projects
  }
}

export const projectsService = new ProjectsService()