import { Exclude, Expose } from 'class-transformer';
import { PokemonApiType } from 'src/shared/types/pokemon.type';

@Exclude()
export class PokemonApiDto implements PokemonApiType {
  constructor(partial: Partial<PokemonApiDto>) {
    Object.assign(this, partial);
  }

  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  species: {
    name: string;
    url: string;
  };
}
