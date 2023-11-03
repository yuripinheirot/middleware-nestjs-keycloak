import { IsString } from 'class-validator';
import { AddPokemonRequestDtoType } from '../types/addPokemonDto.request.type';

export class AddPokemonRequestDto implements AddPokemonRequestDtoType {
  @IsString()
  pokemonName: string;
}
