import { dbContext } from "../db/DbContext"



class PlanetService{
    async getAll(query = {}) {
        const planet = await dbContext.Planet.find(query)
        return planet
    }
    
    
    
    async getByOne(id) {
        return await dbContext.Planet.findById(id)
    }
    

    
    async create(body) {
        return await dbContext.Planet.create(body)
    }
    
    async remove(id) {
    const original = await dbContext.Planet.findById(id)
    await original.remove()
    return `delorted ${original.name}`
}

}




export const planetService = new PlanetService()