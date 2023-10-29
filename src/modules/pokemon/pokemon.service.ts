import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonMapper } from './mappers/pokemon.mapper';
import { queryPaginatedParams } from 'src/shared/types/params.type';
import { PokemonOffsetResponseType } from './types/pokemon.type';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiService: PokeApiService) {}

  async findOne(name: string) {
    const pokemonApiData = await this.pokeApiService.getPokemonByNameOrId(name);

    const pokemonSpecieApiData =
      await this.pokeApiService.getPokemonSpecieByUrl(
        pokemonApiData.species.url,
      );

    const pokemon = PokemonMapper.buildPokemon({
      pokemonApiData,
      pokemonSpecieApiData,
    });

    return pokemon;
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
