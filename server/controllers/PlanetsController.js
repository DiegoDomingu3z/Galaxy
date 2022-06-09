import { planetService } from "../services/PlanetService";
import BaseController from "../utils/BaseController";

 



 export class PlanetsController extends BaseController{
     constructor(){
         super('api/planets')
         this.router
         .get('', this.getAll)
         .get('/:id', this.getByOne)
         .post('', this.create)
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

        



        async create(req, res, next){
            try {
                const planet = await planetService.create(req.body)
                return res.send(planet)
            } catch (error) {
                next(error)
            }
        }

    }