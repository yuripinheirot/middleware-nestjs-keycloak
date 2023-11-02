import { IsNumber } from 'class-validator';
import { AddPokemonRequestDtoType } from '../types/AddPokemonDto.request.type';

export class AddPokemonRequestDto implements AddPokemonRequestDtoType {
  @IsNumber()
  pokemonId: number;
}
