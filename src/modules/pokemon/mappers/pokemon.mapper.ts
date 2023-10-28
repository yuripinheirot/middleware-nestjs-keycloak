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
    const { flavor_text_entries: entries } = data.pokemonSpecieApiData;
    const { sprites } = data.pokemonApiData;

    const entryEnglish = entries.find((entry) => entry.language.name === 'en');
    const description = entryEnglish.flavor_text || entries[0].flavor_text;

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
      description: description.replace(/[\n\f]/g, ' '),
      sprites: spritesFiltered as SpritesType,
    };
  }
}
