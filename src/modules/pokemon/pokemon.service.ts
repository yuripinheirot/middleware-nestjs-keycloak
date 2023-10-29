import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonMapper } from './mappers/pokemon.mapper';
import { queryPaginatedParams } from 'src/shared/types/params.type';
import { PokemonOffsetType } from './types/pokemon.type';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiService: PokeApiService) {}

  async findOne(name: string) {
    const pokemonApiData = await this.pokeApiService.getPokemonByNameOrId(name);

    const pokemonSpecieApiData =
      await this.pokeApiService.getPokemonSpecieByNameOrId(name);

    const pokemon = PokemonMapper.buildPokemon({
      pokemonApiData,
      pokemonSpecieApiData,
    });

    return pokemon;
  }

  async findAll(query: queryPaginatedParams): Promise<PokemonOffsetType> {
    const pokemonPaginated =
      await this.pokeApiService.findAllPokemonPaginated(query);

    const pokemonOffsetPromises = pokemonPaginated.results.map((pokemon) => {
      return this.findOne(pokemon.name);
    });

    const pokemonOffset = await Promise.all(pokemonOffsetPromises);

    return {
      count: pokemonPaginated.count,
      next: pokemonPaginated.next,
      previous: pokemonPaginated.previous,
      results: pokemonOffset,
    };
  }
}
