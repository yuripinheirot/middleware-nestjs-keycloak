import { PokemonApiType, PokemonSpecieApiType } from '../types/pokemonApi.type';

export class PokemonApiMapper {
  public static pokemon(data: PokemonApiType): PokemonApiType {
    return {
      id: data.id,
      name: data.name,
      species: {
        name: data.species.name,
        url: data.species.url,
      },
    };
  }

  public static pokemonSpecie(
    data: PokemonSpecieApiType,
  ): PokemonSpecieApiType {
    return {
      flavor_text_entries: data.flavor_text_entries,
    };
  }
}
