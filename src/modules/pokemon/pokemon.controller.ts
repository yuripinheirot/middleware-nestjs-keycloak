import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly logger: CustomLoggerService,
    private readonly pokemonService: PokemonService,
  ) {}

  @Get(':name')
  async findOne(@Param('name') name: string) {
    try {
      return this.pokemonService.findOne(name);
    } catch (error) {
      this.logger.error(error.message);
    }
  }
}
