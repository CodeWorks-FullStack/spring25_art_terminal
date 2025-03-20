export class Project {
  /**
   * @param {{ id: string; title: string; coverImg: string; creatorId: string; projectImgs: string[]; createdAt: string | number | Date; updatedAt: string | number | Date; creator: any; }} data
   */
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    // TODO show how to get intellisense on creator property
    this.creator = data.creator
  }
}