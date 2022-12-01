import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }
  async getChildren(id) {
    const galaxyLayout = await (await dbContext.Galaxy.findById(id)).populate('Planet', 'name')
    return galaxyLayout
  }

  async create(galaxyData) {
    const newGalaxy = await dbContext.Galaxy.create(galaxyData)
    return newGalaxy
  }
}

export const galaxiesService = new GalaxiesService()