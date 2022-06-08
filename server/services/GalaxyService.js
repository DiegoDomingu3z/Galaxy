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
}


export const galaxyService = new GalaxyService()