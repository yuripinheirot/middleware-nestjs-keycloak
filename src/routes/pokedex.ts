import express from 'express';
import { addPokemon, fetchPokedex } from '../controllers/pokedex';

const pokedexRoute = express.Router();

pokedexRoute.post('/', addPokemon);
pokedexRoute.get('/', fetchPokedex);

export default pokedexRoute;
