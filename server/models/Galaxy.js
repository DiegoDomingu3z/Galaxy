import mongoose from 'mongoose'
const Schema = mongoose.Schema



export const GalaxySchema = new Schema({
    galaxyName : {type: String, required: true}
}, {timestamps: true, toJSON : {virtuals: true}}) 




