import express from 'express';
import PokedexController from '../controllers/pokedex';

const pokedexRoute = express.Router();
const pokedexController = new PokedexController();

pokedexRoute.post('/', pokedexController.addPokemon);
pokedexRoute.get('/', pokedexController.fetchPokedex);

export default pokedexRoute;
