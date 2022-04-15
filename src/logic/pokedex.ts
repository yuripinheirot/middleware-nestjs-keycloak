import db from '../connection';
import { CustomError } from '../errors/CustomError';

export const addPokemon = async (pokemon: string) => {
	try {
		if (!pokemon) throw new CustomError('pokedex', 'Pokemon name is required', 400);

		const result = await db.pokedex.create({
			data: { pokemon },
		});

		return result;
	} catch (error: any) {
		throw new CustomError('logic.addpokemon', error);
	}
};

export const fetchPokedex = async () => {
	try {
		const result = await db.pokedex.findMany({
      select: { pokemon: true },
    });

		return result;
	} catch (error: any) {
		throw new CustomError('logic.addpokemon', error);
	}
};
