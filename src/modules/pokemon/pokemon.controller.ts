import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { AxiosErrorsInterceptor } from 'src/shared/interceptors/express.interceptor';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { queryPaginatedParams } from 'src/shared/types/params.type';
import { Resource, Unprotected } from 'nest-keycloak-connect';

@Controller('pokemon')
@Resource('PokeAPI')
@UseInterceptors(AxiosErrorsInterceptor)
@UseInterceptors(CacheInterceptor)
@Unprotected()
export class PokemonController {
  constructor(
    private readonly logger: CustomLoggerService,
    private readonly pokemonService: PokemonService,
  ) {
    this.logger.setPrefix(`@Controller('pokemon')`);
  }

  @Get(':pokemon')
  async findOne(@Param('pokemon') pokemon: string | number) {
    return this.pokemonService.findOne(pokemon);
  }

  @Get()
  async findAll(@Query() query: queryPaginatedParams) {
    return this.pokemonService.findAll(query);
  }
}
