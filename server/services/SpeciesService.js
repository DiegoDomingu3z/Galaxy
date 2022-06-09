import { dbContext } from "../db/DbContext"



class SpeciesService{
    
    
    async getAll(query = {}) {
        return await dbContext.Species.find(query)
    }
    
    async getByOne(id) {
        return await dbContext.Species.findById(id)
    }
    
    async create(body) {
        return await dbContext.Species.create(body)
    }

    async remove(id) {
        const original = await dbContext.Species.findById(id)
        await original.remove()
        return `peace ${original.name}`
    }



}


export const speciesService = new SpeciesService()