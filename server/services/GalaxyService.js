import { dbContext } from "../db/DbContext"




class GalaxyService{
    
    
    async getAll(){
        const galaxy = await dbContext.Galaxy.find()
        return galaxy
    }

    
    
    async getByOne(id){
        const galaxy = await dbContext.Galaxy.findById(id)
        return galaxy
    }
    
    async create(body){
        return await dbContext.Galaxy.create(body)
    }



    async remove(id) {
        const original = await dbContext.Galaxy.findById(id)
        await original.remove()
        return `deleted ${original.galaxyName}`
    }
}


export const galaxyService = new GalaxyService()