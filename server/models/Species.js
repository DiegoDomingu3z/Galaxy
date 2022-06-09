import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId





export const SpeciesSchema = new Schema({
    name: {type: String, required: true},
    GalaxyId: {type: ObjectId, required: true},
    StarId: {type: ObjectId, required: true},
    PlanetId: {type: ObjectId, required: true},
    MoonId: {type: ObjectId, required: true}
},{timestamps: true, toJSON: {virtuals: true}})