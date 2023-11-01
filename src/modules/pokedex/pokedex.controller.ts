import { Controller, Post, UseGuards } from '@nestjs/common';
import { PokedexService } from './pokedex.service';
import { AuthGuard } from 'src/shared/guards/Authentication.guard';

@Controller('pokedex')
@UseGuards(AuthGuard)
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Post()
  async addPokemon() {}
}
