
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";




export class SpeciesController extends BaseController{
    constructor(){
        super('api/species')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getByOne)
        .post('', this.create)
        .delete('/:id', this.remove)
    }



    async getAll(req, res, next) {
        try {
            const species = await speciesService.getAll()
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }


    async getByOne(req, res, next){
        try {
            const species = await speciesService.getByOne(req.params.id)
            return res.send(species)
        } catch (error) {
             next(error)
        }
    }


    async create(req, res, next){
        try {
            const species = await speciesService.create(req.body)
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }


    
    async remove(req, res, next){
        try {
            const species = await speciesService.remove(req.params.id)
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }

    
}