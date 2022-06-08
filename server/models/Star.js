import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId



export const StarSchema = new Schema({
    name: {type: String, require: true},
    GalaxyId : {type: ObjectId, ref: 'Galaxy', required: true}

}, {timestamps: true, toJSON: {virtuals: true}})
