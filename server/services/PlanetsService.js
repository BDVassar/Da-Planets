import { dbContext } from "../db/DbContext.js";

class PlanetsService {
  async getAll() {
    const planets = await dbContext.Planet.find().populate('Galaxy', 'name')
    return planets
  }
  async create(planetData) {
    const newPlanet = await dbContext.Planet.create(planetData)
    return newPlanet
  }

}

export const planetService = new PlanetsService()