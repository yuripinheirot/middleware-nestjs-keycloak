import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { AuthenticatedUser, Resource } from 'nest-keycloak-connect';
import { UserAuthenticatedType } from 'src/shared/types/keycloak.type';
import { AddPokemonRequestDto } from './dto/AddPokemon.request.dto';
import { PokedexResponseDto } from './dto/Pokedex.response.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth('Authorization')
@Resource('Pokedex')
@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Get()
  async getPokedex(@AuthenticatedUser() user: UserAuthenticatedType) {
    const pokedex = await this.pokedexService.getPokedex(user.sub);

    return new PokedexResponseDto(pokedex);
  }

  @Post()
  async addPokedex(
    @AuthenticatedUser() user: UserAuthenticatedType,
    @Body(new ValidationPipe()) body: AddPokemonRequestDto,
  ) {
    const pokedex = await this.pokedexService.addPokedex(user.sub, body);

    return new PokedexResponseDto(pokedex);
  }

  @Delete(':pokemonName')
  async removePokedex(
    @AuthenticatedUser() user: UserAuthenticatedType,
    @Param('pokemonName') pokemonName: string,
  ) {
    if (!pokemonName) {
      throw new BadRequestException('Invalid param :pokemonName');
    }

    const pokedex = await this.pokedexService.removePokedex(
      user.sub,
      pokemonName,
    );

    return new PokedexResponseDto(pokedex);
  }
}
