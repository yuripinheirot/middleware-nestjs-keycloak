import { Exclude, Expose, Type } from 'class-transformer';
import {
  PokemonApiType,
  PokemonSpritesApiType,
} from 'src/shared/types/pokemonApi.type';

@Exclude()
export class PokemonSpritesApiDto implements PokemonSpritesApiType {
  @Expose()
  back_default: string;

  @Expose()
  back_female: string;

  @Expose()
  back_shiny: string;

  @Expose()
  back_shiny_female: string;

  @Expose()
  front_default: string;

  @Expose()
  front_female: string;

  @Expose()
  front_shiny: string;

  @Expose()
  front_shiny_female: string;
}

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

  @Expose()
  @Type(() => PokemonSpritesApiDto)
  sprites: PokemonSpritesApiType;
}
