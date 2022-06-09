import { dbContext } from "../db/DbContext";
import { planetService } from "../services/PlanetService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";



export class StarsController extends BaseController{
    constructor(){
        super('api/stars')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getByOne)
        .get('/:id/planets', this.getPlanets)
        .post('', this.create)
    }


    async getAll(req, res, next){
        try {
            const stars = await starService.getAll()
            return res.send(stars)
        } catch (error) {
            next(error)
            
        }

    }

    async getByOne(req, res, next){
        try {
            const star = starService.getByOne(req.params.id)
            return res.send(star)
        } catch (error) {
           next(error) 
        }
    }

    async create(req, res, next){
        try {
            const star = starService.create(req.body)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }

    async getPlanets(req, res, next){
        try {
            const planets = await planetService.getAll({StarId : req.params.id})
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
}