import { dbContext } from "../db/DbContext.js"

class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxy.find()
    return galaxies
  }

}

export const galaxiesService = new GalaxiesService()