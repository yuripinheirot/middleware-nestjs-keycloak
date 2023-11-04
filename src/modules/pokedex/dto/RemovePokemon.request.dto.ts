import { IsString } from 'class-validator';
import { AddPokemonRequestDtoType } from '../types/addPokemonDto.request.type';

export class RemovePokemonRequestDto implements AddPokemonRequestDtoType {
  @IsString()
  pokemonName: string;
}
