import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { PokeApiService } from './services/pokeapi/pokeApi.service';
import { CustomLoggerService } from './logger/logger.service';

@Global()
@Module({
  imports: [HttpModule],
  exports: [PokeApiService, HttpModule],
  providers: [PokeApiService, CustomLoggerService],
})
export class SharedModule {}
