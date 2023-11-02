import { Expose } from 'class-transformer';
import { PokedexType } from '../types/Pokedex.type';

export class AddPokemonResponseDto {
  constructor(partial: Partial<PokedexType[]>) {
    this.pokedex = partial.map((p) => p.pokemonId);
  }

  @Expose()
  pokedex: number[];
}
