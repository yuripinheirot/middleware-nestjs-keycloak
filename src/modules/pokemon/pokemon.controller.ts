import {
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { AxiosErrorsInterceptor } from 'src/shared/interceptors/express.interceptor';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Controller('pokemon')
@UseInterceptors(AxiosErrorsInterceptor)
@UseInterceptors(CacheInterceptor)
export class PokemonController {
  constructor(
    private readonly logger: CustomLoggerService,
    private readonly pokemonService: PokemonService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.logger.setPrefix(`@Controller('pokemon')`);
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.pokemonService.findOne(name);
  }
}
