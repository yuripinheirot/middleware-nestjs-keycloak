import { Exclude, Expose } from 'class-transformer';
import {
  PokemonSpecieApiType,
  flavorTextEntriesType,
} from 'src/shared/types/pokemonApi.type';

@Exclude()
export class PokemonSpecieApiDto implements PokemonSpecieApiType {
  constructor(partial: Partial<PokemonSpecieApiDto>) {
    Object.assign(this, partial);
  }

  @Expose()
  flavor_text_entries: flavorTextEntriesType[];
}
