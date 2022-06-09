import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { speciesService } from "../services/SpeciesService";
import BaseController from "../utils/BaseController";

 



 export class PlanetsController extends BaseController{
     constructor(){
         super('api/planets')
         this.router
         .get('', this.getAll)
         .get('/:id', this.getByOne)
         .get('/:id/moons', this.getMoons)
         .get('/:id/species', this.getSpecies)
         .post('', this.create)
         .delete('/:id', this.remove)
     }
     
     
     
     async getAll(req, res, next) {
         try {
             const planets = await planetService.getAll()
             return res.send(planets)
            } catch (error) {
                next(error)
            }
        }


        async getByOne(req, res, next) {
            try {
                const planet = await planetService.getByOne(req.params.id)
                return res.send(planet)
            } catch (error) {
                next(error)
            }
        }

        async getMoons(req, res, next){
            try {
                const moon = await moonService.getAll({PlanetId: req.params.id})
               return res.send(moon)
            } catch (error) {
                next(error)
            }
        }

        async getSpecies(req, res, next){
            try {
                const species = await speciesService.getAll({PlanetId: req.params.id})
                return res.send(species)
            } catch (error) {
                next(error)
            }

        }

        

        async create(req, res, next){
            try {
                const planet = await planetService.create(req.body)
                return res.send(planet)
            } catch (error) {
                next(error)
            }
        }

        async remove(req, res, next){
            try {
                const planet = await planetService.remove(req.params.id)
                return res.send(planet)
            } catch (error) {
                next(error)
            }
        }

    }