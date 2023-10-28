import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PokeApiService } from 'src/shared/services/pokeapi/pokeApi.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [PokemonController],
  providers: [PokemonService, PokeApiService, CustomLoggerService],
})
export class PokemonModule {}
