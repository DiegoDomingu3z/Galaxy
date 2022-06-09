import { dbContext } from "../db/DbContext";
import { moonService } from "../services/MoonService";
import { planetService } from "../services/PlanetService";
import { speciesService } from "../services/SpeciesService";
import { starService } from "../services/StarService";
import BaseController from "../utils/BaseController";



export class StarsController extends BaseController{
    constructor(){
        super('api/stars')
        this.router
        .get('', this.getAll)
        .get('/:id', this.getByOne)
        .get('/:id/planets', this.getPlanets)
        .get('/:id/moons', this.getMoons)
        .get('/:id/species', this.getSpecies)
        .post('', this.create)
        .delete('/:id', this.remove)
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

    async getPlanets(req, res, next){
        try {
            const planets = await planetService.getAll({StarId : req.params.id})
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }

    async getMoons(req, res, next){
        try {
            const moon = await moonService.getAll({StarId : req.params.id})
            return res.send(moon)
        } catch (error) {
            next('its not working')
        }
    }

    async getSpecies(req, res, next){
        try {
            const species = await speciesService.getAll({StarId: req.params.id})
            return res.send(species)
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

    async remove(req, res, next){
        try {
            const star = await starService.remove(req.params.id)
            return res.send(star)
        } catch (error) {
            next(error)
        }
    }

}