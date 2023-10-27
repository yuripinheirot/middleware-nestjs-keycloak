import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { PokemonType } from './pokemon.type';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiService: PokeApiService) {}

  async findOne(name: string) {
    const pokemonApiData = await this.pokeApiService.getPokemonByNameOrId(name);

    const pokemonSpecieApiData =
      await this.pokeApiService.getPokemonSpecieByNameOrId(name);

    const pokemon: PokemonType = {
      id: pokemonApiData.id,
      name: pokemonApiData.name,
      description: pokemonSpecieApiData.flavor_text_entries[0].flavor_text,
    };

    return pokemon;
  }
}
