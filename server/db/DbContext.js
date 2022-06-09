import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy';
import { MoonSchema } from '../models/Moon';
import { PlanetSchema } from '../models/Planet';
import { SpeciesSchema } from '../models/Species';
import { StarSchema } from '../models/Star';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);

  Galaxy = mongoose.model('Galaxy', GalaxySchema)

  Star = mongoose.model('Star', StarSchema)

  Planet = mongoose.model('Planet', PlanetSchema)

  Moon = mongoose.model('Moon', MoonSchema)

  Species = mongoose.model('Species', SpeciesSchema )
}

export const dbContext = new DbContext()
