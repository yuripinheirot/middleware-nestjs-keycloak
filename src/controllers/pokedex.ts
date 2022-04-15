import { Request, Response } from 'express';
import { CustomError } from '../errors/CustomError';
import { addPokemon as logicAddPokemon } from '../logic/pokedex';

export const addPokemon = async (req: Request, res: Response) => {
	try {
		const pokemon = req.body.name;

		return await logicAddPokemon(pokemon);
	} catch (error: any) {
		const { statusCode, message } = error;
		res.status(statusCode).send({ error: message });
	}
};
