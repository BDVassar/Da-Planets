import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const ColonySchema = new Schema({
  name: { type: String, required: true },
  population: { type: Number },
  planetId: { type: ObjectId, required: true },
  speciesId: { type: ObjectId, required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)