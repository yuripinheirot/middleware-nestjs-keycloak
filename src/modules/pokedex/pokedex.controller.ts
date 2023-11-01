import { Controller, Post } from '@nestjs/common';
import { PokedexService } from './pokedex.service';

@Controller('pokedex')
export class PokedexController {
  constructor(private readonly pokedexService: PokedexService) {}

  @Post()
  async addPokemon() {}
}
