import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonMapper } from './mappers/pokemon.mapper';

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
}
