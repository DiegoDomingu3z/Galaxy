
import { moonService } from "../services/MoonService";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";







export class MoonsController extends BaseController{
    constructor(){
        super('api/moons')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getByOne)
        .get('/:id/species', this.getSpecies)
        .post('', this.create)
        .delete('/:id', this.remove)

    }
    
    
    
    async getAll(req, res, next) {
        try {
            const moons = await moonService.getAll()
            return res.send(moons)
        } catch (error) {
            next(error)
        }
    }

    async getByOne(req, res, next){
        try {
            const moon = await moonService.getByOne(req.params.id)
            return res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async getSpecies(req, res, next){
        try {
            const species = await speciesService.getAll({MoonId: req.params.id})
            return res.send(species)
        } catch (error) {
            next(error)
        }
    }



   async create(req, res, next) {
       try {
           const moon = await moonService.create(req.body)
           return res.send(moon)
       } catch (error) {
           next(error)
       }
    }

    async remove(req, res, next){
        try {
            const moon = await moonService.remove(req.params.id)
            return res.send(moon)
        } catch (error) {
            next(error)
        }
    }
}