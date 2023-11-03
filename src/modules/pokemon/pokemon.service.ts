import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonMapper } from './mappers/pokemon.mapper';
import { queryPaginatedParams } from 'src/shared/types/params.type';
import { PokemonOffsetResponseType } from './types/pokemon.type';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiService: PokeApiService) {}

  async findOne(pokemon: string | number) {
    const paramNormalized =
      typeof pokemon === 'string' ? pokemon.toLowerCase() : pokemon;

    const pokemonApiData =
      await this.pokeApiService.getPokemonByNameOrId(paramNormalized);

    const pokemonSpecieApiData =
      await this.pokeApiService.getPokemonSpecieByUrl(
        pokemonApiData.species.url,
      );

    return PokemonMapper.buildPokemon({
      pokemonApiData,
      pokemonSpecieApiData,
    });
  }

  async findAll(
    query: queryPaginatedParams,
  ): Promise<PokemonOffsetResponseType> {
    const data = await this.pokeApiService.findAllPokemonPaginated(query);

    const totalPages = Math.ceil(data.count / +query.limit);

    return {
      totalPages,
      next: data.next,
      previous: data.previous,
      results: data.results,
    };
  }
}
