import { Injectable } from '@nestjs/common';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';

@Injectable()
export class PokemonService {
  constructor(private readonly pokeApiService: PokeApiService) {}

  async findOne(name: string) {
    return this.pokeApiService.getPokemonByName(name);
  }
}
