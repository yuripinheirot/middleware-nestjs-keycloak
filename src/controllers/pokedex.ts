import { Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';
import { addPokemon as logicAddPokemon, fetchPokedex as logicFetchPokedex } from '../logic/pokedex';

export const addPokemon = async (req: Request, res: Response) => {
	try {
		const pokemon = req.body.name;

		await logicAddPokemon(pokemon);

		res.status(201).send({ success: true });
	} catch (error: any) {
		const { statusCode, message } = error;
		res.status(statusCode).send({ error: message });
	}
};

export const fetchPokedex = async (req: Request, res: Response) => {
	try {
		const data = await logicFetchPokedex();

		res.status(200).send({ data });
	} catch (error: any) {
		const { statusCode, message } = error;
		res.status(statusCode).send({ error: message });
	}
};
