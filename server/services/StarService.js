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


}

export const starService = new StarService()