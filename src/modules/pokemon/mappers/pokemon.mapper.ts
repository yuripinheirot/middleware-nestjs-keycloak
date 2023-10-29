/* eslint-disable @typescript-eslint/no-unused-vars */
import { PokemonApiType } from 'src/shared/types/pokemonApi.type';
import { PokemonType } from '../types/pokemon.type';
import { PokemonSpecieApiDto } from 'src/shared/services/pokeapi/dto/pokemonSpecieApi.response.dto';

type SpritesType = PokemonType['sprites'];
export class PokemonMapper {
  static buildPokemon(data: {
    pokemonApiData: PokemonApiType;
    pokemonSpecieApiData: PokemonSpecieApiDto;
  }): PokemonType {
    const {
      pokemonSpecieApiData: { flavor_text_entries } = {},
      pokemonApiData: { sprites } = {},
    } = data;

    const description =
      flavor_text_entries?.find((entry) => entry.language.name === 'en')
        ?.flavor_text || null;

    const spritesFiltered = Object.entries(sprites).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {},
    );

    return {
      id: data.pokemonApiData.id,
      name: data.pokemonApiData.name,
      description: description && description.replace(/[\n\f]/g, ' '),
      sprites: spritesFiltered as SpritesType,
    };
  }
}
