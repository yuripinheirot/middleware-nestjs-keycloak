import db from '../connection';
import { CustomError } from '../errors/CustomError';

export default class Pokedex {
	addPokemon = async (pokemon: string) => {
		try {
			if (!pokemon)
				throw new CustomError('logic.pokedex', 'Pokemon name is required, add "pokemon" in the body request.', 400);

			await db.pokedex.create({
				data: { pokemon },
			});

			let pokedex = await db.pokedex.findMany();
			pokedex = pokedex.map((pokemon: any) => pokemon.pokemon);

			return pokedex;
		} catch (error: any) {
			if (error && error.message && error.message.includes('Unique constraint')) {
				throw new CustomError('logic.pokedex', 'Pokemon is already added in pokedex.', 400);
			}
			throw new CustomError('logic.addpokemon', error);
		}
	};

	fetchPokedex = async () => {
		try {
			const result = await db.pokedex.findMany({
				select: { pokemon: true },
			});

			const pokedex = result.map((pokemon: any) => pokemon.pokemon);

			return pokedex;
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

			let pokedex = await db.pokedex.findMany();
			pokedex = pokedex.map((pokemon: any) => pokemon.pokemon);

			return pokedex;
		} catch (error: any) {
			throw new CustomError('logic.addpokemon', error);
		}
	};
}
