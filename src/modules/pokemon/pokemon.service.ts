import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonMapper } from './mappers/pokemon.mapper';
import { queryPaginatedParams } from 'src/shared/types/params.type';
import { PokemonOffsetResponseApiType } from 'src/shared/types/pokemonApi.type';

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

  async findAll(
    query: queryPaginatedParams,
  ): Promise<PokemonOffsetResponseApiType> {
    return this.pokeApiService.findAllPokemonPaginated(query);
  }
}
