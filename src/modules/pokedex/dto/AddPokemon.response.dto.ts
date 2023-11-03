import { Expose } from 'class-transformer';
import { PokedexItemType } from '../types/pokedex.type';

export class AddPokemonResponseDto {
  constructor(partial: Partial<PokedexItemType[]>) {
    this.pokedex = partial.map((p) => p.pokemonName);
  }

  @Expose()
  pokedex: string[];
}
