import { dbContext } from "../db/DbContext"



class MoonService{
    
    
    async getAll(query = {}) {
        return await dbContext.Moon.find(query)
    }
    
    
    async getByOne(id) {
        return await dbContext.Moon.findById(id)
    }
    
    
    async create(body) {
        return await dbContext.Moon.create(body)
    }



   async remove(id) {
        const original = dbContext.Moon.findById(id)
        await original.remove()
        return `delorted ${original.name}`
    }
}


export const moonService = new MoonService()