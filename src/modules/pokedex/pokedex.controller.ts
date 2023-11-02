import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { AuthenticatedUser } from 'nest-keycloak-connect';
import { UserAuthenticatedType } from 'src/shared/types/keycloak.type';
import { AddPokemonRequestDto } from './dto/AddPokemon.request.dto';

@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Post()
  async addPokemon(
    @AuthenticatedUser() user: UserAuthenticatedType,
    @Body(new ValidationPipe()) body: AddPokemonRequestDto,
  ) {
    return this.pokedexService.addPokemon(user.sub, body);
  }

  @Get()
  async getPokedex(@AuthenticatedUser() user: UserAuthenticatedType) {
    return this.pokedexService.getPokedex(user.sub);
  }
}
