import { PokemonApiType } from 'src/shared/types/pokemonApi.type';
import { PokemonType } from '../types/pokemon.type';
import { PokemonSpecieApiDto } from 'src/shared/services/pokeapi/dto/pokemonSpecieApi.response.dto';

export class PokemonMapper {
  static buildPokemon(data: {
    pokemonApiData: PokemonApiType;
    pokemonSpecieApiData: PokemonSpecieApiDto;
  }): PokemonType {
    const entries = data.pokemonSpecieApiData.flavor_text_entries;
    const entryEnglish = entries.find((entry) => entry.language.name === 'en');
    const description = entryEnglish.flavor_text || entries[0].flavor_text;

    return {
      id: data.pokemonApiData.id,
      name: data.pokemonApiData.name,
      description: description.replace(/[\n\f]/g, ' '),
    };
  }
}
