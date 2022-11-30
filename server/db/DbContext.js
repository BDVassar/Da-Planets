import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from "../models/Galaxy.js";
import { PlanetSchema } from "../models/Planet.js";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Planet = mongoose.model('Planet', PlanetSchema);
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
