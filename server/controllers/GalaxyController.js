import { galaxyService } from "../services/GalaxyService";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { speciesService } from "../services/SpeciesService";
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
        .get('/:id/moons', this.getMoons)
        .get('/:id/species', this.getSpecies)
        .post('', this.create)
        .delete('/:id', this.remove)
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

    async getMoons(req, res, next){
        try {
            const moon = await moonService.getAll({GalaxyId: req.params.id})
            return res.send(moon)
        } catch (error) {
            next(error)
        }
    }

    async getSpecies(req, res, next){
        try {
            const species = await speciesService.getAll({GalaxyId: req.params.id})
            return res.send(species)
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

    async remove(req, res, next){
        try {
            const message = await galaxyService.remove(req.params.id)
            res.send(message)
        } catch (error) {
            next(error)
        }
    }
}