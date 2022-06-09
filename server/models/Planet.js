import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const PlanetSchema = new Schema({
    name : {type: String, required: true, },
    StarId : {type: ObjectId, ref: 'Star', required: true},
    GalaxyId : {type: ObjectId, ref: 'Galaxy', required: true}
}, {timestamps: true, toJSON : {virtuals : true}})