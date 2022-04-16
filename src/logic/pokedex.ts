import db from '../connection';
import { CustomError } from '../errors/CustomError';

export default class Pokedex {
	addPokemon = async (pokemon: string) => {
		try {
			if (!pokemon) throw new CustomError('logic.pokedex', 'Pokemon name is required', 400);

			const result = await db.pokedex.create({
				data: { pokemon },
			});

			return db.pokedex.findMany();
		} catch (error: any) {
			throw new CustomError('logic.addpokemon', error);
		}
	};

	fetchPokedex = async () => {
		try {
			const result = await db.pokedex.findMany({
				select: { pokemon: true },
			});

			return result;
		} catch (error: any) {
			throw new CustomError('logic.addpokemon', error);
		}
	};

	removePokemon = async (pokemon: string) => {
		try {
			if (!pokemon) throw new CustomError('logic.pokedex', 'Pokemon name is required', 400);

			const isValid = await db.pokedex.findFirst({
				where: { pokemon },
			});

			if (!isValid) throw new CustomError('logic.pokedex', 'Pokemon not found', 404);

			await db.pokedex.delete({
				where: { pokemon },
			});

			return db.pokedex.findMany();
		} catch (error: any) {
			throw new CustomError('logic.addpokemon', error);
		}
	};
}
