import { IsString } from 'class-validator';
import { AddPokemonRequestDtoType } from '../types/addPokemonDto.request.type';
import { ApiProperty } from '@nestjs/swagger';

export class AddPokemonRequestDto implements AddPokemonRequestDtoType {
  @ApiProperty()
  @IsString()
  pokemonName: string;
}
