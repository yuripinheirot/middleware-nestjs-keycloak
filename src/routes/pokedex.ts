import express from 'express';
import PokedexController from '../controllers/pokedex';

const pokedexRoute = express.Router();
const pokedexController = new PokedexController();

pokedexRoute.post('/', pokedexController.addPokemon);
pokedexRoute.get('/', pokedexController.fetchPokedex);
pokedexRoute.delete('/', pokedexController.removePokemon);

export default pokedexRoute;
