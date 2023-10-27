import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { AxiosErrorsInterceptor } from 'src/shared/interceptors/express.interceptor';

@Controller('pokemon')
@UseInterceptors(AxiosErrorsInterceptor)
export class PokemonController {
  constructor(
    private readonly logger: CustomLoggerService,
    private readonly pokemonService: PokemonService,
  ) {
    this.logger.setPrefix(`@Controller('pokemon')`);
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.pokemonService.findOne(name);
  }
}
