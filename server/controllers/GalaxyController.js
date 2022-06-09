import { galaxyService } from "../services/GalaxyService";
import { planetService } from "../services/PlanetService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";





export class GalaxyController extends BaseController{
    constructor(){
        super('api/galaxy')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getByOne)
        .get('/:id/stars', this.getStars)
        .get('/:id/planets', this.getPlanets)
        .post('', this.create)
    }


    async getAll(req, res, next){
        try {
            const galaxy = await galaxyService.getAll()
            return res.send(galaxy)
        } catch (error) {
            next(error)
        } 
    }

    async getByOne(req, res, next){
        try {
            const galaxy = await galaxyService.getByOne(req.params.id)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getStars(req,res, next){
        try {
            const stars = await starService.getAll({GalaxyId: req.params.id})
            return res.send(stars)
        } catch (error) {
            next(error)
        }
    }

    async getPlanets(req, res, next){
        try {
            const planets = await planetService.getAll({GalaxyId: req.params.id})
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next){
        try {
        const galaxy = await galaxyService.create(req.body)
        return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}