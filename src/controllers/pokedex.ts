import { Request, Response } from 'express';
import logicPokedex from '../logic/pokedex';

export default class Pokedex {
	addPokemon = async (req: Request, res: Response) => {
		try {
			const pokemon = req.body.name;

			const pokedex = new logicPokedex();
			const result = await pokedex.addPokemon(pokemon);

			res.status(201).send({ success: result });
		} catch (error: any) {
			const { module, statusCode, message } = error;

			console.error({ module, statusCode, message });
			res.status(statusCode || 400).send({ error: message });
		}
	};

	fetchPokedex = async (req: Request, res: Response) => {
		try {
			const pokedex = new logicPokedex();
			const data = await pokedex.fetchPokedex();

			res.status(200).send({ data });
		} catch (error: any) {
			const { module, statusCode, message } = error;

			console.error({ module, statusCode, message });
			res.status(statusCode || 400).send({ error: message });
		}
	};

	removePokemon = async (req: Request, res: Response) => {
		try {
			const pokemon = req.body.name;

			const pokedex = new logicPokedex();
			const result = await pokedex.removePokemon(pokemon);

			res.status(200).send({ success: result });
		} catch (error: any) {
			const { module, statusCode, message } = error;

			console.error({ module, statusCode, message });
			res.status(statusCode || 400).send({ error: message });
		}
	};
}
