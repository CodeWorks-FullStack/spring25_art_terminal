import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Project } from "@/models/Project.js"
import { AppState } from "@/AppState.js"

class ProjectsService {
  setActiveProject(project) {
    AppState.activeProject = project
  }
  // NOTE clears out potential ghost data in the appstate
  clearProjects() {
    AppState.projects = []
  }
  async getProjects() {
    this.clearProjects()
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS', response.data)
    const projects = response.data.map(pojo => new Project(pojo))
    AppState.projects = projects
  }
  async getProjectsByCreatorId(creatorId) {
    this.clearProjects()
    const response = await api.get(`api/projects?creatorId=${creatorId}`)
    logger.log('GOT PROJECTS', response.data)
    const projects = response.data.map(pojo => new Project(pojo))
    // NOTE okay to reuse this array, might make our lives easier
    AppState.projects = projects
  }
}

export const projectsService = new ProjectsService()