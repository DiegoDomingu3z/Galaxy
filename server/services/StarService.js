import { dbContext } from "../db/DbContext"



class StarService{
    
    
    async getAll(query = {}) {
        return await dbContext.Star.find(query)
    }
    
    async getByOne(id) {
        return await dbContext.Star.findById(id)
    }
    
    
    async create(body) {
        const star = await dbContext.Star.create(body)
        return star
    }
    
    async remove(id) {
        const original = await dbContext.Star.findById(id)
        original.remove()
        return `deleted ${original.name}`
    }

}

export const starService = new StarService()