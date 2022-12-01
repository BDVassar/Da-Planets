import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getChildren)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll()
      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getChildren(req, res, next) {
    try {
      const galaxyLayout = await galaxiesService.getChildren(req.params.id)
      return res.send(galaxyLayout)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const newGalaxy = await galaxiesService.create(req.body)
      return res.send(newGalaxy)
    } catch (error) {
      next(error)
    }
  }


}