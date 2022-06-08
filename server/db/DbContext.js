import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema)

  Star = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
