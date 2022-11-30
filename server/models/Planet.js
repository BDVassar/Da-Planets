import { Schema } from "mongoose";
const objectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({
  name: { type: String, required: true },
  biome: { type: String, required: true },
  atmosphere: { type: Boolean, required: true },
  galaxyId: { type: objectId, required: true, ref: 'Galaxy' }
},
  { timestamps: true, toJSON: { virtuals: true } }
)